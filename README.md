# untumble

Creates an HTML page that displays up to 1000 of your most recently liked posts gallery style.
Posts may end up out of order occasionally.

[Screenshot of final HTML page](http://i.imgur.com/wZpRF6X.png?1)

## How to use
**Requirements:** nodejs, npm

Get an [OAuth key from Tumblr](www.tumblr.com/oauth/apps).
(Fill the application website and default callback URL fields with a throwaway such as localhost.me.)

Run:
1. `git clone https://github.com/gvn/untumble.git`
2. `cd untumble`
3. `npm install` (to install async and tumblr.js)

Copy `env.json.dist` to `env.json` and fill in your credentials.

Run `node untumble.js >> FILENAME.html` and wait 0-22 seconds, depending on how many likes you have.

Open FILENAME.html in your browser.

### References
https://github.com/gvn/hoardr
https://github.com/Dixin/CodeSnippets/tree/master/Dixin.Nodejs

