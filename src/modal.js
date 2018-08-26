(function() {

  document.addEventListener("DOMContentLoaded", init);

  var modal;
  var storage;
  var storageKey = "neverAskMeAgain";

  function init() {
    modal = document.getElementById("modal");
    storage = localStorage;

    var modalOpenBtn = document.getElementById("form-button");
    modalOpenBtn.onclick = openModal;

    var modalBtn = document.getElementById("modal-button");
    modalBtn.onclick = clickBtnModal;

    var closeBtn = document.getElementById("modal-close");
    closeBtn.onclick = closeModal;
  }

  function openModal(event) {
    event.preventDefault();
    var neverAskMe = storage.getItem(storageKey);
    if (neverAskMe) {
      mainAction();
    } else {
      modal.style.display = "block";
    }
  }

  function clickBtnModal() {
    var checkbox = document.getElementById("not-ask-me-again");
    if (checkbox.checked) {
      storage.setItem(storageKey, "true");
    }
    mainAction();
    closeModal();
  }

  function mainAction() {
    console.log("do main action");
  }

  function closeModal() {
    modal.style.display = "none";
  }

  // dismiss modal
  window.onclick = function(event) {
    if (modal == event.target) {
      closeModal();
    }
  };

})();

