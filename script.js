let submitButton = document.getElementById('submit-button')
let ratingList = document.getElementById('container-test').children
let ratingSelected = document.getElementById('rating-selected')
let ratingState = document.getElementById('state-1')
let stateThank = document.getElementById('state-2')
let ratingButton

function selectRating (id) {
    ratingButton = document.getElementById(id)
    for(element of ratingList) {
        if(element.classList.contains('selected')) {
            let ratingButtonAux = document.getElementById(element.id)
            ratingButtonAux.classList.remove('selected')
        }
    }
    ratingButton.classList.toggle('selected')
}

submitButton.addEventListener('click', () => {
    if (ratingButton == undefined) {
        alert('Escolha uma nota para avaliação!')
    } else {
        ratingState.style.display = 'none'
        stateThank.style.display = 'flex'
        ratingSelected.innerHTML = ratingButton.id
    }
})