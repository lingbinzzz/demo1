/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */
var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function _(t){return null!=t&&t==t.window}function $(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function M(t){return D(t)&&!_(t)&&Object.getPrototypeOf(t)==Object.prototype}function R(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"http://h5.dianping.com/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(M(i[e])||A(i[e]))?(M(i[e])&&!M(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||"",r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?"true"==t||("false"==t?!1:"null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):R(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!$(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!$(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,""),"string"==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if("className"in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}}):this},removeClass:function(e){return this.each(function(n){if("className"in this){if(e===t)return W(this,"");i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s["inner"+i]:$(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&&0===t.active++&&p(e,null,"ajaxStart")}function m(e){e.global&&!--t.active&&p(e,null,"ajaxStop")}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void p(e,n,"ajaxSend",[t,e])}function v(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),p(n,r,"ajaxSuccess",[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),p(i,o,"ajaxError",[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,"ajaxComplete",[e,n]),m(n)}function b(){}function w(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function j(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/,l=n.createElement("a");l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?v(f[0],l,i,r):y(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),g(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&&(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement("a"),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+"//"+l.host!=a.protocol+"//"+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&&(u="jsonp"),o.cache!==!1&&(e&&e.cache===!0||"script"!=u&&"jsonp"!=u)||(o.url=E(o.url,"_="+Date.now())),"jsonp"==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+"=?":o.jsonp===!1?"":"callback=?")),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&&s.promise(S),o.crossDomain||m("X-Requested-With","XMLHttpRequest"),m("Accept",h||"*/*"),(h=o.mimeType||h)&&(h.indexOf(",")>-1&&(h=h.split(",",2)[0]),S.overrideMimeType&&S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&&o.data&&"GET"!=o.type.toUpperCase())&&m("Content-Type",o.contentType||"application/x-www-form-urlencoded"),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status>=200&&S.status<300||304==S.status||0==S.status&&"file:"==x){u=u||w(o.mimeType||S.getResponseHeader("content-type")),e=S.responseText;try{"script"==u?(1,eval)(e):"xml"==u?e=S.responseXML:"json"==u&&(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,"parsererror",S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?"error":"abort",S,o,s)}},g(S,o)===!1)return S.abort(),y(null,"abort",S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N="async"in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout>0&&(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,"timeout",S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(T(e)+"="+T(n))},C(i,e,n),i.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
;(function($, undefined){
  var prefix = '', eventPrefix,
    vendors = { Webkit: 'webkit', Moz: '', O: 'o' },
    testEl = document.createElement('div'),
    supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
    transform,
    transitionProperty, transitionDuration, transitionTiming, transitionDelay,
    animationName, animationDuration, animationTiming, animationDelay,
    cssReset = {}

  function dasherize(str) { return str.replace(/([a-z])([A-Z])/, '$1-$2').toLowerCase() }
  function normalizeEvent(name) { return eventPrefix ? eventPrefix + name : name.toLowerCase() }

  $.each(vendors, function(vendor, event){
    if (testEl.style[vendor + 'TransitionProperty'] !== undefined) {
      prefix = '-' + vendor.toLowerCase() + '-'
      eventPrefix = event
      return false
    }
  })

  transform = prefix + 'transform'
  cssReset[transitionProperty = prefix + 'transition-property'] =
  cssReset[transitionDuration = prefix + 'transition-duration'] =
  cssReset[transitionDelay    = prefix + 'transition-delay'] =
  cssReset[transitionTiming   = prefix + 'transition-timing-function'] =
  cssReset[animationName      = prefix + 'animation-name'] =
  cssReset[animationDuration  = prefix + 'animation-duration'] =
  cssReset[animationDelay     = prefix + 'animation-delay'] =
  cssReset[animationTiming    = prefix + 'animation-timing-function'] = ''

  $.fx = {
    off: (eventPrefix === undefined && testEl.style.transitionProperty === undefined),
    speeds: { _default: 400, fast: 200, slow: 600 },
    cssPrefix: prefix,
    transitionEnd: normalizeEvent('TransitionEnd'),
    animationEnd: normalizeEvent('AnimationEnd')
  }

  $.fn.animate = function(properties, duration, ease, callback, delay){
    if ($.isFunction(duration))
      callback = duration, ease = undefined, duration = undefined
    if ($.isFunction(ease))
      callback = ease, ease = undefined
    if ($.isPlainObject(duration))
      ease = duration.easing, callback = duration.complete, delay = duration.delay, duration = duration.duration
    if (duration) duration = (typeof duration == 'number' ? duration :
                    ($.fx.speeds[duration] || $.fx.speeds._default)) / 1000
    if (delay) delay = parseFloat(delay) / 1000
    return this.anim(properties, duration, ease, callback, delay)
  }

  $.fn.anim = function(properties, duration, ease, callback, delay){
    var key, cssValues = {}, cssProperties, transforms = '',
        that = this, wrappedCallback, endEvent = $.fx.transitionEnd,
        fired = false

    if (duration === undefined) duration = $.fx.speeds._default / 1000
    if (delay === undefined) delay = 0
    if ($.fx.off) duration = 0

    if (typeof properties == 'string') {
      // keyframe animation
      cssValues[animationName] = properties
      cssValues[animationDuration] = duration + 's'
      cssValues[animationDelay] = delay + 's'
      cssValues[animationTiming] = (ease || 'linear')
      endEvent = $.fx.animationEnd
    } else {
      cssProperties = []
      // CSS transitions
      for (key in properties)
        if (supportedTransforms.test(key)) transforms += key + '(' + properties[key] + ') '
        else cssValues[key] = properties[key], cssProperties.push(dasherize(key))

      if (transforms) cssValues[transform] = transforms, cssProperties.push(transform)
      if (duration > 0 && typeof properties === 'object') {
        cssValues[transitionProperty] = cssProperties.join(', ')
        cssValues[transitionDuration] = duration + 's'
        cssValues[transitionDelay] = delay + 's'
        cssValues[transitionTiming] = (ease || 'linear')
      }
    }

    wrappedCallback = function(event){
      if (typeof event !== 'undefined') {
        if (event.target !== event.currentTarget) return // makes sure the event didn't bubble from "below"
        $(event.target).unbind(endEvent, wrappedCallback)
      } else
        $(this).unbind(endEvent, wrappedCallback) // triggered by setTimeout

      fired = true
      $(this).css(cssReset)
      callback && callback.call(this)
    }
    if (duration > 0){
      this.bind(endEvent, wrappedCallback)
      // transitionEnd is not always firing on older Android phones
      // so make sure it gets fired
      setTimeout(function(){
        if (fired) return
        wrappedCallback.call(that)
      }, ((duration + delay) * 1000) + 25)
    }

    // trigger page reflow so new elements can animate
    this.size() && this.get(0).clientLeft

    this.css(cssValues)

    if (duration <= 0) setTimeout(function() {
      that.each(function(){ wrappedCallback.call(this) })
    }, 0)

    return this
  }

  testEl = null
})(Zepto)

;(function($, undefined){
  var document = window.document, docElem = document.documentElement,
    origShow = $.fn.show, origHide = $.fn.hide, origToggle = $.fn.toggle

  function anim(el, speed, opacity, scale, callback) {
    if (typeof speed == 'function' && !callback) callback = speed, speed = undefined
    var props = { opacity: opacity }
    if (scale) {
      props.scale = scale
      el.css($.fx.cssPrefix + 'transform-origin', '0 0')
    }
    return el.animate(props, speed, null, callback)
  }

  function hide(el, speed, scale, callback) {
    return anim(el, speed, 0, scale, function(){
      origHide.call($(this))
      callback && callback.call(this)
    })
  }

  $.fn.show = function(speed, callback) {
    origShow.call(this)
    if (speed === undefined) speed = 0
    else this.css('opacity', 0)
    return anim(this, speed, 1, '1,1', callback)
  }

  $.fn.hide = function(speed, callback) {
    if (speed === undefined) return origHide.call(this)
    else return hide(this, speed, '0,0', callback)
  }

  $.fn.toggle = function(speed, callback) {
    if (speed === undefined || typeof speed == 'boolean')
      return origToggle.call(this, speed)
    else return this.each(function(){
      var el = $(this)
      el[el.css('display') == 'none' ? 'show' : 'hide'](speed, callback)
    })
  }

  $.fn.fadeTo = function(speed, opacity, callback) {
    return anim(this, speed, opacity, null, callback)
  }

  $.fn.fadeIn = function(speed, callback) {
    var target = this.css('opacity')
    if (target > 0) this.css('opacity', 0)
    else target = 1
    return origShow.call(this).fadeTo(speed, target, callback)
  }

  $.fn.fadeOut = function(speed, callback) {
    return hide(this, speed, null, callback)
  }

  $.fn.fadeToggle = function(speed, callback) {
    return this.each(function(){
      var el = $(this)
      el[
        (el.css('opacity') == 0 || el.css('display') == 'none') ? 'fadeIn' : 'fadeOut'
      ](speed, callback)
    })
  }

})(Zepto)

;(function(w){
    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var lazyAttr = 'lazy-src';

    var ImgReady = function () {
        function ImgReady() {
            _classCallCheck(this, ImgReady);
        }

        _createClass(ImgReady, null, [{
            key: 'check',
            value: function check(selector, ready, error) {
                var _this = this;

                /* 图片预加载 */
                var list = typeof selector === 'string' ? $(selector) : selector;

                list.forEach(function (item) {
                    item.onerror = function () {
                        error && error.call(item);
                        item = item.onload = item.onerror = null;
                    };

                    if (item.complete) {
                        setTimeout(function (item) {
                            ready && ready.call(item);
                        }, 0);
                    } else {
                        $(item).on('load', function (evt) {
                            ready && ready.call(_this);
                        });
                    }
                });
            }
        }, {
            key: 'throttle',
            value: function throttle(selector, resolve) {
                var loadnum = 4;

                /* 图片限流加载 */
                var imgTimeObj = null;

                var list = typeof selector === 'string' ? $(selector) : selector;
                var iLen = list.length;
                var iOffset = 0;

                function loadLoop(snum) {
                    imgTimeObj = null;

                    for (var i = snum; i < snum + loadnum && i < iLen; i++) {
                        var $curEl = list.eq(i);
                        $curEl.attr('src', $curEl.attr(lazyAttr)).removeAttr(lazyAttr);
                    }

                    if (iOffset < iLen) {
                        imgTimeObj = setTimeout(function () {
                            iOffset += loadnum;
                            loadLoop(iOffset);
                        }, 10);
                    } else {
                        resolve();
                    }
                }

                loadLoop(0);
            }
        }, {
            key: 'lazyload',
            value: function lazyload(images, opt) {
                /* 图片懒加载 opt.offset: 提前加载距离 */
                opt = opt || {};
                var offset = opt.offset || 0;
                var els = images.get().filter(function (el) {
                    return !!$(el).attr(lazyAttr);
                }); //==> array
                var len = els.length;
                var action = function action() {
                    var currentTop = $(window).scrollTop();
                    var currentDown = $(window).scrollTop() + window.innerHeight + offset;
                    for (var i = 0, l = els.length; i < l; i++) {
                        var el = $(els[i]);
                        if (el.attr(lazyAttr)) {
                            var elTop = $(el).offset().top;
                            // 通过判断elTop是否大于0 临时解决隐藏图片也被加载的问题
                            if (elTop > 0 && currentDown >= elTop && elTop >= currentTop) {
                                el.attr('src', el.attr(lazyAttr)).removeAttr(lazyAttr);
                                len--;
                            }
                        }
                    }
                    if (len <= 0) {
                        window.removeEventListener('scroll', action, false);
                    }
                };
                window.addEventListener('load', action, false);
                window.addEventListener('scroll', action, false);
                action();
            }
        }]);

        return ImgReady;
    }();

    w.ImgReady = ImgReady;
})(this);

(function($){
    var WIN = $(window), pageIndex = 0, contentWrap = null,
        pageWrap = null, inAnimate = false, isAndroid = false,
        chosenIdol = -1, puzzleObj = null, puzzleTime = 30, puzzleTimeObj = null,
        tipused = false, playTime = 0, pauseTime = 0, puzzleCompleted = false,
        live = 3, state = false, i=0,
        winSize = {
            w: 320,
            h: 400
        }, pageChain = [
        {
            el: '#secZero',
            chain: [
                {
                    el: '.flash-box img:nth-child(1)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(0).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(2)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(1).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(3)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(2).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(4)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(3).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(5)',
                    type: 2,
                    delay:100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(4).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(6)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(5).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(7)',
                    type: 2,
                    delay:100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(6).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(8)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(7).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(9)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(8).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(10)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(9).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(11)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(10).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(12)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(11).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(13)',
                    type: 2,
                    delay:100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(12).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(14)',
                    type: 2,
                    delay: 100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(13).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(15)',
                    type: 2,
                    delay:100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(14).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    }]
                },
                {
                    el: '.flash-box img:nth-child(16)',
                    type: 2,
                    delay:100,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(15).css({
                    		"WebkitTransform":"translate3d(0,0,0)",
							"Transform" :"translate3d(0,0,0)"
                    	})
                    	$(".flash-box img").removeClass("active");
                    }]
                },
                {
                    el: '.flash-box img:nth-child(17)',
                    type: 2,
                    delay:100,
                    animato: ['active']
                },
                {
                    el: '.flash-box img:nth-child(18)',
                    type: 2,
                    delay: 200,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(16).removeClass("active")
                    }]
                },
                {
                    el: '.flash-box img:nth-child(19)',
                    type: 2,
                    delay: 200,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(17).removeClass("active")
                    }]
                },
                {
                    el: '.flash-box img:nth-child(20)',
                    type: 2,
                    delay: 200,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(18).removeClass("active")
                    }]
                },
                {
                    el: '.flash-box img:nth-child(21)',
                    type: 2,
                    delay: 200,
                    animato: ['active',function(){
                    	$(".flash-box img").eq(19).removeClass("active")
                    }]
                },
                {
                    el: '.flash-box',
                    type: 2,
                    delay: 200,
                    animato: [function(){
                    	$(".flash-box img").eq(20).removeClass("active")
                    	setInterval(function(){
                    		i++;
							$(".choose-con-des>img").eq(i).addClass("active").siblings().removeClass("active")
                    	},100)
                    	setTimeout(function(){
                    		toNextPage(1);
                    	},400)
                    }]
                }
            ],
            pageDelay: 0,
            done: false
        },
        {
            el: '#secOne',
            pageDelay: 0,
            done: false
        },
        {
            el: '#secSecond',
            pageDelay: 0,
            done: false
        },
        {
            el: '#secForth',
            pageDelay: 0,
            done: false
        },
        {
            el: '#secFifth',
            pageDelay: 0,
            done: false
        },
        {
            el: '#secSixth',
            pageDelay: 0,
            done: false
        },
        {
            el: '#secSix',
            pageDelay: 0,
            done: false
        }];
    function rePosition(){
        var iRate = WIN.width()/640,
            iHRate = window.innerHeight/960;
        $('.J_sprite').each(function(idx,item){
            var con = $(item),
                iWidth = con.data('width'),
                iHeight = con.data('height'),
                styleReset = {},
                iPos = [];
            
            if(iWidth && iHeight){
                styleReset = {
                    width: parseInt(iWidth)*iRate,
                    height: parseInt(iHeight)*iRate
                };
            }
            if(!!con.data('pos')){
                iPos = con.data('pos').split('|');
                if(iPos.length === 3 ){
                    styleReset.bottom = parseInt(iPos[2])*iRate;
                    if((WIN.height()/WIN.width()<=1.5)){
                        styleReset.bottom = styleReset.bottom/2.5;
                    }
                }else {
                    styleReset.top = parseInt(iPos[0])*iRate;
                }
                styleReset.left = parseInt(iPos[1])*iRate;
            }
            if(!!con.data('middle')){
                styleReset.top = '50%';
                styleReset.marginTop = - parseInt(iHeight)*iRate/2;
            }
            con.css(styleReset);
        });
    }
    function countDown(){
    	state =true;
    	if (puzzleTime<10) {
    		$('#second').text("0"+puzzleTime--);
    	} else {
    		$('#second').text(puzzleTime--);
    	}
        
        if(!!puzzleTimeObj){
            clearTimeout(puzzleTimeObj);
        }
        if(puzzleTime >= 0){
            puzzleTimeObj = setTimeout(countDown, 1000);
        }else {
            endGame();
            state = false;
        }
    }
    function toNextPage(p){
        if(inAnimate) return;
        pageIndex += p;

        if(pageIndex < 0){
            pageIndex = 0;
            return;
        } else if(pageIndex >= pageChain.length){
            pageIndex = pageChain.length - 1;
            return;
        }
        inAnimate = true;
        if(pageIndex == 1 || p < -1){
            pageWrap.css('margin-top', 0 - (winSize.h*pageIndex));
            setPageAnim();
        }else if(isAndroid){
            $(pageChain[pageIndex].el).find('.container').show(function(){
                pageWrap.animate({
                    'margin-top': 0 - (winSize.h*pageIndex)
                },{
                    duration: 'slow',
                    easing: 'ease',
                    complete: function(){
                        setPageAnim();
                    }
                });
            });
        }
        else {
            pageWrap.animate({
                'margin-top': 0 - (winSize.h*pageIndex)
            },{
                duration: 'slow',
                easing: 'ease',
                complete: function(){
                    setPageAnim();
                }
            });
        }
        
        if (pageIndex === 2) {
        	 $(".life-box").hide()
        };
        
        if(pageIndex === 3) {
            $('.J_chosen_preview').each(function(idx,item){
                $(item).find('.chosen-img').eq(chosenIdol).addClass('active').siblings().removeClass("active");
            });
           $(".life-box").show()
            $('#dialog-tips .tips-img').removeClass('active').eq(chosenIdol).addClass('active');
            $('.J_puzzle_group').removeClass('active').eq(chosenIdol).addClass('active');
            puzzleObj = new Dragpuzzle($('.J_puzzle_container'), function(){
                puzzleCompleted = true;
                endGame();
            });
            puzzleTime = 45;
            tipused = false;
            $('.J_check_tips').removeClass('disabled');
            $('.J_puzzle_group .puzzle-item').removeClass('completed');
        }else if(pageIndex === 4){
            puzzleObj.puzzleStart();
            playTime = new Date();
            $('#second').text(puzzleTime);
            countDown();
        }else if(pageIndex === 5){
            $(".life-box").hide()
        }
    }
    function endGame(){
        if(!!puzzleTimeObj){
            clearTimeout(puzzleTimeObj);
        }
        if(puzzleCompleted){
            playTime = (new Date() - playTime - pauseTime)/1000;
            $('.success').show().find('.J_playtime_con .sub-title').text('用时： '+playTime+'"');
            $('.fail').hide()
            $(".endalert").fadeIn();
        }else {
            $('.fail').show()
            $('.success').hide()
            $(".endalert").fadeIn()
        }
        live--;
        $(".life-box li").eq(live).addClass("active")
    }
    $(".backgame").on("click",function(){
    	if (live<=0) {
    		$(".share-tips").show()
    	};
    	toNextPage(-2);
    	$(".endalert").fadeOut()
    })
    $(".backgame1").on("click",function(){
    	if (live<=0) {
    		$(".share-tips").show()
    	};
    	$(".prise-des-first").fadeOut()
    	$(".prise-des-second").fadeOut()
    	if (pageIndex==1) {
    		toNextPage(1)
    	}
    	console.log(pageIndex)
    	if (pageIndex==4) {
    		toNextPage(-2)
    	};
    })

