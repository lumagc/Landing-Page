parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fWRU":[function(require,module,exports) {
"use strict";var t=document.querySelector(".nav__toggle"),e=document.querySelector(".nav__items");t.addEventListener("click",function(){e.classList.toggle("nav__items_visible")});var c=document.querySelectorAll(".li"),o=document.querySelectorAll(".bloque");c.forEach(function(t,e){c[e].addEventListener("click",function(){c.forEach(function(t,e){c[e].classList.remove("activo"),o[e].classList.remove("activo")}),c[e].classList.add("activo"),o[e].classList.add("activo")})});var a=document.querySelector(".grande"),n=document.querySelectorAll(".punto");n.forEach(function(t,e){n[e].addEventListener("click",function(){var t=-50*e;a.style.transform="translateX(".concat(t,"%)"),n.forEach(function(t,e){n[e].classList.remove("activo")}),n[e].classList.add("activo")})});
},{}]},{},["fWRU"], null)
//# sourceMappingURL=/https:/lumagc.github.io/Landing-Page/script.dd05344c.js.map