$(document).ready(function() {
	$(".col-item").mouseenter(function() {
		$(this).children(".hide-col").css("display", "block");
		$($(this).siblings()).children(".hide-col").css("display", "none");
	});

	$(".header-right-r").mouseover(function() {
		$(".header-block").css("display", "block");
	});

	$(".header-block").mouseout(function() {
		$(".header-block").css("display", "none");
	});

	var interval = setInterval(rotate, 2000);

	//	for(var i = 0;i < 5; i++){
	//		$(".rt").eq(i).mouseenter(function(){
	//			clearInterval(interval);
	//			$(".rotate-list").css("left", "-" + (640 * i) + "px");
	//		});
	//	}

	$(".rt").eq(0).mouseenter(function() {
		clearInterval(interval);
		$(".rotate-list").css("left", "-" + (604 * 0) + "px");
		$(".rt").removeClass("rn");
		$(".rt").eq(0).addClass("rn");
	});

	$(".rt").eq(1).mouseenter(function() {
		clearInterval(interval);
		$(".rotate-list").css("left", "-" + (604 * 1) + "px");
		$(".rt").removeClass("rn");
		$(".rt").eq(1).addClass("rn");
	});

	$(".rt").eq(2).mouseenter(function() {
		clearInterval(interval);
		$(".rotate-list").css("left", "-" + (604 * 2) + "px");
		$(".rt").removeClass("rn");
		$(".rt").eq(2).addClass("rn");
	});

	$(".rt").eq(3).mouseenter(function() {
		clearInterval(interval);
		$(".rotate-list").css("left", "-" + (604 * 3) + "px");
		$(".rt").removeClass("rn");
		$(".rt").eq(3).addClass("rn");
	});

	$(".rt").eq(4).mouseenter(function() {
		clearInterval(interval);
		$(".rotate-list").css("left", "-" + (604 * 4) + "px");
		$(".rt").removeClass("rn");
		$(".rt").eq(4).addClass("rn");
	});

	$(".tab-news").mouseover(function() {
		changeTab(this);
	});

});

function showBg() {
	document.getElementById("bg").style.display = "block";
}

function hideBg() {
	document.getElementById("bg").style.display = "none";
}

var count = 0;

function getLeft() {
	if(count == 0) {
		left = 604;
	} else {
		left = left + 604;
	}
	count++;
	if(count % 5 == 0) {
		left = 0;
	}
	return left;
}

function rotate() {
	switch(count % 5) {
		case 0:
			$(".rt").eq(0).removeClass("rn");
			$(".rt").eq(1).addClass("rn");
			break;
		case 1:
			$(".rt").eq(1).removeClass("rn");
			$(".rt").eq(2).addClass("rn");
			break;
		case 2:
			$(".rt").eq(2).removeClass("rn");
			$(".rt").eq(3).addClass("rn");
			break;
		case 3:
			$(".rt").eq(3).removeClass("rn");
			$(".rt").eq(4).addClass("rn");
			break;
		case 4:
			$(".rt").eq(4).removeClass("rn");
			$(".rt").eq(0).addClass("rn");
			break;
		default:
	}
	var value = getLeft();
	$(".rotate-list").css("left", "-" + value + "px");
}

function changeTab(tab) {
	var tabs = document.getElementsByClassName("tab-news");
	var cons = document.getElementsByClassName("news-con");
	for(var i = 0; i < tabs.length; i++) {
		if(tabs[i] == tab) {
			$(tabs[i]).addClass("tab");
			$(cons[i]).addClass("con");
		} else {
			$(tabs[i]).removeClass("tab");
			$(cons[i]).removeClass("con");
		}
	}
}

function changeSkin(tab) {
	var tabs = document.getElementsByClassName("tab-skin");
	var heros = document.getElementsByClassName("hero-skin");
	for(var i = 0; i < tabs.length; i++) {
		if(tabs[i] == tab) {
			tabs[i].className = "tab-skin showBorder";
			heros[i].className = "hero-skin show";
		} else {
			tabs[i].className = "tab-skin";
			heros[i].className = "hero-skin hide";
		}
	}

}

function changeStrategy(tab) {
	var tabs = document.getElementsByClassName("tab-strategy");
	var strategy = document.getElementsByClassName("main-strategy");
	for(var i = 0; i < tabs.length; i++) {
		if(tabs[i] == tab) {
			tabs[i].className = "tab-strategy showBorder";
			strategy[i].className = "main-strategy show";
		} else {
			tabs[i].className = "tab-strategy";
			strategy[i].className = "main-strategy hide";
		}
	}

}

function changeRace(tab) {
	var tabs = document.getElementsByClassName("tab-race");
	var strategy = document.getElementsByClassName("race-content");
	for(var i = 0; i < tabs.length; i++) {
		if(tabs[i] == tab) {
			tabs[i].className = "tab-race showBorder";
			strategy[i].className = "race-content show";
		} else {
			tabs[i].className = "tab-race";
			strategy[i].className = "race-content hide";
		}
	}

}

function checkUser() {
	var name = document.getElementById("username").value;
	var exp = /\d+/;
	if(exp.test(name) && name.length > 5) {
		document.getElementById("tip-user").className = "tip-user hidden";
	} else {
		document.getElementById("tip-user").className = "tip-user visible";
	}
}