/*! For license information please see 545f8254.adf16bc6.js.LICENSE.txt */
(self.webpackChunkmadices=self.webpackChunkmadices||[]).push([[676],{4667:(e,r,a)=>{"use strict";a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,organizers:()=>l,toc:()=>m});var s=a(4848),t=a(8453),n=a(7837);const i={title:"Organizers",sidebar_id:"organizers",sidebar_label:"Organizers"},o=void 0,c={id:"2024/organizers",title:"Organizers",description:'{/ // import { Card } from "../components.js"; /}',source:"@site/docs/2024/organizers.mdx",sourceDirName:"2024",slug:"/2024/organizers",permalink:"/docs/2024/organizers",draft:!1,unlisted:!1,editUrl:"https://github.com/madices/madices.github.io/edit/main/docs/2024/organizers.mdx",tags:[],version:"current",lastUpdatedAt:1716899804e3,frontMatter:{title:"Organizers",sidebar_id:"organizers",sidebar_label:"Organizers"},sidebar:"workshop2024",previous:{title:"Objectives",permalink:"/docs/2024/objectives"},next:{title:"Sponsors",permalink:"/docs/2024/sponsors"}},d={};let l=[{name:"Kevin Maik Jablonka",link:"https://www.chemgeo.uni-jena.de/en/jablonkagroup",img:"https://www.chemgeo.uni-jena.de/chegemedia/iomc/jablonka-group/portrait-kmj.webp?height=1075&width=1000",organization:"EPFL"},{name:"Matthew Evans",link:"https://ml-evs.science/",img:"https://ml-evs.science/assets/me_round.jpeg",organization:"UCLouvain"},{name:"Caterina Barillari",link:"https://ethz.ch/staffnet/en/organisation/departments/it-services/people/person-detail.MTg1NzU4.TGlzdC8zODgsLTg1MzU3NzMxNA==.html",img:"https://openbis.ch/wp-content/uploads/2020/07/ETH_Inside%EF%80%A7out_170227.jpg",organization:"ETH Z\xfcrich"},{name:"Edan Bainglass",link:"https://www.psi.ch/en/lms/people/edan-bainglass",img:"https://avatars.githubusercontent.com/u/45081142?v=4",organization:"Paul Scherrer Institut"},{name:"Peter Kraus",link:"https://www.tu.berlin/concat/ueber-uns/peter-kraus",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.rgstatic.net%2Fii%2Fprofile.image%2F509591587115009-1498507510648_Q512%2FPeter_Kraus4.jpg&f=1&nofb=1&ipt=f73b1a7c7f60b5dd97513554626316e27287dfd9a50b8cee72ed9afe15731d2d&ipo=images",organization:"Technische Universit\xe4t Berlin"}];const m=[{value:"Core team",id:"core-team",level:2}];function f(e){const r={a:"a",div:"div",h2:"h2",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:["\n","\n","\n",(0,s.jsx)(r.h2,{id:"core-team",children:"Core team"}),"\n",(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:l.sort((function(e,r){return e.name.localeCompare(r.name)})).map(((e,a)=>(0,s.jsx)(r.div,{className:"col-sm-6 col-xxl-4 mb-4",children:(0,s.jsxs)(n.A,{className:"h-100 p-0",children:[(0,s.jsx)(n.A.Img,{variant:"top",src:e.img}),(0,s.jsxs)(n.A.Body,{children:[(0,s.jsx)(n.A.Title,{children:(0,s.jsx)(r.a,{href:e.link,children:e.name})}),(0,s.jsx)(n.A.Text,{children:e.organization})]})]})})))})})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},7837:(e,r,a)=>{"use strict";a.d(r,{A:()=>B});var s=a(6942),t=a.n(s),n=a(6540),i=a(4848);const o=["xxl","xl","lg","md","sm","xs"],c=n.createContext({prefixes:{},breakpoints:o,minBreakpoint:"xs"}),{Consumer:d,Provider:l}=c;function m(e,r){const{prefixes:a}=(0,n.useContext)(c);return e||a[r]||r}const f=n.forwardRef((({className:e,bsPrefix:r,as:a="div",...s},n)=>(r=m(r,"card-body"),(0,i.jsx)(a,{ref:n,className:t()(e,r),...s}))));f.displayName="CardBody";const p=f,u=n.forwardRef((({className:e,bsPrefix:r,as:a="div",...s},n)=>(r=m(r,"card-footer"),(0,i.jsx)(a,{ref:n,className:t()(e,r),...s}))));u.displayName="CardFooter";const g=u,x=n.createContext(null);x.displayName="CardHeaderContext";const h=x,b=n.forwardRef((({bsPrefix:e,className:r,as:a="div",...s},o)=>{const c=m(e,"card-header"),d=(0,n.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,i.jsx)(h.Provider,{value:d,children:(0,i.jsx)(a,{ref:o,...s,className:t()(r,c)})})}));b.displayName="CardHeader";const v=b,N=n.forwardRef((({bsPrefix:e,className:r,variant:a,as:s="img",...n},o)=>{const c=m(e,"card-img");return(0,i.jsx)(s,{ref:o,className:t()(a?`${c}-${a}`:c,r),...n})}));N.displayName="CardImg";const j=N,w=n.forwardRef((({className:e,bsPrefix:r,as:a="div",...s},n)=>(r=m(r,"card-img-overlay"),(0,i.jsx)(a,{ref:n,className:t()(e,r),...s}))));w.displayName="CardImgOverlay";const y=w,C=n.forwardRef((({className:e,bsPrefix:r,as:a="a",...s},n)=>(r=m(r,"card-link"),(0,i.jsx)(a,{ref:n,className:t()(e,r),...s}))));C.displayName="CardLink";const k=C,z=e=>n.forwardRef(((r,a)=>(0,i.jsx)("div",{...r,ref:a,className:t()(r.className,e)}))),P=z("h6"),R=n.forwardRef((({className:e,bsPrefix:r,as:a=P,...s},n)=>(r=m(r,"card-subtitle"),(0,i.jsx)(a,{ref:n,className:t()(e,r),...s}))));R.displayName="CardSubtitle";const T=R,A=n.forwardRef((({className:e,bsPrefix:r,as:a="p",...s},n)=>(r=m(r,"card-text"),(0,i.jsx)(a,{ref:n,className:t()(e,r),...s}))));A.displayName="CardText";const O=A,F=z("h5"),M=n.forwardRef((({className:e,bsPrefix:r,as:a=F,...s},n)=>(r=m(r,"card-title"),(0,i.jsx)(a,{ref:n,className:t()(e,r),...s}))));M.displayName="CardTitle";const S=M,_=n.forwardRef((({bsPrefix:e,className:r,bg:a,text:s,border:n,body:o=!1,children:c,as:d="div",...l},f)=>{const u=m(e,"card");return(0,i.jsx)(d,{ref:f,...l,className:t()(r,u,a&&`bg-${a}`,s&&`text-${s}`,n&&`border-${n}`),children:o?(0,i.jsx)(p,{children:c}):c})}));_.displayName="Card";const B=Object.assign(_,{Img:j,Title:S,Subtitle:T,Body:p,Link:k,Text:O,Header:v,Footer:g,ImgOverlay:y})},6942:(e,r)=>{var a;!function(){"use strict";var s={}.hasOwnProperty;function t(){for(var e="",r=0;r<arguments.length;r++){var a=arguments[r];a&&(e=i(e,n(a)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var a in e)s.call(e,a)&&e[a]&&(r=i(r,a));return r}function i(e,r){return r?e?e+" "+r:e+r:e}e.exports?(t.default=t,e.exports=t):void 0===(a=function(){return t}.apply(r,[]))||(e.exports=a)}()},8453:(e,r,a)=>{"use strict";a.d(r,{R:()=>i,x:()=>o});var s=a(6540);const t={},n=s.createContext(t);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);