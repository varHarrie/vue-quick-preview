import{d as n,r as e,c as t,o as s,a,n as o,b as i,T as p,e as c,f as r,w as l,g as u,h as d,i as m,p as g,j as h,F as v,k,l as f,m as y,q as w}from"./app.888f744c.js";const b=(n,e,t)=>{const s=Math.min(e,t),a=Math.max(e,t);return Math.min(Math.max(n,s),a)},x=n=>{requestAnimationFrame((()=>{requestAnimationFrame(n)}))},E=n=>{const{naturalWidth:e,naturalHeight:t}=n,s=n.getBoundingClientRect(),a=b(t,0,.9*window.innerHeight),o=e*(a/t);return{scale:s.height/a,offset:{x:0,y:0},position:{x:s.left+(s.width-o)/2,y:s.top+(s.height-a)/2},translate:{x:0,y:0},size:{width:o,height:a},naturalSize:{width:e,height:t}}},L=n=>{const e="touches"in n?n.touches[0]:n;return{x:e.clientX,y:e.clientY}};var _=n({emits:["hidden"],setup(n,i){const p=e({el:void 0,visible:!1,animating:!0,bodyOverflow:"",dimension:void 0,dragging:!1,dragPoint:{x:0,y:0}}),c=t((()=>{var n;return(null==(n=p.el)?void 0:n.src)||""})),r=t((()=>{if(!p.dimension)return;const{scale:n,size:{width:e,height:t},position:{x:s,y:a},translate:{x:o,y:i},offset:{x:c,y:r}}=p.dimension;return{position:"absolute",userSelect:"none",transformOrigin:"center",willChange:"transform, top, left",width:`${e}px`,height:`${t}px`,top:`${a}px`,left:`${s}px`,transform:`translate3d(${o+c}px, ${i+r}px, 0) scale(${n})`,transition:p.animating?"transform 0.3s":void 0}})),l=n=>{var e;p.animating=!1,p.dragging=!1,"touches"in n||n.preventDefault(),null==(e=window.getSelection())||e.removeAllRanges(),p.dragPoint=L(n),document.addEventListener("mousemove",d),document.addEventListener("mouseup",u,!0),document.addEventListener("touchmove",d),document.addEventListener("touchend",u)},u=n=>{p.dragging&&(n.stopImmediatePropagation(),n.stopPropagation()),(()=>{if(!p.dimension)return;const{offset:n,translate:e,position:t,size:s}=p.dimension,a=b(e.x+n.x,-t.x,window.innerWidth-s.width-t.x),o=b(e.y+n.y,-t.y,window.innerHeight-s.height-t.y);p.dimension.translate={x:a,y:o},p.dimension.offset={x:0,y:0}})(),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",u,!0),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",u),o((()=>{p.animating=!0}))},d=n=>{p.dragging=!0;const e=L(n);var t;t={x:e.x-p.dragPoint.x,y:e.y-p.dragPoint.y},p.dimension&&(p.dimension.offset=t)};return s((()=>{document.addEventListener("mousedown",l),document.addEventListener("touchstart",l)})),a((()=>{document.removeEventListener("mousedown",l),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",u),document.removeEventListener("touchstart",l),document.removeEventListener("touchmove",d),document.removeEventListener("touchend",u)})),{state:p,src:c,viewerStyle:{position:"fixed",zIndex:99,top:0,left:0,height:"100%",width:"100%",cursor:"move",transition:"background-color 300ms"},imageStyle:r,enter:n=>{x((()=>{n.style.backgroundColor="rgba(0, 0, 0, 0.6)"}))},leave:n=>{n.style.backgroundColor="rgba(0, 0, 0, 0)"},show:n=>{n&&"IMG"===n.tagName&&n.src&&(p.bodyOverflow=document.body.style.overflow,document.body.style.overflow="hidden",p.el=n,p.dimension=E(n),p.visible=!0,p.animating=!0,n.style.opacity="0",x((()=>{if(!p.dimension)return;const{innerWidth:n,innerHeight:e}=window,{size:t,position:s}=p.dimension;p.dimension.scale=1,p.dimension.translate={x:(n-t.width)/2-s.x,y:(e-t.height)/2-s.y}})))},shown:()=>{p.animating=!1},hide:()=>{p.el&&(p.animating=!0,p.dimension=E(p.el),o((()=>{p.visible=!1})))},hidden:()=>{p.el&&(p.animating=!1,p.el.style.opacity="",document.body.style.overflow=p.bodyOverflow,i.emit("hidden"))}}}});function C(n){const e=function(n,e){const t=c(n,void 0),s=document.createElement("div");return document.body.appendChild(s),{root:s,instance:t.mount(s),unmount(){var n;t.unmount(),null==(n=s.parentElement)||n.removeChild(s)}}}({methods:{show(){this.$refs.preview.show(n)},hide(){this.$refs.preview.hide()}},render:()=>m(_,{ref:"preview",onHidden:()=>e.unmount()})});return e.instance.show(),e.instance}_.render=function(n,e,t,s,a,o){return r(),i(p,{duration:300,onEnter:n.enter,onAfterEnter:n.shown,onLeave:n.leave,onAfterLeave:n.hidden},{default:l((()=>[n.state.visible?(r(),i("div",{key:0,class:"vue-quick-preview",style:n.viewerStyle,onMouseup:e[1]||(e[1]=(...e)=>n.hide&&n.hide(...e))},[u("img",{class:"vue-quick-preview__image",style:n.imageStyle,src:n.src,alt:"Image"},null,12,["src"])],36)):d("",!0)])),_:1},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])},C.install=n=>{n.config.globalProperties.$preview=C},C.QuickPreview=_;var I=n({data:()=>({images:["https://placeimg.com/400/824/any?v=1","https://placeimg.com/824/400/any?v=2","https://placeimg.com/400/400/any?v=3","https://placeimg.com/400/400/any?v=4","https://placeimg.com/824/400/any?v=5"]}),methods:{onImageClick(n){const e=C(n.target);console.log(e)}}});const q=f();g("data-v-3043a02a");const P={class:"gallery"};h();const A=q(((n,e,t,s,a,o)=>(r(),i("ul",P,[(r(!0),i(v,null,k(n.images,((t,s)=>(r(),i("li",{key:s,class:"item"},[u("img",{src:t,onClick:e[1]||(e[1]=(...e)=>n.onImageClick&&n.onImageClick(...e))},null,8,["src"])])))),128))]))));I.render=A,I.__scopeId="data-v-3043a02a";const S=u("h3",{id:"demo"},[u("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),y(" Demo")],-1),$=w('<h3 id="install"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h3><div class="language-bash"><pre><code><span class="token function">npm</span> i --save vue-quick-preview\n</code></pre></div><h3 id="usage"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><div class="language-vue"><div class="highlight-lines"><br><br><br><br><br><div class="highlighted"> </div><br><br><br><br><div class="highlighted"> </div><br><br><br><br><br><br></div><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://placeimg.com/400/400/any<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>onImageClick<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">import</span> preview <span class="token keyword">from</span> <span class="token string">&#39;vue-quick-preview&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">onImageClick</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">preview</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',4),T='{"title":"Home","description":"","frontmatter":{"home":true,"footer":"MIT Licensed | Copyright © 2021-present varHarrie"},"headers":[{"level":3,"title":"Demo","slug":"demo"},{"level":3,"title":"Install","slug":"install"},{"level":3,"title":"Usage","slug":"usage"}],"relativePath":"index.md","lastUpdated":1621338707094}',H={};const M=Object.assign(H,{expose:[],setup:function(n){return(n,e)=>(r(),i("div",null,[S,u(I),$]))}});export default M;export{T as __pageData};