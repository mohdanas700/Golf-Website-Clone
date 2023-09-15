let crsr = document.querySelector("#cursor")
let blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x-250 + "px" // In this line only left corner of this cursor with original cursor so for making this cursor on conter of the orginal we minus the value with half of its width
    blur.style.top = dets.y-250 + "px"
})

let h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem) {
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function() {
        crsr.style.scale = 1;
        crrs.style.border = "0px solid #95C11E";
        crrs.style.background = "#95C11E";
    })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",   //this line indicates that on scrolling the body nav will be triggered
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        // scrub is use to make animatino on targeted elem smoothly
        scrub:1   
    }
}) 

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:'#main',    // this line indicates which element we want to animate
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in", {
    y:90,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger : '#about-us' ,// this line indicates which element we want to animate
        scroller:"body",     // this line indicates where our animation should take place (body or html tag)
        // markers: true,       // this line makes a marker appear at the top of each section when it's in view port
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1, //  By stagger elements will appears one by one
    scrollTrigger: {
        trigger : '.card' ,// this line indicates which element we want to animate
        scroller:"body",     // this line indicates where our animation should take place (body or html tag)
        // markers: true,       // this line makes a marker appear at the top of each section when it's in view port
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }

})