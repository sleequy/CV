{'use strict'
if(typeof __tcfapi === 'undefined') {
  !function(){var e=function(){var e,t="__tcfapiLocator",a=[],n=window;for(;n;){try{if(n.frames[t]){e=n;break}}catch(e){}if(n===window.top)break;n=n.parent}e||(!function e(){var a=n.document,r=!!n.frames[t];if(!r)if(a.body){var s=a.createElement("iframe");s.style.cssText="display:none",s.name=t,a.body.appendChild(s)}else setTimeout(e,5);return!r}(),n.__tcfapi=function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return a;if("setGdprApplies"===n[0])n.length>3&&2===parseInt(n[1],10)&&"boolean"==typeof n[3]&&(e=n[3],"function"==typeof n[2]&&n[2]("set",!0));else if("ping"===n[0]){var s={gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"};"function"==typeof n[2]&&n[2](s)}else a.push(n)},n.addEventListener("message",(function(e){var t="string"==typeof e.data,a={};try{a=t?JSON.parse(e.data):e.data}catch(e){}var n=a.__tcfapiCall;n&&window.__tcfapi(n.command,n.version,(function(a,r){var s={__tcfapiReturn:{returnValue:a,success:r,callId:n.callId}};t&&(s=JSON.stringify(s)),e&&e.source&&e.source.postMessage&&e.source.postMessage(s,"*")}),n.parameter)}),!1))};"undefined"!=typeof module?module.exports=e:e()}();
}
const a={d:document}
a.s=a.d.createElement('script')
a.s.src='https://cdn.appconsent.io/tcf2-clear/30.0.4/core.bundle.js'
a.d.head.appendChild(a.s)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
if(typeof configSFBXAppConsent !== 'undefined' && configSFBXAppConsent.enableGCM) {
  (window.adsbygoogle = window.adsbygoogle || []).pauseAdRequests = 1;
  gtag('consent', 'default', {
    'analytics_storage': 'denied',
    'functionality_storage': 'granted',
    'security_storage': 'granted',
    'personalization_storage': 'denied',
    'ad_storage': 'denied',
    'wait_for_update': 500
  });
}
}
