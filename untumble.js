// Authenticate via OAuth
var tumblr = require('tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'opP94wlM6ynKYTraxEBPe2NIAWsOIYoKkmHWpd92ShkIwtTLJZ',
  consumer_secret: 'oLfuN18xwHoqXwUL1tQI9PVgHdpnNmrtHPfSv5HDSgtB7CxSJX',
  token: 'ueNB27z7f8hz7EaIMdmNUYVtzQawTiIopFBOnM6UdujMa9cnWw',
  token_secret: 'xuTGG4A0GjiJEGcoBzbFx6JKOmFJHCRPeyjQ60AbFibLoxlyp9'
});

function getLikes(limit, offset) {
	// Make the request to Tumblr
	client.userLikes({limit: limit, offset: offset}, function (err, data) {
		if (err) {
			console.log('err' + err);
			return;
		}
		// Print post number
		console.log('$' + offset + '$');
	
		// Get the post data I want
		posts = data.liked_posts;
		posts.forEach(function (post) {
			console.log('<a href="' + post.post_url + '">---</a>');
			if (post.type === 'photo') {
				post.photos.forEach(function (photo) {
					thumbURL = '';
					for (i = 0; i < photo.alt_sizes.length; i++) {
						if (photo.alt_sizes[i].width == 250) {
							thumbURL = photo.alt_sizes[i].url;
							break;
						}
					}
					console.log('<a href="' + photo.original_size.url + '"><img src="' + thumbURL + '"></a>');
				});
			}
		});
		console.log('<br>' + '<textarea></textarea>'.repeat(limit));
	});
}

// Hardcoded number of likes
numLikes = 8;
// Using the limit variable for now before I switch to using the default max
limit = 2;
for (offset = 1; offset <= numLikes; offset+=limit) {
	getLikes(limit, offset);
}
