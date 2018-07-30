class ReadingsController < ApplicationController

    def index
        # @readings = Reading.all.where(user === currentUser)
        @user = User.all.find(params[:user][:id])
        @readings = Reading.where(:user_id => params[:user][:id])
        
        render json: @readings
    end

    def show
        # @user = User.all.find(params[:user][:id])

    end

    def create
        # Update the reading_name to have a better version of the Date Time with strftime
        @reading = Reading.new(reading_name: "#{params[:user][:name]} - #{DateTime.now}")

        @user = User.all.find(params[:user][:id])
        @cards = params[:readingCards]
        @reading.user = @user

        @cards.each do |card| 
            @card = Card.all.find(card[:id])
            @reading.cards.push(@card)
        end

        @reading.save
 
        render json: @reading
    end

    # def card_params
    #     params.require(:readingCards).permit(:user, readingCards)
    # end

    # def currentUser
    #     @user = current_user
    # end

end