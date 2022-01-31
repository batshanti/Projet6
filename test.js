async function fettt() {
	console.log("aaaaaa");
	let response = await fetch("http://localhost:8000/api/v1/titles?sort_by=-imdb_score");
	console.log(response.text());
}

fettt();


/*let response = await fetch("http://localhost:8000/api/v1/titles");
let data = await response.text();
console.log(data);
*/

