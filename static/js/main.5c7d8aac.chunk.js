(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{11:function(e,t,n){e.exports={container:"DishCard_container__2whUv",disabled:"DishCard_disabled__2oLmB",header:"DishCard_header__19xL5",imgContainer:"DishCard_imgContainer__1wSUh",btnContainer:"DishCard_btnContainer__j2K7v",ratingContainer:"DishCard_ratingContainer__12nyB"}},12:function(e,t,n){e.exports={container:"Dishes_container__19TOk",tabs:"Dishes_tabs__1ujpd",btn:"Dishes_btn__2JrZo",isActive:"Dishes_isActive__DM87E"}},13:function(e,t,n){e.exports={container:"PollCard_container__x1ntW",header:"PollCard_header__eDK1Q",ratings:"PollCard_ratings__15FEe",imgContainer:"PollCard_imgContainer__2qdDW",info:"PollCard_info__2yYe3"}},23:function(e){e.exports=JSON.parse('[{"id":1,"userName":"amar","password":"amar123"},{"id":2,"userName":"akbar","password":"akbar123"},{"id":3,"userName":"antony","password":"antony123"},{"id":4,"userName":"john","password":"john123"},{"id":5,"userName":"paul","password":"paul123"}]')},25:function(e,t,n){e.exports={container:"PollRatings_container__vTA5i"}},31:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(22),c=n.n(i),r=(n(31),n(26)),o=n(5),d=n(18),l=n(2),j=n(4),u=n(23);n(37);var b=n(0);var h=function(){var e=A(),t=e.userName,n=e.onSubmit,a=e.password,s=e.setPassword,i=e.setUserName,c=e.isValid,r=e.isSubmit;return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"ui centered grid container",children:Object(b.jsx)("div",{className:"nine wide column",children:Object(b.jsx)("div",{className:"ui fluid card",children:Object(b.jsx)("div",{className:"content",children:Object(b.jsxs)("form",{className:"ui form",children:[Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Username"}),Object(b.jsx)("input",{type:"text",name:"user",placeholder:"Username",onChange:function(e){i(e.target.value)},value:t})]}),Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{type:"password",name:"pass",placeholder:"Password",onChange:function(e){s(e.target.value)},value:a})]}),Object(b.jsxs)("button",{className:"ui primary labeled icon button",onClick:function(e){n(),e.preventDefault()},children:[Object(b.jsx)("i",{className:"unlock alternate icon"}),"Login"]}),!c&&r?Object(b.jsx)("div",{className:"error",children:Object(b.jsx)("div",{className:"ui red basic label",children:"Invalid Username or Password"})}):null]})})})})})})},O=n(9),m=n(15),g=n.n(m),v=function(e){var t=localStorage.getItem(e);return t?JSON.parse(t):null},x=function(e,t){localStorage.setItem(e,JSON.stringify(t))};var f=n(11),N=n.n(f);var p=function(e){var t=e.description,n=e.dishName,a=e.image,s=e.handleUserSelection,i=e.selectedDishes,c=e.id,r=e.removeRating,o=Object.keys(i).length>2&&!i[c];return Object(b.jsxs)("div",{"data-testid":"dishCard-".concat(c),className:g()(N.a.container,Object(O.a)({},N.a.disabled,o)),children:[Object(b.jsx)("h1",{className:N.a.header,children:n}),Object(b.jsx)("figure",{className:N.a.imgContainer,children:Object(b.jsx)("img",{src:a,alt:n})}),Object(b.jsx)("div",{className:"ui info message",children:Object(b.jsx)("div",{className:"header",children:t})}),Object(b.jsx)("div",{className:N.a.btnContainer,children:Object(b.jsxs)("div",{className:"ui buttons",children:[Object(b.jsx)("button",{className:"ui button",onClick:s.bind(null,{id:c,rating:1}),disabled:o,children:"Rank 1"}),Object(b.jsx)("button",{className:"ui button",onClick:s.bind(null,{id:c,rating:2}),disabled:o,children:"Rank 2"}),Object(b.jsx)("button",{className:"ui button",onClick:s.bind(null,{id:c,rating:3}),disabled:o,children:"Rank 3"})]})}),i[c]?Object(b.jsxs)("div",{className:N.a.ratingContainer,children:[Object(b.jsx)("div",{className:"ui green message",children:Object(b.jsx)("div",{className:"header",children:"You ranked ".concat(i[c])})}),Object(b.jsx)("button",{className:"ui negative button",onClick:r.bind(null,c),children:"Remove Rating"})]}):null]})},_=n(13),C=n.n(_);var S=function(e){var t=e.ratings,n=e.dishName,a=e.image,s=e.id,i=e.ranking,c=e.userRatings,r=e.goToHome;return Object(b.jsxs)("div",{"data-testid":"pollCard",className:C.a.container,children:[Object(b.jsx)("h1",{className:C.a.header,children:n}),Object(b.jsx)("h2",{className:C.a.ratings,children:"Ranking ".concat(i+1)}),Object(b.jsx)("figure",{className:C.a.imgContainer,children:Object(b.jsx)("img",{src:a,alt:n})}),Object(b.jsxs)("div",{className:C.a.info,children:[Object(b.jsx)("div",{className:"ui olive message",children:Object(b.jsx)("div",{className:"header",children:"Total Score: ".concat(t)})}),c[s]?Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"ui orange message",children:Object(b.jsx)("div",{className:"header",children:"You rated this dish as ".concat(c[s])})}),Object(b.jsx)("button",{className:"ui secondary button",onClick:r,children:"Edit"})]}):null]})]})},k=n(25),R=n.n(k);var w=function(e){var t=e.dishesList,n=e.getRatings,s=e.goToHome,i=A().userName,c=Object(a.useState)([]),r=Object(j.a)(c,2),d=r[0],l=r[1],u=Object(a.useState)({}),h=Object(j.a)(u,2),m=h[0],g=h[1];return Object(a.useEffect)((function(){var e=n(),a=t.reduce((function(e,t){return Object(o.a)(Object(o.a)({},e),{},Object(O.a)({},t.id,Object(o.a)(Object(o.a)({},t),{},{ratings:0})))}),{});Object.entries(e).forEach((function(e){var t=Object(j.a)(e,2),n=t[0],s=t[1];n===i&&g(s),Object.entries(s).forEach((function(e){var t=Object(j.a)(e,2),n=t[0],s=t[1];3===s&&(a[n].ratings=a[n].ratings+10),2===s&&(a[n].ratings=a[n].ratings+20),1===s&&(a[n].ratings=a[n].ratings+30)}))})),l(Object.values(a).sort((function(e,t){return t.ratings-e.ratings})))}),[t,n,i]),Object(b.jsx)("div",{"data-testid":"pollRatings",className:R.a.container,children:d.map((function(e,t){return Object(b.jsx)(S,Object(o.a)({ranking:t,userRatings:m,goToHome:s},e),e.id)}))})},D=n(12),P=n.n(D),y="HOME",L="POLL";var E=function(){var e=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(a.useState)(!0),c=Object(j.a)(i,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){o(!0),fetch("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json").then((function(e){return e.json().then((function(e){s(e),o(!1)}))})).catch((function(){o(!1)}))}),[]),{isLoading:r,dishes:n}}(),t=e.isLoading,n=e.dishes,s=Object(a.useState)(y),i=Object(j.a)(s,2),c=i[0],r=i[1],d=function(){var e=A().userName;return{updateRating:function(t){var n=v("pollRatings")||{};n[e]=t,x("pollRatings",n)},getRatings:function(){return v("pollRatings")||{}}}}(),l=d.updateRating,u=d.getRatings,h=A().userName,m=Object(a.useState)(function(){var e=u();return e[h]?e[h]:{}}()),f=Object(j.a)(m,2),N=f[0],_=f[1];return t?Object(b.jsx)("div",{children:"Loading..."}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:P.a.tabs,children:[Object(b.jsx)("button",{className:g()(P.a.btn,Object(O.a)({},P.a.isActive,c===y)),onClick:r.bind(null,y),children:"Home"}),Object(b.jsx)("button",{className:g()(P.a.btn,Object(O.a)({},P.a.isActive,c===L)),onClick:r.bind(null,L),children:"Poll"})]}),function(){if(c===y)return Object(b.jsx)("div",{className:P.a.container,children:n.map((function(e){return Object(b.jsx)(p,Object(o.a)({handleUserSelection:C,selectedDishes:N,removeRating:S},e),e.id)}))});return Object(b.jsx)(w,{dishesList:n,getRatings:u,goToHome:r.bind(null,y)})}()]});function C(e){var t=e.id,n=e.rating,a=Object(o.a)({},N);Object.entries(a).forEach((function(e){var t=Object(j.a)(e,2),s=t[0];t[1]===n&&delete a[s]})),a[t]=n,_(a),l(a)}function S(e){var t=Object(o.a)({},N);delete t[e],_(t),l(t)}},T=(n(39),["children"]),U=Object(a.createContext)({});function F(e){var t=e.children,n=function(){var e=u,t=Object(l.g)(),n=Object(a.useState)(""),s=Object(j.a)(n,2),i=s[0],c=s[1],r=Object(a.useState)(""),o=Object(j.a)(r,2),d=o[0],b=o[1],h=Object(a.useState)(!1),O=Object(j.a)(h,2),m=O[0],g=O[1],v=Object(a.useState)(!1),x=Object(j.a)(v,2),f=x[0],N=x[1];return{userName:i,setUserName:c,password:d,setPassword:b,isValid:m,isSubmit:f,onSubmit:function(){N(!0);var n=e.find((function(e){return e.userName===i}));n&&n.password===d?(g(!0),t.push("/dishes")):g(!1)}}}();return Object(b.jsx)(U.Provider,{value:Object(o.a)({},n),children:t})}function H(){return Object(b.jsx)(d.a,{children:Object(b.jsx)(F,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.a,{exact:!0,from:"/",to:"login"}),Object(b.jsx)(l.b,{path:"/login",children:Object(b.jsx)(h,{})}),Object(b.jsx)(J,{path:"/dishes",children:Object(b.jsx)(E,{})})]})})})})}function J(e){var t=e.children,n=Object(r.a)(e,T),a=A().isValid;return Object(b.jsx)(l.b,Object(o.a)(Object(o.a)({},n),{},{render:function(e){var n=e.location;return a?t:Object(b.jsx)(l.a,{to:{pathname:"/login",state:{from:n}}})}}))}function A(){return Object(a.useContext)(U)}var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.5c7d8aac.chunk.js.map