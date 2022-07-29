jQuery(document).ready(function (){
  $(".menu li").mouseover(function(){
    $(this).find(".sub_menu").stop().slideDown(500);
  }).mouseout(function(){
    $(this).find(".sub_menu").stop().slideUp(500);
  })


$(".img_slide a:gt(0)").hide(); // img_slide a:gt(0).hide(); img_slide -> 숨김
// .img_slide a:gt(0) : gt(index)는 index 값보다 더 큰 값을 가진 요소들을 모두 선택함
// gt(index)는 0번째부터 계수하여 index 값보다 큰 값을 가져옴
// 여기에서는 처음 값이 gt(0)이므로 0보다 큰 요소들인 1,2,3,번째 요소들을 모두 선택함
setInterval(function () {
  //  setInterval(function() { },3000) 일정시간마다 반복적으로 동작을 실행, 3000은 3000ms(3초)로 3초마다 실행
  $(".img_slide a:first-child") // "firest-child"는 가상 클래스 선택자로서 부모 요소가 가지고 있는 자식중에 첫번째를 선택하고 첫번째 요소를 실행
    .fadeOut(1000) // .fadeOut(1000) 가져온 첫번째 요소를 fadeOut실행 1000ms = 1초
    .next("a") // next("a").fadeIn(1000) : 다음요소를 선택하여 페이드인 실행
    .fadeIn(1000)
    .end() // 이전 선택요소를 선택
    .appendTo(".img_slide"); // 선택한 요소를 .img_slide 선택자의 요소의 자식 요소로 추가
}, 3000)
})

document.querySelectorAll(".notice a")[0].addEventListener("click", function(){
  document.querySelectorAll(".modal")[0].style.display = "block"
})
document.querySelectorAll(".modal_text button")[0].addEventListener("click", function(){
  document.querySelectorAll(".modal")[0].style.display = "none"
})

document.querySelectorAll('.modal').addEventListener('click', function (e) {
	if (e.target == e.currentTarget) {
		document.querySelectorAll('.modal').style.display = 'none';
	}
});