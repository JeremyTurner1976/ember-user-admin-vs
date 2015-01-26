//CONTROLLERS
UserAdmin.UserAddnoteController = Ember.Controller.extend({
    needs: ["user"],
    actions: {
        saveNote: function () {
            //Don't do this it should be an explicit property
            //this is for demo only...
            var note = $("#new-note").val();
            var user = this.get("controllers.user");
            var newNote = this.store.createRecord("note", { note: note, created_at: new Date() });
            user.get("notes").pushObject(newNote);
            newNote.save();
        }
    }
});

UserAdmin.RoleController = Ember.ObjectController.extend({
    needs: ["user"],
    user: Ember.computed.alias("controllers.user"),
    assignments: Ember.computed.alias("controllers.user.membership"),
    userIsAssigned: function () {
        return this.get("assignments").filterProperty("role.id", this.get("id"));
    }.property("assignments.@each"), //2 @'s for razor engine .cshtml
    actions: {
        removeRole: function () {
            var membership = this.get("userIsAssigned")[0];
            if (membership) {
                //flags for delete
                membership.deleteRecord();
                //saves
                membership.save();
            }
        },
        assignRole: function () {
            var user = this.get("user.model");
            var role = this.get("model");
            var newAssignment = this.store.createRecord("membership", {
                user: user,
                role: role
            });
            newAssignment.save();
        }
    }
});

UserAdmin.RolesController = Ember.ArrayController.extend({
    needs: ["user"],
    itemController: "role"
});

UserAdmin.UserController = Ember.ObjectController.extend({
    fullName: function () {
        return this.get("first") + " " + this.get("last");
    }.property("first", "last")
});

UserAdmin.UserChangerolesController = Ember.Controller.extend({
    needs: ["user"],
    roles: function () {
        return this.store.find("role");
    }.property()
});

UserAdmin.UserEditinfoController = Ember.ObjectController.extend({
    needs: ["user"],
    actions: {
        saveUser: function () {
            var user = this.get("controllers.user.model");
            user.save();
        }
    }
});

UserAdmin.UserIndexController = Ember.ObjectController.extend({
    needs: ["user"]
});

UserAdmin.UserNotesController = Ember.ArrayController.extend({
    sortProperties: ["created_at"],
    sortAscending: false
});

UserAdmin.UsersController = Ember.ArrayController.extend({
    loadUsers: function () {
        var q = this.get("searchTerm");
        this.set("model", this.store.find("user", { q: q, limit: 3 }));
    },
    title: function () {
        var q = this.get("searchTerm");
        if (q) {
            return "Searching for " + q;
        } else {
            return "Users";
        }
    }.property("searchTerm"),
    searchTerm: "",
    actions: {
        searchForUser: function () {
            this.loadUsers();
        }
    }
});