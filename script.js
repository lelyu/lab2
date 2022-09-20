// TODO: load the dataset 

let attractions;
fetch('attractions.json')
	.then(response => response.json())
	.then(data => {
		attractions = data;
		// sorting the dataset
		attractions.sort((a, b) => b.Visitors - a.Visitors);
		all_attractions = attractions.slice(0, 5);
		renderBarChart(all_attractions);
	});


function filterData(category) {
	if (category === 'all') {
		all_attractions = attractions.slice(0, 5);
		renderBarChart(all_attractions);
		return all_attractions;
	}
	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
	let selected_category = attractions.filter(Category => Category.Category === category);
	selected_category = selected_category.slice(0, 5);
	renderBarChart(selected_category);
	return selected_category;
}

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category


// adding event listener
select = document.querySelector('select');
select.addEventListener('change', e => {
	//e.target.value returns a string of category
	filterData(e.target.value);
});