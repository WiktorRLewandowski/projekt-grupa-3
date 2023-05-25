function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("ifJdc",(function(t,n){var r,o;e(t.exports,"register",(()=>r),(e=>r=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o("ifJdc").register(JSON.parse('{"eFRlh":"index.549d71e7.js","iDgI1":"poster-none.d4c9acdc.png","bSbOs":"index.52c70756.css"}'));const i={galleryEl:document.getElementById("gallery"),searchEl:document.getElementById("search-box"),observerGalleryEl:document.getElementById("observer-gallery"),formEl:document.querySelector(".input__wrapper"),errorEl:document.querySelector(".search-error")};function a(e,t){return function(){return e.apply(t,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:c}=Object,u=(l=Object.create(null),e=>{const t=s.call(e);return l[t]||(l[t]=t.slice(8,-1).toLowerCase())});var l;const f=e=>(e=e.toLowerCase(),t=>u(t)===e),h=e=>t=>typeof t===e,{isArray:d}=Array,p=h("undefined");const g=f("ArrayBuffer");const m=h("string"),y=h("function"),b=h("number"),w=e=>null!==e&&"object"==typeof e,v=e=>{if("object"!==u(e))return!1;const t=c(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},E=f("Date"),S=f("File"),I=f("Blob"),A=f("FileList"),T=f("URLSearchParams");function O(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),d(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(r=0;r<i;r++)a=o[r],t.call(null,e[a],a,e)}}function _(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:t,D=e=>!p(e)&&e!==C;const B=(L="undefined"!=typeof Uint8Array&&c(Uint8Array),e=>L&&e instanceof L);var L;const R=f("HTMLFormElement"),j=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),x=f("RegExp"),N=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};O(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},k="abcdefghijklmnopqrstuvwxyz",P="0123456789",U={DIGIT:P,ALPHA:k,ALPHA_DIGIT:k+k.toUpperCase()+P};const M=f("AsyncFunction");var F={isArray:d,isArrayBuffer:g,isBuffer:function(e){return null!==e&&!p(e)&&null!==e.constructor&&!p(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||y(e.append)&&("formdata"===(t=u(e))||"object"===t&&y(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&g(e.buffer),t},isString:m,isNumber:b,isBoolean:e=>!0===e||!1===e,isObject:w,isPlainObject:v,isUndefined:p,isDate:E,isFile:S,isBlob:I,isRegExp:x,isFunction:y,isStream:e=>w(e)&&y(e.pipe),isURLSearchParams:T,isTypedArray:B,isFileList:A,forEach:O,merge:function e(){const{caseless:t}=D(this)&&this||{},n={},r=(r,o)=>{const i=t&&_(n,o)||o;v(n[i])&&v(r)?n[i]=e(n[i],r):v(r)?n[i]=e({},r):d(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&O(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:r}={})=>(O(t,((t,r)=>{n&&y(t)?e[r]=a(t,n):e[r]=t}),{allOwnKeys:r}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,i,a;const s={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],r&&!r(a,e,t)||s[a]||(t[a]=e[a],s[a]=!0);e=!1!==n&&c(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:f,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(d(e))return e;let t=e.length;if(!b(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:R,hasOwnProperty:j,hasOwnProp:j,reduceDescriptors:N,freezeMethods:e=>{N(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return d(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:_,global:C,isContextDefined:D,ALPHABET:U,generateString:(e=16,t=U.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&y(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=d(e)?[]:{};return O(e,((e,t)=>{const i=n(e,r+1);!p(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:M,isThenable:e=>e&&(w(e)||y(e))&&y(e.then)&&y(e.catch)};function $(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}F.inherits($,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:F.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const H=$.prototype,z={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{z[e]={value:e}})),Object.defineProperties($,z),Object.defineProperty(H,"isAxiosError",{value:!0}),$.from=(e,t,n,r,o,i)=>{const a=Object.create(H);return F.toFlatObject(e,a,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),$.call(a,e.message,t,n,r,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};var q,V,W,K=$;V=function(e){var t,n,r=te(e),o=r[0],i=r[1],a=new Z(function(e,t,n){return 3*(t+n)/4-n}(0,o,i)),s=0,c=i>0?o-4:o;for(n=0;n<c;n+=4)t=X[e.charCodeAt(n)]<<18|X[e.charCodeAt(n+1)]<<12|X[e.charCodeAt(n+2)]<<6|X[e.charCodeAt(n+3)],a[s++]=t>>16&255,a[s++]=t>>8&255,a[s++]=255&t;2===i&&(t=X[e.charCodeAt(n)]<<2|X[e.charCodeAt(n+1)]>>4,a[s++]=255&t);1===i&&(t=X[e.charCodeAt(n)]<<10|X[e.charCodeAt(n+1)]<<4|X[e.charCodeAt(n+2)]>>2,a[s++]=t>>8&255,a[s++]=255&t);return a},W=function(e){for(var t,n=e.length,r=n%3,o=[],i=16383,a=0,s=n-r;a<s;a+=i)o.push(ne(e,a,a+i>s?s:a+i));1===r?(t=e[n-1],o.push(Y[t>>2]+Y[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],o.push(Y[t>>10]+Y[t>>4&63]+Y[t<<2&63]+"="));return o.join("")}
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */;for(var J,G,Y=[],X=[],Z="undefined"!=typeof Uint8Array?Uint8Array:Array,Q="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ee=0;ee<64;++ee)Y[ee]=Q[ee],X[Q.charCodeAt(ee)]=ee;function te(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function ne(e,t,n){for(var r,o,i=[],a=t;a<n;a+=3)r=(e[a]<<16&16711680)+(e[a+1]<<8&65280)+(255&e[a+2]),i.push(Y[(o=r)>>18&63]+Y[o>>12&63]+Y[o>>6&63]+Y[63&o]);return i.join("")}X["-".charCodeAt(0)]=62,X["_".charCodeAt(0)]=63,J=function(e,t,n,r,o){var i,a,s=8*o-r-1,c=(1<<s)-1,u=c>>1,l=-7,f=n?o-1:0,h=n?-1:1,d=e[t+f];for(f+=h,i=d&(1<<-l)-1,d>>=-l,l+=s;l>0;i=256*i+e[t+f],f+=h,l-=8);for(a=i&(1<<-l)-1,i>>=-l,l+=r;l>0;a=256*a+e[t+f],f+=h,l-=8);if(0===i)i=1-u;else{if(i===c)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,r),i-=u}return(d?-1:1)*a*Math.pow(2,i-r)},G=function(e,t,n,r,o,i){var a,s,c,u=8*i-o-1,l=(1<<u)-1,f=l>>1,h=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:i-1,p=r?1:-1,g=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=l):(a=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-a))<1&&(a--,c*=2),(t+=a+f>=1?h/c:h*Math.pow(2,1-f))*c>=2&&(a++,c/=2),a+f>=l?(s=0,a=l):a+f>=1?(s=(t*c-1)*Math.pow(2,o),a+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,o),a=0));o>=8;e[n+d]=255&s,d+=p,s/=256,o-=8);for(a=a<<o|s,u+=o;u>0;e[n+d]=255&a,d+=p,a/=256,u-=8);e[n+d-p]|=128*g};var re="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;q=ae;var oe=2147483647;function ie(e){if(e>oe)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,ae.prototype),t}function ae(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return ue(e)}return se(e,t,n)}function se(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!ae.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var n=0|de(e,t),r=ie(n),o=r.write(e,t);o!==n&&(r=r.slice(0,o));return r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Me(e,Uint8Array)){var t=new Uint8Array(e);return fe(t.buffer,t.byteOffset,t.byteLength)}return le(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Me(e,ArrayBuffer)||e&&Me(e.buffer,ArrayBuffer))return fe(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Me(e,SharedArrayBuffer)||e&&Me(e.buffer,SharedArrayBuffer)))return fe(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return ae.from(r,t,n);var o=function(e){if(ae.isBuffer(e)){var t=0|he(e.length),n=ie(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Fe(e.length)?ie(0):le(e);if("Buffer"===e.type&&Array.isArray(e.data))return le(e.data)}(e);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return ae.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function ce(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function ue(e){return ce(e),ie(e<0?0:0|he(e))}function le(e){for(var t=e.length<0?0:0|he(e.length),n=ie(t),r=0;r<t;r+=1)n[r]=255&e[r];return n}function fe(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');var r;return r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(r,ae.prototype),r}function he(e){if(e>=oe)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+oe.toString(16)+" bytes");return 0|e}function de(e,t){if(ae.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Me(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;for(var o=!1;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return ke(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Pe(e).length;default:if(o)return r?-1:ke(e).length;t=(""+t).toLowerCase(),o=!0}}function pe(e,t,n){var r=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return Ce(this,t,n);case"utf8":case"utf-8":return Ae(this,t,n);case"ascii":return Oe(this,t,n);case"latin1":case"binary":return _e(this,t,n);case"base64":return Ie(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return De(this,t,n);default:if(r)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function ge(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function me(e,t,n,r,o){if(0===e.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Fe(n=+n)&&(n=o?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(o)return-1;n=e.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof t&&(t=ae.from(t,r)),ae.isBuffer(t))return 0===t.length?-1:ye(e,t,n,r,o);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):ye(e,[t],n,r,o);throw new TypeError("val must be string, number or Buffer")}function ye(e,t,n,r,o){var i,a=1,s=e.length,c=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return-1;a=2,s/=2,c/=2,n/=2}function u(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(o){var l=-1;for(i=n;i<s;i++)if(u(e,i)===u(t,-1===l?0:i-l)){if(-1===l&&(l=i),i-l+1===c)return l*a}else-1!==l&&(i-=i-l),l=-1}else for(n+c>s&&(n=s-c),i=n;i>=0;i--){for(var f=!0,h=0;h<c;h++)if(u(e,i+h)!==u(t,h)){f=!1;break}if(f)return i}return-1}function be(e,t,n,r){n=Number(n)||0;var o=e.length-n;r?(r=Number(r))>o&&(r=o):r=o;var i=t.length;r>i/2&&(r=i/2);for(var a=0;a<r;++a){var s=parseInt(t.substr(2*a,2),16);if(Fe(s))return a;e[n+a]=s}return a}function we(e,t,n,r){return Ue(ke(t,e.length-n),e,n,r)}function ve(e,t,n,r){return Ue(function(e){for(var t=[],n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function Ee(e,t,n,r){return Ue(Pe(t),e,n,r)}function Se(e,t,n,r){return Ue(function(e,t){for(var n,r,o,i=[],a=0;a<e.length&&!((t-=2)<0);++a)r=(n=e.charCodeAt(a))>>8,o=n%256,i.push(o),i.push(r);return i}(t,e.length-n),e,n,r)}function Ie(e,t,n){return 0===t&&n===e.length?W(e):W(e.slice(t,n))}function Ae(e,t,n){n=Math.min(e.length,n);for(var r=[],o=t;o<n;){var i,a,s,c,u=e[o],l=null,f=u>239?4:u>223?3:u>191?2:1;if(o+f<=n)switch(f){case 1:u<128&&(l=u);break;case 2:128==(192&(i=e[o+1]))&&(c=(31&u)<<6|63&i)>127&&(l=c);break;case 3:i=e[o+1],a=e[o+2],128==(192&i)&&128==(192&a)&&(c=(15&u)<<12|(63&i)<<6|63&a)>2047&&(c<55296||c>57343)&&(l=c);break;case 4:i=e[o+1],a=e[o+2],s=e[o+3],128==(192&i)&&128==(192&a)&&128==(192&s)&&(c=(15&u)<<18|(63&i)<<12|(63&a)<<6|63&s)>65535&&c<1114112&&(l=c)}null===l?(l=65533,f=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),o+=f}return function(e){var t=e.length;if(t<=Te)return String.fromCharCode.apply(String,e);var n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=Te));return n}(r)}ae.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),ae.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(ae.prototype,"parent",{enumerable:!0,get:function(){if(ae.isBuffer(this))return this.buffer}}),Object.defineProperty(ae.prototype,"offset",{enumerable:!0,get:function(){if(ae.isBuffer(this))return this.byteOffset}}),ae.poolSize=8192,ae.from=function(e,t,n){return se(e,t,n)},Object.setPrototypeOf(ae.prototype,Uint8Array.prototype),Object.setPrototypeOf(ae,Uint8Array),ae.alloc=function(e,t,n){return function(e,t,n){return ce(e),e<=0?ie(e):void 0!==t?"string"==typeof n?ie(e).fill(t,n):ie(e).fill(t):ie(e)}(e,t,n)},ae.allocUnsafe=function(e){return ue(e)},ae.allocUnsafeSlow=function(e){return ue(e)},ae.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==ae.prototype},ae.compare=function(e,t){if(Me(e,Uint8Array)&&(e=ae.from(e,e.offset,e.byteLength)),Me(t,Uint8Array)&&(t=ae.from(t,t.offset,t.byteLength)),!ae.isBuffer(e)||!ae.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var n=e.length,r=t.length,o=0,i=Math.min(n,r);o<i;++o)if(e[o]!==t[o]){n=e[o],r=t[o];break}return n<r?-1:r<n?1:0},ae.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},ae.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return ae.alloc(0);var n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;var r=ae.allocUnsafe(t),o=0;for(n=0;n<e.length;++n){var i=e[n];if(Me(i,Uint8Array))o+i.length>r.length?ae.from(i).copy(r,o):Uint8Array.prototype.set.call(r,i,o);else{if(!ae.isBuffer(i))throw new TypeError('"list" argument must be an Array of Buffers');i.copy(r,o)}o+=i.length}return r},ae.byteLength=de,ae.prototype._isBuffer=!0,ae.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)ge(this,t,t+1);return this},ae.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)ge(this,t,t+3),ge(this,t+1,t+2);return this},ae.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)ge(this,t,t+7),ge(this,t+1,t+6),ge(this,t+2,t+5),ge(this,t+3,t+4);return this},ae.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?Ae(this,0,e):pe.apply(this,arguments)},ae.prototype.toLocaleString=ae.prototype.toString,ae.prototype.equals=function(e){if(!ae.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===ae.compare(this,e)},ae.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},re&&(ae.prototype[re]=ae.prototype.inspect),ae.prototype.compare=function(e,t,n,r,o){if(Me(e,Uint8Array)&&(e=ae.from(e,e.offset,e.byteLength)),!ae.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),t<0||n>e.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&t>=n)return 0;if(r>=o)return-1;if(t>=n)return 1;if(this===e)return 0;for(var i=(o>>>=0)-(r>>>=0),a=(n>>>=0)-(t>>>=0),s=Math.min(i,a),c=this.slice(r,o),u=e.slice(t,n),l=0;l<s;++l)if(c[l]!==u[l]){i=c[l],a=u[l];break}return i<a?-1:a<i?1:0},ae.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},ae.prototype.indexOf=function(e,t,n){return me(this,e,t,n,!0)},ae.prototype.lastIndexOf=function(e,t,n){return me(this,e,t,n,!1)},ae.prototype.write=function(e,t,n,r){if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-t;if((void 0===n||n>o)&&(n=o),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return be(this,e,t,n);case"utf8":case"utf-8":return we(this,e,t,n);case"ascii":case"latin1":case"binary":return ve(this,e,t,n);case"base64":return Ee(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Se(this,e,t,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},ae.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var Te=4096;function Oe(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;++o)r+=String.fromCharCode(127&e[o]);return r}function _e(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;++o)r+=String.fromCharCode(e[o]);return r}function Ce(e,t,n){var r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=t;i<n;++i)o+=$e[e[i]];return o}function De(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length-1;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function Be(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function Le(e,t,n,r,o,i){if(!ae.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>o||t<i)throw new RangeError('"value" argument is out of bounds');if(n+r>e.length)throw new RangeError("Index out of range")}function Re(e,t,n,r,o,i){if(n+r>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function je(e,t,n,r,o){return t=+t,n>>>=0,o||Re(e,0,n,4),G(e,t,n,r,23,4),n+4}function xe(e,t,n,r,o){return t=+t,n>>>=0,o||Re(e,0,n,8),G(e,t,n,r,52,8),n+8}ae.prototype.slice=function(e,t){var n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);var r=this.subarray(e,t);return Object.setPrototypeOf(r,ae.prototype),r},ae.prototype.readUintLE=ae.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Be(e,t,this.length);for(var r=this[e],o=1,i=0;++i<t&&(o*=256);)r+=this[e+i]*o;return r},ae.prototype.readUintBE=ae.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Be(e,t,this.length);for(var r=this[e+--t],o=1;t>0&&(o*=256);)r+=this[e+--t]*o;return r},ae.prototype.readUint8=ae.prototype.readUInt8=function(e,t){return e>>>=0,t||Be(e,1,this.length),this[e]},ae.prototype.readUint16LE=ae.prototype.readUInt16LE=function(e,t){return e>>>=0,t||Be(e,2,this.length),this[e]|this[e+1]<<8},ae.prototype.readUint16BE=ae.prototype.readUInt16BE=function(e,t){return e>>>=0,t||Be(e,2,this.length),this[e]<<8|this[e+1]},ae.prototype.readUint32LE=ae.prototype.readUInt32LE=function(e,t){return e>>>=0,t||Be(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},ae.prototype.readUint32BE=ae.prototype.readUInt32BE=function(e,t){return e>>>=0,t||Be(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},ae.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||Be(e,t,this.length);for(var r=this[e],o=1,i=0;++i<t&&(o*=256);)r+=this[e+i]*o;return r>=(o*=128)&&(r-=Math.pow(2,8*t)),r},ae.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||Be(e,t,this.length);for(var r=t,o=1,i=this[e+--r];r>0&&(o*=256);)i+=this[e+--r]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*t)),i},ae.prototype.readInt8=function(e,t){return e>>>=0,t||Be(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},ae.prototype.readInt16LE=function(e,t){e>>>=0,t||Be(e,2,this.length);var n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},ae.prototype.readInt16BE=function(e,t){e>>>=0,t||Be(e,2,this.length);var n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},ae.prototype.readInt32LE=function(e,t){return e>>>=0,t||Be(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},ae.prototype.readInt32BE=function(e,t){return e>>>=0,t||Be(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},ae.prototype.readFloatLE=function(e,t){return e>>>=0,t||Be(e,4,this.length),J(this,e,!0,23,4)},ae.prototype.readFloatBE=function(e,t){return e>>>=0,t||Be(e,4,this.length),J(this,e,!1,23,4)},ae.prototype.readDoubleLE=function(e,t){return e>>>=0,t||Be(e,8,this.length),J(this,e,!0,52,8)},ae.prototype.readDoubleBE=function(e,t){return e>>>=0,t||Be(e,8,this.length),J(this,e,!1,52,8)},ae.prototype.writeUintLE=ae.prototype.writeUIntLE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||Le(this,e,t,n,Math.pow(2,8*n)-1,0);var o=1,i=0;for(this[t]=255&e;++i<n&&(o*=256);)this[t+i]=e/o&255;return t+n},ae.prototype.writeUintBE=ae.prototype.writeUIntBE=function(e,t,n,r){(e=+e,t>>>=0,n>>>=0,r)||Le(this,e,t,n,Math.pow(2,8*n)-1,0);var o=n-1,i=1;for(this[t+o]=255&e;--o>=0&&(i*=256);)this[t+o]=e/i&255;return t+n},ae.prototype.writeUint8=ae.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,1,255,0),this[t]=255&e,t+1},ae.prototype.writeUint16LE=ae.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},ae.prototype.writeUint16BE=ae.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},ae.prototype.writeUint32LE=ae.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},ae.prototype.writeUint32BE=ae.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ae.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var o=Math.pow(2,8*n-1);Le(this,e,t,n,o-1,-o)}var i=0,a=1,s=0;for(this[t]=255&e;++i<n&&(a*=256);)e<0&&0===s&&0!==this[t+i-1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+n},ae.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){var o=Math.pow(2,8*n-1);Le(this,e,t,n,o-1,-o)}var i=n-1,a=1,s=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===s&&0!==this[t+i+1]&&(s=1),this[t+i]=(e/a>>0)-s&255;return t+n},ae.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},ae.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},ae.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},ae.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},ae.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||Le(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},ae.prototype.writeFloatLE=function(e,t,n){return je(this,e,t,!0,n)},ae.prototype.writeFloatBE=function(e,t,n){return je(this,e,t,!1,n)},ae.prototype.writeDoubleLE=function(e,t,n){return xe(this,e,t,!0,n)},ae.prototype.writeDoubleBE=function(e,t,n){return xe(this,e,t,!1,n)},ae.prototype.copy=function(e,t,n,r){if(!ae.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);var o=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),o},ae.prototype.fill=function(e,t,n,r){if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!ae.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===e.length){var o=e.charCodeAt(0);("utf8"===r&&o<128||"latin1"===r)&&(e=o)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;var i;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(i=t;i<n;++i)this[i]=e;else{var a=ae.isBuffer(e)?e:ae.from(e,r),s=a.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<n-t;++i)this[i+t]=a[i%s]}return this};var Ne=/[^+/0-9A-Za-z-_]/g;function ke(e,t){var n;t=t||1/0;for(var r=e.length,o=null,i=[],a=0;a<r;++a){if((n=e.charCodeAt(a))>55295&&n<57344){if(!o){if(n>56319){(t-=3)>-1&&i.push(239,191,189);continue}if(a+1===r){(t-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(t-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(t-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((t-=1)<0)break;i.push(n)}else if(n<2048){if((t-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function Pe(e){return V(function(e){if((e=(e=e.split("=")[0]).trim().replace(Ne,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Ue(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);++o)t[o+n]=e[o];return o}function Me(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Fe(e){return e!=e}var $e=function(){for(var e="0123456789abcdef",t=new Array(256),n=0;n<16;++n)for(var r=16*n,o=0;o<16;++o)t[r+o]=e[n]+e[o];return t}(),He=q;function ze(e){return F.isPlainObject(e)||F.isArray(e)}function qe(e){return F.endsWith(e,"[]")?e.slice(0,-2):e}function Ve(e,t,n){return e?e.concat(t).map((function(e,t){return e=qe(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}const We=F.toFlatObject(F,{},null,(function(e){return/^is[A-Z]/.test(e)}));var Ke=function(e,t,n){if(!F.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=F.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!F.isUndefined(t[e])}))).metaTokens,o=n.visitor||u,i=n.dots,a=n.indexes,s=(n.Blob||"undefined"!=typeof Blob&&Blob)&&F.isSpecCompliantForm(t);if(!F.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(F.isDate(e))return e.toISOString();if(!s&&F.isBlob(e))throw new K("Blob is not supported. Use a Buffer instead.");return F.isArrayBuffer(e)||F.isTypedArray(e)?s&&"function"==typeof Blob?new Blob([e]):He.from(e):e}function u(e,n,o){let s=e;if(e&&!o&&"object"==typeof e)if(F.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(F.isArray(e)&&function(e){return F.isArray(e)&&!e.some(ze)}(e)||(F.isFileList(e)||F.endsWith(n,"[]"))&&(s=F.toArray(e)))return n=qe(n),s.forEach((function(e,r){!F.isUndefined(e)&&null!==e&&t.append(!0===a?Ve([n],r,i):null===a?n:n+"[]",c(e))})),!1;return!!ze(e)||(t.append(Ve(o,n,i),c(e)),!1)}const l=[],f=Object.assign(We,{defaultVisitor:u,convertValue:c,isVisitable:ze});if(!F.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!F.isUndefined(n)){if(-1!==l.indexOf(n))throw Error("Circular reference detected in "+r.join("."));l.push(n),F.forEach(n,(function(n,i){!0===(!(F.isUndefined(n)||null===n)&&o.call(t,n,F.isString(i)?i.trim():i,r,f))&&e(n,r?r.concat(i):[i])})),l.pop()}}(e),t};function Je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function Ge(e,t){this._pairs=[],e&&Ke(e,this,t)}const Ye=Ge.prototype;Ye.append=function(e,t){this._pairs.push([e,t])},Ye.toString=function(e){const t=e?function(t){return e.call(this,t,Je)}:Je;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Xe=Ge;function Ze(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Qe(e,t,n){if(!t)return e;const r=n&&n.encode||Ze,o=n&&n.serialize;let i;if(i=o?o(t,n):F.isURLSearchParams(t)?t.toString():new Xe(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}var et=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){F.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},tt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};var nt={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:Xe,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},isStandardBrowserEnv:(()=>{let e;return("undefined"==typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!=typeof window&&"undefined"!=typeof document)})(),isStandardBrowserWebWorkerEnv:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,protocols:["http","https","file","blob","url","data"]};function rt(e,t){return Ke(e,new nt.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return nt.isNode&&F.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}var ot=function(e){function t(e,n,r,o){let i=e[o++];const a=Number.isFinite(+i),s=o>=e.length;if(i=!i&&F.isArray(r)?r.length:i,s)return F.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!a;r[i]&&F.isObject(r[i])||(r[i]=[]);return t(e,n,r[i],o)&&F.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!a}if(F.isFormData(e)&&F.isFunction(e.entries)){const n={};return F.forEachEntry(e,((e,r)=>{t(function(e){return F.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null};const it={"Content-Type":void 0};const at={transitional:tt,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=F.isObject(e);o&&F.isHTMLForm(e)&&(e=new FormData(e));if(F.isFormData(e))return r&&r?JSON.stringify(ot(e)):e;if(F.isArrayBuffer(e)||F.isBuffer(e)||F.isStream(e)||F.isFile(e)||F.isBlob(e))return e;if(F.isArrayBufferView(e))return e.buffer;if(F.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return rt(e,this.formSerializer).toString();if((i=F.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return Ke(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(F.isString(e))try{return(t||JSON.parse)(e),F.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||at.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&F.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw K.from(e,K.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};F.forEach(["delete","get","head"],(function(e){at.headers[e]={}})),F.forEach(["post","put","patch"],(function(e){at.headers[e]=F.merge(it)}));var st=at;const ct=F.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var ut=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ct[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const lt=Symbol("internals");function ft(e){return e&&String(e).trim().toLowerCase()}function ht(e){return!1===e||null==e?e:F.isArray(e)?e.map(ht):String(e)}function dt(e,t,n,r,o){return F.isFunction(r)?r.call(this,t,n):(o&&(t=n),F.isString(t)?F.isString(r)?-1!==t.indexOf(r):F.isRegExp(r)?r.test(t):void 0:void 0)}class pt{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ft(t);if(!o)throw new Error("header name must be a non-empty string");const i=F.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=ht(e))}const i=(e,t)=>F.forEach(e,((e,n)=>o(e,n,t)));return F.isPlainObject(e)||e instanceof this.constructor?i(e,t):F.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i(ut(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ft(e)){const n=F.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(F.isFunction(t))return t.call(this,e,n);if(F.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ft(e)){const n=F.findKey(this,e);return!(!n||void 0===this[n]||t&&!dt(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ft(e)){const o=F.findKey(n,e);!o||t&&!dt(0,n[o],o,t)||(delete n[o],r=!0)}}return F.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!dt(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return F.forEach(this,((r,o)=>{const i=F.findKey(n,o);if(i)return t[i]=ht(r),void delete t[o];const a=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();a!==o&&delete t[o],t[a]=ht(r),n[a]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return F.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&F.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[lt]=this[lt]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ft(e);t[r]||(!function(e,t){const n=F.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return F.isArray(e)?e.forEach(r):r(e),this}}pt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),F.freezeMethods(pt.prototype),F.freezeMethods(pt);var gt=pt;function mt(e,t){const n=this||st,r=t||n,o=gt.from(r.headers);let i=r.data;return F.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function yt(e){return!(!e||!e.__CANCEL__)}function bt(e,t,n){K.call(this,null==e?"canceled":e,K.ERR_CANCELED,t,n),this.name="CanceledError"}F.inherits(bt,K,{__CANCEL__:!0});var wt=bt;function vt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new K("Request failed with status code "+n.status,[K.ERR_BAD_REQUEST,K.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var Et=nt.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){const a=[];a.push(e+"="+encodeURIComponent(t)),F.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),F.isString(r)&&a.push("path="+r),F.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function St(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function It(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?St(e,t):t}var At=nt.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=F.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function Tt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}var Ot=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,a=0;return t=void 0!==t?t:1e3,function(s){const c=Date.now(),u=r[a];o||(o=c),n[i]=s,r[i]=c;let l=a,f=0;for(;l!==i;)f+=n[l++],l%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;const h=u&&c-u;return h?Math.round(1e3*f/h):void 0}};function _t(e,t){let n=0;const r=Ot(50,250);return o=>{const i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-n,c=r(s);n=i;const u={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:c||void 0,estimated:c&&a&&i<=a?(a-i)/c:void 0,event:o};u[t?"download":"upload"]=!0,e(u)}}const Ct={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=gt.from(e.headers).normalize(),i=e.responseType;let a;function s(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}F.isFormData(r)&&(nt.isStandardBrowserEnv||nt.isStandardBrowserWebWorkerEnv?o.setContentType(!1):o.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=It(e.baseURL,e.url);function l(){if(!c)return;const r=gt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders());vt((function(e){t(e),s()}),(function(e){n(e),s()}),{data:i&&"text"!==i&&"json"!==i?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:e,request:c}),c=null}if(c.open(e.method.toUpperCase(),Qe(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new K("Request aborted",K.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new K("Network Error",K.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||tt;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new K(t,r.clarifyTimeoutError?K.ETIMEDOUT:K.ECONNABORTED,e,c)),c=null},nt.isStandardBrowserEnv){const t=(e.withCredentials||At(u))&&e.xsrfCookieName&&Et.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&F.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),F.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&c.addEventListener("progress",_t(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",_t(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=t=>{c&&(n(!t||t.type?new wt(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const f=Tt(u);f&&-1===nt.protocols.indexOf(f)?n(new K("Unsupported protocol "+f+":",K.ERR_BAD_REQUEST,e)):c.send(r||null)}))}};F.forEach(Ct,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));var Dt={getAdapter:e=>{e=F.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t&&(n=e[o],!(r=F.isString(n)?Ct[n.toLowerCase()]:n));o++);if(!r){if(!1===r)throw new K(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(F.hasOwnProp(Ct,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!F.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:Ct};function Bt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new wt(null,e)}function Lt(e){Bt(e),e.headers=gt.from(e.headers),e.data=mt.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);return Dt.getAdapter(e.adapter||st.adapter)(e).then((function(t){return Bt(e),t.data=mt.call(e,e.transformResponse,t),t.headers=gt.from(t.headers),t}),(function(t){return yt(t)||(Bt(e),t&&t.response&&(t.response.data=mt.call(e,e.transformResponse,t.response),t.response.headers=gt.from(t.response.headers))),Promise.reject(t)}))}const Rt=e=>e instanceof gt?e.toJSON():e;function jt(e,t){t=t||{};const n={};function r(e,t,n){return F.isPlainObject(e)&&F.isPlainObject(t)?F.merge.call({caseless:n},e,t):F.isPlainObject(t)?F.merge({},t):F.isArray(t)?t.slice():t}function o(e,t,n){return F.isUndefined(t)?F.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!F.isUndefined(t))return r(void 0,t)}function a(e,t){return F.isUndefined(t)?F.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function s(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(e,t)=>o(Rt(e),Rt(t),!0)};return F.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,a=i(e[r],t[r],r);F.isUndefined(a)&&i!==s||(n[r]=a)})),n}const xt="1.4.0",Nt={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Nt[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const kt={};Nt.transitional=function(e,t,n){function r(e,t){return"[Axios v1.4.0] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new K(r(o," has been removed"+(t?" in "+t:"")),K.ERR_DEPRECATED);return t&&!kt[o]&&(kt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Pt={assertOptions:function(e,t,n){if("object"!=typeof e)throw new K("options must be an object",K.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],a=t[i];if(a){const t=e[i],n=void 0===t||a(t,i,e);if(!0!==n)throw new K("option "+i+" must be "+n,K.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new K("Unknown option "+i,K.ERR_BAD_OPTION)}},validators:Nt};const Ut=Pt.validators;class Mt{constructor(e){this.defaults=e,this.interceptors={request:new et,response:new et}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=jt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&Pt.assertOptions(n,{silentJSONParsing:Ut.transitional(Ut.boolean),forcedJSONParsing:Ut.transitional(Ut.boolean),clarifyTimeoutError:Ut.transitional(Ut.boolean)},!1),null!=r&&(F.isFunction(r)?t.paramsSerializer={serialize:r}:Pt.assertOptions(r,{encode:Ut.function,serialize:Ut.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&F.merge(o.common,o[t.method]),i&&F.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=gt.concat(i,o);const a=[];let s=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,a.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!s){const e=[Lt.bind(this),void 0];for(e.unshift.apply(e,a),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);f<l;)u=u.then(e[f++],e[f++]);return u}l=a.length;let h=t;for(f=0;f<l;){const e=a[f++],t=a[f++];try{h=e(h)}catch(e){t.call(this,e);break}}try{u=Lt.call(this,h)}catch(e){return Promise.reject(e)}for(f=0,l=c.length;f<l;)u=u.then(c[f++],c[f++]);return u}getUri(e){return Qe(It((e=jt(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}F.forEach(["delete","get","head","options"],(function(e){Mt.prototype[e]=function(t,n){return this.request(jt(n||{},{method:e,url:t,data:(n||{}).data}))}})),F.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(jt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Mt.prototype[e]=t(),Mt.prototype[e+"Form"]=t(!0)}));var Ft=Mt;class $t{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new wt(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new $t((function(t){e=t})),cancel:e}}}var Ht=$t;const zt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(zt).forEach((([e,t])=>{zt[t]=e}));var qt=zt;const Vt=function e(t){const n=new Ft(t),r=a(Ft.prototype.request,n);return F.extend(r,Ft.prototype,n,{allOwnKeys:!0}),F.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(jt(t,n))},r}(st);Vt.Axios=Ft,Vt.CanceledError=wt,Vt.CancelToken=Ht,Vt.isCancel=yt,Vt.VERSION=xt,Vt.toFormData=Ke,Vt.AxiosError=K,Vt.Cancel=Vt.CanceledError,Vt.all=function(e){return Promise.all(e)},Vt.spread=function(e){return function(t){return e.apply(null,t)}},Vt.isAxiosError=function(e){return F.isObject(e)&&!0===e.isAxiosError},Vt.mergeConfig=jt,Vt.AxiosHeaders=gt,Vt.formToJSON=e=>ot(F.isHTMLForm(e)?new FormData(e):e),Vt.HttpStatusCode=qt,Vt.default=Vt;var Wt=Vt;const{Axios:Kt,AxiosError:Jt,CanceledError:Gt,isCancel:Yt,CancelToken:Xt,VERSION:Zt,all:Qt,Cancel:en,isAxiosError:tn,spread:nn,toFormData:rn,AxiosHeaders:on,HttpStatusCode:an,formToJSON:sn,mergeConfig:cn}=Wt,un=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],ln=e=>{let t="";return e.forEach((e=>t+=`${un.filter((t=>t.id===e))[0].name}, `)),t=t.slice(0,-2),t};function fn(e){const t=document.querySelector("#modal");t.innerHTML=`\n      <div class="modal modal-content">\n      <button type="button" class="button-modal-close">\n      <svg\n      xmlns="http://www.w3.org/2000/svg"\n      width="11"\n      height="11"\n      viewBox="0 0 11 11"\n      fill="none"\n    >\n      <path\n        d="M11 1.10786L9.89214 0L5.5 4.39214L1.10786 0L0 1.10786L4.39214 5.5L0 9.89214L1.10786 11L5.5 6.60786L9.89214 11L11 9.89214L6.60786 5.5L11 1.10786Z"\n        fill="black"\n      />\n    </svg>\n    </button>\n      <img class="modal-content__movie-poster" src="https://image.tmdb.org/t/p/w500${e.poster_path}"/>\n        <h3 class="modal-content__movie-title">${e.title}</h3>\n        <ul class="modal-content__list">\n        <div class="modal-content__list-box-1">\n        <li>Vote / Votes</li>\n        <li class="modal-content__list-result"><span class="text-transform-1">${Math.round(e.vote_average).toFixed(1)}</span> / <span class="text-transform-2"> ${e.vote_count}</span></li>\n\n        </div>\n        <div class="modal-content__list-box-2">\n        <li>Popularity</li>\n        <li class="modal-content__list-result">${Math.round(e.popularity).toFixed(1)}</li>\n        </div>\n        <div class="modal-content__list-box-3">\n        <li class="text-transform-li">Original Title</li>\n        <li class="modal-content__list-result"><span class="text-transform-3">${e.original_title}</span></li>\n        </div>\n        <div class="modal-content__list-box-4">\n        <li>Genre</li>\n        <li class="modal-content__list-result">${ln(e.genre_ids)}</li>\n        </div>\n        </ul>\n        <h4 class="modal-content__movie-about">About</h4>\n        <p class="modal-content__text">${e.overview}</p>\n        <div class="button-modal">\n      <button type="button" class="button-modal__watched">add to watched</button>\n      <button type="button" class="button-modal__queue">add to queue</button>\n      </div>\n      </div>`,t.classList.remove("is-hidden-modal");document.querySelector(".button-modal-close").addEventListener("click",pn),hn=window.pageYOffset||document.documentElement.scrollTop,dn.classList.add("lock-scroll","lock-scroll-modal-open")}window.addEventListener("keydown",pn);let hn=0;const dn=document.body;function pn(e){("click"===e.type||"keydown"===e.type&&"Escape"===e.key)&&(modal.innerHTML="",modal.classList.add("is-hidden-modal"),dn.classList.remove("lock-scroll","lock-scroll-modal-open"),window.scrollTo(0,hn))}i.galleryEl.addEventListener("click",(e=>{e.target.matches("figure")&&console.log(e.target.dataset.id),console.log(e.target)}));const{galleryEl:gn}=i;var mn;mn=new URL(o("ifJdc").resolve("iDgI1"),import.meta.url).toString();const yn=e=>{e.forEach((e=>{const t=document.createElement("figure");t.classList.add("gallery__movie-container"),t.dataset.id=e.id;let n="";n=null===e.poster_path?new URL(mn):`https://image.tmdb.org/t/p/w500${e.poster_path}`,t.innerHTML=`\n    <img class="gallery__movie-poster" src="${n}" alt="${e.title} poster" \n    width="500" height="auto"/>\n    <h3 class="gallery__movie-title">${e.title}</h3>\n    <p class="gallery__movie-genres">\n    ${ln(e.genre_ids)} | ${e.release_date.slice(0,4)}</p>`,gn.appendChild(t);t.querySelectorAll(".gallery__movie-poster").forEach((t=>{t.addEventListener("click",(()=>fn(e)))}))}))};let bn=!1;const wn="https://api.themoviedb.org/3/",vn="79ea8908d5d0aaabd49d601dd35d503a",En="en-US";let Sn=0;const In=async e=>{try{const t=await Wt.get(e);Sn=t.data.total_pages,console.log(Sn),console.log(t.data),yn(t.data.results)}catch(e){console.log(e)}},An=async(e,t)=>{bn=!0;const n=await Wt.get(`${wn}search/movie`,{params:{query:e,api_key:vn,language:En,include_adult:!1,page:t}});return Sn=n.data.total_pages,console.log(Sn),n.data},Tn=async()=>{const e=await Wt.get(`${wn}trending/movie/week`,{params:{api_key:vn,language:En,include_adult:!1}}),t=await e.data;yn(t.results)},{galleryEl:On,observerGalleryEl:_n}=i;_n.style.display="none";const Cn="https://api.themoviedb.org/3/";let Dn=1;const Bn=()=>new URLSearchParams({query:"",api_key:"79ea8908d5d0aaabd49d601dd35d503a",language:"en-US",include_adult:!1,page:Dn});new IntersectionObserver((async e=>{if(e[0].isIntersecting&&(console.log("obserwuje"),Dn<Sn))if(Dn+=1,bn);else{const e=`${Cn}trending/movie/week?${Bn()}`;await In(e)}}),{rootMargin:"550px"}).observe(_n);const Ln=`${Cn}trending/movie/week?${Bn()}`;setTimeout((()=>{_n.style.display="initial"}),1e3),In(Ln);let Rn=0,jn=document.querySelector(".header");console.log(jn),window.addEventListener("scroll",(()=>{let e=window.pageYOffset||document.documentElement.scrollTop;jn.style.top=e>Rn?"-227px":"0",Rn=e})),i.formEl.addEventListener("submit",(e=>{e.preventDefault(),i.galleryEl.innerHTML="",i.errorEl.innerHTML="",An(i.searchEl.value).then((e=>{0===e.results.length&&(i.errorEl.innerHTML="SEARCH RESULT NOT SUCCESSFUL. ENTER THE CORRECT MOVIE NAME",Tn()),yn(e.results)})).catch((e=>console.log(e)))})),window.addEventListener("load",(()=>{const e=document.querySelector(".loader");e.classList.add("loader-hidden"),e.addEventListener("transitionend",(()=>{document.body.removeChild("loader")}))}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var xn,Nn,kn,Pn=xn={};function Un(){throw new Error("setTimeout has not been defined")}function Mn(){throw new Error("clearTimeout has not been defined")}function Fn(e){if(Nn===setTimeout)return setTimeout(e,0);if((Nn===Un||!Nn)&&setTimeout)return Nn=setTimeout,setTimeout(e,0);try{return Nn(e,0)}catch(t){try{return Nn.call(null,e,0)}catch(t){return Nn.call(this,e,0)}}}!function(){try{Nn="function"==typeof setTimeout?setTimeout:Un}catch(e){Nn=Un}try{kn="function"==typeof clearTimeout?clearTimeout:Mn}catch(e){kn=Mn}}();var $n,Hn=[],zn=!1,qn=-1;function Vn(){zn&&$n&&(zn=!1,$n.length?Hn=$n.concat(Hn):qn=-1,Hn.length&&Wn())}function Wn(){if(!zn){var e=Fn(Vn);zn=!0;for(var t=Hn.length;t;){for($n=Hn,Hn=[];++qn<t;)$n&&$n[qn].run();qn=-1,t=Hn.length}$n=null,zn=!1,function(e){if(kn===clearTimeout)return clearTimeout(e);if((kn===Mn||!kn)&&clearTimeout)return kn=clearTimeout,clearTimeout(e);try{return kn(e)}catch(t){try{return kn.call(null,e)}catch(t){return kn.call(this,e)}}}(e)}}function Kn(e,t){this.fun=e,this.array=t}function Jn(){}Pn.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];Hn.push(new Kn(e,t)),1!==Hn.length||zn||Fn(Wn)},Kn.prototype.run=function(){this.fun.apply(null,this.array)},Pn.title="browser",Pn.browser=!0,Pn.env={},Pn.argv=[],Pn.version="",Pn.versions={},Pn.on=Jn,Pn.addListener=Jn,Pn.once=Jn,Pn.off=Jn,Pn.removeListener=Jn,Pn.removeAllListeners=Jn,Pn.emit=Jn,Pn.prependListener=Jn,Pn.prependOnceListener=Jn,Pn.listeners=function(e){return[]},Pn.binding=function(e){throw new Error("process.binding is not supported")},Pn.cwd=function(){return"/"},Pn.chdir=function(e){throw new Error("process.chdir is not supported")},Pn.umask=function(){return 0};const Gn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},Yn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const o=e[t],i=t+1<e.length,a=i?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,u=o>>2,l=(3&o)<<4|a>>4;let f=(15&a)<<2|c>>6,h=63&c;s||(h=64,i||(f=64)),r.push(n[u],n[l],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Gn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&i)}else if(o>239&&o<365){const i=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&i)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==i||null==a||null==s)throw new Xn;const c=o<<2|i>>4;if(r.push(c),64!==a){const e=i<<4&240|a>>2;if(r.push(e),64!==s){const e=a<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zn=function(e){return function(e){const t=Gn(e);return Yn.encodeByteArray(t,!0)}(e).replace(/\./g,"")},Qn=function(e){try{return Yn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const er=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,tr=()=>{try{return er()||(()=>{if(void 0===xn||void 0===xn.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&Qn(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},nr=()=>{var e;return null===(e=tr())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ir(){try{return"object"==typeof indexedDB}catch(e){return!1}}function ar(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function sr(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,cr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ur.prototype.create)}}class ur{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?function(e,t){return e.replace(lr,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(o,n):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new cr(r,a,n)}}const lr=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],i=t[o];if(hr(n)&&hr(i)){if(!fr(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function hr(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dr=1e3,pr=2,gr=144e5,mr=.5;function yr(e,t=dr,n=pr){const r=t*Math.pow(n,e),o=Math.round(mr*r*(Math.random()-.5)*2);return Math.min(gr,r+o)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function br(e){return e&&e._delegate?e._delegate:e}class wr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new rr;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===vr?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Sr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Er(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=[];var Ar,Tr;(Tr=Ar||(Ar={}))[Tr.DEBUG=0]="DEBUG",Tr[Tr.VERBOSE=1]="VERBOSE",Tr[Tr.INFO=2]="INFO",Tr[Tr.WARN=3]="WARN",Tr[Tr.ERROR=4]="ERROR",Tr[Tr.SILENT=5]="SILENT";const Or={debug:Ar.DEBUG,verbose:Ar.VERBOSE,info:Ar.INFO,warn:Ar.WARN,error:Ar.ERROR,silent:Ar.SILENT},_r=Ar.INFO,Cr={[Ar.DEBUG]:"log",[Ar.VERBOSE]:"log",[Ar.INFO]:"info",[Ar.WARN]:"warn",[Ar.ERROR]:"error"},Dr=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=Cr[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class Br{constructor(e){this.name=e,this._logLevel=_r,this._logHandler=Dr,this._userLogHandler=null,Ir.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ar))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Or[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ar.DEBUG,...e),this._logHandler(this,Ar.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ar.VERBOSE,...e),this._logHandler(this,Ar.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ar.INFO,...e),this._logHandler(this,Ar.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ar.WARN,...e),this._logHandler(this,Ar.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ar.ERROR,...e),this._logHandler(this,Ar.ERROR,...e)}}const Lr=(e,t)=>t.some((t=>e instanceof t));let Rr,jr;const xr=new WeakMap,Nr=new WeakMap,kr=new WeakMap,Pr=new WeakMap,Ur=new WeakMap;let Mr={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Nr.get(e);if("objectStoreNames"===t)return e.objectStoreNames||kr.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Fr(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(jr||(jr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(zr(this),t),Hr(xr.get(this))}:function(...t){return Hr(e.apply(zr(this),t))}:function(t,...n){const r=e.call(zr(this),t,...n);return kr.set(r,t.sort?t.sort():[t]),Hr(r)}}function $r(e){return"function"==typeof e?Fr(e):(e instanceof IDBTransaction&&function(e){if(Nr.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));Nr.set(e,t)}(e),Lr(e,Rr||(Rr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Mr):e)}function Hr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(Hr(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&xr.set(t,e)})).catch((()=>{})),Ur.set(t,e),t}(e);if(Pr.has(e))return Pr.get(e);const t=$r(e);return t!==e&&(Pr.set(e,t),Ur.set(t,e)),t}const zr=e=>Ur.get(e);function qr(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=Hr(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(Hr(a.result),e.oldVersion,e.newVersion,Hr(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),s.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(e=>o(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),s}const Vr=["get","getKey","getAll","getAllKeys","count"],Wr=["put","add","delete","clear"],Kr=new Map;function Jr(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Kr.get(t))return Kr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Wr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Vr.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return Kr.set(t,i),i}Mr=(e=>({...e,get:(t,n,r)=>Jr(t,n)||e.get(t,n,r),has:(t,n)=>!!Jr(t,n)||e.has(t,n)}))(Mr);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Yr="@firebase/app",Xr="0.9.10",Zr=new Br("@firebase/app"),Qr="[DEFAULT]",eo={[Yr]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},to=new Map,no=new Map;function ro(e,t){try{e.container.addComponent(t)}catch(n){Zr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function oo(e){const t=e.name;if(no.has(t))return Zr.debug(`There were multiple attempts to register component ${t}.`),!1;no.set(t,e);for(const t of to.values())ro(t,e);return!0}function io(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ao=new ur("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class so{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new wr("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ao.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Qr,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!=typeof o||!o)throw ao.create("bad-app-name",{appName:String(o)});if(n||(n=nr()),!n)throw ao.create("no-options");const i=to.get(o);if(i){if(fr(n,i.options)&&fr(r,i.config))return i;throw ao.create("duplicate-app",{appName:o})}const a=new Sr(o);for(const e of no.values())a.addComponent(e);const s=new so(n,r,a);return to.set(o,s),s}function uo(e=Qr){const t=to.get(e);if(!t&&e===Qr&&nr())return co();if(!t)throw ao.create("no-app",{appName:e});return t}function lo(e,t,n){var r;let o=null!==(r=eo[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const i=o.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const e=[`Unable to register library "${o}" with version "${t}":`];return i&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Zr.warn(e.join(" "))}oo(new wr(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fo="firebase-heartbeat-database",ho=1,po="firebase-heartbeat-store";let go=null;function mo(){return go||(go=qr(fo,ho,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(po)}}).catch((e=>{throw ao.create("idb-open",{originalErrorMessage:e.message})}))),go}async function yo(e,t){try{const n=(await mo()).transaction(po,"readwrite"),r=n.objectStore(po);await r.put(t,bo(e)),await n.done}catch(e){if(e instanceof cr)Zr.warn(e.message);else{const t=ao.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Zr.warn(t.message)}}}function bo(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Eo(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=vo();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=vo(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),So(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),So(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=Zn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function vo(){return(new Date).toISOString().substring(0,10)}class Eo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!ir()&&ar().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{const t=await mo();return await t.transaction(po).objectStore(po).get(bo(e))}catch(e){if(e instanceof cr)Zr.warn(e.message);else{const t=ao.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Zr.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return yo(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return yo(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function So(e){return Zn(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Io;Io="",oo(new wr("platform-logger",(e=>new Gr(e)),"PRIVATE")),oo(new wr("heartbeat",(e=>new wo(e)),"PRIVATE")),lo(Yr,Xr,Io),lo(Yr,Xr,"esm2017"),lo("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
lo("firebase","9.22.0","app");const Ao=(e,t)=>t.some((t=>e instanceof t));let To,Oo;const _o=new WeakMap,Co=new WeakMap,Do=new WeakMap,Bo=new WeakMap,Lo=new WeakMap;let Ro={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Co.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Do.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return No(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function jo(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Oo||(Oo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(ko(this),t),No(_o.get(this))}:function(...t){return No(e.apply(ko(this),t))}:function(t,...n){const r=e.call(ko(this),t,...n);return Do.set(r,t.sort?t.sort():[t]),No(r)}}function xo(e){return"function"==typeof e?jo(e):(e instanceof IDBTransaction&&function(e){if(Co.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)}));Co.set(e,t)}(e),Ao(e,To||(To=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Ro):e)}function No(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{t(No(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&_o.set(t,e)})).catch((()=>{})),Lo.set(t,e),t}(e);if(Bo.has(e))return Bo.get(e);const t=xo(e);return t!==e&&(Bo.set(e,t),Lo.set(t,e)),t}const ko=e=>Lo.get(e);function Po(e,t,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const a=indexedDB.open(e,t),s=No(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(No(a.result),e.oldVersion,e.newVersion,No(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const Uo=["get","getKey","getAll","getAllKeys","count"],Mo=["put","add","delete","clear"],Fo=new Map;function $o(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Fo.get(t))return Fo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Mo.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Uo.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,o?"readwrite":"readonly");let a=i.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),o&&i.done]))[0]};return Fo.set(t,i),i}!function(e){Ro=e(Ro)}((e=>({...e,get:(t,n,r)=>$o(t,n)||e.get(t,n,r),has:(t,n)=>!!$o(t,n)||e.has(t,n)})));const Ho="@firebase/installations",zo="0.6.4",qo=1e4,Vo=`w:${zo}`,Wo="FIS_v2",Ko="https://firebaseinstallations.googleapis.com/v1",Jo=36e5,Go=new ur("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Yo(e){return e instanceof cr&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo({projectId:e}){return`${Ko}/projects/${e}/installations`}function Zo(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Qo(e,t){const n=(await t.json()).error;return Go.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function ei({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ti(e,{refreshToken:t}){const n=ei(e);return n.append("Authorization",function(e){return`${Wo} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function ni(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const oi=/^[cdef][\w-]{21}$/,ii="";function ai(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){const t=(n=e,btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return oi.test(t)?t:ii}catch(e){return ii}}function si(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new Map;function ui(e,t){const n=si(e);li(n,t),function(e,t){const n=hi();n&&n.postMessage({key:e,fid:t});di()}(n,t)}function li(e,t){const n=ci.get(e);if(n)for(const e of n)e(t)}let fi=null;function hi(){return!fi&&"BroadcastChannel"in self&&(fi=new BroadcastChannel("[Firebase] FID Change"),fi.onmessage=e=>{li(e.data.key,e.data.fid)}),fi}function di(){0===ci.size&&fi&&(fi.close(),fi=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi="firebase-installations-database",gi=1,mi="firebase-installations-store";let yi=null;function bi(){return yi||(yi=Po(pi,gi,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(mi)}})),yi}async function wi(e,t){const n=si(e),r=(await bi()).transaction(mi,"readwrite"),o=r.objectStore(mi),i=await o.get(n);return await o.put(t,n),await r.done,i&&i.fid===t.fid||ui(e,t.fid),t}async function vi(e){const t=si(e),n=(await bi()).transaction(mi,"readwrite");await n.objectStore(mi).delete(t),await n.done}async function Ei(e,t){const n=si(e),r=(await bi()).transaction(mi,"readwrite"),o=r.objectStore(mi),i=await o.get(n),a=t(i);return void 0===a?await o.delete(n):await o.put(a,n),await r.done,!a||i&&i.fid===a.fid||ui(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Si(e){let t;const n=await Ei(e.appConfig,(n=>{const r=function(e){const t=e||{fid:ai(),registrationStatus:0};return Ti(t)}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Go.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Xo(e),o=ei(e),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const a={fid:n,authVersion:Wo,appId:e.appId,sdkVersion:Vo},s={method:"POST",headers:o,body:JSON.stringify(a)},c=await ni((()=>fetch(r,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Zo(e.authToken)}}throw await Qo("Create Installation",c)}(e,t);return wi(e.appConfig,n)}catch(n){throw Yo(n)&&409===n.customData.serverCode?await vi(e.appConfig):await wi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ii(e)}:{installationEntry:t}}(e,r);return t=o.registrationPromise,o.installationEntry}));return n.fid===ii?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Ii(e){let t=await Ai(e.appConfig);for(;1===t.registrationStatus;)await ri(100),t=await Ai(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Si(e);return n||t}return t}function Ai(e){return Ei(e,(e=>{if(!e)throw Go.create("installation-not-found");return Ti(e)}))}function Ti(e){return 1===(t=e).registrationStatus&&t.registrationTime+qo<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Oi({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${Xo(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),o=ti(e,n),i=t.getImmediate({optional:!0});if(i){const e=await i.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const a={installation:{sdkVersion:Vo,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(a)},c=await ni((()=>fetch(r,s)));if(c.ok){return Zo(await c.json())}throw await Qo("Generate Auth Token",c)}async function _i(e,t=!1){let n;const r=await Ei(e.appConfig,(r=>{if(!Di(r))throw Go.create("not-registered");const o=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Jo}(e)}(o))return r;if(1===o.requestStatus)return n=async function(e,t){let n=await Ci(e.appConfig);for(;1===n.authToken.requestStatus;)await ri(100),n=await Ci(e.appConfig);const r=n.authToken;return 0===r.requestStatus?_i(e,t):r}(e,t),r;{if(!navigator.onLine)throw Go.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Oi(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await wi(e.appConfig,r),n}catch(n){if(!Yo(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await wi(e.appConfig,n)}else await vi(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Ci(e){return Ei(e,(e=>{if(!Di(e))throw Go.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+qo<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Di(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Bi(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Si(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await _i(n,t)).token}function Li(e){return Go.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri="installations",ji=e=>{const t=io(e.getProvider("app").getImmediate(),Ri).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Si(t);return r?r.catch(console.error):_i(t).catch(console.error),n.fid}(t),getToken:e=>Bi(t,e)}};oo(new wr(Ri,(e=>{const t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw Li("App Configuration");if(!e.name)throw Li("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Li(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:io(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),oo(new wr("installations-internal",ji,"PRIVATE")),lo(Ho,zo),lo(Ho,zo,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const xi="analytics",Ni="firebase_id",ki="origin",Pi=6e4,Ui="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mi="https://www.googletagmanager.com/gtag/js",Fi=new Br("@firebase/analytics"),$i=new ur("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hi(e){if(!e.startsWith(Mi)){const t=$i.create("invalid-gtag-resource",{gtagURL:e});return Fi.warn(t.message),""}return e}function zi(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function qi(e,t){const n=function(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}("firebase-js-sdk-policy",{createScriptURL:Hi}),r=document.createElement("script"),o=`${Mi}?l=${e}&id=${t}`;r.src=n?null==n?void 0:n.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function Vi(e,t,n,r){return async function(o,...i){try{if("event"===o){const[r,o]=i;await async function(e,t,n,r,o){try{let i=[];if(o&&o.send_to){let e=o.send_to;Array.isArray(e)||(e=[e]);const r=await zi(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),o=e&&t[e.appId];if(!o){i=[];break}i.push(o)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",r,o||{})}catch(e){Fi.error(e)}}(e,t,n,r,o)}else if("config"===o){const[o,a]=i;await async function(e,t,n,r,o,i){const a=r[o];try{if(a)await t[a];else{const e=(await zi(n)).find((e=>e.measurementId===o));e&&await t[e.appId]}}catch(e){Fi.error(e)}e("config",o,i)}(e,t,n,r,o,a)}else if("consent"===o){const[t]=i;e("consent","update",t)}else if("get"===o){const[t,n,r]=i;e("get",t,n,r)}else if("set"===o){const[t]=i;e("set",t)}else e(o,...i)}catch(e){Fi.error(e)}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Wi=30;const Ki=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Ji(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Gi(e,t=Ki,n){const{appId:r,apiKey:o,measurementId:i}=e.options;if(!r)throw $i.create("no-app-id");if(!o){if(i)return{measurementId:i,appId:r};throw $i.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Xi;return setTimeout((async()=>{s.abort()}),void 0!==n?n:Pi),Yi({appId:r,apiKey:o,measurementId:i},a,s,t)}async function Yi(e,{throttleEndTimeMillis:t,backoffCount:n},r,o=Ki){var i;const{appId:a,measurementId:s}=e;try{await function(e,t){return new Promise(((n,r)=>{const o=Math.max(t-Date.now(),0),i=setTimeout(n,o);e.addEventListener((()=>{clearTimeout(i),r($i.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(s)return Fi.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`),{appId:a,measurementId:s};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,o={method:"GET",headers:Ji(r)},i=Ui.replace("{app-id}",n),a=await fetch(i,o);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw $i.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return o.deleteThrottleMetadata(a),t}catch(t){const c=t;if(!function(e){if(!(e instanceof cr&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(c)){if(o.deleteThrottleMetadata(a),s)return Fi.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${null==c?void 0:c.message}]`),{appId:a,measurementId:s};throw t}const u=503===Number(null===(i=null==c?void 0:c.customData)||void 0===i?void 0:i.httpStatus)?yr(n,o.intervalMillis,Wi):yr(n,o.intervalMillis),l={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return o.setThrottleMetadata(a,l),Fi.debug(`Calling attemptFetch again in ${u} millis`),Yi(e,l,r,o)}}class Xi{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zi,Qi;function ea(e){Qi=e}function ta(e){Zi=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(e,t,n,r,o,i,a){var s;const c=Gi(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Fi.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Fi.error(e))),t.push(c);const u=async function(){if(!ir())return Fi.warn($i.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await ar()}catch(e){return Fi.warn($i.create("indexeddb-unavailable",{errorInfo:null==e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[l,f]=await Promise.all([c,u]);(function(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Mi)&&n.src.includes(e))return n;return null})(i)||qi(i,l.measurementId),Qi&&(o("consent","default",Qi),ea(void 0)),o("js",new Date);const h=null!==(s=null==a?void 0:a.config)&&void 0!==s?s:{};return h[ki]="firebase",h.update=!0,null!=f&&(h[Ni]=f),o("config",l.measurementId,h),Zi&&(o("set",Zi),ta(void 0)),l.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e){this.app=e}_delete(){return delete oa[this.app.options.appId],Promise.resolve()}}let oa={},ia=[];const aa={};let sa,ca,ua="dataLayer",la="gtag",fa=!1;function ha(e,t,n){!function(){const e=[];if(or()&&e.push("This is a browser extension environment."),sr()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=$i.create("invalid-analytics-context",{errorInfo:t});Fi.warn(n.message)}}();const r=e.options.appId;if(!r)throw $i.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw $i.create("no-api-key");Fi.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=oa[r])throw $i.create("already-exists",{id:r});if(!fa){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(ua);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,o){let i=function(...e){window[r].push(arguments)};return window[o]&&"function"==typeof window[o]&&(i=window[o]),window[o]=Vi(i,e,t,n),{gtagCore:i,wrappedGtag:window[o]}}(oa,ia,aa,ua,la);ca=e,sa=t,fa=!0}oa[r]=na(e,ia,aa,t,sa,ua,n);return new ra(e)}function da(e,t,n,r){e=br(e),async function(e,t,n,r,o){if(o&&o.global)e("event",n,r);else{const o=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:o}))}}(ca,oa[e.app.options.appId],t,n,r).catch((e=>Fi.error(e)))}const pa="@firebase/analytics",ga="0.10.0";oo(new wr(xi,((e,{options:t})=>ha(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),oo(new wr("analytics-internal",(function(e){try{const t=e.getProvider(xi).getImmediate();return{logEvent:(e,n,r)=>da(t,e,n,r)}}catch(e){throw $i.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),lo(pa,ga),lo(pa,ga,"esm2017");!function(e=uo()){const t=io(e=br(e),xi);t.isInitialized()?t.getImmediate():function(e,t={}){const n=io(e,xi);if(n.isInitialized()){const e=n.getImmediate();if(fr(t,n.getOptions()))return e;throw $i.create("already-initialized")}const r=n.initialize({options:t})}(e)}(co({apiKey:"AIzaSyCf2KBwK737nUX82vntvS2B7WF6oOFARrU",authDomain:"filmoteka-js-fecb7.firebaseapp.com",projectId:"filmoteka-js-fecb7",storageBucket:"filmoteka-js-fecb7.appspot.com",messagingSenderId:"171865255669",appId:"1:171865255669:web:c8575883107245d7709fbc",measurementId:"G-V8ZSD2227D"}));
//# sourceMappingURL=index.549d71e7.js.map
