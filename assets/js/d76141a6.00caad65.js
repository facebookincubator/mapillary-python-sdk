"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2556],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=l.createContext({}),m=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=m(a),c=r,f=d["".concat(p,".").concat(c)]||d[c]||s[c]||n;return a?l.createElement(f,i(i({ref:t},u),{},{components:a})):l.createElement(f,i({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<n;m++)i[m]=a[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8536:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var l=a(7462),r=(a(7294),a(3905));const n={"sidebar position":3},i=void 0,o={unversionedId:"mapillary.models.api/mapillary.models.api.general",id:"mapillary.models.api/mapillary.models.api.general",isDocsHomePage:!1,title:"mapillary.models.api.general",description:"mapillary.models.api.entities",source:"@site/docs/mapillary.models.api/mapillary.models.api.general.md",sourceDirName:"mapillary.models.api",slug:"/mapillary.models.api/mapillary.models.api.general",permalink:"/mapillary-python-sdk/docs/mapillary.models.api/mapillary.models.api.general",editUrl:"https://github.com/mapillary/mapillary-python-sdk/tree/main/docs/docs/mapillary.models.api/mapillary.models.api.general.md",tags:[],version:"current",frontMatter:{"sidebar position":3},sidebar:"tutorialSidebar",previous:{title:"mapillary.models.api.entities",permalink:"/mapillary-python-sdk/docs/mapillary.models.api/mapillary.models.api.entities"},next:{title:"mapillary.models.api",permalink:"/mapillary-python-sdk/docs/mapillary.models.api/mapillary.models.api"}},p=[{value:"mapillary.models.api.entities",id:"mapillarymodelsapientities",children:[]},{value:"class mapillary.models.api.general.GeneralAdapter(*args: object)",id:"class-mapillarymodelsapigeneralgeneraladapterargs-object",children:[]}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"mapillarymodelsapientities"},"mapillary.models.api.entities"),(0,r.kt)("p",null,"This module contains the Adapter design for the Entities API of Mapillary API v4."),(0,r.kt)("p",null,"For more information, please check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapillary.com/developer/api-documentation/"},"https://www.mapillary.com/developer/api-documentation/"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copyright: (c) 2021 Facebook")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"License: MIT LICENSE")),(0,r.kt)("h3",{id:"class-mapillarymodelsapigeneralgeneraladapterargs-object"},"class mapillary.models.api.general.GeneralAdapter(","*","args: object)"),(0,r.kt)("p",null,"Bases: ",(0,r.kt)("inlineCode",{parentName:"p"},"object")),(0,r.kt)("p",null,"General adaptor for using the API calls defined for the general module\n(mapillary.config.api.general)"),(0,r.kt)("p",null,"The GeneralAdaptor provides functions for getting preprocessed data from the API, through the\nAPI calls mentioned in the previously mentioned config."),(0,r.kt)("p",null,"It performs parsing, property handling, easier logic for extracing information, focusing on\nadding a layer of abstraction by removing details of using mercantile, ast, et al, to\nfocus on the inputs and outputs of functions"),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> import mapillary\n")),(0,r.kt)("h4",{id:"fetch_computed_image_tileszoom-int-longitude-float-latitude-float-layer-literaloverview-sequence-image-map_feature-traffic_sign--image"},"fetch_computed_image_tiles(zoom: int, longitude: float, latitude: float, layer: Literal","['overview', 'sequence', 'image', 'map_feature', 'traffic_sign']"," = 'image')"),(0,r.kt)("p",null,"Get the image type for a given image."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zoom")," (",(0,r.kt)("em",{parentName:"li"},"int"),") \u2013 The zoom to get the image type for.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **longitude** (*float*) \u2013 The longitude of the image.\n\n\n* **latitude** (*float*) \u2013 The latitude of the image.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  A dictionary containing the image type for the image."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("h4",{id:"fetch_image_tileszoom-int-longitude-float-latitude-float-layer-literaloverview-sequence-image-map_feature-traffic_sign--image"},"fetch_image_tiles(zoom: int, longitude: float, latitude: float, layer: Literal","['overview', 'sequence', 'image', 'map_feature', 'traffic_sign']"," = 'image')"),(0,r.kt)("p",null,"Get the tiles for a given image."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zoom")," (",(0,r.kt)("em",{parentName:"li"},"int"),") \u2013 Zoom level of the image.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **longitude** (*float*) \u2013 Longitude of the image\n\n\n* **latitude** (*float*) \u2013 Latitude of the image\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  A dictionary containing the tiles for the image."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("h4",{id:"fetch_map_features_tileszoom-int-longitude-float-latitude-float-layer-literaloverview-sequence-image-map_feature-traffic_sign--image"},"fetch_map_features_tiles(zoom: int, longitude: float, latitude: float, layer: Literal","['overview', 'sequence', 'image', 'map_feature', 'traffic_sign']"," = 'image')"),(0,r.kt)("p",null,"Get the map features for a given coordinate set"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zoom")," (",(0,r.kt)("em",{parentName:"li"},"int"),") \u2013 The zoom value to get the map features for")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **longitude** (*float*) \u2013 The longitude of the image\n\n\n* **latitude** (*float*) \u2013 The latitude of the image\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  A dictionary containing the map features for the image."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("h4",{id:"fetch_map_features_traffic_tileszoom-int-longitude-float-latitude-float-layer-str"},"fetch_map_features_traffic_tiles(zoom: int, longitude: float, latitude: float, layer: str)"),(0,r.kt)("p",null,"Get the map feature traffic for a given coordinate set"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"zoom")," (",(0,r.kt)("em",{parentName:"li"},"int"),") \u2013 The zoom value to get the map features for")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **longitude** (*float*) \u2013 The longitude of the image\n\n\n* **latitude** (*float*) \u2013 The latitude of the image\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  A dictionary containing the map features for the image."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))))}u.isMDXComponent=!0}}]);