var startPosition, endPosition, deltaY;  
    $("#secOne").bind('touchstart', function(e){  
        var touch = e.touches[0];  
        startPosition = {  
            y: touch.pageY  
        }  
    }) .bind('touchmove', function(e){  
        var touch = e.touches[0];  
        endPosition = {  
            y: touch.pageY  
        };  
        deltaY = endPosition.y - startPosition.y;  
    }).bind('touchend', function(e){  
        if(deltaY < 0) { // 向左划动  
            toNextPage(1)  
        }
    });




    $(".prise-list li span").on("click",function(){
		var dataP = $(this).parent().data('prise');
		$(".gdes-wrap").hide()
		if (dataP==1) {
			$(".prise-des-first").fadeIn()
		} else {
			$(".prise-des-second").fadeIn()
		}
	})
    function queueAni(chain, cb){
        function iterator(chainitem){
            if(chainitem.type == 2 || chainitem.type == 3){
                (function(chainitem){
                    var delayTime = chainitem.delay || 0;
                    setTimeout(function(){
                        if(chainitem.type == 2){
                            $(chainitem.el).addClass(chainitem.animato[0]);
                        }else {
                            $(chainitem.el).toggleClass(chainitem.animato[0]);
                        }
                        if(!!chainitem.animato[1]){
                            chainitem.animato[1]();
                        }
                        iterate();
                    }, delayTime);
                })(chainitem);
            }else {
                chainitem.animato.push(iterate);
                if(!!chainitem.dalay){
                    chainitem.animato.push(chainitem.dalay);
                }
                $(chainitem.el).animate.apply($(chainitem.el), chainitem.animato);
            }
        }
        
        function iterate(){
            if(!chain || !chain.length) return cb && cb();
            
            var curItem = chain.shift();
            curItem.init && curItem.init();
            iterator(curItem);
        }
        
        iterate();
    }
    //页面动画
    function setPageAnim(){
        var _c;
        if(pageIndex >= 0 && pageIndex < pageChain.length) {
            _c = pageChain[pageIndex];
        } else {
            inAnimate = false;
            return;
        }
        if(_c.done){
            inAnimate = false;
            return;
        }
        setTimeout(function(){
            $(pageChain[pageIndex].el).find('.icon-arrow').css('opacity',1);
            inAnimate = false;
            for(var i = 0, l = pageChain.length; i < l; i++){
                if(i != pageIndex && isAndroid){
                    $(pageChain[i].el).find('.container').hide();
                }
            }
        }, _c.pageDelay);
        _c.done = true;
        queueAni(_c.chain,_c.cb);
    }
    
    function eventInit(){
        var $overlay = $('.J_overlay'), $dialogTips = $('#dialog-tips');
        $('.choose').on('click', function(e){
            e.preventDefault();
            chosenIdol = $(".swiper-container").find(".swiper-slide-active").data("swiper-slide-index");
            console.log(chosenIdol)
        });
        
        $('.J_check_tips').on('click', function(){
            // if(tipused) return;
            // tipused = true;
            // $('.J_check_tips').addClass('disabled');
            $dialogTips.show();
            $overlay.show();
            pauseTime = new Date();
            if(!!puzzleTimeObj){
                clearTimeout(puzzleTimeObj);
            }
        });
        $dialogTips.find('.tips-btn').on('click', function(){
            $dialogTips.hide();
            $overlay.hide();
            pauseTime = new Date() - pauseTime;
            console.log(pauseTime);
            countDown();
        });
        
        $('.J_backtoRechoose').on('click', function(e){
            e.preventDefault();
            if(pageIndex!=4) return;
            toNextPage(-3);
        });
        /* login */
        $('.login-close').on('click', function(){
            $('#login').hide();
            $overlay.hide();
        });
        /* login */
        // $('.input-form .login-button').on('click', function(){
        //     $('#login').hide();
        //     $('.result-alert').show();
        // });
        /* 已经领过 */
        $('.result-alert').on('click', function(){
            $('.result-alert').hide();
            $overlay.hide();
        });
        /* 分享 */
        $('.life-box li').eq(3).on('click', function(){
            $('.share-tips').show();
            if(!!puzzleTimeObj){
                clearTimeout(puzzleTimeObj);
            }
        });
        $(".share-btn").on('click', function(){
            $('.share-tips').show();
            if(!!puzzleTimeObj){
                clearTimeout(puzzleTimeObj);
            }
        });
        $('.share-tips').on('click', function(){
        	if (live>0) {
	            $('.share-tips').hide();
        	}
        	if (state) {
	        	if(!!puzzleTimeObj){
	                countDown();
	            }
        	};
        })
    }
    
    function preInit(){
        eventInit();
        var u = navigator.userAgent;
        // isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
        winSize = {
            w: WIN.width(),
            h: WIN.height()
        };
        contentWrap = $('#J_contentWrap');
        pageWrap = $('#J_pageWrap');
        //$('body').on('');
        contentWrap.css({
            height: winSize.h,
            width: winSize.w
        });
        $('.container').css({
            height: winSize.h,
            width: winSize.w,
            lineHeight : winSize.h +"px"
        });

        
        inAnimate = true;
        setPageAnim();
        
        // contentWrap.on('swipeUp', function(e){
        //     e.preventDefault();
        //     toNextPage(1);
        // });
        contentWrap.on('touchmove MSPointerMove pointermove', function(e){
            e.preventDefault();
        });
        // contentWrap.on('swipeDown', function(e){
        //     e.preventDefault();
        //     toNextPage(-1);
        // });
        $('.J_btnNextPage').on('click', function(e){
            e.preventDefault();
            // if(pageIndex == 1 && chosenIdol === -1) return; 
            toNextPage(1);
        });
        
        $('body').append('<audio src="'+MUSICLOC+'" id="J_musicPlayer" autoplay="autoplay" loop="loop"></audio>');

        var mPlayer = document.getElementById('J_musicPlayer');

        $('#J_mSwitch').on('click', function(e){
            e.preventDefault();
            var con = $(this);
            con.toggleClass('off');
            if(con.hasClass('off')) {
                mPlayer.pause();
            } else {
                mPlayer.play();
            }
        });
        rePosition();
        $('#J_loading').hide();
    }
    function tanchuang(obj){
        var qq = document.getElementById(obj);
        qq.style.display = 'block';
        var div = document.createElement('div');
        var dix = qq.offsetWidth;
        var diy = qq.offsetHeight;
        var pinx = document.documentElement.clientHeight;
        var top = (pinx - diy)/2;
        qq.style.cssText = ' display:block; position:fixed ; z-index:9999; top:50%; margin-top:'+-(diy/2)+'px; left:50%; margin-left:'+(-dix/2)+'px; _position:absolute;_top:expression(eval(document.documentElement.scrollTop + '+top+'));';
        var H = document.documentElement.scrollHeight;
        div.id = '_guan_';
        div.style.cssText = 'width:100%; height:'+H+'px;position:absolute; z-index:9998; background:#000; opacity:0.6;filter:alpha(opacity=60); top:0; left:0;';
        document.body.appendChild(div);
    }
    function guan(list){
        var guan = document.getElementById('_guan_');
        document.getElementById(list).style.display = 'none';
        document.body.removeChild(guan);
    }
    
    $(function(){
        ImgReady.throttle('img', function(){
            var imgLen = $('img').length, loadedNum = 0;
            console.log(imgLen)
            ImgReady.check('img', function(){
                loadedNum += 1;
                if(loadedNum >= imgLen){
                    $('#J_loading .loading-percent-num').text('100%');
                    $('#J_loading .progress').css('width','100%');
                    preInit();
                }else {
                    $('#J_loading .loading-percent-num').text(Math.ceil((loadedNum/imgLen)*100)+'%');
                    $('#J_loading .progress').css('width',Math.ceil((loadedNum/imgLen)*100)+'%');
                }
            }, function(){
                console.log('fail');
                $('#J_loading').on('click', function(e){
                    location.reload();
                });
                $('#J_loading').find('.text').html('加载失败，请点击刷新');
            });
        });
    });
})(Zepto);

