import {clpp} from "./cl.core.js";let g={};const _ = clpp._;var f=function(window){'use strict';var oz=function(a,b){let c=b.baseUrl;_.wi(c,"/")||(c+="/");const d=g=>g&&(_.vi(g,"https://")||_.vi(g,"http://")||_.vi(g,"//"))?g:`${c}${g}`,e=d(b.widevineUrl||"widevine"),f=d(b.playreadyUrl||"playready");b=d(b.fairplayUrl||"fairplay");a=new _.kt(a);a.Ta(_.zd,{licenseUrl:e,videoRobustness:[_.Gb,void 0],audioRobustness:[_.Fb,void 0],persistentStateRequired:!1,distinctiveIdentifierRequired:!1,serverCertificate:null,modifiers:{licenseRequest:_.Zl,licenseResponse:_.$l}});a.Ta(_.vd,{licenseUrl:b,
certificateUrl:b,modifiers:{licenseRequest:_.bm,licenseResponse:_.cm,extractContentId:_.dm,certificateRequest:_.em}});a.Ta(_.xd,{licenseUrl:f,modifiers:{licenseRequest:_.Zl}});_.ol(a)};
_.z("clpp.onboard.OnboardComponent",class extends _.Yt{constructor(){super();this.g=new _.R("clpp.onboard");this.j=new Set}a(){for(const a of this.j)delete _.nl[a];this.j.clear()}h(a){a=a.getConfiguration().drm;var b;if(b=!(!a||!a.env))b=a&&a.customData,b=!(!b||!b.baseUrl);b&&(b=a.env,a=a.customData,a={baseUrl:a.baseUrl,widevineUrl:a.widevineUrl,playreadyUrl:a.playreadyUrl,fairplayUrl:a.fairplayUrl},this.g.info(`Registering the DRMtoday Onboard environment, name='${b}'`),oz(b,a),this.j.add(b))}id(){return"onboard"}});
_.z("clpp.onboard.register",oz);};f.call(g, window);