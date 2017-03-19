# untumble

Retrieves your liked posts so you can view them in gallery format.

[Screenshot of final HTML page](http://i.imgur.com/wZpRF6X.png?1)

## How to use
Requirements: nodejs, npm

Get an [OAuth key from Tumblr](www.tumblr.com/oauth/apps).
(Fill the application website and default callback URL fields with a throwaway such as localhost.me.)

Run:
`git clone https://github.com/gvn/untumble.git`
`cd untumble`
`npm install` (to install tumblr.js)

Fill in your credentials and make any other changes you'd like.

Run:
`node untumble.js`

Copy the output into the body of an HTML file.
