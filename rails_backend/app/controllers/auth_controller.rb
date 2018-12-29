require 'pry'

class AuthController < ApplicationController

    def create
        # byebug
        @user = User.find_by(email: params['email'])
        # binding.pry

        if @user
          @token = encoded_token(@user)
          render json: {user_name: @user.user_name, first_name: @user.first_name, last_name: @user.last_name, id: @user.id, jwt: @token}, status: 200
        else
          render json: {error: 'user_name or Password Invalid'}, status: 401
        end
      end
    
      def show
        # byebug
        if logged_in
          render json: {user_name: current_user.user_name, id: current_user.id}, status: 200
        else
          render json: {error: 'Token Invalid'}, status: 401
        end
      end

end

# TEST USER
# [["user_name", "john"], ["email", "john@mail.com"], ["password", "password"]


# (@user.password === params['password'])