// Authenticate via OAuth
var tumblr = require('tumblr.js');
var async = require('async');
var settings = require('./env.json');
var client = tumblr.createClient(settings);

//TODO: Use before instead of offset so that I can retrieve all liked posts, not just the last 1000.

function getLikes(limit, offset) {
	// Make the request to Tumblr
	client.userLikes({limit: limit, offset: offset}, function (err, data) {
		if (err) {
			console.log('err' + err);
			return;
		}
		// Print post numbers
		console.log('<br>' + offset + ' - ' + (offset+limit-1) + '<br>');
	
		// Get post data
		posts = data.liked_posts;
		posts.forEach(function (post) {
			// Most liked posts are photo or link posts where the "photos" are art -> display the art
			if (post.type === 'photo' || post.type === 'link') {
				post.photos.forEach(function (photo) {
					thumbURL = '';
					for (i = 0; i < photo.alt_sizes.length; i++) {
						if (photo.alt_sizes[i].width <= 250) {
							thumbURL = photo.alt_sizes[i].url;
							break;
						}
					}
					console.log('<a href="' + post.post_url + '"><img src="' + thumbURL + '"></a>');
					console.log('<a href="' + photo.original_size.url + '">X</a>');
				});
			}
			// For other posts just link to the post
			else {
				console.log('<a href="' + post.post_url + '">' + post.type + '</a>');
			}
		});
		// Makes some textareas to write notes in
		console.log('<br>' + '<textarea cols="30"></textarea> '.repeat(limit) + '<br>');
	});
}


// Can only access up to the 1000th liked post when using offset
numLikes = 1000;
// Set limit to 5 because that's how many images fit in a row on my laptop
limit = 5;
offset = 0;

// Print HTML heading
console.log('<html><body>');

// Loop synchronously so that posts are printed in order
async.whilst(
	function() { return offset < numLikes; },
	function(cb) {
		getLikes(limit, offset);
		offset = offset+limit;
		setTimeout(function() {cb()}, 100);
	}
);

// Print HTML ending
setTimeout(function() { console.log('</body></html>'); }, 21111);
