# twitter-salesforce-stream
Stream tweets into Salesforce via Platform Events


## Install
1. Clone this repository
1. Type `npm init`

## Configure

You will need the following environment variables:

### Twitter
1. TWITTER_CONSUMER_KEY -- Twitter app key
1. TWITTER_CONSUMER_SECRET -- Twitter app secret
1. TWITTER_ACCESS_TOKEN -- Twitter client token
1. TWITTER_ACCESS_TOKEN_SECRET -- Twitter client secret
1. TWITTER_SEARCH_STRING -- Search keywords, comma separated

### Salesforce
1. SALESFORCE_CLIENT_ID -- Salesforce Connected App ID
1. SALESFORCE_CLIENT_SECRET -- Salesforce Connected App secret
1. SALESFORCE_USERNAME -- Your Salesforce username
1. SALESFORCE_PASSWORD -- Your Salesforce password
1. SALESFORCE_SECURITY_TOKEN -- Your Salesforce security token

If you're deploying with Heroku, just throw these variables into an .env file in the project base directory and use `heroku local` to launch the app with all of the env vars automatically set!

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
```
