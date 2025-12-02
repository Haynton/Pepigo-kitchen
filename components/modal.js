const openBtnModal = document.getElementById('modalBtn')
const modalContent = document.getElementById('modalContent')
const closeModal = document.querySelector('.modal-close-btn')

openBtnModal.addEventListener('click', () => {
    modalContent.classList.add("show")
});
closeModal.addEventListener('click', () => {
    modalContent.classList.remove('show')
});
modalContent.addEventListener('click', (e) => {
    if (e.target === modalContent) {
        modalContent.classList.remove('show')
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modalContent.classList.remove('show')
    }
});