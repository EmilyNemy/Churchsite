require 'sinatra'
set :public_folder, 'public'

get '/' do
    erb :index
end

get '/events' do
	erb :events
end