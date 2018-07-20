class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.create(name: user_params['userName'], email: user_params['userEmail'], password: user_params['password'])
        # byebug
    end

    def user_params
        params.require(:user).permit(:userName, :userEmail, :password)
    end

end

# name: params[:user_name], email: params[:user_email], password: params[:password]