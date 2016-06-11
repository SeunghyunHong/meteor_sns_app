FlowRouter.route('/page/:pageId',{
    name:"name",
    action:function(params){
        Session.set('pageId',params.pageId);
    }
})