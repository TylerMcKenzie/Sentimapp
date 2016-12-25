Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#angular'

  post '/call' => 'alchemy#call_api'

  # Keep users on angular app and where they were, like a gentleman.
  get '/*path' => redirect("#/%{path}")
end
