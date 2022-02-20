let count = 0

function translateRight (idName) {
    
    if (count < 2) {
        let transValue = (count + 1) * 100
        let selector = "#"+idName+" .movie"
        let trans = "translate(-"+transValue+"%)"
        document.querySelectorAll(selector).forEach(element => element.style.transform = (trans))
        count = count + 1
    }
}

function translateLeft (idName) {

    if (count == 1) {
        let transValue = 0
        let selector = "#"+idName+" .movie"
        let trans = "translate("+transValue+"%)"
        document.querySelectorAll(selector).forEach(element => element.style.transform = (trans))
        count = count - 1
    }
    if (count == 2) {
        let transValue = 100
        let selector = "#"+idName+" .movie"
        let trans = "translate(-"+transValue+"%)"
        document.querySelectorAll(selector).forEach(element => element.style.transform = (trans))
        count = count - 1
    }
}

