function popup(popupWindowName) {
  document.querySelector('.popup').classList.remove('popup--closed');
  document.querySelector('.' + popupWindowName).classList.remove('visually-hidden');
}
