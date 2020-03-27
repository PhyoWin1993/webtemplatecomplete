

(()=>{
	
	var prev = window.pageYOffset;
	window.onscroll = ()=>{
		var currentSc = window.pageYOffset;
		if(prev > currentSc){
			document.querySelector(".navbar").style.top="0";
		}else{
			document.querySelector(".navbar").style.top="-100px";
		}
		prev = currentSc ;
	}
		
	
})();

