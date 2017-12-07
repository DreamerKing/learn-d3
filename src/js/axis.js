require.config({
	paths: {
		d3: "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3) {
	var w = h = 600;
	var svg = d3.select('body')
		.append("svg")
		.attr({
			width: w,
			height: h
		});

	var xScale = d3.scale.linear()
		.domain([0,10])
		.range([0, 300]);

	var axis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");

	var gAxis = svg.append('g')
		.attr("transform", "translate(80,80)")
		.attr("class", "axis");

	// axis(gAxis);
	//gAxis.call(axis);	

	var axisl = d3.svg.axis()
		.scale(xScale)
		.orient("left")
		.ticks(5);

	var axisr = d3.svg.axis()
		.scale(xScale)
		.orient("right")
		.tickValues([3,4,5,6,7]);

	var axist = d3.svg.axis()
		.scale(xScale)
		.orient("top")
		.ticks(5)
		.tickSize(2,4)
		.tickFormat(d3.format("$0.2f"));

		//axisl(gAxis);
		axist(gAxis);
		console.log(axist.tickSize());
		console.log(axist.innerTickSize(), axist.outerTickSize())
		console.log(axist.ticks())
		console.log(axisr.tickValues());
		console.log(axisr.innerTickSize(), axisr.outerTickSize());

		var pow = d3.scale.pow()
			.exponent(2)
			.domain([0,1])
			.range([0,500]);

		var log = d3.scale.log()
			.domain([0.01,1])
			.range([0, 500]);

		var axisb = d3.svg.axis()
			.scale(log)
			.orient("bottom")
			.ticks(5);
		gAxis.call(axisb);	

	var ds = [[0.5,0.5],[0.7,0.8],[0.4,0.9],[0.11,0.32],[0.88,0.25],[0.5,0.2],[0.9,.62],[0.5,0.65]];
	var xs = d3.scale()
		.linear()
		.domain([0, 1.2 * d3.max(ds, function(d){
				return ds[0];
			})
		])
		.range([0, 500]);
	var ys = d3.scale()
		.linear()
		domain(0, 1.2 * d3.map(ds, function(d){
			return d1;
		}))
		.range([0, 500]);

	var padding = { top: 30, right: 30, right: 30, left: 30};
	
	var circle = svg.slelectAll(circle)
		.data(ds)
		.enter()
		.append("circle")
		.attr("fill", "black")
		.attr("cx", function(d) {
			return padding.left + xs[d[0]]
		})	
		.attr("cy", function(d) {
			return h - padding.bottom - ys(d[1]);
		}).attr("r",5);				

})