var count = 1;

function setBackground() {
	if(count % 3 == 1) {
		document.getElementById("bg-col").src = "img-register/bg1.jpg";
	} else if(count % 3 == 2) {
		document.getElementById("bg-col").src = "img-register/bg2.jpg";
	} else {
		document.getElementById("bg-col").src = "img-register/bg3.jpg";
	}
	count++;
}

setInterval(setBackground, 2000);

function showFont() {
	document.getElementById("third").src = "img-register/up.png";
}

function hideFont() {
	document.getElementById("third").src = "img-register/down.png";
}

function changePic(pic) {
	var pics = pic.src.split("/");
	if(pics[pics.length - 1] == "checkbox_check.png") {
		pic.src = "img-register/checkbox_normal.png";
	} else {
		pic.src = "img-register/checkbox_check.png";
	}
}

var count_box = 1;

function showBox() {
	if(count_box % 2 == 1) {
		document.getElementById("hide-box").className = "hide-box visible";
		document.getElementById("icon-select").src = "img-register/up.png";
	} else {
		document.getElementById("hide-box").className = "hide-box hidden";
		document.getElementById("icon-select").src = "img-register/down.png";
	}
	count_box++;
}

function checkName() {
	var nameInput = document.getElementById("name-input").value;
	if(nameInput == "") {
		document.getElementById("name-tip").className = "tips-name height-Name-end";
		document.getElementById("name-ok").className = "input-ok hide";
		//		document.getElementById("name-input").style.marginBottom = "10px";
	} else {
		document.getElementById("name-tip").className = "tips-name height-start";
		document.getElementById("name-ok").className = "input-ok show";
		//		document.getElementById("name-input").style.marginBottom = "40px";
	}
}

function hideName() {
	document.getElementById("name-tip").className = "tips-name height-start";
	document.getElementById("name-ok").className = "input-ok hide";
}

function bulrPw() {
	var pwInput = document.getElementById("pw-input").value;
	document.getElementById("pw-tip").className = "tips-pw hide";
	var exp = /([A-Za-z]+\d+)|([A-Za-z]+[_]+)|(\d+[_]+)|(\d+[A-Za-z]+[_]+)/;
	if(pwInput == "") {
		document.getElementById("tip-null").className = "tips-name show";
		document.getElementById("tip-space").className = "tips-name hide";
		document.getElementById("pw-ok").className = "input-ok hide";
		document.getElementById("tip-string").className = "tips-name hide";
		document.getElementById("tip-number").className = "tips-name hide";
	} else if(pwInput.indexOf(" ") >= 0) {
		document.getElementById("tip-null").className = "tips-name hide";
		document.getElementById("tip-space").className = "tips-name show";
		document.getElementById("pw-ok").className = "input-ok hide";
		document.getElementById("tip-string").className = "tips-name hide";
		document.getElementById("tip-number").className = "tips-name hide";
	} else if(pwInput.length < 8 || pwInput.length > 16) {
		document.getElementById("tip-null").className = "tips-name hide";
		document.getElementById("tip-space").className = "tips-name hide";
		document.getElementById("pw-ok").className = "input-ok hide";
		document.getElementById("tip-string").className = "tips-name show";
		document.getElementById("tip-number").className = "tips-name hide";
	} else if(!exp.test(pwInput)) {
		document.getElementById("tip-null").className = "tips-name hide";
		document.getElementById("tip-space").className = "tips-name hide";
		document.getElementById("pw-ok").className = "input-ok hide";
		document.getElementById("tip-string").className = "tips-name hide";
		document.getElementById("tip-number").className = "tips-name show";
	} else {
		document.getElementById("tip-null").className = "tips-name hide";
		document.getElementById("tip-space").className = "tips-name hide";
		document.getElementById("pw-ok").className = "input-ok show";
		document.getElementById("tip-string").className = "tips-name hide";
		document.getElementById("tip-number").className = "tips-name hide";
	}
}

function showPw() {
	document.getElementById("tip-null").className = "tips-name hide";
	document.getElementById("tip-space").className = "tips-name hide";
	document.getElementById("pw-ok").className = "input-ok hide";
	document.getElementById("tip-string").className = "tips-name hide";
	document.getElementById("tip-number").className = "tips-name hide";
	document.getElementById("pw-tip").className = "tips-pw show";
}

function checkPw() {
	var pwInput = document.getElementById("pw-input").value;
	if(pwInput.indexOf(" ") >= 0) {
		document.getElementById("space").style.background = "url(img-register/info.png) no-repeat";
	} else {
		document.getElementById("space").style.background = "url(img-register/green.png) no-repeat";
	}

	if(pwInput.length >= 8 && pwInput.length <= 16) {
		document.getElementById("string").style.background = "url(img-register/green.png) no-repeat";
	} else {
		document.getElementById("string").style.background = "url(img-register/info.png) no-repeat";
	}

	var exp = /([A-Za-z]+\d+)|([A-Za-z]+[_]+)|(\d+[_]+)|(\d+[A-Za-z]+[_]+)/;
	if(exp.test(pwInput)) {
		document.getElementById("number").style.background = "url(img-register/green.png) no-repeat";
	} else {
		document.getElementById("number").style.background = "url(img-register/info.png) no-repeat";
	}
}

function showSms() {
	document.getElementById("sms").className = "right-select show";
}

function hideSms() {
	document.getElementById("sms").className = "right-select hide";
}

function showSelect(){
	document.getElementById("right-select").className = "right-select hide";
	document.getElementById("select-ul").className = "select-ul show";
}

function hideSelect(){
	document.getElementById("right-select").className = "right-select show";
	document.getElementById("select-ul").className = "select-ul hide";
}
