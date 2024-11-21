/**
 * @fileoverview Generated externs.
 * @externs
 */
var clpp;
clpp.AbstractBasePlayer;
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.AbstractBasePlayer.prototype.getNetworkEngine = function() {
};
/**
 * @return {(cl.api.ITextDisplayer|null)}
 */
clpp.AbstractBasePlayer.prototype.getTextDisplayer = function() {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.AbstractBasePlayer.prototype.setNetworkEngine = function(engine) {
};
/**
 * @param {(TimeRanges|null)=} opt_delegate
 * @param {string=} opt_type
 * @constructor
 */
clpp.BufferInfo = function(opt_delegate, opt_type) {
};
/**
 * @return {(null|number)}
 */
clpp.BufferInfo.prototype.bufferEnd = function() {
};
/**
 * @return {(null|number)}
 */
clpp.BufferInfo.prototype.bufferStart = function() {
};
/**
 * @param {number} time
 * @param {boolean=} opt_includeGaps
 * @return {number}
 */
clpp.BufferInfo.prototype.bufferedAheadOf = function(time, opt_includeGaps) {
};
/**
 * @param {number} index
 * @return {number}
 */
clpp.BufferInfo.prototype.end = function(index) {
};
/**
 * @param {number} time
 * @param {boolean=} opt_includeGaps
 * @param {number=} opt_smallGapLimit
 * @return {boolean}
 */
clpp.BufferInfo.prototype.isBuffered = function(time, opt_includeGaps, opt_smallGapLimit) {
};
/**
 * @param {number} index
 * @return {number}
 */
clpp.BufferInfo.prototype.start = function(index) {
};
/** @enum {string} */
clpp.CodecSwitchingStrategy = {PREVENT:1, SMOOTH:2};
/**
 * @param {number} severity
 * @param {number} category
 * @param {number} code
 * @param {(Object|null|string)=} opt_data
 * @param {*=} opt_error
 * @extends {Error}
 * @constructor
 */
clpp.Error = function(severity, category, code, opt_data, opt_error) {
};
/** @enum {number} */
clpp.Error.Category = {NETWORK:1, TEXT:2, MEDIA:3, MANIFEST:4, STREAMING:5, DRM:6, PLAYER:7, CAST:8, PLUGIN:9, ADS:10};
/** @enum {number} */
clpp.Error.Code = {UNSUPPORTED_SCHEME:1, BAD_HTTP_STATUS:2, HTTP_ERROR:3, TIMEOUT:4, MALFORMED_DATA_URI:5, UNKNOWN_DATA_URI_ENCODING:6, REQUEST_MODIFIER_ERROR:7, RESPONSE_MODIFIER_ERROR:8, MALFORMED_TEST_URI:9, UNEXPECTED_TEST_REQUEST:10, ATTEMPTS_EXHAUSTED:11, INVALID_TEXT_HEADER:12, INVALID_TEXT_CUE:13, UNABLE_TO_DETECT_ENCODING:14, BAD_ENCODING:15, INVALID_XML:16, INVALID_MP4_TTML:17, INVALID_MP4_VTT:18, UNABLE_TO_EXTRACT_CUE_START_TIME:19, FETCH_OR_APPEND_ERROR:20, INVALID_MP4:21, TEXT_PARSER_MISSING:22, 
THUMBNAILS_FAILED_TO_LOAD:23, THUMBNAIL_ERROR:24, BUFFER_READ_OUT_OF_BOUNDS:25, JS_INTEGER_OVERFLOW:26, EBML_OVERFLOW:27, EBML_BAD_FLOATING_POINT_SIZE:28, MP4_SIDX_WRONG_BOX_TYPE:29, MP4_SIDX_INVALID_TIMESCALE:30, MP4_SIDX_TYPE_NOT_SUPPORTED:31, WEBM_CUES_ELEMENT_MISSING:32, WEBM_EBML_HEADER_ELEMENT_MISSING:33, WEBM_SEGMENT_ELEMENT_MISSING:34, WEBM_INFO_ELEMENT_MISSING:35, WEBM_DURATION_ELEMENT_MISSING:36, WEBM_CUE_TRACK_POSITIONS_ELEMENT_MISSING:37, WEBM_CUE_TIME_ELEMENT_MISSING:38, MEDIA_SOURCE_OPERATION_FAILED:39, 
MEDIA_SOURCE_OPERATION_THREW:40, VIDEO_ERROR:41, QUOTA_EXCEEDED_ERROR:42, TRANSMUXING_FAILED:43, MP4_PARSER_ERROR:44, MEDIA_LOAD_ERROR:45, INVALID_TRACK_TYPE:46, UNKNOWN_TRACK:47, MEDIA_DECRYPTION_ERROR:48, PLAY_NOT_ALLOWED:49, UNABLE_TO_GUESS_MANIFEST_TYPE:50, DASH_INVALID_XML:51, DASH_NO_SEGMENT_INFO:52, DASH_EMPTY_ADAPTATION_SET:53, DASH_EMPTY_PERIOD:54, DASH_WEBM_MISSING_INIT:55, DASH_UNSUPPORTED_CONTAINER:56, DASH_PSSH_BAD_ENCODING:57, DASH_NO_COMMON_KEY_SYSTEM:58, DASH_MULTIPLE_KEY_IDS_NOT_SUPPORTED:59, 
DASH_CONFLICTING_KEY_IDS:60, UNPLAYABLE_PERIOD:61, RESTRICTIONS_CANNOT_BE_MET:62, NO_PERIODS:63, HLS_PLAYLIST_HEADER_MISSING:64, INVALID_HLS_TAG:65, HLS_INVALID_PLAYLIST_HIERARCHY:66, DASH_DUPLICATE_REPRESENTATION_ID:67, HLS_MULTIPLE_MEDIA_INIT_SECTIONS_FOUND:68, HLS_COULD_NOT_GUESS_MIME_TYPE:69, HLS_REQUIRED_ATTRIBUTE_MISSING:70, HLS_REQUIRED_TAG_MISSING:71, HLS_COULD_NOT_GUESS_CODECS:72, HLS_KEYFORMATS_NOT_SUPPORTED:73, DASH_UNSUPPORTED_XLINK_ACTUATE:74, DASH_XLINK_DEPTH_LIMIT:75, HLS_COULD_NOT_PARSE_SEGMENT_START_TIME:76, 
CONTENT_UNSUPPORTED_BY_BROWSER:77, SMOOTH_INVALID_MANIFEST_XML:78, SMOOTH_EMPTY_PRESENTATION:79, SMOOTH_MEDIA_PROCESSING_ERROR:80, SMOOTH_INVALID_VERSION:81, SMOOTH_INVALID_FRAGMENT_METADATA:82, SMOOTH_REQUIRED_ATTRIBUTE_MISSING:83, SMOOTH_TRUNCATED_MEDIA_FILE:84, CANNOT_ADD_EXTERNAL_TEXT_TO_LIVE_STREAM:85, HLS_MSE_ENCRYPTED_TS_NOT_SUPPORTED:86, HLS_PLAYLIST_NOT_UTF8:87, HLS_PLAYLIST_EMPTY:88, HLS_INVALID_VALUE:89, HLS_DISCONTINUITY_NOT_SUPPORTED:90, HLS_UNSUPPORTED_FEATURE:91, HLS_INCOMPATIBLE_PLAYLIST_UPDATE:92, 
INVALID_STREAMS_CHOSEN:93, NO_RECOGNIZED_KEY_SYSTEMS:94, REQUESTED_KEY_SYSTEM_CONFIG_UNAVAILABLE:95, FAILED_TO_CREATE_CDM:96, FAILED_TO_ATTACH_TO_VIDEO:97, INVALID_SERVER_CERTIFICATE:98, FAILED_TO_CREATE_SESSION:99, FAILED_TO_GENERATE_LICENSE_REQUEST:100, LICENSE_REQUEST_FAILED:101, LICENSE_RESPONSE_REJECTED:102, ENCRYPTED_CONTENT_WITHOUT_DRM_INFO:103, NO_LICENSE_SERVER_GIVEN:104, OFFLINE_SESSION_REMOVED:105, EXPIRED:106, REQUESTED_DRM_ENVIRONMENT_UNAVAILABLE:107, INIT_DATA_TRANSFORM_ERROR:108, CERTIFICATE_REQUEST_FAILED:109, 
NO_CONTENT_ID:110, SERVER_CERTIFICATE_REQUIRED:111, EXTRACT_CONTENT_ID_MODIFIER_ERROR:112, FAILED_TO_PERSIST_SESSION:113, FAILED_TO_REMOVE_SESSION:114, INVALID_SESSION_STORAGE_IMPLEMENTATION:115, LOAD_INTERRUPTED:116, OPERATION_ABORTED:117, NO_VIDEO_ELEMENT:118, CANNOT_LOAD_SOURCE:119, MEDIA_ELEMENT_NOT_FOUND:120, INVALID_MEDIA_ELEMENT:121, INVALID_CONTAINER_ELEMENT:122, INVALID_ARGUMENT:123, WRONG_ORDER_OF_OPERATIONS:124, NOT_SUPPORTED:125, INVALID_CONFIGURATION:126, INVALID_LICENSE:127, NO_ELEMENT:128, 
USER_ID_NOT_PROVIDED:129, KEY_LOAD_ERROR:130, TIZEN_INTERNAL_ERROR:131, CAF_INTERNAL_ERROR:132, INTERNAL_CAST_ERROR:133, CAST_API_NOT_READY:134, NO_RECEIVERS_AVAILABLE:135, ALREADY_CASTING:136, NO_CAST_SESSION:137, CONVIVA_SDK_NOT_LOADED:138, CONVIVA_INVALID_CONFIGURATION:139, CONVIVA_RUNTIME_ERROR:140, GL_CONTEXT_ERROR:141, GL_SHADER_ERROR:142, YOUBORA_SDK_MISSING:143, YOUBORA_INVALID_CONFIGURATION:144, YOUBORA_SDK_VERSION_NOT_SUPPORTED:145, VIMOND_INVALID_CONFIGURATION:146, VIMOND_SESSION_ERROR:147, 
MUXDATA_INVALID_CONFIGURATION:148, MUX_SDK_MISSING:149, MUXDATA_INIT_ERROR:150, IMA_SDK_MISSING:151, IMA_INVALID_CONFIGURATION:152, IMA_UNSUPPORTED_PLATFORM:153, AD_ERROR:154, SIMID_CONTAINER_MISSING:155, BROADPEAK_SDK_MISSING:156, BROADPEAK_SESSION_ERROR:157, FREEWHEEL_SDK_MISSING:158, FREEWHEEL_INVALID_CONFIGURATION:159, CONTENT_TRANSFORMATION_FAILED:160, SESSIONS_INVALID_CONFIGURATION:161};
/** @enum {number} */
clpp.Error.Severity = {RECOVERABLE:1, FATAL:2};
clpp.Error.prototype.category;
clpp.Error.prototype.cause;
clpp.Error.prototype.code;
clpp.Error.prototype.data;
clpp.Error.prototype.severity;
clpp.EventTarget;
/**
 * @param {string} type
 * @param {(EventListener|function(!Event): *|null)} listener
 * @param {(AddEventListenerOptions|boolean)=} p2
 * @return {undefined}
 */
clpp.EventTarget.prototype.addEventListener = function(type, listener) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @return {boolean}
 */
clpp.EventTarget.prototype.off = function(name, callback) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.EventTarget.prototype.on = function(name, callback, opt_callbackScope) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.EventTarget.prototype.one = function(name, callback, opt_callbackScope) {
};
/**
 * @param {string} type
 * @param {(EventListener|function(!Event): *|null)} listener
 * @param {(EventListenerOptions|boolean)=} p2
 * @return {undefined}
 */
clpp.EventTarget.prototype.removeEventListener = function(type, listener) {
};
/**
 * @param {(HTMLMediaElement|null|string)} element
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}=} opt_configuration
 * @param {{containerEl: (Element|null), crossorigin: string, disableContainer: boolean, webOSStartupPatch: boolean}=} opt_viewConfiguration
 * @extends {clpp.EventTarget}
 * @implements {cl.api.IEventTarget}
 * @constructor
 */
clpp.Player = function(element, opt_configuration, opt_viewConfiguration) {
};
/** @enum {number} */
clpp.Player.State = {IDLE:1, PREPARING:2, BUFFERING:3, PLAYING:4, PAUSED:5, ENDED:6, ERROR:7, UNSET:8};
/**
 * @return {!Promise}
 */
clpp.Player.prototype.destroy = function() {
};
/**
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.Player.prototype.getAdsManager = function() {
};
/**
 * @param {string=} opt_type
 * @return {!clpp.BufferInfo}
 */
clpp.Player.prototype.getBufferInfo = function(opt_type) {
};
/**
 * @return {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}}
 */
clpp.Player.prototype.getConfiguration = function() {
};
/**
 * @return {(null|{audioRobustness: (Array<string>|null|string), distinctiveIdentifierRequired: boolean, initData: (Array<{initData: !Uint8Array, initDataType: string, keyId: (null|string), periodId: (null|string)}>|null), keyIds: (Array<string>|null), keySystem: string, licenseServerUri: string, periodId: (null|string), persistentStateRequired: boolean, serverCertificate: (Uint8Array|null), videoRobustness: (Array<string>|null|string)})}
 */
clpp.Player.prototype.getDrmInfo = function() {
};
/**
 * @return {number}
 */
clpp.Player.prototype.getDuration = function() {
};
/**
 * @return {(null|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})}
 */
clpp.Player.prototype.getLoadedSource = function() {
};
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.Player.prototype.getNetworkEngine = function() {
};
/**
 * @return {number}
 */
clpp.Player.prototype.getPlaybackRate = function() {
};
/**
 * @param {string} id
 * @return {(cl.api.PlayerPlugin|null)}
 */
clpp.Player.prototype.getPlugin = function(id) {
};
/**
 * @return {number}
 */
clpp.Player.prototype.getPosition = function() {
};
/**
 * @return {(null|number)}
 */
clpp.Player.prototype.getPresentationStartTime = function() {
};
/**
 * @return {{end: number, start: number}}
 */
clpp.Player.prototype.getSeekRange = function() {
};
/**
 * @return {(Array<{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}>|null)}
 */
clpp.Player.prototype.getSources = function() {
};
/**
 * @return {number}
 */
clpp.Player.prototype.getState = function() {
};
/**
 * @return {(null|{bufferingTime: number, corruptedFrames: number, decodedFrames: number, droppedFrames: number, estimatedBandwidth: number, height: number, loadLatency: number, pauseTime: number, playTime: number, stateHistory: !Array<{duration: number, state: number, timestamp: number}>, streamBandwidth: number, switchHistory: !Array<{bandwidth: (null|number), fromAdaptation: boolean, height: (null|number), id: string, timestamp: number, trackId: string, type: string, width: (null|number)}>, width: number})}
 */
clpp.Player.prototype.getStats = function() {
};
/**
 * @return {!cl.api.IPlayerSurface}
 */
clpp.Player.prototype.getSurface = function() {
};
/**
 * @return {(cl.api.ITextDisplayer|null)}
 */
clpp.Player.prototype.getTextDisplayer = function() {
};
/**
 * @return {!Array<{configurationId: (string|undefined), endTime: number, eventElement: (Element|null), id: string, schemeIdUri: string, startTime: number, type: string, value: string}>}
 */
clpp.Player.prototype.getTimelineCues = function() {
};
/**
 * @return {(null|{offsetDateTime: number, seekRangeStartDateTime: number})}
 */
clpp.Player.prototype.getTimelineOffset = function() {
};
/**
 * @return {(clpp.TrackManager|null)}
 */
clpp.Player.prototype.getTrackManager = function() {
};
/**
 * @return {(null|number)}
 */
clpp.Player.prototype.getVolume = function() {
};
/**
 * @return {boolean}
 */
clpp.Player.prototype.isEnded = function() {
};
/**
 * @return {boolean}
 */
clpp.Player.prototype.isLive = function() {
};
/**
 * @return {boolean}
 */
clpp.Player.prototype.isMuted = function() {
};
/**
 * @return {boolean}
 */
clpp.Player.prototype.isPaused = function() {
};
/**
 * @param {(Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|string|{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})} configuration
 * @return {!Promise}
 */
clpp.Player.prototype.load = function(configuration) {
};
/**
 * @return {string}
 */
clpp.Player.prototype.namespace = function() {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @return {boolean}
 */
clpp.Player.prototype.off = function(name, callback) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.Player.prototype.on = function(name, callback, opt_callbackScope) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.Player.prototype.one = function(name, callback, opt_callbackScope) {
};
/**
 * @return {!Promise}
 */
clpp.Player.prototype.pause = function() {
};
/**
 * @return {!Promise}
 */
clpp.Player.prototype.play = function() {
};
/**
 * @return {!Promise}
 */
clpp.Player.prototype.release = function() {
};
/**
 * @param {function(new:clpp.IComponent): ?} component
 * @return {boolean}
 */
clpp.Player.prototype.remove = function(component) {
};
/**
 * @return {undefined}
 */
clpp.Player.prototype.resetAbr = function() {
};
/**
 * @param {number} time
 * @return {!Promise<undefined>}
 */
clpp.Player.prototype.seek = function(time) {
};
/**
 * @param {(function(string, !clpp.Error): !Promise<string>|null)} callback
 * @return {undefined}
 */
clpp.Player.prototype.setCdnErrorCallback = function(callback) {
};
/**
 * @param {function(!Object<string,*>): !Promise} modifier
 * @return {undefined}
 */
clpp.Player.prototype.setDrmCustomDataModifier = function(modifier) {
};
/**
 * @param {boolean} muted
 * @return {undefined}
 */
clpp.Player.prototype.setMuted = function(muted) {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {undefined}
 */
clpp.Player.prototype.setNetworkEngine = function(engine) {
};
/**
 * @param {number} rate
 * @param {string=} opt_mode
 * @return {undefined}
 */
clpp.Player.prototype.setPlaybackRate = function(rate, opt_mode) {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.Player.prototype.setVolume = function(volume) {
};
/**
 * @param {function(new:clpp.IComponent): ?} component
 * @return {undefined}
 */
clpp.Player.prototype.use = function(component) {
};
/**
 * @param {!cl.api.PlayerPluginFactory} factory
 * @return {undefined}
 * @this {(typeof clpp.Player)}
 */
clpp.Player.registerPlugin = function(factory) {
};
clpp.PlayerSurface;
/**
 * @param {(Element|null)} element
 * @param {boolean=} opt_fill
 * @param {boolean=} opt_prepend
 * @return {?}
 */
clpp.PlayerSurface.prototype.addElementToContainer = function(element, opt_fill, opt_prepend) {
};
/**
 * @return {(Element|null)}
 */
clpp.PlayerSurface.prototype.getCastElement = function() {
};
/**
 * @return {(Element|null)}
 */
clpp.PlayerSurface.prototype.getContainer = function() {
};
/**
 * @return {(HTMLMediaElement|null)}
 */
clpp.PlayerSurface.prototype.getMedia = function() {
};
/**
 * @param {(Element|null)} element
 * @return {?}
 */
clpp.PlayerSurface.prototype.removeElementFromContainer = function(element) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {function({configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, description: (string|undefined), image: (string|undefined), title: (string|undefined)}): (Promise|null)=} onItemWillChange
 * @extends {clpp.EventTarget}
 * @implements {cl.api.IEventTarget}
 * @constructor
 */
clpp.Playlist = function(player, onItemWillChange) {
};
/**
 * @param {{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, description: (string|undefined), image: (string|undefined), title: (string|undefined)}} item
 * @return {undefined}
 */
clpp.Playlist.prototype.append = function(item) {
};
/**
 * @return {undefined}
 */
clpp.Playlist.prototype.clear = function() {
};
/**
 * @return {(null|{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, description: (string|undefined), image: (string|undefined), title: (string|undefined)})}
 */
clpp.Playlist.prototype.getCurrent = function() {
};
/**
 * @return {number}
 */
clpp.Playlist.prototype.getPosition = function() {
};
/**
 * @return {(Array<{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, description: (string|undefined), image: (string|undefined), title: (string|undefined)}>|null)}
 */
clpp.Playlist.prototype.getQueue = function() {
};
/**
 * @return {(null|{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, description: (string|undefined), image: (string|undefined), title: (string|undefined)})}
 */
clpp.Playlist.prototype.getUpcoming = function() {
};
/**
 * @param {number} position
 * @param {boolean=} reload
 * @return {!Promise<undefined>}
 */
clpp.Playlist.prototype.goTo = function(position, reload) {
};
/**
 * @param {{configuration: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, description: (string|undefined), image: (string|undefined), title: (string|undefined)}} item
 * @param {number} index
 * @return {undefined}
 */
clpp.Playlist.prototype.insert = function(item, index) {
};
/**
 * @return {boolean}
 */
clpp.Playlist.prototype.isStarted = function() {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.Playlist.prototype.next = function() {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @return {boolean}
 */
clpp.Playlist.prototype.off = function(name, callback) {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.Playlist.prototype.on = function(name, callback, opt_callbackScope) {
};
/**
 * @return {undefined}
 */
clpp.Playlist.prototype.onEnded = function() {
};
/**
 * @param {string} name
 * @param {(EventListener|function(!Event): *|null)} callback
 * @param {(Object|null)=} opt_callbackScope
 * @return {(EventListener|function(!Event): *|null)}
 */
clpp.Playlist.prototype.one = function(name, callback, opt_callbackScope) {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.Playlist.prototype.previous = function() {
};
/**
 * @param {number} index
 * @return {undefined}
 */
clpp.Playlist.prototype.remove = function(index) {
};
/**
 * @return {undefined}
 */
clpp.Playlist.prototype.start = function() {
};
/**
 * @return {undefined}
 */
clpp.Playlist.prototype.stop = function() {
};
/**
 * @param {string} id
 * @param {!clpp.Track} track
 * @implements {{bandwidth: (null|number), codec: (null|string), drmInfo: (null|string), height: (null|number), id: string, originalId: (null|string), track: {channelsCount: (null|number), frameRate: (null|number), id: string, kind: (null|string), label: (null|string), language: (null|string), mimeType: (null|string), originalLanguage: (null|string), renditions: !Array<*>, roles: !Array<string>, spatialAudio: boolean, src: (null|string), trickPlay: boolean, type: string}, width: (null|number)}}
 * @constructor
 */
clpp.Rendition = function(id, track) {
};
clpp.Rendition.prototype.bandwidth;
clpp.Rendition.prototype.codec;
clpp.Rendition.prototype.drmInfo;
clpp.Rendition.prototype.height;
clpp.Rendition.prototype.id;
clpp.Rendition.prototype.originalId;
clpp.Rendition.prototype.track;
clpp.Rendition.prototype.width;
/** @enum {string} */
clpp.SpeedUpMode = {DECODER:1, SEEK:2};
/** @enum {string} */
clpp.TimelineCueType = {SCTE35:1, DASH_CALLBACK:2, HLS_DATERANGE:3, UNKNOWN:4};
/**
 * @param {string} id
 * @param {string} type
 * @implements {{channelsCount: (null|number), frameRate: (null|number), id: string, kind: (null|string), label: (null|string), language: (null|string), mimeType: (null|string), originalLanguage: (null|string), renditions: !Array<*>, roles: !Array<string>, spatialAudio: boolean, src: (null|string), trickPlay: boolean, type: string}}
 * @constructor
 */
clpp.Track = function(id, type) {
};
/** @enum {string} */
clpp.Track.Type = {VIDEO:1, AUDIO:2, TEXT:3, METADATA:4};
clpp.Track.prototype.accessibility;
clpp.Track.prototype.channelsCount;
clpp.Track.prototype.frameRate;
clpp.Track.prototype.id;
clpp.Track.prototype.kind;
clpp.Track.prototype.label;
clpp.Track.prototype.language;
clpp.Track.prototype.mimeType;
clpp.Track.prototype.originalLanguage;
clpp.Track.prototype.renditions;
clpp.Track.prototype.roles;
clpp.Track.prototype.spatialAudio;
clpp.Track.prototype.src;
/**
 * @return {string}
 */
clpp.Track.prototype.toString = function() {
};
clpp.Track.prototype.trickPlay;
clpp.Track.prototype.type;
/**
 * @implements {cl.api.IReleasable}
 * @constructor
 */
clpp.TrackManager = function() {
};
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {boolean}
 */
clpp.TrackManager.prototype.canSelectVideoTracks = function() {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Rendition|null|undefined)}
 */
clpp.TrackManager.prototype.findAudioRendition = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Track|undefined)}
 */
clpp.TrackManager.prototype.findAudioTrack = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Rendition|null|undefined)}
 */
clpp.TrackManager.prototype.findTextRendition = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Track|undefined)}
 */
clpp.TrackManager.prototype.findTextTrack = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Rendition|null|undefined)}
 */
