setTimeout(function () {
    $('#preloader').fadeOut();
    $('.preloader_img').delay(10).fadeOut('slow');
}, 1000);

$("#preloader").animate({
    'opacity': '0'
}, 6000, function () {
    setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
    }, 300000);
});

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
    10000;
});

// client counter
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
 
 $(document).ready(function(){
     $('.counter-value').each(function(){
         $(this).prop('Counter',0).animate({
             Counter: $(this).text()
         },{
             duration: 3500,
             easing: 'swing',
             step: function (now){
                 $(this).text(Math.ceil(now));
             }
         });
     });
 });




  var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



$(document).ready(function() {

        $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
}); 
 
});  





