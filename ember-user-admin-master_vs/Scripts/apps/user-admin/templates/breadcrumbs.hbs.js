var breadcrumbs = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<ol class=\"breadcrumb\">\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "users", {"name":"link-to","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user.index", {"name":"link-to","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</li>\r\n    <li class=\"active\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.view : depth0)) != null ? stack1.pageTitle : stack1), depth0))
    + "</li>\r\n</ol>\r\n";
},"2":function(depth0,helpers,partials,data) {
  return "Admin";
  },"4":function(depth0,helpers,partials,data) {
  return "Users";
  },"6":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.fullName : stack1), depth0));
  },"8":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<ol class=\"breadcrumb\">\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "index", {"name":"link-to","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "users", {"name":"link-to","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</li>\r\n    <li class=\"active\">"
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.fullName : stack1), depth0))
    + "</li>\r\n</ol>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.view : depth0)) != null ? stack1.pageTitle : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(8, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});