;(function(w){
    var $puzzleContainer, $pItemList;
    
    var device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
    var clickEvtName = device ? 'touchstart' : 'mousedown';
    var moveEvtName = device? 'touchmove': 'mousemove';
    var endEvtName = device? 'touchend': 'mouseup';
    var isMouseMove = false;
    var iRate = $(window).width()/640;
    var offsetX, offsetY, x, y, criticalSize;
    var endCallback = null;
    function Dragpuzzle(con, cb){
        if(!con) return;
        
        this.puzzleContainer = con;
        this.endCallback = cb;
        this.pItemList = this.puzzleContainer.find('.J_puzzle_group.active .puzzle-item');
        
        if(this.pItemList.length !== 16) return;
        console.log(this.pItemList.length)
        this.puzzlePos();
    }
    
    Dragpuzzle.prototype = {
        puzzlePos: function(){
            var $puzzleContainer = this.puzzleContainer;
            var $pItemList = this.pItemList;
            var posList = $puzzleContainer.data('randompos').split(',');
            
            while(posList.length>0){
                var curLen = posList.length,
                    $curItem = $pItemList.eq(curLen-1),
                    randomIdx = Math.floor(Math.random()*curLen),
                    randomItem = posList[randomIdx].split('|'),
                    posStyle = {
                        top: parseInt(randomItem[0])*iRate - ($curItem.height()/2),
                        left: parseInt(randomItem[1])*iRate -($curItem.width()/2)
                    };
                
                $curItem.css(posStyle);
                posList.splice(randomIdx,1);
            }
        },
        puzzleStart: function(t){
            this.initTime = t || 20;
            var _this = this;
            var $puzzleContainer = _this.puzzleContainer;
            var $pItemList = _this.pItemList;
            
            if (!device) {
                document.addEventListener('mouseup', function(e) {
                    isMouseMove = false;
                }, false);
            } else {
                document.addEventListener("touchmove", function(e) {
                    if (isMouseMove) {
                        e.preventDefault();
                    }
                }, false);
                document.addEventListener('touchend', function(e) {
                    isMouseMove = false;
                }, false);
            }
            var curTop, curLeft, originTop, originLeft;
            $pItemList.off(clickEvtName);
            $pItemList.off(moveEvtName);
            $pItemList.off(endEvtName);
            $pItemList.on(clickEvtName, function(evt){
                evt.preventDefault();
                var $moveTar = $(this);
                isMouseMove = true;
                $moveTar.removeClass('normal').addClass('active');
                originLeft = $moveTar.offset().left;
                originTop = $moveTar.offset().top;
                offsetX = (device ? evt.touches[0].clientX : evt.clientX) - originLeft;
                offsetY = (device ? evt.touches[0].clientY : evt.clientY) - originTop;
                criticalSize = {
                    topmin: -20,
                    leftmin: -20,
                    topmax: $('.puzzle-center').height() - $moveTar.height(),
                    leftmax: $('.puzzle-center').width() - $moveTar.width() + 20
                };
            }).on(moveEvtName, function(evt){
                evt.preventDefault();
                if(!isMouseMove) return;
                var $moveTar = $(this);
                x = (device ? evt.touches[0].clientX : evt.clientX) - $puzzleContainer.offset().left;
                y = (device ? evt.touches[0].clientY : evt.clientY) - $puzzleContainer.offset().top;
                curTop = y - offsetY;
                curLeft = x - offsetX;
                if(curTop < criticalSize.topmin){
                    curTop = criticalSize.topmin;
                }else if(curTop > criticalSize.topmax){
                    curTop = criticalSize.topmax;
                }
                if(curLeft < criticalSize.leftmin){
                    curLeft = criticalSize.leftmin;
                }else if(curLeft > criticalSize.leftmax){
                    curLeft = criticalSize.leftmax;
                }
                $moveTar.css({
                    top: curTop,
                    left: curLeft
                });
            }).on(endEvtName, function(evt){
                evt.preventDefault();
                isMouseMove = false;
                var $moveTar = $(this),
                    goalPos = $moveTar.data('posgoal').split('|'),
                    goalTop = iRate*parseInt(goalPos[0]),
                    goalLeft = iRate*parseInt(goalPos[1]);
                    console.log(iRate)
                if(Math.abs(curTop-goalTop) + Math.abs(curLeft-goalLeft) < 40*iRate){
                    $moveTar.css({
                        top: goalTop,
                        left: goalLeft
                    }).addClass('completed').removeClass('active');
                   //判读是否成功
                    if($('.J_puzzle_group.active').find('.puzzle-item.completed').length === 16){
                        console.log('endcallback');
                        _this.endCallback && _this.endCallback();
                    }
                }else {
                    $moveTar.addClass('normal').removeClass('active').css({
                        top: originTop - $puzzleContainer.offset().top,
                        left: originLeft - $puzzleContainer.offset().left
                    });
                }
            });
        }
    };
    
    w.Dragpuzzle = Dragpuzzle;
})(this);
//     Zepto.js
//     (c) 2010-2015 Thomas Fuchs
//     Zepto.js may be freely distributed under the MIT license.

