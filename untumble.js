// Authenticate via OAuth - fill in your credentials here
var tumblr = require('tumblr.js');
var settings = require('./env.json');
var client = tumblr.createClient(settings);

function getLikes(limit, offset) {
	// Make the request to Tumblr
	client.userLikes({limit: limit, offset: offset}, function (err, data) {
		if (err) {
			console.log('err' + err);
			return;
		}
		// Print post number
		console.log('<br>' + offset + '<br>');
	
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

// Hardcoded number of likes (the max)
numLikes = 1000;
// Set limit to 5 because that's how many images fit in a row on my laptop
limit = 5;
for (offset = 1; offset <= numLikes; offset+=limit) {
	getLikes(limit, offset);
}
