//ROUTES
//Router Map
//:variablename if passing a primitive
//:itemProperty if passing an item
//:[itemname]_id if only doing a find by id (no need to create the route, ember does this)
UserAdmin.Router.map(function () {
    this.resource("users");
    this.resource("user", { path: "users/:user_id" }, function () {
        this.route("editinfo", { path: "edit" });
        this.route("changepassword", { path: "change-password" });
        this.route("changeroles", { path: "edit-roles" });
        this.route("addnote", { path: "add-note" });
    });
});
UserAdmin.UsersRoute = Ember.Route.extend({
    setupController: function (controller, model) {
        controller.loadUsers();
    }
});