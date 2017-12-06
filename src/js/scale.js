require.config({
	paths: {
		d3: "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3) {
	var ordinal = d3.scale.ordinal()
		.domain([1,2,3,4,5,6])
		.range([10,20,30,40,50,60,70,80]);
	console.log(ordinal(4));
	console.log(ordinal(6));
	console.log(ordinal(7));
	console.log(ordinal(10));
	var ordinal1 = d3.scale.ordinal()
		.domain([1,2,3,5,9])
		.rangePoints([0,100]);
	console.log(ordinal1.range());
	console.log(ordinal1(3));
	console.log(ordinal1(6));
	ordinal1.rangePoints([0,100],5);
	console.log(ordinal1.range());
	console.log(ordinal1(1))
	console.log(ordinal1(9))
	ordinal1.rangeRoundPoints([0,100],5);
	console.log(ordinal1.range());

	var bands = d3.scale.ordinal()
		.domain([1,2,3,4,5])
		.rangeBands([0,100]);
	console.log(bands.range());
	console.log(bands.rangeBand());	
	console.log(bands(1));

	bands.rangeBands([0,100],0.5, 0.2);
	console.log(bands.range());
	console.log(bands.rangeBand());
	bands.rangeRoundBands([0,100],0.5,0.2);
	console.log(bands.range());
	console.log(bands.rangeBand());

	var c20c = d3.scale.category20c();
	console.log(c20c());
	console.log(c20c(1)); 
	console.log(c20c("asds")); 

	var w = h = 600;
	var ds = d3.range(5);
	var c10 = d3.scale.category10();

	var svg = d3.select("body")
		.append("svg")
		.attr({"width": w, "height": h});

	var circle = svg.selectAll("circle")
		.data(ds)
		.enter()
		.append("circle")
		.attr("cx", function(d, i) {
			return 30 + i * 80;
		})
		.attr({
			"cy": 100,
			"r": 30
		})
		.fill("fill", function(d,i) {
			return c10(i);
		});

})