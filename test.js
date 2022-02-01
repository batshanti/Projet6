async function getSomething() {
	let response = await fetch("http://localhost:8000/api/v1/titles?sort_by=-imdb_score");
	let data = await response.json();
	let bestFilm = data.results[0];
	let img = bestFilm['image_url'];
	let myElement = document.getElementById('test');
	/*console.log(bestFilm);*/
	console.log(img);
	myElement.style.backgroundImage = 'url(' + img + ')';
}

getSomething();


/*let response = await fetch("http://localhost:8000/api/v1/titles");
let data = await response.text();
console.log(data);
*/

