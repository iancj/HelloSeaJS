define(function(require, exports, module) {
	var LoadCss=require("LoadCss");
    seajs.use((seajs.ISDEV ? "../../" : "")+"src/component/dialog/dialog.css");
    exports.show=function(){
	    alert("假装我是dialog");
    }
});