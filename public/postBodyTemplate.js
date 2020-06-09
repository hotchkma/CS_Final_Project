(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postBody'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\n  <article class = \"post\">\n      <div class = \"post-front\">\n        <div class = \"post-header\">\n          <div class = \"post-item\">\n          	"
    + alias4(((helper = (helper = lookupProperty(helpers,"item") || (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data,"loc":{"start":{"line":6,"column":11},"end":{"line":6,"column":19}}}) : helper)))
    + "\n          </div>\n          <button type = \"button\" class = \"remove-post-button\">Remove</button>\n        </div>\n\n        <div class = \"img-container\">\n          <img class = \"img-item\" src = \""
    + alias4(((helper = (helper = lookupProperty(helpers,"photo") || (depth0 != null ? lookupProperty(depth0,"photo") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photo","hash":{},"data":data,"loc":{"start":{"line":12,"column":41},"end":{"line":12,"column":50}}}) : helper)))
    + "\" alt = \""
    + alias4(((helper = (helper = lookupProperty(helpers,"item") || (depth0 != null ? lookupProperty(depth0,"item") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"item","hash":{},"data":data,"loc":{"start":{"line":12,"column":59},"end":{"line":12,"column":67}}}) : helper)))
    + "\"/>\r\n        </div>\r\n      </div>\r\n      <div class = \"post-back\">\r\n        <div class = \"post-back-header\">\r\n          <button type = \"button\" class = \"back-to-front\">&times;</button>\r\n        </div>\r\n        <div class = post-text>\r\n          <label for = \"post-comments\">Comments: </label>\r\n          <div class = \"post-comments\">\r\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"comments") || (depth0 != null ? lookupProperty(depth0,"comments") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comments","hash":{},"data":data,"loc":{"start":{"line":22,"column":12},"end":{"line":22,"column":24}}}) : helper)))
    + "\n          </div>\n          <label for = \"post-contact-info\">Contact Info: </label>\n          <div class = \"post-contact-info\">\n            "
    + alias4(((helper = (helper = lookupProperty(helpers,"contacts") || (depth0 != null ? lookupProperty(depth0,"contacts") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contacts","hash":{},"data":data,"loc":{"start":{"line":26,"column":12},"end":{"line":26,"column":24}}}) : helper)))
    + "\n          </div>\n        </div>\n      </div>\n      <div class = post-pass>\n        "
    + alias4(((helper = (helper = lookupProperty(helpers,"password") || (depth0 != null ? lookupProperty(depth0,"password") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"password","hash":{},"data":data,"loc":{"start":{"line":31,"column":8},"end":{"line":31,"column":20}}}) : helper)))
    + "\n      </div>\n  </article>\n";
},"useData":true});
})();
