(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return a})),n.d(t,"p",(function(){return o})),n.d(t,"f",(function(){return c})),n.d(t,"k",(function(){return i})),n.d(t,"l",(function(){return u})),n.d(t,"j",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"h",(function(){return s})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return _})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"o",(function(){return b}));var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",c="FETCH_INGREDIENTS_FAILED",i="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",s="FETCH_ORDERS_START",m="FETCH_ORDERS_SUCCESS",f="FETCH_ORDERS_FAIL",g="AUTH_START",_="AUTH_SUCCESS",h="AUTH_FAIL",p="AUTH_LOGOUT",b="SET_AUTH_REDIRECT_PATH"},function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n(15),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"i",(function(){return c})),n.d(t,"e",(function(){return i})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return p})),n.d(t,"f",(function(){return _})),n.d(t,"j",(function(){return b})),n.d(t,"c",(function(){return E}));var r=n(2),a=n(13),o=function(e){return{type:r.a,ingredientName:e}},c=function(e){return{type:r.n,ingredientName:e}},i=function(){return function(e){a.a.get("https://react-my-burger-21571.firebaseio.com/ingredients.json").then((function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))})).catch((function(t){e({type:r.f})}))}},u=n(15),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:r.j,error:e}}(e))}))}},d=function(){return{type:r.m}},s=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then((function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))})).catch((function(e){var t;n((t=e,{type:r.g,error:t}))}))}},m=n(25),f=n.n(m),g=function(e,t){return{type:r.e,idToken:e,userId:t}},_=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},h=function(e){return function(t){setTimeout((function(){t(_())}),1e3*e)}},p=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},c="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDQ3EDi1hzMFnV9to42umfUcZ5rypToJFI";n||(c="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDQ3EDi1hzMFnV9to42umfUcZ5rypToJFI"),f.a.post(c,o).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(g(e.data.idToken,e.data.localId)),a(h(e.data.expiresIn))})).catch((function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))}))}},b=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(_());else{var r=localStorage.getItem("userId");e(g(t,r)),e(h((n.getTime()-(new Date).getTime())/1e3))}}else e(_())}}},function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__2z9NQ",BreadTop:"BurgerIngredient__BreadTop__2Pkwe",Seeds1:"BurgerIngredient__Seeds1__2k2x7",Seeds2:"BurgerIngredient__Seeds2__9Mret",Meat:"BurgerIngredient__Meat__1LdrR",Cheese:"BurgerIngredient__Cheese__1eqwP",Lettuce:"BurgerIngredient__Lettuce__zoLnB",Tomato:"BurgerIngredient__Tomato__1993E",Bacon:"BurgerIngredient__Bacon__2RZZH"}},,,function(e,t,n){"use strict";var r=n(25),a=n.n(r).a.create({baseURL:"https://react-my-burger-21571.firebaseio.com/"});t.a=a},,,function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__3wvlM",Open:"SideDrawer__Open__3xsf8",Close:"SideDrawer__Close__2S6c7",Logo:"SideDrawer__Logo__10IHv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},,,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(53),c=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:c.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(55),c=n.n(o),i=n(23);t.a=a.a.memo((function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{show:e.show,clicked:e.modalClosed}),a.a.createElement("div",{className:c.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))}),(function(e,t){return t.show===e.show&&t.children===e.children}))},,function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(35),c=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[c.a.Button,c.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},function(e,t,n){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(56),c=n.n(o);t.a=function(){return a.a.createElement("div",{className:c.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(11),a=n(0),o=n.n(a),c=n(24);t.a=function(e,t){return function(n){var i=function(e){var t=Object(a.useState)(null),n=Object(r.a)(t,2),o=n[0],c=n[1],i=e.interceptors.request.use((function(e){return c(null),e})),u=e.interceptors.response.use((function(e){return e}),(function(e){c(e)}));Object(a.useEffect)((function(){return function(){e.interceptors.request.eject(i),e.interceptors.response.eject(u)}}),[i,u]);return[o,function(){c(null)}]}(t),u=Object(r.a)(i,2),l=u[0],d=u[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{show:l,modalClosed:d},l?l.message:null),o.a.createElement(e,n))}}},,,,,,,function(e,t,n){"use strict";var r=n(61),a=n(0),o=n.n(a),c=n(54),i=n.n(c),u=n(10),l=n.n(u),d=function(e){var t=null;switch(e.type){case"bread-bottom":t=o.a.createElement("div",{className:l.a.BreadBottom});break;case"bread-top":t=o.a.createElement("div",{className:l.a.BreadTop},o.a.createElement("div",{className:l.a.Seeds1}),o.a.createElement("div",{className:l.a.Seeds2}));break;case"meat":t=o.a.createElement("div",{className:l.a.Meat});break;case"cheese":t=o.a.createElement("div",{className:l.a.Cheese});break;case"bacon":t=o.a.createElement("div",{className:l.a.Bacon});break;case"salad":t=o.a.createElement("div",{className:l.a.Salad});break;default:t=null}return t};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return o.a.createElement(d,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:i.a.Burger},o.a.createElement(d,{type:"bread-top"}),t,o.a.createElement(d,{type:"bread-bottom"}))}},,,function(e,t,n){e.exports={Content:"Layout__Content__3KSp3"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo__Logo__2A07e"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__1eThf"}},function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},function(e,t,n){e.exports={Burger:"Burger__Burger__2h2kL"}},function(e,t,n){e.exports={Modal:"Modal__Modal__cd320"}},function(e,t,n){e.exports={Loader:"Spinner__Loader__3dgUo",load2:"Spinner__load2__1sg5x"}},,,,,,,,function(e,t,n){e.exports=n(94)},,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(19),c=n.n(o),i=n(96),u=n(7),l=n(14),d=n(46),s=(n(74),n(98)),m=n(51),f=n(95),g=n(99),_=n(11),h=n(47),p=n.n(h),b=n(26),E=n.n(b),v=n(48),w=n.n(v),k=n(49),O=n.n(k),y=function(e){return a.a.createElement("div",{className:O.a.Logo},a.a.createElement("img",{src:w.a,alt:"MyBurger"}))},j=n(50),S=n.n(j),N=n(97),I=n(33),T=n.n(I),B=function(e){return a.a.createElement("li",{className:T.a.NavigationItem},a.a.createElement(N.a,{to:e.link,exact:e.exact,activeClassName:T.a.active},e.children))},C=function(e){return a.a.createElement("ul",{className:S.a.NavigationItems},a.a.createElement(B,{link:"/howardreact",exact:!0},"Burger Builder"),a.a.createElement(B,{link:"/howardreact/hook",exact:!0},"Hook"),e.isAuthenticated?a.a.createElement(B,{link:"/howardreact/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(B,{link:"/howardreact/logout"},"Logout"):a.a.createElement(B,{link:"/howardreact/auth"},"Authenticate"))},D=n(52),A=n.n(D),L=function(e){return a.a.createElement("div",{className:A.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},R=function(e){return a.a.createElement("header",{className:E.a.Toolbar},a.a.createElement(L,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:E.a.Logo},a.a.createElement(y,null)),a.a.createElement("nav",{className:E.a.DesktopOnly},a.a.createElement(C,{isAuthenticated:e.isAuth})))},x=n(16),U=n.n(x),P=n(23),F=function(e){var t=[U.a.SideDrawer,U.a.Close];return e.open&&(t=[U.a.SideDrawer,U.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(P.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:U.a.Logo},a.a.createElement(y,null)),a.a.createElement("nav",null,a.a.createElement(C,{isAuthenticated:e.isAuth}))))},M=Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var t=Object(r.useState)(!1),n=Object(_.a)(t,2),o=n[0],c=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(R,{isAuth:e.isAuthenticated,drawerToggleClicked:function(){c(!o)}}),a.a.createElement(F,{isAuth:e.isAuthenticated,open:o,closed:function(){c(!1)}}),a.a.createElement("main",{className:p.a.Content},e.children))})),z=n(15),H=n(44),G=n(34),Q=n.n(G),V=n(18),W=n.n(V),Y=function(e){return a.a.createElement("div",{className:W.a.BuildControl},a.a.createElement("div",{className:W.a.Label},e.label),a.a.createElement("button",{className:W.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:W.a.More,onClick:e.added},"More"))},q=[{label:"Lettuce",type:"lettuce"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Tomato",type:"tomato"}],Z=function(e){return a.a.createElement("div",{className:Q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),q.map((function(t){return a.a.createElement(Y,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{disabled:!e.purchasable,className:Q.a.OrderButton,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},J=n(24),X=n(28),$=function(e){var t=Object.keys(e.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),":"," ",e.ingredients[t])}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",e.price.toFixed(2))),a.a.createElement("p",null,"Continue to Checkout?"),a.a.createElement(X.a,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),a.a.createElement(X.a,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},K=n(36),ee=n(37),te=n(9),ne=n(13),re=Object(ee.a)((function(e){var t=Object(r.useState)(!1),n=Object(_.a)(t,2),o=n[0],c=n[1],i=Object(u.c)(),l=Object(u.d)((function(e){return e.burgerBuilder.ingredients})),d=Object(u.d)((function(e){return e.burgerBuilder.totalPrice})),s=Object(u.d)((function(e){return e.burgerBuilder.error})),m=Object(u.d)((function(e){return null!==e.auth.token})),f=Object(r.useCallback)((function(){return i(te.e())}),[i]);Object(r.useEffect)((function(){f()}),[f]);var g=function(){c(!1)},h=Object(z.a)({},l);for(var p in h)h[p]=h[p]<=0;var b,E=null,v=s?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(K.a,null);return l&&(v=a.a.createElement(a.a.Fragment,null,a.a.createElement(H.a,{ingredients:l}),a.a.createElement(Z,{ingredientAdded:function(e){return i(te.a(e))},ingredientRemoved:function(e){return i(te.i(e))},disabled:h,purchasable:(b=l,Object.keys(b).map((function(e){return b[e]})).reduce((function(e,t){return e+t}),0)>0),ordered:function(){var t;m?c(!0):(t="/howardreact/checkout",i(te.j(t)),e.history.push("/howardreact/auth"))},isAuth:m,price:d})),E=a.a.createElement($,{ingredients:l,price:d,purchaseCancelled:g,purchaseContinued:function(){i(te.h()),e.history.push("/howardreact/checkout")}})),a.a.createElement(a.a.Fragment,null,a.a.createElement(J.a,{show:o,modalClosed:g},E),v)}),ne.a),ae=n(57),oe=n(58),ce=n(62),ie=n(59),ue=n(63),le=function(e){function t(){return Object(ae.a)(this,t),Object(ce.a)(this,Object(ie.a)(t).apply(this,arguments))}return Object(ue.a)(t,e),Object(oe.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(f.a,{to:"/howardreact"})}}]),t}(r.Component),de=Object(u.b)(null,(function(e){return{onLogout:function(){return e(te.f())}}}))(le),se=a.a.lazy((function(){return n.e(3).then(n.bind(null,107))})),me=a.a.lazy((function(){return n.e(5).then(n.bind(null,108))})),fe=a.a.lazy((function(){return n.e(4).then(n.bind(null,106))})),ge=Object(g.a)(Object(u.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(te.c())}}}))((function(e){var t=e.onTryAutoSignup;Object(r.useEffect)((function(){t()}),[t]);var n=a.a.createElement(s.a,null,a.a.createElement(m.a,{path:"/howardreact/auth",render:function(e){return a.a.createElement(fe,e)}}),a.a.createElement(m.a,{path:"/howardreact/",exact:!0,component:re}),a.a.createElement(f.a,{to:"/howardreact/"}));return e.isAuthenticated&&(n=a.a.createElement(s.a,null,a.a.createElement(m.a,{path:"/howardreact/checkout",render:function(e){return a.a.createElement(se,e)}}),a.a.createElement(m.a,{path:"/howardreact/orders",render:function(e){return a.a.createElement(me,e)}}),a.a.createElement(m.a,{path:"/howardreact/logout",component:de}),a.a.createElement(m.a,{path:"/howardreact/auth",render:function(e){return a.a.createElement(fe,e)}}),a.a.createElement(m.a,{path:"/howardreact/",exact:!0,component:re}),a.a.createElement(f.a,{to:"/howardreact/"}))),a.a.createElement("div",null,a.a.createElement(M,null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("p",null,"Loading...")},n)))}))),_e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function he(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var pe=n(17),be=n(2),Ee=n(3),ve={ingredients:null,totalPrice:4,error:!1,building:!1},we={lettuce:.5,tomato:.5,cheese:1,meat:1.5,bacon:1},ke=function(e,t){var n=Object(pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(Ee.b)(e.ingredients,n),totalPrice:e.totalPrice+we[t.ingredientName],building:!0};return Object(Ee.b)(e,r)},Oe=function(e,t){var n=Object(pe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(Ee.b)(e.ingredients,n),totalPrice:e.totalPrice+we[t.ingredientName],building:!0};return Object(Ee.b)(e,r)},ye=function(e,t){return Object(Ee.b)(e,{ingredients:{lettuce:t.ingredients.lettuce,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat,tomato:t.ingredients.tomato},totalPrice:4,error:!1,building:!1})},je=function(e,t){return Object(Ee.b)(e,{error:!0})},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.a:return ke(e,t);case be.n:return Oe(e,t);case be.p:return ye(e,t);case be.f:return je(e);default:return e}},Ne={orders:[],loading:!1,purchased:!1},Ie=function(e,t){return Object(Ee.b)(e,{purchased:!1})},Te=function(e,t){return Object(Ee.b)(e,{loading:!0})},Be=function(e,t){var n=Object(Ee.b)(t.orderData,{id:t.orderId});return Object(Ee.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},Ce=function(e,t){return Object(Ee.b)(e,{loading:!1})},De=function(e,t){return Object(Ee.b)(e,{loading:!0})},Ae=function(e,t){return Object(Ee.b)(e,{orders:t.orders,loading:!1})},Le=function(e,t){return Object(Ee.b)(e,{loading:!1})},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.m:return Ie(e);case be.k:return Te(e);case be.l:return Be(e,t);case be.j:return Ce(e);case be.h:return De(e);case be.i:return Ae(e,t);case be.g:return Le(e);default:return e}},xe={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Ue=function(e,t){return Object(Ee.b)(e,{error:null,loading:!0})},Pe=function(e,t){return Object(Ee.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Fe=function(e,t){return Object(Ee.b)(e,{error:t.error,loading:!1})},Me=function(e,t){return Object(Ee.b)(e,{token:null,userId:null})},ze=function(e,t){return Object(Ee.b)(e,{authRedirectPath:t.path})},He=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be.d:return Ue(e);case be.e:return Pe(e,t);case be.b:return Fe(e,t);case be.c:return Me(e);case be.o:return ze(e,t);default:return e}},Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Qe=Object(l.c)({burgerBuilder:Se,order:Re,auth:He}),Ve=Object(l.e)(Qe,Ge(Object(l.a)(d.a))),We=a.a.createElement(u.a,{store:Ve},a.a.createElement(i.a,null,a.a.createElement(ge,null)));c.a.render(We,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/howardreact",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/howardreact","/service-worker.js");_e?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):he(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):he(e)}))}}()}],[[64,1,2]]]);
//# sourceMappingURL=main.6956a6e6.chunk.js.map