function showQQ(){
	document.getElementById("dark").className = "bg-pop-dark hide";
	document.getElementById("lighter").className = "bg-pop-lighter show";
	document.getElementById("qq-login").className = "qq-login show";
}

function closeBg(){
	document.getElementById("dark").className = "bg-pop-dark hide";
	document.getElementById("lighter").className = "bg-pop-lighter hide";
	document.getElementById("pop").className = "pop hide";
}

function showPop(){
	document.getElementById("pop").className = "pop show";
	document.getElementById("dark").className = "bg-pop-dark show";
	document.getElementById("lighter").className = "bg-pop-lighter hide";
	document.getElementById("bg").style.display = "none";
}

function showQuickLoginPW(){
	document.getElementById("qq-login").className = "qq-login hide";
	document.getElementById("qq-login-pw").className = "qq-login-pw show";
}

function closeQuickLogin(){
	document.getElementById("qq-login").className = "qq-login hide";
	document.getElementById("dark").className = "bg-pop-dark show";
	document.getElementById("lighter").className = "bg-pop-lighter hide";
}

function closeQuickLoginPW(){
	document.getElementById("qq-login-pw").className = "qq-login-pw hide";
	document.getElementById("dark").className = "bg-pop-dark show";
	document.getElementById("lighter").className = "bg-pop-lighter hide";
}
