define("src/index/index",["../common/util","jquery/jquery/1.9.1/jquery.js"],function(a){var b=a("../common/util"),c=a("jquery/jquery/1.9.1/jquery.js");c("#test").click(function(){console.log("test")});var d=document.getElementById("hello-seajs");d.style.color=b.randomColor(),window.setInterval(function(){d.style.color=b.randomColor()},1500)}),define("src/common/util",[],function(a,b,c){var d={},e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];d.randomColor=function(){return"#"+e[Math.floor(16*Math.random())]+e[Math.floor(16*Math.random())]+e[Math.floor(16*Math.random())]+e[Math.floor(16*Math.random())]+e[Math.floor(16*Math.random())]+e[Math.floor(16*Math.random())]},c.exports=d});