import{r as e,d as M,j as a,R as $}from"./index-cf374f90.js";const x=({scale:s,opacity:o,position:r,overflow:d})=>{const[c,i]=e.useState(0),[u,l]=e.useState(0),{theme:g}=M();e.useEffect(()=>{const t=n=>{const h=window.innerWidth,w=window.innerHeight,f=Math.round(n.pageX/h*100),p=Math.round(n.pageY/w*100);i(f),l(p)};return document.addEventListener("mousemove",t),()=>{document.removeEventListener("mousemove",t)}},[]);const m={background:`radial-gradient(at ${c}% ${u}%, #73c9eb, ${g==="light"?"#9daaf2":"#0c1220"})`};return a.jsx($.Fragment,{children:a.jsx("div",{className:`radial-gradient-styling absolute ${r} left-0 h-full w-full -z-[1]   ${o} ${s} ${d}`,style:m})})};export{x as default};
