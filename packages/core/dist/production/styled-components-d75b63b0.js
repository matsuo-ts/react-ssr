"use strict";var e=require("./register-9eb87bae.js");require("path"),require("fs-extra"),require("react"),require("slash"),require("lz-string"),require("urlsafe-base64"),require("fs"),require("recursive-readdir");var r=require("./helpers-5f8cdd3f.js");require("stream");var t,a=(t=require("cheerio"))&&"object"==typeof t&&"default"in t?t.default:t,c=require("./head"),l=require("styled-components").ServerStyleSheet;exports.default=function(t,s,i){var o=new l;try{var n,d,u,h,f,p,q,y,v,b,m=r.server.renderToString(o.collectStyles(t)),g=o.getStyleTags(),S=a.load(m),j=S.html(S("body script")),T=(S("body").html()||"").replace(j,"");return e.concat(n=e.concat(d=e.concat(u=e.concat(h=e.concat(f=e.concat(p=e.concat(q=e.concat(y=e.concat(v=e.concat(b="<!DOCTYPE html><html".concat(r.convertAttrToString(S("html").attr()),"><head>")).call(b,r.getHeadHtml(c.rewind()),'<link rel="preload" href="/_react-ssr/')).call(v,s,'.js" as="script"><link rel="preload" href="/_react-ssr/')).call(y,s,'.css" as="style"><link rel="stylesheet" href="/_react-ssr/')).call(q,s,'.css">')).call(p,g,"</head><body")).call(f,r.convertAttrToString(S("body").attr()),'><div id="react-ssr-root">')).call(h,T,'</div><script id="react-ssr-script" src="/_react-ssr/')).call(u,s,'.js" data-props="')).call(d,i,'" defer><\/script>')).call(n,j,"</body></html>")}finally{o.seal()}};