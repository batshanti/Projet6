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



async function getMovies(url, idName) {

    let moviePage1 = await fetch(url)
    let resPage1 = await moviePage1.json()
    resPage1.results.forEach(function(oneMovie) {
        new Movie(oneMovie, idName)

    })

    let moviePage2 = await fetch(url+"&page=2")
    let resPage2 = await moviePage2.json()
    resPage2.results.splice(1, 2).forEach(function(oneMovie) {
        new Movie(oneMovie, idName)
    })
}


getMovies("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score", "bestFilmImdb")
getMovies("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score", "bestFilmSection1")
getMovies("http://localhost:8000/api/v1/titles/?genre=thriller&sort_by=-imdb_score", "bestFilmSection2")
getMovies("http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score", "bestFilmSection3")


