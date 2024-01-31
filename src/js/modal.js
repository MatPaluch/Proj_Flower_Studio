(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    form: document.querySelector("[data-modal-form]"),
  };

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  const refs2 = {
    openModal2Btn: document.querySelector("[data-modal-open-2]"),
    closeModal2Btn: document.querySelector("[data-modal-close-2]"),
    modal: document.querySelector("[data-modal-2]"),
  };

  function thankOrder(e) {
    e.preventDefault();
    refs.modal.classList.toggle("is-hidden");
    refs2.modal.classList.toggle("is-hidden");
  }

  function closeModalThanks() {
    refs2.modal.classList.add("is-hidden");
  }
  refs.form.addEventListener("submit", (e) => thankOrder(e));
  refs2.closeModal2Btn.addEventListener("click", closeModalThanks);
})();