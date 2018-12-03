Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :show, :create, :destroy]
  resources :cards, only: [:index, :show]
  resources :readings, only: [:index, :show, :create]

  post '/auth', to: 'auth#create'
end
