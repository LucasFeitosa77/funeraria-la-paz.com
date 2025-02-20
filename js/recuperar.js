const span = document.querySelector("#span")
const modal = document.querySelector("#dialog")
const buttonClose = document.querySelector("#closebutton")

span.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}
