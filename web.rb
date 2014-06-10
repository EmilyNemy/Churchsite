require 'sinatra'
set :public_folder, 'public'

get '/' do
    erb :index
end

get '/events' do
	erb :events
end

get '/youth' do
	erb :youth	
end

get '/store' do
	erb :store
end

get '/contact' do	
	erb :contact
end
