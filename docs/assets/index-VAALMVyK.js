(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Zn=globalThis,si=Zn.ShadowRoot&&(Zn.ShadyCSS===void 0||Zn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ii=Symbol(),ar=new WeakMap;let Qr=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ii)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(si&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ar.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ar.set(t,e))}return e}toString(){return this.cssText}};const Ya=s=>new Qr(typeof s=="string"?s:s+"",void 0,ii),ps=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((n,i,r)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[r+1],s[0]);return new Qr(t,s,ii)},Ka=(s,e)=>{if(si)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),i=Zn.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=t.cssText,s.appendChild(n)}},cr=si?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ya(t)})(s):s;const{is:Qa,defineProperty:Ja,getOwnPropertyDescriptor:ec,getOwnPropertyNames:tc,getOwnPropertySymbols:nc,getPrototypeOf:sc}=Object,fs=globalThis,lr=fs.trustedTypes,ic=lr?lr.emptyScript:"",rc=fs.reactiveElementPolyfillSupport,mn=(s,e)=>s,Qn={toAttribute(s,e){switch(e){case Boolean:s=s?ic:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},ri=(s,e)=>!Qa(s,e),ur={attribute:!0,type:String,converter:Qn,reflect:!1,useDefault:!1,hasChanged:ri};Symbol.metadata??=Symbol("metadata"),fs.litPropertyMetadata??=new WeakMap;let Wt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ur){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(e,n,t);i!==void 0&&Ja(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){const{get:i,set:r}=ec(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const a=i?.call(this);r?.call(this,o),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ur}static _$Ei(){if(this.hasOwnProperty(mn("elementProperties")))return;const e=sc(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mn("properties"))){const t=this.properties,n=[...tc(t),...nc(t)];for(const i of n)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,i]of t)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const i=this._$Eu(t,n);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const i of n)t.unshift(cr(i))}else e!==void 0&&t.push(cr(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ka(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const r=(n.converter?.toAttribute!==void 0?n.converter:Qn).toAttribute(t,n.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,i=n._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=n.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:Qn;this._$Em=i;const a=o.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,n,i=!1,r){if(e!==void 0){const o=this.constructor;if(i===!1&&(r=this[e]),n??=o.getPropertyOptions(e),!((n.hasChanged??ri)(r,t)||n.useDefault&&n.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:i,wrapped:r},o){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,r]of n){const{wrapped:o}=r,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Wt[mn("elementProperties")]=new Map,Wt[mn("finalized")]=new Map,rc?.({ReactiveElement:Wt}),(fs.reactiveElementVersions??=[]).push("2.1.2");const oi=globalThis,hr=s=>s,Jn=oi.trustedTypes,dr=Jn?Jn.createPolicy("lit-html",{createHTML:s=>s}):void 0,Jr="$lit$",dt=`lit$${Math.random().toFixed(9).slice(2)}$`,eo="?"+dt,oc=`<${eo}>`,Pt=document,yn=()=>Pt.createComment(""),bn=s=>s===null||typeof s!="object"&&typeof s!="function",ai=Array.isArray,ac=s=>ai(s)||typeof s?.[Symbol.iterator]=="function",Fs=`[ 	
\f\r]`,fn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,pr=/-->/g,fr=/>/g,Tt=RegExp(`>|${Fs}(?:([^\\s"'>=/]+)(${Fs}*=${Fs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mr=/'/g,gr=/"/g,to=/^(?:script|style|textarea|title)$/i,cc=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),H=cc(1),Xt=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),_r=new WeakMap,Mt=Pt.createTreeWalker(Pt,129);function no(s,e){if(!ai(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return dr!==void 0?dr.createHTML(e):e}const lc=(s,e)=>{const t=s.length-1,n=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=fn;for(let a=0;a<t;a++){const c=s[a];let l,u,h=-1,d=0;for(;d<c.length&&(o.lastIndex=d,u=o.exec(c),u!==null);)d=o.lastIndex,o===fn?u[1]==="!--"?o=pr:u[1]!==void 0?o=fr:u[2]!==void 0?(to.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Tt):u[3]!==void 0&&(o=Tt):o===Tt?u[0]===">"?(o=i??fn,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,l=u[1],o=u[3]===void 0?Tt:u[3]==='"'?gr:mr):o===gr||o===mr?o=Tt:o===pr||o===fr?o=fn:(o=Tt,i=void 0);const f=o===Tt&&s[a+1].startsWith("/>")?" ":"";r+=o===fn?c+oc:h>=0?(n.push(l),c.slice(0,h)+Jr+c.slice(h)+dt+f):c+dt+(h===-2?a:f)}return[no(s,r+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};class wn{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,o=0;const a=e.length-1,c=this.parts,[l,u]=lc(e,t);if(this.el=wn.createElement(l,n),Mt.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=Mt.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(Jr)){const d=u[o++],f=i.getAttribute(h).split(dt),p=/([.?@])?(.*)/.exec(d);c.push({type:1,index:r,name:p[2],strings:f,ctor:p[1]==="."?hc:p[1]==="?"?dc:p[1]==="@"?pc:ms}),i.removeAttribute(h)}else h.startsWith(dt)&&(c.push({type:6,index:r}),i.removeAttribute(h));if(to.test(i.tagName)){const h=i.textContent.split(dt),d=h.length-1;if(d>0){i.textContent=Jn?Jn.emptyScript:"";for(let f=0;f<d;f++)i.append(h[f],yn()),Mt.nextNode(),c.push({type:2,index:++r});i.append(h[d],yn())}}}else if(i.nodeType===8)if(i.data===eo)c.push({type:2,index:r});else{let h=-1;for(;(h=i.data.indexOf(dt,h+1))!==-1;)c.push({type:7,index:r}),h+=dt.length-1}r++}}static createElement(e,t){const n=Pt.createElement("template");return n.innerHTML=e,n}}function Yt(s,e,t=s,n){if(e===Xt)return e;let i=n!==void 0?t._$Co?.[n]:t._$Cl;const r=bn(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(s),i._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=i:t._$Cl=i),i!==void 0&&(e=Yt(s,i._$AS(s,e.values),i,n)),e}class uc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,i=(e?.creationScope??Pt).importNode(t,!0);Mt.currentNode=i;let r=Mt.nextNode(),o=0,a=0,c=n[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new Pn(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new fc(r,this,e)),this._$AV.push(l),c=n[++a]}o!==c?.index&&(r=Mt.nextNode(),o++)}return Mt.currentNode=Pt,i}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Pn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,i){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Yt(this,e,t),bn(e)?e===me||e==null||e===""?(this._$AH!==me&&this._$AR(),this._$AH=me):e!==this._$AH&&e!==Xt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ac(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==me&&bn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Pt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=wn.createElement(no(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(t);else{const r=new uc(i,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=_r.get(e.strings);return t===void 0&&_r.set(e.strings,t=new wn(e)),t}k(e){ai(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new Pn(this.O(yn()),this.O(yn()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=hr(e).nextSibling;hr(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ms{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,i,r){this.type=1,this._$AH=me,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=me}_$AI(e,t=this,n,i){const r=this.strings;let o=!1;if(r===void 0)e=Yt(this,e,t,0),o=!bn(e)||e!==this._$AH&&e!==Xt,o&&(this._$AH=e);else{const a=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=Yt(this,a[n+c],t,c),l===Xt&&(l=this._$AH[c]),o||=!bn(l)||l!==this._$AH[c],l===me?e=me:e!==me&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class hc extends ms{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===me?void 0:e}}class dc extends ms{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==me)}}class pc extends ms{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){if((e=Yt(this,e,t,0)??me)===Xt)return;const n=this._$AH,i=e===me&&n!==me||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==me&&(n===me||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class fc{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Yt(this,e)}}const mc=oi.litHtmlPolyfillSupport;mc?.(wn,Pn),(oi.litHtmlVersions??=[]).push("3.3.2");const gc=(s,e,t)=>{const n=t?.renderBefore??e;let i=n._$litPart$;if(i===void 0){const r=t?.renderBefore??null;n._$litPart$=i=new Pn(e.insertBefore(yn(),r),r,void 0,t??{})}return i._$AI(s),i};const ci=globalThis;class pt extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=gc(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Xt}}pt._$litElement$=!0,pt.finalized=!0,ci.litElementHydrateSupport?.({LitElement:pt});const _c=ci.litElementPolyfillSupport;_c?.({LitElement:pt});(ci.litElementVersions??=[]).push("4.2.2");const gs=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};const vc={attribute:!0,type:String,converter:Qn,reflect:!1,hasChanged:ri},yc=(s=vc,e,t)=>{const{kind:n,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),n==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(t.name,s),n==="accessor"){const{name:o}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,s,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,s,a),a}}}if(n==="setter"){const{name:o}=t;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,s,!0,a)}}throw Error("Unsupported decorator location: "+n)};function _t(s){return(e,t)=>typeof t=="object"?yc(s,e,t):((n,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,n),o?Object.getOwnPropertyDescriptor(i,r):void 0})(s,e,t)}function ve(s){return _t({...s,state:!0,attribute:!1})}function so(s){return s!==null&&typeof s=="object"&&"name"in s&&typeof s.name=="string"}function io(s){return s!==null&&typeof s=="object"&&"step"in s&&typeof s.step=="number"&&"alt"in s&&typeof s.alt=="number"&&!isNaN(s.step)&&!isNaN(s.alt)}var ro=[0,2,4,-1,1,3,5],oo=ro.map(s=>Math.floor(s*7/12));function ao(s){const{step:e,alt:t,oct:n,dir:i=1}=s,r=ro[e]+7*t;if(n===void 0)return[i*r];const o=n-oo[e]-4*t;return[i*r,i*o]}var bc=[3,0,4,1,5,2,6];function co(s){const[e,t,n]=s,i=bc[wc(e)],r=Math.floor((e+1)/7);if(t===void 0)return{step:i,alt:r,dir:n};const o=t+4*r+oo[i];return{step:i,alt:r,oct:o,dir:n}}function wc(s){const e=(s+1)%7;return e<0?7+e:e}var vr=(s,e)=>Array(Math.abs(e)+1).join(s),Bs=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),xc="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Tc="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Mc=new RegExp("^"+xc+"|"+Tc+"$");function Ac(s){const e=Mc.exec(`${s}`);return e===null?["",""]:e[1]?[e[1],e[2]]:[e[4],e[3]]}var yr={};function Ce(s){return typeof s=="string"?yr[s]||(yr[s]=Cc(s)):io(s)?Ce(Pc(s)):so(s)?Ce(s.name):Bs}var br=[0,2,4,5,7,9,11],lo="PMMPPMM";function Cc(s){const e=Ac(s);if(e[0]==="")return Bs;const t=+e[0],n=e[1],i=(Math.abs(t)-1)%7,r=lo[i];if(r==="M"&&n==="P")return Bs;const o=r==="M"?"majorable":"perfectable",a=""+t+n,c=t<0?-1:1,l=t===8||t===-8?t:c*(i+1),u=Sc(o,n),h=Math.floor((Math.abs(t)-1)/7),d=c*(br[i]+u+12*h),f=(c*(br[i]+u)%12+12)%12,p=ao({step:i,alt:u,oct:h,dir:c});return{empty:!1,name:a,num:t,q:n,step:i,alt:u,dir:c,type:o,simple:l,semitones:d,chroma:f,coord:p,oct:h}}function li(s,e){const[t,n=0]=s,i=t*7+n*12<0,r=e||i?[-t,-n,-1]:[t,n,1];return Ce(co(r))}function Sc(s,e){return e==="M"&&s==="majorable"||e==="P"&&s==="perfectable"?0:e==="m"&&s==="majorable"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?-1*(s==="perfectable"?e.length:e.length+1):0}function Pc(s){const{step:e,alt:t,oct:n=0,dir:i}=s;if(!i)return"";const r=e+1+7*n,o=r===0?e+1:r,a=i<0?"-":"",c=lo[e]==="M"?"majorable":"perfectable";return a+o+kc(c,t)}function kc(s,e){return e===0?s==="majorable"?"M":"P":e===-1&&s==="majorable"?"m":e>0?vr("A",e):vr("d",s==="perfectable"?e:e+1)}var wr=(s,e)=>Array(Math.abs(e)+1).join(s),uo=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),xr=new Map,Nc=s=>"CDEFGAB".charAt(s),Oc=s=>s<0?wr("b",-s):wr("#",s),Ec=s=>s[0]==="b"?-s.length:s.length;function ae(s){const e=JSON.stringify(s),t=xr.get(e);if(t)return t;const n=typeof s=="string"?$c(s):io(s)?ae(Vc(s)):so(s)?ae(s.name):uo;return xr.set(e,n),n}var Ic=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function ui(s){const e=Ic.exec(s);return e?[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]:["","","",""]}function Dc(s){return ae(co(s))}var Rc=(s,e)=>(s%e+e)%e,qs=[0,2,4,5,7,9,11];function $c(s){const e=ui(s);if(e[0]===""||e[3]!=="")return uo;const t=e[0],n=e[1],i=e[2],r=(t.charCodeAt(0)+3)%7,o=Ec(n),a=i.length?+i:void 0,c=ao({step:r,alt:o,oct:a}),l=t+n+i,u=t+n,h=(qs[r]+o+120)%12,d=a===void 0?Rc(qs[r]+o,12)-1188:qs[r]+o+12*(a+1),f=d>=0&&d<=127?d:null,p=a===void 0?null:Math.pow(2,(d-69)/12)*440;return{empty:!1,acc:n,alt:o,chroma:h,coord:c,freq:p,height:d,letter:t,midi:f,name:l,oct:a,pc:u,step:r}}function Vc(s){const{step:e,alt:t,oct:n}=s,i=Nc(e);if(!i)return"";const r=i+Oc(t);return n||n===0?r+n:r}function Xe(s,e){const t=ae(s),n=Array.isArray(e)?e:Ce(e).coord;if(t.empty||!n||n.length<2)return"";const i=t.coord,r=i.length===1?[i[0]+n[0]]:[i[0]+n[0],i[1]+n[1]];return Dc(r).name}function ho(s,e){const t=s.length;return n=>{if(!e)return"";const i=n<0?(t- -n%t)%t:n%t,r=Math.floor(n/t),o=Xe(e,[0,r]);return Xe(o,s[i])}}function es(s,e){const t=ae(s),n=ae(e);if(t.empty||n.empty)return"";const i=t.coord,r=n.coord,o=r[0]-i[0],a=i.length===2&&r.length===2?r[1]-i[1]:-Math.floor(o*7/12),c=n.height===t.height&&n.midi!==null&&t.oct===n.oct&&t.step>n.step;return li([o,a],c).name}function Fc(s,e){const t=[];for(;e--;t[e]=e+s);return t}function qc(s,e){const t=[];for(;e--;t[e]=s-e);return t}function Lc(s,e){return s<e?Fc(s,e-s+1):qc(s,s-e+1)}function hi(s,e){const t=e.length,n=(s%t+t)%t;return e.slice(n,t).concat(e.slice(0,n))}function po(s){return s.filter(e=>e===0||e)}var kt={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},fo=s=>Number(s).toString(2).padStart(12,"0"),Tr=s=>parseInt(s,2),jc=/^[01]{12}$/;function mo(s){return jc.test(s)}var Wc=s=>typeof s=="number"&&s>=0&&s<=4095,Bc=s=>s&&mo(s.chroma),Mr={[kt.chroma]:kt};function Nt(s){const e=mo(s)?s:Wc(s)?fo(s):Array.isArray(s)?Yc(s):Bc(s)?s.chroma:kt.chroma;return Mr[e]=Mr[e]||Xc(e)}var zc=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Uc(s){const e=[];for(let t=0;t<12;t++)s.charAt(t)==="1"&&e.push(zc[t]);return e}function Gc(s,e=!0){const n=Nt(s).chroma.split("");return po(n.map((i,r)=>{const o=hi(r,n);return e&&o[0]==="0"?null:o.join("")}))}function Hc(s){const e=Nt(s).setNum;return t=>{const n=Nt(t).setNum;return e&&e!==n&&(n&e)===n}}function go(s){const e=Nt(s).setNum;return t=>{const n=Nt(t).setNum;return e&&e!==n&&(n|e)===n}}function Zc(s){const e=s.split("");return e.map((t,n)=>hi(n,e).join(""))}function Xc(s){const e=Tr(s),t=Zc(s).map(Tr).filter(r=>r>=2048).sort()[0],n=fo(t),i=Uc(s);return{empty:!1,name:"",setNum:e,chroma:s,normalized:n,intervals:i}}function Yc(s){if(s.length===0)return kt.chroma;let e;const t=[0,0,0,0,0,0,0,0,0,0,0,0];for(let n=0;n<s.length;n++)e=ae(s[n]),e.empty&&(e=Ce(s[n])),e.empty||(t[e.chroma]=1);return t.join("")}var Kc=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Qc=Kc,Jc={...kt,name:"",quality:"Unknown",intervals:[],aliases:[]},di=[],gn={};function el(s){return gn[s]||Jc}function pi(){return di.slice()}function tl(s,e,t){const n=sl(s),i={...Nt(s),name:t||"",quality:n,intervals:s,aliases:e};di.push(i),i.name&&(gn[i.name]=i),gn[i.setNum]=i,gn[i.chroma]=i,i.aliases.forEach(r=>nl(i,r))}function nl(s,e){gn[e]=s}function sl(s){const e=t=>s.indexOf(t)!==-1;return e("5A")?"Augmented":e("3M")?"Major":e("5d")?"Diminished":e("3m")?"Minor":"Unknown"}Qc.forEach(([s,e,t])=>tl(s.split(" "),t.split(" "),e));di.sort((s,e)=>s.setNum-e.setNum);var il=s=>{const e=s.reduce((t,n)=>{const i=ae(n).chroma;return i!==void 0&&(t[i]=t[i]||ae(n).name),t},{});return t=>e[t]};function rl(s,e={}){const t=s.map(i=>ae(i).pc).filter(i=>i);return ae.length===0?[]:dl(t,1,e).filter(i=>i.weight).sort((i,r)=>r.weight-i.weight).map(i=>i.name)}var _s={anyThirds:384,perfectFifth:16,nonPerfectFifths:40,anySeventh:3},vs=s=>e=>!!(e&s),ol=vs(_s.anyThirds),al=vs(_s.perfectFifth),cl=vs(_s.anySeventh),ll=vs(_s.nonPerfectFifths);function ul(s){const e=parseInt(s.chroma,2);return ol(e)&&al(e)&&cl(e)}function hl(s){const e=parseInt(s,2);return ll(e)?s:(e|16).toString(2)}function dl(s,e,t){const n=s[0],i=ae(n).chroma,r=il(s),o=Gc(s,!1),a=[];return o.forEach((c,l)=>{const u=t.assumePerfectFifth&&hl(c);pi().filter(d=>t.assumePerfectFifth&&ul(d)?d.chroma===u:d.chroma===c).forEach(d=>{const f=d.aliases[0],p=r(l);l!==i?a.push({weight:.5*e,name:`${p}${f}/${n}`}):a.push({weight:1*e,name:`${p}${f}`})})}),a}function pl(){return"1P 2M 3M 4P 5P 6m 7m".split(" ")}var _o=Ce,fl=s=>Ce(s).name,ml=s=>Ce(s).semitones,gl=s=>Ce(s).q,_l=s=>Ce(s).num;function vl(s){const e=Ce(s);return e.empty?"":e.simple+e.q}function yl(s){const e=Ce(s);if(e.empty)return"";const t=(7-e.step)%7,n=e.type==="perfectable"?-e.alt:-(e.alt+1);return Ce({step:t,alt:n,oct:e.oct,dir:e.dir}).name}var bl=[1,2,2,3,3,4,5,5,6,6,7,7],wl="P m M m M P d P m M m M".split(" ");function fi(s){const e=s<0?-1:1,t=Math.abs(s),n=t%12,i=Math.floor(t/12);return e*(bl[n]+7*i)+wl[n]}var xl=es,vo=bo((s,e)=>[s[0]+e[0],s[1]+e[1]]),Tl=s=>e=>vo(s,e),yo=bo((s,e)=>[s[0]-e[0],s[1]-e[1]]);function Ml(s,e){const t=_o(s);if(t.empty)return"";const[n,i,r]=t.coord;return li([n+e,i,r]).name}var Al={names:pl,get:_o,name:fl,num:_l,semitones:ml,quality:gl,fromSemitones:fi,distance:xl,invert:yl,simplify:vl,add:vo,addTo:Tl,subtract:yo,transposeFifths:Ml};function bo(s){return(e,t)=>{const n=Ce(e).coord,i=Ce(t).coord;if(n&&i){const r=s(n,i);return li(r).name}}}var Cl=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Sl=Cl,Pl={...kt,intervals:[],aliases:[]},wo=[],_n={};function xo(s){return _n[s]||Pl}function kl(){return wo.slice()}function Nl(s,e,t=[]){const n={...Nt(s),name:e,intervals:s,aliases:t};return wo.push(n),_n[n.name]=n,_n[n.setNum]=n,_n[n.chroma]=n,n.aliases.forEach(i=>Ol(n,i)),n}function Ol(s,e){_n[e]=s}Sl.forEach(([s,e,...t])=>Nl(s.split(" "),e,t));var To={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function mi(s){const[e,t,n,i]=ui(s);return e===""?Ls("",s):e==="A"&&i==="ug"?Ls("","aug"):Ls(e+t,n+i)}function Ls(s,e){const t=e.split("/");if(t.length===1)return[s,t[0],""];const[n,i,r,o]=ui(t[1]);return n!==""&&r===""&&o===""?[s,t[0],n+i]:[s,e,""]}function Be(s){if(Array.isArray(s))return Xn(s[1]||"",s[0],s[2]);if(s==="")return To;{const[e,t,n]=mi(s),i=Xn(t,e,n);return i.empty?Xn(s):i}}function Xn(s,e,t){const n=el(s),i=ae(e||""),r=ae(t||"");if(n.empty||e&&i.empty||t&&r.empty)return To;const o=es(i.pc,r.pc),a=n.intervals.indexOf(o),c=a>=0,l=c?r:ae(""),u=a===-1?NaN:a+1,h=r.pc&&r.pc!==i.pc,d=Array.from(n.intervals);if(c)for(let g=1;g<u;g++){const v=d[0][0],T=d[0][1],x=parseInt(v,10)+7;d.push(`${x}${T}`),d.shift()}else if(h){const g=yo(es(i.pc,r.pc),"8P");g&&d.unshift(g)}const f=i.empty?[]:d.map(g=>Xe(i.pc,g));s=n.aliases.indexOf(s)!==-1?s:n.aliases[0];const p=`${i.empty?"":i.pc}${s}${c&&u>1?"/"+l.pc:h?"/"+r.pc:""}`,m=`${e?i.pc+" ":""}${n.name}${c&&u>1?" over "+l.pc:h?" over "+r.pc:""}`;return{...n,name:m,symbol:p,tonic:i.pc,type:n.name,root:l.pc,bass:h?r.pc:"",intervals:d,rootDegree:u,notes:f}}var El=Be;function Il(s,e){const[t,n,i]=mi(s);if(!t)return s;const r=Xe(i,e),o=r?"/"+r:"";return Xe(t,e)+n+o}function Dl(s){const e=Be(s),t=go(e.chroma);return kl().filter(n=>t(n.chroma)).map(n=>n.name)}function Rl(s){const e=Be(s),t=go(e.chroma);return pi().filter(n=>t(n.chroma)).map(n=>e.tonic+n.aliases[0])}function $l(s){const e=Be(s),t=Hc(e.chroma);return pi().filter(n=>t(n.chroma)).map(n=>e.tonic+n.aliases[0])}function Vl(s,e){const t=Be(s),n=e||t.tonic;return!n||t.empty?[]:t.intervals.map(i=>Xe(n,i))}function Fl(s,e){const t=Be(s),n=e||t.tonic,i=ho(t.intervals,n);return r=>r?i(r>0?r-1:r):""}function ql(s,e){const t=Be(s),n=e||t.tonic;return ho(t.intervals,n)}var Mo={getChord:Xn,get:Be,detect:rl,chordScales:Dl,extended:Rl,reduced:$l,tokenize:mi,transpose:Il,degrees:Fl,steps:ql,notes:Vl,chord:El},Ll=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],jl=Ll;jl.forEach(([s,e,t])=>void 0);function Wl(s){return+s>=0&&+s<=127}function Bl(s){if(Wl(s))return+s;const e=ae(s);return e.empty?null:e.midi}var zl=Math.log(2),Ul=Math.log(440);function Ao(s){const e=12*(Math.log(s)-Ul)/zl+69;return Math.round(e*100)/100}var Gl="C C# D D# E F F# G G# A A# B".split(" "),Hl="C Db D Eb E F Gb G Ab A Bb B".split(" ");function Rt(s,e={}){if(isNaN(s)||s===-1/0||s===1/0)return"";s=Math.round(s);const n=(e.sharps===!0?Gl:Hl)[s%12];if(e.pitchClass)return n;const i=Math.floor(s/12)-1;return n+i}var Zl=["C","D","E","F","G","A","B"],Co=s=>s.name,So=s=>s.map(ae).filter(e=>!e.empty);function Xl(s){return s===void 0?Zl.slice():Array.isArray(s)?So(s).map(Co):[]}var ze=ae,Yl=s=>ze(s).name,xn=s=>ze(s).pc,Kl=s=>ze(s).acc,Ql=s=>ze(s).oct,Jl=s=>ze(s).midi,eu=s=>ze(s).freq,tu=s=>ze(s).chroma;function nu(s){return Rt(s)}function su(s){return Rt(Ao(s))}function iu(s){return Rt(Ao(s),{sharps:!0})}function ru(s){return Rt(s,{sharps:!0})}var ou=es,$t=Xe,au=Xe,Po=s=>e=>$t(e,s),cu=Po,ko=s=>e=>$t(s,e),lu=ko;function No(s,e){return $t(s,[e,0])}var uu=No;function hu(s,e){return $t(s,[0,e])}var gi=(s,e)=>s.height-e.height,du=(s,e)=>e.height-s.height;function Oo(s,e){return e=e||gi,So(s).sort(e).map(Co)}function pu(s){return Oo(s,gi).filter((e,t,n)=>t===0||e!==n[t-1])}var fu=s=>{const e=ze(s);return e.empty?"":Rt(e.midi||e.chroma,{sharps:e.alt>0,pitchClass:e.midi===null})};function _i(s,e){const t=ze(s);if(t.empty)return"";const n=ze(e||Rt(t.midi||t.chroma,{sharps:t.alt<0,pitchClass:!0}));if(n.empty||n.chroma!==t.chroma)return"";if(t.oct===void 0)return n.pc;const i=t.chroma-t.alt,r=n.chroma-n.alt,o=i>11||r<0?-1:i<0||r>11?1:0,a=t.oct+o;return n.pc+a}var et={names:Xl,get:ze,name:Yl,pitchClass:xn,accidentals:Kl,octave:Ql,midi:Jl,ascending:gi,descending:du,distance:ou,sortedNames:Oo,sortedUniqNames:pu,fromMidi:nu,fromMidiSharps:ru,freq:eu,fromFreq:su,fromFreqSharps:iu,chroma:tu,transpose:$t,tr:au,transposeBy:Po,trBy:cu,transposeFrom:ko,trFrom:lu,transposeFifths:No,transposeOctaves:hu,trFifths:uu,simplify:fu,enharmonic:_i},vi=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],Ar={...kt,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},mu=vi.map(gu),zs={};mu.forEach(s=>{zs[s.name]=s,s.aliases.forEach(e=>{zs[e]=s})});function Eo(s){return typeof s=="string"?zs[s.toLowerCase()]||Ar:s&&s.name?Eo(s.name):Ar}function gu(s){const[e,t,n,i,r,o,a]=s,c=a?[a]:[],l=Number(t).toString(2);return{empty:!1,intervals:xo(i).intervals,modeNum:e,chroma:l,normalized:l,name:i,setNum:t,alt:n,triad:r,seventh:o,aliases:c}}function Io(s){return(e,t)=>{const n=Eo(e);if(n.empty)return[];const i=hi(n.modeNum,s),r=n.intervals.map(o=>Xe(t,o));return i.map((o,a)=>r[a]+o)}}Io(vi.map(s=>s[4]));Io(vi.map(s=>s[5]));function Do(s){const e=po(s.map(t=>typeof t=="number"?t:Bl(t)));return!s.length||e.length!==s.length?[]:e.reduce((t,n)=>{const i=t[t.length-1];return t.concat(Lc(i,n).slice(1))},[e[0]])}function _u(s,e){return Do(s).map(t=>Rt(t,e))}var vu={numeric:Do,chromatic:_u},yu={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function bu(s){if(typeof s!="string")return["",""];const e=s.indexOf(" "),t=ae(s.substring(0,e));if(t.empty){const i=ae(s);return i.empty?["",s.toLowerCase()]:[i.name,""]}const n=s.substring(t.name.length+1).toLowerCase();return[t.name,n.length?n:""]}function wu(s){const e=Array.isArray(s)?s:bu(s),t=ae(e[0]).name,n=xo(e[1]);if(n.empty)return yu;const i=n.name,r=t?n.intervals.map(a=>Xe(t,a)):[],o=t?t+" "+i:i;return{...n,name:o,type:i,tonic:t,notes:r}}var xu=(s,e)=>{if(!e||!e.length)return s[0];const t=i=>et.midi(i[i.length-1])||0,n=i=>Math.abs(t(e)-t(i));return s.sort((i,r)=>n(i)-n(r))[0]},Tu={topNoteDiff:xu},Mu={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"]},Ro={m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},Au={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"],m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},$o=Ro;function Cu(s,e=$o){if(e[s])return e[s];const{aliases:t}=Mo.get("C"+s),n=Object.keys(e).find(i=>t.includes(i))||"";if(n!==void 0)return e[n]}var Us={lookup:Cu,lefthand:Ro,triads:Mu,all:Au,defaultDictionary:$o},Vo=["C3","C5"],Su=Us.all,Pu=Tu.topNoteDiff;function Cr(s,e=Vo,t=Su,n=Pu,i){const r=ku(s,e,t);return!i||!i.length?r[0]:n(r,i)}function ku(s,e=Vo,t=Us.triads){const[n,i]=Mo.tokenize(s),r=Us.lookup(i,t);if(!r)return[];const o=r.map(c=>c.split(" ")),a=vu.chromatic(e);return o.reduce((c,l)=>{const u=l.map(p=>Al.subtract(p,l[0])||""),h=et.transpose(n,l[0]),f=a.filter(p=>et.chroma(p)===et.chroma(h)).filter(p=>(et.midi(et.transpose(p,u[u.length-1]))||0)<=(et.midi(e[1])||0)).map(p=>et.enharmonic(p,h)).map(p=>u.map(m=>et.transpose(p,m)));return c.concat(f)},[])}var Nu=Object.defineProperty,Ou=Object.getOwnPropertyDescriptor,yi=(s,e,t,n)=>{for(var i=n>1?void 0:n?Ou(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Nu(e,t,i),i};let Tn=class extends pt{constructor(){super(...arguments),this.value="",this.error=""}render(){return H`
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

        ${this.error?H`<div class="error">${this.error}</div>`:H`<div class="hint">Separate chords with spaces, <code>|</code>, <code>&gt;</code>, <code>→</code>, <code>-</code>, or commas — any notation works.</div>`}
      </div>
    `}onInput(s){const e=s.target;this.value=e.value,this.error&&(this.error="")}onKeydown(s){s.key==="Enter"&&(s.preventDefault(),this.parseAndEmit())}parseAndEmit(){const s=this.parseProgression(this.value);if(!s.length){this.error="No valid chord symbols were found.";return}this.error="";const e={progression:s,source:this.value};this.dispatchEvent(new CustomEvent("progression-parsed",{detail:e,bubbles:!0,composed:!0}))}clearInput(){this.value="",this.error="",this.dispatchEvent(new CustomEvent("progression-parsed",{detail:{progression:[],source:""},bubbles:!0,composed:!0}))}parseProgression(s){const e=this.tokenize(s),t=[];for(const n of e){const i=Be(n);i.empty||i.notes.length===0||t.push({symbol:n,tonic:i.tonic,quality:i.quality,notes:i.notes,intervals:i.intervals,aliases:i.aliases})}return t}sanitize(s){return s.replace(/->|→|–|—/g," ").replace(/[|>,;:]/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim()}tokenize(s){const e=this.sanitize(s),t=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,n=e.match(t);return n?n.map(i=>i.trim()):[]}};Tn.styles=ps`
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

    .btn-clear {
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 12px 18px;
      font: inherit;
      font-weight: 700;
      background: transparent;
      color: #666;
      cursor: pointer;
      box-shadow: none;
      transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
    }

    .btn-clear:hover:not(:disabled) {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.2);
      color: #ccc;
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
  `;yi([_t({type:String})],Tn.prototype,"value",2);yi([ve()],Tn.prototype,"error",2);Tn=yi([gs("chord-input")],Tn);var Eu=Object.defineProperty,Iu=Object.getOwnPropertyDescriptor,kn=(s,e,t,n)=>{for(var i=n>1?void 0:n?Iu(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Eu(e,t,i),i};let Ot=class extends pt{constructor(){super(...arguments),this.originalChords=[],this.keyChords=[],this.keyLabel="",this.activeIndex=0}render(){const s=this.keyChords.length>0?this.keyChords:this.originalChords;return H`
      <div class="sequence-track">
        ${Array.from({length:16}).map((e,t)=>{const n=s[t];return H`
            <div 
              class="step-block ${t===this.activeIndex?"active":""}"
              @click=${()=>n&&this.selectChord(t)}
            >
              ${n?H`<span class="chord-symbol">${n.symbol}</span>`:H`<span class="step-index">${t+1}</span>`}
            </div>
          `})}
      </div>
    `}selectChord(s){this.dispatchEvent(new CustomEvent("chord-selected",{detail:s,bubbles:!0,composed:!0}))}};Ot.styles=ps`
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
  `;kn([_t({attribute:!1})],Ot.prototype,"originalChords",2);kn([_t({attribute:!1})],Ot.prototype,"keyChords",2);kn([_t({type:String})],Ot.prototype,"keyLabel",2);kn([_t({type:Number})],Ot.prototype,"activeIndex",2);Ot=kn([gs("progression-stepper")],Ot);const Fo="15.1.22",Sr=(s,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:s}),Pr=(s,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:s}),Gs=(s,e)=>({startTime:e,type:"setValue",value:s}),qo=(s,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:s}),Lo=(s,e,{startTime:t,target:n,timeConstant:i})=>n+(e-n)*Math.exp((t-s)/i),zt=s=>s.type==="exponentialRampToValue",ts=s=>s.type==="linearRampToValue",ht=s=>zt(s)||ts(s),bi=s=>s.type==="setValue",tt=s=>s.type==="setValueCurve",ns=(s,e,t,n)=>{const i=s[e];return i===void 0?n:ht(i)||bi(i)?i.value:tt(i)?i.values[i.values.length-1]:Lo(t,ns(s,e-1,i.startTime,n),i)},kr=(s,e,t,n,i)=>t===void 0?[n.insertTime,i]:ht(t)?[t.endTime,t.value]:bi(t)?[t.startTime,t.value]:tt(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,ns(s,e-1,t.startTime,i)],Hs=s=>s.type==="cancelAndHold",Zs=s=>s.type==="cancelScheduledValues",ut=s=>Hs(s)||Zs(s)?s.cancelTime:zt(s)||ts(s)?s.endTime:s.startTime,Nr=(s,e,t,{endTime:n,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((s-e)/(n-e)):s<n?t:i,Or=(s,e,t,{endTime:n,value:i})=>t+(s-e)/(n-e)*(i-t),jo=(s,e)=>{const t=Math.floor(e);if(t===e)return s[t];const n=Math.ceil(e);return(1-(e-t))*s[t]+(1-(n-e))*s[n]},Du=(s,{duration:e,startTime:t,values:n})=>{const i=(s-t)/e*(n.length-1);return jo(n,i)},Ru=(s,e,t)=>{const n=s.length,i=Math.max(1,Math.floor(t/e*n))+1,r=s instanceof Float32Array?new Float32Array(i):s.slice(0,i);for(let o=0;o<i;o+=1){const c=o/(i-1)*t/e*(n-1);r[o]=jo(s,c)}return r},Bn=s=>s.type==="setTarget";class $u{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=ut(e);if(Hs(e)||Zs(e)){const n=this._automationEvents.findIndex(r=>Zs(e)&&tt(r)?r.startTime+r.duration>=t:ut(r)>=t),i=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),Hs(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&ht(i)){if(r!==void 0&&Bn(r))throw new Error("The internal list is malformed.");const o=r===void 0?i.insertTime:tt(r)?r.startTime+r.duration:ut(r),a=r===void 0?this._defaultValue:tt(r)?r.values[r.values.length-1]:r.value,c=zt(i)?Nr(t,o,a,i):Or(t,o,a,i),l=zt(i)?Sr(c,t,this._currenTime):Pr(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&Bn(r)&&this._automationEvents.push(Gs(this.getValue(t),t)),r!==void 0&&tt(r)&&r.startTime+r.duration>t){const o=t-r.startTime;this._automationEvents[this._automationEvents.length-1]=qo(Ru(r.values,r.duration,o),r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>ut(o)>t),i=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(i!==void 0&&tt(i)&&ut(i)+i.duration>t)return!1;const r=zt(e)?Sr(e.value,e.endTime,this._currenTime):ts(e)?Pr(e.value,t,this._currenTime):e;if(n===-1)this._automationEvents.push(r);else{if(tt(e)&&t+e.duration>ut(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(n=>ut(n)>e);if(t>1){const n=this._automationEvents.slice(t-1),i=n[0];Bn(i)&&n.unshift(Gs(ns(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=n}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>ut(o)>e),n=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&Bn(r)&&(n===void 0||!ht(n)||n.insertTime>e))return Lo(e,ns(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&bi(r)&&(n===void 0||!ht(n)))return r.value;if(r!==void 0&&tt(r)&&(n===void 0||!ht(n)||r.startTime+r.duration>e))return e<r.startTime+r.duration?Du(e,r):r.values[r.values.length-1];if(r!==void 0&&ht(r)&&(n===void 0||!ht(n)))return r.value;if(n!==void 0&&zt(n)){const[o,a]=kr(this._automationEvents,i,r,n,this._defaultValue);return Nr(e,o,a,n)}if(n!==void 0&&ts(n)){const[o,a]=kr(this._automationEvents,i,r,n,this._defaultValue);return Or(e,o,a,n)}return this._defaultValue}}const Vu=s=>({cancelTime:s,type:"cancelAndHold"}),Fu=s=>({cancelTime:s,type:"cancelScheduledValues"}),qu=(s,e)=>({endTime:e,type:"exponentialRampToValue",value:s}),Lu=(s,e)=>({endTime:e,type:"linearRampToValue",value:s}),ju=(s,e,t)=>({startTime:e,target:s,timeConstant:t,type:"setTarget"}),Wu=()=>new DOMException("","AbortError"),Bu=s=>(e,t,[n,i,r],o)=>{s(e[i],[t,n,r],a=>a[0]===t&&a[1]===n,o)},zu=s=>(e,t,n)=>{const i=[];for(let r=0;r<n.numberOfInputs;r+=1)i.push(new Set);s.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},Uu=s=>(e,t)=>{s.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},Kt=new WeakSet,Wo=new WeakMap,wi=new WeakMap,Bo=new WeakMap,xi=new WeakMap,ys=new WeakMap,zo=new WeakMap,Xs=new WeakMap,Ys=new WeakMap,Ks=new WeakMap,Uo={construct(){return Uo}},Gu=s=>{try{const e=new Proxy(s,Uo);new e}catch{return!1}return!0},Er=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Ir=(s,e)=>{const t=[];let n=s.replace(/^[\s]+/,""),i=n.match(Er);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(Er)}return[t.join(";"),n]},Dr=s=>{if(s!==void 0&&!Array.isArray(s))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Rr=s=>{if(!Gu(s))throw new TypeError("The given value for processorCtor should be a constructor.");if(s.prototype===null||typeof s.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},Hu=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>{let f=0;return(p,m,g={credentials:"omit"})=>{const v=u.get(p);if(v!==void 0&&v.has(m))return Promise.resolve();const T=l.get(p);if(T!==void 0){const _=T.get(m);if(_!==void 0)return _}const x=r(p),A=x.audioWorklet===void 0?i(m).then(([_,b])=>{const[w,y]=Ir(_,b),S=`${w};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${y}
})})(window,'_AWGS')`;return t(S)}).then(()=>{const _=d._AWGS.pop();if(_===void 0)throw new SyntaxError;n(x.currentTime,x.sampleRate,()=>_(class{},void 0,(b,w)=>{if(b.trim()==="")throw e();const y=Ys.get(x);if(y!==void 0){if(y.has(b))throw e();Rr(w),Dr(w.parameterDescriptors),y.set(b,w)}else Rr(w),Dr(w.parameterDescriptors),Ys.set(x,new Map([[b,w]]))},x.sampleRate,void 0,void 0))}):Promise.all([i(m),Promise.resolve(s(h,h))]).then(([[_,b],w])=>{const y=f+1;f=y;const[S,P]=Ir(_,b),N=`${S};((AudioWorkletProcessor,registerProcessor)=>{${P}
})(${w?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${w?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${w?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${y}',class extends AudioWorkletProcessor{process(){return !1}})`,D=new Blob([N],{type:"application/javascript; charset=utf-8"}),E=URL.createObjectURL(D);return x.audioWorklet.addModule(E,g).then(()=>{if(a(x))return x;const I=o(x);return I.audioWorklet.addModule(E,g).then(()=>I)}).then(I=>{if(c===null)throw new SyntaxError;try{new c(I,`__sac${y}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(E))});return T===void 0?l.set(p,new Map([[m,A]])):T.set(m,A),A.then(()=>{const _=u.get(p);_===void 0?u.set(p,new Set([m])):_.add(m)}).finally(()=>{const _=l.get(p);_!==void 0&&_.delete(m)}),A}},Ue=(s,e)=>{const t=s.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},bs=(s,e)=>{const t=Array.from(s).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[n]=t;return s.delete(n),n},Go=(s,e,t,n)=>{const i=Ue(s,e),r=bs(i,o=>o[0]===t&&o[1]===n);return i.size===0&&s.delete(e),r},Nn=s=>Ue(zo,s),Qt=s=>{if(Kt.has(s))throw new Error("The AudioNode is already stored.");Kt.add(s),Nn(s).forEach(e=>e(!0))},Ho=s=>"port"in s,On=s=>{if(!Kt.has(s))throw new Error("The AudioNode is not stored.");Kt.delete(s),Nn(s).forEach(e=>e(!1))},Qs=(s,e)=>{!Ho(s)&&e.every(t=>t.size===0)&&On(s)},Zu=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>{const f=new WeakMap;return(p,m,g,v,T)=>{const{activeInputs:x,passiveInputs:A}=r(m),{outputs:_}=r(p),b=a(p),w=y=>{const S=c(m),P=c(p);if(y){const C=Go(A,p,g,v);s(x,p,C,!1),!T&&!h(p)&&t(P,S,g,v),d(m)&&Qt(m)}else{const C=n(x,p,g,v);e(A,v,C,!1),!T&&!h(p)&&i(P,S,g,v);const M=o(m);if(M===0)u(m)&&Qs(m,x);else{const k=f.get(m);k!==void 0&&clearTimeout(k),f.set(m,setTimeout(()=>{u(m)&&Qs(m,x)},M*1e3))}}};return l(_,[m,g,v],y=>y[0]===m&&y[1]===g&&y[2]===v,!0)?(b.add(w),u(p)?s(x,p,[g,v,w],!0):e(A,v,[p,g,w],!0),!0):!1}},Xu=s=>(e,t,[n,i,r],o)=>{const a=e.get(n);a===void 0?e.set(n,new Set([[i,t,r]])):s(a,[i,t,r],c=>c[0]===i&&c[1]===t,o)},Yu=s=>(e,t)=>{const n=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(n).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(n),n.disconnect()};t.addEventListener("ended",i)},Ku=s=>(e,t)=>{s(e).add(t)},Qu={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},Ju=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...Qu,...c},h=n(l,u),d=r(l)?e():null;super(a,!1,h,d),this._nativeAnalyserNode=h}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},xe=(s,e)=>s.context===e,eh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!xe(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},ss=s=>{try{s.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Ke=()=>new DOMException("","IndexSizeError"),Ti=s=>{s.getChannelData=(e=>t=>{try{return e.call(s,t)}catch(n){throw n.code===12?Ke():n}})(s.getChannelData)},th={numberOfChannels:1},nh=(s,e,t,n,i,r,o,a)=>{let c=null;return class Zo{constructor(u){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:h,numberOfChannels:d,sampleRate:f}={...th,...u};c===null&&(c=new i(1,1,44100));const p=n!==null&&e(r,r)?new n({length:h,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,h,f);if(p.numberOfChannels===0)throw t();return typeof p.copyFromChannel!="function"?(o(p),Ti(p)):e(ss,()=>ss(p))||a(p),s.add(p),p}static[Symbol.hasInstance](u){return u!==null&&typeof u=="object"&&Object.getPrototypeOf(u)===Zo.prototype||s.has(u)}}},Pe=-34028234663852886e22,Me=-Pe,st=s=>Kt.has(s),sh={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},ih=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...sh,...u},f=i(h,d),p=o(h),m=p?e():null;super(l,!1,f,m),this._audioBufferSourceNodeRenderer=m,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=t(this,p,f.playbackRate,Me,Pe)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const u=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=u;const h=this._nativeAudioBufferSourceNode.onended;this._onended=h!==null&&h===u?l:h}get playbackRate(){return this._playbackRate}start(l=0,u=0,h){if(this._nativeAudioBufferSourceNode.start(l,u,h),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=h===void 0?[l,u]:[l,u,h]),this.context.state!=="closed"){Qt(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),st(this)&&On(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},rh=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=xe(h,u);if(!d){const f={buffer:h.buffer,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,loop:h.loop,loopEnd:h.loopEnd,loopStart:h.loopStart,playbackRate:h.playbackRate.value};h=e(u,f),o!==null&&h.start(...o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.playbackRate,h.playbackRate):await n(u,l.playbackRate,h.playbackRate),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},oh=s=>"playbackRate"in s,ah=s=>"frequency"in s&&"gain"in s,ch=s=>"offset"in s,lh=s=>!("frequency"in s)&&"gain"in s,uh=s=>"detune"in s&&"frequency"in s&&!("gain"in s),hh=s=>"pan"in s,Ae=s=>Ue(Wo,s),En=s=>Ue(Bo,s),Js=(s,e)=>{const{activeInputs:t}=Ae(s);t.forEach(i=>i.forEach(([r])=>{e.includes(s)||Js(r,[...e,s])}));const n=oh(s)?[s.playbackRate]:Ho(s)?Array.from(s.parameters.values()):ah(s)?[s.Q,s.detune,s.frequency,s.gain]:ch(s)?[s.offset]:lh(s)?[s.gain]:uh(s)?[s.detune,s.frequency]:hh(s)?[s.pan]:[];for(const i of n){const r=En(i);r!==void 0&&r.activeInputs.forEach(([o])=>Js(o,e))}st(s)&&On(s)},Xo=s=>{Js(s.destination,[])},dh=s=>s===void 0||typeof s=="number"||typeof s=="string"&&(s==="balanced"||s==="interactive"||s==="playback"),ph=(s,e,t,n,i,r,o,a,c)=>class extends s{constructor(u={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let h;try{h=new c(u)}catch(p){throw p.code===12&&p.message==="sampleRate is not in range"?t():p}if(h===null)throw n();if(!dh(u.latencyHint))throw new TypeError(`The provided value '${u.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(u.sampleRate!==void 0&&h.sampleRate!==u.sampleRate)throw t();super(h,2);const{latencyHint:d}=u,{sampleRate:f}=h;if(this._baseLatency=typeof h.baseLatency=="number"?h.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=h,c.name==="webkitAudioContext"?(this._nativeGainNode=h.createGain(),this._nativeOscillatorNode=h.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(h.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,h.state==="running"){this._state="suspended";const p=()=>{this._state==="suspended"&&(this._state=null),h.removeEventListener("statechange",p)};h.addEventListener("statechange",p)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Xo(this)}))}createMediaElementSource(u){return new i(this,{mediaElement:u})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(u){return new o(this,{mediaStream:u})}createMediaStreamTrackSource(u){return new a(this,{mediaStreamTrack:u})}resume(){return this._state==="suspended"?new Promise((u,h)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?u():this.resume().then(u,h)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(u=>{throw u===void 0||u.code===15?e():u})}suspend(){return this._nativeAudioContext.suspend().catch(u=>{throw u===void 0?e():u})}},fh=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d=o(h),f=i(h,u,d),p=d?e(a):null;super(l,!1,f,p),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},mh=s=>{const e=new WeakMap,t=async(n,i)=>{const r=i.destination;return e.set(i,r),await s(n,i,r),r};return{render(n,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(n,i)}}},gh=(s,e,t,n,i,r,o,a)=>(c,l)=>{const u=l.listener,h=()=>{const _=new Float32Array(1),b=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),w=o(l);let y=!1,S=[0,0,-1,0,1,0],P=[0,0,0];const C=()=>{if(y)return;y=!0;const D=n(l,256,9,0);D.onaudioprocess=({inputBuffer:E})=>{const I=[r(E,_,0),r(E,_,1),r(E,_,2),r(E,_,3),r(E,_,4),r(E,_,5)];I.some(($,q)=>$!==S[q])&&(u.setOrientation(...I),S=I);const B=[r(E,_,6),r(E,_,7),r(E,_,8)];B.some(($,q)=>$!==P[q])&&(u.setPosition(...B),P=B)},b.connect(D)},M=D=>E=>{E!==S[D]&&(S[D]=E,u.setOrientation(...S))},k=D=>E=>{E!==P[D]&&(P[D]=E,u.setPosition(...P))},N=(D,E,I)=>{const B=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:E});B.connect(b,0,D),B.start(),Object.defineProperty(B.offset,"defaultValue",{get(){return E}});const $=s({context:c},w,B.offset,Me,Pe);return a($,"value",q=>()=>q.call($),q=>F=>{try{q.call($,F)}catch(Z){if(Z.code!==9)throw Z}C(),w&&I(F)}),$.cancelAndHoldAtTime=(q=>w?()=>{throw i()}:(...F)=>{const Z=q.apply($,F);return C(),Z})($.cancelAndHoldAtTime),$.cancelScheduledValues=(q=>w?()=>{throw i()}:(...F)=>{const Z=q.apply($,F);return C(),Z})($.cancelScheduledValues),$.exponentialRampToValueAtTime=(q=>w?()=>{throw i()}:(...F)=>{const Z=q.apply($,F);return C(),Z})($.exponentialRampToValueAtTime),$.linearRampToValueAtTime=(q=>w?()=>{throw i()}:(...F)=>{const Z=q.apply($,F);return C(),Z})($.linearRampToValueAtTime),$.setTargetAtTime=(q=>w?()=>{throw i()}:(...F)=>{const Z=q.apply($,F);return C(),Z})($.setTargetAtTime),$.setValueAtTime=(q=>w?()=>{throw i()}:(...F)=>{const Z=q.apply($,F);return C(),Z})($.setValueAtTime),$.setValueCurveAtTime=(q=>w?()=>{throw i()}:(...F)=>{const Z=q.apply($,F);return C(),Z})($.setValueCurveAtTime),$};return{forwardX:N(0,0,M(0)),forwardY:N(1,0,M(1)),forwardZ:N(2,-1,M(2)),positionX:N(6,0,k(0)),positionY:N(7,0,k(1)),positionZ:N(8,0,k(2)),upX:N(3,0,M(3)),upY:N(4,1,M(4)),upZ:N(5,0,M(5))}},{forwardX:d,forwardY:f,forwardZ:p,positionX:m,positionY:g,positionZ:v,upX:T,upY:x,upZ:A}=u.forwardX===void 0?h():u;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return p},get positionX(){return m},get positionY(){return g},get positionZ(){return v},get upX(){return T},get upY(){return x},get upZ(){return A}}},is=s=>"context"in s,In=s=>is(s[0]),Vt=(s,e,t,n)=>{for(const i of s)if(t(i)){if(n)return!1;throw Error("The set contains at least one similar element.")}return s.add(e),!0},$r=(s,e,[t,n],i)=>{Vt(s,[e,t,n],r=>r[0]===e&&r[1]===t,i)},Vr=(s,[e,t,n],i)=>{const r=s.get(e);r===void 0?s.set(e,new Set([[t,n]])):Vt(r,[t,n],o=>o[0]===t,i)},on=s=>"inputs"in s,rs=(s,e,t,n)=>{if(on(e)){const i=e.inputs[n];return s.connect(i,t,0),[i,t,0]}return s.connect(e,t,n),[e,t,n]},Yo=(s,e,t)=>{for(const n of s)if(n[0]===e&&n[1]===t)return s.delete(n),n;return null},_h=(s,e,t)=>bs(s,n=>n[0]===e&&n[1]===t),Ko=(s,e)=>{if(!Nn(s).delete(e))throw new Error("Missing the expected event listener.")},Qo=(s,e,t)=>{const n=Ue(s,e),i=bs(n,r=>r[0]===t);return n.size===0&&s.delete(e),i},os=(s,e,t,n)=>{on(e)?s.disconnect(e.inputs[n],t,0):s.disconnect(e,t,n)},ee=s=>Ue(wi,s),Mn=s=>Ue(xi,s),Et=s=>Xs.has(s),Yn=s=>!Kt.has(s),Fr=(s,e)=>new Promise(t=>{if(e!==null)t(!0);else{const n=s.createScriptProcessor(256,1,1),i=s.createGain(),r=s.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=s.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(s.destination),a.connect(i),a.disconnect(i),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,u=>u===1)?t(!0):t(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(s.destination)},a.start()}}),js=(s,e)=>{const t=new Map;for(const n of s)for(const i of n){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((n,i)=>e(i,n))},as=s=>"context"in s,vh=s=>{const e=new Map;s.connect=(t=>(n,i=0,r=0)=>{const o=as(n)?t(n,i,r):t(n,i),a=e.get(n);return a===void 0?e.set(n,[{input:r,output:i}]):a.every(c=>c.input!==r||c.output!==i)&&a.push({input:r,output:i}),o})(s.connect.bind(s)),s.disconnect=(t=>(n,i,r)=>{if(t.apply(s),n===void 0)e.clear();else if(typeof n=="number")for(const[o,a]of e){const c=a.filter(l=>l.output!==n);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(n))if(i===void 0)e.delete(n);else{const o=e.get(n);if(o!==void 0){const a=o.filter(c=>c.output!==i&&(c.input!==r||r===void 0));a.length===0?e.delete(n):e.set(n,a)}}for(const[o,a]of e)a.forEach(c=>{as(o)?s.connect(o,c.output,c.input):s.connect(o,c.output)})})(s.disconnect)},yh=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=En(e),{outputs:o}=Ae(s),a=Nn(s),c=l=>{const u=ee(s),h=Mn(e);if(l){const d=Qo(r,s,t);$r(i,s,d,!1),!n&&!Et(s)&&u.connect(h,t)}else{const d=_h(i,s,t);Vr(r,d,!1),!n&&!Et(s)&&u.disconnect(h,t)}};return Vt(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),st(s)?$r(i,s,[t,c],!0):Vr(r,[s,t,c],!0),!0):!1},bh=(s,e,t,n)=>{const{activeInputs:i,passiveInputs:r}=Ae(e),o=Yo(i[n],s,t);return o===null?[Go(r,s,t,n)[2],!1]:[o[2],!0]},wh=(s,e,t)=>{const{activeInputs:n,passiveInputs:i}=En(e),r=Yo(n,s,t);return r===null?[Qo(i,s,t)[1],!1]:[r[2],!0]},Mi=(s,e,t,n,i)=>{const[r,o]=bh(s,t,n,i);if(r!==null&&(Ko(s,r),o&&!e&&!Et(s)&&os(ee(s),ee(t),n,i)),st(t)){const{activeInputs:a}=Ae(t);Qs(t,a)}},Ai=(s,e,t,n)=>{const[i,r]=wh(s,t,n);i!==null&&(Ko(s,i),r&&!e&&!Et(s)&&ee(s).disconnect(Mn(t),n))},xh=(s,e)=>{const t=Ae(s),n=[];for(const i of t.outputs)In(i)?Mi(s,e,...i):Ai(s,e,...i),n.push(i[0]);return t.outputs.clear(),n},Th=(s,e,t)=>{const n=Ae(s),i=[];for(const r of n.outputs)r[1]===t&&(In(r)?Mi(s,e,...r):Ai(s,e,...r),i.push(r[0]),n.outputs.delete(r));return i},Mh=(s,e,t,n,i)=>{const r=Ae(s);return Array.from(r.outputs).filter(o=>o[0]===t&&(n===void 0||o[1]===n)&&(i===void 0||o[2]===i)).map(o=>(In(o)?Mi(s,e,...o):Ai(s,e,...o),r.outputs.delete(o),o[0]))},Ah=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,p,m)=>class extends l{constructor(v,T,x,A){super(x),this._context=v,this._nativeAudioNode=x;const _=u(v);h(_)&&t(Fr,()=>Fr(_,m))!==!0&&vh(x),wi.set(this,x),zo.set(this,new Set),v.state!=="closed"&&T&&Qt(this),s(this,A,x)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(v){this._nativeAudioNode.channelCount=v}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(v){this._nativeAudioNode.channelCountMode=v}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(v){this._nativeAudioNode.channelInterpretation=v}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(v,T=0,x=0){if(T<0||T>=this._nativeAudioNode.numberOfOutputs)throw i();const A=u(this._context),_=p(A);if(d(v)||f(v))throw r();if(is(v)){const y=ee(v);try{const P=rs(this._nativeAudioNode,y,T,x),C=Yn(this);(_||C)&&this._nativeAudioNode.disconnect(...P),this.context.state!=="closed"&&!C&&Yn(v)&&Qt(v)}catch(P){throw P.code===12?r():P}if(e(this,v,T,x,_)){const P=c([this],v);js(P,n(_))}return v}const b=Mn(v);if(b.name==="playbackRate"&&b.maxValue===1024)throw o();try{this._nativeAudioNode.connect(b,T),(_||Yn(this))&&this._nativeAudioNode.disconnect(b,T)}catch(y){throw y.code===12?r():y}if(yh(this,v,T,_)){const y=c([this],v);js(y,n(_))}}disconnect(v,T,x){let A;const _=u(this._context),b=p(_);if(v===void 0)A=xh(this,b);else if(typeof v=="number"){if(v<0||v>=this.numberOfOutputs)throw i();A=Th(this,b,v)}else{if(T!==void 0&&(T<0||T>=this.numberOfOutputs)||is(v)&&x!==void 0&&(x<0||x>=v.numberOfInputs))throw i();if(A=Mh(this,b,v,T,x),A.length===0)throw r()}for(const w of A){const y=c([this],w);js(y,a)}}},Ch=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>(f,p,m,g=null,v=null)=>{const T=m.value,x=new $u(T),A=p?n(x):null,_={get defaultValue(){return T},get maxValue(){return g===null?m.maxValue:g},get minValue(){return v===null?m.minValue:v},get value(){return m.value},set value(b){m.value=b,_.setValueAtTime(b,f.context.currentTime)},cancelAndHoldAtTime(b){if(typeof m.cancelAndHoldAtTime=="function")A===null&&x.flush(f.context.currentTime),x.add(i(b)),m.cancelAndHoldAtTime(b);else{const w=Array.from(x).pop();A===null&&x.flush(f.context.currentTime),x.add(i(b));const y=Array.from(x).pop();m.cancelScheduledValues(b),w!==y&&y!==void 0&&(y.type==="exponentialRampToValue"?m.exponentialRampToValueAtTime(y.value,y.endTime):y.type==="linearRampToValue"?m.linearRampToValueAtTime(y.value,y.endTime):y.type==="setValue"?m.setValueAtTime(y.value,y.startTime):y.type==="setValueCurve"&&m.setValueCurveAtTime(y.values,y.startTime,y.duration))}return _},cancelScheduledValues(b){return A===null&&x.flush(f.context.currentTime),x.add(r(b)),m.cancelScheduledValues(b),_},exponentialRampToValueAtTime(b,w){if(b===0)throw new RangeError;if(!Number.isFinite(w)||w<0)throw new RangeError;const y=f.context.currentTime;return A===null&&x.flush(y),Array.from(x).length===0&&(x.add(l(T,y)),m.setValueAtTime(T,y)),x.add(o(b,w)),m.exponentialRampToValueAtTime(b,w),_},linearRampToValueAtTime(b,w){const y=f.context.currentTime;return A===null&&x.flush(y),Array.from(x).length===0&&(x.add(l(T,y)),m.setValueAtTime(T,y)),x.add(a(b,w)),m.linearRampToValueAtTime(b,w),_},setTargetAtTime(b,w,y){return A===null&&x.flush(f.context.currentTime),x.add(c(b,w,y)),m.setTargetAtTime(b,w,y),_},setValueAtTime(b,w){return A===null&&x.flush(f.context.currentTime),x.add(l(b,w)),m.setValueAtTime(b,w),_},setValueCurveAtTime(b,w,y){const S=b instanceof Float32Array?b:new Float32Array(b);if(h!==null&&h.name==="webkitAudioContext"){const P=w+y,C=f.context.sampleRate,M=Math.ceil(w*C),k=Math.floor(P*C),N=k-M,D=new Float32Array(N);for(let I=0;I<N;I+=1){const B=(S.length-1)/y*((M+I)/C-w),$=Math.floor(B),q=Math.ceil(B);D[I]=$===q?S[$]:(1-(B-$))*S[$]+(1-(q-B))*S[q]}A===null&&x.flush(f.context.currentTime),x.add(u(D,w,y)),m.setValueCurveAtTime(D,w,y);const E=k/C;E<P&&d(_,D[D.length-1],E),d(_,S[S.length-1],P)}else A===null&&x.flush(f.context.currentTime),x.add(u(S,w,y)),m.setValueCurveAtTime(S,w,y);return _}};return t.set(_,m),e.set(_,f),s(_,A),_},Sh=s=>({replay(e){for(const t of s)if(t.type==="exponentialRampToValue"){const{endTime:n,value:i}=t;e.exponentialRampToValueAtTime(i,n)}else if(t.type==="linearRampToValue"){const{endTime:n,value:i}=t;e.linearRampToValueAtTime(i,n)}else if(t.type==="setTarget"){const{startTime:n,target:i,timeConstant:r}=t;e.setTargetAtTime(i,n,r)}else if(t.type==="setValue"){const{startTime:n,value:i}=t;e.setValueAtTime(i,n)}else if(t.type==="setValueCurve"){const{duration:n,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,n)}else throw new Error("Can't apply an unknown automation.")}});class Jo{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((n,i)=>e.call(t,n,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const Ph={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},kh=(s,e,t,n,i,r,o,a,c,l,u,h,d,f)=>class extends e{constructor(m,g,v){var T;const x=a(m),A=c(x),_=u({...Ph,...v});d(_);const b=Ys.get(x),w=b?.get(g),y=A||x.state!=="closed"?x:(T=o(x))!==null&&T!==void 0?T:x,S=i(y,A?null:m.baseLatency,l,g,w,_),P=A?n(g,_,w):null;super(m,!0,S,P);const C=[];S.parameters.forEach((k,N)=>{const D=t(this,A,k);C.push([N,D])}),this._nativeAudioWorkletNode=S,this._onprocessorerror=null,this._parameters=new Jo(C),A&&s(x,this);const{activeInputs:M}=r(this);h(S,M)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(m){const g=typeof m=="function"?f(this,m):null;this._nativeAudioWorkletNode.onprocessorerror=g;const v=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=v!==null&&v===g?m:v}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function cs(s,e,t,n,i){if(typeof s.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),s.copyFromChannel(e[t],n,i);else{const r=s.getChannelData(n);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const ea=(s,e,t,n,i)=>{typeof s.copyToChannel=="function"?e[t].byteLength!==0&&s.copyToChannel(e[t],n,i):e[t].byteLength!==0&&s.getChannelData(n).set(e[t],i)},ls=(s,e)=>{const t=[];for(let n=0;n<s;n+=1){const i=[],r=typeof e=="number"?e:e[n];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},Nh=(s,e)=>{const t=Ue(Ks,s),n=ee(e);return Ue(t,n)},Oh=async(s,e,t,n,i,r,o)=>{const a=e===null?Math.ceil(s.context.length/128)*128:e.length,c=n.channelCount*n.numberOfInputs,l=i.reduce((g,v)=>g+v,0),u=l===0?null:t.createBuffer(l,a,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const h=Ae(s),d=await Nh(t,s),f=ls(n.numberOfInputs,n.channelCount),p=ls(n.numberOfOutputs,i),m=Array.from(s.parameters.keys()).reduce((g,v)=>({...g,[v]:new Float32Array(128)}),{});for(let g=0;g<a;g+=128){if(n.numberOfInputs>0&&e!==null)for(let v=0;v<n.numberOfInputs;v+=1)for(let T=0;T<n.channelCount;T+=1)cs(e,f[v],T,T,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:v},T)=>{cs(e,m,v,c+T,g)});for(let v=0;v<n.numberOfInputs;v+=1)for(let T=0;T<i[v];T+=1)p[v][T].byteLength===0&&(p[v][T]=new Float32Array(128));try{const v=f.map((x,A)=>h.activeInputs[A].size===0?[]:x),T=o(g/t.sampleRate,t.sampleRate,()=>d.process(v,p,m));if(u!==null)for(let x=0,A=0;x<n.numberOfOutputs;x+=1){for(let _=0;_<i[x];_+=1)ea(u,p[x],_,A+_,g);A+=i[x]}if(!T)break}catch(v){s.dispatchEvent(new ErrorEvent("processorerror",{colno:v.colno,filename:v.filename,lineno:v.lineno,message:v.message}));break}}return u},Eh=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,p,m)=>(g,v,T)=>{const x=new WeakMap;let A=null;const _=async(b,w)=>{let y=u(b),S=null;const P=xe(y,w),C=Array.isArray(v.outputChannelCount)?v.outputChannelCount:Array.from(v.outputChannelCount);if(h===null){const M=C.reduce((E,I)=>E+I,0),k=i(w,{channelCount:Math.max(1,M),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,M)}),N=[];for(let E=0;E<b.numberOfOutputs;E+=1)N.push(n(w,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:C[E]}));const D=o(w,{channelCount:v.channelCount,channelCountMode:v.channelCountMode,channelInterpretation:v.channelInterpretation,gain:1});D.connect=e.bind(null,N),D.disconnect=c.bind(null,N),S=[k,N,D]}else P||(y=new h(w,g));if(x.set(w,S===null?y:S[2]),S!==null){if(A===null){if(T===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const I=b.channelCount*b.numberOfInputs,B=T.parameterDescriptors===void 0?0:T.parameterDescriptors.length,$=I+B;A=Oh(b,$===0?null:await(async()=>{const F=new d($,Math.ceil(b.context.length/128)*128,w.sampleRate),Z=[],Oe=[];for(let te=0;te<v.numberOfInputs;te+=1)Z.push(o(F,{channelCount:v.channelCount,channelCountMode:v.channelCountMode,channelInterpretation:v.channelInterpretation,gain:1})),Oe.push(i(F,{channelCount:v.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:v.channelCount}));const Ee=await Promise.all(Array.from(b.parameters.values()).map(async te=>{const Te=r(F,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:te.value});return await f(F,te,Te.offset),Te})),z=n(F,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,I+B)});for(let te=0;te<v.numberOfInputs;te+=1){Z[te].connect(Oe[te]);for(let Te=0;Te<v.channelCount;Te+=1)Oe[te].connect(z,Te,te*v.channelCount+Te)}for(const[te,Te]of Ee.entries())Te.connect(z,0,I+te),Te.start(0);return z.connect(F.destination),await Promise.all(Z.map(te=>p(b,F,te))),m(F)})(),w,v,C,T,l)}const M=await A,k=t(w,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[N,D,E]=S;M!==null&&(k.buffer=M,k.start(0)),k.connect(N);for(let I=0,B=0;I<b.numberOfOutputs;I+=1){const $=D[I];for(let q=0;q<C[I];q+=1)N.connect($,B+q,q);B+=C[I]}return E}if(P)for(const[M,k]of b.parameters.entries())await s(w,k,y.parameters.get(M));else for(const[M,k]of b.parameters.entries())await f(w,k,y.parameters.get(M));return await p(b,w,y),y};return{render(b,w){a(w,b);const y=x.get(w);return y!==void 0?Promise.resolve(y):_(b,w)}}},Ih=(s,e,t,n,i,r,o,a,c,l,u,h,d,f,p,m,g,v,T,x)=>class extends p{constructor(_,b){super(_,b),this._nativeContext=_,this._audioWorklet=s===void 0?void 0:{addModule:(w,y)=>s(this,w,y)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(_,b,w){return new t({length:b,numberOfChannels:_,sampleRate:w})}createBufferSource(){return new n(this)}createChannelMerger(_=6){return new r(this,{numberOfInputs:_})}createChannelSplitter(_=6){return new o(this,{numberOfOutputs:_})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(_=1){return new u(this,{maxDelayTime:_})}createDynamicsCompressor(){return new h(this)}createGain(){return new d(this)}createIIRFilter(_,b){return new f(this,{feedback:b,feedforward:_})}createOscillator(){return new m(this)}createPanner(){return new g(this)}createPeriodicWave(_,b,w={disableNormalization:!1}){return new v(this,{...w,imag:b,real:_})}createStereoPanner(){return new T(this)}createWaveShaper(){return new x(this)}decodeAudioData(_,b,w){return l(this._nativeContext,_).then(y=>(typeof b=="function"&&b(y),y),y=>{throw typeof w=="function"&&w(y),y})}},Dh={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},Rh=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...Dh,...u},f=i(h,d),p=o(h),m=p?t():null;super(l,!1,f,m),this._Q=e(this,p,f.Q,Me,Pe),this._detune=e(this,p,f.detune,1200*Math.log2(Me),-1200*Math.log2(Me)),this._frequency=e(this,p,f.frequency,l.sampleRate/2,0),this._gain=e(this,p,f.gain,40*Math.log10(Me),Pe),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,u,h){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,u,h)}catch(d){throw d.code===11?n():d}if(l.length!==u.length||u.length!==h.length)throw n()}},$h=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=xe(l,c);if(!u){const h={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,h)}return r.set(c,l),u?(await s(c,a.Q,l.Q),await s(c,a.detune,l.detune),await s(c,a.frequency,l.frequency),await s(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Vh=(s,e)=>(t,n)=>{const i=e.get(t);if(i!==void 0)return i;const r=s.get(t);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(s.set(t,o),o.catch(()=>!1).then(a=>(s.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},Fh={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},qh=(s,e,t,n,i)=>class extends s{constructor(o,a){const c=n(o),l={...Fh,...a},u=t(c,l),h=i(c)?e():null;super(o,!1,u,h)}},Lh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!xe(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},jh={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},Wh=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=r({...jh,...c}),h=t(l,u),d=i(l)?e():null;super(a,!1,h,d)}},Bh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!xe(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=s(o,l)}return n.set(o,a),await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},zh=s=>(e,t,n)=>s(t,e,n),Uh=s=>(e,t,n=0,i=0)=>{const r=e[n];if(r===void 0)throw s();return as(t)?r.connect(t,0,i):r.connect(t,0)},Gh=s=>(e,t)=>{const n=s(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return n.buffer=i,n.loop=!0,n.connect(t),n.start(),()=>{n.stop(),n.disconnect(t)}},Hh={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},Zh=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...Hh,...l},d=n(u,h),f=r(u),p=f?t():null;super(c,!1,d,p),this._constantSourceNodeRenderer=p,this._nativeConstantSourceNode=d,this._offset=e(this,f,d.offset,Me,Pe),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const u=this._nativeConstantSourceNode.onended;this._onended=u!==null&&u===l?c:u}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){Qt(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),st(this)&&On(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},Xh=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,u)=>{let h=t(l);const d=xe(h,u);if(!d){const f={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,offset:h.offset.value};h=e(u,f),o!==null&&h.start(o),a!==null&&h.stop(a)}return r.set(u,h),d?await s(u,l.offset,h.offset):await n(u,l.offset,h.offset),await i(l,u,h),h};return{set start(l){o=l},set stop(l){a=l},render(l,u){const h=r.get(u);return h!==void 0?Promise.resolve(h):c(l,u)}}},Yh=s=>e=>(s[0]=e,s[0]),Kh={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},Qh=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u={...Kh,...c},h=t(l,u),f=i(l)?e():null;super(a,!1,h,f),this._isBufferNullified=!1,this._nativeConvolverNode=h,u.buffer!==null&&r(this,u.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},Jh=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!xe(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=s(o,l)}return n.set(o,a),on(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},ed=(s,e)=>(t,n,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,n,i)}catch(r){throw r.name==="SyntaxError"?s():r}},td=()=>new DOMException("","DataCloneError"),qr=s=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(n=>{const i=()=>{t.onmessage=null,e.close(),t.close(),n()};t.onmessage=()=>i();try{e.postMessage(s,[s])}catch{}finally{i()}})},nd=(s,e,t,n,i,r,o,a,c,l,u)=>(h,d)=>{const f=o(h)?h:r(h);if(i.has(d)){const p=t();return Promise.reject(p)}try{i.add(d)}catch{}return e(c,()=>c(f))?f.decodeAudioData(d).then(p=>(qr(d).catch(()=>{}),e(a,()=>a(p))||u(p),s.add(p),p)):new Promise((p,m)=>{const g=async()=>{try{await qr(d)}catch{}},v=T=>{m(T),g()};try{f.decodeAudioData(d,T=>{typeof T.copyFromChannel!="function"&&(l(T),Ti(T)),s.add(T),g().then(()=>p(T))},T=>{v(T===null?n():T)})}catch(T){v(T)}})},sd=(s,e,t,n,i,r,o,a)=>(c,l)=>{const u=e.get(c);if(u===void 0)throw new Error("Missing the expected cycle count.");const h=r(c.context),d=a(h);if(u===l){if(e.delete(c),!d&&o(c)){const f=n(c),{outputs:p}=t(c);for(const m of p)if(In(m)){const g=n(m[0]);s(f,g,m[1],m[2])}else{const g=i(m[0]);f.connect(g,m[1])}}}else e.set(c,u-l)},id={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},rd=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...id,...l},d=n(u,h),f=r(u),p=f?t(h.maxDelayTime):null;super(c,!1,d,p),this._delayTime=e(this,f,d.delayTime),o(this,h.maxDelayTime)}get delayTime(){return this._delayTime}},od=(s,e,t,n,i)=>r=>{const o=new WeakMap,a=async(c,l)=>{let u=t(c);const h=xe(u,l);if(!h){const d={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:r};u=e(l,d)}return o.set(l,u),h?await s(l,c.delayTime,u.delayTime):await n(l,c.delayTime,u.delayTime),await i(c,l,u),u};return{render(c,l){const u=o.get(l);return u!==void 0?Promise.resolve(u):a(c,l)}}},ad=s=>(e,t,n,i)=>s(e[i],r=>r[0]===t&&r[1]===n),cd=s=>(e,t)=>{s(e).delete(t)},ld=s=>"delayTime"in s,ud=(s,e,t)=>function n(i,r){const o=is(r)?r:t(s,r);if(ld(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:a}=e(o);return Array.from(a).map(c=>n([...i,o],c[0])).reduce((c,l)=>c.concat(l),[])},zn=(s,e,t)=>{const n=e[t];if(n===void 0)throw s();return n},hd=s=>(e,t=void 0,n=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?zn(s,e,t).disconnect():as(t)?n===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?zn(s,e,n).disconnect(t,0):zn(s,e,n).disconnect(t,0,i):n===void 0?e.forEach(r=>r.disconnect(t)):zn(s,e,n).disconnect(t,0),dd={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},pd=(s,e,t,n,i,r,o,a)=>class extends s{constructor(l,u){const h=r(l),d={...dd,...u},f=n(h,d),p=o(h),m=p?t():null;super(l,!1,f,m),this._attack=e(this,p,f.attack),this._knee=e(this,p,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=e(this,p,f.ratio),this._release=e(this,p,f.release),this._threshold=e(this,p,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const u=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=u,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const u=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=u,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},fd=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=xe(l,c);if(!u){const h={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,h)}return r.set(c,l),u?(await s(c,a.attack,l.attack),await s(c,a.knee,l.knee),await s(c,a.ratio,l.ratio),await s(c,a.release,l.release),await s(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},md=()=>new DOMException("","EncodingError"),gd=s=>e=>new Promise((t,n)=>{if(s===null){n(new SyntaxError);return}const i=s.document.head;if(i===null)n(new SyntaxError);else{const r=s.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=s.onerror,l=()=>{s.onerror=c,URL.revokeObjectURL(a)};s.onerror=(u,h,d,f,p)=>{if(h===a||h===s.location.href&&d===1&&f===1)return l(),n(p),!1;if(c!==null)return c(u,h,d,f,p)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),t()},r.src=a,r.type="module",i.appendChild(r)}}),_d=s=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,n,i){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=s(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,n,i){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},vd=s=>(e,t,n)=>{Object.defineProperties(s,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return n()}finally{s!==null&&(delete s.currentFrame,delete s.currentTime)}},yd=s=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw s()},bd={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},wd=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...bd,...c},h=n(l,u),d=r(l),f=d?t():null;super(a,!1,h,f),this._gain=e(this,d,h.gain,Me,Pe)}get gain(){return this._gain}},xd=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=xe(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,h)}return r.set(c,l),u?await s(c,a.gain,l.gain):await n(c,a.gain,l.gain),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Td=(s,e)=>t=>e(s,t),Md=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},Ad=s=>e=>{var t;return(t=s.get(e))!==null&&t!==void 0?t:0},Cd=s=>e=>{const t=s(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},Sd=s=>e=>s.get(e),ge=()=>new DOMException("","InvalidStateError"),Pd=s=>e=>{const t=s.get(e);if(t===void 0)throw ge();return t},kd=(s,e)=>t=>{let n=s.get(t);if(n!==void 0)return n;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,44100),s.set(t,n),n},Nd=s=>e=>{const t=s.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},ws=()=>new DOMException("","InvalidAccessError"),Od=s=>{s.getFrequencyResponse=(e=>(t,n,i)=>{if(t.length!==n.length||n.length!==i.length)throw ws();return e.call(s,t,n,i)})(s.getFrequencyResponse)},Ed={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},Id=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=n(a),u=i(l),h={...Ed,...c},d=e(l,u?null:a.baseLatency,h),f=u?t(h.feedback,h.feedforward):null;super(a,!1,d,f),Od(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},ta=(s,e,t,n,i,r,o,a,c,l,u)=>{const h=l.length;let d=a;for(let f=0;f<h;f+=1){let p=t[0]*l[f];for(let m=1;m<i;m+=1){const g=d-m&c-1;p+=t[m]*r[g],p-=s[m]*o[g]}for(let m=i;m<n;m+=1)p+=t[m]*r[d-m&c-1];for(let m=i;m<e;m+=1)p-=s[m]*o[d-m&c-1];r[d]=l[f],o[d]=p,d=d+1&c-1,u[f]=p}return d},Dd=(s,e,t,n)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=n instanceof Float64Array?n:new Float64Array(n),o=i.length,a=r.length,c=Math.min(o,a);if(i[0]!==1){for(let p=0;p<o;p+=1)r[p]/=i[0];for(let p=1;p<a;p+=1)i[p]/=i[0]}const l=32,u=new Float32Array(l),h=new Float32Array(l),d=e.createBuffer(s.numberOfChannels,s.length,s.sampleRate),f=s.numberOfChannels;for(let p=0;p<f;p+=1){const m=s.getChannelData(p),g=d.getChannelData(p);u.fill(0),h.fill(0),ta(i,o,r,a,c,u,h,0,l,m,g)}return d},Rd=(s,e,t,n,i)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(u,h)=>{let d=null,f=e(u);const p=xe(f,h);if(h.createIIRFilter===void 0?d=s(h,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):p||(f=h.createIIRFilter(o,r)),a.set(h,d===null?f:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(u.context.destination.channelCount,u.context.length,h.sampleRate);c=(async()=>{await n(u,g,g.destination);const v=await i(g);return Dd(v,h,r,o)})()}const m=await c;return d.buffer=m,d.start(0),d}return await n(u,h,f),f};return{render(u,h){const d=a.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},$d=(s,e,t,n,i,r)=>o=>(a,c)=>{const l=s.get(a);if(l===void 0){if(!o&&r(a)){const u=n(a),{outputs:h}=t(a);for(const d of h)if(In(d)){const f=n(d[0]);e(u,f,d[1],d[2])}else{const f=i(d[0]);u.disconnect(f,d[1])}}s.set(a,c)}else s.set(a,l+c)},Vd=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},Fd=(s,e)=>t=>s.has(t)||e(t),qd=(s,e)=>t=>s.has(t)||e(t),Ld=(s,e)=>t=>{const n=s.get(t);return e(n)||e(t)},jd=s=>e=>s!==null&&e instanceof s,Wd=s=>e=>s!==null&&typeof s.AudioNode=="function"&&e instanceof s.AudioNode,Bd=s=>e=>s!==null&&typeof s.AudioParam=="function"&&e instanceof s.AudioParam,zd=(s,e)=>t=>s(t)||e(t),Ud=s=>e=>s!==null&&e instanceof s,Gd=s=>s!==null&&s.isSecureContext,Hd=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},Zd={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Xd=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r);if(n(a))throw new TypeError;const c={...Zd,...o},l=e(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},Yd=(s,e,t,n)=>class extends s{constructor(r,o){const a=t(r),c=e(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},Kd=(s,e,t)=>class extends s{constructor(i,r){const o=t(i),a=e(o,r);super(i,!0,a,null)}},Qd=(s,e,t,n,i,r)=>class extends t{constructor(a,c){super(a),this._nativeContext=a,ys.set(this,a),n(a)&&i.set(a,new Set),this._destination=new s(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},An=s=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=s.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},Jd=(s,e)=>(t,n,i)=>{const r=new Set;return t.connect=(o=>(a,c=0,l=0)=>{const u=r.size===0;if(e(a))return o.call(t,a,c,l),s(r,[a,c,l],h=>h[0]===a&&h[1]===c&&h[2]===l,!0),u&&n(),a;o.call(t,a,c),s(r,[a,c],h=>h[0]===a&&h[1]===c,!0),u&&n()})(t.connect),t.disconnect=(o=>(a,c,l)=>{const u=r.size>0;if(a===void 0)o.apply(t),r.clear();else if(typeof a=="number"){o.call(t,a);for(const d of r)d[1]===a&&r.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const h=r.size===0;u&&h&&i()})(t.disconnect),t},ne=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t]&&(s[t]=n)},fe=(s,e)=>{ne(s,e,"channelCount"),ne(s,e,"channelCountMode"),ne(s,e,"channelInterpretation")},Lr=s=>typeof s.getFloatTimeDomainData=="function",ep=s=>{s.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);s.getByteTimeDomainData(t);const n=Math.max(t.length,s.fftSize);for(let i=0;i<n;i+=1)e[i]=(t[i]-128)*.0078125;return e}},tp=(s,e)=>(t,n)=>{const i=t.createAnalyser();if(fe(i,n),!(n.maxDecibels>n.minDecibels))throw e();return ne(i,n,"fftSize"),ne(i,n,"maxDecibels"),ne(i,n,"minDecibels"),ne(i,n,"smoothingTimeConstant"),s(Lr,()=>Lr(i))||ep(i),i},np=s=>s===null?null:s.hasOwnProperty("AudioBuffer")?s.AudioBuffer:null,oe=(s,e,t)=>{const n=e[t];n!==void 0&&n!==s[t].value&&(s[t].value=n)},sp=s=>{s.start=(e=>{let t=!1;return(n=0,i=0,r)=>{if(t)throw ge();e.call(s,n,i,r),t=!0}})(s.start)},Ci=s=>{s.start=(e=>(t=0,n=0,i)=>{if(typeof i=="number"&&i<0||n<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(s,t,n,i)})(s.start)},Si=s=>{s.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(s,t)})(s.stop)},ip=(s,e,t,n,i,r,o,a,c,l,u)=>(h,d)=>{const f=h.createBufferSource();return fe(f,d),oe(f,d,"playbackRate"),ne(f,d,"buffer"),ne(f,d,"loop"),ne(f,d,"loopEnd"),ne(f,d,"loopStart"),e(t,()=>t(h))||sp(f),e(n,()=>n(h))||c(f),e(i,()=>i(h))||l(f,h),e(r,()=>r(h))||Ci(f),e(o,()=>o(h))||u(f,h),e(a,()=>a(h))||Si(f),s(h,f),f},rp=s=>s===null?null:s.hasOwnProperty("AudioContext")?s.AudioContext:s.hasOwnProperty("webkitAudioContext")?s.webkitAudioContext:null,op=(s,e)=>(t,n,i)=>{const r=t.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=s(t,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},ap=s=>s===null?null:s.hasOwnProperty("AudioWorkletNode")?s.AudioWorkletNode:null,cp=s=>{const{port1:e}=new MessageChannel;try{e.postMessage(s)}finally{e.close()}},lp=(s,e,t,n,i)=>(r,o,a,c,l,u)=>{if(a!==null)try{const h=new a(r,c,u),d=new Map;let f=null;if(Object.defineProperties(h,{channelCount:{get:()=>u.channelCount,set:()=>{throw s()}},channelCountMode:{get:()=>"explicit",set:()=>{throw s()}},onprocessorerror:{get:()=>f,set:p=>{typeof f=="function"&&h.removeEventListener("processorerror",f),f=typeof p=="function"?p:null,typeof f=="function"&&h.addEventListener("processorerror",f)}}}),h.addEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=typeof m[1]=="function"?m[1]:typeof m[1]=="object"&&m[1]!==null&&typeof m[1].handleEvent=="function"?m[1].handleEvent:null;if(g!==null){const v=d.get(m[1]);v!==void 0?m[1]=v:(m[1]=T=>{T.type==="error"?(Object.defineProperties(T,{type:{value:"processorerror"}}),g(T)):g(new ErrorEvent(m[0],{...T}))},d.set(g,m[1]))}}return p.call(h,"error",m[1],m[2]),p.call(h,...m)})(h.addEventListener),h.removeEventListener=(p=>(...m)=>{if(m[0]==="processorerror"){const g=d.get(m[1]);g!==void 0&&(d.delete(m[1]),m[1]=g)}return p.call(h,"error",m[1],m[2]),p.call(h,m[0],m[1],m[2])})(h.removeEventListener),u.numberOfOutputs!==0){const p=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return h.connect(p).connect(r.destination),i(h,()=>p.disconnect(),()=>p.connect(r.destination))}return h}catch(h){throw h.code===11?n():h}if(l===void 0)throw n();return cp(u),e(r,o,l,u)},na=(s,e)=>s===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(s*e))))),up=s=>new Promise((e,t)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),i.close(),e(r)},n.onmessageerror=({data:r})=>{n.close(),i.close(),t(r)},i.postMessage(s)}),hp=async(s,e)=>{const t=await up(e);return new s(t)},dp=(s,e,t,n)=>{let i=Ks.get(s);i===void 0&&(i=new WeakMap,Ks.set(s,i));const r=hp(t,n);return i.set(e,r),r},pp=(s,e,t,n,i,r,o,a,c,l,u,h,d)=>(f,p,m,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const v=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(v.some(O=>O<1))throw c();if(v.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw c();const T=g.channelCount*g.numberOfInputs,x=v.reduce((O,V)=>O+V,0),A=m.parameterDescriptors===void 0?0:m.parameterDescriptors.length;if(T+A>6||x>6)throw c();const _=new MessageChannel,b=[],w=[];for(let O=0;O<g.numberOfInputs;O+=1)b.push(o(f,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),w.push(i(f,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const y=[];if(m.parameterDescriptors!==void 0)for(const{defaultValue:O,maxValue:V,minValue:pe,name:se}of m.parameterDescriptors){const G=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[se]!==void 0?g.parameterData[se]:O===void 0?0:O});Object.defineProperties(G.offset,{defaultValue:{get:()=>O===void 0?0:O},maxValue:{get:()=>V===void 0?Me:V},minValue:{get:()=>pe===void 0?Pe:pe}}),y.push(G)}const S=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,T+A)}),P=na(p,f.sampleRate),C=a(f,P,T+A,Math.max(1,x)),M=i(f,{channelCount:Math.max(1,x),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,x)}),k=[];for(let O=0;O<g.numberOfOutputs;O+=1)k.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:v[O]}));for(let O=0;O<g.numberOfInputs;O+=1){b[O].connect(w[O]);for(let V=0;V<g.channelCount;V+=1)w[O].connect(S,V,O*g.channelCount+V)}const N=new Jo(m.parameterDescriptors===void 0?[]:m.parameterDescriptors.map(({name:O},V)=>{const pe=y[V];return pe.connect(S,0,T+V),pe.start(0),[O,pe.offset]}));S.connect(C);let D=g.channelInterpretation,E=null;const I=g.numberOfOutputs===0?[C]:k,B={get bufferSize(){return P},get channelCount(){return g.channelCount},set channelCount(O){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(O){throw t()},get channelInterpretation(){return D},set channelInterpretation(O){for(const V of b)V.channelInterpretation=O;D=O},get context(){return C.context},get inputs(){return b},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return E},set onprocessorerror(O){typeof E=="function"&&B.removeEventListener("processorerror",E),E=typeof O=="function"?O:null,typeof E=="function"&&B.addEventListener("processorerror",E)},get parameters(){return N},get port(){return _.port2},addEventListener(...O){return C.addEventListener(O[0],O[1],O[2])},connect:s.bind(null,I),disconnect:l.bind(null,I),dispatchEvent(...O){return C.dispatchEvent(O[0])},removeEventListener(...O){return C.removeEventListener(O[0],O[1],O[2])}},$=new Map;_.port1.addEventListener=(O=>(...V)=>{if(V[0]==="message"){const pe=typeof V[1]=="function"?V[1]:typeof V[1]=="object"&&V[1]!==null&&typeof V[1].handleEvent=="function"?V[1].handleEvent:null;if(pe!==null){const se=$.get(V[1]);se!==void 0?V[1]=se:(V[1]=G=>{u(f.currentTime,f.sampleRate,()=>pe(G))},$.set(pe,V[1]))}}return O.call(_.port1,V[0],V[1],V[2])})(_.port1.addEventListener),_.port1.removeEventListener=(O=>(...V)=>{if(V[0]==="message"){const pe=$.get(V[1]);pe!==void 0&&($.delete(V[1]),V[1]=pe)}return O.call(_.port1,V[0],V[1],V[2])})(_.port1.removeEventListener);let q=null;Object.defineProperty(_.port1,"onmessage",{get:()=>q,set:O=>{typeof q=="function"&&_.port1.removeEventListener("message",q),q=typeof O=="function"?O:null,typeof q=="function"&&(_.port1.addEventListener("message",q),_.port1.start())}}),m.prototype.port=_.port1;let F=null;dp(f,B,m,g).then(O=>F=O);const Oe=ls(g.numberOfInputs,g.channelCount),Ee=ls(g.numberOfOutputs,v),z=m.parameterDescriptors===void 0?[]:m.parameterDescriptors.reduce((O,{name:V})=>({...O,[V]:new Float32Array(128)}),{});let te=!0;const Te=()=>{g.numberOfOutputs>0&&C.disconnect(M);for(let O=0,V=0;O<g.numberOfOutputs;O+=1){const pe=k[O];for(let se=0;se<v[O];se+=1)M.disconnect(pe,V+se,se);V+=v[O]}},R=new Map;C.onaudioprocess=({inputBuffer:O,outputBuffer:V})=>{if(F!==null){const pe=h(B);for(let se=0;se<P;se+=128){for(let G=0;G<g.numberOfInputs;G+=1)for(let re=0;re<g.channelCount;re+=1)cs(O,Oe[G],re,re,se);m.parameterDescriptors!==void 0&&m.parameterDescriptors.forEach(({name:G},re)=>{cs(O,z,G,T+re,se)});for(let G=0;G<g.numberOfInputs;G+=1)for(let re=0;re<v[G];re+=1)Ee[G][re].byteLength===0&&(Ee[G][re]=new Float32Array(128));try{const G=Oe.map((Re,lt)=>{if(pe[lt].size>0)return R.set(lt,P/128),Re;const Vs=R.get(lt);return Vs===void 0?[]:(Re.every(Za=>Za.every(Xa=>Xa===0))&&(Vs===1?R.delete(lt):R.set(lt,Vs-1)),Re)});te=u(f.currentTime+se/f.sampleRate,f.sampleRate,()=>F.process(G,Ee,z));for(let Re=0,lt=0;Re<g.numberOfOutputs;Re+=1){for(let pn=0;pn<v[Re];pn+=1)ea(V,Ee[Re],pn,lt+pn,se);lt+=v[Re]}}catch(G){te=!1,B.dispatchEvent(new ErrorEvent("processorerror",{colno:G.colno,filename:G.filename,lineno:G.lineno,message:G.message}))}if(!te){for(let G=0;G<g.numberOfInputs;G+=1){b[G].disconnect(w[G]);for(let re=0;re<g.channelCount;re+=1)w[se].disconnect(S,re,G*g.channelCount+re)}if(m.parameterDescriptors!==void 0){const G=m.parameterDescriptors.length;for(let re=0;re<G;re+=1){const Re=y[re];Re.disconnect(S,0,T+re),Re.stop()}}S.disconnect(C),C.onaudioprocess=null,wt?Te():jt();break}}}};let wt=!1;const xt=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Lt=()=>C.connect(xt).connect(f.destination),jt=()=>{C.disconnect(xt),xt.disconnect()},Ga=()=>{if(te){jt(),g.numberOfOutputs>0&&C.connect(M);for(let O=0,V=0;O<g.numberOfOutputs;O+=1){const pe=k[O];for(let se=0;se<v[O];se+=1)M.connect(pe,V+se,se);V+=v[O]}}wt=!0},Ha=()=>{te&&(Lt(),Te()),wt=!1};return Lt(),d(B,Ga,Ha)},sa=(s,e)=>{const t=s.createBiquadFilter();return fe(t,e),oe(t,e,"Q"),oe(t,e,"detune"),oe(t,e,"frequency"),oe(t,e,"gain"),ne(t,e,"type"),t},fp=(s,e)=>(t,n)=>{const i=t.createChannelMerger(n.numberOfInputs);return s!==null&&s.name==="webkitAudioContext"&&e(t,i),fe(i,n),i},mp=s=>{const e=s.numberOfOutputs;Object.defineProperty(s,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw ge()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw ge()}}),Object.defineProperty(s,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw ge()}})},Dn=(s,e)=>{const t=s.createChannelSplitter(e.numberOfOutputs);return fe(t,e),mp(t),t},gp=(s,e,t,n,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const a=r.createConstantSource();return fe(a,o),oe(a,o,"offset"),e(n,()=>n(r))||Ci(a),e(i,()=>i(r))||Si(a),s(r,a),a},an=(s,e)=>(s.connect=e.connect.bind(e),s.disconnect=e.disconnect.bind(e),s),_p=(s,e,t,n)=>(i,{offset:r,...o})=>{const a=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const h={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(p){l.channelCount=p},get channelCountMode(){return l.channelCountMode},set channelCountMode(p){l.channelCountMode=p},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(p){l.channelInterpretation=p},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(p){c.onended=p},addEventListener(...p){return c.addEventListener(p[0],p[1],p[2])},dispatchEvent(...p){return c.dispatchEvent(p[0])},removeEventListener(...p){return c.removeEventListener(p[0],p[1],p[2])},start(p=0){c.start.call(c,p)},stop(p=0){c.stop.call(c,p)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return s(i,c),n(an(h,l),d,f)},vp=(s,e)=>(t,n)=>{const i=t.createConvolver();if(fe(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),ne(i,n,"buffer"),n.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw s();return r.call(i,o)}),n.channelCountMode==="max"))throw s();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw s();return r.call(i,o)}),i},ia=(s,e)=>{const t=s.createDelay(e.maxDelayTime);return fe(t,e),oe(t,e,"delayTime"),t},yp=s=>(e,t)=>{const n=e.createDynamicsCompressor();if(fe(n,t),t.channelCount>2||t.channelCountMode==="max")throw s();return oe(n,t,"attack"),oe(n,t,"knee"),oe(n,t,"ratio"),oe(n,t,"release"),oe(n,t,"threshold"),n},Ne=(s,e)=>{const t=s.createGain();return fe(t,e),oe(t,e,"gain"),t},bp=s=>(e,t,n)=>{if(e.createIIRFilter===void 0)return s(e,t,n);const i=e.createIIRFilter(n.feedforward,n.feedback);return fe(i,n),i};function wp(s,e){const t=e[0]*e[0]+e[1]*e[1];return[(s[0]*e[0]+s[1]*e[1])/t,(s[1]*e[0]-s[0]*e[1])/t]}function xp(s,e){return[s[0]*e[0]-s[1]*e[1],s[0]*e[1]+s[1]*e[0]]}function jr(s,e){let t=[0,0];for(let n=s.length-1;n>=0;n-=1)t=xp(t,e),t[0]+=s[n];return t}const Tp=(s,e,t,n)=>(i,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:u})=>{const h=na(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=u instanceof Float64Array?u:new Float64Array(u),p=d.length,m=f.length,g=Math.min(p,m);if(p===0||p>20)throw n();if(d[0]===0)throw e();if(m===0||m>20)throw n();if(f[0]===0)throw e();if(d[0]!==1){for(let y=0;y<m;y+=1)f[y]/=d[0];for(let y=1;y<p;y+=1)d[y]/=d[0]}const v=t(i,h,o,o);v.channelCount=o,v.channelCountMode=a,v.channelInterpretation=c;const T=32,x=[],A=[],_=[];for(let y=0;y<o;y+=1){x.push(0);const S=new Float32Array(T),P=new Float32Array(T);S.fill(0),P.fill(0),A.push(S),_.push(P)}v.onaudioprocess=y=>{const S=y.inputBuffer,P=y.outputBuffer,C=S.numberOfChannels;for(let M=0;M<C;M+=1){const k=S.getChannelData(M),N=P.getChannelData(M);x[M]=ta(d,p,f,m,g,A[M],_[M],x[M],T,k,N)}};const b=i.sampleRate/2;return an({get bufferSize(){return h},get channelCount(){return v.channelCount},set channelCount(y){v.channelCount=y},get channelCountMode(){return v.channelCountMode},set channelCountMode(y){v.channelCountMode=y},get channelInterpretation(){return v.channelInterpretation},set channelInterpretation(y){v.channelInterpretation=y},get context(){return v.context},get inputs(){return[v]},get numberOfInputs(){return v.numberOfInputs},get numberOfOutputs(){return v.numberOfOutputs},addEventListener(...y){return v.addEventListener(y[0],y[1],y[2])},dispatchEvent(...y){return v.dispatchEvent(y[0])},getFrequencyResponse(y,S,P){if(y.length!==S.length||S.length!==P.length)throw s();const C=y.length;for(let M=0;M<C;M+=1){const k=-Math.PI*(y[M]/b),N=[Math.cos(k),Math.sin(k)],D=jr(f,N),E=jr(d,N),I=wp(D,E);S[M]=Math.sqrt(I[0]*I[0]+I[1]*I[1]),P[M]=Math.atan2(I[1],I[0])}},removeEventListener(...y){return v.removeEventListener(y[0],y[1],y[2])}},v)},Mp=(s,e)=>s.createMediaElementSource(e.mediaElement),Ap=(s,e)=>{const t=s.createMediaStreamDestination();return fe(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},Cp=(s,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=t.slice(0,1),i=s.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:e}),i},Sp=(s,e)=>(t,{mediaStreamTrack:n})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(n);const i=new MediaStream([n]),r=t.createMediaStreamSource(i);if(n.kind!=="audio")throw s();if(e(t))throw new TypeError;return r},Pp=s=>s===null?null:s.hasOwnProperty("OfflineAudioContext")?s.OfflineAudioContext:s.hasOwnProperty("webkitOfflineAudioContext")?s.webkitOfflineAudioContext:null,kp=(s,e,t,n,i,r)=>(o,a)=>{const c=o.createOscillator();return fe(c,a),oe(c,a,"detune"),oe(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):ne(c,a,"type"),e(t,()=>t(o))||Ci(c),e(n,()=>n(o))||r(c,o),e(i,()=>i(o))||Si(c),s(o,c),c},Np=s=>(e,t)=>{const n=e.createPanner();return n.orientationX===void 0?s(e,t):(fe(n,t),oe(n,t,"orientationX"),oe(n,t,"orientationY"),oe(n,t,"orientationZ"),oe(n,t,"positionX"),oe(n,t,"positionY"),oe(n,t,"positionZ"),ne(n,t,"coneInnerAngle"),ne(n,t,"coneOuterAngle"),ne(n,t,"coneOuterGain"),ne(n,t,"distanceModel"),ne(n,t,"maxDistance"),ne(n,t,"panningModel"),ne(n,t,"refDistance"),ne(n,t,"rolloffFactor"),n)},Op=(s,e,t,n,i,r,o,a,c,l)=>(u,{coneInnerAngle:h,coneOuterAngle:d,coneOuterGain:f,distanceModel:p,maxDistance:m,orientationX:g,orientationY:v,orientationZ:T,panningModel:x,positionX:A,positionY:_,positionZ:b,refDistance:w,rolloffFactor:y,...S})=>{const P=u.createPanner();if(S.channelCount>2||S.channelCountMode==="max")throw o();fe(P,S);const C={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},M=t(u,{...C,channelInterpretation:"speakers",numberOfInputs:6}),k=n(u,{...S,gain:1}),N=n(u,{...C,gain:1}),D=n(u,{...C,gain:0}),E=n(u,{...C,gain:0}),I=n(u,{...C,gain:0}),B=n(u,{...C,gain:0}),$=n(u,{...C,gain:0}),q=i(u,256,6,1),F=r(u,{...C,curve:new Float32Array([1,1]),oversample:"none"});let Z=[g,v,T],Oe=[A,_,b];const Ee=new Float32Array(1);q.onaudioprocess=({inputBuffer:R})=>{const wt=[c(R,Ee,0),c(R,Ee,1),c(R,Ee,2)];wt.some((Lt,jt)=>Lt!==Z[jt])&&(P.setOrientation(...wt),Z=wt);const xt=[c(R,Ee,3),c(R,Ee,4),c(R,Ee,5)];xt.some((Lt,jt)=>Lt!==Oe[jt])&&(P.setPosition(...xt),Oe=xt)},Object.defineProperty(D.gain,"defaultValue",{get:()=>0}),Object.defineProperty(E.gain,"defaultValue",{get:()=>0}),Object.defineProperty(I.gain,"defaultValue",{get:()=>0}),Object.defineProperty(B.gain,"defaultValue",{get:()=>0}),Object.defineProperty($.gain,"defaultValue",{get:()=>0});const z={get bufferSize(){},get channelCount(){return P.channelCount},set channelCount(R){if(R>2)throw o();k.channelCount=R,P.channelCount=R},get channelCountMode(){return P.channelCountMode},set channelCountMode(R){if(R==="max")throw o();k.channelCountMode=R,P.channelCountMode=R},get channelInterpretation(){return P.channelInterpretation},set channelInterpretation(R){k.channelInterpretation=R,P.channelInterpretation=R},get coneInnerAngle(){return P.coneInnerAngle},set coneInnerAngle(R){P.coneInnerAngle=R},get coneOuterAngle(){return P.coneOuterAngle},set coneOuterAngle(R){P.coneOuterAngle=R},get coneOuterGain(){return P.coneOuterGain},set coneOuterGain(R){if(R<0||R>1)throw e();P.coneOuterGain=R},get context(){return P.context},get distanceModel(){return P.distanceModel},set distanceModel(R){P.distanceModel=R},get inputs(){return[k]},get maxDistance(){return P.maxDistance},set maxDistance(R){if(R<0)throw new RangeError;P.maxDistance=R},get numberOfInputs(){return P.numberOfInputs},get numberOfOutputs(){return P.numberOfOutputs},get orientationX(){return N.gain},get orientationY(){return D.gain},get orientationZ(){return E.gain},get panningModel(){return P.panningModel},set panningModel(R){P.panningModel=R},get positionX(){return I.gain},get positionY(){return B.gain},get positionZ(){return $.gain},get refDistance(){return P.refDistance},set refDistance(R){if(R<0)throw new RangeError;P.refDistance=R},get rolloffFactor(){return P.rolloffFactor},set rolloffFactor(R){if(R<0)throw new RangeError;P.rolloffFactor=R},addEventListener(...R){return k.addEventListener(R[0],R[1],R[2])},dispatchEvent(...R){return k.dispatchEvent(R[0])},removeEventListener(...R){return k.removeEventListener(R[0],R[1],R[2])}};h!==z.coneInnerAngle&&(z.coneInnerAngle=h),d!==z.coneOuterAngle&&(z.coneOuterAngle=d),f!==z.coneOuterGain&&(z.coneOuterGain=f),p!==z.distanceModel&&(z.distanceModel=p),m!==z.maxDistance&&(z.maxDistance=m),g!==z.orientationX.value&&(z.orientationX.value=g),v!==z.orientationY.value&&(z.orientationY.value=v),T!==z.orientationZ.value&&(z.orientationZ.value=T),x!==z.panningModel&&(z.panningModel=x),A!==z.positionX.value&&(z.positionX.value=A),_!==z.positionY.value&&(z.positionY.value=_),b!==z.positionZ.value&&(z.positionZ.value=b),w!==z.refDistance&&(z.refDistance=w),y!==z.rolloffFactor&&(z.rolloffFactor=y),(Z[0]!==1||Z[1]!==0||Z[2]!==0)&&P.setOrientation(...Z),(Oe[0]!==0||Oe[1]!==0||Oe[2]!==0)&&P.setPosition(...Oe);const te=()=>{k.connect(P),s(k,F,0,0),F.connect(N).connect(M,0,0),F.connect(D).connect(M,0,1),F.connect(E).connect(M,0,2),F.connect(I).connect(M,0,3),F.connect(B).connect(M,0,4),F.connect($).connect(M,0,5),M.connect(q).connect(u.destination)},Te=()=>{k.disconnect(P),a(k,F,0,0),F.disconnect(N),N.disconnect(M),F.disconnect(D),D.disconnect(M),F.disconnect(E),E.disconnect(M),F.disconnect(I),I.disconnect(M),F.disconnect(B),B.disconnect(M),F.disconnect($),$.disconnect(M),M.disconnect(q),q.disconnect(u.destination)};return l(an(z,P),te,Te)},Ep=s=>(e,{disableNormalization:t,imag:n,real:i})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=i instanceof Float32Array?i:new Float32Array(i),a=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(n).length<2)throw s();return a},Rn=(s,e,t,n)=>s.createScriptProcessor(e,t,n),Ip=(s,e)=>(t,n)=>{const i=n.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return s(t,n);const r=t.createStereoPanner();return fe(r,n),oe(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},Dp=(s,e,t,n,i,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},u={...l,oversample:"none"},h=(p,m,g,v)=>{const T=new Float32Array(16385),x=new Float32Array(16385);for(let S=0;S<16385;S+=1){const P=S/16384*c;T[S]=Math.cos(P),x[S]=Math.sin(P)}const A=t(p,{...l,gain:0}),_=n(p,{...u,curve:T}),b=n(p,{...u,curve:a}),w=t(p,{...l,gain:0}),y=n(p,{...u,curve:x});return{connectGraph(){m.connect(A),m.connect(b.inputs===void 0?b:b.inputs[0]),m.connect(w),b.connect(g),g.connect(_.inputs===void 0?_:_.inputs[0]),g.connect(y.inputs===void 0?y:y.inputs[0]),_.connect(A.gain),y.connect(w.gain),A.connect(v,0,0),w.connect(v,0,1)},disconnectGraph(){m.disconnect(A),m.disconnect(b.inputs===void 0?b:b.inputs[0]),m.disconnect(w),b.disconnect(g),g.disconnect(_.inputs===void 0?_:_.inputs[0]),g.disconnect(y.inputs===void 0?y:y.inputs[0]),_.disconnect(A.gain),y.disconnect(w.gain),A.disconnect(v,0,0),w.disconnect(v,0,1)}}},d=(p,m,g,v)=>{const T=new Float32Array(16385),x=new Float32Array(16385),A=new Float32Array(16385),_=new Float32Array(16385),b=Math.floor(16385/2);for(let I=0;I<16385;I+=1)if(I>b){const B=(I-b)/(16384-b)*c;T[I]=Math.cos(B),x[I]=Math.sin(B),A[I]=0,_[I]=1}else{const B=I/(16384-b)*c;T[I]=1,x[I]=0,A[I]=Math.cos(B),_[I]=Math.sin(B)}const w=e(p,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),y=t(p,{...l,gain:0}),S=n(p,{...u,curve:T}),P=t(p,{...l,gain:0}),C=n(p,{...u,curve:x}),M=n(p,{...u,curve:a}),k=t(p,{...l,gain:0}),N=n(p,{...u,curve:A}),D=t(p,{...l,gain:0}),E=n(p,{...u,curve:_});return{connectGraph(){m.connect(w),m.connect(M.inputs===void 0?M:M.inputs[0]),w.connect(y,0),w.connect(P,0),w.connect(k,1),w.connect(D,1),M.connect(g),g.connect(S.inputs===void 0?S:S.inputs[0]),g.connect(C.inputs===void 0?C:C.inputs[0]),g.connect(N.inputs===void 0?N:N.inputs[0]),g.connect(E.inputs===void 0?E:E.inputs[0]),S.connect(y.gain),C.connect(P.gain),N.connect(k.gain),E.connect(D.gain),y.connect(v,0,0),k.connect(v,0,0),P.connect(v,0,1),D.connect(v,0,1)},disconnectGraph(){m.disconnect(w),m.disconnect(M.inputs===void 0?M:M.inputs[0]),w.disconnect(y,0),w.disconnect(P,0),w.disconnect(k,1),w.disconnect(D,1),M.disconnect(g),g.disconnect(S.inputs===void 0?S:S.inputs[0]),g.disconnect(C.inputs===void 0?C:C.inputs[0]),g.disconnect(N.inputs===void 0?N:N.inputs[0]),g.disconnect(E.inputs===void 0?E:E.inputs[0]),S.disconnect(y.gain),C.disconnect(P.gain),N.disconnect(k.gain),E.disconnect(D.gain),y.disconnect(v,0,0),k.disconnect(v,0,0),P.disconnect(v,0,1),D.disconnect(v,0,1)}}},f=(p,m,g,v,T)=>{if(m===1)return h(p,g,v,T);if(m===2)return d(p,g,v,T);throw i()};return(p,{channelCount:m,channelCountMode:g,pan:v,...T})=>{if(g==="max")throw i();const x=s(p,{...T,channelCount:1,channelCountMode:g,numberOfInputs:2}),A=t(p,{...T,channelCount:m,channelCountMode:g,gain:1}),_=t(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:v});let{connectGraph:b,disconnectGraph:w}=f(p,m,A,_,x);Object.defineProperty(_.gain,"defaultValue",{get:()=>0}),Object.defineProperty(_.gain,"maxValue",{get:()=>1}),Object.defineProperty(_.gain,"minValue",{get:()=>-1});const y={get bufferSize(){},get channelCount(){return A.channelCount},set channelCount(M){A.channelCount!==M&&(S&&w(),{connectGraph:b,disconnectGraph:w}=f(p,M,A,_,x),S&&b()),A.channelCount=M},get channelCountMode(){return A.channelCountMode},set channelCountMode(M){if(M==="clamped-max"||M==="max")throw i();A.channelCountMode=M},get channelInterpretation(){return A.channelInterpretation},set channelInterpretation(M){A.channelInterpretation=M},get context(){return A.context},get inputs(){return[A]},get numberOfInputs(){return A.numberOfInputs},get numberOfOutputs(){return A.numberOfOutputs},get pan(){return _.gain},addEventListener(...M){return A.addEventListener(M[0],M[1],M[2])},dispatchEvent(...M){return A.dispatchEvent(M[0])},removeEventListener(...M){return A.removeEventListener(M[0],M[1],M[2])}};let S=!1;const P=()=>{b(),S=!0},C=()=>{w(),S=!1};return r(an(y,x),P,C)}},Rp=(s,e,t,n,i,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);fe(l,c);const u=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(u!==null&&u.length<2)throw e();ne(l,{curve:u},"curve"),ne(l,c,"oversample");let h=null,d=!1;return o(l,"curve",m=>()=>m.call(l),m=>g=>(m.call(l,g),d&&(n(g)&&h===null?h=s(a,l):!n(g)&&h!==null&&(h(),h=null)),g)),i(l,()=>{d=!0,n(l.curve)&&(h=s(a,l))},()=>{d=!1,h!==null&&(h(),h=null)})},$p=(s,e,t,n,i)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),u=r.createWaveShaper();fe(l,c),fe(u,c);const h=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),f=t(r,{...c,gain:1}),p=t(r,{...c,gain:-1});let m=null,g=!1,v=null;const T={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(_){h.channelCount=_,d.channelCount=_,l.channelCount=_,f.channelCount=_,u.channelCount=_,p.channelCount=_},get channelCountMode(){return l.channelCountMode},set channelCountMode(_){h.channelCountMode=_,d.channelCountMode=_,l.channelCountMode=_,f.channelCountMode=_,u.channelCountMode=_,p.channelCountMode=_},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(_){h.channelInterpretation=_,d.channelInterpretation=_,l.channelInterpretation=_,f.channelInterpretation=_,u.channelInterpretation=_,p.channelInterpretation=_},get context(){return l.context},get curve(){return v},set curve(_){if(_!==null&&_.length<2)throw e();if(_===null)l.curve=_,u.curve=_;else{const b=_.length,w=new Float32Array(b+2-b%2),y=new Float32Array(b+2-b%2);w[0]=_[0],y[0]=-_[b-1];const S=Math.ceil((b+1)/2),P=(b+1)/2-1;for(let C=1;C<S;C+=1){const M=C/S*P,k=Math.floor(M),N=Math.ceil(M);w[C]=k===N?_[k]:(1-(M-k))*_[k]+(1-(N-M))*_[N],y[C]=k===N?-_[b-1-k]:-((1-(M-k))*_[b-1-k])-(1-(N-M))*_[b-1-N]}w[S]=b%2===1?_[S-1]:(_[S-2]+_[S-1])/2,l.curve=w,u.curve=y}v=_,g&&(n(v)&&m===null?m=s(r,h):m!==null&&(m(),m=null))},get inputs(){return[h]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(_){l.oversample=_,u.oversample=_},addEventListener(..._){return h.addEventListener(_[0],_[1],_[2])},dispatchEvent(..._){return h.dispatchEvent(_[0])},removeEventListener(..._){return h.removeEventListener(_[0],_[1],_[2])}};o!==null&&(T.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==T.oversample&&(T.oversample=a);const x=()=>{h.connect(l).connect(f),h.connect(d).connect(u).connect(p).connect(f),g=!0,n(v)&&(m=s(r,h))},A=()=>{h.disconnect(l),l.disconnect(f),h.disconnect(d),d.disconnect(u),u.disconnect(p),p.disconnect(f),g=!1,m!==null&&(m(),m=null)};return i(an(T,f),x,A)},Se=()=>new DOMException("","NotSupportedError"),Vp={numberOfChannels:1},Fp=(s,e,t,n,i)=>class extends s{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:u,numberOfChannels:h,sampleRate:d}={...Vp,...l},f=n(h,u,d);e(An,()=>An(f))||f.addEventListener("statechange",(()=>{let p=0;const m=g=>{this._state==="running"&&(p>0?(f.removeEventListener("statechange",m),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):p+=1)};return m})()),super(f,h),this._length=u,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Xo(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},qp={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},Lp=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...qp,...l},d=t(u,h),f=r(u),p=f?n():null,m=c.sampleRate/2;super(c,!1,d,p),this._detune=e(this,f,d.detune,153600,-153600),this._frequency=e(this,f,d.frequency,m,-m),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=p,this._oscillatorNodeRenderer!==null&&h.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=h.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const u=this._nativeOscillatorNode.onended;this._onended=u!==null&&u===l?c:u}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){Qt(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),st(this)&&On(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},jp=(s,e,t,n,i)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(u,h)=>{let d=t(u);const f=xe(d,h);if(!f){const p={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(h,p),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(h,d),f?(await s(h,u.detune,d.detune),await s(h,u.frequency,d.frequency)):(await n(h,u.detune,d.detune),await n(h,u.frequency,d.frequency)),await i(u,h,d),d};return{set periodicWave(u){o=u},set start(u){a=u},set stop(u){c=u},render(u,h){const d=r.get(h);return d!==void 0?Promise.resolve(d):l(u,h)}}},Wp={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},Bp=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...Wp,...l},d=t(u,h),f=r(u),p=f?n():null;super(c,!1,d,p),this._nativePannerNode=d,this._orientationX=e(this,f,d.orientationX,Me,Pe),this._orientationY=e(this,f,d.orientationY,Me,Pe),this._orientationZ=e(this,f,d.orientationZ,Me,Pe),this._positionX=e(this,f,d.positionX,Me,Pe),this._positionY=e(this,f,d.positionY,Me,Pe),this._positionZ=e(this,f,d.positionZ,Me,Pe),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},zp=(s,e,t,n,i,r,o,a,c,l)=>()=>{const u=new WeakMap;let h=null;const d=async(f,p)=>{let m=null,g=r(f);const v={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},T={...v,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},x=xe(g,p);if("bufferSize"in g)m=n(p,{...v,gain:1});else if(!x){const A={...T,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(p,A)}if(u.set(p,m===null?g:m),m!==null){if(h===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const C=new o(6,f.context.length,p.sampleRate),M=e(C,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});M.connect(C.destination),h=(async()=>{const k=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(N,D)=>{const E=t(C,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:D===0?1:0});return await a(C,N,E.offset),E}));for(let N=0;N<6;N+=1)k[N].connect(M,0,N),k[N].start(0);return l(C)})()}const A=await h,_=n(p,{...v,gain:1});await c(f,p,_);const b=[];for(let C=0;C<A.numberOfChannels;C+=1)b.push(A.getChannelData(C));let w=[b[0][0],b[1][0],b[2][0]],y=[b[3][0],b[4][0],b[5][0]],S=n(p,{...v,gain:1}),P=i(p,{...T,orientationX:w[0],orientationY:w[1],orientationZ:w[2],positionX:y[0],positionY:y[1],positionZ:y[2]});_.connect(S).connect(P.inputs[0]),P.connect(m);for(let C=128;C<A.length;C+=128){const M=[b[0][C],b[1][C],b[2][C]],k=[b[3][C],b[4][C],b[5][C]];if(M.some((N,D)=>N!==w[D])||k.some((N,D)=>N!==y[D])){w=M,y=k;const N=C/p.sampleRate;S.gain.setValueAtTime(0,N),S=n(p,{...v,gain:0}),P=i(p,{...T,orientationX:w[0],orientationY:w[1],orientationZ:w[2],positionX:y[0],positionY:y[1],positionZ:y[2]}),S.gain.setValueAtTime(1,N),_.connect(S).connect(P.inputs[0]),P.connect(m)}}return m}return x?(await s(p,f.orientationX,g.orientationX),await s(p,f.orientationY,g.orientationY),await s(p,f.orientationZ,g.orientationZ),await s(p,f.positionX,g.positionX),await s(p,f.positionY,g.positionY),await s(p,f.positionZ,g.positionZ)):(await a(p,f.orientationX,g.orientationX),await a(p,f.orientationY,g.orientationY),await a(p,f.orientationZ,g.orientationZ),await a(p,f.positionX,g.positionX),await a(p,f.positionY,g.positionY),await a(p,f.positionZ,g.positionZ)),on(g)?await c(f,p,g.inputs[0]):await c(f,p,g),g};return{render(f,p){const m=u.get(p);return m!==void 0?Promise.resolve(m):d(f,p)}}},Up={disableNormalization:!1},Gp=(s,e,t,n)=>class ra{constructor(r,o){const a=e(r),c=n({...Up,...o}),l=s(a,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===ra.prototype||t.has(r)}},Hp=(s,e)=>(t,n,i)=>(s(n).replay(i),e(n,t,i)),Zp=(s,e,t)=>async(n,i,r)=>{const o=s(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,u])=>{const d=await e(l).render(l,i),f=n.context.destination;!t(l)&&(n!==f||!t(n))&&d.connect(r,u,c)})).reduce((a,c)=>[...a,...c],[]))},Xp=(s,e,t)=>async(n,i,r)=>{const o=e(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const u=await s(a).render(a,i);t(a)||u.connect(r,c)}))},Yp=(s,e,t,n)=>i=>s(An,()=>An(i))?Promise.resolve(s(n,n)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(i.destination),i.startRendering()}),Kp=s=>(e,t)=>{s.set(e,t)},Qp=s=>(e,t)=>s.set(e,t),Jp=(s,e,t,n,i,r,o,a)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(u=>t(u).render(u,l)))).then(()=>i(l)).then(u=>(typeof u.copyFromChannel!="function"?(o(u),Ti(u)):e(r,()=>r(u))||a(u),s.add(u),u)),ef={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},tf=(s,e,t,n,i,r)=>class extends s{constructor(a,c){const l=i(a),u={...ef,...c},h=t(l,u),d=r(l),f=d?n():null;super(a,!1,h,f),this._pan=e(this,d,h.pan)}get pan(){return this._pan}},nf=(s,e,t,n,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const u=xe(l,c);if(!u){const h={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,h)}return r.set(c,l),u?await s(c,a.pan,l.pan):await n(c,a.pan,l.pan),on(l)?await i(a,c,l.inputs[0]):await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},sf=s=>()=>{if(s===null)return!1;try{new s({length:1,sampleRate:44100})}catch{return!1}return!0},rf=(s,e)=>async()=>{if(s===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await n.audioWorklet.addModule(i);const a=new s(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},of=(s,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),n=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{n.disconnect(),i(t.currentTime!==0)},t.startRendering()})},af=()=>new DOMException("","UnknownError"),cf={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},lf=(s,e,t,n,i,r,o)=>class extends s{constructor(c,l){const u=i(c),h={...cf,...l},d=t(u,h),p=r(u)?n():null;super(c,!0,d,p),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},uf=(s,e,t)=>()=>{const n=new WeakMap,i=async(r,o)=>{let a=e(r);if(!xe(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=s(o,l)}return n.set(o,a),on(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},hf=()=>typeof window>"u"?null:window,df=(s,e)=>t=>{t.copyFromChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)n[h]=l[h+o]},t.copyToChannel=(n,i,r=0)=>{const o=s(r),a=s(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),u=n.length;for(let h=o<0?-o:0;h+o<c&&h<u;h+=1)l[h+o]=n[h]}},pf=s=>e=>{e.copyFromChannel=(t=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<e.length)return t.call(e,n,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(n,i,r=0)=>{const o=s(r),a=s(i);if(o<e.length)return t.call(e,n,a,o)})(e.copyToChannel)},ff=s=>(e,t)=>{const n=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=n),s(e,"buffer",i=>()=>{const r=i.call(e);return r===n?null:r},i=>r=>i.call(e,r===null?n:r))},mf=(s,e)=>(t,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw s()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw s()}});const i=t.createBufferSource();e(n,()=>{const a=n.numberOfInputs;for(let c=0;c<a;c+=1)i.connect(n,0,c)},()=>i.disconnect(n))},oa=(s,e,t)=>s.copyFromChannel===void 0?s.getChannelData(t)[0]:(s.copyFromChannel(e,t),e[0]),aa=s=>{if(s===null)return!1;const e=s.length;return e%2!==0?s[Math.floor(e/2)]!==0:s[e/2-1]+s[e/2]!==0},$n=(s,e,t,n)=>{let i=s;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(s,e,{get:t(r),set:n(o)})},gf=s=>({...s,outputChannelCount:s.outputChannelCount!==void 0?s.outputChannelCount:s.numberOfInputs===1&&s.numberOfOutputs===1?[s.channelCount]:Array.from({length:s.numberOfOutputs},()=>1)}),_f=s=>({...s,channelCount:s.numberOfOutputs}),vf=s=>{const{imag:e,real:t}=s;return e===void 0?t===void 0?{...s,imag:[0,0],real:[0,0]}:{...s,imag:Array.from(t,()=>0),real:t}:t===void 0?{...s,imag:e,real:Array.from(e,()=>0)}:{...s,imag:e,real:t}},ca=(s,e,t)=>{try{s.setValueAtTime(e,t)}catch(n){if(n.code!==9)throw n;ca(s,e,t+1e-7)}},yf=s=>{const e=s.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},bf=s=>{const e=s.createBufferSource(),t=s.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},wf=s=>{const e=s.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},Pi=s=>{const e=s.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},la=s=>{const e=s.createBuffer(1,1,44100),t=s.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},ki=s=>{const e=s.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},xf=s=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(s)}finally{e.close(),t.close()}},Tf=s=>{s.start=(e=>(t=0,n=0,i)=>{const r=s.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/s.context.sampleRate?e.call(s,t,0,0):e.call(s,t,o,i)})(s.start)},ua=(s,e)=>{const t=e.createGain();s.connect(t);const n=(i=>()=>{i.call(s,t),s.removeEventListener("ended",n)})(s.disconnect);s.addEventListener("ended",n),an(s,t),s.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(s,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(s,o),r=!0}})(s.stop)},cn=(s,e)=>t=>{const n={value:s};return Object.defineProperties(t,{currentTarget:n,target:n}),typeof e=="function"?e.call(s,t):e.handleEvent.call(s,t)},Mf=Bu(Vt),Af=Xu(Vt),Cf=ad(bs),ha=new WeakMap,Sf=Ad(ha),Ge=Vh(new Map,new WeakMap),Ye=hf(),da=tp(Ge,Ke),Ni=Md(Ae),be=Zp(Ae,Ni,Et),Pf=eh(da,ee,be),Q=Pd(ys),ot=Pp(Ye),K=Ud(ot),pa=new WeakMap,fa=_d(cn),Vn=rp(Ye),Oi=jd(Vn),Ei=Wd(Ye),ma=Bd(Ye),Cn=ap(Ye),ce=Ah(zu(Wo),Zu(Mf,Af,rs,Cf,os,Ae,Sf,Nn,ee,Vt,st,Et,Yn),Ge,$d(Xs,os,Ae,ee,Mn,st),Ke,ws,Se,sd(rs,Xs,Ae,ee,Mn,Q,st,K),ud(pa,Ae,Ue),fa,Q,Oi,Ei,ma,K,Cn),kf=Ju(ce,Pf,Ke,da,Q,K),Ii=new WeakSet,Wr=np(Ye),ga=Yh(new Uint32Array(1)),Di=df(ga,Ke),Ri=pf(ga),_a=nh(Ii,Ge,Se,Wr,ot,sf(Wr),Di,Ri),xs=Yu(Ne),va=Xp(Ni,En,Et),Qe=zh(va),ln=ip(xs,Ge,yf,bf,wf,Pi,la,ki,Tf,ff($n),ua),Je=Hp(Cd(En),va),Nf=rh(Qe,ln,ee,Je,be),He=Ch(Uu(Bo),pa,xi,Sh,Vu,Fu,qu,Lu,ju,Gs,qo,Vn,ca),Of=ih(ce,Nf,He,ge,ln,Q,K,cn),Ef=fh(ce,mh,Ke,ge,op(Ne,$n),Q,K,be),If=$h(Qe,sa,ee,Je,be),Ft=Qp(ha),Df=Rh(ce,He,If,ws,sa,Q,K,Ft),vt=Jd(Vt,Ei),Rf=mf(ge,vt),yt=fp(Vn,Rf),$f=Lh(yt,ee,be),Vf=qh(ce,$f,yt,Q,K),Ff=Bh(Dn,ee,be),qf=Wh(ce,Ff,Dn,Q,K,_f),Lf=_p(xs,ln,Ne,vt),un=gp(xs,Ge,Lf,Pi,ki),jf=Xh(Qe,un,ee,Je,be),Wf=Zh(ce,He,jf,un,Q,K,cn),ya=vp(Se,$n),Bf=Jh(ya,ee,be),zf=Qh(ce,Bf,ya,Q,K,Ft),Uf=od(Qe,ia,ee,Je,be),Gf=rd(ce,He,Uf,ia,Q,K,Ft),ba=yp(Se),Hf=fd(Qe,ba,ee,Je,be),Zf=pd(ce,He,Hf,ba,Se,Q,K,Ft),Xf=xd(Qe,Ne,ee,Je,be),Yf=wd(ce,He,Xf,Ne,Q,K),Kf=Tp(ws,ge,Rn,Se),Ts=Yp(Ge,Ne,Rn,of(Ne,ot)),Qf=Rd(ln,ee,ot,be,Ts),Jf=bp(Kf),em=Id(ce,Jf,Qf,Q,K,Ft),tm=gh(He,yt,un,Rn,Se,oa,K,$n),wa=new WeakMap,nm=Qd(Ef,tm,fa,K,wa,cn),xa=kp(xs,Ge,Pi,la,ki,ua),sm=jp(Qe,xa,ee,Je,be),im=Lp(ce,He,xa,sm,Q,K,cn),Ta=Gh(ln),rm=$p(Ta,ge,Ne,aa,vt),Ms=Rp(Ta,ge,rm,aa,vt,Vn,$n),om=Op(rs,ge,yt,Ne,Rn,Ms,Se,os,oa,vt),Ma=Np(om),am=zp(Qe,yt,un,Ne,Ma,ee,ot,Je,be,Ts),cm=Bp(ce,He,Ma,am,Q,K,Ft),lm=Ep(Ke),um=Gp(lm,Q,new WeakSet,vf),hm=Dp(yt,Dn,Ne,Ms,Se,vt),Aa=Ip(hm,Se),dm=nf(Qe,Aa,ee,Je,be),pm=tf(ce,He,Aa,dm,Q,K),fm=uf(Ms,ee,be),mm=lf(ce,ge,Ms,fm,Q,K,Ft),Ca=Gd(Ye),$i=vd(Ye),Sa=new WeakMap,gm=kd(Sa,ot),_m=Ca?Hu(Ge,Se,gd(Ye),$i,yd(Wu),Q,gm,K,Cn,new WeakMap,new WeakMap,rf(Cn,ot),Ye):void 0,vm=zd(Oi,K),ym=nd(Ii,Ge,td,md,new WeakSet,Q,vm,ss,An,Di,Ri),Pa=Ih(_m,kf,_a,Of,Df,Vf,qf,Wf,zf,ym,Gf,Zf,Yf,em,nm,im,cm,um,pm,mm),bm=Hd(ce,Mp,Q,K),wm=Xd(ce,Ap,Q,K),xm=Yd(ce,Cp,Q,K),Tm=Sp(ge,K),Mm=Kd(ce,Tm,Q),Am=ph(Pa,ge,Se,af,bm,wm,xm,Mm,Vn),Vi=Nd(wa),Cm=Ku(Vi),ka=Uh(Ke),Sm=cd(Vi),Na=hd(Ke),Oa=new WeakMap,Pm=Td(Oa,Ue),km=pp(ka,Ke,ge,yt,Dn,un,Ne,Rn,Se,Na,$i,Pm,vt),Nm=lp(ge,km,Ne,Se,vt),Om=Eh(Qe,ka,ln,yt,Dn,un,Ne,Sm,Na,$i,ee,Cn,ot,Je,be,Ts),Em=Sd(Sa),Im=Kp(Oa),Br=Ca?kh(Cm,ce,He,Om,Nm,Ae,Em,Q,K,Cn,gf,Im,xf,cn):void 0,Dm=ed(Se,ot),Rm=Jp(Ii,Ge,Ni,Vi,Ts,ss,Di,Ri),$m=Fp(Pa,Ge,ge,Dm,Rm),Vm=Vd(ys,Oi),Fm=Fd(wi,Ei),qm=qd(xi,ma),Lm=Ld(ys,K);function Fe(s){return s===void 0}function U(s){return s!==void 0}function jm(s){return typeof s=="function"}function It(s){return typeof s=="number"}function Ct(s){return Object.prototype.toString.call(s)==="[object Object]"&&s.constructor===Object}function Wm(s){return typeof s=="boolean"}function We(s){return Array.isArray(s)}function rt(s){return typeof s=="string"}function Un(s){return rt(s)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(s)}function j(s,e){if(!s)throw new Error(e)}function mt(s,e,t=1/0){if(!(e<=s&&s<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${s}`)}function Ea(s){!s.isOffline&&s.state!=="running"&&Fi('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let Ia=!1,zr=!1;function Ur(s){Ia=s}function Bm(s){Fe(s)&&Ia&&!zr&&(zr=!0,Fi("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let Da=console;function zm(...s){Da.log(...s)}function Fi(...s){Da.warn(...s)}function Um(s){return new Am(s)}function Gm(s,e,t){return new $m(s,e,t)}const Ie=typeof self=="object"?self:null,Hm=Ie&&(Ie.hasOwnProperty("AudioContext")||Ie.hasOwnProperty("webkitAudioContext"));function Zm(s,e,t){return j(U(Br),"AudioWorkletNode only works in a secure context (https or localhost)"),new(s instanceof Ie?.BaseAudioContext?Ie?.AudioWorkletNode:Br)(s,e,t)}function Ze(s,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,n);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function he(s,e,t,n){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(u){try{l(n.next(u))}catch(h){o(h)}}function c(u){try{l(n.throw(u))}catch(h){o(h)}}function l(u){u.done?r(u.value):i(u.value).then(a,c)}l((n=n.apply(s,e||[])).next())})}class Xm{constructor(e,t,n,i){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(i||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const e=new Blob([`
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
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),n=new Worker(t);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type==="worker"&&((t=this._worker)===null||t===void 0||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function Dt(s){return qm(s)}function ft(s){return Fm(s)}function Kn(s){return Lm(s)}function Bt(s){return Vm(s)}function Ym(s){return s instanceof _a}function Km(s,e){return s==="value"||Dt(e)||ft(e)||Ym(e)}function Ht(s,...e){if(!e.length)return s;const t=e.shift();if(Ct(s)&&Ct(t))for(const n in t)Km(n,t[n])?s[n]=t[n]:Ct(t[n])?(s[n]||Object.assign(s,{[n]:{}}),Ht(s[n],t[n])):Object.assign(s,{[n]:t[n]});return Ht(s,...e)}function Qm(s,e){return s.length===e.length&&s.every((t,n)=>e[n]===t)}function L(s,e,t=[],n){const i={},r=Array.from(e);if(Ct(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(s,a))||(Ht(i,{[n]:r[0]}),t.splice(t.indexOf(n),1),r.shift())),r.length===1&&Ct(r[0]))Ht(i,r[0]);else for(let o=0;o<t.length;o++)U(r[o])&&(i[t[o]]=r[o]);return Ht(s,i)}function Jm(s){return s.constructor.getDefaults()}function Zt(s,e){return Fe(s)?e:s}function Gr(s,e){return e.forEach(t=>{Reflect.has(s,t)&&delete s[t]}),s}class at{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||Ie&&this.toString()===Ie.TONE_DEBUG_CLASS)&&zm(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}at.version=Fo;const qi=1e-6;function Jt(s,e){return s>e+qi}function ei(s,e){return Jt(s,e)||Le(s,e)}function us(s,e){return s+qi<e}function Le(s,e){return Math.abs(s-e)<qi}function eg(s,e,t){return Math.max(Math.min(s,t),e)}class qe extends at{constructor(){super(),this.name="Timeline",this._timeline=[];const e=L(qe.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(j(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];j(ei(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const n=this._search(e,t);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const n=this._search(e,t);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const n=this._search(e);return n-1>=0?this._timeline[n-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Le(this._timeline[t].time,e)){for(let n=t;n>=0&&Le(this._timeline[n].time,e);n--)t=n;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&ei(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let n=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][t]<=e)return i-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const a=this._timeline[o],c=this._timeline[o+1];if(Le(a[t],e)){for(let l=o;l<this._timeline.length;l++){const u=this._timeline[l];if(Le(u[t],e))o=l;else break}return o}else{if(us(a[t],e)&&Jt(c[t],e))return o;Jt(a[t],e)?r=o:n=o+1}}return-1}_iterate(e,t=0,n=this._timeline.length-1){this._timeline.slice(t,n+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const n=this._search(e);return n!==-1&&this._iterate(t,0,n),this}forEachAfter(e,t){const n=this._search(e);return this._iterate(t,n+1),this}forEachBetween(e,t,n){let i=this._search(e),r=this._search(t);return i!==-1&&r!==-1?(this._timeline[i].time!==e&&(i+=1),this._timeline[r].time===t&&(r-=1),this._iterate(n,i,r)):i===-1&&this._iterate(n,0,r),this}forEachFrom(e,t){let n=this._search(e);for(;n>=0&&this._timeline[n].time>=e;)n--;return this._iterate(t,n+1),this}forEachAtTime(e,t){const n=this._search(e);if(n!==-1&&Le(this._timeline[n].time,e)){let i=n;for(let r=n;r>=0&&Le(this._timeline[r].time,e);r--)i=r;this._iterate(r=>{t(r)},i,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Ra=[];function As(s){Ra.push(s)}function tg(s){Ra.forEach(e=>e(s))}const $a=[];function Cs(s){$a.push(s)}function ng(s){$a.forEach(e=>e(s))}class Fn extends at{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(i=>{Fe(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(t)}),this}once(e,t){const n=(...i)=>{t(...i),this.off(e,n)};return this.on(e,n),this}off(e,t){return e.split(/\W+/).forEach(i=>{if(Fe(this._events)&&(this._events={}),this._events.hasOwnProperty(i))if(Fe(t))this._events[i]=[];else{const r=this._events[i];for(let o=r.length-1;o>=0;o--)r[o]===t&&r.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const n=this._events[e].slice(0);for(let i=0,r=n.length;i<r;i++)n[i].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const n=Object.getOwnPropertyDescriptor(Fn.prototype,t);Object.defineProperty(e.prototype,t,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class Va extends Fn{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class qn extends Va{constructor(){var e,t;super(),this.name="Context",this._constants=new Map,this._timeouts=new qe,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=L(qn.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((e=arguments[0])===null||e===void 0?void 0:e.latencyHint)||""):(this._context=Um({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new Xm(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((t=arguments[0])===null||t===void 0)&&t.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(tg(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,n){return this._context.createBuffer(e,t,n)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,n){return this._context.createPeriodicWave(e,t,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return j(Bt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return j(Bt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return j(Bt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){j(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){j(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){j(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){j(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return Zm(this.rawContext,e,t)}addAudioWorkletModule(e){return he(this,void 0,void 0,function*(){j(U(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(e)),yield this._workletPromise})}workletsAreReady(){return he(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Bt(this._context)?this._context.resume():Promise.resolve()}close(){return he(this,void 0,void 0,function*(){Bt(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&ng(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=e;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=t,i.loop=!0,i.start(0),this._constants.set(e,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){const e=this.now();this._timeouts.forEachBefore(e,t=>{t.callback(),this._timeouts.remove(t)})}setTimeout(e,t){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:n+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const n=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),i()},id:n,time:r+t})};return i(),n}}class sg extends Va{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,n){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return he(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function ie(s,e){We(e)?e.forEach(t=>ie(s,t)):Object.defineProperty(s,e,{enumerable:!0,writable:!1})}function Fa(s,e){We(e)?e.forEach(t=>Fa(s,t)):Object.defineProperty(s,e,{writable:!0})}const Y=()=>{};class J extends at{constructor(){super(),this.name="ToneAudioBuffer",this.onload=Y;const e=L(J.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,rt(e.url)?this.load(e.url).catch(e.onerror):e.url&&this.set(e.url)}static getDefaults(){return{onerror:Y,onload:Y,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:$e().sampleRate}set(e){return e instanceof J?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return he(this,void 0,void 0,function*(){const t=J.load(e).then(n=>{this.set(n),this.onload(this)});J.downloads.push(t);try{yield t}finally{const n=J.downloads.indexOf(t);J.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=We(e)&&e[0].length>0,n=t?e.length:1,i=t?e[0].length:e.length,r=$e(),o=r.createBuffer(n,i,r.sampleRate),a=!t&&n===1?[e]:e;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(e){if(It(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const n=this.numberOfChannels;for(let i=0;i<n;i++){const r=this.toArray(i);for(let o=0;o<r.length;o++)t[o]+=r[o]}t=t.map(i=>i/n),this.fromArray(t)}return this}toArray(e){if(It(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let n=0;n<this.numberOfChannels;n++)t[n]=this.getChannelData(n);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){j(this.loaded,"Buffer is not loaded");const n=Math.floor(e*this.sampleRate),i=Math.floor(t*this.sampleRate);j(n<i,"The start time must be less than the end time");const r=i-n,o=$e().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,i),a);return new J(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new J().fromArray(e)}static fromUrl(e){return he(this,void 0,void 0,function*(){return yield new J().load(e)})}static load(e){return he(this,void 0,void 0,function*(){const t=J.baseUrl===""||J.baseUrl.endsWith("/")?J.baseUrl:J.baseUrl+"/",n=yield fetch(t+e);if(!n.ok)throw new Error(`could not load url: ${e}`);const i=yield n.arrayBuffer();return yield $e().decodeAudioData(i)})}static supportsType(e){const t=e.split("."),n=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return he(this,void 0,void 0,function*(){for(yield Promise.resolve();J.downloads.length;)yield J.downloads[0]})}}J.baseUrl="";J.downloads=[];class Li extends qn{constructor(){super({clockSource:"offline",context:Kn(arguments[0])?arguments[0]:Gm(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:Kn(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=Kn(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return he(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const n=Math.floor(this.sampleRate/128);e&&t%n===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(){return he(this,arguments,void 0,function*(e=!0){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new J(t)})}close(){return Promise.resolve()}}const qa=new sg;let At=qa;function $e(){return At===qa&&Hm&&ig(new qn),At}function ig(s,e=!1){e&&At.dispose(),Bt(s)?At=new qn(s):Kn(s)?At=new Li(s):At=s}function rg(){return At.resume()}if(Ie&&!Ie.TONE_SILENCE_LOGGING){const e=` * Tone.js v${Fo} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function og(s){return Math.pow(10,s/20)}function ag(s){return 20*(Math.log(s)/Math.LN10)}function La(s){return Math.pow(2,s/12)}let Ss=440;function cg(){return Ss}function lg(s){Ss=s}function ti(s){return Math.round(ja(s))}function ja(s){return 69+12*Math.log2(s/Ss)}function ug(s){return Ss*Math.pow(2,(s-69)/12)}class ji extends at{constructor(e,t,n){super(),this.defaultUnits="s",this._val=t,this._units=n,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const n=parseInt(e,10),i=t==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/n)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,n)=>{let i=0;return e&&e!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i+=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i+=this._beatsToUnits(parseFloat(n)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof ji&&this.fromType(this._val),Fe(this._val))return this._noArg();if(rt(this._val)&&Fe(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(Ct(this._val)){let e=0;for(const t in this._val)if(U(this._val[t])){const n=this._val[t],i=new this.constructor(this.context,t).valueOf()*n;e+=i}return e}if(U(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return rt(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class je extends ji{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new je(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const n=new this.constructor(this.context,e).valueOf(),i=this.valueOf(),a=Math.round(i/n)*n-i;return i+a*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let n=t[0],i=new je(this.context,t[0]).toSeconds();return t.forEach(r=>{const o=new je(this.context,r).toSeconds();Math.abs(o-e)<Math.abs(i-e)&&(n=r,i=o)}),n}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const n=Math.floor(t/this._getTimeSignature());let i=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[n,t,i].join(":")}toTicks(){const e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return ti(this.toFrequency())}_now(){return this.context.now()}}class Ve extends je{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return cg()}static set A4(e){lg(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:Ve.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(e,t){const i=hg[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?i:Ve.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,n){let i=1;return e&&e!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i*=this._beatsToUnits(parseFloat(t))),n&&n!=="0"&&(i*=this._beatsToUnits(parseFloat(n)/4)),i}}})}transpose(e){return new Ve(this.context,this.valueOf()*La(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return ti(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/Ve.A4);let n=Math.round(12*t)+57;const i=Math.floor(n/12);return i<0&&(n+=-12*i),dg[n%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return ug(e)}static ftom(e){return ti(e)}}const hg={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},dg=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class vn extends je{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class ke extends at{constructor(){super();const e=L(ke.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:$e()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return Bm(e),new je(this.context,e).toSeconds()}toFrequency(e){return new Ve(this.context,e).toFrequency()}toTicks(e){return new vn(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(n=>{Fe(e[n])&&delete t[n]}),t}get(){const e=Jm(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const n=this[t];U(n)&&U(n.value)&&U(n.setValueAtTime)?e[t]=n.value:n instanceof ke?e[t]=n._getPartialProperties(e[t]):We(n)||It(n)||rt(n)||Wm(n)?e[t]=n:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&U(this[t])&&(this[t]&&U(this[t].value)&&U(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof ke?this[t].set(e[t]):this[t]=e[t])}),this}}class Wi extends qe{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,n){return mt(t,0),this.add(Object.assign({},n,{state:e,time:t})),this}getLastState(e,t){const n=this._search(t);for(let i=n;i>=0;i--){const r=this._timeline[i];if(r.state===e)return r}}getNextState(e,t){const n=this._search(t);if(n!==-1)for(let i=n;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===e)return r}}}class X extends ke{constructor(){const e=L(X.getDefaults(),arguments,["param","units","convert"]);for(super(e),this.name="Param",this.overridden=!1,this._minOutput=1e-7,j(U(e.param)&&(Dt(e.param)||e.param instanceof X),"param must be an AudioParam");!Dt(e.param);)e.param=e.param._param;this._swappable=U(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new qe(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,U(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(ke.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return U(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return U(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return U(this.maxValue)&&U(this.minValue)&&mt(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?og(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?ag(e):e}setValueAtTime(e,t){const n=this.toSeconds(t),i=this._fromType(e);return j(isFinite(i)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",e,n),this._events.add({time:n,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,n),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),n=this._events.getAfter(t),i=this._events.get(t);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(i.time);let a;o===null?a=this._initialValue:a=o.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,a,i.value,i.constant,t))}else if(n===null)r=i.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=i.value;if(i.type==="setTargetAtTime"){const a=this._events.getBefore(i.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,o,n.time,n.value,t):r=this._exponentialInterpolate(i.time,o,n.time,n.value,t)}else r=i.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const n=this._fromType(e),i=this.toSeconds(t);return j(isFinite(n)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(n),this._events.add({time:i,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",e,i),this._param.linearRampToValueAtTime(n,i),this}exponentialRampToValueAtTime(e,t){let n=this._fromType(e);n=Le(n,0)?this._minOutput:n,this._assertRange(n);const i=this.toSeconds(t);return j(isFinite(n)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",e,i),this._param.exponentialRampToValueAtTime(n,i),this}exponentialRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(e,n+this.toSeconds(t)),this}linearRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(e,n+this.toSeconds(t)),this}targetRampTo(e,t,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(e,n,t),this}exponentialApproachValueAtTime(e,t,n){t=this.toSeconds(t),n=this.toSeconds(n);const i=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(e,t,i),this.cancelAndHoldAtTime(t+n*.9),this.linearRampToValueAtTime(e,t+n),this}setTargetAtTime(e,t,n){const i=this._fromType(e);j(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(i),j(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",e,r,n),this._param.setTargetAtTime(i,r,n),this}setValueCurveAtTime(e,t,n,i=1){n=this.toSeconds(n),t=this.toSeconds(t);const r=this._fromType(e[0])*i;this.setValueAtTime(this._toType(r),t);const o=n/(e.length-1);for(let a=1;a<e.length;a++){const c=this._fromType(e[a])*i;this.linearRampToValueAtTime(this._toType(c),t+a*o)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return j(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),n=this._fromType(this.getValueAtTime(t));j(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+n);const i=this._events.get(t),r=this._events.getAfter(t);return i&&Le(i.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),t)),this._events.add({time:t,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,t),this}rampTo(e,t=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,n):this.linearRampTo(e,t,n),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const n=this._events.get(t);if(n&&n.type==="setTargetAtTime"){const i=this._events.getAfter(n.time),r=i?i.time:t+2,o=(r-t)/10;for(let a=t;a<r;a+=o)e.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?e.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?e.setTargetAtTime(i.value,i.time,i.constant):e[i.type](i.value,i.time)}),this}setParam(e){j(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,n,i,r){return n+(t-n)*Math.exp(-(r-e)/i)}_linearInterpolate(e,t,n,i,r){return t+(i-t)*((r-e)/(n-e))}_exponentialInterpolate(e,t,n,i,r){return t*Math.pow(i/t,(r-e)/(n-e))}}class W extends ke{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return U(this.input)?Dt(this.input)||this.input instanceof X?1:this.input.numberOfInputs:0}get numberOfOutputs(){return U(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return U(e)&&(e instanceof W||ft(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(n=>{n.channelCount=e.channelCount,n.channelCountMode=e.channelCountMode,n.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();j(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,n=0){return hn(this,e,t,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Fi("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,n=0){return pg(this,e,t,n),this}chain(...e){return ni(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),U(this.input)&&(this.input instanceof W?this.input.dispose():ft(this.input)&&this.input.disconnect()),U(this.output)&&(this.output instanceof W?this.output.dispose():ft(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function ni(...s){const e=s.shift();s.reduce((t,n)=>(t instanceof W?t.connect(n):ft(t)&&hn(t,n),n),e)}function hn(s,e,t=0,n=0){for(j(U(s),"Cannot connect from undefined node"),j(U(e),"Cannot connect to undefined node"),(e instanceof W||ft(e))&&j(e.numberOfInputs>0,"Cannot connect to node with no inputs"),j(s.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof W||e instanceof X;)U(e.input)&&(e=e.input);for(;s instanceof W;)U(s.output)&&(s=s.output);Dt(e)?s.connect(e,t):s.connect(e,t,n)}function pg(s,e,t=0,n=0){if(U(e))for(;e instanceof W;)e=e.input;for(;!ft(s);)U(s.output)&&(s=s.output);Dt(e)?s.disconnect(e,t):ft(e)?s.disconnect(e,t,n):s.disconnect()}class we extends W{constructor(){const e=L(we.getDefaults(),arguments,["gain","units"]);super(e),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new X({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),ie(this,"gain")}static getDefaults(){return Object.assign(W.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class en extends W{constructor(e){super(e),this.onended=Y,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new we({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const n=this.toSeconds(t);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(W.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:Y})}_startGain(e,t=1){j(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=e+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+n):this._gainNode.gain.exponentialApproachValueAtTime(t,e,n)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){j(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==Y&&(this.onended(this),this.onended=Y,!this.context.isOffline)){const e=()=>this.dispose();typeof requestIdleCallback<"u"?requestIdleCallback(e):setTimeout(e,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),j(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=Y,this}}class Bi extends en{constructor(){const e=L(Bi.getDefaults(),arguments,["offset"]);super(e),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),hn(this._source,this._gainNode),this.offset=new X({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(en.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class _e extends W{constructor(){const e=L(_e.getDefaults(),arguments,["value","units"]);super(e),this.name="Signal",this.override=!0,this.output=this._constantSource=new Bi({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(W.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,n=0){return zi(this,e,t,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,n){return this._param.exponentialRampTo(e,t,n),this}linearRampTo(e,t,n){return this._param.linearRampTo(e,t,n),this}targetRampTo(e,t,n){return this._param.targetRampTo(e,t,n),this}exponentialApproachValueAtTime(e,t,n){return this._param.exponentialApproachValueAtTime(e,t,n),this}setTargetAtTime(e,t,n){return this._param.setTargetAtTime(e,t,n),this}setValueCurveAtTime(e,t,n,i){return this._param.setValueCurveAtTime(e,t,n,i),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,n){return this._param.rampTo(e,t,n),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function zi(s,e,t,n){(e instanceof X||Dt(e)||e instanceof _e&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof _e&&(e.overridden=!0)),hn(s,e,t,n)}class Ui extends X{constructor(){const e=L(Ui.getDefaults(),arguments,["value"]);super(e),this.name="TickParam",this._events=new qe(1/0),this._multiplier=1,this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(X.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,n){t=this.toSeconds(t),this.setRampPoint(t);const i=this._fromType(e),r=this._events.get(t),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){const c=n*a+t,l=this._exponentialApproach(r.time,r.value,i,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const n=this.toSeconds(t);super.setValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){const n=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const i=this._events.get(n),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,n);return i.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const n=this._fromType(e),i=this._events.get(t),r=Math.round(Math.max((t-i.time)*10,1)),o=(t-i.time)/r;for(let a=0;a<=r;a++){const c=o*a+i.time,l=this._exponentialInterpolate(i.time,i.value,t,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Fe(e.ticks)){const o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}const n=this._fromType(this.getValueAtTime(e.time));let i=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(n+i)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),n=this._events.get(t);return Math.max(this._getTicksUntilEvent(n,t),0)}getDurationOfTicks(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(t);return this.getTimeOfTick(i+e)-n}getTimeOfTick(e){const t=this._events.get(e,"ticks"),n=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&n&&n.type==="linearRampToValueAtTime"&&t.value!==n.value){const i=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(n.time))-i)/(n.time-t.time),a=Math.sqrt(Math.pow(i,2)-2*o*(t.ticks-e)),c=(-i+a)/o,l=(-i-a)/o;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const n=this.toSeconds(t),i=this.toSeconds(e),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+i)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class Gi extends _e{constructor(){const e=L(Gi.getDefaults(),arguments,["value"]);super(e),this.name="TickSignal",this.input=this._param=new Ui({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(_e.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class Hi extends ke{constructor(){const e=L(Hi.getDefaults(),arguments,["frequency"]);super(e),this.name="TickSource",this._state=new Wi,this._tickOffset=new qe,this._ticksAtTime=new qe,this._secondsAtTime=new qe,this.frequency=new Gi({context:this.context,units:e.units,value:e.frequency}),ie(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},ke.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const n=this.toSeconds(e);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),U(t)&&this.setTicksAtTime(t,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const n=this._state.get(t);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),n=this._state.getLastState("stopped",t),i=this._ticksAtTime.get(t),r={state:"paused",time:t};this._state.add(r);let o=i||n,a=i?i.ticks:0,c=null;return this._state.forEachBetween(o.time,t+this.sampleTime,l=>{let u=o.time;const h=this._tickOffset.get(l.time);h&&h.time>=o.time&&(a=h.ticks,u=h.time),o.state==="started"&&l.state!=="started"&&(a+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(u),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:a})),o=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),a}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),n=this.frequency.timeToTicks(e,t);this.setTicksAtTime(n,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);const i=this._secondsAtTime.get(e);let r=i||t,o=i?i.seconds:0,a=null;return this._state.forEachBetween(r.time,e+this.sampleTime,c=>{let l=r.time;const u=this._tickOffset.get(c.time);u&&u.time>=r.time&&(o=u.seconds,l=u.time),r.state==="started"&&c.state!=="started"&&(o+=c.time-l,c.time!==n.time&&(a={state:c.state,time:c.time,seconds:o})),r=c}),this._state.remove(n),a&&this._secondsAtTime.add(a),o}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const n=this._tickOffset.get(t),i=this._state.get(t),r=Math.max(n.time,i.time),o=this.frequency.getTicksAtTime(r)+e-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,n){let i=this._state.get(e);this._state.forEachBetween(e,t,o=>{i&&i.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(i.time,e),o.time-this.sampleTime,n),i=o});let r=null;if(i&&i.state==="started"){const o=Math.max(i.time,e),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(i.time),l=a-c;let u=Math.ceil(l)-l;u=Le(u,1)?0:u;let h=this.frequency.getTimeOfTick(a+u);for(;h<t;){try{n(h,Math.round(this.getTicksAtTime(h)))}catch(d){r=d;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class Ps extends ke{constructor(){const e=L(Ps.getDefaults(),arguments,["callback","frequency"]);super(e),this.name="Clock",this.callback=Y,this._lastUpdate=0,this._state=new Wi("stopped"),this._boundLoop=this._loop.bind(this),this.callback=e.callback,this._tickSource=new Hi({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,ie(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(ke.getDefaults(),{callback:Y,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){Ea(this.context);const n=this.toSeconds(e);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,t),n<this._lastUpdate&&this.emit("start",n,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const n=this.toSeconds(t),i=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(i+e,n)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,n=>{switch(n.state){case"started":const i=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,i);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(e,t,(n,i)=>{this.callback(n,i)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Fn.mixin(Ps);class dn extends W{constructor(){const e=L(dn.getDefaults(),arguments,["volume"]);super(e),this.name="Volume",this.input=this.output=new we({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,ie(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(W.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Zi extends W{constructor(){const e=L(Zi.getDefaults(),arguments);super(e),this.name="Destination",this.input=new dn({context:this.context}),this.output=new we({context:this.context}),this.volume=this.input.volume,ni(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(W.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),ni(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}As(s=>{s.destination=new Zi({context:s})});Cs(s=>{s.destination.dispose()});class fg extends W{constructor(){super(...arguments),this.name="Listener",this.positionX=new X({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new X({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new X({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new X({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new X({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new X({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new X({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new X({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new X({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(W.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}As(s=>{s.listener=new fg({context:s})});Cs(s=>{s.listener.dispose()});class Xi extends at{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=L(Xi.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const n=e.urls[t];this.add(t,n,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:Y,onload:Y,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return j(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,n=Y,i=Y){return rt(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(e.toString(),new J(this.baseUrl+t,n,i))):this._buffers.set(e.toString(),new J(t,n,i)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class Ut extends vn{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class mg extends ke{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new qe,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;this._events.forEachBefore(e+this.anticipation,t=>{e-t.time<=this.expiration&&t.callback(),this._events.remove(t)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}As(s=>{s.draw=new mg({context:s})});Cs(s=>{s.draw.dispose()});class gg extends at{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){j(U(e.time),"Events must have a time property"),j(U(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new _g(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const n of t)if(n.event===e){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let n,i=null;if(t>0)if(e.left.right===null)n=e.left,n.right=e.right,i=n;else{for(n=e.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,i=n.parent,n.left=e.left,n.right=e.right)}else if(e.right.left===null)n=e.right,n.left=e.left,i=n;else{for(n=e.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,i=n.parent,n.left=e.left,n.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=n:e.parent.right=n:this._setRoot(n),i&&this._rebalance(i)}e.dispose()}_rotateLeft(e){const t=e.parent,n=e.isLeftChild(),i=e.right;i&&(e.right=i.left,i.left=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rotateRight(e){const t=e.parent,n=e.isLeftChild(),i=e.left;i&&(e.left=i.right,i.right=e),t!==null?n?t.left=i:t.right=i:this._setRoot(i)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let n=t[0];for(let i=1;i<t.length;i++)t[i].low>n.low&&(n=t[i]);return n.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(n=>t.push(n)),t.forEach(n=>{n.event&&e(n.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const n=[];this._root.search(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}forEachFrom(e,t){if(this._root!==null){const n=[];this._root.searchAfter(e,n),n.forEach(i=>{i.event&&t(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class _g{constructor(e,t,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class vg extends at{constructor(e){super(),this.name="TimelineValue",this._timeline=new qe({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class tn extends W{constructor(){super(L(tn.getDefaults(),arguments,["context"]))}connect(e,t=0,n=0){return zi(this,e,t,n),this}}class Ln extends tn{constructor(){const e=L(Ln.getDefaults(),arguments,["mapping","length"]);super(e),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,We(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):jm(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(_e.getDefaults(),{length:1024})}setMap(e,t=1024){const n=new Float32Array(t);for(let i=0,r=t;i<r;i++){const o=i/(r-1)*2-1;n[i]=e(o,i)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(n=>n.includes(e));j(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class Yi extends tn{constructor(){const e=L(Yi.getDefaults(),arguments,["value"]);super(e),this.name="Pow",this._exponentScaler=this.input=this.output=new Ln({context:this.context,mapping:this._expFunc(e.value),length:8192}),this._exponent=e.value}static getDefaults(){return Object.assign(tn.getDefaults(),{value:1})}_expFunc(e){return t=>Math.pow(Math.abs(t),e)}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class gt{constructor(e,t){this.id=gt._eventId++,this._remainderTime=0;const n=Object.assign(gt.getDefaults(),t);this.transport=e,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:Y,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){const t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}gt._eventId=0;class Ki extends gt{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(Ki.getDefaults(),t);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},gt.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return us(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new Ut(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){us(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new Ut(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const t=this.transport.getTicksAtTime(e);Jt(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class ks extends ke{constructor(){const e=L(ks.getDefaults(),arguments);super(e),this.name="Transport",this._loop=new vg(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new qe,this._repeatedEvents=new gg,this._syncedSignals=[],this._swingAmount=0,this._ppq=e.ppq,this._clock=new Ps({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),ie(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(ke.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const n=t%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(n*Math.PI)*this._swingAmount;e+=new Ut(this.context,this._swingTicks*2/3).toSeconds()*i}Ur(!0),this._timeline.forEachAtTime(t,n=>n.invoke(e)),Ur(!1)}schedule(e,t){const n=new gt(this,{callback:e,time:new vn(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(e,t,n,i=1/0){const r=new Ki(this,{callback:e,duration:new je(this.context,i).toTicks(),interval:new je(this.context,t).toTicks(),time:new vn(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const n=new gt(this,{callback:e,once:!0,time:new vn(this.context,t).toTicks()});return this._addEvent(n,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(t,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new Ut(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let n;return U(t)&&(n=this.toTicks(t)),this._clock.start(e,n),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){We(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new je(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new je(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new Ut(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new Ut(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),n=this._clock.frequency.timeToTicks(e,t);this.ticks=n}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(t),i=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,t),r=t+i;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),n=this.getTicksAtTime(t),i=e-n%e;return this._clock.nextTickTime(i,t)}}syncSignal(e,t){const n=this.now();let i=this.bpm,r=1/(60/i.getValueAtTime(n)/this.PPQ),o=[];if(e.units==="time"){const c=.015625/r,l=new we(c),u=new Yi(-1),h=new we(c);i.chain(l,u,h),i=h,r=1/r,o=[l,u,h]}t||(e.getValueAtTime(n)!==0?t=e.getValueAtTime(n)/r:t=0);const a=new we(t);return i.connect(a),a.connect(e._param),o.push(a),this._syncedSignals.push({initial:e.value,nodes:o,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const n=this._syncedSignals[t];n.signal===e&&(n.nodes.forEach(i=>i.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Fa(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Fn.mixin(ks);As(s=>{s.transport=new ks({context:s})});Cs(s=>{s.transport.dispose()});class De extends W{constructor(e){super(e),this.input=void 0,this._state=new Wi("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=Y,this._syncedStop=Y,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new dn({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,ie(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(W.getDefaults(),{mute:!1,onstop:Y,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,n){let i=Fe(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")j(Jt(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,t,n);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(Zt(t,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(a=>{this._start(a,t,n)},i);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else Ea(this.context),this._start(i,t,n);return this}stop(e){let t=Fe(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||U(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const n=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(n)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,n){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(Jt(t,0)){const n=this._state.get(t);if(n&&n.state==="started"&&n.time!==t){const i=t-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-i),this._start(e,this.toSeconds(n.offset)+i,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=Y,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class Ns extends en{constructor(){const e=L(Ns.getDefaults(),arguments,["url","onload"]);super(e),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,hn(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new X({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new J(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(en.getDefaults(),{url:new J,loop:!1,loopEnd:0,loopStart:0,onload:Y,onerror:Y,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,n,i=1){j(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,i),this.loop?t=Zt(t,this.loopStart):t=Zt(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;ei(o,a)&&(o=(o-c)%l+c),Le(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,us(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),U(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}function qt(s,e){return he(this,void 0,void 0,function*(){const t=e/s.context.sampleRate,n=new Li(1,t,s.context.sampleRate);return new s.constructor(Object.assign(s.get(),{frequency:2/t,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Qi extends en{constructor(){const e=L(Qi.getDefaults(),arguments,["frequency","type"]);super(e),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],hn(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new X({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new X({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),ie(this,["frequency","detune"])}static getDefaults(){return Object.assign(en.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class ue extends De{constructor(){const e=L(ue.getDefaults(),arguments,["frequency","type"]);super(e),this.name="Oscillator",this._oscillator=null,this.frequency=new _e({context:this.context,units:"frequency",value:e.frequency}),ie(this,"frequency"),this.detune=new _e({context:this.context,units:"cents",value:e.detune}),ie(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(De.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),n=new Qi({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return ue._periodicWaveCache.find(t=>t.phase===this._phase&&Qm(t.partials,this._partials));{const e=ue._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const n=this._getCachedPeriodicWave();if(U(n)){const{partials:i,wave:r}=n;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(i,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),ue._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),ue._periodicWaveCache.length>100&&ue._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){mt(e,0);let t=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(t=n[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const i=new Float32Array(e);this._partials.forEach((r,o)=>i[o]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(e,t){let i=2048;const r=new Float32Array(i),o=new Float32Array(i);let a=1;if(e==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,i=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],a=Math.max(a,2),i=a):this._partialCount=0,this._partials=[]}for(let c=1;c<i;++c){const l=2/(c*Math.PI);let u;switch(e){case"sine":u=c<=a?1:0,this._partials[c-1]=u;break;case"square":u=c&1?2*l:0,this._partials[c-1]=u;break;case"sawtooth":u=l*(c&1?1:-1),this._partials[c-1]=u;break;case"triangle":c&1?u=2*(l*l)*(c-1>>1&1?-1:1):u=0,this._partials[c-1]=u;break;case"custom":u=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}u!==0?(r[c]=-u*Math.sin(t*c),o[c]=u*Math.cos(t*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(e,t,n){let i=0;const r=e.length;for(let o=0;o<r;o++)i+=e[o]*Math.cos(o*n)+t[o]*Math.sin(o*n);return i}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let n=0;const i=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(e,t,o/r*i),n);return eg(-this._inverseFFT(e,t,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return he(this,arguments,void 0,function*(e=1024){return qt(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}ue._periodicWaveCache=[];class yg extends tn{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new Ln({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class nn extends _e{constructor(){const e=L(nn.getDefaults(),arguments,["value"]);super(e),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new we({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(_e.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Os extends De{constructor(){const e=L(Os.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="AMOscillator",this._modulationScale=new yg({context:this.context}),this._modulationNode=new we({context:this.context}),this._carrier=new ue({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new ue({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new nn({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),ie(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(ue.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return he(this,arguments,void 0,function*(e=1024){return qt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Es extends De{constructor(){const e=L(Es.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="FMOscillator",this._modulationNode=new we({context:this.context,gain:0}),this._carrier=new ue({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new _e({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new ue({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new nn({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new nn({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),ie(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(ue.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return he(this,arguments,void 0,function*(e=1024){return qt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class jn extends De{constructor(){const e=L(jn.getDefaults(),arguments,["frequency","width"]);super(e),this.name="PulseOscillator",this._widthGate=new we({context:this.context,gain:0}),this._thresh=new Ln({context:this.context,mapping:t=>t<=0?-1:1}),this.width=new _e({context:this.context,units:"audioRange",value:e.width}),this._triangle=new ue({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),ie(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(De.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return he(this,arguments,void 0,function*(e=1024){return qt(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Is extends De{constructor(){const e=L(Is.getDefaults(),arguments,["frequency","type","spread"]);super(e),this.name="FatOscillator",this._oscillators=[],this.frequency=new _e({context:this.context,units:"frequency",value:e.frequency}),this.detune=new _e({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,ie(this,["frequency","detune"])}static getDefaults(){return Object.assign(ue.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,n=e/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=t+n*r)}}get count(){return this._oscillators.length}set count(e){if(mt(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const n=new ue({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):Y});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[t]=n}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,n)=>t.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return he(this,arguments,void 0,function*(e=1024){return qt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class Ds extends De{constructor(){const e=L(Ds.getDefaults(),arguments,["frequency","modulationFrequency"]);super(e),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new nn({context:this.context,value:2}),this._pulse=new jn({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new ue({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),ie(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(De.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return he(this,arguments,void 0,function*(e=1024){return qt(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const Hr={am:Os,fat:Is,fm:Es,oscillator:ue,pulse:jn,pwm:Ds};class hs extends De{constructor(){const e=L(hs.getDefaults(),arguments,["frequency","type"]);super(e),this.name="OmniOscillator",this.frequency=new _e({context:this.context,units:"frequency",value:e.frequency}),this.detune=new _e({context:this.context,units:"cents",value:e.detune}),ie(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(ue.getDefaults(),Es.getDefaults(),Os.getDefaults(),Is.getDefaults(),jn.getDefaults(),Ds.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=Hr[e],n=this.now();if(this._oscillator){const i=this._oscillator;i.stop(n),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof Hr[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&It(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&It(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&rt(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return he(this,arguments,void 0,function*(e=1024){return qt(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function Wa(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){mt(r,s,e),t.set(this,r)}})}}function ct(s,e=1/0){const t=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){mt(this.toSeconds(r),s,e),t.set(this,r)}})}}class Rs extends De{constructor(){const e=L(Rs.getDefaults(),arguments,["url","onload"]);super(e),this.name="Player",this._activeSources=new Set,this._buffer=new J({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(De.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:Y,onerror:Y,playbackRate:1,reverse:!1})}load(e){return he(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=Y){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,n){return super.start(e,t,n),this}_start(e,t,n){this._loop?t=Zt(t,this._loopStart):t=Zt(t,0);const i=this.toSeconds(t),r=n;n=Zt(n,Math.max(this._buffer.duration-i,0));let o=this.toSeconds(n);o=o/this._playbackRate,e=this.toSeconds(e);const a=new Ns({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&Fe(r)?a.start(e,i):a.start(e,i,o-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(n=>n.stop(t))}restart(e,t,n){return super.restart(e,t,n),this}_restart(e,t,n){var i;(i=[...this._activeSources].pop())===null||i===void 0||i.stop(e),this._start(e,t,n)}seek(e,t){const n=this.toSeconds(t);if(this._state.getValueAtTime(n)==="started"){const i=this.toSeconds(e);this._stop(n),this._start(n,i)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&mt(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&mt(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),n=this._state.getNextState("stopped",t);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}Ze([ct(0)],Rs.prototype,"fadeIn",void 0);Ze([ct(0)],Rs.prototype,"fadeOut",void 0);class bt extends W{constructor(){const e=L(bt.getDefaults(),arguments,["attack","decay","sustain","release"]);super(e),this.name="Envelope",this._sig=new _e({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(W.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(rt(e))return e;{let n;for(n in Gn)if(Gn[n][t]===e)return n;return e}}_setCurve(e,t,n){if(rt(n)&&Reflect.has(Gn,n)){const i=Gn[n];Ct(i)?e!=="_decayCurve"&&(this[e]=i[t]):this[e]=i}else if(We(n)&&e!=="_decayCurve")this[e]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(e){this._setCurve("_decayCurve","Out",e)}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){const a=1/i;i=(1-o)/a}if(i<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,i,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,i,e);else{this._sig.cancelAndHoldAtTime(e);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,e,i,t)}if(r&&this.sustain<1){const a=t*this.sustain,c=e+i;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,e):(j(We(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,n,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,n=1){return t=this.toSeconds(t),this.triggerAttack(t,n),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,n=0){return zi(this,e,t,n),this}asArray(){return he(this,arguments,void 0,function*(e=1024){const t=e/this.context.sampleRate,n=new Li(1,t,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/a,decay:t*this.toSeconds(this.decay)/a,release:t*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(t*(i+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}Ze([ct(0)],bt.prototype,"attack",void 0);Ze([ct(0)],bt.prototype,"decay",void 0);Ze([Wa(0,1)],bt.prototype,"sustain",void 0);Ze([ct(0)],bt.prototype,"release",void 0);const Gn=(()=>{let e,t;const n=[];for(e=0;e<128;e++)n[e]=Math.sin(e/127*(Math.PI/2));const i=[],r=6.4;for(e=0;e<127;e++){t=e/127;const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;i[e]=d/10+t*.83}i[127]=1;const o=[],a=5;for(e=0;e<128;e++)o[e]=Math.ceil(e/127*a)/a;const c=[];for(e=0;e<128;e++)t=e/127,c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/127;const d=Math.pow(t,3)*4+.2,f=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(f*(1-t))}function u(d){const f=new Array(d.length);for(let p=0;p<d.length;p++)f[p]=1-d[p];return f}function h(d){return d.slice(0).reverse()}return{bounce:{In:u(l),Out:l},cosine:{In:n,Out:h(n)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:u(i)},sine:{In:c,Out:u(c)},step:{In:o,Out:u(o)}}})();class sn extends W{constructor(){const e=L(sn.getDefaults(),arguments);super(e),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=t=>this._original_triggerRelease(t),this._volume=this.output=new dn({context:this.context,volume:e.volume}),this.volume=this._volume.volume,ie(this,"volume")}static getDefaults(){return Object.assign(W.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const n=this["_original_"+e]=this[e];this[e]=(...i)=>{const r=i[t],o=this.context.transport.schedule(a=>{i[t]=a,n.apply(this,i)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(e,t,n,i){const r=this.toSeconds(n),o=this.toSeconds(t);return this.triggerAttack(e,r,i),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class rn extends sn{constructor(){const e=L(rn.getDefaults(),arguments);super(e),this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(sn.getDefaults(),{detune:0,onsilence:Y,portamento:0})}triggerAttack(e,t,n=1){this.log("triggerAttack",e,t,n);const i=this.toSeconds(t);return this._triggerEnvelopeAttack(i,n),this.setNote(e,i),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const n=this.toSeconds(t),i=e instanceof Ve?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,n)}else this.frequency.setValueAtTime(i,n);return this}}Ze([ct(0)],rn.prototype,"portamento",void 0);class Ji extends bt{constructor(){super(L(Ji.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new we({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class ds extends rn{constructor(){const e=L(ds.getDefaults(),arguments);super(e),this.name="Synth",this.oscillator=new hs(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Ji(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),ie(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(rn.getDefaults(),{envelope:Object.assign(Gr(bt.getDefaults(),Object.keys(W.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Gr(hs.getDefaults(),[...Object.keys(De.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+n+i)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class $s extends ds{constructor(){const e=L($s.getDefaults(),arguments);super(e),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,ie(this,["oscillator","envelope"])}static getDefaults(){return Ht(rn.getDefaults(),ds.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const n=this.toSeconds(t),i=this.toFrequency(e instanceof Ve?e.toFrequency():e),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(i,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}Ze([Wa(0)],$s.prototype,"octaves",void 0);Ze([ct(0)],$s.prototype,"pitchDecay",void 0);const Ba=new Set;function er(s){Ba.add(s)}function za(s,e){const t=`registerProcessor("${s}", ${e})`;Ba.add(t)}const bg=`
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
`;er(bg);const wg=`
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
`;er(wg);const xg=`
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
`;er(xg);const Tg="feedback-comb-filter",Mg=`
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
`;za(Tg,Mg);class Wn extends sn{constructor(){const e=L(Wn.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(e),this.name="Sampler",this._activeSources=new Map;const t={};Object.keys(e.urls).forEach(n=>{const i=parseInt(n,10);if(j(Un(n)||It(i)&&isFinite(i),`url key is neither a note or midi pitch: ${n}`),Un(n)){const r=new Ve(this.context,n).toMidi();t[r]=e.urls[n]}else It(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new Xi({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(sn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:Y,onerror:Y,release:.1,urls:{}})}_findClosest(e){let n=0;for(;n<96;){if(this._buffers.has(e+n))return-n;if(this._buffers.has(e-n))return n;n++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,n=1){return this.log("triggerAttack",e,t,n),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=ja(new Ve(this.context,i).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,u=this._buffers.get(l),h=La(c+a),d=new Ns({url:u,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);d.start(t,0,u.duration/h,n),We(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),p=f.indexOf(d);p!==-1&&f.splice(p,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(n=>{const i=new Ve(this.context,n).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,n,i=1){const r=this.toSeconds(n);return this.triggerAttack(e,r,i),We(t)?(j(We(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{const c=t[Math.min(a,t.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,n){if(j(Un(e)||isFinite(e),`note must be a pitch or midi: ${e}`),Un(e)){const i=new Ve(this.context,e).toMidi();this._buffers.add(i,t,n)}else this._buffers.add(e,t,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}Ze([ct(0)],Wn.prototype,"attack",void 0);Ze([ct(0)],Wn.prototype,"release",void 0);class tr extends W{constructor(){const e=L(tr.getDefaults(),arguments,["pan"]);super(e),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new X({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",ie(this,"pan")}static getDefaults(){return Object.assign(W.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const Ag="bit-crusher",Cg=`
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
`;za(Ag,Cg);class le extends W{constructor(){const e=L(le.getDefaults(),arguments,["solo"]);super(e),this.name="Solo",this.input=this.output=new we({context:this.context}),le._allSolos.has(this.context)||le._allSolos.set(this.context,new Set),le._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(W.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),le._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){le._soloed.has(this.context)||le._soloed.set(this.context,new Set),le._soloed.get(this.context).add(this)}_removeSolo(){le._soloed.has(this.context)&&le._soloed.get(this.context).delete(this)}_isSoloed(){return le._soloed.has(this.context)&&le._soloed.get(this.context).has(this)}_noSolos(){return!le._soloed.has(this.context)||le._soloed.has(this.context)&&le._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),le._allSolos.get(this.context).delete(this),this._removeSolo(),this}}le._allSolos=new Map;le._soloed=new Map;class nr extends W{constructor(){const e=L(nr.getDefaults(),arguments,["pan","volume"]);super(e),this.name="PanVol",this._panner=this.input=new tr({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new dn({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,ie(this,["pan","volume"])}static getDefaults(){return Object.assign(W.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class Gt extends W{constructor(){const e=L(Gt.getDefaults(),arguments,["volume","pan"]);super(e),this.name="Channel",this._solo=this.input=new le({solo:e.solo,context:this.context}),this._panVol=this.output=new nr({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),ie(this,["pan","volume"])}static getDefaults(){return Object.assign(W.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return Gt.buses.has(e)||Gt.buses.set(e,new we({context:this.context})),Gt.buses.get(e)}send(e,t=0){const n=this._getBus(e),i=new we({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(n),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}Gt.buses=new Map;class sr extends W{constructor(){const e=L(sr.getDefaults(),arguments,["threshold","ratio"]);super(e),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor,this.threshold=new X({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:e.threshold}),this.attack=new X({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:e.attack}),this.release=new X({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:e.release}),this.knee=new X({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:e.knee}),this.ratio=new X({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:e.ratio}),ie(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(W.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}function Sg(){return $e().now()}$e().transport;$e().destination;$e().destination;$e().listener;$e().draw;const St=$e();function Pg(){return J.loaded()}const kg=new sr({threshold:-6,ratio:20,attack:.002,release:.1,knee:3}).toDestination(),ir=new Wn({urls:{F1:"A_029__F1_5.m4a",B1:"A_035__B1_5.m4a",E2:"A_040__E2_5.m4a",A2:"A_045__A2_5.m4a",D3:"A_050__D3_5.m4a",G3:"A_055__G3_5.m4a",B3:"A_059__B3_5.m4a",D4:"A_062__D4_5.m4a",F4:"A_065__F4_5.m4a",B4:"A_071__B4_5.m4a",E5:"A_076__E5_5.m4a",A5:"A_081__A5_5.m4a",D6:"A_086__D6_5.m4a",G6:"A_091__G6_5.m4a"},baseUrl:"https://danigb.github.io/samples/jlearman/rhodes-mki/jRhodes3d-mono/",volume:-12,onload:()=>{console.log("Rhodes piano sampler loaded successfully!")},onerror:s=>{console.warn("Failed to load Rhodes piano sampler:",s)}}).connect(kg);function Ng(s,e=.35){if(St.state!=="running"){console.warn("Audio playback skipped: AudioContext is suspended. Click the audio icon in the header to enable.");return}try{ir.triggerAttackRelease(s,e)}catch(t){console.warn("Audio playback failed:",t)}}function Og(s,e=.7){if(St.state!=="running"){console.warn("Audio playback skipped: AudioContext is suspended. Click the audio icon in the header to enable.");return}try{const t=s.length,n=t<=1?1:Math.max(.4,1/Math.sqrt(t));ir.triggerAttackRelease(s,e,Sg(),n)}catch(t){console.warn("Audio playback failed:",t)}}async function Eg(){await rg(),await Pg(),ir.triggerAttackRelease("C4","8n")}async function Ig(){St&&St.rawContext&&await St.rawContext.suspend()}function Dg(){return St.state==="running"}function Rg(s){const e=St.rawContext;if(e&&typeof e.addEventListener=="function"){const t=()=>s(e.state);return e.addEventListener("statechange",t),()=>e.removeEventListener("statechange",t)}return()=>{}}var $g=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,rr=(s,e,t,n)=>{for(var i=n>1?void 0:n?Vg(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&$g(e,t,i),i};let Sn=class extends pt{constructor(){super(...arguments),this.pads=[],this.recipe=[]}render(){const s=new Map(this.recipe.map((e,t)=>[e.index,t+1]));return H`
      <div class="shell">
        <div class="grid" role="grid" aria-label="Circuit pad grid">
          <!-- Column Header Labels -->
          <div class="grid-label corner" aria-hidden="true"></div>
          ${Array.from({length:8}).map((e,t)=>H`
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
    `}renderPad(s,e){if(!s.note)return H`<div class="gap" aria-hidden="true"></div>`;const t=e.get(s.index);return H`
      <div 
        class=${`pad ${s.state} ${t?"target":""}`} 
        role="button" 
        tabindex="0"
        aria-label=${this.getAriaLabel(s,t)}
        @click=${()=>this.onPadClick(s)}
        @keydown=${n=>this.onPadKeydown(n,s)}
      >
        <div class="pad-inner">
          ${t?H`<span class="step">${t}</span>`:null}
          <div>
            <div>${s.label}</div>
            <div class="meta">${s.row+1}:${s.col+1}</div>
          </div>
        </div>
      </div>
    `}onPadClick(s){s.midiNote&&(Ng(s.midiNote),this.dispatchEvent(new CustomEvent("pad-clicked",{detail:s,bubbles:!0,composed:!0})))}onPadKeydown(s,e){(s.key===" "||s.key==="Enter")&&(s.preventDefault(),this.onPadClick(e))}getAriaLabel(s,e){return s.note?e?`${s.note} row ${s.row+1} column ${s.col+1} voicing note ${e} of ${this.recipe.length} (lowest to highest)`:`${s.note} row ${s.row+1} column ${s.col+1} ${s.state}`:`empty slot row ${s.row+1} column ${s.col+1}`}};Sn.styles=ps`
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
      color: #555;
      user-select: none;
      font-family: inherit;
    }

    .col-label {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      padding-bottom: 4px;
    }

    .row-label {
      border-right: 1px solid rgba(255, 255, 255, 0.05);
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
  `;rr([_t({attribute:!1})],Sn.prototype,"pads",2);rr([_t({attribute:!1})],Sn.prototype,"recipe",2);Sn=rr([gs("circuit-grid")],Sn);const it=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],Hn={minor:"Natural Minor",major:"Major",dorian:"Dorian",phrygian:"Phrygian",mixolydian:"Mixolydian","melodic minor":"Melodic Minor","harmonic minor":"Harmonic Minor","bebop dorian":"Bebop Dorian",blues:"Blues","minor pentatonic":"Minor Pent.","hungarian minor":"Hungarian Minor","ukrainian dorian":"Ukrainian Dorian",marva:"Marva",todi:"Todi","whole tone":"Whole Tone",chromatic:"Chromatic"},Zr=["minor","major","dorian","phrygian","mixolydian","melodic minor","harmonic minor","bebop dorian","blues","minor pentatonic","hungarian minor","ukrainian dorian","marva","todi","whole tone","chromatic"],Ws=it,Fg=["triad","seventh","spread"],qg=5,Lg=3,jg=[0,2,4,5,7,9,11,12],Wg=[null,1,3,null,6,8,10,null];function Xr(s,e){const t=nt(e.key)??"C",n=it.indexOf(t),i=Hg(e.key,e.scale),r=Xg(t,i),o=new Set((s?.notes??[]).map(h=>nt(h)).filter(or)),a=4,c=[];let l=a,u=-1;for(let h=0;h<32;h++){const d=r[h%r.length],f=it.indexOf(d);u!==-1&&f<u&&l++,c.push(`${d}${l}`),u=f}return Array.from({length:32},(h,d)=>{const f=Math.floor(d/8),p=d%8,m=3-f,g=p+m*Lg,v=p+m*qg,T=e.mode==="collapsed"?g:v;let x="",A="";if(e.mode==="collapsed"){const S=c[T%c.length]??"";A=S,x=nt(xn(S))??""}else{const S=(f+2)%4,C=Math.floor(S/2)*12,k=S%2===0?Wg[p]:jg[p];if(k!==null&&n!==-1){const N=k+C,D=$t(`${t}${a}`,fi(N));A=D,x=nt(xn(D))??""}}const _=o.has(x),b=x===t,w=i.includes(x);let y="dim";return b?y="active":_?y="lit":w&&(y="scale"),{index:d,row:f,col:p,offset:T,note:x,label:x||" ",state:y,inChord:_,isRoot:b,inScale:w,midiNote:A}})}function Yr(s,e,t,n=0,i=4){return s?Bg(s,t).map((a,c)=>Ug(a,c,e,t,n)).filter(a=>!!a).slice(0,i).map(a=>({note:a.note,row:a.row,col:a.col,index:a.index,offset:a.offset})).sort((a,c)=>a.offset-c.offset).map(({note:a,row:c,col:l,index:u})=>({note:a,row:c,col:l,index:u})):[]}function Bg(s,e){const t=new Map,n=[],i=nt(s.tonic);for(let u=0;u<s.notes.length;u+=1){const h=nt(s.notes[u]);if(!h)continue;n.includes(h)||n.push(h);const d=Gg(s.intervals[u]);d!==null&&!t.has(d)&&t.set(d,h)}const r={triad:[3,5],seventh:[3,5,7],spread:[5,7,3]},o={triad:3,seventh:4,spread:4},a=Array.from(new Set([i,...r[e].map(u=>t.get(u)).filter(u=>!!u)].filter(u=>!!u)));if(a.length>=o[e])return a.slice(0,o[e]);const c=zg(s,e);return Array.from(new Set([...a,...c,...n])).slice(0,o[e])}function zg(s,e){let t=[];try{const a=Cr(s.symbol);t=Array.isArray(a)?a:[]}catch{t=[]}if(t.length===0&&s.tonic&&s.quality)try{const a=Cr(`${s.tonic}${s.quality}`);t=Array.isArray(a)?a:[]}catch{t=[]}const n=t.filter(a=>typeof a=="string").map(a=>nt(a)).filter(or),i=Array.from(new Set(n));if(i.length===0)return[];if(e==="triad")return i.slice(0,3);if(e==="seventh")return i.slice(0,4);const o=[0,2,3,1].map(a=>i[a]).filter(a=>!!a);return Array.from(new Set(o)).slice(0,4)}function Ug(s,e,t,n,i=0){const r=t.filter(c=>c.note===s).sort((c,l)=>c.offset-l.offset);if(r.length===0)return;const o=e<i;if(n==="spread"){let c=e;o&&(c+=1);const l=Math.min(c,r.length-1);return r[l]}const a=o?Math.min(1,r.length-1):0;return r[a]}function Gg(s){if(!s)return null;const e=s.match(/^(\d+)/);if(!e)return null;const t=Number.parseInt(e[1],10);return Number.isFinite(t)?t:null}function Hg(s,e){const n=wu(`${s} ${e}`).notes.map(i=>nt(i)).filter(or);return n.length===0?["C","D","E","F","G","A","B"]:Array.from(new Set(n))}function Zg(s){const e=it.indexOf(s);return e===-1?it:Ua(it,e)}function Xg(s,e){const t=it.indexOf(s),n=e.slice().sort((i,r)=>Kr(i,t)-Kr(r,t));return n.length===0?Zg(s):n.includes(s)?Ua(n,n.indexOf(s)):[s,...n]}function Kr(s,e){const t=it.indexOf(s);return t===-1||e===-1?Number.MAX_SAFE_INTEGER:(t-e+12)%12}function Ua(s,e){return[...s.slice(e),...s.slice(0,e)]}function nt(s){if(!s)return null;const e=xn(s);if(!e)return null;const t=_i(e);return it.includes(t)?t:e}function or(s){return s!==null}var Yg=Object.defineProperty,Kg=Object.getOwnPropertyDescriptor,ye=(s,e,t,n)=>{for(var i=n>1?void 0:n?Kg(e,t):e,r=s.length-1,o;r>=0;r--)(o=s[r])&&(i=(n?o(e,t,i):o(i))||i);return n&&i&&Yg(e,t,i),i};let de=class extends pt{constructor(){super(...arguments),this.audioActive=!1,this.audioCleanup=null,this.activeTab="grid",this.progression=[],this.originalKey="C",this.activeIndex=0,this.config={key:"C",scale:"minor",mode:"collapsed"},this.voicing="triad",this.autoPlay=!0,this.transposeProgression=!0,this.inversion=0,this.source="",this.showSettings=!1,this.showHelp=!1,this.midiConnected=!1,this.midiDevices=[],this.selectedMidiDevice="",this.activeMidiDevice=null}toggleHelp(){this.showHelp=!this.showHelp,this.showHelp&&(this.showSettings=!1)}toggleSettings(){this.showSettings=!this.showSettings,this.showSettings&&(this.showHelp=!1)}async toggleAudio(){try{this.audioActive?await Ig():await Eg()}catch(s){console.warn("Failed to toggle audio:",s)}}connectedCallback(){super.connectedCallback(),this.loadDefaultProgression(),this.initMidi(),this.audioActive=Dg(),this.audioCleanup=Rg(s=>{this.audioActive=s==="running"})}disconnectedCallback(){this.audioCleanup&&this.audioCleanup(),super.disconnectedCallback()}initMidi(){typeof navigator<"u"&&"requestMIDIAccess"in navigator&&navigator.requestMIDIAccess().then(s=>{this.updateMidiStatus(s),s.onstatechange=()=>{this.updateMidiStatus(s)}}).catch(s=>{console.warn("MIDI access request failed:",s),this.midiConnected=!1,this.midiDevices=[]})}updateMidiStatus(s){const e=[];s&&s.inputs&&s.inputs.forEach(t=>{t.state==="connected"&&t.name&&!e.includes(t.name)&&e.push(t.name)}),s&&s.outputs&&s.outputs.forEach(t=>{t.state==="connected"&&t.name&&!e.includes(t.name)&&e.push(t.name)}),this.midiDevices=e,(this.selectedMidiDevice===""||!e.includes(this.selectedMidiDevice))&&(this.selectedMidiDevice=e.length>0?e[0]:""),this.activeMidiDevice!==null&&!e.includes(this.activeMidiDevice)?(this.activeMidiDevice=null,this.midiConnected=!1):this.activeMidiDevice!==null?this.midiConnected=!0:this.midiConnected=!1}connectMidiDevice(){this.selectedMidiDevice&&(this.activeMidiDevice=this.selectedMidiDevice,this.midiConnected=!0)}disconnectMidiDevice(){this.activeMidiDevice=null,this.midiConnected=!1}loadDefaultProgression(){const s="Cmaj7 Am7 Dm7 G7",e=s.match(/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g)||[],t=[];for(const n of e){const i=Be(n);!i.empty&&i.notes.length>0&&t.push({symbol:n,tonic:i.tonic,quality:i.quality,notes:i.notes,intervals:i.intervals,aliases:i.aliases})}if(t.length>0){this.progression=t,this.source=s,this.activeIndex=0;const n=t[0],i=this.normalizeKey(n?.tonic)??this.config.key;this.originalKey=i;const o=n?.quality?.toLowerCase().includes("minor")||n?.symbol?.includes("m")?"minor":"major";this.config={...this.config,key:i,scale:o}}}render(){const s=this.getTransposedProgression(),e=s[this.activeIndex]??null,t=Xr(e,this.config),n=Yr(e,t,this.voicing,this.inversion),i=e?e.notes.map(o=>nt(o)).filter(Boolean):[],r=e&&this.config.mode==="collapsed"?i.filter(o=>!t.some(a=>a.note===o)):[];return H`
      <div class="app-grid">
        <!-- Brand Header Bar -->
        <header class="brand-header">
          <div class="brand-left">
            <svg class="brand-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#ffffff" />
              <g transform="rotate(-45 16 16)" fill="#1a1b20">
                <rect x="6.5" y="6" width="5" height="14" rx="2.5" />
                <rect x="13.5" y="12" width="5" height="14" rx="2.5" />
                <rect x="20.5" y="6" width="5" height="14" rx="2.5" />
              </g>
            </svg>
            <div class="brand-title">circuit chords</div>
          </div>
          <div class="brand-right">
            <!-- Audio State Button -->
            <button class="audio-btn ${this.audioActive?"active":""}" @click=${this.toggleAudio} title="${this.audioActive?"Disable Audio":"Enable Audio"}">
              ${this.audioActive?H`
                <svg viewBox="0 0 24 24">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              `:H`
                <svg viewBox="0 0 24 24">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              `}
            </button>
            <div class="midi-led-group">
              <span class="midi-led ${this.midiConnected?"connected":""}"></span>
              WebMIDI
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

        <!-- 2. Top Header Bar (active config summary + voicing toggle) -->
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

          <div class="config-group">
            <span class="config-label">Voicing</span>
            <div class="tactile-group">
              ${Fg.map(o=>H`
                <button
                  class="tactile-btn ${this.voicing===o?"active-root":""}"
                  @click=${()=>this.onVoicingChange(o)}
                  title="Voicing: ${o}">
                  ${o==="triad"?"3":o==="seventh"?"7th":o}
                </button>
              `)}
            </div>
          </div>
        </header>

        <!-- 3. Center Main Content Area -->
        <main class="panel main-content">
          ${r.length>0?H`
            <div class="scale-warning">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px; flex-shrink: 0;">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              <span>Chord note(s) (${r.join(", ")}) outside scale are hidden in Scale Collapse mode. Switch to Chromatic mode to play.</span>
            </div>
          `:null}

          <!-- Tab 1: Grid View -->
          <div class="circuit-grid" style="display: ${this.activeTab==="grid"?"block":"none"}">
            <circuit-grid .pads=${t} .recipe=${n}></circuit-grid>
          </div>

          <!-- Tab 2: Key & Scale Pad Picker -->
          <div class="data-input-view" style="display: ${this.activeTab==="data"?"flex":"none"}">

            <!-- Keynote + Scale Pad Picker — Circuit Tracks layout -->
            <div class="pad-picker">

              <!-- Keynote Section: row 1 = sharps, row 2 = naturals -->
              <div class="pad-picker-section">
                <div class="pad-picker-section-label">Keynote</div>
                <!-- Row 1 (pads 1–8): gaps at positions 1, 4, 8; sharps at 2,3,5,6,7 -->
                <div class="pad-row">
                  ${["","C#","D#","","F#","G#","A#",""].map(o=>o===""?H`
                    <div class="picker-pad pad-root pad-dim" aria-hidden="true"></div>
                  `:H`
                    <button
                      class="picker-pad pad-root ${this.config.key===o?"pad-active":""}"
                      @click=${()=>this.onKeyChange(o)}
                      title="Root: ${o}"
                      aria-label="Root note ${o}">
                      ${o}
                    </button>
                  `)}
                </div>
                <!-- Row 2 (pads 9–16): C D E F G A B + dim -->
                <div class="pad-row">
                  ${["C","D","E","F","G","A","B",""].map(o=>o===""?H`
                    <div class="picker-pad pad-root pad-dim" aria-hidden="true"></div>
                  `:H`
                    <button
                      class="picker-pad pad-root ${this.config.key===o?"pad-active":""}"
                      @click=${()=>this.onKeyChange(o)}
                      title="Root: ${o}"
                      aria-label="Root note ${o}">
                      ${o}
                    </button>
                  `)}
                </div>
              </div>

              <!-- Scale Section: row 3 = scales 1–8, row 4 = scales 9–16 -->
              <div class="pad-picker-section">
                <div class="pad-picker-section-label">Scale</div>
                <!-- Row 3 (pads 17–24): first 8 scales -->
                <div class="pad-row">
                  ${Zr.slice(0,8).map(o=>H`
                    <button
                      class="picker-pad pad-scale ${this.config.scale===o?"pad-active":""}"
                      @click=${()=>this.onScaleChange(o)}
                      title="Scale: ${o}"
                      aria-label="Scale ${Hn[o]??o}">
                      ${Hn[o]??o}
                    </button>
                  `)}
                </div>
                <!-- Row 4 (pads 25–32): next 8 scales -->
                <div class="pad-row">
                  ${Zr.slice(8,16).map(o=>H`
                    <button
                      class="picker-pad pad-scale ${this.config.scale===o?"pad-active":""}"
                      @click=${()=>this.onScaleChange(o)}
                      title="Scale: ${o}"
                      aria-label="Scale ${Hn[o]??o}">
                      ${Hn[o]??o}
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
        </main>

        <!-- Sidebar Backdrop for Mobile overlay -->
        <div class="sidebar-backdrop ${this.showSettings||this.showHelp?"open":""}" @click=${()=>{this.showSettings=!1,this.showHelp=!1}}></div>

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
                ${this.midiConnected&&this.activeMidiDevice?H`
                  <div class="active-device-name" title="${this.activeMidiDevice}">
                    ${this.activeMidiDevice}
                  </div>
                `:""}
              </div>
            </div>

            <!-- Device selection & connection trigger -->
            ${this.midiDevices.length>0?H`
              <div class="midi-config">
                <span class="config-label">Available Devices</span>
                <select class="midi-select" .value=${this.selectedMidiDevice} @change=${o=>this.selectedMidiDevice=o.target.value}>
                  ${this.midiDevices.map(o=>H`
                    <option value=${o} ?selected=${this.selectedMidiDevice===o}>${o}</option>
                  `)}
                </select>
                
                ${this.midiConnected&&this.activeMidiDevice===this.selectedMidiDevice?H`
                  <button class="midi-btn disconnect" @click=${this.disconnectMidiDevice}>
                    Disconnect
                  </button>
                `:H`
                  <button class="midi-btn connect" @click=${this.connectMidiDevice} ?disabled=${!this.selectedMidiDevice}>
                    Connect
                  </button>
                `}
              </div>
            `:H`
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
        <footer class="panel footer-timeline">
          <progression-stepper
            .originalChords=${this.progression}
            .keyChords=${this.transposeProgression&&this.originalKey!==this.config.key?s:[]}
            .keyLabel=${this.config.key}
            .activeIndex=${this.activeIndex}
            @chord-selected=${o=>this.onChordSelected(o)}
          ></progression-stepper>
        </footer>
      </div>
    `}playActiveVoicing(){const e=this.getTransposedProgression()[this.activeIndex]??null;if(!e)return;const t=Xr(e,this.config),i=Yr(e,t,this.voicing,this.inversion).map(r=>t.find(o=>o.index===r.index)?.midiNote).filter(r=>!!r);i.length>0&&Og(i)}onKeyChange(s){this.config={...this.config,key:s}}onScaleChange(s){const e=s==="chromatic"?"chromatic":"collapsed";this.config={...this.config,scale:s,mode:e}}onVoicingChange(s){this.voicing=s}onChordSelected(s){this.activeIndex=s.detail,this.autoPlay&&setTimeout(()=>this.playActiveVoicing(),20)}onParsed(s){this.progression=s.detail.progression,this.source=s.detail.source,this.activeIndex=0;const e=s.detail.progression[0],t=this.normalizeKey(e?.tonic)??this.config.key;this.originalKey=t;const i=e?.quality?.toLowerCase().includes("minor")||e?.symbol?.includes("m")?"minor":"major";e?.tonic&&(this.config={...this.config,key:t,scale:i}),this.autoPlay&&this.progression.length>0&&setTimeout(()=>this.playActiveVoicing(),50),this.progression.length>0&&(this.activeTab="grid")}getTransposedProgression(){if(this.progression.length===0)return[];if(!this.transposeProgression)return this.progression;const s=this.getKeyShiftSemitones();return s===0?this.progression:this.progression.map(e=>this.transposeParsedChord(e,s)).filter(e=>!!e)}getKeyShiftSemitones(){const s=Ws.indexOf(this.originalKey),e=Ws.indexOf(this.config.key);return s===-1||e===-1?0:(e-s+12)%12}transposeParsedChord(s,e){const t=this.transposeChordSymbol(s.symbol,e);if(!t)return null;const n=Be(t);return n.empty||n.notes.length===0?null:{symbol:t,tonic:n.tonic,quality:n.quality,notes:n.notes,intervals:n.intervals,aliases:n.aliases}}transposeChordSymbol(s,e){const t=s.match(/^([A-G](?:#{1,2}|b{1,2})?)(.*?)(?:\/([A-G](?:#{1,2}|b{1,2})?))?$/);if(!t)return null;const n=this.transposeNoteName(t[1],e);if(!n)return null;const i=t[2]??"",r=t[3]?this.transposeNoteName(t[3],e):null;return t[3]&&!r?null:`${n}${i}${r?`/${r}`:""}`}transposeNoteName(s,e){const t=fi(e),n=$t(s,t);return this.normalizeKey(n)}normalizeKey(s){const e=xn(s??"");if(!e)return null;const t=_i(e);return Ws.includes(t)?t:null}};de.styles=ps`
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
      height: 100dvh;
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
      grid-template-columns: var(--sidebar-left-width) minmax(0, 1fr);
      grid-template-rows: 48px var(--header-height) 1fr var(--footer-height);
      gap: var(--gap);
      height: calc(100vh - (var(--gap) * 2));
      height: calc(100dvh - (var(--gap) * 2));
      max-width: 1600px;
      margin: 0 auto;
    }

    .panel {
      background-color: var(--bg-charcoal);
      border-radius: var(--radius-panel);
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2);
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
      border: 1px solid rgba(255, 255, 255, 0.05);
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
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
      color: #ffffff;
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
      color: #888;
    }

    .midi-led {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #444;
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
      background: var(--bg-onyx);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #666;
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
      box-shadow: 0 0 10px rgba(0, 240, 255, 0.2);
    }
    .audio-btn.active {
      color: var(--status-green);
      border-color: var(--status-green);
      box-shadow: 0 0 10px rgba(57, 255, 22, 0.2);
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
      color: #ffffff;
    }

    .chord-input-hint {
      font-size: 0.78rem;
      color: #666;
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
      color: #555;
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
      border: 1px solid rgba(255,255,255,0.05);
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
      border: 1px solid rgba(255, 255, 255, 0.05);
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
      box-shadow: inset 0 2px 4px rgba(255, 255, 255, 0.04), 0 3px 6px rgba(0, 0, 0, 0.4);
    }
    .picker-pad:active {
      transform: scale(0.93);
    }

    /* ── Note pads — dark "off" state, cyan when selected ── */
    .picker-pad.pad-root {
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%), var(--pad-scale);
      color: #ccc;
      border-color: rgba(255, 255, 255, 0.05);
    }
    .picker-pad.pad-root:hover {
      border-color: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
    .picker-pad.pad-root.pad-active {
      background: linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 100%), var(--accent-cyan);
      color: #121316;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 0 18px rgba(0, 240, 255, 0.55), inset 0 2px 4px rgba(255,255,255,0.4);
    }
    /* Dimmed/spacer pads for gap positions */
    .picker-pad.pad-root.pad-dim {
      background: linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%), var(--pad-chromatic);
      color: #333;
      border-color: rgba(255,255,255,0.03);
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.5);
      cursor: default;
      pointer-events: none;
    }

    /* ── Scale pads — dark "off" state, magenta when selected ── */
    .picker-pad.pad-scale {
      background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 100%), var(--pad-scale);
      color: #ccc;
      border-color: rgba(255, 255, 255, 0.05);
      font-size: 0.58rem;
    }
    .picker-pad.pad-scale:hover {
      border-color: rgba(255, 255, 255, 0.2);
      color: #fff;
    }
    .picker-pad.pad-scale.pad-active {
      background: linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%), var(--accent-magenta);
      color: #fff;
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 0 20px rgba(255, 42, 159, 0.65), inset 0 2px 4px rgba(255,255,255,0.3);
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
      background: rgba(26, 27, 32, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
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
      background: rgba(26, 27, 32, 0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.08);
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
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
      color: #ccc;
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
      color: #bbb;
      position: relative;
    }
    .help-list li strong {
      color: #fff;
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
      color: #666;
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
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
      color: #aaa;
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
      border: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
      outline: none;
    }
    
    .midi-btn.connect {
      background: var(--accent-cyan);
      color: var(--bg-charcoal);
      border-color: var(--accent-cyan);
    }
    .midi-btn.connect:hover {
      background: #00d8e6;
      box-shadow: 0 0 12px rgba(0, 240, 255, 0.3);
    }
    .midi-btn.connect:disabled {
      background: #222;
      color: #555;
      border-color: #333;
      cursor: not-allowed;
      box-shadow: none;
    }
    
    .midi-btn.disconnect {
      background: #251216;
      color: var(--accent-magenta);
      border-color: rgba(255, 0, 127, 0.3);
    }
    .midi-btn.disconnect:hover {
      background: #3a151b;
      border-color: var(--accent-magenta);
      box-shadow: 0 0 12px rgba(255, 0, 127, 0.2);
    }

    .no-devices-msg {
      font-size: 0.75rem;
      color: #666;
      font-style: italic;
      text-align: center;
      padding: 12px;
      background: var(--bg-onyx);
      border-radius: 8px;
      border: 1px dashed rgba(255, 255, 255, 0.05);
    }

    /* Section 5: Bottom Timeline Footer */
    .footer-timeline {
      grid-column: 2 / -1;
      grid-row: 4 / 5;
      display: flex;
      align-items: center;
      padding: 0 24px;
    }

    progression-stepper {
      width: 100%;
    }

    /* Close Button (Global for Modal and Drawer) */
    .close-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 16px;
      right: 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      width: 32px;
      height: 32px;
      color: #888;
      cursor: pointer;
      z-index: 1010;
      transition: all 0.2s ease;
    }
    .close-btn:hover {
      background: rgba(255, 255, 255, 0.15);
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
        grid-template-rows: 48px var(--header-height) 1fr var(--footer-height);
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

      /* Reduce spacer elements in timeline footer on mobile */
      .footer-timeline {
        padding: 0 8px;
        grid-column: 2 / 3;
        grid-row: 4 / 5;
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
  `;ye([ve()],de.prototype,"audioActive",2);ye([ve()],de.prototype,"activeTab",2);ye([ve()],de.prototype,"progression",2);ye([ve()],de.prototype,"originalKey",2);ye([ve()],de.prototype,"activeIndex",2);ye([ve()],de.prototype,"config",2);ye([ve()],de.prototype,"voicing",2);ye([ve()],de.prototype,"autoPlay",2);ye([ve()],de.prototype,"transposeProgression",2);ye([ve()],de.prototype,"inversion",2);ye([ve()],de.prototype,"source",2);ye([ve()],de.prototype,"showSettings",2);ye([ve()],de.prototype,"showHelp",2);ye([ve()],de.prototype,"midiConnected",2);ye([ve()],de.prototype,"midiDevices",2);ye([ve()],de.prototype,"selectedMidiDevice",2);ye([ve()],de.prototype,"activeMidiDevice",2);de=ye([gs("circuit-chord-forge")],de);
