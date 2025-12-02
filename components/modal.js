const openBtnModal = document.querySelectorAll('[data-modal-open]') // Use data-modal-open="" not id=""
const closeBtnModal = document.querySelectorAll('[data-modal-close]')

openBtnModal.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.modalOpen
        const modal = document.querySelector(`[data-modal="${target}"]`)
        if (modal) {
            modal.classList.add('show')
            document.body.style.overflow = 'hidden' // Disable scroll
        } else {
            console.error(`Modal avec data-modal="$[target]" introuvable`)
        }
        
    });
});

closeBtnModal.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.modalClose
        const modal = document.querySelector(`[data-modal="${target}"]`)
        modal.classList.remove('show') // Enable scroll
        document.body.style.overflow = '' // Enable scroll
    });
});

document.querySelectorAll('[data-modal]').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show')
            document.body.style.overflow = '' // Enable scroll
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('[data-modal].show').forEach(modal => {
            modal.classList.remove('show')
            document.body.style.overflow = '' // Enable scroll
        })  
    }
});