(this["webpackJsonpcar-rental-system"]=this["webpackJsonpcar-rental-system"]||[]).push([[0],{121:function(e,a,t){"use strict";t.r(a);var c=t(2),s=t(1),r=t.n(s),l=t(20),n=t.n(l),i=(t(63),t(25)),o=t.n(i),d=(t(64),t(17)),m=t(8),j=(t(69),t(70),t(55)),b=(t(71),j.a.initializeApp({apiKey:"AIzaSyBQji1cr-UkQHhMip8n-oOAqgDo7x0v8C8",authDomain:"car-rental-system-auth.firebaseapp.com",projectId:"car-rental-system-auth",storageBucket:"car-rental-system-auth.appspot.com",messagingSenderId:"400787183169",appId:"1:400787183169:web:6470c068551de3ce0318c0"}).auth()),u=t(21),h=t.n(u);function p(){var e=Object(m.b)();Object(s.useEffect)((function(){b.onAuthStateChanged((function(a){null!==a&&e({type:"login/completed",payload:{current_user:a}})}))}),[]);var a=Object(s.useRef)(),t=Object(s.useRef)(),r=Object(s.useRef)(),l=Object(s.useRef)(),n=Object(s.useRef)(),i=Object(m.c)((function(e){return e.auth.status})),j=Object(m.c)((function(e){return e.auth.current_user}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{children:Object(c.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(c.jsx)("a",{className:"navbar-brand",href:"/",children:"Car Rental"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02",children:Object(c.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(d.c,{className:"nav-link",to:"/",children:"Home"})}),"successful"===i?Object(c.jsx)("li",{className:"nav-item",children:Object(c.jsx)(d.c,{className:"nav-link",to:"/carView",children:"View Cars"})}):"","successful"!==i?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0","data-toggle":"modal","data-target":"#loginFormModal",children:"Login"}),Object(c.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0 ml-2","data-toggle":"modal","data-target":"#signUpModal",children:"Sign Up"})]}):Object(c.jsxs)("li",{className:"nav-item dropdown",children:[Object(c.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:j?j.email:""}),Object(c.jsx)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:Object(c.jsx)("a",{className:"dropdown-item",href:"#",onClick:function(){b.signOut(),e({type:"loggedOut"})},children:"Logout"})})]})]})})]})}),Object(c.jsx)("div",{id:"signUpModal",className:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(c.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h5",{className:"modal-title",id:"exampleModalCenterTitle",children:"Sign Up"}),Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsxs)("form",{onSubmit:function(c){var s,l;(c.preventDefault(),t.current.value===r.current.value)?(e((s=a.current.value,l=t.current.value,function(e,a){console.log("hello world"),e({type:"signup/pending"}),b.createUserWithEmailAndPassword(s,l).then((function(a){e({type:"signup/completed",payload:a.user}),h.a.post("".concat("https://mysterious-anchorage-28401.herokuapp.com","/addNewUser"),{id:a.user.uid,email:a.user.email})})).catch((function(a){e({type:"signup/failed",payload:a})}))})),o()("#signUpModal").modal("hide"),c.target.reset()):alert("passwords don't match")},children:[Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{htmlFor:"signup-email",className:"col-sm-2 col-form-label",children:"Email"}),Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsx)("input",{type:"email",ref:a,className:"form-control",id:"signup-email",placeholder:"Email"})})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{htmlFor:"signup-password",className:"col-sm-2 col-form-label",children:"Password"}),Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsx)("input",{type:"password",ref:t,className:"form-control",id:"signup-password",placeholder:"Password"})})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{htmlFor:"signup-confirm-password",className:"col-sm-2 col-form-label",children:"Confirm Password"}),Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsx)("input",{type:"password",ref:r,className:"form-control",id:"signup-confirm-password",placeholder:"Re type password"})})]}),Object(c.jsx)("div",{className:"form-group row",children:Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Sign Up"})})})]})})]})})}),Object(c.jsx)("div",{id:"loginFormModal",className:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true",children:Object(c.jsx)("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:Object(c.jsxs)("div",{className:"modal-content",children:[Object(c.jsxs)("div",{className:"modal-header",children:[Object(c.jsx)("h5",{className:"modal-title",id:"exampleModalCenterTitle",children:"Login"}),Object(c.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(c.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(c.jsx)("div",{className:"modal-body",children:Object(c.jsxs)("form",{onSubmit:function(a){var t,c;a.preventDefault(),e((t=l.current.value,c=n.current.value,function(e,a){e({type:"login/pending"}),b.signInWithEmailAndPassword(t,c).then((function(a){console.log(a.user),e({type:"login/completed",payload:a.user})})).catch((function(a){e({type:"login/failed",payload:a})}))})),o()("#loginFormModal").modal("hide"),a.target.reset()},children:[Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{htmlFor:"loginEmail",className:"col-sm-2 col-form-label",children:"Email"}),Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsx)("input",{type:"email",ref:l,className:"form-control",id:"loginEmail",placeholder:"Email"})})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{htmlFor:"loginPassword",className:"col-sm-2 col-form-label",children:"Password"}),Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsx)("input",{type:"password",ref:n,className:"form-control",id:"loginPassword",placeholder:"Password"})})]}),Object(c.jsx)("div",{className:"form-group row",children:Object(c.jsx)("div",{className:"col-sm-10",children:Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Log In"})})})]})})]})})})]})}function O(){return Object(c.jsx)("body",{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("div",{className:"jumbotron mt-3",style:{background:"none",color:"white",fontFamily:"Brush Script MT"},children:[Object(c.jsx)("h1",{className:"display-1 text-center",children:"Car Rental System"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("p",{className:"lead",children:"This project is designed so as to be used by Car Rental Company specializing  in renting cars to customers ."}),Object(c.jsx)("p",{children:"The Car Rental System is being developed for customers so that they can  book their vehicles when they required ."})]})})})}function g(e){var a=e.car;return Object(c.jsx)("div",{className:"mt-3 col-md-4 col-sm-6 col-12",children:Object(c.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(c.jsx)("img",{className:"card-img-top",src:"data:image/png;base64, ".concat(a.image),alt:"Card cap"}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:a.name}),Object(c.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:a.brand}),Object(c.jsx)("p",{className:"card-text",children:a.description}),Object(c.jsx)(d.b,{to:"/carView/".concat(a.id),className:"btn btn-primary",children:"View Car"})]})]})})}function x(){var e=Object(m.c)((function(e){return e.auth.status})),a=Object(m.c)((function(e){return e.carManagment.cars}));if("successful"!==e)return"You need to login";var t=a?a.map((function(e){return Object(c.jsx)(g,{car:e},e.id)})):"";return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsx)("div",{className:"row",children:t})})})}var f=t(6),v="https://mysterious-anchorage-28401.herokuapp.com";var N=t(31),y=t(40),w=t.n(y);function C(e){var a=e.carId,t=Object(s.useState)(new Date),r=Object(N.a)(t,2),l=r[0],n=r[1],i=Object(s.useState)(new Date),o=Object(N.a)(i,2),d=o[0],j=o[1],b=Object(s.useState)(""),u=Object(N.a)(b,2),p=u[0],O=u[1],g=Object(m.c)((function(e){return e.auth.current_user})),x=Object(m.b)();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("form",{className:"text-center",style:{textAlign:"center"},onSubmit:function(e){var t;e.preventDefault(),console.log(l.getTime(),d.getTime(),p),x((t={billingPrice:11574074e-12*(l-d),fromTime:d.getTime()/1e3,toTime:l.getTime()/1e3,carId:a,userId:g.uid,pickupLocation:p},function(e,a){h.a.post("".concat(v,"/addNewBooking"),t)})),O(""),alert("Booking added")},children:[Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{for:"staticEmail",className:"col-sm-2 col-form-label text-white",children:"From Time"}),Object(c.jsx)(w.a,{onChange:function(e){return j(e)},value:d})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{for:"inputPassword",className:"col-sm-2 col-form-label text-white",children:"To Time"}),Object(c.jsx)(w.a,{onChange:function(e){return n(e)},value:l})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("label",{for:"pickup",className:"col-sm-2 col-form-label text-white",children:"Pick up location"}),Object(c.jsx)("input",{type:"text",className:"col-md-6 form-control",id:"pickup",placeholder:"Enter location",value:p,onChange:function(e){return O(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-group row",children:[Object(c.jsx)("p",{className:"col-sm-2 col-form-label text-white",children:"Price"}),Object(c.jsx)("p",{className:"col-sm-2 col-form-label text-white",children:11574074e-12*(l-d)+" rs"})]}),Object(c.jsx)("button",{type:"submit",class:"btn btn-primary",children:"Book Car"})]})})})}function k(e){var a=e.match,t=Object(m.c)((function(e){return e.carManagment.cars})),s=t?t.find((function(e){return e.id===Number(a.params.carId)})):null;return s?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("img",{src:"data:image/png;base64, ".concat(s.image),className:"img-fluid",alt:"Car",style:{width:"60%",height:"20%"}}),Object(c.jsxs)("div",{className:"carWriteup",style:{color:"white"},children:[Object(c.jsx)("h3",{children:s.name}),Object(c.jsx)("h5",{children:s.brand}),Object(c.jsx)("p",{children:s.description})]})]}),Object(c.jsx)(C,{carId:s.id})]}):""}var T=function(){return Object(m.b)()((function(e,a){h.a.get("".concat(v,"/getAllCars"),{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(a){e({type:"carManagment/carDataFetched",payload:a.data})}))})),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(p,{}),Object(c.jsxs)(f.c,{children:[Object(c.jsx)(f.a,{exact:!0,path:"/",component:O}),Object(c.jsx)(f.a,{exact:!0,path:"/carView",component:x}),Object(c.jsx)(f.a,{exact:!0,path:"/carView/:carId",component:k})]})]})},F=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,125)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),c(e),s(e),r(e),l(e)}))},M=t(19),S=t(56),D=t(57),P=t(7),I={current_user:null,status:"idle",error:null};var E=Object(M.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"loggedOut":return Object(P.a)(Object(P.a)({},e),{},{status:"idle"});case"login/pending":return Object(P.a)(Object(P.a)({},e),{},{status:"pending"});case"login/completed":return Object(P.a)(Object(P.a)({},e),{},{current_user:a.payload.current_user,status:"successful"});case"login/failed":return Object(P.a)(Object(P.a)({},e),{},{error:a.payload.error,status:"failed"});case"signup/pending":return Object(P.a)(Object(P.a)({},e),{},{status:"pending"});case"signup/completed":return Object(P.a)(Object(P.a)({},e),{},{current_user:a.payload.current_user,status:"successful"});case"signup/failed":return Object(P.a)(Object(P.a)({},e),{},{error:a.payload.error,status:"failed"});default:return e}},carManagment:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cars:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"carManagment/carDataFetched":return Object(P.a)(Object(P.a)({},e),{},{cars:a.payload});default:return e}}}),A=Object(M.createStore)(E,Object(S.composeWithDevTools)(Object(M.applyMiddleware)(D.a)));t(50),t(118),t(119);n.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m.a,{store:A,children:Object(c.jsx)(d.a,{children:Object(c.jsx)(T,{})})})}),document.getElementById("root")),F()},69:function(e,a,t){},70:function(e,a,t){}},[[121,1,2]]]);
//# sourceMappingURL=main.27fee4c5.chunk.js.map