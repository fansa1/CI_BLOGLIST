(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(42)},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(16),l=n.n(u),o=n(1),c=n.n(o),i=n(4),s=n(2),p=function(e){var t=e.message;return null===t?null:null!==t?r.a.createElement("div",{style:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},t):void 0},m=function(e){var t=e.message;return null===t?null:null!==t?r.a.createElement("div",{style:{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}},t):void 0},d=n(5),f=n.n(d),b="http://localhost:3003/api/blogs",v=null,g=function(){var e=Object(i.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(b);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(i.a)(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={headers:{Authorization:v}},e.next=3,f.a.post(b,t,n);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(b,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),h={getAll:g,create:E,update:function(){var e=Object(i.a)(c.a.mark(function e(t,n){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.put("".concat(b,"/").concat(t),n);case 2:a=e.sent,console.log(a.data);case 4:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}(),remove:w,setToken:function(e){v="bearer ".concat(e)}},y={login:function(){var e=Object(i.a)(c.a.mark(function e(t){var n;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("http://localhost:3003/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},k=r.a.forwardRef(function(e,t){var n=Object(a.useState)(!1),u=Object(s.a)(n,2),l=u[0],o=u[1],c={display:l?"none":""},i={display:l?"":"none"},p=function(){o(!l)};return Object(a.useImperativeHandle)(t,function(){return{toggleVisibility:p}}),r.a.createElement("div",null,r.a.createElement("div",{style:c},r.a.createElement("button",{onClick:p},e.buttonLabel)),r.a.createElement("div",{style:i},e.children,r.a.createElement("button",{onClick:p},"cancel")))}),j=n(6),O=n.n(j),x=function e(t){e.propTypes={props:O.a.object.isRequired};var n={title:t.title,author:t.author,url:t.url,likes:String(t.likes+1)};h.update(t.id,n)},S=function e(t){e.propTypes={props:O.a.object.isRequired},window.confirm("Are you sure you wish to delete the blog ".concat(t.title,"?"))&&h.remove(t.id)},C=function(e){var t=e.blog,n=e.user,u=Object(a.useState)(!1),l=Object(s.a)(u,2),o=l[0],c=l[1],i={paddingTop:10,paddingLeft:2,border:"solid",borderWidth:1,marginBottom:5},p=function(){c(!o)};return r.a.createElement(r.a.Fragment,null,!1===o?r.a.createElement("div",{style:i,onClick:function(){return p()}},t.title," ",t.author):r.a.createElement("div",{style:i},r.a.createElement("div",{onClick:function(){return p()}},t.title," ",t.author),r.a.createElement("p",null,t.url),r.a.createElement("p",null,t.likes," likes ",r.a.createElement("button",{onClick:function(){return x(t)}},"like")),r.a.createElement("p",null,"added by ",t.user.name," "),t.user.name===n.name&&r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return S(t)}},"remove "))))},T=function(e,t,n){var r=Object(a.useState)(""),u=Object(s.a)(r,2),l=u[0],o=u[1];return[function(){o("")},{type:e,autoComplete:t,value:l,className:n,onChange:function(e){o(e.target.value)}}]},B=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],u=t[1],l=Object(a.useState)(null),o=Object(s.a)(l,2),d=o[0],f=o[1],b=Object(a.useState)(null),v=Object(s.a)(b,2),g=v[0],E=v[1],w=Object(a.useState)(null),j=Object(s.a)(w,2),x=j[0],S=j[1];Object(a.useEffect)(function(){h.getAll().then(function(e){return u(e.sort(function(e,t){var n=e.likes,a=t.likes;return n<a?-1:n>a?1:0}))})},[d]),Object(a.useEffect)(function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);S(t),h.setToken(t.token)}},[]);var B=T("text","username","Usernameinput"),R=Object(s.a)(B,2),A=R[0],I=R[1],J=T("text","password","Passwordinput"),N=Object(s.a)(J,2),q=N[0],z=N[1],F=T("text"),L=Object(s.a)(F,2),U=L[0],D=L[1],V=T("text"),H=Object(s.a)(V,2),P=H[0],W=H[1],G=T("text"),K=Object(s.a)(G,2),M=K[0],Q=K[1],X=function(){var e=Object(i.a)(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("logging in with",I.value,z.value),e.prev=2,n={username:I.value,password:z.value},e.next=6,y.login(n);case 6:a=e.sent,h.setToken(a.token),window.localStorage.setItem("loggedBlogappUser",JSON.stringify(a)),S(a),A(),q(),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),E("wrong username or password"),setTimeout(function(){E(null)},5e3);case 18:case"end":return e.stop()}},e,null,[[2,14]])}));return function(t){return e.apply(this,arguments)}}(),Y=r.a.createRef(),Z=function(){var e=Object(i.a)(c.a.mark(function e(t){var n,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={title:D.value,author:W.value,url:Q.value,likes:0},h.create(n),U(),P(),M(),Y.current.toggleVisibility(),e.next=9,h.getAll();case 9:a=e.sent,u(a),f('A new blog"'.concat(D.value,'" by ').concat(W.value," was added to the database")),setTimeout(function(){f(null)},5e3);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Blogs"),r.a.createElement(p,{message:d}),r.a.createElement(m,{message:g}),null===x?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"login"),r.a.createElement("form",{onSubmit:X},r.a.createElement("div",null,"username",r.a.createElement("input",I)),r.a.createElement("div",null,"password",r.a.createElement("input",z)),r.a.createElement("button",{className:"loginbutton",type:"submit"},"login"))):r.a.createElement("div",null,r.a.createElement("p",null,x.name," logged in ",r.a.createElement("button",{onClick:function(){return window.localStorage.clear(),void window.location.reload()}},"logout")),r.a.createElement("h1",null,"Create"),r.a.createElement(k,{buttonLabel:"new blog",ref:Y},r.a.createElement("form",{onSubmit:Z},r.a.createElement("div",null," title",r.a.createElement("input",D)),r.a.createElement("div",null," author",r.a.createElement("input",W)),r.a.createElement("div",null," url",r.a.createElement("input",Q)),r.a.createElement("button",{type:"submit"},"create"))),r.a.createElement("ul",null,r.a.createElement(function e(t){var n=t.rivit;return e.propTypes={rivit:O.a.object.isRequired},r.a.createElement(r.a.Fragment,null,n)},{rivit:n.map(function(e){return r.a.createElement(C,{key:e.id,blog:e,user:x})})}))))};l.a.render(r.a.createElement(B,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2da6b6d8.chunk.js.map