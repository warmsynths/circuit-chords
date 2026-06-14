(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const ce=globalThis,Ne=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ee=Symbol(),Ze=new WeakMap;let yt=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Ne&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Ze.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ze.set(r,e))}return e}toString(){return this.cssText}};const mr=t=>new yt(typeof t=="string"?t:t+"",void 0,Ee),he=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new yt(r,t,Ee)},pr=(t,e)=>{if(Ne)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),o=ce.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)}},Je=Ne?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return mr(r)})(t):t;const{is:hr,defineProperty:ur,getOwnPropertyDescriptor:fr,getOwnPropertyNames:gr,getOwnPropertySymbols:br,getPrototypeOf:vr}=Object,ue=globalThis,et=ue.trustedTypes,Pr=et?et.emptyScript:"",Mr=ue.reactiveElementPolyfillSupport,Y=(t,e)=>t,de={toAttribute(t,e){switch(e){case Boolean:t=t?Pr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ke=(t,e)=>!hr(t,e),tt={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:ke};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;let H=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=tt){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,r);o!==void 0&&ur(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){const{get:o,set:s}=fr(this.prototype,e)??{get(){return this[r]},set(i){this[r]=i}};return{get:o,set(i){const a=o?.call(this);s?.call(this,i),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tt}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;const e=vr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){const r=this.properties,n=[...gr(r),...br(r)];for(const o of n)this.createProperty(o,r[o])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift(Je(o))}else e!==void 0&&r.push(Je(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pr(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:de).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:de;this._$Em=o;const a=i.fromAttribute(r,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,r,n,o=!1,s){if(e!==void 0){const i=this.constructor;if(o===!1&&(s=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??ke)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:o,wrapped:s},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??r??this[e]),s!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n){const{wrapped:i}=s,a=this[o];i!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[Y("elementProperties")]=new Map,H[Y("finalized")]=new Map,Mr?.({ReactiveElement:H}),(ue.reactiveElementVersions??=[]).push("2.1.2");const Oe=globalThis,rt=t=>t,me=Oe.trustedTypes,nt=me?me.createPolicy("lit-html",{createHTML:t=>t}):void 0,$t="$lit$",N=`lit$${Math.random().toFixed(9).slice(2)}$`,At="?"+N,yr=`<${At}>`,z=document,J=()=>z.createComment(""),ee=t=>t===null||typeof t!="object"&&typeof t!="function",Te=Array.isArray,$r=t=>Te(t)||typeof t?.[Symbol.iterator]=="function",Ae=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,st=/>/g,j=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),it=/'/g,at=/"/g,xt=/^(?:script|style|textarea|title)$/i,Ar=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),u=Ar(1),L=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),ct=new WeakMap,I=z.createTreeWalker(z,129);function wt(t,e){if(!Te(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return nt!==void 0?nt.createHTML(e):e}const xr=(t,e)=>{const r=t.length-1,n=[];let o,s=e===2?"<svg>":e===3?"<math>":"",i=K;for(let a=0;a<r;a++){const c=t[a];let d,l,m=-1,p=0;for(;p<c.length&&(i.lastIndex=p,l=i.exec(c),l!==null);)p=i.lastIndex,i===K?l[1]==="!--"?i=ot:l[1]!==void 0?i=st:l[2]!==void 0?(xt.test(l[2])&&(o=RegExp("</"+l[2],"g")),i=j):l[3]!==void 0&&(i=j):i===j?l[0]===">"?(i=o??K,m=-1):l[1]===void 0?m=-2:(m=i.lastIndex-l[2].length,d=l[1],i=l[3]===void 0?j:l[3]==='"'?at:it):i===at||i===it?i=j:i===ot||i===st?i=K:(i=j,o=void 0);const f=i===j&&t[a+1].startsWith("/>")?" ":"";s+=i===K?c+yr:m>=0?(n.push(d),c.slice(0,m)+$t+c.slice(m)+N+f):c+N+(m===-2?a:f)}return[wt(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class te{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const a=e.length-1,c=this.parts,[d,l]=xr(e,r);if(this.el=te.createElement(d,n),I.currentNode=this.el.content,r===2||r===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(o=I.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const m of o.getAttributeNames())if(m.endsWith($t)){const p=l[i++],f=o.getAttribute(m).split(N),h=/([.?@])?(.*)/.exec(p);c.push({type:1,index:s,name:h[2],strings:f,ctor:h[1]==="."?_r:h[1]==="?"?Cr:h[1]==="@"?Sr:fe}),o.removeAttribute(m)}else m.startsWith(N)&&(c.push({type:6,index:s}),o.removeAttribute(m));if(xt.test(o.tagName)){const m=o.textContent.split(N),p=m.length-1;if(p>0){o.textContent=me?me.emptyScript:"";for(let f=0;f<p;f++)o.append(m[f],J()),I.nextNode(),c.push({type:2,index:++s});o.append(m[p],J())}}}else if(o.nodeType===8)if(o.data===At)c.push({type:2,index:s});else{let m=-1;for(;(m=o.data.indexOf(N,m+1))!==-1;)c.push({type:7,index:s}),m+=N.length-1}s++}}static createElement(e,r){const n=z.createElement("template");return n.innerHTML=e,n}}function B(t,e,r=t,n){if(e===L)return e;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const s=ee(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(t),o._$AT(t,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(e=B(t,o._$AS(t,e.values),o,n)),e}class wr{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,o=(e?.creationScope??z).importNode(r,!0);I.currentNode=o;let s=I.nextNode(),i=0,a=0,c=n[0];for(;c!==void 0;){if(i===c.index){let d;c.type===2?d=new oe(s,s.nextSibling,this,e):c.type===1?d=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(d=new Nr(s,this,e)),this._$AV.push(d),c=n[++a]}i!==c?.index&&(s=I.nextNode(),i++)}return I.currentNode=z,o}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,n,o){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=B(this,e,r),ee(e)?e===b||e==null||e===""?(this._$AH!==b&&this._$AR(),this._$AH=b):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):$r(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==b&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(z.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=te.createElement(wt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const s=new wr(o,this),i=s.u(this.options);s.p(r),this.T(i),this._$AH=s}}_$AC(e){let r=ct.get(e.strings);return r===void 0&&ct.set(e.strings,r=new te(e)),r}k(e){Te(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of e)o===r.length?r.push(n=new oe(this.O(J()),this.O(J()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const n=rt(e).nextSibling;rt(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class fe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,o,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=b}_$AI(e,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)e=B(this,e,r,0),i=!ee(e)||e!==this._$AH&&e!==L,i&&(this._$AH=e);else{const a=e;let c,d;for(e=s[0],c=0;c<s.length-1;c++)d=B(this,a[n+c],r,c),d===L&&(d=this._$AH[c]),i||=!ee(d)||d!==this._$AH[c],d===b?e=b:e!==b&&(e+=(d??"")+s[c+1]),this._$AH[c]=d}i&&!o&&this.j(e)}j(e){e===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class _r extends fe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===b?void 0:e}}class Cr extends fe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==b)}}class Sr extends fe{constructor(e,r,n,o,s){super(e,r,n,o,s),this.type=5}_$AI(e,r=this){if((e=B(this,e,r,0)??b)===L)return;const n=this._$AH,o=e===b&&n!==b||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==b&&(n===b||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Nr{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const Er=Oe.litHtmlPolyfillSupport;Er?.(te,oe),(Oe.litHtmlVersions??=[]).push("3.3.3");const kr=(t,e,r)=>{const n=r?.renderBefore??e;let o=n._$litPart$;if(o===void 0){const s=r?.renderBefore??null;n._$litPart$=o=new oe(e.insertBefore(J(),s),s,void 0,r??{})}return o._$AI(t),o};const je=globalThis;class k extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=kr(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return L}}k._$litElement$=!0,k.finalized=!0,je.litElementHydrateSupport?.({LitElement:k});const Or=je.litElementPolyfillSupport;Or?.({LitElement:k});(je.litElementVersions??=[]).push("4.2.2");const ge=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};const Tr={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:ke},jr=(t=Tr,e,r)=>{const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),n==="accessor"){const{name:i}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,c,t,!0,a)},init(a){return a!==void 0&&this.C(i,void 0,t,a),a}}}if(n==="setter"){const{name:i}=r;return function(a){const c=this[i];e.call(this,a),this.requestUpdate(i,c,t,!0,a)}}throw Error("Unsupported decorator location: "+n)};function O(t){return(e,r)=>typeof r=="object"?jr(t,e,r):((n,o,s)=>{const i=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),i?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}function x(t){return O({...t,state:!0,attribute:!1})}function _t(t){return t!==null&&typeof t=="object"&&"name"in t&&typeof t.name=="string"}function Ct(t){return t!==null&&typeof t=="object"&&"step"in t&&typeof t.step=="number"&&"alt"in t&&typeof t.alt=="number"&&!isNaN(t.step)&&!isNaN(t.alt)}var St=[0,2,4,-1,1,3,5],Nt=St.map(t=>Math.floor(t*7/12));function Et(t){const{step:e,alt:r,oct:n,dir:o=1}=t,s=St[e]+7*r;if(n===void 0)return[o*s];const i=n-Nt[e]-4*r;return[o*s,o*i]}var Ir=[3,0,4,1,5,2,6];function kt(t){const[e,r,n]=t,o=Ir[zr(e)],s=Math.floor((e+1)/7);if(r===void 0)return{step:o,alt:s,dir:n};const i=r+4*s+Nt[o];return{step:o,alt:s,oct:i,dir:n}}function zr(t){const e=(t+1)%7;return e<0?7+e:e}var lt=(t,e)=>Array(Math.abs(e)+1).join(t),_e=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),Rr="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Dr="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Ur=new RegExp("^"+Rr+"|"+Dr+"$");function Fr(t){const e=Ur.exec(`${t}`);return e===null?["",""]:e[1]?[e[1],e[2]]:[e[4],e[3]]}var dt={};function v(t){return typeof t=="string"?dt[t]||(dt[t]=qr(t)):Ct(t)?v(Lr(t)):_t(t)?v(t.name):_e}var mt=[0,2,4,5,7,9,11],Ot="PMMPPMM";function qr(t){const e=Fr(t);if(e[0]==="")return _e;const r=+e[0],n=e[1],o=(Math.abs(r)-1)%7,s=Ot[o];if(s==="M"&&n==="P")return _e;const i=s==="M"?"majorable":"perfectable",a=""+r+n,c=r<0?-1:1,d=r===8||r===-8?r:c*(o+1),l=Hr(i,n),m=Math.floor((Math.abs(r)-1)/7),p=c*(mt[o]+l+12*m),f=(c*(mt[o]+l)%12+12)%12,h=Et({step:o,alt:l,oct:m,dir:c});return{empty:!1,name:a,num:r,q:n,step:o,alt:l,dir:c,type:i,simple:d,semitones:p,chroma:f,coord:h,oct:m}}function Ie(t,e){const[r,n=0]=t,o=r*7+n*12<0,s=e||o?[-r,-n,-1]:[r,n,1];return v(kt(s))}function Hr(t,e){return e==="M"&&t==="majorable"||e==="P"&&t==="perfectable"?0:e==="m"&&t==="majorable"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?-1*(t==="perfectable"?e.length:e.length+1):0}function Lr(t){const{step:e,alt:r,oct:n=0,dir:o}=t;if(!o)return"";const s=e+1+7*n,i=s===0?e+1:s,a=o<0?"-":"",c=Ot[e]==="M"?"majorable":"perfectable";return a+i+Br(c,r)}function Br(t,e){return e===0?t==="majorable"?"M":"P":e===-1&&t==="majorable"?"m":e>0?lt("A",e):lt("d",t==="perfectable"?e:e+1)}var pt=(t,e)=>Array(Math.abs(e)+1).join(t),Tt=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),ht=new Map,Gr=t=>"CDEFGAB".charAt(t),Vr=t=>t<0?pt("b",-t):pt("#",t),Kr=t=>t[0]==="b"?-t.length:t.length;function g(t){const e=JSON.stringify(t),r=ht.get(e);if(r)return r;const n=typeof t=="string"?Qr(t):Ct(t)?g(Zr(t)):_t(t)?g(t.name):Tt;return ht.set(e,n),n}var Wr=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function ze(t){const e=Wr.exec(t);return e?[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]:["","","",""]}function Yr(t){return g(kt(t))}var Xr=(t,e)=>(t%e+e)%e,xe=[0,2,4,5,7,9,11];function Qr(t){const e=ze(t);if(e[0]===""||e[3]!=="")return Tt;const r=e[0],n=e[1],o=e[2],s=(r.charCodeAt(0)+3)%7,i=Kr(n),a=o.length?+o:void 0,c=Et({step:s,alt:i,oct:a}),d=r+n+o,l=r+n,m=(xe[s]+i+120)%12,p=a===void 0?Xr(xe[s]+i,12)-1188:xe[s]+i+12*(a+1),f=p>=0&&p<=127?p:null,h=a===void 0?null:Math.pow(2,(p-69)/12)*440;return{empty:!1,acc:n,alt:i,chroma:m,coord:c,freq:h,height:p,letter:r,midi:f,name:d,oct:a,pc:l,step:s}}function Zr(t){const{step:e,alt:r,oct:n}=t,o=Gr(e);if(!o)return"";const s=o+Vr(r);return n||n===0?s+n:s}function A(t,e){const r=g(t),n=Array.isArray(e)?e:v(e).coord;if(r.empty||!n||n.length<2)return"";const o=r.coord,s=o.length===1?[o[0]+n[0]]:[o[0]+n[0],o[1]+n[1]];return Yr(s).name}function jt(t,e){const r=t.length;return n=>{if(!e)return"";const o=n<0?(r- -n%r)%r:n%r,s=Math.floor(n/r),i=A(e,[0,s]);return A(i,t[o])}}function pe(t,e){const r=g(t),n=g(e);if(r.empty||n.empty)return"";const o=r.coord,s=n.coord,i=s[0]-o[0],a=o.length===2&&s.length===2?s[1]-o[1]:-Math.floor(i*7/12),c=n.height===r.height&&n.midi!==null&&r.oct===n.oct&&r.step>n.step;return Ie([i,a],c).name}function Jr(t,e){const r=[];for(;e--;r[e]=e+t);return r}function en(t,e){const r=[];for(;e--;r[e]=t-e);return r}function tn(t,e){return t<e?Jr(t,e-t+1):en(t,t-e+1)}function Re(t,e){const r=e.length,n=(t%r+r)%r;return e.slice(n,r).concat(e.slice(0,n))}function It(t){return t.filter(e=>e===0||e)}var R={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},zt=t=>Number(t).toString(2).padStart(12,"0"),ut=t=>parseInt(t,2),rn=/^[01]{12}$/;function Rt(t){return rn.test(t)}var nn=t=>typeof t=="number"&&t>=0&&t<=4095,on=t=>t&&Rt(t.chroma),ft={[R.chroma]:R};function D(t){const e=Rt(t)?t:nn(t)?zt(t):Array.isArray(t)?pn(t):on(t)?t.chroma:R.chroma;return ft[e]=ft[e]||mn(e)}var sn=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function an(t){const e=[];for(let r=0;r<12;r++)t.charAt(r)==="1"&&e.push(sn[r]);return e}function cn(t,e=!0){const n=D(t).chroma.split("");return It(n.map((o,s)=>{const i=Re(s,n);return e&&i[0]==="0"?null:i.join("")}))}function ln(t){const e=D(t).setNum;return r=>{const n=D(r).setNum;return e&&e!==n&&(n&e)===n}}function Dt(t){const e=D(t).setNum;return r=>{const n=D(r).setNum;return e&&e!==n&&(n|e)===n}}function dn(t){const e=t.split("");return e.map((r,n)=>Re(n,e).join(""))}function mn(t){const e=ut(t),r=dn(t).map(ut).filter(s=>s>=2048).sort()[0],n=zt(r),o=an(t);return{empty:!1,name:"",setNum:e,chroma:t,normalized:n,intervals:o}}function pn(t){if(t.length===0)return R.chroma;let e;const r=[0,0,0,0,0,0,0,0,0,0,0,0];for(let n=0;n<t.length;n++)e=g(t[n]),e.empty&&(e=v(t[n])),e.empty||(r[e.chroma]=1);return r.join("")}var hn=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],un=hn,fn={...R,name:"",quality:"Unknown",intervals:[],aliases:[]},De=[],X={};function gn(t){return X[t]||fn}function Ue(){return De.slice()}function bn(t,e,r){const n=Pn(t),o={...D(t),name:r||"",quality:n,intervals:t,aliases:e};De.push(o),o.name&&(X[o.name]=o),X[o.setNum]=o,X[o.chroma]=o,o.aliases.forEach(s=>vn(o,s))}function vn(t,e){X[e]=t}function Pn(t){const e=r=>t.indexOf(r)!==-1;return e("5A")?"Augmented":e("3M")?"Major":e("5d")?"Diminished":e("3m")?"Minor":"Unknown"}un.forEach(([t,e,r])=>bn(t.split(" "),r.split(" "),e));De.sort((t,e)=>t.setNum-e.setNum);var Mn=t=>{const e=t.reduce((r,n)=>{const o=g(n).chroma;return o!==void 0&&(r[o]=r[o]||g(n).name),r},{});return r=>e[r]};function yn(t,e={}){const r=t.map(o=>g(o).pc).filter(o=>o);return g.length===0?[]:Sn(r,1,e).filter(o=>o.weight).sort((o,s)=>s.weight-o.weight).map(o=>o.name)}var be={anyThirds:384,perfectFifth:16,nonPerfectFifths:40,anySeventh:3},ve=t=>e=>!!(e&t),$n=ve(be.anyThirds),An=ve(be.perfectFifth),xn=ve(be.anySeventh),wn=ve(be.nonPerfectFifths);function _n(t){const e=parseInt(t.chroma,2);return $n(e)&&An(e)&&xn(e)}function Cn(t){const e=parseInt(t,2);return wn(e)?t:(e|16).toString(2)}function Sn(t,e,r){const n=t[0],o=g(n).chroma,s=Mn(t),i=cn(t,!1),a=[];return i.forEach((c,d)=>{const l=r.assumePerfectFifth&&Cn(c);Ue().filter(p=>r.assumePerfectFifth&&_n(p)?p.chroma===l:p.chroma===c).forEach(p=>{const f=p.aliases[0],h=s(d);d!==o?a.push({weight:.5*e,name:`${h}${f}/${n}`}):a.push({weight:1*e,name:`${h}${f}`})})}),a}function Nn(){return"1P 2M 3M 4P 5P 6m 7m".split(" ")}var Ut=v,En=t=>v(t).name,kn=t=>v(t).semitones,On=t=>v(t).q,Tn=t=>v(t).num;function jn(t){const e=v(t);return e.empty?"":e.simple+e.q}function In(t){const e=v(t);if(e.empty)return"";const r=(7-e.step)%7,n=e.type==="perfectable"?-e.alt:-(e.alt+1);return v({step:r,alt:n,oct:e.oct,dir:e.dir}).name}var zn=[1,2,2,3,3,4,5,5,6,6,7,7],Rn="P m M m M P d P m M m M".split(" ");function Fe(t){const e=t<0?-1:1,r=Math.abs(t),n=r%12,o=Math.floor(r/12);return e*(zn[n]+7*o)+Rn[n]}var Dn=pe,Ft=Ht((t,e)=>[t[0]+e[0],t[1]+e[1]]),Un=t=>e=>Ft(t,e),qt=Ht((t,e)=>[t[0]-e[0],t[1]-e[1]]);function Fn(t,e){const r=Ut(t);if(r.empty)return"";const[n,o,s]=r.coord;return Ie([n+e,o,s]).name}var qn={names:Nn,get:Ut,name:En,num:Tn,semitones:kn,quality:On,fromSemitones:Fe,distance:Dn,invert:In,simplify:jn,add:Ft,addTo:Un,subtract:qt,transposeFifths:Fn};function Ht(t){return(e,r)=>{const n=v(e).coord,o=v(r).coord;if(n&&o){const s=t(n,o);return Ie(s).name}}}var Hn=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Ln=Hn,Bn={...R,intervals:[],aliases:[]},Lt=[],Q={};function Bt(t){return Q[t]||Bn}function Gn(){return Lt.slice()}function Vn(t,e,r=[]){const n={...D(t),name:e,intervals:t,aliases:r};return Lt.push(n),Q[n.name]=n,Q[n.setNum]=n,Q[n.chroma]=n,n.aliases.forEach(o=>Kn(n,o)),n}function Kn(t,e){Q[e]=t}Ln.forEach(([t,e,...r])=>Vn(t.split(" "),e,r));var Gt={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function qe(t){const[e,r,n,o]=ze(t);return e===""?we("",t):e==="A"&&o==="ug"?we("","aug"):we(e+r,n+o)}function we(t,e){const r=e.split("/");if(r.length===1)return[t,r[0],""];const[n,o,s,i]=ze(r[1]);return n!==""&&s===""&&i===""?[t,r[0],n+o]:[t,e,""]}function w(t){if(Array.isArray(t))return le(t[1]||"",t[0],t[2]);if(t==="")return Gt;{const[e,r,n]=qe(t),o=le(r,e,n);return o.empty?le(t):o}}function le(t,e,r){const n=gn(t),o=g(e||""),s=g(r||"");if(n.empty||e&&o.empty||r&&s.empty)return Gt;const i=pe(o.pc,s.pc),a=n.intervals.indexOf(i),c=a>=0,d=c?s:g(""),l=a===-1?NaN:a+1,m=s.pc&&s.pc!==o.pc,p=Array.from(n.intervals);if(c)for(let $=1;$<l;$++){const Pe=p[0][0],Me=p[0][1],ie=parseInt(Pe,10)+7;p.push(`${ie}${Me}`),p.shift()}else if(m){const $=qt(pe(o.pc,s.pc),"8P");$&&p.unshift($)}const f=o.empty?[]:p.map($=>A(o.pc,$));t=n.aliases.indexOf(t)!==-1?t:n.aliases[0];const h=`${o.empty?"":o.pc}${t}${c&&l>1?"/"+d.pc:m?"/"+s.pc:""}`,y=`${e?o.pc+" ":""}${n.name}${c&&l>1?" over "+d.pc:m?" over "+s.pc:""}`;return{...n,name:y,symbol:h,tonic:o.pc,type:n.name,root:d.pc,bass:m?s.pc:"",intervals:p,rootDegree:l,notes:f}}var Wn=w;function Yn(t,e){const[r,n,o]=qe(t);if(!r)return t;const s=A(o,e),i=s?"/"+s:"";return A(r,e)+n+i}function Xn(t){const e=w(t),r=Dt(e.chroma);return Gn().filter(n=>r(n.chroma)).map(n=>n.name)}function Qn(t){const e=w(t),r=Dt(e.chroma);return Ue().filter(n=>r(n.chroma)).map(n=>e.tonic+n.aliases[0])}function Zn(t){const e=w(t),r=ln(e.chroma);return Ue().filter(n=>r(n.chroma)).map(n=>e.tonic+n.aliases[0])}function Jn(t,e){const r=w(t),n=e||r.tonic;return!n||r.empty?[]:r.intervals.map(o=>A(n,o))}function eo(t,e){const r=w(t),n=e||r.tonic,o=jt(r.intervals,n);return s=>s?o(s>0?s-1:s):""}function to(t,e){const r=w(t),n=e||r.tonic;return jt(r.intervals,n)}var Vt={getChord:le,get:w,detect:yn,chordScales:Xn,extended:Qn,reduced:Zn,tokenize:qe,transpose:Yn,degrees:eo,steps:to,notes:Jn,chord:Wn},ro=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],no=ro;no.forEach(([t,e,r])=>void 0);function oo(t){return+t>=0&&+t<=127}function so(t){if(oo(t))return+t;const e=g(t);return e.empty?null:e.midi}var io=Math.log(2),ao=Math.log(440);function Kt(t){const e=12*(Math.log(t)-ao)/io+69;return Math.round(e*100)/100}var co="C C# D D# E F F# G G# A A# B".split(" "),lo="C Db D Eb E F Gb G Ab A Bb B".split(" ");function F(t,e={}){if(isNaN(t)||t===-1/0||t===1/0)return"";t=Math.round(t);const n=(e.sharps===!0?co:lo)[t%12];if(e.pitchClass)return n;const o=Math.floor(t/12)-1;return n+o}var mo=["C","D","E","F","G","A","B"],Wt=t=>t.name,Yt=t=>t.map(g).filter(e=>!e.empty);function po(t){return t===void 0?mo.slice():Array.isArray(t)?Yt(t).map(Wt):[]}var M=g,ho=t=>M(t).name,G=t=>M(t).pc,uo=t=>M(t).acc,fo=t=>M(t).oct,go=t=>M(t).midi,He=t=>M(t).freq,bo=t=>M(t).chroma;function vo(t){return F(t)}function Po(t){return F(Kt(t))}function Mo(t){return F(Kt(t),{sharps:!0})}function yo(t){return F(t,{sharps:!0})}var $o=pe,q=A,Ao=A,Xt=t=>e=>q(e,t),xo=Xt,Qt=t=>e=>q(t,e),wo=Qt;function Zt(t,e){return q(t,[e,0])}var _o=Zt;function Co(t,e){return q(t,[0,e])}var Le=(t,e)=>t.height-e.height,So=(t,e)=>e.height-t.height;function Jt(t,e){return e=e||Le,Yt(t).sort(e).map(Wt)}function No(t){return Jt(t,Le).filter((e,r,n)=>r===0||e!==n[r-1])}var Eo=t=>{const e=M(t);return e.empty?"":F(e.midi||e.chroma,{sharps:e.alt>0,pitchClass:e.midi===null})};function Z(t,e){const r=M(t);if(r.empty)return"";const n=M(e||F(r.midi||r.chroma,{sharps:r.alt<0,pitchClass:!0}));if(n.empty||n.chroma!==r.chroma)return"";if(r.oct===void 0)return n.pc;const o=r.chroma-r.alt,s=n.chroma-n.alt,i=o>11||s<0?-1:o<0||s>11?1:0,a=r.oct+i;return n.pc+a}var C={names:po,get:M,name:ho,pitchClass:G,accidentals:uo,octave:fo,midi:go,ascending:Le,descending:So,distance:$o,sortedNames:Jt,sortedUniqNames:No,fromMidi:vo,fromMidiSharps:yo,freq:He,fromFreq:Po,fromFreqSharps:Mo,chroma:bo,transpose:q,tr:Ao,transposeBy:Xt,trBy:xo,transposeFrom:Qt,trFrom:wo,transposeFifths:Zt,transposeOctaves:Co,trFifths:_o,simplify:Eo,enharmonic:Z},Be=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],gt={...R,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},ko=Be.map(Oo),Ce={};ko.forEach(t=>{Ce[t.name]=t,t.aliases.forEach(e=>{Ce[e]=t})});function er(t){return typeof t=="string"?Ce[t.toLowerCase()]||gt:t&&t.name?er(t.name):gt}function Oo(t){const[e,r,n,o,s,i,a]=t,c=a?[a]:[],d=Number(r).toString(2);return{empty:!1,intervals:Bt(o).intervals,modeNum:e,chroma:d,normalized:d,name:o,setNum:r,alt:n,triad:s,seventh:i,aliases:c}}function tr(t){return(e,r)=>{const n=er(e);if(n.empty)return[];const o=Re(n.modeNum,t),s=n.intervals.map(i=>A(r,i));return o.map((i,a)=>s[a]+i)}}tr(Be.map(t=>t[4]));tr(Be.map(t=>t[5]));function rr(t){const e=It(t.map(r=>typeof r=="number"?r:so(r)));return!t.length||e.length!==t.length?[]:e.reduce((r,n)=>{const o=r[r.length-1];return r.concat(tn(o,n).slice(1))},[e[0]])}function To(t,e){return rr(t).map(r=>F(r,e))}var jo={numeric:rr,chromatic:To},Io={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function zo(t){if(typeof t!="string")return["",""];const e=t.indexOf(" "),r=g(t.substring(0,e));if(r.empty){const o=g(t);return o.empty?["",t.toLowerCase()]:[o.name,""]}const n=t.substring(r.name.length+1).toLowerCase();return[r.name,n.length?n:""]}function Ro(t){const e=Array.isArray(t)?t:zo(t),r=g(e[0]).name,n=Bt(e[1]);if(n.empty)return Io;const o=n.name,s=r?n.intervals.map(a=>A(r,a)):[],i=r?r+" "+o:o;return{...n,name:i,type:o,tonic:r,notes:s}}var Do=(t,e)=>{if(!e||!e.length)return t[0];const r=o=>C.midi(o[o.length-1])||0,n=o=>Math.abs(r(e)-r(o));return t.sort((o,s)=>n(o)-n(s))[0]},Uo={topNoteDiff:Do},Fo={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"]},nr={m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},qo={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"],m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},or=nr;function Ho(t,e=or){if(e[t])return e[t];const{aliases:r}=Vt.get("C"+t),n=Object.keys(e).find(o=>r.includes(o))||"";if(n!==void 0)return e[n]}var Se={lookup:Ho,lefthand:nr,triads:Fo,all:qo,defaultDictionary:or},sr=["C3","C5"],Lo=Se.all,Bo=Uo.topNoteDiff;function bt(t,e=sr,r=Lo,n=Bo,o){const s=Go(t,e,r);return!o||!o.length?s[0]:n(s,o)}function Go(t,e=sr,r=Se.triads){const[n,o]=Vt.tokenize(t),s=Se.lookup(o,r);if(!s)return[];const i=s.map(c=>c.split(" ")),a=jo.chromatic(e);return i.reduce((c,d)=>{const l=d.map(h=>qn.subtract(h,d[0])||""),m=C.transpose(n,d[0]),f=a.filter(h=>C.chroma(h)===C.chroma(m)).filter(h=>(C.midi(C.transpose(h,l[l.length-1]))||0)<=(C.midi(e[1])||0)).map(h=>C.enharmonic(h,m)).map(h=>l.map(y=>C.transpose(h,y)));return c.concat(f)},[])}var Vo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,Ge=(t,e,r,n)=>{for(var o=n>1?void 0:n?Ko(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&Vo(e,r,o),o};let re=class extends k{constructor(){super(...arguments),this.value="",this.error=""}render(){return u`
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

        ${this.error?u`<div class="error">${this.error}</div>`:u`<div class="hint">Enter chord symbols separated by spaces (e.g., Cmaj7 Am7 F G9). Press Enter to parse.</div>`}
      </div>
    `}onInput(t){const e=t.target;this.value=e.value,this.error&&(this.error="")}onKeydown(t){t.key==="Enter"&&(t.preventDefault(),this.parseAndEmit())}parseAndEmit(){const t=this.parseProgression(this.value);if(!t.length){this.error="No valid chord symbols were found.";return}this.error="";const e={progression:t,source:this.value};this.dispatchEvent(new CustomEvent("progression-parsed",{detail:e,bubbles:!0,composed:!0}))}parseProgression(t){const e=this.tokenize(t),r=[];for(const n of e){const o=w(n);o.empty||o.notes.length===0||r.push({symbol:n,tonic:o.tonic,quality:o.quality,notes:o.notes,intervals:o.intervals,aliases:o.aliases})}return r}tokenize(t){const e=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,r=t.match(e);return r?r.map(n=>n.trim()):[]}};re.styles=he`
    :host {
      display: block;
      color: var(--text);
    }

    .wrap {
      display: grid;
      gap: 0.5rem;
    }

    label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--muted);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .input-group {
      display: flex;
      gap: 0.5rem;
    }

    input {
      flex: 1;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 0.7rem 0.875rem;
      font: inherit;
      outline: none;
      background: var(--bg-1);
      color: var(--text);
      transition: all 150ms ease;
    }

    input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 2px var(--accent-glow);
    }

    button {
      border: none;
      border-radius: 12px;
      padding: 0.7rem 1.5rem;
      font: inherit;
      font-weight: 700;
      background: var(--pad-active);
      color: var(--text);
      cursor: pointer;
      box-shadow: 0 4px 12px var(--accent-glow);
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px var(--accent-glow);
    }

    button:active:not(:disabled) {
      transform: translateY(1px);
      box-shadow: 0 2px 4px var(--accent-glow);
    }

    button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      box-shadow: none;
    }

    .hint {
      font-size: 0.78rem;
      color: var(--muted);
      margin-top: 0.15rem;
      line-height: 1.35;
    }

    .error {
      font-size: 0.78rem;
      color: #fda4af;
      background: rgba(194, 70, 22, 0.15);
      border: 1px solid var(--accent);
      border-radius: 8px;
      padding: 0.5rem 0.75rem;
      margin-top: 0.25rem;
    }
  `;Ge([O({type:String})],re.prototype,"value",2);Ge([x()],re.prototype,"error",2);re=Ge([ge("chord-input")],re);var Wo=Object.defineProperty,Yo=Object.getOwnPropertyDescriptor,se=(t,e,r,n)=>{for(var o=n>1?void 0:n?Yo(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&Wo(e,r,o),o};let U=class extends k{constructor(){super(...arguments),this.originalChords=[],this.keyChords=[],this.keyLabel="",this.activeIndex=0}render(){const t=this.keyChords.length>0;return u`
      <div class="stack">
        <div class="row">
          <p class="row-label">Original</p>
          <div class="wrap">
            ${this.originalChords.map((e,r)=>u`
                <button
                  class=${r===this.activeIndex?"active":""}
                  @click=${()=>this.selectChord(r)}
                >
                  ${e.symbol}
                </button>
              `)}
          </div>
        </div>

        ${t?u`
              <div class="row">
                <p class="row-label">Key of ${this.keyLabel}</p>
                <div class="wrap">
                  ${this.keyChords.map((e,r)=>u`
                      <button
                        class=${r===this.activeIndex?"active":""}
                        @click=${()=>this.selectChord(r)}
                      >
                        ${e.symbol}
                      </button>
                    `)}
                </div>
              </div>
            `:null}
      </div>
    `}selectChord(t){this.dispatchEvent(new CustomEvent("chord-selected",{detail:t,bubbles:!0,composed:!0}))}};U.styles=he`
    :host {
      display: block;
    }

    .stack {
      display: grid;
      gap: 0.65rem;
    }

    .row {
      display: grid;
      gap: 0.35rem;
    }

    .row-label {
      margin: 0;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.74rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    button {
      border: 1px solid var(--border);
      background: var(--pad-dim);
      color: var(--text);
      border-radius: 999px;
      padding: 0.55rem 0.9rem;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      transition: transform 120ms cubic-bezier(0.4, 0, 0.2, 1), 
                  background 120ms cubic-bezier(0.4, 0, 0.2, 1), 
                  border-color 120ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    button:hover {
      transform: translateY(-1px);
      border-color: var(--accent);
      color: var(--text);
    }

    button.active {
      background: var(--pad-active);
      color: var(--text);
      border-color: var(--accent);
      box-shadow: 0 4px 12px var(--accent-glow);
    }
  `;se([O({attribute:!1})],U.prototype,"originalChords",2);se([O({attribute:!1})],U.prototype,"keyChords",2);se([O({type:String})],U.prototype,"keyLabel",2);se([O({type:Number})],U.prototype,"activeIndex",2);U=se([ge("progression-stepper")],U);let W=null;function ir(){return W||(W=new(window.AudioContext||window.webkitAudioContext)),W.state==="suspended"&&W.resume(),W}function Xo(t,e=.35){try{const r=ir(),n=He(t);if(!n)return;const o=r.createOscillator(),s=r.createGain(),i=r.createBiquadFilter();o.type="triangle",o.frequency.value=n,i.type="lowpass",i.frequency.value=1100,i.Q.value=.8;const a=r.currentTime;s.gain.setValueAtTime(0,a),s.gain.linearRampToValueAtTime(.18,a+.04),s.gain.setValueAtTime(.18,a+e-.08),s.gain.exponentialRampToValueAtTime(.001,a+e),o.connect(i),i.connect(s),s.connect(r.destination),o.start(a),o.stop(a+e)}catch(r){console.warn("Audio playback failed:",r)}}function Qo(t,e=.7){try{const r=ir(),n=r.currentTime;t.forEach(o=>{const s=He(o);if(!s)return;const i=r.createOscillator(),a=r.createGain(),c=r.createBiquadFilter();i.type="triangle",i.frequency.value=s,c.type="lowpass",c.frequency.value=900,c.Q.value=.8,a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.12,n+.06),a.gain.setValueAtTime(.12,n+e-.12),a.gain.exponentialRampToValueAtTime(.001,n+e),i.connect(c),c.connect(a),a.connect(r.destination),i.start(n),i.stop(n+e)})}catch(r){console.warn("Audio playback failed:",r)}}var Zo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,Ve=(t,e,r,n)=>{for(var o=n>1?void 0:n?Jo(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&Zo(e,r,o),o};let ne=class extends k{constructor(){super(...arguments),this.pads=[],this.recipe=[]}render(){const t=new Map(this.recipe.map((e,r)=>[e.index,r+1]));return u`
      <div class="shell">
        <div class="grid" role="grid" aria-label="Circuit pad grid">
          ${this.pads.map(e=>{if(!e.note)return u`<div class="gap" aria-hidden="true"></div>`;const r=t.get(e.index);return u`
              <div 
                class=${`pad ${e.state} ${r?"target":""}`} 
                role="button" 
                tabindex="0"
                aria-label=${this.getAriaLabel(e,r)}
                @click=${()=>this.onPadClick(e)}
                @keydown=${n=>this.onPadKeydown(n,e)}
              >
                <div class="pad-inner">
                  ${r?u`<span class="step">${r}</span>`:null}
                  <div>
                    <div>${e.label}</div>
                    <div class="meta">${e.row+1}:${e.col+1}</div>
                  </div>
                </div>
              </div>
            `})}
        </div>
      </div>
    `}onPadClick(t){t.midiNote&&(Xo(t.midiNote),this.dispatchEvent(new CustomEvent("pad-clicked",{detail:t,bubbles:!0,composed:!0})))}onPadKeydown(t,e){(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this.onPadClick(e))}getAriaLabel(t,e){return t.note?e?`${t.note} row ${t.row+1} column ${t.col+1} voicing note ${e} of ${this.recipe.length} (lowest to highest)`:`${t.note} row ${t.row+1} column ${t.col+1} ${t.state}`:`empty slot row ${t.row+1} column ${t.col+1}`}};ne.styles=he`
    :host {
      display: block;
    }

    .shell {
      border-radius: 24px;
      padding: 1rem;
      background: var(--bg-1);
      border: 1px solid var(--border);
      box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.02), 0 12px 36px rgb(0 0 0 / 0.45);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: 0.7rem;
    }

    .gap {
      aspect-ratio: 1;
      border-radius: 16px;
      background: transparent;
      border: none;
      box-shadow: none;
      pointer-events: none;
    }

    .pad {
      aspect-ratio: 1;
      border-radius: 16px;
      border: 1px solid var(--border);
      display: grid;
      place-items: center;
      text-align: center;
      padding: 0.3rem;
      color: var(--text);
      font-weight: 700;
      letter-spacing: 0.02em;
      background: var(--bg-2);
      box-shadow: inset 0 -8px 18px rgb(0 0 0 / 0.2);
      transition: transform 120ms cubic-bezier(0.4, 0, 0.2, 1), 
                  box-shadow 120ms cubic-bezier(0.4, 0, 0.2, 1), 
                  background 120ms cubic-bezier(0.4, 0, 0.2, 1),
                  border-color 120ms cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
      user-select: none;
      outline: none;
    }

    .pad:hover {
      transform: translateY(-2px);
      border-color: var(--accent);
    }

    .pad:active {
      transform: translateY(0) scale(0.96);
      box-shadow: inset 0 4px 12px rgb(0 0 0 / 0.45);
    }

    .pad:focus-visible {
      outline: 2px solid var(--accent);
      outline-offset: 2px;
    }

    .pad.dim {
      background: var(--pad-dim);
      color: var(--muted);
      opacity: 0.8;
    }

    .pad.lit {
      background: var(--pad-lit);
      box-shadow: 0 0 16px var(--accent-2-glow), inset 0 -8px 18px rgba(0,0,0,0.2);
      color: #1e1a17;
    }

    .pad.lit:hover {
      border-color: var(--accent-2);
      box-shadow: 0 0 20px var(--accent-2-glow), inset 0 -8px 18px rgba(0,0,0,0.2);
    }

    .pad.active {
      background: var(--pad-active);
      box-shadow: 0 0 18px var(--accent-glow), inset 0 -8px 18px rgba(0,0,0,0.2);
      color: white;
    }

    .pad.active:hover {
      border-color: var(--accent-hover);
      box-shadow: 0 0 22px var(--accent-glow), inset 0 -8px 18px rgba(0,0,0,0.2);
    }

    .meta {
      font-size: 0.68rem;
      opacity: 0.75;
    }

    .pad.target {
      outline: 2px solid var(--pad-target);
      outline-offset: 1px;
      box-shadow:
        0 0 0 2px var(--accent),
        0 0 16px var(--accent-glow),
        inset 0 -8px 18px rgba(0,0,0,0.2);
    }

    .pad.target:hover {
      box-shadow:
        0 0 0 2px var(--accent-hover),
        0 0 20px var(--accent-glow),
        inset 0 -8px 18px rgba(0,0,0,0.2);
    }

    .step {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: var(--pad-target);
      color: var(--bg-1);
      font-size: 0.68rem;
      font-weight: 800;
      display: grid;
      place-items: center;
      border: 1px solid var(--border);
    }

    .pad-inner {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }
  `;Ve([O({attribute:!1})],ne.prototype,"pads",2);Ve([O({attribute:!1})],ne.prototype,"recipe",2);ne=Ve([ge("circuit-grid")],ne);const S=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],es=["major","minor","dorian","mixolydian","lydian","phrygian","locrian","harmonic minor","melodic minor","major pentatonic","minor pentatonic","blues"],ae=S,ts=["triad","seventh","spread"],rs=["key","chord"],ns=5,os=3,ss=[0,2,4,5,7,9,11,12],is=[null,1,3,null,6,8,10,null];function vt(t,e){const r=e.anchorMode==="chord"?t?.tonic??e.key:e.key,n=E(r)??"C",o=S.indexOf(n),s=ms(e.key,e.scale),i=hs(n,s),a=new Set((t?.notes??[]).map(p=>E(p)).filter(Ke)),c=4,d=[];let l=c,m=-1;for(let p=0;p<32;p++){const f=i[p%i.length],h=S.indexOf(f);m!==-1&&h<m&&l++,d.push(`${f}${l}`),m=h}return Array.from({length:32},(p,f)=>{const h=Math.floor(f/8),y=f%8,$=3-h,Pe=y+$*os,Me=y+$*ns,ie=e.mode==="collapsed"?Pe:Me;let T="",ye="";if(e.mode==="collapsed"){const V=d[ie%d.length]??"";ye=V,T=E(G(V))??""}else{const V=(h+2)%4,lr=Math.floor(V/2)*12,Xe=V%2===0?is[y]:ss[y];if(Xe!==null&&o!==-1){const dr=Xe+lr,Qe=q(`${n}${c}`,Fe(dr));ye=Qe,T=E(G(Qe))??""}}const We=a.has(T),Ye=T===n,cr=s.includes(T);let $e="dim";return Ye?$e="active":We&&($e="lit"),{index:f,row:h,col:y,offset:ie,note:T,label:T||" ",state:$e,inChord:We,isRoot:Ye,inScale:cr,midiNote:ye}})}function Pt(t,e,r,n=0,o=4){return t?as(t,r).map((a,c)=>ls(a,c,e,r,n)).filter(a=>!!a).slice(0,o).map(a=>({note:a.note,row:a.row,col:a.col,index:a.index,offset:a.offset})).sort((a,c)=>a.offset-c.offset).map(({note:a,row:c,col:d,index:l})=>({note:a,row:c,col:d,index:l})):[]}function as(t,e){const r=new Map,n=[],o=E(t.tonic);for(let l=0;l<t.notes.length;l+=1){const m=E(t.notes[l]);if(!m)continue;n.includes(m)||n.push(m);const p=ds(t.intervals[l]);p!==null&&!r.has(p)&&r.set(p,m)}const s={triad:[3,5],seventh:[3,5,7],spread:[5,7,3]},i={triad:3,seventh:4,spread:4},a=Array.from(new Set([o,...s[e].map(l=>r.get(l)).filter(l=>!!l)].filter(l=>!!l)));if(a.length>=i[e])return a.slice(0,i[e]);const c=cs(t,e);return Array.from(new Set([...a,...c,...n])).slice(0,i[e])}function cs(t,e){let r=[];try{const a=bt(t.symbol);r=Array.isArray(a)?a:[]}catch{r=[]}if(r.length===0&&t.tonic&&t.quality)try{const a=bt(`${t.tonic}${t.quality}`);r=Array.isArray(a)?a:[]}catch{r=[]}const n=r.filter(a=>typeof a=="string").map(a=>E(a)).filter(Ke),o=Array.from(new Set(n));if(o.length===0)return[];if(e==="triad")return o.slice(0,3);if(e==="seventh")return o.slice(0,4);const i=[0,2,3,1].map(a=>o[a]).filter(a=>!!a);return Array.from(new Set(i)).slice(0,4)}function ls(t,e,r,n,o=0){const s=r.filter(c=>c.note===t).sort((c,d)=>c.offset-d.offset);if(s.length===0)return;const i=e<o;if(n==="spread"){let c=e;i&&(c+=1);const d=Math.min(c,s.length-1);return s[d]}const a=i?Math.min(1,s.length-1):0;return s[a]}function ds(t){if(!t)return null;const e=t.match(/^(\d+)/);if(!e)return null;const r=Number.parseInt(e[1],10);return Number.isFinite(r)?r:null}function ms(t,e){const n=Ro(`${t} ${e}`).notes.map(o=>E(o)).filter(Ke);return n.length===0?["C","D","E","F","G","A","B"]:Array.from(new Set(n))}function ps(t){const e=S.indexOf(t);return e===-1?S:ar(S,e)}function hs(t,e){const r=S.indexOf(t),n=e.slice().sort((o,s)=>Mt(o,r)-Mt(s,r));return n.length===0?ps(t):n.includes(t)?ar(n,n.indexOf(t)):[t,...n]}function Mt(t,e){const r=S.indexOf(t);return r===-1||e===-1?Number.MAX_SAFE_INTEGER:(r-e+12)%12}function ar(t,e){return[...t.slice(e),...t.slice(0,e)]}function E(t){if(!t)return null;const e=G(t);if(!e)return null;const r=Z(e);return S.includes(r)?r:e}function Ke(t){return t!==null}var us=Object.defineProperty,fs=Object.getOwnPropertyDescriptor,_=(t,e,r,n)=>{for(var o=n>1?void 0:n?fs(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&us(e,r,o),o};let P=class extends k{constructor(){super(...arguments),this.progression=[],this.originalKey="C",this.source="",this.activeIndex=0,this.config={key:"C",scale:"major",mode:"chromatic",anchorMode:"key"},this.voicing="triad",this.mobileConfigOpen=!1,this.autoPlay=!0,this.inversion=0}render(){const t=this.getTransposedProgression(),e=t[this.activeIndex]??null,r=vt(e,this.config),n=Pt(e,r,this.voicing,this.inversion),o=this.getMissingChordTones(e,r),s=this.originalKey!==this.config.key;return u`
      <div class="mobile-appbar">
        <div class="mobile-appbar-copy">
          <h1 class="mobile-appbar-title">Circuit Chord Forge</h1>
          <p class="mobile-appbar-subtitle">Map progressions to playable pad voicings for Circuit Tracks.</p>
        </div>
        <button
          class="mobile-config-trigger"
          aria-label="Open config"
          @click=${()=>this.toggleMobileConfig(!0)}
        >
          <span class="hamburger" aria-hidden="true"></span>
        </button>
      </div>

      <!-- Left Sidebar: Settings Column -->
      <aside class="sidebar desktop-controls">
        <section class="panel controls">
          ${this.renderConfigSection(e,o,"desktop")}
        </section>
      </aside>

      <!-- Right Main Panel: Workspace -->
      <main class="workspace">
        <section class="panel">
          <p class="panel-title">Progression Input</p>
          <chord-input @progression-parsed=${this.onParsed}></chord-input>
        </section>

        <section class="chips-container">
          <section class="panel">
            <p class="panel-title">Progression Stepper</p>
            ${this.progression.length===0?u`<p class="placeholder">Chords appear here after parsing.</p>`:u`
                  <progression-stepper
                    .originalChords=${this.progression}
                    .keyChords=${s?t:[]}
                    .keyLabel=${this.config.key}
                    .activeIndex=${this.activeIndex}
                    @chord-selected=${this.onChordSelected}
                  ></progression-stepper>
                `}
          </section>

          <section class="panel">
            <p class="panel-title">Circuit Tracks Grid</p>
            <p class="help-text" style="font-size: 0.8rem; color: #94a3b8; margin: 0 0 0.5rem 0;">
              Numbered highlights (1 to 4) show the notes of the voicing from lowest to highest pitch. Press all highlighted pads together to play the chord. Click any pad to audition its note.
            </p>
            <div class="legend" aria-label="Pad legend">
              <span class="legend-item legend-ring">Glow + Number (1-4) = Voicing Notes (Play together)</span>
              <span class="legend-item legend-chord">Lit = chord tone</span>
              <span class="legend-item legend-root">Active = root note</span>
              <span class="legend-item legend-dim">Dim = non-chord note</span>
              <span class="legend-item legend-target">Dark base = neutral grid style</span>
            </div>
            ${this.progression.length===0?u`<p class="placeholder">Need parsed chords before pad map can render.</p>`:u`<circuit-grid .pads=${r} .recipe=${n}></circuit-grid>`}
          </section>

          ${e?u`
                <section class="panel">
                  <p class="panel-title">Active Chord Inspector</p>
                  <div class="chord-inspector">
                    <div class="chip-row">
                      <strong style="color: #7dd3fc; margin-right: 0.5rem; text-transform: uppercase; font-size: 0.8rem;">Voiced Notes:</strong>
                      ${e.notes.map(i=>u`<span class="chip">${i}</span> `)}
                    </div>
                    <button class="play-button" @click=${this.playActiveVoicing}>
                      <span>🔊 Play Voicing</span>
                    </button>
                  </div>
                </section>
              `:null}
        </section>
      </main>

      <div
        class=${`mobile-config-backdrop ${this.mobileConfigOpen?"open":""}`}
        @click=${()=>this.toggleMobileConfig(!1)}
      ></div>
      <aside class=${`mobile-config-drawer ${this.mobileConfigOpen?"open":""}`}>
        <section class="panel mobile-config-panel">
          <div class="mobile-config-header">
            <p class="panel-title" style="margin: 0; border: none; padding: 0;">Circuit Config</p>
            <button class="mobile-close" @click=${()=>this.toggleMobileConfig(!1)}>Close</button>
          </div>
          ${this.renderConfigSection(e,o,"mobile",!1)}
        </section>
      </aside>
    `}renderConfigSection(t,e,r,n=!0){return u`
      ${n?u`<p class="panel-title">Circuit Config</p>`:null}

      <div class="field">
        <label>Pad Anchor</label>
        <div class="toggle-row">
          ${rs.map(o=>u`
              <button
                class=${this.config.anchorMode===o?"active":""}
                @click=${()=>this.setAnchorMode(o)}
              >
                ${o==="key"?"Project Key":"Chord Root"}
              </button>
            `)}
        </div>
        <details class="help-details">
          <summary>What is this?</summary>
          <p>Project Key keeps pad positions fixed for exact Circuit input. Chord Root recenters each chord to compare shapes.</p>
        </details>
      </div>

      <div class="field">
        <label>Pad Mode</label>
        <div class="toggle-row">
          <button
            class=${this.config.mode==="collapsed"?"active":""}
            @click=${()=>this.setMode("collapsed")}
          >
            Scale Collapse
          </button>
          <button
            class=${this.config.mode==="chromatic"?"active":""}
            @click=${()=>this.setMode("chromatic")}
          >
            Chromatic
          </button>
        </div>
        <details class="help-details">
          <summary>What is this?</summary>
          <p>Scale Collapse: only notes inside key/scale appear on pads. Chromatic: keyboard layout (top accidentals, bottom naturals).</p>
        </details>
        <p class="mode-note">
          In Chromatic, scale does not change pad notes. With Project Key anchor, chord changes move highlights across a fixed grid.
          With Chord Root anchor, different chords can share same shape positions.
        </p>
        ${this.config.mode==="collapsed"&&e.length>0?u`
              <p class="warning">
                Scale Collapse hides chord tones not in selected scale: ${e.join(", ")}.
                Switch to Chromatic or change key/scale to include them.
              </p>
            `:null}
      </div>

      <div class="field">
        <label for=${`${r}-key-select`}>Key</label>
        <select id=${`${r}-key-select`} .value=${this.config.key} @change=${this.onKeyChange}>
          ${ae.map(o=>u`<option value=${o}>${o}</option>`)}
        </select>
      </div>

      <div class="field">
        <label for=${`${r}-scale-select`}>Scale</label>
        <select id=${`${r}-scale-select`} .value=${this.config.scale} @change=${this.onScaleChange}>
          ${es.map(o=>u`<option value=${o}>${o}</option>`)}
        </select>
      </div>

      <div class="field">
        <label for=${`${r}-voicing-select`}>Voicing</label>
        <select
          id=${`${r}-voicing-select`}
          .value=${this.voicing}
          @change=${this.onVoicingChange}
          @input=${this.onVoicingChange}
        >
          ${ts.map(o=>u`<option value=${o}>${o}</option>`)}
        </select>
      </div>

      <div class="field">
        <label>Chord Inversion</label>
        <div class="toggle-row">
          ${[0,1,2,3].map(o=>u`
              <button
                class=${this.inversion===o?"active":""}
                @click=${()=>this.setInversion(o)}
              >
                ${o===0?"Root":o===1?"1st":o===2?"2nd":"3rd"}
              </button>
            `)}
        </div>
        <p class="help-text" style="font-size: 0.72rem; color: #64748b; margin-top: 0.2rem; line-height: 1.3;">
          Replicates Orchid's Voicing Dial. Shifts the lowest notes up by an octave to cycle through inversions.
        </p>
      </div>

      <div class="field">
        <label class="switch-label">
          <span>Auto-Play Chords</span>
          <input 
            type="checkbox" 
            class="switch-input" 
            ?checked=${this.autoPlay} 
            @change=${this.onAutoPlayToggle} 
          />
        </label>
      </div>

      <div class="status">
        <p class="panel-title" style="margin-top: 0.5rem;">Master Stage</p>
        ${t?u`
              <div class="summary-grid">
                <div class="summary-card">
                  <strong>Active Chord</strong>
                  <span>${t.symbol}</span>
                </div>
                <div class="summary-card">
                  <strong>Voicing</strong>
                  <span>${this.voicing}</span>
                </div>
                <div class="summary-card">
                  <strong>Inversion</strong>
                  <span>${this.inversion===0?"Root":this.inversion===1?"1st":this.inversion===2?"2nd":"3rd"}</span>
                </div>
                <div class="summary-card">
                  <strong>Pad Anchor</strong>
                  <span>${this.config.anchorMode==="key"?"Project Key":"Chord Root"}</span>
                </div>
              </div>
              <p class="source">${this.source}</p>
            `:u`<p class="placeholder">Parse progression, then select chord.</p>`}
      </div>
    `}playActiveVoicing(){const e=this.getTransposedProgression()[this.activeIndex]??null;if(!e)return;const r=vt(e,this.config),o=Pt(e,r,this.voicing,this.inversion).map(s=>r.find(i=>i.index===s.index)?.midiNote).filter(s=>!!s);o.length>0&&Qo(o)}onAutoPlayToggle(t){const e=t.target;this.autoPlay=e.checked}setInversion(t){this.inversion=t,this.autoPlay&&setTimeout(()=>this.playActiveVoicing(),20)}toggleMobileConfig(t){this.mobileConfigOpen=t}setAnchorMode(t){this.config={...this.config,anchorMode:t}}setMode(t){this.config={...this.config,mode:t}}onKeyChange(t){const e=t.target;this.config={...this.config,key:e.value}}onScaleChange(t){const e=t.target;this.config={...this.config,scale:e.value}}onVoicingChange(t){const e=t.target;this.voicing=e.value}onChordSelected(t){this.activeIndex=t.detail,this.autoPlay&&setTimeout(()=>this.playActiveVoicing(),20)}onParsed(t){this.progression=t.detail.progression,this.source=t.detail.source,this.activeIndex=0;const e=t.detail.progression[0],r=this.normalizeKey(e?.tonic)??this.config.key;this.originalKey=r,e?.tonic&&(this.config={...this.config,key:r}),this.autoPlay&&this.progression.length>0&&setTimeout(()=>this.playActiveVoicing(),50)}getTransposedProgression(){if(this.progression.length===0)return[];const t=this.getKeyShiftSemitones();return t===0?this.progression:this.progression.map(e=>this.transposeParsedChord(e,t)).filter(e=>!!e)}getKeyShiftSemitones(){const t=ae.indexOf(this.originalKey),e=ae.indexOf(this.config.key);return t===-1||e===-1?0:(e-t+12)%12}transposeParsedChord(t,e){const r=this.transposeChordSymbol(t.symbol,e);if(!r)return null;const n=w(r);return n.empty||n.notes.length===0?null:{symbol:r,tonic:n.tonic,quality:n.quality,notes:n.notes,intervals:n.intervals,aliases:n.aliases}}transposeChordSymbol(t,e){const r=t.match(/^([A-G](?:#{1,2}|b{1,2})?)(.*?)(?:\/([A-G](?:#{1,2}|b{1,2})?))?$/);if(!r)return null;const n=this.transposeNoteName(r[1],e);if(!n)return null;const o=r[2]??"",s=r[3]?this.transposeNoteName(r[3],e):null;return r[3]&&!s?null:`${n}${o}${s?`/${s}`:""}`}transposeNoteName(t,e){const r=Fe(e),n=q(t,r);return this.normalizeKey(n)}normalizeKey(t){const e=G(t??"");if(!e)return null;const r=Z(e);return ae.includes(r)?r:null}getMissingChordTones(t,e){if(!t)return[];const r=new Set(e.map(o=>o.note)),n=t.notes.map(o=>this.normalizeGridNote(o)).filter(o=>!!o);return Array.from(new Set(n.filter(o=>!r.has(o))))}normalizeGridNote(t){const e=G(t);return e?(Z(e),Z(e)):null}};P.styles=he`
    :host {
      display: grid;
      grid-template-columns: 320px 1fr;
      gap: 1.5rem;
      margin-top: 1rem;
      align-items: start;
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }

    .sidebar {
      display: grid;
      gap: 1.25rem;
    }

    .workspace {
      display: grid;
      gap: 1.25rem;
    }

    .panel {
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 1.25rem;
      background: var(--surface);
      backdrop-filter: blur(12px);
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.02),
        0 12px 36px rgb(0 0 0 / 0.45);
    }

    .panel-title {
      margin: 0 0 1rem 0;
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--accent-2);
      border-bottom: 1px solid var(--border);
      padding-bottom: 0.5rem;
    }

    .status {
      display: grid;
      gap: 0.75rem;
    }

    .placeholder {
      color: var(--muted);
      font-size: 0.9rem;
      text-align: center;
      padding: 2rem 1rem;
      border: 1px dashed var(--border);
      border-radius: 12px;
      margin: 0.5rem 0;
    }

    .controls {
      display: grid;
      gap: 1.2rem;
    }

    .field {
      display: grid;
      gap: 0.45rem;
    }

    .field label {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .field select {
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.65rem 0.8rem;
      font: inherit;
      background: var(--bg-1);
      color: var(--text);
      outline: none;
      cursor: pointer;
      transition: border-color 150ms ease;
    }

    .field select:focus {
      border-color: var(--accent);
    }

    .toggle-row {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .toggle-row button {
      flex: 1;
      min-width: 100px;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 0.6rem 0.8rem;
      font: inherit;
      font-weight: 700;
      font-size: 0.82rem;
      background: var(--bg-1);
      color: var(--text);
      cursor: pointer;
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .toggle-row button:hover {
      border-color: var(--accent);
      color: var(--text);
      background: rgba(242, 106, 54, 0.05);
    }

    .toggle-row button.active {
      background: var(--pad-active);
      color: var(--text);
      border-color: var(--accent);
      box-shadow: 0 4px 12px var(--accent-glow);
    }

    .switch-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      user-select: none;
    }

    .switch-label span {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--text);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .switch-input {
      appearance: none;
      width: 42px;
      height: 22px;
      background: var(--bg-1);
      border: 1px solid var(--border);
      border-radius: 999px;
      position: relative;
      outline: none;
      cursor: pointer;
      transition: background 150ms ease, border-color 150ms ease;
    }

    .switch-input:checked {
      background: var(--accent);
      border-color: var(--accent);
    }

    .switch-input::before {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--muted);
      top: 2px;
      left: 2px;
      transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms ease;
    }

    .switch-input:checked::before {
      transform: translateX(20px);
      background: #ffffff;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.65rem;
    }

    .summary-card {
      background: rgba(24, 21, 19, 0.4);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 0.65rem;
      display: flex;
      flex-direction: column;
    }

    .summary-card strong {
      display: block;
      margin-bottom: 0.15rem;
      color: var(--muted);
      font-size: 0.72rem;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    .summary-card span {
      color: var(--text);
      font-size: 0.95rem;
      font-weight: 700;
    }

    .source {
      margin: 0;
      font-size: 0.78rem;
      color: var(--muted);
      font-family: monospace;
      overflow-wrap: break-word;
    }

    .help-details {
      margin-top: 0.2rem;
      background: rgba(24, 21, 19, 0.3);
      border: 1px solid var(--border);
      border-radius: 8px;
    }

    .help-details summary {
      padding: 0.35rem 0.5rem;
      font-size: 0.74rem;
      font-weight: 700;
      color: var(--muted);
      cursor: pointer;
      user-select: none;
      outline: none;
    }

    .help-details p {
      padding: 0 0.5rem 0.5rem 0.5rem;
      margin: 0;
      font-size: 0.74rem;
      color: var(--muted);
      line-height: 1.35;
    }

    .mode-note {
      margin: 0;
      font-size: 0.76rem;
      color: var(--muted);
      line-height: 1.4;
      background: rgba(24, 21, 19, 0.5);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 0.6rem;
    }

    .warning {
      margin: 0;
      font-size: 0.78rem;
      color: #fda4af;
      line-height: 1.4;
      background: rgba(194, 70, 22, 0.15);
      border: 1px solid var(--accent);
      border-radius: 10px;
      padding: 0.6rem 0.75rem;
    }

    .chips-container {
      display: grid;
      gap: 1.25rem;
    }

    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      align-items: center;
    }

    .chip {
      border-radius: 12px;
      padding: 0.4rem 0.75rem;
      background: var(--pad-dim);
      color: var(--text);
      font-size: 0.85rem;
      font-weight: 700;
      border: 1px solid var(--border);
    }

    .play-button {
      border: none;
      border-radius: 12px;
      padding: 0.5rem 1rem;
      font: inherit;
      font-weight: 700;
      font-size: 0.84rem;
      background: var(--pad-lit);
      color: #1e1a17;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      box-shadow: 0 4px 12px var(--accent-2-glow);
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .play-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px var(--accent-2-glow);
    }

    .play-button:active {
      transform: translateY(1px);
      box-shadow: 0 2px 4px var(--accent-2-glow);
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.6rem 0 0.8rem;
    }

    .legend-item {
      border-radius: 8px;
      padding: 0.35rem 0.6rem;
      font-size: 0.72rem;
      font-weight: 700;
      border: 1px solid transparent;
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.05),
        0 1px 3px rgb(0 0 0 / 0.15);
      letter-spacing: 0.01em;
    }

    .legend-root {
      background: var(--pad-active);
      color: var(--text);
      border-color: var(--accent);
    }

    .legend-chord {
      background: var(--pad-lit);
      color: #1e1a17;
      border-color: var(--accent-2);
    }

    .legend-dim {
      background: var(--pad-dim);
      color: var(--muted);
      border-color: var(--border);
    }

    .legend-target {
      background: var(--bg-1);
      color: var(--text);
      border-color: var(--accent);
    }

    .legend-ring {
      background: var(--pad-dim);
      color: var(--text);
      border-color: var(--pad-target);
    }

    .mobile-config-trigger {
      display: none;
      border: 1px solid var(--border);
      border-radius: 10px;
      background: var(--bg-1);
      color: var(--text);
      font: inherit;
      width: 40px;
      height: 36px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .mobile-appbar {
      display: none;
      align-items: center;
      justify-content: space-between;
      gap: 0.55rem;
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 0.75rem 1rem;
      background: var(--surface);
      backdrop-filter: blur(12px);
      box-shadow: 0 8px 20px rgb(0 0 0 / 0.45);
    }

    .mobile-appbar-copy {
      min-width: 0;
      flex: 1;
    }

    .mobile-appbar-title {
      margin: 0;
      color: var(--accent);
      font-family: 'Space Grotesk', sans-serif;
      font-size: 0.95rem;
      font-weight: 800;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .mobile-appbar-subtitle {
      margin: 0.15rem 0 0;
      color: var(--muted);
      font-size: 0.72rem;
      line-height: 1.2;
    }

    .hamburger {
      width: 16px;
      height: 2px;
      background: currentColor;
      position: relative;
      border-radius: 2px;
    }

    .hamburger::before,
    .hamburger::after {
      content: '';
      position: absolute;
      left: 0;
      width: 16px;
      height: 2px;
      background: currentColor;
      border-radius: 2px;
    }

    .hamburger::before {
      top: -5px;
    }

    .hamburger::after {
      top: 5px;
    }

    .mobile-config-backdrop {
      position: fixed;
      inset: 0;
      background: rgb(2 6 23 / 0.62);
      opacity: 0;
      pointer-events: none;
      transition: opacity 180ms ease;
      z-index: 20;
    }

    .mobile-config-backdrop.open {
      opacity: 1;
      pointer-events: auto;
    }

    .mobile-config-drawer {
      position: fixed;
      right: 0;
      top: 0;
      height: 100dvh;
      width: min(90vw, 360px);
      padding: 0.75rem;
      box-sizing: border-box;
      transform: translateX(calc(100% + 1rem));
      transition: transform 220ms ease, opacity 180ms ease;
      z-index: 21;
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
    }

    .mobile-config-drawer.open {
      transform: translateX(0);
      pointer-events: auto;
      opacity: 1;
      visibility: visible;
    }

    .mobile-config-panel {
      height: 100%;
      overflow: auto;
    }

    .mobile-config-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
    }

    .mobile-close {
      border: 1px solid #3a4a61;
      border-radius: 999px;
      background: #0f1724;
      color: #dbe8f8;
      font: inherit;
      font-size: 0.8rem;
      padding: 0.35rem 0.75rem;
      cursor: pointer;
    }

    .chord-inspector {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
      :host {
        grid-template-columns: 1fr;
      }

      .mobile-appbar {
        display: flex;
      }

      .mobile-config-trigger {
        display: inline-flex;
      }

      .desktop-controls {
        display: none;
      }
    }
  `;_([x()],P.prototype,"progression",2);_([x()],P.prototype,"originalKey",2);_([x()],P.prototype,"source",2);_([x()],P.prototype,"activeIndex",2);_([x()],P.prototype,"config",2);_([x()],P.prototype,"voicing",2);_([x()],P.prototype,"mobileConfigOpen",2);_([x()],P.prototype,"autoPlay",2);_([x()],P.prototype,"inversion",2);P=_([ge("chord-mapper-app")],P);
