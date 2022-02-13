fetch("http://localhost:8000/api/v1/titles?sort_by=-imdb_score").then(function(res){
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
            elementUrlPic.style.backgroundImage = 'url(' + img + ')'
        })    
})        



fetch("http://localhost:8000/api/v1/titles/?genre=Sci-Fi").then(function(res){
    return res.json()
}).then(function(data){
    console.log("A")
    data.results.forEach(function(oneMovie) {
        new Movie(oneMovie,"bestFilmSection1")
    })
})

fetch("http://localhost:8000/api/v1/titles?genre=thriller").then(function(res){
    return res.json()
}).then(function(data){
    console.log("B")
    data.results.forEach(function(oneMovie) {
        new Movie(oneMovie,"bestFilmSection2")
    })
})

fetch("http://localhost:8000/api/v1/titles/?genre=Action").then(function(res){
    return res.json()
}).then(function(data){
    console.log("C")
    data.results.forEach(function(oneMovie) {
        new Movie(oneMovie,"bestFilmSection3")
    })
})