clpp.TrackManager.prototype.findVideoRendition = function(filter) {
};
/**
 * @param {(Object|null)} filter
 * @return {(clpp.Track|undefined)}
 */
clpp.TrackManager.prototype.findVideoTrack = function(filter) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.TrackManager.prototype.setVideoTrack = function(track) {
};
/** @enum {string} */
clpp.Type = {DASH:1, HLS:2, SMOOTH_STREAMING:3, MP4:4};
clpp.adobe;
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.adobe.AdobeAnalyticsPlugin = function() {
};
clpp.adobe.AdobeAnalyticsPlugin.Id;
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.ads = {};
/** @enum {number} */
clpp.ads.ErrorType = {LOAD:1, PLAY:2, OTHER:3};
/**
 * @interface
 */
clpp.ads.IAd = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getAdManagerName = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getAdManagerVersion = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getAdSystem = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getAdvertiserName = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ads.IAd.prototype.getApiFramework = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ads.IAd.prototype.getClickThroughUrl = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getCreativeId = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getMediaBitrate = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getMediaHeight = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ads.IAd.prototype.getMediaUrl = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getMediaWidth = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getPodIndex = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getPodTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getPodType = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getPositionInSequence = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getSequenceLength = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getSkipTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAd.prototype.getTechnology = function() {
};
/**
 * @return {string}
 */
clpp.ads.IAd.prototype.getTitle = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ads.IAd.prototype.getWrapperAdIds = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ads.IAd.prototype.getWrapperAdSystems = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ads.IAd.prototype.getWrapperCreativeIds = function() {
};
/**
 * @return {boolean}
 */
clpp.ads.IAd.prototype.isBumper = function() {
};
/**
 * @interface
 */
clpp.ads.IAdsManager = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.ads.IAdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.ads.IAdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.ads.IAdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.ads.IAdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.ads.IAdsManager.prototype.skip = function() {
};
/**
 * @interface
 */
clpp.ads.IAdsManagerFactory = function() {
};
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.ads.IAdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} config
 * @return {boolean}
 */
clpp.ads.IAdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.ads.IAdsManagerFactory.prototype.name = function() {
};
/**
 * @interface
 */
clpp.ads.IAdsTimeline = function() {
};
/**
 * @return {(Array<number>|null)}
 */
