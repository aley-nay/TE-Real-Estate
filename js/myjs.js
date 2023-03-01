$(document).ready(function(){
 $('#categoryslider .owl-carousel').owlCarousel({
   rewind: true,
   loop: false,
   autoplay:true,
   autoplayTimeout:3000,
   nav: true,
   dots: false,
   margin: 10,
   addClassActive: true,
   navText: ['<i class="fas fa-chevron-left p-3"></i>', '<i class="fas fa-chevron-right p-3"></i>'],
   responsive: {
     0: {
       items: 1,
     },
     480: {
       items: 2,
     },
     800: {
       items: 3,
     }
   }
 });
  $('.testimonial-main .owl-carousel').owlCarousel({
   rewind: true,
   loop: false,
   autoplay:true,
   autoplayTimeout:3000,
   nav: false,
   dots: true,
   margin: 0,
   responsive: {
     0: {
       items: 1,
     },
     480: {
       items: 1,
     },
     800: {
       items: 1,
     }
   }
 });
$(window).scroll(function(){
        if($(window).scrollTop() > 50){
          $(".navbar").addClass( "fixed-top " );
        }
        else{
          $(".navbar").removeClass( "fixed-top " );

        }
      });


var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: false,
    nav: false,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
  
  if ($(window).width() > 991) {
  var footerParaHeight = $(".footer").height();
$(".wrap").css("margin-bottom",footerParaHeight);
}

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop : 0       
    }, 500);
});

});
