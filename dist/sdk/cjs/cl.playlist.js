(function(){var g={}; var _ = _ || {}
var f=function(window){var sA=function(a,b){b=void 0===b?function(){return Promise.resolve()}:b;_.Yl.call(this);this.m=a;this.l=b;this.f=0;this.a=[];this.h=!1;this.j=this.Ya.bind(this)},tA=function(a){a.trigger(new _.L(_.Bf))},uA=function(a,b){return 0<=b&&b<a.a.length};_.x(sA,_.Yl);_.t=sA.prototype;_.t.on=function(a,b,c){return _.Yl.prototype.on.call(this,a,b,c)};_.t.one=function(a,b,c){return _.Yl.prototype.one.call(this,a,b,c)};_.t.off=function(a,b){return _.Yl.prototype.off.call(this,a,b)};_.t.getPosition=function(){return this.f};
_.t.bl=function(){return this.a};_.t.Gd=function(){return 0<this.a.length&&uA(this,this.f)?this.a[this.f]:null};_.t.dl=function(){var a=this.f+1;return 0<this.a.length&&uA(this,a)?this.a[a]:null};_.t.ul=function(){return this.h};_.t.start=function(){this.h||(this.h=!0,this.m.on(_.se,this.j),this.Ae(this.f,!0))};_.t.stop=function(){this.h=!1;this.m.off(_.se,this.j)};_.t.Ya=function(){this.next()};
_.t.next=function(){var a=this,b;return _.I(function(c){b=Math.min(a.a.length-1,a.f+1);return _.y(c,a.Ae(b),0)})};_.t.Um=function(){var a=this,b;return _.I(function(c){b=Math.max(0,a.f-1);return _.y(c,a.Ae(b),0)})};_.t.Ae=function(a,b){b=void 0===b?!1:b;var c=this,d;return _.I(function(e){if(1==e.a){if(!(0<c.a.length&&uA(c,a))||!b&&c.f===a)return e["return"]();c.f=a;return(d=c.Gd())?_.y(e,c.l(d),3):e.F(0)}if(4!=e.a)return _.y(e,c.m.load(d.configuration),4);c.trigger(new _.L(_.Af,{item:d}));_.B(e)})};
_.t.append=function(a){this.a.push(a);tA(this)};_.t.pl=function(a,b){if(0<=b&&b<=this.a.length){var c=this.Gd();this.a.splice(b,0,a);c&&(this.f=this.a.indexOf(c));tA(this)}};_.t.remove=function(a){if(0<this.a.length&&uA(this,a)){if(this.f===a)throw Error("Can't remove the current item");this.a.splice(a,1);tA(this)}};_.t.clear=function(){this.stop();this.f=0;this.a=[];this.h=!1;tA(this)};_.J("clpp.Playlist",sA);sA.prototype.clear=sA.prototype.clear;sA.prototype.remove=sA.prototype.remove;
sA.prototype.insert=sA.prototype.pl;sA.prototype.append=sA.prototype.append;sA.prototype.goTo=sA.prototype.Ae;sA.prototype.previous=sA.prototype.Um;sA.prototype.next=sA.prototype.next;sA.prototype.onEnded=sA.prototype.Ya;sA.prototype.stop=sA.prototype.stop;sA.prototype.start=sA.prototype.start;sA.prototype.isStarted=sA.prototype.ul;sA.prototype.getUpcoming=sA.prototype.dl;sA.prototype.getCurrent=sA.prototype.Gd;sA.prototype.getQueue=sA.prototype.bl;sA.prototype.getPosition=sA.prototype.getPosition;
sA.prototype.off=sA.prototype.off;sA.prototype.one=sA.prototype.one;sA.prototype.on=sA.prototype.on;};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();