import{c as C,a as c,h as L,e as M,k as B,g as j,_ as A,w as I,$ as F,o as G,j as R,a0 as J,a1 as $,t as b,l as m,C as K,a2 as Z,a3 as ee,a4 as te,a5 as le,a6 as oe,a7 as ne,r as Q,a8 as ie,p as re}from"./index.eccdee0a.js";var we=C({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=c(()=>parseInt(e.lines,10)),o=c(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),n=c(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>L("div",{style:n.value,class:o.value},M(t.default))}});const N={dark:{type:Boolean,default:null}};function O(e,t){return c(()=>e.dark===null?t.dark.isActive:e.dark)}var pe=C({name:"QList",props:{...N,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=B(),o=O(e,l.proxy.$q),n=c(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>L(e.tag,{class:n.value},M(t.default))}});function be(e,t,l){let o;function n(){o!==void 0&&(A.remove(o),o=void 0)}return j(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){o={condition:()=>l.value===!0,handler:t},A.add(o)}}}const he={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},ye=["beforeShow","show","beforeHide","hide"];function ge({showing:e,canShow:t,hideOnRouteChange:l,handleShow:o,handleHide:n,processOnMount:f}){const a=B(),{props:s,emit:d,proxy:k}=a;let u;function p(i){e.value===!0?y(i):h(i)}function h(i){if(s.disable===!0||i!==void 0&&i.qAnchorHandled===!0||t!==void 0&&t(i)!==!0)return;const r=s["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!0),u=i,R(()=>{u===i&&(u=void 0)})),(s.modelValue===null||r===!1)&&v(i)}function v(i){e.value!==!0&&(e.value=!0,d("beforeShow",i),o!==void 0?o(i):d("show",i))}function y(i){if(s.disable===!0)return;const r=s["onUpdate:modelValue"]!==void 0;r===!0&&(d("update:modelValue",!1),u=i,R(()=>{u===i&&(u=void 0)})),(s.modelValue===null||r===!1)&&T(i)}function T(i){e.value!==!1&&(e.value=!1,d("beforeHide",i),n!==void 0?n(i):d("hide",i))}function E(i){s.disable===!0&&i===!0?s["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):i===!0!==e.value&&(i===!0?v:T)(u)}I(()=>s.modelValue,E),l!==void 0&&F(a)===!0&&I(()=>k.$route.fullPath,()=>{l.value===!0&&e.value===!0&&y()}),f===!0&&G(()=>{E(s.modelValue)});const S={show:h,hide:y,toggle:p};return Object.assign(k,S),S}const ae=[null,document,document.body,document.scrollingElement,document.documentElement];function qe(e,t){let l=J(t);if(l===void 0){if(e==null)return window;l=e.closest(".scroll,.scroll-y,.overflow-auto")}return ae.includes(l)?window:l}function se(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function ue(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let x;function Le(){if(x!==void 0)return x;const e=document.createElement("p"),t=document.createElement("div");$(e,{width:"100%",height:"200px"}),$(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const l=e.offsetWidth;t.style.overflow="scroll";let o=e.offsetWidth;return l===o&&(o=t.clientWidth),t.remove(),x=l-o,x}function ce(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let g=0,V,H,q,P=!1,z,D,U,w=null;function de(e){fe(e)&&K(e)}function fe(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Z(e),l=e.shiftKey&&!e.deltaX,o=!l&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=l||o?e.deltaY:e.deltaX;for(let f=0;f<t.length;f++){const a=t[f];if(ce(a,o))return o?n<0&&a.scrollTop===0?!0:n>0&&a.scrollTop+a.clientHeight===a.scrollHeight:n<0&&a.scrollLeft===0?!0:n>0&&a.scrollLeft+a.clientWidth===a.scrollWidth}return!0}function X(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function _(e){P!==!0&&(P=!0,requestAnimationFrame(()=>{P=!1;const{height:t}=e.target,{clientHeight:l,scrollTop:o}=document.scrollingElement;(q===void 0||t!==window.innerHeight)&&(q=l-t,document.scrollingElement.scrollTop=o),o>q&&(document.scrollingElement.scrollTop-=Math.ceil((o-q)/8))}))}function Y(e){const t=document.body,l=window.visualViewport!==void 0;if(e==="add"){const{overflowY:o,overflowX:n}=window.getComputedStyle(t);V=ue(window),H=se(window),z=t.style.left,D=t.style.top,U=window.location.href,t.style.left=`-${V}px`,t.style.top=`-${H}px`,n!=="hidden"&&(n==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),o!=="hidden"&&(o==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,b.is.ios===!0&&(l===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",_,m.passiveCapture),window.visualViewport.addEventListener("scroll",_,m.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",X,m.passiveCapture))}b.is.desktop===!0&&b.is.mac===!0&&window[`${e}EventListener`]("wheel",de,m.notPassive),e==="remove"&&(b.is.ios===!0&&(l===!0?(window.visualViewport.removeEventListener("resize",_,m.passiveCapture),window.visualViewport.removeEventListener("scroll",_,m.passiveCapture)):window.removeEventListener("scroll",X,m.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=z,t.style.top=D,window.location.href===U&&window.scrollTo(V,H),q=void 0)}function ve(e){let t="add";if(e===!0){if(g++,w!==null){clearTimeout(w),w=null;return}if(g>1)return}else{if(g===0||(g--,g>0))return;if(t="remove",b.is.ios===!0&&b.is.nativeMobile===!0){w!==null&&clearTimeout(w),w=setTimeout(()=>{Y(t),w=null},100);return}}Y(t)}function ke(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,ve(t))}}}function Te(){let e=null;const t=B();function l(){e!==null&&(clearTimeout(e),e=null)}return ee(l),j(l),{removeTimeout:l,registerTimeout(o,n){l(),te(t)===!1&&(e=setTimeout(o,n))}}}function Ee(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),le.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function Se(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function xe(e,t,l){if(l<=t)return t;const o=l-t+1;let n=t+(e-t)%o;return n<t&&(n=o+n),n===0?0:n}var _e=C({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=c(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>L("div",{class:l.value},M(t.default))}}),Ce=C({name:"QItem",props:{...N,...oe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:o}}=B(),n=O(e,o),{hasLink:f,linkAttrs:a,linkClass:s,linkTag:d,navigateOnClick:k}=ne(),u=Q(null),p=Q(null),h=c(()=>e.clickable===!0||f.value===!0||e.tag==="label"),v=c(()=>e.disable!==!0&&h.value===!0),y=c(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?s.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=c(()=>{if(e.insetLevel===void 0)return null;const r=o.lang.rtl===!0?"Right":"Left";return{["padding"+r]:16+e.insetLevel*56+"px"}});function E(r){v.value===!0&&(p.value!==null&&(r.qKeyEvent!==!0&&document.activeElement===u.value?p.value.focus():document.activeElement===p.value&&u.value.focus()),k(r))}function S(r){if(v.value===!0&&ie(r,13)===!0){K(r),r.qKeyEvent=!0;const W=new MouseEvent("click",r);W.qKeyEvent=!0,u.value.dispatchEvent(W)}l("keyup",r)}function i(){const r=re(t.default,[]);return v.value===!0&&r.unshift(L("div",{class:"q-focus-helper",tabindex:-1,ref:p})),r}return()=>{const r={ref:u,class:y.value,style:T.value,role:"listitem",onClick:E,onKeyup:S};return v.value===!0?(r.tabindex=e.tabindex||"0",Object.assign(r,a.value)):h.value===!0&&(r["aria-disabled"]="true"),L(d.value,r,i())}}});export{Ce as Q,N as a,ye as b,Ee as c,O as d,Te as e,ge as f,be as g,ke as h,Se as i,qe as j,se as k,ue as l,Le as m,_e as n,we as o,pe as p,xe as q,he as u};
