var sc = screen.width;
var reasonsBtn = document.querySelector('.reasons__button');
var reasonsBtnR = document.querySelector('.reasons__button-reset');
var reasonsContainer = document.querySelector('.reasons__items-wrapper');

function showReasonsElems(){
	if ((sc >= 320) && (sc < 409)){
		reasonsContainer.classList.add("open");
		reasonsBtn.style.display = "none";
		reasonsBtnR.style.display = "block";
	}
}

function hiddenReasonsElems(){
	if ((sc >= 320) && (sc < 409)){
		reasonsContainer.classList.remove("open");
		reasonsBtn.style.display = "block";
		reasonsBtnR.style.display = "none";
	}
}

reasonsBtn.addEventListener("click", showReasonsElems);
reasonsBtnR.addEventListener("click", hiddenReasonsElems);
