Template.main.events({
    "submit":function(event,template){
        Meteor.call("addPost",{
            name:"Doggy",
            profile_image:
            "http://lorempixel.com/64/64/animals",
            message:
            template.find("#post").value
        });

        event.preventDefault();
    }
})