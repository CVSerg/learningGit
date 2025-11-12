const modalBtn = document.querySelector('.modal__button')
const modal = document.querySelector('.modal')
const closing = document.querySelector('.modal__close')

modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex'
})

modal.addEventListener('click', (event)=> {
    const modalContent = event.target.closest('.modal__inner')
    const isClose = event.target.closest('.modal__close')
if (!modalContent || isClose){
    modal.style.display = ''
}
})