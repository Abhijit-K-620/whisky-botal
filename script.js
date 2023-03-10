// gsap.from(".content",{
//     opacity:0,
//     y:200,
//     duration:2,

// } )
// gsap.from(".bottol",{
//     opacity:0,
//     y:500,
//     duration:1,

// } )
// gsap.from("#hr",{
//     opacity:0,
//     y:200,
//     duration:2,

// } )
var tl = gsap.timeline()

tl.from(".menu",{
    opacity:0,
    duration:1,
    ease:Power0.easeOut
})
.from(".content h5",{
    opacity:0,
    duration:0.5,
    y:200,
})
.from(".content h1",{
    opacity:0,
    duration:0.5,
    y:200
})
.from(".content h6",{
  opacity:0,
  duration:0.5,
  y:200,
})

.from(".bottol",{
  opacity:0,
  duration:0.5,
  y:200,
})

// .from(".page2 img",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })

// .from(".page2-text h6",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })
// .from(".page2-text h4",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })
// .from(".page2-text h5",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })
// .from(". p",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })
// .from(". .change",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })

// .from(".swiper",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })

// .from(".top-footer",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })
// .from(".right-bottom",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })
// .from(".left-bottom",{
//   opacity:0,
//   duration:0.5,
//   y:200,
// })

const swiper = new Swiper('.swiper', {
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});




function openNav() {
  document.getElementById("myNav").style.width= "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


var page =gsap.timeline({
  scrollTrigger: {
    trigger: ".overlay",
    scrollTrigger: "body",
    

  },
})

page.from("#myNav .img",{
  opacity:0,
  duration:1,
  y:200
})







var page2 =gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 50%",

  },
})

page2.from(".page2-text h6",{
  opacity:0,
  duration:1,
})

page2.from(".page2-text h4", {
  opacity: 0,
  duration: 2,
})
page2.from(".page2-text h5", {
  opacity: 0,
  duration: 2,
})

page2.from(".page2 img ", {
  opacity: 0,
  duration: 1,
  y:200
})


var page4=gsap.timeline({
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 50%",
  }
})

page4.from(".page3 p", {
  
  x: 500,
  duration: 1,
})
page4.from(".page3 .change", {
  
  x:-1000,
  duration: 1,
})
page4.from(".page3 button", {
  
  x: 500,
  duration: 1,
})
page4.from(".swiper-slide",{
  opacity:0,
  duration:1
})




var page4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer",
    scroller: "body",
    start: "top 50%"

  }
})

page4.from(".top-footer .insta", {
  opacity: 0,

})

page4.from(".top-footer h3", {
  opacity: 0,

})

page4.from(".left-bottom .news", {
  opacity: 0,

})

page4.from(".left-bottom .release", {
  opacity: 0,

})
page4.from(".input-data", {
  opacity: 0,

})
page4.from(".social-media", {
  opacity: 0,

})
page4.from(".cont",{
  x:-800,
  durtion:2
})
page4.from(".thing",{
  opacity:0,
  durtion:2
})

page4.from(".lower-footer",{
  opacity:0,
  durtion:2
})


