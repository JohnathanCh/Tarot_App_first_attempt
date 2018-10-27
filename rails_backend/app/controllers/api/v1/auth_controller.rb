module api
    module v1
        class AuthController < ApplicationController

            def create
                # byebug
                user = User.find_by(email: params[:user_email])
                if user && user.authenticate(params[:password])
                  token = encoded_token(user)
                  render json: {username: user.name, id: user.id, jwt: token}, status: 200
                else
                  render json: {error: 'Username or Password Invalid'}, status: 401
                end
              end
            
              def show
                # byebug
                if logged_in
                  render json: {username: current_user.username, id: current_user.id}, status: 200
                else
                  render json: {error: 'Token Invalid'}, status: 401
                end
              end


        end
    end
end
