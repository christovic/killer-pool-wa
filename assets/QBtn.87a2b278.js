import{c as l,S as ee,U as ve,h as v,g as N,V as ge,y as z,W as me,X as he,t as te,Y as be,p as ne,r as V,o as ye,Z as ke,s as w,T as pe,v as xe}from"./index.f77b0fa0.js";const K={xs:18,sm:24,md:32,lg:38,xl:46},ae={size:String};function re(e,t=K){return l(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const I=e=>ee(ve(e)),qe=e=>ee(e);function Se(e,t){return e!==void 0&&e()||t}function Ge(e,t){if(e!==void 0){const n=e();if(n!=null)return n.slice()}return t}function M(e,t){return e!==void 0?t.concat(e()):t}function Je(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}const U="0 0 24 24",F=e=>e,O=e=>`ionicons ${e}`,ie={"mdi-":e=>`mdi ${e}`,"icon-":F,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":O,"ion-ios":O,"ion-logo":O,"iconfont ":F,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ue={o_:"-outlined",r_:"-round",s_:"-sharp"},le={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},Ee=new RegExp("^("+Object.keys(ie).join("|")+")"),$e=new RegExp("^("+Object.keys(ue).join("|")+")"),W=new RegExp("^("+Object.keys(le).join("|")+")"),Re=/^[Mm]\s?[-+]?\.?\d/,we=/^img:/,Le=/^svguse:/,_e=/^ion-/,Be=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var D=I({name:"QIcon",props:{...ae,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=N(),u=re(e),g=l(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),s=l(()=>{let o,a=e.name;if(a==="none"||!a)return{none:!0};if(n.iconMapFn!==null){const d=n.iconMapFn(a);if(d!==void 0)if(d.icon!==void 0){if(a=d.icon,a==="none"||!a)return{none:!0}}else return{cls:d.cls,content:d.content!==void 0?d.content:" "}}if(Re.test(a)===!0){const[d,y=U]=a.split("|");return{svg:!0,viewBox:y,nodes:d.split("&&").map(k=>{const[r,p,b]=k.split("@@");return v("path",{style:p,d:r,transform:b})})}}if(we.test(a)===!0)return{img:!0,src:a.substring(4)};if(Le.test(a)===!0){const[d,y=U]=a.split("|");return{svguse:!0,src:d.substring(7),viewBox:y}}let h=" ";const S=a.match(Ee);if(S!==null)o=ie[S[1]](a);else if(Be.test(a)===!0)o=a;else if(_e.test(a)===!0)o=`ionicons ion-${n.platform.is.ios===!0?"ios":"md"}${a.substring(3)}`;else if(W.test(a)===!0){o="notranslate material-symbols";const d=a.match(W);d!==null&&(a=a.substring(6),o+=le[d[1]]),h=a}else{o="notranslate material-icons";const d=a.match($e);d!==null&&(a=a.substring(2),o+=ue[d[1]]),h=a}return{cls:o,content:h}});return()=>{const o={class:g.value,style:u.value,"aria-hidden":"true",role:"presentation"};return s.value.none===!0?v(e.tag,o,Se(t.default)):s.value.img===!0?v("span",o,M(t.default,[v("img",{src:s.value.src})])):s.value.svg===!0?v("span",o,M(t.default,[v("svg",{viewBox:s.value.viewBox||"0 0 24 24"},s.value.nodes)])):s.value.svguse===!0?v("span",o,M(t.default,[v("svg",{viewBox:s.value.viewBox},[v("use",{"xlink:href":s.value.src})])])):(s.value.cls!==void 0&&(o.class+=" "+s.value.cls),v(e.tag,o,M(t.default,[s.value.content])))}}});const Ce={size:{type:[Number,String],default:"1em"},color:String};function Pe(e){return{cSize:l(()=>e.size in K?`${K[e.size]}px`:e.size),classes:l(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Te=I({name:"QSpinner",props:{...Ce,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=Pe(e);return()=>v("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Me(e,t){const n=e.style;for(const u in t)n[u]=t[u]}function et(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=ge(e)===!0?e.value:e;if(t)return t.$el||t}function je(e,t=250){let n=!1,u;return function(){return n===!1&&(n=!0,setTimeout(()=>{n=!1},t),u=e.apply(this,arguments)),u}}function H(e,t,n,u){n.modifiers.stop===!0&&te(e);const g=n.modifiers.color;let s=n.modifiers.center;s=s===!0||u===!0;const o=document.createElement("span"),a=document.createElement("span"),h=be(e),{left:S,top:d,width:y,height:k}=t.getBoundingClientRect(),r=Math.sqrt(y*y+k*k),p=r/2,b=`${(y-r)/2}px`,c=s?b:`${h.left-S-p}px`,f=`${(k-r)/2}px`,x=s?f:`${h.top-d-p}px`;a.className="q-ripple__inner",Me(a,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${c},${x},0) scale3d(.2,.2,1)`,opacity:0}),o.className=`q-ripple${g?" text-"+g:""}`,o.setAttribute("dir","ltr"),o.appendChild(a),t.appendChild(o);const R=()=>{o.remove(),clearTimeout(E)};n.abort.push(R);let E=setTimeout(()=>{a.classList.add("q-ripple__inner--enter"),a.style.transform=`translate3d(${b},${f},0) scale3d(1,1,1)`,a.style.opacity=.2,E=setTimeout(()=>{a.classList.remove("q-ripple__inner--enter"),a.classList.add("q-ripple__inner--leave"),a.style.opacity=0,E=setTimeout(()=>{o.remove(),n.abort.splice(n.abort.indexOf(R),1)},275)},250)},50)}function X(e,{modifiers:t,value:n,arg:u}){const g=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:g.early===!0,stop:g.stop===!0,center:g.center===!0,color:g.color||u,keyCodes:[].concat(g.keyCodes||13)}}var Ae=qe({name:"ripple",beforeMount(e,t){const n={cfg:t.instance.$.appContext.config.globalProperties.$q.config,enabled:t.value!==!1,modifiers:{},abort:[],start(u){n.enabled===!0&&u.qSkipRipple!==!0&&u.type===(n.modifiers.early===!0?"pointerdown":"click")&&H(u,e,n,u.qKeyEvent===!0)},keystart:je(u=>{n.enabled===!0&&u.qSkipRipple!==!0&&z(u,n.modifiers.keyCodes)===!0&&u.type===`key${n.modifiers.early===!0?"down":"up"}`&&H(u,e,n,!0)},300)};X(n,t),e.__qripple=n,me(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n.enabled=t.value!==!1,n.enabled===!0&&Object(t.value)===t.value&&X(n,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach(n=>{n()}),he(t,"main"),delete e._qripple}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Oe=Object.keys(oe),ze={align:{type:String,validator:e=>Oe.includes(e)}};function Ke(e){return l(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function Ne(e){return e.appContext.config.globalProperties.$router!==void 0}function Y(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function Z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ie(e,t){for(const n in t){const u=t[n],g=e[n];if(typeof u=="string"){if(u!==g)return!1}else if(Array.isArray(g)===!1||g.length!==u.length||u.some((s,o)=>s!==g[o]))return!1}return!0}function G(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((n,u)=>n===t[u]):e.length===1&&e[0]===t}function Qe(e,t){return Array.isArray(e)===!0?G(e,t):Array.isArray(t)===!0?G(t,e):e===t}function Ve(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(Qe(e[n],t[n])===!1)return!1;return!0}const Ue={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Fe(e){const t=N(),{props:n,proxy:u}=t,g=Ne(t),s=l(()=>n.disable!==!0&&n.href!==void 0),o=l(()=>g===!0&&n.disable!==!0&&s.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),a=l(()=>{if(o.value===!0)try{return u.$router.resolve(n.to)}catch{}return null}),h=l(()=>a.value!==null),S=l(()=>s.value===!0||h.value===!0),d=l(()=>n.type==="a"||S.value===!0?"a":n.tag||e||"div"),y=l(()=>s.value===!0?{href:n.href,target:n.target}:h.value===!0?{href:a.value.href,target:n.target}:{}),k=l(()=>{if(h.value===!1)return null;const{matched:f}=a.value,{length:x}=f,R=f[x-1];if(R===void 0)return-1;const E=u.$route.matched;if(E.length===0)return-1;const C=E.findIndex(Z.bind(null,R));if(C>-1)return C;const j=Y(f[x-2]);return x>1&&Y(R)===j&&E[E.length-1].path!==j?E.findIndex(Z.bind(null,f[x-2])):C}),r=l(()=>h.value===!0&&k.value>-1&&Ie(u.$route.params,a.value.params)),p=l(()=>r.value===!0&&k.value===u.$route.matched.length-1&&Ve(u.$route.params,a.value.params)),b=l(()=>h.value===!0?p.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":r.value===!0?` ${n.activeClass}`:"":"");function c(f){return n.disable===!0||f.metaKey||f.altKey||f.ctrlKey||f.shiftKey||f.__qNavigate!==!0&&f.defaultPrevented===!0||f.button!==void 0&&f.button!==0||n.target==="_blank"?!1:(ne(f),u.$router[n.replace===!0?"replace":"push"](n.to).catch(x=>x))}return{hasRouterLink:h,hasHrefLink:s,hasLink:S,linkTag:d,linkRoute:a,linkIsActive:r,linkIsExactActive:p,linkClass:b,linkProps:y,navigateToRouterLink:c}}const J={none:0,xs:4,sm:8,md:16,lg:24,xl:32},We={xs:8,sm:10,md:14,lg:20,xl:24},De=["button","submit","reset"],He=/[^\s]\/[^\s]/,Xe={...ae,...Ue,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...ze.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Ye(e){const t=re(e,We),n=Ke(e),{hasRouterLink:u,hasLink:g,linkTag:s,linkProps:o,navigateToRouterLink:a}=Fe("button"),h=l(()=>{const c=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},c,{padding:e.padding.split(/\s+/).map(f=>f in J?J[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):c}),S=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),d=l(()=>e.disable!==!0&&e.loading!==!0),y=l(()=>d.value===!0?e.tabindex||0:-1),k=l(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=l(()=>{const c={tabindex:y.value};return g.value===!0?Object.assign(c,o.value):De.includes(e.type)===!0&&(c.type=e.type),s.value==="a"?(e.disable===!0?c["aria-disabled"]="true":c.href===void 0&&(c.role="button"),u.value!==!0&&He.test(e.type)===!0&&(c.type=e.type)):e.disable===!0&&(c.disabled="",c["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(c,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),c}),p=l(()=>{let c;return e.color!==void 0?e.flat===!0||e.outline===!0?c=`text-${e.textColor||e.color}`:c=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(c=`text-${e.textColor}`),`q-btn--${k.value} q-btn--${e.round===!0?"round":`rectangle${S.value===!0?" q-btn--rounded":""}`}`+(c!==void 0?" "+c:"")+(d.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")}),b=l(()=>n.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:p,style:h,innerClasses:b,attributes:r,hasRouterLink:u,hasLink:g,linkTag:s,navigateToRouterLink:a,isActionable:d}}const{passiveCapture:q}=xe;let L=null,_=null,B=null;var tt=I({name:"QBtn",props:{...Xe,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:u}=N(),{classes:g,style:s,innerClasses:o,attributes:a,hasRouterLink:h,hasLink:S,linkTag:d,navigateToRouterLink:y,isActionable:k}=Ye(e),r=V(null),p=V(null);let b=null,c,f;const x=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),R=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:S.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),E=l(()=>({center:e.round})),C=l(()=>{const i=Math.max(0,Math.min(100,e.percentage));return i>0?{transition:"transform 0.6s",transform:`translateX(${i-100}%)`}:{}}),j=l(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:k.value===!0?{onClick:Q,onKeydown:ce,onMousedown:fe,onTouchstart:de}:{onClick:w}),se=l(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+g.value,style:s.value,...a.value,...j.value}));function Q(i){if(r.value!==null){if(i!==void 0){if(i.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&r.value.contains(m)===!1&&m.contains(r.value)===!1){r.value.focus();const A=()=>{document.removeEventListener("keydown",w,!0),document.removeEventListener("keyup",A,q),r.value!==null&&r.value.removeEventListener("blur",A,q)};document.addEventListener("keydown",w,!0),document.addEventListener("keyup",A,q),r.value.addEventListener("blur",A,q)}}if(h.value===!0){const m=()=>{i.__qNavigate=!0,y(i)};n("click",i,m),i.defaultPrevented!==!0&&m()}else n("click",i)}}function ce(i){r.value!==null&&(n("keydown",i),z(i,[13,32])===!0&&_!==r.value&&(_!==null&&P(),i.defaultPrevented!==!0&&(r.value.focus(),_=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",$,!0),r.value.addEventListener("blur",$,q)),w(i)))}function de(i){r.value!==null&&(n("touchstart",i),i.defaultPrevented!==!0&&(L!==r.value&&(L!==null&&P(),L=r.value,b=i.target,b.addEventListener("touchcancel",$,q),b.addEventListener("touchend",$,q)),c=!0,clearTimeout(f),f=setTimeout(()=>{c=!1},200)))}function fe(i){r.value!==null&&(i.qSkipRipple=c===!0,n("mousedown",i),i.defaultPrevented!==!0&&B!==r.value&&(B!==null&&P(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",$,q)))}function $(i){if(r.value!==null&&!(i!==void 0&&i.type==="blur"&&document.activeElement===r.value)){if(i!==void 0&&i.type==="keyup"){if(_===r.value&&z(i,[13,32])===!0){const m=new MouseEvent("click",i);m.qKeyEvent=!0,i.defaultPrevented===!0&&ne(m),i.cancelBubble===!0&&te(m),r.value.dispatchEvent(m),w(i),i.qKeyEvent=!0}n("keyup",i)}P()}}function P(i){const m=p.value;i!==!0&&(L===r.value||B===r.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),L===r.value&&(b!==null&&(b.removeEventListener("touchcancel",$,q),b.removeEventListener("touchend",$,q)),L=b=null),B===r.value&&(document.removeEventListener("mouseup",$,q),B=null),_===r.value&&(document.removeEventListener("keyup",$,!0),r.value!==null&&r.value.removeEventListener("blur",$,q),_=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(i){w(i),i.qSkipRipple=!0}return ye(()=>{P(!0)}),Object.assign(u,{click:Q}),()=>{let i=[];e.icon!==void 0&&i.push(v(D,{name:e.icon,left:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"})),x.value===!0&&i.push(v("span",{class:"block"},[e.label])),i=M(t.default,i),e.iconRight!==void 0&&e.round===!1&&i.push(v(D,{name:e.iconRight,right:e.stack===!1&&x.value===!0,role:"img","aria-hidden":"true"}));const m=[v("span",{class:"q-focus-helper",ref:p})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+o.value},i)),e.loading!==null&&m.push(v(pe,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(Te)])]:null)),ke(v(d.value,se.value,m),[[Ae,R.value,void 0,E.value]])}}});export{D as Q,re as a,Me as b,I as c,Te as d,Se as e,Ge as f,et as g,Je as h,Ue as i,Fe as j,M as k,tt as l,ae as u};
