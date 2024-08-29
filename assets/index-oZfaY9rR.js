import{r as c,g as h,d as y,u as b,j as e,S,a as x,p as N,b as _,c as C,e as M,f as k}from"./index-CzutaARU.js";import{u as E,a as I,b as T,S as A}from"./hoooks-C1WS9nrg.js";import{u as D}from"./useQuery-CHmvCLgv.js";let g=0;const p=30;let o=0;const F=()=>{const s=c.useCallback(i=>{i.touches[0].pageY-g>=p?h.show_nav=!1:i.touches[0].pageY-g<=-p&&(h.show_nav=!0)},[]),t=c.useCallback(i=>{g=i.touches[0].pageY},[]),r=c.useCallback(i=>{const a=i.target.scrollTop;o===0?o=a:o-a>=p?(h.show_nav=!1,o=0):o-a<=-p&&(h.show_nav=!0,o=0)},[]);return{onTouchMove:s,onTouchStart:t,onScroll:r}},v=y.div`
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
`,P=y.div`
  overflow: hidden;
  height: ${({style_selected:s})=>s===0?"0px":"74px"};
  transition: all 0.3s;
  margin: 6px 0;
`,G=()=>{const s=b(),[t,r]=c.useState();E();const{styles:i}=I(),{data:a,isPending:d}=T(t==null?void 0:t.uuid);return e.jsxs("div",{children:[e.jsx("div",{className:" flex justify-center",children:t!=null&&t.uuid?e.jsx("img",{src:"/images/font-view-creates-in-style.png",alt:""}):e.jsx("img",{src:"/images/font-select-style.png",alt:""})}),e.jsx(P,{style_selected:t!=null&&t.uuid?1:0,children:e.jsx(v,{children:d?e.jsx("div",{className:" flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})}):e.jsx(S,{slidesPerView:3,spaceBetween:30,pagination:{clickable:!0},className:"mySwiper",children:a.map(l=>e.jsx(x,{children:e.jsx("div",{className:"h-[71px] w-[111px]",children:e.jsx(A,{data:l})})},l.uuid))})})}),e.jsx("div",{children:e.jsx(v,{children:e.jsxs(S,{slidesPerView:3,spaceBetween:30,pagination:{clickable:!0},className:"mySwiper",children:[e.jsx(x,{className:" w-4"}),i.map(l=>e.jsx(x,{children:e.jsx("button",{className:"btn btn-outline p-1 h-[34px]",style:{background:(t==null?void 0:t.uuid)===l.uuid?"#948C8C":void 0},onClick:()=>{r(l)},children:e.jsx("span",{className:" text-sm",children:l.name})})},l.uuid)),e.jsx(x,{children:e.jsxs("button",{onClick:()=>{s("/style?init=1")},className:"btn btn-outline p-1 h-[34px]",children:[e.jsxs("div",{className:" flex flex-col items-center justify-center leading-[8px] -mt-2",children:[e.jsx("span",{children:"."}),e.jsx("span",{children:"."}),e.jsx("span",{children:"."})]}),e.jsx("span",{className:" text-sm",children:"more"})]})})]})})})]})},L=G;function z(){const s=b();return e.jsxs("div",{children:[e.jsx("button",{className:"btn btn-outline p-1 h-[34px] w-[117px] mr-[11px]",onClick:()=>{s("/my_create")},children:e.jsx("span",{className:"text-sm text-pingfang font-normal",children:"My Creation"})}),e.jsx("button",{className:"btn btn-outline p-1 h-[34px] w-[117px]",onClick:()=>{s("/style")},children:e.jsx("span",{className:" text-sm text-pingfang font-normal",children:"Select a style"})})]})}var u=(s=>(s[s.IMAGE=0]="IMAGE",s[s.TEXT=1]="TEXT",s))(u||{});const m=N({chat_list:[]}),B=s=>new Promise(t=>{setTimeout(()=>{t(s)},s)}),X=()=>_(m),Y=[{type:u.IMAGE,isMine:!0,time:Date.now(),id:String(Math.random()),img:{url:"/images/pic-msg.png"}},{type:u.TEXT,isMine:!1,time:Date.now(),id:String(Math.random()),text:{content:"It looks great. I have chosen for you the most popular style currently used in iDAO"}},{type:u.IMAGE,isMine:!1,time:Date.now(),id:String(Math.random()),img:{url:"It looks great. I have chosen for you"}}],q=()=>{const[s,t]=c.useState(1),[r,i]=c.useState(!1),{data:a,isPending:d,refetch:l}=D({queryKey:["get_chat_list",s],queryFn:async()=>(await B(2e3),{data:{data:Y,page:2,page_size:3}})});c.useEffect(()=>{if(a!=null&&a.data){const n=a.data;n.page===1?m.chat_list=n.data:m.chat_list=[...n.data,...m.chat_list],n.data.length<a.data.page_size?i(!0):i(!1)}},[a]);const f=c.useCallback(()=>{t(n=>n+1)},[]);return{data:a,isPending:d,refetch:l,loadMore:f,load_end:r}},O=()=>e.jsx("div",{className:" flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})});function Q(){const s=C(),{setInitFile:t}=M(),r=c.useCallback(async()=>{s.init_file&&k.init_file&&t("")},[s.init_file,t]);c.useEffect(()=>{r()},[r]);const{onTouchMove:i,onTouchStart:a,onScroll:d}=F(),l=c.useMemo(()=>!1,[]),f=X();return q(),e.jsxs("div",{className:"relative h-full ",children:[e.jsxs("div",{onTouchMove:i,onTouchStart:a,onScrollCapture:d,className:" relative h-full overflow-auto",children:[e.jsx(O,{}),e.jsxs("div",{className:" px-8 pt-5",children:[f.chat_list.map(n=>{var j,w;return e.jsx("div",{children:e.jsxs("div",{className:n.isMine?" mt-2  flex items-end  flex-col":" mt-2",children:[e.jsx("div",{children:n.isMine?e.jsx("span",{children:"Me"}):e.jsx("img",{src:"/images/bot.png",className:" w-[76px]",alt:""})}),e.jsx("div",{className:n.isMine?" mt-2  w-10/12  flex items-end  flex-col":" mt-2  w-10/12",children:n.type===u.IMAGE?e.jsx("img",{className:" w-max-[126] ",src:(j=n.img)==null?void 0:j.url,alt:""}):e.jsx("div",{className:" w-10/12",children:(w=n.text)==null?void 0:w.content})})]})},n.id)}),e.jsx("div",{className:" h-[200px]"})]})]}),e.jsx("div",{className:"  absolute bottom-0 bg-[#1c1919] pb-3 w-full",children:l?e.jsx("div",{className:" ml-6",children:e.jsx(z,{})}):e.jsx(L,{})})]})}export{Q as default};