clpp.ads.IAdsTimeline.prototype.getCuePoints = function() {
};
/**
 * @return {boolean}
 */
clpp.ads.IAdsTimeline.prototype.hasPostroll = function() {
};
/**
 * @return {boolean}
 */
clpp.ads.IAdsTimeline.prototype.hasPreroll = function() {
};
clpp.ads.NopAdsManager;
/**
 * @return {(Promise|null)}
 */
clpp.ads.NopAdsManager.prototype.dispose = function() {
};
/**
 * @return {number}
 */
clpp.ads.NopAdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.ads.NopAdsManager.prototype.getVolume = function() {
};
/**
 * @return {!Promise}
 */
clpp.ads.NopAdsManager.prototype.load = function() {
};
/**
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.ads.NopAdsManager.prototype.skip = function() {
};
/**
 * @param {(cl.api.IPlayer|null)} delegate
 * @return {!Promise}
 */
clpp.ads.NopAdsManager.prototype.start = function(delegate) {
};
clpp.ads.NopAdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.ads.NopAdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} configuration
 * @return {boolean}
 */
clpp.ads.NopAdsManagerFactory.prototype.isSupported = function(player, configuration) {
};
/**
 * @return {string}
 */
clpp.ads.NopAdsManagerFactory.prototype.name = function() {
};
/** @enum {number} */
clpp.ads.PodType = {PREROLL:1, MIDROLL:2, POSTROLL:3};
/** @enum {number} */
clpp.ads.Technology = {CLIENT_SIDE:1, SERVER_SIDE:2};
clpp.airplay;
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.airplay.AirPlayPlugin = function() {
};
clpp.airplay.AirPlayPlugin.Id;
/**
 * @return {boolean}
 */
clpp.airplay.AirPlayPlugin.prototype.canCast = function() {
};
/**
 * @return {boolean}
 */
clpp.airplay.AirPlayPlugin.prototype.isCasting = function() {
};
/**
 * @return {undefined}
 */
clpp.airplay.AirPlayPlugin.prototype.showCastMenu = function() {
};
clpp.broadpeak;
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.broadpeak.BroadpeakPlugin = function() {
};
clpp.broadpeak.BroadpeakPlugin.Id;
/**
 * @return {boolean}
 * @this {(typeof clpp.broadpeak.BroadpeakPlugin)}
 */
clpp.broadpeak.BroadpeakPlugin.isSdkMissing = function() {
};
clpp.cast;
/**
 * @param {(clpp.Player|null)} player
 * @param {string} receiverAppId
 * @param {function(number, {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}): ?=} onResumeLocal
 * @extends {clpp.EventTarget}
 * @implements {cl.api.IDestroyable}
 * @implements {cl.api.IEventTarget}
 * @constructor
 */
clpp.cast.CastProxy = function(player, receiverAppId, onResumeLocal) {
};
/**
 * @param {function(*): ?} listener
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.addMessageListener = function(listener) {
};
/**
 * @return {boolean}
 */
clpp.cast.CastProxy.prototype.canCast = function() {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}=} opt_playerConfig
 * @return {!Promise}
 */
clpp.cast.CastProxy.prototype.cast = function(opt_playerConfig) {
};
/**
 * @param {string} newAppId
 * @return {!Promise}
 */
clpp.cast.CastProxy.prototype.changeReceiverId = function(newAppId) {
};
/**
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.clearContentMetadata = function() {
};
/**
 * @return {!Promise}
 */
clpp.cast.CastProxy.prototype.destroy = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.forceDisconnect = function() {
};
/**
 * @return {(chrome.cast.media.AudiobookChapterMediaMetadata|chrome.cast.media.GenericMediaMetadata|chrome.cast.media.MovieMediaMetadata|chrome.cast.media.MusicTrackMediaMetadata|chrome.cast.media.PhotoMediaMetadata|chrome.cast.media.TvShowMediaMetadata|null)}
 */
clpp.cast.CastProxy.prototype.getContentMetadata = function() {
};
/**
 * @return {string}
 */
clpp.cast.CastProxy.prototype.getReceiverName = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.CastProxy.prototype.isCasting = function() {
};
/**
 * @param {function(*): ?} listener
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.removeMessageListener = function(listener) {
};
/**
 * @param {(Object|string)} message
 * @return {!Promise}
 */
clpp.cast.CastProxy.prototype.sendMessage = function(message) {
};
/**
 * @param {string} artist
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.setContentArtist = function(artist) {
};
/**
 * @param {string} imageUrl
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.setContentImage = function(imageUrl) {
};
/**
 * @param {(chrome.cast.media.AudiobookChapterMediaMetadata|chrome.cast.media.GenericMediaMetadata|chrome.cast.media.MovieMediaMetadata|chrome.cast.media.MusicTrackMediaMetadata|chrome.cast.media.PhotoMediaMetadata|chrome.cast.media.TvShowMediaMetadata|null)} metadata
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.setContentMetadata = function(metadata) {
};
/**
 * @param {string} date
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.setContentReleaseDate = function(date) {
};
/**
 * @param {string} title
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.setContentTitle = function(title) {
};
/**
 * @param {(function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}): (Promise<(null|{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})})>|null|{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})})|null)} interceptor
 * @return {undefined}
 */
clpp.cast.CastProxy.prototype.setPlayerConfigInterceptor = function(interceptor) {
};
clpp.cast.CastSender;
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.cast.CastSender.prototype.getNetworkEngine = function() {
};
/**
 * @return {(cl.api.ITextDisplayer|null)}
 */
clpp.cast.CastSender.prototype.getTextDisplayer = function() {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.cast.CastSender.prototype.setNetworkEngine = function(engine) {
};
/**
 * @constructor
 */
clpp.cast.CastUtils = function() {
};
clpp.cast.Player;
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.cast.Player.prototype.getNetworkEngine = function() {
};
/**
 * @return {(cl.api.ITextDisplayer|null)}
 */
clpp.cast.Player.prototype.getTextDisplayer = function() {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.cast.Player.prototype.setNetworkEngine = function(engine) {
};
/**
 * @constructor
 */
clpp.cast.Receiver = function() {
};
/**
 * @return {!clpp.cast.Receiver}
 * @this {(typeof clpp.cast.Receiver)}
 */
clpp.cast.Receiver.getInstance = function() {
};
/**
 * @param {function(*): ?} listener
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.addMessageListener = function(listener) {
};
/**
 * @return {(cast.framework.messages.AudiobookChapterMediaMetadata|cast.framework.messages.GenericMediaMetadata|cast.framework.messages.MovieMediaMetadata|cast.framework.messages.MusicTrackMediaMetadata|cast.framework.messages.PhotoMediaMetadata|cast.framework.messages.TvShowMediaMetadata|null)}
 */
clpp.cast.Receiver.prototype.getContentMetadata = function() {
};
/**
 * @param {(clpp.Player|null)} player
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.init = function(player) {
};
/**
 * @return {boolean}
 */
clpp.cast.Receiver.prototype.isApiReady = function() {
};
/**
 * @param {string} type
 * @param {function(!cast.framework.system.Event): ?} handler
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.off = function(type, handler) {
};
/**
 * @param {string} type
 * @param {function(!cast.framework.system.Event): ?} handler
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.on = function(type, handler) {
};
/**
 * @param {function(*): ?} listener
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.removeMessageListener = function(listener) {
};
/**
 * @param {*} message
 * @param {string=} senderId
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.sendMessage = function(message, senderId) {
};
/**
 * @param {(function(!cast.framework.messages.LoadRequestData): (Promise<(cast.framework.messages.LoadRequestData|null)>|cast.framework.messages.LoadRequestData|null)|null)} interceptor
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.setLoadRequestDataInterceptor = function(interceptor) {
};
/**
 * @param {(function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}): (Promise<(null|{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})})>|null|{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})})|null)} interceptor
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.setPlayerConfigInterceptor = function(interceptor) {
};
/**
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.start = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.Receiver.prototype.stop = function() {
};
clpp.cast.SenderTrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.cast.SenderTrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.SenderTrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.SenderTrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.SenderTrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.SenderTrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.SenderTrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.SenderTrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.SenderTrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.SenderTrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.SenderTrackManager.prototype.setVideoTrack = function(track) {
};
clpp.cast.TrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.cast.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.cast.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.cast.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.cast.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.cast.TrackManager.prototype.setVideoTrack = function(track) {
};
clpp.cast.ads;
clpp.cast.ads.Ad;
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getAdManagerName = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getAdManagerVersion = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getAdSystem = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getAdvertiserName = function() {
};
/**
 * @return {(null|string)}
 */
clpp.cast.ads.Ad.prototype.getApiFramework = function() {
};
/**
 * @return {(null|string)}
 */
clpp.cast.ads.Ad.prototype.getClickThroughUrl = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getCreativeId = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getMediaBitrate = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getMediaHeight = function() {
};
/**
 * @return {(null|string)}
 */
clpp.cast.ads.Ad.prototype.getMediaUrl = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getMediaWidth = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getPodIndex = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getPodTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getPodType = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getPositionInSequence = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getSequenceLength = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getSkipTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.Ad.prototype.getTechnology = function() {
};
/**
 * @return {string}
 */
clpp.cast.ads.Ad.prototype.getTitle = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.cast.ads.Ad.prototype.getWrapperAdIds = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.cast.ads.Ad.prototype.getWrapperAdSystems = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.cast.ads.Ad.prototype.getWrapperCreativeIds = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.ads.Ad.prototype.isBumper = function() {
};
clpp.cast.ads.AdsManager;
/**
 * @return {number}
 */
clpp.cast.ads.AdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.AdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.AdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.AdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.cast.ads.AdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.AdsManager.prototype.skip = function() {
};
clpp.cast.ads.AdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.cast.ads.AdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} config
 * @return {boolean}
 */
clpp.cast.ads.AdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.cast.ads.AdsManagerFactory.prototype.name = function() {
};
clpp.cast.ads.AdsTimeline;
/**
 * @return {(Array<number>|null)}
 */
clpp.cast.ads.AdsTimeline.prototype.getCuePoints = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.ads.AdsTimeline.prototype.hasPostroll = function() {
};
/**
 * @return {boolean}
 */
clpp.cast.ads.AdsTimeline.prototype.hasPreroll = function() {
};
clpp.cast.ads.SenderAdsManager;
/**
 * @return {number}
 */
clpp.cast.ads.SenderAdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.cast.ads.SenderAdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.SenderAdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.SenderAdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.cast.ads.SenderAdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.cast.ads.SenderAdsManager.prototype.skip = function() {
};
clpp.cast.ads.SenderAdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.cast.ads.SenderAdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} config
 * @return {boolean}
 */
clpp.cast.ads.SenderAdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.cast.ads.SenderAdsManagerFactory.prototype.name = function() {
};
clpp.conviva;
/**
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.conviva.ConvivaPlugin = function() {
};
clpp.conviva.ConvivaPlugin.Id;
/**
 * @param {string} eventType
 * @param {(Object|null)=} opt_eventDetail
 * @return {boolean}
 */
clpp.conviva.ConvivaPlugin.prototype.reportAppEvent = function(eventType, opt_eventDetail) {
};
clpp.crypto;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.crypto.CryptoComponent = function() {
};
clpp.dash;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.dash.DashComponent = function() {
};
clpp.drm;
/**
 * @param {string} name
 * @constructor
 */
