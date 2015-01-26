var roles = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.userIsAssigned : depth0), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <tr class=\"alert alert-success\">\r\n        <td>\r\n            <span class=\"glyphicon glyphicon-ok\"></span> "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n        </td>\r\n        <td>\r\n            <a href=\"#\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, (depth0 != null ? depth0.removeRole : depth0), {"name":"action","hash":{},"data":data})))
    + ">Revoke</a>\r\n        </td>\r\n    </tr>\r\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <tr>\r\n        <td>\r\n            "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n        </td>\r\n        <td>\r\n            <a href=\"#\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, (depth0 != null ? depth0.assignRole : depth0), {"name":"action","hash":{},"data":data})))
    + ">Assign</a>\r\n        </td>\r\n    </tr>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿<table class=\"table\">\r\n    <tr>\r\n        <th>Roles</th>\r\n        <th>Action</th>\r\n    </tr>\r\n";
  stack1 = helpers.each.call(depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</table>";
},"useData":true});