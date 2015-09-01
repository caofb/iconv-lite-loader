var loaderUtils = require("loader-utils");
var iconv = require('iconv-lite');

module.exports = function(content) {
	this.cacheable(true)
	var loaderOptions = loaderUtils.parseQuery(this.query)
	var resourceOptions = loaderUtils.parseQuery(this.resourceQuery)
	var encoding = resourceOptions.inputEncoding
	if (typeof encoding == "undefined") {
		encoding = loaderOptions.inputEncoding
	}
	if (!encoding) return content
	var decoded = iconv.decode(content, encoding);
	return "module.exports=" + JSON.stringify(decoded);
}

module.exports.raw = true
