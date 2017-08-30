var slideIndex=1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(n > slides.length){
		slideIndex = 1;
	}
	if(n < 1){
		slideIndex = slides.length;
	}
	for(i=0; i<slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	 slides[slideIndex-1].style.display = "block";
	 dots[slideIndex-1].className+= " active";
}

var open = document.querySelector(".bt-menu");
var menu = document.querySelector(".nav-menu");
var nav = document.querySelector(".nav-info");

open.addEventListener("click", function(event) {
	menu.classList.toggle("nav-menu-show");
	open.classList.toggle("menu-on");
	nav.classList.toggle("nav-info-show");
})
