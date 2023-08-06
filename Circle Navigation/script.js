var active = 3;

var panelBtns = document.querySelectorAll(".panel-btn");
var sec = document.querySelectorAll(".sec");

gsap.from(panelBtns,{
    y: 1000,
    ease: Expo.easeInOut,
    duration:2
})

gsap.to(panelBtns[active - 1], {
    opacity: .5,
})

gsap.to(sec[active-1], {
    opacity: 1,
})


panelBtns.forEach(function(val, index){
    val.addEventListener("click", function(){
        gsap.to("#circle",{
            rotate: (2-index)*10,
            ease: Expo.easeInOut,
            duration:1,
        })
        grayOut();
        gsap.to(this,{
            opacity: 0.5,
        })
        gsap.to(sec[index],{
            opacity:1,
        })
    })
})

function grayOut(){
    gsap.to(panelBtns,{
        opacity: 0.08,
    })
    gsap.to(sec,{
        opacity:0.4,
    })
}

gsap.to("#circle",{
    rotate: 0,
    ease: Expo.easeInOut,
    duration:2,
})