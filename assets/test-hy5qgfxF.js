import{j as t,A as e}from"./index-s5uGnzEF.js";function n(){return t.jsxs("div",{children:[t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.get_my_style_imgs({page:1,page_size:10});console.log(s)},children:"get_my_style_imgs"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.get_my_styles({page:1,page_size:10});console.log(s)},children:"get_my_styles"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.get_rank();console.log(s)},children:"get_rank"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.get_rewards_and_tasks();console.log(s)},children:"get_rewards_and_tasks"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.get_style_imgs("12",{page:1,page_size:10});console.log(s)},children:"get_style_imgs"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.get_styles({page:1,page_size:10});console.log(s)},children:"get_styles"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.post_daily_sign();console.log(s)},children:"post_daily_sign"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.post_img_like({uuid:""});console.log(s)},children:"post_img_like"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.post_img_public({uuid:"12"});console.log(s)},children:"post_img_public"}),t.jsx("button",{className:"btn btn-primary",onClick:async()=>{const s=await e.SwaggerApi.post_styles_like({uuid:""});console.log(s)},children:"post_styles_like"})]})}export{n as default};
