(function(){var g={}; var _ = _ || {}
var f=function(window){var YS=function(a){this.startTime=a.startTime;this.endTime=a.endTime;this.a=this.f=null;a=a.value;if(!_.M.S(a)){a:{var b=a.info;if(_.M.ca(b)&&(b=b.toLowerCase().match(/lang:(\w+)/))&&b[1]){b=b[1].toLowerCase();break a}b=null}this.f=b;a=a.data;this.a=_.M.ca(a)?a:null}},$S=function(a,b,c){this.m=a;this.l=b;this.j=c;this.a=new _.Xh;this.h=(a=_.uu(_.$c))?new a(this.m.getConfiguration()):null;this.g=new _.K("clpp.hlssmpte.ImageCueHandler");this.f=null;ZS(this)},ZS=function(a){a.a.one(a.m,_.Le,function(){return aT(a)})},
aT=function(a){var b=a.m.getSurface().getMedia();if(b)if(a.h){a.a.on(b.textTracks,_.Pc,function(d){return bT(a,d)});var c=Array.from(b.textTracks);c.filter(function(d){return d.kind===_.Te}).forEach(function(d){bT(a,{track:d})});!cT(c)&&a.l&&(a.g.warn("The metadata track is not present. Changing an audio track in order to enforce the creation of the metadata track."),dT(a,b))}else a.g.warn("The clpp.ttml.TextParser class is not available. Please register the ttml component first.");else a.g.warn("A video element is not available. Skipping.")},
cT=function(a){return a.some(function(b){return b.kind===_.Te})},dT=function(a,b){var c=a.m.getTrackManager(),d=c.ma(),e=c.getAudioTracks().find(function(g){return g!==d});if(e){var f=function(){return c.Ba(d)};a.a.on(b.textTracks,_.Pc,function(g){g.track.kind===_.Te&&(a.a.off(b.textTracks,_.Pc,f),f())});c.Ba(e)}else a.g.warn("Can't enforce the creation of the metadata track if single audio track. Skipping.")},bT=function(a,b){var c=b.track;c.kind===_.Te&&(a.g.info("The metadata track has been added."),
c.mode=_.ye,a.a.on(c,_.Yd,function(d){return eT(a,d)}))},eT=function(a,b){var c=fT(a);c&&Array.from(b.target.activeCues||[]).forEach(function(d){if(d!==a.f&&Number.isFinite(d.startTime)&&Number.isFinite(d.endTime)&&"org.id3"===d.type&&d.value&&"TXXX"===d.value.key){var e=new YS(d);if(e.f===c&&null!==e.a){a.f=d;d=a.h.parseMedia(_.S.Wa(e.a),{periodStart:a.j,segmentStart:e.startTime,segmentEnd:e.endTime});var f=a.m.getTextDisplayer();f.remove(0,e.startTime);f.append(d.cues,d.styles)}}})},fT=function(a){return(a=
a.m.getTrackManager().wa())&&a.language&&a.language.toLowerCase()},gT=function(){this.a=null;this.f=!1},hT=function(){};$S.prototype.destroy=function(){this.a.release();this.f=null;return Promise.resolve()};_.x(gT,_.Gu);gT.prototype.onPlayerCreated=function(){};gT.prototype.onContentWillLoad=function(a){if(this.f=_.gl()){var b=a.getConfiguration();b=_.M.Oa(b.hlssmpte||{});_.M.Eh(b.patchMetadataTrack)||(b.patchMetadataTrack=!1);_.M.sa(b.timestampOffset)||(b.timestampOffset=0);this.a=new $S(a,b.patchMetadataTrack,b.timestampOffset)}};gT.prototype.onPlayerWillDestroy=function(){var a=this;return _.I(function(b){if(1==b.a)return a.a?_.y(b,a.a.destroy(),3):b.F(0);a.a=null;_.B(b)})};gT.prototype.id=function(){return"hlssmpte"};
_.J("clpp.hlssmpte.HlsSmptePlugin",gT);gT.Id="hlssmpte";hT.prototype.create=function(){return new gT};_.br(new hT);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();