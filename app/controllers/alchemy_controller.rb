class AlchemyController < ApplicationController
  respond_to :json

  def call_api
    response = AlchemyApi.new(params)
    respond_with response.call
  end

end