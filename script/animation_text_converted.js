!function(e,t,n){void 0===n&&(n=["#fff"]);var o,s=!0,i=document.getElementById("console");i&&(o=i);var r,u=1,l=1,c=!1,d=document.getElementById(t);d&&(r=d);window.setInterval((function(){r.setAttribute("style","color:"+n[0]),0===u&&!1===c?(c=!0,r.innerHTML=e[0].substring(0,u),window.setTimeout((function(){var t=n.shift();n.push(t);var o=e.shift();e.push(o),l=1,r.setAttribute("style","color:"+n[0]),u+=l,c=!1}),1e3)):u===e[0].length+1&&!1===c?(c=!0,window.setTimeout((function(){u+=l=-1,c=!1}),1e3)):!1===c&&(r.innerHTML=e[0].substring(0,u),u+=l)}),120),window.setInterval((function(){!0===s?(o.className="console-underscore hidden",s=!1):(o.className="console-underscore",s=!0)}),400)}(["Hello World.","I am Vika Kruk","This site made with Love."],"text",["#04346C","#04346C","#04346C"]);
