// const teamModalBtn = document.querySelector('#modal-team');
// const teamModalWin = document.querySelector('#modal-team-win');

// FOOTER
const modalLink = document.getElementById('modal-link');

// MODAL
const modal = document.getElementById('modal-team');
const closeModal = document.getElementById('modal-team-close');

// Open the modal
modalLink.addEventListener('click', function (e) {
  e.preventDefault();
  modal.style.display = 'block';
  //   modal.classList.add('.is-hidden-modal');
});

// Close the modal
closeModal.addEventListener('click', function () {
  modal.style.display = 'none';
  modal.classList.remove('.is-hidden-modal');
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
