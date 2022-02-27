class Movie {
    constructor(data, idOfContainer, inDom=1) {
        this.id = data.id
        console.log(this.id)
        this.data = data
        this.inDom = inDom
        this.idOfContainer = idOfContainer
        this.addInDom()
    }

    getMovieById() {
        let that = this
        fetch('http://localhost:8000/api/v1/titles/' + this.id + '?format=json')
            .then(function (response) {
                return response.json()
            }).then(function (data) {

              // Create dialog
              let dialog = document.createElement("dialog")
              dialog.setAttribute("id", "modale")

              // Create span
              let span = document.createElement("span")
              span.setAttribute("id", "modale_quit")
              span.textContent = "X"

              // Create img
              let img = document.createElement("img")
              img.setAttribute("id", "modalePic")
              img.setAttribute("alt", "imageMovie")
              img.src = data.image_url

              // Create article
              let article = document.createElement("article")
              article.setAttribute("id", "movieDescription")

              // Create H1
              let h1 = document.createElement("h1")
              h1.setAttribute("id", "modale_title")
              h1.textContent = data.original_title

              // Create ul
              let ul = document.createElement("ul")
              ul.setAttribute("id", "liste_infos")

              // Create li
              let liGenre = document.createElement("li")
              liGenre.textContent = "Genres : " + data.genres
              ul.append(liGenre)

              let liDate = document.createElement("li")
              liDate.textContent = "Date : " + data.year
              ul.append(liDate)

              let liRated = document.createElement("li")
              liRated.textContent = "Rated : " + data.rated
              ul.append(liRated)

              let liImdb = document.createElement("li")
              liImdb.textContent = "Imdb score : " + data.imdb_score
              ul.append(liImdb)

              let liDirectors = document.createElement("li")
              liDirectors.textContent = "Directors : " + data.directors
              ul.append(liDirectors)

              let liActors = document.createElement("li")
              liActors.textContent = "Actors : " + data.actors
              ul.append(liActors)

              let liDuration = document.createElement("li")
              liDuration.textContent = "Duration : " + data.duration + " min"
              ul.append(liDuration)

              let liCountries = document.createElement("li")
              liCountries.textContent = "Countries : " + data.countries
              ul.append(liCountries)

              let p = document.createElement("p")
              p.setAttribute("id", "movieSynopsis")
              p.textContent = "Synopsis :" + data.long_description
              
              dialog.append(span)
              dialog.append(img)
              dialog.append(h1)
              dialog.append(ul)
              dialog.append(p)

              document.getElementById("body").append(dialog)
              dialog.showModal()

              let quit = document.getElementById("modale_quit")
              quit.addEventListener("click", function(){
                    modale.close()
                    dialog.remove()
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