;(function($){
  var touch = {},
    touchTimeout, tapTimeout, swipeTimeout, longTapTimeout,
    longTapDelay = 750,
    gesture

  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
      Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
  }

  function longTap() {
    longTapTimeout = null
    if (touch.last) {
      touch.el.trigger('longTap')
      touch = {}
    }
  }

  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout)
    longTapTimeout = null
  }

  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout)
    if (tapTimeout) clearTimeout(tapTimeout)
    if (swipeTimeout) clearTimeout(swipeTimeout)
    if (longTapTimeout) clearTimeout(longTapTimeout)
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null
    touch = {}
  }

  function isPrimaryTouch(event){
    return (event.pointerType == 'touch' ||
      event.pointerType == event.MSPOINTER_TYPE_TOUCH)
      && event.isPrimary
  }

  function isPointerEventType(e, type){
    return (e.type == 'pointer'+type ||
      e.type.toLowerCase() == 'mspointer'+type)
  }

  $(document).ready(function(){
    var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType

    if ('MSGesture' in window) {
      gesture = new MSGesture()
      gesture.target = document.body
    }

    $(document)
      .bind('MSGestureEnd', function(e){
        var swipeDirectionFromVelocity =
          e.velocityX > 1 ? 'Right' : e.velocityX < -1 ? 'Left' : e.velocityY > 1 ? 'Down' : e.velocityY < -1 ? 'Up' : null;
        if (swipeDirectionFromVelocity) {
          touch.el.trigger('swipe')
          touch.el.trigger('swipe'+ swipeDirectionFromVelocity)
        }
      })
      .on('touchstart MSPointerDown pointerdown', function(e){
        if((_isPointerType = isPointerEventType(e, 'down')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        if (e.touches && e.touches.length === 1 && touch.x2) {
          // Clear out touch movement data if we have it sticking around
          // This can occur if touchcancel doesn't fire due to preventDefault, etc.
          touch.x2 = undefined
          touch.y2 = undefined
        }
        now = Date.now()
        delta = now - (touch.last || now)
        touch.el = $('tagName' in firstTouch.target ?
          firstTouch.target : firstTouch.target.parentNode)
        touchTimeout && clearTimeout(touchTimeout)
        touch.x1 = firstTouch.pageX
        touch.y1 = firstTouch.pageY
        if (delta > 0 && delta <= 250) touch.isDoubleTap = true
        touch.last = now
        longTapTimeout = setTimeout(longTap, longTapDelay)
        // adds the current touch contact for IE gesture recognition
        if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
      })
      .on('touchmove MSPointerMove pointermove', function(e){
        if((_isPointerType = isPointerEventType(e, 'move')) &&
          !isPrimaryTouch(e)) return
        firstTouch = _isPointerType ? e : e.touches[0]
        cancelLongTap()
        touch.x2 = firstTouch.pageX
        touch.y2 = firstTouch.pageY

        deltaX += Math.abs(touch.x1 - touch.x2)
        deltaY += Math.abs(touch.y1 - touch.y2)
      })
      .on('touchend MSPointerUp pointerup', function(e){
        if((_isPointerType = isPointerEventType(e, 'up')) &&
          !isPrimaryTouch(e)) return
        cancelLongTap()

        // swipe
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) ||
            (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30))

          swipeTimeout = setTimeout(function() {
            touch.el.trigger('swipe')
            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)))
            touch = {}
          }, 0)

        // normal tap
        else if ('last' in touch)
          // don't fire tap when delta position changed by more than 30 pixels,
          // for instance when moving to a point and back to origin
          if (deltaX < 30 && deltaY < 30) {
            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
            // ('tap' fires before 'scroll')
            tapTimeout = setTimeout(function() {

              // trigger universal 'tap' with the option to cancelTouch()
              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
              var event = $.Event('tap')
              event.cancelTouch = cancelAll
              touch.el.trigger(event)

              // trigger double tap immediately
              if (touch.isDoubleTap) {
                if (touch.el) touch.el.trigger('doubleTap')
                touch = {}
              }

              // trigger single tap after 250ms of inactivity
              else {
                touchTimeout = setTimeout(function(){
                  touchTimeout = null
                  if (touch.el) touch.el.trigger('singleTap')
                  touch = {}
                }, 250)
              }
            }, 0)
          } else {
            touch = {}
          }
          deltaX = deltaY = 0

      })
      // when the browser window loses focus,
      // for example when a modal dialog is shown,
      // cancel all ongoing events
      .on('touchcancel MSPointerCancel pointercancel', cancelAll)

    // scrolling the window indicates intention of the user
    // to scroll, not tap or swipe, so cancel all ongoing events
    $(window).on('scroll', cancelAll)
  })

  ;['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown',
    'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
    $.fn[eventName] = function(callback){ return this.on(eventName, callback) }
  })
})(Zepto)

