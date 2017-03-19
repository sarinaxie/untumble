// Authenticate via OAuth
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'opP94wlM6ynKYTraxEBPe2NIAWsOIYoKkmHWpd92ShkIwtTLJZ',
  consumer_secret: 'oLfuN18xwHoqXwUL1tQI9PVgHdpnNmrtHPfSv5HDSgtB7CxSJX',
  token: 'ueNB27z7f8hz7EaIMdmNUYVtzQawTiIopFBOnM6UdujMa9cnWw',
  token_secret: 'xuTGG4A0GjiJEGcoBzbFx6JKOmFJHCRPeyjQ60AbFibLoxlyp9'
});

function getLikes(after) {
// Make the request
client.userLikes({limit: 1}, function (err, data) {
	if (err) {
		console.log('err' + err);
		return;
	}
	console.log('like count: ' + data.liked_count);
	posts = data.liked_posts;
	console.log('post image url: ' + posts[0].post_url);
});
}

getLikes(0);
