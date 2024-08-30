import{r as h,g as m,d as k,u as M,j as e,S as _,a as p,b as F,c as P,e as D,f as O,U as B}from"./index-s5uGnzEF.js";import{u as v,a as R,b as Y,S as z,s as I}from"./actions-Uc3iP_oc.js";import{u as A}from"./hoooks-BHkWAGaa.js";let f=0;const j=30;let x=0;const U=()=>{const s=h.useCallback(l=>{l.touches[0].pageY-f>=j?m.show_nav=!1:l.touches[0].pageY-f<=-j&&(m.show_nav=!0)},[]),t=h.useCallback(l=>{f=l.touches[0].pageY},[]),r=h.useCallback(l=>{const n=l.target.scrollTop;x===0?x=n:x-n>=j?(m.show_nav=!1,x=0):x-n<=-j&&(m.show_nav=!0,x=0)},[]);return{onTouchMove:s,onTouchStart:t,onScroll:r}},C=k.div`
  width: 100vw;
  /* height: 50px; */
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,V=k.div`
  overflow: hidden;
  height: ${({style_selected:s})=>s===0?"0px":"74px"};
  transition: all 0.3s;
  margin: 6px 0;
`,$=()=>{var c,d,o;const s=M(),t=v();R();const{styles:r}=v(),{data:l,isPending:n}=Y((c=t.select_style)==null?void 0:c.uuid);return e.jsxs("div",{children:[e.jsx("div",{className:" flex justify-center",children:(d=t.select_style)!=null&&d.uuid?e.jsx("img",{src:"/images/font-view-creates-in-style.png",alt:""}):e.jsx("img",{src:"/images/font-select-style.png",alt:""})}),e.jsx(V,{style_selected:(o=t.select_style)!=null&&o.uuid?1:0,children:e.jsx(C,{children:n?e.jsx("div",{className:" flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})}):e.jsx(_,{slidesPerView:3,spaceBetween:30,pagination:{clickable:!0},className:"mySwiper",children:l.map(i=>e.jsx(p,{children:e.jsx("div",{className:"h-[71px] w-[111px]",children:e.jsx(z,{data:i})})},i.uuid))})})}),e.jsx("div",{children:e.jsx(C,{children:e.jsxs(_,{slidesPerView:3,spaceBetween:30,pagination:{clickable:!0},className:"mySwiper",children:[e.jsx(p,{className:" w-4"}),r.map(i=>{var u;return e.jsx(p,{children:e.jsx("button",{className:"btn btn-outline p-1 h-[34px]",style:{background:((u=t.select_style)==null?void 0:u.uuid)===i.uuid?"#948C8C":void 0},onClick:()=>{I(i)},children:e.jsx("span",{className:" text-sm",children:i.name})})},i.uuid)}),e.jsx(p,{children:e.jsxs("button",{onClick:()=>{s("/style?init=1")},className:"btn btn-outline p-1 h-[34px]",children:[e.jsxs("div",{className:" flex flex-col items-center justify-center leading-[8px] -mt-2",children:[e.jsx("span",{children:"."}),e.jsx("span",{children:"."}),e.jsx("span",{children:"."})]}),e.jsx("span",{className:" text-sm",children:"more"})]})})]})})})]})},G=$;function H(){const s=M();return e.jsxs("div",{children:[e.jsx("button",{className:"btn btn-outline p-1 h-[34px] w-[117px] mr-[11px]",onClick:()=>{s("/my_create")},children:e.jsx("span",{className:"text-sm text-pingfang font-normal",children:"My Creation"})}),e.jsx("button",{className:"btn btn-outline p-1 h-[34px] w-[117px]",onClick:()=>{s("/style")},children:e.jsx("span",{className:" text-sm text-pingfang font-normal",children:"Select a style"})})]})}const q={root:null,rootMargin:"0px",threshold:0},J=({ended:s,onLoad:t,loading:r,root:l})=>{const n=h.useRef(null);return h.useEffect(()=>{let c;return n.current&&!s&&!r&&(c=new IntersectionObserver(d=>{d.forEach(o=>{const{isIntersecting:i}=o;i&&(t==null||t())})},{...q,root:l}),c.observe(n.current)),()=>{c&&c.disconnect()}},[s,r,t,l]),e.jsx("div",{ref:n,className:" mt-4 flex justify-center items-center",children:s?e.jsx("span",{className:"",children:"暂无更多"}):e.jsx("span",{className:"loading loading-dots loading-sm"})})};function X(){var b;const{onTouchMove:s,onTouchStart:t,onScroll:r}=U(),l=F(),{loadMore:n,load_end:c,isPending:d}=P(),o=v(),{generateImageSelectStyleHandle:i}=D(),{ref:u}=O(),{data:y,isPending:w}=A(),[T,E]=h.useMemo(()=>{const a=y.length>0;return[!w&&a,a]},[y.length,w]);return e.jsxs("div",{className:"relative h-full ",children:[e.jsxs("div",{onTouchMove:s,onTouchStart:t,onScrollCapture:r,className:" relative h-full overflow-auto",ref:u,children:[e.jsx(J,{loading:d,onLoad:()=>{n()},root:u.current,ended:c}),e.jsxs("div",{className:" px-8 pt-5",children:[l.chat_list.map(a=>{var g,N,S;return e.jsx("div",{id:a.id,children:e.jsxs("div",{className:a.isMine?" mt-2  flex items-end  flex-col":" mt-2",children:[e.jsx("div",{children:a.isMine?e.jsx("span",{children:"Me"}):e.jsx("img",{src:"/images/bot.png",className:" w-[76px]",alt:""})}),e.jsxs("div",{className:a.isMine?" mt-1 max-w-60 flex items-end  flex-col":" mt-1  max-w-60",children:[!!a.img&&e.jsx("div",{className:"mt-1",children:e.jsx(B,{src:(g=a.img)==null?void 0:g.url,upload_id:(N=a.img)==null?void 0:N.upload_id})}),!!a.text&&e.jsx("div",{className:" mt-1  max-w-60",children:(S=a.text)==null?void 0:S.content})]})]})},a.id)}),e.jsx("div",{className:" h-[200px]"})]})]}),T&&e.jsx("div",{className:"  absolute bottom-0 bg-[#1c1919] pb-3 w-full",children:E?e.jsx("div",{className:" ml-6",children:e.jsx(H,{})}):e.jsx(G,{})}),((b=o.select_style)==null?void 0:b.uuid)&&e.jsx("div",{className:" fixed bottom-0 left-0 right-0 h-[80px] z-[100] bg-[#1c1919] px-5 pt-4",children:e.jsx("button",{onClick:async()=>{await i(o.select_style),I(null)},className:"btn btn-primary w-full h-[49px]",children:e.jsx("div",{children:e.jsxs("div",{className:" flex justify-center items-center h-full",children:[e.jsx("span",{className:" text-[22px]",children:"Generate"}),e.jsx("img",{className:" w-[38px] ml-3",src:"/images/point.png",alt:""}),e.jsx("span",{className:"text-[18px]",children:"+ 20"})]})})})})]})}export{X as default};
