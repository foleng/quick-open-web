/*!
 * Socket.IO v4.5.1
 * (c) 2014-2022 Guillermo Rauch
 * Released under the MIT License.
 */
const t=Object.create(null);t.open="0",t.close="1",t.ping="2",t.pong="3",t.message="4",t.upgrade="5",t.noop="6";const e=Object.create(null);Object.keys(t).forEach((s=>{e[t[s]]=s}));const s={type:"error",data:"parser error"},n="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),i="function"==typeof ArrayBuffer,r=({type:e,data:s},r,a)=>{return n&&s instanceof Blob?r?a(s):o(s,a):i&&(s instanceof ArrayBuffer||(h=s,"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(h):h&&h.buffer instanceof ArrayBuffer))?r?a(s):o(new Blob([s]),a):a(t[e]+(s||""));var h},o=(t,e)=>{const s=new FileReader;return s.onload=function(){const t=s.result.split(",")[1];e("b"+t)},s.readAsDataURL(t)};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h="undefined"==typeof Uint8Array?[]:new Uint8Array(256),c=0;c<a.length;c++)h[a.charCodeAt(c)]=c;const p="function"==typeof ArrayBuffer,u=(t,n)=>{if("string"!=typeof t)return{type:"message",data:d(t,n)};const i=t.charAt(0);if("b"===i)return{type:"message",data:l(t.substring(1),n)};return e[i]?t.length>1?{type:e[i],data:t.substring(1)}:{type:e[i]}:s},l=(t,e)=>{if(p){const s=function(t){var e,s,n,i,r,o=.75*t.length,a=t.length,c=0;"="===t[t.length-1]&&(o--,"="===t[t.length-2]&&o--);var p=new ArrayBuffer(o),u=new Uint8Array(p);for(e=0;e<a;e+=4)s=h[t.charCodeAt(e)],n=h[t.charCodeAt(e+1)],i=h[t.charCodeAt(e+2)],r=h[t.charCodeAt(e+3)],u[c++]=s<<2|n>>4,u[c++]=(15&n)<<4|i>>2,u[c++]=(3&i)<<6|63&r;return p}(t);return d(s,e)}return{base64:!0,data:t}},d=(t,e)=>"blob"===e&&t instanceof ArrayBuffer?new Blob([t]):t,f=String.fromCharCode(30);function y(t){if(t)return function(t){for(var e in y.prototype)t[e]=y.prototype[e];return t}(t)}y.prototype.on=y.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},y.prototype.once=function(t,e){function s(){this.off(t,s),e.apply(this,arguments)}return s.fn=e,this.on(t,s),this},y.prototype.off=y.prototype.removeListener=y.prototype.removeAllListeners=y.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var s,n=this._callbacks["$"+t];if(!n)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var i=0;i<n.length;i++)if((s=n[i])===e||s.fn===e){n.splice(i,1);break}return 0===n.length&&delete this._callbacks["$"+t],this},y.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),s=this._callbacks["$"+t],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(s){n=0;for(var i=(s=s.slice(0)).length;n<i;++n)s[n].apply(this,e)}return this},y.prototype.emitReserved=y.prototype.emit,y.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},y.prototype.hasListeners=function(t){return!!this.listeners(t).length};var g="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function m(t,...e){return e.reduce(((e,s)=>(t.hasOwnProperty(s)&&(e[s]=t[s]),e)),{})}const b=setTimeout,v=clearTimeout;function k(t,e){e.useNativeTimers?(t.setTimeoutFn=b.bind(g),t.clearTimeoutFn=v.bind(g)):(t.setTimeoutFn=setTimeout.bind(g),t.clearTimeoutFn=clearTimeout.bind(g))}class w extends Error{constructor(t,e,s){super(t),this.description=e,this.context=s,this.type="TransportError"}}class _ extends y{constructor(t){super(),this.writable=!1,k(this,t),this.opts=t,this.query=t.query,this.readyState="",this.socket=t.socket}onError(t,e,s){return super.emitReserved("error",new w(t,e,s)),this}open(){return"closed"!==this.readyState&&""!==this.readyState||(this.readyState="opening",this.doOpen()),this}close(){return"opening"!==this.readyState&&"open"!==this.readyState||(this.doClose(),this.onClose()),this}send(t){"open"===this.readyState&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){const e=u(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}}const E="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),A={};let R,O=0,C=0;function T(t){let e="";do{e=E[t%64]+e,t=Math.floor(t/64)}while(t>0);return e}function B(){const t=T(+new Date);return t!==R?(O=0,R=t):t+"."+T(O++)}for(;C<64;C++)A[E[C]]=C;function N(t){let e="";for(let s in t)t.hasOwnProperty(s)&&(e.length&&(e+="&"),e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s]));return e}let x=!1;try{x="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(t){}const S=x;function L(t){const e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||S))return new XMLHttpRequest}catch(t){}if(!e)try{return new(g[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")}catch(t){}}function P(){}const j=null!=new L({xdomain:!1}).responseType;class q extends y{constructor(t,e){super(),k(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.create()}create(){const t=m(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;const e=this.xhr=new L(t);try{e.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders){e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0);for(let t in this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(t)&&e.setRequestHeader(t,this.opts.extraHeaders[t])}}catch(t){}if("POST"===this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(t){}try{e.setRequestHeader("Accept","*/*")}catch(t){}"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),e.onreadystatechange=()=>{4===e.readyState&&(200===e.status||1223===e.status?this.onLoad():this.setTimeoutFn((()=>{this.onError("number"==typeof e.status?e.status:0)}),0))},e.send(this.data)}catch(t){return void this.setTimeoutFn((()=>{this.onError(t)}),0)}"undefined"!=typeof document&&(this.index=q.requestsCount++,q.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=P,t)try{this.xhr.abort()}catch(t){}"undefined"!=typeof document&&delete q.requests[this.index],this.xhr=null}}onLoad(){const t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}if(q.requestsCount=0,q.requests={},"undefined"!=typeof document)if("function"==typeof attachEvent)attachEvent("onunload",I);else if("function"==typeof addEventListener){addEventListener("onpagehide"in g?"pagehide":"unload",I,!1)}function I(){for(let t in q.requests)q.requests.hasOwnProperty(t)&&q.requests[t].abort()}const D="function"==typeof Promise&&"function"==typeof Promise.resolve?t=>Promise.resolve().then(t):(t,e)=>e(t,0),F=g.WebSocket||g.MozWebSocket,M="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase();class U extends _{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;const t=this.uri(),e=this.opts.protocols,s=M?{}:m(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=M?new F(t,e,s):e?new F(t,e):new F(t)}catch(t){return this.emitReserved("error",t)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){const s=t[e],n=e===t.length-1;r(s,this.supportsBinary,(t=>{try{this.ws.send(t)}catch(t){}n&&D((()=>{this.writable=!0,this.emitReserved("drain")}),this.setTimeoutFn)}))}}doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}uri(){let t=this.query||{};const e=this.opts.secure?"wss":"ws";let s="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=B()),this.supportsBinary||(t.b64=1);const n=N(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(n.length?"?"+n:"")}check(){return!(!F||"__initialize"in F&&this.name===U.prototype.name)}}const V={websocket:U,polling:class extends _{constructor(t){if(super(t),this.polling=!1,"undefined"!=typeof location){const e="https:"===location.protocol;let s=location.port;s||(s=e?"443":"80"),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||s!==t.port,this.xs=t.secure!==e}const e=t&&t.forceBase64;this.supportsBinary=j&&!e}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";const e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let t=0;this.polling&&(t++,this.once("pollComplete",(function(){--t||e()}))),this.writable||(t++,this.once("drain",(function(){--t||e()})))}else e()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){((t,e)=>{const s=t.split(f),n=[];for(let t=0;t<s.length;t++){const i=u(s[t],e);if(n.push(i),"error"===i.type)break}return n})(t,this.socket.binaryType).forEach((t=>{if("opening"===this.readyState&&"open"===t.type&&this.onOpen(),"close"===t.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(t)})),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){const t=()=>{this.write([{type:"close"}])};"open"===this.readyState?t():this.once("open",t)}write(t){this.writable=!1,((t,e)=>{const s=t.length,n=new Array(s);let i=0;t.forEach(((t,o)=>{r(t,!1,(t=>{n[o]=t,++i===s&&e(n.join(f))}))}))})(t,(t=>{this.doWrite(t,(()=>{this.writable=!0,this.emitReserved("drain")}))}))}uri(){let t=this.query||{};const e=this.opts.secure?"https":"http";let s="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=B()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port);const n=N(t);return e+"://"+(-1!==this.opts.hostname.indexOf(":")?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(n.length?"?"+n:"")}request(t={}){return Object.assign(t,{xd:this.xd,xs:this.xs},this.opts),new q(this.uri(),t)}doWrite(t,e){const s=this.request({method:"POST",data:t});s.on("success",e),s.on("error",((t,e)=>{this.onError("xhr post error",t,e)}))}doPoll(){const t=this.request();t.on("data",this.onData.bind(this)),t.on("error",((t,e)=>{this.onError("xhr poll error",t,e)})),this.pollXhr=t}}},H=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,K=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Y(t){const e=t,s=t.indexOf("["),n=t.indexOf("]");-1!=s&&-1!=n&&(t=t.substring(0,s)+t.substring(s,n).replace(/:/g,";")+t.substring(n,t.length));let i=H.exec(t||""),r={},o=14;for(;o--;)r[K[o]]=i[o]||"";return-1!=s&&-1!=n&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=function(t,e){const s=/\/{2,9}/g,n=e.replace(s,"/").split("/");"/"!=e.substr(0,1)&&0!==e.length||n.splice(0,1);"/"==e.substr(e.length-1,1)&&n.splice(n.length-1,1);return n}(0,r.path),r.queryKey=function(t,e){const s={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,(function(t,e,n){e&&(s[e]=n)})),s}(0,r.query),r}class z extends y{constructor(t,e={}){super(),t&&"object"==typeof t&&(e=t,t=null),t?(t=Y(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=Y(e.host).host),k(this,e),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket"],this.readyState="",this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},e),this.opts.path=this.opts.path.replace(/\/$/,"")+"/","string"==typeof this.opts.query&&(this.opts.query=function(t){let e={},s=t.split("&");for(let t=0,n=s.length;t<n;t++){let n=s[t].split("=");e[decodeURIComponent(n[0])]=decodeURIComponent(n[1])}return e}(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&addEventListener("beforeunload",(()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())}),!1),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){const e=Object.assign({},this.opts.query);e.EIO=4,e.transport=t,this.id&&(e.sid=this.id);const s=Object.assign({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new V[t](s)}open(){let t;if(this.opts.rememberUpgrade&&z.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else{if(0===this.transports.length)return void this.setTimeoutFn((()=>{this.emitReserved("error","No transports available")}),0);t=this.transports[0]}this.readyState="opening";try{t=this.createTransport(t)}catch(t){return this.transports.shift(),void this.open()}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",(t=>this.onClose("transport close",t)))}probe(t){let e=this.createTransport(t),s=!1;z.priorWebsocketSuccess=!1;const n=()=>{s||(e.send([{type:"ping",data:"probe"}]),e.once("packet",(t=>{if(!s)if("pong"===t.type&&"probe"===t.data){if(this.upgrading=!0,this.emitReserved("upgrading",e),!e)return;z.priorWebsocketSuccess="websocket"===e.name,this.transport.pause((()=>{s||"closed"!==this.readyState&&(c(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())}))}else{const t=new Error("probe error");t.transport=e.name,this.emitReserved("upgradeError",t)}})))};function i(){s||(s=!0,c(),e.close(),e=null)}const r=t=>{const s=new Error("probe error: "+t);s.transport=e.name,i(),this.emitReserved("upgradeError",s)};function o(){r("transport closed")}function a(){r("socket closed")}function h(t){e&&t.name!==e.name&&i()}const c=()=>{e.removeListener("open",n),e.removeListener("error",r),e.removeListener("close",o),this.off("close",a),this.off("upgrading",h)};e.once("open",n),e.once("error",r),e.once("close",o),this.once("close",a),this.once("upgrading",h),e.open()}onOpen(){if(this.readyState="open",z.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade&&this.transport.pause){let t=0;const e=this.upgrades.length;for(;t<e;t++)this.probe(this.upgrades[t])}}onPacket(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":const e=new Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn((()=>{this.onClose("ping timeout")}),this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){if(!(this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let s=0;s<this.writeBuffer.length;s++){const n=this.writeBuffer[s].data;if(n&&(t+="string"==typeof(e=n)?function(t){let e=0,s=0;for(let n=0,i=t.length;n<i;n++)e=t.charCodeAt(n),e<128?s+=1:e<2048?s+=2:e<55296||e>=57344?s+=3:(n++,s+=4);return s}(e):Math.ceil(1.33*(e.byteLength||e.size))),s>0&&t>this.maxPayload)return this.writeBuffer.slice(0,s);t+=2}var e;return this.writeBuffer}write(t,e,s){return this.sendPacket("message",t,e,s),this}send(t,e,s){return this.sendPacket("message",t,e,s),this}sendPacket(t,e,s,n){if("function"==typeof e&&(n=e,e=void 0),"function"==typeof s&&(n=s,s=null),"closing"===this.readyState||"closed"===this.readyState)return;(s=s||{}).compress=!1!==s.compress;const i={type:t,data:e,options:s};this.emitReserved("packetCreate",i),this.writeBuffer.push(i),n&&this.once("flush",n),this.flush()}close(){const t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},s=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return"opening"!==this.readyState&&"open"!==this.readyState||(this.readyState="closing",this.writeBuffer.length?this.once("drain",(()=>{this.upgrading?s():t()})):this.upgrading?s():t()),this}onError(t){z.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){"opening"!==this.readyState&&"open"!==this.readyState&&"closing"!==this.readyState||(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&removeEventListener("offline",this.offlineEventListener,!1),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){const e=[];let s=0;const n=t.length;for(;s<n;s++)~this.transports.indexOf(t[s])&&e.push(t[s]);return e}}z.protocol=4;const W="function"==typeof ArrayBuffer,$=Object.prototype.toString,J="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===$.call(Blob),X="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===$.call(File);function G(t){return W&&(t instanceof ArrayBuffer||(t=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer)(t))||J&&t instanceof Blob||X&&t instanceof File}function Q(t,e){if(!t||"object"!=typeof t)return!1;if(Array.isArray(t)){for(let e=0,s=t.length;e<s;e++)if(Q(t[e]))return!0;return!1}if(G(t))return!0;if(t.toJSON&&"function"==typeof t.toJSON&&1===arguments.length)return Q(t.toJSON(),!0);for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e)&&Q(t[e]))return!0;return!1}function Z(t){const e=[],s=t.data,n=t;return n.data=tt(s,e),n.attachments=e.length,{packet:n,buffers:e}}function tt(t,e){if(!t)return t;if(G(t)){const s={_placeholder:!0,num:e.length};return e.push(t),s}if(Array.isArray(t)){const s=new Array(t.length);for(let n=0;n<t.length;n++)s[n]=tt(t[n],e);return s}if("object"==typeof t&&!(t instanceof Date)){const s={};for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s[n]=tt(t[n],e));return s}return t}function et(t,e){return t.data=st(t.data,e),t.attachments=void 0,t}function st(t,e){if(!t)return t;if(t&&t._placeholder)return e[t.num];if(Array.isArray(t))for(let s=0;s<t.length;s++)t[s]=st(t[s],e);else if("object"==typeof t)for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(t[s]=st(t[s],e));return t}const nt=5;var it;!function(t){t[t.CONNECT=0]="CONNECT",t[t.DISCONNECT=1]="DISCONNECT",t[t.EVENT=2]="EVENT",t[t.ACK=3]="ACK",t[t.CONNECT_ERROR=4]="CONNECT_ERROR",t[t.BINARY_EVENT=5]="BINARY_EVENT",t[t.BINARY_ACK=6]="BINARY_ACK"}(it||(it={}));class rt extends y{constructor(t){super(),this.reviver=t}add(t){let e;if("string"==typeof t)e=this.decodeString(t),e.type===it.BINARY_EVENT||e.type===it.BINARY_ACK?(this.reconstructor=new ot(e),0===e.attachments&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e);else{if(!G(t)&&!t.base64)throw new Error("Unknown type: "+t);if(!this.reconstructor)throw new Error("got binary data when not reconstructing a packet");e=this.reconstructor.takeBinaryData(t),e&&(this.reconstructor=null,super.emitReserved("decoded",e))}}decodeString(t){let e=0;const s={type:Number(t.charAt(0))};if(void 0===it[s.type])throw new Error("unknown packet type "+s.type);if(s.type===it.BINARY_EVENT||s.type===it.BINARY_ACK){const n=e+1;for(;"-"!==t.charAt(++e)&&e!=t.length;);const i=t.substring(n,e);if(i!=Number(i)||"-"!==t.charAt(e))throw new Error("Illegal attachments");s.attachments=Number(i)}if("/"===t.charAt(e+1)){const n=e+1;for(;++e;){if(","===t.charAt(e))break;if(e===t.length)break}s.nsp=t.substring(n,e)}else s.nsp="/";const n=t.charAt(e+1);if(""!==n&&Number(n)==n){const n=e+1;for(;++e;){const s=t.charAt(e);if(null==s||Number(s)!=s){--e;break}if(e===t.length)break}s.id=Number(t.substring(n,e+1))}if(t.charAt(++e)){const n=this.tryParse(t.substr(e));if(!rt.isPayloadValid(s.type,n))throw new Error("invalid payload");s.data=n}return s}tryParse(t){try{return JSON.parse(t,this.reviver)}catch(t){return!1}}static isPayloadValid(t,e){switch(t){case it.CONNECT:return"object"==typeof e;case it.DISCONNECT:return void 0===e;case it.CONNECT_ERROR:return"string"==typeof e||"object"==typeof e;case it.EVENT:case it.BINARY_EVENT:return Array.isArray(e)&&e.length>0;case it.ACK:case it.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&this.reconstructor.finishedReconstruction()}}class ot{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){const t=et(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}var at=Object.freeze({__proto__:null,protocol:5,get PacketType(){return it},Encoder:class{constructor(t){this.replacer=t}encode(t){return t.type!==it.EVENT&&t.type!==it.ACK||!Q(t)?[this.encodeAsString(t)]:(t.type=t.type===it.EVENT?it.BINARY_EVENT:it.BINARY_ACK,this.encodeAsBinary(t))}encodeAsString(t){let e=""+t.type;return t.type!==it.BINARY_EVENT&&t.type!==it.BINARY_ACK||(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){const e=Z(t),s=this.encodeAsString(e.packet),n=e.buffers;return n.unshift(s),n}},Decoder:rt});function ht(t,e,s){return t.on(e,s),function(){t.off(e,s)}}const ct=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class pt extends y{constructor(t,e,s){super(),this.connected=!1,this.receiveBuffer=[],this.sendBuffer=[],this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,s&&s.auth&&(this.auth=s.auth),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const t=this.io;this.subs=[ht(t,"open",this.onopen.bind(this)),ht(t,"packet",this.onpacket.bind(this)),ht(t,"error",this.onerror.bind(this)),ht(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){if(ct.hasOwnProperty(t))throw new Error('"'+t+'" is a reserved event name');e.unshift(t);const s={type:it.EVENT,data:e,options:{}};if(s.options.compress=!1!==this.flags.compress,"function"==typeof e[e.length-1]){const t=this.ids++,n=e.pop();this._registerAckCallback(t,n),s.id=t}const n=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable;return this.flags.volatile&&(!n||!this.connected)||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(t,e){const s=this.flags.timeout;if(void 0===s)return void(this.acks[t]=e);const n=this.io.setTimeoutFn((()=>{delete this.acks[t];for(let e=0;e<this.sendBuffer.length;e++)this.sendBuffer[e].id===t&&this.sendBuffer.splice(e,1);e.call(this,new Error("operation has timed out"))}),s);this.acks[t]=(...t)=>{this.io.clearTimeoutFn(n),e.apply(this,[null,...t])}}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){"function"==typeof this.auth?this.auth((t=>{this.packet({type:it.CONNECT,data:t})})):this.packet({type:it.CONNECT,data:this.auth})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}onpacket(t){if(t.nsp===this.nsp)switch(t.type){case it.CONNECT:if(t.data&&t.data.sid){const e=t.data.sid;this.onconnect(e)}else this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case it.EVENT:case it.BINARY_EVENT:this.onevent(t);break;case it.ACK:case it.BINARY_ACK:this.onack(t);break;case it.DISCONNECT:this.ondisconnect();break;case it.CONNECT_ERROR:this.destroy();const e=new Error(t.data.message);e.data=t.data.data,this.emitReserved("connect_error",e)}}onevent(t){const e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){const e=this._anyListeners.slice();for(const s of e)s.apply(this,t)}super.emit.apply(this,t)}ack(t){const e=this;let s=!1;return function(...n){s||(s=!0,e.packet({type:it.ACK,id:t,data:n}))}}onack(t){const e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}onconnect(t){this.id=t,this.connected=!0,this.emitBuffered(),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach((t=>this.emitEvent(t))),this.receiveBuffer=[],this.sendBuffer.forEach((t=>{this.notifyOutgoingListeners(t),this.packet(t)})),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach((t=>t())),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:it.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){const e=this._anyListeners;for(let s=0;s<e.length;s++)if(t===e[s])return e.splice(s,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){const e=this._anyOutgoingListeners;for(let s=0;s<e.length;s++)if(t===e[s])return e.splice(s,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const e=this._anyOutgoingListeners.slice();for(const s of e)s.apply(this,t.data)}}}function ut(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}ut.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),s=Math.floor(e*this.jitter*t);t=0==(1&Math.floor(10*e))?t-s:t+s}return 0|Math.min(t,this.max)},ut.prototype.reset=function(){this.attempts=0},ut.prototype.setMin=function(t){this.ms=t},ut.prototype.setMax=function(t){this.max=t},ut.prototype.setJitter=function(t){this.jitter=t};class lt extends y{constructor(t,e){var s;super(),this.nsps={},this.subs=[],t&&"object"==typeof t&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",this.opts=e,k(this,e),this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(s=e.randomizationFactor)&&void 0!==s?s:.5),this.backoff=new ut({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this._readyState="closed",this.uri=t;const n=e.parser||at;this.encoder=new n.Encoder,this.decoder=new n.Decoder,this._autoConnect=!1!==e.autoConnect,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}randomizationFactor(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new z(this.uri,this.opts);const e=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;const n=ht(e,"open",(function(){s.onopen(),t&&t()})),i=ht(e,"error",(e=>{s.cleanup(),s._readyState="closed",this.emitReserved("error",e),t?t(e):s.maybeReconnectOnOpen()}));if(!1!==this._timeout){const t=this._timeout;0===t&&n();const s=this.setTimeoutFn((()=>{n(),e.close(),e.emit("error",new Error("timeout"))}),t);this.opts.autoUnref&&s.unref(),this.subs.push((function(){clearTimeout(s)}))}return this.subs.push(n),this.subs.push(i),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const t=this.engine;this.subs.push(ht(t,"ping",this.onping.bind(this)),ht(t,"data",this.ondata.bind(this)),ht(t,"error",this.onerror.bind(this)),ht(t,"close",this.onclose.bind(this)),ht(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){this.decoder.add(t)}ondecoded(t){this.emitReserved("packet",t)}onerror(t){this.emitReserved("error",t)}socket(t,e){let s=this.nsps[t];return s||(s=new pt(this,t,e),this.nsps[t]=s),s}_destroy(t){const e=Object.keys(this.nsps);for(const t of e){if(this.nsps[t].active)return}this._close()}_packet(t){const e=this.encoder.encode(t);for(let s=0;s<e.length;s++)this.engine.write(e[s],t.options)}cleanup(){this.subs.forEach((t=>t())),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const e=this.backoff.duration();this._reconnecting=!0;const s=this.setTimeoutFn((()=>{t.skipReconnect||(this.emitReserved("reconnect_attempt",t.backoff.attempts),t.skipReconnect||t.open((e=>{e?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",e)):t.onreconnect()})))}),e);this.opts.autoUnref&&s.unref(),this.subs.push((function(){clearTimeout(s)}))}}onreconnect(){const t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}const dt={};function ft(t,e){"object"==typeof t&&(e=t,t=void 0);const s=function(t,e="",s){let n=t;s=s||"undefined"!=typeof location&&location,null==t&&(t=s.protocol+"//"+s.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?s.protocol+t:s.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==s?s.protocol+"//"+t:"https://"+t),n=Y(t)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const i=-1!==n.host.indexOf(":")?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+i+":"+n.port+e,n.href=n.protocol+"://"+i+(s&&s.port===n.port?"":":"+n.port),n}(t,(e=e||{}).path||"/socket.io"),n=s.source,i=s.id,r=s.path,o=dt[i]&&r in dt[i].nsps;let a;return e.forceNew||e["force new connection"]||!1===e.multiplex||o?a=new lt(n,e):(dt[i]||(dt[i]=new lt(n,e)),a=dt[i]),s.query&&!e.query&&(e.query=s.queryKey),a.socket(s.path,e)}Object.assign(ft,{Manager:lt,Socket:pt,io:ft,connect:ft});export{lt as Manager,pt as Socket,ft as connect,ft as default,ft as io,nt as protocol};