$(function() {
	var myHTML = document.querySelector("html"),
		myWidth = window.innerWidth;
	var font = 3 * myWidth/80;
	if (font > 24) {
	    font = 24;
	}
	myHTML.style.fontSize = font + 'px';
});

$('.win-query').on('click', function(e){
	e.preventDefault();
    $(".gdes-wrap").fadeIn()
    loaded()
});
$(".alert .close").on('click', function(e){
    $(".gdes-wrap").fadeOut()
    $(".scroll-boxs>div").eq(0).addClass("active").siblings().removeClass("active")
    $(".alert-btn>span").eq(1).addClass("active").siblings().removeClass("active")
    $(".alert-container").removeClass("active")
});
$(".pop-login .close").on('click', function(e){
    $(".pop-login").fadeOut()
});


//首屏动画
play_star()
function play_star(){
	for (var i = 0; i < 16; i++) {
		var randomX = Math.ceil(Math.random()*30) - Math.ceil(Math.random()*30);
		var randomY = Math.ceil(Math.random()*30)- Math.ceil(Math.random()*30);
		var randomZ = Math.ceil(Math.random()*30)- Math.ceil(Math.random()*30);
		$(".flash-box img").eq(i).css({
			"WebkitTransform":"translate3d("+randomX+"rem,"+randomY+"rem,"+randomZ+"rem)",
			"Transform" :"translate3d("+randomX+"rem,"+randomY+"rem,"+randomZ+"rem)"
		})
	};
}
$(".alert-btn span").on("click",function(e){
	$(this).siblings().addClass("active")
	$(this).removeClass("active")
	$(".scroll-boxs>div").eq($(this).index()).addClass("active").siblings().removeClass("active")
	loaded()
	if ($(this).index()==0) {
		$(".alert-container").removeClass("active")
	}else {
		$(".alert-container").addClass("active")
	}
})

