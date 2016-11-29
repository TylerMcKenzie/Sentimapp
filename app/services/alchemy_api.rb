class AlchemyApi
  attr_accessor :response

  def initialize(params)
    # Just work with content for now, sort later
    @content = params[:content]
  end

  def call
    response = HTTParty.post("http://access.alchemyapi.com/calls/text/TextGetRankedKeywords",
      :query => {
               :apikey => ENV['ALCHEMY_SECRET'],
               :text => @content,
               :showSourceText => 1,
               :outputMode => 'json',
               :maxRetrieve => 150,
               :sentiment => 1
             },
      :headers => { 'Content-Type' => 'application/x-www-form-urlencoded' } )
    return response
  end

end