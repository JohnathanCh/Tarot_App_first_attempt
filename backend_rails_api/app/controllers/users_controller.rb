class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def show
        
        @user = User.all.find(params[:id])
        @readings = @user.readings

        @userReadings = []
        @readings.each do |reading|

            @userReadings.push({readingName: reading.reading_name, readingCards: [*reading.cards]})

        end

        render json: @userReadings
    end

    def create
        @user = User.create(name: user_params['userName'], email: user_params['userEmail'], password: user_params['password'])
        render json: @user
    end

    def user_params
        params.require(:user).permit(:userName, :userEmail, :password)
    end

end

# name: params[:user_name], email: params[:user_email], password: params[:password]