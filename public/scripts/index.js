const buttonSearch = document.querySelector('#home main a')
const modal = document.querySelector('#modal')
const close = document.querySelector('#modal .content .header a')

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})