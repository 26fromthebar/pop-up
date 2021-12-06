const openPopupBtn = document.querySelector('.open-pop-up-btn');
const closePopupBtn = document.querySelector('.close-pop-up-btn');
const popup = document.querySelector('.pop-up');
const overlay = document.querySelector('.overlay');

openPopupBtn.addEventListener('click', () => {
  openPopup();
});

closePopupBtn.addEventListener('click', () => {
  closePopup();
});

function openPopup() {
  overlay.classList.add('active');
  popup.classList.add('active');
}

function closePopup() {
  overlay.classList.remove('active');
  popup.classList.remove('active');
}
