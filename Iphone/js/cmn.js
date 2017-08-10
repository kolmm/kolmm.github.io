var desc_iphone_plus = document.querySelector(".desc-btn-iphone-l");
var desc_iphone = document.querySelector(".desc-btn-iphone-s");
var desc_future = document.querySelector(".desc-feature");
var desc_future_plus = document.querySelector(".desc-feature-plus");
var iphone_plus = document.querySelector(".btn-iphone-l");
var iphone = document.querySelector(".btn-iphone-s");
var color_gray = document.querySelector(".select-color-gray");
var color_silver = document.querySelector(".select-color-silver");
var color_gold = document.querySelector(".select-color-gold");
var btn_s = document.querySelector(".size-btn-s");
var btn_l = document.querySelector(".size-btn-l");
var btn_xl = document.querySelector(".size-btn-xl");

  desc_iphone_plus.addEventListener("click", function(event) {
    desc_iphone_plus.classList.toggle("btn-iphone-bg");
    desc_iphone.classList.remove("btn-iphone-bg");
    desc_future.classList.toggle("desc-feature__none");
    desc_future_plus.classList.toggle("desc-feature__none");
  })

  desc_iphone.addEventListener("click", function(event) {
    desc_iphone_plus.classList.remove("btn-iphone-bg");
    desc_iphone.classList.toggle("btn-iphone-bg");
    desc_future.classList.remove("desc-feature__none");
    desc_future_plus.classList.add("desc-feature__none");
  })



  iphone_plus.addEventListener("click", function(event) {
    iphone_plus.classList.toggle("btn-iphone-bg");
    iphone.classList.remove("btn-iphone-bg");
  })

  iphone.addEventListener("click", function(event) {
    iphone_plus.classList.remove("btn-iphone-bg");
    iphone.classList.toggle("btn-iphone-bg");
  })


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
