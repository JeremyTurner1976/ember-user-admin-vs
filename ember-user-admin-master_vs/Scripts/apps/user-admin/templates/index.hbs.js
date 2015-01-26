var index = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "Edit Users";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "﻿<h1>User Administration</h1>\r\n<hr />\r\n<p>\r\n    Select what you want to do from below...\r\n</p>\r\n<ul id=\"home-list\">\r\n    <li>";
  stack1 = ((helpers['link-to'] || (depth0 && depth0['link-to']) || helperMissing).call(depth0, "users", {"name":"link-to","hash":{
    'id': ("user-link")
  },"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</li>\r\n</ul>";
},"useData":true});