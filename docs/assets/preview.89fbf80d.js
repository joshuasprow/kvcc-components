import{D as it,F as ot,G as st,H as at,I as ut,J as lt,K as ct,w as O,L as ft,f as z,M as N,N as J,O as dt,Q as pt,c as yt}from"./iframe.66843365.js";import"./es.map.constructor.f0b91021.js";var ht=it,gt=ot;ht("toPrimitive");gt();var _t=st,vt=at,mt=TypeError,bt=function(r){if(_t(this),r==="string"||r==="default")r="string";else if(r!=="number")throw mt("Incorrect hint");return vt(this,r)},Ot=ut,It=lt,kt=bt,St=ct,$=St("toPrimitive"),B=Date.prototype;Ot(B,$)||It(B,$,kt);var b;(function(r){r.DONE="done",r.ERROR="error",r.ACTIVE="active",r.WAITING="waiting"})(b||(b={}));var M;function E(r){return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(r)}function wt(r,t){if(r==null)return{};var e=Et(r,t),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(o=0;o<s.length;o++)n=s[o],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,n)||(e[n]=r[n]))}return e}function Et(r,t){if(r==null)return{};var e={},n=Object.keys(r),o,s;for(s=0;s<n.length;s++)o=n[s],!(t.indexOf(o)>=0)&&(e[o]=r[o]);return e}function Rt(r){var t=Ct(r,"string");return E(t)==="symbol"?t:String(t)}function Ct(r,t){if(E(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var n=e.call(r,t||"default");if(E(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function T(r){return At(r)||Mt(r)||Q(r)||Tt()}function Tt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Mt(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function At(r){if(Array.isArray(r))return j(r)}function A(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function Pt(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function G(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Dt(r,t,e){return t&&G(r.prototype,t),e&&G(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function X(r,t){return xt(r)||jt(r,t)||Q(r,t)||Nt()}function Nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(r,t){if(!!r){if(typeof r=="string")return j(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return j(r,t)}}function j(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function jt(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],o=!0,s=!1,u,i;try{for(e=e.call(r);!(o=(u=e.next()).done)&&(n.push(u.value),!(t&&n.length===t));o=!0);}catch(a){s=!0,i=a}finally{try{!o&&e.return!=null&&e.return()}finally{if(s)throw i}}return n}}function xt(r){if(Array.isArray(r))return r}var k={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},q=((M=O.FEATURES)===null||M===void 0?void 0:M.interactionsDebugger)!==!0,W={debugger:!q,start:!1,back:!1,goto:!1,next:!1,end:!1},L=new Error("This function ran after the play function completed. Did you forget to `await` it?"),K=function(t){return Object.prototype.toString.call(t)==="[object Object]"},Ft=function(t){return Object.prototype.toString.call(t)==="[object Module]"},Ut=function(t){if(!K(t)&&!Ft(t))return!1;if(t.constructor===void 0)return!0;var e=t.constructor.prototype;return!(!K(e)||Object.prototype.hasOwnProperty.call(e,"isPrototypeOf")===!1)},$t=function(t){try{return new t.constructor}catch{return{}}},P=function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},V=function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(e?t.shadowCalls:t.calls).filter(function(s){return s.retain});if(!!n.length){var o=new Map(Array.from(t.callRefsByResult.entries()).filter(function(s){var u=X(s,2),i=u[1];return i.retain}));return{cursor:n.length,calls:n,callRefsByResult:o}}},Bt=function(){function r(){var t=this;Pt(this,r),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=z.getChannel(),this.state=O.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var e=function(c){var l=c.storyId,d=c.isPlaying,h=d===void 0?!0:d,y=c.isDebugging,f=y===void 0?!1:y,p=t.getState(l);t.setState(l,Object.assign({},P(),V(p,f),{shadowCalls:f?p.shadowCalls:[],chainedCallIds:f?p.chainedCallIds:new Set,playUntil:f?p.playUntil:void 0,isPlaying:h,isDebugging:f})),f||t.sync(l)};this.channel.on(N,e),this.channel.on(J,function(a){var c=a.storyId,l=a.newPhase,d=t.getState(c),h=d.isDebugging,y=d.forwardedException;if(t.setState(c,{renderPhase:l}),l==="playing"&&e({storyId:c,isDebugging:h}),l==="played"&&(t.setState(c,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),y))throw y}),this.channel.on(dt,function(){t.initialized?t.cleanup():t.initialized=!0});var n=function(c){var l=c.storyId,d=c.playUntil;t.getState(l).isDebugging||t.setState(l,function(y){var f=y.calls;return{calls:[],shadowCalls:f.map(function(p){return Object.assign({},p,{status:b.WAITING})}),isDebugging:!0}});var h=t.getLog(l);t.setState(l,function(y){var f,p=y.shadowCalls,_=p.findIndex(function(g){return g.id===h[0].callId});return{playUntil:d||((f=p.slice(0,_).filter(function(g){return g.interceptable}).slice(-1)[0])===null||f===void 0?void 0:f.id)}}),t.channel.emit(N,{storyId:l,isDebugging:!0})},o=function(c){var l,d=c.storyId,h=t.getState(d),y=h.isDebugging,f=t.getLog(d),p=y?f.findIndex(function(_){var g=_.status;return g===b.WAITING}):f.length;n({storyId:d,playUntil:(l=f[p-2])===null||l===void 0?void 0:l.callId})},s=function(c){var l=c.storyId,d=c.callId,h=t.getState(l),y=h.calls,f=h.shadowCalls,p=h.resolvers,_=y.find(function(m){var w=m.id;return w===d}),g=f.find(function(m){var w=m.id;return w===d});if(!_&&g&&Object.values(p).length>0){var v,I=(v=t.getLog(l).find(function(m){return m.status===b.WAITING}))===null||v===void 0?void 0:v.callId;g.id!==I&&t.setState(l,{playUntil:g.id}),Object.values(p).forEach(function(m){return m()})}else n({storyId:l,playUntil:d})},u=function(c){var l=c.storyId,d=t.getState(l),h=d.resolvers;if(Object.values(h).length>0)Object.values(h).forEach(function(p){return p()});else{var y,f=(y=t.getLog(l).find(function(p){return p.status===b.WAITING}))===null||y===void 0?void 0:y.callId;f?n({storyId:l,playUntil:f}):i({storyId:l})}},i=function(c){var l=c.storyId;t.setState(l,{playUntil:void 0,isDebugging:!1}),Object.values(t.getState(l).resolvers).forEach(function(d){return d()})};this.channel.on(k.START,n),this.channel.on(k.BACK,o),this.channel.on(k.GOTO,s),this.channel.on(k.NEXT,u),this.channel.on(k.END,i)}return Dt(r,[{key:"getState",value:function(e){return this.state[e]||P()}},{key:"setState",value:function(e,n){var o=this.getState(e),s=typeof n=="function"?n(o):n;this.state=Object.assign({},this.state,A({},e,Object.assign({},o,s))),O.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}},{key:"cleanup",value:function(){this.state=Object.entries(this.state).reduce(function(e,n){var o=X(n,2),s=o[0],u=o[1],i=V(u);return i&&(e[s]=Object.assign(P(),i)),e},{}),this.channel.emit(k.SYNC,{controlStates:W,logItems:[]}),O.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}},{key:"getLog",value:function(e){var n=this.getState(e),o=n.calls,s=n.shadowCalls,u=T(s);o.forEach(function(a,c){u[c]=a});var i=new Set;return u.reduceRight(function(a,c){return c.args.forEach(function(l){l!=null&&l.__callId__&&i.add(l.__callId__)}),c.path.forEach(function(l){l.__callId__&&i.add(l.__callId__)}),c.interceptable&&!i.has(c.id)&&(a.unshift({callId:c.id,status:c.status}),i.add(c.id)),a},[])}},{key:"instrument",value:function(e,n){var o=this;if(!Ut(e))return e;var s=n.mutate,u=s===void 0?!1:s,i=n.path,a=i===void 0?[]:i;return Object.keys(e).reduce(function(c,l){var d=e[l];return typeof d!="function"?(c[l]=o.instrument(d,Object.assign({},n,{path:a.concat(l)})),c):typeof d.__originalFn__=="function"?(c[l]=d,c):(c[l]=function(){for(var h=arguments.length,y=new Array(h),f=0;f<h;f++)y[f]=arguments[f];return o.track(l,d,y,n)},c[l].__originalFn__=d,Object.defineProperty(c[l],"name",{value:l,writable:!1}),Object.keys(d).length>0&&Object.assign(c[l],o.instrument(Object.assign({},d),Object.assign({},n,{path:a.concat(l)}))),c)},u?e:$t(e))}},{key:"track",value:function(e,n,o,s){var u,i,a,c,l=(o==null||(u=o[0])===null||u===void 0?void 0:u.__storyId__)||((i=O.window.__STORYBOOK_PREVIEW__)===null||i===void 0||(a=i.urlStore)===null||a===void 0||(c=a.selection)===null||c===void 0?void 0:c.storyId),d=this.getState(l),h=d.cursor,y=d.parentId;this.setState(l,{cursor:h+1});var f="".concat(y||l," [").concat(h,"] ").concat(e),p=s.path,_=p===void 0?[]:p,g=s.intercept,v=g===void 0?!1:g,I=s.retain,m=I===void 0?!1:I,w=typeof v=="function"?v(e,_):v,U={id:f,parentId:y,storyId:l,cursor:h,path:_,method:e,args:o,interceptable:w,retain:m},rt=(w?this.intercept:this.invoke).call(this,n,U,s);return this.instrument(rt,Object.assign({},s,{mutate:!0,path:[{__callId__:U.id}]}))}},{key:"intercept",value:function(e,n,o){var s=this,u=this.getState(n.storyId),i=u.chainedCallIds,a=u.isDebugging,c=u.playUntil,l=i.has(n.id);return!a||l||c?(c===n.id&&this.setState(n.storyId,{playUntil:void 0}),this.invoke(e,n,o)):new Promise(function(d){s.setState(n.storyId,function(h){var y=h.resolvers;return{isLocked:!1,resolvers:Object.assign({},y,A({},n.id,d))}})}).then(function(){return s.setState(n.storyId,function(d){var h=d.resolvers,y=n.id;h[y];var f=wt(h,[y].map(Rt));return{isLocked:!0,resolvers:f}}),s.invoke(e,n,o)})}},{key:"invoke",value:function(e,n,o){var s=this,u=this.getState(n.storyId),i=u.callRefsByResult,a=u.forwardedException,c=u.renderPhase,l=Object.assign({},n,{args:n.args.map(function(f){if(i.has(f))return i.get(f);if(f instanceof O.window.HTMLElement){var p=f.prefix,_=f.localName,g=f.id,v=f.classList,I=f.innerText,m=Array.from(v);return{__element__:{prefix:p,localName:_,id:g,classNames:m,innerText:I}}}return f})});n.path.forEach(function(f){f!=null&&f.__callId__&&s.setState(n.storyId,function(p){var _=p.chainedCallIds;return{chainedCallIds:new Set(Array.from(_).concat(f.__callId__))}})});var d=function(p){if(p instanceof Error){var _=p.name,g=p.message,v=p.stack,I={name:_,message:g,stack:v};if(s.update(Object.assign({},l,{status:b.ERROR,exception:I})),s.setState(n.storyId,function(m){return{callRefsByResult:new Map([].concat(T(Array.from(m.callRefsByResult.entries())),[[p,{__callId__:n.id,retain:n.retain}]]))}}),n.interceptable&&p!==L)throw pt;return s.setState(n.storyId,{forwardedException:p}),p}throw p};try{if(a)throw this.setState(n.storyId,{forwardedException:void 0}),a;if(c==="played"&&!n.retain)throw L;var h=o.getArgs?o.getArgs(n,this.getState(n.storyId)):n.args,y=e.apply(void 0,T(h.map(function(f){return typeof f!="function"||Object.keys(f).length?f:function(){var p=s.getState(n.storyId),_=p.cursor,g=p.parentId;s.setState(n.storyId,{cursor:0,parentId:n.id});var v=function(){return s.setState(n.storyId,{cursor:_,parentId:g})},I=f.apply(void 0,arguments);return I instanceof Promise?I.then(v,v):v(),I}})));return y&&["object","function","symbol"].includes(E(y))&&this.setState(n.storyId,function(f){return{callRefsByResult:new Map([].concat(T(Array.from(f.callRefsByResult.entries())),[[y,{__callId__:n.id,retain:n.retain}]]))}}),this.update(Object.assign({},l,{status:y instanceof Promise?b.ACTIVE:b.DONE})),y instanceof Promise?y.then(function(f){return s.update(Object.assign({},l,{status:b.DONE})),f},d):y}catch(f){return d(f)}}},{key:"update",value:function(e){var n=this;clearTimeout(this.getState(e.storyId).syncTimeout),this.channel.emit(k.CALL,e),this.setState(e.storyId,function(o){var s=o.calls,u=s.concat(e).reduce(function(i,a){return Object.assign(i,A({},a.id,a))},{});return{calls:Object.values(u).sort(function(i,a){return i.id.localeCompare(a.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return n.sync(e.storyId)},0)}})}},{key:"sync",value:function(e){var n=this.getState(e),o=n.isLocked,s=n.isPlaying,u=this.getLog(e),i=u.some(function(l){return l.status===b.ACTIVE});if(q||o||i||u.length===0){this.channel.emit(k.SYNC,{controlStates:W,logItems:u});return}var a=u.some(function(l){return[b.DONE,b.ERROR].includes(l.status)}),c={debugger:!0,start:a,back:a,goto:!0,next:s,end:s};this.channel.emit(k.SYNC,{controlStates:c,logItems:u})}}]),r}();function Gt(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var e,n,o,s,u=!1,i=!1;if((e=O.window.location)!==null&&e!==void 0&&(n=e.search)!==null&&n!==void 0&&n.includes("instrument=true")?u=!0:(o=O.window.location)!==null&&o!==void 0&&(s=o.search)!==null&&s!==void 0&&s.includes("instrument=false")&&(i=!0),O.window.parent===O.window&&!u||i)return r;O.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(O.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new Bt);var a=O.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return a.instrument(r,t)}catch(c){return ft.warn(c),r}}var S={};Object.defineProperty(S,"__esModule",{value:!0});S.spyOn=S.mocked=S.fn=et=S.ModuleMocker=void 0;function C(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}const D="mockConstructor",Z=/[\s!-\/:-@\[-`{-~]/,Wt=new RegExp(Z.source,"g"),Lt=new Set(["arguments","await","break","case","catch","class","const","continue","debugger","default","delete","do","else","enum","eval","export","extends","false","finally","for","function","if","implements","import","in","instanceof","interface","let","new","null","package","private","protected","public","return","static","super","switch","this","throw","true","try","typeof","var","void","while","with","yield"]);function Kt(r,t){let e;switch(t){case 1:e=function(n){return r.apply(this,arguments)};break;case 2:e=function(n,o){return r.apply(this,arguments)};break;case 3:e=function(n,o,s){return r.apply(this,arguments)};break;case 4:e=function(n,o,s,u){return r.apply(this,arguments)};break;case 5:e=function(n,o,s,u,i){return r.apply(this,arguments)};break;case 6:e=function(n,o,s,u,i,a){return r.apply(this,arguments)};break;case 7:e=function(n,o,s,u,i,a,c){return r.apply(this,arguments)};break;case 8:e=function(n,o,s,u,i,a,c,l){return r.apply(this,arguments)};break;case 9:e=function(n,o,s,u,i,a,c,l,d){return r.apply(this,arguments)};break;default:e=function(){return r.apply(this,arguments)};break}return e}function x(r){return Object.prototype.toString.apply(r).slice(8,-1)}function Vt(r){const t=x(r);return t==="Function"||t==="AsyncFunction"||t==="GeneratorFunction"?"function":Array.isArray(r)?"array":t==="Object"?"object":t==="Number"||t==="String"||t==="Boolean"||t==="Symbol"?"constant":t==="Map"||t==="WeakMap"||t==="Set"?"collection":t==="RegExp"?"regexp":r===void 0?"undefined":r===null?"null":null}function Yt(r,t){if(t==="arguments"||t==="caller"||t==="callee"||t==="name"||t==="length"){const e=x(r);return e==="Function"||e==="AsyncFunction"||e==="GeneratorFunction"}return t==="source"||t==="global"||t==="ignoreCase"||t==="multiline"?x(r)==="RegExp":!1}class tt{constructor(t){C(this,"_environmentGlobal",void 0),C(this,"_mockState",void 0),C(this,"_mockConfigRegistry",void 0),C(this,"_spyState",void 0),C(this,"_invocationCallCounter",void 0),this._environmentGlobal=t,this._mockState=new WeakMap,this._mockConfigRegistry=new WeakMap,this._spyState=new Set,this._invocationCallCounter=1}_getSlots(t){if(!t)return[];const e=new Set,n=this._environmentGlobal.Object.prototype,o=this._environmentGlobal.Function.prototype,s=this._environmentGlobal.RegExp.prototype,u=Object.prototype,i=Function.prototype,a=RegExp.prototype;for(;t!=null&&t!==n&&t!==o&&t!==s&&t!==u&&t!==i&&t!==a;){const c=Object.getOwnPropertyNames(t);for(let l=0;l<c.length;l++){const d=c[l];if(!Yt(t,d)){const h=Object.getOwnPropertyDescriptor(t,d);(h!==void 0&&!h.get||t.__esModule)&&e.add(d)}}t=Object.getPrototypeOf(t)}return Array.from(e)}_ensureMockConfig(t){let e=this._mockConfigRegistry.get(t);return e||(e=this._defaultMockConfig(),this._mockConfigRegistry.set(t,e)),e}_ensureMockState(t){let e=this._mockState.get(t);return e||(e=this._defaultMockState(),this._mockState.set(t,e)),e.calls.length>0&&(e.lastCall=e.calls[e.calls.length-1]),e}_defaultMockConfig(){return{mockImpl:void 0,mockName:"jest.fn()",specificMockImpls:[],specificReturnValues:[]}}_defaultMockState(){return{calls:[],instances:[],invocationCallOrder:[],results:[]}}_makeComponent(t,e){if(t.type==="object")return new this._environmentGlobal.Object;if(t.type==="array")return new this._environmentGlobal.Array;if(t.type==="regexp")return new this._environmentGlobal.RegExp("");if(t.type==="constant"||t.type==="collection"||t.type==="null"||t.type==="undefined")return t.value;if(t.type==="function"){const n=t.members&&t.members.prototype&&t.members.prototype.members||{},o=this._getSlots(n),s=this,u=Kt(function(...a){const c=s._ensureMockState(i),l=s._ensureMockConfig(i);c.instances.push(this),c.calls.push(a);const d={type:"incomplete",value:void 0};c.results.push(d),c.invocationCallOrder.push(s._invocationCallCounter++);let h,y,f=!1;try{h=(()=>{if(this instanceof i){o.forEach(g=>{if(n[g].type==="function"){const v=this[g];this[g]=s.generateFromMetadata(n[g]),this[g]._protoImpl=v}});const _=l.specificMockImpls.length?l.specificMockImpls.shift():l.mockImpl;return _&&_.apply(this,arguments)}let p=l.specificMockImpls.shift();if(p===void 0&&(p=l.mockImpl),p)return p.apply(this,arguments);if(i._protoImpl)return i._protoImpl.apply(this,arguments)})()}catch(p){throw y=p,f=!0,p}finally{d.type=f?"throw":"return",d.value=f?y:h}return h},t.length||0),i=this._createMockFunction(t,u);return i._isMockFunction=!0,i.getMockImplementation=()=>this._ensureMockConfig(i).mockImpl,typeof e=="function"&&this._spyState.add(e),this._mockState.set(i,this._defaultMockState()),this._mockConfigRegistry.set(i,this._defaultMockConfig()),Object.defineProperty(i,"mock",{configurable:!1,enumerable:!0,get:()=>this._ensureMockState(i),set:a=>this._mockState.set(i,a)}),i.mockClear=()=>(this._mockState.delete(i),i),i.mockReset=()=>(i.mockClear(),this._mockConfigRegistry.delete(i),i),i.mockRestore=()=>(i.mockReset(),e?e():void 0),i.mockReturnValueOnce=a=>i.mockImplementationOnce(()=>a),i.mockResolvedValueOnce=a=>i.mockImplementationOnce(()=>Promise.resolve(a)),i.mockRejectedValueOnce=a=>i.mockImplementationOnce(()=>Promise.reject(a)),i.mockReturnValue=a=>i.mockImplementation(()=>a),i.mockResolvedValue=a=>i.mockImplementation(()=>Promise.resolve(a)),i.mockRejectedValue=a=>i.mockImplementation(()=>Promise.reject(a)),i.mockImplementationOnce=a=>(this._ensureMockConfig(i).specificMockImpls.push(a),i),i.mockImplementation=a=>{const c=this._ensureMockConfig(i);return c.mockImpl=a,i},i.mockReturnThis=()=>i.mockImplementation(function(){return this}),i.mockName=a=>{if(a){const c=this._ensureMockConfig(i);c.mockName=a}return i},i.getMockName=()=>this._ensureMockConfig(i).mockName||"jest.fn()",t.mockImpl&&i.mockImplementation(t.mockImpl),i}else{const n=t.type||"undefined type";throw new Error("Unrecognized type "+n)}}_createMockFunction(t,e){let n=t.name;if(!n)return e;const o="bound ";let s="";if(n&&n.startsWith(o))do n=n.substring(o.length),s=".bind(null)";while(n&&n.startsWith(o));if(n===D)return e;(Lt.has(n)||/^\d/.test(n))&&(n="$"+n),Z.test(n)&&(n=n.replace(Wt,"$"));const u="return function "+n+"() {return "+D+".apply(this,arguments);}"+s;return new this._environmentGlobal.Function(D,u)(e)}_generateMock(t,e,n){const o=this._makeComponent(t);return t.refID!=null&&(n[t.refID]=o),this._getSlots(t.members).forEach(s=>{const u=t.members&&t.members[s]||{};u.ref!=null?e.push(function(i){return()=>o[s]=n[i]}(u.ref)):o[s]=this._generateMock(u,e,n)}),t.type!=="undefined"&&t.type!=="null"&&o.prototype&&typeof o.prototype=="object"&&(o.prototype.constructor=o),o}generateFromMetadata(t){const e=[],n={},o=this._generateMock(t,e,n);return e.forEach(s=>s()),o}getMetadata(t,e){const n=e||new Map,o=n.get(t);if(o!=null)return{ref:o};const s=Vt(t);if(!s)return null;const u={type:s};if(s==="constant"||s==="collection"||s==="undefined"||s==="null")return u.value=t,u;s==="function"&&(u.name=t.name,t._isMockFunction===!0&&(u.mockImpl=t.getMockImplementation())),u.refID=n.size,n.set(t,u.refID);let i=null;return s!=="array"&&this._getSlots(t).forEach(a=>{if(s==="function"&&t._isMockFunction===!0&&a.match(/^mock/))return;const c=this.getMetadata(t[a],n);c&&(i||(i={}),i[a]=c)}),i&&(u.members=i),u}isMockFunction(t){return!!t&&t._isMockFunction===!0}fn(t){const e=t?t.length:0,n=this._makeComponent({length:e,type:"function"});return t&&n.mockImplementation(t),n}spyOn(t,e,n){if(n)return this._spyOnProperty(t,e,n);if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");const o=t[e];if(!this.isMockFunction(o)){if(typeof o!="function")throw new Error("Cannot spy the "+e+" property because it is not a function; "+this._typeOf(o)+" given instead");const s=Object.prototype.hasOwnProperty.call(t,e);let u=Object.getOwnPropertyDescriptor(t,e),i=Object.getPrototypeOf(t);for(;!u&&i!==null;)u=Object.getOwnPropertyDescriptor(i,e),i=Object.getPrototypeOf(i);let a;if(u&&u.get){const c=u.get;a=this._makeComponent({type:"function"},()=>{u.get=c,Object.defineProperty(t,e,u)}),u.get=()=>a,Object.defineProperty(t,e,u)}else a=this._makeComponent({type:"function"},()=>{s?t[e]=o:delete t[e]}),t[e]=a;a.mockImplementation(function(){return o.apply(this,arguments)})}return t[e]}_spyOnProperty(t,e,n="get"){if(typeof t!="object"&&typeof t!="function")throw new Error("Cannot spyOn on a primitive value; "+this._typeOf(t)+" given");if(!t)throw new Error("spyOn could not find an object to spy upon for "+e);if(!e)throw new Error("No property name supplied");let o=Object.getOwnPropertyDescriptor(t,e),s=Object.getPrototypeOf(t);for(;!o&&s!==null;)o=Object.getOwnPropertyDescriptor(s,e),s=Object.getPrototypeOf(s);if(!o)throw new Error(e+" property does not exist");if(!o.configurable)throw new Error(e+" is not declared configurable");if(!o[n])throw new Error("Property "+e+" does not have access type "+n);const u=o[n];if(!this.isMockFunction(u)){if(typeof u!="function")throw new Error("Cannot spy the "+e+" property because it is not a function; "+this._typeOf(u)+" given instead");o[n]=this._makeComponent({type:"function"},()=>{o[n]=u,Object.defineProperty(t,e,o)}),o[n].mockImplementation(function(){return u.apply(this,arguments)})}return Object.defineProperty(t,e,o),o[n]}clearAllMocks(){this._mockState=new WeakMap}resetAllMocks(){this._mockConfigRegistry=new WeakMap,this._mockState=new WeakMap}restoreAllMocks(){this._spyState.forEach(t=>t()),this._spyState=new Set}_typeOf(t){return t==null?""+t:typeof t}mocked(t,e=!1){return t}}var et=S.ModuleMocker=tt;const R=new tt(yt),Ht=R.fn.bind(R);S.fn=Ht;const zt=R.spyOn.bind(R);S.spyOn=zt;const Jt=R.mocked.bind(R);S.mocked=Jt;function Xt(r,t){return te(r)||Zt(r,t)||qt(r,t)||Qt()}function Qt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qt(r,t){if(!!r){if(typeof r=="string")return Y(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Y(r,t)}}function Y(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function Zt(r,t){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var n=[],o=!0,s=!1,u,i;try{for(e=e.call(r);!(o=(u=e.next()).done)&&(n.push(u.value),!(t&&n.length===t));o=!0);}catch(a){s=!0,i=a}finally{try{!o&&e.return!=null&&e.return()}finally{if(s)throw i}}return n}}function te(r){if(Array.isArray(r))return r}var H=new et(global),ee=H.fn.bind(H),ne=Gt({action:ee},{retain:!0}),re=ne.action,nt=z.getChannel(),F=[];nt.on(N,function(){return F.forEach(function(r){var t;return r==null||(t=r.mockClear)===null||t===void 0?void 0:t.call(r)})});nt.on(J,function(r){var t=r.newPhase;t==="loading"&&F.forEach(function(e){var n;return e==null||(n=e.mockClear)===null||n===void 0?void 0:n.call(e)})});var ie=function(t){var e=t.id,n=t.initialArgs;return Object.entries(n).reduce(function(o,s){var u=Xt(s,2),i=u[0],a=u[1];return typeof a=="function"&&a.name==="actionHandler"?(Object.defineProperty(a,"name",{value:i,writable:!1}),Object.defineProperty(a,"__storyId__",{value:e,writable:!1}),o[i]=re(a),F.push(o[i]),o):(o[i]=a,o)},{})},ae=[ie];export{ae as argsEnhancers};
//# sourceMappingURL=preview.89fbf80d.js.map
