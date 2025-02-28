"use strict";(self.webpackChunkmadices=self.webpackChunkmadices||[]).push([[847],{6548:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=i(4848),o=i(8453);const a={title:"MADICES 2024",sidebar_label:"About",sidebar_id:"about"},s=void 0,r={id:"2024/index",title:"MADICES 2024",description:"Overview",source:"@site/docs/2024/index.mdx",sourceDirName:"2024",slug:"/2024/",permalink:"/docs/2024/",draft:!1,unlisted:!1,editUrl:"https://github.com/madices/madices.github.io/edit/main/docs/2024/index.mdx",tags:[],version:"current",lastUpdatedAt:1740737179e3,frontMatter:{title:"MADICES 2024",sidebar_label:"About",sidebar_id:"about"},sidebar:"workshop2024",next:{title:"Objectives",permalink:"/docs/2024/objectives"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"References",id:"references",level:3},{value:"Acknowledgements",id:"acknowledgements",level:3}];function h(e){const t={a:"a",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"The recently established research data management (RDM) initiatives have been largely successful in delivering tools advancing the digitalisation of sciences, including a few open research data (ORD) repositories, several electronic lab notebooks (ELNs), workflow management systems (WFMSs), and many instrument automation platforms [1-4]."}),"\n",(0,n.jsx)(t.p,{children:"In this proposed workshop we plan to focus on interoperability across the stages of such RDM pipelines. This includes both integration of experimental and computational data, and the interoperability of instrument automation platforms and WFMSs with ELNs. In particular, we wish to address the following challenges:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Sample provenance in mixed workflows"}),". WFMSs are tailored to keep track of data and sample provenance for workflows that are completely contained in the WFMS. Similarly, an ELN is usually tailored to allow the users to enter protocols and link it with data manually. However, what happens in cases where the sample history is a mixture of automated and manual steps? How do we avoid data duplication and yet retain the complete sample history in an ELN?"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Digital twins suitable for computation and experiment"}),". A sample in a computational workflow is, generally, a well-defined, immutable, idealized system, which can be easily reused in further computations. However, a sample in an experimental workflow is strictly dependent on its history, as many experimental techniques alter the sample state. In this case, one cannot physically access the previous sample states. How does a WFMS know what kind of sample it\u2019s handed from the ELN? How does the WFMS know to which descendant of the parent sample it\u2019s meant to push the new results? How is this provenance graph consistently transferred between the different components of the RDM pipeline?"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"At the proposed workshop, we will bring together WFMS and ELN developers, scientists, and data stewards to discuss the above issues and find cross-platform solutions. The goal of the workshop will be to establish a working group focused on developing a standard for such a tool-to-tool interoperability in a platform-agnostic way."}),"\n",(0,n.jsx)(t.p,{children:"The ultimate goal is to provide the infrastructure for future autonomous laboratories, in which ML/AI algorithms can seamlessly drive both experiments and simulations toward fully autonomous discovery and characterization. In doing so, the contribution of MADICES2 will be to encourage the support by the various platforms for FAIR data sharing \u201cby design\u201d."}),"\n",(0,n.jsx)(t.p,{children:"The workshop will promote these scientific applications by spending significant time scoping and discussing the software development required to support the case studies. By breaking off into 2-3 fluid interest groups, the minimum workable version of each project can be achieved within the short turnaround time of 4 days. Guidelines will be put into place for organizers to report back the work of each group twice-a-day, and each day will end with open discussion to feed back into the next day\u2019s work."}),"\n",(0,n.jsx)(t.p,{children:"On day 2, there will be a specific time scheduled for more \u201chackathon\u201d style work (with pizza provided), where attendees can work individually or in very small groups to investigate possible integrations within their existing initiatives. We will contact participants to arrange one or two meetings to discuss potential ideas in the months before the workshop. This will be of great impact given the technical audience of the workshop, and time to present the hackathon projects will be given at the start of day 3. After the official close of the workshop around lunchtime on day 4, the organizers (and those without travel constraints) commit to staying for the rest of the day to tidy-up the projects and begin drafting a whitepaper or publication, as well as aligning follow-up work from the interest groups on specific projects."}),"\n",(0,n.jsx)(t.h3,{id:"references",children:"References"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"K. Jablonka, L. Patiny, B. Smit, Nat. Chem., 14, 365-376 (2022)"}),"\n",(0,n.jsx)(t.li,{children:"S. Kanza, C. Willoughby, N. Gibbins, R. Whitby, J. Frey, J. Erjavec, K. Zupan\u010di\u010d, M. Hren, K. Kova\u010d, J. Cheminform., 9, 31 (2017)"}),"\n",(0,n.jsx)(t.li,{children:"M. Scheffler, M. Aeschlimann, M. Albrecht, T. Bereau, H. Bungartz, C. Felser, M. Greiner, A. Gro\xdf, C. Koch, K. Kremer, W. Nagel, M. Scheidgen, C. W\xf6ll, C. Draxl, Nature, 604, 635-642 (2022)"}),"\n",(0,n.jsx)(t.li,{children:"A. Yakutovich, K. Eimre, O. Sch\xfctt, L. Talirz, C. Adorf, C. Andersen, E. Ditler, D. Du, D. Passerone, B. Smit, N. Marzari, G. Pizzi, C. Pignedoli, Computational Materials Science, 188, 110165 (2021)"}),"\n",(0,n.jsx)(t.li,{children:"S. Clark, F. Bleken, S. Stier, E. Flores, C. Andersen, M. Marcinek, A. Szczesna\u2010Chrzan, M. Gaberscek, M. Palacin, M. Uhrin, J. Friis, Advanced Energy Materials, 12, 2102702 (2021)"}),"\n",(0,n.jsx)(t.li,{children:"C. Andersen, R. Armiento, E. Blokhin, G. Conduit, S. Dwaraknath, M. Evans, \xc1. Fekete, A. Gopakumar, S. Gra\u017eulis, A. Merkys, F. Mohamed, C. Oses, G. Pizzi, G. Rignanese, M. Scheidgen, L. Talirz, C. Toher, D. Winston, R. Aversa, K. Choudhary, P. Colinet, S. Curtarolo, D. Di Stefano, C. Draxl, S. Er, M. Esters, M. Fornari, M. Giantomassi, M. Govoni, G. Hautier, V. Hegde, M. Horton, P. Huck, G. Huhs, J. Hummelsh\xf8j, A. Kariryaa, B. Kozinsky, S. Kumbhar, M. Liu, N. Marzari, A. Morris, A. Mostofi, K. Persson, G. Petretto, T. Purcell, F. Ricci, F. Rose, M. Scheffler, D. Speckhard, M. Uhrin, A. Vaitkus, P. Villars, D. Waroquiers, C. Wolverton, M. Wu, X. Yang, Sci. Data., 8, 217 (2021)"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"acknowledgements",children:"Acknowledgements"}),"\n",(0,n.jsxs)(t.p,{children:["MADICES is partly supported by the Open Research Data Program of the ",(0,n.jsx)(t.a,{href:"https://ethrat.ch/en/",children:"ETH Board"})," through the ",(0,n.jsx)(t.a,{href:"https://ord-premise.org/",children:"PREMISE Establish project"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>s,x:()=>r});var n=i(6540);const o={},a=n.createContext(o);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);