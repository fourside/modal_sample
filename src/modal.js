(function() {

  document.addEventListener("DOMContentLoaded", init);

  var modal;
  function init() {
    var modalOpenBtn = document.getElementById("form-button");
    modalOpenBtn.onclick = openModal;
    modal = document.getElementById("modal");
    var closeBtn = document.getElementById("modal-close");
    closeBtn.onclick = closeModal;
  }

  function openModal(event) {
    event.preventDefault();
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

})();

