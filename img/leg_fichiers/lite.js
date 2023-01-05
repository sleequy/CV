var up=Object.defineProperty;var sp=(Oe,C,We)=>C in Oe?up(Oe,C,{enumerable:!0,configurable:!0,writable:!0,value:We}):Oe[C]=We;var ii=(Oe,C,We)=>(sp(Oe,typeof C!="symbol"?C+"":C,We),We);(function(){"use strict";var Oe,C,We,Ct,oi,ai,nn={},ui=[],ns=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Me(e,t){for(var n in t)e[n]=t[n];return e}function si(e){var t=e.parentNode;t&&t.removeChild(e)}function xe(e,t,n){var r,o,i,a={};for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:a[i]=t[i];if(arguments.length>2&&(a.children=arguments.length>3?Oe.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(i in e.defaultProps)a[i]===void 0&&(a[i]=e.defaultProps[i]);return kt(e,a,r,o,null)}function kt(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o==null?++We:o};return o==null&&C.vnode!=null&&C.vnode(i),i}function ci(){return{current:null}}function pe(e){return e.children}function he(e,t){this.props=e,this.context=t}function Tt(e,t){if(t==null)return e.__?Tt(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?Tt(e):null}function li(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return li(e)}}function Rn(e){(!e.__d&&(e.__d=!0)&&Ct.push(e)&&!rn.__r++||oi!==C.debounceRendering)&&((oi=C.debounceRendering)||setTimeout)(rn)}function rn(){for(var e;rn.__r=Ct.length;)e=Ct.sort(function(t,n){return t.__v.__b-n.__v.__b}),Ct=[],e.some(function(t){var n,r,o,i,a,s;t.__d&&(a=(i=(n=t).__v).__e,(s=n.__P)&&(r=[],(o=Me({},i)).__v=i.__v+1,jn(s,i,o,n.__n,s.ownerSVGElement!==void 0,i.__h!=null?[a]:null,r,a==null?Tt(i):a,i.__h),_i(r,i),i.__e!=a&&li(i)))})}function fi(e,t,n,r,o,i,a,s,d,c){var u,p,l,f,h,v,m,_=r&&r.__k||ui,y=_.length;for(n.__k=[],u=0;u<t.length;u++)if((f=n.__k[u]=(f=t[u])==null||typeof f=="boolean"?null:typeof f=="string"||typeof f=="number"||typeof f=="bigint"?kt(null,f,null,null,f):Array.isArray(f)?kt(pe,{children:f},null,null,null):f.__b>0?kt(f.type,f.props,f.key,f.ref?f.ref:null,f.__v):f)!=null){if(f.__=n,f.__b=n.__b+1,(l=_[u])===null||l&&f.key==l.key&&f.type===l.type)_[u]=void 0;else for(p=0;p<y;p++){if((l=_[p])&&f.key==l.key&&f.type===l.type){_[p]=void 0;break}l=null}jn(e,f,l=l||nn,o,i,a,s,d,c),h=f.__e,(p=f.ref)&&l.ref!=p&&(m||(m=[]),l.ref&&m.push(l.ref,null,f),m.push(p,f.__c||h,f)),h!=null?(v==null&&(v=h),typeof f.type=="function"&&f.__k===l.__k?f.__d=d=di(f,d,e):d=pi(e,f,l,_,h,d),typeof n.type=="function"&&(n.__d=d)):d&&l.__e==d&&d.parentNode!=e&&(d=Tt(l))}for(n.__e=v,u=y;u--;)_[u]!=null&&gi(_[u],_[u]);if(m)for(u=0;u<m.length;u++)yi(m[u],m[++u],m[++u])}function di(e,t,n){for(var r,o=e.__k,i=0;o&&i<o.length;i++)(r=o[i])&&(r.__=e,t=typeof r.type=="function"?di(r,t,n):pi(n,r,r,o,r.__e,t));return t}function De(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){De(n,t)}):t.push(e)),t}function pi(e,t,n,r,o,i){var a,s,d;if(t.__d!==void 0)a=t.__d,t.__d=void 0;else if(n==null||o!=i||o.parentNode==null)e:if(i==null||i.parentNode!==e)e.appendChild(o),a=null;else{for(s=i,d=0;(s=s.nextSibling)&&d<r.length;d+=1)if(s==o)break e;e.insertBefore(o,i),a=i}return a!==void 0?a:o.nextSibling}function rs(e,t,n,r,o){var i;for(i in n)i==="children"||i==="key"||i in t||on(e,i,null,n[i],r);for(i in t)o&&typeof t[i]!="function"||i==="children"||i==="key"||i==="value"||i==="checked"||n[i]===t[i]||on(e,i,t[i],n[i],r)}function hi(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||ns.test(t)?n:n+"px"}function on(e,t,n,r,o){var i;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||hi(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||hi(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")i=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r||e.addEventListener(t,i?mi:vi,i):e.removeEventListener(t,i?mi:vi,i);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function vi(e){this.l[e.type+!1](C.event?C.event(e):e)}function mi(e){this.l[e.type+!0](C.event?C.event(e):e)}function jn(e,t,n,r,o,i,a,s,d){var c,u,p,l,f,h,v,m,_,y,w,O,b,P,M,L=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,s=t.__e=n.__e,t.__h=null,i=[s]),(c=C.__b)&&c(t);try{e:if(typeof L=="function"){if(m=t.props,_=(c=L.contextType)&&r[c.__c],y=c?_?_.props.value:c.__:r,n.__c?v=(u=t.__c=n.__c).__=u.__E:("prototype"in L&&L.prototype.render?t.__c=u=new L(m,y):(t.__c=u=new he(m,y),u.constructor=L,u.render=os),_&&_.sub(u),u.props=m,u.state||(u.state={}),u.context=y,u.__n=r,p=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),L.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Me({},u.__s)),Me(u.__s,L.getDerivedStateFromProps(m,u.__s))),l=u.props,f=u.state,p)L.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(L.getDerivedStateFromProps==null&&m!==l&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(m,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(m,u.__s,y)===!1||t.__v===n.__v){for(u.props=m,u.state=u.__s,t.__v!==n.__v&&(u.__d=!1),u.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(W){W&&(W.__=t)}),w=0;w<u._sb.length;w++)u.__h.push(u._sb[w]);u._sb=[],u.__h.length&&a.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(m,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(l,f,h)})}if(u.context=y,u.props=m,u.__v=t,u.__P=e,O=C.__r,b=0,"prototype"in L&&L.prototype.render){for(u.state=u.__s,u.__d=!1,O&&O(t),c=u.render(u.props,u.state,u.context),P=0;P<u._sb.length;P++)u.__h.push(u._sb[P]);u._sb=[]}else do u.__d=!1,O&&O(t),c=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++b<25);u.state=u.__s,u.getChildContext!=null&&(r=Me(Me({},r),u.getChildContext())),p||u.getSnapshotBeforeUpdate==null||(h=u.getSnapshotBeforeUpdate(l,f)),M=c!=null&&c.type===pe&&c.key==null?c.props.children:c,fi(e,Array.isArray(M)?M:[M],t,n,r,o,i,a,s,d),u.base=t.__e,t.__h=null,u.__h.length&&a.push(u),v&&(u.__E=u.__=null),u.__e=!1}else i==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=is(n.__e,t,n,r,o,i,a,d);(c=C.diffed)&&c(t)}catch(W){t.__v=null,(d||i!=null)&&(t.__e=s,t.__h=!!d,i[i.indexOf(s)]=null),C.__e(W,t,n)}}function _i(e,t){C.__c&&C.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){C.__e(r,n.__v)}})}function is(e,t,n,r,o,i,a,s){var d,c,u,p=n.props,l=t.props,f=t.type,h=0;if(f==="svg"&&(o=!0),i!=null){for(;h<i.length;h++)if((d=i[h])&&"setAttribute"in d==!!f&&(f?d.localName===f:d.nodeType===3)){e=d,i[h]=null;break}}if(e==null){if(f===null)return document.createTextNode(l);e=o?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f,l.is&&l),i=null,s=!1}if(f===null)p===l||s&&e.data===l||(e.data=l);else{if(i=i&&Oe.call(e.childNodes),c=(p=n.props||nn).dangerouslySetInnerHTML,u=l.dangerouslySetInnerHTML,!s){if(i!=null)for(p={},h=0;h<e.attributes.length;h++)p[e.attributes[h].name]=e.attributes[h].value;(u||c)&&(u&&(c&&u.__html==c.__html||u.__html===e.innerHTML)||(e.innerHTML=u&&u.__html||""))}if(rs(e,l,p,o,s),u)t.__k=[];else if(h=t.props.children,fi(e,Array.isArray(h)?h:[h],t,n,r,o&&f!=="foreignObject",i,a,i?i[0]:n.__k&&Tt(n,0),s),i!=null)for(h=i.length;h--;)i[h]!=null&&si(i[h]);s||("value"in l&&(h=l.value)!==void 0&&(h!==e.value||f==="progress"&&!h||f==="option"&&h!==p.value)&&on(e,"value",h,p.value,!1),"checked"in l&&(h=l.checked)!==void 0&&h!==e.checked&&on(e,"checked",h,p.checked,!1))}return e}function yi(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){C.__e(r,n)}}function gi(e,t,n){var r,o;if(C.unmount&&C.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||yi(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){C.__e(i,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(o=0;o<r.length;o++)r[o]&&gi(r[o],t,n||typeof e.type!="function");n||e.__e==null||si(e.__e),e.__=e.__e=e.__d=void 0}function os(e,t,n){return this.constructor(e,n)}function ft(e,t,n){var r,o,i;C.__&&C.__(e,t),o=(r=typeof n=="function")?null:n&&n.__k||t.__k,i=[],jn(t,e=(!r&&n||t).__k=xe(pe,null,[e]),o||nn,nn,t.ownerSVGElement!==void 0,!r&&n?[n]:o?null:t.firstChild?Oe.call(t.childNodes):null,i,!r&&n?n:o?o.__e:t.firstChild,r),_i(i,e)}function bi(e,t){ft(e,t,bi)}function as(e,t,n){var r,o,i,a=Me({},e.props);for(i in t)i=="key"?r=t[i]:i=="ref"?o=t[i]:a[i]=t[i];return arguments.length>2&&(a.children=arguments.length>3?Oe.call(arguments,2):n),kt(e.type,a,r||e.key,o||e.ref,null)}function an(e,t){var n={__c:t="__cC"+ai++,__:e,Consumer:function(r,o){return r.children(o)},Provider:function(r){var o,i;return this.getChildContext||(o=[],(i={})[t]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&o.some(Rn)},this.sub=function(a){o.push(a);var s=a.componentWillUnmount;a.componentWillUnmount=function(){o.splice(o.indexOf(a),1),s&&s.call(a)}}),r.children}};return n.Provider.__=n.Consumer.contextType=n}Oe=ui.slice,C={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(s){e=s}throw e}},We=0,he.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Me({},this.state),typeof e=="function"&&(e=e(Me({},n),this.props)),e&&Me(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Rn(this))},he.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Rn(this))},he.prototype.render=pe,Ct=[],rn.__r=0,ai=0,typeof window<"u"&&window.__PREACT_DEVTOOLS__&&window.__PREACT_DEVTOOLS__.attachPreact("10.11.3",C,{Fragment:pe,Component:he});var wi={};function He(e){return e.type===pe?"Fragment":typeof e.type=="function"?e.type.displayName||e.type.name:typeof e.type=="string"?e.type:"#text"}var $t=[],dt=[];function Si(){return $t.length>0?$t[$t.length-1]:null}var Ei=!1;function Mn(e){return typeof e.type=="function"&&e.type!=pe}function _e(e){for(var t=[e],n=e;n.__o!=null;)t.push(n.__o),n=n.__o;return t.reduce(function(r,o){r+="  in "+He(o);var i=o.__source;return i?r+=" (at "+i.fileName+":"+i.lineNumber+")":Ei||(Ei=!0,console.warn("Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.")),r+`
`},"")}var us=typeof WeakMap=="function";function Ai(e){return e?typeof e.type=="function"?Ai(e.__):e:{}}var ss=he.prototype.setState;he.prototype.setState=function(e,t){return this.__v==null&&this.state==null&&console.warn(`Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.

`+_e(Si())),ss.call(this,e,t)};var cs=he.prototype.forceUpdate;function Le(e){var t=e.props,n=He(e),r="";for(var o in t)if(t.hasOwnProperty(o)&&o!=="children"){var i=t[o];typeof i=="function"&&(i="function "+(i.displayName||i.name)+"() {}"),i=Object(i)!==i||i.toString?i+"":Object.prototype.toString.call(i),r+=" "+o+"="+JSON.stringify(i)}var a=t.children;return"<"+n+r+(a&&a.length?">..</"+n+">":" />")}he.prototype.forceUpdate=function(e){return this.__v==null?console.warn(`Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.

`+_e(Si())):this.__P==null&&console.warn(`Can't call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

`+_e(this.__v)),cs.call(this,e)},function(){(function(){var l=C.__b,f=C.diffed,h=C.__,v=C.vnode,m=C.__r;C.diffed=function(_){Mn(_)&&dt.pop(),$t.pop(),f&&f(_)},C.__b=function(_){Mn(_)&&$t.push(_),l&&l(_)},C.__=function(_,y){dt=[],h&&h(_,y)},C.vnode=function(_){_.__o=dt.length>0?dt[dt.length-1]:null,v&&v(_)},C.__r=function(_){Mn(_)&&dt.push(_),m&&m(_)}})();var e=!1,t=C.__b,n=C.diffed,r=C.vnode,o=C.__e,i=C.__,a=C.__h,s=us?{useEffect:new WeakMap,useLayoutEffect:new WeakMap,lazyPropTypes:new WeakMap}:null,d=[];C.__e=function(l,f,h,v){if(f&&f.__c&&typeof l.then=="function"){var m=l;l=new Error("Missing Suspense. The throwing component was: "+He(f));for(var _=f;_;_=_.__)if(_.__c&&_.__c.__c){l=m;break}if(l instanceof Error)throw l}try{(v=v||{}).componentStack=_e(f),o(l,f,h,v),typeof l.then!="function"&&setTimeout(function(){throw l})}catch(y){throw y}},C.__=function(l,f){if(!f)throw new Error(`Undefined parent passed to render(), this is the second argument.
Check if the element is available in the DOM/has the correct id.`);var h;switch(f.nodeType){case 1:case 11:case 9:h=!0;break;default:h=!1}if(!h){var v=He(l);throw new Error("Expected a valid HTML node as a second argument to render.	Received "+f+" instead: render(<"+v+" />, "+f+");")}i&&i(l,f)},C.__b=function(l){var f=l.type,h=Ai(l.__);if(e=!0,f===void 0)throw new Error(`Undefined component passed to createElement()

You likely forgot to export your component or might have mixed up default and named imports`+Le(l)+`

`+_e(l));if(f!=null&&typeof f=="object")throw f.__k!==void 0&&f.__e!==void 0?new Error("Invalid type passed to createElement(): "+f+`

Did you accidentally pass a JSX literal as JSX twice?

  let My`+He(l)+" = "+Le(f)+`;
  let vnode = <My`+He(l)+` />;

This usually happens when you export a JSX literal and not the component.

`+_e(l)):new Error("Invalid type passed to createElement(): "+(Array.isArray(f)?"array":f));if(f!=="thead"&&f!=="tfoot"&&f!=="tbody"||h.type==="table"?f==="tr"&&h.type!=="thead"&&h.type!=="tfoot"&&h.type!=="tbody"&&h.type!=="table"?console.error("Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot/table> parent."+Le(l)+`

`+_e(l)):f==="td"&&h.type!=="tr"?console.error("Improper nesting of table. Your <td> should have a <tr> parent."+Le(l)+`

`+_e(l)):f==="th"&&h.type!=="tr"&&console.error("Improper nesting of table. Your <th> should have a <tr>."+Le(l)+`

`+_e(l)):console.error("Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent."+Le(l)+`

`+_e(l)),l.ref!==void 0&&typeof l.ref!="function"&&typeof l.ref!="object"&&!("$$typeof"in l))throw new Error(`Component's "ref" property should be a function, or an object created by createRef(), but got [`+typeof l.ref+`] instead
`+Le(l)+`

`+_e(l));if(typeof l.type=="string"){for(var v in l.props)if(v[0]==="o"&&v[1]==="n"&&typeof l.props[v]!="function"&&l.props[v]!=null)throw new Error(`Component's "`+v+'" property should be a function, but got ['+typeof l.props[v]+`] instead
`+Le(l)+`

`+_e(l))}if(typeof l.type=="function"&&l.type.propTypes){if(l.type.displayName==="Lazy"&&s&&!s.lazyPropTypes.has(l.type)){var m="PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ";try{var _=l.type();s.lazyPropTypes.set(l.type,!0),console.warn(m+"Component wrapped in lazy() is "+He(_))}catch{console.warn(m+"We will log the wrapped component's name once it is loaded.")}}var y=l.props;l.type.__f&&delete(y=function(w,O){for(var b in O)w[b]=O[b];return w}({},y)).ref,function(w,O,b,P,M){Object.keys(w).forEach(function(L){var W;try{W=w[L](O,L,P,"prop",null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(V){W=V}W&&!(W.message in wi)&&(wi[W.message]=!0,console.error("Failed prop type: "+W.message+(M&&`
`+M()||"")))})}(l.type.propTypes,y,0,He(l),function(){return _e(l)})}t&&t(l)},C.__h=function(l,f,h){if(!l||!e)throw new Error("Hook can only be invoked from render methods.");a&&a(l,f,h)};var c=function(l,f){return{get:function(){var h="get"+l+f;d&&d.indexOf(h)<0&&(d.push(h),console.warn("getting vnode."+l+" is deprecated, "+f))},set:function(){var h="set"+l+f;d&&d.indexOf(h)<0&&(d.push(h),console.warn("setting vnode."+l+" is not allowed, "+f))}}},u={nodeName:c("nodeName","use vnode.type"),attributes:c("attributes","use vnode.props"),children:c("children","use vnode.props.children")},p=Object.create({},u);C.vnode=function(l){var f=l.props;if(l.type!==null&&f!=null&&("__source"in f||"__self"in f)){var h=l.props={};for(var v in f){var m=f[v];v==="__source"?l.__source=m:v==="__self"?l.__self=m:h[v]=m}}l.__proto__=p,r&&r(l)},C.diffed=function(l){if(l.__k&&l.__k.forEach(function(_){if(_&&_.type===void 0){delete _.__,delete _.__b;var y=Object.keys(_).join(",");throw new Error("Objects are not valid as a child. Encountered an object with the keys {"+y+`}.

`+_e(l))}}),e=!1,n&&n(l),l.__k!=null)for(var f=[],h=0;h<l.__k.length;h++){var v=l.__k[h];if(v&&v.key!=null){var m=v.key;if(f.indexOf(m)!==-1){console.error('Following component has two or more children with the same key attribute: "'+m+`". This may cause glitches and misbehavior in rendering process. Component: 

`+Le(l)+`

`+_e(l));break}f.push(m)}}}}();var pt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oi(e){var t=e.default;if(typeof t=="function"){var n=function(){return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}var xi={exports:{}},Dn={},Qe,te,Ln,Pi,ht=0,Ii=[],un=[],Ci=C.__b,ki=C.__r,Ti=C.diffed,$i=C.__c,Ni=C.unmount;function rt(e,t){C.__h&&C.__h(te,e,ht||t),ht=0;var n=te.__H||(te.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:un}),n.__[e]}function Pe(e){return ht=1,qn(Li,e)}function qn(e,t,n){var r=rt(Qe++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Li(void 0,t),function(i){var a=r.__N?r.__N[0]:r.__[0],s=r.t(a,i);a!==s&&(r.__N=[s,r.__[1]],r.__c.setState({}))}],r.__c=te,!te.u)){te.u=!0;var o=te.shouldComponentUpdate;te.shouldComponentUpdate=function(i,a,s){if(!r.__c.__H)return!0;var d=r.__c.__H.__.filter(function(u){return u.__c});if(d.every(function(u){return!u.__N}))return!o||o.call(this,i,a,s);var c=!1;return d.forEach(function(u){if(u.__N){var p=u.__[0];u.__=u.__N,u.__N=void 0,p!==u.__[0]&&(c=!0)}}),!(!c&&r.__c.props===i)&&(!o||o.call(this,i,a,s))}}return r.__N||r.__}function Ie(e,t){var n=rt(Qe++,3);!C.__s&&zn(n.__H,t)&&(n.__=e,n.i=t,te.__H.__h.push(n))}function it(e,t){var n=rt(Qe++,4);!C.__s&&zn(n.__H,t)&&(n.__=e,n.i=t,te.__h.push(n))}function Bn(e){return ht=5,Ge(function(){return{current:e}},[])}function Ri(e,t,n){ht=6,it(function(){return typeof e=="function"?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0},n==null?n:n.concat(e))}function Ge(e,t){var n=rt(Qe++,7);return zn(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ji(e,t){return ht=8,Ge(function(){return e},t)}function Te(e){var t=te.context[e.__c],n=rt(Qe++,9);return n.c=e,t?(n.__==null&&(n.__=!0,t.sub(te)),t.props.value):e.__}function Vn(e,t){C.useDebugValue&&C.useDebugValue(t?t(e):e)}function ls(e){var t=rt(Qe++,10),n=Pe();return t.__=e,te.componentDidCatch||(te.componentDidCatch=function(r,o){t.__&&t.__(r,o),n[1](r)}),[n[0],function(){n[1](void 0)}]}function Mi(){var e=rt(Qe++,11);if(!e.__){for(var t=te.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++}return e.__}function fs(){for(var e;e=Ii.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(sn),e.__H.__h.forEach(Un),e.__H.__h=[]}catch(t){e.__H.__h=[],C.__e(t,e.__v)}}C.__b=function(e){te=null,Ci&&Ci(e)},C.__r=function(e){ki&&ki(e),Qe=0;var t=(te=e.__c).__H;t&&(Ln===te?(t.__h=[],te.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=un,n.__N=n.i=void 0})):(t.__h.forEach(sn),t.__h.forEach(Un),t.__h=[])),Ln=te},C.diffed=function(e){Ti&&Ti(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ii.push(t)!==1&&Pi===C.requestAnimationFrame||((Pi=C.requestAnimationFrame)||ds)(fs)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==un&&(n.__=n.__V),n.i=void 0,n.__V=un})),Ln=te=null},C.__c=function(e,t){t.some(function(n){try{n.__h.forEach(sn),n.__h=n.__h.filter(function(r){return!r.__||Un(r)})}catch(r){t.some(function(o){o.__h&&(o.__h=[])}),t=[],C.__e(r,n.__v)}}),$i&&$i(e,t)},C.unmount=function(e){Ni&&Ni(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{sn(r)}catch(o){t=o}}),n.__H=void 0,t&&C.__e(t,n.__v))};var Di=typeof requestAnimationFrame=="function";function ds(e){var t,n=function(){clearTimeout(r),Di&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);Di&&(t=requestAnimationFrame(n))}function sn(e){var t=te,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),te=t}function Un(e){var t=te;e.__c=e.__(),te=t}function zn(e,t){return!e||e.length!==t.length||t.some(function(n,r){return n!==e[r]})}function Li(e,t){return typeof t=="function"?t(e):t}function qi(e,t){for(var n in t)e[n]=t[n];return e}function Fn(e,t){for(var n in e)if(n!=="__source"&&!(n in t))return!0;for(var r in t)if(r!=="__source"&&e[r]!==t[r])return!0;return!1}function Wn(e,t){return e===t&&(e!==0||1/e==1/t)||e!=e&&t!=t}function cn(e){this.props=e}function Bi(e,t){function n(o){var i=this.props.ref,a=i==o.ref;return!a&&i&&(i.call?i(null):i.current=null),t?!t(this.props,o)||!a:Fn(this.props,o)}function r(o){return this.shouldComponentUpdate=n,xe(e,o)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(cn.prototype=new he).isPureReactComponent=!0,cn.prototype.shouldComponentUpdate=function(e,t){return Fn(this.props,e)||Fn(this.state,t)};var Vi=C.__b;C.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),Vi&&Vi(e)};var ps=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Ui(e){function t(n){var r=qi({},n);return delete r.ref,e(r,n.ref||null)}return t.$$typeof=ps,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var zi=function(e,t){return e==null?null:De(De(e).map(t))},Fi={map:zi,forEach:zi,count:function(e){return e?De(e).length:0},only:function(e){var t=De(e);if(t.length!==1)throw"Children.only";return t[0]},toArray:De},hs=C.__e;C.__e=function(e,t,n,r){if(e.then){for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return t.__e==null&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t)}hs(e,t,n,r)};var Wi=C.unmount;function Hi(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(r){typeof r.__c=="function"&&r.__c()}),e.__c.__H=null),(e=qi({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map(function(r){return Hi(r,t,n)})),e}function Qi(e,t,n){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(r){return Qi(r,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.insertBefore(e.__e,e.__d),e.__c.__e=!0,e.__c.__P=n)),e}function Nt(){this.__u=0,this.t=null,this.__b=null}function Gi(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Ki(e){var t,n,r;function o(i){if(t||(t=e()).then(function(a){n=a.default||a},function(a){r=a}),r)throw r;if(!n)throw t;return xe(n,i)}return o.displayName="Lazy",o.__f=!0,o}function vt(){this.u=null,this.o=null}C.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&e.__h===!0&&(e.type=null),Wi&&Wi(e)},(Nt.prototype=new he).__c=function(e,t){var n=t.__c,r=this;r.t==null&&(r.t=[]),r.t.push(n);var o=Gi(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(s):s())};n.__R=a;var s=function(){if(!--r.__u){if(r.state.__a){var c=r.state.__a;r.__v.__k[0]=Qi(c,c.__c.__P,c.__c.__O)}var u;for(r.setState({__a:r.__b=null});u=r.t.pop();)u.forceUpdate()}},d=t.__h===!0;r.__u++||d||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a)},Nt.prototype.componentWillUnmount=function(){this.t=[]},Nt.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=Hi(this.__b,n,r.__O=r.__P)}this.__b=null}var o=t.__a&&xe(pe,null,e.fallback);return o&&(o.__h=null),[xe(pe,null,t.__a?null:e.children),o]};var Yi=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2]}};function vs(e){return this.getChildContext=function(){return e.context},e.children}function ms(e){var t=this,n=e.i;t.componentWillUnmount=function(){ft(null,t.l),t.l=null,t.i=null},t.i&&t.i!==n&&t.componentWillUnmount(),e.__v?(t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],appendChild:function(r){this.childNodes.push(r),t.i.appendChild(r)},insertBefore:function(r,o){this.childNodes.push(r),t.i.appendChild(r)},removeChild:function(r){this.childNodes.splice(this.childNodes.indexOf(r)>>>1,1),t.i.removeChild(r)}}),ft(xe(vs,{context:t.context},e.__v),t.l)):t.l&&t.componentWillUnmount()}function Xi(e,t){var n=xe(ms,{__v:e,i:t});return n.containerInfo=t,n}(vt.prototype=new he).__a=function(e){var t=this,n=Gi(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),Yi(t,e,r)):o()};n?n(i):i()}},vt.prototype.render=function(e){this.u=null,this.o=new Map;var t=De(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},vt.prototype.componentDidUpdate=vt.prototype.componentDidMount=function(){var e=this;this.o.forEach(function(t,n){Yi(e,n,t)})};var Ji=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,_s=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,ys=typeof document<"u",gs=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(e)};function Zi(e,t,n){return t.__k==null&&(t.textContent=""),ft(e,t),typeof n=="function"&&n(),e?e.__c:null}function eo(e,t,n){return bi(e,t),typeof n=="function"&&n(),e?e.__c:null}he.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(he.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var to=C.event;function bs(){}function ws(){return this.cancelBubble}function Ss(){return this.defaultPrevented}C.event=function(e){return to&&(e=to(e)),e.persist=bs,e.isPropagationStopped=ws,e.isDefaultPrevented=Ss,e.nativeEvent=e};var no,ro={configurable:!0,get:function(){return this.class}},io=C.vnode;C.vnode=function(e){var t=e.type,n=e.props,r=n;if(typeof t=="string"){var o=t.indexOf("-")===-1;for(var i in r={},n){var a=n[i];ys&&i==="children"&&t==="noscript"||i==="value"&&"defaultValue"in n&&a==null||(i==="defaultValue"&&"value"in n&&n.value==null?i="value":i==="download"&&a===!0?a="":/ondoubleclick/i.test(i)?i="ondblclick":/^onchange(textarea|input)/i.test(i+t)&&!gs(n.type)?i="oninput":/^onfocus$/i.test(i)?i="onfocusin":/^onblur$/i.test(i)?i="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)?i=i.toLowerCase():o&&_s.test(i)?i=i.replace(/[A-Z0-9]/g,"-$&").toLowerCase():a===null&&(a=void 0),/^oninput$/i.test(i)&&(i=i.toLowerCase(),r[i]&&(i="oninputCapture")),r[i]=a)}t=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=De(n.children).forEach(function(s){s.props.selected=r.value.indexOf(s.props.value)!=-1})),t=="select"&&r.defaultValue!=null&&(r.value=De(n.children).forEach(function(s){s.props.selected=r.multiple?r.defaultValue.indexOf(s.props.value)!=-1:r.defaultValue==s.props.value})),e.props=r,n.class!=n.className&&(ro.enumerable="className"in n,n.className!=null&&(r.class=n.className),Object.defineProperty(r,"className",ro))}e.$$typeof=Ji,io&&io(e)};var oo=C.__r;C.__r=function(e){oo&&oo(e),no=e.__c};var ao={ReactCurrentDispatcher:{current:{readContext:function(e){return no.__n[e.__c].props.value}}}},Es="17.0.2";function uo(e){return xe.bind(null,e)}function Hn(e){return!!e&&e.$$typeof===Ji}function so(e){return Hn(e)?as.apply(null,arguments):e}function co(e){return!!e.__k&&(ft(null,e),!0)}function lo(e){return e&&(e.base||e.nodeType===1&&e)||null}var Qn=function(e,t){return e(t)},fo=function(e,t){return e(t)},po=pe;function Gn(e){e()}function ho(e){return e}function vo(){return[!1,Gn]}var mo=it;function _o(e,t){var n=t(),r=Pe({h:{__:n,v:t}}),o=r[0].h,i=r[1];return it(function(){o.__=n,o.v=t,Wn(o.__,t())||i({h:o})},[e,n,t]),Ie(function(){return Wn(o.__,o.v())||i({h:o}),e(function(){Wn(o.__,o.v())||i({h:o})})},[e]),n}var qe={useState:Pe,useId:Mi,useReducer:qn,useEffect:Ie,useLayoutEffect:it,useInsertionEffect:mo,useTransition:vo,useDeferredValue:ho,useSyncExternalStore:_o,startTransition:Gn,useRef:Bn,useImperativeHandle:Ri,useMemo:Ge,useCallback:ji,useContext:Te,useDebugValue:Vn,version:"17.0.2",Children:Fi,render:Zi,hydrate:eo,unmountComponentAtNode:co,createPortal:Xi,createElement:xe,createContext:an,createFactory:uo,cloneElement:so,createRef:ci,Fragment:pe,isValidElement:Hn,findDOMNode:lo,Component:he,PureComponent:cn,memo:Bi,forwardRef:Ui,flushSync:fo,unstable_batchedUpdates:Qn,StrictMode:po,Suspense:Nt,SuspenseList:vt,lazy:Ki,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ao};const yo=Oi(Object.freeze(Object.defineProperty({__proto__:null,Children:Fi,PureComponent:cn,StrictMode:po,Suspense:Nt,SuspenseList:vt,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ao,cloneElement:so,createFactory:uo,createPortal:Xi,default:qe,findDOMNode:lo,flushSync:fo,forwardRef:Ui,hydrate:eo,isValidElement:Hn,lazy:Ki,memo:Bi,render:Zi,startTransition:Gn,unmountComponentAtNode:co,unstable_batchedUpdates:Qn,useDeferredValue:ho,useInsertionEffect:mo,useSyncExternalStore:_o,useTransition:vo,version:Es,Component:he,Fragment:pe,createContext:an,createElement:xe,createRef:ci,useCallback:ji,useContext:Te,useDebugValue:Vn,useEffect:Ie,useErrorBoundary:ls,useId:Mi,useImperativeHandle:Ri,useLayoutEffect:it,useMemo:Ge,useReducer:qn,useRef:Bn,useState:Pe},Symbol.toStringTag,{value:"Module"})));/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go;function As(){if(go)return Dn;go=1;var e=yo;function t(p,l){return p===l&&(p!==0||1/p===1/l)||p!==p&&l!==l}var n=typeof Object.is=="function"?Object.is:t,r=e.useState,o=e.useEffect,i=e.useLayoutEffect,a=e.useDebugValue;function s(p,l){var f=l(),h=r({inst:{value:f,getSnapshot:l}}),v=h[0].inst,m=h[1];return i(function(){v.value=f,v.getSnapshot=l,d(v)&&m({inst:v})},[p,f,l]),o(function(){return d(v)&&m({inst:v}),p(function(){d(v)&&m({inst:v})})},[p]),a(f),f}function d(p){var l=p.getSnapshot;p=p.value;try{var f=l();return!n(p,f)}catch{return!0}}function c(p,l){return l()}var u=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?c:s;return Dn.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:u,Dn}(function(e){e.exports=As()})(xi);var bo={exports:{}},Kn={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wo;function Os(){if(wo)return Kn;wo=1;var e=yo,t=xi.exports;function n(c,u){return c===u&&(c!==0||1/c===1/u)||c!==c&&u!==u}var r=typeof Object.is=="function"?Object.is:n,o=t.useSyncExternalStore,i=e.useRef,a=e.useEffect,s=e.useMemo,d=e.useDebugValue;return Kn.useSyncExternalStoreWithSelector=function(c,u,p,l,f){var h=i(null);if(h.current===null){var v={hasValue:!1,value:null};h.current=v}else v=h.current;h=s(function(){function _(P){if(!y){if(y=!0,w=P,P=l(P),f!==void 0&&v.hasValue){var M=v.value;if(f(M,P))return O=M}return O=P}if(M=O,r(w,P))return M;var L=l(P);return f!==void 0&&f(M,L)?M:(w=P,O=L)}var y=!1,w,O,b=p===void 0?null:p;return[function(){return _(u())},b===null?void 0:function(){return _(b())}]},[u,p,l,f]);var m=o(c,h[0],h[1]);return a(function(){v.hasValue=!0,v.value=m},[m]),d(m),m},Kn}(function(e){e.exports=Os()})(bo);function xs(e){e()}let So=xs;const Ps=e=>So=e,Is=()=>So,Ke=an(null);function Eo(){return Te(Ke)}let Ao=()=>{throw new Error("uSES not initialized!")};const Cs=e=>{Ao=e},ks=(e,t)=>e===t;function Ts(e=Ke){const t=e===Ke?Eo:()=>Te(e);return function(r,o=ks){const{store:i,subscription:a,getServerState:s}=t(),d=Ao(a.addNestedSub,i.getState,s||i.getState,r,o);return Vn(d),d}}const $s=Ts();var Oo={exports:{}},K={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xo;function Ns(){if(xo)return K;xo=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,r=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,d=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,u=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,l=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,h=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,m=e?Symbol.for("react.fundamental"):60117,_=e?Symbol.for("react.responder"):60118,y=e?Symbol.for("react.scope"):60119;function w(b){if(typeof b=="object"&&b!==null){var P=b.$$typeof;switch(P){case t:switch(b=b.type,b){case d:case c:case r:case i:case o:case p:return b;default:switch(b=b&&b.$$typeof,b){case s:case u:case h:case f:case a:return b;default:return P}}case n:return P}}}function O(b){return w(b)===c}return K.AsyncMode=d,K.ConcurrentMode=c,K.ContextConsumer=s,K.ContextProvider=a,K.Element=t,K.ForwardRef=u,K.Fragment=r,K.Lazy=h,K.Memo=f,K.Portal=n,K.Profiler=i,K.StrictMode=o,K.Suspense=p,K.isAsyncMode=function(b){return O(b)||w(b)===d},K.isConcurrentMode=O,K.isContextConsumer=function(b){return w(b)===s},K.isContextProvider=function(b){return w(b)===a},K.isElement=function(b){return typeof b=="object"&&b!==null&&b.$$typeof===t},K.isForwardRef=function(b){return w(b)===u},K.isFragment=function(b){return w(b)===r},K.isLazy=function(b){return w(b)===h},K.isMemo=function(b){return w(b)===f},K.isPortal=function(b){return w(b)===n},K.isProfiler=function(b){return w(b)===i},K.isStrictMode=function(b){return w(b)===o},K.isSuspense=function(b){return w(b)===p},K.isValidElementType=function(b){return typeof b=="string"||typeof b=="function"||b===r||b===c||b===i||b===o||b===p||b===l||typeof b=="object"&&b!==null&&(b.$$typeof===h||b.$$typeof===f||b.$$typeof===a||b.$$typeof===s||b.$$typeof===u||b.$$typeof===m||b.$$typeof===_||b.$$typeof===y||b.$$typeof===v)},K.typeOf=w,K}(function(e){e.exports=Ns()})(Oo);var Yn=Oo.exports,Rs={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},js={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ms={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Po={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xn={};Xn[Yn.ForwardRef]=Ms,Xn[Yn.Memo]=Po;function Io(e){return Yn.isMemo(e)?Po:Xn[e.$$typeof]||Rs}var Ds=Object.defineProperty,Ls=Object.getOwnPropertyNames,Co=Object.getOwnPropertySymbols,qs=Object.getOwnPropertyDescriptor,Bs=Object.getPrototypeOf,ko=Object.prototype;function To(e,t,n){if(typeof t!="string"){if(ko){var r=Bs(t);r&&r!==ko&&To(e,r,n)}var o=Ls(t);Co&&(o=o.concat(Co(t)));for(var i=Io(e),a=Io(t),s=0;s<o.length;++s){var d=o[s];if(!js[d]&&!(n&&n[d])&&!(a&&a[d])&&!(i&&i[d])){var c=qs(t,d);try{Ds(e,d,c)}catch{}}}}return e}var Vs=To,Jn={exports:{}},Y={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o;function Us(){if($o)return Y;$o=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),s=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),l=Symbol.for("react.lazy"),f=Symbol.for("react.offscreen"),h;h=Symbol.for("react.module.reference");function v(m){if(typeof m=="object"&&m!==null){var _=m.$$typeof;switch(_){case e:switch(m=m.type,m){case n:case o:case r:case c:case u:return m;default:switch(m=m&&m.$$typeof,m){case s:case a:case d:case l:case p:case i:return m;default:return _}}case t:return _}}}return Y.ContextConsumer=a,Y.ContextProvider=i,Y.Element=e,Y.ForwardRef=d,Y.Fragment=n,Y.Lazy=l,Y.Memo=p,Y.Portal=t,Y.Profiler=o,Y.StrictMode=r,Y.Suspense=c,Y.SuspenseList=u,Y.isAsyncMode=function(){return!1},Y.isConcurrentMode=function(){return!1},Y.isContextConsumer=function(m){return v(m)===a},Y.isContextProvider=function(m){return v(m)===i},Y.isElement=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===e},Y.isForwardRef=function(m){return v(m)===d},Y.isFragment=function(m){return v(m)===n},Y.isLazy=function(m){return v(m)===l},Y.isMemo=function(m){return v(m)===p},Y.isPortal=function(m){return v(m)===t},Y.isProfiler=function(m){return v(m)===o},Y.isStrictMode=function(m){return v(m)===r},Y.isSuspense=function(m){return v(m)===c},Y.isSuspenseList=function(m){return v(m)===u},Y.isValidElementType=function(m){return typeof m=="string"||typeof m=="function"||m===n||m===o||m===r||m===c||m===u||m===f||typeof m=="object"&&m!==null&&(m.$$typeof===l||m.$$typeof===p||m.$$typeof===i||m.$$typeof===a||m.$$typeof===d||m.$$typeof===h||m.getModuleId!==void 0)},Y.typeOf=v,Y}(function(e){e.exports=Us()})(Jn);function zs(){const e=Is();let t=null,n=null;return{clear(){t=null,n=null},notify(){e(()=>{let r=t;for(;r;)r.callback(),r=r.next})},get(){let r=[],o=t;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0,i=n={callback:r,next:null,prev:n};return i.prev?i.prev.next=i:t=i,function(){!o||t===null||(o=!1,i.next?i.next.prev=i.prev:n=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const No={notify(){},get:()=>[]};function Fs(e,t){let n,r=No;function o(p){return d(),r.subscribe(p)}function i(){r.notify()}function a(){u.onStateChange&&u.onStateChange()}function s(){return Boolean(n)}function d(){n||(n=t?t.addNestedSub(a):e.subscribe(a),r=zs())}function c(){n&&(n(),n=void 0,r.clear(),r=No)}const u={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:d,tryUnsubscribe:c,getListeners:()=>r};return u}const Ws=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?it:Ie;function Hs({store:e,context:t,children:n,serverState:r}){const o=Ge(()=>{const s=Fs(e);return{store:e,subscription:s,getServerState:r?()=>r:void 0}},[e,r]),i=Ge(()=>e.getState(),[e]);Ws(()=>{const{subscription:s}=o;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),i!==e.getState()&&s.notifyNestedSubs(),()=>{s.tryUnsubscribe(),s.onStateChange=void 0}},[o,i]);const a=t||Ke;return qe.createElement(a.Provider,{value:o},n)}function Ro(e=Ke){const t=e===Ke?Eo:()=>Te(e);return function(){const{store:r}=t();return r}}const Qs=Ro();function Gs(e=Ke){const t=e===Ke?Qs:Ro(e);return function(){return t().dispatch}}const Ks=Gs();Cs(bo.exports.useSyncExternalStoreWithSelector),Ps(Qn);var Ys=function(t,n,r,o){var i=r?r.call(o,t,n):void 0;if(i!==void 0)return!!i;if(t===n)return!0;if(typeof t!="object"||!t||typeof n!="object"||!n)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(var d=Object.prototype.hasOwnProperty.bind(n),c=0;c<a.length;c++){var u=a[c];if(!d(u))return!1;var p=t[u],l=n[u];if(i=r?r.call(o,p,l,u):void 0,i===!1||i===void 0&&p!==l)return!1}return!0};function Xs(e){function t(I,j,D,B,S){for(var Q=0,$=0,oe=0,X=0,ee,H,le=0,be=0,G,me=G=ee=0,J=0,fe=0,en=0,de=0,Nn=D.length,tn=Nn-1,ke,z="",ue="",ni="",ri="",nt;J<Nn;){if(H=D.charCodeAt(J),J===tn&&$+X+oe+Q!==0&&($!==0&&(H=$===47?10:47),X=oe=Q=0,Nn++,tn++),$+X+oe+Q===0){if(J===tn&&(0<fe&&(z=z.replace(l,"")),0<z.trim().length)){switch(H){case 32:case 9:case 59:case 13:case 10:break;default:z+=D.charAt(J)}H=59}switch(H){case 123:for(z=z.trim(),ee=z.charCodeAt(0),G=1,de=++J;J<Nn;){switch(H=D.charCodeAt(J)){case 123:G++;break;case 125:G--;break;case 47:switch(H=D.charCodeAt(J+1)){case 42:case 47:e:{for(me=J+1;me<tn;++me)switch(D.charCodeAt(me)){case 47:if(H===42&&D.charCodeAt(me-1)===42&&J+2!==me){J=me+1;break e}break;case 10:if(H===47){J=me+1;break e}}J=me}}break;case 91:H++;case 40:H++;case 34:case 39:for(;J++<tn&&D.charCodeAt(J)!==H;);}if(G===0)break;J++}switch(G=D.substring(de,J),ee===0&&(ee=(z=z.replace(p,"").trim()).charCodeAt(0)),ee){case 64:switch(0<fe&&(z=z.replace(l,"")),H=z.charCodeAt(1),H){case 100:case 109:case 115:case 45:fe=j;break;default:fe=T}if(G=t(j,fe,G,H,S+1),de=G.length,0<k&&(fe=n(T,z,en),nt=s(3,G,fe,j,E,ie,de,H,S,B),z=fe.join(""),nt!==void 0&&(de=(G=nt.trim()).length)===0&&(H=0,G="")),0<de)switch(H){case 115:z=z.replace(P,a);case 100:case 109:case 45:G=z+"{"+G+"}";break;case 107:z=z.replace(y,"$1 $2"),G=z+"{"+G+"}",G=x===1||x===2&&i("@"+G,3)?"@-webkit-"+G+"@"+G:"@"+G;break;default:G=z+G,B===112&&(G=(ue+=G,""))}else G="";break;default:G=t(j,n(j,z,en),G,B,S+1)}ni+=G,G=en=fe=me=ee=0,z="",H=D.charCodeAt(++J);break;case 125:case 59:if(z=(0<fe?z.replace(l,""):z).trim(),1<(de=z.length))switch(me===0&&(ee=z.charCodeAt(0),ee===45||96<ee&&123>ee)&&(de=(z=z.replace(" ",":")).length),0<k&&(nt=s(1,z,j,I,E,ie,ue.length,B,S,B))!==void 0&&(de=(z=nt.trim()).length)===0&&(z="\0\0"),ee=z.charCodeAt(0),H=z.charCodeAt(1),ee){case 0:break;case 64:if(H===105||H===99){ri+=z+D.charAt(J);break}default:z.charCodeAt(de-1)!==58&&(ue+=o(z,ee,H,z.charCodeAt(2)))}en=fe=me=ee=0,z="",H=D.charCodeAt(++J)}}switch(H){case 13:case 10:$===47?$=0:1+ee===0&&B!==107&&0<z.length&&(fe=1,z+="\0"),0<k*Z&&s(0,z,j,I,E,ie,ue.length,B,S,B),ie=1,E++;break;case 59:case 125:if($+X+oe+Q===0){ie++;break}default:switch(ie++,ke=D.charAt(J),H){case 9:case 32:if(X+Q+$===0)switch(le){case 44:case 58:case 9:case 32:ke="";break;default:H!==32&&(ke=" ")}break;case 0:ke="\\0";break;case 12:ke="\\f";break;case 11:ke="\\v";break;case 38:X+$+Q===0&&(fe=en=1,ke="\f"+ke);break;case 108:if(X+$+Q+A===0&&0<me)switch(J-me){case 2:le===112&&D.charCodeAt(J-3)===58&&(A=le);case 8:be===111&&(A=be)}break;case 58:X+$+Q===0&&(me=J);break;case 44:$+oe+X+Q===0&&(fe=1,ke+="\r");break;case 34:case 39:$===0&&(X=X===H?0:X===0?H:X);break;case 91:X+$+oe===0&&Q++;break;case 93:X+$+oe===0&&Q--;break;case 41:X+$+Q===0&&oe--;break;case 40:if(X+$+Q===0){if(ee===0)switch(2*le+3*be){case 533:break;default:ee=1}oe++}break;case 64:$+oe+X+Q+me+G===0&&(G=1);break;case 42:case 47:if(!(0<X+Q+oe))switch($){case 0:switch(2*H+3*D.charCodeAt(J+1)){case 235:$=47;break;case 220:de=J,$=42}break;case 42:H===47&&le===42&&de+2!==J&&(D.charCodeAt(de+2)===33&&(ue+=D.substring(de,J+1)),ke="",$=0)}}$===0&&(z+=ke)}be=le,le=H,J++}if(de=ue.length,0<de){if(fe=j,0<k&&(nt=s(2,ue,fe,I,E,ie,de,B,S,B),nt!==void 0&&(ue=nt).length===0))return ri+ue+ni;if(ue=fe.join(",")+"{"+ue+"}",x*A!==0){switch(x!==2||i(ue,2)||(A=0),A){case 111:ue=ue.replace(O,":-moz-$1")+ue;break;case 112:ue=ue.replace(w,"::-webkit-input-$1")+ue.replace(w,"::-moz-$1")+ue.replace(w,":-ms-input-$1")+ue}A=0}}return ri+ue+ni}function n(I,j,D){var B=j.trim().split(m);j=B;var S=B.length,Q=I.length;switch(Q){case 0:case 1:var $=0;for(I=Q===0?"":I[0]+" ";$<S;++$)j[$]=r(I,j[$],D).trim();break;default:var oe=$=0;for(j=[];$<S;++$)for(var X=0;X<Q;++X)j[oe++]=r(I[X]+" ",B[$],D).trim()}return j}function r(I,j,D){var B=j.charCodeAt(0);switch(33>B&&(B=(j=j.trim()).charCodeAt(0)),B){case 38:return j.replace(_,"$1"+I.trim());case 58:return I.trim()+j.replace(_,"$1"+I.trim());default:if(0<1*D&&0<j.indexOf("\f"))return j.replace(_,(I.charCodeAt(0)===58?"":"$1")+I.trim())}return I+j}function o(I,j,D,B){var S=I+";",Q=2*j+3*D+4*B;if(Q===944){I=S.indexOf(":",9)+1;var $=S.substring(I,S.length-1).trim();return $=S.substring(0,I).trim()+$+";",x===1||x===2&&i($,1)?"-webkit-"+$+$:$}if(x===0||x===2&&!i(S,1))return S;switch(Q){case 1015:return S.charCodeAt(10)===97?"-webkit-"+S+S:S;case 951:return S.charCodeAt(3)===116?"-webkit-"+S+S:S;case 963:return S.charCodeAt(5)===110?"-webkit-"+S+S:S;case 1009:if(S.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+S+S;case 978:return"-webkit-"+S+"-moz-"+S+S;case 1019:case 983:return"-webkit-"+S+"-moz-"+S+"-ms-"+S+S;case 883:if(S.charCodeAt(8)===45)return"-webkit-"+S+S;if(0<S.indexOf("image-set(",11))return S.replace(re,"$1-webkit-$2")+S;break;case 932:if(S.charCodeAt(4)===45)switch(S.charCodeAt(5)){case 103:return"-webkit-box-"+S.replace("-grow","")+"-webkit-"+S+"-ms-"+S.replace("grow","positive")+S;case 115:return"-webkit-"+S+"-ms-"+S.replace("shrink","negative")+S;case 98:return"-webkit-"+S+"-ms-"+S.replace("basis","preferred-size")+S}return"-webkit-"+S+"-ms-"+S+S;case 964:return"-webkit-"+S+"-ms-flex-"+S+S;case 1023:if(S.charCodeAt(8)!==99)break;return $=S.substring(S.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+S+"-ms-flex-pack"+$+S;case 1005:return h.test(S)?S.replace(f,":-webkit-")+S.replace(f,":-moz-")+S:S;case 1e3:switch($=S.substring(13).trim(),j=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(j)){case 226:$=S.replace(b,"tb");break;case 232:$=S.replace(b,"tb-rl");break;case 220:$=S.replace(b,"lr");break;default:return S}return"-webkit-"+S+"-ms-"+$+S;case 1017:if(S.indexOf("sticky",9)===-1)break;case 975:switch(j=(S=I).length-10,$=(S.charCodeAt(j)===33?S.substring(0,j):S).substring(I.indexOf(":",7)+1).trim(),Q=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:S=S.replace($,"-webkit-"+$)+";"+S;break;case 207:case 102:S=S.replace($,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+S.replace($,"-webkit-"+$)+";"+S.replace($,"-ms-"+$+"box")+";"+S}return S+";";case 938:if(S.charCodeAt(5)===45)switch(S.charCodeAt(6)){case 105:return $=S.replace("-items",""),"-webkit-"+S+"-webkit-box-"+$+"-ms-flex-"+$+S;case 115:return"-webkit-"+S+"-ms-flex-item-"+S.replace(L,"")+S;default:return"-webkit-"+S+"-ms-flex-line-pack"+S.replace("align-content","").replace(L,"")+S}break;case 973:case 989:if(S.charCodeAt(3)!==45||S.charCodeAt(4)===122)break;case 931:case 953:if(V.test(I)===!0)return($=I.substring(I.indexOf(":")+1)).charCodeAt(0)===115?o(I.replace("stretch","fill-available"),j,D,B).replace(":fill-available",":stretch"):S.replace($,"-webkit-"+$)+S.replace($,"-moz-"+$.replace("fill-",""))+S;break;case 962:if(S="-webkit-"+S+(S.charCodeAt(5)===102?"-ms-"+S:"")+S,D+B===211&&S.charCodeAt(13)===105&&0<S.indexOf("transform",10))return S.substring(0,S.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+S}return S}function i(I,j){var D=I.indexOf(j===1?":":"{"),B=I.substring(0,j!==3?D:10);return D=I.substring(D+1,I.length-1),U(j!==2?B:B.replace(W,"$1"),D,j)}function a(I,j){var D=o(j,j.charCodeAt(0),j.charCodeAt(1),j.charCodeAt(2));return D!==j+";"?D.replace(M," or ($1)").substring(4):"("+j+")"}function s(I,j,D,B,S,Q,$,oe,X,ee){for(var H=0,le=j,be;H<k;++H)switch(be=R[H].call(u,I,le,D,B,S,Q,$,oe,X,ee)){case void 0:case!1:case!0:case null:break;default:le=be}if(le!==j)return le}function d(I){switch(I){case void 0:case null:k=R.length=0;break;default:if(typeof I=="function")R[k++]=I;else if(typeof I=="object")for(var j=0,D=I.length;j<D;++j)d(I[j]);else Z=!!I|0}return d}function c(I){return I=I.prefix,I!==void 0&&(U=null,I?typeof I!="function"?x=1:(x=2,U=I):x=0),c}function u(I,j){var D=I;if(33>D.charCodeAt(0)&&(D=D.trim()),ye=D,D=[ye],0<k){var B=s(-1,j,D,D,E,ie,0,0,0,0);B!==void 0&&typeof B=="string"&&(j=B)}var S=t(T,D,j,0,0);return 0<k&&(B=s(-2,S,D,D,E,ie,S.length,0,0,0),B!==void 0&&(S=B)),ye="",A=0,ie=E=1,S}var p=/^\0+/g,l=/[\0\r\f]/g,f=/: */g,h=/zoo|gra/,v=/([,: ])(transform)/g,m=/,\r+?/g,_=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,w=/::(place)/g,O=/:(read-only)/g,b=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,M=/([\s\S]*?);/g,L=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,V=/stretch|:\s*\w+\-(?:conte|avail)/,re=/([^-])(image-set\()/,ie=1,E=1,A=0,x=1,T=[],R=[],k=0,U=null,Z=0,ye="";return u.use=d,u.set=c,e!==void 0&&c(e),u}var Js={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Zs(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ec=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,jo=Zs(function(e){return ec.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91});function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Mo=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Zn=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Jn.exports.typeOf(e)},ln=Object.freeze([]),Ye=Object.freeze({});function Rt(e){return typeof e=="function"}function Do(e){return e.displayName||e.name||"Component"}function er(e){return e&&typeof e.styledComponentId=="string"}var mt=typeof process<"u"&&({VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.REACT_APP_SC_ATTR||{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.SC_ATTR)||"data-styled",tr=typeof window<"u"&&"HTMLElement"in window,tc=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.REACT_APP_SC_DISABLE_SPEEDY!==""?{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.SC_DISABLE_SPEEDY!==void 0&&{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.SC_DISABLE_SPEEDY!==""?{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.SC_DISABLE_SPEEDY!=="false"&&{VITE_REDISPLAY_TIMESPAN:"172800000",VITE_MAX_APP_SKIP:"4",VITE_ALTERNATING_SESSIONS:"1",VITE_SKIP_BATCH:"true",VITE_API_URL:"https://lite-backend.appconsent.io/",NODE_ENV:"production"}.SC_DISABLE_SPEEDY:!1),nc={};function jt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var rc=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;n>=a;)(a<<=1)<0&&jt(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var d=this.indexOfGroup(n+1),c=0,u=r.length;c<u;c++)this.tag.insertRule(d,r[c])&&(this.groupSizes[n]++,d++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),a=i+o,s=i;s<a;s++)r+=this.tag.getRule(s)+`/*!sc*/
`;return r},e}(),fn=new Map,dn=new Map,Mt=1,pn=function(e){if(fn.has(e))return fn.get(e);for(;dn.has(Mt);)Mt++;var t=Mt++;return fn.set(e,t),dn.set(t,e),t},ic=function(e){return dn.get(e)},oc=function(e,t){t>=Mt&&(Mt=t+1),fn.set(e,t),dn.set(t,e)},ac="style["+mt+'][data-styled-version="5.3.6"]',uc=new RegExp("^"+mt+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),sc=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},cc=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var a=n[o].trim();if(a){var s=a.match(uc);if(s){var d=0|parseInt(s[1],10),c=s[2];d!==0&&(oc(c,d),sc(e,c,s[3]),e.getTag().insertRules(d,r)),r.length=0}else r.push(a)}}},lc=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Lo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){for(var d=s.childNodes,c=d.length;c>=0;c--){var u=d[c];if(u&&u.nodeType===1&&u.hasAttribute(mt))return u}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(mt,"active"),r.setAttribute("data-styled-version","5.3.6");var a=lc();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},fc=function(){function e(n){var r=this.element=Lo(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var d=i[a];if(d.ownerNode===o)return d}jt(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),dc=function(){function e(n){var r=this.element=Lo(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),pc=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),qo=tr,hc={isServer:!tr,useCSSOMInjection:!tc},hn=function(){function e(n,r,o){n===void 0&&(n=Ye),r===void 0&&(r={}),this.options=$e({},hc,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&tr&&qo&&(qo=!1,function(i){for(var a=document.querySelectorAll(ac),s=0,d=a.length;s<d;s++){var c=a[s];c&&c.getAttribute(mt)!=="active"&&(cc(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return pn(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e($e({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,a=r.target,n=o?new pc(a):i?new fc(a):new dc(a),new rc(n)));var n,r,o,i,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(pn(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(pn(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(pn(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",a=0;a<o;a++){var s=ic(a);if(s!==void 0){var d=n.names.get(s),c=r.getGroup(a);if(d&&c&&d.size){var u=mt+".g"+a+'[id="'+s+'"]',p="";d!==void 0&&d.forEach(function(l){l.length>0&&(p+=l+",")}),i+=""+c+u+'{content:"'+p+`"}/*!sc*/
`}}}return i}(this)},e}(),vc=/(a)(d)/gi,Bo=function(e){return String.fromCharCode(e+(e>25?39:97))};function nr(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Bo(t%52)+n;return(Bo(t%52)+n).replace(vc,"$1-$2")}var _t=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Vo=function(e){return _t(5381,e)};function Uo(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Rt(n)&&!er(n))return!1}return!0}var mc=Vo("5.3.6"),_c=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Uo(t),this.componentId=n,this.baseHash=_t(mc,n),this.baseStyle=r,hn.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=ot(this.rules,t,n,r).join(""),s=nr(_t(this.baseHash,a)>>>0);if(!n.hasNameForId(o,s)){var d=r(a,"."+s,void 0,o);n.insertRules(o,s,d)}i.push(s),this.staticRulesId=s}else{for(var c=this.rules.length,u=_t(this.baseHash,r.hash),p="",l=0;l<c;l++){var f=this.rules[l];if(typeof f=="string")p+=f;else if(f){var h=ot(f,t,n,r),v=Array.isArray(h)?h.join(""):h;u=_t(u,v+l),p+=v}}if(p){var m=nr(u>>>0);if(!n.hasNameForId(o,m)){var _=r(p,"."+m,void 0,o);n.insertRules(o,m,_)}i.push(m)}}return i.join(" ")},e}(),yc=/^\s*\/\/.*$/gm,gc=[":","[",".","#"];function zo(e){var t,n,r,o,i=e===void 0?Ye:e,a=i.options,s=a===void 0?Ye:a,d=i.plugins,c=d===void 0?ln:d,u=new Xs(s),p=[],l=function(v){function m(_){if(_)try{v(_+"}")}catch{}}return function(_,y,w,O,b,P,M,L,W,V){switch(_){case 1:if(W===0&&y.charCodeAt(0)===64)return v(y+";"),"";break;case 2:if(L===0)return y+"/*|*/";break;case 3:switch(L){case 102:case 112:return v(w[0]+y),"";default:return y+(V===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(m)}}}(function(v){p.push(v)}),f=function(v,m,_){return m===0&&gc.indexOf(_[n.length])!==-1||_.match(o)?v:"."+t};function h(v,m,_,y){y===void 0&&(y="&");var w=v.replace(yc,""),O=m&&_?_+" "+m+" { "+w+" }":w;return t=y,n=m,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),u(_||!m?"":m,O)}return u.use([].concat(c,[function(v,m,_){v===2&&_.length&&_[0].lastIndexOf(n)>0&&(_[0]=_[0].replace(r,f))},l,function(v){if(v===-2){var m=p;return p=[],m}}])),h.hash=c.length?c.reduce(function(v,m){return m.name||jt(15),_t(v,m.name)},5381).toString():"",h}var rr=qe.createContext();rr.Consumer;var ir=qe.createContext(),bc=(ir.Consumer,new hn),or=zo();function ar(){return Te(rr)||bc}function Fo(){return Te(ir)||or}function wc(e){var t=Pe(e.stylisPlugins),n=t[0],r=t[1],o=ar(),i=Ge(function(){var s=o;return e.sheet?s=e.sheet:e.target&&(s=s.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(s=s.reconstructWithOptions({useCSSOMInjection:!1})),s},[e.disableCSSOMInjection,e.sheet,e.target]),a=Ge(function(){return zo({options:{prefix:!e.disableVendorPrefixes},plugins:n})},[e.disableVendorPrefixes,n]);return Ie(function(){Ys(n,e.stylisPlugins)||r(e.stylisPlugins)},[e.stylisPlugins]),qe.createElement(rr.Provider,{value:i},qe.createElement(ir.Provider,{value:a},e.children))}var Sc=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=or);var a=r.name+i.hash;o.hasNameForId(r.id,a)||o.insertRules(r.id,a,i(r.rules,a,"@keyframes"))},this.toString=function(){return jt(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=or),this.name+t.hash},e}(),Ec=/([A-Z])/,Ac=/([A-Z])/g,Oc=/^ms-/,xc=function(e){return"-"+e.toLowerCase()};function Wo(e){return Ec.test(e)?e.replace(Ac,xc).replace(Oc,"-ms-"):e}var Ho=function(e){return e==null||e===!1||e===""};function ot(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=ot(e[a],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Ho(e))return"";if(er(e))return"."+e.styledComponentId;if(Rt(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var d=e(t);return ot(d,t,n,r)}var c;return e instanceof Sc?n?(e.inject(n,r),e.getName(r)):e:Zn(e)?function u(p,l){var f,h,v=[];for(var m in p)p.hasOwnProperty(m)&&!Ho(p[m])&&(Array.isArray(p[m])&&p[m].isCss||Rt(p[m])?v.push(Wo(m)+":",p[m],";"):Zn(p[m])?v.push.apply(v,u(p[m],m)):v.push(Wo(m)+": "+(f=m,(h=p[m])==null||typeof h=="boolean"||h===""?"":typeof h!="number"||h===0||f in Js?String(h).trim():h+"px")+";"));return l?[l+" {"].concat(v,["}"]):v}(e):e.toString()}var Qo=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Go(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Rt(e)||Zn(e)?Qo(ot(Mo(ln,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Qo(ot(Mo(e,n)))}var Ko=function(e,t,n){return n===void 0&&(n=Ye),e.theme!==n.theme&&e.theme||t||n.theme},Pc=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ic=/(^-|-$)/g;function ur(e){return e.replace(Pc,"-").replace(Ic,"")}var Yo=function(e){return nr(Vo(e)>>>0)};function vn(e){return typeof e=="string"&&!0}var sr=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Cc=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function kc(e,t,n){var r=e[n];sr(t)&&sr(r)?Xo(r,t):e[n]=t}function Xo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var a=i[o];if(sr(a))for(var s in a)Cc(s)&&kc(e,a[s],s)}return e}var cr=qe.createContext();cr.Consumer;var lr={};function Jo(e,t,n){var r=er(e),o=!vn(e),i=t.attrs,a=i===void 0?ln:i,s=t.componentId,d=s===void 0?function(y,w){var O=typeof y!="string"?"sc":ur(y);lr[O]=(lr[O]||0)+1;var b=O+"-"+Yo("5.3.6"+O+lr[O]);return w?w+"-"+b:b}(t.displayName,t.parentComponentId):s,c=t.displayName,u=c===void 0?function(y){return vn(y)?"styled."+y:"Styled("+Do(y)+")"}(e):c,p=t.displayName&&t.componentId?ur(t.displayName)+"-"+t.componentId:t.componentId||d,l=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,f=t.shouldForwardProp;r&&e.shouldForwardProp&&(f=t.shouldForwardProp?function(y,w,O){return e.shouldForwardProp(y,w,O)&&t.shouldForwardProp(y,w,O)}:e.shouldForwardProp);var h,v=new _c(n,p,r?e.componentStyle:void 0),m=v.isStatic&&a.length===0,_=function(y,w){return function(O,b,P,M){var L=O.attrs,W=O.componentStyle,V=O.defaultProps,re=O.foldedComponentIds,ie=O.shouldForwardProp,E=O.styledComponentId,A=O.target,x=function(B,S,Q){B===void 0&&(B=Ye);var $=$e({},S,{theme:B}),oe={};return Q.forEach(function(X){var ee,H,le,be=X;for(ee in Rt(be)&&(be=be($)),be)$[ee]=oe[ee]=ee==="className"?(H=oe[ee],le=be[ee],H&&le?H+" "+le:H||le):be[ee]}),[$,oe]}(Ko(b,Te(cr),V)||Ye,b,L),T=x[0],R=x[1],k=function(B,S,Q,$){var oe=ar(),X=Fo(),ee=S?B.generateAndInjectStyles(Ye,oe,X):B.generateAndInjectStyles(Q,oe,X);return ee}(W,M,T),U=P,Z=R.$as||b.$as||R.as||b.as||A,ye=vn(Z),I=R!==b?$e({},b,{},R):b,j={};for(var D in I)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?j.as=I[D]:(ie?ie(D,jo,Z):!ye||jo(D))&&(j[D]=I[D]));return b.style&&R.style!==b.style&&(j.style=$e({},b.style,{},R.style)),j.className=Array.prototype.concat(re,E,k!==E?k:null,b.className,R.className).filter(Boolean).join(" "),j.ref=U,xe(Z,j)}(h,y,w,m)};return _.displayName=u,(h=qe.forwardRef(_)).attrs=l,h.componentStyle=v,h.displayName=u,h.shouldForwardProp=f,h.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):ln,h.styledComponentId=p,h.target=r?e.target:e,h.withComponent=function(y){var w=t.componentId,O=function(P,M){if(P==null)return{};var L,W,V={},re=Object.keys(P);for(W=0;W<re.length;W++)L=re[W],M.indexOf(L)>=0||(V[L]=P[L]);return V}(t,["componentId"]),b=w&&w+"-"+(vn(y)?y:ur(Do(y)));return Jo(y,$e({},O,{attrs:l,componentId:b}),n)},Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=r?Xo({},e.defaultProps,y):y}}),h.toString=function(){return"."+h.styledComponentId},o&&Vs(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),h}var fr=function(e){return function t(n,r,o){if(o===void 0&&(o=Ye),!Jn.exports.isValidElementType(r))return jt(1,String(r));var i=function(){return n(r,o,Go.apply(void 0,arguments))};return i.withConfig=function(a){return t(n,r,$e({},o,{},a))},i.attrs=function(a){return t(n,r,$e({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(Jo,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){fr[e]=fr(e)});var Tc=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Uo(n),hn.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,i){var a=i(ot(this.rules,r,o,i).join(""),""),s=this.componentId+n;o.insertRules(s,s,a)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,i){n>2&&hn.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,i)},e}();function Zo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Go.apply(void 0,[e].concat(n)),i="sc-global-"+Yo(JSON.stringify(o)),a=new Tc(o,i);function s(c){var u=ar(),p=Fo(),l=Te(cr),f=Bn(u.allocateGSInstance(i)).current;return u.server&&d(f,c,u,l,p),it(function(){if(!u.server)return d(f,c,u,l,p),function(){return a.removeStyles(f,u)}},[f,c,u,l,p]),null}function d(c,u,p,l,f){if(a.isStatic)a.renderStyles(c,nc,p,f);else{var h=$e({},u,{theme:Ko(u,l,s.defaultProps)});a.renderStyles(c,h,p,f)}}return qe.memo(s)}const N=fr,dp="",$c={"--poc-color-blue":"#3f4fdb","--poc-color-dark-blue":"#02244f","--poc-color-grey":"#C4C4C4"},Nc=N.button`
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  font-family: inherit;
  font-size: 0.85em;
  font-weight: 500;
  color: white;
  padding: 1em;
  border: none;
  background: #3f4fdb;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
  height: 1em;
  box-sizing: content-box;
  line-height: 1em;

  ${({disabled:e})=>e&&`
    cursor: default;
    background-color: #3f4fdb40;
  `}

  span {
    flex: 0 0 auto;
  }

  img {
    margin-left: 0.5em;
    /* height: 110%; */ // not working on safari iOS v13
    height: 1em;
  }
`;var Rc=0;function g(e,t,n,r,o){var i,a,s={};for(a in t)a=="ref"?i=t[a]:s[a]=t[a];var d={type:e,props:s,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Rc,__source:o,__self:r};if(typeof e=="function"&&(i=e.defaultProps))for(a in i)s[a]===void 0&&(s[a]=i[a]);return C.vnode&&C.vnode(d),d}function yt({icon:e,iconAlt:t,label:n,disabled:r=!1,className:o,...i}){return g(Nc,{className:o,disabled:r,...i,children:[g("span",{children:n}),e&&g("img",{src:e,alt:t})]})}function gt(){return`
    color: var(--poc-color-dark-blue);
    margin: 0;
    padding: 0;
    font-family: inherit;
  `}const jc=N.h1`
  ${gt};
  font-size: 2.2em;
  font-weight: 600;
  font-style: normal;
`,Mc=N.h2`
  ${gt};
  font-size: 1.8em;
  font-weight: 600;
  font-style: normal;
`,Dc=N.h3`
  ${gt};
  font-size: 1.5em;
  font-weight: 400;
  font-style: normal;
`,Lc=N.h4`
  ${gt};
  font-size: 1.3em;
  font-weight: 600;
  font-style: normal;
`,qc=N.h5`
  ${gt};
  font-size: 1em;
  font-weight: 600;
  font-style: normal;
`,Bc=N.h6`
  ${gt};
  font-size: 0.8em;
  font-weight: 600;
  font-style: normal;
`;function Xe({level:e,children:t,className:n}){return e===1?g(jc,{className:n,children:t}):e===2?g(Mc,{className:n,children:t}):e===3?g(Dc,{className:n,children:t}):e===4?g(Lc,{className:n,children:t}):e===5?g(qc,{className:n,children:t}):e===6?g(Bc,{className:n,children:t}):null}N.a`
  color: var(--poc-color-blue);
  font-family: inherit;
  font-size: 1em;
`;const ea=N.span`
  z-index: -1;
  font-family: inherit;
  padding: 0 1em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #d7d7d7;
  box-shadow: none;
  box-sizing: border-box;
  height: 100%;
  width: 100%;

  ${({checked:e})=>e&&`
    border: 1px solid #3f4fdb;
    box-shadow: 0 0 0 1px #3f4fdb;
  `}
`,Vc=N.input`
  opacity: 0;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  &:focus ~ ${ea} {
    background: #3f4fdb22;
  }
`,Uc=N.label`
  display: block;
  position: relative;
  font-family: inherit;
  font-weight: 500;
  height: 50px;
  width: 100%;
  user-select: none;

  &:hover {
    cursor: pointer;
  }
`;function zc({label:e,onClick:t,checked:n}){function r(o){o.stopPropagation(),t(!n)}return g(Uc,{children:[g(Vc,{type:"checkbox",onClick:r,checked:n}),g(ea,{checked:n,children:e})]})}const Fc=N.div`
  
  & label:nth-child(n){
    height: 72px;
  }
  & span:nth-child(n){
    font-family: 'Poppins';
    margin-left: 1px;
    @media (min-width: 768px) and (max-width: 1025px) {
      font-size: 0.9em;
    }
  }
`;function ta({node:e,onAnswer:t,selected:n}){if("nodes"in e)return g(pe,{children:e.nodes.map((o,i)=>g(ta,{node:o,onAnswer:t,selected:n},i))});const r=n.some(o=>o===e.uuid);return g(Fc,{children:g(zc,{label:e.value.fr,onClick:()=>t(e,r),checked:r})})}const Wc=N.p`
  color: var(--poc-color-dark-blue);
  font-family: inherit;
  font-size: 1em;
  font-weight: var(--font-weight);
  font-style: normal;
  line-height: 135%;
  margin: 0.5em 0;
`;function se({children:e,weight:t=400,family:n,className:r}){return g(Wc,{className:r,style:{"--font-weight":t,fontFamily:n+", sans-serif"},children:e})}const Hc=N.div`
  width: 100%;
`,Qc=N.span`
  font-family: inherit;
  color: #797979;
  font-size: 1em;
  font-weight: 500;
`,Gc=N.div`
  position: relative;
  background-color: var(--poc-color-grey);
  height: 8px;
  width: 100%;
  border-radius: 4px;
`,Kc=N.div`
  position: absolute;
  top: 0;
  left: 0;
  width: var(--local-progress-percetage);
  height: 100%;
  background-color: var(--poc-color-blue);
  border-radius: 4px;
  transition: width 0.1s;
`;function Yc({total:e,current:t}){const n=t>e?100:t/e*100;return g(Hc,{children:[g(Qc,{children:[t,"/",e]}),g(Gc,{children:g(Kc,{style:{"--local-progress-percetage":`${n}%`}})})]})}const Ne={fold:{min:null,max:"299.98px"},mobile:{min:"300px",max:"767.98px"},tablet:{min:"768px",max:"1023.98px"},desktop:{min:"1024px",max:"1215.98px"},widescreen:{min:"1216px",max:"1407.98px"},fullhd:{min:"1408px",max:null}},F={fold:`(max-width: ${Ne.fold.max})`,mobile:`(min-width: ${Ne.mobile.min}) and (max-width: ${Ne.mobile.max})`,tablet:`(min-width: ${Ne.tablet.min}) and (max-width: ${Ne.tablet.max})`,desktop:`(min-width: ${Ne.desktop.min}) and (max-width: ${Ne.desktop.max})`,widescreen:`(min-width: ${Ne.widescreen.min}) and (max-width: ${Ne.widescreen.max})`,fullhd:`(min-width: ${Ne.fullhd.min})`},Xc=N.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.1);
  overflow: auto;
  padding: 1em;
  box-sizing: border-box;
  z-index: 999999999;
`,Jc=N.main`
  display: block;
  margin: auto;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 14px;

  @media ${F.mobile} {
    @media (orientation: portrait) {
      width: 98%;
      height: 90%;
    }

    @media (orientation: landscape) {
      width: 27em;
      height: 40em;
    }
  }

  @media ${F.tablet} {
    width: 27em;
    height: 40em;
  }

  @media ${F.desktop} {
    width: 30em;
    height: 42em;
  }

  @media ${F.widescreen} {
    width: 32em;
    height: 45em;
  }

  @media ${F.fullhd} {
    width: 34em;
    height: 46em;
  }
`;function Zc({children:e,id:t,style:n}){return g(Xc,{id:t,style:n,children:g(Jc,{children:e})})}const el=N.button`
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  font-family: inherit;
  font-weight: var(--local-font-weight);
  font-size: 1em;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 0;
  cursor: pointer;
  transition: all 0.15s;
  height: auto;
  box-sizing: content-box;
  background-color: white;
  color: var(--poc-color-blue);

  &:disabled {
    cursor: default;
    color: var(--poc-color-grey);
  }

  img {
    margin-left: 0.5em;
    height: 110%;
  }

  ${({underline:e})=>e&&`
    span {
      text-decoration: underline;
    }  
  `}
`;function Je({icon:e,iconAlt:t,label:n,fontWeight:r=400,underline:o=!1,disabled:i=!1,...a}){return g(el,{disabled:i,underline:o,...a,style:{"--local-font-weight":r},children:[g("span",{children:n}),e&&g("img",{src:e,alt:t})]})}const Ze=()=>Ks(),bt=$s;var q={},et={exports:{}};(function(e){var t,n,r,o,i,a,s,d,c,u,p,l,f,h,v,m,_,y,w,O,b,P,M,L,W;(function(V){var re=typeof pt=="object"?pt:typeof self=="object"?self:typeof this=="object"?this:{};V(ie(re,ie(e.exports)));function ie(E,A){return E!==re&&(typeof Object.create=="function"?Object.defineProperty(E,"__esModule",{value:!0}):E.__esModule=!0),function(x,T){return E[x]=A?A(x,T):T}}})(function(V){var re=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(E,A){E.__proto__=A}||function(E,A){for(var x in A)Object.prototype.hasOwnProperty.call(A,x)&&(E[x]=A[x])};t=function(E,A){if(typeof A!="function"&&A!==null)throw new TypeError("Class extends value "+String(A)+" is not a constructor or null");re(E,A);function x(){this.constructor=E}E.prototype=A===null?Object.create(A):(x.prototype=A.prototype,new x)},n=Object.assign||function(E){for(var A,x=1,T=arguments.length;x<T;x++){A=arguments[x];for(var R in A)Object.prototype.hasOwnProperty.call(A,R)&&(E[R]=A[R])}return E},r=function(E,A){var x={};for(var T in E)Object.prototype.hasOwnProperty.call(E,T)&&A.indexOf(T)<0&&(x[T]=E[T]);if(E!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,T=Object.getOwnPropertySymbols(E);R<T.length;R++)A.indexOf(T[R])<0&&Object.prototype.propertyIsEnumerable.call(E,T[R])&&(x[T[R]]=E[T[R]]);return x},o=function(E,A,x,T){var R=arguments.length,k=R<3?A:T===null?T=Object.getOwnPropertyDescriptor(A,x):T,U;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")k=Reflect.decorate(E,A,x,T);else for(var Z=E.length-1;Z>=0;Z--)(U=E[Z])&&(k=(R<3?U(k):R>3?U(A,x,k):U(A,x))||k);return R>3&&k&&Object.defineProperty(A,x,k),k},i=function(E,A){return function(x,T){A(x,T,E)}},a=function(E,A){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(E,A)},s=function(E,A,x,T){function R(k){return k instanceof x?k:new x(function(U){U(k)})}return new(x||(x=Promise))(function(k,U){function Z(j){try{I(T.next(j))}catch(D){U(D)}}function ye(j){try{I(T.throw(j))}catch(D){U(D)}}function I(j){j.done?k(j.value):R(j.value).then(Z,ye)}I((T=T.apply(E,A||[])).next())})},d=function(E,A){var x={label:0,sent:function(){if(k[0]&1)throw k[1];return k[1]},trys:[],ops:[]},T,R,k,U;return U={next:Z(0),throw:Z(1),return:Z(2)},typeof Symbol=="function"&&(U[Symbol.iterator]=function(){return this}),U;function Z(I){return function(j){return ye([I,j])}}function ye(I){if(T)throw new TypeError("Generator is already executing.");for(;U&&(U=0,I[0]&&(x=0)),x;)try{if(T=1,R&&(k=I[0]&2?R.return:I[0]?R.throw||((k=R.return)&&k.call(R),0):R.next)&&!(k=k.call(R,I[1])).done)return k;switch(R=0,k&&(I=[I[0]&2,k.value]),I[0]){case 0:case 1:k=I;break;case 4:return x.label++,{value:I[1],done:!1};case 5:x.label++,R=I[1],I=[0];continue;case 7:I=x.ops.pop(),x.trys.pop();continue;default:if(k=x.trys,!(k=k.length>0&&k[k.length-1])&&(I[0]===6||I[0]===2)){x=0;continue}if(I[0]===3&&(!k||I[1]>k[0]&&I[1]<k[3])){x.label=I[1];break}if(I[0]===6&&x.label<k[1]){x.label=k[1],k=I;break}if(k&&x.label<k[2]){x.label=k[2],x.ops.push(I);break}k[2]&&x.ops.pop(),x.trys.pop();continue}I=A.call(E,x)}catch(j){I=[6,j],R=0}finally{T=k=0}if(I[0]&5)throw I[1];return{value:I[0]?I[1]:void 0,done:!0}}},c=function(E,A){for(var x in E)x!=="default"&&!Object.prototype.hasOwnProperty.call(A,x)&&W(A,E,x)},W=Object.create?function(E,A,x,T){T===void 0&&(T=x);var R=Object.getOwnPropertyDescriptor(A,x);(!R||("get"in R?!A.__esModule:R.writable||R.configurable))&&(R={enumerable:!0,get:function(){return A[x]}}),Object.defineProperty(E,T,R)}:function(E,A,x,T){T===void 0&&(T=x),E[T]=A[x]},u=function(E){var A=typeof Symbol=="function"&&Symbol.iterator,x=A&&E[A],T=0;if(x)return x.call(E);if(E&&typeof E.length=="number")return{next:function(){return E&&T>=E.length&&(E=void 0),{value:E&&E[T++],done:!E}}};throw new TypeError(A?"Object is not iterable.":"Symbol.iterator is not defined.")},p=function(E,A){var x=typeof Symbol=="function"&&E[Symbol.iterator];if(!x)return E;var T=x.call(E),R,k=[],U;try{for(;(A===void 0||A-- >0)&&!(R=T.next()).done;)k.push(R.value)}catch(Z){U={error:Z}}finally{try{R&&!R.done&&(x=T.return)&&x.call(T)}finally{if(U)throw U.error}}return k},l=function(){for(var E=[],A=0;A<arguments.length;A++)E=E.concat(p(arguments[A]));return E},f=function(){for(var E=0,A=0,x=arguments.length;A<x;A++)E+=arguments[A].length;for(var T=Array(E),R=0,A=0;A<x;A++)for(var k=arguments[A],U=0,Z=k.length;U<Z;U++,R++)T[R]=k[U];return T},h=function(E,A,x){if(x||arguments.length===2)for(var T=0,R=A.length,k;T<R;T++)(k||!(T in A))&&(k||(k=Array.prototype.slice.call(A,0,T)),k[T]=A[T]);return E.concat(k||Array.prototype.slice.call(A))},v=function(E){return this instanceof v?(this.v=E,this):new v(E)},m=function(E,A,x){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var T=x.apply(E,A||[]),R,k=[];return R={},U("next"),U("throw"),U("return"),R[Symbol.asyncIterator]=function(){return this},R;function U(B){T[B]&&(R[B]=function(S){return new Promise(function(Q,$){k.push([B,S,Q,$])>1||Z(B,S)})})}function Z(B,S){try{ye(T[B](S))}catch(Q){D(k[0][3],Q)}}function ye(B){B.value instanceof v?Promise.resolve(B.value.v).then(I,j):D(k[0][2],B)}function I(B){Z("next",B)}function j(B){Z("throw",B)}function D(B,S){B(S),k.shift(),k.length&&Z(k[0][0],k[0][1])}},_=function(E){var A,x;return A={},T("next"),T("throw",function(R){throw R}),T("return"),A[Symbol.iterator]=function(){return this},A;function T(R,k){A[R]=E[R]?function(U){return(x=!x)?{value:v(E[R](U)),done:R==="return"}:k?k(U):U}:k}},y=function(E){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var A=E[Symbol.asyncIterator],x;return A?A.call(E):(E=typeof u=="function"?u(E):E[Symbol.iterator](),x={},T("next"),T("throw"),T("return"),x[Symbol.asyncIterator]=function(){return this},x);function T(k){x[k]=E[k]&&function(U){return new Promise(function(Z,ye){U=E[k](U),R(Z,ye,U.done,U.value)})}}function R(k,U,Z,ye){Promise.resolve(ye).then(function(I){k({value:I,done:Z})},U)}},w=function(E,A){return Object.defineProperty?Object.defineProperty(E,"raw",{value:A}):E.raw=A,E};var ie=Object.create?function(E,A){Object.defineProperty(E,"default",{enumerable:!0,value:A})}:function(E,A){E.default=A};O=function(E){if(E&&E.__esModule)return E;var A={};if(E!=null)for(var x in E)x!=="default"&&Object.prototype.hasOwnProperty.call(E,x)&&W(A,E,x);return ie(A,E),A},b=function(E){return E&&E.__esModule?E:{default:E}},P=function(E,A,x,T){if(x==="a"&&!T)throw new TypeError("Private accessor was defined without a getter");if(typeof A=="function"?E!==A||!T:!A.has(E))throw new TypeError("Cannot read private member from an object whose class did not declare it");return x==="m"?T:x==="a"?T.call(E):T?T.value:A.get(E)},M=function(E,A,x,T,R){if(T==="m")throw new TypeError("Private method is not writable");if(T==="a"&&!R)throw new TypeError("Private accessor was defined without a setter");if(typeof A=="function"?E!==A||!R:!A.has(E))throw new TypeError("Cannot write private member to an object whose class did not declare it");return T==="a"?R.call(E,x):R?R.value=x:A.set(E,x),x},L=function(E,A){if(A===null||typeof A!="object"&&typeof A!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof E=="function"?A===E:E.has(A)},V("__extends",t),V("__assign",n),V("__rest",r),V("__decorate",o),V("__param",i),V("__metadata",a),V("__awaiter",s),V("__generator",d),V("__exportStar",c),V("__createBinding",W),V("__values",u),V("__read",p),V("__spread",l),V("__spreadArrays",f),V("__spreadArray",h),V("__await",v),V("__asyncGenerator",m),V("__asyncDelegator",_),V("__asyncValues",y),V("__makeTemplateObject",w),V("__importStar",O),V("__importDefault",b),V("__classPrivateFieldGet",P),V("__classPrivateFieldSet",M),V("__classPrivateFieldIn",L)})})(et);var dr={},Dt={};function Ee(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map(function(o){return"'"+o+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Ae(e){return!!e&&!!e[ne]}function Be(e){var t;return!!e&&(function(n){if(!n||typeof n!="object")return!1;var r=Object.getPrototypeOf(n);if(r===null)return!0;var o=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return o===Object||typeof o=="function"&&Function.toString.call(o)===cl}(e)||Array.isArray(e)||!!e[fa]||!!(!((t=e.constructor)===null||t===void 0)&&t[fa])||pr(e)||hr(e))}function tl(e){return Ae(e)||Ee(23,e),e[ne].t}function at(e,t,n){n===void 0&&(n=!1),wt(e)===0?(n?Object.keys:Et)(e).forEach(function(r){n&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,o){return t(o,r,e)})}function wt(e){var t=e[ne];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:pr(e)?2:hr(e)?3:0}function St(e,t){return wt(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function nl(e,t){return wt(e)===2?e.get(t):e[t]}function na(e,t,n){var r=wt(e);r===2?e.set(t,n):r===3?(e.delete(t),e.add(n)):e[t]=n}function ra(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function pr(e){return ul&&e instanceof Map}function hr(e){return sl&&e instanceof Set}function ut(e){return e.o||e.t}function vr(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=da(e);delete t[ne];for(var n=Et(t),r=0;r<n.length;r++){var o=n[r],i=t[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(Object.getPrototypeOf(e),t)}function mn(e,t){return t===void 0&&(t=!1),mr(e)||Ae(e)||!Be(e)||(wt(e)>1&&(e.set=e.add=e.clear=e.delete=rl),Object.freeze(e),t&&at(e,function(n,r){return mn(r,!0)},!0)),e}function rl(){Ee(2)}function mr(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function Re(e){var t=xr[e];return t||Ee(18,e),t}function il(e,t){xr[e]||(xr[e]=t)}function _r(){return Lt}function yr(e,t){t&&(Re("Patches"),e.u=[],e.s=[],e.v=t)}function _n(e){gr(e),e.p.forEach(ol),e.p=null}function gr(e){e===Lt&&(Lt=e.l)}function ia(e){return Lt={p:[],l:Lt,h:e,m:!0,_:0}}function ol(e){var t=e[ne];t.i===0||t.i===1?t.j():t.O=!0}function br(e,t){t._=t.p.length;var n=t.p[0],r=e!==void 0&&e!==n;return t.h.g||Re("ES5").S(t,e,r),r?(n[ne].P&&(_n(t),Ee(4)),Be(e)&&(e=yn(t,e),t.l||gn(t,e)),t.u&&Re("Patches").M(n[ne].t,e,t.u,t.s)):e=yn(t,n,[]),_n(t),t.u&&t.v(t.u,t.s),e!==la?e:void 0}function yn(e,t,n){if(mr(t))return t;var r=t[ne];if(!r)return at(t,function(i,a){return oa(e,r,t,i,a,n)},!0),t;if(r.A!==e)return t;if(!r.P)return gn(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var o=r.i===4||r.i===5?r.o=vr(r.k):r.o;at(r.i===3?new Set(o):o,function(i,a){return oa(e,r,o,i,a,n)}),gn(e,o,!1),n&&e.u&&Re("Patches").R(r,n,e.u,e.s)}return r.o}function oa(e,t,n,r,o,i){if(Ae(o)){var a=yn(e,o,i&&t&&t.i!==3&&!St(t.D,r)?i.concat(r):void 0);if(na(n,r,a),!Ae(a))return;e.m=!1}if(Be(o)&&!mr(o)){if(!e.h.F&&e._<1)return;yn(e,o),t&&t.A.l||gn(e,o)}}function gn(e,t,n){n===void 0&&(n=!1),e.h.F&&e.m&&mn(t,n)}function wr(e,t){var n=e[ne];return(n?ut(n):e)[t]}function aa(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function tt(e){e.P||(e.P=!0,e.l&&tt(e.l))}function Sr(e){e.o||(e.o=vr(e.t))}function Er(e,t,n){var r=pr(t)?Re("MapSet").N(t,n):hr(t)?Re("MapSet").T(t,n):e.g?function(o,i){var a=Array.isArray(o),s={i:a?1:0,A:i?i.A:_r(),P:!1,I:!1,D:{},l:i,t:o,k:null,o:null,j:null,C:!1},d=s,c=qt;a&&(d=[s],c=Bt);var u=Proxy.revocable(d,c),p=u.revoke,l=u.proxy;return s.k=l,s.j=p,l}(t,n):Re("ES5").J(t,n);return(n?n.A:_r()).p.push(r),r}function Ar(e){return Ae(e)||Ee(22,e),function t(n){if(!Be(n))return n;var r,o=n[ne],i=wt(n);if(o){if(!o.P&&(o.i<4||!Re("ES5").K(o)))return o.t;o.I=!0,r=ua(n,i),o.I=!1}else r=ua(n,i);return at(r,function(a,s){o&&nl(o.t,a)===s||na(r,a,t(s))}),i===3?new Set(r):r}(e)}function ua(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return vr(e)}function al(){function e(i,a){var s=o[i];return s?s.enumerable=a:o[i]=s={configurable:!0,enumerable:a,get:function(){var d=this[ne];return qt.get(d,i)},set:function(d){var c=this[ne];qt.set(c,i,d)}},s}function t(i){for(var a=i.length-1;a>=0;a--){var s=i[a][ne];if(!s.P)switch(s.i){case 5:r(s)&&tt(s);break;case 4:n(s)&&tt(s)}}}function n(i){for(var a=i.t,s=i.k,d=Et(s),c=d.length-1;c>=0;c--){var u=d[c];if(u!==ne){var p=a[u];if(p===void 0&&!St(a,u))return!0;var l=s[u],f=l&&l[ne];if(f?f.t!==p:!ra(l,p))return!0}}var h=!!a[ne];return d.length!==Et(a).length+(h?0:1)}function r(i){var a=i.k;if(a.length!==i.t.length)return!0;var s=Object.getOwnPropertyDescriptor(a,a.length-1);if(s&&!s.get)return!0;for(var d=0;d<a.length;d++)if(!a.hasOwnProperty(d))return!0;return!1}var o={};il("ES5",{J:function(i,a){var s=Array.isArray(i),d=function(u,p){if(u){for(var l=Array(p.length),f=0;f<p.length;f++)Object.defineProperty(l,""+f,e(f,!0));return l}var h=da(p);delete h[ne];for(var v=Et(h),m=0;m<v.length;m++){var _=v[m];h[_]=e(_,u||!!h[_].enumerable)}return Object.create(Object.getPrototypeOf(p),h)}(s,i),c={i:s?5:4,A:a?a.A:_r(),P:!1,I:!1,D:{},l:a,t:i,k:d,o:null,O:!1,C:!1};return Object.defineProperty(d,ne,{value:c,writable:!0}),d},S:function(i,a,s){s?Ae(a)&&a[ne].A===i&&t(i.p):(i.u&&function d(c){if(c&&typeof c=="object"){var u=c[ne];if(u){var p=u.t,l=u.k,f=u.D,h=u.i;if(h===4)at(l,function(w){w!==ne&&(p[w]!==void 0||St(p,w)?f[w]||d(l[w]):(f[w]=!0,tt(u)))}),at(p,function(w){l[w]!==void 0||St(l,w)||(f[w]=!1,tt(u))});else if(h===5){if(r(u)&&(tt(u),f.length=!0),l.length<p.length)for(var v=l.length;v<p.length;v++)f[v]=!1;else for(var m=p.length;m<l.length;m++)f[m]=!0;for(var _=Math.min(l.length,p.length),y=0;y<_;y++)l.hasOwnProperty(y)||(f[y]=!0),f[y]===void 0&&d(l[y])}}}}(i.p[0]),t(i.p))},K:function(i){return i.i===4?n(i):r(i)}})}var sa,Lt,Or=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",ul=typeof Map<"u",sl=typeof Set<"u",ca=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",la=Or?Symbol.for("immer-nothing"):((sa={})["immer-nothing"]=!0,sa),fa=Or?Symbol.for("immer-draftable"):"__$immer_draftable",ne=Or?Symbol.for("immer-state"):"__$immer_state",cl=""+Object.prototype.constructor,Et=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,da=Object.getOwnPropertyDescriptors||function(e){var t={};return Et(e).forEach(function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)}),t},xr={},qt={get:function(e,t){if(t===ne)return e;var n=ut(e);if(!St(n,t))return function(o,i,a){var s,d=aa(i,a);return d?"value"in d?d.value:(s=d.get)===null||s===void 0?void 0:s.call(o.k):void 0}(e,n,t);var r=n[t];return e.I||!Be(r)?r:r===wr(e.t,t)?(Sr(e),e.o[t]=Er(e.A.h,r,e)):r},has:function(e,t){return t in ut(e)},ownKeys:function(e){return Reflect.ownKeys(ut(e))},set:function(e,t,n){var r=aa(ut(e),t);if(r!=null&&r.set)return r.set.call(e.k,n),!0;if(!e.P){var o=wr(ut(e),t),i=o==null?void 0:o[ne];if(i&&i.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(ra(n,o)&&(n!==void 0||St(e.t,t)))return!0;Sr(e),tt(e)}return e.o[t]===n&&typeof n!="number"&&(n!==void 0||t in e.o)||(e.o[t]=n,e.D[t]=!0,!0)},deleteProperty:function(e,t){return wr(e.t,t)!==void 0||t in e.t?(e.D[t]=!1,Sr(e),tt(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=ut(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:n[t]}},defineProperty:function(){Ee(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){Ee(12)}},Bt={};at(qt,function(e,t){Bt[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),Bt.deleteProperty=function(e,t){return Bt.set.call(this,e,t,void 0)},Bt.set=function(e,t,n){return qt.set.call(this,e[0],t,n,e[0])};var ll=function(){function e(n){var r=this;this.g=ca,this.F=!0,this.produce=function(o,i,a){if(typeof o=="function"&&typeof i!="function"){var s=i;i=o;var d=r;return function(v){var m=this;v===void 0&&(v=s);for(var _=arguments.length,y=Array(_>1?_-1:0),w=1;w<_;w++)y[w-1]=arguments[w];return d.produce(v,function(O){var b;return(b=i).call.apply(b,[m,O].concat(y))})}}var c;if(typeof i!="function"&&Ee(6),a!==void 0&&typeof a!="function"&&Ee(7),Be(o)){var u=ia(r),p=Er(r,o,void 0),l=!0;try{c=i(p),l=!1}finally{l?_n(u):gr(u)}return typeof Promise<"u"&&c instanceof Promise?c.then(function(v){return yr(u,a),br(v,u)},function(v){throw _n(u),v}):(yr(u,a),br(c,u))}if(!o||typeof o!="object"){if((c=i(o))===void 0&&(c=o),c===la&&(c=void 0),r.F&&mn(c,!0),a){var f=[],h=[];Re("Patches").M(o,c,f,h),a(f,h)}return c}Ee(21,o)},this.produceWithPatches=function(o,i){if(typeof o=="function")return function(c){for(var u=arguments.length,p=Array(u>1?u-1:0),l=1;l<u;l++)p[l-1]=arguments[l];return r.produceWithPatches(c,function(f){return o.apply(void 0,[f].concat(p))})};var a,s,d=r.produce(o,i,function(c,u){a=c,s=u});return typeof Promise<"u"&&d instanceof Promise?d.then(function(c){return[c,a,s]}):[d,a,s]},typeof(n==null?void 0:n.useProxies)=="boolean"&&this.setUseProxies(n.useProxies),typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze)}var t=e.prototype;return t.createDraft=function(n){Be(n)||Ee(8),Ae(n)&&(n=Ar(n));var r=ia(this),o=Er(this,n,void 0);return o[ne].C=!0,gr(r),o},t.finishDraft=function(n,r){var o=n&&n[ne],i=o.A;return yr(i,r),br(void 0,i)},t.setAutoFreeze=function(n){this.F=n},t.setUseProxies=function(n){n&&!ca&&Ee(20),this.g=n},t.applyPatches=function(n,r){var o;for(o=r.length-1;o>=0;o--){var i=r[o];if(i.path.length===0&&i.op==="replace"){n=i.value;break}}o>-1&&(r=r.slice(o+1));var a=Re("Patches").$;return Ae(n)?a(n,r):this.produce(n,function(s){return a(s,r)})},e}(),we=new ll,bn=we.produce;we.produceWithPatches.bind(we),we.setAutoFreeze.bind(we),we.setUseProxies.bind(we),we.applyPatches.bind(we),we.createDraft.bind(we),we.finishDraft.bind(we);function fl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ha(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?pa(Object(n),!0).forEach(function(r){fl(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pa(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ce(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var va=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Pr=function(){return Math.random().toString(36).substring(7).split("").join(".")},Vt={INIT:"@@redux/INIT"+Pr(),REPLACE:"@@redux/REPLACE"+Pr(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Pr()}};function dl(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function wn(e,t,n){var r;if(typeof t=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ce(0));if(typeof t=="function"&&typeof n>"u"&&(n=t,t=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ce(1));return n(wn)(e,t)}if(typeof e!="function")throw new Error(ce(2));var o=e,i=t,a=[],s=a,d=!1;function c(){s===a&&(s=a.slice())}function u(){if(d)throw new Error(ce(3));return i}function p(v){if(typeof v!="function")throw new Error(ce(4));if(d)throw new Error(ce(5));var m=!0;return c(),s.push(v),function(){if(!!m){if(d)throw new Error(ce(6));m=!1,c();var y=s.indexOf(v);s.splice(y,1),a=null}}}function l(v){if(!dl(v))throw new Error(ce(7));if(typeof v.type>"u")throw new Error(ce(8));if(d)throw new Error(ce(9));try{d=!0,i=o(i,v)}finally{d=!1}for(var m=a=s,_=0;_<m.length;_++){var y=m[_];y()}return v}function f(v){if(typeof v!="function")throw new Error(ce(10));o=v,l({type:Vt.REPLACE})}function h(){var v,m=p;return v={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(ce(11));function w(){y.next&&y.next(u())}w();var O=m(w);return{unsubscribe:O}}},v[va]=function(){return this},v}return l({type:Vt.INIT}),r={dispatch:l,subscribe:p,getState:u,replaceReducer:f},r[va]=h,r}var pl=wn;function hl(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:Vt.INIT});if(typeof r>"u")throw new Error(ce(12));if(typeof n(void 0,{type:Vt.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ce(13))})}function ma(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];typeof e[o]=="function"&&(n[o]=e[o])}var i=Object.keys(n),a;try{hl(n)}catch(s){a=s}return function(d,c){if(d===void 0&&(d={}),a)throw a;for(var u=!1,p={},l=0;l<i.length;l++){var f=i[l],h=n[f],v=d[f],m=h(v,c);if(typeof m>"u")throw c&&c.type,new Error(ce(14));p[f]=m,u=u||m!==v}return u=u||i.length!==Object.keys(d).length,u?p:d}}function _a(e,t){return function(){return t(e.apply(this,arguments))}}function vl(e,t){if(typeof e=="function")return _a(e,t);if(typeof e!="object"||e===null)throw new Error(ce(16));var n={};for(var r in e){var o=e[r];typeof o=="function"&&(n[r]=_a(o,t))}return n}function Ut(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length===0?function(r){return r}:t.length===1?t[0]:t.reduce(function(r,o){return function(){return r(o.apply(void 0,arguments))}})}function ya(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return function(){var o=r.apply(void 0,arguments),i=function(){throw new Error(ce(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(d){return d(a)});return i=Ut.apply(void 0,s)(o.dispatch),ha(ha({},o),{},{dispatch:i})}}}var Sn="NOT_FOUND";function ml(e){var t;return{get:function(r){return t&&e(t.key,r)?t.value:Sn},put:function(r,o){t={key:r,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function _l(e,t){var n=[];function r(s){var d=n.findIndex(function(u){return t(s,u.key)});if(d>-1){var c=n[d];return d>0&&(n.splice(d,1),n.unshift(c)),c.value}return Sn}function o(s,d){r(s)===Sn&&(n.unshift({key:s,value:d}),n.length>e&&n.pop())}function i(){return n}function a(){n=[]}return{get:r,put:o,getEntries:i,clear:a}}var yl=function(t,n){return t===n};function gl(e){return function(n,r){if(n===null||r===null||n.length!==r.length)return!1;for(var o=n.length,i=0;i<o;i++)if(!e(n[i],r[i]))return!1;return!0}}function bl(e,t){var n=typeof t=="object"?t:{equalityCheck:t},r=n.equalityCheck,o=r===void 0?yl:r,i=n.maxSize,a=i===void 0?1:i,s=n.resultEqualityCheck,d=gl(o),c=a===1?ml(d):_l(a,d);function u(){var p=c.get(arguments);if(p===Sn){if(p=e.apply(null,arguments),s){var l=c.getEntries(),f=l.find(function(h){return s(h.value,p)});f&&(p=f.value)}c.put(arguments,p)}return p}return u.clearCache=function(){return c.clear()},u}function wl(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(r){return typeof r=="function"})){var n=t.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function Sl(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=function(){for(var a=arguments.length,s=new Array(a),d=0;d<a;d++)s[d]=arguments[d];var c=0,u,p={memoizeOptions:void 0},l=s.pop();if(typeof l=="object"&&(p=l,l=s.pop()),typeof l!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var f=p,h=f.memoizeOptions,v=h===void 0?n:h,m=Array.isArray(v)?v:[v],_=wl(s),y=e.apply(void 0,[function(){return c++,l.apply(null,arguments)}].concat(m)),w=e(function(){for(var b=[],P=_.length,M=0;M<P;M++)b.push(_[M].apply(null,arguments));return u=y.apply(null,b),u});return Object.assign(w,{resultFunc:l,memoizedResultFunc:y,dependencies:_,lastResult:function(){return u},recomputations:function(){return c},resetRecomputations:function(){return c=0}}),w};return o}var ga=Sl(bl);function ba(e){var t=function(r){var o=r.dispatch,i=r.getState;return function(a){return function(s){return typeof s=="function"?s(o,i,e):a(s)}}};return t}var wa=ba();wa.withExtraArgument=ba;const Sa=wa;var El=globalThis&&globalThis.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(r[i]=o[i])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),zt=globalThis&&globalThis.__generator||function(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(u){return d([c,u])}}function d(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},At=globalThis&&globalThis.__spreadArray||function(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e},Al=Object.defineProperty,Ol=Object.defineProperties,xl=Object.getOwnPropertyDescriptors,Ea=Object.getOwnPropertySymbols,Pl=Object.prototype.hasOwnProperty,Il=Object.prototype.propertyIsEnumerable,Aa=function(e,t,n){return t in e?Al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},ge=function(e,t){for(var n in t||(t={}))Pl.call(t,n)&&Aa(e,n,t[n]);if(Ea)for(var r=0,o=Ea(t);r<o.length;r++){var n=o[r];Il.call(t,n)&&Aa(e,n,t[n])}return e},Ir=function(e,t){return Ol(e,xl(t))},Ft=function(e,t,n){return new Promise(function(r,o){var i=function(d){try{s(n.next(d))}catch(c){o(c)}},a=function(d){try{s(n.throw(d))}catch(c){o(c)}},s=function(d){return d.done?r(d.value):Promise.resolve(d.value).then(i,a)};s((n=n.apply(e,t)).next())})},Ve=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=ga.apply(void 0,e),r=function(o){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return n.apply(void 0,At([Ae(o)?Ar(o):o],i))};return r},Cl=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ut:Ut.apply(null,arguments)};function En(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var n=t;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return t===n}var Oa=function(e){El(t,e);function t(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=e.apply(this,n)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return e.prototype.concat.apply(this,n)},t.prototype.prepend=function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return n.length===1&&Array.isArray(n[0])?new(t.bind.apply(t,At([void 0],n[0].concat(this)))):new(t.bind.apply(t,At([void 0],n.concat(this))))},t}(Array);function Cr(e){return Be(e)?bn(e,function(){}):e}function kl(e){return typeof e!="object"||e==null||Object.isFrozen(e)}function Tl(e){return function(){return function(t){return function(n){return t(n)}}}}function xa(e){var t=typeof e;return e==null||t==="string"||t==="boolean"||t==="number"||Array.isArray(e)||En(e)}function Pa(e,t,n,r,o){t===void 0&&(t=""),n===void 0&&(n=xa),o===void 0&&(o=[]);var i;if(!n(e))return{keyPath:t||"<root>",value:e};if(typeof e!="object"||e===null)return!1;for(var a=r!=null?r(e):Object.entries(e),s=o.length>0,d=0,c=a;d<c.length;d++){var u=c[d],p=u[0],l=u[1],f=t?t+"."+p:p;if(!(s&&o.indexOf(f)>=0)){if(!n(l))return{keyPath:f,value:l};if(typeof l=="object"&&(i=Pa(l,f,n,r,o),i))return i}}return!1}function $l(e){return function(){return function(t){return function(n){return t(n)}}}}function Nl(e){return typeof e=="boolean"}function Rl(){return function(t){return Ia(t)}}function Ia(e){e===void 0&&(e={});var t=e.thunk,n=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var r=new Oa;return n&&(Nl(n)?r.push(Sa):r.push(Sa.withExtraArgument(n.extraArgument))),r}var jl=!0;function Ca(e){var t=Rl(),n=e||{},r=n.reducer,o=r===void 0?void 0:r,i=n.middleware,a=i===void 0?t():i,s=n.devTools,d=s===void 0?!0:s,c=n.preloadedState,u=c===void 0?void 0:c,p=n.enhancers,l=p===void 0?void 0:p,f;if(typeof o=="function")f=o;else if(En(o))f=ma(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var h=a;typeof h=="function"&&(h=h(t));var v=ya.apply(void 0,h),m=Ut;d&&(m=Cl(ge({trace:!jl},typeof d=="object"&&d)));var _=[v];Array.isArray(l)?_=At([v],l):typeof l=="function"&&(_=l(_));var y=m.apply(void 0,_);return wn(f,u,y)}function je(e,t){function n(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(t){var i=t.apply(void 0,r);if(!i)throw new Error("prepareAction did not return an object");return ge(ge({type:e,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:e,payload:r[0]}}return n.toString=function(){return""+e},n.type=e,n.match=function(r){return r.type===e},n}function Ml(e){return En(e)&&typeof e.type=="string"&&Object.keys(e).every(Dl)}function Dl(e){return["type","payload","error","meta"].indexOf(e)>-1}function Ll(e){return""+e}function ka(e){var t={},n=[],r,o={addCase:function(i,a){var s=typeof i=="string"?i:i.type;if(s in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[s]=a,o},addMatcher:function(i,a){return n.push({matcher:i,reducer:a}),o},addDefaultCase:function(i){return r=i,o}};return e(o),[t,n,r]}function ql(e){return typeof e=="function"}function Ta(e,t,n,r){n===void 0&&(n=[]);var o=typeof t=="function"?ka(t):[t,n,r],i=o[0],a=o[1],s=o[2],d;if(ql(e))d=function(){return Cr(e())};else{var c=Cr(e);d=function(){return c}}function u(p,l){p===void 0&&(p=d());var f=At([i[l.type]],a.filter(function(h){var v=h.matcher;return v(l)}).map(function(h){var v=h.reducer;return v}));return f.filter(function(h){return!!h}).length===0&&(f=[s]),f.reduce(function(h,v){if(v)if(Ae(h)){var m=h,_=v(m,l);return _===void 0?h:_}else{if(Be(h))return bn(h,function(y){return v(y,l)});var _=v(h,l);if(_===void 0){if(h===null)return h;throw Error("A case reducer on a non-draftable value must not return undefined")}return _}return h},p)}return u.getInitialState=d,u}function Bl(e,t){return e+"/"+t}function $a(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var n=typeof e.initialState=="function"?e.initialState:Cr(e.initialState),r=e.reducers||{},o=Object.keys(r),i={},a={},s={};o.forEach(function(u){var p=r[u],l=Bl(t,u),f,h;"reducer"in p?(f=p.reducer,h=p.prepare):f=p,i[u]=f,a[l]=f,s[u]=h?je(l,h):je(l)});function d(){var u=typeof e.extraReducers=="function"?ka(e.extraReducers):[e.extraReducers],p=u[0],l=p===void 0?{}:p,f=u[1],h=f===void 0?[]:f,v=u[2],m=v===void 0?void 0:v,_=ge(ge({},l),a);return Ta(n,function(y){for(var w in _)y.addCase(w,_[w]);for(var O=0,b=h;O<b.length;O++){var P=b[O];y.addMatcher(P.matcher,P.reducer)}m&&y.addDefaultCase(m)})}var c;return{name:t,reducer:function(u,p){return c||(c=d()),c(u,p)},actions:s,caseReducers:i,getInitialState:function(){return c||(c=d()),c.getInitialState()}}}function Vl(){return{ids:[],entities:{}}}function Ul(){function e(t){return t===void 0&&(t={}),Object.assign(Vl(),t)}return{getInitialState:e}}function zl(){function e(t){var n=function(c){return c.ids},r=function(c){return c.entities},o=Ve(n,r,function(c,u){return c.map(function(p){return u[p]})}),i=function(c,u){return u},a=function(c,u){return c[u]},s=Ve(n,function(c){return c.length});if(!t)return{selectIds:n,selectEntities:r,selectAll:o,selectTotal:s,selectById:Ve(r,i,a)};var d=Ve(t,r);return{selectIds:Ve(t,n),selectEntities:d,selectAll:Ve(t,o),selectTotal:Ve(t,s),selectById:Ve(d,i,a)}}return{getSelectors:e}}function Fl(e){var t=ae(function(n,r){return e(r)});return function(r){return t(r,void 0)}}function ae(e){return function(n,r){function o(a){return Ml(a)}var i=function(a){o(r)?e(r.payload,a):e(r,a)};return Ae(n)?(i(n),n):bn(n,i)}}function Wt(e,t){var n=t(e);return n}function st(e){return Array.isArray(e)||(e=Object.values(e)),e}function Na(e,t,n){e=st(e);for(var r=[],o=[],i=0,a=e;i<a.length;i++){var s=a[i],d=Wt(s,t);d in n.entities?o.push({id:d,changes:s}):r.push(s)}return[r,o]}function Ra(e){function t(h,v){var m=Wt(h,e);m in v.entities||(v.ids.push(m),v.entities[m]=h)}function n(h,v){h=st(h);for(var m=0,_=h;m<_.length;m++){var y=_[m];t(y,v)}}function r(h,v){var m=Wt(h,e);m in v.entities||v.ids.push(m),v.entities[m]=h}function o(h,v){h=st(h);for(var m=0,_=h;m<_.length;m++){var y=_[m];r(y,v)}}function i(h,v){h=st(h),v.ids=[],v.entities={},n(h,v)}function a(h,v){return s([h],v)}function s(h,v){var m=!1;h.forEach(function(_){_ in v.entities&&(delete v.entities[_],m=!0)}),m&&(v.ids=v.ids.filter(function(_){return _ in v.entities}))}function d(h){Object.assign(h,{ids:[],entities:{}})}function c(h,v,m){var _=m.entities[v.id],y=Object.assign({},_,v.changes),w=Wt(y,e),O=w!==v.id;return O&&(h[v.id]=w,delete m.entities[v.id]),m.entities[w]=y,O}function u(h,v){return p([h],v)}function p(h,v){var m={},_={};h.forEach(function(O){O.id in v.entities&&(_[O.id]={id:O.id,changes:ge(ge({},_[O.id]?_[O.id].changes:null),O.changes)})}),h=Object.values(_);var y=h.length>0;if(y){var w=h.filter(function(O){return c(m,O,v)}).length>0;w&&(v.ids=Object.keys(v.entities))}}function l(h,v){return f([h],v)}function f(h,v){var m=Na(h,e,v),_=m[0],y=m[1];p(y,v),n(_,v)}return{removeAll:Fl(d),addOne:ae(t),addMany:ae(n),setOne:ae(r),setMany:ae(o),setAll:ae(i),updateOne:ae(u),updateMany:ae(p),upsertOne:ae(l),upsertMany:ae(f),removeOne:ae(a),removeMany:ae(s)}}function Wl(e,t){var n=Ra(e),r=n.removeOne,o=n.removeMany,i=n.removeAll;function a(y,w){return s([y],w)}function s(y,w){y=st(y);var O=y.filter(function(b){return!(Wt(b,e)in w.entities)});O.length!==0&&m(O,w)}function d(y,w){return c([y],w)}function c(y,w){y=st(y),y.length!==0&&m(y,w)}function u(y,w){y=st(y),w.entities={},w.ids=[],s(y,w)}function p(y,w){return l([y],w)}function l(y,w){for(var O=!1,b=0,P=y;b<P.length;b++){var M=P[b],L=w.entities[M.id];if(!!L){O=!0,Object.assign(L,M.changes);var W=e(L);M.id!==W&&(delete w.entities[M.id],w.entities[W]=L)}}O&&_(w)}function f(y,w){return h([y],w)}function h(y,w){var O=Na(y,e,w),b=O[0],P=O[1];l(P,w),s(b,w)}function v(y,w){if(y.length!==w.length)return!1;for(var O=0;O<y.length&&O<w.length;O++)if(y[O]!==w[O])return!1;return!0}function m(y,w){y.forEach(function(O){w.entities[e(O)]=O}),_(w)}function _(y){var w=Object.values(y.entities);w.sort(t);var O=w.map(e),b=y.ids;v(b,O)||(y.ids=O)}return{removeOne:r,removeMany:o,removeAll:i,addOne:ae(a),updateOne:ae(p),upsertOne:ae(f),setOne:ae(d),setMany:ae(c),setAll:ae(u),addMany:ae(s),updateMany:ae(l),upsertMany:ae(h)}}function Hl(e){e===void 0&&(e={});var t=ge({sortComparer:!1,selectId:function(s){return s.id}},e),n=t.selectId,r=t.sortComparer,o=Ul(),i=zl(),a=r?Wl(n,r):Ra(n);return ge(ge(ge({selectId:n,sortComparer:r},o),i),a)}var Ql="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",kr=function(e){e===void 0&&(e=21);for(var t="",n=e;n--;)t+=Ql[Math.random()*64|0];return t},Gl=["name","message","stack","code"],Tr=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),ja=function(){function e(t,n){this.payload=t,this.meta=n}return e}(),Ma=function(e){if(typeof e=="object"&&e!==null){for(var t={},n=0,r=Gl;n<r.length;n++){var o=r[n];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},Kl=function(){function e(t,n,r){var o=je(t+"/fulfilled",function(c,u,p,l){return{payload:c,meta:Ir(ge({},l||{}),{arg:p,requestId:u,requestStatus:"fulfilled"})}}),i=je(t+"/pending",function(c,u,p){return{payload:void 0,meta:Ir(ge({},p||{}),{arg:u,requestId:c,requestStatus:"pending"})}}),a=je(t+"/rejected",function(c,u,p,l,f){return{payload:l,error:(r&&r.serializeError||Ma)(c||"Rejected"),meta:Ir(ge({},f||{}),{arg:p,requestId:u,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(c==null?void 0:c.name)==="AbortError",condition:(c==null?void 0:c.name)==="ConditionError"})}}),s=typeof AbortController<"u"?AbortController:function(){function c(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return c.prototype.abort=function(){},c}();function d(c){return function(u,p,l){var f=r!=null&&r.idGenerator?r.idGenerator(c):kr(),h=new s,v,m=new Promise(function(O,b){return h.signal.addEventListener("abort",function(){return b({name:"AbortError",message:v||"Aborted"})})}),_=!1;function y(O){_&&(v=O,h.abort())}var w=function(){return Ft(this,null,function(){var O,b,P,M,L,W;return zt(this,function(V){switch(V.label){case 0:return V.trys.push([0,4,,5]),M=(O=r==null?void 0:r.condition)==null?void 0:O.call(r,c,{getState:p,extra:l}),Yl(M)?[4,M]:[3,2];case 1:M=V.sent(),V.label=2;case 2:if(M===!1)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return _=!0,u(i(f,c,(b=r==null?void 0:r.getPendingMeta)==null?void 0:b.call(r,{requestId:f,arg:c},{getState:p,extra:l}))),[4,Promise.race([m,Promise.resolve(n(c,{dispatch:u,getState:p,extra:l,requestId:f,signal:h.signal,abort:y,rejectWithValue:function(re,ie){return new Tr(re,ie)},fulfillWithValue:function(re,ie){return new ja(re,ie)}})).then(function(re){if(re instanceof Tr)throw re;return re instanceof ja?o(re.payload,f,c,re.meta):o(re,f,c)})])];case 3:return P=V.sent(),[3,5];case 4:return L=V.sent(),P=L instanceof Tr?a(null,f,c,L.payload,L.meta):a(L,f,c),[3,5];case 5:return W=r&&!r.dispatchConditionRejection&&a.match(P)&&P.meta.condition,W||u(P),[2,P]}})})}();return Object.assign(w,{abort:y,requestId:f,arg:c,unwrap:function(){return w.then(Da)}})}}return Object.assign(d,{pending:i,rejected:a,fulfilled:o,typePrefix:t})}return e.withTypes=e,e}();function Da(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Yl(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Xl=function(e){return e&&typeof e.match=="function"},La=function(e,t){return Xl(e)?e.match(t):e(t)};function Ht(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.some(function(r){return La(r,n)})}}function $r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(n){return e.every(function(r){return La(r,n)})}}function An(e,t){if(!e||!e.meta)return!1;var n=typeof e.meta.requestId=="string",r=t.indexOf(e.meta.requestStatus)>-1;return n&&r}function Qt(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function qa(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return An(n,["pending"])}:Qt(e)?function(n){var r=e.map(function(i){return i.pending}),o=Ht.apply(void 0,r);return o(n)}:qa()(e[0])}function On(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return An(n,["rejected"])}:Qt(e)?function(n){var r=e.map(function(i){return i.rejected}),o=Ht.apply(void 0,r);return o(n)}:On()(e[0])}function Ba(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=function(r){return r&&r.meta&&r.meta.rejectedWithValue};return e.length===0?function(r){var o=$r(On.apply(void 0,e),n);return o(r)}:Qt(e)?function(r){var o=$r(On.apply(void 0,e),n);return o(r)}:Ba()(e[0])}function Va(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return An(n,["fulfilled"])}:Qt(e)?function(n){var r=e.map(function(i){return i.fulfilled}),o=Ht.apply(void 0,r);return o(n)}:Va()(e[0])}function Ua(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(n){return An(n,["pending","fulfilled","rejected"])}:Qt(e)?function(n){for(var r=[],o=0,i=e;o<i.length;o++){var a=i[o];r.push(a.pending,a.rejected,a.fulfilled)}var s=Ht.apply(void 0,r);return s(n)}:Ua()(e[0])}var Nr=function(e,t){if(typeof e!="function")throw new TypeError(t+" is not a function")},Jl=function(){},Rr=function(e,t){return t===void 0&&(t=Jl),e.catch(t),e},za=function(e,t){e.addEventListener("abort",t,{once:!0})},Ot=function(e,t){var n=e.signal;n.aborted||("reason"in n||Object.defineProperty(n,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},Zl="task",Fa="listener",Wa="completed",jr="cancelled",ef="task-"+jr,tf="task-"+Wa,Ha=Fa+"-"+jr,nf=Fa+"-"+Wa,Gt=function(){function e(t){this.code=t,this.name="TaskAbortError",this.message=Zl+" "+jr+" (reason: "+t+")"}return e}(),xt=function(e){if(e.aborted)throw new Gt(e.reason)},Qa=function(e){return Rr(new Promise(function(t,n){var r=function(){return n(new Gt(e.reason))};e.aborted?r():za(e,r)}))},rf=function(e,t){return Ft(void 0,null,function(){var n,r;return zt(this,function(o){switch(o.label){case 0:return o.trys.push([0,3,4,5]),[4,Promise.resolve()];case 1:return o.sent(),[4,e()];case 2:return n=o.sent(),[2,{status:"ok",value:n}];case 3:return r=o.sent(),[2,{status:r instanceof Gt?"cancelled":"rejected",error:r}];case 4:return t==null||t(),[7];case 5:return[2]}})})},xn=function(e){return function(t){return Rr(Promise.race([Qa(e),t]).then(function(n){return xt(e),n}))}},Ga=function(e){var t=xn(e);return function(n){return t(new Promise(function(r){return setTimeout(r,n)}))}},of=Object.assign,Ka={},Kt="listenerMiddleware",af=function(e){var t=function(n){return za(e,function(){return Ot(n,e.reason)})};return function(n){Nr(n,"taskExecutor");var r=new AbortController;t(r);var o=rf(function(){return Ft(void 0,null,function(){var i;return zt(this,function(a){switch(a.label){case 0:return xt(e),xt(r.signal),[4,n({pause:xn(r.signal),delay:Ga(r.signal),signal:r.signal})];case 1:return i=a.sent(),xt(r.signal),[2,i]}})})},function(){return Ot(r,tf)});return{result:xn(e)(o),cancel:function(){Ot(r,ef)}}}},uf=function(e,t){var n=function(r,o){return Ft(void 0,null,function(){var i,a,s,d;return zt(this,function(c){switch(c.label){case 0:xt(t),i=function(){},a=new Promise(function(u){i=e({predicate:r,effect:function(p,l){l.unsubscribe(),u([p,l.getState(),l.getOriginalState()])}})}),s=[Qa(t),a],o!=null&&s.push(new Promise(function(u){return setTimeout(u,o,null)})),c.label=1;case 1:return c.trys.push([1,,3,4]),[4,Promise.race(s)];case 2:return d=c.sent(),xt(t),[2,d];case 3:return i(),[7];case 4:return[2]}})})};return function(r,o){return Rr(n(r,o))}},Ya=function(e){var t=e.type,n=e.actionCreator,r=e.matcher,o=e.predicate,i=e.effect;if(t)o=je(t).match;else if(n)t=n.type,o=n.match;else if(r)o=r;else if(!o)throw new Error("Creating or removing a listener requires one of the known fields for matching an action");return Nr(i,"options.listener"),{predicate:o,type:t,effect:i}},sf=function(e){var t=Ya(e),n=t.type,r=t.predicate,o=t.effect,i=kr(),a={id:i,effect:o,type:n,predicate:r,pending:new Set,unsubscribe:function(){throw new Error("Unsubscribe not initialized")}};return a},cf=function(e){return function(){e.forEach(Mr),e.clear()}},Xa=function(e,t,n){try{e(t,n)}catch(r){setTimeout(function(){throw r},0)}},Ja=je(Kt+"/add"),Za=je(Kt+"/removeAll"),eu=je(Kt+"/remove"),lf=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];console.error.apply(console,At([Kt+"/error"],e))},Mr=function(e){e.pending.forEach(function(t){Ot(t,Ha)})};function ff(e){var t=this;e===void 0&&(e={});var n=new Map,r=e.extra,o=e.onError,i=o===void 0?lf:o;Nr(i,"onError");var a=function(f){return f.unsubscribe=function(){return n.delete(f.id)},n.set(f.id,f),function(h){f.unsubscribe(),h!=null&&h.cancelActive&&Mr(f)}},s=function(f){for(var h=0,v=Array.from(n.values());h<v.length;h++){var m=v[h];if(f(m))return m}},d=function(f){var h=s(function(v){return v.effect===f.effect});return h||(h=sf(f)),a(h)},c=function(f){var h=Ya(f),v=h.type,m=h.effect,_=h.predicate,y=s(function(w){var O=typeof v=="string"?w.type===v:w.predicate===_;return O&&w.effect===m});return y&&(y.unsubscribe(),f.cancelActive&&Mr(y)),!!y},u=function(f,h,v,m){return Ft(t,null,function(){var _,y,w;return zt(this,function(O){switch(O.label){case 0:_=new AbortController,y=uf(d,_.signal),O.label=1;case 1:return O.trys.push([1,3,4,5]),f.pending.add(_),[4,Promise.resolve(f.effect(h,of({},v,{getOriginalState:m,condition:function(b,P){return y(b,P).then(Boolean)},take:y,delay:Ga(_.signal),pause:xn(_.signal),extra:r,signal:_.signal,fork:af(_.signal),unsubscribe:f.unsubscribe,subscribe:function(){n.set(f.id,f)},cancelActiveListeners:function(){f.pending.forEach(function(b,P,M){b!==_&&(Ot(b,Ha),M.delete(b))})}})))];case 2:return O.sent(),[3,5];case 3:return w=O.sent(),w instanceof Gt||Xa(i,w,{raisedBy:"effect"}),[3,5];case 4:return Ot(_,nf),f.pending.delete(_),[7];case 5:return[2]}})})},p=cf(n),l=function(f){return function(h){return function(v){if(Ja.match(v))return d(v.payload);if(Za.match(v)){p();return}if(eu.match(v))return c(v.payload);var m=f.getState(),_=function(){if(m===Ka)throw new Error(Kt+": getOriginalState can only be called synchronously");return m},y;try{if(y=h(v),n.size>0)for(var w=f.getState(),O=Array.from(n.values()),b=0,P=O;b<P.length;b++){var M=P[b],L=!1;try{L=M.predicate(v,w,m)}catch(W){L=!1,Xa(i,W,{raisedBy:"predicate"})}!L||u(M,v,f,_)}}finally{m=Ka}return y}}};return{middleware:l,startListening:d,stopListening:c,clearListeners:p}}var Dr="RTK_autoBatch",df=function(){return function(e){var t;return{payload:e,meta:(t={},t[Dr]=!0,t)}}},tu,pf=typeof queueMicrotask=="function"?queueMicrotask.bind(typeof window<"u"?window:global):function(e){return(tu||(tu=Promise.resolve())).then(e).catch(function(t){return setTimeout(function(){throw t},0)})},hf=function(e){return function(t){setTimeout(t,e)}},vf=function(e){return e===void 0&&(e={type:"raf"}),function(t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=t.apply(void 0,n),i=!0,a=!1,s=!1,d=new Set,c=e.type==="tick"?pf:e.type==="raf"?requestAnimationFrame:e.type==="callback"?e.queueNotification:hf(e.timeout),u=function(){s=!1,a&&(a=!1,d.forEach(function(p){return p()}))};return Object.assign({},o,{subscribe:function(p){var l=function(){return i&&p()},f=o.subscribe(l);return d.add(p),function(){f(),d.delete(p)}},dispatch:function(p){var l;try{return i=!((l=p==null?void 0:p.meta)!=null&&l[Dr]),a=!i,a&&(s||(s=!0,c(u))),o.dispatch(p)}finally{i=!0}}})}}};al();const Ue=Oi(Object.freeze(Object.defineProperty({__proto__:null,MiddlewareArray:Oa,SHOULD_AUTOBATCH:Dr,TaskAbortError:Gt,addListener:Ja,autoBatchEnhancer:vf,clearAllListeners:Za,configureStore:Ca,createAction:je,createAsyncThunk:Kl,createDraftSafeSelector:Ve,createEntityAdapter:Hl,createImmutableStateInvariantMiddleware:Tl,createListenerMiddleware:ff,createNextState:bn,createReducer:Ta,createSelector:ga,createSerializableStateInvariantMiddleware:$l,createSlice:$a,current:Ar,findNonSerializableValue:Pa,freeze:mn,getDefaultMiddleware:Ia,getType:Ll,isAllOf:$r,isAnyOf:Ht,isAsyncThunkAction:Ua,isDraft:Ae,isFulfilled:Va,isImmutableDefault:kl,isPending:qa,isPlain:xa,isPlainObject:En,isRejected:On,isRejectedWithValue:Ba,miniSerializeError:Ma,nanoid:kr,original:tl,prepareAutoBatched:df,removeListener:eu,unwrapResult:Da,__DO_NOT_USE__ActionTypes:Vt,applyMiddleware:ya,bindActionCreators:vl,combineReducers:ma,compose:Ut,createStore:wn,legacy_createStore:pl},Symbol.toStringTag,{value:"Module"})));var nu;function mf(){if(nu)return Dt;nu=1,Object.defineProperty(Dt,"__esModule",{value:!0}),Dt.eventsDraftSelector=void 0;var e=Ue,t=function(n){return n};return Dt.eventsDraftSelector=(0,e.createDraftSafeSelector)(t,function(n){return n.events}),Dt}var Ce={},Yt={},ru;function iu(){if(ru)return Yt;ru=1,Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.getDaysInMilliseconds=void 0;var e=function(t){return t*24*60*60*1e3};return Yt.getDaysInMilliseconds=e,Yt}var ou;function _f(){if(ou)return Ce;ou=1;var e;Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.reducer=Ce.resetEvents=Ce.clearEvents=Ce.addEvent=void 0;var t=Ue,n=iu(),r=(0,t.createSlice)({name:"events",initialState:[],reducers:{addEvent:function(o,i){var a=i.payload;if(o.length!==0){var s=o[o.length-1].time;a.time<=s&&(a.time=s+1)}o.push(a)},clearEvents:function(o,i){return o.filter(function(a){return Date.now()-a.time<(i.payload||(0,n.getDaysInMilliseconds)(90))})},resetEvents:function(){return[]}}});return Ce.addEvent=(e=r.actions,e.addEvent),Ce.clearEvents=e.clearEvents,Ce.resetEvents=e.resetEvents,Ce.reducer=r.reducer,Ce}var au;function Lr(){return au||(au=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=et.exports;t.__exportStar(mf(),e),t.__exportStar(_f(),e)}(dr)),dr}var qr={},Br={},uu;function yf(){return uu||(uu=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.shouldDisplayIntroPage=e.sessionDraftSelector=void 0;var t=Ue,n=function(r){return r};e.sessionDraftSelector=(0,t.createDraftSafeSelector)(n,function(r){return r.session}),e.shouldDisplayIntroPage=(0,t.createDraftSafeSelector)(e.sessionDraftSelector,function(r){return r.showIntro})}(Br)),Br}var Se={},su;function gf(){if(su)return Se;su=1;var e;Object.defineProperty(Se,"__esModule",{value:!0}),Se.reducer=Se.proceedToQuestionnaire=Se.incrementSkipCounter=Se.resetSessionsCounter=Se.incrementSessionsCounter=void 0;var t=Ue,n=Lr(),r={sessionsCounter:0,skipCounter:0,showIntro:!0,latestEventTimestamp:0},o=(0,t.createSlice)({name:"session",initialState:r,reducers:{incrementSessionsCounter:function(i){i.sessionsCounter++},resetSessionsCounter:function(i){i.sessionsCounter=r.sessionsCounter},incrementSkipCounter:function(i){i.skipCounter++},proceedToQuestionnaire:function(i){i.showIntro=!1}},extraReducers:function(i){i.addCase(n.addEvent,function(a,s){a.latestEventTimestamp=s.payload.time})}});return Se.incrementSessionsCounter=(e=o.actions,e.incrementSessionsCounter),Se.resetSessionsCounter=e.resetSessionsCounter,Se.incrementSkipCounter=e.incrementSkipCounter,Se.proceedToQuestionnaire=e.proceedToQuestionnaire,Se.reducer=o.reducer,Se}var cu;function lu(){return cu||(cu=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=et.exports;t.__exportStar(yf(),e),t.__exportStar(gf(),e)}(qr)),qr}var Vr={},Ur={},fu;function bf(){return fu||(fu=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.currentQuestionSelector=e.questionsSelector=e.currentBatchSelector=void 0;var t=Ue,n=function(r){return r.questions.questionsBatches};e.currentBatchSelector=(0,t.createDraftSafeSelector)(n,function(r){return r.find(function(o){return!o.finished})}),e.questionsSelector=(0,t.createDraftSafeSelector)(e.currentBatchSelector,function(r){return r?r.questions.filter(function(o){var i=r.questionLogs[o.uuid],a=r.questionAnswers[o.uuid];return!(i&&i.refused||a)}):[]}),e.currentQuestionSelector=(0,t.createDraftSafeSelector)(e.questionsSelector,function(r){return r[0]})}(Ur)),Ur}var zr={},du;function wf(){return du||(du=1,function(e){var t;Object.defineProperty(e,"__esModule",{value:!0}),e.reducer=e.unfinishBatch=e.finishBatch=e.setCurrentBatch=e.setBatches=e.skipBatch=e.answerQuestion=e.refuseQuestion=e.skipQuestion=e.checkIfBatchFinished=e.createQuestionLog=void 0;var n=Ue,r={questionsBatches:[],currentBatchUuid:""},o=function(c,u){return c.find(function(p){return p.uuid===u})},i=function(c){return{questionUuid:c,refused:!1,skipCounter:0}};e.createQuestionLog=i;var a=function(c){var u=new Set;return Object.keys(c.questionAnswers).forEach(function(p){u.add(p)}),Object.values(c.questionLogs).forEach(function(p){p.refused&&u.add(p.questionUuid)}),c.questions.length===u.size};e.checkIfBatchFinished=a;var s=function(c,u,p){p&&p.options.length?c[u]=p:delete c[u]},d=(0,n.createSlice)({name:"questions",initialState:r,reducers:{setBatches:function(c,u){c.questionsBatches=u.payload},setCurrentBatch:function(c,u){c.currentBatchUuid=u.payload},finishBatch:function(c,u){c.questionsBatches.map(function(p){return p.uuid===u.payload&&(p.finished=!0),p})},unfinishBatch:function(c,u){c.questionsBatches.map(function(p){return p.uuid===u.payload&&(p.finished=!1),p})},skipBatch:function(c,u){var p=o(c.questionsBatches,u.payload);!p||(c.questionsBatches=c.questionsBatches.filter(function(l){return l.uuid!==u.payload}),c.questionsBatches.push(p))},skipQuestion:function(c,u){var p,l=u.payload,f=o(c.questionsBatches,l.batchUuid);if(!!f){var h=(p=f.questionLogs[l.uuid])!==null&&p!==void 0?p:(0,e.createQuestionLog)(l.uuid);h.skipCounter+=1,h.refused=h.skipCounter>=2,f.questionLogs[l.uuid]=h,s(f.questionAnswers,l.uuid,void 0)}},refuseQuestion:function(c,u){var p,l=u.payload,f=o(c.questionsBatches,l.batchUuid);if(!!f){var h=(p=f.questionLogs[l.uuid])!==null&&p!==void 0?p:(0,e.createQuestionLog)(l.uuid);h.refused=!0,f.questionLogs[l.uuid]=h,s(f.questionAnswers,l.uuid,void 0)}},answerQuestion:function(c,u){var p=o(c.questionsBatches,u.payload.batchUuid);!p||s(p.questionAnswers,u.payload.questionUuid,u.payload)}}});e.skipQuestion=(t=d.actions,t.skipQuestion),e.refuseQuestion=t.refuseQuestion,e.answerQuestion=t.answerQuestion,e.skipBatch=t.skipBatch,e.setBatches=t.setBatches,e.setCurrentBatch=t.setCurrentBatch,e.finishBatch=t.finishBatch,e.unfinishBatch=t.unfinishBatch,e.reducer=d.reducer}(zr)),zr}var pu;function Sf(){return pu||(pu=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=et.exports;t.__exportStar(bf(),e),t.__exportStar(wf(),e)}(Vr)),Vr}var Fr={},Xt={},hu;function Ef(){if(hu)return Xt;hu=1,Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.isOver=void 0;var e=Ue,t=function(n){return n.appState.isOver};return Xt.isOver=(0,e.createDraftSafeSelector)(t,function(n){return n.valueOf}),Xt}var ze={},vu;function Af(){if(vu)return ze;vu=1;var e;Object.defineProperty(ze,"__esModule",{value:!0}),ze.reducer=ze.setIsOver=ze.getIsOver=void 0;var t=Ue,n={isOver:!1},r=(0,t.createSlice)({name:"appState",initialState:n,reducers:{getIsOver:function(o){o.isOver},setIsOver:function(o,i){var a=i.payload;o.isOver=a}}});return ze.getIsOver=(e=r.actions,e.getIsOver),ze.setIsOver=e.setIsOver,ze.reducer=r.reducer,ze}var mu;function _u(){return mu||(mu=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=et.exports;t.__exportStar(Ef(),e),t.__exportStar(Af(),e)}(Fr)),Fr}var Wr={},ct={},yu;function Of(){if(yu)return ct;yu=1,Object.defineProperty(ct,"__esModule",{value:!0}),ct.reducer=ct.submitBatch=void 0;var e=Ue,t=(0,e.createSlice)({name:"webo",initialState:{},reducers:{submitBatch:function(n,r){r.payload.batch.questions.forEach(function(o){delete n[o.uuid]}),Object.keys(r.payload.batch.questionAnswers).forEach(function(o){r.payload.batch.questionAnswers[o].options.length&&o!=r.payload.discardQuestionWithUUID&&(n[o]=r.payload.batch.questionAnswers[o].options)})}}});return ct.submitBatch=t.actions.submitBatch,ct.reducer=t.reducer,ct}var gu;function xf(){return gu||(gu=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=et.exports;t.__exportStar(Of(),e)}(Wr)),Wr}var Hr={},Jt={},bu;function Pf(){if(bu)return Jt;bu=1,Object.defineProperty(Jt,"__esModule",{value:!0}),Jt.shouldDisplayApp=void 0;var e=_u(),t=iu(),n=function(r,o,i,a,s){o===void 0&&(o=(0,t.getDaysInMilliseconds)(2)),i===void 0&&(i=3),a===void 0&&(a=1),s===void 0&&(s=void 0);var d=function(l){return Date.now()-l},c=function(l){return l>o},u=d(r.latestEventTimestamp),p=r.skipCounter<i&&(r.latestEventTimestamp===0||c(u)&&r.sessionsCounter>=a);return p&&s&&s.dispatch((0,e.setIsOver)(!1)),p};return Jt.shouldDisplayApp=n,Jt}var Zt={},wu;function If(){if(wu)return Zt;wu=1,Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.createQuestionAnswer=void 0;var e=function(t,n){return{batchUuid:t.batchUuid,questionUuid:t.uuid,options:n,updatedAt:Date.now()}};return Zt.createQuestionAnswer=e,Zt}var Su;function Eu(){return Su||(Su=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.createQuestionAnswer=e.shouldDisplayApp=void 0;var t=Pf();Object.defineProperty(e,"shouldDisplayApp",{enumerable:!0,get:function(){return t.shouldDisplayApp}});var n=If();Object.defineProperty(e,"createQuestionAnswer",{enumerable:!0,get:function(){return n.createQuestionAnswer}})}(Hr)),Hr}var Qr={},Au;function Cf(){return Au||(Au=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.QuestionType=e.EventContextMode=e.EventContextDisplayMode=e.EventContextType=e.EventType=void 0,function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.DISPLAY_APP=1]="DISPLAY_APP",t[t.GO_TO_QUESTIONS=2]="GO_TO_QUESTIONS",t[t.GO_TO_ABOUT=3]="GO_TO_ABOUT",t[t.ANSWER=4]="ANSWER",t[t.REFUSE_TO_ANSWER=5]="REFUSE_TO_ANSWER",t[t.SKIP=6]="SKIP",t[t.FINISH=7]="FINISH",t[t.GO_BACK_TO_CMP=8]="GO_BACK_TO_CMP"}(e.EventType||(e.EventType={})),function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.MAIN=1]="MAIN",t[t.ABOUT=2]="ABOUT",t[t.QUESTION=3]="QUESTION"}(e.EventContextType||(e.EventContextType={})),function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.MODAL=1]="MODAL",t[t.DIV=2]="DIV"}(e.EventContextDisplayMode||(e.EventContextDisplayMode={})),function(t){t[t.UNKNOWN=0]="UNKNOWN",t[t.CLASSIC=1]="CLASSIC",t[t.DATAWALL=2]="DATAWALL"}(e.EventContextMode||(e.EventContextMode={})),function(t){t[t.SINGLE=0]="SINGLE",t[t.MULTIPLE=1]="MULTIPLE"}(e.QuestionType||(e.QuestionType={}))}(Qr)),Qr}var Gr={},Kr={},Ou;function kf(){return Ou||(Ou=1,Object.defineProperty(Kr,"__esModule",{value:!0})),Kr}var Yr={},xu;function Tf(){return xu||(xu=1,Object.defineProperty(Yr,"__esModule",{value:!0})),Yr}var Xr={},Pu;function $f(){return Pu||(Pu=1,Object.defineProperty(Xr,"__esModule",{value:!0})),Xr}var Iu;function Nf(){return Iu||(Iu=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=et.exports;t.__exportStar(kf(),e),t.__exportStar(Tf(),e),t.__exportStar($f(),e)}(Gr)),Gr}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.methods=e.webo=e.appState=e.questions=e.session=e.events=void 0;var t=et.exports;e.events=t.__importStar(Lr()),e.session=t.__importStar(lu()),e.questions=t.__importStar(Sf()),e.appState=t.__importStar(_u()),e.webo=t.__importStar(xf()),e.methods=t.__importStar(Eu()),t.__exportStar(Cf(),e),t.__exportStar(Nf(),e)})(q);function Cu(e,t,n){const r=[...e,t];if("nodes"in t)for(const o of t.nodes){const i=Cu(r,o,n),a=i[i.length-1];if("uuid"in a&&a.uuid===n)return i}return"uuid"in t&&t.uuid===n?r:r.slice(0,-1)}function Rf(e,t){const n=[e];for(const r of e.options){const o=Cu(n,r,t),i=o[o.length-1];if("uuid"in i&&i.uuid===t)return o}return null}function Jr(e){let t=[];if("nodes"in e)for(const n of e.nodes)t=t.concat(Jr(n));return"uuid"in e&&t.push(e.uuid),t}function jf(e){const t=[];for(let n=e.length-1;n>=0;n--){const r=e[n],o=e[n+1];if("type"in r){if("nodes"in r)for(const i of r.nodes)i!==o&&r.type===q.QuestionType.SINGLE&&Jr(i).forEach(a=>t.push(a));if("options"in r)for(const i of r.options)i!==o&&r.type===q.QuestionType.SINGLE&&Jr(i).forEach(a=>t.push(a))}}return t}function Mf(e,t){return e.filter(n=>t.every(r=>r!==n))}const{createQuestionAnswer:ku}=q.methods;function Df(e){const t=Ze(),n=bt(a=>a.questions.questionsBatches.find(s=>s.uuid===e.batchUuid));if(!n)throw new Error("batch not found");function r(a){var u,p;if(!n)throw new Error("batch not found");const s=Rf(e,a);if(s===null)return;const d=jf(s),c=ku(e,[...Mf((p=(u=n.questionAnswers[e.uuid])==null?void 0:u.options)!=null?p:[],d),a]);t(q.questions.answerQuestion(c))}function o(a){if(!n)throw new Error("batch not found");const s=ku(e,n.questionAnswers[e.uuid].options.filter(d=>d!==a));t(q.questions.answerQuestion(s))}return{current:n.questionAnswers[e.uuid],add:r,remove:o}}const Zr="https://lite.appconsent.io/v1.6.1/icons/arrow-right.svg",Lf=N.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1em 1.5em;
  box-sizing: border-box;
  overflow: hidden;

  & > * {
    margin: 0.5em 0;
  }
`,qf=N.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
`,Bf=N(Xe)`
  font-family: 'Poppins-Bold';
  margin: 1em 0  1em;
  display: flex;
  flex-direction: column-reverse;
  align-self: flex-start;
  flex: 0 0 auto;
`,Vf=N.div`
margin: 2em 0 4em 0;
width: 100%;
flex: 1 1 auto;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-content: baseline;
max-height: fit-content;
& div:nth-child(n){
  margin-bottom: 1em;
  width: 48%;
  margin-right: 1%;
}
@media(max-width: 490px){
  & div:nth-child(n){
  margin-bottom : 1em;
  width: 100%
  }
}
`,Uf=N(Je)`
  flex: 0 0 auto;
  font-family: 'Poppins';
`,Tu=N(yt)`
  flex: 0 0 auto;
  font-family: 'Poppins';
`;function zf({question:e,total:t,questionAnswers:n,currentIdx:r,onRefuse:o,onNext:i,onFinish:a,onComplete:s}){var m,_,y;const d=Df(e),c=(m=e.text.fr)!=null?m:"Question name not found",u=e.options,p=(y=(_=n[e.uuid])==null?void 0:_.options)!=null?y:[],l=p.length>0,[f,h]=Pe(!0),v=r+1===t;return f&&l&&(v?a():i(e,{dontSubmitEvent:!0})),Ie(()=>{h(!0)},[e.uuid]),g(Lf,{children:[g(Yc,{total:t,current:r+1}),g(qf,{children:[g(Bf,{level:4,children:c}),g(Vf,{children:u.map((w,O)=>g(ta,{node:w,selected:p,onAnswer:(b,P)=>{h(!1),P?d.remove(b.uuid):d.add(b.uuid)}},O))})]}),g(Uf,{label:"Je ne veux pas r\xE9pondre",fontWeight:500,onClick:()=>o(e)}),v?g(Tu,{label:"Terminer",icon:Zr,onClick:()=>s(e),disabled:!l}):g(Tu,{label:"Suivant",icon:Zr,onClick:()=>i(e),disabled:!l})]})}const $u=an({value:[],setValue:()=>{}});function Ff({children:e,startingPage:t}){const[n,r]=Pe([t]),o=n[n.length-1],i=e[o.path],a={value:n,setValue:r};return g($u.Provider,{value:a,children:g(i,{...o.props})})}function Pn(){const e=Te($u);return{currentPage:e.value[e.value.length-1],stack:e.value,push:t=>e.setValue(n=>[...n,t]),goBack:()=>{e.value.length<=1||e.setValue(t=>[...t.slice(0,-1)])}}}const ve={MainDatawall:"main-datawall",MainClassic:"main-classic",About:"about",Questionnaire:"questionnaire",Success:"success"};var Nu=Lr();function Ru(e,t,n){const r={eventType:e,time:n||Date.now()};return t&&(r.context=t),r}function In(){const e=Ze(),t=bt(r=>r.events),n=(r,o)=>{const i=t&&t.length>0&&t[t.length-1].time===Date.now()?Ru(r,o,Date.now()+1):Ru(r,o);e(Nu.addEvent(i))};return{dispatch:n,displayApp:r=>n(q.EventType.DISPLAY_APP,r),skipApp:r=>n(q.EventType.SKIP,r),goToAboutPage:r=>n(q.EventType.GO_TO_ABOUT,r),goToQuestions:r=>n(q.EventType.GO_TO_QUESTIONS,r),goBackToCmp:r=>n(q.EventType.GO_BACK_TO_CMP,r),answerQuestion:r=>n(q.EventType.ANSWER,r),skipQuestion:r=>n(q.EventType.SKIP,r),refuseQuestion:r=>n(q.EventType.REFUSE_TO_ANSWER,r),closeApp:r=>n(q.EventType.FINISH,r)}}var Pt=lu();const Cn=$a({initialState:{isOpen:!1},name:"app",reducers:{setIsOpen(e,t){e.isOpen=t.payload}}}),Wf=e=>{const n={time:(r=>{const o=r?new Date(r).getTime():Date.now();return{seconds:Math.round(o/1e3),nanos:o%1e3*1e6}})(e.time),type:e.eventType};if(e.context){const r={type:e.context.type,display_mode:e.context.displayMode,question_id:e.context.questionId,mode:e.context.mode};e.context.questionId&&(r.question_id=e.context.questionId),n.context=r}return n};class Hf{constructor(){ii(this,"baseUrl",String("https://lite-backend.appconsent.io/"))}saveEvents(t){fetch(`${this.baseUrl}events`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})}setBaseUrl(t){this.baseUrl=t}}const ju=new Hf;var Mu="Expected a function",Du=0/0,Qf="[object Symbol]",Gf=/^\s+|\s+$/g,Kf=/^[-+]0x[0-9a-f]+$/i,Yf=/^0b[01]+$/i,Xf=/^0o[0-7]+$/i,Jf=parseInt,Zf=typeof pt=="object"&&pt&&pt.Object===Object&&pt,ed=typeof self=="object"&&self&&self.Object===Object&&self,td=Zf||ed||Function("return this")(),nd=Object.prototype,rd=nd.toString,id=Math.max,od=Math.min,ei=function(){return td.Date.now()};function ad(e,t,n){var r,o,i,a,s,d,c=0,u=!1,p=!1,l=!0;if(typeof e!="function")throw new TypeError(Mu);t=Lu(t)||0,kn(n)&&(u=!!n.leading,p="maxWait"in n,i=p?id(Lu(n.maxWait)||0,t):i,l="trailing"in n?!!n.trailing:l);function f(P){var M=r,L=o;return r=o=void 0,c=P,a=e.apply(L,M),a}function h(P){return c=P,s=setTimeout(_,t),u?f(P):a}function v(P){var M=P-d,L=P-c,W=t-M;return p?od(W,i-L):W}function m(P){var M=P-d,L=P-c;return d===void 0||M>=t||M<0||p&&L>=i}function _(){var P=ei();if(m(P))return y(P);s=setTimeout(_,v(P))}function y(P){return s=void 0,l&&r?f(P):(r=o=void 0,a)}function w(){s!==void 0&&clearTimeout(s),c=0,r=d=o=s=void 0}function O(){return s===void 0?a:y(ei())}function b(){var P=ei(),M=m(P);if(r=arguments,o=this,d=P,M){if(s===void 0)return h(d);if(p)return s=setTimeout(_,t),f(d)}return s===void 0&&(s=setTimeout(_,t)),a}return b.cancel=w,b.flush=O,b}function ud(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Mu);return kn(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),ad(e,t,{leading:r,maxWait:t,trailing:o})}function kn(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function sd(e){return!!e&&typeof e=="object"}function cd(e){return typeof e=="symbol"||sd(e)&&rd.call(e)==Qf}function Lu(e){if(typeof e=="number")return e;if(cd(e))return Du;if(kn(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=kn(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Gf,"");var n=Yf.test(e);return n||Xf.test(e)?Jf(e.slice(2),n?2:8):Kf.test(e)?Du:+e}var ld=ud;class fd{constructor(t="_lite"){ii(this,"key");this.key=t}get(){return JSON.parse(localStorage.getItem(this.key)||"{}")}set(t){localStorage.setItem(this.key,JSON.stringify(t))}delete(){localStorage.removeItem(this.key)}}const qu=new fd,lt=Ca({reducer:{events:q.events.reducer,session:q.session.reducer,questions:q.questions.reducer,app:Cn.reducer,webo:q.webo.reducer,appState:q.appState.reducer},preloadedState:qu.get()});lt.subscribe(ld(()=>{qu.set(lt.getState())},1e3));const dd=(e,t)=>({type:q.EventContextType.MAIN,displayMode:e?q.EventContextDisplayMode.MODAL:q.EventContextDisplayMode.DIV,mode:t?q.EventContextMode.DATAWALL:q.EventContextMode.CLASSIC});function Tn(e,t){const n=Ze(),r=In();return{open:o=>{o.api&&ju.setBaseUrl(o.api),n(Pt.incrementSessionsCounter()),n(Cn.actions.setIsOpen(!0))},hide:()=>{n(Cn.actions.setIsOpen(!1))},close:()=>{r.closeApp(dd(e,t)),n(Pt.resetSessionsCounter()),n(Cn.actions.setIsOpen(!1)),ju.saveEvents({events:lt.getState().events.map(Wf)})}}}const pd=N.div`
  display: flex;
  width: 100%;
  height: 60%;
  justify-content: space-between;
  padding: 1em 0;
  margin-top: 1em;
  & img:nth-child(n) {
    width: 5%;
    @media (min-width: 495px) and (max-width: 767px) {
      margin-left: 5%;
    }
  }
  @media ${F.mobile} {
    padding: 0;
    height: 47%;
  }
  @media (min-width: 768px) {
    height: 80%;
  }
`,hd=N.div`
  overflow: auto;
  width: 100%;
  height: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
`,vd=N.div`
  flex: 1 1 auto;
  margin: 1.5em 0 1em;
`,Bu=N(yt)`
  align-self: center;
  width: 85%;
  height: 23px;
  background-color: #3f4fdb;
  color: #fff;
  border-radius: 12px;
  font-family: Poppins;
  font-weight: bold;
  font-size: large;
  margin: 1em 0.5em 1em 0.5em;
  & span:nth-child(n) {
    margin: auto;
  }

  @media${F.fold} {
    width: 80%;
    font-size: x-small;
    font-weight: normal;
    height: auto;
  }

  @media${F.tablet} {
    font-size: medium;
    font-weight: normal;
  }

  @media${F.mobile} {
    font-size: small;
    font-weight: normal;
  }
`,Vu=N(yt)`
  align-self: center;
  width: 85%;
  height: 23px;
  background-color: #fff;
  color: #3f4fdb;
  border: solid #3f4fdb 2px;
  border-radius: 12px;
  font-family: Poppins;
  font-weight: bold;
  font-size: large;
  margin: 1em 0.5em 1em 0.5em;
  & span:nth-child(n) {
    margin: auto;
  }

  @media${F.fold} {
    width: 80%;
    font-size: x-small;
    font-weight: normal;
    height: auto;
  }

  @media${F.tablet} {
    font-size: medium;
    font-weight: normal;
  }

  @media${F.mobile} {
    font-size: small;
    font-weight: normal;
  }
`,md=N.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;

  @media${F.fold} {
    flex-direction: column;
  }
`,ti=N(se)`
  font-family: Poppins;
  font-weight: 400;
  @media ${F.mobile} {
    margin-top: 1px;
    font-size: 0.6em;
  }
  @media (min-width: 450px) and (max-width: 767px) {
    margin-top: 1px;
    font-size: 0.8em;
  }
  @media ${F.fold} {
    margin-top: 1px;
    font-size: 0.5em;
  }
`,_d="https://lite.appconsent.io/v1.6.1/icons/onboarding-timer.svg",Uu="https://lite.appconsent.io/v1.6.1/icons/onboarding-line.svg",yd="https://lite.appconsent.io/v1.6.1/icons/onboarding-no-track.svg",gd="https://lite.appconsent.io/v1.6.1/icons/onboarding-anonym.svg",$n=()=>g(pd,{children:[g("img",{src:_d,alt:"timer icon"}),g(ti,{family:"Poppins",children:"< \xE0 1 min"}),g("img",{src:Uu,alt:"separation line",style:{width:"3px"}}),g("img",{src:yd,alt:"no track icon"}),g(ti,{family:"Poppins",children:"0 traceur"}),g("img",{src:Uu,alt:"separation line",style:{width:"3px"}}),g("img",{src:gd,alt:"anonym icon"}),g(ti,{family:"Poppins",children:"Profil anonyme"})]}),bd=N.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${F.mobile} {
    flex-direction: column;
  }

  @media${F.fold} {
    flex-direction: column;
  }
`,zu=N.div`
  display: flex;
  width: 40%;
  margin-left: 3%;
  @media${F.fold}{
    margin-left: 0;
    & div:nth-child(n){
      height: 66%;
    }
  }

@media ${F.tablet} {
  width: 50%;
}

@media ${F.mobile} {
    width: 70%;
    height: 10%;
    margin-left: 13%;
}
@media (max-width: 768px) {
  width: 80%;
  justify-content-center;
  margin-left: 6%;
}
@media (max-width: 580px) {
  width: 90%;
  margin-left: 5%;
}
`,Fu=N.div`
  display: flex;
  width: 100%;
  @media${F.fold}{
    margin-left: 0;
    & div:nth-child(n){
      height: 66%;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
    justify-content-center;
    margin-left: 6%;
  }
  @media (max-width: 580px) {
    width: 90%;
    margin-left: 5%;
  }
`,Wu=N.div`
  flex: 0 0 auto;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`,Hu=N(Xe)`
  font-size: 1.3em;
  font-family: Poppins;
  font-weight: bold;
`,Qu=N.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.6em;
  box-sizing: border-box;
  z-index: 2147483648;

  @media ${F.mobile} {
    padding: 1.5em;
    width: 100%;
    margin-left: 0;
  }

  @media ${F.tablet} {
    padding: 1em;
    width: 100%;
    margin-left: 0;
  }
`;function wd({isModal:e,isDatawall:t,config:n}){const r=Pn(),o=Ze(),i=In(),a=Tn(e,t);Ie(()=>{i.displayApp(u())},[]);const s=()=>{r.push({path:ve.Questionnaire,props:{isModal:e,isDatawall:t,config:n}}),i.goToQuestions(u()),o(Pt.proceedToQuestionnaire())},d=()=>{r.push({path:ve.About,props:{isModal:e,isDatawall:t}}),i.goToAboutPage(u())},c=()=>{a.close(),window.__tcfapi("show",2,()=>{},{lazy:!1}),i.goBackToCmp(u())},u=()=>({type:q.EventContextType.MAIN,displayMode:e?q.EventContextDisplayMode.MODAL:q.EventContextDisplayMode.DIV,mode:t?q.EventContextMode.DATAWALL:q.EventContextMode.CLASSIC});return g(Qu,{children:[g(hd,{children:[g(Wu,{children:g(Hu,{level:2,children:e?"Pour continuer sur notre site...":"Pour acc\xE9der au contenu"})}),g("br",{}),g(vd,{children:[g(se,{family:"Poppins",children:"...et vous offrir la m\xEAme exp\xE9rience gratuitement, notre site doit diffuser des contenus et de la publicit\xE9 personnalis\xE9s."}),g("br",{}),g(se,{family:"Poppins",children:["Si vous ne souhaitez pas modifier votre consentement, r\xE9pondez \xE0 quelques questions de temps en temps. Ainsi, nous pourrons continuer \xE0 vous proposer des contenus et de la publicit\xE9 en lien avec vos pr\xE9f\xE9rences mais sans aucun moyen de vous identifier personnellement.",g("br",{}),g("br",{}),g(Je,{underline:!0,fontWeight:600,label:"Pourquoi c\u2019est diff\xE9rent ?",onClick:()=>d()})]})]})]}),e?g(Fu,{children:g($n,{})}):g(zu,{children:g($n,{})}),e?g(md,{children:[g(Bu,{label:"R\xE9pondre \xE0 des questions",onClick:()=>s()}),g(Vu,{label:"Modifier mon consentement",onClick:()=>{c()}})]}):g(bd,{children:[g(Bu,{label:"R\xE9pondre \xE0 des questions",onClick:()=>s()}),g(Vu,{label:"Modifier mon consentement",onClick:()=>{c()}})]})]})}const Sd=N.div`
  overflow: auto;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 2;
`;N.div`
  width: 100%;
  flex: 1;
  margin-right: 0.75em;

  img {
    width: 80%;
    height: auto;
  }
`,N.div`
  width: 100%;
  height: min-content;
  flex: 4;
`,N(Xe)`
  font-size: 1em;
  font-family: Poppins;
  font-weight: semi-bold;
`;const Ed=N.div`
  flex: 1 1 auto;
  margin: 1.5em 0 1em;
`;N(Xe)`
  font-size: 1em;
  font-family: Poppins;
`,N(se)`
  font-size: 0.925em;
  font-family: Poppins;
`,N.span`
  display: inline-flex;
  width: 1.5em;
  height: 1.5em;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: black;
  border-radius: 50%;
  line-height: 0;
  margin-right: 0.5em;
`,N.div`
  align-self: center;
`;const Ad=N(yt)`
  align-self: center;
  width: 35%;
  height: 23px;
  background-color: #3f4fdb;
  color: #fff;
  border-radius: 12px;
  font-family: Poppins;
  font-weight: bold;
  font-size: large;
  margin: 1em 0.5em 1em 0.5em;
  & span:nth-child(n) {
    margin: auto;
  }

  @media${F.fold} {
    width: 35%;
    font-size: x-small;
    font-weight: normal;
    height: auto;
  }

  @media${F.tablet} {
    font-size: medium;
    font-weight: normal;
  }

  @media${F.mobile} {
    font-size: small;
    font-weight: normal;
  }
`,Od=N.div`
  align-self: flex-end;
`;function xd({isModal:e,isDatawall:t,config:n}){const r=Pn(),o=Ze(),i=In(),a=Tn(e,t);Ie(()=>{i.displayApp(u())},[]);const s=()=>{o(q.appState.setIsOver(!0)),i.skipApp(u()),o(Pt.incrementSkipCounter()),a.close()},d=()=>{r.push({path:ve.Questionnaire,props:{isModal:e,isDatawall:t,config:n}}),i.goToQuestions(u()),o(Pt.proceedToQuestionnaire())},c=()=>{r.push({path:ve.About,props:{isModal:e,isDatawall:t}}),i.goToAboutPage(u())},u=()=>({type:q.EventContextType.MAIN,displayMode:e?q.EventContextDisplayMode.MODAL:q.EventContextDisplayMode.DIV,mode:t?q.EventContextMode.DATAWALL:q.EventContextMode.CLASSIC});return g(Qu,{children:[g(Od,{children:g(Je,{label:"Plus tard",underline:!0,fontWeight:600,onClick:()=>s()})}),g(Sd,{children:[g(Wu,{children:g(Hu,{level:2,children:["Naviguer sur notre site sans collecte de vos donn\xE9es ?",g("br",{}),g("br",{}),"C'est possible."]})}),g(Ed,{children:[g(se,{family:"Poppins",children:"R\xE9pondez \xE0 quelques questions basiques de temps en temps."}),g(Je,{underline:!0,fontWeight:500,label:"Dites-moi tout",onClick:()=>c()})]})]}),e?g(Fu,{children:g($n,{})}):g(zu,{children:g($n,{})}),g(Ad,{label:"C\u2019est parti",icon:Zr,iconAlt:"Icon right",onClick:()=>d()})]})}const Gu="https://lite.appconsent.io/v1.6.1/icons/about-icon-dog.svg",Ku="https://lite.appconsent.io/v1.6.1/icons/about-icon-plant.svg",Yu="https://lite.appconsent.io/v1.6.1/icons/about-icon-sit.svg",Pd=N.div`
  padding: 1.5em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  @media ${F.mobile} {
    padding: 2em;
  }

  @media ${F.tablet} {
    padding: 1em;
  }
`;N.div`
  align-self: flex-end;
  margin-bottom: 0.5em;
  
`;const Id=N(Je)`
  color: #3F4FDB;
  font-size: 0.85em;
  font-weight: 500;
  text-decoration: underline;
  font-family: 'Poppins', sans-serif;
  justify-content: flex-start;
  width: 10%
`,Cd=N(Xe)`
  font-size: 1.2em;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
`,Xu=N(Xe)`
  margin-top: 1em;
  font-size: 1em;
  font-family: 'Poppins', sans-serif;
`,kd=N.div`
  flex: 1 1 auto;
  margin: 1.5em 0 1em;
  overflow: auto;
  flex-grow: 2;
  padding-right: 0.5em;
  display: flex;
  flex-direction: column;
  @media ${F.mobile} {
    width: 100%;
  }
`,It=N.img`
  width: 100px;
  
  @media ${F.mobile} {
  width: 75px;
  }
  @media (max-width: 400px) {
  width: 50px;
  }
`,Td=N.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-right: 0.5em;
`,$d=N.ul`
  font-family: 'Poppins', sans-serif;
  padding: 25px;
`,Nd=N.div`
  margin-top: 1em;
  align-self: center;
  font-family: 'Poppins', sans-serif;
  font-size: larger;
`,Rd=N.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 0.5em;
    width: 30%;

    @media ${F.desktop} {
        width: 50%;
    }
    
    @media ${F.tablet} {
        width: 50%;
    }

    @media ${F.mobile} {
        width: 90%;
    }
`;function jd({isModal:e}){const t=Pn();return g(Pd,{children:g(kd,{children:[g(Id,{label:"Retour",fontWeight:500,onClick:()=>t.goBack()}),g("br",{}),g(se,{family:"Poppins",children:"Dites-moi tout"}),g(Cd,{level:2,children:"Am\xE9liorer votre exp\xE9rience, sans collecter vos donn\xE9es"}),g("br",{}),g(Xu,{level:4,children:"Pourquoi me pose-t-on des questions ?"}),g("br",{}),g(se,{family:"Poppins-Medium",weight:500,children:"Parce que vous avez refus\xE9 la collecte de vos donn\xE9es"}),g("br",{}),g(se,{family:"Poppins",children:["Pour vous, la publicit\xE9 et le contenu qui s'affichent sur le site ne seront pas personnalis\xE9s \xE0 votre profil.",g("br",{}),"En r\xE9pondant \xE0 plusieurs de nos questions, vous participez \xE0 la mise place d\u2019un nouveau dispositif anonyme de connaissance de nos audiences. Nous avons besoin de conna\xEEtre un peu notre audience, pour vous sugg\xE9rer des th\xE8mes en fonction de vos pr\xE9f\xE9rences."]}),g("br",{}),g(se,{family:"Poppins-Medium",weight:500,children:"Pour pr\xE9server vos choix, la qualit\xE9 et la gratuit\xE9 du service"}),g("br",{}),g(se,{family:"Poppins",children:"L\u2019exp\xE9rience que nous vous offrons sur notre site est rendue possible \xE0 travers notre mod\xE8le \xE9conomique qui repose sur la publicit\xE9."}),g("br",{}),g(Xu,{level:4,children:"Comment \xE7a marche ?"}),g("br",{}),g(se,{family:"Poppins",children:"Il s\u2019agit d\u2019un dispositif pour la connaissance d\u2019un groupe."}),e?g(Td,{children:[g(It,{src:Gu,alt:"icon man with dog"}),g(It,{src:Ku,alt:"icon woman with plant"}),g(It,{src:Yu,alt:"sitting-reading"})]}):g(Rd,{children:[g(It,{src:Gu,alt:"icon man with dog"}),g(It,{src:Ku,alt:"icon woman with plant"}),g(It,{src:Yu,alt:"sitting-reading"})]}),g(se,{family:"Poppins",children:"\xC0 la diff\xE9rence du suivi individuel, qui fonctionne \xE0 l\u2019aide de traceurs, ces petits fichiers techniques laiss\xE9s sur votre ordinateur pour vous reconna\xEEtre, notre dispositif est anonyme."}),g(se,{family:"Poppins",children:"Nous vous posons de temps en temps 1 ou 2 questions. Vos r\xE9ponses sont :"}),g($d,{children:[g("li",{children:g(se,{family:"Poppins",children:"associ\xE9es \xE0 un groupe de 5 000 autres utilisateurs. Aucune exploitation de vos r\xE9ponses n\u2019est r\xE9alis\xE9e en dessous de ce seuil. Au del\xE0, il est impossible de vous identifier personnellement."})}),g("li",{children:g(se,{family:"Poppins",children:"stock\xE9es que sur votre appareil et n\u2019en sortent jamais. Votre appareil d\xE9duit les contenus et publicit\xE9s \xE0 vous afficher."})})]}),g("br",{}),g(Nd,{children:g(yt,{label:"J\u2019ai compris",onClick:()=>t.goBack()})})]})})}const Md=N.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`,Dd=N.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6em;
  padding-bottom: 0;
  width: 100%;
`,Ld=N.span`
  font-family: 'Poppins', sans-serif;
  margin-right: 1em;
  color: #797979;
  font-size: 0.75em;
  line-height: 1.5;
`,qd=N.div`
  width: 100%;
  height: 100%;
  flex: 1 1 auto;
  overflow: hidden;
`,Bd=N(Je)`
  font-family: 'Poppins', sans-serif;
`,Vd=N(Je)`
  font-family: 'Poppins', sans-serif;
  width: 35%;
  @media${F.mobile} {
    width: 50%;
  }
`,Ud=N(Je)`
  font-family: 'Poppins', sans-serif;
  margin-left: 80%;
  @media${F.mobile} {
    margin-left: 75%;
   }
   
  @media@media(max-width: 369px) { {
    margin-left: 65%;
   }
`;function zd({showLinkToAbout:e=!1,isModal:t,isDatawall:n,config:r}){const[o,i]=Pe(0),a=Pn(),s=In(),d=Tn(t,n),c=Ze(),u=bt(q.questions.currentBatchSelector);if(Ie(()=>{c(q.appState.setIsOver(!1)),u&&e&&s.displayApp(b())},[]),!u)return d.hide(),g("div",{children:"batch not found"});const p=u.questions,l=Object.values(u.questionLogs).filter(P=>P.refused);for(let P=o;P<p.length;P++)if(!l.some(M=>M.questionUuid===p[P].uuid)){i(P);break}const f=o===p.length-1,h=P=>{if(!!P&&(s.refuseQuestion(b(P)),c(q.questions.refuseQuestion(P)),f)){c(q.questions.skipBatch(u.uuid)),c(q.questions.finishBatch(u.uuid)),y(P);const M={batch:u,discardQuestionWithUUID:P.uuid};c(q.webo.submitBatch(M))}},v=(P,M)=>{!P||(i(L=>L+1>=u.questions.length?(a.push(n?{path:ve.MainDatawall,props:{isModal:t,isDatawall:n}}:{path:ve.MainClassic,props:{isModal:t,isDatawall:n}}),L):L+1),!(M!=null&&M.dontSubmitEvent)&&s.answerQuestion(b(P)))},m=()=>{r.sessionOverNotifier&&r.sessionOverNotifier(),c(q.questions.finishBatch(u.uuid));const P={batch:u,discardQuestionWithUUID:void 0};c(q.webo.submitBatch(P)),d.close()},_=P=>{!P||(s.answerQuestion(b(P)),y(P))},y=P=>{a.push({path:ve.Success,props:{handleFinish:m,question:P,isModal:t}})},w=(P,M)=>{var W;c(q.appState.setIsOver(!0)),r.sessionOverNotifier&&r.sessionOverNotifier(),c(q.questions.skipQuestion(M)),s.skipQuestion(b(M));const L={batch:P,discardQuestionWithUUID:M.uuid};f&&((W=P.questionLogs[M.uuid])==null?void 0:W.skipCounter)>=1&&(c(q.questions.finishBatch(P.uuid)),c(q.webo.submitBatch(L))),c(q.questions.skipBatch(P.uuid)),c(q.webo.submitBatch(L)),d.close()};if(!p[o])return g(pe,{});const O=()=>{a.push({path:ve.About,props:{isModal:t,isDatawall:n}}),s.goToAboutPage(b())},b=P=>({type:P?q.EventContextType.QUESTION:q.EventContextType.MAIN,displayMode:t?q.EventContextDisplayMode.MODAL:q.EventContextDisplayMode.DIV,mode:n?q.EventContextMode.DATAWALL:q.EventContextMode.CLASSIC,questionId:P&&P.uuid});return g(Md,{children:[g(Dd,{children:[e&&o===0&&g(Ld,{children:["Am\xE9liorons votre exp\xE9rience, sans collecter vos donn\xE9es.\xA0",g(Bd,{underline:!0,label:"Dites-moi tout",onClick:()=>O()})]}),!n&&(e&&o===0?g(Vd,{label:"Plus tard",underline:!0,onClick:()=>w(u,p[o]),fontWeight:600}):g(Ud,{label:"Plus tard",underline:!0,onClick:()=>w(u,p[o]),fontWeight:600}))]}),g(qd,{children:g(zf,{currentIdx:o,onRefuse:h,onNext:v,onFinish:m,onComplete:_,question:p[o],questionAnswers:u.questionAnswers,total:p.length})})]})}const Fd=N.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  align-items: flex-start;
  justify-content: space-between;
  padding: 3em;
  box-sizing: border-box;

  @media${F.fold} {
    padding: 1em;
  }

  @media${F.mobile} {
    padding: 2em;
  }

  @media${F.tablet} {
    padding: 3em;
  }
`,Wd=N.div`
  flex: 0 0 auto;
  display: flex;
  width: 100%;
  justify-content: space-between;
`,Hd=N(Xe)`
  font-size: 1.3em;
  font-family: Poppins, sans-serif;
  font-weight: 600;
`,Qd=N(Xe)`
  font-size: 1em;
  font-family: Poppins, sans-serif;
  font-weight: 500;
`,Gd=N.div`
  display: flex;
  height: 45%;
  flex-direction: column; 
  justify-content: space-arround;
  align-items: space-arround;
  margin: 2em 0 4em;
  font-weight: 500;
  font-size: larger;
  @media${F.fold} {
    margin: 2em 0 2em;
  }

  @media${F.mobile} {
    margin: 2em 0 3em;
  }
`,Kd=N.div`
  padding-top: 3.5em;
  display: flex;
  flex-direction: column;
`,Yd=N(yt)`
  width: 80%;
  font-family: Poppins,sans-serif;
  font-weight: 500;
  font-size: larger;
  margin: auto;
`,Xd="https://lite.appconsent.io/v1.6.1/icons/success-icon.svg";function Ju({onFinish:e,question:t}){const n=Ze(),r=o=>{n(q.appState.setIsOver(!0)),e(o)};return g(Fd,{children:[g(Wd,{children:[g(Kd,{children:[g(Qd,{level:4,children:"C\u2019est not\xE9 !"}),g(Hd,{level:2,children:"Merci :)"})]}),g("img",{src:Xd,alt:"success icon",style:{height:"100%"}})]}),g(Gd,{children:[g(se,{family:"Poppins-Medium",children:"Vos r\xE9ponses ne sont conserv\xE9es que dans votre appareil."}),g(se,{family:"Poppins-Medium",children:"Nous vous poserons d\u2019autres questions de temps en temps."})]}),g(Yd,{label:"Revenir sur le site",onClick:()=>r(t)})]})}const Jd=N.div`
  width: 50%;
  margin-left: 25%;
  
  & div:nth-child(n){
    padding: 0;
    margin-top: 2em;
  }
  

  @media ${F.mobile} {
    width: 100%;
    margin-left: 0;
  }

  @media ${F.fold} {
    width: 100%;
    margin-left: 0;
  }
`;function Zd({handleFinish:e,question:t,isModal:n}){return g(pe,{children:n?g(Ju,{onFinish:e,question:t}):g(Jd,{children:g(Ju,{onFinish:e,question:t})})})}const ep=[{finished:!1,questionAnswers:{},questionLogs:{},uuid:"abff56782-2029-42f8-88e0-73ec82f1f7eebc",questions:[{batchUuid:"abff56782-2029-42f8-88e0-73ec82f1f7eebc",uuid:"53a7849b-4e6f-48fd-98bc-0ae9060d3991",slug:"gender",type:0,text:{fr:"Dites-nous qui vous \xEAtes..."},options:[{uuid:"4362e7d7-1882-4944-a8f8-a9d1f77aa7be",value:{fr:"Je suis un homme"}},{uuid:"8058cde9-cc13-4e5f-9ffe-3b9a1015f873",value:{fr:"Je suis une femme"}},{uuid:"b11796ac-c051-408a-893a-89e23fdb4e2a",value:{fr:"Je suis non binaire"}}]},{batchUuid:"abff56782-2029-42f8-88e0-73ec82f1f7eebc",uuid:"7ed5c6f4-267f-423e-9e7d-ee76b1834f68",slug:"age",type:0,text:{fr:"Quelle est votre tranche d'\xE2ge ?"},options:[{uuid:"81a56a96-2038-4596-abe7-3c131d76898a",value:{fr:"- 18 ans"}},{uuid:"772d4dbd-4dcd-4086-a6e4-cd887793ba2b",value:{fr:"18-25 ans"}},{uuid:"7fcef330-8192-4f5a-be08-cc621fe44832",value:{fr:"26-35 ans"}},{uuid:"6e753ea1-5f21-425c-ab85-25bbaa11b49a",value:{fr:"36-45 ans"}},{uuid:"b6a4ac16-a2d8-47f9-9b23-d8bdfd154e51",value:{fr:"46-55 ans"}},{uuid:"10c573b8-01a9-4435-83b2-be03e8c79405",value:{fr:"56-65 ans"}},{uuid:"3c440d7e-e0c6-4aa6-bb21-5d9a2367215c",value:{fr:"66-75 ans"}},{uuid:"2255a453-76d2-4ab9-8fb6-56f3bfbd41f6",value:{fr:"+ de 75 ans"}}]}]},{finished:!1,questionAnswers:{},questionLogs:{},uuid:"66053298-39d5-4978-9766-1d9e4f02d58b",questions:[{batchUuid:"66053298-39d5-4978-9766-1d9e4f02d58b",uuid:"9c1acf10-b4b5-4a3e-ba32-dea74e65926f",slug:"occupation",type:0,text:{fr:"Quelle est votre cat\xE9gorie professionnelle ?"},options:[{uuid:"81fef3b9-6fd3-4e63-a7c5-8204a9f615aa",value:{fr:"Agriculteur(rice) exploitant"}},{uuid:"285902bf-55e9-49fa-89ef-672a239cd919",value:{fr:"Artisan, Commer\xE7ant(e), Chef d'entreprise"}},{uuid:"76ddfda8-41d9-4d31-bd08-674f8ae9c217",value:{fr:"Cadre et profession intellectuelle sup\xE9rieure"}},{uuid:"60179acc-4bd6-4afa-a861-e4f9d33f864f",value:{fr:"Profession Interm\xE9diaire"}},{uuid:"47e1e36f-7a9a-48b2-af5e-fe91c3e8001b",value:{fr:"Employ\xE9(e) "}},{uuid:"f3d881c2-8034-4796-a921-0bd0d1289683",value:{fr:"Ouvrier(e)"}},{uuid:"40b52366-2d80-43db-bda1-b2302e9865fa",value:{fr:"Retrait\xE9(e)"}},{uuid:"657b304e-9eca-445b-b9b3-bfe5c76b02c3",value:{fr:"Etudiant(e)"}},{uuid:"71f81141-9985-4a22-be9a-242432e5a713",value:{fr:"Autres personnes sans activit\xE9 professionnelle"}}]}]},{uuid:"9cab8d93-f5d3-4773-8d8d-435ee3404400",finished:!1,questionAnswers:{},questionLogs:{},questions:[{batchUuid:"9cab8d93-f5d3-4773-8d8d-435ee3404400",uuid:"0df0866b-a3aa-41c0-bbaf-14e3c98385ce",slug:"interests",type:0,text:{fr:"Quels sont vos centres d'int\xE9r\xEAts ?"},options:[{type:1,nodes:[{uuid:"7d7028a1-f788-46e7-b268-0e740f37f395",value:{fr:"L'automobile"}},{uuid:"5460664c-a09f-4073-a28d-4bc2cdf77eda",value:{fr:"L'art"}},{uuid:"c494009f-db38-45ec-b830-57bbbc6181d8",value:{fr:"Le bricolage"}},{uuid:"773a5afd-1bf1-49d1-b4ca-373e781e6015",value:{fr:"Le cin\xE9ma, les films"}},{uuid:"52d706f2-dc13-4f29-bb9b-20474e6e3510",value:{fr:"La cuisine"}},{uuid:"3cbd81ca-ea8e-4937-a302-3bc9e320f27c",value:{fr:"Cr\xE9ations & savoir-faire"}},{uuid:"413a6091-d1a3-4c61-b2a4-593c8f4b3cea",value:{fr:"Le jardinage"}},{uuid:"912cc9b1-6eec-4463-851a-c15a21a3c260",value:{fr:"Les jeux vid\xE9os"}},{uuid:"bd3ad1d7-b0f8-4499-b460-2d3322d5a72a",value:{fr:"La lecture"}},{uuid:"58609ea2-7116-4444-becb-06e49ea87d44",value:{fr:"La mode"}},{uuid:"b2393bb3-083d-41be-8dfa-337586e761a1",value:{fr:"Les sorties entre amis"}},{uuid:"a8dd9949-d334-4d52-922a-be5290735699",value:{fr:"Le sport"}},{uuid:"760261bc-0fbd-40f9-9314-ca39cb3f6579",value:{fr:"La technologie"}},{uuid:"da627953-f0dc-44e3-8e11-78cf6c89b342",value:{fr:"Les voyages"}}]},{uuid:"2ae2ef21-34b1-4e9c-87b7-6d269f23c4d2",value:{fr:"Mon centre d'int\xE9r\xEAt est absent"}},{uuid:"6f9358f5-c332-45f0-a3e9-728ac170f66b",value:{fr:"Je n'ai pas de centre d'int\xE9r\xEAt en particulier"}}]},{batchUuid:"9cab8d93-f5d3-4773-8d8d-435ee3404400",uuid:"6f1b9278-c6e8-4f8a-b609-cbeedb75968d",slug:"plansForFuture",type:0,text:{fr:"Quels sont vos projets ?"},options:[{type:1,nodes:[{uuid:"2653f35a-3b5a-48f4-a336-dbdb16465696",value:{fr:"Acheter un v\xE9hicule (voiture/moto, etc...)"}},{uuid:"ebff4484-d937-4f61-ba8f-2121c77e9b7a",value:{fr:"Adopter un animal de compagnie"}},{uuid:"41f7aa45-41da-4e1d-92da-122f4d0a9ced",value:{fr:"D\xE9m\xE9nager"}},{uuid:"66770407-1d6f-4150-b827-2e870d63bd77",value:{fr:"Me mettre au sport"}},{uuid:"629c31b2-51a7-48f8-b244-39a9792d6f7a",value:{fr:"Naissance"}},{uuid:"63adb470-7880-43a5-80ff-f777a9fdfa0f",value:{fr:"Partir en voyage"}},{uuid:"9f4eebac-5f21-4159-9483-4a83602792f4",value:{fr:"Rechercher un emploi"}},{uuid:"1ee1f3e0-85dc-4e19-829a-8310b2fc78a0",value:{fr:"Rechercher un logement (achat/loc)"}},{uuid:"b849ede6-8bb2-4a76-b20f-c59c8e21f52a",value:{fr:"R\xE9nover un bien"}}]},{uuid:"fa4fe480-57d3-4582-9a14-7ea3451745a5",value:{fr:"Je n\u2019ai pas de projet de ce type l\xE0 en cours"}}]}]}];var tp=Eu();const np=Zo`
  /*
  Reset browser default styles
  Reset inherited styles from the host
  Global styles
  Custom styles provided by a client in the Back Office
  */


  /* Reset browser default styles */
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  #app {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    width: 100%;
  }
  
`,rp=Zo`
  /*
  Reset browser default styles
  Reset inherited styles from the host
  Global styles
  Custom styles provided by a client in the Back Office
  */


  /* Reset browser default styles */
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  #app {
    position: inherit;
    width: 100%;
    height: 100%;
  }

  #app > main {
    width: 100%;
    height: 100%;
    overflow: auto;
  }
`;function Zu({config:e,isModal:t,isDatawall:n,store:r,callbackIsOver:o}){const i=Ze(),a=Tn(t,n),s=r.getState().appState.isOver,d=bt(Pt.sessionDraftSelector),c=bt(_=>_.questions.questionsBatches),u=bt(_=>_.app.isOpen),[p,l]=Pe(!1),[f,h]=Pe(!1),[v,m]=Pe(!1);return Ie(()=>{const _=s?e.redisplayTimespanMS?e.redisplayTimespanMS:+"172800000":0,y=e.maxAppSkip?e.maxAppSkip:+"4",w=e.alternatingSessions?e.alternatingSessions:+"1";m(d.showIntro),a.open(e),l(tp.shouldDisplayApp(d,_,y,w,r)),o(e,r),i(Nu.clearEvents()),c.length||i(q.questions.setBatches(ep))},[]),Ie(()=>{h(u&&p)},[u,p]),g(pe,{children:f&&g(Zc,{id:"app",style:{...$c},children:[t&&g(np,{}),!t&&g(rp,{}),g(Ff,{startingPage:d.showIntro?n?{path:ve.MainDatawall,props:{isModal:t,isDatawall:n,config:e}}:{path:ve.MainClassic,props:{isModal:t,isDatawall:n,config:e}}:{path:ve.Questionnaire,props:{showLinkToAbout:!v,isModal:t,isDatawall:n,config:e}},children:{[ve.MainDatawall]:wd,[ve.MainClassic]:xd,[ve.About]:jd,[ve.Questionnaire]:zd,[ve.Success]:Zd}})]})})}const es="_lite";let ts;function ip(e,t){ts=e.subscribe(()=>{t(e.getState().appState.isOver),ts()})}const op=(e,t,n,r,o)=>{var u,p;const i=(p=(u=n==null?void 0:n.attributes.getNamedItem("id"))==null?void 0:u.value)!=null?p:es,a=e[i];let s=t;if(!a||!a.q)throw new Error(`Widget didn't find LoaderObject for instance [${i}]. The loading script was either modified, no call to 'init' method was done or there is conflicting object defined in \`window.${i}\` .`);if(e[`${i}-loaded`])throw new Error(`Widget with name [${i}] was already loaded. This means you have multiple instances with same identifier (e.g. '${es}')`);let d;function c(l){d=e.document.body.appendChild(e.document.createElement("div")),d.setAttribute("id",`${i}-widget`),o(d,l,(h,v)=>{h.sessionOverNotifier&&v.getState().appState.isOver&&h.sessionOverNotifier()})}for(let l=0;l<a.q.length;l++){const f=a.q[l],h=f[0];if(l===0&&h!=="init")throw new Error(`Failed to start Widget [${i}]. 'init' must be called before other methods.`);if(l!==0&&h==="init")continue;switch(h){case"init":{const v=Object.assign(t,f[1]);v.debug&&console.log(`Starting widget [${i}]`,v),s=Object.assign(s,v),e[`${i}-loaded`]=!0;break}case"show":c(s);break;case"session_over":ip(r,f[1]);break;default:console.warn(`Unsupported method [${h}]`,f[1])}}e[i]=(l,...f)=>{switch(l){case"show":c(s);break;default:console.warn(`Unsupported method [${l}]`,f)}}},ap=N.div`
width: 100%;
height: 100%;
`,Fe={debug:!1,options:{isModal:!0,isDatawall:!1,container:"_lite-container",width:"100%",height:"580px"}};op(window,Fe,window.liteWidget,lt,(e,t,n)=>{{const o=new URL("https://lite.appconsent.io/v1.6.1/");let i=new URL("style.css",o);(()=>{((d,c="stylesheet",u=!1)=>{const p=document.createElement("link");p.href=d,p.rel=c,u&&(p.crossOrigin=""),document.head.appendChild(p)})(i.href)})()}let r;e.attachShadow&&(r=e.attachShadow({mode:"open"})),ft(g(Hs,{store:lt,children:g(wc,{target:r!=null?r:e,children:Fe.options.isModal?g(Zu,{config:t,isModal:Fe.options.isModal,isDatawall:Fe.options.isDatawall,store:lt,callbackIsOver:n}):g("div",{className:Fe.options.container,style:{height:Fe.options.height,width:Fe.options.width},children:g(ap,{id:"div-container",children:g(Zu,{config:t,isModal:Fe.options.isModal,isDatawall:Fe.options.isDatawall,store:lt,callbackIsOver:n})})})})}),r!=null?r:e)})})();
