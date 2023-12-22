/*

TemplateMo 560 Astro Motion

https://templatemo.com/tm-560-astro-motion

*/

var gallery = undefined;

function closeMenu() {
  $(".navbar-collapse").removeClass("show"); 
}

function highlightMenu(no) {
  $(".navbar .navbar-nav > .nav-item").removeClass('selected');
  $(".navbar .navbar-nav > .nav-item > .nav-link[data-no='" + no + "']").parent().addClass('selected');
}

function hitungAkar() {
  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var c = parseFloat(document.getElementById("c").value);

  var diskriminan = math.subtract(math.pow(b, 2), math.multiply(4, math.multiply(a, c)));

  var akar1, akar2;
  if (math.larger(diskriminan, 0)) {
    akar1 = math.divide(math.add(-b, math.sqrt(diskriminan)), math.multiply(2, a));
    akar2 = math.divide(math.subtract(-b, math.sqrt(diskriminan)), math.multiply(2, a));
  }
  else if (math.equal(diskriminan, 0)) {
    akar1 = akar2 = math.divide(math.multiply(-1, b), math.multiply(2, a));
  }
  else {
    var realPart = math.divide(math.multiply(-1, b), math.multiply(2, a));
    var imaginaryPart = math.divide(math.sqrt(math.multiply(-1, diskriminan)), math.multiply(2, a));
    akar1 = math.format(math.add(realPart, imaginaryPart), { notation: 'fixed', precision: 2 });
    akar2 = math.format(math.subtract(realPart, imaginaryPart), { notation: 'fixed', precision: 2 });
  }

  document.getElementById("akar1").textContent = "Akar 1 : " + akar1 + " Atau ";
  document.getElementById("akar2").textContent = "Akar 2 : " + akar2;
}

function setupGallery() {
  gallery = $('.gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
}

function openPage(no) {
  if(no == 2) {
    if(gallery == undefined) {
      setupGallery();
    } else {
      $('.gallery-slider').slick('unslick');
      setupGallery();
    }    
  }

  $('.cd-hero-slider li').hide();
  $('.cd-hero-slider li[data-page-no="' + no + '"]')
    .fadeIn();
}

$(window).on('load', function() {
  $('body').addClass('loaded');
  openPage(1);
});

jQuery(function() {
    $('.tm-page-link').on('click', function(){
      var pageNo = $(this).data('page-no');
      openPage(pageNo);
      highlightMenu(pageNo);
    });

    $(".navbar .navbar-nav > .nav-item > a.nav-link").on('click', function(e){
      var pageNo = $(this).data('no');

      openPage(pageNo);
      highlightMenu(pageNo);
      closeMenu();     
    });

    $("html").click(function(e) {
      closeMenu();
    });
});