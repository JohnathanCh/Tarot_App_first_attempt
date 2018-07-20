class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.create(name: user_params['user_name'], email: user_params['user_email'], password: user_params['password'])
        # byebug
    end

    def user_params
        params.require(:user).permit(:user_name, :user_email, :password)
    end

end

# name: params[:user_name], email: params[:user_email], password: params[:password]