$(".success-btn").on("click",function(e){
	e.preventDefault();
	$(".prise-des-first").fadeIn()
	$(".endalert").fadeOut();
	$(".success,.fail").hide()

})

$(".form-btn").on("click",function(e){
	e.preventDefault();
	$(".gdes-wrap").hide();
	$(".pop-login").show()
})
var myScroll;
function loaded(){
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    myScroll = new IScroll('#wrapper', {
        scrollbars: true,
        mouseWheel: false,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: false
    });
    myScroll = new IScroll('#wrappers', {
        scrollbars: true,
        mouseWheel: false,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: false
    });
    myScroll = new IScroll('#wrapper3', {
        scrollbars: true,
        mouseWheel: false,
        interactiveScrollbars: true,
        shrinkScrollbars: 'scale',
        fadeScrollbars: false
    });
}
$(".prise-btn-1").on("click",function(e){
	e.preventDefault();
	$(".pop-login").show()
})
$("#secSecond .prise-btn-2 span").on("click",function(e){
	e.preventDefault();
    $(".gdes-wrap").fadeIn()
    loaded()
})
$("#secSecond .prise-btn-2 span").eq(0).on("click",function(e){
	e.preventDefault();
	$(".scroll-boxs>div").eq(0).addClass("active").siblings().removeClass("active")
	$(".alert-btn>span").eq(1).addClass("active").siblings().removeClass("active")
})
$("#secSecond .prise-btn-2 span").eq(1).on("click",function(e){
	e.preventDefault();
	$(".scroll-boxs>div").eq(1).addClass("active").siblings().removeClass("active")
	$(".alert-btn>span").eq(0).addClass("active").siblings().removeClass("active")
	$(".alert-container").addClass("active")
})