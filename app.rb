require 'sinatra'
require 'sinatra/reloader' if development?
require 'google/cloud/firestore'

helpers do
  def original_dev_cards
    {
      'Knight' => 14,

      # Progression cards
      'Monopoly' => 2,
      'Road Building' => 2,
      'Year of Plenty' => 2,

      # Victory points
      'Chapel' => 1,
      'Library' => 1,
      'Market' => 1,
      'Palace' => 1,
      'University' => 1
    }
  end

  def expansion_dev_cards
    dev_cards = original_dev_cards

    dev_cards['Knight'] += 6
    dev_cards['Road Building'] += 1
    dev_cards['Monopoly'] += 1
    dev_cards['Year of Plenty'] += 1

    dev_cards
  end

  def shuffle(dev_cards)
    deck = []
    dev_cards.each do |card, count|
      count.times { deck << card }
    end

    deck.shuffle
  end

  def games
    @games ||= Google::Cloud::Firestore
      .new(project_id: 'catan-274322', credentials: 'catan.json')
      .collection('games')
  end

  def new_game_code
    alpha_code_chunk + number_code_chunk
  end

  def alpha_code_chunk
    Array.new(3) { ('a'..'z').to_a.sample }.join
  end

  def number_code_chunk
    Array.new(3) { ('0'..'9').to_a.sample }.join
  end
end

not_found do
  redirect '/'
end

get '/' do
  erb :'index.html'
end

post '/new' do
  game_code = new_game_code

  dev_cards = params['type'] == 'expansion' ? expansion_dev_cards : original_dev_cards
  games.doc(game_code).set(deck: shuffle(dev_cards), discard: [])

  redirect "/game/#{game_code}"
end

post '/game/find' do
  @game_code = params[:game_code].downcase

  game = games.doc(@game_code).get.data
  if game
    redirect "/game/#{@game_code}"
  else
    erb :'missing_game.html'
  end
end

get '/game/:game_code' do |game_code|
  @game_code = game_code.downcase

  game = games.doc(@game_code).get.data
  deck = game[:deck]
  @remaining = deck.count

  erb :'game.html'
end

post '/game/:game_code/development_card' do |game_code|
  game_code = game_code.downcase

  game = games.doc(game_code).get.data
  redirect '/' unless game

  deck, discard = game.values_at(:deck, :discard)
  card = deck.pop
  discard.push(card)
  games.doc(game_code).set(deck: deck, discard: discard)

  redirect "/game/#{game_code}/development_card?card=#{card}"
end

get '/game/:game_code/development_card' do |game_code|
  @game_code = game_code.downcase
  @card = params[:card]
  redirect "/game/#{@game_code}" unless @card

  erb :'development_card.html'
end
