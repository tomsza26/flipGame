(this.webpackJsonpflip=this.webpackJsonpflip||[]).push([[0],{12:function(e,t,a){e.exports=a(25)},17:function(e,t,a){},18:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(9),m=a.n(l),i=(a(17),a(18),a(19),a(3)),r=a(5),s=a(11),d=a(1);var o=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],l=t[1],m=Object(n.useState)(0),o=Object(i.a)(m,2),u=o[0],E=o[1],g=Object(n.useState)(0),y=Object(i.a)(g,2),p=y[0],v=y[1],f=Object(n.useState)(0),b=Object(i.a)(f,2),I=b[0],N=b[1],h=Object(n.useState)(0),k=Object(i.a)(h,2),B=k[0],C=k[1],j=Object(n.useState)(0),O=Object(i.a)(j,2),S=O[0],w=O[1],A=Object(n.useState)("F"),T=Object(i.a)(A,2),F=T[0],L=T[1],x=Object(n.useState)("L"),M=Object(i.a)(x,2),P=M[0],R=M[1],D=Object(n.useState)("I"),J=Object(i.a)(D,2),U=J[0],W=J[1],q=Object(n.useState)("P"),z=Object(i.a)(q,2),H=z[0],Y=z[1],$=0,G=null,K="testing",Q="testing",V=null,X=null,Z=null,_=0,ee=0,te=function(e){var t=[],a=e/2,n=0,l=0;X=a;var m=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},i=[d.x,d.b,d.c,d.a,d.d,d.e,d.f,d.g,d.h,d.i,d.j,d.l,d.k,d.m,d.n,d.o,d.p,d.q,d.r,d.s,d.t,d.u,d.v,d.w,d.y,d.z,d.A,d.B,d.C,d.D,d.E,d.F],s=(i=m(i)).slice(0,a);s=s.concat(s);for(var o=function(e){e<a?t.push(c.a.createElement("div",{className:"indent",key:e,id:e,onClick:function(t){return ae(t,e+a,a)}},c.a.createElement("div",{className:"frontCard"}),c.a.createElement("div",{className:"backCard"},c.a.createElement(r.a,{icon:s[e]})))):t.push(c.a.createElement("div",{className:"indent",key:e,id:e,onClick:function(t){return ae(t,e,a)}},c.a.createElement("div",{className:"frontCard"}),c.a.createElement("div",{className:"backCard"},c.a.createElement(r.a,{icon:s[e]}))))},u=0;u<e;u++)o(u);16===e?(document.getElementById("gameSelector").style.gridTemplateColumns="repeat(4, 1fr)",document.getElementById("gameSelector").style.gridTemplateRows="repeat(4, 1fr)",l=32e3):36===e?(document.getElementById("gameSelector").style.gridTemplateColumns="repeat(6, 1fr)",document.getElementById("gameSelector").style.gridTemplateRows="repeat(6, 1fr)",l=9e4):64===e&&(document.getElementById("gameSelector").style.gridTemplateColumns="repeat(8, 1fr)",document.getElementById("gameSelector").style.gridTemplateRows="repeat(8, 1fr)",l=192e3),w(l);var E=setInterval((function(){0===X&&(clearInterval(E),document.getElementById("flipCenter").style.opacity=1,document.getElementById("gameActive").id="game",document.getElementById("paused").style.display="none",document.removeEventListener("keydown",ne),C(0),w(0),N(0),n=0,X=null,1===_?(L("F"),R("L"),W("I"),Y("P"),_=0):(L("N"),R("I"),W("C"),Y("E"))),n===l&&setTimeout((function(){clearInterval(E),document.getElementById("flipCenter").style.opacity=1,document.getElementById("gameActive").id="game",document.getElementById("paused").style.display="none",C(0),w(0),L("F"),R("A"),W("I"),Y("L"),document.removeEventListener("keydown",ne)}),2e3),0===ee&&C(n+=500)}),500);t=m(t),N(t),document.getElementById("flipCenter").style.opacity=0,v(0),document.getElementById("game").id="gameActive",document.addEventListener("keydown",ne)},ae=function(e,t,a){"indent"===e.target.className&&(e.target.className="indentAnim",0===$?($=1,document.getElementById(K).className="indent",document.getElementById(Q).className="indent",G=t,K=e.target.id):(Q=e.target.id)!==K&&(e.target.className="indentAnim",G===t?(Z=G,setTimeout((function(){document.getElementById(Z).style.visibility="hidden",document.getElementById(Z-a).style.visibility="hidden",X-=1}),200)):(V=K,setTimeout((function(){document.getElementById(Q).className="indent",document.getElementById(V).className="indent"}),500)),$=0),1===$&&"indent"===document.getElementById(K).className&&(document.getElementById(K).className="indentAnim"))},ne=function(e){"p"===e.key?0===ee?(document.getElementById("paused").style.display="flex",ee=1):(document.getElementById("paused").style.display="none",ee=0):"Escape"===e.key&&(_=1,X=0,L("F"),R("L"),W("I"),Y("P"))};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{id:"flipCenter"},c.a.createElement("div",{className:"letter",id:a?"fAnim":"f",onClick:function(){E(0),v(0),l(1===a?0:1)}},c.a.createElement("div",{className:"front"},F),c.a.createElement("div",{className:"back"},"Alpha version")),c.a.createElement("div",{className:"letter",id:a?"lAnim":"l"},P),c.a.createElement("div",{className:"letter",id:1===u?"iAnim":"i",onClick:function(){l(0),v(0),E(1===u?0:1)}},c.a.createElement("div",{className:"front"},U),c.a.createElement("div",{className:"back",id:"iback"},c.a.createElement("p",{id:"pIns",className:"ibacked"},"Instructions"),c.a.createElement("p",{className:"ibacked"},"Press [p] to pause, or [ESC] to abandon game."),c.a.createElement("p",{className:"ibacked"},"Flip is a timed card memory game. Click the green cards to see what symbol they uncover and try to find the matching symbol underneath the other cards."),c.a.createElement("p",{className:"ibacked"},"Uncover two matching symbols at once to eliminate them from the game."))),c.a.createElement("div",{className:"letter",id:u&&!document.getElementById("pAnimation")?"pAnim":p||u?"pAnimation":"p",onClick:function(){0===p&&(l(0),E(0),v(1===p?0:1))}},c.a.createElement("div",{className:"front"},H),c.a.createElement("div",{className:"back"},c.a.createElement("p",{className:"level",onClick:function(){return te(16)}},"EASY"),c.a.createElement("p",{className:"level",onClick:function(){return te(36)}},"MEDIUM"),c.a.createElement("p",{className:"level",onClick:function(){return te(64)}},"HARD")))),c.a.createElement("div",{id:"testing"}),c.a.createElement("div",{id:"paused"}),c.a.createElement("div",{id:"game"},c.a.createElement(s.a,{now:B,max:S}),c.a.createElement("div",{className:"gameInside",id:"gameSelector"},I)))};var u=function(){return c.a.createElement("div",{className:"App",id:"helloSir"},c.a.createElement(o,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(c.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.4441163f.chunk.js.map