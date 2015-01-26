//MODELS
UserAdmin.Log = DS.Model.extend({
    entry: DS.attr("string"),
    user: DS.belongsTo("user"),
    created_at: DS.attr("date")
});

UserAdmin.Membership = DS.Model.extend({
    user: DS.belongsTo("user"),
    role: DS.belongsTo("role")
});

UserAdmin.Note = DS.Model.extend({
    note: DS.attr("string"),
    user: DS.belongsTo("user"),
    created_at: DS.attr("date")
});

UserAdmin.Role = DS.Model.extend({
    name: DS.attr("string"),
    membership: DS.hasMany("membership")
});

UserAdmin.User = DS.Model.extend({
    email: DS.attr("string"),
    userName: DS.attr("string"),
    first: DS.attr("string"),
    last: DS.attr("string"),
    bio: DS.attr("string"),
    twitter: DS.attr("string"),
    created_at: DS.attr("date"),
    logs: DS.hasMany("log", { async: true }),
    notes: DS.hasMany("note", { async: true }),
    membership: DS.hasMany("membership")
});