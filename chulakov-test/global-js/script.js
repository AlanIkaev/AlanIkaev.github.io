// Мобильное меню

const burger = document.querySelector(".burger-menu");
const menu = document.querySelector(".sidebar__nav");

burger.onclick = function(){
	menu.classList.toggle("sidebar__nav--active");
}

// Валидатор формы

function validate(){

	var form = document.forms.card__form.elements;
	var cardNumber = form.card__number;
	var cardCvv = form.cvv;
	var cardUser = form.card__user;
	var cardNumberValid = 0;

	var cardNumberRegExp = /^[0-9]{4}$/;
	var cardUserRegExp = /[A-Za-z]{4,}/;
	var cardCvvRegExp = /^[0-9]{3}$/;

	function Error(container, errorMessage){
      var message = document.createElement('span');
      message.className = "error-message";
      message.innerHTML = errorMessage;
      container.appendChild(message);
	}

	function resetError(container){
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild); //Если пользователь в итоге введет правильные данные, то сообщение об ошибке пропадет после проверки.
      }
	}

	resetError(cardUser.parentNode);
	if(cardUserRegExp.test(cardUser.value) == true){
		cardUser.style.border = "1px solid green";
	}

	else{
		cardUser.style.border = "1px solid red";
		Error(cardUser.parentNode, "Минимальная длина 4 символа, латинские буквы.");
	}

	resetError(cardCvv.parentNode);
	if(cardCvvRegExp.test(cardCvv.value) == true){
		cardCvv.style.border = "1px solid green";
	}

	else{
		cardCvv.style.border = "1px solid red";

		Error(cardCvv.parentNode, "3 цифры");
	}

  for (var i = 0; i <= cardNumber.length; i++) {

    if (cardNumberRegExp.test(cardNumber[i]).value == true) {
      cardNumber[i].style.border="1px solid green";
    } 

    else {
      cardNumber[i].style.border="1px solid red";
    }
  }
  
}