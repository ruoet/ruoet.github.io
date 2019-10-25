//var myHeading = document.querySelector('h1');
//myHeading.innerHTML = 'Hello world!';

/*
document.querySelector('html').onclick = function(){
	alert('Ouch! Stop poking me!');
}
*/

var myimage = document.querySelector('img');
myimage.onclick = function(){
	var mysrc = myimage.getAttribute('src');
	if(mysrc === 'images/5642.jpg_wh300.jpg'){
		myimage.setAttribute('src', 'images/8213080_000_thumb.jpg');
	}
	else{
		myimage.setAttribute('src', 'images/5642.jpg_wh300.jpg');
	}
}


var mybutton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName(){
	var myname = prompt('Please enter your name.');
	localStorage.setItem('name', myname);
	myHeading.innerHTML = 'html is interesting, ' + myname;
}

function resetName(){
	if(!localStorage.getItem('name')){
		setUserName();
	}else{
		var storedName = localStorage.getItem('name');
		myHeading.innerHTML = 'html is interesting, ' + storedName;
	}
}
resetName();

mybutton.onclick = function(){
	
	setUserName();
}

