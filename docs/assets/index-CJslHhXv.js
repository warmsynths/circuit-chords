(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();const ct=globalThis,St=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol(),Jt=new WeakMap;let $e=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==Et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(St&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Jt.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Jt.set(n,t))}return t}toString(){return this.cssText}};const mn=e=>new $e(typeof e=="string"?e:e+"",void 0,Et),pt=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new $e(n,e,Et)},pn=(e,t)=>{if(St)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=ct.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},te=St?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return mn(n)})(e):e;const{is:un,defineProperty:fn,getOwnPropertyDescriptor:gn,getOwnPropertyNames:Pn,getOwnPropertySymbols:bn,getPrototypeOf:vn}=Object,ut=globalThis,ee=ut.trustedTypes,Mn=ee?ee.emptyScript:"",yn=ut.reactiveElementPolyfillSupport,W=(e,t)=>e,dt={toAttribute(e,t){switch(t){case Boolean:e=e?Mn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Nt=(e,t)=>!un(e,t),ne={attribute:!0,type:String,converter:dt,reflect:!1,useDefault:!1,hasChanged:Nt};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;let B=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=ne){if(n.state&&(n.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((n=Object.create(n)).wrapped=!0),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&fn(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=gn(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get:o,set(s){const a=o?.call(this);i?.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ne}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;const t=vn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){const n=this.properties,r=[...Pn(n),...bn(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(te(o))}else t!==void 0&&n.push(te(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pn(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$ET(t,n){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:dt).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),s=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:dt;this._$Em=o;const a=s.fromAttribute(n,i.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(t,n,r,o=!1,i){if(t!==void 0){const s=this.constructor;if(o===!1&&(i=this[t]),r??=s.getPropertyOptions(t),!((r.hasChanged??Nt)(i,n)||r.useDefault&&r.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,r))))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,n,{useDefault:r,reflect:o,wrapped:i},s){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??n??this[t]),i!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(n=void 0),this._$AL.set(t,n)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r){const{wrapped:s}=i,a=this[o];s!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,i,a)}}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(n=>this._$ET(n,this[n])),this._$EM()}updated(t){}firstUpdated(t){}};B.elementStyles=[],B.shadowRootOptions={mode:"open"},B[W("elementProperties")]=new Map,B[W("finalized")]=new Map,yn?.({ReactiveElement:B}),(ut.reactiveElementVersions??=[]).push("2.1.2");const Tt=globalThis,re=e=>e,ht=Tt.trustedTypes,oe=ht?ht.createPolicy("lit-html",{createHTML:e=>e}):void 0,xe="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,Ae="?"+E,$n=`<${Ae}>`,R=document,Q=()=>R.createComment(""),Z=e=>e===null||typeof e!="object"&&typeof e!="function",kt=Array.isArray,xn=e=>kt(e)||typeof e?.[Symbol.iterator]=="function",$t=`[ 	
\f\r]`,G=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ie=/-->/g,se=/>/g,j=RegExp(`>|${$t}(?:([^\\s"'>=/]+)(${$t}*=${$t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ae=/'/g,ce=/"/g,we=/^(?:script|style|textarea|title)$/i,An=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),P=An(1),L=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),le=new WeakMap,I=R.createTreeWalker(R,129);function _e(e,t){if(!kt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return oe!==void 0?oe.createHTML(t):t}const wn=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":t===3?"<math>":"",s=G;for(let a=0;a<n;a++){const c=e[a];let d,l,h=-1,m=0;for(;m<c.length&&(s.lastIndex=m,l=s.exec(c),l!==null);)m=s.lastIndex,s===G?l[1]==="!--"?s=ie:l[1]!==void 0?s=se:l[2]!==void 0?(we.test(l[2])&&(o=RegExp("</"+l[2],"g")),s=j):l[3]!==void 0&&(s=j):s===j?l[0]===">"?(s=o??G,h=-1):l[1]===void 0?h=-2:(h=s.lastIndex-l[2].length,d=l[1],s=l[3]===void 0?j:l[3]==='"'?ce:ae):s===ce||s===ae?s=j:s===ie||s===se?s=G:(s=j,o=void 0);const u=s===j&&e[a+1].startsWith("/>")?" ":"";i+=s===G?c+$n:h>=0?(r.push(d),c.slice(0,h)+xe+c.slice(h)+E+u):c+E+(h===-2?a:u)}return[_e(e,i+(e[n]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class J{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,s=0;const a=t.length-1,c=this.parts,[d,l]=wn(t,n);if(this.el=J.createElement(d,r),I.currentNode=this.el.content,n===2||n===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(o=I.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const h of o.getAttributeNames())if(h.endsWith(xe)){const m=l[s++],u=o.getAttribute(h).split(E),p=/([.?@])?(.*)/.exec(m);c.push({type:1,index:i,name:p[2],strings:u,ctor:p[1]==="."?Cn:p[1]==="?"?Sn:p[1]==="@"?En:ft}),o.removeAttribute(h)}else h.startsWith(E)&&(c.push({type:6,index:i}),o.removeAttribute(h));if(we.test(o.tagName)){const h=o.textContent.split(E),m=h.length-1;if(m>0){o.textContent=ht?ht.emptyScript:"";for(let u=0;u<m;u++)o.append(h[u],Q()),I.nextNode(),c.push({type:2,index:++i});o.append(h[m],Q())}}}else if(o.nodeType===8)if(o.data===Ae)c.push({type:2,index:i});else{let h=-1;for(;(h=o.data.indexOf(E,h+1))!==-1;)c.push({type:7,index:i}),h+=E.length-1}i++}}static createElement(t,n){const r=R.createElement("template");return r.innerHTML=t,r}}function q(e,t,n=e,r){if(t===L)return t;let o=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Z(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(t=q(e,o._$AS(e,t.values),o,r)),t}class _n{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=(t?.creationScope??R).importNode(n,!0);I.currentNode=o;let i=I.nextNode(),s=0,a=0,c=r[0];for(;c!==void 0;){if(s===c.index){let d;c.type===2?d=new rt(i,i.nextSibling,this,t):c.type===1?d=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(d=new Nn(i,this,t)),this._$AV.push(d),c=r[++a]}s!==c?.index&&(i=I.nextNode(),s++)}return I.currentNode=R,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class rt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=q(this,t,n),Z(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=J.createElement(_e(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{const i=new _n(o,this),s=i.u(this.options);i.p(n),this.T(s),this._$AH=i}}_$AC(t){let n=le.get(t.strings);return n===void 0&&le.set(t.strings,n=new J(t)),n}k(t){kt(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new rt(this.O(Q()),this.O(Q()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t!==this._$AB;){const r=re(t).nextSibling;re(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ft{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,n=this,r,o){const i=this.strings;let s=!1;if(i===void 0)t=q(this,t,n,0),s=!Z(t)||t!==this._$AH&&t!==L,s&&(this._$AH=t);else{const a=t;let c,d;for(t=i[0],c=0;c<i.length-1;c++)d=q(this,a[r+c],n,c),d===L&&(d=this._$AH[c]),s||=!Z(d)||d!==this._$AH[c],d===g?t=g:t!==g&&(t+=(d??"")+i[c+1]),this._$AH[c]=d}s&&!o&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Cn extends ft{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Sn extends ft{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class En extends ft{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=q(this,t,n,0)??g)===L)return;const r=this._$AH,o=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Nn{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const Tn=Tt.litHtmlPolyfillSupport;Tn?.(J,rt),(Tt.litHtmlVersions??=[]).push("3.3.3");const kn=(e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const i=n?.renderBefore??null;r._$litPart$=o=new rt(t.insertBefore(Q(),i),i,void 0,n??{})}return o._$AI(e),o};const Ot=globalThis;class T extends B{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kn(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}T._$litElement$=!0,T.finalized=!0,Ot.litElementHydrateSupport?.({LitElement:T});const On=Ot.litElementPolyfillSupport;On?.({LitElement:T});(Ot.litElementVersions??=[]).push("4.2.2");const gt=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const jn={attribute:!0,type:String,converter:dt,reflect:!1,hasChanged:Nt},In=(e=jn,t,n)=>{const{kind:r,metadata:o}=n;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),i.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const c=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,c,e,!0,a)},init(a){return a!==void 0&&this.C(s,void 0,e,a),a}}}if(r==="setter"){const{name:s}=n;return function(a){const c=this[s];t.call(this,a),this.requestUpdate(s,c,e,!0,a)}}throw Error("Unsupported decorator location: "+r)};function k(e){return(t,n)=>typeof n=="object"?In(e,t,n):((r,o,i)=>{const s=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),s?Object.getOwnPropertyDescriptor(o,i):void 0})(e,t,n)}function y(e){return k({...e,state:!0,attribute:!1})}function Ce(e){return e!==null&&typeof e=="object"&&"name"in e&&typeof e.name=="string"}function Se(e){return e!==null&&typeof e=="object"&&"step"in e&&typeof e.step=="number"&&"alt"in e&&typeof e.alt=="number"&&!isNaN(e.step)&&!isNaN(e.alt)}var Ee=[0,2,4,-1,1,3,5],Ne=Ee.map(e=>Math.floor(e*7/12));function Te(e){const{step:t,alt:n,oct:r,dir:o=1}=e,i=Ee[t]+7*n;if(r===void 0)return[o*i];const s=r-Ne[t]-4*n;return[o*i,o*s]}var Rn=[3,0,4,1,5,2,6];function ke(e){const[t,n,r]=e,o=Rn[Dn(t)],i=Math.floor((t+1)/7);if(n===void 0)return{step:o,alt:i,dir:r};const s=n+4*i+Ne[o];return{step:o,alt:i,oct:s,dir:r}}function Dn(e){const t=(e+1)%7;return t<0?7+t:t}var de=(e,t)=>Array(Math.abs(t)+1).join(e),wt=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),zn="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Hn="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Un=new RegExp("^"+zn+"|"+Hn+"$");function Fn(e){const t=Un.exec(`${e}`);return t===null?["",""]:t[1]?[t[1],t[2]]:[t[4],t[3]]}var he={};function b(e){return typeof e=="string"?he[e]||(he[e]=Bn(e)):Se(e)?b(qn(e)):Ce(e)?b(e.name):wt}var me=[0,2,4,5,7,9,11],Oe="PMMPPMM";function Bn(e){const t=Fn(e);if(t[0]==="")return wt;const n=+t[0],r=t[1],o=(Math.abs(n)-1)%7,i=Oe[o];if(i==="M"&&r==="P")return wt;const s=i==="M"?"majorable":"perfectable",a=""+n+r,c=n<0?-1:1,d=n===8||n===-8?n:c*(o+1),l=Ln(s,r),h=Math.floor((Math.abs(n)-1)/7),m=c*(me[o]+l+12*h),u=(c*(me[o]+l)%12+12)%12,p=Te({step:o,alt:l,oct:h,dir:c});return{empty:!1,name:a,num:n,q:r,step:o,alt:l,dir:c,type:s,simple:d,semitones:m,chroma:u,coord:p,oct:h}}function jt(e,t){const[n,r=0]=e,o=n*7+r*12<0,i=t||o?[-n,-r,-1]:[n,r,1];return b(ke(i))}function Ln(e,t){return t==="M"&&e==="majorable"||t==="P"&&e==="perfectable"?0:t==="m"&&e==="majorable"?-1:/^A+$/.test(t)?t.length:/^d+$/.test(t)?-1*(e==="perfectable"?t.length:t.length+1):0}function qn(e){const{step:t,alt:n,oct:r=0,dir:o}=e;if(!o)return"";const i=t+1+7*r,s=i===0?t+1:i,a=o<0?"-":"",c=Oe[t]==="M"?"majorable":"perfectable";return a+s+Vn(c,n)}function Vn(e,t){return t===0?e==="majorable"?"M":"P":t===-1&&e==="majorable"?"m":t>0?de("A",t):de("d",e==="perfectable"?t:t+1)}var pe=(e,t)=>Array(Math.abs(t)+1).join(e),je=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),ue=new Map,Gn=e=>"CDEFGAB".charAt(e),Kn=e=>e<0?pe("b",-e):pe("#",e),Wn=e=>e[0]==="b"?-e.length:e.length;function f(e){const t=JSON.stringify(e),n=ue.get(t);if(n)return n;const r=typeof e=="string"?Zn(e):Se(e)?f(Jn(e)):Ce(e)?f(e.name):je;return ue.set(t,r),r}var Xn=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function It(e){const t=Xn.exec(e);return t?[t[1].toUpperCase(),t[2].replace(/x/g,"##"),t[3],t[4]]:["","","",""]}function Yn(e){return f(ke(e))}var Qn=(e,t)=>(e%t+t)%t,xt=[0,2,4,5,7,9,11];function Zn(e){const t=It(e);if(t[0]===""||t[3]!=="")return je;const n=t[0],r=t[1],o=t[2],i=(n.charCodeAt(0)+3)%7,s=Wn(r),a=o.length?+o:void 0,c=Te({step:i,alt:s,oct:a}),d=n+r+o,l=n+r,h=(xt[i]+s+120)%12,m=a===void 0?Qn(xt[i]+s,12)-1188:xt[i]+s+12*(a+1),u=m>=0&&m<=127?m:null,p=a===void 0?null:Math.pow(2,(m-69)/12)*440;return{empty:!1,acc:r,alt:s,chroma:h,coord:c,freq:p,height:m,letter:n,midi:u,name:d,oct:a,pc:l,step:i}}function Jn(e){const{step:t,alt:n,oct:r}=e,o=Gn(t);if(!o)return"";const i=o+Kn(n);return r||r===0?i+r:i}function w(e,t){const n=f(e),r=Array.isArray(t)?t:b(t).coord;if(n.empty||!r||r.length<2)return"";const o=n.coord,i=o.length===1?[o[0]+r[0]]:[o[0]+r[0],o[1]+r[1]];return Yn(i).name}function Ie(e,t){const n=e.length;return r=>{if(!t)return"";const o=r<0?(n- -r%n)%n:r%n,i=Math.floor(r/n),s=w(t,[0,i]);return w(s,e[o])}}function mt(e,t){const n=f(e),r=f(t);if(n.empty||r.empty)return"";const o=n.coord,i=r.coord,s=i[0]-o[0],a=o.length===2&&i.length===2?i[1]-o[1]:-Math.floor(s*7/12),c=r.height===n.height&&r.midi!==null&&n.oct===r.oct&&n.step>r.step;return jt([s,a],c).name}function tr(e,t){const n=[];for(;t--;n[t]=t+e);return n}function er(e,t){const n=[];for(;t--;n[t]=e-t);return n}function nr(e,t){return e<t?tr(e,t-e+1):er(e,e-t+1)}function Rt(e,t){const n=t.length,r=(e%n+n)%n;return t.slice(r,n).concat(t.slice(0,r))}function Re(e){return e.filter(t=>t===0||t)}var D={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},De=e=>Number(e).toString(2).padStart(12,"0"),fe=e=>parseInt(e,2),rr=/^[01]{12}$/;function ze(e){return rr.test(e)}var or=e=>typeof e=="number"&&e>=0&&e<=4095,ir=e=>e&&ze(e.chroma),ge={[D.chroma]:D};function z(e){const t=ze(e)?e:or(e)?De(e):Array.isArray(e)?mr(e):ir(e)?e.chroma:D.chroma;return ge[t]=ge[t]||hr(t)}var sr=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function ar(e){const t=[];for(let n=0;n<12;n++)e.charAt(n)==="1"&&t.push(sr[n]);return t}function cr(e,t=!0){const r=z(e).chroma.split("");return Re(r.map((o,i)=>{const s=Rt(i,r);return t&&s[0]==="0"?null:s.join("")}))}function lr(e){const t=z(e).setNum;return n=>{const r=z(n).setNum;return t&&t!==r&&(r&t)===r}}function He(e){const t=z(e).setNum;return n=>{const r=z(n).setNum;return t&&t!==r&&(r|t)===r}}function dr(e){const t=e.split("");return t.map((n,r)=>Rt(r,t).join(""))}function hr(e){const t=fe(e),n=dr(e).map(fe).filter(i=>i>=2048).sort()[0],r=De(n),o=ar(e);return{empty:!1,name:"",setNum:t,chroma:e,normalized:r,intervals:o}}function mr(e){if(e.length===0)return D.chroma;let t;const n=[0,0,0,0,0,0,0,0,0,0,0,0];for(let r=0;r<e.length;r++)t=f(e[r]),t.empty&&(t=b(e[r])),t.empty||(n[t.chroma]=1);return n.join("")}var pr=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],ur=pr,fr={...D,name:"",quality:"Unknown",intervals:[],aliases:[]},Dt=[],X={};function gr(e){return X[e]||fr}function zt(){return Dt.slice()}function Pr(e,t,n){const r=vr(e),o={...z(e),name:n||"",quality:r,intervals:e,aliases:t};Dt.push(o),o.name&&(X[o.name]=o),X[o.setNum]=o,X[o.chroma]=o,o.aliases.forEach(i=>br(o,i))}function br(e,t){X[t]=e}function vr(e){const t=n=>e.indexOf(n)!==-1;return t("5A")?"Augmented":t("3M")?"Major":t("5d")?"Diminished":t("3m")?"Minor":"Unknown"}ur.forEach(([e,t,n])=>Pr(e.split(" "),n.split(" "),t));Dt.sort((e,t)=>e.setNum-t.setNum);var Mr=e=>{const t=e.reduce((n,r)=>{const o=f(r).chroma;return o!==void 0&&(n[o]=n[o]||f(r).name),n},{});return n=>t[n]};function yr(e,t={}){const n=e.map(o=>f(o).pc).filter(o=>o);return f.length===0?[]:Sr(n,1,t).filter(o=>o.weight).sort((o,i)=>i.weight-o.weight).map(o=>o.name)}var Pt={anyThirds:384,perfectFifth:16,nonPerfectFifths:40,anySeventh:3},bt=e=>t=>!!(t&e),$r=bt(Pt.anyThirds),xr=bt(Pt.perfectFifth),Ar=bt(Pt.anySeventh),wr=bt(Pt.nonPerfectFifths);function _r(e){const t=parseInt(e.chroma,2);return $r(t)&&xr(t)&&Ar(t)}function Cr(e){const t=parseInt(e,2);return wr(t)?e:(t|16).toString(2)}function Sr(e,t,n){const r=e[0],o=f(r).chroma,i=Mr(e),s=cr(e,!1),a=[];return s.forEach((c,d)=>{const l=n.assumePerfectFifth&&Cr(c);zt().filter(m=>n.assumePerfectFifth&&_r(m)?m.chroma===l:m.chroma===c).forEach(m=>{const u=m.aliases[0],p=i(d);d!==o?a.push({weight:.5*t,name:`${p}${u}/${r}`}):a.push({weight:1*t,name:`${p}${u}`})})}),a}function Er(){return"1P 2M 3M 4P 5P 6m 7m".split(" ")}var Ue=b,Nr=e=>b(e).name,Tr=e=>b(e).semitones,kr=e=>b(e).q,Or=e=>b(e).num;function jr(e){const t=b(e);return t.empty?"":t.simple+t.q}function Ir(e){const t=b(e);if(t.empty)return"";const n=(7-t.step)%7,r=t.type==="perfectable"?-t.alt:-(t.alt+1);return b({step:n,alt:r,oct:t.oct,dir:t.dir}).name}var Rr=[1,2,2,3,3,4,5,5,6,6,7,7],Dr="P m M m M P d P m M m M".split(" ");function Ht(e){const t=e<0?-1:1,n=Math.abs(e),r=n%12,o=Math.floor(n/12);return t*(Rr[r]+7*o)+Dr[r]}var zr=mt,Fe=Le((e,t)=>[e[0]+t[0],e[1]+t[1]]),Hr=e=>t=>Fe(e,t),Be=Le((e,t)=>[e[0]-t[0],e[1]-t[1]]);function Ur(e,t){const n=Ue(e);if(n.empty)return"";const[r,o,i]=n.coord;return jt([r+t,o,i]).name}var Fr={names:Er,get:Ue,name:Nr,num:Or,semitones:Tr,quality:kr,fromSemitones:Ht,distance:zr,invert:Ir,simplify:jr,add:Fe,addTo:Hr,subtract:Be,transposeFifths:Ur};function Le(e){return(t,n)=>{const r=b(t).coord,o=b(n).coord;if(r&&o){const i=e(r,o);return jt(i).name}}}var Br=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Lr=Br,qr={...D,intervals:[],aliases:[]},qe=[],Y={};function Ve(e){return Y[e]||qr}function Vr(){return qe.slice()}function Gr(e,t,n=[]){const r={...z(e),name:t,intervals:e,aliases:n};return qe.push(r),Y[r.name]=r,Y[r.setNum]=r,Y[r.chroma]=r,r.aliases.forEach(o=>Kr(r,o)),r}function Kr(e,t){Y[t]=e}Lr.forEach(([e,t,...n])=>Gr(e.split(" "),t,n));var Ge={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Ut(e){const[t,n,r,o]=It(e);return t===""?At("",e):t==="A"&&o==="ug"?At("","aug"):At(t+n,r+o)}function At(e,t){const n=t.split("/");if(n.length===1)return[e,n[0],""];const[r,o,i,s]=It(n[1]);return r!==""&&i===""&&s===""?[e,n[0],r+o]:[e,t,""]}function _(e){if(Array.isArray(e))return lt(e[1]||"",e[0],e[2]);if(e==="")return Ge;{const[t,n,r]=Ut(e),o=lt(n,t,r);return o.empty?lt(e):o}}function lt(e,t,n){const r=gr(e),o=f(t||""),i=f(n||"");if(r.empty||t&&o.empty||n&&i.empty)return Ge;const s=mt(o.pc,i.pc),a=r.intervals.indexOf(s),c=a>=0,d=c?i:f(""),l=a===-1?NaN:a+1,h=i.pc&&i.pc!==o.pc,m=Array.from(r.intervals);if(c)for(let A=1;A<l;A++){const vt=m[0][0],Mt=m[0][1],it=parseInt(vt,10)+7;m.push(`${it}${Mt}`),m.shift()}else if(h){const A=Be(mt(o.pc,i.pc),"8P");A&&m.unshift(A)}const u=o.empty?[]:m.map(A=>w(o.pc,A));e=r.aliases.indexOf(e)!==-1?e:r.aliases[0];const p=`${o.empty?"":o.pc}${e}${c&&l>1?"/"+d.pc:h?"/"+i.pc:""}`,x=`${t?o.pc+" ":""}${r.name}${c&&l>1?" over "+d.pc:h?" over "+i.pc:""}`;return{...r,name:x,symbol:p,tonic:o.pc,type:r.name,root:d.pc,bass:h?i.pc:"",intervals:m,rootDegree:l,notes:u}}var Wr=_;function Xr(e,t){const[n,r,o]=Ut(e);if(!n)return e;const i=w(o,t),s=i?"/"+i:"";return w(n,t)+r+s}function Yr(e){const t=_(e),n=He(t.chroma);return Vr().filter(r=>n(r.chroma)).map(r=>r.name)}function Qr(e){const t=_(e),n=He(t.chroma);return zt().filter(r=>n(r.chroma)).map(r=>t.tonic+r.aliases[0])}function Zr(e){const t=_(e),n=lr(t.chroma);return zt().filter(r=>n(r.chroma)).map(r=>t.tonic+r.aliases[0])}function Jr(e,t){const n=_(e),r=t||n.tonic;return!r||n.empty?[]:n.intervals.map(o=>w(r,o))}function to(e,t){const n=_(e),r=t||n.tonic,o=Ie(n.intervals,r);return i=>i?o(i>0?i-1:i):""}function eo(e,t){const n=_(e),r=t||n.tonic;return Ie(n.intervals,r)}var Ke={getChord:lt,get:_,detect:yr,chordScales:Yr,extended:Qr,reduced:Zr,tokenize:Ut,transpose:Xr,degrees:to,steps:eo,notes:Jr,chord:Wr},no=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],ro=no;ro.forEach(([e,t,n])=>void 0);function oo(e){return+e>=0&&+e<=127}function io(e){if(oo(e))return+e;const t=f(e);return t.empty?null:t.midi}var so=Math.log(2),ao=Math.log(440);function We(e){const t=12*(Math.log(e)-ao)/so+69;return Math.round(t*100)/100}var co="C C# D D# E F F# G G# A A# B".split(" "),lo="C Db D Eb E F Gb G Ab A Bb B".split(" ");function U(e,t={}){if(isNaN(e)||e===-1/0||e===1/0)return"";e=Math.round(e);const r=(t.sharps===!0?co:lo)[e%12];if(t.pitchClass)return r;const o=Math.floor(e/12)-1;return r+o}var ho=["C","D","E","F","G","A","B"],Xe=e=>e.name,Ye=e=>e.map(f).filter(t=>!t.empty);function mo(e){return e===void 0?ho.slice():Array.isArray(e)?Ye(e).map(Xe):[]}var M=f,po=e=>M(e).name,tt=e=>M(e).pc,uo=e=>M(e).acc,fo=e=>M(e).oct,go=e=>M(e).midi,Ft=e=>M(e).freq,Po=e=>M(e).chroma;function bo(e){return U(e)}function vo(e){return U(We(e))}function Mo(e){return U(We(e),{sharps:!0})}function yo(e){return U(e,{sharps:!0})}var $o=mt,F=w,xo=w,Qe=e=>t=>F(t,e),Ao=Qe,Ze=e=>t=>F(e,t),wo=Ze;function Je(e,t){return F(e,[t,0])}var _o=Je;function Co(e,t){return F(e,[0,t])}var Bt=(e,t)=>e.height-t.height,So=(e,t)=>t.height-e.height;function tn(e,t){return t=t||Bt,Ye(e).sort(t).map(Xe)}function Eo(e){return tn(e,Bt).filter((t,n,r)=>n===0||t!==r[n-1])}var No=e=>{const t=M(e);return t.empty?"":U(t.midi||t.chroma,{sharps:t.alt>0,pitchClass:t.midi===null})};function Lt(e,t){const n=M(e);if(n.empty)return"";const r=M(t||U(n.midi||n.chroma,{sharps:n.alt<0,pitchClass:!0}));if(r.empty||r.chroma!==n.chroma)return"";if(n.oct===void 0)return r.pc;const o=n.chroma-n.alt,i=r.chroma-r.alt,s=o>11||i<0?-1:o<0||i>11?1:0,a=n.oct+s;return r.pc+a}var C={names:mo,get:M,name:po,pitchClass:tt,accidentals:uo,octave:fo,midi:go,ascending:Bt,descending:So,distance:$o,sortedNames:tn,sortedUniqNames:Eo,fromMidi:bo,fromMidiSharps:yo,freq:Ft,fromFreq:vo,fromFreqSharps:Mo,chroma:Po,transpose:F,tr:xo,transposeBy:Qe,trBy:Ao,transposeFrom:Ze,trFrom:wo,transposeFifths:Je,transposeOctaves:Co,trFifths:_o,simplify:No,enharmonic:Lt},qt=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],Pe={...D,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},To=qt.map(ko),_t={};To.forEach(e=>{_t[e.name]=e,e.aliases.forEach(t=>{_t[t]=e})});function en(e){return typeof e=="string"?_t[e.toLowerCase()]||Pe:e&&e.name?en(e.name):Pe}function ko(e){const[t,n,r,o,i,s,a]=e,c=a?[a]:[],d=Number(n).toString(2);return{empty:!1,intervals:Ve(o).intervals,modeNum:t,chroma:d,normalized:d,name:o,setNum:n,alt:r,triad:i,seventh:s,aliases:c}}function nn(e){return(t,n)=>{const r=en(t);if(r.empty)return[];const o=Rt(r.modeNum,e),i=r.intervals.map(s=>w(n,s));return o.map((s,a)=>i[a]+s)}}nn(qt.map(e=>e[4]));nn(qt.map(e=>e[5]));function rn(e){const t=Re(e.map(n=>typeof n=="number"?n:io(n)));return!e.length||t.length!==e.length?[]:t.reduce((n,r)=>{const o=n[n.length-1];return n.concat(nr(o,r).slice(1))},[t[0]])}function Oo(e,t){return rn(e).map(n=>U(n,t))}var jo={numeric:rn,chromatic:Oo},Io={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Ro(e){if(typeof e!="string")return["",""];const t=e.indexOf(" "),n=f(e.substring(0,t));if(n.empty){const o=f(e);return o.empty?["",e.toLowerCase()]:[o.name,""]}const r=e.substring(n.name.length+1).toLowerCase();return[n.name,r.length?r:""]}function Do(e){const t=Array.isArray(e)?e:Ro(e),n=f(t[0]).name,r=Ve(t[1]);if(r.empty)return Io;const o=r.name,i=n?r.intervals.map(a=>w(n,a)):[],s=n?n+" "+o:o;return{...r,name:s,type:o,tonic:n,notes:i}}var zo=(e,t)=>{if(!t||!t.length)return e[0];const n=o=>C.midi(o[o.length-1])||0,r=o=>Math.abs(n(t)-n(o));return e.sort((o,i)=>r(o)-r(i))[0]},Ho={topNoteDiff:zo},Uo={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"]},on={m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},Fo={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"],m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},sn=on;function Bo(e,t=sn){if(t[e])return t[e];const{aliases:n}=Ke.get("C"+e),r=Object.keys(t).find(o=>n.includes(o))||"";if(r!==void 0)return t[r]}var Ct={lookup:Bo,lefthand:on,triads:Uo,all:Fo,defaultDictionary:sn},an=["C3","C5"],Lo=Ct.all,qo=Ho.topNoteDiff;function be(e,t=an,n=Lo,r=qo,o){const i=Vo(e,t,n);return!o||!o.length?i[0]:r(i,o)}function Vo(e,t=an,n=Ct.triads){const[r,o]=Ke.tokenize(e),i=Ct.lookup(o,n);if(!i)return[];const s=i.map(c=>c.split(" ")),a=jo.chromatic(t);return s.reduce((c,d)=>{const l=d.map(p=>Fr.subtract(p,d[0])||""),h=C.transpose(r,d[0]),u=a.filter(p=>C.chroma(p)===C.chroma(h)).filter(p=>(C.midi(C.transpose(p,l[l.length-1]))||0)<=(C.midi(t[1])||0)).map(p=>C.enharmonic(p,h)).map(p=>l.map(x=>C.transpose(p,x)));return c.concat(u)},[])}var Go=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Vt=(e,t,n,r)=>{for(var o=r>1?void 0:r?Ko(t,n):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Go(t,n,o),o};let et=class extends T{constructor(){super(...arguments),this.value="",this.error=""}render(){return P`
      <div class="wrap">
        <label for="chord-progression">Chord Progression</label>
        <div class="input-group">
          <input
            id="chord-progression"
            type="text"
            .value=${this.value}
            placeholder="e.g. Cmaj7 Am7 Dm7 G7"
            @input=${this.onInput}
            @keydown=${this.onKeydown}
          />
          <button ?disabled=${!this.value.trim()} @click=${this.parseAndEmit}>Parse</button>
        </div>

        ${this.error?P`<div class="error">${this.error}</div>`:P`<div class="hint">Enter chord symbols separated by spaces (e.g., Cmaj7 Am7 F G9). Press Enter to parse.</div>`}
      </div>
    `}onInput(e){const t=e.target;this.value=t.value,this.error&&(this.error="")}onKeydown(e){e.key==="Enter"&&(e.preventDefault(),this.parseAndEmit())}parseAndEmit(){const e=this.parseProgression(this.value);if(!e.length){this.error="No valid chord symbols were found.";return}this.error="";const t={progression:e,source:this.value};this.dispatchEvent(new CustomEvent("progression-parsed",{detail:t,bubbles:!0,composed:!0}))}parseProgression(e){const t=this.tokenize(e),n=[];for(const r of t){const o=_(r);o.empty||o.notes.length===0||n.push({symbol:r,tonic:o.tonic,quality:o.quality,notes:o.notes,intervals:o.intervals,aliases:o.aliases})}return n}tokenize(e){const t=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,n=e.match(t);return n?n.map(r=>r.trim()):[]}};et.styles=pt`
    :host {
      display: block;
      color: #ffffff;
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
      color: #888888;
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
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 12px 16px;
      font: inherit;
      font-size: 0.95rem;
      outline: none;
      background: #121316;
      color: #ffffff;
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
      color: #ffffff;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(255, 42, 159, 0.2);
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(255, 42, 159, 0.3);
    }

    button:active:not(:disabled) {
      transform: translateY(1px);
      box-shadow: 0 2px 4px rgba(255, 42, 159, 0.2);
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      box-shadow: none;
    }

    .hint {
      font-size: 0.75rem;
      color: #666666;
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
  `;Vt([k({type:String})],et.prototype,"value",2);Vt([y()],et.prototype,"error",2);et=Vt([gt("chord-input")],et);var Wo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,ot=(e,t,n,r)=>{for(var o=r>1?void 0:r?Xo(t,n):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Wo(t,n,o),o};let H=class extends T{constructor(){super(...arguments),this.originalChords=[],this.keyChords=[],this.keyLabel="",this.activeIndex=0}render(){const e=this.keyChords.length>0?this.keyChords:this.originalChords;return P`
      <div class="sequence-track">
        ${Array.from({length:16}).map((t,n)=>{const r=e[n];return P`
            <div 
              class="step-block ${n===this.activeIndex?"active":""}"
              @click=${()=>r&&this.selectChord(n)}
            >
              ${r?P`<span class="chord-symbol">${r.symbol}</span>`:P`<span class="step-index">${n+1}</span>`}
            </div>
          `})}
      </div>
    `}selectChord(e){this.dispatchEvent(new CustomEvent("chord-selected",{detail:e,bubbles:!0,composed:!0}))}};H.styles=pt`
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
      background: var(--bg-onyx, #121316);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      font-weight: 700;
      color: #555;
      cursor: pointer;
      transition: all 0.15s;
      overflow: hidden;
    }

    .step-block:hover {
      background: var(--pad-chromatic, #222328);
      color: #888;
    }

    .step-block.active {
      border-color: var(--accent-magenta, #ff2a9f);
      color: var(--accent-magenta, #ff2a9f);
      background: rgba(255, 42, 159, 0.1);
      box-shadow: 0 0 12px rgba(255, 42, 159, 0.2);
    }

    .step-index {
      font-size: 0.6rem;
      opacity: 0.5;
    }

    .chord-symbol {
      font-size: 0.85rem;
    }
  `;ot([k({attribute:!1})],H.prototype,"originalChords",2);ot([k({attribute:!1})],H.prototype,"keyChords",2);ot([k({type:String})],H.prototype,"keyLabel",2);ot([k({type:Number})],H.prototype,"activeIndex",2);H=ot([gt("progression-stepper")],H);let K=null;function cn(){return K||(K=new(window.AudioContext||window.webkitAudioContext)),K.state==="suspended"&&K.resume(),K}function Yo(e,t=.35){try{const n=cn(),r=Ft(e);if(!r)return;const o=n.createOscillator(),i=n.createGain(),s=n.createBiquadFilter();o.type="triangle",o.frequency.value=r,s.type="lowpass",s.frequency.value=1100,s.Q.value=.8;const a=n.currentTime;i.gain.setValueAtTime(0,a),i.gain.linearRampToValueAtTime(.18,a+.04),i.gain.setValueAtTime(.18,a+t-.08),i.gain.exponentialRampToValueAtTime(.001,a+t),o.connect(s),s.connect(i),i.connect(n.destination),o.start(a),o.stop(a+t)}catch(n){console.warn("Audio playback failed:",n)}}function Qo(e,t=.7){try{const n=cn(),r=n.currentTime;e.forEach(o=>{const i=Ft(o);if(!i)return;const s=n.createOscillator(),a=n.createGain(),c=n.createBiquadFilter();s.type="triangle",s.frequency.value=i,c.type="lowpass",c.frequency.value=900,c.Q.value=.8,a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(.12,r+.06),a.gain.setValueAtTime(.12,r+t-.12),a.gain.exponentialRampToValueAtTime(.001,r+t),s.connect(c),c.connect(a),a.connect(n.destination),s.start(r),s.stop(r+t)})}catch(n){console.warn("Audio playback failed:",n)}}var Zo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,Gt=(e,t,n,r)=>{for(var o=r>1?void 0:r?Jo(t,n):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&Zo(t,n,o),o};let nt=class extends T{constructor(){super(...arguments),this.pads=[],this.recipe=[]}render(){const e=new Map(this.recipe.map((t,n)=>[t.index,n+1]));return P`
      <div class="shell">
        <div class="grid" role="grid" aria-label="Circuit pad grid">
          ${this.pads.map(t=>{if(!t.note)return P`<div class="gap" aria-hidden="true"></div>`;const n=e.get(t.index);return P`
              <div 
                class=${`pad ${t.state} ${n?"target":""}`} 
                role="button" 
                tabindex="0"
                aria-label=${this.getAriaLabel(t,n)}
                @click=${()=>this.onPadClick(t)}
                @keydown=${r=>this.onPadKeydown(r,t)}
              >
                <div class="pad-inner">
                  ${n?P`<span class="step">${n}</span>`:null}
                  <div>
                    <div>${t.label}</div>
                    <div class="meta">${t.row+1}:${t.col+1}</div>
                  </div>
                </div>
              </div>
            `})}
        </div>
      </div>
    `}onPadClick(e){e.midiNote&&(Yo(e.midiNote),this.dispatchEvent(new CustomEvent("pad-clicked",{detail:e,bubbles:!0,composed:!0})))}onPadKeydown(e,t){(e.key===" "||e.key==="Enter")&&(e.preventDefault(),this.onPadClick(t))}getAriaLabel(e,t){return e.note?t?`${e.note} row ${e.row+1} column ${e.col+1} voicing note ${t} of ${this.recipe.length} (lowest to highest)`:`${e.note} row ${e.row+1} column ${e.col+1} ${e.state}`:`empty slot row ${e.row+1} column ${e.col+1}`}};nt.styles=pt`
    :host {
      display: block;
      height: 100%;
      width: 100%;
    }

    .shell {
      height: 100%;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      grid-template-rows: repeat(4, 1fr);
      gap: 12px;
      height: 100%;
    }

    .gap {
      border-radius: 8px;
      background: transparent;
      pointer-events: none;
    }

    .pad {
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      display: grid;
      place-items: center;
      text-align: center;
      padding: 0.3rem;
      color: #888;
      font-weight: 700;
      letter-spacing: 0.02em;
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), var(--pad-scale, #2c3a4e);
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.05), 0 4px 8px rgba(0, 0, 0, 0.4);
      transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      user-select: none;
      outline: none;
    }

    .pad:hover {
      border-color: rgba(255, 255, 255, 0.2);
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
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%), var(--pad-chromatic, #222328);
      color: #444;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .pad.scale {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0) 100%), var(--pad-scale, #2c3a4e);
      color: #ccc;
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.05), 0 4px 8px rgba(0, 0, 0, 0.4);
    }

    /* "lit" corresponds to chord tones */
    .pad.lit {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), var(--accent-magenta, #ff2a9f);
      color: white;
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 20px rgba(255, 42, 159, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3);
    }

    /* "active" corresponds to the root note */
    .pad.active {
      background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), var(--accent-cyan, #00f0ff);
      color: #121316;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 18px rgba(0, 240, 255, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.4);
    }

    .meta {
      font-size: 0.68rem;
      opacity: 0.75;
      display: none; /* Hide coords in new clean hardware design */
    }

    /* "target" corresponds to voicing recipe targets */
    .pad.target {
      outline: 2px solid #ffffff;
      outline-offset: 2px;
      box-shadow: 0 0 12px #ffffff;
    }

    .step {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: #ffffff;
      color: #121316;
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
  `;Gt([k({attribute:!1})],nt.prototype,"pads",2);Gt([k({attribute:!1})],nt.prototype,"recipe",2);nt=Gt([gt("circuit-grid")],nt);const S=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ti=["major","minor","dorian","mixolydian","lydian","phrygian","locrian","harmonic minor","melodic minor","major pentatonic","minor pentatonic","blues"],at=S,ei=["triad","seventh","spread"],ni=["key","chord"],ri=5,oi=3,ii=[0,2,4,5,7,9,11,12],si=[null,1,3,null,6,8,10,null];function ve(e,t){const n=t.anchorMode==="chord"?e?.tonic??t.key:t.key,r=N(n)??"C",o=S.indexOf(r),i=hi(t.key,t.scale),s=pi(r,i),a=new Set((e?.notes??[]).map(m=>N(m)).filter(Kt)),c=4,d=[];let l=c,h=-1;for(let m=0;m<32;m++){const u=s[m%s.length],p=S.indexOf(u);h!==-1&&p<h&&l++,d.push(`${u}${l}`),h=p}return Array.from({length:32},(m,u)=>{const p=Math.floor(u/8),x=u%8,A=3-p,vt=x+A*oi,Mt=x+A*ri,it=t.mode==="collapsed"?vt:Mt;let O="",yt="";if(t.mode==="collapsed"){const V=d[it%d.length]??"";yt=V,O=N(tt(V))??""}else{const V=(p+2)%4,dn=Math.floor(V/2)*12,Qt=V%2===0?si[x]:ii[x];if(Qt!==null&&o!==-1){const hn=Qt+dn,Zt=F(`${r}${c}`,Ht(hn));yt=Zt,O=N(tt(Zt))??""}}const Wt=a.has(O),Xt=O===r,Yt=i.includes(O);let st="dim";return Xt?st="active":Wt?st="lit":Yt&&(st="scale"),{index:u,row:p,col:x,offset:it,note:O,label:O||" ",state:st,inChord:Wt,isRoot:Xt,inScale:Yt,midiNote:yt}})}function Me(e,t,n,r=0,o=4){return e?ai(e,n).map((a,c)=>li(a,c,t,n,r)).filter(a=>!!a).slice(0,o).map(a=>({note:a.note,row:a.row,col:a.col,index:a.index,offset:a.offset})).sort((a,c)=>a.offset-c.offset).map(({note:a,row:c,col:d,index:l})=>({note:a,row:c,col:d,index:l})):[]}function ai(e,t){const n=new Map,r=[],o=N(e.tonic);for(let l=0;l<e.notes.length;l+=1){const h=N(e.notes[l]);if(!h)continue;r.includes(h)||r.push(h);const m=di(e.intervals[l]);m!==null&&!n.has(m)&&n.set(m,h)}const i={triad:[3,5],seventh:[3,5,7],spread:[5,7,3]},s={triad:3,seventh:4,spread:4},a=Array.from(new Set([o,...i[t].map(l=>n.get(l)).filter(l=>!!l)].filter(l=>!!l)));if(a.length>=s[t])return a.slice(0,s[t]);const c=ci(e,t);return Array.from(new Set([...a,...c,...r])).slice(0,s[t])}function ci(e,t){let n=[];try{const a=be(e.symbol);n=Array.isArray(a)?a:[]}catch{n=[]}if(n.length===0&&e.tonic&&e.quality)try{const a=be(`${e.tonic}${e.quality}`);n=Array.isArray(a)?a:[]}catch{n=[]}const r=n.filter(a=>typeof a=="string").map(a=>N(a)).filter(Kt),o=Array.from(new Set(r));if(o.length===0)return[];if(t==="triad")return o.slice(0,3);if(t==="seventh")return o.slice(0,4);const s=[0,2,3,1].map(a=>o[a]).filter(a=>!!a);return Array.from(new Set(s)).slice(0,4)}function li(e,t,n,r,o=0){const i=n.filter(c=>c.note===e).sort((c,d)=>c.offset-d.offset);if(i.length===0)return;const s=t<o;if(r==="spread"){let c=t;s&&(c+=1);const d=Math.min(c,i.length-1);return i[d]}const a=s?Math.min(1,i.length-1):0;return i[a]}function di(e){if(!e)return null;const t=e.match(/^(\d+)/);if(!t)return null;const n=Number.parseInt(t[1],10);return Number.isFinite(n)?n:null}function hi(e,t){const r=Do(`${e} ${t}`).notes.map(o=>N(o)).filter(Kt);return r.length===0?["C","D","E","F","G","A","B"]:Array.from(new Set(r))}function mi(e){const t=S.indexOf(e);return t===-1?S:ln(S,t)}function pi(e,t){const n=S.indexOf(e),r=t.slice().sort((o,i)=>ye(o,n)-ye(i,n));return r.length===0?mi(e):r.includes(e)?ln(r,r.indexOf(e)):[e,...r]}function ye(e,t){const n=S.indexOf(e);return n===-1||t===-1?Number.MAX_SAFE_INTEGER:(n-t+12)%12}function ln(e,t){return[...e.slice(t),...e.slice(0,t)]}function N(e){if(!e)return null;const t=tt(e);if(!t)return null;const n=Lt(t);return S.includes(n)?n:t}function Kt(e){return e!==null}var ui=Object.defineProperty,fi=Object.getOwnPropertyDescriptor,$=(e,t,n,r)=>{for(var o=r>1?void 0:r?fi(t,n):t,i=e.length-1,s;i>=0;i--)(s=e[i])&&(o=(r?s(t,n,o):s(o))||o);return r&&o&&ui(t,n,o),o};let v=class extends T{constructor(){super(...arguments),this.activeTab="grid",this.progression=[],this.originalKey="C",this.activeIndex=0,this.config={key:"C",scale:"minor",mode:"chromatic",anchorMode:"key"},this.voicing="triad",this.autoPlay=!0,this.transposeProgression=!0,this.inversion=0,this.source=""}render(){const e=this.getTransposedProgression(),t=e[this.activeIndex]??null,n=ve(t,this.config),r=Me(t,n,this.voicing,this.inversion);return P`
      <div class="app-grid">
        <!-- 1. Left Navigation Tab Bar -->
        <nav class="panel sidebar-left">
          <button class="nav-btn ${this.activeTab==="grid"?"active":""}" title="Grid View" @click=${()=>this.activeTab="grid"}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </button>
          <button class="nav-btn ${this.activeTab==="data"?"active":""}" title="Data Input View" @click=${()=>this.activeTab="data"}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </button>
          <div class="nav-divider"></div>
          <div class="nav-bottom">
            <button class="nav-btn" title="Help ?">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </button>
            <button class="nav-btn" title="Settings">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
          </div>
        </nav>

        <!-- 2. Top Header Bar -->
        <header class="panel header-top">
          <div class="config-group">
            <span class="config-label">Root Note</span>
            <div class="tactile-group">
              ${at.map(o=>P`
                <button 
                  class="tactile-btn ${this.config.key===o?"active-root":""}"
                  @click=${()=>this.onKeyChange(o)}>
                  ${o}
                </button>
              `)}
            </div>
          </div>
          
          <div class="config-group">
            <span class="config-label">Scale Type</span>
            <div class="tactile-group">
              <select class="header-select" @change=${o=>this.onScaleChange(o.target.value)}>
                ${ti.map(o=>P`
                  <option value=${o} ?selected=${this.config.scale===o}>
                    ${o.toUpperCase()}
                  </option>
                `)}
              </select>
            </div>
          </div>
        </header>

        <!-- 3. Center Main Content Area -->
        <main class="panel main-content">
          <!-- Tab 1: Grid View -->
          <div class="circuit-grid" style="display: ${this.activeTab==="grid"?"block":"none"}">
            <circuit-grid .pads=${n} .recipe=${r}></circuit-grid>
          </div>

          <!-- Tab 2: Data Input View -->
          <div class="data-input-view" style="display: ${this.activeTab==="data"?"flex":"none"}">
            <chord-input @progression-parsed=${this.onParsed}></chord-input>
          </div>
        </main>

        <!-- 4. Right Sidebar (MIDI HUD) -->
        <aside class="panel sidebar-right">
          <div class="midi-status">
            <span class="config-label">MIDI Status</span>
            <div class="midi-icon-wrapper connected">
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
            <div class="status-text">CONNECTED</div>
          </div>

          <!-- Advanced Config -->
          <div class="midi-config">
            <span class="config-label">Pad Anchor</span>
            <select class="midi-select" .value=${this.config.anchorMode} @change=${o=>this.setAnchorMode(o.target.value)}>
              ${ni.map(o=>P`<option value=${o}>${o==="key"?"Project Key":"Chord Root"}</option>`)}
            </select>
          </div>
          
          <div class="midi-config">
            <span class="config-label">Pad Mode</span>
            <select class="midi-select" .value=${this.config.mode} @change=${o=>this.setMode(o.target.value)}>
              <option value="chromatic">Chromatic</option>
              <option value="collapsed">Scale Collapse</option>
            </select>
          </div>
          
          <div class="midi-config">
            <span class="config-label">Voicing</span>
            <select class="midi-select" .value=${this.voicing} @change=${o=>this.onVoicingChange(o.target.value)}>
              ${ei.map(o=>P`<option value=${o}>${o}</option>`)}
            </select>
          </div>

        </aside>

        <!-- 5. Bottom Timeline Footer -->
        <footer class="panel footer-timeline">
          <progression-stepper
            .originalChords=${this.progression}
            .keyChords=${this.transposeProgression&&this.originalKey!==this.config.key?e:[]}
            .keyLabel=${this.config.key}
            .activeIndex=${this.activeIndex}
            @chord-selected=${o=>this.onChordSelected(o)}
          ></progression-stepper>
        </footer>
      </div>
    `}playActiveVoicing(){const t=this.getTransposedProgression()[this.activeIndex]??null;if(!t)return;const n=ve(t,this.config),o=Me(t,n,this.voicing,this.inversion).map(i=>n.find(s=>s.index===i.index)?.midiNote).filter(i=>!!i);o.length>0&&Qo(o)}setAnchorMode(e){this.config={...this.config,anchorMode:e}}setMode(e){this.config={...this.config,mode:e}}onKeyChange(e){this.config={...this.config,key:e}}onScaleChange(e){this.config={...this.config,scale:e}}onVoicingChange(e){this.voicing=e}onChordSelected(e){this.activeIndex=e.detail,this.autoPlay&&setTimeout(()=>this.playActiveVoicing(),20)}onParsed(e){this.progression=e.detail.progression,this.source=e.detail.source,this.activeIndex=0;const t=e.detail.progression[0],n=this.normalizeKey(t?.tonic)??this.config.key;this.originalKey=n,t?.tonic&&(this.config={...this.config,key:n}),this.autoPlay&&this.progression.length>0&&setTimeout(()=>this.playActiveVoicing(),50),this.activeTab="grid"}getTransposedProgression(){if(this.progression.length===0)return[];if(!this.transposeProgression)return this.progression;const e=this.getKeyShiftSemitones();return e===0?this.progression:this.progression.map(t=>this.transposeParsedChord(t,e)).filter(t=>!!t)}getKeyShiftSemitones(){const e=at.indexOf(this.originalKey),t=at.indexOf(this.config.key);return e===-1||t===-1?0:(t-e+12)%12}transposeParsedChord(e,t){const n=this.transposeChordSymbol(e.symbol,t);if(!n)return null;const r=_(n);return r.empty||r.notes.length===0?null:{symbol:n,tonic:r.tonic,quality:r.quality,notes:r.notes,intervals:r.intervals,aliases:r.aliases}}transposeChordSymbol(e,t){const n=e.match(/^([A-G](?:#{1,2}|b{1,2})?)(.*?)(?:\/([A-G](?:#{1,2}|b{1,2})?))?$/);if(!n)return null;const r=this.transposeNoteName(n[1],t);if(!r)return null;const o=n[2]??"",i=n[3]?this.transposeNoteName(n[3],t):null;return n[3]&&!i?null:`${r}${o}${i?`/${i}`:""}`}transposeNoteName(e,t){const n=Ht(t),r=F(e,n);return this.normalizeKey(r)}normalizeKey(e){const t=tt(e??"");if(!t)return null;const n=Lt(t);return at.includes(n)?n:null}};v.styles=pt`
    :host {
      /* 1. DESIGN THEME & COLOR PALETTE */
      --bg-onyx: #121316;
      --bg-charcoal: #1a1b20;
      --radius-panel: 12px;
      
      --pad-scale: #2c3a4e;
      --pad-chromatic: #222328;
      
      --accent-cyan: #00f0ff;
      --accent-magenta: #ff2a9f;
      --status-green: #39ff14;

      /* Structural sizing */
      --sidebar-left-width: 72px;
      --sidebar-right-width: 260px;
      --header-height: 80px;
      --footer-height: 80px;
      --gap: 16px;

      display: block;
      height: 100vh;
      overflow: hidden;
      background-color: var(--bg-onyx);
      color: #ffffff;
      font-family: 'Space Grotesk', system-ui, sans-serif;
      padding: var(--gap);
      box-sizing: border-box;
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
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: var(--accent-cyan);
    }

    /* 2. STRUCTURAL SECTIONS & ARCHITECTURE */
    .app-grid {
      display: grid;
      grid-template-columns: var(--sidebar-left-width) 1fr var(--sidebar-right-width);
      grid-template-rows: var(--header-height) 1fr var(--footer-height);
      gap: var(--gap);
      height: calc(100vh - (var(--gap) * 2));
      max-width: 1600px;
      margin: 0 auto;
    }

    .panel {
      background-color: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
    }

    /* Section 1: Left Navigation Tab Bar */
    .sidebar-left {
      grid-column: 1 / 2;
      grid-row: 1 / 4;
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
      background: var(--bg-onyx);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #666;
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
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.2);
    }

    .nav-divider {
      width: 32px;
      height: 2px;
      background: rgba(255, 255, 255, 0.08);
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
      grid-row: 1 / 2;
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
      color: #888;
      text-transform: uppercase;
    }

    .tactile-group {
      display: flex;
      gap: 4px;
      background: var(--bg-onyx);
      padding: 4px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .tactile-btn {
      padding: 6px 11px;
      border-radius: 6px;
      background: var(--pad-chromatic);
      color: #888;
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
      color: white;
    }
    .tactile-btn.active-root {
      background: var(--accent-cyan);
      color: var(--bg-onyx);
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.4);
    }

    .header-select {
      background: var(--bg-onyx) url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' stroke='%2300f0ff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='4 6 8 10 12 6'></polyline></svg>") no-repeat right 12px center;
      background-size: 12px;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.08);
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
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.5);
      transition: all 0.2s;
    }
    .header-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.5), 0 0 8px rgba(0, 240, 255, 0.25);
    }
    .header-select:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* Section 3: Center Main Content Area */
    .main-content {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
      padding: 24px;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Tab 1: Grid View */
    .circuit-grid {
      height: 100%;
      width: 100%;
    }

    /* Tab 2: Data Input View */
    .data-input-view {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      gap: 32px;
      width: 100%;
    }

    /* We wrap chord-input here so it displays inside */
    chord-input {
      width: 100%;
      max-width: 500px;
    }

    /* Section 4: Right Sidebar (MIDI HUD) */
    .sidebar-right {
      grid-column: 3 / 4;
      grid-row: 1 / 3;
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .sidebar-right::-webkit-scrollbar {
      display: none;
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
      border: 2px solid #222328;
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.8);
      transition: all 0.3s;
    }

    .midi-icon-wrapper.connected {
      border-color: var(--status-green);
      box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.8), 0 0 16px rgba(57, 255, 20, 0.3);
    }

    .midi-svg {
      width: 42px;
      height: 42px;
      fill: none;
      stroke: #333;
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
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 10px 36px 10px 16px;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      font-family: inherit;
      appearance: none;
      -webkit-appearance: none;
      cursor: pointer;
      outline: none;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5);
      transition: all 0.2s;
    }
    .midi-select:focus {
      border-color: var(--accent-cyan);
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.5), 0 0 8px rgba(0, 240, 255, 0.25);
    }
    .midi-select:hover {
      border-color: rgba(255, 255, 255, 0.2);
    }

    /* Section 5: Bottom Timeline Footer */
    .footer-timeline {
      grid-column: 2 / 4;
      grid-row: 3 / 4;
      display: flex;
      align-items: center;
      padding: 0 24px;
    }

    progression-stepper {
      width: 100%;
    }
  `;$([y()],v.prototype,"activeTab",2);$([y()],v.prototype,"progression",2);$([y()],v.prototype,"originalKey",2);$([y()],v.prototype,"activeIndex",2);$([y()],v.prototype,"config",2);$([y()],v.prototype,"voicing",2);$([y()],v.prototype,"autoPlay",2);$([y()],v.prototype,"transposeProgression",2);$([y()],v.prototype,"inversion",2);$([y()],v.prototype,"source",2);v=$([gt("circuit-chord-forge")],v);
