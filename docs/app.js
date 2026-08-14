(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const V=globalThis,ot=V.ShadowRoot&&(V.ShadyCSS===void 0||V.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,rt=Symbol(),gt=new WeakMap;let Ot=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==rt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ot&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=gt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&gt.set(e,t))}return t}toString(){return this.cssText}};const jt=i=>new Ot(typeof i=="string"?i:i+"",void 0,rt),Dt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((s,o,r)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[r+1],i[0]);return new Ot(e,i,rt)},Lt=(i,t)=>{if(ot)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),o=V.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=e.cssText,i.appendChild(s)}},bt=ot?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return jt(e)})(i):i;const{is:Ht,defineProperty:qt,getOwnPropertyDescriptor:Gt,getOwnPropertyNames:Vt,getOwnPropertySymbols:Ft,getPrototypeOf:Kt}=Object,W=globalThis,yt=W.trustedTypes,Wt=yt?yt.emptyScript:"",Qt=W.reactiveElementPolyfillSupport,N=(i,t)=>i,F={toAttribute(i,t){switch(t){case Boolean:i=i?Wt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},at=(i,t)=>!Ht(i,t),vt={attribute:!0,type:String,converter:F,reflect:!1,useDefault:!1,hasChanged:at};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;let R=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,e);o!==void 0&&qt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,s){const{get:o,set:r}=Gt(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:o,set(a){const c=o?.call(this);r?.call(this,a),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??vt}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const t=Kt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const e=this.properties,s=[...Vt(e),...Ft(e)];for(const o of s)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,o]of e)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const o=this._$Eu(e,s);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)e.unshift(bt(o))}else t!==void 0&&e.push(bt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Lt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const r=(s.converter?.toAttribute!==void 0?s.converter:F).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(t,e){const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const r=s.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:F;this._$Em=o;const c=a.fromAttribute(e,r.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(t,e,s,o=!1,r){if(t!==void 0){const a=this.constructor;if(o===!1&&(r=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??at)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:o,wrapped:r},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),r!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,r]of s){const{wrapped:a}=r,c=this[o];a!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,r,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[N("elementProperties")]=new Map,R[N("finalized")]=new Map,Qt?.({ReactiveElement:R}),(W.reactiveElementVersions??=[]).push("2.1.2");const nt=globalThis,$t=i=>i,K=nt.trustedTypes,xt=K?K.createPolicy("lit-html",{createHTML:i=>i}):void 0,It="$lit$",A=`lit$${Math.random().toFixed(9).slice(2)}$`,Bt="?"+A,Jt=`<${Bt}>`,P=document,D=()=>P.createComment(""),L=i=>i===null||typeof i!="object"&&typeof i!="function",lt=Array.isArray,Yt=i=>lt(i)||typeof i?.[Symbol.iterator]=="function",X=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,_t=/>/g,M=RegExp(`>|${X}(?:([^\\s"'>=/]+)(${X}*=${X}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),kt=/'/g,At=/"/g,zt=/^(?:script|style|textarea|title)$/i,Zt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),b=Zt(1),I=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),St=new WeakMap,E=P.createTreeWalker(P,129);function Nt(i,t){if(!lt(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(t):t}const Xt=(i,t)=>{const e=i.length-1,s=[];let o,r=t===2?"<svg>":t===3?"<math>":"",a=z;for(let c=0;c<e;c++){const l=i[c];let d,h,p=-1,g=0;for(;g<l.length&&(a.lastIndex=g,h=a.exec(l),h!==null);)g=a.lastIndex,a===z?h[1]==="!--"?a=wt:h[1]!==void 0?a=_t:h[2]!==void 0?(zt.test(h[2])&&(o=RegExp("</"+h[2],"g")),a=M):h[3]!==void 0&&(a=M):a===M?h[0]===">"?(a=o??z,p=-1):h[1]===void 0?p=-2:(p=a.lastIndex-h[2].length,d=h[1],a=h[3]===void 0?M:h[3]==='"'?At:kt):a===At||a===kt?a=M:a===wt||a===_t?a=z:(a=M,o=void 0);const v=a===M&&i[c+1].startsWith("/>")?" ":"";r+=a===z?l+Jt:p>=0?(s.push(d),l.slice(0,p)+It+l.slice(p)+A+v):l+A+(p===-2?c:v)}return[Nt(i,r+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class H{constructor({strings:t,_$litType$:e},s){let o;this.parts=[];let r=0,a=0;const c=t.length-1,l=this.parts,[d,h]=Xt(t,e);if(this.el=H.createElement(d,s),E.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=E.nextNode())!==null&&l.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const p of o.getAttributeNames())if(p.endsWith(It)){const g=h[a++],v=o.getAttribute(p).split(A),$=/([.?@])?(.*)/.exec(g);l.push({type:1,index:r,name:$[2],strings:v,ctor:$[1]==="."?ee:$[1]==="?"?ie:$[1]==="@"?se:Q}),o.removeAttribute(p)}else p.startsWith(A)&&(l.push({type:6,index:r}),o.removeAttribute(p));if(zt.test(o.tagName)){const p=o.textContent.split(A),g=p.length-1;if(g>0){o.textContent=K?K.emptyScript:"";for(let v=0;v<g;v++)o.append(p[v],D()),E.nextNode(),l.push({type:2,index:++r});o.append(p[g],D())}}}else if(o.nodeType===8)if(o.data===Bt)l.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(A,p+1))!==-1;)l.push({type:7,index:r}),p+=A.length-1}r++}}static createElement(t,e){const s=P.createElement("template");return s.innerHTML=t,s}}function B(i,t,e=i,s){if(t===I)return t;let o=s!==void 0?e._$Co?.[s]:e._$Cl;const r=L(t)?void 0:t._$litDirective$;return o?.constructor!==r&&(o?._$AO?.(!1),r===void 0?o=void 0:(o=new r(i),o._$AT(i,e,s)),s!==void 0?(e._$Co??=[])[s]=o:e._$Cl=o),o!==void 0&&(t=B(i,o._$AS(i,t.values),o,s)),t}class te{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,o=(t?.creationScope??P).importNode(e,!0);E.currentNode=o;let r=E.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new q(r,r.nextSibling,this,t):l.type===1?d=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(d=new oe(r,this,t)),this._$AV.push(d),l=s[++c]}a!==l?.index&&(r=E.nextNode(),a++)}return E.currentNode=P,o}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,o){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),L(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Yt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&L(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=H.createElement(Nt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(e);else{const r=new te(o,this),a=r.u(this.options);r.p(e),this.T(a),this._$AH=r}}_$AC(t){let e=St.get(t.strings);return e===void 0&&St.set(t.strings,e=new H(t)),e}k(t){lt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,o=0;for(const r of t)o===e.length?e.push(s=new q(this.O(D()),this.O(D()),this,this.options)):s=e[o],s._$AI(r),o++;o<e.length&&(this._$AR(s&&s._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=$t(t).nextSibling;$t(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,o,r){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=f}_$AI(t,e=this,s,o){const r=this.strings;let a=!1;if(r===void 0)t=B(this,t,e,0),a=!L(t)||t!==this._$AH&&t!==I,a&&(this._$AH=t);else{const c=t;let l,d;for(t=r[0],l=0;l<r.length-1;l++)d=B(this,c[s+l],e,l),d===I&&(d=this._$AH[l]),a||=!L(d)||d!==this._$AH[l],d===f?t=f:t!==f&&(t+=(d??"")+r[l+1]),this._$AH[l]=d}a&&!o&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ee extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class ie extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class se extends Q{constructor(t,e,s,o,r){super(t,e,s,o,r),this.type=5}_$AI(t,e=this){if((t=B(this,t,e,0)??f)===I)return;const s=this._$AH,o=t===f&&s!==f||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==f&&(s===f||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class oe{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const re=nt.litHtmlPolyfillSupport;re?.(H,q),(nt.litHtmlVersions??=[]).push("3.3.2");const ae=(i,t,e)=>{const s=e?.renderBefore??t;let o=s._$litPart$;if(o===void 0){const r=e?.renderBefore??null;s._$litPart$=o=new q(t.insertBefore(D(),r),r,void 0,e??{})}return o._$AI(i),o};const ct=globalThis;class U extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return I}}U._$litElement$=!0,U.finalized=!0,ct.litElementHydrateSupport?.({LitElement:U});const ne=ct.litElementPolyfillSupport;ne?.({LitElement:U});(ct.litElementVersions??=[]).push("4.2.2");const le=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};const ce={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:at},de=(i=ce,t,e)=>{const{kind:s,metadata:o}=e;let r=globalThis.litPropertyMetadata.get(o);if(r===void 0&&globalThis.litPropertyMetadata.set(o,r=new Map),s==="setter"&&((i=Object.create(i)).wrapped=!0),r.set(e.name,i),s==="accessor"){const{name:a}=e;return{set(c){const l=t.get.call(this);t.set.call(this,c),this.requestUpdate(a,l,i,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,i,c),c}}}if(s==="setter"){const{name:a}=e;return function(c){const l=this[a];t.call(this,c),this.requestUpdate(a,l,i,!0,c)}}throw Error("Unsupported decorator location: "+s)};function pe(i){return(t,e)=>typeof e=="object"?de(i,t,e):((s,o,r)=>{const a=o.hasOwnProperty(r);return o.constructor.createProperty(r,s),a?Object.getOwnPropertyDescriptor(o,r):void 0})(i,t,e)}function _(i){return pe({...i,state:!0,attribute:!1})}const O=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],et=[{id:"maj",label:"maj",iv:[0,4,7]},{id:"min",label:"min",iv:[0,3,7]},{id:"maj7",label:"maj7",iv:[0,4,7,11]},{id:"m7",label:"m7",iv:[0,3,7,10]},{id:"7",label:"7",iv:[0,4,7,10]},{id:"m7b5",label:"m7♭5",iv:[0,3,6,10]},{id:"dim",label:"dim",iv:[0,3,6]},{id:"aug",label:"aug",iv:[0,4,8]},{id:"sus2",label:"sus2",iv:[0,2,7]},{id:"sus4",label:"sus4",iv:[0,5,7]},{id:"6",label:"6",iv:[0,4,7,9]},{id:"add9",label:"add9",iv:[0,4,7,14]}],he={0:"root",2:"2nd",3:"♭3rd",4:"3rd",5:"4th",6:"♭5th",7:"5th",8:"♯5th",9:"6th",10:"♭7th",11:"maj7",14:"9th"},dt=[0,2,4,5,7,9,11],pt=[0,2,3,5,7,8,10],ue=["maj7","m7","m7","maj7","7","m7","m7b5"],me=["m7","m7b5","maj7","m7","m7","maj7","7"],fe=["I","ii","iii","IV","V","vi","vii"],ge=["i","ii","III","iv","v","VI","VII"],Mt=[0,2,4,5,7,9,11,12],Et=[null,1,3,null,6,8,10,null];function T(i,t){return(i+1)*12+t}function G(i){const t=O[i%12],e=Math.floor(i/12)-1;return`${t}${e}`}function Ut(i){return et.find(t=>t.id===i)||et[0]}function tt(i){const t=O[i.root],e=Ut(i.q),s=i.q==="maj"?"":i.q==="min"?"m":e.label;return`${t}${s}`}function Pt(i,t,e){return(e==="major"?dt:pt).some(o=>(t+o)%12===(i%12+12)%12)}function it(i,t){const e=Ut(i.q),s=T(t,i.root);return e.iv.map((o,r)=>({midi:s+o,iv:o,isRoot:r===0,order:r}))}function be(i,t,e,s){const o=[];if(i==="chromatic")[Et.map(a=>a===null?null:T(t+1,a)),Mt.map(a=>T(t+1,a)),Et.map(a=>a===null?null:T(t,a)),Mt.map(a=>T(t,a))].forEach((a,c)=>{a.forEach((l,d)=>{o.push({midi:l,row:4-c,col:d+1})})});else{const r=s==="major"?dt:pt;for(let a=3;a>=0;a--)for(let c=0;c<8;c++){const l=c%7,d=Math.floor(c/7),h=T(t+a+d,e+r[l]);o.push({midi:h,row:a+1,col:c+1})}}return o}function Ct(i,t,e,s,o){const r=be(e,t,s,o),a=it(i,t),c=new Map,l=[];return a.forEach(d=>{const h=r.findIndex(p=>p.midi===d.midi);if(h>=0&&!c.has(h)){const p=r[h];c.set(h,{...d,ref:`R${p.row}C${p.col}`})}else l.push(d)}),{cells:r,tones:a,litMap:c,missingTones:l}}let k=null,j=null,C=null;function ye(){if(typeof window>"u")return null;if(!k){const i=window.AudioContext||window.webkitAudioContext;if(!i)return null;k=new i,j=k.createGain(),j.gain.value=.5,C=k.createBiquadFilter(),C.type="lowpass",C.frequency.value=2600,C.Q.value=.6,j.connect(C),C.connect(k.destination)}return k.state==="suspended"&&k.resume().catch(()=>{}),k}function ve(i){return 440*Math.pow(2,(i-69)/12)}function $e(i){if(typeof i=="number")return i;const t=i.match(/^([A-Ga-g][#b]?)(-?\d+)$/);if(!t)return 60;const e=t[1].toUpperCase(),s=parseInt(t[2],10),r={C:0,"C#":1,DB:1,D:2,"D#":3,EB:3,E:4,F:5,"F#":6,GB:6,G:7,"G#":8,AB:8,A:9,"A#":10,BB:10,B:11}[e]??0;return(s+1)*12+r}function st(i,t=1.15){const e=ye();if(!e||!j)return;const s=e.currentTime+.015,o=Math.max(.2,t);i.map($e).forEach((a,c)=>{const l=ve(a),d=e.createGain(),h=s+c*.028;d.gain.setValueAtTime(1e-4,h),d.gain.linearRampToValueAtTime(.16,h+.02),d.gain.exponentialRampToValueAtTime(.055,h+.22),d.gain.exponentialRampToValueAtTime(1e-4,h+o),d.connect(j),[{type:"triangle",cents:0},{type:"sine",cents:-5}].forEach(({type:g,cents:v})=>{const $=e.createOscillator();$.type=g,$.frequency.value=l*Math.pow(2,v/1200),$.connect(d),$.start(h),$.stop(h+o+.05)})})}function Rt(i,t=.6){st([i],t)}var xe=Object.defineProperty,we=Object.getOwnPropertyDescriptor,w=(i,t,e,s)=>{for(var o=s>1?void 0:s?we(t,e):t,r=i.length-1,a;r>=0;r--)(a=i[r])&&(o=(s?a(t,e,o):a(o))||o);return s&&o&&xe(t,e,o),o};const Tt="circuit_chords_v2_state",_e=[{root:0,q:"maj7"},{root:9,q:"m7"},{root:2,q:"m7"},{root:7,q:"7"}];let y=class extends U{constructor(){super(...arguments),this.steps=_e,this.active=0,this.keyRoot=0,this.keyMode="major",this.octave=3,this.layout="chromatic",this.playing=!1,this.copied=!1,this.parity=!1,this.vw=typeof window<"u"?window.innerWidth:1280,this.transportTimer=null,this.lastSig="",this.handleResize=()=>{this.vw=window.innerWidth},this.handleKeyDown=i=>{if(i.target instanceof HTMLInputElement||i.target instanceof HTMLSelectElement||i.target instanceof HTMLTextAreaElement)return;const t=this.steps.length;i.key==="ArrowRight"?(i.preventDefault(),this.active=(this.active+1)%t,this.persistState()):i.key==="ArrowLeft"?(i.preventDefault(),this.active=(this.active-1+t)%t,this.persistState()):i.key==="ArrowUp"?(i.preventDefault(),this.bumpOctave(1)):i.key==="ArrowDown"?(i.preventDefault(),this.bumpOctave(-1)):i.key===" "?(i.preventDefault(),this.toggleTransport()):i.key==="Enter"&&(i.preventDefault(),this.auditionActive())}}connectedCallback(){super.connectedCallback(),this.loadPersistedState(),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("resize",this.handleResize),this.transportTimer&&(clearInterval(this.transportTimer),this.transportTimer=null)}loadPersistedState(){try{const i=localStorage.getItem(Tt);if(i){const t=JSON.parse(i);Array.isArray(t.steps)&&t.steps.length>0&&(this.steps=t.steps),typeof t.active=="number"&&(this.active=Math.max(0,Math.min(t.active,this.steps.length-1))),typeof t.keyRoot=="number"&&(this.keyRoot=t.keyRoot),(t.keyMode==="major"||t.keyMode==="minor")&&(this.keyMode=t.keyMode),typeof t.octave=="number"&&(this.octave=Math.max(1,Math.min(6,t.octave))),(t.layout==="chromatic"||t.layout==="in-key")&&(this.layout=t.layout)}}catch{}}persistState(){try{const i={steps:this.steps,active:this.active,keyRoot:this.keyRoot,keyMode:this.keyMode,octave:this.octave,layout:this.layout};localStorage.setItem(Tt,JSON.stringify(i))}catch{}}bumpOctave(i){const t=Math.max(1,Math.min(6,this.octave+i));t!==this.octave&&(this.octave=t,this.persistState())}auditionActive(){const i=this.steps[this.active];if(i){const t=it(i,this.octave);st(t.map(e=>e.midi))}}toggleTransport(){if(this.transportTimer){clearInterval(this.transportTimer),this.transportTimer=null,this.playing=!1;return}this.playing=!0;const i=()=>{const t=this.steps[this.active];if(t){const e=it(t,this.octave);st(e.map(s=>s.midi),.85)}this.active=(this.active+1)%this.steps.length,this.persistState()};i(),this.transportTimer=window.setInterval(i,980)}setStepRoot(i){this.steps=this.steps.map((t,e)=>e===this.active?{...t,root:i}:t),this.persistState()}setStepQuality(i){this.steps=this.steps.map((t,e)=>e===this.active?{...t,q:i}:t),this.persistState()}addStep(){if(this.steps.length>=16)return;const i=this.steps[this.steps.length-1]||{root:this.keyRoot,q:"maj7"};this.steps=[...this.steps,{...i}],this.active=this.steps.length-1,this.persistState()}removeStep(){if(this.steps.length<=1)return;const i=this.steps.filter((t,e)=>e!==this.active);this.steps=i,this.active=Math.min(this.active,i.length-1),this.persistState()}copyPadList(i,t){const e=`${i} — ${t.map(s=>`${s.pitch}→${s.ref}`).join("  ")}`;navigator.clipboard&&navigator.clipboard.writeText(e).catch(()=>{}),this.copied=!0,setTimeout(()=>{this.copied=!1},1600)}renderMiniCells(i){const{cells:t,litMap:e}=Ct(i,this.octave,this.layout,this.keyRoot,this.keyMode);return t.map((s,o)=>{const r=e.get(o);let a="#242730";return r?a=r.isRoot?"#5cc9d1":"#d1608f":s.midi===null?a="#1f2126":Pt(s.midi%12,this.keyRoot,this.keyMode)&&(a="#2b3038"),b`<div class="mini-cell" style="background: ${a};"></div>`})}render(){const i=this.steps[this.active]||this.steps[0]||{root:0,q:"maj7"},{cells:t,tones:e,litMap:s,missingTones:o}=Ct(i,this.octave,this.layout,this.keyRoot,this.keyMode),r=s.size,a=tt(i),c=`${i.root}:${i.q}:${this.octave}:${this.layout}:${this.keyRoot}:${this.keyMode}:${this.active}`;c!==this.lastSig&&(this.lastSig=c,this.parity=!this.parity);const l=this.parity?"A":"B";let d=null;s.forEach((n,u)=>{n.isRoot&&(d=t[u])});const h=n=>d?Math.max(Math.abs(n.row-d.row),Math.abs(n.col-d.col)):Math.abs(n.col-4),p=e.map(n=>{const u=Array.from(s.entries()).find(([,x])=>x.order===n.order);return{pitch:G(n.midi),ref:u?u[1].ref:"off plate",deg:he[n.iv]||"tone",isRoot:n.isRoot}}),g=this.keyMode==="major"?dt:pt,v=this.keyMode==="major"?fe:ge,$=this.keyMode==="major"?ue:me;return b`
      <div class="container">
        <!-- Top Brand Header -->
        <header class="brand-header">
          <div class="brand-left">
            <svg width="16" height="16" viewBox="0 0 32 32" style="display:block;">
              <rect width="32" height="32" rx="6" fill="#c8cad0"></rect>
              <g transform="rotate(-45 16 16)" fill="#17181c">
                <rect x="6.5" y="6" width="5" height="14" rx="2.5"></rect>
                <rect x="13.5" y="12" width="5" height="14" rx="2.5"></rect>
                <rect x="20.5" y="6" width="5" height="14" rx="2.5"></rect>
              </g>
            </svg>
            <div class="brand-title">circuit chords</div>
          </div>
          <div class="brand-status">
            <span class="status-dot"></span>
            <span>tracks · synth 1 · ch1</span>
          </div>
        </header>

        <div class="main-grid">
          <!-- Left Workspace Column -->
          <div class="workspace-col">
            <!-- Chord Title & Actions -->
            <div class="chord-meta-header">
              <div class="meta-line">
                STEP ${String(this.active+1).padStart(2,"0")} / ${String(this.steps.length).padStart(2,"0")}  ·  ${O[this.keyRoot]} ${this.keyMode.toUpperCase()}  ·  ${this.layout==="chromatic"?"CHROMATIC LAYOUT":"IN-KEY LAYOUT"}
              </div>
              <div class="chord-title-row">
                <div class="chord-name-title" key="${a}">${a}</div>
                <div class="chord-sub-badge">
                  ${r} ${r===1?"pad":"pads"} · close voicing
                </div>
              </div>
              <div class="action-toolbar">
                <button
                  type="button"
                  class="tool-btn"
                  title="hear this chord (Enter)"
                  @click=${()=>this.auditionActive()}
                >
                  audition
                </button>
                <button
                  type="button"
                  class="tool-btn ${this.playing?"playing":""}"
                  title="play the progression (Space)"
                  @click=${()=>this.toggleTransport()}
                >
                  ${this.playing?"stop":"play through"}
                </button>
                <button
                  type="button"
                  class="tool-btn"
                  @click=${()=>this.copyPadList(a,p)}
                >
                  ${this.copied?"copied":"copy pad list"}
                </button>
              </div>
            </div>

            <!-- Off-Plate Warning -->
            ${o.length>0?b`
                  <div class="warning-banner">
                    ${o.length} ${o.length===1?"tone":"tones"} off the plate (${o.map(n=>G(n.midi)).join(", ")}) — shift the base octave or switch layout
                  </div>
                `:""}

            <!-- Progression Step Strip -->
            <div>
              <div class="section-header-row">
                <div class="section-label">PROGRESSION</div>
                <div class="section-detail">${this.steps.length} of 16 steps used</div>
              </div>
              <div class="step-strip">
                ${this.steps.map((n,u)=>{const x=u===this.active;return b`
                    <div
                      class="step-tile ${x?"active":""}"
                      tabindex="0"
                      role="button"
                      aria-label="Step ${u+1}, ${tt(n)}${x?", active":""}"
                      @click=${()=>{this.active=u,this.auditionActive(),this.persistState()}}
                      @keydown=${m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),this.active=u,this.auditionActive(),this.persistState())}}
                    >
                      <div class="step-tile-top">
                        <span class="step-tile-name">${tt(n)}</span>
                        <span class="step-tile-num">${String(u+1).padStart(2,"0")}</span>
                      </div>
                      <div class="mini-grid">
                        ${this.renderMiniCells(n)}
                      </div>
                    </div>
                  `})}
                ${this.steps.length<16?b`
                      <div
                        class="add-step-btn"
                        tabindex="0"
                        role="button"
                        aria-label="Add step"
                        title="add step"
                        @click=${()=>this.addStep()}
                        @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.addStep())}}
                      >
                        +
                      </div>
                    `:""}
              </div>
              <div class="step-footer-actions">
                <button
                  type="button"
                  class="remove-step-btn"
                  ?disabled=${this.steps.length<=1}
                  @click=${()=>this.removeStep()}
                >
                  remove step
                </button>
              </div>
            </div>

            <!-- Main 8x4 Pad Plate -->
            <div class="plate-container">
              <div class="plate-scroll-wrap">
                <div class="col-markers">
                  <div></div>
                  ${[1,2,3,4,5,6,7,8].map(n=>b`<div class="col-num">${n}</div>`)}
                </div>

                <div class="grid-with-row-nums">
                  <div class="row-markers">
                    ${[4,3,2,1].map(n=>b`<div class="row-num">${n}</div>`)}
                  </div>

                  <div class="pad-grid">
                    ${t.map((n,u)=>{const x=s.get(u),m=n.midi===null,ht=m?"":O[n.midi%12],ut=!m&&ht.length===1,mt=h(n);let J="transparent",Y="transparent",ft="400",Z="none";if(x)J=x.isRoot?"#5cc9d1":"#d1608f",Y="#121418",ft="500",Z=`padBloom${l} 560ms cubic-bezier(.2,.75,.25,1) ${70+mt*46}ms both`;else if(!m){const S=Pt(n.midi%12,this.keyRoot,this.keyMode);J=S?ut?"#2d343e":"#252b33":ut?"#342a31":"#2a2329",Y=S?"#aeb7c1":"#a2909c",Z=`padDim${l} 420ms ease ${mt*22}ms both${S?`, ambientShimmer 5.2s ease-in-out ${((n.row+n.col)*.13).toFixed(2)}s infinite`:""}`}return b`
                        <div
                          class="pad-btn ${m?"empty":""}"
                          style="
                            background: ${J};
                            color: ${Y};
                            font-weight: ${ft};
                            animation: ${Z};
                          "
                          tabindex="${m?-1:0}"
                          role="button"
                          aria-label="${m?"Empty pad":`${G(n.midi)} row ${n.row} col ${n.col}`}"
                          title="${m?"no pad":`${G(n.midi)} · row ${n.row} col ${n.col}`}"
                          @click=${()=>{!m&&n.midi!==null&&(Rt(n.midi,.6),this.setStepRoot(n.midi%12))}}
                          @keydown=${S=>{!m&&n.midi!==null&&(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),Rt(n.midi,.6),this.setStepRoot(n.midi%12))}}
                        >
                          ${ht}
                        </div>
                      `})}
                  </div>
                </div>
              </div>

              <div class="plate-caption-row">
                <span>Hold ${r} ${r===1?"pad":"pads"} together — ${p.map(n=>`${n.pitch}→${n.ref}`).join("  ")}</span>
                <span>↑↓ octave · ←→ step</span>
              </div>
            </div>

            <!-- Bottom Toolbar -->
            <div class="plate-bottom-bar">
              <div class="legend-row">
                <span class="legend-item">
                  <span class="legend-swatch" style="background:#5cc9d1;"></span>root
                </span>
                <span class="legend-item">
                  <span class="legend-swatch" style="background:#d1608f;"></span>chord tone
                </span>
                <span class="legend-item">
                  <span class="legend-swatch" style="background:#2b323b;"></span>in key
                </span>
                <span class="legend-item">
                  <span class="legend-swatch" style="background:#33292f;"></span>out of key
                </span>
              </div>
              <div class="plate-controls-group">
                <div style="display:flex; gap:4px;">
                  <div
                    class="layout-toggle-pill ${this.layout==="chromatic"?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="Chromatic layout"
                    @click=${()=>{this.layout="chromatic",this.persistState()}}
                  >
                    chromatic
                  </div>
                  <div
                    class="layout-toggle-pill ${this.layout==="in-key"?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="In-key layout"
                    @click=${()=>{this.layout="in-key",this.persistState()}}
                  >
                    in-key
                  </div>
                </div>
                <div class="octave-stepper">
                  <button
                    type="button"
                    class="octave-btn"
                    title="Lower base octave"
                    @click=${()=>this.bumpOctave(-1)}
                  >
                    –
                  </button>
                  <span class="octave-label">C${this.octave}</span>
                  <button
                    type="button"
                    class="octave-btn"
                    title="Raise base octave"
                    @click=${()=>this.bumpOctave(1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Sidebar Column -->
          <div class="sidebar-col">
            <div class="sidebar-title">CHORD</div>

            <!-- Piano Root Selector -->
            <div class="piano-accidentals">
              <div
                class="piano-black-key ${i.root===1?"active":""}"
                style="grid-column: 2/4;"
                tabindex="0"
                role="button"
                aria-label="C sharp root"
                @click=${()=>this.setStepRoot(1)}
              >
                C♯
              </div>
              <div
                class="piano-black-key ${i.root===3?"active":""}"
                style="grid-column: 4/6;"
                tabindex="0"
                role="button"
                aria-label="D sharp root"
                @click=${()=>this.setStepRoot(3)}
              >
                D♯
              </div>
              <div
                class="piano-black-key ${i.root===6?"active":""}"
                style="grid-column: 8/10;"
                tabindex="0"
                role="button"
                aria-label="F sharp root"
                @click=${()=>this.setStepRoot(6)}
              >
                F♯
              </div>
              <div
                class="piano-black-key ${i.root===8?"active":""}"
                style="grid-column: 10/12;"
                tabindex="0"
                role="button"
                aria-label="G sharp root"
                @click=${()=>this.setStepRoot(8)}
              >
                G♯
              </div>
              <div
                class="piano-black-key ${i.root===10?"active":""}"
                style="grid-column: 12/14;"
                tabindex="0"
                role="button"
                aria-label="A sharp root"
                @click=${()=>this.setStepRoot(10)}
              >
                A♯
              </div>
            </div>

            <div class="piano-naturals">
              ${[{root:0,label:"C"},{root:2,label:"D"},{root:4,label:"E"},{root:5,label:"F"},{root:7,label:"G"},{root:9,label:"A"},{root:11,label:"B"}].map(n=>b`
                  <div
                    class="piano-white-key ${i.root===n.root?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="${n.label} root"
                    @click=${()=>this.setStepRoot(n.root)}
                  >
                    ${n.label}
                  </div>
                `)}
            </div>

            <!-- 12 Chord Qualities -->
            <div class="quality-grid">
              ${et.map(n=>b`
                  <div
                    class="quality-tile ${i.q===n.id?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="${n.label} quality"
                    @click=${()=>this.setStepQuality(n.id)}
                  >
                    ${n.label}
                  </div>
                `)}
            </div>

            <!-- Tones Breakdown -->
            <div class="sidebar-title">TONES</div>
            <div class="tones-table">
              ${p.map(n=>b`
                  <div class="tone-row">
                    <span class="tone-deg">${n.deg}</span>
                    <span style="color: ${n.isRoot?"#5cc9d1":"#d1608f"};">
                      ${n.pitch} ${n.ref!=="off plate"?n.ref:"(off plate)"}
                    </span>
                  </div>
                `)}
            </div>

            <!-- Key & Diatonic Builder -->
            <div class="sidebar-title">KEY</div>
            <select
              class="key-select"
              .value="${this.keyRoot}:${this.keyMode}"
              @change=${n=>{const u=n.target,[x,m]=u.value.split(":");this.keyRoot=parseInt(x,10),this.keyMode=m,this.persistState()}}
            >
              ${O.map((n,u)=>b`
                <option value="${u}:major" ?selected=${this.keyRoot===u&&this.keyMode==="major"}>
                  ${n} major
                </option>
                <option value="${u}:minor" ?selected=${this.keyRoot===u&&this.keyMode==="minor"}>
                  ${n} minor
                </option>
              `)}
            </select>

            <div class="diatonic-grid">
              ${v.map((n,u)=>{const x=(this.keyRoot+g[u])%12,m=$[u];return b`
                  <div
                    class="diatonic-tile"
                    tabindex="0"
                    role="button"
                    aria-label="Add ${n} chord"
                    title="add ${O[x]}${m} to progression"
                    @click=${()=>{this.steps.length>=16||(this.steps=[...this.steps,{root:x,q:m}],this.active=this.steps.length-1,this.persistState())}}
                  >
                    ${n}
                  </div>
                `})}
            </div>
            <div class="diatonic-hint">tap a numeral to append it as a step</div>

            <!-- Shortcuts -->
            <div class="sidebar-title">SHORTCUTS</div>
            <div class="shortcuts-list">
              <div class="shortcut-row">
                <span>hear the active chord</span>
                <span class="shortcut-key">enter</span>
              </div>
              <div class="shortcut-row">
                <span>play the progression</span>
                <span class="shortcut-key">space</span>
              </div>
              <div class="shortcut-row">
                <span>switch step</span>
                <span class="shortcut-key">← →</span>
              </div>
              <div class="shortcut-row">
                <span>shift base octave</span>
                <span class="shortcut-key">↑ ↓</span>
              </div>
              <div class="shortcut-row">
                <span>re-root from the plate</span>
                <span class="shortcut-key">click a pad</span>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-desc">
          Pick a root and quality, or tap a chord from the key. The plate lights the exact pads to hold on Circuit Tracks — nothing is drawn over them. Each progression step keeps its own miniature plot, so the shape of a change is visible before you press anything.
        </div>
      </div>
    `}};y.styles=Dt`
    :host {
      display: block;
      min-height: 100vh;
      background: #17181c;
      color: #eef0f3;
      font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
      box-sizing: border-box;
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    @keyframes plateIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: none; }
    }

    @keyframes padBloomA {
      0% { transform: scale(0.9); }
      55% { transform: scale(1.07); }
      100% { transform: scale(1.025); }
    }

    @keyframes padBloomB {
      0% { transform: scale(0.9); }
      55% { transform: scale(1.07); }
      100% { transform: scale(1.025); }
    }

    @keyframes padDimA {
      0% { transform: scale(0.985); }
      100% { transform: scale(1); }
    }

    @keyframes padDimB {
      0% { transform: scale(0.985); }
      100% { transform: scale(1); }
    }

    @keyframes nameIn {
      from { opacity: 0; transform: translateY(7px); filter: blur(3px); }
      to { opacity: 1; transform: none; filter: none; }
    }

    @keyframes breathe {
      0%, 100% { opacity: 0.55; }
      50% { opacity: 1; }
    }

    @keyframes ambientShimmer {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.09); }
    }

    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 1ms !important;
      }
    }

    .container {
      max-width: 1240px;
      margin: 0 auto;
      padding: 34px 44px 72px;
    }

    /* Top Brand Header */
    .brand-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 20px;
      border-bottom: 1px solid #26282e;
      margin-bottom: 44px;
    }

    .brand-left {
      display: flex;
      align-items: center;
      gap: 11px;
    }

    .brand-title {
      font-weight: 500;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      color: #c8cad0;
      white-space: nowrap;
    }

    .brand-status {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      color: #868b94;
    }

    .status-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #5cc9d1;
      animation: breathe 3.6s ease-in-out infinite;
    }

    /* Main Grid Layout */
    .main-grid {
      display: grid;
      grid-template-columns: 1fr 264px;
      gap: 40px;
      align-items: start;
    }

    .workspace-col {
      min-width: 0;
    }

    /* Title & Meta Bar */
    .chord-meta-header {
      margin-bottom: 28px;
    }

    .meta-line {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.68rem;
      letter-spacing: 0.2em;
      color: #868b94;
      margin-bottom: 12px;
    }

    .chord-title-row {
      display: flex;
      align-items: baseline;
      gap: 20px;
      flex-wrap: wrap;
    }

    .chord-name-title {
      font-size: 4.1rem;
      font-weight: 400;
      letter-spacing: -0.045em;
      line-height: 0.92;
      color: #eef0f3;
      display: inline-block;
      animation: nameIn 460ms cubic-bezier(.2,.75,.25,1) both;
    }

    .chord-sub-badge {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.8rem;
      color: #8d919a;
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    .action-toolbar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
    }

    .tool-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: transparent;
      border: 1px solid #2e3138;
      color: #9aa4af;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      letter-spacing: 0.08em;
      padding: 9px 14px;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;
      transition: border-color 240ms ease, color 240ms ease, background-color 240ms ease;
    }

    .tool-btn:hover {
      border-color: #5cc9d1;
      color: #5cc9d1;
      background-color: rgba(92,201,209,0.06);
    }

    .tool-btn.playing {
      background: rgba(209,96,143,0.16);
      color: #d1608f;
      border-color: rgba(209,96,143,0.5);
    }

    .tool-btn.playing:hover {
      filter: brightness(1.2);
    }

    /* Warning Banner */
    .warning-banner {
      display: flex;
      align-items: center;
      gap: 11px;
      padding: 11px 14px;
      margin-bottom: 22px;
      border-left: 2px solid #d1608f;
      background: rgba(209,96,143,0.07);
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      color: #dba2bc;
    }

    /* Progression Step Strip */
    .section-header-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .section-label {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      letter-spacing: 0.2em;
      color: #868b94;
    }

    .section-detail {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      color: #7d828b;
    }

    .step-strip {
      display: flex;
      border-top: 1px solid #26282e;
      border-bottom: 1px solid #26282e;
      overflow-x: auto;
    }

    .step-tile {
      flex: 1 1 0;
      min-width: 140px;
      padding: 15px 14px 17px;
      border-right: 1px solid #26282e;
      cursor: pointer;
      position: relative;
      background: transparent;
      box-shadow: inset 0 -2px 0 transparent;
      transition: background-color 260ms ease, box-shadow 260ms ease;
      user-select: none;
    }

    .step-tile:hover {
      background-color: rgba(255,255,255,0.03);
    }

    .step-tile.active {
      background: rgba(209,96,143,0.07);
      box-shadow: inset 0 -2px 0 #d1608f;
    }

    .step-tile-top {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .step-tile-name {
      font-size: 0.95rem;
      color: #9aa4af;
      transition: color 240ms ease;
    }

    .step-tile.active .step-tile-name {
      color: #e8e9ec;
    }

    .step-tile-num {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      color: #7d828b;
      transition: color 240ms ease;
    }

    .step-tile.active .step-tile-num {
      color: #d1608f;
    }

    .mini-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 2px;
    }

    .mini-cell {
      aspect-ratio: 1;
      border-radius: 1px;
      transition: background-color 300ms ease;
    }

    .add-step-btn {
      flex: 0 0 56px;
      display: grid;
      place-items: center;
      color: #6e727a;
      font-size: 1.15rem;
      cursor: pointer;
      transition: color 220ms ease, background-color 220ms ease;
      user-select: none;
    }

    .add-step-btn:hover {
      color: #5cc9d1;
      background-color: rgba(92,201,209,0.05);
    }

    .step-footer-actions {
      display: flex;
      justify-content: flex-end;
      margin-top: 9px;
    }

    .remove-step-btn {
      background: transparent;
      border: 0;
      padding: 0;
      color: #6e727a;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      cursor: pointer;
      transition: color 220ms ease;
    }

    .remove-step-btn:hover {
      color: #d1608f;
    }

    /* Main 8x4 Pad Plate */
    .plate-container {
      margin-top: 26px;
      animation: plateIn 520ms cubic-bezier(.2,.7,.3,1) both;
    }

    .plate-scroll-wrap {
      overflow-x: auto;
    }

    .col-markers {
      display: grid;
      grid-template-columns: 28px repeat(8, 1fr);
      gap: 7px;
      margin-bottom: 8px;
    }

    .col-num {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      color: #7d828b;
      text-align: center;
    }

    .grid-with-row-nums {
      display: grid;
      grid-template-columns: 28px 1fr;
      gap: 7px;
    }

    .row-markers {
      display: grid;
      grid-template-rows: repeat(4, 1fr);
      gap: 8px;
      position: sticky;
      left: 0;
      background: #17181c;
    }

    .row-num {
      display: grid;
      place-items: center;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      color: #7d828b;
    }

    .pad-grid {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 8px;
    }

    .pad-btn {
      aspect-ratio: 1;
      border-radius: 7px;
      display: grid;
      place-items: center;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.84rem;
      cursor: pointer;
      user-select: none;
      will-change: transform;
      transition: background 380ms cubic-bezier(.2,.7,.3,1), color 320ms ease, box-shadow 420ms cubic-bezier(.2,.7,.3,1);
    }

    .pad-btn:hover {
      filter: brightness(1.18);
    }

    .pad-btn:active {
      filter: brightness(0.9);
    }

    .pad-btn.empty {
      background: transparent;
      color: transparent;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
      cursor: default;
    }

    .pad-btn.empty:hover {
      filter: none;
    }

    .plate-caption-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 6px 28px;
      margin-top: 15px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      color: #7d828b;
    }

    /* Toolbar under Pad Plate */
    .plate-bottom-bar {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px 32px;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #26282e;
    }

    .legend-row {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 8px 18px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.68rem;
      color: #8d919a;
      white-space: nowrap;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .legend-swatch {
      width: 11px;
      height: 11px;
      border-radius: 3px;
    }

    .plate-controls-group {
      display: flex;
      align-items: center;
      gap: 10px;
      flex: 0 0 auto;
    }

    .layout-toggle-pill {
      padding: 8px 14px;
      border-radius: 3px;
      white-space: nowrap;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.68rem;
      cursor: pointer;
      user-select: none;
      transition: background-color 220ms ease, color 220ms ease;
      background: #1f2329;
      color: #9aa4af;
    }

    .layout-toggle-pill.active {
      background: rgba(92,201,209,0.16);
      color: #5cc9d1;
    }

    .layout-toggle-pill:hover {
      filter: brightness(1.3);
    }

    .octave-stepper {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 7px 12px;
      border: 1px solid #2e3138;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.7rem;
      color: #8d919a;
    }

    .octave-btn {
      background: transparent;
      border: 0;
      color: #8d919a;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.9rem;
      cursor: pointer;
      padding: 0 2px;
      transition: color 200ms ease;
    }

    .octave-btn:hover {
      color: #5cc9d1;
    }

    .octave-label {
      color: #c8cad0;
      min-width: 22px;
      text-align: center;
    }

    /* Right Sidebar Controls */
    .sidebar-col {
      min-width: 0;
    }

    .sidebar-title {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      letter-spacing: 0.2em;
      color: #868b94;
      margin: 0 0 12px;
    }

    /* Piano Root Selector */
    .piano-accidentals {
      display: grid;
      grid-template-columns: repeat(14, 1fr);
      gap: 3px;
      margin-bottom: 3px;
    }

    .piano-black-key {
      padding: 9px 0;
      text-align: center;
      border-radius: 0 0 3px 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.66rem;
      cursor: pointer;
      user-select: none;
      background: #171a1f;
      color: #7f868f;
      transition: background 240ms ease, color 240ms ease, box-shadow 240ms ease;
    }

    .piano-black-key.active {
      background: rgba(92,201,209,0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92,201,209,0.45);
    }

    .piano-black-key:hover {
      filter: brightness(1.35);
    }

    .piano-naturals {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 3px;
      margin-bottom: 26px;
    }

    .piano-white-key {
      padding: 11px 0;
      text-align: center;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      cursor: pointer;
      user-select: none;
      background: #22262c;
      color: #a4adb7;
      transition: background 240ms ease, color 240ms ease, box-shadow 240ms ease;
    }

    .piano-white-key.active {
      background: rgba(92,201,209,0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92,201,209,0.45);
    }

    .piano-white-key:hover {
      filter: brightness(1.3);
    }

    /* Chord Quality Grid */
    .quality-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      margin-bottom: 32px;
    }

    .quality-tile {
      padding: 9px 0;
      text-align: center;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.68rem;
      cursor: pointer;
      user-select: none;
      background: #21252b;
      color: #a0a9b3;
      transition: background 240ms ease, color 240ms ease, box-shadow 240ms ease;
    }

    .quality-tile.active {
      background: rgba(209,96,143,0.17);
      color: #d1608f;
      box-shadow: inset 0 0 0 1px rgba(209,96,143,0.45);
    }

    .quality-tile:hover {
      filter: brightness(1.3);
    }

    /* Tone Breakdown Table */
    .tones-table {
      display: flex;
      flex-direction: column;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.74rem;
      margin-bottom: 32px;
    }

    .tone-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-top: 1px solid #26282e;
    }

    .tone-row:last-child {
      border-bottom: 1px solid #26282e;
    }

    .tone-deg {
      color: #9298a1;
    }

    /* Key & Diatonic Builder */
    .key-select {
      width: 100%;
      margin-bottom: 12px;
      padding: 9px 10px;
      background: #1c1f24;
      color: #c8cad0;
      border: 1px solid #2e3138;
      border-radius: 4px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.74rem;
      cursor: pointer;
    }

    .diatonic-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 3px;
    }

    .diatonic-tile {
      padding: 8px 0;
      text-align: center;
      border-radius: 3px;
      background: #1f2329;
      color: #9aa4af;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.64rem;
      cursor: pointer;
      user-select: none;
      transition: background-color 220ms ease, color 220ms ease;
    }

    .diatonic-tile:hover {
      background-color: rgba(92,201,209,0.12);
      color: #5cc9d1;
    }

    .diatonic-hint {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.64rem;
      color: #6e727a;
      margin-top: 9px;
      margin-bottom: 32px;
    }

    /* Shortcuts Section */
    .shortcuts-list {
      display: flex;
      flex-direction: column;
      gap: 9px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      color: #8d919a;
    }

    .shortcut-row {
      display: flex;
      justify-content: space-between;
    }

    .shortcut-key {
      color: #c8cad0;
    }

    /* Footer Note */
    .footer-desc {
      max-width: 640px;
      margin-top: 52px;
      color: #868b94;
      font-size: 0.82rem;
      line-height: 1.7;
    }

    /* Responsive Breakpoints */
    @media (max-width: 1080px) {
      .container {
        padding: 26px 24px 56px;
      }
      .main-grid {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .chord-name-title {
        font-size: 3.3rem;
      }
    }

    @media (max-width: 680px) {
      .container {
        padding: 18px 14px 48px;
      }
      .brand-header {
        margin-bottom: 24px;
      }
      .brand-status {
        display: none;
      }
      .chord-name-title {
        font-size: 2.5rem;
      }
      .pad-grid {
        grid-template-columns: repeat(8, 44px);
      }
      .col-markers {
        grid-template-columns: 28px repeat(8, 44px);
        min-width: 388px;
      }
      .grid-with-row-nums {
        min-width: 388px;
      }
      .step-tile {
        flex: 0 0 148px;
      }
    }
  `;w([_()],y.prototype,"steps",2);w([_()],y.prototype,"active",2);w([_()],y.prototype,"keyRoot",2);w([_()],y.prototype,"keyMode",2);w([_()],y.prototype,"octave",2);w([_()],y.prototype,"layout",2);w([_()],y.prototype,"playing",2);w([_()],y.prototype,"copied",2);w([_()],y.prototype,"parity",2);w([_()],y.prototype,"vw",2);y=w([le("circuit-chord-forge")],y);
