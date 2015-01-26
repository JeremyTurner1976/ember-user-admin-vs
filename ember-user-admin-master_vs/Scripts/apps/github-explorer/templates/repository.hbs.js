var repository = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "Devs";
  },"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0));
  },"5":function(depth0,helpers,partials,data) {
  return "Repositories";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<ul class=\"list-inline\">\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "issues", {"name":"link-to","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "forks", {"name":"link-to","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "commits", {"name":"link-to","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "repository.newissue", {"name":"link-to","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</li>\r\n</ul>\r\n";
},"8":function(depth0,helpers,partials,data) {
  return "Issues";
  },"10":function(depth0,helpers,partials,data) {
  return "Forks";
  },"12":function(depth0,helpers,partials,data) {
  return "Commits";
  },"14":function(depth0,helpers,partials,data) {
  return "New Issue";
  },"16":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<p class=\"text-muted\">\r\n    Forked "
    + escapeExpression(((helpers.fromDate || (depth0 && depth0.fromDate) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"fromDate","hash":{},"data":data})))
    + "\r\n</p>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression, buffer = "﻿<ol class=\"breadcrumb\">\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", (depth0 != null ? depth0.user : depth0), {"name":"link-to","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "repositories", (depth0 != null ? depth0.user : depth0), {"name":"link-to","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li class=\"active\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</li>\r\n</ol>\r\n\r\n<h1>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " Repo</h1>\r\n<p>"
    + escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n<ul>\r\n    <li>Language: "
    + escapeExpression(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"language","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li>Watchers: "
    + escapeExpression(((helper = (helper = helpers.watchers || (depth0 != null ? depth0.watchers : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"watchers","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li>Open Issues: "
    + escapeExpression(((helper = (helper = helpers.open_issues || (depth0 != null ? depth0.open_issues : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"open_issues","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li>Clone: "
    + escapeExpression(((helper = (helper = helpers.clone_url || (depth0 != null ? depth0.clone_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"clone_url","hash":{},"data":data}) : helper)))
    + "</li>\r\n    <li>Web:<a "
    + escapeExpression(((helpers['bind-attr'] || (depth0 && depth0['bind-attr']) || helperMissing).call(depth0, {"name":"bind-attr","hash":{
    'href': ((depth0 != null ? depth0.html_url : depth0))
  },"data":data})))
    + " target=\"_blank\">"
    + escapeExpression(((helper = (helper = helpers.html_url || (depth0 != null ? depth0.html_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"html_url","hash":{},"data":data}) : helper)))
    + "</a></li>\r\n</ul>\r\n<hr />\r\n";
  stack1 = helpers.unless.call(depth0, (depth0 != null ? depth0.forked : depth0), {"name":"unless","hash":{},"fn":this.program(7, data),"inverse":this.program(16, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outlet","hash":{},"data":data}) : helper)));
},"useData":true});