import{r as h,g as m,d as C,u as k,j as e,S,a as p,b as T,c as E,e as I,f as F,U as O}from"./index-CQybuzrS.js";import{u as g,a as P,b as B,S as D,s as M}from"./actions-B7hcpcoI.js";let f=0;const j=30;let x=0;const R=()=>{const s=h.useCallback(l=>{l.touches[0].pageY-f>=j?m.show_nav=!1:l.touches[0].pageY-f<=-j&&(m.show_nav=!0)},[]),t=h.useCallback(l=>{f=l.touches[0].pageY},[]),r=h.useCallback(l=>{const n=l.target.scrollTop;x===0?x=n:x-n>=j?(m.show_nav=!1,x=0):x-n<=-j&&(m.show_nav=!0,x=0)},[]);return{onTouchMove:s,onTouchStart:t,onScroll:r}},_=C.div`
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
`,Y=C.div`
  overflow: hidden;
  height: ${({style_selected:s})=>s===0?"0px":"74px"};
  transition: all 0.3s;
  margin: 6px 0;
`,z=()=>{var c,o,d;const s=k(),t=g();P();const{styles:r}=g(),{data:l,isPending:n}=B((c=t.select_style)==null?void 0:c.uuid);return e.jsxs("div",{children:[e.jsx("div",{className:" flex justify-center",children:(o=t.select_style)!=null&&o.uuid?e.jsx("img",{src:"/images/font-view-creates-in-style.png",alt:""}):e.jsx("img",{src:"/images/font-select-style.png",alt:""})}),e.jsx(Y,{style_selected:(d=t.select_style)!=null&&d.uuid?1:0,children:e.jsx(_,{children:n?e.jsx("div",{className:" flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})}):e.jsx(S,{slidesPerView:3,spaceBetween:30,pagination:{clickable:!0},className:"mySwiper",children:l.map(a=>e.jsx(p,{children:e.jsx("div",{className:"h-[71px] w-[111px]",children:e.jsx(D,{data:a})})},a.uuid))})})}),e.jsx("div",{children:e.jsx(_,{children:e.jsxs(S,{slidesPerView:3,spaceBetween:30,pagination:{clickable:!0},className:"mySwiper",children:[e.jsx(p,{className:" w-4"}),r.map(a=>{var u;return e.jsx(p,{children:e.jsx("button",{className:"btn btn-outline p-1 h-[34px]",style:{background:((u=t.select_style)==null?void 0:u.uuid)===a.uuid?"#948C8C":void 0},onClick:()=>{M(a)},children:e.jsx("span",{className:" text-sm",children:a.name})})},a.uuid)}),e.jsx(p,{children:e.jsxs("button",{onClick:()=>{s("/style?init=1")},className:"btn btn-outline p-1 h-[34px]",children:[e.jsxs("div",{className:" flex flex-col items-center justify-center leading-[8px] -mt-2",children:[e.jsx("span",{children:"."}),e.jsx("span",{children:"."}),e.jsx("span",{children:"."})]}),e.jsx("span",{className:" text-sm",children:"more"})]})})]})})})]})},U=z;function V(){const s=k();return e.jsxs("div",{children:[e.jsx("button",{className:"btn btn-outline p-1 h-[34px] w-[117px] mr-[11px]",onClick:()=>{s("/my_create")},children:e.jsx("span",{className:"text-sm text-pingfang font-normal",children:"My Creation"})}),e.jsx("button",{className:"btn btn-outline p-1 h-[34px] w-[117px]",onClick:()=>{s("/style")},children:e.jsx("span",{className:" text-sm text-pingfang font-normal",children:"Select a style"})})]})}const $={root:null,rootMargin:"0px",threshold:0},A=({ended:s,onLoad:t,loading:r,root:l})=>{const n=h.useRef(null);return h.useEffect(()=>{let c;return n.current&&!s&&!r&&(c=new IntersectionObserver(o=>{o.forEach(d=>{const{isIntersecting:a}=d;a&&(t==null||t())})},{...$,root:l}),c.observe(n.current)),()=>{c&&c.disconnect()}},[s,r,t,l]),e.jsx("div",{ref:n,className:" mt-4 flex justify-center items-center",children:s?e.jsx("span",{className:"",children:"暂无更多"}):e.jsx("span",{className:"loading loading-dots loading-sm"})})};function q(){var y;const{onTouchMove:s,onTouchStart:t,onScroll:r}=R(),l=h.useMemo(()=>!1,[]),n=T(),{loadMore:c,load_end:o,isPending:d}=E(),a=g(),{generateImageSelectStyleHandle:u}=I(),{ref:v}=F();return e.jsxs("div",{className:"relative h-full ",children:[e.jsxs("div",{onTouchMove:s,onTouchStart:t,onScrollCapture:r,className:" relative h-full overflow-auto",ref:v,children:[e.jsx(A,{loading:d,onLoad:()=>{c()},root:v.current,ended:o}),e.jsxs("div",{className:" px-8 pt-5",children:[n.chat_list.map(i=>{var b,N,w;return e.jsx("div",{id:i.id,children:e.jsxs("div",{className:i.isMine?" mt-2  flex items-end  flex-col":" mt-2",children:[e.jsx("div",{children:i.isMine?e.jsx("span",{children:"Me"}):e.jsx("img",{src:"/images/bot.png",className:" w-[76px]",alt:""})}),e.jsxs("div",{className:i.isMine?" mt-1 max-w-60 flex items-end  flex-col":" mt-1  max-w-60",children:[!!i.img&&e.jsx("div",{className:"mt-1",children:e.jsx(O,{src:(b=i.img)==null?void 0:b.url,upload_id:(N=i.img)==null?void 0:N.upload_id})}),!!i.text&&e.jsx("div",{className:" mt-1  max-w-60",children:(w=i.text)==null?void 0:w.content})]})]})},i.id)}),e.jsx("div",{className:" h-[200px]"})]})]}),e.jsx("div",{className:"  absolute bottom-0 bg-[#1c1919] pb-3 w-full",children:l?e.jsx("div",{className:" ml-6",children:e.jsx(V,{})}):e.jsx(U,{})}),((y=a.select_style)==null?void 0:y.uuid)&&e.jsx("div",{className:" fixed bottom-0 left-0 right-0 h-[80px] z-[100] bg-[#1c1919] px-5 pt-4",children:e.jsx("button",{onClick:async()=>{await u(a.select_style),M(null)},className:"btn btn-primary w-full h-[49px]",children:e.jsx("div",{children:e.jsxs("div",{className:" flex justify-center items-center h-full",children:[e.jsx("span",{className:" text-[22px]",children:"Generate"}),e.jsx("img",{className:" w-[38px] ml-3",src:"/images/point.png",alt:""}),e.jsx("span",{className:"text-[18px]",children:"+ 20"})]})})})})]})}export{q as default};
