(function(){var g={}; var _ = _ || {}
var f=function(window){var GT="Ad Error",HT="onAdBreakStarted()",IT="onAdBreakStopped()",JT=function(a){function b(l,m){l in h||!m||(h[l]=m)}var c=_.ak(),d=Conviva.Constants.DeviceType.DESKTOP,e=Conviva.Constants.DeviceCategory.WEB,f=c.os;c=c.osVersion.name;var g="";_.gl()&&(g="Apple");_.fl()?(g="Google",d=Conviva.Constants.DeviceType.SETTOP,e=Conviva.Constants.DeviceCategory.CHROMECAST):_.hl()?(d=Conviva.Constants.DeviceType.MOBILE,/(android)/i.test(navigator.userAgent)?e=Conviva.Constants.DeviceCategory.ANDROID_DEVICE:
_.gl()&&(e=Conviva.Constants.DeviceCategory.APPLE_DEVICE)):_.Zj()||_.Yj()||_.bl("Hisense")?(d=Conviva.Constants.DeviceType.SMARTTV,e=Conviva.Constants.DeviceCategory.SMART_TV,_.Zj()?(c="",g="LG",e=Conviva.Constants.DeviceCategory.LG_TV):_.Yj()?(g="Samsung",e=Conviva.Constants.DeviceCategory.SAMSUNG_TV):_.bl("Hisense")&&(c="",g="Hisense")):_.bl("Xbox One")&&(g="Microsoft",d=Conviva.Constants.DeviceType.CONSOLE,e=Conviva.Constants.DeviceCategory.XBOX);var h=a.deviceMetadata||{};b(Conviva.Constants.DeviceMetadata.TYPE,
a.deviceType||d);b(Conviva.Constants.DeviceMetadata.OS_NAME,f);b(Conviva.Constants.DeviceMetadata.OS_VERSION,c);b(Conviva.Constants.DeviceMetadata.CATEGORY,a.deviceCategory||e);b(Conviva.Constants.DeviceMetadata.BRAND,a.deviceBrand||g);return h},KT=function(a){return a?Conviva.Constants.StreamType.LIVE:Conviva.Constants.StreamType.VOD},LT=function(a){return 0===a?"Pre-roll":-1===a?"Post-roll":"Mid-roll"},NT=function(a,b,c,d){var e={};e[Conviva.Constants.PLAYER_NAME]=c;e[Conviva.Constants.VIEWER_ID]=
b;e[Conviva.Constants.IS_LIVE]=KT(!!d);e[Conviva.Constants.ASSET_NAME]=GT;a&&(e[Conviva.Constants.ASSET_NAME]=a.getTitle(),e[Conviva.Constants.STREAM_URL]=a.getMediaUrl(),e[Conviva.Constants.DURATION]=a.getDuration(),e["c3.ad.id"]=MT(a.getId()),e["c3.ad.creativeId"]=MT(a.getCreativeId()),e["c3.ad.system"]=MT(a.getAdSystem()),e["c3.ad.mediaFileApiFramework"]=MT(a.getApiFramework()),e["c3.ad.advertiser"]=MT(a.getAdvertiserName()),e["c3.ad.position"]=LT(a.getPodIndex()),e["c3.ad.technology"]=0===a.Jb()?
Conviva.Constants.AdType.CLIENT_SIDE:Conviva.Constants.AdType.SERVER_SIDE,e["c3.ad.adManagerName"]=MT(a.Cb()),e["c3.ad.adManagerVersion"]=MT(a.Db()),e["c3.ad.advertiserCategory"]=MT(null),e["c3.ad.advertiserId"]=MT(null),e["c3.ad.breakId"]=MT(null),e["c3.ad.campaignName"]=MT(null),e["c3.ad.category"]=MT(null),e["c3.ad.classification"]=MT(null),e["c3.ad.creativeName"]=MT(null),e["c3.ad.sequence"]=MT(a.Yb()),e["c3.ad.sessionStartEvent"]=MT(null),e["c3.ad.unitName"]=MT(null),e["c3.ad.dayPart"]=MT(null),
b=a.getWrapperAdIds().slice(-1)[0]||a.getId(),c=a.getWrapperAdSystems().slice(-1)[0]||a.getAdSystem(),a=a.getWrapperCreativeIds().slice(-1)[0]||a.getCreativeId(),e["c3.ad.firstAdId"]=MT(b),e["c3.ad.firstAdSystem"]=MT(c),e["c3.ad.firstCreativeId"]=MT(a));return e},MT=function(a){return a?""+a:"NA"},OT=function(a,b){this.m=a;this.B=b;this.A="";this.w=_.wa;this.g=new _.K("clpp.conviva.ad");this.f=new _.Xh;this.a=null;this.j=this.l=this.o=this.h=!1},PT=function(a,b){if(!a.l){a.j=!1;try{if(a.a=Conviva.Analytics.buildAdAnalytics(a.B()),
b){var c=NT(b,a.A,a.w,a.m.isLive()),d=String(b.Db()),e={};e[Conviva.Constants.FRAMEWORK_NAME]=b.Cb();e[Conviva.Constants.FRAMEWORK_VERSION]=d;a.a.setAdPlayerInfo(e);a.a.reportAdStarted(c)}}catch(f){a.g.error("Could not create ad analytics session",f)}}},ST=function(a,b,c){c=void 0===c?GT:c;if(a.a){a.a.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.STOPPED);switch(b){case QT:a.a.reportAdFailed(c,NT(null,a.A,a.w));break;case RT:a.a.reportAdSkipped();break;default:a.a.reportAdEnded()}a.a.release();
a.a=null;a.h=!1}},TT=function(a){a.f.on(a.m,_.zc,a.nj.bind(a));a.f.on(a.m,_.Ac,a.oj.bind(a));a.f.on(a.m,_.Mc,a.uj.bind(a));a.f.on(a.m,_.Jc,a.Je.bind(a));a.f.on(a.m,_.Ic,a.Je.bind(a));a.f.on(a.m,_.Kc,a.Je.bind(a));a.f.on(a.m,_.Bc,a.Je.bind(a));a.f.on(a.m,_.Nc,a.vj.bind(a));a.f.on(a.m,_.Lc,a.tj.bind(a));a.f.on(a.m,_.Cc,a.pj.bind(a));a.f.on(a.m,_.Fc,a.rj.bind(a));a.f.on(a.m,_.Gc,a.sj.bind(a));a.f.on(a.m,_.Ec,a.qj.bind(a));a.f.on(a.m,_.Hc,a.Ql.bind(a));a.f.on(a.m,_.Oc,a.wj.bind(a));a.f.on(a.m,_.te,function(b){var c=
b.detail;if(10003===c.code&&(a.g.debug("onAdError()"),!a.j)){b=Conviva.Constants.ErrorSeverity;switch(c.data.errorType){case 0:c="Ad Load Error";break;case 1:c="Ad Play Error";break;default:c=GT}null===a.a&&PT(a,null);a.a.reportAdError(c,b.FATAL);a.j=!0;a.g.debug("Ad Playback Failure");ST(a,QT,c)}})},UT=function(a,b){this.m=a;this.f=new _.Xh;this.a=null;this.o=!1;this.H=!0;this.B=this.h=this.A=this.D=this.l=!1;this.N=0;this.K=!1;this.w=null;this.J=!1;this.g=b;this.L=this.G=null;this.j=[];this.I=0},
VT=function(a){if(!a.l&&a.a){var b=KT(a.m.isLive()),c={};c[Conviva.Constants.IS_LIVE]=b;c[Conviva.Constants.DURATION]=a.m.getDuration();a.a.setContentInfo(c)}},WT=function(a){return null!==a.a&&a.D},XT=function(a){return a.m.getConfiguration().autoplay||!1},YT=function(a,b){var c={};c[Conviva.Constants.LOG_LEVEL]=Conviva.Constants.LogLevel.DEBUG;b.serviceUrl&&(a.g.warn("Touchstone URL is set. Do not set this in production!"),c[Conviva.Constants.GATEWAY_URL]=b.serviceUrl.replace(/\/$/,""));Conviva.Analytics.init(b.customerKey,
null,c);Conviva.Analytics.setDeviceMetadata(JT(b));b.connectionType&&Conviva.Analytics.reportDeviceMetric(Conviva.Constants.Network.CONNECTION_TYPE,b.connectionType);a.a=Conviva.Analytics.buildVideoAnalytics();a.o=!1;c={};c[Conviva.Constants.FRAMEWORK_NAME]=_.wa;c[Conviva.Constants.FRAMEWORK_VERSION]=_.ja;a.a.setPlayerInfo(c)},ZT=function(a){if(!a.l)if(a.D)a.g.warn("Current session still active. No-op.");else{var b=a.m.getLoadedSource()||a.L,c=a.m.getConfiguration().conviva||null,d=c&&c.viewerId||
"N/A",e=c&&c.defaultResource||"N/A";a.g.debug(a.m.getConfiguration().source);var f={},g=new _.tk(b.url);b&&(f[Conviva.Constants.ASSET_NAME]=b.name||"N/A",f[Conviva.Constants.STREAM_URL]=_.uk(g));f[Conviva.Constants.PLAYER_NAME]=c.playerName||_.wa;f[Conviva.Constants.VIEWER_ID]=d;f[Conviva.Constants.DEFAULT_RESOURCE]=e;if(c&&!_.M.S(c.customTags))for(var h in c.customTags)f[h]=c.customTags[h];a.a.reportPlaybackRequested(f);a.a.setCallback(function(){a.g.debug("reportMiscellaneousMetrics()");if(WT(a)){var l=
1E3*a.m.getPosition();a.a.reportPlaybackMetric(Conviva.Constants.Playback.PLAY_HEAD_TIME,l);if(l=a.m.getStats()){l=l.decodedFrames;var m=l-a.I;a.I=l;isFinite(m)&&(a.g.debug("Current FPS",m),a.a.reportPlaybackMetric(Conviva.Constants.Playback.RENDERED_FRAMERATE,m))}}});a.D=!0;a.h=!0;a.J=!1;0<a.j.length&&(a.g.debug("Report deferred events"),a.j.forEach(function(l){l.oh(l.args)}));a.j=[]}},$T=function(a){a.g.debug("terminateSession()");a.a&&(a.a.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE,
Conviva.Constants.PlayerState.STOPPED),a.a.reportPlaybackEnded(),a.a.release(),Conviva.Analytics.release(),a.o=!0,a.D=!1,a.A=!1,a.h=!1,a.w=null,a.B=!1,a.N=0,a.K=!1,a.j=[],a.I=0)},aU=function(){this.h=this.f=null;this.a=!1;this.g=new _.K("clpp.conviva")},bU=function(a){var b=[];typeof a===_.$e&&(a.customerKey||b.push("customerKey"),a.viewerId||b.push("viewerId"));if(0<b.length)throw new _.N(1,9,9001,{missingKeys:b});},cU=function(a,b){var c=b.getConfiguration();a.a=!_.M.S(c.conviva)&&typeof c.conviva===
_.$e;a.a?"undefined"===typeof window.Conviva?(a.g.warn("Conviva SDK is not loaded. Will do nothing."),a.a=!1,c=new _.N(1,9,9E3),a.T(b,c)):b.namespace()===_.Hd&&(a.a=!1,a.g.debug("Conviva does not report when casting.")):a.g.warn("Conviva plugin is loaded but not configured. Will do nothing.")},dU=function(){};_.t=OT.prototype;_.t.initialize=function(a){this.g.debug("Initialize Ad Insights");this.j=this.o=!1;this.A=a.viewerId;this.w=a.playerName||_.wa;TT(this)};_.t.release=function(){this.g.debug("Release Ad Insights");this.o?this.g.debug(_.ma):(_.$h(this.f),this.a&&ST(this,eU),this.f.release(),this.o=!0,this.h=this.j=!1)};_.t.destroy=function(){this.g.debug(_.$d);this.l?this.g.debug(_.la):this.l=!0};_.t.nj=function(){this.g.debug(HT)};_.t.oj=function(){this.g.debug(IT)};
_.t.uj=function(a){this.g.debug("onAdStarted()");a=a.ad;this.h||(this.g.warn("Ad load event was not triggered. This will have incidence on VSF"),PT(this,a));this.h=!1;this.a.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE,Conviva.Constants.PlayerState.PLAYING);this.a.reportAdMetric(Conviva.Constants.Playback.RESOLUTION,a.Gb(),a.Fb());this.a.reportAdMetric(Conviva.Constants.Playback.BITRATE,a.qb())};
_.t.Je=function(a){var b=this;this.g.debug("onAdStateChanged()");if(this.a){var c=function(d){b.a.reportAdMetric(Conviva.Constants.Playback.PLAYER_STATE,d)};switch(a.type){case _.Jc:case _.Kc:c(Conviva.Constants.PlayerState.PLAYING);break;case _.Ic:c(Conviva.Constants.PlayerState.PAUSED);break;case _.Bc:c(Conviva.Constants.PlayerState.BUFFERING)}}};_.t.vj=function(){this.g.debug("onAdStopped()");this.a&&!this.j&&ST(this,eU)};_.t.tj=function(){this.g.debug("onAdSkipped()");this.a&&ST(this,RT)};
_.t.pj=function(){this.g.debug("onAdClicked()");this.a&&this.a.reportAdPlayerEvent("AdClicked")};_.t.rj=function(){this.g.debug("onAdImpression()");if(this.a){var a=Conviva.Constants.Events;this.a.reportAdPlayerEvent(a.AD_IMPRESSION_START);this.a.reportAdPlayerEvent(a.AD_IMPRESSION_END)}};
_.t.sj=function(a){var b=this;this.g.debug("onAdLoaded()");var c=a.ad;if(-1!==c.getPodIndex()||this.m.getPosition()>=this.m.getDuration()-5)b.h=!0,PT(b,c);else this.f.on(this.m,_.ug,function(){b.m.getPosition()>=b.m.getDuration()-5&&(b.f.off(b.m,_.ug),b.h=!0,PT(b,c))})};_.t.qj=function(){this.g.debug("onAdFirstQuartile()");this.a&&this.a.reportAdPlayerEvent(Conviva.Constants.Events.AD_FIRST_QUARTILE)};_.t.Ql=function(){this.g.debug("onAdMidPoint()");this.a&&this.a.reportAdPlayerEvent(Conviva.Constants.Events.AD_MID_QUARTILE)};
_.t.wj=function(){this.g.debug("onAdThirdQuartile()");this.a&&this.a.reportAdPlayerEvent(Conviva.Constants.Events.AD_THIRD_QUARTILE)};var RT=0,eU=1,QT=2;_.t=UT.prototype;
_.t.initialize=function(a,b,c){this.l||(this.g.debug("Initialize conviva"),this.H=!1,this.G=_.M.Oa(b),this.L=c,this.m=a,YT(this,this.G),this.f.on(this.m,_.of,this.rm.bind(this)),this.f.on(this.m,_.jg,this.Bj.bind(this)),this.f.on(this.m,_.ld,this.Ig.bind(this)),this.f.on(this.m,_.Gg,this.Aj.bind(this)),this.f.on(this.m,_.Dg,this.zj.bind(this)),this.f.on(this.m,_.zc,this.xj.bind(this)),this.f.on(this.m,_.Ac,this.yj.bind(this)),this.f.on(this.m,_.Qc,this.Wl.bind(this)),this.f.on(this.m,_.kd,this.Yl.bind(this)),
this.f.on(this.m,_.te,this.Jg.bind(this)),XT(this)&&(this.g.debug("Start a new session: A new video starts in autoplay."),ZT(this)))};_.t.release=function(){this.g.debug("Release conviva");this.H?this.g.debug(_.ma):(_.$h(this.f),WT(this)||this.o||!XT(this)||this.a&&this.a.reportPlaybackFailed("Exit Before Video Start"),WT(this)&&$T(this),this.a=null,this.H=!0)};_.t.destroy=function(){this.g.debug(_.$d);this.l?this.g.debug(_.la):this.l=!0};
_.t.reportAppEvent=function(a,b){var c=!1;try{Conviva.Analytics.reportAppEvent(a,b),c=!0}catch(d){this.g.debug("Report app event error",d),c=!1}return c};_.t.rm=function(){this.g.debug("onPlayRequest()");WT(this)||XT(this)?WT(this)&&this.A&&!this.h&&(this.g.debug("Resuming VST monitoring ..."),WT(this)&&!this.h&&(this.a.reportPlaybackEvent(Conviva.Constants.Events.USER_WAIT_ENDED),this.h=!0),this.A=!1):(this.g.debug("Creating conviva session. On Play Requested / No autoplay"),ZT(this))};
_.t.Bj=function(a){function b(d){if(c.o&&(c.g.debug("Creating conviva session (On Seek / Replay)"),YT(c,c.G),ZT(c),VT(c),WT(c))){var e=c.m.getTrackManager();e=e.na()||e.fb();e.width&&e.height&&c.a.reportPlaybackMetric(Conviva.Constants.Playback.RESOLUTION,e.width,e.height);e.bandwidth&&c.a.reportPlaybackMetric(Conviva.Constants.Playback.BITRATE,e.bandwidth/1E3)}WT(c)&&c.a.reportPlaybackMetric(Conviva.Constants.Playback.PLAYER_STATE,d)}var c=this;this.g.debug(_.ef);switch(a.detail.currentState){case _.Bp:b(Conviva.Constants.PlayerState.PLAYING);
break;case _.Ap:b(Conviva.Constants.PlayerState.PAUSED);break;case _.sp:b(Conviva.Constants.PlayerState.BUFFERING);break;case _.up:this.g.debug("onVideoEnded()"),WT(this)&&(this.w&&this.w.sb()?(this.g.debug("Waiting for postroll Ad before terminating session"),this.K=!0):$T(this))}};
_.t.Ig=function(a){this.g.debug(_.af);if(WT(this)){if(a=a.detail,typeof a.width===_.k&&typeof a.height===_.k&&this.a.reportPlaybackMetric(Conviva.Constants.Playback.RESOLUTION,a.width,a.height),a.bandwidth&&this.a.reportPlaybackMetric(Conviva.Constants.Playback.BITRATE,a.bandwidth/1E3),(a=a.rendition)&&a.track&&(a=a.track)&&a.frameRate){var b={};b[Conviva.Constants.ENCODED_FRAMERATE]=a.frameRate;this.a.setContentInfo(b)}}else this.j.push({oh:this.Ig.bind(this),args:a})};
_.t.Aj=function(){this.g.debug("onSeeking()");WT(this)&&this.a.reportPlaybackMetric(Conviva.Constants.Playback.SEEK_STARTED)};_.t.zj=function(){this.g.debug("onSeeked()");WT(this)&&this.a.reportPlaybackMetric(Conviva.Constants.Playback.SEEK_ENDED)};_.t.Wl=function(a){this.g.debug("onAdsTimelineChanged()");if(a=a.adsTimeline)this.w=a};
_.t.xj=function(a){this.g.debug(HT);var b=a.ad;a=0===b.gb();var c=LT(b.getPodIndex());WT(this)||XT(this)||!a||ZT(this);if(WT(this)){a=0===b.Jb()?Conviva.Constants.AdType.CLIENT_SIDE:Conviva.Constants.AdType.SERVER_SIDE;var d=0,e={};1===b.Ib()&&(d=b.getDuration());e[Conviva.Constants.POD_DURATION]=d;e[Conviva.Constants.POD_INDEX]=++this.N;e[Conviva.Constants.POD_POSITION]=c;b=Conviva.Constants.AdPlayer;b=a!==Conviva.Constants.AdType.CLIENT_SIDE||_.fl()?b.CONTENT:b.SEPARATE;this.a.reportAdBreakStarted(a,
b,e);this.B=!0}else this.g.debug("Bug: should already have a valid session")};_.t.yj=function(){this.g.debug(IT);WT(this)&&this.B&&(this.a.reportAdBreakEnded(),this.B=!1,this.K&&$T(this))};
_.t.Jg=function(a){this.g.debug(_.bf);if(this.o&&this.J)this.g.debug("Session ended in VPF; ignoring subsequent errors");else{var b=a.detail||null,c=b&&b.message||"Player error",d=Conviva.Constants.ErrorSeverity.WARNING;b&&b.severity&&b.severity===_.O&&(d=Conviva.Constants.ErrorSeverity.FATAL,WT(this)||ZT(this));WT(this)?(this.g.debug("Report error",c,d),this.a.reportPlaybackError(c,d),d===Conviva.Constants.ErrorSeverity.FATAL&&(this.g.debug("Video Playback Failure"),this.J=!0,$T(this))):this.j.push({oh:this.Jg.bind(this),
args:a})}};_.t.Yl=function(){this.g.debug("onAutoPlayBlocked()");WT(this)&&(this.g.debug("Auto-play blocked. Pausing VST monitoring."),this.A=!0,WT(this)&&this.h&&(this.a.reportPlaybackEvent(Conviva.Constants.Events.USER_WAIT_STARTED),this.h=!1))};_.t=aU.prototype;_.t.onPlayerCreated=function(a){this.f=new UT(a,this.g)};_.t.onContentWillLoad=function(a,b){var c=this;cU(this,a);if(this.a){var d=a.getConfiguration();d=_.M.Oa(d.conviva||{});try{bU(d);var e=d.enableAdInsights||!1;this.f.initialize(a,d,b);e&&(this.h=new OT(a,function(){return c.f.a}),this.h.initialize(d))}catch(f){f instanceof _.N?this.T(a,f):this.T(a,new _.N(1,9,9002,f,f))}}};_.t.onContentLoaded=function(a,b){for(var c=1;c<arguments.length;++c);this.a&&VT(this.f)};
_.t.onPlayerWillDestroy=function(){this.a&&(this.a=!1,this.f.destroy(),this.f=null,this.h&&(this.h.destroy(),this.h=null))};_.t.onPlayerWillRelease=function(){this.a&&(this.f.release(),this.h&&this.h.release())};_.t.id=function(){return"conviva"};_.t.T=function(a,b){a.trigger(new _.L(_.te,{detail:b}))};_.t.reportAppEvent=function(a,b){return this.f?this.f.reportAppEvent(a,b):!1};_.J("clpp.conviva.ConvivaPlugin",aU);aU.prototype.reportAppEvent=aU.prototype.reportAppEvent;aU.Id="conviva";
dU.prototype.create=function(){return new aU};_.br(new dU);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();