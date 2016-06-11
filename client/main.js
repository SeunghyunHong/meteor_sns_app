Template.main.helpers({
    "page": function() {
        return Session.get("pageId");
    }
});
// form 여러개의 경우 ex) submit #msg  //<form id="msg">
Template.main.events({
    "submit #msg":function(event,template){
        Meteor.call("addPost",{
            name:"Doggy",
            profile_image:
            "http://lorempixel.com/64/64/animals",
            message:
            template.find("#post").value
        },function(error,result){
            if(error){
                throw(error);
            }else{
                template.find("#post").value="";
            }
        })

        event.preventDefault();
    }
})