(function(){var g={}; var _ = _ || {}
var f=function(window){var bW=function(){this.m=this.f=null;this.a="";this.g=new _.K("clpp.adobe.AdobePlugin")},eW=function(a){a.f=new _.Xh;a.f.on(a.m,_.Gg,function(){return cW(a)});a.f.on(a.m,_.Dg,function(){s.Media.play(a.a,a.m.getPosition())});a.f.on(a.m,_.Ne,function(){return dW(a)});a.f.on(a.m,_.jg,function(b){b=b.detail;switch(b.currentState){case _.Bp:a.a.length||dW(a);s.Media.play(a.a,a.m.getPosition());break;case _.Ap:case _.sp:cW(a);break;case _.up:case _.np:case _.yp:a.g.info("Close session for "+a.a+" in player state "+
(b.currentState+".")),cW(a),s.Media.close(a.a),a.a=""}})},dW=function(a){var b=a.m.getLoadedSource();a.a=b?b.name||b.url:"";a.g.info("Open session for "+a.a+" with duration "+a.m.getDuration());s.Media.open(a.a,a.m.getDuration(),_.wa)},cW=function(a){s.Media.stop(a.a,a.m.getPosition())},fW=function(){};_.x(bW,_.Gu);bW.prototype.onPlayerCreated=function(a){window.s&&s.Media?(this.m=a,eW(this)):this.g.warn("Adobe API not available.")};
bW.prototype.onPlayerWillDestroy=function(){this.f&&(this.f.release(),this.f=null);this.m=null;this.a=""};bW.prototype.id=function(){return"adobe"};_.J("clpp.adobe.AdobeAnalyticsPlugin",bW);bW.Id="adobe";fW.prototype.create=function(){return new bW};_.br(new fW);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();