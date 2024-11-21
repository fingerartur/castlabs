import {clpp} from "./cl.core.js";let g={};const _ = clpp._;var f=function(window){'use strict';var Qv='application/mp4; codecs\x3d"stpp.ttml"',Rv='application/mp4; codecs\x3d"stpp.ttml.im1i"',Sv='application/mp4; codecs\x3d"stpp.ttml.im1t"',Tv="backgroundColor",Uv="direction",Vv="displayAlign",Wv="region",Xv="textAlign",Yv="textDecoration",Zv="writingMode",$v=function(a,b,c){a=a.f;for(let d=a.length-1;0<=d;d--){const e=b.get(a[d]);if(c in e.a)return e.getAttribute(c)}return null},hw=function(a,b){var c=null;if(aw.test(a)){{a=aw.exec(a);c=Number(a[1]);const d=Number(a[2]);let e=
Number(a[3]),f=Number(a[4]);f+=(Number(a[5])||0)/b.f;e+=f/b.frameRate;c=e+60*d+3600*c}}else bw.test(a)?c=cw(bw,a):dw.test(a)?c=cw(dw,a):ew.test(a)?(a=ew.exec(a),c=Number(a[1])/b.frameRate):fw.test(a)?(a=fw.exec(a),c=Number(a[1])/b.a):gw.test(a)&&(c=cw(gw,a));return c},cw=function(a,b){a=a.exec(b);return null==a||""===a[0]?null:(Number(a[4])||0)/1E3+(Number(a[3])||0)+60*(Number(a[2])||0)+3600*(Number(a[1])||0)},iw=function(a){return a.split(":").pop()},jw=function(a){return a.replace(/(\d*\.?\d+)c/g,
"$1em")},lw=function(a,b){for(;kw.test(a);){const c=kw.exec(a)[0];a=a.replace(c,`${parseInt(c,10)/b}em`)}return a},mw=function(a){return a?a.replace(/(\d*\.?\d+)%/g,(b,c)=>`${c/100}em`):""},nw=function(a,b,c){a=$v(a,b,Xv);if(!a&&c&&(a=$v(c,b,Xv),!a&&"rltb"===$v(c,b,Zv)))return _.zf;switch(a){case _.ad:return _.ws;case _.zf:case _.Ud:return _.zf;default:return _.he}},ow=function(a,b,c){if(_.xi(a.w))return document.createTextNode(_.Bi(a.w||""));if(a.A)return _.uo("br");const d=_.uo("span");for(const e of a.f)_.vo(d,
e);for(const e of a.j)d.appendChild(ow(c.get(e),b,c));return d},rw=function(a,b,c,d){const e=pw.exec(a);a=qw.exec(a);return typeof b===_.t&&0<b&&a?100*Number(a[c])/b:e?Number(e[c]):a?Number(a[c]):d},sw=function(a,b){return typeof b===_.t&&0<b?_.Es:qw.test(a)?0:_.Es},tw=function(a,b,c){return typeof a===_.t?a:typeof b===_.t?b:c},uw=function(a,b){a=a.getAttribute("extent");return(a=qw.exec(a))?Number(a[b]):null},ww=function(a){a=a.getAttribute("cellResolution");return(a=vw.exec(a))?Number(a[2]):null},
yw=function(){return`${"inline-"}${xw++}`},Aw=function(a){return zw.some(b=>b in a.attributes)},Bw=function(a,b){if(0===b.length)return[];const c=[];for(const d of b)a.a.has(d)&&c.push(...Bw(a,a.a.get(d).f),d);return c},Cw=function(a){return iw(a.h.nodeName)},Fw=function(a,b){if(a.a.has(b))return a.a.get(b);var c=null,d=null;let e=[],f=[],g={};const h=b.parentNode;if(h&&a.a.has(h)){const k=a.a.get(h);e=[...k.l];-1===["#text","span","br"].indexOf(b.nodeName)&&(c=k.a,d=k.j,f=[...k.f],g={},Dw.forEach(l=>
{l in k.attributes&&(g[l]=k.attributes[l])}))}if(b.nodeType===b.ELEMENT_NODE){b.hasAttribute(Wv)&&(c=b.getAttribute(Wv));b.hasAttribute(_.Sf)&&f.push(...b.getAttribute(_.Sf).split(" "));d=Array.from(b.attributes).map(k=>k.name);for(const k of d)d=iw(k),g[d]=b.getAttribute(k);d=g.backgroundImage}c=new Ew(b,c,d,e,f,g);a.a.set(b,c);return c},Gw=function(a){return`${String(Math.floor(a/3600)).padStart(2,"0")}:${String(Math.floor(a/60%60)).padStart(2,"0")}:${String(Math.floor(a%60)).padStart(2,"0")}.${String(Math.floor(1E3*
a%1E3)).padStart(3,"0")}`},Hw=class{constructor(a,b,c){this.h=a;this.f=b;this.a=c}getId(){return this.h}getAttribute(a){return this.a[a]}};var Iw=class extends Hw{constructor(a,b,c){super(a,[],c);this.j=b||""}};var Jw=class extends Hw{constructor(a,b,c){super(a,b,c)}};var aw=/^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,bw=/^(?:(\d{2,}):)?(\d{2}):(\d{2})$/,dw=/^(?:(\d{2,}):)?(\d{2}):(\d{2}\.\d+)$/,ew=/^(\d*(?:\.\d*)?)f$/,fw=/^(\d*(?:\.\d*)?)t$/,gw=/^(?:(\d*(?:\.\d*)?)h)?(?:(\d*(?:\.\d*)?)m)?(?:(\d*(?:\.\d*)?)s)?(?:(\d*(?:\.\d*)?)ms)?$/,pw=/^(\d{1,2}(?:\.\d+)?|100(?:\.0+)?)% (\d{1,2}(?:\.\d+)?|100(?:\.0+)?)%$/,qw=/^(\d+)px (\d+)px$/,vw=/^(\d+) (\d+)$/,kw=/(\d+)px/,Kw=/^(\d+px|\d+em|\d*\.?\d+c)$/,zw=[Tv,"color",Uv,Vv,"fontFamily","fontSize","fontStyle","fontWeight",
"lineHeight","opacity","padding",Xv,Yv,"textOutline",Zv,"zIndex"],Dw=["begin",_.Ud];var Lw=class extends Jw{constructor(a,b,c,d,e,f,g){super(a,f,g);this.w=b;this.A=c;this.o=d;this.l=e;this.j=[]}build(a,b,c,d,e,f,g){let h=hw(this.a.begin,b);b=hw(this.a.end,b);if(null===h||null===b)return null;h+=c;b+=c;c=_.uo(_.Gd);for(const k of this.j)c.appendChild(ow(g.get(k),e,g));g=new _.Bs(h,b,c.innerHTML.trim(),_.Zf);g.cssClassList=[...this.f];g.textAlign=nw(this,e,null);g.writingMode=_.xs;g.line=-1;g.lineInterpretation=_.ys;g.lineAlign=_.zs;g.containerRows=tw(null,ww(a),15);if(this.o&&(f=
f.get(this.o))){g.region=f.build(a,e);g.textAlign=nw(this,e,f);a:switch($v(f,e,Zv)){case "tb":case "tblr":a=_.ig;break a;case "tbrl":a=_.jg;break a;default:a=_.xs}g.writingMode=a;a:switch($v(f,e,Vv)){case _.ad:a=50;break a;case "after":a=-1;break a;default:a=0}g.line=a;a:switch($v(f,e,Vv)){case _.ad:a=1;break a;default:a=_.ys}g.lineInterpretation=a;a:switch($v(f,e,Vv)){case _.ad:e=_.ad;break a;default:e=_.zs}g.lineAlign=e}this.l&&(d=d.get(this.l))&&(a=d,d=a.getAttribute("encoding"),e=a.getAttribute("imageType")||
a.getAttribute("imagetype"),a=a.j.trim(),d="PNG"===e&&"Base64"===d&&0<a.length?`data:image/png;base64,${a}`:null,g.backgroundImage=d||"");return g}};var Mw=class{constructor(a,b,c,d){this.frameRate=Number(a)||30;this.f=Number(b)||1;this.a=Number(d);0===this.a&&(this.a=a?this.frameRate*this.f:1);c&&(a=/^(\d+) (\d+)$/g.exec(c))&&(this.frameRate*=Number(a[1])/Number(a[2]))}};var Nw=class extends Jw{constructor(a,b,c){super(a,b,c)}build(a,b){const c=new _.Gs;c.id=this.getId();const d=tw(a.j.containerWidth,uw(a,1),720);a=tw(a.j.containerHeight,uw(a,2),480);a:switch($v(this,b,Vv)){case "after":var e="flex-start";break a;case _.ad:e=_.ad;break a;default:e="flex-end"}c.displayAlign=e;a:switch($v(this,b,Zv)){case "tb":case "tblr":e="row-reverse";break a;case "tbrl":e="row";break a;default:e=_.td}c.writingMode=e;e=this.getAttribute("extent")||$v(this,b,"extent");c.width=rw(e,
d,1,100);c.widthUnits=sw(e,d);c.height=rw(e,a,2,100);c.heightUnits=sw(e,a);b=this.getAttribute("origin")||$v(this,b,"origin");c.viewportAnchorX=rw(b,d,1,0);c.viewportAnchorY=rw(b,a,2,0);c.viewportAnchorUnits=sw(b,d);c.cssClassList=[...this.f];return c}};var Ow=class extends Hw{constructor(a,b){super("root-container",[],b);this.j=a}};var Qw=class extends Hw{constructor(a,b,c){super(a,b,c)}build(a){var b=null;var c=ww(a);c&&(b=tw(a.j.containerHeight,uw(a,2),480)/c);b=tw(a.j.fontSizeRadix,b,16);a=[];c=`::ttml .${this.h}, ::ttml .${this.h} * {`;for(const [g,h]of Pw.entries())g in this.a&&(c+=`${h}:${jw(this.a[g])};`);a:{if("unicodeBidi"in this.a){var d=this.a.unicodeBidi;var e="";switch(d){case "normal":case "embed":e=d;break;case "bidiOverride":e="bidi-override"}if(0<e.length){d=`unicode-bidi:${e};`;break a}}d=""}c+=d;a:{if("textOutline"in
this.a){d=this.a.textOutline.split(" ");e="black";let g=".4em";const h=d[0]&&d[0].trim(),k=d[1]&&d[1].trim(),l=d[2]&&d[2].trim();3===d.length&&!Kw.test(h)&&Kw.test(k)&&Kw.test(l)?(e=h,g=k):2===d.length&&!Kw.test(h)&&Kw.test(k)?(e=h,g=k):2===d.length&&Kw.test(h)&&Kw.test(k)&&(g=h);if(""!==g){g=jw(g);d="text-shadow:"+`0 0 ${g} ${e},`+`0 0 ${g} ${e},`+`0 0 ${g} ${e};`;break a}}d=""}c+=d;"textShadow"in this.a?(d=mw(this.a.textShadow),d=jw(d),d=`text-shadow:${d};`):d="";c=c+d+("fontFamily"in this.a?`font-family:${this.a.fontFamily.replace("monospaceSansSerif",
"monospace").replace("monospaceSerif","monospace").replace("proportionalSansSerif","sans-serif").replace("proportionalSerif","sans-serif").replace("sansSerif","sans-serif").replace("default","sans-serif")};`:"");a:{if(Yv in this.a){d=this.a.textDecoration.split(" ");e=[];for(f of d)switch(f){case "underline":case "overline":e.push(f);break;case "lineThrough":e.push("line-through")}if(0<e.length){var f=`text-decoration:${e.join(" ")};`;break a}}f=""}"padding"in this.a?(d="border: solid transparent;border-width:"+
jw(this.a.padding),d+=";"):d="";f=c=c+f+d;"lineHeight"in this.a?(c="",d=this.a.lineHeight,d=jw(d),d=lw(d,b),c+="line-height:",c+=d,c+=";"):c="";a.push(f+c+"}");a:{if("fontSize"in this.a&&(f=this.a.fontSize.split(" "),c=null,1===f.length&&(c=f[0]),2===f.length&&(c=f[1]),c)){c=c.trim();c=jw(c);c=lw(c,b);b=`font-size:${c};`;break a}b=null}b&&(f=`::ttml .${this.h} .clpp-text-wrapper {`,f+=b,f+="}",a.push(f),f=`::ttml .clpp-text-wrapper__${this.h} {`,f+=b,f+="}",a.push(f));return a}},Pw=new Map([[Tv,"background-color"],
["color","color"],[Uv,Uv],["fontStyle","font-style"],["fontWeight","font-weight"],["opacity","opacity"],["zIndex","z-index"]]);var Rw=class{constructor(a){this.B=a;this.w=this.l=null;this.A=0;this.h=new Map;this.a=new Map;this.j=new Map;this.f=new Map;this.o=[]}Rc(){return this.o.map(a=>a.build(this.l,this.w,this.A,this.h,this.a,this.j,this.f)).filter(a=>null!=a)}},xw=0;var Uw=class{constructor(a){this.a=a.firstChild;this.f=new Set}Dc(){return!!this.a}next(){if(!this.a)return null;let a=this.a;do this.f.add(a),a.nodeType!==Node.TEXT_NODE&&!Sw.has(iw(a.nodeName))||Tw.has(iw(a.nodeName))||!a.firstChild||this.f.has(a.firstChild)?a.nextSibling?a=a.nextSibling:a=a.parentNode:a=a.firstChild;while(a&&(this.f.has(a)||a.nodeType!==Node.TEXT_NODE&&!Sw.has(iw(a.nodeName))));const b=this.a;this.a=a;return b}},Sw=new Set(["tt","head","layout",_.ye,_.de,Wv,"styling",_.Sf,"body",
_.Gd,"p","span","br"]),Tw=new Set([_.Sf,_.de]);var Ew=class{constructor(a,b,c,d,e,f){this.h=a;this.a=b;this.j=c;this.l=d;this.f=e;this.attributes=f}getId(){return this.attributes.id}};var Vw=class{constructor(){this.a=new Map}};var Ww=class{constructor(a){this.a=a;this.f=new DOMParser}parseInit(){}parseMedia(a,b,c){c&&c.length||(c=[a.byteLength]);var d=_.Qg(this.a.ttml||{}),e=_.J(a,0,c[0]);e=_.oi(e);if(""===e)return{cues:[],styles:[]};var f=null;try{f=this.f.parseFromString(e,_.Wf)}catch(m){throw new _.H(_.F,2,2005,"Failed to parse TTML.");}d=new Rw(d);e=new Vw;f=new Uw(f);b=b.periodStart;typeof b===_.t&&(d.A=b);b=c[0];for(var g=1;g<c.length;++g){var h=c[g],k=_.J(a,b,h);k=_.Ci(k);const m=`urn:mpeg:14496-30:subs:${g}`;d.h.set(m,
new Iw(m,k,{imageType:"PNG",encoding:"Base64"}));b+=h}for(;f.Dc();)a=f.next(),a=Fw(e,a),c=d,b=a,"tt"===Cw(b)&&(c.l=new Ow(c.B,Object.assign({},b.attributes))),c=d,b=a,"tt"===Cw(b)&&(c.w=new Mw(b.attributes.frameRate,b.attributes.subFrameRate,b.attributes.frameRateMultiplier,b.attributes.tickRate)),c=d,b=a,Cw(b)!==_.de||b.attributes.begin||b.attributes.end||(g=`#${b.getId()}`,c.h.set(g,new Iw(g,b.h.textContent,b.attributes))),c=d,g=a,Cw(g)===_.de&&g.attributes.begin&&g.attributes.end?(b=`#${yw()}`,
g=new Iw(b,g.h.textContent,g.attributes),c.h.set(b,g),c=g):c=null,c&&(a.j=c.getId()),c=d,b=a,Cw(b)===_.Sf&&(g=b.getId()||yw(),h=new Qw(g,b.f,Object.assign({},b.attributes)),c.a.set(g,h),b.a&&c.j.get(b.a).f.push(g)),c=d,g=a,Cw(g)!==_.Sf&&Aw(g)?(b=yw(),g=new Qw(b,[],Object.assign({},g.attributes)),c.a.set(b,g),c=g):c=null,c&&a.f.push(c.getId()),c=d,g=a,Cw(g)!==_.Gd||!g.attributes.extent&&!g.attributes.origin?c=null:(b=yw(),g=new Nw(b,Bw(c,g.f),Object.assign({},g.attributes)),c.j.set(b,g),c=g),c&&(a.a=
c.getId()),c=d,g=a,Cw(g)!==Wv?c=null:(b=g.getId(),g=new Nw(b,Bw(c,g.f),Object.assign({},g.attributes)),c.j.set(b,g),c=g),c&&(a.a=c.getId()),c=d,g=a,b=g.l,-1===["#text","span","br"].indexOf(Cw(g))||0===b.length?c=null:(h=b[b.length-1],c.f.has(h)?(b=yw(),g=new Lw(b,"#text"===g.h.nodeName?g.h.textContent:null,"br"===Cw(g),g.a,g.j,Bw(c,g.f),g.attributes),c.f.set(b,g),(c=c.f.get(h))&&c.j.push(b),c=g):c=null),c&&a.l.push(c.getId()),c=d,g=a,"p"===Cw(g)||g.j?(b=yw(),g=new Lw(b,null,!1,g.a,g.j,Bw(c,g.f),g.attributes),
c.f.set(b,g),c.o.push(g),c=g):c=null,c&&a.l.push(c.getId());e=d.Rc();f=[];for(l of d.a.values())f.push(...l.build(d.l));var l=f;return{cues:e,styles:l}}};var Xw=class{constructor(a){this.f=a}a(a){var b=new Ww(this.f);({cues:a}=b.parseMedia(a,{periodStart:0,segmentStart:null,segmentEnd:0}));b="WEBVTT\n\n";for(const d of a){a=b;b=Gw(d.startTime)+" --\x3e "+Gw(d.endTime);{var c=d;const e=[];switch(c.textAlign){case _.he:e.push("align:left");break;case _.zf:e.push("align:right");break;case _.ws:e.push("align:middle");break;case _.he:e.push("align:start");break;case _.zf:e.push("align:end")}switch(c.writingMode){case _.ig:e.push("vertical:lr");break;case _.jg:e.push("vertical:rl")}c=
e.length?" "+e.join(" "):""}b=a+(b+c+"\n");b+=d.payload+"\n\n"}return _.si(b)}},Yw=class{probe(a,b){return a===_.Dc&&b===_.Vf}create(a){return new Xw(a)}};var Zw=class{constructor(a){this.a=new Ww(a);this.g=new _.R("clpp.ttml.Mp4TtmlParser")}parseInit(a){let b=!1;(new _.Ml).M(_.Be,_.Fl).M(_.Yf,_.Fl).M(_.we,_.Fl).M(_.Ae,_.Fl).M(_.Pf,_.Fl).ca(_.Rf,_.Gl).M("stpp",c=>{b=!0;c.parser.stop()}).parse(a);if(!b)throw new _.H(_.F,2,2007);}parseMedia(a,b){let c=!1,d=[],e=[];const f=[];(new _.Ml).M("moof",_.Fl).M("traf",_.Fl).ca("subs",g=>{const h=_.P(g.reader);for(let k=0;k<h;++k){g.reader.skip(4);const l=_.yl(g.reader);for(let m=0;m<l;++m){const n=1===g.version?
_.P(g.reader):_.yl(g.reader);f.push(n);g.reader.skip(6)}}}).M(_.ve,_.Hl(g=>{c=!0;g=this.a.parseMedia(g,b,f);d=d.concat(g.cues);e=e.concat(g.styles)})).parse(a);c||this.g.warn("Couldn't find the mdat box");return{cues:d,styles:e}}};_.z("clpp.ttml.TtmlComponent",class extends _.Yt{constructor(){super();this.j=new Yw}f(){_.gs(_.Dc,Ww);_.gs(_.Bc,Zw);_.gs(Qv,Zw);_.gs(Sv,Zw);_.gs(Rv,Zw);_.Dj.push(this.j)}a(){_.is(_.Dc);_.is(_.Bc);_.is(Qv);_.is(Sv);_.is(Rv);_.Fj(this.j)}id(){return"subtitles-ttml"}});};f.call(g, window);