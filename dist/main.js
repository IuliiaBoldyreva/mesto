(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function r(e,t,r){e.classList.remove(r.inputErrorClass),t.textContent=""}function n(e,t){e.disabled="disabled",e.classList.add(t.inactiveButtonClass)}function o(e,t,r){t?function(e,t){e.disabled=!1,e.classList.remove(t.inactiveButtonClass)}(e,r):n(e,r)}var i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonElement:".popup__save-button",inactiveButtonClass:"popup__save-button_invalid",inputErrorClass:"popop__input_state_invalid"};function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}!function(t){e(document.querySelectorAll(t.formSelector)).forEach((function(n){!function(t,n){var i=t.querySelectorAll(n.inputSelector),u=t.querySelector(n.submitButtonElement);o(u,t.checkValidity(),n),e(i).forEach((function(e){e.addEventListener("input",(function(){o(u,t.checkValidity(),n),function(e,t,n){var o=e.validity.valid,i=t.querySelector("#".concat(e.name,"-error"));o?r(e,i,n):function(e,t,r){e.classList.add(r.inputErrorClass),t.textContent=e.validationMessage}(e,i,n)}(e,t,n)}))})),t.addEventListener("submit",(function(e){e.preventDefault(),t.checkValidity()}))}(n,t)}))}(i);var a=document.getElementById("photos-grid-template"),c=document.querySelector(".photo-grid__items"),l=document.querySelector(".profile__change-button"),p=document.querySelector(".profile__add-button"),d=document.querySelector(".popup_theme_edit-profile"),s=document.querySelector(".popup_theme_add-photo"),m=document.querySelector(".popup__input_theme_name"),f=document.querySelector(".profile__name"),_=document.querySelector(".popup__input_theme_job"),v=document.querySelector(".profile__job"),y=document.querySelector(".popup__form_theme_edit"),g=document.querySelector(".popup__form_theme_add"),S=document.querySelector(".popup_theme_photo"),b=S.querySelector(".popup__img"),h=S.querySelector(".popup__title-img"),q=d.querySelector(".popup__save-button"),L=s.querySelector(".popup__save-button"),E=s.querySelectorAll(i.inputSelector),A=d.querySelectorAll(i.inputSelector),C=document.querySelector("#nameCard"),k=document.querySelector("#urlCard");function x(e){var t;(t=e,function(e){if(Array.isArray(e))return u(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){r(e,document.querySelector("#".concat(e.name,"-error")),i)}))}function j(e){e.classList.add("popup_visible"),e.addEventListener("click",U),document.addEventListener("keydown",R)}function T(e){e.classList.remove("popup_visible"),e.removeEventListener("click",U),document.removeEventListener("keydown",R)}function U(e){e.target===e.currentTarget&&T(e.target)}function R(e){if("Escape"===e.key){var t=document.querySelector(".popup_visible");t&&T(t)}}function w(e){var t=a.content.querySelector(".photo-grid__item").cloneNode(!0),r=t.querySelector(".photo-grid__image"),n=t.querySelector(".photo-grid__title"),o=t.querySelector(".photo-grid__delete-button");return t.querySelector(".photo-grid__like-button").addEventListener("click",(function(e){e.target.classList.toggle("photo-grid__like-button_active")})),r.src=e.imageURL,r.alt=e.altText,n.textContent=e.title,o.addEventListener("click",(function(){t.remove()})),r.addEventListener("click",(function(){var t,r;t=e.imageURL,r=e.title,b.src=t,b.alt=r,h.textContent=r,j(S)})),t}l.addEventListener("click",(function(){var e=f.textContent,t=v.textContent;m.value=e,_.value=t,j(d),n(q,i),x(A)})),p.addEventListener("click",(function(){g.reset(),j(s),n(L,i),x(E)})),document.querySelectorAll(".popup__close-button").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget.closest(".popup");t&&T(t)}))})),y.addEventListener("submit",(function(e){e.preventDefault(),f.textContent=m.value,v.textContent=_.value,T(d)})),[{title:"Индонезия",imageURL:"./images/indonezia.jpg",altText:"Фото природы тайланда, зелёные травянные поля"},{title:"Монтенегро",imageURL:"./images/montenegro.jpg",altText:"горный хребет с водой у подножья в монтенегро"},{title:'Фонтант "Треви", Рим',imageURL:"./images/rome.jpg",altText:"фонтант треви в риме"},{title:"Морское побережье",imageURL:"./images/sea.jpg",altText:"море окруженное скалами"},{title:"Альпы",imageURL:"././images/alpina.jpg",altText:"заснеженные горы"},{title:"Тайланд",imageURL:"./images/thailand.jpg",altText:"чайное поле"}].forEach((function(e){var t;t=e,c.appendChild(w(t))})),g.addEventListener("submit",(function(e){var t;e.preventDefault(),t={imageURL:k.value,altText:C.value,title:C.value},c.prepend(w(t)),T(s),g.reset()}))})();