/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-undef */
function onOpenModal(modal) {
	return (event) => {
		document.querySelector(modal)._activeElement = event.currentTarget;
		document.querySelector(modal)._show = true;
	};
}
function onCloseModal(modal) {
	return () => {
		document.querySelector(modal)._activeElement = null;
		document.querySelector(modal)._show = false;
	};
}

setTimeout(() => {
	document.querySelector('#modal-1')._on = {
		onClose: onCloseModal('#modal-1'),
	};
	// document.querySelector('#modal-3')._on = {
	//   onClose: true,
	// };

	document.querySelector('#modal-open-1')._on = {
		onClick: onOpenModal('#modal-1'),
	};
	document.querySelector('#modal-open-2')._on = {
		onClick: onOpenModal('#modal-2'),
	};
	// document.querySelector('#modal-open-3')._on = {
	//   onClick: onOpenModal('#modal-3'),
	// };

	document.querySelector('#modal-1-cancel')._on = {
		onClick: onCloseModal('#modal-1'),
	};
	document.querySelector('#modal-2-cancel')._on = {
		onClick: onCloseModal('#modal-2'),
	};
}, 5000);

const modal = document.querySelector('[_id="overviewModal"]');
const modalOpenButton = document.querySelector('[_id="tooltip_button"]');

function openModal() {
	modal._activeElement = modalOpenButton;
	modal._show = true;
}
function closeModal() {
	modal._show = false;
}

const openModalButton = document.querySelector('.openmodalbutton');
if (openModalButton) openModalButton._on = { onClick: openModal };
