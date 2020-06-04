const urlUFs = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")

    fetch(urlUFs).then((res) => {
        return res.json()
    }).then((states) => {
        for (const state of states) {
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value
    stateInput.value = event.target.options[event.target.selectedIndex].text

    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    fetch(`${urlUFs}/${ufValue}/municipios`).then((res) => {
        return res.json()
    }).then((cities) => {
        for (const city of cities) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


const itemsToCollect = document.querySelectorAll(".items-grid li")
const itemsInput = document.querySelector("input[name=items]")

for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex(function (item) {
        return item === itemId
    })

    if (alreadySelected >= 0){
        const filteredItems = selectedItems.filter(function (item) {
            return item != itemId
        })
        selectedItems = filteredItems
    }else {
        selectedItems.push(itemId)
    }

    itemsInput.value = selectedItems
}