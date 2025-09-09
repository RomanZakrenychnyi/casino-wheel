'use strict';

const select = document.querySelector('.lang-select');
const button = select.querySelector('.lang-select__button');
const dropdown = select.querySelector('.lang-select__dropdown');

button.addEventListener('click', () => {
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
});

dropdown.addEventListener('click', (event) => {
    const selectedItem = event.target.closest('.lang-select__item');
    
    if (selectedItem) {
        const currentButtonFlagSrc = button.querySelector('.lang-select__flag').src;
        const currentButtonText = button.querySelector('.lang-select__text').textContent;
        const currentButtonFlagAlt = button.querySelector('.lang-select__flag').alt;

        const selectedItemFlagSrc = selectedItem.querySelector('.lang-select__flag').src;
        const selectedItemText = selectedItem.querySelector('.lang-select__text').textContent;
        const selectedItemFlagAlt = selectedItem.querySelector('.lang-select__flag').alt;

        button.querySelector('.lang-select__flag').src = selectedItemFlagSrc;
        button.querySelector('.lang-select__flag').alt = selectedItemFlagAlt;
        button.querySelector('.lang-select__text').textContent = selectedItemText;

        selectedItem.querySelector('.lang-select__flag').src = currentButtonFlagSrc;
        selectedItem.querySelector('.lang-select__flag').alt = currentButtonFlagAlt;
        selectedItem.querySelector('.lang-select__text').textContent = currentButtonText;

        dropdown.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (!select.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});