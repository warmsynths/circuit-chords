(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();const tt=globalThis,gt=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),Et=new WeakMap;let ie=class{constructor(t,i,o){if(this._$cssResult$=!0,o!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(gt&&t===void 0){const o=i!==void 0&&i.length===1;o&&(t=Et.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Et.set(i,t))}return t}toString(){return this.cssText}};const ke=e=>new ie(typeof e=="string"?e:e+"",void 0,vt),Se=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((o,s,n)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[n+1],e[0]);return new ie(i,e,vt)},_e=(e,t)=>{if(gt)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const o=document.createElement("style"),s=tt.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=i.cssText,e.appendChild(o)}},Ct=gt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const o of t.cssRules)i+=o.cssText;return ke(i)})(e):e;const{is:Ee,defineProperty:Ce,getOwnPropertyDescriptor:je,getOwnPropertyNames:Ne,getOwnPropertySymbols:Te,getPrototypeOf:Re}=Object,ot=globalThis,jt=ot.trustedTypes,Ie=jt?jt.emptyScript:"",Oe=ot.reactiveElementPolyfillSupport,G=(e,t)=>e,et={toAttribute(e,t){switch(t){case Boolean:e=e?Ie:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},yt=(e,t)=>!Ee(e,t),Nt={attribute:!0,type:String,converter:et,reflect:!1,useDefault:!1,hasChanged:yt};Symbol.metadata??=Symbol("metadata"),ot.litPropertyMetadata??=new WeakMap;let O=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Nt){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(t,o,i);s!==void 0&&Ce(this.prototype,t,s)}}static getPropertyDescriptor(t,i,o){const{get:s,set:n}=je(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get:s,set(a){const l=s?.call(this);n?.call(this,a),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const t=Re(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const i=this.properties,o=[...Ne(i),...Te(i)];for(const s of o)this.createProperty(s,i[s])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[o,s]of i)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[i,o]of this.elementProperties){const s=this._$Eu(i,o);s!==void 0&&this._$Eh.set(s,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const s of o)i.unshift(Ct(s))}else t!==void 0&&i.push(Ct(t));return i}static _$Eu(t,i){const o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const o of i.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _e(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$ET(t,i){const o=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,o);if(s!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:et).toAttribute(i,o.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,i){const o=this.constructor,s=o._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=o.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:et;this._$Em=s;const l=a.fromAttribute(i,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,i,o,s=!1,n){if(t!==void 0){const a=this.constructor;if(s===!1&&(n=this[t]),o??=a.getPropertyOptions(t),!((o.hasChanged??yt)(n,i)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,o))))return;this.C(t,i,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:o,reflect:s,wrapped:n},a){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??i??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(i=void 0),this._$AL.set(t,i)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,n]of o){const{wrapped:a}=n,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(i)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(i=>this._$ET(i,this[i])),this._$EM()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[G("elementProperties")]=new Map,O[G("finalized")]=new Map,Oe?.({ReactiveElement:O}),(ot.reactiveElementVersions??=[]).push("2.1.2");const Pt=globalThis,Tt=e=>e,it=Pt.trustedTypes,Rt=it?it.createPolicy("lit-html",{createHTML:e=>e}):void 0,oe="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,se="?"+w,ze=`<${se}>`,j=document,Q=()=>j.createComment(""),X=e=>e===null||typeof e!="object"&&typeof e!="function",Mt=Array.isArray,Be=e=>Mt(e)||typeof e?.[Symbol.iterator]=="function",lt=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Ot=/>/g,E=RegExp(`>|${lt}(?:([^\\s"'>=/]+)(${lt}*=${lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Bt=/"/g,ne=/^(?:script|style|textarea|title)$/i,De=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),y=De(1),D=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Dt=new WeakMap,C=j.createTreeWalker(j,129);function ae(e,t){if(!Mt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rt!==void 0?Rt.createHTML(t):t}const Ue=(e,t)=>{const i=e.length-1,o=[];let s,n=t===2?"<svg>":t===3?"<math>":"",a=q;for(let l=0;l<i;l++){const c=e[l];let m,p,d=-1,h=0;for(;h<c.length&&(a.lastIndex=h,p=a.exec(c),p!==null);)h=a.lastIndex,a===q?p[1]==="!--"?a=It:p[1]!==void 0?a=Ot:p[2]!==void 0?(ne.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=E):p[3]!==void 0&&(a=E):a===E?p[0]===">"?(a=s??q,d=-1):p[1]===void 0?d=-2:(d=a.lastIndex-p[2].length,m=p[1],a=p[3]===void 0?E:p[3]==='"'?Bt:zt):a===Bt||a===zt?a=E:a===It||a===Ot?a=q:(a=E,s=void 0);const g=a===E&&e[l+1].startsWith("/>")?" ":"";n+=a===q?c+ze:d>=0?(o.push(m),c.slice(0,d)+oe+c.slice(d)+w+g):c+w+(d===-2?l:g)}return[ae(e,n+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class Y{constructor({strings:t,_$litType$:i},o){let s;this.parts=[];let n=0,a=0;const l=t.length-1,c=this.parts,[m,p]=Ue(t,i);if(this.el=Y.createElement(m,o),C.currentNode=this.el.content,i===2||i===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=C.nextNode())!==null&&c.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(oe)){const h=p[a++],g=s.getAttribute(d).split(w),r=/([.?@])?(.*)/.exec(h);c.push({type:1,index:n,name:r[2],strings:g,ctor:r[1]==="."?Le:r[1]==="?"?He:r[1]==="@"?Ge:st}),s.removeAttribute(d)}else d.startsWith(w)&&(c.push({type:6,index:n}),s.removeAttribute(d));if(ne.test(s.tagName)){const d=s.textContent.split(w),h=d.length-1;if(h>0){s.textContent=it?it.emptyScript:"";for(let g=0;g<h;g++)s.append(d[g],Q()),C.nextNode(),c.push({type:2,index:++n});s.append(d[h],Q())}}}else if(s.nodeType===8)if(s.data===se)c.push({type:2,index:n});else{let d=-1;for(;(d=s.data.indexOf(w,d+1))!==-1;)c.push({type:7,index:n}),d+=w.length-1}n++}}static createElement(t,i){const o=j.createElement("template");return o.innerHTML=t,o}}function U(e,t,i=e,o){if(t===D)return t;let s=o!==void 0?i._$Co?.[o]:i._$Cl;const n=X(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(e),s._$AT(e,i,o)),o!==void 0?(i._$Co??=[])[o]=s:i._$Cl=s),s!==void 0&&(t=U(e,s._$AS(e,t.values),s,o)),t}class qe{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:o}=this._$AD,s=(t?.creationScope??j).importNode(i,!0);C.currentNode=s;let n=C.nextNode(),a=0,l=0,c=o[0];for(;c!==void 0;){if(a===c.index){let m;c.type===2?m=new J(n,n.nextSibling,this,t):c.type===1?m=new c.ctor(n,c.name,c.strings,this,t):c.type===6&&(m=new Fe(n,this,t)),this._$AV.push(m),c=o[++l]}a!==c?.index&&(n=C.nextNode(),a++)}return C.currentNode=j,s}p(t){let i=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,o,s){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=U(this,t,i),X(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==D&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Be(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&X(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:o}=t,s=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Y.createElement(ae(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(i);else{const n=new qe(s,this),a=n.u(this.options);n.p(i),this.T(a),this._$AH=n}}_$AC(t){let i=Dt.get(t.strings);return i===void 0&&Dt.set(t.strings,i=new Y(t)),i}k(t){Mt(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let o,s=0;for(const n of t)s===i.length?i.push(o=new J(this.O(Q()),this.O(Q()),this,this.options)):o=i[s],o._$AI(n),s++;s<i.length&&(this._$AR(o&&o._$AB.nextSibling,s),i.length=s)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const o=Tt(t).nextSibling;Tt(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class st{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,o,s,n){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=i,this._$AM=s,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=v}_$AI(t,i=this,o,s){const n=this.strings;let a=!1;if(n===void 0)t=U(this,t,i,0),a=!X(t)||t!==this._$AH&&t!==D,a&&(this._$AH=t);else{const l=t;let c,m;for(t=n[0],c=0;c<n.length-1;c++)m=U(this,l[o+c],i,c),m===D&&(m=this._$AH[c]),a||=!X(m)||m!==this._$AH[c],m===v?t=v:t!==v&&(t+=(m??"")+n[c+1]),this._$AH[c]=m}a&&!s&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Le extends st{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}}class He extends st{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}}class Ge extends st{constructor(t,i,o,s,n){super(t,i,o,s,n),this.type=5}_$AI(t,i=this){if((t=U(this,t,i,0)??v)===D)return;const o=this._$AH,s=t===v&&o!==v||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==v&&(o===v||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Fe{constructor(t,i,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const Ve=Pt.litHtmlPolyfillSupport;Ve?.(Y,J),(Pt.litHtmlVersions??=[]).push("3.3.3");const We=(e,t,i)=>{const o=i?.renderBefore??t;let s=o._$litPart$;if(s===void 0){const n=i?.renderBefore??null;o._$litPart$=s=new J(t.insertBefore(Q(),n),n,void 0,i??{})}return s._$AI(e),s};const $t=globalThis;let F=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=We(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return D}};F._$litElement$=!0,F.finalized=!0,$t.litElementHydrateSupport?.({LitElement:F});const Ke=$t.litElementPolyfillSupport;Ke?.({LitElement:F});($t.litElementVersions??=[]).push("4.2.2");const Qe=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const Xe={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:yt},Ye=(e=Xe,t,i)=>{const{kind:o,metadata:s}=i;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),o==="accessor"){const{name:a}=i;return{set(l){const c=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,c,e,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,e,l),l}}}if(o==="setter"){const{name:a}=i;return function(l){const c=this[a];t.call(this,l),this.requestUpdate(a,c,e,!0,l)}}throw Error("Unsupported decorator location: "+o)};function Je(e){return(t,i)=>typeof i=="object"?Ye(e,t,i):((o,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,o),a?Object.getOwnPropertyDescriptor(s,n):void 0})(e,t,i)}function S(e){return Je({...e,state:!0,attribute:!1})}const Ze=e=>(...t)=>({_$litDirective$:e,values:t});let ti=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const ei={},ii=(e,t=ei)=>e._$AH=t;const oi=Ze(class extends ti{constructor(){super(...arguments),this.key=v}render(e,t){return this.key=e,t}update(e,[t,i]){return t!==this.key&&(ii(e),this.key=t),i}}),k=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ht=[{id:"maj",label:"maj",iv:[0,4,7]},{id:"min",label:"min",iv:[0,3,7]},{id:"maj7",label:"maj7",iv:[0,4,7,11]},{id:"m7",label:"m7",iv:[0,3,7,10]},{id:"7",label:"7",iv:[0,4,7,10]},{id:"m7b5",label:"m7♭5",iv:[0,3,6,10]},{id:"dim",label:"dim",iv:[0,3,6]},{id:"aug",label:"aug",iv:[0,4,8]},{id:"sus2",label:"sus2",iv:[0,2,7]},{id:"sus4",label:"sus4",iv:[0,5,7]},{id:"6",label:"6",iv:[0,4,7,9]},{id:"add9",label:"add9",iv:[0,4,7,14]}],si={0:"root",2:"2nd",3:"♭3rd",4:"3rd",5:"4th",6:"♭5th",7:"5th",8:"♯5th",9:"6th",10:"♭7th",11:"maj7",14:"9th"},ni=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII"],ut=[{id:"natminor",label:"nat minor",iv:[0,2,3,5,7,8,10]},{id:"major",label:"major",iv:[0,2,4,5,7,9,11]},{id:"dorian",label:"dorian",iv:[0,2,3,5,7,9,10]},{id:"phrygian",label:"phrygian",iv:[0,1,3,5,7,8,10]},{id:"mixo",label:"mixolydian",iv:[0,2,4,5,7,9,10]},{id:"melmin",label:"mel minor",iv:[0,2,3,5,7,9,11]},{id:"harmmin",label:"harm minor",iv:[0,2,3,5,7,8,11]},{id:"bebop",label:"bebop dorian",iv:[0,2,3,4,5,7,9,10]},{id:"blues",label:"blues",iv:[0,3,5,6,7,10]},{id:"minpent",label:"min pent",iv:[0,3,5,7,10]},{id:"hungmin",label:"hung minor",iv:[0,2,3,6,7,8,11]},{id:"ukrdom",label:"ukr dominant",iv:[0,2,3,6,7,9,10]},{id:"marva",label:"marva",iv:[0,1,4,6,7,9,11]},{id:"todi",label:"todi",iv:[0,1,3,6,7,8,11]},{id:"wholetone",label:"whole tone",iv:[0,2,4,6,8,10]},{id:"chromatic",label:"chromatic",iv:[0,1,2,3,4,5,6,7,8,9,10,11]}];function B(e){const t=e==="minor"?"natminor":e;return ut.find(i=>i.id===t)||ut[1]}function ai(e,t){const i=B(t),o=i.iv,s=o.length;if(s<5||i.id==="chromatic")return[];const n=l=>o[l%s]+12*Math.floor(l/s),a=[];for(let l=0;l<s;l++){const c=n(l),m=n(l+2)-c,p=n(l+4)-c;let d=null;if(m===4&&p===7?d="maj":m===3&&p===7?d="min":m===3&&p===6?d="dim":m===4&&p===8?d="aug":m===5&&p===7?d="sus4":m===2&&p===7&&(d="sus2"),d){const h=ni[l]||`${l+1}`,r=d==="maj"||d==="aug"||d==="sus4"||d==="sus2"?h:h.toLowerCase(),f=(e+o[l])%12,u=k[f],b=xt(d),P=d==="maj"?"":d==="min"?"m":b.label,R=`${u}${P}`;a.push({root:f,q:d,roman:r,label:R})}}return a}const Ut=[0,2,4,5,7,9,11,12],qt=[null,1,3,null,6,8,10,null];function z(e,t){return(e+1)*12+t}function Z(e){const t=k[e%12],i=Math.floor(e/12)-1;return`${t}${i}`}function xt(e){return ht.find(t=>t.id===e)||ht[0]}function ct(e){const t=k[e.root],i=xt(e.q),o=e.q==="maj"?"":e.q==="min"?"m":i.label;return`${t}${o}`}function Lt(e,t,i){return B(i).iv.some(s=>(t+s)%12===(e%12+12)%12)}function L(e,t){const i=xt(e.q),o=z(t,e.root);return i.iv.map((s,n)=>({midi:o+s,iv:s,isRoot:n===0,order:n}))}function ri(e,t,i,o){const s=[];if(e==="chromatic")[qt.map(a=>a===null?null:z(t+1,a)),Ut.map(a=>z(t+1,a)),qt.map(a=>a===null?null:z(t,a)),Ut.map(a=>z(t,a))].forEach((a,l)=>{a.forEach((c,m)=>{s.push({midi:c,row:4-l,col:m+1})})});else{const n=B(o).iv,a=n.length;for(let l=3;l>=0;l--)for(let c=0;c<8;c++){const m=l*8+c,p=z(t+Math.floor(m/a),i+n[m%a]);s.push({midi:p,row:l+1,col:c+1})}}return s}function Ht(e,t,i,o,s){const n=ri(i,t,o,s),a=L(e,t),l=new Map,c=[];return a.forEach(m=>{const p=n.findIndex(d=>d.midi===m.midi);if(p>=0&&!l.has(p)){const d=n[p];l.set(p,{...m,ref:`R${d.row}C${d.col}`})}else c.push(m)}),{cells:n,tones:a,litMap:l,missingTones:c}}let A=null,V=null,I=null;function li(){if(typeof window>"u")return null;if(!A){const e=window.AudioContext||window.webkitAudioContext;if(!e)return null;A=new e,V=A.createGain(),V.gain.value=.5,I=A.createBiquadFilter(),I.type="lowpass",I.frequency.value=2600,I.Q.value=.6,V.connect(I),I.connect(A.destination)}return A.state==="suspended"&&A.resume().catch(()=>{}),A}function ci(e){return 440*Math.pow(2,(e-69)/12)}function di(e){if(typeof e=="number")return e;const t=e.match(/^([A-Ga-g][#b]?)(-?\d+)$/);if(!t)return 60;const i=t[1].toUpperCase(),o=parseInt(t[2],10),n={C:0,"C#":1,DB:1,D:2,"D#":3,EB:3,E:4,F:5,"F#":6,GB:6,G:7,"G#":8,AB:8,A:9,"A#":10,BB:10,B:11}[i]??0;return(o+1)*12+n}function H(e,t=1.15){const i=li();if(!i||!V)return;const o=i.currentTime+.015,s=Math.max(.2,t);e.map(di).forEach((a,l)=>{const c=ci(a),m=i.createGain(),p=o+l*.028;m.gain.setValueAtTime(1e-4,p),m.gain.linearRampToValueAtTime(.16,p+.02),m.gain.exponentialRampToValueAtTime(.055,p+.22),m.gain.exponentialRampToValueAtTime(1e-4,p+s),m.connect(V),[{type:"triangle",cents:0},{type:"sine",cents:-5}].forEach(({type:h,cents:g})=>{const r=i.createOscillator();r.type=h,r.frequency.value=c*Math.pow(2,g/1200),r.connect(m),r.start(p),r.stop(p+s+.05)})})}function Gt(e,t=.6){H([e],t)}function re(e){return e!==null&&typeof e=="object"&&"name"in e&&typeof e.name=="string"}function le(e){return e!==null&&typeof e=="object"&&"step"in e&&typeof e.step=="number"&&"alt"in e&&typeof e.alt=="number"&&!isNaN(e.step)&&!isNaN(e.alt)}var ce=[0,2,4,-1,1,3,5],de=ce.map(e=>Math.floor(e*7/12));function me(e){const{step:t,alt:i,oct:o,dir:s=1}=e,n=ce[t]+7*i;if(o===void 0)return[s*n];const a=o-de[t]-4*i;return[s*n,s*a]}var mi=[3,0,4,1,5,2,6];function pe(e){const[t,i,o]=e,s=mi[pi(t)],n=Math.floor((t+1)/7);if(i===void 0)return{step:s,alt:n,dir:o};const a=i+4*n+de[s];return{step:s,alt:n,oct:a,dir:o}}function pi(e){const t=(e+1)%7;return t<0?7+t:t}var Ft=(e,t)=>Array(Math.abs(t)+1).join(e),ft=Object.freeze({empty:!0,name:"",num:NaN,q:"",type:"",step:NaN,alt:NaN,dir:NaN,simple:NaN,semitones:NaN,chroma:NaN,coord:[],oct:NaN}),hi="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",ui="(AA|A|P|M|m|d|dd)([-+]?\\d+)",fi=new RegExp("^"+hi+"|"+ui+"$");function bi(e){const t=fi.exec(`${e}`);return t===null?["",""]:t[1]?[t[1],t[2]]:[t[4],t[3]]}var Vt={};function N(e){return typeof e=="string"?Vt[e]||(Vt[e]=gi(e)):le(e)?N(yi(e)):re(e)?N(e.name):ft}var Wt=[0,2,4,5,7,9,11],he="PMMPPMM";function gi(e){const t=bi(e);if(t[0]==="")return ft;const i=+t[0],o=t[1],s=(Math.abs(i)-1)%7,n=he[s];if(n==="M"&&o==="P")return ft;const a=n==="M"?"majorable":"perfectable",l=""+i+o,c=i<0?-1:1,m=i===8||i===-8?i:c*(s+1),p=vi(a,o),d=Math.floor((Math.abs(i)-1)/7),h=c*(Wt[s]+p+12*d),g=(c*(Wt[s]+p)%12+12)%12,r=me({step:s,alt:p,oct:d,dir:c});return{empty:!1,name:l,num:i,q:o,step:s,alt:p,dir:c,type:a,simple:m,semitones:h,chroma:g,coord:r,oct:d}}function ue(e,t){const[i,o=0]=e,s=i*7+o*12<0,n=t||s?[-i,-o,-1]:[i,o,1];return N(pe(n))}function vi(e,t){return t==="M"&&e==="majorable"||t==="P"&&e==="perfectable"?0:t==="m"&&e==="majorable"?-1:/^A+$/.test(t)?t.length:/^d+$/.test(t)?-1*(e==="perfectable"?t.length:t.length+1):0}function yi(e){const{step:t,alt:i,oct:o=0,dir:s}=e;if(!s)return"";const n=t+1+7*o,a=n===0?t+1:n,l=s<0?"-":"",c=he[t]==="M"?"majorable":"perfectable";return l+a+Pi(c,i)}function Pi(e,t){return t===0?e==="majorable"?"M":"P":t===-1&&e==="majorable"?"m":t>0?Ft("A",t):Ft("d",e==="perfectable"?t:t+1)}var Kt=(e,t)=>Array(Math.abs(t)+1).join(e),fe=Object.freeze({empty:!0,name:"",letter:"",acc:"",pc:"",step:NaN,alt:NaN,chroma:NaN,height:NaN,coord:[],midi:null,freq:null}),Qt=new Map,Mi=e=>"CDEFGAB".charAt(e),$i=e=>e<0?Kt("b",-e):Kt("#",e),xi=e=>e[0]==="b"?-e.length:e.length;function M(e){const t=JSON.stringify(e),i=Qt.get(t);if(i)return i;const o=typeof e=="string"?Si(e):le(e)?M(_i(e)):re(e)?M(e.name):fe;return Qt.set(t,o),o}var Ai=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function At(e){const t=Ai.exec(e);return t?[t[1].toUpperCase(),t[2].replace(/x/g,"##"),t[3],t[4]]:["","","",""]}function wi(e){return M(pe(e))}var ki=(e,t)=>(e%t+t)%t,dt=[0,2,4,5,7,9,11];function Si(e){const t=At(e);if(t[0]===""||t[3]!=="")return fe;const i=t[0],o=t[1],s=t[2],n=(i.charCodeAt(0)+3)%7,a=xi(o),l=s.length?+s:void 0,c=me({step:n,alt:a,oct:l}),m=i+o+s,p=i+o,d=(dt[n]+a+120)%12,h=l===void 0?ki(dt[n]+a,12)-1188:dt[n]+a+12*(l+1),g=h>=0&&h<=127?h:null,r=l===void 0?null:Math.pow(2,(h-69)/12)*440;return{empty:!1,acc:o,alt:a,chroma:d,coord:c,freq:r,height:h,letter:i,midi:g,name:m,oct:l,pc:p,step:n}}function _i(e){const{step:t,alt:i,oct:o}=e,s=Mi(t);if(!s)return"";const n=s+$i(i);return o||o===0?n+o:n}function be(e,t){const i=M(e),o=Array.isArray(t)?t:N(t).coord;if(i.empty||!o||o.length<2)return"";const s=i.coord,n=s.length===1?[s[0]+o[0]]:[s[0]+o[0],s[1]+o[1]];return wi(n).name}function Xt(e,t){const i=M(e),o=M(t);if(i.empty||o.empty)return"";const s=i.coord,n=o.coord,a=n[0]-s[0],l=s.length===2&&n.length===2?n[1]-s[1]:-Math.floor(a*7/12),c=o.height===i.height&&o.midi!==null&&i.oct===o.oct&&i.step>o.step;return ue([a,l],c).name}function ge(e,t){const i=t.length,o=(e%i+i)%i;return t.slice(o,i).concat(t.slice(0,o))}var T={empty:!0,name:"",setNum:0,chroma:"000000000000",normalized:"000000000000",intervals:[]},ve=e=>Number(e).toString(2).padStart(12,"0"),Yt=e=>parseInt(e,2),Ei=/^[01]{12}$/;function ye(e){return Ei.test(e)}var Ci=e=>typeof e=="number"&&e>=0&&e<=4095,ji=e=>e&&ye(e.chroma),Jt={[T.chroma]:T};function Pe(e){const t=ye(e)?e:Ci(e)?ve(e):Array.isArray(e)?Oi(e):ji(e)?e.chroma:T.chroma;return Jt[t]=Jt[t]||Ii(t)}var Ni=["1P","2m","2M","3m","3M","4P","5d","5P","6m","6M","7m","7M"];function Ti(e){const t=[];for(let i=0;i<12;i++)e.charAt(i)==="1"&&t.push(Ni[i]);return t}function Ri(e){const t=e.split("");return t.map((i,o)=>ge(o,t).join(""))}function Ii(e){const t=Yt(e),i=Ri(e).map(Yt).filter(n=>n>=2048).sort()[0],o=ve(i),s=Ti(e);return{empty:!1,name:"",setNum:t,chroma:e,normalized:o,intervals:s}}function Oi(e){if(e.length===0)return T.chroma;let t;const i=[0,0,0,0,0,0,0,0,0,0,0,0];for(let o=0;o<e.length;o++)t=M(e[o]),t.empty&&(t=N(e[o])),t.empty||(i[t.chroma]=1);return i.join("")}var zi=[["1P 3M 5P","major","M ^  maj"],["1P 3M 5P 7M","major seventh","maj7 Δ ma7 M7 Maj7 ^7"],["1P 3M 5P 7M 9M","major ninth","maj9 Δ9 ^9"],["1P 3M 5P 7M 9M 13M","major thirteenth","maj13 Maj13 ^13"],["1P 3M 5P 6M","sixth","6 add6 add13 M6"],["1P 3M 5P 6M 9M","sixth added ninth","6add9 6/9 69 M69"],["1P 3M 6m 7M","major seventh flat sixth","M7b6 ^7b6"],["1P 3M 5P 7M 11A","major seventh sharp eleventh","maj#4 Δ#4 Δ#11 M7#11 ^7#11 maj7#11"],["1P 3m 5P","minor","m min -"],["1P 3m 5P 7m","minor seventh","m7 min7 mi7 -7"],["1P 3m 5P 7M","minor/major seventh","m/ma7 m/maj7 mM7 mMaj7 m/M7 -Δ7 mΔ -^7 -maj7"],["1P 3m 5P 6M","minor sixth","m6 -6"],["1P 3m 5P 7m 9M","minor ninth","m9 -9"],["1P 3m 5P 7M 9M","minor/major ninth","mM9 mMaj9 -^9"],["1P 3m 5P 7m 9M 11P","minor eleventh","m11 -11"],["1P 3m 5P 7m 9M 13M","minor thirteenth","m13 -13"],["1P 3m 5d","diminished","dim ° o"],["1P 3m 5d 7d","diminished seventh","dim7 °7 o7"],["1P 3m 5d 7m","half-diminished","m7b5 ø -7b5 h7 h"],["1P 3M 5P 7m","dominant seventh","7 dom"],["1P 3M 5P 7m 9M","dominant ninth","9"],["1P 3M 5P 7m 9M 13M","dominant thirteenth","13"],["1P 3M 5P 7m 11A","lydian dominant seventh","7#11 7#4"],["1P 3M 5P 7m 9m","dominant flat ninth","7b9"],["1P 3M 5P 7m 9A","dominant sharp ninth","7#9"],["1P 3M 7m 9m","altered","alt7"],["1P 4P 5P","suspended fourth","sus4 sus"],["1P 2M 5P","suspended second","sus2"],["1P 4P 5P 7m","suspended fourth seventh","7sus4 7sus"],["1P 5P 7m 9M 11P","eleventh","11"],["1P 4P 5P 7m 9m","suspended fourth flat ninth","b9sus phryg 7b9sus 7b9sus4"],["1P 5P","fifth","5"],["1P 3M 5A","augmented","aug + +5 ^#5"],["1P 3m 5A","minor augmented","m#5 -#5 m+"],["1P 3M 5A 7M","augmented seventh","maj7#5 maj7+5 +maj7 ^7#5"],["1P 3M 5P 7M 9M 11A","major sharp eleventh (lydian)","maj9#11 Δ9#11 ^9#11"],["1P 2M 4P 5P","","sus24 sus4add9"],["1P 3M 5A 7M 9M","","maj9#5 Maj9#5"],["1P 3M 5A 7m","","7#5 +7 7+ 7aug aug7"],["1P 3M 5A 7m 9A","","7#5#9 7#9#5 7alt"],["1P 3M 5A 7m 9M","","9#5 9+"],["1P 3M 5A 7m 9M 11A","","9#5#11"],["1P 3M 5A 7m 9m","","7#5b9 7b9#5"],["1P 3M 5A 7m 9m 11A","","7#5b9#11"],["1P 3M 5A 9A","","+add#9"],["1P 3M 5A 9M","","M#5add9 +add9"],["1P 3M 5P 6M 11A","","M6#11 M6b5 6#11 6b5"],["1P 3M 5P 6M 7M 9M","","M7add13"],["1P 3M 5P 6M 9M 11A","","69#11"],["1P 3m 5P 6M 9M","","m69 -69"],["1P 3M 5P 6m 7m","","7b6"],["1P 3M 5P 7M 9A 11A","","maj7#9#11"],["1P 3M 5P 7M 9M 11A 13M","","M13#11 maj13#11 M13+4 M13#4"],["1P 3M 5P 7M 9m","","M7b9"],["1P 3M 5P 7m 11A 13m","","7#11b13 7b5b13"],["1P 3M 5P 7m 13M","","7add6 67 7add13"],["1P 3M 5P 7m 9A 11A","","7#9#11 7b5#9 7#9b5"],["1P 3M 5P 7m 9A 11A 13M","","13#9#11"],["1P 3M 5P 7m 9A 11A 13m","","7#9#11b13"],["1P 3M 5P 7m 9A 13M","","13#9"],["1P 3M 5P 7m 9A 13m","","7#9b13"],["1P 3M 5P 7m 9M 11A","","9#11 9+4 9#4"],["1P 3M 5P 7m 9M 11A 13M","","13#11 13+4 13#4"],["1P 3M 5P 7m 9M 11A 13m","","9#11b13 9b5b13"],["1P 3M 5P 7m 9m 11A","","7b9#11 7b5b9 7b9b5"],["1P 3M 5P 7m 9m 11A 13M","","13b9#11"],["1P 3M 5P 7m 9m 11A 13m","","7b9b13#11 7b9#11b13 7b5b9b13"],["1P 3M 5P 7m 9m 13M","","13b9"],["1P 3M 5P 7m 9m 13m","","7b9b13"],["1P 3M 5P 7m 9m 9A","","7b9#9"],["1P 3M 5P 9M","","Madd9 2 add9 add2"],["1P 3M 5P 9m","","Maddb9"],["1P 3M 5d","","Mb5"],["1P 3M 5d 6M 7m 9M","","13b5"],["1P 3M 5d 7M","","M7b5"],["1P 3M 5d 7M 9M","","M9b5"],["1P 3M 5d 7m","","7b5"],["1P 3M 5d 7m 9M","","9b5"],["1P 3M 7m","","7no5"],["1P 3M 7m 13m","","7b13"],["1P 3M 7m 9M","","9no5"],["1P 3M 7m 9M 13M","","13no5"],["1P 3M 7m 9M 13m","","9b13"],["1P 3m 4P 5P","","madd4"],["1P 3m 5P 6m 7M","","mMaj7b6"],["1P 3m 5P 6m 7M 9M","","mMaj9b6"],["1P 3m 5P 7m 11P","","m7add11 m7add4"],["1P 3m 5P 9M","","madd9"],["1P 3m 5d 6M 7M","","o7M7"],["1P 3m 5d 7M","","oM7"],["1P 3m 6m 7M","","mb6M7"],["1P 3m 6m 7m","","m7#5"],["1P 3m 6m 7m 9M","","m9#5"],["1P 3m 5A 7m 9M 11P","","m11A"],["1P 3m 6m 9m","","mb6b9"],["1P 2M 3m 5d 7m","","m9b5"],["1P 4P 5A 7M","","M7#5sus4"],["1P 4P 5A 7M 9M","","M9#5sus4"],["1P 4P 5A 7m","","7#5sus4"],["1P 4P 5P 7M","","M7sus4"],["1P 4P 5P 7M 9M","","M9sus4"],["1P 4P 5P 7m 9M","","9sus4 9sus"],["1P 4P 5P 7m 9M 13M","","13sus4 13sus"],["1P 4P 5P 7m 9m 13m","","7sus4b9b13 7b9b13sus4"],["1P 4P 7m 10m","","4 quartal"],["1P 5P 7m 9m 11P","","11b9"]],Bi=zi,Di={...T,name:"",quality:"Unknown",intervals:[],aliases:[]},Me=[],W={};function Ui(e){return W[e]||Di}function qi(e,t,i){const o=Hi(e),s={...Pe(e),name:i||"",quality:o,intervals:e,aliases:t};Me.push(s),s.name&&(W[s.name]=s),W[s.setNum]=s,W[s.chroma]=s,s.aliases.forEach(n=>Li(s,n))}function Li(e,t){W[t]=e}function Hi(e){const t=i=>e.indexOf(i)!==-1;return t("5A")?"Augmented":t("3M")?"Major":t("5d")?"Diminished":t("3m")?"Minor":"Unknown"}Bi.forEach(([e,t,i])=>qi(e.split(" "),i.split(" "),t));Me.sort((e,t)=>e.setNum-t.setNum);var Gi=Fi((e,t)=>[e[0]-t[0],e[1]-t[1]]);function Fi(e){return(t,i)=>{const o=N(t).coord,s=N(i).coord;if(o&&s){const n=e(o,s);return ue(n).name}}}var Vi=[["1P 2M 3M 5P 6M","major pentatonic","pentatonic"],["1P 2M 3M 4P 5P 6M 7M","major","ionian"],["1P 2M 3m 4P 5P 6m 7m","minor","aeolian"],["1P 2M 3m 3M 5P 6M","major blues"],["1P 3m 4P 5d 5P 7m","minor blues","blues"],["1P 2M 3m 4P 5P 6M 7M","melodic minor"],["1P 2M 3m 4P 5P 6m 7M","harmonic minor"],["1P 2M 3M 4P 5P 6M 7m 7M","bebop"],["1P 2M 3m 4P 5d 6m 6M 7M","diminished","whole-half diminished"],["1P 2M 3m 4P 5P 6M 7m","dorian"],["1P 2M 3M 4A 5P 6M 7M","lydian"],["1P 2M 3M 4P 5P 6M 7m","mixolydian","dominant"],["1P 2m 3m 4P 5P 6m 7m","phrygian"],["1P 2m 3m 4P 5d 6m 7m","locrian"],["1P 3M 4P 5P 7M","ionian pentatonic"],["1P 3M 4P 5P 7m","mixolydian pentatonic","indian"],["1P 2M 4P 5P 6M","ritusen"],["1P 2M 4P 5P 7m","egyptian"],["1P 3M 4P 5d 7m","neapolitan major pentatonic"],["1P 3m 4P 5P 6m","vietnamese 1"],["1P 2m 3m 5P 6m","pelog"],["1P 2m 4P 5P 6m","kumoijoshi"],["1P 2M 3m 5P 6m","hirajoshi"],["1P 2m 4P 5d 7m","iwato"],["1P 2m 4P 5P 7m","in-sen"],["1P 3M 4A 5P 7M","lydian pentatonic","chinese"],["1P 3m 4P 6m 7m","malkos raga"],["1P 3m 4P 5d 7m","locrian pentatonic","minor seven flat five pentatonic"],["1P 3m 4P 5P 7m","minor pentatonic","vietnamese 2"],["1P 3m 4P 5P 6M","minor six pentatonic"],["1P 2M 3m 5P 6M","flat three pentatonic","kumoi"],["1P 2M 3M 5P 6m","flat six pentatonic"],["1P 2m 3M 5P 6M","scriabin"],["1P 3M 5d 6m 7m","whole tone pentatonic"],["1P 3M 4A 5A 7M","lydian #5p pentatonic"],["1P 3M 4A 5P 7m","lydian dominant pentatonic"],["1P 3m 4P 5P 7M","minor #7m pentatonic"],["1P 3m 4d 5d 7m","super locrian pentatonic"],["1P 2M 3m 4P 5P 7M","minor hexatonic"],["1P 2A 3M 5P 5A 7M","augmented"],["1P 2M 4P 5P 6M 7m","piongio"],["1P 2m 3M 4A 6M 7m","prometheus neapolitan"],["1P 2M 3M 4A 6M 7m","prometheus"],["1P 2m 3M 5d 6m 7m","mystery #1"],["1P 2m 3M 4P 5A 6M","six tone symmetric"],["1P 2M 3M 4A 5A 6A","whole tone","messiaen's mode #1"],["1P 2m 4P 4A 5P 7M","messiaen's mode #5"],["1P 2M 3M 4P 5d 6m 7m","locrian major","arabian"],["1P 2m 3M 4A 5P 6m 7M","double harmonic lydian"],["1P 2m 2A 3M 4A 6m 7m","altered","super locrian","diminished whole tone","pomeroy"],["1P 2M 3m 4P 5d 6m 7m","locrian #2","half-diminished","aeolian b5"],["1P 2M 3M 4P 5P 6m 7m","mixolydian b6","melodic minor fifth mode","hindu"],["1P 2M 3M 4A 5P 6M 7m","lydian dominant","lydian b7","overtone"],["1P 2M 3M 4A 5A 6M 7M","lydian augmented"],["1P 2m 3m 4P 5P 6M 7m","dorian b2","phrygian #6","melodic minor second mode"],["1P 2m 3m 4d 5d 6m 7d","ultralocrian","superlocrian bb7","superlocrian diminished"],["1P 2m 3m 4P 5d 6M 7m","locrian 6","locrian natural 6","locrian sharp 6"],["1P 2A 3M 4P 5P 5A 7M","augmented heptatonic"],["1P 2M 3m 4A 5P 6M 7m","dorian #4","ukrainian dorian","romanian minor","altered dorian"],["1P 2M 3m 4A 5P 6M 7M","lydian diminished"],["1P 2M 3M 4A 5A 7m 7M","leading whole tone"],["1P 2M 3M 4A 5P 6m 7m","lydian minor"],["1P 2m 3M 4P 5P 6m 7m","phrygian dominant","spanish","phrygian major"],["1P 2m 3m 4P 5P 6m 7M","balinese"],["1P 2m 3m 4P 5P 6M 7M","neapolitan major"],["1P 2M 3M 4P 5P 6m 7M","harmonic major"],["1P 2m 3M 4P 5P 6m 7M","double harmonic major","gypsy"],["1P 2M 3m 4A 5P 6m 7M","hungarian minor"],["1P 2A 3M 4A 5P 6M 7m","hungarian major"],["1P 2m 3M 4P 5d 6M 7m","oriental"],["1P 2m 3m 3M 4A 5P 7m","flamenco"],["1P 2m 3m 4A 5P 6m 7M","todi raga"],["1P 2m 3M 4P 5d 6m 7M","persian"],["1P 2m 3M 5d 6m 7m 7M","enigmatic"],["1P 2M 3M 4P 5A 6M 7M","major augmented","major #5","ionian augmented","ionian #5"],["1P 2A 3M 4A 5P 6M 7M","lydian #9"],["1P 2m 2M 4P 4A 5P 6m 7M","messiaen's mode #4"],["1P 2m 3M 4P 4A 5P 6m 7M","purvi raga"],["1P 2m 3m 3M 4P 5P 6m 7m","spanish heptatonic"],["1P 2M 3m 3M 4P 5P 6M 7m","bebop minor"],["1P 2M 3M 4P 5P 5A 6M 7M","bebop major"],["1P 2m 3m 4P 5d 5P 6m 7m","bebop locrian"],["1P 2M 3m 4P 5P 6m 7m 7M","minor bebop"],["1P 2M 3M 4P 5d 5P 6M 7M","ichikosucho"],["1P 2M 3m 4P 5P 6m 6M 7M","minor six diminished"],["1P 2m 3m 3M 4A 5P 6M 7m","half-whole diminished","dominant diminished","messiaen's mode #2"],["1P 3m 3M 4P 5P 6M 7m 7M","kafi raga"],["1P 2M 3M 4P 4A 5A 6A 7M","messiaen's mode #6"],["1P 2M 3m 3M 4P 5d 5P 6M 7m","composite blues"],["1P 2M 3m 3M 4A 5P 6m 7m 7M","messiaen's mode #3"],["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M","messiaen's mode #7"],["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M","chromatic"]],Wi=Vi,Ki={...T,intervals:[],aliases:[]},K={};function Qi(e){return K[e]||Ki}function Xi(e,t,i=[]){const o={...Pe(e),name:t,intervals:e,aliases:i};return K[o.name]=o,K[o.setNum]=o,K[o.chroma]=o,o.aliases.forEach(s=>Yi(o,s)),o}function Yi(e,t){K[t]=e}Wi.forEach(([e,t,...i])=>Xi(e.split(" "),t,i));var $e={empty:!0,name:"",symbol:"",root:"",bass:"",rootDegree:0,type:"",tonic:null,setNum:NaN,quality:"Unknown",chroma:"",normalized:"",aliases:[],notes:[],intervals:[]};function wt(e){const[t,i,o,s]=At(e);return t===""?mt("",e):t==="A"&&s==="ug"?mt("","aug"):mt(t+i,o+s)}function mt(e,t){const i=t.split("/");if(i.length===1)return[e,i[0],""];const[o,s,n,a]=At(i[1]);return o!==""&&n===""&&a===""?[e,i[0],o+s]:[e,t,""]}function Zt(e){if(Array.isArray(e))return pt(e[1]||"",e[0],e[2]);if(e==="")return $e;{const[t,i,o]=wt(e),s=pt(i,t,o);return s.empty?pt(e):s}}function pt(e,t,i){const o=Ui(e),s=M(t||""),n=M(i||"");if(o.empty||t&&s.empty||i&&n.empty)return $e;const a=Xt(s.pc,n.pc),l=o.intervals.indexOf(a),c=l>=0,m=c?n:M(""),p=l===-1?NaN:l+1,d=n.pc&&n.pc!==s.pc,h=Array.from(o.intervals);if(c)for(let u=1;u<p;u++){const b=h[0][0],P=h[0][1],R=parseInt(b,10)+7;h.push(`${R}${P}`),h.shift()}else if(d){const u=Gi(Xt(s.pc,n.pc),"8P");u&&h.unshift(u)}const g=s.empty?[]:h.map(u=>be(s.pc,u));e=o.aliases.indexOf(e)!==-1?e:o.aliases[0];const r=`${s.empty?"":s.pc}${e}${c&&p>1?"/"+m.pc:d?"/"+n.pc:""}`,f=`${t?s.pc+" ":""}${o.name}${c&&p>1?" over "+m.pc:d?" over "+n.pc:""}`;return{...o,name:f,symbol:r,tonic:s.pc,type:o.name,root:m.pc,bass:d?n.pc:"",intervals:h,rootDegree:p,notes:g}}var Ji=[[.125,"dl",["large","duplex longa","maxima","octuple","octuple whole"]],[.25,"l",["long","longa"]],[.5,"d",["double whole","double","breve"]],[1,"w",["whole","semibreve"]],[2,"h",["half","minim"]],[4,"q",["quarter","crotchet"]],[8,"e",["eighth","quaver"]],[16,"s",["sixteenth","semiquaver"]],[32,"t",["thirty-second","demisemiquaver"]],[64,"sf",["sixty-fourth","hemidemisemiquaver"]],[128,"h",["hundred twenty-eighth"]],[256,"th",["two hundred fifty-sixth"]]],Zi=Ji;Zi.forEach(([e,t,i])=>void 0);var xe=M,to=e=>xe(e).midi,eo=e=>xe(e).chroma,kt=[[0,2773,0,"ionian","","Maj7","major"],[1,2902,2,"dorian","m","m7"],[2,3418,4,"phrygian","m","m7"],[3,2741,-1,"lydian","","Maj7"],[4,2774,1,"mixolydian","","7"],[5,2906,3,"aeolian","m","m7","minor"],[6,3434,5,"locrian","dim","m7b5"]],te={...T,name:"",alt:0,modeNum:NaN,triad:"",seventh:"",aliases:[]},io=kt.map(oo),bt={};io.forEach(e=>{bt[e.name]=e,e.aliases.forEach(t=>{bt[t]=e})});function Ae(e){return typeof e=="string"?bt[e.toLowerCase()]||te:e&&e.name?Ae(e.name):te}function oo(e){const[t,i,o,s,n,a,l]=e,c=l?[l]:[],m=Number(i).toString(2);return{empty:!1,intervals:Qi(s).intervals,modeNum:t,chroma:m,normalized:m,name:s,setNum:i,alt:o,triad:n,seventh:a,aliases:c}}function we(e){return(t,i)=>{const o=Ae(t);if(o.empty)return[];const s=ge(o.modeNum,e),n=o.intervals.map(a=>be(i,a));return s.map((a,l)=>n[l]+a)}}we(kt.map(e=>e[4]));we(kt.map(e=>e[5]));function so(e){let t=e;return t=t.replace(/diminished/gi,"diminished"),t=t.replace(/dim/gi,"dim"),t=t.replace(/minor/gi,"minor"),t=t.replace(/min/gi,"min"),t=t.replace(/major/gi,"major"),t=t.replace(/maj/gi,"maj"),t=t.replace(/aug/gi,"aug"),t=t.replace(/sus/gi,"sus"),t=t.replace(/dom/gi,"dom"),t=t.replace(/minmaj/gi,"mMaj"),t=t.replace(/mmaj/gi,"mMaj"),t}function no(e){return e.replace(/([A-G])(B+)/g,(i,o,s)=>o+"b".repeat(s.length)).replace(/->|→|–|—/g," ").replace(/[|>,;:]/g," ").replace(/[\r\n]+/g," ").replace(/\s+/g," ").trim()}function ao(e){const t=no(e),i=/[A-G](?:#{1,2}|b{1,2})?(?:[^\s,|/]+)?(?:\/[A-G](?:#{1,2}|b{1,2})?)?/g,o=t.match(i);return o?o.map(s=>s.trim()):[]}function ro(e){const t=ao(e),i=[];for(const o of t){let s=Zt(o);if(s.empty||s.notes.length===0){const[n,a,l]=wt(o);if(n){const c=so(a),m=n+c+(l?"/"+l:""),p=Zt(m);!p.empty&&p.notes.length>0&&(s=p)}}s.empty||s.notes.length===0||i.push({symbol:s.symbol||o,tonic:s.tonic,quality:s.quality,notes:s.notes,intervals:s.intervals,aliases:s.aliases})}return i}function lo(e){const t=e.tonic?eo(e.tonic)??(to(e.tonic+"4")??60)%12:0,i=e.symbol||"",[,o]=wt(i),s=(o||"").trim(),n=(e.quality||"").toLowerCase();let a="maj";return/m7b5|min7b5|m7-5|half|ø/i.test(s)||n.includes("half-diminished")?a="m7b5":/dim|°/i.test(s)||n.includes("diminished")?a="dim":/aug|\+/i.test(s)||n.includes("augmented")?a="aug":/sus2/i.test(s)?a="sus2":/sus4|sus/i.test(s)?a="sus4":/add9|add2/i.test(s)?a="add9":/^(?:6|add6|maj6)$/i.test(s)?a="6":/maj7|maj9|maj11|maj13|Δ|ma7/i.test(s)||s.includes("M7")||s.includes("M9")||s.includes("M11")||s.includes("M13")||n==="major"&&(e.aliases?.some(l=>/maj7|M7|Δ/i.test(l))??!1)?a="maj7":/^(?:m7|min7|-7|m9|min9|-9|m11|min11|m13|min13|m6|min6)$/i.test(s)||n==="minor"&&(e.intervals?.includes("10m")||e.intervals?.includes("10d")||/7|9|11|13/.test(s))?a="m7":/^(?:7|9|11|13|dom|dom7|7b9|7#9|7b5|7#5|7alt)$/i.test(s)||n==="major"&&/7|9|11|13/.test(s)?a="7":n==="minor"||/^(?:m|min|-)$/i.test(s)?a="min":(n==="major"||/^(?:maj|m)?$/i.test(s))&&(a="maj"),{root:t,q:a}}function co(e){return ro(e).map(lo).slice(0,16)}var mo=Object.defineProperty,po=Object.getOwnPropertyDescriptor,x=(e,t,i,o)=>{for(var s=o>1?void 0:o?po(t,i):t,n=e.length-1,a;n>=0;n--)(a=e[n])&&(s=(o?a(t,i,s):a(s))||s);return o&&s&&mo(t,i,s),s};const ee="circuit_chords_v2_state",ho=[{root:0,q:"maj7"},{root:9,q:"m7"},{root:2,q:"m7"},{root:7,q:"7"}];let $=class extends F{constructor(){super(...arguments),this.steps=ho,this.active=0,this.keyRoot=0,this.keyScale="major",this.octave=3,this.playing=!1,this.copied=!1,this.vw=typeof window<"u"?window.innerWidth:1280,this.parity=!1,this.transportTimer=null,this.lastSig="",this.handleResize=()=>{this.vw=window.innerWidth},this.handleKeyDown=e=>{if(e.target instanceof HTMLInputElement||e.target instanceof HTMLSelectElement||e.target instanceof HTMLTextAreaElement)return;const t=this.steps.length;e.key==="ArrowRight"?(e.preventDefault(),this.active=(this.active+1)%t,this.persistState()):e.key==="ArrowLeft"?(e.preventDefault(),this.active=(this.active-1+t)%t,this.persistState()):e.key==="ArrowUp"?(e.preventDefault(),this.bumpOctave(1)):e.key==="ArrowDown"?(e.preventDefault(),this.bumpOctave(-1)):e.key===" "?(e.preventDefault(),this.toggleTransport()):e.key==="Enter"&&(e.preventDefault(),this.auditionActive())}}get layout(){return this.keyScale==="chromatic"?"chromatic":"in-key"}connectedCallback(){super.connectedCallback(),this.loadInitialState(),window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("resize",this.handleResize)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("resize",this.handleResize),this.transportTimer&&(clearInterval(this.transportTimer),this.transportTimer=null)}loadInitialState(){let e=typeof window<"u"?window.location.search:"";typeof window<"u"&&window.location.hash&&!window.location.hash.startsWith("#/")&&(e+=window.location.hash);const t=new URLSearchParams(e),i=t.get("p")||t.get("progression");if(i&&i.trim()){const o=co(i.trim());if(o.length>0){this.steps=o,this.active=0;const s=o[0];if(this.keyRoot=s.root,this.keyScale=["min","m7","m7b5","dim"].includes(s.q)?"natminor":"major",t.has("key")){const n=t.get("key"),a=parseInt(n,10);if(!isNaN(a)&&a>=0&&a<=11)this.keyRoot=a;else{const l=k.indexOf(n.toUpperCase());l>=0&&(this.keyRoot=l)}}if(t.has("scale")){const n=t.get("scale").toLowerCase(),a=B(n);this.keyScale=a.id}else if(t.has("mode")){const n=t.get("mode").toLowerCase();this.keyScale=n==="minor"?"natminor":"major"}if(t.has("octave")){const n=parseInt(t.get("octave"),10);!isNaN(n)&&n>=1&&n<=6&&(this.octave=n)}t.has("layout")&&t.get("layout")==="chromatic"&&(this.keyScale="chromatic"),this.persistState();return}}this.loadPersistedState()}loadPersistedState(){try{const e=localStorage.getItem(ee);if(e){const t=JSON.parse(e);Array.isArray(t.steps)&&t.steps.length>0&&(this.steps=t.steps),typeof t.active=="number"&&(this.active=Math.max(0,Math.min(t.active,this.steps.length-1))),typeof t.keyRoot=="number"&&(this.keyRoot=t.keyRoot),typeof t.keyScale=="string"?this.keyScale=B(t.keyScale).id:t.layout==="chromatic"?this.keyScale="chromatic":t.keyMode==="minor"?this.keyScale="natminor":t.keyMode==="major"&&(this.keyScale="major"),typeof t.octave=="number"&&(this.octave=Math.max(1,Math.min(6,t.octave)))}}catch{}}persistState(){try{const e={steps:this.steps,active:this.active,keyRoot:this.keyRoot,keyScale:this.keyScale,octave:this.octave,layout:this.layout};localStorage.setItem(ee,JSON.stringify(e))}catch{}}bumpOctave(e){const t=Math.max(1,Math.min(6,this.octave+e));t!==this.octave&&(this.octave=t,this.persistState())}auditionActive(){const e=this.steps[this.active];if(e){const t=L(e,this.octave);H(t.map(i=>i.midi))}}toggleTransport(){if(this.transportTimer){clearInterval(this.transportTimer),this.transportTimer=null,this.playing=!1;return}this.playing=!0;const e=()=>{const t=this.steps[this.active];if(t){const i=L(t,this.octave);H(i.map(o=>o.midi),.85)}this.active=(this.active+1)%this.steps.length,this.persistState()};e(),this.transportTimer=window.setInterval(e,980)}setStepRoot(e){this.steps=this.steps.map((t,i)=>i===this.active?{...t,root:e}:t),this.persistState()}setStepQuality(e){this.steps=this.steps.map((t,i)=>i===this.active?{...t,q:e}:t),this.persistState()}setStepChord(e,t){this.steps=this.steps.map((i,o)=>o===this.active?{...i,root:e,q:t}:i),this.persistState()}addStep(){if(this.steps.length>=16)return;const e=this.steps[this.steps.length-1]||{root:this.keyRoot,q:"maj7"};this.steps=[...this.steps,{...e}],this.active=this.steps.length-1,this.auditionActive(),this.persistState()}removeStep(){if(this.steps.length<=1)return;const e=this.steps.filter((t,i)=>i!==this.active);this.steps=e,this.active=Math.min(this.active,e.length-1),this.auditionActive(),this.persistState()}copyPadList(e,t){const i=`${e} — ${t.map(o=>`${o.pitch}→${o.ref}`).join("  ")}`;navigator.clipboard&&navigator.clipboard.writeText(i).catch(()=>{}),this.copied=!0,setTimeout(()=>{this.copied=!1},1600)}renderMiniCells(e){const{cells:t,litMap:i}=Ht(e,this.octave,this.layout,this.keyRoot,this.keyScale);return t.map((o,s)=>{const n=i.get(s);let a="#242730";return n?a=n.isRoot?"#5cc9d1":"#d1608f":o.midi===null?a="#1f2126":Lt(o.midi%12,this.keyRoot,this.keyScale)&&(a="#2b3038"),y`<div class="mini-cell" style="background: ${a};"></div>`})}render(){const e=this.steps[this.active]||this.steps[0]||{root:0,q:"maj7"},{cells:t,tones:i,litMap:o,missingTones:s}=Ht(e,this.octave,this.layout,this.keyRoot,this.keyScale),n=o.size,a=ct(e),l=B(this.keyScale),c=ai(this.keyRoot,this.keyScale),m=`${e.root}:${e.q}:${this.octave}:${this.layout}:${this.keyRoot}:${this.keyScale}:${this.active}`;m!==this.lastSig&&(this.lastSig=m,this.parity=!this.parity);const p=this.parity?"A":"B";let d=null;o.forEach((r,f)=>{r.isRoot&&(d=t[f])});const h=r=>d?Math.max(Math.abs(r.row-d.row),Math.abs(r.col-d.col)):Math.abs(r.col-4),g=i.map(r=>{const f=Array.from(o.entries()).find(([,u])=>u.order===r.order);return{pitch:Z(r.midi),ref:f?f[1].ref:"off plate",deg:si[r.iv]||"tone",isRoot:r.isRoot}});return y`
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
                  ${oi(a,y`<span class="chord-name-anim">${a}</span>`)}
                </div>
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
                  @click=${()=>this.copyPadList(a,g)}
                >
                  ${this.copied?"copied":"copy pad list"}
                </button>
              </div>
            </div>

            <!-- Off-Plate Warning -->
            ${s.length>0?y`
                  <div class="warning-banner">
                    ${s.length} ${s.length===1?"tone":"tones"} off the plate (${s.map(r=>Z(r.midi)).join(", ")}) — shift the base octave or switch layout
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
                      aria-label="Step ${f+1}, ${ct(r)}${u?", active":""}"
                      @click=${()=>{this.active=f,this.auditionActive(),this.persistState()}}
                      @keydown=${b=>{(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),this.active=f,this.auditionActive(),this.persistState())}}
                    >
                      <div class="step-tile-top">
                        <span class="step-tile-name">${ct(r)}</span>
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
                    ${t.map((r,f)=>{const u=o.get(f),b=r.midi===null,P=b?"":k[r.midi%12],R=!b&&P.length===1,St=h(r);let nt="transparent",at="transparent",_t="400",rt="none";if(u)nt=u.isRoot?"#5cc9d1":"#d1608f",at="#121418",_t="500",rt=`padBloom${p} 560ms cubic-bezier(.2,.75,.25,1) ${70+St*46}ms both`;else if(!b){const _=Lt(r.midi%12,this.keyRoot,this.keyScale);nt=_?R?"#2d343e":"#252b33":R?"#342a31":"#2a2329",at=_?"#aeb7c1":"#a2909c",rt=`padDim${p} 420ms ease ${St*22}ms both${_?`, ambientShimmer 5.2s ease-in-out ${((r.row+r.col)*.13).toFixed(2)}s infinite`:""}`}return y`
                        <div
                          class="pad-btn ${b?"empty":""}"
                          style="
                            background: ${nt};
                            color: ${at};
                            font-weight: ${_t};
                            animation: ${rt};
                          "
                          tabindex="${b?-1:0}"
                          role="button"
                          aria-label="${b?"Empty pad":`${Z(r.midi)} row ${r.row} col ${r.col}`}"
                          title="${b?"no pad":`${Z(r.midi)} · row ${r.row} col ${r.col}`}"
                          @click=${()=>{!b&&r.midi!==null&&(Gt(r.midi,.6),this.setStepRoot(r.midi%12))}}
                          @keydown=${_=>{!b&&r.midi!==null&&(_.key==="Enter"||_.key===" ")&&(_.preventDefault(),Gt(r.midi,.6),this.setStepRoot(r.midi%12))}}
                        >
                          ${P}
                        </div>
                      `})}
                  </div>
                </div>
              </div>

              <div class="plate-caption-row">
                <span>Hold ${n} ${n===1?"pad":"pads"} together — ${g.map(r=>`${r.pitch}→${r.ref}`).join("  ")}</span>
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

            <!-- 12 Chord Qualities -->
            <div class="quality-grid">
              ${ht.map(r=>y`
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

            <!-- Tones Breakdown -->
            <div class="sidebar-title">TONES</div>
            <div class="tones-table">
              ${g.map(r=>y`
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
              ${k.map((r,f)=>{const u=this.keyRoot===f,b=r.replace("#","♯");return y`
                  <div
                    class="key-root-btn ${u?"active":""}"
                    tabindex="0"
                    role="button"
                    aria-label="key root ${r}${u?", selected":""}"
                    @click=${()=>{this.keyRoot=f,this.persistState()}}
                    @keydown=${P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),this.keyRoot=f,this.persistState())}}
                  >
                    ${b}
                  </div>
                `})}
            </div>

            <!-- 16 Scales Grid -->
            <div class="scales-grid">
              ${ut.map(r=>{const f=r.id===this.keyScale;return y`
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
                          @click=${()=>{this.setStepChord(r.root,r.q);const u=L({root:r.root,q:r.q},this.octave);H(u.map(b=>b.midi),.9)}}
                          @keydown=${u=>{if(u.key==="Enter"||u.key===" "){u.preventDefault(),this.setStepChord(r.root,r.q);const b=L({root:r.root,q:r.q},this.octave);H(b.map(P=>P.midi),.9)}}}
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
      </div>
    `}};$.styles=Se`
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
  `;x([S()],$.prototype,"steps",2);x([S()],$.prototype,"active",2);x([S()],$.prototype,"keyRoot",2);x([S()],$.prototype,"keyScale",2);x([S()],$.prototype,"octave",2);x([S()],$.prototype,"playing",2);x([S()],$.prototype,"copied",2);x([S()],$.prototype,"vw",2);$=x([Qe("circuit-chord-forge")],$);
