(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Jn=globalThis,ui=Jn.ShadowRoot&&(Jn.ShadyCSS===void 0||Jn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,di=Symbol(),or=new WeakMap;let Zr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==di)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ui&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=or.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&or.set(t,e))}return e}toString(){return this.cssText}};const ja=s=>new Zr(typeof s=="string"?s:s+"",void 0,di),Rt=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,i,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new Zr(t,s,di)},qa=(s,e)=>{if(ui)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=Jn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,s.appendChild(n)}},ar=ui?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return ja(t)})(s):s;const{is:Wa,defineProperty:Ba,getOwnPropertyDescriptor:za,getOwnPropertyNames:Ua,getOwnPropertySymbols:Ha,getPrototypeOf:Ga}=Object,ys=globalThis,cr=ys.trustedTypes,Xa=cr?cr.emptyScript:"",Ya=ys.reactiveElementPolyfillSupport,bn=(s,e)=>s,ns={toAttribute(s,e){switch(e){case Boolean:s=s?Xa:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},pi=(s,e)=>!Wa(s,e),lr={attribute:!0,type:String,converter:ns,reflect:!1,useDefault:!1,hasChanged:pi};Symbol.metadata??=Symbol("metadata"),ys.litPropertyMetadata??=new WeakMap;let zt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=lr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Ba(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:r}=za(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const c=i?.call(this);r?.call(this,o),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??lr}static _$Ei(){if(this.hasOwnProperty(bn("elementProperties")))return;const e=Ga(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(bn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(bn("properties"))){const t=this.properties,n=[...Ua(t),...Ha(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(ar(i))}else e!==void 0&&t.push(ar(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qa(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const r=(n.converter?.toAttribute!==void 0?n.converter:ns).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=n.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ns;this._$Em=i;const c=o.fromAttribute(t,r.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){const o=this.constructor;if(i===!1&&(r=this[e]),n??=o.getPropertyOptions(e),!((n.hasChanged??pi)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,r]of n){const{wrapped:o}=r,c=this[i];o!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,r,c)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};zt.elementStyles=[],zt.shadowRootOptions={mode:"open"},zt[bn("elementProperties")]=new Map,zt[bn("finalized")]=new Map,Ya?.({ReactiveElement:zt}),(ys.reactiveElementVersions??=[]).push("2.1.2");const fi=globalThis,hr=s=>s,ss=fi.trustedTypes,ur=ss?ss.createPolicy("lit-html",{createHTML:s=>s}):void 0,Kr="$lit$",dt=`lit$${Math.random().toFixed(9).slice(2)}$`,Qr="?"+dt,Za=`<${Qr}>`,Pt=document,kn=()=>Pt.createComment(""),Tn=s=>s===null||typeof s!="object"&&typeof s!="function",mi=Array.isArray,Ka=s=>mi(s)||typeof s?.[Symbol.iterator]=="function",Ws=`[ 	
\f\r]`,_n=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dr=/-->/g,pr=/>/g,Tt=RegExp(`>|${Ws}(?:([^\\s"'>=/]+)(${Ws}*=${Ws}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fr=/'/g,mr=/"/g,Jr=/^(?:script|style|textarea|title)$/i,eo=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),$=eo(1),Bs=eo(2),Jt=Symbol.for("lit-noChange"),_e=Symbol.for("lit-nothing"),gr=new WeakMap,Mt=Pt.createTreeWalker(Pt,129);function to(s,e){if(!mi(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ur!==void 0?ur.createHTML(e):e}const Qa=(s,e)=>{const t=s.length-1,n=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=_n;for(let c=0;c<t;c++){const a=s[c];let l,h,u=-1,d=0;for(;d<a.length&&(o.lastIndex=d,h=o.exec(a),h!==null);)d=o.lastIndex,o===_n?h[1]==="!--"?o=dr:h[1]!==void 0?o=pr:h[2]!==void 0?(Jr.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=Tt):h[3]!==void 0&&(o=Tt):o===Tt?h[0]===">"?(o=i??_n,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?Tt:h[3]==='"'?mr:fr):o===mr||o===fr?o=Tt:o===dr||o===pr?o=_n:(o=Tt,i=void 0);const f=o===Tt&&s[c+1].startsWith("/>")?" ":"";r+=o===_n?a+Za:u>=0?(n.push(l),a.slice(0,u)+Kr+a.slice(u)+dt+f):a+dt+(u===-2?c:f)}return[to(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class Mn{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,o=0;const c=e.length-1,a=this.parts,[l,h]=Qa(e,t);if(this.el=Mn.createElement(l,n),Mt.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Mt.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(Kr)){const d=h[o++],f=i.getAttribute(u).split(dt),p=/([.?@])?(.*)/.exec(d);a.push({type:1,index:r,name:p[2],strings:f,ctor:p[1]==="."?ec:p[1]==="?"?tc:p[1]==="@"?nc:xs}),i.removeAttribute(u)}else u.startsWith(dt)&&(a.push({type:6,index:r}),i.removeAttribute(u));if(Jr.test(i.tagName)){const u=i.textContent.split(dt),d=u.length-1;if(d>0){i.textContent=ss?ss.emptyScript:"";for(let f=0;f<d;f++)i.append(u[f],kn()),Mt.nextNode(),a.push({type:2,index:++r});i.append(u[d],kn())}}}else if(i.nodeType===8)if(i.data===Qr)a.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(dt,u+1))!==-1;)a.push({type:7,index:r}),u+=dt.length-1}r++}}static createElement(e,t){const n=Pt.createElement("template");return n.innerHTML=e,n}}function en(s,e,t=s,n){if(e===Jt)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl;const r=Tn(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=en(s,i._$AS(s,e.values),i,n)),e}class Ja{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Pt).importNode(t,!0);Mt.currentNode=i;let r=Mt.nextNode(),o=0,c=0,a=n[0];for(;a!==void 0;){if(o===a.index){let l;a.type===2?l=new En(r,r.nextSibling,this,e):a.type===1?l=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(l=new sc(r,this,e)),this._$AV.push(l),a=n[++c]}o!==a?.index&&(r=Mt.nextNode(),o++)}return Mt.currentNode=Pt,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class En{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=_e,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=en(this,e,t),Tn(e)?e===_e||e==null||e===""?(this._$AH!==_e&&this._$AR(),this._$AH=_e):e!==this._$AH&&e!==Jt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ka(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==_e&&Tn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Mn.createElement(to(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{const r=new Ja(i,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=gr.get(e.strings);return t===void 0&&gr.set(e.strings,t=new Mn(e)),t}k(e){mi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new En(this.O(kn()),this.O(kn()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=hr(e).nextSibling;hr(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class xs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=_e,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=_e}_$AI(e,t=this,n,i){const r=this.strings;let o=!1;if(r===void 0)e=en(this,e,t,0),o=!Tn(e)||e!==this._$AH&&e!==Jt,o&&(this._$AH=e);else{const c=e;let a,l;for(e=r[0],a=0;a<r.length-1;a++)l=en(this,c[n+a],t,a),l===Jt&&(l=this._$AH[a]),o||=!Tn(l)||l!==this._$AH[a],l===_e?e=_e:e!==_e&&(e+=(l??"")+r[a+1]),this._$AH[a]=l}o&&!i&&this.j(e)}j(e){e===_e?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ec extends xs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===_e?void 0:e}}class tc extends xs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==_e)}}class nc extends xs{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??_e)===Jt)return;const n=this._$AH,i=e===_e&&n!==_e||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==_e&&(n===_e||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class sc{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}}const ic=fi.litHtmlPolyfillSupport;ic?.(Mn,En),(fi.litHtmlVersions??=[]).push("3.3.2");const rc=(s,e,t)=>{const n=t?.renderBefore??e;let i=n._$litPart$;if(i===void 0){const r=t?.renderBefore??null;n._$litPart$=i=new En(e.insertBefore(kn(),r),r,void 0,t??{})}return i._$AI(s),i};const gi=globalThis;class ze extends zt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=rc(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Jt}}ze._$litElement$=!0,ze.finalized=!0,gi.litElementHydrateSupport?.({LitElement:ze});const oc=gi.litElementPolyfillSupport;oc?.({LitElement:ze});(gi.litElementVersions??=[]).push("4.2.2");const Vt=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};const ac={attribute:!0,type:String,converter:ns,reflect:!1,hasChanged:pi},cc=(s=ac,e,t)=>{const{kind:n,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),n==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),n==="accessor"){const{name:o}=t;return{set(c){const a=e.get.call(this);e.set.call(this,c),this.requestUpdate(o,a,s,!0,c)},init(c){return c!==void 0&&this.C(o,void 0,s,c),c}}}if(n==="setter"){const{name:o}=t;return function(c){const a=this[o];e.call(this,c),this.requestUpdate(o,a,s,!0,c)}}throw Error("Unsupported decorator location: "+n)};function fe(s){return(e,t)=>typeof t=="object"?cc(s,e,t):((n,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,n),o?Object.getOwnPropertyDescriptor(i,r):void 0})(s,e,t)}function G(s){return fe({...s,state:!0,attribute:!1})}const lc=(s,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(s,e,t),t);function no(s,e){return(t,n,i)=>{const r=o=>o.renderRoot?.querySelector(s)??null;return lc(t,n,{get(){return r(this)}})}}function so(s){return s!==null&&typeof s=="object"&&"name"in s&&typeof s.name=="string"}function io(s){return s!==null&&typeof s=="object"&&"step"in s&&typeof s.step=="number"&&"alt"in s&&typeof s.alt=="number"&&!isNaN(s.step)&&!isNaN(s.alt)}var ro=[0,2,4,-1,1,3,5],oo=ro.map(s=>Math.floor(s*7/12));function ao(s){const{step:e,alt:t,oct:n,dir:i=1}=s,r=ro[e]+7*t;if(n===void 0)return[i*r];const o=n-oo[e]-4*t;return[i*r,i*o]}var hc=[3,0,4,1,5,2,6];function co(s){const[e,t,n]=s,i=hc[uc(e)],r=Math.floor((e+1)/7);if(t===void 0)return{step:i,alt:r,dir:n};const o=t+4*r+oo[i];return{step:i,alt:r,oct:o,dir:n}}function uc(s){const e=(s+1)%7;return e<0?7+e:e}var vr=(s,e)=>Array(Math.abs(e)+1).join(s),Ks=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),dc="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",pc="(AA|A|P|M|m|d|dd)([-+]?\\d+)",fc=new RegExp("^"+dc+"|"+pc+"$");function mc(s){const e=fc.exec(`${s}`);return e===null?["",""]:e[1]?[e[1],e[2]]:[e[4],e[3]]}var _r={};function ft(s){return typeof s=="string"?_r[s]||(_r[s]=gc(s)):io(s)?ft(_c(s)):so(s)?ft(s.name):Ks}var br=[0,2,4,5,7,9,11],lo="PMMPPMM";function gc(s){const e=mc(s);if(e[0]==="")return Ks;const t=+e[0],n=e[1],i=(Math.abs(t)-1)%7,r=lo[i];if(r==="M"&&n==="P")return Ks;const o=r==="M"?"majorable":"perfectable",c=""+t+n,a=t<0?-1:1,l=t===8||t===-8?t:a*(i+1),h=vc(o,n),u=Math.floor((Math.abs(t)-1)/7),d=a*(br[i]+h+12*u),f=(a*(br[i]+h)%12+12)%12,p=ao({step:i,alt:h,oct:u,dir:a});return{empty:!1,name:c,num:t,q:n,step:i,alt:h,dir:a,type:o,simple:l,semitones:d,chroma:f,coord:p,oct:u}}function ho(s,e){const[t,n=0]=s,i=t*7+n*12<0,r=e||i?[-t,-n,-1]:[t,n,1];return ft(co(r))}function vc(s,e){return e==="M"&&s==="majorable"||e==="P"&&s==="perfectable"?0:e==="m"&&s==="majorable"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?-1*(s==="perfectable"?e.length:e.length+1):0}function _c(s){const{step:e,alt:t,oct:n=0,dir:i}=s;if(!i)return"";const r=e+1+7*n,o=r===0?e+1:r,c=i<0?"-":"",a=lo[e]==="M"?"majorable":"perfectable";return c+o+bc(a,t)}function bc(s,e){return e===0?s==="majorable"?"M":"P":e===-1&&s==="majorable"?"m":e>0?vr("A",e):vr("d",s==="perfectable"?e:e+1)}var yr=(s,e)=>Array(Math.abs(e)+1).join(s),uo=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),xr=new Map,yc=s=>"CDEFGAB".charAt(s),xc=s=>s<0?yr("b",-s):yr("#",s),wc=s=>s[0]==="b"?-s.length:s.length;function Pe(s){const e=JSON.stringify(s),t=xr.get(e);if(t)return t;const n=typeof s=="string"?Cc(s):io(s)?Pe(Ac(s)):so(s)?Pe(s.name):uo;return xr.set(e,n),n}var kc=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function vi(s){const e=kc.exec(s);return e?[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]:["","","",""]}function Tc(s){return Pe(co(s))}var Mc=(s,e)=>(s%e+e)%e,zs=[0,2,4,5,7,9,11];function Cc(s){const e=vi(s);if(e[0]===""||e[3]!=="")return uo;const t=e[0],n=e[1],i=e[2],r=(t.charCodeAt(0)+3)%7,o=wc(n),c=i.length?+i:void 0,a=ao({step:r,alt:o,oct:c}),l=t+n+i,h=t+n,u=(zs[r]+o+120)%12,d=c===void 0?Mc(zs[r]+o,12)-1188:zs[r]+o+12*(c+1),f=d>=0&&d<=127?d:null,p=c===void 0?null:Math.pow(2,(d-69)/12)*440;return{empty:!1,acc:n,alt:o,chroma:u,coord:a,freq:p,height:d,letter:t,midi:f,name:l,oct:c,pc:h,step:r}}function Ac(s){const{step:e,alt:t,oct:n}=s,i=yc(e);if(!i)return"";const r=i+xc(t);return n||n===0?r+n:r}function ws(s,e){const t=Pe(s),n=Array.isArray(e)?e:ft(e).coord;if(t.empty||!n||n.length<2)return"";const i=t.coord,r=i.length===1?[i[0]+n[0]]:[i[0]+n[0],i[1]+n[1]];return Tc(r).name}function wr(s,e){const t=Pe(s),n=Pe(e);if(t.empty||n.empty)return"";const i=t.coord,r=n.coord,o=r[0]-i[0],c=i.length===2&&r.length===2?r[1]-i[1]:-Math.floor(o*7/12),a=n.height===t.height&&n.midi!==null&&t.oct===n.oct&&t.step>n.step;return ho([o,c],a).name}function po(s,e){const t=e.length,n=(s%t+t)%t;return e.slice(n,t).concat(e.slice(0,n))}var Nt={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},fo=s=>Number(s).toString(2).padStart(12,"0"),kr=s=>parseInt(s,2),Sc=/^[01]{12}$/;function mo(s){return Sc.test(s)}var Pc=s=>typeof s=="number"&&s>=0&&s<=4095,Nc=s=>s&&mo(s.chroma),Tr={[Nt.chroma]:Nt};function go(s){const e=mo(s)?s:Pc(s)?fo(s):Array.isArray(s)?Ic(s):Nc(s)?s.chroma:Nt.chroma;return Tr[e]=Tr[e]||Dc(e)}var Oc=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Ec(s){const e=[];for(let t=0;t<12;t++)s.charAt(t)==="1"&&e.push(Oc[t]);return e}function $c(s){const e=s.split("");return e.map((t,n)=>po(n,e).join(""))}function Dc(s){const e=kr(s),t=$c(s).map(kr).filter(r=>r>=2048).sort()[0],n=fo(t),i=Ec(s);return{empty:!1,name:"",setNum:e,chroma:s,normalized:n,intervals:i}}function Ic(s){if(s.length===0)return Nt.chroma;let e;const t=[0,0,0,0,0,0,0,0,0,0,0,0];for(let n=0;n<s.length;n++)e=Pe(s[n]),e.empty&&(e=ft(s[n])),e.empty||(t[e.chroma]=1);return t.join("")}var Rc=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Vc=Rc,Fc={...Nt,name:"",quality:"Unknown",intervals:[],aliases:[]},vo=[],yn={};function Lc(s){return yn[s]||Fc}function jc(s,e,t){const n=Wc(s),i={...go(s),name:t||"",quality:n,intervals:s,aliases:e};vo.push(i),i.name&&(yn[i.name]=i),yn[i.setNum]=i,yn[i.chroma]=i,i.aliases.forEach(r=>qc(i,r))}function qc(s,e){yn[e]=s}function Wc(s){const e=t=>s.indexOf(t)!==-1;return e("5A")?"Augmented":e("3M")?"Major":e("5d")?"Diminished":e("3m")?"Minor":"Unknown"}Vc.forEach(([s,e,t])=>jc(s.split(" "),t.split(" "),e));vo.sort((s,e)=>s.setNum-e.setNum);var Bc=ft,zc=[1,2,2,3,3,4,5,5,6,6,7,7],Uc="P m M m M P d P m M m M".split(" ");function _o(s){const e=s<0?-1:1,t=Math.abs(s),n=t%12,i=Math.floor(t/12);return e*(zc[n]+7*i)+Uc[n]}var Hc=Gc((s,e)=>[s[0]-e[0],s[1]-e[1]]);function Gc(s){return(e,t)=>{const n=ft(e).coord,i=ft(t).coord;if(n&&i){const r=s(n,i);return ho(r).name}}}var Xc=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Yc=Xc,Zc={...Nt,intervals:[],aliases:[]},xn={};function bo(s){return xn[s]||Zc}function Kc(s,e,t=[]){const n={...go(s),name:e,intervals:s,aliases:t};return xn[n.name]=n,xn[n.setNum]=n,xn[n.chroma]=n,n.aliases.forEach(i=>Qc(n,i)),n}function Qc(s,e){xn[e]=s}Yc.forEach(([s,e,...t])=>Kc(s.split(" "),e,t));var yo={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function xo(s){const[e,t,n,i]=vi(s);return e===""?Us("",s):e==="A"&&i==="ug"?Us("","aug"):Us(e+t,n+i)}function Us(s,e){const t=e.split("/");if(t.length===1)return[s,t[0],""];const[n,i,r,o]=vi(t[1]);return n!==""&&r===""&&o===""?[s,t[0],n+i]:[s,e,""]}function is(s){if(Array.isArray(s))return Hs(s[1]||"",s[0],s[2]);if(s==="")return yo;{const[e,t,n]=xo(s),i=Hs(t,e,n);return i.empty?Hs(s):i}}function Hs(s,e,t){const n=Lc(s),i=Pe(e||""),r=Pe(t||"");if(n.empty||e&&i.empty||t&&r.empty)return yo;const o=wr(i.pc,r.pc),c=n.intervals.indexOf(o),a=c>=0,l=a?r:Pe(""),h=c===-1?NaN:c+1,u=r.pc&&r.pc!==i.pc,d=Array.from(n.intervals);if(a)for(let g=1;g<h;g++){const _=d[0][0],w=d[0][1],k=parseInt(_,10)+7;d.push(`${k}${w}`),d.shift()}else if(u){const g=Hc(wr(i.pc,r.pc),"8P");g&&d.unshift(g)}const f=i.empty?[]:d.map(g=>ws(i.pc,g));s=n.aliases.indexOf(s)!==-1?s:n.aliases[0];const p=`${i.empty?"":i.pc}${s}${a&&h>1?"/"+l.pc:u?"/"+r.pc:""}`,m=`${e?i.pc+" ":""}${n.name}${a&&h>1?" over "+l.pc:u?" over "+r.pc:""}`;return{...n,name:m,symbol:p,tonic:i.pc,type:n.name,root:l.pc,bass:u?r.pc:"",intervals:d,rootDegree:h,notes:f}}var Jc=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],el=Jc;el.forEach(([s,e,t])=>void 0);var tl="C C# D D# E F F# G G# A A# B".split(" "),nl="C Db D Eb E F Gb G Ab A Bb B".split(" ");function wo(s,e={}){if(isNaN(s)||s===-1/0||s===1/0)return"";s=Math.round(s);const n=(e.sharps===!0?tl:nl)[s%12];if(e.pitchClass)return n;const i=Math.floor(s/12)-1;return n+i}var rs=Pe,Cn=s=>rs(s).pc,Bt=s=>rs(s).midi;function Gs(s){return wo(s)}var ko=ws;function To(s,e){const t=rs(s);if(t.empty)return"";const n=rs(e||wo(t.midi||t.chroma,{sharps:t.alt<0,pitchClass:!0}));if(n.empty||n.chroma!==t.chroma)return"";if(t.oct===void 0)return n.pc;const i=t.chroma-t.alt,r=n.chroma-n.alt,o=i>11||r<0?-1:i<0||r>11?1:0,c=t.oct+o;return n.pc+c}var _i=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],Mr={...Nt,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},sl=_i.map(il),Qs={};sl.forEach(s=>{Qs[s.name]=s,s.aliases.forEach(e=>{Qs[e]=s})});function Mo(s){return typeof s=="string"?Qs[s.toLowerCase()]||Mr:s&&s.name?Mo(s.name):Mr}function il(s){const[e,t,n,i,r,o,c]=s,a=c?[c]:[],l=Number(t).toString(2);return{empty:!1,intervals:bo(i).intervals,modeNum:e,chroma:l,normalized:l,name:i,setNum:t,alt:n,triad:r,seventh:o,aliases:a}}function Co(s){return(e,t)=>{const n=Mo(e);if(n.empty)return[];const i=po(n.modeNum,s),r=n.intervals.map(o=>ws(t,o));return i.map((o,c)=>r[c]+o)}}Co(_i.map(s=>s[4]));Co(_i.map(s=>s[5]));var rl={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function ol(s){if(typeof s!="string")return["",""];const e=s.indexOf(" "),t=Pe(s.substring(0,e));if(t.empty){const i=Pe(s);return i.empty?["",s.toLowerCase()]:[i.name,""]}const n=s.substring(t.name.length+1).toLowerCase();return[t.name,n.length?n:""]}function al(s){const e=Array.isArray(s)?s:ol(s),t=Pe(e[0]).name,n=bo(e[1]);if(n.empty)return rl;const i=n.name,r=t?n.intervals.map(c=>ws(t,c)):[],o=t?t+" "+i:i;return{...n,name:o,type:i,tonic:t,notes:r}}function cl(s){let e=s;return e=e.replace(/diminished/gi,"diminished"),e=e.replace(/dim/gi,"dim"),e=e.replace(/minor/gi,"minor"),e=e.replace(/min/gi,"min"),e=e.replace(/major/gi,"major"),e=e.replace(/maj/gi,"maj"),e=e.replace(/aug/gi,"aug"),e=e.replace(/sus/gi,"sus"),e=e.replace(/dom/gi,"dom"),e=e.replace(/minmaj/gi,"mMaj"),e=e.replace(/mmaj/gi,"mMaj"),e}function ll(s){return s.replace(/([A-G])(B+)/g,(t,n,i)=>n+"b".repeat(i.length)).replace(/->|→|–|—/g," ").replace(/[|>,;:]/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim()}function hl(s){const e=ll(s),t=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,n=e.match(t);return n?n.map(i=>i.trim()):[]}function Js(s){const e=hl(s),t=[];for(const n of e){let i=is(n);if(i.empty||i.notes.length===0){const[r,o,c]=xo(n);if(r){const a=cl(o),l=r+a+(c?"/"+c:""),h=is(l);!h.empty&&h.notes.length>0&&(i=h)}}i.empty||i.notes.length===0||t.push({symbol:i.symbol||n,tonic:i.tonic,quality:i.quality,notes:i.notes,intervals:i.intervals,aliases:i.aliases})}return t}var ul=Object.defineProperty,dl=Object.getOwnPropertyDescriptor,bi=(s,e,t,n)=>{for(var i=n>1?void 0:n?dl(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&ul(e,t,i),i};let An=class extends ze{constructor(){super(...arguments),this.value="",this.error=""}render(){return $`
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
    `}onInput(s){const e=s.target;this.value=e.value,this.error&&(this.error="")}onKeydown(s){s.key==="Enter"&&(s.preventDefault(),this.parseAndEmit())}parseAndEmit(){const s=Js(this.value);if(!s.length){this.error="No valid chord symbols were found.";return}this.error="";const e={progression:s,source:this.value};this.dispatchEvent(new CustomEvent("progression-parsed",{detail:e,bubbles:!0,composed:!0}))}clearInput(){this.value="",this.error="",this.dispatchEvent(new CustomEvent("progression-parsed",{detail:{progression:[],source:""},bubbles:!0,composed:!0}))}};An.styles=Rt`
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
  `;bi([fe({type:String})],An.prototype,"value",2);bi([G()],An.prototype,"error",2);An=bi([Vt("chord-input")],An);var pl=Object.defineProperty,fl=Object.getOwnPropertyDescriptor,$n=(s,e,t,n)=>{for(var i=n>1?void 0:n?fl(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&pl(e,t,i),i};let Ot=class extends ze{constructor(){super(...arguments),this.originalChords=[],this.keyChords=[],this.keyLabel="",this.activeIndex=0}render(){const s=this.keyChords.length>0?this.keyChords:this.originalChords;return $`
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
    `}selectChord(s){this.dispatchEvent(new CustomEvent("chord-selected",{detail:s,bubbles:!0,composed:!0}))}};Ot.styles=Rt`
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
  `;$n([fe({attribute:!1})],Ot.prototype,"originalChords",2);$n([fe({attribute:!1})],Ot.prototype,"keyChords",2);$n([fe({type:String})],Ot.prototype,"keyLabel",2);$n([fe({type:Number})],Ot.prototype,"activeIndex",2);Ot=$n([Vt("progression-stepper")],Ot);const Ao="15.1.22",Cr=(s,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:s}),Ar=(s,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:s}),ei=(s,e)=>({startTime:e,type:"setValue",value:s}),So=(s,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:s}),Po=(s,e,{startTime:t,target:n,timeConstant:i})=>n+(e-n)*Math.exp((t-s)/i),Ht=s=>s.type==="exponentialRampToValue",os=s=>s.type==="linearRampToValue",ut=s=>Ht(s)||os(s),yi=s=>s.type==="setValue",nt=s=>s.type==="setValueCurve",as=(s,e,t,n)=>{const i=s[e];return i===void 0?n:ut(i)||yi(i)?i.value:nt(i)?i.values[i.values.length-1]:Po(t,as(s,e-1,i.startTime,n),i)},Sr=(s,e,t,n,i)=>t===void 0?[n.insertTime,i]:ut(t)?[t.endTime,t.value]:yi(t)?[t.startTime,t.value]:nt(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,as(s,e-1,t.startTime,i)],ti=s=>s.type==="cancelAndHold",ni=s=>s.type==="cancelScheduledValues",ht=s=>ti(s)||ni(s)?s.cancelTime:Ht(s)||os(s)?s.endTime:s.startTime,Pr=(s,e,t,{endTime:n,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((s-e)/(n-e)):s<n?t:i,Nr=(s,e,t,{endTime:n,value:i})=>t+(s-e)/(n-e)*(i-t),No=(s,e)=>{const t=Math.floor(e);if(t===e)return s[t];const n=Math.ceil(e);return(1-(e-t))*s[t]+(1-(n-e))*s[n]},ml=(s,{duration:e,startTime:t,values:n})=>{const i=(s-t)/e*(n.length-1);return No(n,i)},gl=(s,e,t)=>{const n=s.length,i=Math.max(1,Math.floor(t/e*n))+1,r=s instanceof Float32Array?new Float32Array(i):s.slice(0,i);for(let o=0;o<i;o+=1){const a=o/(i-1)*t/e*(n-1);r[o]=No(s,a)}return r},Xn=s=>s.type==="setTarget";class vl{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=ht(e);if(ti(e)||ni(e)){const n=this._automationEvents.findIndex(r=>ni(e)&&nt(r)?r.startTime+r.duration>=t:ht(r)>=t),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),ti(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&ut(i)){if(r!==void 0&&Xn(r))throw new Error("The internal list is malformed.");const o=r===void 0?i.insertTime:nt(r)?r.startTime+r.duration:ht(r),c=r===void 0?this._defaultValue:nt(r)?r.values[r.values.length-1]:r.value,a=Ht(i)?Pr(t,o,c,i):Nr(t,o,c,i),l=Ht(i)?Cr(a,t,this._currenTime):Ar(a,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&Xn(r)&&this._automationEvents.push(ei(this.getValue(t),t)),r!==void 0&&nt(r)&&r.startTime+r.duration>t){const o=t-r.startTime;this._automationEvents[this._automationEvents.length-1]=So(gl(r.values,r.duration,o),r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>ht(o)>t),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&nt(i)&&ht(i)+i.duration>t)return!1;const r=Ht(e)?Cr(e.value,e.endTime,this._currenTime):os(e)?Ar(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(nt(e)&&t+e.duration>ht(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>ht(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),i=n[0];Xn(i)&&n.unshift(ei(as(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>ht(o)>e),n=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&Xn(r)&&(n===void 0||!ut(n)||n.insertTime>e))return Po(e,as(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&yi(r)&&(n===void 0||!ut(n)))return r.value;if(r!==void 0&&nt(r)&&(n===void 0||!ut(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?ml(e,r):r.values[r.values.length-1];if(r!==void 0&&ut(r)&&(n===void 0||!ut(n)))return r.value;if(n!==void 0&&Ht(n)){const[o,c]=Sr(this._automationEvents,i,r,n,this._defaultValue);return Pr(e,o,c,n)}if(n!==void 0&&os(n)){const[o,c]=Sr(this._automationEvents,i,r,n,this._defaultValue);return Nr(e,o,c,n)}return this._defaultValue}}const _l=s=>({cancelTime:s,type:"cancelAndHold"}),bl=s=>({cancelTime:s,type:"cancelScheduledValues"}),yl=(s,e)=>({endTime:e,type:"exponentialRampToValue",value:s}),xl=(s,e)=>({endTime:e,type:"linearRampToValue",value:s}),wl=(s,e,t)=>({startTime:e,target:s,timeConstant:t,type:"setTarget"}),kl=()=>new DOMException("","AbortError"),Tl=s=>(e,t,[n,i,r],o)=>{s(e[i],[t,n,r],c=>c[0]===t&&c[1]===n,o)},Ml=s=>(e,t,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},Cl=s=>(e,t)=>{s.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},tn=new WeakSet,Oo=new WeakMap,xi=new WeakMap,Eo=new WeakMap,wi=new WeakMap,ks=new WeakMap,$o=new WeakMap,si=new WeakMap,ii=new WeakMap,ri=new WeakMap,Do={construct(){return Do}},Al=s=>{try{const e=new Proxy(s,Do);new e}catch{return!1}return!0},Or=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Er=(s,e)=>{const t=[];let n=s.replace(/^[\s]+/,""),i=n.match(Or);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(Or)}return[t.join(";"),n]},$r=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Dr=s=>{if(!Al(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Sl=(s,e,t,n,i,r,o,c,a,l,h,u,d)=>{let f=0;return(p,m,g={credentials:"omit"})=>{const _=h.get(p);if(_!==void 0&&_.has(m))return Promise.resolve();const w=l.get(p);if(w!==void 0){const v=w.get(m);if(v!==void 0)return v}const k=r(p),M=k.audioWorklet===void 0?i(m).then(([v,y])=>{const[x,b]=Er(v,y),A=`${x};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${b}
})})(window,'_AWGS')`;return t(A)}).then(()=>{const v=d._AWGS.pop();if(v===void 0)throw new SyntaxError;n(k.currentTime,k.sampleRate,()=>v(class{},void 0,(y,x)=>{if(y.trim()==="")throw e();const b=ii.get(k);if(b!==void 0){if(b.has(y))throw e();Dr(x),$r(x.parameterDescriptors),b.set(y,x)}else Dr(x),$r(x.parameterDescriptors),ii.set(k,new Map([[y,x]]))},k.sampleRate,void 0,void 0))}):Promise.all([i(m),Promise.resolve(s(u,u))]).then(([[v,y],x])=>{const b=f+1;f=b;const[A,S]=Er(v,y),N=`${A};((AudioWorkletProcessor,registerProcessor)=>{${S}
})(${x?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${x?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${x?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${b}',class extends AudioWorkletProcessor{process(){return !1}})`,I=new Blob([N],{type:"application/javascript; charset=utf-8"}),E=URL.createObjectURL(I);return k.audioWorklet.addModule(E,g).then(()=>{if(c(k))return k;const D=o(k);return D.audioWorklet.addModule(E,g).then(()=>D)}).then(D=>{if(a===null)throw new SyntaxError;try{new a(D,`__sac${b}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(E))});return w===void 0?l.set(p,new Map([[m,M]])):w.set(m,M),M.then(()=>{const v=h.get(p);v===void 0?h.set(p,new Set([m])):v.add(m)}).finally(()=>{const v=l.get(p);v!==void 0&&v.delete(m)}),M}},He=(s,e)=>{const t=s.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Ts=(s,e)=>{const t=Array.from(s).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return s.delete(n),n},Io=(s,e,t,n)=>{const i=He(s,e),r=Ts(i,o=>o[0]===t&&o[1]===n);return i.size===0&&s.delete(e),r},Dn=s=>He($o,s),nn=s=>{if(tn.has(s))throw new Error("The AudioNode is already stored.");tn.add(s),Dn(s).forEach(e=>e(!0))},Ro=s=>"port"in s,In=s=>{if(!tn.has(s))throw new Error("The AudioNode is not stored.");tn.delete(s),Dn(s).forEach(e=>e(!1))},oi=(s,e)=>{!Ro(s)&&e.every(t=>t.size===0)&&In(s)},Pl=(s,e,t,n,i,r,o,c,a,l,h,u,d)=>{const f=new WeakMap;return(p,m,g,_,w)=>{const{activeInputs:k,passiveInputs:M}=r(m),{outputs:v}=r(p),y=c(p),x=b=>{const A=a(m),S=a(p);if(b){const C=Io(M,p,g,_);s(k,p,C,!1),!w&&!u(p)&&t(S,A,g,_),d(m)&&nn(m)}else{const C=n(k,p,g,_);e(M,_,C,!1),!w&&!u(p)&&i(S,A,g,_);const T=o(m);if(T===0)h(m)&&oi(m,k);else{const P=f.get(m);P!==void 0&&clearTimeout(P),f.set(m,setTimeout(()=>{h(m)&&oi(m,k)},T*1e3))}}};return l(v,[m,g,_],b=>b[0]===m&&b[1]===g&&b[2]===_,!0)?(y.add(x),h(p)?s(k,p,[g,_,x],!0):e(M,_,[p,g,x],!0),!0):!1}},Nl=s=>(e,t,[n,i,r],o)=>{const c=e.get(n);c===void 0?e.set(n,new Set([[i,t,r]])):s(c,[i,t,r],a=>a[0]===i&&a[1]===t,o)},Ol=s=>(e,t)=>{const n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(n),n.disconnect()};t.addEventListener("ended",i)},El=s=>(e,t)=>{s(e).add(t)},$l={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},Dl=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=i(c),h={...$l,...a},u=n(l,h),d=r(l)?e():null;super(c,!1,u,d),this._nativeAnalyserNode=u}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(c){this._nativeAnalyserNode.fftSize=c}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(c){const a=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=c,!(c>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=a,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(c){const a=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=c,!(this._nativeAnalyserNode.maxDecibels>c))throw this._nativeAnalyserNode.minDecibels=a,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(c){this._nativeAnalyserNode.smoothingTimeConstant=c}getByteFrequencyData(c){this._nativeAnalyserNode.getByteFrequencyData(c)}getByteTimeDomainData(c){this._nativeAnalyserNode.getByteTimeDomainData(c)}getFloatFrequencyData(c){this._nativeAnalyserNode.getFloatFrequencyData(c)}getFloatTimeDomainData(c){this._nativeAnalyserNode.getFloatTimeDomainData(c)}},ke=(s,e)=>s.context===e,Il=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,fftSize:c.fftSize,maxDecibels:c.maxDecibels,minDecibels:c.minDecibels,smoothingTimeConstant:c.smoothingTimeConstant};c=s(o,l)}return n.set(o,c),await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},cs=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Je=()=>new DOMException("","IndexSizeError"),ki=s=>{s.getChannelData=(e=>t=>{try{return e.call(s,t)}catch(n){throw n.code===12?Je():n}})(s.getChannelData)},Rl={numberOfChannels:1},Vl=(s,e,t,n,i,r,o,c)=>{let a=null;return class Vo{constructor(h){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:u,numberOfChannels:d,sampleRate:f}={...Rl,...h};a===null&&(a=new i(1,1,44100));const p=n!==null&&e(r,r)?new n({length:u,numberOfChannels:d,sampleRate:f}):a.createBuffer(d,u,f);if(p.numberOfChannels===0)throw t();return typeof p.copyFromChannel!="function"?(o(p),ki(p)):e(cs,()=>cs(p))||c(p),s.add(p),p}static[Symbol.hasInstance](h){return h!==null&&typeof h=="object"&&Object.getPrototypeOf(h)===Vo.prototype||s.has(h)}}},Se=-34028234663852886e22,Me=-Se,st=s=>tn.has(s),Fl={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},Ll=(s,e,t,n,i,r,o,c)=>class extends s{constructor(l,h){const u=r(l),d={...Fl,...h},f=i(u,d),p=o(u),m=p?e():null;super(l,!1,f,m),this._audioBufferSourceNodeRenderer=m,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,p,f.playbackRate,Me,Se)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const h=typeof l=="function"?c(this,l):null;this._nativeAudioBufferSourceNode.onended=h;const u=this._nativeAudioBufferSourceNode.onended;this._onended=u!==null&&u===h?l:u}get playbackRate(){return this._playbackRate}start(l=0,h=0,u){if(this._nativeAudioBufferSourceNode.start(l,h,u),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=u===void 0?[l,h]:[l,h,u]),this.context.state!=="closed"){nn(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),st(this)&&In(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},jl=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,c=null;const a=async(l,h)=>{let u=t(l);const d=ke(u,h);if(!d){const f={buffer:u.buffer,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,loop:u.loop,loopEnd:u.loopEnd,loopStart:u.loopStart,playbackRate:u.playbackRate.value};u=e(h,f),o!==null&&u.start(...o),c!==null&&u.stop(c)}return r.set(h,u),d?await s(h,l.playbackRate,u.playbackRate):await n(h,l.playbackRate,u.playbackRate),await i(l,h,u),u};return{set start(l){o=l},set stop(l){c=l},render(l,h){const u=r.get(h);return u!==void 0?Promise.resolve(u):a(l,h)}}},ql=s=>"playbackRate"in s,Wl=s=>"frequency"in s&&"gain"in s,Bl=s=>"offset"in s,zl=s=>!("frequency"in s)&&"gain"in s,Ul=s=>"detune"in s&&"frequency"in s&&!("gain"in s),Hl=s=>"pan"in s,Ce=s=>He(Oo,s),Rn=s=>He(Eo,s),ai=(s,e)=>{const{activeInputs:t}=Ce(s);t.forEach(i=>i.forEach(([r])=>{e.includes(s)||ai(r,[...e,s])}));const n=ql(s)?[s.playbackRate]:Ro(s)?Array.from(s.parameters.values()):Wl(s)?[s.Q,s.detune,s.frequency,s.gain]:Bl(s)?[s.offset]:zl(s)?[s.gain]:Ul(s)?[s.detune,s.frequency]:Hl(s)?[s.pan]:[];for(const i of n){const r=Rn(i);r!==void 0&&r.activeInputs.forEach(([o])=>ai(o,e))}st(s)&&In(s)},Fo=s=>{ai(s.destination,[])},Gl=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),Xl=(s,e,t,n,i,r,o,c,a)=>class extends s{constructor(h={}){if(a===null)throw new Error("Missing the native AudioContext constructor.");let u;try{u=new a(h)}catch(p){throw p.code===12&&p.message==="sampleRate is not in range"?t():p}if(u===null)throw n();if(!Gl(h.latencyHint))throw new TypeError(`The provided value '${h.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(h.sampleRate!==void 0&&u.sampleRate!==h.sampleRate)throw t();super(u,2);const{latencyHint:d}=h,{sampleRate:f}=u;if(this._baseLatency=typeof u.baseLatency=="number"?u.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=u,a.name==="webkitAudioContext"?(this._nativeGainNode=u.createGain(),this._nativeOscillatorNode=u.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(u.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,u.state==="running"){this._state="suspended";const p=()=>{this._state==="suspended"&&(this._state=null),u.removeEventListener("statechange",p)};u.addEventListener("statechange",p)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Fo(this)}))}createMediaElementSource(h){return new i(this,{mediaElement:h})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(h){return new o(this,{mediaStream:h})}createMediaStreamTrackSource(h){return new c(this,{mediaStreamTrack:h})}resume(){return this._state==="suspended"?new Promise((h,u)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?h():this.resume().then(h,u)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(h=>{throw h===void 0||h.code===15?e():h})}suspend(){return this._nativeAudioContext.suspend().catch(h=>{throw h===void 0?e():h})}},Yl=(s,e,t,n,i,r,o,c)=>class extends s{constructor(l,h){const u=r(l),d=o(u),f=i(u,h,d),p=d?e(c):null;super(l,!1,f,p),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},Zl=s=>{const e=new WeakMap,t=async(n,i)=>{const r=i.destination;return e.set(i,r),await s(n,i,r),r};return{render(n,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(n,i)}}},Kl=(s,e,t,n,i,r,o,c)=>(a,l)=>{const h=l.listener,u=()=>{const v=new Float32Array(1),y=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),x=o(l);let b=!1,A=[0,0,-1,0,1,0],S=[0,0,0];const C=()=>{if(b)return;b=!0;const I=n(l,256,9,0);I.onaudioprocess=({inputBuffer:E})=>{const D=[r(E,v,0),r(E,v,1),r(E,v,2),r(E,v,3),r(E,v,4),r(E,v,5)];D.some((V,j)=>V!==A[j])&&(h.setOrientation(...D),A=D);const z=[r(E,v,6),r(E,v,7),r(E,v,8)];z.some((V,j)=>V!==S[j])&&(h.setPosition(...z),S=z)},y.connect(I)},T=I=>E=>{E!==A[I]&&(A[I]=E,h.setOrientation(...A))},P=I=>E=>{E!==S[I]&&(S[I]=E,h.setPosition(...S))},N=(I,E,D)=>{const z=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:E});z.connect(y,0,I),z.start(),Object.defineProperty(z.offset,"defaultValue",{get(){return E}});const V=s({context:a},x,z.offset,Me,Se);return c(V,"value",j=>()=>j.call(V),j=>L=>{try{j.call(V,L)}catch(Z){if(Z.code!==9)throw Z}C(),x&&D(L)}),V.cancelAndHoldAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return C(),Z})(V.cancelAndHoldAtTime),V.cancelScheduledValues=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return C(),Z})(V.cancelScheduledValues),V.exponentialRampToValueAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return C(),Z})(V.exponentialRampToValueAtTime),V.linearRampToValueAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return C(),Z})(V.linearRampToValueAtTime),V.setTargetAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return C(),Z})(V.setTargetAtTime),V.setValueAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return C(),Z})(V.setValueAtTime),V.setValueCurveAtTime=(j=>x?()=>{throw i()}:(...L)=>{const Z=j.apply(V,L);return C(),Z})(V.setValueCurveAtTime),V};return{forwardX:N(0,0,T(0)),forwardY:N(1,0,T(1)),forwardZ:N(2,-1,T(2)),positionX:N(6,0,P(0)),positionY:N(7,0,P(1)),positionZ:N(8,0,P(2)),upX:N(3,0,T(3)),upY:N(4,1,T(4)),upZ:N(5,0,T(5))}},{forwardX:d,forwardY:f,forwardZ:p,positionX:m,positionY:g,positionZ:_,upX:w,upY:k,upZ:M}=h.forwardX===void 0?u():h;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return p},get positionX(){return m},get positionY(){return g},get positionZ(){return _},get upX(){return w},get upY(){return k},get upZ(){return M}}},ls=s=>"context"in s,Vn=s=>ls(s[0]),Ft=(s,e,t,n)=>{for(const i of s)if(t(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(e),!0},Ir=(s,e,[t,n],i)=>{Ft(s,[e,t,n],r=>r[0]===e&&r[1]===t,i)},Rr=(s,[e,t,n],i)=>{const r=s.get(e);r===void 0?s.set(e,new Set([[t,n]])):Ft(r,[t,n],o=>o[0]===t,i)},hn=s=>"inputs"in s,hs=(s,e,t,n)=>{if(hn(e)){const i=e.inputs[n];return s.connect(i,t,0),[i,t,0]}return s.connect(e,t,n),[e,t,n]},Lo=(s,e,t)=>{for(const n of s)if(n[0]===e&&n[1]===t)return s.delete(n),n;return null},Ql=(s,e,t)=>Ts(s,n=>n[0]===e&&n[1]===t),jo=(s,e)=>{if(!Dn(s).delete(e))throw new Error("Missing the expected event listener.")},qo=(s,e,t)=>{const n=He(s,e),i=Ts(n,r=>r[0]===t);return n.size===0&&s.delete(e),i},us=(s,e,t,n)=>{hn(e)?s.disconnect(e.inputs[n],t,0):s.disconnect(e,t,n)},se=s=>He(xi,s),Sn=s=>He(wi,s),Et=s=>si.has(s),es=s=>!tn.has(s),Vr=(s,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const c=s.createBufferSource();c.buffer=r,c.loop=!0,c.connect(n).connect(s.destination),c.connect(i),c.disconnect(i),n.onaudioprocess=a=>{const l=a.inputBuffer.getChannelData(0);Array.prototype.some.call(l,h=>h===1)?t(!0):t(!1),c.stop(),n.onaudioprocess=null,c.disconnect(n),n.disconnect(s.destination)},c.start()}}),Xs=(s,e)=>{const t=new Map;for(const n of s)for(const i of n){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((n,i)=>e(i,n))},ds=s=>"context"in s,Jl=s=>{const e=new Map;s.connect=(t=>(n,i=0,r=0)=>{const o=ds(n)?t(n,i,r):t(n,i),c=e.get(n);return c===void 0?e.set(n,[{input:r,output:i}]):c.every(a=>a.input!==r||a.output!==i)&&c.push({input:r,output:i}),o})(s.connect.bind(s)),s.disconnect=(t=>(n,i,r)=>{if(t.apply(s),n===void 0)e.clear();else if(typeof n=="number")for(const[o,c]of e){const a=c.filter(l=>l.output!==n);a.length===0?e.delete(o):e.set(o,a)}else if(e.has(n))if(i===void 0)e.delete(n);else{const o=e.get(n);if(o!==void 0){const c=o.filter(a=>a.output!==i&&(a.input!==r||r===void 0));c.length===0?e.delete(n):e.set(n,c)}}for(const[o,c]of e)c.forEach(a=>{ds(o)?s.connect(o,a.output,a.input):s.connect(o,a.output)})})(s.disconnect)},eh=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=Rn(e),{outputs:o}=Ce(s),c=Dn(s),a=l=>{const h=se(s),u=Sn(e);if(l){const d=qo(r,s,t);Ir(i,s,d,!1),!n&&!Et(s)&&h.connect(u,t)}else{const d=Ql(i,s,t);Rr(r,d,!1),!n&&!Et(s)&&h.disconnect(u,t)}};return Ft(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(c.add(a),st(s)?Ir(i,s,[t,a],!0):Rr(r,[s,t,a],!0),!0):!1},th=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=Ce(e),o=Lo(i[n],s,t);return o===null?[Io(r,s,t,n)[2],!1]:[o[2],!0]},nh=(s,e,t)=>{const{activeInputs:n,passiveInputs:i}=Rn(e),r=Lo(n,s,t);return r===null?[qo(i,s,t)[1],!1]:[r[2],!0]},Ti=(s,e,t,n,i)=>{const[r,o]=th(s,t,n,i);if(r!==null&&(jo(s,r),o&&!e&&!Et(s)&&us(se(s),se(t),n,i)),st(t)){const{activeInputs:c}=Ce(t);oi(t,c)}},Mi=(s,e,t,n)=>{const[i,r]=nh(s,t,n);i!==null&&(jo(s,i),r&&!e&&!Et(s)&&se(s).disconnect(Sn(t),n))},sh=(s,e)=>{const t=Ce(s),n=[];for(const i of t.outputs)Vn(i)?Ti(s,e,...i):Mi(s,e,...i),n.push(i[0]);return t.outputs.clear(),n},ih=(s,e,t)=>{const n=Ce(s),i=[];for(const r of n.outputs)r[1]===t&&(Vn(r)?Ti(s,e,...r):Mi(s,e,...r),i.push(r[0]),n.outputs.delete(r));return i},rh=(s,e,t,n,i)=>{const r=Ce(s);return Array.from(r.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(i===void 0||o[2]===i)).map(o=>(Vn(o)?Ti(s,e,...o):Mi(s,e,...o),r.outputs.delete(o),o[0]))},oh=(s,e,t,n,i,r,o,c,a,l,h,u,d,f,p,m)=>class extends l{constructor(_,w,k,M){super(k),this._context=_,this._nativeAudioNode=k;const v=h(_);u(v)&&t(Vr,()=>Vr(v,m))!==!0&&Jl(k),xi.set(this,k),$o.set(this,new Set),_.state!=="closed"&&w&&nn(this),s(this,M,k)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(_){this._nativeAudioNode.channelCount=_}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(_){this._nativeAudioNode.channelCountMode=_}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(_){this._nativeAudioNode.channelInterpretation=_}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(_,w=0,k=0){if(w<0||w>=this._nativeAudioNode.numberOfOutputs)throw i();const M=h(this._context),v=p(M);if(d(_)||f(_))throw r();if(ls(_)){const b=se(_);try{const S=hs(this._nativeAudioNode,b,w,k),C=es(this);(v||C)&&this._nativeAudioNode.disconnect(...S),this.context.state!=="closed"&&!C&&es(_)&&nn(_)}catch(S){throw S.code===12?r():S}if(e(this,_,w,k,v)){const S=a([this],_);Xs(S,n(v))}return _}const y=Sn(_);if(y.name==="playbackRate"&&y.maxValue===1024)throw o();try{this._nativeAudioNode.connect(y,w),(v||es(this))&&this._nativeAudioNode.disconnect(y,w)}catch(b){throw b.code===12?r():b}if(eh(this,_,w,v)){const b=a([this],_);Xs(b,n(v))}}disconnect(_,w,k){let M;const v=h(this._context),y=p(v);if(_===void 0)M=sh(this,y);else if(typeof _=="number"){if(_<0||_>=this.numberOfOutputs)throw i();M=ih(this,y,_)}else{if(w!==void 0&&(w<0||w>=this.numberOfOutputs)||ls(_)&&k!==void 0&&(k<0||k>=_.numberOfInputs))throw i();if(M=rh(this,y,_,w,k),M.length===0)throw r()}for(const x of M){const b=a([this],x);Xs(b,c)}}},ah=(s,e,t,n,i,r,o,c,a,l,h,u,d)=>(f,p,m,g=null,_=null)=>{const w=m.value,k=new vl(w),M=p?n(k):null,v={get defaultValue(){return w},get maxValue(){return g===null?m.maxValue:g},get minValue(){return _===null?m.minValue:_},get value(){return m.value},set value(y){m.value=y,v.setValueAtTime(y,f.context.currentTime)},cancelAndHoldAtTime(y){if(typeof m.cancelAndHoldAtTime=="function")M===null&&k.flush(f.context.currentTime),k.add(i(y)),m.cancelAndHoldAtTime(y);else{const x=Array.from(k).pop();M===null&&k.flush(f.context.currentTime),k.add(i(y));const b=Array.from(k).pop();m.cancelScheduledValues(y),x!==b&&b!==void 0&&(b.type==="exponentialRampToValue"?m.exponentialRampToValueAtTime(b.value,b.endTime):b.type==="linearRampToValue"?m.linearRampToValueAtTime(b.value,b.endTime):b.type==="setValue"?m.setValueAtTime(b.value,b.startTime):b.type==="setValueCurve"&&m.setValueCurveAtTime(b.values,b.startTime,b.duration))}return v},cancelScheduledValues(y){return M===null&&k.flush(f.context.currentTime),k.add(r(y)),m.cancelScheduledValues(y),v},exponentialRampToValueAtTime(y,x){if(y===0)throw new RangeError;if(!Number.isFinite(x)||x<0)throw new RangeError;const b=f.context.currentTime;return M===null&&k.flush(b),Array.from(k).length===0&&(k.add(l(w,b)),m.setValueAtTime(w,b)),k.add(o(y,x)),m.exponentialRampToValueAtTime(y,x),v},linearRampToValueAtTime(y,x){const b=f.context.currentTime;return M===null&&k.flush(b),Array.from(k).length===0&&(k.add(l(w,b)),m.setValueAtTime(w,b)),k.add(c(y,x)),m.linearRampToValueAtTime(y,x),v},setTargetAtTime(y,x,b){return M===null&&k.flush(f.context.currentTime),k.add(a(y,x,b)),m.setTargetAtTime(y,x,b),v},setValueAtTime(y,x){return M===null&&k.flush(f.context.currentTime),k.add(l(y,x)),m.setValueAtTime(y,x),v},setValueCurveAtTime(y,x,b){const A=y instanceof Float32Array?y:new Float32Array(y);if(u!==null&&u.name==="webkitAudioContext"){const S=x+b,C=f.context.sampleRate,T=Math.ceil(x*C),P=Math.floor(S*C),N=P-T,I=new Float32Array(N);for(let D=0;D<N;D+=1){const z=(A.length-1)/b*((T+D)/C-x),V=Math.floor(z),j=Math.ceil(z);I[D]=V===j?A[V]:(1-(z-V))*A[V]+(1-(j-z))*A[j]}M===null&&k.flush(f.context.currentTime),k.add(h(I,x,b)),m.setValueCurveAtTime(I,x,b);const E=P/C;E<S&&d(v,I[I.length-1],E),d(v,A[A.length-1],S)}else M===null&&k.flush(f.context.currentTime),k.add(h(A,x,b)),m.setValueCurveAtTime(A,x,b);return v}};return t.set(v,m),e.set(v,f),s(v,M),v},ch=s=>({replay(e){for(const t of s)if(t.type==="exponentialRampToValue"){const{endTime:n,value:i}=t;e.exponentialRampToValueAtTime(i,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:i}=t;e.linearRampToValueAtTime(i,n)}else if(t.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=t;e.setTargetAtTime(i,n,r)}else if(t.type==="setValue"){const{startTime:n,value:i}=t;e.setValueAtTime(i,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class Wo{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,i)=>e.call(t,n,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const lh={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},hh=(s,e,t,n,i,r,o,c,a,l,h,u,d,f)=>class extends e{constructor(m,g,_){var w;const k=c(m),M=a(k),v=h({...lh,..._});d(v);const y=ii.get(k),x=y?.get(g),b=M||k.state!=="closed"?k:(w=o(k))!==null&&w!==void 0?w:k,A=i(b,M?null:m.baseLatency,l,g,x,v),S=M?n(g,v,x):null;super(m,!0,A,S);const C=[];A.parameters.forEach((P,N)=>{const I=t(this,M,P);C.push([N,I])}),this._nativeAudioWorkletNode=A,this._onprocessorerror=null,this._parameters=new Wo(C),M&&s(k,this);const{activeInputs:T}=r(this);u(A,T)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(m){const g=typeof m=="function"?f(this,m):null;this._nativeAudioWorkletNode.onprocessorerror=g;const _=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=_!==null&&_===g?m:_}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function ps(s,e,t,n,i){if(typeof s.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),s.copyFromChannel(e[t],n,i);else{const r=s.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const Bo=(s,e,t,n,i)=>{typeof s.copyToChannel=="function"?e[t].byteLength!==0&&s.copyToChannel(e[t],n,i):e[t].byteLength!==0&&s.getChannelData(n).set(e[t],i)},fs=(s,e)=>{const t=[];for(let n=0;n<s;n+=1){const i=[],r=typeof e=="number"?e:e[n];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},uh=(s,e)=>{const t=He(ri,s),n=se(e);return He(t,n)},dh=async(s,e,t,n,i,r,o)=>{const c=e===null?Math.ceil(s.context.length/128)*128:e.length,a=n.channelCount*n.numberOfInputs,l=i.reduce((g,_)=>g+_,0),h=l===0?null:t.createBuffer(l,c,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const u=Ce(s),d=await uh(t,s),f=fs(n.numberOfInputs,n.channelCount),p=fs(n.numberOfOutputs,i),m=Array.from(s.parameters.keys()).reduce((g,_)=>({...g,[_]:new Float32Array(128)}),{});for(let g=0;g<c;g+=128){if(n.numberOfInputs>0&&e!==null)for(let _=0;_<n.numberOfInputs;_+=1)for(let w=0;w<n.channelCount;w+=1)ps(e,f[_],w,w,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:_},w)=>{ps(e,m,_,a+w,g)});for(let _=0;_<n.numberOfInputs;_+=1)for(let w=0;w<i[_];w+=1)p[_][w].byteLength===0&&(p[_][w]=new Float32Array(128));try{const _=f.map((k,M)=>u.activeInputs[M].size===0?[]:k),w=o(g/t.sampleRate,t.sampleRate,()=>d.process(_,p,m));if(h!==null)for(let k=0,M=0;k<n.numberOfOutputs;k+=1){for(let v=0;v<i[k];v+=1)Bo(h,p[k],v,M+v,g);M+=i[k]}if(!w)break}catch(_){s.dispatchEvent(new ErrorEvent("processorerror",{colno:_.colno,filename:_.filename,lineno:_.lineno,message:_.message}));break}}return h},ph=(s,e,t,n,i,r,o,c,a,l,h,u,d,f,p,m)=>(g,_,w)=>{const k=new WeakMap;let M=null;const v=async(y,x)=>{let b=h(y),A=null;const S=ke(b,x),C=Array.isArray(_.outputChannelCount)?_.outputChannelCount:Array.from(_.outputChannelCount);if(u===null){const T=C.reduce((E,D)=>E+D,0),P=i(x,{channelCount:Math.max(1,T),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,T)}),N=[];for(let E=0;E<y.numberOfOutputs;E+=1)N.push(n(x,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:C[E]}));const I=o(x,{channelCount:_.channelCount,channelCountMode:_.channelCountMode,channelInterpretation:_.channelInterpretation,gain:1});I.connect=e.bind(null,N),I.disconnect=a.bind(null,N),A=[P,N,I]}else S||(b=new u(x,g));if(k.set(x,A===null?b:A[2]),A!==null){if(M===null){if(w===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const D=y.channelCount*y.numberOfInputs,z=w.parameterDescriptors===void 0?0:w.parameterDescriptors.length,V=D+z;M=dh(y,V===0?null:await(async()=>{const L=new d(V,Math.ceil(y.context.length/128)*128,x.sampleRate),Z=[],Ee=[];for(let ie=0;ie<_.numberOfInputs;ie+=1)Z.push(o(L,{channelCount:_.channelCount,channelCountMode:_.channelCountMode,channelInterpretation:_.channelInterpretation,gain:1})),Ee.push(i(L,{channelCount:_.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:_.channelCount}));const $e=await Promise.all(Array.from(y.parameters.values()).map(async ie=>{const Te=r(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:ie.value});return await f(L,ie,Te.offset),Te})),U=n(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,D+z)});for(let ie=0;ie<_.numberOfInputs;ie+=1){Z[ie].connect(Ee[ie]);for(let Te=0;Te<_.channelCount;Te+=1)Ee[ie].connect(U,Te,ie*_.channelCount+Te)}for(const[ie,Te]of $e.entries())Te.connect(U,0,D+ie),Te.start(0);return U.connect(L.destination),await Promise.all(Z.map(ie=>p(y,L,ie))),m(L)})(),x,_,C,w,l)}const T=await M,P=t(x,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[N,I,E]=A;T!==null&&(P.buffer=T,P.start(0)),P.connect(N);for(let D=0,z=0;D<y.numberOfOutputs;D+=1){const V=I[D];for(let j=0;j<C[D];j+=1)N.connect(V,z+j,j);z+=C[D]}return E}if(S)for(const[T,P]of y.parameters.entries())await s(x,P,b.parameters.get(T));else for(const[T,P]of y.parameters.entries())await f(x,P,b.parameters.get(T));return await p(y,x,b),b};return{render(y,x){c(x,y);const b=k.get(x);return b!==void 0?Promise.resolve(b):v(y,x)}}},fh=(s,e,t,n,i,r,o,c,a,l,h,u,d,f,p,m,g,_,w,k)=>class extends p{constructor(v,y){super(v,y),this._nativeContext=v,this._audioWorklet=s===void 0?void 0:{addModule:(x,b)=>s(this,x,b)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(v,y,x){return new t({length:y,numberOfChannels:v,sampleRate:x})}createBufferSource(){return new n(this)}createChannelMerger(v=6){return new r(this,{numberOfInputs:v})}createChannelSplitter(v=6){return new o(this,{numberOfOutputs:v})}createConstantSource(){return new c(this)}createConvolver(){return new a(this)}createDelay(v=1){return new h(this,{maxDelayTime:v})}createDynamicsCompressor(){return new u(this)}createGain(){return new d(this)}createIIRFilter(v,y){return new f(this,{feedback:y,feedforward:v})}createOscillator(){return new m(this)}createPanner(){return new g(this)}createPeriodicWave(v,y,x={disableNormalization:!1}){return new _(this,{...x,imag:y,real:v})}createStereoPanner(){return new w(this)}createWaveShaper(){return new k(this)}decodeAudioData(v,y,x){return l(this._nativeContext,v).then(b=>(typeof y=="function"&&y(b),b),b=>{throw typeof x=="function"&&x(b),b})}},mh={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},gh=(s,e,t,n,i,r,o,c)=>class extends s{constructor(l,h){const u=r(l),d={...mh,...h},f=i(u,d),p=o(u),m=p?t():null;super(l,!1,f,m),this._Q=e(this,p,f.Q,Me,Se),this._detune=e(this,p,f.detune,1200*Math.log2(Me),-1200*Math.log2(Me)),this._frequency=e(this,p,f.frequency,l.sampleRate/2,0),this._gain=e(this,p,f.gain,40*Math.log10(Me),Se),this._nativeBiquadFilterNode=f,c(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,h,u){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,h,u)}catch(d){throw d.code===11?n():d}if(l.length!==h.length||h.length!==u.length)throw n()}},vh=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(c,a)=>{let l=t(c);const h=ke(l,a);if(!h){const u={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(a,u)}return r.set(a,l),h?(await s(a,c.Q,l.Q),await s(a,c.detune,l.detune),await s(a,c.frequency,l.frequency),await s(a,c.gain,l.gain)):(await n(a,c.Q,l.Q),await n(a,c.detune,l.detune),await n(a,c.frequency,l.frequency),await n(a,c.gain,l.gain)),await i(c,a,l),l};return{render(c,a){const l=r.get(a);return l!==void 0?Promise.resolve(l):o(c,a)}}},_h=(s,e)=>(t,n)=>{const i=e.get(t);if(i!==void 0)return i;const r=s.get(t);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(s.set(t,o),o.catch(()=>!1).then(c=>(s.delete(t),e.set(t,c),c))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},bh={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},yh=(s,e,t,n,i)=>class extends s{constructor(o,c){const a=n(o),l={...bh,...c},h=t(a,l),u=i(a)?e():null;super(o,!1,h,u)}},xh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,numberOfInputs:c.numberOfInputs};c=s(o,l)}return n.set(o,c),await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},wh={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},kh=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=n(c),h=r({...wh,...a}),u=t(l,h),d=i(l)?e():null;super(c,!1,u,d)}},Th=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,numberOfOutputs:c.numberOfOutputs};c=s(o,l)}return n.set(o,c),await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},Mh=s=>(e,t,n)=>s(t,e,n),Ch=s=>(e,t,n=0,i=0)=>{const r=e[n];if(r===void 0)throw s();return ds(t)?r.connect(t,0,i):r.connect(t,0)},Ah=s=>(e,t)=>{const n=s(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Sh={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},Ph=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...Sh,...l},d=n(h,u),f=r(h),p=f?t():null;super(a,!1,d,p),this._constantSourceNodeRenderer=p,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,Me,Se),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(a){const l=typeof a=="function"?o(this,a):null;this._nativeConstantSourceNode.onended=l;const h=this._nativeConstantSourceNode.onended;this._onended=h!==null&&h===l?a:h}start(a=0){if(this._nativeConstantSourceNode.start(a),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=a),this.context.state!=="closed"){nn(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),st(this)&&In(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(a=0){this._nativeConstantSourceNode.stop(a),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=a)}},Nh=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,c=null;const a=async(l,h)=>{let u=t(l);const d=ke(u,h);if(!d){const f={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,offset:u.offset.value};u=e(h,f),o!==null&&u.start(o),c!==null&&u.stop(c)}return r.set(h,u),d?await s(h,l.offset,u.offset):await n(h,l.offset,u.offset),await i(l,h,u),u};return{set start(l){o=l},set stop(l){c=l},render(l,h){const u=r.get(h);return u!==void 0?Promise.resolve(u):a(l,h)}}},Oh=s=>e=>(s[0]=e,s[0]),Eh={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},$h=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=n(c),h={...Eh,...a},u=t(l,h),f=i(l)?e():null;super(c,!1,u,f),this._isBufferNullified=!1,this._nativeConvolverNode=u,h.buffer!==null&&r(this,h.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(c){if(this._nativeConvolverNode.buffer=c,c===null&&this._nativeConvolverNode.buffer!==null){const a=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=a.createBuffer(1,1,a.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(c){this._nativeConvolverNode.normalize=c}},Dh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={buffer:c.buffer,channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,disableNormalization:!c.normalize};c=s(o,l)}return n.set(o,c),hn(c)?await t(r,o,c.inputs[0]):await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},Ih=(s,e)=>(t,n,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},Rh=()=>new DOMException("","DataCloneError"),Fr=s=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const i=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>i();try{e.postMessage(s,[s])}catch{}finally{i()}})},Vh=(s,e,t,n,i,r,o,c,a,l,h)=>(u,d)=>{const f=o(u)?u:r(u);if(i.has(d)){const p=t();return Promise.reject(p)}try{i.add(d)}catch{}return e(a,()=>a(f))?f.decodeAudioData(d).then(p=>(Fr(d).catch(()=>{}),e(c,()=>c(p))||h(p),s.add(p),p)):new Promise((p,m)=>{const g=async()=>{try{await Fr(d)}catch{}},_=w=>{m(w),g()};try{f.decodeAudioData(d,w=>{typeof w.copyFromChannel!="function"&&(l(w),ki(w)),s.add(w),g().then(()=>p(w))},w=>{_(w===null?n():w)})}catch(w){_(w)}})},Fh=(s,e,t,n,i,r,o,c)=>(a,l)=>{const h=e.get(a);if(h===void 0)throw new Error("Missing the expected cycle count.");const u=r(a.context),d=c(u);if(h===l){if(e.delete(a),!d&&o(a)){const f=n(a),{outputs:p}=t(a);for(const m of p)if(Vn(m)){const g=n(m[0]);s(f,g,m[1],m[2])}else{const g=i(m[0]);f.connect(g,m[1])}}}else e.set(a,h-l)},Lh={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},jh=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...Lh,...l},d=n(h,u),f=r(h),p=f?t(u.maxDelayTime):null;super(a,!1,d,p),this._delayTime=e(this,f,d.delayTime),o(this,u.maxDelayTime)}get delayTime(){return this._delayTime}},qh=(s,e,t,n,i)=>r=>{const o=new WeakMap,c=async(a,l)=>{let h=t(a);const u=ke(h,l);if(!u){const d={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:r};h=e(l,d)}return o.set(l,h),u?await s(l,a.delayTime,h.delayTime):await n(l,a.delayTime,h.delayTime),await i(a,l,h),h};return{render(a,l){const h=o.get(l);return h!==void 0?Promise.resolve(h):c(a,l)}}},Wh=s=>(e,t,n,i)=>s(e[i],r=>r[0]===t&&r[1]===n),Bh=s=>(e,t)=>{s(e).delete(t)},zh=s=>"delayTime"in s,Uh=(s,e,t)=>function n(i,r){const o=ls(r)?r:t(s,r);if(zh(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:c}=e(o);return Array.from(c).map(a=>n([...i,o],a[0])).reduce((a,l)=>a.concat(l),[])},Yn=(s,e,t)=>{const n=e[t];if(n===void 0)throw s();return n},Hh=s=>(e,t=void 0,n=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?Yn(s,e,t).disconnect():ds(t)?n===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?Yn(s,e,n).disconnect(t,0):Yn(s,e,n).disconnect(t,0,i):n===void 0?e.forEach(r=>r.disconnect(t)):Yn(s,e,n).disconnect(t,0),Gh={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},Xh=(s,e,t,n,i,r,o,c)=>class extends s{constructor(l,h){const u=r(l),d={...Gh,...h},f=n(u,d),p=o(u),m=p?t():null;super(l,!1,f,m),this._attack=e(this,p,f.attack),this._knee=e(this,p,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,p,f.ratio),this._release=e(this,p,f.release),this._threshold=e(this,p,f.threshold),c(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const h=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=h,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const h=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=h,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},Yh=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(c,a)=>{let l=t(c);const h=ke(l,a);if(!h){const u={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(a,u)}return r.set(a,l),h?(await s(a,c.attack,l.attack),await s(a,c.knee,l.knee),await s(a,c.ratio,l.ratio),await s(a,c.release,l.release),await s(a,c.threshold,l.threshold)):(await n(a,c.attack,l.attack),await n(a,c.knee,l.knee),await n(a,c.ratio,l.ratio),await n(a,c.release,l.release),await n(a,c.threshold,l.threshold)),await i(c,a,l),l};return{render(c,a){const l=r.get(a);return l!==void 0?Promise.resolve(l):o(c,a)}}},Zh=()=>new DOMException("","EncodingError"),Kh=s=>e=>new Promise((t,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),c=URL.createObjectURL(o),a=s.onerror,l=()=>{s.onerror=a,URL.revokeObjectURL(c)};s.onerror=(h,u,d,f,p)=>{if(u===c||u===s.location.href&&d===1&&f===1)return l(),n(p),!1;if(a!==null)return a(h,u,d,f,p)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=c,r.type="module",i.appendChild(r)}}),Qh=s=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},Jh=s=>(e,t,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},eu=s=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw s()},tu={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},nu=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=i(c),h={...tu,...a},u=n(l,h),d=r(l),f=d?t():null;super(c,!1,u,f),this._gain=e(this,d,u.gain,Me,Se)}get gain(){return this._gain}},su=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(c,a)=>{let l=t(c);const h=ke(l,a);if(!h){const u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(a,u)}return r.set(a,l),h?await s(a,c.gain,l.gain):await n(a,c.gain,l.gain),await i(c,a,l),l};return{render(c,a){const l=r.get(a);return l!==void 0?Promise.resolve(l):o(c,a)}}},iu=(s,e)=>t=>e(s,t),ru=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},ou=s=>e=>{var t;return(t=s.get(e))!==null&&t!==void 0?t:0},au=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},cu=s=>e=>s.get(e),be=()=>new DOMException("","InvalidStateError"),lu=s=>e=>{const t=s.get(e);if(t===void 0)throw be();return t},hu=(s,e)=>t=>{let n=s.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),s.set(t,n),n},uu=s=>e=>{const t=s.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Ms=()=>new DOMException("","InvalidAccessError"),du=s=>{s.getFrequencyResponse=(e=>(t,n,i)=>{if(t.length!==n.length||n.length!==i.length)throw Ms();return e.call(s,t,n,i)})(s.getFrequencyResponse)},pu={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},fu=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=n(c),h=i(l),u={...pu,...a},d=e(l,h?null:c.baseLatency,u),f=h?t(u.feedback,u.feedforward):null;super(c,!1,d,f),du(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(c,a,l){return this._nativeIIRFilterNode.getFrequencyResponse(c,a,l)}},zo=(s,e,t,n,i,r,o,c,a,l,h)=>{const u=l.length;let d=c;for(let f=0;f<u;f+=1){let p=t[0]*l[f];for(let m=1;m<i;m+=1){const g=d-m&a-1;p+=t[m]*r[g],p-=s[m]*o[g]}for(let m=i;m<n;m+=1)p+=t[m]*r[d-m&a-1];for(let m=i;m<e;m+=1)p-=s[m]*o[d-m&a-1];r[d]=l[f],o[d]=p,d=d+1&a-1,h[f]=p}return d},mu=(s,e,t,n)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),o=i.length,c=r.length,a=Math.min(o,c);if(i[0]!==1){for(let p=0;p<o;p+=1)r[p]/=i[0];for(let p=1;p<c;p+=1)i[p]/=i[0]}const l=32,h=new Float32Array(l),u=new Float32Array(l),d=e.createBuffer(s.numberOfChannels,s.length,s.sampleRate),f=s.numberOfChannels;for(let p=0;p<f;p+=1){const m=s.getChannelData(p),g=d.getChannelData(p);h.fill(0),u.fill(0),zo(i,o,r,c,a,h,u,0,l,m,g)}return d},gu=(s,e,t,n,i)=>(r,o)=>{const c=new WeakMap;let a=null;const l=async(h,u)=>{let d=null,f=e(h);const p=ke(f,u);if(u.createIIRFilter===void 0?d=s(u,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):p||(f=u.createIIRFilter(o,r)),c.set(u,d===null?f:d),d!==null){if(a===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(h.context.destination.channelCount,h.context.length,u.sampleRate);a=(async()=>{await n(h,g,g.destination);const _=await i(g);return mu(_,u,r,o)})()}const m=await a;return d.buffer=m,d.start(0),d}return await n(h,u,f),f};return{render(h,u){const d=c.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}},vu=(s,e,t,n,i,r)=>o=>(c,a)=>{const l=s.get(c);if(l===void 0){if(!o&&r(c)){const h=n(c),{outputs:u}=t(c);for(const d of u)if(Vn(d)){const f=n(d[0]);e(h,f,d[1],d[2])}else{const f=i(d[0]);h.disconnect(f,d[1])}}s.set(c,a)}else s.set(c,l+a)},_u=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},bu=(s,e)=>t=>s.has(t)||e(t),yu=(s,e)=>t=>s.has(t)||e(t),xu=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},wu=s=>e=>s!==null&&e instanceof s,ku=s=>e=>s!==null&&typeof s.AudioNode=="function"&&e instanceof s.AudioNode,Tu=s=>e=>s!==null&&typeof s.AudioParam=="function"&&e instanceof s.AudioParam,Mu=(s,e)=>t=>s(t)||e(t),Cu=s=>e=>s!==null&&e instanceof s,Au=s=>s!==null&&s.isSecureContext,Su=(s,e,t,n)=>class extends s{constructor(r,o){const c=t(r),a=e(c,o);if(n(c))throw TypeError();super(r,!0,a,null),this._nativeMediaElementAudioSourceNode=a}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},Pu={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Nu=(s,e,t,n)=>class extends s{constructor(r,o){const c=t(r);if(n(c))throw new TypeError;const a={...Pu,...o},l=e(c,a);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},Ou=(s,e,t,n)=>class extends s{constructor(r,o){const c=t(r),a=e(c,o);if(n(c))throw new TypeError;super(r,!0,a,null),this._nativeMediaStreamAudioSourceNode=a}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Eu=(s,e,t)=>class extends s{constructor(i,r){const o=t(i),c=e(o,r);super(i,!0,c,null)}},$u=(s,e,t,n,i,r)=>class extends t{constructor(c,a){super(c),this._nativeContext=c,ks.set(this,c),n(c)&&i.set(c,new Set),this._destination=new s(this,a),this._listener=e(this,c),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(c){const a=typeof c=="function"?r(this,c):null;this._nativeContext.onstatechange=a;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===a?c:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Pn=s=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=s.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},Du=(s,e)=>(t,n,i)=>{const r=new Set;return t.connect=(o=>(c,a=0,l=0)=>{const h=r.size===0;if(e(c))return o.call(t,c,a,l),s(r,[c,a,l],u=>u[0]===c&&u[1]===a&&u[2]===l,!0),h&&n(),c;o.call(t,c,a),s(r,[c,a],u=>u[0]===c&&u[1]===a,!0),h&&n()})(t.connect),t.disconnect=(o=>(c,a,l)=>{const h=r.size>0;if(c===void 0)o.apply(t),r.clear();else if(typeof c=="number"){o.call(t,c);for(const d of r)d[1]===c&&r.delete(d)}else{e(c)?o.call(t,c,a,l):o.call(t,c,a);for(const d of r)d[0]===c&&(a===void 0||d[1]===a)&&(l===void 0||d[2]===l)&&r.delete(d)}const u=r.size===0;h&&u&&i()})(t.disconnect),t},re=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t]&&(s[t]=n)},ge=(s,e)=>{re(s,e,"channelCount"),re(s,e,"channelCountMode"),re(s,e,"channelInterpretation")},Lr=s=>typeof s.getFloatTimeDomainData=="function",Iu=s=>{s.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);s.getByteTimeDomainData(t);const n=Math.max(t.length,s.fftSize);for(let i=0;i<n;i+=1)e[i]=(t[i]-128)*.0078125;return e}},Ru=(s,e)=>(t,n)=>{const i=t.createAnalyser();if(ge(i,n),!(n.maxDecibels>n.minDecibels))throw e();return re(i,n,"fftSize"),re(i,n,"maxDecibels"),re(i,n,"minDecibels"),re(i,n,"smoothingTimeConstant"),s(Lr,()=>Lr(i))||Iu(i),i},Vu=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,le=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t].value&&(s[t].value=n)},Fu=s=>{s.start=(e=>{let t=!1;return(n=0,i=0,r)=>{if(t)throw be();e.call(s,n,i,r),t=!0}})(s.start)},Ci=s=>{s.start=(e=>(t=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(s,t,n,i)})(s.start)},Ai=s=>{s.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(s,t)})(s.stop)},Lu=(s,e,t,n,i,r,o,c,a,l,h)=>(u,d)=>{const f=u.createBufferSource();return ge(f,d),le(f,d,"playbackRate"),re(f,d,"buffer"),re(f,d,"loop"),re(f,d,"loopEnd"),re(f,d,"loopStart"),e(t,()=>t(u))||Fu(f),e(n,()=>n(u))||a(f),e(i,()=>i(u))||l(f,u),e(r,()=>r(u))||Ci(f),e(o,()=>o(u))||h(f,u),e(c,()=>c(u))||Ai(f),s(u,f),f},ju=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,qu=(s,e)=>(t,n,i)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=s(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",c=>()=>c.call(o),c=>a=>{c.call(o,a);try{r.channelCount=a}catch(l){if(a>r.maxChannelCount)throw l}}),e(o,"channelCountMode",c=>()=>c.call(o),c=>a=>{c.call(o,a),r.channelCountMode=a}),e(o,"channelInterpretation",c=>()=>c.call(o),c=>a=>{c.call(o,a),r.channelInterpretation=a}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},Wu=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,Bu=s=>{const{port1:e}=new MessageChannel;try{e.postMessage(s)}finally{e.close()}},zu=(s,e,t,n,i)=>(r,o,c,a,l,h)=>{if(c!==null)try{const u=new c(r,a,h),d=new Map;let f=null;if(Object.defineProperties(u,{channelCount:{get:()=>h.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>f,set:p=>{typeof f=="function"&&u.removeEventListener("processorerror",f),f=typeof p=="function"?p:null,typeof f=="function"&&u.addEventListener("processorerror",f)}}}),u.addEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=typeof m[1]=="function"?m[1]:typeof m[1]=="object"&&m[1]!==null&&typeof m[1].handleEvent=="function"?m[1].handleEvent:null;if(g!==null){const _=d.get(m[1]);_!==void 0?m[1]=_:(m[1]=w=>{w.type==="error"?(Object.defineProperties(w,{type:{value:"processorerror"}}),g(w)):g(new ErrorEvent(m[0],{...w}))},d.set(g,m[1]))}}return p.call(u,"error",m[1],m[2]),p.call(u,...m)})(u.addEventListener),u.removeEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=d.get(m[1]);g!==void 0&&(d.delete(m[1]),m[1]=g)}return p.call(u,"error",m[1],m[2]),p.call(u,m[0],m[1],m[2])})(u.removeEventListener),h.numberOfOutputs!==0){const p=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return u.connect(p).connect(r.destination),i(u,()=>p.disconnect(),()=>p.connect(r.destination))}return u}catch(u){throw u.code===11?n():u}if(l===void 0)throw n();return Bu(h),e(r,o,l,h)},Uo=(s,e)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*e))))),Uu=s=>new Promise((e,t)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),t(r)},i.postMessage(s)}),Hu=async(s,e)=>{const t=await Uu(e);return new s(t)},Gu=(s,e,t,n)=>{let i=ri.get(s);i===void 0&&(i=new WeakMap,ri.set(s,i));const r=Hu(t,n);return i.set(e,r),r},Xu=(s,e,t,n,i,r,o,c,a,l,h,u,d)=>(f,p,m,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw a();const _=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(_.some(O=>O<1))throw a();if(_.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw a();const w=g.channelCount*g.numberOfInputs,k=_.reduce((O,F)=>O+F,0),M=m.parameterDescriptors===void 0?0:m.parameterDescriptors.length;if(w+M>6||k>6)throw a();const v=new MessageChannel,y=[],x=[];for(let O=0;O<g.numberOfInputs;O+=1)y.push(o(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),x.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const b=[];if(m.parameterDescriptors!==void 0)for(const{defaultValue:O,maxValue:F,minValue:me,name:oe}of m.parameterDescriptors){const X=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[oe]!==void 0?g.parameterData[oe]:O===void 0?0:O});Object.defineProperties(X.offset,{defaultValue:{get:()=>O===void 0?0:O},maxValue:{get:()=>F===void 0?Me:F},minValue:{get:()=>me===void 0?Se:me}}),b.push(X)}const A=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,w+M)}),S=Uo(p,f.sampleRate),C=c(f,S,w+M,Math.max(1,k)),T=i(f,{channelCount:Math.max(1,k),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,k)}),P=[];for(let O=0;O<g.numberOfOutputs;O+=1)P.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:_[O]}));for(let O=0;O<g.numberOfInputs;O+=1){y[O].connect(x[O]);for(let F=0;F<g.channelCount;F+=1)x[O].connect(A,F,O*g.channelCount+F)}const N=new Wo(m.parameterDescriptors===void 0?[]:m.parameterDescriptors.map(({name:O},F)=>{const me=b[F];return me.connect(A,0,w+F),me.start(0),[O,me.offset]}));A.connect(C);let I=g.channelInterpretation,E=null;const D=g.numberOfOutputs===0?[C]:P,z={get bufferSize(){return S},get channelCount(){return g.channelCount},set channelCount(O){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(O){throw t()},get channelInterpretation(){return I},set channelInterpretation(O){for(const F of y)F.channelInterpretation=O;I=O},get context(){return C.context},get inputs(){return y},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return E},set onprocessorerror(O){typeof E=="function"&&z.removeEventListener("processorerror",E),E=typeof O=="function"?O:null,typeof E=="function"&&z.addEventListener("processorerror",E)},get parameters(){return N},get port(){return v.port2},addEventListener(...O){return C.addEventListener(O[0],O[1],O[2])},connect:s.bind(null,D),disconnect:l.bind(null,D),dispatchEvent(...O){return C.dispatchEvent(O[0])},removeEventListener(...O){return C.removeEventListener(O[0],O[1],O[2])}},V=new Map;v.port1.addEventListener=(O=>(...F)=>{if(F[0]==="message"){const me=typeof F[1]=="function"?F[1]:typeof F[1]=="object"&&F[1]!==null&&typeof F[1].handleEvent=="function"?F[1].handleEvent:null;if(me!==null){const oe=V.get(F[1]);oe!==void 0?F[1]=oe:(F[1]=X=>{h(f.currentTime,f.sampleRate,()=>me(X))},V.set(me,F[1]))}}return O.call(v.port1,F[0],F[1],F[2])})(v.port1.addEventListener),v.port1.removeEventListener=(O=>(...F)=>{if(F[0]==="message"){const me=V.get(F[1]);me!==void 0&&(V.delete(F[1]),F[1]=me)}return O.call(v.port1,F[0],F[1],F[2])})(v.port1.removeEventListener);let j=null;Object.defineProperty(v.port1,"onmessage",{get:()=>j,set:O=>{typeof j=="function"&&v.port1.removeEventListener("message",j),j=typeof O=="function"?O:null,typeof j=="function"&&(v.port1.addEventListener("message",j),v.port1.start())}}),m.prototype.port=v.port1;let L=null;Gu(f,z,m,g).then(O=>L=O);const Ee=fs(g.numberOfInputs,g.channelCount),$e=fs(g.numberOfOutputs,_),U=m.parameterDescriptors===void 0?[]:m.parameterDescriptors.reduce((O,{name:F})=>({...O,[F]:new Float32Array(128)}),{});let ie=!0;const Te=()=>{g.numberOfOutputs>0&&C.disconnect(T);for(let O=0,F=0;O<g.numberOfOutputs;O+=1){const me=P[O];for(let oe=0;oe<_[O];oe+=1)T.disconnect(me,F+oe,oe);F+=_[O]}},R=new Map;C.onaudioprocess=({inputBuffer:O,outputBuffer:F})=>{if(L!==null){const me=u(z);for(let oe=0;oe<S;oe+=128){for(let X=0;X<g.numberOfInputs;X+=1)for(let ce=0;ce<g.channelCount;ce+=1)ps(O,Ee[X],ce,ce,oe);m.parameterDescriptors!==void 0&&m.parameterDescriptors.forEach(({name:X},ce)=>{ps(O,U,X,w+ce,oe)});for(let X=0;X<g.numberOfInputs;X+=1)for(let ce=0;ce<_[X];ce+=1)$e[X][ce].byteLength===0&&($e[X][ce]=new Float32Array(128));try{const X=Ee.map((Re,lt)=>{if(me[lt].size>0)return R.set(lt,S/128),Re;const qs=R.get(lt);return qs===void 0?[]:(Re.every(Fa=>Fa.every(La=>La===0))&&(qs===1?R.delete(lt):R.set(lt,qs-1)),Re)});ie=h(f.currentTime+oe/f.sampleRate,f.sampleRate,()=>L.process(X,$e,U));for(let Re=0,lt=0;Re<g.numberOfOutputs;Re+=1){for(let vn=0;vn<_[Re];vn+=1)Bo(F,$e[Re],vn,lt+vn,oe);lt+=_[Re]}}catch(X){ie=!1,z.dispatchEvent(new ErrorEvent("processorerror",{colno:X.colno,filename:X.filename,lineno:X.lineno,message:X.message}))}if(!ie){for(let X=0;X<g.numberOfInputs;X+=1){y[X].disconnect(x[X]);for(let ce=0;ce<g.channelCount;ce+=1)x[oe].disconnect(A,ce,X*g.channelCount+ce)}if(m.parameterDescriptors!==void 0){const X=m.parameterDescriptors.length;for(let ce=0;ce<X;ce+=1){const Re=b[ce];Re.disconnect(A,0,w+ce),Re.stop()}}A.disconnect(C),C.onaudioprocess=null,wt?Te():Wt();break}}}};let wt=!1;const kt=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),qt=()=>C.connect(kt).connect(f.destination),Wt=()=>{C.disconnect(kt),kt.disconnect()},Ra=()=>{if(ie){Wt(),g.numberOfOutputs>0&&C.connect(T);for(let O=0,F=0;O<g.numberOfOutputs;O+=1){const me=P[O];for(let oe=0;oe<_[O];oe+=1)T.connect(me,F+oe,oe);F+=_[O]}}wt=!0},Va=()=>{ie&&(qt(),Te()),wt=!1};return qt(),d(z,Ra,Va)},Ho=(s,e)=>{const t=s.createBiquadFilter();return ge(t,e),le(t,e,"Q"),le(t,e,"detune"),le(t,e,"frequency"),le(t,e,"gain"),re(t,e,"type"),t},Yu=(s,e)=>(t,n)=>{const i=t.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&e(t,i),ge(i,n),i},Zu=s=>{const e=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw be()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw be()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw be()}})},Fn=(s,e)=>{const t=s.createChannelSplitter(e.numberOfOutputs);return ge(t,e),Zu(t),t},Ku=(s,e,t,n,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const c=r.createConstantSource();return ge(c,o),le(c,o,"offset"),e(n,()=>n(r))||Ci(c),e(i,()=>i(r))||Ai(c),s(r,c),c},un=(s,e)=>(s.connect=e.connect.bind(e),s.disconnect=e.disconnect.bind(e),s),Qu=(s,e,t,n)=>(i,{offset:r,...o})=>{const c=i.createBuffer(1,2,44100),a=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),h=c.getChannelData(0);h[0]=1,h[1]=1,a.buffer=c,a.loop=!0;const u={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(p){l.channelCount=p},get channelCountMode(){return l.channelCountMode},set channelCountMode(p){l.channelCountMode=p},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(p){l.channelInterpretation=p},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return a.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return a.onended},set onended(p){a.onended=p},addEventListener(...p){return a.addEventListener(p[0],p[1],p[2])},dispatchEvent(...p){return a.dispatchEvent(p[0])},removeEventListener(...p){return a.removeEventListener(p[0],p[1],p[2])},start(p=0){a.start.call(a,p)},stop(p=0){a.stop.call(a,p)}},d=()=>a.connect(l),f=()=>a.disconnect(l);return s(i,a),n(un(u,l),d,f)},Ju=(s,e)=>(t,n)=>{const i=t.createConvolver();if(ge(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),re(i,n,"buffer"),n.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw s();return r.call(i,o)}),n.channelCountMode==="max"))throw s();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw s();return r.call(i,o)}),i},Go=(s,e)=>{const t=s.createDelay(e.maxDelayTime);return ge(t,e),le(t,e,"delayTime"),t},ed=s=>(e,t)=>{const n=e.createDynamicsCompressor();if(ge(n,t),t.channelCount>2||t.channelCountMode==="max")throw s();return le(n,t,"attack"),le(n,t,"knee"),le(n,t,"ratio"),le(n,t,"release"),le(n,t,"threshold"),n},Oe=(s,e)=>{const t=s.createGain();return ge(t,e),le(t,e,"gain"),t},td=s=>(e,t,n)=>{if(e.createIIRFilter===void 0)return s(e,t,n);const i=e.createIIRFilter(n.feedforward,n.feedback);return ge(i,n),i};function nd(s,e){const t=e[0]*e[0]+e[1]*e[1];return[(s[0]*e[0]+s[1]*e[1])/t,(s[1]*e[0]-s[0]*e[1])/t]}function sd(s,e){return[s[0]*e[0]-s[1]*e[1],s[0]*e[1]+s[1]*e[0]]}function jr(s,e){let t=[0,0];for(let n=s.length-1;n>=0;n-=1)t=sd(t,e),t[0]+=s[n];return t}const id=(s,e,t,n)=>(i,r,{channelCount:o,channelCountMode:c,channelInterpretation:a,feedback:l,feedforward:h})=>{const u=Uo(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=h instanceof Float64Array?h:new Float64Array(h),p=d.length,m=f.length,g=Math.min(p,m);if(p===0||p>20)throw n();if(d[0]===0)throw e();if(m===0||m>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let b=0;b<m;b+=1)f[b]/=d[0];for(let b=1;b<p;b+=1)d[b]/=d[0]}const _=t(i,u,o,o);_.channelCount=o,_.channelCountMode=c,_.channelInterpretation=a;const w=32,k=[],M=[],v=[];for(let b=0;b<o;b+=1){k.push(0);const A=new Float32Array(w),S=new Float32Array(w);A.fill(0),S.fill(0),M.push(A),v.push(S)}_.onaudioprocess=b=>{const A=b.inputBuffer,S=b.outputBuffer,C=A.numberOfChannels;for(let T=0;T<C;T+=1){const P=A.getChannelData(T),N=S.getChannelData(T);k[T]=zo(d,p,f,m,g,M[T],v[T],k[T],w,P,N)}};const y=i.sampleRate/2;return un({get bufferSize(){return u},get channelCount(){return _.channelCount},set channelCount(b){_.channelCount=b},get channelCountMode(){return _.channelCountMode},set channelCountMode(b){_.channelCountMode=b},get channelInterpretation(){return _.channelInterpretation},set channelInterpretation(b){_.channelInterpretation=b},get context(){return _.context},get inputs(){return[_]},get numberOfInputs(){return _.numberOfInputs},get numberOfOutputs(){return _.numberOfOutputs},addEventListener(...b){return _.addEventListener(b[0],b[1],b[2])},dispatchEvent(...b){return _.dispatchEvent(b[0])},getFrequencyResponse(b,A,S){if(b.length!==A.length||A.length!==S.length)throw s();const C=b.length;for(let T=0;T<C;T+=1){const P=-Math.PI*(b[T]/y),N=[Math.cos(P),Math.sin(P)],I=jr(f,N),E=jr(d,N),D=nd(I,E);A[T]=Math.sqrt(D[0]*D[0]+D[1]*D[1]),S[T]=Math.atan2(D[1],D[0])}},removeEventListener(...b){return _.removeEventListener(b[0],b[1],b[2])}},_)},rd=(s,e)=>s.createMediaElementSource(e.mediaElement),od=(s,e)=>{const t=s.createMediaStreamDestination();return ge(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},ad=(s,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=t.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:e}),i},cd=(s,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=t.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(e(t))throw new TypeError;return r},ld=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,hd=(s,e,t,n,i,r)=>(o,c)=>{const a=o.createOscillator();return ge(a,c),le(a,c,"detune"),le(a,c,"frequency"),c.periodicWave!==void 0?a.setPeriodicWave(c.periodicWave):re(a,c,"type"),e(t,()=>t(o))||Ci(a),e(n,()=>n(o))||r(a,o),e(i,()=>i(o))||Ai(a),s(o,a),a},ud=s=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?s(e,t):(ge(n,t),le(n,t,"orientationX"),le(n,t,"orientationY"),le(n,t,"orientationZ"),le(n,t,"positionX"),le(n,t,"positionY"),le(n,t,"positionZ"),re(n,t,"coneInnerAngle"),re(n,t,"coneOuterAngle"),re(n,t,"coneOuterGain"),re(n,t,"distanceModel"),re(n,t,"maxDistance"),re(n,t,"panningModel"),re(n,t,"refDistance"),re(n,t,"rolloffFactor"),n)},dd=(s,e,t,n,i,r,o,c,a,l)=>(h,{coneInnerAngle:u,coneOuterAngle:d,coneOuterGain:f,distanceModel:p,maxDistance:m,orientationX:g,orientationY:_,orientationZ:w,panningModel:k,positionX:M,positionY:v,positionZ:y,refDistance:x,rolloffFactor:b,...A})=>{const S=h.createPanner();if(A.channelCount>2||A.channelCountMode==="max")throw o();ge(S,A);const C={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},T=t(h,{...C,channelInterpretation:"speakers",numberOfInputs:6}),P=n(h,{...A,gain:1}),N=n(h,{...C,gain:1}),I=n(h,{...C,gain:0}),E=n(h,{...C,gain:0}),D=n(h,{...C,gain:0}),z=n(h,{...C,gain:0}),V=n(h,{...C,gain:0}),j=i(h,256,6,1),L=r(h,{...C,curve:new Float32Array([1,1]),oversample:"none"});let Z=[g,_,w],Ee=[M,v,y];const $e=new Float32Array(1);j.onaudioprocess=({inputBuffer:R})=>{const wt=[a(R,$e,0),a(R,$e,1),a(R,$e,2)];wt.some((qt,Wt)=>qt!==Z[Wt])&&(S.setOrientation(...wt),Z=wt);const kt=[a(R,$e,3),a(R,$e,4),a(R,$e,5)];kt.some((qt,Wt)=>qt!==Ee[Wt])&&(S.setPosition(...kt),Ee=kt)},Object.defineProperty(I.gain,"defaultValue",{get:()=>0}),Object.defineProperty(E.gain,"defaultValue",{get:()=>0}),Object.defineProperty(D.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0});const U={get bufferSize(){},get channelCount(){return S.channelCount},set channelCount(R){if(R>2)throw o();P.channelCount=R,S.channelCount=R},get channelCountMode(){return S.channelCountMode},set channelCountMode(R){if(R==="max")throw o();P.channelCountMode=R,S.channelCountMode=R},get channelInterpretation(){return S.channelInterpretation},set channelInterpretation(R){P.channelInterpretation=R,S.channelInterpretation=R},get coneInnerAngle(){return S.coneInnerAngle},set coneInnerAngle(R){S.coneInnerAngle=R},get coneOuterAngle(){return S.coneOuterAngle},set coneOuterAngle(R){S.coneOuterAngle=R},get coneOuterGain(){return S.coneOuterGain},set coneOuterGain(R){if(R<0||R>1)throw e();S.coneOuterGain=R},get context(){return S.context},get distanceModel(){return S.distanceModel},set distanceModel(R){S.distanceModel=R},get inputs(){return[P]},get maxDistance(){return S.maxDistance},set maxDistance(R){if(R<0)throw new RangeError;S.maxDistance=R},get numberOfInputs(){return S.numberOfInputs},get numberOfOutputs(){return S.numberOfOutputs},get orientationX(){return N.gain},get orientationY(){return I.gain},get orientationZ(){return E.gain},get panningModel(){return S.panningModel},set panningModel(R){S.panningModel=R},get positionX(){return D.gain},get positionY(){return z.gain},get positionZ(){return V.gain},get refDistance(){return S.refDistance},set refDistance(R){if(R<0)throw new RangeError;S.refDistance=R},get rolloffFactor(){return S.rolloffFactor},set rolloffFactor(R){if(R<0)throw new RangeError;S.rolloffFactor=R},addEventListener(...R){return P.addEventListener(R[0],R[1],R[2])},dispatchEvent(...R){return P.dispatchEvent(R[0])},removeEventListener(...R){return P.removeEventListener(R[0],R[1],R[2])}};u!==U.coneInnerAngle&&(U.coneInnerAngle=u),d!==U.coneOuterAngle&&(U.coneOuterAngle=d),f!==U.coneOuterGain&&(U.coneOuterGain=f),p!==U.distanceModel&&(U.distanceModel=p),m!==U.maxDistance&&(U.maxDistance=m),g!==U.orientationX.value&&(U.orientationX.value=g),_!==U.orientationY.value&&(U.orientationY.value=_),w!==U.orientationZ.value&&(U.orientationZ.value=w),k!==U.panningModel&&(U.panningModel=k),M!==U.positionX.value&&(U.positionX.value=M),v!==U.positionY.value&&(U.positionY.value=v),y!==U.positionZ.value&&(U.positionZ.value=y),x!==U.refDistance&&(U.refDistance=x),b!==U.rolloffFactor&&(U.rolloffFactor=b),(Z[0]!==1||Z[1]!==0||Z[2]!==0)&&S.setOrientation(...Z),(Ee[0]!==0||Ee[1]!==0||Ee[2]!==0)&&S.setPosition(...Ee);const ie=()=>{P.connect(S),s(P,L,0,0),L.connect(N).connect(T,0,0),L.connect(I).connect(T,0,1),L.connect(E).connect(T,0,2),L.connect(D).connect(T,0,3),L.connect(z).connect(T,0,4),L.connect(V).connect(T,0,5),T.connect(j).connect(h.destination)},Te=()=>{P.disconnect(S),c(P,L,0,0),L.disconnect(N),N.disconnect(T),L.disconnect(I),I.disconnect(T),L.disconnect(E),E.disconnect(T),L.disconnect(D),D.disconnect(T),L.disconnect(z),z.disconnect(T),L.disconnect(V),V.disconnect(T),T.disconnect(j),j.disconnect(h.destination)};return l(un(U,S),ie,Te)},pd=s=>(e,{disableNormalization:t,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=i instanceof Float32Array?i:new Float32Array(i),c=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(n).length<2)throw s();return c},Ln=(s,e,t,n)=>s.createScriptProcessor(e,t,n),fd=(s,e)=>(t,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return s(t,n);const r=t.createStereoPanner();return ge(r,n),le(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},md=(s,e,t,n,i,r)=>{const c=new Float32Array([1,1]),a=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...l,oversample:"none"},u=(p,m,g,_)=>{const w=new Float32Array(16385),k=new Float32Array(16385);for(let A=0;A<16385;A+=1){const S=A/16384*a;w[A]=Math.cos(S),k[A]=Math.sin(S)}const M=t(p,{...l,gain:0}),v=n(p,{...h,curve:w}),y=n(p,{...h,curve:c}),x=t(p,{...l,gain:0}),b=n(p,{...h,curve:k});return{connectGraph(){m.connect(M),m.connect(y.inputs===void 0?y:y.inputs[0]),m.connect(x),y.connect(g),g.connect(v.inputs===void 0?v:v.inputs[0]),g.connect(b.inputs===void 0?b:b.inputs[0]),v.connect(M.gain),b.connect(x.gain),M.connect(_,0,0),x.connect(_,0,1)},disconnectGraph(){m.disconnect(M),m.disconnect(y.inputs===void 0?y:y.inputs[0]),m.disconnect(x),y.disconnect(g),g.disconnect(v.inputs===void 0?v:v.inputs[0]),g.disconnect(b.inputs===void 0?b:b.inputs[0]),v.disconnect(M.gain),b.disconnect(x.gain),M.disconnect(_,0,0),x.disconnect(_,0,1)}}},d=(p,m,g,_)=>{const w=new Float32Array(16385),k=new Float32Array(16385),M=new Float32Array(16385),v=new Float32Array(16385),y=Math.floor(16385/2);for(let D=0;D<16385;D+=1)if(D>y){const z=(D-y)/(16384-y)*a;w[D]=Math.cos(z),k[D]=Math.sin(z),M[D]=0,v[D]=1}else{const z=D/(16384-y)*a;w[D]=1,k[D]=0,M[D]=Math.cos(z),v[D]=Math.sin(z)}const x=e(p,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),b=t(p,{...l,gain:0}),A=n(p,{...h,curve:w}),S=t(p,{...l,gain:0}),C=n(p,{...h,curve:k}),T=n(p,{...h,curve:c}),P=t(p,{...l,gain:0}),N=n(p,{...h,curve:M}),I=t(p,{...l,gain:0}),E=n(p,{...h,curve:v});return{connectGraph(){m.connect(x),m.connect(T.inputs===void 0?T:T.inputs[0]),x.connect(b,0),x.connect(S,0),x.connect(P,1),x.connect(I,1),T.connect(g),g.connect(A.inputs===void 0?A:A.inputs[0]),g.connect(C.inputs===void 0?C:C.inputs[0]),g.connect(N.inputs===void 0?N:N.inputs[0]),g.connect(E.inputs===void 0?E:E.inputs[0]),A.connect(b.gain),C.connect(S.gain),N.connect(P.gain),E.connect(I.gain),b.connect(_,0,0),P.connect(_,0,0),S.connect(_,0,1),I.connect(_,0,1)},disconnectGraph(){m.disconnect(x),m.disconnect(T.inputs===void 0?T:T.inputs[0]),x.disconnect(b,0),x.disconnect(S,0),x.disconnect(P,1),x.disconnect(I,1),T.disconnect(g),g.disconnect(A.inputs===void 0?A:A.inputs[0]),g.disconnect(C.inputs===void 0?C:C.inputs[0]),g.disconnect(N.inputs===void 0?N:N.inputs[0]),g.disconnect(E.inputs===void 0?E:E.inputs[0]),A.disconnect(b.gain),C.disconnect(S.gain),N.disconnect(P.gain),E.disconnect(I.gain),b.disconnect(_,0,0),P.disconnect(_,0,0),S.disconnect(_,0,1),I.disconnect(_,0,1)}}},f=(p,m,g,_,w)=>{if(m===1)return u(p,g,_,w);if(m===2)return d(p,g,_,w);throw i()};return(p,{channelCount:m,channelCountMode:g,pan:_,...w})=>{if(g==="max")throw i();const k=s(p,{...w,channelCount:1,channelCountMode:g,numberOfInputs:2}),M=t(p,{...w,channelCount:m,channelCountMode:g,gain:1}),v=t(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:_});let{connectGraph:y,disconnectGraph:x}=f(p,m,M,v,k);Object.defineProperty(v.gain,"defaultValue",{get:()=>0}),Object.defineProperty(v.gain,"maxValue",{get:()=>1}),Object.defineProperty(v.gain,"minValue",{get:()=>-1});const b={get bufferSize(){},get channelCount(){return M.channelCount},set channelCount(T){M.channelCount!==T&&(A&&x(),{connectGraph:y,disconnectGraph:x}=f(p,T,M,v,k),A&&y()),M.channelCount=T},get channelCountMode(){return M.channelCountMode},set channelCountMode(T){if(T==="clamped-max"||T==="max")throw i();M.channelCountMode=T},get channelInterpretation(){return M.channelInterpretation},set channelInterpretation(T){M.channelInterpretation=T},get context(){return M.context},get inputs(){return[M]},get numberOfInputs(){return M.numberOfInputs},get numberOfOutputs(){return M.numberOfOutputs},get pan(){return v.gain},addEventListener(...T){return M.addEventListener(T[0],T[1],T[2])},dispatchEvent(...T){return M.dispatchEvent(T[0])},removeEventListener(...T){return M.removeEventListener(T[0],T[1],T[2])}};let A=!1;const S=()=>{y(),A=!0},C=()=>{x(),A=!1};return r(un(b,k),S,C)}},gd=(s,e,t,n,i,r,o)=>(c,a)=>{const l=c.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&c.createGain().gain.automationRate===void 0)return t(c,a);ge(l,a);const h=a.curve===null||a.curve instanceof Float32Array?a.curve:new Float32Array(a.curve);if(h!==null&&h.length<2)throw e();re(l,{curve:h},"curve"),re(l,a,"oversample");let u=null,d=!1;return o(l,"curve",m=>()=>m.call(l),m=>g=>(m.call(l,g),d&&(n(g)&&u===null?u=s(c,l):!n(g)&&u!==null&&(u(),u=null)),g)),i(l,()=>{d=!0,n(l.curve)&&(u=s(c,l))},()=>{d=!1,u!==null&&(u(),u=null)})},vd=(s,e,t,n,i)=>(r,{curve:o,oversample:c,...a})=>{const l=r.createWaveShaper(),h=r.createWaveShaper();ge(l,a),ge(h,a);const u=t(r,{...a,gain:1}),d=t(r,{...a,gain:-1}),f=t(r,{...a,gain:1}),p=t(r,{...a,gain:-1});let m=null,g=!1,_=null;const w={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(v){u.channelCount=v,d.channelCount=v,l.channelCount=v,f.channelCount=v,h.channelCount=v,p.channelCount=v},get channelCountMode(){return l.channelCountMode},set channelCountMode(v){u.channelCountMode=v,d.channelCountMode=v,l.channelCountMode=v,f.channelCountMode=v,h.channelCountMode=v,p.channelCountMode=v},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(v){u.channelInterpretation=v,d.channelInterpretation=v,l.channelInterpretation=v,f.channelInterpretation=v,h.channelInterpretation=v,p.channelInterpretation=v},get context(){return l.context},get curve(){return _},set curve(v){if(v!==null&&v.length<2)throw e();if(v===null)l.curve=v,h.curve=v;else{const y=v.length,x=new Float32Array(y+2-y%2),b=new Float32Array(y+2-y%2);x[0]=v[0],b[0]=-v[y-1];const A=Math.ceil((y+1)/2),S=(y+1)/2-1;for(let C=1;C<A;C+=1){const T=C/A*S,P=Math.floor(T),N=Math.ceil(T);x[C]=P===N?v[P]:(1-(T-P))*v[P]+(1-(N-T))*v[N],b[C]=P===N?-v[y-1-P]:-((1-(T-P))*v[y-1-P])-(1-(N-T))*v[y-1-N]}x[A]=y%2===1?v[A-1]:(v[A-2]+v[A-1])/2,l.curve=x,h.curve=b}_=v,g&&(n(_)&&m===null?m=s(r,u):m!==null&&(m(),m=null))},get inputs(){return[u]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(v){l.oversample=v,h.oversample=v},addEventListener(...v){return u.addEventListener(v[0],v[1],v[2])},dispatchEvent(...v){return u.dispatchEvent(v[0])},removeEventListener(...v){return u.removeEventListener(v[0],v[1],v[2])}};o!==null&&(w.curve=o instanceof Float32Array?o:new Float32Array(o)),c!==w.oversample&&(w.oversample=c);const k=()=>{u.connect(l).connect(f),u.connect(d).connect(h).connect(p).connect(f),g=!0,n(_)&&(m=s(r,u))},M=()=>{u.disconnect(l),l.disconnect(f),u.disconnect(d),d.disconnect(h),h.disconnect(p),p.disconnect(f),g=!1,m!==null&&(m(),m=null)};return i(un(w,f),k,M)},Ae=()=>new DOMException("","NotSupportedError"),_d={numberOfChannels:1},bd=(s,e,t,n,i)=>class extends s{constructor(o,c,a){let l;if(typeof o=="number"&&c!==void 0&&a!==void 0)l={length:c,numberOfChannels:o,sampleRate:a};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:h,numberOfChannels:u,sampleRate:d}={..._d,...l},f=n(u,h,d);e(Pn,()=>Pn(f))||f.addEventListener("statechange",(()=>{let p=0;const m=g=>{this._state==="running"&&(p>0?(f.removeEventListener("statechange",m),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):p+=1)};return m})()),super(f,u),this._length=h,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Fo(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},yd={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},xd=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...yd,...l},d=t(h,u),f=r(h),p=f?n():null,m=a.sampleRate/2;super(a,!1,d,p),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,m,-m),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=p,this._oscillatorNodeRenderer!==null&&u.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=u.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(a){const l=typeof a=="function"?o(this,a):null;this._nativeOscillatorNode.onended=l;const h=this._nativeOscillatorNode.onended;this._onended=h!==null&&h===l?a:h}get type(){return this._nativeOscillatorNode.type}set type(a){this._nativeOscillatorNode.type=a,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(a){this._nativeOscillatorNode.setPeriodicWave(a),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=a)}start(a=0){if(this._nativeOscillatorNode.start(a),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=a),this.context.state!=="closed"){nn(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),st(this)&&In(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(a=0){this._nativeOscillatorNode.stop(a),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=a)}},wd=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,c=null,a=null;const l=async(h,u)=>{let d=t(h);const f=ke(d,u);if(!f){const p={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(u,p),c!==null&&d.start(c),a!==null&&d.stop(a)}return r.set(u,d),f?(await s(u,h.detune,d.detune),await s(u,h.frequency,d.frequency)):(await n(u,h.detune,d.detune),await n(u,h.frequency,d.frequency)),await i(h,u,d),d};return{set periodicWave(h){o=h},set start(h){c=h},set stop(h){a=h},render(h,u){const d=r.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}},kd={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},Td=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...kd,...l},d=t(h,u),f=r(h),p=f?n():null;super(a,!1,d,p),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,Me,Se),this._orientationY=e(this,f,d.orientationY,Me,Se),this._orientationZ=e(this,f,d.orientationZ,Me,Se),this._positionX=e(this,f,d.positionX,Me,Se),this._positionY=e(this,f,d.positionY,Me,Se),this._positionZ=e(this,f,d.positionZ,Me,Se),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(a){this._nativePannerNode.coneInnerAngle=a}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(a){this._nativePannerNode.coneOuterAngle=a}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(a){this._nativePannerNode.coneOuterGain=a}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(a){this._nativePannerNode.distanceModel=a}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(a){this._nativePannerNode.maxDistance=a}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(a){this._nativePannerNode.panningModel=a}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(a){this._nativePannerNode.refDistance=a}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(a){this._nativePannerNode.rolloffFactor=a}},Md=(s,e,t,n,i,r,o,c,a,l)=>()=>{const h=new WeakMap;let u=null;const d=async(f,p)=>{let m=null,g=r(f);const _={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},w={..._,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},k=ke(g,p);if("bufferSize"in g)m=n(p,{..._,gain:1});else if(!k){const M={...w,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(p,M)}if(h.set(p,m===null?g:m),m!==null){if(u===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const C=new o(6,f.context.length,p.sampleRate),T=e(C,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});T.connect(C.destination),u=(async()=>{const P=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(N,I)=>{const E=t(C,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:I===0?1:0});return await c(C,N,E.offset),E}));for(let N=0;N<6;N+=1)P[N].connect(T,0,N),P[N].start(0);return l(C)})()}const M=await u,v=n(p,{..._,gain:1});await a(f,p,v);const y=[];for(let C=0;C<M.numberOfChannels;C+=1)y.push(M.getChannelData(C));let x=[y[0][0],y[1][0],y[2][0]],b=[y[3][0],y[4][0],y[5][0]],A=n(p,{..._,gain:1}),S=i(p,{...w,orientationX:x[0],orientationY:x[1],orientationZ:x[2],positionX:b[0],positionY:b[1],positionZ:b[2]});v.connect(A).connect(S.inputs[0]),S.connect(m);for(let C=128;C<M.length;C+=128){const T=[y[0][C],y[1][C],y[2][C]],P=[y[3][C],y[4][C],y[5][C]];if(T.some((N,I)=>N!==x[I])||P.some((N,I)=>N!==b[I])){x=T,b=P;const N=C/p.sampleRate;A.gain.setValueAtTime(0,N),A=n(p,{..._,gain:0}),S=i(p,{...w,orientationX:x[0],orientationY:x[1],orientationZ:x[2],positionX:b[0],positionY:b[1],positionZ:b[2]}),A.gain.setValueAtTime(1,N),v.connect(A).connect(S.inputs[0]),S.connect(m)}}return m}return k?(await s(p,f.orientationX,g.orientationX),await s(p,f.orientationY,g.orientationY),await s(p,f.orientationZ,g.orientationZ),await s(p,f.positionX,g.positionX),await s(p,f.positionY,g.positionY),await s(p,f.positionZ,g.positionZ)):(await c(p,f.orientationX,g.orientationX),await c(p,f.orientationY,g.orientationY),await c(p,f.orientationZ,g.orientationZ),await c(p,f.positionX,g.positionX),await c(p,f.positionY,g.positionY),await c(p,f.positionZ,g.positionZ)),hn(g)?await a(f,p,g.inputs[0]):await a(f,p,g),g};return{render(f,p){const m=h.get(p);return m!==void 0?Promise.resolve(m):d(f,p)}}},Cd={disableNormalization:!1},Ad=(s,e,t,n)=>class Xo{constructor(r,o){const c=e(r),a=n({...Cd,...o}),l=s(c,a);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===Xo.prototype||t.has(r)}},Sd=(s,e)=>(t,n,i)=>(s(n).replay(i),e(n,t,i)),Pd=(s,e,t)=>async(n,i,r)=>{const o=s(n);await Promise.all(o.activeInputs.map((c,a)=>Array.from(c).map(async([l,h])=>{const d=await e(l).render(l,i),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&d.connect(r,h,a)})).reduce((c,a)=>[...c,...a],[]))},Nd=(s,e,t)=>async(n,i,r)=>{const o=e(n);await Promise.all(Array.from(o.activeInputs).map(async([c,a])=>{const h=await s(c).render(c,i);t(c)||h.connect(r,a)}))},Od=(s,e,t,n)=>i=>s(Pn,()=>Pn(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=c=>{o.disconnect(),r(c.renderedBuffer)},o.connect(i.destination),i.startRendering()}),Ed=s=>(e,t)=>{s.set(e,t)},$d=s=>(e,t)=>s.set(e,t),Dd=(s,e,t,n,i,r,o,c)=>(a,l)=>t(a).render(a,l).then(()=>Promise.all(Array.from(n(l)).map(h=>t(h).render(h,l)))).then(()=>i(l)).then(h=>(typeof h.copyFromChannel!="function"?(o(h),ki(h)):e(r,()=>r(h))||c(h),s.add(h),h)),Id={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},Rd=(s,e,t,n,i,r)=>class extends s{constructor(c,a){const l=i(c),h={...Id,...a},u=t(l,h),d=r(l),f=d?n():null;super(c,!1,u,f),this._pan=e(this,d,u.pan)}get pan(){return this._pan}},Vd=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(c,a)=>{let l=t(c);const h=ke(l,a);if(!h){const u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(a,u)}return r.set(a,l),h?await s(a,c.pan,l.pan):await n(a,c.pan,l.pan),hn(l)?await i(c,a,l.inputs[0]):await i(c,a,l),l};return{render(c,a){const l=r.get(a);return l!==void 0?Promise.resolve(l):o(c,a)}}},Fd=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},Ld=(s,e)=>async()=>{if(s===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await n.audioWorklet.addModule(i);const c=new s(n,"a",{numberOfOutputs:0}),a=n.createOscillator();c.port.onmessage=()=>r=!0,c.onprocessorerror=()=>o=!0,a.connect(c),a.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},jd=(s,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{n.disconnect(),i(t.currentTime!==0)},t.startRendering()})},qd=()=>new DOMException("","UnknownError"),Wd={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},Bd=(s,e,t,n,i,r,o)=>class extends s{constructor(a,l){const h=i(a),u={...Wd,...l},d=t(h,u),p=r(h)?n():null;super(a,!0,d,p),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(a){if(a===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(a.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=a}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(a){this._nativeWaveShaperNode.oversample=a}},zd=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let c=e(r);if(!ke(c,o)){const l={channelCount:c.channelCount,channelCountMode:c.channelCountMode,channelInterpretation:c.channelInterpretation,curve:c.curve,oversample:c.oversample};c=s(o,l)}return n.set(o,c),hn(c)?await t(r,o,c.inputs[0]):await t(r,o,c),c};return{render(r,o){const c=n.get(o);return c!==void 0?Promise.resolve(c):i(r,o)}}},Ud=()=>typeof window>"u"?null:window,Hd=(s,e)=>t=>{t.copyFromChannel=(n,i,r=0)=>{const o=s(r),c=s(i);if(c>=t.numberOfChannels)throw e();const a=t.length,l=t.getChannelData(c),h=n.length;for(let u=o<0?-o:0;u+o<a&&u<h;u+=1)n[u]=l[u+o]},t.copyToChannel=(n,i,r=0)=>{const o=s(r),c=s(i);if(c>=t.numberOfChannels)throw e();const a=t.length,l=t.getChannelData(c),h=n.length;for(let u=o<0?-o:0;u+o<a&&u<h;u+=1)l[u+o]=n[u]}},Gd=s=>e=>{e.copyFromChannel=(t=>(n,i,r=0)=>{const o=s(r),c=s(i);if(o<e.length)return t.call(e,n,c,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,i,r=0)=>{const o=s(r),c=s(i);if(o<e.length)return t.call(e,n,c,o)})(e.copyToChannel)},Xd=s=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),s(e,"buffer",i=>()=>{const r=i.call(e);return r===n?null:r},i=>r=>i.call(e,r===null?n:r))},Yd=(s,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=t.createBufferSource();e(n,()=>{const c=n.numberOfInputs;for(let a=0;a<c;a+=1)i.connect(n,0,a)},()=>i.disconnect(n))},Yo=(s,e,t)=>s.copyFromChannel===void 0?s.getChannelData(t)[0]:(s.copyFromChannel(e,t),e[0]),Zo=s=>{if(s===null)return!1;const e=s.length;return e%2!==0?s[Math.floor(e/2)]!==0:s[e/2-1]+s[e/2]!==0},jn=(s,e,t,n)=>{let i=s;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(s,e,{get:t(r),set:n(o)})},Zd=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),Kd=s=>({...s,channelCount:s.numberOfOutputs}),Qd=s=>{const{imag:e,real:t}=s;return e===void 0?t===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(t,()=>0),real:t}:t===void 0?{...s,imag:e,real:Array.from(e,()=>0)}:{...s,imag:e,real:t}},Ko=(s,e,t)=>{try{s.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;Ko(s,e,t+1e-7)}},Jd=s=>{const e=s.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},ep=s=>{const e=s.createBufferSource(),t=s.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},tp=s=>{const e=s.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},Si=s=>{const e=s.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},Qo=s=>{const e=s.createBuffer(1,1,44100),t=s.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},Pi=s=>{const e=s.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},np=s=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(s)}finally{e.close(),t.close()}},sp=s=>{s.start=(e=>(t=0,n=0,i)=>{const r=s.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/s.context.sampleRate?e.call(s,t,0,0):e.call(s,t,o,i)})(s.start)},Jo=(s,e)=>{const t=e.createGain();s.connect(t);const n=(i=>()=>{i.call(s,t),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),un(s,t),s.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(s,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(s,o),r=!0}})(s.stop)},dn=(s,e)=>t=>{const n={value:s};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(s,t):e.handleEvent.call(s,t)},ip=Tl(Ft),rp=Nl(Ft),op=Wh(Ts),ea=new WeakMap,ap=ou(ea),Ge=_h(new Map,new WeakMap),Ze=Ud(),ta=Ru(Ge,Je),Ni=ru(Ce),xe=Pd(Ce,Ni,Et),cp=Il(ta,se,xe),te=lu(ks),ot=ld(Ze),J=Cu(ot),na=new WeakMap,sa=Qh(dn),qn=ju(Ze),Oi=wu(qn),Ei=ku(Ze),ia=Tu(Ze),Nn=Wu(Ze),he=oh(Ml(Oo),Pl(ip,rp,hs,op,us,Ce,ap,Dn,se,Ft,st,Et,es),Ge,vu(si,us,Ce,se,Sn,st),Je,Ms,Ae,Fh(hs,si,Ce,se,Sn,te,st,J),Uh(na,Ce,He),sa,te,Oi,Ei,ia,J,Nn),lp=Dl(he,cp,Je,ta,te,J),$i=new WeakSet,qr=Vu(Ze),ra=Oh(new Uint32Array(1)),Di=Hd(ra,Je),Ii=Gd(ra),oa=Vl($i,Ge,Ae,qr,ot,Fd(qr),Di,Ii),Cs=Ol(Oe),aa=Nd(Ni,Rn,Et),et=Mh(aa),pn=Lu(Cs,Ge,Jd,ep,tp,Si,Qo,Pi,sp,Xd(jn),Jo),tt=Sd(au(Rn),aa),hp=jl(et,pn,se,tt,xe),Xe=ah(Cl(Eo),na,wi,ch,_l,bl,yl,xl,wl,ei,So,qn,Ko),up=Ll(he,hp,Xe,be,pn,te,J,dn),dp=Yl(he,Zl,Je,be,qu(Oe,jn),te,J,xe),pp=vh(et,Ho,se,tt,xe),Lt=$d(ea),fp=gh(he,Xe,pp,Ms,Ho,te,J,Lt),vt=Du(Ft,Ei),mp=Yd(be,vt),_t=Yu(qn,mp),gp=xh(_t,se,xe),vp=yh(he,gp,_t,te,J),_p=Th(Fn,se,xe),bp=kh(he,_p,Fn,te,J,Kd),yp=Qu(Cs,pn,Oe,vt),fn=Ku(Cs,Ge,yp,Si,Pi),xp=Nh(et,fn,se,tt,xe),wp=Ph(he,Xe,xp,fn,te,J,dn),ca=Ju(Ae,jn),kp=Dh(ca,se,xe),Tp=$h(he,kp,ca,te,J,Lt),Mp=qh(et,Go,se,tt,xe),Cp=jh(he,Xe,Mp,Go,te,J,Lt),la=ed(Ae),Ap=Yh(et,la,se,tt,xe),Sp=Xh(he,Xe,Ap,la,Ae,te,J,Lt),Pp=su(et,Oe,se,tt,xe),Np=nu(he,Xe,Pp,Oe,te,J),Op=id(Ms,be,Ln,Ae),As=Od(Ge,Oe,Ln,jd(Oe,ot)),Ep=gu(pn,se,ot,xe,As),$p=td(Op),Dp=fu(he,$p,Ep,te,J,Lt),Ip=Kl(Xe,_t,fn,Ln,Ae,Yo,J,jn),ha=new WeakMap,Rp=$u(dp,Ip,sa,J,ha,dn),ua=hd(Cs,Ge,Si,Qo,Pi,Jo),Vp=wd(et,ua,se,tt,xe),Fp=xd(he,Xe,ua,Vp,te,J,dn),da=Ah(pn),Lp=vd(da,be,Oe,Zo,vt),Ss=gd(da,be,Lp,Zo,vt,qn,jn),jp=dd(hs,be,_t,Oe,Ln,Ss,Ae,us,Yo,vt),pa=ud(jp),qp=Md(et,_t,fn,Oe,pa,se,ot,tt,xe,As),Wp=Td(he,Xe,pa,qp,te,J,Lt),Bp=pd(Je),zp=Ad(Bp,te,new WeakSet,Qd),Up=md(_t,Fn,Oe,Ss,Ae,vt),fa=fd(Up,Ae),Hp=Vd(et,fa,se,tt,xe),Gp=Rd(he,Xe,fa,Hp,te,J),Xp=zd(Ss,se,xe),Yp=Bd(he,be,Ss,Xp,te,J,Lt),ma=Au(Ze),Ri=Jh(Ze),ga=new WeakMap,Zp=hu(ga,ot),Kp=ma?Sl(Ge,Ae,Kh(Ze),Ri,eu(kl),te,Zp,J,Nn,new WeakMap,new WeakMap,Ld(Nn,ot),Ze):void 0,Qp=Mu(Oi,J),Jp=Vh($i,Ge,Rh,Zh,new WeakSet,te,Qp,cs,Pn,Di,Ii),va=fh(Kp,lp,oa,up,fp,vp,bp,wp,Tp,Jp,Cp,Sp,Np,Dp,Rp,Fp,Wp,zp,Gp,Yp),ef=Su(he,rd,te,J),tf=Nu(he,od,te,J),nf=Ou(he,ad,te,J),sf=cd(be,J),rf=Eu(he,sf,te),of=Xl(va,be,Ae,qd,ef,tf,nf,rf,qn),Vi=uu(ha),af=El(Vi),_a=Ch(Je),cf=Bh(Vi),ba=Hh(Je),ya=new WeakMap,lf=iu(ya,He),hf=Xu(_a,Je,be,_t,Fn,fn,Oe,Ln,Ae,ba,Ri,lf,vt),uf=zu(be,hf,Oe,Ae,vt),df=ph(et,_a,pn,_t,Fn,fn,Oe,cf,ba,Ri,se,Nn,ot,tt,xe,As),pf=cu(ga),ff=Ed(ya),Wr=ma?hh(af,he,Xe,df,uf,Ce,pf,te,J,Nn,Zd,ff,np,dn):void 0,mf=Ih(Ae,ot),gf=Dd($i,Ge,Ni,Vi,As,cs,Di,Ii),vf=bd(va,Ge,be,mf,gf),_f=_u(ks,Oi),bf=bu(xi,Ei),yf=yu(wi,ia),xf=xu(ks,J);function je(s){return s===void 0}function H(s){return s!==void 0}function wf(s){return typeof s=="function"}function $t(s){return typeof s=="number"}function At(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function kf(s){return typeof s=="boolean"}function Ue(s){return Array.isArray(s)}function rt(s){return typeof s=="string"}function Zn(s){return rt(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function W(s,e){if(!s)throw new Error(e)}function mt(s,e,t=1/0){if(!(e<=s&&s<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${s}`)}function xa(s){!s.isOffline&&s.state!=="running"&&Fi('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let wa=!1,Br=!1;function zr(s){wa=s}function Tf(s){je(s)&&wa&&!Br&&(Br=!0,Fi("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let ka=console;function Mf(...s){ka.log(...s)}function Fi(...s){ka.warn(...s)}function Cf(s){return new of(s)}function Af(s,e,t){return new vf(s,e,t)}const De=typeof self=="object"?self:null,Sf=De&&(De.hasOwnProperty("AudioContext")||De.hasOwnProperty("webkitAudioContext"));function Pf(s,e,t){return W(H(Wr),"AudioWorkletNode only works in a secure context (https or localhost)"),new(s instanceof De?.BaseAudioContext?De?.AudioWorkletNode:Wr)(s,e,t)}function Ye(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var c=s.length-1;c>=0;c--)(o=s[c])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function pe(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function c(h){try{l(n.next(h))}catch(u){o(u)}}function a(h){try{l(n.throw(h))}catch(u){o(u)}}function l(h){h.done?r(h.value):i(h.value).then(c,a)}l((n=n.apply(s,e||[])).next())})}class Nf{constructor(e,t,n,i){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(i||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
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
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type==="worker"&&((t=this._worker)===null||t===void 0||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function Dt(s){return yf(s)}function pt(s){return bf(s)}function ts(s){return xf(s)}function Ut(s){return _f(s)}function Of(s){return s instanceof oa}function Ef(s,e){return s==="value"||Dt(e)||pt(e)||Of(e)}function Zt(s,...e){if(!e.length)return s;const t=e.shift();if(At(s)&&At(t))for(const n in t)Ef(n,t[n])?s[n]=t[n]:At(t[n])?(s[n]||Object.assign(s,{[n]:{}}),Zt(s[n],t[n])):Object.assign(s,{[n]:t[n]});return Zt(s,...e)}function $f(s,e){return s.length===e.length&&s.every((t,n)=>e[n]===t)}function q(s,e,t=[],n){const i={},r=Array.from(e);if(At(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(c=>Reflect.has(s,c))||(Zt(i,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&At(r[0]))Zt(i,r[0]);else for(let o=0;o<t.length;o++)H(r[o])&&(i[t[o]]=r[o]);return Zt(s,i)}function Df(s){return s.constructor.getDefaults()}function Kt(s,e){return je(s)?e:s}function Ur(s,e){return e.forEach(t=>{Reflect.has(s,t)&&delete s[t]}),s}class at{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||De&&this.toString()===De.TONE_DEBUG_CLASS)&&Mf(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}at.version=Ao;const Li=1e-6;function sn(s,e){return s>e+Li}function ci(s,e){return sn(s,e)||We(s,e)}function ms(s,e){return s+Li<e}function We(s,e){return Math.abs(s-e)<Li}function If(s,e,t){return Math.max(Math.min(s,t),e)}class qe extends at{constructor(){super(),this.name="Timeline",this._timeline=[];const e=q(qe.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(W(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];W(ci(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(We(this._timeline[t].time,e)){for(let n=t;n>=0&&We(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&ci(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][t]<=e)return i-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const c=this._timeline[o],a=this._timeline[o+1];if(We(c[t],e)){for(let l=o;l<this._timeline.length;l++){const h=this._timeline[l];if(We(h[t],e))o=l;else break}return o}else{if(ms(c[t],e)&&sn(a[t],e))return o;sn(c[t],e)?r=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let i=this._search(e),r=this._search(t);return i!==-1&&r!==-1?(this._timeline[i].time!==e&&(i+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&We(this._timeline[n].time,e)){let i=n;for(let r=n;r>=0&&We(this._timeline[r].time,e);r--)i=r;this._iterate(r=>{t(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Ta=[];function Ps(s){Ta.push(s)}function Rf(s){Ta.forEach(e=>e(s))}const Ma=[];function Ns(s){Ma.push(s)}function Vf(s){Ma.forEach(e=>e(s))}class Wn extends at{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(i=>{je(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(t)}),this}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(i=>{if(je(this._events)&&(this._events={}),this._events.hasOwnProperty(i))if(je(t))this._events[i]=[];else{const r=this._events[i];for(let o=r.length-1;o>=0;o--)r[o]===t&&r.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Wn.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class Ca extends Wn{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Bn extends Ca{constructor(){var e,t;super(),this.name="Context",this._constants=new Map,this._timeouts=new qe,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=q(Bn.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((e=arguments[0])===null||e===void 0?void 0:e.latencyHint)||""):(this._context=Cf({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new Nf(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((t=arguments[0])===null||t===void 0)&&t.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(Rf(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return W(Ut(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return W(Ut(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return W(Ut(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){W(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){W(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){W(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){W(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return Pf(this.rawContext,e,t)}addAudioWorkletModule(e){return pe(this,void 0,void 0,function*(){W(H(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(e)),yield this._workletPromise})}workletsAreReady(){return pe(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Ut(this._context)?this._context.resume():Promise.resolve()}close(){return pe(this,void 0,void 0,function*(){Ut(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&Vf(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=t,i.loop=!0,i.start(0),this._constants.set(e,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){const e=this.now();this._timeouts.forEachBefore(e,t=>{t.callback(),this._timeouts.remove(t)})}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),i()},id:n,time:r+t})};return i(),n}}class Ff extends Ca{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return pe(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function ae(s,e){Ue(e)?e.forEach(t=>ae(s,t)):Object.defineProperty(s,e,{enumerable:!0,writable:!1})}function Aa(s,e){Ue(e)?e.forEach(t=>Aa(s,t)):Object.defineProperty(s,e,{writable:!0})}const Q=()=>{};class ne extends at{constructor(){super(),this.name="ToneAudioBuffer",this.onload=Q;const e=q(ne.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,rt(e.url)?this.load(e.url).catch(e.onerror):e.url&&this.set(e.url)}static getDefaults(){return{onerror:Q,onload:Q,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Fe().sampleRate}set(e){return e instanceof ne?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return pe(this,void 0,void 0,function*(){const t=ne.load(e).then(n=>{this.set(n),this.onload(this)});ne.downloads.push(t);try{yield t}finally{const n=ne.downloads.indexOf(t);ne.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=Ue(e)&&e[0].length>0,n=t?e.length:1,i=t?e[0].length:e.length,r=Fe(),o=r.createBuffer(n,i,r.sampleRate),c=!t&&n===1?[e]:e;for(let a=0;a<n;a++)o.copyToChannel(c[a],a);return this._buffer=o,this}toMono(e){if($t(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let o=0;o<r.length;o++)t[o]+=r[o]}t=t.map(i=>i/n),this.fromArray(t)}return this}toArray(e){if($t(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){W(this.loaded,"Buffer is not loaded");const n=Math.floor(e*this.sampleRate),i=Math.floor(t*this.sampleRate);W(n<i,"The start time must be less than the end time");const r=i-n,o=Fe().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let c=0;c<this.numberOfChannels;c++)o.copyToChannel(this.getChannelData(c).subarray(n,i),c);return new ne(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new ne().fromArray(e)}static fromUrl(e){return pe(this,void 0,void 0,function*(){return yield new ne().load(e)})}static load(e){return pe(this,void 0,void 0,function*(){const t=ne.baseUrl===""||ne.baseUrl.endsWith("/")?ne.baseUrl:ne.baseUrl+"/",n=yield fetch(t+e);if(!n.ok)throw new Error(`could not load url: ${e}`);const i=yield n.arrayBuffer();return yield Fe().decodeAudioData(i)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return pe(this,void 0,void 0,function*(){for(yield Promise.resolve();ne.downloads.length;)yield ne.downloads[0]})}}ne.baseUrl="";ne.downloads=[];class ji extends Bn{constructor(){super({clockSource:"offline",context:ts(arguments[0])?arguments[0]:Af(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:ts(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=ts(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return pe(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(){return pe(this,arguments,void 0,function*(e=!0){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new ne(t)})}close(){return Promise.resolve()}}const Sa=new Ff;let Ct=Sa;function Fe(){return Ct===Sa&&Sf&&Lf(new Bn),Ct}function Lf(s,e=!1){e&&Ct.dispose(),Ut(s)?Ct=new Bn(s):ts(s)?Ct=new ji(s):Ct=s}function jf(){return Ct.resume()}if(De&&!De.TONE_SILENCE_LOGGING){const e=` * Tone.js v${Ao} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function qf(s){return Math.pow(10,s/20)}function Wf(s){return 20*(Math.log(s)/Math.LN10)}function Pa(s){return Math.pow(2,s/12)}let Os=440;function Bf(){return Os}function zf(s){Os=s}function li(s){return Math.round(Na(s))}function Na(s){return 69+12*Math.log2(s/Os)}function Uf(s){return Os*Math.pow(2,(s-69)/12)}class qi extends at{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),i=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let i=0;return e&&e!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof qi&&this.fromType(this._val),je(this._val))return this._noArg();if(rt(this._val)&&je(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(At(this._val)){let e=0;for(const t in this._val)if(H(this._val[t])){const n=this._val[t],i=new this.constructor(this.context,t).valueOf()*n;e+=i}return e}if(H(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return rt(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class Be extends qi{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new Be(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),i=this.valueOf(),c=Math.round(i/n)*n-i;return i+c*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],i=new Be(this.context,t[0]).toSeconds();return t.forEach(r=>{const o=new Be(this.context,r).toSeconds();Math.abs(o-e)<Math.abs(i-e)&&(n=r,i=o)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let i=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,t,i].join(":")}toTicks(){const e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return li(this.toFrequency())}_now(){return this.context.now()}}class Le extends Be{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return Bf()}static set A4(e){zf(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:Le.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(e,t){const i=Hf[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?i:Le.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let i=1;return e&&e!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(e){return new Le(this.context,this.valueOf()*Pa(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return li(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/Le.A4);let n=Math.round(12*t)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),Gf[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return Uf(e)}static ftom(e){return li(e)}}const Hf={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},Gf=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class wn extends Be{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Ne extends at{constructor(){super();const e=q(Ne.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:Fe()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return Tf(e),new Be(this.context,e).toSeconds()}toFrequency(e){return new Le(this.context,e).toFrequency()}toTicks(e){return new wn(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{je(e[n])&&delete t[n]}),t}get(){const e=Df(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];H(n)&&H(n.value)&&H(n.setValueAtTime)?e[t]=n.value:n instanceof Ne?e[t]=n._getPartialProperties(e[t]):Ue(n)||$t(n)||rt(n)||kf(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&H(this[t])&&(this[t]&&H(this[t].value)&&H(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof Ne?this[t].set(e[t]):this[t]=e[t])}),this}}class Wi extends qe{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return mt(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===e)return r}}}class K extends Ne{constructor(){const e=q(K.getDefaults(),arguments,["param","units","convert"]);for(super(e),this.name="Param",this.overridden=!1,this._minOutput=1e-7,W(H(e.param)&&(Dt(e.param)||e.param instanceof K),"param must be an AudioParam");!Dt(e.param);)e.param=e.param._param;this._swappable=H(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new qe(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,H(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Ne.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return H(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return H(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return H(this.maxValue)&&H(this.minValue)&&mt(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?qf(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?Wf(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),i=this._fromType(e);return W(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),i=this._events.get(t);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(i.time);let c;o===null?c=this._initialValue:c=o.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,c,i.value,i.constant,t))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=i.value;if(i.type==="setTargetAtTime"){const c=this._events.getBefore(i.time);c===null?o=this._initialValue:o=c.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,o,n.time,n.value,t):r=this._exponentialInterpolate(i.time,o,n.time,n.value,t)}else r=i.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),i=this.toSeconds(t);return W(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=We(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(t);return W(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,i),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const i=this._fromType(e);W(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(i),W(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(e,t,n,i=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*i;this.setValueAtTime(this._toType(r),t);const o=n/(e.length-1);for(let c=1;c<e.length;c++){const a=this._fromType(e[c])*i;this.linearRampToValueAtTime(this._toType(a),t+c*o)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return W(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));W(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const i=this._events.get(t),r=this._events.getAfter(t);return i&&We(i.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:t+2,o=(r-t)/10;for(let c=t;c<r;c+=o)e.linearRampToValueAtTime(this.getValueAtTime(c),c)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?e.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?e.setTargetAtTime(i.value,i.time,i.constant):e[i.type](i.value,i.time)}),this}setParam(e){W(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,i,r){return n+(t-n)*Math.exp(-(r-e)/i)}_linearInterpolate(e,t,n,i,r){return t+(i-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,i,r){return t*Math.pow(i/t,(r-e)/(n-e))}}class B extends Ne{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return H(this.input)?Dt(this.input)||this.input instanceof K?1:this.input.numberOfInputs:0}get numberOfOutputs(){return H(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return H(e)&&(e instanceof B||pt(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();W(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return mn(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Fi("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return Xf(this,e,t,n),this}chain(...e){return hi(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),H(this.input)&&(this.input instanceof B?this.input.dispose():pt(this.input)&&this.input.disconnect()),H(this.output)&&(this.output instanceof B?this.output.dispose():pt(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function hi(...s){const e=s.shift();s.reduce((t,n)=>(t instanceof B?t.connect(n):pt(t)&&mn(t,n),n),e)}function mn(s,e,t=0,n=0){for(W(H(s),"Cannot connect from undefined node"),W(H(e),"Cannot connect to undefined node"),(e instanceof B||pt(e))&&W(e.numberOfInputs>0,"Cannot connect to node with no inputs"),W(s.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof B||e instanceof K;)H(e.input)&&(e=e.input);for(;s instanceof B;)H(s.output)&&(s=s.output);Dt(e)?s.connect(e,t):s.connect(e,t,n)}function Xf(s,e,t=0,n=0){if(H(e))for(;e instanceof B;)e=e.input;for(;!pt(s);)H(s.output)&&(s=s.output);Dt(e)?s.disconnect(e,t):pt(e)?s.disconnect(e,t,n):s.disconnect()}class we extends B{constructor(){const e=q(we.getDefaults(),arguments,["gain","units"]);super(e),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new K({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),ae(this,"gain")}static getDefaults(){return Object.assign(B.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class rn extends B{constructor(e){super(e),this.onended=Q,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new we({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(B.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:Q})}_startGain(e,t=1){W(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){W(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==Q&&(this.onended(this),this.onended=Q,!this.context.isOffline)){const e=()=>this.dispose();typeof requestIdleCallback<"u"?requestIdleCallback(e):setTimeout(e,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),W(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=Q,this}}class Bi extends rn{constructor(){const e=q(Bi.getDefaults(),arguments,["offset"]);super(e),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),mn(this._source,this._gainNode),this.offset=new K({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(rn.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class ye extends B{constructor(){const e=q(ye.getDefaults(),arguments,["value","units"]);super(e),this.name="Signal",this.override=!0,this.output=this._constantSource=new Bi({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(B.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return zi(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,i){return this._param.setValueCurveAtTime(e,t,n,i),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function zi(s,e,t,n){(e instanceof K||Dt(e)||e instanceof ye&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof ye&&(e.overridden=!0)),mn(s,e,t,n)}class Ui extends K{constructor(){const e=q(Ui.getDefaults(),arguments,["value"]);super(e),this.name="TickParam",this._events=new qe(1/0),this._multiplier=1,this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(K.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const i=this._fromType(e),r=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let c=0;c<=o;c++){const a=n*c+t,l=this._exponentialApproach(r.time,r.value,i,n,a);this.linearRampToValueAtTime(this._toType(l),a)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),i=this._events.get(t),r=Math.round(Math.max((t-i.time)*10,1)),o=(t-i.time)/r;for(let c=0;c<=r;c++){const a=o*c+i.time,l=this._exponentialInterpolate(i.time,i.value,t,n,a);this.linearRampToValueAtTime(this._toType(l),a)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(je(e.ticks)){const o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let i=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+i)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(t);return this.getTimeOfTick(i+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const i=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-t.time),c=Math.sqrt(Math.pow(i,2)-2*o*(t.ticks-e)),a=(-i+c)/o,l=(-i-c)/o;return(a>0?a:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),i=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class Hi extends ye{constructor(){const e=q(Hi.getDefaults(),arguments,["value"]);super(e),this.name="TickSignal",this.input=this._param=new Ui({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(ye.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class Gi extends Ne{constructor(){const e=q(Gi.getDefaults(),arguments,["frequency"]);super(e),this.name="TickSource",this._state=new Wi,this._tickOffset=new qe,this._ticksAtTime=new qe,this._secondsAtTime=new qe,this.frequency=new Hi({context:this.context,units:e.units,value:e.frequency}),ae(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Ne.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),H(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),i=this._ticksAtTime.get(t),r={state:"paused",time:t};this._state.add(r);let o=i||n,c=i?i.ticks:0,a=null;return this._state.forEachBetween(o.time,t+this.sampleTime,l=>{let h=o.time;const u=this._tickOffset.get(l.time);u&&u.time>=o.time&&(c=u.ticks,h=u.time),o.state==="started"&&l.state!=="started"&&(c+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(h),l.time!==r.time&&(a={state:l.state,time:l.time,ticks:c})),o=l}),this._state.remove(r),a&&this._ticksAtTime.add(a),c}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);const i=this._secondsAtTime.get(e);let r=i||t,o=i?i.seconds:0,c=null;return this._state.forEachBetween(r.time,e+this.sampleTime,a=>{let l=r.time;const h=this._tickOffset.get(a.time);h&&h.time>=r.time&&(o=h.seconds,l=h.time),r.state==="started"&&a.state!=="started"&&(o+=a.time-l,a.time!==n.time&&(c={state:a.state,time:a.time,seconds:o})),r=a}),this._state.remove(n),c&&this._secondsAtTime.add(c),o}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),i=this._state.get(t),r=Math.max(n.time,i.time),o=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let i=this._state.get(e);this._state.forEachBetween(e,t,o=>{i&&i.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(i.time,e),o.time-this.sampleTime,n),i=o});let r=null;if(i&&i.state==="started"){const o=Math.max(i.time,e),c=this.frequency.getTicksAtTime(o),a=this.frequency.getTicksAtTime(i.time),l=c-a;let h=Math.ceil(l)-l;h=We(h,1)?0:h;let u=this.frequency.getTimeOfTick(c+h);for(;u<t;){try{n(u,Math.round(this.getTicksAtTime(u)))}catch(d){r=d;break}u+=this.frequency.getDurationOfTicks(1,u)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class Es extends Ne{constructor(){const e=q(Es.getDefaults(),arguments,["callback","frequency"]);super(e),this.name="Clock",this.callback=Q,this._lastUpdate=0,this._state=new Wi("stopped"),this._boundLoop=this._loop.bind(this),this.callback=e.callback,this._tickSource=new Gi({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,ae(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Ne.getDefaults(),{callback:Q,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){xa(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,i)=>{this.callback(n,i)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Wn.mixin(Es);class gn extends B{constructor(){const e=q(gn.getDefaults(),arguments,["volume"]);super(e),this.name="Volume",this.input=this.output=new we({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,ae(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Xi extends B{constructor(){const e=q(Xi.getDefaults(),arguments);super(e),this.name="Destination",this.input=new gn({context:this.context}),this.output=new we({context:this.context}),this.volume=this.input.volume,hi(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),hi(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}Ps(s=>{s.destination=new Xi({context:s})});Ns(s=>{s.destination.dispose()});class Yf extends B{constructor(){super(...arguments),this.name="Listener",this.positionX=new K({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new K({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new K({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new K({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new K({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new K({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new K({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new K({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new K({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(B.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Ps(s=>{s.listener=new Yf({context:s})});Ns(s=>{s.listener.dispose()});class Yi extends at{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=q(Yi.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:Q,onload:Q,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return W(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=Q,i=Q){return rt(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(e.toString(),new ne(this.baseUrl+t,n,i))):this._buffers.set(e.toString(),new ne(t,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class Gt extends wn{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class Zf extends Ne{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new qe,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;this._events.forEachBefore(e+this.anticipation,t=>{e-t.time<=this.expiration&&t.callback(),this._events.remove(t)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}Ps(s=>{s.draw=new Zf({context:s})});Ns(s=>{s.draw.dispose()});class Kf extends at{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){W(H(e.time),"Events must have a time property"),W(H(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new Qf(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,i=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,i=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,i=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),i=e.right;i&&(e.right=i.left,i.left=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),i=e.left;i&&(e.left=i.right,i.right=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let i=1;i<t.length;i++)t[i].low>n.low&&(n=t[i]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class Qf{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class Jf extends at{constructor(e){super(),this.name="TimelineValue",this._timeline=new qe({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class on extends B{constructor(){super(q(on.getDefaults(),arguments,["context"]))}connect(e,t=0,n=0){return zi(this,e,t,n),this}}class zn extends on{constructor(){const e=q(zn.getDefaults(),arguments,["mapping","length"]);super(e),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,Ue(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):wf(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(ye.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let i=0,r=t;i<r;i++){const o=i/(r-1)*2-1;n[i]=e(o,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));W(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class Zi extends on{constructor(){const e=q(Zi.getDefaults(),arguments,["value"]);super(e),this.name="Pow",this._exponentScaler=this.input=this.output=new zn({context:this.context,mapping:this._expFunc(e.value),length:8192}),this._exponent=e.value}static getDefaults(){return Object.assign(on.getDefaults(),{value:1})}_expFunc(e){return t=>Math.pow(Math.abs(t),e)}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class gt{constructor(e,t){this.id=gt._eventId++,this._remainderTime=0;const n=Object.assign(gt.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:Q,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){const t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}gt._eventId=0;class Ki extends gt{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Ki.getDefaults(),t);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},gt.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return ms(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new Gt(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){ms(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Gt(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const t=this.transport.getTicksAtTime(e);sn(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class $s extends Ne{constructor(){const e=q($s.getDefaults(),arguments);super(e),this.name="Transport",this._loop=new Jf(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new qe,this._repeatedEvents=new Kf,this._syncedSignals=[],this._swingAmount=0,this._ppq=e.ppq,this._clock=new Es({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),ae(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(Ne.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;e+=new Gt(this.context,this._swingTicks*2/3).toSeconds()*i}zr(!0),this._timeline.forEachAtTime(t,n=>n.invoke(e)),zr(!1)}schedule(e,t){const n=new gt(this,{callback:e,time:new wn(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,i=1/0){const r=new Ki(this,{callback:e,duration:new Be(this.context,i).toTicks(),interval:new Be(this.context,t).toTicks(),time:new wn(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new gt(this,{callback:e,once:!0,time:new wn(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new Gt(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return H(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){Ue(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new Be(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new Be(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new Gt(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new Gt(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+i;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),i=e-n%e;return this._clock.nextTickTime(i,t)}}syncSignal(e,t){const n=this.now();let i=this.bpm,r=1/(60/i.getValueAtTime(n)/this.PPQ),o=[];if(e.units==="time"){const a=.015625/r,l=new we(a),h=new Zi(-1),u=new we(a);i.chain(l,h,u),i=u,r=1/r,o=[l,h,u]}t||(e.getValueAtTime(n)!==0?t=e.getValueAtTime(n)/r:t=0);const c=new we(t);return i.connect(c),c.connect(e._param),o.push(c),this._syncedSignals.push({initial:e.value,nodes:o,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(i=>i.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Aa(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Wn.mixin($s);Ps(s=>{s.transport=new $s({context:s})});Ns(s=>{s.transport.dispose()});class Ie extends B{constructor(e){super(e),this.input=void 0,this._state=new Wi("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=Q,this._syncedStop=Q,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new gn({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,ae(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,onstop:Q,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let i=je(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")W(sn(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,t,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(Kt(t,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(c=>{this._start(c,t,n)},i);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else xa(this.context),this._start(i,t,n);return this}stop(e){let t=je(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||H(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(sn(t,0)){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const i=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(e,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=Q,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class Ds extends rn{constructor(){const e=q(Ds.getDefaults(),arguments,["url","onload"]);super(e),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,mn(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new K({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new ne(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(rn.getDefaults(),{url:new ne,loop:!1,loopEnd:0,loopStart:0,onload:Q,onerror:Q,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,i=1){W(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,i),this.loop?t=Kt(t,this.loopStart):t=Kt(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){const c=this.toSeconds(this.loopEnd)||this.buffer.duration,a=this.toSeconds(this.loopStart),l=c-a;ci(o,c)&&(o=(o-a)%l+a),We(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,ms(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),H(n)){let c=this.toSeconds(n);c=Math.max(c,0),this.stop(r+c)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}function jt(s,e){return pe(this,void 0,void 0,function*(){const t=e/s.context.sampleRate,n=new ji(1,t,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Qi extends rn{constructor(){const e=q(Qi.getDefaults(),arguments,["frequency","type"]);super(e),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],mn(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new K({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new K({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),ae(this,["frequency","detune"])}static getDefaults(){return Object.assign(rn.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class de extends Ie{constructor(){const e=q(de.getDefaults(),arguments,["frequency","type"]);super(e),this.name="Oscillator",this._oscillator=null,this.frequency=new ye({context:this.context,units:"frequency",value:e.frequency}),ae(this,"frequency"),this.detune=new ye({context:this.context,units:"cents",value:e.detune}),ae(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Ie.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new Qi({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return de._periodicWaveCache.find(t=>t.phase===this._phase&&$f(t.partials,this._partials));{const e=de._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if(H(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(i,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),de._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),de._periodicWaveCache.length>100&&de._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){mt(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const i=new Float32Array(e);this._partials.forEach((r,o)=>i[o]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(e,t){let i=2048;const r=new Float32Array(i),o=new Float32Array(i);let c=1;if(e==="custom"){if(c=this._partials.length+1,this._partialCount=this._partials.length,i=c,this._partials.length===0)return[r,o]}else{const a=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);a?(c=parseInt(a[2],10)+1,this._partialCount=parseInt(a[2],10),e=a[1],c=Math.max(c,2),i=c):this._partialCount=0,this._partials=[]}for(let a=1;a<i;++a){const l=2/(a*Math.PI);let h;switch(e){case"sine":h=a<=c?1:0,this._partials[a-1]=h;break;case"square":h=a&1?2*l:0,this._partials[a-1]=h;break;case"sawtooth":h=l*(a&1?1:-1),this._partials[a-1]=h;break;case"triangle":a&1?h=2*(l*l)*(a-1>>1&1?-1:1):h=0,this._partials[a-1]=h;break;case"custom":h=this._partials[a-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}h!==0?(r[a]=-h*Math.sin(t*a),o[a]=h*Math.cos(t*a)):(r[a]=0,o[a]=0)}return[r,o]}_inverseFFT(e,t,n){let i=0;const r=e.length;for(let o=0;o<r;o++)i+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return i}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(e,t,o/r*i),n);return If(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return pe(this,arguments,void 0,function*(e=1024){return jt(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}de._periodicWaveCache=[];class em extends on{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new zn({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class an extends ye{constructor(){const e=q(an.getDefaults(),arguments,["value"]);super(e),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new we({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(ye.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Is extends Ie{constructor(){const e=q(Is.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="AMOscillator",this._modulationScale=new em({context:this.context}),this._modulationNode=new we({context:this.context}),this._carrier=new de({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new de({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new an({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),ae(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(de.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return pe(this,arguments,void 0,function*(e=1024){return jt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Rs extends Ie{constructor(){const e=q(Rs.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="FMOscillator",this._modulationNode=new we({context:this.context,gain:0}),this._carrier=new de({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new ye({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new de({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new an({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new an({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),ae(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(de.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return pe(this,arguments,void 0,function*(e=1024){return jt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class Un extends Ie{constructor(){const e=q(Un.getDefaults(),arguments,["frequency","width"]);super(e),this.name="PulseOscillator",this._widthGate=new we({context:this.context,gain:0}),this._thresh=new zn({context:this.context,mapping:t=>t<=0?-1:1}),this.width=new ye({context:this.context,units:"audioRange",value:e.width}),this._triangle=new de({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),ae(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Ie.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return pe(this,arguments,void 0,function*(e=1024){return jt(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Vs extends Ie{constructor(){const e=q(Vs.getDefaults(),arguments,["frequency","type","spread"]);super(e),this.name="FatOscillator",this._oscillators=[],this.frequency=new ye({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ye({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,ae(this,["frequency","detune"])}static getDefaults(){return Object.assign(de.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(mt(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new de({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):Q});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return pe(this,arguments,void 0,function*(e=1024){return jt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class Fs extends Ie{constructor(){const e=q(Fs.getDefaults(),arguments,["frequency","modulationFrequency"]);super(e),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new an({context:this.context,value:2}),this._pulse=new Un({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new de({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),ae(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Ie.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return pe(this,arguments,void 0,function*(e=1024){return jt(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const Hr={am:Is,fat:Vs,fm:Rs,oscillator:de,pulse:Un,pwm:Fs};class gs extends Ie{constructor(){const e=q(gs.getDefaults(),arguments,["frequency","type"]);super(e),this.name="OmniOscillator",this.frequency=new ye({context:this.context,units:"frequency",value:e.frequency}),this.detune=new ye({context:this.context,units:"cents",value:e.detune}),ae(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(de.getDefaults(),Rs.getDefaults(),Is.getDefaults(),Vs.getDefaults(),Un.getDefaults(),Fs.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=Hr[e],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof Hr[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&$t(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&$t(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&rt(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return pe(this,arguments,void 0,function*(e=1024){return jt(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function Oa(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){mt(r,s,e),t.set(this,r)}})}}function ct(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){mt(this.toSeconds(r),s,e),t.set(this,r)}})}}class Ls extends Ie{constructor(){const e=q(Ls.getDefaults(),arguments,["url","onload"]);super(e),this.name="Player",this._activeSources=new Set,this._buffer=new ne({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Ie.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:Q,onerror:Q,playbackRate:1,reverse:!1})}load(e){return pe(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=Q){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=Kt(t,this._loopStart):t=Kt(t,0);const i=this.toSeconds(t),r=n;n=Kt(n,Math.max(this._buffer.duration-i,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);const c=new Ds({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(c),this._loop&&je(r)?c.start(e,i):c.start(e,i,o-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var i;(i=[...this._activeSources].pop())===null||i===void 0||i.stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(e);this._stop(n),this._start(n,i)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&mt(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&mt(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}Ye([ct(0)],Ls.prototype,"fadeIn",void 0);Ye([ct(0)],Ls.prototype,"fadeOut",void 0);class bt extends B{constructor(){const e=q(bt.getDefaults(),arguments,["attack","decay","sustain","release"]);super(e),this.name="Envelope",this._sig=new ye({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(B.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(rt(e))return e;{let n;for(n in Kn)if(Kn[n][t]===e)return n;return e}}_setCurve(e,t,n){if(rt(n)&&Reflect.has(Kn,n)){const i=Kn[n];At(i)?e!=="_decayCurve"&&(this[e]=i[t]):this[e]=i}else if(Ue(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(e){this._setCurve("_decayCurve","Out",e)}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){const c=1/i;i=(1-o)/c}if(i<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,i,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,i,e);else{this._sig.cancelAndHoldAtTime(e);let c=this._attackCurve;for(let a=1;a<c.length;a++)if(c[a-1]<=o&&o<=c[a]){c=this._attackCurve.slice(a),c[0]=o;break}this._sig.setValueCurveAtTime(c,e,i,t)}if(r&&this.sustain<1){const c=t*this.sustain,a=e+i;this.log("decay",a),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(c,r+a):this._sig.exponentialApproachValueAtTime(c,a,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(W(Ue(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return zi(this,e,t,n),this}asArray(){return pe(this,arguments,void 0,function*(e=1024){const t=e/this.context.sampleRate,n=new ji(1,t,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),o=r*.1,c=r+o,a=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/c,decay:t*this.toSeconds(this.decay)/c,release:t*this.toSeconds(this.release)/c,context:n}));return a._sig.toDestination(),a.triggerAttackRelease(t*(i+o)/c,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}Ye([ct(0)],bt.prototype,"attack",void 0);Ye([ct(0)],bt.prototype,"decay",void 0);Ye([Oa(0,1)],bt.prototype,"sustain",void 0);Ye([ct(0)],bt.prototype,"release",void 0);const Kn=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/127*(Math.PI/2));const i=[],r=6.4;for(e=0;e<127;e++){t=e/127;const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;i[e]=d/10+t*.83}i[127]=1;const o=[],c=5;for(e=0;e<128;e++)o[e]=Math.ceil(e/127*c)/c;const a=[];for(e=0;e<128;e++)t=e/127,a[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/127;const d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function h(d){const f=new Array(d.length);for(let p=0;p<d.length;p++)f[p]=1-d[p];return f}function u(d){return d.slice(0).reverse()}return{bounce:{In:h(l),Out:l},cosine:{In:n,Out:u(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:h(i)},sine:{In:a,Out:h(a)},step:{In:o,Out:h(o)}}})();class cn extends B{constructor(){const e=q(cn.getDefaults(),arguments);super(e),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=t=>this._original_triggerRelease(t),this._volume=this.output=new gn({context:this.context,volume:e.volume}),this.volume=this._volume.volume,ae(this,"volume")}static getDefaults(){return Object.assign(B.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...i)=>{const r=i[t],o=this.context.transport.schedule(c=>{i[t]=c,n.apply(this,i)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,r,i),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class ln extends cn{constructor(){const e=q(ln.getDefaults(),arguments);super(e),this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(cn.getDefaults(),{detune:0,onsilence:Q,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const i=this.toSeconds(t);return this._triggerEnvelopeAttack(i,n),this.setNote(e,i),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),i=e instanceof Le?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}Ye([ct(0)],ln.prototype,"portamento",void 0);class Ji extends bt{constructor(){super(q(Ji.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new we({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class vs extends ln{constructor(){const e=q(vs.getDefaults(),arguments);super(e),this.name="Synth",this.oscillator=new gs(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Ji(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),ae(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(ln.getDefaults(),{envelope:Object.assign(Ur(bt.getDefaults(),Object.keys(B.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Ur(gs.getDefaults(),[...Object.keys(Ie.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+i)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class js extends vs{constructor(){const e=q(js.getDefaults(),arguments);super(e),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,ae(this,["oscillator","envelope"])}static getDefaults(){return Zt(ln.getDefaults(),vs.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),i=this.toFrequency(e instanceof Le?e.toFrequency():e),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}Ye([Oa(0)],js.prototype,"octaves",void 0);Ye([ct(0)],js.prototype,"pitchDecay",void 0);const Ea=new Set;function er(s){Ea.add(s)}function $a(s,e){const t=`registerProcessor("${s}", ${e})`;Ea.add(t)}const tm=`
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
`;er(tm);const nm=`
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
`;er(nm);const sm=`
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
`;er(sm);const im="feedback-comb-filter",rm=`
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
`;$a(im,rm);class Hn extends cn{constructor(){const e=q(Hn.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(e),this.name="Sampler",this._activeSources=new Map;const t={};Object.keys(e.urls).forEach(n=>{const i=parseInt(n,10);if(W(Zn(n)||$t(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),Zn(n)){const r=new Le(this.context,n).toMidi();t[r]=e.urls[n]}else $t(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new Yi({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(cn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:Q,onerror:Q,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=Na(new Le(this.context,i).toFrequency()),o=Math.round(r),c=r-o,a=this._findClosest(o),l=o-a,h=this._buffers.get(l),u=Pa(a+c),d=new Ds({url:h,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:u}).connect(this.output);d.start(t,0,h.duration/u,n),Ue(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),p=f.indexOf(d);p!==-1&&f.splice(p,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const i=new Le(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,i),Ue(t)?(W(Ue(e),"notes must be an array when duration is array"),e.forEach((o,c)=>{const a=t[Math.min(c,t.length-1)];this.triggerRelease(o,r+this.toSeconds(a))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(W(Zn(e)||isFinite(e),`note must be a pitch or midi: ${e}`),Zn(e)){const i=new Le(this.context,e).toMidi();this._buffers.add(i,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}Ye([ct(0)],Hn.prototype,"attack",void 0);Ye([ct(0)],Hn.prototype,"release",void 0);class tr extends B{constructor(){const e=q(tr.getDefaults(),arguments,["pan"]);super(e),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new K({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",ae(this,"pan")}static getDefaults(){return Object.assign(B.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const om="bit-crusher",am=`
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
`;$a(om,am);class ue extends B{constructor(){const e=q(ue.getDefaults(),arguments,["solo"]);super(e),this.name="Solo",this.input=this.output=new we({context:this.context}),ue._allSolos.has(this.context)||ue._allSolos.set(this.context,new Set),ue._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(B.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),ue._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){ue._soloed.has(this.context)||ue._soloed.set(this.context,new Set),ue._soloed.get(this.context).add(this)}_removeSolo(){ue._soloed.has(this.context)&&ue._soloed.get(this.context).delete(this)}_isSoloed(){return ue._soloed.has(this.context)&&ue._soloed.get(this.context).has(this)}_noSolos(){return!ue._soloed.has(this.context)||ue._soloed.has(this.context)&&ue._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),ue._allSolos.get(this.context).delete(this),this._removeSolo(),this}}ue._allSolos=new Map;ue._soloed=new Map;class nr extends B{constructor(){const e=q(nr.getDefaults(),arguments,["pan","volume"]);super(e),this.name="PanVol",this._panner=this.input=new tr({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new gn({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,ae(this,["pan","volume"])}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Xt extends B{constructor(){const e=q(Xt.getDefaults(),arguments,["volume","pan"]);super(e),this.name="Channel",this._solo=this.input=new ue({solo:e.solo,context:this.context}),this._panVol=this.output=new nr({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),ae(this,["pan","volume"])}static getDefaults(){return Object.assign(B.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Xt.buses.has(e)||Xt.buses.set(e,new we({context:this.context})),Xt.buses.get(e)}send(e,t=0){const n=this._getBus(e),i=new we({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(n),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Xt.buses=new Map;class sr extends B{constructor(){const e=q(sr.getDefaults(),arguments,["threshold","ratio"]);super(e),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor,this.threshold=new K({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:e.threshold}),this.attack=new K({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:e.attack}),this.release=new K({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:e.release}),this.knee=new K({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:e.knee}),this.ratio=new K({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:e.ratio}),ae(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(B.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}function cm(){return Fe().now()}Fe().transport;Fe().destination;Fe().destination;Fe().listener;Fe().draw;const St=Fe();function lm(){return ne.loaded()}const hm=new sr({threshold:-6,ratio:20,attack:.002,release:.1,knee:3}).toDestination(),ir=new Hn({urls:{F1:"A_029__F1_5.m4a",B1:"A_035__B1_5.m4a",E2:"A_040__E2_5.m4a",A2:"A_045__A2_5.m4a",D3:"A_050__D3_5.m4a",G3:"A_055__G3_5.m4a",B3:"A_059__B3_5.m4a",D4:"A_062__D4_5.m4a",F4:"A_065__F4_5.m4a",B4:"A_071__B4_5.m4a",E5:"A_076__E5_5.m4a",A5:"A_081__A5_5.m4a",D6:"A_086__D6_5.m4a",G6:"A_091__G6_5.m4a"},baseUrl:"https://danigb.github.io/samples/jlearman/rhodes-mki/jRhodes3d-mono/",volume:-12,onload:()=>{console.log("Rhodes piano sampler loaded successfully!")},onerror:s=>{console.warn("Failed to load Rhodes piano sampler:",s)}}).connect(hm);function um(s,e=.35){if(St.state!=="running"){console.warn("Audio playback skipped: AudioContext is suspended. Click the audio icon in the header to enable.");return}try{ir.triggerAttackRelease(s,e)}catch(t){console.warn("Audio playback failed:",t)}}function dm(s,e=.7,t){if(St.state!=="running"){console.warn("Audio playback skipped: AudioContext is suspended. Click the audio icon in the header to enable.");return}try{const n=s.length,i=n<=1?1:Math.max(.4,1/Math.sqrt(n)),r=cm();s.forEach((o,c)=>{let a=0,l=1,h=e;if(t){const{minVelocity:u,maxVelocity:d,spread:f,microTiming:p,humanVariance:m,duration:g}=t;l=(u+Math.random()*(d-u))/127*i;const w=c*f*.1,k=(Math.random()-.5)*p*.05,M=(Math.random()-.5)*m*.03;a=Math.max(0,w+k+M),h=g*(1+(Math.random()-.5)*.2*m)}else l=i;ir.triggerAttackRelease(o,h,r+a,l)})}catch(n){console.warn("Audio playback failed:",n)}}async function pm(){await jf(),await lm(),ir.triggerAttackRelease("C4","8n")}async function fm(){St&&St.rawContext&&await St.rawContext.suspend()}function mm(){return St.state==="running"}function gm(s){const e=St.rawContext;if(e&&typeof e.addEventListener=="function"){const t=()=>s(e.state);return e.addEventListener("statechange",t),()=>e.removeEventListener("statechange",t)}return()=>{}}var vm=Object.defineProperty,_m=Object.getOwnPropertyDescriptor,rr=(s,e,t,n)=>{for(var i=n>1?void 0:n?_m(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&vm(e,t,i),i};let On=class extends ze{constructor(){super(...arguments),this.pads=[],this.recipe=[]}render(){const s=new Map(this.recipe.map((e,t)=>[e.index,t+1]));return $`
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
    `}onPadClick(s){s.midiNote&&(um(s.midiNote),this.dispatchEvent(new CustomEvent("pad-clicked",{detail:s,bubbles:!0,composed:!0})))}onPadKeydown(s,e){(s.key===" "||s.key==="Enter")&&(s.preventDefault(),this.onPadClick(e))}getAriaLabel(s,e){return s.note?e?`${s.note} row ${s.row+1} column ${s.col+1} voicing note ${e} of ${this.recipe.length} (lowest to highest)`:`${s.note} row ${s.row+1} column ${s.col+1} ${s.state}`:`empty slot row ${s.row+1} column ${s.col+1}`}};On.styles=Rt`
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
  `;rr([fe({attribute:!1})],On.prototype,"pads",2);rr([fe({attribute:!1})],On.prototype,"recipe",2);On=rr([Vt("circuit-grid")],On);const it=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Qn={minor:"Natural Minor",major:"Major",dorian:"Dorian",phrygian:"Phrygian",mixolydian:"Mixolydian","melodic minor":"Melodic Minor","harmonic minor":"Harmonic Minor","bebop dorian":"Bebop Dorian",blues:"Blues","minor pentatonic":"Minor Pent.","hungarian minor":"Hungarian Minor","ukrainian dorian":"Ukrainian Dorian",marva:"Marva",todi:"Todi","whole tone":"Whole Tone",chromatic:"Chromatic"},Gr=["minor","major","dorian","phrygian","mixolydian","melodic minor","harmonic minor","bebop dorian","blues","minor pentatonic","hungarian minor","ukrainian dorian","marva","todi","whole tone","chromatic"],Ys=it,bm=5,ym=3,xm=[0,2,4,5,7,9,11,12],wm=[null,1,3,null,6,8,10,null];function km(s,e){const t=Yt(e.key)??"C",n=it.indexOf(t),i=Tm(e.key,e.scale),r=Cm(t,i),o=new Set((s?.notes??[]).map(u=>Yt(u)).filter(Ia)),c=4,a=[];let l=c,h=-1;for(let u=0;u<32;u++){const d=r[u%r.length],f=it.indexOf(d);h!==-1&&f<h&&l++,a.push(`${d}${l}`),h=f}return Array.from({length:32},(u,d)=>{const f=Math.floor(d/8),p=d%8,m=3-f,g=p+m*ym,_=p+m*bm,w=e.mode==="collapsed"?g:_;let k="",M="";if(e.mode==="collapsed"){const A=a[w%a.length]??"";M=A,k=Yt(Cn(A))??""}else{const A=(f+2)%4,C=Math.floor(A/2)*12,P=A%2===0?wm[p]:xm[p];if(P!==null&&n!==-1){const N=P+C,I=ko(`${t}${c}`,_o(N));M=I,k=Yt(Cn(I))??""}}const v=o.has(k),y=k===t,x=i.includes(k);let b="dim";return y?b="active":v?b="lit":x&&(b="scale"),{index:d,row:f,col:p,offset:w,note:k,label:k||" ",state:b,inChord:v,isRoot:y,inScale:x,midiNote:M}})}function Tm(s,e){const n=al(`${s} ${e}`).notes.map(i=>Yt(i)).filter(Ia);return n.length===0?["C","D","E","F","G","A","B"]:Array.from(new Set(n))}function Mm(s){const e=it.indexOf(s);return e===-1?it:Da(it,e)}function Cm(s,e){const t=it.indexOf(s),n=e.slice().sort((i,r)=>Xr(i,t)-Xr(r,t));return n.length===0?Mm(s):n.includes(s)?Da(n,n.indexOf(s)):[s,...n]}function Xr(s,e){const t=it.indexOf(s);return t===-1||e===-1?Number.MAX_SAFE_INTEGER:(t-e+12)%12}function Da(s,e){return[...s.slice(e),...s.slice(0,e)]}function Yt(s){if(!s)return null;const e=Cn(s);if(!e)return null;const t=To(e);return it.includes(t)?t:e}function Ia(s){return s!==null}const _s=350,Zs=new Uint8Array([0,32,41]),Am=100,bs=46,Ve=64,ve=70,Qt=79;function Yr(s){if(s.length!==_s)throw new Error(`Invalid patch dump length. Expected ${_s}, got ${s.length}`);const e=new Uint8Array(s),t=i=>({wave:e[i],waveInterpolate:e[i+1],pulseWidthIndex:e[i+2],virtualSyncDepth:e[i+3],density:e[i+4],densityDetune:e[i+5],semitones:e[i+6],cents:e[i+7],pitchBend:e[i+8]}),n=i=>({velocityOrDelay:e[i],attack:e[i+1],decay:e[i+2],sustain:e[i+3],release:e[i+4]});return{rawData:e,oscillators:[t(bs),t(bs+9)],mixer:{osc1Level:e[Ve],osc2Level:e[Ve+1],ringModLevel12:e[Ve+2],noiseLevel:e[Ve+3],preFxLevel:e[Ve+4],postFxLevel:e[Ve+5]},filter:{routing:e[ve],drive:e[ve+1],driveType:e[ve+2],type:e[ve+3],frequency:e[ve+4],track:e[ve+5],resonance:e[ve+6],qNormalise:e[ve+7],env2ToFreq:e[ve+8]},envelopes:[n(Qt),n(Qt+5),n(Qt+10)]}}function Sm(s){const e=new Uint8Array(s.rawData),t=(i,r)=>{e[i]=r.wave,e[i+1]=r.waveInterpolate,e[i+2]=r.pulseWidthIndex,e[i+3]=r.virtualSyncDepth,e[i+4]=r.density,e[i+5]=r.densityDetune,e[i+6]=r.semitones,e[i+7]=r.cents,e[i+8]=r.pitchBend},n=(i,r)=>{e[i]=r.velocityOrDelay,e[i+1]=r.attack,e[i+2]=r.decay,e[i+3]=r.sustain,e[i+4]=r.release};return t(bs,s.oscillators[0]),t(bs+9,s.oscillators[1]),e[Ve]=s.mixer.osc1Level,e[Ve+1]=s.mixer.osc2Level,e[Ve+2]=s.mixer.ringModLevel12,e[Ve+3]=s.mixer.noiseLevel,e[Ve+4]=s.mixer.preFxLevel,e[Ve+5]=s.mixer.postFxLevel,e[ve]=s.filter.routing,e[ve+1]=s.filter.drive,e[ve+2]=s.filter.driveType,e[ve+3]=s.filter.type,e[ve+4]=s.filter.frequency,e[ve+5]=s.filter.track,e[ve+6]=s.filter.resonance,e[ve+7]=s.filter.qNormalise,e[ve+8]=s.filter.env2ToFreq,n(Qt,s.envelopes[0]),n(Qt+5,s.envelopes[1]),n(Qt+10,s.envelopes[2]),e[6]=0,e}function Pm(s=0){return new Uint8Array([240,Zs[0],Zs[1],Zs[2],1,Am,64,s,247])}var Nm=Object.defineProperty,Om=Object.getOwnPropertyDescriptor,yt=(s,e,t,n)=>{for(var i=n>1?void 0:n?Om(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Nm(e,t,i),i};let Ke=class extends ze{constructor(){super(...arguments),this.value=0,this.min=0,this.max=127,this.label="",this.centered=!1,this.isDragging=!1,this.startY=0,this.startValue=0,this.handlePointerDown=s=>{this.isDragging=!0,this.startY=s.clientY,this.startValue=this.value,this.container.setPointerCapture(s.pointerId),this.container.addEventListener("pointermove",this.handlePointerMove),this.container.addEventListener("pointerup",this.handlePointerUp),this.container.addEventListener("pointercancel",this.handlePointerUp)},this.handlePointerMove=s=>{if(!this.isDragging)return;const e=this.startY-s.clientY,t=(this.max-this.min)/100;let n=this.startValue+Math.round(e*t);n=Math.max(this.min,Math.min(this.max,n)),n!==this.value&&(this.value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))},this.handlePointerUp=s=>{this.isDragging=!1,this.container.releasePointerCapture(s.pointerId),this.container.removeEventListener("pointermove",this.handlePointerMove),this.container.removeEventListener("pointerup",this.handlePointerUp),this.container.removeEventListener("pointercancel",this.handlePointerUp)}}renderSvg(){const e=2*Math.PI*24,t=e*.75,n=e*.25,i=(this.value-this.min)/(this.max-this.min);let r=`0 ${e}`;if(this.centered){const c=t/2,a=(i-.5)*t;a>0?r=`0 ${c+n/2} ${a} ${e}`:r=`0 ${c+n/2+a} ${Math.abs(a)} ${e}`}else r=`${i*t} ${e}`;const o=(this.centered,-135+i*270);return $`
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
    `}};Ke.styles=Rt`
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
  `;yt([fe({type:Number})],Ke.prototype,"value",2);yt([fe({type:Number})],Ke.prototype,"min",2);yt([fe({type:Number})],Ke.prototype,"max",2);yt([fe({type:String})],Ke.prototype,"label",2);yt([fe({type:Boolean})],Ke.prototype,"centered",2);yt([G()],Ke.prototype,"isDragging",2);yt([no(".knob-container")],Ke.prototype,"container",2);Ke=yt([Vt("knob-element")],Ke);var Em=Object.defineProperty,$m=Object.getOwnPropertyDescriptor,xt=(s,e,t,n)=>{for(var i=n>1?void 0:n?$m(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Em(e,t,i),i};let Qe=class extends ze{constructor(){super(...arguments),this.value=0,this.min=0,this.max=127,this.label="",this.horizontal=!1,this.isDragging=!1,this.handlePointerDown=s=>{this.isDragging=!0,this.container.setPointerCapture(s.pointerId),this.updateValueFromEvent(s),this.container.addEventListener("pointermove",this.handlePointerMove),this.container.addEventListener("pointerup",this.handlePointerUp),this.container.addEventListener("pointercancel",this.handlePointerUp)},this.handlePointerMove=s=>{this.isDragging&&this.updateValueFromEvent(s)},this.handlePointerUp=s=>{this.isDragging=!1,this.container.releasePointerCapture(s.pointerId),this.container.removeEventListener("pointermove",this.handlePointerMove),this.container.removeEventListener("pointerup",this.handlePointerUp),this.container.removeEventListener("pointercancel",this.handlePointerUp)}}updateValueFromEvent(s){const e=this.container.getBoundingClientRect();let t=0;this.horizontal?t=Math.max(0,Math.min(s.clientX-e.left,e.width))/e.width:t=1-Math.max(0,Math.min(s.clientY-e.top,e.height))/e.height;let n=Math.round(this.min+t*(this.max-this.min));n!==this.value&&(this.value=n,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){const s=(this.value-this.min)/(this.max-this.min)*100,e=this.horizontal?`width: ${s}%`:`height: ${s}%`,t=this.horizontal?`left: ${s}%`:`bottom: ${s}%`,n=$`
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
    `}};Qe.styles=Rt`
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
  `;xt([fe({type:Number})],Qe.prototype,"value",2);xt([fe({type:Number})],Qe.prototype,"min",2);xt([fe({type:Number})],Qe.prototype,"max",2);xt([fe({type:String})],Qe.prototype,"label",2);xt([fe({type:Boolean})],Qe.prototype,"horizontal",2);xt([G()],Qe.prototype,"isDragging",2);xt([no(".slider-container")],Qe.prototype,"container",2);Qe=xt([Vt("slider-element")],Qe);var Dm=Object.defineProperty,Im=Object.getOwnPropertyDescriptor,Gn=(s,e,t,n)=>{for(var i=n>1?void 0:n?Im(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Dm(e,t,i),i};let It=class extends ze{constructor(){super(...arguments),this.patch=null,this.midiConnected=!1,this.activeSlot=0,this.viewMode="basic"}updateParam(s,e){this.patch&&this.dispatchEvent(new CustomEvent("patch-change",{detail:{path:s,value:e},bubbles:!0,composed:!0}))}handleRequestDump(){this.dispatchEvent(new CustomEvent("request-dump",{bubbles:!0,composed:!0}))}renderOscillatorPanel(s,e){if(!this.patch)return"";const t=this.patch.oscillators[s],n=this.viewMode==="advanced";return $`
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
    `}};It.styles=Rt`
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
  `;Gn([fe({type:Object})],It.prototype,"patch",2);Gn([fe({type:Boolean})],It.prototype,"midiConnected",2);Gn([G()],It.prototype,"activeSlot",2);Gn([G()],It.prototype,"viewMode",2);It=Gn([Vt("circuit-patch-editor")],It);var Rm=Object.defineProperty,Vm=Object.getOwnPropertyDescriptor,ee=(s,e,t,n)=>{for(var i=n>1?void 0:n?Vm(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Rm(e,t,i),i};let Y=class extends ze{constructor(){super(...arguments),this.theme=localStorage.getItem("circuit-chords.theme")||"dark",this.audioActive=!1,this.audioCleanup=null,this.activeTab="grid",this.activePatch=null,this.progression=[],this.originalKey="C",this.activeIndex=0,this.hideScaleWarningForNotes="",this.config={key:"C",scale:"chromatic",mode:"chromatic"},this.voicedOffsets={},this.isMobileViewport=!1,this.showQualitySelector=!1,this.hasSeenDrawerPeek=localStorage.getItem("circuit-chords.drawerPeekSeen")==="true",this.peekTimeout=null,this.isDraggingVoicing=!1,this.dragStartX=0,this.hasMovedVoicing=!1,this.playDebounceTimeout=null,this.autoPlay=!0,this.handleResize=()=>{this.isMobileViewport=window.innerWidth<520},this.transposeProgression=!0,this.inversion=0,this.source="",this.showSettings=!1,this.showHelp=!1,this.humanLoaded=!1,this.showHuman=!1,this.humanState=null,this.showScaleWarnings=localStorage.getItem("circuit-chords.showScaleWarnings")!=="false",this.midiConnected=!1,this.midiDevices=[],this.selectedMidiDevice="",this.activeMidiDevice=null,this.selectedMidiChannel=1,this.midiAccess=null,this.activeMidiTimeouts=new Map}get isDebugMode(){return new URLSearchParams(window.location.search).has("debug")}get isCircuitTracksConnected(){return this.isDebugMode?!0:this.midiConnected&&!!this.activeMidiDevice&&this.activeMidiDevice.toLowerCase().includes("circuit tracks")}getOrCreateMockPatch(){const s=new Uint8Array(_s);return s[45]=1,s[46]=0,s[64]=64,s[70]=1,s[71]=64,s[73]=64,s[79]=10,s[80]=50,s[81]=64,s[82]=20,Yr(s)}toggleHelp(){this.showHelp=!this.showHelp,this.showHelp&&(this.showSettings=!1,this.showHuman=!1)}toggleSettings(){this.showSettings=!this.showSettings,this.showSettings&&(this.showHelp=!1,this.showHuman=!1)}toggleHuman(){this.showHuman=!this.showHuman,this.showHuman&&(this.showHelp=!1,this.showSettings=!1)}handleHumanChange(s){this.humanState=s.detail}handleHumanPreview(s){this.humanState=s.detail,this.playActiveVoicing()}toggleScaleWarnings(s){this.showScaleWarnings=s,localStorage.setItem("circuit-chords.showScaleWarnings",String(s))}async toggleAudio(){try{this.audioActive?await fm():await pm()}catch(s){console.warn("Failed to toggle audio:",s)}}toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",localStorage.setItem("circuit-chords.theme",this.theme),this.classList.toggle("theme-light",this.theme==="light")}connectedCallback(){super.connectedCallback(),this.isDebugMode&&(this.activePatch=this.getOrCreateMockPatch()),this.loadDefaultProgression(),this.initMidi(),import("https://warmsynths.github.io/human-midi/human-engine.js").then(()=>{this.humanLoaded=!0}).catch(t=>{console.warn("Could not load human panel:",t)}),this.classList.toggle("theme-light",this.theme==="light"),this.audioActive=mm(),this.audioCleanup=gm(t=>{this.audioActive=t==="running"}),typeof window<"u"&&(this.isMobileViewport=window.innerWidth<520,window.addEventListener("resize",this.handleResize))}disconnectedCallback(){this.audioCleanup&&this.audioCleanup(),typeof window<"u"&&window.removeEventListener("resize",this.handleResize),super.disconnectedCallback()}initMidi(){typeof navigator<"u"&&"requestMIDIAccess"in navigator&&navigator.requestMIDIAccess({sysex:!0}).then(s=>{this.midiAccess=s,this.updateMidiStatus(s),s.onstatechange=()=>{this.updateMidiStatus(s)}}).catch(s=>{console.warn("MIDI access request failed:",s),this.midiConnected=!1,this.midiDevices=[]})}updateMidiStatus(s){const e=[];s&&s.inputs&&s.inputs.forEach(t=>{t.state==="connected"&&t.name&&!e.includes(t.name)&&e.push(t.name)}),s&&s.outputs&&s.outputs.forEach(t=>{t.state==="connected"&&t.name&&!e.includes(t.name)&&e.push(t.name)}),this.midiDevices=e,(this.selectedMidiDevice===""||!e.includes(this.selectedMidiDevice))&&(this.selectedMidiDevice=e.length>0?e[0]:""),this.activeMidiDevice!==null&&!e.includes(this.activeMidiDevice)?(this.activeMidiDevice=null,this.midiConnected=!1):this.activeMidiDevice!==null?this.midiConnected=!0:this.midiConnected=!1}connectMidiDevice(){this.selectedMidiDevice&&(this.activeMidiDevice=this.selectedMidiDevice,this.midiConnected=!0,this.midiAccess&&this.midiAccess.inputs.forEach(s=>{s.name===this.activeMidiDevice&&(s.onmidimessage=this.handleMidiMessage.bind(this))}))}handleMidiMessage(s){const e=s.data;if(e.length===_s&&e[0]===240)try{this.activePatch=Yr(e)}catch(t){console.warn("Failed to parse sysex patch dump",t)}}sendSysexCommand(s){this.midiAccess&&this.activeMidiDevice&&this.midiAccess.outputs.forEach(e=>{e.name===this.activeMidiDevice&&e.send(s)})}handlePatchChange(s){if(!this.activePatch)return;const{path:e,value:t}=s.detail,n={...this.activePatch};n.oscillators=[{...n.oscillators[0]},{...n.oscillators[1]}],n.filter={...n.filter},n.mixer={...n.mixer},n.envelopes=[{...n.envelopes[0]},{...n.envelopes[1]},{...n.envelopes[2]}];const i=e.split(".");let r=n;for(let c=0;c<i.length-1;c++)r=r[i[c]];r[i[i.length-1]]=t,this.activePatch=n;const o=Sm(n);this.sendSysexCommand(o)}handleRequestDump(){const s=Pm(0);this.sendSysexCommand(s)}handleLoadSlot(s){const e=s.detail.slot;this.midiAccess&&this.activeMidiDevice&&(this.midiAccess.outputs.forEach(t=>{t.name===this.activeMidiDevice&&t.send([192,e])}),setTimeout(()=>{this.handleRequestDump()},50))}disconnectMidiDevice(){this.activeMidiDevice=null,this.midiConnected=!1}loadDefaultProgression(){const e=new URLSearchParams(window.location.search).get("p"),t=e?e.trim():"Cmaj7 Am7 Dm7 G7";let n=Js(t);if(n.length===0&&e&&(n=Js("Cmaj7 Am7 Dm7 G7")),n.length>0){this.progression=n,this.source=e&&n.length>0?t:"Cmaj7 Am7 Dm7 G7",this.activeIndex=0,this.initVoicedOffsets();const i=n[0],r=this.normalizeKey(i?.tonic)??this.config.key;this.originalKey=r;const o="chromatic";this.config={...this.config,key:r,scale:o,mode:"chromatic"}}}initVoicedOffsets(){const s={};this.progression.forEach((e,t)=>{s[t]=this.getDefaultVoicedOffsets(e)}),this.voicedOffsets=s}getDefaultVoicedOffsets(s){return s.intervals.map(t=>Bc(t).semitones).filter(t=>typeof t=="number").sort((t,n)=>t-n)}shiftVoicingInversion(s,e){if(s.length===0)return[];let t=[...s].sort((c,a)=>c-a);if(e>0)for(let c=0;c<e;c++){const a=t.shift();t.push(a+12),t.sort((l,h)=>l-h)}else if(e<0)for(let c=0;c<Math.abs(e);c++){const a=t.pop();t.unshift(a-12),t.sort((l,h)=>l-h)}const n=Bt((this.getTransposedProgression()[this.activeIndex]?.tonic??"C")+"4")??60,r=(this.isMobileViewport?60:48)-n,o=84-n;return t=t.map(c=>{let a=c;for(;a<r;)a+=12;for(;a>o;)a-=12;return a}).sort((c,a)=>c-a),Array.from(new Set(t))}onKeyboardPointerDown(s){s.currentTarget.setPointerCapture(s.pointerId),this.isDraggingVoicing=!0,this.dragStartX=s.clientX,this.hasMovedVoicing=!1,s.preventDefault()}onKeyboardPointerMove(s){if(!this.isDraggingVoicing)return;const e=s.clientX-this.dragStartX;Math.abs(e)>4&&(this.hasMovedVoicing=!0);const n=Math.round(e/15);if(n!==0){this.dragStartX=s.clientX;const i=this.voicedOffsets[this.activeIndex]||[];if(i.length>0){const r=this.shiftVoicingInversion(i,n);this.voicedOffsets={...this.voicedOffsets,[this.activeIndex]:r},this.autoPlay&&this.playActiveVoicingDebounced()}}}onKeyboardPointerUp(s){if(!this.isDraggingVoicing)return;this.isDraggingVoicing=!1;const e=s.currentTarget;try{e.releasePointerCapture(s.pointerId)}catch{}if(!this.hasMovedVoicing){const t=s.target;if(t.tagName==="rect"){const n=t.getAttribute("data-midi");if(n){const i=Number(n),r=this.getTransposedProgression()[this.activeIndex]??null;if(r){const o=Bt((r.tonic??"C")+"4")??60,c=i-o,a=[...this.voicedOffsets[this.activeIndex]||[]],l=a.indexOf(c);l!==-1?a.splice(l,1):a.length<6&&a.push(c),this.voicedOffsets={...this.voicedOffsets,[this.activeIndex]:a.sort((h,u)=>h-u)},this.autoPlay&&this.playActiveVoicingDebounced()}}}}}playActiveVoicingDebounced(){this.playDebounceTimeout&&clearTimeout(this.playDebounceTimeout),this.playDebounceTimeout=setTimeout(()=>{this.playActiveVoicing()},80)}onKeyboardWheel(s){s.preventDefault();const e=s.deltaY>0?-1:1,t=this.voicedOffsets[this.activeIndex]||[];if(t.length>0){const n=this.shiftVoicingInversion(t,e);this.voicedOffsets={...this.voicedOffsets,[this.activeIndex]:n},this.autoPlay&&this.playActiveVoicingDebounced()}}renderVoicingKeyboard(){const e=this.getTransposedProgression()[this.activeIndex]??null,t=e?Bt((e.tonic??"C")+"4")??60:60,n=(this.voicedOffsets[this.activeIndex]||[]).map(l=>t+l),i=this.isMobileViewport,r=i?[60,62,64,65,67,69,71,72,74,76,77,79,81,83,84]:[48,50,52,53,55,57,59,60,62,64,65,67,69,71,72,74,76,77,79,81,83,84],o=i?[{midi:61,afterIdx:0},{midi:63,afterIdx:1},{midi:66,afterIdx:3},{midi:68,afterIdx:4},{midi:70,afterIdx:5},{midi:73,afterIdx:7},{midi:75,afterIdx:8},{midi:78,afterIdx:10},{midi:80,afterIdx:11},{midi:82,afterIdx:12}]:[{midi:49,afterIdx:0},{midi:51,afterIdx:1},{midi:54,afterIdx:3},{midi:56,afterIdx:4},{midi:58,afterIdx:5},{midi:61,afterIdx:7},{midi:63,afterIdx:8},{midi:66,afterIdx:10},{midi:68,afterIdx:11},{midi:70,afterIdx:12},{midi:73,afterIdx:14},{midi:75,afterIdx:15},{midi:78,afterIdx:17},{midi:80,afterIdx:18},{midi:82,afterIdx:19}],c=i?150:220;return $`
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
          ${r.map((l,h)=>{const u=h*10,d=n.includes(l);return Bs`
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
          ${o.map(({midi:l,afterIdx:h})=>{const u=(h+1)*10-3.2,d=n.includes(l);return Bs`
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
          ${n.map(l=>{const h=r.indexOf(l);let u=0;if(h!==-1)u=h*10+4.6;else{const f=o.find(p=>p.midi===l);f&&(u=(f.afterIdx+1)*10)}const d=Cn(Gs(l));return Bs`
              <text x="${u}" y="39" text-anchor="middle" class="keyboard-label">
                ${d}
              </text>
            `})}
        </svg>
      </div>
    `}render(){const s=this.getTransposedProgression(),e=s[this.activeIndex]??null,t=km(e,this.config),n=e?Bt((e.tonic??"C")+"4")??60:60,r=(this.voicedOffsets[this.activeIndex]||[]).map(a=>{const l=Gs(n+a),h=t.find(u=>u.midiNote===l);return h?{note:h.note,row:h.row,col:h.col,index:h.index}:null}).filter(a=>a!==null),o=e?e.notes.map(a=>Yt(a)).filter(Boolean):[],c=e&&this.config.mode==="collapsed"?o.filter(a=>!t.some(l=>l.note===a)):[];return $`
      <div class="app-grid">
        <!-- Brand Header Bar -->
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
            <button class="audio-btn theme-toggle-btn" @click=${this.toggleTheme} title="${this.theme==="dark"?"Switch to Light Mode":"Switch to Dark Mode"}">
              ${this.theme==="dark"?$`
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
              <span class="midi-led ${this.midiConnected?"connected":""}"></span>
              MIDI
            </div>
          </div>
        </header>

        <!-- 1. Left Navigation Tab Bar -->
        <nav class="panel sidebar-left">
          <button class="nav-btn ${this.activeTab==="grid"?"active":""}" title="Grid View" @click=${()=>this.activeTab="grid"}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
          </button>
          <button class="nav-btn ${this.activeTab==="data"?"active":""}" title="Key &amp; Scale" @click=${()=>this.activeTab="data"}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          </button>
          <button class="nav-btn ${this.activeTab==="input"?"active":""}" title="Chord Input" @click=${()=>this.activeTab="input"}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
          </button>
          <button 
            class="nav-btn ${this.activeTab==="patch"?"active":""}" 
            title="Patch Editor" 
            @click=${()=>{this.isCircuitTracksConnected&&(this.activeTab="patch")}}
            style="opacity: ${this.isCircuitTracksConnected?"1":"0.3"}; cursor: ${this.isCircuitTracksConnected?"pointer":"not-allowed"};"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
          </button>
          <div class="nav-divider"></div>
          <div class="nav-bottom">
            <button class="nav-btn ${this.showHelp?"active":""}" title="Help ?" @click=${()=>this.toggleHelp()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </button>
            <button class="nav-btn ${this.showSettings?"active":""}" title="Settings" @click=${()=>this.toggleSettings()}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
            </button>
          </div>
        </nav>

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
                  ${Gr.slice(0,8).map(a=>$`
                    <button
                      class="picker-pad pad-scale ${this.config.scale===a?"pad-active":""}"
                      @click=${()=>this.onScaleChange(a)}
                      title="Scale: ${a}"
                      aria-label="Scale ${Qn[a]??a}">
                      ${Qn[a]??a}
                    </button>
                  `)}
                </div>
                <!-- Row 4 (pads 25–32): next 8 scales -->
                <div class="pad-row scale-row">
                  ${Gr.slice(8,16).map(a=>$`
                    <button
                      class="picker-pad pad-scale ${this.config.scale===a?"pad-active":""}"
                      @click=${()=>this.onScaleChange(a)}
                      title="Scale: ${a}"
                      aria-label="Scale ${Qn[a]??a}">
                      ${Qn[a]??a}
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
        <aside class="panel sidebar-right ${this.showSettings?"open":""}">
          <!-- Close Button -->
          <button class="close-btn" @click=${()=>this.showSettings=!1} title="Close Settings">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Sidebar Header -->
          <div class="sidebar-header" style="width: 100%; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 12px; margin-bottom: 8px;">
            <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700; color: #ffffff; letter-spacing: -0.02em;">Settings</h3>
          </div>

          <!-- General Settings -->
          <div class="settings-section">
            <h4 class="section-title">General</h4>
            <label style="display: flex; align-items: center; cursor: pointer; color: #b0b3b8; font-size: 0.9rem;">
              <input type="checkbox" .checked=${this.showScaleWarnings} @change=${a=>this.toggleScaleWarnings(a.target.checked)} style="margin-right: 8px; cursor: pointer;">
              Show warnings for out-of-scale notes
            </label>
          </div>

          <!-- MIDI Settings -->
          <div class="settings-section">
            <h4 class="section-title">MIDI Settings</h4>
            
            <div class="midi-status">
              <div class="midi-icon-wrapper ${this.midiConnected?"connected":""}">
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
                <div class="status-text ${this.midiConnected?"connected":"disconnected"}">
                  ${this.midiConnected?"CONNECTED":"DISCONNECTED"}
                </div>
                ${this.midiConnected&&this.activeMidiDevice?$`
                  <div class="active-device-name" title="${this.activeMidiDevice}">
                    ${this.activeMidiDevice}
                  </div>
                `:""}
              </div>
            </div>

            <!-- Device selection & connection trigger -->
            ${this.midiDevices.length>0?$`
              <div class="midi-config">
                <span class="config-label">Available Devices</span>
                <select class="midi-select" .value=${this.selectedMidiDevice} @change=${a=>this.selectedMidiDevice=a.target.value}>
                  ${this.midiDevices.map(a=>$`
                    <option value=${a} ?selected=${this.selectedMidiDevice===a}>${a}</option>
                  `)}
                </select>

                <span class="config-label" style="margin-top: 8px;">MIDI Channel</span>
                <select class="midi-select" .value=${this.selectedMidiChannel.toString()} @change=${a=>this.selectedMidiChannel=parseInt(a.target.value,10)}>
                  ${Array.from({length:16},(a,l)=>l+1).map(a=>$`
                    <option value=${a.toString()} ?selected=${this.selectedMidiChannel===a}>Channel ${a}</option>
                  `)}
                </select>
                
                ${this.midiConnected&&this.activeMidiDevice===this.selectedMidiDevice?$`
                  <button class="midi-btn disconnect" @click=${this.disconnectMidiDevice}>
                    Disconnect
                  </button>
                `:$`
                  <button class="midi-btn connect" @click=${this.connectMidiDevice} ?disabled=${!this.selectedMidiDevice}>
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
                ${this.renderVoicingKeyboard()}
              </div>
              <div class="quality-selector-row">
                ${[{label:"maj7",value:"maj7"},{label:"m7",value:"m7"},{label:"7",value:"7"},{label:"m7b5",value:"m7b5"},{label:"dim7",value:"dim7"},{label:"sus4",value:"sus4"},{label:"9",value:"9"},{label:"maj",value:"maj"},{label:"m",value:"m"}].map(a=>{const l=this.progression[this.activeIndex];let h=!1;if(l&&l.tonic){const u=l.symbol.slice(l.tonic.length),d=a.value==="maj"?"":a.value;h=u===d}return $`
                    <button 
                      class="quality-pill ${h?"active":""}"
                      @click=${()=>this.changeActiveChordQuality(a.value)}
                    >
                      ${a.label}
                    </button>
                  `})}
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
    `}changeActiveChordQuality(s){const e=this.progression[this.activeIndex];if(!e)return;const i=`${e.tonic||"C"}${s==="maj"?"":s}`,r=is(i);if(!r.empty&&r.notes.length>0){const o={symbol:i,tonic:r.tonic,quality:r.quality,notes:r.notes,intervals:r.intervals,aliases:r.aliases},c=[...this.progression];c[this.activeIndex]=o,this.progression=c,this.voicedOffsets={...this.voicedOffsets,[this.activeIndex]:this.getDefaultVoicedOffsets(o)},this.updateSourceFromProgression(),this.autoPlay&&this.playActiveVoicingDebounced()}}updateSourceFromProgression(){this.source=this.progression.map(s=>s.symbol).join(" ")}playActiveVoicing(){const e=this.getTransposedProgression()[this.activeIndex]??null;if(!e)return;let t=this.voicedOffsets[this.activeIndex]||[];t.length===0&&(t=this.getDefaultVoicedOffsets(e));const n=Bt((e.tonic??"C")+"4")??60,i=t.map(r=>Gs(n+r)).filter(r=>r!==null);i.length>0&&(dm(i,.7,this.humanState),this.sendMidiNotes(i,700,this.humanState))}sendMidiNotes(s,e=700,t){if(!this.midiConnected||!this.activeMidiDevice||!this.midiAccess)return;let n=null;for(const c of this.midiAccess.outputs.values())if(c.name===this.activeMidiDevice){n=c;break}if(!n)return;const i=this.selectedMidiChannel-1&15,r=144|i,o=128|i;s.forEach((c,a)=>{const l=Bt(c);if(l===null)return;this.activeMidiTimeouts.has(l)&&clearTimeout(this.activeMidiTimeouts.get(l));let h=100,u=0,d=e;if(t){const{minVelocity:p,maxVelocity:m,spread:g,microTiming:_,humanVariance:w,duration:k}=t;h=Math.round(p+Math.random()*(m-p));const M=a*g*.1,v=(Math.random()-.5)*_*.05,y=(Math.random()-.5)*w*.03;u=Math.max(0,Math.round((M+v+y)*1e3)),d=Math.max(50,Math.round(k*1e3*(1+(Math.random()-.5)*.2*w)))}const f=setTimeout(()=>{try{n.send([r,l,h])}catch(m){console.warn("Failed to send MIDI Note On:",m)}const p=setTimeout(()=>{try{n.send([o,l,0])}catch{}this.activeMidiTimeouts.delete(l)},d);this.activeMidiTimeouts.set(l,p)},u);this.activeMidiTimeouts.set(l,f)})}onPadClicked(s){s.detail&&s.detail.midiNote&&this.sendMidiNotes([s.detail.midiNote],350)}onKeyChange(s){this.config={...this.config,key:s}}onScaleChange(s){const e=s==="chromatic"?"chromatic":"collapsed";this.config={...this.config,scale:s,mode:e}}onChordSelected(s){const e=s.detail;this.activeIndex===e?this.showQualitySelector=!this.showQualitySelector:(this.activeIndex=e,this.showQualitySelector=!1,this.autoPlay&&setTimeout(()=>this.playActiveVoicing(),20),this.hasSeenDrawerPeek||(this.hasSeenDrawerPeek=!0,localStorage.setItem("circuit-chords.drawerPeekSeen","true"),this.showQualitySelector=!0,this.peekTimeout&&clearTimeout(this.peekTimeout),this.peekTimeout=setTimeout(()=>{this.showQualitySelector=!1,this.peekTimeout=null},1500)))}onParsed(s){this.progression=s.detail.progression,this.source=s.detail.source,this.activeIndex=0,this.initVoicedOffsets();const e=s.detail.progression[0],t=this.normalizeKey(e?.tonic)??this.config.key;this.originalKey=t;const n="chromatic";e?.tonic&&(this.config={...this.config,key:t,scale:n,mode:"chromatic"}),this.autoPlay&&this.progression.length>0&&setTimeout(()=>this.playActiveVoicing(),50),this.progression.length>0&&(this.activeTab="grid")}getTransposedProgression(){if(this.progression.length===0)return[];if(!this.transposeProgression)return this.progression;const s=this.getKeyShiftSemitones();return s===0?this.progression:this.progression.map(e=>this.transposeParsedChord(e,s)).filter(e=>!!e)}getKeyShiftSemitones(){const s=Ys.indexOf(this.originalKey),e=Ys.indexOf(this.config.key);return s===-1||e===-1?0:(e-s+12)%12}transposeParsedChord(s,e){const t=this.transposeChordSymbol(s.symbol,e);if(!t)return null;const n=is(t);return n.empty||n.notes.length===0?null:{symbol:t,tonic:n.tonic,quality:n.quality,notes:n.notes,intervals:n.intervals,aliases:n.aliases}}transposeChordSymbol(s,e){const t=s.match(/^([A-G](?:#{1,2}|b{1,2})?)(.*?)(?:\/([A-G](?:#{1,2}|b{1,2})?))?$/);if(!t)return null;const n=this.transposeNoteName(t[1],e);if(!n)return null;const i=t[2]??"",r=t[3]?this.transposeNoteName(t[3],e):null;return t[3]&&!r?null:`${n}${i}${r?`/${r}`:""}`}transposeNoteName(s,e){const t=_o(e),n=ko(s,t);return this.normalizeKey(n)}normalizeKey(s){const e=Cn(s??"");if(!e)return null;const t=To(e);return Ys.includes(t)?t:null}};Y.styles=Rt`
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
      overflow: hidden;
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
  `;ee([G()],Y.prototype,"theme",2);ee([G()],Y.prototype,"audioActive",2);ee([G()],Y.prototype,"activeTab",2);ee([G()],Y.prototype,"activePatch",2);ee([G()],Y.prototype,"progression",2);ee([G()],Y.prototype,"originalKey",2);ee([G()],Y.prototype,"activeIndex",2);ee([G()],Y.prototype,"hideScaleWarningForNotes",2);ee([G()],Y.prototype,"config",2);ee([G()],Y.prototype,"voicedOffsets",2);ee([G()],Y.prototype,"isMobileViewport",2);ee([G()],Y.prototype,"showQualitySelector",2);ee([G()],Y.prototype,"autoPlay",2);ee([G()],Y.prototype,"transposeProgression",2);ee([G()],Y.prototype,"inversion",2);ee([G()],Y.prototype,"source",2);ee([G()],Y.prototype,"showSettings",2);ee([G()],Y.prototype,"showHelp",2);ee([G()],Y.prototype,"humanLoaded",2);ee([G()],Y.prototype,"showHuman",2);ee([G()],Y.prototype,"humanState",2);ee([G()],Y.prototype,"showScaleWarnings",2);ee([G()],Y.prototype,"midiConnected",2);ee([G()],Y.prototype,"midiDevices",2);ee([G()],Y.prototype,"selectedMidiDevice",2);ee([G()],Y.prototype,"activeMidiDevice",2);ee([G()],Y.prototype,"selectedMidiChannel",2);Y=ee([Vt("circuit-chord-forge")],Y);
