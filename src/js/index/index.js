define(function(require, exports, module) {
    var dialog = require('../../component/dialog/dialog.js'),
    	$=require("jquery");

    $("#test").click(function(){
    	dialog.show();
    });

});