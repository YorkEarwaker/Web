/* hello world 4 js */

const greeting = document.getElementById("greeting");

function fadeUp() {
	greeting.style.opacity = "1";
}

function fadeDown() {
	greeting.style.opacity = "0";
}

function fadeShift() {
	if (greeting.style.opacity === "1") {
		fadeDown();
	} else {
		fadeUp();
	}
}

// Four second fade shift 
setInterval(fadeShift, 4000);