//VARIABLES
var a = document.getElementById("DKLogo");
var b = document.getElementById("DK");
var c = document.getElementById("KenLogo");
var d = document.getElementById("Ken");
var e = document.getElementById("SMLogo");
var f = document.getElementById("SM");
var g = document.getElementById("PMLogo");
var h = document.getElementById("PM");
var i = document.getElementById("DKtheme");
var j = document.getElementById("SMtheme");
var k = document.getElementById("SFtheme");
var L = document.getElementById("PCtheme");

// call this function when "Vegeta" is clicked!
function changePicture(){
	b.src = "Images/Clyde.png";
	d.src = "Images/Blinky.png";
	h.src = "Images/Pacman-moving.gif";
	f.src = "Images/Inky.png";
	
}
function changeGif(){
	b.src = "Images/DKong.gif";
	h.src = "Images/DkSm.png";
	d.src = "Images/images.png";
	f.src = "Images/images.png";
}
function swapImage(){
	b.src = "Images/SFcharacter.png";
	d.src = "Images/KEN.gif";
	f.src = "Images/Zangief.png";
	h.src = "Images/StreetF.png";	
}

function swapGif(){
	b.src = "Images/DriverBowser.png";
	d.src = "Images/DriverPeach.png";
	h.src = "Images/DriverToad.png";
	f.src = "Images/DriverSM.png";
}

function themePlayer(){
	j.pause();
	j.currentTime = 0;
	k.pause();
	k.currentTime = 0;
	L.pause();
	L.currentTime = 0;
	i.play();
}
function musicPlayer(){
	i.pause();
	i.currentTime = 0;
	k.pause();
	k.currentTime = 0;
	L.pause();
	L.currentTime = 0;
	j.play();
}
function audioPlayer(){
	k.play();
	i.pause();
	i.currentTime = 0;
	j.pause();
	j.currentTime = 0;
	L.pause();
	L.currentTime = 0;	
}

function soundPlayer(){
	L.play();
	k.pause();
	k.currentTime = 0;
	i.pause();
	i.currentTime = 0;
	j.pause();
	j.currentTime = 0;
}

function resetAll(){
	location.reload();
}