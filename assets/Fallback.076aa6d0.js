import{c as m,a as i,h as l,e as c,k as v,K as k,aa as Q,aH as w,L as h,M as q,ab as d,r as S,N as _,O as f}from"./index.58104bf3.js";import{a as b,d as p}from"./QItem.960696a0.js";import{u as B,e as y,b as g,f as x}from"./pet.f770ee5a.js";import{u as C}from"./prefetch.609dee6a.js";var j=m({name:"QBanner",props:{...b,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=v(),a=p(e,n),r=i(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(a.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),o=i(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const s=[l("div",{class:"q-banner__avatar col-auto row items-center self-start"},c(t.avatar)),l("div",{class:"q-banner__content col text-body2"},c(t.default))],u=c(t.action);return u!==void 0&&s.push(l("div",{class:o.value},u)),l("div",{class:r.value+(e.inlineActions===!1&&u!==void 0?" q-banner--top-padding":""),role:"alert"},s)}}});const F=k({__name:"Content",async setup(e){let t,n;const a=B(),{pets:r}=Q(a),{fetchPets:o}=a;[t,n]=w(()=>C(()=>o(2e3))),await t,n();const{columns:s}=y();return(u,M)=>(h(),q(g,{rows:d(r),columns:d(s)},null,8,["rows","columns"]))}}),$=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],A=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var T=m({name:"QSkeleton",props:{...b,tag:{type:String,default:"div"},type:{type:String,validator:e=>$.includes(e),default:"rect"},animation:{type:String,validator:e=>A.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:t}){const n=v(),a=p(e,n.proxy.$q),r=i(()=>{const s=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:s[0],height:s[1]}}),o=i(()=>`q-skeleton q-skeleton--${a.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>l(e.tag,{class:o.value,style:r.value},c(t.default))}}),z=m({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:t}){const n=v(),a=i(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return l("td",{class:a.value},c(t.default));const r=n.vnode.key,o=(e.props.colsMap!==void 0?e.props.colsMap[r]:null)||e.props.col;if(o===void 0)return;const{row:s}=e.props;return l("td",{class:a.value+o.__tdClass(s),style:o.__tdStyle(s)},c(t.default))}}});function D(e=10){return S([...new Array(e)].map(()=>({id:x()})))}const I=k({__name:"Fallback",setup(e){const t=D(10),{columns:n}=y();return(a,r)=>(h(),q(g,{rows:d(t),columns:d(n)},{"body-cell":_(()=>[f(z,null,{default:_(()=>[f(T,{type:"text"})]),_:1})]),_:1},8,["rows","columns"]))}});export{j as Q,F as _,I as a};