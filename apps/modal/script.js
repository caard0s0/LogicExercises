'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelectorAll('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');

const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for(let i = 0; i < openModalBtn.length; i++) {
    console.log(openModalBtn[i]);
    openModalBtn[i].addEventListener('click', openModal);
};

closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});