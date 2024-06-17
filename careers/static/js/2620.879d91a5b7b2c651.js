"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2620],{2620:function(e,n,t){t.r(n),t.d(n,{Node:function(){return Node},NodeDefault:function(){return NodeDefault},NodeLayoutPage:function(){return NodeLayoutPage},getLdJsonData:function(){return getLdJsonData},groupLdJsonData:function(){return groupLdJsonData}});var l=t(5311),i=t(5900),o=t.n(i),a=t(1876),r=t(7444),u=t(446);let c={"node--layout_page":NodeLayoutPage};function Node(e){let{resource:n,origin:t,query:i,requestHeaders:o}=e,a=c[n.type];return a?(0,l.jsx)(a,{resource:n,origin:t,query:i,requestHeaders:o}):(0,l.jsx)(NodeDefault,{resource:n,origin:t,query:i,requestHeaders:o})}function getLdJsonData(e){let{metas:n}=e,t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];if(null==n)return;let l={"@context":"https://schema.org"};return Object.keys(n).forEach(e=>{let i=n[e],o=i["#attributes"];if((null==o?void 0:o.content)&&(l[null==o?void 0:o.name]=null==o?void 0:o.content,t)){if("string"==typeof l[null==o?void 0:o.name]||l[null==o?void 0:o.name]instanceof String)l[null==o?void 0:o.name]=l[null==o?void 0:o.name].replace(/(<([^>]+)>)/gi,"").replace(/(\r\n|\n|\r|\t)/gm," ").trim();else if(Array.isArray(l[null==o?void 0:o.name])&&l[null==o?void 0:o.name].forEach((e,n)=>{l[null==o?void 0:o.name][n]=l[null==o?void 0:o.name][n].replace(/(<([^>]+)>)/gi,"").replace(/(\r\n|\n|\r|\t)/gm," ").trim()}),"object"==typeof l[null==o?void 0:o.name]){var a,r,c,d;((null==o?void 0:o.name)==="image"||(null==o?void 0:o.name)==="logo")&&(null===(a=l[null==o?void 0:o.name])||void 0===a?void 0:a.url)&&(null===(c=l[null==o?void 0:o.name])||void 0===c?void 0:null===(r=c.url)||void 0===r?void 0:r.indexOf(".svg"))<0&&(l[null==o?void 0:o.name].url=(0,u.nn)(null===(d=l[null==o?void 0:o.name])||void 0===d?void 0:d.url))}}}),l}function groupLdJsonData(e){let{resource:n,origin:t,query:l,requestHeaders:i}=e,o={};if((null==n?void 0:n.cacib_extra_metatags.length)>0){let e=null==n?void 0:n.cacib_extra_metatags[0];Object.keys(e).forEach(n=>{if(0===n.indexOf("schema_")){let t=e[n],l=t["#attributes"],i=null==l?void 0:l.group;(null==l?void 0:l.content)&&(void 0===o[i]&&(o[i]={metas:[],renderable:!1}),o[i].metas.push(t),o[i].renderable||(o[i].renderable=(null==l?void 0:l.name)==="name"))}})}return o}function NodeDefault(e){var n,t,i,c;let{resource:d,origin:v,query:s,requestHeaders:f,options:g={}}=e,m=groupLdJsonData({resource:d,origin:v,query:s,requestHeaders:f}),p=[];if((null==d?void 0:d.cacib_extra_metatags.length)>0){let e=null==d?void 0:d.cacib_extra_metatags[0];Object.keys(e).forEach(n=>{let t=e[n],l=t["#attributes"];(null==l?void 0:l.schema_metatag)!==void 0&&(null==l?void 0:l.schema_metatag)!==null&&(null==l?void 0:l.schema_metatag)||p.push(t)})}let h=(0,a.useRouter)(),b=((null==h?void 0:h.asPath)?"".concat(v).concat(null==h?void 0:h.asPath):"".concat(v).concat(null==d?void 0:null===(n=d.path)||void 0===n?void 0:n.alias)).split(/[?#]/)[0],x=(null==h?void 0:h.asPath)==="/",y=[];(null==g?void 0:g.filterForTitle)&&(y=null==g?void 0:null===(c=g.filterForTitle)||void 0===c?void 0:c.map(e=>s[null==e?void 0:e.field]?(null==e?void 0:e.format)?null==e?void 0:e.format(e,d,v,s,f):(0,r.ak)(s[null==e?void 0:e.field]):null).filter(e=>null!==e));let w=b;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(o(),{children:[(!(null==g?void 0:null===(t=g.filterForTitleOptions)||void 0===t?void 0:t.strategy)||(null==g?void 0:null===(i=g.filterForTitleOptions)||void 0===i?void 0:i.strategy)==="override")&&y.length>0&&(0,l.jsx)("title",{children:null==y?void 0:y.join(" ")},"meta-title-".concat(new Date)),p.map((e,n)=>{let t=e["#attributes"];if(null==t?void 0:t.content){var i,o,a,r,c,d,v;if((null==t?void 0:t.name)!=="title")return(null==t?void 0:t.content)&&((null==t?void 0:t.name)&&(null==t?void 0:null===(c=t.name)||void 0===c?void 0:c.indexOf(":image"))>-1||(null==t?void 0:t.property)&&(null==t?void 0:null===(d=t.property)||void 0===d?void 0:d.indexOf(":image"))>-1?t.content=(0,u.nn)(null==t?void 0:t.content):(null==t?void 0:null===(v=t.property)||void 0===v?void 0:v.indexOf("og:url"))>-1?t.content=b:t.content=(0,u.hL)(null==t?void 0:t.content)),(0,l.jsx)("meta",{...t},"meta-".concat(n));if(!(null==g?void 0:null===(i=g.filterForTitleOptions)||void 0===i?void 0:i.strategy)||(null==g?void 0:null===(o=g.filterForTitleOptions)||void 0===o?void 0:o.strategy)==="override")return y.length<=0?(0,l.jsx)("title",{children:null==t?void 0:t.content},"meta-".concat(n)):void 0;if(y.length>0){let e=null==t?void 0:null===(a=t.content)||void 0===a?void 0:a.split("|");return(0,l.jsx)("title",{children:"".concat(y.join(" ")," | ").concat(e.length>1?null==t?void 0:null===(r=t.content)||void 0===r?void 0:r.split("|")[1]:null==t?void 0:t.content)},"meta-".concat(n))}return(0,l.jsx)("title",{children:null==t?void 0:t.content},"meta-".concat(n))}}),null==d?void 0:d.cacib_extra_paths.map(e=>x?(0,l.jsx)("link",{rel:"alternate",hrefLang:null==e?void 0:e.langcode,href:"/".concat(null==e?void 0:e.langcode)},"link-alt-lang-".concat(null==e?void 0:e.langcode)):((null==e?void 0:e.langcode)===((null==h?void 0:h.locale)?null==h?void 0:h.locale:null==h?void 0:h.defaultLocale)&&(w="".concat(v).concat(null==e?void 0:e.alias)),(0,l.jsx)("link",{rel:"alternate",hrefLang:null==e?void 0:e.langcode,href:"".concat(v).concat(null==e?void 0:e.alias)},"link-alt-lang-".concat(null==e?void 0:e.langcode)))),(0,l.jsx)("link",{rel:"canonical",href:"".concat(w)}),Object.keys(m).map(e=>{let n=m[e];if(null==n?void 0:n.renderable){let t=getLdJsonData({metas:null==n?void 0:n.metas}),i=JSON.stringify(t);return(0,l.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:i}},"ld-json-data-group-".concat(e))}})]})})}function NodeLayoutPage(e){let{resource:n,origin:t,query:i,requestHeaders:o}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(NodeDefault,{resource:n,origin:t,query:i,requestHeaders:o})})}},446:function(e,n,t){t.d(n,{Bm:function(){return fileIsPDF},FE:function(){return imageRelativeToAbsoluteSrc},X_:function(){return fileSizeText},hL:function(){return rewriteAbsoluteUrl},nn:function(){return getNextImageUrl},rN:function(){return fileTypeText}});var l=t(8381);function fileTypeText(e,n){let t=fileGetType(e,n);if(t)return t.toUpperCase()}function fileGetType(e,n){let l=t(2649);return(null==n?void 0:n.filemime)?l.extension(null==n?void 0:n.filemime):l.lookup(e)?l.extension(l.lookup(e)):null}function fileIsPDF(e,n){let t=fileGetType(e,n);return!!t&&"pdf"===t.toLowerCase()}function imageRelativeToAbsoluteSrc(e){if(!e)return null;let n={},t=Object.keys(n).indexOf(l.env.NEXT_IMAGE_DOMAIN)>-1?n[l.env.NEXT_IMAGE_DOMAIN]:"";return e.replace(/src *= *["\']?([^"\']*)["\']/gi,e=>{let n=e.match(/[src *= ]*[a-zA-Z\/]'?([^"\']*)/gi);return void 0!==n[1]&&"/"===n[1][0]?'src="'.concat(t).concat(n[1],'"'):e})}function getDomain(e){var n;if(!e)return null;let t=e.match(/(.+:\/\/)?([^\/]+)(\/.*)*/i),i=t.length>=3?t[2]:null;i.indexOf(":")>-1&&(i=i.split(":")[0]);let o=((null===(n=l.env)||void 0===n?void 0:'{"bo-en-instit-cacib.adsi.credit-agricole.fr": "https://www.ca-cib.com", "bo-fr-instit-cacib.adsi.credit-agricole.fr": "https://www.ca-cib.fr"}')?JSON.parse('{"bo-en-instit-cacib.adsi.credit-agricole.fr": "https://www.ca-cib.com", "bo-fr-instit-cacib.adsi.credit-agricole.fr": "https://www.ca-cib.fr"}'):null)||{"bo-en-instit-cacib.adsi.credit-agricole.fr":"https://www.ca-cib.com","bo-fr-instit-cacib.adsi.credit-agricole.fr":"https://www.ca-cib.fr"},a=Object.keys(o).indexOf(i)>-1?o[i]:"";return a}function rewriteAbsoluteUrl(e){if(!e)return null;let n=getDomain(e);return e=e.replace(/^[a-zA-Z]{3,5}\:\/{2}[a-zA-Z0-9_.:-]+\//,"/"),"".concat(n).concat(e)}function fileSizeText(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=null==e?void 0:e.filesize;if(!+t)return"0 Bytes";let l=n<0?0:n,i=Math.floor(Math.log(t)/Math.log(1024));return"".concat(parseFloat((t/Math.pow(1024,i)).toFixed(l))," ").concat(["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][i])}function getNextImageUrl(e){var n,t,l,i;let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1920,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;if(e.indexOf("/_next/image")>-1)return e;let r=(null===(t=window)||void 0===t?void 0:null===(n=t.location)||void 0===n?void 0:n.origin)?null===(i=window)||void 0===i?void 0:null===(l=i.location)||void 0===l?void 0:l.origin:getDomain(e),u="".concat(r,"/_next/image?url=").concat(encodeURIComponent(e),"&w=").concat(o,"&q=").concat(a);return u}}}]);