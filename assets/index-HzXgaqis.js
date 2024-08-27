import{d as n}from"./index-_QpQq_oz.js";const s=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 8px;
  &::after {
    content: "";
    height: 2px;
    background-color: #ffffff;
    bottom: 0px;
    position: absolute;
    left: ${({total:t,active:e,max_tabs:o=5})=>`${e/Math.min(o,t)*100+5}%`};
    transition: all 0.3s;
    width: ${({total:t,max_tabs:e=5})=>`${1/Math.min(e,t)*100-10}%`};
  }
`,r=n.div`
  flex: 1;
  text-align: center;
  margin: 0 8px;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;export{s as T,r as a};
