//HANDLEBAR HELPERS
Ember.Handlebars.registerBoundHelper("fromDate", function (theDate) {
    var today = moment();
    var target = moment(theDate);
    return target.from(today);
});

//APP
window.UserAdmin = Ember.Application.create({
    rootElement: "#user-admin-app",
    LOG_TRANSITIONS: true
});

//DATA ADAPTER
UserAdmin.ApplicationAdapter = DS.RESTAdapter.extend({
    host: "http://localhost:41109",
    namespace: "api"
});

//VIEWS
UserAdmin.BreadcrumbView = Ember.View.extend({
    templateName: "breadcrumbs",
    pageTitle: "",
    showPageLink: Ember.computed.any("pageTitle")
});

//COMPONENTS
UserAdmin.GravatarImageComponent = Ember.Component.extend({
    email: "",
    size: 120,
    gravatarUrl: function () {
        var email = this.get("email");
        var size = this.get("size");
        var hashed = "http://www.gravatar.com/avatar/" + hex_md5(email) + "?s=" + size;
        return hashed;
    }.property("email", "size")

});






