(()=>{"use strict";const e=document.documentElement,s=document.querySelector(".sidebar"),a=document.querySelector(".sidebar__collapse-sidebar-btn"),d=document.querySelector(".header__expand-sidebar-btn"),c=(document.querySelector(".main-wrapper"),document.querySelector(".main"));!function(s){switch(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"){case"dark":e.classList.add("dark");break;case"light":e.classList.add("light")}}(),a.addEventListener("click",(()=>{s.classList.add("sidebar_collapsed"),a.classList.add("sidebar__collapse-sidebar-btn_hidden"),c.classList.remove("main_collapsed")})),d.addEventListener("click",(()=>{s.classList.remove("sidebar_collapsed"),a.classList.remove("sidebar__collapse-sidebar-btn_hidden"),c.classList.add("main_collapsed")}))})();