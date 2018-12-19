require 'pry'


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
            @userReadings.push({readingName: reading.reading_title, readingCards: [*reading.cards]})

        end

        render json: @userReadings
    end

    def create
        @user = User.new({user_name: params['user']['user_name'], email: params['user']['email'], password: params['user']['password']})

        # binding.pry

        if @user.save
            puts("NEW USER WAS CREATED")
            @token = encoded_token(@user)
        end

        render json: {user_name: @user.user_name, id: @user.id, email: @user.email, jwt: token}
    end

end

# def create
#     user = User.find_by(username: params[:username])
#     if user && user.authenticate(params[:password])
#       token = encoded_token(user)
#       render json: {username: user.username, id: user.id, jwt: token}, status: 200
#     else
#       render json: {error: 'Username or Password Invalid'}, status: 401
#     end
#   end

#   def show
#     if logged_in
#       render json: {username: current_user.username, id: current_user.id}, status: 200
#     else
#       render json: {error: 'Token Invalid'}, status: 401
#   end


# PARAMS 
# user_name = params['user']['user_name']
# email = params['user']['email']
# password = params['user']['password']

# RESPONSE 
# [1] pry(#<UsersController>)> params
# => <ActionController::Parameters {"user"=><ActionController::Parameters {"user_name"=>"name", "password"=>"pass", "email"=>"email"} permitted: false>, "controller"=>"users", "action"=>"create"} permitted: false>