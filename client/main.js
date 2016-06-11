Template.main.onCreated(function() {
    this.subscribe("getPage");
});
Template.main.helpers({
    "page": function() {
        return Session.get("pageId")|| 'popular';
    }
});
// ex) form 여러개의 경우  "submit #msg"  //<form id="msg">
Template.main.events({
    "submit #msg":function(event,template){
        Meteor.call("addPost",{
            pageId: Session.get('pageId'),
            message: template.find("#post").value
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