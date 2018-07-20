Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:index, :show, :create, :destroy]
  resources :cards, only: [:index, :show]

  # post '/users', to: 'users#create'
end
