let attractions;
fetch('attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;
        console.log(attractions);
		filterData();
	});

function filterData(category) {
	let sorted_data = attractions;
	if (category && (category != 'all')){
		sorted_data = sorted_data.filter(function(x,i) {return x.Category == category;})
	}
	const sliced_data = sorted_data.sort((a,b) => b.Visitors - a.Visitors);
	let top_five = sliced_data.slice(0,5);
	renderBarChart(top_five);
}

document.querySelector('.user-control').addEventListener('change', (d) => {
	console.log('selected:', d.target.value);
	filterData(d.target.value);
});