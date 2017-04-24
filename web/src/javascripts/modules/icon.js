import * as dynamics from 'dynamics.js'

export default class Icon {
    constructor(el, title) {
        this.el = el
        this.title = this.el.querySelector(".icon-title").innerHTML.replace("_", " ").replace(".svg", "")
        this.path = this.el.querySelector("img").getAttribute("src")
    }

    showModal(modal) {
        console.log('show modal')
        modal.style.display = 'block'

        dynamics.animate(modal, {
            scale: 1.2
        }, {
            type: dynamics.spring,
            frequency: 200,
            friction: 550,
            duration: 3500
        })

        document.getElementById("modal-icon-title").innerHTML = this.title
        document.getElementById("modal-icon-download-svg").setAttribute("href", this.path)
        document.getElementById("modal-icon-img").setAttribute("src", this.path)

        const overlay = document.querySelector(".overlay")
        overlay.style.display = 'block'
        overlay.addEventListener("click", () => {
            overlay.style.display = 'none'
            modal.style.display = 'none'
        })
    }

    setDisplay(cssVal) {
        this.el.style.display = cssVal
    }
}
