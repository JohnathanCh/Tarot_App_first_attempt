class User < ApplicationRecord
    validates :user_name, presence: true
    validates :user_name, length: { in: 4..15, too_long: "Please keep your user_name between 4 and 15 characters" }
    
    validates :email, presence: true
    validates :email, length: { maximum: 40, too_long: "If that's truly your email, you may want to think about creating a shorter one for this app."}

    has_many :readings

    has_secure_password
end
