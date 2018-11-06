var sc = screen.width;

var aboutBtn = document.querySelector('.about__button');
var aboutBtnR = document.querySelector('.about__button-reset');
var aboutElems = document.getElementsByClassName('about__text');

var reasonsBtn = document.querySelector('.reasons__button');
var reasonsBtnR = document.querySelector('.reasons__button-reset');
var reasonsElems = document.getElementsByClassName('reasons__item');

function hiddenAboutElems(){
	if ((sc >= 320) && (sc < 768)){

		aboutBtn.style.display = "block";
		aboutBtnR.style.display = "none";

		for (var i = 3; i < 6; i++){
			aboutElems[i].style.display = "none";
		}
	}
}

function showAboutElems(){
	for (var i = 3; i < 6; i++){
		aboutElems[i].style.display = "block";
	}

	aboutBtn.style.display = "none";
	aboutBtnR.style.display = "block";	
};

function hiddenReasonsElems(){
	if ((sc >= 320) && (sc < 409)){

		reasonsBtn.style.display = "block";
		reasonsBtnR.style.display = "none";

		for (var i = 1; i < 8; i++){
			reasonsElems[i].style.display = "none";
		}
	}
};

function showReasonsElems(){
	for (var i = 1; i < 8; i++){
		reasonsElems[i].style.display = "block";
	}

	reasonsBtn.style.display = "none";
	reasonsBtnR.style.display = "block";
};

aboutBtn.addEventListener("click", showAboutElems);
aboutBtnR.addEventListener("click", hiddenAboutElems);

reasonsBtn.addEventListener("click", showReasonsElems);
reasonsBtnR.addEventListener("click", hiddenReasonsElems);

document.addEventListener("DOMContentLoaded", function(){
	hiddenAboutElems();
	hiddenReasonsElems();

	var digits = document.getElements
});

document.onclick = function(e){
	if (!(e.target.hasAttribute('data-plus') || e.target.hasAttribute('data-minus'))) return;

	if (e.target.classList.contains('plus')){
		e.target.previousElementSibling.value++;
		return;
	}else if(e.target.classList.contains('minus')){
		if (e.target.nextElementSibling.value == 0){
			return;
		}else{
			e.target.nextElementSibling.value--;
			return;
		}
	}
}


