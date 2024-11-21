(function(){var g={}; var _ = _ || {}
var f=function(window){var NR="CLPP Subtitle Styles",OR="Unsupported unit",PR="clpp-text-plain",QR="clpp-text-ttml",RR="clpp.htmlcue.HtmlTextDisplayer",SR="initial",TR=function(a){return _.qi(a,{Zg:function(b,c){return b.la(c)}})},UR=function(a,b){if(0===b.length)return a;var c=a,d=a.findIndex(function(e){return e.startTime>=b[0].startTime});0<=d&&(c=c.slice(0,d));return c.concat(b)},VR=function(a,b){for(var c=0,d=a.length-1;c<=d;){var e=c+d>>1,f=b(a[e]);if(0===f)return e;0<f?c=e+1:d=e-1}return-1},WR=function(){},YR=function(a){if(!a.input)return null;
var b=a.input.match(/^([^<]*)(<[^>]+>?)?/);b=b[1]?b[1]:b[2];a.input=a.input.substr(b.length);return b},$R=function(a){for(var b=null;b=a.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)a=a.replace(b[0],function(c){return ZR[c]});return a},bS=function(a,b){aS(a,b);Array.from(b.getElementsByTagName("*")).forEach(function(c){aS(a,c)})},aS=function(a,b){for(var c in a)null!=a[c]&&(b.style[c]=a[c])},cS=function(a,b){return 0===a?"0":a+b},dS=function(a,b){return 1>Math.abs(a-b)||a<b},eS=function(a,b){return a<b&&
1<Math.abs(a-b)},fS=function(a,b){return a>b&&1<Math.abs(a-b)},gS=function(a,b){return 1>Math.abs(a-b)||a>b},hS=function(a,b,c,d,e,f){this.left=a;this.f=b;this.top=c;this.a=d;this.height=e;this.width=f},iS=function(a){return new hS(a.left,a.f,a.top,a.a,a.height,a.width)},jS=function(a){var b=a.getBoundingClientRect(),c=getComputedStyle(a,null),d=parseFloat(c.getPropertyValue("border-left-width"))||0,e=parseFloat(c.getPropertyValue("border-right-width"))||0,f=parseFloat(c.getPropertyValue("border-top-width"))||
0;c=parseFloat(c.getPropertyValue("border-bottom-width"))||0;var g=(b.top||a.offsetTop)+f;f=(b.height||a.offsetHeight)-f-c;return new hS(b.left+d,b.right+e,g,(b.bottom||g+f)+c,f,(b.width||a.offsetWidth)-d-e)},kS=function(a,b){return b.some(function(c){return eS(a.left,c.f)&&fS(a.f,c.left)&&eS(a.top,c.a)&&fS(a.a,c.top)})},lS=function(a,b){return gS(a.top,b.top)&&dS(a.a,b.a)&&gS(a.left,b.left)&&dS(a.f,b.f)},mS=function(a,b,c){switch(c){case "+x":return eS(a.left,b.left);case "-x":return fS(a.f,b.f);
case "+y":return eS(a.top,b.top);case "-y":return fS(a.a,b.a);default:throw Error("Unknown axis");}},nS=function(a,b,c){this.id=a;this.w=b;this.B=c;this.a=this.o();this.j=!1},oS=function(a,b,c){nS.call(this,a.id,"clpp-text-cue",{});this.l=b;this.f=a;this.h=!!this.f.backgroundImage;this.D=c},qS=function(a){var b=a.a.childNodes[0],c=a.a.getBoundingClientRect(),d=b.getClientRects();b=c.height/d.length;c=c.width/d.length;return pS(a)?b:c},tS=function(a,b,c){return pS(a)&&_.M.sa(c)?cS(c,_.Pf):(rS(a)||
sS(a))&&_.M.sa(b)?cS(b,"%"):SR},rS=function(a){return a.f.writingMode===_.Jg},sS=function(a){return a.f.writingMode===_.Kg},pS=function(a){return a.f.writingMode===_.ti},uS=function(a,b,c){return(rS(a)||sS(a))&&_.M.sa(c)?cS(c,_.Pf):rS(a)&&_.M.S(c)?cS(0,_.Pf):pS(a)&&_.M.sa(b)?cS(b,"%"):SR},vS=function(a,b){if(typeof a.f.position===_.k&&typeof a.f.size===_.k)switch(b){case _.Ie:return a.f.position;case "auto":case _.wd:return a.f.position-a.f.size/2;case _.Je:return a.f.position-a.f.size}return 0},
wS=function(a){switch(a.f.positionAlign){case _.Ie:return _.Fe;case "auto":case _.wd:return _.si;case _.Je:return _.Wf}return a.f.textAlign},xS=function(a){if(!a.f.positionAlign)switch(a.f.textAlign){case _.Fe:case _.Fe:return _.Ie;case _.si:return _.wd;case _.Wf:case _.Wf:return _.Je}return a.f.positionAlign},yS=function(a){switch(a.f.writingMode){case _.ti:return"horizontal-tb";case _.Jg:return _.Jg;case _.Kg:return _.Kg;default:throw Error("Unknown writing mode");}},zS=function(a,b){this.l=a;this.f=
a.a;this.j=void 0===b?!1:b;this.a=jS(a.a);this.h=[]},AS=function(a,b){if(a.j)switch(b.writingMode){case _.ti:return["-y"];case _.Jg:return["+x"];case _.Kg:return["-x"]}var c=[];switch(b.writingMode){case _.ti:c=["+y","-y"];break;case _.Jg:c=["+x","-x"];break;case _.Kg:c=["-x","+x"]}0>b.line&&(c=c.reverse());return c},BS=function(a){for(a.h=[];0<a.f.childNodes.length;)a.f.removeChild(a.f.childNodes[0]);a.a=jS(a.l.a)},CS=function(a,b,c){nS.call(this,a,b,c);this.h=null;this.l=[]},DS=function(a,b){BS(a.h);
a.l.unshift(b);for(var c=_.w(a.l),d=c.next();!d.done;d=c.next())a.h.append(d.value)},ES=function(a,b){CS.call(this,a.id,"clpp-text-cue-region",b);this.f=a},FS=function(a,b,c){a=a.f;var d=a.viewportAnchorUnits;if(d===_.yi)return a.viewportAnchorY/100*c-a.regionAnchorY/100*b;if(0===d)return a.viewportAnchorY-a.regionAnchorY;throw Error(OR);},HS=function(a){this.g=new _.K("clpp.htmlcue.StyleManager");this.j=[];this.h=a;this.l=[];this.a=GS(this,this.h);this.f=GS(this,this.h,!0);this.f.disabled=!0;this.g.debug("Stylesheet CLPP Subtitle Styles has been created.")},
IS=function(a,b){var c=!1;try{a.f.insertRule(b,0);var d=a.f.cssRules[0];d instanceof CSSStyleRule&&(c=d.selectorText.split(",").every(function(e){return 0===e.trim().indexOf("."+a.h+" ")}))}catch(e){}0<a.f.cssRules.length&&a.f.deleteRule(0);return c},JS=function(a,b){var c="."+a.h+" .clpp-text-container",d=c+" .clpp-text-cue";return b=b.replace(/::cue\((#[^)]+)\)/g,c+" $1").replace(/::cue\(([^)]+)\)/g,d+" $1").replace(/::cue-region\(([^)]+)\)/g,c+" $1 .clpp-text-cue").replace(/::cue/g,d).replace(/::cue-region/g,
c+" .clpp-text-cue-region .clpp-text-cue").replace(/::ttml/g,c)},GS=function(a,b,c){var d=document.createElement(_.og),e=d.dataset;e.name=NR;e["for"]=b;c&&(e.name="CLPP Subtitle Styles (sandbox)",e.sandbox=!0);b=document.head;b.appendChild(d);KS(a,b);a.g.debug("Created HTML style element #CLPP Subtitle Styles.");return d.sheet},KS=function(a,b){var c=new MutationObserver(function(d){d.forEach(function(e){e.removedNodes.forEach(function(f){f.id===NR&&a.g.error("PRESTOplay HTML style element #CLPP Subtitle Styles has been unexpectedly removed! Some styles will not work!")})})});
c.observe(b,{subtree:!1,childList:!0});a.j.push(function(){return c.disconnect()})},NS=function(a){_.wu.call(this,a);var b=this;this.g=new _.K(RR);this.m=a;this.L=LS(a.getConfiguration());this.j=!1;this.f=[];this.D=a.getSurface().getContainer();this.h=new HS(a.getSurface().getUniqueCssClass());this.a=new CS(null,"clpp-text-container",{});this.w=new _.Jt(a.getSurface(),this.Ej.bind(this));this.J=null;this.D?(this.D.appendChild(this.a.a),this.a.init(null)):this.g.warn("No container element! Subtitles will not appear. Please check your player surface configuration or switch to NativeTextDisplayer.");
this.G=new _.Zk(function(){MS(b)});this.A=new Map;this.l=null},LS=function(a){a=_.M.Oa(a.htmlcue||{});_.M.S(a.stretchSmpteImage)&&(a.stretchSmpteImage=!1);_.M.S(a.enableResizeObserver)&&(a.enableResizeObserver=!0);return a},OS=function(a,b){return a.startTime<=b&&a.endTime>b},MS=function(a,b){if((b||a.j)&&a.D){var c=a.m.getPosition();if(b||a.J!==c&&a.m.getState()===_.Bp){a.J=c;var d=PS(a,c);(c=b)||(c=a.l,c=!(null===c&&null===d||null!==c&&null!==d&&c.start===d.start&&c.end===d.end));if(c&&(a.l=d,QS(a),
d)){c={color:a.getFontColor()||void 0,backgroundColor:a.getBackgroundColor()||void 0,fontFamily:a.getFontFamily()||void 0,textShadow:_.Bu(a)||void 0};d=a.f.slice(d.start,d.end+1);d=_.w(d);for(var e=d.next();!e.done;e=d.next()){var f=a;e=e.value;var g=f.a.a,h=null;switch(e.payloadType){case _.Rg:h="clpp-text-vtt";break;case _.wg:h=QR;break;case _.ri:h=PR}h&&!g.classList.contains(h)&&_.Zp(g,h);g=jS(f.a.a);if(0===g.width||0===g.height)f.g.warn("The height or width of the `.clpp-text-container` element is zero. Captions will not be displayed. Please check if the `clpp.styles.css` file has been included.");
else{aS({fontSize:RS(f,e.containerRows)},f.a.a);g=null;h=e.payloadType===_.Rg;var l=e.payloadType===_.wg;e.region&&(h||l||e.backgroundImage)&&(f.A.has(e.region.id)?g=f.A.get(e.region.id):(g=new ES(e.region,{}),f.A.set(e.region.id,g),DS(f.a,g)));e=new oS(e,f.L,c);g?DS(g,e):DS(f.a,e)}}}}}},PS=function(a,b){var c=VR(a.f,function(e){return OS(e,b)?0:b!==e.startTime?b-e.startTime:b-e.endTime});if(-1===c)return null;for(var d=c;0<=d-1&&OS(a.f[d-1],b);)d--;for(;c+1<a.f.length&&OS(a.f[c+1],b);)c++;return{start:d,
end:c}},SS=function(a){QS(a);a.J=null;a.l=null;a.f=[]},QS=function(a){a.A.clear();if(a.a){var b=a.a.a;b.classList.remove("clpp-text-vtt");b.classList.remove(QR);b.classList.remove(PR);a=a.a;BS(a.h);a.l=[]}},RS=function(a,b){var c=jS(a.a.a).height;if(null!==a.I)return a.getFontSize();if(null!==a.B){var d=a.getFontSizePercent();return Math.round(c*d)+_.Pf}if(typeof b===_.k&&0<b)return Math.round(c/b)+_.Pf;d=a.getFontSizePercent();return Math.round(c*d)+_.Pf},TS=function(){},US=function(){};
WR.prototype.parse=function(a){a={input:a};for(var b=_.aq(_.be),c=[],d=b,e;null!==(e=YR(a));)if("\x3c"===e[0])if("/"===e[1])c.length&&c[c.length-1]===e.substr(2).replace("\x3e","")&&(c.pop(),d=d.parentNode);else{if(e=e.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/)){var f=e[1];var g=e[3];var h=VS[f];h?(h=_.aq(h),(f=WS[f])&&g&&h.setAttribute(f,g.trim()),g=h):g=null;!g||XS[g.localName]&&XS[g.localName]!==d.localName||(e[2]&&(g.className=e[2].substr(1).replace(/\./g," ")),c.push(e[1]),d.appendChild(g),
d=g)}}else d.appendChild(document.createTextNode($R(e)));return b};var VS={c:"c",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"v",lang:"lang"},WS={v:"voice",lang:"lang"},XS={rt:"ruby"},ZR={"\x26amp;":"\x26","\x26lt;":"\x3c","\x26gt;":"\x3e","\x26lrm;":"\u200e","\x26rlm;":"\u200f","\x26nbsp;":"\u00a0"};nS.prototype.init=function(){this.j=!0};nS.prototype.A=function(){return!1};_.x(oS,nS);oS.prototype.A=function(){return!this.h&&!(this.f.region&&this.f.region.displayAlign)};
oS.prototype.init=function(a){nS.prototype.init.call(this,a);if(this.h)_.Zp(this.a,"clpp-text-cue-image"),this.a.style.backgroundImage='url("'+this.f.backgroundImage+'")',this.l.stretchSmpteImage&&(this.a.style.backgroundSize="contain");else if(a){var b=this.f;if(b.payloadType===_.wg){var c=_.aq(_.be);c.innerHTML=b.payload;b=c}else b.payloadType===_.Rg?b=(new WR).parse(b.payload):(c=_.aq(_.be),c.textContent=b.payload,b=c);_.Zp(b,this.w);this.id&&(b.id=this.id);c=_.w(this.f.cssClassList);for(var d=
c.next();!d.done;d=c.next())_.Zp(b,d.value);aS({writingMode:yS(this)},b);this.a.appendChild(b);_.Zp(this.a,"clpp-text-wrapper");c=_.w(this.f.cssClassList);for(d=c.next();!d.done;d=c.next())_.Zp(this.a,"clpp-text-wrapper__"+d.value);_.M.S(this.f.line)&&(this.f.lineInterpretation=_.ui,this.f.line=pS(this)?-1:0);c=yS(this);aS({writingMode:c,webkitWritingMode:c,direction:SR,textAlign:wS(this)},this.a);if(!this.f.region||!this.f.region.displayAlign){c=vS(this,xS(this));d=uS(this,c,null);var e=tS(this,
c,null),f=sS(this)&&_.M.S(null)?cS(0,_.Pf):SR;aS({position:"absolute",left:d,right:f,top:e,width:pS(this)?cS(this.f.size,"%"):SR,height:rS(this)||sS(this)?cS(this.f.size,"%"):SR},this.a);d=this.f;a=pS(this)?a.height:a.width;e=qS(this);if(d.lineInterpretation===_.ui)f=e*Math.round(d.line),Math.abs(f)>a&&(f=e*(0>d.line?0:-1)),0>f&&(f+=a);else{f=e/a*100;var g=d.line;switch(d.lineAlign){case _.wd:g-=f/2;break;case _.re:g-=f}f=Math.round(g/100*a)}sS(this)&&(f=a-f-e);a=f;d=uS(this,c,a);e=sS(this)&&_.M.S(a)?
cS(0,_.Pf):SR;aS({left:d,right:e,top:tS(this,c,a)},this.a)}bS(this.D,b)}};oS.prototype.o=function(){return _.aq(_.be)};zS.prototype.append=function(a){var b=a.a;b.style.visibility=_.ye;this.f.appendChild(b);a.j||a.init(this.a);if(a.A()){a:{var c=jS(a.a);var d=AS(this,a.f),e=qS(a),f=iS(c),g=null,h=0;d=_.w(d);for(var l=d.next();!l.done;l=d.next()){for(l=l.value;mS(c,this.a,l)||lS(c,this.a)&&kS(c,this.h);){var m=c,n=e;switch(l){case "+x":m.left+=n;m.f+=n;break;case "-x":m.left-=n;m.f-=n;break;case "+y":m.top+=n;m.a+=n;break;case "-y":m.top-=n,m.a-=n}}if(this.j||lS(c,this.a))break a;l=this.a;l=Math.max(0,Math.min(c.f,
l.f)-Math.max(c.left,l.left))*Math.max(0,Math.min(c.a,l.a)-Math.max(c.top,l.top))/(c.height*c.width);l>h&&(g=iS(c),h=l);c=iS(f)}c=g||f}aS({top:cS(c.top-this.a.top,_.Pf),bottom:cS(this.a.a-c.a,_.Pf),left:cS(c.left-this.a.left,_.Pf),right:cS(this.a.f-c.f,_.Pf),height:cS(c.height,_.Pf),width:cS(c.width,_.Pf)},a.a)}b.style.visibility="visible";this.h.push(jS(a.a))};_.x(CS,nS);CS.prototype.init=function(){this.h=new zS(this);this.j=!0};CS.prototype.o=function(){var a=_.aq(_.be);_.Zp(a,this.w);this.id&&(a.id=this.id);return a};_.x(ES,CS);
ES.prototype.init=function(a){a:{var b=this.f;switch(b.widthUnits){case 0:b=b.width;break a;case _.yi:b=b.width/100*a.width;break a;default:throw Error(OR);}}var c=this.f;var d=c.viewportAnchorUnits;if(d===_.yi)c=c.viewportAnchorX/100*a.width-c.regionAnchorX/100*b;else if(0===d)c=c.viewportAnchorX-c.regionAnchorX;else throw Error(OR);d=a.height;var e=FS(this,d,a.height);aS(this.B,this.a);aS({left:cS(c,_.Pf),top:cS(e,_.Pf),width:cS(b,_.Pf),height:cS(d,_.Pf)},this.a);this.f.writingMode&&aS({display:"flex",
"flex-direction":this.f.writingMode},this.a);this.f.displayAlign&&aS({"justify-content":this.f.displayAlign},this.a);b=_.w(this.f.cssClassList);for(c=b.next();!c.done;c=b.next())_.Zp(this.a,c.value);a:switch(b=this.f,b.heightUnits){case 0:b=b.height;break a;case _.yi:b=b.height/100*a.height;break a;case 2:b=b.height;d=new oS(new _.xi(0,1,"Lorem ipsum",_.ri),{},{});c=d.a;this.a.appendChild(c);d.init(jS(this.a));d=c.getBoundingClientRect().height;this.a.removeChild(c);b*=d;break a;default:throw Error(OR);
}a=FS(this,b,a.height);aS({top:cS(a,_.Pf),height:cS(b,_.Pf)},this.a);this.h=new zS(this,!0);this.j=!0};ES.prototype.getId=function(){return this.f.id};HS.prototype.appendRule=function(a){if(null!=this.a&&!this.l.some(function(c){return c===a})){var b=JS(this,a);if(IS(this,b)){try{this.a.insertRule(b,this.a.cssRules.length),this.g.debug("Added CSS rule "+b)}catch(c){this.g.error("An error occurred when adding a CSS rule: "+b)}this.l.push(a)}else this.g.warn("Stylesheet CLPP Subtitle Styles ignoring the CSS rule because it's not safe: "+b)}};
HS.prototype.destroy=function(){var a=this;return _.I(function(b){if(null==a.a)return b["return"]();a.j.forEach(function(c){return c()});a.j=[];if(null!=a.a){for(;0<a.a.cssRules.length;)a.a.deleteRule(0);a.l=[]}document.head.removeChild(a.a.ownerNode);document.head.removeChild(a.f.ownerNode);a.a=null;a.f=null;a.g.debug("Stylesheet CLPP Subtitle Styles has been destroyed.");_.B(b)})};_.x(NS,_.wu);_.t=NS.prototype;_.t.append=function(a,b){if(null!=this.h&&0!==a.length){for(var c=_.w(b),d=c.next();!d.done;d=c.next())this.h.appendRule(d.value);a.sort(function(e,f){return e.startTime!==f.startTime?e.startTime-f.startTime:e.endTime-f.endTime});this.f=UR(this.f,TR(a));this.l=null;MS(this,!1)}};_.t.zb=function(){null==this.h||MS(this,!0)};
_.t.destroy=function(){var a=this;return _.I(function(b){if(1==b.a){if(null==a.h)return b["return"]();SS(a);a.G.stop();return _.y(b,a.h.destroy(),2)}a.h=null;a.D.removeChild(a.a.a);a.a=null;a.w.stop();a.w=null;a.j=!1;_.B(b)})};_.t.remove=function(a,b){if(null==this.h)return!1;this.f=this.f.filter(function(c){return c.startTime<a||c.endTime>=b});this.l=null;MS(this,!0);return!0};_.t.isTextVisible=function(){return this.j};
_.t.setTextVisibility=function(a){null!=this.h&&this.j!==a&&((this.j=a)?(this.G.mb(.25),this.L.enableResizeObserver&&this.w.start(),MS(this,!0)):(this.G.stop(),this.w.stop(),SS(this)))};_.t.Fd=function(){return this.f};_.t.Ej=function(){MS(this,!0)};_.J(RR,NS);NS.prototype.setTextVisibility=NS.prototype.setTextVisibility;NS.prototype.isTextVisible=NS.prototype.isTextVisible;NS.prototype.remove=NS.prototype.remove;NS.prototype.destroy=NS.prototype.destroy;NS.prototype.append=NS.prototype.append;TS.prototype.isSupported=function(a){return!!a.enableHtmlCue&&!_.il()};TS.prototype.create=function(a){return new NS(a)};_.x(US,_.Ts);US.prototype.f=function(){_.ap(_.ze,new TS)};US.prototype.a=function(){_.Zo.has(_.ze)&&(_.Zo["delete"](_.ze),_.$o.info("Removed factory: 'html'"))};US.prototype.id=function(){return _.qg};_.J("clpp.htmlcue.HtmlCueComponent",US);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();