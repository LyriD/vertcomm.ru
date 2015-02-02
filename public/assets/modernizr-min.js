window.Modernizr=function(t,e,i){function n(t){y.cssText=t}function o(t,e){return n(C.join(t+";")+(e||""))}function s(t,e){return typeof t===e}function r(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var n in t)if(y[t[n]]!==i)return"pfx"==e?t[n]:!0;return!1}function l(t,e,n){for(var o in t){var r=e[t[o]];if(r!==i)return n===!1?t[o]:s(r,"function")?r.bind(n||e):r}return!1}function c(t,e,i){var n=t.charAt(0).toUpperCase()+t.substr(1),o=(t+" "+T.join(n+" ")+n).split(" ");return s(e,"string")||s(e,"undefined")?a(o,e):(o=(t+" "+S.join(n+" ")+n).split(" "),l(o,e,i))}function u(){f.input=function(i){for(var n=0,o=i.length;o>n;n++)N[i[n]]=i[n]in b;return N.list&&(N.list=!!e.createElement("datalist")&&!!t.HTMLDataListElement),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(t){for(var n,o,s,r=0,a=t.length;a>r;r++)b.setAttribute("type",o=t[r]),n="text"!==b.type,n&&(b.value=w,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&b.style.WebkitAppearance!==i?(g.appendChild(b),s=e.defaultView,n=s.getComputedStyle&&"textfield"!==s.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,g.removeChild(b)):/^(search|tel)$/.test(o)||(/^(url|email)$/.test(o)?n=b.checkValidity&&b.checkValidity()===!1:/^color$/.test(o)?(g.appendChild(b),g.offsetWidth,n=b.value!=w,g.removeChild(b)):n=b.value!=w)),$[t[r]]=!!n;return $}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,h,p="2.5.3",f={},m=!0,g=e.documentElement,_="modernizr",v=e.createElement(_),y=v.style,b=e.createElement("input"),w=":)",x={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",T=k.split(" "),S=k.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},M={},$={},N={},L=[],W=L.slice,A=function(t,i,n,o){var s,r,a,l=e.createElement("div"),c=e.body,u=c?c:e.createElement("body");if(parseInt(n,10))for(;n--;)a=e.createElement("div"),a.id=o?o[n]:_+(n+1),l.appendChild(a);return s=["&#173;","<style>",t,"</style>"].join(""),l.id=_,u.innerHTML+=s,u.appendChild(l),c||(u.style.background="",g.appendChild(u)),r=i(l,t),c?l.parentNode.removeChild(l):u.parentNode.removeChild(u),!!r},D=function(){function t(t,o){o=o||e.createElement(n[t]||"div"),t="on"+t;var r=t in o;return r||(o.setAttribute||(o=e.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(t,""),r=s(o[t],"function"),s(o[t],"undefined")||(o[t]=i),o.removeAttribute(t))),o=null,r}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),I={}.hasOwnProperty;h=s(I,"undefined")||s(I.call,"undefined")?function(t,e){return e in t&&s(t.constructor.prototype[e],"undefined")}:function(t,e){return I.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var i=W.call(arguments,1),n=function(){if(this instanceof n){var o=function(){};o.prototype=e.prototype;var s=new o,r=e.apply(s,i.concat(W.call(arguments)));return Object(r)===r?r:s}return e.apply(t,i.concat(W.call(arguments)))};return n});!function(i,n){var o=i.join(""),s=n.length;A(o,function(i,n){for(var o=e.styleSheets[e.styleSheets.length-1],r=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"",a=i.childNodes,l={};s--;)l[a[s].id]=a[s];f.touch="ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch||9===(l.touch&&l.touch.offsetTop),f.csstransforms3d=9===(l.csstransforms3d&&l.csstransforms3d.offsetLeft)&&3===l.csstransforms3d.offsetHeight,f.generatedcontent=(l.generatedcontent&&l.generatedcontent.offsetHeight)>=1,f.fontface=/src/i.test(r)&&0===r.indexOf(n.split(" ")[0])},s,n)}(['@font-face {font-family:"font";src:url("https://")}',["@media (",C.join("touch-enabled),("),_,")","{#touch{top:9px;position:absolute}}"].join(""),["@media (",C.join("transform-3d),("),_,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join(""),['#generatedcontent:after{content:"',w,'";visibility:hidden}'].join("")],["fontface","touch","csstransforms3d","generatedcontent"]);M.flexbox=function(){return c("flexOrder")},M.canvas=function(){var t=e.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},M.canvastext=function(){return!!f.canvas&&!!s(e.createElement("canvas").getContext("2d").fillText,"function")},M.webgl=function(){try{var n,o=e.createElement("canvas");n=!(!t.WebGLRenderingContext||!o.getContext("experimental-webgl")&&!o.getContext("webgl")),o=i}catch(s){n=!1}return n},M.touch=function(){return f.touch},M.geolocation=function(){return!!navigator.geolocation},M.postmessage=function(){return!!t.postMessage},M.websqldatabase=function(){return!!t.openDatabase},M.indexedDB=function(){return!!c("indexedDB",t)},M.hashchange=function(){return D("hashchange",t)&&(e.documentMode===i||e.documentMode>7)},M.history=function(){return!!t.history&&!!history.pushState},M.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},M.websockets=function(){for(var e=-1,i=T.length;++e<i;)if(t[T[e]+"WebSocket"])return!0;return"WebSocket"in t},M.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),r(y.backgroundColor,"rgba")},M.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),r(y.backgroundColor,"rgba")||r(y.backgroundColor,"hsla")},M.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},M.backgroundsize=function(){return c("backgroundSize")},M.borderimage=function(){return c("borderImage")},M.borderradius=function(){return c("borderRadius")},M.boxshadow=function(){return c("boxShadow")},M.textshadow=function(){return""===e.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(y.opacity)},M.cssanimations=function(){return c("animationName")},M.csscolumns=function(){return c("columnCount")},M.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",i="linear-gradient(left top,#9f9, white);";return n((t+"-webkit- ".split(" ").join(e+t)+C.join(i+t)).slice(0,-t.length)),r(y.backgroundImage,"gradient")},M.cssreflections=function(){return c("boxReflect")},M.csstransforms=function(){return!!c("transform")},M.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in g.style&&(t=f.csstransforms3d),t},M.csstransitions=function(){return c("transition")},M.fontface=function(){return f.fontface},M.generatedcontent=function(){return f.generatedcontent},M.video=function(){var t=e.createElement("video"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),i.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),i.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return i},M.audio=function(){var t=e.createElement("audio"),i=!1;try{(i=!!t.canPlayType)&&(i=new Boolean(i),i.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),i.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),i.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),i.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return i},M.localstorage=function(){try{return localStorage.setItem(_,_),localStorage.removeItem(_),!0}catch(t){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(_,_),sessionStorage.removeItem(_),!0}catch(t){return!1}},M.webworkers=function(){return!!t.Worker},M.applicationcache=function(){return!!t.applicationCache},M.svg=function(){return!!e.createElementNS&&!!e.createElementNS(E.svg,"svg").createSVGRect},M.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==E.svg},M.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(x.call(e.createElementNS(E.svg,"animate")))},M.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(x.call(e.createElementNS(E.svg,"clipPath")))};for(var P in M)h(M,P)&&(d=P.toLowerCase(),f[d]=M[P](),L.push((f[d]?"":"no-")+d));return f.input||u(),n(""),v=b=null,f._version=p,f._prefixes=C,f._domPrefixes=S,f._cssomPrefixes=T,f.hasEvent=D,f.testProp=function(t){return a([t])},f.testAllProps=c,f.testStyles=A,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+L.join(" "):""),f}(this,this.document),function(t,e){function i(t,e){var i=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return i.innerHTML="x<style>"+e+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var t=m.elements;return"string"==typeof t?t.split(" "):t}function o(t){var e={},i=t.createElement,o=t.createDocumentFragment,s=o();t.createElement=function(t){var n=(e[t]||(e[t]=i(t))).cloneNode();return m.shivMethods&&n.canHaveChildren&&!f.test(t)?s.appendChild(n):n},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(t){return e[t]=i(t),s.createElement(t),'c("'+t+'")'})+");return n}")(m,s)}function s(t){var e;return t.documentShived?t:(m.shivCSS&&!d&&(e=!!i(t,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),h||(e=!o(t)),e&&(t.documentShived=e),t)}function r(t){for(var e,i=t.getElementsByTagName("*"),o=i.length,s=RegExp("^(?:"+n().join("|")+")$","i"),r=[];o--;)e=i[o],s.test(e.nodeName)&&r.push(e.applyElement(a(e)));return r}function a(t){for(var e,i=t.attributes,n=i.length,o=t.ownerDocument.createElement(_+":"+t.nodeName);n--;)e=i[n],e.specified&&o.setAttribute(e.nodeName,e.nodeValue);return o.style.cssText=t.style.cssText,o}function l(t){for(var e,i=t.split("{"),o=i.length,s=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),r="$1"+_+"\\:$2";o--;)e=i[o]=i[o].split("}"),e[e.length-1]=e[e.length-1].replace(s,r),i[o]=e.join("}");return i.join("{")}function c(t){for(var e=t.length;e--;)t[e].removeNode()}function u(t){var e,n,o=t.namespaces,s=t.parentWindow;return!v||t.printShived?t:("undefined"==typeof o[_]&&o.add(_),s.attachEvent("onbeforeprint",function(){for(var o,s,a,c=t.styleSheets,u=[],d=c.length,h=Array(d);d--;)h[d]=c[d];for(;a=h.pop();)if(!a.disabled&&g.test(a.media)){for(o=a.imports,d=0,s=o.length;s>d;d++)h.push(o[d]);try{u.push(a.cssText)}catch(p){}}u=l(u.reverse().join("")),n=r(t),e=i(t,u)}),s.attachEvent("onafterprint",function(){c(n),e.removeNode(!0)}),t.printShived=!0,t)}var d,h,p=t.html5||{},f=/^<|^(?:button|form|map|select|textarea)$/i;!function(){var t=e.createElement("a");t.innerHTML="<xyz></xyz>",d="hidden"in t,h=1==t.childNodes.length||function(){try{e.createElement("a")}catch(t){return!0}var i=e.createDocumentFragment();return"undefined"==typeof i.cloneNode||"undefined"==typeof i.createDocumentFragment||"undefined"==typeof i.createElement}()}();var m={elements:p.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:p.shivCSS!==!1,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:s};t.html5=m,s(e);var g=/^$|\b(?:all|print)\b/,_="html5shiv",v=!h&&function(){var i=e.documentElement;return"undefined"!=typeof e.namespaces&&"undefined"!=typeof e.parentWindow&&"undefined"!=typeof i.applyElement&&"undefined"!=typeof i.removeNode&&"undefined"!=typeof t.attachEvent}();m.type+=" print",m.shivPrint=u,u(e)}(this,document),function(t,e,i){function n(t){return"[object Function]"==g.call(t)}function o(t){return"string"==typeof t}function s(){}function r(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=_.shift();v=1,t?t.t?f(function(){("c"==t.t?h.injectCss:h.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):v=0}function l(t,i,n,o,s,l,c){function u(e){if(!p&&r(d.readyState)&&(y.r=p=1,!v&&a(),d.onload=d.onreadystatechange=null,e)){"img"!=t&&f(function(){w.removeChild(d)},50);for(var n in S[i])S[i].hasOwnProperty(n)&&S[i][n].onload()}}var c=c||h.errorTimeout,d={},p=0,g=0,y={t:n,s:i,e:s,a:l,x:c};1===S[i]&&(g=1,S[i]=[],d=e.createElement(t)),"object"==t?d.data=i:(d.src=i,d.type=t),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},_.splice(o,0,y),"img"!=t&&(g||2===S[i]?(w.insertBefore(d,b?null:m),f(u,c)):S[i].push(d))}function c(t,e,i,n,s){return v=0,e=e||"j",o(t)?l("c"==e?C:x,t,e,this.i++,i,n,s):(_.splice(this.i++,0,t),1==_.length&&a()),this}function u(){var t=h;return t.loader={load:c,i:0},t}var d,h,p=e.documentElement,f=t.setTimeout,m=e.getElementsByTagName("script")[0],g={}.toString,_=[],v=0,y="MozAppearance"in p.style,b=y&&!!e.createRange().compareNode,w=b?p:m.parentNode,p=t.opera&&"[object Opera]"==g.call(t.opera),p=!!e.attachEvent&&!p,x=y?"object":p?"script":"img",C=p?"script":x,k=Array.isArray||function(t){return"[object Array]"==g.call(t)},T=[],S={},E={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};h=function(t){function e(t){var e,i,n,t=t.split("!"),o=T.length,s=t.pop(),r=t.length,s={url:s,origUrl:s,prefixes:t};for(i=0;r>i;i++)n=t[i].split("="),(e=E[n.shift()])&&(s=e(s,n));for(i=0;o>i;i++)s=T[i](s);return s}function r(t,o,s,r,l){var c=e(t),d=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=n(o)?o:o[t]||o[r]||o[t.split("/").pop().split("?")[0]]||a),c.instead?c.instead(t,o,s,r,l):(S[c.url]?c.noexec=!0:S[c.url]=1,s.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":i,c.noexec,c.attrs,c.timeout),(n(o)||n(d))&&s.load(function(){u(),o&&o(c.origUrl,l,r),d&&d(c.origUrl,l,r),S[c.url]=2})))}function l(t,e){function i(t,i){if(t){if(o(t))i||(d=function(){var t=[].slice.call(arguments);h.apply(this,t),p()}),r(t,d,e,0,c);else if(Object(t)===t)for(l in a=function(){var e,i=0;for(e in t)t.hasOwnProperty(e)&&i++;return i}(),t)t.hasOwnProperty(l)&&(!i&&!--a&&(n(d)?d=function(){var t=[].slice.call(arguments);h.apply(this,t),p()}:d[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(h[l])),r(t[l],d,e,l,c))}else!i&&p()}var a,l,c=!!t.test,u=t.load||t.both,d=t.callback||s,h=d,p=t.complete||s;i(c?t.yep:t.nope,!!u),u&&i(u)}var c,d,p=this.yepnope.loader;if(o(t))r(t,0,p,0);else if(k(t))for(c=0;c<t.length;c++)d=t[c],o(d)?r(d,0,p,0):k(d)?h(d):Object(d)===d&&l(d,p);else Object(t)===t&&l(t,p)},h.addPrefix=function(t,e){E[t]=e},h.addFilter=function(t){T.push(t)},h.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",d=function(){e.removeEventListener("DOMContentLoaded",d,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,i,n,o,l,c){var u,d,p=e.createElement("script"),o=o||h.errorTimeout;p.src=t;for(d in n)p.setAttribute(d,n[d]);i=c?a:i||s,p.onreadystatechange=p.onload=function(){!u&&r(p.readyState)&&(u=1,i(),p.onload=p.onreadystatechange=null)},f(function(){u||(u=1,i(1))},o),l?p.onload():m.parentNode.insertBefore(p,m)},t.yepnope.injectCss=function(t,i,n,o,r,l){var c,o=e.createElement("link"),i=l?a:i||s;o.href=t,o.rel="stylesheet",o.type="text/css";for(c in n)o.setAttribute(c,n[c]);r||(m.parentNode.insertBefore(o,m),f(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};