!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=53)}({0:function(e,t,n){e.exports={"main-container":"_1o4XrJgdCyl_140GQ-iE5p","top-of-page":"_3xXzUW1j4jhJ-Uk7w7K5HG","button-container":"xEi7ko1NwnW8me6cIrbLq",button:"_39evny_T0zfMPQqpj57AM_",active:"_1XBnnPJUbU3NfJhNf6BBYd"}},53:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o);function i(e){return e.getBoundingClientRect().top+window.pageYOffset}function c(e){return Array.from(e).map(e=>i(e))}function u(e,t){let n=!1;return()=>{n||(t(),n=!0,setTimeout(()=>{n=!1},e))}}const a=document.querySelectorAll("article"),l=document.querySelector(`.${r.a["main-container"]}`),f=document.querySelectorAll(`.${r.a.button}`);let d=c(a);function s(){window.pageYOffset<i(a[0])?l.classList.add(r.a["top-of-page"]):l.classList.remove(r.a["top-of-page"]),f.forEach((e,t)=>{window.pageYOffset+150>d[t]?e.classList.add(r.a.active):e.classList.remove(r.a.active)})}f.forEach((e,t)=>{e.addEventListener("click",()=>{window.scrollTo({top:d[t]-130,left:0,behavior:"smooth"})})}),s(),document.addEventListener("scroll",u(50,s)),document.addEventListener("scroll",u(1e3,()=>{d=c(a)})),window.addEventListener("resize",u(50,()=>{d=c(a)}))}});