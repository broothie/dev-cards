require 'google/cloud/firestore'

class Game
  attr_accessor :code
  attr_accessor :deck
  attr_accessor :discard
  attr_accessor :players

  class Error < StandardError; end
  class NotFoundError < Error; end

  GAMES = Google::Cloud::Firestore
    .new(project_id: 'catan-274322', credentials: 'catan.json')
    .collection('games')

  def initialize(code:, deck:, discard: [], players: [])
    @code = code
    @deck = deck
    @discard = discard
    @players = players
  end

  def draw(player)
    raise 'invalid player' unless player_exists?(player)
    return nil if deck.empty?

    card = deck.pop
    discard.push(player => card)
    save!

    card
  end

  def add_player(player)
    raise 'player already exists' if player_exists?(player)
    players << player
    save!
  end

  def player_exists?(player)
    players.include?(player)
  end

  def player_counts
    discard.each_with_object(Hash.new(0)) do |discard, counts|
      counts[discard.keys.first] += 1
    end
  end

  def save!
    GAMES.doc(code).set(data)
  end

  def data
    { code: code, deck: deck, discard: discard, players: players }
  end

  class << self
    def create(type = 'original')
      code = new_game_code
      cards = type == 'expansion' ? expansion_dev_cards : original_dev_cards

      game = new(code: code, deck: shuffle(cards))
      game.save!

      game
    end

    def get(code)
      data = GAMES.doc(code).get.data
      raise NotFoundError unless data
      new(data)
    end

    private

    def shuffle(dev_cards)
      deck = []
      dev_cards.each do |card, count|
        count.times { deck << card }
      end

      deck.shuffle
    end

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
end
