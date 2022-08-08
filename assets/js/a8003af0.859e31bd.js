"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(a),k=l,c=d["".concat(i,".").concat(k)]||d[k]||u[k]||r;return a?n.createElement(c,o(o({ref:t},m),{},{components:a})):n.createElement(c,o({ref:t},m))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},642:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var n=a(7462),l=(a(7294),a(3905));const r={"sidebar position":4},o=void 0,p={unversionedId:"mapillary.models/mapillary.models.geojson",id:"mapillary.models/mapillary.models.geojson",isDocsHomePage:!1,title:"mapillary.models.geojson",description:"mapillary.models.geojson",source:"@site/docs/mapillary.models/mapillary.models.geojson.md",sourceDirName:"mapillary.models",slug:"/mapillary.models/mapillary.models.geojson",permalink:"/mapillary-python-sdk/docs/mapillary.models/mapillary.models.geojson",editUrl:"https://github.com/mapillary/mapillary-python-sdk/tree/main/docs/docs/mapillary.models/mapillary.models.geojson.md",tags:[],version:"current",frontMatter:{"sidebar position":4},sidebar:"tutorialSidebar",previous:{title:"mapillary.models.exceptions",permalink:"/mapillary-python-sdk/docs/mapillary.models/mapillary.models.exceptions"},next:{title:"mapillary.models",permalink:"/mapillary-python-sdk/docs/mapillary.models/mapillary.models"}},i=[{value:"mapillary.models.geojson",id:"mapillarymodelsgeojson",children:[]},{value:"class mapillary.models.geojson.Coordinates(longitude: float, latitude: float)",id:"class-mapillarymodelsgeojsoncoordinateslongitude-float-latitude-float",children:[]},{value:"class mapillary.models.geojson.Feature(feature: dict)",id:"class-mapillarymodelsgeojsonfeaturefeature-dict",children:[]},{value:"class mapillary.models.geojson.GeoJSON(geojson: dict)",id:"class-mapillarymodelsgeojsongeojsongeojson-dict",children:[]},{value:"class mapillary.models.geojson.Geometry(geometry: dict)",id:"class-mapillarymodelsgeojsongeometrygeometry-dict",children:[]},{value:"class mapillary.models.geojson.Properties(*properties, **kwargs)",id:"class-mapillarymodelsgeojsonpropertiesproperties-kwargs",children:[]},{value:"Module contents",id:"module-contents",children:[{value:"mapillary.models.<strong>init</strong>",id:"mapillarymodelsinit",children:[]}]}],s={toc:i};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"mapillarymodelsgeojson"},"mapillary.models.geojson"),(0,l.kt)("p",null,"This module contains the class implementation for the geojson"),(0,l.kt)("p",null,"For more information about the API, please check out\n",(0,l.kt)("a",{parentName:"p",href:"https://www.mapillary.com/developer/api-documentation/"},"https://www.mapillary.com/developer/api-documentation/"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copyright: (c) 2021 Facebook")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"License: MIT LICENSE")),(0,l.kt)("h3",{id:"class-mapillarymodelsgeojsoncoordinateslongitude-float-latitude-float"},"class mapillary.models.geojson.Coordinates(longitude: float, latitude: float)"),(0,l.kt)("p",null,"Bases: ",(0,l.kt)("inlineCode",{parentName:"p"},"object")),(0,l.kt)("p",null,"Representation for the coordinates in a geometry for a FeatureCollection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"longitude")," (",(0,l.kt)("em",{parentName:"li"},"float"),") \u2013 The longitude of the coordinate set")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"* **latitude** (*float*) \u2013 The latitude of the coordinate set\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Raises")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"InvalidOptionError")," \u2013 Raised when invalid data types are passed to the coordinate set"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A class representation of the Coordinates set"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  mapillary.models.geojson.Coordinates"))),(0,l.kt)("h4",{id:"to_dict"},"to_dict()"),(0,l.kt)("p",null,"Return the dictionary representation of the Coordinates"),(0,l.kt)("h4",{id:"to_list"},"to_list()"),(0,l.kt)("p",null,"Return the list representation of the Coordinates"),(0,l.kt)("h3",{id:"class-mapillarymodelsgeojsonfeaturefeature-dict"},"class mapillary.models.geojson.Feature(feature: dict)"),(0,l.kt)("p",null,"Bases: ",(0,l.kt)("inlineCode",{parentName:"p"},"object")),(0,l.kt)("p",null,"Representation for a feature in a feature list"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"feature")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 The GeoJSON as the input"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Raises")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"InvalidOptionError")," \u2013 Raised when the geojson passed is the invalid type - not a dict"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A class representation of the model"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  mapillary.models.geojson.Feature"))),(0,l.kt)("h4",{id:"to_dict-1"},"to_dict()"),(0,l.kt)("p",null,"Return the dictionary representation of the Feature"),(0,l.kt)("h3",{id:"class-mapillarymodelsgeojsongeojsongeojson-dict"},"class mapillary.models.geojson.GeoJSON(geojson: dict)"),(0,l.kt)("p",null,"Bases: ",(0,l.kt)("inlineCode",{parentName:"p"},"object")),(0,l.kt)("p",null,"Representation for a geojson"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"geojson")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 The GeoJSON as the input"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Raises")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"InvalidOptionError")," \u2013 Raised when the geojson passed is the invalid type - not a dict"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A class representation of the model"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  mapillary.models.geojson.GeoJSON"))),(0,l.kt)("p",null,"Usage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},">>> import mapillary as mly\n>>> from models.geojson import GeoJSON\n>>> mly.interface.set_access_token('MLY|XXX')\n>>> data = mly.interface.get_image_close_to(longitude=31, latitude=31)\n>>> geojson = GeoJSON(geojson=data)\n>>> type(geojson)\n... <class 'mapillary.models.geojson.GeoJSON'>\n>>> type(geojson.type)\n... <class 'str'>\n>>> type(geojson.features)\n... <class 'list'>\n>>> type(geojson.features[0])\n... <class 'mapillary.models.geojson.Feature'>\n>>> type(geojson.features[0].type)\n... <class 'str'>\n>>> type(geojson.features[0].geometry)\n... <class 'mapillary.models.geojson.Geometry'>\n>>> type(geojson.features[0].geometry.type)\n... <class 'str'>\n>>> type(geojson.features[0].geometry.coordinates)\n... <class 'list'>\n>>> type(geojson.features[0].properties)\n... <class 'mapillary.models.geojson.Properties'>\n>>> type(geojson.features[0].properties.captured_at)\n... <class 'int'>\n>>> type(geojson.features[0].properties.is_pano)\n... <class 'str'>\n")),(0,l.kt)("h4",{id:"append_featurefeature_inputs-dict"},"append_feature(feature_inputs: dict)"),(0,l.kt)("p",null,"Given a feature dictionary, append it to the GeoJSON object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"feature_inputs")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 A feature as dict"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  None"))),(0,l.kt)("h4",{id:"append_featuresfeatures-list"},"append_features(features: list)"),(0,l.kt)("p",null,"Given a feature list, append it to the GeoJSON object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"features")," (",(0,l.kt)("em",{parentName:"p"},"list"),") \u2013 A feature list"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  None"))),(0,l.kt)("h4",{id:"encode"},"encode()"),(0,l.kt)("p",null,"Serializes the GeoJSON object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  Serialized GeoJSON"))),(0,l.kt)("h4",{id:"to_dict-2"},"to_dict()"),(0,l.kt)("p",null,"Return the dict format representation of the GeoJSON"),(0,l.kt)("h3",{id:"class-mapillarymodelsgeojsongeometrygeometry-dict"},"class mapillary.models.geojson.Geometry(geometry: dict)"),(0,l.kt)("p",null,"Bases: ",(0,l.kt)("inlineCode",{parentName:"p"},"object")),(0,l.kt)("p",null,"Representation for the geometry in a GeoJSON"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"geometry")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 The geometry as the input"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Raises")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"InvalidOptionError")," \u2013 Raised when the geometry passed is the invalid type - not a dict"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A class representation of the model"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  mapillary.models.geojson.Geometry"))),(0,l.kt)("h4",{id:"to_dict-3"},"to_dict()"),(0,l.kt)("p",null,"Return dictionary representation of the geometry"),(0,l.kt)("h3",{id:"class-mapillarymodelsgeojsonpropertiesproperties-kwargs"},"class mapillary.models.geojson.Properties(","*","properties, ","*","*","kwargs)"),(0,l.kt)("p",null,"Bases: ",(0,l.kt)("inlineCode",{parentName:"p"},"object")),(0,l.kt)("p",null,"Representation for the properties in a GeoJSON"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Parameters")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"properties")," (",(0,l.kt)("em",{parentName:"p"},"dict"),") \u2013 The properties as the input"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Raises")),(0,l.kt)("p",{parentName:"li"},"  ",(0,l.kt)("strong",{parentName:"p"},"InvalidOptionError")," \u2013 Raised when the geojson passed is the invalid type - not a dict"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Returns")),(0,l.kt)("p",{parentName:"li"},"  A class representation of the model"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Return type")),(0,l.kt)("p",{parentName:"li"},"  mapillary.models.geojson.Properties"))),(0,l.kt)("h4",{id:"to_dict-4"},"to_dict()"),(0,l.kt)("p",null,"Return the dictionary representation of the Properties"),(0,l.kt)("h2",{id:"module-contents"},"Module contents"),(0,l.kt)("h3",{id:"mapillarymodelsinit"},"mapillary.models.",(0,l.kt)("strong",{parentName:"h3"},"init")),(0,l.kt)("p",null,"This package contains the class representations of logic within the Mapillary Python SDK."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Copyright: (c) 2021 Facebook")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"License: MIT LICENSE")))}m.isMDXComponent=!0}}]);