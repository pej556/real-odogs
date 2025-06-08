





//메인뷰 스와이퍼
  const swiper = new Swiper('.main_view', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,
    autoplay: {
      delay: 3000,
    },
   
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    //스크롤바
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });




  //인기 스와이퍼
  const swiper2 = new Swiper('.best_box', {
    loop: false,  // 반복X
    slidesPerView: 4,  //한 화면에 보일 갯수수
    spaceBetween: 13,   //슬라이드 간격
    slidesPerGroup: 1,  //한한 개씩 슬라이드
    watchOverflow: true, //슬라이드가 끝나면 스와이퍼X
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    //mousewheel: true, //마우스 휠 스크롤
    //centeredSlides: true, // 슬라이드를를 중앙 정렬(=슬라이드 중앙부터 시작함)

    breakpoints: {
      1025: {  // 1025px 이상일 때
        slidesPerView: 4,  // 1025px 이상에서는 슬라이드 4개 표시
      },
      1024: {  // 1024px 이하일 때
        slidesPerView: 3,  // 1024px 이하에서는 슬라이드 3개 표시
      },

      
      
    }
});




//리뷰 스와이퍼
const swiper3 = new Swiper('.review_box', {
  // Optional parameters
  //direction: 'vertical',
  loop: true,
  slidesPerView: 'auto',  //한 화면에 보일 갯수수
  spaceBetween: 10,   //슬라이드 간격
  slidesPerGroup: 1,  //한 개씩 슬라이드
  watchOverflow: true, //슬라이드가 끝나면 스와이퍼X
  
 

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1025: {  // 1025px 이상일 때
      slidesPerView: 4, 
    },
    1024: {  // 1024px 이하일 때
      slidesPerView: 3,  
    }
    
  }
});




//새상품 스와이퍼
const swiper4 = new Swiper('.new_box_swiper', {
  // Optional parameters
  //direction: 'vertical',
  loop: false,
  
  autoplay: {
    delay: 6000,
    
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});





//위로가기
const header = document.querySelector(".main_view")
const goTop = document.querySelector(".goTop")






function scrollEvent(event){
  const STANDARD = 30;

  
  if(window.scrollY > STANDARD){
    header.classList.add("hide")
    goTop.classList.add("show")
  }else {
    header.classList.remove("hide")
    goTop.classList.remove("show")
  }
  
}

function moveTop(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
}

winodw.addEventListener("scroll", scrollEvent)
goTop.addEventListener("click", moveTop)






//모바일 전용 메뉴바
document.querySelector('.open_btn').addEventListener('click', () => {
  document.querySelector('.menu_box').classList.add('active');
  document.querySelector('.menu_black').classList.add('active');
});

document.querySelector('.close_btn').addEventListener('click', () => {
  document.querySelector('.menu_box').classList.remove('active');
  document.querySelector('.menu_black').classList.remove('active');
});






//다크모드
function useDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

window.onload = function() { 	
	useDarkMode();

}



//모바일검색 





  
  