/*
  [아코디언메뉴]
  accordionMenu.js
*/


function init(){
  var btns = document.querySelectorAll(".footer_btn");

    btns.forEach(function(btn){
      btn.addEventListener("click",function(){
        btns.forEach(function(re){
            if(!(btn === re)) {
              re.parentElement.classList.remove("active");
            }
        });
        this.parentElement.classList.toggle("active");
    });
  });


}//end:init();

window.onload = init;  //화면이 로드된 후에 실행함.