clpp.drm.DrmEnvironment = function(name) {
};
/**
 * @param {string} identifier
 * @param {({audioRobustness: (Array<(null|string)>|null|string|undefined), individualizationServer: (string|undefined), licenseUrl: string, modifiers: (undefined|{certificateRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|undefined)|undefined), certificateResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function(?): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise|undefined)|undefined), extractContentId: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, !Uint8Array, {customData: !Object<string,*>, ldlDelay: number}=): string|undefined), licenseRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|undefined)|undefined), licenseResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function(?): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise|undefined)|undefined), transformInitData: (function({drmInfo: (null|{audioRobustness: (Array<string>|null|string), distinctiveIdentifierRequired: boolean, initData: (Array<{initData: !Uint8Array, initDataType: string, keyId: (null|string), periodId: (null|string)}>|null), keyIds: (Array<string>|null), keySystem: string, licenseServerUri: string, periodId: (null|string), persistentStateRequired: boolean, serverCertificate: (Uint8Array|null), videoRobustness: (Array<string>|null|string)}), drmSystemConfig: (?|{audioRobustness: (Array<(string|undefined)>|string|undefined), distinctiveIdentifierRequired: (boolean|undefined), licenseUrl: string, modifiers: (?|undefined), persistentStateRequired: (boolean|undefined), serverCertificate: (Uint8Array|null), videoRobustness: (Array<(string|undefined)>|string|undefined)}|{certificateUrl: string, individualizationServer: (string|undefined), licenseUrl: string, modifiers: (?|undefined)}), emeApi: string, initData: !Uint8Array, initDataType: string, playerConfig: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, sessionContext: {customData: !Object<string,*>, ldlDelay: number}}): !Uint8Array|undefined)}), useLegacySystem: (boolean|undefined), videoRobustness: (Array<(null|string)>|null|string|undefined)}|{audioRobustness: (Array<(string|undefined)>|string|undefined), distinctiveIdentifierRequired: (boolean|undefined), licenseUrl: string, modifiers: (undefined|{certificateRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|undefined)|undefined), certificateResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function(?): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise|undefined)|undefined), extractContentId: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, !Uint8Array, {customData: !Object<string,*>, ldlDelay: number}=): string|undefined), licenseRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|undefined)|undefined), licenseResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function(?): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise|undefined)|undefined), transformInitData: (function({drmInfo: (null|{audioRobustness: (Array<string>|null|string), distinctiveIdentifierRequired: boolean, initData: (Array<{initData: !Uint8Array, initDataType: string, keyId: (null|string), periodId: (null|string)}>|null), keyIds: (Array<string>|null), keySystem: string, licenseServerUri: string, periodId: (null|string), persistentStateRequired: boolean, serverCertificate: (Uint8Array|null), videoRobustness: (Array<string>|null|string)}), drmSystemConfig: (?|{audioRobustness: (Array<(null|string)>|null|string|undefined), individualizationServer: (string|undefined), licenseUrl: string, modifiers: (?|undefined), useLegacySystem: (boolean|undefined), videoRobustness: (Array<(null|string)>|null|string|undefined)}|{certificateUrl: string, individualizationServer: (string|undefined), licenseUrl: string, modifiers: (?|undefined)}), emeApi: string, initData: !Uint8Array, initDataType: string, playerConfig: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, sessionContext: {customData: !Object<string,*>, ldlDelay: number}}): !Uint8Array|undefined)}), persistentStateRequired: (boolean|undefined), serverCertificate: (Uint8Array|null), videoRobustness: (Array<(string|undefined)>|string|undefined)}|{certificateUrl: string, individualizationServer: (string|undefined), licenseUrl: string, modifiers: (undefined|{certificateRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|undefined)|undefined), certificateResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function(?): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise|undefined)|undefined), extractContentId: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, !Uint8Array, {customData: !Object<string,*>, ldlDelay: number}=): string|undefined), licenseRequest: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|undefined)|undefined), licenseResponse: (function({abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, {data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function(?): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}, {customData: !Object<string,*>, ldlDelay: number}=): (Promise|undefined)|undefined), transformInitData: (function({drmInfo: (null|{audioRobustness: (Array<string>|null|string), distinctiveIdentifierRequired: boolean, initData: (Array<{initData: !Uint8Array, initDataType: string, keyId: (null|string), periodId: (null|string)}>|null), keyIds: (Array<string>|null), keySystem: string, licenseServerUri: string, periodId: (null|string), persistentStateRequired: boolean, serverCertificate: (Uint8Array|null), videoRobustness: (Array<string>|null|string)}), drmSystemConfig: (?|{audioRobustness: (Array<(null|string)>|null|string|undefined), individualizationServer: (string|undefined), licenseUrl: string, modifiers: (?|undefined), useLegacySystem: (boolean|undefined), videoRobustness: (Array<(null|string)>|null|string|undefined)}|{audioRobustness: (Array<(string|undefined)>|string|undefined), distinctiveIdentifierRequired: (boolean|undefined), licenseUrl: string, modifiers: (?|undefined), persistentStateRequired: (boolean|undefined), serverCertificate: (Uint8Array|null), videoRobustness: (Array<(string|undefined)>|string|undefined)}), emeApi: string, initData: !Uint8Array, initDataType: string, playerConfig: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, sessionContext: {customData: !Object<string,*>, ldlDelay: number}}): !Uint8Array|undefined)})})} config
 * @return {undefined}
 */
clpp.drm.DrmEnvironment.prototype.setDrmSystem = function(identifier, config) {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.drm.DrmToday = {};
/** @enum {string} */
clpp.drm.DrmToday.Environment = {PRODUCTION:1, STAGING:2, TEST:3};
/** @enum {string} */
clpp.drm.DrmToday.WidevineCertificates = {V1_PROD:1, V1_STAGING:2, V2:3};
/**
 * @param {string} wvLicenseUrl
 * @param {string} prLicenseUrl
 * @param {string} fpLicenseUrl
 * @param {string} fpCertificateUrl
 * @param {string} fpContentIdStrategy
 * @extends {clpp.drm.DrmEnvironment}
 * @constructor
 */
clpp.drm.HeaderDrm = function(wvLicenseUrl, prLicenseUrl, fpLicenseUrl, fpCertificateUrl, fpContentIdStrategy) {
};
/** @enum {string} */
clpp.drm.HeaderDrm.FairPlayContentIdStrategy = {HOSTNAME:1, FULL_SKD:2};
clpp.drm.HeaderDrm.NAME;
/**
 * @param {string} wvLicenseUrl
 * @param {string} prLicenseUrl
 * @param {string} fpLicenseUrl
 * @param {string} fpCertificateUrl
 * @param {string} fpContentIdStrategy
 * @extends {clpp.drm.DrmEnvironment}
 * @constructor
 */
clpp.drm.HeaderDrm.prototype.constructor = function(wvLicenseUrl, prLicenseUrl, fpLicenseUrl, fpCertificateUrl, fpContentIdStrategy) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} playerConfig
 * @param {!Uint8Array} initData
 * @return {string}
 */
clpp.drm.HeaderDrm.prototype.extractFairPlayContentId = function(playerConfig, initData) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} playerConfig
 * @param {{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}} request
 * @return {undefined}
 */
clpp.drm.HeaderDrm.prototype.onFairPlayLicenseRequest = function(playerConfig, request) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} playerConfig
 * @param {{data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function(?): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}} response
 * @return {undefined}
 */
clpp.drm.HeaderDrm.prototype.onFairPlayLicenseResponse = function(playerConfig, response) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} playerConfig
 * @param {{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}} request
 * @return {undefined}
 */
clpp.drm.HeaderDrm.prototype.onLicenseRequest = function(playerConfig, request) {
};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.drm.HeaderDrmComponent = function() {
};
/** @enum {string} */
clpp.drm.KeySystem = {NONE:1, CLEAR_KEY:2, WIDEVINE:3, PLAYREADY:4, FAIRPLAY:5, PRIMETIME:6};
/** @enum {string} */
clpp.drm.PlayreadyRobustnessLevel = {SL150:1, SL2000:2, SL3000:3};
/** @enum {string} */
clpp.drm.WidevineRobustnessLevel = {SW_SECURE_CRYPTO:1, SW_SECURE_DECODE:2, HW_SECURE_CRYPTO:3, HW_SECURE_DECODE:4, HW_SECURE_ALL:5};
clpp.drm.eme;
/**
 * @constructor
 */
clpp.drm.eme.EmeFactory = function() {
};
/** @enum {string} */
clpp.drm.eme.EmeFactory.Apis = {STANDARD:1, APPLE:2, WEBKIT:3, NOP:4};
/**
 * @param {!clpp.drm.DrmEnvironment} env
 * @return {undefined}
 */
clpp.drm.registerDrmEnvironment = function(env) {
};
clpp.events;
clpp.events.ADS_TIMELINE_CHANGED;
clpp.events.AD_BREAK_STARTED;
clpp.events.AD_BREAK_STOPPED;
clpp.events.AD_BUFFERING;
clpp.events.AD_CLICKED;
clpp.events.AD_COMPLETED;
clpp.events.AD_FIRST_QUARTILE;
clpp.events.AD_IMPRESSION;
clpp.events.AD_LOADED;
clpp.events.AD_MIDPOINT;
clpp.events.AD_PAUSED;
clpp.events.AD_PROGRESS;
clpp.events.AD_RESUMED;
clpp.events.AD_SKIPPED;
clpp.events.AD_STARTED;
clpp.events.AD_STOPPED;
clpp.events.AD_THIRD_QUARTILE;
clpp.events.AIRPLAY_CASTING_ENDED;
clpp.events.AIRPLAY_CASTING_STARTED;
clpp.events.AIRPLAY_STATUS_CHANGED;
clpp.events.AUDIO_BUFFER_CHANGED;
clpp.events.AUDIO_TRACK_CHANGED;
clpp.events.AUTOPLAY_NOT_ALLOWED;
clpp.events.BITRATE_CHANGED;
clpp.events.BUFFERING_ENDED;
clpp.events.BUFFERING_STARTED;
/** @enum {number} */
clpp.events.BufferingReasons = {SEEKING:1, NO_DATA:2};
clpp.events.CASTING_ENDED;
clpp.events.CASTING_STARTED;
clpp.events.CAST_STATUS_CHANGED;
clpp.events.CDN_SWITCH_SUCCESS;
clpp.events.DESTROYED;
clpp.events.DESTROYING;
clpp.events.DOWNLOAD_TRACE;
clpp.events.DRM_EXPIRATION_UPDATE;
clpp.events.DRM_RENEWAL_STARTED;
clpp.events.DRM_SESSION_PERSISTED;
clpp.events.DRM_SESSION_UPDATE;
clpp.events.ERROR;
clpp.events.LIVE_TURNED_STATIC;
clpp.events.LOADEDMETADATA;
clpp.events.LOAD_START;
clpp.events.MPD_TYPE_CHANGED;
clpp.events.ONLINE_STATUS_CHANGED;
clpp.events.PLAY;
clpp.events.PLAYLIST_ITEM_CHANGED;
clpp.events.PLAYLIST_MODIFIED;
clpp.events.RELEASED;
clpp.events.RELEASING;
clpp.events.SC_PLAYLIST_ENDED;
clpp.events.SC_PLAYLIST_ITEM_CHANGED;
clpp.events.SC_PLAYLIST_LIVE_TURNED_STATIC;
clpp.events.SC_PLAYLIST_TIMELINE_CHANGED;
clpp.events.SEEKED;
clpp.events.SEEKING;
clpp.events.SIMID_CREATIVE_STARTED;
clpp.events.SIMID_CREATIVE_STOPPED;
clpp.events.STATE_CHANGED;
clpp.events.TEXT_TRACK_CHANGED;
clpp.events.TIMELINE_CUE_ADDED;
clpp.events.TIMELINE_CUE_ENTER;
clpp.events.TIMELINE_CUE_EXIT;
clpp.events.TRACKS_ADDED;
clpp.events.USER_SEEKED;
clpp.events.USER_SEEKING;
clpp.events.VIDEO_BUFFER_CHANGED;
clpp.events.VIDEO_TRACK_CHANGED;
clpp.events.VIMOND_RESPONSE;
clpp.freewheel;
clpp.freewheel.Ad;
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getAdManagerName = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getAdManagerVersion = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getAdSystem = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getAdvertiserName = function() {
};
/**
 * @return {(null|string)}
 */
clpp.freewheel.Ad.prototype.getApiFramework = function() {
};
/**
 * @return {(null|string)}
 */
clpp.freewheel.Ad.prototype.getClickThroughUrl = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getCreativeId = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getMediaBitrate = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getMediaHeight = function() {
};
/**
 * @return {(null|string)}
 */
clpp.freewheel.Ad.prototype.getMediaUrl = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getMediaWidth = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getPodIndex = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getPodTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getPodType = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getPositionInSequence = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getSequenceLength = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getSkipTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.Ad.prototype.getTechnology = function() {
};
/**
 * @return {string}
 */
clpp.freewheel.Ad.prototype.getTitle = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.freewheel.Ad.prototype.getWrapperAdIds = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.freewheel.Ad.prototype.getWrapperAdSystems = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.freewheel.Ad.prototype.getWrapperCreativeIds = function() {
};
/**
 * @return {boolean}
 */
clpp.freewheel.Ad.prototype.isBumper = function() {
};
clpp.freewheel.AdsManager;
/**
 * @return {number}
 */
clpp.freewheel.AdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.freewheel.AdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.freewheel.AdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.freewheel.AdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.freewheel.AdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.freewheel.AdsManager.prototype.skip = function() {
};
/**
 * @param {(cl.api.IPlayer|null)} delegate
 * @return {!Promise}
 */
clpp.freewheel.AdsManager.prototype.start = function(delegate) {
};
clpp.freewheel.AdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.freewheel.AdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} config
 * @return {boolean}
 */
clpp.freewheel.AdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.freewheel.AdsManagerFactory.prototype.name = function() {
};
clpp.freewheel.AdsTimeline;
/**
 * @return {(Array<number>|null)}
 */
clpp.freewheel.AdsTimeline.prototype.getCuePoints = function() {
};
/**
 * @return {boolean}
 */
clpp.freewheel.AdsTimeline.prototype.hasPostroll = function() {
};
/**
 * @return {boolean}
 */
clpp.freewheel.AdsTimeline.prototype.hasPreroll = function() {
};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.freewheel.FreeWheelPlugin = function() {
};
clpp.freewheel.FreeWheelPlugin.AD_CONTAINER_ID;
clpp.freewheel.FreeWheelPlugin.Id;
/**
 * @return {(Element|null)}
 */
clpp.freewheel.FreeWheelPlugin.prototype.getAdContainer = function() {
};
/**
 * @return {(HTMLVideoElement|null)}
 */
clpp.freewheel.FreeWheelPlugin.prototype.getAdVideo = function() {
};
clpp.hls;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.hls.HlsComponent = function() {
};
clpp.hlssmpte;
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.hlssmpte.HlsSmptePlugin = function() {
};
clpp.hlssmpte.HlsSmptePlugin.Id;
clpp.htmlcue;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.htmlcue.HtmlCueComponent = function() {
};
/**
 * @param {(cl.api.IPlayer|clpp.Player)} player
 * @extends {clpp.text.AbstractTextDisplayer}
 * @implements {cl.api.ITextDisplayer}
 * @constructor
 */
clpp.htmlcue.HtmlTextDisplayer = function(player) {
};
/**
 * @param {!Array<clpp.text.Cue>} cues
 * @param {!Array<string>} styles
 * @return {?}
 */
clpp.htmlcue.HtmlTextDisplayer.prototype.append = function(cues, styles) {
};
/**
 * @return {!Promise}
 */
