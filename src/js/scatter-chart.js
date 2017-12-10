require.config({
	paths: {
		d3: "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3) {
	var xAxisLength = yAxisLength = 200;
	var ds = [
		[0.5,0.2],[0.1,0.6],[0.8,0.2],
		[0.9,0.5],[0.7,0.3],[0.8,0.4],
		[0.8,0.3],[0.4,0.1],[0.6,0.1]
	];
	var svg = d3.select("body")
		.append("svg")
		.attr({
			widht: 300,
			height: 300
		});
	var gAxis = svg.append('g')
		.attr("transform","translate(40,40)");	
	var xScale = d3.scale.linear()
		.domain([0, 1.2 * d3.max(ds, function(d){
			return d[0];
		})])
		.range([0, xAxisLength]);
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");
	xAxis(gAxis);	
	var yScale = d3.scale.linear()
		.domain([0, 10 * d3.max(ds, function(d){
			return d[1];
		})])
		.range([0, yAxisLength]);
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");
	yAxis(gAxis);
		
	var padding = {
		top: 30,
		right: 30,
		left: 30,
		bottom: 30
	};

	var circle = svg.selectAll("circle")
		.data(ds)
		.enter()
		.append("circle")
		.attr("fill", "balck")
		.attr("cx", function(d) {
			return padding.left + xScale(d[0]);
		})
		.attr("cy", function(d) {
			return yAxisLength - padding.bottom - yScale(d[1]);
		})
		.attr("r",5); 


})