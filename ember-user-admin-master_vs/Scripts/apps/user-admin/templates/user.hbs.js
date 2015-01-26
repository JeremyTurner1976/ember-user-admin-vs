var user = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "Back";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", buffer = "﻿<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <div class=\"well\">\r\n            <p class=\"text-center\">\r\n                "
    + escapeExpression(((helpers['gravatar-image'] || (depth0 && depth0['gravatar-image']) || helperMissing).call(depth0, {"name":"gravatar-image","hash":{
    'size': (200),
    'email': ((depth0 != null ? depth0.email : depth0))
  },"data":data})))
    + "\r\n            </p>\r\n            <h4>"
    + escapeExpression(((helper = (helper = helpers.fullName || (depth0 != null ? depth0.fullName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"fullName","hash":{},"data":data}) : helper)))
    + "</h4>\r\n            <table class=\"table table-striped\">\r\n                <tr><td>Username:</td><td>"
    + escapeExpression(((helper = (helper = helpers.userName || (depth0 != null ? depth0.userName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"userName","hash":{},"data":data}) : helper)))
    + "</td></tr>\r\n                <tr><td>Twitter:</td><td>"
    + escapeExpression(((helper = (helper = helpers.twitter || (depth0 != null ? depth0.twitter : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"twitter","hash":{},"data":data}) : helper)))
    + "</td></tr>\r\n                <tr><td>Bio: </td><td>"
    + escapeExpression(((helper = (helper = helpers.bio || (depth0 != null ? depth0.bio : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"bio","hash":{},"data":data}) : helper)))
    + "</td></tr>\r\n                <tr><td>Email: </td><td>"
    + escapeExpression(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"email","hash":{},"data":data}) : helper)))
    + "</td></tr>\r\n            </table>\r\n            <p>\r\n                ";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "users", {"name":"link-to","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n            </p>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-md-8\">\r\n        "
    + escapeExpression(((helper = (helper = helpers.outlet || (depth0 != null ? depth0.outlet : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"outlet","hash":{},"data":data}) : helper)))
    + "\r\n    </div>\r\n</div>";
},"useData":true});