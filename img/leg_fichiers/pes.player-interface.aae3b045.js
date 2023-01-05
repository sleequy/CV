'use strict';(function(){window.dailymotion._do_not_use_6ffa9a1a8e661094e008.api=function(b){var t=_dmpesplayer.P.FULLSCREEN,q=_dmpesplayer.P.INLINE,u=_dmpesplayer.P.NATIVE_PIP,f=_dmpesplayer.E.PUBLIC,v=f.PLAYER_PRESENTATIONMODECHANGE,w=f.PLAYER_HEAVYADSINTERVENTION;f=_dmpesplayer.E.PRIVATE;var x=f.PLAYER_STATE,r=f.PLAYER_FULLSCREENCHANGE,y=f.PLAYER_NATIVEPIPCHANGE;f=b._do_not_use_6ffa9a1a8e661094e008;var z=f.id,m=f.settings,A=f.observer,B=f.stateFromPES,C=f.rootNode,e={},n=function(a){return Object.values(_dmpesplayer.E.PUBLIC).includes(a)};
b._do_not_use_6ffa9a1a8e661094e008.removeAllListeners=_dmpesplayer.a(b,_dmpesplayer.E.ALL,function(a){var c=a.id,d=a.event,g=a.fullscreen,h=a.mode,k=a.playerHeavyAdsInterventionReports;[r,y].includes(d)&&(a=d===r?g?t:q:"inline"===h?q:u,b._do_not_use_6ffa9a1a8e661094e008.stateFromPES.playerPresentationMode=a,_dmpesplayer.c(v,{id:c,playerPresentationMode:a}));e[d]&&n(d)&&(d===_dmpesplayer.E.PUBLIC.PLAYER_HEAVYADSINTERVENTION?e[d].forEach(function(l){l=l.cb;l({playerHeavyAdsInterventionReports:k})}):
b.getState().then(function(l){e[d].slice().forEach(function(p){p=p.cb;p(l)})}))});var D=function(a){var c=_dmpesplayer.a(b,x,function(d){Object.assign(d,B);a(d)});_dmpesplayer.s(b,_dmpesplayer.C.STATE);return c};b.pause=function(){return _dmpesplayer.s(b,_dmpesplayer.C.PAUSE)};b.play=function(){return _dmpesplayer.s(b,_dmpesplayer.C.PLAY)};b.seek=function(a){return _dmpesplayer.s(b,_dmpesplayer.C.SEEK,a)};b.setMute=function(a){return _dmpesplayer.s(b,_dmpesplayer.C.MUTED,a)};b.setQuality=function(a){return _dmpesplayer.s(b,
_dmpesplayer.C.QUALITY,a)};b.setSubtitles=function(a){return _dmpesplayer.s(b,_dmpesplayer.C.SUBTITLES,a)};b.setVolume=function(a){return _dmpesplayer.s(b,_dmpesplayer.C.VOLUME,a)};b.setFullscreen=function(a){return _dmpesplayer.s(b,_dmpesplayer.C.FULLSCREEN,a)};b.setControls=function(){console.warn("The setControls method has been deprecated. Please check https://developers.dailymotion.com/player/#changelog for more details")};b.setCustomConfig=function(a){_dmpesplayer.s(b,_dmpesplayer.C.CUSTOMCONFIG,
a)};b.setLoop=function(a){_dmpesplayer.s(b,_dmpesplayer.C.LOOP,a)};b.setPlaybackSpeed=function(a){_dmpesplayer.s(b,_dmpesplayer.C.SPEED,a)};b.setAspectRatio=function(a){_dmpesplayer.u(b,a,{withPesEvent:!0})};b.setScaleMode=function(a){_dmpesplayer.s(b,_dmpesplayer.C.SCALE,a);_dmpesplayer.b(b,a,{withPesEvent:!0})};b.loadContent=function(a){_dmpesplayer.s(b,_dmpesplayer.C.LOAD,a.video,{playlist:a.playlist,start:a.startTime,refreshQueue:a.refreshQueue,autoplay:m.autostart===_dmpesplayer.A.ON||m.autostart===
_dmpesplayer.A.FIRST_TIME&&A.wasViewableAtLeastOnce})};b.updateParams=function(a){void 0!==a.enableControls&&console.warn("The enableControls parameter from updateParams method has been deprecated. Please check https://developers.dailymotion.com/player/#changelog for more details");void 0!==a.aspectRatio&&_dmpesplayer.u(b,a.aspectRatio,{withPesEvent:!0});void 0!==a.scaleMode&&_dmpesplayer.b(b,a.scaleMode,{withPesEvent:!0});_dmpesplayer.s(b,_dmpesplayer.C.UPDATE_PARAMS,a)};b.on=function(a,c){var d=
(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).once;d=void 0===d?!1:d;if("string"===typeof a&&n(a))if("function"!==typeof c)console.warn("The specified callback should be a function, received ".concat(c));else if(e[a]||(e[a]=[]),e[a].find(function(k){return k.originalCb===c}))console.warn("Callback duplication detected for ".concat(a));else{var g=c;d&&(c=function(){h();g.apply(void 0,arguments)});var h=function(){e[a]&&(e[a]=e[a].filter(function(k){return k.originalCb!==g}))};e[a].push({originalCb:g,
cb:c});return h}else console.warn("Unknown event, received ".concat(a))};b.off=function(a,c){"string"===typeof a&&n(a)?e[a]?void 0===c?delete e[a]:"function"!==typeof c?console.warn("The specified callback should be a function, received ".concat(c)):e[a]=e[a].filter(function(d){return d.originalCb!==c}):console.warn("No listener on ".concat(a," to remove")):console.warn("Unknown event, received ".concat(a))};b.getState=function(){return new Promise(function(a,c){var d=b.on(w,function(){g();d();c();
console.warn("player.getState() rejected : player ".concat(z," has been destroyed by Heavy Ads"))}),g=D(function(h){g();d();a(h)})})};b.getRootNode=function(){return C};b.getSettings=function(){var a={};_dmpesplayer.S.filter(function(c){return c.isExposed}).forEach(function(c){c=c.key;a[c]=m[c]});return a};return b}})()
