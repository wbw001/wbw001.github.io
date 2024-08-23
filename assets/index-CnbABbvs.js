import{r as l,A as u,j as e,M as y,p as S,b as _,S as v,i as k,a as N,J as C,d as A}from"./index-CyAfKOV5.js";import{B as M}from"./Back-BzFA9F0s.js";import{S as D}from"./StyleCard-DRFlrg_w.js";import{I as E}from"./index.es-53x7qVWq.js";import{u as b}from"./useQuery-C4qGFjhU.js";const R=t=>{const[o,s]=l.useState(1),[x,i]=l.useState(!1),[n,a]=l.useState([]),[r,d]=l.useState(),{data:c,isPending:h,refetch:g,isRefetching:m}=b({queryKey:["get_style_imgs",o,t],queryFn:()=>u.SwaggerApi.get_style_imgs(t||"",{page:o,page_size:20}),enabled:!!t});l.useEffect(()=>{if(c!=null&&c.data){const p=c.data;d(p.style),p.page===1?a(c.data.style_images||[]):a(w=>(w||[]).concat(c.data.style_images||[])),c.data.style_images.length<c.data.page_size?i(!0):i(!1)}},[c==null?void 0:c.data]),l.useEffect(()=>{t||(a([]),s(1),d(void 0),i(!1))},[t]);const j=l.useCallback(()=>{s(p=>p+1)},[]);return{data:n,detail:r,isPending:h,refetch:g,isRefetching:m,setPage:s,loadMore:j,load_end:x}},I=t=>{const{data:o,isPending:s,refetch:x,isRefetching:i}=b({queryKey:["get_style_detail",t],queryFn:()=>u.SwaggerApi.get_style_detail({uuid:t||""}),enabled:!!t});return{detail:o,isPending:s,refetch:x,isRefetching:i}},P=({styles:t,onClose:o})=>{var g;const{data:s,refetch:x,isRefetching:i,loadMore:n,load_end:a}=R(t==null?void 0:t.uuid),[r,d]=l.useState(0),c=l.useCallback(async(m,j)=>{if(m){const p=await u.SwaggerApi.post_styles_like({uuid:m});console.log(p,"==res"),u.isSuccess(p)&&d((j||0)+1)}},[]),{detail:h}=I(t==null?void 0:t.uuid);return l.useEffect(()=>{d(0)},[t==null?void 0:t.uuid]),e.jsxs("dialog",{id:y.style_detail_modal,className:"modal",onClose:o,children:[e.jsxs("div",{className:"modal-box",children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm modal-close btn-circle btn-ghost absolute right-2 top-2",children:e.jsx("img",{src:"/images/close.png",alt:""})})}),e.jsxs("div",{className:" flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-[24px]",children:t==null?void 0:t.name}),e.jsxs("div",{className:" flex justify-start items-center mt-1",children:[e.jsx("div",{className:"avatar placeholder",children:e.jsx("div",{className:"bg-neutral text-neutral-content w-8 rounded-full",children:e.jsx("span",{className:"text-xs",children:((g=h==null?void 0:h.data.name)==null?void 0:g.slice(0,2))||""})})}),e.jsxs("span",{className:" text-[10px]  ml-2",children:["Created by ",h==null?void 0:h.data.name]})]})]}),e.jsxs("div",{className:"tips1",children:[e.jsxs("div",{className:" flex items-center justify-end",children:[e.jsx("button",{onClick:()=>{c(t==null?void 0:t.uuid,t==null?void 0:t.likes)},className:"btn btn-text",children:e.jsx("img",{src:"/images/like.png",alt:""})}),e.jsx("span",{className:" ml-2 text-[12px]",children:r||(t==null?void 0:t.likes)})]}),e.jsxs("div",{className:" flex items-center justify-end mt-2",children:[e.jsx("img",{className:" w-[22px]",src:"/images/point.png",alt:""}),e.jsxs("span",{children:["+",t==null?void 0:t.loyalty_points]})]})]})]}),e.jsx("p",{className:"pt-[7px] pb-1 text-[14px]",children:"View the output generated by other DAO members for reference"}),e.jsxs("div",{className:"  h-[252px] overflow-auto",children:[i&&e.jsx("div",{className:" flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})}),e.jsx(E,{dataLength:s.length,next:n,hasMore:!a,loader:e.jsx("div",{className:" flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})}),endMessage:e.jsx("p",{style:{textAlign:"center"},children:e.jsx("b",{children:s.length===0?"No Data!":"Load ended!"})}),refreshFunction:x,pullDownToRefresh:!0,pullDownToRefreshThreshold:50,pullDownToRefreshContent:e.jsx("h3",{style:{textAlign:"center"},children:"↓ Pull down to refresh"}),releaseToRefreshContent:e.jsx("h3",{style:{textAlign:"center"},children:"↑ Release to refresh"}),children:e.jsx("div",{className:"grid gap-2 grid-cols-2",children:s.map(m=>e.jsx("div",{className:"",children:e.jsx(D,{data:m})},m.uuid))})})]}),e.jsx("div",{className:"modal-footer",children:e.jsx("button",{onClick:()=>{var m;return(m=document.getElementById(y.style_detail_modal))==null?void 0:m.showModal()},className:" btn btn-primary",children:e.jsx("span",{className:" text-[16px]",children:"Use this style"})})})]}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{children:"close"})})]})},T=P,f=S({my_styles:[],styles:[]}),F=()=>_(f),q=()=>{const[t,o]=l.useState(1),{data:s,isPending:x,refetch:i}=b({queryKey:["get_styles",t],queryFn:()=>u.SwaggerApi.get_styles({page:t,page_size:20})});return console.log(s,"get_styles"),l.useEffect(()=>{if(s!=null&&s.data){const n=s.data;n.page===1?f.styles=s.data.styles||[]:f.styles=(f.styles||[]).concat(n.styles)}},[s==null?void 0:s.data]),{data:s,isPending:x,refetch:i,setPage:o}},L=A.div`
  width: 100vw;
  /* height: 50px; */
  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper {
    transition-timing-function: linear;
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
`;function V(){const[t,o]=l.useState();q();const{styles:s}=F(),x=l.useMemo(()=>{const i=Math.floor(s.length/2);return s.reduce((n,a,r)=>{const d=r%i;return n[d]=n[d].concat(a),n},[[],[],[],[]])},[s]);return e.jsxs("div",{className:"h-full relative",children:[e.jsx(M,{title:"created by contributer"}),e.jsx("div",{className:" text-poppins-bold text-[49px] ml-[30px]",children:"The styles"}),e.jsx("div",{children:x.map((i,n)=>e.jsx(L,{className:" mt-5",children:e.jsxs(v,{slidesPerView:2,spaceBetween:30,pagination:{clickable:!0},loop:!0,speed:2e3-n*200,autoplay:{delay:0},modules:[k],className:"mySwiper",onAfterInit:a=>{setTimeout(()=>{var r;(r=a==null?void 0:a.autoplay)==null||r.start()},800+n*400)},children:[e.jsx(N,{className:" w-4"}),i.map((a,r)=>e.jsx(N,{style:{paddingTop:r%2===0?"0":"8px"},children:e.jsx("button",{className:"box-shadow1 btn btn-outline h-[56x] min-w-[180px]",style:{background:(t==null?void 0:t.uuid)===a.uuid?"#948C8C":void 0},onClick:()=>{var d;o(a),(d=document.getElementById(y.style_detail_modal))==null||d.showModal()},children:e.jsx("span",{className:" text-sm",children:a.name})})},a.uuid))]})},n))}),e.jsx("div",{className:" flex justify-center absolute  bottom-16 w-full",children:e.jsx("button",{style:{display:t?"none":"block"},onClick:()=>{C("Please choose one style")},className:" btn btn-primary",children:e.jsx("span",{className:" text-[16px]",children:"Create my own style prompt"})})}),e.jsx(T,{styles:t,onClose:()=>{o(void 0)}})]})}export{V as default};
