Template.posts.onCreated(function() {
    this.subscribe('getPage', Session.get('pageId'));
    this.interval = Meteor.setInterval(function() {
        Session.set('live', Random.id());
    }, 1000);
});
Template.posts.helpers({
    "posts":function(){
        return Posts.find({},{
            sort:{
                createdAt:-1
            }
        });
    },
    "timeFrom": function(time) {
        Session.get('live');
        return moment().from(time);
    }
});

/*
 Posts.insert({
     author: {
         name: "Master",
         profile_image: "http://lorempixel.com/64/64/cats/"
     },
     message: "집사야 내 밥은 어딨냐?"
 });
 */