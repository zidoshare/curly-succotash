(self.webpackChunkcurly_succotash=self.webpackChunkcurly_succotash||[]).push([[830],{8919:function(e,t,n){"use strict";var r=n(7294);t.Z=function(){return r.createElement("div",null,r.createElement("h1",{style:{textAlign:"center",margin:100}},"没有鸡，哪来的蛋呢"))}},5923:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(3552),a=n(5414),i=n(7294),o=n(5444),l=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this,t=Object.assign({},this.props);return delete t.title,i.createElement(o.StaticQuery,{query:"2633976633",render:function(n){return i.createElement(a.q,Object.assign({title:e.props.title?e.props.title+" - "+n.site.siteMetadata.title:n.site.siteMetadata.title},t))}})},t}(i.Component)},3032:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7294),a=n(5444);var i=n(7074),o=function(e){var t=e.cover,n=e.title,o=e.updatedDate,l=e.href,c=e.excerpt,u=e.timeToRead,s=e.words,m=e.origin;return r.createElement("div",{className:"PostItem-module--postItem--WOZWM"},r.createElement("div",{className:"PostItem-module--timeLabel--D8rHM"},r.createElement("p",null,o)),r.createElement("div",{className:"PostItem-module--itemMain--22pCq"},r.createElement("div",{className:"PostItem-module--cover--22ugC"},r.createElement(a.Link,{to:l},r.createElement("img",t))),r.createElement("div",{className:"PostItem-module--itemElse--3-lDZ"},r.createElement(i.Z,{Link:a.Link,tags:e.tags,origin:m}),r.createElement("h3",null,r.createElement(a.Link,{to:l},n)),r.createElement("p",{dangerouslySetInnerHTML:{__html:c}}),r.createElement("p",{className:"PostItem-module--here--3eZ1Q"},"共",s,"字-大约需要阅读",u,"min"))))};var l=n(8913),c=n.n(l),u=function(e){var t=e.pageCount;if(1===t)return null;var n=e.pathname.startsWith("/blog/page")?e.pathname.split("/")[3]:"1";return r.createElement("div",{className:"pagination"},1==+n?null:r.createElement(e.Link,{to:2==+n?"/":"/blog/page/"+(+n-1)+"/",activeClassName:"active",title:"上一页"},"<"),c()(t,(function(a){var i=(a+1).toString(),o=t<10?5:3;return+i-o<+n&&+n&&+i+o>+n||1==+i||+i===t?r.createElement(e.Link,{key:i,style:{cursor:"pointer"},to:1==+i?"/":"/blog/page/"+i+"/",activeClassName:"active"},i):+i==e.pageCount-1||2==+i?r.createElement("span",null,"..."):null})),t===+n?null:r.createElement(e.Link,{to:"/blog/page/"+(+n+1)+"/",activeClassName:"active",title:"下一页"},">"))},s=n(8919),m=function(e){var t=e.data;if(t.posts){var n=Math.ceil(t.posts.totalCount/10),i=e.location.pathname;return r.createElement("div",{className:"blog-module--indexContent--3QOk_"},r.createElement("div",null),t.posts.edges.map((function(t){var n=t.node,i=n.frontmatter,l=n.timeToRead,c=n.fields.slug,u=n.excerpt,s=n.wordCount,m=e.pageContext.headers[c].children[0].fixed,p=n.frontmatter.tags;return r.createElement(o,{words:s.words,key:c,cover:m,title:i.title,origin:i.origin,timeToRead:l,updatedDate:i.updatedDate,href:c,excerpt:u,Link:a.Link,tags:p})})),r.createElement(u,{Link:a.Link,pathname:i,pageCount:n}))}return r.createElement(s.Z,null)}},7368:function(e,t,n){"use strict";n.r(t);var r=n(7294),a=n(3032),i=n(7261),o=n(5247),l=n(5923);t.default=function(e){return r.createElement(i.eU,{headerType:o.n.POST_HEADER,data:{title:e.pageContext.tag}},r.createElement(l.Z,{title:e.pageContext.tag}),r.createElement(a.Z,e))}},2545:function(e){e.exports=function(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}},4290:function(e,t,n){var r=n(6557);e.exports=function(e){return"function"==typeof e?e:r}},6557:function(e){e.exports=function(e){return e}},8913:function(e,t,n){var r=n(2545),a=n(4290),i=n(554),o=4294967295,l=Math.min;e.exports=function(e,t){if((e=i(e))<1||e>9007199254740991)return[];var n=o,c=l(e,o);t=a(t),e-=o;for(var u=r(c,t);++n<e;)t(n);return u}},3134:function(e,t,n){var r=n(4841),a=1/0;e.exports=function(e){return e?(e=r(e))===a||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},554:function(e,t,n){var r=n(3134);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}}}]);
//# sourceMappingURL=component---src-templates-tag-page-tsx-0b0a64fe41ad14507073.js.map