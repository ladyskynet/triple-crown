class PricebookEntrysController < ApplicationController

	include Databasedotcom::Rails::Controller

	def index
		@pricebookentrys = PricebookEntry.all()[0..19]
	end

	def show
		@pricebookentry = PricebookEntry.find(params[:id])
	end
end
