var notes = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";
  return "    <tr>\r\n        <td>"
    + escapeExpression(((helpers.fromDate || (depth0 && depth0.fromDate) || helperMissing).call(depth0, (depth0 != null ? depth0.created_at : depth0), {"name":"fromDate","hash":{},"data":data})))
    + "</td>\r\n        <td>"
    + escapeExpression(((helper = (helper = helpers.note || (depth0 != null ? depth0.note : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"note","hash":{},"data":data}) : helper)))
    + "</td>\r\n    </tr>\r\n";
},"3":function(depth0,helpers,partials,data) {
  return "    <tr>\r\n        <td><i>No notes yet...</i></td>\r\n    </tr>\r\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "﻿<table class=\"table table-striped\">\r\n";
  stack1 = helpers.each.call(depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</table>";
},"useData":true});