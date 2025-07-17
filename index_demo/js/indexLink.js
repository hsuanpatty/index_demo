  // index-link
  $('#indexLink-owl-carousel').owlCarousel({
    nav: true,
    responsiveClass: true,
    loop: false,
    margin: 20,
    smartSpeed: 400,
    //        autoplay: true,
    autoplayTimeout: 5000,
    dots: false,
    navText: ["<img src='https://www.artisan.com.tw/images/20_back.svg'>", "<img src='https://www.artisan.com.tw/images/20_next.svg'>"],
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 4
      },
      576: {
        items: 3,
        autoplay: false,
      },
      768: {
        items: 4,
        autoplay: false,
      },
      769: {
        items: 4
      },
      1200: {
        items: 6,
        autoplay: false,
      },

    }
  });