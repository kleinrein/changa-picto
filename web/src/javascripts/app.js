import Icon from './modules/icon'
import Velocity from 'velocity-animate'
import anime from 'animejs'

document.addEventListener("DOMContentLoaded",function(){
    Velocity(document.querySelector(".changa-picto-logo-big"), {
      opacity: 0,
      scale: 0.9
    }, {
      duration: 600,
      complete: function() {
          document.querySelector(".changa-picto-logo-big").remove();
          document.querySelector("#app").style.display = 'block';
      }
    })
});

let icons = []
let filteredIcons = []
const modal = document.querySelector(".modal")

Array.from(document.querySelectorAll(".icon")).forEach(el => {
    const icon = new Icon(el)
    icons.push(icon)

    el.addEventListener('click', function(event) {
        icon.showModal(modal)
    })
})

// Close modal
const overlay = document.querySelector(".overlay")
overlay.addEventListener("click", () => {
    document.querySelector(".icons").style.filter = 'blur(0)'
    document.querySelector(".input-search").style.filter = 'blur(0)'

    anime({
        targets: overlay,
        opacity: 0,
        duration: 300,
        complete: function(anim) {
            overlay.style.display = 'none'
        }
    })

    anime({
        targets: modal,
        opacity: 0,
        duration: 200,
        translateY: -50,
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
