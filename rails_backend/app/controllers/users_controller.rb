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
        end
    end

end

# PARAMS 
# user_name = params['user']['user_name']
# email = params['user']['email']
# password = params['user']['password']

# RESPONSE 
# [1] pry(#<UsersController>)> params
# => <ActionController::Parameters {"user"=><ActionController::Parameters {"user_name"=>"name", "password"=>"pass", "email"=>"email"} permitted: false>, "controller"=>"users", "action"=>"create"} permitted: false>