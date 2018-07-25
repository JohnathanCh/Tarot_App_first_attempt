class CardsController < ApplicationController

    def index 
        @cards = Card.all.sort_by{|card| card.id}

        render json: @cards
    end

    def show
        @card = Card.find(params[:id])
        render json: @card
    end

end