var users = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "    <tr>\r\n        <td>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", depth0, {"name":"link-to","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  buffer += "</td>\r\n        <td>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "user", depth0, {"name":"link-to","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</td>\r\n        <td>"
    + escapeExpression(((helpers.fromDate || (depth0 && depth0.fromDate) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"fromDate","hash":{},"data":data})))
    + "</td>\r\n    </tr>\r\n";
},"2":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']) || helperMissing).call(depth0, {"name":"gravatar-image","hash":{
    'size': (60),
    'email': ((depth0 != null ? depth0.email : depth0))
  },"data":data})));
  },"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return escapeExpression(((helper = (helper = helpers.first || (depth0 != null ? depth0.first : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"first","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.last || (depth0 != null ? depth0.last : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"last","hash":{},"data":data}) : helper)))
    + " ";
},"6":function(depth0,helpers,partials,data) {
  return "    <tr>\r\n        <td colspan=\"3\"><i>No users...</i></td>\r\n    </tr>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "﻿<div class=\"row\">\r\n    <div class=\"col-md-10\">\r\n        <h3>Find a User By Email or Last Name</h3>\r\n        <form class=\"form-inline\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "searchForUser", {"name":"action","hash":{
    'on': ("submit")
  },"data":data})))
    + ">\r\n            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'placeholder': ("Search by email or last name"),
    'class': ("form-control"),
    'value': ((depth0 != null ? depth0.searchTerm : depth0))
  },"data":data})))
    + "\r\n            <button class=\"btn btn-success\">go</button>\r\n        </form>\r\n    </div>\r\n    <hr />\r\n</div>\r\n<h1>"
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<table class=\"table table-striped\" id=\"users-list\">\r\n    <tr>\r\n        <th>User</th>\r\n        <th>Name</th>\r\n        <th>Member Since</th>\r\n    </tr>\r\n";
  stack1 = helpers.each.call(depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</table>";
},"useData":true});