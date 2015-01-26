var addnote = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "﻿"
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "UserAdmin.BreadcrumbView", {"name":"view","hash":{
    'pageTitle': ("Add Note")
  },"data":data})))
    + "\r\n<h3>Add a Note to "
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.first : stack1), depth0))
    + "'s Account</h3>\r\n<form "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "saveNote", {"name":"action","hash":{
    'on': ("submit")
  },"data":data})))
    + ">\r\n    <p>\r\n        <textarea id=\"new-note\" rows=\"5\" class=\"form-control\" placeholder=\"Add your note...\"></textarea>\r\n    </p>\r\n    <p>\r\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Add Note\" />\r\n    </p>\r\n</form>\r\n"
    + escapeExpression(((helpers.render || (depth0 && depth0.render) || helperMissing).call(depth0, "user/notes", ((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.notes : stack1), {"name":"render","hash":{},"data":data})));
},"useData":true});