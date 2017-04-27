import * as dynamics from 'dynamics.js'
import anime from 'animejs'
import StackBlur from "stackblur-canvas"

export default class Icon {
    constructor(el, title) {
        this.el = el
        this.title = this.el.querySelector(".icon-title").innerHTML.replace("_", " ").replace(".svg", "").replace("changa ", "")
        this.path = this.el.querySelector("img").getAttribute("src")
    }

    showModal(modal) {
        const overlay = document.querySelector(".overlay")
        modal.style.display = 'block'
        overlay.style.display = 'block'

        document.getElementById("modal-icon-title").innerHTML = this.title
        document.getElementById("modal-icon-download-svg").setAttribute("href", this.path)
        document.getElementById("modal-icon-img").setAttribute("src", this.path)

        anime({
            targets: overlay,
            opacity: 1,
            duration: 500
        })

        anime({
            targets: modal,
            translateY: 0,
            duration: 600,
            opacity: 1
        })


    }

    setDisplay(cssVal) {
        this.el.style.display = cssVal
    }
}
