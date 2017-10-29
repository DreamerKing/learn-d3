require.config({
	paths: {
		"d3": "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3){
	d3.select('body')
		.selectAll('p')
		.text("Hello D3")
		.style("color", "blue")
		.style("font-size", "4em");

	d3.select('body')
		.selectAll("#circle")
		.append('svg')
		.attr("width", 500)
		.attr("height", 500)
		.append("circle")
		.attr("cx",250)
		.attr("cy", 250)
		.attr("r", 200)	
		.attr("fill", "red");
});