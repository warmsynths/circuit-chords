(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const Y=globalThis,ft=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,gt=Symbol(),Et=new WeakMap;let ie=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==gt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(ft&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=Et.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Et.set(i,t))}return t}toString(){return this.cssText}};const _e=e=>new ie(typeof e=="string"?e:e+"",void 0,gt),Se=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,s,n)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[n+1],e[0]);return new ie(i,e,gt)},Ee=(e,t)=>{if(ft)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),s=Y.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}},jt=ft?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return _e(i)})(e):e;const{is:je,defineProperty:Ne,getOwnPropertyDescriptor:Ce,getOwnPropertyNames:Te,getOwnPropertySymbols:Re,getPrototypeOf:Ie}=Object,tt=globalThis,Nt=tt.trustedTypes,Oe=Nt?Nt.emptyScript:"",ze=tt.reactiveElementPolyfillSupport,U=(e,t)=>e,X={toAttribute(e,t){switch(t){case Boolean:e=e?Oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},bt=(e,t)=>!je(e,t),Ct={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:bt};Symbol.metadata??=Symbol("metadata"),tt.litPropertyMetadata??=new WeakMap;let I=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Ct){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,i);s!==void 0&&Ne(this.prototype,t,s)}}static getPropertyDescriptor(t,i,o){const{get:s,set:n}=Ce(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get:s,set(a){const r=s?.call(this);n?.call(this,a),this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ct}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Ie(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const i=this.properties,o=[...Te(i),...Re(i)];for(const s of o)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,s]of i)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const s=this._$Eu(i,o);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)i.unshift(jt(s))}else t!==void 0&&i.push(jt(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$ET(t,i){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:X).toAttribute(i,o.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,i){const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:X;this._$Em=s;const r=a.fromAttribute(i,n.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(t,i,o,s=!1,n){if(t!==void 0){const a=this.constructor;if(s===!1&&(n=this[t]),o??=a.getPropertyOptions(t),!((o.hasChanged??bt)(n,i)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,o))))return;this.C(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:o,reflect:s,wrapped:n},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??i??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(i=void 0),this._$AL.set(t,i)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,n]of o){const{wrapped:a}=n,r=this[s];a!==!0||this._$AL.has(s)||r===void 0||this.C(s,void 0,n,r)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(i)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[U("elementProperties")]=new Map,I[U("finalized")]=new Map,ze?.({ReactiveElement:I}),(tt.reactiveElementVersions??=[]).push("2.1.2");const yt=globalThis,Tt=e=>e,Z=yt.trustedTypes,Rt=Z?Z.createPolicy("lit-html",{createHTML:e=>e}):void 0,oe="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+k,Be=`<${se}>`,N=document,F=()=>N.createComment(""),V=e=>e===null||typeof e!="object"&&typeof e!="function",Mt=Array.isArray,De=e=>Mt(e)||typeof e?.[Symbol.iterator]=="function",nt=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Ot=/>/g,S=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Bt=/"/g,ne=/^(?:script|style|textarea|title)$/i,Ue=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),P=Ue(1),z=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Dt=new WeakMap,j=N.createTreeWalker(N,129);function ae(e,t){if(!Mt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(t):t}const Le=(e,t)=>{const i=e.length-1,o=[];let s,n=t===2?"<svg>":t===3?"<math>":"",a=D;for(let r=0;r<i;r++){const c=e[r];let d,m,p=-1,u=0;for(;u<c.length&&(a.lastIndex=u,m=a.exec(c),m!==null);)u=a.lastIndex,a===D?m[1]==="!--"?a=It:m[1]!==void 0?a=Ot:m[2]!==void 0?(ne.test(m[2])&&(s=RegExp("</"+m[2],"g")),a=S):m[3]!==void 0&&(a=S):a===S?m[0]===">"?(a=s??D,p=-1):m[1]===void 0?p=-2:(p=a.lastIndex-m[2].length,d=m[1],a=m[3]===void 0?S:m[3]==='"'?Bt:zt):a===Bt||a===zt?a=S:a===It||a===Ot?a=D:(a=S,s=void 0);const g=a===S&&e[r+1].startsWith("/>")?" ":"";n+=a===D?c+Be:p>=0?(o.push(d),c.slice(0,p)+oe+c.slice(p)+k+g):c+k+(p===-2?r:g)}return[ae(e,n+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Q{constructor({strings:t,_$litType$:i},o){let s;this.parts=[];let n=0,a=0;const r=t.length-1,c=this.parts,[d,m]=Le(t,i);if(this.el=Q.createElement(d,o),j.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=j.nextNode())!==null&&c.length<r;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(oe)){const u=m[a++],g=s.getAttribute(p).split(k),b=/([.?@])?(.*)/.exec(u);c.push({type:1,index:n,name:b[2],strings:g,ctor:b[1]==="."?He:b[1]==="?"?Ge:b[1]==="@"?Fe:et}),s.removeAttribute(p)}else p.startsWith(k)&&(c.push({type:6,index:n}),s.removeAttribute(p));if(ne.test(s.tagName)){const p=s.textContent.split(k),u=p.length-1;if(u>0){s.textContent=Z?Z.emptyScript:"";for(let g=0;g<u;g++)s.append(p[g],F()),j.nextNode(),c.push({type:2,index:++n});s.append(p[u],F())}}}else if(s.nodeType===8)if(s.data===se)c.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(k,p+1))!==-1;)c.push({type:7,index:n}),p+=k.length-1}n++}}static createElement(t,i){const o=N.createElement("template");return o.innerHTML=t,o}}function B(e,t,i=e,o){if(t===z)return t;let s=o!==void 0?i._$Co?.[o]:i._$Cl;const n=V(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(e),s._$AT(e,i,o)),o!==void 0?(i._$Co??=[])[o]=s:i._$Cl=s),s!==void 0&&(t=B(e,s._$AS(e,t.values),s,o)),t}class qe{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,s=(t?.creationScope??N).importNode(i,!0);j.currentNode=s;let n=j.nextNode(),a=0,r=0,c=o[0];for(;c!==void 0;){if(a===c.index){let d;c.type===2?d=new W(n,n.nextSibling,this,t):c.type===1?d=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(d=new Ve(n,this,t)),this._$AV.push(d),c=o[++r]}a!==c?.index&&(n=j.nextNode(),a++)}return j.currentNode=N,s}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}}class W{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,o,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=B(this,t,i),V(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==z&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):De(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Q.createElement(ae(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(i);else{const n=new qe(s,this),a=n.u(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let i=Dt.get(t.strings);return i===void 0&&Dt.set(t.strings,i=new Q(t)),i}k(t){Mt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,s=0;for(const n of t)s===i.length?i.push(o=new W(this.O(F()),this.O(F()),this,this.options)):o=i[s],o._$AI(n),s++;s<i.length&&(this._$AR(o&&o._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const o=Tt(t).nextSibling;Tt(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class et{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,s,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=y}_$AI(t,i=this,o,s){const n=this.strings;let a=!1;if(n===void 0)t=B(this,t,i,0),a=!V(t)||t!==this._$AH&&t!==z,a&&(this._$AH=t);else{const r=t;let c,d;for(t=n[0],c=0;c<n.length-1;c++)d=B(this,r[o+c],i,c),d===z&&(d=this._$AH[c]),a||=!V(d)||d!==this._$AH[c],d===y?t=y:t!==y&&(t+=(d??"")+n[c+1]),this._$AH[c]=d}a&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class He extends et{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class Ge extends et{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class Fe extends et{constructor(t,i,o,s,n){super(t,i,o,s,n),this.type=5}_$AI(t,i=this){if((t=B(this,t,i,0)??y)===z)return;const o=this._$AH,s=t===y&&o!==y||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==y&&(o===y||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ve{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const Qe=yt.litHtmlPolyfillSupport;Qe?.(Q,W),(yt.litHtmlVersions??=[]).push("3.3.3");const We=(e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(s===void 0){const n=i?.renderBefore??null;o._$litPart$=s=new W(t.insertBefore(F(),n),n,void 0,i??{})}return s._$AI(e),s};const Pt=globalThis;class L extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=We(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return z}}L._$litElement$=!0,L.finalized=!0,Pt.litElementHydrateSupport?.({LitElement:L});const Ke=Pt.litElementPolyfillSupport;Ke?.({LitElement:L});(Pt.litElementVersions??=[]).push("4.2.2");const Je=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const Ye={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:bt},Xe=(e=Ye,t,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),o==="accessor"){const{name:a}=i;return{set(r){const c=t.get.call(this);t.set.call(this,r),this.requestUpdate(a,c,e,!0,r)},init(r){return r!==void 0&&this.C(a,void 0,e,r),r}}}if(o==="setter"){const{name:a}=i;return function(r){const c=this[a];t.call(this,r),this.requestUpdate(a,c,e,!0,r)}}throw Error("Unsupported decorator location: "+o)};function Ze(e){return(t,i)=>typeof i=="object"?Xe(e,t,i):((o,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,o),a?Object.getOwnPropertyDescriptor(s,n):void 0})(e,t,i)}function A(e){return Ze({...e,state:!0,attribute:!1})}const E=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],dt=[{id:"maj",label:"maj",iv:[0,4,7]},{id:"min",label:"min",iv:[0,3,7]},{id:"maj7",label:"maj7",iv:[0,4,7,11]},{id:"m7",label:"m7",iv:[0,3,7,10]},{id:"7",label:"7",iv:[0,4,7,10]},{id:"m7b5",label:"m7♭5",iv:[0,3,6,10]},{id:"dim",label:"dim",iv:[0,3,6]},{id:"aug",label:"aug",iv:[0,4,8]},{id:"sus2",label:"sus2",iv:[0,2,7]},{id:"sus4",label:"sus4",iv:[0,5,7]},{id:"6",label:"6",iv:[0,4,7,9]},{id:"add9",label:"add9",iv:[0,4,7,14]}],ti={0:"root",2:"2nd",3:"♭3rd",4:"3rd",5:"4th",6:"♭5th",7:"5th",8:"♯5th",9:"6th",10:"♭7th",11:"maj7",14:"9th"},vt=[0,2,4,5,7,9,11],$t=[0,2,3,5,7,8,10],ei=["maj7","m7","m7","maj7","7","m7","m7b5"],ii=["m7","m7b5","maj7","m7","m7","maj7","7"],oi=["I","ii","iii","IV","V","vi","vii"],si=["i","ii","III","iv","v","VI","VII"],Ut=[0,2,4,5,7,9,11,12],Lt=[null,1,3,null,6,8,10,null];function O(e,t){return(e+1)*12+t}function J(e){const t=E[e%12],i=Math.floor(e/12)-1;return`${t}${i}`}function re(e){return dt.find(t=>t.id===e)||dt[0]}function at(e){const t=E[e.root],i=re(e.q),o=e.q==="maj"?"":e.q==="min"?"m":i.label;return`${t}${o}`}function qt(e,t,i){return(i==="major"?vt:$t).some(s=>(t+s)%12===(e%12+12)%12)}function mt(e,t){const i=re(e.q),o=O(t,e.root);return i.iv.map((s,n)=>({midi:o+s,iv:s,isRoot:n===0,order:n}))}function ni(e,t,i,o){const s=[];if(e==="chromatic")[Lt.map(a=>a===null?null:O(t+1,a)),Ut.map(a=>O(t+1,a)),Lt.map(a=>a===null?null:O(t,a)),Ut.map(a=>O(t,a))].forEach((a,r)=>{a.forEach((c,d)=>{s.push({midi:c,row:4-r,col:d+1})})});else{const n=o==="major"?vt:$t;for(let a=3;a>=0;a--)for(let r=0;r<8;r++){const c=r%7,d=Math.floor(r/7),m=O(t+a+d,i+n[c]);s.push({midi:m,row:a+1,col:r+1})}}return s}function Ht(e,t,i,o,s){const n=ni(i,t,o,s),a=mt(e,t),r=new Map,c=[];return a.forEach(d=>{const m=n.findIndex(p=>p.midi===d.midi);if(m>=0&&!r.has(m)){const p=n[m];r.set(m,{...d,ref:`R${p.row}C${p.col}`})}else c.push(d)}),{cells:n,tones:a,litMap:r,missingTones:c}}let w=null,q=null,R=null;function ai(){if(typeof window>"u")return null;if(!w){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;w=new e,q=w.createGain(),q.gain.value=.5,R=w.createBiquadFilter(),R.type="lowpass",R.frequency.value=2600,R.Q.value=.6,q.connect(R),R.connect(w.destination)}return w.state==="suspended"&&w.resume().catch(()=>{}),w}function ri(e){return 440*Math.pow(2,(e-69)/12)}function li(e){if(typeof e=="number")return e;const t=e.match(/^([A-Ga-g][#b]?)(-?\d+)$/);if(!t)return 60;const i=t[1].toUpperCase(),o=parseInt(t[2],10),n={C:0,"C#":1,DB:1,D:2,"D#":3,EB:3,E:4,F:5,"F#":6,GB:6,G:7,"G#":8,AB:8,A:9,"A#":10,BB:10,B:11}[i]??0;return(o+1)*12+n}function pt(e,t=1.15){const i=ai();if(!i||!q)return;const o=i.currentTime+.015,s=Math.max(.2,t);e.map(li).forEach((a,r)=>{const c=ri(a),d=i.createGain(),m=o+r*.028;d.gain.setValueAtTime(1e-4,m),d.gain.linearRampToValueAtTime(.16,m+.02),d.gain.exponentialRampToValueAtTime(.055,m+.22),d.gain.exponentialRampToValueAtTime(1e-4,m+s),d.connect(q),[{type:"triangle",cents:0},{type:"sine",cents:-5}].forEach(({type:u,cents:g})=>{const b=i.createOscillator();b.type=u,b.frequency.value=c*Math.pow(2,g/1200),b.connect(d),b.start(m),b.stop(m+s+.05)})})}function Gt(e,t=.6){pt([e],t)}function le(e){return e!==null&&typeof e=="object"&&"name"in e&&typeof e.name=="string"}function ce(e){return e!==null&&typeof e=="object"&&"step"in e&&typeof e.step=="number"&&"alt"in e&&typeof e.alt=="number"&&!isNaN(e.step)&&!isNaN(e.alt)}var de=[0,2,4,-1,1,3,5],me=de.map(e=>Math.floor(e*7/12));function pe(e){const{step:t,alt:i,oct:o,dir:s=1}=e,n=de[t]+7*i;if(o===void 0)return[s*n];const a=o-me[t]-4*i;return[s*n,s*a]}var ci=[3,0,4,1,5,2,6];function he(e){const[t,i,o]=e,s=ci[di(t)],n=Math.floor((t+1)/7);if(i===void 0)return{step:s,alt:n,dir:o};const a=i+4*n+me[s];return{step:s,alt:n,oct:a,dir:o}}function di(e){const t=(e+1)%7;return t<0?7+t:t}var Ft=(e,t)=>Array(Math.abs(t)+1).join(e),ht=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),mi="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",pi="(AA|A|P|M|m|d|dd)([-+]?\\d+)",hi=new RegExp("^"+mi+"|"+pi+"$");function ui(e){const t=hi.exec(`${e}`);return t===null?["",""]:t[1]?[t[1],t[2]]:[t[4],t[3]]}var Vt={};function C(e){return typeof e=="string"?Vt[e]||(Vt[e]=fi(e)):ce(e)?C(bi(e)):le(e)?C(e.name):ht}var Qt=[0,2,4,5,7,9,11],ue="PMMPPMM";function fi(e){const t=ui(e);if(t[0]==="")return ht;const i=+t[0],o=t[1],s=(Math.abs(i)-1)%7,n=ue[s];if(n==="M"&&o==="P")return ht;const a=n==="M"?"majorable":"perfectable",r=""+i+o,c=i<0?-1:1,d=i===8||i===-8?i:c*(s+1),m=gi(a,o),p=Math.floor((Math.abs(i)-1)/7),u=c*(Qt[s]+m+12*p),g=(c*(Qt[s]+m)%12+12)%12,b=pe({step:s,alt:m,oct:p,dir:c});return{empty:!1,name:r,num:i,q:o,step:s,alt:m,dir:c,type:a,simple:d,semitones:u,chroma:g,coord:b,oct:p}}function fe(e,t){const[i,o=0]=e,s=i*7+o*12<0,n=t||s?[-i,-o,-1]:[i,o,1];return C(he(n))}function gi(e,t){return t==="M"&&e==="majorable"||t==="P"&&e==="perfectable"?0:t==="m"&&e==="majorable"?-1:/^A+$/.test(t)?t.length:/^d+$/.test(t)?-1*(e==="perfectable"?t.length:t.length+1):0}function bi(e){const{step:t,alt:i,oct:o=0,dir:s}=e;if(!s)return"";const n=t+1+7*o,a=n===0?t+1:n,r=s<0?"-":"",c=ue[t]==="M"?"majorable":"perfectable";return r+a+yi(c,i)}function yi(e,t){return t===0?e==="majorable"?"M":"P":t===-1&&e==="majorable"?"m":t>0?Ft("A",t):Ft("d",e==="perfectable"?t:t+1)}var Wt=(e,t)=>Array(Math.abs(t)+1).join(e),ge=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),Kt=new Map,Mi=e=>"CDEFGAB".charAt(e),Pi=e=>e<0?Wt("b",-e):Wt("#",e),vi=e=>e[0]==="b"?-e.length:e.length;function $(e){const t=JSON.stringify(e),i=Kt.get(t);if(i)return i;const o=typeof e=="string"?wi(e):ce(e)?$(ki(e)):le(e)?$(e.name):ge;return Kt.set(t,o),o}var $i=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function xt(e){const t=$i.exec(e);return t?[t[1].toUpperCase(),t[2].replace(/x/g,"##"),t[3],t[4]]:["","","",""]}function xi(e){return $(he(e))}var Ai=(e,t)=>(e%t+t)%t,rt=[0,2,4,5,7,9,11];function wi(e){const t=xt(e);if(t[0]===""||t[3]!=="")return ge;const i=t[0],o=t[1],s=t[2],n=(i.charCodeAt(0)+3)%7,a=vi(o),r=s.length?+s:void 0,c=pe({step:n,alt:a,oct:r}),d=i+o+s,m=i+o,p=(rt[n]+a+120)%12,u=r===void 0?Ai(rt[n]+a,12)-1188:rt[n]+a+12*(r+1),g=u>=0&&u<=127?u:null,b=r===void 0?null:Math.pow(2,(u-69)/12)*440;return{empty:!1,acc:o,alt:a,chroma:p,coord:c,freq:b,height:u,letter:i,midi:g,name:d,oct:r,pc:m,step:n}}function ki(e){const{step:t,alt:i,oct:o}=e,s=Mi(t);if(!s)return"";const n=s+Pi(i);return o||o===0?n+o:n}function be(e,t){const i=$(e),o=Array.isArray(t)?t:C(t).coord;if(i.empty||!o||o.length<2)return"";const s=i.coord,n=s.length===1?[s[0]+o[0]]:[s[0]+o[0],s[1]+o[1]];return xi(n).name}function Jt(e,t){const i=$(e),o=$(t);if(i.empty||o.empty)return"";const s=i.coord,n=o.coord,a=n[0]-s[0],r=s.length===2&&n.length===2?n[1]-s[1]:-Math.floor(a*7/12),c=o.height===i.height&&o.midi!==null&&i.oct===o.oct&&i.step>o.step;return fe([a,r],c).name}function ye(e,t){const i=t.length,o=(e%i+i)%i;return t.slice(o,i).concat(t.slice(0,o))}var T={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},Me=e=>Number(e).toString(2).padStart(12,"0"),Yt=e=>parseInt(e,2),_i=/^[01]{12}$/;function Pe(e){return _i.test(e)}var Si=e=>typeof e=="number"&&e>=0&&e<=4095,Ei=e=>e&&Pe(e.chroma),Xt={[T.chroma]:T};function ve(e){const t=Pe(e)?e:Si(e)?Me(e):Array.isArray(e)?Ri(e):Ei(e)?e.chroma:T.chroma;return Xt[t]=Xt[t]||Ti(t)}var ji=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Ni(e){const t=[];for(let i=0;i<12;i++)e.charAt(i)==="1"&&t.push(ji[i]);return t}function Ci(e){const t=e.split("");return t.map((i,o)=>ye(o,t).join(""))}function Ti(e){const t=Yt(e),i=Ci(e).map(Yt).filter(n=>n>=2048).sort()[0],o=Me(i),s=Ni(e);return{empty:!1,name:"",setNum:t,chroma:e,normalized:o,intervals:s}}function Ri(e){if(e.length===0)return T.chroma;let t;const i=[0,0,0,0,0,0,0,0,0,0,0,0];for(let o=0;o<e.length;o++)t=$(e[o]),t.empty&&(t=C(e[o])),t.empty||(i[t.chroma]=1);return i.join("")}var Ii=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Oi=Ii,zi={...T,name:"",quality:"Unknown",intervals:[],aliases:[]},$e=[],H={};function Bi(e){return H[e]||zi}function Di(e,t,i){const o=Li(e),s={...ve(e),name:i||"",quality:o,intervals:e,aliases:t};$e.push(s),s.name&&(H[s.name]=s),H[s.setNum]=s,H[s.chroma]=s,s.aliases.forEach(n=>Ui(s,n))}function Ui(e,t){H[t]=e}function Li(e){const t=i=>e.indexOf(i)!==-1;return t("5A")?"Augmented":t("3M")?"Major":t("5d")?"Diminished":t("3m")?"Minor":"Unknown"}Oi.forEach(([e,t,i])=>Di(e.split(" "),i.split(" "),t));$e.sort((e,t)=>e.setNum-t.setNum);var qi=Hi((e,t)=>[e[0]-t[0],e[1]-t[1]]);function Hi(e){return(t,i)=>{const o=C(t).coord,s=C(i).coord;if(o&&s){const n=e(o,s);return fe(n).name}}}var Gi=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Fi=Gi,Vi={...T,intervals:[],aliases:[]},G={};function Qi(e){return G[e]||Vi}function Wi(e,t,i=[]){const o={...ve(e),name:t,intervals:e,aliases:i};return G[o.name]=o,G[o.setNum]=o,G[o.chroma]=o,o.aliases.forEach(s=>Ki(o,s)),o}function Ki(e,t){G[t]=e}Fi.forEach(([e,t,...i])=>Wi(e.split(" "),t,i));var xe={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function At(e){const[t,i,o,s]=xt(e);return t===""?lt("",e):t==="A"&&s==="ug"?lt("","aug"):lt(t+i,o+s)}function lt(e,t){const i=t.split("/");if(i.length===1)return[e,i[0],""];const[o,s,n,a]=xt(i[1]);return o!==""&&n===""&&a===""?[e,i[0],o+s]:[e,t,""]}function Zt(e){if(Array.isArray(e))return ct(e[1]||"",e[0],e[2]);if(e==="")return xe;{const[t,i,o]=At(e),s=ct(i,t,o);return s.empty?ct(e):s}}function ct(e,t,i){const o=Bi(e),s=$(t||""),n=$(i||"");if(o.empty||t&&s.empty||i&&n.empty)return xe;const a=Jt(s.pc,n.pc),r=o.intervals.indexOf(a),c=r>=0,d=c?n:$(""),m=r===-1?NaN:r+1,p=n.pc&&n.pc!==s.pc,u=Array.from(o.intervals);if(c)for(let h=1;h<m;h++){const M=u[0][0],f=u[0][1],K=parseInt(M,10)+7;u.push(`${K}${f}`),u.shift()}else if(p){const h=qi(Jt(s.pc,n.pc),"8P");h&&u.unshift(h)}const g=s.empty?[]:u.map(h=>be(s.pc,h));e=o.aliases.indexOf(e)!==-1?e:o.aliases[0];const b=`${s.empty?"":s.pc}${e}${c&&m>1?"/"+d.pc:p?"/"+n.pc:""}`,l=`${t?s.pc+" ":""}${o.name}${c&&m>1?" over "+d.pc:p?" over "+n.pc:""}`;return{...o,name:l,symbol:b,tonic:s.pc,type:o.name,root:d.pc,bass:p?n.pc:"",intervals:u,rootDegree:m,notes:g}}var Ji=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],Yi=Ji;Yi.forEach(([e,t,i])=>void 0);var Ae=$,Xi=e=>Ae(e).midi,Zi=e=>Ae(e).chroma,wt=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],te={...T,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},to=wt.map(eo),ut={};to.forEach(e=>{ut[e.name]=e,e.aliases.forEach(t=>{ut[t]=e})});function we(e){return typeof e=="string"?ut[e.toLowerCase()]||te:e&&e.name?we(e.name):te}function eo(e){const[t,i,o,s,n,a,r]=e,c=r?[r]:[],d=Number(i).toString(2);return{empty:!1,intervals:Qi(s).intervals,modeNum:t,chroma:d,normalized:d,name:s,setNum:i,alt:o,triad:n,seventh:a,aliases:c}}function ke(e){return(t,i)=>{const o=we(t);if(o.empty)return[];const s=ye(o.modeNum,e),n=o.intervals.map(a=>be(i,a));return s.map((a,r)=>n[r]+a)}}ke(wt.map(e=>e[4]));ke(wt.map(e=>e[5]));function io(e){let t=e;return t=t.replace(/diminished/gi,"diminished"),t=t.replace(/dim/gi,"dim"),t=t.replace(/minor/gi,"minor"),t=t.replace(/min/gi,"min"),t=t.replace(/major/gi,"major"),t=t.replace(/maj/gi,"maj"),t=t.replace(/aug/gi,"aug"),t=t.replace(/sus/gi,"sus"),t=t.replace(/dom/gi,"dom"),t=t.replace(/minmaj/gi,"mMaj"),t=t.replace(/mmaj/gi,"mMaj"),t}function oo(e){return e.replace(/([A-G])(B+)/g,(i,o,s)=>o+"b".repeat(s.length)).replace(/->|→|–|—/g," ").replace(/[|>,;:]/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim()}function so(e){const t=oo(e),i=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,o=t.match(i);return o?o.map(s=>s.trim()):[]}function no(e){const t=so(e),i=[];for(const o of t){let s=Zt(o);if(s.empty||s.notes.length===0){const[n,a,r]=At(o);if(n){const c=io(a),d=n+c+(r?"/"+r:""),m=Zt(d);!m.empty&&m.notes.length>0&&(s=m)}}s.empty||s.notes.length===0||i.push({symbol:s.symbol||o,tonic:s.tonic,quality:s.quality,notes:s.notes,intervals:s.intervals,aliases:s.aliases})}return i}function ao(e){const t=e.tonic?Zi(e.tonic)??(Xi(e.tonic+"4")??60)%12:0,i=e.symbol||"",[,o]=At(i),s=(o||"").trim(),n=(e.quality||"").toLowerCase();let a="maj";return/m7b5|min7b5|m7-5|half|ø/i.test(s)||n.includes("half-diminished")?a="m7b5":/dim|°/i.test(s)||n.includes("diminished")?a="dim":/aug|\+/i.test(s)||n.includes("augmented")?a="aug":/sus2/i.test(s)?a="sus2":/sus4|sus/i.test(s)?a="sus4":/add9|add2/i.test(s)?a="add9":/^(?:6|add6|maj6)$/i.test(s)?a="6":/maj7|maj9|maj11|maj13|Δ|ma7/i.test(s)||s.includes("M7")||s.includes("M9")||s.includes("M11")||s.includes("M13")||n==="major"&&(e.aliases?.some(r=>/maj7|M7|Δ/i.test(r))??!1)?a="maj7":/^(?:m7|min7|-7|m9|min9|-9|m11|min11|m13|min13|m6|min6)$/i.test(s)||n==="minor"&&(e.intervals?.includes("10m")||e.intervals?.includes("10d")||/7|9|11|13/.test(s))?a="m7":/^(?:7|9|11|13|dom|dom7|7b9|7#9|7b5|7#5|7alt)$/i.test(s)||n==="major"&&/7|9|11|13/.test(s)?a="7":n==="minor"||/^(?:m|min|-)$/i.test(s)?a="min":(n==="major"||/^(?:maj|m)?$/i.test(s))&&(a="maj"),{root:t,q:a}}function ro(e){return no(e).map(ao).slice(0,16)}var lo=Object.defineProperty,co=Object.getOwnPropertyDescriptor,x=(e,t,i,o)=>{for(var s=o>1?void 0:o?co(t,i):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&lo(t,i,s),s};const ee="circuit_chords_v2_state",mo=[{root:0,q:"maj7"},{root:9,q:"m7"},{root:2,q:"m7"},{root:7,q:"7"}];let v=class extends L{constructor(){super(...arguments),this.steps=mo,this.active=0,this.keyRoot=0,this.keyMode="major",this.octave=3,this.layout="chromatic",this.playing=!1,this.copied=!1,this.parity=!1,this.vw=typeof window<"u"?window.innerWidth:1280,this.transportTimer=null,this.lastSig="",this.handleResize=()=>{this.vw=window.innerWidth},this.handleKeyDown=e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement||e.target instanceof HTMLTextAreaElement)return;const t=this.steps.length;e.key==="ArrowRight"?(e.preventDefault(),this.active=(this.active+1)%t,this.persistState()):e.key==="ArrowLeft"?(e.preventDefault(),this.active=(this.active-1+t)%t,this.persistState()):e.key==="ArrowUp"?(e.preventDefault(),this.bumpOctave(1)):e.key==="ArrowDown"?(e.preventDefault(),this.bumpOctave(-1)):e.key===" "?(e.preventDefault(),this.toggleTransport()):e.key==="Enter"&&(e.preventDefault(),this.auditionActive())}}connectedCallback(){super.connectedCallback(),this.loadInitialState(),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("resize",this.handleResize),this.transportTimer&&(clearInterval(this.transportTimer),this.transportTimer=null)}loadInitialState(){let e=typeof window<"u"?window.location.search:"";typeof window<"u"&&window.location.hash&&!window.location.hash.startsWith("#/")&&(e+=window.location.hash);const t=new URLSearchParams(e),i=t.get("p")||t.get("progression");if(i&&i.trim()){const o=ro(i.trim());if(o.length>0){this.steps=o,this.active=0;const s=o[0];if(this.keyRoot=s.root,this.keyMode=["min","m7","m7b5","dim"].includes(s.q)?"minor":"major",t.has("key")){const n=t.get("key"),a=parseInt(n,10);if(!isNaN(a)&&a>=0&&a<=11)this.keyRoot=a;else{const r=E.indexOf(n.toUpperCase());r>=0&&(this.keyRoot=r)}}if(t.has("mode")){const n=t.get("mode").toLowerCase();(n==="major"||n==="minor")&&(this.keyMode=n)}if(t.has("octave")){const n=parseInt(t.get("octave"),10);!isNaN(n)&&n>=1&&n<=6&&(this.octave=n)}if(t.has("layout")){const n=t.get("layout");(n==="chromatic"||n==="in-key")&&(this.layout=n)}this.persistState();return}}this.loadPersistedState()}loadPersistedState(){try{const e=localStorage.getItem(ee);if(e){const t=JSON.parse(e);Array.isArray(t.steps)&&t.steps.length>0&&(this.steps=t.steps),typeof t.active=="number"&&(this.active=Math.max(0,Math.min(t.active,this.steps.length-1))),typeof t.keyRoot=="number"&&(this.keyRoot=t.keyRoot),(t.keyMode==="major"||t.keyMode==="minor")&&(this.keyMode=t.keyMode),typeof t.octave=="number"&&(this.octave=Math.max(1,Math.min(6,t.octave))),(t.layout==="chromatic"||t.layout==="in-key")&&(this.layout=t.layout)}}catch{}}persistState(){try{const e={steps:this.steps,active:this.active,keyRoot:this.keyRoot,keyMode:this.keyMode,octave:this.octave,layout:this.layout};localStorage.setItem(ee,JSON.stringify(e))}catch{}}bumpOctave(e){const t=Math.max(1,Math.min(6,this.octave+e));t!==this.octave&&(this.octave=t,this.persistState())}auditionActive(){const e=this.steps[this.active];if(e){const t=mt(e,this.octave);pt(t.map(i=>i.midi))}}toggleTransport(){if(this.transportTimer){clearInterval(this.transportTimer),this.transportTimer=null,this.playing=!1;return}this.playing=!0;const e=()=>{const t=this.steps[this.active];if(t){const i=mt(t,this.octave);pt(i.map(o=>o.midi),.85)}this.active=(this.active+1)%this.steps.length,this.persistState()};e(),this.transportTimer=window.setInterval(e,980)}setStepRoot(e){this.steps=this.steps.map((t,i)=>i===this.active?{...t,root:e}:t),this.persistState()}setStepQuality(e){this.steps=this.steps.map((t,i)=>i===this.active?{...t,q:e}:t),this.persistState()}addStep(){if(this.steps.length>=16)return;const e=this.steps[this.steps.length-1]||{root:this.keyRoot,q:"maj7"};this.steps=[...this.steps,{...e}],this.active=this.steps.length-1,this.persistState()}removeStep(){if(this.steps.length<=1)return;const e=this.steps.filter((t,i)=>i!==this.active);this.steps=e,this.active=Math.min(this.active,e.length-1),this.persistState()}copyPadList(e,t){const i=`${e} — ${t.map(o=>`${o.pitch}→${o.ref}`).join("  ")}`;navigator.clipboard&&navigator.clipboard.writeText(i).catch(()=>{}),this.copied=!0,setTimeout(()=>{this.copied=!1},1600)}renderMiniCells(e){const{cells:t,litMap:i}=Ht(e,this.octave,this.layout,this.keyRoot,this.keyMode);return t.map((o,s)=>{const n=i.get(s);let a="#242730";return n?a=n.isRoot?"#5cc9d1":"#d1608f":o.midi===null?a="#1f2126":qt(o.midi%12,this.keyRoot,this.keyMode)&&(a="#2b3038"),P`<div class="mini-cell" style="background: ${a};"></div>`})}render(){const e=this.steps[this.active]||this.steps[0]||{root:0,q:"maj7"},{cells:t,tones:i,litMap:o,missingTones:s}=Ht(e,this.octave,this.layout,this.keyRoot,this.keyMode),n=o.size,a=at(e),r=`${e.root}:${e.q}:${this.octave}:${this.layout}:${this.keyRoot}:${this.keyMode}:${this.active}`;r!==this.lastSig&&(this.lastSig=r,this.parity=!this.parity);const c=this.parity?"A":"B";let d=null;o.forEach((l,h)=>{l.isRoot&&(d=t[h])});const m=l=>d?Math.max(Math.abs(l.row-d.row),Math.abs(l.col-d.col)):Math.abs(l.col-4),p=i.map(l=>{const h=Array.from(o.entries()).find(([,M])=>M.order===l.order);return{pitch:J(l.midi),ref:h?h[1].ref:"off plate",deg:ti[l.iv]||"tone",isRoot:l.isRoot}}),u=this.keyMode==="major"?vt:$t,g=this.keyMode==="major"?oi:si,b=this.keyMode==="major"?ei:ii;return P`
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
                STEP ${String(this.active+1).padStart(2,"0")} / ${String(this.steps.length).padStart(2,"0")}  ·  ${E[this.keyRoot]} ${this.keyMode.toUpperCase()}  ·  ${this.layout==="chromatic"?"CHROMATIC LAYOUT":"IN-KEY LAYOUT"}
              </div>
              <div class="chord-title-row">
                <div class="chord-name-title" key="${a}">${a}</div>
                <div class="chord-sub-badge">
                  ${n} ${n===1?"pad":"pads"} · close voicing
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
            ${s.length>0?P`
                  <div class="warning-banner">
                    ${s.length} ${s.length===1?"tone":"tones"} off the plate (${s.map(l=>J(l.midi)).join(", ")}) — shift the base octave or switch layout
                  </div>
                `:""}

            <!-- Progression Step Strip -->
            <div>
              <div class="section-header-row">
                <div class="section-label">PROGRESSION</div>
                <div class="section-detail">${this.steps.length} of 16 steps used</div>
              </div>
              <div class="step-strip">
                ${this.steps.map((l,h)=>{const M=h===this.active;return P`
                    <div
                      class="step-tile ${M?"active":""}"
                      tabindex="0"
                      role="button"
                      aria-label="Step ${h+1}, ${at(l)}${M?", active":""}"
                      @click=${()=>{this.active=h,this.auditionActive(),this.persistState()}}
                      @keydown=${f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),this.active=h,this.auditionActive(),this.persistState())}}
                    >
                      <div class="step-tile-top">
                        <span class="step-tile-name">${at(l)}</span>
                        <span class="step-tile-num">${String(h+1).padStart(2,"0")}</span>
                      </div>
                      <div class="mini-grid">
                        ${this.renderMiniCells(l)}
                      </div>
                    </div>
                  `})}
                ${this.steps.length<16?P`
                      <div
                        class="add-step-btn"
                        tabindex="0"
                        role="button"
                        aria-label="Add step"
                        title="add step"
                        @click=${()=>this.addStep()}
                        @keydown=${l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.addStep())}}
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
                  ${[1,2,3,4,5,6,7,8].map(l=>P`<div class="col-num">${l}</div>`)}
                </div>

                <div class="grid-with-row-nums">
                  <div class="row-markers">
                    ${[4,3,2,1].map(l=>P`<div class="row-num">${l}</div>`)}
                  </div>

                  <div class="pad-grid">
                    ${t.map((l,h)=>{const M=o.get(h),f=l.midi===null,K=f?"":E[l.midi%12],kt=!f&&K.length===1,_t=m(l);let it="transparent",ot="transparent",St="400",st="none";if(M)it=M.isRoot?"#5cc9d1":"#d1608f",ot="#121418",St="500",st=`padBloom${c} 560ms cubic-bezier(.2,.75,.25,1) ${70+_t*46}ms both`;else if(!f){const _=qt(l.midi%12,this.keyRoot,this.keyMode);it=_?kt?"#2d343e":"#252b33":kt?"#342a31":"#2a2329",ot=_?"#aeb7c1":"#a2909c",st=`padDim${c} 420ms ease ${_t*22}ms both${_?`, ambientShimmer 5.2s ease-in-out ${((l.row+l.col)*.13).toFixed(2)}s infinite`:""}`}return P`
                        <div
                          class="pad-btn ${f?"empty":""}"
                          style="
                            background: ${it};
                            color: ${ot};
                            font-weight: ${St};
                            animation: ${st};
                          "
                          tabindex="${f?-1:0}"
                          role="button"
                          aria-label="${f?"Empty pad":`${J(l.midi)} row ${l.row} col ${l.col}`}"
                          title="${f?"no pad":`${J(l.midi)} · row ${l.row} col ${l.col}`}"
                          @click=${()=>{!f&&l.midi!==null&&(Gt(l.midi,.6),this.setStepRoot(l.midi%12))}}
                          @keydown=${_=>{!f&&l.midi!==null&&(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),Gt(l.midi,.6),this.setStepRoot(l.midi%12))}}
                        >
                          ${K}
                        </div>
                      `})}
                  </div>
                </div>
              </div>

              <div class="plate-caption-row">
                <span>Hold ${n} ${n===1?"pad":"pads"} together — ${p.map(l=>`${l.pitch}→${l.ref}`).join("  ")}</span>
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
                class="piano-black-key ${e.root===1?"active":""}"
                style="grid-column: 2/4;"
                tabindex="0"
                role="button"
                aria-label="C sharp root"
                @click=${()=>this.setStepRoot(1)}
              >
                C♯
              </div>
              <div
                class="piano-black-key ${e.root===3?"active":""}"
                style="grid-column: 4/6;"
                tabindex="0"
                role="button"
                aria-label="D sharp root"
                @click=${()=>this.setStepRoot(3)}
              >
                D♯
              </div>
              <div
                class="piano-black-key ${e.root===6?"active":""}"
                style="grid-column: 8/10;"
                tabindex="0"
                role="button"
                aria-label="F sharp root"
                @click=${()=>this.setStepRoot(6)}
              >
                F♯
              </div>
              <div
                class="piano-black-key ${e.root===8?"active":""}"
                style="grid-column: 10/12;"
                tabindex="0"
                role="button"
                aria-label="G sharp root"
                @click=${()=>this.setStepRoot(8)}
              >
                G♯
              </div>
              <div
                class="piano-black-key ${e.root===10?"active":""}"
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
              ${[{root:0,label:"C"},{root:2,label:"D"},{root:4,label:"E"},{root:5,label:"F"},{root:7,label:"G"},{root:9,label:"A"},{root:11,label:"B"}].map(l=>P`
                  <div
                    class="piano-white-key ${e.root===l.root?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="${l.label} root"
                    @click=${()=>this.setStepRoot(l.root)}
                  >
                    ${l.label}
                  </div>
                `)}
            </div>

            <!-- 12 Chord Qualities -->
            <div class="quality-grid">
              ${dt.map(l=>P`
                  <div
                    class="quality-tile ${e.q===l.id?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="${l.label} quality"
                    @click=${()=>this.setStepQuality(l.id)}
                  >
                    ${l.label}
                  </div>
                `)}
            </div>

            <!-- Tones Breakdown -->
            <div class="sidebar-title">TONES</div>
            <div class="tones-table">
              ${p.map(l=>P`
                  <div class="tone-row">
                    <span class="tone-deg">${l.deg}</span>
                    <span style="color: ${l.isRoot?"#5cc9d1":"#d1608f"};">
                      ${l.pitch} ${l.ref!=="off plate"?l.ref:"(off plate)"}
                    </span>
                  </div>
                `)}
            </div>

            <!-- Key & Diatonic Builder -->
            <div class="sidebar-title">KEY</div>
            <select
              class="key-select"
              .value="${this.keyRoot}:${this.keyMode}"
              @change=${l=>{const h=l.target,[M,f]=h.value.split(":");this.keyRoot=parseInt(M,10),this.keyMode=f,this.persistState()}}
            >
              ${E.map((l,h)=>P`
                <option value="${h}:major" ?selected=${this.keyRoot===h&&this.keyMode==="major"}>
                  ${l} major
                </option>
                <option value="${h}:minor" ?selected=${this.keyRoot===h&&this.keyMode==="minor"}>
                  ${l} minor
                </option>
              `)}
            </select>

            <div class="diatonic-grid">
              ${g.map((l,h)=>{const M=(this.keyRoot+u[h])%12,f=b[h];return P`
                  <div
                    class="diatonic-tile"
                    tabindex="0"
                    role="button"
                    aria-label="Add ${l} chord"
                    title="add ${E[M]}${f} to progression"
                    @click=${()=>{this.steps.length>=16||(this.steps=[...this.steps,{root:M,q:f}],this.active=this.steps.length-1,this.persistState())}}
                  >
                    ${l}
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
    `}};v.styles=Se`
    :host {
      display: block;
      min-height: 100vh;
      background: #17181c; /* Deep studio grey/black */
      color: #e8e9ec;
      font-family: 'Inter', system-ui, sans-serif;
      --pad-gap: 8px;
      --plate-bg: #1c1e23;
    }

    /* Custom Scrollbars for Sleek Desktop UI */
    ::-webkit-scrollbar {
      height: 6px;
      width: 6px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.02);
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.12);
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    *, *::before, *::after {
      box-sizing: border-box;
    }

    @media (prefers-reduced-motion: reduce) {
      * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
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
        grid-template-columns: repeat(8, 1fr);
        gap: 4px;
      }
      .col-markers {
        grid-template-columns: 22px repeat(8, 1fr);
        gap: 4px;
        min-width: 0;
      }
      .grid-with-row-nums {
        grid-template-columns: 22px 1fr;
        gap: 4px;
        min-width: 0;
      }
      .row-markers {
        gap: 4px;
      }
      .step-tile {
        flex: 0 0 148px;
      }
    }
  `;x([A()],v.prototype,"steps",2);x([A()],v.prototype,"active",2);x([A()],v.prototype,"keyRoot",2);x([A()],v.prototype,"keyMode",2);x([A()],v.prototype,"octave",2);x([A()],v.prototype,"layout",2);x([A()],v.prototype,"playing",2);x([A()],v.prototype,"copied",2);x([A()],v.prototype,"parity",2);x([A()],v.prototype,"vw",2);v=x([Je("circuit-chord-forge")],v);
