const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const modal = document.querySelector("#dialog")
const buttonClose = document.querySelector("#closebutton")

button1.onclick = function () {
    modal.showModal()
}

button2.onclick = function () {
    modal.showModal()
}

button3.onclick = function () {
    modal.showModal()
}

button4.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}
