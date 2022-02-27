fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score").then(function(res){
    return res.json()
}).then(function(data){
    let movieId = data.results[0].id
    fetch('http://localhost:8000/api/v1/titles/' + movieId + '?format=json')
        .then(function(response) {
            return response.json()
        }).then(function(data) {
            console.log(data)
            let img = data.image_url
            document.getElementById('titreBestFilm').innerHTML = data.title
            document.getElementById('description').innerHTML = data.long_description
            let elementUrlPic = document.getElementById('aside-picture')
            elementUrlPic.src = img
            /*elementUrlPic.style.backgroundImage = 'url(' + img + ')'*/
        })    
})        

function getAsync(url, idName) {
    return new Promise((resolve) => {
        getMovies1(url, idName)
        while (document.getElementById(idName).childNodes.length < 5) {}
        console.log(document.getElementById(idName).childNodes)    
        resolve()
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

getMovies("http://localhost:8000/api/v1/titles/?-imdb_score", "bestFilmImdb")
getMovies("http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score", "bestFilmSection1")
getMovies("http://localhost:8000/api/v1/titles/?genre=thriller&sort_by=-imdb_score", "bestFilmSection2")
getMovies("http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score", "bestFilmSection3")


