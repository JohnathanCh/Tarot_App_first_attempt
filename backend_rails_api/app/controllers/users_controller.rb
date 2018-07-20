class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def create
        @user = User.create(name: params[:user_name], email: params[:user_email], password: params[:password])
        # byebug
    end


end
