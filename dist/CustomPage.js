!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("CustomPage",[],t):"object"==typeof exports?exports.CustomPage=t():e.CustomPage=t()}(window,function(){return function(e){var t=window.webpackHotUpdateCustomPage;window.webpackHotUpdateCustomPage=function(e,n){!function(e,t){if(!w[e]||!v[e])return;for(var n in v[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--m&&0===y&&O()}(e,n),t&&t(e,n)};var n,r=!0,o="f2140f9ae9e27c2e22d2",i=1e4,s={},a=[],l=[];function c(e){var t=C[e];if(!t)return H;var r=function(r){return t.hot.active?(C[r]?-1===C[r].parents.indexOf(e)&&C[r].parents.push(e):(a=[e],n=r),-1===t.children.indexOf(r)&&t.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),H(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(t){H[e]=t}}};for(var i in H)Object.prototype.hasOwnProperty.call(H,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===p&&h("prepare"),y++,H.e(e).then(t,function(e){throw t(),e});function t(){y--,"prepare"===p&&(x[e]||E(e),0===y&&0===m&&O())}},r.t=function(e,t){return 1&t&&(e=r(e)),H.t(e,-2&t)},r}function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:P,apply:L,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var t=u.indexOf(e);t>=0&&u.splice(t,1)},data:s[e]};return n=void 0,t}var u=[],p="idle";function h(e){p=e;for(var t=0;t<u.length;t++)u[t].call(null,e)}var f,g,b,m=0,y=0,x={},v={},w={};function k(e){return+e+""===e?+e:e}function P(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,h("check"),(t=i,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=H.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;v={},x={},w=e.c,b=e.h,h("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});g={};return E(0),"prepare"===p&&0===y&&0===m&&O(),t});var t}function E(e){w[e]?(v[e]=!0,m++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+o+".hot-update.js",t.appendChild(n)}(e)):x[e]=!0}function O(){h("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return L(r)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(k(n));e.resolve(t)}}function L(t){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,r,i,l,c;function d(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,s=o.chain;if((l=C[i])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:s,moduleId:i};for(var a=0;a<l.parents.length;a++){var c=l.parents[a],d=C[c];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:s.concat([c]),moduleId:i,parentId:c};-1===t.indexOf(c)&&(d.hot._acceptedDependencies[i]?(n[c]||(n[c]=[]),u(n[c],[i])):(delete n[c],t.push(c),r.push({chain:s.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var f={},m=[],y={},x=function(){console.warn("[HMR] unexpected require("+P.moduleId+") to disposed module")};for(var v in g)if(Object.prototype.hasOwnProperty.call(g,v)){var P;c=k(v);var E=!1,O=!1,L=!1,j="";switch((P=g[v]?d(c):{type:"disposed",moduleId:v}).chain&&(j="\nUpdate propagation: "+P.chain.join(" -> ")),P.type){case"self-declined":t.onDeclined&&t.onDeclined(P),t.ignoreDeclined||(E=new Error("Aborted because of self decline: "+P.moduleId+j));break;case"declined":t.onDeclined&&t.onDeclined(P),t.ignoreDeclined||(E=new Error("Aborted because of declined dependency: "+P.moduleId+" in "+P.parentId+j));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(P),t.ignoreUnaccepted||(E=new Error("Aborted because "+c+" is not accepted"+j));break;case"accepted":t.onAccepted&&t.onAccepted(P),O=!0;break;case"disposed":t.onDisposed&&t.onDisposed(P),L=!0;break;default:throw new Error("Unexception type "+P.type)}if(E)return h("abort"),Promise.reject(E);if(O)for(c in y[c]=g[c],u(m,P.outdatedModules),P.outdatedDependencies)Object.prototype.hasOwnProperty.call(P.outdatedDependencies,c)&&(f[c]||(f[c]=[]),u(f[c],P.outdatedDependencies[c]));L&&(u(m,[P.moduleId]),y[c]=x)}var I,M=[];for(r=0;r<m.length;r++)c=m[r],C[c]&&C[c].hot._selfAccepted&&M.push({module:c,errorHandler:C[c].hot._selfAccepted});h("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var N,_,D=m.slice();D.length>0;)if(c=D.pop(),l=C[c]){var S={},A=l.hot._disposeHandlers;for(i=0;i<A.length;i++)(n=A[i])(S);for(s[c]=S,l.hot.active=!1,delete C[c],delete f[c],i=0;i<l.children.length;i++){var U=C[l.children[i]];U&&((I=U.parents.indexOf(c))>=0&&U.parents.splice(I,1))}}for(c in f)if(Object.prototype.hasOwnProperty.call(f,c)&&(l=C[c]))for(_=f[c],i=0;i<_.length;i++)N=_[i],(I=l.children.indexOf(N))>=0&&l.children.splice(I,1);for(c in h("apply"),o=b,y)Object.prototype.hasOwnProperty.call(y,c)&&(e[c]=y[c]);var T=null;for(c in f)if(Object.prototype.hasOwnProperty.call(f,c)&&(l=C[c])){_=f[c];var R=[];for(r=0;r<_.length;r++)if(N=_[r],n=l.hot._acceptedDependencies[N]){if(-1!==R.indexOf(n))continue;R.push(n)}for(r=0;r<R.length;r++){n=R[r];try{n(_)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:_[r],error:e}),t.ignoreErrored||T||(T=e)}}}for(r=0;r<M.length;r++){var B=M[r];c=B.module,a=[c];try{H(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||T||(T=n),T||(T=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||T||(T=e)}}return T?(h("fail"),Promise.reject(T)):(h("idle"),new Promise(function(e){e(m)}))}var C={};function H(t){if(C[t])return C[t].exports;var n=C[t]={i:t,l:!1,exports:{},hot:d(t),parents:(l=a,a=[],l),children:[]};return e[t].call(n.exports,n,n.exports,c(t)),n.l=!0,n.exports}return H.m=e,H.c=C,H.d=function(e,t,n){H.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,t){if(1&t&&(e=H(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(H.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)H.d(n,r,function(t){return e[t]}.bind(null,r));return n},H.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(t,"a",t),t},H.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},H.p="",H.h=function(){return o},c(6)(H.s=6)}([function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.custom-page-box {\n  width: auto;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  color: #bbbec4;\n}\n.custom-page-box .cpage-ul {\n  display: flex;\n}\n.custom-page-box .cpage-ul li {\n  min-width: 24px;\n  height: 24px;\n  line-height: 23px;\n  background-color: #282828;\n  border: 1px solid #383838;\n  margin-right: 4px;\n  color: #bbbec4;\n  text-align: center;\n  user-select: none;\n  cursor: pointer;\n  padding: 0 5px;\n}\n.custom-page-box .cpage-ul li span {\n  pointer-events: none;\n}\n.custom-page-box .cpage-ul .cpage-point {\n  cursor: default;\n  pointer-events: none;\n  background-color: transparent;\n  border-color: transparent;\n}\n.custom-page-box .cpage-ul .cpage-pre,\n.custom-page-box .cpage-ul .cpage-next {\n  position: relative;\n}\n.custom-page-box .cpage-ul .cpage-pre span,\n.custom-page-box .cpage-ul .cpage-next span {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border: 2px solid #ffffff;\n  border-right: none;\n  border-bottom: none;\n  transform: translateX(-2px) translateY(8px) rotate(-45deg);\n}\n.custom-page-box .cpage-ul .cpage-next span {\n  transform: translateX(-4px) translateY(8px) rotate(135deg);\n}\n.custom-page-box .cpage-ul .cpage-item-disabled {\n  cursor: not-allowed;\n}\n.custom-page-box .cpage-ul .cpage-item-disabled span {\n  border-color: #666666;\n}\n.custom-page-box .cpage-ul li:hover:not(.cpage-item-selected):not(.cpage-item-disabled) span {\n  color: #2d8cf0;\n  border-color: #2d8cf0;\n}\n.custom-page-box .cpage-ul .cpage-item-selected {\n  color: #ffffff;\n  background-color: #2d8cf0;\n}\n.custom-page-box .cpage-goto-input {\n  padding: 1px 7px;\n  height: 24px;\n  width: 44px;\n  display: inline-block;\n  line-height: 1;\n  border: 1px solid #383838;\n  color: #bbbec4;\n  background-color: #282828;\n  background-image: none;\n  position: relative;\n  cursor: text;\n}\n.custom-page-box > label {\n  margin: 0 4px;\n}\n.custom-page-box * {\n  font-size: 12px;\n  box-sizing: border-box !important;\n}\n.custom-page-box ul {\n  list-style: none;\n}\n.custom-page-select {\n  width: 200px;\n  height: 24px;\n  position: relative;\n  padding-left: 10px;\n  background-color: #282828;\n  color: #bbbec4;\n  border: 1px solid #383838;\n  font-size: 12px;\n  box-sizing: border-box;\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n}\n.custom-page-select .custom-page-display {\n  width: 100%;\n  height: 100%;\n  padding-right: 17px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  line-height: 32px;\n}\n.custom-page-select .custom-page-display:after {\n  content: "";\n  border: 6px solid #bbbec4;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-bottom-color: transparent;\n  position: absolute;\n  right: 10px;\n  top: 45%;\n  pointer-events: none;\n}\n.custom-page-select ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  position: fixed;\n  z-index: 555;\n  width: 100%;\n  background: #383838;\n  overflow: auto;\n  height: 0;\n  transition: opacity 0.2s ease-in-out;\n}\n.custom-page-select li {\n  width: 100%;\n  height: 24px;\n  line-height: 19px;\n  padding: 6px 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.custom-page-select li.selected {\n  color: #fff;\n  background: #0096ff;\n}\n.custom-page-select li:not(.selected):hover {\n  background: #666666;\n}\n.custom-page-select * {\n  box-sizing: border-box !important;\n}\n.custom-page-display-ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  left: 0;\n  position: fixed;\n  z-index: 555;\n  width: 100%;\n  background: #383838;\n  overflow: auto;\n  height: 0;\n  transition: opacity 0.2s ease-in-out;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  -ms-user-select: none;\n  font-size: 12px;\n  box-shadow: #5a5959 0px 0px 1px 0px;\n}\n.custom-page-display-ul li {\n  width: 100%;\n  height: 24px;\n  line-height: 25px;\n  padding: 0px 10px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #bbbec4;\n}\n.custom-page-display-ul li.selected {\n  color: #fff;\n  background: #0096ff;\n}\n.custom-page-display-ul li:not(.selected):hover {\n  background: #666666;\n}\n.custom-page-display-ul * {\n  box-sizing: border-box !important;\n}\n',""])},function(e,t){e.exports='<div class="custom-page-box">\r\n    <ul class="cpage-ul">\r\n        <li class="cpage-item"></li>\r\n    </ul>\r\n    <div class="cpage-select-box"></div>\r\n    <label>跳至</label>\r\n    <input class="cpage-goto-input"/>\r\n    <label>页</label>\r\n</div>'},function(e,t,n){var r=n(0);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(4)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(0,function(){var t=n(0);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)}),e.hot.dispose(function(){i()})},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];null!=s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),l=null,c=0,d=[],u=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(y(r.parts[s],t))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(y(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:a}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],s=t.base?i[0]+t.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function f(e,t){var n=a(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(e.insertAt.before,n);n.insertBefore(t,o)}}function g(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function b(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return m(t,e.attrs),f(e,t),t}function m(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function y(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=c++;n=l||(l=b(t)),r=w.bind(null,n,s,!1),o=w.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",m(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=u(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,t),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=b(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){g(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var s=n[o];(a=i[s.id]).refs--,r.push(a)}e&&p(h(e,t),t);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete i[a.id]}}}};var x,v=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=v(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r);var i=class{constructor(e,t=200,n=26,r=200,o=24){this.callBack=[],this._selectIndex=0,this.root=document.createElement("div"),this.root.classList.add("custom-page-select"),this.root.innerHTML='<div class="custom-page-display"></div><ul class="custom-page-display-ul"></ul>',this.dislabel=this.root.querySelector(".custom-page-display"),this.ul=this.root.querySelector("ul"),this.liList=[],this.dataList=e;let i=0;e.forEach((e,t)=>{let n=document.createElement("li");n.innerHTML=e.label,n.order=t,this.liList.push(n),this.ul.appendChild(n),i+=o,n.addEventListener("click",this.itemClick.bind(this))}),this.ulHeight=i,this.ul.style.height="0",this.ul.style.opacity="0",this.ul.style.maxHeight=r+"px","number"==typeof t&&(t+="px"),this.ul.style.width=t,this.root.style.width=t,this.root.style.height=n+"px",this.dislabel.style.lineHeight=n+"px",this.dislabel.addEventListener("click",this.clickHandler.bind(this)),document.addEventListener("mousedown",this.documentdownHandler.bind(this)),this.selectedIndex=0}clickHandler(){if(0===parseInt(this.ul.style.height)){this.ul.style.height=this.ulHeight+"px",this.ul.style.opacity="1";let e=this.root.getBoundingClientRect(),t=e.x,n=e.y+this.root.offsetHeight,r=document.body.offsetWidth,o=document.body.offsetHeight;t=Math.min(t,r-this.root.offsetWidth),o<100&&(o=document.documentElement.clientHeight),n+this.ul.offsetHeight>o&&(n=e.y-this.ul.offsetHeight),this.ul.style.left=t+"px",this.ul.style.top=n+"px",this.ul.style.width=this.root.offsetWidth+"px",this.ul.style.zIndex=this.getMaxZindex(),document.body.appendChild(this.ul)}else this.ul.style.height="0",this.ul.style.opacity="0",this.root.appendChild(this.ul)}documentdownHandler(e){this.root===e.target||this.ul===e.target||this.dislabel===e.target||this.ul.contains(e.target)||(this.ul.style.height="0",this.ul.style.opacity="0",this.root.appendChild(this.ul))}itemClick(e){let t=e.target.order||0;this.selectedIndex=t,this.callBack.forEach(e=>{"change"===e.eventName&&e.callback(this.getValue())}),this.ul.style.height="0",this.ul.style.opacity="0",this.root.appendChild(this.ul)}get selectedIndex(){return this._selectIndex}set selectedIndex(e){e=Math.max(e,0),e=Math.min(e,this.dataList.length-1),this.dislabel.innerHTML=this.dataList[e].label,this._selectIndex=e,this.liList.forEach(t=>{t.order===e?t.classList.add("selected"):t.classList.remove("selected")})}getValue(){return this.dataList[this._selectIndex].value}setValue(e){for(let t=0;t<this.dataList.length;t++)if(this.dataList[t].value===e){this.selectedIndex=t;break}}on(e,t){this.callBack.push({eventName:e,callback:t})}off(e,t){for(let n=0;n<this.callBack.length;n++)this.callBack[n].eventName===e&&this.callBack[n].callback===t&&(this.callBack.splice(n,1),n--)}getMaxZindex(){let e=document.body,t=e.children||e.childNodes,n=0;for(let e=0;e<t.length;e++){let r=t[e],o=parseInt(this.getClass(r,"z-index")),i=parseInt(r.style.zIndex)||o;isNaN(i)||i>n&&(n=i)}return n+=10}getClass(e,t){return e.currentStyle?e.currentStyle[t]:getComputedStyle(e,!1)[t]}};n(2);t.default=class{constructor(e,t,n){let r=document.createElement("div");r.innerHTML=o.a,this.root=r.querySelector(".custom-page-box"),this.curPage=0,this.totalNum=0;let s=[];(e||[10,20,30,40]).forEach(e=>{s.push({label:e+"条/页",value:e})}),this.rowNum=s[0].value,this.maxNum=t||5,this.callback=n,this.ulPage=this.root.querySelector(".cpage-ul");let a=this.root.querySelector(".cpage-select-box");this.select=new i(s,80),a.appendChild(this.select.root),this.inputPage=this.root.querySelector(".cpage-goto-input"),this.ulPage.addEventListener("click",this.ulPageClickHandler.bind(this)),this.select.on("change",this.selectChange.bind(this)),this.inputPage.addEventListener("keypress",this.inputKeydownHandler.bind(this))}selectChange(){this.rowNum=this.select.getValue(),this.callback&&this.callback(this.curPage,this.rowNum)}inputKeydownHandler(e){if("13"==e.keyCode){let e=parseInt(this.inputPage.value);isNaN(e)&&(e=1),this.curPage=e,this.setPage(this.curPage,this.totalNum),this.inputPage.blur(),this.callback&&this.callback(this.curPage,this.rowNum)}}setRowPage(e){this.select.setValue(e),this.rowNum=this.select.getValue()}setPage(e,t=0){this.totalNum=t;let n=Math.ceil(this.totalNum/this.rowNum);n=Math.max(1,n),e=Math.min(e,n),e=Math.max(e,1),this.curPage=e;let r=this.curPage,o=n,i=[];i.push({order:0,type:"pre",isCur:!1,isDisable:1===r});let s=r-~~(this.maxNum/2),a=r+~~(this.maxNum/2);s<1&&(a+=1-s,s=1),s>o-(this.maxNum-1)&&(s=o-(this.maxNum-1))<1&&(a+=1-s,s=1),a>o&&(a=o);for(var l=s;l<=a;l++)l==s&&o>this.maxNum&&s>1?i.push({type:"item",order:1,isCur:1==r},{type:"point",order:0,isCur:!1}):l==a&&o>this.maxNum&&a<o?i.push({type:"point",order:0,isCur:!1},{type:"item",order:o,isCur:r==o}):i.push({type:"item",order:l,isCur:l==r});i.push({type:"next",order:0,isCur:!1,isDisable:r===o}),this.inputPage.value=this.curPage,this.ulPage.innerHTML="";for(let e=0;e<i.length;e++){let t=i[e],n=document.createElement("li"),r=document.createElement("span");n.appendChild(r),t.isDisable&&n.classList.add("cpage-item-disabled"),"pre"===t.type?(n.classList.add("cpage-pre"),n.setAttribute("title","上一页")):"next"===t.type?(n.classList.add("cpage-next"),n.setAttribute("title","下一页")):"point"===t.type?(n.classList.add("cpage-point"),r.innerHTML="..."):"item"===t.type&&(n.classList.add("cpage-item"),t.isCur&&n.classList.add("cpage-item-selected"),r.innerHTML=t.order,n.setAttribute("title",t.order)),n.pageOrder=t.order,n.pageType=t.type,n.isDisable=!!t.isDisable,this.ulPage.appendChild(n)}}ulPageClickHandler(e){let t=e.target;if(t.isDisable)return;let n=this.curPage;"item"===t.pageType?n=t.pageOrder:"pre"===t.pageType?n--:"next"===t.pageType&&n++,n!==this.curPage&&(this.curPage=n,this.setPage(this.curPage,this.totalNum),this.callback&&this.callback(this.curPage,this.rowNum))}}}]).default});