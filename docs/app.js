(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const et=globalThis,yt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Pt=Symbol(),jt=new WeakMap;let se=class{constructor(t,i,s){if(this._$cssResult$=!0,s!==Pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(yt&&t===void 0){const s=i!==void 0&&i.length===1;s&&(t=jt.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&jt.set(i,t))}return t}toString(){return this.cssText}};const Se=e=>new se(typeof e=="string"?e:e+"",void 0,Pt),_e=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((s,o,n)=>s+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1],e[0]);return new se(i,e,Pt)},Ee=(e,t)=>{if(yt)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const s=document.createElement("style"),o=et.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=i.cssText,e.appendChild(s)}},Nt=yt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return Se(i)})(e):e;const{is:Ce,defineProperty:je,getOwnPropertyDescriptor:Ne,getOwnPropertyNames:Te,getOwnPropertySymbols:Re,getPrototypeOf:Ie}=Object,nt=globalThis,Tt=nt.trustedTypes,Oe=Tt?Tt.emptyScript:"",ze=nt.reactiveElementPolyfillSupport,G=(e,t)=>e,it={toAttribute(e,t){switch(t){case Boolean:e=e?Oe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},Mt=(e,t)=>!Ce(e,t),Rt={attribute:!0,type:String,converter:it,reflect:!1,useDefault:!1,hasChanged:Mt};Symbol.metadata??=Symbol("metadata"),nt.litPropertyMetadata??=new WeakMap;let O=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Rt){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const s=Symbol(),o=this.getPropertyDescriptor(t,s,i);o!==void 0&&je(this.prototype,t,o)}}static getPropertyDescriptor(t,i,s){const{get:o,set:n}=Ne(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get:o,set(a){const l=o?.call(this);n?.call(this,a),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Rt}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const t=Ie(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const i=this.properties,s=[...Te(i),...Re(i)];for(const o of s)this.createProperty(o,i[o])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[s,o]of i)this.elementProperties.set(s,o)}this._$Eh=new Map;for(const[i,s]of this.elementProperties){const o=this._$Eu(i,s);o!==void 0&&this._$Eh.set(o,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const o of s)i.unshift(Nt(o))}else t!==void 0&&i.push(Nt(t));return i}static _$Eu(t,i){const s=i.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const s of i.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$ET(t,i){const s=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,s);if(o!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:it).toAttribute(i,s.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,i){const s=this.constructor,o=s._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const n=s.getPropertyOptions(o),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:it;this._$Em=o;const l=a.fromAttribute(i,n.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(t,i,s,o=!1,n){if(t!==void 0){const a=this.constructor;if(o===!1&&(n=this[t]),s??=a.getPropertyOptions(t),!((s.hasChanged??Mt)(n,i)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,s))))return;this.C(t,i,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:s,reflect:o,wrapped:n},a){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??i??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(i=void 0),this._$AL.set(t,i)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,n]of s){const{wrapped:a}=n,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(i)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[G("elementProperties")]=new Map,O[G("finalized")]=new Map,ze?.({ReactiveElement:O}),(nt.reactiveElementVersions??=[]).push("2.1.2");const $t=globalThis,It=e=>e,ot=$t.trustedTypes,Ot=ot?ot.createPolicy("lit-html",{createHTML:e=>e}):void 0,ne="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,ae="?"+w,Be=`<${ae}>`,j=document,Q=()=>j.createComment(""),X=e=>e===null||typeof e!="object"&&typeof e!="function",xt=Array.isArray,De=e=>xt(e)||typeof e?.[Symbol.iterator]=="function",dt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Bt=/>/g,E=RegExp(`>|${dt}(?:([^\\s"'>=/]+)(${dt}*=${dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dt=/'/g,Ut=/"/g,re=/^(?:script|style|textarea|title)$/i,Ue=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),y=Ue(1),D=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),qt=new WeakMap,C=j.createTreeWalker(j,129);function le(e,t){if(!xt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const qe=(e,t)=>{const i=e.length-1,s=[];let o,n=t===2?"<svg>":t===3?"<math>":"",a=q;for(let l=0;l<i;l++){const c=e[l];let m,p,d=-1,h=0;for(;h<c.length&&(a.lastIndex=h,p=a.exec(c),p!==null);)h=a.lastIndex,a===q?p[1]==="!--"?a=zt:p[1]!==void 0?a=Bt:p[2]!==void 0?(re.test(p[2])&&(o=RegExp("</"+p[2],"g")),a=E):p[3]!==void 0&&(a=E):a===E?p[0]===">"?(a=o??q,d=-1):p[1]===void 0?d=-2:(d=a.lastIndex-p[2].length,m=p[1],a=p[3]===void 0?E:p[3]==='"'?Ut:Dt):a===Ut||a===Dt?a=E:a===zt||a===Bt?a=q:(a=E,o=void 0);const b=a===E&&e[l+1].startsWith("/>")?" ":"";n+=a===q?c+Be:d>=0?(s.push(m),c.slice(0,d)+ne+c.slice(d)+w+b):c+w+(d===-2?l:b)}return[le(e,n+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class Y{constructor({strings:t,_$litType$:i},s){let o;this.parts=[];let n=0,a=0;const l=t.length-1,c=this.parts,[m,p]=qe(t,i);if(this.el=Y.createElement(m,s),C.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=C.nextNode())!==null&&c.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(ne)){const h=p[a++],b=o.getAttribute(d).split(w),r=/([.?@])?(.*)/.exec(h);c.push({type:1,index:n,name:r[2],strings:b,ctor:r[1]==="."?He:r[1]==="?"?Ge:r[1]==="@"?Ve:at}),o.removeAttribute(d)}else d.startsWith(w)&&(c.push({type:6,index:n}),o.removeAttribute(d));if(re.test(o.tagName)){const d=o.textContent.split(w),h=d.length-1;if(h>0){o.textContent=ot?ot.emptyScript:"";for(let b=0;b<h;b++)o.append(d[b],Q()),C.nextNode(),c.push({type:2,index:++n});o.append(d[h],Q())}}}else if(o.nodeType===8)if(o.data===ae)c.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(w,d+1))!==-1;)c.push({type:7,index:n}),d+=w.length-1}n++}}static createElement(t,i){const s=j.createElement("template");return s.innerHTML=t,s}}function U(e,t,i=e,s){if(t===D)return t;let o=s!==void 0?i._$Co?.[s]:i._$Cl;const n=X(t)?void 0:t._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(e),o._$AT(e,i,s)),s!==void 0?(i._$Co??=[])[s]=o:i._$Cl=o),o!==void 0&&(t=U(e,o._$AS(e,t.values),o,s)),t}class Le{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,o=(t?.creationScope??j).importNode(i,!0);C.currentNode=o;let n=C.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let m;c.type===2?m=new J(n,n.nextSibling,this,t):c.type===1?m=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(m=new Fe(n,this,t)),this._$AV.push(m),c=s[++l]}a!==c?.index&&(n=C.nextNode(),a++)}return C.currentNode=j,o}p(t){let i=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,o){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=U(this,t,i),X(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):De(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&X(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Y.createElement(le(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===o)this._$AH.p(i);else{const n=new Le(o,this),a=n.u(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let i=qt.get(t.strings);return i===void 0&&qt.set(t.strings,i=new Y(t)),i}k(t){xt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,o=0;for(const n of t)o===i.length?i.push(s=new J(this.O(Q()),this.O(Q()),this,this.options)):s=i[o],s._$AI(n),o++;o<i.length&&(this._$AR(s&&s._$AB.nextSibling,o),i.length=o)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const s=It(t).nextSibling;It(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,o,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=i,this._$AM=o,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=v}_$AI(t,i=this,s,o){const n=this.strings;let a=!1;if(n===void 0)t=U(this,t,i,0),a=!X(t)||t!==this._$AH&&t!==D,a&&(this._$AH=t);else{const l=t;let c,m;for(t=n[0],c=0;c<n.length-1;c++)m=U(this,l[s+c],i,c),m===D&&(m=this._$AH[c]),a||=!X(m)||m!==this._$AH[c],m===v?t=v:t!==v&&(t+=(m??"")+n[c+1]),this._$AH[c]=m}a&&!o&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class He extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class Ge extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class Ve extends at{constructor(t,i,s,o,n){super(t,i,s,o,n),this.type=5}_$AI(t,i=this){if((t=U(this,t,i,0)??v)===D)return;const s=this._$AH,o=t===v&&s!==v||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==v&&(s===v||o);o&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Fe{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const Ke=$t.litHtmlPolyfillSupport;Ke?.(Y,J),($t.litHtmlVersions??=[]).push("3.3.3");const We=(e,t,i)=>{const s=i?.renderBefore??t;let o=s._$litPart$;if(o===void 0){const n=i?.renderBefore??null;s._$litPart$=o=new J(t.insertBefore(Q(),n),n,void 0,i??{})}return o._$AI(e),o};const At=globalThis;let V=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=We(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};V._$litElement$=!0,V.finalized=!0,At.litElementHydrateSupport?.({LitElement:V});const Qe=At.litElementPolyfillSupport;Qe?.({LitElement:V});(At.litElementVersions??=[]).push("4.2.2");const Xe=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const Ye={attribute:!0,type:String,converter:it,reflect:!1,hasChanged:Mt},Je=(e=Ye,t,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(n===void 0&&globalThis.litPropertyMetadata.set(o,n=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),s==="accessor"){const{name:a}=i;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,c,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(s==="setter"){const{name:a}=i;return function(l){const c=this[a];t.call(this,l),this.requestUpdate(a,c,e,!0,l)}}throw Error("Unsupported decorator location: "+s)};function Ze(e){return(t,i)=>typeof i=="object"?Je(e,t,i):((s,o,n)=>{const a=o.hasOwnProperty(n);return o.constructor.createProperty(n,s),a?Object.getOwnPropertyDescriptor(o,n):void 0})(e,t,i)}function S(e){return Ze({...e,state:!0,attribute:!1})}const ti=e=>(...t)=>({_$litDirective$:e,values:t});let ei=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const ii={},oi=(e,t=ii)=>e._$AH=t;const si=ti(class extends ei{constructor(){super(...arguments),this.key=v}render(e,t){return this.key=e,t}update(e,[t,i]){return t!==this.key&&(oi(e),this.key=t),i}}),k=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ft=[{id:"maj",label:"maj",iv:[0,4,7]},{id:"min",label:"min",iv:[0,3,7]},{id:"maj7",label:"maj7",iv:[0,4,7,11]},{id:"m7",label:"m7",iv:[0,3,7,10]},{id:"7",label:"7",iv:[0,4,7,10]},{id:"9",label:"9",iv:[0,4,7,10,14]},{id:"maj9",label:"maj9",iv:[0,4,7,11,14]},{id:"m9",label:"m9",iv:[0,3,7,10,14]},{id:"m7b5",label:"m7♭5",iv:[0,3,6,10]},{id:"dim",label:"dim",iv:[0,3,6]},{id:"aug",label:"aug",iv:[0,4,8]},{id:"sus2",label:"sus2",iv:[0,2,7]},{id:"sus4",label:"sus4",iv:[0,5,7]},{id:"6",label:"6",iv:[0,4,7,9]},{id:"add9",label:"add9",iv:[0,4,7,14]}],ni={0:"root",2:"2nd",3:"♭3rd",4:"3rd",5:"4th",6:"♭5th",7:"5th",8:"♯5th",9:"6th",10:"♭7th",11:"maj7",14:"9th"},ai=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],gt=[{id:"natminor",label:"nat minor",iv:[0,2,3,5,7,8,10]},{id:"major",label:"major",iv:[0,2,4,5,7,9,11]},{id:"dorian",label:"dorian",iv:[0,2,3,5,7,9,10]},{id:"phrygian",label:"phrygian",iv:[0,1,3,5,7,8,10]},{id:"mixo",label:"mixolydian",iv:[0,2,4,5,7,9,10]},{id:"melmin",label:"mel minor",iv:[0,2,3,5,7,9,11]},{id:"harmmin",label:"harm minor",iv:[0,2,3,5,7,8,11]},{id:"bebop",label:"bebop dorian",iv:[0,2,3,4,5,7,9,10]},{id:"blues",label:"blues",iv:[0,3,5,6,7,10]},{id:"minpent",label:"min pent",iv:[0,3,5,7,10]},{id:"hungmin",label:"hung minor",iv:[0,2,3,6,7,8,11]},{id:"ukrdom",label:"ukr dominant",iv:[0,2,3,6,7,9,10]},{id:"marva",label:"marva",iv:[0,1,4,6,7,9,11]},{id:"todi",label:"todi",iv:[0,1,3,6,7,8,11]},{id:"wholetone",label:"whole tone",iv:[0,2,4,6,8,10]},{id:"chromatic",label:"chromatic",iv:[0,1,2,3,4,5,6,7,8,9,10,11]}];function B(e){const t=e==="minor"?"natminor":e;return gt.find(i=>i.id===t)||gt[15]}function ri(e,t){const i=B(t),s=i.iv,o=s.length;if(o<5||i.id==="chromatic")return[];const n=l=>s[l%o]+12*Math.floor(l/o),a=[];for(let l=0;l<o;l++){const c=n(l),m=n(l+2)-c,p=n(l+4)-c;let d=null;if(m===4&&p===7?d="maj":m===3&&p===7?d="min":m===3&&p===6?d="dim":m===4&&p===8?d="aug":m===5&&p===7?d="sus4":m===2&&p===7&&(d="sus2"),d){const h=ai[l]||`${l+1}`,r=d==="maj"||d==="aug"||d==="sus4"||d==="sus2"?h:h.toLowerCase(),f=(e+s[l])%12,u=k[f],g=wt(d),P=d==="maj"?"":d==="min"?"m":g.label,R=`${u}${P}`;a.push({root:f,q:d,roman:r,label:R})}}return a}const Lt=[0,2,4,5,7,9,11,12],Ht=[null,1,3,null,6,8,10,null];function z(e,t){return(e+1)*12+t}function Z(e){const t=k[e%12],i=Math.floor(e/12)-1;return`${t}${i}`}function wt(e){return ft.find(t=>t.id===e)||ft[0]}function mt(e,t=!1){const i=k[e.root],s=wt(e.q),o=e.q==="maj"?"":e.q==="min"?"m":s.label,n=`${i}${o}`;if(!t||!e.voicing||e.voicing==="root")return n;const a=e.voicing==="1st"?"1st inv":"oct up";return`${n} [${a}]`}function Gt(e,t,i){return B(i).iv.some(o=>(t+o)%12===(e%12+12)%12)}function L(e,t){const i=wt(e.q),s=z(t,e.root),o=i.iv.map((a,l)=>({midi:s+a,iv:a,isRoot:l===0,order:l})),n=e.voicing||"root";if(n==="octave")return o.map(a=>({...a,midi:a.midi+12}));if(n==="1st"&&o.length>1){const[a,...l]=o,c={...a,midi:a.midi+12};return[...l,c].sort((p,d)=>p.midi-d.midi)}return o}function li(e,t,i,s){const o=[];if(e==="chromatic")[Ht.map(a=>a===null?null:z(t+1,a)),Lt.map(a=>z(t+1,a)),Ht.map(a=>a===null?null:z(t,a)),Lt.map(a=>z(t,a))].forEach((a,l)=>{a.forEach((c,m)=>{o.push({midi:c,row:4-l,col:m+1})})});else{const n=B(s).iv,a=n.length;for(let l=3;l>=0;l--)for(let c=0;c<8;c++){const m=l*8+c,p=z(t+Math.floor(m/a),i+n[m%a]);o.push({midi:p,row:l+1,col:c+1})}}return o}function Vt(e,t,i,s,o){const n=li(i,t,s,o),a=L(e,t),l=new Map,c=[];return a.forEach(m=>{const p=n.findIndex(d=>d.midi===m.midi);if(p>=0&&!l.has(p)){const d=n[p];l.set(p,{...m,ref:`R${d.row}C${d.col}`})}else c.push(m)}),{cells:n,tones:a,litMap:l,missingTones:c}}let A=null,F=null,I=null;function ci(){if(typeof window>"u")return null;if(!A){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;A=new e,F=A.createGain(),F.gain.value=.5,I=A.createBiquadFilter(),I.type="lowpass",I.frequency.value=2600,I.Q.value=.6,F.connect(I),I.connect(A.destination)}return A.state==="suspended"&&A.resume().catch(()=>{}),A}function di(e){return 440*Math.pow(2,(e-69)/12)}function mi(e){if(typeof e=="number")return e;const t=e.match(/^([A-Ga-g][#b]?)(-?\d+)$/);if(!t)return 60;const i=t[1].toUpperCase(),s=parseInt(t[2],10),n={C:0,"C#":1,DB:1,D:2,"D#":3,EB:3,E:4,F:5,"F#":6,GB:6,G:7,"G#":8,AB:8,A:9,"A#":10,BB:10,B:11}[i]??0;return(s+1)*12+n}function H(e,t=1.15){const i=ci();if(!i||!F)return;const s=i.currentTime+.015,o=Math.max(.2,t);e.map(mi).forEach((a,l)=>{const c=di(a),m=i.createGain(),p=s+l*.028;m.gain.setValueAtTime(1e-4,p),m.gain.linearRampToValueAtTime(.16,p+.02),m.gain.exponentialRampToValueAtTime(.055,p+.22),m.gain.exponentialRampToValueAtTime(1e-4,p+o),m.connect(F),[{type:"triangle",cents:0},{type:"sine",cents:-5}].forEach(({type:h,cents:b})=>{const r=i.createOscillator();r.type=h,r.frequency.value=c*Math.pow(2,b/1200),r.connect(m),r.start(p),r.stop(p+o+.05)})})}function Ft(e,t=.6){H([e],t)}function ce(e){return e!==null&&typeof e=="object"&&"name"in e&&typeof e.name=="string"}function de(e){return e!==null&&typeof e=="object"&&"step"in e&&typeof e.step=="number"&&"alt"in e&&typeof e.alt=="number"&&!isNaN(e.step)&&!isNaN(e.alt)}var me=[0,2,4,-1,1,3,5],pe=me.map(e=>Math.floor(e*7/12));function he(e){const{step:t,alt:i,oct:s,dir:o=1}=e,n=me[t]+7*i;if(s===void 0)return[o*n];const a=s-pe[t]-4*i;return[o*n,o*a]}var pi=[3,0,4,1,5,2,6];function ue(e){const[t,i,s]=e,o=pi[hi(t)],n=Math.floor((t+1)/7);if(i===void 0)return{step:o,alt:n,dir:s};const a=i+4*n+pe[o];return{step:o,alt:n,oct:a,dir:s}}function hi(e){const t=(e+1)%7;return t<0?7+t:t}var Kt=(e,t)=>Array(Math.abs(t)+1).join(e),bt=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),ui="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",fi="(AA|A|P|M|m|d|dd)([-+]?\\d+)",gi=new RegExp("^"+ui+"|"+fi+"$");function bi(e){const t=gi.exec(`${e}`);return t===null?["",""]:t[1]?[t[1],t[2]]:[t[4],t[3]]}var Wt={};function N(e){return typeof e=="string"?Wt[e]||(Wt[e]=vi(e)):de(e)?N(Pi(e)):ce(e)?N(e.name):bt}var Qt=[0,2,4,5,7,9,11],fe="PMMPPMM";function vi(e){const t=bi(e);if(t[0]==="")return bt;const i=+t[0],s=t[1],o=(Math.abs(i)-1)%7,n=fe[o];if(n==="M"&&s==="P")return bt;const a=n==="M"?"majorable":"perfectable",l=""+i+s,c=i<0?-1:1,m=i===8||i===-8?i:c*(o+1),p=yi(a,s),d=Math.floor((Math.abs(i)-1)/7),h=c*(Qt[o]+p+12*d),b=(c*(Qt[o]+p)%12+12)%12,r=he({step:o,alt:p,oct:d,dir:c});return{empty:!1,name:l,num:i,q:s,step:o,alt:p,dir:c,type:a,simple:m,semitones:h,chroma:b,coord:r,oct:d}}function ge(e,t){const[i,s=0]=e,o=i*7+s*12<0,n=t||o?[-i,-s,-1]:[i,s,1];return N(ue(n))}function yi(e,t){return t==="M"&&e==="majorable"||t==="P"&&e==="perfectable"?0:t==="m"&&e==="majorable"?-1:/^A+$/.test(t)?t.length:/^d+$/.test(t)?-1*(e==="perfectable"?t.length:t.length+1):0}function Pi(e){const{step:t,alt:i,oct:s=0,dir:o}=e;if(!o)return"";const n=t+1+7*s,a=n===0?t+1:n,l=o<0?"-":"",c=fe[t]==="M"?"majorable":"perfectable";return l+a+Mi(c,i)}function Mi(e,t){return t===0?e==="majorable"?"M":"P":t===-1&&e==="majorable"?"m":t>0?Kt("A",t):Kt("d",e==="perfectable"?t:t+1)}var Xt=(e,t)=>Array(Math.abs(t)+1).join(e),be=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),Yt=new Map,$i=e=>"CDEFGAB".charAt(e),xi=e=>e<0?Xt("b",-e):Xt("#",e),Ai=e=>e[0]==="b"?-e.length:e.length;function M(e){const t=JSON.stringify(e),i=Yt.get(t);if(i)return i;const s=typeof e=="string"?_i(e):de(e)?M(Ei(e)):ce(e)?M(e.name):be;return Yt.set(t,s),s}var wi=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function kt(e){const t=wi.exec(e);return t?[t[1].toUpperCase(),t[2].replace(/x/g,"##"),t[3],t[4]]:["","","",""]}function ki(e){return M(ue(e))}var Si=(e,t)=>(e%t+t)%t,pt=[0,2,4,5,7,9,11];function _i(e){const t=kt(e);if(t[0]===""||t[3]!=="")return be;const i=t[0],s=t[1],o=t[2],n=(i.charCodeAt(0)+3)%7,a=Ai(s),l=o.length?+o:void 0,c=he({step:n,alt:a,oct:l}),m=i+s+o,p=i+s,d=(pt[n]+a+120)%12,h=l===void 0?Si(pt[n]+a,12)-1188:pt[n]+a+12*(l+1),b=h>=0&&h<=127?h:null,r=l===void 0?null:Math.pow(2,(h-69)/12)*440;return{empty:!1,acc:s,alt:a,chroma:d,coord:c,freq:r,height:h,letter:i,midi:b,name:m,oct:l,pc:p,step:n}}function Ei(e){const{step:t,alt:i,oct:s}=e,o=$i(t);if(!o)return"";const n=o+xi(i);return s||s===0?n+s:n}function ve(e,t){const i=M(e),s=Array.isArray(t)?t:N(t).coord;if(i.empty||!s||s.length<2)return"";const o=i.coord,n=o.length===1?[o[0]+s[0]]:[o[0]+s[0],o[1]+s[1]];return ki(n).name}function Jt(e,t){const i=M(e),s=M(t);if(i.empty||s.empty)return"";const o=i.coord,n=s.coord,a=n[0]-o[0],l=o.length===2&&n.length===2?n[1]-o[1]:-Math.floor(a*7/12),c=s.height===i.height&&s.midi!==null&&i.oct===s.oct&&i.step>s.step;return ge([a,l],c).name}function ye(e,t){const i=t.length,s=(e%i+i)%i;return t.slice(s,i).concat(t.slice(0,s))}var T={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},Pe=e=>Number(e).toString(2).padStart(12,"0"),Zt=e=>parseInt(e,2),Ci=/^[01]{12}$/;function Me(e){return Ci.test(e)}var ji=e=>typeof e=="number"&&e>=0&&e<=4095,Ni=e=>e&&Me(e.chroma),te={[T.chroma]:T};function $e(e){const t=Me(e)?e:ji(e)?Pe(e):Array.isArray(e)?zi(e):Ni(e)?e.chroma:T.chroma;return te[t]=te[t]||Oi(t)}var Ti=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Ri(e){const t=[];for(let i=0;i<12;i++)e.charAt(i)==="1"&&t.push(Ti[i]);return t}function Ii(e){const t=e.split("");return t.map((i,s)=>ye(s,t).join(""))}function Oi(e){const t=Zt(e),i=Ii(e).map(Zt).filter(n=>n>=2048).sort()[0],s=Pe(i),o=Ri(e);return{empty:!1,name:"",setNum:t,chroma:e,normalized:s,intervals:o}}function zi(e){if(e.length===0)return T.chroma;let t;const i=[0,0,0,0,0,0,0,0,0,0,0,0];for(let s=0;s<e.length;s++)t=M(e[s]),t.empty&&(t=N(e[s])),t.empty||(i[t.chroma]=1);return i.join("")}var Bi=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Di=Bi,Ui={...T,name:"",quality:"Unknown",intervals:[],aliases:[]},xe=[],K={};function qi(e){return K[e]||Ui}function Li(e,t,i){const s=Gi(e),o={...$e(e),name:i||"",quality:s,intervals:e,aliases:t};xe.push(o),o.name&&(K[o.name]=o),K[o.setNum]=o,K[o.chroma]=o,o.aliases.forEach(n=>Hi(o,n))}function Hi(e,t){K[t]=e}function Gi(e){const t=i=>e.indexOf(i)!==-1;return t("5A")?"Augmented":t("3M")?"Major":t("5d")?"Diminished":t("3m")?"Minor":"Unknown"}Di.forEach(([e,t,i])=>Li(e.split(" "),i.split(" "),t));xe.sort((e,t)=>e.setNum-t.setNum);var Vi=Fi((e,t)=>[e[0]-t[0],e[1]-t[1]]);function Fi(e){return(t,i)=>{const s=N(t).coord,o=N(i).coord;if(s&&o){const n=e(s,o);return ge(n).name}}}var Ki=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Wi=Ki,Qi={...T,intervals:[],aliases:[]},W={};function Xi(e){return W[e]||Qi}function Yi(e,t,i=[]){const s={...$e(e),name:t,intervals:e,aliases:i};return W[s.name]=s,W[s.setNum]=s,W[s.chroma]=s,s.aliases.forEach(o=>Ji(s,o)),s}function Ji(e,t){W[t]=e}Wi.forEach(([e,t,...i])=>Yi(e.split(" "),t,i));var Ae={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function st(e){const[t,i,s,o]=kt(e);return t===""?ht("",e):t==="A"&&o==="ug"?ht("","aug"):ht(t+i,s+o)}function ht(e,t){const i=t.split("/");if(i.length===1)return[e,i[0],""];const[s,o,n,a]=kt(i[1]);return s!==""&&n===""&&a===""?[e,i[0],s+o]:[e,t,""]}function tt(e){if(Array.isArray(e))return ut(e[1]||"",e[0],e[2]);if(e==="")return Ae;{const[t,i,s]=st(e),o=ut(i,t,s);return o.empty?ut(e):o}}function ut(e,t,i){const s=qi(e),o=M(t||""),n=M(i||"");if(s.empty||t&&o.empty||i&&n.empty)return Ae;const a=Jt(o.pc,n.pc),l=s.intervals.indexOf(a),c=l>=0,m=c?n:M(""),p=l===-1?NaN:l+1,d=n.pc&&n.pc!==o.pc,h=Array.from(s.intervals);if(c)for(let u=1;u<p;u++){const g=h[0][0],P=h[0][1],R=parseInt(g,10)+7;h.push(`${R}${P}`),h.shift()}else if(d){const u=Vi(Jt(o.pc,n.pc),"8P");u&&h.unshift(u)}const b=o.empty?[]:h.map(u=>ve(o.pc,u));e=s.aliases.indexOf(e)!==-1?e:s.aliases[0];const r=`${o.empty?"":o.pc}${e}${c&&p>1?"/"+m.pc:d?"/"+n.pc:""}`,f=`${t?o.pc+" ":""}${s.name}${c&&p>1?" over "+m.pc:d?" over "+n.pc:""}`;return{...s,name:f,symbol:r,tonic:o.pc,type:s.name,root:m.pc,bass:d?n.pc:"",intervals:h,rootDegree:p,notes:b}}var Zi=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],to=Zi;to.forEach(([e,t,i])=>void 0);var St=M,eo=e=>St(e).midi,io=e=>St(e).chroma,_t=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],ee={...T,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},oo=_t.map(so),vt={};oo.forEach(e=>{vt[e.name]=e,e.aliases.forEach(t=>{vt[t]=e})});function we(e){return typeof e=="string"?vt[e.toLowerCase()]||ee:e&&e.name?we(e.name):ee}function so(e){const[t,i,s,o,n,a,l]=e,c=l?[l]:[],m=Number(i).toString(2);return{empty:!1,intervals:Xi(o).intervals,modeNum:t,chroma:m,normalized:m,name:o,setNum:i,alt:s,triad:n,seventh:a,aliases:c}}function ke(e){return(t,i)=>{const s=we(t);if(s.empty)return[];const o=ye(s.modeNum,e),n=s.intervals.map(a=>ve(i,a));return o.map((a,l)=>n[l]+a)}}ke(_t.map(e=>e[4]));ke(_t.map(e=>e[5]));function ie(e){let t=e;return t=t.replace(/diminished/gi,"diminished"),t=t.replace(/dim/gi,"dim"),t=t.replace(/minor/gi,"minor"),t=t.replace(/min/gi,"min"),t=t.replace(/major/gi,"major"),t=t.replace(/maj/gi,"maj"),t=t.replace(/aug/gi,"aug"),t=t.replace(/sus/gi,"sus"),t=t.replace(/dom/gi,"dom"),t=t.replace(/minmaj/gi,"mMaj"),t=t.replace(/mmaj/gi,"mMaj"),t=t.replace(/m\(maj7\)/gi,"mMaj7"),t=t.replace(/m\(M7\)/gi,"mMaj7"),t}function no(e){return e.replace(/([A-G])(B+)/g,(i,s,o)=>s+"b".repeat(o.length)).replace(/->|→|–|—/g," ").replace(/[|>,;:]/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim()}function ao(e){const t=no(e),i=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,s=t.match(i);return s?s.map(o=>o.trim()):[]}function ro(e){const t=ao(e),i=[];for(const s of t){let o=tt(s);if(o.empty||o.notes.length===0){const[n,a,l]=st(s);if(n){const c=ie(a),m=n+c+(l?"/"+l:""),p=tt(m);!p.empty&&p.notes.length>0&&(o=p)}}if(o.empty||o.notes.length===0){const[n,a]=st(s);if(n&&!St(n).empty){const l=a.replace(/\d+$/,""),c=tt(l?n+ie(l):n);!c.empty&&c.notes.length>0&&(o={...c,symbol:s,tonic:n})}}o.empty||o.notes.length===0||i.push({symbol:o.symbol||s,tonic:o.tonic,quality:o.quality,notes:o.notes,intervals:o.intervals,aliases:o.aliases})}return i}function lo(e){const t=e.tonic?io(e.tonic)??(eo(e.tonic+"4")??60)%12:0,i=e.symbol||"",[,s]=st(i),o=(s||"").trim(),n=(e.quality||"").toLowerCase();let a="maj";return/m7b5|min7b5|m7-5|half|ø/i.test(o)||n.includes("half-diminished")?a="m7b5":/dim|°/i.test(o)||n.includes("diminished")?a="dim":/aug|\+/i.test(o)||n.includes("augmented")?a="aug":/sus2/i.test(o)?a="sus2":/sus4|sus/i.test(o)?a="sus4":/add9|add2/i.test(o)?a="add9":/^(?:6|add6|maj6)$/i.test(o)?a="6":/^(?:m9|min9|-9|m11|min11|m13|min13)$/i.test(o)||n==="minor"&&(e.intervals?.includes("14M")||/m9|min9/i.test(o))?a="m9":/maj9|maj11|maj13|Δ9|ma9/i.test(o)||o.includes("M9")||o.includes("M11")||o.includes("M13")||n==="major"&&e.intervals?.includes("14M")&&e.intervals?.includes("11M")?a="maj9":/^(?:9|11|13|dom9|dom11|dom13|9b5|9#5)$/i.test(o)||n==="major"&&e.intervals?.includes("14M")&&e.intervals?.includes("10m")?a="9":/maj7|Δ|ma7/i.test(o)||o.includes("M7")||n==="major"&&(e.aliases?.some(l=>/maj7|M7|Δ/i.test(l))??!1)?a="maj7":/^(?:m7|min7|-7|m6|min6)$/i.test(o)||n==="minor"&&(e.intervals?.includes("10m")||e.intervals?.includes("10d")||/7/.test(o))?a="m7":/^(?:7|dom|dom7|7b9|7#9|7b5|7#5|7alt)$/i.test(o)||n==="major"&&/7/.test(o)?a="7":n==="minor"||/^(?:m|min|-)$/i.test(o)?a="min":(n==="major"||/^(?:maj|m)?$/i.test(o))&&(a="maj"),{root:t,q:a}}function co(e,t){const s=ro(e).map(lo).slice(0,16);return t&&t.length>0&&s.forEach((o,n)=>{t[n]&&(o.voicing=t[n])}),s}function mo(e){return!e||!e.trim()?[]:e.trim().split(/[\s,++]+/).map(i=>{const s=i.toLowerCase();return s.includes("oct")||s.includes("up")||s==="2"?"octave":s.includes("1")||s.includes("inv")||s==="1st"?"1st":"root"})}var po=Object.defineProperty,ho=Object.getOwnPropertyDescriptor,x=(e,t,i,s)=>{for(var o=s>1?void 0:s?ho(t,i):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(o=(s?a(t,i,o):a(o))||o);return s&&o&&po(t,i,o),o};const oe="circuit_chords_v2_state",uo=[{root:0,q:"maj7"},{root:9,q:"m7"},{root:2,q:"m7"},{root:7,q:"7"}];let $=class extends V{constructor(){super(...arguments),this.steps=uo,this.active=0,this.keyRoot=0,this.keyScale="chromatic",this.octave=3,this.playing=!1,this.copied=!1,this.vw=typeof window<"u"?window.innerWidth:1280,this.parity=!1,this.transportTimer=null,this.lastSig="",this.handleResize=()=>{this.vw=window.innerWidth},this.handleKeyDown=e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement||e.target instanceof HTMLTextAreaElement)return;const t=this.steps.length;e.key==="ArrowRight"?(e.preventDefault(),this.active=(this.active+1)%t,this.persistState()):e.key==="ArrowLeft"?(e.preventDefault(),this.active=(this.active-1+t)%t,this.persistState()):e.key==="ArrowUp"?(e.preventDefault(),this.bumpOctave(1)):e.key==="ArrowDown"?(e.preventDefault(),this.bumpOctave(-1)):e.key===" "?(e.preventDefault(),this.toggleTransport()):e.key==="Enter"&&(e.preventDefault(),this.auditionActive())}}get layout(){return this.keyScale==="chromatic"?"chromatic":"in-key"}connectedCallback(){super.connectedCallback(),this.loadInitialState(),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("resize",this.handleResize),this.transportTimer&&(clearInterval(this.transportTimer),this.transportTimer=null)}loadInitialState(){let e=typeof window<"u"?window.location.search:"";typeof window<"u"&&window.location.hash&&!window.location.hash.startsWith("#/")&&(e+=window.location.hash);const t=new URLSearchParams(e),i=t.get("p")||t.get("progression"),s=t.get("v")||t.get("voicings")||t.get("voicing");if(i&&i.trim()){const o=mo(s),n=co(i.trim(),o);if(n.length>0){this.steps=n,this.active=0;const a=n[0];if(this.keyRoot=a.root,this.keyScale="chromatic",t.has("key")){const l=t.get("key"),c=parseInt(l,10);if(!isNaN(c)&&c>=0&&c<=11)this.keyRoot=c;else{const m=k.indexOf(l.toUpperCase());m>=0&&(this.keyRoot=m)}}if(t.has("scale")){const l=t.get("scale").toLowerCase(),c=B(l);this.keyScale=c.id}else if(t.has("mode")){const l=t.get("mode").toLowerCase();this.keyScale=l==="minor"?"natminor":"major"}if(t.has("octave")){const l=parseInt(t.get("octave"),10);!isNaN(l)&&l>=1&&l<=6&&(this.octave=l)}t.has("layout")&&t.get("layout")==="chromatic"&&(this.keyScale="chromatic"),this.persistState();return}}this.loadPersistedState()}loadPersistedState(){try{const e=localStorage.getItem(oe);if(e){const t=JSON.parse(e);Array.isArray(t.steps)&&t.steps.length>0&&(this.steps=t.steps),typeof t.active=="number"&&(this.active=Math.max(0,Math.min(t.active,this.steps.length-1))),typeof t.keyRoot=="number"&&(this.keyRoot=t.keyRoot),typeof t.keyScale=="string"?this.keyScale=B(t.keyScale).id:t.layout==="chromatic"?this.keyScale="chromatic":t.keyMode==="minor"?this.keyScale="natminor":t.keyMode==="major"&&(this.keyScale="major"),typeof t.octave=="number"&&(this.octave=Math.max(1,Math.min(6,t.octave)))}}catch{}}persistState(){try{const e={steps:this.steps,active:this.active,keyRoot:this.keyRoot,keyScale:this.keyScale,octave:this.octave,layout:this.layout};localStorage.setItem(oe,JSON.stringify(e))}catch{}}bumpOctave(e){const t=Math.max(1,Math.min(6,this.octave+e));t!==this.octave&&(this.octave=t,this.persistState())}auditionActive(){const e=this.steps[this.active];if(e){const t=L(e,this.octave);H(t.map(i=>i.midi))}}toggleTransport(){if(this.transportTimer){clearInterval(this.transportTimer),this.transportTimer=null,this.playing=!1;return}this.playing=!0;const e=()=>{const t=this.steps[this.active];if(t){const i=L(t,this.octave);H(i.map(s=>s.midi),.85)}this.active=(this.active+1)%this.steps.length,this.persistState()};e(),this.transportTimer=window.setInterval(e,980)}setStepRoot(e){this.steps=this.steps.map((t,i)=>i===this.active?{...t,root:e}:t),this.persistState()}setStepQuality(e){this.steps=this.steps.map((t,i)=>i===this.active?{...t,q:e}:t),this.persistState()}setStepVoicing(e){this.steps=this.steps.map((t,i)=>i===this.active?{...t,voicing:e}:t),this.auditionActive(),this.persistState()}setStepChord(e,t){this.steps=this.steps.map((i,s)=>s===this.active?{...i,root:e,q:t}:i),this.persistState()}addStep(){if(this.steps.length>=16)return;const e=this.steps[this.steps.length-1]||{root:this.keyRoot,q:"maj7"};this.steps=[...this.steps,{...e}],this.active=this.steps.length-1,this.auditionActive(),this.persistState()}removeStep(){if(this.steps.length<=1)return;const e=this.steps.filter((t,i)=>i!==this.active);this.steps=e,this.active=Math.min(this.active,e.length-1),this.auditionActive(),this.persistState()}copyPadList(e,t,i){const o=`${e}${i==="1st"?" [1st inv]":i==="octave"?" [oct up]":""} — ${t.map(n=>`${n.pitch}→${n.ref}`).join("  ")}`;navigator.clipboard&&navigator.clipboard.writeText(o).catch(()=>{}),this.copied=!0,setTimeout(()=>{this.copied=!1},1600)}renderMiniCells(e){const{cells:t,litMap:i}=Vt(e,this.octave,this.layout,this.keyRoot,this.keyScale);return t.map((s,o)=>{const n=i.get(o);let a="#242730";return n?a=n.isRoot?"#5cc9d1":"#d1608f":s.midi===null?a="#1f2126":Gt(s.midi%12,this.keyRoot,this.keyScale)&&(a="#2b3038"),y`<div class="mini-cell" style="background: ${a};"></div>`})}render(){const e=this.steps[this.active]||this.steps[0]||{root:0,q:"maj7"},{cells:t,tones:i,litMap:s,missingTones:o}=Vt(e,this.octave,this.layout,this.keyRoot,this.keyScale),n=s.size,a=mt(e),l=B(this.keyScale),c=ri(this.keyRoot,this.keyScale),m=`${e.root}:${e.q}:${this.octave}:${this.layout}:${this.keyRoot}:${this.keyScale}:${this.active}`;m!==this.lastSig&&(this.lastSig=m,this.parity=!this.parity);const p=this.parity?"A":"B";let d=null;s.forEach((r,f)=>{r.isRoot&&(d=t[f])});const h=r=>d?Math.max(Math.abs(r.row-d.row),Math.abs(r.col-d.col)):Math.abs(r.col-4),b=i.map(r=>{const f=Array.from(s.entries()).find(([,u])=>u.order===r.order);return{pitch:Z(r.midi),ref:f?f[1].ref:"off plate",deg:ni[r.iv]||"tone",isRoot:r.isRoot}});return y`
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
                STEP ${String(this.active+1).padStart(2,"0")} / ${String(this.steps.length).padStart(2,"0")}  ·  ${k[this.keyRoot]} ${l.label.toUpperCase()}  ·  ${this.layout==="chromatic"?"CHROMATIC LAYOUT":"IN-KEY LAYOUT"}
              </div>
              <div class="chord-title-row">
                <div class="chord-name-title">
                  ${si(a,y`<span class="chord-name-anim">${a}</span>`)}
                </div>
                <div class="chord-sub-badge">
                  ${n} ${n===1?"pad":"pads"} · ${e.voicing==="1st"?"1st inversion":e.voicing==="octave"?"octave up":"root position"}
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
                  @click=${()=>this.copyPadList(a,b,e.voicing)}
                >
                  ${this.copied?"copied":"copy pad list"}
                </button>
              </div>
            </div>

            <!-- Off-Plate Warning -->
            ${o.length>0?y`
                  <div class="warning-banner">
                    ${o.length} ${o.length===1?"tone":"tones"} off the plate (${o.map(r=>Z(r.midi)).join(", ")}) — shift the base octave or switch layout
                  </div>
                `:""}

            <!-- Progression Step Strip -->
            <div>
              <div class="section-header-row">
                <div class="section-label">PROGRESSION</div>
                <div class="section-detail">${this.steps.length} of 16 steps used</div>
              </div>
              <div class="step-strip">
                ${this.steps.map((r,f)=>{const u=f===this.active;return y`
                    <div
                      class="step-tile ${u?"active":""}"
                      tabindex="0"
                      role="button"
                      aria-label="Step ${f+1}, ${mt(r)}${u?", active":""}"
                      @click=${()=>{this.active=f,this.auditionActive(),this.persistState()}}
                      @keydown=${g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),this.active=f,this.auditionActive(),this.persistState())}}
                    >
                      <div class="step-tile-top">
                        <span class="step-tile-name">${mt(r)}</span>
                        <span class="step-tile-num">${String(f+1).padStart(2,"0")}</span>
                      </div>
                      <div class="mini-grid">
                        ${this.renderMiniCells(r)}
                      </div>
                    </div>
                  `})}
                ${this.steps.length<16?y`
                      <div
                        class="add-step-btn"
                        tabindex="0"
                        role="button"
                        aria-label="Add step"
                        title="add step"
                        @click=${()=>this.addStep()}
                        @keydown=${r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),this.addStep())}}
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
                  ${[1,2,3,4,5,6,7,8].map(r=>y`<div class="col-num">${r}</div>`)}
                </div>

                <div class="grid-with-row-nums">
                  <div class="row-markers">
                    ${[4,3,2,1].map(r=>y`<div class="row-num">${r}</div>`)}
                  </div>

                  <div class="pad-grid">
                    ${t.map((r,f)=>{const u=s.get(f),g=r.midi===null,P=g?"":k[r.midi%12],R=!g&&P.length===1,Et=h(r);let rt="transparent",lt="transparent",Ct="400",ct="none";if(u)rt=u.isRoot?"#5cc9d1":"#d1608f",lt="#121418",Ct="500",ct=`padBloom${p} 560ms cubic-bezier(.2,.75,.25,1) ${70+Et*46}ms both`;else if(!g){const _=Gt(r.midi%12,this.keyRoot,this.keyScale);rt=_?R?"#2d343e":"#252b33":R?"#342a31":"#2a2329",lt=_?"#aeb7c1":"#a2909c",ct=`padDim${p} 420ms ease ${Et*22}ms both${_?`, ambientShimmer 5.2s ease-in-out ${((r.row+r.col)*.13).toFixed(2)}s infinite`:""}`}return y`
                        <div
                          class="pad-btn ${g?"empty":""}"
                          style="
                            background: ${rt};
                            color: ${lt};
                            font-weight: ${Ct};
                            animation: ${ct};
                          "
                          tabindex="${g?-1:0}"
                          role="button"
                          aria-label="${g?"Empty pad":`${Z(r.midi)} row ${r.row} col ${r.col}`}"
                          title="${g?"no pad":`${Z(r.midi)} · row ${r.row} col ${r.col}`}"
                          @click=${()=>{!g&&r.midi!==null&&(Ft(r.midi,.6),this.setStepRoot(r.midi%12))}}
                          @keydown=${_=>{!g&&r.midi!==null&&(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),Ft(r.midi,.6),this.setStepRoot(r.midi%12))}}
                        >
                          ${P}
                        </div>
                      `})}
                  </div>
                </div>
              </div>

              <div class="plate-caption-row">
                <span>Hold ${n} ${n===1?"pad":"pads"} together — ${b.map(r=>`${r.pitch}→${r.ref}`).join("  ")}</span>
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
              ${[{root:0,label:"C"},{root:2,label:"D"},{root:4,label:"E"},{root:5,label:"F"},{root:7,label:"G"},{root:9,label:"A"},{root:11,label:"B"}].map(r=>y`
                  <div
                    class="piano-white-key ${e.root===r.root?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="${r.label} root"
                    @click=${()=>this.setStepRoot(r.root)}
                  >
                    ${r.label}
                  </div>
                `)}
            </div>

            <!-- Chord Qualities -->
            <div class="quality-grid">
              ${ft.map(r=>y`
                  <div
                    class="quality-tile ${e.q===r.id?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="${r.label} quality"
                    @click=${()=>this.setStepQuality(r.id)}
                  >
                    ${r.label}
                  </div>
                `)}
            </div>

            <!-- Voicing Selector -->
            <div class="sidebar-title">VOICING</div>
            <div class="voicing-grid">
              ${[{id:"root",label:"Root"},{id:"1st",label:"1st Inv"},{id:"octave",label:"Oct Up"}].map(r=>y`
                  <div
                    class="voicing-tile ${(e.voicing||"root")===r.id?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="${r.label} voicing"
                    @click=${()=>this.setStepVoicing(r.id)}
                  >
                    ${r.label}
                  </div>
                `)}
            </div>

            <!-- Tones Breakdown -->
            <div class="sidebar-title">TONES</div>
            <div class="tones-table">
              ${b.map(r=>y`
                  <div class="tone-row">
                    <span class="tone-deg">${r.deg}</span>
                    <span style="color: ${r.isRoot?"#5cc9d1":"#d1608f"};">
                      ${r.pitch} ${r.ref!=="off plate"?r.ref:"(off plate)"}
                    </span>
                  </div>
                `)}
            </div>

            <!-- Key & Scale Section -->
            <div class="key-scale-header">
              <div class="sidebar-title" style="margin:0;">KEY + SCALE</div>
              <div class="key-scale-line">
                ${k[this.keyRoot]} ${l.label}  ·  ${l.iv.length} notes
              </div>
            </div>

            <!-- 12-Root Grid -->
            <div class="key-roots-grid">
              ${k.map((r,f)=>{const u=this.keyRoot===f,g=r.replace("#","♯");return y`
                  <div
                    class="key-root-btn ${u?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="key root ${r}${u?", selected":""}"
                    @click=${()=>{this.keyRoot=f,this.persistState()}}
                    @keydown=${P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),this.keyRoot=f,this.persistState())}}
                  >
                    ${g}
                  </div>
                `})}
            </div>

            <!-- 16 Scales Grid -->
            <div class="scales-grid">
              ${gt.map(r=>{const f=r.id===this.keyScale;return y`
                  <div
                    class="scale-btn ${f?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="${r.label} scale${f?", selected":""}"
                    @click=${()=>{this.keyScale=r.id,this.persistState()}}
                    @keydown=${u=>{(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),this.keyScale=r.id,this.persistState())}}
                  >
                    ${r.label}
                  </div>
                `})}
            </div>

            <!-- Diatonic / Scale Chords Chips -->
            ${c.length>0?y`
                  <div class="diatonic-chips-row">
                    ${c.map(r=>{const f=e.root===r.root&&e.q===r.q;return y`
                        <div
                          class="diatonic-chip ${f?"active":""}"
                          tabindex="0"
                          role="button"
                          aria-label="Set active chord to ${r.label} (${r.roman})"
                          title="${r.roman} · ${r.label}"
                          @click=${()=>{this.setStepChord(r.root,r.q);const u=L({root:r.root,q:r.q},this.octave);H(u.map(g=>g.midi),.9)}}
                          @keydown=${u=>{if(u.key==="Enter"||u.key===" "){u.preventDefault(),this.setStepChord(r.root,r.q);const g=L({root:r.root,q:r.q},this.octave);H(g.map(P=>P.midi),.9)}}}
                        >
                          ${r.label}
                        </div>
                      `})}
                  </div>
                  <div class="diatonic-hint">chords in this scale — tap to set active chord</div>
                `:y`<div style="height: 32px;"></div>`}

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

        <!-- Bottom Links Footer -->
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
            Support on Ko-fi
          </a>
        </footer>
      </div>
    `}};$.styles=_e`
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
    }

    .chord-name-anim {
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
      min-width: 0;
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
      /* No overflow-x auto to prevent unwanted scrollbars on desktop during bloom transforms */
    }

    .col-markers {
      display: grid;
      grid-template-columns: 28px repeat(8, 1fr);
      gap: 8px;
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
      gap: 8px;
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

    /* Voicing Grid */
    .voicing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
      margin-bottom: 32px;
    }

    .voicing-tile {
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

    .voicing-tile.active {
      background: rgba(92, 201, 209, 0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92, 201, 209, 0.5);
    }

    .voicing-tile:hover {
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

    /* Key & Scale Section */
    .key-scale-header {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
      margin: 0 0 10px;
    }

    .key-scale-line {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.64rem;
      color: #6e727a;
      white-space: nowrap;
    }

    .key-roots-grid {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      gap: 2px;
      margin-bottom: 6px;
    }

    .key-root-btn {
      padding: 8px 0;
      text-align: center;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.6rem;
      cursor: pointer;
      user-select: none;
      transition: background 220ms ease, color 220ms ease, box-shadow 220ms ease;
      background: #1c1f24;
      color: #8d919a;
      box-shadow: inset 0 0 0 1px #26282e;
    }

    .key-root-btn:hover {
      filter: brightness(1.35);
    }

    .key-root-btn.active {
      background: rgba(92, 201, 209, 0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92, 201, 209, 0.5);
    }

    .scales-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2px;
    }

    .scale-btn {
      padding: 8px 10px;
      border-radius: 3px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.64rem;
      cursor: pointer;
      user-select: none;
      transition: background 220ms ease, color 220ms ease, box-shadow 220ms ease;
      background: #1c1f24;
      color: #8d919a;
      box-shadow: inset 0 0 0 1px #26282e;
      text-align: left;
    }

    .scale-btn:hover {
      filter: brightness(1.35);
    }

    .scale-btn.active {
      background: rgba(92, 201, 209, 0.14);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92, 201, 209, 0.45);
    }

    .diatonic-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 3px;
      margin-top: 14px;
    }

    .diatonic-chip {
      flex: 1 1 44px;
      padding: 7px 0;
      text-align: center;
      border-radius: 3px;
      background: #1f2329;
      color: #9aa4af;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.62rem;
      cursor: pointer;
      user-select: none;
      transition: background-color 220ms ease, color 220ms ease;
    }

    .diatonic-chip:hover {
      background-color: rgba(92, 201, 209, 0.12);
      color: #5cc9d1;
    }

    .diatonic-chip.active {
      background: rgba(92, 201, 209, 0.18);
      color: #5cc9d1;
      box-shadow: inset 0 0 0 1px rgba(92, 201, 209, 0.45);
    }

    .diatonic-hint {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.62rem;
      color: #6e727a;
      margin-top: 8px;
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

    /* Bottom Links Footer */
    .app-links-footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding-top: 32px;
      margin-top: 56px;
      border-top: 1px solid #26282e;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 0.72rem;
      color: #868b94;
      flex-wrap: wrap;
    }

    .footer-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: #8d919a;
      text-decoration: none;
      font-weight: 500;
      transition: color 220ms ease, transform 220ms ease;
    }

    .footer-link:hover {
      color: #5cc9d1;
      transform: translateY(-1px);
    }

    .footer-link-highlight {
      color: #c8cad0;
      text-decoration: none;
      font-weight: 500;
      transition: color 220ms ease;
    }

    .footer-link-highlight:hover {
      color: #5cc9d1;
      text-decoration: underline;
    }

    .footer-divider {
      color: #2e3138;
      user-select: none;
    }

    .footer-icon {
      flex-shrink: 0;
      transition: stroke 220ms ease;
    }

    .footer-link:hover .footer-icon {
      stroke: #5cc9d1;
    }

    .heart-icon {
      display: inline-block;
      transition: transform 220ms ease;
      margin: 0 2px;
    }

    .footer-text:hover .heart-icon {
      transform: scale(1.25);
    }

    .coffee-icon {
      display: inline-block;
      transition: transform 220ms ease;
    }

    .footer-link:hover .coffee-icon {
      transform: rotate(12deg) scale(1.15);
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
      .app-links-footer {
        margin-top: 36px;
        padding-top: 24px;
        gap: 12px;
        font-size: 0.68rem;
      }
    }
  `;x([S()],$.prototype,"steps",2);x([S()],$.prototype,"active",2);x([S()],$.prototype,"keyRoot",2);x([S()],$.prototype,"keyScale",2);x([S()],$.prototype,"octave",2);x([S()],$.prototype,"playing",2);x([S()],$.prototype,"copied",2);x([S()],$.prototype,"vw",2);$=x([Xe("circuit-chord-forge")],$);
