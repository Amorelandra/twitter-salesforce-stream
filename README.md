# twitter-salesforce-stream
Stream tweets into Salesforce via Platform Events

NOTE: This project requires a [Twitter app](https://apps.twitter.com/).

## Install
1. Type `git clone git@github.com:Amorelandra/twitter-salesforce-stream.git`
1. Type `cd twitter-salesforce-stream`
1. Type `npm install`

## Configure

You will need the following environment variables:

### Twitter
1. __TWITTER_CONSUMER_KEY__ -- Twitter app key
1. __TWITTER_CONSUMER_SECRET__ -- Twitter app secret
1. __TWITTER_ACCESS_TOKEN__ -- Twitter client token
1. __TWITTER_ACCESS_TOKEN_SECRET__ -- Twitter client secret
1. __TWITTER_SEARCH_STRING__ -- Search keywords, comma separated

### Salesforce
1. __SALESFORCE_CLIENT_ID__ -- Salesforce Connected App ID
1. __SALESFORCE_CLIENT_SECRET__ -- Salesforce Connected App secret
1. __SALESFORCE_USERNAME__ -- Your Salesforce username
1. __SALESFORCE_PASSWORD__ -- Your Salesforce password
1. __SALESFORCE_SECURITY_TOKEN__ -- Your Salesforce security token

### Node.js
1. __NODE_ENV__ -- Use `production` for production, or `sandbox` for scratch orgs

If you're deploying with Heroku, just throw these variables into an .env file in the project base directory and use `heroku local` to launch the app.

Here's a template to copy/paste (or you can rename `.exampleenv` in this project to `.env`):
```code
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=
TWITTER_ACCESS_TOKEN=
TWITTER_ACCESS_TOKEN_SECRET=
TWITTER_SEARCH_STRING=
SALESFORCE_CLIENT_ID=
SALESFORCE_CLIENT_SECRET=
SALESFORCE_USERNAME=
SALESFORCE_PASSWORD=
SALESFORCE_SECURITY_TOKEN=
NODE_ENV=
```

## Run
1. Type `npm start`
