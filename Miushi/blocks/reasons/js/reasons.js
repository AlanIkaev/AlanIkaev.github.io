var sc = screen.width;
var btn = document.querySelector('.reasons__button');
var btnr = document.querySelector('.reasons__button-reset');
var elems = document.getElementsByClassName('reasons__item');

function hidden(){

if ((sc >= 320) && (sc < 409)){

	for (var i = 7; i > 0; i--){
		elems[i].style.display = "none";
	}
}

}

btn.onclick = function(){

	for (var i = 7; i > 0; i--){
		elems[i].style.display = "block";
	}

	btn.style.display = "none";
	btnr.style.display = "block";
};

btnr.onclick = function(){
	hidden();

	btn.style.display = "block";
	btnr.style.display = "none";
}

hidden();