const swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slideActiveClass: "active",
    navigation: {
      nextEl: ".next",
      prevEl: ".prev"
    },
    pagination: {
      el: ".pagination",
      clickable: true
    },
    autoplay: {
      enabled: true,
      delay: 2000
    },
    // Media
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 4,
    //     spaceBetween: 30
    //   },
    // }
  });
  
  // let counts=setInterval(updated);
  // let upto=1000;
  // function updated(){
  //     var count= document.getElementById("counter");
  //     count.innerHTML=--upto;
  //     if(upto === 0) {
  //         clearInterval(counts);
  //     }
  // }

 



  