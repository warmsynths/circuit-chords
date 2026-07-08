(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const hs=globalThis,Ti=hs.ShadowRoot&&(hs.ShadyCSS===void 0||hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ci=Symbol(),_r=new WeakMap;let ho=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ci)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ti&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=_r.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&_r.set(t,e))}return e}toString(){return this.cssText}};const nc=s=>new ho(typeof s=="string"?s:s+"",void 0,Ci),Ye=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,i,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new ho(t,s,Ci)},sc=(s,e)=>{if(Ti)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=hs.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,s.appendChild(n)}},yr=Ti?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return nc(t)})(s):s;const{is:ic,defineProperty:rc,getOwnPropertyDescriptor:oc,getOwnPropertyNames:ac,getOwnPropertySymbols:cc,getPrototypeOf:lc}=Object,$s=globalThis,xr=$s.trustedTypes,hc=xr?xr.emptyScript:"",uc=$s.reactiveElementPolyfillSupport,Mn=(s,e)=>s,fs={toAttribute(s,e){switch(e){case Boolean:s=s?hc:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Mi=(s,e)=>!ic(s,e),wr={attribute:!0,type:String,converter:fs,reflect:!1,useDefault:!1,hasChanged:Mi};Symbol.metadata??=Symbol("metadata"),$s.litPropertyMetadata??=new WeakMap;let Xt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=wr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&rc(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:r}=oc(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const c=i?.call(this);r?.call(this,o),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wr}static _$Ei(){if(this.hasOwnProperty(Mn("elementProperties")))return;const e=lc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Mn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Mn("properties"))){const t=this.properties,n=[...ac(t),...cc(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(yr(i))}else e!==void 0&&t.push(yr(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return sc(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const r=(n.converter?.toAttribute!==void 0?n.converter:fs).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=n.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:fs;this._$Em=i;const c=o.fromAttribute(t,r.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){const o=this.constructor;if(i===!1&&(r=this[e]),n??=o.getPropertyOptions(e),!((n.hasChanged??Mi)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,r]of n){const{wrapped:o}=r,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Xt.elementStyles=[],Xt.shadowRootOptions={mode:"open"},Xt[Mn("elementProperties")]=new Map,Xt[Mn("finalized")]=new Map,uc?.({ReactiveElement:Xt}),($s.reactiveElementVersions??=[]).push("2.1.2");const Si=globalThis,kr=s=>s,ms=Si.trustedTypes,Tr=ms?ms.createPolicy("lit-html",{createHTML:s=>s}):void 0,uo="$lit$",gt=`lit$${Math.random().toFixed(9).slice(2)}$`,po="?"+gt,dc=`<${po}>`,It=document,Nn=()=>It.createComment(""),On=s=>s===null||typeof s!="object"&&typeof s!="function",Ai=Array.isArray,pc=s=>Ai(s)||typeof s?.[Symbol.iterator]=="function",si=`[ 	
\f\r]`,Cn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cr=/-->/g,Mr=/>/g,At=RegExp(`>|${si}(?:([^\\s"'>=/]+)(${si}*=${si}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Sr=/'/g,Ar=/"/g,fo=/^(?:script|style|textarea|title)$/i,mo=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),$=mo(1),en=mo(2),rn=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),Pr=new WeakMap,Pt=It.createTreeWalker(It,129);function go(s,e){if(!Ai(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tr!==void 0?Tr.createHTML(e):e}const fc=(s,e)=>{const t=s.length-1,n=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=Cn;for(let c=0;c<t;c++){const a=s[c];let l,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===Cn?h[1]==="!--"?o=Cr:h[1]!==void 0?o=Mr:h[2]!==void 0?(fo.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=At):h[3]!==void 0&&(o=At):o===At?h[0]===">"?(o=i??Cn,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?At:h[3]==='"'?Ar:Sr):o===Ar||o===Sr?o=At:o===Cr||o===Mr?o=Cn:(o=At,i=void 0);const f=o===At&&s[c+1].startsWith("/>")?" ":"";r+=o===Cn?a+dc:u>=0?(n.push(l),a.slice(0,u)+uo+a.slice(u)+gt+f):a+gt+(u===-2?c:f)}return[go(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class $n{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,o=0;const c=e.length-1,a=this.parts,[l,h]=fc(e,t);if(this.el=$n.createElement(l,n),Pt.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Pt.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(uo)){const d=h[o++],f=i.getAttribute(u).split(gt),p=/([.?@])?(.*)/.exec(d);a.push({type:1,index:r,name:p[2],strings:f,ctor:p[1]==="."?gc:p[1]==="?"?vc:p[1]==="@"?bc:Es}),i.removeAttribute(u)}else u.startsWith(gt)&&(a.push({type:6,index:r}),i.removeAttribute(u));if(fo.test(i.tagName)){const u=i.textContent.split(gt),d=u.length-1;if(d>0){i.textContent=ms?ms.emptyScript:"";for(let f=0;f<d;f++)i.append(u[f],Nn()),Pt.nextNode(),a.push({type:2,index:++r});i.append(u[d],Nn())}}}else if(i.nodeType===8)if(i.data===po)a.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(gt,u+1))!==-1;)a.push({type:7,index:r}),u+=gt.length-1}r++}}static createElement(e,t){const n=It.createElement("template");return n.innerHTML=e,n}}function on(s,e,t=s,n){if(e===rn)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl;const r=On(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=on(s,i._$AS(s,e.values),i,n)),e}class mc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??It).importNode(t,!0);Pt.currentNode=i;let r=Pt.nextNode(),o=0,c=0,a=n[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new Fn(r,r.nextSibling,this,e):a.type===1?l=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(l=new _c(r,this,e)),this._$AV.push(l),a=n[++c]}o!==a?.index&&(r=Pt.nextNode(),o++)}return Pt.currentNode=It,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Fn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=on(this,e,t),On(e)?e===be||e==null||e===""?(this._$AH!==be&&this._$AR(),this._$AH=be):e!==this._$AH&&e!==rn&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):pc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==be&&On(this._$AH)?this._$AA.nextSibling.data=e:this.T(It.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=$n.createElement(go(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{const r=new mc(i,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=Pr.get(e.strings);return t===void 0&&Pr.set(e.strings,t=new $n(e)),t}k(e){Ai(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new Fn(this.O(Nn()),this.O(Nn()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=kr(e).nextSibling;kr(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Es{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=be,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=be}_$AI(e,t=this,n,i){const r=this.strings;let o=!1;if(r===void 0)e=on(this,e,t,0),o=!On(e)||e!==this._$AH&&e!==rn,o&&(this._$AH=e);else{const c=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=on(this,c[n+a],t,a),l===rn&&(l=this._$AH[a]),o||=!On(l)||l!==this._$AH[a],l===be?e=be:e!==be&&(e+=(l??"")+r[a+1]),this._$AH[a]=l}o&&!i&&this.j(e)}j(e){e===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gc extends Es{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===be?void 0:e}}class vc extends Es{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==be)}}class bc extends Es{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=on(this,e,t,0)??be)===rn)return;const n=this._$AH,i=e===be&&n!==be||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==be&&(n===be||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class _c{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){on(this,e)}}const yc=Si.litHtmlPolyfillSupport;yc?.($n,Fn),(Si.litHtmlVersions??=[]).push("3.3.2");const xc=(s,e,t)=>{const n=t?.renderBefore??e;let i=n._$litPart$;if(i===void 0){const r=t?.renderBefore??null;n._$litPart$=i=new Fn(e.insertBefore(Nn(),r),r,void 0,t??{})}return i._$AI(s),i};const Pi=globalThis;let Se=class extends Xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xc(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return rn}};Se._$litElement$=!0,Se.finalized=!0,Pi.litElementHydrateSupport?.({LitElement:Se});const wc=Pi.litElementPolyfillSupport;wc?.({LitElement:Se});(Pi.litElementVersions??=[]).push("4.2.2");const Ke=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};const kc={attribute:!0,type:String,converter:fs,reflect:!1,hasChanged:Mi},Tc=(s=kc,e,t)=>{const{kind:n,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),n==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),n==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,s,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,s,c),c}}}if(n==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,s,!0,c)}}throw Error("Unsupported decorator location: "+n)};function he(s){return(e,t)=>typeof t=="object"?Tc(s,e,t):((n,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,n),o?Object.getOwnPropertyDescriptor(i,r):void 0})(s,e,t)}function q(s){return he({...s,state:!0,attribute:!1})}const Cc=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);function vo(s,e){return(t,n,i)=>{const r=o=>o.renderRoot?.querySelector(s)??null;return Cc(t,n,{get(){return r(this)}})}}function bo(s){return s!==null&&typeof s=="object"&&"name"in s&&typeof s.name=="string"}function _o(s){return s!==null&&typeof s=="object"&&"step"in s&&typeof s.step=="number"&&"alt"in s&&typeof s.alt=="number"&&!isNaN(s.step)&&!isNaN(s.alt)}var yo=[0,2,4,-1,1,3,5],xo=yo.map(s=>Math.floor(s*7/12));function wo(s){const{step:e,alt:t,oct:n,dir:i=1}=s,r=yo[e]+7*t;if(n===void 0)return[i*r];const o=n-xo[e]-4*t;return[i*r,i*o]}var Mc=[3,0,4,1,5,2,6];function ko(s){const[e,t,n]=s,i=Mc[Sc(e)],r=Math.floor((e+1)/7);if(t===void 0)return{step:i,alt:r,dir:n};const o=t+4*r+xo[i];return{step:i,alt:r,oct:o,dir:n}}function Sc(s){const e=(s+1)%7;return e<0?7+e:e}var Nr=(s,e)=>Array(Math.abs(e)+1).join(s),hi=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),Ac="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Pc="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Nc=new RegExp("^"+Ac+"|"+Pc+"$");function Oc(s){const e=Nc.exec(`${s}`);return e===null?["",""]:e[1]?[e[1],e[2]]:[e[4],e[3]]}var Or={};function bt(s){return typeof s=="string"?Or[s]||(Or[s]=$c(s)):_o(s)?bt(Ic(s)):bo(s)?bt(s.name):hi}var $r=[0,2,4,5,7,9,11],To="PMMPPMM";function $c(s){const e=Oc(s);if(e[0]==="")return hi;const t=+e[0],n=e[1],i=(Math.abs(t)-1)%7,r=To[i];if(r==="M"&&n==="P")return hi;const o=r==="M"?"majorable":"perfectable",c=""+t+n,a=t<0?-1:1,l=t===8||t===-8?t:a*(i+1),h=Ec(o,n),u=Math.floor((Math.abs(t)-1)/7),d=a*($r[i]+h+12*u),f=(a*($r[i]+h)%12+12)%12,p=wo({step:i,alt:h,oct:u,dir:a});return{empty:!1,name:c,num:t,q:n,step:i,alt:h,dir:a,type:o,simple:l,semitones:d,chroma:f,coord:p,oct:u}}function Co(s,e){const[t,n=0]=s,i=t*7+n*12<0,r=e||i?[-t,-n,-1]:[t,n,1];return bt(ko(r))}function Ec(s,e){return e==="M"&&s==="majorable"||e==="P"&&s==="perfectable"?0:e==="m"&&s==="majorable"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?-1*(s==="perfectable"?e.length:e.length+1):0}function Ic(s){const{step:e,alt:t,oct:n=0,dir:i}=s;if(!i)return"";const r=e+1+7*n,o=r===0?e+1:r,c=i<0?"-":"",a=To[e]==="M"?"majorable":"perfectable";return c+o+Dc(a,t)}function Dc(s,e){return e===0?s==="majorable"?"M":"P":e===-1&&s==="majorable"?"m":e>0?Nr("A",e):Nr("d",s==="perfectable"?e:e+1)}var Er=(s,e)=>Array(Math.abs(e)+1).join(s),Mo=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),Ir=new Map,Rc=s=>"CDEFGAB".charAt(s),Vc=s=>s<0?Er("b",-s):Er("#",s),Fc=s=>s[0]==="b"?-s.length:s.length;function Ne(s){const e=JSON.stringify(s),t=Ir.get(e);if(t)return t;const n=typeof s=="string"?Wc(s):_o(s)?Ne(zc(s)):bo(s)?Ne(s.name):Mo;return Ir.set(e,n),n}var Lc=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function Ni(s){const e=Lc.exec(s);return e?[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]:["","","",""]}function jc(s){return Ne(ko(s))}var qc=(s,e)=>(s%e+e)%e,ii=[0,2,4,5,7,9,11];function Wc(s){const e=Ni(s);if(e[0]===""||e[3]!=="")return Mo;const t=e[0],n=e[1],i=e[2],r=(t.charCodeAt(0)+3)%7,o=Fc(n),c=i.length?+i:void 0,a=wo({step:r,alt:o,oct:c}),l=t+n+i,h=t+n,u=(ii[r]+o+120)%12,d=c===void 0?qc(ii[r]+o,12)-1188:ii[r]+o+12*(c+1),f=d>=0&&d<=127?d:null,p=c===void 0?null:Math.pow(2,(d-69)/12)*440;return{empty:!1,acc:n,alt:o,chroma:u,coord:a,freq:p,height:d,letter:t,midi:f,name:l,oct:c,pc:h,step:r}}function zc(s){const{step:e,alt:t,oct:n}=s,i=Rc(e);if(!i)return"";const r=i+Vc(t);return n||n===0?r+n:r}function Is(s,e){const t=Ne(s),n=Array.isArray(e)?e:bt(e).coord;if(t.empty||!n||n.length<2)return"";const i=t.coord,r=i.length===1?[i[0]+n[0]]:[i[0]+n[0],i[1]+n[1]];return jc(r).name}function Dr(s,e){const t=Ne(s),n=Ne(e);if(t.empty||n.empty)return"";const i=t.coord,r=n.coord,o=r[0]-i[0],c=i.length===2&&r.length===2?r[1]-i[1]:-Math.floor(o*7/12),a=n.height===t.height&&n.midi!==null&&t.oct===n.oct&&t.step>n.step;return Co([o,c],a).name}function So(s,e){const t=e.length,n=(s%t+t)%t;return e.slice(n,t).concat(e.slice(0,n))}var Dt={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},Ao=s=>Number(s).toString(2).padStart(12,"0"),Rr=s=>parseInt(s,2),Bc=/^[01]{12}$/;function Po(s){return Bc.test(s)}var Uc=s=>typeof s=="number"&&s>=0&&s<=4095,Hc=s=>s&&Po(s.chroma),Vr={[Dt.chroma]:Dt};function No(s){const e=Po(s)?s:Uc(s)?Ao(s):Array.isArray(s)?Zc(s):Hc(s)?s.chroma:Dt.chroma;return Vr[e]=Vr[e]||Kc(e)}var Gc=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Xc(s){const e=[];for(let t=0;t<12;t++)s.charAt(t)==="1"&&e.push(Gc[t]);return e}function Yc(s){const e=s.split("");return e.map((t,n)=>So(n,e).join(""))}function Kc(s){const e=Rr(s),t=Yc(s).map(Rr).filter(r=>r>=2048).sort()[0],n=Ao(t),i=Xc(s);return{empty:!1,name:"",setNum:e,chroma:s,normalized:n,intervals:i}}function Zc(s){if(s.length===0)return Dt.chroma;let e;const t=[0,0,0,0,0,0,0,0,0,0,0,0];for(let n=0;n<s.length;n++)e=Ne(s[n]),e.empty&&(e=bt(s[n])),e.empty||(t[e.chroma]=1);return t.join("")}var Qc=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Jc=Qc,el={...Dt,name:"",quality:"Unknown",intervals:[],aliases:[]},Oo=[],Sn={};function tl(s){return Sn[s]||el}function nl(s,e,t){const n=il(s),i={...No(s),name:t||"",quality:n,intervals:s,aliases:e};Oo.push(i),i.name&&(Sn[i.name]=i),Sn[i.setNum]=i,Sn[i.chroma]=i,i.aliases.forEach(r=>sl(i,r))}function sl(s,e){Sn[e]=s}function il(s){const e=t=>s.indexOf(t)!==-1;return e("5A")?"Augmented":e("3M")?"Major":e("5d")?"Diminished":e("3m")?"Minor":"Unknown"}Jc.forEach(([s,e,t])=>nl(s.split(" "),t.split(" "),e));Oo.sort((s,e)=>s.setNum-e.setNum);var rl=bt,ol=[1,2,2,3,3,4,5,5,6,6,7,7],al="P m M m M P d P m M m M".split(" ");function $o(s){const e=s<0?-1:1,t=Math.abs(s),n=t%12,i=Math.floor(t/12);return e*(ol[n]+7*i)+al[n]}var cl=ll((s,e)=>[s[0]-e[0],s[1]-e[1]]);function ll(s){return(e,t)=>{const n=bt(e).coord,i=bt(t).coord;if(n&&i){const r=s(n,i);return Co(r).name}}}var hl=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],ul=hl,dl={...Dt,intervals:[],aliases:[]},An={};function Eo(s){return An[s]||dl}function pl(s,e,t=[]){const n={...No(s),name:e,intervals:s,aliases:t};return An[n.name]=n,An[n.setNum]=n,An[n.chroma]=n,n.aliases.forEach(i=>fl(n,i)),n}function fl(s,e){An[e]=s}ul.forEach(([s,e,...t])=>pl(s.split(" "),e,t));var Io={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Do(s){const[e,t,n,i]=Ni(s);return e===""?ri("",s):e==="A"&&i==="ug"?ri("","aug"):ri(e+t,n+i)}function ri(s,e){const t=e.split("/");if(t.length===1)return[s,t[0],""];const[n,i,r,o]=Ni(t[1]);return n!==""&&r===""&&o===""?[s,t[0],n+i]:[s,e,""]}function gs(s){if(Array.isArray(s))return oi(s[1]||"",s[0],s[2]);if(s==="")return Io;{const[e,t,n]=Do(s),i=oi(t,e,n);return i.empty?oi(s):i}}function oi(s,e,t){const n=tl(s),i=Ne(e||""),r=Ne(t||"");if(n.empty||e&&i.empty||t&&r.empty)return Io;const o=Dr(i.pc,r.pc),c=n.intervals.indexOf(o),a=c>=0,l=a?r:Ne(""),h=c===-1?NaN:c+1,u=r.pc&&r.pc!==i.pc,d=Array.from(n.intervals);if(a)for(let g=1;g<h;g++){const b=d[0][0],w=d[0][1],k=parseInt(b,10)+7;d.push(`${k}${w}`),d.shift()}else if(u){const g=cl(Dr(i.pc,r.pc),"8P");g&&d.unshift(g)}const f=i.empty?[]:d.map(g=>Is(i.pc,g));s=n.aliases.indexOf(s)!==-1?s:n.aliases[0];const p=`${i.empty?"":i.pc}${s}${a&&h>1?"/"+l.pc:u?"/"+r.pc:""}`,m=`${e?i.pc+" ":""}${n.name}${a&&h>1?" over "+l.pc:u?" over "+r.pc:""}`;return{...n,name:m,symbol:p,tonic:i.pc,type:n.name,root:l.pc,bass:u?r.pc:"",intervals:d,rootDegree:h,notes:f}}var ml=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],gl=ml;gl.forEach(([s,e,t])=>void 0);var vl="C C# D D# E F F# G G# A A# B".split(" "),bl="C Db D Eb E F Gb G Ab A Bb B".split(" ");function Ro(s,e={}){if(isNaN(s)||s===-1/0||s===1/0)return"";s=Math.round(s);const n=(e.sharps===!0?vl:bl)[s%12];if(e.pitchClass)return n;const i=Math.floor(s/12)-1;return n+i}var vs=Ne,Ot=s=>vs(s).pc,Be=s=>vs(s).midi;function us(s){return Ro(s)}var Vo=Is;function Fo(s,e){const t=vs(s);if(t.empty)return"";const n=vs(e||Ro(t.midi||t.chroma,{sharps:t.alt<0,pitchClass:!0}));if(n.empty||n.chroma!==t.chroma)return"";if(t.oct===void 0)return n.pc;const i=t.chroma-t.alt,r=n.chroma-n.alt,o=i>11||r<0?-1:i<0||r>11?1:0,c=t.oct+o;return n.pc+c}var Oi=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],Fr={...Dt,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},_l=Oi.map(yl),ui={};_l.forEach(s=>{ui[s.name]=s,s.aliases.forEach(e=>{ui[e]=s})});function Lo(s){return typeof s=="string"?ui[s.toLowerCase()]||Fr:s&&s.name?Lo(s.name):Fr}function yl(s){const[e,t,n,i,r,o,c]=s,a=c?[c]:[],l=Number(t).toString(2);return{empty:!1,intervals:Eo(i).intervals,modeNum:e,chroma:l,normalized:l,name:i,setNum:t,alt:n,triad:r,seventh:o,aliases:a}}function jo(s){return(e,t)=>{const n=Lo(e);if(n.empty)return[];const i=So(n.modeNum,s),r=n.intervals.map(o=>Is(t,o));return i.map((o,c)=>r[c]+o)}}jo(Oi.map(s=>s[4]));jo(Oi.map(s=>s[5]));var xl={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function wl(s){if(typeof s!="string")return["",""];const e=s.indexOf(" "),t=Ne(s.substring(0,e));if(t.empty){const i=Ne(s);return i.empty?["",s.toLowerCase()]:[i.name,""]}const n=s.substring(t.name.length+1).toLowerCase();return[t.name,n.length?n:""]}function kl(s){const e=Array.isArray(s)?s:wl(s),t=Ne(e[0]).name,n=Eo(e[1]);if(n.empty)return xl;const i=n.name,r=t?n.intervals.map(c=>Is(t,c)):[],o=t?t+" "+i:i;return{...n,name:o,type:i,tonic:t,notes:r}}function Tl(s){let e=s;return e=e.replace(/diminished/gi,"diminished"),e=e.replace(/dim/gi,"dim"),e=e.replace(/minor/gi,"minor"),e=e.replace(/min/gi,"min"),e=e.replace(/major/gi,"major"),e=e.replace(/maj/gi,"maj"),e=e.replace(/aug/gi,"aug"),e=e.replace(/sus/gi,"sus"),e=e.replace(/dom/gi,"dom"),e=e.replace(/minmaj/gi,"mMaj"),e=e.replace(/mmaj/gi,"mMaj"),e}function Cl(s){return s.replace(/([A-G])(B+)/g,(t,n,i)=>n+"b".repeat(i.length)).replace(/->|→|–|—/g," ").replace(/[|>,;:]/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim()}function Ml(s){const e=Cl(s),t=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,n=e.match(t);return n?n.map(i=>i.trim()):[]}function di(s){const e=Ml(s),t=[];for(const n of e){let i=gs(n);if(i.empty||i.notes.length===0){const[r,o,c]=Do(n);if(r){const a=Tl(o),l=r+a+(c?"/"+c:""),h=gs(l);!h.empty&&h.notes.length>0&&(i=h)}}i.empty||i.notes.length===0||t.push({symbol:i.symbol||n,tonic:i.tonic,quality:i.quality,notes:i.notes,intervals:i.intervals,aliases:i.aliases})}return t}var Sl=Object.defineProperty,Al=Object.getOwnPropertyDescriptor,$i=(s,e,t,n)=>{for(var i=n>1?void 0:n?Al(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Sl(e,t,i),i};let En=class extends Se{constructor(){super(...arguments),this.value="",this.error=""}render(){return $`
      <div class="wrap">
        <label for="chord-progression">Chord Progression</label>
        <div class="input-group">
          <input
            id="chord-progression"
            type="text"
            .value=${this.value}
            placeholder="e.g. Cmaj7 Am7 | Dm7 > G7"
            @input=${this.onInput}
            @keydown=${this.onKeydown}
          />
          <button ?disabled=${!this.value.trim()} @click=${this.parseAndEmit}>Parse</button>
          <button class="btn-clear" ?disabled=${!this.value.trim()} @click=${this.clearInput} title="Clear progression">Clear</button>
        </div>

        ${this.error?$`<div class="error">${this.error}</div>`:$`<div class="hint">Separate chords with spaces, <code>|</code>, <code>&gt;</code>, <code>→</code>, <code>-</code>, or commas — any notation works.</div>`}
      </div>
    `}onInput(s){const e=s.target;this.value=e.value,this.error&&(this.error="")}onKeydown(s){s.key==="Enter"&&(s.preventDefault(),this.parseAndEmit())}parseAndEmit(){const s=di(this.value);if(!s.length){this.error="No valid chord symbols were found.";return}this.error="";const e={progression:s,source:this.value};this.dispatchEvent(new CustomEvent("progression-parsed",{detail:e,bubbles:!0,composed:!0}))}clearInput(){this.value="",this.error="",this.dispatchEvent(new CustomEvent("progression-parsed",{detail:{progression:[],source:""},bubbles:!0,composed:!0}))}};En.styles=Ye`
    :host {
      display: block;
      color: var(--text-primary, #ffffff);
      width: 100%;
    }

    .wrap {
      display: grid;
      gap: 12px;
      width: 100%;
    }

    label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--text-secondary, #888888);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .input-group {
      display: flex;
      gap: 12px;
      width: 100%;
    }

    input {
      flex: 1;
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
      border-radius: 8px;
      padding: 12px 16px;
      font: inherit;
      font-size: 0.95rem;
      outline: none;
      background: var(--input-bg, #121316);
      color: var(--input-color, #ffffff);
      transition: all 150ms ease;
    }

    input:focus {
      border-color: var(--accent-cyan, #00f0ff);
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.2);
    }

    button {
      border: none;
      border-radius: 8px;
      padding: 12px 24px;
      font: inherit;
      font-weight: 700;
      background: var(--accent-magenta, #ff2a9f);
      color: var(--text-on-accent, #ffffff);
      cursor: pointer;
      box-shadow: 0 4px 12px var(--accent-magenta-alpha, rgba(255, 42, 159, 0.2));
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px var(--accent-magenta-alpha, rgba(255, 42, 159, 0.3));
    }

    button:active:not(:disabled) {
      transform: translateY(1px);
      box-shadow: 0 2px 4px var(--accent-magenta-alpha, rgba(255, 42, 159, 0.2));
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      box-shadow: none;
    }

    .hint {
      font-size: 0.75rem;
      color: var(--text-secondary, #666666);
      margin-top: 2px;
      line-height: 1.4;
    }

    .error {
      font-size: 0.78rem;
      color: #fda4af;
      background: rgba(225, 29, 72, 0.1);
      border: 1px solid #f43f5e;
      border-radius: 8px;
      padding: 8px 12px;
      margin-top: 4px;
    }

    .btn-clear {
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
      border-radius: 8px;
      padding: 12px 18px;
      font: inherit;
      font-weight: 700;
      background: transparent;
      color: var(--btn-text-off, #666);
      cursor: pointer;
      box-shadow: none;
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
    }

    .btn-clear:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.05);
      border-color: var(--text-secondary);
      color: var(--text-primary);
      transform: none;
      box-shadow: none;
    }

    .btn-clear:active:not(:disabled) {
      transform: scale(0.96);
    }

    .btn-clear:disabled {
      opacity: 0.25;
      cursor: not-allowed;
    }

    @media (max-width: 480px) {
      .input-group {
        flex-wrap: wrap;
      }
      .input-group input {
        flex: 1 1 100%;
      }
      .input-group button, .input-group .btn-clear {
        flex: 1;
      }
    }
  `;$i([he({type:String})],En.prototype,"value",2);$i([q()],En.prototype,"error",2);En=$i([Ke("chord-input")],En);var Pl=Object.defineProperty,Nl=Object.getOwnPropertyDescriptor,Ln=(s,e,t,n)=>{for(var i=n>1?void 0:n?Nl(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Pl(e,t,i),i};let Rt=class extends Se{constructor(){super(...arguments),this.originalChords=[],this.keyChords=[],this.keyLabel="",this.activeIndex=0}render(){const s=this.keyChords.length>0?this.keyChords:this.originalChords;return $`
      <div class="sequence-track">
        ${Array.from({length:16}).map((e,t)=>{const n=s[t];return $`
            <div 
              class="step-block ${t===this.activeIndex?"active":""}"
              @click=${()=>n&&this.selectChord(t)}
            >
              ${n?$`<span class="chord-symbol">${n.symbol}</span>`:$`<span class="step-index">${t+1}</span>`}
            </div>
          `})}
      </div>
    `}selectChord(s){this.dispatchEvent(new CustomEvent("chord-selected",{detail:s,bubbles:!0,composed:!0}))}};Rt.styles=Ye`
    :host {
      display: block;
      width: 100%;
    }

    .sequence-track {
      display: flex;
      width: 100%;
      gap: 8px;
      height: 48px;
    }

    .step-block {
      flex: 1;
      background: var(--pad-scale);
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--btn-text-off, #94a3b8);
      cursor: pointer;
      transition: all 0.15s;
      overflow: hidden;
    }

    .step-block:hover {
      border-color: var(--btn-text-off);
      color: var(--text-primary);
    }

    .step-block.active {
      border-color: var(--accent-magenta, #ff2a9f);
      color: var(--accent-magenta, #ff2a9f);
      background: var(--pad-scale);
    }

    .step-index {
      font-size: 0.6rem;
      opacity: 0.5;
    }

    .chord-symbol {
      font-size: 0.85rem;
    }

    @media (max-width: 1024px) {
      .sequence-track {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        padding-bottom: 2px;
      }
      .sequence-track::-webkit-scrollbar {
        display: none;
      }
      .step-block {
        flex: 0 0 46px;
        min-width: 46px;
        height: 38px;
      }
      .chord-symbol {
        font-size: 0.75rem;
      }
    }
  `;Ln([he({attribute:!1})],Rt.prototype,"originalChords",2);Ln([he({attribute:!1})],Rt.prototype,"keyChords",2);Ln([he({type:String})],Rt.prototype,"keyLabel",2);Ln([he({type:Number})],Rt.prototype,"activeIndex",2);Rt=Ln([Ke("progression-stepper")],Rt);const qo="15.1.22",Lr=(s,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:s}),jr=(s,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:s}),pi=(s,e)=>({startTime:e,type:"setValue",value:s}),Wo=(s,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:s}),zo=(s,e,{startTime:t,target:n,timeConstant:i})=>n+(e-n)*Math.exp((t-s)/i),Kt=s=>s.type==="exponentialRampToValue",bs=s=>s.type==="linearRampToValue",mt=s=>Kt(s)||bs(s),Ei=s=>s.type==="setValue",ot=s=>s.type==="setValueCurve",_s=(s,e,t,n)=>{const i=s[e];return i===void 0?n:mt(i)||Ei(i)?i.value:ot(i)?i.values[i.values.length-1]:zo(t,_s(s,e-1,i.startTime,n),i)},qr=(s,e,t,n,i)=>t===void 0?[n.insertTime,i]:mt(t)?[t.endTime,t.value]:Ei(t)?[t.startTime,t.value]:ot(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,_s(s,e-1,t.startTime,i)],fi=s=>s.type==="cancelAndHold",mi=s=>s.type==="cancelScheduledValues",ft=s=>fi(s)||mi(s)?s.cancelTime:Kt(s)||bs(s)?s.endTime:s.startTime,Wr=(s,e,t,{endTime:n,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((s-e)/(n-e)):s<n?t:i,zr=(s,e,t,{endTime:n,value:i})=>t+(s-e)/(n-e)*(i-t),Bo=(s,e)=>{const t=Math.floor(e);if(t===e)return s[t];const n=Math.ceil(e);return(1-(e-t))*s[t]+(1-(n-e))*s[n]},Ol=(s,{duration:e,startTime:t,values:n})=>{const i=(s-t)/e*(n.length-1);return Bo(n,i)},$l=(s,e,t)=>{const n=s.length,i=Math.max(1,Math.floor(t/e*n))+1,r=s instanceof Float32Array?new Float32Array(i):s.slice(0,i);for(let o=0;o<i;o+=1){const a=o/(i-1)*t/e*(n-1);r[o]=Bo(s,a)}return r},is=s=>s.type==="setTarget";class El{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=ft(e);if(fi(e)||mi(e)){const n=this._automationEvents.findIndex(r=>mi(e)&&ot(r)?r.startTime+r.duration>=t:ft(r)>=t),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),fi(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&mt(i)){if(r!==void 0&&is(r))throw new Error("The internal list is malformed.");const o=r===void 0?i.insertTime:ot(r)?r.startTime+r.duration:ft(r),c=r===void 0?this._defaultValue:ot(r)?r.values[r.values.length-1]:r.value,a=Kt(i)?Wr(t,o,c,i):zr(t,o,c,i),l=Kt(i)?Lr(a,t,this._currenTime):jr(a,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&is(r)&&this._automationEvents.push(pi(this.getValue(t),t)),r!==void 0&&ot(r)&&r.startTime+r.duration>t){const o=t-r.startTime;this._automationEvents[this._automationEvents.length-1]=Wo($l(r.values,r.duration,o),r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>ft(o)>t),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&ot(i)&&ft(i)+i.duration>t)return!1;const r=Kt(e)?Lr(e.value,e.endTime,this._currenTime):bs(e)?jr(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(ot(e)&&t+e.duration>ft(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>ft(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),i=n[0];is(i)&&n.unshift(pi(_s(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>ft(o)>e),n=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&is(r)&&(n===void 0||!mt(n)||n.insertTime>e))return zo(e,_s(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&Ei(r)&&(n===void 0||!mt(n)))return r.value;if(r!==void 0&&ot(r)&&(n===void 0||!mt(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?Ol(e,r):r.values[r.values.length-1];if(r!==void 0&&mt(r)&&(n===void 0||!mt(n)))return r.value;if(n!==void 0&&Kt(n)){const[o,c]=qr(this._automationEvents,i,r,n,this._defaultValue);return Wr(e,o,c,n)}if(n!==void 0&&bs(n)){const[o,c]=qr(this._automationEvents,i,r,n,this._defaultValue);return zr(e,o,c,n)}return this._defaultValue}}const Il=s=>({cancelTime:s,type:"cancelAndHold"}),Dl=s=>({cancelTime:s,type:"cancelScheduledValues"}),Rl=(s,e)=>({endTime:e,type:"exponentialRampToValue",value:s}),Vl=(s,e)=>({endTime:e,type:"linearRampToValue",value:s}),Fl=(s,e,t)=>({startTime:e,target:s,timeConstant:t,type:"setTarget"}),Ll=()=>new DOMException("","AbortError"),jl=s=>(e,t,[n,i,r],o)=>{s(e[i],[t,n,r],c=>c[0]===t&&c[1]===n,o)},ql=s=>(e,t,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},Wl=s=>(e,t)=>{s.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},an=new WeakSet,Uo=new WeakMap,Ii=new WeakMap,Ho=new WeakMap,Di=new WeakMap,Ds=new WeakMap,Go=new WeakMap,gi=new WeakMap,vi=new WeakMap,bi=new WeakMap,Xo={construct(){return Xo}},zl=s=>{try{const e=new Proxy(s,Xo);new e}catch{return!1}return!0},Br=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Ur=(s,e)=>{const t=[];let n=s.replace(/^[\s]+/,""),i=n.match(Br);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(Br)}return[t.join(";"),n]},Hr=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Gr=s=>{if(!zl(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Bl=(s,e,t,n,i,r,o,c,a,l,h,u,d)=>{let f=0;return(p,m,g={credentials:"omit"})=>{const b=h.get(p);if(b!==void 0&&b.has(m))return Promise.resolve();const w=l.get(p);if(w!==void 0){const v=w.get(m);if(v!==void 0)return v}const k=r(p),C=k.audioWorklet===void 0?i(m).then(([v,y])=>{const[x,_]=Ur(v,y),S=`${x};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${_}
})})(window,'_AWGS')`;return t(S)}).then(()=>{const v=d._AWGS.pop();if(v===void 0)throw new SyntaxError;n(k.currentTime,k.sampleRate,()=>v(class{},void 0,(y,x)=>{if(y.trim()==="")throw e();const _=vi.get(k);if(_!==void 0){if(_.has(y))throw e();Gr(x),Hr(x.parameterDescriptors),_.set(y,x)}else Gr(x),Hr(x.parameterDescriptors),vi.set(k,new Map([[y,x]]))},k.sampleRate,void 0,void 0))}):Promise.all([i(m),Promise.resolve(s(u,u))]).then(([[v,y],x])=>{const _=f+1;f=_;const[S,A]=Ur(v,y),N=`${S};((AudioWorkletProcessor,registerProcessor)=>{${A}
})(${x?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${x?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${x?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${_}',class extends AudioWorkletProcessor{process(){return !1}})`,D=new Blob([N],{type:"application/javascript; charset=utf-8"}),E=URL.createObjectURL(D);return k.audioWorklet.addModule(E,g).then(()=>{if(c(k))return k;const I=o(k);return I.audioWorklet.addModule(E,g).then(()=>I)}).then(I=>{if(a===null)throw new SyntaxError;try{new a(I,`__sac${_}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(E))});return w===void 0?l.set(p,new Map([[m,C]])):w.set(m,C),C.then(()=>{const v=h.get(p);v===void 0?h.set(p,new Set([m])):v.add(m)}).finally(()=>{const v=l.get(p);v!==void 0&&v.delete(m)}),C}},Xe=(s,e)=>{const t=s.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Rs=(s,e)=>{const t=Array.from(s).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return s.delete(n),n},Yo=(s,e,t,n)=>{const i=Xe(s,e),r=Rs(i,o=>o[0]===t&&o[1]===n);return i.size===0&&s.delete(e),r},jn=s=>Xe(Go,s),cn=s=>{if(an.has(s))throw new Error("The AudioNode is already stored.");an.add(s),jn(s).forEach(e=>e(!0))},Ko=s=>"port"in s,qn=s=>{if(!an.has(s))throw new Error("The AudioNode is not stored.");an.delete(s),jn(s).forEach(e=>e(!1))},_i=(s,e)=>{!Ko(s)&&e.every(t=>t.size===0)&&qn(s)},Ul=(s,e,t,n,i,r,o,c,a,l,h,u,d)=>{const f=new WeakMap;return(p,m,g,b,w)=>{const{activeInputs:k,passiveInputs:C}=r(m),{outputs:v}=r(p),y=c(p),x=_=>{const S=a(m),A=a(p);if(_){const M=Yo(C,p,g,b);s(k,p,M,!1),!w&&!u(p)&&t(A,S,g,b),d(m)&&cn(m)}else{const M=n(k,p,g,b);e(C,b,M,!1),!w&&!u(p)&&i(A,S,g,b);const T=o(m);if(T===0)h(m)&&_i(m,k);else{const P=f.get(m);P!==void 0&&clearTimeout(P),f.set(m,setTimeout(()=>{h(m)&&_i(m,k)},T*1e3))}}};return l(v,[m,g,b],_=>_[0]===m&&_[1]===g&&_[2]===b,!0)?(y.add(x),h(p)?s(k,p,[g,b,x],!0):e(C,b,[p,g,x],!0),!0):!1}},Hl=s=>(e,t,[n,i,r],o)=>{const c=e.get(n);c===void 0?e.set(n,new Set([[i,t,r]])):s(c,[i,t,r],a=>a[0]===i&&a[1]===t,o)},Gl=s=>(e,t)=>{const n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(n),n.disconnect()};t.addEventListener("ended",i)},Xl=s=>(e,t)=>{s(e).add(t)},Yl={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},Kl=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=i(c),h={...Yl,...a},u=n(l,h),d=r(l)?e():null;super(c,!1,u,d),this._nativeAnalyserNode=u}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(c){this._nativeAnalyserNode.fftSize=c}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(c){const a=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=c,!(c>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=a,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(c){const a=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=c,!(this._nativeAnalyserNode.maxDecibels>c))throw this._nativeAnalyserNode.minDecibels=a,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(c){this._nativeAnalyserNode.smoothingTimeConstant=c}getByteFrequencyData(c){this._nativeAnalyserNode.getByteFrequencyData(c)}getByteTimeDomainData(c){this._nativeAnalyserNode.getByteTimeDomainData(c)}getFloatFrequencyData(c){this._nativeAnalyserNode.getFloatFrequencyData(c)}getFloatTimeDomainData(c){this._nativeAnalyserNode.getFloatTimeDomainData(c)}},ke=(s,e)=>s.context===e,Zl=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,fftSize:c.fftSize,maxDecibels:c.maxDecibels,minDecibels:c.minDecibels,smoothingTimeConstant:c.smoothingTimeConstant};c=s(o,l)}return n.set(o,c),await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},ys=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},st=()=>new DOMException("","IndexSizeError"),Ri=s=>{s.getChannelData=(e=>t=>{try{return e.call(s,t)}catch(n){throw n.code===12?st():n}})(s.getChannelData)},Ql={numberOfChannels:1},Jl=(s,e,t,n,i,r,o,c)=>{let a=null;return class Zo{constructor(h){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:u,numberOfChannels:d,sampleRate:f}={...Ql,...h};a===null&&(a=new i(1,1,44100));const p=n!==null&&e(r,r)?new n({length:u,numberOfChannels:d,sampleRate:f}):a.createBuffer(d,u,f);if(p.numberOfChannels===0)throw t();return typeof p.copyFromChannel!="function"?(o(p),Ri(p)):e(ys,()=>ys(p))||c(p),s.add(p),p}static[Symbol.hasInstance](h){return h!==null&&typeof h=="object"&&Object.getPrototypeOf(h)===Zo.prototype||s.has(h)}}},Pe=-34028234663852886e22,Ce=-Pe,at=s=>an.has(s),eh={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},th=(s,e,t,n,i,r,o,c)=>class extends s{constructor(l,h){const u=r(l),d={...eh,...h},f=i(u,d),p=o(u),m=p?e():null;super(l,!1,f,m),this._audioBufferSourceNodeRenderer=m,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,p,f.playbackRate,Ce,Pe)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const h=typeof l=="function"?c(this,l):null;this._nativeAudioBufferSourceNode.onended=h;const u=this._nativeAudioBufferSourceNode.onended;this._onended=u!==null&&u===h?l:u}get playbackRate(){return this._playbackRate}start(l=0,h=0,u){if(this._nativeAudioBufferSourceNode.start(l,h,u),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=u===void 0?[l,h]:[l,h,u]),this.context.state!=="closed"){cn(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),at(this)&&qn(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},nh=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,c=null;const a=async(l,h)=>{let u=t(l);const d=ke(u,h);if(!d){const f={buffer:u.buffer,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,loop:u.loop,loopEnd:u.loopEnd,loopStart:u.loopStart,playbackRate:u.playbackRate.value};u=e(h,f),o!==null&&u.start(...o),c!==null&&u.stop(c)}return r.set(h,u),d?await s(h,l.playbackRate,u.playbackRate):await n(h,l.playbackRate,u.playbackRate),await i(l,h,u),u};return{set start(l){o=l},set stop(l){c=l},render(l,h){const u=r.get(h);return u!==void 0?Promise.resolve(u):a(l,h)}}},sh=s=>"playbackRate"in s,ih=s=>"frequency"in s&&"gain"in s,rh=s=>"offset"in s,oh=s=>!("frequency"in s)&&"gain"in s,ah=s=>"detune"in s&&"frequency"in s&&!("gain"in s),ch=s=>"pan"in s,Me=s=>Xe(Uo,s),Wn=s=>Xe(Ho,s),yi=(s,e)=>{const{activeInputs:t}=Me(s);t.forEach(i=>i.forEach(([r])=>{e.includes(s)||yi(r,[...e,s])}));const n=sh(s)?[s.playbackRate]:Ko(s)?Array.from(s.parameters.values()):ih(s)?[s.Q,s.detune,s.frequency,s.gain]:rh(s)?[s.offset]:oh(s)?[s.gain]:ah(s)?[s.detune,s.frequency]:ch(s)?[s.pan]:[];for(const i of n){const r=Wn(i);r!==void 0&&r.activeInputs.forEach(([o])=>yi(o,e))}at(s)&&qn(s)},Qo=s=>{yi(s.destination,[])},lh=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),hh=(s,e,t,n,i,r,o,c,a)=>class extends s{constructor(h={}){if(a===null)throw new Error("Missing the native AudioContext constructor.");let u;try{u=new a(h)}catch(p){throw p.code===12&&p.message==="sampleRate is not in range"?t():p}if(u===null)throw n();if(!lh(h.latencyHint))throw new TypeError(`The provided value '${h.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(h.sampleRate!==void 0&&u.sampleRate!==h.sampleRate)throw t();super(u,2);const{latencyHint:d}=h,{sampleRate:f}=u;if(this._baseLatency=typeof u.baseLatency=="number"?u.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=u,a.name==="webkitAudioContext"?(this._nativeGainNode=u.createGain(),this._nativeOscillatorNode=u.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(u.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,u.state==="running"){this._state="suspended";const p=()=>{this._state==="suspended"&&(this._state=null),u.removeEventListener("statechange",p)};u.addEventListener("statechange",p)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Qo(this)}))}createMediaElementSource(h){return new i(this,{mediaElement:h})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(h){return new o(this,{mediaStream:h})}createMediaStreamTrackSource(h){return new c(this,{mediaStreamTrack:h})}resume(){return this._state==="suspended"?new Promise((h,u)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?h():this.resume().then(h,u)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(h=>{throw h===void 0||h.code===15?e():h})}suspend(){return this._nativeAudioContext.suspend().catch(h=>{throw h===void 0?e():h})}},uh=(s,e,t,n,i,r,o,c)=>class extends s{constructor(l,h){const u=r(l),d=o(u),f=i(u,h,d),p=d?e(c):null;super(l,!1,f,p),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},dh=s=>{const e=new WeakMap,t=async(n,i)=>{const r=i.destination;return e.set(i,r),await s(n,i,r),r};return{render(n,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(n,i)}}},ph=(s,e,t,n,i,r,o,c)=>(a,l)=>{const h=l.listener,u=()=>{const v=new Float32Array(1),y=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),x=o(l);let _=!1,S=[0,0,-1,0,1,0],A=[0,0,0];const M=()=>{if(_)return;_=!0;const D=n(l,256,9,0);D.onaudioprocess=({inputBuffer:E})=>{const I=[r(E,v,0),r(E,v,1),r(E,v,2),r(E,v,3),r(E,v,4),r(E,v,5)];I.some((V,j)=>V!==S[j])&&(h.setOrientation(...I),S=I);const U=[r(E,v,6),r(E,v,7),r(E,v,8)];U.some((V,j)=>V!==A[j])&&(h.setPosition(...U),A=U)},y.connect(D)},T=D=>E=>{E!==S[D]&&(S[D]=E,h.setOrientation(...S))},P=D=>E=>{E!==A[D]&&(A[D]=E,h.setPosition(...A))},N=(D,E,I)=>{const U=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:E});U.connect(y,0,D),U.start(),Object.defineProperty(U.offset,"defaultValue",{get(){return E}});const V=s({context:a},x,U.offset,Ce,Pe);return c(V,"value",j=>()=>j.call(V),j=>L=>{try{j.call(V,L)}catch(Z){if(Z.code!==9)throw Z}M(),x&&I(L)}),V.cancelAndHoldAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return M(),Z})(V.cancelAndHoldAtTime),V.cancelScheduledValues=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return M(),Z})(V.cancelScheduledValues),V.exponentialRampToValueAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return M(),Z})(V.exponentialRampToValueAtTime),V.linearRampToValueAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return M(),Z})(V.linearRampToValueAtTime),V.setTargetAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return M(),Z})(V.setTargetAtTime),V.setValueAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return M(),Z})(V.setValueAtTime),V.setValueCurveAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return M(),Z})(V.setValueCurveAtTime),V};return{forwardX:N(0,0,T(0)),forwardY:N(1,0,T(1)),forwardZ:N(2,-1,T(2)),positionX:N(6,0,P(0)),positionY:N(7,0,P(1)),positionZ:N(8,0,P(2)),upX:N(3,0,T(3)),upY:N(4,1,T(4)),upZ:N(5,0,T(5))}},{forwardX:d,forwardY:f,forwardZ:p,positionX:m,positionY:g,positionZ:b,upX:w,upY:k,upZ:C}=h.forwardX===void 0?u():h;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return p},get positionX(){return m},get positionY(){return g},get positionZ(){return b},get upX(){return w},get upY(){return k},get upZ(){return C}}},xs=s=>"context"in s,zn=s=>xs(s[0]),zt=(s,e,t,n)=>{for(const i of s)if(t(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(e),!0},Xr=(s,e,[t,n],i)=>{zt(s,[e,t,n],r=>r[0]===e&&r[1]===t,i)},Yr=(s,[e,t,n],i)=>{const r=s.get(e);r===void 0?s.set(e,new Set([[t,n]])):zt(r,[t,n],o=>o[0]===t,i)},vn=s=>"inputs"in s,ws=(s,e,t,n)=>{if(vn(e)){const i=e.inputs[n];return s.connect(i,t,0),[i,t,0]}return s.connect(e,t,n),[e,t,n]},Jo=(s,e,t)=>{for(const n of s)if(n[0]===e&&n[1]===t)return s.delete(n),n;return null},fh=(s,e,t)=>Rs(s,n=>n[0]===e&&n[1]===t),ea=(s,e)=>{if(!jn(s).delete(e))throw new Error("Missing the expected event listener.")},ta=(s,e,t)=>{const n=Xe(s,e),i=Rs(n,r=>r[0]===t);return n.size===0&&s.delete(e),i},ks=(s,e,t,n)=>{vn(e)?s.disconnect(e.inputs[n],t,0):s.disconnect(e,t,n)},se=s=>Xe(Ii,s),In=s=>Xe(Di,s),Vt=s=>gi.has(s),ds=s=>!an.has(s),Kr=(s,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const c=s.createBufferSource();c.buffer=r,c.loop=!0,c.connect(n).connect(s.destination),c.connect(i),c.disconnect(i),n.onaudioprocess=a=>{const l=a.inputBuffer.getChannelData(0);Array.prototype.some.call(l,h=>h===1)?t(!0):t(!1),c.stop(),n.onaudioprocess=null,c.disconnect(n),n.disconnect(s.destination)},c.start()}}),ai=(s,e)=>{const t=new Map;for(const n of s)for(const i of n){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((n,i)=>e(i,n))},Ts=s=>"context"in s,mh=s=>{const e=new Map;s.connect=(t=>(n,i=0,r=0)=>{const o=Ts(n)?t(n,i,r):t(n,i),c=e.get(n);return c===void 0?e.set(n,[{input:r,output:i}]):c.every(a=>a.input!==r||a.output!==i)&&c.push({input:r,output:i}),o})(s.connect.bind(s)),s.disconnect=(t=>(n,i,r)=>{if(t.apply(s),n===void 0)e.clear();else if(typeof n=="number")for(const[o,c]of e){const a=c.filter(l=>l.output!==n);a.length===0?e.delete(o):e.set(o,a)}else if(e.has(n))if(i===void 0)e.delete(n);else{const o=e.get(n);if(o!==void 0){const c=o.filter(a=>a.output!==i&&(a.input!==r||r===void 0));c.length===0?e.delete(n):e.set(n,c)}}for(const[o,c]of e)c.forEach(a=>{Ts(o)?s.connect(o,a.output,a.input):s.connect(o,a.output)})})(s.disconnect)},gh=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=Wn(e),{outputs:o}=Me(s),c=jn(s),a=l=>{const h=se(s),u=In(e);if(l){const d=ta(r,s,t);Xr(i,s,d,!1),!n&&!Vt(s)&&h.connect(u,t)}else{const d=fh(i,s,t);Yr(r,d,!1),!n&&!Vt(s)&&h.disconnect(u,t)}};return zt(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(c.add(a),at(s)?Xr(i,s,[t,a],!0):Yr(r,[s,t,a],!0),!0):!1},vh=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=Me(e),o=Jo(i[n],s,t);return o===null?[Yo(r,s,t,n)[2],!1]:[o[2],!0]},bh=(s,e,t)=>{const{activeInputs:n,passiveInputs:i}=Wn(e),r=Jo(n,s,t);return r===null?[ta(i,s,t)[1],!1]:[r[2],!0]},Vi=(s,e,t,n,i)=>{const[r,o]=vh(s,t,n,i);if(r!==null&&(ea(s,r),o&&!e&&!Vt(s)&&ks(se(s),se(t),n,i)),at(t)){const{activeInputs:c}=Me(t);_i(t,c)}},Fi=(s,e,t,n)=>{const[i,r]=bh(s,t,n);i!==null&&(ea(s,i),r&&!e&&!Vt(s)&&se(s).disconnect(In(t),n))},_h=(s,e)=>{const t=Me(s),n=[];for(const i of t.outputs)zn(i)?Vi(s,e,...i):Fi(s,e,...i),n.push(i[0]);return t.outputs.clear(),n},yh=(s,e,t)=>{const n=Me(s),i=[];for(const r of n.outputs)r[1]===t&&(zn(r)?Vi(s,e,...r):Fi(s,e,...r),i.push(r[0]),n.outputs.delete(r));return i},xh=(s,e,t,n,i)=>{const r=Me(s);return Array.from(r.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(i===void 0||o[2]===i)).map(o=>(zn(o)?Vi(s,e,...o):Fi(s,e,...o),r.outputs.delete(o),o[0]))},wh=(s,e,t,n,i,r,o,c,a,l,h,u,d,f,p,m)=>class extends l{constructor(b,w,k,C){super(k),this._context=b,this._nativeAudioNode=k;const v=h(b);u(v)&&t(Kr,()=>Kr(v,m))!==!0&&mh(k),Ii.set(this,k),Go.set(this,new Set),b.state!=="closed"&&w&&cn(this),s(this,C,k)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(b){this._nativeAudioNode.channelCount=b}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(b){this._nativeAudioNode.channelCountMode=b}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(b){this._nativeAudioNode.channelInterpretation=b}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(b,w=0,k=0){if(w<0||w>=this._nativeAudioNode.numberOfOutputs)throw i();const C=h(this._context),v=p(C);if(d(b)||f(b))throw r();if(xs(b)){const _=se(b);try{const A=ws(this._nativeAudioNode,_,w,k),M=ds(this);(v||M)&&this._nativeAudioNode.disconnect(...A),this.context.state!=="closed"&&!M&&ds(b)&&cn(b)}catch(A){throw A.code===12?r():A}if(e(this,b,w,k,v)){const A=a([this],b);ai(A,n(v))}return b}const y=In(b);if(y.name==="playbackRate"&&y.maxValue===1024)throw o();try{this._nativeAudioNode.connect(y,w),(v||ds(this))&&this._nativeAudioNode.disconnect(y,w)}catch(_){throw _.code===12?r():_}if(gh(this,b,w,v)){const _=a([this],b);ai(_,n(v))}}disconnect(b,w,k){let C;const v=h(this._context),y=p(v);if(b===void 0)C=_h(this,y);else if(typeof b=="number"){if(b<0||b>=this.numberOfOutputs)throw i();C=yh(this,y,b)}else{if(w!==void 0&&(w<0||w>=this.numberOfOutputs)||xs(b)&&k!==void 0&&(k<0||k>=b.numberOfInputs))throw i();if(C=xh(this,y,b,w,k),C.length===0)throw r()}for(const x of C){const _=a([this],x);ai(_,c)}}},kh=(s,e,t,n,i,r,o,c,a,l,h,u,d)=>(f,p,m,g=null,b=null)=>{const w=m.value,k=new El(w),C=p?n(k):null,v={get defaultValue(){return w},get maxValue(){return g===null?m.maxValue:g},get minValue(){return b===null?m.minValue:b},get value(){return m.value},set value(y){m.value=y,v.setValueAtTime(y,f.context.currentTime)},cancelAndHoldAtTime(y){if(typeof m.cancelAndHoldAtTime=="function")C===null&&k.flush(f.context.currentTime),k.add(i(y)),m.cancelAndHoldAtTime(y);else{const x=Array.from(k).pop();C===null&&k.flush(f.context.currentTime),k.add(i(y));const _=Array.from(k).pop();m.cancelScheduledValues(y),x!==_&&_!==void 0&&(_.type==="exponentialRampToValue"?m.exponentialRampToValueAtTime(_.value,_.endTime):_.type==="linearRampToValue"?m.linearRampToValueAtTime(_.value,_.endTime):_.type==="setValue"?m.setValueAtTime(_.value,_.startTime):_.type==="setValueCurve"&&m.setValueCurveAtTime(_.values,_.startTime,_.duration))}return v},cancelScheduledValues(y){return C===null&&k.flush(f.context.currentTime),k.add(r(y)),m.cancelScheduledValues(y),v},exponentialRampToValueAtTime(y,x){if(y===0)throw new RangeError;if(!Number.isFinite(x)||x<0)throw new RangeError;const _=f.context.currentTime;return C===null&&k.flush(_),Array.from(k).length===0&&(k.add(l(w,_)),m.setValueAtTime(w,_)),k.add(o(y,x)),m.exponentialRampToValueAtTime(y,x),v},linearRampToValueAtTime(y,x){const _=f.context.currentTime;return C===null&&k.flush(_),Array.from(k).length===0&&(k.add(l(w,_)),m.setValueAtTime(w,_)),k.add(c(y,x)),m.linearRampToValueAtTime(y,x),v},setTargetAtTime(y,x,_){return C===null&&k.flush(f.context.currentTime),k.add(a(y,x,_)),m.setTargetAtTime(y,x,_),v},setValueAtTime(y,x){return C===null&&k.flush(f.context.currentTime),k.add(l(y,x)),m.setValueAtTime(y,x),v},setValueCurveAtTime(y,x,_){const S=y instanceof Float32Array?y:new Float32Array(y);if(u!==null&&u.name==="webkitAudioContext"){const A=x+_,M=f.context.sampleRate,T=Math.ceil(x*M),P=Math.floor(A*M),N=P-T,D=new Float32Array(N);for(let I=0;I<N;I+=1){const U=(S.length-1)/_*((T+I)/M-x),V=Math.floor(U),j=Math.ceil(U);D[I]=V===j?S[V]:(1-(U-V))*S[V]+(1-(j-U))*S[j]}C===null&&k.flush(f.context.currentTime),k.add(h(D,x,_)),m.setValueCurveAtTime(D,x,_);const E=P/M;E<A&&d(v,D[D.length-1],E),d(v,S[S.length-1],A)}else C===null&&k.flush(f.context.currentTime),k.add(h(S,x,_)),m.setValueCurveAtTime(S,x,_);return v}};return t.set(v,m),e.set(v,f),s(v,C),v},Th=s=>({replay(e){for(const t of s)if(t.type==="exponentialRampToValue"){const{endTime:n,value:i}=t;e.exponentialRampToValueAtTime(i,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:i}=t;e.linearRampToValueAtTime(i,n)}else if(t.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=t;e.setTargetAtTime(i,n,r)}else if(t.type==="setValue"){const{startTime:n,value:i}=t;e.setValueAtTime(i,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class na{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,i)=>e.call(t,n,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const Ch={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},Mh=(s,e,t,n,i,r,o,c,a,l,h,u,d,f)=>class extends e{constructor(m,g,b){var w;const k=c(m),C=a(k),v=h({...Ch,...b});d(v);const y=vi.get(k),x=y?.get(g),_=C||k.state!=="closed"?k:(w=o(k))!==null&&w!==void 0?w:k,S=i(_,C?null:m.baseLatency,l,g,x,v),A=C?n(g,v,x):null;super(m,!0,S,A);const M=[];S.parameters.forEach((P,N)=>{const D=t(this,C,P);M.push([N,D])}),this._nativeAudioWorkletNode=S,this._onprocessorerror=null,this._parameters=new na(M),C&&s(k,this);const{activeInputs:T}=r(this);u(S,T)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(m){const g=typeof m=="function"?f(this,m):null;this._nativeAudioWorkletNode.onprocessorerror=g;const b=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=b!==null&&b===g?m:b}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function Cs(s,e,t,n,i){if(typeof s.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),s.copyFromChannel(e[t],n,i);else{const r=s.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const sa=(s,e,t,n,i)=>{typeof s.copyToChannel=="function"?e[t].byteLength!==0&&s.copyToChannel(e[t],n,i):e[t].byteLength!==0&&s.getChannelData(n).set(e[t],i)},Ms=(s,e)=>{const t=[];for(let n=0;n<s;n+=1){const i=[],r=typeof e=="number"?e:e[n];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},Sh=(s,e)=>{const t=Xe(bi,s),n=se(e);return Xe(t,n)},Ah=async(s,e,t,n,i,r,o)=>{const c=e===null?Math.ceil(s.context.length/128)*128:e.length,a=n.channelCount*n.numberOfInputs,l=i.reduce((g,b)=>g+b,0),h=l===0?null:t.createBuffer(l,c,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const u=Me(s),d=await Sh(t,s),f=Ms(n.numberOfInputs,n.channelCount),p=Ms(n.numberOfOutputs,i),m=Array.from(s.parameters.keys()).reduce((g,b)=>({...g,[b]:new Float32Array(128)}),{});for(let g=0;g<c;g+=128){if(n.numberOfInputs>0&&e!==null)for(let b=0;b<n.numberOfInputs;b+=1)for(let w=0;w<n.channelCount;w+=1)Cs(e,f[b],w,w,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:b},w)=>{Cs(e,m,b,a+w,g)});for(let b=0;b<n.numberOfInputs;b+=1)for(let w=0;w<i[b];w+=1)p[b][w].byteLength===0&&(p[b][w]=new Float32Array(128));try{const b=f.map((k,C)=>u.activeInputs[C].size===0?[]:k),w=o(g/t.sampleRate,t.sampleRate,()=>d.process(b,p,m));if(h!==null)for(let k=0,C=0;k<n.numberOfOutputs;k+=1){for(let v=0;v<i[k];v+=1)sa(h,p[k],v,C+v,g);C+=i[k]}if(!w)break}catch(b){s.dispatchEvent(new ErrorEvent("processorerror",{colno:b.colno,filename:b.filename,lineno:b.lineno,message:b.message}));break}}return h},Ph=(s,e,t,n,i,r,o,c,a,l,h,u,d,f,p,m)=>(g,b,w)=>{const k=new WeakMap;let C=null;const v=async(y,x)=>{let _=h(y),S=null;const A=ke(_,x),M=Array.isArray(b.outputChannelCount)?b.outputChannelCount:Array.from(b.outputChannelCount);if(u===null){const T=M.reduce((E,I)=>E+I,0),P=i(x,{channelCount:Math.max(1,T),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,T)}),N=[];for(let E=0;E<y.numberOfOutputs;E+=1)N.push(n(x,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:M[E]}));const D=o(x,{channelCount:b.channelCount,channelCountMode:b.channelCountMode,channelInterpretation:b.channelInterpretation,gain:1});D.connect=e.bind(null,N),D.disconnect=a.bind(null,N),S=[P,N,D]}else A||(_=new u(x,g));if(k.set(x,S===null?_:S[2]),S!==null){if(C===null){if(w===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const I=y.channelCount*y.numberOfInputs,U=w.parameterDescriptors===void 0?0:w.parameterDescriptors.length,V=I+U;C=Ah(y,V===0?null:await(async()=>{const L=new d(V,Math.ceil(y.context.length/128)*128,x.sampleRate),Z=[],Ee=[];for(let ie=0;ie<b.numberOfInputs;ie+=1)Z.push(o(L,{channelCount:b.channelCount,channelCountMode:b.channelCountMode,channelInterpretation:b.channelInterpretation,gain:1})),Ee.push(i(L,{channelCount:b.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:b.channelCount}));const Ie=await Promise.all(Array.from(y.parameters.values()).map(async ie=>{const Te=r(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:ie.value});return await f(L,ie,Te.offset),Te})),H=n(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,I+U)});for(let ie=0;ie<b.numberOfInputs;ie+=1){Z[ie].connect(Ee[ie]);for(let Te=0;Te<b.channelCount;Te+=1)Ee[ie].connect(H,Te,ie*b.channelCount+Te)}for(const[ie,Te]of Ie.entries())Te.connect(H,0,I+ie),Te.start(0);return H.connect(L.destination),await Promise.all(Z.map(ie=>p(y,L,ie))),m(L)})(),x,b,M,w,l)}const T=await C,P=t(x,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[N,D,E]=S;T!==null&&(P.buffer=T,P.start(0)),P.connect(N);for(let I=0,U=0;I<y.numberOfOutputs;I+=1){const V=D[I];for(let j=0;j<M[I];j+=1)N.connect(V,U+j,j);U+=M[I]}return E}if(A)for(const[T,P]of y.parameters.entries())await s(x,P,_.parameters.get(T));else for(const[T,P]of y.parameters.entries())await f(x,P,_.parameters.get(T));return await p(y,x,_),_};return{render(y,x){c(x,y);const _=k.get(x);return _!==void 0?Promise.resolve(_):v(y,x)}}},Nh=(s,e,t,n,i,r,o,c,a,l,h,u,d,f,p,m,g,b,w,k)=>class extends p{constructor(v,y){super(v,y),this._nativeContext=v,this._audioWorklet=s===void 0?void 0:{addModule:(x,_)=>s(this,x,_)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(v,y,x){return new t({length:y,numberOfChannels:v,sampleRate:x})}createBufferSource(){return new n(this)}createChannelMerger(v=6){return new r(this,{numberOfInputs:v})}createChannelSplitter(v=6){return new o(this,{numberOfOutputs:v})}createConstantSource(){return new c(this)}createConvolver(){return new a(this)}createDelay(v=1){return new h(this,{maxDelayTime:v})}createDynamicsCompressor(){return new u(this)}createGain(){return new d(this)}createIIRFilter(v,y){return new f(this,{feedback:y,feedforward:v})}createOscillator(){return new m(this)}createPanner(){return new g(this)}createPeriodicWave(v,y,x={disableNormalization:!1}){return new b(this,{...x,imag:y,real:v})}createStereoPanner(){return new w(this)}createWaveShaper(){return new k(this)}decodeAudioData(v,y,x){return l(this._nativeContext,v).then(_=>(typeof y=="function"&&y(_),_),_=>{throw typeof x=="function"&&x(_),_})}},Oh={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},$h=(s,e,t,n,i,r,o,c)=>class extends s{constructor(l,h){const u=r(l),d={...Oh,...h},f=i(u,d),p=o(u),m=p?t():null;super(l,!1,f,m),this._Q=e(this,p,f.Q,Ce,Pe),this._detune=e(this,p,f.detune,1200*Math.log2(Ce),-1200*Math.log2(Ce)),this._frequency=e(this,p,f.frequency,l.sampleRate/2,0),this._gain=e(this,p,f.gain,40*Math.log10(Ce),Pe),this._nativeBiquadFilterNode=f,c(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,h,u){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,h,u)}catch(d){throw d.code===11?n():d}if(l.length!==h.length||h.length!==u.length)throw n()}},Eh=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(c,a)=>{let l=t(c);const h=ke(l,a);if(!h){const u={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(a,u)}return r.set(a,l),h?(await s(a,c.Q,l.Q),await s(a,c.detune,l.detune),await s(a,c.frequency,l.frequency),await s(a,c.gain,l.gain)):(await n(a,c.Q,l.Q),await n(a,c.detune,l.detune),await n(a,c.frequency,l.frequency),await n(a,c.gain,l.gain)),await i(c,a,l),l};return{render(c,a){const l=r.get(a);return l!==void 0?Promise.resolve(l):o(c,a)}}},Ih=(s,e)=>(t,n)=>{const i=e.get(t);if(i!==void 0)return i;const r=s.get(t);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(s.set(t,o),o.catch(()=>!1).then(c=>(s.delete(t),e.set(t,c),c))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},Dh={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},Rh=(s,e,t,n,i)=>class extends s{constructor(o,c){const a=n(o),l={...Dh,...c},h=t(a,l),u=i(a)?e():null;super(o,!1,h,u)}},Vh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,numberOfInputs:c.numberOfInputs};c=s(o,l)}return n.set(o,c),await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},Fh={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Lh=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=n(c),h=r({...Fh,...a}),u=t(l,h),d=i(l)?e():null;super(c,!1,u,d)}},jh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,numberOfOutputs:c.numberOfOutputs};c=s(o,l)}return n.set(o,c),await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},qh=s=>(e,t,n)=>s(t,e,n),Wh=s=>(e,t,n=0,i=0)=>{const r=e[n];if(r===void 0)throw s();return Ts(t)?r.connect(t,0,i):r.connect(t,0)},zh=s=>(e,t)=>{const n=s(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Bh={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},Uh=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...Bh,...l},d=n(h,u),f=r(h),p=f?t():null;super(a,!1,d,p),this._constantSourceNodeRenderer=p,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,Ce,Pe),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(a){const l=typeof a=="function"?o(this,a):null;this._nativeConstantSourceNode.onended=l;const h=this._nativeConstantSourceNode.onended;this._onended=h!==null&&h===l?a:h}start(a=0){if(this._nativeConstantSourceNode.start(a),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=a),this.context.state!=="closed"){cn(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),at(this)&&qn(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(a=0){this._nativeConstantSourceNode.stop(a),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=a)}},Hh=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,c=null;const a=async(l,h)=>{let u=t(l);const d=ke(u,h);if(!d){const f={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,offset:u.offset.value};u=e(h,f),o!==null&&u.start(o),c!==null&&u.stop(c)}return r.set(h,u),d?await s(h,l.offset,u.offset):await n(h,l.offset,u.offset),await i(l,h,u),u};return{set start(l){o=l},set stop(l){c=l},render(l,h){const u=r.get(h);return u!==void 0?Promise.resolve(u):a(l,h)}}},Gh=s=>e=>(s[0]=e,s[0]),Xh={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},Yh=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=n(c),h={...Xh,...a},u=t(l,h),f=i(l)?e():null;super(c,!1,u,f),this._isBufferNullified=!1,this._nativeConvolverNode=u,h.buffer!==null&&r(this,h.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(c){if(this._nativeConvolverNode.buffer=c,c===null&&this._nativeConvolverNode.buffer!==null){const a=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=a.createBuffer(1,1,a.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(c){this._nativeConvolverNode.normalize=c}},Kh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={buffer:c.buffer,channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,disableNormalization:!c.normalize};c=s(o,l)}return n.set(o,c),vn(c)?await t(r,o,c.inputs[0]):await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},Zh=(s,e)=>(t,n,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},Qh=()=>new DOMException("","DataCloneError"),Zr=s=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const i=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>i();try{e.postMessage(s,[s])}catch{}finally{i()}})},Jh=(s,e,t,n,i,r,o,c,a,l,h)=>(u,d)=>{const f=o(u)?u:r(u);if(i.has(d)){const p=t();return Promise.reject(p)}try{i.add(d)}catch{}return e(a,()=>a(f))?f.decodeAudioData(d).then(p=>(Zr(d).catch(()=>{}),e(c,()=>c(p))||h(p),s.add(p),p)):new Promise((p,m)=>{const g=async()=>{try{await Zr(d)}catch{}},b=w=>{m(w),g()};try{f.decodeAudioData(d,w=>{typeof w.copyFromChannel!="function"&&(l(w),Ri(w)),s.add(w),g().then(()=>p(w))},w=>{b(w===null?n():w)})}catch(w){b(w)}})},eu=(s,e,t,n,i,r,o,c)=>(a,l)=>{const h=e.get(a);if(h===void 0)throw new Error("Missing the expected cycle count.");const u=r(a.context),d=c(u);if(h===l){if(e.delete(a),!d&&o(a)){const f=n(a),{outputs:p}=t(a);for(const m of p)if(zn(m)){const g=n(m[0]);s(f,g,m[1],m[2])}else{const g=i(m[0]);f.connect(g,m[1])}}}else e.set(a,h-l)},tu={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},nu=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...tu,...l},d=n(h,u),f=r(h),p=f?t(u.maxDelayTime):null;super(a,!1,d,p),this._delayTime=e(this,f,d.delayTime),o(this,u.maxDelayTime)}get delayTime(){return this._delayTime}},su=(s,e,t,n,i)=>r=>{const o=new WeakMap,c=async(a,l)=>{let h=t(a);const u=ke(h,l);if(!u){const d={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:r};h=e(l,d)}return o.set(l,h),u?await s(l,a.delayTime,h.delayTime):await n(l,a.delayTime,h.delayTime),await i(a,l,h),h};return{render(a,l){const h=o.get(l);return h!==void 0?Promise.resolve(h):c(a,l)}}},iu=s=>(e,t,n,i)=>s(e[i],r=>r[0]===t&&r[1]===n),ru=s=>(e,t)=>{s(e).delete(t)},ou=s=>"delayTime"in s,au=(s,e,t)=>function n(i,r){const o=xs(r)?r:t(s,r);if(ou(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:c}=e(o);return Array.from(c).map(a=>n([...i,o],a[0])).reduce((a,l)=>a.concat(l),[])},rs=(s,e,t)=>{const n=e[t];if(n===void 0)throw s();return n},cu=s=>(e,t=void 0,n=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?rs(s,e,t).disconnect():Ts(t)?n===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?rs(s,e,n).disconnect(t,0):rs(s,e,n).disconnect(t,0,i):n===void 0?e.forEach(r=>r.disconnect(t)):rs(s,e,n).disconnect(t,0),lu={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},hu=(s,e,t,n,i,r,o,c)=>class extends s{constructor(l,h){const u=r(l),d={...lu,...h},f=n(u,d),p=o(u),m=p?t():null;super(l,!1,f,m),this._attack=e(this,p,f.attack),this._knee=e(this,p,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,p,f.ratio),this._release=e(this,p,f.release),this._threshold=e(this,p,f.threshold),c(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const h=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=h,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const h=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=h,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},uu=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(c,a)=>{let l=t(c);const h=ke(l,a);if(!h){const u={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(a,u)}return r.set(a,l),h?(await s(a,c.attack,l.attack),await s(a,c.knee,l.knee),await s(a,c.ratio,l.ratio),await s(a,c.release,l.release),await s(a,c.threshold,l.threshold)):(await n(a,c.attack,l.attack),await n(a,c.knee,l.knee),await n(a,c.ratio,l.ratio),await n(a,c.release,l.release),await n(a,c.threshold,l.threshold)),await i(c,a,l),l};return{render(c,a){const l=r.get(a);return l!==void 0?Promise.resolve(l):o(c,a)}}},du=()=>new DOMException("","EncodingError"),pu=s=>e=>new Promise((t,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),c=URL.createObjectURL(o),a=s.onerror,l=()=>{s.onerror=a,URL.revokeObjectURL(c)};s.onerror=(h,u,d,f,p)=>{if(u===c||u===s.location.href&&d===1&&f===1)return l(),n(p),!1;if(a!==null)return a(h,u,d,f,p)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=c,r.type="module",i.appendChild(r)}}),fu=s=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},mu=s=>(e,t,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},gu=s=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw s()},vu={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},bu=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=i(c),h={...vu,...a},u=n(l,h),d=r(l),f=d?t():null;super(c,!1,u,f),this._gain=e(this,d,u.gain,Ce,Pe)}get gain(){return this._gain}},_u=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(c,a)=>{let l=t(c);const h=ke(l,a);if(!h){const u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(a,u)}return r.set(a,l),h?await s(a,c.gain,l.gain):await n(a,c.gain,l.gain),await i(c,a,l),l};return{render(c,a){const l=r.get(a);return l!==void 0?Promise.resolve(l):o(c,a)}}},yu=(s,e)=>t=>e(s,t),xu=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},wu=s=>e=>{var t;return(t=s.get(e))!==null&&t!==void 0?t:0},ku=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},Tu=s=>e=>s.get(e),_e=()=>new DOMException("","InvalidStateError"),Cu=s=>e=>{const t=s.get(e);if(t===void 0)throw _e();return t},Mu=(s,e)=>t=>{let n=s.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),s.set(t,n),n},Su=s=>e=>{const t=s.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Vs=()=>new DOMException("","InvalidAccessError"),Au=s=>{s.getFrequencyResponse=(e=>(t,n,i)=>{if(t.length!==n.length||n.length!==i.length)throw Vs();return e.call(s,t,n,i)})(s.getFrequencyResponse)},Pu={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},Nu=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=n(c),h=i(l),u={...Pu,...a},d=e(l,h?null:c.baseLatency,u),f=h?t(u.feedback,u.feedforward):null;super(c,!1,d,f),Au(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(c,a,l){return this._nativeIIRFilterNode.getFrequencyResponse(c,a,l)}},ia=(s,e,t,n,i,r,o,c,a,l,h)=>{const u=l.length;let d=c;for(let f=0;f<u;f+=1){let p=t[0]*l[f];for(let m=1;m<i;m+=1){const g=d-m&a-1;p+=t[m]*r[g],p-=s[m]*o[g]}for(let m=i;m<n;m+=1)p+=t[m]*r[d-m&a-1];for(let m=i;m<e;m+=1)p-=s[m]*o[d-m&a-1];r[d]=l[f],o[d]=p,d=d+1&a-1,h[f]=p}return d},Ou=(s,e,t,n)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),o=i.length,c=r.length,a=Math.min(o,c);if(i[0]!==1){for(let p=0;p<o;p+=1)r[p]/=i[0];for(let p=1;p<c;p+=1)i[p]/=i[0]}const l=32,h=new Float32Array(l),u=new Float32Array(l),d=e.createBuffer(s.numberOfChannels,s.length,s.sampleRate),f=s.numberOfChannels;for(let p=0;p<f;p+=1){const m=s.getChannelData(p),g=d.getChannelData(p);h.fill(0),u.fill(0),ia(i,o,r,c,a,h,u,0,l,m,g)}return d},$u=(s,e,t,n,i)=>(r,o)=>{const c=new WeakMap;let a=null;const l=async(h,u)=>{let d=null,f=e(h);const p=ke(f,u);if(u.createIIRFilter===void 0?d=s(u,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):p||(f=u.createIIRFilter(o,r)),c.set(u,d===null?f:d),d!==null){if(a===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(h.context.destination.channelCount,h.context.length,u.sampleRate);a=(async()=>{await n(h,g,g.destination);const b=await i(g);return Ou(b,u,r,o)})()}const m=await a;return d.buffer=m,d.start(0),d}return await n(h,u,f),f};return{render(h,u){const d=c.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}},Eu=(s,e,t,n,i,r)=>o=>(c,a)=>{const l=s.get(c);if(l===void 0){if(!o&&r(c)){const h=n(c),{outputs:u}=t(c);for(const d of u)if(zn(d)){const f=n(d[0]);e(h,f,d[1],d[2])}else{const f=i(d[0]);h.disconnect(f,d[1])}}s.set(c,a)}else s.set(c,l+a)},Iu=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},Du=(s,e)=>t=>s.has(t)||e(t),Ru=(s,e)=>t=>s.has(t)||e(t),Vu=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},Fu=s=>e=>s!==null&&e instanceof s,Lu=s=>e=>s!==null&&typeof s.AudioNode=="function"&&e instanceof s.AudioNode,ju=s=>e=>s!==null&&typeof s.AudioParam=="function"&&e instanceof s.AudioParam,qu=(s,e)=>t=>s(t)||e(t),Wu=s=>e=>s!==null&&e instanceof s,zu=s=>s!==null&&s.isSecureContext,Bu=(s,e,t,n)=>class extends s{constructor(r,o){const c=t(r),a=e(c,o);if(n(c))throw TypeError();super(r,!0,a,null),this._nativeMediaElementAudioSourceNode=a}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},Uu={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Hu=(s,e,t,n)=>class extends s{constructor(r,o){const c=t(r);if(n(c))throw new TypeError;const a={...Uu,...o},l=e(c,a);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},Gu=(s,e,t,n)=>class extends s{constructor(r,o){const c=t(r),a=e(c,o);if(n(c))throw new TypeError;super(r,!0,a,null),this._nativeMediaStreamAudioSourceNode=a}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Xu=(s,e,t)=>class extends s{constructor(i,r){const o=t(i),c=e(o,r);super(i,!0,c,null)}},Yu=(s,e,t,n,i,r)=>class extends t{constructor(c,a){super(c),this._nativeContext=c,Ds.set(this,c),n(c)&&i.set(c,new Set),this._destination=new s(this,a),this._listener=e(this,c),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(c){const a=typeof c=="function"?r(this,c):null;this._nativeContext.onstatechange=a;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===a?c:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Dn=s=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=s.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},Ku=(s,e)=>(t,n,i)=>{const r=new Set;return t.connect=(o=>(c,a=0,l=0)=>{const h=r.size===0;if(e(c))return o.call(t,c,a,l),s(r,[c,a,l],u=>u[0]===c&&u[1]===a&&u[2]===l,!0),h&&n(),c;o.call(t,c,a),s(r,[c,a],u=>u[0]===c&&u[1]===a,!0),h&&n()})(t.connect),t.disconnect=(o=>(c,a,l)=>{const h=r.size>0;if(c===void 0)o.apply(t),r.clear();else if(typeof c=="number"){o.call(t,c);for(const d of r)d[1]===c&&r.delete(d)}else{e(c)?o.call(t,c,a,l):o.call(t,c,a);for(const d of r)d[0]===c&&(a===void 0||d[1]===a)&&(l===void 0||d[2]===l)&&r.delete(d)}const u=r.size===0;h&&u&&i()})(t.disconnect),t},re=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t]&&(s[t]=n)},ge=(s,e)=>{re(s,e,"channelCount"),re(s,e,"channelCountMode"),re(s,e,"channelInterpretation")},Qr=s=>typeof s.getFloatTimeDomainData=="function",Zu=s=>{s.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);s.getByteTimeDomainData(t);const n=Math.max(t.length,s.fftSize);for(let i=0;i<n;i+=1)e[i]=(t[i]-128)*.0078125;return e}},Qu=(s,e)=>(t,n)=>{const i=t.createAnalyser();if(ge(i,n),!(n.maxDecibels>n.minDecibels))throw e();return re(i,n,"fftSize"),re(i,n,"maxDecibels"),re(i,n,"minDecibels"),re(i,n,"smoothingTimeConstant"),s(Qr,()=>Qr(i))||Zu(i),i},Ju=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,le=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t].value&&(s[t].value=n)},ed=s=>{s.start=(e=>{let t=!1;return(n=0,i=0,r)=>{if(t)throw _e();e.call(s,n,i,r),t=!0}})(s.start)},Li=s=>{s.start=(e=>(t=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(s,t,n,i)})(s.start)},ji=s=>{s.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(s,t)})(s.stop)},td=(s,e,t,n,i,r,o,c,a,l,h)=>(u,d)=>{const f=u.createBufferSource();return ge(f,d),le(f,d,"playbackRate"),re(f,d,"buffer"),re(f,d,"loop"),re(f,d,"loopEnd"),re(f,d,"loopStart"),e(t,()=>t(u))||ed(f),e(n,()=>n(u))||a(f),e(i,()=>i(u))||l(f,u),e(r,()=>r(u))||Li(f),e(o,()=>o(u))||h(f,u),e(c,()=>c(u))||ji(f),s(u,f),f},nd=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,sd=(s,e)=>(t,n,i)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=s(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",c=>()=>c.call(o),c=>a=>{c.call(o,a);try{r.channelCount=a}catch(l){if(a>r.maxChannelCount)throw l}}),e(o,"channelCountMode",c=>()=>c.call(o),c=>a=>{c.call(o,a),r.channelCountMode=a}),e(o,"channelInterpretation",c=>()=>c.call(o),c=>a=>{c.call(o,a),r.channelInterpretation=a}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},id=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,rd=s=>{const{port1:e}=new MessageChannel;try{e.postMessage(s)}finally{e.close()}},od=(s,e,t,n,i)=>(r,o,c,a,l,h)=>{if(c!==null)try{const u=new c(r,a,h),d=new Map;let f=null;if(Object.defineProperties(u,{channelCount:{get:()=>h.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>f,set:p=>{typeof f=="function"&&u.removeEventListener("processorerror",f),f=typeof p=="function"?p:null,typeof f=="function"&&u.addEventListener("processorerror",f)}}}),u.addEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=typeof m[1]=="function"?m[1]:typeof m[1]=="object"&&m[1]!==null&&typeof m[1].handleEvent=="function"?m[1].handleEvent:null;if(g!==null){const b=d.get(m[1]);b!==void 0?m[1]=b:(m[1]=w=>{w.type==="error"?(Object.defineProperties(w,{type:{value:"processorerror"}}),g(w)):g(new ErrorEvent(m[0],{...w}))},d.set(g,m[1]))}}return p.call(u,"error",m[1],m[2]),p.call(u,...m)})(u.addEventListener),u.removeEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=d.get(m[1]);g!==void 0&&(d.delete(m[1]),m[1]=g)}return p.call(u,"error",m[1],m[2]),p.call(u,m[0],m[1],m[2])})(u.removeEventListener),h.numberOfOutputs!==0){const p=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return u.connect(p).connect(r.destination),i(u,()=>p.disconnect(),()=>p.connect(r.destination))}return u}catch(u){throw u.code===11?n():u}if(l===void 0)throw n();return rd(h),e(r,o,l,h)},ra=(s,e)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*e))))),ad=s=>new Promise((e,t)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),t(r)},i.postMessage(s)}),cd=async(s,e)=>{const t=await ad(e);return new s(t)},ld=(s,e,t,n)=>{let i=bi.get(s);i===void 0&&(i=new WeakMap,bi.set(s,i));const r=cd(t,n);return i.set(e,r),r},hd=(s,e,t,n,i,r,o,c,a,l,h,u,d)=>(f,p,m,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw a();const b=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(b.some(O=>O<1))throw a();if(b.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw a();const w=g.channelCount*g.numberOfInputs,k=b.reduce((O,F)=>O+F,0),C=m.parameterDescriptors===void 0?0:m.parameterDescriptors.length;if(w+C>6||k>6)throw a();const v=new MessageChannel,y=[],x=[];for(let O=0;O<g.numberOfInputs;O+=1)y.push(o(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),x.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const _=[];if(m.parameterDescriptors!==void 0)for(const{defaultValue:O,maxValue:F,minValue:me,name:oe}of m.parameterDescriptors){const Y=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[oe]!==void 0?g.parameterData[oe]:O===void 0?0:O});Object.defineProperties(Y.offset,{defaultValue:{get:()=>O===void 0?0:O},maxValue:{get:()=>F===void 0?Ce:F},minValue:{get:()=>me===void 0?Pe:me}}),_.push(Y)}const S=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,w+C)}),A=ra(p,f.sampleRate),M=c(f,A,w+C,Math.max(1,k)),T=i(f,{channelCount:Math.max(1,k),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,k)}),P=[];for(let O=0;O<g.numberOfOutputs;O+=1)P.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:b[O]}));for(let O=0;O<g.numberOfInputs;O+=1){y[O].connect(x[O]);for(let F=0;F<g.channelCount;F+=1)x[O].connect(S,F,O*g.channelCount+F)}const N=new na(m.parameterDescriptors===void 0?[]:m.parameterDescriptors.map(({name:O},F)=>{const me=_[F];return me.connect(S,0,w+F),me.start(0),[O,me.offset]}));S.connect(M);let D=g.channelInterpretation,E=null;const I=g.numberOfOutputs===0?[M]:P,U={get bufferSize(){return A},get channelCount(){return g.channelCount},set channelCount(O){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(O){throw t()},get channelInterpretation(){return D},set channelInterpretation(O){for(const F of y)F.channelInterpretation=O;D=O},get context(){return M.context},get inputs(){return y},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return E},set onprocessorerror(O){typeof E=="function"&&U.removeEventListener("processorerror",E),E=typeof O=="function"?O:null,typeof E=="function"&&U.addEventListener("processorerror",E)},get parameters(){return N},get port(){return v.port2},addEventListener(...O){return M.addEventListener(O[0],O[1],O[2])},connect:s.bind(null,I),disconnect:l.bind(null,I),dispatchEvent(...O){return M.dispatchEvent(O[0])},removeEventListener(...O){return M.removeEventListener(O[0],O[1],O[2])}},V=new Map;v.port1.addEventListener=(O=>(...F)=>{if(F[0]==="message"){const me=typeof F[1]=="function"?F[1]:typeof F[1]=="object"&&F[1]!==null&&typeof F[1].handleEvent=="function"?F[1].handleEvent:null;if(me!==null){const oe=V.get(F[1]);oe!==void 0?F[1]=oe:(F[1]=Y=>{h(f.currentTime,f.sampleRate,()=>me(Y))},V.set(me,F[1]))}}return O.call(v.port1,F[0],F[1],F[2])})(v.port1.addEventListener),v.port1.removeEventListener=(O=>(...F)=>{if(F[0]==="message"){const me=V.get(F[1]);me!==void 0&&(V.delete(F[1]),F[1]=me)}return O.call(v.port1,F[0],F[1],F[2])})(v.port1.removeEventListener);let j=null;Object.defineProperty(v.port1,"onmessage",{get:()=>j,set:O=>{typeof j=="function"&&v.port1.removeEventListener("message",j),j=typeof O=="function"?O:null,typeof j=="function"&&(v.port1.addEventListener("message",j),v.port1.start())}}),m.prototype.port=v.port1;let L=null;ld(f,U,m,g).then(O=>L=O);const Ee=Ms(g.numberOfInputs,g.channelCount),Ie=Ms(g.numberOfOutputs,b),H=m.parameterDescriptors===void 0?[]:m.parameterDescriptors.reduce((O,{name:F})=>({...O,[F]:new Float32Array(128)}),{});let ie=!0;const Te=()=>{g.numberOfOutputs>0&&M.disconnect(T);for(let O=0,F=0;O<g.numberOfOutputs;O+=1){const me=P[O];for(let oe=0;oe<b[O];oe+=1)T.disconnect(me,F+oe,oe);F+=b[O]}},R=new Map;M.onaudioprocess=({inputBuffer:O,outputBuffer:F})=>{if(L!==null){const me=u(U);for(let oe=0;oe<A;oe+=128){for(let Y=0;Y<g.numberOfInputs;Y+=1)for(let ce=0;ce<g.channelCount;ce+=1)Cs(O,Ee[Y],ce,ce,oe);m.parameterDescriptors!==void 0&&m.parameterDescriptors.forEach(({name:Y},ce)=>{Cs(O,H,Y,w+ce,oe)});for(let Y=0;Y<g.numberOfInputs;Y+=1)for(let ce=0;ce<b[Y];ce+=1)Ie[Y][ce].byteLength===0&&(Ie[Y][ce]=new Float32Array(128));try{const Y=Ee.map((Ve,pt)=>{if(me[pt].size>0)return R.set(pt,A/128),Ve;const ni=R.get(pt);return ni===void 0?[]:(Ve.every(ec=>ec.every(tc=>tc===0))&&(ni===1?R.delete(pt):R.set(pt,ni-1)),Ve)});ie=h(f.currentTime+oe/f.sampleRate,f.sampleRate,()=>L.process(Y,Ie,H));for(let Ve=0,pt=0;Ve<g.numberOfOutputs;Ve+=1){for(let Tn=0;Tn<b[Ve];Tn+=1)sa(F,Ie[Ve],Tn,pt+Tn,oe);pt+=b[Ve]}}catch(Y){ie=!1,U.dispatchEvent(new ErrorEvent("processorerror",{colno:Y.colno,filename:Y.filename,lineno:Y.lineno,message:Y.message}))}if(!ie){for(let Y=0;Y<g.numberOfInputs;Y+=1){y[Y].disconnect(x[Y]);for(let ce=0;ce<g.channelCount;ce+=1)x[oe].disconnect(S,ce,Y*g.channelCount+ce)}if(m.parameterDescriptors!==void 0){const Y=m.parameterDescriptors.length;for(let ce=0;ce<Y;ce+=1){const Ve=_[ce];Ve.disconnect(S,0,w+ce),Ve.stop()}}S.disconnect(M),M.onaudioprocess=null,Mt?Te():Gt();break}}}};let Mt=!1;const St=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Ht=()=>M.connect(St).connect(f.destination),Gt=()=>{M.disconnect(St),St.disconnect()},Qa=()=>{if(ie){Gt(),g.numberOfOutputs>0&&M.connect(T);for(let O=0,F=0;O<g.numberOfOutputs;O+=1){const me=P[O];for(let oe=0;oe<b[O];oe+=1)T.connect(me,F+oe,oe);F+=b[O]}}Mt=!0},Ja=()=>{ie&&(Ht(),Te()),Mt=!1};return Ht(),d(U,Qa,Ja)},oa=(s,e)=>{const t=s.createBiquadFilter();return ge(t,e),le(t,e,"Q"),le(t,e,"detune"),le(t,e,"frequency"),le(t,e,"gain"),re(t,e,"type"),t},ud=(s,e)=>(t,n)=>{const i=t.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&e(t,i),ge(i,n),i},dd=s=>{const e=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw _e()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw _e()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw _e()}})},Bn=(s,e)=>{const t=s.createChannelSplitter(e.numberOfOutputs);return ge(t,e),dd(t),t},pd=(s,e,t,n,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const c=r.createConstantSource();return ge(c,o),le(c,o,"offset"),e(n,()=>n(r))||Li(c),e(i,()=>i(r))||ji(c),s(r,c),c},bn=(s,e)=>(s.connect=e.connect.bind(e),s.disconnect=e.disconnect.bind(e),s),fd=(s,e,t,n)=>(i,{offset:r,...o})=>{const c=i.createBuffer(1,2,44100),a=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),h=c.getChannelData(0);h[0]=1,h[1]=1,a.buffer=c,a.loop=!0;const u={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(p){l.channelCount=p},get channelCountMode(){return l.channelCountMode},set channelCountMode(p){l.channelCountMode=p},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(p){l.channelInterpretation=p},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return a.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return a.onended},set onended(p){a.onended=p},addEventListener(...p){return a.addEventListener(p[0],p[1],p[2])},dispatchEvent(...p){return a.dispatchEvent(p[0])},removeEventListener(...p){return a.removeEventListener(p[0],p[1],p[2])},start(p=0){a.start.call(a,p)},stop(p=0){a.stop.call(a,p)}},d=()=>a.connect(l),f=()=>a.disconnect(l);return s(i,a),n(bn(u,l),d,f)},md=(s,e)=>(t,n)=>{const i=t.createConvolver();if(ge(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),re(i,n,"buffer"),n.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw s();return r.call(i,o)}),n.channelCountMode==="max"))throw s();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw s();return r.call(i,o)}),i},aa=(s,e)=>{const t=s.createDelay(e.maxDelayTime);return ge(t,e),le(t,e,"delayTime"),t},gd=s=>(e,t)=>{const n=e.createDynamicsCompressor();if(ge(n,t),t.channelCount>2||t.channelCountMode==="max")throw s();return le(n,t,"attack"),le(n,t,"knee"),le(n,t,"ratio"),le(n,t,"release"),le(n,t,"threshold"),n},$e=(s,e)=>{const t=s.createGain();return ge(t,e),le(t,e,"gain"),t},vd=s=>(e,t,n)=>{if(e.createIIRFilter===void 0)return s(e,t,n);const i=e.createIIRFilter(n.feedforward,n.feedback);return ge(i,n),i};function bd(s,e){const t=e[0]*e[0]+e[1]*e[1];return[(s[0]*e[0]+s[1]*e[1])/t,(s[1]*e[0]-s[0]*e[1])/t]}function _d(s,e){return[s[0]*e[0]-s[1]*e[1],s[0]*e[1]+s[1]*e[0]]}function Jr(s,e){let t=[0,0];for(let n=s.length-1;n>=0;n-=1)t=_d(t,e),t[0]+=s[n];return t}const yd=(s,e,t,n)=>(i,r,{channelCount:o,channelCountMode:c,channelInterpretation:a,feedback:l,feedforward:h})=>{const u=ra(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=h instanceof Float64Array?h:new Float64Array(h),p=d.length,m=f.length,g=Math.min(p,m);if(p===0||p>20)throw n();if(d[0]===0)throw e();if(m===0||m>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let _=0;_<m;_+=1)f[_]/=d[0];for(let _=1;_<p;_+=1)d[_]/=d[0]}const b=t(i,u,o,o);b.channelCount=o,b.channelCountMode=c,b.channelInterpretation=a;const w=32,k=[],C=[],v=[];for(let _=0;_<o;_+=1){k.push(0);const S=new Float32Array(w),A=new Float32Array(w);S.fill(0),A.fill(0),C.push(S),v.push(A)}b.onaudioprocess=_=>{const S=_.inputBuffer,A=_.outputBuffer,M=S.numberOfChannels;for(let T=0;T<M;T+=1){const P=S.getChannelData(T),N=A.getChannelData(T);k[T]=ia(d,p,f,m,g,C[T],v[T],k[T],w,P,N)}};const y=i.sampleRate/2;return bn({get bufferSize(){return u},get channelCount(){return b.channelCount},set channelCount(_){b.channelCount=_},get channelCountMode(){return b.channelCountMode},set channelCountMode(_){b.channelCountMode=_},get channelInterpretation(){return b.channelInterpretation},set channelInterpretation(_){b.channelInterpretation=_},get context(){return b.context},get inputs(){return[b]},get numberOfInputs(){return b.numberOfInputs},get numberOfOutputs(){return b.numberOfOutputs},addEventListener(..._){return b.addEventListener(_[0],_[1],_[2])},dispatchEvent(..._){return b.dispatchEvent(_[0])},getFrequencyResponse(_,S,A){if(_.length!==S.length||S.length!==A.length)throw s();const M=_.length;for(let T=0;T<M;T+=1){const P=-Math.PI*(_[T]/y),N=[Math.cos(P),Math.sin(P)],D=Jr(f,N),E=Jr(d,N),I=bd(D,E);S[T]=Math.sqrt(I[0]*I[0]+I[1]*I[1]),A[T]=Math.atan2(I[1],I[0])}},removeEventListener(..._){return b.removeEventListener(_[0],_[1],_[2])}},b)},xd=(s,e)=>s.createMediaElementSource(e.mediaElement),wd=(s,e)=>{const t=s.createMediaStreamDestination();return ge(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},kd=(s,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=t.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:e}),i},Td=(s,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=t.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(e(t))throw new TypeError;return r},Cd=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,Md=(s,e,t,n,i,r)=>(o,c)=>{const a=o.createOscillator();return ge(a,c),le(a,c,"detune"),le(a,c,"frequency"),c.periodicWave!==void 0?a.setPeriodicWave(c.periodicWave):re(a,c,"type"),e(t,()=>t(o))||Li(a),e(n,()=>n(o))||r(a,o),e(i,()=>i(o))||ji(a),s(o,a),a},Sd=s=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?s(e,t):(ge(n,t),le(n,t,"orientationX"),le(n,t,"orientationY"),le(n,t,"orientationZ"),le(n,t,"positionX"),le(n,t,"positionY"),le(n,t,"positionZ"),re(n,t,"coneInnerAngle"),re(n,t,"coneOuterAngle"),re(n,t,"coneOuterGain"),re(n,t,"distanceModel"),re(n,t,"maxDistance"),re(n,t,"panningModel"),re(n,t,"refDistance"),re(n,t,"rolloffFactor"),n)},Ad=(s,e,t,n,i,r,o,c,a,l)=>(h,{coneInnerAngle:u,coneOuterAngle:d,coneOuterGain:f,distanceModel:p,maxDistance:m,orientationX:g,orientationY:b,orientationZ:w,panningModel:k,positionX:C,positionY:v,positionZ:y,refDistance:x,rolloffFactor:_,...S})=>{const A=h.createPanner();if(S.channelCount>2||S.channelCountMode==="max")throw o();ge(A,S);const M={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},T=t(h,{...M,channelInterpretation:"speakers",numberOfInputs:6}),P=n(h,{...S,gain:1}),N=n(h,{...M,gain:1}),D=n(h,{...M,gain:0}),E=n(h,{...M,gain:0}),I=n(h,{...M,gain:0}),U=n(h,{...M,gain:0}),V=n(h,{...M,gain:0}),j=i(h,256,6,1),L=r(h,{...M,curve:new Float32Array([1,1]),oversample:"none"});let Z=[g,b,w],Ee=[C,v,y];const Ie=new Float32Array(1);j.onaudioprocess=({inputBuffer:R})=>{const Mt=[a(R,Ie,0),a(R,Ie,1),a(R,Ie,2)];Mt.some((Ht,Gt)=>Ht!==Z[Gt])&&(A.setOrientation(...Mt),Z=Mt);const St=[a(R,Ie,3),a(R,Ie,4),a(R,Ie,5)];St.some((Ht,Gt)=>Ht!==Ee[Gt])&&(A.setPosition(...St),Ee=St)},Object.defineProperty(D.gain,"defaultValue",{get:()=>0}),Object.defineProperty(E.gain,"defaultValue",{get:()=>0}),Object.defineProperty(I.gain,"defaultValue",{get:()=>0}),Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0});const H={get bufferSize(){},get channelCount(){return A.channelCount},set channelCount(R){if(R>2)throw o();P.channelCount=R,A.channelCount=R},get channelCountMode(){return A.channelCountMode},set channelCountMode(R){if(R==="max")throw o();P.channelCountMode=R,A.channelCountMode=R},get channelInterpretation(){return A.channelInterpretation},set channelInterpretation(R){P.channelInterpretation=R,A.channelInterpretation=R},get coneInnerAngle(){return A.coneInnerAngle},set coneInnerAngle(R){A.coneInnerAngle=R},get coneOuterAngle(){return A.coneOuterAngle},set coneOuterAngle(R){A.coneOuterAngle=R},get coneOuterGain(){return A.coneOuterGain},set coneOuterGain(R){if(R<0||R>1)throw e();A.coneOuterGain=R},get context(){return A.context},get distanceModel(){return A.distanceModel},set distanceModel(R){A.distanceModel=R},get inputs(){return[P]},get maxDistance(){return A.maxDistance},set maxDistance(R){if(R<0)throw new RangeError;A.maxDistance=R},get numberOfInputs(){return A.numberOfInputs},get numberOfOutputs(){return A.numberOfOutputs},get orientationX(){return N.gain},get orientationY(){return D.gain},get orientationZ(){return E.gain},get panningModel(){return A.panningModel},set panningModel(R){A.panningModel=R},get positionX(){return I.gain},get positionY(){return U.gain},get positionZ(){return V.gain},get refDistance(){return A.refDistance},set refDistance(R){if(R<0)throw new RangeError;A.refDistance=R},get rolloffFactor(){return A.rolloffFactor},set rolloffFactor(R){if(R<0)throw new RangeError;A.rolloffFactor=R},addEventListener(...R){return P.addEventListener(R[0],R[1],R[2])},dispatchEvent(...R){return P.dispatchEvent(R[0])},removeEventListener(...R){return P.removeEventListener(R[0],R[1],R[2])}};u!==H.coneInnerAngle&&(H.coneInnerAngle=u),d!==H.coneOuterAngle&&(H.coneOuterAngle=d),f!==H.coneOuterGain&&(H.coneOuterGain=f),p!==H.distanceModel&&(H.distanceModel=p),m!==H.maxDistance&&(H.maxDistance=m),g!==H.orientationX.value&&(H.orientationX.value=g),b!==H.orientationY.value&&(H.orientationY.value=b),w!==H.orientationZ.value&&(H.orientationZ.value=w),k!==H.panningModel&&(H.panningModel=k),C!==H.positionX.value&&(H.positionX.value=C),v!==H.positionY.value&&(H.positionY.value=v),y!==H.positionZ.value&&(H.positionZ.value=y),x!==H.refDistance&&(H.refDistance=x),_!==H.rolloffFactor&&(H.rolloffFactor=_),(Z[0]!==1||Z[1]!==0||Z[2]!==0)&&A.setOrientation(...Z),(Ee[0]!==0||Ee[1]!==0||Ee[2]!==0)&&A.setPosition(...Ee);const ie=()=>{P.connect(A),s(P,L,0,0),L.connect(N).connect(T,0,0),L.connect(D).connect(T,0,1),L.connect(E).connect(T,0,2),L.connect(I).connect(T,0,3),L.connect(U).connect(T,0,4),L.connect(V).connect(T,0,5),T.connect(j).connect(h.destination)},Te=()=>{P.disconnect(A),c(P,L,0,0),L.disconnect(N),N.disconnect(T),L.disconnect(D),D.disconnect(T),L.disconnect(E),E.disconnect(T),L.disconnect(I),I.disconnect(T),L.disconnect(U),U.disconnect(T),L.disconnect(V),V.disconnect(T),T.disconnect(j),j.disconnect(h.destination)};return l(bn(H,A),ie,Te)},Pd=s=>(e,{disableNormalization:t,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=i instanceof Float32Array?i:new Float32Array(i),c=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(n).length<2)throw s();return c},Un=(s,e,t,n)=>s.createScriptProcessor(e,t,n),Nd=(s,e)=>(t,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return s(t,n);const r=t.createStereoPanner();return ge(r,n),le(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},Od=(s,e,t,n,i,r)=>{const c=new Float32Array([1,1]),a=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...l,oversample:"none"},u=(p,m,g,b)=>{const w=new Float32Array(16385),k=new Float32Array(16385);for(let S=0;S<16385;S+=1){const A=S/16384*a;w[S]=Math.cos(A),k[S]=Math.sin(A)}const C=t(p,{...l,gain:0}),v=n(p,{...h,curve:w}),y=n(p,{...h,curve:c}),x=t(p,{...l,gain:0}),_=n(p,{...h,curve:k});return{connectGraph(){m.connect(C),m.connect(y.inputs===void 0?y:y.inputs[0]),m.connect(x),y.connect(g),g.connect(v.inputs===void 0?v:v.inputs[0]),g.connect(_.inputs===void 0?_:_.inputs[0]),v.connect(C.gain),_.connect(x.gain),C.connect(b,0,0),x.connect(b,0,1)},disconnectGraph(){m.disconnect(C),m.disconnect(y.inputs===void 0?y:y.inputs[0]),m.disconnect(x),y.disconnect(g),g.disconnect(v.inputs===void 0?v:v.inputs[0]),g.disconnect(_.inputs===void 0?_:_.inputs[0]),v.disconnect(C.gain),_.disconnect(x.gain),C.disconnect(b,0,0),x.disconnect(b,0,1)}}},d=(p,m,g,b)=>{const w=new Float32Array(16385),k=new Float32Array(16385),C=new Float32Array(16385),v=new Float32Array(16385),y=Math.floor(16385/2);for(let I=0;I<16385;I+=1)if(I>y){const U=(I-y)/(16384-y)*a;w[I]=Math.cos(U),k[I]=Math.sin(U),C[I]=0,v[I]=1}else{const U=I/(16384-y)*a;w[I]=1,k[I]=0,C[I]=Math.cos(U),v[I]=Math.sin(U)}const x=e(p,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),_=t(p,{...l,gain:0}),S=n(p,{...h,curve:w}),A=t(p,{...l,gain:0}),M=n(p,{...h,curve:k}),T=n(p,{...h,curve:c}),P=t(p,{...l,gain:0}),N=n(p,{...h,curve:C}),D=t(p,{...l,gain:0}),E=n(p,{...h,curve:v});return{connectGraph(){m.connect(x),m.connect(T.inputs===void 0?T:T.inputs[0]),x.connect(_,0),x.connect(A,0),x.connect(P,1),x.connect(D,1),T.connect(g),g.connect(S.inputs===void 0?S:S.inputs[0]),g.connect(M.inputs===void 0?M:M.inputs[0]),g.connect(N.inputs===void 0?N:N.inputs[0]),g.connect(E.inputs===void 0?E:E.inputs[0]),S.connect(_.gain),M.connect(A.gain),N.connect(P.gain),E.connect(D.gain),_.connect(b,0,0),P.connect(b,0,0),A.connect(b,0,1),D.connect(b,0,1)},disconnectGraph(){m.disconnect(x),m.disconnect(T.inputs===void 0?T:T.inputs[0]),x.disconnect(_,0),x.disconnect(A,0),x.disconnect(P,1),x.disconnect(D,1),T.disconnect(g),g.disconnect(S.inputs===void 0?S:S.inputs[0]),g.disconnect(M.inputs===void 0?M:M.inputs[0]),g.disconnect(N.inputs===void 0?N:N.inputs[0]),g.disconnect(E.inputs===void 0?E:E.inputs[0]),S.disconnect(_.gain),M.disconnect(A.gain),N.disconnect(P.gain),E.disconnect(D.gain),_.disconnect(b,0,0),P.disconnect(b,0,0),A.disconnect(b,0,1),D.disconnect(b,0,1)}}},f=(p,m,g,b,w)=>{if(m===1)return u(p,g,b,w);if(m===2)return d(p,g,b,w);throw i()};return(p,{channelCount:m,channelCountMode:g,pan:b,...w})=>{if(g==="max")throw i();const k=s(p,{...w,channelCount:1,channelCountMode:g,numberOfInputs:2}),C=t(p,{...w,channelCount:m,channelCountMode:g,gain:1}),v=t(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:b});let{connectGraph:y,disconnectGraph:x}=f(p,m,C,v,k);Object.defineProperty(v.gain,"defaultValue",{get:()=>0}),Object.defineProperty(v.gain,"maxValue",{get:()=>1}),Object.defineProperty(v.gain,"minValue",{get:()=>-1});const _={get bufferSize(){},get channelCount(){return C.channelCount},set channelCount(T){C.channelCount!==T&&(S&&x(),{connectGraph:y,disconnectGraph:x}=f(p,T,C,v,k),S&&y()),C.channelCount=T},get channelCountMode(){return C.channelCountMode},set channelCountMode(T){if(T==="clamped-max"||T==="max")throw i();C.channelCountMode=T},get channelInterpretation(){return C.channelInterpretation},set channelInterpretation(T){C.channelInterpretation=T},get context(){return C.context},get inputs(){return[C]},get numberOfInputs(){return C.numberOfInputs},get numberOfOutputs(){return C.numberOfOutputs},get pan(){return v.gain},addEventListener(...T){return C.addEventListener(T[0],T[1],T[2])},dispatchEvent(...T){return C.dispatchEvent(T[0])},removeEventListener(...T){return C.removeEventListener(T[0],T[1],T[2])}};let S=!1;const A=()=>{y(),S=!0},M=()=>{x(),S=!1};return r(bn(_,k),A,M)}},$d=(s,e,t,n,i,r,o)=>(c,a)=>{const l=c.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&c.createGain().gain.automationRate===void 0)return t(c,a);ge(l,a);const h=a.curve===null||a.curve instanceof Float32Array?a.curve:new Float32Array(a.curve);if(h!==null&&h.length<2)throw e();re(l,{curve:h},"curve"),re(l,a,"oversample");let u=null,d=!1;return o(l,"curve",m=>()=>m.call(l),m=>g=>(m.call(l,g),d&&(n(g)&&u===null?u=s(c,l):!n(g)&&u!==null&&(u(),u=null)),g)),i(l,()=>{d=!0,n(l.curve)&&(u=s(c,l))},()=>{d=!1,u!==null&&(u(),u=null)})},Ed=(s,e,t,n,i)=>(r,{curve:o,oversample:c,...a})=>{const l=r.createWaveShaper(),h=r.createWaveShaper();ge(l,a),ge(h,a);const u=t(r,{...a,gain:1}),d=t(r,{...a,gain:-1}),f=t(r,{...a,gain:1}),p=t(r,{...a,gain:-1});let m=null,g=!1,b=null;const w={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(v){u.channelCount=v,d.channelCount=v,l.channelCount=v,f.channelCount=v,h.channelCount=v,p.channelCount=v},get channelCountMode(){return l.channelCountMode},set channelCountMode(v){u.channelCountMode=v,d.channelCountMode=v,l.channelCountMode=v,f.channelCountMode=v,h.channelCountMode=v,p.channelCountMode=v},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(v){u.channelInterpretation=v,d.channelInterpretation=v,l.channelInterpretation=v,f.channelInterpretation=v,h.channelInterpretation=v,p.channelInterpretation=v},get context(){return l.context},get curve(){return b},set curve(v){if(v!==null&&v.length<2)throw e();if(v===null)l.curve=v,h.curve=v;else{const y=v.length,x=new Float32Array(y+2-y%2),_=new Float32Array(y+2-y%2);x[0]=v[0],_[0]=-v[y-1];const S=Math.ceil((y+1)/2),A=(y+1)/2-1;for(let M=1;M<S;M+=1){const T=M/S*A,P=Math.floor(T),N=Math.ceil(T);x[M]=P===N?v[P]:(1-(T-P))*v[P]+(1-(N-T))*v[N],_[M]=P===N?-v[y-1-P]:-((1-(T-P))*v[y-1-P])-(1-(N-T))*v[y-1-N]}x[S]=y%2===1?v[S-1]:(v[S-2]+v[S-1])/2,l.curve=x,h.curve=_}b=v,g&&(n(b)&&m===null?m=s(r,u):m!==null&&(m(),m=null))},get inputs(){return[u]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(v){l.oversample=v,h.oversample=v},addEventListener(...v){return u.addEventListener(v[0],v[1],v[2])},dispatchEvent(...v){return u.dispatchEvent(v[0])},removeEventListener(...v){return u.removeEventListener(v[0],v[1],v[2])}};o!==null&&(w.curve=o instanceof Float32Array?o:new Float32Array(o)),c!==w.oversample&&(w.oversample=c);const k=()=>{u.connect(l).connect(f),u.connect(d).connect(h).connect(p).connect(f),g=!0,n(b)&&(m=s(r,u))},C=()=>{u.disconnect(l),l.disconnect(f),u.disconnect(d),d.disconnect(h),h.disconnect(p),p.disconnect(f),g=!1,m!==null&&(m(),m=null)};return i(bn(w,f),k,C)},Ae=()=>new DOMException("","NotSupportedError"),Id={numberOfChannels:1},Dd=(s,e,t,n,i)=>class extends s{constructor(o,c,a){let l;if(typeof o=="number"&&c!==void 0&&a!==void 0)l={length:c,numberOfChannels:o,sampleRate:a};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:h,numberOfChannels:u,sampleRate:d}={...Id,...l},f=n(u,h,d);e(Dn,()=>Dn(f))||f.addEventListener("statechange",(()=>{let p=0;const m=g=>{this._state==="running"&&(p>0?(f.removeEventListener("statechange",m),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):p+=1)};return m})()),super(f,u),this._length=h,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Qo(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},Rd={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},Vd=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...Rd,...l},d=t(h,u),f=r(h),p=f?n():null,m=a.sampleRate/2;super(a,!1,d,p),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,m,-m),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=p,this._oscillatorNodeRenderer!==null&&u.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=u.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(a){const l=typeof a=="function"?o(this,a):null;this._nativeOscillatorNode.onended=l;const h=this._nativeOscillatorNode.onended;this._onended=h!==null&&h===l?a:h}get type(){return this._nativeOscillatorNode.type}set type(a){this._nativeOscillatorNode.type=a,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(a){this._nativeOscillatorNode.setPeriodicWave(a),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=a)}start(a=0){if(this._nativeOscillatorNode.start(a),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=a),this.context.state!=="closed"){cn(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),at(this)&&qn(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(a=0){this._nativeOscillatorNode.stop(a),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=a)}},Fd=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,c=null,a=null;const l=async(h,u)=>{let d=t(h);const f=ke(d,u);if(!f){const p={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(u,p),c!==null&&d.start(c),a!==null&&d.stop(a)}return r.set(u,d),f?(await s(u,h.detune,d.detune),await s(u,h.frequency,d.frequency)):(await n(u,h.detune,d.detune),await n(u,h.frequency,d.frequency)),await i(h,u,d),d};return{set periodicWave(h){o=h},set start(h){c=h},set stop(h){a=h},render(h,u){const d=r.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}},Ld={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},jd=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...Ld,...l},d=t(h,u),f=r(h),p=f?n():null;super(a,!1,d,p),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,Ce,Pe),this._orientationY=e(this,f,d.orientationY,Ce,Pe),this._orientationZ=e(this,f,d.orientationZ,Ce,Pe),this._positionX=e(this,f,d.positionX,Ce,Pe),this._positionY=e(this,f,d.positionY,Ce,Pe),this._positionZ=e(this,f,d.positionZ,Ce,Pe),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(a){this._nativePannerNode.coneInnerAngle=a}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(a){this._nativePannerNode.coneOuterAngle=a}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(a){this._nativePannerNode.coneOuterGain=a}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(a){this._nativePannerNode.distanceModel=a}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(a){this._nativePannerNode.maxDistance=a}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(a){this._nativePannerNode.panningModel=a}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(a){this._nativePannerNode.refDistance=a}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(a){this._nativePannerNode.rolloffFactor=a}},qd=(s,e,t,n,i,r,o,c,a,l)=>()=>{const h=new WeakMap;let u=null;const d=async(f,p)=>{let m=null,g=r(f);const b={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},w={...b,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},k=ke(g,p);if("bufferSize"in g)m=n(p,{...b,gain:1});else if(!k){const C={...w,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(p,C)}if(h.set(p,m===null?g:m),m!==null){if(u===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const M=new o(6,f.context.length,p.sampleRate),T=e(M,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});T.connect(M.destination),u=(async()=>{const P=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(N,D)=>{const E=t(M,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:D===0?1:0});return await c(M,N,E.offset),E}));for(let N=0;N<6;N+=1)P[N].connect(T,0,N),P[N].start(0);return l(M)})()}const C=await u,v=n(p,{...b,gain:1});await a(f,p,v);const y=[];for(let M=0;M<C.numberOfChannels;M+=1)y.push(C.getChannelData(M));let x=[y[0][0],y[1][0],y[2][0]],_=[y[3][0],y[4][0],y[5][0]],S=n(p,{...b,gain:1}),A=i(p,{...w,orientationX:x[0],orientationY:x[1],orientationZ:x[2],positionX:_[0],positionY:_[1],positionZ:_[2]});v.connect(S).connect(A.inputs[0]),A.connect(m);for(let M=128;M<C.length;M+=128){const T=[y[0][M],y[1][M],y[2][M]],P=[y[3][M],y[4][M],y[5][M]];if(T.some((N,D)=>N!==x[D])||P.some((N,D)=>N!==_[D])){x=T,_=P;const N=M/p.sampleRate;S.gain.setValueAtTime(0,N),S=n(p,{...b,gain:0}),A=i(p,{...w,orientationX:x[0],orientationY:x[1],orientationZ:x[2],positionX:_[0],positionY:_[1],positionZ:_[2]}),S.gain.setValueAtTime(1,N),v.connect(S).connect(A.inputs[0]),A.connect(m)}}return m}return k?(await s(p,f.orientationX,g.orientationX),await s(p,f.orientationY,g.orientationY),await s(p,f.orientationZ,g.orientationZ),await s(p,f.positionX,g.positionX),await s(p,f.positionY,g.positionY),await s(p,f.positionZ,g.positionZ)):(await c(p,f.orientationX,g.orientationX),await c(p,f.orientationY,g.orientationY),await c(p,f.orientationZ,g.orientationZ),await c(p,f.positionX,g.positionX),await c(p,f.positionY,g.positionY),await c(p,f.positionZ,g.positionZ)),vn(g)?await a(f,p,g.inputs[0]):await a(f,p,g),g};return{render(f,p){const m=h.get(p);return m!==void 0?Promise.resolve(m):d(f,p)}}},Wd={disableNormalization:!1},zd=(s,e,t,n)=>class ca{constructor(r,o){const c=e(r),a=n({...Wd,...o}),l=s(c,a);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===ca.prototype||t.has(r)}},Bd=(s,e)=>(t,n,i)=>(s(n).replay(i),e(n,t,i)),Ud=(s,e,t)=>async(n,i,r)=>{const o=s(n);await Promise.all(o.activeInputs.map((c,a)=>Array.from(c).map(async([l,h])=>{const d=await e(l).render(l,i),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&d.connect(r,h,a)})).reduce((c,a)=>[...c,...a],[]))},Hd=(s,e,t)=>async(n,i,r)=>{const o=e(n);await Promise.all(Array.from(o.activeInputs).map(async([c,a])=>{const h=await s(c).render(c,i);t(c)||h.connect(r,a)}))},Gd=(s,e,t,n)=>i=>s(Dn,()=>Dn(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=c=>{o.disconnect(),r(c.renderedBuffer)},o.connect(i.destination),i.startRendering()}),Xd=s=>(e,t)=>{s.set(e,t)},Yd=s=>(e,t)=>s.set(e,t),Kd=(s,e,t,n,i,r,o,c)=>(a,l)=>t(a).render(a,l).then(()=>Promise.all(Array.from(n(l)).map(h=>t(h).render(h,l)))).then(()=>i(l)).then(h=>(typeof h.copyFromChannel!="function"?(o(h),Ri(h)):e(r,()=>r(h))||c(h),s.add(h),h)),Zd={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},Qd=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=i(c),h={...Zd,...a},u=t(l,h),d=r(l),f=d?n():null;super(c,!1,u,f),this._pan=e(this,d,u.pan)}get pan(){return this._pan}},Jd=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(c,a)=>{let l=t(c);const h=ke(l,a);if(!h){const u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(a,u)}return r.set(a,l),h?await s(a,c.pan,l.pan):await n(a,c.pan,l.pan),vn(l)?await i(c,a,l.inputs[0]):await i(c,a,l),l};return{render(c,a){const l=r.get(a);return l!==void 0?Promise.resolve(l):o(c,a)}}},ep=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},tp=(s,e)=>async()=>{if(s===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await n.audioWorklet.addModule(i);const c=new s(n,"a",{numberOfOutputs:0}),a=n.createOscillator();c.port.onmessage=()=>r=!0,c.onprocessorerror=()=>o=!0,a.connect(c),a.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},np=(s,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{n.disconnect(),i(t.currentTime!==0)},t.startRendering()})},sp=()=>new DOMException("","UnknownError"),ip={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},rp=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...ip,...l},d=t(h,u),p=r(h)?n():null;super(a,!0,d,p),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(a){if(a===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(a.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=a}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(a){this._nativeWaveShaperNode.oversample=a}},op=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,curve:c.curve,oversample:c.oversample};c=s(o,l)}return n.set(o,c),vn(c)?await t(r,o,c.inputs[0]):await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},ap=()=>typeof window>"u"?null:window,cp=(s,e)=>t=>{t.copyFromChannel=(n,i,r=0)=>{const o=s(r),c=s(i);if(c>=t.numberOfChannels)throw e();const a=t.length,l=t.getChannelData(c),h=n.length;for(let u=o<0?-o:0;u+o<a&&u<h;u+=1)n[u]=l[u+o]},t.copyToChannel=(n,i,r=0)=>{const o=s(r),c=s(i);if(c>=t.numberOfChannels)throw e();const a=t.length,l=t.getChannelData(c),h=n.length;for(let u=o<0?-o:0;u+o<a&&u<h;u+=1)l[u+o]=n[u]}},lp=s=>e=>{e.copyFromChannel=(t=>(n,i,r=0)=>{const o=s(r),c=s(i);if(o<e.length)return t.call(e,n,c,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,i,r=0)=>{const o=s(r),c=s(i);if(o<e.length)return t.call(e,n,c,o)})(e.copyToChannel)},hp=s=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),s(e,"buffer",i=>()=>{const r=i.call(e);return r===n?null:r},i=>r=>i.call(e,r===null?n:r))},up=(s,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=t.createBufferSource();e(n,()=>{const c=n.numberOfInputs;for(let a=0;a<c;a+=1)i.connect(n,0,a)},()=>i.disconnect(n))},la=(s,e,t)=>s.copyFromChannel===void 0?s.getChannelData(t)[0]:(s.copyFromChannel(e,t),e[0]),ha=s=>{if(s===null)return!1;const e=s.length;return e%2!==0?s[Math.floor(e/2)]!==0:s[e/2-1]+s[e/2]!==0},Hn=(s,e,t,n)=>{let i=s;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(s,e,{get:t(r),set:n(o)})},dp=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),pp=s=>({...s,channelCount:s.numberOfOutputs}),fp=s=>{const{imag:e,real:t}=s;return e===void 0?t===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(t,()=>0),real:t}:t===void 0?{...s,imag:e,real:Array.from(e,()=>0)}:{...s,imag:e,real:t}},ua=(s,e,t)=>{try{s.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;ua(s,e,t+1e-7)}},mp=s=>{const e=s.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},gp=s=>{const e=s.createBufferSource(),t=s.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},vp=s=>{const e=s.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},qi=s=>{const e=s.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},da=s=>{const e=s.createBuffer(1,1,44100),t=s.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},Wi=s=>{const e=s.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},bp=s=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(s)}finally{e.close(),t.close()}},_p=s=>{s.start=(e=>(t=0,n=0,i)=>{const r=s.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/s.context.sampleRate?e.call(s,t,0,0):e.call(s,t,o,i)})(s.start)},pa=(s,e)=>{const t=e.createGain();s.connect(t);const n=(i=>()=>{i.call(s,t),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),bn(s,t),s.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(s,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(s,o),r=!0}})(s.stop)},_n=(s,e)=>t=>{const n={value:s};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(s,t):e.handleEvent.call(s,t)},yp=jl(zt),xp=Hl(zt),wp=iu(Rs),fa=new WeakMap,kp=wu(fa),Ze=Ih(new Map,new WeakMap),et=ap(),ma=Qu(Ze,st),zi=xu(Me),xe=Ud(Me,zi,Vt),Tp=Zl(ma,se,xe),te=Cu(Ds),ht=Cd(et),ee=Wu(ht),ga=new WeakMap,va=fu(_n),Gn=nd(et),Bi=Fu(Gn),Ui=Lu(et),ba=ju(et),Rn=id(et),ue=wh(ql(Uo),Ul(yp,xp,ws,wp,ks,Me,kp,jn,se,zt,at,Vt,ds),Ze,Eu(gi,ks,Me,se,In,at),st,Vs,Ae,eu(ws,gi,Me,se,In,te,at,ee),au(ga,Me,Xe),va,te,Bi,Ui,ba,ee,Rn),Cp=Kl(ue,Tp,st,ma,te,ee),Hi=new WeakSet,eo=Ju(et),_a=Gh(new Uint32Array(1)),Gi=cp(_a,st),Xi=lp(_a),ya=Jl(Hi,Ze,Ae,eo,ht,ep(eo),Gi,Xi),Fs=Gl($e),xa=Hd(zi,Wn,Vt),it=qh(xa),yn=td(Fs,Ze,mp,gp,vp,qi,da,Wi,_p,hp(Hn),pa),rt=Bd(ku(Wn),xa),Mp=nh(it,yn,se,rt,xe),Qe=kh(Wl(Ho),ga,Di,Th,Il,Dl,Rl,Vl,Fl,pi,Wo,Gn,ua),Sp=th(ue,Mp,Qe,_e,yn,te,ee,_n),Ap=uh(ue,dh,st,_e,sd($e,Hn),te,ee,xe),Pp=Eh(it,oa,se,rt,xe),Bt=Yd(fa),Np=$h(ue,Qe,Pp,Vs,oa,te,ee,Bt),xt=Ku(zt,Ui),Op=up(_e,xt),wt=ud(Gn,Op),$p=Vh(wt,se,xe),Ep=Rh(ue,$p,wt,te,ee),Ip=jh(Bn,se,xe),Dp=Lh(ue,Ip,Bn,te,ee,pp),Rp=fd(Fs,yn,$e,xt),xn=pd(Fs,Ze,Rp,qi,Wi),Vp=Hh(it,xn,se,rt,xe),Fp=Uh(ue,Qe,Vp,xn,te,ee,_n),wa=md(Ae,Hn),Lp=Kh(wa,se,xe),jp=Yh(ue,Lp,wa,te,ee,Bt),qp=su(it,aa,se,rt,xe),Wp=nu(ue,Qe,qp,aa,te,ee,Bt),ka=gd(Ae),zp=uu(it,ka,se,rt,xe),Bp=hu(ue,Qe,zp,ka,Ae,te,ee,Bt),Up=_u(it,$e,se,rt,xe),Hp=bu(ue,Qe,Up,$e,te,ee),Gp=yd(Vs,_e,Un,Ae),Ls=Gd(Ze,$e,Un,np($e,ht)),Xp=$u(yn,se,ht,xe,Ls),Yp=vd(Gp),Kp=Nu(ue,Yp,Xp,te,ee,Bt),Zp=ph(Qe,wt,xn,Un,Ae,la,ee,Hn),Ta=new WeakMap,Qp=Yu(Ap,Zp,va,ee,Ta,_n),Ca=Md(Fs,Ze,qi,da,Wi,pa),Jp=Fd(it,Ca,se,rt,xe),ef=Vd(ue,Qe,Ca,Jp,te,ee,_n),Ma=zh(yn),tf=Ed(Ma,_e,$e,ha,xt),js=$d(Ma,_e,tf,ha,xt,Gn,Hn),nf=Ad(ws,_e,wt,$e,Un,js,Ae,ks,la,xt),Sa=Sd(nf),sf=qd(it,wt,xn,$e,Sa,se,ht,rt,xe,Ls),rf=jd(ue,Qe,Sa,sf,te,ee,Bt),of=Pd(st),af=zd(of,te,new WeakSet,fp),cf=Od(wt,Bn,$e,js,Ae,xt),Aa=Nd(cf,Ae),lf=Jd(it,Aa,se,rt,xe),hf=Qd(ue,Qe,Aa,lf,te,ee),uf=op(js,se,xe),df=rp(ue,_e,js,uf,te,ee,Bt),Pa=zu(et),Yi=mu(et),Na=new WeakMap,pf=Mu(Na,ht),ff=Pa?Bl(Ze,Ae,pu(et),Yi,gu(Ll),te,pf,ee,Rn,new WeakMap,new WeakMap,tp(Rn,ht),et):void 0,mf=qu(Bi,ee),gf=Jh(Hi,Ze,Qh,du,new WeakSet,te,mf,ys,Dn,Gi,Xi),Oa=Nh(ff,Cp,ya,Sp,Np,Ep,Dp,Fp,jp,gf,Wp,Bp,Hp,Kp,Qp,ef,rf,af,hf,df),vf=Bu(ue,xd,te,ee),bf=Hu(ue,wd,te,ee),_f=Gu(ue,kd,te,ee),yf=Td(_e,ee),xf=Xu(ue,yf,te),wf=hh(Oa,_e,Ae,sp,vf,bf,_f,xf,Gn),Ki=Su(Ta),kf=Xl(Ki),$a=Wh(st),Tf=ru(Ki),Ea=cu(st),Ia=new WeakMap,Cf=yu(Ia,Xe),Mf=hd($a,st,_e,wt,Bn,xn,$e,Un,Ae,Ea,Yi,Cf,xt),Sf=od(_e,Mf,$e,Ae,xt),Af=Ph(it,$a,yn,wt,Bn,xn,$e,Tf,Ea,Yi,se,Rn,ht,rt,xe,Ls),Pf=Tu(Na),Nf=Xd(Ia),to=Pa?Mh(kf,ue,Qe,Af,Sf,Me,Pf,te,ee,Rn,dp,Nf,bp,_n):void 0,Of=Zh(Ae,ht),$f=Kd(Hi,Ze,zi,Ki,Ls,ys,Gi,Xi),Ef=Dd(Oa,Ze,_e,Of,$f),If=Iu(Ds,Bi),Df=Du(Ii,Ui),Rf=Ru(Di,ba),Vf=Vu(Ds,ee);function qe(s){return s===void 0}function G(s){return s!==void 0}function Ff(s){return typeof s=="function"}function Ft(s){return typeof s=="number"}function $t(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function Lf(s){return typeof s=="boolean"}function Ge(s){return Array.isArray(s)}function lt(s){return typeof s=="string"}function os(s){return lt(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function z(s,e){if(!s)throw new Error(e)}function _t(s,e,t=1/0){if(!(e<=s&&s<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${s}`)}function Da(s){!s.isOffline&&s.state!=="running"&&Zi('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let Ra=!1,no=!1;function so(s){Ra=s}function jf(s){qe(s)&&Ra&&!no&&(no=!0,Zi("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let Va=console;function qf(...s){Va.log(...s)}function Zi(...s){Va.warn(...s)}function Wf(s){return new wf(s)}function zf(s,e,t){return new Ef(s,e,t)}const De=typeof self=="object"?self:null,Bf=De&&(De.hasOwnProperty("AudioContext")||De.hasOwnProperty("webkitAudioContext"));function Uf(s,e,t){return z(G(to),"AudioWorkletNode only works in a secure context (https or localhost)"),new(s instanceof De?.BaseAudioContext?De?.AudioWorkletNode:to)(s,e,t)}function Je(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var c=s.length-1;c>=0;c--)(o=s[c])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function fe(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function c(h){try{l(n.next(h))}catch(u){o(u)}}function a(h){try{l(n.throw(h))}catch(u){o(u)}}function l(h){h.done?r(h.value):i(h.value).then(c,a)}l((n=n.apply(s,e||[])).next())})}class Hf{constructor(e,t,n,i){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(i||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type==="worker"&&((t=this._worker)===null||t===void 0||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function Lt(s){return Rf(s)}function vt(s){return Df(s)}function ps(s){return Vf(s)}function Yt(s){return If(s)}function Gf(s){return s instanceof ya}function Xf(s,e){return s==="value"||Lt(e)||vt(e)||Gf(e)}function tn(s,...e){if(!e.length)return s;const t=e.shift();if($t(s)&&$t(t))for(const n in t)Xf(n,t[n])?s[n]=t[n]:$t(t[n])?(s[n]||Object.assign(s,{[n]:{}}),tn(s[n],t[n])):Object.assign(s,{[n]:t[n]});return tn(s,...e)}function Yf(s,e){return s.length===e.length&&s.every((t,n)=>e[n]===t)}function W(s,e,t=[],n){const i={},r=Array.from(e);if($t(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(c=>Reflect.has(s,c))||(tn(i,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&$t(r[0]))tn(i,r[0]);else for(let o=0;o<t.length;o++)G(r[o])&&(i[t[o]]=r[o]);return tn(s,i)}function Kf(s){return s.constructor.getDefaults()}function nn(s,e){return qe(s)?e:s}function io(s,e){return e.forEach(t=>{Reflect.has(s,t)&&delete s[t]}),s}class ut{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||De&&this.toString()===De.TONE_DEBUG_CLASS)&&qf(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}ut.version=qo;const Qi=1e-6;function ln(s,e){return s>e+Qi}function xi(s,e){return ln(s,e)||Ue(s,e)}function Ss(s,e){return s+Qi<e}function Ue(s,e){return Math.abs(s-e)<Qi}function Zf(s,e,t){return Math.max(Math.min(s,t),e)}class We extends ut{constructor(){super(),this.name="Timeline",this._timeline=[];const e=W(We.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(z(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];z(xi(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Ue(this._timeline[t].time,e)){for(let n=t;n>=0&&Ue(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&xi(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][t]<=e)return i-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const c=this._timeline[o],a=this._timeline[o+1];if(Ue(c[t],e)){for(let l=o;l<this._timeline.length;l++){const h=this._timeline[l];if(Ue(h[t],e))o=l;else break}return o}else{if(Ss(c[t],e)&&ln(a[t],e))return o;ln(c[t],e)?r=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let i=this._search(e),r=this._search(t);return i!==-1&&r!==-1?(this._timeline[i].time!==e&&(i+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&Ue(this._timeline[n].time,e)){let i=n;for(let r=n;r>=0&&Ue(this._timeline[r].time,e);r--)i=r;this._iterate(r=>{t(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Fa=[];function qs(s){Fa.push(s)}function Qf(s){Fa.forEach(e=>e(s))}const La=[];function Ws(s){La.push(s)}function Jf(s){La.forEach(e=>e(s))}class Xn extends ut{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(i=>{qe(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(t)}),this}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(i=>{if(qe(this._events)&&(this._events={}),this._events.hasOwnProperty(i))if(qe(t))this._events[i]=[];else{const r=this._events[i];for(let o=r.length-1;o>=0;o--)r[o]===t&&r.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Xn.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class ja extends Xn{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Yn extends ja{constructor(){var e,t;super(),this.name="Context",this._constants=new Map,this._timeouts=new We,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=W(Yn.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((e=arguments[0])===null||e===void 0?void 0:e.latencyHint)||""):(this._context=Wf({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new Hf(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((t=arguments[0])===null||t===void 0)&&t.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(Qf(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return z(Yt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return z(Yt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return z(Yt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){z(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){z(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){z(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){z(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return Uf(this.rawContext,e,t)}addAudioWorkletModule(e){return fe(this,void 0,void 0,function*(){z(G(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(e)),yield this._workletPromise})}workletsAreReady(){return fe(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Yt(this._context)?this._context.resume():Promise.resolve()}close(){return fe(this,void 0,void 0,function*(){Yt(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&Jf(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=t,i.loop=!0,i.start(0),this._constants.set(e,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){const e=this.now();this._timeouts.forEachBefore(e,t=>{t.callback(),this._timeouts.remove(t)})}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),i()},id:n,time:r+t})};return i(),n}}class em extends ja{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return fe(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function ae(s,e){Ge(e)?e.forEach(t=>ae(s,t)):Object.defineProperty(s,e,{enumerable:!0,writable:!1})}function qa(s,e){Ge(e)?e.forEach(t=>qa(s,t)):Object.defineProperty(s,e,{writable:!0})}const J=()=>{};class ne extends ut{constructor(){super(),this.name="ToneAudioBuffer",this.onload=J;const e=W(ne.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,lt(e.url)?this.load(e.url).catch(e.onerror):e.url&&this.set(e.url)}static getDefaults(){return{onerror:J,onload:J,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Le().sampleRate}set(e){return e instanceof ne?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return fe(this,void 0,void 0,function*(){const t=ne.load(e).then(n=>{this.set(n),this.onload(this)});ne.downloads.push(t);try{yield t}finally{const n=ne.downloads.indexOf(t);ne.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=Ge(e)&&e[0].length>0,n=t?e.length:1,i=t?e[0].length:e.length,r=Le(),o=r.createBuffer(n,i,r.sampleRate),c=!t&&n===1?[e]:e;for(let a=0;a<n;a++)o.copyToChannel(c[a],a);return this._buffer=o,this}toMono(e){if(Ft(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let o=0;o<r.length;o++)t[o]+=r[o]}t=t.map(i=>i/n),this.fromArray(t)}return this}toArray(e){if(Ft(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){z(this.loaded,"Buffer is not loaded");const n=Math.floor(e*this.sampleRate),i=Math.floor(t*this.sampleRate);z(n<i,"The start time must be less than the end time");const r=i-n,o=Le().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let c=0;c<this.numberOfChannels;c++)o.copyToChannel(this.getChannelData(c).subarray(n,i),c);return new ne(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new ne().fromArray(e)}static fromUrl(e){return fe(this,void 0,void 0,function*(){return yield new ne().load(e)})}static load(e){return fe(this,void 0,void 0,function*(){const t=ne.baseUrl===""||ne.baseUrl.endsWith("/")?ne.baseUrl:ne.baseUrl+"/",n=yield fetch(t+e);if(!n.ok)throw new Error(`could not load url: ${e}`);const i=yield n.arrayBuffer();return yield Le().decodeAudioData(i)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return fe(this,void 0,void 0,function*(){for(yield Promise.resolve();ne.downloads.length;)yield ne.downloads[0]})}}ne.baseUrl="";ne.downloads=[];class Ji extends Yn{constructor(){super({clockSource:"offline",context:ps(arguments[0])?arguments[0]:zf(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:ps(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=ps(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return fe(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(){return fe(this,arguments,void 0,function*(e=!0){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new ne(t)})}close(){return Promise.resolve()}}const Wa=new em;let Nt=Wa;function Le(){return Nt===Wa&&Bf&&tm(new Yn),Nt}function tm(s,e=!1){e&&Nt.dispose(),Yt(s)?Nt=new Yn(s):ps(s)?Nt=new Ji(s):Nt=s}function nm(){return Nt.resume()}if(De&&!De.TONE_SILENCE_LOGGING){const e=` * Tone.js v${qo} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function sm(s){return Math.pow(10,s/20)}function im(s){return 20*(Math.log(s)/Math.LN10)}function za(s){return Math.pow(2,s/12)}let zs=440;function rm(){return zs}function om(s){zs=s}function wi(s){return Math.round(Ba(s))}function Ba(s){return 69+12*Math.log2(s/zs)}function am(s){return zs*Math.pow(2,(s-69)/12)}class er extends ut{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),i=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let i=0;return e&&e!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof er&&this.fromType(this._val),qe(this._val))return this._noArg();if(lt(this._val)&&qe(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if($t(this._val)){let e=0;for(const t in this._val)if(G(this._val[t])){const n=this._val[t],i=new this.constructor(this.context,t).valueOf()*n;e+=i}return e}if(G(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return lt(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class He extends er{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new He(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),i=this.valueOf(),c=Math.round(i/n)*n-i;return i+c*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],i=new He(this.context,t[0]).toSeconds();return t.forEach(r=>{const o=new He(this.context,r).toSeconds();Math.abs(o-e)<Math.abs(i-e)&&(n=r,i=o)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let i=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,t,i].join(":")}toTicks(){const e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return wi(this.toFrequency())}_now(){return this.context.now()}}class je extends He{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return rm()}static set A4(e){om(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:je.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(e,t){const i=cm[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?i:je.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let i=1;return e&&e!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(e){return new je(this.context,this.valueOf()*za(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return wi(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/je.A4);let n=Math.round(12*t)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),lm[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return am(e)}static ftom(e){return wi(e)}}const cm={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},lm=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Pn extends He{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Oe extends ut{constructor(){super();const e=W(Oe.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:Le()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return jf(e),new He(this.context,e).toSeconds()}toFrequency(e){return new je(this.context,e).toFrequency()}toTicks(e){return new Pn(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{qe(e[n])&&delete t[n]}),t}get(){const e=Kf(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];G(n)&&G(n.value)&&G(n.setValueAtTime)?e[t]=n.value:n instanceof Oe?e[t]=n._getPartialProperties(e[t]):Ge(n)||Ft(n)||lt(n)||Lf(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&G(this[t])&&(this[t]&&G(this[t].value)&&G(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof Oe?this[t].set(e[t]):this[t]=e[t])}),this}}class tr extends We{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return _t(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===e)return r}}}class Q extends Oe{constructor(){const e=W(Q.getDefaults(),arguments,["param","units","convert"]);for(super(e),this.name="Param",this.overridden=!1,this._minOutput=1e-7,z(G(e.param)&&(Lt(e.param)||e.param instanceof Q),"param must be an AudioParam");!Lt(e.param);)e.param=e.param._param;this._swappable=G(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new We(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,G(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Oe.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return G(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return G(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return G(this.maxValue)&&G(this.minValue)&&_t(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?sm(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?im(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),i=this._fromType(e);return z(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),i=this._events.get(t);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(i.time);let c;o===null?c=this._initialValue:c=o.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,c,i.value,i.constant,t))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=i.value;if(i.type==="setTargetAtTime"){const c=this._events.getBefore(i.time);c===null?o=this._initialValue:o=c.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,o,n.time,n.value,t):r=this._exponentialInterpolate(i.time,o,n.time,n.value,t)}else r=i.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),i=this.toSeconds(t);return z(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Ue(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(t);return z(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,i),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const i=this._fromType(e);z(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(i),z(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(e,t,n,i=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*i;this.setValueAtTime(this._toType(r),t);const o=n/(e.length-1);for(let c=1;c<e.length;c++){const a=this._fromType(e[c])*i;this.linearRampToValueAtTime(this._toType(a),t+c*o)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return z(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));z(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const i=this._events.get(t),r=this._events.getAfter(t);return i&&Ue(i.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:t+2,o=(r-t)/10;for(let c=t;c<r;c+=o)e.linearRampToValueAtTime(this.getValueAtTime(c),c)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?e.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?e.setTargetAtTime(i.value,i.time,i.constant):e[i.type](i.value,i.time)}),this}setParam(e){z(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,i,r){return n+(t-n)*Math.exp(-(r-e)/i)}_linearInterpolate(e,t,n,i,r){return t+(i-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,i,r){return t*Math.pow(i/t,(r-e)/(n-e))}}class B extends Oe{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return G(this.input)?Lt(this.input)||this.input instanceof Q?1:this.input.numberOfInputs:0}get numberOfOutputs(){return G(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return G(e)&&(e instanceof B||vt(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();z(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return wn(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Zi("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return hm(this,e,t,n),this}chain(...e){return ki(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),G(this.input)&&(this.input instanceof B?this.input.dispose():vt(this.input)&&this.input.disconnect()),G(this.output)&&(this.output instanceof B?this.output.dispose():vt(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function ki(...s){const e=s.shift();s.reduce((t,n)=>(t instanceof B?t.connect(n):vt(t)&&wn(t,n),n),e)}function wn(s,e,t=0,n=0){for(z(G(s),"Cannot connect from undefined node"),z(G(e),"Cannot connect to undefined node"),(e instanceof B||vt(e))&&z(e.numberOfInputs>0,"Cannot connect to node with no inputs"),z(s.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof B||e instanceof Q;)G(e.input)&&(e=e.input);for(;s instanceof B;)G(s.output)&&(s=s.output);Lt(e)?s.connect(e,t):s.connect(e,t,n)}function hm(s,e,t=0,n=0){if(G(e))for(;e instanceof B;)e=e.input;for(;!vt(s);)G(s.output)&&(s=s.output);Lt(e)?s.disconnect(e,t):vt(e)?s.disconnect(e,t,n):s.disconnect()}class we extends B{constructor(){const e=W(we.getDefaults(),arguments,["gain","units"]);super(e),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new Q({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),ae(this,"gain")}static getDefaults(){return Object.assign(B.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class hn extends B{constructor(e){super(e),this.onended=J,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new we({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(B.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:J})}_startGain(e,t=1){z(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){z(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==J&&(this.onended(this),this.onended=J,!this.context.isOffline)){const e=()=>this.dispose();typeof requestIdleCallback<"u"?requestIdleCallback(e):setTimeout(e,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),z(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=J,this}}class nr extends hn{constructor(){const e=W(nr.getDefaults(),arguments,["offset"]);super(e),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),wn(this._source,this._gainNode),this.offset=new Q({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(hn.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class ye extends B{constructor(){const e=W(ye.getDefaults(),arguments,["value","units"]);super(e),this.name="Signal",this.override=!0,this.output=this._constantSource=new nr({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(B.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return sr(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,i){return this._param.setValueCurveAtTime(e,t,n,i),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function sr(s,e,t,n){(e instanceof Q||Lt(e)||e instanceof ye&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof ye&&(e.overridden=!0)),wn(s,e,t,n)}class ir extends Q{constructor(){const e=W(ir.getDefaults(),arguments,["value"]);super(e),this.name="TickParam",this._events=new We(1/0),this._multiplier=1,this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Q.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const i=this._fromType(e),r=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let c=0;c<=o;c++){const a=n*c+t,l=this._exponentialApproach(r.time,r.value,i,n,a);this.linearRampToValueAtTime(this._toType(l),a)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),i=this._events.get(t),r=Math.round(Math.max((t-i.time)*10,1)),o=(t-i.time)/r;for(let c=0;c<=r;c++){const a=o*c+i.time,l=this._exponentialInterpolate(i.time,i.value,t,n,a);this.linearRampToValueAtTime(this._toType(l),a)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(qe(e.ticks)){const o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let i=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+i)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(t);return this.getTimeOfTick(i+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const i=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-t.time),c=Math.sqrt(Math.pow(i,2)-2*o*(t.ticks-e)),a=(-i+c)/o,l=(-i-c)/o;return(a>0?a:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),i=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class rr extends ye{constructor(){const e=W(rr.getDefaults(),arguments,["value"]);super(e),this.name="TickSignal",this.input=this._param=new ir({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(ye.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class or extends Oe{constructor(){const e=W(or.getDefaults(),arguments,["frequency"]);super(e),this.name="TickSource",this._state=new tr,this._tickOffset=new We,this._ticksAtTime=new We,this._secondsAtTime=new We,this.frequency=new rr({context:this.context,units:e.units,value:e.frequency}),ae(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Oe.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),G(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),i=this._ticksAtTime.get(t),r={state:"paused",time:t};this._state.add(r);let o=i||n,c=i?i.ticks:0,a=null;return this._state.forEachBetween(o.time,t+this.sampleTime,l=>{let h=o.time;const u=this._tickOffset.get(l.time);u&&u.time>=o.time&&(c=u.ticks,h=u.time),o.state==="started"&&l.state!=="started"&&(c+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(h),l.time!==r.time&&(a={state:l.state,time:l.time,ticks:c})),o=l}),this._state.remove(r),a&&this._ticksAtTime.add(a),c}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);const i=this._secondsAtTime.get(e);let r=i||t,o=i?i.seconds:0,c=null;return this._state.forEachBetween(r.time,e+this.sampleTime,a=>{let l=r.time;const h=this._tickOffset.get(a.time);h&&h.time>=r.time&&(o=h.seconds,l=h.time),r.state==="started"&&a.state!=="started"&&(o+=a.time-l,a.time!==n.time&&(c={state:a.state,time:a.time,seconds:o})),r=a}),this._state.remove(n),c&&this._secondsAtTime.add(c),o}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),i=this._state.get(t),r=Math.max(n.time,i.time),o=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let i=this._state.get(e);this._state.forEachBetween(e,t,o=>{i&&i.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(i.time,e),o.time-this.sampleTime,n),i=o});let r=null;if(i&&i.state==="started"){const o=Math.max(i.time,e),c=this.frequency.getTicksAtTime(o),a=this.frequency.getTicksAtTime(i.time),l=c-a;let h=Math.ceil(l)-l;h=Ue(h,1)?0:h;let u=this.frequency.getTimeOfTick(c+h);for(;u<t;){try{n(u,Math.round(this.getTicksAtTime(u)))}catch(d){r=d;break}u+=this.frequency.getDurationOfTicks(1,u)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class Bs extends Oe{constructor(){const e=W(Bs.getDefaults(),arguments,["callback","frequency"]);super(e),this.name="Clock",this.callback=J,this._lastUpdate=0,this._state=new tr("stopped"),this._boundLoop=this._loop.bind(this),this.callback=e.callback,this._tickSource=new or({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,ae(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Oe.getDefaults(),{callback:J,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){Da(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,i)=>{this.callback(n,i)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Xn.mixin(Bs);class kn extends B{constructor(){const e=W(kn.getDefaults(),arguments,["volume"]);super(e),this.name="Volume",this.input=this.output=new we({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,ae(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class ar extends B{constructor(){const e=W(ar.getDefaults(),arguments);super(e),this.name="Destination",this.input=new kn({context:this.context}),this.output=new we({context:this.context}),this.volume=this.input.volume,ki(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),ki(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}qs(s=>{s.destination=new ar({context:s})});Ws(s=>{s.destination.dispose()});class um extends B{constructor(){super(...arguments),this.name="Listener",this.positionX=new Q({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Q({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Q({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Q({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Q({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Q({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Q({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Q({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Q({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(B.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}qs(s=>{s.listener=new um({context:s})});Ws(s=>{s.listener.dispose()});class cr extends ut{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=W(cr.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:J,onload:J,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return z(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=J,i=J){return lt(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(e.toString(),new ne(this.baseUrl+t,n,i))):this._buffers.set(e.toString(),new ne(t,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class Zt extends Pn{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class dm extends Oe{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new We,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;this._events.forEachBefore(e+this.anticipation,t=>{e-t.time<=this.expiration&&t.callback(),this._events.remove(t)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}qs(s=>{s.draw=new dm({context:s})});Ws(s=>{s.draw.dispose()});class pm extends ut{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){z(G(e.time),"Events must have a time property"),z(G(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new fm(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,i=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,i=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,i=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),i=e.right;i&&(e.right=i.left,i.left=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),i=e.left;i&&(e.left=i.right,i.right=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let i=1;i<t.length;i++)t[i].low>n.low&&(n=t[i]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class fm{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class mm extends ut{constructor(e){super(),this.name="TimelineValue",this._timeline=new We({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class un extends B{constructor(){super(W(un.getDefaults(),arguments,["context"]))}connect(e,t=0,n=0){return sr(this,e,t,n),this}}class Kn extends un{constructor(){const e=W(Kn.getDefaults(),arguments,["mapping","length"]);super(e),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,Ge(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):Ff(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(ye.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let i=0,r=t;i<r;i++){const o=i/(r-1)*2-1;n[i]=e(o,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));z(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class lr extends un{constructor(){const e=W(lr.getDefaults(),arguments,["value"]);super(e),this.name="Pow",this._exponentScaler=this.input=this.output=new Kn({context:this.context,mapping:this._expFunc(e.value),length:8192}),this._exponent=e.value}static getDefaults(){return Object.assign(un.getDefaults(),{value:1})}_expFunc(e){return t=>Math.pow(Math.abs(t),e)}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class yt{constructor(e,t){this.id=yt._eventId++,this._remainderTime=0;const n=Object.assign(yt.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:J,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){const t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}yt._eventId=0;class hr extends yt{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(hr.getDefaults(),t);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},yt.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return Ss(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new Zt(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){Ss(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Zt(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const t=this.transport.getTicksAtTime(e);ln(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class Us extends Oe{constructor(){const e=W(Us.getDefaults(),arguments);super(e),this.name="Transport",this._loop=new mm(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new We,this._repeatedEvents=new pm,this._syncedSignals=[],this._swingAmount=0,this._ppq=e.ppq,this._clock=new Bs({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),ae(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(Oe.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;e+=new Zt(this.context,this._swingTicks*2/3).toSeconds()*i}so(!0),this._timeline.forEachAtTime(t,n=>n.invoke(e)),so(!1)}schedule(e,t){const n=new yt(this,{callback:e,time:new Pn(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,i=1/0){const r=new hr(this,{callback:e,duration:new He(this.context,i).toTicks(),interval:new He(this.context,t).toTicks(),time:new Pn(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new yt(this,{callback:e,once:!0,time:new Pn(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new Zt(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return G(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){Ge(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new He(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new He(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new Zt(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new Zt(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+i;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),i=e-n%e;return this._clock.nextTickTime(i,t)}}syncSignal(e,t){const n=this.now();let i=this.bpm,r=1/(60/i.getValueAtTime(n)/this.PPQ),o=[];if(e.units==="time"){const a=.015625/r,l=new we(a),h=new lr(-1),u=new we(a);i.chain(l,h,u),i=u,r=1/r,o=[l,h,u]}t||(e.getValueAtTime(n)!==0?t=e.getValueAtTime(n)/r:t=0);const c=new we(t);return i.connect(c),c.connect(e._param),o.push(c),this._syncedSignals.push({initial:e.value,nodes:o,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(i=>i.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),qa(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Xn.mixin(Us);qs(s=>{s.transport=new Us({context:s})});Ws(s=>{s.transport.dispose()});class Re extends B{constructor(e){super(e),this.input=void 0,this._state=new tr("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=J,this._syncedStop=J,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new kn({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,ae(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,onstop:J,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let i=qe(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")z(ln(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,t,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(nn(t,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(c=>{this._start(c,t,n)},i);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else Da(this.context),this._start(i,t,n);return this}stop(e){let t=qe(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||G(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(ln(t,0)){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const i=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(e,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=J,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class Hs extends hn{constructor(){const e=W(Hs.getDefaults(),arguments,["url","onload"]);super(e),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,wn(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Q({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new ne(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(hn.getDefaults(),{url:new ne,loop:!1,loopEnd:0,loopStart:0,onload:J,onerror:J,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,i=1){z(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,i),this.loop?t=nn(t,this.loopStart):t=nn(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){const c=this.toSeconds(this.loopEnd)||this.buffer.duration,a=this.toSeconds(this.loopStart),l=c-a;xi(o,c)&&(o=(o-a)%l+a),Ue(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Ss(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),G(n)){let c=this.toSeconds(n);c=Math.max(c,0),this.stop(r+c)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}function Ut(s,e){return fe(this,void 0,void 0,function*(){const t=e/s.context.sampleRate,n=new Ji(1,t,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class ur extends hn{constructor(){const e=W(ur.getDefaults(),arguments,["frequency","type"]);super(e),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],wn(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new Q({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new Q({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),ae(this,["frequency","detune"])}static getDefaults(){return Object.assign(hn.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class pe extends Re{constructor(){const e=W(pe.getDefaults(),arguments,["frequency","type"]);super(e),this.name="Oscillator",this._oscillator=null,this.frequency=new ye({context:this.context,units:"frequency",value:e.frequency}),ae(this,"frequency"),this.detune=new ye({context:this.context,units:"cents",value:e.detune}),ae(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Re.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new ur({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return pe._periodicWaveCache.find(t=>t.phase===this._phase&&Yf(t.partials,this._partials));{const e=pe._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if(G(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(i,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),pe._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),pe._periodicWaveCache.length>100&&pe._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){_t(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const i=new Float32Array(e);this._partials.forEach((r,o)=>i[o]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(e,t){let i=2048;const r=new Float32Array(i),o=new Float32Array(i);let c=1;if(e==="custom"){if(c=this._partials.length+1,this._partialCount=this._partials.length,i=c,this._partials.length===0)return[r,o]}else{const a=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);a?(c=parseInt(a[2],10)+1,this._partialCount=parseInt(a[2],10),e=a[1],c=Math.max(c,2),i=c):this._partialCount=0,this._partials=[]}for(let a=1;a<i;++a){const l=2/(a*Math.PI);let h;switch(e){case"sine":h=a<=c?1:0,this._partials[a-1]=h;break;case"square":h=a&1?2*l:0,this._partials[a-1]=h;break;case"sawtooth":h=l*(a&1?1:-1),this._partials[a-1]=h;break;case"triangle":a&1?h=2*(l*l)*(a-1>>1&1?-1:1):h=0,this._partials[a-1]=h;break;case"custom":h=this._partials[a-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}h!==0?(r[a]=-h*Math.sin(t*a),o[a]=h*Math.cos(t*a)):(r[a]=0,o[a]=0)}return[r,o]}_inverseFFT(e,t,n){let i=0;const r=e.length;for(let o=0;o<r;o++)i+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return i}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(e,t,o/r*i),n);return Zf(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return fe(this,arguments,void 0,function*(e=1024){return Ut(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}pe._periodicWaveCache=[];class gm extends un{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new Kn({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class dn extends ye{constructor(){const e=W(dn.getDefaults(),arguments,["value"]);super(e),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new we({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(ye.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Gs extends Re{constructor(){const e=W(Gs.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="AMOscillator",this._modulationScale=new gm({context:this.context}),this._modulationNode=new we({context:this.context}),this._carrier=new pe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new pe({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new dn({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),ae(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(pe.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return fe(this,arguments,void 0,function*(e=1024){return Ut(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Xs extends Re{constructor(){const e=W(Xs.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="FMOscillator",this._modulationNode=new we({context:this.context,gain:0}),this._carrier=new pe({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new ye({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new pe({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new dn({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new dn({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),ae(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(pe.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return fe(this,arguments,void 0,function*(e=1024){return Ut(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class Zn extends Re{constructor(){const e=W(Zn.getDefaults(),arguments,["frequency","width"]);super(e),this.name="PulseOscillator",this._widthGate=new we({context:this.context,gain:0}),this._thresh=new Kn({context:this.context,mapping:t=>t<=0?-1:1}),this.width=new ye({context:this.context,units:"audioRange",value:e.width}),this._triangle=new pe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),ae(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Re.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return fe(this,arguments,void 0,function*(e=1024){return Ut(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Ys extends Re{constructor(){const e=W(Ys.getDefaults(),arguments,["frequency","type","spread"]);super(e),this.name="FatOscillator",this._oscillators=[],this.frequency=new ye({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ye({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,ae(this,["frequency","detune"])}static getDefaults(){return Object.assign(pe.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(_t(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new pe({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):J});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return fe(this,arguments,void 0,function*(e=1024){return Ut(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class Ks extends Re{constructor(){const e=W(Ks.getDefaults(),arguments,["frequency","modulationFrequency"]);super(e),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new dn({context:this.context,value:2}),this._pulse=new Zn({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new pe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),ae(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Re.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return fe(this,arguments,void 0,function*(e=1024){return Ut(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const ro={am:Gs,fat:Ys,fm:Xs,oscillator:pe,pulse:Zn,pwm:Ks};class As extends Re{constructor(){const e=W(As.getDefaults(),arguments,["frequency","type"]);super(e),this.name="OmniOscillator",this.frequency=new ye({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ye({context:this.context,units:"cents",value:e.detune}),ae(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(pe.getDefaults(),Xs.getDefaults(),Gs.getDefaults(),Ys.getDefaults(),Zn.getDefaults(),Ks.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=ro[e],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof ro[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&Ft(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&Ft(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&lt(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return fe(this,arguments,void 0,function*(e=1024){return Ut(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function Ua(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){_t(r,s,e),t.set(this,r)}})}}function dt(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){_t(this.toSeconds(r),s,e),t.set(this,r)}})}}class Zs extends Re{constructor(){const e=W(Zs.getDefaults(),arguments,["url","onload"]);super(e),this.name="Player",this._activeSources=new Set,this._buffer=new ne({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Re.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:J,onerror:J,playbackRate:1,reverse:!1})}load(e){return fe(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=J){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=nn(t,this._loopStart):t=nn(t,0);const i=this.toSeconds(t),r=n;n=nn(n,Math.max(this._buffer.duration-i,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);const c=new Hs({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(c),this._loop&&qe(r)?c.start(e,i):c.start(e,i,o-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var i;(i=[...this._activeSources].pop())===null||i===void 0||i.stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(e);this._stop(n),this._start(n,i)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&_t(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&_t(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}Je([dt(0)],Zs.prototype,"fadeIn",void 0);Je([dt(0)],Zs.prototype,"fadeOut",void 0);class kt extends B{constructor(){const e=W(kt.getDefaults(),arguments,["attack","decay","sustain","release"]);super(e),this.name="Envelope",this._sig=new ye({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(B.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(lt(e))return e;{let n;for(n in as)if(as[n][t]===e)return n;return e}}_setCurve(e,t,n){if(lt(n)&&Reflect.has(as,n)){const i=as[n];$t(i)?e!=="_decayCurve"&&(this[e]=i[t]):this[e]=i}else if(Ge(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(e){this._setCurve("_decayCurve","Out",e)}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){const c=1/i;i=(1-o)/c}if(i<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,i,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,i,e);else{this._sig.cancelAndHoldAtTime(e);let c=this._attackCurve;for(let a=1;a<c.length;a++)if(c[a-1]<=o&&o<=c[a]){c=this._attackCurve.slice(a),c[0]=o;break}this._sig.setValueCurveAtTime(c,e,i,t)}if(r&&this.sustain<1){const c=t*this.sustain,a=e+i;this.log("decay",a),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(c,r+a):this._sig.exponentialApproachValueAtTime(c,a,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(z(Ge(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return sr(this,e,t,n),this}asArray(){return fe(this,arguments,void 0,function*(e=1024){const t=e/this.context.sampleRate,n=new Ji(1,t,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),o=r*.1,c=r+o,a=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/c,decay:t*this.toSeconds(this.decay)/c,release:t*this.toSeconds(this.release)/c,context:n}));return a._sig.toDestination(),a.triggerAttackRelease(t*(i+o)/c,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}Je([dt(0)],kt.prototype,"attack",void 0);Je([dt(0)],kt.prototype,"decay",void 0);Je([Ua(0,1)],kt.prototype,"sustain",void 0);Je([dt(0)],kt.prototype,"release",void 0);const as=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/127*(Math.PI/2));const i=[],r=6.4;for(e=0;e<127;e++){t=e/127;const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;i[e]=d/10+t*.83}i[127]=1;const o=[],c=5;for(e=0;e<128;e++)o[e]=Math.ceil(e/127*c)/c;const a=[];for(e=0;e<128;e++)t=e/127,a[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/127;const d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function h(d){const f=new Array(d.length);for(let p=0;p<d.length;p++)f[p]=1-d[p];return f}function u(d){return d.slice(0).reverse()}return{bounce:{In:h(l),Out:l},cosine:{In:n,Out:u(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:h(i)},sine:{In:a,Out:h(a)},step:{In:o,Out:h(o)}}})();class pn extends B{constructor(){const e=W(pn.getDefaults(),arguments);super(e),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=t=>this._original_triggerRelease(t),this._volume=this.output=new kn({context:this.context,volume:e.volume}),this.volume=this._volume.volume,ae(this,"volume")}static getDefaults(){return Object.assign(B.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...i)=>{const r=i[t],o=this.context.transport.schedule(c=>{i[t]=c,n.apply(this,i)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,r,i),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class fn extends pn{constructor(){const e=W(fn.getDefaults(),arguments);super(e),this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(pn.getDefaults(),{detune:0,onsilence:J,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const i=this.toSeconds(t);return this._triggerEnvelopeAttack(i,n),this.setNote(e,i),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),i=e instanceof je?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}Je([dt(0)],fn.prototype,"portamento",void 0);class dr extends kt{constructor(){super(W(dr.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new we({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class Ps extends fn{constructor(){const e=W(Ps.getDefaults(),arguments);super(e),this.name="Synth",this.oscillator=new As(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new dr(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),ae(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(fn.getDefaults(),{envelope:Object.assign(io(kt.getDefaults(),Object.keys(B.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(io(As.getDefaults(),[...Object.keys(Re.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+i)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class Qs extends Ps{constructor(){const e=W(Qs.getDefaults(),arguments);super(e),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,ae(this,["oscillator","envelope"])}static getDefaults(){return tn(fn.getDefaults(),Ps.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),i=this.toFrequency(e instanceof je?e.toFrequency():e),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}Je([Ua(0)],Qs.prototype,"octaves",void 0);Je([dt(0)],Qs.prototype,"pitchDecay",void 0);const Ha=new Set;function pr(s){Ha.add(s)}function Ga(s,e){const t=`registerProcessor("${s}", ${e})`;Ha.add(t)}const vm=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;pr(vm);const bm=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;pr(bm);const _m=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;pr(_m);const ym="feedback-comb-filter",xm=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;Ga(ym,xm);class Qn extends pn{constructor(){const e=W(Qn.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(e),this.name="Sampler",this._activeSources=new Map;const t={};Object.keys(e.urls).forEach(n=>{const i=parseInt(n,10);if(z(os(n)||Ft(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),os(n)){const r=new je(this.context,n).toMidi();t[r]=e.urls[n]}else Ft(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new cr({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(pn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:J,onerror:J,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=Ba(new je(this.context,i).toFrequency()),o=Math.round(r),c=r-o,a=this._findClosest(o),l=o-a,h=this._buffers.get(l),u=za(a+c),d=new Hs({url:h,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:u}).connect(this.output);d.start(t,0,h.duration/u,n),Ge(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),p=f.indexOf(d);p!==-1&&f.splice(p,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const i=new je(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,i),Ge(t)?(z(Ge(e),"notes must be an array when duration is array"),e.forEach((o,c)=>{const a=t[Math.min(c,t.length-1)];this.triggerRelease(o,r+this.toSeconds(a))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(z(os(e)||isFinite(e),`note must be a pitch or midi: ${e}`),os(e)){const i=new je(this.context,e).toMidi();this._buffers.add(i,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}Je([dt(0)],Qn.prototype,"attack",void 0);Je([dt(0)],Qn.prototype,"release",void 0);class fr extends B{constructor(){const e=W(fr.getDefaults(),arguments,["pan"]);super(e),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new Q({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",ae(this,"pan")}static getDefaults(){return Object.assign(B.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const wm="bit-crusher",km=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;Ga(wm,km);class de extends B{constructor(){const e=W(de.getDefaults(),arguments,["solo"]);super(e),this.name="Solo",this.input=this.output=new we({context:this.context}),de._allSolos.has(this.context)||de._allSolos.set(this.context,new Set),de._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(B.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),de._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){de._soloed.has(this.context)||de._soloed.set(this.context,new Set),de._soloed.get(this.context).add(this)}_removeSolo(){de._soloed.has(this.context)&&de._soloed.get(this.context).delete(this)}_isSoloed(){return de._soloed.has(this.context)&&de._soloed.get(this.context).has(this)}_noSolos(){return!de._soloed.has(this.context)||de._soloed.has(this.context)&&de._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),de._allSolos.get(this.context).delete(this),this._removeSolo(),this}}de._allSolos=new Map;de._soloed=new Map;class mr extends B{constructor(){const e=W(mr.getDefaults(),arguments,["pan","volume"]);super(e),this.name="PanVol",this._panner=this.input=new fr({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new kn({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,ae(this,["pan","volume"])}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Qt extends B{constructor(){const e=W(Qt.getDefaults(),arguments,["volume","pan"]);super(e),this.name="Channel",this._solo=this.input=new de({solo:e.solo,context:this.context}),this._panVol=this.output=new mr({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),ae(this,["pan","volume"])}static getDefaults(){return Object.assign(B.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Qt.buses.has(e)||Qt.buses.set(e,new we({context:this.context})),Qt.buses.get(e)}send(e,t=0){const n=this._getBus(e),i=new we({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(n),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Qt.buses=new Map;class gr extends B{constructor(){const e=W(gr.getDefaults(),arguments,["threshold","ratio"]);super(e),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor,this.threshold=new Q({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:e.threshold}),this.attack=new Q({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:e.attack}),this.release=new Q({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:e.release}),this.knee=new Q({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:e.knee}),this.ratio=new Q({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:e.ratio}),ae(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(B.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}function Tm(){return Le().now()}Le().transport;Le().destination;Le().destination;Le().listener;Le().draw;const Et=Le();function Cm(){return ne.loaded()}const Mm=new gr({threshold:-6,ratio:20,attack:.002,release:.1,knee:3}).toDestination(),vr=new Qn({urls:{F1:"A_029__F1_5.m4a",B1:"A_035__B1_5.m4a",E2:"A_040__E2_5.m4a",A2:"A_045__A2_5.m4a",D3:"A_050__D3_5.m4a",G3:"A_055__G3_5.m4a",B3:"A_059__B3_5.m4a",D4:"A_062__D4_5.m4a",F4:"A_065__F4_5.m4a",B4:"A_071__B4_5.m4a",E5:"A_076__E5_5.m4a",A5:"A_081__A5_5.m4a",D6:"A_086__D6_5.m4a",G6:"A_091__G6_5.m4a"},baseUrl:"https://danigb.github.io/samples/jlearman/rhodes-mki/jRhodes3d-mono/",volume:-12,onload:()=>{console.log("Rhodes piano sampler loaded successfully!")},onerror:s=>{console.warn("Failed to load Rhodes piano sampler:",s)}}).connect(Mm);function Sm(s,e=.35){if(Et.state!=="running"){console.warn("Audio playback skipped: AudioContext is suspended. Click the audio icon in the header to enable.");return}try{vr.triggerAttackRelease(s,e)}catch(t){console.warn("Audio playback failed:",t)}}function Am(s,e=.7,t){if(Et.state!=="running"){console.warn("Audio playback skipped: AudioContext is suspended. Click the audio icon in the header to enable.");return}try{const n=s.length,i=n<=1?1:Math.max(.4,1/Math.sqrt(n)),r=Tm();s.forEach((o,c)=>{let a=0,l=1,h=e;if(t){const{minVelocity:u,maxVelocity:d,spread:f,microTiming:p,humanVariance:m,duration:g}=t;l=(u+Math.random()*(d-u))/127*i;const w=c*f*.1,k=(Math.random()-.5)*p*.05,C=(Math.random()-.5)*m*.03;a=Math.max(0,w+k+C),h=g*(1+(Math.random()-.5)*.2*m)}else l=i;vr.triggerAttackRelease(o,h,r+a,l)})}catch(n){console.warn("Audio playback failed:",n)}}async function Pm(){await nm(),await Cm(),vr.triggerAttackRelease("C4","8n")}async function Nm(){Et&&Et.rawContext&&await Et.rawContext.suspend()}function Om(){return Et.state==="running"}function $m(s){const e=Et.rawContext;if(e&&typeof e.addEventListener=="function"){const t=()=>s(e.state);return e.addEventListener("statechange",t),()=>e.removeEventListener("statechange",t)}return()=>{}}var Em=Object.defineProperty,Im=Object.getOwnPropertyDescriptor,br=(s,e,t,n)=>{for(var i=n>1?void 0:n?Im(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Em(e,t,i),i};let Vn=class extends Se{constructor(){super(...arguments),this.pads=[],this.recipe=[]}render(){const s=new Map(this.recipe.map((e,t)=>[e.index,t+1]));return $`
      <div class="shell">
        <div class="grid" role="grid" aria-label="Circuit pad grid">
          <!-- Column Header Labels -->
          <div class="grid-label corner" aria-hidden="true"></div>
          ${Array.from({length:8}).map((e,t)=>$`
            <div class="grid-label col-label" aria-hidden="true">${t+1}</div>
          `)}

          <!-- Row 4 (pads index 0..7) -->
          <div class="grid-label row-label" aria-hidden="true">4</div>
          ${this.pads.slice(0,8).map(e=>this.renderPad(e,s))}

          <!-- Row 3 (pads index 8..15) -->
          <div class="grid-label row-label" aria-hidden="true">3</div>
          ${this.pads.slice(8,16).map(e=>this.renderPad(e,s))}

          <!-- Row 2 (pads index 16..23) -->
          <div class="grid-label row-label" aria-hidden="true">2</div>
          ${this.pads.slice(16,24).map(e=>this.renderPad(e,s))}

          <!-- Row 1 (pads index 24..31) -->
          <div class="grid-label row-label" aria-hidden="true">1</div>
          ${this.pads.slice(24,32).map(e=>this.renderPad(e,s))}
        </div>
      </div>
    `}renderPad(s,e){if(!s.note)return $`<div class="gap" aria-hidden="true"></div>`;const t=e.get(s.index),n=s.index<16?"top-half":"bottom-half";return $`
      <div 
        class=${`pad ${s.state} ${n} ${t?"target":""}`} 
        role="button" 
        tabindex="0"
        aria-label=${this.getAriaLabel(s,t)}
        @click=${()=>this.onPadClick(s)}
        @keydown=${i=>this.onPadKeydown(i,s)}
      >
        <div class="pad-inner">
          ${t?$`<span class="step">${t}</span>`:null}
          <div>
            <div>${s.label}</div>
            <div class="meta">${s.row+1}:${s.col+1}</div>
          </div>
        </div>
      </div>
    `}onPadClick(s){s.midiNote&&(Sm(s.midiNote),this.dispatchEvent(new CustomEvent("pad-clicked",{detail:s,bubbles:!0,composed:!0})))}onPadKeydown(s,e){(s.key===" "||s.key==="Enter")&&(s.preventDefault(),this.onPadClick(e))}getAriaLabel(s,e){return s.note?e?`${s.note} row ${s.row+1} column ${s.col+1} voicing note ${e} of ${this.recipe.length} (lowest to highest)`:`${s.note} row ${s.row+1} column ${s.col+1} ${s.state}`:`empty slot row ${s.row+1} column ${s.col+1}`}};Vn.styles=Ye`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    .shell {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .grid {
      display: grid;
      grid-template-columns: 24px repeat(8, minmax(0, 1fr));
      grid-template-rows: 24px repeat(4, 1fr);
      gap: 12px;
      width: 100%;
      max-width: 600px;
      margin: 0 auto;
    }

    .grid-label {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.7rem;
      font-weight: 700;
      color: var(--text-muted, #555);
      user-select: none;
      font-family: inherit;
    }

    .col-label {
      border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      padding-bottom: 4px;
    }

    .row-label {
      border-right: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      padding-right: 8px;
    }

    .gap {
      border-radius: 8px;
      background: transparent;
      pointer-events: none;
      aspect-ratio: 1;
    }

    .pad {
      aspect-ratio: 1;
      border-radius: 8px;
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      display: grid;
      place-items: center;
      text-align: center;
      padding: 0.3rem;
      color: var(--text-secondary, #888);
      font-weight: 700;
      letter-spacing: 0.02em;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), var(--pad-scale, #2c3a4e);
      box-shadow: var(--pad-shadow, inset 0 2px 4px rgba(255, 255, 255, 0.05), 0 4px 8px rgba(0, 0, 0, 0.4));
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      user-select: none;
      outline: none;
    }

    .pad:hover {
      border-color: var(--text-secondary);
    }

    .pad:active {
      transform: scale(0.94);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }

    .pad:focus-visible {
      outline: 2px solid var(--accent-magenta, #ff2a9f);
      outline-offset: 2px;
    }

    .pad.dim {
      box-shadow: var(--shadow-inset, inset 0 1px 2px rgba(0, 0, 0, 0.5));
    }

    .pad.scale {
      box-shadow: var(--pad-shadow, inset 0 2px 4px rgba(255, 255, 255, 0.05), 0 4px 8px rgba(0, 0, 0, 0.4));
    }

    .pad.top-half.dim {
      background: var(--pad-top-dim, #132230);
      color: var(--pad-top-text-dim, #264660);
    }
    .pad.top-half.scale {
      background: var(--pad-top-scale, #1a3246);
      color: var(--pad-top-text-scale, #62a2d4);
    }

    .pad.bottom-half.dim {
      background: var(--pad-bot-dim, #221222);
      color: var(--pad-bot-text-dim, #4d234d);
    }
    .pad.bottom-half.scale {
      background: var(--pad-bot-scale, #331833);
      color: var(--pad-bot-text-scale, #9c5c9c);
    }

    /* "lit" corresponds to chord tones */
    .pad.lit {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), var(--accent-magenta, #ff2a9f);
      color: var(--text-on-accent, white);
      border-color: var(--border-color, rgba(255, 255, 255, 0.25));
      box-shadow: 0 0 20px var(--accent-magenta-alpha, rgba(255, 42, 159, 0.6)), var(--shadow-inset, inset 0 2px 4px rgba(255, 255, 255, 0.3));
    }

    /* "active" corresponds to the root note */
    .pad.active {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), var(--accent-cyan, #00f0ff);
      color: var(--accent-cyan-text, #121316);
      border-color: var(--border-color, rgba(255, 255, 255, 0.3));
      box-shadow: 0 0 18px var(--accent-cyan-alpha, rgba(0, 240, 255, 0.5)), var(--shadow-inset, inset 0 2px 4px rgba(255, 255, 255, 0.4));
    }

    .meta {
      font-size: 0.68rem;
      opacity: 0.75;
      display: none; /* Hide coords in new clean hardware design */
    }

    /* "target" corresponds to voicing recipe targets */
    .pad.target {
      outline: 2px solid var(--text-primary, #ffffff);
      outline-offset: 2px;
      box-shadow: 0 0 12px var(--text-primary, #ffffff);
    }

    .step {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: var(--text-primary, #ffffff);
      color: var(--bg-charcoal, #121316);
      font-size: 0.68rem;
      font-weight: 800;
      display: grid;
      place-items: center;
      box-shadow: 0 2px 4px rgba(0,0,0,0.3);
    }

    .pad-inner {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }

    @media (max-width: 1024px) {
      .grid {
        grid-template-columns: 16px repeat(8, minmax(0, 1fr));
        grid-template-rows: 16px repeat(4, 1fr);
        gap: 6px;
      }
      .grid-label {
        font-size: 0.55rem;
      }
      .row-label {
        padding-right: 4px;
      }
      .pad {
        padding: 0.15rem;
        font-size: 0.65rem;
        border-radius: 6px;
      }
      .step {
        width: 14px;
        height: 14px;
        font-size: 0.55rem;
        top: 3px;
        right: 3px;
      }
    }
  `;br([he({attribute:!1})],Vn.prototype,"pads",2);br([he({attribute:!1})],Vn.prototype,"recipe",2);Vn=br([Ke("circuit-grid")],Vn);const ct=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],cs={minor:"Natural Minor",major:"Major",dorian:"Dorian",phrygian:"Phrygian",mixolydian:"Mixolydian","melodic minor":"Melodic Minor","harmonic minor":"Harmonic Minor","bebop dorian":"Bebop Dorian",blues:"Blues","minor pentatonic":"Minor Pent.","hungarian minor":"Hungarian Minor","ukrainian dorian":"Ukrainian Dorian",marva:"Marva",todi:"Todi","whole tone":"Whole Tone",chromatic:"Chromatic"},oo=["minor","major","dorian","phrygian","mixolydian","melodic minor","harmonic minor","bebop dorian","blues","minor pentatonic","hungarian minor","ukrainian dorian","marva","todi","whole tone","chromatic"],ci=ct,Dm=5,Rm=3,Vm=[0,2,4,5,7,9,11,12],Fm=[null,1,3,null,6,8,10,null];function Lm(s,e){const t=Jt(e.key)??"C",n=ct.indexOf(t),i=jm(e.key,e.scale),r=Wm(t,i),o=new Set((s?.notes??[]).map(u=>Jt(u)).filter(Ya)),c=4,a=[];let l=c,h=-1;for(let u=0;u<32;u++){const d=r[u%r.length],f=ct.indexOf(d);h!==-1&&f<h&&l++,a.push(`${d}${l}`),h=f}return Array.from({length:32},(u,d)=>{const f=Math.floor(d/8),p=d%8,m=3-f,g=p+m*Rm,b=p+m*Dm,w=e.mode==="collapsed"?g:b;let k="",C="";if(e.mode==="collapsed"){const S=a[w%a.length]??"";C=S,k=Jt(Ot(S))??""}else{const S=(f+2)%4,M=Math.floor(S/2)*12,P=S%2===0?Fm[p]:Vm[p];if(P!==null&&n!==-1){const N=P+M,D=Vo(`${t}${c}`,$o(N));C=D,k=Jt(Ot(D))??""}}const v=o.has(k),y=k===t,x=i.includes(k);let _="dim";return y?_="active":v?_="lit":x&&(_="scale"),{index:d,row:f,col:p,offset:w,note:k,label:k||" ",state:_,inChord:v,isRoot:y,inScale:x,midiNote:C}})}function jm(s,e){const n=kl(`${s} ${e}`).notes.map(i=>Jt(i)).filter(Ya);return n.length===0?["C","D","E","F","G","A","B"]:Array.from(new Set(n))}function qm(s){const e=ct.indexOf(s);return e===-1?ct:Xa(ct,e)}function Wm(s,e){const t=ct.indexOf(s),n=e.slice().sort((i,r)=>ao(i,t)-ao(r,t));return n.length===0?qm(s):n.includes(s)?Xa(n,n.indexOf(s)):[s,...n]}function ao(s,e){const t=ct.indexOf(s);return t===-1||e===-1?Number.MAX_SAFE_INTEGER:(t-e+12)%12}function Xa(s,e){return[...s.slice(e),...s.slice(0,e)]}function Jt(s){if(!s)return null;const e=Ot(s);if(!e)return null;const t=Fo(e);return ct.includes(t)?t:e}function Ya(s){return s!==null}const Ns=350,li=new Uint8Array([0,32,41]),zm=100,Os=46,Fe=64,ve=70,sn=79;function co(s){if(s.length!==Ns)throw new Error(`Invalid patch dump length. Expected ${Ns}, got ${s.length}`);const e=new Uint8Array(s),t=i=>({wave:e[i],waveInterpolate:e[i+1],pulseWidthIndex:e[i+2],virtualSyncDepth:e[i+3],density:e[i+4],densityDetune:e[i+5],semitones:e[i+6],cents:e[i+7],pitchBend:e[i+8]}),n=i=>({velocityOrDelay:e[i],attack:e[i+1],decay:e[i+2],sustain:e[i+3],release:e[i+4]});return{rawData:e,oscillators:[t(Os),t(Os+9)],mixer:{osc1Level:e[Fe],osc2Level:e[Fe+1],ringModLevel12:e[Fe+2],noiseLevel:e[Fe+3],preFxLevel:e[Fe+4],postFxLevel:e[Fe+5]},filter:{routing:e[ve],drive:e[ve+1],driveType:e[ve+2],type:e[ve+3],frequency:e[ve+4],track:e[ve+5],resonance:e[ve+6],qNormalise:e[ve+7],env2ToFreq:e[ve+8]},envelopes:[n(sn),n(sn+5),n(sn+10)]}}function Bm(s){const e=new Uint8Array(s.rawData),t=(i,r)=>{e[i]=r.wave,e[i+1]=r.waveInterpolate,e[i+2]=r.pulseWidthIndex,e[i+3]=r.virtualSyncDepth,e[i+4]=r.density,e[i+5]=r.densityDetune,e[i+6]=r.semitones,e[i+7]=r.cents,e[i+8]=r.pitchBend},n=(i,r)=>{e[i]=r.velocityOrDelay,e[i+1]=r.attack,e[i+2]=r.decay,e[i+3]=r.sustain,e[i+4]=r.release};return t(Os,s.oscillators[0]),t(Os+9,s.oscillators[1]),e[Fe]=s.mixer.osc1Level,e[Fe+1]=s.mixer.osc2Level,e[Fe+2]=s.mixer.ringModLevel12,e[Fe+3]=s.mixer.noiseLevel,e[Fe+4]=s.mixer.preFxLevel,e[Fe+5]=s.mixer.postFxLevel,e[ve]=s.filter.routing,e[ve+1]=s.filter.drive,e[ve+2]=s.filter.driveType,e[ve+3]=s.filter.type,e[ve+4]=s.filter.frequency,e[ve+5]=s.filter.track,e[ve+6]=s.filter.resonance,e[ve+7]=s.filter.qNormalise,e[ve+8]=s.filter.env2ToFreq,n(sn,s.envelopes[0]),n(sn+5,s.envelopes[1]),n(sn+10,s.envelopes[2]),e[6]=0,e}function Um(s=0){return new Uint8Array([240,li[0],li[1],li[2],1,zm,64,s,247])}var Hm=Object.defineProperty,Gm=Object.getOwnPropertyDescriptor,Tt=(s,e,t,n)=>{for(var i=n>1?void 0:n?Gm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Hm(e,t,i),i};let tt=class extends Se{constructor(){super(...arguments),this.value=0,this.min=0,this.max=127,this.label="",this.centered=!1,this.isDragging=!1,this.startY=0,this.startValue=0,this.handlePointerDown=s=>{this.isDragging=!0,this.startY=s.clientY,this.startValue=this.value,this.container.setPointerCapture(s.pointerId),this.container.addEventListener("pointermove",this.handlePointerMove),this.container.addEventListener("pointerup",this.handlePointerUp),this.container.addEventListener("pointercancel",this.handlePointerUp)},this.handlePointerMove=s=>{if(!this.isDragging)return;const e=this.startY-s.clientY,t=(this.max-this.min)/100;let n=this.startValue+Math.round(e*t);n=Math.max(this.min,Math.min(this.max,n)),n!==this.value&&(this.value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))},this.handlePointerUp=s=>{this.isDragging=!1,this.container.releasePointerCapture(s.pointerId),this.container.removeEventListener("pointermove",this.handlePointerMove),this.container.removeEventListener("pointerup",this.handlePointerUp),this.container.removeEventListener("pointercancel",this.handlePointerUp)}}renderSvg(){const e=2*Math.PI*24,t=e*.75,n=e*.25,i=(this.value-this.min)/(this.max-this.min);let r=`0 ${e}`;if(this.centered){const c=t/2,a=(i-.5)*t;a>0?r=`0 ${c+n/2} ${a} ${e}`:r=`0 ${c+n/2+a} ${Math.abs(a)} ${e}`}else r=`${i*t} ${e}`;const o=(this.centered,-135+i*270);return $`
      <svg class="knob-svg" viewBox="0 0 60 60">
        <circle 
          class="track" 
          cx="30" cy="30" r="${24}" 
          stroke-dasharray="${t} ${n}" 
          stroke-dashoffset="${-n/2}" 
          transform="rotate(135, 30, 30)" 
        />
        <circle 
          class="progress" 
          cx="30" cy="30" r="${24}" 
          stroke-dasharray="${r}" 
          stroke-dashoffset="${-n/2}" 
          transform="rotate(135, 30, 30)" 
        />
      </svg>
      <div class="indicator-wrapper" style="transform: rotate(${o}deg)">
        <div class="indicator"></div>
      </div>
    `}render(){return $`
      <div 
        class="knob-container ${this.isDragging?"dragging":""}"
        @pointerdown="${this.handlePointerDown}"
      >
        ${this.renderSvg()}
      </div>
      ${this.label?$`<div class="label">${this.label}</div>`:""}
    `}};tt.styles=Ye`
    :host {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      user-select: none;
      --knob-color: var(--accent-cyan, #22d3ee);
      --knob-bg: var(--pad-scale, #1e293b);
      --knob-track: var(--pad-chromatic, #334155);
    }

    .knob-container {
      position: relative;
      width: 60px;
      height: 60px;
      cursor: ns-resize;
      border-radius: 50%;
      background: var(--bg-charcoal, linear-gradient(145deg, #1e293b, #0f172a));
      box-shadow: var(--knob-shadow, 5px 5px 10px #0c1222, -5px -5px 10px #202e46);
      display: flex;
      justify-content: center;
      align-items: center;
      touch-action: none;
      transition: box-shadow 0.2s ease, transform 0.1s ease;
    }

    .knob-container:hover {
      box-shadow: var(--knob-shadow-hover, 3px 3px 6px #0c1222, -3px -3px 6px #202e46);
    }

    .knob-container.dragging {
      transform: scale(0.98);
      box-shadow: var(--knob-shadow-dragging, inset 3px 3px 6px #0c1222, inset -3px -3px 6px #202e46);
    }

    .knob-svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .track {
      fill: none;
      stroke: var(--knob-track);
      stroke-width: 6;
      stroke-linecap: round;
    }

    .progress {
      fill: none;
      stroke: var(--knob-color);
      stroke-width: 6;
      stroke-linecap: round;
      filter: drop-shadow(0 0 4px var(--knob-color));
      transition: stroke-dasharray 0.1s linear;
    }

    .indicator-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
    }

    .indicator {
      position: absolute;
      width: 4px;
      height: 12px;
      background-color: var(--text-secondary, #e2e8f0);
      border-radius: 2px;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 4px rgba(255, 255, 255, 0.5);
    }

    .label {
      margin-top: 8px;
      font-size: 0.75rem;
      color: var(--text-secondary, #94a3b8);
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
  `;Tt([he({type:Number})],tt.prototype,"value",2);Tt([he({type:Number})],tt.prototype,"min",2);Tt([he({type:Number})],tt.prototype,"max",2);Tt([he({type:String})],tt.prototype,"label",2);Tt([he({type:Boolean})],tt.prototype,"centered",2);Tt([q()],tt.prototype,"isDragging",2);Tt([vo(".knob-container")],tt.prototype,"container",2);tt=Tt([Ke("knob-element")],tt);var Xm=Object.defineProperty,Ym=Object.getOwnPropertyDescriptor,Ct=(s,e,t,n)=>{for(var i=n>1?void 0:n?Ym(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Xm(e,t,i),i};let nt=class extends Se{constructor(){super(...arguments),this.value=0,this.min=0,this.max=127,this.label="",this.horizontal=!1,this.isDragging=!1,this.handlePointerDown=s=>{this.isDragging=!0,this.container.setPointerCapture(s.pointerId),this.updateValueFromEvent(s),this.container.addEventListener("pointermove",this.handlePointerMove),this.container.addEventListener("pointerup",this.handlePointerUp),this.container.addEventListener("pointercancel",this.handlePointerUp)},this.handlePointerMove=s=>{this.isDragging&&this.updateValueFromEvent(s)},this.handlePointerUp=s=>{this.isDragging=!1,this.container.releasePointerCapture(s.pointerId),this.container.removeEventListener("pointermove",this.handlePointerMove),this.container.removeEventListener("pointerup",this.handlePointerUp),this.container.removeEventListener("pointercancel",this.handlePointerUp)}}updateValueFromEvent(s){const e=this.container.getBoundingClientRect();let t=0;this.horizontal?t=Math.max(0,Math.min(s.clientX-e.left,e.width))/e.width:t=1-Math.max(0,Math.min(s.clientY-e.top,e.height))/e.height;let n=Math.round(this.min+t*(this.max-this.min));n!==this.value&&(this.value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){const s=(this.value-this.min)/(this.max-this.min)*100,e=this.horizontal?`width: ${s}%`:`height: ${s}%`,t=this.horizontal?`left: ${s}%`:`bottom: ${s}%`,n=$`
      <div 
        class="slider-container"
        @pointerdown="${this.handlePointerDown}"
      >
        <div class="slider-fill" style="${e}"></div>
        <div class="slider-thumb" style="${t}"></div>
      </div>
    `;return this.horizontal?$`
        <div class="layout-horizontal">
          ${this.label?$`<div class="label">${this.label}</div>`:""}
          ${n}
        </div>
      `:$`
      ${n}
      ${this.label?$`<div class="label">${this.label}</div>`:""}
    `}};nt.styles=Ye`
    :host {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      user-select: none;
      --slider-color: var(--accent-cyan, #22d3ee);
      --slider-bg: var(--pad-scale, #1e293b);
      --slider-track: var(--pad-chromatic, #0f172a);
    }

    .slider-container {
      position: relative;
      background: var(--slider-track);
      border-radius: 8px;
      cursor: pointer;
      box-shadow: var(--shadow-inset, inset 2px 2px 5px #0c1222, inset -2px -2px 5px #202e46);
      touch-action: none;
    }

    :host(:not([horizontal])) .slider-container {
      width: 16px;
      height: 120px;
    }

    :host([horizontal]) .slider-container {
      width: 120px;
      height: 16px;
      flex-direction: row;
    }

    .slider-fill {
      position: absolute;
      background: var(--slider-color);
      border-radius: 8px;
      pointer-events: none;
      box-shadow: 0 0 8px var(--slider-color);
    }

    :host(:not([horizontal])) .slider-fill {
      bottom: 0;
      left: 0;
      width: 100%;
    }

    :host([horizontal]) .slider-fill {
      top: 0;
      left: 0;
      height: 100%;
    }

    .slider-thumb {
      position: absolute;
      background: var(--text-secondary, #e2e8f0);
      border-radius: 4px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      pointer-events: none;
    }

    :host(:not([horizontal])) .slider-thumb {
      width: 24px;
      height: 8px;
      left: -4px;
      transform: translateY(50%);
    }

    :host([horizontal]) .slider-thumb {
      width: 8px;
      height: 24px;
      top: -4px;
      transform: translateX(-50%);
    }

    .label {
      margin-top: 8px;
      font-size: 0.75rem;
      color: var(--text-secondary, #94a3b8);
      font-weight: 500;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    :host([horizontal]) .label {
      margin-top: 0;
      margin-right: 12px;
      width: 60px;
      text-align: right;
    }

    .layout-horizontal {
      display: flex;
      align-items: center;
    }
  `;Ct([he({type:Number})],nt.prototype,"value",2);Ct([he({type:Number})],nt.prototype,"min",2);Ct([he({type:Number})],nt.prototype,"max",2);Ct([he({type:String})],nt.prototype,"label",2);Ct([he({type:Boolean})],nt.prototype,"horizontal",2);Ct([q()],nt.prototype,"isDragging",2);Ct([vo(".slider-container")],nt.prototype,"container",2);nt=Ct([Ke("slider-element")],nt);var Km=Object.defineProperty,Zm=Object.getOwnPropertyDescriptor,Jn=(s,e,t,n)=>{for(var i=n>1?void 0:n?Zm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Km(e,t,i),i};let jt=class extends Se{constructor(){super(...arguments),this.patch=null,this.midiConnected=!1,this.activeSlot=0,this.viewMode="basic"}updateParam(s,e){this.patch&&this.dispatchEvent(new CustomEvent("patch-change",{detail:{path:s,value:e},bubbles:!0,composed:!0}))}handleRequestDump(){this.dispatchEvent(new CustomEvent("request-dump",{bubbles:!0,composed:!0}))}renderOscillatorPanel(s,e){if(!this.patch)return"";const t=this.patch.oscillators[s],n=this.viewMode==="advanced";return $`
      <div class="panel">
        <h3 class="panel-title">${e}</h3>
        <div class="row">
          <knob-element 
            label="Type" 
            .min=${0} .max=${29} 
            .value=${t.wave}
            @change=${i=>this.updateParam(`oscillators.${s}.wave`,i.detail.value)}
          ></knob-element>
          
          ${s===0?$`
            <knob-element 
              label="Mix" 
              .min=${0} .max=${127} 
              .value=${this.patch.mixer.osc1Level}
              @change=${i=>this.updateParam("mixer.osc1Level",i.detail.value)}
            ></knob-element>
          `:$`
            <knob-element 
              label="Mix" 
              .min=${0} .max=${127} 
              .value=${this.patch.mixer.osc2Level}
              @change=${i=>this.updateParam("mixer.osc2Level",i.detail.value)}
            ></knob-element>
          `}

          <knob-element 
            label="Wavetable Idx" 
            .min=${0} .max=${127} 
            .value=${t.waveInterpolate}
            @change=${i=>this.updateParam(`oscillators.${s}.waveInterpolate`,i.detail.value)}
          ></knob-element>
          
          ${n?$`
            <knob-element label="Pulse Width" .min=${0} .max=${127} .value=${t.pulseWidthIndex} @change=${i=>this.updateParam(`oscillators.${s}.pulseWidthIndex`,i.detail.value)}></knob-element>
            <knob-element label="Sync Depth" .min=${0} .max=${127} .value=${t.virtualSyncDepth} @change=${i=>this.updateParam(`oscillators.${s}.virtualSyncDepth`,i.detail.value)}></knob-element>
            <knob-element label="Density" .min=${0} .max=${127} .value=${t.density} @change=${i=>this.updateParam(`oscillators.${s}.density`,i.detail.value)}></knob-element>
            <knob-element label="Detune" .min=${0} .max=${127} .value=${t.densityDetune} @change=${i=>this.updateParam(`oscillators.${s}.densityDetune`,i.detail.value)}></knob-element>
            <knob-element label="Semitones" .min=${0} .max=${127} .value=${t.semitones} @change=${i=>this.updateParam(`oscillators.${s}.semitones`,i.detail.value)}></knob-element>
            <knob-element label="Cents" .min=${0} .max=${127} .value=${t.cents} @change=${i=>this.updateParam(`oscillators.${s}.cents`,i.detail.value)}></knob-element>
            <knob-element label="Pitch Bend" .min=${0} .max=${127} .value=${t.pitchBend} @change=${i=>this.updateParam(`oscillators.${s}.pitchBend`,i.detail.value)}></knob-element>
          `:""}
        </div>
      </div>
    `}renderMixerPanel(){if(!this.patch||this.viewMode!=="advanced")return"";const s=this.patch.mixer;return $`
      <div class="panel">
        <h3 class="panel-title">Mixer (Advanced)</h3>
        <div class="row">
          <knob-element label="Osc 1" .min=${0} .max=${127} .value=${s.osc1Level} @change=${e=>this.updateParam("mixer.osc1Level",e.detail.value)}></knob-element>
          <knob-element label="Osc 2" .min=${0} .max=${127} .value=${s.osc2Level} @change=${e=>this.updateParam("mixer.osc2Level",e.detail.value)}></knob-element>
          <knob-element label="Ring Mod" .min=${0} .max=${127} .value=${s.ringModLevel12} @change=${e=>this.updateParam("mixer.ringModLevel12",e.detail.value)}></knob-element>
          <knob-element label="Noise" .min=${0} .max=${127} .value=${s.noiseLevel} @change=${e=>this.updateParam("mixer.noiseLevel",e.detail.value)}></knob-element>
          <knob-element label="Pre FX" .min=${0} .max=${127} .value=${s.preFxLevel} @change=${e=>this.updateParam("mixer.preFxLevel",e.detail.value)}></knob-element>
          <knob-element label="Post FX" .min=${0} .max=${127} .value=${s.postFxLevel} @change=${e=>this.updateParam("mixer.postFxLevel",e.detail.value)}></knob-element>
        </div>
      </div>
    `}renderFilterPanel(){if(!this.patch)return"";const s=this.patch.filter,e=this.viewMode==="advanced";return $`
      <div class="panel">
        <h3 class="panel-title">Filter</h3>
        <div class="row" style="align-items: flex-start; justify-content: space-around;">
          <div class="column">
            <knob-element 
              label="Drive" 
              .min=${0} .max=${127} 
              .value=${s.drive}
              @change=${t=>this.updateParam("filter.drive",t.detail.value)}
            ></knob-element>
            ${e?$`<knob-element label="Drive Type" .min=${0} .max=${6} .value=${s.driveType} @change=${t=>this.updateParam("filter.driveType",t.detail.value)}></knob-element>`:""}
          </div>

          <div class="column" style="height: 100%; flex: 1; max-width: 300px;">
            <slider-element
              label="Cutoff"
              .min=${0} .max=${127}
              .value=${s.frequency}
              @change=${t=>this.updateParam("filter.frequency",t.detail.value)}
            ></slider-element>
          </div>

          <div class="column">
            <knob-element 
              label="Resonance" 
              .min=${0} .max=${127} 
              .value=${s.resonance}
              @change=${t=>this.updateParam("filter.resonance",t.detail.value)}
            ></knob-element>
            <knob-element 
              label="Type" 
              .min=${0} .max=${5} 
              .value=${s.type}
              .centered=${!0}
              @change=${t=>this.updateParam("filter.type",t.detail.value)}
            ></knob-element>
          </div>
          
          ${e?$`
            <div class="column">
              <knob-element label="Routing" .min=${0} .max=${2} .value=${s.routing} @change=${t=>this.updateParam("filter.routing",t.detail.value)}></knob-element>
              <knob-element label="Track" .min=${0} .max=${127} .value=${s.track} @change=${t=>this.updateParam("filter.track",t.detail.value)}></knob-element>
            </div>
            <div class="column">
              <knob-element label="Q Norm" .min=${0} .max=${127} .value=${s.qNormalise} @change=${t=>this.updateParam("filter.qNormalise",t.detail.value)}></knob-element>
              <knob-element label="Env2>Freq" .min=${0} .max=${127} .value=${s.env2ToFreq} @change=${t=>this.updateParam("filter.env2ToFreq",t.detail.value)}></knob-element>
            </div>
          `:""}
        </div>
      </div>
    `}renderEnvelopePanel(s,e){if(!this.patch)return"";const t=this.patch.envelopes[s],n=this.viewMode==="advanced";return $`
      <div class="panel">
        <h3 class="panel-title">${e}</h3>
        <div class="column" style="align-items: stretch;">
          ${n?$`
            <slider-element horizontal label="Vel/Delay" .min=${0} .max=${127} .value=${t.velocityOrDelay} @change=${i=>this.updateParam(`envelopes.${s}.velocityOrDelay`,i.detail.value)}></slider-element>
          `:""}
          <slider-element horizontal label="Attack" .min=${0} .max=${127} .value=${t.attack} @change=${i=>this.updateParam(`envelopes.${s}.attack`,i.detail.value)}></slider-element>
          <slider-element horizontal label="Decay" .min=${0} .max=${127} .value=${t.decay} @change=${i=>this.updateParam(`envelopes.${s}.decay`,i.detail.value)}></slider-element>
          <slider-element horizontal label="Sustain" .min=${0} .max=${127} .value=${t.sustain} @change=${i=>this.updateParam(`envelopes.${s}.sustain`,i.detail.value)}></slider-element>
          <slider-element horizontal label="Release" .min=${0} .max=${127} .value=${t.release} @change=${i=>this.updateParam(`envelopes.${s}.release`,i.detail.value)}></slider-element>
        </div>
      </div>
    `}renderManagementPanel(){return $`
      <div class="panel">
        <h3 class="panel-title">Patch Management</h3>
        <div class="row" style="align-items: stretch;">
          <div class="column" style="flex: 1; align-items: stretch;">
            <div class="row" style="gap: 8px;">
              <button class="btn primary" style="flex: 1;">Save</button>
              <button class="btn" style="flex: 1;">Save As</button>
            </div>
            <button class="btn" @click=${this.handleRequestDump} ?disabled=${!this.midiConnected}>Request Dump</button>
            <button class="btn">Randomize</button>
          </div>
          
          <div class="slot-grid">
            ${Array.from({length:16}).map((s,e)=>$`
              <button 
                class="slot-btn ${e===this.activeSlot?"active":""}"
                @click=${()=>{this.activeSlot=e,this.dispatchEvent(new CustomEvent("load-slot",{detail:{slot:e},bubbles:!0,composed:!0}))}}
              >${e+1}</button>
            `)}
          </div>
        </div>
      </div>
    `}render(){return $`
      <div class="header">
        <div class="mode-switch">
          <button class="mode-btn ${this.viewMode==="basic"?"active":""}" @click=${()=>this.viewMode="basic"}>Basic</button>
          <button class="mode-btn ${this.viewMode==="advanced"?"active":""}" @click=${()=>this.viewMode="advanced"}>Advanced</button>
        </div>
      </div>

      ${this.patch?$`
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${this.renderOscillatorPanel(0,"Synth 1")}
          ${this.viewMode==="advanced"?this.renderOscillatorPanel(1,"Synth 2"):""}
          ${this.renderMixerPanel()}
          ${this.renderFilterPanel()}
          
          <div class="row" style="align-items: stretch;">
            <div style="flex: 1; min-width: 250px;">${this.renderEnvelopePanel(0,"Env 1 (Amp)")}</div>
            ${this.viewMode==="advanced"?$`
              <div style="flex: 1; min-width: 250px;">${this.renderEnvelopePanel(1,"Env 2 (Filter)")}</div>
              <div style="flex: 1; min-width: 250px;">${this.renderEnvelopePanel(2,"Env 3 (Aux)")}</div>
            `:""}
          </div>
        </div>
        ${this.renderManagementPanel()}
      `:$`
        <div class="empty-state">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <p>Connect your Circuit Tracks via MIDI<br/>and request a patch dump to start editing.</p>
          <button class="btn primary" @click=${this.handleRequestDump} ?disabled=${!this.midiConnected}>
            Request Patch Dump
          </button>
        </div>
      `}
    `}};jt.styles=Ye`
    :host {
      display: flex;
      flex-direction: column;
      height: 100%;
      color: var(--text-primary, #ffffff);
      overflow-y: auto;
      padding: 16px;
      gap: 16px;
      font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
    }

    .panel {
      background: var(--bg-charcoal, #1a1b20);
      border-radius: 12px;
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      box-shadow: var(--shadow-panel, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06));
    }

    .panel-title {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--text-secondary, rgba(255, 255, 255, 0.6));
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 0;
    }

    .row {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 24px;
      flex-wrap: wrap;
    }

    .column {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .mode-switch {
      display: flex;
      background: var(--bg-onyx, #121316);
      border-radius: 20px;
      padding: 4px;
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
    }

    .mode-btn {
      background: transparent;
      border: none;
      color: var(--btn-text-off, rgba(255, 255, 255, 0.6));
      padding: 6px 16px;
      border-radius: 16px;
      font-size: 0.8rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .mode-btn.active {
      background: var(--border-color, rgba(255, 255, 255, 0.1));
      color: var(--accent-cyan, #00f0ff);
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }

    .btn {
      background: var(--bg-onyx, #121316);
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.1));
      color: var(--text-primary, #ffffff);
      padding: 8px 16px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.5px;
    }

    .btn:hover {
      background: var(--border-color, rgba(255, 255, 255, 0.1));
      border-color: var(--text-secondary, rgba(255, 255, 255, 0.2));
    }

    .btn.primary {
      background: var(--accent-cyan, #00f0ff);
      color: var(--accent-cyan-text, #000);
      border: none;
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    }

    .btn.primary:hover {
      background: var(--accent-cyan, #00f0ff);
      opacity: 0.9;
      box-shadow: 0 0 15px rgba(0, 240, 255, 0.4);
    }

    .btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .slot-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
    }

    .slot-btn {
      aspect-ratio: 1;
      background: var(--pad-scale, #121316);
      border: 1px solid var(--border-color, rgba(255, 255, 255, 0.05));
      color: var(--btn-text-off, rgba(255, 255, 255, 0.6));
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }

    .slot-btn:hover {
      background: var(--border-color, rgba(255, 255, 255, 0.1));
      color: var(--text-primary);
    }

    .slot-btn.active {
      background: var(--accent-cyan, #00f0ff);
      color: var(--accent-cyan-text, #000);
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      color: var(--text-secondary, rgba(255, 255, 255, 0.6));
      text-align: center;
      gap: 16px;
    }
  `;Jn([he({type:Object})],jt.prototype,"patch",2);Jn([he({type:Boolean})],jt.prototype,"midiConnected",2);Jn([q()],jt.prototype,"activeSlot",2);Jn([q()],jt.prototype,"viewMode",2);jt=Jn([Ke("circuit-patch-editor")],jt);let Ka=class extends Event{constructor(e,t,n,i){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t,this.callback=n,this.subscribe=i??!1}};let lo=class{constructor(e,t,n,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(r,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=r,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(r,o)),this.unsubscribe=o},this.host=e,t.context!==void 0){const r=t;this.context=r.context,this.callback=r.callback,this.subscribe=r.subscribe??!1}else this.context=t,this.callback=n,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ka(this.context,this.host,this.t,this.subscribe))}};class Qm{get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){const n=t||!Object.is(e,this.o);this.o=e,n&&this.updateObservers()}constructor(e){this.subscriptions=new Map,this.updateObservers=()=>{for(const[t,{disposer:n}]of this.subscriptions)t(this.o,n)},e!==void 0&&(this.value=e)}addCallback(e,t,n){if(!n)return void e(this.value);this.subscriptions.has(e)||this.subscriptions.set(e,{disposer:()=>{this.subscriptions.delete(e)},consumerHost:t});const{disposer:i}=this.subscriptions.get(e);e(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}class Jm extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}}class ls extends Qm{constructor(e,t,n){super(t.context!==void 0?t.initialValue:n),this.onContextRequest=i=>{if(i.context!==this.context)return;const r=i.contextTarget??i.composedPath()[0];r!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,r,i.subscribe))},this.onProviderRequest=i=>{if(i.context!==this.context||(i.contextTarget??i.composedPath()[0])===this.host)return;const r=new Set;for(const[o,{consumerHost:c}]of this.subscriptions)r.has(o)||(r.add(o),c.dispatchEvent(new Ka(this.context,c,o,!0)));i.stopPropagation()},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController?.(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new Jm(this.context,this.host))}}function ze({context:s,subscribe:e}){return(t,n)=>{typeof n=="object"?n.addInitializer((function(){new lo(this,{context:s,callback:i=>{t.set.call(this,i)},subscribe:e})})):t.constructor.addInitializer((i=>{new lo(i,{context:s,callback:r=>{i[n]=r},subscribe:e})}))}}const es="ui-context",Js="midi-context",Za="chord-context",ts="actions-context";var eg=Object.defineProperty,tg=Object.getOwnPropertyDescriptor,ei=(s,e,t,n)=>{for(var i=n>1?void 0:n?tg(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&eg(e,t,i),i};let mn=class extends Se{handleThemeToggle(){this.actions&&this.uiState&&this.actions.setTheme(this.uiState.theme==="dark"?"light":"dark")}render(){const s=this.uiState?.theme||"dark",e=this.midiState?.midiConnected||!1;return $`
      <header class="brand-header">
        <div class="brand-left">
          <svg class="brand-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="var(--brand-logo-bg, #ffffff)" />
            <g transform="rotate(-45 16 16)" fill="var(--brand-logo-fill, #1a1b20)">
              <rect x="6.5" y="6" width="5" height="14" rx="2.5" />
              <rect x="13.5" y="12" width="5" height="14" rx="2.5" />
              <rect x="20.5" y="6" width="5" height="14" rx="2.5" />
            </g>
          </svg>
          <div class="brand-title">circuit chords</div>
        </div>
        <div class="brand-right">
          <!-- Theme Toggle Button -->
          <button class="audio-btn theme-toggle-btn" @click=${this.handleThemeToggle} title="${s==="dark"?"Switch to Light Mode":"Switch to Dark Mode"}">
            ${s==="dark"?$`
              <!-- Sun Icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            `:$`
              <!-- Moon Icon -->
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            `}
          </button>
          <div class="midi-led-group">
            <span class="midi-led ${e?"connected":""}"></span>
            MIDI
          </div>
        </div>
      </header>
    `}};mn.styles=Ye`
    :host {
      display: contents;
    }
    
    .brand-header {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 0 16px;
      background: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
    }

    .brand-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .brand-logo {
      width: 24px;
      height: 24px;
      display: block;
    }

    .brand-title {
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      text-transform: lowercase;
      color: var(--text-primary);
      line-height: 1;
    }

    .brand-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .midi-led-group {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-secondary);
    }

    .midi-led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--midi-led-off);
      transition: all 0.3s ease;
    }

    .midi-led.connected {
      background: var(--status-green);
      box-shadow: 0 0 8px var(--status-green);
    }

    .audio-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--pad-scale);
      border: 1px solid var(--border-color);
      color: var(--btn-text-off, #94a3b8);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
    }
    
    .audio-btn:hover, .audio-btn.active {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }
    
    .audio-btn svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `;ei([ze({context:es,subscribe:!0}),q()],mn.prototype,"uiState",2);ei([ze({context:Js,subscribe:!0}),q()],mn.prototype,"midiState",2);ei([ze({context:ts,subscribe:!0})],mn.prototype,"actions",2);mn=ei([Ke("brand-header")],mn);var ng=Object.defineProperty,sg=Object.getOwnPropertyDescriptor,ns=(s,e,t,n)=>{for(var i=n>1?void 0:n?sg(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ng(e,t,i),i};let qt=class extends Se{constructor(){super(...arguments),this.isCircuitTracksConnected=!1}render(){const s=this.uiState?.activeTab||"grid",e=this.uiState?.showHelp||!1,t=this.uiState?.showSettings||!1;return $`
      <nav class="panel sidebar-left">
        <button class="nav-btn ${s==="grid"?"active":""}" title="Grid View" @click=${()=>this.actions?.setActiveTab("grid")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
        </button>
        <button class="nav-btn ${s==="data"?"active":""}" title="Key &amp; Scale" @click=${()=>this.actions?.setActiveTab("data")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
        </button>
        <button class="nav-btn ${s==="input"?"active":""}" title="Chord Input" @click=${()=>this.actions?.setActiveTab("input")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
        </button>
        <button 
          class="nav-btn ${s==="patch"?"active":""}" 
          title="Patch Editor" 
          @click=${()=>{this.isCircuitTracksConnected&&this.actions?.setActiveTab("patch")}}
          style="opacity: ${this.isCircuitTracksConnected?"1":"0.3"}; cursor: ${this.isCircuitTracksConnected?"pointer":"not-allowed"};"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
        </button>
        <div class="nav-divider"></div>
        <div class="nav-bottom">
          <button class="nav-btn ${e?"active":""}" title="Help ?" @click=${()=>this.actions?.toggleHelp()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          </button>
          <button class="nav-btn ${t?"active":""}" title="Settings" @click=${()=>this.actions?.toggleSettings()}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </button>
        </div>
      </nav>
    `}};qt.styles=Ye`
    :host {
      display: contents;
    }
    
    .sidebar-left {
      grid-column: 1 / 2;
      grid-row: 2 / 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 0;
      gap: 16px;
      background-color: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
    }

    .nav-btn {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: var(--pad-scale);
      border: 1px solid var(--border-color);
      color: var(--btn-text-off, #94a3b8);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-btn:hover, .nav-btn.active {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }

    .nav-divider {
      width: 32px;
      height: 2px;
      background: var(--border-color);
      margin: 8px 0;
      border-radius: 2px;
    }

    .nav-bottom {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  `;ns([ze({context:es,subscribe:!0}),q()],qt.prototype,"uiState",2);ns([ze({context:Js,subscribe:!0}),q()],qt.prototype,"midiState",2);ns([ze({context:ts,subscribe:!0})],qt.prototype,"actions",2);ns([he({type:Boolean})],qt.prototype,"isCircuitTracksConnected",2);qt=ns([Ke("sidebar-nav")],qt);var ig=Object.defineProperty,rg=Object.getOwnPropertyDescriptor,ss=(s,e,t,n)=>{for(var i=n>1?void 0:n?rg(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ig(e,t,i),i};let Wt=class extends Se{constructor(){super(...arguments),this.showScaleWarnings=!0}handleDeviceSelect(s){const e=s.target.value;this.dispatchEvent(new CustomEvent("device-select",{detail:e,bubbles:!0,composed:!0}))}handleChannelSelect(s){const e=parseInt(s.target.value,10);this.dispatchEvent(new CustomEvent("channel-select",{detail:e,bubbles:!0,composed:!0}))}handleConnect(){this.dispatchEvent(new CustomEvent("midi-connect",{bubbles:!0,composed:!0}))}handleDisconnect(){this.dispatchEvent(new CustomEvent("midi-disconnect",{bubbles:!0,composed:!0}))}handleWarningToggle(s){const e=s.target.checked;this.dispatchEvent(new CustomEvent("warning-toggle",{detail:e,bubbles:!0,composed:!0}))}render(){const s=this.uiState?.showSettings||!1,e=this.midiState?.midiConnected||!1,t=this.midiState?.midiDevices||[],n=this.midiState?.activeMidiDevice,i=this.midiState?.selectedMidiDevice||"",r=this.midiState?.selectedMidiChannel||1;return $`
      <aside class="panel sidebar-right ${s?"open":""}">
        <button class="close-btn" @click=${()=>this.actions?.toggleSettings()} title="Close Settings">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div class="sidebar-header">
          <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Settings</h3>
        </div>

        <div class="settings-section">
          <h4 class="section-title">General</h4>
          <label style="display: flex; align-items: center; cursor: pointer; color: #b0b3b8; font-size: 0.9rem;">
            <input type="checkbox" .checked=${this.showScaleWarnings} @change=${this.handleWarningToggle} style="margin-right: 8px; cursor: pointer;">
            Show warnings for out-of-scale notes
          </label>
        </div>

        <div class="settings-section">
          <h4 class="section-title">MIDI Settings</h4>
          
          <div class="midi-status">
            <div class="midi-icon-wrapper ${e?"connected":""}">
              <svg class="midi-svg" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke-width="4" />
                <circle cx="25" cy="70" r="6" fill="currentColor" />
                <circle cx="75" cy="70" r="6" fill="currentColor" />
                <circle cx="20" cy="40" r="6" fill="currentColor" />
                <circle cx="80" cy="40" r="6" fill="currentColor" />
                <circle cx="50" cy="20" r="6" fill="currentColor" />
                <path d="M 45 90 L 50 80 L 55 90 Z" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <div class="status-info">
              <div class="status-text ${e?"connected":"disconnected"}">
                ${e?"CONNECTED":"DISCONNECTED"}
              </div>
              ${e&&n?$`
                <div class="active-device-name" title="${n}">
                  ${n}
                </div>
              `:""}
            </div>
          </div>

          ${t.length>0?$`
            <div class="midi-config">
              <span class="config-label">Available Devices</span>
              <select class="midi-select" .value=${i} @change=${this.handleDeviceSelect}>
                ${t.map(o=>$`
                  <option value=${o} ?selected=${i===o}>${o}</option>
                `)}
              </select>

              <span class="config-label" style="margin-top: 8px;">MIDI Channel</span>
              <select class="midi-select" .value=${r.toString()} @change=${this.handleChannelSelect}>
                ${Array.from({length:16},(o,c)=>c+1).map(o=>$`
                  <option value=${o.toString()} ?selected=${r===o}>Channel ${o}</option>
                `)}
              </select>
              
              ${e&&n===i?$`
                <button class="midi-btn disconnect" @click=${this.handleDisconnect}>
                  Disconnect
                </button>
              `:$`
                <button class="midi-btn connect" @click=${this.handleConnect} ?disabled=${!i}>
                  Connect
                </button>
              `}
            </div>
          `:$`
            <div class="no-devices-msg">
              No MIDI devices detected
            </div>
          `}
        </div>
      </aside>
    `}};Wt.styles=Ye`
    :host {
      display: contents;
    }
    
    .sidebar-right {
      grid-column: 3 / 4;
      grid-row: 2 / 5;
      display: none;
      flex-direction: column;
      padding: 24px 20px;
      gap: 20px;
      background: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
      overflow-y: auto;
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
    }

    .sidebar-right.open {
      display: flex;
    }

    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      right: 16px;
      background: var(--bg-onyx);
      border: 1px solid var(--border-color);
      border-radius: 8px;
      width: 32px;
      height: 32px;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s;
    }
    .close-btn:hover {
      color: var(--text-primary);
      border-color: var(--text-primary);
    }

    .sidebar-header {
      width: 100%;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 12px;
      margin-bottom: 8px;
    }

    .settings-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .section-title {
      margin: 0;
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-muted);
    }

    .midi-status {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: var(--bg-onyx);
      border-radius: 8px;
      border: 1px solid var(--border-color);
    }

    .midi-icon-wrapper {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--bg-charcoal);
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid var(--border-color);
      color: var(--midi-svg-stroke-off);
      transition: all 0.3s ease;
    }
    
    .midi-icon-wrapper.connected {
      color: var(--status-green);
      border-color: var(--status-green);
      box-shadow: inset 0 0 10px rgba(57, 255, 20, 0.2);
    }

    .midi-svg {
      width: 20px;
      height: 20px;
    }

    .status-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .status-text {
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.1em;
    }
    
    .status-text.connected {
      color: var(--status-green);
    }
    
    .status-text.disconnected {
      color: var(--text-muted);
    }

    .active-device-name {
      font-size: 0.8rem;
      color: var(--text-primary);
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 140px;
    }

    .midi-config {
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: var(--bg-onyx);
      padding: 16px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
    }
    
    .config-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--text-secondary);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .midi-select {
      background: var(--bg-charcoal);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 8px 12px;
      border-radius: 6px;
      font-family: inherit;
      font-size: 0.85rem;
      outline: none;
      width: 100%;
    }

    .midi-btn {
      margin-top: 8px;
      padding: 10px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      border: none;
      transition: all 0.2s;
      width: 100%;
    }
    
    .midi-btn.connect {
      background: var(--accent-cyan);
      color: var(--accent-cyan-text);
    }
    
    .midi-btn.connect:hover:not(:disabled) {
      filter: brightness(1.1);
      box-shadow: 0 0 12px var(--accent-cyan-alpha);
    }
    
    .midi-btn.connect:disabled {
      background: var(--bg-charcoal);
      color: var(--text-muted);
      cursor: not-allowed;
    }
    
    .midi-btn.disconnect {
      background: var(--bg-charcoal);
      color: var(--text-primary);
      border: 1px solid var(--border-color);
    }
    
    .midi-btn.disconnect:hover {
      border-color: #ff4444;
      color: #ff4444;
    }
    
    .no-devices-msg {
      font-size: 0.75rem;
      color: var(--text-secondary);
      font-style: italic;
      text-align: center;
      padding: 12px;
      background: var(--bg-onyx);
      border-radius: 8px;
      border: 1px dashed var(--border-color);
    }

    @media (max-width: 1024px) {
      .sidebar-right {
        display: flex;
        position: absolute;
        top: var(--gap);
        right: var(--gap);
        bottom: var(--gap);
        width: 320px;
        z-index: 100;
        box-shadow: -4px 0 24px rgba(0, 0, 0, 0.5);
        transform: translateX(120%);
      }
      .sidebar-right.open {
        transform: translateX(0);
      }
    }
  `;ss([ze({context:es,subscribe:!0}),q()],Wt.prototype,"uiState",2);ss([ze({context:Js,subscribe:!0}),q()],Wt.prototype,"midiState",2);ss([ze({context:ts,subscribe:!0})],Wt.prototype,"actions",2);ss([q()],Wt.prototype,"showScaleWarnings",2);Wt=ss([Ke("settings-panel")],Wt);var og=Object.defineProperty,ag=Object.getOwnPropertyDescriptor,ti=(s,e,t,n)=>{for(var i=n>1?void 0:n?ag(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&og(e,t,i),i};let gn=class extends Se{onKeyboardPointerDown(s){s.currentTarget.setPointerCapture(s.pointerId),this.dispatchEvent(new CustomEvent("keyboard-pointer-down",{detail:{clientX:s.clientX},bubbles:!0,composed:!0})),s.preventDefault()}onKeyboardPointerMove(s){this.dispatchEvent(new CustomEvent("keyboard-pointer-move",{detail:{clientX:s.clientX},bubbles:!0,composed:!0}))}onKeyboardPointerUp(s){const e=s.currentTarget;try{e.releasePointerCapture(s.pointerId)}catch{}const t=s.target;let n=null;if(t.tagName==="rect"){const i=t.getAttribute("data-midi");i&&(n=Number(i))}this.dispatchEvent(new CustomEvent("keyboard-pointer-up",{detail:{midi:n},bubbles:!0,composed:!0}))}onKeyboardWheel(s){s.preventDefault(),this.dispatchEvent(new CustomEvent("keyboard-wheel",{detail:{deltaY:s.deltaY},bubbles:!0,composed:!0}))}render(){const s=this.chordState?.activeIndex??0,e=this.chordState?.progression??[],t=this.chordState?.voicedOffsets??{},n=this.uiState?.isMobileViewport??!1,i=e[s]??null,r=i?Be((i.tonic??"C")+"4")??60:60,o=(t[s]||[]).map(d=>r+d),c=n,a=c?[60,62,64,65,67,69,71,72,74,76,77,79,81,83,84]:[48,50,52,53,55,57,59,60,62,64,65,67,69,71,72,74,76,77,79,81,83,84],l=c?[{midi:61,afterIdx:0},{midi:63,afterIdx:1},{midi:66,afterIdx:3},{midi:68,afterIdx:4},{midi:70,afterIdx:5},{midi:73,afterIdx:7},{midi:75,afterIdx:8},{midi:78,afterIdx:10},{midi:80,afterIdx:11},{midi:82,afterIdx:12}]:[{midi:49,afterIdx:0},{midi:51,afterIdx:1},{midi:54,afterIdx:3},{midi:56,afterIdx:4},{midi:58,afterIdx:5},{midi:61,afterIdx:7},{midi:63,afterIdx:8},{midi:66,afterIdx:10},{midi:68,afterIdx:11},{midi:70,afterIdx:12},{midi:73,afterIdx:14},{midi:75,afterIdx:15},{midi:78,afterIdx:17},{midi:80,afterIdx:18},{midi:82,afterIdx:19}],h=c?150:220;return $`
      <div 
        class="keyboard-viz-container"
        style="width: ${c?154:224}px;"
        @pointerdown=${this.onKeyboardPointerDown}
        @pointermove=${this.onKeyboardPointerMove}
        @pointerup=${this.onKeyboardPointerUp}
        @pointercancel=${this.onKeyboardPointerUp}
        @wheel=${this.onKeyboardWheel}
      >
        <svg class="voicing-keyboard" width="${h}" height="42" viewBox="0 0 ${h} 42">
          ${a.map((d,f)=>{const p=f*10,m=o.includes(d);return en`
              <rect 
                x="${p}" 
                y="2" 
                width="9.2" 
                height="28" 
                rx="1" 
                class="white-key ${m?"active":""}"
                data-midi="${d}"
              />
            `})}

          ${l.map(({midi:d,afterIdx:f})=>{const p=(f+1)*10-3.2,m=o.includes(d);return en`
              <rect 
                x="${p}" 
                y="2" 
                width="6.4" 
                height="18" 
                rx="0.5" 
                class="black-key ${m?"active":""}"
                data-midi="${d}"
              />
            `})}

          ${o.map(d=>{const f=a.indexOf(d);let p=0;if(f!==-1)p=f*10+4.6;else{const g=l.find(b=>b.midi===d);g&&(p=(g.afterIdx+1)*10)}const m=Ot(us(d));return en`
              <text x="${p}" y="39" text-anchor="middle" class="keyboard-label">
                ${m}
              </text>
            `})}
        </svg>
      </div>
    `}};gn.styles=Ye`
    :host {
      display: block;
    }
    
    .keyboard-viz-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-charcoal);
      padding: 2px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      height: 46px;
      cursor: pointer;
      user-select: none;
      touch-action: none;
      box-shadow: var(--shadow-inset);
      transition: border-color 0.2s ease;
    }

    .keyboard-viz-container:hover {
      border-color: rgba(255, 255, 255, 0.15);
    }

    .voicing-keyboard {
      background: transparent;
    }

    .voicing-keyboard rect.white-key {
      fill: var(--kb-white-key-bg, #8b8e98);
      stroke: var(--kb-stroke, #121316);
      stroke-width: 0.75px;
      cursor: pointer;
      transition: fill 0.15s ease;
    }

    .voicing-keyboard rect.white-key.active {
      fill: var(--accent-cyan);
      stroke: var(--accent-cyan);
    }

    .voicing-keyboard rect.black-key {
      fill: var(--kb-black-key-bg, #121316);
      stroke: var(--kb-stroke, #121316);
      stroke-width: 0.75px;
      cursor: pointer;
      transition: fill 0.15s ease;
    }

    .voicing-keyboard rect.black-key.active {
      fill: var(--accent-cyan);
      stroke: var(--accent-cyan);
    }

    .voicing-keyboard text.keyboard-label {
      fill: var(--accent-cyan);
      font-size: 7px;
      font-weight: 800;
      pointer-events: none;
      text-shadow: 0 0 4px var(--accent-cyan-alpha);
    }
  `;ti([ze({context:es,subscribe:!0}),q()],gn.prototype,"uiState",2);ti([ze({context:Za,subscribe:!0}),q()],gn.prototype,"chordState",2);ti([ze({context:ts,subscribe:!0})],gn.prototype,"actions",2);gn=ti([Ke("voicing-keyboard")],gn);var cg=Object.defineProperty,lg=Object.getOwnPropertyDescriptor,K=(s,e,t,n)=>{for(var i=n>1?void 0:n?lg(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&cg(e,t,i),i};let X=class extends Se{constructor(){super(...arguments),this.uiProvider=new ls(this,{context:es}),this.midiProvider=new ls(this,{context:Js}),this.chordProvider=new ls(this,{context:Za}),this.actionsProvider=new ls(this,{context:ts}),this.theme=localStorage.getItem("circuit-chords.theme")||"dark",this.audioActive=!1,this.audioCleanup=null,this.activeTab="grid",this.activePatch=null,this.progression=[],this.originalKey="C",this.activeIndex=0,this.hideScaleWarningForNotes="",this.config={key:"C",scale:"chromatic",mode:"chromatic"},this.voicedOffsets={},this.isMobileViewport=!1,this.showQualitySelector=!1,this.hasSeenDrawerPeek=localStorage.getItem("circuit-chords.drawerPeekSeen")==="true",this.peekTimeout=null,this.isDraggingVoicing=!1,this.dragStartX=0,this.hasMovedVoicing=!1,this.playDebounceTimeout=null,this.autoPlay=!0,this.handleResize=()=>{this.isMobileViewport=window.innerWidth<520},this.transposeProgression=!1,this.chordCores=[],this.chordModifiers=[],this.getChordSuffixFn=null,this.inversion=0,this.source="",this.showSettings=!1,this.showHelp=!1,this.humanLoaded=!1,this.showHuman=!1,this.humanState=null,this.showScaleWarnings=localStorage.getItem("circuit-chords.showScaleWarnings")!=="false",this.midiConnected=!1,this.midiDevices=[],this.selectedMidiDevice="",this.activeMidiDevice=null,this.selectedMidiChannel=1,this.midiAccess=null,this.activeMidiTimeouts=new Map}willUpdate(s){super.willUpdate(s),this.uiProvider.setValue({theme:this.theme,activeTab:this.activeTab,isMobileViewport:this.isMobileViewport,showQualitySelector:this.showQualitySelector,showSettings:this.showSettings,showHelp:this.showHelp,showHuman:this.showHuman}),this.midiProvider.setValue({midiConnected:this.midiConnected,midiDevices:this.midiDevices,selectedMidiDevice:this.selectedMidiDevice,activeMidiDevice:this.activeMidiDevice,selectedMidiChannel:this.selectedMidiChannel}),this.chordProvider.setValue({progression:this.progression,originalKey:this.originalKey,activeIndex:this.activeIndex,config:this.config,voicedOffsets:this.voicedOffsets,transposeProgression:this.transposeProgression,inversion:this.inversion,hideScaleWarningForNotes:this.hideScaleWarningForNotes,showScaleWarnings:this.showScaleWarnings}),this.actionsProvider.setValue({setTheme:e=>{this.theme=e,localStorage.setItem("circuit-chords.theme",e),this.classList.toggle("theme-light",e==="light")},setActiveTab:e=>this.activeTab=e,toggleAudio:()=>this.toggleAudio(),playActiveVoicing:()=>this.playActiveVoicing(),toggleMidi:()=>{},setProgression:e=>this.progression=e,setActiveIndex:e=>this.activeIndex=e,updateConfig:e=>this.config={...this.config,...e},setVoicedOffsets:(e,t)=>this.voicedOffsets={...this.voicedOffsets,[e]:t},setInversion:e=>this.inversion=e,toggleAutoPlay:()=>this.autoPlay=!this.autoPlay,toggleSettings:()=>this.toggleSettings(),toggleHelp:()=>this.toggleHelp(),toggleHuman:()=>this.toggleHuman()})}get isDebugMode(){return new URLSearchParams(window.location.search).has("debug")}get isCircuitTracksConnected(){return this.isDebugMode?!0:this.midiConnected&&!!this.activeMidiDevice&&this.activeMidiDevice.toLowerCase().includes("circuit tracks")}getOrCreateMockPatch(){const s=new Uint8Array(Ns);return s[45]=1,s[46]=0,s[64]=64,s[70]=1,s[71]=64,s[73]=64,s[79]=10,s[80]=50,s[81]=64,s[82]=20,co(s)}toggleHelp(){this.showHelp=!this.showHelp,this.showHelp&&(this.showSettings=!1,this.showHuman=!1)}toggleSettings(){this.showSettings=!this.showSettings,this.showSettings&&(this.showHelp=!1,this.showHuman=!1)}toggleHuman(){this.showHuman=!this.showHuman,this.showHuman&&(this.showHelp=!1,this.showSettings=!1)}handleHumanChange(s){this.humanState=s.detail}handleHumanPreview(s){this.humanState=s.detail,this.playActiveVoicing()}toggleScaleWarnings(s){this.showScaleWarnings=s,localStorage.setItem("circuit-chords.showScaleWarnings",String(s))}async toggleAudio(){try{this.audioActive?await Nm():await Pm()}catch(s){console.warn("Failed to toggle audio:",s)}}toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",localStorage.setItem("circuit-chords.theme",this.theme),this.classList.toggle("theme-light",this.theme==="light")}connectedCallback(){super.connectedCallback(),this.isDebugMode&&(this.activePatch=this.getOrCreateMockPatch()),this.initMidi(),import("https://warmsynths.github.io/human-midi/human-engine.js").then(t=>{this.humanLoaded=!0,this.chordCores=t.CHORD_CORES||[],this.chordModifiers=t.CHORD_MODIFIERS||[],this.getChordSuffixFn=t.getChordSuffix;const n=new URLSearchParams(window.location.search);if(n.has("state")){const i=n.get("state"),r=t.decodeProgression(i);if(r&&r.chords){this.applySharedProgression(r);return}}this.loadDefaultProgression()}).catch(t=>{console.warn("Could not load human panel or parse state:",t),this.loadDefaultProgression()}),this.classList.toggle("theme-light",this.theme==="light"),this.audioActive=Om(),this.audioCleanup=$m(t=>{this.audioActive=t==="running"}),typeof window<"u"&&(this.isMobileViewport=window.innerWidth<520,window.addEventListener("resize",this.handleResize))}disconnectedCallback(){this.audioCleanup&&this.audioCleanup(),typeof window<"u"&&window.removeEventListener("resize",this.handleResize),super.disconnectedCallback()}initMidi(){typeof navigator<"u"&&"requestMIDIAccess"in navigator&&navigator.requestMIDIAccess({sysex:!0}).then(s=>{this.midiAccess=s,this.updateMidiStatus(s),s.onstatechange=()=>{this.updateMidiStatus(s)}}).catch(s=>{console.warn("MIDI access request failed:",s),this.midiConnected=!1,this.midiDevices=[]})}updateMidiStatus(s){const e=[];s&&s.inputs&&s.inputs.forEach(t=>{t.state==="connected"&&t.name&&!e.includes(t.name)&&e.push(t.name)}),s&&s.outputs&&s.outputs.forEach(t=>{t.state==="connected"&&t.name&&!e.includes(t.name)&&e.push(t.name)}),this.midiDevices=e,(this.selectedMidiDevice===""||!e.includes(this.selectedMidiDevice))&&(this.selectedMidiDevice=e.length>0?e[0]:""),this.activeMidiDevice!==null&&!e.includes(this.activeMidiDevice)?(this.activeMidiDevice=null,this.midiConnected=!1):this.activeMidiDevice!==null?this.midiConnected=!0:this.midiConnected=!1}connectMidiDevice(){this.selectedMidiDevice&&(this.activeMidiDevice=this.selectedMidiDevice,this.midiConnected=!0,this.midiAccess&&this.midiAccess.inputs.forEach(s=>{s.name===this.activeMidiDevice&&(s.onmidimessage=this.handleMidiMessage.bind(this))}))}handleMidiMessage(s){const e=s.data;if(e.length===Ns&&e[0]===240)try{this.activePatch=co(e)}catch(t){console.warn("Failed to parse sysex patch dump",t)}}sendSysexCommand(s){this.midiAccess&&this.activeMidiDevice&&this.midiAccess.outputs.forEach(e=>{e.name===this.activeMidiDevice&&e.send(s)})}handlePatchChange(s){if(!this.activePatch)return;const{path:e,value:t}=s.detail,n={...this.activePatch};n.oscillators=[{...n.oscillators[0]},{...n.oscillators[1]}],n.filter={...n.filter},n.mixer={...n.mixer},n.envelopes=[{...n.envelopes[0]},{...n.envelopes[1]},{...n.envelopes[2]}];const i=e.split(".");let r=n;for(let c=0;c<i.length-1;c++)r=r[i[c]];r[i[i.length-1]]=t,this.activePatch=n;const o=Bm(n);this.sendSysexCommand(o)}handleRequestDump(){const s=Um(0);this.sendSysexCommand(s)}handleLoadSlot(s){const e=s.detail.slot;this.midiAccess&&this.activeMidiDevice&&(this.midiAccess.outputs.forEach(t=>{t.name===this.activeMidiDevice&&t.send([192,e])}),setTimeout(()=>{this.handleRequestDump()},50))}disconnectMidiDevice(){this.activeMidiDevice=null,this.midiConnected=!1}applySharedProgression(s){const e=s.chords.map(t=>({symbol:t.symbol,tonic:t.root,quality:t.quality,core:t.core,modifier:t.modifier,notes:t.midiNotes?t.midiNotes.map(n=>Ot(us(n))):[],intervals:[],aliases:[],exactMidiNotes:t.midiNotes}));if(e.length>0){this.progression=e,this.source="Shared from Chord Voyager",this.activeIndex=0;const t={};e.forEach((o,c)=>{if(o.exactMidiNotes&&o.exactMidiNotes.length>0){const a=Be((o.tonic??"C")+"4")??60;t[c]=o.exactMidiNotes.map(l=>l-a)}else t[c]=this.getDefaultVoicedOffsets(o)}),this.voicedOffsets=t;const n=e[0],i=this.normalizeKey(n?.tonic)??this.config.key;this.originalKey=i;const r="chromatic";this.config={...this.config,key:i,scale:r,mode:"chromatic"},s.humanState&&(this.humanState=s.humanState)}}loadDefaultProgression(){let s=window.location.search;window.location.hash&&!window.location.hash.startsWith("#/")&&(s+=window.location.hash);const e=new URLSearchParams(s);if(e.has("state"))return;const t=e.get("p"),n=t?t.trim():"Cmaj7 Am7 Dm7 G7";let i=di(n);if(i.length===0&&t&&(i=di("Cmaj7 Am7 Dm7 G7")),i.length>0){this.progression=i,this.source=t&&i.length>0?n:"Cmaj7 Am7 Dm7 G7",this.activeIndex=0,this.initVoicedOffsets();const r=i[0],o=this.normalizeKey(r?.tonic)??this.config.key;this.originalKey=o;const c="chromatic";this.config={...this.config,key:o,scale:c,mode:"chromatic"}}}initVoicedOffsets(){const s={};this.progression.forEach((e,t)=>{if(e.exactMidiNotes&&e.exactMidiNotes.length>0){const n=Be((e.tonic??"C")+"4")??60;s[t]=e.exactMidiNotes.map(i=>i-n).sort((i,r)=>i-r)}else s[t]=this.getDefaultVoicedOffsets(e)}),this.voicedOffsets=s}getDefaultVoicedOffsets(s){return s.intervals.map(t=>rl(t).semitones).filter(t=>typeof t=="number").sort((t,n)=>t-n)}shiftVoicingInversion(s,e){if(s.length===0)return[];let t=[...s].sort((c,a)=>c-a);if(e>0)for(let c=0;c<e;c++){const a=t.shift();t.push(a+12),t.sort((l,h)=>l-h)}else if(e<0)for(let c=0;c<Math.abs(e);c++){const a=t.pop();t.unshift(a-12),t.sort((l,h)=>l-h)}const n=Be((this.getTransposedProgression()[this.activeIndex]?.tonic??"C")+"4")??60,r=(this.isMobileViewport?60:48)-n,o=84-n;return t=t.map(c=>{let a=c;for(;a<r;)a+=12;for(;a>o;)a-=12;return a}).sort((c,a)=>c-a),Array.from(new Set(t))}onKeyboardPointerDown(s){s.currentTarget.setPointerCapture(s.pointerId),this.isDraggingVoicing=!0,this.dragStartX=s.clientX,this.hasMovedVoicing=!1,s.preventDefault()}onKeyboardPointerMove(s){if(!this.isDraggingVoicing)return;const e=s.clientX-this.dragStartX;Math.abs(e)>4&&(this.hasMovedVoicing=!0);const n=Math.round(e/15);if(n!==0){this.dragStartX=s.clientX;const i=this.voicedOffsets[this.activeIndex]||[];if(i.length>0){const r=this.shiftVoicingInversion(i,n);this.voicedOffsets={...this.voicedOffsets,[this.activeIndex]:r},this.autoPlay&&this.playActiveVoicingDebounced()}}}onKeyboardPointerUp(s){if(!this.isDraggingVoicing)return;this.isDraggingVoicing=!1;const e=s.currentTarget;try{e.releasePointerCapture(s.pointerId)}catch{}if(!this.hasMovedVoicing){const t=s.target;if(t.tagName==="rect"){const n=t.getAttribute("data-midi");if(n){const i=Number(n),r=this.getTransposedProgression()[this.activeIndex]??null;if(r){const o=Be((r.tonic??"C")+"4")??60,c=i-o,a=[...this.voicedOffsets[this.activeIndex]||[]],l=a.indexOf(c);l!==-1?a.splice(l,1):a.length<6&&a.push(c),this.voicedOffsets={...this.voicedOffsets,[this.activeIndex]:a.sort((h,u)=>h-u)},this.autoPlay&&this.playActiveVoicingDebounced()}}}}}playActiveVoicingDebounced(){this.playDebounceTimeout&&clearTimeout(this.playDebounceTimeout),this.playDebounceTimeout=setTimeout(()=>{this.playActiveVoicing()},80)}onKeyboardWheel(s){s.preventDefault();const e=s.deltaY>0?-1:1,t=this.voicedOffsets[this.activeIndex]||[];if(t.length>0){const n=this.shiftVoicingInversion(t,e);this.voicedOffsets={...this.voicedOffsets,[this.activeIndex]:n},this.autoPlay&&this.playActiveVoicingDebounced()}}renderVoicingKeyboard(){const e=this.getTransposedProgression()[this.activeIndex]??null,t=e?Be((e.tonic??"C")+"4")??60:60,n=(this.voicedOffsets[this.activeIndex]||[]).map(l=>t+l),i=this.isMobileViewport,r=i?[60,62,64,65,67,69,71,72,74,76,77,79,81,83,84]:[48,50,52,53,55,57,59,60,62,64,65,67,69,71,72,74,76,77,79,81,83,84],o=i?[{midi:61,afterIdx:0},{midi:63,afterIdx:1},{midi:66,afterIdx:3},{midi:68,afterIdx:4},{midi:70,afterIdx:5},{midi:73,afterIdx:7},{midi:75,afterIdx:8},{midi:78,afterIdx:10},{midi:80,afterIdx:11},{midi:82,afterIdx:12}]:[{midi:49,afterIdx:0},{midi:51,afterIdx:1},{midi:54,afterIdx:3},{midi:56,afterIdx:4},{midi:58,afterIdx:5},{midi:61,afterIdx:7},{midi:63,afterIdx:8},{midi:66,afterIdx:10},{midi:68,afterIdx:11},{midi:70,afterIdx:12},{midi:73,afterIdx:14},{midi:75,afterIdx:15},{midi:78,afterIdx:17},{midi:80,afterIdx:18},{midi:82,afterIdx:19}],c=i?150:220;return $`
      <div 
        class="keyboard-viz-container"
        style="width: ${i?154:224}px;"
        @pointerdown=${l=>this.onKeyboardPointerDown(l)}
        @pointermove=${l=>this.onKeyboardPointerMove(l)}
        @pointerup=${l=>this.onKeyboardPointerUp(l)}
        @pointercancel=${l=>this.onKeyboardPointerUp(l)}
        @wheel=${l=>this.onKeyboardWheel(l)}
      >
        <svg class="voicing-keyboard" width="${c}" height="42" viewBox="0 0 ${c} 42">
          <!-- 1. Render White Keys -->
          ${r.map((l,h)=>{const u=h*10,d=n.includes(l);return en`
              <rect 
                x="${u}" 
                y="2" 
                width="9.2" 
                height="28" 
                rx="1" 
                class="white-key ${d?"active":""}"
                data-midi="${l}"
              />
            `})}

          <!-- 2. Render Black Keys -->
          ${o.map(({midi:l,afterIdx:h})=>{const u=(h+1)*10-3.2,d=n.includes(l);return en`
              <rect 
                x="${u}" 
                y="2" 
                width="6.4" 
                height="18" 
                rx="0.5" 
                class="black-key ${d?"active":""}"
                data-midi="${l}"
              />
            `})}

          <!-- 3. Render note labels under active keys -->
          ${n.map(l=>{const h=r.indexOf(l);let u=0;if(h!==-1)u=h*10+4.6;else{const f=o.find(p=>p.midi===l);f&&(u=(f.afterIdx+1)*10)}const d=Ot(us(l));return en`
              <text x="${u}" y="39" text-anchor="middle" class="keyboard-label">
                ${d}
              </text>
            `})}
        </svg>
      </div>
    `}render(){const s=this.getTransposedProgression(),e=s[this.activeIndex]??null,t=Lm(e,this.config),n=e?Be((e.tonic??"C")+"4")??60:60,r=(this.voicedOffsets[this.activeIndex]||[]).map(a=>{const l=n+a;let h=t.find(u=>u.midiNote?Be(u.midiNote)===l:!1);return h||(h=t.find(u=>u.midiNote?Be(u.midiNote)===l+12:!1)),h?{note:h.note,row:h.row,col:h.col,index:h.index}:null}).filter(a=>a!==null),o=e?e.notes.map(a=>Jt(a)).filter(Boolean):[],c=e&&this.config.mode==="collapsed"?o.filter(a=>!t.some(l=>l.note===a)):[];return $`
      <div class="app-grid">
        <!-- Brand Header Bar -->
        <brand-header></brand-header>

        <!-- 1. Left Navigation Tab Bar -->
        <sidebar-nav .isCircuitTracksConnected=${this.isCircuitTracksConnected}></sidebar-nav>

        <!-- 2. Top Header Bar (active config summary + audio controls) -->
        <header class="panel header-top">
          <div class="config-group">
            <span class="config-label">Key / Scale</span>
            <div style="display:flex; gap:8px; align-items:center;">
              <span style="font-size:1rem; font-weight:800; color:var(--accent-cyan); letter-spacing:-0.02em;">${this.config.key}</span>
              <span style="color:#444; font-size:0.8rem;">·</span>
              <span style="font-size:0.75rem; font-weight:600; color:#aaa; text-transform:uppercase; letter-spacing:0.06em;">${this.config.scale}</span>
            </div>
          </div>

          <div style="flex:1;"></div>

          <div class="relocated-audio-controls">
            <!-- Audio State Button (Mute) -->
            <button 
              class="audio-btn ${this.audioActive?"active":""}" 
              @click=${this.toggleAudio} 
              title="${this.audioActive?"Disable Audio":"Enable Audio"}"
            >
              ${this.audioActive?$`
                <svg viewBox="0 0 24 24">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              `:$`
                <svg viewBox="0 0 24 24">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              `}
            </button>

            <!-- Human toggle Button -->
            ${this.humanLoaded?$`
              <button 
                class="audio-btn ${this.showHuman?"active":""}" 
                @click=${this.toggleHuman} 
                title="Toggle Human Settings"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
            `:null}
          </div>
        </header>

        <!-- 3. Center Main Content Area -->
        <main class="panel main-content">
          ${c.length>0&&this.showScaleWarnings&&this.hideScaleWarningForNotes!==c.join(",")?$`
            <div class="scale-warning" style="display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px; flex-shrink: 0;">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Chord note(s) (${c.join(", ")}) outside scale are hidden in Scale Collapse mode. Switch to Chromatic mode to play.</span>
              </div>
              <div style="display: flex; align-items: center;">
                <label style="display: flex; align-items: center; cursor: pointer; font-size: 0.85rem; opacity: 0.8; margin-right: 12px; margin-bottom: 0;">
                  <input type="checkbox" @change=${a=>this.toggleScaleWarnings(!a.target.checked)} style="margin-right: 6px; cursor: pointer;">
                  Don't show again
                </label>
                <button 
                  @click=${()=>this.hideScaleWarningForNotes=c.join(",")}
                  style="background: transparent; border: none; color: inherit; cursor: pointer; padding: 4px; display: flex; align-items: center; justify-content: center;"
                  title="Dismiss"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>
          `:null}

          <!-- Tab 1: Grid View -->
          <div class="circuit-grid" style="display: ${this.activeTab==="grid"?"block":"none"}">
            <circuit-grid .pads=${t} .recipe=${r} @pad-clicked=${a=>this.onPadClicked(a)}></circuit-grid>
          </div>

          <!-- Tab 2: Key & Scale Pad Picker -->
          <div class="data-input-view" style="display: ${this.activeTab==="data"?"flex":"none"}">

            <!-- Keynote + Scale Pad Picker — Circuit Tracks layout -->
            <div class="pad-picker">

              <!-- Keynote Section: row 1 = sharps, row 2 = naturals -->
              <div class="pad-picker-section">
                <div class="pad-picker-section-label">Keynote</div>
                <!-- Row 1 (pads 1–8): gaps at positions 1, 4, 8; sharps at 2,3,5,6,7 -->
                <div class="pad-row keynote-row">
                  ${["","C#","D#","","F#","G#","A#",""].map(a=>a===""?$`
                    <div class="picker-pad pad-root pad-dim" aria-hidden="true"></div>
                  `:$`
                    <button
                      class="picker-pad pad-root ${this.config.key===a?"pad-active":""}"
                      @click=${()=>this.onKeyChange(a)}
                      title="Root: ${a}"
                      aria-label="Root note ${a}">
                      ${a}
                    </button>
                  `)}
                </div>
                <!-- Row 2 (pads 9–16): C D E F G A B + dim -->
                <div class="pad-row keynote-row">
                  ${["C","D","E","F","G","A","B",""].map(a=>a===""?$`
                    <div class="picker-pad pad-root pad-dim" aria-hidden="true"></div>
                  `:$`
                    <button
                      class="picker-pad pad-root ${this.config.key===a?"pad-active":""}"
                      @click=${()=>this.onKeyChange(a)}
                      title="Root: ${a}"
                      aria-label="Root note ${a}">
                      ${a}
                    </button>
                  `)}
                </div>
              </div>

              <!-- Scale Section: row 3 = scales 1–8, row 4 = scales 9–16 -->
              <div class="pad-picker-section">
                <div class="pad-picker-section-label">Scale</div>
                <!-- Row 3 (pads 17–24): first 8 scales -->
                <div class="pad-row scale-row">
                  ${oo.slice(0,8).map(a=>$`
                    <button
                      class="picker-pad pad-scale ${this.config.scale===a?"pad-active":""}"
                      @click=${()=>this.onScaleChange(a)}
                      title="Scale: ${a}"
                      aria-label="Scale ${cs[a]??a}">
                      ${cs[a]??a}
                    </button>
                  `)}
                </div>
                <!-- Row 4 (pads 25–32): next 8 scales -->
                <div class="pad-row scale-row">
                  ${oo.slice(8,16).map(a=>$`
                    <button
                      class="picker-pad pad-scale ${this.config.scale===a?"pad-active":""}"
                      @click=${()=>this.onScaleChange(a)}
                      title="Scale: ${a}"
                      aria-label="Scale ${cs[a]??a}">
                      ${cs[a]??a}
                    </button>
                  `)}
                </div>
              </div>

            </div>
          </div>

          <!-- Tab 3: Chord Input -->
          <div class="chord-input-view" style="display: ${this.activeTab==="input"?"flex":"none"}">
            <div class="chord-input-header">
              <div class="chord-input-title">Chord Progression</div>
              <div class="chord-input-hint">Enter chords separated by spaces — e.g. <code>Cmaj7 Am7 Dm7 G7</code></div>
            </div>
            <chord-input .value=${this.source} @progression-parsed=${this.onParsed}></chord-input>
          </div>

          <!-- Tab 4: Patch Editor -->
          <div class="patch-editor-view" style="display: ${this.activeTab==="patch"?"block":"none"}; height: 100%;">
            <circuit-patch-editor 
              .patch=${this.activePatch} 
              .midiConnected=${this.midiConnected||this.isDebugMode}
              @patch-change=${this.handlePatchChange}
              @request-dump=${this.handleRequestDump}
              @load-slot=${this.handleLoadSlot}
            ></circuit-patch-editor>
          </div>
        </main>

        <!-- Sidebar Backdrop for Mobile overlay -->
        <div class="sidebar-backdrop ${this.showSettings||this.showHelp||this.showHuman?"open":""}" @click=${()=>{this.showSettings=!1,this.showHelp=!1,this.showHuman=!1}}></div>

        <!-- Human Sidebar Panel -->
        ${this.humanLoaded?$`
          <aside class="panel sidebar-human ${this.showHuman?"open":""}">
            <!-- Close Button -->
            <button class="close-btn" @click=${()=>this.showHuman=!1} title="Close Human">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <human-panel 
              .heading=${"Human Settings"}
              .hideInput=${!0} 
              .debugExpanded=${!1}
              @human-change=${this.handleHumanChange}
              @human-preview=${this.handleHumanPreview}
            ></human-panel>
          </aside>
        `:null}

        <!-- 4. Right Sidebar (MIDI HUD / Modal on Desktop) -->
        <settings-panel @device-select=${a=>this.selectedMidiDevice=a.detail} @channel-select=${a=>this.selectedMidiChannel=a.detail} @midi-connect=${()=>this.connectMidiDevice()} @midi-disconnect=${()=>this.disconnectMidiDevice()} @warning-toggle=${a=>this.toggleScaleWarnings(a.detail)}></settings-panel>

        <!-- Help Sidebar/Modal Panel -->
        <aside class="panel sidebar-help ${this.showHelp?"open":""}">
          <!-- Close Button -->
          <button class="close-btn" @click=${()=>this.showHelp=!1} title="Close Help">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Sidebar Header -->
          <div class="sidebar-header" style="width: 100%; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 12px; margin-bottom: 8px;">
            <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Quick Start Guide</h3>
          </div>

          <!-- Section 1: Entering Chords -->
          <div class="help-section">
            <h4 class="help-title">1. Enter Progressions</h4>
            <p class="help-text">
              Go to the <strong>Data Input View</strong> (second icon from the top in the left menu) to write or paste your chord progression (e.g. <code style="color: var(--accent-cyan); background: var(--bg-onyx); padding: 2px 6px; border-radius: 4px; font-family: monospace;">Am7 D9 Gmaj7</code>).
            </p>
          </div>

          <!-- Section 2: Playing Mapped Pads -->
          <div class="help-section">
            <h4 class="help-title">2. View & Play Pads</h4>
            <p class="help-text">
              Switch back to the <strong>Grid View</strong> (top icon in the left menu) to see the 4x8 Circuit pad grid. 
            </p>
            <ul class="help-list">
              <li><span class="help-step-number">1</span><strong>Target Voicings</strong>: Pads with white border rings show the notes to press to play the active chord. The numbers indicate the recommended finger/voicing order.</li>
              <li><strong>Interactive Preview</strong>: Click or tap any pad to play its note individually.</li>
            </ul>
          </div>

          <!-- Section 3: Customizing Layouts -->
          <div class="help-section">
            <h4 class="help-title">3. Configure Layouts</h4>
            <p class="help-text">
              Open the <strong>Settings Panel</strong> (gear icon in the left menu) to configure:
            </p>
            <ul class="help-list">
              <li><strong>Scale</strong>: Pick a scale in the Data Input view — the grid automatically collapses to show only notes in that scale. Selecting <em>Chromatic</em> switches to a full keyboard layout.</li>
              <li><strong>Voicing Types</strong>: Choose between Triad, Seventh, or Spread configurations.</li>
            </ul>
          </div>

          <!-- Section 4: WebMIDI Connect -->
          <div class="help-section">
            <h4 class="help-title">4. Hardware Integration</h4>
            <p class="help-text">
              Connect external MIDI controllers or synth modules. The <strong>WebMIDI LED indicator</strong> in the top header will light up green once a valid device is successfully established.
            </p>
          </div>
        </aside>

        <!-- 5. Bottom Timeline Footer -->
        <footer class="panel footer-timeline ${this.showQualitySelector&&!this.hasSeenDrawerPeek?"peek-hint":""}">
          ${this.showQualitySelector?$`
            <div class="footer-drawer-content">
              <div class="footer-voicing-row">
                <span class="footer-voicing-label">Voicing</span>
                ${$`<voicing-keyboard @keyboard-pointer-down=${a=>this.onKeyboardPointerDown(a.detail)} @keyboard-pointer-move=${a=>this.onKeyboardPointerMove(a.detail)} @keyboard-pointer-up=${a=>{const l=a.detail;l.target={tagName:l.midi?"rect":"svg",getAttribute:()=>l.midi},this.onKeyboardPointerUp(l)}} @keyboard-wheel=${a=>{const l=a.detail;l.preventDefault=()=>{},this.onKeyboardWheel(l)}}></voicing-keyboard>`}
              </div>
              <div class="quality-selector-row" style="flex-direction: column; gap: 4px;">
                <div class="quality-row-group" style="display: flex; gap: 4px; overflow-x: auto; padding-bottom: 2px;">
                  ${this.chordCores.map(a=>{const l=this.progression[this.activeIndex];let h=!1;if(l)if(l.core!==void 0)h=l.core===a.value;else{const u=l.quality||"",d=l.symbol||"";(a.value==="maj"&&(u==="Major"||d.endsWith("M")&&u!=="Diminished"&&u!=="Minor"||d.endsWith("maj")||d.length===l.tonic?.length)||a.value==="m"&&u==="Minor"||a.value==="dim"&&u==="Diminished"||a.value==="sus4"&&d.toLowerCase().includes("sus"))&&(h=!0)}return $`
                      <button 
                        class="quality-pill ${h?"active":""}"
                        @click=${()=>this.changeActiveChordCore(a.value)}
                      >
                        ${a.label}
                      </button>
                    `})}
                </div>
                <div class="quality-row-group" style="display: flex; gap: 4px; overflow-x: auto;">
                  ${this.chordModifiers.map(a=>{const l=this.progression[this.activeIndex];let h=!1;if(l)if(l.modifier!==void 0)h=l.modifier===a.value;else{const u=l.symbol||"";(a.value==="7"&&u.includes("7")&&!u.includes("maj7")||a.value==="maj7"&&u.includes("maj7")||a.value==="9"&&u.includes("9")||a.value==="6"&&u.includes("6")||a.value===""&&!u.includes("7")&&!u.includes("9")&&!u.includes("6"))&&(h=!0)}return $`
                      <button 
                        class="quality-pill ${h?"active":""}"
                        @click=${()=>this.changeActiveChordModifier(a.value)}
                      >
                        ${a.label}
                      </button>
                    `})}
                </div>
              </div>
            </div>
          `:null}
          <progression-stepper
            .originalChords=${this.progression}
            .keyChords=${this.transposeProgression&&this.originalKey!==this.config.key?s:[]}
            .keyLabel=${this.config.key}
            .activeIndex=${this.activeIndex}
            @chord-selected=${a=>this.onChordSelected(a)}
          ></progression-stepper>
        </footer>

        <!-- 6. Bottom Links Footer -->
        <footer class="app-links-footer">
          <a href="https://github.com/warmsynths/circuit-chords" target="_blank" rel="noopener noreferrer" class="footer-link">
            <svg class="footer-icon" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            GitHub
          </a>
          <span class="footer-divider">|</span>
          <span class="footer-text">
            Made with <span class="heart-icon">💖</span> by <a href="mailto:warmsynthsiloveyou@gmail.com" class="footer-link-highlight">warmsynths</a>
          </span>
          <span class="footer-divider">|</span>
          <a href="https://ko-fi.com/warmsynths" target="_blank" rel="noopener noreferrer" class="footer-link">
            <span class="coffee-icon">☕</span>
            Support the Voyage
          </a>
        </footer>
      </div>
    `}changeActiveChordCore(s){if(!this.getChordSuffixFn)return;const e=this.progression[this.activeIndex];if(!e)return;let t=e.modifier;if(t===void 0){const i=e.symbol||"";i.includes("7")&&!i.includes("maj7")?t="7":i.includes("maj7")?t="maj7":i.includes("9")?t="9":i.includes("6")?t="6":t=""}const n=this.getChordSuffixFn(s,t);this.updateActiveChordSuffix(n,s,t)}changeActiveChordModifier(s){if(!this.getChordSuffixFn)return;const e=this.progression[this.activeIndex];if(!e)return;let t=e.core;if(t===void 0){const i=e.quality||"",r=e.symbol||"";i==="Minor"?t="m":i==="Diminished"?t="dim":r.includes("sus")?t="sus4":t="maj"}const n=this.getChordSuffixFn(t,s);this.updateActiveChordSuffix(n,t,s)}updateActiveChordSuffix(s,e,t){const n=this.progression[this.activeIndex];if(!n)return;const r=`${n.tonic||"C"}${s}`,o=gs(r);if(!o.empty&&o.notes.length>0){const c={symbol:r,tonic:o.tonic,quality:o.quality,core:e,modifier:t,notes:o.notes,intervals:o.intervals,aliases:o.aliases},a=[...this.progression];a[this.activeIndex]=c,this.progression=a,this.voicedOffsets={...this.voicedOffsets,[this.activeIndex]:this.getDefaultVoicedOffsets(c)},this.updateSourceFromProgression(),this.autoPlay&&this.playActiveVoicingDebounced()}}updateSourceFromProgression(){this.source=this.progression.map(s=>s.symbol).join(" ")}playActiveVoicing(){const e=this.getTransposedProgression()[this.activeIndex]??null;if(!e)return;let t=this.voicedOffsets[this.activeIndex]||[];t.length===0&&(t=this.getDefaultVoicedOffsets(e));const n=Be((e.tonic??"C")+"4")??60,i=t.map(r=>us(n+r)).filter(r=>r!==null);i.length>0&&(Am(i,.7,this.humanState),this.sendMidiNotes(i,700,this.humanState))}sendMidiNotes(s,e=700,t){if(!this.midiConnected||!this.activeMidiDevice||!this.midiAccess)return;let n=null;for(const c of this.midiAccess.outputs.values())if(c.name===this.activeMidiDevice){n=c;break}if(!n)return;const i=this.selectedMidiChannel-1&15,r=144|i,o=128|i;s.forEach((c,a)=>{const l=Be(c);if(l===null)return;this.activeMidiTimeouts.has(l)&&clearTimeout(this.activeMidiTimeouts.get(l));let h=100,u=0,d=e;if(t){const{minVelocity:p,maxVelocity:m,spread:g,microTiming:b,humanVariance:w,duration:k}=t;h=Math.round(p+Math.random()*(m-p));const C=a*g*.1,v=(Math.random()-.5)*b*.05,y=(Math.random()-.5)*w*.03;u=Math.max(0,Math.round((C+v+y)*1e3)),d=Math.max(50,Math.round(k*1e3*(1+(Math.random()-.5)*.2*w)))}const f=setTimeout(()=>{try{n.send([r,l,h])}catch(m){console.warn("Failed to send MIDI Note On:",m)}const p=setTimeout(()=>{try{n.send([o,l,0])}catch{}this.activeMidiTimeouts.delete(l)},d);this.activeMidiTimeouts.set(l,p)},u);this.activeMidiTimeouts.set(l,f)})}onPadClicked(s){s.detail&&s.detail.midiNote&&this.sendMidiNotes([s.detail.midiNote],350)}onKeyChange(s){this.config={...this.config,key:s}}onScaleChange(s){const e=s==="chromatic"?"chromatic":"collapsed";this.config={...this.config,scale:s,mode:e}}onChordSelected(s){const e=s.detail;this.activeIndex===e?this.showQualitySelector=!this.showQualitySelector:(this.activeIndex=e,this.showQualitySelector=!1,this.autoPlay&&setTimeout(()=>this.playActiveVoicing(),20),this.hasSeenDrawerPeek||(this.hasSeenDrawerPeek=!0,localStorage.setItem("circuit-chords.drawerPeekSeen","true"),this.showQualitySelector=!0,this.peekTimeout&&clearTimeout(this.peekTimeout),this.peekTimeout=setTimeout(()=>{this.showQualitySelector=!1,this.peekTimeout=null},1500)))}onParsed(s){this.progression=s.detail.progression,this.source=s.detail.source,this.activeIndex=0,this.initVoicedOffsets();const e=s.detail.progression[0],t=this.normalizeKey(e?.tonic)??this.config.key;this.originalKey=t;const n="chromatic";e?.tonic&&(this.config={...this.config,key:t,scale:n,mode:"chromatic"}),this.autoPlay&&this.progression.length>0&&setTimeout(()=>this.playActiveVoicing(),50),this.progression.length>0&&(this.activeTab="grid")}getTransposedProgression(){if(this.progression.length===0)return[];if(!this.transposeProgression)return this.progression;const s=this.getKeyShiftSemitones();return s===0?this.progression:this.progression.map(e=>this.transposeParsedChord(e,s)).filter(e=>!!e)}getKeyShiftSemitones(){const s=ci.indexOf(this.originalKey),e=ci.indexOf(this.config.key);return s===-1||e===-1?0:(e-s+12)%12}transposeParsedChord(s,e){const t=this.transposeChordSymbol(s.symbol,e);if(!t)return null;const n=gs(t);return n.empty||n.notes.length===0?null:{symbol:t,tonic:n.tonic,quality:n.quality,notes:n.notes,intervals:n.intervals,aliases:n.aliases}}transposeChordSymbol(s,e){const t=s.match(/^([A-G](?:#{1,2}|b{1,2})?)(.*?)(?:\/([A-G](?:#{1,2}|b{1,2})?))?$/);if(!t)return null;const n=this.transposeNoteName(t[1],e);if(!n)return null;const i=t[2]??"",r=t[3]?this.transposeNoteName(t[3],e):null;return t[3]&&!r?null:`${n}${i}${r?`/${r}`:""}`}transposeNoteName(s,e){const t=$o(e),n=Vo(s,t);return this.normalizeKey(n)}normalizeKey(s){const e=Ot(s??"");if(!e)return null;const t=Fo(e);return ci.includes(t)?t:null}};X.styles=Ye`
    :host {
      /* 1. DESIGN THEME & COLOR PALETTE */
      /* Default Dark Mode (Circuit Tracks) */
      --bg-onyx: #121316;
      --bg-charcoal: #1a1b20;
      --bg-charcoal-alpha: rgba(26, 27, 32, 0.85);
      --kb-white-key-bg: #8b8e98;
      --kb-black-key-bg: #121316;
      --kb-stroke: #121316;
      --radius-panel: 12px;
      
      --text-primary: #ffffff;
      --text-secondary: #888888;
      --text-muted: #555555;
      --text-on-accent: #ffffff;
      
      --pad-scale: #2c3a4e;
      --pad-chromatic: #222328;
      
      --accent-cyan: #00f0ff;
      --accent-cyan-text: #121316;
      --accent-cyan-alpha: rgba(0, 240, 255, 0.3);
      --accent-magenta: #ff2a9f;
      --accent-magenta-alpha: rgba(255, 42, 159, 0.1);
      --status-green: #39ff14;

      --pad-top-dim: #132230;
      --pad-top-text-dim: #264660;
      --pad-top-scale: #1a3246;
      --pad-top-text-scale: #62a2d4;
      --pad-bot-dim: #221222;
      --pad-bot-text-dim: #4d234d;
      --pad-bot-scale: #331833;
      --pad-bot-text-scale: #9c5c9c;
      
      --border-color: rgba(255, 255, 255, 0.05);
      --shadow-panel: 0 4px 24px rgba(0, 0, 0, 0.2);
      --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.5);
      --pad-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.04), 0 3px 6px rgba(0, 0, 0, 0.4);
      --scrollbar-thumb: rgba(255, 255, 255, 0.1);
      --midi-led-off: #444444;
      --midi-svg-stroke-off: #333333;
      
      --brand-logo-bg: #ffffff;
      --brand-logo-fill: #1a1b20;

      --knob-shadow: 5px 5px 10px #0c1222, -5px -5px 10px #202e46;
      --knob-shadow-hover: 3px 3px 6px #0c1222, -3px -3px 6px #202e46;
      --knob-shadow-dragging: inset 3px 3px 6px #0c1222, inset -3px -3px 6px #202e46;

      --input-bg: #121316;
      --input-color: #ffffff;
      --btn-text-off: #888888;

      /* Structural sizing */
      --sidebar-left-width: 72px;
      --sidebar-right-width: 260px;
      --header-height: 80px;
      --footer-height: 80px;
      --gap: 16px;

      display: block;
      height: 100vh;
      height: 100dvh;
      overflow: hidden;
      background-color: var(--bg-onyx);
      color: var(--text-primary);
      font-family: 'Space Grotesk', system-ui, sans-serif;
      padding: var(--gap);
      box-sizing: border-box;
    }

    :host(.theme-light) {
      /* Light/Medium Mode (Circuit Rhythm) */
      --bg-onyx: #5c5f66;          /* Darker slate grey chassis edges */
      --bg-charcoal: #82858d;      /* Medium slate grey faceplate */
      --bg-charcoal-alpha: rgba(130, 133, 141, 0.85);
      --kb-white-key-bg: #cbd5e1;
      --kb-black-key-bg: #2e3035;
      --kb-stroke: #5c5f66;
      
      --text-primary: #121316;     /* Black printed text */
      --text-secondary: #2e3035;   /* Dark gray labels */
      --text-muted: #4a4d53;       /* Muted gray */
      --text-on-accent: #ffffff;
      
      --pad-scale: #2e313a;        /* Dark charcoal pads off state */
      --pad-chromatic: #1c1e24;    /* Darkest gap pads off state */
      
      --accent-cyan: #ff5c12;      /* Glowing Orange pads */
      --accent-cyan-text: #ffffff;
      --accent-cyan-alpha: rgba(255, 92, 18, 0.3);
      --accent-magenta: #00d2ff;   /* Glowing Cyan/Teal pads */
      --accent-magenta-alpha: rgba(0, 210, 255, 0.25);
      --status-green: #10b981;     /* Play button Green */

      --pad-top-dim: #12242e;
      --pad-top-text-dim: #254b5f;
      --pad-top-scale: #17384a;
      --pad-top-text-scale: #5eaad1;
      --pad-bot-dim: #2a1610;
      --pad-bot-text-dim: #5c3021;
      --pad-bot-scale: #3f1e13;
      --pad-bot-text-scale: #b55d3c;
      
      --border-color: rgba(0, 0, 0, 0.15);
      --shadow-panel: 0 4px 24px rgba(0, 0, 0, 0.15);
      --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.15);
      --pad-shadow: inset 0 1px 3px rgba(255, 255, 255, 0.15), 0 3px 6px rgba(0, 0, 0, 0.25);
      --scrollbar-thumb: rgba(0, 0, 0, 0.25);
      --midi-led-off: #4a4d53;
      --midi-svg-stroke-off: #4a4d53;
      
      --brand-logo-bg: #121316;
      --brand-logo-fill: #82858d;

      --knob-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25), -4px -4px 8px rgba(255, 255, 255, 0.2);
      --knob-shadow-hover: 2px 2px 5px rgba(0, 0, 0, 0.25), -2px -2px 5px rgba(255, 255, 255, 0.2);
      --knob-shadow-dragging: inset 2px 2px 5px rgba(0, 0, 0, 0.25), inset -2px -2px 5px rgba(255, 255, 255, 0.2);

      --input-bg: #ffffff;         /* Crisp white input background */
      --input-color: #121316;      /* Black text in input */
      --btn-text-off: #cbd5e1;

      color: var(--text-primary);
      background-color: var(--bg-onyx);
    }

    * {
      box-sizing: border-box;
    }

    /* Hide scrollbars globally but keep functionality */
    ::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--scrollbar-thumb);
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent-cyan);
    }

    /* 2. STRUCTURAL SECTIONS & ARCHITECTURE */
    .app-grid {
      display: grid;
      grid-template-columns: var(--sidebar-left-width) minmax(0, 1fr);
      grid-template-rows: 48px var(--header-height) 1fr minmax(var(--footer-height), auto) auto;
      gap: var(--gap);
      height: calc(100vh - (var(--gap) * 2));
      height: calc(100dvh - (var(--gap) * 2));
      max-width: 1600px;
      margin: 0 auto;
    }

    .panel {
      background-color: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
    }

    /* Brand Header Bar */
    .brand-header {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 48px;
      padding: 0 16px;
      background: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-panel);
    }

    .brand-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .brand-logo {
      width: 24px;
      height: 24px;
      display: block;
    }

    .brand-title {
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      text-transform: lowercase;
      color: var(--text-primary);
      line-height: 1;
    }

    .brand-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .midi-led-group {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--text-secondary);
    }

    .midi-led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--midi-led-off);
      transition: all 0.3s ease;
    }

    .midi-led.connected {
      background: var(--status-green);
      box-shadow: 0 0 8px var(--status-green);
    }

    .audio-btn {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: var(--pad-scale);
      border: 1px solid var(--border-color);
      color: var(--btn-text-off, #94a3b8);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
    }
    .audio-btn:hover {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }
    .audio-btn.active {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }
    .audio-btn svg {
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    /* Section 1: Left Navigation Tab Bar */
    .sidebar-left {
      grid-column: 1 / 2;
      grid-row: 2 / 5;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px 0;
      gap: 16px;
    }

    .nav-btn {
      width: 44px;
      height: 44px;
      border-radius: 8px;
      background: var(--pad-scale);
      border: 1px solid var(--border-color);
      color: var(--btn-text-off, #94a3b8);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.2rem;
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .nav-btn:hover, .nav-btn.active {
      color: var(--accent-cyan);
      border-color: var(--accent-cyan);
    }

    .nav-divider {
      width: 32px;
      height: 2px;
      background: var(--border-color);
      margin: 8px 0;
      border-radius: 2px;
    }

    .nav-bottom {
      margin-top: auto;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    /* Section 2: Top Header Bar */
    .header-top {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      display: flex;
      align-items: center;
      padding: 0 24px;
      gap: 32px;
      overflow: hidden;
    }

    .config-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .config-label {
      font-size: 0.65rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--text-secondary);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .tactile-group {
      display: flex;
      gap: 4px;
      background: var(--bg-onyx);
      padding: 4px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      box-shadow: var(--shadow-inset);
    }

    .tactile-btn {
      padding: 6px 11px;
      border-radius: 6px;
      background: var(--pad-chromatic);
      color: var(--btn-text-off, #94a3b8);
      border: none;
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.15s ease;
      min-width: 34px;
      text-align: center;
    }
    .tactile-btn:hover {
      background: var(--pad-scale);
      color: var(--text-primary);
    }
    .tactile-btn.active-root {
      background: var(--accent-cyan);
      color: var(--accent-cyan-text);
      box-shadow: 0 0 12px var(--accent-cyan-alpha, rgba(0, 240, 255, 0.2));
    }

    .header-select {
      background: var(--bg-onyx) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2300f0ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 6 8 10 12 6'></polyline></svg>") no-repeat right 12px center;
      background-size: 12px;
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 6px 32px 6px 16px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
      outline: none;
      font-family: inherit;
      appearance: none;
      -webkit-appearance: none;
      min-width: 150px;
      box-shadow: var(--shadow-inset);
      transition: all 0.2s;
    }
    .header-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: var(--shadow-inset), 0 0 8px rgba(0, 240, 255, 0.25);
    }
    .header-select:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* Section 3: Center Main Content Area */
    .main-content {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      padding: 24px;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    /* Tab 1: Grid View */
    .circuit-grid {
      height: 100%;
      width: 100%;
    }

    /* Tab 2: Key & Scale Pad Picker */
    .data-input-view {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 100%;
      gap: 20px;
      width: 100%;
      overflow-y: auto;
    }

    /* Tab 3: Chord Input View */
    .chord-input-view {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 24px;
      width: 100%;
      padding: 0 16px;
    }

    .chord-input-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      text-align: center;
    }

    .chord-input-title {
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--text-primary);
    }

    .chord-input-hint {
      font-size: 0.78rem;
      color: var(--text-secondary);
      line-height: 1.5;
    }

    .chord-input-hint code {
      color: var(--accent-cyan);
      background: var(--bg-onyx);
      padding: 2px 7px;
      border-radius: 4px;
      font-family: 'Fira Code', 'Consolas', monospace;
    }

    /* We wrap chord-input here so it displays inside */
    chord-input {
      width: 100%;
      max-width: 600px;
    }

    /* ── Pad Picker (Data View) ─────────────────────────── */
    .pad-picker {
      width: 100%;
      max-width: 720px;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .pad-picker-section-label {
      font-size: 0.58rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--text-muted);
      text-transform: uppercase;
      padding: 0 2px;
      margin-bottom: 2px;
    }

    /* Each section (keynote / scale) has its own container */
    .pad-picker-section {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 10px;
      background: rgba(255,255,255,0.02);
      border: 1px solid var(--border-color);
      border-radius: 10px;
    }

    .pad-row {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 5px;
    }

    /* ── Base pad style — mirrors circuit-grid.ts .pad ── */
    .picker-pad {
      aspect-ratio: 1;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      cursor: pointer;
      display: grid;
      place-items: center;
      font-family: inherit;
      font-weight: 700;
      font-size: 0.65rem;
      line-height: 1.2;
      text-align: center;
      padding: 4px 2px;
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      user-select: none;
      outline: none;
      box-shadow: var(--pad-shadow);
    }
    .picker-pad:active {
      transform: scale(0.93);
    }

    /* ── Note pads — dark "off" state, cyan when selected ── */
    .picker-pad.pad-root {
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%), var(--pad-scale);
      color: var(--btn-text-off, #94a3b8);
      border-color: var(--border-color);
    }
    .picker-pad.pad-root:hover {
      border-color: var(--btn-text-off);
      color: var(--text-primary);
    }
    .picker-pad.pad-root.pad-active {
      background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%), var(--accent-cyan);
      color: var(--accent-cyan-text);
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 18px var(--accent-cyan-alpha, rgba(0, 240, 255, 0.55)), var(--shadow-inset);
    }
    /* Dimmed/spacer pads for gap positions */
    .picker-pad.pad-root.pad-dim {
      background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), var(--pad-chromatic);
      color: var(--text-muted);
      border-color: var(--border-color);
      box-shadow: var(--shadow-inset);
      cursor: default;
      pointer-events: none;
    }

    /* ── Scale pads — dark "off" state, magenta when selected ── */
    .picker-pad.pad-scale {
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%), var(--pad-scale);
      color: var(--btn-text-off, #94a3b8);
      border-color: var(--border-color);
      font-size: 0.58rem;
    }
    .picker-pad.pad-scale:hover {
      border-color: var(--btn-text-off);
      color: var(--text-primary);
    }
    .picker-pad.pad-scale.pad-active {
      background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%), var(--accent-magenta);
      color: var(--text-on-accent);
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 20px var(--accent-magenta-alpha, rgba(255, 42, 159, 0.65)), var(--shadow-inset);
    }

    /* Section 4: Right Sidebar (MIDI HUD / Modal on Desktop) */
    .sidebar-right {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%) scale(0.95);
      width: 400px;
      max-width: 90vw;
      height: auto;
      max-height: 85vh;
      z-index: 1000;
      background: var(--bg-charcoal-alpha);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sidebar-right.open {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, -50%) scale(1);
    }
    .sidebar-right::-webkit-scrollbar {
      display: none;
    }

    /* Help Panel (Modal on Desktop) */
    .sidebar-help {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -55%) scale(0.95);
      width: 480px;
      max-width: 90vw;
      height: auto;
      max-height: 85vh;
      z-index: 1000;
      background: var(--bg-charcoal-alpha);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid var(--border-color);
      border-radius: 16px;
      box-shadow: 0 24px 48px rgba(0, 0, 0, 0.8),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1);
      padding: 32px 28px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sidebar-help.open {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, -50%) scale(1);
    }
    .sidebar-help::-webkit-scrollbar {
      display: none;
    }

    /* Help specific contents formatting */
    .help-section {
      width: 100%;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 16px;
    }
    .help-section:last-of-type {
      border-bottom: none;
      padding-bottom: 0;
    }
    .help-title {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent-cyan);
      margin: 0 0 10px 0;
    }
    .help-text {
      font-size: 0.85rem;
      line-height: 1.5;
      color: var(--text-secondary);
      margin: 0;
    }
    .help-list {
      margin: 8px 0 0 0;
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      list-style-type: none;
    }
    .help-list li {
      font-size: 0.8rem;
      line-height: 1.4;
      color: var(--text-muted);
      position: relative;
    }
    .help-list li strong {
      color: var(--text-primary);
    }
    .help-step-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--accent-magenta);
      color: white;
      font-size: 0.65rem;
      font-weight: 800;
      margin-right: 6px;
    }

    .midi-status {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }

    .midi-icon-wrapper {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      background: var(--bg-onyx);
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid var(--border-color);
      box-shadow: var(--shadow-inset);
      transition: all 0.3s;
    }

    .midi-icon-wrapper.connected {
      border-color: var(--status-green);
      box-shadow: var(--shadow-inset), 0 0 16px rgba(57, 255, 20, 0.3);
    }

    .midi-svg {
      width: 42px;
      height: 42px;
      fill: none;
      stroke: var(--midi-svg-stroke-off);
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .midi-icon-wrapper.connected .midi-svg {
      stroke: var(--status-green);
      filter: drop-shadow(0 0 4px var(--status-green));
    }

    .status-text {
      font-size: 0.75rem;
      font-weight: 800;
      letter-spacing: 0.15em;
      color: var(--text-muted);
      transition: all 0.3s ease;
    }

    .status-text.connected {
      color: var(--status-green);
      text-shadow: 0 0 8px rgba(57, 255, 20, 0.4);
    }

    .midi-config {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .midi-select {
      width: 100%;
      background: var(--bg-onyx) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2300f0ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 6 8 10 12 6'></polyline></svg>") no-repeat right 16px center;
      background-size: 14px;
      color: var(--text-primary);
      border: 1px solid var(--border-color);
      padding: 10px 36px 10px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      font-family: inherit;
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      outline: none;
      box-shadow: var(--shadow-inset);
      transition: all 0.2s;
    }
    .midi-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: var(--shadow-inset), 0 0 8px rgba(0, 240, 255, 0.25);
    }
    .midi-select:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    .settings-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding-top: 8px;
    }

    .section-title {
      margin: 0 0 4px 0;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--accent-cyan);
      opacity: 0.8;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 6px;
    }

    .status-info {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 4px;
      width: 100%;
    }

    .active-device-name {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--text-secondary);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0 8px;
    }

    .midi-btn {
      width: 100%;
      padding: 10px 16px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 0.85rem;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s;
      border: 1px solid var(--border-color);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
      outline: none;
    }
    
    .midi-btn.connect {
      background: var(--accent-cyan);
      color: var(--accent-cyan-text);
      border-color: var(--accent-cyan);
    }
    .midi-btn.connect:hover {
      background: #00d8e6;
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.3);
    }
    .midi-btn.connect:disabled {
      background: var(--pad-scale);
      color: var(--text-muted);
      border-color: var(--border-color);
      cursor: not-allowed;
      box-shadow: none;
      opacity: 0.5;
    }
    
    .midi-btn.disconnect {
      background: var(--pad-chromatic);
      color: var(--accent-magenta);
      border-color: var(--border-color);
    }
    .midi-btn.disconnect:hover {
      background: var(--pad-scale);
      border-color: var(--accent-magenta);
      box-shadow: 0 0 12px var(--accent-magenta-alpha);
    }

    .no-devices-msg {
      font-size: 0.75rem;
      color: var(--text-secondary);
      font-style: italic;
      text-align: center;
      padding: 12px;
      background: var(--bg-onyx);
      border-radius: 8px;
      border: 1px dashed var(--border-color);
    }

    /* Section 5: Bottom Timeline Footer */
    .footer-timeline {
      grid-column: 2 / -1;
      grid-row: 4 / 5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 8px;
      height: auto !important;
      padding: 8px 24px;
    }

    .footer-drawer-content {
      display: flex;
      flex-direction: column;
      gap: 8px;
      animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .footer-voicing-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .footer-voicing-label {
      font-size: 0.6rem;
      font-weight: 700;
      letter-spacing: 0.15em;
      color: var(--text-secondary);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .quality-selector-row {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      scrollbar-width: none;
      width: 100%;
      padding-bottom: 2px;
      margin-bottom: 2px;
    }

    .quality-selector-row::-webkit-scrollbar {
      display: none;
    }

    .quality-pill {
      background: var(--bg-charcoal);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 0.72rem;
      font-weight: 700;
      color: var(--text-secondary);
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s ease;
    }

    .quality-pill:hover {
      border-color: var(--text-primary);
      color: var(--text-primary);
    }

    .quality-pill.active {
      background: var(--bg-charcoal);
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
      box-shadow: 0 0 8px var(--accent-cyan-alpha);
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-4px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .footer-timeline.peek-hint {
      animation: peekPulse 1.5s ease;
    }

    @keyframes peekPulse {
      0% { box-shadow: none; }
      30% { box-shadow: 0 0 12px var(--accent-cyan-alpha), inset 0 0 8px rgba(0, 240, 255, 0.05); }
      100% { box-shadow: none; }
    }

    progression-stepper {
      width: 100%;
    }

    /* Section 6: Bottom Links Footer */
    .app-links-footer {
      grid-column: 1 / -1;
      grid-row: 5 / 6;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 8px 16px 0 16px;
      font-size: 0.75rem;
      color: var(--text-secondary);
      border-top: 1px solid var(--border-color);
      margin-top: -4px;
      flex-wrap: wrap;
    }

    .footer-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s ease, transform 0.2s ease;
    }

    .footer-link:hover {
      color: var(--accent-cyan);
      transform: translateY(-1px);
    }

    .footer-link-highlight {
      color: var(--text-primary);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.2s ease;
    }

    .footer-link-highlight:hover {
      color: var(--accent-cyan);
      text-decoration: underline;
    }

    .footer-divider {
      color: var(--border-color);
      user-select: none;
    }

    .footer-icon {
      flex-shrink: 0;
      transition: stroke 0.2s ease;
    }

    .footer-link:hover .footer-icon {
      stroke: var(--accent-cyan);
    }

    .heart-icon {
      display: inline-block;
      animation: heartPulse 2.5s infinite ease-in-out;
      margin: 0 2px;
    }

    .coffee-icon {
      display: inline-block;
      transition: transform 0.2s ease;
    }

    .footer-link:hover .coffee-icon {
      transform: rotate(10deg) scale(1.1);
    }

    @keyframes heartPulse {
      0% { transform: scale(1); }
      14% { transform: scale(1.15); }
      28% { transform: scale(1); }
      42% { transform: scale(1.15); }
      70% { transform: scale(1); }
    }

    /* Close Button (Global for Modal and Drawer) */
    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      right: 16px;
      background: var(--bg-onyx);
      border: 1px solid var(--border-color);
      border-radius: 50%;
      width: 32px;
      height: 32px;
      color: var(--text-secondary);
      cursor: pointer;
      z-index: 1010;
      transition: all 0.2s ease;
    }
    .close-btn:hover {
      background: var(--pad-scale);
      border-color: var(--accent-cyan);
      color: var(--accent-cyan);
    }

    /* Backdrop (Global overlay for modal/drawer) */
    .sidebar-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .sidebar-backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    .scale-warning {
      display: flex;
      align-items: center;
      background: rgba(255, 170, 0, 0.1);
      border: 1px solid rgba(255, 170, 0, 0.2);
      color: #ffaa00;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.75rem;
      margin-bottom: 12px;
      font-weight: 500;
    }

    /* Sidebar Human (Slide-out panel) */
    .sidebar-human {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      width: 400px;
      max-width: 100vw;
      height: 100vh;
      height: 100dvh;
      z-index: 1000;
      background: var(--bg-charcoal-alpha);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-left: 1px solid var(--border-color);
      box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5);
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-y: auto;
      transform: translateX(100%);
      transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      opacity: 1 !important;
      pointer-events: none;
    }

    .sidebar-human.open {
      transform: translateX(0);
      pointer-events: auto;
    }

    /* Style integration for the human lit component */
    human-panel {
      --human-bg: transparent;
      --human-surface: var(--bg-onyx);
      --human-border: var(--border-color);
      --human-text-primary: var(--text-primary);
      --human-text-secondary: var(--text-secondary);
      --human-accent: var(--accent-cyan);
      --human-accent-hover: var(--accent-magenta);
      border: none !important;
      box-shadow: none !important;
      padding: 0 !important;
      background: transparent !important;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      flex-shrink: 0 !important;
      height: auto !important;
    }

    /* Responsive Media Queries */
    @media (max-width: 1024px) {
      :host {
        --sidebar-left-width: 56px;
        --sidebar-right-width: 0px;
        --header-height: 70px;
        --footer-height: 70px;
        --gap: 8px;
        padding: var(--gap);
      }

      .app-grid {
        grid-template-columns: var(--sidebar-left-width) minmax(0, 1fr);
        grid-template-rows: 48px var(--header-height) 1fr minmax(var(--footer-height), auto) auto;
        gap: var(--gap);
        height: calc(100vh - (var(--gap) * 2));
        height: calc(100dvh - (var(--gap) * 2));
      }

      .sidebar-left {
        padding: 16px 0;
        gap: 12px;
      }

      .nav-bottom {
        gap: 12px;
      }

      .brand-header {
        grid-column: 1 / 3;
        grid-row: 1 / 2;
        padding: 0 12px;
      }

      .desktop-only {
        display: none !important;
      }

      .mobile-only {
        display: flex !important;
      }

      .main-content {
        padding: 12px;
      }

      /* Sidebar Right as Overlay Drawer on Mobile */
      .sidebar-right {
        position: fixed;
        top: 0;
        left: auto;
        right: 0;
        bottom: 0;
        width: 280px;
        height: 100vh;
        height: 100dvh;
        max-height: 100vh;
        max-height: 100dvh;
        z-index: 1000;
        background: var(--bg-charcoal);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-top: none;
        border-right: none;
        border-bottom: none;
        border-radius: 0;
        box-shadow: -4px 0 24px rgba(0, 0, 0, 0.5);
        transform: translateX(100%);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        padding: 24px 20px;
        opacity: 1 !important;
        pointer-events: none;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .sidebar-right.open {
        transform: translateX(0);
        pointer-events: auto;
      }

      /* Sidebar Help as Overlay Drawer on Mobile */
      .sidebar-help {
        position: fixed;
        top: 0;
        left: auto;
        right: 0;
        bottom: 0;
        width: 300px;
        height: 100vh;
        height: 100dvh;
        max-height: 100vh;
        max-height: 100dvh;
        z-index: 1000;
        background: var(--bg-charcoal);
        border-left: 1px solid rgba(255, 255, 255, 0.1);
        border-top: none;
        border-right: none;
        border-bottom: none;
        border-radius: 0;
        box-shadow: -4px 0 24px rgba(0, 0, 0, 0.5);
        transform: translateX(100%);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
        padding: 24px 20px;
        opacity: 1 !important;
        pointer-events: none;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
      }

      .sidebar-help.open {
        transform: translateX(0);
        pointer-events: auto;
      }

      /* Sidebar Human as Overlay Drawer on Mobile */
      .sidebar-human {
        width: 280px;
        padding: 24px 20px;
      }

      /* Reduce spacer elements in timeline footer on mobile */
      .footer-timeline {
        padding: 0 8px;
        grid-column: 2 / 3;
        grid-row: 4 / 5;
      }

      /* Mobile styling for Top Header config */
      .header-top {
        padding: 0 12px;
        gap: 12px;
      }

      .header-top .tactile-btn {
        min-width: 30px;
        padding: 6px 8px;
        font-size: 0.75rem;
      }

      /* Mobile styling for Key/Scale picker */
      .data-input-view {
        gap: 16px;
      }

      .pad-picker {
        gap: 10px;
      }

      .pad-picker-section {
        padding: 12px;
        gap: 8px;
      }

      .pad-picker-section-label {
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        color: #777;
        margin-bottom: 4px;
      }

      /* Keynote grid on mobile */
      .pad-row.keynote-row {
        gap: 4px;
      }

      .picker-pad.pad-root {
        aspect-ratio: 0.95;
        font-size: 0.7rem;
      }

      /* Scale grid on mobile */
      .pad-row.scale-row {
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
      }

      .picker-pad.pad-scale {
        aspect-ratio: auto;
        height: 42px;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.01em;
        padding: 6px 10px;
        border-radius: 8px;
      }
    }

    @media (min-width: 1025px) {
      .desktop-only {
        display: flex !important;
      }

      .mobile-only {
        display: none !important;
      }
    }

    /* Voicing Keyboard & Control Styles */
    .voicing-group {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .voicing-control-row {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .keyboard-viz-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg-charcoal);
      padding: 2px;
      border-radius: 8px;
      border: 1px solid var(--border-color);
      width: 224px; /* default fallback, overridden dynamically */
      height: 46px;
      cursor: pointer;
      user-select: none;
      touch-action: none;
      box-shadow: var(--shadow-inset);
      transition: border-color 0.2s ease;
    }

    .keyboard-viz-container:hover {
      border-color: rgba(255, 255, 255, 0.15);
    }

    .voicing-keyboard {
      background: transparent;
    }

    .voicing-keyboard rect.white-key {
      fill: var(--kb-white-key-bg, #8b8e98);
      stroke: var(--kb-stroke, #121316);
      stroke-width: 0.75px;
      cursor: pointer;
      transition: fill 0.15s ease;
    }

    .voicing-keyboard rect.white-key.active {
      fill: var(--accent-cyan);
      stroke: var(--accent-cyan);
    }

    .voicing-keyboard rect.black-key {
      fill: var(--kb-black-key-bg, #121316);
      stroke: var(--kb-stroke, #121316);
      stroke-width: 0.75px;
      cursor: pointer;
      transition: fill 0.15s ease;
    }

    .voicing-keyboard rect.black-key.active {
      fill: var(--accent-cyan);
      stroke: var(--accent-cyan);
    }

    .voicing-keyboard text.keyboard-label {
      fill: var(--accent-cyan);
      font-size: 7px;
      font-weight: 800;
      pointer-events: none;
      text-shadow: 0 0 4px var(--accent-cyan-alpha);
    }

    .relocated-audio-controls {
      display: flex;
      gap: 6px;
      align-items: center;
    }

    .relocated-audio-controls .audio-btn {
      border-radius: 6px;
      width: 32px;
      height: 32px;
      background: var(--bg-charcoal);
      box-shadow: var(--pad-shadow);
    }

    @media (max-width: 520px) {
      .voicing-group {
        gap: 2px;
      }
    }
  `;K([q()],X.prototype,"theme",2);K([q()],X.prototype,"audioActive",2);K([q()],X.prototype,"activeTab",2);K([q()],X.prototype,"activePatch",2);K([q()],X.prototype,"progression",2);K([q()],X.prototype,"originalKey",2);K([q()],X.prototype,"activeIndex",2);K([q()],X.prototype,"hideScaleWarningForNotes",2);K([q()],X.prototype,"config",2);K([q()],X.prototype,"voicedOffsets",2);K([q()],X.prototype,"isMobileViewport",2);K([q()],X.prototype,"showQualitySelector",2);K([q()],X.prototype,"autoPlay",2);K([q()],X.prototype,"transposeProgression",2);K([q()],X.prototype,"chordCores",2);K([q()],X.prototype,"chordModifiers",2);K([q()],X.prototype,"inversion",2);K([q()],X.prototype,"source",2);K([q()],X.prototype,"showSettings",2);K([q()],X.prototype,"showHelp",2);K([q()],X.prototype,"humanLoaded",2);K([q()],X.prototype,"showHuman",2);K([q()],X.prototype,"humanState",2);K([q()],X.prototype,"showScaleWarnings",2);K([q()],X.prototype,"midiConnected",2);K([q()],X.prototype,"midiDevices",2);K([q()],X.prototype,"selectedMidiDevice",2);K([q()],X.prototype,"activeMidiDevice",2);K([q()],X.prototype,"selectedMidiChannel",2);X=K([Ke("circuit-chord-forge")],X);
