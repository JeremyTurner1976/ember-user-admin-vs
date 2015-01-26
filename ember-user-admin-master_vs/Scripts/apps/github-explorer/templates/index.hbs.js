var index = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", ((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.login : stack1), {"name":"link-to","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</li>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.item : depth0)) != null ? stack1.name : stack1), depth0));
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "﻿<h1>Github Explorer</h1>\r\n<hr />\r\n\r\n<p>This is the Github explorer for all of our favorite developers</p>\r\n<ul>\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.item : depth0), (depth0 != null ? depth0['in'] : depth0), (depth0 != null ? depth0.model : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>\r\n<p>\r\n    <button class=\"btn btn-success\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "clickMe", {"name":"action","hash":{},"data":data})))
    + ">Click Me</button>\r\n</p>\r\n<p>"
    + escapeExpression(((helper = (helper = helpers.renderedOn || (depth0 != null ? depth0.renderedOn : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"renderedOn","hash":{},"data":data}) : helper)))
    + "</p>";
},"useData":true});