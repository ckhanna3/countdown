// 10 minutes from now
var time_in_minutes = 240;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


var mySound;
function startGame() {
    
    
	//mySound.play();
    run_clock('clockdiv',deadline);
}

function sound(src) {
	
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }    
}


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	mySound = new sound("horn.mp3");
	function update_clock(){
		var t = time_remaining(endtime);
		
	//clock.innerHTML = ''+t.minutes+': '+t.seconds;
		if(t.minutes>=1)
		{
			document.body.style.background = "green";
			clock.innerHTML = '0'+t.hours+': '+t.minutes+': '+t.seconds+'';
			
			
			
			
			
		}
		//else if(t.minutes <1)
		//{
			//document.body.style.background = "yellow";
			//clock.innerHTML = ''+t.minutes+': '+t.seconds+'';
			
			
			
			
			
		//}
		else{
			document.body.style.background = "blue";	
			clock.innerHTML = ''+t.minutes+': '+t.seconds+'';
		
			if(t.seconds <=10){				
				clock.innerHTML=""+t.minutes+': '+t.seconds+"";
				mySound.play();
				
			}
		}
		if(t.total<=0){ clearInterval(timeinterval); mySound.stop();}
	}
	update_clock(); // run function once at first to avoid delay
	var timeinterval = setInterval(update_clock,1000);
}

playAudio();