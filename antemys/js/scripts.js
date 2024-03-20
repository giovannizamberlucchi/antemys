(function ($) {
  $(document).ready(function () {
    "use strict";
    

    // BACK BUTTON RELOAD
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload()
      }
    };

    // ICON CONTENT BLOCK
    $('.icon-content-block .content-block').mouseenter(function () {
      $('.selected').removeClass('selected').addClass('icon-content-block .content-block');
      $(this).removeClass('icon-content-block .content-block').addClass('selected');
    });


    // SPLITTING
    Splitting();


    // DATA BACKGROUND IMAGE
    var pageSection = $(".swiper-slide");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
    });


    // TREE MENU
    $('.site-navigation .inner ul li i').click(function () {
      $(this).parent().children('.site-navigation .inner ul li ul').slideToggle(300);
      return true;
    });


    // HAMBURGER MENU
    $('.hamburger').on('click', function (e) {
      if ($(".site-navigation").hasClass("active")) {
        $("body").toggleClass("overflow");
        $(".site-navigation").removeClass("active");
        $(".site-navigation").css("transition-delay", "0.5s");
        $(".site-navigation .layer").css("transition-delay", "0.3s");
        $(".site-navigation .inner").css("transition-delay", "0s");
      } else {
        $(".site-navigation").addClass('active');
        $("body").toggleClass("overflow");
        $(".site-navigation.active").css("transition-delay", "0s");
        $(".site-navigation.active .layer").css("transition-delay", "0.2s");
        $(".site-navigation.active .inner").css("transition-delay", "0.7s");
      }
      $(this).toggleClass("is-opened-navi");
    });


    // FOLLOW US
    


    // ALL CASES
    $('.all-cases-link b').on('click', function (e) {
      if ($(".all-cases").hasClass("active")) {
        $("body").toggleClass("overflow");
        $(".all-cases").removeClass("active");
        $(".all-cases").css("transition-delay", "0.5s");
        $(".all-cases .layer").css("transition-delay", "0.3s");
        $(".all-cases .inner").css("transition-delay", "0s");
      } else {
        $(".all-cases").addClass('active');
        $("body").toggleClass("overflow");
        $(".all-cases.active").css("transition-delay", "0s");
        $(".all-cases.active .layer").css("transition-delay", "0.2s");
        $(".all-cases.active .inner").css("transition-delay", "0.7s");
      }

    });


    // CONTACT FORM INPUT LABEL
    function checkForInput(element) {
      const $label = $(element).siblings('span');
      if ($(element).val().length > 0) {
        $label.addClass('label-up');
      } else {
        $label.removeClass('label-up');
      }
    }

    // The lines below are executed on page load
    $('input, textarea').each(function () {
      checkForInput(this);
    });

    // The lines below (inside) are executed on change & keyup
    $('input, textarea').on('change keyup', function () {
      checkForInput(this);
    });


    // FOOTER HEIGHT CALCULATION	
    $('body').css({
      'margin-bottom': $('.footer').innerHeight()
    });


    // EQUALIZER TOGGLE
    var source = "audio/audio.mp3";
    var audio = new Audio(); // use the constructor in JavaScript, just easier that way
    audio.addEventListener("load", function () {
      audio.play();
    }, true);
    audio.src = source;
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.2;

    $('.equalizer').click();
    var playing = true;
    $('.equalizer').click(function () {
      if (playing == false) {
        audio.play();
        playing = true;

      } else {
        audio.pause();
        playing = false;
      }
    });


    // EQUALIZER
    function randomBetween(range) {
      var min = range[0],
        max = range[1];
      if (min < 0) {
        return min + Math.random() * (Math.abs(min) + max);
      } else {
        return min + Math.random() * max;
      }
    }

    $.fn.equalizerAnimation = function (speed, barsHeight) {
      var $equalizer = $(this);
      setInterval(function () {
        $equalizer.find('span').each(function (i) {
          $(this).css({
            height: randomBetween(barsHeight[i]) + 'px'
          });
        });
      }, speed);
      $equalizer.on('click', function () {
        $equalizer.toggleClass('paused');
      });
    };

    var barsHeight = [
      [2, 13],
      [5, 22],
      [17, 8],
      [4, 18],
      [11, 3]
    ];
    $('.equalizer').equalizerAnimation(180, barsHeight);


    // BACK BUTTON RELOAD
    window.onpageshow = function (event) {
      if (event.persisted) {
        window.location.reload()
      }
    };


    // PAGE TRANSITION
    $('body a').on('click', function (e) {


      var target = $(this).attr('target');
      var fancybox = $(this).data('fancybox');
      var url = this.getAttribute("href");
      if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') && url.indexOf('javascript:void(0);') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");

        if (url.indexOf('#' && 'javascript:void(0);') != -1) {
          var hash = url.substring(url.indexOf('#'));


          if ($('body ' + hash).length != 0) {
            $('.page-transition').removeClass("active");
            $(".hamburger").toggleClass("open");
            $("body").toggleClass("overflow");
            $(".navigation-menu").removeClass("active");
            $(".navigation-menu .inner ul").css("transition-delay", "0s");
            $(".navigation-menu .inner blockquote").css("transition-delay", "0s");
            $(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");

            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 1000);
          }
        } else {

          $('.page-transition').toggleClass("active");
          setTimeout(function () {
            window.location = url;
          }, 1000);
        }
      }
    });


  });
  // END JQUERY	


  // SLIDER
  var mainslider = new Swiper('.gallery-top', {
    spaceBetween: 0,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: true,
    loopedSlides: 3,
    thumbs: {
      swiper: sliderthumbs
    }
  });


  // SLIDER THUMBS
  var sliderthumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 3,
    touchRatio: 0.2,
    slideToClickedSlide: true,
    loop: true,
    loopedSlides: 3,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 1
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });

  if ($(".gallery-top")[0]) {
    mainslider.controller.control = sliderthumbs;
    sliderthumbs.controller.control = mainslider;
  } else {

  }


  // OFFICE SLIDER
  new Swiper('.office-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // SLIDER
  var carouselslider = new Swiper('.carousel-slider', {
    spaceBetween: 0,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  });


  // TESTIMONIALS
  new Swiper('.testimonials-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });


  // COUNTER
  $(document).scroll(function () {
    $('.odometer').each(function () {
      var parent_section_postion = $(this).closest('section').position();
      var parent_section_top = parent_section_postion.top;
      if ($(document).scrollTop() > parent_section_top - 300) {
        if ($(this).data('status') == 'yes') {
          $(this).html($(this).data('count'));
          $(this).data('status', 'no');
        }
      }
    });
  });


  // WOW ANIMATION 
  wow = new WOW({
    animateClass: 'animated',
    offset: 50
  });
  wow.init();


  // PRELOADER
  $(window).load(function () {
    $("body").addClass("page-loaded");
  });

})(jQuery);

// CAR
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);