class AssetsController < ApplicationController
include Databasedotcom::Rails::Controller
	def index
		@assets = Asset.all()[0..19]
	end

	def show
		@asset = Asset.find(params[:id])
	end
end