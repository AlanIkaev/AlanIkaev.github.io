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


