class Movie {
	constructor(url, titre, description, urlImage) {
		this.url = url;
		this.titre = titre;
		this.description = description;
		this.urlImage = urlImage;
	}

	static async getMovieById(id){
		let response = await fetch('http://localhost:8000/api/v1/titles/'+id+'?format=json');
		let data = await response.json()
		let url = data.url;
		let titre = data.title;
		let description = data.description;
		let urlImage = data.image_url;
		return new Movie(url, titre, description, urlImage);
	}

}