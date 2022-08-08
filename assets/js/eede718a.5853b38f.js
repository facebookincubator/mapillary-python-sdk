"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2428],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(n),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return n?a.createElement(c,i(i({ref:e},m),{},{components:n})):a.createElement(c,i({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2262:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={"sidebar position":5},i=void 0,o={unversionedId:"mapillary.utils/mapillary.utils.format",id:"mapillary.utils/mapillary.utils.format",isDocsHomePage:!1,title:"mapillary.utils.format",description:"mapillary.utils.format",source:"@site/docs/mapillary.utils/mapillary.utils.format.md",sourceDirName:"mapillary.utils",slug:"/mapillary.utils/mapillary.utils.format",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils.format",editUrl:"https://github.com/mapillary/mapillary-python-sdk/tree/main/docs/docs/mapillary.utils/mapillary.utils.format.md",tags:[],version:"current",frontMatter:{"sidebar position":5},sidebar:"tutorialSidebar",previous:{title:"mapillary.utils.filter",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils.filter"},next:{title:"mapillary.utils",permalink:"/mapillary-python-sdk/docs/mapillary.utils/mapillary.utils"}},p=[{value:"mapillary.utils.format",id:"mapillaryutilsformat",children:[]},{value:"mapillary.utils.format.coord_or_list_to_dict(data: UnionCoordinates, list, dict)",id:"mapillaryutilsformatcoord_or_list_to_dictdata-unioncoordinates-list-dict",children:[]},{value:"mapillary.utils.format.decode_pixel_geometry(base64_string: str, normalized: bool = True, width: int = 4096, height: int = 4096)",id:"mapillaryutilsformatdecode_pixel_geometrybase64_string-str-normalized-bool--true-width-int--4096-height-int--4096",children:[]},{value:"mapillary.utils.format.decode_pixel_geometry_in_geojson(geojson: Uniondict, GeoJSON, normalized: bool = True, width: int = 4096, height: int = 4096)",id:"mapillaryutilsformatdecode_pixel_geometry_in_geojsongeojson-uniondict-geojson-normalized-bool--true-width-int--4096-height-int--4096",children:[]},{value:"mapillary.utils.format.detection_features_to_geojson(feature_list: list)",id:"mapillaryutilsformatdetection_features_to_geojsonfeature_list-list",children:[]},{value:"mapillary.utils.format.feature_to_geojson(json_data: dict)",id:"mapillaryutilsformatfeature_to_geojsonjson_data-dict",children:[]},{value:"mapillary.utils.format.flatten<em>dictionary(data: Uniondict, MutableMapping, parent_key: str = &#39;&#39;, sep: str = &#39;</em>&#39;)",id:"mapillaryutilsformatflattendictionarydata-uniondict-mutablemapping-parent_key-str---sep-str--",children:[]},{value:"mapillary.utils.format.flatten_geojson(geojson: dict)",id:"mapillaryutilsformatflatten_geojsongeojson-dict",children:[]},{value:"mapillary.utils.format.geojson_to_features_list(json_data: dict)",id:"mapillaryutilsformatgeojson_to_features_listjson_data-dict",children:[]},{value:"mapillary.utils.format.geojson_to_polygon(geojson: dict)",id:"mapillaryutilsformatgeojson_to_polygongeojson-dict",children:[]},{value:"mapillary.utils.format.join_geojson_with_keys(geojson_src: dict, geojson_src_key: str, geojson_dest: dict, geojson_dest_key: str)",id:"mapillaryutilsformatjoin_geojson_with_keysgeojson_src-dict-geojson_src_key-str-geojson_dest-dict-geojson_dest_key-str",children:[]},{value:"mapillary.utils.format.merged_features_list_to_geojson(features_list: list)",id:"mapillaryutilsformatmerged_features_list_to_geojsonfeatures_list-list",children:[]},{value:"mapillary.utils.format.normalize_list(coordinates: list, width: int = 4096, height: int = 4096)",id:"mapillaryutilsformatnormalize_listcoordinates-list-width-int--4096-height-int--4096",children:[]}],s={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"mapillaryutilsformat"},"mapillary.utils.format"),(0,r.kt)("p",null,"This module deals with converting data to and from different file formats."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copyright: (c) 2021 Facebook")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"License: MIT LICENSE")),(0,r.kt)("h3",{id:"mapillaryutilsformatcoord_or_list_to_dictdata-unioncoordinates-list-dict"},"mapillary.utils.format.coord_or_list_to_dict(data: Union","[Coordinates, list, dict]",")"),(0,r.kt)("p",null,"Converts a Coordinates object or a coordinates list to a dictionary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"data")," (",(0,r.kt)("em",{parentName:"p"},"Union",(0,r.kt)("strong",{parentName:"em"},"["),"Coordinates",(0,r.kt)("strong",{parentName:"em"},", "),"list**]"),") \u2013 The coordinates to convert"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  The dictionary representation of the coordinates"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("h3",{id:"mapillaryutilsformatdecode_pixel_geometrybase64_string-str-normalized-bool--true-width-int--4096-height-int--4096"},"mapillary.utils.format.decode_pixel_geometry(base64_string: str, normalized: bool = True, width: int = 4096, height: int = 4096)"),(0,r.kt)("p",null,"Decodes the pixel geometry, and return the coordinates, which can be specified to be\nnormalized"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"base64_string")," (",(0,r.kt)("em",{parentName:"li"},"str"),") \u2013 The pixel geometry encoded as a vector tile")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **normalized** (*bool*) \u2013 If normalization is required, defaults to True\n\n\n* **width** (*int*) \u2013 The width of the pixel geometry, defaults to 4096\n\n\n* **height** (*int*) \u2013 The height of the pixel geometry, defaults to 4096\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  A dictionary with coordinates as key, and value as the normalized list"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  list"))),(0,r.kt)("h3",{id:"mapillaryutilsformatdecode_pixel_geometry_in_geojsongeojson-uniondict-geojson-normalized-bool--true-width-int--4096-height-int--4096"},"mapillary.utils.format.decode_pixel_geometry_in_geojson(geojson: Union","[dict, GeoJSON]",", normalized: bool = True, width: int = 4096, height: int = 4096)"),(0,r.kt)("p",null,"Decodes all the pixel_geometry"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"geojson")," \u2013 The GeoJSON representation to be decoded")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **normalized** (*bool*) \u2013 If normalization is required, defaults to True\n\n\n* **width** (*int*) \u2013 The width of the pixel geometry, defaults to 4096\n\n\n* **height** (*int*) \u2013 The height of the pixel geometry, defaults to 4096\n")),(0,r.kt)("h3",{id:"mapillaryutilsformatdetection_features_to_geojsonfeature_list-list"},"mapillary.utils.format.detection_features_to_geojson(feature_list: list)"),(0,r.kt)("p",null,"Converts a preprocessed list (i.e, features from the detections of either images or\nmap_features from multiple segments) into a fully featured GeoJSON"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"feature_list")," (",(0,r.kt)("em",{parentName:"p"},"list"),") \u2013 A list of processed features merged from different segments within a\ndetection"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  GeoJSON formatted as expected in a detection format"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> # From\n>>> [{'created_at': '2021-05-20T17:49:01+0000', 'geometry':\n... 'GjUKBm1weS1vchIVEgIAABgDIg0JhiekKBoqAABKKQAPGgR0eXBlIgkKB3BvbHlnb24ogCB4AQ==',\n... 'image': {'geometry': {'type': 'Point', 'coordinates': [-97.743279722222,\n... 30.270651388889]}, 'id': '1933525276802129'}, 'value': 'regulatory--no-parking--g2',\n... 'id': '1942105415944115'}, ... ]\n>>> # To\n>>> {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry':\n... {'type': 'Point', 'coordinates': [-97.743279722222, 30.270651388889]}, 'properties': {\n... 'image_id': '1933525276802129', 'created_at': '2021-05-20T17:49:01+0000',\n... 'pixel_geometry':\n... 'GjUKBm1weS1vchIVEgIAABgDIg0JhiekKBoqAABKKQAPGgR0eXBlIgkKB3BvbHlnb24ogCB4AQ==',\n... 'value': 'regulatory--no-parking--g2', 'id': '1942105415944115' } }, ... ]}\n")),(0,r.kt)("h3",{id:"mapillaryutilsformatfeature_to_geojsonjson_data-dict"},"mapillary.utils.format.feature_to_geojson(json_data: dict)"),(0,r.kt)("p",null,"Converts feature into a GeoJSON, returns output"),(0,r.kt)("p",null,"From:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> {'geometry': {'type': 'Point', 'coordinates': [30.003755665554, 30.985948744314]},\n... 'id':'506566177256016'}\n")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry': {'type':\n... 'Point','coordinates': [30.98594605922699, 30.003757307208872]}, 'properties': {}}]}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"json_data")," (",(0,r.kt)("em",{parentName:"p"},"dict"),") \u2013 The feature as a JSON"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  The formatted GeoJSON"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("h3",{id:"mapillaryutilsformatflattendictionarydata-uniondict-mutablemapping-parent_key-str---sep-str--"},"mapillary.utils.format.flatten",(0,r.kt)("em",{parentName:"h3"},"dictionary(data: Union","[dict, MutableMapping]",", parent_key: str = '', sep: str = '"),"')"),(0,r.kt)("p",null,"Flattens dictionaries"),(0,r.kt)("p",null,"From:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> {'mpy-or': {'extent': 4096, 'version': 2, 'features': [{'geometry': {'type':\n... 'Polygon', 'coordinates': [[[2402, 2776], [2408, 2776]]]}, 'properties': {}, 'id': 1,\n... 'type': 3}]}}\n")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> {'mpy-or_extent': 4096, 'mpy-or_version': 2, 'mpy-or_features': [{'geometry':\n... {'type':'Polygon', 'coordinates': [[[2402, 2776], [2408, 2776]]]}, 'properties':\n... {}, 'id': 1,'type': 3}]}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data")," (",(0,r.kt)("em",{parentName:"li"},"dict"),") \u2013 The dictionary itself")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **parent_key** (*str*) \u2013 The root key to start from\n\n\n* **sep** (*str*) \u2013 The separator\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  A flattened dictionary"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("h3",{id:"mapillaryutilsformatflatten_geojsongeojson-dict"},"mapillary.utils.format.flatten_geojson(geojson: dict)"),(0,r.kt)("p",null,"Flattens a GeoJSON dictionary to a dictionary with only the relevant keys.\nThis is useful for writing to a CSV file."),(0,r.kt)("p",null,"Output Structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'>>> {\n...     "geometry": {\n...         "type": "Point",\n...         "coordinates": [71.45343, 12.523432]\n...     },\n...     "first_seen_at": "UNIX_TIMESTAMP",\n...     "last_seen_at": "UNIX_TIMESTAMP",\n...     "value": "regulatory--no-parking--g2",\n...     "id": "FEATURE_ID",\n...     "image_id": "IMAGE_ID"\n... }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"geojson")," (",(0,r.kt)("em",{parentName:"p"},"dict"),") \u2013 The GeoJSON to flatten"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  A flattened GeoJSON"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("p",null,"Note,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1. The geometry key is always present in the output\n\n\n2. The properties are flattened to the following keys:\n\n\n        * \u201cfirst_seen_at\u201d   (optional)\n\n\n        * \u201clast_seen_at\u201d    (optional)\n\n\n        * \u201cvalue\u201d           (optional)\n\n\n        * \u201cid\u201d              (required)\n\n\n        * \u201cimage_id\u201d        (optional)\n\n\n        * etc.\n\n\n3. If the \u2018geometry\\` type is Point, two more properties will be added:\n\n\n        * \u201clongitude\u201d\n\n\n        * \u201clatitude\u201d\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"TODO"),": Further testing needed with different geometries, e.g., Polygon, etc."),(0,r.kt)("h3",{id:"mapillaryutilsformatgeojson_to_features_listjson_data-dict"},"mapillary.utils.format.geojson_to_features_list(json_data: dict)"),(0,r.kt)("p",null,"Converts a decoded output GeoJSON to a list of feature objects"),(0,r.kt)("p",null,"The purpose of this formatting utility is to obtain a list of individual features for\ndecoded tiles that can be later extended to the output GeoJSON"),(0,r.kt)("p",null,"From:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry':\n... {'type': 'Point','coordinates': [30.98594605922699, 30.003757307208872]},\n... 'properties': {}}]}\n")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> [{'type': 'Feature', 'geometry': {'type': 'Point',\n... 'coordinates': [30.98594605922699, 30.003757307208872]}, 'properties': {}}]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"json_data")," (",(0,r.kt)("em",{parentName:"p"},"dict"),") \u2013 The given json data"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  The feature list"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  list"))),(0,r.kt)("h3",{id:"mapillaryutilsformatgeojson_to_polygongeojson-dict"},"mapillary.utils.format.geojson_to_polygon(geojson: dict)"),(0,r.kt)("p",null,"Converts a GeoJSON into a collection of only geometry coordinates for the purpose of\nchecking whether a given coordinate point exists within a shapely polygon"),(0,r.kt)("p",null,"From:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'>>> {\n...     "type": "FeatureCollection",\n...     "features": [\n...         {\n...             "geometry": {\n...                 "coordinates": [\n...                     -80.13069927692413,\n...                     25.78523699486192\n...                 ],\n...                 "type": "Point"\n...             },\n...             "properties": {\n...                 "first_seen_at": 1422984049000,\n...                 "id": 481978503020355,\n...                 "last_seen_at": 1422984049000,\n...                 "value": "object--street-light"\n...             },\n...             "type": "Feature"\n...         },\n...         {\n...             "geometry": {\n...                 "coordinates": [\n...                     -80.13210475444794,\n...                     25.78362849816017\n...                 ],\n...                 "type": "Point"\n...             },\n...             "properties": {\n...                 "first_seen_at": 1423228306666,\n...                 "id": 252538103315239,\n...                 "last_seen_at": 1423228306666,\n...                 "value": "object--street-light"\n...             },\n...             "type": "Feature"\n...         },\n...         ...\n...     ]\n... }\n')),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'>>> {\n... "type": "FeatureCollection",\n... "features": [\n...         {\n...             "type": "Feature",\n...             "properties": {},\n...             "geometry": {\n...                 "type": "Polygon",\n...                 "coordinates": [\n...                     [\n...                         [\n...                             7.2564697265625,\n...                             43.69716905314008\n...                         ],\n...                         [\n...                             7.27020263671875,\n...                             43.69419030566581\n...                         ],\n...                         ...\n...                     ]\n...                 ]\n...             }\n...         }\n...     ]\n... }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"geojson")," (",(0,r.kt)("em",{parentName:"p"},"dict"),") \u2013 The input GeoJSON"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  A geojson of the format mentioned under \u2018To\u2019"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("h3",{id:"mapillaryutilsformatjoin_geojson_with_keysgeojson_src-dict-geojson_src_key-str-geojson_dest-dict-geojson_dest_key-str"},"mapillary.utils.format.join_geojson_with_keys(geojson_src: dict, geojson_src_key: str, geojson_dest: dict, geojson_dest_key: str)"),(0,r.kt)("p",null,"Combines two GeoJSONS based on the similarity of their specified keys, similar to\nthe SQL join functionality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"geojson_src")," (",(0,r.kt)("em",{parentName:"li"},"dict"),") \u2013 The starting GeoJSO source")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **geojson_src_key** (*str*) \u2013 The key in properties specified for the GeoJSON source\n\n\n* **geojson_dest** (*dict*) \u2013 The GeoJSON to merge into\n\n\n* **geojson_dest_key** (*dict*) \u2013 The key in properties specified for the GeoJSON to merge into\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  The merged GeoJSON"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  dict"))),(0,r.kt)("p",null,"Usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> join_geojson_with_keys(\n...     geojson_src=geojson_src,\n...     geojson_src_key='id',\n...     geojson_dest=geojson_dest,\n...     geojson_dest_key='id'\n... )\n")),(0,r.kt)("h3",{id:"mapillaryutilsformatmerged_features_list_to_geojsonfeatures_list-list"},"mapillary.utils.format.merged_features_list_to_geojson(features_list: list)"),(0,r.kt)("p",null,"Converts a processed features list (i.e. a features list with all the needed features merged\nfrom multiple tiles) into a fully-featured GeoJSON"),(0,r.kt)("p",null,"From:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> [{'type': 'Feature', 'geometry': {'type': 'Point',\n... 'coordinates': [30.98594605922699, 30.003757307208872]}, 'properties': {}}, ...]\n")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> {'type': 'FeatureCollection', 'features': [{'type': 'Feature', 'geometry':\n... {'type': 'Point','coordinates': [30.98594605922699, 30.003757307208872]},\n... 'properties': {}}, ...]}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"features_list")," (",(0,r.kt)("em",{parentName:"p"},"list"),") \u2013 a list of processed features merged from different tiles within a bbox"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  GeoJSON string formatted with all the extra commas removed."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  str"))),(0,r.kt)("h3",{id:"mapillaryutilsformatnormalize_listcoordinates-list-width-int--4096-height-int--4096"},"mapillary.utils.format.normalize_list(coordinates: list, width: int = 4096, height: int = 4096)"),(0,r.kt)("p",null,"Normalizes a list of coordinates with the respective width and the height"),(0,r.kt)("p",null,"From:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> [[[2402, 2776], [2408, 2776]]]\n")),(0,r.kt)("p",null,"To:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> normalize_list(coordinates)\n... # [[[0.58642578125, 0.677734375], [0.587890625, 0.677734375]]]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"coordinates")," (",(0,r.kt)("em",{parentName:"li"},"list"),") \u2013 The coordinate list to normalize")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"* **width** (*int*) \u2013 The width of the coordinates to normalize with, defaults to 4096\n\n\n* **height** (*int*) \u2013 The height of the coordinates to normalize with, defaults to 4096\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns")),(0,r.kt)("p",{parentName:"li"},"  The normalized list"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Return type")),(0,r.kt)("p",{parentName:"li"},"  list"))))}m.isMDXComponent=!0}}]);