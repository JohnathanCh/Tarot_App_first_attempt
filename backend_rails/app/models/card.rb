class Card < ApplicationRecord

has_many :readings_cards
has_many :readings, through: :readings_cards
# has_and_belongs_to_many :readings
end