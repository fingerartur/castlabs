(function(){var g={}; var _ = _ || {}
var f=function(window){var Lv='" event to Youbora',Mv='Reporting "',Nv="clpp.npaw.YouboraPlugin",Ov="content.isLive",Pv=function(a){return(a=a.getConfiguration().youbora)&&a.errorFilter?a.errorFilter:function(b){return{code:""+b.code,message:b.message,severity:b.severity}}},Qv=function(a,b,c,d){b=Pv(b)(a);if(!b)return c.debug("Error not sent to Youbora",a.code,a.message),null;a=10003===a.code?"ad error":_.te;b.severity===_.O?(d.fireFatalError(b.code,b.message,b.metadata),c.debug('Reporting "fatal '+a+'" to Youbora',b.code,
b)):(d.fireError(b.code,b.message,b.metadata),c.debug(Mv+a+'" to Youbora',b.code,b));return b},Rv=function(a){function b(c){var d=youbora.Adapter.call(this,c)||this;d.m=c;d.a=new _.Xh;d.g=new _.K("clpp.npaw.YouboraAdapter");d.w=!1;d.h=!1;d.registerListeners();d.B=!1;return d}_.x(b,youbora.Adapter);b.prototype.getPlayhead=function(){return this.getIsLive()?-1:this.m.getPosition()};b.prototype.getDuration=function(){return this.m.getDuration()};b.prototype.getRendition=function(){var c=this.m.getTrackManager();
if(c&&(c=c.na())){var d=c.width;var e=c.height;var f=c.bandwidth}d&&e&&f||(c=this.l(),d=d||c.width,e=e||c.height,f=f||c.streamBandwidth);return youbora.Util.buildRenditionString(d,e,f)};b.prototype.getIsLive=function(){return this.m.isLive()};b.prototype.getResource=function(){var c=this.m.getLoadedSource();return c&&c.url};b.prototype.getBitrate=function(){return this.l().streamBandwidth};b.prototype.getThroughput=function(){return this.l().estimatedBandwidth};b.prototype.getPlayrate=function(){return this.m.getPlaybackRate()};
b.prototype.getFramesPerSecond=function(){var c=this.m.getTrackManager();return c&&(c=c.Ka())?c.frameRate:null};b.prototype.getPlayerName=function(){return _.wa};b.prototype.getVersion=function(){return"6.18.0-castlabsadapter-js"};b.prototype.getPlayerVersion=function(){return _.ja};b.prototype.registerListeners=function(){this.m&&this.a&&(this.g.debug("registering listeners"),youbora.Util.logAllEvents(this.m),this.a.on(this.m,_.jg,this.K.bind(this)),this.a.on(this.m,_.te,this.H.bind(this)),this.a.on(this.m,
_.Gg,this.J.bind(this)),this.a.on(this.m,_.Dg,this.I.bind(this)),this.a.on(this.m,_.Qc,this.D.bind(this)),this.a.on(this.m,_.sd,this.G.bind(this)))};b.prototype.unregisterListeners=function(){this.g.debug(_.kc);_.$h(this.a)};b.prototype.dispose=function(){youbora.Adapter.prototype.dispose.call(this);this.B=!0};b.prototype.l=function(){return this.m.getStats()||_.jp()};b.prototype.o=function(){return!!this.m.getConfiguration().autoplay};b.prototype.K=function(c){c=c.detail;this.j("state change",c);
if(c)switch(c.currentState){case _.zp:this.o()&&this.f();break;case _.Bp:this.f();this.A();this.fireResume();this.fireBufferEnd();break;case _.Ap:this.o()&&this.f();this.A();this.fireBufferEnd();this.firePause();break;case _.np:this.fireBufferEnd();this.fireStop();break;case _.up:this.fireBufferEnd();this.w&&this.plugin.getAdsAdapter()?this.firePause():this.fireStop();break;case _.sp:this.fireBufferBegin();break;default:this.g.debug("Unhandled state",c)}};b.prototype.f=function(){this.plugin.isInitiated||
(this.h=!1,this.fireInit())};b.prototype.A=function(){var c=this.m.getDrmInfo();c&&(c=c.keySystem,(c=c.startsWith(_.Vd)?"Widevine":c.startsWith(_.Rd)?"FairPlay":c.match(/^com\.(microsoft|chromecast)\.playready/)?"PlayReady":c.startsWith(_.hf)?"ClearKey":c.startsWith(_.Qd)?"Primetime":c)&&this.plugin.setOptions({"content.drm":c}));this.fireJoin()};b.prototype.H=function(c){!(c=c.detail)||this.h||10003===c.code&&this.plugin.getAdsAdapter()||(c=Qv(c,this.m,this.g,this))&&c.severity===_.O&&(this.h=!0)};
b.prototype.J=function(){this.m.isEnded()||(this.j(_.bg),this.f(),this.fireSeekBegin())};b.prototype.I=function(){this.j(_.ag);this.fireSeekEnd()};b.prototype.D=function(c){this.g.debug("adsTimeline",c);c=c.adsTimeline;this.w=!!c&&c.sb()};b.prototype.G=function(c){this.g.debug("Casting",c);this.fireCasted()};b.prototype.j=function(c,d){for(var e=[],f=1;f<arguments.length;++f)e[f-1]=arguments[f];this.g.debug.apply(this.g,[Mv+c+Lv].concat(_.fh(e)))};return new b(a)},Sv=function(a){function b(c){var d=
youbora.Adapter.call(this,c)||this;d.m=c;d.a=null;d.j=null;d.f=new _.Xh;d.g=new _.K("clpp.npaw.YouboraAdsAdapter");d.registerListeners();d.A=!1;d.l=!1;return d}_.x(b,youbora.Adapter);b.prototype.getDuration=function(){return this.a&&this.a.getDuration()};b.prototype.getRendition=function(){var c=null;this.a&&(c=youbora.Util.buildRenditionString(this.a.Gb(),this.a.Fb(),this.a.qb()));return c};b.prototype.getBitrate=function(){return this.a&&this.a.qb()};b.prototype.getPlayhead=function(){var c=this.m.getAdsManager();
return c&&c.getPosition()};b.prototype.getResource=function(){return this.a&&this.a.getMediaUrl()};b.prototype.getTitle=function(){return this.a&&this.a.getTitle()};b.prototype.getProvider=function(){return this.a&&this.a.getAdvertiserName()};b.prototype.getCreativeId=function(){return this.a&&this.a.getCreativeId()};b.prototype.getPosition=function(){var c=youbora.Constants.AdPosition,d=null;if(this.a)switch(this.a.gb()){case 0:d=c.Preroll;break;case 2:d=c.Postroll;break;case 1:d=c.Midroll}this.g.debug("Ad position",
d);return d};b.prototype.getIsSkippable=function(){return this.a&&-1!==this.a.getSkipTimeOffset()};b.prototype.getAudioEnabled=function(){var c=this.m.getAdsManager();return c&&0<c.getVolume()};b.prototype.getExpectedBreaks=function(){return this.j&&this.j.getCuePoints().length};b.prototype.getGivenBreaks=function(){return this.getExpectedBreaks()};b.prototype.getExpectedAds=function(){return this.a&&this.a.Ib()};b.prototype.getGivenAds=function(){return this.getExpectedAds()};b.prototype.getBreaksTime=
function(){var c=this;return this.j&&this.j.getCuePoints().map(function(d){return-1===d?c.m.getDuration():d})};b.prototype.getIsFullscreen=function(){return this.m.getSurface().isFullscreen()};b.prototype.getIsVisible=function(){var c=this.m.getSurface().getContainer();c=youbora.Util.calculateAdViewability(c);this.g.debug("is container visible",c);return c};b.prototype.getPlayerName=function(){return _.wa};b.prototype.getVersion=function(){return"6.18.0-castlabsadsadapter-js"};b.prototype.getPlayerVersion=
function(){return _.ja};b.prototype.registerListeners=function(){this.m&&this.f&&(this.f.on(this.m,_.Qc,this.V.bind(this)),this.f.on(this.m,_.Mc,this.R.bind(this)),this.f.on(this.m,_.Ic,this.K.bind(this)),this.f.on(this.m,_.Kc,this.L.bind(this)),this.f.on(this.m,_.Dc,this.I.bind(this)),this.f.on(this.m,_.Ec,this.o.bind(this,1)),this.f.on(this.m,_.Hc,this.o.bind(this,2)),this.f.on(this.m,_.Oc,this.o.bind(this,3)),this.f.on(this.m,_.Cc,this.H.bind(this)),this.f.on(this.m,_.Lc,this.N.bind(this)),this.f.on(this.m,
_.te,this.J.bind(this)),this.f.on(this.m,_.zc,this.B.bind(this)),this.f.on(this.m,_.Ac,this.D.bind(this)),this.f.on(this.m,_.Bc,this.G.bind(this)),this.f.on(this.m,_.Jc,this.w.bind(this)))};b.prototype.unregisterListeners=function(){_.$h(this.f)};b.prototype.dispose=function(){youbora.Adapter.prototype.dispose.call(this);this.A=!0};b.prototype.V=function(c){this.g.debug("ad timeline changed",c);this.j=c.adsTimeline};b.prototype.R=function(c){this.a=c.ad;this.h("ad start",this.a);this.fireStart();
this.fireJoin()};b.prototype.I=function(){this.h("ad ended");this.fireStop()};b.prototype.K=function(){this.h("ad pause");this.w();this.firePause()};b.prototype.L=function(){this.h("ad resume");this.w();this.fireResume()};b.prototype.G=function(){this.l=!0;this.h("ad buffering started");this.fireBufferBegin()};b.prototype.w=function(){this.l&&(this.h("ad buffering ended"),this.l=!1,this.fireBufferEnd())};b.prototype.o=function(c){this.h("ad quartile",c);this.fireQuartile(c)};b.prototype.H=function(){this.h("ad clicked");
var c=this.a&&this.a.Wb();this.g.debug("ad click through url: ",c);this.fireClick(c)};b.prototype.N=function(){this.h("ad skipped");this.fireSkip()};b.prototype.B=function(c){this.a=c.ad;this.h("ad break start",this.a);this.fireBreakStart()};b.prototype.D=function(){this.h("ad break stop");this.fireBreakStop();if(this.getPosition()===youbora.Constants.AdPosition.Postroll){var c=this.plugin.getAdapter();c&&c.fireStop()}};b.prototype.J=function(c){(c=c.detail)&&10003===c.code&&Qv(c,this.m,this.g,this)};
b.prototype.h=function(c,d){for(var e=[],f=1;f<arguments.length;++f)e[f-1]=arguments[f];this.g.debug.apply(this.g,[Mv+c+Lv].concat(_.fh(e)))};return new b(a)},Tv=function(){this.a=null;this.g=new _.K(Nv);this.m=null},Uv=function(a,b){if(b.namespace()===_.Hd)return a.g.info("Youbora does not report when casting."),!1;var c=b.getConfiguration().youbora;if(!_.M.Ih(c))return a.g.warn("Youbora plugin is loaded but not configured. Will do nothing."),!1;if(!c.accountCode)return a.g.warn("accountCode key is missing in Youbora config"),
b.onError(new _.N(1,9,9101)),!1;if(_.M.S(window.youbora))return a.g.warn("Youbora SDK not found."),b.onError(new _.N(1,9,9100)),!1;"6.8.59"!==youbora.VERSION&&(a.g.warn("Youbora SDK version is not supported. The supported version is 6.8.59, found version "+(youbora.VERSION+". Some or all features of YouboraPlugin may not work correctly.")),b.onError(new _.N(1,9,9102)));return!0},Vv=function(){};_.x(Tv,_.Gu);_.t=Tv.prototype;_.t.ig=function(a){this.a&&(this.a.removeAdsAdapter(),this.a.removeAdapter());if(this.a=a)this.a.setAdapter(Rv(this.m)),this.a.setAdsAdapter(Sv(this.m))};_.t.getAdapter=function(){return this.a&&this.a.getAdapter()};_.t.getAdsAdapter=function(){return this.a&&this.a.getAdsAdapter()};_.t.onPlayerCreated=function(a){this.m=a;Uv(this,a)&&(a=a.getConfiguration().youbora,this.ig(new youbora.Plugin(a)))};
_.t.onContentWillLoad=function(a,b){if(Uv(this,a)){var c=a.getConfiguration(),d=c.youbora;void 0===d[Ov]&&(d[Ov]=b.isLive);void 0===d["content.title"]&&(d["content.title"]=b.name);void 0===d.viewerId&&(d.viewerId=c.viewerId);this.a||this.ig(new youbora.Plugin(d));this.a.setOptions(d)}};_.t.onPlayerWillRelease=function(){};_.t.onPlayerWillDestroy=function(){};_.t.id=function(){return"youbora"};_.J(Nv,Tv);Tv.prototype.getAdsAdapter=Tv.prototype.getAdsAdapter;Tv.prototype.getAdapter=Tv.prototype.getAdapter;
Tv.prototype.setYouboraPlugin=Tv.prototype.ig;Tv.Id="youbora";Vv.prototype.create=function(){return new Tv};_.br(new Vv);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();