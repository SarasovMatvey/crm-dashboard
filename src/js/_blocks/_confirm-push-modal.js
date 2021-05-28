(() => {
  const modal = $('.confirm-push-modal');
  const closeBtn = $('.confirm-push-modal__close-btn');
  const confirmBtn = $('.confirm-push-modal__confirm-btn');

  if (localStorage.getItem("notShowModal") === "true") {
    hideModal();
    return;
  }  

  modal.on('click', e => {
    if (e.target === e.currentTarget) {
      e.preventDefault();
      hideModal();
    }
  });
  closeBtn.on('click', e => {
    e.preventDefault();
    hideModal();
  });
  confirmBtn.on('click', e => {
    e.preventDefault();
    hideModal();
  });

  function hideModal() {
    modal.addClass('confirm-push-modal_hidden');
    localStorage.setItem('notShowModal', true);
  }
})();
