// addPost(단수) addPosts(복수)
Meteor.methods({
    "addPost": function(obj) {
        check(this.userId, String);
        Posts.insert({
            author: {
                _id: this.userId,
                name: Meteor.user().username,
                profile_image: Gravatar.imageUrl(Meteor.user().emails[0].address)+"?d=retro"
            },
            pageId: obj.pageId,
            message: obj.message,
            createdAt: new Date()
        });
    }
});