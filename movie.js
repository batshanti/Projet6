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
                console.log("Voici les données complètes du film cliqué : ")
                console.log(data)
                // on ajoute la modale ici
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

        // Create p

        link.append(img)
        article.append(h2)
        article.append(link)

        let that = this
        article.addEventListener("click", function(){
            alert("Film cliqué : " + that.id)
            that.getMovieById()
        })
        document.getElementById(this.idOfContainer).append(article)
    }

}