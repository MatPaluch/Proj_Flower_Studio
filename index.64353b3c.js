(()=>{const e={openModal3Btn:document.querySelector("[data-modal-open-3]"),openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),form:document.querySelector("[data-modal-form]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModal3Btn.addEventListener("click",o),e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);const d={openModal2Btn:document.querySelector("[data-modal-open-2]"),closeModal2Btn:document.querySelector("[data-modal-close-2]"),modal:document.querySelector("[data-modal-2]")};e.form.addEventListener("submit",(o=>function(o){o.preventDefault(),e.modal.classList.toggle("is-hidden"),d.modal.classList.toggle("is-hidden")}(o))),d.closeModal2Btn.addEventListener("click",(function(){d.modal.classList.add("is-hidden")}))})();
//# sourceMappingURL=index.64353b3c.js.map
