class UsersController < ApplicationController

    def index
        @users = User.all
        render json: @users
    end

    def create
        # @user = User.create(name: params[:name], email: params[:email])
        byebug
    end


end
