require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "should get home" do
  	get :home
  	assert_response :success
  	assert_select "title", "Home"
  end
  test "should get left" do
  	get :left
  	assert_response :success
  	assert_select "title", "Inventory"
  end
  test "should get services" do
  	get :services
  	assert_response :success
	assert_select "title", "Services"
  end
  test "should get schedule-test" do
  	get :schedule_test
  	assert_response :success
  	assert_select "title", "Schedule Test Drive"
  end
  test "should get contact-us" do
  	get :contact_us
  	assert_response :success
  	assert_select "title", "Contact Us"
  end
  test "should get schedule-sales" do
  	get :schedule_sales
  	assert_response :success
  	assert_select "title", "Schedule Sales Appointment"
  end
  test "should get thank-you" do
  	get :thank_you
  	assert_response :success
  	assert_select "title", "Thank You Form Submission"
  end
  test "should get login" do
  	get :login
  	assert_response :success
  	assert_select "title", "Login"
  end
  test "should get sign-up" do
  	get :sign_up
  	assert_response :success
  	assert_select "title", "Sign Up"
  end

end
