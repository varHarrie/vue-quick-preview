import{d as e,u as a,s as t,c as s,t as l,f as i,b as o,g as n,h as r,v as c,_ as v,p as u,j as d,F as f,k as m,l as p,x as h,y as k}from"./app.888f744c.js";u("data-v-1d68b262");const x={key:0,class:"home-hero"},y={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},b={key:2,class:"description"};d();var $=e({expose:[],setup(e){const u=a(),d=t(),f=s((()=>d.value.heroImage||m.value||h.value||$.value)),m=s((()=>null!==d.value.heroText)),p=s((()=>d.value.heroText||u.value.title)),h=s((()=>null!==d.value.tagline)),k=s((()=>d.value.tagline||u.value.description)),$=s((()=>d.value.actionLink&&d.value.actionText)),_=s((()=>d.value.altActionLink&&d.value.altActionText));return(e,a)=>l(f)?(i(),o("header",x,[e.$frontmatter.heroImage?(i(),o("figure",y,[n("img",{class:"image",src:e.$withBase(e.$frontmatter.heroImage),alt:e.$frontmatter.heroAlt},null,8,["src","alt"])])):r("v-if",!0),l(m)?(i(),o("h1",g,c(l(p)),1)):r("v-if",!0),l(h)?(i(),o("p",b,c(l(k)),1)):r("v-if",!0),l($)?(i(),o(v,{key:3,item:{link:l(d).actionLink,text:l(d).actionText},class:"action"},null,8,["item"])):r("v-if",!0),l(_)?(i(),o(v,{key:4,item:{link:l(d).altActionLink,text:l(d).altActionText},class:"action alt"},null,8,["item"])):r("v-if",!0)])):r("v-if",!0)}});$.__scopeId="data-v-1d68b262",u("data-v-b6f3c2e6");const _={key:0,class:"home-features"},I={class:"wrapper"},T={class:"container"},A={class:"features"},L={key:0,class:"title"},j={key:1,class:"details"};d();var w=e({expose:[],setup(e){const a=t(),v=s((()=>a.value.features&&a.value.features.length>0)),u=s((()=>a.value.features?a.value.features:[]));return(e,a)=>l(v)?(i(),o("div",_,[n("div",I,[n("div",T,[n("div",A,[(i(!0),o(f,null,m(l(u),((e,a)=>(i(),o("section",{key:a,class:"feature"},[e.title?(i(),o("h2",L,c(e.title),1)):r("v-if",!0),e.details?(i(),o("p",j,c(e.details),1)):r("v-if",!0)])))),128))])])])])):r("v-if",!0)}});w.__scopeId="data-v-b6f3c2e6";const B={},C=p();u("data-v-93d3e3da");const F={key:0,class:"footer"},q={class:"container"},z={class:"text"};d();const D=C(((e,a)=>e.$frontmatter.footer?(i(),o("footer",F,[n("div",q,[n("p",z,c(e.$frontmatter.footer),1)])])):r("v-if",!0)));B.render=D,B.__scopeId="data-v-93d3e3da",u("data-v-6e1bdf43");const E={class:"home","aria-labelledby":"main-title"},G={class:"home-content"};d();var H=e({expose:[],setup:e=>(e,a)=>{const t=h("Content");return i(),o("main",E,[n($),k(e.$slots,"hero",{},void 0,!0),n(w),n("div",G,[n(t)]),k(e.$slots,"features",{},void 0,!0),n(B),k(e.$slots,"footer",{},void 0,!0)])}});H.__scopeId="data-v-6e1bdf43";export default H;
