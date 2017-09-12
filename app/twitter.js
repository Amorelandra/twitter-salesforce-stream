let Twitter = require('twit');

const consumer_key = process.env.TWITTER_CONSUMER_KEY;
const consumer_secret = process.env.TWITTER_CONSUMER_SECRET;
const access_token = process.env.TWITTER_ACCESS_TOKEN;
const access_token_secret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
const search_string = process.env.TWITTER_SEARCH_STRING;

if (!consumer_key) { missing("TWITTER_CONSUMER_KEY"); }
if (!consumer_secret) { missing("TWITTER_CONSUMER_SECRET"); }
if (!access_token) { missing("TWITTER_ACCESS_TOKEN"); }
if (!access_token_secret) { missing("TWITTER_ACCESS_SECRET"); }
if (!search_string) { missing("TWITTER_SEARCH_STRING"); }

const track = search_string.split(',');

let twitter = new Twitter({

    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
    
});

module.exports = { twitter, track };
