(this.webpackJsonpsemeru=this.webpackJsonpsemeru||[]).push([[0],{26:function(e,t,c){},52:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),r=c(29),n=c.n(r),j=(c(52),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,80)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),s(e),a(e),r(e),n(e)}))}),b=c(11),i=c(76),o=c(79),l=c(44),d=(c(26),c(18)),u=c(13),O=c(21),x=c(38),h=c(41),m=c(75),f=c(77),g=c(3);function p(){var e=Object(s.useState)(localStorage.getItem("username")),t=Object(b.a)(e,2),c=t[0],a=(t[1],Object(s.useState)([])),r=Object(b.a)(a,2),n=r[0],j=r[1],u=Object(s.useState)({name:"",start:"",stop:"",hours:"",minutes:"",seconds:"",duration:"",interrupted:!1,interruptedIndex:0}),f=Object(b.a)(u,2),p=f[0],S=f[1],k=Object(s.useState)(0),y=Object(b.a)(k,2),N=y[0],C=y[1],w=Object(s.useState)(!0),I=Object(b.a)(w,2),D=I[0],T=I[1],A=Object(s.useState)(!0),R=Object(b.a)(A,2),B=R[0],E=R[1],M=Object(s.useState)(!0),P=Object(b.a)(M,2),F=P[0],G=P[1],L=Object(s.useState)(!1),U=Object(b.a)(L,2),z=U[0],H=U[1],K=Object(s.useState)(0),J=Object(b.a)(K,2),V=J[0],X=J[1],Z=Object(s.useState)(0),q=Object(b.a)(Z,2),W=q[0],Y=q[1],_=Object(s.useState)(0),Q=Object(b.a)(_,2),$=Q[0],ee=Q[1],te=Object(s.useState)(""),ce=Object(b.a)(te,2),se=ce[0],ae=ce[1];function re(){X(0),Y(0),ee(0),H(!1),T(!0),E(!0),G(!0),n[N].stop=be(),n[N].duration=String($).padStart(2,"0")+":"+String(W).padStart(2,"0")+":"+String(V).padStart(2,"0"),n[N].hours=$,n[N].minutes=W,n[N].seconds=V,ie(c)}function ne(){n[N].interrupted=!0,localStorage.setItem(c+": index -> ",String(N)),re()}function je(){H(!1===z)}function be(){var e=new Date;return String(e.getHours()).padStart(2,"0")+":"+String(e.getMinutes()).padStart(2,"0")}function ie(e){null!=e&&d.a.database().ref("usernames/"+e+"/entries").set(n)}function oe(){return Object(g.jsx)("div",{children:Object(g.jsxs)("h4",{className:"logout",children:["S E M E R U",Object(g.jsx)(O.c,{className:"logoutButton",to:"/login",children:Object(g.jsx)(m.a,{style:{color:"#526b4d",border:"#526b4d"}})})]})})}function le(){return Object(g.jsx)(h.a,{seconds:V,minutes:W,hours:$,onChange:function(e){var t=e.hours,c=e.minutes,s=e.seconds;X(s),Y(c),ee(t)},onCallback:function(){return console.log("Finish")},autoStart:z,render:function(e){var t=e.formatted;return Object(g.jsx)("div",{children:Object(g.jsx)("p",{children:t})})}})}function de(){return Object(g.jsxs)("div",{className:"component",children:[Object(g.jsx)("br",{}),Object(g.jsx)("h4",{className:"setting",children:"S E T T I N G S"}),Object(g.jsx)("br",{}),Object(g.jsx)("h3",{className:"stopwatch",children:Object(g.jsx)(le,{})}),Object(g.jsx)("br",{}),Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:je,disabled:B,children:"Pause/Resume"}),"\u2003",Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:re,disabled:D,children:"Stop"}),"\u2003",Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:ne,disabled:F,children:"Interrupt"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})}function ue(){return Object(g.jsxs)("div",{className:"component",children:[Object(g.jsx)("br",{}),Object(g.jsx)("h4",{className:"setting",children:"S T A T I S T I C S"}),Object(g.jsx)("br",{}),Object(g.jsx)("h3",{className:"stopwatch",children:Object(g.jsx)(le,{})}),Object(g.jsx)("br",{}),Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:je,disabled:B,children:"Pause/Resume"}),"\u2003",Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:re,disabled:D,children:"Stop"}),"\u2003",Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:ne,disabled:F,children:"Interrupt"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{})]})}function Oe(){return Object(g.jsx)("div",{className:"tableFixHead",children:Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"Name"}),Object(g.jsx)("th",{scope:"col",children:"Start Time"}),Object(g.jsx)("th",{scope:"col",children:"End Time"}),Object(g.jsx)("th",{scope:"col",children:"Duration"}),Object(g.jsx)("th",{scope:"col",children:"Start / Restart"}),Object(g.jsx)("th",{scope:"col",children:"Delete"})]})}),Object(g.jsx)("tbody",{children:0===n.length?Object(g.jsx)("div",{}):n.map((function(e,t){return Object(g.jsxs)("tr",{className:"tableBody",children:[Object(g.jsx)("td",{children:e.name}),Object(g.jsx)("td",{children:e.start}),Object(g.jsx)("td",{children:e.stop}),Object(g.jsx)("td",{children:e.duration}),Object(g.jsx)("td",{children:Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:function(){return function(e){if(!0===n[e].interrupted){var t=parseInt(localStorage.getItem(c+": index -> "));Y(n[t].minutes),X(n[t].seconds),ee(n[t].hours)}else n[e].start=be(),Y(0),X(0),ee(0),n[e].duration=String($).padStart(2,"0")+":"+String(W).padStart(2,"0")+":"+String(V).padStart(2,"0"),ie(c);C(e),H(!0),T(!1),E(!1),G(!1),ie(c)}(t)},children:"Start"})}),Object(g.jsx)("td",{children:Object(g.jsx)("div",{onClick:function(){return function(e){var t=n.filter((function(t,c){return c!==e}));j(t),null!=c&&d.a.database().ref("usernames/"+c+"/entries").set(t)}(t)},children:Object(g.jsx)(v,{})})})]},t)}))})]})})}return Object(s.useEffect)((function(){console.log("loading.."),j([]),d.a.database().ref("usernames/"+c+"/entries").on("value",(function(e){e.val()&&(console.log("snap.val()",e.val()),j(e.val()))})),d.a.database().ref("usernames/"+c+"/security").on("value",(function(e){e.val()&&(console.log("snap.val()",e.val()),ae(e.val().formOfAdress))}))}),[]),Object(g.jsxs)("div",{children:[Object(g.jsx)(oe,{}),Object(g.jsxs)("h1",{children:[function(){var e=(new Date).getHours();return e>=0&&e<12?"Good Morning, ":e>=12&&e<18?"Good Afternoon, ":e>=18&&e<0?"Good Evening, ":void 0}()," ",se+c,Object(g.jsx)("br",{})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("h2",{children:"Tasks"}),Object(g.jsx)("br",{}),Object(g.jsx)("h5",{children:"Task Name"}),Object(g.jsxs)("div",{className:"d-flex",id:"inputDiv",children:[Object(g.jsx)(i.a,{className:"form-group w-25",children:Object(g.jsx)(o.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:p.name,onChange:function(e){return S((function(t){return Object(x.a)(Object(x.a)({},t),{},{name:e.target.value})}))}})}),Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:function(){n.push(p),ie(c)},children:"Add"})]}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(Oe,{}),Object(g.jsx)("br",{}),Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:function(){var e=[];j(e),null!=c&&d.a.database().ref("usernames/"+c+"/entries").set(e)},children:"Delete All"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(de,{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(ue,{})]})}function v(){return Object(g.jsx)(f.a,{})}function S(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),n=Object(b.a)(r,2),j=n[0],x=n[1],h=Object(s.useState)(""),m=Object(b.a)(h,2),f=m[0],p=m[1],v=Object(s.useState)(""),S=Object(b.a)(v,2),k=S[0],y=S[1],N=Object(u.g)();function C(){d.a.database().ref("usernames/"+c+"/security").on("value",(function(e){e.val()?(console.log("snap.val()",e.val()),p(e.val().password)):y("Incorrect Username")}))}return Object(s.useEffect)((function(){""===j&&""===f||(j===f?(console.log("login successful"),localStorage.setItem("username",c),N.push("/semeru"),y("")):y("Incorrect password"))}),[f]),Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Semeru"}),Object(g.jsx)("br",{}),Object(g.jsx)("h2",{children:"Login"}),Object(g.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(g.jsx)(i.a,{className:"form-group w-25",children:Object(g.jsx)(o.a,{"aria-label":"Default",placeholder:"Username",value:c,onChange:function(e){return a(e.target.value)}})})}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(g.jsx)(i.a,{className:"form-group w-25",children:Object(g.jsx)(o.a,{"aria-label":"Default",type:"password",placeholder:"Password",value:j,onChange:function(e){return x(e.target.value)}})})}),Object(g.jsx)("h6",{id:"errormessage",children:k}),Object(g.jsx)("br",{}),Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:function(){return C()},children:"Login"}),Object(g.jsx)("br",{}),Object(g.jsxs)("h6",{children:["Don't have an account yet? ",Object(g.jsx)(O.c,{className:"normalLink",to:"/registration",children:"Register"})]})]})}c(68);var k=c(78);function y(){var e=Object(s.useState)(""),t=Object(b.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),n=Object(b.a)(r,2),j=n[0],x=n[1],h=Object(s.useState)(""),m=Object(b.a)(h,2),f=m[0],p=m[1],v=Object(s.useState)(""),S=Object(b.a)(v,2),y=S[0],N=S[1],C=Object(s.useState)(""),w=Object(b.a)(C,2),I=w[0],D=w[1],T=Object(s.useState)(!1),A=Object(b.a)(T,2),R=(A[0],A[1],Object(u.g)());function B(){f===j?c.length>1?(d.a.database().ref("usernames/"+c+"/security/password").set(j),d.a.database().ref("usernames/"+c+"/security/formOfAdress").set(I),console.log(c),R.push("/login")):N("Username too short"):N("Passwords do not match")}return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Semeru"}),Object(g.jsx)("br",{}),Object(g.jsx)("h2",{children:"Registration"}),Object(g.jsx)("br",{}),Object(g.jsxs)(k.a,{children:[Object(g.jsx)(k.a.Toggle,{variant:"primary",id:"dropdown-basic",style:{background:"#526b4d",border:"#526b4d"},children:"Form of Adress"}),Object(g.jsx)(k.a.Menu,{children:[{value:"Mr. "},{value:"Ms. "},{value:"Mrs. "}].map((function(e,t){return Object(g.jsx)(k.a.Item,{onClick:function(){return D(e.value)},children:e.value},t)}))})]}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(g.jsx)(i.a,{className:"form-group w-25",children:Object(g.jsx)(o.a,{"aria-label":"Default",placeholder:"Username",value:c,onChange:function(e){return a(e.target.value)}})})}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(g.jsx)(i.a,{className:"form-group w-25",children:Object(g.jsx)(o.a,{"aria-label":"Default",type:"password",placeholder:"Password",value:f,onChange:function(e){return p(e.target.value)}})})}),Object(g.jsx)("br",{}),Object(g.jsx)("div",{className:"d-flex",id:"inputDiv",children:Object(g.jsx)(i.a,{className:"form-group w-25",children:Object(g.jsx)(o.a,{"aria-label":"Default",type:"password",placeholder:"Confirm Password",value:j,onChange:function(e){return x(e.target.value)}})})}),Object(g.jsx)("h6",{id:"errormessage",children:y}),Object(g.jsx)("br",{}),Object(g.jsx)(l.a,{style:{background:"#526b4d",border:"#526b4d"},onClick:function(){return B()},children:"Sign Up"}),Object(g.jsxs)("h6",{children:["Already have an account? ",Object(g.jsx)(O.c,{className:"normalLink",to:"/login",children:"Sign in"})]})]})}function N(){return Object(g.jsx)("div",{children:Object(g.jsx)(O.b,{children:Object(g.jsxs)(u.d,{children:[Object(g.jsx)(u.b,{path:"/login",component:S,basename:"/semeru"}),Object(g.jsx)(u.b,{path:"/registration",component:y,basename:"/semeru"}),Object(g.jsx)(u.b,{path:"/semeru",component:p,basename:"/semeru"}),Object(g.jsx)(u.b,{path:"/",basename:"/semeru",children:Object(g.jsx)(u.a,{to:"/login"})})]})})})}d.a.initializeApp({apiKey:"AIzaSyBbzX_9Vp3RqNkR7Ky8Z42HNTIj07VKWGA",authDomain:"semeru-7eac8.firebaseapp.com",databaseURL:"https://semeru-7eac8-default-rtdb.firebaseio.com",projectId:"semeru-7eac8",storageBucket:"semeru-7eac8.appspot.com",messagingSenderId:"652725791499",appId:"1:652725791499:web:2ab8295068db2719df100e",measurementId:"G-7BD6XZ6BY1"}),n.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(O.a,{children:Object(g.jsx)(N,{})})}),document.getElementById("root")),j()}},[[70,1,2]]]);
//# sourceMappingURL=main.8703f855.chunk.js.map