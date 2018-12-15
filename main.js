var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images.png') {
		myImage.setAttribute('src','git-github.jpeg');
	}
	else{
		myImage.setAttribute('src','images.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Mozila is cool, '+myName;
}
if(!localStorage.getItem('name')){
	setUserName();
}
else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozila is cool, '+storedName;
}
myButton.onclick = function() {
	setUserName();
}
