class AlchemyController < ApplicationController
  respond_to :json

  def call_api
    api = AlchemyApi.new(params)

    if user_signed_in?
      sample = api.format_sample_user(current_user)
    else
      sample = api.format_sample_empty
    end

    respond_with JSON.parse(sample.to_json(include: :keywords)), location: ''
  end

end