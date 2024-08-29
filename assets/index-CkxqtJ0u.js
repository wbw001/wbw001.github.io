import{r as d,j as e,T as r,l as B,m as I,A as S,J as y,n as R}from"./index-BQlHkYyk.js";import{u as C,a as A,b as E,c as z}from"./hooks-DowgQij9.js";import{T as M,a as w}from"./index-0dDuTQhL.js";const k=30,P=({tasks:t,parent_width:n,cycle_rewards:s})=>{const i=d.useRef(null),a=d.useMemo(()=>(t==null?void 0:t.progress)||0,[t==null?void 0:t.progress]),l=d.useMemo(()=>{var h,j,N;if(a===0||!t)return{progress:a,left:0,right:0,start:0,end:0,is_complete:!1};if(a>=((s==null?void 0:s[s.length-1].condition)||0))return{left:0,right:0,start:0,end:0,is_complete:!0};let x=0;for(let u=0;u<(s==null?void 0:s.length);u++){const b=s==null?void 0:s[u];if(b.condition>a){x=-1;break}if(u===s.length-1){x=u;break}if(b.condition<=a&&((h=s[u+1])==null?void 0:h.condition)>a){x=u;break}}const p=x===-1?0:((j=s==null?void 0:s[x])==null?void 0:j.condition)||0,c=(a||0)-p;return{left:x+1,right:c,start:p,end:((N=s==null?void 0:s[x+1])==null?void 0:N.condition)||0,is_complete:!1}},[a,t,s]),[o,m]=d.useState(0);d.useEffect(()=>{var x;if(i.current){const p=((x=i.current.parentElement)==null?void 0:x.scrollWidth)||0;i.current.style.width=`${p}px`,m(p)}},[]);const f=d.useMemo(()=>(n-k*2)/((s==null?void 0:s.length)||-1),[n,s==null?void 0:s.length]),v=d.useMemo(()=>{if(l.is_complete)return 100;if(l.progress===0)return 0;const x=k,p=30,c=Math.max(30,f),h=l.left===0?0:x+(l.left-1)*c+(l.left-.5)*p,j=l.right===0?0:l.right/(l.end-l.start)*c+(l.left===0?0:p/2);return(h+j)/o*100},[f,l,o]);return e.jsx("progress",{className:"progress w-full mt-[9px] bg-[#474747] absolute left-0 top-[2px]",value:v,max:"100",ref:i})},_=({tasks:t,renderLabel:n,cycle_rewards:s})=>{const i=d.useRef(null),[a,l]=d.useState(0);return d.useEffect(()=>{var o;if(i.current){const m=((o=i.current.parentElement)==null?void 0:o.clientWidth)||0;l(m)}},[]),e.jsxs("div",{className:" absolute top-0 w-full flex justify-between items-center tips1 overflow-x-auto",ref:i,children:[e.jsx(P,{tasks:t,parent_width:a,cycle_rewards:s}),s==null?void 0:s.map((o,m)=>e.jsxs("div",{className:"flex flex-col items-center justify-start ml-[30px]  sticky left-0 right-0 z-10",style:{marginRight:m===((s==null?void 0:s.length)||1)-1?"32px":""},children:[e.jsxs("div",{className:"bg-base-300 rounded-full  text-[10px] w-[30px] h-[30px] leading-[30px] text-center relative z-10",children:["+",o.reward]}),e.jsx("div",{className:" mt-1 text-[9px] bg-[#1c1919]  text-nowrap",children:n==null?void 0:n(o)})]},o.condition))]})},W=()=>{const t={1:10,2:30,3:10,4:10,5:10,6:20,7:30,0:30,29:120,30:200},n=[];for(let s=1;s<=30;s++){if(s===30||s===29){n.push({condition:s,reward:t[s]});continue}const i=s%7;n.push({condition:s,reward:t[i]})}return n},$=()=>{const t=[30,100,200,300,400,500,600,700,800,1e3],n=[1,10,20,30,40,50,60,70,80,100],s=[];for(let i=0;i<n.length;i++){const a=n[i],l=t[i];s.push({condition:a,reward:l})}return s},D=()=>{const t=[],n=[20,100,200,500],s=[1,5,10,20];for(let i=0;i<s.length;i++){const a=s[i],l=n[i];t.push({condition:a,reward:l})}return t},L=()=>{const t=[],n=[10,50,100],s=[100,500,1e3];for(let i=0;i<s.length;i++){const a=s[i],l=n[i];t.push({condition:a,reward:l})}return t},g={[r.Be_like_Task]:L(),[r.Create_avator_Task]:D(),[r.Invite_Task]:$(),[r.Registration_Task]:[],[r.Sign_In_Task]:W()},T={[r.Be_like_Task]:g[r.Be_like_Task].reduce((t,n)=>t+n.reward,0),[r.Create_avator_Task]:g[r.Create_avator_Task].reduce((t,n)=>t+n.reward,0),[r.Invite_Task]:g[r.Invite_Task].reduce((t,n)=>t+n.reward,0),[r.Registration_Task]:0,[r.Sign_In_Task]:g[r.Sign_In_Task].reduce((t,n)=>t+n.reward,0)},J=({tasks:t})=>{const n=[{label:"1～5",day:1},{label:"6～10",day:2},{label:"11～20",day:3},{label:"21～30",day:4},{label:"31～50",day:5,size:16},{label:"51～70",day:6,size:16},{label:"71～？",day:7}];return e.jsx("div",{children:e.jsx("div",{className:" grid gap-[10px]  grid-cols-4 m-auto",children:n.map(s=>e.jsxs("div",{className:`${s.day===7?" col-span-2":"w-[72px] col-span-1"} h-[88px] border-2 rounded-[10px] flex flex-col justify-between items-center overflow-hidden `,children:[e.jsx("div",{className:` ${s.size?" text-base":" text-lg"} font-semibold mt-[6px]`,children:s.label}),e.jsxs("div",{className:"flex justify-center items-center relative",children:[s.day===7&&e.jsx("img",{src:"/images/point.png",className:" relative left-[13px] -top-1 w-8 mb-1",alt:""}),e.jsx("img",{src:"/images/point.png",className:" w-8 mb-1",alt:""}),s.day===7&&e.jsx("img",{src:"/images/point.png",className:" relative right-[13px] -top-1 w-8 mb-1",alt:""}),((t==null?void 0:t.progress)||0)>s.day&&e.jsx("img",{className:" ml-0 mt-3 absolute",src:"/images/check-ok.png",alt:""})]}),e.jsxs("div",{className:"text-[9px] font-semibold h-[19px] leading-[19px] bg-primary w-full -left-0.5 text-[#000000E5] text-center",children:["Daily ",s.day]})]}))})})},H=({tasks:t})=>e.jsxs("div",{className:" flex justify-between items-center",children:[e.jsxs("div",{className:"flex-1 flex items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"bg-base-300 rounded-full  text-[10px] w-[30px] h-[30px] leading-[30px] text-center relative z-10",children:"+50"}),((t==null?void 0:t.progress)||0)>=1&&e.jsx("img",{className:" ml-2 mt-3 absolute z-10",src:"/images/check-ok.png",alt:""}),e.jsxs("div",{className:" ml-1 text-[13px] leading-[11px] bg-[#1c1919]  text-nowrap",children:[e.jsxs("div",{className:" font-semibold  mb-1",children:["Day",(t==null?void 0:t.progress)||1]}),e.jsx("div",{children:"first time"})]})]}),e.jsxs("div",{className:"flex items-center ml-4",children:[e.jsx("div",{className:"bg-base-300 rounded-full  text-[10px] w-[30px] h-[30px] leading-[30px] text-center relative z-10",children:"+50"}),e.jsxs("div",{className:" ml-1 text-[13px] leading-[11px] bg-[#1c1919]  text-nowrap",children:[e.jsxs("div",{className:" font-semibold mb-1",children:["Day",((t==null?void 0:t.progress)||1)+1]}),e.jsx("div",{children:"first time"})]})]})]}),e.jsx("div",{children:e.jsx("button",{className:" btn btn-primary w-[129px] h-[29px] p-0",children:e.jsx("span",{className:" text-base text-poppins-bold",children:"Start create"})})})]}),O=({loading:t,refetch:n})=>{var v,x,p;const{shareFriendsHandle:s}=B(),{tasks:i,nodes:a}=C(),l=I(),o=d.useCallback(async()=>{await S.SwaggerApi.post_daily_sign(),await(n==null?void 0:n()),y("Claim successfully")},[n]),m=d.useMemo(()=>{var c;return a?{total:(c=a.nums[a.nums.length-1])==null?void 0:c.condition,current:a.nodes_completed,round:a.round}:{total:9,current:6,round:0}},[a]),f=d.useMemo(()=>{var c;return(c=i.Sign_In_Task)==null?void 0:c.cycle_rewards.find(h=>{var j;return h.condition===((j=i.Sign_In_Task)==null?void 0:j.progress)})},[i.Sign_In_Task]);return t?e.jsx("div",{className:" mt-6 flex justify-center items-center",children:e.jsx("span",{className:"loading loading-dots loading-sm"})}):e.jsxs("div",{children:[e.jsxs("button",{onClick:s,className:"btn btn-primary w-full h-[37px]",children:[e.jsx("img",{className:" w-6",src:"/images/bx_share.png",alt:""}),e.jsx("span",{className:" text-[17px] text-pingfang font-semibold",children:"Share friends"})]}),e.jsx("div",{children:e.jsxs("div",{className:" flex justify-center items-center mt-5",children:[e.jsx("span",{className:" mr-[6px]",children:"Extra rewards: "}),e.jsx("span",{children:"5"}),e.jsx("img",{className:" w-[17px] mx-1",src:"/images/metis.png",alt:""}),e.jsx("span",{children:"Metis"})]})}),e.jsxs("div",{className:" relative mt-3",children:[e.jsxs("div",{className:" text-[14px] text-[#FFFFFF99]",children:["Rewards Progress Round ",m.round]}),e.jsx("progress",{className:"progress w-11/12 mt-2",value:m.current,max:m.total}),e.jsxs("div",{className:" absolute top-[6px] w-full flex justify-between items-center",children:[e.jsxs("div",{className:"mt-4 text-[#FFFFFF99]",children:[m.current,"/",m.total]}),e.jsxs("div",{className:"flex flex-col items-center justify-start ml-[40%]",children:[e.jsx("div",{className:"bg-base-300 rounded-full p-2",children:e.jsx("img",{className:" w-[19px]",src:"/images/metis.png",alt:""})}),e.jsx("div",{className:" mt-1  text-sm font-semibold",children:"Rewards"})]}),e.jsxs("div",{className:" flex flex-col items-end justify-start",children:[e.jsx("div",{className:"bg-base-300 rounded-full p-2",children:e.jsx("img",{className:" w-[39px]",src:"/images/metis.png",alt:""})}),e.jsx("div",{className:" mt-1 text-sm font-semibold",children:"Large reward"})]})]})]}),e.jsxs("div",{className:" mt-20",children:[e.jsxs("div",{className:"border border-[#6B6B6B] rounded-[9px] ",children:[e.jsxs("div",{className:"flex justify-between items-center  p-[10px] pr-[14px]",children:[e.jsx("div",{children:((v=i.Sign_In_Task)==null?void 0:v.description)||"Daily Attendance"}),e.jsxs("div",{className:" flex justify-center items-center mt-1",children:[e.jsx("img",{className:"w-[32px]",src:"/images/point.png",alt:""}),e.jsxs("div",{className:" text-[18px] font-semibold",children:["+",(f==null?void 0:f.reward)||0]})]})]}),e.jsx("div",{className:"pl-[10px] pr-[14px] mt-1 ",children:e.jsx("button",{onClick:o,className:"btn btn-primary w-full h-[37px] ",children:e.jsx("span",{className:" text-[17px]  font-bold",children:"Claim Now"})})}),e.jsx("div",{className:" relative mt-3 pl-[10px] pr-[14px] mb-5",children:e.jsx(J,{tasks:i.Sign_In_Task})})]}),e.jsxs("div",{className:"border border-[#6B6B6B] rounded-[9px]  mt-[19px]",children:[e.jsxs("div",{className:"flex justify-between items-center  p-[10px] pr-[14px]",children:[e.jsxs("div",{children:[((x=i.Invite_Task)==null?void 0:x.progress)||0," Friends"]}),e.jsxs("div",{className:" flex justify-center items-center mt-1",children:[e.jsx("img",{className:"w-[32px]",src:"/images/point.png",alt:""}),e.jsxs("div",{className:" text-[18px] font-semibold",children:["+",T[r.Invite_Task]||0]})]})]}),e.jsx("div",{className:"pl-[10px] pr-[14px] mt-1 ",children:e.jsx("button",{onClick:s,className:"btn btn-primary w-full h-[37px] ",children:e.jsx("span",{className:" text-[17px]  font-bold",children:"Invite friends"})})}),e.jsxs("div",{className:" relative mt-3 ml-[5px] mr-[11px]",children:[e.jsx("div",{className:"h-[64px] mt-[9px]"}),e.jsx(_,{tasks:i.Invite_Task,cycle_rewards:g[r.Invite_Task],renderLabel:c=>`${c.condition} ${c.condition===1?"friend":"friends"}`})]})]}),e.jsxs("div",{className:"border border-[#6B6B6B] rounded-[9px] mt-[19px]",children:[e.jsxs("div",{className:"flex justify-between items-center  p-[10px] pr-[14px]",children:[e.jsx("div",{children:"Create my avator"}),e.jsxs("div",{className:" flex justify-center items-center mt-1",children:[e.jsx("img",{className:"w-[32px]",src:"/images/point.png",alt:""}),e.jsx("div",{className:" text-[18px] font-semibold",children:"+50"})]})]}),e.jsx("div",{className:" relative mt-2 ml-[5px] mr-[11px] mb-5",children:e.jsx(H,{tasks:i.Create_avator_Task})})]}),e.jsxs("div",{className:"border border-[#6B6B6B] rounded-[9px] mt-[19px]",children:[e.jsxs("div",{className:"flex justify-between items-center  p-[10px] pr-[14px]",children:[e.jsx("div",{children:"I'm be like"}),e.jsxs("div",{className:" flex justify-center items-center mt-1",children:[e.jsx("img",{className:"w-[32px]",src:"/images/point.png",alt:""}),e.jsxs("div",{className:" text-[18px] font-semibold",children:["+",T[r.Be_like_Task]||0]})]})]}),e.jsxs("div",{className:" relative mt-2 ml-[5px] mr-[11px]",children:[e.jsx("div",{className:"h-[64px] mt-[9px]"}),e.jsx(_,{tasks:i.Be_like_Task,cycle_rewards:g[r.Be_like_Task],renderLabel:c=>`${c.condition} ${c.condition===1?"time":"times"}`})]})]})]}),e.jsxs("div",{className:" mt-6 flex justify-between items-center pl-2 pr-3",children:[e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx("span",{children:"Account Connection"}),e.jsx("img",{className:" ml-2 -mt-1",src:"/images/check-ok.png",alt:""})]}),e.jsxs("div",{className:" flex justify-center items-center",children:[e.jsx("img",{className:"w-[32px]",src:"/images/point.png",alt:""}),e.jsxs("div",{className:" text-[18px] font-semibold",children:["+",((p=l==null?void 0:l.user_info)==null?void 0:p.initial_points)||0]})]})]})]})},F=({rank:t})=>t<=3?e.jsx("img",{className:" w-[13px]",src:`/images/n${t}.png`,alt:""}):e.jsx("div",{className:" w-[18px] h-[18px] bg-[#616161] rounded-full leading-[18px] text-center text-[12px]",children:t}),U=()=>{var n,s,i;const t=A();return e.jsxs("div",{children:[e.jsxs("div",{className:"border border-[#6B6B6B] bg-[#ffffff]  rounded-[9px] px-2 pt-2 pb-1",children:[e.jsx("div",{className:" text-[#000000] text-sm font-semibold",children:"Find OG in community"}),e.jsx("button",{className:"btn btn-outline w-full h-[37px] bg-black mt-3",children:e.jsx("span",{className:" text-[17px]  font-bold",children:"Join"})})]}),e.jsx("div",{className:" mt-8 px-6",children:e.jsxs("ul",{className:" font-semibold text-[14px]",children:[e.jsxs("li",{className:" flex text-[#FFFFFF99]",children:[e.jsx("div",{className:" w-[52px] ml-5",children:"Ranking"}),e.jsx("div",{className:" w-[104px] ml-5",children:"Name"}),e.jsx("div",{className:" w-[104px]",children:"Point"})]}),e.jsxs("li",{className:" flex h-[37px] mt-4 bg-[#393939] leading-[37px] rounded-[6px]",children:[e.jsx("div",{className:" w-[52px] pl-[6px] ml-5 flex items-center",children:e.jsx(F,{rank:((n=t.my_rank)==null?void 0:n.rank)||0})}),e.jsx("div",{className:" w-[104px] ml-5",children:"Me"}),e.jsx("div",{className:" w-[104px]",children:e.jsxs("div",{className:" flex justify-start items-center",children:[e.jsx("img",{className:"w-[20px]",src:"/images/point.png",alt:""}),e.jsx("div",{className:" text-[14px] font-semibold",children:(s=t.my_rank)==null?void 0:s.points})]})})]}),(i=t.rank)==null?void 0:i.map(a=>e.jsxs("li",{className:" flex h-[37px] mt-2 leading-[37px] rounded-[6px]",children:[e.jsx("div",{className:" w-[52px] pl-[6px] ml-5 flex items-center",children:e.jsx(F,{rank:a.rank})}),e.jsx("div",{className:" w-[104px] ml-5 text-ellipsis overflow-hidden pr-2",children:a.username||"--"}),e.jsx("div",{className:" w-[104px]",children:e.jsxs("div",{className:" flex justify-start items-center",children:[e.jsx("img",{className:"w-[20px]",src:"/images/point.png",alt:""}),e.jsx("div",{className:" text-[14px] font-semibold",children:a.points})]})})]}))]})})]})};function q(){var l;const[t,n]=d.useState(0),{data:s,isPending:i,refetch:a}=E();return z(),e.jsxs("div",{className:"h-full overflow-auto",children:[e.jsxs("div",{className:" flex flex-col justify-start items-center mt-4",children:[e.jsx("div",{className:"tips",children:"LazAI Royaty Point in PicWiz"}),e.jsxs("div",{className:" flex justify-center items-center mt-1",children:[e.jsx("img",{className:"w-[30px]",src:"/images/point.png",alt:""}),e.jsx("div",{className:" text-[28px] font-semibold",children:e.jsx(R,{value:((l=s==null?void 0:s.data)==null?void 0:l.user_points)||0,decimals:0})})]}),e.jsx("button",{className:"btn btn-outline",children:e.jsx("span",{className:" text-base",children:"View Total Achieved"})})]}),e.jsx("div",{className:" mt-4 bg-[#1c1919] sticky top-0 z-10 pb-2",children:e.jsxs(M,{total:2,active:t,children:[e.jsx(w,{onClick:()=>{n(0)},children:"Progress"}),e.jsx(w,{onClick:()=>{n(1)},children:"Leader Board"})]})}),e.jsx("div",{className:"mt-5 px-3 pb-10",children:t===0?e.jsx(O,{refetch:a,loading:i}):e.jsx(U,{})})]})}export{q as default};
