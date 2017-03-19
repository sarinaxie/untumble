# untumble

Retrieves your liked posts so you can view them in gallery format.

[Screenshot of final HTML page](http://i.imgur.com/wZpRF6X.png?1)

## How to use
Requirements: nodejs, npm

Get an [OAuth key from Tumblr](www.tumblr.com/oauth/apps).
(Fill the application website and default callback URL fields with a throwaway such as localhost.me.)

Run:
1. `git clone https://github.com/gvn/untumble.git`
2. `cd untumble`
3. `npm install` (to install tumblr.js)

Copy `env.json.dist` to `env.json` and fill in your credentials.

Run `node untumble.js` and copy the output into the body of an HTML file.

### References
github.com/gvn/hoardr
github.com/Dixin/CodeSnippets/tree/master/Dixin.Nodejs
