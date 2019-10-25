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
	if(mysrc === 'images/1.jpg'){
		myimage.setAttribute('src', 'images/2.jpg');
	}else if(mysrc === 'images/2.jpg'){
		myimage.setAttribute('src', 'images/3.jpg');
	}else{
		myimage.setAttribute('src', 'images/1.jpg');
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

/*
mybutton.onclick = function(){
	
	setUserName();
}
*/
