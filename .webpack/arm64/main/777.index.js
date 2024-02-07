"use strict";exports.id=777,exports.ids=[777,873,363,862],exports.modules={9197:(e,t,n)=>{n.r(t),n.d(t,{formatElapsedTime:()=>a,getDocumentIndexId:()=>i,getDocumentProperties:()=>o.OX,getInnerType:()=>p,getVectorSize:()=>m,isArrayType:()=>f,isGeoPointType:()=>l,isVectorType:()=>d,validateSchema:()=>s});var r=n(5815),o=n(8070);async function a(e){return{raw:Number(e),formatted:await(0,o.Ed)(e)}}async function i(e){if(e.id){if("string"!=typeof e.id)throw(0,r.T)("DOCUMENT_ID_MUST_BE_STRING",typeof e.id);return e.id}return await(0,o.EL)()}async function s(e,t){for(const[n,o]of Object.entries(t)){const t=e[n];if(void 0!==t&&("geopoint"!==o||"object"!=typeof t||"number"!=typeof t.lon||"number"!=typeof t.lat)&&("enum"!==o||"string"!=typeof t&&"number"!=typeof t))if("enum[]"===o&&Array.isArray(t)){const e=t.length;for(let r=0;r<e;r++)if("string"!=typeof t[r]&&"number"!=typeof t[r])return n+"."+r}else if(d(o)){const e=m(o);if(!Array.isArray(t)||t.length!==e)throw(0,r.T)("INVALID_INPUT_VECTOR",n,e,t.length)}else if(f(o)){if(!Array.isArray(t))return n;const e=p(o),r=t.length;for(let o=0;o<r;o++)if(typeof t[o]!==e)return n+"."+o}else if("object"!=typeof o){if(typeof t!==o)return n}else{if(!t||"object"!=typeof t)return n;const e=await s(t,o);if(e)return n+"."+e}}}const c={string:!1,number:!1,boolean:!1,enum:!1,geopoint:!1,"string[]":!0,"number[]":!0,"boolean[]":!0,"enum[]":!0},u={"string[]":"string","number[]":"number","boolean[]":"boolean","enum[]":"enum"};function l(e){return"geopoint"===e}function d(e){return"string"==typeof e&&/^vector\[\d+\]$/.test(e)}function f(e){return"string"==typeof e&&c[e]}function p(e){return u[e]}function m(e){const t=Number(e.slice(7,-1));switch(!0){case isNaN(t):throw(0,r.T)("INVALID_VECTOR_VALUE",e);case t<=0:throw(0,r.T)("INVALID_VECTOR_SIZE",e);default:return t}}},7220:(e,t,n)=>{n.d(t,{RI:()=>o,ZI:()=>i,et:()=>c,mX:()=>s,me:()=>r,rf:()=>a});const r=["tokenizer","index","documentsStore","sorter"],o=["validateSchema","getDocumentIndexId","getDocumentProperties","formatElapsedTime"];async function a(e,t,n,r){const o=e.length;for(let a=0;a<o;a++)await e[a](t,n,r)}async function i(e,t,n){const r=e.length;for(let o=0;o<r;o++)await e[o](t,n)}async function s(e,t,n,r,o){const a=e.length;for(let i=0;i<a;i++)await e[i](t,n,r,o)}async function c(e,t,n,r){const o=e.length;for(let a=0;a<o;a++)await e[a](t,n,r)}},3714:(e,t,n)=>{function r(){return{idToInternalId:new Map,internalIdToId:[],save:o,load:a}}function o(e){return{internalIdToId:e.internalIdToId}}function a(e,t){const{internalIdToId:n}=t;e.internalDocumentIDStore.idToInternalId.clear(),e.internalDocumentIDStore.internalIdToId=[];for(let t=0;t<n.length;t++)e.internalDocumentIDStore.idToInternalId.set(n[t],t+1),e.internalDocumentIDStore.internalIdToId.push(n[t])}function i(e,t){if("string"==typeof t){const n=e.idToInternalId.get(t);if(n)return n;const r=e.idToInternalId.size+1;return e.idToInternalId.set(t,r),e.internalIdToId.push(t),r}return t>e.internalIdToId.length?i(e,t.toString()):t}function s(e,t){if(e.internalIdToId.length<t)throw new Error(`Invalid internalId ${t}`);return e.internalIdToId[t-1]}n.d(t,{HM:()=>i,K7:()=>s,Lo:()=>r})},9484:(e,t,n)=>{n.d(t,{v:()=>s,_:()=>c});const r=Symbol("orama.insertions"),o=Symbol("orama.removals");var a;const i=(null===(a=globalThis.process)||void 0===a?void 0:a.emitWarning)??function(e,t){console.warn(`[WARNING] [${t.code}] ${e}`)};function s(e){"number"!=typeof e[r]&&(queueMicrotask((()=>{e[r]=void 0})),e[r]=0),e[r]>1e3?(i("Orama's insert operation is synchronous. Please avoid inserting a large number of document in a single operation in order not to block the main thread or, in alternative, please use insertMultiple.",{code:"ORAMA0001"}),e[r]=-1):e[r]>=0&&e[r]++}function c(e){"number"!=typeof e[o]&&(queueMicrotask((()=>{e[o]=void 0})),e[o]=0),e[o]>1e3?(i("Orama's remove operation is synchronous. Please avoid removing a large number of document in a single operation in order not to block the main thread, in alternative, please use updateMultiple.",{code:"ORAMA0002"}),e[o]=-1):e[o]>=0&&e[o]++}},2084:(e,t,n)=>{n.d(t,{E7:()=>o,zr:()=>r});const r={dutch:/[^A-Za-zàèéìòóù0-9_'-]+/gim,english:/[^A-Za-zàèéìòóù0-9_'-]+/gim,french:/[^a-z0-9äâàéèëêïîöôùüûœç-]+/gim,italian:/[^A-Za-zàèéìòóù0-9_'-]+/gim,norwegian:/[^a-z0-9_æøåÆØÅäÄöÖüÜ]+/gim,portuguese:/[^a-z0-9à-úÀ-Ú]/gim,russian:/[^a-z0-9а-яА-ЯёЁ]+/gim,spanish:/[^a-z0-9A-Zá-úÁ-ÚñÑüÜ]+/gim,swedish:/[^a-z0-9_åÅäÄöÖüÜ-]+/gim,german:/[^a-z0-9A-ZäöüÄÖÜß]+/gim,finnish:/[^a-z0-9äöÄÖ]+/gim,danish:/[^a-z0-9æøåÆØÅ]+/gim,hungarian:/[^a-z0-9áéíóöőúüűÁÉÍÓÖŐÚÜŰ]+/gim,romanian:/[^a-z0-9ăâîșțĂÂÎȘȚ]+/gim,serbian:/[^a-z0-9čćžšđČĆŽŠĐ]+/gim,turkish:/[^a-z0-9çÇğĞıİöÖşŞüÜ]+/gim,lithuanian:/[^a-z0-9ąčęėįšųūžĄČĘĖĮŠŲŪŽ]+/gim,arabic:/[^a-z0-9أ-ي]+/gim,nepali:/[^a-z0-9अ-ह]+/gim,irish:/[^a-z0-9áéíóúÁÉÍÓÚ]+/gim,indian:/[^a-z0-9अ-ह]+/gim,armenian:/[^a-z0-9ա-ֆ]+/gim,greek:/[^a-z0-9α-ωά-ώ]+/gim,indonesian:/[^a-z0-9]+/gim,ukrainian:/[^a-z0-9а-яА-ЯіїєІЇЄ]+/gim,slovenian:/[^a-z0-9čžšČŽŠ]+/gim,bulgarian:/[^a-z0-9а-яА-Я]+/gim,tamil:/[^a-z0-9அ-ஹ]+/gim,sanskrit:/[^a-z0-9A-Zāīūṛḷṃṁḥśṣṭḍṇṅñḻḹṝ]+/gim},o=Object.keys({arabic:"ar",armenian:"am",bulgarian:"bg",danish:"dk",dutch:"nl",english:"en",finnish:"fi",french:"fr",german:"de",greek:"gr",hungarian:"hu",indian:"in",indonesian:"id",irish:"ie",italian:"it",lithuanian:"lt",nepali:"np",norwegian:"no",portuguese:"pt",romanian:"ro",russian:"ru",serbian:"rs",slovenian:"ru",spanish:"es",swedish:"se",tamil:"ta",turkish:"tr",ukrainian:"uk",sanskrit:"sk"})},5815:(e,t,n)=>{n.d(t,{T:()=>i});var r=n(2084),o=n(8070);const a={NO_LANGUAGE_WITH_CUSTOM_TOKENIZER:"Do not pass the language option to create when using a custom tokenizer.",LANGUAGE_NOT_SUPPORTED:`Language "%s" is not supported.\nSupported languages are:\n - ${r.E7.join("\n - ")}`,INVALID_STEMMER_FUNCTION_TYPE:"config.stemmer property must be a function.",MISSING_STEMMER:'As of version 1.0.0 @orama/orama does not ship non English stemmers by default. To solve this, please explicitly import and specify the "%s" stemmer from the package @orama/stemmers. See https://docs.oramasearch.com/open-source/text-analysis/stemming for more information.',CUSTOM_STOP_WORDS_MUST_BE_FUNCTION_OR_ARRAY:"Custom stop words array must only contain strings.",UNSUPPORTED_COMPONENT:'Unsupported component "%s".',COMPONENT_MUST_BE_FUNCTION:'The component "%s" must be a function.',COMPONENT_MUST_BE_FUNCTION_OR_ARRAY_FUNCTIONS:'The component "%s" must be a function or an array of functions.',INVALID_SCHEMA_TYPE:'Unsupported schema type "%s" at "%s". Expected "string", "boolean" or "number" or array of them.',DOCUMENT_ID_MUST_BE_STRING:'Document id must be of type "string". Got "%s" instead.',DOCUMENT_ALREADY_EXISTS:'A document with id "%s" already exists.',DOCUMENT_DOES_NOT_EXIST:'A document with id "%s" does not exists.',MISSING_DOCUMENT_PROPERTY:'Missing searchable property "%s".',INVALID_DOCUMENT_PROPERTY:'Invalid document property "%s": expected "%s", got "%s"',UNKNOWN_INDEX:'Invalid property name "%s". Expected a wildcard string ("*") or array containing one of the following properties: %s',INVALID_BOOST_VALUE:"Boost value must be a number greater than, or less than 0.",INVALID_FILTER_OPERATION:"You can only use one operation per filter, you requested %d.",SCHEMA_VALIDATION_FAILURE:'Cannot insert document due schema validation failure on "%s" property.',INVALID_SORT_SCHEMA_TYPE:'Unsupported sort schema type "%s" at "%s". Expected "string" or "number".',CANNOT_SORT_BY_ARRAY:'Cannot configure sort for "%s" because it is an array (%s).',UNABLE_TO_SORT_ON_UNKNOWN_FIELD:'Unable to sort on unknown field "%s". Allowed fields: %s',SORT_DISABLED:"Sort is disabled. Please read the documentation at https://docs.oramasearch for more information.",UNKNOWN_GROUP_BY_PROPERTY:'Unknown groupBy property "%s".',INVALID_GROUP_BY_PROPERTY:'Invalid groupBy property "%s". Allowed types: "%s", but given "%s".',UNKNOWN_FILTER_PROPERTY:'Unknown filter property "%s".',INVALID_VECTOR_SIZE:'Vector size must be a number greater than 0. Got "%s" instead.',INVALID_VECTOR_VALUE:'Vector value must be a number greater than 0. Got "%s" instead.',INVALID_INPUT_VECTOR:'Property "%s" was declared as a %s-dimensional vector, but got a %s-dimensional vector instead.\nInput vectors must be of the size declared in the schema, as calculating similarity between vectors of different sizes can lead to unexpected results.',WRONG_SEARCH_PROPERTY_TYPE:'Property "%s" is not searchable. Only "string" properties are searchable.',FACET_NOT_SUPPORTED:'Facet doens\'t support the type "%s".',INVALID_DISTANCE_SUFFIX:'Invalid distance suffix "%s". Valid suffixes are: cm, m, km, mi, yd, ft.',INVALID_SEARCH_MODE:'Invalid search mode "%s". Valid modes are: "fulltext", "vector", "hybrid".',MISSING_VECTOR_AND_SECURE_PROXY:"No vector was provided and no secure proxy was configured. Please provide a vector or configure an Orama Secure Proxy to perform hybrid search.",MISSING_TERM:'"term" is a required parameter when performing hybrid search. Please provide a search term.',INVALID_VECTOR_INPUT:'Invalid "vector" property. Expected an object with "value" and "property" properties, but got "%s" instead.',PLUGIN_CRASHED:"A plugin crashed during initialization. Please check the error message for more information:"};function i(e,...t){const n=new Error((0,o.gB)(a[e]??`Unsupported Orama Error code: ${e}`,...t));return n.code=e,"captureStackTrace"in Error.prototype&&Error.captureStackTrace(n),n}},7873:(e,t,n)=>{n.r(t),n.d(t,{innerInsertMultiple:()=>u,insert:()=>s,insertMultiple:()=>c});var r=n(9197),o=n(7220),a=n(9484),i=n(5815);async function s(e,t,n,s){const c=await e.validateSchema(t,e.schema);if(c)throw(0,i.T)("SCHEMA_VALIDATION_FAILURE",c);return async function(e,t,n,s){const{index:c,docs:u}=e.data,l=await e.getDocumentIndexId(t);if("string"!=typeof l)throw(0,i.T)("DOCUMENT_ID_MUST_BE_STRING",typeof l);if(!await e.documentsStore.store(u,l,t))throw(0,i.T)("DOCUMENT_ALREADY_EXISTS",l);const d=await e.documentsStore.count(u);s||await(0,o.rf)(e.beforeInsert,e,l,t);const f=await e.index.getSearchableProperties(c),p=await e.index.getSearchablePropertiesWithTypes(c),m=await e.getDocumentProperties(t,f);for(const[e,t]of Object.entries(m)){if(void 0===t)continue;const n=typeof t,o=p[e];if(!((0,r.isGeoPointType)(o)&&"object"==typeof t&&"number"==typeof t.lon&&"number"==typeof t.lat||(0,r.isVectorType)(o)&&Array.isArray(t)||(0,r.isArrayType)(o)&&Array.isArray(t)||!("enum"!==o&&"enum[]"!==o||"string"!==n&&"number"!==n)||n===o))throw(0,i.T)("INVALID_DOCUMENT_PROPERTY",e,o,n)}for(const t of f){var g,I,h,y;const r=m[t];if(void 0===r)continue;const o=p[t];await(null===(I=(g=e.index).beforeInsert)||void 0===I?void 0:I.call(g,e.data.index,t,l,r,o,n,e.tokenizer,d)),await e.index.insert(e.index,e.data.index,t,l,r,o,n,e.tokenizer,d),await(null===(y=(h=e.index).afterInsert)||void 0===y?void 0:y.call(h,e.data.index,t,l,r,o,n,e.tokenizer,d))}const T=await e.sorter.getSortableProperties(e.data.sorting),_=await e.sorter.getSortablePropertiesWithTypes(e.data.sorting),w=await e.getDocumentProperties(t,T);for(const t of T){const r=w[t];if(void 0===r)continue;const o=_[t];await e.sorter.insert(e.data.sorting,t,l,r,o,n)}return s||await(0,o.rf)(e.afterInsert,e,l,t),(0,a.v)(e),l}(e,t,n,s)}async function c(e,t,n,r,a,s){a||await(0,o.ZI)(e.beforeInsertMultiple,e,t);const c=t.length;for(let n=0;n<c;n++){const r=await e.validateSchema(t[n],e.schema);if(r)throw(0,i.T)("SCHEMA_VALIDATION_FAILURE",r)}return u(e,t,n,r,a,s)}async function u(e,t,n,r,a,i){n||(n=1e3),i=i||0;const c=[];return await new Promise(((o,u)=>{let l=0;setTimeout((async function d(){const f=t.slice(l*n,(l+1)*n);if(l++,!f.length)return o();for(const t of f)try{const n=await s(e,t,r,a);c.push(n)}catch(e){u(e)}setTimeout(d,i)}),i)})),a||await(0,o.ZI)(e.afterInsertMultiple,e,t),c}},4363:(e,t,n)=>{n.r(t),n.d(t,{remove:()=>i,removeMultiple:()=>s});var r=n(7220),o=n(3714),a=n(9484);async function i(e,t,n,i){let s=!0;const{index:c,docs:u}=e.data,l=await e.documentsStore.get(u,t);if(!l)return!1;const d=(0,o.K7)(e.internalDocumentIDStore,(0,o.HM)(e.internalDocumentIDStore,t)),f=await e.documentsStore.count(u);i||await(0,r.rf)(e.beforeRemove,e,d);const p=await e.index.getSearchableProperties(c),m=await e.index.getSearchablePropertiesWithTypes(c),g=await e.getDocumentProperties(l,p);for(const r of p){var I,h,y,T;const o=g[r];if(void 0===o)continue;const a=m[r];await(null===(h=(I=e.index).beforeRemove)||void 0===h?void 0:h.call(I,e.data.index,r,d,o,a,n,e.tokenizer,f)),await e.index.remove(e.index,e.data.index,r,t,o,a,n,e.tokenizer,f)||(s=!1),await(null===(T=(y=e.index).afterRemove)||void 0===T?void 0:T.call(y,e.data.index,r,d,o,a,n,e.tokenizer,f))}const _=await e.sorter.getSortableProperties(e.data.sorting),w=await e.getDocumentProperties(l,_);for(const n of _)void 0!==w[n]&&await e.sorter.remove(e.data.sorting,n,t);return i||await(0,r.rf)(e.afterRemove,e,d),await e.documentsStore.remove(e.data.docs,t),(0,a._)(e),s}async function s(e,t,n,a,s){let c=0;n||(n=1e3);const u=s?[]:t.map((t=>(0,o.K7)(e.internalDocumentIDStore,(0,o.HM)(e.internalDocumentIDStore,t))));return s||await(0,r.ZI)(e.beforeRemoveMultiple,e,u),await new Promise(((r,o)=>{let u=0;setTimeout((async function l(){const d=t.slice(u*n,(u+1)*n);if(u++,!d.length)return r();for(const t of d)try{await i(e,t,a,s)&&c++}catch(e){o(e)}setTimeout(l,0)}),0)})),s||await(0,r.ZI)(e.afterRemoveMultiple,e,u),c}},2777:(e,t,n)=>{n.r(t),n.d(t,{update:()=>s,updateMultiple:()=>c});var r=n(7220),o=n(5815),a=n(7873),i=n(4363);async function s(e,t,n,o,s){!s&&e.beforeUpdate&&await(0,r.rf)(e.beforeUpdate,e,t),await(0,i.remove)(e,t,o,s);const c=await(0,a.insert)(e,n,o,s);return!s&&e.afterUpdate&&await(0,r.rf)(e.afterUpdate,e,c),c}async function c(e,t,n,s,c,u){u||await(0,r.ZI)(e.beforeUpdateMultiple,e,t);const l=n.length;for(let t=0;t<l;t++){const r=await e.validateSchema(n[t],e.schema);if(r)throw(0,o.T)("SCHEMA_VALIDATION_FAILURE",r)}await(0,i.removeMultiple)(e,t,s,c,u);const d=await(0,a.innerInsertMultiple)(e,n,s,c,u);return u||await(0,r.ZI)(e.afterUpdateMultiple,e,d),d}},8070:(e,t,n)=>{n.d(t,{EL:()=>h,Ed:()=>g,Mo:()=>S,OX:()=>w,Sf:()=>E,XN:()=>I,XO:()=>T,ZL:()=>N,eg:()=>y,gB:()=>f,hT:()=>d,td:()=>p,wf:()=>_});var r=n(5815);const o=Date.now().toString().slice(5);let a=0;const i=1024,s=BigInt(1e3),c=BigInt(1e6),u=BigInt(1e9),l=65535;function d(e,t){if(t.length<l)Array.prototype.push.apply(e,t);else for(let n=0;n<t.length;n+=l)Array.prototype.push.apply(e,t.slice(n,n+l))}function f(e,...t){return e.replace(/%(?:(?<position>\d+)\$)?(?<width>-?\d*\.?\d*)(?<type>[dfs])/g,(function(...e){const n=e[e.length-1],{width:r,type:o,position:a}=n,i=a?t[Number.parseInt(a)-1]:t.shift(),s=""===r?0:Number.parseInt(r);switch(o){case"d":return i.toString().padStart(s,"0");case"f":{let e=i;const[t,n]=r.split(".").map((e=>Number.parseFloat(e)));return"number"==typeof n&&n>=0&&(e=e.toFixed(n)),"number"==typeof t&&t>=0?e.toString().padStart(s,"0"):e.toString()}case"s":return s<0?i.toString().padEnd(-s," "):i.toString().padStart(s," ");default:return i}}))}async function p(e,t=2){if(0===e)return"0 Bytes";const n=t<0?0:t,r=Math.floor(Math.log(e)/Math.log(i));return`${parseFloat((e/Math.pow(i,r)).toFixed(n))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}`}function m(){return BigInt(Math.floor(1e6*performance.now()))}async function g(e){return"number"==typeof e&&(e=BigInt(e)),e<s?`${e}ns`:e<c?e/s+"μs":e<u?e/c+"ms":e/u+"s"}async function I(){return"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?m():"undefined"!=typeof process&&process.release&&"node"===process.release.name||"undefined"!=typeof process&&void 0!==process.hrtime?process.hrtime.bigint():"undefined"!=typeof performance?m():BigInt(0)}async function h(){return`${o}-${a++}`}function y(e,t){return void 0===Object.hasOwn?Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0:Object.hasOwn(e,t)?e[t]:void 0}function T(e,t){return t[1]===e[1]?e[0]-t[0]:t[1]-e[1]}function _(e){if(0===e.length)return[];if(1===e.length)return e[0];for(let t=1;t<e.length;t++)if(e[t].length<e[0].length){const n=e[0];e[0]=e[t],e[t]=n}const t=new Map;for(const n of e[0])t.set(n,1);for(let n=1;n<e.length;n++){let r=0;for(const o of e[n]){const e=t.get(o);e===n&&(t.set(o,e+1),r++)}if(0===r)return[]}return e[0].filter((n=>{const r=t.get(n);return void 0!==r&&t.set(n,0),r===e.length}))}async function w(e,t){const n={},r=t.length;for(let o=0;o<r;o++){const r=t[o],a=r.split(".");let i=e;const s=a.length;for(let e=0;e<s;e++)if(i=i[a[e]],"object"==typeof i){if(null!==i&&"lat"in i&&"lon"in i&&"number"==typeof i.lat&&"number"==typeof i.lon){i=n[r]=i;break}if(!Array.isArray(i)&&null!==i&&e===s-1){i=void 0;break}}else if((null===i||"object"!=typeof i)&&e<s-1){i=void 0;break}void 0!==i&&(n[r]=i)}return n}async function E(e,t){return(await w(e,[t]))[t]}const b={cm:.01,m:1,km:1e3,ft:.3048,yd:.9144,mi:1609.344};function S(e,t){const n=b[t];if(void 0===n)throw new Error((0,r.T)("INVALID_DISTANCE_SUFFIX",e).message);return e*n}function N(e,t){e.hits=e.hits.map((e=>({...e,document:{...e.document,...t.reduce(((e,t)=>{const n=t.split("."),r=n.pop();let o=e;for(const e of n)o[e]=o[e]??{},o=o[e];return o[r]=null,e}),e.document)}})))}}};
//# sourceMappingURL=777.index.js.map