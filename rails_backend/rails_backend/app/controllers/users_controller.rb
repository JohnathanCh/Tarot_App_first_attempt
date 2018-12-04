require 'pry'

# module api
#     module v1
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

                binding.pry

                # if @user.save
                # end
            end

        end
#     end
# end

# PARAMS 
# user_name = params['user']['user_name']
# email = params['user']['email']
# password = params['user']['password']