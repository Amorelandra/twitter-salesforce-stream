global.exit = function exit(code, msg) { console.log(`ERROR: ${msg}`); process.exit(code || 1); }
global.missing = function missing(variable) { exit(1, `${variable} environment variable required.`); }

let { twitter, track } = require('./app/twitter');
let { org, force } = require('./app/salesforce');

let tweetStream = twitter.stream('statuses/filter', { track });

tweetStream.on('tweet', (tweet) => {
    if(!org.authenticated) { return; }

    let link = '';
    
    if (typeof tweet.retweeted_status === "object") {
        link = `https://twitter.com/${tweet.retweeted_status.user.screen_name}/status/${tweet.retweeted_status.id_str}`;
    }
    else {
        link = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
    }
    
    let event = force.createSObject('Tweet__e');
    event.set('body__c', tweet.text);
    event.set('username__c', tweet.user.screen_name);
    event.set('tweet_url__c', link);

    org.insert({ sobject: event }, (err) => {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        else {
            console.log('Tweet published from', tweet.user.screen_name);
        }
    })
});
