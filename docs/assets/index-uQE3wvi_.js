(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const rs=globalThis,fi=rs.ShadowRoot&&(rs.ShadyCSS===void 0||rs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gi=Symbol(),br=new WeakMap;let uo=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==gi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(fi&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=br.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&br.set(t,e))}return e}toString(){return this.cssText}};const uc=n=>new uo(typeof n=="string"?n:n+"",void 0,gi),Wt=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new uo(t,n,gi)},dc=(n,e)=>{if(fi)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=rs.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,n.appendChild(s)}},yr=fi?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return uc(t)})(n):n;const{is:pc,defineProperty:mc,getOwnPropertyDescriptor:fc,getOwnPropertyNames:gc,getOwnPropertySymbols:vc,getPrototypeOf:_c}=Object,As=globalThis,xr=As.trustedTypes,bc=xr?xr.emptyScript:"",yc=As.reactiveElementPolyfillSupport,kn=(n,e)=>n,ls={toAttribute(n,e){switch(e){case Boolean:n=n?bc:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},vi=(n,e)=>!pc(n,e),wr={attribute:!0,type:String,converter:ls,reflect:!1,useDefault:!1,hasChanged:vi};Symbol.metadata??=Symbol("metadata"),As.litPropertyMetadata??=new WeakMap;let Kt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=wr){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&mc(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:r}=fc(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get:i,set(o){const a=i?.call(this);r?.call(this,o),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??wr}static _$Ei(){if(this.hasOwnProperty(kn("elementProperties")))return;const e=_c(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(kn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kn("properties"))){const t=this.properties,s=[...gc(t),...vc(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(yr(i))}else e!==void 0&&t.push(yr(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dc(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:ls).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),o=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:ls;this._$Em=i;const a=o.fromAttribute(t,r.type);this[i]=a??this._$Ej?.get(i)??a,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){if(e!==void 0){const o=this.constructor;if(i===!1&&(r=this[e]),s??=o.getPropertyOptions(e),!((s.hasChanged??vi)(r,t)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},o){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??t??this[e]),r!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,r]of s){const{wrapped:o}=r,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,r,a)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Kt.elementStyles=[],Kt.shadowRootOptions={mode:"open"},Kt[kn("elementProperties")]=new Map,Kt[kn("finalized")]=new Map,yc?.({ReactiveElement:Kt}),(As.reactiveElementVersions??=[]).push("2.1.2");const _i=globalThis,Mr=n=>n,hs=_i.trustedTypes,Tr=hs?hs.createPolicy("lit-html",{createHTML:n=>n}):void 0,po="$lit$",_t=`lit$${Math.random().toFixed(9).slice(2)}$`,mo="?"+_t,xc=`<${mo}>`,Dt=document,Sn=()=>Dt.createComment(""),Nn=n=>n===null||typeof n!="object"&&typeof n!="function",bi=Array.isArray,wc=n=>bi(n)||typeof n?.[Symbol.iterator]=="function",Ys=`[ 	
\f\r]`,Tn=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kr=/-->/g,Ar=/>/g,St=RegExp(`>|${Ys}(?:([^\\s"'>=/]+)(${Ys}*=${Ys}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Cr=/'/g,Pr=/"/g,fo=/^(?:script|style|textarea|title)$/i,Mc=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),$=Mc(1),on=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),Sr=new WeakMap,Nt=Dt.createTreeWalker(Dt,129);function go(n,e){if(!bi(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tr!==void 0?Tr.createHTML(e):e}const Tc=(n,e)=>{const t=n.length-1,s=[];let i,r=e===2?"<svg>":e===3?"<math>":"",o=Tn;for(let a=0;a<t;a++){const c=n[a];let l,h,u=-1,d=0;for(;d<c.length&&(o.lastIndex=d,h=o.exec(c),h!==null);)d=o.lastIndex,o===Tn?h[1]==="!--"?o=kr:h[1]!==void 0?o=Ar:h[2]!==void 0?(fo.test(h[2])&&(i=RegExp("</"+h[2],"g")),o=St):h[3]!==void 0&&(o=St):o===St?h[0]===">"?(o=i??Tn,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,l=h[1],o=h[3]===void 0?St:h[3]==='"'?Pr:Cr):o===Pr||o===Cr?o=St:o===kr||o===Ar?o=Tn:(o=St,i=void 0);const m=o===St&&n[a+1].startsWith("/>")?" ":"";r+=o===Tn?c+xc:u>=0?(s.push(l),c.slice(0,u)+po+c.slice(u)+_t+m):c+_t+(u===-2?a:m)}return[go(n,r+(n[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class En{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let r=0,o=0;const a=e.length-1,c=this.parts,[l,h]=Tc(e,t);if(this.el=En.createElement(l,s),Nt.currentNode=this.el.content,t===2||t===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Nt.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const u of i.getAttributeNames())if(u.endsWith(po)){const d=h[o++],m=i.getAttribute(u).split(_t),p=/([.?@])?(.*)/.exec(d);c.push({type:1,index:r,name:p[2],strings:m,ctor:p[1]==="."?Ac:p[1]==="?"?Cc:p[1]==="@"?Pc:Cs}),i.removeAttribute(u)}else u.startsWith(_t)&&(c.push({type:6,index:r}),i.removeAttribute(u));if(fo.test(i.tagName)){const u=i.textContent.split(_t),d=u.length-1;if(d>0){i.textContent=hs?hs.emptyScript:"";for(let m=0;m<d;m++)i.append(u[m],Sn()),Nt.nextNode(),c.push({type:2,index:++r});i.append(u[d],Sn())}}}else if(i.nodeType===8)if(i.data===mo)c.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(_t,u+1))!==-1;)c.push({type:7,index:r}),u+=_t.length-1}r++}}static createElement(e,t){const s=Dt.createElement("template");return s.innerHTML=e,s}}function an(n,e,t=n,s){if(e===on)return e;let i=s!==void 0?t._$Co?.[s]:t._$Cl;const r=Nn(e)?void 0:e._$litDirective$;return i?.constructor!==r&&(i?._$AO?.(!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,t,s)),s!==void 0?(t._$Co??=[])[s]=i:t._$Cl=i),i!==void 0&&(e=an(n,i._$AS(n,e.values),i,s)),e}class kc{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??Dt).importNode(t,!0);Nt.currentNode=i;let r=Nt.nextNode(),o=0,a=0,c=s[0];for(;c!==void 0;){if(o===c.index){let l;c.type===2?l=new Vn(r,r.nextSibling,this,e):c.type===1?l=new c.ctor(r,c.name,c.strings,this,e):c.type===6&&(l=new Sc(r,this,e)),this._$AV.push(l),c=s[++a]}o!==c?.index&&(r=Nt.nextNode(),o++)}return Nt.currentNode=Dt,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class Vn{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=an(this,e,t),Nn(e)?e===be||e==null||e===""?(this._$AH!==be&&this._$AR(),this._$AH=be):e!==this._$AH&&e!==on&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):wc(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==be&&Nn(this._$AH)?this._$AA.nextSibling.data=e:this.T(Dt.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=En.createElement(go(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const r=new kc(i,this),o=r.u(this.options);r.p(t),this.T(o),this._$AH=r}}_$AC(e){let t=Sr.get(e.strings);return t===void 0&&Sr.set(e.strings,t=new En(e)),t}k(e){bi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const r of e)i===t.length?t.push(s=new Vn(this.O(Sn()),this.O(Sn()),this,this.options)):s=t[i],s._$AI(r),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const s=Mr(e).nextSibling;Mr(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Cs{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=be,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=be}_$AI(e,t=this,s,i){const r=this.strings;let o=!1;if(r===void 0)e=an(this,e,t,0),o=!Nn(e)||e!==this._$AH&&e!==on,o&&(this._$AH=e);else{const a=e;let c,l;for(e=r[0],c=0;c<r.length-1;c++)l=an(this,a[s+c],t,c),l===on&&(l=this._$AH[c]),o||=!Nn(l)||l!==this._$AH[c],l===be?e=be:e!==be&&(e+=(l??"")+r[c+1]),this._$AH[c]=l}o&&!i&&this.j(e)}j(e){e===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ac extends Cs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===be?void 0:e}}class Cc extends Cs{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==be)}}class Pc extends Cs{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=an(this,e,t,0)??be)===on)return;const s=this._$AH,i=e===be&&s!==be||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==be&&(s===be||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Sc{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){an(this,e)}}const Nc=_i.litHtmlPolyfillSupport;Nc?.(En,Vn),(_i.litHtmlVersions??=[]).push("3.3.2");const Ec=(n,e,t)=>{const s=t?.renderBefore??e;let i=s._$litPart$;if(i===void 0){const r=t?.renderBefore??null;s._$litPart$=i=new Vn(e.insertBefore(Sn(),r),r,void 0,t??{})}return i._$AI(n),i};const yi=globalThis;class Ue extends Kt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ec(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return on}}Ue._$litElement$=!0,Ue.finalized=!0,yi.litElementHydrateSupport?.({LitElement:Ue});const Oc=yi.litElementPolyfillSupport;Oc?.({LitElement:Ue});(yi.litElementVersions??=[]).push("4.2.2");const Bt=n=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(n,e)}):customElements.define(n,e)};const $c={attribute:!0,type:String,converter:ls,reflect:!1,hasChanged:vi},Dc=(n=$c,e,t)=>{const{kind:s,metadata:i}=t;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),s==="setter"&&((n=Object.create(n)).wrapped=!0),r.set(t.name,n),s==="accessor"){const{name:o}=t;return{set(a){const c=e.get.call(this);e.set.call(this,a),this.requestUpdate(o,c,n,!0,a)},init(a){return a!==void 0&&this.C(o,void 0,n,a),a}}}if(s==="setter"){const{name:o}=t;return function(a){const c=this[o];e.call(this,a),this.requestUpdate(o,c,n,!0,a)}}throw Error("Unsupported decorator location: "+s)};function fe(n){return(e,t)=>typeof t=="object"?Dc(n,e,t):((s,i,r)=>{const o=i.hasOwnProperty(r);return i.constructor.createProperty(r,s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,e,t)}function X(n){return fe({...n,state:!0,attribute:!1})}const Ic=(n,e,t)=>(t.configurable=!0,t.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(n,e,t),t);function vo(n,e){return(t,s,i)=>{const r=o=>o.renderRoot?.querySelector(n)??null;return Ic(t,s,{get(){return r(this)}})}}function _o(n){return n!==null&&typeof n=="object"&&"name"in n&&typeof n.name=="string"}function bo(n){return n!==null&&typeof n=="object"&&"step"in n&&typeof n.step=="number"&&"alt"in n&&typeof n.alt=="number"&&!isNaN(n.step)&&!isNaN(n.alt)}var yo=[0,2,4,-1,1,3,5],xo=yo.map(n=>Math.floor(n*7/12));function wo(n){const{step:e,alt:t,oct:s,dir:i=1}=n,r=yo[e]+7*t;if(s===void 0)return[i*r];const o=s-xo[e]-4*t;return[i*r,i*o]}var Rc=[3,0,4,1,5,2,6];function Mo(n){const[e,t,s]=n,i=Rc[Fc(e)],r=Math.floor((e+1)/7);if(t===void 0)return{step:i,alt:r,dir:s};const o=t+4*r+xo[i];return{step:i,alt:r,oct:o,dir:s}}function Fc(n){const e=(n+1)%7;return e<0?7+e:e}var Nr=(n,e)=>Array(Math.abs(e)+1).join(n),ti=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),Vc="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Lc="(AA|A|P|M|m|d|dd)([-+]?\\d+)",qc=new RegExp("^"+Vc+"|"+Lc+"$");function jc(n){const e=qc.exec(`${n}`);return e===null?["",""]:e[1]?[e[1],e[2]]:[e[4],e[3]]}var Er={};function Pe(n){return typeof n=="string"?Er[n]||(Er[n]=Wc(n)):bo(n)?Pe(zc(n)):_o(n)?Pe(n.name):ti}var Or=[0,2,4,5,7,9,11],To="PMMPPMM";function Wc(n){const e=jc(n);if(e[0]==="")return ti;const t=+e[0],s=e[1],i=(Math.abs(t)-1)%7,r=To[i];if(r==="M"&&s==="P")return ti;const o=r==="M"?"majorable":"perfectable",a=""+t+s,c=t<0?-1:1,l=t===8||t===-8?t:c*(i+1),h=Bc(o,s),u=Math.floor((Math.abs(t)-1)/7),d=c*(Or[i]+h+12*u),m=(c*(Or[i]+h)%12+12)%12,p=wo({step:i,alt:h,oct:u,dir:c});return{empty:!1,name:a,num:t,q:s,step:i,alt:h,dir:c,type:o,simple:l,semitones:d,chroma:m,coord:p,oct:u}}function xi(n,e){const[t,s=0]=n,i=t*7+s*12<0,r=e||i?[-t,-s,-1]:[t,s,1];return Pe(Mo(r))}function Bc(n,e){return e==="M"&&n==="majorable"||e==="P"&&n==="perfectable"?0:e==="m"&&n==="majorable"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?-1*(n==="perfectable"?e.length:e.length+1):0}function zc(n){const{step:e,alt:t,oct:s=0,dir:i}=n;if(!i)return"";const r=e+1+7*s,o=r===0?e+1:r,a=i<0?"-":"",c=To[e]==="M"?"majorable":"perfectable";return a+o+Uc(c,t)}function Uc(n,e){return e===0?n==="majorable"?"M":"P":e===-1&&n==="majorable"?"m":e>0?Nr("A",e):Nr("d",n==="perfectable"?e:e+1)}var $r=(n,e)=>Array(Math.abs(e)+1).join(n),ko=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),Dr=new Map,Hc=n=>"CDEFGAB".charAt(n),Gc=n=>n<0?$r("b",-n):$r("#",n),Xc=n=>n[0]==="b"?-n.length:n.length;function he(n){const e=JSON.stringify(n),t=Dr.get(e);if(t)return t;const s=typeof n=="string"?Qc(n):bo(n)?he(Jc(n)):_o(n)?he(n.name):ko;return Dr.set(e,s),s}var Yc=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function wi(n){const e=Yc.exec(n);return e?[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]:["","","",""]}function Zc(n){return he(Mo(n))}var Kc=(n,e)=>(n%e+e)%e,Zs=[0,2,4,5,7,9,11];function Qc(n){const e=wi(n);if(e[0]===""||e[3]!=="")return ko;const t=e[0],s=e[1],i=e[2],r=(t.charCodeAt(0)+3)%7,o=Xc(s),a=i.length?+i:void 0,c=wo({step:r,alt:o,oct:a}),l=t+s+i,h=t+s,u=(Zs[r]+o+120)%12,d=a===void 0?Kc(Zs[r]+o,12)-1188:Zs[r]+o+12*(a+1),m=d>=0&&d<=127?d:null,p=a===void 0?null:Math.pow(2,(d-69)/12)*440;return{empty:!1,acc:s,alt:o,chroma:u,coord:c,freq:p,height:d,letter:t,midi:m,name:l,oct:a,pc:h,step:r}}function Jc(n){const{step:e,alt:t,oct:s}=n,i=Hc(e);if(!i)return"";const r=i+Gc(t);return s||s===0?r+s:r}function Je(n,e){const t=he(n),s=Array.isArray(e)?e:Pe(e).coord;if(t.empty||!s||s.length<2)return"";const i=t.coord,r=i.length===1?[i[0]+s[0]]:[i[0]+s[0],i[1]+s[1]];return Zc(r).name}function Ao(n,e){const t=n.length;return s=>{if(!e)return"";const i=s<0?(t- -s%t)%t:s%t,r=Math.floor(s/t),o=Je(e,[0,r]);return Je(o,n[i])}}function us(n,e){const t=he(n),s=he(e);if(t.empty||s.empty)return"";const i=t.coord,r=s.coord,o=r[0]-i[0],a=i.length===2&&r.length===2?r[1]-i[1]:-Math.floor(o*7/12),c=s.height===t.height&&s.midi!==null&&t.oct===s.oct&&t.step>s.step;return xi([o,a],c).name}function el(n,e){const t=[];for(;e--;t[e]=e+n);return t}function tl(n,e){const t=[];for(;e--;t[e]=n-e);return t}function nl(n,e){return n<e?el(n,e-n+1):tl(n,n-e+1)}function Mi(n,e){const t=e.length,s=(n%t+t)%t;return e.slice(s,t).concat(e.slice(0,s))}function Co(n){return n.filter(e=>e===0||e)}var It={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},Po=n=>Number(n).toString(2).padStart(12,"0"),Ir=n=>parseInt(n,2),sl=/^[01]{12}$/;function So(n){return sl.test(n)}var il=n=>typeof n=="number"&&n>=0&&n<=4095,rl=n=>n&&So(n.chroma),Rr={[It.chroma]:It};function Rt(n){const e=So(n)?n:il(n)?Po(n):Array.isArray(n)?dl(n):rl(n)?n.chroma:It.chroma;return Rr[e]=Rr[e]||ul(e)}var ol=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function al(n){const e=[];for(let t=0;t<12;t++)n.charAt(t)==="1"&&e.push(ol[t]);return e}function cl(n,e=!0){const s=Rt(n).chroma.split("");return Co(s.map((i,r)=>{const o=Mi(r,s);return e&&o[0]==="0"?null:o.join("")}))}function ll(n){const e=Rt(n).setNum;return t=>{const s=Rt(t).setNum;return e&&e!==s&&(s&e)===s}}function No(n){const e=Rt(n).setNum;return t=>{const s=Rt(t).setNum;return e&&e!==s&&(s|e)===s}}function hl(n){const e=n.split("");return e.map((t,s)=>Mi(s,e).join(""))}function ul(n){const e=Ir(n),t=hl(n).map(Ir).filter(r=>r>=2048).sort()[0],s=Po(t),i=al(n);return{empty:!1,name:"",setNum:e,chroma:n,normalized:s,intervals:i}}function dl(n){if(n.length===0)return It.chroma;let e;const t=[0,0,0,0,0,0,0,0,0,0,0,0];for(let s=0;s<n.length;s++)e=he(n[s]),e.empty&&(e=Pe(n[s])),e.empty||(t[e.chroma]=1);return t.join("")}var pl=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],ml=pl,fl={...It,name:"",quality:"Unknown",intervals:[],aliases:[]},Ti=[],An={};function gl(n){return An[n]||fl}function ki(){return Ti.slice()}function vl(n,e,t){const s=bl(n),i={...Rt(n),name:t||"",quality:s,intervals:n,aliases:e};Ti.push(i),i.name&&(An[i.name]=i),An[i.setNum]=i,An[i.chroma]=i,i.aliases.forEach(r=>_l(i,r))}function _l(n,e){An[e]=n}function bl(n){const e=t=>n.indexOf(t)!==-1;return e("5A")?"Augmented":e("3M")?"Major":e("5d")?"Diminished":e("3m")?"Minor":"Unknown"}ml.forEach(([n,e,t])=>vl(n.split(" "),t.split(" "),e));Ti.sort((n,e)=>n.setNum-e.setNum);var yl=n=>{const e=n.reduce((t,s)=>{const i=he(s).chroma;return i!==void 0&&(t[i]=t[i]||he(s).name),t},{});return t=>e[t]};function xl(n,e={}){const t=n.map(i=>he(i).pc).filter(i=>i);return he.length===0?[]:Pl(t,1,e).filter(i=>i.weight).sort((i,r)=>r.weight-i.weight).map(i=>i.name)}var Ps={anyThirds:384,perfectFifth:16,nonPerfectFifths:40,anySeventh:3},Ss=n=>e=>!!(e&n),wl=Ss(Ps.anyThirds),Ml=Ss(Ps.perfectFifth),Tl=Ss(Ps.anySeventh),kl=Ss(Ps.nonPerfectFifths);function Al(n){const e=parseInt(n.chroma,2);return wl(e)&&Ml(e)&&Tl(e)}function Cl(n){const e=parseInt(n,2);return kl(e)?n:(e|16).toString(2)}function Pl(n,e,t){const s=n[0],i=he(s).chroma,r=yl(n),o=cl(n,!1),a=[];return o.forEach((c,l)=>{const h=t.assumePerfectFifth&&Cl(c);ki().filter(d=>t.assumePerfectFifth&&Al(d)?d.chroma===h:d.chroma===c).forEach(d=>{const m=d.aliases[0],p=r(l);l!==i?a.push({weight:.5*e,name:`${p}${m}/${s}`}):a.push({weight:1*e,name:`${p}${m}`})})}),a}function Sl(){return"1P 2M 3M 4P 5P 6m 7m".split(" ")}var Eo=Pe,Nl=n=>Pe(n).name,El=n=>Pe(n).semitones,Ol=n=>Pe(n).q,$l=n=>Pe(n).num;function Dl(n){const e=Pe(n);return e.empty?"":e.simple+e.q}function Il(n){const e=Pe(n);if(e.empty)return"";const t=(7-e.step)%7,s=e.type==="perfectable"?-e.alt:-(e.alt+1);return Pe({step:t,alt:s,oct:e.oct,dir:e.dir}).name}var Rl=[1,2,2,3,3,4,5,5,6,6,7,7],Fl="P m M m M P d P m M m M".split(" ");function Ai(n){const e=n<0?-1:1,t=Math.abs(n),s=t%12,i=Math.floor(t/12);return e*(Rl[s]+7*i)+Fl[s]}var Vl=us,Oo=Do((n,e)=>[n[0]+e[0],n[1]+e[1]]),Ll=n=>e=>Oo(n,e),$o=Do((n,e)=>[n[0]-e[0],n[1]-e[1]]);function ql(n,e){const t=Eo(n);if(t.empty)return"";const[s,i,r]=t.coord;return xi([s+e,i,r]).name}var jl={names:Sl,get:Eo,name:Nl,num:$l,semitones:El,quality:Ol,fromSemitones:Ai,distance:Vl,invert:Il,simplify:Dl,add:Oo,addTo:Ll,subtract:$o,transposeFifths:ql};function Do(n){return(e,t)=>{const s=Pe(e).coord,i=Pe(t).coord;if(s&&i){const r=n(s,i);return xi(r).name}}}var Wl=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Bl=Wl,zl={...It,intervals:[],aliases:[]},Io=[],Cn={};function Ro(n){return Cn[n]||zl}function Ul(){return Io.slice()}function Hl(n,e,t=[]){const s={...Rt(n),name:e,intervals:n,aliases:t};return Io.push(s),Cn[s.name]=s,Cn[s.setNum]=s,Cn[s.chroma]=s,s.aliases.forEach(i=>Gl(s,i)),s}function Gl(n,e){Cn[e]=n}Bl.forEach(([n,e,...t])=>Hl(n.split(" "),e,t));var Fo={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Ci(n){const[e,t,s,i]=wi(n);return e===""?Ks("",n):e==="A"&&i==="ug"?Ks("","aug"):Ks(e+t,s+i)}function Ks(n,e){const t=e.split("/");if(t.length===1)return[n,t[0],""];const[s,i,r,o]=wi(t[1]);return s!==""&&r===""&&o===""?[n,t[0],s+i]:[n,e,""]}function Ge(n){if(Array.isArray(n))return os(n[1]||"",n[0],n[2]);if(n==="")return Fo;{const[e,t,s]=Ci(n),i=os(t,e,s);return i.empty?os(n):i}}function os(n,e,t){const s=gl(n),i=he(e||""),r=he(t||"");if(s.empty||e&&i.empty||t&&r.empty)return Fo;const o=us(i.pc,r.pc),a=s.intervals.indexOf(o),c=a>=0,l=c?r:he(""),h=a===-1?NaN:a+1,u=r.pc&&r.pc!==i.pc,d=Array.from(s.intervals);if(c)for(let g=1;g<h;g++){const _=d[0][0],w=d[0][1],M=parseInt(_,10)+7;d.push(`${M}${w}`),d.shift()}else if(u){const g=$o(us(i.pc,r.pc),"8P");g&&d.unshift(g)}const m=i.empty?[]:d.map(g=>Je(i.pc,g));n=s.aliases.indexOf(n)!==-1?n:s.aliases[0];const p=`${i.empty?"":i.pc}${n}${c&&h>1?"/"+l.pc:u?"/"+r.pc:""}`,f=`${e?i.pc+" ":""}${s.name}${c&&h>1?" over "+l.pc:u?" over "+r.pc:""}`;return{...s,name:f,symbol:p,tonic:i.pc,type:s.name,root:l.pc,bass:u?r.pc:"",intervals:d,rootDegree:h,notes:m}}var Xl=Ge;function Yl(n,e){const[t,s,i]=Ci(n);if(!t)return n;const r=Je(i,e),o=r?"/"+r:"";return Je(t,e)+s+o}function Zl(n){const e=Ge(n),t=No(e.chroma);return Ul().filter(s=>t(s.chroma)).map(s=>s.name)}function Kl(n){const e=Ge(n),t=No(e.chroma);return ki().filter(s=>t(s.chroma)).map(s=>e.tonic+s.aliases[0])}function Ql(n){const e=Ge(n),t=ll(e.chroma);return ki().filter(s=>t(s.chroma)).map(s=>e.tonic+s.aliases[0])}function Jl(n,e){const t=Ge(n),s=e||t.tonic;return!s||t.empty?[]:t.intervals.map(i=>Je(s,i))}function eh(n,e){const t=Ge(n),s=e||t.tonic,i=Ao(t.intervals,s);return r=>r?i(r>0?r-1:r):""}function th(n,e){const t=Ge(n),s=e||t.tonic;return Ao(t.intervals,s)}var Vo={getChord:os,get:Ge,detect:xl,chordScales:Zl,extended:Kl,reduced:Ql,tokenize:Ci,transpose:Yl,degrees:eh,steps:th,notes:Jl,chord:Xl},nh=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],sh=nh;sh.forEach(([n,e,t])=>void 0);function ih(n){return+n>=0&&+n<=127}function rh(n){if(ih(n))return+n;const e=he(n);return e.empty?null:e.midi}var oh=Math.log(2),ah=Math.log(440);function Lo(n){const e=12*(Math.log(n)-ah)/oh+69;return Math.round(e*100)/100}var ch="C C# D D# E F F# G G# A A# B".split(" "),lh="C Db D Eb E F Gb G Ab A Bb B".split(" ");function zt(n,e={}){if(isNaN(n)||n===-1/0||n===1/0)return"";n=Math.round(n);const s=(e.sharps===!0?ch:lh)[n%12];if(e.pitchClass)return s;const i=Math.floor(n/12)-1;return s+i}var hh=["C","D","E","F","G","A","B"],qo=n=>n.name,jo=n=>n.map(he).filter(e=>!e.empty);function uh(n){return n===void 0?hh.slice():Array.isArray(n)?jo(n).map(qo):[]}var Xe=he,dh=n=>Xe(n).name,On=n=>Xe(n).pc,ph=n=>Xe(n).acc,mh=n=>Xe(n).oct,Wo=n=>Xe(n).midi,fh=n=>Xe(n).freq,gh=n=>Xe(n).chroma;function vh(n){return zt(n)}function _h(n){return zt(Lo(n))}function bh(n){return zt(Lo(n),{sharps:!0})}function yh(n){return zt(n,{sharps:!0})}var xh=us,Ut=Je,wh=Je,Bo=n=>e=>Ut(e,n),Mh=Bo,zo=n=>e=>Ut(n,e),Th=zo;function Uo(n,e){return Ut(n,[e,0])}var kh=Uo;function Ah(n,e){return Ut(n,[0,e])}var Pi=(n,e)=>n.height-e.height,Ch=(n,e)=>e.height-n.height;function Ho(n,e){return e=e||Pi,jo(n).sort(e).map(qo)}function Ph(n){return Ho(n,Pi).filter((e,t,s)=>t===0||e!==s[t-1])}var Sh=n=>{const e=Xe(n);return e.empty?"":zt(e.midi||e.chroma,{sharps:e.alt>0,pitchClass:e.midi===null})};function Si(n,e){const t=Xe(n);if(t.empty)return"";const s=Xe(e||zt(t.midi||t.chroma,{sharps:t.alt<0,pitchClass:!0}));if(s.empty||s.chroma!==t.chroma)return"";if(t.oct===void 0)return s.pc;const i=t.chroma-t.alt,r=s.chroma-s.alt,o=i>11||r<0?-1:i<0||r>11?1:0,a=t.oct+o;return s.pc+a}var ot={names:uh,get:Xe,name:dh,pitchClass:On,accidentals:ph,octave:mh,midi:Wo,ascending:Pi,descending:Ch,distance:xh,sortedNames:Ho,sortedUniqNames:Ph,fromMidi:vh,fromMidiSharps:yh,freq:fh,fromFreq:_h,fromFreqSharps:bh,chroma:gh,transpose:Ut,tr:wh,transposeBy:Bo,trBy:Mh,transposeFrom:zo,trFrom:Th,transposeFifths:Uo,transposeOctaves:Ah,trFifths:kh,simplify:Sh,enharmonic:Si},Ni=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],Fr={...It,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},Nh=Ni.map(Eh),ni={};Nh.forEach(n=>{ni[n.name]=n,n.aliases.forEach(e=>{ni[e]=n})});function Go(n){return typeof n=="string"?ni[n.toLowerCase()]||Fr:n&&n.name?Go(n.name):Fr}function Eh(n){const[e,t,s,i,r,o,a]=n,c=a?[a]:[],l=Number(t).toString(2);return{empty:!1,intervals:Ro(i).intervals,modeNum:e,chroma:l,normalized:l,name:i,setNum:t,alt:s,triad:r,seventh:o,aliases:c}}function Xo(n){return(e,t)=>{const s=Go(e);if(s.empty)return[];const i=Mi(s.modeNum,n),r=s.intervals.map(o=>Je(t,o));return i.map((o,a)=>r[a]+o)}}Xo(Ni.map(n=>n[4]));Xo(Ni.map(n=>n[5]));function Yo(n){const e=Co(n.map(t=>typeof t=="number"?t:rh(t)));return!n.length||e.length!==n.length?[]:e.reduce((t,s)=>{const i=t[t.length-1];return t.concat(nl(i,s).slice(1))},[e[0]])}function Oh(n,e){return Yo(n).map(t=>zt(t,e))}var $h={numeric:Yo,chromatic:Oh},Dh={empty:!0,name:"",type:"",tonic:null,setNum:NaN,chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function Ih(n){if(typeof n!="string")return["",""];const e=n.indexOf(" "),t=he(n.substring(0,e));if(t.empty){const i=he(n);return i.empty?["",n.toLowerCase()]:[i.name,""]}const s=n.substring(t.name.length+1).toLowerCase();return[t.name,s.length?s:""]}function Rh(n){const e=Array.isArray(n)?n:Ih(n),t=he(e[0]).name,s=Ro(e[1]);if(s.empty)return Dh;const i=s.name,r=t?s.intervals.map(a=>Je(t,a)):[],o=t?t+" "+i:i;return{...s,name:o,type:i,tonic:t,notes:r}}var Fh=(n,e)=>{if(!e||!e.length)return n[0];const t=i=>ot.midi(i[i.length-1])||0,s=i=>Math.abs(t(e)-t(i));return n.sort((i,r)=>s(i)-s(r))[0]},Vh={topNoteDiff:Fh},Lh={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"]},Zo={m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},qh={M:["1P 3M 5P","3M 5P 8P","5P 8P 10M"],m:["1P 3m 5P","3m 5P 8P","5P 8P 10m"],o:["1P 3m 5d","3m 5d 8P","5d 8P 10m"],aug:["1P 3M 5A","3M 5A 8P","5A 8P 10M"],m7:["3m 5P 7m 9M","7m 9M 10m 12P"],7:["3M 6M 7m 9M","7m 9M 10M 13M"],"^7":["3M 5P 7M 9M","7M 9M 10M 12P"],69:["3M 5P 6A 9M"],m7b5:["3m 5d 7m 8P","7m 8P 10m 12d"],"7b9":["3M 6m 7m 9m","7m 9m 10M 13m"],"7b13":["3M 6m 7m 9m","7m 9m 10M 13m"],o7:["1P 3m 5d 6M","5d 6M 8P 10m"],"7#11":["7m 9M 11A 13A"],"7#9":["3M 7m 9A"],mM7:["3m 5P 7M 9M","7M 9M 10m 12P"],m6:["3m 5P 6M 9M","6M 9M 10m 12P"]},Ko=Zo;function jh(n,e=Ko){if(e[n])return e[n];const{aliases:t}=Vo.get("C"+n),s=Object.keys(e).find(i=>t.includes(i))||"";if(s!==void 0)return e[s]}var si={lookup:jh,lefthand:Zo,triads:Lh,all:qh,defaultDictionary:Ko},Qo=["C3","C5"],Wh=si.all,Bh=Vh.topNoteDiff;function Vr(n,e=Qo,t=Wh,s=Bh,i){const r=zh(n,e,t);return!i||!i.length?r[0]:s(r,i)}function zh(n,e=Qo,t=si.triads){const[s,i]=Vo.tokenize(n),r=si.lookup(i,t);if(!r)return[];const o=r.map(c=>c.split(" ")),a=$h.chromatic(e);return o.reduce((c,l)=>{const h=l.map(p=>jl.subtract(p,l[0])||""),u=ot.transpose(s,l[0]),m=a.filter(p=>ot.chroma(p)===ot.chroma(u)).filter(p=>(ot.midi(ot.transpose(p,h[h.length-1]))||0)<=(ot.midi(e[1])||0)).map(p=>ot.enharmonic(p,u)).map(p=>h.map(f=>ot.transpose(p,f)));return c.concat(m)},[])}var Uh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,Ei=(n,e,t,s)=>{for(var i=s>1?void 0:s?Hh(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Uh(e,t,i),i};let $n=class extends Ue{constructor(){super(...arguments),this.value="",this.error=""}render(){return $`
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
    `}onInput(n){const e=n.target;this.value=e.value,this.error&&(this.error="")}onKeydown(n){n.key==="Enter"&&(n.preventDefault(),this.parseAndEmit())}parseAndEmit(){const n=this.parseProgression(this.value);if(!n.length){this.error="No valid chord symbols were found.";return}this.error="";const e={progression:n,source:this.value};this.dispatchEvent(new CustomEvent("progression-parsed",{detail:e,bubbles:!0,composed:!0}))}clearInput(){this.value="",this.error="",this.dispatchEvent(new CustomEvent("progression-parsed",{detail:{progression:[],source:""},bubbles:!0,composed:!0}))}parseProgression(n){const e=this.tokenize(n),t=[];for(const s of e){const i=Ge(s);i.empty||i.notes.length===0||t.push({symbol:s,tonic:i.tonic,quality:i.quality,notes:i.notes,intervals:i.intervals,aliases:i.aliases})}return t}sanitize(n){return n.replace(/->|→|–|—/g," ").replace(/[|>,;:]/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim()}tokenize(n){const e=this.sanitize(n),t=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,s=e.match(t);return s?s.map(i=>i.trim()):[]}};$n.styles=Wt`
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
  `;Ei([fe({type:String})],$n.prototype,"value",2);Ei([X()],$n.prototype,"error",2);$n=Ei([Bt("chord-input")],$n);var Gh=Object.defineProperty,Xh=Object.getOwnPropertyDescriptor,Ln=(n,e,t,s)=>{for(var i=s>1?void 0:s?Xh(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Gh(e,t,i),i};let Ft=class extends Ue{constructor(){super(...arguments),this.originalChords=[],this.keyChords=[],this.keyLabel="",this.activeIndex=0}render(){const n=this.keyChords.length>0?this.keyChords:this.originalChords;return $`
      <div class="sequence-track">
        ${Array.from({length:16}).map((e,t)=>{const s=n[t];return $`
            <div 
              class="step-block ${t===this.activeIndex?"active":""}"
              @click=${()=>s&&this.selectChord(t)}
            >
              ${s?$`<span class="chord-symbol">${s.symbol}</span>`:$`<span class="step-index">${t+1}</span>`}
            </div>
          `})}
      </div>
    `}selectChord(n){this.dispatchEvent(new CustomEvent("chord-selected",{detail:n,bubbles:!0,composed:!0}))}};Ft.styles=Wt`
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
  `;Ln([fe({attribute:!1})],Ft.prototype,"originalChords",2);Ln([fe({attribute:!1})],Ft.prototype,"keyChords",2);Ln([fe({type:String})],Ft.prototype,"keyLabel",2);Ln([fe({type:Number})],Ft.prototype,"activeIndex",2);Ft=Ln([Bt("progression-stepper")],Ft);const Jo="15.1.22",Lr=(n,e,t)=>({endTime:e,insertTime:t,type:"exponentialRampToValue",value:n}),qr=(n,e,t)=>({endTime:e,insertTime:t,type:"linearRampToValue",value:n}),ii=(n,e)=>({startTime:e,type:"setValue",value:n}),ea=(n,e,t)=>({duration:t,startTime:e,type:"setValueCurve",values:n}),ta=(n,e,{startTime:t,target:s,timeConstant:i})=>s+(e-s)*Math.exp((t-n)/i),Jt=n=>n.type==="exponentialRampToValue",ds=n=>n.type==="linearRampToValue",vt=n=>Jt(n)||ds(n),Oi=n=>n.type==="setValue",at=n=>n.type==="setValueCurve",ps=(n,e,t,s)=>{const i=n[e];return i===void 0?s:vt(i)||Oi(i)?i.value:at(i)?i.values[i.values.length-1]:ta(t,ps(n,e-1,i.startTime,s),i)},jr=(n,e,t,s,i)=>t===void 0?[s.insertTime,i]:vt(t)?[t.endTime,t.value]:Oi(t)?[t.startTime,t.value]:at(t)?[t.startTime+t.duration,t.values[t.values.length-1]]:[t.startTime,ps(n,e-1,t.startTime,i)],ri=n=>n.type==="cancelAndHold",oi=n=>n.type==="cancelScheduledValues",gt=n=>ri(n)||oi(n)?n.cancelTime:Jt(n)||ds(n)?n.endTime:n.startTime,Wr=(n,e,t,{endTime:s,value:i})=>t===i?i:0<t&&0<i||t<0&&i<0?t*(i/t)**((n-e)/(s-e)):n<s?t:i,Br=(n,e,t,{endTime:s,value:i})=>t+(n-e)/(s-e)*(i-t),na=(n,e)=>{const t=Math.floor(e);if(t===e)return n[t];const s=Math.ceil(e);return(1-(e-t))*n[t]+(1-(s-e))*n[s]},Yh=(n,{duration:e,startTime:t,values:s})=>{const i=(n-t)/e*(s.length-1);return na(s,i)},Zh=(n,e,t)=>{const s=n.length,i=Math.max(1,Math.floor(t/e*s))+1,r=n instanceof Float32Array?new Float32Array(i):n.slice(0,i);for(let o=0;o<i;o+=1){const c=o/(i-1)*t/e*(s-1);r[o]=na(n,c)}return r},es=n=>n.type==="setTarget";class Kh{constructor(e){this._automationEvents=[],this._currenTime=0,this._defaultValue=e}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(e){const t=gt(e);if(ri(e)||oi(e)){const s=this._automationEvents.findIndex(r=>oi(e)&&at(r)?r.startTime+r.duration>=t:gt(r)>=t),i=this._automationEvents[s];if(s!==-1&&(this._automationEvents=this._automationEvents.slice(0,s)),ri(e)){const r=this._automationEvents[this._automationEvents.length-1];if(i!==void 0&&vt(i)){if(r!==void 0&&es(r))throw new Error("The internal list is malformed.");const o=r===void 0?i.insertTime:at(r)?r.startTime+r.duration:gt(r),a=r===void 0?this._defaultValue:at(r)?r.values[r.values.length-1]:r.value,c=Jt(i)?Wr(t,o,a,i):Br(t,o,a,i),l=Jt(i)?Lr(c,t,this._currenTime):qr(c,t,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&es(r)&&this._automationEvents.push(ii(this.getValue(t),t)),r!==void 0&&at(r)&&r.startTime+r.duration>t){const o=t-r.startTime;this._automationEvents[this._automationEvents.length-1]=ea(Zh(r.values,r.duration,o),r.startTime,o)}}}else{const s=this._automationEvents.findIndex(o=>gt(o)>t),i=s===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[s-1];if(i!==void 0&&at(i)&&gt(i)+i.duration>t)return!1;const r=Jt(e)?Lr(e.value,e.endTime,this._currenTime):ds(e)?qr(e.value,t,this._currenTime):e;if(s===-1)this._automationEvents.push(r);else{if(at(e)&&t+e.duration>gt(this._automationEvents[s]))return!1;this._automationEvents.splice(s,0,r)}}return!0}flush(e){const t=this._automationEvents.findIndex(s=>gt(s)>e);if(t>1){const s=this._automationEvents.slice(t-1),i=s[0];es(i)&&s.unshift(ii(ps(this._automationEvents,t-2,i.startTime,this._defaultValue),i.startTime)),this._automationEvents=s}}getValue(e){if(this._automationEvents.length===0)return this._defaultValue;const t=this._automationEvents.findIndex(o=>gt(o)>e),s=this._automationEvents[t],i=(t===-1?this._automationEvents.length:t)-1,r=this._automationEvents[i];if(r!==void 0&&es(r)&&(s===void 0||!vt(s)||s.insertTime>e))return ta(e,ps(this._automationEvents,i-1,r.startTime,this._defaultValue),r);if(r!==void 0&&Oi(r)&&(s===void 0||!vt(s)))return r.value;if(r!==void 0&&at(r)&&(s===void 0||!vt(s)||r.startTime+r.duration>e))return e<r.startTime+r.duration?Yh(e,r):r.values[r.values.length-1];if(r!==void 0&&vt(r)&&(s===void 0||!vt(s)))return r.value;if(s!==void 0&&Jt(s)){const[o,a]=jr(this._automationEvents,i,r,s,this._defaultValue);return Wr(e,o,a,s)}if(s!==void 0&&ds(s)){const[o,a]=jr(this._automationEvents,i,r,s,this._defaultValue);return Br(e,o,a,s)}return this._defaultValue}}const Qh=n=>({cancelTime:n,type:"cancelAndHold"}),Jh=n=>({cancelTime:n,type:"cancelScheduledValues"}),eu=(n,e)=>({endTime:e,type:"exponentialRampToValue",value:n}),tu=(n,e)=>({endTime:e,type:"linearRampToValue",value:n}),nu=(n,e,t)=>({startTime:e,target:n,timeConstant:t,type:"setTarget"}),su=()=>new DOMException("","AbortError"),iu=n=>(e,t,[s,i,r],o)=>{n(e[i],[t,s,r],a=>a[0]===t&&a[1]===s,o)},ru=n=>(e,t,s)=>{const i=[];for(let r=0;r<s.numberOfInputs;r+=1)i.push(new Set);n.set(e,{activeInputs:i,outputs:new Set,passiveInputs:new WeakMap,renderer:t})},ou=n=>(e,t)=>{n.set(e,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:t})},cn=new WeakSet,sa=new WeakMap,$i=new WeakMap,ia=new WeakMap,Di=new WeakMap,Ns=new WeakMap,ra=new WeakMap,ai=new WeakMap,ci=new WeakMap,li=new WeakMap,oa={construct(){return oa}},au=n=>{try{const e=new Proxy(n,oa);new e}catch{return!1}return!0},zr=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,Ur=(n,e)=>{const t=[];let s=n.replace(/^[\s]+/,""),i=s.match(zr);for(;i!==null;){const r=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,e).toString());t.push(o),s=s.slice(i[0].length).replace(/^[\s]+/,""),i=s.match(zr)}return[t.join(";"),s]},Hr=n=>{if(n!==void 0&&!Array.isArray(n))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},Gr=n=>{if(!au(n))throw new TypeError("The given value for processorCtor should be a constructor.");if(n.prototype===null||typeof n.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},cu=(n,e,t,s,i,r,o,a,c,l,h,u,d)=>{let m=0;return(p,f,g={credentials:"omit"})=>{const _=h.get(p);if(_!==void 0&&_.has(f))return Promise.resolve();const w=l.get(p);if(w!==void 0){const v=w.get(f);if(v!==void 0)return v}const M=r(p),k=M.audioWorklet===void 0?i(f).then(([v,y])=>{const[x,b]=Ur(v,y),C=`${x};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${b}
})})(window,'_AWGS')`;return t(C)}).then(()=>{const v=d._AWGS.pop();if(v===void 0)throw new SyntaxError;s(M.currentTime,M.sampleRate,()=>v(class{},void 0,(y,x)=>{if(y.trim()==="")throw e();const b=ci.get(M);if(b!==void 0){if(b.has(y))throw e();Gr(x),Hr(x.parameterDescriptors),b.set(y,x)}else Gr(x),Hr(x.parameterDescriptors),ci.set(M,new Map([[y,x]]))},M.sampleRate,void 0,void 0))}):Promise.all([i(f),Promise.resolve(n(u,u))]).then(([[v,y],x])=>{const b=m+1;m=b;const[C,P]=Ur(v,y),N=`${C};((AudioWorkletProcessor,registerProcessor)=>{${P}
})(${x?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${x?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${x?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${b}',class extends AudioWorkletProcessor{process(){return !1}})`,I=new Blob([N],{type:"application/javascript; charset=utf-8"}),O=URL.createObjectURL(I);return M.audioWorklet.addModule(O,g).then(()=>{if(a(M))return M;const D=o(M);return D.audioWorklet.addModule(O,g).then(()=>D)}).then(D=>{if(c===null)throw new SyntaxError;try{new c(D,`__sac${b}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(O))});return w===void 0?l.set(p,new Map([[f,k]])):w.set(f,k),k.then(()=>{const v=h.get(p);v===void 0?h.set(p,new Set([f])):v.add(f)}).finally(()=>{const v=l.get(p);v!==void 0&&v.delete(f)}),k}},Ye=(n,e)=>{const t=n.get(e);if(t===void 0)throw new Error("A value with the given key could not be found.");return t},Es=(n,e)=>{const t=Array.from(n).filter(e);if(t.length>1)throw Error("More than one element was found.");if(t.length===0)throw Error("No element was found.");const[s]=t;return n.delete(s),s},aa=(n,e,t,s)=>{const i=Ye(n,e),r=Es(i,o=>o[0]===t&&o[1]===s);return i.size===0&&n.delete(e),r},qn=n=>Ye(ra,n),ln=n=>{if(cn.has(n))throw new Error("The AudioNode is already stored.");cn.add(n),qn(n).forEach(e=>e(!0))},ca=n=>"port"in n,jn=n=>{if(!cn.has(n))throw new Error("The AudioNode is not stored.");cn.delete(n),qn(n).forEach(e=>e(!1))},hi=(n,e)=>{!ca(n)&&e.every(t=>t.size===0)&&jn(n)},lu=(n,e,t,s,i,r,o,a,c,l,h,u,d)=>{const m=new WeakMap;return(p,f,g,_,w)=>{const{activeInputs:M,passiveInputs:k}=r(f),{outputs:v}=r(p),y=a(p),x=b=>{const C=c(f),P=c(p);if(b){const A=aa(k,p,g,_);n(M,p,A,!1),!w&&!u(p)&&t(P,C,g,_),d(f)&&ln(f)}else{const A=s(M,p,g,_);e(k,_,A,!1),!w&&!u(p)&&i(P,C,g,_);const T=o(f);if(T===0)h(f)&&hi(f,M);else{const S=m.get(f);S!==void 0&&clearTimeout(S),m.set(f,setTimeout(()=>{h(f)&&hi(f,M)},T*1e3))}}};return l(v,[f,g,_],b=>b[0]===f&&b[1]===g&&b[2]===_,!0)?(y.add(x),h(p)?n(M,p,[g,_,x],!0):e(k,_,[p,g,x],!0),!0):!1}},hu=n=>(e,t,[s,i,r],o)=>{const a=e.get(s);a===void 0?e.set(s,new Set([[i,t,r]])):n(a,[i,t,r],c=>c[0]===i&&c[1]===t,o)},uu=n=>(e,t)=>{const s=n(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});t.connect(s).connect(e.destination);const i=()=>{t.removeEventListener("ended",i),t.disconnect(s),s.disconnect()};t.addEventListener("ended",i)},du=n=>(e,t)=>{n(e).add(t)},pu={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},mu=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),h={...pu,...c},u=s(l,h),d=r(l)?e():null;super(a,!1,u,d),this._nativeAnalyserNode=u}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,t()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,t()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},Te=(n,e)=>n.context===e,fu=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Te(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},ms=n=>{try{n.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},st=()=>new DOMException("","IndexSizeError"),Ii=n=>{n.getChannelData=(e=>t=>{try{return e.call(n,t)}catch(s){throw s.code===12?st():s}})(n.getChannelData)},gu={numberOfChannels:1},vu=(n,e,t,s,i,r,o,a)=>{let c=null;return class la{constructor(h){if(i===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:u,numberOfChannels:d,sampleRate:m}={...gu,...h};c===null&&(c=new i(1,1,44100));const p=s!==null&&e(r,r)?new s({length:u,numberOfChannels:d,sampleRate:m}):c.createBuffer(d,u,m);if(p.numberOfChannels===0)throw t();return typeof p.copyFromChannel!="function"?(o(p),Ii(p)):e(ms,()=>ms(p))||a(p),n.add(p),p}static[Symbol.hasInstance](h){return h!==null&&typeof h=="object"&&Object.getPrototypeOf(h)===la.prototype||n.has(h)}}},Ne=-34028234663852886e22,Ae=-Ne,lt=n=>cn.has(n),_u={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},bu=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,h){const u=r(l),d={..._u,...h},m=i(u,d),p=o(u),f=p?e():null;super(l,!1,m,f),this._audioBufferSourceNodeRenderer=f,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=m,this._onended=null,this._playbackRate=t(this,p,m.playbackRate,Ae,Ne)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw s();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const h=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=h;const u=this._nativeAudioBufferSourceNode.onended;this._onended=u!==null&&u===h?l:u}get playbackRate(){return this._playbackRate}start(l=0,h=0,u){if(this._nativeAudioBufferSourceNode.start(l,h,u),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=u===void 0?[l,h]:[l,h,u]),this.context.state!=="closed"){ln(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),lt(this)&&jn(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},yu=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,h)=>{let u=t(l);const d=Te(u,h);if(!d){const m={buffer:u.buffer,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,loop:u.loop,loopEnd:u.loopEnd,loopStart:u.loopStart,playbackRate:u.playbackRate.value};u=e(h,m),o!==null&&u.start(...o),a!==null&&u.stop(a)}return r.set(h,u),d?await n(h,l.playbackRate,u.playbackRate):await s(h,l.playbackRate,u.playbackRate),await i(l,h,u),u};return{set start(l){o=l},set stop(l){a=l},render(l,h){const u=r.get(h);return u!==void 0?Promise.resolve(u):c(l,h)}}},xu=n=>"playbackRate"in n,wu=n=>"frequency"in n&&"gain"in n,Mu=n=>"offset"in n,Tu=n=>!("frequency"in n)&&"gain"in n,ku=n=>"detune"in n&&"frequency"in n&&!("gain"in n),Au=n=>"pan"in n,Ce=n=>Ye(sa,n),Wn=n=>Ye(ia,n),ui=(n,e)=>{const{activeInputs:t}=Ce(n);t.forEach(i=>i.forEach(([r])=>{e.includes(n)||ui(r,[...e,n])}));const s=xu(n)?[n.playbackRate]:ca(n)?Array.from(n.parameters.values()):wu(n)?[n.Q,n.detune,n.frequency,n.gain]:Mu(n)?[n.offset]:Tu(n)?[n.gain]:ku(n)?[n.detune,n.frequency]:Au(n)?[n.pan]:[];for(const i of s){const r=Wn(i);r!==void 0&&r.activeInputs.forEach(([o])=>ui(o,e))}lt(n)&&jn(n)},ha=n=>{ui(n.destination,[])},Cu=n=>n===void 0||typeof n=="number"||typeof n=="string"&&(n==="balanced"||n==="interactive"||n==="playback"),Pu=(n,e,t,s,i,r,o,a,c)=>class extends n{constructor(h={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let u;try{u=new c(h)}catch(p){throw p.code===12&&p.message==="sampleRate is not in range"?t():p}if(u===null)throw s();if(!Cu(h.latencyHint))throw new TypeError(`The provided value '${h.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(h.sampleRate!==void 0&&u.sampleRate!==h.sampleRate)throw t();super(u,2);const{latencyHint:d}=h,{sampleRate:m}=u;if(this._baseLatency=typeof u.baseLatency=="number"?u.baseLatency:d==="balanced"?512/m:d==="interactive"||d===void 0?256/m:d==="playback"?1024/m:Math.max(2,Math.min(128,Math.round(d*m/128)))*128/m,this._nativeAudioContext=u,c.name==="webkitAudioContext"?(this._nativeGainNode=u.createGain(),this._nativeOscillatorNode=u.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(u.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,u.state==="running"){this._state="suspended";const p=()=>{this._state==="suspended"&&(this._state=null),u.removeEventListener("statechange",p)};u.addEventListener("statechange",p)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw e()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),ha(this)}))}createMediaElementSource(h){return new i(this,{mediaElement:h})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(h){return new o(this,{mediaStream:h})}createMediaStreamTrackSource(h){return new a(this,{mediaStreamTrack:h})}resume(){return this._state==="suspended"?new Promise((h,u)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?h():this.resume().then(h,u)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(h=>{throw h===void 0||h.code===15?e():h})}suspend(){return this._nativeAudioContext.suspend().catch(h=>{throw h===void 0?e():h})}},Su=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,h){const u=r(l),d=o(u),m=i(u,h,d),p=d?e(a):null;super(l,!1,m,p),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=m}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw s();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw t();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw s();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},Nu=n=>{const e=new WeakMap,t=async(s,i)=>{const r=i.destination;return e.set(i,r),await n(s,i,r),r};return{render(s,i){const r=e.get(i);return r!==void 0?Promise.resolve(r):t(s,i)}}},Eu=(n,e,t,s,i,r,o,a)=>(c,l)=>{const h=l.listener,u=()=>{const v=new Float32Array(1),y=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),x=o(l);let b=!1,C=[0,0,-1,0,1,0],P=[0,0,0];const A=()=>{if(b)return;b=!0;const I=s(l,256,9,0);I.onaudioprocess=({inputBuffer:O})=>{const D=[r(O,v,0),r(O,v,1),r(O,v,2),r(O,v,3),r(O,v,4),r(O,v,5)];D.some((F,q)=>F!==C[q])&&(h.setOrientation(...D),C=D);const z=[r(O,v,6),r(O,v,7),r(O,v,8)];z.some((F,q)=>F!==P[q])&&(h.setPosition(...z),P=z)},y.connect(I)},T=I=>O=>{O!==C[I]&&(C[I]=O,h.setOrientation(...C))},S=I=>O=>{O!==P[I]&&(P[I]=O,h.setPosition(...P))},N=(I,O,D)=>{const z=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:O});z.connect(y,0,I),z.start(),Object.defineProperty(z.offset,"defaultValue",{get(){return O}});const F=n({context:c},x,z.offset,Ae,Ne);return a(F,"value",q=>()=>q.call(F),q=>L=>{try{q.call(F,L)}catch(Y){if(Y.code!==9)throw Y}A(),x&&D(L)}),F.cancelAndHoldAtTime=(q=>x?()=>{throw i()}:(...L)=>{const Y=q.apply(F,L);return A(),Y})(F.cancelAndHoldAtTime),F.cancelScheduledValues=(q=>x?()=>{throw i()}:(...L)=>{const Y=q.apply(F,L);return A(),Y})(F.cancelScheduledValues),F.exponentialRampToValueAtTime=(q=>x?()=>{throw i()}:(...L)=>{const Y=q.apply(F,L);return A(),Y})(F.exponentialRampToValueAtTime),F.linearRampToValueAtTime=(q=>x?()=>{throw i()}:(...L)=>{const Y=q.apply(F,L);return A(),Y})(F.linearRampToValueAtTime),F.setTargetAtTime=(q=>x?()=>{throw i()}:(...L)=>{const Y=q.apply(F,L);return A(),Y})(F.setTargetAtTime),F.setValueAtTime=(q=>x?()=>{throw i()}:(...L)=>{const Y=q.apply(F,L);return A(),Y})(F.setValueAtTime),F.setValueCurveAtTime=(q=>x?()=>{throw i()}:(...L)=>{const Y=q.apply(F,L);return A(),Y})(F.setValueCurveAtTime),F};return{forwardX:N(0,0,T(0)),forwardY:N(1,0,T(1)),forwardZ:N(2,-1,T(2)),positionX:N(6,0,S(0)),positionY:N(7,0,S(1)),positionZ:N(8,0,S(2)),upX:N(3,0,T(3)),upY:N(4,1,T(4)),upZ:N(5,0,T(5))}},{forwardX:d,forwardY:m,forwardZ:p,positionX:f,positionY:g,positionZ:_,upX:w,upY:M,upZ:k}=h.forwardX===void 0?u():h;return{get forwardX(){return d},get forwardY(){return m},get forwardZ(){return p},get positionX(){return f},get positionY(){return g},get positionZ(){return _},get upX(){return w},get upY(){return M},get upZ(){return k}}},fs=n=>"context"in n,Bn=n=>fs(n[0]),Ht=(n,e,t,s)=>{for(const i of n)if(t(i)){if(s)return!1;throw Error("The set contains at least one similar element.")}return n.add(e),!0},Xr=(n,e,[t,s],i)=>{Ht(n,[e,t,s],r=>r[0]===e&&r[1]===t,i)},Yr=(n,[e,t,s],i)=>{const r=n.get(e);r===void 0?n.set(e,new Set([[t,s]])):Ht(r,[t,s],o=>o[0]===t,i)},gn=n=>"inputs"in n,gs=(n,e,t,s)=>{if(gn(e)){const i=e.inputs[s];return n.connect(i,t,0),[i,t,0]}return n.connect(e,t,s),[e,t,s]},ua=(n,e,t)=>{for(const s of n)if(s[0]===e&&s[1]===t)return n.delete(s),s;return null},Ou=(n,e,t)=>Es(n,s=>s[0]===e&&s[1]===t),da=(n,e)=>{if(!qn(n).delete(e))throw new Error("Missing the expected event listener.")},pa=(n,e,t)=>{const s=Ye(n,e),i=Es(s,r=>r[0]===t);return s.size===0&&n.delete(e),i},vs=(n,e,t,s)=>{gn(e)?n.disconnect(e.inputs[s],t,0):n.disconnect(e,t,s)},se=n=>Ye($i,n),Dn=n=>Ye(Di,n),Vt=n=>ai.has(n),as=n=>!cn.has(n),Zr=(n,e)=>new Promise(t=>{if(e!==null)t(!0);else{const s=n.createScriptProcessor(256,1,1),i=n.createGain(),r=n.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=n.createBufferSource();a.buffer=r,a.loop=!0,a.connect(s).connect(n.destination),a.connect(i),a.disconnect(i),s.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,h=>h===1)?t(!0):t(!1),a.stop(),s.onaudioprocess=null,a.disconnect(s),s.disconnect(n.destination)},a.start()}}),Qs=(n,e)=>{const t=new Map;for(const s of n)for(const i of s){const r=t.get(i);t.set(i,r===void 0?1:r+1)}t.forEach((s,i)=>e(i,s))},_s=n=>"context"in n,$u=n=>{const e=new Map;n.connect=(t=>(s,i=0,r=0)=>{const o=_s(s)?t(s,i,r):t(s,i),a=e.get(s);return a===void 0?e.set(s,[{input:r,output:i}]):a.every(c=>c.input!==r||c.output!==i)&&a.push({input:r,output:i}),o})(n.connect.bind(n)),n.disconnect=(t=>(s,i,r)=>{if(t.apply(n),s===void 0)e.clear();else if(typeof s=="number")for(const[o,a]of e){const c=a.filter(l=>l.output!==s);c.length===0?e.delete(o):e.set(o,c)}else if(e.has(s))if(i===void 0)e.delete(s);else{const o=e.get(s);if(o!==void 0){const a=o.filter(c=>c.output!==i&&(c.input!==r||r===void 0));a.length===0?e.delete(s):e.set(s,a)}}for(const[o,a]of e)a.forEach(c=>{_s(o)?n.connect(o,c.output,c.input):n.connect(o,c.output)})})(n.disconnect)},Du=(n,e,t,s)=>{const{activeInputs:i,passiveInputs:r}=Wn(e),{outputs:o}=Ce(n),a=qn(n),c=l=>{const h=se(n),u=Dn(e);if(l){const d=pa(r,n,t);Xr(i,n,d,!1),!s&&!Vt(n)&&h.connect(u,t)}else{const d=Ou(i,n,t);Yr(r,d,!1),!s&&!Vt(n)&&h.disconnect(u,t)}};return Ht(o,[e,t],l=>l[0]===e&&l[1]===t,!0)?(a.add(c),lt(n)?Xr(i,n,[t,c],!0):Yr(r,[n,t,c],!0),!0):!1},Iu=(n,e,t,s)=>{const{activeInputs:i,passiveInputs:r}=Ce(e),o=ua(i[s],n,t);return o===null?[aa(r,n,t,s)[2],!1]:[o[2],!0]},Ru=(n,e,t)=>{const{activeInputs:s,passiveInputs:i}=Wn(e),r=ua(s,n,t);return r===null?[pa(i,n,t)[1],!1]:[r[2],!0]},Ri=(n,e,t,s,i)=>{const[r,o]=Iu(n,t,s,i);if(r!==null&&(da(n,r),o&&!e&&!Vt(n)&&vs(se(n),se(t),s,i)),lt(t)){const{activeInputs:a}=Ce(t);hi(t,a)}},Fi=(n,e,t,s)=>{const[i,r]=Ru(n,t,s);i!==null&&(da(n,i),r&&!e&&!Vt(n)&&se(n).disconnect(Dn(t),s))},Fu=(n,e)=>{const t=Ce(n),s=[];for(const i of t.outputs)Bn(i)?Ri(n,e,...i):Fi(n,e,...i),s.push(i[0]);return t.outputs.clear(),s},Vu=(n,e,t)=>{const s=Ce(n),i=[];for(const r of s.outputs)r[1]===t&&(Bn(r)?Ri(n,e,...r):Fi(n,e,...r),i.push(r[0]),s.outputs.delete(r));return i},Lu=(n,e,t,s,i)=>{const r=Ce(n);return Array.from(r.outputs).filter(o=>o[0]===t&&(s===void 0||o[1]===s)&&(i===void 0||o[2]===i)).map(o=>(Bn(o)?Ri(n,e,...o):Fi(n,e,...o),r.outputs.delete(o),o[0]))},qu=(n,e,t,s,i,r,o,a,c,l,h,u,d,m,p,f)=>class extends l{constructor(_,w,M,k){super(M),this._context=_,this._nativeAudioNode=M;const v=h(_);u(v)&&t(Zr,()=>Zr(v,f))!==!0&&$u(M),$i.set(this,M),ra.set(this,new Set),_.state!=="closed"&&w&&ln(this),n(this,k,M)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(_){this._nativeAudioNode.channelCount=_}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(_){this._nativeAudioNode.channelCountMode=_}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(_){this._nativeAudioNode.channelInterpretation=_}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(_,w=0,M=0){if(w<0||w>=this._nativeAudioNode.numberOfOutputs)throw i();const k=h(this._context),v=p(k);if(d(_)||m(_))throw r();if(fs(_)){const b=se(_);try{const P=gs(this._nativeAudioNode,b,w,M),A=as(this);(v||A)&&this._nativeAudioNode.disconnect(...P),this.context.state!=="closed"&&!A&&as(_)&&ln(_)}catch(P){throw P.code===12?r():P}if(e(this,_,w,M,v)){const P=c([this],_);Qs(P,s(v))}return _}const y=Dn(_);if(y.name==="playbackRate"&&y.maxValue===1024)throw o();try{this._nativeAudioNode.connect(y,w),(v||as(this))&&this._nativeAudioNode.disconnect(y,w)}catch(b){throw b.code===12?r():b}if(Du(this,_,w,v)){const b=c([this],_);Qs(b,s(v))}}disconnect(_,w,M){let k;const v=h(this._context),y=p(v);if(_===void 0)k=Fu(this,y);else if(typeof _=="number"){if(_<0||_>=this.numberOfOutputs)throw i();k=Vu(this,y,_)}else{if(w!==void 0&&(w<0||w>=this.numberOfOutputs)||fs(_)&&M!==void 0&&(M<0||M>=_.numberOfInputs))throw i();if(k=Lu(this,y,_,w,M),k.length===0)throw r()}for(const x of k){const b=c([this],x);Qs(b,a)}}},ju=(n,e,t,s,i,r,o,a,c,l,h,u,d)=>(m,p,f,g=null,_=null)=>{const w=f.value,M=new Kh(w),k=p?s(M):null,v={get defaultValue(){return w},get maxValue(){return g===null?f.maxValue:g},get minValue(){return _===null?f.minValue:_},get value(){return f.value},set value(y){f.value=y,v.setValueAtTime(y,m.context.currentTime)},cancelAndHoldAtTime(y){if(typeof f.cancelAndHoldAtTime=="function")k===null&&M.flush(m.context.currentTime),M.add(i(y)),f.cancelAndHoldAtTime(y);else{const x=Array.from(M).pop();k===null&&M.flush(m.context.currentTime),M.add(i(y));const b=Array.from(M).pop();f.cancelScheduledValues(y),x!==b&&b!==void 0&&(b.type==="exponentialRampToValue"?f.exponentialRampToValueAtTime(b.value,b.endTime):b.type==="linearRampToValue"?f.linearRampToValueAtTime(b.value,b.endTime):b.type==="setValue"?f.setValueAtTime(b.value,b.startTime):b.type==="setValueCurve"&&f.setValueCurveAtTime(b.values,b.startTime,b.duration))}return v},cancelScheduledValues(y){return k===null&&M.flush(m.context.currentTime),M.add(r(y)),f.cancelScheduledValues(y),v},exponentialRampToValueAtTime(y,x){if(y===0)throw new RangeError;if(!Number.isFinite(x)||x<0)throw new RangeError;const b=m.context.currentTime;return k===null&&M.flush(b),Array.from(M).length===0&&(M.add(l(w,b)),f.setValueAtTime(w,b)),M.add(o(y,x)),f.exponentialRampToValueAtTime(y,x),v},linearRampToValueAtTime(y,x){const b=m.context.currentTime;return k===null&&M.flush(b),Array.from(M).length===0&&(M.add(l(w,b)),f.setValueAtTime(w,b)),M.add(a(y,x)),f.linearRampToValueAtTime(y,x),v},setTargetAtTime(y,x,b){return k===null&&M.flush(m.context.currentTime),M.add(c(y,x,b)),f.setTargetAtTime(y,x,b),v},setValueAtTime(y,x){return k===null&&M.flush(m.context.currentTime),M.add(l(y,x)),f.setValueAtTime(y,x),v},setValueCurveAtTime(y,x,b){const C=y instanceof Float32Array?y:new Float32Array(y);if(u!==null&&u.name==="webkitAudioContext"){const P=x+b,A=m.context.sampleRate,T=Math.ceil(x*A),S=Math.floor(P*A),N=S-T,I=new Float32Array(N);for(let D=0;D<N;D+=1){const z=(C.length-1)/b*((T+D)/A-x),F=Math.floor(z),q=Math.ceil(z);I[D]=F===q?C[F]:(1-(z-F))*C[F]+(1-(q-z))*C[q]}k===null&&M.flush(m.context.currentTime),M.add(h(I,x,b)),f.setValueCurveAtTime(I,x,b);const O=S/A;O<P&&d(v,I[I.length-1],O),d(v,C[C.length-1],P)}else k===null&&M.flush(m.context.currentTime),M.add(h(C,x,b)),f.setValueCurveAtTime(C,x,b);return v}};return t.set(v,f),e.set(v,m),n(v,k),v},Wu=n=>({replay(e){for(const t of n)if(t.type==="exponentialRampToValue"){const{endTime:s,value:i}=t;e.exponentialRampToValueAtTime(i,s)}else if(t.type==="linearRampToValue"){const{endTime:s,value:i}=t;e.linearRampToValueAtTime(i,s)}else if(t.type==="setTarget"){const{startTime:s,target:i,timeConstant:r}=t;e.setTargetAtTime(i,s,r)}else if(t.type==="setValue"){const{startTime:s,value:i}=t;e.setValueAtTime(i,s)}else if(t.type==="setValueCurve"){const{duration:s,startTime:i,values:r}=t;e.setValueCurveAtTime(r,i,s)}else throw new Error("Can't apply an unknown automation.")}});class ma{constructor(e){this._map=new Map(e)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(e,t=null){return this._map.forEach((s,i)=>e.call(t,s,i,this))}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){return this._map.keys()}values(){return this._map.values()}}const Bu={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},zu=(n,e,t,s,i,r,o,a,c,l,h,u,d,m)=>class extends e{constructor(f,g,_){var w;const M=a(f),k=c(M),v=h({...Bu,..._});d(v);const y=ci.get(M),x=y?.get(g),b=k||M.state!=="closed"?M:(w=o(M))!==null&&w!==void 0?w:M,C=i(b,k?null:f.baseLatency,l,g,x,v),P=k?s(g,v,x):null;super(f,!0,C,P);const A=[];C.parameters.forEach((S,N)=>{const I=t(this,k,S);A.push([N,I])}),this._nativeAudioWorkletNode=C,this._onprocessorerror=null,this._parameters=new ma(A),k&&n(M,this);const{activeInputs:T}=r(this);u(C,T)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(f){const g=typeof f=="function"?m(this,f):null;this._nativeAudioWorkletNode.onprocessorerror=g;const _=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=_!==null&&_===g?f:_}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function bs(n,e,t,s,i){if(typeof n.copyFromChannel=="function")e[t].byteLength===0&&(e[t]=new Float32Array(128)),n.copyFromChannel(e[t],s,i);else{const r=n.getChannelData(s);if(e[t].byteLength===0)e[t]=r.slice(i,i+128);else{const o=new Float32Array(r.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[t].set(o)}}}const fa=(n,e,t,s,i)=>{typeof n.copyToChannel=="function"?e[t].byteLength!==0&&n.copyToChannel(e[t],s,i):e[t].byteLength!==0&&n.getChannelData(s).set(e[t],i)},ys=(n,e)=>{const t=[];for(let s=0;s<n;s+=1){const i=[],r=typeof e=="number"?e:e[s];for(let o=0;o<r;o+=1)i.push(new Float32Array(128));t.push(i)}return t},Uu=(n,e)=>{const t=Ye(li,n),s=se(e);return Ye(t,s)},Hu=async(n,e,t,s,i,r,o)=>{const a=e===null?Math.ceil(n.context.length/128)*128:e.length,c=s.channelCount*s.numberOfInputs,l=i.reduce((g,_)=>g+_,0),h=l===0?null:t.createBuffer(l,a,t.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const u=Ce(n),d=await Uu(t,n),m=ys(s.numberOfInputs,s.channelCount),p=ys(s.numberOfOutputs,i),f=Array.from(n.parameters.keys()).reduce((g,_)=>({...g,[_]:new Float32Array(128)}),{});for(let g=0;g<a;g+=128){if(s.numberOfInputs>0&&e!==null)for(let _=0;_<s.numberOfInputs;_+=1)for(let w=0;w<s.channelCount;w+=1)bs(e,m[_],w,w,g);r.parameterDescriptors!==void 0&&e!==null&&r.parameterDescriptors.forEach(({name:_},w)=>{bs(e,f,_,c+w,g)});for(let _=0;_<s.numberOfInputs;_+=1)for(let w=0;w<i[_];w+=1)p[_][w].byteLength===0&&(p[_][w]=new Float32Array(128));try{const _=m.map((M,k)=>u.activeInputs[k].size===0?[]:M),w=o(g/t.sampleRate,t.sampleRate,()=>d.process(_,p,f));if(h!==null)for(let M=0,k=0;M<s.numberOfOutputs;M+=1){for(let v=0;v<i[M];v+=1)fa(h,p[M],v,k+v,g);k+=i[M]}if(!w)break}catch(_){n.dispatchEvent(new ErrorEvent("processorerror",{colno:_.colno,filename:_.filename,lineno:_.lineno,message:_.message}));break}}return h},Gu=(n,e,t,s,i,r,o,a,c,l,h,u,d,m,p,f)=>(g,_,w)=>{const M=new WeakMap;let k=null;const v=async(y,x)=>{let b=h(y),C=null;const P=Te(b,x),A=Array.isArray(_.outputChannelCount)?_.outputChannelCount:Array.from(_.outputChannelCount);if(u===null){const T=A.reduce((O,D)=>O+D,0),S=i(x,{channelCount:Math.max(1,T),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,T)}),N=[];for(let O=0;O<y.numberOfOutputs;O+=1)N.push(s(x,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:A[O]}));const I=o(x,{channelCount:_.channelCount,channelCountMode:_.channelCountMode,channelInterpretation:_.channelInterpretation,gain:1});I.connect=e.bind(null,N),I.disconnect=c.bind(null,N),C=[S,N,I]}else P||(b=new u(x,g));if(M.set(x,C===null?b:C[2]),C!==null){if(k===null){if(w===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const D=y.channelCount*y.numberOfInputs,z=w.parameterDescriptors===void 0?0:w.parameterDescriptors.length,F=D+z;k=Hu(y,F===0?null:await(async()=>{const L=new d(F,Math.ceil(y.context.length/128)*128,x.sampleRate),Y=[],$e=[];for(let ie=0;ie<_.numberOfInputs;ie+=1)Y.push(o(L,{channelCount:_.channelCount,channelCountMode:_.channelCountMode,channelInterpretation:_.channelInterpretation,gain:1})),$e.push(i(L,{channelCount:_.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:_.channelCount}));const De=await Promise.all(Array.from(y.parameters.values()).map(async ie=>{const ke=r(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:ie.value});return await m(L,ie,ke.offset),ke})),U=s(L,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,D+z)});for(let ie=0;ie<_.numberOfInputs;ie+=1){Y[ie].connect($e[ie]);for(let ke=0;ke<_.channelCount;ke+=1)$e[ie].connect(U,ke,ie*_.channelCount+ke)}for(const[ie,ke]of De.entries())ke.connect(U,0,D+ie),ke.start(0);return U.connect(L.destination),await Promise.all(Y.map(ie=>p(y,L,ie))),f(L)})(),x,_,A,w,l)}const T=await k,S=t(x,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[N,I,O]=C;T!==null&&(S.buffer=T,S.start(0)),S.connect(N);for(let D=0,z=0;D<y.numberOfOutputs;D+=1){const F=I[D];for(let q=0;q<A[D];q+=1)N.connect(F,z+q,q);z+=A[D]}return O}if(P)for(const[T,S]of y.parameters.entries())await n(x,S,b.parameters.get(T));else for(const[T,S]of y.parameters.entries())await m(x,S,b.parameters.get(T));return await p(y,x,b),b};return{render(y,x){a(x,y);const b=M.get(x);return b!==void 0?Promise.resolve(b):v(y,x)}}},Xu=(n,e,t,s,i,r,o,a,c,l,h,u,d,m,p,f,g,_,w,M)=>class extends p{constructor(v,y){super(v,y),this._nativeContext=v,this._audioWorklet=n===void 0?void 0:{addModule:(x,b)=>n(this,x,b)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(v,y,x){return new t({length:y,numberOfChannels:v,sampleRate:x})}createBufferSource(){return new s(this)}createChannelMerger(v=6){return new r(this,{numberOfInputs:v})}createChannelSplitter(v=6){return new o(this,{numberOfOutputs:v})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(v=1){return new h(this,{maxDelayTime:v})}createDynamicsCompressor(){return new u(this)}createGain(){return new d(this)}createIIRFilter(v,y){return new m(this,{feedback:y,feedforward:v})}createOscillator(){return new f(this)}createPanner(){return new g(this)}createPeriodicWave(v,y,x={disableNormalization:!1}){return new _(this,{...x,imag:y,real:v})}createStereoPanner(){return new w(this)}createWaveShaper(){return new M(this)}decodeAudioData(v,y,x){return l(this._nativeContext,v).then(b=>(typeof y=="function"&&y(b),b),b=>{throw typeof x=="function"&&x(b),b})}},Yu={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},Zu=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,h){const u=r(l),d={...Yu,...h},m=i(u,d),p=o(u),f=p?t():null;super(l,!1,m,f),this._Q=e(this,p,m.Q,Ae,Ne),this._detune=e(this,p,m.detune,1200*Math.log2(Ae),-1200*Math.log2(Ae)),this._frequency=e(this,p,m.frequency,l.sampleRate/2,0),this._gain=e(this,p,m.gain,40*Math.log10(Ae),Ne),this._nativeBiquadFilterNode=m,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,h,u){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,h,u)}catch(d){throw d.code===11?s():d}if(l.length!==h.length||h.length!==u.length)throw s()}},Ku=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const h=Te(l,c);if(!h){const u={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=e(c,u)}return r.set(c,l),h?(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)):(await s(c,a.Q,l.Q),await s(c,a.detune,l.detune),await s(c,a.frequency,l.frequency),await s(c,a.gain,l.gain)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Qu=(n,e)=>(t,s)=>{const i=e.get(t);if(i!==void 0)return i;const r=n.get(t);if(r!==void 0)return r;try{const o=s();return o instanceof Promise?(n.set(t,o),o.catch(()=>!1).then(a=>(n.delete(t),e.set(t,a),a))):(e.set(t,o),o)}catch{return e.set(t,!1),!1}},Ju={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},ed=(n,e,t,s,i)=>class extends n{constructor(o,a){const c=s(o),l={...Ju,...a},h=t(c,l),u=i(c)?e():null;super(o,!1,h,u)}},td=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Te(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},nd={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},sd=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),h=r({...nd,...c}),u=t(l,h),d=i(l)?e():null;super(a,!1,u,d)}},id=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Te(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=n(o,l)}return s.set(o,a),await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},rd=n=>(e,t,s)=>n(t,e,s),od=n=>(e,t,s=0,i=0)=>{const r=e[s];if(r===void 0)throw n();return _s(t)?r.connect(t,0,i):r.connect(t,0)},ad=n=>(e,t)=>{const s=n(e,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),i=e.createBuffer(1,2,44100);return s.buffer=i,s.loop=!0,s.connect(t),s.start(),()=>{s.stop(),s.disconnect(t)}},cd={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},ld=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const h=i(c),u={...cd,...l},d=s(h,u),m=r(h),p=m?t():null;super(c,!1,d,p),this._constantSourceNodeRenderer=p,this._nativeConstantSourceNode=d,this._offset=e(this,m,d.offset,Ae,Ne),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const h=this._nativeConstantSourceNode.onended;this._onended=h!==null&&h===l?c:h}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){ln(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),lt(this)&&jn(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},hd=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,h)=>{let u=t(l);const d=Te(u,h);if(!d){const m={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,offset:u.offset.value};u=e(h,m),o!==null&&u.start(o),a!==null&&u.stop(a)}return r.set(h,u),d?await n(h,l.offset,u.offset):await s(h,l.offset,u.offset),await i(l,h,u),u};return{set start(l){o=l},set stop(l){a=l},render(l,h){const u=r.get(h);return u!==void 0?Promise.resolve(u):c(l,h)}}},ud=n=>e=>(n[0]=e,n[0]),dd={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},pd=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),h={...dd,...c},u=t(l,h),m=i(l)?e():null;super(a,!1,u,m),this._isBufferNullified=!1,this._nativeConvolverNode=u,h.buffer!==null&&r(this,h.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},md=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Te(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=n(o,l)}return s.set(o,a),gn(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},fd=(n,e)=>(t,s,i)=>{if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(t,s,i)}catch(r){throw r.name==="SyntaxError"?n():r}},gd=()=>new DOMException("","DataCloneError"),Kr=n=>{const{port1:e,port2:t}=new MessageChannel;return new Promise(s=>{const i=()=>{t.onmessage=null,e.close(),t.close(),s()};t.onmessage=()=>i();try{e.postMessage(n,[n])}catch{}finally{i()}})},vd=(n,e,t,s,i,r,o,a,c,l,h)=>(u,d)=>{const m=o(u)?u:r(u);if(i.has(d)){const p=t();return Promise.reject(p)}try{i.add(d)}catch{}return e(c,()=>c(m))?m.decodeAudioData(d).then(p=>(Kr(d).catch(()=>{}),e(a,()=>a(p))||h(p),n.add(p),p)):new Promise((p,f)=>{const g=async()=>{try{await Kr(d)}catch{}},_=w=>{f(w),g()};try{m.decodeAudioData(d,w=>{typeof w.copyFromChannel!="function"&&(l(w),Ii(w)),n.add(w),g().then(()=>p(w))},w=>{_(w===null?s():w)})}catch(w){_(w)}})},_d=(n,e,t,s,i,r,o,a)=>(c,l)=>{const h=e.get(c);if(h===void 0)throw new Error("Missing the expected cycle count.");const u=r(c.context),d=a(u);if(h===l){if(e.delete(c),!d&&o(c)){const m=s(c),{outputs:p}=t(c);for(const f of p)if(Bn(f)){const g=s(f[0]);n(m,g,f[1],f[2])}else{const g=i(f[0]);m.connect(g,f[1])}}}else e.set(c,h-l)},bd={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},yd=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const h=i(c),u={...bd,...l},d=s(h,u),m=r(h),p=m?t(u.maxDelayTime):null;super(c,!1,d,p),this._delayTime=e(this,m,d.delayTime),o(this,u.maxDelayTime)}get delayTime(){return this._delayTime}},xd=(n,e,t,s,i)=>r=>{const o=new WeakMap,a=async(c,l)=>{let h=t(c);const u=Te(h,l);if(!u){const d={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:r};h=e(l,d)}return o.set(l,h),u?await n(l,c.delayTime,h.delayTime):await s(l,c.delayTime,h.delayTime),await i(c,l,h),h};return{render(c,l){const h=o.get(l);return h!==void 0?Promise.resolve(h):a(c,l)}}},wd=n=>(e,t,s,i)=>n(e[i],r=>r[0]===t&&r[1]===s),Md=n=>(e,t)=>{n(e).delete(t)},Td=n=>"delayTime"in n,kd=(n,e,t)=>function s(i,r){const o=fs(r)?r:t(n,r);if(Td(o))return[];if(i[0]===o)return[i];if(i.includes(o))return[];const{outputs:a}=e(o);return Array.from(a).map(c=>s([...i,o],c[0])).reduce((c,l)=>c.concat(l),[])},ts=(n,e,t)=>{const s=e[t];if(s===void 0)throw n();return s},Ad=n=>(e,t=void 0,s=void 0,i=0)=>t===void 0?e.forEach(r=>r.disconnect()):typeof t=="number"?ts(n,e,t).disconnect():_s(t)?s===void 0?e.forEach(r=>r.disconnect(t)):i===void 0?ts(n,e,s).disconnect(t,0):ts(n,e,s).disconnect(t,0,i):s===void 0?e.forEach(r=>r.disconnect(t)):ts(n,e,s).disconnect(t,0),Cd={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},Pd=(n,e,t,s,i,r,o,a)=>class extends n{constructor(l,h){const u=r(l),d={...Cd,...h},m=s(u,d),p=o(u),f=p?t():null;super(l,!1,m,f),this._attack=e(this,p,m.attack),this._knee=e(this,p,m.knee),this._nativeDynamicsCompressorNode=m,this._ratio=e(this,p,m.ratio),this._release=e(this,p,m.release),this._threshold=e(this,p,m.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const h=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=h,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const h=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=h,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},Sd=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const h=Te(l,c);if(!h){const u={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=e(c,u)}return r.set(c,l),h?(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)):(await s(c,a.attack,l.attack),await s(c,a.knee,l.knee),await s(c,a.ratio,l.ratio),await s(c,a.release,l.release),await s(c,a.threshold,l.threshold)),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Nd=()=>new DOMException("","EncodingError"),Ed=n=>e=>new Promise((t,s)=>{if(n===null){s(new SyntaxError);return}const i=n.document.head;if(i===null)s(new SyntaxError);else{const r=n.document.createElement("script"),o=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(o),c=n.onerror,l=()=>{n.onerror=c,URL.revokeObjectURL(a)};n.onerror=(h,u,d,m,p)=>{if(u===a||u===n.location.href&&d===1&&m===1)return l(),s(p),!1;if(c!==null)return c(h,u,d,m,p)},r.onerror=()=>{l(),s(new SyntaxError)},r.onload=()=>{l(),t()},r.src=a,r.type="module",i.appendChild(r)}}),Od=n=>class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,s,i){if(s!==null){let r=this._listeners.get(s);r===void 0&&(r=n(this,s),typeof s=="function"&&this._listeners.set(s,r)),this._nativeEventTarget.addEventListener(t,r,i)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,s,i){const r=s===null?void 0:this._listeners.get(s);this._nativeEventTarget.removeEventListener(t,r===void 0?null:r,i)}},$d=n=>(e,t,s)=>{Object.defineProperties(n,{currentFrame:{configurable:!0,get(){return Math.round(e*t)}},currentTime:{configurable:!0,get(){return e}}});try{return s()}finally{n!==null&&(delete n.currentFrame,delete n.currentTime)}},Dd=n=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw n()},Id={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},Rd=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),h={...Id,...c},u=s(l,h),d=r(l),m=d?t():null;super(a,!1,u,m),this._gain=e(this,d,u.gain,Ae,Ne)}get gain(){return this._gain}},Fd=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const h=Te(l,c);if(!h){const u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=e(c,u)}return r.set(c,l),h?await n(c,a.gain,l.gain):await s(c,a.gain,l.gain),await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},Vd=(n,e)=>t=>e(n,t),Ld=n=>e=>{const t=n(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return t.renderer},qd=n=>e=>{var t;return(t=n.get(e))!==null&&t!==void 0?t:0},jd=n=>e=>{const t=n(e);if(t.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return t.renderer},Wd=n=>e=>n.get(e),ye=()=>new DOMException("","InvalidStateError"),Bd=n=>e=>{const t=n.get(e);if(t===void 0)throw ye();return t},zd=(n,e)=>t=>{let s=n.get(t);if(s!==void 0)return s;if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");return s=new e(1,1,44100),n.set(t,s),s},Ud=n=>e=>{const t=n.get(e);if(t===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return t},Os=()=>new DOMException("","InvalidAccessError"),Hd=n=>{n.getFrequencyResponse=(e=>(t,s,i)=>{if(t.length!==s.length||s.length!==i.length)throw Os();return e.call(n,t,s,i)})(n.getFrequencyResponse)},Gd={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},Xd=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=s(a),h=i(l),u={...Gd,...c},d=e(l,h?null:a.baseLatency,u),m=h?t(u.feedback,u.feedforward):null;super(a,!1,d,m),Hd(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},ga=(n,e,t,s,i,r,o,a,c,l,h)=>{const u=l.length;let d=a;for(let m=0;m<u;m+=1){let p=t[0]*l[m];for(let f=1;f<i;f+=1){const g=d-f&c-1;p+=t[f]*r[g],p-=n[f]*o[g]}for(let f=i;f<s;f+=1)p+=t[f]*r[d-f&c-1];for(let f=i;f<e;f+=1)p-=n[f]*o[d-f&c-1];r[d]=l[m],o[d]=p,d=d+1&c-1,h[m]=p}return d},Yd=(n,e,t,s)=>{const i=t instanceof Float64Array?t:new Float64Array(t),r=s instanceof Float64Array?s:new Float64Array(s),o=i.length,a=r.length,c=Math.min(o,a);if(i[0]!==1){for(let p=0;p<o;p+=1)r[p]/=i[0];for(let p=1;p<a;p+=1)i[p]/=i[0]}const l=32,h=new Float32Array(l),u=new Float32Array(l),d=e.createBuffer(n.numberOfChannels,n.length,n.sampleRate),m=n.numberOfChannels;for(let p=0;p<m;p+=1){const f=n.getChannelData(p),g=d.getChannelData(p);h.fill(0),u.fill(0),ga(i,o,r,a,c,h,u,0,l,f,g)}return d},Zd=(n,e,t,s,i)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(h,u)=>{let d=null,m=e(h);const p=Te(m,u);if(u.createIIRFilter===void 0?d=n(u,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):p||(m=u.createIIRFilter(o,r)),a.set(u,d===null?m:d),d!==null){if(c===null){if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");const g=new t(h.context.destination.channelCount,h.context.length,u.sampleRate);c=(async()=>{await s(h,g,g.destination);const _=await i(g);return Yd(_,u,r,o)})()}const f=await c;return d.buffer=f,d.start(0),d}return await s(h,u,m),m};return{render(h,u){const d=a.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}},Kd=(n,e,t,s,i,r)=>o=>(a,c)=>{const l=n.get(a);if(l===void 0){if(!o&&r(a)){const h=s(a),{outputs:u}=t(a);for(const d of u)if(Bn(d)){const m=s(d[0]);e(h,m,d[1],d[2])}else{const m=i(d[0]);h.disconnect(m,d[1])}}n.set(a,c)}else n.set(a,l+c)},Qd=(n,e)=>t=>{const s=n.get(t);return e(s)||e(t)},Jd=(n,e)=>t=>n.has(t)||e(t),ep=(n,e)=>t=>n.has(t)||e(t),tp=(n,e)=>t=>{const s=n.get(t);return e(s)||e(t)},np=n=>e=>n!==null&&e instanceof n,sp=n=>e=>n!==null&&typeof n.AudioNode=="function"&&e instanceof n.AudioNode,ip=n=>e=>n!==null&&typeof n.AudioParam=="function"&&e instanceof n.AudioParam,rp=(n,e)=>t=>n(t)||e(t),op=n=>e=>n!==null&&e instanceof n,ap=n=>n!==null&&n.isSecureContext,cp=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r),c=e(a,o);if(s(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},lp={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},hp=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r);if(s(a))throw new TypeError;const c={...lp,...o},l=e(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},up=(n,e,t,s)=>class extends n{constructor(r,o){const a=t(r),c=e(a,o);if(s(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},dp=(n,e,t)=>class extends n{constructor(i,r){const o=t(i),a=e(o,r);super(i,!0,a,null)}},pp=(n,e,t,s,i,r)=>class extends t{constructor(a,c){super(a),this._nativeContext=a,Ns.set(this,a),s(a)&&i.set(a,new Set),this._destination=new n(this,c),this._listener=e(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},In=n=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const t=n.decodeAudioData(e.buffer,()=>{});return t===void 0?!1:(t.catch(()=>{}),!0)}catch{}return!1},mp=(n,e)=>(t,s,i)=>{const r=new Set;return t.connect=(o=>(a,c=0,l=0)=>{const h=r.size===0;if(e(a))return o.call(t,a,c,l),n(r,[a,c,l],u=>u[0]===a&&u[1]===c&&u[2]===l,!0),h&&s(),a;o.call(t,a,c),n(r,[a,c],u=>u[0]===a&&u[1]===c,!0),h&&s()})(t.connect),t.disconnect=(o=>(a,c,l)=>{const h=r.size>0;if(a===void 0)o.apply(t),r.clear();else if(typeof a=="number"){o.call(t,a);for(const d of r)d[1]===a&&r.delete(d)}else{e(a)?o.call(t,a,c,l):o.call(t,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const u=r.size===0;h&&u&&i()})(t.disconnect),t},re=(n,e,t)=>{const s=e[t];s!==void 0&&s!==n[t]&&(n[t]=s)},ve=(n,e)=>{re(n,e,"channelCount"),re(n,e,"channelCountMode"),re(n,e,"channelInterpretation")},Qr=n=>typeof n.getFloatTimeDomainData=="function",fp=n=>{n.getFloatTimeDomainData=e=>{const t=new Uint8Array(e.length);n.getByteTimeDomainData(t);const s=Math.max(t.length,n.fftSize);for(let i=0;i<s;i+=1)e[i]=(t[i]-128)*.0078125;return e}},gp=(n,e)=>(t,s)=>{const i=t.createAnalyser();if(ve(i,s),!(s.maxDecibels>s.minDecibels))throw e();return re(i,s,"fftSize"),re(i,s,"maxDecibels"),re(i,s,"minDecibels"),re(i,s,"smoothingTimeConstant"),n(Qr,()=>Qr(i))||fp(i),i},vp=n=>n===null?null:n.hasOwnProperty("AudioBuffer")?n.AudioBuffer:null,le=(n,e,t)=>{const s=e[t];s!==void 0&&s!==n[t].value&&(n[t].value=s)},_p=n=>{n.start=(e=>{let t=!1;return(s=0,i=0,r)=>{if(t)throw ye();e.call(n,s,i,r),t=!0}})(n.start)},Vi=n=>{n.start=(e=>(t=0,s=0,i)=>{if(typeof i=="number"&&i<0||s<0||t<0)throw new RangeError("The parameters can't be negative.");e.call(n,t,s,i)})(n.start)},Li=n=>{n.stop=(e=>(t=0)=>{if(t<0)throw new RangeError("The parameter can't be negative.");e.call(n,t)})(n.stop)},bp=(n,e,t,s,i,r,o,a,c,l,h)=>(u,d)=>{const m=u.createBufferSource();return ve(m,d),le(m,d,"playbackRate"),re(m,d,"buffer"),re(m,d,"loop"),re(m,d,"loopEnd"),re(m,d,"loopStart"),e(t,()=>t(u))||_p(m),e(s,()=>s(u))||c(m),e(i,()=>i(u))||l(m,u),e(r,()=>r(u))||Vi(m),e(o,()=>o(u))||h(m,u),e(a,()=>a(u))||Li(m),n(u,m),m},yp=n=>n===null?null:n.hasOwnProperty("AudioContext")?n.AudioContext:n.hasOwnProperty("webkitAudioContext")?n.webkitAudioContext:null,xp=(n,e)=>(t,s,i)=>{const r=t.destination;if(r.channelCount!==s)try{r.channelCount=s}catch{}i&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:s});const o=n(t,{channelCount:s,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return e(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),e(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),e(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},wp=n=>n===null?null:n.hasOwnProperty("AudioWorkletNode")?n.AudioWorkletNode:null,Mp=n=>{const{port1:e}=new MessageChannel;try{e.postMessage(n)}finally{e.close()}},Tp=(n,e,t,s,i)=>(r,o,a,c,l,h)=>{if(a!==null)try{const u=new a(r,c,h),d=new Map;let m=null;if(Object.defineProperties(u,{channelCount:{get:()=>h.channelCount,set:()=>{throw n()}},channelCountMode:{get:()=>"explicit",set:()=>{throw n()}},onprocessorerror:{get:()=>m,set:p=>{typeof m=="function"&&u.removeEventListener("processorerror",m),m=typeof p=="function"?p:null,typeof m=="function"&&u.addEventListener("processorerror",m)}}}),u.addEventListener=(p=>(...f)=>{if(f[0]==="processorerror"){const g=typeof f[1]=="function"?f[1]:typeof f[1]=="object"&&f[1]!==null&&typeof f[1].handleEvent=="function"?f[1].handleEvent:null;if(g!==null){const _=d.get(f[1]);_!==void 0?f[1]=_:(f[1]=w=>{w.type==="error"?(Object.defineProperties(w,{type:{value:"processorerror"}}),g(w)):g(new ErrorEvent(f[0],{...w}))},d.set(g,f[1]))}}return p.call(u,"error",f[1],f[2]),p.call(u,...f)})(u.addEventListener),u.removeEventListener=(p=>(...f)=>{if(f[0]==="processorerror"){const g=d.get(f[1]);g!==void 0&&(d.delete(f[1]),f[1]=g)}return p.call(u,"error",f[1],f[2]),p.call(u,f[0],f[1],f[2])})(u.removeEventListener),h.numberOfOutputs!==0){const p=t(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return u.connect(p).connect(r.destination),i(u,()=>p.disconnect(),()=>p.connect(r.destination))}return u}catch(u){throw u.code===11?s():u}if(l===void 0)throw s();return Mp(h),e(r,o,l,h)},va=(n,e)=>n===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(n*e))))),kp=n=>new Promise((e,t)=>{const{port1:s,port2:i}=new MessageChannel;s.onmessage=({data:r})=>{s.close(),i.close(),e(r)},s.onmessageerror=({data:r})=>{s.close(),i.close(),t(r)},i.postMessage(n)}),Ap=async(n,e)=>{const t=await kp(e);return new n(t)},Cp=(n,e,t,s)=>{let i=li.get(n);i===void 0&&(i=new WeakMap,li.set(n,i));const r=Ap(t,s);return i.set(e,r),r},Pp=(n,e,t,s,i,r,o,a,c,l,h,u,d)=>(m,p,f,g)=>{if(g.numberOfInputs===0&&g.numberOfOutputs===0)throw c();const _=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(_.some(E=>E<1))throw c();if(_.length!==g.numberOfOutputs)throw e();if(g.channelCountMode!=="explicit")throw c();const w=g.channelCount*g.numberOfInputs,M=_.reduce((E,V)=>E+V,0),k=f.parameterDescriptors===void 0?0:f.parameterDescriptors.length;if(w+k>6||M>6)throw c();const v=new MessageChannel,y=[],x=[];for(let E=0;E<g.numberOfInputs;E+=1)y.push(o(m,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),x.push(i(m,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const b=[];if(f.parameterDescriptors!==void 0)for(const{defaultValue:E,maxValue:V,minValue:ge,name:oe}of f.parameterDescriptors){const G=r(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:g.parameterData[oe]!==void 0?g.parameterData[oe]:E===void 0?0:E});Object.defineProperties(G.offset,{defaultValue:{get:()=>E===void 0?0:E},maxValue:{get:()=>V===void 0?Ae:V},minValue:{get:()=>ge===void 0?Ne:ge}}),b.push(G)}const C=s(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,w+k)}),P=va(p,m.sampleRate),A=a(m,P,w+k,Math.max(1,M)),T=i(m,{channelCount:Math.max(1,M),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,M)}),S=[];for(let E=0;E<g.numberOfOutputs;E+=1)S.push(s(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:_[E]}));for(let E=0;E<g.numberOfInputs;E+=1){y[E].connect(x[E]);for(let V=0;V<g.channelCount;V+=1)x[E].connect(C,V,E*g.channelCount+V)}const N=new ma(f.parameterDescriptors===void 0?[]:f.parameterDescriptors.map(({name:E},V)=>{const ge=b[V];return ge.connect(C,0,w+V),ge.start(0),[E,ge.offset]}));C.connect(A);let I=g.channelInterpretation,O=null;const D=g.numberOfOutputs===0?[A]:S,z={get bufferSize(){return P},get channelCount(){return g.channelCount},set channelCount(E){throw t()},get channelCountMode(){return g.channelCountMode},set channelCountMode(E){throw t()},get channelInterpretation(){return I},set channelInterpretation(E){for(const V of y)V.channelInterpretation=E;I=E},get context(){return A.context},get inputs(){return y},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return O},set onprocessorerror(E){typeof O=="function"&&z.removeEventListener("processorerror",O),O=typeof E=="function"?E:null,typeof O=="function"&&z.addEventListener("processorerror",O)},get parameters(){return N},get port(){return v.port2},addEventListener(...E){return A.addEventListener(E[0],E[1],E[2])},connect:n.bind(null,D),disconnect:l.bind(null,D),dispatchEvent(...E){return A.dispatchEvent(E[0])},removeEventListener(...E){return A.removeEventListener(E[0],E[1],E[2])}},F=new Map;v.port1.addEventListener=(E=>(...V)=>{if(V[0]==="message"){const ge=typeof V[1]=="function"?V[1]:typeof V[1]=="object"&&V[1]!==null&&typeof V[1].handleEvent=="function"?V[1].handleEvent:null;if(ge!==null){const oe=F.get(V[1]);oe!==void 0?V[1]=oe:(V[1]=G=>{h(m.currentTime,m.sampleRate,()=>ge(G))},F.set(ge,V[1]))}}return E.call(v.port1,V[0],V[1],V[2])})(v.port1.addEventListener),v.port1.removeEventListener=(E=>(...V)=>{if(V[0]==="message"){const ge=F.get(V[1]);ge!==void 0&&(F.delete(V[1]),V[1]=ge)}return E.call(v.port1,V[0],V[1],V[2])})(v.port1.removeEventListener);let q=null;Object.defineProperty(v.port1,"onmessage",{get:()=>q,set:E=>{typeof q=="function"&&v.port1.removeEventListener("message",q),q=typeof E=="function"?E:null,typeof q=="function"&&(v.port1.addEventListener("message",q),v.port1.start())}}),f.prototype.port=v.port1;let L=null;Cp(m,z,f,g).then(E=>L=E);const $e=ys(g.numberOfInputs,g.channelCount),De=ys(g.numberOfOutputs,_),U=f.parameterDescriptors===void 0?[]:f.parameterDescriptors.reduce((E,{name:V})=>({...E,[V]:new Float32Array(128)}),{});let ie=!0;const ke=()=>{g.numberOfOutputs>0&&A.disconnect(T);for(let E=0,V=0;E<g.numberOfOutputs;E+=1){const ge=S[E];for(let oe=0;oe<_[E];oe+=1)T.disconnect(ge,V+oe,oe);V+=_[E]}},R=new Map;A.onaudioprocess=({inputBuffer:E,outputBuffer:V})=>{if(L!==null){const ge=u(z);for(let oe=0;oe<P;oe+=128){for(let G=0;G<g.numberOfInputs;G+=1)for(let ce=0;ce<g.channelCount;ce+=1)bs(E,$e[G],ce,ce,oe);f.parameterDescriptors!==void 0&&f.parameterDescriptors.forEach(({name:G},ce)=>{bs(E,U,G,w+ce,oe)});for(let G=0;G<g.numberOfInputs;G+=1)for(let ce=0;ce<_[G];ce+=1)De[G][ce].byteLength===0&&(De[G][ce]=new Float32Array(128));try{const G=$e.map((Fe,ft)=>{if(ge[ft].size>0)return R.set(ft,P/128),Fe;const Xs=R.get(ft);return Xs===void 0?[]:(Fe.every(lc=>lc.every(hc=>hc===0))&&(Xs===1?R.delete(ft):R.set(ft,Xs-1)),Fe)});ie=h(m.currentTime+oe/m.sampleRate,m.sampleRate,()=>L.process(G,De,U));for(let Fe=0,ft=0;Fe<g.numberOfOutputs;Fe+=1){for(let Mn=0;Mn<_[Fe];Mn+=1)fa(V,De[Fe],Mn,ft+Mn,oe);ft+=_[Fe]}}catch(G){ie=!1,z.dispatchEvent(new ErrorEvent("processorerror",{colno:G.colno,filename:G.filename,lineno:G.lineno,message:G.message}))}if(!ie){for(let G=0;G<g.numberOfInputs;G+=1){y[G].disconnect(x[G]);for(let ce=0;ce<g.channelCount;ce+=1)x[oe].disconnect(C,ce,G*g.channelCount+ce)}if(f.parameterDescriptors!==void 0){const G=f.parameterDescriptors.length;for(let ce=0;ce<G;ce+=1){const Fe=b[ce];Fe.disconnect(C,0,w+ce),Fe.stop()}}C.disconnect(A),A.onaudioprocess=null,Ct?ke():Zt();break}}}};let Ct=!1;const Pt=o(m,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Yt=()=>A.connect(Pt).connect(m.destination),Zt=()=>{A.disconnect(Pt),Pt.disconnect()},ac=()=>{if(ie){Zt(),g.numberOfOutputs>0&&A.connect(T);for(let E=0,V=0;E<g.numberOfOutputs;E+=1){const ge=S[E];for(let oe=0;oe<_[E];oe+=1)T.connect(ge,V+oe,oe);V+=_[E]}}Ct=!0},cc=()=>{ie&&(Yt(),ke()),Ct=!1};return Yt(),d(z,ac,cc)},_a=(n,e)=>{const t=n.createBiquadFilter();return ve(t,e),le(t,e,"Q"),le(t,e,"detune"),le(t,e,"frequency"),le(t,e,"gain"),re(t,e,"type"),t},Sp=(n,e)=>(t,s)=>{const i=t.createChannelMerger(s.numberOfInputs);return n!==null&&n.name==="webkitAudioContext"&&e(t,i),ve(i,s),i},Np=n=>{const e=n.numberOfOutputs;Object.defineProperty(n,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw ye()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:t=>{if(t!=="explicit")throw ye()}}),Object.defineProperty(n,"channelInterpretation",{get:()=>"discrete",set:t=>{if(t!=="discrete")throw ye()}})},zn=(n,e)=>{const t=n.createChannelSplitter(e.numberOfOutputs);return ve(t,e),Np(t),t},Ep=(n,e,t,s,i)=>(r,o)=>{if(r.createConstantSource===void 0)return t(r,o);const a=r.createConstantSource();return ve(a,o),le(a,o,"offset"),e(s,()=>s(r))||Vi(a),e(i,()=>i(r))||Li(a),n(r,a),a},vn=(n,e)=>(n.connect=e.connect.bind(e),n.disconnect=e.disconnect.bind(e),n),Op=(n,e,t,s)=>(i,{offset:r,...o})=>{const a=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=t(i,{...o,gain:r}),h=a.getChannelData(0);h[0]=1,h[1]=1,c.buffer=a,c.loop=!0;const u={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(p){l.channelCount=p},get channelCountMode(){return l.channelCountMode},set channelCountMode(p){l.channelCountMode=p},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(p){l.channelInterpretation=p},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(p){c.onended=p},addEventListener(...p){return c.addEventListener(p[0],p[1],p[2])},dispatchEvent(...p){return c.dispatchEvent(p[0])},removeEventListener(...p){return c.removeEventListener(p[0],p[1],p[2])},start(p=0){c.start.call(c,p)},stop(p=0){c.stop.call(c,p)}},d=()=>c.connect(l),m=()=>c.disconnect(l);return n(i,c),s(vn(u,l),d,m)},$p=(n,e)=>(t,s)=>{const i=t.createConvolver();if(ve(i,s),s.disableNormalization===i.normalize&&(i.normalize=!s.disableNormalization),re(i,s,"buffer"),s.channelCount>2||(e(i,"channelCount",r=>()=>r.call(i),r=>o=>{if(o>2)throw n();return r.call(i,o)}),s.channelCountMode==="max"))throw n();return e(i,"channelCountMode",r=>()=>r.call(i),r=>o=>{if(o==="max")throw n();return r.call(i,o)}),i},ba=(n,e)=>{const t=n.createDelay(e.maxDelayTime);return ve(t,e),le(t,e,"delayTime"),t},Dp=n=>(e,t)=>{const s=e.createDynamicsCompressor();if(ve(s,t),t.channelCount>2||t.channelCountMode==="max")throw n();return le(s,t,"attack"),le(s,t,"knee"),le(s,t,"ratio"),le(s,t,"release"),le(s,t,"threshold"),s},Oe=(n,e)=>{const t=n.createGain();return ve(t,e),le(t,e,"gain"),t},Ip=n=>(e,t,s)=>{if(e.createIIRFilter===void 0)return n(e,t,s);const i=e.createIIRFilter(s.feedforward,s.feedback);return ve(i,s),i};function Rp(n,e){const t=e[0]*e[0]+e[1]*e[1];return[(n[0]*e[0]+n[1]*e[1])/t,(n[1]*e[0]-n[0]*e[1])/t]}function Fp(n,e){return[n[0]*e[0]-n[1]*e[1],n[0]*e[1]+n[1]*e[0]]}function Jr(n,e){let t=[0,0];for(let s=n.length-1;s>=0;s-=1)t=Fp(t,e),t[0]+=n[s];return t}const Vp=(n,e,t,s)=>(i,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:h})=>{const u=va(r,i.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),m=h instanceof Float64Array?h:new Float64Array(h),p=d.length,f=m.length,g=Math.min(p,f);if(p===0||p>20)throw s();if(d[0]===0)throw e();if(f===0||f>20)throw s();if(m[0]===0)throw e();if(d[0]!==1){for(let b=0;b<f;b+=1)m[b]/=d[0];for(let b=1;b<p;b+=1)d[b]/=d[0]}const _=t(i,u,o,o);_.channelCount=o,_.channelCountMode=a,_.channelInterpretation=c;const w=32,M=[],k=[],v=[];for(let b=0;b<o;b+=1){M.push(0);const C=new Float32Array(w),P=new Float32Array(w);C.fill(0),P.fill(0),k.push(C),v.push(P)}_.onaudioprocess=b=>{const C=b.inputBuffer,P=b.outputBuffer,A=C.numberOfChannels;for(let T=0;T<A;T+=1){const S=C.getChannelData(T),N=P.getChannelData(T);M[T]=ga(d,p,m,f,g,k[T],v[T],M[T],w,S,N)}};const y=i.sampleRate/2;return vn({get bufferSize(){return u},get channelCount(){return _.channelCount},set channelCount(b){_.channelCount=b},get channelCountMode(){return _.channelCountMode},set channelCountMode(b){_.channelCountMode=b},get channelInterpretation(){return _.channelInterpretation},set channelInterpretation(b){_.channelInterpretation=b},get context(){return _.context},get inputs(){return[_]},get numberOfInputs(){return _.numberOfInputs},get numberOfOutputs(){return _.numberOfOutputs},addEventListener(...b){return _.addEventListener(b[0],b[1],b[2])},dispatchEvent(...b){return _.dispatchEvent(b[0])},getFrequencyResponse(b,C,P){if(b.length!==C.length||C.length!==P.length)throw n();const A=b.length;for(let T=0;T<A;T+=1){const S=-Math.PI*(b[T]/y),N=[Math.cos(S),Math.sin(S)],I=Jr(m,N),O=Jr(d,N),D=Rp(I,O);C[T]=Math.sqrt(D[0]*D[0]+D[1]*D[1]),P[T]=Math.atan2(D[1],D[0])}},removeEventListener(...b){return _.removeEventListener(b[0],b[1],b[2])}},_)},Lp=(n,e)=>n.createMediaElementSource(e.mediaElement),qp=(n,e)=>{const t=n.createMediaStreamDestination();return ve(t,e),t.numberOfOutputs===1&&Object.defineProperty(t,"numberOfOutputs",{get:()=>0}),t},jp=(n,{mediaStream:e})=>{const t=e.getAudioTracks();t.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const s=t.slice(0,1),i=n.createMediaStreamSource(new MediaStream(s));return Object.defineProperty(i,"mediaStream",{value:e}),i},Wp=(n,e)=>(t,{mediaStreamTrack:s})=>{if(typeof t.createMediaStreamTrackSource=="function")return t.createMediaStreamTrackSource(s);const i=new MediaStream([s]),r=t.createMediaStreamSource(i);if(s.kind!=="audio")throw n();if(e(t))throw new TypeError;return r},Bp=n=>n===null?null:n.hasOwnProperty("OfflineAudioContext")?n.OfflineAudioContext:n.hasOwnProperty("webkitOfflineAudioContext")?n.webkitOfflineAudioContext:null,zp=(n,e,t,s,i,r)=>(o,a)=>{const c=o.createOscillator();return ve(c,a),le(c,a,"detune"),le(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):re(c,a,"type"),e(t,()=>t(o))||Vi(c),e(s,()=>s(o))||r(c,o),e(i,()=>i(o))||Li(c),n(o,c),c},Up=n=>(e,t)=>{const s=e.createPanner();return s.orientationX===void 0?n(e,t):(ve(s,t),le(s,t,"orientationX"),le(s,t,"orientationY"),le(s,t,"orientationZ"),le(s,t,"positionX"),le(s,t,"positionY"),le(s,t,"positionZ"),re(s,t,"coneInnerAngle"),re(s,t,"coneOuterAngle"),re(s,t,"coneOuterGain"),re(s,t,"distanceModel"),re(s,t,"maxDistance"),re(s,t,"panningModel"),re(s,t,"refDistance"),re(s,t,"rolloffFactor"),s)},Hp=(n,e,t,s,i,r,o,a,c,l)=>(h,{coneInnerAngle:u,coneOuterAngle:d,coneOuterGain:m,distanceModel:p,maxDistance:f,orientationX:g,orientationY:_,orientationZ:w,panningModel:M,positionX:k,positionY:v,positionZ:y,refDistance:x,rolloffFactor:b,...C})=>{const P=h.createPanner();if(C.channelCount>2||C.channelCountMode==="max")throw o();ve(P,C);const A={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},T=t(h,{...A,channelInterpretation:"speakers",numberOfInputs:6}),S=s(h,{...C,gain:1}),N=s(h,{...A,gain:1}),I=s(h,{...A,gain:0}),O=s(h,{...A,gain:0}),D=s(h,{...A,gain:0}),z=s(h,{...A,gain:0}),F=s(h,{...A,gain:0}),q=i(h,256,6,1),L=r(h,{...A,curve:new Float32Array([1,1]),oversample:"none"});let Y=[g,_,w],$e=[k,v,y];const De=new Float32Array(1);q.onaudioprocess=({inputBuffer:R})=>{const Ct=[c(R,De,0),c(R,De,1),c(R,De,2)];Ct.some((Yt,Zt)=>Yt!==Y[Zt])&&(P.setOrientation(...Ct),Y=Ct);const Pt=[c(R,De,3),c(R,De,4),c(R,De,5)];Pt.some((Yt,Zt)=>Yt!==$e[Zt])&&(P.setPosition(...Pt),$e=Pt)},Object.defineProperty(I.gain,"defaultValue",{get:()=>0}),Object.defineProperty(O.gain,"defaultValue",{get:()=>0}),Object.defineProperty(D.gain,"defaultValue",{get:()=>0}),Object.defineProperty(z.gain,"defaultValue",{get:()=>0}),Object.defineProperty(F.gain,"defaultValue",{get:()=>0});const U={get bufferSize(){},get channelCount(){return P.channelCount},set channelCount(R){if(R>2)throw o();S.channelCount=R,P.channelCount=R},get channelCountMode(){return P.channelCountMode},set channelCountMode(R){if(R==="max")throw o();S.channelCountMode=R,P.channelCountMode=R},get channelInterpretation(){return P.channelInterpretation},set channelInterpretation(R){S.channelInterpretation=R,P.channelInterpretation=R},get coneInnerAngle(){return P.coneInnerAngle},set coneInnerAngle(R){P.coneInnerAngle=R},get coneOuterAngle(){return P.coneOuterAngle},set coneOuterAngle(R){P.coneOuterAngle=R},get coneOuterGain(){return P.coneOuterGain},set coneOuterGain(R){if(R<0||R>1)throw e();P.coneOuterGain=R},get context(){return P.context},get distanceModel(){return P.distanceModel},set distanceModel(R){P.distanceModel=R},get inputs(){return[S]},get maxDistance(){return P.maxDistance},set maxDistance(R){if(R<0)throw new RangeError;P.maxDistance=R},get numberOfInputs(){return P.numberOfInputs},get numberOfOutputs(){return P.numberOfOutputs},get orientationX(){return N.gain},get orientationY(){return I.gain},get orientationZ(){return O.gain},get panningModel(){return P.panningModel},set panningModel(R){P.panningModel=R},get positionX(){return D.gain},get positionY(){return z.gain},get positionZ(){return F.gain},get refDistance(){return P.refDistance},set refDistance(R){if(R<0)throw new RangeError;P.refDistance=R},get rolloffFactor(){return P.rolloffFactor},set rolloffFactor(R){if(R<0)throw new RangeError;P.rolloffFactor=R},addEventListener(...R){return S.addEventListener(R[0],R[1],R[2])},dispatchEvent(...R){return S.dispatchEvent(R[0])},removeEventListener(...R){return S.removeEventListener(R[0],R[1],R[2])}};u!==U.coneInnerAngle&&(U.coneInnerAngle=u),d!==U.coneOuterAngle&&(U.coneOuterAngle=d),m!==U.coneOuterGain&&(U.coneOuterGain=m),p!==U.distanceModel&&(U.distanceModel=p),f!==U.maxDistance&&(U.maxDistance=f),g!==U.orientationX.value&&(U.orientationX.value=g),_!==U.orientationY.value&&(U.orientationY.value=_),w!==U.orientationZ.value&&(U.orientationZ.value=w),M!==U.panningModel&&(U.panningModel=M),k!==U.positionX.value&&(U.positionX.value=k),v!==U.positionY.value&&(U.positionY.value=v),y!==U.positionZ.value&&(U.positionZ.value=y),x!==U.refDistance&&(U.refDistance=x),b!==U.rolloffFactor&&(U.rolloffFactor=b),(Y[0]!==1||Y[1]!==0||Y[2]!==0)&&P.setOrientation(...Y),($e[0]!==0||$e[1]!==0||$e[2]!==0)&&P.setPosition(...$e);const ie=()=>{S.connect(P),n(S,L,0,0),L.connect(N).connect(T,0,0),L.connect(I).connect(T,0,1),L.connect(O).connect(T,0,2),L.connect(D).connect(T,0,3),L.connect(z).connect(T,0,4),L.connect(F).connect(T,0,5),T.connect(q).connect(h.destination)},ke=()=>{S.disconnect(P),a(S,L,0,0),L.disconnect(N),N.disconnect(T),L.disconnect(I),I.disconnect(T),L.disconnect(O),O.disconnect(T),L.disconnect(D),D.disconnect(T),L.disconnect(z),z.disconnect(T),L.disconnect(F),F.disconnect(T),T.disconnect(q),q.disconnect(h.destination)};return l(vn(U,P),ie,ke)},Gp=n=>(e,{disableNormalization:t,imag:s,real:i})=>{const r=s instanceof Float32Array?s:new Float32Array(s),o=i instanceof Float32Array?i:new Float32Array(i),a=e.createPeriodicWave(o,r,{disableNormalization:t});if(Array.from(s).length<2)throw n();return a},Un=(n,e,t,s)=>n.createScriptProcessor(e,t,s),Xp=(n,e)=>(t,s)=>{const i=s.channelCountMode;if(i==="clamped-max")throw e();if(t.createStereoPanner===void 0)return n(t,s);const r=t.createStereoPanner();return ve(r,s),le(r,s,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>i,set:o=>{if(o!==i)throw e()}}),r},Yp=(n,e,t,s,i,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...l,oversample:"none"},u=(p,f,g,_)=>{const w=new Float32Array(16385),M=new Float32Array(16385);for(let C=0;C<16385;C+=1){const P=C/16384*c;w[C]=Math.cos(P),M[C]=Math.sin(P)}const k=t(p,{...l,gain:0}),v=s(p,{...h,curve:w}),y=s(p,{...h,curve:a}),x=t(p,{...l,gain:0}),b=s(p,{...h,curve:M});return{connectGraph(){f.connect(k),f.connect(y.inputs===void 0?y:y.inputs[0]),f.connect(x),y.connect(g),g.connect(v.inputs===void 0?v:v.inputs[0]),g.connect(b.inputs===void 0?b:b.inputs[0]),v.connect(k.gain),b.connect(x.gain),k.connect(_,0,0),x.connect(_,0,1)},disconnectGraph(){f.disconnect(k),f.disconnect(y.inputs===void 0?y:y.inputs[0]),f.disconnect(x),y.disconnect(g),g.disconnect(v.inputs===void 0?v:v.inputs[0]),g.disconnect(b.inputs===void 0?b:b.inputs[0]),v.disconnect(k.gain),b.disconnect(x.gain),k.disconnect(_,0,0),x.disconnect(_,0,1)}}},d=(p,f,g,_)=>{const w=new Float32Array(16385),M=new Float32Array(16385),k=new Float32Array(16385),v=new Float32Array(16385),y=Math.floor(16385/2);for(let D=0;D<16385;D+=1)if(D>y){const z=(D-y)/(16384-y)*c;w[D]=Math.cos(z),M[D]=Math.sin(z),k[D]=0,v[D]=1}else{const z=D/(16384-y)*c;w[D]=1,M[D]=0,k[D]=Math.cos(z),v[D]=Math.sin(z)}const x=e(p,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),b=t(p,{...l,gain:0}),C=s(p,{...h,curve:w}),P=t(p,{...l,gain:0}),A=s(p,{...h,curve:M}),T=s(p,{...h,curve:a}),S=t(p,{...l,gain:0}),N=s(p,{...h,curve:k}),I=t(p,{...l,gain:0}),O=s(p,{...h,curve:v});return{connectGraph(){f.connect(x),f.connect(T.inputs===void 0?T:T.inputs[0]),x.connect(b,0),x.connect(P,0),x.connect(S,1),x.connect(I,1),T.connect(g),g.connect(C.inputs===void 0?C:C.inputs[0]),g.connect(A.inputs===void 0?A:A.inputs[0]),g.connect(N.inputs===void 0?N:N.inputs[0]),g.connect(O.inputs===void 0?O:O.inputs[0]),C.connect(b.gain),A.connect(P.gain),N.connect(S.gain),O.connect(I.gain),b.connect(_,0,0),S.connect(_,0,0),P.connect(_,0,1),I.connect(_,0,1)},disconnectGraph(){f.disconnect(x),f.disconnect(T.inputs===void 0?T:T.inputs[0]),x.disconnect(b,0),x.disconnect(P,0),x.disconnect(S,1),x.disconnect(I,1),T.disconnect(g),g.disconnect(C.inputs===void 0?C:C.inputs[0]),g.disconnect(A.inputs===void 0?A:A.inputs[0]),g.disconnect(N.inputs===void 0?N:N.inputs[0]),g.disconnect(O.inputs===void 0?O:O.inputs[0]),C.disconnect(b.gain),A.disconnect(P.gain),N.disconnect(S.gain),O.disconnect(I.gain),b.disconnect(_,0,0),S.disconnect(_,0,0),P.disconnect(_,0,1),I.disconnect(_,0,1)}}},m=(p,f,g,_,w)=>{if(f===1)return u(p,g,_,w);if(f===2)return d(p,g,_,w);throw i()};return(p,{channelCount:f,channelCountMode:g,pan:_,...w})=>{if(g==="max")throw i();const M=n(p,{...w,channelCount:1,channelCountMode:g,numberOfInputs:2}),k=t(p,{...w,channelCount:f,channelCountMode:g,gain:1}),v=t(p,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:_});let{connectGraph:y,disconnectGraph:x}=m(p,f,k,v,M);Object.defineProperty(v.gain,"defaultValue",{get:()=>0}),Object.defineProperty(v.gain,"maxValue",{get:()=>1}),Object.defineProperty(v.gain,"minValue",{get:()=>-1});const b={get bufferSize(){},get channelCount(){return k.channelCount},set channelCount(T){k.channelCount!==T&&(C&&x(),{connectGraph:y,disconnectGraph:x}=m(p,T,k,v,M),C&&y()),k.channelCount=T},get channelCountMode(){return k.channelCountMode},set channelCountMode(T){if(T==="clamped-max"||T==="max")throw i();k.channelCountMode=T},get channelInterpretation(){return k.channelInterpretation},set channelInterpretation(T){k.channelInterpretation=T},get context(){return k.context},get inputs(){return[k]},get numberOfInputs(){return k.numberOfInputs},get numberOfOutputs(){return k.numberOfOutputs},get pan(){return v.gain},addEventListener(...T){return k.addEventListener(T[0],T[1],T[2])},dispatchEvent(...T){return k.dispatchEvent(T[0])},removeEventListener(...T){return k.removeEventListener(T[0],T[1],T[2])}};let C=!1;const P=()=>{y(),C=!0},A=()=>{x(),C=!1};return r(vn(b,M),P,A)}},Zp=(n,e,t,s,i,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return t(a,c);ve(l,c);const h=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(h!==null&&h.length<2)throw e();re(l,{curve:h},"curve"),re(l,c,"oversample");let u=null,d=!1;return o(l,"curve",f=>()=>f.call(l),f=>g=>(f.call(l,g),d&&(s(g)&&u===null?u=n(a,l):!s(g)&&u!==null&&(u(),u=null)),g)),i(l,()=>{d=!0,s(l.curve)&&(u=n(a,l))},()=>{d=!1,u!==null&&(u(),u=null)})},Kp=(n,e,t,s,i)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),h=r.createWaveShaper();ve(l,c),ve(h,c);const u=t(r,{...c,gain:1}),d=t(r,{...c,gain:-1}),m=t(r,{...c,gain:1}),p=t(r,{...c,gain:-1});let f=null,g=!1,_=null;const w={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(v){u.channelCount=v,d.channelCount=v,l.channelCount=v,m.channelCount=v,h.channelCount=v,p.channelCount=v},get channelCountMode(){return l.channelCountMode},set channelCountMode(v){u.channelCountMode=v,d.channelCountMode=v,l.channelCountMode=v,m.channelCountMode=v,h.channelCountMode=v,p.channelCountMode=v},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(v){u.channelInterpretation=v,d.channelInterpretation=v,l.channelInterpretation=v,m.channelInterpretation=v,h.channelInterpretation=v,p.channelInterpretation=v},get context(){return l.context},get curve(){return _},set curve(v){if(v!==null&&v.length<2)throw e();if(v===null)l.curve=v,h.curve=v;else{const y=v.length,x=new Float32Array(y+2-y%2),b=new Float32Array(y+2-y%2);x[0]=v[0],b[0]=-v[y-1];const C=Math.ceil((y+1)/2),P=(y+1)/2-1;for(let A=1;A<C;A+=1){const T=A/C*P,S=Math.floor(T),N=Math.ceil(T);x[A]=S===N?v[S]:(1-(T-S))*v[S]+(1-(N-T))*v[N],b[A]=S===N?-v[y-1-S]:-((1-(T-S))*v[y-1-S])-(1-(N-T))*v[y-1-N]}x[C]=y%2===1?v[C-1]:(v[C-2]+v[C-1])/2,l.curve=x,h.curve=b}_=v,g&&(s(_)&&f===null?f=n(r,u):f!==null&&(f(),f=null))},get inputs(){return[u]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(v){l.oversample=v,h.oversample=v},addEventListener(...v){return u.addEventListener(v[0],v[1],v[2])},dispatchEvent(...v){return u.dispatchEvent(v[0])},removeEventListener(...v){return u.removeEventListener(v[0],v[1],v[2])}};o!==null&&(w.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==w.oversample&&(w.oversample=a);const M=()=>{u.connect(l).connect(m),u.connect(d).connect(h).connect(p).connect(m),g=!0,s(_)&&(f=n(r,u))},k=()=>{u.disconnect(l),l.disconnect(m),u.disconnect(d),d.disconnect(h),h.disconnect(p),p.disconnect(m),g=!1,f!==null&&(f(),f=null)};return i(vn(w,m),M,k)},Se=()=>new DOMException("","NotSupportedError"),Qp={numberOfChannels:1},Jp=(n,e,t,s,i)=>class extends n{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:h,numberOfChannels:u,sampleRate:d}={...Qp,...l},m=s(u,h,d);e(In,()=>In(m))||m.addEventListener("statechange",(()=>{let p=0;const f=g=>{this._state==="running"&&(p>0?(m.removeEventListener("statechange",f),g.stopImmediatePropagation(),this._waitForThePromiseToSettle(g)):p+=1)};return f})()),super(m,u),this._length=h,this._nativeOfflineAudioContext=m,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(t()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,ha(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},em={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},tm=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const h=i(c),u={...em,...l},d=t(h,u),m=r(h),p=m?s():null,f=c.sampleRate/2;super(c,!1,d,p),this._detune=e(this,m,d.detune,153600,-153600),this._frequency=e(this,m,d.frequency,f,-f),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=p,this._oscillatorNodeRenderer!==null&&u.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=u.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const h=this._nativeOscillatorNode.onended;this._onended=h!==null&&h===l?c:h}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){ln(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),lt(this)&&jn(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},nm=(n,e,t,s,i)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(h,u)=>{let d=t(h);const m=Te(d,u);if(!m){const p={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=e(u,p),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(u,d),m?(await n(u,h.detune,d.detune),await n(u,h.frequency,d.frequency)):(await s(u,h.detune,d.detune),await s(u,h.frequency,d.frequency)),await i(h,u,d),d};return{set periodicWave(h){o=h},set start(h){a=h},set stop(h){c=h},render(h,u){const d=r.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}},sm={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},im=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const h=i(c),u={...sm,...l},d=t(h,u),m=r(h),p=m?s():null;super(c,!1,d,p),this._nativePannerNode=d,this._orientationX=e(this,m,d.orientationX,Ae,Ne),this._orientationY=e(this,m,d.orientationY,Ae,Ne),this._orientationZ=e(this,m,d.orientationZ,Ae,Ne),this._positionX=e(this,m,d.positionX,Ae,Ne),this._positionY=e(this,m,d.positionY,Ae,Ne),this._positionZ=e(this,m,d.positionZ,Ae,Ne),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},rm=(n,e,t,s,i,r,o,a,c,l)=>()=>{const h=new WeakMap;let u=null;const d=async(m,p)=>{let f=null,g=r(m);const _={channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation},w={..._,coneInnerAngle:g.coneInnerAngle,coneOuterAngle:g.coneOuterAngle,coneOuterGain:g.coneOuterGain,distanceModel:g.distanceModel,maxDistance:g.maxDistance,panningModel:g.panningModel,refDistance:g.refDistance,rolloffFactor:g.rolloffFactor},M=Te(g,p);if("bufferSize"in g)f=s(p,{..._,gain:1});else if(!M){const k={...w,orientationX:g.orientationX.value,orientationY:g.orientationY.value,orientationZ:g.orientationZ.value,positionX:g.positionX.value,positionY:g.positionY.value,positionZ:g.positionZ.value};g=i(p,k)}if(h.set(p,f===null?g:f),f!==null){if(u===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const A=new o(6,m.context.length,p.sampleRate),T=e(A,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});T.connect(A.destination),u=(async()=>{const S=await Promise.all([m.orientationX,m.orientationY,m.orientationZ,m.positionX,m.positionY,m.positionZ].map(async(N,I)=>{const O=t(A,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:I===0?1:0});return await a(A,N,O.offset),O}));for(let N=0;N<6;N+=1)S[N].connect(T,0,N),S[N].start(0);return l(A)})()}const k=await u,v=s(p,{..._,gain:1});await c(m,p,v);const y=[];for(let A=0;A<k.numberOfChannels;A+=1)y.push(k.getChannelData(A));let x=[y[0][0],y[1][0],y[2][0]],b=[y[3][0],y[4][0],y[5][0]],C=s(p,{..._,gain:1}),P=i(p,{...w,orientationX:x[0],orientationY:x[1],orientationZ:x[2],positionX:b[0],positionY:b[1],positionZ:b[2]});v.connect(C).connect(P.inputs[0]),P.connect(f);for(let A=128;A<k.length;A+=128){const T=[y[0][A],y[1][A],y[2][A]],S=[y[3][A],y[4][A],y[5][A]];if(T.some((N,I)=>N!==x[I])||S.some((N,I)=>N!==b[I])){x=T,b=S;const N=A/p.sampleRate;C.gain.setValueAtTime(0,N),C=s(p,{..._,gain:0}),P=i(p,{...w,orientationX:x[0],orientationY:x[1],orientationZ:x[2],positionX:b[0],positionY:b[1],positionZ:b[2]}),C.gain.setValueAtTime(1,N),v.connect(C).connect(P.inputs[0]),P.connect(f)}}return f}return M?(await n(p,m.orientationX,g.orientationX),await n(p,m.orientationY,g.orientationY),await n(p,m.orientationZ,g.orientationZ),await n(p,m.positionX,g.positionX),await n(p,m.positionY,g.positionY),await n(p,m.positionZ,g.positionZ)):(await a(p,m.orientationX,g.orientationX),await a(p,m.orientationY,g.orientationY),await a(p,m.orientationZ,g.orientationZ),await a(p,m.positionX,g.positionX),await a(p,m.positionY,g.positionY),await a(p,m.positionZ,g.positionZ)),gn(g)?await c(m,p,g.inputs[0]):await c(m,p,g),g};return{render(m,p){const f=h.get(p);return f!==void 0?Promise.resolve(f):d(m,p)}}},om={disableNormalization:!1},am=(n,e,t,s)=>class ya{constructor(r,o){const a=e(r),c=s({...om,...o}),l=n(a,c);return t.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===ya.prototype||t.has(r)}},cm=(n,e)=>(t,s,i)=>(n(s).replay(i),e(s,t,i)),lm=(n,e,t)=>async(s,i,r)=>{const o=n(s);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,h])=>{const d=await e(l).render(l,i),m=s.context.destination;!t(l)&&(s!==m||!t(s))&&d.connect(r,h,c)})).reduce((a,c)=>[...a,...c],[]))},hm=(n,e,t)=>async(s,i,r)=>{const o=e(s);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const h=await n(a).render(a,i);t(a)||h.connect(r,c)}))},um=(n,e,t,s)=>i=>n(In,()=>In(i))?Promise.resolve(n(s,s)).then(r=>{if(!r){const o=t(i,512,0,1);i.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>i.currentTime,o.connect(i.destination)}return i.startRendering()}):new Promise(r=>{const o=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(i.destination),i.startRendering()}),dm=n=>(e,t)=>{n.set(e,t)},pm=n=>(e,t)=>n.set(e,t),mm=(n,e,t,s,i,r,o,a)=>(c,l)=>t(c).render(c,l).then(()=>Promise.all(Array.from(s(l)).map(h=>t(h).render(h,l)))).then(()=>i(l)).then(h=>(typeof h.copyFromChannel!="function"?(o(h),Ii(h)):e(r,()=>r(h))||a(h),n.add(h),h)),fm={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},gm=(n,e,t,s,i,r)=>class extends n{constructor(a,c){const l=i(a),h={...fm,...c},u=t(l,h),d=r(l),m=d?s():null;super(a,!1,u,m),this._pan=e(this,d,u.pan)}get pan(){return this._pan}},vm=(n,e,t,s,i)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=t(a);const h=Te(l,c);if(!h){const u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=e(c,u)}return r.set(c,l),h?await n(c,a.pan,l.pan):await s(c,a.pan,l.pan),gn(l)?await i(a,c,l.inputs[0]):await i(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},_m=n=>()=>{if(n===null)return!1;try{new n({length:1,sampleRate:44100})}catch{return!1}return!0},bm=(n,e)=>async()=>{if(n===null)return!0;if(e===null)return!1;const t=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),s=new e(1,128,44100),i=URL.createObjectURL(t);let r=!1,o=!1;try{await s.audioWorklet.addModule(i);const a=new n(s,"a",{numberOfOutputs:0}),c=s.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await s.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(i)}return r&&!o},ym=(n,e)=>()=>{if(e===null)return Promise.resolve(!1);const t=new e(1,1,44100),s=n(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(i=>{t.oncomplete=()=>{s.disconnect(),i(t.currentTime!==0)},t.startRendering()})},xm=()=>new DOMException("","UnknownError"),wm={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},Mm=(n,e,t,s,i,r,o)=>class extends n{constructor(c,l){const h=i(c),u={...wm,...l},d=t(h,u),p=r(h)?s():null;super(c,!0,d,p),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},Tm=(n,e,t)=>()=>{const s=new WeakMap,i=async(r,o)=>{let a=e(r);if(!Te(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=n(o,l)}return s.set(o,a),gn(a)?await t(r,o,a.inputs[0]):await t(r,o,a),a};return{render(r,o){const a=s.get(o);return a!==void 0?Promise.resolve(a):i(r,o)}}},km=()=>typeof window>"u"?null:window,Am=(n,e)=>t=>{t.copyFromChannel=(s,i,r=0)=>{const o=n(r),a=n(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),h=s.length;for(let u=o<0?-o:0;u+o<c&&u<h;u+=1)s[u]=l[u+o]},t.copyToChannel=(s,i,r=0)=>{const o=n(r),a=n(i);if(a>=t.numberOfChannels)throw e();const c=t.length,l=t.getChannelData(a),h=s.length;for(let u=o<0?-o:0;u+o<c&&u<h;u+=1)l[u+o]=s[u]}},Cm=n=>e=>{e.copyFromChannel=(t=>(s,i,r=0)=>{const o=n(r),a=n(i);if(o<e.length)return t.call(e,s,a,o)})(e.copyFromChannel),e.copyToChannel=(t=>(s,i,r=0)=>{const o=n(r),a=n(i);if(o<e.length)return t.call(e,s,a,o)})(e.copyToChannel)},Pm=n=>(e,t)=>{const s=t.createBuffer(1,1,44100);e.buffer===null&&(e.buffer=s),n(e,"buffer",i=>()=>{const r=i.call(e);return r===s?null:r},i=>r=>i.call(e,r===null?s:r))},Sm=(n,e)=>(t,s)=>{s.channelCount=1,s.channelCountMode="explicit",Object.defineProperty(s,"channelCount",{get:()=>1,set:()=>{throw n()}}),Object.defineProperty(s,"channelCountMode",{get:()=>"explicit",set:()=>{throw n()}});const i=t.createBufferSource();e(s,()=>{const a=s.numberOfInputs;for(let c=0;c<a;c+=1)i.connect(s,0,c)},()=>i.disconnect(s))},xa=(n,e,t)=>n.copyFromChannel===void 0?n.getChannelData(t)[0]:(n.copyFromChannel(e,t),e[0]),wa=n=>{if(n===null)return!1;const e=n.length;return e%2!==0?n[Math.floor(e/2)]!==0:n[e/2-1]+n[e/2]!==0},Hn=(n,e,t,s)=>{let i=n;for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:r,set:o}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(n,e,{get:t(r),set:s(o)})},Nm=n=>({...n,outputChannelCount:n.outputChannelCount!==void 0?n.outputChannelCount:n.numberOfInputs===1&&n.numberOfOutputs===1?[n.channelCount]:Array.from({length:n.numberOfOutputs},()=>1)}),Em=n=>({...n,channelCount:n.numberOfOutputs}),Om=n=>{const{imag:e,real:t}=n;return e===void 0?t===void 0?{...n,imag:[0,0],real:[0,0]}:{...n,imag:Array.from(t,()=>0),real:t}:t===void 0?{...n,imag:e,real:Array.from(e,()=>0)}:{...n,imag:e,real:t}},Ma=(n,e,t)=>{try{n.setValueAtTime(e,t)}catch(s){if(s.code!==9)throw s;Ma(n,e,t+1e-7)}},$m=n=>{const e=n.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},Dm=n=>{const e=n.createBufferSource(),t=n.createBuffer(1,1,44100);e.buffer=t;try{e.start(0,1)}catch{return!1}return!0},Im=n=>{const e=n.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},qi=n=>{const e=n.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},Ta=n=>{const e=n.createBuffer(1,1,44100),t=n.createBufferSource();t.buffer=e,t.start(),t.stop();try{return t.stop(),!0}catch{return!1}},ji=n=>{const e=n.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},Rm=n=>{const{port1:e,port2:t}=new MessageChannel;try{e.postMessage(n)}finally{e.close(),t.close()}},Fm=n=>{n.start=(e=>(t=0,s=0,i)=>{const r=n.buffer,o=r===null?s:Math.min(r.duration,s);r!==null&&o>r.duration-.5/n.context.sampleRate?e.call(n,t,0,0):e.call(n,t,o,i)})(n.start)},ka=(n,e)=>{const t=e.createGain();n.connect(t);const s=(i=>()=>{i.call(n,t),n.removeEventListener("ended",s)})(n.disconnect);n.addEventListener("ended",s),vn(n,t),n.stop=(i=>{let r=!1;return(o=0)=>{if(r)try{i.call(n,o)}catch{t.gain.setValueAtTime(0,o)}else i.call(n,o),r=!0}})(n.stop)},_n=(n,e)=>t=>{const s={value:n};return Object.defineProperties(t,{currentTarget:s,target:s}),typeof e=="function"?e.call(n,t):e.handleEvent.call(n,t)},Vm=iu(Ht),Lm=hu(Ht),qm=wd(Es),Aa=new WeakMap,jm=qd(Aa),Ze=Qu(new Map,new WeakMap),et=km(),Ca=gp(Ze,st),Wi=Ld(Ce),we=lm(Ce,Wi,Vt),Wm=fu(Ca,se,we),ee=Bd(Ns),dt=Bp(et),Q=op(dt),Pa=new WeakMap,Sa=Od(_n),Gn=yp(et),Bi=np(Gn),zi=sp(et),Na=ip(et),Rn=wp(et),ue=qu(ru(sa),lu(Vm,Lm,gs,qm,vs,Ce,jm,qn,se,Ht,lt,Vt,as),Ze,Kd(ai,vs,Ce,se,Dn,lt),st,Os,Se,_d(gs,ai,Ce,se,Dn,ee,lt,Q),kd(Pa,Ce,Ye),Sa,ee,Bi,zi,Na,Q,Rn),Bm=mu(ue,Wm,st,Ca,ee,Q),Ui=new WeakSet,eo=vp(et),Ea=ud(new Uint32Array(1)),Hi=Am(Ea,st),Gi=Cm(Ea),Oa=vu(Ui,Ze,Se,eo,dt,_m(eo),Hi,Gi),$s=uu(Oe),$a=hm(Wi,Wn,Vt),it=rd($a),bn=bp($s,Ze,$m,Dm,Im,qi,Ta,ji,Fm,Pm(Hn),ka),rt=cm(jd(Wn),$a),zm=yu(it,bn,se,rt,we),Ke=ju(ou(ia),Pa,Di,Wu,Qh,Jh,eu,tu,nu,ii,ea,Gn,Ma),Um=bu(ue,zm,Ke,ye,bn,ee,Q,_n),Hm=Su(ue,Nu,st,ye,xp(Oe,Hn),ee,Q,we),Gm=Ku(it,_a,se,rt,we),Gt=pm(Aa),Xm=Zu(ue,Ke,Gm,Os,_a,ee,Q,Gt),wt=mp(Ht,zi),Ym=Sm(ye,wt),Mt=Sp(Gn,Ym),Zm=td(Mt,se,we),Km=ed(ue,Zm,Mt,ee,Q),Qm=id(zn,se,we),Jm=sd(ue,Qm,zn,ee,Q,Em),ef=Op($s,bn,Oe,wt),yn=Ep($s,Ze,ef,qi,ji),tf=hd(it,yn,se,rt,we),nf=ld(ue,Ke,tf,yn,ee,Q,_n),Da=$p(Se,Hn),sf=md(Da,se,we),rf=pd(ue,sf,Da,ee,Q,Gt),of=xd(it,ba,se,rt,we),af=yd(ue,Ke,of,ba,ee,Q,Gt),Ia=Dp(Se),cf=Sd(it,Ia,se,rt,we),lf=Pd(ue,Ke,cf,Ia,Se,ee,Q,Gt),hf=Fd(it,Oe,se,rt,we),uf=Rd(ue,Ke,hf,Oe,ee,Q),df=Vp(Os,ye,Un,Se),Ds=um(Ze,Oe,Un,ym(Oe,dt)),pf=Zd(bn,se,dt,we,Ds),mf=Ip(df),ff=Xd(ue,mf,pf,ee,Q,Gt),gf=Eu(Ke,Mt,yn,Un,Se,xa,Q,Hn),Ra=new WeakMap,vf=pp(Hm,gf,Sa,Q,Ra,_n),Fa=zp($s,Ze,qi,Ta,ji,ka),_f=nm(it,Fa,se,rt,we),bf=tm(ue,Ke,Fa,_f,ee,Q,_n),Va=ad(bn),yf=Kp(Va,ye,Oe,wa,wt),Is=Zp(Va,ye,yf,wa,wt,Gn,Hn),xf=Hp(gs,ye,Mt,Oe,Un,Is,Se,vs,xa,wt),La=Up(xf),wf=rm(it,Mt,yn,Oe,La,se,dt,rt,we,Ds),Mf=im(ue,Ke,La,wf,ee,Q,Gt),Tf=Gp(st),kf=am(Tf,ee,new WeakSet,Om),Af=Yp(Mt,zn,Oe,Is,Se,wt),qa=Xp(Af,Se),Cf=vm(it,qa,se,rt,we),Pf=gm(ue,Ke,qa,Cf,ee,Q),Sf=Tm(Is,se,we),Nf=Mm(ue,ye,Is,Sf,ee,Q,Gt),ja=ap(et),Xi=$d(et),Wa=new WeakMap,Ef=zd(Wa,dt),Of=ja?cu(Ze,Se,Ed(et),Xi,Dd(su),ee,Ef,Q,Rn,new WeakMap,new WeakMap,bm(Rn,dt),et):void 0,$f=rp(Bi,Q),Df=vd(Ui,Ze,gd,Nd,new WeakSet,ee,$f,ms,In,Hi,Gi),Ba=Xu(Of,Bm,Oa,Um,Xm,Km,Jm,nf,rf,Df,af,lf,uf,ff,vf,bf,Mf,kf,Pf,Nf),If=cp(ue,Lp,ee,Q),Rf=hp(ue,qp,ee,Q),Ff=up(ue,jp,ee,Q),Vf=Wp(ye,Q),Lf=dp(ue,Vf,ee),qf=Pu(Ba,ye,Se,xm,If,Rf,Ff,Lf,Gn),Yi=Ud(Ra),jf=du(Yi),za=od(st),Wf=Md(Yi),Ua=Ad(st),Ha=new WeakMap,Bf=Vd(Ha,Ye),zf=Pp(za,st,ye,Mt,zn,yn,Oe,Un,Se,Ua,Xi,Bf,wt),Uf=Tp(ye,zf,Oe,Se,wt),Hf=Gu(it,za,bn,Mt,zn,yn,Oe,Wf,Ua,Xi,se,Rn,dt,rt,we,Ds),Gf=Wd(Wa),Xf=dm(Ha),to=ja?zu(jf,ue,Ke,Hf,Uf,Ce,Gf,ee,Q,Rn,Nm,Xf,Rm,_n):void 0,Yf=fd(Se,dt),Zf=mm(Ui,Ze,Wi,Yi,Ds,ms,Hi,Gi),Kf=Jp(Ba,Ze,ye,Yf,Zf),Qf=Qd(Ns,Bi),Jf=Jd($i,zi),eg=ep(Di,Na),tg=tp(Ns,Q);function je(n){return n===void 0}function H(n){return n!==void 0}function ng(n){return typeof n=="function"}function Lt(n){return typeof n=="number"}function Ot(n){return Object.prototype.toString.call(n)==="[object Object]"&&n.constructor===Object}function sg(n){return typeof n=="boolean"}function He(n){return Array.isArray(n)}function ut(n){return typeof n=="string"}function ns(n){return ut(n)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(n)}function W(n,e){if(!n)throw new Error(e)}function yt(n,e,t=1/0){if(!(e<=n&&n<=t))throw new RangeError(`Value must be within [${e}, ${t}], got: ${n}`)}function Ga(n){!n.isOffline&&n.state!=="running"&&Zi('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let Xa=!1,no=!1;function so(n){Xa=n}function ig(n){je(n)&&Xa&&!no&&(no=!0,Zi("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let Ya=console;function rg(...n){Ya.log(...n)}function Zi(...n){Ya.warn(...n)}function og(n){return new qf(n)}function ag(n,e,t){return new Kf(n,e,t)}const Ie=typeof self=="object"?self:null,cg=Ie&&(Ie.hasOwnProperty("AudioContext")||Ie.hasOwnProperty("webkitAudioContext"));function lg(n,e,t){return W(H(to),"AudioWorkletNode only works in a secure context (https or localhost)"),new(n instanceof Ie?.BaseAudioContext?Ie?.AudioWorkletNode:to)(n,e,t)}function Qe(n,e,t,s){var i=arguments.length,r=i<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,s);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(i<3?o(r):i>3?o(e,t,r):o(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}function me(n,e,t,s){function i(r){return r instanceof t?r:new t(function(o){o(r)})}return new(t||(t=Promise))(function(r,o){function a(h){try{l(s.next(h))}catch(u){o(u)}}function c(h){try{l(s.throw(h))}catch(u){o(u)}}function l(h){h.done?r(h.value):i(h.value).then(a,c)}l((s=s.apply(n,e||[])).next())})}class hg{constructor(e,t,s,i){this._callback=e,this._type=t,this._minimumUpdateInterval=Math.max(128/(i||44100),.001),this.updateInterval=s,this._createClock()}_createWorker(){const e=new Blob([`
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
			`],{type:"text/javascript"}),t=URL.createObjectURL(e),s=new Worker(t);s.onmessage=this._callback.bind(this),this._worker=s}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(e){var t;this._updateInterval=Math.max(e,this._minimumUpdateInterval),this._type==="worker"&&((t=this._worker)===null||t===void 0||t.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(e){this._disposeClock(),this._type=e,this._createClock()}dispose(){this._disposeClock()}}function qt(n){return eg(n)}function bt(n){return Jf(n)}function cs(n){return tg(n)}function Qt(n){return Qf(n)}function ug(n){return n instanceof Oa}function dg(n,e){return n==="value"||qt(e)||bt(e)||ug(e)}function nn(n,...e){if(!e.length)return n;const t=e.shift();if(Ot(n)&&Ot(t))for(const s in t)dg(s,t[s])?n[s]=t[s]:Ot(t[s])?(n[s]||Object.assign(n,{[s]:{}}),nn(n[s],t[s])):Object.assign(n,{[s]:t[s]});return nn(n,...e)}function pg(n,e){return n.length===e.length&&n.every((t,s)=>e[s]===t)}function j(n,e,t=[],s){const i={},r=Array.from(e);if(Ot(r[0])&&s&&!Reflect.has(r[0],s)&&(Object.keys(r[0]).some(a=>Reflect.has(n,a))||(nn(i,{[s]:r[0]}),t.splice(t.indexOf(s),1),r.shift())),r.length===1&&Ot(r[0]))nn(i,r[0]);else for(let o=0;o<t.length;o++)H(r[o])&&(i[t[o]]=r[o]);return nn(n,i)}function mg(n){return n.constructor.getDefaults()}function sn(n,e){return je(n)?e:n}function io(n,e){return e.forEach(t=>{Reflect.has(n,t)&&delete n[t]}),n}class pt{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...e){(this.debug||Ie&&this.toString()===Ie.TONE_DEBUG_CLASS)&&rg(this,...e)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}pt.version=Jo;const Ki=1e-6;function hn(n,e){return n>e+Ki}function di(n,e){return hn(n,e)||Be(n,e)}function xs(n,e){return n+Ki<e}function Be(n,e){return Math.abs(n-e)<Ki}function fg(n,e,t){return Math.max(Math.min(n,t),e)}class We extends pt{constructor(){super(),this.name="Timeline",this._timeline=[];const e=j(We.getDefaults(),arguments,["memory"]);this.memory=e.memory,this.increasing=e.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(e){if(W(Reflect.has(e,"time"),"Timeline: events must have a time attribute"),e.time=e.time.valueOf(),this.increasing&&this.length){const t=this._timeline[this.length-1];W(di(e.time,t.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(e)}else{const t=this._search(e.time);this._timeline.splice(t+1,0,e)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(e){const t=this._timeline.indexOf(e);return t!==-1&&this._timeline.splice(t,1),this}get(e,t="time"){const s=this._search(e,t);return s!==-1?this._timeline[s]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(e,t="time"){const s=this._search(e,t);return s+1<this._timeline.length?this._timeline[s+1]:null}getBefore(e){const t=this._timeline.length;if(t>0&&this._timeline[t-1].time<e)return this._timeline[t-1];const s=this._search(e);return s-1>=0?this._timeline[s-1]:null}cancel(e){if(this._timeline.length>1){let t=this._search(e);if(t>=0)if(Be(this._timeline[t].time,e)){for(let s=t;s>=0&&Be(this._timeline[s].time,e);s--)t=s;this._timeline=this._timeline.slice(0,t)}else this._timeline=this._timeline.slice(0,t+1);else this._timeline=[]}else this._timeline.length===1&&di(this._timeline[0].time,e)&&(this._timeline=[]);return this}cancelBefore(e){const t=this._search(e);return t>=0&&(this._timeline=this._timeline.slice(t+1)),this}previousEvent(e){const t=this._timeline.indexOf(e);return t>0?this._timeline[t-1]:null}_search(e,t="time"){if(this._timeline.length===0)return-1;let s=0;const i=this._timeline.length;let r=i;if(i>0&&this._timeline[i-1][t]<=e)return i-1;for(;s<r;){let o=Math.floor(s+(r-s)/2);const a=this._timeline[o],c=this._timeline[o+1];if(Be(a[t],e)){for(let l=o;l<this._timeline.length;l++){const h=this._timeline[l];if(Be(h[t],e))o=l;else break}return o}else{if(xs(a[t],e)&&hn(c[t],e))return o;hn(a[t],e)?r=o:s=o+1}}return-1}_iterate(e,t=0,s=this._timeline.length-1){this._timeline.slice(t,s+1).forEach(e)}forEach(e){return this._iterate(e),this}forEachBefore(e,t){const s=this._search(e);return s!==-1&&this._iterate(t,0,s),this}forEachAfter(e,t){const s=this._search(e);return this._iterate(t,s+1),this}forEachBetween(e,t,s){let i=this._search(e),r=this._search(t);return i!==-1&&r!==-1?(this._timeline[i].time!==e&&(i+=1),this._timeline[r].time===t&&(r-=1),this._iterate(s,i,r)):i===-1&&this._iterate(s,0,r),this}forEachFrom(e,t){let s=this._search(e);for(;s>=0&&this._timeline[s].time>=e;)s--;return this._iterate(t,s+1),this}forEachAtTime(e,t){const s=this._search(e);if(s!==-1&&Be(this._timeline[s].time,e)){let i=s;for(let r=s;r>=0&&Be(this._timeline[r].time,e);r--)i=r;this._iterate(r=>{t(r)},i,s)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Za=[];function Rs(n){Za.push(n)}function gg(n){Za.forEach(e=>e(n))}const Ka=[];function Fs(n){Ka.push(n)}function vg(n){Ka.forEach(e=>e(n))}class Xn extends pt{constructor(){super(...arguments),this.name="Emitter"}on(e,t){return e.split(/\W+/).forEach(i=>{je(this._events)&&(this._events={}),this._events.hasOwnProperty(i)||(this._events[i]=[]),this._events[i].push(t)}),this}once(e,t){const s=(...i)=>{t(...i),this.off(e,s)};return this.on(e,s),this}off(e,t){return e.split(/\W+/).forEach(i=>{if(je(this._events)&&(this._events={}),this._events.hasOwnProperty(i))if(je(t))this._events[i]=[];else{const r=this._events[i];for(let o=r.length-1;o>=0;o--)r[o]===t&&r.splice(o,1)}}),this}emit(e,...t){if(this._events&&this._events.hasOwnProperty(e)){const s=this._events[e].slice(0);for(let i=0,r=s.length;i<r;i++)s[i].apply(this,t)}return this}static mixin(e){["on","once","off","emit"].forEach(t=>{const s=Object.getOwnPropertyDescriptor(Xn.prototype,t);Object.defineProperty(e.prototype,t,s)})}dispose(){return super.dispose(),this._events=void 0,this}}class Qa extends Xn{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Yn extends Qa{constructor(){var e,t;super(),this.name="Context",this._constants=new Map,this._timeouts=new We,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const s=j(Yn.getDefaults(),arguments,["context"]);s.context?(this._context=s.context,this._latencyHint=((e=arguments[0])===null||e===void 0?void 0:e.latencyHint)||""):(this._context=og({latencyHint:s.latencyHint}),this._latencyHint=s.latencyHint),this._ticker=new hg(this.emit.bind(this,"tick"),s.clockSource,s.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((t=arguments[0])===null||t===void 0)&&t.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=s.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(gg(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(e,t,s){return this._context.createBuffer(e,t,s)}createChannelMerger(e){return this._context.createChannelMerger(e)}createChannelSplitter(e){return this._context.createChannelSplitter(e)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(e){return this._context.createDelay(e)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(e,t){return this._context.createIIRFilter(e,t)}createPanner(){return this._context.createPanner()}createPeriodicWave(e,t,s){return this._context.createPeriodicWave(e,t,s)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(e){return W(Qt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(e)}createMediaElementSource(e){return W(Qt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(e)}createMediaStreamDestination(){return W(Qt(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(e){return this._context.decodeAudioData(e)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(e){W(!this._initialized,"The listener cannot be set after initialization."),this._listener=e}get transport(){return this.initialize(),this._transport}set transport(e){W(!this._initialized,"The transport cannot be set after initialization."),this._transport=e}get draw(){return this.initialize(),this._draw}set draw(e){W(!this._initialized,"Draw cannot be set after initialization."),this._draw=e}get destination(){return this.initialize(),this._destination}set destination(e){W(!this._initialized,"The destination cannot be set after initialization."),this._destination=e}createAudioWorkletNode(e,t){return lg(this.rawContext,e,t)}addAudioWorkletModule(e){return me(this,void 0,void 0,function*(){W(H(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(e)),yield this._workletPromise})}workletsAreReady(){return me(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(e){this._ticker.updateInterval=e}get clockSource(){return this._ticker.type}set clockSource(e){this._ticker.type=e}get lookAhead(){return this._lookAhead}set lookAhead(e){this._lookAhead=e,this.updateInterval=e?e/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Qt(this._context)?this._context.resume():Promise.resolve()}close(){return me(this,void 0,void 0,function*(){Qt(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&vg(this)})}getConstant(e){if(this._constants.has(e))return this._constants.get(e);{const t=this._context.createBuffer(1,128,this._context.sampleRate),s=t.getChannelData(0);for(let r=0;r<s.length;r++)s[r]=e;const i=this._context.createBufferSource();return i.channelCount=1,i.channelCountMode="explicit",i.buffer=t,i.loop=!0,i.start(0),this._constants.set(e,i),i}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(e=>this._constants[e].disconnect()),this.close(),this}_timeoutLoop(){const e=this.now();this._timeouts.forEachBefore(e,t=>{t.callback(),this._timeouts.remove(t)})}setTimeout(e,t){this._timeoutIds++;const s=this.now();return this._timeouts.add({callback:e,id:this._timeoutIds,time:s+t}),this._timeoutIds}clearTimeout(e){return this._timeouts.forEach(t=>{t.id===e&&this._timeouts.remove(t)}),this}clearInterval(e){return this.clearTimeout(e)}setInterval(e,t){const s=++this._timeoutIds,i=()=>{const r=this.now();this._timeouts.add({callback:()=>{e(),i()},id:s,time:r+t})};return i(),s}}class _g extends Qa{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(e,t,s){return{}}createChannelMerger(e){return{}}createChannelSplitter(e){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(e){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(e,t){return{}}createPanner(){return{}}createPeriodicWave(e,t,s){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(e){return{}}createMediaElementSource(e){return{}}createMediaStreamDestination(){return{}}decodeAudioData(e){return Promise.resolve({})}createAudioWorkletNode(e,t){return{}}get rawContext(){return{}}addAudioWorkletModule(e){return me(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(e,t){return 0}clearTimeout(e){return this}setInterval(e,t){return 0}clearInterval(e){return this}getConstant(e){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(e){}get destination(){return{}}set destination(e){}now(){return 0}immediate(){return 0}}function ae(n,e){He(e)?e.forEach(t=>ae(n,t)):Object.defineProperty(n,e,{enumerable:!0,writable:!1})}function Ja(n,e){He(e)?e.forEach(t=>Ja(n,t)):Object.defineProperty(n,e,{writable:!0})}const K=()=>{};class ne extends pt{constructor(){super(),this.name="ToneAudioBuffer",this.onload=K;const e=j(ne.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=e.reverse,this.onload=e.onload,ut(e.url)?this.load(e.url).catch(e.onerror):e.url&&this.set(e.url)}static getDefaults(){return{onerror:K,onload:K,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Le().sampleRate}set(e){return e instanceof ne?e.loaded?this._buffer=e.get():e.onload=()=>{this.set(e),this.onload(this)}:this._buffer=e,this._reversed&&this._reverse(),this}get(){return this._buffer}load(e){return me(this,void 0,void 0,function*(){const t=ne.load(e).then(s=>{this.set(s),this.onload(this)});ne.downloads.push(t);try{yield t}finally{const s=ne.downloads.indexOf(t);ne.downloads.splice(s,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(e){const t=He(e)&&e[0].length>0,s=t?e.length:1,i=t?e[0].length:e.length,r=Le(),o=r.createBuffer(s,i,r.sampleRate),a=!t&&s===1?[e]:e;for(let c=0;c<s;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(e){if(Lt(e))this.fromArray(this.toArray(e));else{let t=new Float32Array(this.length);const s=this.numberOfChannels;for(let i=0;i<s;i++){const r=this.toArray(i);for(let o=0;o<r.length;o++)t[o]+=r[o]}t=t.map(i=>i/s),this.fromArray(t)}return this}toArray(e){if(Lt(e))return this.getChannelData(e);if(this.numberOfChannels===1)return this.toArray(0);{const t=[];for(let s=0;s<this.numberOfChannels;s++)t[s]=this.getChannelData(s);return t}}getChannelData(e){return this._buffer?this._buffer.getChannelData(e):new Float32Array(0)}slice(e,t=this.duration){W(this.loaded,"Buffer is not loaded");const s=Math.floor(e*this.sampleRate),i=Math.floor(t*this.sampleRate);W(s<i,"The start time must be less than the end time");const r=i-s,o=Le().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(s,i),a);return new ne(o)}_reverse(){if(this.loaded)for(let e=0;e<this.numberOfChannels;e++)this.getChannelData(e).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(e){this._reversed!==e&&(this._reversed=e,this._reverse())}static fromArray(e){return new ne().fromArray(e)}static fromUrl(e){return me(this,void 0,void 0,function*(){return yield new ne().load(e)})}static load(e){return me(this,void 0,void 0,function*(){const t=ne.baseUrl===""||ne.baseUrl.endsWith("/")?ne.baseUrl:ne.baseUrl+"/",s=yield fetch(t+e);if(!s.ok)throw new Error(`could not load url: ${e}`);const i=yield s.arrayBuffer();return yield Le().decodeAudioData(i)})}static supportsType(e){const t=e.split("."),s=t[t.length-1];return document.createElement("audio").canPlayType("audio/"+s)!==""}static loaded(){return me(this,void 0,void 0,function*(){for(yield Promise.resolve();ne.downloads.length;)yield ne.downloads[0]})}}ne.baseUrl="";ne.downloads=[];class Qi extends Yn{constructor(){super({clockSource:"offline",context:cs(arguments[0])?arguments[0]:ag(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:cs(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=cs(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(e){return me(this,void 0,void 0,function*(){let t=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,t++;const s=Math.floor(this.sampleRate/128);e&&t%s===0&&(yield new Promise(i=>setTimeout(i,1)))}})}render(){return me(this,arguments,void 0,function*(e=!0){yield this.workletsAreReady(),yield this._renderClock(e);const t=yield this._context.startRendering();return new ne(t)})}close(){return Promise.resolve()}}const ec=new _g;let Et=ec;function Le(){return Et===ec&&cg&&bg(new Yn),Et}function bg(n,e=!1){e&&Et.dispose(),Qt(n)?Et=new Yn(n):cs(n)?Et=new Qi(n):Et=n}function yg(){return Et.resume()}if(Ie&&!Ie.TONE_SILENCE_LOGGING){const e=` * Tone.js v${Jo} * `;console.log(`%c${e}`,"background: #000; color: #fff")}function xg(n){return Math.pow(10,n/20)}function wg(n){return 20*(Math.log(n)/Math.LN10)}function tc(n){return Math.pow(2,n/12)}let Vs=440;function Mg(){return Vs}function Tg(n){Vs=n}function pi(n){return Math.round(nc(n))}function nc(n){return 69+12*Math.log2(n/Vs)}function kg(n){return Vs*Math.pow(2,(n-69)/12)}class Ji extends pt{constructor(e,t,s){super(),this.defaultUnits="s",this._val=t,this._units=s,this.context=e,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:e=>this._frequencyToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:e=>this._ticksToUnits(parseInt(e,10)),regexp:/^(\d+)i$/i},m:{method:e=>this._beatsToUnits(parseInt(e,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(e,t)=>{const s=parseInt(e,10),i=t==="."?1.5:1;return s===1?this._beatsToUnits(this._getTimeSignature())*i:this._beatsToUnits(4/s)*i},regexp:/^(\d+)n(\.?)$/i},number:{method:e=>this._expressions[this.defaultUnits].method.call(this,e),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:e=>this._secondsToUnits(parseFloat(e)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:e=>parseInt(e,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:e=>{const t=parseInt(e,10);return this._beatsToUnits(8/(Math.floor(t)*3))},regexp:/^(\d+)t$/i},tr:{method:(e,t,s)=>{let i=0;return e&&e!=="0"&&(i+=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i+=this._beatsToUnits(parseFloat(t))),s&&s!=="0"&&(i+=this._beatsToUnits(parseFloat(s)/4)),i},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof Ji&&this.fromType(this._val),je(this._val))return this._noArg();if(ut(this._val)&&je(this._units)){for(const e in this._expressions)if(this._expressions[e].regexp.test(this._val.trim())){this._units=e;break}}else if(Ot(this._val)){let e=0;for(const t in this._val)if(H(this._val[t])){const s=this._val[t],i=new this.constructor(this.context,t).valueOf()*s;e+=i}return e}if(H(this._units)){const e=this._expressions[this._units],t=this._val.toString().trim().match(e.regexp);return t?e.method.apply(this,t.slice(1)):e.method.call(this,this._val)}else return ut(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(e){return 1/e}_beatsToUnits(e){return 60/this._getBpm()*e}_secondsToUnits(e){return e}_ticksToUnits(e){return e*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(e){switch(this._units=void 0,this.defaultUnits){case"s":this._val=e.toSeconds();break;case"i":this._val=e.toTicks();break;case"hz":this._val=e.toFrequency();break;case"midi":this._val=e.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class ze extends Ji{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:e=>this._now()+new this.constructor(this.context,e).valueOf(),regexp:/^\+(.+)/},quantize:{method:e=>{const t=new ze(this.context,e).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(t))},regexp:/^@(.+)/}})}quantize(e,t=1){const s=new this.constructor(this.context,e).valueOf(),i=this.valueOf(),a=Math.round(i/s)*s-i;return i+a*t}toNotation(){const e=this.toSeconds(),t=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);t.push(o+"n."),t.push(o+"n"),t.push(o+"t")}t.push("0");let s=t[0],i=new ze(this.context,t[0]).toSeconds();return t.forEach(r=>{const o=new ze(this.context,r).toSeconds();Math.abs(o-e)<Math.abs(i-e)&&(s=r,i=o)}),s}toBarsBeatsSixteenths(){const e=this._beatsToUnits(1);let t=this.valueOf()/e;t=parseFloat(t.toFixed(4));const s=Math.floor(t/this._getTimeSignature());let i=t%1*4;t=Math.floor(t)%this._getTimeSignature();const r=i.toString();return r.length>3&&(i=parseFloat(parseFloat(r).toFixed(3))),[s,t,i].join(":")}toTicks(){const e=this._beatsToUnits(1);return this.valueOf()/e*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return pi(this.toFrequency())}_now(){return this.context.now()}}class qe extends ze{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return Mg()}static set A4(e){Tg(e)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(e){return this.defaultUnits==="midi"?e:qe.mtof(e)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(e,t){const i=Ag[e.toLowerCase()]+(parseInt(t,10)+1)*12;return this.defaultUnits==="midi"?i:qe.mtof(i)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(e,t,s){let i=1;return e&&e!=="0"&&(i*=this._beatsToUnits(this._getTimeSignature()*parseFloat(e))),t&&t!=="0"&&(i*=this._beatsToUnits(parseFloat(t))),s&&s!=="0"&&(i*=this._beatsToUnits(parseFloat(s)/4)),i}}})}transpose(e){return new qe(this.context,this.valueOf()*tc(e))}harmonize(e){return e.map(t=>this.transpose(t))}toMidi(){return pi(this.valueOf())}toNote(){const e=this.toFrequency(),t=Math.log2(e/qe.A4);let s=Math.round(12*t)+57;const i=Math.floor(s/12);return i<0&&(s+=-12*i),Cg[s%12]+i.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const e=this._beatsToUnits(1),t=this.valueOf()/e;return Math.floor(t*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(e){return e}_ticksToUnits(e){return 1/(e*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(e){return 1/super._beatsToUnits(e)}_secondsToUnits(e){return 1/e}static mtof(e){return kg(e)}static ftom(e){return pi(e)}}const Ag={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},Cg=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Pn extends ze{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Ee extends pt{constructor(){super();const e=j(Ee.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=e.context}static getDefaults(){return{context:Le()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(e){return ig(e),new ze(this.context,e).toSeconds()}toFrequency(e){return new qe(this.context,e).toFrequency()}toTicks(e){return new Pn(this.context,e).toTicks()}_getPartialProperties(e){const t=this.get();return Object.keys(t).forEach(s=>{je(e[s])&&delete t[s]}),t}get(){const e=mg(this);return Object.keys(e).forEach(t=>{if(Reflect.has(this,t)){const s=this[t];H(s)&&H(s.value)&&H(s.setValueAtTime)?e[t]=s.value:s instanceof Ee?e[t]=s._getPartialProperties(e[t]):He(s)||Lt(s)||ut(s)||sg(s)?e[t]=s:delete e[t]}}),e}set(e){return Object.keys(e).forEach(t=>{Reflect.has(this,t)&&H(this[t])&&(this[t]&&H(this[t].value)&&H(this[t].setValueAtTime)?this[t].value!==e[t]&&(this[t].value=e[t]):this[t]instanceof Ee?this[t].set(e[t]):this[t]=e[t])}),this}}class er extends We{constructor(e="stopped"){super(),this.name="StateTimeline",this._initial=e,this.setStateAtTime(this._initial,0)}getValueAtTime(e){const t=this.get(e);return t!==null?t.state:this._initial}setStateAtTime(e,t,s){return yt(t,0),this.add(Object.assign({},s,{state:e,time:t})),this}getLastState(e,t){const s=this._search(t);for(let i=s;i>=0;i--){const r=this._timeline[i];if(r.state===e)return r}}getNextState(e,t){const s=this._search(t);if(s!==-1)for(let i=s;i<this._timeline.length;i++){const r=this._timeline[i];if(r.state===e)return r}}}class Z extends Ee{constructor(){const e=j(Z.getDefaults(),arguments,["param","units","convert"]);for(super(e),this.name="Param",this.overridden=!1,this._minOutput=1e-7,W(H(e.param)&&(qt(e.param)||e.param instanceof Z),"param must be an AudioParam");!qt(e.param);)e.param=e.param._param;this._swappable=H(e.swappable)?e.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=e.param,this.input.connect(this._param)):this._param=this.input=e.param,this._events=new We(1e3),this._initialValue=this._param.defaultValue,this.units=e.units,this.convert=e.convert,this._minValue=e.minValue,this._maxValue=e.maxValue,H(e.value)&&e.value!==this._toType(this._initialValue)&&this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Ee.getDefaults(),{convert:!0,units:"number"})}get value(){const e=this.now();return this.getValueAtTime(e)}set value(e){this.cancelScheduledValues(this.now()),this.setValueAtTime(e,this.now())}get minValue(){return H(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return H(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(e,t){return this.units===t}_assertRange(e){return H(this.maxValue)&&H(this.minValue)&&yt(e,this._fromType(this.minValue),this._fromType(this.maxValue)),e}_fromType(e){return this.convert&&!this.overridden?this._is(e,"time")?this.toSeconds(e):this._is(e,"decibels")?xg(e):this._is(e,"frequency")?this.toFrequency(e):e:this.overridden?0:e}_toType(e){return this.convert&&this.units==="decibels"?wg(e):e}setValueAtTime(e,t){const s=this.toSeconds(t),i=this._fromType(e);return W(isFinite(i)&&isFinite(s),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(i),this.log(this.units,"setValueAtTime",e,s),this._events.add({time:s,type:"setValueAtTime",value:i}),this._param.setValueAtTime(i,s),this}getValueAtTime(e){const t=Math.max(this.toSeconds(e),0),s=this._events.getAfter(t),i=this._events.get(t);let r=this._initialValue;if(i===null)r=this._initialValue;else if(i.type==="setTargetAtTime"&&(s===null||s.type==="setValueAtTime")){const o=this._events.getBefore(i.time);let a;o===null?a=this._initialValue:a=o.value,i.type==="setTargetAtTime"&&(r=this._exponentialApproach(i.time,a,i.value,i.constant,t))}else if(s===null)r=i.value;else if(s.type==="linearRampToValueAtTime"||s.type==="exponentialRampToValueAtTime"){let o=i.value;if(i.type==="setTargetAtTime"){const a=this._events.getBefore(i.time);a===null?o=this._initialValue:o=a.value}s.type==="linearRampToValueAtTime"?r=this._linearInterpolate(i.time,o,s.time,s.value,t):r=this._exponentialInterpolate(i.time,o,s.time,s.value,t)}else r=i.value;return this._toType(r)}setRampPoint(e){e=this.toSeconds(e);let t=this.getValueAtTime(e);return this.cancelAndHoldAtTime(e),this._fromType(t)===0&&(t=this._toType(this._minOutput)),this.setValueAtTime(t,e),this}linearRampToValueAtTime(e,t){const s=this._fromType(e),i=this.toSeconds(t);return W(isFinite(s)&&isFinite(i),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._assertRange(s),this._events.add({time:i,type:"linearRampToValueAtTime",value:s}),this.log(this.units,"linearRampToValueAtTime",e,i),this._param.linearRampToValueAtTime(s,i),this}exponentialRampToValueAtTime(e,t){let s=this._fromType(e);s=Be(s,0)?this._minOutput:s,this._assertRange(s);const i=this.toSeconds(t);return W(isFinite(s)&&isFinite(i),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({time:i,type:"exponentialRampToValueAtTime",value:s}),this.log(this.units,"exponentialRampToValueAtTime",e,i),this._param.exponentialRampToValueAtTime(s,i),this}exponentialRampTo(e,t,s){return s=this.toSeconds(s),this.setRampPoint(s),this.exponentialRampToValueAtTime(e,s+this.toSeconds(t)),this}linearRampTo(e,t,s){return s=this.toSeconds(s),this.setRampPoint(s),this.linearRampToValueAtTime(e,s+this.toSeconds(t)),this}targetRampTo(e,t,s){return s=this.toSeconds(s),this.setRampPoint(s),this.exponentialApproachValueAtTime(e,s,t),this}exponentialApproachValueAtTime(e,t,s){t=this.toSeconds(t),s=this.toSeconds(s);const i=Math.log(s+1)/Math.log(200);return this.setTargetAtTime(e,t,i),this.cancelAndHoldAtTime(t+s*.9),this.linearRampToValueAtTime(e,t+s),this}setTargetAtTime(e,t,s){const i=this._fromType(e);W(isFinite(s)&&s>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(t);return this._assertRange(i),W(isFinite(i)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(e)}, ${JSON.stringify(t)}`),this._events.add({constant:s,time:r,type:"setTargetAtTime",value:i}),this.log(this.units,"setTargetAtTime",e,r,s),this._param.setTargetAtTime(i,r,s),this}setValueCurveAtTime(e,t,s,i=1){s=this.toSeconds(s),t=this.toSeconds(t);const r=this._fromType(e[0])*i;this.setValueAtTime(this._toType(r),t);const o=s/(e.length-1);for(let a=1;a<e.length;a++){const c=this._fromType(e[a])*i;this.linearRampToValueAtTime(this._toType(c),t+a*o)}return this}cancelScheduledValues(e){const t=this.toSeconds(e);return W(isFinite(t),`Invalid argument to cancelScheduledValues: ${JSON.stringify(e)}`),this._events.cancel(t),this._param.cancelScheduledValues(t),this.log(this.units,"cancelScheduledValues",t),this}cancelAndHoldAtTime(e){const t=this.toSeconds(e),s=this._fromType(this.getValueAtTime(t));W(isFinite(t),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(e)}`),this.log(this.units,"cancelAndHoldAtTime",t,"value="+s);const i=this._events.get(t),r=this._events.getAfter(t);return i&&Be(i.time,t)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(t),this._events.cancel(t+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(s),t):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(s),t)),this._events.add({time:t,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,t),this}rampTo(e,t=.1,s){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(e,t,s):this.linearRampTo(e,t,s),this}apply(e){const t=this.context.currentTime;e.setValueAtTime(this.getValueAtTime(t),t);const s=this._events.get(t);if(s&&s.type==="setTargetAtTime"){const i=this._events.getAfter(s.time),r=i?i.time:t+2,o=(r-t)/10;for(let a=t;a<r;a+=o)e.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,i=>{i.type==="cancelScheduledValues"?e.cancelScheduledValues(i.time):i.type==="setTargetAtTime"?e.setTargetAtTime(i.value,i.time,i.constant):e[i.type](i.value,i.time)}),this}setParam(e){W(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const t=this.input;return t.disconnect(this._param),this.apply(e),this._param=e,t.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(e,t,s,i,r){return s+(t-s)*Math.exp(-(r-e)/i)}_linearInterpolate(e,t,s,i,r){return t+(i-t)*((r-e)/(s-e))}_exponentialInterpolate(e,t,s,i,r){return t*Math.pow(i/t,(r-e)/(s-e))}}class B extends Ee{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return H(this.input)?qt(this.input)||this.input instanceof Z?1:this.input.numberOfInputs:0}get numberOfOutputs(){return H(this.output)?this.output.numberOfOutputs:0}_isAudioNode(e){return H(e)&&(e instanceof B||bt(e))}_getInternalNodes(){const e=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&e.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&e.push(this.output),e}_setChannelProperties(e){this._getInternalNodes().forEach(s=>{s.channelCount=e.channelCount,s.channelCountMode=e.channelCountMode,s.channelInterpretation=e.channelInterpretation})}_getChannelProperties(){const e=this._getInternalNodes();W(e.length>0,"ToneAudioNode does not have any internal nodes");const t=e[0];return{channelCount:t.channelCount,channelCountMode:t.channelCountMode,channelInterpretation:t.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCount:e}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelCountMode:e}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(e){const t=this._getChannelProperties();this._setChannelProperties(Object.assign(t,{channelInterpretation:e}))}connect(e,t=0,s=0){return xn(this,e,t,s),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Zi("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(e,t=0,s=0){return Pg(this,e,t,s),this}chain(...e){return mi(this,...e),this}fan(...e){return e.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),H(this.input)&&(this.input instanceof B?this.input.dispose():bt(this.input)&&this.input.disconnect()),H(this.output)&&(this.output instanceof B?this.output.dispose():bt(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function mi(...n){const e=n.shift();n.reduce((t,s)=>(t instanceof B?t.connect(s):bt(t)&&xn(t,s),s),e)}function xn(n,e,t=0,s=0){for(W(H(n),"Cannot connect from undefined node"),W(H(e),"Cannot connect to undefined node"),(e instanceof B||bt(e))&&W(e.numberOfInputs>0,"Cannot connect to node with no inputs"),W(n.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof B||e instanceof Z;)H(e.input)&&(e=e.input);for(;n instanceof B;)H(n.output)&&(n=n.output);qt(e)?n.connect(e,t):n.connect(e,t,s)}function Pg(n,e,t=0,s=0){if(H(e))for(;e instanceof B;)e=e.input;for(;!bt(n);)H(n.output)&&(n=n.output);qt(e)?n.disconnect(e,t):bt(e)?n.disconnect(e,t,s):n.disconnect()}class Me extends B{constructor(){const e=j(Me.getDefaults(),arguments,["gain","units"]);super(e),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode,this.gain=new Z({context:this.context,convert:e.convert,param:this._gainNode.gain,units:e.units,value:e.gain,minValue:e.minValue,maxValue:e.maxValue}),ae(this,"gain")}static getDefaults(){return Object.assign(B.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class un extends B{constructor(e){super(e),this.onended=K,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new Me({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const s=this.toSeconds(t);return this._startTime!==-1&&s>=this._startTime&&(this._stopTime===-1||s<=this._stopTime)?"started":"stopped"},this._fadeIn=e.fadeIn,this._fadeOut=e.fadeOut,this._curve=e.curve,this.onended=e.onended}static getDefaults(){return Object.assign(B.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:K})}_startGain(e,t=1){W(this._startTime===-1,"Source cannot be started more than once");const s=this.toSeconds(this._fadeIn);return this._startTime=e+s,this._startTime=Math.max(this._startTime,this.context.currentTime),s>0?(this._gainNode.gain.setValueAtTime(0,e),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(t,e+s):this._gainNode.gain.exponentialApproachValueAtTime(t,e,s)):this._gainNode.gain.setValueAtTime(t,e),this}stop(e){return this.log("stop",e),this._stopGain(this.toSeconds(e)),this}_stopGain(e){W(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const t=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(e)+t,this._stopTime=Math.max(this._stopTime,this.now()),t>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,t,e):this._gainNode.gain.targetRampTo(0,t,e):(this._gainNode.gain.cancelAndHoldAtTime(e),this._gainNode.gain.setValueAtTime(0,e)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const s=this._curve==="exponential"?t*2:0;this._stopSource(this.now()+s),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==K&&(this.onended(this),this.onended=K,!this.context.isOffline)){const e=()=>this.dispose();typeof requestIdleCallback<"u"?requestIdleCallback(e):setTimeout(e,10)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),W(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=K,this}}class tr extends un{constructor(){const e=j(tr.getDefaults(),arguments,["offset"]);super(e),this.name="ToneConstantSource",this._source=this.context.createConstantSource(),xn(this._source,this._gainNode),this.offset=new Z({context:this.context,convert:e.convert,param:this._source.offset,units:e.units,value:e.offset,minValue:e.minValue,maxValue:e.maxValue})}static getDefaults(){return Object.assign(un.getDefaults(),{convert:!0,offset:1,units:"number"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._source.start(t),this}_stopSource(e){this._source.stop(e)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class xe extends B{constructor(){const e=j(xe.getDefaults(),arguments,["value","units"]);super(e),this.name="Signal",this.override=!0,this.output=this._constantSource=new tr({context:this.context,convert:e.convert,offset:e.value,units:e.units,minValue:e.minValue,maxValue:e.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(B.getDefaults(),{convert:!0,units:"number",value:0})}connect(e,t=0,s=0){return nr(this,e,t,s),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(e,t){return this._param.setValueAtTime(e,t),this}getValueAtTime(e){return this._param.getValueAtTime(e)}setRampPoint(e){return this._param.setRampPoint(e),this}linearRampToValueAtTime(e,t){return this._param.linearRampToValueAtTime(e,t),this}exponentialRampToValueAtTime(e,t){return this._param.exponentialRampToValueAtTime(e,t),this}exponentialRampTo(e,t,s){return this._param.exponentialRampTo(e,t,s),this}linearRampTo(e,t,s){return this._param.linearRampTo(e,t,s),this}targetRampTo(e,t,s){return this._param.targetRampTo(e,t,s),this}exponentialApproachValueAtTime(e,t,s){return this._param.exponentialApproachValueAtTime(e,t,s),this}setTargetAtTime(e,t,s){return this._param.setTargetAtTime(e,t,s),this}setValueCurveAtTime(e,t,s,i){return this._param.setValueCurveAtTime(e,t,s,i),this}cancelScheduledValues(e){return this._param.cancelScheduledValues(e),this}cancelAndHoldAtTime(e){return this._param.cancelAndHoldAtTime(e),this}rampTo(e,t,s){return this._param.rampTo(e,t,s),this}get value(){return this._param.value}set value(e){this._param.value=e}get convert(){return this._param.convert}set convert(e){this._param.convert=e}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(e){this._param.overridden=e}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(e){return this._param.apply(e),this}}function nr(n,e,t,s){(e instanceof Z||qt(e)||e instanceof xe&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof xe&&(e.overridden=!0)),xn(n,e,t,s)}class sr extends Z{constructor(){const e=j(sr.getDefaults(),arguments,["value"]);super(e),this.name="TickParam",this._events=new We(1/0),this._multiplier=1,this._multiplier=e.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(e.value)}),this.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(Z.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(e,t,s){t=this.toSeconds(t),this.setRampPoint(t);const i=this._fromType(e),r=this._events.get(t),o=Math.round(Math.max(1/s,1));for(let a=0;a<=o;a++){const c=s*a+t,l=this._exponentialApproach(r.time,r.value,i,s,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(e,t){const s=this.toSeconds(t);super.setValueAtTime(e,t);const i=this._events.get(s),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,s);return i.ticks=Math.max(o,0),this}linearRampToValueAtTime(e,t){const s=this.toSeconds(t);super.linearRampToValueAtTime(e,t);const i=this._events.get(s),r=this._events.previousEvent(i),o=this._getTicksUntilEvent(r,s);return i.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(e,t){t=this.toSeconds(t);const s=this._fromType(e),i=this._events.get(t),r=Math.round(Math.max((t-i.time)*10,1)),o=(t-i.time)/r;for(let a=0;a<=r;a++){const c=o*a+i.time,l=this._exponentialInterpolate(i.time,i.value,t,s,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(e,t){if(e===null)e={ticks:0,time:0,type:"setValueAtTime",value:0};else if(je(e.ticks)){const o=this._events.previousEvent(e);e.ticks=this._getTicksUntilEvent(o,e.time)}const s=this._fromType(this.getValueAtTime(e.time));let i=this._fromType(this.getValueAtTime(t));const r=this._events.get(t);return r&&r.time===t&&r.type==="setValueAtTime"&&(i=this._fromType(this.getValueAtTime(t-this.sampleTime))),.5*(t-e.time)*(s+i)+e.ticks}getTicksAtTime(e){const t=this.toSeconds(e),s=this._events.get(t);return Math.max(this._getTicksUntilEvent(s,t),0)}getDurationOfTicks(e,t){const s=this.toSeconds(t),i=this.getTicksAtTime(t);return this.getTimeOfTick(i+e)-s}getTimeOfTick(e){const t=this._events.get(e,"ticks"),s=this._events.getAfter(e,"ticks");if(t&&t.ticks===e)return t.time;if(t&&s&&s.type==="linearRampToValueAtTime"&&t.value!==s.value){const i=this._fromType(this.getValueAtTime(t.time)),o=(this._fromType(this.getValueAtTime(s.time))-i)/(s.time-t.time),a=Math.sqrt(Math.pow(i,2)-2*o*(t.ticks-e)),c=(-i+a)/o,l=(-i-a)/o;return(c>0?c:l)+t.time}else return t?t.value===0?1/0:t.time+(e-t.ticks)/t.value:e/this._initialValue}ticksToTime(e,t){return this.getDurationOfTicks(e,t)}timeToTicks(e,t){const s=this.toSeconds(t),i=this.toSeconds(e),r=this.getTicksAtTime(s);return this.getTicksAtTime(s+i)-r}_fromType(e){return this.units==="bpm"&&this.multiplier?1/(60/e/this.multiplier):super._fromType(e)}_toType(e){return this.units==="bpm"&&this.multiplier?e/this.multiplier*60:super._toType(e)}get multiplier(){return this._multiplier}set multiplier(e){const t=this.value;this._multiplier=e,this.cancelScheduledValues(0),this.setValueAtTime(t,0)}}class ir extends xe{constructor(){const e=j(ir.getDefaults(),arguments,["value"]);super(e),this.name="TickSignal",this.input=this._param=new sr({context:this.context,convert:e.convert,multiplier:e.multiplier,param:this._constantSource.offset,units:e.units,value:e.value})}static getDefaults(){return Object.assign(xe.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(e,t){return this._param.ticksToTime(e,t)}timeToTicks(e,t){return this._param.timeToTicks(e,t)}getTimeOfTick(e){return this._param.getTimeOfTick(e)}getDurationOfTicks(e,t){return this._param.getDurationOfTicks(e,t)}getTicksAtTime(e){return this._param.getTicksAtTime(e)}get multiplier(){return this._param.multiplier}set multiplier(e){this._param.multiplier=e}dispose(){return super.dispose(),this._param.dispose(),this}}class rr extends Ee{constructor(){const e=j(rr.getDefaults(),arguments,["frequency"]);super(e),this.name="TickSource",this._state=new er,this._tickOffset=new We,this._ticksAtTime=new We,this._secondsAtTime=new We,this.frequency=new ir({context:this.context,units:e.units,value:e.frequency}),ae(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Ee.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(e,t){const s=this.toSeconds(e);return this._state.getValueAtTime(s)!=="started"&&(this._state.setStateAtTime("started",s),H(t)&&this.setTicksAtTime(t,s),this._ticksAtTime.cancel(s),this._secondsAtTime.cancel(s)),this}stop(e){const t=this.toSeconds(e);if(this._state.getValueAtTime(t)==="stopped"){const s=this._state.get(t);s&&s.time>0&&(this._tickOffset.cancel(s.time),this._state.cancel(s.time))}return this._state.cancel(t),this._state.setStateAtTime("stopped",t),this.setTicksAtTime(0,t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t)),this}cancel(e){return e=this.toSeconds(e),this._state.cancel(e),this._tickOffset.cancel(e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getTicksAtTime(e){const t=this.toSeconds(e),s=this._state.getLastState("stopped",t),i=this._ticksAtTime.get(t),r={state:"paused",time:t};this._state.add(r);let o=i||s,a=i?i.ticks:0,c=null;return this._state.forEachBetween(o.time,t+this.sampleTime,l=>{let h=o.time;const u=this._tickOffset.get(l.time);u&&u.time>=o.time&&(a=u.ticks,h=u.time),o.state==="started"&&l.state!=="started"&&(a+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(h),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:a})),o=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),a}get ticks(){return this.getTicksAtTime(this.now())}set ticks(e){this.setTicksAtTime(e,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(e){const t=this.now(),s=this.frequency.timeToTicks(e,t);this.setTicksAtTime(s,t)}getSecondsAtTime(e){e=this.toSeconds(e);const t=this._state.getLastState("stopped",e),s={state:"paused",time:e};this._state.add(s);const i=this._secondsAtTime.get(e);let r=i||t,o=i?i.seconds:0,a=null;return this._state.forEachBetween(r.time,e+this.sampleTime,c=>{let l=r.time;const h=this._tickOffset.get(c.time);h&&h.time>=r.time&&(o=h.seconds,l=h.time),r.state==="started"&&c.state!=="started"&&(o+=c.time-l,c.time!==s.time&&(a={state:c.state,time:c.time,seconds:o})),r=c}),this._state.remove(s),a&&this._secondsAtTime.add(a),o}setTicksAtTime(e,t){return t=this.toSeconds(t),this._tickOffset.cancel(t),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(e,t),ticks:e,time:t}),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getStateAtTime(e){return e=this.toSeconds(e),this._state.getValueAtTime(e)}getTimeOfTick(e,t=this.now()){const s=this._tickOffset.get(t),i=this._state.get(t),r=Math.max(s.time,i.time),o=this.frequency.getTicksAtTime(r)+e-s.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(e,t,s){let i=this._state.get(e);this._state.forEachBetween(e,t,o=>{i&&i.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(i.time,e),o.time-this.sampleTime,s),i=o});let r=null;if(i&&i.state==="started"){const o=Math.max(i.time,e),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(i.time),l=a-c;let h=Math.ceil(l)-l;h=Be(h,1)?0:h;let u=this.frequency.getTimeOfTick(a+h);for(;u<t;){try{s(u,Math.round(this.getTicksAtTime(u)))}catch(d){r=d;break}u+=this.frequency.getDurationOfTicks(1,u)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class Ls extends Ee{constructor(){const e=j(Ls.getDefaults(),arguments,["callback","frequency"]);super(e),this.name="Clock",this.callback=K,this._lastUpdate=0,this._state=new er("stopped"),this._boundLoop=this._loop.bind(this),this.callback=e.callback,this._tickSource=new rr({context:this.context,frequency:e.frequency,units:e.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,ae(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Ee.getDefaults(),{callback:K,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(e,t){Ga(this.context);const s=this.toSeconds(e);return this.log("start",s),this._state.getValueAtTime(s)!=="started"&&(this._state.setStateAtTime("started",s),this._tickSource.start(s,t),s<this._lastUpdate&&this.emit("start",s,t)),this}stop(e){const t=this.toSeconds(e);return this.log("stop",t),this._state.cancel(t),this._state.setStateAtTime("stopped",t),this._tickSource.stop(t),t<this._lastUpdate&&this.emit("stop",t),this}pause(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)==="started"&&(this._state.setStateAtTime("paused",t),this._tickSource.pause(t),t<this._lastUpdate&&this.emit("pause",t)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(e){this._tickSource.ticks=e}get seconds(){return this._tickSource.seconds}set seconds(e){this._tickSource.seconds=e}getSecondsAtTime(e){return this._tickSource.getSecondsAtTime(e)}setTicksAtTime(e,t){return this._tickSource.setTicksAtTime(e,t),this}getTimeOfTick(e,t=this.now()){return this._tickSource.getTimeOfTick(e,t)}getTicksAtTime(e){return this._tickSource.getTicksAtTime(e)}nextTickTime(e,t){const s=this.toSeconds(t),i=this.getTicksAtTime(s);return this._tickSource.getTimeOfTick(i+e,s)}_loop(){const e=this._lastUpdate,t=this.now();this._lastUpdate=t,this.log("loop",e,t),e!==t&&(this._state.forEachBetween(e,t,s=>{switch(s.state){case"started":const i=this._tickSource.getTicksAtTime(s.time);this.emit("start",s.time,i);break;case"stopped":s.time!==0&&this.emit("stop",s.time);break;case"paused":this.emit("pause",s.time);break}}),this._tickSource.forEachTickBetween(e,t,(s,i)=>{this.callback(s,i)}))}getStateAtTime(e){const t=this.toSeconds(e);return this._state.getValueAtTime(t)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Xn.mixin(Ls);class wn extends B{constructor(){const e=j(wn.getDefaults(),arguments,["volume"]);super(e),this.name="Volume",this.input=this.output=new Me({context:this.context,gain:e.volume,units:"decibels"}),this.volume=this.output.gain,ae(this,"volume"),this._unmutedVolume=e.volume,this.mute=e.mute}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(e){!this.mute&&e?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!e&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class or extends B{constructor(){const e=j(or.getDefaults(),arguments);super(e),this.name="Destination",this.input=new wn({context:this.context}),this.output=new Me({context:this.context}),this.volume=this.input.volume,mi(this.input,this.output,this.context.rawContext.destination),this.mute=e.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(e){this.input.mute=e}chain(...e){return this.input.disconnect(),e.unshift(this.input),e.push(this.output),mi(...e),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}Rs(n=>{n.destination=new or({context:n})});Fs(n=>{n.destination.dispose()});class Sg extends B{constructor(){super(...arguments),this.name="Listener",this.positionX=new Z({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new Z({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new Z({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new Z({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new Z({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new Z({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new Z({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new Z({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new Z({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(B.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}Rs(n=>{n.listener=new Sg({context:n})});Fs(n=>{n.listener.dispose()});class ar extends pt{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const e=j(ar.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=e.baseUrl,Object.keys(e.urls).forEach(t=>{this._loadingCount++;const s=e.urls[t];this.add(t,s,this._bufferLoaded.bind(this,e.onload),e.onerror)})}static getDefaults(){return{baseUrl:"",onerror:K,onload:K,urls:{}}}has(e){return this._buffers.has(e.toString())}get(e){return W(this.has(e),`ToneAudioBuffers has no buffer named: ${e}`),this._buffers.get(e.toString())}_bufferLoaded(e){this._loadingCount--,this._loadingCount===0&&e&&e()}get loaded(){return Array.from(this._buffers).every(([e,t])=>t.loaded)}add(e,t,s=K,i=K){return ut(t)?(this.baseUrl&&t.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(e.toString(),new ne(this.baseUrl+t,s,i))):this._buffers.set(e.toString(),new ne(t,s,i)),this}dispose(){return super.dispose(),this._buffers.forEach(e=>e.dispose()),this._buffers.clear(),this}}class en extends Pn{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(e){return this._getPPQ()*e}_secondsToUnits(e){return Math.floor(e/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(e){return e}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class Ng extends Ee{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new We,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(e,t){return this._events.add({callback:e,time:this.toSeconds(t)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(e){return this._events.cancel(this.toSeconds(e)),this}_drawLoop(){const e=this.context.currentTime;this._events.forEachBefore(e+this.anticipation,t=>{e-t.time<=this.expiration&&t.callback(),this._events.remove(t)}),this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}Rs(n=>{n.draw=new Ng({context:n})});Fs(n=>{n.draw.dispose()});class Eg extends pt{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(e){W(H(e.time),"Events must have a time property"),W(H(e.duration),"Events must have a duration parameter"),e.time=e.time.valueOf();let t=new Og(e.time,e.time+e.duration,e);for(this._root===null?this._root=t:this._root.insert(t),this._length++;t!==null;)t.updateHeight(),t.updateMax(),this._rebalance(t),t=t.parent;return this}remove(e){if(this._root!==null){const t=[];this._root.search(e.time,t);for(const s of t)if(s.event===e){this._removeNode(s),this._length--;break}}return this}get length(){return this._length}cancel(e){return this.forEachFrom(e,t=>this.remove(t)),this}_setRoot(e){this._root=e,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(e,t){e.parent!==null?(e.isLeftChild()?e.parent.left=t:e.parent.right=t,this._rebalance(e.parent)):this._setRoot(t)}_removeNode(e){if(e.left===null&&e.right===null)this._replaceNodeInParent(e,null);else if(e.right===null)this._replaceNodeInParent(e,e.left);else if(e.left===null)this._replaceNodeInParent(e,e.right);else{const t=e.getBalance();let s,i=null;if(t>0)if(e.left.right===null)s=e.left,s.right=e.right,i=s;else{for(s=e.left.right;s.right!==null;)s=s.right;s.parent&&(s.parent.right=s.left,i=s.parent,s.left=e.left,s.right=e.right)}else if(e.right.left===null)s=e.right,s.left=e.left,i=s;else{for(s=e.right.left;s.left!==null;)s=s.left;s.parent&&(s.parent.left=s.right,i=s.parent,s.left=e.left,s.right=e.right)}e.parent!==null?e.isLeftChild()?e.parent.left=s:e.parent.right=s:this._setRoot(s),i&&this._rebalance(i)}e.dispose()}_rotateLeft(e){const t=e.parent,s=e.isLeftChild(),i=e.right;i&&(e.right=i.left,i.left=e),t!==null?s?t.left=i:t.right=i:this._setRoot(i)}_rotateRight(e){const t=e.parent,s=e.isLeftChild(),i=e.left;i&&(e.left=i.right,i.right=e),t!==null?s?t.left=i:t.right=i:this._setRoot(i)}_rebalance(e){const t=e.getBalance();t>1&&e.left?e.left.getBalance()<0?this._rotateLeft(e.left):this._rotateRight(e):t<-1&&e.right&&(e.right.getBalance()>0?this._rotateRight(e.right):this._rotateLeft(e))}get(e){if(this._root!==null){const t=[];if(this._root.search(e,t),t.length>0){let s=t[0];for(let i=1;i<t.length;i++)t[i].low>s.low&&(s=t[i]);return s.event}}return null}forEach(e){if(this._root!==null){const t=[];this._root.traverse(s=>t.push(s)),t.forEach(s=>{s.event&&e(s.event)})}return this}forEachAtTime(e,t){if(this._root!==null){const s=[];this._root.search(e,s),s.forEach(i=>{i.event&&t(i.event)})}return this}forEachFrom(e,t){if(this._root!==null){const s=[];this._root.searchAfter(e,s),s.forEach(i=>{i.event&&t(i.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(e=>e.dispose()),this._root=null,this}}class Og{constructor(e,t,s){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=s,this.low=e,this.high=t,this.max=this.high}insert(e){e.low<=this.low?this.left===null?this.left=e:this.left.insert(e):this.right===null?this.right=e:this.right.insert(e)}search(e,t){e>this.max||(this.left!==null&&this.left.search(e,t),this.low<=e&&this.high>e&&t.push(this),!(this.low>e)&&this.right!==null&&this.right.search(e,t))}searchAfter(e,t){this.low>=e&&(t.push(this),this.left!==null&&this.left.searchAfter(e,t)),this.right!==null&&this.right.searchAfter(e,t)}traverse(e){e(this),this.left!==null&&this.left.traverse(e),this.right!==null&&this.right.traverse(e)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let e=0;return this.left!==null&&this.right!==null?e=this.left.height-this.right.height:this.left!==null?e=this.left.height+1:this.right!==null&&(e=-(this.right.height+1)),e}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(e){this._left=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(e){this._right=e,e!==null&&(e.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class $g extends pt{constructor(e){super(),this.name="TimelineValue",this._timeline=new We({memory:10}),this._initialValue=e}set(e,t){return this._timeline.add({value:e,time:t}),this}get(e){const t=this._timeline.get(e);return t?t.value:this._initialValue}}class dn extends B{constructor(){super(j(dn.getDefaults(),arguments,["context"]))}connect(e,t=0,s=0){return nr(this,e,t,s),this}}class Zn extends dn{constructor(){const e=j(Zn.getDefaults(),arguments,["mapping","length"]);super(e),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper,He(e.mapping)||e.mapping instanceof Float32Array?this.curve=Float32Array.from(e.mapping):ng(e.mapping)&&this.setMap(e.mapping,e.length)}static getDefaults(){return Object.assign(xe.getDefaults(),{length:1024})}setMap(e,t=1024){const s=new Float32Array(t);for(let i=0,r=t;i<r;i++){const o=i/(r-1)*2-1;s[i]=e(o,i)}return this.curve=s,this}get curve(){return this._shaper.curve}set curve(e){this._shaper.curve=e}get oversample(){return this._shaper.oversample}set oversample(e){const t=["none","2x","4x"].some(s=>s.includes(e));W(t,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=e}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class cr extends dn{constructor(){const e=j(cr.getDefaults(),arguments,["value"]);super(e),this.name="Pow",this._exponentScaler=this.input=this.output=new Zn({context:this.context,mapping:this._expFunc(e.value),length:8192}),this._exponent=e.value}static getDefaults(){return Object.assign(dn.getDefaults(),{value:1})}_expFunc(e){return t=>Math.pow(Math.abs(t),e)}get value(){return this._exponent}set value(e){this._exponent=e,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class xt{constructor(e,t){this.id=xt._eventId++,this._remainderTime=0;const s=Object.assign(xt.getDefaults(),t);this.transport=e,this.callback=s.callback,this._once=s.once,this.time=Math.floor(s.time),this._remainderTime=s.time-this.time}static getDefaults(){return{callback:K,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(e){if(this.callback){const t=this.transport.bpm.getDurationOfTicks(1,e);this.callback(e+this._remainderTime*t),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}xt._eventId=0;class lr extends xt{constructor(e,t){super(e,t),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const s=Object.assign(lr.getDefaults(),t);this.duration=s.duration,this._interval=s.interval,this._nextTick=s.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},xt.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(e){this._createEvents(e),super.invoke(e)}_createEvent(){return xs(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new en(this.context,this._nextTick).toSeconds()):-1}_createEvents(e){xs(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new en(this.context,this._nextTick).toSeconds()))}_restart(e){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const t=this.transport.getTicksAtTime(e);hn(t,this.time)&&(this._nextTick=this.floatTime+Math.ceil((t-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class qs extends Ee{constructor(){const e=j(qs.getDefaults(),arguments);super(e),this.name="Transport",this._loop=new $g(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new We,this._repeatedEvents=new Eg,this._syncedSignals=[],this._swingAmount=0,this._ppq=e.ppq,this._clock=new Ls({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=e.ppq,this.bpm.setValueAtTime(e.bpm,0),ae(this,"bpm"),this._timeSignature=e.timeSignature,this._swingTicks=e.ppq/2}static getDefaults(){return Object.assign(Ee.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(e,t){if(this._loop.get(e)&&t>=this._loopEnd&&(this.emit("loopEnd",e),this._clock.setTicksAtTime(this._loopStart,e),t=this._loopStart,this.emit("loopStart",e,this._clock.getSecondsAtTime(e)),this.emit("loop",e)),this._swingAmount>0&&t%this._ppq!==0&&t%(this._swingTicks*2)!==0){const s=t%(this._swingTicks*2)/(this._swingTicks*2),i=Math.sin(s*Math.PI)*this._swingAmount;e+=new en(this.context,this._swingTicks*2/3).toSeconds()*i}so(!0),this._timeline.forEachAtTime(t,s=>s.invoke(e)),so(!1)}schedule(e,t){const s=new xt(this,{callback:e,time:new Pn(this.context,t).toTicks()});return this._addEvent(s,this._timeline)}scheduleRepeat(e,t,s,i=1/0){const r=new lr(this,{callback:e,duration:new ze(this.context,i).toTicks(),interval:new ze(this.context,t).toTicks(),time:new Pn(this.context,s).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(e,t){const s=new xt(this,{callback:e,once:!0,time:new Pn(this.context,t).toTicks()});return this._addEvent(s,this._timeline)}clear(e){if(this._scheduledEvents.hasOwnProperty(e)){const t=this._scheduledEvents[e.toString()];t.timeline.remove(t.event),t.event.dispose(),delete this._scheduledEvents[e.toString()]}return this}_addEvent(e,t){return this._scheduledEvents[e.id.toString()]={event:e,timeline:t},t.add(e),e.id}cancel(e=0){const t=this.toTicks(e);return this._timeline.forEachFrom(t,s=>this.clear(s.id)),this._repeatedEvents.forEachFrom(t,s=>this.clear(s.id)),this}_bindClockEvents(){this._clock.on("start",(e,t)=>{t=new en(this.context,t).toSeconds(),this.emit("start",e,t)}),this._clock.on("stop",e=>{this.emit("stop",e)}),this._clock.on("pause",e=>{this.emit("pause",e)})}get state(){return this._clock.getStateAtTime(this.now())}start(e,t){this.context.resume();let s;return H(t)&&(s=this.toTicks(t)),this._clock.start(e,s),this}stop(e){return this._clock.stop(e),this}pause(e){return this._clock.pause(e),this}toggle(e){return e=this.toSeconds(e),this._clock.getStateAtTime(e)!=="started"?this.start(e):this.stop(e),this}get timeSignature(){return this._timeSignature}set timeSignature(e){He(e)&&(e=e[0]/e[1]*4),this._timeSignature=e}get loopStart(){return new ze(this.context,this._loopStart,"i").toSeconds()}set loopStart(e){this._loopStart=this.toTicks(e)}get loopEnd(){return new ze(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(e){this._loopEnd=this.toTicks(e)}get loop(){return this._loop.get(this.now())}set loop(e){this._loop.set(e,this.now())}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get swing(){return this._swingAmount}set swing(e){this._swingAmount=e}get swingSubdivision(){return new en(this.context,this._swingTicks).toNotation()}set swingSubdivision(e){this._swingTicks=this.toTicks(e)}get position(){const e=this.now(),t=this._clock.getTicksAtTime(e);return new en(this.context,t).toBarsBeatsSixteenths()}set position(e){const t=this.toTicks(e);this.ticks=t}get seconds(){return this._clock.seconds}set seconds(e){const t=this.now(),s=this._clock.frequency.timeToTicks(e,t);this.ticks=s}get progress(){if(this.loop){const e=this.now();return(this._clock.getTicksAtTime(e)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(e){if(this._clock.ticks!==e){const t=this.now();if(this.state==="started"){const s=this._clock.getTicksAtTime(t),i=this._clock.frequency.getDurationOfTicks(Math.ceil(s)-s,t),r=t+i;this.emit("stop",r),this._clock.setTicksAtTime(e,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",t),this._clock.setTicksAtTime(e,t)}}getTicksAtTime(e){return this._clock.getTicksAtTime(e)}getSecondsAtTime(e){return this._clock.getSecondsAtTime(e)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(e){this._clock.frequency.multiplier=e}nextSubdivision(e){if(e=this.toTicks(e),this.state!=="started")return 0;{const t=this.now(),s=this.getTicksAtTime(t),i=e-s%e;return this._clock.nextTickTime(i,t)}}syncSignal(e,t){const s=this.now();let i=this.bpm,r=1/(60/i.getValueAtTime(s)/this.PPQ),o=[];if(e.units==="time"){const c=.015625/r,l=new Me(c),h=new cr(-1),u=new Me(c);i.chain(l,h,u),i=u,r=1/r,o=[l,h,u]}t||(e.getValueAtTime(s)!==0?t=e.getValueAtTime(s)/r:t=0);const a=new Me(t);return i.connect(a),a.connect(e._param),o.push(a),this._syncedSignals.push({initial:e.value,nodes:o,signal:e}),e.value=0,this}unsyncSignal(e){for(let t=this._syncedSignals.length-1;t>=0;t--){const s=this._syncedSignals[t];s.signal===e&&(s.nodes.forEach(i=>i.dispose()),s.signal.value=s.initial,this._syncedSignals.splice(t,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Ja(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Xn.mixin(qs);Rs(n=>{n.transport=new qs({context:n})});Fs(n=>{n.transport.dispose()});class Re extends B{constructor(e){super(e),this.input=void 0,this._state=new er("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=K,this._syncedStop=K,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new wn({context:this.context,mute:e.mute,volume:e.volume}),this.volume=this._volume.volume,ae(this,"volume"),this.onstop=e.onstop}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,onstop:K,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}_clampToCurrentTime(e){return this._synced?e:Math.max(e,this.context.currentTime)}start(e,t,s){let i=je(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(i=this._clampToCurrentTime(i),!this._synced&&this._state.getValueAtTime(i)==="started")W(hn(i,this._state.get(i).time),"Start time must be strictly greater than previous start time"),this._state.cancel(i),this._state.setStateAtTime("started",i),this.log("restart",i),this.restart(i,t,s);else if(this.log("start",i),this._state.setStateAtTime("started",i),this._synced){const r=this._state.get(i);r&&(r.offset=this.toSeconds(sn(t,0)),r.duration=s?this.toSeconds(s):void 0);const o=this.context.transport.schedule(a=>{this._start(a,t,s)},i);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>i&&this._syncedStart(this.now(),this.context.transport.seconds)}else Ga(this.context),this._start(i,t,s);return this}stop(e){let t=je(e)&&this._synced?this.context.transport.seconds:this.toSeconds(e);if(t=this._clampToCurrentTime(t),this._state.getValueAtTime(t)==="started"||H(this._state.getNextState("started",t))){if(this.log("stop",t),!this._synced)this._stop(t);else{const s=this.context.transport.schedule(this._stop.bind(this),t);this._scheduled.push(s)}this._state.cancel(t),this._state.setStateAtTime("stopped",t)}return this}restart(e,t,s){return e=this.toSeconds(e),this._state.getValueAtTime(e)==="started"&&(this._state.cancel(e),this._restart(e,t,s)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(e,t)=>{if(hn(t,0)){const s=this._state.get(t);if(s&&s.state==="started"&&s.time!==t){const i=t-this.toSeconds(s.time);let r;s.duration&&(r=this.toSeconds(s.duration)-i),this._start(e,this.toSeconds(s.offset)+i,r)}}},this._syncedStop=e=>{const t=this.context.transport.getSecondsAtTime(Math.max(e-this.sampleTime,0));this._state.getValueAtTime(t)==="started"&&this._stop(e)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(e=>this.context.transport.clear(e)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=K,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class js extends un{constructor(){const e=j(js.getDefaults(),arguments,["url","onload"]);super(e),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1,xn(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new Z({context:this.context,param:this._source.playbackRate,units:"positive",value:e.playbackRate}),this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this._buffer=new ne(e.url,e.onload,e.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(un.getDefaults(),{url:new ne,loop:!1,loopEnd:0,loopStart:0,onload:K,onerror:K,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(e){this._fadeIn=e}get fadeOut(){return this._fadeOut}set fadeOut(e){this._fadeOut=e}get curve(){return this._curve}set curve(e){this._curve=e}start(e,t,s,i=1){W(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(e);this._startGain(r,i),this.loop?t=sn(t,this.loopStart):t=sn(t,0);let o=Math.max(this.toSeconds(t),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;di(o,a)&&(o=(o-c)%l+c),Be(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,xs(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),H(s)){let a=this.toSeconds(s);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(e){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(e)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(e){this._source.loopStart=this.toSeconds(e)}get loopEnd(){return this._source.loopEnd}set loopEnd(e){this._source.loopEnd=this.toSeconds(e)}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._source.loop}set loop(e){this._source.loop=e,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}function Xt(n,e){return me(this,void 0,void 0,function*(){const t=e/n.context.sampleRate,s=new Qi(1,t,n.context.sampleRate);return new n.constructor(Object.assign(n.get(),{frequency:2/t,detune:0,context:s})).toDestination().start(0),(yield s.render()).getChannelData(0)})}class hr extends un{constructor(){const e=j(hr.getDefaults(),arguments,["frequency","type"]);super(e),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator],xn(this._oscillator,this._gainNode),this.type=e.type,this.frequency=new Z({context:this.context,param:this._oscillator.frequency,units:"frequency",value:e.frequency}),this.detune=new Z({context:this.context,param:this._oscillator.detune,units:"cents",value:e.detune}),ae(this,["frequency","detune"])}static getDefaults(){return Object.assign(un.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(e){const t=this.toSeconds(e);return this.log("start",t),this._startGain(t),this._oscillator.start(t),this}_stopSource(e){this._oscillator.stop(e)}setPeriodicWave(e){return this._oscillator.setPeriodicWave(e),this}get type(){return this._oscillator.type}set type(e){this._oscillator.type=e}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class pe extends Re{constructor(){const e=j(pe.getDefaults(),arguments,["frequency","type"]);super(e),this.name="Oscillator",this._oscillator=null,this.frequency=new xe({context:this.context,units:"frequency",value:e.frequency}),ae(this,"frequency"),this.detune=new xe({context:this.context,units:"cents",value:e.detune}),ae(this,"detune"),this._partials=e.partials,this._partialCount=e.partialCount,this._type=e.type,e.partialCount&&e.type!=="custom"&&(this._type=this.baseType+e.partialCount.toString()),this.phase=e.phase}static getDefaults(){return Object.assign(Re.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(e){const t=this.toSeconds(e),s=new hr({context:this.context,onended:()=>this.onstop(this)});this._oscillator=s,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(t)}_stop(e){const t=this.toSeconds(e);this._oscillator&&this._oscillator.stop(t)}_restart(e){const t=this.toSeconds(e);return this.log("restart",t),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(t),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return pe._periodicWaveCache.find(t=>t.phase===this._phase&&pg(t.partials,this._partials));{const e=pe._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=e?e.partialCount:this._partialCount,e}}get type(){return this._type}set type(e){this._type=e;const t=["sine","square","sawtooth","triangle"].indexOf(e)!==-1;if(this._phase===0&&t)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=e);else{const s=this._getCachedPeriodicWave();if(H(s)){const{partials:i,wave:r}=s;this._wave=r,this._partials=i,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[i,r]=this._getRealImaginary(e,this._phase),o=this.context.createPeriodicWave(i,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),pe._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:i,type:this._type,wave:this._wave}),pe._periodicWaveCache.length>100&&pe._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(e){this.partialCount&&this._type!=="custom"&&e!=="custom"?this.type=e+this.partialCount:this.type=e}get partialCount(){return this._partialCount}set partialCount(e){yt(e,0);let t=this._type;const s=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(s&&(t=s[1]),this._type!=="custom")e===0?this.type=t:this.type=t+e.toString();else{const i=new Float32Array(e);this._partials.forEach((r,o)=>i[o]=r),this._partials=Array.from(i),this.type=this._type}}_getRealImaginary(e,t){let i=2048;const r=new Float32Array(i),o=new Float32Array(i);let a=1;if(e==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,i=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(e);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),e=c[1],a=Math.max(a,2),i=a):this._partialCount=0,this._partials=[]}for(let c=1;c<i;++c){const l=2/(c*Math.PI);let h;switch(e){case"sine":h=c<=a?1:0,this._partials[c-1]=h;break;case"square":h=c&1?2*l:0,this._partials[c-1]=h;break;case"sawtooth":h=l*(c&1?1:-1),this._partials[c-1]=h;break;case"triangle":c&1?h=2*(l*l)*(c-1>>1&1?-1:1):h=0,this._partials[c-1]=h;break;case"custom":h=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+e)}h!==0?(r[c]=-h*Math.sin(t*c),o[c]=h*Math.cos(t*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(e,t,s){let i=0;const r=e.length;for(let o=0;o<r;o++)i+=e[o]*Math.cos(o*s)+t[o]*Math.sin(o*s);return i}getInitialValue(){const[e,t]=this._getRealImaginary(this._type,0);let s=0;const i=Math.PI*2,r=32;for(let o=0;o<r;o++)s=Math.max(this._inverseFFT(e,t,o/r*i),s);return fg(-this._inverseFFT(e,t,this._phase)/s,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(e){this._phase=e*Math.PI/180,this.type=this._type}asArray(){return me(this,arguments,void 0,function*(e=1024){return Xt(this,e)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}pe._periodicWaveCache=[];class Dg extends dn{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new Zn({context:this.context,mapping:e=>(e+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class pn extends xe{constructor(){const e=j(pn.getDefaults(),arguments,["value"]);super(e),this.name="Multiply",this.override=!1,this._mult=this.input=this.output=new Me({context:this.context,minValue:e.minValue,maxValue:e.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(e.value,0)}static getDefaults(){return Object.assign(xe.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Ws extends Re{constructor(){const e=j(Ws.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="AMOscillator",this._modulationScale=new Dg({context:this.context}),this._modulationNode=new Me({context:this.context}),this._carrier=new pe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new pe({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new pn({context:this.context,units:"positive",value:e.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),ae(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(pe.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){this._modulator.restart(e),this._carrier.restart(e)}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return me(this,arguments,void 0,function*(e=1024){return Xt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Bs extends Re{constructor(){const e=j(Bs.getDefaults(),arguments,["frequency","type","modulationType"]);super(e),this.name="FMOscillator",this._modulationNode=new Me({context:this.context,gain:0}),this._carrier=new pe({context:this.context,detune:e.detune,frequency:0,onstop:()=>this.onstop(this),phase:e.phase,type:e.type}),this.detune=this._carrier.detune,this.frequency=new xe({context:this.context,units:"frequency",value:e.frequency}),this._modulator=new pe({context:this.context,phase:e.phase,type:e.modulationType}),this.harmonicity=new pn({context:this.context,units:"positive",value:e.harmonicity}),this.modulationIndex=new pn({context:this.context,units:"positive",value:e.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),ae(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(pe.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(e){this._modulator.start(e),this._carrier.start(e)}_stop(e){this._modulator.stop(e),this._carrier.stop(e)}_restart(e){return this._modulator.restart(e),this._carrier.restart(e),this}get type(){return this._carrier.type}set type(e){this._carrier.type=e}get baseType(){return this._carrier.baseType}set baseType(e){this._carrier.baseType=e}get partialCount(){return this._carrier.partialCount}set partialCount(e){this._carrier.partialCount=e}get modulationType(){return this._modulator.type}set modulationType(e){this._modulator.type=e}get phase(){return this._carrier.phase}set phase(e){this._carrier.phase=e,this._modulator.phase=e}get partials(){return this._carrier.partials}set partials(e){this._carrier.partials=e}asArray(){return me(this,arguments,void 0,function*(e=1024){return Xt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class Kn extends Re{constructor(){const e=j(Kn.getDefaults(),arguments,["frequency","width"]);super(e),this.name="PulseOscillator",this._widthGate=new Me({context:this.context,gain:0}),this._thresh=new Zn({context:this.context,mapping:t=>t<=0?-1:1}),this.width=new xe({context:this.context,units:"audioRange",value:e.width}),this._triangle=new pe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),ae(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Re.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(e){e=this.toSeconds(e),this._triangle.start(e),this._widthGate.gain.setValueAtTime(1,e)}_stop(e){e=this.toSeconds(e),this._triangle.stop(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(0,e)}_restart(e){this._triangle.restart(e),this._widthGate.gain.cancelScheduledValues(e),this._widthGate.gain.setValueAtTime(1,e)}get phase(){return this._triangle.phase}set phase(e){this._triangle.phase=e}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(e){this._triangle.type=e}asArray(){return me(this,arguments,void 0,function*(e=1024){return Xt(this,e)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class zs extends Re{constructor(){const e=j(zs.getDefaults(),arguments,["frequency","type","spread"]);super(e),this.name="FatOscillator",this._oscillators=[],this.frequency=new xe({context:this.context,units:"frequency",value:e.frequency}),this.detune=new xe({context:this.context,units:"cents",value:e.detune}),this._spread=e.spread,this._type=e.type,this._phase=e.phase,this._partials=e.partials,this._partialCount=e.partialCount,this.count=e.count,ae(this,["frequency","detune"])}static getDefaults(){return Object.assign(pe.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(e){e=this.toSeconds(e),this._forEach(t=>t.start(e))}_stop(e){e=this.toSeconds(e),this._forEach(t=>t.stop(e))}_restart(e){this._forEach(t=>t.restart(e))}_forEach(e){for(let t=0;t<this._oscillators.length;t++)e(this._oscillators[t],t)}get type(){return this._type}set type(e){this._type=e,this._forEach(t=>t.type=e)}get spread(){return this._spread}set spread(e){if(this._spread=e,this._oscillators.length>1){const t=-e/2,s=e/(this._oscillators.length-1);this._forEach((i,r)=>i.detune.value=t+s*r)}}get count(){return this._oscillators.length}set count(e){if(yt(e,1),this._oscillators.length!==e){this._forEach(t=>t.dispose()),this._oscillators=[];for(let t=0;t<e;t++){const s=new pe({context:this.context,volume:-6-e*1.1,type:this._type,phase:this._phase+t/e*360,partialCount:this._partialCount,onstop:t===0?()=>this.onstop(this):K});this.type==="custom"&&(s.partials=this._partials),this.frequency.connect(s.frequency),this.detune.connect(s.detune),s.detune.overridden=!1,s.connect(this.output),this._oscillators[t]=s}this.spread=this._spread,this.state==="started"&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(e){this._phase=e,this._forEach((t,s)=>t.phase=this._phase+s/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(e){this._forEach(t=>t.baseType=e),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(e){this._partials=e,this._partialCount=this._partials.length,e.length&&(this._type="custom",this._forEach(t=>t.partials=e))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(e){this._partialCount=e,this._forEach(t=>t.partialCount=e),this._type=this._oscillators[0].type}asArray(){return me(this,arguments,void 0,function*(e=1024){return Xt(this,e)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(e=>e.dispose()),this}}class Us extends Re{constructor(){const e=j(Us.getDefaults(),arguments,["frequency","modulationFrequency"]);super(e),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new pn({context:this.context,value:2}),this._pulse=new Kn({context:this.context,frequency:e.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new pe({context:this.context,detune:e.detune,frequency:e.frequency,onstop:()=>this.onstop(this),phase:e.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),ae(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Re.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(e){e=this.toSeconds(e),this._modulator.start(e),this._pulse.start(e)}_stop(e){e=this.toSeconds(e),this._modulator.stop(e),this._pulse.stop(e)}_restart(e){this._modulator.restart(e),this._pulse.restart(e)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(e){this._modulator.phase=e}asArray(){return me(this,arguments,void 0,function*(e=1024){return Xt(this,e)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const ro={am:Ws,fat:zs,fm:Bs,oscillator:pe,pulse:Kn,pwm:Us};class ws extends Re{constructor(){const e=j(ws.getDefaults(),arguments,["frequency","type"]);super(e),this.name="OmniOscillator",this.frequency=new xe({context:this.context,units:"frequency",value:e.frequency}),this.detune=new xe({context:this.context,units:"cents",value:e.detune}),ae(this,["frequency","detune"]),this.set(e)}static getDefaults(){return Object.assign(pe.getDefaults(),Bs.getDefaults(),Ws.getDefaults(),zs.getDefaults(),Kn.getDefaults(),Us.getDefaults())}_start(e){this._oscillator.start(e)}_stop(e){this._oscillator.stop(e)}_restart(e){return this._oscillator.restart(e),this}get type(){let e="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(e=this._sourceType),e+this._oscillator.type}set type(e){e.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(2)):e.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=e.substr(3)):e==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):e==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=e)}get partials(){return this._oscillator.partials}set partials(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=e)}get partialCount(){return this._oscillator.partialCount}set partialCount(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=e)}set(e){return Reflect.has(e,"type")&&e.type&&(this.type=e.type),super.set(e),this}_createNewOscillator(e){if(e!==this._sourceType){this._sourceType=e;const t=ro[e],s=this.now();if(this._oscillator){const i=this._oscillator;i.stop(s),this.context.setTimeout(()=>i.dispose(),this.blockTime)}this._oscillator=new t({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(s)}}get phase(){return this._oscillator.phase}set phase(e){this._oscillator.phase=e}get sourceType(){return this._sourceType}set sourceType(e){let t="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(t=this._oscillator.type),e==="fm"?this.type="fm"+t:e==="am"?this.type="am"+t:e==="fat"?this.type="fat"+t:e==="oscillator"?this.type=t:e==="pulse"?this.type="pulse":e==="pwm"&&(this.type="pwm")}_getOscType(e,t){return e instanceof ro[t]}get baseType(){return this._oscillator.baseType}set baseType(e){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&e!=="pulse"&&e!=="pwm"&&(this._oscillator.baseType=e)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(e){this._getOscType(this._oscillator,"fat")&&Lt(e)&&(this._oscillator.count=e)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(e){this._getOscType(this._oscillator,"fat")&&Lt(e)&&(this._oscillator.spread=e)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(e){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&ut(e)&&(this._oscillator.modulationType=e)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(){return me(this,arguments,void 0,function*(e=1024){return Xt(this,e)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function sc(n,e=1/0){const t=new WeakMap;return function(s,i){Reflect.defineProperty(s,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){yt(r,n,e),t.set(this,r)}})}}function mt(n,e=1/0){const t=new WeakMap;return function(s,i){Reflect.defineProperty(s,i,{configurable:!0,enumerable:!0,get:function(){return t.get(this)},set:function(r){yt(this.toSeconds(r),n,e),t.set(this,r)}})}}class Hs extends Re{constructor(){const e=j(Hs.getDefaults(),arguments,["url","onload"]);super(e),this.name="Player",this._activeSources=new Set,this._buffer=new ne({onload:this._onload.bind(this,e.onload),onerror:e.onerror,reverse:e.reverse,url:e.url}),this.autostart=e.autostart,this._loop=e.loop,this._loopStart=e.loopStart,this._loopEnd=e.loopEnd,this._playbackRate=e.playbackRate,this.fadeIn=e.fadeIn,this.fadeOut=e.fadeOut}static getDefaults(){return Object.assign(Re.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:K,onerror:K,playbackRate:1,reverse:!1})}load(e){return me(this,void 0,void 0,function*(){return yield this._buffer.load(e),this._onload(),this})}_onload(e=K){e(),this.autostart&&this.start()}_onSourceEnd(e){this.onstop(this),this._activeSources.delete(e),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(e,t,s){return super.start(e,t,s),this}_start(e,t,s){this._loop?t=sn(t,this._loopStart):t=sn(t,0);const i=this.toSeconds(t),r=s;s=sn(s,Math.max(this._buffer.duration-i,0));let o=this.toSeconds(s);o=o/this._playbackRate,e=this.toSeconds(e);const a=new js({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(e+o),this._state.setStateAtTime("stopped",e+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&je(r)?a.start(e,i):a.start(e,i,o-this.toSeconds(this.fadeOut))}_stop(e){const t=this.toSeconds(e);this._activeSources.forEach(s=>s.stop(t))}restart(e,t,s){return super.restart(e,t,s),this}_restart(e,t,s){var i;(i=[...this._activeSources].pop())===null||i===void 0||i.stop(e),this._start(e,t,s)}seek(e,t){const s=this.toSeconds(t);if(this._state.getValueAtTime(s)==="started"){const i=this.toSeconds(e);this._stop(s),this._start(s,i)}return this}setLoopPoints(e,t){return this.loopStart=e,this.loopEnd=t,this}get loopStart(){return this._loopStart}set loopStart(e){this._loopStart=e,this.buffer.loaded&&yt(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopStart=e})}get loopEnd(){return this._loopEnd}set loopEnd(e){this._loopEnd=e,this.buffer.loaded&&yt(this.toSeconds(e),0,this.buffer.duration),this._activeSources.forEach(t=>{t.loopEnd=e})}get buffer(){return this._buffer}set buffer(e){this._buffer.set(e)}get loop(){return this._loop}set loop(e){if(this._loop!==e&&(this._loop=e,this._activeSources.forEach(t=>{t.loop=e}),e)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(e){this._playbackRate=e;const t=this.now(),s=this._state.getNextState("stopped",t);s&&s.implicitEnd&&(this._state.cancel(s.time),this._activeSources.forEach(i=>i.cancelStop())),this._activeSources.forEach(i=>{i.playbackRate.setValueAtTime(e,t)})}get reverse(){return this._buffer.reverse}set reverse(e){this._buffer.reverse=e}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(e=>e.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}Qe([mt(0)],Hs.prototype,"fadeIn",void 0);Qe([mt(0)],Hs.prototype,"fadeOut",void 0);class Tt extends B{constructor(){const e=j(Tt.getDefaults(),arguments,["attack","decay","sustain","release"]);super(e),this.name="Envelope",this._sig=new xe({context:this.context,value:0}),this.output=this._sig,this.input=void 0,this.attack=e.attack,this.decay=e.decay,this.sustain=e.sustain,this.release=e.release,this.attackCurve=e.attackCurve,this.releaseCurve=e.releaseCurve,this.decayCurve=e.decayCurve}static getDefaults(){return Object.assign(B.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(e,t){if(ut(e))return e;{let s;for(s in ss)if(ss[s][t]===e)return s;return e}}_setCurve(e,t,s){if(ut(s)&&Reflect.has(ss,s)){const i=ss[s];Ot(i)?e!=="_decayCurve"&&(this[e]=i[t]):this[e]=i}else if(He(s)&&e!=="_decayCurve")this[e]=s;else throw new Error("Envelope: invalid curve: "+s)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(e){this._setCurve("_attackCurve","In",e)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(e){this._setCurve("_releaseCurve","Out",e)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(e){this._setCurve("_decayCurve","Out",e)}triggerAttack(e,t=1){this.log("triggerAttack",e,t),e=this.toSeconds(e);let i=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(e);if(o>0){const a=1/i;i=(1-o)/a}if(i<this.sampleTime)this._sig.cancelScheduledValues(e),this._sig.setValueAtTime(t,e);else if(this._attackCurve==="linear")this._sig.linearRampTo(t,i,e);else if(this._attackCurve==="exponential")this._sig.targetRampTo(t,i,e);else{this._sig.cancelAndHoldAtTime(e);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,e,i,t)}if(r&&this.sustain<1){const a=t*this.sustain,c=e+i;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(e){this.log("triggerRelease",e),e=this.toSeconds(e);const t=this.getValueAtTime(e);if(t>0){const s=this.toSeconds(this.release);s<this.sampleTime?this._sig.setValueAtTime(0,e):this._releaseCurve==="linear"?this._sig.linearRampTo(0,s,e):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,s,e):(W(He(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(e),this._sig.setValueCurveAtTime(this._releaseCurve,e,s,t))}return this}getValueAtTime(e){return this._sig.getValueAtTime(e)}triggerAttackRelease(e,t,s=1){return t=this.toSeconds(t),this.triggerAttack(t,s),this.triggerRelease(t+this.toSeconds(e)),this}cancel(e){return this._sig.cancelScheduledValues(this.toSeconds(e)),this}connect(e,t=0,s=0){return nr(this,e,t,s),this}asArray(){return me(this,arguments,void 0,function*(e=1024){const t=e/this.context.sampleRate,s=new Qi(1,t,this.context.sampleRate),i=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=i+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:t*this.toSeconds(this.attack)/a,decay:t*this.toSeconds(this.decay)/a,release:t*this.toSeconds(this.release)/a,context:s}));return c._sig.toDestination(),c.triggerAttackRelease(t*(i+o)/a,0),(yield s.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}Qe([mt(0)],Tt.prototype,"attack",void 0);Qe([mt(0)],Tt.prototype,"decay",void 0);Qe([sc(0,1)],Tt.prototype,"sustain",void 0);Qe([mt(0)],Tt.prototype,"release",void 0);const ss=(()=>{let e,t;const s=[];for(e=0;e<128;e++)s[e]=Math.sin(e/127*(Math.PI/2));const i=[],r=6.4;for(e=0;e<127;e++){t=e/127;const d=Math.sin(t*(Math.PI*2)*r-Math.PI/2)+1;i[e]=d/10+t*.83}i[127]=1;const o=[],a=5;for(e=0;e<128;e++)o[e]=Math.ceil(e/127*a)/a;const c=[];for(e=0;e<128;e++)t=e/127,c[e]=.5*(1-Math.cos(Math.PI*t));const l=[];for(e=0;e<128;e++){t=e/127;const d=Math.pow(t,3)*4+.2,m=Math.cos(d*Math.PI*2*t);l[e]=Math.abs(m*(1-t))}function h(d){const m=new Array(d.length);for(let p=0;p<d.length;p++)m[p]=1-d[p];return m}function u(d){return d.slice(0).reverse()}return{bounce:{In:h(l),Out:l},cosine:{In:s,Out:u(s)},exponential:"exponential",linear:"linear",ripple:{In:i,Out:h(i)},sine:{In:c,Out:h(c)},step:{In:o,Out:h(o)}}})();class mn extends B{constructor(){const e=j(mn.getDefaults(),arguments);super(e),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=t=>this._original_triggerRelease(t),this._volume=this.output=new wn({context:this.context,volume:e.volume}),this.volume=this._volume.volume,ae(this,"volume")}static getDefaults(){return Object.assign(B.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let e=!1;return this._synced||(this._synced=!0,e=!0),e}_syncMethod(e,t){const s=this["_original_"+e]=this[e];this[e]=(...i)=>{const r=i[t],o=this.context.transport.schedule(a=>{i[t]=a,s.apply(this,i)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(e=>this.context.transport.clear(e)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(e,t,s,i){const r=this.toSeconds(s),o=this.toSeconds(t);return this.triggerAttack(e,r,i),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class fn extends mn{constructor(){const e=j(fn.getDefaults(),arguments);super(e),this.portamento=e.portamento,this.onsilence=e.onsilence}static getDefaults(){return Object.assign(mn.getDefaults(),{detune:0,onsilence:K,portamento:0})}triggerAttack(e,t,s=1){this.log("triggerAttack",e,t,s);const i=this.toSeconds(t);return this._triggerEnvelopeAttack(i,s),this.setNote(e,i),this}triggerRelease(e){this.log("triggerRelease",e);const t=this.toSeconds(e);return this._triggerEnvelopeRelease(t),this}setNote(e,t){const s=this.toSeconds(t),i=e instanceof qe?e.toFrequency():e;if(this.portamento>0&&this.getLevelAtTime(s)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(i,r,s)}else this.frequency.setValueAtTime(i,s);return this}}Qe([mt(0)],fn.prototype,"portamento",void 0);class ur extends Tt{constructor(){super(j(ur.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new Me({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class Ms extends fn{constructor(){const e=j(Ms.getDefaults(),arguments);super(e),this.name="Synth",this.oscillator=new ws(Object.assign({context:this.context,detune:e.detune,onstop:()=>this.onsilence(this)},e.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new ur(Object.assign({context:this.context},e.envelope)),this.oscillator.chain(this.envelope,this.output),ae(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(fn.getDefaults(),{envelope:Object.assign(io(Tt.getDefaults(),Object.keys(B.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(io(ws.getDefaults(),[...Object.keys(Re.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(e,t){if(this.envelope.triggerAttack(e,t),this.oscillator.start(e),this.envelope.sustain===0){const s=this.toSeconds(this.envelope.attack),i=this.toSeconds(this.envelope.decay);this.oscillator.stop(e+s+i)}}_triggerEnvelopeRelease(e){this.envelope.triggerRelease(e),this.oscillator.stop(e+this.toSeconds(this.envelope.release))}getLevelAtTime(e){return e=this.toSeconds(e),this.envelope.getValueAtTime(e)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class Gs extends Ms{constructor(){const e=j(Gs.getDefaults(),arguments);super(e),this.name="MembraneSynth",this.portamento=0,this.pitchDecay=e.pitchDecay,this.octaves=e.octaves,ae(this,["oscillator","envelope"])}static getDefaults(){return nn(fn.getDefaults(),Ms.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(e,t){const s=this.toSeconds(t),i=this.toFrequency(e instanceof qe?e.toFrequency():e),r=i*this.octaves;return this.oscillator.frequency.setValueAtTime(r,s),this.oscillator.frequency.exponentialRampToValueAtTime(i,s+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}Qe([sc(0)],Gs.prototype,"octaves",void 0);Qe([mt(0)],Gs.prototype,"pitchDecay",void 0);const ic=new Set;function dr(n){ic.add(n)}function rc(n,e){const t=`registerProcessor("${n}", ${e})`;ic.add(t)}const Ig=`
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
`;dr(Ig);const Rg=`
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
`;dr(Rg);const Fg=`
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
`;dr(Fg);const Vg="feedback-comb-filter",Lg=`
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
`;rc(Vg,Lg);class Qn extends mn{constructor(){const e=j(Qn.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");super(e),this.name="Sampler",this._activeSources=new Map;const t={};Object.keys(e.urls).forEach(s=>{const i=parseInt(s,10);if(W(ns(s)||Lt(i)&&isFinite(i),`url key is neither a note or midi pitch: ${s}`),ns(s)){const r=new qe(this.context,s).toMidi();t[r]=e.urls[s]}else Lt(i)&&isFinite(i)&&(t[i]=e.urls[i])}),this._buffers=new ar({urls:t,onload:e.onload,baseUrl:e.baseUrl,onerror:e.onerror}),this.attack=e.attack,this.release=e.release,this.curve=e.curve,this._buffers.loaded&&Promise.resolve().then(e.onload)}static getDefaults(){return Object.assign(mn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:K,onerror:K,release:.1,urls:{}})}_findClosest(e){let s=0;for(;s<96;){if(this._buffers.has(e+s))return-s;if(this._buffers.has(e-s))return s;s++}throw new Error(`No available buffers for note: ${e}`)}triggerAttack(e,t,s=1){return this.log("triggerAttack",e,t,s),Array.isArray(e)||(e=[e]),e.forEach(i=>{const r=nc(new qe(this.context,i).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,h=this._buffers.get(l),u=tc(c+a),d=new js({url:h,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:u}).connect(this.output);d.start(t,0,h.duration/u,s),He(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const m=this._activeSources.get(o),p=m.indexOf(d);p!==-1&&m.splice(p,1)}}}),this}triggerRelease(e,t){return this.log("triggerRelease",e,t),Array.isArray(e)||(e=[e]),e.forEach(s=>{const i=new qe(this.context,s).toMidi();if(this._activeSources.has(i)&&this._activeSources.get(i).length){const r=this._activeSources.get(i);t=this.toSeconds(t),r.forEach(o=>{o.stop(t)}),this._activeSources.set(i,[])}}),this}releaseAll(e){const t=this.toSeconds(e);return this._activeSources.forEach(s=>{for(;s.length;)s.shift().stop(t)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(e,t,s,i=1){const r=this.toSeconds(s);return this.triggerAttack(e,r,i),He(t)?(W(He(e),"notes must be an array when duration is array"),e.forEach((o,a)=>{const c=t[Math.min(a,t.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(e,r+this.toSeconds(t)),this}add(e,t,s){if(W(ns(e)||isFinite(e),`note must be a pitch or midi: ${e}`),ns(e)){const i=new qe(this.context,e).toMidi();this._buffers.add(i,t,s)}else this._buffers.add(e,t,s);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(e=>{e.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}Qe([mt(0)],Qn.prototype,"attack",void 0);Qe([mt(0)],Qn.prototype,"release",void 0);class pr extends B{constructor(){const e=j(pr.getDefaults(),arguments,["pan"]);super(e),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner,this.pan=new Z({context:this.context,param:this._panner.pan,value:e.pan,minValue:-1,maxValue:1}),this._panner.channelCount=e.channelCount,this._panner.channelCountMode="explicit",ae(this,"pan")}static getDefaults(){return Object.assign(B.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const qg="bit-crusher",jg=`
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
`;rc(qg,jg);class de extends B{constructor(){const e=j(de.getDefaults(),arguments,["solo"]);super(e),this.name="Solo",this.input=this.output=new Me({context:this.context}),de._allSolos.has(this.context)||de._allSolos.set(this.context,new Set),de._allSolos.get(this.context).add(this),this.solo=e.solo}static getDefaults(){return Object.assign(B.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(e){e?this._addSolo():this._removeSolo(),de._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){de._soloed.has(this.context)||de._soloed.set(this.context,new Set),de._soloed.get(this.context).add(this)}_removeSolo(){de._soloed.has(this.context)&&de._soloed.get(this.context).delete(this)}_isSoloed(){return de._soloed.has(this.context)&&de._soloed.get(this.context).has(this)}_noSolos(){return!de._soloed.has(this.context)||de._soloed.has(this.context)&&de._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),de._allSolos.get(this.context).delete(this),this._removeSolo(),this}}de._allSolos=new Map;de._soloed=new Map;class mr extends B{constructor(){const e=j(mr.getDefaults(),arguments,["pan","volume"]);super(e),this.name="PanVol",this._panner=this.input=new pr({context:this.context,pan:e.pan,channelCount:e.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new wn({context:this.context,volume:e.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=e.mute,ae(this,["pan","volume"])}static getDefaults(){return Object.assign(B.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(e){this._volume.mute=e}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class tn extends B{constructor(){const e=j(tn.getDefaults(),arguments,["volume","pan"]);super(e),this.name="Channel",this._solo=this.input=new de({solo:e.solo,context:this.context}),this._panVol=this.output=new mr({context:this.context,pan:e.pan,volume:e.volume,mute:e.mute,channelCount:e.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),ae(this,["pan","volume"])}static getDefaults(){return Object.assign(B.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(e){this._solo.solo=e}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(e){this._panVol.mute=e}_getBus(e){return tn.buses.has(e)||tn.buses.set(e,new Me({context:this.context})),tn.buses.get(e)}send(e,t=0){const s=this._getBus(e),i=new Me({context:this.context,units:"decibels",gain:t});return this.connect(i),i.connect(s),i}receive(e){return this._getBus(e).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}tn.buses=new Map;class fr extends B{constructor(){const e=j(fr.getDefaults(),arguments,["threshold","ratio"]);super(e),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor,this.threshold=new Z({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:e.threshold}),this.attack=new Z({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:e.attack}),this.release=new Z({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:e.release}),this.knee=new Z({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:e.knee}),this.ratio=new Z({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:e.ratio}),ae(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(B.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}function Wg(){return Le().now()}Le().transport;Le().destination;Le().destination;Le().listener;Le().draw;const $t=Le();function Bg(){return ne.loaded()}const zg=new fr({threshold:-6,ratio:20,attack:.002,release:.1,knee:3}).toDestination(),gr=new Qn({urls:{F1:"A_029__F1_5.m4a",B1:"A_035__B1_5.m4a",E2:"A_040__E2_5.m4a",A2:"A_045__A2_5.m4a",D3:"A_050__D3_5.m4a",G3:"A_055__G3_5.m4a",B3:"A_059__B3_5.m4a",D4:"A_062__D4_5.m4a",F4:"A_065__F4_5.m4a",B4:"A_071__B4_5.m4a",E5:"A_076__E5_5.m4a",A5:"A_081__A5_5.m4a",D6:"A_086__D6_5.m4a",G6:"A_091__G6_5.m4a"},baseUrl:"https://danigb.github.io/samples/jlearman/rhodes-mki/jRhodes3d-mono/",volume:-12,onload:()=>{console.log("Rhodes piano sampler loaded successfully!")},onerror:n=>{console.warn("Failed to load Rhodes piano sampler:",n)}}).connect(zg);function Ug(n,e=.35){if($t.state!=="running"){console.warn("Audio playback skipped: AudioContext is suspended. Click the audio icon in the header to enable.");return}try{gr.triggerAttackRelease(n,e)}catch(t){console.warn("Audio playback failed:",t)}}function Hg(n,e=.7,t){if($t.state!=="running"){console.warn("Audio playback skipped: AudioContext is suspended. Click the audio icon in the header to enable.");return}try{const s=n.length,i=s<=1?1:Math.max(.4,1/Math.sqrt(s)),r=Wg();n.forEach((o,a)=>{let c=0,l=1,h=e;if(t){const{minVelocity:u,maxVelocity:d,spread:m,microTiming:p,humanVariance:f,duration:g}=t;l=(u+Math.random()*(d-u))/127*i;const w=a*m*.1,M=(Math.random()-.5)*p*.05,k=(Math.random()-.5)*f*.03;c=Math.max(0,w+M+k),h=g*(1+(Math.random()-.5)*.2*f)}else l=i;gr.triggerAttackRelease(o,h,r+c,l)})}catch(s){console.warn("Audio playback failed:",s)}}async function Gg(){await yg(),await Bg(),gr.triggerAttackRelease("C4","8n")}async function Xg(){$t&&$t.rawContext&&await $t.rawContext.suspend()}function Yg(){return $t.state==="running"}function Zg(n){const e=$t.rawContext;if(e&&typeof e.addEventListener=="function"){const t=()=>n(e.state);return e.addEventListener("statechange",t),()=>e.removeEventListener("statechange",t)}return()=>{}}var Kg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,vr=(n,e,t,s)=>{for(var i=s>1?void 0:s?Qg(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&Kg(e,t,i),i};let Fn=class extends Ue{constructor(){super(...arguments),this.pads=[],this.recipe=[]}render(){const n=new Map(this.recipe.map((e,t)=>[e.index,t+1]));return $`
      <div class="shell">
        <div class="grid" role="grid" aria-label="Circuit pad grid">
          <!-- Column Header Labels -->
          <div class="grid-label corner" aria-hidden="true"></div>
          ${Array.from({length:8}).map((e,t)=>$`
            <div class="grid-label col-label" aria-hidden="true">${t+1}</div>
          `)}

          <!-- Row 4 (pads index 0..7) -->
          <div class="grid-label row-label" aria-hidden="true">4</div>
          ${this.pads.slice(0,8).map(e=>this.renderPad(e,n))}

          <!-- Row 3 (pads index 8..15) -->
          <div class="grid-label row-label" aria-hidden="true">3</div>
          ${this.pads.slice(8,16).map(e=>this.renderPad(e,n))}

          <!-- Row 2 (pads index 16..23) -->
          <div class="grid-label row-label" aria-hidden="true">2</div>
          ${this.pads.slice(16,24).map(e=>this.renderPad(e,n))}

          <!-- Row 1 (pads index 24..31) -->
          <div class="grid-label row-label" aria-hidden="true">1</div>
          ${this.pads.slice(24,32).map(e=>this.renderPad(e,n))}
        </div>
      </div>
    `}renderPad(n,e){if(!n.note)return $`<div class="gap" aria-hidden="true"></div>`;const t=e.get(n.index),s=n.index<16?"top-half":"bottom-half";return $`
      <div 
        class=${`pad ${n.state} ${s} ${t?"target":""}`} 
        role="button" 
        tabindex="0"
        aria-label=${this.getAriaLabel(n,t)}
        @click=${()=>this.onPadClick(n)}
        @keydown=${i=>this.onPadKeydown(i,n)}
      >
        <div class="pad-inner">
          ${t?$`<span class="step">${t}</span>`:null}
          <div>
            <div>${n.label}</div>
            <div class="meta">${n.row+1}:${n.col+1}</div>
          </div>
        </div>
      </div>
    `}onPadClick(n){n.midiNote&&(Ug(n.midiNote),this.dispatchEvent(new CustomEvent("pad-clicked",{detail:n,bubbles:!0,composed:!0})))}onPadKeydown(n,e){(n.key===" "||n.key==="Enter")&&(n.preventDefault(),this.onPadClick(e))}getAriaLabel(n,e){return n.note?e?`${n.note} row ${n.row+1} column ${n.col+1} voicing note ${e} of ${this.recipe.length} (lowest to highest)`:`${n.note} row ${n.row+1} column ${n.col+1} ${n.state}`:`empty slot row ${n.row+1} column ${n.col+1}`}};Fn.styles=Wt`
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
  `;vr([fe({attribute:!1})],Fn.prototype,"pads",2);vr([fe({attribute:!1})],Fn.prototype,"recipe",2);Fn=vr([Bt("circuit-grid")],Fn);const ht=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],is={minor:"Natural Minor",major:"Major",dorian:"Dorian",phrygian:"Phrygian",mixolydian:"Mixolydian","melodic minor":"Melodic Minor","harmonic minor":"Harmonic Minor","bebop dorian":"Bebop Dorian",blues:"Blues","minor pentatonic":"Minor Pent.","hungarian minor":"Hungarian Minor","ukrainian dorian":"Ukrainian Dorian",marva:"Marva",todi:"Todi","whole tone":"Whole Tone",chromatic:"Chromatic"},oo=["minor","major","dorian","phrygian","mixolydian","melodic minor","harmonic minor","bebop dorian","blues","minor pentatonic","hungarian minor","ukrainian dorian","marva","todi","whole tone","chromatic"],Js=ht,Jg=["triad","seventh","spread"],e0=5,t0=3,n0=[0,2,4,5,7,9,11,12],s0=[null,1,3,null,6,8,10,null];function ao(n,e){const t=ct(e.key)??"C",s=ht.indexOf(t),i=c0(e.key,e.scale),r=h0(t,i),o=new Set((n?.notes??[]).map(u=>ct(u)).filter(_r)),a=4,c=[];let l=a,h=-1;for(let u=0;u<32;u++){const d=r[u%r.length],m=ht.indexOf(d);h!==-1&&m<h&&l++,c.push(`${d}${l}`),h=m}return Array.from({length:32},(u,d)=>{const m=Math.floor(d/8),p=d%8,f=3-m,g=p+f*t0,_=p+f*e0,w=e.mode==="collapsed"?g:_;let M="",k="";if(e.mode==="collapsed"){const C=c[w%c.length]??"";k=C,M=ct(On(C))??""}else{const C=(m+2)%4,A=Math.floor(C/2)*12,S=C%2===0?s0[p]:n0[p];if(S!==null&&s!==-1){const N=S+A,I=Ut(`${t}${a}`,Ai(N));k=I,M=ct(On(I))??""}}const v=o.has(M),y=M===t,x=i.includes(M);let b="dim";return y?b="active":v?b="lit":x&&(b="scale"),{index:d,row:m,col:p,offset:w,note:M,label:M||" ",state:b,inChord:v,isRoot:y,inScale:x,midiNote:k}})}function co(n,e,t,s=0,i=4){return n?i0(n,t).map((a,c)=>o0(a,c,e,t,s)).filter(a=>!!a).slice(0,i).map(a=>({note:a.note,row:a.row,col:a.col,index:a.index,offset:a.offset})).sort((a,c)=>a.offset-c.offset).map(({note:a,row:c,col:l,index:h})=>({note:a,row:c,col:l,index:h})):[]}function i0(n,e){const t=new Map,s=[],i=ct(n.tonic);for(let h=0;h<n.notes.length;h+=1){const u=ct(n.notes[h]);if(!u)continue;s.includes(u)||s.push(u);const d=a0(n.intervals[h]);d!==null&&!t.has(d)&&t.set(d,u)}const r={triad:[3,5],seventh:[3,5,7],spread:[5,7,3]},o={triad:3,seventh:4,spread:4},a=Array.from(new Set([i,...r[e].map(h=>t.get(h)).filter(h=>!!h)].filter(h=>!!h)));if(a.length>=o[e])return a.slice(0,o[e]);const c=r0(n,e);return Array.from(new Set([...a,...c,...s])).slice(0,o[e])}function r0(n,e){let t=[];try{const a=Vr(n.symbol);t=Array.isArray(a)?a:[]}catch{t=[]}if(t.length===0&&n.tonic&&n.quality)try{const a=Vr(`${n.tonic}${n.quality}`);t=Array.isArray(a)?a:[]}catch{t=[]}const s=t.filter(a=>typeof a=="string").map(a=>ct(a)).filter(_r),i=Array.from(new Set(s));if(i.length===0)return[];if(e==="triad")return i.slice(0,3);if(e==="seventh")return i.slice(0,4);const o=[0,2,3,1].map(a=>i[a]).filter(a=>!!a);return Array.from(new Set(o)).slice(0,4)}function o0(n,e,t,s,i=0){const r=t.filter(c=>c.note===n).sort((c,l)=>c.offset-l.offset);if(r.length===0)return;const o=e<i;if(s==="spread"){let c=e;o&&(c+=1);const l=Math.min(c,r.length-1);return r[l]}const a=o?Math.min(1,r.length-1):0;return r[a]}function a0(n){if(!n)return null;const e=n.match(/^(\d+)/);if(!e)return null;const t=Number.parseInt(e[1],10);return Number.isFinite(t)?t:null}function c0(n,e){const s=Rh(`${n} ${e}`).notes.map(i=>ct(i)).filter(_r);return s.length===0?["C","D","E","F","G","A","B"]:Array.from(new Set(s))}function l0(n){const e=ht.indexOf(n);return e===-1?ht:oc(ht,e)}function h0(n,e){const t=ht.indexOf(n),s=e.slice().sort((i,r)=>lo(i,t)-lo(r,t));return s.length===0?l0(n):s.includes(n)?oc(s,s.indexOf(n)):[n,...s]}function lo(n,e){const t=ht.indexOf(n);return t===-1||e===-1?Number.MAX_SAFE_INTEGER:(t-e+12)%12}function oc(n,e){return[...n.slice(e),...n.slice(0,e)]}function ct(n){if(!n)return null;const e=On(n);if(!e)return null;const t=Si(e);return ht.includes(t)?t:e}function _r(n){return n!==null}const Ts=350,ei=new Uint8Array([0,32,41]),u0=100,ks=46,Ve=64,_e=70,rn=79;function ho(n){if(n.length!==Ts)throw new Error(`Invalid patch dump length. Expected ${Ts}, got ${n.length}`);const e=new Uint8Array(n),t=i=>({wave:e[i],waveInterpolate:e[i+1],pulseWidthIndex:e[i+2],virtualSyncDepth:e[i+3],density:e[i+4],densityDetune:e[i+5],semitones:e[i+6],cents:e[i+7],pitchBend:e[i+8]}),s=i=>({velocityOrDelay:e[i],attack:e[i+1],decay:e[i+2],sustain:e[i+3],release:e[i+4]});return{rawData:e,oscillators:[t(ks),t(ks+9)],mixer:{osc1Level:e[Ve],osc2Level:e[Ve+1],ringModLevel12:e[Ve+2],noiseLevel:e[Ve+3],preFxLevel:e[Ve+4],postFxLevel:e[Ve+5]},filter:{routing:e[_e],drive:e[_e+1],driveType:e[_e+2],type:e[_e+3],frequency:e[_e+4],track:e[_e+5],resonance:e[_e+6],qNormalise:e[_e+7],env2ToFreq:e[_e+8]},envelopes:[s(rn),s(rn+5),s(rn+10)]}}function d0(n){const e=new Uint8Array(n.rawData),t=(i,r)=>{e[i]=r.wave,e[i+1]=r.waveInterpolate,e[i+2]=r.pulseWidthIndex,e[i+3]=r.virtualSyncDepth,e[i+4]=r.density,e[i+5]=r.densityDetune,e[i+6]=r.semitones,e[i+7]=r.cents,e[i+8]=r.pitchBend},s=(i,r)=>{e[i]=r.velocityOrDelay,e[i+1]=r.attack,e[i+2]=r.decay,e[i+3]=r.sustain,e[i+4]=r.release};return t(ks,n.oscillators[0]),t(ks+9,n.oscillators[1]),e[Ve]=n.mixer.osc1Level,e[Ve+1]=n.mixer.osc2Level,e[Ve+2]=n.mixer.ringModLevel12,e[Ve+3]=n.mixer.noiseLevel,e[Ve+4]=n.mixer.preFxLevel,e[Ve+5]=n.mixer.postFxLevel,e[_e]=n.filter.routing,e[_e+1]=n.filter.drive,e[_e+2]=n.filter.driveType,e[_e+3]=n.filter.type,e[_e+4]=n.filter.frequency,e[_e+5]=n.filter.track,e[_e+6]=n.filter.resonance,e[_e+7]=n.filter.qNormalise,e[_e+8]=n.filter.env2ToFreq,s(rn,n.envelopes[0]),s(rn+5,n.envelopes[1]),s(rn+10,n.envelopes[2]),e[6]=0,e}function p0(n=0){return new Uint8Array([240,ei[0],ei[1],ei[2],1,u0,64,n,247])}var m0=Object.defineProperty,f0=Object.getOwnPropertyDescriptor,kt=(n,e,t,s)=>{for(var i=s>1?void 0:s?f0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&m0(e,t,i),i};let tt=class extends Ue{constructor(){super(...arguments),this.value=0,this.min=0,this.max=127,this.label="",this.centered=!1,this.isDragging=!1,this.startY=0,this.startValue=0,this.handlePointerDown=n=>{this.isDragging=!0,this.startY=n.clientY,this.startValue=this.value,this.container.setPointerCapture(n.pointerId),this.container.addEventListener("pointermove",this.handlePointerMove),this.container.addEventListener("pointerup",this.handlePointerUp),this.container.addEventListener("pointercancel",this.handlePointerUp)},this.handlePointerMove=n=>{if(!this.isDragging)return;const e=this.startY-n.clientY,t=(this.max-this.min)/100;let s=this.startValue+Math.round(e*t);s=Math.max(this.min,Math.min(this.max,s)),s!==this.value&&(this.value=s,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))},this.handlePointerUp=n=>{this.isDragging=!1,this.container.releasePointerCapture(n.pointerId),this.container.removeEventListener("pointermove",this.handlePointerMove),this.container.removeEventListener("pointerup",this.handlePointerUp),this.container.removeEventListener("pointercancel",this.handlePointerUp)}}renderSvg(){const e=2*Math.PI*24,t=e*.75,s=e*.25,i=(this.value-this.min)/(this.max-this.min);let r=`0 ${e}`;if(this.centered){const a=t/2,c=(i-.5)*t;c>0?r=`0 ${a+s/2} ${c} ${e}`:r=`0 ${a+s/2+c} ${Math.abs(c)} ${e}`}else r=`${i*t} ${e}`;const o=(this.centered,-135+i*270);return $`
      <svg class="knob-svg" viewBox="0 0 60 60">
        <circle 
          class="track" 
          cx="30" cy="30" r="${24}" 
          stroke-dasharray="${t} ${s}" 
          stroke-dashoffset="${-s/2}" 
          transform="rotate(135, 30, 30)" 
        />
        <circle 
          class="progress" 
          cx="30" cy="30" r="${24}" 
          stroke-dasharray="${r}" 
          stroke-dashoffset="${-s/2}" 
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
    `}};tt.styles=Wt`
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
  `;kt([fe({type:Number})],tt.prototype,"value",2);kt([fe({type:Number})],tt.prototype,"min",2);kt([fe({type:Number})],tt.prototype,"max",2);kt([fe({type:String})],tt.prototype,"label",2);kt([fe({type:Boolean})],tt.prototype,"centered",2);kt([X()],tt.prototype,"isDragging",2);kt([vo(".knob-container")],tt.prototype,"container",2);tt=kt([Bt("knob-element")],tt);var g0=Object.defineProperty,v0=Object.getOwnPropertyDescriptor,At=(n,e,t,s)=>{for(var i=s>1?void 0:s?v0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&g0(e,t,i),i};let nt=class extends Ue{constructor(){super(...arguments),this.value=0,this.min=0,this.max=127,this.label="",this.horizontal=!1,this.isDragging=!1,this.handlePointerDown=n=>{this.isDragging=!0,this.container.setPointerCapture(n.pointerId),this.updateValueFromEvent(n),this.container.addEventListener("pointermove",this.handlePointerMove),this.container.addEventListener("pointerup",this.handlePointerUp),this.container.addEventListener("pointercancel",this.handlePointerUp)},this.handlePointerMove=n=>{this.isDragging&&this.updateValueFromEvent(n)},this.handlePointerUp=n=>{this.isDragging=!1,this.container.releasePointerCapture(n.pointerId),this.container.removeEventListener("pointermove",this.handlePointerMove),this.container.removeEventListener("pointerup",this.handlePointerUp),this.container.removeEventListener("pointercancel",this.handlePointerUp)}}updateValueFromEvent(n){const e=this.container.getBoundingClientRect();let t=0;this.horizontal?t=Math.max(0,Math.min(n.clientX-e.left,e.width))/e.width:t=1-Math.max(0,Math.min(n.clientY-e.top,e.height))/e.height;let s=Math.round(this.min+t*(this.max-this.min));s!==this.value&&(this.value=s,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))}render(){const n=(this.value-this.min)/(this.max-this.min)*100,e=this.horizontal?`width: ${n}%`:`height: ${n}%`,t=this.horizontal?`left: ${n}%`:`bottom: ${n}%`,s=$`
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
          ${s}
        </div>
      `:$`
      ${s}
      ${this.label?$`<div class="label">${this.label}</div>`:""}
    `}};nt.styles=Wt`
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
  `;At([fe({type:Number})],nt.prototype,"value",2);At([fe({type:Number})],nt.prototype,"min",2);At([fe({type:Number})],nt.prototype,"max",2);At([fe({type:String})],nt.prototype,"label",2);At([fe({type:Boolean})],nt.prototype,"horizontal",2);At([X()],nt.prototype,"isDragging",2);At([vo(".slider-container")],nt.prototype,"container",2);nt=At([Bt("slider-element")],nt);var _0=Object.defineProperty,b0=Object.getOwnPropertyDescriptor,Jn=(n,e,t,s)=>{for(var i=s>1?void 0:s?b0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&_0(e,t,i),i};let jt=class extends Ue{constructor(){super(...arguments),this.patch=null,this.midiConnected=!1,this.activeSlot=0,this.viewMode="basic"}updateParam(n,e){this.patch&&this.dispatchEvent(new CustomEvent("patch-change",{detail:{path:n,value:e},bubbles:!0,composed:!0}))}handleRequestDump(){this.dispatchEvent(new CustomEvent("request-dump",{bubbles:!0,composed:!0}))}renderOscillatorPanel(n,e){if(!this.patch)return"";const t=this.patch.oscillators[n],s=this.viewMode==="advanced";return $`
      <div class="panel">
        <h3 class="panel-title">${e}</h3>
        <div class="row">
          <knob-element 
            label="Type" 
            .min=${0} .max=${29} 
            .value=${t.wave}
            @change=${i=>this.updateParam(`oscillators.${n}.wave`,i.detail.value)}
          ></knob-element>
          
          ${n===0?$`
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
            @change=${i=>this.updateParam(`oscillators.${n}.waveInterpolate`,i.detail.value)}
          ></knob-element>
          
          ${s?$`
            <knob-element label="Pulse Width" .min=${0} .max=${127} .value=${t.pulseWidthIndex} @change=${i=>this.updateParam(`oscillators.${n}.pulseWidthIndex`,i.detail.value)}></knob-element>
            <knob-element label="Sync Depth" .min=${0} .max=${127} .value=${t.virtualSyncDepth} @change=${i=>this.updateParam(`oscillators.${n}.virtualSyncDepth`,i.detail.value)}></knob-element>
            <knob-element label="Density" .min=${0} .max=${127} .value=${t.density} @change=${i=>this.updateParam(`oscillators.${n}.density`,i.detail.value)}></knob-element>
            <knob-element label="Detune" .min=${0} .max=${127} .value=${t.densityDetune} @change=${i=>this.updateParam(`oscillators.${n}.densityDetune`,i.detail.value)}></knob-element>
            <knob-element label="Semitones" .min=${0} .max=${127} .value=${t.semitones} @change=${i=>this.updateParam(`oscillators.${n}.semitones`,i.detail.value)}></knob-element>
            <knob-element label="Cents" .min=${0} .max=${127} .value=${t.cents} @change=${i=>this.updateParam(`oscillators.${n}.cents`,i.detail.value)}></knob-element>
            <knob-element label="Pitch Bend" .min=${0} .max=${127} .value=${t.pitchBend} @change=${i=>this.updateParam(`oscillators.${n}.pitchBend`,i.detail.value)}></knob-element>
          `:""}
        </div>
      </div>
    `}renderMixerPanel(){if(!this.patch||this.viewMode!=="advanced")return"";const n=this.patch.mixer;return $`
      <div class="panel">
        <h3 class="panel-title">Mixer (Advanced)</h3>
        <div class="row">
          <knob-element label="Osc 1" .min=${0} .max=${127} .value=${n.osc1Level} @change=${e=>this.updateParam("mixer.osc1Level",e.detail.value)}></knob-element>
          <knob-element label="Osc 2" .min=${0} .max=${127} .value=${n.osc2Level} @change=${e=>this.updateParam("mixer.osc2Level",e.detail.value)}></knob-element>
          <knob-element label="Ring Mod" .min=${0} .max=${127} .value=${n.ringModLevel12} @change=${e=>this.updateParam("mixer.ringModLevel12",e.detail.value)}></knob-element>
          <knob-element label="Noise" .min=${0} .max=${127} .value=${n.noiseLevel} @change=${e=>this.updateParam("mixer.noiseLevel",e.detail.value)}></knob-element>
          <knob-element label="Pre FX" .min=${0} .max=${127} .value=${n.preFxLevel} @change=${e=>this.updateParam("mixer.preFxLevel",e.detail.value)}></knob-element>
          <knob-element label="Post FX" .min=${0} .max=${127} .value=${n.postFxLevel} @change=${e=>this.updateParam("mixer.postFxLevel",e.detail.value)}></knob-element>
        </div>
      </div>
    `}renderFilterPanel(){if(!this.patch)return"";const n=this.patch.filter,e=this.viewMode==="advanced";return $`
      <div class="panel">
        <h3 class="panel-title">Filter</h3>
        <div class="row" style="align-items: flex-start; justify-content: space-around;">
          <div class="column">
            <knob-element 
              label="Drive" 
              .min=${0} .max=${127} 
              .value=${n.drive}
              @change=${t=>this.updateParam("filter.drive",t.detail.value)}
            ></knob-element>
            ${e?$`<knob-element label="Drive Type" .min=${0} .max=${6} .value=${n.driveType} @change=${t=>this.updateParam("filter.driveType",t.detail.value)}></knob-element>`:""}
          </div>

          <div class="column" style="height: 100%; flex: 1; max-width: 300px;">
            <slider-element
              label="Cutoff"
              .min=${0} .max=${127}
              .value=${n.frequency}
              @change=${t=>this.updateParam("filter.frequency",t.detail.value)}
            ></slider-element>
          </div>

          <div class="column">
            <knob-element 
              label="Resonance" 
              .min=${0} .max=${127} 
              .value=${n.resonance}
              @change=${t=>this.updateParam("filter.resonance",t.detail.value)}
            ></knob-element>
            <knob-element 
              label="Type" 
              .min=${0} .max=${5} 
              .value=${n.type}
              .centered=${!0}
              @change=${t=>this.updateParam("filter.type",t.detail.value)}
            ></knob-element>
          </div>
          
          ${e?$`
            <div class="column">
              <knob-element label="Routing" .min=${0} .max=${2} .value=${n.routing} @change=${t=>this.updateParam("filter.routing",t.detail.value)}></knob-element>
              <knob-element label="Track" .min=${0} .max=${127} .value=${n.track} @change=${t=>this.updateParam("filter.track",t.detail.value)}></knob-element>
            </div>
            <div class="column">
              <knob-element label="Q Norm" .min=${0} .max=${127} .value=${n.qNormalise} @change=${t=>this.updateParam("filter.qNormalise",t.detail.value)}></knob-element>
              <knob-element label="Env2>Freq" .min=${0} .max=${127} .value=${n.env2ToFreq} @change=${t=>this.updateParam("filter.env2ToFreq",t.detail.value)}></knob-element>
            </div>
          `:""}
        </div>
      </div>
    `}renderEnvelopePanel(n,e){if(!this.patch)return"";const t=this.patch.envelopes[n],s=this.viewMode==="advanced";return $`
      <div class="panel">
        <h3 class="panel-title">${e}</h3>
        <div class="column" style="align-items: stretch;">
          ${s?$`
            <slider-element horizontal label="Vel/Delay" .min=${0} .max=${127} .value=${t.velocityOrDelay} @change=${i=>this.updateParam(`envelopes.${n}.velocityOrDelay`,i.detail.value)}></slider-element>
          `:""}
          <slider-element horizontal label="Attack" .min=${0} .max=${127} .value=${t.attack} @change=${i=>this.updateParam(`envelopes.${n}.attack`,i.detail.value)}></slider-element>
          <slider-element horizontal label="Decay" .min=${0} .max=${127} .value=${t.decay} @change=${i=>this.updateParam(`envelopes.${n}.decay`,i.detail.value)}></slider-element>
          <slider-element horizontal label="Sustain" .min=${0} .max=${127} .value=${t.sustain} @change=${i=>this.updateParam(`envelopes.${n}.sustain`,i.detail.value)}></slider-element>
          <slider-element horizontal label="Release" .min=${0} .max=${127} .value=${t.release} @change=${i=>this.updateParam(`envelopes.${n}.release`,i.detail.value)}></slider-element>
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
            ${Array.from({length:16}).map((n,e)=>$`
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
    `}};jt.styles=Wt`
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
  `;Jn([fe({type:Object})],jt.prototype,"patch",2);Jn([fe({type:Boolean})],jt.prototype,"midiConnected",2);Jn([X()],jt.prototype,"activeSlot",2);Jn([X()],jt.prototype,"viewMode",2);jt=Jn([Bt("circuit-patch-editor")],jt);var y0=Object.defineProperty,x0=Object.getOwnPropertyDescriptor,te=(n,e,t,s)=>{for(var i=s>1?void 0:s?x0(e,t):e,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(e,t,i):o(i))||i);return s&&i&&y0(e,t,i),i};let J=class extends Ue{constructor(){super(...arguments),this.theme=localStorage.getItem("circuit-chords.theme")||"dark",this.audioActive=!1,this.audioCleanup=null,this.activeTab="grid",this.activePatch=null,this.progression=[],this.originalKey="C",this.activeIndex=0,this.hideScaleWarningForNotes="",this.config={key:"C",scale:"minor",mode:"collapsed"},this.voicing="triad",this.autoPlay=!0,this.transposeProgression=!0,this.inversion=0,this.source="",this.showSettings=!1,this.showHelp=!1,this.humanLoaded=!1,this.showHuman=!1,this.humanState=null,this.showScaleWarnings=localStorage.getItem("circuit-chords.showScaleWarnings")!=="false",this.midiConnected=!1,this.midiDevices=[],this.selectedMidiDevice="",this.activeMidiDevice=null,this.selectedMidiChannel=1,this.midiAccess=null,this.activeMidiTimeouts=new Map}get isDebugMode(){return new URLSearchParams(window.location.search).has("debug")}get isCircuitTracksConnected(){return this.isDebugMode?!0:this.midiConnected&&!!this.activeMidiDevice&&this.activeMidiDevice.toLowerCase().includes("circuit tracks")}getOrCreateMockPatch(){const n=new Uint8Array(Ts);return n[45]=1,n[46]=0,n[64]=64,n[70]=1,n[71]=64,n[73]=64,n[79]=10,n[80]=50,n[81]=64,n[82]=20,ho(n)}toggleHelp(){this.showHelp=!this.showHelp,this.showHelp&&(this.showSettings=!1,this.showHuman=!1)}toggleSettings(){this.showSettings=!this.showSettings,this.showSettings&&(this.showHelp=!1,this.showHuman=!1)}toggleHuman(){this.showHuman=!this.showHuman,this.showHuman&&(this.showHelp=!1,this.showSettings=!1)}handleHumanChange(n){this.humanState=n.detail}handleHumanPreview(n){this.humanState=n.detail,this.playActiveVoicing()}toggleScaleWarnings(n){this.showScaleWarnings=n,localStorage.setItem("circuit-chords.showScaleWarnings",String(n))}async toggleAudio(){try{this.audioActive?await Xg():await Gg()}catch(n){console.warn("Failed to toggle audio:",n)}}toggleTheme(){this.theme=this.theme==="dark"?"light":"dark",localStorage.setItem("circuit-chords.theme",this.theme),this.classList.toggle("theme-light",this.theme==="light")}connectedCallback(){super.connectedCallback(),this.isDebugMode&&(this.activePatch=this.getOrCreateMockPatch()),this.loadDefaultProgression(),this.initMidi(),import("https://warmsynths.github.io/human-midi/human-engine.js").then(()=>{this.humanLoaded=!0}).catch(t=>{console.warn("Could not load human panel:",t)}),this.classList.toggle("theme-light",this.theme==="light"),this.audioActive=Yg(),this.audioCleanup=Zg(t=>{this.audioActive=t==="running"})}disconnectedCallback(){this.audioCleanup&&this.audioCleanup(),super.disconnectedCallback()}initMidi(){typeof navigator<"u"&&"requestMIDIAccess"in navigator&&navigator.requestMIDIAccess({sysex:!0}).then(n=>{this.midiAccess=n,this.updateMidiStatus(n),n.onstatechange=()=>{this.updateMidiStatus(n)}}).catch(n=>{console.warn("MIDI access request failed:",n),this.midiConnected=!1,this.midiDevices=[]})}updateMidiStatus(n){const e=[];n&&n.inputs&&n.inputs.forEach(t=>{t.state==="connected"&&t.name&&!e.includes(t.name)&&e.push(t.name)}),n&&n.outputs&&n.outputs.forEach(t=>{t.state==="connected"&&t.name&&!e.includes(t.name)&&e.push(t.name)}),this.midiDevices=e,(this.selectedMidiDevice===""||!e.includes(this.selectedMidiDevice))&&(this.selectedMidiDevice=e.length>0?e[0]:""),this.activeMidiDevice!==null&&!e.includes(this.activeMidiDevice)?(this.activeMidiDevice=null,this.midiConnected=!1):this.activeMidiDevice!==null?this.midiConnected=!0:this.midiConnected=!1}connectMidiDevice(){this.selectedMidiDevice&&(this.activeMidiDevice=this.selectedMidiDevice,this.midiConnected=!0,this.midiAccess&&this.midiAccess.inputs.forEach(n=>{n.name===this.activeMidiDevice&&(n.onmidimessage=this.handleMidiMessage.bind(this))}))}handleMidiMessage(n){const e=n.data;if(e.length===Ts&&e[0]===240)try{this.activePatch=ho(e)}catch(t){console.warn("Failed to parse sysex patch dump",t)}}sendSysexCommand(n){this.midiAccess&&this.activeMidiDevice&&this.midiAccess.outputs.forEach(e=>{e.name===this.activeMidiDevice&&e.send(n)})}handlePatchChange(n){if(!this.activePatch)return;const{path:e,value:t}=n.detail,s={...this.activePatch};s.oscillators=[{...s.oscillators[0]},{...s.oscillators[1]}],s.filter={...s.filter},s.mixer={...s.mixer},s.envelopes=[{...s.envelopes[0]},{...s.envelopes[1]},{...s.envelopes[2]}];const i=e.split(".");let r=s;for(let a=0;a<i.length-1;a++)r=r[i[a]];r[i[i.length-1]]=t,this.activePatch=s;const o=d0(s);this.sendSysexCommand(o)}handleRequestDump(){const n=p0(0);this.sendSysexCommand(n)}handleLoadSlot(n){const e=n.detail.slot;this.midiAccess&&this.activeMidiDevice&&(this.midiAccess.outputs.forEach(t=>{t.name===this.activeMidiDevice&&t.send([192,e])}),setTimeout(()=>{this.handleRequestDump()},50))}disconnectMidiDevice(){this.activeMidiDevice=null,this.midiConnected=!1}loadDefaultProgression(){const n="Cmaj7 Am7 Dm7 G7",e=n.match(/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g)||[],t=[];for(const s of e){const i=Ge(s);!i.empty&&i.notes.length>0&&t.push({symbol:s,tonic:i.tonic,quality:i.quality,notes:i.notes,intervals:i.intervals,aliases:i.aliases})}if(t.length>0){this.progression=t,this.source=n,this.activeIndex=0;const s=t[0],i=this.normalizeKey(s?.tonic)??this.config.key;this.originalKey=i;const o=s?.quality?.toLowerCase().includes("minor")||s?.symbol?.includes("m")?"minor":"major";this.config={...this.config,key:i,scale:o}}}render(){const n=this.getTransposedProgression(),e=n[this.activeIndex]??null,t=ao(e,this.config),s=co(e,t,this.voicing,this.inversion),i=e?e.notes.map(o=>ct(o)).filter(Boolean):[],r=e&&this.config.mode==="collapsed"?i.filter(o=>!t.some(a=>a.note===o)):[];return $`
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
            <!-- Audio State Button -->
            <button class="audio-btn ${this.audioActive?"active":""}" @click=${this.toggleAudio} title="${this.audioActive?"Disable Audio":"Enable Audio"}">
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
              <button class="audio-btn ${this.showHuman?"active":""}" @click=${this.toggleHuman} title="Toggle Human Settings">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
            `:null}
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
              ${Jg.map(o=>$`
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
          ${r.length>0&&this.showScaleWarnings&&this.hideScaleWarningForNotes!==r.join(",")?$`
            <div class="scale-warning" style="display: flex; align-items: center; justify-content: space-between;">
              <div style="display: flex; align-items: center;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right: 6px; flex-shrink: 0;">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
                <span>Chord note(s) (${r.join(", ")}) outside scale are hidden in Scale Collapse mode. Switch to Chromatic mode to play.</span>
              </div>
              <div style="display: flex; align-items: center;">
                <label style="display: flex; align-items: center; cursor: pointer; font-size: 0.85rem; opacity: 0.8; margin-right: 12px; margin-bottom: 0;">
                  <input type="checkbox" @change=${o=>this.toggleScaleWarnings(!o.target.checked)} style="margin-right: 6px; cursor: pointer;">
                  Don't show again
                </label>
                <button 
                  @click=${()=>this.hideScaleWarningForNotes=r.join(",")}
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
            <circuit-grid .pads=${t} .recipe=${s} @pad-clicked=${o=>this.onPadClicked(o)}></circuit-grid>
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
                  ${["","C#","D#","","F#","G#","A#",""].map(o=>o===""?$`
                    <div class="picker-pad pad-root pad-dim" aria-hidden="true"></div>
                  `:$`
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
                <div class="pad-row keynote-row">
                  ${["C","D","E","F","G","A","B",""].map(o=>o===""?$`
                    <div class="picker-pad pad-root pad-dim" aria-hidden="true"></div>
                  `:$`
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
                <div class="pad-row scale-row">
                  ${oo.slice(0,8).map(o=>$`
                    <button
                      class="picker-pad pad-scale ${this.config.scale===o?"pad-active":""}"
                      @click=${()=>this.onScaleChange(o)}
                      title="Scale: ${o}"
                      aria-label="Scale ${is[o]??o}">
                      ${is[o]??o}
                    </button>
                  `)}
                </div>
                <!-- Row 4 (pads 25–32): next 8 scales -->
                <div class="pad-row scale-row">
                  ${oo.slice(8,16).map(o=>$`
                    <button
                      class="picker-pad pad-scale ${this.config.scale===o?"pad-active":""}"
                      @click=${()=>this.onScaleChange(o)}
                      title="Scale: ${o}"
                      aria-label="Scale ${is[o]??o}">
                      ${is[o]??o}
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
              <input type="checkbox" .checked=${this.showScaleWarnings} @change=${o=>this.toggleScaleWarnings(o.target.checked)} style="margin-right: 8px; cursor: pointer;">
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
                <select class="midi-select" .value=${this.selectedMidiDevice} @change=${o=>this.selectedMidiDevice=o.target.value}>
                  ${this.midiDevices.map(o=>$`
                    <option value=${o} ?selected=${this.selectedMidiDevice===o}>${o}</option>
                  `)}
                </select>

                <span class="config-label" style="margin-top: 8px;">MIDI Channel</span>
                <select class="midi-select" .value=${this.selectedMidiChannel.toString()} @change=${o=>this.selectedMidiChannel=parseInt(o.target.value,10)}>
                  ${Array.from({length:16},(o,a)=>a+1).map(o=>$`
                    <option value=${o.toString()} ?selected=${this.selectedMidiChannel===o}>Channel ${o}</option>
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
        <footer class="panel footer-timeline">
          <progression-stepper
            .originalChords=${this.progression}
            .keyChords=${this.transposeProgression&&this.originalKey!==this.config.key?n:[]}
            .keyLabel=${this.config.key}
            .activeIndex=${this.activeIndex}
            @chord-selected=${o=>this.onChordSelected(o)}
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
    `}playActiveVoicing(){const e=this.getTransposedProgression()[this.activeIndex]??null;if(!e)return;const t=ao(e,this.config),i=co(e,t,this.voicing,this.inversion).map(r=>t.find(o=>o.index===r.index)?.midiNote).filter(r=>!!r);i.length>0&&(Hg(i,.7,this.humanState),this.sendMidiNotes(i,700,this.humanState))}sendMidiNotes(n,e=700,t){if(!this.midiConnected||!this.activeMidiDevice||!this.midiAccess)return;let s=null;for(const a of this.midiAccess.outputs.values())if(a.name===this.activeMidiDevice){s=a;break}if(!s)return;const i=this.selectedMidiChannel-1&15,r=144|i,o=128|i;n.forEach((a,c)=>{const l=Wo(a);if(l===null)return;this.activeMidiTimeouts.has(l)&&clearTimeout(this.activeMidiTimeouts.get(l));let h=100,u=0,d=e;if(t){const{minVelocity:p,maxVelocity:f,spread:g,microTiming:_,humanVariance:w,duration:M}=t;h=Math.round(p+Math.random()*(f-p));const k=c*g*.1,v=(Math.random()-.5)*_*.05,y=(Math.random()-.5)*w*.03;u=Math.max(0,Math.round((k+v+y)*1e3)),d=Math.max(50,Math.round(M*1e3*(1+(Math.random()-.5)*.2*w)))}const m=setTimeout(()=>{try{s.send([r,l,h])}catch(f){console.warn("Failed to send MIDI Note On:",f)}const p=setTimeout(()=>{try{s.send([o,l,0])}catch{}this.activeMidiTimeouts.delete(l)},d);this.activeMidiTimeouts.set(l,p)},u);this.activeMidiTimeouts.set(l,m)})}onPadClicked(n){n.detail&&n.detail.midiNote&&this.sendMidiNotes([n.detail.midiNote],350)}onKeyChange(n){this.config={...this.config,key:n}}onScaleChange(n){const e=n==="chromatic"?"chromatic":"collapsed";this.config={...this.config,scale:n,mode:e}}onVoicingChange(n){this.voicing=n}onChordSelected(n){this.activeIndex=n.detail,this.autoPlay&&setTimeout(()=>this.playActiveVoicing(),20)}onParsed(n){this.progression=n.detail.progression,this.source=n.detail.source,this.activeIndex=0;const e=n.detail.progression[0],t=this.normalizeKey(e?.tonic)??this.config.key;this.originalKey=t;const i=e?.quality?.toLowerCase().includes("minor")||e?.symbol?.includes("m")?"minor":"major";e?.tonic&&(this.config={...this.config,key:t,scale:i}),this.autoPlay&&this.progression.length>0&&setTimeout(()=>this.playActiveVoicing(),50),this.progression.length>0&&(this.activeTab="grid")}getTransposedProgression(){if(this.progression.length===0)return[];if(!this.transposeProgression)return this.progression;const n=this.getKeyShiftSemitones();return n===0?this.progression:this.progression.map(e=>this.transposeParsedChord(e,n)).filter(e=>!!e)}getKeyShiftSemitones(){const n=Js.indexOf(this.originalKey),e=Js.indexOf(this.config.key);return n===-1||e===-1?0:(e-n+12)%12}transposeParsedChord(n,e){const t=this.transposeChordSymbol(n.symbol,e);if(!t)return null;const s=Ge(t);return s.empty||s.notes.length===0?null:{symbol:t,tonic:s.tonic,quality:s.quality,notes:s.notes,intervals:s.intervals,aliases:s.aliases}}transposeChordSymbol(n,e){const t=n.match(/^([A-G](?:#{1,2}|b{1,2})?)(.*?)(?:\/([A-G](?:#{1,2}|b{1,2})?))?$/);if(!t)return null;const s=this.transposeNoteName(t[1],e);if(!s)return null;const i=t[2]??"",r=t[3]?this.transposeNoteName(t[3],e):null;return t[3]&&!r?null:`${s}${i}${r?`/${r}`:""}`}transposeNoteName(n,e){const t=Ai(e),s=Ut(n,t);return this.normalizeKey(s)}normalizeKey(n){const e=On(n??"");if(!e)return null;const t=Si(e);return Js.includes(t)?t:null}};J.styles=Wt`
    :host {
      /* 1. DESIGN THEME & COLOR PALETTE */
      /* Default Dark Mode (Circuit Tracks) */
      --bg-onyx: #121316;
      --bg-charcoal: #1a1b20;
      --bg-charcoal-alpha: rgba(26, 27, 32, 0.85);
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
      grid-template-rows: 48px var(--header-height) 1fr var(--footer-height) auto;
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
      align-items: center;
      padding: 0 24px;
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
        grid-template-rows: 48px var(--header-height) 1fr var(--footer-height) auto;
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
  `;te([X()],J.prototype,"theme",2);te([X()],J.prototype,"audioActive",2);te([X()],J.prototype,"activeTab",2);te([X()],J.prototype,"activePatch",2);te([X()],J.prototype,"progression",2);te([X()],J.prototype,"originalKey",2);te([X()],J.prototype,"activeIndex",2);te([X()],J.prototype,"hideScaleWarningForNotes",2);te([X()],J.prototype,"config",2);te([X()],J.prototype,"voicing",2);te([X()],J.prototype,"autoPlay",2);te([X()],J.prototype,"transposeProgression",2);te([X()],J.prototype,"inversion",2);te([X()],J.prototype,"source",2);te([X()],J.prototype,"showSettings",2);te([X()],J.prototype,"showHelp",2);te([X()],J.prototype,"humanLoaded",2);te([X()],J.prototype,"showHuman",2);te([X()],J.prototype,"humanState",2);te([X()],J.prototype,"showScaleWarnings",2);te([X()],J.prototype,"midiConnected",2);te([X()],J.prototype,"midiDevices",2);te([X()],J.prototype,"selectedMidiDevice",2);te([X()],J.prototype,"activeMidiDevice",2);te([X()],J.prototype,"selectedMidiChannel",2);J=te([Bt("circuit-chord-forge")],J);
