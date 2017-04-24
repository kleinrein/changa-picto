import * as dynamics from 'dynamics.js'
import anime from 'animejs'

export default class Icon {
    constructor(el, title) {
        this.el = el
        this.title = this.el.querySelector(".icon-title").innerHTML.replace("_", " ").replace(".svg", "").replace("changa ", "")
        this.path = this.el.querySelector("img").getAttribute("src")
    }

    showModal(modal) {
        const overlay = document.querySelector(".overlay")
        modal.style.display = 'block'

        anime({
            targets: overlay,
            opacity: 1,
            duration: 500
        })

        anime({
          targets: modal,
          scale: 1.2,
          duration: 600
        })

        document.getElementById("modal-icon-title").innerHTML = this.title
        document.getElementById("modal-icon-download-svg").setAttribute("href", this.path)
        document.getElementById("modal-icon-img").setAttribute("src", this.path)


        overlay.style.display = 'block'
    }

    setDisplay(cssVal) {
        this.el.style.display = cssVal
    }
}
