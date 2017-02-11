source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'angularjs-rails', '~> 1.6.1'
gem 'babel-schmooze-sprockets', '~> 0.1.3'
gem 'mongoid', '~> 6.1.0'
gem 'lodash-rails', '~> 4.17.4'
gem 'jquery-rails'
gem 'puma', '~> 3.0'
gem 'rails', '~> 5.0.1'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

group :development, :test do
  gem 'pry', '~> 0.10.4'
end

group :development do
  gem 'listen', '~> 3.1.5'
end
