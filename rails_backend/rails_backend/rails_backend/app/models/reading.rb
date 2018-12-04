class Reading < ApplicationRecord
    has_many :reading_cards
    has_many :cards, through: :reading_cards

    belongs_to :user
end