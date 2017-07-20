'use strict'

/*
let b=1, r=1;

function createUL(){
	let ulCheck=document.getElementsByTagName("ul");

	if( ulCheck.length == 1) {
		let ul = document.createElement("ul");
		document.querySelectorAll("ul.menu")[0].insertAdjacentElement("afterEnd",ul);
		document.querySelectorAll("ul")[1].classList.add("new");
		let hide = document.querySelectorAll(".menu li");
		for(let i = 1; i<hide.length; i++){
			hide[i].classList.remove("hide");
		}
	}
}


function createLI() {
	let liCheck = document.querySelectorAll("ul.new li")
	if(liCheck.length % 2 == 0) {
		let li=document.createElement("li");
		li.innerText="Привет";
		li.setAttribute("id",b);
		b++;
		document.querySelectorAll("ul.new")[0].insertAdjacentElement("beforeEnd", li).classList.add("blue");

	}

	else {
		let li=document.createElement("li");
		li.innerText="Пока";
		li.setAttribute("id",r);
		r++;
		document.querySelectorAll("ul.new")[0].insertAdjacentElement("beforeEnd", li).classList.add("red");
	}

	let list=document.querySelectorAll("ul.new li");

	for( let i = 0; i<list.length; i++) {
		document.querySelectorAll("ul.new li")[i].onclick= droped;
	}

}


function drop(){

 	document.querySelectorAll("ul.new")[0].remove();

 	let hide = document.querySelectorAll(".menu li");
 	for(let i = 1; i<hide.length; i++){
			hide[i].classList.add("hide");
		}
}


function droped() {
	if(this.innerText == "Привет") {
		this.innerText="Привет был удален, он был "+this.getAttribute("id");
	}
	else if(this.innerText == "Пока") {
		this.innerText="Пока был удален, он был "+this.getAttribute("id");
	}
}



document.querySelectorAll("li.dropUl")[0].onclick = drop;
document.querySelectorAll("li.createUl")[0].onclick = createUL;
document.querySelectorAll("li.createLi")[0].onclick = createLI;
*/


var ss=SpreadsheetsApp.openByURL("https://docs.google.com/spreadsheets/d/1lVG78xndPm22KboYwtJNQskmr-haLjlj-yF6jnTr-UM/pubhtml");

console.log(ss);
