/*! For license information please see c3e37b22.72a9978b.js.LICENSE.txt */
(self.webpackChunkmadices=self.webpackChunkmadices||[]).push([[786],{4055:(e,a,r)=>{"use strict";r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,organizers:()=>d,toc:()=>m});var s=r(4848),t=r(8453),n=r(5635);const i={title:"Organizers",sidebar_id:"organizers",sidebar_label:"Organizers"},o=void 0,c={id:"2025/organizers",title:"Organizers",description:'{/ // import { Card } from "../components.js"; /}',source:"@site/docs/2025/organizers.mdx",sourceDirName:"2025",slug:"/2025/organizers",permalink:"/docs/2025/organizers",draft:!1,unlisted:!1,editUrl:"https://github.com/madices/madices.github.io/edit/main/docs/2025/organizers.mdx",tags:[],version:"current",lastUpdatedAt:1740737179e3,frontMatter:{title:"Organizers",sidebar_id:"organizers",sidebar_label:"Organizers"},sidebar:"workshop2025",previous:{title:"Objectives",permalink:"/docs/2025/objectives"},next:{title:"Sponsors",permalink:"/docs/2025/sponsors"}},l={};let d=[{name:"Edan Bainglass",link:"https://www.psi.ch/en/lms/people/edan-bainglass",img:"https://avatars.githubusercontent.com/u/45081142?v=4",organization:"Paul Scherrer Institute"},{name:"Caterina Barillari",link:"https://ethz.ch/staffnet/en/organisation/departments/it-services/people/person-detail.MTg1NzU4.TGlzdC8zODgsLTg1MzU3NzMxNA==.html",img:"https://openbis.ch/wp-content/uploads/2020/07/ETH_Inside%EF%80%A7out_170227.jpg",organization:"ETH Z\xfcrich"},{name:"Samantha Pearman-Kanza",link:"https://www.southampton.ac.uk/people/5xm57p/doctor-samantha-pearman-kanza",img:"https://www.southampton.ac.uk/sites/default/files/styles/max_1300x1300/public/staff/sk1r18-109522.jpg.webp?itok=IvZZ4Vk3",organization:"University of Southampton"},{name:"Simon Bekemeier",link:"https://www.linkedin.com/in/simon-bekemeier-05399118a/?originalSubdomain=de",img:"https://avatars.githubusercontent.com/u/38857177?v=4",organization:"Bundesanstalt f\xfcr Materialforschung und -pr\xfcfung (BAM)"},{name:"Matthew Evans",link:"https://ml-evs.science/",img:"https://ml-evs.science/assets/me_round.jpeg",organization:"UCLouvain"},{name:"Sebastian Br\xfcckner",link:"https://www.linkedin.com/in/sebastianbrueckner/?originalSubdomain=de",img:"https://media.licdn.com/dms/image/v2/D4D03AQEK_ylmke--Sw/profile-displayphoto-shrink_200_200/B4DZVD4sAVHIAY-/0/1740600689390?e=1746057600&v=beta&t=Ne_FYaQIkTA5oqf2u3bMzkOyTe8bu78fjUQiV8sDYrU",organization:"IKZ Berlin and HU Berlin"}];const m=[{value:"Core team",id:"core-team",level:2}];function p(e){const a={h2:"h2",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:["\n","\n","\n",(0,s.jsx)(a.h2,{id:"core-team",children:"Core team"}),"\n",(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:d.sort((function(e,a){return e.name.localeCompare(a.name)})).map(((e,a)=>(0,s.jsx)("div",{className:"col-sm-6 col-xxl-4 mb-4",children:(0,s.jsxs)(n.A,{className:"h-100 p-0",children:[(0,s.jsx)(n.A.Img,{variant:"top",src:e.img}),(0,s.jsxs)(n.A.Body,{children:[(0,s.jsx)(n.A.Title,{children:(0,s.jsx)("a",{href:e.link,children:e.name})}),(0,s.jsx)(n.A.Text,{children:e.organization})]})]})})))})})]})}function u(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},5635:(e,a,r)=>{"use strict";r.d(a,{A:()=>R});var s=r(6942),t=r.n(s),n=r(6540),i=r(6519),o=r(4848);const c=n.forwardRef((({className:e,bsPrefix:a,as:r="div",...s},n)=>(a=(0,i.oU)(a,"card-body"),(0,o.jsx)(r,{ref:n,className:t()(e,a),...s}))));c.displayName="CardBody";const l=c,d=n.forwardRef((({className:e,bsPrefix:a,as:r="div",...s},n)=>(a=(0,i.oU)(a,"card-footer"),(0,o.jsx)(r,{ref:n,className:t()(e,a),...s}))));d.displayName="CardFooter";const m=d,p=n.createContext(null);p.displayName="CardHeaderContext";const u=p,f=n.forwardRef((({bsPrefix:e,className:a,as:r="div",...s},c)=>{const l=(0,i.oU)(e,"card-header"),d=(0,n.useMemo)((()=>({cardHeaderBsPrefix:l})),[l]);return(0,o.jsx)(u.Provider,{value:d,children:(0,o.jsx)(r,{ref:c,...s,className:t()(a,l)})})}));f.displayName="CardHeader";const x=f,g=n.forwardRef((({bsPrefix:e,className:a,variant:r,as:s="img",...n},c)=>{const l=(0,i.oU)(e,"card-img");return(0,o.jsx)(s,{ref:c,className:t()(r?`${l}-${r}`:l,a),...n})}));g.displayName="CardImg";const h=g,b=n.forwardRef((({className:e,bsPrefix:a,as:r="div",...s},n)=>(a=(0,i.oU)(a,"card-img-overlay"),(0,o.jsx)(r,{ref:n,className:t()(e,a),...s}))));b.displayName="CardImgOverlay";const v=b,N=n.forwardRef((({className:e,bsPrefix:a,as:r="a",...s},n)=>(a=(0,i.oU)(a,"card-link"),(0,o.jsx)(r,{ref:n,className:t()(e,a),...s}))));N.displayName="CardLink";const j=N,k=e=>n.forwardRef(((a,r)=>(0,o.jsx)("div",{...a,ref:r,className:t()(a.className,e)}))),w=k("h6"),y=n.forwardRef((({className:e,bsPrefix:a,as:r=w,...s},n)=>(a=(0,i.oU)(a,"card-subtitle"),(0,o.jsx)(r,{ref:n,className:t()(e,a),...s}))));y.displayName="CardSubtitle";const z=y,C=n.forwardRef((({className:e,bsPrefix:a,as:r="p",...s},n)=>(a=(0,i.oU)(a,"card-text"),(0,o.jsx)(r,{ref:n,className:t()(e,a),...s}))));C.displayName="CardText";const U=C,P=k("h5"),A=n.forwardRef((({className:e,bsPrefix:a,as:r=P,...s},n)=>(a=(0,i.oU)(a,"card-title"),(0,o.jsx)(r,{ref:n,className:t()(e,a),...s}))));A.displayName="CardTitle";const S=A,B=n.forwardRef((({bsPrefix:e,className:a,bg:r,text:s,border:n,body:c=!1,children:d,as:m="div",...p},u)=>{const f=(0,i.oU)(e,"card");return(0,o.jsx)(m,{ref:u,...p,className:t()(a,f,r&&`bg-${r}`,s&&`text-${s}`,n&&`border-${n}`),children:c?(0,o.jsx)(l,{children:d}):d})}));B.displayName="Card";const R=Object.assign(B,{Img:h,Title:S,Subtitle:z,Body:l,Link:j,Text:U,Header:x,Footer:m,ImgOverlay:v})},6519:(e,a,r)=>{"use strict";r.d(a,{Wz:()=>l,oU:()=>c});var s=r(6540);r(4848);const t=["xxl","xl","lg","md","sm","xs"],n=s.createContext({prefixes:{},breakpoints:t,minBreakpoint:"xs"}),{Consumer:i,Provider:o}=n;function c(e,a){const{prefixes:r}=(0,s.useContext)(n);return e||r[a]||a}function l(){const{dir:e}=(0,s.useContext)(n);return"rtl"===e}},6942:(e,a)=>{var r;!function(){"use strict";var s={}.hasOwnProperty;function t(){for(var e="",a=0;a<arguments.length;a++){var r=arguments[a];r&&(e=i(e,n(r)))}return e}function n(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return t.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var a="";for(var r in e)s.call(e,r)&&e[r]&&(a=i(a,r));return a}function i(e,a){return a?e?e+" "+a:e+a:e}e.exports?(t.default=t,e.exports=t):void 0===(r=function(){return t}.apply(a,[]))||(e.exports=r)}()},8453:(e,a,r)=>{"use strict";r.d(a,{R:()=>i,x:()=>o});var s=r(6540);const t={},n=s.createContext(t);function i(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);