(()=>{"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function r(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}function o(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&i(n,t)}function i(n,t){return(i=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function a(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=l(n);if(t){var o=l(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return c(this,e)}}function c(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t):e}function l(n){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var p=function(n,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(c){var l=document.createElement("template");return l.innerHTML=e,function(e){o(p,e);var c=a(p);function p(){var n;return t(this,p),(n=c.call(this)).node=document.importNode(l.content,!0),i&&n.attachShadow({mode:"open"}),n}return r(p,null,[{key:"tagName",get:function(){return n}}]),r(p,[{key:"connectedCallback",value:function(){i?this.shadowRoot.appendChild(this.node):this.appendChild(this.node)}},{key:"root",get:function(){return i?this.shadowRoot:this}}]),p}(c)}};function s(n){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function f(n,t){return(f=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function d(n,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function m(n){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function g(n){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function b(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function h(n,t){return(h=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function y(n,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function x(n){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function w(n){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function v(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function S(n,t){return(S=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function O(n,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function k(n){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function R(n){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function _(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function j(n,t){return(j=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function E(n,t){return!t||"object"!==R(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function T(n){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function z(n){return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function L(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function A(n,t){return(A=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,t)}function I(n,t){return!t||"object"!==z(t)&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function P(n){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}var C=[function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&f(n,t)}(o,n);var t,e,r=(t=o,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=m(t);if(e){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)});function o(){return u(this,o),r.apply(this,arguments)}return o}(p("n-header",'<style>\n  n-header {\n    position: relative;\n    height: 60px;\n    background-color: hsl(200, 60%, 15%);\n    width: 100%;\n    box-sizing: border-box;\n    z-index: 2;\n    color: rgba(0, 0, 0, 0.8);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.08);\n    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);\n  }\n  n-header .content {\n    height: 70px;\n    grid-column: page;\n  }\n  n-header a {\n    font-size: 16px;\n    height: 60px;\n    line-height: 60px;\n    text-decoration: none;\n    color: rgba(255, 255, 255, 0.8);\n    padding: 22px 0;\n  }\n  n-header a:hover {\n    color: rgba(255, 255, 255, 1);\n  }\n  @media(min-width: 1080px) {\n    n-header {\n      height: 70px;\n    }\n    n-header a {\n      height: 70px;\n      line-height: 70px;\n      padding: 28px 0;\n    }\n  }\n  n-header .logo {\n    font-size: 20px;\n    font-weight: 200;\n  }\n  n-header .nav {\n    float: right;\n    font-weight: 300;\n  }\n  n-header .nav a {\n    font-size: 14px;\n    margin-left: 24px;\n    text-transform: uppercase;\n  }\n</style>\n<div class="content">\n  <a href="/" class="logo">\n    EungGu Yun\n  </a>\n  <nav class="nav">\n    <a href="/about/">About</a>\n  </nav>\n</div>\n')(HTMLElement)),function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&h(n,t)}(o,n);var t,e,r=(t=o,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=x(t);if(e){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)});function o(){return b(this,o),r.apply(this,arguments)}return o}(p("n-footer",'<style>\n  n-footer {\n    color: rgba(255, 255, 255, 0.5);\n    font-weight: 300;\n    padding: 2rem 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    background-color: hsl(180, 5%, 15%); /*hsl(200, 60%, 15%);*/\n    text-align: left;\n    contain: content;\n  }\n\n  n-footer .footer-container .logo svg {\n    width: 24px;\n    position: relative;\n    top: 4px;\n    margin-right: 2px;\n  }\n\n  n-footer .footer-container .logo svg path {\n    fill: none;\n    stroke: rgba(255, 255, 255, 0.8);\n    stroke-width: 3px;\n  }\n\n  n-footer .footer-container .logo {\n    font-size: 17px;\n    font-weight: 200;\n    color: rgba(255, 255, 255, 0.8);\n    text-decoration: none;\n    margin-right: 6px;\n  }\n\n  n-footer .footer-container {\n    grid-column: text;\n  }\n\n  n-footer .footer-container .nav {\n    font-size: 0.9em;\n    margin-top: 1.5em;\n  }\n\n  n-footer .footer-container .nav a {\n    color: rgba(255, 255, 255, 0.8);\n    margin-right: 6px;\n    text-decoration: none;\n  }\n</style>\n<div class=\'footer-container\'>\n  <a href="/" class="logo">\n    EungGu Yun\n  </a>\n  <div class="nav">\n    <a href="/about/">About</a>\n    <a href="https://github.com/yuneg11">GitHub</a>\n  </div>\n</div>\n')(HTMLElement)),function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&S(n,t)}(o,n);var t,e,r=(t=o,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=k(t);if(e){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)});function o(){return v(this,o),r.apply(this,arguments)}return o}(p("n-title","<style>\n  n-title {\n    padding: 2rem 0 1.5rem;\n    contain: layout style;\n    overflow-x: hidden;\n  }\n\n  @media(min-width: 768px) {\n    n-title {\n      padding: 4rem 0 1.5rem;\n    }\n  }\n\n  n-title h1 {\n    grid-column: text;\n    font-size: 40px;\n    font-weight: 700;\n    line-height: 1.1em;\n    margin: 0 0 0.5rem;\n  }\n\n  @media(min-width: 768px) {\n    n-title h1 {\n      font-size: 50px;\n    }\n  }\n\n  n-title p {\n    font-weight: 300;\n    font-size: 1.2rem;\n    line-height: 1.55em;\n    grid-column: text;\n  }\n\n  n-title .status {\n    margin-top: 0px;\n    font-size: 12px;\n    color: #009688;\n    opacity: 0.8;\n    grid-column: kicker;\n  }\n\n  n-title .status span {\n    line-height: 1;\n    display: inline-block;\n    padding: 6px 0;\n    border-bottom: 1px solid #80cbc4;\n    font-size: 11px;\n    text-transform: uppercase;\n  }\n</style>\n")(HTMLElement)),function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&j(n,t)}(o,n);var t,e,r=(t=o,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=T(t);if(e){var o=T(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)});function o(){return _(this,o),r.apply(this,arguments)}return o}(p("n-article","<style>\n  n-article {\n    contain: layout style;\n    overflow-x: hidden;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    padding-top: 2rem;\n    color: rgba(0, 0, 0, 0.8);\n  }\n\n  n-article > * {\n    grid-column: text;\n  }\n\n  @media(min-width: 768px) {\n    n-article {\n      font-size: 16px;\n    }\n  }\n\n  @media(min-width: 1024px) {\n    n-article {\n      font-size: 1.06rem;\n      line-height: 1.7em;\n    }\n  }\n\n\n  /* H2 */\n\n\n  n-article .marker {\n    text-decoration: none;\n    border: none;\n    counter-reset: section;\n    grid-column: kicker;\n    line-height: 1.7em;\n  }\n\n  n-article .marker:hover {\n    border: none;\n  }\n\n  n-article .marker span {\n    padding: 0 3px 4px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    position: relative;\n    top: 4px;\n  }\n\n  n-article .marker:hover span {\n    color: rgba(0, 0, 0, 0.7);\n    border-bottom: 1px solid rgba(0, 0, 0, 0.7);\n  }\n\n  n-article h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 1.25em;\n    margin: 2rem 0 1.5rem 0;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    padding-bottom: 1rem;\n  }\n\n  @media(min-width: 1024px) {\n    n-article h2 {\n      font-size: 36px;\n    }\n  }\n\n  /* H3 */\n\n  n-article h3 {\n    font-weight: 700;\n    font-size: 18px;\n    line-height: 1.4em;\n    margin-bottom: 1em;\n    margin-top: 2em;\n  }\n\n  @media(min-width: 1024px) {\n    n-article h3 {\n      font-size: 20px;\n    }\n  }\n\n  /* H4 */\n\n  n-article h4 {\n    font-weight: 600;\n    text-transform: uppercase;\n    font-size: 14px;\n    line-height: 1.4em;\n  }\n\n  n-article a {\n    color: inherit;\n  }\n\n  n-article p,\n  n-article ul,\n  n-article ol,\n  n-article blockquote {\n    margin-top: 0;\n    margin-bottom: 1em;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  n-article blockquote {\n    border-left: 2px solid rgba(0, 0, 0, 0.2);\n    padding-left: 2em;\n    font-style: italic;\n    color: rgba(0, 0, 0, 0.6);\n  }\n\n  n-article a {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.4);\n    text-decoration: none;\n  }\n\n  n-article a:hover {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.8);\n  }\n\n  n-article .link {\n    text-decoration: underline;\n    cursor: pointer;\n  }\n\n  n-article ul,\n  n-article ol {\n    padding-left: 24px;\n  }\n\n  n-article li {\n    margin-bottom: 1em;\n    margin-left: 0;\n    padding-left: 0;\n  }\n\n  n-article li:last-child {\n    margin-bottom: 0;\n  }\n\n  n-article pre {\n    font-size: 14px;\n    margin-bottom: 20px;\n  }\n\n  n-article hr {\n    grid-column: screen;\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n    margin-top: 60px;\n    margin-bottom: 60px;\n  }\n\n  n-article section {\n    margin-top: 60px;\n    margin-bottom: 60px;\n  }\n\n  n-article span.equation-mimic {\n    font-family: georgia;\n    font-size: 115%;\n    font-style: italic;\n  }\n\n  n-article > d-code,\n  n-article section > d-code  {\n    display: block;\n  }\n\n  n-article > d-math[block],\n  n-article section > d-math[block]  {\n    display: block;\n  }\n\n  @media (max-width: 768px) {\n    n-article > d-code,\n    n-article section > d-code,\n    n-article > d-math[block],\n    n-article section > d-math[block] {\n        overflow-x: scroll;\n        -ms-overflow-style: none;  // IE 10+\n        overflow: -moz-scrollbars-none;  // Firefox\n    }\n\n    n-article > d-code::-webkit-scrollbar,\n    n-article section > d-code::-webkit-scrollbar,\n    n-article > d-math[block]::-webkit-scrollbar,\n    n-article section > d-math[block]::-webkit-scrollbar {\n      display: none;  // Safari and Chrome\n    }\n  }\n\n  n-article .citation {\n    color: #668;\n    cursor: pointer;\n  }\n\n  d-include {\n    width: auto;\n    display: block;\n  }\n\n  d-figure {\n    contain: layout style;\n  }\n\n  /* KaTeX */\n\n  .katex, .katex-prerendered {\n    contain: style;\n    display: inline-block;\n  }\n\n  /* Tables */\n\n  n-article table {\n    border-collapse: collapse;\n    margin-bottom: 1.5rem;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n\n  n-article table th {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  }\n\n  n-article table td {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n  }\n\n  n-article table tr:last-of-type td {\n    border-bottom: none;\n  }\n\n  n-article table th,\n  n-article table td {\n    font-size: 15px;\n    padding: 2px 8px;\n  }\n\n  n-article table tbody :first-child td {\n    padding-top: 2px;\n  }\n</style>\n")(HTMLElement)),function(n){!function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),t&&A(n,t)}(o,n);var t,e,r=(t=o,e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,r=P(t);if(e){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return I(this,n)});function o(){return L(this,o),r.apply(this,arguments)}return o}(p("n-appendix","<style>\n  n-appendix {\n    contain: layout style;\n    font-size: 0.8em;\n    line-height: 1.7em;\n    margin-top: 60px;\n    margin-bottom: 0;\n    border-top: 1px solid rgba(0, 0, 0, 0.1);\n    color: rgba(0,0,0,0.5);\n    padding-top: 60px;\n    padding-bottom: 48px;\n  }\n\n  n-appendix h3 {\n    grid-column: page-start / text-start;\n    font-size: 15px;\n    font-weight: 500;\n    margin-top: 1em;\n    margin-bottom: 0;\n    color: rgba(0,0,0,0.65);\n  }\n\n  n-appendix h3 + * {\n    margin-top: 1em;\n  }\n\n  n-appendix ol {\n    padding: 0 0 0 15px;\n  }\n\n  @media (min-width: 768px) {\n    n-appendix ol {\n      padding: 0 0 0 30px;\n      margin-left: -30px;\n    }\n  }\n\n  n-appendix li {\n    margin-bottom: 1em;\n  }\n\n  n-appendix a {\n    color: rgba(0, 0, 0, 0.6);\n  }\n\n  n-appendix > * {\n    grid-column: text;\n  }\n\n  n-appendix > n-footnote-list,\n  n-appendix > n-citation-list,\n  n-appendix > distill-appendix {\n    grid-column: screen;\n  }\n</style>\n")(HTMLElement))],N=['/*\n * Copyright 2018 The Distill Template Authors\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\nhtml {\n  font-size: 14px;\n\tline-height: 1.6em;\n  /* font-family: "Libre Franklin", "Helvetica Neue", sans-serif; */\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif;\n  /*, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";*/\n  text-size-adjust: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\n@media(min-width: 768px) {\n  html {\n    font-size: 16px;\n  }\n}\n\nbody {\n  margin: 0;\n}\n\na {\n  color: #004276;\n}\n\nfigure {\n  margin: 0;\n}\n\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n\ntable th {\n\ttext-align: left;\n}\n\ntable thead {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n\ntable thead th {\n  padding-bottom: 0.5em;\n}\n\ntable tbody :first-child td {\n  padding-top: 0.5em;\n}\n\npre {\n  overflow: auto;\n  max-width: 100%;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1em;\n}\n\nsup, sub {\n  vertical-align: baseline;\n  position: relative;\n  top: -0.4em;\n  line-height: 1em;\n}\n\nsub {\n  top: 0.4em;\n}\n\n.kicker,\n.marker {\n  font-size: 15px;\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n\n/* Headline */\n\n@media(min-width: 1024px) {\n  n-title h1 span {\n    display: block;\n  }\n}\n\n/* Figure */\n\nfigure {\n  position: relative;\n  margin-bottom: 2.5em;\n  margin-top: 1.5em;\n}\n\nfigure img {\n  width: 100%;\n}\n\nfigcaption,\n.figcaption {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 12px;\n  line-height: 1.5em;\n}\n\n@media(min-width: 1024px) {\nfigcaption,\n.figcaption {\n    font-size: 13px;\n  }\n}\n\nfigure.external img {\n  background: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);\n  padding: 18px;\n  box-sizing: border-box;\n}\n\nfigcaption a {\n  color: rgba(0, 0, 0, 0.6);\n}\n\nfigcaption b,\nfigcaption strong {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 1.0);\n}\n','/*\n * Copyright 2018 The blog Template Authors\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n@supports not (display: grid) {\n  .base-grid,\n  n-header,\n  n-title,\n  d-abstract,\n  n-article,\n  n-appendix,\n  distill-appendix,\n  d-byline,\n  n-footnote-list,\n  d-citation-list,\n  n-footer {\n    display: block;\n    padding: 8px;\n  }\n}\n\n.base-grid,\nn-header,\nn-title,\nd-abstract,\nn-article,\nn-appendix,\ndistill-appendix,\nd-byline,\nn-footnote-list,\nd-citation-list,\nn-footer {\n  display: grid;\n  justify-items: stretch;\n  grid-template-columns: [screen-start] 8px [page-start kicker-start text-start gutter-start middle-start] 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr [text-end page-end gutter-end kicker-end middle-end] 8px [screen-end];\n  grid-column-gap: 8px;\n}\n\n.grid {\n  display: grid;\n  grid-column-gap: 8px;\n}\n\n@media(min-width: 768px) {\n  .base-grid,\n  n-header,\n  n-title,\n  d-abstract,\n  n-article,\n  n-appendix,\n  distill-appendix,\n  d-byline,\n  n-footnote-list,\n  d-citation-list,\n  n-footer {\n    grid-template-columns: [screen-start] 1fr [page-start kicker-start middle-start text-start] 45px 45px 45px 45px 45px 45px 45px 45px [ kicker-end text-end gutter-start] 45px [middle-end] 45px [page-end gutter-end] 1fr [screen-end];\n    grid-column-gap: 16px;\n  }\n\n  .grid {\n    grid-column-gap: 16px;\n  }\n}\n\n@media(min-width: 1000px) {\n  .base-grid,\n  n-header,\n  n-title,\n  d-abstract,\n  n-article,\n  n-appendix,\n  distill-appendix,\n  d-byline,\n  n-footnote-list,\n  d-citation-list,\n  n-footer {\n    grid-template-columns: [screen-start] 1fr [page-start kicker-start] 50px [middle-start] 50px [text-start kicker-end] 50px 50px 50px 50px 50px 50px 50px 50px [text-end gutter-start] 50px [middle-end] 50px [page-end gutter-end] 1fr [screen-end];\n    grid-column-gap: 16px;\n  }\n\n  .grid {\n    grid-column-gap: 16px;\n  }\n}\n\n@media(min-width: 1180px) {\n  .base-grid,\n  n-header,\n  n-title,\n  d-abstract,\n  n-article,\n  n-appendix,\n  distill-appendix,\n  d-byline,\n  n-footnote-list,\n  d-citation-list,\n  n-footer {\n    grid-template-columns: [screen-start] 1fr [page-start kicker-start] 60px [middle-start] 60px [text-start kicker-end] 60px 60px 60px 60px 60px 60px 60px 60px [text-end gutter-start] 60px [middle-end] 60px [page-end gutter-end] 1fr [screen-end];\n    grid-column-gap: 32px;\n  }\n\n  .grid {\n    grid-column-gap: 32px;\n  }\n}\n\n\n\n\n.base-grid {\n  grid-column: screen;\n}\n\n/* .l-body,\nn-article > *  {\n  grid-column: text;\n}\n\n.l-page,\nn-title > *,\nd-figure {\n  grid-column: page;\n} */\n\n.l-gutter {\n  grid-column: gutter;\n}\n\n.l-text,\n.l-body {\n  grid-column: text;\n}\n\n.l-page {\n  grid-column: page;\n}\n\n.l-body-outset {\n  grid-column: middle;\n}\n\n.l-page-outset {\n  grid-column: page;\n}\n\n.l-screen {\n  grid-column: screen;\n}\n\n.l-screen-inset {\n  grid-column: screen;\n  padding-left: 16px;\n  padding-left: 16px;\n}\n\n\n/* Aside */\n\nn-article aside {\n  grid-column: gutter;\n  font-size: 12px;\n  line-height: 1.6em;\n  color: rgba(0, 0, 0, 0.6)\n}\n\n@media(min-width: 768px) {\n  aside {\n    grid-column: gutter;\n  }\n\n  .side {\n    grid-column: gutter;\n  }\n}\n','/*\n * Copyright 2018 The Distill Template Authors\n *\n * Licensed under the Apache License, Version 2.0 (the "License");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an "AS IS" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n@media print {\n\n  @page {\n    size: 8in 11in;\n    @bottom-right {\n      content: counter(page) " of " counter(pages);\n    }\n  }\n\n  html {\n    /* no general margins -- CSS Grid takes care of those */\n  }\n\n  p, code {\n    page-break-inside: avoid;\n  }\n\n  h2, h3 {\n    page-break-after: avoid;\n  }\n\n  n-header {\n    visibility: hidden;\n  }\n\n  n-footer {\n    display: none!important;\n  }\n\n}\n'].join("");function D(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}window.addEventListener("DOMContentLoaded",(function(){!function(n){var t="prerendered-styles";if(!n.getElementById(t)){var e=n.createElement("style");e.id=t,e.type="text/css";var r=n.createTextNode(N);e.appendChild(r);var o=n.head.querySelector("script");n.head.insertBefore(e,o)}}(document);var n,t=function(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(n){if("string"==typeof n)return D(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?D(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return a=n.done,n},e:function(n){c=!0,i=n},f:function(){try{a||null==e.return||e.return()}finally{if(c)throw i}}}}(C);try{for(t.s();!(n=t.n()).done;){var e=n.value;customElements.define(e.tagName,e)}}catch(n){t.e(n)}finally{t.f()}}))})();