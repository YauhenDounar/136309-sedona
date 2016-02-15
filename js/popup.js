/**
 * Created by yauhen on 14.02.2016.
 */
var button = document.querySelector(".form-open-btn");
var popup = document.querySelector(".hotels-form");
var form = popup.querySelector("form");
var dateIn =popup.querySelector("[name=date-in]");
var dateOut =popup.querySelector("[name=date-out]");
var map = document.querySelector(".map");
var mapInteractive = document.querySelector(".modal-content-map");

button.addEventListener("click", function(event) {
  if (popup.classList.contains("hotels-form-show") || popup.classList.contains("hotels-form-error")) {
    event.preventDefault();
    popup.classList.remove("hotels-form-show");
    popup.classList.remove("hotels-form-error");
  } else {
    event.preventDefault();
    popup.classList.add("hotels-form-show");
  }
});

form.addEventListener("submit", function(event) {
  if (!dateIn.value || !dateOut.value) {
    event.preventDefault();
        popup.classList.remove("hotels-form-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("hotels-form-error");
  } else {
    //event.preventDefault();
    popup.classList.remove("modal-content-show");
  }
});
//
//window.addEventListener("keydown", function(event) {
//  if (event.keyCode === 27) {
//    if (popup.classList.contains("hotels-form-show")) {
//      popup.classList.remove("hotels-form-show");
//      popup.classList.remove("hotels-form-error");
//    }
//  }
//});
//
//map.addEventListener("click", function(event) {
//  event.preventDefault();
//  mapInteractive.classList.add("modal-content-show");
//});
//
//window.addEventListener("keydown", function(event) {
//  if (event.keyCode === 27) {
//    if (mapInteractive.classList.contains("modal-content-show")) {
//      mapInteractive.classList.remove("modal-content-show");
//    }
//  }
//});
