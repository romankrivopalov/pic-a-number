(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,o(i.key),i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e,n){return(e=o(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===t(n)?n:String(n)}const r=n((function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"handleLiftUp",(function(){n._container.classList.add(n._setting.containerListUpClass)})),i(this,"handleLiftDown",(function(){n._container.classList.remove(n._setting.containerListUpClass)})),this._setting=e,this._container=document.querySelector(this._setting.containerSelector)}));function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,l(i.key),i)}}function s(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e,n){return(e=l(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){var e=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===u(e)?e:String(e)}const f=s((function t(e,n,i){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a(this,"_startGame",(function(){o._handlePickNumber({from:+o._inputs[0].value,to:+o._inputs[1].value}),o._handleLiftContainerUp(),o._inputs[0].value=1,o._inputs[1].value=1e3})),a(this,"_checkInputValidity",(function(){o._inputs.some((function(t){return!t.validity.valid}))||+o._inputs[0].value>=+o._inputs[1].value||+o._inputs[0].value<1||+o._inputs[1].value<100?(o._startBtn.classList.add(o._setting.btnActiveClass),o._startBtn.disabled=!0):(o._startBtn.classList.remove(o._setting.btnActiveClass),o._startBtn.disabled=!1)})),a(this,"setEnentListeners",(function(){o._startBtn.addEventListener("click",(function(t){t.preventDefault(),o._startGame()})),o._inputs.forEach((function(t){return t.addEventListener("input",(function(){o._checkInputValidity()}))}))})),this._setting=e,this._form=document.querySelector(this._setting.formSelector),this._startBtn=this._form.querySelector(this._setting.startBtnSelector),this._inputs=Array.from(this._form.querySelectorAll(this._setting.inputSelecor)),this._handleLiftContainerUp=n,this._handlePickNumber=i}));function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function m(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,y(i.key),i)}}function p(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function b(t,e,n){return(e=y(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==_(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}const d=p((function t(e,n,i,o,r){var u=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,"_endGame",(function(){u._handleLiftContainerDown(),u._handleResetCount(),u._countHint,u._input.classList.remove(u._setting.inputGuessSelector),u._input.disabled=!1,u._decor.classList.remove(u._setting.decorShowClass),u._togglePickBtn(!1)})),b(this,"_togglePickBtn",(function(t){t?(u._pickBtn.classList.add(u._setting.btnInactiveSelector),u._pickBtn.disabled=!0):(u._pickBtn.classList.remove(u._setting.btnInactiveSelector),u._pickBtn.disabled=!1)})),b(this,"_checkInputValidity",(function(t){t<u._fromNumber||t>u._toNumber?u._togglePickBtn(!0):u._togglePickBtn(!1)})),b(this,"_makeMove",(function(){u._handleSetCount(),+u._input.value===u._randomNum?(u._info.textContent="YES! you guessed it in ".concat(u._handleGetCount()," attempts! The hidden number ").concat(u._randomNum),u._input.classList.add(u._setting.inputGuessSelector),u._input.disabled=!0,u._decor.classList.add(u._setting.decorShowClass),u._togglePickBtn(!0)):2===u._countHint?(u._input.value>u._randomNum?u._info.textContent="No... the hidden number is smaller, and it is ".concat(u._isEvenNumber?"EVEN":"ODD"):u._info.textContent="No... the hidden number is bigger, and it is ".concat(u._isEvenNumber?"EVEN":"ODD"),u._countHint=u._setting.countHint):(u._input.value>u._randomNum?u._info.textContent="No... the hidden number is smaller":u._info.textContent="No... the hidden number is bigger",u._countHint++)})),b(this,"_getRandomNum",(function(){u._randomNum=Math.round(Math.random()*(u._toNumber-u._fromNumber)+u._fromNumber),u._isEvenNumber=!(u._randomNum%2)})),b(this,"handlePickNumber",(function(t){var e=t.from,n=t.to;u._fromNumber=e,u._toNumber=n,u._getRandomNum(),u._input.value=u._fromNumber,u._info.textContent="Guess the number from ".concat(u._fromNumber," to ").concat(u._toNumber)})),b(this,"setEnentListeners",(function(){u._resetBtn.addEventListener("click",(function(){u._endGame()})),u._input.addEventListener("input",(function(t){var e=t.target;u._checkInputValidity(e.value)})),u._pickBtn.addEventListener("click",(function(t){t.preventDefault(),u._makeMove()}))})),this._setting=e,this._resetBtn=document.querySelector(this._setting.btnResetSelector),this._form=document.querySelector(this._setting.formSelector),this._input=this._form.querySelector(this._setting.inputSelector),this._pickBtn=this._form.querySelector(this._setting.pickBtnSelector),this._info=this._form.querySelector(this._setting.infoSelector),this._decor=document.querySelector(this._setting.decorSelector),this._countHint=this._setting.countHint,this._handleLiftContainerDown=n,this._handleSetCount=i,this._handleResetCount=o,this._handleGetCount=r}));function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,w(i.key),i)}}function S(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function g(t,e,n){return(e=w(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function w(t){var e=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==h(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===h(e)?e:String(e)}const C=S((function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),g(this,"getConut",(function(){return n._count})),g(this,"resetCount",(function(){n._count=0,n._moveCount.textContent=n._count})),g(this,"setCount",(function(){n._moveCount.textContent=++n._count})),this._setting=e,this._moveCount=document.querySelector(this._setting.counterSelector),this._count=0}));var k=new r({containerSelector:".container",containerListUpClass:"container_lift-up"}),N=new C({counterSelector:".moves__count"}),L=new d({formSelector:"#gameplay-form",btnResetSelector:'.btn[data-type="reset"]',inputSelector:".gameplay__input",inputGuessSelector:"gameplay__input_guess",pickBtnSelector:'.btn[data-type="pick"]',btnInactiveSelector:"btn_type_inactive",infoSelector:".gameplay__wrapper",decorSelector:'.decor[data-type="decor"]',decorShowClass:"decor_show",countHint:0},k.handleLiftDown,N.setCount,N.resetCount,N.getConut);new f({formSelector:"#start-form",startBtnSelector:'.btn[data-type="start"]',btnActiveClass:"btn_type_inactive",inputSelecor:".start__input"},k.handleLiftUp,L.handlePickNumber).setEnentListeners(),L.setEnentListeners()})();