module api
    module v1
        class ReadingsController < ApplicationController

            def index
                # @readings = Reading.all.where(user === currentUser)
                @user = User.all.find(params[:user][:id])
                @readings = Reading.where(:user_id => params[:user][:id])
                
                render json: @readings
            end

            def create
                # Update the reading_title to have a better version of the Date Time with strftime
                # %b %e %Y %I %p
                @reading = Reading.new(reading_title: "#{params[:user][:name]} - #{DateTime.now.strftime("%b%e %Y %I%p")}")
                @user = User.all.find(params[:user][:id])
                @cards = params[:readingCards]
                @reading.user = @user
        
                @cards.each do |card| 
                    @card = Card.all.find(card[:id])
                    @reading.cards.push(@card)
                end

                @reading.save
 
                render json: @reading
            end


        end
    end
end
