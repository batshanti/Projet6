let count = {

    "bestFilmImdb": 0,
    "bestFilmSection1": 0,
    "bestFilmSection2": 0,
    "bestFilmSection3": 0

}

function translateRight (idName) {
    
    if (count[idName] < 2) {
        let transValue = (count[idName] + 1) * 100
        let selector = "#"+idName+" .movie"
        let trans = "translate(-"+transValue+"%)"
        document.querySelectorAll(selector).forEach(element => element.style.transform = (trans))
        count[idName] = count[idName] + 1
    }
}

function translateLeft (idName) {

    if (count[idName] == 1) {
        let transValue = 0
        let selector = "#"+idName+" .movie"
        let trans = "translate("+transValue+"%)"
        document.querySelectorAll(selector).forEach(element => element.style.transform = (trans))
        count[idName] = count[idName] - 1
    }
    if (count[idName] == 2) {
        let transValue = 100
        let selector = "#"+idName+" .movie"
        let trans = "translate(-"+transValue+"%)"
        document.querySelectorAll(selector).forEach(element => element.style.transform = (trans))
        count[idName] = count[idName] - 1
    }
}

