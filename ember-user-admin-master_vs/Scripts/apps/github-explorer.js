
//create the route
//routes job is to get the model
//routes use modelFor to get route models, Controllers use needs to get other controllers

var devs = [
    { login: "robconery", name: "Rob Conery" },
    { login: "shanselman", name: "Scott Hanselman" },
    { login: "tomdale", name: "Tom Dale" },
    { login: "wycats", name: "Yehuda Katz" },
    { login: "jongalloway", name: "Jon Galloway" },
    { login: "haacked", name: "Phil Haack" }
];

Ember.Handlebars.registerBoundHelper("fromDate", function (theDate) {
    var today = moment();
    var target = moment(theDate);
    return target.from(today);
});

window.GithubExplorer = Ember.Application.create({
    rootElement: "#github-app",
    LOG_TRANSITIONS: true
});