clpp.htmlcue.HtmlTextDisplayer.prototype.destroy = function() {
};
/**
 * @return {boolean}
 */
clpp.htmlcue.HtmlTextDisplayer.prototype.isTextVisible = function() {
};
/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
clpp.htmlcue.HtmlTextDisplayer.prototype.remove = function(start, end) {
};
/**
 * @param {boolean} on
 * @return {?}
 */
clpp.htmlcue.HtmlTextDisplayer.prototype.setTextVisibility = function(on) {
};
clpp.ima;
clpp.ima.Ad;
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getAdManagerName = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getAdManagerVersion = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getAdSystem = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getAdvertiserName = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ima.Ad.prototype.getApiFramework = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ima.Ad.prototype.getClickThroughUrl = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getCreativeId = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getMediaBitrate = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getMediaHeight = function() {
};
/**
 * @return {(null|string)}
 */
clpp.ima.Ad.prototype.getMediaUrl = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getMediaWidth = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getPodIndex = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getPodTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getPodType = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getPositionInSequence = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getSequenceLength = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getSkipTimeOffset = function() {
};
/**
 * @return {number}
 */
clpp.ima.Ad.prototype.getTechnology = function() {
};
/**
 * @return {string}
 */
clpp.ima.Ad.prototype.getTitle = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ima.Ad.prototype.getWrapperAdIds = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ima.Ad.prototype.getWrapperAdSystems = function() {
};
/**
 * @return {!Array<string>}
 */
clpp.ima.Ad.prototype.getWrapperCreativeIds = function() {
};
/**
 * @return {boolean}
 */
clpp.ima.Ad.prototype.isBumper = function() {
};
clpp.ima.AdsManager;
/**
 * @return {number}
 */
clpp.ima.AdsManager.prototype.getPosition = function() {
};
/**
 * @return {number}
 */
clpp.ima.AdsManager.prototype.getVolume = function() {
};
/**
 * @return {undefined}
 */
clpp.ima.AdsManager.prototype.pause = function() {
};
/**
 * @return {undefined}
 */
clpp.ima.AdsManager.prototype.resume = function() {
};
/**
 * @param {number} volume
 * @return {undefined}
 */
clpp.ima.AdsManager.prototype.setVolume = function(volume) {
};
/**
 * @return {undefined}
 */
clpp.ima.AdsManager.prototype.skip = function() {
};
clpp.ima.AdsManagerFactory;
/**
 * @param {(clpp.Player|null)} player
 * @return {(clpp.ads.IAdsManager|null)}
 */
clpp.ima.AdsManagerFactory.prototype.create = function(player) {
};
/**
 * @param {(clpp.Player|null)} player
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} config
 * @return {boolean}
 */
clpp.ima.AdsManagerFactory.prototype.isSupported = function(player, config) {
};
/**
 * @return {string}
 */
clpp.ima.AdsManagerFactory.prototype.name = function() {
};
clpp.ima.AdsTimeline;
/**
 * @return {(Array<number>|null)}
 */
clpp.ima.AdsTimeline.prototype.getCuePoints = function() {
};
/**
 * @return {boolean}
 */
clpp.ima.AdsTimeline.prototype.hasPostroll = function() {
};
/**
 * @return {boolean}
 */
clpp.ima.AdsTimeline.prototype.hasPreroll = function() {
};
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.ima.ImaPlugin = function() {
};
clpp.ima.ImaPlugin.Id;
/**
 * @return {boolean}
 */
clpp.ima.ImaPlugin.isSdkMissing = function() {
};
/**
 * @return {(Element|null)}
 */
clpp.ima.ImaPlugin.prototype.getAdContainer = function() {
};
/**
 * @return {(google.ima.AdDisplayContainer|null)}
 */
clpp.ima.ImaPlugin.prototype.getAdDisplayContainer = function() {
};
/**
 * @return {(google.ima.AdsLoader|null)}
 */
clpp.ima.ImaPlugin.prototype.getAdsLoader = function() {
};
/**
 * @param {function(new:clpp.IComponent): ?} component
 * @return {undefined}
 */
