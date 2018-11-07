var aboutBtn = document.querySelector('.about__button');
var aboutBtnR = document.querySelector('.about__button-reset');
var aboutPost = document.querySelector('.about__post');

function showAboutPost(){
	if ((sc >= 320) && (sc < 768)){
		aboutPost.classList.add("open");
		aboutBtn.style.display = "none";
		aboutBtnR.style.display = "block";
	}
}

function hiddenAboutPost(){
	if ((sc >= 320) && (sc < 768)){
		aboutPost.classList.remove("open");
		aboutBtn.style.display = "block";
		aboutBtnR.style.display = "none";
	}
}

aboutBtn.addEventListener("click", showAboutPost);
aboutBtnR.addEventListener("click", hiddenAboutPost);