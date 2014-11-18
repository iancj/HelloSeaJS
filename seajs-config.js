//seajs config
seajs.config({
	base:"../../sea-modules/",
	alias:{
		"jquery":"jquery/jquery/1.9.1/jquery.js",
		"LoadCss":"seajs/seajs-css/1.0.4/seajs-css.js"
	}
});
//development environment
seajs.ISDEV=true;