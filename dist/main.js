(()=>{"use strict";const t=()=>{document.querySelector(".main").textContent="This is the main of home"};(()=>{const t=function(t,e,n){const o=document.createElement(t);return o.classList.add(e),n.appendChild(o),o},e=document.getElementById("content");t("div","header",e),t("div","main",e),t("div","footer",e)})(),(()=>{const t=function(t,e,n,o){const i=document.createElement(t);return i.classList.add(e),o&&i.setAttribute("id",o),n.appendChild(i),i},e=document.querySelector(".header"),n=document.createElement("img");n.setAttribute("src","./images/fast-food.png"),t("div","logo",e,"").appendChild(n);const o=t("div","buttons",e,""),i=document.createElement("img");i.setAttribute("src","./images/icons8-home-page-100.png"),t("button","button",o,"button-1").appendChild(i);const c=document.createElement("img");c.setAttribute("src","./images/icons8-food-100.png"),t("button","button",o,"button-2").appendChild(c);const d=document.createElement("img");d.setAttribute("src","./images/icons8-location-100.png"),t("button","button",o,"button-3").appendChild(d),t("div","info",e,"").textContent="Info"})(),t(),document.querySelector(".footer").textContent="This is the footer",document.getElementById("button-1").addEventListener("click",t),document.getElementById("button-2").addEventListener("click",(()=>{document.querySelector(".main").textContent="This is the main of menu"})),document.getElementById("button-3").addEventListener("click",(()=>{document.querySelector(".main").textContent="This is the main of contact"}))})();