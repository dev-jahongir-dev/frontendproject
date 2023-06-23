$(function(){

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
    });
    
    let btn = document.getElementsByClassName("title")
    let text = document.getElementsByClassName("desc")


    for(let i=0; i<btn.length; i++){
       
        btn[i].onclick = function(){
            console.log("salom")
                for(let a=0; a<btn.length; a++){
                    if(a==i){

                    }else{
                        text[a].classList.remove("show")
                    }
                }
            text[i].classList.add("show")
            // text[i].css('overflow','visible')

       }
    }
  
    
    var slider = new Swiper(".mySlider", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      freeMode: true,
      navigation: {
        nextEl: ".nx",
        prevEl: ".pr",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
    
    
    
    
    let value = document.querySelectorAll(".number");
    let interval = 4000
    
    value.forEach((value) => {
    
      let startValue = 0;
      let endValue = value.getAttribute("data-val");
      let duration = interval/endValue;
    
      let result = setInterval(function(){
          startValue += 1
          value.textContent = startValue
    
          if(startValue == endValue){
              clearInterval(result)
          }
      }, duration)
    })
    
    })