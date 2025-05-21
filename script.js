var crsr = document.querySelector("#cursor");
var crsrBlur = document.querySelector("#cursor_blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + 30 + "px";
  crsr.style.top = dets.y + "px";
  crsrBlur.style.left = dets.x - 250 + "px";
  crsrBlur.style.top = dets.y - 250 + "px";
});
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "90px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    //   markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

var cards = document.querySelectorAll("#page_4 .elem");

cards.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.border = "0px solid #95C11E";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.from("#about_us img, #about_us_in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about_us",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#cardText_img", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#cardText_img",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from("#colon_1", {
  y: -75,
  x: -75,
  scrollTrigger: {
    trigger: "#colon_1",
    scroller: "body",
    // marker: true,
    top: "55%",
    end: "45%",
    scrub: 4,
  },
});

gsap.from("#colon_2", {
  y: 75,
  x: 75,
  scrollTrigger: {
    trigger: "#colon_2",
    scroller: "body",
    // marker: true,
    top: "55%",
    end: "45%",
    scrub: 4,
  },
});

gsap.from("#page_4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page_4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
