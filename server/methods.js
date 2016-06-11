// addPost(단수) addPosts(복수)
Meteor.methods({
    "addPost": function(obj) {
        Posts.insert({
            author: {
                name: obj.name,
                profile_image: obj.profile_image
            },
            message: obj.message
        });
    }
});