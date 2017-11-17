function changeHero(tab){
	var heros = document.getElementsByClassName("tab-hero");
	var weekFree1 = document.getElementsByClassName("bg-weekfree1");
	var weekFree2 = document.getElementsByClassName("bg-weekfree2");
	for(var i = 0;i < heros.length; i++){
		if(heros[i] == tab){
			weekFree1[i].className = "bg-weekfree1 show";
			weekFree2[i].className = "bg-weekfree2 hide";
		}else{
			weekFree1[i].className = "bg-weekfree1 hide";
			weekFree2[i].className = "bg-weekfree2 show";
		}
	}
}
