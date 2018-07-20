class User < ApplicationRecord
# has_secure_password

# validates :email, :password, presence: true
# validates :email, uniqueness: true

has_many :readings

# has_many :user_decks
# has_many :decks, through: :user_decks

# def self.from_token_payload payload
#     payload['sub']
#   end

end
