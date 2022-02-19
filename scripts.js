
const timerContainer=document.querySelector(".js-clock"),
timer=timerContainer.querySelector("h3");

function counter(){
	var dday = new Date("Feb 20,2022,06:00:00").getTime(); //디데이
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(dday + (KR_TIME_DIFF));
    console.log(kr_curr);
	setInterval(function(){
		var now = new Date(); //현재 날짜 가져오기
           console.log(now);
		var distance = kr_curr - now;
           console.log(distance);
		var d = Math.floor(distance / (1000 * 60 * 60 * 24));
		var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var s = Math.floor((distance % (1000 * 60)) / 1000);
		if(s < 10){
			s = '0'+s;
		}
		timer.innerText =`${d}d ${h<10?`0${h}`:h}h ${m<10?`0${m}`:m}m ${s<10? `0${s}`:s}s초 남앗습니다.`;
	}, 1000);
}
counter();