GithubExplorer.Router.map(function () {
    //resource or route (resource for models, route a verb)
    //this.resource("index", { path: "/" }); //automatically created
    this.resource("user", { path: "/users/:login" }, function () {
        this.resource("repositories");
        this.resource("repository", { path: "repositories/:name" }, function () {
            this.resource("issues");
            this.resource("forks");
            this.resource("commits");
            this.route("newissue", { path: "newissue" });
        });
    });
});




GithubExplorer.IndexRoute = Ember.Route.extend({
    model: function () { return devs; }
});

GithubExplorer.UserRoute = Ember.Route.extend({
    model: function (params) {
        return Ember.$.getJSON("https://api.github.com/users/" + params.login);
    }
});

GithubExplorer.UserIndexRoute = Ember.Route.extend({
    model: function () {
        return this.modelFor("user");
    }
});

GithubExplorer.RepositoriesRoute = Ember.Route.extend({
    model: function () {
        var user = this.modelFor("user");
        return Ember.$.getJSON(user.repos_url);
    }
});

GithubExplorer.RepositoryRoute = Ember.Route.extend({
    model: function () {
        var user = this.modelFor("user");
        var url = "https:/api.github.com/repos/" + user.login + "/" + params.name;
        return Ember.$.getJSON(url);
    }
});

GithubExplorer.IssuesRoute = Ember.Route.extend({
    model: function () {
        var repo = this.modelFor("repository");
        var url = repo.issues_url.replace("{/number}", "");
        return Ember.$.getJSON(url);
    }
});

GithubExplorer.ForksRoute = Ember.Route.extend({
    model: function () {
        var repo = this.modelFor("repository");
        return Ember.$.getJSON(repo.forks_url);
    }
});

GithubExplorer.CommitsRoute = Ember.Route.extend({
    model: function () {
        var repo = this.modelFor("repository");
        var url = repo.commits_url.replace("{/sha}", "");
        return Ember.$.getJSON(url);
    }
});
