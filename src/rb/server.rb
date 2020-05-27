require 'sinatra'
require 'sinatra/reloader' if development?
require 'sinatra/json'
require 'json'
require_relative 'game'

before do
  headers 'Access-Control-Allow-Origin' => '*'
  headers 'Access-Control-Allow-Methods' => '*'
end

options('*') { 200 }

get '/' do
  redirect 'https://andrewbooth.xyz/dev-cards'
end

# Create a game
post '/games' do
  game = Game.create(params['type'])
  json code: game.code
end

# Join a game
patch '/games/:code' do |code|
  code.downcase!

  game = Game.get(code)
  bail 404, "no game found for '#{code}'" unless game

  player = params['player']
  game.add_player(player) unless game.player_exists?(player)
end

# Get a game
get '/games/:code' do |code|
  code.downcase!

  game = Game.get(code)
  bail 404, "no game found for '#{code}'" unless game

  json remaining: game.deck.size, player_counts: game.player_counts
end

# Draw a card
get '/games/:code/draw' do |code|
  code.downcase!

  game = Game.get(code)
  bail 404, "no game found for '#{code}'" unless game

  player = params['player']
  bail 422, 'missing player' unless game.player_exists?(player)

  card = game.draw(player)
  bail 404, 'no cards left' unless card

  json card: card
end

helpers do
  def bail(status, message, rest = {})
    halt status, { message: message }.merge(rest).to_json
  end
end
