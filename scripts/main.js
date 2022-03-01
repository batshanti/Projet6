fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score").then(function(res){
    return res.json()
}).then(function(data){
    let movieId = data.results[0].id
    fetch('http://localhost:8000/api/v1/titles/' + movieId + '?format=json')
        .then(function(response) {
            return response.json()
        }).then(function(data) {
            let bestMovie = new Movie(data, OnebestFilmSection, 0)

            let img = document.createElement("img")
            img.setAttribute("id", "play-BestFilm")
            img.setAttribute("alt", "picture")
            img.setAttribute("src", "icons/play2.png")

            img.addEventListener("click", function(){
                bestMovie.displayModal()
            })

            let h2 = document.createElement("h2")
            h2.setAttribute("id", "titreBestFilm")
            h2.textContent = data.original_title

            let p = document.createElement("p")
            p.setAttribute("id", "description")
            p.textContent = data.long_description

            let img2 = document.createElement("img")
            img2.setAttribute("id", "aside-picture")
            img2.setAttribute("alt", "picture")
            img2.setAttribute("src", data.image_url)

            let section = document.getElementById("OnebestFilmSection")    
            
            section.append(img2)
            section.append(h2)
            section.append(img)
            section.append(p)

        })
})

function getAsync(url, idName) {
    return new Promise((resolve) => {
        getMovies1(url, idName)
        while (document.getElementById(idName).childNodes.length < 5) {}
    })
}

function getMovies1 (url, idName) {
   fetch(url).then(function(res){
        return res.json()
    }).then(function(data){
        let tab = []
        data.results.forEach(function(oneMovie) {
            new Movie(oneMovie, idName)
    })

})

}

function getMovies2 (url, idName) {
    fetch(url+"&page=2").then(function(res){
        return res.json()
    }).then(function(data){
        let tab = []
        data.results.splice(1, 2).forEach(function(oneMovie) {
            new Movie(oneMovie, idName)
    })

})

}

async function getMovies(url, idName) {

    await getAsync(url, idName)
    console.log("zzz")
    getMovies2(url, idName)

}

getMovies("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score", "bestFilmImdb")
getMovies("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score", "bestFilmSection1")
getMovies("http://localhost:8000/api/v1/titles/?genre=thriller&sort_by=-imdb_score", "bestFilmSection2")
getMovies("http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score", "bestFilmSection3")


