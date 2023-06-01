let lista = document.getElementById('container-test').children

function selectRating (id) {
    let ratingButton = document.getElementById(id)
    for(element of lista) {
        if(element.classList.contains('selected')) {
            let ratingButtonTemporary = document.getElementById(element.id)
            ratingButtonTemporary.classList.remove('selected')
        }
    }
    ratingButton.classList.toggle('selected')
}