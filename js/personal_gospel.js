function showImages(el) {
  var windowHeight = jQuery( window ).height();
  $(el).each(function(){
      var thisPos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (topOfWindow + windowHeight - 100 > thisPos ) {
          $(this).addClass("fadeIn-topic");
      }
  });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function(){
  showImages('.hide-topic');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function() {
  showImages('.hide-topic');
});

var mybutton = document.getElementById("backToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showArrow(prev, next) {
  var prevBtn = document.getElementById(prev);
  var nextBtn = document.getElementById(next);
  prevBtn.style.display = "block";
  nextBtn.style.display = "block";
}

function hideArrow(prev, next) {
  var prevBtn = document.getElementById(prev);
  var nextBtn = document.getElementById(next);
  prevBtn.style.display = "none";
  nextBtn.style.display = "none";
}

// personal gospel project page
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function toggleContent() {
  var x = document.getElementById("toggle-cls");
  var y = document.getElementById("toggle-btn");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.backgroundColor = "#B2A89F"
    y.style.color = "#161616";
    y.style.border = "1px solid #B2A89F";

    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".gs_reveal_hide").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });

    // fix the bug for .credits class disappear when toggle
    gsap.utils.toArray(".gs_reveal:last-child").forEach(function(elem) {
      hide(elem); // assure that the element is hidden when scrolled into view
      ScrollTrigger.create({
        trigger: elem,
        onEnter: function() { animateFrom(elem) }, 
        onEnterBack: function() { animateFrom(elem, -1) },
        onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
      });
    });
  } else {
    x.style.display = "none";
    y.style.backgroundColor = "#161616"
    y.style.color = "#B2A89F";
  }
}

function hoverBtn(x) {
  var togCls = document.getElementById("toggle-cls");
  if (togCls.style.display === "none") {
    x.style.color = "#F06A00";
    x.style.border = "1px solid #F06A00";
  }
}

function releaseBtn(x) {
  var togCls = document.getElementById("toggle-cls");
  if (togCls.style.display === "none") {
    x.style.color = "#B2A89F";
    x.style.border = "1px solid #B2A89F";
  }
}
