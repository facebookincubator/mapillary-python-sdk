"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7918],{9362:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var n=a(7294),l=a(6010),r=a(907),s=a(3783),i=a(6742),o=a(4973);const c=function(e){const{metadata:t}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};var d=a(2263),m=a(1773);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function v(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){let{versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,d.Z)(),{pluginId:l}=(0,r.gA)({failfast:!0}),{savePreferredVersionName:s}=(0,m.J)(l),{latestDocSuggestion:i,latestVersionSuggestion:o}=(0,r.Jo)(l),c=null!=i?i:(u=o).docs.find((e=>e.id===u.mainDocId));var u;return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:a,versionMetadata:t})),n.createElement("div",{className:"margin-top--md"},n.createElement(v,{versionLabel:o.label,to:c.path,onClick:()=>s(o.name)})))}const E=function(e){let{versionMetadata:t}=e;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(p,{versionMetadata:t})};var g=a(1217);function b(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(o.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement(n.Fragment,null,n.createElement(o.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var N=a(6146),L=a(7682);const Z="lastUpdated_mt2f";function k(e){return n.createElement("div",{className:"row margin-bottom--sm"},n.createElement("div",{className:"col"},n.createElement(L.Z,e)))}function U(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:r,formattedLastUpdatedAt:s}=e;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},t&&n.createElement(N.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",Z)},(a||r)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:r})))}function y(e){const{content:t}=e,{metadata:a}=t,{editUrl:l,lastUpdatedAt:r,formattedLastUpdatedAt:s,lastUpdatedBy:i,tags:o}=a,c=o.length>0,d=!!(l||r||i);return c||d?n.createElement("footer",{className:"docusaurus-mt-lg"},c&&n.createElement(k,{tags:o}),d&&n.createElement(U,{editUrl:l,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:s})):n.createElement(n.Fragment,null)}var T=a(571);const C="tocCollapsible_aw-L",A="tocCollapsibleButton_zr6a",w="tocCollapsibleContent_0dom",S="tocCollapsibleExpanded_FSiv";function B(e){let{toc:t,className:a}=e;const{collapsed:r,toggleCollapsed:s}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(C,{[S]:!r},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",A),onClick:s},n.createElement(o.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:w,collapsed:r},n.createElement(T.r,{toc:t})))}var x=a(6159);const I="docItemContainer_oiyr",M="docItemCol_zHA2",O="tocMobile_Tx6Y";function F(e){const{content:t,versionMetadata:a}=e,{metadata:i,frontMatter:o}=t,{image:d,keywords:m,hide_title:u,hide_table_of_contents:h}=o,{description:v,title:p}=i,{pluginId:b}=(0,r.gA)({failfast:!0}),f=(0,r.gB)(b).length>1,_=!u&&void 0===t.contentTitle,N=(0,s.Z)(),L=!h&&t.toc&&t.toc.length>0,Z=L&&("desktop"===N||"ssr"===N);return n.createElement(n.Fragment,null,n.createElement(g.Z,{title:p,description:v,keywords:m,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[M]:!h})},n.createElement(E,{versionMetadata:a}),n.createElement("div",{className:I},n.createElement("article",null,f&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",a.label),L&&n.createElement(B,{toc:t.toc,className:O}),n.createElement("div",{className:"markdown"},_&&n.createElement(x.N,null,p),n.createElement(t,null)),n.createElement(y,e)),n.createElement(c,{metadata:i}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(T.Z,{toc:t.toc}))))}},6146:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(4973),r=a(7462),s=a(6010);const i="iconEdit_mS5F",o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},6159:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(7462),l=a(7294),r=a(6010),s=a(4973),i=a(1773);const o="anchorWithStickyNavbar_y2LR",c="anchorWithHideOnScrollNavbar_3ly5",d=function(e){let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,function(e){let{id:a,...n}=e;const{navbar:{hideOnScroll:d}}=(0,i.LU)();return a?l.createElement(t,n,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,r.Z)("anchor","anchor__"+t,{[c]:d,[o]:!d}),id:a}),n.children,l.createElement("a",{className:"hash-link",href:"#"+a,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,n)});var t}},571:(e,t,a)=>{a.d(t,{r:()=>h,Z:()=>v});var n=a(7294),l=a(6010),r=a(1773);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>s(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:null!=(l=a[a.indexOf(n)-1])?l:null;var l}return a[a.length-1]}function o(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.LU)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,n.useRef)(void 0),a=o();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),r=i({anchorTopOffset:a.current}),s=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(l)),e.classList.add(l),t.current=e}else e.classList.remove(l)}(e,e===s)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,a])},d="tableOfContents_vrFS",m="table-of-contents__link",u={linkClassName:m,linkActiveClassName:"table-of-contents__link--active"};function h(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:m,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(h,{isChild:!0,toc:e.children}))))):null}const v=function(e){let{toc:t}=e;return c(u),n.createElement("div",{className:(0,l.Z)(d,"thin-scrollbar")},n.createElement(h,{toc:t}))}},7211:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(6742);const s="tag_WK-t",i="tagRegular_LXbV",o="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(s,{[i]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},7682:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7294),l=a(6010),r=a(4973),s=a(7211);const i="tags_NBRY",o="tag_F03v";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(i,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o},n.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);