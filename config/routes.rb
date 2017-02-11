Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    resources :gradients, only: [:index, :create]
  end
end
