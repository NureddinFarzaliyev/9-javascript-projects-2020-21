const openButton = document.querySelector('.open-button');
const closeButton = document.querySelector('.close-button');
const menuContainer = document.querySelector('.menu-container');
const popupMenu = document.querySelector('.popup-menu');

openButton.addEventListener('click', () => {
    openButtonF(popupMenu, menuContainer);
});

closeButton.addEventListener('click', () => {
    closeButtonF(popupMenu, menuContainer);
})

function openButtonF(menu, back) {
    menu.style.display = "block";
    back.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
}

function closeButtonF(menu, back) {
    menu.style.display = "none";
    back.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}