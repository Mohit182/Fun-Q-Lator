(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},108:function(e,t,a){},128:function(e,t,a){},130:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(36),l=a.n(r),o=(a(51),a(1)),s=a(37),i=a.n(s),m=a(38),u=a.n(m),p=(a(53),function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),s=Object(o.a)(l,2),m=s[0],p=s[1],d=Object(n.useState)(!1),b=Object(o.a)(d,2),E=b[0],f=b[1],h=function(){f(!0),setTimeout(function(){f(!1)},3e3)};return document.body.style=" background: linear-gradient(\n        #575ce5 50%,\n        #f9fbfc 50%\n) fixed;",c.a.createElement("div",{className:"fcapp"},c.a.createElement("div",{className:"fccontainer"},c.a.createElement("div",{className:"stats"},c.a.createElement("p",{id:"head-count"},"Heads:",a),c.a.createElement("p",{id:"tails-count"},"Tails: ",m)),c.a.createElement("div",{className:"coin",id:"coin"},c.a.createElement("div",{className:"heads"},c.a.createElement("img",{src:i.a,alt:""})),c.a.createElement("div",{className:"tails"},c.a.createElement("img",{src:u.a,alt:""}))),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{id:"flip-button",disabled:E,onClick:function(){var e=Math.floor(2*Math.random());document.querySelector(".coin").style.animation="none",e?(setTimeout(function(){document.querySelector(".coin").style.animation="spin-heads 3s forwards"},100),setTimeout(function(){r(a+1)},3e3)):(setTimeout(function(){document.querySelector(".coin").style.animation="spin-tails 3s forwards"},100),setTimeout(function(){p(m+1)},3e3)),h()}},"Flip Coin"),c.a.createElement("button",{id:"reset-button",onClick:function(){document.querySelector(".coin").style.animation="none",r(0),p(0)}},"Reset"))))}),d=(a(55),function(){var e=Object(n.useState)(16),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(),p=Object(o.a)(u,2),d=p[0],b=p[1],E=function(){m(0!=d?d*a:"")};return document.body.style="background: linear-gradient(#b7ff74 60%,#72db10 40%) fixed;",c.a.createElement("div",{className:"pxapp"},c.a.createElement("div",{className:"pxcontainer"},c.a.createElement("h1",null,"PX to EM Converter"),c.a.createElement("div",{className:"pxwrapper"},c.a.createElement("label",{htmlFor:"inp-base-px"},"Base Pixel Size:"),c.a.createElement("input",{type:"number",value:a,onChange:function(e){return r(e.target.value)},onBlur:function(){0!=a?E():(b(""),m(""))}})),c.a.createElement("div",{className:"pxwrapper"},c.a.createElement("div",{className:"inp-wrapper"},c.a.createElement("label",{htmlFor:"inp-base-px"},"PX:"),c.a.createElement("input",{type:"number",placeholder:"px",value:i,onChange:function(e){return m(e.target.value)},onBlur:function(){b(0!=i?i/a:"")}})),c.a.createElement("div",{className:"inp-wrapper"},c.a.createElement("label",{htmlFor:"inp-base-px"},"Em:"),c.a.createElement("input",{type:"number",placeholder:"em",value:d,onChange:function(e){return b(e.target.value)},onBlur:E})))))}),b=(a(57),a(14)),E=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(b.useSpeechSynthesis)().speak;return document.body.style="background: #ae9cff",c.a.createElement("div",{className:"dicapp"},c.a.createElement("div",{className:"diccontainer"},c.a.createElement("i",{className:"fas fa-volume-up",onClick:function(){return u({text:a.toUpperCase()})}}),c.a.createElement("div",{className:"search-box"},c.a.createElement("input",{type:"text",placeholder:"Type the word here..",id:"inp-word",value:a,onInput:function(e){return r(e.target.value)}}),c.a.createElement("button",{id:"search-btn",onClick:function(){fetch("".concat("https://api.dictionaryapi.dev/api/v2/entries/en/").concat(a)).then(function(e){return e.json()}).then(function(e){console.log(e),m('\n            <div id="word">\n            <h3>'.concat(a.toUpperCase(),'</h3>\n                </div>\n                <div id="details">\n                    <p>').concat(e[0].meanings[0].partOfSpeech,'</p>\n                </div>\n                <p id="wordMeaning">\n                ').concat(e[0].meanings[0].definitions[0].definition,'\n                </p>\n                <div id="details">\n                    <p>').concat(e[0].meanings[1].partOfSpeech,'</p>\n                </div>\n                <p id="wordMeaning">\n                ').concat(e[0].meanings[1].definitions[0].definition,"\n                </p>\n               "))}).catch(function(){m('<h3 id="error">Couldn\'t Find The Word</h3>')})}},"Search")),c.a.createElement("div",{className:"dicresult",id:"result",dangerouslySetInnerHTML:{__html:"".concat(i)}})))},f=(a(61),function(){var e=Object(n.useState)(16),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(9),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(1280),p=Object(o.a)(u,2),d=p[0],b=p[1],E=Object(n.useState)(720),f=Object(o.a)(E,2),h=f[0],g=f[1],v=a/i,N=function(){b(parseFloat((h*v).toFixed(2)))},y=function(){b(parseFloat((d*v).toFixed(2)))};return document.body.style="background: #895cf3;",c.a.createElement("div",{className:"asptapp"},c.a.createElement("div",{className:"asptcontainer"},c.a.createElement("h2",null,c.a.createElement("span",null,"ASPECT RATIO"),c.a.createElement("span",{className:"cal"},"CALCULATOR")),c.a.createElement("div",{className:"asptwrapper-1"},c.a.createElement("input",{type:"number",id:"ration-width",value:a,onChange:function(e){return r(e.target.value)},onInput:N}),c.a.createElement("span",{className:"colon"},":"),c.a.createElement("input",{type:"number",id:"ration-height",value:i,onChange:function(e){return m(e.target.value)},onInput:y})),c.a.createElement("div",{className:"asptbox"},c.a.createElement("div",{className:"asptwrapper-2"},c.a.createElement("label",{htmlFor:"width"},"Width:"),c.a.createElement("input",{type:"number",id:"width",value:d,onChange:function(e){return b(e.target.value)},onInput:N})),c.a.createElement("div",{className:"asptwrapper-3"},c.a.createElement("label",{htmlFor:"height"},"Height:"),c.a.createElement("input",{type:"number",id:"height",value:h,onChange:function(e){return g(e.target.value)},onInput:y})))))}),h=a(20),g=(a(63),a(39)),v=a(40),N=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),i=s[0],m=s[1];document.body.style="background:".concat(a),document.body.style="background:".concat("#"+i);var u=Object(h.a)({backgroundColor:"".concat(a)},"backgroundColor","".concat("#"+i));return c.a.createElement("div",{className:"rhapp",id:"app",style:u},c.a.createElement("div",{className:"rhcontainer"},c.a.createElement("div",{className:"rhwrapper"},c.a.createElement("label",{htmlFor:"rgb"},"RGB"),c.a.createElement("input",{type:"text",id:"rgb",maxLength:"20",placeholder:"Enter RGB value",value:a,onChange:function(e){return r(e.target.value)},onFocus:function(){var e=Object(g.a)(a);m(e)}})),c.a.createElement("div",{className:"rhwrapper"},c.a.createElement("label",{htmlFor:"hex"},"HEX"),c.a.createElement("input",{type:"text",maxLength:"7",id:"hex",placeholder:"Enter HEX value",value:i,onChange:function(e){return m(e.target.value)},onFocus:function(){var e=Object(v.a)(i,{format:"css"});r(e)}}))))},y=(a(65),function(){var e=Object(n.useState)("0.00"),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(0),p=Object(o.a)(u,2),d=p[0],b=p[1],E=Object(n.useState)(1),f=Object(o.a)(E,2),h=f[0],g=f[1],v=Object(n.useState)(15),N=Object(o.a)(v,2),y=N[0],j=N[1],O=Object(n.useState)(0),w=Object(o.a)(O,2),k=w[0],C=w[1],S=Object(n.useState)(0),x=Object(o.a)(S,2),_=x[0],F=x[1],T=function(){var e=parseFloat(a),t=parseFloat((e*(y/100)).toFixed(2)),n=parseFloat((e+t).toFixed(2)),c=(t/h).toFixed(2),r=(n/h).toFixed(2);g(h),j(y),b(n),m(t),C(c),F(r)};return document.body.style=" background: linear-gradient(\n        #6f6df4 50%,\n        #4c4af4 50%\n    );",c.a.createElement("div",{className:"apptip"},c.a.createElement("div",{className:"tipcontainer"},c.a.createElement("section",null,c.a.createElement("label",{htmlFor:"bill",className:"lbl"},"Bill"),c.a.createElement("div",{className:"input-box"},c.a.createElement("span",null,"\u20b9"),c.a.createElement("input",{type:"number",value:a,id:"bill",className:"val",onChange:function(e){return r(e.target.value)}}),c.a.createElement("i",{className:"fas fa-calculator",onClick:T})),c.a.createElement("div",{className:"tipwrapper"},c.a.createElement("span",{className:"lbl"},"Tip"),c.a.createElement("span",{id:"tip-amount",className:"val"},"\u20b9",i)),c.a.createElement("hr",null),c.a.createElement("div",{className:"tipwrapper"},c.a.createElement("span",{className:"lbl"},"Total Amount"),c.a.createElement("span",{id:"total-amount",className:"val"},"\u20b9",d))),c.a.createElement("section",null,c.a.createElement("div",{className:"tipwrapper"},c.a.createElement("label",{htmlFor:"tip",className:"lbl"},"Tip %"),c.a.createElement("span",{id:"tip-percent",className:"val"},y)),c.a.createElement("input",{type:"range",min:"0",id:"tip",onChange:function(e){return j(e.target.value)},value:y,onInput:T}),c.a.createElement("div",{className:"tipwrapper"},c.a.createElement("label",{htmlFor:"no-of-people",className:"lbl"},"No. Of People"),c.a.createElement("span",{id:"split-num",className:"val"},h)),c.a.createElement("input",{type:"range",min:"1",max:"25",id:"no-of-people",onChange:function(e){return g(e.target.value)},value:h,onInput:T})),c.a.createElement("section",null,c.a.createElement("div",{className:"tipwrapper"},c.a.createElement("span",{className:"lbl"},"Tip Per Person"),c.a.createElement("span",{id:"tip-per-person",className:"val"},"\u20b9",k)),c.a.createElement("div",{className:"tipwrapper"},c.a.createElement("span",{className:"lbl"},"Total Per Person"),c.a.createElement("span",{id:"total-per-person",className:"val"},"\u20b9",_)))))}),j=(a(67),a(9)),O=a.n(j),w=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(a),s=Object(o.a)(l,2),i=(s[0],s[1]),m=function(){for(var e="#",t=0;t<6;t++)e+="0123456789abcdef"[Math.floor(Math.random()*"0123456789abcdef".length)];return e},u=function(){var e=m(),t=m(),a=Math.floor(360*Math.random());document.querySelector("#output-color").style.background="linear-gradient(".concat(a,"deg, ").concat(e,", ").concat(t,")"),r("background: linear-gradient(".concat(a,"deg, ").concat(e,", ").concat(t,");"))};return window.onload=u,c.a.createElement("div",{className:"gradapp"},c.a.createElement("div",{className:"gradwrapper"},c.a.createElement("div",{id:"output-color"}),c.a.createElement("input",{type:"text",id:"output-code",value:a,readOnly:!0}),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{id:"generate-btn",onClick:u},"Generate"),c.a.createElement("button",{id:"copt-btn",onClick:function(){i(a),O()(a),alert("Code Copied To Clipboard!")}},"Copy"))))},k=(a(70),function(){var e=Object(n.useState)("Trust yourself. You know more than you think you do."),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("Benjamin Spock"),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)("".concat(a," by ").concat(i)),p=Object(o.a)(u,2),d=(p[0],p[1]),E=Object(b.useSpeechSynthesis)().speak,f=function(){fetch("https://api.quotable.io/random").then(function(e){return e.json()}).then(function(e){r(e.content),m(e.author)})};document.body.style="background: #f43543;";return window.addEventListener("load",f),c.a.createElement("div",{className:"quoapp"},c.a.createElement("div",{className:"quoapp"},c.a.createElement("div",{className:"quowrapper"},c.a.createElement("div",{className:"quocontainer"},c.a.createElement("p",{id:"quote"},a),c.a.createElement("h3",{id:"author"},i),c.a.createElement("i",{className:"fas fa-volume-up",id:"volume",onClick:function(){return E({text:"".concat(a," by ").concat(i)})}}),c.a.createElement("i",{className:"fas fa-copy",id:"copy",onClick:function(){d("".concat(a," by ").concat(i)),O()("".concat(a," by ").concat(i)),alert("Quote Copied To Clipboard!")}}),c.a.createElement("button",{id:"btn",onClick:f},"Get Quote")))))}),C=(a(72),function(){var e=Object(n.useState)("How do you tell HTML from HTML5? - Try it out in Internet Explorer - Did it work? - No? - It's HTML5."),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(a),s=Object(o.a)(l,2),i=(s[0],s[1]),m=Object(b.useSpeechSynthesis)().speak,u=function(){fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single").then(function(e){return e.json()}).then(function(e){return r(e.joke)})};document.body.style="background: #fab22e;",window.addEventListener("load",u);return c.a.createElement("div",{className:"jkapp"},c.a.createElement("div",{className:"jkwrapper"},c.a.createElement("i",{className:"fas fa-volume-up",id:"volume",onClick:function(){return m({text:a})}}),c.a.createElement("i",{className:"fas fa-copy",id:"copy",onClick:function(){i(a),O()(a),alert("Joke Copied To Clipboard!")}}),c.a.createElement("span",null,"\ud83d\ude02"),c.a.createElement("div",{className:"jokeContainer",style:{fontSize:"16px",color:"rgb(255, 249, 249)",fontWeight:"400",textAlign:"center",wordWrap:"break-word",lineHeight:"35px",margin:"20px 0"}},a),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{onClick:u},"Get Random Joke"))))}),S=(a(74),a(76),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)("-"),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)("-"),p=Object(o.a)(u,2),d=p[0],b=p[1],E=Object(n.useState)("-"),f=Object(o.a)(E,2),h=f[0],g=f[1],v=Object(n.useState)("-"),N=Object(o.a)(v,2),y=N[0],j=N[1],O=[0,31,28,31,30,31,30,31,31,30,31,30,31];return c.a.createElement("div",{className:"ageapp"},c.a.createElement("div",{className:"agecontainer"},c.a.createElement("div",{className:"inputs-wrapper"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t,n,c,r,l,o=new Date,s=new Date(a),i={dateb:s.getDate(),monthb:s.getMonth()+1,yearb:s.getFullYear()},u=o.getFullYear(),p=o.getMonth()+1,d=o.getDate();if(l=u,O[1]=l%4==0||l%100==0&&l%400==0?29:28,""===a)return alert("Please enter a valid date!"),m("-"),b("-"),void g("-");if(i.yearb>u||i.monthb>p&&i.yearb==u||i.dateb>d&&i.monthb==p&&i.yearb==u)return alert("Not yet born"),m("-"),b("-"),void g("-");c=u-i.yearb,p>=i.monthb?t=p-i.monthb:(c--,t=12+p-i.monthb),d>=i.dateb?n=d-i.dateb:(t--,r=O[p],console.log(r,d,i.dateb,p),n=r+d-i.dateb,t<0&&(t=11,c--)),i.monthb===p&&i.dateb===d&&alert("Happy Birthday!"),m(c),b(t),g(n);var E=new Date,f=new Date(o.getFullYear(),i.monthb-1,i.dateb);E.getTime()>f.getTime()&&f.setFullYear(f.getFullYear()+1);var h=f.getTime()-E.getTime(),v=Math.ceil(h/864e5);j(v)}},c.a.createElement("input",{type:"date",id:"date-input",value:a,onChange:function(e){return r(e.target.value)}}),c.a.createElement("button",{type:"submit"},"Calculate"))),c.a.createElement("div",{className:"outputs-wrapper"},c.a.createElement("div",{className:"ow"},c.a.createElement("span",{id:"years"},i),c.a.createElement("p",null,"Years")),c.a.createElement("div",{className:"ow"},c.a.createElement("span",{id:"months"},d),c.a.createElement("p",null,"Months")),c.a.createElement("div",{className:"ow"},c.a.createElement("span",{id:"days"},h),c.a.createElement("p",null,"Days"))),c.a.createElement("div",{className:"wish-for-birthday"},c.a.createElement("div",null,c.a.createElement("span",{id:"days"},y),c.a.createElement("p",null,"Days to next Birthday!")))))}),x=(a(78),a(41)),_=a.n(x),F=function(){var e=Object(n.useState)("10"),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(i),p=Object(o.a)(u,2),d=(p[0],p[1]),b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!\"$%&/()=?@~`\\.';:+=^*_-0123456789",E=function(){for(var e,t="",n=0;n<a;n++){var c=(e=b.length,Math.floor(Math.random()*e));t+=b.charAt(c)}m(t)},f=_()(i),h=75*f.score/4,g=function(){switch(f.score){case 0:return"#e2e2e2";case 1:return"#EA1111";case 2:return"#FFAD00";case 3:return"#9bc158";case 4:return"#00b500";default:return"none"}};return c.a.createElement("div",{className:"pwdapp"},c.a.createElement("div",{className:"pwdcontainer"},c.a.createElement("input",{type:"text",id:"output",value:i,onChange:function(e){return m(e.target.value)}}),c.a.createElement("button",{className:"i"},c.a.createElement("i",{className:"fas fa-random",onClick:E})),c.a.createElement("button",{className:"i"},c.a.createElement("i",{className:"far fa-copy",onClick:function(){d(i),O()(i),alert("Copied!")}})),c.a.createElement("div",{className:"progress-bar",style:{width:"".concat(h,"%"),background:g()}}),c.a.createElement("p",{style:{color:g()}},function(){switch(f.score){case 0:return"Very weak";case 1:return"Weak";case 2:return"Fear";case 3:return"Good";case 4:return"Strong";default:return""}}()),c.a.createElement("input",{type:"range",id:"length",min:"10",max:"22",value:a,onChange:function(e){return r(e.target.value)},onInput:E}),c.a.createElement("h3",null,a)))},T=(a(84),function(){var e,t=Object(n.useState)(0),r=Object(o.a)(t,2),l=r[0],s=r[1],i=Object(n.useState)(0),m=Object(o.a)(i,2),u=m[0],p=m[1],d=Object(n.useState)(""),b=Object(o.a)(d,2),E=b[0],f=b[1],h=Object(n.useState)(""),g=Object(o.a)(h,2),v=g[0],N=g[1];E<1?e=null:E<24?e=a(86):E>24&&E<30?e=a(87):E>30&&(e=a(88)),document.body.style="background: #fff;";return c.a.createElement("div",{className:"bmiapp"},c.a.createElement("div",{className:"bmicontainer"},c.a.createElement("h2",{className:"center"},"BMI Calculator"),c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),0===l||0===u)alert("Please enter a valid weight and height!");else{var t=u/100,a=l/(t*t);f(a.toFixed(1)),a<24?N("You are underweight"):a>24&&a<30?N("You are a healthy weight"):a>30&&N("You are overweight")}}},c.a.createElement("div",{className:"input"},c.a.createElement("label",null,"Weight (kg)"),c.a.createElement("input",{value:l,onChange:function(e){return s(e.target.value)}})),c.a.createElement("div",{className:"input"},c.a.createElement("label",null,"Height (cm)"),c.a.createElement("input",{value:u,onChange:function(e){return p(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("button",{className:"btn_age",type:"submit"},"Submit"),c.a.createElement("button",{className:"btn_age btn-outline",onClick:function(){window.location.reload()},type:"submit"},"Reload"))),c.a.createElement("div",{className:"center"},c.a.createElement("h3",null,"Your BMI is: ",E),c.a.createElement("p",null,v)),c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{src:e,alt:""}))))}),M=(a(89),function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)(""),p=Object(o.a)(u,2),d=p[0],b=p[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),h=f[0],g=f[1],v=Object(n.useState)(""),N=Object(o.a)(v,2),y=N[0],j=N[1],O={rock:{rock:"draw",scissor:"win",paper:"lose"},scissor:{rock:"lose",scissor:"draw",paper:"win"},paper:{rock:"win",scissor:"lose",paper:"draw"}},w=function(e){var t=["rock","paper","scissor"],n=Math.floor(3*Math.random());j("Computer choose <span> ".concat(t[n].toUpperCase()," </span>")),g(" You choose <span> ".concat(e.toUpperCase()," </span>"));var c=t[n];switch(O[e][c]){case"win":document.querySelector("#result").style.cssText="background-color: #cefdce; color: #689f38",b("You WIN!"),m(i+1);break;case"lose":document.querySelector("#result").style.cssText="background-color: #ffdde0; color: #d32f2f",b("You LOSE!"),r(a+1);break;default:document.querySelector("#result").style.cssText="background-color: #e5e5e5; color: #808080",b("DRAW!")}};return c.a.createElement("div",{className:"rpsapp"},c.a.createElement("div",{className:"rpscontainer"},c.a.createElement("div",{className:"scores"},c.a.createElement("p",null,"Computer:",c.a.createElement("span",{dangerouslySetInnerHTML:{__html:"".concat(a)}})),c.a.createElement("p",null,"You:",c.a.createElement("span",{dangerouslySetInnerHTML:{__html:"".concat(i)}}))),c.a.createElement("div",{className:"weapons"},c.a.createElement("button",{onClick:function(){return w("rock")}},c.a.createElement("i",{className:"far fa-hand-rock"})),c.a.createElement("button",{onClick:function(){return w("paper")}},c.a.createElement("i",{className:"far fa-hand-paper"})),c.a.createElement("button",{onClick:function(){return w("scissor")}},c.a.createElement("i",{className:"far fa-hand-scissors"}))),c.a.createElement("div",{className:"details"},c.a.createElement("p",{dangerouslySetInnerHTML:{__html:"".concat(h)}}),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:"".concat(y)}}),c.a.createElement("p",{id:"result",dangerouslySetInnerHTML:{__html:"".concat(d)}}))))}),I=a(10),L=a(2),H=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{className:"cards__item"},c.a.createElement(I.b,{className:"cards__item__link",to:e.path},c.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},c.a.createElement("img",{className:"cards__item__img",alt:"Travel Image",src:e.src})),c.a.createElement("div",{className:"cards__item__info"},c.a.createElement("h5",{className:"cards__item__text"},e.text)))))},B=(a(99),a(101),a(44)),q=a(5),A=a(43),Y=a.n(A),D=function(){return c.a.createElement("div",{className:"cards"},c.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},c.a.createElement("source",{src:Y.a,type:"video/mp4"})),c.a.createElement("h1",null,"Fun With Calculators!"),c.a.createElement("div",{className:"cards__container"},c.a.createElement("div",{className:"cards__wrapper"},c.a.createElement(B.a,{xs:1,md:4},c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/tip.png",text:"Split the Bills and Calculate the tips on your finger tips",label:"Tip Calculator",path:"/tipcalc"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/pwdgen.png",text:"We Want Security.Security needs Secure Password.",label:"Password Genrator",path:"/pwdgen"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/agecalc.png",text:"Why to calculate stupid things like age when we have this!",label:"Age Calculator",path:"/agecalc"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/rps.png",text:"Let's revisit our childhood and try to fight against me",label:"Game",path:"/rps"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/quote.png",text:"Let's see what Brilliant Minds Offering us & Get motivation",label:"Quotes",path:"/quotegen"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/joke.png",text:"We deserve little bit of fun.let's give Ourself some fun time",label:"Jokes",path:"/jokegen"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/bmi.png",text:"Do you Know Your BMI ? NO!!! - Here You can Calculate",label:"BMI Calculator",path:"/bmicalc"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/gradgen.png",text:"Checkout these Gradients isn't they Mesmerizing!!!",label:"Gradient Generator",path:"/gradientgen"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/rgbhex.png",text:"Convert RGB t0 HEX and HEX to RGB . Just Fun of Colors",label:"RGB - HEX Color",path:"/rgbgex"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/aspect.png",text:"Want to calculate Aspect ratios.Thank me later!",label:"Aspect Ratio Calculator",path:"/aspectratiocalc"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/dict.png",text:"Let's explore the words and magic behind them.Try different words!",label:"Dictionary",path:"/dictionary"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/pxem.png",text:"Pixel to EM is to complicated .why to waste time.Let's Calculate",label:"PX-EM Convertor",path:"/pxtoemconv"}))),c.a.createElement(q.a,null,c.a.createElement("ul",{className:"cards__items"},c.a.createElement(H,{src:"images/coin.png",text:"Coins have two sides let\u2019s flip and see which one you get",label:"Flip a Coin",path:"/flipcoin"})))))))};a(104);var G=function(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",{className:"social-media-wrap"},c.a.createElement("div",null,c.a.createElement(I.b,{to:"/",className:"footer-logo"},c.a.createElement("i",{className:"fas fa-gamepad"}))),c.a.createElement("small",{className:"website-rights"},"Fun-Q-Lator"),c.a.createElement("div",{className:"social-icons"},c.a.createElement("a",{className:"social-icon-link instagram",href:"https://www.instagram.com/_mohit__gupta/",target:"_blank",rel:"noreferrer","aria-label":"Instagram"},c.a.createElement("i",{className:"fab fa-instagram",id:"insta"})),c.a.createElement("a",{className:"social-icon-link github",href:"https://github.com/Mohit182",target:"_blank",rel:"noreferrer","aria-label":"GitHub"},c.a.createElement("i",{className:"fab fa-github",id:"github"})),c.a.createElement("a",{className:"social-icon-link linkedin",href:"https://www.linkedin.com/in/mohit182/",target:"_blank","aria-label":"LinkedIn",rel:"noreferrer"},c.a.createElement("i",{className:"fab fa-linkedin",id:"linkdin"})))))},P=(a(106),function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(D,null),c.a.createElement(G,null))}),W=(a(108),function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)(!0),l=Object(o.a)(r,2),s=(l[0],l[1]),i=function(){window.innerWidth<=640?s(!1):s(!0)};return Object(n.useEffect)(function(){i()},[]),window.addEventListener("resize",i),c.a.createElement("div",{className:"navbar"},c.a.createElement("div",{className:"logo"},c.a.createElement(I.b,{to:"/",className:"logolink"},c.a.createElement("i",{className:"fas fa-home",onClick:function(){return a(!1)}}))))}),R=a(45),X=a.n(R),J=(a(128),a(130),function(e){return c.a.createElement("div",{className:"group"},c.a.createElement("input",{type:"text",value:e.amount,onChange:function(t){return e.onAmountChange(t.target.value)}}),c.a.createElement("select",{value:e.currency,onChange:function(t){return e.onCurrencyChange(t.target.value)}},e.currencies.map(function(e){return c.a.createElement("option",{value:e},e)})))}),U=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(1),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(n.useState)("USD"),p=Object(o.a)(u,2),d=p[0],b=p[1],E=Object(n.useState)("INR"),f=Object(o.a)(E,2),h=f[0],g=f[1],v=Object(n.useState)([]),N=Object(o.a)(v,2),y=N[0],j=N[1];function O(e){return e.toFixed(4)}function w(e){m(O(e*y[h]/y[d])),r(e)}return Object(n.useEffect)(function(){X.a.get("http://data.fixer.io/api/latest?access_key=83f38181f5557e47be5d937e8aacd19c").then(function(e){j(e.data.rates)})},[]),Object(n.useEffect)(function(){y&&w(1)},[y]),document.body.style="background: #161616;",c.a.createElement("div",{className:"appcur"},c.a.createElement("div",{className:"curcon"},c.a.createElement("h1",null,"Currency Convertor"),c.a.createElement(J,{onAmountChange:w,onCurrencyChange:function(e){m(O(a*y[h]/y[e])),b(e)},currencies:Object.keys(y),amount:a,currency:d}),c.a.createElement(J,{onAmountChange:function(e){r(O(e*y[d]/y[h])),m(e)},onCurrencyChange:function(e){r(O(i*y[d]/y[e])),g(e)},currencies:Object.keys(y),amount:i,currency:h})))};var z=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(I.a,null,c.a.createElement(W,null),c.a.createElement(L.c,null,c.a.createElement(L.a,{path:"/",exact:!0,component:P}),c.a.createElement(L.a,{path:"/bmicalc",component:T}),c.a.createElement(L.a,{path:"/agecalc",component:S}),c.a.createElement(L.a,{path:"/pwdgen",component:F}),c.a.createElement(L.a,{path:"/jokegen",component:C}),c.a.createElement(L.a,{path:"/quotegen",component:k}),c.a.createElement(L.a,{path:"/gradientgen",component:w}),c.a.createElement(L.a,{path:"/rgbgex",component:N}),c.a.createElement(L.a,{path:"/aspectratiocalc",component:f}),c.a.createElement(L.a,{path:"/dictionary",component:E}),c.a.createElement(L.a,{path:"/pxtoemconv",component:d}),c.a.createElement(L.a,{path:"/rps",component:M}),c.a.createElement(L.a,{path:"/flipcoin",component:p}),c.a.createElement(L.a,{path:"/tipcalc",component:y}),c.a.createElement(L.a,{path:"/currencyconv",component:U}))))};l.a.render(c.a.createElement(z,null),document.getElementById("root"))},37:function(e,t,a){e.exports=a.p+"static/media/heads.7c63dc11.svg"},38:function(e,t,a){e.exports=a.p+"static/media/tails.3d90d17e.svg"},43:function(e,t,a){e.exports=a.p+"static/media/video6.ec33a837.mp4"},46:function(e,t,a){e.exports=a(132)},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){},78:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){e.exports=a.p+"static/media/underweight.2e679746.png"},87:function(e,t,a){e.exports=a.p+"static/media/healthy.aaca6e71.png"},88:function(e,t,a){e.exports=a.p+"static/media/overweight.7ba81ac3.png"},89:function(e,t,a){},99:function(e,t,a){}},[[46,2,1]]]);
//# sourceMappingURL=main.c01fb26e.chunk.js.map