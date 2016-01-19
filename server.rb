require 'rubygems'
require 'sinatra'

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/book/:id' do
  erb :book, {:locals => {:id => params[:id]}}
end
