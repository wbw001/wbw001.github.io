import{r as a,A as g,J as f,j as e,M as h}from"./index-COmTOoUp.js";import{B as y}from"./Back-SGcUxDUx.js";import{I as _}from"./index.es-NJc5SzWY.js";import{u as b}from"./useQuery-Cq0Ynuqi.js";import{T as N,a as u}from"./index-CPD7xCCP.js";const v=()=>{const[s,t]=a.useState(1),[i,c]=a.useState(!1),[r,o]=a.useState([]),{data:l,isPending:d,refetch:n,isRefetching:m}=b({queryKey:["get_my_style_imgs",s],queryFn:()=>g.SwaggerApi.get_my_style_imgs({page:s,page_size:20})});console.log(l==null?void 0:l.data,"=data?.get_style_imgs"),a.useEffect(()=>{l!=null&&l.data&&(l.data.page===1?o(l.data.style_images||[]):o(j=>(j||[]).concat(l.data.style_images||[])),l.data.style_images.length<l.data.page_size?c(!0):c(!1))},[l==null?void 0:l.data]);const p=a.useCallback(()=>{t(x=>x+1)},[]);return{data:r,isPending:d,refetch:n,isRefetching:m,setPage:t,loadMore:p,load_end:i}},w=({data:s,onClose:t,onPublish:i})=>{const c=a.useCallback(async()=>{if(s!=null&&s.is_public){f("The images has been made public");return}if(s!=null&&s.uuid){const r=await g.SwaggerApi.post_img_public({uuid:(s==null?void 0:s.uuid)||""});console.log(r,"===post_img_public===="),g.isSuccess(r),i==null||i()}},[s==null?void 0:s.is_public,s==null?void 0:s.uuid,i]);return e.jsxs("dialog",{id:h.style_images_detail_modal,className:"modal ",onClose:t,children:[e.jsxs("div",{className:"modal-box w-[88vw]",style:{background:"#000000"},children:[e.jsx("form",{method:"dialog",children:e.jsx("button",{className:"btn btn-sm modal-close btn-circle btn-ghost absolute right-2 top-2",children:e.jsx("img",{src:"/images/close.png",alt:""})})}),e.jsx("div",{className:" flex justify-center items-center w-full  pt-7",children:e.jsx("img",{className:"w-10/12 max-h-[180px]",src:s==null?void 0:s.generated_image_path,alt:""})}),e.jsx("div",{className:" flex justify-center items-center mt-4",children:e.jsx("p",{className:"text-[10px] leading-[14px] w-10/12",children:"Your public avatar may serve as a reference for the same style. The more likes you get, the more rewards you will receive"})}),e.jsx("button",{onClick:c,className:"btn btn-primary w-full mt-[18px] mb-4",children:s!=null&&s.is_public?e.jsx("span",{className:" text-[18px]",children:"Public and share"}):e.jsxs("div",{className:" flex justify-center items-center h-full",children:[e.jsx("span",{className:" text-[18px]",children:"Public and share"}),e.jsx("img",{className:" w-[38px]",src:"/images/point.png",alt:""}),e.jsx("span",{className:"text-[18px]",children:"+ 20"})]})})]}),e.jsx("form",{method:"dialog",className:"modal-backdrop",children:e.jsx("button",{children:"close"})})]})},S=({data:s,...t})=>e.jsxs("div",{...t,children:[e.jsxs("div",{className:" relative",children:[e.jsx("img",{className:" w-full",src:s.generated_image_path,alt:""}),s.is_public&&e.jsx("img",{className:" absolute bottom-1 right-1",src:"/images/public-tag.png",alt:""})]}),e.jsxs("div",{className:" flex justify-start items-center",children:[e.jsx("img",{src:"/images/like.png",alt:""}),e.jsx("span",{className:" ml-1 mt-1",children:s.likes})]})]}),k=({scrollableTarget:s})=>{const{data:t,refetch:i,isRefetching:c,loadMore:r,load_end:o}=v(),[l,d]=a.useState();return e.jsxs("div",{className:"cursor-pointer select-none",children:[c&&e.jsx("div",{className:" flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})}),e.jsx(_,{dataLength:t.length,next:r,hasMore:!o,loader:e.jsx("div",{className:" flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})}),endMessage:e.jsx("p",{style:{textAlign:"center"},children:e.jsx("b",{children:t.length===0?"No Data!":"Load ended!"})}),refreshFunction:i,scrollableTarget:s,pullDownToRefresh:!0,pullDownToRefreshThreshold:50,pullDownToRefreshContent:e.jsx("h3",{style:{textAlign:"center"},children:"↓ Pull down to refresh"}),releaseToRefreshContent:e.jsx("h3",{style:{textAlign:"center"},children:"↑ Release to refresh"}),children:e.jsx("div",{className:"grid gap-2 grid-cols-2",children:t.map(n=>e.jsx(S,{data:n,onClick:()=>{var m;d(n),console.log(n),(m=document.getElementById(h.style_images_detail_modal))==null||m.showModal()}},n.uuid))})}),e.jsx(w,{data:l,onPublish:()=>i()})]})};function R(){const[s,t]=a.useState(0);return e.jsxs("div",{className:" h-full overflow-auto px-4",id:"scrollable_target_create_11",children:[e.jsxs("div",{className:" sticky z-10 top-0 bg-[#1c1919] pb-4",children:[e.jsx(y,{title:"My Create"}),e.jsx("div",{className:" mt-4",children:e.jsxs(N,{total:2,active:s,children:[e.jsx(u,{onClick:()=>{t(0)},children:"My avatar"}),e.jsx(u,{onClick:()=>{t(1)},children:"My style"})]})})]}),e.jsx("div",{className:" mt-4",children:e.jsx(k,{scrollableTarget:"scrollable_target_create_11"})})]})}export{R as default};
