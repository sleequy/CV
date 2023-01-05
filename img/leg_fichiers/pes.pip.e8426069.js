'use strict';(function(){for(var U=function(d){var a;return null===(a=d._do_not_use_6ffa9a1a8e661094e008.rootNode)||void 0===a?void 0:a.querySelector(".dailymotion-player-wrapper")},V=function(d){var a;return null===(a=d._do_not_use_6ffa9a1a8e661094e008.rootNode)||void 0===a?void 0:a.querySelector(".dailymotion-player")},F=[],W=function(d){F=[].concat(_dmpesplayer._(F),[d]);return function(){F=F.filter(function(a){return a!==d})}},ea=function(){F.forEach(function(d){return d()});F=[]},I=[],X=function(d,
a,e,g){var b=d.on(a,e,g);I=[].concat(_dmpesplayer._(I),[b]);d=function(){b();I=I.filter(function(f){return f!==b})};W(d);return d},l={state:{},prevState:{},defaultState:{isRunning:!1,displayMode:null,isSmallViewportDisplay:!1,isExpanded:!1,isPipCustomPosition:!1,hasRequestedVideoNavigation:!1,hasRequestedPipNative:!1,uiActionOrigin:null,playerSelectedForPip:null,playerSelectedForPipNative:null,pipPositionX:null,pipPositionY:null},nonPersistentStateProps:["uiActionOrigin"],onStateChange:function(){},
setState:function(d){var a=this;this.nonPersistentStateProps.forEach(function(e){Object.prototype.hasOwnProperty.call(d,e)||(d=_dmpesplayer.d({},d,{},_dmpesplayer.e({},e,a.defaultState[e])))});this.prevState=_dmpesplayer.d({},this.prevState,{},this.state);this.state=_dmpesplayer.d({},this.state,{},d);this.onStateChange(this.prevState,this.state)}},v=function(d){l.setState(d)},J=16/9,K=null,Y=!1,G=!1,A=null,P=Object.values(window.dailymotion._do_not_use_6ffa9a1a8e661094e008.players),L=0;L<P.length;L++)if(P[L]._do_not_use_6ffa9a1a8e661094e008.settings.pip!==
_dmpesplayer.f.OFF){Y=P[L]._do_not_use_6ffa9a1a8e661094e008.settings.enableStartPipExpanded;break}var x=function(){return window.innerWidth<=_dmpesplayer.V.SMALL_BREAKPOINT?_dmpesplayer.g.FOR_SMALL_VIEWPORT:_dmpesplayer.g.FOR_LARGE_VIEWPORT},D=function(){return x()===_dmpesplayer.g.FOR_SMALL_VIEWPORT},Z=function(d){return D()?M()||G||(null===d||void 0===d?0:d.adIsPlaying)?!0:!1:!1},ha=function(d,a){var e=function(b){b&&v({isExpanded:Z(),displayMode:x(),isSmallViewportDisplay:D()});H(d)};fa(d,a);e();
var g=_dmpesplayer.h(window,"resize",e);W(function(){g();aa(d);A&&(A(),A=null)})},N=function(d,a,e){l.state.isRunning&&!G&&(K=a?!0:!1,H(d,{animate:!0}),v({isExpanded:K,uiActionOrigin:e}))},H=function e(a){var g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},b=g.animate;b=void 0===b?!1:b;g=g.computePlayerIframeSizes;aa(a,{animate:b,computePlayerIframeSizes:void 0===g?!0:g});var f=a._do_not_use_6ffa9a1a8e661094e008.rootNode,p=U(a);g=V(a);var h=M()||G,c=ia(),r=c.dynamicWidth,n=c.dynamicHeight,
k=document.documentElement.clientWidth,q=Math.round(k/J);p.id="dailymotion-pip-".concat(x(),"-viewport");if(ja(p)){var m=function(t){return getComputedStyle(document.querySelector("#".concat(p.id))).getPropertyValue(t)};c={large:{defaultPositionX:"right",defaultPositionY:"bottom",defaultMargin:"".concat(20,"px")},small:{defaultPositionX:"left",defaultPositionY:"top",defaultMargin:"0px"}}[x()];var B=c.defaultPositionX,C=c.defaultPositionY,w=c.defaultMargin;c=function(t){return""!==m("--position-".concat(t)).trim()};
c("top")||c("bottom")||p.style.setProperty("--position-".concat(C),w);c("left")||c("right")||p.style.setProperty("--position-".concat(B),w);!c("bottom")&&A&&(A(),A=null);c("bottom")&&D()&&!A&&(A=_dmpesplayer.h(window,"scroll",function(){e(a,{computePlayerIframeSizes:!1})}));B=D()&&(c("bottom")||c("right")||m("--position-top")!==w||m("--position-left")!==w);C=c("left")||c("top")||m("--position-bottom")!==w||m("--position-right")!==w;var u=getComputedStyle(p),y=c("left")?"left":"right",E=c("top")?"top":
"bottom";Object.assign(p.style,{boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",height:"".concat("large"===x()?n:h?q:104,"px"),position:"fixed",transform:function(){for(var t=[],z=p.parentNode;z!==document&&z;)t.push(z),z=z.parentNode;z=document.documentElement.scrollLeft?document.documentElement.scrollLeft:t.reduce(function(Q,R){return Q+R.scrollLeft},0);var S=document.documentElement.scrollTop?document.documentElement.scrollTop:t.reduce(function(Q,R){return Q+R.scrollTop},0);t=("right"===y?document.documentElement.clientWidth-
("large"===x()?r:k):0)-f.getBoundingClientRect().x-z;z=("bottom"===E?window.innerHeight-("large"===x()?n:h?q:104):0)-f.getBoundingClientRect().y-S;S="right"===y?"-":"+";var ka="bottom"===E?"-":"+";return"translate(\n        calc(".concat(t,"px ").concat(S," ").concat("0.00001"!==parseFloat(u.marginRight).toPrecision(1)?"".concat(parseFloat(u.marginRight),"px"):"left"!==y||isNaN(m("--position-left").trim())?"right"!==y||isNaN(m("--position-right").trim())?"var(--position-".concat(y,")"):"".concat(Number(m("--position-right")),
"px"):"".concat(Number(m("--position-left")),"px"),"),\n        calc(").concat(z,"px ").concat(ka," ").concat("0.00001"!==parseFloat(u.marginBottom).toPrecision(1)?"".concat(parseFloat(u.marginBottom),"px"):"top"!==E||isNaN(m("--position-top").trim())?"bottom"!==E||isNaN(m("--position-bottom").trim())?"var(--position-".concat(E,")"):"".concat(Number(m("--position-bottom")),"px"):"".concat(Number(m("--position-top")),"px"),")\n      )")}(),transition:b?"height 0.3s ease":"none",width:"".concat("large"===
x()?r:k,"px"),zIndex:_dmpesplayer.M,bottom:"unset",left:"unset",right:"unset",top:"unset"});v({isPipCustomPosition:B||C,pipPositionX:p.getBoundingClientRect().x,pipPositionY:p.getBoundingClientRect().y})}else c={"for-large-viewport":{width:"".concat(r,"px"),height:"".concat(n,"px"),margin:"".concat(20,"px"),bottom:"0px",left:"initial",right:"0px",top:"initial"},"for-small-viewport":{width:"".concat(k,"px"),height:"".concat(h?q:104,"px"),margin:"0px",bottom:"initial",left:"0px",right:"initial",top:"0px"}}["for-".concat(x(),
"-viewport")],Object.assign(p.style,{bottom:c.bottom,boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",height:c.height,left:c.left,margin:c.margin,position:"fixed",right:c.right,top:c.top,transition:b?"height 0.3s ease":"none",width:c.width,zIndex:_dmpesplayer.M});D()?(Object.assign(g,{height:"".concat(q,"px"),width:"".concat(k,"px")}),Object.assign(g.style,{height:"".concat(q,"px"),transition:b?"transform 0.3s ease":"none",transform:h?"translate(0px,0px)":"translate(0px, -".concat(Math.round((q-104)/2),"px)"),
width:"".concat(k,"px")})):(Object.assign(g,{height:"100%",width:"100%"}),Object.assign(g.style,{height:"100%",transition:"none",transform:"translate(0px,0px)",width:"100%"}))},M=function(){return K||null===K&&Y?!0:!1},aa=function(a){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},g=e.animate;g=void 0===g?!1:g;e=e.computePlayerIframeSizes;e=void 0===e?!0:e;var b=U(a),f=V(a);b.removeAttribute("id");b.style.removeProperty("--position-top");b.style.removeProperty("--position-left");b.style.removeProperty("--position-bottom");
b.style.removeProperty("--position-right");Object.assign(b.style,_dmpesplayer.d({boxShadow:"unset"},g?{}:{height:"100%"},{position:"absolute",transform:"translate(0px,0px)",width:"100%",zIndex:"auto",margin:"0.00001px",bottom:"0.00001px",left:"0.00001px",right:"0.00001px",top:"0.00001px"}));e&&(Object.assign(f,{height:"100%",width:"100%"}),Object.assign(f.style,{height:"100%",transform:"translate(0px,0px)",transition:"none",width:"100%"}))},ia=function(){var a=window.innerWidth;if(a<=_dmpesplayer.V.MEDIUM_BREAKPOINT)return{dynamicWidth:410,
dynamicHeight:Math.round(410/J)};if(a>=_dmpesplayer.V.LARGE_BREAKPOINT)return{dynamicWidth:560,dynamicHeight:Math.round(560/J)};var e=_dmpesplayer.V.LARGE_BREAKPOINT-_dmpesplayer.V.MEDIUM_BREAKPOINT;a=Math.round((a-_dmpesplayer.V.LARGE_BREAKPOINT+e)/e*150)+410;return{dynamicWidth:a,dynamicHeight:Math.round(a/J)}},fa=function(a,e){(G=e.adIsPlaying)?ba(a):ca(a)},ca=function(a){X(a,_dmpesplayer.E.PUBLIC.AD_START,function(){G=!0;M()||(H(a),v({isExpanded:D()}));ba(a)},{once:!0})},ba=function(a){X(a,_dmpesplayer.E.PUBLIC.AD_END,
function(){G=!1;M()||(H(a),v({isExpanded:!1}));ca(a)},{once:!0})},ja=function(a){if(!_dmpesplayer.i("PV5_PES_PIP_CLS"))return!1;a=getComputedStyle(a);return"0.00001"===parseFloat(a.bottom).toPrecision(1)&&"0.00001"===parseFloat(a.left).toPrecision(1)&&"0.00001"===parseFloat(a.right).toPrecision(1)&&"0.00001"===parseFloat(a.top).toPrecision(1)},T=function(){},O=function(){},la=function(){v(_dmpesplayer.d({},l.defaultState));T=function(h){a();e();g();b();f();p();O(h)};var a=_dmpesplayer.k(_dmpesplayer.E.PUBLIC.PLAYER_VIEWABILITYCHANGE,
function(h){var c=h.viewable,r=h.wasViewableAtLeastOnce,n=h.uiActionOrigin,k=window.dailymotion._do_not_use_6ffa9a1a8e661094e008.players[h.id];if(k&&k._do_not_use_6ffa9a1a8e661094e008.settings.pip!==_dmpesplayer.f.OFF&&!(l.state.playerSelectedForPip&&k!==l.state.playerSelectedForPip||l.state.playerSelectedForPipNative)){var q=k.isEligibleForPipDisplay(r);h=q.status;q=q.reason;_dmpesplayer.l.log("PiP","Viewability change received\n        - is player viewable : ".concat(c,"\n        - is player eligible for PIP display : ").concat(h,
" (").concat(q,")"));c?O(n||"scroll"):!c&&k.isEligibleForPipDisplay(r).status&&k.getState().then(function(m){da(k,m,r||k._do_not_use_6ffa9a1a8e661094e008.settings.pip!==_dmpesplayer.f.INSTANT?"scroll":"instant_start")})}}),e=_dmpesplayer.k(_dmpesplayer.E.PUBLIC.PLAYER_PRESENTATION_MODE_CHANGE,function(h){var c=h.playerPresentationMode,r=_dmpesplayer.P.NATIVE_PIP,n=window.dailymotion._do_not_use_6ffa9a1a8e661094e008.players[h.id];n&&(c===_dmpesplayer.P.INLINE&&l.state.playerSelectedForPipNative===
n&&v({playerSelectedForPipNative:null}),c===r?(v({playerSelectedForPipNative:n}),l.state.hasRequestedPipNative&&v({hasRequestedPipNative:!1}),l.state.playerSelectedForPip&&O("pip_native_icon")):n.getState().then(function(k){k.playerIsViewable||da(n,k,"pip_native_icon")}))}),g=_dmpesplayer.k(_dmpesplayer.E.PRIVATE.CLOSE_PIP_REQUESTED,function(){T("close_icon")}),b=_dmpesplayer.k(_dmpesplayer.E.PRIVATE.BACK_TO_INLINE_DISPLAY_REQUESTED,function(){var h=l.state.playerSelectedForPip;h._do_not_use_6ffa9a1a8e661094e008.observer.setUIActionOrigin("back_icon");
h._do_not_use_6ffa9a1a8e661094e008.rootNode.scrollIntoView({block:"start"})}),f=_dmpesplayer.k(_dmpesplayer.E.PRIVATE.COLLAPSE_PIP_REQUESTED,function(){N(l.state.playerSelectedForPip,!1,"toggle_icon")}),p=_dmpesplayer.k(_dmpesplayer.E.PRIVATE.EXPAND_PIP_REQUESTED,function(){N(l.state.playerSelectedForPip,!0,"toggle_icon")})},da=function(a,e,g){l.state.isRunning||window.dailymotion._do_not_use_6ffa9a1a8e661094e008.playerSelectedForPip!==a||l.state.playerSelectedForPipNative||(O=function(b){l.state.isRunning&&
(ea(),v({isPipCustomPosition:!1,isRunning:!1,pipPositionX:null,pipPositionY:null,playerSelectedForPip:null,uiActionOrigin:b}),l.onStateChange=function(){},"close_icon"!==b&&"api_call"!==b||a.pause())},l.onStateChange=function(b,f){var p=b.isRunning,h=b.isExpanded,c=f.isRunning,r=f.isExpanded,n=f.uiActionOrigin,k=f.playerSelectedForPipNative,q=_dmpesplayer.j.ENABLED,m=_dmpesplayer.j.CLOSED,B=_dmpesplayer.P.PIP,C=_dmpesplayer.P.INLINE,w=_dmpesplayer.P.NATIVE_PIP,u=_dmpesplayer.E.PUBLIC,y=u.PLAYER_PRESENTATIONMODECHANGE;
u=u.PLAYER_PIPEXPANDEDCHANGE;n={playerPipDisplay:"".concat(f.displayMode,"Viewport"),playerPipIsExpanded:r,playerPipStatus:"close_icon"===n?m:q,playerPresentationMode:c?B:k?w:C};Object.assign(a._do_not_use_6ffa9a1a8e661094e008.stateFromPES,n);p!==c&&_dmpesplayer.c(y,_dmpesplayer.d({id:a._do_not_use_6ffa9a1a8e661094e008.id},n));h!==r&&_dmpesplayer.c(u,_dmpesplayer.d({id:a._do_not_use_6ffa9a1a8e661094e008.id},n));p=b.isSmallViewportDisplay;h=b.isExpanded;c=b.isPipCustomPosition;r=b.hasRequestedVideoNavigation;
y=b.hasRequestedPipNative;n=b.pipPositionX;k=b.pipPositionY;q=f.isRunning;m=f.isSmallViewportDisplay;B=f.isExpanded;C=f.isPipCustomPosition;w=f.hasRequestedVideoNavigation;u=f.hasRequestedPipNative;var E=f.uiActionOrigin,t=f.pipPositionX;f=f.pipPositionY;if(b.isRunning!==q||p!==m||h!==B||c!==C||r!==w||y!==u||n!==t||k!==f)b={isRunning:q,isSmallViewportDisplay:m,isExpanded:B,isPipCustomPosition:C,hasRequestedVideoNavigation:w,hasRequestedPipNative:u,uiActionOrigin:E,screenId:window.dailymotion._do_not_use_6ffa9a1a8e661094e008.screenId,
pipPositionX:t,pipPositionY:f},_dmpesplayer.l.log("PipEmitter","Sending new PIP state to player :",b),_dmpesplayer.s(a,_dmpesplayer.C.NOTIFY_PIP_CHANGED,b)},v({isRunning:!0,uiActionOrigin:g,displayMode:x(),isSmallViewportDisplay:D(),isExpanded:Z(e),playerSelectedForPip:a}),ha(a,e))};window.dailymotion.pipResume=function(){la()};window.dailymotion.pipClose=function(){T("api_call")};window.dailymotion.pipExpand=function(){N(l.state.playerSelectedForPip,!0,"api_call")};window.dailymotion.pipCollapse=
function(){N(l.state.playerSelectedForPip,!1,"api_call")};window.dailymotion.pipRepaint=function(){H(l.state.playerSelectedForPip)}})()