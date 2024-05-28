/*! For license information please see c4f5d8e4.38f85b34.js.LICENSE.txt */
(self.webpackChunkmadices=self.webpackChunkmadices||[]).push([[634],{192:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>n});r(6540);var a=r(781),i=r(4586),t=r(7837),c=r(4848);const n=function(){const e=(0,i.A)(),{siteConfig:s={}}=e;return(0,c.jsxs)(a.A,{children:[(0,c.jsx)("header",{className:"hero",children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("img",{className:"homepage-img",src:"img/svg/c_no_bg.svg"}),(0,c.jsx)("h1",{className:"hero__title",children:"Machine actionable data for chemical sciences"}),(0,c.jsx)("h2",{className:"hero__subtitle",children:"Bridging experiments, simulations, and machine learning"})]})}),(0,c.jsxs)("main",{className:"main-container",children:[(0,c.jsx)("section",{className:"features",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-md-6 mb-3",children:(0,c.jsx)(t.A,{children:(0,c.jsxs)(t.A.Body,{children:[(0,c.jsx)(t.A.Title,{children:(0,c.jsx)("a",{href:"/docs/2022",children:"MADICES 2022"})}),(0,c.jsx)(t.A.Text,{children:"The first MADICES workshop was held virtually in February 2022."})]})})}),(0,c.jsx)("div",{className:"col-md-6 mb-3",children:(0,c.jsx)(t.A,{children:(0,c.jsxs)(t.A.Body,{children:[(0,c.jsx)(t.A.Title,{children:(0,c.jsx)("a",{href:"/docs/2024",children:"MADIICES 2024"})}),(0,c.jsx)(t.A.Text,{children:"The second MADICES workshop was held in Berlin in April 2024."})]})})})]})})}),(0,c.jsx)("hr",{}),(0,c.jsx)("section",{children:(0,c.jsxs)("div",{className:"container",children:[(0,c.jsx)("h2",{children:"Acknowledgements"}),(0,c.jsxs)("p",{children:["MADICES is partly supported by the Open Research Data Program of the ETH Board through the"," ",(0,c.jsx)("a",{href:"https://ord-premise.org",target:"_blank",children:"PREMISE Establish project"}),"."]})]})})]})]})}},7837:(e,s,r)=>{"use strict";r.d(s,{A:()=>D});var a=r(6942),i=r.n(a),t=r(6540),c=r(4848);const n=["xxl","xl","lg","md","sm","xs"],d=t.createContext({prefixes:{},breakpoints:n,minBreakpoint:"xs"}),{Consumer:l,Provider:o}=d;function m(e,s){const{prefixes:r}=(0,t.useContext)(d);return e||r[s]||s}const f=t.forwardRef((({className:e,bsPrefix:s,as:r="div",...a},t)=>(s=m(s,"card-body"),(0,c.jsx)(r,{ref:t,className:i()(e,s),...a}))));f.displayName="CardBody";const x=f,h=t.forwardRef((({className:e,bsPrefix:s,as:r="div",...a},t)=>(s=m(s,"card-footer"),(0,c.jsx)(r,{ref:t,className:i()(e,s),...a}))));h.displayName="CardFooter";const u=h,j=t.createContext(null);j.displayName="CardHeaderContext";const p=j,N=t.forwardRef((({bsPrefix:e,className:s,as:r="div",...a},n)=>{const d=m(e,"card-header"),l=(0,t.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,c.jsx)(p.Provider,{value:l,children:(0,c.jsx)(r,{ref:n,...a,className:i()(s,d)})})}));N.displayName="CardHeader";const b=N,g=t.forwardRef((({bsPrefix:e,className:s,variant:r,as:a="img",...t},n)=>{const d=m(e,"card-img");return(0,c.jsx)(a,{ref:n,className:i()(r?`${d}-${r}`:d,s),...t})}));g.displayName="CardImg";const y=g,v=t.forwardRef((({className:e,bsPrefix:s,as:r="div",...a},t)=>(s=m(s,"card-img-overlay"),(0,c.jsx)(r,{ref:t,className:i()(e,s),...a}))));v.displayName="CardImgOverlay";const C=v,w=t.forwardRef((({className:e,bsPrefix:s,as:r="a",...a},t)=>(s=m(s,"card-link"),(0,c.jsx)(r,{ref:t,className:i()(e,s),...a}))));w.displayName="CardLink";const A=w,P=e=>t.forwardRef(((s,r)=>(0,c.jsx)("div",{...s,ref:r,className:i()(s.className,e)}))),k=P("h6"),R=t.forwardRef((({className:e,bsPrefix:s,as:r=k,...a},t)=>(s=m(s,"card-subtitle"),(0,c.jsx)(r,{ref:t,className:i()(e,s),...a}))));R.displayName="CardSubtitle";const S=R,I=t.forwardRef((({className:e,bsPrefix:s,as:r="p",...a},t)=>(s=m(s,"card-text"),(0,c.jsx)(r,{ref:t,className:i()(e,s),...a}))));I.displayName="CardText";const T=I,B=P("h5"),E=t.forwardRef((({className:e,bsPrefix:s,as:r=B,...a},t)=>(s=m(s,"card-title"),(0,c.jsx)(r,{ref:t,className:i()(e,s),...a}))));E.displayName="CardTitle";const M=E,_=t.forwardRef((({bsPrefix:e,className:s,bg:r,text:a,border:t,body:n=!1,children:d,as:l="div",...o},f)=>{const h=m(e,"card");return(0,c.jsx)(l,{ref:f,...o,className:i()(s,h,r&&`bg-${r}`,a&&`text-${a}`,t&&`border-${t}`),children:n?(0,c.jsx)(x,{children:d}):d})}));_.displayName="Card";const D=Object.assign(_,{Img:y,Title:M,Subtitle:S,Body:x,Link:A,Text:T,Header:b,Footer:u,ImgOverlay:C})},6942:(e,s)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e="",s=0;s<arguments.length;s++){var r=arguments[s];r&&(e=c(e,t(r)))}return e}function t(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var s="";for(var r in e)a.call(e,r)&&e[r]&&(s=c(s,r));return s}function c(e,s){return s?e?e+" "+s:e+s:e}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(s,[]))||(e.exports=r)}()}}]);