var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")


document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-250 +"px" // In this line only left corner of this cursor with original cursor so for making this cursor on conter of the orginal we minus the value with half of its width
    blur.style.top = dets.y-250 +"px"
})





gsap.to("#nav",{
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",   //this line indicates that on scrolling the body nav will be triggered
        markers:true,
        start:"top -50%",
        end:"top -49%",
        // scrub is use to make animatino on targeted elem smoothly
        scrub:1   
    }
}) 

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:'#main',    // this line indicates which element we want to animate
        scroller:"body",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})