!function(){"use strict";var t=function(){var t,e;"function"==typeof(null===(t=window)||void 0===t||null===(e=t.sublime)||void 0===e?void 0:e.cleanUp)&&window.sublime.cleanUp()},e=function(){return window.frameElement.parentNode.parentNode.getAttribute("id")};!function(n){var i=window.document.body;if(!function(t){return window.frameElement.parentNode.parentNode.style.width==="".concat(t.width,"px")}(n)){var o=window.top.slmadshb&&window.top.slmadshb.adUnitsConfig&&window.top.slmadshb.adUnitsConfig.filter((function(t){return t.id===e()}))[0]||!1;if(!o)return;!function(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fixed",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:document,l=o.querySelector("#".concat(e)),a=o.querySelector("#".concat(e,">div")),c=o.querySelector("#".concat(e," iframe"));t(),!!c&&(a&&(a.style.display="inline-block",a.style.width="".concat(n[0],"px"),a.style.height="".concat(n[1],"px"),a.style.position="relative"),l.style.position=i,l.style.overflow="visible",l.style.height="".concat(n[1],"px"),l.style.width="".concat(n[0],"px"),l.style.left="50%",l.style.transform="translate(-50%, 0)",c.style.position="absolute",c.style.left="0",c.style.width="".concat(n[0],"px"),c.style.height="".concat(n[1],"px"))}(e(),[n.width,n.height],o.skin.position,window.top.document),o.skin.renderCallback.call(null,[n.width,n.height],[n.innerWidth,n.height-n.topHeight])}!function(t,e){var n=e.clickUrl,i=e.imageUrl,o=e.width,l=e.height,a=document.createElement("A");a.setAttribute("href",n),a.setAttribute("target","_blank"),a.style.width="".concat(o,"px"),a.style.height="".concat(l,"px"),a.style.display="block",a.style.textAlign="center",a.style.position="absolute",a.style.top="0",void 0!==i&&""!==i&&(a.style.background="url(".concat(i,")"),a.style.backgroundPosition="50% 0",a.style.backgroundRepeat="no-repeat"),t.appendChild(a)}(i,n),function(t){var n=t.timeout||0;if(n>0){var i=window.top.googletag.pubads().getSlots().filter((function(t){return t.getSlotElementId()===e()}));setInterval((function(){window.top.googletag.pubads().refresh(i)}),1e3*n)}}(n)}(window.SLMADS_SKIN_OPTIONS)}();