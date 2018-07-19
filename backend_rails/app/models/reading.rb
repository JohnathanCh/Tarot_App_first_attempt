class Reading < ApplicationRecord
belongs_to :user

has_many :readings_cards
has_many :cards, through: :readings_cards
# has_and_belongs_to_many :cards
end