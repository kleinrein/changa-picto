import Icon from './modules/icon'

let icons = []
let filteredIcons = []

const modal = document.querySelector(".modal")

Array.from(document.querySelectorAll(".icon")).forEach(el => {
    const icon = new Icon(el)
    icons.push(icon)

    el.addEventListener('click', function(event) {
        icon.showModal(modal)
        icons.forEach(icon => icon.el.querySelector("img").style.filter = 'blur(5px)')
    })
})

const overlay = document.querySelector(".overlay")
overlay.addEventListener("click", () => {
    overlay.style.display = 'none'
    modal.style.display = 'none'
    icons.forEach(icon => icon.el.querySelector("img").style.filter = 'blur(0)')
})

// Search
document.querySelector(".input-search").addEventListener('input', function(event) {
    const searchVal = event.target.value.toLowerCase()
    if (searchVal === '') icons.forEach(icon => icon.setDisplay('flex'))

    const filteredIcons = icons.filter(icon => icon.title.toLowerCase().includes(searchVal))
    filteredIcons.forEach(icon => icon.setDisplay('flex'))

    const otherIcons = icons.filter(x => filteredIcons.indexOf(x) == -1);
    otherIcons.forEach(icon => icon.setDisplay('none'))
})
