"use strict"

gsap.registerPlugin(ScrollTrigger);

//phones popping
let phoneTimeline = gsap.timeline({repeatDelay: .5, scrollTrigger: "#two"});

phoneTimeline.from("#phoneside", {
    opacity: 0,
    x: 300,
    duration: 2
});

phoneTimeline.from("#phonebottom", {
    opacity: 0,
    y: 300,
    duration: 2
});

//pop sockets
gsap.to("#socket2", {
    duration: 10,
    rotation: 360,
    repeat: -1,
    ease: "linear"
});

gsap.to("#socket3", {
    duration: 2,
    rotation: 10,
    repeat: -1,
    yoyo: true,
    ease: "linear"
});

//text, section 3
let h2Timeline = gsap.timeline({repeatDelay: .5, scrollTrigger: "#three"});

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
    opacity: 0
});

// text, section 5
let section5Timeline = gsap.timeline({repeatDelay: .5, scrollTrigger: "#five"});

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
    opacity: 0
});
