var accordion = document.querySelector('.footer__mobile-menu-list');
accordion.addEventListener('click', toggleAccordion)
const accordionHeaders = accordion.querySelectorAll('.footer__mobile-menu-header');

function toggleAccordion(e){
	const itemHeader = e.target.closest('.footer__mobile-menu-header');
	if (itemHeader){
		const shevron = itemHeader.querySelector('.footer__mobile-menu-chevron');
		itemHeader.parentNode.classList.toggle('--open');
		toggleOtherItems(itemHeader);
	}
}

function toggleOtherItems(accordionHeader){;
	Array.from(accordionHeaders).forEach(header => {
		if (header != accordionHeader){
			header.parentNode.classList.remove('--open');
		}
	});
}