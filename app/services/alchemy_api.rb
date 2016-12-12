class AlchemyApi
  attr_accessor :response

  def initialize(params)
    # Just work with content for now, sort later
    @sample_name = params[:name]
    @content = params[:text]
  end

  def format_sample_user(user)

    call_api

    if @response["statusInfo"] == "content-is-empty"
      return false
    elsif @response["statusInfo"] == "invalid-api-key"
      p "++++++ FUCKING INVALID APIKEY DOUCHEBAG ++++++"
    else
      @sample = Sample.new( content: @response['text'], name: @sample_name , user_id: user.id)
      create_keywords
      @sample.save
      return @sample
    end
  end

  def format_sample_empty
    call_api
    if @response["statusInfo"] == "content-is-empty"
      return false
    elsif @response["statusInfo"] == "invalid-api-key"
      p "++++++ FUCKING INVALID APIKEY DOUCHEBAG ++++++"
    else
      @sample = Sample.new( content: @response['text'], name: @sample_name )
      create_keywords
      return @sample
    end
  end

  private

  def call_api
    @response = HTTParty.post("http://access.alchemyapi.com/calls/text/TextGetRankedKeywords",
      :query => {
               :apikey => ENV['ALCHEMY_SECRET'],
               :text => @content,
               :showSourceText => 1,
               :outputMode => 'json',
               :maxRetrieve => 150,
               :sentiment => 1
             },
      :headers => { 'Content-Type' => 'application/x-www-form-urlencoded' } )

  end


  def create_keywords
    keywords = @response["keywords"]
    keywords.each do |keyword|
      @sample.keywords << Keyword.new({
          text: keyword["text"],
          sentiment_type: keyword["sentiment"]["type"],
          sentiment_score: keyword["sentiment"]["score"],
          gender: GenderDetector.detect(keyword["text"]),
        })
    end
  end

end