import Icon from './modules/icon'
import * as dynamics from 'dynamics.js'
import anime from 'animejs'

let icons = []
let filteredIcons = []
const modal = document.querySelector(".modal")

Array.from(document.querySelectorAll(".icon")).forEach(el => {
    const icon = new Icon(el)
    icons.push(icon)

    el.addEventListener('click', function(event) {
        icon.showModal(modal)

        icons.forEach(icon => icon.el.querySelector("img").style.filter = 'blur(5px)')
        document.querySelector(".input-search").style.filter = 'blur(5px)'
    })
})

// Close modal
const overlay = document.querySelector(".overlay")
overlay.addEventListener("click", () => {
    icons.forEach(icon => icon.el.querySelector("img").style.filter = 'blur(0)')
    document.querySelector(".input-search").style.filter = 'blur(0)'

    anime({
        targets: overlay,
        opacity: 0,
        duration: 200,
        complete: function(anim) {
            overlay.style.display = 'none'
        }
    })

    anime({
      targets: modal,
      scale: 0,
      duration: 300,
      complete: function(anim) {
          modal.style.display = 'none'
      }
    })
})

// Search
document.querySelector(".input-search").addEventListener('input', function(event) {
    const searchVal = event.target.value.toLowerCase()
    if (searchVal === '')
        icons.forEach(icon => icon.setDisplay('flex'))

    const filteredIcons = icons.filter(icon => icon.title.toLowerCase().includes(searchVal))
    filteredIcons.forEach(icon => icon.setDisplay('flex'))

    const otherIcons = icons.filter(x => filteredIcons.indexOf(x) == -1);
    otherIcons.forEach(icon => icon.setDisplay('none'))
})
