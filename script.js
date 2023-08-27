var toggle = document.querySelector("#toggle")
var options = document.querySelector(".hidden")
var options1 = document.querySelector(".list")
var check = 1;
toggle.addEventListener("click",function(){
    if(check == 1){   
        gsap.to(options,{       
            x :"-100%",
        })
        gsap.to(options1,{
            x :"-100%",    
        })
        check = 0
        console.log(check)
        options1.addEventListener("click",function(){
            gsap.to(options,{
                    x :910,
                })
                gsap.to(options1,{
                    x :910,
                })
            check =1
            console.log(check)
        })
    }   
})
gsap.to("#nav",{
    backgroundColor : "black",
    height:"100px",
    duration:0.2,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:2,
    }
})
gsap.to(".main",{
    backgroundColor:"#000",
   // opacity:0.8,
    blur:"3px",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        marker:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2,
    }
})
