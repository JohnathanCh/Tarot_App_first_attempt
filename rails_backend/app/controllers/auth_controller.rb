require 'pry'

class AuthController < ApplicationController

    def create
        # byebug
        binding.pry
        @user = User.find_by(email: params['email'])
        if @user && @user.authenticate(params[:password])
          @token = encoded_token(@user)
          render json: {user_name: @user.name, id: @user.id, jwt: @token}, status: 200
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
