module api
    module v1
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
                    @userReadings.push({readingName: reading.reading_name, readingCards: [*reading.cards]})
        
                end
        
                render json: @userReadings
            end

            def create
                @user
            end

        end
    end
end