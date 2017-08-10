var btn_s = document.querySelector(".size-btn-s");
var btn_l = document.querySelector(".size-btn-l");
var btn_xl = document.querySelector(".size-btn-xl");

  btn_s.addEventListener("click", function(event) {
    btn_s.classList.toggle("size-btn-bg");
    btn_l.classList.remove("size-btn-bg");
    btn_xl.classList.remove("size-btn-bg");
  })

  btn_l.addEventListener("click", function(event) {
    btn_s.classList.remove("size-btn-bg");
    btn_l.classList.toggle("size-btn-bg");
    btn_xl.classList.remove("size-btn-bg");
  })

  btn_xl.addEventListener("click", function(event) {
    btn_s.classList.remove("size-btn-bg");
    btn_l.classList.remove("size-btn-bg");
    btn_xl.classList.toggle("size-btn-bg");
  })

var color_gray = document.querySelector(".select-color-gray");
var color_silver = document.querySelector(".select-color-silver");
var color_gold = document.querySelector(".select-color-gold");

  color_gray.addEventListener("click", function(event) {
    color_gray.classList.toggle("color-img-bg");
    color_silver.classList.remove("color-img-bg");
    color_gold.classList.remove("color-img-bg");
  })

  color_silver.addEventListener("click", function(event) {
    color_gray.classList.remove("color-img-bg");
    color_silver.classList.toggle("color-img-bg");
    color_gold.classList.remove("color-img-bg");
  })

  color_gold.addEventListener("click", function(event) {
    color_gray.classList.remove("color-img-bg");
    color_silver.classList.remove("color-img-bg");
    color_gold.classList.toggle("color-img-bg");
  })

var iphone_plus = document.querySelector(".btn-iphone-l");
var iphone = document.querySelector(".btn-iphone-s");

  iphone_plus.addEventListener("click", function(event) {
    iphone_plus.classList.toggle("btn-iphone-bg");
    iphone.classList.remove("btn-iphone-bg");
  })

  iphone.addEventListener("click", function(event) {
    iphone_plus.classList.remove("btn-iphone-bg");
    iphone.classList.toggle("btn-iphone-bg");
  })
