$(document).ready(function() {
            $('#carousel-one').owlCarousel({
                loop:true, //Зацикливаем слайдер
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:4000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });

            $('.nav__items a, .btn--top').mPageScroll2id();

            $('.bt-menu').click(function(){
              $('.nav__items').fadeToggle();
            });

            (function($) {

              $('.bt-menu').click(function(e) {
                $(this).toggleClass('active');
                return false;
              });

            });

            $('#carousel-gallery').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:46, //Отступ от элемента справа в 50px
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3
                    }
                }
            });

            $('#carousel-review').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:46, //Отступ от элемента справа в 50px
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:3000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });

            $('#carousel-featured').owlCarousel({
                loop:true, //Зацикливаем слайдер
                margin:46, //Отступ от элемента справа в 50px
                autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:3000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:5
                    }
                }
            });

            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
       disableOn: 700,
       type: 'iframe',
       mainClass: 'mfp-fade',
       removalDelay: 160,
       preloader: false,

       fixedContentPos: false
   });
        });
