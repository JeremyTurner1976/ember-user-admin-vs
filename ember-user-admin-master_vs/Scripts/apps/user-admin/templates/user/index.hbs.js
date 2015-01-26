var index = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "Edit Basic Info";
  },"3":function(depth0,helpers,partials,data) {
  return "Change User Roles";
  },"5":function(depth0,helpers,partials,data) {
  return "Add a Note";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "            <tr>\r\n                <td>"
    + escapeExpression(((helpers.fromDate || (depth0 && depth0.fromDate) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.created_at : stack1), {"name":"fromDate","hash":{},"data":data})))
    + "</td>\r\n                <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.note : depth0)) != null ? stack1.note : stack1), depth0))
    + "</td>\r\n            </tr>\r\n";
},"9":function(depth0,helpers,partials,data) {
  return "            <tr>\r\n                <td><i>Nothing yet...</i></td>\r\n            </tr>\r\n";
  },"11":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "            <tr>\r\n                <td>"
    + escapeExpression(((helpers.fromDate || (depth0 && depth0.fromDate) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.log : depth0)) != null ? stack1.created_at : stack1), {"name":"fromDate","hash":{},"data":data})))
    + "</td>\r\n                <td>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.log : depth0)) != null ? stack1.entry : stack1), depth0))
    + "</td>\r\n            </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "﻿"
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "UserAdmin.BreadcrumbView", {"name":"view","hash":{},"data":data})))
    + "\r\n<hr />\r\n<h2>Choose what you want to do:</h2>\r\n<ul>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user.editinfo", {"name":"link-to","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user.changeroles", {"name":"link-to","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user.addnote", {"name":"link-to","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</li>\r\n</ul>\r\n<hr />\r\n<div class=\"row\">\r\n    <div class=\"col-md-5\">\r\n        <h4>Notes</h4>\r\n        <table class=\"table table-striped\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.note : depth0), (depth0 != null ? depth0['in'] : depth0), ((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.notes : stack1), {"name":"each","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "        </table>\r\n    </div>\r\n    <div class=\"col-md-5\">\r\n        <h4>Logs</h4>\r\n        <table class=\"table table-striped\">\r\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.log : depth0), (depth0 != null ? depth0['in'] : depth0), ((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.logs : stack1), {"name":"each","hash":{},"fn":this.program(11, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </table>\r\n    </div>\r\n</div>";
},"useData":true});