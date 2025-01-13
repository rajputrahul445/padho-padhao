$( ".dropmenuToggle" ).click(function() {
  $( this ).parent('.nav-item').toggleClass("active");
  //$( this ).parent('.qnsTop').toggleClass("hide");
})

$(document).ready(function(){
  $('.singleSlider').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      autoplay:false,
      autoplayTimeout:10000,
      dots:true,
      navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
      responsive:{
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
  $('.threeSlider').owlCarousel({
      loop:true,
      margin:30,
      nav:true,
      autoplay:false,
      autoplayTimeout:3000,
      dots:true,
      navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
      responsive:{
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
  $('.fourSlider').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    autoplay:false,
    autoplayTimeout:3000,
    dots:true,
    navText : ["<img src='images/angle-left.png' />","<img src='images/angle-right.png' />"],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
  $('.blogSlider').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        dots:false,
        navText : ["<img src='images/arrow-left.png' />","<img src='images/arrow-right.png' />"],
        responsive:{
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
});


$( ".navbar-toggler, .cross-toggler" ).click(function() {
  $("#navbarSupportedContent").toggleClass("active");
  $(".overLay").toggleClass("active");
});
$( ".filterBx h3" ).click(function() {
    $(this).parent().toggleClass("active");
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 41) {
        $(".mainHeader").addClass("fixedHeader");
    }else{
    	$(".mainHeader").removeClass("fixedHeader");
    }
});
  
function myFunction() {
    var x = document.getElementById("password");
    var eye = document.getElementById("passEye");
    if (x.type === "password") {
      x.type = "text";
      eye.classList.add("showPassword");
    } else {
      x.type = "password";
      eye.classList.remove("showPassword");
    }
  }
  
