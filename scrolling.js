"use strict";

gsap.registerPlugin(ScrollTrigger);

//phones popping
let phoneTimeline = gsap.timeline({ repeatDelay: 0.5, scrollTrigger: "#two" });

phoneTimeline.from("#phoneside", {
  opacity: 0,
  x: 300,
  duration: 2,
});

phoneTimeline.from("#phonebottom", {
  opacity: 0,
  y: 300,
  duration: 2,
});

//pop sockets
gsap.to("#socket2", {
  duration: 10,
  rotation: 360,
  repeat: -1,
  ease: "linear",
});

gsap.to("#socket3", {
  duration: 2,
  rotation: 10,
  repeat: -1,
  yoyo: true,
  ease: "linear",
});

//text, section 3
let h2Timeline = gsap.timeline({ repeatDelay: 0.5, scrollTrigger: "#three" });

h2Timeline.from("#three .left", {
  duration: 1.5,
  x: "-2em",
  opacity: 0,
});

h2Timeline.from("#three .right", {
  duration: 1.5,
  x: "2em",
  opacity: 0,
});

h2Timeline.from("#three p", {
  duration: 1,
  opacity: 0,
});

// text, section 5
let section5Timeline = gsap.timeline({ repeatDelay: 0.5, scrollTrigger: "#five" });

section5Timeline.from("#five .left", {
  duration: 1.5,
  x: "-2em",
  opacity: 0,
});

section5Timeline.from("#five .right", {
  duration: 1.5,
  x: "2em",
  opacity: 0,
});

section5Timeline.from("#five p", {
  duration: 1,
  opacity: 0,
});

//boom animation on section 4

let section4Timeline = gsap.timeline({ repeatDelay: 0.5, scrollTrigger: "#four" });

section4Timeline.from("#boom", {
  duration: 1,
  opacity: 0,
  scale: 0,
  ease: "linear",
});

section4Timeline.to("#boom", {
  duration: 1,
  opacity: 0,
  scale: 2,
  ease: "ease-out",
});

section4Timeline.from("#shop-now", {
  opacity: 0,
});

section4Timeline.to("#shop-now", {
  opacity: 1,
  ease: "ease-in",
});

//pictures animation on section 4

let section4PicTimeline = gsap.timeline({ repeat: 2, scrollTrigger: "#four" });

section4PicTimeline.from("#keychains", {
  duration: 0.7,
  transformOrigin: "top",
  rotation: -20,
  ease: "ease-in",
});

section4PicTimeline.to("#keychains", {
  duration: 0.7,
  transformOrigin: "top",
  rotation: -20,
  ease: "ease-out",
});

let section4CaseTimeline = gsap.timeline({ repeat: 4, scrollTrigger: "#four" });

section4CaseTimeline.from("#case", {
  duration: 0.3,
  rotation: -1,
  ease: "ease-in-out",
});

section4CaseTimeline.to("#case", {
  duration: 0.3,
  rotation: -1,
});

//parallax on headers section 2

gsap.to("#faster", {
  x: "10vw",
  ease: "none",
  scrollTrigger: {
    scrub: true,
  },
});

gsap.to("#slower", {
  x: "-20vw",
  ease: "none",
  scrollTrigger: {
    scrub: true,
  },
});
