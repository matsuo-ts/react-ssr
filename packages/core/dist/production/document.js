"use strict";var t,r=(t=require("react"))&&"object"==typeof t&&"default"in t?t.default:t,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(t,r,e){return t(e={path:r,exports:{},require:function(t,r){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==r&&e.path)}},e.exports),e.exports}var o,i=function(t){return t&&t.Math==Math&&t},u=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},a=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l={f:s&&!f.call({1:2},1)?function(t){var r=s(this,t);return!!r&&r.enumerable}:f},p=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},y={}.toString,h=function(t){return y.call(t).slice(8,-1)},v="".split,d=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==h(t)?v.call(t,""):Object(t)}:Object,g=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return d(g(t))},m=function(t){return"object"==typeof t?null!==t:"function"==typeof t},S=function(t,r){if(!m(t))return t;var e,n;if(r&&"function"==typeof(e=t.toString)&&!m(n=e.call(t)))return n;if("function"==typeof(e=t.valueOf)&&!m(n=e.call(t)))return n;if(!r&&"function"==typeof(e=t.toString)&&!m(n=e.call(t)))return n;throw TypeError("Can't convert object to primitive value")},w={}.hasOwnProperty,O=function(t,r){return w.call(t,r)},j=u.document,P=m(j)&&m(j.createElement),T=function(t){return P?j.createElement(t):{}},_=!a&&!c((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,A={f:a?E:function(t,r){if(t=b(t),r=S(r,!0),_)try{return E(t,r)}catch(t){}if(O(t,r))return p(!l.f.call(t,r),t[r])}},x=/#|\.prototype\./,L=function(t,r){var e=M[I(t)];return e==C||e!=k&&("function"==typeof r?c(r):!!r)},I=L.normalize=function(t){return String(t).replace(x,".").toLowerCase()},M=L.data={},k=L.NATIVE="N",C=L.POLYFILL="P",F=L,N={},R=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},D=function(t,r,e){if(R(t),void 0===r)return t;switch(e){case 0:return function(){return t.call(r)};case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}},G=function(t){if(!m(t))throw TypeError(String(t)+" is not an object");return t},V=Object.defineProperty,q={f:a?V:function(t,r,e){if(G(t),r=S(r,!0),G(e),_)try{return V(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},z=a?function(t,r,e){return q.f(t,r,p(1,e))}:function(t,r,e){return t[r]=e,t},W=A.f,B=function(t){var r=function(r,e,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,e)}return new t(r,e,n)}return t.apply(this,arguments)};return r.prototype=t.prototype,r},H=function(t,r){var e,n,o,i,c,a,f,s,l=t.target,p=t.global,y=t.stat,h=t.proto,v=p?u:y?u[l]:(u[l]||{}).prototype,d=p?N:N[l]||(N[l]={}),g=d.prototype;for(o in r)e=!F(p?o:l+(y?".":"#")+o,t.forced)&&v&&O(v,o),c=d[o],e&&(a=t.noTargetGet?(s=W(v,o))&&s.value:v[o]),i=e&&a?a:r[o],e&&typeof c==typeof i||(f=t.bind&&e?D(i,u):t.wrap&&e?B(i):h&&"function"==typeof i?D(Function.call,i):i,(t.sham||i&&i.sham||c&&c.sham)&&z(f,"sham",!0),d[o]=f,h&&(O(N,n=l+"Prototype")||z(N,n,{}),N[n][o]=i,t.real&&g&&!g[o]&&z(g,o,i)))},J=function(t){return"function"==typeof t?t:void 0},U=function(t,r){return arguments.length<2?J(N[t])||J(u[t]):N[t]&&N[t][r]||u[t]&&u[t][r]},Y=Math.ceil,Q=Math.floor,X=function(t){return isNaN(t=+t)?0:(t>0?Q:Y)(t)},K=Math.min,Z=function(t){return t>0?K(X(t),9007199254740991):0},$=Math.max,tt=Math.min,rt=function(t){return function(r,e,n){var o,i=b(r),u=Z(i.length),c=function(t,r){var e=X(t);return e<0?$(e+r,0):tt(e,r)}(n,u);if(t&&e!=e){for(;u>c;)if((o=i[c++])!=o)return!0}else for(;u>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},et={includes:rt(!0),indexOf:rt(!1)},nt={},ot=et.indexOf,it=function(t,r){var e,n=b(t),o=0,i=[];for(e in n)!O(nt,e)&&O(n,e)&&i.push(e);for(;r.length>o;)O(n,e=r[o++])&&(~ot(i,e)||i.push(e));return i},ut=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ct=Object.keys||function(t){return it(t,ut)},at=a?Object.defineProperties:function(t,r){G(t);for(var e,n=ct(r),o=n.length,i=0;o>i;)q.f(t,e=n[i++],r[e]);return t},ft=U("document","documentElement"),st=u["__core-js_shared__"]||function(t,r){try{z(u,t,r)}catch(e){u[t]=r}return r}("__core-js_shared__",{}),lt=n((function(t){(t.exports=function(t,r){return st[t]||(st[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.4",mode:"pure",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),pt=0,yt=Math.random(),ht=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++pt+yt).toString(36)},vt=lt("keys"),dt=function(t){return vt[t]||(vt[t]=ht(t))},gt=dt("IE_PROTO"),bt=function(){},mt=function(t){return"<script>"+t+"<\/script>"},St=function(){try{o=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;St=o?function(t){t.write(mt("")),t.close();var r=t.parentWindow.Object;return t=null,r}(o):((r=T("iframe")).style.display="none",ft.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(mt("document.F=Object")),t.close(),t.F);for(var e=ut.length;e--;)delete St.prototype[ut[e]];return St()};nt[gt]=!0;var wt=Object.create||function(t,r){var e;return null!==t?(bt.prototype=G(t),e=new bt,bt.prototype=null,e[gt]=t):e=St(),void 0===r?e:at(e,r)},Ot=[].slice,jt={},Pt=function(t,r,e){if(!(r in jt)){for(var n=[],o=0;o<r;o++)n[o]="a["+o+"]";jt[r]=Function("C,a","return new C("+n.join(",")+")")}return jt[r](t,e)},Tt=Function.bind||function(t){var r=R(this),e=Ot.call(arguments,1),n=function(){var o=e.concat(Ot.call(arguments));return this instanceof n?Pt(r,o.length,o):r.apply(t,o)};return m(r.prototype)&&(n.prototype=r.prototype),n},_t=U("Reflect","construct"),Et=c((function(){function t(){}return!(_t((function(){}),[],t)instanceof t)})),At=!c((function(){_t((function(){}))})),xt=Et||At;H({target:"Reflect",stat:!0,forced:xt,sham:xt},{construct:function(t,r){R(t),G(r);var e=arguments.length<3?t:R(arguments[2]);if(At&&!Et)return _t(t,r,e);if(t==e){switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3])}var n=[null];return n.push.apply(n,r),new(Tt.apply(t,n))}var o=e.prototype,i=wt(m(o)?o:Object.prototype),u=Function.apply.call(t,i,r);return m(u)?u:i}});var Lt=N.Reflect.construct;var It=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")};H({target:"Object",stat:!0,forced:!a,sham:!a},{defineProperty:q.f});var Mt=n((function(t){var r=N.Object,e=t.exports=function(t,e,n){return r.defineProperty(t,e,n)};r.defineProperty.sham&&(e.sham=!0)}));function kt(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Mt(t,n.key,n)}}var Ct=function(t,r,e){return r&&kt(t.prototype,r),e&&kt(t,e),t};H({target:"Object",stat:!0,sham:!a},{create:wt});var Ft=N.Object,Nt=function(t,r){return Ft.create(t,r)},Rt=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return G(e),function(t){if(!m(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype")}(n),r?t.call(e,n):e.__proto__=n,e}}():void 0);H({target:"Object",stat:!0},{setPrototypeOf:Rt});var Dt=N.Object.setPrototypeOf,Gt=n((function(t){function r(e,n){return t.exports=r=Dt||function(t,r){return t.__proto__=r,t},r(e,n)}t.exports=r}));var Vt=function(t,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");t.prototype=Nt(r&&r.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),r&&Gt(t,r)},qt=!!Object.getOwnPropertySymbols&&!c((function(){return!String(Symbol())})),zt=qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Wt=lt("wks"),Bt=u.Symbol,Ht=zt?Bt:Bt&&Bt.withoutSetter||ht,Jt=function(t){return O(Wt,t)||(qt&&O(Bt,t)?Wt[t]=Bt[t]:Wt[t]=Ht("Symbol."+t)),Wt[t]},Ut={f:Jt},Yt=q.f,Qt=function(t){var r=N.Symbol||(N.Symbol={});O(r,t)||Yt(r,t,{value:Ut.f(t)})};Qt("iterator");var Xt=function(t){return function(r,e){var n,o,i=String(g(r)),u=X(e),c=i.length;return u<0||u>=c?t?"":void 0:(n=i.charCodeAt(u))<55296||n>56319||u+1===c||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):n:t?i.slice(u,u+2):o-56320+(n-55296<<10)+65536}},Kt={codeAt:Xt(!1),charAt:Xt(!0)},Zt=Function.toString;"function"!=typeof st.inspectSource&&(st.inspectSource=function(t){return Zt.call(t)});var $t,tr,rr,er=st.inspectSource,nr=u.WeakMap,or="function"==typeof nr&&/native code/.test(er(nr)),ir=u.WeakMap;if(or){var ur=new ir,cr=ur.get,ar=ur.has,fr=ur.set;$t=function(t,r){return fr.call(ur,t,r),r},tr=function(t){return cr.call(ur,t)||{}},rr=function(t){return ar.call(ur,t)}}else{var sr=dt("state");nt[sr]=!0,$t=function(t,r){return z(t,sr,r),r},tr=function(t){return O(t,sr)?t[sr]:{}},rr=function(t){return O(t,sr)}}var lr,pr,yr,hr={set:$t,get:tr,has:rr,enforce:function(t){return rr(t)?tr(t):$t(t,{})},getterFor:function(t){return function(r){var e;if(!m(r)||(e=tr(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}},vr=function(t){return Object(g(t))},dr=!c((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})),gr=dt("IE_PROTO"),br=Object.prototype,mr=dr?Object.getPrototypeOf:function(t){return t=vr(t),O(t,gr)?t[gr]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?br:null},Sr=(Jt("iterator"),!1);[].keys&&("next"in(yr=[].keys())?(pr=mr(mr(yr)))!==Object.prototype&&(lr=pr):Sr=!0),null==lr&&(lr={});var wr={IteratorPrototype:lr,BUGGY_SAFARI_ITERATORS:Sr},Or={};Or[Jt("toStringTag")]="z";var jr="[object z]"===String(Or),Pr=Jt("toStringTag"),Tr="Arguments"==h(function(){return arguments}()),_r=jr?h:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),Pr))?e:Tr?h(r):"Object"==(n=h(r))&&"function"==typeof r.callee?"Arguments":n},Er=jr?{}.toString:function(){return"[object "+_r(this)+"]"},Ar=q.f,xr=Jt("toStringTag"),Lr=function(t,r,e,n){if(t){var o=e?t:t.prototype;O(o,xr)||Ar(o,xr,{configurable:!0,value:r}),n&&!jr&&z(o,"toString",Er)}},Ir=wr.IteratorPrototype,Mr=function(t,r,e,n){n&&n.enumerable?t[r]=e:z(t,r,e)},kr=wr.IteratorPrototype,Cr=wr.BUGGY_SAFARI_ITERATORS,Fr=Jt("iterator"),Nr=function(t,r,e,n,o,i,u){!function(t,r,e){var n=r+" Iterator";t.prototype=wt(Ir,{next:p(1,e)}),Lr(t,n,!1,!0)}(e,r,n);var c,a,f,s=function(t){if(t===o&&d)return d;if(!Cr&&t in h)return h[t];switch(t){case"keys":case"values":case"entries":return function(){return new e(this,t)}}return function(){return new e(this)}},l=r+" Iterator",y=!1,h=t.prototype,v=h[Fr]||h["@@iterator"]||o&&h[o],d=!Cr&&v||s(o),g="Array"==r&&h.entries||v;if(g&&(c=mr(g.call(new t)),kr!==Object.prototype&&c.next&&Lr(c,l,!0,!0)),"values"==o&&v&&"values"!==v.name&&(y=!0,d=function(){return v.call(this)}),u&&h[Fr]!==d&&z(h,Fr,d),o)if(a={values:s("values"),keys:i?d:s("keys"),entries:s("entries")},u)for(f in a)(Cr||y||!(f in h))&&Mr(h,f,a[f]);else H({target:r,proto:!0,forced:Cr||y},a);return a},Rr=Kt.charAt,Dr=hr.set,Gr=hr.getterFor("String Iterator");Nr(String,"String",(function(t){Dr(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,r=Gr(this),e=r.string,n=r.index;return n>=e.length?{value:void 0,done:!0}:(t=Rr(e,n),r.index+=t.length,{value:t,done:!1})}));var Vr=hr.set,qr=hr.getterFor("Array Iterator"),zr=(Nr(Array,"Array",(function(t,r){Vr(this,{type:"Array Iterator",target:b(t),index:0,kind:r})}),(function(){var t=qr(this),r=t.target,e=t.kind,n=t.index++;return!r||n>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==e?{value:n,done:!1}:"values"==e?{value:r[n],done:!1}:{value:[n,r[n]],done:!1}}),"values"),Jt("toStringTag"));for(var Wr in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var Br=u[Wr],Hr=Br&&Br.prototype;Hr&&_r(Hr)!==zr&&z(Hr,zr,Wr)}var Jr,Ur,Yr=Ut.f("iterator"),Qr=Array.isArray||function(t){return"Array"==h(t)},Xr=function(t,r,e){var n=S(r);n in t?q.f(t,n,p(0,e)):t[n]=e},Kr=Jt("species"),Zr=function(t,r){var e;return Qr(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!Qr(e.prototype)?m(e)&&null===(e=e[Kr])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===r?0:r)},$r=U("navigator","userAgent")||"",te=u.process,re=te&&te.versions,ee=re&&re.v8;ee?Ur=(Jr=ee.split("."))[0]+Jr[1]:$r&&(!(Jr=$r.match(/Edge\/(\d+)/))||Jr[1]>=74)&&(Jr=$r.match(/Chrome\/(\d+)/))&&(Ur=Jr[1]);var ne,oe=Ur&&+Ur,ie=Jt("species"),ue=Jt("isConcatSpreadable"),ce=oe>=51||!c((function(){var t=[];return t[ue]=!1,t.concat()[0]!==t})),ae=(ne="concat",oe>=51||!c((function(){var t=[];return(t.constructor={})[ie]=function(){return{foo:1}},1!==t[ne](Boolean).foo}))),fe=function(t){if(!m(t))return!1;var r=t[ue];return void 0!==r?!!r:Qr(t)};H({target:"Array",proto:!0,forced:!ce||!ae},{concat:function(t){var r,e,n,o,i,u=vr(this),c=Zr(u,0),a=0;for(r=-1,n=arguments.length;r<n;r++)if(fe(i=-1===r?u:arguments[r])){if(a+(o=Z(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(e=0;e<o;e++,a++)e in i&&Xr(c,a,i[e])}else{if(a>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Xr(c,a++,i)}return c.length=a,c}});var se=ut.concat("length","prototype"),le={f:Object.getOwnPropertyNames||function(t){return it(t,se)}},pe=le.f,ye={}.toString,he="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],ve={f:function(t){return he&&"[object Window]"==ye.call(t)?function(t){try{return pe(t)}catch(t){return he.slice()}}(t):pe(b(t))}},de={f:Object.getOwnPropertySymbols},ge=[].push,be=function(t){var r=1==t,e=2==t,n=3==t,o=4==t,i=6==t,u=5==t||i;return function(c,a,f,s){for(var l,p,y=vr(c),h=d(y),v=D(a,f,3),g=Z(h.length),b=0,m=s||Zr,S=r?m(c,g):e?m(c,0):void 0;g>b;b++)if((u||b in h)&&(p=v(l=h[b],b,y),t))if(r)S[b]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return b;case 2:ge.call(S,l)}else if(o)return!1;return i?-1:n||o?o:S}},me={forEach:be(0),map:be(1),filter:be(2),some:be(3),every:be(4),find:be(5),findIndex:be(6)}.forEach,Se=dt("hidden"),we=Jt("toPrimitive"),Oe=hr.set,je=hr.getterFor("Symbol"),Pe=Object.prototype,Te=u.Symbol,_e=U("JSON","stringify"),Ee=A.f,Ae=q.f,xe=ve.f,Le=l.f,Ie=lt("symbols"),Me=lt("op-symbols"),ke=lt("string-to-symbol-registry"),Ce=lt("symbol-to-string-registry"),Fe=lt("wks"),Ne=u.QObject,Re=!Ne||!Ne.prototype||!Ne.prototype.findChild,De=a&&c((function(){return 7!=wt(Ae({},"a",{get:function(){return Ae(this,"a",{value:7}).a}})).a}))?function(t,r,e){var n=Ee(Pe,r);n&&delete Pe[r],Ae(t,r,e),n&&t!==Pe&&Ae(Pe,r,n)}:Ae,Ge=function(t,r){var e=Ie[t]=wt(Te.prototype);return Oe(e,{type:"Symbol",tag:t,description:r}),a||(e.description=r),e},Ve=zt?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Te},qe=function(t,r,e){t===Pe&&qe(Me,r,e),G(t);var n=S(r,!0);return G(e),O(Ie,n)?(e.enumerable?(O(t,Se)&&t[Se][n]&&(t[Se][n]=!1),e=wt(e,{enumerable:p(0,!1)})):(O(t,Se)||Ae(t,Se,p(1,{})),t[Se][n]=!0),De(t,n,e)):Ae(t,n,e)},ze=function(t,r){G(t);var e=b(r),n=ct(e).concat(Je(e));return me(n,(function(r){a&&!We.call(e,r)||qe(t,r,e[r])})),t},We=function(t){var r=S(t,!0),e=Le.call(this,r);return!(this===Pe&&O(Ie,r)&&!O(Me,r))&&(!(e||!O(this,r)||!O(Ie,r)||O(this,Se)&&this[Se][r])||e)},Be=function(t,r){var e=b(t),n=S(r,!0);if(e!==Pe||!O(Ie,n)||O(Me,n)){var o=Ee(e,n);return!o||!O(Ie,n)||O(e,Se)&&e[Se][n]||(o.enumerable=!0),o}},He=function(t){var r=xe(b(t)),e=[];return me(r,(function(t){O(Ie,t)||O(nt,t)||e.push(t)})),e},Je=function(t){var r=t===Pe,e=xe(r?Me:b(t)),n=[];return me(e,(function(t){!O(Ie,t)||r&&!O(Pe,t)||n.push(Ie[t])})),n};if(qt||(Mr((Te=function(){if(this instanceof Te)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=ht(t),e=function(t){this===Pe&&e.call(Me,t),O(this,Se)&&O(this[Se],r)&&(this[Se][r]=!1),De(this,r,p(1,t))};return a&&Re&&De(Pe,r,{configurable:!0,set:e}),Ge(r,t)}).prototype,"toString",(function(){return je(this).tag})),Mr(Te,"withoutSetter",(function(t){return Ge(ht(t),t)})),l.f=We,q.f=qe,A.f=Be,le.f=ve.f=He,de.f=Je,Ut.f=function(t){return Ge(Jt(t),t)},a&&Ae(Te.prototype,"description",{configurable:!0,get:function(){return je(this).description}})),H({global:!0,wrap:!0,forced:!qt,sham:!qt},{Symbol:Te}),me(ct(Fe),(function(t){Qt(t)})),H({target:"Symbol",stat:!0,forced:!qt},{for:function(t){var r=String(t);if(O(ke,r))return ke[r];var e=Te(r);return ke[r]=e,Ce[e]=r,e},keyFor:function(t){if(!Ve(t))throw TypeError(t+" is not a symbol");if(O(Ce,t))return Ce[t]},useSetter:function(){Re=!0},useSimple:function(){Re=!1}}),H({target:"Object",stat:!0,forced:!qt,sham:!a},{create:function(t,r){return void 0===r?wt(t):ze(wt(t),r)},defineProperty:qe,defineProperties:ze,getOwnPropertyDescriptor:Be}),H({target:"Object",stat:!0,forced:!qt},{getOwnPropertyNames:He,getOwnPropertySymbols:Je}),H({target:"Object",stat:!0,forced:c((function(){de.f(1)}))},{getOwnPropertySymbols:function(t){return de.f(vr(t))}}),_e){var Ue=!qt||c((function(){var t=Te();return"[null]"!=_e([t])||"{}"!=_e({a:t})||"{}"!=_e(Object(t))}));H({target:"JSON",stat:!0,forced:Ue},{stringify:function(t,r,e){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=r,(m(r)||void 0!==t)&&!Ve(t))return Qr(r)||(r=function(t,r){if("function"==typeof n&&(r=n.call(this,t,r)),!Ve(r))return r}),o[1]=r,_e.apply(null,o)}})}Te.prototype[we]||z(Te.prototype,we,Te.prototype.valueOf),Lr(Te,"Symbol"),nt[Se]=!0,Qt("asyncIterator"),Qt("hasInstance"),Qt("isConcatSpreadable"),Qt("match"),Qt("matchAll"),Qt("replace"),Qt("search"),Qt("species"),Qt("split"),Qt("toPrimitive"),Qt("toStringTag"),Qt("unscopables"),Lr(Math,"Math",!0),Lr(u.JSON,"JSON",!0);var Ye=N.Symbol;Qt("asyncDispose"),Qt("dispose"),Qt("observable"),Qt("patternMatch"),Qt("replaceAll");var Qe=Ye,Xe=n((function(t){function r(e){return t.exports=r="function"==typeof Qe&&"symbol"==typeof Yr?function(t){return typeof t}:function(t){return t&&"function"==typeof Qe&&t.constructor===Qe&&t!==Qe.prototype?"symbol":typeof t},r(e)}t.exports=r}));var Ke=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t};var Ze=function(t,r){return!r||"object"!==Xe(r)&&"function"!=typeof r?Ke(t):r},$e=c((function(){mr(1)}));H({target:"Object",stat:!0,forced:$e,sham:!dr},{getPrototypeOf:function(t){return mr(vr(t))}});var tn=N.Object.getPrototypeOf,rn=n((function(t){function r(e){return t.exports=r=Dt?tn:function(t){return t.__proto__||tn(t)},r(e)}t.exports=r}));function en(t){var r=function(){if("undefined"==typeof Reflect||!Lt)return!1;if(Lt.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Lt(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=rn(t);if(r){var o=rn(this).constructor;e=Lt(n,arguments,o)}else e=n.apply(this,arguments);return Ze(this,e)}}var nn=require("./head"),on=require("./main"),un=function(t){Vt(n,t);var e=en(n);function n(){return It(this,n),e.apply(this,arguments)}return Ct(n,[{key:"render",value:function(){return r.createElement("html",this.props)}}]),n}(r.Component),cn=function(t){Vt(n,t);var e=en(n);function n(){return It(this,n),e.apply(this,arguments)}return Ct(n,[{key:"render",value:function(){return r.createElement(un,null,r.createElement(nn,null),r.createElement("body",null,r.createElement(on,null)))}}]),n}(r.Component);module.exports=cn;
