class ReadingsController < ApplicationController

    def index
        # @readings = Reading.all.where(user === currentUser)
    end

    def show
        # @user = User.all.find(params[:user][:id])

    end

    def create
        byebug

        # @user = currentUser
        # @reading = @user.readings.push(params[:reading])
    end

    # def card_params
    #     params.require(:readingCards).permit(:user, readingCards)
    # end

    # def currentUser
    #     @user = current_user
    # end

end