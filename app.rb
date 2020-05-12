require 'sinatra'
require 'sinatra/reloader' if development?
require 'google/cloud/firestore'
require 'sinatra/json'
require 'json'

require_relative 'game'

before do
  headers 'Access-Control-Allow-Origin' => '*'
end

get '/' do
  redirect 'https://andrewbooth.xyz/dev-cards'
end

post '/games' do
  game = Game.create(params['type'])
  json code: game.code
end

get '/games/:code' do |code|
  game = Game.get(code)
  bail 404, 'game not found' unless game

  json code: game.code, remaining: game.deck.count
end

get '/games/:code/draw' do |code|
  game = Game.get(code)
  bail 404, 'game not found' unless game

  card = game.draw!
  bail 404, 'no cards left' unless card

  json card: card
end

helpers do
  def bail(status, message, rest = {})
    halt status, { message: message }.merge(rest).to_json
  end
end