clpp.install = function(component) {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.interstitial = {};
/** @enum {string} */
clpp.interstitial.Event = {RESOLUTION_STARTED:1, ASSET_LIST_STARTED:2, ASSET_LIST_ENDED:3, SCHEDULED:4, STARTED:5, ENDED:6, ITEM_STARTED:7, PRIMARY_PLAYER_CHANGED:8, ITEM_CHANGED:9, PLAYBACK_STARTED:10, PLAYBACK_ENDED:11, PRIMARY_STARTED:12, PRIMARY_ENDED:13, CUES_CHANGED:14};
clpp.interstitial.MultiController;
/**
 * @param {!Array<{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, id: string, next: !Array<string>, onEnded: (function(): ?|undefined), onStarted: (function(): ?|undefined), primary: (boolean|undefined), transition: (undefined|{onCue: (Array<{cueId: string, itemId: string}>|undefined), onEnded: (string|undefined), onPosition: (undefined|{itemId: string, position: number})})}>} items
 * @return {undefined}
 */
clpp.interstitial.MultiController.prototype.addItems = function(items) {
};
/**
 * @return {!Promise}
 */
clpp.interstitial.MultiController.prototype.destroy = function() {
};
/**
 * @return {(null|{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, disposers: !Array<function(): ?>, id: string, loadPromise: !Promise, next: !Array<string>, onEnded: (function(): ?|undefined), onStarted: (function(): ?|undefined), player: (clpp.Player|null), preloadPromise: !Promise, primary: (boolean|undefined), role: string, state: string, transition: (undefined|{onCue: (Array<{cueId: string, itemId: string}>|undefined), onEnded: (string|undefined), onPosition: (undefined|{itemId: string, position: number})}), videoEl: (HTMLVideoElement|null)})}
 */
clpp.interstitial.MultiController.prototype.getCurrentItem = function() {
};
/**
 * @return {(clpp.Player|null)}
 */
clpp.interstitial.MultiController.prototype.getCurrentPlayer = function() {
};
/**
 * @param {string} id
 * @return {(null|{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, disposers: !Array<function(): ?>, id: string, loadPromise: !Promise, next: !Array<string>, onEnded: (function(): ?|undefined), onStarted: (function(): ?|undefined), player: (clpp.Player|null), preloadPromise: !Promise, primary: (boolean|undefined), role: string, state: string, transition: (undefined|{onCue: (Array<{cueId: string, itemId: string}>|undefined), onEnded: (string|undefined), onPosition: (undefined|{itemId: string, position: number})}), videoEl: (HTMLVideoElement|null)})}
 */
clpp.interstitial.MultiController.prototype.getItem = function(id) {
};
/**
 * @return {!Array<{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, disposers: !Array<function(): ?>, id: string, loadPromise: !Promise, next: !Array<string>, onEnded: (function(): ?|undefined), onStarted: (function(): ?|undefined), player: (clpp.Player|null), preloadPromise: !Promise, primary: (boolean|undefined), role: string, state: string, transition: (undefined|{onCue: (Array<{cueId: string, itemId: string}>|undefined), onEnded: (string|undefined), onPosition: (undefined|{itemId: string, position: number})}), videoEl: (HTMLVideoElement|null)}>}
 */
clpp.interstitial.MultiController.prototype.getPreloading = function() {
};
/**
 * @return {boolean}
 */
clpp.interstitial.MultiController.prototype.hasNext = function() {
};
/**
 * @param {string} id
 * @return {!Promise<undefined>}
 */
clpp.interstitial.MultiController.prototype.load = function(id) {
};
/**
 * @param {string} id
 * @return {!Promise<undefined>}
 */
clpp.interstitial.MultiController.prototype.play = function(id) {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.interstitial.MultiController.prototype.release = function() {
};
/**
 * @param {!Array<string>=} ids
 * @return {undefined}
 */
clpp.interstitial.MultiController.prototype.removeItems = function(ids) {
};
/**
 * @param {{anchorEl: !HTMLElement, config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, interstitialAssetConverter: (function({config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, cumulativeDuration: number, duration: number, id: string, interstitialId: string, next: !Array<string>, onEnded: (function(): ?|undefined), onStarted: (function(): ?|undefined), primary: (boolean|undefined), transition: (undefined|{onCue: (Array<{cueId: string, itemId: string}>|undefined), onEnded: (string|undefined), onPosition: (undefined|{itemId: string, position: number})})}): {config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, cumulativeDuration: number, duration: number, id: string, interstitialId: string, next: !Array<string>, onEnded: (function(): ?|undefined), onStarted: (function(): ?|undefined), primary: (boolean|undefined), transition: (undefined|{onCue: (Array<{cueId: string, itemId: string}>|undefined), onEnded: (string|undefined), onPosition: (undefined|{itemId: string, position: number})})}|undefined), mockCues: (string|undefined), prerollMarginSec: (number|undefined), resolutionOffsetSec: (number|undefined), yospace: (undefined|{enabled: boolean})}} options
 * @extends {clpp.EventTarget}
 * @implements {cl.api.IDestroyable}
 * @implements {cl.api.IEventTarget}
 * @constructor
 */
clpp.interstitial.Player = function(options) {
};
/**
 * @return {!Promise}
 */
clpp.interstitial.Player.prototype.destroy = function() {
};
/**
 * @return {!Array<{cueId: string, endTime: number, primaryDuration: number, startTime: number}>}
 */
clpp.interstitial.Player.prototype.getCues = function() {
};
/**
 * @return {(null|{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, id: string, player: (clpp.Player|null), primary: (boolean|undefined), role: string, state: string})}
 */
clpp.interstitial.Player.prototype.getCurrentItem = function() {
};
/**
 * @return {(clpp.Player|null)}
 */
clpp.interstitial.Player.prototype.getCurrentPlayer = function() {
};
/**
 * @return {(null|number)}
 */
clpp.interstitial.Player.prototype.getPosition = function() {
};
/**
 * @return {*}
 */
clpp.interstitial.Player.prototype.getYospaceSession = function() {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} config
 * @return {!Promise<undefined>}
 */
clpp.interstitial.Player.prototype.load = function(config) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} config
 * @return {!Promise<undefined>}
 */
clpp.interstitial.Player.prototype.loadPaused = function(config) {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.interstitial.Player.prototype.unload = function() {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.interstitial.Player.prototype.unpause = function() {
};
/**
 * @const
 * @suppress {const,duplicate}
 */
clpp.log = {};
/** @enum {number} */
clpp.log.Level = {DEFAULT:1, NONE:2, ERROR:3, WARNING:4, INFO:5, DEBUG:6};
/**
 * @param {string=} tag
 * @constructor
 */
clpp.log.Logger = function(tag) {
};
/**
 * @param {(null|string|undefined)} tag
 * @return {!clpp.log.Logger}
 */
clpp.log.Logger.prototype.createChild = function(tag) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.debug = function(message) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.error = function(message) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.info = function(message) {
};
/**
 * @param {number=} level
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.log = function(level, message) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.Logger.prototype.warn = function(message) {
};
/**
 * @param {function(number, (Arguments|null)): ?} interceptor
 * @return {undefined}
 */
clpp.log.addInterceptor = function(interceptor) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.debug = function(message) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.error = function(message) {
};
/**
 * @return {number}
 */
clpp.log.getLogLevel = function() {
};
/**
 * @return {!Object}
 */
clpp.log.getLoggers = function() {
};
/**
 * @param {string=} tag
 * @return {number}
 */
clpp.log.getTagLevel = function(tag) {
};
/**
 * @param {string=} tag
 * @return {boolean}
 */
clpp.log.hasTagLevel = function(tag) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.info = function(message) {
};
/**
 * @param {function(number, (Arguments|null)): ?} interceptor
 * @return {undefined}
 */
clpp.log.removeInterceptor = function(interceptor) {
};
/**
 * @param {(number|string)} level
 * @return {undefined}
 */
clpp.log.setLogLevel = function(level) {
};
/**
 * @param {string} tag
 * @param {(number|string)} level
 * @return {undefined}
 */
clpp.log.setTagLevel = function(tag, level) {
};
/**
 * @param {...*} message
 * @return {undefined}
 */
clpp.log.warn = function(message) {
};
clpp.media;
/**
 * @constructor
 */
clpp.media.Timeline = function() {
};
/**
 * @return {(clpp.media.TimelineWindow|null)}
 */
clpp.media.Timeline.prototype.getCurrentWindow = function() {
};
/**
 * @return {number}
 */
clpp.media.Timeline.prototype.getCurrentWindowIndex = function() {
};
/**
 * @param {number} index
 * @return {(clpp.media.TimelineWindow|null)}
 */
clpp.media.Timeline.prototype.getWindow = function(index) {
};
/**
 * @return {number}
 */
clpp.media.Timeline.prototype.getWindowCount = function() {
};
/**
 * @return {!Array<clpp.media.TimelineWindow>}
 */
clpp.media.Timeline.prototype.getWindows = function() {
};
/**
 * @param {string} id
 * @param {number} start
 * @param {number} duration
 * @param {boolean} isDynamic
 * @constructor
 */
clpp.media.TimelineWindow = function(id, start, duration, isDynamic) {
};
/**
 * @return {number}
 */
clpp.media.TimelineWindow.prototype.getDuration = function() {
};
/**
 * @return {string}
 */
clpp.media.TimelineWindow.prototype.getId = function() {
};
/**
 * @return {number}
 */
clpp.media.TimelineWindow.prototype.getStart = function() {
};
/**
 * @return {boolean}
 */
clpp.media.TimelineWindow.prototype.isDynamic = function() {
};
clpp.mse;
clpp.mse.TrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.mse.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.mse.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.mse.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.mse.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.mse.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.mse.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.mse.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.mse.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.mse.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.mse.TrackManager.prototype.setVideoTrack = function(track) {
};
clpp.muxdata;
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.muxdata.MuxDataPlugin = function() {
};
clpp.muxdata.MuxDataPlugin.Id;
/**
 * @param {string} eventType
 * @param {!Object} data
 * @return {undefined}
 */
clpp.muxdata.MuxDataPlugin.prototype.emit = function(eventType, data) {
};
clpp.name;
clpp.native;
clpp.native.TrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.native.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {boolean}
 */
clpp.native.TrackManager.prototype.canSelectVideoTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.native.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.native.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.native.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.native.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.native.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.native.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.native.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.native.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.native.TrackManager.prototype.setVideoTrack = function(track) {
};
clpp.net;
clpp.net.CmsdManager;
/**
 * @return {(null|number)}
 */
clpp.net.CmsdManager.prototype.getEstimatedThroughput = function() {
};
clpp.net.DEFAULT_FATAL_STATUS_CODES;
/**
 * @constructor
 */
clpp.net.NetworkEngine = function() {
};
/**
 * @param {function({allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<!Function>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<!Function>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|null|undefined)} callback
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.addRequestModifier = function(callback) {
};
/**
 * @param {function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<!Function>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)} callback
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.addResponseModifier = function(callback) {
};
/**
 * @param {{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}} request
 * @return {!clpp.net.PendingRequest}
 */
clpp.net.NetworkEngine.prototype.fetch = function(request) {
};
/**
 * @param {function({allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<!Function>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}): (Promise<{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<!Function>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}>|null|undefined)} callback
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.removeRequestModifier = function(callback) {
};
/**
 * @param {function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<!Function>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)} callback
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.removeResponseModifier = function(callback) {
};
/**
 * @param {number} limitBps
 * @return {undefined}
 */
clpp.net.NetworkEngine.prototype.setRateLimit = function(limitBps) {
};
/** @enum {number} */
clpp.net.RequestType = {MANIFEST:1, SEGMENT:2, LICENSE:3, APP:4, TIMING:5, OTHER:6};
/**
 * @param {(Object|null|string)} source
 * @param {{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}=} opt_attemptParameters
 * @return {{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}}
 */
clpp.net.makeRequest = function(source, opt_attemptParameters) {
};
clpp.npaw;
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.npaw.YouboraPlugin = function() {
};
clpp.npaw.YouboraPlugin.Id;
/**
 * @return {(null|youbora.Adapter)}
 */
clpp.npaw.YouboraPlugin.prototype.getAdapter = function() {
};
/**
 * @return {(null|youbora.Adapter)}
 */
clpp.npaw.YouboraPlugin.prototype.getAdsAdapter = function() {
};
/**
 * @param {(null|youbora.Plugin)} plugin
 * @return {undefined}
 */
clpp.npaw.YouboraPlugin.prototype.setYouboraPlugin = function(plugin) {
};
clpp.onboard;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.onboard.OnboardComponent = function() {
};
/**
 * @param {string} name
 * @param {{baseUrl: string, fairplayUrl: string, playreadyUrl: string, widevineUrl: string}} config
 * @return {undefined}
 */
clpp.onboard.register = function(name, config) {
};
clpp.persistent;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.persistent.PersistentLicenseComponent = function() {
};
/**
 * @param {(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})} source
 * @param {{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}} drmConfig
 * @param {...function(new:clpp.IComponent): ?} opt_components
 * @return {!Promise<undefined>}
 */
clpp.persistent.fetchLicense = function(source, drmConfig, opt_components) {
};
/**
 * @param {string} offlineId
 * @return {!Promise}
 */
clpp.persistent.removeLicense = function(offlineId) {
};
/**
 * @param {!cl.api.persistent.ISessionStorage} storageImpl
 * @return {undefined}
 */
clpp.persistent.useStorage = function(storageImpl) {
};
clpp.plist;
/**
 * @param {{anchorId: string, autoplayNext: (boolean|undefined), config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, preloadMedia: (boolean|undefined), toggleVisible: (function(!HTMLVideoElement, boolean): undefined|undefined), transition: (string|undefined)}} options
 * @extends {clpp.EventTarget}
 * @implements {cl.api.IDestroyable}
 * @implements {cl.api.IEventTarget}
 * @constructor
 */
clpp.plist.McPlaylist = function(options) {
};
/**
 * @return {!Promise}
 */
clpp.plist.McPlaylist.prototype.destroy = function() {
};
/**
 * @return {(null|{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, disposers: !Array<function(): ?>, index: number, player: (clpp.Player|null), preloadPromise: !Promise, role: string, state: string, videoEl: (HTMLVideoElement|null)})}
 */
clpp.plist.McPlaylist.prototype.getCurrent = function() {
};
/**
 * @return {(clpp.Player|null)}
 */
clpp.plist.McPlaylist.prototype.getCurrentPlayer = function() {
};
/**
 * @return {(null|{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, disposers: !Array<function(): ?>, index: number, player: (clpp.Player|null), preloadPromise: !Promise, role: string, state: string, videoEl: (HTMLVideoElement|null)})}
 */
clpp.plist.McPlaylist.prototype.getNext = function() {
};
/**
 * @return {!Array<{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, disposers: !Array<function(): ?>, index: number, player: (clpp.Player|null), preloadPromise: !Promise, role: string, state: string, videoEl: (HTMLVideoElement|null)}>}
 */
clpp.plist.McPlaylist.prototype.getPreloading = function() {
};
/**
 * @return {(null|{config: {abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}, disposers: !Array<function(): ?>, index: number, player: (clpp.Player|null), preloadPromise: !Promise, role: string, state: string, videoEl: (HTMLVideoElement|null)})}
 */
clpp.plist.McPlaylist.prototype.getPrev = function() {
};
/**
 * @return {boolean}
 */
clpp.plist.McPlaylist.prototype.hasNext = function() {
};
/**
 * @return {boolean}
 */
clpp.plist.McPlaylist.prototype.hasPrev = function() {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.plist.McPlaylist.prototype.playFirst = function() {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.plist.McPlaylist.prototype.playNext = function() {
};
/**
 * @return {!Promise<undefined>}
 */
clpp.plist.McPlaylist.prototype.playPrev = function() {
};
/**
 * @param {number} index
 * @return {undefined}
 */
clpp.plist.McPlaylist.prototype.setIndex = function(index) {
};
/**
 * @param {!Array<{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}>} configs
 * @return {undefined}
 */
clpp.plist.McPlaylist.prototype.setItems = function(configs) {
};
/**
 * @param {(HTMLMediaElement|string)} element
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}=} opt_configuration
 * @param {{containerEl: (Element|null), crossorigin: string, disableContainer: boolean, webOSStartupPatch: boolean}=} opt_viewConfiguration
 * @extends {clpp.Player}
 * @implements {cl.api.IEventTarget}
 * @constructor
 */
clpp.plist.ScPlaylist = function(element, opt_configuration, opt_viewConfiguration) {
};
/**
 * @param {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}} config
 * @return {!Promise}
 */
clpp.plist.ScPlaylist.prototype.addItem = function(config) {
};
/**
 * @return {!Promise}
 */
clpp.plist.ScPlaylist.prototype.destroy = function() {
};
/**
 * @return {(null|{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})})}
 */
clpp.plist.ScPlaylist.prototype.getCurrentItem = function() {
};
/**
 * @return {number}
 */
clpp.plist.ScPlaylist.prototype.getCurrentItemIndex = function() {
};
/**
 * @return {!Array<{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}>}
 */
clpp.plist.ScPlaylist.prototype.getPlaylist = function() {
};
/**
 * @return {number}
 */
clpp.plist.ScPlaylist.prototype.getSize = function() {
};
/**
 * @return {(clpp.media.Timeline|null)}
 */
clpp.plist.ScPlaylist.prototype.getTimeline = function() {
};
/**
 * @param {number} index
 * @param {!Array<{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}>} configs
 * @return {!Promise}
 */
clpp.plist.ScPlaylist.prototype.open = function(index, configs) {
};
/**
 * @return {!Promise}
 */
clpp.plist.ScPlaylist.prototype.release = function() {
};
/**
 * @param {number} offset
 * @return {!Promise}
 */
clpp.plist.ScPlaylist.prototype.seekWith = function(offset) {
};
/**
 * @param {(function(string, !clpp.Error): !Promise<string>|null)=} p0
 * @return {undefined}
 */
clpp.plist.ScPlaylist.prototype.setCdnErrorCallback = function() {
};
clpp.polyfill;
/**
 * @return {undefined}
 */
clpp.polyfill.installAll = function() {
};
/**
 * @param {function(): ?} polyfill
 * @param {number=} priority
 * @return {undefined}
 */
clpp.polyfill.register = function(polyfill, priority) {
};
clpp.smooth;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.smooth.SmoothComponent = function() {
};
clpp.text;
clpp.text.AbstractTextDisplayer;
/**
 * @return {(null|string)}
 */
clpp.text.AbstractTextDisplayer.prototype.getBackgroundColor = function() {
};
/**
 * @return {(null|string)}
 */
clpp.text.AbstractTextDisplayer.prototype.getEdgeColor = function() {
};
/**
 * @return {(null|string)}
 */
clpp.text.AbstractTextDisplayer.prototype.getEdgeType = function() {
};
/**
 * @return {(null|string)}
 */
clpp.text.AbstractTextDisplayer.prototype.getFontColor = function() {
};
/**
 * @return {(null|string)}
 */
clpp.text.AbstractTextDisplayer.prototype.getFontFamily = function() {
};
/**
 * @return {(null|string)}
 */
clpp.text.AbstractTextDisplayer.prototype.getFontSize = function() {
};
/**
 * @return {(null|number)}
 */
clpp.text.AbstractTextDisplayer.prototype.getFontSizePercent = function() {
};
/**
 * @return {(null|string)}
 */
clpp.text.AbstractTextDisplayer.prototype.getWindowColor = function() {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setBackgroundColor = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setEdgeColor = function(val) {
};
/**
 * @param {(null|string)} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setEdgeType = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setFontColor = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setFontFamily = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setFontSize = function(val) {
};
/**
 * @param {number} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setFontSizePercent = function(val) {
};
/**
 * @param {string} val
 * @return {?}
 */
clpp.text.AbstractTextDisplayer.prototype.setWindowColor = function(val) {
};
/**
 * @param {number} startTime
 * @param {number} endTime
 * @param {string} payload
 * @param {string=} payloadType
 * @implements {cl.api.ICue}
 * @constructor
 */
clpp.text.Cue = function(startTime, endTime, payload, payloadType) {
};
/** @enum {string} */
clpp.text.Cue.direction = {HORIZONTAL_LEFT_TO_RIGHT:1, HORIZONTAL_RIGHT_TO_LEFT:2};
/** @enum {string} */
clpp.text.Cue.lineAlign = {CENTER:1, START:2, END:3};
/** @enum {number} */
clpp.text.Cue.lineInterpretation = {LINE_NUMBER:1, PERCENTAGE:2};
/** @enum {string} */
clpp.text.Cue.payloadType = {TEXT:1, VTT_XML:2, TTML_XML:3};
/** @enum {string} */
clpp.text.Cue.positionAlign = {LEFT:1, RIGHT:2, CENTER:3, AUTO:4};
/** @enum {string} */
clpp.text.Cue.textAlign = {LEFT:1, RIGHT:2, CENTER:3, START:4, END:5};
/** @enum {string} */
clpp.text.Cue.writingMode = {HORIZONTAL_TOP_TO_BOTTOM:1, VERTICAL_LEFT_TO_RIGHT:2, VERTICAL_RIGHT_TO_LEFT:3};
/**
 * @implements {cl.api.ICueRegion}
 * @constructor
 */
clpp.text.CueRegion = function() {
};
/** @enum {string} */
clpp.text.CueRegion.displayAlign = {BEFORE:1, CENTER:2, AFTER:3};
/** @enum {string} */
clpp.text.CueRegion.scrollMode = {NONE:1, UP:2};
/** @enum {number} */
clpp.text.CueRegion.units = {PX:1, PERCENTAGE:2, LINES:3};
/** @enum {string} */
clpp.text.CueRegion.writingMode = {HORIZONTAL_TOP_TO_BOTTOM:1, VERTICAL_LEFT_TO_RIGHT:2, VERTICAL_RIGHT_TO_LEFT:3};
/** @enum {string} */
clpp.text.EdgeType = {NONE:1, RAISED:2, DEPRESSED:3, DROP_SHADOW:4, UNIFORM:5};
clpp.thumbnails;
/**
 * @param {string} imageUrl
 * @param {number} time
 * @param {number} duration
 * @param {number=} opt_x
 * @param {number=} opt_y
 * @param {number=} opt_width
 * @param {number=} opt_height
 * @param {number=} opt_cols
 * @param {number=} opt_rows
 * @param {number=} opt_gridCol
 * @param {number=} opt_gridRow
 * @param {!HTMLImageElement=} imageElement
 * @constructor
 */
clpp.thumbnails.Thumbnail = function(imageUrl, time, duration, opt_x, opt_y, opt_width, opt_height, opt_cols, opt_rows, opt_gridCol, opt_gridRow, imageElement) {
};
clpp.thumbnails.Thumbnail.prototype.duration;
/**
 * @param {number=} opt_width
 * @param {number=} opt_height
 * @return {!HTMLElement}
 */
clpp.thumbnails.Thumbnail.prototype.element = function(opt_width, opt_height) {
};
clpp.thumbnails.Thumbnail.prototype.height;
/**
 * @return {!Promise<clpp.thumbnails.Thumbnail>}
 */
clpp.thumbnails.Thumbnail.prototype.load = function() {
};
/**
 * @return {(HTMLImageElement|null)}
 */
clpp.thumbnails.Thumbnail.prototype.raw = function() {
};
clpp.thumbnails.Thumbnail.prototype.src;
clpp.thumbnails.Thumbnail.prototype.time;
clpp.thumbnails.Thumbnail.prototype.width;
clpp.thumbnails.Thumbnail.prototype.x;
clpp.thumbnails.Thumbnail.prototype.y;
/**
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.thumbnails.ThumbnailsPlugin = function() {
};
clpp.thumbnails.ThumbnailsPlugin.Id;
/**
 * @param {number} position
 * @return {!Promise<clpp.thumbnails.Thumbnail>}
 */
clpp.thumbnails.ThumbnailsPlugin.prototype.get = function(position) {
};
clpp.tizen;
clpp.tizen.Player;
/**
 * @return {!clpp.net.NetworkEngine}
 */
clpp.tizen.Player.prototype.getNetworkEngine = function() {
};
/**
 * @return {(cl.api.ITextDisplayer|null)}
 */
clpp.tizen.Player.prototype.getTextDisplayer = function() {
};
/**
 * @param {!clpp.net.NetworkEngine} engine
 * @return {?}
 */
clpp.tizen.Player.prototype.setNetworkEngine = function(engine) {
};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.tizen.TizenComponent = function() {
};
clpp.tizen.TrackManager;
/**
 * @param {{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}} track
 * @return {(Promise<undefined>|null)}
 */
clpp.tizen.TrackManager.prototype.addTextTrack = function(track) {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getAudioRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.tizen.TrackManager.prototype.getAudioTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.tizen.TrackManager.prototype.getAudioTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getLoadingAudioRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getLoadingTextRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getLoadingVideoRendition = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getTextRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.tizen.TrackManager.prototype.getTextTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.tizen.TrackManager.prototype.getTextTracks = function() {
};
/**
 * @return {(clpp.Rendition|null)}
 */
clpp.tizen.TrackManager.prototype.getVideoRendition = function() {
};
/**
 * @return {(clpp.Track|null)}
 */
clpp.tizen.TrackManager.prototype.getVideoTrack = function() {
};
/**
 * @return {!Array<clpp.Track>}
 */
clpp.tizen.TrackManager.prototype.getVideoTracks = function() {
};
/**
 * @return {boolean}
 */
clpp.tizen.TrackManager.prototype.isAbrEnabled = function() {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setAudioRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setAudioTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setTextRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setTextTrack = function(track) {
};
/**
 * @param {(clpp.Rendition|null)} rendition
 * @param {boolean=} clearBuffer
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setVideoRendition = function(rendition, clearBuffer) {
};
/**
 * @param {(clpp.Track|null)} track
 * @return {undefined}
 */
clpp.tizen.TrackManager.prototype.setVideoTrack = function(track) {
};
clpp.ttml;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.ttml.TtmlComponent = function() {
};
/**
 * @param {function(new:clpp.IComponent): ?} component
 * @return {undefined}
 */
clpp.uninstall = function(component) {
};
clpp.utils;
clpp.utils.Abortable;
/**
 * @return {!clpp.utils.Abortable}
 * @this {(typeof clpp.utils.Abortable)}
 */
clpp.utils.Abortable.aborted = function() {
};
/**
 * @param {(!Function|undefined)} onSuccess
 * @param {function(*): ?=} onError
 * @return {!clpp.utils.Abortable<U>}
 * @template U
 */
clpp.utils.Abortable.prototype.chain = function(onSuccess, onError) {
};
/**
 * @constructor
 */
clpp.utils.BufferUtils = function() {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView|null)} arr1
 * @param {(ArrayBuffer|ArrayBufferView|null)} arr2
 * @return {boolean}
 * @this {(typeof clpp.utils.BufferUtils)}
 */
clpp.utils.BufferUtils.equal = function(arr1, arr2) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} view
 * @return {!ArrayBuffer}
 * @this {(typeof clpp.utils.BufferUtils)}
 */
clpp.utils.BufferUtils.toArrayBuffer = function(view) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} buffer
 * @param {number=} offset
 * @param {number=} length
 * @return {!DataView}
 * @this {(typeof clpp.utils.BufferUtils)}
 */
clpp.utils.BufferUtils.toDataView = function(buffer, offset, length) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} data
 * @param {number=} offset
 * @param {number=} length
 * @return {!Int32Array}
 * @this {(typeof clpp.utils.BufferUtils)}
 */
clpp.utils.BufferUtils.toInt32Array = function(data, offset, length) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} data
 * @param {number=} offset
 * @param {number=} length
 * @return {!Uint16Array}
 * @this {(typeof clpp.utils.BufferUtils)}
 */
clpp.utils.BufferUtils.toUint16Array = function(data, offset, length) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} data
 * @param {number=} offset
 * @param {number=} length
 * @return {!Uint32Array}
 * @this {(typeof clpp.utils.BufferUtils)}
 */
clpp.utils.BufferUtils.toUint32Array = function(data, offset, length) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} data
 * @param {number=} offset
 * @param {number=} length
 * @return {!Uint8Array}
 * @this {(typeof clpp.utils.BufferUtils)}
 */
clpp.utils.BufferUtils.toUint8Array = function(data, offset, length) {
};
/**
 * @constructor
 */
clpp.utils.FairplayUtils = function() {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} skdInitData
 * @param {(ArrayBuffer|ArrayBufferView|string)} contentId
 * @param {(ArrayBuffer|ArrayBufferView|null)} certificate
 * @return {!Uint8Array}
 * @this {(typeof clpp.utils.FairplayUtils)}
 */
clpp.utils.FairplayUtils.createFairplayPayload = function(skdInitData, contentId, certificate) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} skdInitData
 * @return {string}
 * @this {(typeof clpp.utils.FairplayUtils)}
 */
