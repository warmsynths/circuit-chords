(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const V=globalThis,ae=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol(),Me=new WeakMap;let He=class{constructor(e,r,n){if(this._$cssResult$=!0,n!==ce)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(ae&&e===void 0){const n=r!==void 0&&r.length===1;n&&(e=Me.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Me.set(r,e))}return e}toString(){return this.cssText}};const bt=t=>new He(typeof t=="string"?t:t+"",void 0,ce),Y=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[s+1],t[0]);return new He(r,t,ce)},Pt=(t,e)=>{if(ae)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const n=document.createElement("style"),o=V.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=r.cssText,t.appendChild(n)}},$e=ae?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const n of e.cssRules)r+=n.cssText;return bt(r)})(t):t;const{is:Mt,defineProperty:$t,getOwnPropertyDescriptor:vt,getOwnPropertyNames:yt,getOwnPropertySymbols:At,getPrototypeOf:_t}=Object,Z=globalThis,ve=Z.trustedTypes,xt=ve?ve.emptyScript:"",wt=Z.reactiveElementPolyfillSupport,z=(t,e)=>t,W={toAttribute(t,e){switch(e){case Boolean:t=t?xt:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},le=(t,e)=>!Mt(t,e),ye={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:le};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;let N=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=ye){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,r);o!==void 0&&$t(this.prototype,e,o)}}static getPropertyDescriptor(e,r,n){const{get:o,set:s}=vt(this.prototype,e)??{get(){return this[r]},set(i){this[r]=i}};return{get:o,set(i){const c=o?.call(this);s?.call(this,i),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ye}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const e=_t(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const r=this.properties,n=[...yt(r),...At(r)];for(const o of n)this.createProperty(o,r[o])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[n,o]of r)this.elementProperties.set(n,o)}this._$Eh=new Map;for(const[r,n]of this.elementProperties){const o=this._$Eu(r,n);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const o of n)r.unshift($e(o))}else e!==void 0&&r.push($e(e));return r}static _$Eu(e,r){const n=r.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const n of r.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pt(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,n){this._$AK(e,n)}_$ET(e,r){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){const s=(n.converter?.toAttribute!==void 0?n.converter:W).toAttribute(r,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,r){const n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const s=n.getPropertyOptions(o),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:W;this._$Em=o;const c=i.fromAttribute(r,s.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,r,n,o=!1,s){if(e!==void 0){const i=this.constructor;if(o===!1&&(s=this[e]),n??=i.getPropertyOptions(e),!((n.hasChanged??le)(s,r)||n.useDefault&&n.reflect&&s===this._$Ej?.get(e)&&!this.hasAttribute(i._$Eu(e,n))))return;this.C(e,r,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:n,reflect:o,wrapped:s},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??r??this[e]),s!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(r=void 0),this._$AL.set(e,r)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[o,s]of n){const{wrapped:i}=s,c=this[o];i!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,s,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(r)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[z("elementProperties")]=new Map,N[z("finalized")]=new Map,wt?.({ReactiveElement:N}),(Z.reactiveElementVersions??=[]).push("2.1.2");const de=globalThis,Ae=t=>t,K=de.trustedTypes,_e=K?K.createPolicy("lit-html",{createHTML:t=>t}):void 0,Le="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Be="?"+M,Ct=`<${Be}>`,x=document,U=()=>x.createComment(""),H=t=>t===null||typeof t!="object"&&typeof t!="function",me=Array.isArray,St=t=>me(t)||typeof t?.[Symbol.iterator]=="function",ee=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xe=/-->/g,we=/>/g,y=RegExp(`>|${ee}(?:([^\\s"'>=/]+)(${ee}*=${ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ce=/'/g,Se=/"/g,qe=/^(?:script|style|textarea|title)$/i,Et=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),h=Et(1),O=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Ee=new WeakMap,A=x.createTreeWalker(x,129);function Ge(t,e){if(!me(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return _e!==void 0?_e.createHTML(e):e}const Nt=(t,e)=>{const r=t.length-1,n=[];let o,s=e===2?"<svg>":e===3?"<math>":"",i=I;for(let c=0;c<r;c++){const a=t[c];let d,m,l=-1,p=0;for(;p<a.length&&(i.lastIndex=p,m=i.exec(a),m!==null);)p=i.lastIndex,i===I?m[1]==="!--"?i=xe:m[1]!==void 0?i=we:m[2]!==void 0?(qe.test(m[2])&&(o=RegExp("</"+m[2],"g")),i=y):m[3]!==void 0&&(i=y):i===y?m[0]===">"?(i=o??I,l=-1):m[1]===void 0?l=-2:(l=i.lastIndex-m[2].length,d=m[1],i=m[3]===void 0?y:m[3]==='"'?Se:Ce):i===Se||i===Ce?i=y:i===xe||i===we?i=I:(i=y,o=void 0);const f=i===y&&t[c+1].startsWith("/>")?" ":"";s+=i===I?a+Ct:l>=0?(n.push(d),a.slice(0,l)+Le+a.slice(l)+M+f):a+M+(l===-2?c:f)}return[Ge(t,s+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class L{constructor({strings:e,_$litType$:r},n){let o;this.parts=[];let s=0,i=0;const c=e.length-1,a=this.parts,[d,m]=Nt(e,r);if(this.el=L.createElement(d,n),A.currentNode=this.el.content,r===2||r===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(o=A.nextNode())!==null&&a.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const l of o.getAttributeNames())if(l.endsWith(Le)){const p=m[i++],f=o.getAttribute(l).split(M),b=/([.?@])?(.*)/.exec(p);a.push({type:1,index:s,name:b[2],strings:f,ctor:b[1]==="."?jt:b[1]==="?"?Tt:b[1]==="@"?kt:J}),o.removeAttribute(l)}else l.startsWith(M)&&(a.push({type:6,index:s}),o.removeAttribute(l));if(qe.test(o.tagName)){const l=o.textContent.split(M),p=l.length-1;if(p>0){o.textContent=K?K.emptyScript:"";for(let f=0;f<p;f++)o.append(l[f],U()),A.nextNode(),a.push({type:2,index:++s});o.append(l[p],U())}}}else if(o.nodeType===8)if(o.data===Be)a.push({type:2,index:s});else{let l=-1;for(;(l=o.data.indexOf(M,l+1))!==-1;)a.push({type:7,index:s}),l+=M.length-1}s++}}static createElement(e,r){const n=x.createElement("template");return n.innerHTML=e,n}}function j(t,e,r=t,n){if(e===O)return e;let o=n!==void 0?r._$Co?.[n]:r._$Cl;const s=H(e)?void 0:e._$litDirective$;return o?.constructor!==s&&(o?._$AO?.(!1),s===void 0?o=void 0:(o=new s(t),o._$AT(t,r,n)),n!==void 0?(r._$Co??=[])[n]=o:r._$Cl=o),o!==void 0&&(e=j(t,o._$AS(t,e.values),o,n)),e}class Ot{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:n}=this._$AD,o=(e?.creationScope??x).importNode(r,!0);A.currentNode=o;let s=A.nextNode(),i=0,c=0,a=n[0];for(;a!==void 0;){if(i===a.index){let d;a.type===2?d=new F(s,s.nextSibling,this,e):a.type===1?d=new a.ctor(s,a.name,a.strings,this,e):a.type===6&&(d=new It(s,this,e)),this._$AV.push(d),a=n[++c]}i!==a?.index&&(s=A.nextNode(),i++)}return A.currentNode=x,o}p(e){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,r),r+=n.strings.length-2):n._$AI(e[r])),r++}}class F{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,n,o){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=j(this,e,r),H(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==O&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):St(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(x.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=L.createElement(Ge(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(r);else{const s=new Ot(o,this),i=s.u(this.options);s.p(r),this.T(i),this._$AH=s}}_$AC(e){let r=Ee.get(e.strings);return r===void 0&&Ee.set(e.strings,r=new L(e)),r}k(e){me(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,o=0;for(const s of e)o===r.length?r.push(n=new F(this.O(U()),this.O(U()),this,this.options)):n=r[o],n._$AI(s),o++;o<r.length&&(this._$AR(n&&n._$AB.nextSibling,o),r.length=o)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const n=Ae(e).nextSibling;Ae(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class J{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,n,o,s){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=r,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=u}_$AI(e,r=this,n,o){const s=this.strings;let i=!1;if(s===void 0)e=j(this,e,r,0),i=!H(e)||e!==this._$AH&&e!==O,i&&(this._$AH=e);else{const c=e;let a,d;for(e=s[0],a=0;a<s.length-1;a++)d=j(this,c[n+a],r,a),d===O&&(d=this._$AH[a]),i||=!H(d)||d!==this._$AH[a],d===u?e=u:e!==u&&(e+=(d??"")+s[a+1]),this._$AH[a]=d}i&&!o&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class jt extends J{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Tt extends J{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class kt extends J{constructor(e,r,n,o,s){super(e,r,n,o,s),this.type=5}_$AI(e,r=this){if((e=j(this,e,r,0)??u)===O)return;const n=this._$AH,o=e===u&&n!==u||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==u&&(n===u||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class It{constructor(e,r,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){j(this,e)}}const zt=de.litHtmlPolyfillSupport;zt?.(L,F),(de.litHtmlVersions??=[]).push("3.3.2");const Rt=(t,e,r)=>{const n=r?.renderBefore??e;let o=n._$litPart$;if(o===void 0){const s=r?.renderBefore??null;n._$litPart$=o=new F(e.insertBefore(U(),s),s,void 0,r??{})}return o._$AI(t),o};const pe=globalThis;class $ extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rt(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}}$._$litElement$=!0,$.finalized=!0,pe.litElementHydrateSupport?.({LitElement:$});const Dt=pe.litElementPolyfillSupport;Dt?.({LitElement:$});(pe.litElementVersions??=[]).push("4.2.2");const Q=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};const Ut={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:le},Ht=(t=Ut,e,r)=>{const{kind:n,metadata:o}=r;let s=globalThis.litPropertyMetadata.get(o);if(s===void 0&&globalThis.litPropertyMetadata.set(o,s=new Map),n==="setter"&&((t=Object.create(t)).wrapped=!0),s.set(r.name,t),n==="accessor"){const{name:i}=r;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(i,a,t,!0,c)},init(c){return c!==void 0&&this.C(i,void 0,t,c),c}}}if(n==="setter"){const{name:i}=r;return function(c){const a=this[i];e.call(this,c),this.requestUpdate(i,a,t,!0,c)}}throw Error("Unsupported decorator location: "+n)};function T(t){return(e,r)=>typeof r=="object"?Ht(t,e,r):((n,o,s)=>{const i=o.hasOwnProperty(s);return o.constructor.createProperty(s,n),i?Object.getOwnPropertyDescriptor(o,s):void 0})(t,e,r)}function S(t){return T({...t,state:!0,attribute:!1})}function Fe(t){return t!==null&&typeof t=="object"&&"name"in t&&typeof t.name=="string"}function Ve(t){return t!==null&&typeof t=="object"&&"step"in t&&typeof t.step=="number"&&"alt"in t&&typeof t.alt=="number"&&!isNaN(t.step)&&!isNaN(t.alt)}var We=[0,2,4,-1,1,3,5],Ke=We.map(t=>Math.floor(t*7/12));function Xe(t){const{step:e,alt:r,oct:n,dir:o=1}=t,s=We[e]+7*r;if(n===void 0)return[o*s];const i=n-Ke[e]-4*r;return[o*s,o*i]}var Lt=[3,0,4,1,5,2,6];function Ye(t){const[e,r,n]=t,o=Lt[Bt(e)],s=Math.floor((e+1)/7);if(r===void 0)return{step:o,alt:s,dir:n};const i=r+4*s+Ke[o];return{step:o,alt:s,oct:i,dir:n}}function Bt(t){const e=(t+1)%7;return e<0?7+e:e}var Ne=(t,e)=>Array(Math.abs(e)+1).join(t),oe=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),qt="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Gt="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Ft=new RegExp("^"+qt+"|"+Gt+"$");function Vt(t){const e=Ft.exec(`${t}`);return e===null?["",""]:e[1]?[e[1],e[2]]:[e[4],e[3]]}var Oe={};function w(t){return typeof t=="string"?Oe[t]||(Oe[t]=Wt(t)):Ve(t)?w(Xt(t)):Fe(t)?w(t.name):oe}var je=[0,2,4,5,7,9,11],Ze="PMMPPMM";function Wt(t){const e=Vt(t);if(e[0]==="")return oe;const r=+e[0],n=e[1],o=(Math.abs(r)-1)%7,s=Ze[o];if(s==="M"&&n==="P")return oe;const i=s==="M"?"majorable":"perfectable",c=""+r+n,a=r<0?-1:1,d=r===8||r===-8?r:a*(o+1),m=Kt(i,n),l=Math.floor((Math.abs(r)-1)/7),p=a*(je[o]+m+12*l),f=(a*(je[o]+m)%12+12)%12,b=Xe({step:o,alt:m,oct:l,dir:a});return{empty:!1,name:c,num:r,q:n,step:o,alt:m,dir:a,type:i,simple:d,semitones:p,chroma:f,coord:b,oct:l}}function Je(t,e){const[r,n=0]=t,o=r*7+n*12<0,s=e||o?[-r,-n,-1]:[r,n,1];return w(Ye(s))}function Kt(t,e){return e==="M"&&t==="majorable"||e==="P"&&t==="perfectable"?0:e==="m"&&t==="majorable"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?-1*(t==="perfectable"?e.length:e.length+1):0}function Xt(t){const{step:e,alt:r,oct:n=0,dir:o}=t;if(!o)return"";const s=e+1+7*n,i=s===0?e+1:s,c=o<0?"-":"",a=Ze[e]==="M"?"majorable":"perfectable";return c+i+Yt(a,r)}function Yt(t,e){return e===0?t==="majorable"?"M":"P":e===-1&&t==="majorable"?"m":e>0?Ne("A",e):Ne("d",t==="perfectable"?e:e+1)}var Te=(t,e)=>Array(Math.abs(e)+1).join(t),Qe=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),ke=new Map,Zt=t=>"CDEFGAB".charAt(t),Jt=t=>t<0?Te("b",-t):Te("#",t),Qt=t=>t[0]==="b"?-t.length:t.length;function g(t){const e=JSON.stringify(t),r=ke.get(e);if(r)return r;const n=typeof t=="string"?nr(t):Ve(t)?g(or(t)):Fe(t)?g(t.name):Qe;return ke.set(e,n),n}var er=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function he(t){const e=er.exec(t);return e?[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]:["","","",""]}function tr(t){return g(Ye(t))}var rr=(t,e)=>(t%e+e)%e,te=[0,2,4,5,7,9,11];function nr(t){const e=he(t);if(e[0]===""||e[3]!=="")return Qe;const r=e[0],n=e[1],o=e[2],s=(r.charCodeAt(0)+3)%7,i=Qt(n),c=o.length?+o:void 0,a=Xe({step:s,alt:i,oct:c}),d=r+n+o,m=r+n,l=(te[s]+i+120)%12,p=c===void 0?rr(te[s]+i,12)-1188:te[s]+i+12*(c+1),f=p>=0&&p<=127?p:null,b=c===void 0?null:Math.pow(2,(p-69)/12)*440;return{empty:!1,acc:n,alt:i,chroma:l,coord:a,freq:b,height:p,letter:r,midi:f,name:d,oct:c,pc:m,step:s}}function or(t){const{step:e,alt:r,oct:n}=t,o=Zt(e);if(!o)return"";const s=o+Jt(r);return n||n===0?s+n:s}function ue(t,e){const r=g(t),n=Array.isArray(e)?e:w(e).coord;if(r.empty||!n||n.length<2)return"";const o=r.coord,s=o.length===1?[o[0]+n[0]]:[o[0]+n[0],o[1]+n[1]];return tr(s).name}function Ie(t,e){const r=g(t),n=g(e);if(r.empty||n.empty)return"";const o=r.coord,s=n.coord,i=s[0]-o[0],c=o.length===2&&s.length===2?s[1]-o[1]:-Math.floor(i*7/12),a=n.height===r.height&&n.midi!==null&&r.oct===n.oct&&r.step>n.step;return Je([i,c],a).name}function et(t,e){const r=e.length,n=(t%r+r)%r;return e.slice(n,r).concat(e.slice(0,n))}var C={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},tt=t=>Number(t).toString(2).padStart(12,"0"),ze=t=>parseInt(t,2),sr=/^[01]{12}$/;function rt(t){return sr.test(t)}var ir=t=>typeof t=="number"&&t>=0&&t<=4095,ar=t=>t&&rt(t.chroma),Re={[C.chroma]:C};function nt(t){const e=rt(t)?t:ir(t)?tt(t):Array.isArray(t)?pr(t):ar(t)?t.chroma:C.chroma;return Re[e]=Re[e]||mr(e)}var cr=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function lr(t){const e=[];for(let r=0;r<12;r++)t.charAt(r)==="1"&&e.push(cr[r]);return e}function dr(t){const e=t.split("");return e.map((r,n)=>et(n,e).join(""))}function mr(t){const e=ze(t),r=dr(t).map(ze).filter(s=>s>=2048).sort()[0],n=tt(r),o=lr(t);return{empty:!1,name:"",setNum:e,chroma:t,normalized:n,intervals:o}}function pr(t){if(t.length===0)return C.chroma;let e;const r=[0,0,0,0,0,0,0,0,0,0,0,0];for(let n=0;n<t.length;n++)e=g(t[n]),e.empty&&(e=w(t[n])),e.empty||(r[e.chroma]=1);return r.join("")}var hr=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],ur=hr,fr={...C,name:"",quality:"Unknown",intervals:[],aliases:[]},ot=[],R={};function gr(t){return R[t]||fr}function br(t,e,r){const n=Mr(t),o={...nt(t),name:r||"",quality:n,intervals:t,aliases:e};ot.push(o),o.name&&(R[o.name]=o),R[o.setNum]=o,R[o.chroma]=o,o.aliases.forEach(s=>Pr(o,s))}function Pr(t,e){R[e]=t}function Mr(t){const e=r=>t.indexOf(r)!==-1;return e("5A")?"Augmented":e("3M")?"Major":e("5d")?"Diminished":e("3m")?"Minor":"Unknown"}ur.forEach(([t,e,r])=>br(t.split(" "),r.split(" "),e));ot.sort((t,e)=>t.setNum-e.setNum);var $r=vr((t,e)=>[t[0]-e[0],t[1]-e[1]]);function vr(t){return(e,r)=>{const n=w(e).coord,o=w(r).coord;if(n&&o){const s=t(n,o);return Je(s).name}}}var yr=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Ar=yr,_r={...C,intervals:[],aliases:[]},D={};function st(t){return D[t]||_r}function xr(t,e,r=[]){const n={...nt(t),name:e,intervals:t,aliases:r};return D[n.name]=n,D[n.setNum]=n,D[n.chroma]=n,n.aliases.forEach(o=>wr(n,o)),n}function wr(t,e){D[e]=t}Ar.forEach(([t,e,...r])=>xr(t.split(" "),e,r));var it={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Cr(t){const[e,r,n,o]=he(t);return e===""?re("",t):e==="A"&&o==="ug"?re("","aug"):re(e+r,n+o)}function re(t,e){const r=e.split("/");if(r.length===1)return[t,r[0],""];const[n,o,s,i]=he(r[1]);return n!==""&&s===""&&i===""?[t,r[0],n+o]:[t,e,""]}function Sr(t){if(Array.isArray(t))return ne(t[1]||"",t[0],t[2]);if(t==="")return it;{const[e,r,n]=Cr(t),o=ne(r,e,n);return o.empty?ne(t):o}}function ne(t,e,r){const n=gr(t),o=g(e||""),s=g(r||"");if(n.empty||e&&o.empty||r&&s.empty)return it;const i=Ie(o.pc,s.pc),c=n.intervals.indexOf(i),a=c>=0,d=a?s:g(""),m=c===-1?NaN:c+1,l=s.pc&&s.pc!==o.pc,p=Array.from(n.intervals);if(a)for(let v=1;v<m;v++){const ut=p[0][0],ft=p[0][1],gt=parseInt(ut,10)+7;p.push(`${gt}${ft}`),p.shift()}else if(l){const v=$r(Ie(o.pc,s.pc),"8P");v&&p.unshift(v)}const f=o.empty?[]:p.map(v=>ue(o.pc,v));t=n.aliases.indexOf(t)!==-1?t:n.aliases[0];const b=`${o.empty?"":o.pc}${t}${a&&m>1?"/"+d.pc:l?"/"+s.pc:""}`,k=`${e?o.pc+" ":""}${n.name}${a&&m>1?" over "+d.pc:l?" over "+s.pc:""}`;return{...n,name:k,symbol:b,tonic:o.pc,type:n.name,root:d.pc,bass:l?s.pc:"",intervals:p,rootDegree:m,notes:f}}var Er=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],Nr=Er;Nr.forEach(([t,e,r])=>void 0);var Or="C C# D D# E F F# G G# A A# B".split(" "),jr="C Db D Eb E F Gb G Ab A Bb B".split(" ");function Tr(t,e={}){if(isNaN(t)||t===-1/0||t===1/0)return"";t=Math.round(t);const n=(e.sharps===!0?Or:jr)[t%12];if(e.pitchClass)return n;const o=Math.floor(t/12)-1;return n+o}var se=g,at=t=>se(t).pc;function ct(t,e){const r=se(t);if(r.empty)return"";const n=se(e||Tr(r.midi||r.chroma,{sharps:r.alt<0,pitchClass:!0}));if(n.empty||n.chroma!==r.chroma)return"";if(r.oct===void 0)return n.pc;const o=r.chroma-r.alt,s=n.chroma-n.alt,i=o>11||s<0?-1:o<0||s>11?1:0,c=r.oct+i;return n.pc+c}var fe=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],De={...C,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},kr=fe.map(Ir),ie={};kr.forEach(t=>{ie[t.name]=t,t.aliases.forEach(e=>{ie[e]=t})});function lt(t){return typeof t=="string"?ie[t.toLowerCase()]||De:t&&t.name?lt(t.name):De}function Ir(t){const[e,r,n,o,s,i,c]=t,a=c?[c]:[],d=Number(r).toString(2);return{empty:!1,intervals:st(o).intervals,modeNum:e,chroma:d,normalized:d,name:o,setNum:r,alt:n,triad:s,seventh:i,aliases:a}}function dt(t){return(e,r)=>{const n=lt(e);if(n.empty)return[];const o=et(n.modeNum,t),s=n.intervals.map(i=>ue(r,i));return o.map((i,c)=>s[c]+i)}}dt(fe.map(t=>t[4]));dt(fe.map(t=>t[5]));var zr={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Rr(t){if(typeof t!="string")return["",""];const e=t.indexOf(" "),r=g(t.substring(0,e));if(r.empty){const o=g(t);return o.empty?["",t.toLowerCase()]:[o.name,""]}const n=t.substring(r.name.length+1).toLowerCase();return[r.name,n.length?n:""]}function Dr(t){const e=Array.isArray(t)?t:Rr(t),r=g(e[0]).name,n=st(e[1]);if(n.empty)return zr;const o=n.name,s=r?n.intervals.map(c=>ue(r,c)):[],i=r?r+" "+o:o;return{...n,name:i,type:o,tonic:r,notes:s}}var Ur=Object.defineProperty,Hr=Object.getOwnPropertyDescriptor,ge=(t,e,r,n)=>{for(var o=n>1?void 0:n?Hr(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&Ur(e,r,o),o};let B=class extends ${constructor(){super(...arguments),this.value="",this.error=""}render(){return h`
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

        ${this.error?h`<div class="error">${this.error}</div>`:null}
      </div>
    `}onInput(t){const e=t.target;this.value=e.value,this.error&&(this.error="")}onKeydown(t){t.key==="Enter"&&(t.preventDefault(),this.parseAndEmit())}parseAndEmit(){const t=this.parseProgression(this.value);if(!t.length){this.error="No valid chord symbols were found.";return}this.error="";const e={progression:t,source:this.value};this.dispatchEvent(new CustomEvent("progression-parsed",{detail:e,bubbles:!0,composed:!0}))}parseProgression(t){const e=this.tokenize(t),r=[];for(const n of e){const o=Sr(n);o.empty||o.notes.length===0||r.push({symbol:n,tonic:o.tonic,quality:o.quality,notes:o.notes,intervals:o.intervals,aliases:o.aliases})}return r}tokenize(t){const e=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,r=t.match(e);return r?r.map(n=>n.trim()):[]}};B.styles=Y`
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
  `;ge([T({type:String})],B.prototype,"value",2);ge([S()],B.prototype,"error",2);B=ge([Q("chord-input")],B);var Lr=Object.defineProperty,Br=Object.getOwnPropertyDescriptor,be=(t,e,r,n)=>{for(var o=n>1?void 0:n?Br(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&Lr(e,r,o),o};let q=class extends ${constructor(){super(...arguments),this.chords=[],this.activeIndex=0}render(){return h`
      <div class="wrap">
        ${this.chords.map((t,e)=>h`
            <button
              class=${e===this.activeIndex?"active":""}
              @click=${()=>this.selectChord(e)}
            >
              ${t.symbol}
            </button>
          `)}
      </div>
    `}selectChord(t){this.dispatchEvent(new CustomEvent("chord-selected",{detail:t,bubbles:!0,composed:!0}))}};q.styles=Y`
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
  `;be([T({attribute:!1})],q.prototype,"chords",2);be([T({type:Number})],q.prototype,"activeIndex",2);q=be([Q("progression-stepper")],q);var qr=Object.defineProperty,Gr=Object.getOwnPropertyDescriptor,Pe=(t,e,r,n)=>{for(var o=n>1?void 0:n?Gr(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&qr(e,r,o),o};let G=class extends ${constructor(){super(...arguments),this.pads=[],this.recipe=[]}render(){const t=new Map(this.recipe.map((e,r)=>[e.index,r+1]));return h`
      <div class="shell">
        <div class="grid" role="grid" aria-label="Circuit pad grid">
          ${this.pads.map(e=>{const r=t.get(e.index);return h`
              <div class=${`pad ${e.state} ${r?"target":""}`} role="gridcell" aria-label=${this.getAriaLabel(e,r)}>
                <div class="pad-inner">
                  ${r?h`<span class="step">${r}</span>`:null}
                  <div>
                  <div>${e.label}</div>
                  <div class="meta">${e.row+1}:${e.col+1}</div>
                </div>
              </div>
              </div>
            `})}
        </div>
      </div>
    `}getAriaLabel(t,e){return e?`${t.note} row ${t.row+1} column ${t.col+1} press order ${e}`:`${t.note} row ${t.row+1} column ${t.col+1} ${t.state}`}};G.styles=Y`
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
  `;Pe([T({attribute:!1})],G.prototype,"pads",2);Pe([T({attribute:!1})],G.prototype,"recipe",2);G=Pe([Q("circuit-grid")],G);const _=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Fr=["major","minor","dorian","mixolydian","lydian","phrygian","locrian","harmonic minor","melodic minor","major pentatonic","minor pentatonic","blues"],Vr=_,Wr=["triad","seventh","spread"],Kr=5,Xr=3;function Yr(t,e){const r=X(t?.tonic??e.key)??"C",n=tn(e.key,e.scale),o=nn(r,n),s=new Set((t?.notes??[]).map(i=>X(i)).filter(ht));return Array.from({length:32},(i,c)=>{const a=Math.floor(c/8),d=c%8,m=e.mode==="collapsed"?d+a*Xr:d+a*Kr,l=e.mode==="collapsed"?o[m%o.length]:rn(r,m),p=s.has(l),f=l===r,b=n.includes(l);let k="dim";return f?k="active":p&&(k="lit"),{index:c,row:a,col:d,offset:m,note:l,label:l,state:k,inChord:p,isRoot:f,inScale:b}})}function Zr(t,e,r,n=4){return t?Jr(t,r).map((s,i)=>Qr(s,i,e,r)).filter(s=>!!s).slice(0,n).map(s=>({note:s.note,row:s.row,col:s.col,index:s.index})):[]}function Jr(t,e){const r=new Map,n=[];for(let a=0;a<t.notes.length;a+=1){const d=X(t.notes[a]);if(!d)continue;n.includes(d)||n.push(d);const m=en(t.intervals[a]);m!==null&&!r.has(m)&&r.set(m,d)}const o={triad:[1,3,5],seventh:[1,3,5,7],spread:[1,5,7,3]},s={triad:3,seventh:4,spread:4},i=o[e].map(a=>r.get(a)).filter(a=>!!a);return Array.from(new Set([...i,...n])).slice(0,s[e])}function Qr(t,e,r,n){const o=r.filter(s=>s.note===t).sort((s,i)=>s.offset-i.offset);if(o.length!==0){if(n==="spread"){const s=Math.min(e,o.length-1);return o[s]}return o[0]}}function en(t){if(!t)return null;const e=t.match(/^(\d+)/);if(!e)return null;const r=Number.parseInt(e[1],10);return Number.isFinite(r)?r:null}function tn(t,e){const n=Dr(`${t} ${e}`).notes.map(o=>X(o)).filter(ht);return n.length===0?["C","D","E","F","G","A","B"]:Array.from(new Set(n))}function rn(t,e){const r=mt(t);return r[e%r.length]}function mt(t){const e=_.indexOf(t);return e===-1?_:pt(_,e)}function nn(t,e){const r=_.indexOf(t),n=e.slice().sort((o,s)=>Ue(o,r)-Ue(s,r));return n.length===0?mt(t):n.includes(t)?pt(n,n.indexOf(t)):[t,...n]}function Ue(t,e){const r=_.indexOf(t);return r===-1||e===-1?Number.MAX_SAFE_INTEGER:(r-e+12)%12}function pt(t,e){return[...t.slice(e),...t.slice(0,e)]}function X(t){if(!t)return null;const e=at(t);if(!e)return null;const r=ct(e);return _.includes(r)?r:e}function ht(t){return t!==null}var on=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,E=(t,e,r,n)=>{for(var o=n>1?void 0:n?sn(e,r):e,s=t.length-1,i;s>=0;s--)(i=t[s])&&(o=(n?i(e,r,o):i(o))||o);return n&&o&&on(e,r,o),o};let P=class extends ${constructor(){super(...arguments),this.progression=[],this.source="",this.activeIndex=0,this.config={key:"C",scale:"major",mode:"chromatic"},this.voicing="triad",this.mobileConfigOpen=!1}render(){const t=this.progression[this.activeIndex]??null,e=Yr(t,this.config),r=Zr(t,e,this.voicing),n=this.getMissingChordTones(t,e);return h`
      <div class="mobile-appbar">
        <div>
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
            ${this.progression.length===0?h`<p class="placeholder">Chords appear here after parsing.</p>`:h`
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
            ${this.progression.length===0?h`<p class="placeholder">Need parsed chords before pad map can render.</p>`:h`<circuit-grid .pads=${e} .recipe=${r}></circuit-grid>`}
          </section>

          ${t?h`
                <section class="panel">
                  <p class="panel-title">Active Chord Notes</p>
                  <div class="chip-row">
                    ${t.notes.map(o=>h`<span class="chip">${o}</span> `)}
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
    `}renderConfigSection(t,e,r,n=!0){return h`
      ${n?h`<p class="panel-title">Circuit Config</p>`:null}

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
        ${this.config.mode==="collapsed"&&e.length>0?h`
              <p class="warning">
                Scale Collapse hides chord tones not in selected scale: ${e.join(", ")}.
                Switch to Chromatic or change key/scale to include them.
              </p>
            `:null}
      </div>

      <div class="field">
        <label for=${`${r}-key-select`}>Key</label>
        <select id=${`${r}-key-select`} .value=${this.config.key} @change=${this.onKeyChange}>
          ${Vr.map(o=>h`<option value=${o}>${o}</option>`)}
        </select>
      </div>

      <div class="field">
        <label for=${`${r}-scale-select`}>Scale</label>
        <select id=${`${r}-scale-select`} .value=${this.config.scale} @change=${this.onScaleChange}>
          ${Fr.map(o=>h`<option value=${o}>${o}</option>`)}
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
          ${Wr.map(o=>h`<option value=${o}>${o}</option>`)}
        </select>
      </div>

      <div class="status">
        <p class="panel-title">Master Stage</p>
        ${t?h`
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
              </div>
              <p class="source">${this.source}</p>
            `:h`<p class="placeholder">Parse progression, then select chord.</p>`}
      </div>
    `}toggleMobileConfig(t){this.mobileConfigOpen=t}setMode(t){this.config={...this.config,mode:t}}onKeyChange(t){const e=t.target;this.config={...this.config,key:e.value}}onScaleChange(t){const e=t.target;this.config={...this.config,scale:e.value}}onVoicingChange(t){const e=t.target;this.voicing=e.value}onChordSelected(t){this.activeIndex=t.detail}onParsed(t){this.progression=t.detail.progression,this.source=t.detail.source,this.activeIndex=0;const e=t.detail.progression[0];e?.tonic&&(this.config={...this.config,key:e.tonic})}getMissingChordTones(t,e){if(!t)return[];const r=new Set(e.map(o=>o.note)),n=t.notes.map(o=>this.normalizeGridNote(o)).filter(o=>!!o);return Array.from(new Set(n.filter(o=>!r.has(o))))}normalizeGridNote(t){const e=at(t);return e?ct(e):null}};P.styles=Y`
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
      border: 1px solid #2d3a4d;
      border-radius: 14px;
      padding: 0.55rem 0.65rem;
      background: linear-gradient(180deg, rgb(28 37 50 / 0.92), rgb(18 25 35 / 0.92));
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.03),
        0 8px 18px rgb(2 6 23 / 0.3);
    }

    .mobile-appbar-title {
      margin: 0;
      color: #d7e4f5;
      font-size: 0.84rem;
      font-weight: 800;
      letter-spacing: 0.02em;
      line-height: 1.2;
      text-transform: uppercase;
    }

    .mobile-appbar-subtitle {
      margin: 0.15rem 0 0;
      color: #9fb2cb;
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
  `;E([S()],P.prototype,"progression",2);E([S()],P.prototype,"source",2);E([S()],P.prototype,"activeIndex",2);E([S()],P.prototype,"config",2);E([S()],P.prototype,"voicing",2);E([S()],P.prototype,"mobileConfigOpen",2);P=E([Q("chord-mapper-app")],P);
