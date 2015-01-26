var newissue = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "﻿<h3>Create an Issue</h3>\r\n<div class=\"form-group\">\r\n    <label for=\"title\">Title</label>\r\n    <input type=\"text\" name=\"title\" id=\"new-issue-title\" placeholder=\"Issue Title\" class=\"form-control\" />\r\n</div>\r\n<div class=\"form-group\">\r\n    <label for=\"body\">Body</label>\r\n    <textarea name=\"title\" id=\"new-issue-body\" placeholder=\"Whats your issue?\" rows=\"5\" class=\"form-control\"></textarea>\r\n</div>\r\n\r\n<button class=\"btn btn-primary\" "
    + escapeExpression(((helpers.action || (depth0 && depth0.action) || helperMissing).call(depth0, "submitIssue", {"name":"action","hash":{},"data":data})))
    + ">Submit Issue</button>";
},"useData":true});