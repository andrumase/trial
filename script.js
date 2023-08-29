var toggle = document.querySelector("#toggle")
var options = document.querySelector(".hidden")
var options1 = document.querySelector(".list")
var b = document.querySelector("body")
var check = 1;
toggle.addEventListener("click",function(){
    if(check == 1){   
        gsap.to(options,{       
            x :"-101%",
            y: "5px",
        })
        gsap.to(options1,{
            x :"-100%",    
        })
        check = 0;
        
    }   
})
options1.addEventListener("click",function(){
    if(check == 0){   
        gsap.to(options,{       
            x :"101%",
            y: "5px",
        })
        gsap.to(options1,{
            x :"100%",    
        })
        check =1;
    }   
})

// gsap.to("#nav",{
//     backgroundColor : "black",
//     height:"110px",
//     duration:0.2,
//     scrollTrigger:{
//         trigger:"#nav",
//         scroller:"body",
//         // markers:true,
//         start:"top -10%",
//         end:"top -11%",
//         scrub:2,
//     }
// })
gsap.to(".move-left",{
    x: "-180vw",
    duration:0.3,
    scrollTrigger:{
        trigger:".move-left",
        scroller:"body",
        // markers:true,
        start:"-130%",
        end:"-50%",
        scrub:2,
    }
})
gsap.to(".move-right",{
    x: "180vw",
    duration:0.3,
    scrollTrigger:{
        trigger:".move-left",
        scroller:"body",
        // markers:true,
        start:"-130%",
        end:"-50%",
        scrub:2,
    }
})
gsap.to(".main",{
    backgroundColor:"black",
   // opacity:0.8,
    blur:"3px",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // marker:true,
        
        start:"center",
        end:"bottem",
        scrub:2,
    }
})
