var editinfo = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿"
    + escapeExpression(((helpers.view || (depth0 && depth0.view) || helperMissing).call(depth0, "UserAdmin.BreadcrumbView", {"name":"view","hash":{
    'pageTitle': ("Edit User")
  },"data":data})))
    + "\r\n<h3>Basic Information</h3>\r\n<form class=\"form-horizontal\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "saveUser", {"name":"action","hash":{
    'on': ("submit")
  },"data":data})))
    + ">\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 control-label\" for=\"UserName\">User name</label>\r\n        <div class=\"col-md-10\">\r\n            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'value': (((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.userName : stack1))
  },"data":data})))
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 control-label\" for=\"Email\">Email</label>\r\n        <div class=\"col-md-10\">\r\n            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'value': (((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.email : stack1))
  },"data":data})))
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 control-label\" for=\"Email\">First</label>\r\n        <div class=\"col-md-10\">\r\n            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'value': (((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.first : stack1))
  },"data":data})))
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 control-label\" for=\"Email\">Last</label>\r\n        <div class=\"col-md-10\">\r\n            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'value': (((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.last : stack1))
  },"data":data})))
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 control-label\" for=\"Email\">Twitter</label>\r\n        <div class=\"col-md-10\">\r\n            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'value': (((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.twitter : stack1))
  },"data":data})))
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-2 control-label\" for=\"Email\">Bio</label>\r\n        <div class=\"col-md-10\">\r\n            "
    + escapeExpression(((helpers.input || (depth0 && depth0.input) || helperMissing).call(depth0, {"name":"input","hash":{
    'class': ("form-control"),
    'value': (((stack1 = ((stack1 = (depth0 != null ? depth0.controllers : depth0)) != null ? stack1.user : stack1)) != null ? stack1.bio : stack1))
  },"data":data})))
    + "\r\n        </div>\r\n    </div>\r\n    <hr />\r\n    <div class=\"form-group\">\r\n        <input type=\"submit\" value=\"save\" class=\"btn btn-success\" />\r\n    </div>\r\n</form>\r\n";
},"useData":true});