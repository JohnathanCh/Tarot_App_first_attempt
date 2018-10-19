class User < ApplicationRecord
    validates :username, presence: true
    validates :username, length: { in: 4..15, too_long: "Please keep your username between 4 and 15 characters" }
    
    validates :email, presence: true
    validates :email, length: { maximum: 40, too_long: "If that's truly your email, you may want to think about creating a shorter one for this app."}

    has_many: reading_cards
    has_many: readings, through:reading_cards
end
