#PDX Women in Tech State of the Community Survey Results#

This repo contains the PDXWIT State of the Community Survey Results website.

## Description

The State of the Community survey is in it's second year. The survey annually measures the specific challenges community faces in Portland's tech industry.  
Visit https://stateofthecommunity.pdxwit.org/

---

## Setup

`git clone https://github.com/PDXWIT/pdxwit-stateofthecommunity.git`  
 You may need to install Homebrew if not already
`brew install rbenv`  
 Install the version of ruby to use (eg 2.5.0)
`rbenv install 2.5.0`
Check that the ruby version is correct
`ruby -v` should say 2.5.0   
Install the version of bundler that is required (eg 1.16.2)
`gem install bundler -v 1.16.2`  
`bundle install`  


## Serving the site

`jekyll build --watch`  
Navigate to the `_site/index.html` document  

## Clone the repo in Heroku

`heroku git:remote -a pdxwit-survey-2018-staging`  

## Deploy changes to Heroku

`git push heroku master`  
Navigate to https://stateofthecommunity.pdxwit.org/  
* Note: The heroku app is called staging but it's the production site. We were going to host production on Bluehost but decided Heroku was good enough.  
