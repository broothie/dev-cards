parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KOaQ":[function(require,module,exports) {
"use strict";function e(e,o,n,r,i,t){return{tag:e,key:o,attrs:n,children:r,text:i,dom:t,domSize:void 0,state:void 0,events:void 0,instance:void 0}}e.normalize=function(o){return Array.isArray(o)?e("[",void 0,void 0,e.normalizeChildren(o),void 0,void 0):null==o||"boolean"==typeof o?null:"object"==typeof o?o:e("#",void 0,void 0,String(o),void 0,void 0)},e.normalizeChildren=function(o){var n=[];if(o.length){for(var r=null!=o[0]&&null!=o[0].key,i=1;i<o.length;i++)if((null!=o[i]&&null!=o[i].key)!==r)throw new TypeError("Vnodes must either always have keys or never have keys!");for(i=0;i<o.length;i++)n[i]=e.normalize(o[i])}return n},module.exports=e;
},{}],"DmV3":[function(require,module,exports) {
"use strict";var r=require("../render/vnode");module.exports=function(){var e,t=arguments[this],s=this+1;if(null==t?t={}:("object"!=typeof t||null!=t.tag||Array.isArray(t))&&(t={},s=this),arguments.length===s+1)e=arguments[s],Array.isArray(e)||(e=[e]);else for(e=[];s<arguments.length;)e.push(arguments[s++]);return r("",t.key,t,e)};
},{"../render/vnode":"KOaQ"}],"xEhD":[function(require,module,exports) {
"use strict";var r=require("../render/vnode"),a=require("./hyperscriptVnode"),e=/(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g,l={},t={}.hasOwnProperty;function s(r){for(var a in r)if(t.call(r,a))return!1;return!0}function n(r){for(var a,t="div",s=[],n={};a=e.exec(r);){var i=a[1],c=a[2];if(""===i&&""!==c)t=c;else if("#"===i)n.id=c;else if("."===i)s.push(c);else if("["===a[3][0]){var o=a[6];o&&(o=o.replace(/\\(["'])/g,"$1").replace(/\\\\/g,"\\")),"class"===a[4]?s.push(o):n[a[4]]=""===o?o:o||!0}}return s.length>0&&(n.className=s.join(" ")),l[r]={tag:t,attrs:n}}function i(a,e){var l=e.attrs,n=r.normalizeChildren(e.children),i=t.call(l,"class"),c=i?l.class:l.className;if(e.tag=a.tag,e.attrs=null,e.children=void 0,!s(a.attrs)&&!s(l)){var o={};for(var u in l)t.call(l,u)&&(o[u]=l[u]);l=o}for(var u in a.attrs)t.call(a.attrs,u)&&"className"!==u&&!t.call(l,u)&&(l[u]=a.attrs[u]);for(var u in null==c&&null==a.attrs.className||(l.className=null!=c?null!=a.attrs.className?String(a.attrs.className)+" "+String(c):c:null!=a.attrs.className?a.attrs.className:null),i&&(l.class=null),l)if(t.call(l,u)&&"key"!==u){e.attrs=l;break}return Array.isArray(n)&&1===n.length&&null!=n[0]&&"#"===n[0].tag?e.text=n[0].children:e.children=n,e}function c(e){if(null==e||"string"!=typeof e&&"function"!=typeof e&&"function"!=typeof e.view)throw Error("The selector must be either a string or a component.");var t=a.apply(1,arguments);return"string"==typeof e&&(t.children=r.normalizeChildren(t.children),"["!==e)?i(l[e]||n(e),t):(t.tag=e,t)}module.exports=c;
},{"../render/vnode":"KOaQ","./hyperscriptVnode":"DmV3"}],"JqTs":[function(require,module,exports) {
"use strict";var e=require("../render/vnode");module.exports=function(r){return null==r&&(r=""),e("<",void 0,void 0,r,void 0,void 0)};
},{"../render/vnode":"KOaQ"}],"EKvv":[function(require,module,exports) {
"use strict";var r=require("../render/vnode"),e=require("./hyperscriptVnode");module.exports=function(){var n=e.apply(0,arguments);return n.tag="[",n.children=r.normalizeChildren(n.children),n};
},{"../render/vnode":"KOaQ","./hyperscriptVnode":"DmV3"}],"ApBG":[function(require,module,exports) {
"use strict";var r=require("./render/hyperscript");r.trust=require("./render/trust"),r.fragment=require("./render/fragment"),module.exports=r;
},{"./render/hyperscript":"xEhD","./render/trust":"JqTs","./render/fragment":"EKvv"}],"a97g":[function(require,module,exports) {
"use strict";var n=function(t){if(!(this instanceof n))throw new Error("Promise must be called with `new`");if("function"!=typeof t)throw new TypeError("executor must be a function");var e=this,r=[],o=[],i=s(r,!0),c=s(o,!1),u=e._instance={resolvers:r,rejectors:o},f="function"==typeof setImmediate?setImmediate:setTimeout;function s(n,t){return function i(s){var h;try{if(!t||null==s||"object"!=typeof s&&"function"!=typeof s||"function"!=typeof(h=s.then))f(function(){t||0!==n.length||console.error("Possible unhandled promise rejection:",s);for(var e=0;e<n.length;e++)n[e](s);r.length=0,o.length=0,u.state=t,u.retry=function(){i(s)}});else{if(s===e)throw new TypeError("Promise can't be resolved w/ itself");l(h.bind(s))}}catch(a){c(a)}}}function l(n){var t=0;function e(n){return function(e){t++>0||n(e)}}var r=e(c);try{n(e(i),r)}catch(o){r(o)}}l(t)};n.prototype.then=function(t,e){var r,o,i=this._instance;function c(n,t,e,c){t.push(function(t){if("function"!=typeof n)e(t);else try{r(n(t))}catch(i){o&&o(i)}}),"function"==typeof i.retry&&c===i.state&&i.retry()}var u=new n(function(n,t){r=n,o=t});return c(t,i.resolvers,r,!0),c(e,i.rejectors,o,!1),u},n.prototype.catch=function(n){return this.then(null,n)},n.prototype.finally=function(t){return this.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){return n.reject(e)})})},n.resolve=function(t){return t instanceof n?t:new n(function(n){n(t)})},n.reject=function(t){return new n(function(n,e){e(t)})},n.all=function(t){return new n(function(n,e){var r=t.length,o=0,i=[];if(0===t.length)n([]);else for(var c=0;c<t.length;c++)!function(c){function u(t){o++,i[c]=t,o===r&&n(i)}null==t[c]||"object"!=typeof t[c]&&"function"!=typeof t[c]||"function"!=typeof t[c].then?u(t[c]):t[c].then(u,e)}(c)})},n.race=function(t){return new n(function(n,e){for(var r=0;r<t.length;r++)t[r].then(n,e)})},module.exports=n;
},{}],"qvWr":[function(require,module,exports) {
var global = arguments[3];
var o=arguments[3],e=require("./polyfill");"undefined"!=typeof window?(void 0===window.Promise?window.Promise=e:window.Promise.prototype.finally||(window.Promise.prototype.finally=e.prototype.finally),module.exports=window.Promise):void 0!==o?(void 0===o.Promise?o.Promise=e:o.Promise.prototype.finally||(o.Promise.prototype.finally=e.prototype.finally),module.exports=o.Promise):module.exports=e;
},{"./polyfill":"a97g"}],"EIvz":[function(require,module,exports) {
"use strict";var e=require("../render/vnode");module.exports=function(t){var n,l=t&&t.document,o={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"};function r(e){return e.attrs&&e.attrs.xmlns||o[e.tag]}function i(e,t){if(e.state!==t)throw new Error("`vnode.state` must not be modified")}function a(e){var t=e.state;try{return this.apply(t,arguments)}finally{i(e,t)}}function u(){try{return l.activeElement}catch(e){return null}}function s(e,t,n,l,o,r,i){for(var a=n;a<l;a++){var u=t[a];null!=u&&f(e,u,o,i,r)}}function f(t,n,o,i,u){var d=n.tag;if("string"==typeof d)switch(n.state={},null!=n.attrs&&D(n.attrs,n,o),d){case"#":!function(e,t,n){t.dom=l.createTextNode(t.children),b(e,t.dom,n)}(t,n,u);break;case"<":c(t,n,i,u);break;case"[":!function(e,t,n,o,r){var i=l.createDocumentFragment();if(null!=t.children){var a=t.children;s(i,a,0,a.length,n,null,o)}t.dom=i.firstChild,t.domSize=i.childNodes.length,b(e,i,r)}(t,n,o,i,u);break;default:!function(t,n,o,i,a){var u=n.tag,f=n.attrs,d=f&&f.is,c=(i=r(n)||i)?d?l.createElementNS(i,u,{is:d}):l.createElementNS(i,u):d?l.createElement(u,{is:d}):l.createElement(u);n.dom=c,null!=f&&function(e,t,n){for(var l in t)z(e,l,null,t[l],n)}(n,f,i);if(b(t,c,a),!w(n)&&(null!=n.text&&(""!==n.text?c.textContent=n.text:n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),null!=n.children)){var v=n.children;s(c,v,0,v.length,o,null,i),"select"===n.tag&&null!=f&&function(e,t){if("value"in t)if(null===t.value)-1!==e.dom.selectedIndex&&(e.dom.value=null);else{var n=""+t.value;e.dom.value===n&&-1!==e.dom.selectedIndex||(e.dom.value=n)}"selectedIndex"in t&&z(e,"selectedIndex",null,t.selectedIndex,void 0)}(n,f)}}(t,n,o,i,u)}else!function(t,n,l,o,r){(function(t,n){var l;if("function"==typeof t.tag.view){if(t.state=Object.create(t.tag),null!=(l=t.state.view).$$reentrantLock$$)return;l.$$reentrantLock$$=!0}else{if(t.state=void 0,null!=(l=t.tag).$$reentrantLock$$)return;l.$$reentrantLock$$=!0,t.state=null!=t.tag.prototype&&"function"==typeof t.tag.prototype.view?new t.tag(t):t.tag(t)}if(D(t.state,t,n),null!=t.attrs&&D(t.attrs,t,n),t.instance=e.normalize(a.call(t.state.view,t)),t.instance===t)throw Error("A view cannot return the vnode it received as argument");l.$$reentrantLock$$=null})(n,l),null!=n.instance?(f(t,n.instance,l,o,r),n.dom=n.instance.dom,n.domSize=null!=n.dom?n.instance.domSize:0):n.domSize=0}(t,n,o,i,u)}var d={caption:"table",thead:"table",tbody:"table",tfoot:"table",tr:"tbody",th:"tr",td:"tr",colgroup:"table",col:"colgroup"};function c(e,t,n,o){var r=t.children.match(/^\s*?<(\w+)/im)||[],i=l.createElement(d[r[1]]||"div");"http://www.w3.org/2000/svg"===n?(i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t.children+"</svg>",i=i.firstChild):i.innerHTML=t.children,t.dom=i.firstChild,t.domSize=i.childNodes.length,t.instance=[];for(var a,u=l.createDocumentFragment();a=i.firstChild;)t.instance.push(a),u.appendChild(a);b(e,u,o)}function v(e,t,n,l,o,r){if(t!==n&&(null!=t||null!=n))if(null==t||0===t.length)s(e,n,0,n.length,l,o,r);else if(null==n||0===n.length)x(e,t,0,t.length);else{var i=null!=t[0]&&null!=t[0].key,a=null!=n[0]&&null!=n[0].key,u=0,d=0;if(!i)for(;d<t.length&&null==t[d];)d++;if(!a)for(;u<n.length&&null==n[u];)u++;if(null===a&&null==i)return;if(i!==a)x(e,t,d,t.length),s(e,n,u,n.length,l,o,r);else if(a){for(var c,v,b,w,S,E=t.length-1,$=n.length-1;E>=d&&$>=u&&(b=t[E],w=n[$],b.key===w.key);)b!==w&&m(e,b,w,l,o,r),null!=w.dom&&(o=w.dom),E--,$--;for(;E>=d&&$>=u&&(c=t[d],v=n[u],c.key===v.key);)d++,u++,c!==v&&m(e,c,v,l,p(t,d,o),r);for(;E>=d&&$>=u&&u!==$&&c.key===w.key&&b.key===v.key;)y(e,b,S=p(t,d,o)),b!==v&&m(e,b,v,l,S,r),++u<=--$&&y(e,c,o),c!==w&&m(e,c,w,l,o,r),null!=w.dom&&(o=w.dom),d++,b=t[--E],w=n[$],c=t[d],v=n[u];for(;E>=d&&$>=u&&b.key===w.key;)b!==w&&m(e,b,w,l,o,r),null!=w.dom&&(o=w.dom),$--,b=t[--E],w=n[$];if(u>$)x(e,t,d,E+1);else if(d>E)s(e,n,u,$+1,l,o,r);else{var z,C,A=o,L=$-u+1,N=new Array(L),T=0,j=0,I=2147483647,M=0;for(j=0;j<L;j++)N[j]=-1;for(j=$;j>=u;j--){null==z&&(z=h(t,d,E+1));var O=z[(w=n[j]).key];null!=O&&(I=O<I?O:-1,N[j-u]=O,b=t[O],t[O]=null,b!==w&&m(e,b,w,l,o,r),null!=w.dom&&(o=w.dom),M++)}if(o=A,M!==E-d+1&&x(e,t,d,E+1),0===M)s(e,n,u,$+1,l,o,r);else if(-1===I)for(T=(C=function(e){for(var t=[0],n=0,l=0,o=0,r=g.length=e.length,o=0;o<r;o++)g[o]=e[o];for(var o=0;o<r;++o)if(-1!==e[o]){var i=t[t.length-1];if(e[i]<e[o])g[o]=i,t.push(o);else{for(n=0,l=t.length-1;n<l;){var a=(n>>>1)+(l>>>1)+(n&l&1);e[t[a]]<e[o]?n=a+1:l=a}e[o]<e[t[n]]&&(n>0&&(g[o]=t[n-1]),t[n]=o)}}n=t.length,l=t[n-1];for(;n-- >0;)t[n]=l,l=g[l];return g.length=0,t}(N)).length-1,j=$;j>=u;j--)v=n[j],-1===N[j-u]?f(e,v,l,r,o):C[T]===j-u?T--:y(e,v,o),null!=v.dom&&(o=n[j].dom);else for(j=$;j>=u;j--)v=n[j],-1===N[j-u]&&f(e,v,l,r,o),null!=v.dom&&(o=n[j].dom)}}else{var D=t.length<n.length?t.length:n.length;for(u=u<d?u:d;u<D;u++)(c=t[u])===(v=n[u])||null==c&&null==v||(null==c?f(e,v,l,r,p(t,u+1,o)):null==v?k(e,c):m(e,c,v,l,p(t,u+1,o),r));t.length>D&&x(e,t,u,t.length),n.length>D&&s(e,n,u,n.length,l,o,r)}}}function m(t,n,l,o,i,u){var s=n.tag;if(s===l.tag){if(l.state=n.state,l.events=n.events,function(e,t){do{if(null!=e.attrs&&"function"==typeof e.attrs.onbeforeupdate){var n=a.call(e.attrs.onbeforeupdate,e,t);if(void 0!==n&&!n)break}if("string"!=typeof e.tag&&"function"==typeof e.state.onbeforeupdate){var n=a.call(e.state.onbeforeupdate,e,t);if(void 0!==n&&!n)break}return!1}while(0);return e.dom=t.dom,e.domSize=t.domSize,e.instance=t.instance,e.attrs=t.attrs,e.children=t.children,e.text=t.text,!0}(l,n))return;if("string"==typeof s)switch(null!=l.attrs&&F(l.attrs,l,o),s){case"#":!function(e,t){e.children.toString()!==t.children.toString()&&(e.dom.nodeValue=t.children);t.dom=e.dom}(n,l);break;case"<":!function(e,t,n,l,o){t.children!==n.children?(S(e,t),c(e,n,l,o)):(n.dom=t.dom,n.domSize=t.domSize,n.instance=t.instance)}(t,n,l,u,i);break;case"[":!function(e,t,n,l,o,r){v(e,t.children,n.children,l,o,r);var i=0,a=n.children;if(n.dom=null,null!=a){for(var u=0;u<a.length;u++){var s=a[u];null!=s&&null!=s.dom&&(null==n.dom&&(n.dom=s.dom),i+=s.domSize||1)}1!==i&&(n.domSize=i)}}(t,n,l,o,i,u);break;default:!function(t,n,l,o){var i=n.dom=t.dom;o=r(n)||o,"textarea"===n.tag&&(null==n.attrs&&(n.attrs={}),null!=n.text&&(n.attrs.value=n.text,n.text=void 0));(function(e,t,n,l){if(null!=n)for(var o in n)z(e,o,t&&t[o],n[o],l);var r;if(null!=t)for(var o in t)null==(r=t[o])||null!=n&&null!=n[o]||C(e,o,r,l)})(n,t.attrs,n.attrs,o),w(n)||(null!=t.text&&null!=n.text&&""!==n.text?t.text.toString()!==n.text.toString()&&(t.dom.firstChild.nodeValue=n.text):(null!=t.text&&(t.children=[e("#",void 0,void 0,t.text,void 0,t.dom.firstChild)]),null!=n.text&&(n.children=[e("#",void 0,void 0,n.text,void 0,void 0)]),v(i,t.children,n.children,l,null,o)))}(n,l,o,u)}else!function(t,n,l,o,r,i){if(l.instance=e.normalize(a.call(l.state.view,l)),l.instance===l)throw Error("A view cannot return the vnode it received as argument");F(l.state,l,o),null!=l.attrs&&F(l.attrs,l,o);null!=l.instance?(null==n.instance?f(t,l.instance,o,i,r):m(t,n.instance,l.instance,o,r,i),l.dom=l.instance.dom,l.domSize=l.instance.domSize):null!=n.instance?(k(t,n.instance),l.dom=void 0,l.domSize=0):(l.dom=n.dom,l.domSize=n.domSize)}(t,n,l,o,i,u)}else k(t,n),f(t,l,o,u,i)}function h(e,t,n){for(var l=Object.create(null);t<n;t++){var o=e[t];if(null!=o){var r=o.key;null!=r&&(l[r]=t)}}return l}var g=[];function p(e,t,n){for(;t<e.length;t++)if(null!=e[t]&&null!=e[t].dom)return e[t].dom;return n}function y(e,t,n){var o=l.createDocumentFragment();!function e(t,n,l){for(;null!=l.dom&&l.dom.parentNode===t;){if("string"!=typeof l.tag){if(null!=(l=l.instance))continue}else if("<"===l.tag)for(var o=0;o<l.instance.length;o++)n.appendChild(l.instance[o]);else if("["!==l.tag)n.appendChild(l.dom);else if(1===l.children.length){if(null!=(l=l.children[0]))continue}else for(var o=0;o<l.children.length;o++){var r=l.children[o];null!=r&&e(t,n,r)}break}}(e,o,t),b(e,o,n)}function b(e,t,n){null!=n?e.insertBefore(t,n):e.appendChild(t)}function w(e){if(null==e.attrs||null==e.attrs.contenteditable&&null==e.attrs.contentEditable)return!1;var t=e.children;if(null!=t&&1===t.length&&"<"===t[0].tag){var n=t[0].children;e.dom.innerHTML!==n&&(e.dom.innerHTML=n)}else if(null!=e.text||null!=t&&0!==t.length)throw new Error("Child node of a contenteditable must be trusted");return!0}function x(e,t,n,l){for(var o=n;o<l;o++){var r=t[o];null!=r&&k(e,r)}}function k(e,t){var n,l,o,r=0,u=t.state;"string"!=typeof t.tag&&"function"==typeof t.state.onbeforeremove&&(null!=(o=a.call(t.state.onbeforeremove,t))&&"function"==typeof o.then&&(r=1,n=o));t.attrs&&"function"==typeof t.attrs.onbeforeremove&&(null!=(o=a.call(t.attrs.onbeforeremove,t))&&"function"==typeof o.then&&(r|=2,l=o));if(i(t,u),r){if(null!=n){var s=function(){1&r&&((r&=2)||f())};n.then(s,s)}if(null!=l){s=function(){2&r&&((r&=1)||f())};l.then(s,s)}}else $(t),E(e,t);function f(){i(t,u),$(t),E(e,t)}}function S(e,t){for(var n=0;n<t.instance.length;n++)e.removeChild(t.instance[n])}function E(e,t){for(;null!=t.dom&&t.dom.parentNode===e;){if("string"!=typeof t.tag){if(null!=(t=t.instance))continue}else if("<"===t.tag)S(e,t);else{if("["!==t.tag&&(e.removeChild(t.dom),!Array.isArray(t.children)))break;if(1===t.children.length){if(null!=(t=t.children[0]))continue}else for(var n=0;n<t.children.length;n++){var l=t.children[n];null!=l&&E(e,l)}}break}}function $(e){if("string"!=typeof e.tag&&"function"==typeof e.state.onremove&&a.call(e.state.onremove,e),e.attrs&&"function"==typeof e.attrs.onremove&&a.call(e.attrs.onremove,e),"string"!=typeof e.tag)null!=e.instance&&$(e.instance);else{var t=e.children;if(Array.isArray(t))for(var n=0;n<t.length;n++){var l=t[n];null!=l&&$(l)}}}function z(e,t,n,o,r){if("key"!==t&&"is"!==t&&null!=o&&!A(t)&&(n!==o||function(e,t){return"value"===t||"checked"===t||"selectedIndex"===t||"selected"===t&&e.dom===u()||"option"===e.tag&&e.dom.parentNode===l.activeElement}(e,t)||"object"==typeof o)){if("o"===t[0]&&"n"===t[1])return O(e,t,o);if("xlink:"===t.slice(0,6))e.dom.setAttributeNS("http://www.w3.org/1999/xlink",t.slice(6),o);else if("style"===t)I(e.dom,n,o);else if(L(e,t,r)){if("value"===t){if(("input"===e.tag||"textarea"===e.tag)&&e.dom.value===""+o&&e.dom===u())return;if("select"===e.tag&&null!==n&&e.dom.value===""+o)return;if("option"===e.tag&&null!==n&&e.dom.value===""+o)return}"input"===e.tag&&"type"===t?e.dom.setAttribute(t,o):e.dom[t]=o}else"boolean"==typeof o?o?e.dom.setAttribute(t,""):e.dom.removeAttribute(t):e.dom.setAttribute("className"===t?"class":t,o)}}function C(e,t,n,l){if("key"!==t&&"is"!==t&&null!=n&&!A(t))if("o"!==t[0]||"n"!==t[1]||A(t))if("style"===t)I(e.dom,n,null);else if(!L(e,t,l)||"className"===t||"value"===t&&("option"===e.tag||"select"===e.tag&&-1===e.dom.selectedIndex&&e.dom===u())||"input"===e.tag&&"type"===t){var o=t.indexOf(":");-1!==o&&(t=t.slice(o+1)),!1!==n&&e.dom.removeAttribute("className"===t?"class":t)}else e.dom[t]=null;else O(e,t,void 0)}function A(e){return"oninit"===e||"oncreate"===e||"onupdate"===e||"onremove"===e||"onbeforeremove"===e||"onbeforeupdate"===e}function L(e,t,n){return void 0===n&&(e.tag.indexOf("-")>-1||null!=e.attrs&&e.attrs.is||"href"!==t&&"list"!==t&&"form"!==t&&"width"!==t&&"height"!==t)&&t in e.dom}var N=/[A-Z]/g;function T(e){return"-"+e.toLowerCase()}function j(e){return"-"===e[0]&&"-"===e[1]?e:"cssFloat"===e?"float":e.replace(N,T)}function I(e,t,n){if(t===n);else if(null==n)e.style.cssText="";else if("object"!=typeof n)e.style.cssText=n;else if(null==t||"object"!=typeof t)for(var l in e.style.cssText="",n){null!=(o=n[l])&&e.style.setProperty(j(l),String(o))}else{for(var l in n){var o;null!=(o=n[l])&&(o=String(o))!==String(t[l])&&e.style.setProperty(j(l),o)}for(var l in t)null!=t[l]&&null==n[l]&&e.style.removeProperty(j(l))}}function M(){this._=n}function O(e,t,n){if(null!=e.events){if(e.events[t]===n)return;null==n||"function"!=typeof n&&"object"!=typeof n?(null!=e.events[t]&&e.dom.removeEventListener(t.slice(2),e.events,!1),e.events[t]=void 0):(null==e.events[t]&&e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}else null==n||"function"!=typeof n&&"object"!=typeof n||(e.events=new M,e.dom.addEventListener(t.slice(2),e.events,!1),e.events[t]=n)}function D(e,t,n){"function"==typeof e.oninit&&a.call(e.oninit,t),"function"==typeof e.oncreate&&n.push(a.bind(e.oncreate,t))}function F(e,t,n){"function"==typeof e.onupdate&&n.push(a.bind(e.onupdate,t))}return M.prototype=Object.create(null),M.prototype.handleEvent=function(e){var t,n=this["on"+e.type];"function"==typeof n?t=n.call(e.currentTarget,e):"function"==typeof n.handleEvent&&n.handleEvent(e),this._&&!1!==e.redraw&&(0,this._)(),!1===t&&(e.preventDefault(),e.stopPropagation())},function(t,l,o){if(!t)throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");var r=[],i=u(),a=t.namespaceURI;null==t.vnodes&&(t.textContent=""),l=e.normalizeChildren(Array.isArray(l)?l:[l]);var s=n;try{n="function"==typeof o?o:void 0,v(t,t.vnodes,l,r,null,"http://www.w3.org/1999/xhtml"===a?void 0:a)}finally{n=s}t.vnodes=l,null!=i&&u()!==i&&"function"==typeof i.focus&&i.focus();for(var f=0;f<r.length;f++)r[f]()}};
},{"../render/vnode":"KOaQ"}],"IxYe":[function(require,module,exports) {
"use strict";module.exports=require("./render/render")(window);
},{"./render/render":"EIvz"}],"S1W2":[function(require,module,exports) {
"use strict";var n=require("../render/vnode");module.exports=function(e,r,o){var t=[],c=!1,u=!1;function i(){if(c)throw new Error("Nested m.redraw.sync() call");c=!0;for(var r=0;r<t.length;r+=2)try{e(t[r],n(t[r+1]),l)}catch(u){o.error(u)}c=!1}function l(){u||(u=!0,r(function(){u=!1,i()}))}return l.sync=i,{mount:function(r,o){if(null!=o&&null==o.view&&"function"!=typeof o)throw new TypeError("m.mount(element, component) expects a component, not a vnode");var c=t.indexOf(r);c>=0&&(t.splice(c,2),e(r,[],l)),null!=o&&(t.push(r,o),e(r,n(o),l))},redraw:l}};
},{"../render/vnode":"KOaQ"}],"rFQv":[function(require,module,exports) {
"use strict";var e=require("./render");module.exports=require("./api/mount-redraw")(e,requestAnimationFrame,console);
},{"./render":"IxYe","./api/mount-redraw":"S1W2"}],"iESc":[function(require,module,exports) {
"use strict";module.exports=function(e){if("[object Object]"!==Object.prototype.toString.call(e))return"";var t=[];for(var o in e)r(o,e[o]);return t.join("&");function r(e,o){if(Array.isArray(o))for(var n=0;n<o.length;n++)r(e+"["+n+"]",o[n]);else if("[object Object]"===Object.prototype.toString.call(o))for(var n in o)r(e+"["+n+"]",o[n]);else t.push(encodeURIComponent(e)+(null!=o&&""!==o?"="+encodeURIComponent(o):""))}};
},{}],"iiLr":[function(require,module,exports) {
"use strict";module.exports=Object.assign||function(t,c){c&&Object.keys(c).forEach(function(e){t[e]=c[e]})};
},{}],"CGWz":[function(require,module,exports) {
"use strict";var e=require("../querystring/build"),r=require("./assign");module.exports=function(n,t){if(/:([^\/\.-]+)(\.{3})?:/.test(n))throw new SyntaxError("Template parameter names *must* be separated");if(null==t)return n;var i=n.indexOf("?"),l=n.indexOf("#"),s=l<0?n.length:l,u=i<0?s:i,a=n.slice(0,u),c={};r(c,t);var d=a.replace(/:([^\/\.-]+)(\.{3})?/g,function(e,r,n){return delete c[r],null==t[r]?e:n?t[r]:encodeURIComponent(String(t[r]))}),o=d.indexOf("?"),f=d.indexOf("#"),g=f<0?d.length:f,m=o<0?g:o,p=d.slice(0,m);i>=0&&(p+=n.slice(i,s)),o>=0&&(p+=(i<0?"?":"&")+d.slice(o,g));var x=e(c);return x&&(p+=(i<0&&o<0?"?":"&")+x),l>=0&&(p+=n.slice(l)),f>=0&&(p+=(l<0?"":"&")+d.slice(f)),p};
},{"../querystring/build":"iESc","./assign":"iiLr"}],"zq68":[function(require,module,exports) {
"use strict";var e=require("../pathname/build");module.exports=function(t,n,r){var o=0;function a(e){return new n(e)}function i(t){return function(o,i){"string"!=typeof o?(i=o,o=o.url):null==i&&(i={});var s=new n(function(n,r){t(e(o,i.params),i,function(e){if("function"==typeof i.type)if(Array.isArray(e))for(var t=0;t<e.length;t++)e[t]=new i.type(e[t]);else e=new i.type(e);n(e)},r)});if(!0===i.background)return s;var c=0;function u(){0==--c&&"function"==typeof r&&r()}return function e(t){var n=t.then;t.constructor=a;t.then=function(){c++;var r=n.apply(t,arguments);return r.then(u,function(e){if(u(),0===c)throw e}),e(r)};return t}(s)}}function s(e,t){for(var n in e.headers)if({}.hasOwnProperty.call(e.headers,n)&&t.test(n))return!0;return!1}return a.prototype=n.prototype,a.__proto__=n,{request:i(function(e,n,r,o){var a,i=null!=n.method?n.method.toUpperCase():"GET",c=n.body,u=!(null!=n.serialize&&n.serialize!==JSON.serialize||c instanceof t.FormData),p=n.responseType||("function"==typeof n.extract?"":"json"),f=new t.XMLHttpRequest,l=!1,d=f,y=f.abort;for(var h in f.abort=function(){l=!0,y.call(this)},f.open(i,e,!1!==n.async,"string"==typeof n.user?n.user:void 0,"string"==typeof n.password?n.password:void 0),u&&null!=c&&!s(n,/^content-type$/i)&&f.setRequestHeader("Content-Type","application/json; charset=utf-8"),"function"==typeof n.deserialize||s(n,/^accept$/i)||f.setRequestHeader("Accept","application/json, text/*"),n.withCredentials&&(f.withCredentials=n.withCredentials),n.timeout&&(f.timeout=n.timeout),f.responseType=p,n.headers)({}).hasOwnProperty.call(n.headers,h)&&f.setRequestHeader(h,n.headers[h]);f.onreadystatechange=function(t){if(!l&&4===t.target.readyState)try{var a,i=t.target.status>=200&&t.target.status<300||304===t.target.status||/^file:\/\//i.test(e),s=t.target.response;if("json"===p?t.target.responseType||"function"==typeof n.extract||(s=JSON.parse(t.target.responseText)):p&&"text"!==p||null==s&&(s=t.target.responseText),"function"==typeof n.extract?(s=n.extract(t.target,n),i=!0):"function"==typeof n.deserialize&&(s=n.deserialize(s)),i)r(s);else{try{a=t.target.responseText}catch(u){a=s}var c=new Error(a);c.code=t.target.status,c.response=s,o(c)}}catch(u){o(u)}},"function"==typeof n.config&&(f=n.config(f,n,e)||f)!==d&&(a=f.abort,f.abort=function(){l=!0,a.call(this)}),null==c?f.send():"function"==typeof n.serialize?f.send(n.serialize(c)):c instanceof t.FormData?f.send(c):f.send(JSON.stringify(c))}),jsonp:i(function(e,n,r,a){var i=n.callbackName||"_mithril_"+Math.round(1e16*Math.random())+"_"+o++,s=t.document.createElement("script");t[i]=function(e){delete t[i],s.parentNode.removeChild(s),r(e)},s.onerror=function(){delete t[i],s.parentNode.removeChild(s),a(new Error("JSONP request failed"))},s.src=e+(e.indexOf("?")<0?"?":"&")+encodeURIComponent(n.callbackKey||"callback")+"="+encodeURIComponent(i),t.document.documentElement.appendChild(s)})}};
},{"../pathname/build":"CGWz"}],"RRGC":[function(require,module,exports) {
"use strict";var e=require("./promise/promise"),r=require("./mount-redraw");module.exports=require("./request/request")(window,e,r.redraw);
},{"./promise/promise":"qvWr","./mount-redraw":"rFQv","./request/request":"zq68"}],"EOj8":[function(require,module,exports) {
"use strict";module.exports=function(e){if(""===e||null==e)return{};"?"===e.charAt(0)&&(e=e.slice(1));for(var r=e.split("&"),t={},l={},n=0;n<r.length;n++){var o=r[n].split("="),i=decodeURIComponent(o[0]),s=2===o.length?decodeURIComponent(o[1]):"";"true"===s?s=!0:"false"===s&&(s=!1);var a=i.split(/\]\[?|\[/),p=l;i.indexOf("[")>-1&&a.pop();for(var u=0;u<a.length;u++){var c=a[u],f=a[u+1],v=""==f||!isNaN(parseInt(f,10));if(""===c)null==t[i=a.slice(0,u).join()]&&(t[i]=Array.isArray(p)?p.length:0),c=t[i]++;else if("__proto__"===c)break;if(u===a.length-1)p[c]=s;else{var d=Object.getOwnPropertyDescriptor(p,c);null!=d&&(d=d.value),null==d&&(p[c]=d=v?[]:{}),p=d}}}return l};
},{}],"qhDU":[function(require,module,exports) {
"use strict";var e=require("../querystring/parse");module.exports=function(r){var t=r.indexOf("?"),i=r.indexOf("#"),n=i<0?r.length:i,s=t<0?n:t,l=r.slice(0,s).replace(/\/{2,}/g,"/");return l?("/"!==l[0]&&(l="/"+l),l.length>1&&"/"===l[l.length-1]&&(l=l.slice(0,-1))):l="/",{path:l,params:t<0?{}:e(r.slice(t+1,n))}};
},{"../querystring/parse":"EOj8"}],"QACc":[function(require,module,exports) {
"use strict";var r=require("./parse");module.exports=function(e){var t=r(e),n=Object.keys(t.params),a=[],u=new RegExp("^"+t.path.replace(/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,function(r,e,t){return null==e?"\\"+r:(a.push({k:e,r:"..."===t}),"..."===t?"(.*)":"."===t?"([^/]+)\\.":"([^/]+)"+(t||""))})+"$");return function(r){for(var e=0;e<n.length;e++)if(t.params[n[e]]!==r.params[n[e]])return!1;if(!a.length)return u.test(r.path);var p=u.exec(r.path);if(null==p)return!1;for(e=0;e<a.length;e++)r.params[a[e].k]=a[e].r?p[e+1]:decodeURIComponent(p[e+1]);return!0}};
},{"./parse":"qhDU"}],"lz3H":[function(require,module,exports) {
"use strict";var e=require("../render/vnode"),t=require("../render/hyperscript"),r=require("../promise/promise"),n=require("../pathname/build"),o=require("../pathname/parse"),a=require("../pathname/compileTemplate"),i=require("../pathname/assign"),u={};module.exports=function(l,c){var s;function f(e,t,r){if(e=n(e,t),null!=s){s();var o=r?r.state:null,a=r?r.title:null;r&&r.replace?l.history.replaceState(o,a,w.prefix+e):l.history.pushState(o,a,w.prefix+e)}else l.location.href=w.prefix+e}var p,h,d,m,v=u,y=w.SKIP={};function w(t,n,g){if(null==t)throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");var x,E=0,b=Object.keys(g).map(function(e){if("/"!==e[0])throw new SyntaxError("Routes must start with a `/`");if(/:([^\/\.-]+)(\.{3})?:/.test(e))throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");return{route:e,component:g[e],check:a(e)}}),k="function"==typeof setImmediate?setImmediate:setTimeout,q=r.resolve(),S=!1;if(s=null,null!=n){var K=o(n);if(!b.some(function(e){return e.check(K)}))throw new ReferenceError("Default route doesn't match any known routes")}function L(){S=!1;var e=l.location.hash;"#"!==w.prefix[0]&&(e=l.location.search+e,"?"!==w.prefix[0]&&"/"!==(e=l.location.pathname+e)[0]&&(e="/"+e));var t=e.concat().replace(/(?:%[a-f89][a-f0-9])+/gim,decodeURIComponent).slice(w.prefix.length),r=o(t);function a(){if(t===n)throw new Error("Could not resolve default route "+n);f(n,null,{replace:!0})}i(r.params,l.history.state),function e(n){for(;n<b.length;n++)if(b[n].check(r)){var o=b[n].component,i=b[n].route,u=o,l=m=function(a){if(l===m){if(a===y)return e(n+1);p=null==a||"function"!=typeof a.view&&"function"!=typeof a?"div":a,h=r.params,d=t,m=null,v=o.render?o:null,2===E?c.redraw():(E=2,c.redraw.sync())}};return void(o.view||"function"==typeof o?(o={},l(u)):o.onmatch?q.then(function(){return o.onmatch(r.params,t,i)}).then(l,a):l("div"))}a()}(0)}return s=function(){S||(S=!0,k(L))},"function"==typeof l.history.pushState?(x=function(){l.removeEventListener("popstate",s,!1)},l.addEventListener("popstate",s,!1)):"#"===w.prefix[0]&&(s=null,x=function(){l.removeEventListener("hashchange",L,!1)},l.addEventListener("hashchange",L,!1)),c.mount(t,{onbeforeupdate:function(){return!(!(E=E?2:1)||u===v)},oncreate:L,onremove:x,view:function(){if(E&&u!==v){var t=[e(p,h.key,h)];return v&&(t=v.render(t[0])),t}}})}return w.set=function(e,t,r){null!=m&&((r=r||{}).replace=!0),m=null,f(e,t,r)},w.get=function(){return d},w.prefix="#!",w.Link={view:function(e){var r,n,o=e.attrs.options,a={};i(a,e.attrs),a.selector=a.options=a.key=a.oninit=a.oncreate=a.onbeforeupdate=a.onupdate=a.onbeforeremove=a.onremove=null;var u=t(e.attrs.selector||"a",a,e.children);return(u.attrs.disabled=Boolean(u.attrs.disabled))?(u.attrs.href=null,u.attrs["aria-disabled"]="true",u.attrs.onclick=null):(r=u.attrs.onclick,n=u.attrs.href,u.attrs.href=w.prefix+n,u.attrs.onclick=function(e){var t;"function"==typeof r?t=r.call(e.currentTarget,e):null==r||"object"!=typeof r||"function"==typeof r.handleEvent&&r.handleEvent(e),!1===t||e.defaultPrevented||0!==e.button&&0!==e.which&&1!==e.which||e.currentTarget.target&&"_self"!==e.currentTarget.target||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||(e.preventDefault(),e.redraw=!1,w.set(n,null,o))}),u}},w.param=function(e){return h&&null!=e?h[e]:h},w};
},{"../render/vnode":"KOaQ","../render/hyperscript":"xEhD","../promise/promise":"qvWr","../pathname/build":"CGWz","../pathname/parse":"qhDU","../pathname/compileTemplate":"QACc","../pathname/assign":"iiLr"}],"Wylx":[function(require,module,exports) {
"use strict";var r=require("./mount-redraw");module.exports=require("./api/router")(window,r);
},{"./mount-redraw":"rFQv","./api/router":"lz3H"}],"hSyH":[function(require,module,exports) {
"use strict";var r=require("./hyperscript"),e=require("./request"),u=require("./mount-redraw"),t=function(){return r.apply(this,arguments)};t.m=r,t.trust=r.trust,t.fragment=r.fragment,t.mount=u.mount,t.route=require("./route"),t.render=require("./render"),t.redraw=u.redraw,t.request=e.request,t.jsonp=e.jsonp,t.parseQueryString=require("./querystring/parse"),t.buildQueryString=require("./querystring/build"),t.parsePathname=require("./pathname/parse"),t.buildPathname=require("./pathname/build"),t.vnode=require("./render/vnode"),t.PromisePolyfill=require("./promise/polyfill"),module.exports=t;
},{"./hyperscript":"ApBG","./request":"RRGC","./mount-redraw":"rFQv","./route":"Wylx","./render":"IxYe","./querystring/parse":"EOj8","./querystring/build":"iESc","./pathname/parse":"qhDU","./pathname/build":"CGWz","./render/vnode":"KOaQ","./promise/polyfill":"a97g"}],"cZF8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.draw_card=exports.get_game=exports.new_game=void 0;var e=t(require("mithril"));function t(e){return e&&e.__esModule?e:{default:e}}var r="https://catan-aktwynnwda-uc.a.run.app",a=function(t){return e.default.request({method:"POST",url:"".concat(r,"/games"),params:{type:t}})};exports.new_game=a;var u=function(t){return e.default.request({method:"GET",url:"".concat(r,"/games/").concat(t)})};exports.get_game=u;var n=function(t){return e.default.request({method:"GET",url:"".concat(r,"/games/").concat(t,"/draw")})};exports.draw_card=n;
},{"mithril":"hSyH"}],"nqs3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("mithril")),t=require("./api");function n(e){return e&&e.__esModule?e:{default:e}}var u=function(){var n="",u=function(n){return function(){(0,t.new_game)(n).then(function(t){return e.default.route.set("/game/".concat(t.code))})}},a=function(){(0,t.get_game)(n).then(function(t){return e.default.route.set("/game/".concat(t.code))})},o=function(e){e.preventDefault(),a()},r=function(e){n=e.target.value,"Enter"===e.key&&a()},i=r,c=r;return{view:function(){return(0,e.default)("div",[(0,e.default)("h1","Catan Dev Card Deck Simulator"),(0,e.default)("div",[(0,e.default)("div",[(0,e.default)("h2","Start a new game"),(0,e.default)("button",{onclick:u("original")},"New Original Deck"),(0,e.default)("button",{onclick:u("expansion")},"New Expansion Deck")]),(0,e.default)("div",[(0,e.default)("h2","...or join a game"),(0,e.default)("input",{type:"text",placeholder:"abc123",onkeydown:r,oninput:i,onchange:c}),(0,e.default)("button",{onclick:o},"Find Game")])])])}}};exports.default=u;
},{"mithril":"hSyH","./api":"cZF8"}],"IEHn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=n(require("mithril")),t=require("./api");function n(e){return e&&e.__esModule?e:{default:e}}var r=function(){var n=e.default.route.param("code");n||e.default.route.set("/");var r=null,a=function(){(0,t.draw_card)(n).then(function(e){return alert("You drew a ".concat(e.card,"!"))}).then(u)},u=function(){(0,t.get_game)(n).then(function(e){return r=e.remaining})};return{oninit:function(){u()},onremove:function(){clearInterval(null)},view:function(){return(0,e.default)("div",[(0,e.default)("h1","Game ".concat(n)),(0,e.default)("p","Dev cards remaining: ".concat(r)),(0,e.default)("button",{onclick:a},"Draw a card")])}}};exports.default=r;
},{"mithril":"hSyH","./api":"cZF8"}],"Focm":[function(require,module,exports) {
"use strict";var e=u(require("mithril")),t=u(require("./js/home")),r=u(require("./js/game"));function u(e){return e&&e.__esModule?e:{default:e}}document.addEventListener("DOMContentLoaded",function(){var u=document.getElementById("root");e.default.route(u,"/",{"/":t.default,"/game/:code":r.default})});
},{"mithril":"hSyH","./js/home":"nqs3","./js/game":"IEHn"}]},{},["Focm"], null)
//# sourceMappingURL=dist/src.3c01a7a4.js.map