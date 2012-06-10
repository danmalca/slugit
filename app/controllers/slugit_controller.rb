
class SlugitController < ApplicationController
  def show
	  input = params[:slug] ? params[:slug][:in] :  params[:original]  
	  logger.debug "Person attributes hash: #{input}" 
          @slug = Slug.where(:in => input).first_or_initialize() unless  input.nil?
	  if @slug and  @slug.new_record?
		  # very naive approach - need to support i18n
		  @slug.out =  input.downcase.gsub(/[^a-z0-9]+/, ' ').squeeze(" ").strip.gsub(/ /, '-')
		  @slug.save
	  end

	  respond_to do |format|
		  format.html # index.html.erb
		  format.json { render :json => @slug}
	  end
	  
  end
end
