(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{116:function(e,t,n){"use strict";var a=n(0),i=n.n(a),l=n(117),u=n.n(l);t.a=function(e){var t=null,n=[u.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(u.a.Invalid),e.elementType){case"input":t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=i.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=i.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=i.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:u.a.Input},i.a.createElement("label",{className:u.a.Label},e.label),t)}},117:function(e,t,n){e.exports={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},125:function(e,t,n){e.exports={Auth:"Auth__Auth__1TInt"}},127:function(e,t,n){"use strict";n.r(t);var a=n(21),i=n(6),l=n(7),u=n(9),r=n(8),o=n(10),s=n(0),c=n.n(s),d=n(13),p=n(111),h=n(116),m=n(32),g=n(31),v=n(125),f=n.n(v),b=n(14),_=n(3),E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var l=arguments.length,o=new Array(l),s=0;s<l;s++)o[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(o)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},n.inputChangedHandler=function(e,t){var i=Object(_.b)(n.state.controls,Object(a.a)({},t,Object(_.b)(n.state.controls[t],{value:e.target.value,valid:Object(_.a)(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:i})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthModeHandler=function(){n.setState(function(e){return{isSignup:!e.isSignup}})},n}return Object(o.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var a=t.map(function(t){return c.a.createElement(h.a,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})});this.props.loading&&(a=c.a.createElement(g.a,null));var i=null;this.props.error&&(i=c.a.createElement("p",null,this.props.error.message));var l=null;return this.props.isAuthenticated&&(l=c.a.createElement(p.a,{to:this.props.authRedirectPath})),c.a.createElement("div",{className:f.a.Auth},l,i,c.a.createElement("form",{onSubmit:this.submitHandler},a,c.a.createElement(m.a,{btnType:"Success"},"SUBMIT")),c.a.createElement(m.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),t}(s.Component);t.default=Object(d.b)(function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}},function(e){return{onAuth:function(t,n,a){return e(b.b(t,n,a))},onSetAuthRedirectPath:function(){return e(b.j("/"))}}})(E)}}]);
//# sourceMappingURL=4.57a27744.chunk.js.map