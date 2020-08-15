(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"n",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"f",function(){return c}),n.d(t,"k",function(){return i}),n.d(t,"l",function(){return u}),n.d(t,"j",function(){return l}),n.d(t,"m",function(){return s}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return m}),n.d(t,"g",function(){return f}),n.d(t,"d",function(){return p}),n.d(t,"e",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"c",function(){return _}),n.d(t,"o",function(){return b});var r="ADD_INGREDIENT",a="REMOVE_INGREDIENT",o="SET_INGREDIENTS",c="FETCH_INGREDIENTS_FAILED",i="PURCHASE_BURGER_START",u="PURCHASE_BURGER_SUCCESS",l="PURCHASE_BURGER_FAIL",s="PURCHASE_INIT",d="FETCH_ORDERS_START",m="FETCH_ORDERS_SUCCESS",f="FETCH_ORDERS_FAIL",p="AUTH_START",g="AUTH_SUCCESS",h="AUTH_FAIL",_="AUTH_LOGOUT",b="SET_AUTH_REDIRECT_PATH"},function(e,t,n){"use strict";n.d(t,"b",function(){return a}),n.d(t,"a",function(){return o});var r=n(20),a=function(e,t){return Object(r.a)({},e,t)},o=function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},,,,,,function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"i",function(){return c}),n.d(t,"e",function(){return i}),n.d(t,"g",function(){return l}),n.d(t,"h",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"b",function(){return _}),n.d(t,"f",function(){return g}),n.d(t,"j",function(){return b}),n.d(t,"c",function(){return E});var r=n(2),a=n(17),o=function(e){return{type:r.a,ingredientName:e}},c=function(e){return{type:r.n,ingredientName:e}},i=function(){return function(e){a.a.get("https://react-my-burger-21571.firebaseio.com/ingredients.json").then(function(t){var n;e((n=t.data,{type:r.p,ingredients:n}))}).catch(function(t){e({type:r.f})})}},u=n(20),l=function(e,t){return function(n){n({type:r.k}),a.a.post("/orders.json?auth="+t,e).then(function(t){n(function(e,t){return{type:r.l,orderId:e,orderData:t}}(t.data.name,e))}).catch(function(e){n(function(e){return{type:r.j,error:e}}(e))})}},s=function(){return{type:r.m}},d=function(e,t){return function(n){n({type:r.h});var o="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';a.a.get("/orders.json"+o).then(function(e){var t,a=[];for(var o in e.data)a.push(Object(u.a)({},e.data[o],{id:o}));n((t=a,{type:r.i,orders:t}))}).catch(function(e){var t;n((t=e,{type:r.g,error:t}))})}},m=n(29),f=n.n(m),p=function(e,t){return{type:r.e,idToken:e,userId:t}},g=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:r.c}},h=function(e){return function(t){setTimeout(function(){t(g())},1e3*e)}},_=function(e,t,n){return function(a){a({type:r.d});var o={email:e,password:t,returnSecureToken:!0},c="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDQ3EDi1hzMFnV9to42umfUcZ5rypToJFI";n||(c="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDQ3EDi1hzMFnV9to42umfUcZ5rypToJFI"),f.a.post(c,o).then(function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),a(p(e.data.idToken,e.data.localId)),a(h(e.data.expiresIn))}).catch(function(e){var t;a((t=e.response.data.error,{type:r.b,error:t}))})}},b=function(e){return{type:r.o,path:e}},E=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(g());else{var r=localStorage.getItem("userId");e(p(t,r)),e(h((n.getTime()-(new Date).getTime())/1e3))}}else e(g())}}},,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__2z9NQ",BreadTop:"BurgerIngredient__BreadTop__2Pkwe",Seeds1:"BurgerIngredient__Seeds1__2k2x7",Seeds2:"BurgerIngredient__Seeds2__9Mret",Meat:"BurgerIngredient__Meat__1LdrR",Cheese:"BurgerIngredient__Cheese__1eqwP",Lettuce:"BurgerIngredient__Lettuce__zoLnB",Tomato:"BurgerIngredient__Tomato__1993E",Bacon:"BurgerIngredient__Bacon__2RZZH"}},,function(e,t,n){"use strict";var r=n(29),a=n.n(r).a.create({baseURL:"https://react-my-burger-21571.firebaseio.com/"});t.a=a},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer__SideDrawer__3wvlM",Open:"SideDrawer__Open__3xsf8",Close:"SideDrawer__Close__2S6c7",Logo:"SideDrawer__Logo__10IHv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl__BuildControl__ibcUQ",Label:"BuildControl__Label__2VLnR",Less:"BuildControl__Less__3X6hg",More:"BuildControl__More__2eQpV"}},,,,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(58),c=n.n(o);t.a=function(e){return e.show?a.a.createElement("div",{className:c.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(10),a=n(11),o=n(13),c=n(12),i=n(14),u=n(0),l=n.n(u),s=n(60),d=n.n(s),m=n(27),f=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"UNSAFE_componentWillUpdate",value:function(){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{show:this.props.show,clicked:this.props.modalClosed}),l.a.createElement("div",{className:d.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(u.Component);t.a=f},,function(e,t,n){e.exports={Toolbar:"Toolbar__Toolbar__2hkfg",Logo:"Toolbar__Logo__24rue",DesktopOnly:"Toolbar__DesktopOnly__15Sc_"}},,function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(38),c=n.n(o);t.a=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[c.a.Button,c.a[e.btnType]].join(" "),onClick:e.clicked},e.children)}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem__NavigationItem__3YSjr",active:"NavigationItem__active__2GQz1"}},function(e,t,n){e.exports={BuildControls:"BuildControls__BuildControls__220uz",OrderButton:"BuildControls__OrderButton__1ScSk",enable:"BuildControls__enable__3XAWA"}},function(e,t,n){e.exports={Button:"Button__Button__ajevi",Success:"Button__Success__1DMln",Danger:"Button__Danger__18hYt"}},function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(61),c=n.n(o);t.a=function(){return a.a.createElement("div",{className:c.a.Loader},"Loading...")}},function(e,t,n){"use strict";var r=n(19),a=n(0),o=n.n(a),c=n(28);t.a=function(e,t){return function(n){var i=Object(a.useState)(null),u=Object(r.a)(i,2),l=u[0],s=u[1],d=t.interceptors.request.use(function(e){return s(null),e}),m=t.interceptors.response.use(function(e){return e},function(e){s(e)});return Object(a.useEffect)(function(){return function(){t.interceptors.request.eject(d),t.interceptors.response.eject(m)}},[d,m]),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{show:l,modalClosed:function(){s(null)}},l?l.message:null),o.a.createElement(e,n))}}},,,,,,,function(e,t,n){"use strict";var r=n(63),a=n(0),o=n.n(a),c=n(59),i=n.n(c),u=n(10),l=n(11),s=n(13),d=n(12),m=n(14),f=n(15),p=n.n(f),g=function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=o.a.createElement("div",{className:p.a.BreadBottom});break;case"bread-top":e=o.a.createElement("div",{className:p.a.BreadTop},o.a.createElement("div",{className:p.a.Seeds1}),o.a.createElement("div",{className:p.a.Seeds2}));break;case"meat":e=o.a.createElement("div",{className:p.a.Meat});break;case"cheese":e=o.a.createElement("div",{className:p.a.Cheese});break;case"lettuce":e=o.a.createElement("div",{className:p.a.Lettuce});break;case"bacon":e=o.a.createElement("div",{className:p.a.Bacon});break;case"tomato":e=o.a.createElement("div",{className:p.a.Tomato});break;default:e=null}return e}}]),t}(a.Component);t.a=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(r.a)(Array(e.ingredients[t])).map(function(e,n){return o.a.createElement(g,{key:t+n,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=o.a.createElement("p",null,"Please start adding ingredients!")),o.a.createElement("div",{className:i.a.Burger},o.a.createElement(g,{type:"bread-top"}),t,o.a.createElement(g,{type:"bread-bottom"}))}},,,,,function(e,t,n){e.exports={Content:"Layout__Content__3KSp3"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo__Logo__2A07e"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems__NavigationItems__3HY9i"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__1eThf"}},function(e,t,n){e.exports={Backdrop:"Backdrop__Backdrop__eeZpu"}},function(e,t,n){e.exports={Burger:"Burger__Burger__2h2kL"}},function(e,t,n){e.exports={Modal:"Modal__Modal__cd320"}},function(e,t,n){e.exports={Loader:"Spinner__Loader__3dgUo",load2:"Spinner__load2__1sg5x"}},,,function(e,t,n){e.exports=n(110)},,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(48),c=n.n(o),i=n(112),u=n(8),l=n(18),s=n(51),d=(n(74),n(10)),m=n(11),f=n(13),p=n(12),g=n(14),h=n(114),_=n(56),b=n(111),E=n(115),v=function(e){return function(t){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={component:null},t}return Object(g.a)(n,t),Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?a.a.createElement(e,this.props):null}}]),n}(r.Component)},O=n(19),k=n(52),w=n.n(k),y=n(30),j=n.n(y),I=n(53),S=n.n(I),N=n(54),C=n.n(N),T=function(e){return a.a.createElement("div",{className:C.a.Logo},a.a.createElement("img",{src:S.a,alt:"MyBurger"}))},B=n(55),A=n.n(B),D=n(113),L=n(36),R=n.n(L),x=function(e){return a.a.createElement("li",{className:R.a.NavigationItem},a.a.createElement(D.a,{to:e.link,exact:e.exact,activeClassName:R.a.active},e.children))},U=function(e){return a.a.createElement("ul",{className:A.a.NavigationItems},a.a.createElement(x,{link:"/howardreact",exact:!0},"Burger Builder"),a.a.createElement(x,{link:"/howardreact/hook",exact:!0},"Hook"),e.isAuthenticated?a.a.createElement(x,{link:"/howardreact/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(x,{link:"/howardreact/logout"},"Logout"):a.a.createElement(x,{link:"/howardreact/auth"},"Authenticate"))},P=n(57),M=n.n(P),F=function(e){return a.a.createElement("div",{className:M.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},H=function(e){return a.a.createElement("header",{className:j.a.Toolbar},a.a.createElement(F,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:j.a.Logo},a.a.createElement(T,null)),a.a.createElement("nav",{className:j.a.DesktopOnly},a.a.createElement(U,{isAuthenticated:e.isAuth})))},z=n(21),G=n.n(z),W=n(27),Q=function(e){var t=[G.a.SideDrawer,G.a.Close];return e.open&&(t=[G.a.SideDrawer,G.a.Open]),a.a.createElement(a.a.Fragment,null,a.a.createElement(W.a,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" "),onClick:e.closed},a.a.createElement("div",{className:G.a.Logo},a.a.createElement(T,null)),a.a.createElement("nav",null,a.a.createElement(U,{isAuthenticated:e.isAuth}))))},V=Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(function(e){var t=Object(r.useState)(!1),n=Object(O.a)(t,2),o=n[0],c=n[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,{isAuth:e.isAuthenticated,drawerToggleClicked:function(){c(!o)}}),a.a.createElement(Q,{isAuth:e.isAuthenticated,open:o,closed:function(){c(!1)}}),a.a.createElement("main",{className:w.a.Content},e.children))}),Y=n(20),q=n(47),Z=n(37),J=n.n(Z),X=n(23),$=n.n(X),K=function(e){return a.a.createElement("div",{className:$.a.BuildControl},a.a.createElement("div",{className:$.a.Label},e.label),a.a.createElement("button",{className:$.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:$.a.More,onClick:e.added},"More"))},ee=[{label:"Lettuce",type:"lettuce"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Tomato",type:"tomato"}],te=function(e){return a.a.createElement("div",{className:J.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),ee.map(function(t){return a.a.createElement(K,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})}),a.a.createElement("button",{disabled:!e.purchasable,className:J.a.OrderButton,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},ne=n(28),re=n(32),ae=function(e){var t=Object.keys(e.ingredients).map(function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])});return a.a.createElement(a.a.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A burger sumary"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: "),e.price),a.a.createElement("p",null,"Continue to check out? "),a.a.createElement(re.a,{btnType:"Danger",clicked:e.purchaseCancelled},"CANCEL"),a.a.createElement(re.a,{btnType:"Success",clicked:e.purchaseContinued},"CONTINUE"))},oe=n(39),ce=n(40),ie=n(9),ue=n(17),le=Object(u.b)(function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}},function(e){return{onIngredientAdded:function(t){return e(ie.a(t))},onIngredientRemoved:function(t){return e(ie.i(t))},onInitIngredients:function(){return e(ie.e())},onInitPurchase:function(){return e(ie.h())},onSetAuthRedirectPath:function(t){return e(ie.j(t))}}})(Object(ce.a)(function(e){var t=Object(r.useState)(!1),n=Object(O.a)(t,2),o=n[0],c=n[1];Object(r.useEffect)(function(){e.onInitIngredients()},[]);var i=function(){c(!1)},u=Object(Y.a)({},e.ings);for(var l in u)u[l]=u[l]<=0;var s,d=null,m=e.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(oe.a,null);return e.ings&&(m=a.a.createElement(a.a.Fragment,null,a.a.createElement(q.a,{ingredients:e.ings}),a.a.createElement(te,{ingredientAdded:e.onIngredientAdded,ingredientRemoved:e.onIngredientRemoved,disabled:u,purchasable:(s=e.ings,Object.keys(s).map(function(e){return s[e]}).reduce(function(e,t){return e+t},0)>0),ordered:function(){e.isAuthenticated?c(!0):(e.onSetAuthRedirectPath("/howardreact/checkout"),e.history.push("/howardreact/auth"))},isAuth:e.isAuthenticated,price:e.price})),d=a.a.createElement(ae,{ingredients:e.ings,price:e.price,purchaseCancelled:i,purchaseContinued:function(){e.onInitPurchase(),e.history.push("/howardreact/checkout")}})),a.a.createElement(a.a.Fragment,null,a.a.createElement(ne.a,{show:o,modalClosed:i},d),m)},ue.a)),se=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(b.a,{to:"/howardreact"})}}]),t}(r.Component),de=Object(u.b)(null,function(e){return{onLogout:function(){return e(ie.f())}}})(se),me=v(function(){return n.e(3).then(n.bind(null,128))}),fe=v(function(){return n.e(5).then(n.bind(null,129))}),pe=v(function(){return n.e(4).then(n.bind(null,127))}),ge=function(e){function t(){return Object(d.a)(this,t),Object(f.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(h.a,null,a.a.createElement(_.a,{path:"/howardreact/auth",component:pe}),a.a.createElement(_.a,{path:"/howardreact",exact:!0,component:le}),a.a.createElement(b.a,{to:"/howardreact"}));return this.props.isAuthenticated&&(e=a.a.createElement(h.a,null,a.a.createElement(_.a,{path:"/howardreact/checkout",component:me}),a.a.createElement(_.a,{path:"/howardreact/orders",component:fe}),a.a.createElement(_.a,{path:"/howardreact/logout",component:de}),a.a.createElement(_.a,{path:"/howardreact/auth",component:pe}),a.a.createElement(_.a,{path:"/howardreact",exact:!0,component:le}),a.a.createElement(b.a,{to:"/howardreact"}))),a.a.createElement("div",null,a.a.createElement(V,null,e))}}]),t}(r.Component),he=Object(E.a)(Object(u.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(ie.c())}}})(ge)),_e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Ee=n(22),ve=n(2),Oe=n(3),ke={ingredients:null,totalPrice:4,error:!1,building:!1},we={lettuce:.5,tomato:.5,cheese:1,meat:1.5,bacon:1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.a:return function(e,t){var n=Object(Ee.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:Object(Oe.b)(e.ingredients,n),totalPrice:e.totalPrice+we[t.ingredientName],building:!0};return Object(Oe.b)(e,r)}(e,t);case ve.n:return function(e,t){var n=Object(Ee.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:Object(Oe.b)(e.ingredients,n),totalPrice:e.totalPrice+we[t.ingredientName],building:!0};return Object(Oe.b)(e,r)}(e,t);case ve.p:return function(e,t){return Object(Oe.b)(e,{ingredients:{lettuce:t.ingredients.lettuce,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat,tomato:t.ingredients.tomato},totalPrice:4,error:!1,building:!1})}(e,t);case ve.f:return function(e,t){return Object(Oe.b)(e,{error:!0})}(e);default:return e}},je={orders:[],loading:!1,purchased:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.m:return function(e,t){return Object(Oe.b)(e,{purchased:!1})}(e);case ve.k:return function(e,t){return Object(Oe.b)(e,{loading:!0})}(e);case ve.l:return function(e,t){var n=Object(Oe.b)(t.orderData,{id:t.orderId});return Object(Oe.b)(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})}(e,t);case ve.j:return function(e,t){return Object(Oe.b)(e,{loading:!1})}(e);case ve.h:return function(e,t){return Object(Oe.b)(e,{loading:!0})}(e);case ve.i:return function(e,t){return Object(Oe.b)(e,{orders:t.orders,loading:!1})}(e,t);case ve.g:return function(e,t){return Object(Oe.b)(e,{loading:!1})}(e);default:return e}},Se={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ve.d:return function(e,t){return Object(Oe.b)(e,{error:null,loading:!0})}(e);case ve.e:return function(e,t){return Object(Oe.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case ve.b:return function(e,t){return Object(Oe.b)(e,{error:t.error,loading:!1})}(e,t);case ve.c:return function(e,t){return Object(Oe.b)(e,{token:null,userId:null})}(e);case ve.o:return function(e,t){return Object(Oe.b)(e,{authRedirectPath:t.path})}(e,t);default:return e}},Ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,Te=Object(l.c)({burgerBuilder:ye,order:Ie,auth:Ne}),Be=Object(l.e)(Te,Ce(Object(l.a)(s.a))),Ae=a.a.createElement(u.a,{store:Be},a.a.createElement(i.a,null,a.a.createElement(he,null)));c.a.render(Ae,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/howardreact",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/howardreact","/service-worker.js");_e?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):be(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):be(e)})}}()}],[[64,1,2]]]);
//# sourceMappingURL=main.692f2182.chunk.js.map