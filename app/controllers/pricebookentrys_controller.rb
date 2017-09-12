class PricebookentrysController < ApplicationController
	
include Databasedotcom::Rails::Controller
	def index
		@pricebookentrys = PricebookEntry.all()
	end
	def realhyundai
		@pricebookentrys = PricebookEntry.all()
	end
	def model
		
	end

	def show
		@pricebookentry = PricebookEntry.find(params[:id])
	end
	
	def honda
		@pricebookentrys = PricebookEntry.all()
	end
	def acura
		@pricebookentrys = PricebookEntry.all()
	end
end