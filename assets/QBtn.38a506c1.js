import{c as l,$ as ee,a0 as ve,h as v,g as N,a1 as ge,y as z,z as me,A as be,t as te,E as he,p as ne,r as V,o as ye,a2 as pe,s as w,T as ke,v as xe}from"./index.21863176.js";const K={xs:18,sm:24,md:32,lg:38,xl:46},ae={size:String};function re(e,n=K){return l(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const I=e=>ee(ve(e)),$e=e=>ee(e);function qe(e,n){return e!==void 0&&e()||n}function Je(e,n){if(e!==void 0){const t=e();if(t!=null)return t.slice()}return n}function j(e,n){return e!==void 0?n.concat(e()):n}function Ze(e,n){return e===void 0?n:n!==void 0?n.concat(e()):e()}const F="0 0 24 24",H=e=>e,A=e=>`ionicons ${e}`,ie={"mdi-":e=>`mdi ${e}`,"icon-":H,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":A,"ion-ios":A,"ion-logo":A,"iconfont ":H,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},le={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ee=new RegExp("^("+Object.keys(ie).join("|")+")"),Se=new RegExp("^("+Object.keys(ue).join("|")+")"),U=new RegExp("^("+Object.keys(le).join("|")+")"),Re=/^[Mm]\s?[-+]?\.?\d/,we=/^img:/,Le=/^svguse:/,_e=/^ion-/,Be=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var D=I({name:"QIcon",props:{...ae,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:t}}=N(),u=re(e),g=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),s=l(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(t.iconMapFn!==null){const d=t.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(Re.test(a)===!0){const[d,y=F]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(p=>{const[r,k,h]=p.split("@@");return v("path",{style:k,d:r,transform:h})})}}if(we.test(a)===!0)return{img:!0,src:a.substring(4)};if(Le.test(a)===!0){const[d,y=F]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let b=" ";const q=a.match(Ee);if(q!==null)o=ie[q[1]](a);else if(Be.test(a)===!0)o=a;else if(_e.test(a)===!0)o=`ionicons ion-${t.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(U.test(a)===!0){o="notranslate material-symbols";const d=a.match(U);d!==null&&(a=a.substring(6),o+=le[d[1]]),b=a}else{o="notranslate material-icons";const d=a.match(Se);d!==null&&(a=a.substring(2),o+=ue[d[1]]),b=a}return{cls:o,content:b}});return()=>{const o={class:g.value,style:u.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?v(e.tag,o,qe(n.default)):s.value.img===!0?v("span",o,j(n.default,[v("img",{src:s.value.src})])):s.value.svg===!0?v("span",o,j(n.default,[v("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?v("span",o,j(n.default,[v("svg",{viewBox:s.value.viewBox},[v("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),v(e.tag,o,j(n.default,[s.value.content])))}}});const Ce={size:{type:[Number,String],default:"1em"},color:String};function Pe(e){return{cSize:l(()=>e.size in K?`${K[e.size]}px`:e.size),classes:l(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Te=I({name:"QSpinner",props:{...Ce,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:t}=Pe(e);return()=>v("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function je(e,n){const t=e.style;for(const u in n)t[u]=n[u]}function et(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=ge(e)===!0?e.value:e;if(n)return n.$el||n}function tt(e,n){if(e==null||e.contains(n)===!0)return!0;for(let t=e.nextElementSibling;t!==null;t=t.nextElementSibling)if(t.contains(n))return!0;return!1}function Me(e,n=250){let t=!1,u;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),u=e.apply(this,arguments)),u}}function W(e,n,t,u){t.modifiers.stop===!0&&te(e);const g=t.modifiers.color;let s=t.modifiers.center;s=s===!0||u===!0;const o=document.createElement("span"),a=document.createElement("span"),b=he(e),{left:q,top:d,width:y,height:p}=n.getBoundingClientRect(),r=Math.sqrt(y*y+p*p),k=r/2,h=`${(y-r)/2}px`,c=s?h:`${b.left-q-k}px`,f=`${(p-r)/2}px`,x=s?f:`${b.top-d-k}px`;a.className="q-ripple__inner",je(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${g?" text-"+g:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),n.appendChild(o);const R=()=>{o.remove(),clearTimeout(E)};t.abort.push(R);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${h},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{o.remove(),t.abort.splice(t.abort.indexOf(R),1)},275)},250)},50)}function X(e,{modifiers:n,value:t,arg:u}){const g=Object.assign({},e.cfg.ripple,n,t);e.modifiers={early:g.early===!0,stop:g.stop===!0,center:g.center===!0,color:g.color||u,keyCodes:[].concat(g.keyCodes||13)}}var Oe=$e({name:"ripple",beforeMount(e,n){const t={cfg:n.instance.$.appContext.config.globalProperties.$q.config,enabled:n.value!==!1,modifiers:{},abort:[],start(u){t.enabled===!0&&u.qSkipRipple!==!0&&u.type===(t.modifiers.early===!0?"pointerdown":"click")&&W(u,e,t,u.qKeyEvent===!0)},keystart:Me(u=>{t.enabled===!0&&u.qSkipRipple!==!0&&z(u,t.modifiers.keyCodes)===!0&&u.type===`key${t.modifiers.early===!0?"down":"up"}`&&W(u,e,t,!0)},300)};X(t,n),e.__qripple=t,me(t,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&X(t,n)}},beforeUnmount(e){const n=e.__qripple;n.abort.forEach(t=>{t()}),be(n,"main"),delete e._qripple}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Ae=Object.keys(oe),ze={align:{type:String,validator:e=>Ae.includes(e)}};function Ke(e){return l(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[n]}`})}function nt(e){if(Object(e.$parent)===e.$parent)return e.$parent;for(e=e.$.parent;Object(e)===e;){if(Object(e.proxy)===e.proxy)return e.proxy;e=e.parent}}function Ne(e){return e.appContext.config.globalProperties.$router!==void 0}function Y(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function G(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ie(e,n){for(const t in n){const u=n[t],g=e[t];if(typeof u=="string"){if(u!==g)return!1}else if(Array.isArray(g)===!1||g.length!==u.length||u.some((s,o)=>s!==g[o]))return!1}return!0}function J(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,u)=>t===n[u]):e.length===1&&e[0]===n}function Qe(e,n){return Array.isArray(e)===!0?J(e,n):Array.isArray(n)===!0?J(n,e):e===n}function Ve(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Qe(e[t],n[t])===!1)return!1;return!0}const Fe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function He(e){const n=N(),{props:t,proxy:u}=n,g=Ne(n),s=l(()=>t.disable!==!0&&t.href!==void 0),o=l(()=>g===!0&&t.disable!==!0&&s.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),a=l(()=>{if(o.value===!0)try{return u.$router.resolve(t.to)}catch{}return null}),b=l(()=>a.value!==null),q=l(()=>s.value===!0||b.value===!0),d=l(()=>t.type==="a"||q.value===!0?"a":t.tag||e||"div"),y=l(()=>s.value===!0?{href:t.href,target:t.target}:b.value===!0?{href:a.value.href,target:t.target}:{}),p=l(()=>{if(b.value===!1)return null;const{matched:f}=a.value,{length:x}=f,R=f[x-1];if(R===void 0)return-1;const E=u.$route.matched;if(E.length===0)return-1;const C=E.findIndex(G.bind(null,R));if(C>-1)return C;const M=Y(f[x-2]);return x>1&&Y(R)===M&&E[E.length-1].path!==M?E.findIndex(G.bind(null,f[x-2])):C}),r=l(()=>b.value===!0&&p.value>-1&&Ie(u.$route.params,a.value.params)),k=l(()=>r.value===!0&&p.value===u.$route.matched.length-1&&Ve(u.$route.params,a.value.params)),h=l(()=>b.value===!0?k.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function c(f){return t.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||t.target==="_blank"?!1:(ne(f),u.$router[t.replace===!0?"replace":"push"](t.to).catch(x=>x))}return{hasRouterLink:b,hasHrefLink:s,hasLink:q,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:k,linkClass:h,linkProps:y,navigateToRouterLink:c}}const Z={none:0,xs:4,sm:8,md:16,lg:24,xl:32},Ue={xs:8,sm:10,md:14,lg:20,xl:24},De=["button","submit","reset"],We=/[^\s]\/[^\s]/,Xe={...ae,...Fe,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ze.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ye(e){const n=re(e,Ue),t=Ke(e),{hasRouterLink:u,hasLink:g,linkTag:s,linkProps:o,navigateToRouterLink:a}=He("button"),b=l(()=>{const c=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(f=>f in Z?Z[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):c}),q=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=l(()=>e.disable!==!0&&e.loading!==!0),y=l(()=>d.value===!0?e.tabindex||0:-1),p=l(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=l(()=>{const c={tabindex:y.value};return g.value===!0?Object.assign(c,o.value):De.includes(e.type)===!0&&(c.type=e.type),s.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),u.value!==!0&&We.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),k=l(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${p.value} q-btn--${e.round===!0?"round":`rectangle${q.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),h=l(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:k,style:b,innerClasses:h,attributes:r,hasRouterLink:u,hasLink:g,linkTag:s,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:$}=xe;let L=null,_=null,B=null;var at=I({name:"QBtn",props:{...Xe,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:u}=N(),{classes:g,style:s,innerClasses:o,attributes:a,hasRouterLink:b,hasLink:q,linkTag:d,navigateToRouterLink:y,isActionable:p}=Ye(e),r=V(null),k=V(null);let h=null,c,f;const x=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),E=l(()=>({center:e.round})),C=l(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),M=l(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:Q,onKeydown:ce,onMousedown:fe,onTouchstart:de}:{onClick:w}),se=l(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+g.value,style:s.value,...a.value,...M.value}));function Q(i){if(r.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const O=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",O,$),r.value!==null&&r.value.removeEventListener("blur",O,$)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",O,$),r.value.addEventListener("blur",O,$)}}if(b.value===!0){const m=()=>{i.__qNavigate=!0,y(i)};t("click",i,m),i.defaultPrevented!==!0&&m()}else t("click",i)}}function ce(i){r.value!==null&&(t("keydown",i),z(i,[13,32])===!0&&_!==r.value&&(_!==null&&P(),i.defaultPrevented!==!0&&(r.value.focus(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",S,!0),r.value.addEventListener("blur",S,$)),w(i)))}function de(i){r.value!==null&&(t("touchstart",i),i.defaultPrevented!==!0&&(L!==r.value&&(L!==null&&P(),L=r.value,h=i.target,h.addEventListener("touchcancel",S,$),h.addEventListener("touchend",S,$)),c=!0,clearTimeout(f),f=setTimeout(()=>{c=!1},200)))}function fe(i){r.value!==null&&(i.qSkipRipple=c===!0,t("mousedown",i),i.defaultPrevented!==!0&&B!==r.value&&(B!==null&&P(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",S,$)))}function S(i){if(r.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===r.value)){if(i!==void 0&&i.type==="keyup"){if(_===r.value&&z(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&ne(m),i.cancelBubble===!0&&te(m),r.value.dispatchEvent(m),w(i),i.qKeyEvent=!0}t("keyup",i)}P()}}function P(i){const m=k.value;i!==!0&&(L===r.value||B===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),L===r.value&&(h!==null&&(h.removeEventListener("touchcancel",S,$),h.removeEventListener("touchend",S,$)),L=h=null),B===r.value&&(document.removeEventListener("mouseup",S,$),B=null),_===r.value&&(document.removeEventListener("keyup",S,!0),r.value!==null&&r.value.removeEventListener("blur",S,$),_=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(i){w(i),i.qSkipRipple=!0}return ye(()=>{P(!0)}),Object.assign(u,{click:Q}),()=>{let i=[];e.icon!==void 0&&i.push(v(D,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=j(n.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(D,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},i)),e.loading!==null&&m.push(v(ke,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[v(Te)])]:null)),pe(v(d.value,se.value,m),[[Oe,R.value,void 0,E.value]])}}});export{D as Q,re as a,je as b,I as c,Te as d,qe as e,Je as f,et as g,Ze as h,nt as i,tt as j,at as k,Fe as l,He as m,j as n,ae as u,Ne as v};