clpp.utils.FairplayUtils.extractContentId = function(skdInitData) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} skdInitData
 * @return {string}
 * @this {(typeof clpp.utils.FairplayUtils)}
 */
clpp.utils.FairplayUtils.extractExtXKeyUri = function(skdInitData) {
};
/**
 * @param {{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function({data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (?|undefined), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}} request
 * @return {undefined}
 * @this {(typeof clpp.utils.FairplayUtils)}
 */
clpp.utils.FairplayUtils.formatFairPlayRequest = function(request) {
};
/**
 * @param {{data: !ArrayBuffer, fromCache: (boolean|undefined), headers: !Object<string,string>, request: (undefined|{allowCrossSiteCredentials: boolean, backoffFactor: number, baseDelay: number, body: (ArrayBuffer|null), bytesLoaded: number, bytesRemaining: number, bytesTotal: number, contentType: (null|string), currentAttempt: number, disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), downloadId: (clpp.sessions.UuidV4|undefined), endTime: (null|number), fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, headers: !Object<string,string>, keyInfo: (undefined|{iv: (Uint8Array|null), method: string, url: string}), licenseRequestType: (null|string), maxAttempts: number, method: string, onFragment: (function({count: number, data: !DataView, end: number, length: number, start: number}): (Promise|null)|null), onProgress: function(number, number): ?, rateLimitBps: (null|number), requestModifiers: !Array<function(?): (Promise<?>|null|undefined)>, requestStartTimestamp: (null|number), responseModifiers: !Array<function(?): (Promise|null|undefined)>, sessionId: (null|string), startTime: (null|number), timeout: number, timescale: (null|number), type: number, uriIndex: number, uris: !Array<string>}), responseStartMs: (number|undefined), status: (number|undefined), timeMs: (number|undefined), uri: string}} response
 * @return {undefined}
 * @this {(typeof clpp.utils.FairplayUtils)}
 */
clpp.utils.FairplayUtils.parseFairPlayResponse = function(response) {
};
/**
 * @constructor
 */
clpp.utils.Mp4Parser = function() {
};
/**
 * @param {function(!Uint8Array): ?} callback
 * @return {function({flags: (null|number), has64BitSize: boolean, headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}): ?}
 * @this {(typeof clpp.utils.Mp4Parser)}
 */
clpp.utils.Mp4Parser.allData = function(callback) {
};
/**
 * @param {{flags: (null|number), has64BitSize: boolean, headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}} box
 * @return {undefined}
 * @this {(typeof clpp.utils.Mp4Parser)}
 */
clpp.utils.Mp4Parser.children = function(box) {
};
/**
 * @param {{flags: (null|number), has64BitSize: boolean, headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}} box
 * @return {number}
 */
clpp.utils.Mp4Parser.headerSize = function(box) {
};
/**
 * @param {string} type
 * @param {function({flags: (null|number), has64BitSize: boolean, headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}): ?} definition
 * @return {!clpp.utils.Mp4Parser}
 */
clpp.utils.Mp4Parser.prototype.box = function(type, definition) {
};
/**
 * @param {string} type
 * @param {function({flags: (null|number), has64BitSize: boolean, headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}): ?} definition
 * @return {!clpp.utils.Mp4Parser}
 */
clpp.utils.Mp4Parser.prototype.fullBox = function(type, definition) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} data
 * @param {boolean=} partialOkay
 * @return {undefined}
 */
clpp.utils.Mp4Parser.prototype.parse = function(data, partialOkay) {
};
/**
 * @param {number} absStart
 * @param {!clpp.utils.dataview.DataViewReader} reader
 * @param {boolean=} partialOkay
 * @return {undefined}
 */
clpp.utils.Mp4Parser.prototype.parseNext = function(absStart, reader, partialOkay) {
};
/**
 * @return {undefined}
 */
clpp.utils.Mp4Parser.prototype.stop = function() {
};
/**
 * @param {{flags: (null|number), has64BitSize: boolean, headerSize: number, parser: !clpp.utils.Mp4Parser, partialOkay: boolean, reader: !clpp.utils.dataview.DataViewReader, size: number, start: number, version: (null|number)}} box
 * @return {undefined}
 * @this {(typeof clpp.utils.Mp4Parser)}
 */
clpp.utils.Mp4Parser.sampleDescription = function(box) {
};
/**
 * @param {number} type
 * @return {string}
 * @this {(typeof clpp.utils.Mp4Parser)}
 */
clpp.utils.Mp4Parser.typeToString = function(type) {
};
/**
 * @constructor
 */
clpp.utils.Platform = function() {
};
/**
 * @return {{browser: string, browserVersion: {build: (number|undefined), major: number, minor: (number|undefined), name: string, patch: (number|undefined)}, os: string, osVersion: {build: (number|undefined), major: number, minor: (number|undefined), name: string, patch: (number|undefined)}}}
 * @this {(typeof clpp.utils.Platform)}
 */
clpp.utils.Platform.getInfo = function() {
};
/**
 * @constructor
 */
