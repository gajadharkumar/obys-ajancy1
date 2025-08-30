function loadingAnimation(){
    

var t1=gsap.timeline()
t1.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,

})
t1.from("#line1-part1, line h2",{
    opacity:0,
    onStart:function(){
        
var h5timer =document.querySelector("#line1-part1 h5")
var grow =0;
setInterval(function(){
if(grow<100){
    h5timer.innerHTML=grow++
    
}else{
   
    h5timer.innerHTML=grow
}
},35)
    }
})

t1.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:4
})
t1.from("#page1",{
    y:1200,
    opacity:0
})
t1.to("#loader",{
    disply:"none"
})
t1.from("nav",{
    opacity:0
})
t1.from("#hero1,#hero2,#hero3,#hero4",{
    y: 120,
    stagger:0.2
})
}



function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
        
    });
    
    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();

cursorAnimation();
