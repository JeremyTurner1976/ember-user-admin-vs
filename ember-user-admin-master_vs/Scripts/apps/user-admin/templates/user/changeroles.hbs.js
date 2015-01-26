var changeroles = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "UserAdmin.BreadcrumbView", {"name":"view","hash":{
    'pageTitle': ("Change Roles")
  },"data":data})))
    + "\r\n<h3>Roles</h3>\r\n"
    + escapeExpression(((helpers.render || (depth0 && depth0.render) || helperMissing).call(depth0, "roles", (depth0 != null ? depth0.roles : depth0), {"name":"render","hash":{},"data":data})))
    + "\r\n";
},"useData":true});