clpp.utils.PlayerConfiguration = function() {
};
/**
 * @param {...*} configs
 * @return {{abr: {bandwidthDowngradeTarget: number, bandwidthUpgradeTarget: number, defaultBandwidthEstimate: number, enabled: boolean, initialRestrictions: (undefined|{maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, switchInterval: number, useCmsd: boolean, useSwitchIntervalForInitialSwitch: boolean}, autoplay: (boolean|undefined), broadpeak: (undefined|{analyticsAddress: (string|undefined), broadpeakDomainNames: (string|undefined), customParameters: (Object|null|undefined), nanoCDNHost: (string|undefined), uuid: (string|undefined)}), connectivityCheck: (undefined|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), method: (string|undefined), url: string}), conviva: (undefined|{connectionType: (string|undefined), customTags: (Object|null|undefined), customerKey: string, defaultResource: (string|undefined), deviceBrand: (string|undefined), deviceCategory: (string|undefined), deviceMetadata: (Object|null|undefined), deviceType: (string|undefined), enableAdInsights: boolean, playerName: (string|undefined), serviceUrl: (string|undefined), viewerId: string}), drm: (null|{attemptParameters: (undefined|{backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}), customData: (Object<string,*>|null|undefined), delayLicenseRequestUntilPlayed: (boolean|undefined), emeApi: (string|undefined), enableSessionCacheForSkd: (boolean|undefined), enforceSingleSession: (boolean|undefined), env: string, ignoreUnrecognizedInitData: (boolean|undefined), offlineId: (string|undefined), preferredDrmSystem: (string|undefined), widevineVersion: (string|undefined)}), enableHtmlCue: (boolean|undefined), fmts: (undefined|{asidConfig: (Object<string,*>|undefined), enableDrmToday: boolean}), forceWaitForTracks: (boolean|undefined), freewheel: (undefined|{keyValues: (Object<string,string>|undefined), networkId: number, parameters: (Array<{level: number, name: string, value: *}>|undefined), pods: (Array<{acceptContentType: (string|undefined), cuepointSequence: (number|undefined), id: string, maxDuration: (number|undefined), minDuration: (number|undefined), position: number, slotProfile: (string|undefined), type: number}>|undefined), profileId: string, serverUrl: string, siteSectionId: (number|string|undefined), videoAssetId: (number|string)}), hlssmpte: (undefined|{patchMetadataTrack: (boolean|undefined), timestampOffset: (number|undefined)}), htmlcue: (undefined|{enableResizeObserver: boolean, stretchSmpteImage: boolean}), id: (string|undefined), ima: (undefined|{adTagUrl: string, bitrate: (number|undefined), disableCustomPlayback: (boolean|undefined), enablePreloading: (boolean|undefined), loadVideoTimeout: (number|undefined), mimeTypes: (Array<string>|null|undefined), playAdsAfterTime: (number|undefined), uiElements: (Array<string>|null|undefined), useStyledLinearAds: (boolean|undefined)}), license: string, loop: (boolean|undefined), lowLatencyMode: (boolean|undefined), manifest: {attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, autoCorrectDrift: (boolean|undefined), availabilityWindowOverride: number, clockSyncUri: (string|undefined), hlsDefaultCodecs: (string|undefined), ignoreDrmInfo: boolean, keepTimelineLive: (boolean|undefined), liveRefreshPeriod: (number|undefined), lowLatencyMode: (boolean|undefined), playreadyVersion: (string|undefined), suggestedPresentationDelay: (number|undefined), timeline: (undefined|{type: (string|undefined), version: (number|undefined)}), xlinkFailGracefully: boolean}, mediaSource: {codecSwitchingStrategy: string}, muted: (boolean|undefined), muxdata: (undefined|{envKey: string, muxLib: (Object|undefined), muxOptionsOverride: (undefined|{data: (undefined|{env_key: string, player_mux_plugin_name: (string|undefined), player_mux_plugin_version: (string|undefined), player_software_name: (string|undefined), player_software_version: (string|undefined), player_version: (string|undefined), video_id: (string|undefined), video_title: (string|undefined), viewer_user_id: (string|undefined)}), debug: (boolean|undefined)})}), pauseWhenInBackground: (boolean|undefined), playlist: (undefined|{content: (string|undefined), cropTimeline: (boolean|undefined), endTime: (number|undefined), startTime: (number|undefined), timeline: (string|undefined)}), preferForcedSubtitles: boolean, preferSpatialAudio: boolean, preferredAudioChannelCount: number, preferredAudioCodec: (Array<string>|string), preferredAudioLanguage: (Array<string>|null|string), preferredAudioRole: string, preferredTextLanguage: (Array<string>|null|string), preferredTextRole: string, preferredVideoCodec: (Array<string>|string), remoteTextTracks: (Array<{codec: (string|undefined), kind: string, label: (string|undefined), language: string, mimeType: string, url: string}>|null|undefined), restrictions: {maxBandwidth: number, maxHeight: number, maxPixels: number, maxWidth: number, minBandwidth: number, minHeight: number, minPixels: number, minWidth: number}, safari: (undefined|{enableHlsVideoTrackInfo: (boolean|undefined), enableMetadata: (boolean|undefined)}), sessions: (undefined|{apiUrl: string}), simid: (undefined|{creatives: (Array<{adParameters: (string|undefined), duration: number, preload: number, startTime: number, url: string}>|undefined)}), source: (Array<(string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)})>|null|string|{audioMimeType: (string|undefined), drmProtected: (boolean|undefined), isLive: (boolean|undefined), name: (string|undefined), type: (null|string|undefined), url: string, videoMimeType: (string|undefined)}), startTime: (null|number), streaming: {addMissingTimelineCues: (boolean|undefined), alwaysStreamText: boolean, attemptParameters: {backoffFactor: number, baseDelay: number, fatalStatusCodes: (Array<number>|undefined), fuzzFactor: number, maxAttempts: number, timeout: number}, bufferBehind: number, bufferLimitUpdateInterval: (number|undefined), bufferingGoal: number, chaseJumpDistance: number, chasingRate: number, disableAudioTracks: (boolean|undefined), disableFragmentSupport: (boolean|null), disableMergedFragments: (boolean|null), disableVideoTracks: (boolean|undefined), durationBackoff: number, enableLiveEdgeChasing: boolean, forceNativeTS: boolean, gapDetectionThreshold: number, ignoreDrift: boolean, ignoreManagedMediaSourceStreamingHints: (boolean|undefined), ignoreTextStreamFailures: boolean, jumpLargeGaps: boolean, maxSegmentToMediaOffset: number, overridePasp: boolean, patchEdgeWhenMixedContent: boolean, preferNativeHlsOnSafari: boolean, rebufferingGoal: number, relativeTextTimestamp: boolean, safeSeekOffset: number, smallGapLimit: number, stallEnabled: boolean, stallSkip: number, stallThreshold: number, startAtSegmentBoundary: boolean, startChasingAt: number, stopChasingAt: number}, suggestedPresentationDelay: (number|undefined), textStyle: (undefined|{backgroundColor: (string|undefined), edgeColor: (string|undefined), edgeType: (string|undefined), fontColor: (string|undefined), fontFamily: (string|undefined), fontSize: (string|undefined), fontSizePercent: (number|undefined), windowColor: (string|undefined)}), thumbnails: (undefined|{duration: (number|undefined), enabled: (boolean|undefined), gridSize: (string|undefined), mode: (string|undefined), preload: (Array<(number|{preloadWhileBuffering: (boolean|undefined), step: number})>|null|undefined), templateKey: (string|undefined), url: (string|undefined)}), tizen: (undefined|{sideStreamText: boolean}), trickPlay: {preferTrickPlayTracks: (boolean|undefined), speedUpMode: (string|undefined)}, ttml: (undefined|{containerHeight: number, containerWidth: number, fontSizeRadix: number}), viewerId: (string|undefined), vimond: (undefined|{authToken: string, failIfUnreachable: boolean, failOnError: boolean, playerEventRequest: {body: {client: {buildName: string, buildVersion: string, deviceId: string, drm: string, envPlatform: string, envVersion: string, pageUrl: string, playerEvent: string, playerState: (null|string), streamUrl: string, userAgent: string, videoFormat: string, videoProtocol: string, viewingSession: string}, originator: string, progress: {eventNumber: number, live: (undefined|{liveResumePossible: boolean, onLiveEdge: boolean, position: string}), vod: (undefined|{position: number})}, timestamp: string}, eventInterval: number, uri: string}}), volume: (null|number|undefined), vr: (undefined|{attachMouseListener: (boolean|undefined), enable: (boolean|undefined), fieldOfView: (number|undefined), invertHorizontalControl: (boolean|undefined), invertVerticalControl: (boolean|undefined), sensitivity: (number|undefined)}), youbora: (undefined|{errorFilter: (function(!clpp.Error): (null|{code: string, message: string, metadata: (Object|undefined), severity: number})|undefined)})}}
 * @this {(typeof clpp.utils.PlayerConfiguration)}
 */
clpp.utils.PlayerConfiguration.create = function(configs) {
};
/**
 * @param {function(): ?} onTick
 * @constructor
 */
clpp.utils.Timer = function(onTick) {
};
/**
 * @return {undefined}
 */
clpp.utils.Timer.prototype.stop = function() {
};
/**
 * @param {number} seconds
 * @return {!clpp.utils.Timer}
 */
clpp.utils.Timer.prototype.tickAfter = function(seconds) {
};
/**
 * @param {number} seconds
 * @return {!clpp.utils.Timer}
 */
clpp.utils.Timer.prototype.tickEvery = function(seconds) {
};
/**
 * @return {!clpp.utils.Timer}
 */
clpp.utils.Timer.prototype.tickNow = function() {
};
/**
 * @constructor
 */
clpp.utils.Uint8ArrayUtils = function() {
};
/**
 * @param {...(Uint8Array|null)} var_args
 * @return {!Uint8Array}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.concat = function(var_args) {
};
/**
 * @param {(Uint8Array|null)} arr1
 * @param {(Uint8Array|null)} arr2
 * @return {boolean}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.equal = function(arr1, arr2) {
};
/**
 * @param {string} str
 * @return {!Uint8Array}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.fromBase64 = function(str) {
};
/**
 * @param {string} str
 * @return {!Uint8Array}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.fromHex = function(str) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} data
 * @param {boolean=} opt_padding
 * @return {string}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.toBase64Url = function(data, opt_padding) {
};
/**
 * @param {!Uint8Array} arr
 * @return {string}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.toHex = function(arr) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView)} data
 * @return {string}
 * @this {(typeof clpp.utils.Uint8ArrayUtils)}
 */
clpp.utils.Uint8ArrayUtils.toStandardBase64 = function(data) {
};
clpp.utils.dataview;
/**
 * @param {!DataView} dataView
 * @param {boolean=} endian
 * @constructor
 */
clpp.utils.dataview.DataViewReader = function(dataView, endian) {
};
clpp.utils.dom;
/**
 * @param {string} tagName
 * @return {!HTMLElement}
 */
clpp.utils.dom.createHTMLElement = function(tagName) {
};
clpp.utils.media;
/**
 * @param {string} url
 * @return {(null|string)}
 */
clpp.utils.media.detectType = function(url) {
};
clpp.utils.obj;
/**
 * @param {T} item
 * @return {T}
 * @template T
 */
clpp.utils.obj.cloneItem = function(item) {
};
/**
 * @param {...*} args
 * @return {(Object<?,*>|null)}
 */
clpp.utils.obj.merge = function(args) {
};
clpp.utils.strings;
/**
 * @param {(null|number|string|undefined)} bps
 * @return {string}
 */
clpp.utils.strings.bitrateToString = function(bps) {
};
/**
 * @param {number} duration
 * @param {string=} opt_format
 * @return {string}
 */
clpp.utils.strings.durationToString = function(duration, opt_format) {
};
/**
 * @param {string} str
 * @param {string} query
 * @return {boolean}
 */
clpp.utils.strings.endsWith = function(str, query) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView|null|string)} sourceData
 * @param {boolean=} escapeStr
 * @return {string}
 */
clpp.utils.strings.fromBytesAutoDetect = function(sourceData, escapeStr) {
};
/**
 * @param {(ArrayBuffer|ArrayBufferView|null)} data
 * @return {string}
 */
clpp.utils.strings.fromUtf8 = function(data) {
};
/**
 * @param {string} str
 * @return {number}
 */
clpp.utils.strings.hashCode = function(str) {
};
/**
 * @param {string} str
 * @param {string} query
 * @return {boolean}
 */
clpp.utils.strings.startsWith = function(str, query) {
};
/**
 * @param {string} s
 * @param {number=} opt_size
 * @return {!ArrayBuffer}
 */
clpp.utils.strings.toByteArray = function(s, opt_size) {
};
/**
 * @param {string} str
 * @param {boolean} littleEndian
 * @return {!ArrayBuffer}
 */
clpp.utils.strings.toUtf16 = function(str, littleEndian) {
};
/**
 * @param {string} str
 * @return {!Uint8Array}
 */
clpp.utils.strings.toUtf8 = function(str) {
};
clpp.utils.url;
/**
 * @param {(Object<string,string>|null)} queryParams
 * @param {boolean=} opt_ignoreQuestionMark
 * @param {(Array<string>|null)=} opt_keys
 * @return {string}
 */
clpp.utils.url.queryString = function(queryParams, opt_ignoreQuestionMark, opt_keys) {
};
clpp.verimatrix;
/**
 * @param {{authenticator: (string|undefined), deviceId: string, fairPlayAssetIdStrategy: (string|undefined), fairPlayCertificateUrl: string, fairPlayLicenseUrl: string, fairPlaySiteId: (string|undefined), httpHeaderNames: (Object<string,string>|undefined), licenseRequestVuidLocation: (string|undefined), playReadyLicenseUrl: string, widevineLicenseUrl: string}} vcasConfig
 * @extends {clpp.drm.DrmEnvironment}
 * @constructor
 */
clpp.verimatrix.Vcas = function(vcasConfig) {
};
/** @enum {string} */
clpp.verimatrix.Vcas.FairPlayAssetIdStrategy = {KEYID:1, CONTENTID_SITEID:2};
/** @enum {string} */
clpp.verimatrix.Vcas.LicenseRequestHttpHeader = {DEVICE_ID_HEADER:1, AUTHENTICATOR_HEADER:2};
/** @enum {string} */
clpp.verimatrix.Vcas.LicenseRequestVuidLocation = {QUERY_STRING:1, HTTP_HEADER:2};
clpp.verimatrix.Vcas.NAME;
/**
 * @param {{authenticator: (string|undefined), deviceId: string, fairPlayAssetIdStrategy: (string|undefined), fairPlayCertificateUrl: string, fairPlayLicenseUrl: string, fairPlaySiteId: (string|undefined), httpHeaderNames: (Object<string,string>|undefined), licenseRequestVuidLocation: (string|undefined), playReadyLicenseUrl: string, widevineLicenseUrl: string}} vcasConfig
 * @extends {clpp.drm.DrmEnvironment}
 * @constructor
 */
clpp.verimatrix.Vcas.prototype.constructor = function(vcasConfig) {
};
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.verimatrix.VcasComponent = function() {
};
clpp.version;
clpp.vimond;
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.vimond.VimondPlugin = function() {
};
clpp.vimond.VimondPlugin.Id;
/**
 * @param {string} authToken
 * @return {undefined}
 */
clpp.vimond.VimondPlugin.prototype.updateAuthToken = function(authToken) {
};
clpp.vr;
/**
 * @extends {clpp.plugin.AbstractPlugin}
 * @implements {cl.api.PlayerPlugin}
 * @constructor
 */
clpp.vr.VrPlugin = function() {
};
clpp.vr.VrPlugin.Id;
/**
 * @return {{x: number, y: number}}
 */
clpp.vr.VrPlugin.prototype.getCameraCoordinates = function() {
};
/**
 * @param {number} x
 * @param {number} y
 * @return {undefined}
 */
clpp.vr.VrPlugin.prototype.moveCamera = function(x, y) {
};
/**
 * @param {number} fov
 * @return {undefined}
 */
clpp.vr.VrPlugin.prototype.setCameraFieldOfView = function(fov) {
};
clpp.vtt;
/**
 * @extends {clpp.AbstractComponent}
 * @implements {clpp.IComponent}
 * @constructor
 */
clpp.vtt.VttComponent = function() {
};
