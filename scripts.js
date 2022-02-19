
const timerContainer=document.querySelector(".js-clock"),
timer=timerContainer.querySelector("h3");

function counter(){
	var dday = new Date("Feb 19,2022,09:15:00").getTime(); //디데이
    const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
    const kr_curr = new Date(dday + (KR_TIME_DIFF));
    console.log(kr_curr);
	var interval = setInterval(function(){
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
		if(d==0&&h<24){
			if(h<12){
			if(h<6){
				if(h<3){
					if(h<1){
						document.body.style.backgroundColor = 'darkred';
					}
					else
					document.body.style.backgroundColor = 'red';
				}
				else
				document.body.style.backgroundColor = 'Salmon';
			}
			else
			document.body.style.backgroundColor = 'Lightpink';
			}
			else
			document.body.style.backgroundColor = 'lightyellow';

		}
		if(distance/1000 < 0){
			timer.innerText =`지노는 재수학언애 듨어갓습니다`;
			document.body.style.backgroundColor = 'lightgreen';
			clearInterval(interval); 
		}
		else{timer.innerText =`${d}d ${h<10?`0${h}`:h}h ${m<10?`0${m}`:m}m ${s<10? `0${s}`:s}s초 남앗습니다.`;}
	}, 1000);
}
counter();;
