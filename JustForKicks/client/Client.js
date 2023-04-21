const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '683a22922bmshf5a626e69c1fcc0p10b894jsn82aaf1320a66',
		'X-RapidAPI-Host': 'the-sneaker-database.p.rapidapi.com'
	}
};



export function getShoeBrand(query, success) {
    fetch(`https://the-sneaker-database.p.rapidapi.com/search?limit=19&query=${query}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
    .then(success)
	.catch(err => console.error(err));
}