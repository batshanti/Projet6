class Movie {
    constructor(data, idOfContainer) {
        this.id = data.id
        this.data = data
        this.idOfContainer = idOfContainer
        this.addInDom()
    }

    getMovieById() {
        let that = this
        fetch('http://localhost:8000/api/v1/titles/' + this.id + '?format=json')
            .then(function (response) {
                return response.json()
            }).then(function (data) {
              document.getElementById("modalePic").src = data.image_url
              document.getElementById("modale_title").innerHTML = data.original_title
              document.getElementById("genres").innerHTML = "Genres : " + data.genres
              document.getElementById("date").innerHTML = "Date : " + data.year
              document.getElementById("rated").innerHTML = "Rated : " + data.rated
              document.getElementById("imdb_score").innerHTML = "Imdb score : " + data.imdb_score
              document.getElementById("directors").innerHTML = "Directors : " + data.directors
              document.getElementById("duration").innerHTML = "Duration : " + data.duration
              document.getElementById("duration").innerHTML = "Duration : " + data.duration + " min"
              document.getElementById("countries").innerHTML = "Countries : " + data.countries
              document.getElementById("synopsis").innerHTML = "Synopsis : " + data.long_description
              let modale = document.getElementById("modale")
              modale.showModal()
              let quit = document.getElementById("modale_quit")
              quit.addEventListener("click", function(){
                    modale.close()
              })

        })
        
    }

    addInDom() {
        // Create article
        let article = document.createElement("article")
        article.classList.add("movie")

        // Create h2
        let h2 = document.createElement("h2")
        h2.textContent = this.data.title

        // Create link
        let link = document.createElement("a")

        // Create img
        let img = document.createElement("img")
        img.src = this.data.image_url

        link.append(img)
        article.append(h2)
        article.append(link)

        let that = this
        article.addEventListener("click", function(){
            that.getMovieById()
        })
        document.getElementById(this.idOfContainer).append(article)
    }

}