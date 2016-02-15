/**
 * Created by yauhen on 14.02.2016.
 */
var link = document.querySelector(".form-open-btn");
var popup = document.querySelector(".hotels-form");
var form = popup.querySelector("form");
var dateIn =popup.querySelector("[name=date-in]");
var dateOut =popup.querySelector("[name=date-out]");
var map = document.querySelector(".map");
var mapInteractive = document.querySelector(".modal-content-map");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("hotels-form-show");
});

form.addEventListener("submit", function(event) {
  if (!dateIn.value || !dateOut.value) {
    event.preventDefault();
//        popup.classList.add("hotels-form-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("hotels-form-show")) {
      popup.classList.remove("hotels-form-show");
//          popup.classList.remove("hotels-form-error");
    }
  }
});

map.addEventListener("click", function(event) {
  event.preventDefault();
  mapInteractive.classList.add("modal-content-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapInteractive.classList.contains("modal-content-show")) {
      mapInteractive.classList.remove("modal-content-show");
    }
  }
});
