(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const ee=globalThis,Pe=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Me=Symbol(),De=new WeakMap;let ot=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==Me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Pe&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=De.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&De.set(r,e))}return e}toString(){return this.cssText}};const Wt=t=>new ot(typeof t=="string"?t:t+"",void 0,Me),se=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new ot(r,t,Me)},Xt=(t,e)=>{if(Pe)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),o=ee.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)}},ze=Pe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return Wt(r)})(t):t;const{is:Yt,defineProperty:Zt,getOwnPropertyDescriptor:Jt,getOwnPropertyNames:Qt,getOwnPropertySymbols:er,getPrototypeOf:tr}=Object,ie=globalThis,Ue=ie.trustedTypes,rr=Ue?Ue.emptyScript:"",nr=ie.reactiveElementPolyfillSupport,L=(t,e)=>t,re={toAttribute(t,e){switch(e){case Boolean:t=t?rr:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},be=(t,e)=>!Yt(t,e),He={attribute:!0,type:String,converter:re,reflect:!1,useDefault:!1,hasChanged:be};Symbol.metadata??=Symbol("metadata"),ie.litPropertyMetadata??=new WeakMap;let D=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=He){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,r);o!==void 0&&Zt(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){const{get:o,set:s}=Jt(this.prototype,e)??{get(){return this[r]},set(i){this[r]=i}};return{get:o,set(i){const a=o?.call(this);s?.call(this,i),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??He}static _$Ei(){if(this.hasOwnProperty(L("elementProperties")))return;const e=tr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(L("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(L("properties"))){const r=this.properties,n=[...Qt(r),...er(r)];for(const o of n)this.createProperty(o,r[o])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift(ze(o))}else e!==void 0&&r.push(ze(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Xt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:re).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:re;this._$Em=o;const a=i.fromAttribute(r,s.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,r,n,o=!1,s){if(e!==void 0){const i=this.constructor;if(o===!1&&(s=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??be)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:o,wrapped:s},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??r??this[e]),s!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n){const{wrapped:i}=s,a=this[o];i!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[L("elementProperties")]=new Map,D[L("finalized")]=new Map,nr?.({ReactiveElement:D}),(ie.reactiveElementVersions??=[]).push("2.1.2");const ve=globalThis,Fe=t=>t,ne=ve.trustedTypes,Le=ne?ne.createPolicy("lit-html",{createHTML:t=>t}):void 0,st="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+_,or=`<${it}>`,E=document,G=()=>E.createComment(""),V=t=>t===null||typeof t!="object"&&typeof t!="function",$e=Array.isArray,sr=t=>$e(t)||typeof t?.[Symbol.iterator]=="function",me=`[ 	
\f\r]`,F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qe=/-->/g,Be=/>/g,C=RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ge=/'/g,Ve=/"/g,at=/^(?:script|style|textarea|title)$/i,ir=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),u=ir(1),z=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Ke=new WeakMap,S=E.createTreeWalker(E,129);function ct(t,e){if(!$e(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Le!==void 0?Le.createHTML(e):e}const ar=(t,e)=>{const r=t.length-1,n=[];let o,s=e===2?"<svg>":e===3?"<math>":"",i=F;for(let a=0;a<r;a++){const c=t[a];let l,m,d=-1,h=0;for(;h<c.length&&(i.lastIndex=h,m=i.exec(c),m!==null);)h=i.lastIndex,i===F?m[1]==="!--"?i=qe:m[1]!==void 0?i=Be:m[2]!==void 0?(at.test(m[2])&&(o=RegExp("</"+m[2],"g")),i=C):m[3]!==void 0&&(i=C):i===C?m[0]===">"?(i=o??F,d=-1):m[1]===void 0?d=-2:(d=i.lastIndex-m[2].length,l=m[1],i=m[3]===void 0?C:m[3]==='"'?Ve:Ge):i===Ve||i===Ge?i=C:i===qe||i===Be?i=F:(i=C,o=void 0);const f=i===C&&t[a+1].startsWith("/>")?" ":"";s+=i===F?c+or:d>=0?(n.push(l),c.slice(0,d)+st+c.slice(d)+_+f):c+_+(d===-2?a:f)}return[ct(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class K{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const a=e.length-1,c=this.parts,[l,m]=ar(e,r);if(this.el=K.createElement(l,n),S.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=S.nextNode())!==null&&c.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(st)){const h=m[i++],f=o.getAttribute(d).split(_),p=/([.?@])?(.*)/.exec(h);c.push({type:1,index:s,name:p[2],strings:f,ctor:p[1]==="."?lr:p[1]==="?"?dr:p[1]==="@"?mr:ae}),o.removeAttribute(d)}else d.startsWith(_)&&(c.push({type:6,index:s}),o.removeAttribute(d));if(at.test(o.tagName)){const d=o.textContent.split(_),h=d.length-1;if(h>0){o.textContent=ne?ne.emptyScript:"";for(let f=0;f<h;f++)o.append(d[f],G()),S.nextNode(),c.push({type:2,index:++s});o.append(d[h],G())}}}else if(o.nodeType===8)if(o.data===it)c.push({type:2,index:s});else{let d=-1;for(;(d=o.data.indexOf(_,d+1))!==-1;)c.push({type:7,index:s}),d+=_.length-1}s++}}static createElement(e,r){const n=E.createElement("template");return n.innerHTML=e,n}}function U(t,e,r=t,n){if(e===z)return e;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const s=V(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(t),o._$AT(t,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(e=U(t,o._$AS(t,e.values),o,n)),e}class cr{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,o=(e?.creationScope??E).importNode(r,!0);S.currentNode=o;let s=S.nextNode(),i=0,a=0,c=n[0];for(;c!==void 0;){if(i===c.index){let l;c.type===2?l=new J(s,s.nextSibling,this,e):c.type===1?l=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(l=new hr(s,this,e)),this._$AV.push(l),c=n[++a]}i!==c?.index&&(s=S.nextNode(),i++)}return S.currentNode=E,o}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,n,o){this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=U(this,e,r),V(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==z&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):sr(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==P&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=K.createElement(ct(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const s=new cr(o,this),i=s.u(this.options);s.p(r),this.T(i),this._$AH=s}}_$AC(e){let r=Ke.get(e.strings);return r===void 0&&Ke.set(e.strings,r=new K(e)),r}k(e){$e(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of e)o===r.length?r.push(n=new J(this.O(G()),this.O(G()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const n=Fe(e).nextSibling;Fe(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ae{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,o,s){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=P}_$AI(e,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)e=U(this,e,r,0),i=!V(e)||e!==this._$AH&&e!==z,i&&(this._$AH=e);else{const a=e;let c,l;for(e=s[0],c=0;c<s.length-1;c++)l=U(this,a[n+c],r,c),l===z&&(l=this._$AH[c]),i||=!V(l)||l!==this._$AH[c],l===P?e=P:e!==P&&(e+=(l??"")+s[c+1]),this._$AH[c]=l}i&&!o&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class lr extends ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}class dr extends ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==P)}}class mr extends ae{constructor(e,r,n,o,s){super(e,r,n,o,s),this.type=5}_$AI(e,r=this){if((e=U(this,e,r,0)??P)===z)return;const n=this._$AH,o=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class hr{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const pr=ve.litHtmlPolyfillSupport;pr?.(K,J),(ve.litHtmlVersions??=[]).push("3.3.2");const ur=(t,e,r)=>{const n=r?.renderBefore??e;let o=n._$litPart$;if(o===void 0){const s=r?.renderBefore??null;n._$litPart$=o=new J(e.insertBefore(G(),s),s,void 0,r??{})}return o._$AI(t),o};const ye=globalThis;class w extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ur(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}w._$litElement$=!0,w.finalized=!0,ye.litElementHydrateSupport?.({LitElement:w});const fr=ye.litElementPolyfillSupport;fr?.({LitElement:w});(ye.litElementVersions??=[]).push("4.2.2");const ce=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};const gr={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:be},Pr=(t=gr,e,r)=>{const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),n==="accessor"){const{name:i}=r;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(i,c,t,!0,a)},init(a){return a!==void 0&&this.C(i,void 0,t,a),a}}}if(n==="setter"){const{name:i}=r;return function(a){const c=this[i];e.call(this,a),this.requestUpdate(i,c,t,!0,a)}}throw Error("Unsupported decorator location: "+n)};function H(t){return(e,r)=>typeof r=="object"?Pr(t,e,r):((n,o,s)=>{const i=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),i?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}function T(t){return H({...t,state:!0,attribute:!1})}function lt(t){return t!==null&&typeof t=="object"&&"name"in t&&typeof t.name=="string"}function dt(t){return t!==null&&typeof t=="object"&&"step"in t&&typeof t.step=="number"&&"alt"in t&&typeof t.alt=="number"&&!isNaN(t.step)&&!isNaN(t.alt)}var mt=[0,2,4,-1,1,3,5],ht=mt.map(t=>Math.floor(t*7/12));function pt(t){const{step:e,alt:r,oct:n,dir:o=1}=t,s=mt[e]+7*r;if(n===void 0)return[o*s];const i=n-ht[e]-4*r;return[o*s,o*i]}var Mr=[3,0,4,1,5,2,6];function ut(t){const[e,r,n]=t,o=Mr[br(e)],s=Math.floor((e+1)/7);if(r===void 0)return{step:o,alt:s,dir:n};const i=r+4*s+ht[o];return{step:o,alt:s,oct:i,dir:n}}function br(t){const e=(t+1)%7;return e<0?7+e:e}var We=(t,e)=>Array(Math.abs(e)+1).join(t),ue=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),vr="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",$r="(AA|A|P|M|m|d|dd)([-+]?\\d+)",yr=new RegExp("^"+vr+"|"+$r+"$");function Ar(t){const e=yr.exec(`${t}`);return e===null?["",""]:e[1]?[e[1],e[2]]:[e[4],e[3]]}var Xe={};function M(t){return typeof t=="string"?Xe[t]||(Xe[t]=xr(t)):dt(t)?M(wr(t)):lt(t)?M(t.name):ue}var Ye=[0,2,4,5,7,9,11],ft="PMMPPMM";function xr(t){const e=Ar(t);if(e[0]==="")return ue;const r=+e[0],n=e[1],o=(Math.abs(r)-1)%7,s=ft[o];if(s==="M"&&n==="P")return ue;const i=s==="M"?"majorable":"perfectable",a=""+r+n,c=r<0?-1:1,l=r===8||r===-8?r:c*(o+1),m=_r(i,n),d=Math.floor((Math.abs(r)-1)/7),h=c*(Ye[o]+m+12*d),f=(c*(Ye[o]+m)%12+12)%12,p=pt({step:o,alt:m,oct:d,dir:c});return{empty:!1,name:a,num:r,q:n,step:o,alt:m,dir:c,type:i,simple:l,semitones:h,chroma:f,coord:p,oct:d}}function Ae(t,e){const[r,n=0]=t,o=r*7+n*12<0,s=e||o?[-r,-n,-1]:[r,n,1];return M(ut(s))}function _r(t,e){return e==="M"&&t==="majorable"||e==="P"&&t==="perfectable"?0:e==="m"&&t==="majorable"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?-1*(t==="perfectable"?e.length:e.length+1):0}function wr(t){const{step:e,alt:r,oct:n=0,dir:o}=t;if(!o)return"";const s=e+1+7*n,i=s===0?e+1:s,a=o<0?"-":"",c=ft[e]==="M"?"majorable":"perfectable";return a+i+Cr(c,r)}function Cr(t,e){return e===0?t==="majorable"?"M":"P":e===-1&&t==="majorable"?"m":e>0?We("A",e):We("d",t==="perfectable"?e:e+1)}var Ze=(t,e)=>Array(Math.abs(e)+1).join(t),gt=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),Je=new Map,Sr=t=>"CDEFGAB".charAt(t),Nr=t=>t<0?Ze("b",-t):Ze("#",t),Er=t=>t[0]==="b"?-t.length:t.length;function g(t){const e=JSON.stringify(t),r=Je.get(e);if(r)return r;const n=typeof t=="string"?kr(t):dt(t)?g(Ir(t)):lt(t)?g(t.name):gt;return Je.set(e,n),n}var Or=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function xe(t){const e=Or.exec(t);return e?[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]:["","","",""]}function jr(t){return g(ut(t))}var Tr=(t,e)=>(t%e+e)%e,he=[0,2,4,5,7,9,11];function kr(t){const e=xe(t);if(e[0]===""||e[3]!=="")return gt;const r=e[0],n=e[1],o=e[2],s=(r.charCodeAt(0)+3)%7,i=Er(n),a=o.length?+o:void 0,c=pt({step:s,alt:i,oct:a}),l=r+n+o,m=r+n,d=(he[s]+i+120)%12,h=a===void 0?Tr(he[s]+i,12)-1188:he[s]+i+12*(a+1),f=h>=0&&h<=127?h:null,p=a===void 0?null:Math.pow(2,(h-69)/12)*440;return{empty:!1,acc:n,alt:i,chroma:d,coord:c,freq:p,height:h,letter:r,midi:f,name:l,oct:a,pc:m,step:s}}function Ir(t){const{step:e,alt:r,oct:n}=t,o=Sr(e);if(!o)return"";const s=o+Nr(r);return n||n===0?s+n:s}function $(t,e){const r=g(t),n=Array.isArray(e)?e:M(e).coord;if(r.empty||!n||n.length<2)return"";const o=r.coord,s=o.length===1?[o[0]+n[0]]:[o[0]+n[0],o[1]+n[1]];return jr(s).name}function Pt(t,e){const r=t.length;return n=>{if(!e)return"";const o=n<0?(r- -n%r)%r:n%r,s=Math.floor(n/r),i=$(e,[0,s]);return $(i,t[o])}}function oe(t,e){const r=g(t),n=g(e);if(r.empty||n.empty)return"";const o=r.coord,s=n.coord,i=s[0]-o[0],a=o.length===2&&s.length===2?s[1]-o[1]:-Math.floor(i*7/12),c=n.height===r.height&&n.midi!==null&&r.oct===n.oct&&r.step>n.step;return Ae([i,a],c).name}function Rr(t,e){const r=[];for(;e--;r[e]=e+t);return r}function Dr(t,e){const r=[];for(;e--;r[e]=t-e);return r}function zr(t,e){return t<e?Rr(t,e-t+1):Dr(t,t-e+1)}function _e(t,e){const r=e.length,n=(t%r+r)%r;return e.slice(n,r).concat(e.slice(0,n))}function Mt(t){return t.filter(e=>e===0||e)}var O={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},bt=t=>Number(t).toString(2).padStart(12,"0"),Qe=t=>parseInt(t,2),Ur=/^[01]{12}$/;function vt(t){return Ur.test(t)}var Hr=t=>typeof t=="number"&&t>=0&&t<=4095,Fr=t=>t&&vt(t.chroma),et={[O.chroma]:O};function j(t){const e=vt(t)?t:Hr(t)?bt(t):Array.isArray(t)?Wr(t):Fr(t)?t.chroma:O.chroma;return et[e]=et[e]||Kr(e)}var Lr=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function qr(t){const e=[];for(let r=0;r<12;r++)t.charAt(r)==="1"&&e.push(Lr[r]);return e}function Br(t,e=!0){const n=j(t).chroma.split("");return Mt(n.map((o,s)=>{const i=_e(s,n);return e&&i[0]==="0"?null:i.join("")}))}function Gr(t){const e=j(t).setNum;return r=>{const n=j(r).setNum;return e&&e!==n&&(n&e)===n}}function $t(t){const e=j(t).setNum;return r=>{const n=j(r).setNum;return e&&e!==n&&(n|e)===n}}function Vr(t){const e=t.split("");return e.map((r,n)=>_e(n,e).join(""))}function Kr(t){const e=Qe(t),r=Vr(t).map(Qe).filter(s=>s>=2048).sort()[0],n=bt(r),o=qr(t);return{empty:!1,name:"",setNum:e,chroma:t,normalized:n,intervals:o}}function Wr(t){if(t.length===0)return O.chroma;let e;const r=[0,0,0,0,0,0,0,0,0,0,0,0];for(let n=0;n<t.length;n++)e=g(t[n]),e.empty&&(e=M(t[n])),e.empty||(r[e.chroma]=1);return r.join("")}var Xr=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Yr=Xr,Zr={...O,name:"",quality:"Unknown",intervals:[],aliases:[]},we=[],q={};function Jr(t){return q[t]||Zr}function Ce(){return we.slice()}function Qr(t,e,r){const n=tn(t),o={...j(t),name:r||"",quality:n,intervals:t,aliases:e};we.push(o),o.name&&(q[o.name]=o),q[o.setNum]=o,q[o.chroma]=o,o.aliases.forEach(s=>en(o,s))}function en(t,e){q[e]=t}function tn(t){const e=r=>t.indexOf(r)!==-1;return e("5A")?"Augmented":e("3M")?"Major":e("5d")?"Diminished":e("3m")?"Minor":"Unknown"}Yr.forEach(([t,e,r])=>Qr(t.split(" "),r.split(" "),e));we.sort((t,e)=>t.setNum-e.setNum);var rn=t=>{const e=t.reduce((r,n)=>{const o=g(n).chroma;return o!==void 0&&(r[o]=r[o]||g(n).name),r},{});return r=>e[r]};function nn(t,e={}){const r=t.map(o=>g(o).pc).filter(o=>o);return g.length===0?[]:mn(r,1,e).filter(o=>o.weight).sort((o,s)=>s.weight-o.weight).map(o=>o.name)}var le={anyThirds:384,perfectFifth:16,nonPerfectFifths:40,anySeventh:3},de=t=>e=>!!(e&t),on=de(le.anyThirds),sn=de(le.perfectFifth),an=de(le.anySeventh),cn=de(le.nonPerfectFifths);function ln(t){const e=parseInt(t.chroma,2);return on(e)&&sn(e)&&an(e)}function dn(t){const e=parseInt(t,2);return cn(e)?t:(e|16).toString(2)}function mn(t,e,r){const n=t[0],o=g(n).chroma,s=rn(t),i=Br(t,!1),a=[];return i.forEach((c,l)=>{const m=r.assumePerfectFifth&&dn(c);Ce().filter(h=>r.assumePerfectFifth&&ln(h)?h.chroma===m:h.chroma===c).forEach(h=>{const f=h.aliases[0],p=s(l);l!==o?a.push({weight:.5*e,name:`${p}${f}/${n}`}):a.push({weight:1*e,name:`${p}${f}`})})}),a}function hn(){return"1P 2M 3M 4P 5P 6m 7m".split(" ")}var yt=M,pn=t=>M(t).name,un=t=>M(t).semitones,fn=t=>M(t).q,gn=t=>M(t).num;function Pn(t){const e=M(t);return e.empty?"":e.simple+e.q}function Mn(t){const e=M(t);if(e.empty)return"";const r=(7-e.step)%7,n=e.type==="perfectable"?-e.alt:-(e.alt+1);return M({step:r,alt:n,oct:e.oct,dir:e.dir}).name}var bn=[1,2,2,3,3,4,5,5,6,6,7,7],vn="P m M m M P d P m M m M".split(" ");function $n(t){const e=t<0?-1:1,r=Math.abs(t),n=r%12,o=Math.floor(r/12);return e*(bn[n]+7*o)+vn[n]}var yn=oe,At=_t((t,e)=>[t[0]+e[0],t[1]+e[1]]),An=t=>e=>At(t,e),xt=_t((t,e)=>[t[0]-e[0],t[1]-e[1]]);function xn(t,e){const r=yt(t);if(r.empty)return"";const[n,o,s]=r.coord;return Ae([n+e,o,s]).name}var _n={names:hn,get:yt,name:pn,num:gn,semitones:un,quality:fn,fromSemitones:$n,distance:yn,invert:Mn,simplify:Pn,add:At,addTo:An,subtract:xt,transposeFifths:xn};function _t(t){return(e,r)=>{const n=M(e).coord,o=M(r).coord;if(n&&o){const s=t(n,o);return Ae(s).name}}}var wn=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Cn=wn,Sn={...O,intervals:[],aliases:[]},wt=[],B={};function Ct(t){return B[t]||Sn}function Nn(){return wt.slice()}function En(t,e,r=[]){const n={...j(t),name:e,intervals:t,aliases:r};return wt.push(n),B[n.name]=n,B[n.setNum]=n,B[n.chroma]=n,n.aliases.forEach(o=>On(n,o)),n}function On(t,e){B[e]=t}Cn.forEach(([t,e,...r])=>En(t.split(" "),e,r));var St={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Se(t){const[e,r,n,o]=xe(t);return e===""?pe("",t):e==="A"&&o==="ug"?pe("","aug"):pe(e+r,n+o)}function pe(t,e){const r=e.split("/");if(r.length===1)return[t,r[0],""];const[n,o,s,i]=xe(r[1]);return n!==""&&s===""&&i===""?[t,r[0],n+o]:[t,e,""]}function x(t){if(Array.isArray(t))return te(t[1]||"",t[0],t[2]);if(t==="")return St;{const[e,r,n]=Se(t),o=te(r,e,n);return o.empty?te(t):o}}function te(t,e,r){const n=Jr(t),o=g(e||""),s=g(r||"");if(n.empty||e&&o.empty||r&&s.empty)return St;const i=oe(o.pc,s.pc),a=n.intervals.indexOf(i),c=a>=0,l=c?s:g(""),m=a===-1?NaN:a+1,d=s.pc&&s.pc!==o.pc,h=Array.from(n.intervals);if(c)for(let b=1;b<m;b++){const Gt=h[0][0],Vt=h[0][1],Kt=parseInt(Gt,10)+7;h.push(`${Kt}${Vt}`),h.shift()}else if(d){const b=xt(oe(o.pc,s.pc),"8P");b&&h.unshift(b)}const f=o.empty?[]:h.map(b=>$(o.pc,b));t=n.aliases.indexOf(t)!==-1?t:n.aliases[0];const p=`${o.empty?"":o.pc}${t}${c&&m>1?"/"+l.pc:d?"/"+s.pc:""}`,R=`${e?o.pc+" ":""}${n.name}${c&&m>1?" over "+l.pc:d?" over "+s.pc:""}`;return{...n,name:R,symbol:p,tonic:o.pc,type:n.name,root:l.pc,bass:d?s.pc:"",intervals:h,rootDegree:m,notes:f}}var jn=x;function Tn(t,e){const[r,n,o]=Se(t);if(!r)return t;const s=$(o,e),i=s?"/"+s:"";return $(r,e)+n+i}function kn(t){const e=x(t),r=$t(e.chroma);return Nn().filter(n=>r(n.chroma)).map(n=>n.name)}function In(t){const e=x(t),r=$t(e.chroma);return Ce().filter(n=>r(n.chroma)).map(n=>e.tonic+n.aliases[0])}function Rn(t){const e=x(t),r=Gr(e.chroma);return Ce().filter(n=>r(n.chroma)).map(n=>e.tonic+n.aliases[0])}function Dn(t,e){const r=x(t),n=e||r.tonic;return!n||r.empty?[]:r.intervals.map(o=>$(n,o))}function zn(t,e){const r=x(t),n=e||r.tonic,o=Pt(r.intervals,n);return s=>s?o(s>0?s-1:s):""}function Un(t,e){const r=x(t),n=e||r.tonic;return Pt(r.intervals,n)}var Nt={getChord:te,get:x,detect:nn,chordScales:kn,extended:In,reduced:Rn,tokenize:Se,transpose:Tn,degrees:zn,steps:Un,notes:Dn,chord:jn},Hn=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],Fn=Hn;Fn.forEach(([t,e,r])=>void 0);function Ln(t){return+t>=0&&+t<=127}function qn(t){if(Ln(t))return+t;const e=g(t);return e.empty?null:e.midi}var Bn=Math.log(2),Gn=Math.log(440);function Et(t){const e=12*(Math.log(t)-Gn)/Bn+69;return Math.round(e*100)/100}var Vn="C C# D D# E F F# G G# A A# B".split(" "),Kn="C Db D Eb E F Gb G Ab A Bb B".split(" ");function k(t,e={}){if(isNaN(t)||t===-1/0||t===1/0)return"";t=Math.round(t);const n=(e.sharps===!0?Vn:Kn)[t%12];if(e.pitchClass)return n;const o=Math.floor(t/12)-1;return n+o}var Wn=["C","D","E","F","G","A","B"],Ot=t=>t.name,jt=t=>t.map(g).filter(e=>!e.empty);function Xn(t){return t===void 0?Wn.slice():Array.isArray(t)?jt(t).map(Ot):[]}var v=g,Yn=t=>v(t).name,Ne=t=>v(t).pc,Zn=t=>v(t).acc,Jn=t=>v(t).oct,Qn=t=>v(t).midi,eo=t=>v(t).freq,to=t=>v(t).chroma;function ro(t){return k(t)}function no(t){return k(Et(t))}function oo(t){return k(Et(t),{sharps:!0})}function so(t){return k(t,{sharps:!0})}var io=oe,Q=$,ao=$,Tt=t=>e=>Q(e,t),co=Tt,kt=t=>e=>Q(t,e),lo=kt;function It(t,e){return Q(t,[e,0])}var mo=It;function ho(t,e){return Q(t,[0,e])}var Ee=(t,e)=>t.height-e.height,po=(t,e)=>e.height-t.height;function Rt(t,e){return e=e||Ee,jt(t).sort(e).map(Ot)}function uo(t){return Rt(t,Ee).filter((e,r,n)=>r===0||e!==n[r-1])}var fo=t=>{const e=v(t);return e.empty?"":k(e.midi||e.chroma,{sharps:e.alt>0,pitchClass:e.midi===null})};function Oe(t,e){const r=v(t);if(r.empty)return"";const n=v(e||k(r.midi||r.chroma,{sharps:r.alt<0,pitchClass:!0}));if(n.empty||n.chroma!==r.chroma)return"";if(r.oct===void 0)return n.pc;const o=r.chroma-r.alt,s=n.chroma-n.alt,i=o>11||s<0?-1:o<0||s>11?1:0,a=r.oct+i;return n.pc+a}var y={names:Xn,get:v,name:Yn,pitchClass:Ne,accidentals:Zn,octave:Jn,midi:Qn,ascending:Ee,descending:po,distance:io,sortedNames:Rt,sortedUniqNames:uo,fromMidi:ro,fromMidiSharps:so,freq:eo,fromFreq:no,fromFreqSharps:oo,chroma:to,transpose:Q,tr:ao,transposeBy:Tt,trBy:co,transposeFrom:kt,trFrom:lo,transposeFifths:It,transposeOctaves:ho,trFifths:mo,simplify:fo,enharmonic:Oe},je=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],tt={...O,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},go=je.map(Po),fe={};go.forEach(t=>{fe[t.name]=t,t.aliases.forEach(e=>{fe[e]=t})});function Dt(t){return typeof t=="string"?fe[t.toLowerCase()]||tt:t&&t.name?Dt(t.name):tt}function Po(t){const[e,r,n,o,s,i,a]=t,c=a?[a]:[],l=Number(r).toString(2);return{empty:!1,intervals:Ct(o).intervals,modeNum:e,chroma:l,normalized:l,name:o,setNum:r,alt:n,triad:s,seventh:i,aliases:c}}function zt(t){return(e,r)=>{const n=Dt(e);if(n.empty)return[];const o=_e(n.modeNum,t),s=n.intervals.map(i=>$(r,i));return o.map((i,a)=>s[a]+i)}}zt(je.map(t=>t[4]));zt(je.map(t=>t[5]));function Ut(t){const e=Mt(t.map(r=>typeof r=="number"?r:qn(r)));return!t.length||e.length!==t.length?[]:e.reduce((r,n)=>{const o=r[r.length-1];return r.concat(zr(o,n).slice(1))},[e[0]])}function Mo(t,e){return Ut(t).map(r=>k(r,e))}var bo={numeric:Ut,chromatic:Mo},vo={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function $o(t){if(typeof t!="string")return["",""];const e=t.indexOf(" "),r=g(t.substring(0,e));if(r.empty){const o=g(t);return o.empty?["",t.toLowerCase()]:[o.name,""]}const n=t.substring(r.name.length+1).toLowerCase();return[r.name,n.length?n:""]}function yo(t){const e=Array.isArray(t)?t:$o(t),r=g(e[0]).name,n=Ct(e[1]);if(n.empty)return vo;const o=n.name,s=r?n.intervals.map(a=>$(r,a)):[],i=r?r+" "+o:o;return{...n,name:i,type:o,tonic:r,notes:s}}var Ao=(t,e)=>{if(!e||!e.length)return t[0];const r=o=>y.midi(o[o.length-1])||0,n=o=>Math.abs(r(e)-r(o));return t.sort((o,s)=>n(o)-n(s))[0]},xo={topNoteDiff:Ao},_o={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"]},Ht={m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},wo={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"],m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},Ft=Ht;function Co(t,e=Ft){if(e[t])return e[t];const{aliases:r}=Nt.get("C"+t),n=Object.keys(e).find(o=>r.includes(o))||"";if(n!==void 0)return e[n]}var ge={lookup:Co,lefthand:Ht,triads:_o,all:wo,defaultDictionary:Ft},Lt=["C3","C5"],So=ge.all,No=xo.topNoteDiff;function rt(t,e=Lt,r=So,n=No,o){const s=Eo(t,e,r);return!o||!o.length?s[0]:n(s,o)}function Eo(t,e=Lt,r=ge.triads){const[n,o]=Nt.tokenize(t),s=ge.lookup(o,r);if(!s)return[];const i=s.map(c=>c.split(" ")),a=bo.chromatic(e);return i.reduce((c,l)=>{const m=l.map(p=>_n.subtract(p,l[0])||""),d=y.transpose(n,l[0]),f=a.filter(p=>y.chroma(p)===y.chroma(d)).filter(p=>(y.midi(y.transpose(p,m[m.length-1]))||0)<=(y.midi(e[1])||0)).map(p=>y.enharmonic(p,d)).map(p=>m.map(R=>y.transpose(p,R)));return c.concat(f)},[])}var Oo=Object.defineProperty,jo=Object.getOwnPropertyDescriptor,Te=(t,e,r,n)=>{for(var o=n>1?void 0:n?jo(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&Oo(e,r,o),o};let W=class extends w{constructor(){super(...arguments),this.value="",this.error=""}render(){return u`
      <div class="wrap">
        <label for="chord-progression">Chord progression</label>
        <input
          id="chord-progression"
          type="text"
          .value=${this.value}
          placeholder="Am7 D9 Gmaj7"
          @input=${this.onInput}
          @keydown=${this.onKeydown}
        />

        <div class="actions">
          <button ?disabled=${!this.value.trim()} @click=${this.parseAndEmit}>Parse</button>
          <span class="hint">Press Enter to parse</span>
        </div>

        ${this.error?u`<div class="error">${this.error}</div>`:null}
      </div>
    `}onInput(t){const e=t.target;this.value=e.value,this.error&&(this.error="")}onKeydown(t){t.key==="Enter"&&(t.preventDefault(),this.parseAndEmit())}parseAndEmit(){const t=this.parseProgression(this.value);if(!t.length){this.error="No valid chord symbols were found.";return}this.error="";const e={progression:t,source:this.value};this.dispatchEvent(new CustomEvent("progression-parsed",{detail:e,bubbles:!0,composed:!0}))}parseProgression(t){const e=this.tokenize(t),r=[];for(const n of e){const o=x(n);o.empty||o.notes.length===0||r.push({symbol:n,tonic:o.tonic,quality:o.quality,notes:o.notes,intervals:o.intervals,aliases:o.aliases})}return r}tokenize(t){const e=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,r=t.match(e);return r?r.map(n=>n.trim()):[]}};W.styles=se`
    :host {
      display: block;
      font-family: 'Segoe UI', sans-serif;
      color: #dbe7f7;
    }

    .wrap {
      display: grid;
      gap: 0.75rem;
    }

    label {
      font-size: 0.875rem;
      font-weight: 600;
    }

    input {
      border: 1px solid #394a61;
      border-radius: 10px;
      padding: 0.75rem 0.875rem;
      font: inherit;
      outline: none;
      background: #0f1724;
      color: #e2ebf9;
    }

    input:focus {
      border-color: #2dd4bf;
      box-shadow: 0 0 0 2px rgb(45 212 191 / 0.2);
    }

    .actions {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    button {
      border: none;
      border-radius: 10px;
      padding: 0.6rem 0.9rem;
      font: inherit;
      font-weight: 600;
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      color: #f0fdfa;
      cursor: pointer;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .hint {
      font-size: 0.8rem;
      color: #93a9c5;
    }

    .error {
      font-size: 0.8rem;
      color: #b42318;
    }
  `;Te([H({type:String})],W.prototype,"value",2);Te([T()],W.prototype,"error",2);W=Te([ce("chord-input")],W);var To=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,ke=(t,e,r,n)=>{for(var o=n>1?void 0:n?ko(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&To(e,r,o),o};let X=class extends w{constructor(){super(...arguments),this.chords=[],this.activeIndex=0}render(){return u`
      <div class="wrap">
        ${this.chords.map((t,e)=>u`
            <button
              class=${e===this.activeIndex?"active":""}
              @click=${()=>this.selectChord(e)}
            >
              ${t.symbol}
            </button>
          `)}
      </div>
    `}selectChord(t){this.dispatchEvent(new CustomEvent("chord-selected",{detail:t,bubbles:!0,composed:!0}))}};X.styles=se`
    :host {
      display: block;
    }

    .wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
    }

    button {
      border: 1px solid #3b4d66;
      background: linear-gradient(180deg, #1b283a, #131d2c);
      color: #cad7e8;
      border-radius: 999px;
      padding: 0.55rem 0.9rem;
      font: inherit;
      font-weight: 700;
      cursor: pointer;
      transition: transform 140ms ease, background 140ms ease, border-color 140ms ease;
    }

    button:hover {
      transform: translateY(-1px);
      border-color: #2dd4bf;
      color: #e4f7f3;
    }

    button.active {
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      color: #f0fdfa;
      border-color: #2dd4bf;
      box-shadow: 0 8px 20px rgb(45 212 191 / 0.28);
    }
  `;ke([H({attribute:!1})],X.prototype,"chords",2);ke([H({type:Number})],X.prototype,"activeIndex",2);X=ke([ce("progression-stepper")],X);var Io=Object.defineProperty,Ro=Object.getOwnPropertyDescriptor,Ie=(t,e,r,n)=>{for(var o=n>1?void 0:n?Ro(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&Io(e,r,o),o};let Y=class extends w{constructor(){super(...arguments),this.pads=[],this.recipe=[]}render(){const t=new Map(this.recipe.map((e,r)=>[e.index,r+1]));return u`
      <div class="shell">
        <div class="grid" role="grid" aria-label="Circuit pad grid">
          ${this.pads.map(e=>{const r=t.get(e.index);return u`
              <div class=${`pad ${e.state} ${r?"target":""}`} role="gridcell" aria-label=${this.getAriaLabel(e,r)}>
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
    `}getAriaLabel(t,e){return e?`${t.note} row ${t.row+1} column ${t.col+1} press order ${e}`:`${t.note} row ${t.row+1} column ${t.col+1} ${t.state}`}};Y.styles=se`
    :host {
      display: block;
    }

    .shell {
      border-radius: 24px;
      padding: 1rem;
      background:
        linear-gradient(180deg, #1e293b, #0f172a),
        radial-gradient(circle at top, rgb(255 255 255 / 0.06), transparent 55%);
      border: 1px solid rgb(148 163 184 / 0.2);
      box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.04), 0 18px 40px rgb(15 23 42 / 0.35);
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(8, minmax(0, 1fr));
      gap: 0.7rem;
    }

    .pad {
      aspect-ratio: 1;
      border-radius: 16px;
      border: 1px solid rgb(255 255 255 / 0.08);
      display: grid;
      place-items: center;
      text-align: center;
      padding: 0.3rem;
      color: #e2e8f0;
      font-weight: 700;
      letter-spacing: 0.02em;
      background: #233044;
      box-shadow: inset 0 -8px 18px rgb(0 0 0 / 0.25);
      transition: transform 140ms ease, box-shadow 140ms ease, background 140ms ease;
    }

    .pad:hover {
      transform: translateY(-1px);
    }

    .pad.dim {
      background: linear-gradient(180deg, #334155, #1f2937);
      color: #cbd5e1;
    }

    .pad.lit {
      background: linear-gradient(180deg, #f59e0b, #b45309);
      box-shadow: 0 0 18px rgb(245 158 11 / 0.28), inset 0 -8px 18px rgb(120 53 15 / 0.35);
      color: #fff7ed;
    }

    .pad.active {
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      box-shadow: 0 0 20px rgb(45 212 191 / 0.34), inset 0 -8px 18px rgb(17 94 89 / 0.38);
      color: white;
    }

    .meta {
      font-size: 0.68rem;
      opacity: 0.75;
    }

    .pad.target {
      outline: 2px solid #f8fafc;
      outline-offset: 1px;
      box-shadow:
        0 0 0 2px rgb(56 189 248 / 0.85),
        0 0 18px rgb(56 189 248 / 0.35),
        inset 0 -8px 18px rgb(0 0 0 / 0.22);
    }

    .step {
      position: absolute;
      top: 6px;
      right: 6px;
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: #f8fafc;
      color: #0f172a;
      font-size: 0.68rem;
      font-weight: 800;
      display: grid;
      place-items: center;
      border: 1px solid rgb(15 23 42 / 0.2);
    }

    .pad-inner {
      position: relative;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
    }
  `;Ie([H({attribute:!1})],Y.prototype,"pads",2);Ie([H({attribute:!1})],Y.prototype,"recipe",2);Y=Ie([ce("circuit-grid")],Y);const N=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Do=["major","minor","dorian","mixolydian","lydian","phrygian","locrian","harmonic minor","melodic minor","major pentatonic","minor pentatonic","blues"],zo=N,Uo=["triad","seventh","spread"],Ho=["key","chord"],Fo=5,Lo=3;function qo(t,e){const r=e.anchorMode==="chord"?t?.tonic??e.key:e.key,n=Z(r)??"C",o=Xo(e.key,e.scale),s=Zo(n,o),i=new Set((t?.notes??[]).map(a=>Z(a)).filter(Re));return Array.from({length:32},(a,c)=>{const l=Math.floor(c/8),m=c%8,d=e.mode==="collapsed"?m+l*Lo:m+l*Fo,h=e.mode==="collapsed"?s[d%s.length]:Yo(n,d),f=i.has(h),p=h===n,R=o.includes(h);let b="dim";return p?b="active":f&&(b="lit"),{index:c,row:l,col:m,offset:d,note:h,label:h,state:b,inChord:f,isRoot:p,inScale:R}})}function Bo(t,e,r,n=4){return t?Go(t,r).map((s,i)=>Ko(s,i,e,r)).filter(s=>!!s).slice(0,n).map(s=>({note:s.note,row:s.row,col:s.col,index:s.index})):[]}function Go(t,e){const r=Vo(t,e);if(r.length>0)return r;const n=new Map,o=[];for(let l=0;l<t.notes.length;l+=1){const m=Z(t.notes[l]);if(!m)continue;o.includes(m)||o.push(m);const d=Wo(t.intervals[l]);d!==null&&!n.has(d)&&n.set(d,m)}const s={triad:[1,3,5],seventh:[1,3,5,7],spread:[1,5,7,3]},i={triad:3,seventh:4,spread:4},a=s[e].map(l=>n.get(l)).filter(l=>!!l);return Array.from(new Set([...a,...o])).slice(0,i[e])}function Vo(t,e){let r=[];try{const a=rt(t.symbol);r=Array.isArray(a)?a:[]}catch{r=[]}if(r.length===0&&t.tonic&&t.quality)try{const a=rt(`${t.tonic}${t.quality}`);r=Array.isArray(a)?a:[]}catch{r=[]}const n=r.filter(a=>typeof a=="string").map(a=>Z(a)).filter(Re),o=Array.from(new Set(n));if(o.length===0)return[];if(e==="triad")return o.slice(0,3);if(e==="seventh")return o.slice(0,4);const i=[0,2,3,1].map(a=>o[a]).filter(a=>!!a);return Array.from(new Set(i)).slice(0,4)}function Ko(t,e,r,n){const o=r.filter(s=>s.note===t).sort((s,i)=>s.offset-i.offset);if(o.length!==0){if(n==="spread"){const s=Math.min(e,o.length-1);return o[s]}return o[0]}}function Wo(t){if(!t)return null;const e=t.match(/^(\d+)/);if(!e)return null;const r=Number.parseInt(e[1],10);return Number.isFinite(r)?r:null}function Xo(t,e){const n=yo(`${t} ${e}`).notes.map(o=>Z(o)).filter(Re);return n.length===0?["C","D","E","F","G","A","B"]:Array.from(new Set(n))}function Yo(t,e){const r=qt(t);return r[e%r.length]}function qt(t){const e=N.indexOf(t);return e===-1?N:Bt(N,e)}function Zo(t,e){const r=N.indexOf(t),n=e.slice().sort((o,s)=>nt(o,r)-nt(s,r));return n.length===0?qt(t):n.includes(t)?Bt(n,n.indexOf(t)):[t,...n]}function nt(t,e){const r=N.indexOf(t);return r===-1||e===-1?Number.MAX_SAFE_INTEGER:(r-e+12)%12}function Bt(t,e){return[...t.slice(e),...t.slice(0,e)]}function Z(t){if(!t)return null;const e=Ne(t);if(!e)return null;const r=Oe(e);return N.includes(r)?r:e}function Re(t){return t!==null}var Jo=Object.defineProperty,Qo=Object.getOwnPropertyDescriptor,I=(t,e,r,n)=>{for(var o=n>1?void 0:n?Qo(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&Jo(e,r,o),o};let A=class extends w{constructor(){super(...arguments),this.progression=[],this.source="",this.activeIndex=0,this.config={key:"C",scale:"major",mode:"chromatic",anchorMode:"key"},this.voicing="triad",this.mobileConfigOpen=!1}render(){const t=this.progression[this.activeIndex]??null,e=qo(t,this.config),r=Bo(t,e,this.voicing),n=this.getMissingChordTones(t,e);return u`
      <div class="mobile-appbar">
        <div class="mobile-appbar-copy">
          <p class="mobile-appbar-title">Circuit Chord Forge</p>
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

      <section class="panel">
        <p class="panel-title">Progression Input</p>
        <chord-input @progression-parsed=${this.onParsed}></chord-input>
      </section>

      <div class="layout">
        <section class="panel controls desktop-controls">
          ${this.renderConfigSection(t,n,"desktop")}
        </section>

        <section class="chips">
          <section class="panel">
            <p class="panel-title">Progression Stepper</p>
            ${this.progression.length===0?u`<p class="placeholder">Chords appear here after parsing.</p>`:u`
                  <progression-stepper
                    .chords=${this.progression}
                    .activeIndex=${this.activeIndex}
                    @chord-selected=${this.onChordSelected}
                  ></progression-stepper>
                `}
          </section>

          <section class="panel">
            <p class="panel-title">Circuit Tracks Grid</p>
            <p class="help-text">
              Pads with bright ring and number are voicing pads to press. Change voicing mode to see shape update.
            </p>
            <div class="legend" aria-label="Pad legend">
              <span class="legend-item legend-ring">Ring + number = pads to press</span>
              <span class="legend-item legend-chord">Lit = chord tone</span>
              <span class="legend-item legend-root">Active = root note</span>
              <span class="legend-item legend-dim">Dim = non-chord note</span>
              <span class="legend-item legend-target">Dark base = neutral grid style</span>
            </div>
            ${this.progression.length===0?u`<p class="placeholder">Need parsed chords before pad map can render.</p>`:u`<circuit-grid .pads=${e} .recipe=${r}></circuit-grid>`}
          </section>

          ${t?u`
                <section class="panel">
                  <p class="panel-title">Active Chord Notes</p>
                  <div class="chip-row">
                    ${t.notes.map(o=>u`<span class="chip">${o}</span> `)}
                  </div>
                </section>

              `:null}
        </section>
      </div>

      <div
        class=${`mobile-config-backdrop ${this.mobileConfigOpen?"open":""}`}
        @click=${()=>this.toggleMobileConfig(!1)}
      ></div>
      <aside class=${`mobile-config-drawer ${this.mobileConfigOpen?"open":""}`}>
        <section class="panel mobile-config-panel">
          <div class="mobile-config-header">
            <p class="panel-title">Circuit Config</p>
            <button class="mobile-close" @click=${()=>this.toggleMobileConfig(!1)}>Close</button>
          </div>
          ${this.renderConfigSection(t,n,"mobile",!1)}
        </section>
      </aside>
    `}renderConfigSection(t,e,r,n=!0){return u`
      ${n?u`<p class="panel-title">Circuit Config</p>`:null}

      <div class="field">
        <label>Pad Anchor</label>
        <div class="toggle-row">
          ${Ho.map(o=>u`
              <button
                class=${this.config.anchorMode===o?"active":""}
                @click=${()=>this.setAnchorMode(o)}
              >
                ${o==="key"?"Project Key":"Chord Root"}
              </button>
            `)}
        </div>
        <p class="help-text">
          Project Key keeps pad positions fixed for exact Circuit input. Chord Root recenters each chord to compare shapes.
        </p>
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
        <p class="help-text">
          Scale Collapse: only notes inside key/scale appear on pads. Chromatic: all 12 notes appear.
        </p>
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
          ${zo.map(o=>u`<option value=${o}>${o}</option>`)}
        </select>
      </div>

      <div class="field">
        <label for=${`${r}-scale-select`}>Scale</label>
        <select id=${`${r}-scale-select`} .value=${this.config.scale} @change=${this.onScaleChange}>
          ${Do.map(o=>u`<option value=${o}>${o}</option>`)}
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
          ${Uo.map(o=>u`<option value=${o}>${o}</option>`)}
        </select>
      </div>

      <div class="status">
        <p class="panel-title">Master Stage</p>
        ${t?u`
              <div class="summary-grid">
                <div class="summary-card">
                  <strong>Active Chord</strong>
                  <span>${t.symbol}</span>
                </div>
                <div class="summary-card">
                  <strong>Mapped Notes</strong>
                  <span>${t.notes.join(", ")}</span>
                </div>
                <div class="summary-card">
                  <strong>Voicing Mode</strong>
                  <span>${this.voicing}</span>
                </div>
                <div class="summary-card">
                  <strong>Pad Anchor</strong>
                  <span>${this.config.anchorMode}</span>
                </div>
              </div>
              <p class="source">${this.source}</p>
            `:u`<p class="placeholder">Parse progression, then select chord.</p>`}
      </div>
    `}toggleMobileConfig(t){this.mobileConfigOpen=t}setAnchorMode(t){this.config={...this.config,anchorMode:t}}setMode(t){this.config={...this.config,mode:t}}onKeyChange(t){const e=t.target;this.config={...this.config,key:e.value}}onScaleChange(t){const e=t.target;this.config={...this.config,scale:e.value}}onVoicingChange(t){const e=t.target;this.voicing=e.value}onChordSelected(t){this.activeIndex=t.detail}onParsed(t){this.progression=t.detail.progression,this.source=t.detail.source,this.activeIndex=0;const e=t.detail.progression[0];e?.tonic&&(this.config={...this.config,key:e.tonic})}getMissingChordTones(t,e){if(!t)return[];const r=new Set(e.map(o=>o.note)),n=t.notes.map(o=>this.normalizeGridNote(o)).filter(o=>!!o);return Array.from(new Set(n.filter(o=>!r.has(o))))}normalizeGridNote(t){const e=Ne(t);return e?Oe(e):null}};A.styles=se`
    :host {
      display: grid;
      gap: 1.25rem;
      margin-top: 1rem;
      overflow-x: clip;
    }

    .panel {
      border: 1px solid #2d3a4d;
      border-radius: 18px;
      padding: 1rem;
      background: linear-gradient(180deg, rgb(28 37 50 / 0.92), rgb(18 25 35 / 0.92));
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.03),
        0 10px 30px rgb(2 6 23 / 0.35);
    }

    .panel-title {
      margin: 0;
      font-size: 0.88rem;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #9fb2cb;
    }

    .status {
      display: grid;
      gap: 0.4rem;
    }

    .placeholder {
      color: #94a3b8;
      font-size: 0.9rem;
    }

    .layout {
      display: grid;
      grid-template-columns: minmax(260px, 320px) minmax(0, 1fr);
      gap: 1rem;
      align-items: start;
    }

    .controls {
      display: grid;
      gap: 0.9rem;
    }

    .field {
      display: grid;
      gap: 0.4rem;
    }

    .field label {
      font-size: 0.82rem;
      font-weight: 700;
      color: #c5d2e3;
    }

    .field select {
      border: 1px solid #3a4a61;
      border-radius: 12px;
      padding: 0.7rem 0.8rem;
      font: inherit;
      background: #0f1724;
      color: #dbe8f8;
    }

    .toggle-row {
      display: flex;
      gap: 0.6rem;
      flex-wrap: wrap;
    }

    .toggle-row button {
      border: 1px solid #3a4a61;
      border-radius: 999px;
      padding: 0.55rem 0.8rem;
      font: inherit;
      font-weight: 700;
      background: #111b29;
      color: #c4d3e7;
      cursor: pointer;
    }

    .toggle-row button:hover {
      border-color: #2dd4bf;
      color: #e4f7f3;
    }

    .toggle-row button.active {
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      color: #f0fdfa;
      border-color: #2dd4bf;
    }

    .summary-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.75rem;
    }

    .summary-card {
      background: #121c2b;
      border: 1px solid #314258;
      border-radius: 14px;
      padding: 0.8rem;
    }

    .summary-card strong {
      display: block;
      margin-bottom: 0.25rem;
      color: #7dd3fc;
    }

    .summary-card span {
      color: #d2dfef;
      font-size: 0.92rem;
    }

    .source {
      margin: 0;
      font-size: 0.85rem;
      color: #97a8c2;
    }

    .help-text {
      margin: 0;
      font-size: 0.86rem;
      color: #9bb0cc;
      line-height: 1.35;
    }

    .warning {
      margin: 0;
      font-size: 0.86rem;
      color: #fda4af;
      line-height: 1.35;
      background: #3b0d1a;
      border: 1px solid #9f1239;
      border-radius: 10px;
      padding: 0.55rem 0.65rem;
    }

    .chips {
      margin: 0;
      display: grid;
      gap: 0.45rem;
    }

    .chip-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
    }

    .chip {
      border-radius: 999px;
      padding: 0.35rem 0.65rem;
      background: #1b283a;
      color: #d3dfef;
      font-size: 0.85rem;
      font-weight: 700;
      border: 1px solid #33465f;
    }

    .legend {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.45rem 0 0.75rem;
    }

    .legend-item {
      border-radius: 10px;
      padding: 0.4rem 0.68rem;
      font-size: 0.78rem;
      font-weight: 700;
      border: 1px solid transparent;
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.28),
        inset 0 -4px 10px rgb(2 6 23 / 0.22),
        0 2px 6px rgb(2 6 23 / 0.18);
      letter-spacing: 0.01em;
    }

    .legend-root {
      background: linear-gradient(180deg, #2dd4bf, #0f766e);
      color: #f0fdfa;
      border-color: rgb(45 212 191 / 0.45);
    }

    .legend-chord {
      background: linear-gradient(180deg, #f59e0b, #b45309);
      color: #fff7ed;
      border-color: rgb(245 158 11 / 0.45);
    }

    .legend-dim {
      background: linear-gradient(180deg, #334155, #1f2937);
      color: #cbd5e1;
      border-color: rgb(148 163 184 / 0.35);
    }

    .legend-target {
      background: linear-gradient(180deg, #0f172a, #020617);
      color: #f8fafc;
      border-color: #38bdf8;
    }

    .legend-ring {
      background: linear-gradient(180deg, #1f2937, #111827);
      color: #f8fafc;
      border-color: #94a3b8;
    }

    .mobile-config-trigger {
      display: none;
      border: 1px solid #3a4a61;
      border-radius: 10px;
      background: #0f1724;
      color: #dbe8f8;
      font: inherit;
      font-weight: 700;
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
      border: 1px solid #2d3a4d;
      border-radius: 14px;
      padding: 0.55rem 0.65rem;
      background: linear-gradient(180deg, rgb(28 37 50 / 0.92), rgb(18 25 35 / 0.92));
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.03),
        0 8px 18px rgb(2 6 23 / 0.3);
    }

    .mobile-appbar-copy {
      min-width: 0;
      flex: 1;
    }

    .mobile-appbar-title {
      margin: 0;
      color: #d7e4f5;
      font-size: 0.84rem;
      font-weight: 800;
      letter-spacing: 0.02em;
      line-height: 1.2;
      text-transform: uppercase;
      overflow-wrap: anywhere;
    }

    .mobile-appbar-subtitle {
      margin: 0.15rem 0 0;
      color: #9fb2cb;
      font-size: 0.72rem;
      line-height: 1.2;
      overflow-wrap: anywhere;
    }

    .mode-note {
      margin: 0;
      font-size: 0.84rem;
      color: #d4e4f7;
      line-height: 1.35;
      background: #122335;
      border: 1px solid #35506e;
      border-radius: 10px;
      padding: 0.5rem 0.6rem;
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

    @media (max-width: 920px) {
      .mobile-appbar {
        display: flex;
      }

      .mobile-config-trigger {
        display: inline-flex;
      }

      .desktop-controls {
        display: none;
      }

      .layout {
        grid-template-columns: 1fr;
      }

      .summary-grid {
        grid-template-columns: 1fr;
      }
    }
  `;I([T()],A.prototype,"progression",2);I([T()],A.prototype,"source",2);I([T()],A.prototype,"activeIndex",2);I([T()],A.prototype,"config",2);I([T()],A.prototype,"voicing",2);I([T()],A.prototype,"mobileConfigOpen",2);A=I([ce("chord-mapper-app")],A);
