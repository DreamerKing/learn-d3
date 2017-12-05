require.config({
	paths: {
		"d3": "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3){
	 // console.log(d3.scale);
	/*var linear = d3.scale.linear()
			      .domain([0,20.304, 101])
	              .nice()
			      .range([0, 100, 1021])
	              .clamp(true);

	console.log(linear.domain(), linear.range());
	console.log(linear(2), linear(60), linear(120));
	console.log(linear.invert(50), linear.invert(600), linear.invert(1100));

	var ticks = linear.ticks(10);
	var tickFormat = linear.tickFormat(10, "%");
	console.log(ticks);
	console.log(tickFormat(ticks[2]));*/


	/*var linear = d3.scale.linear()
					.domain([0,503])
					.range([0, 100]);
	// linear.clamp(true);
	 linear.nice();
	 // console.log(linear.rangeRound(13.33));
	console.log(linear(600), linear.clamp());				
	console.log(linear(250),linear(99));
	console.log(linear.invert(60),linear(linear.invert(60)));
	console.log(linear.domain(),linear.range());
	console.log();
	var ticks = linear.ticks(10);
	var tickFormat = linear.tickFormat(10,"$");
	console.log(ticks, tickFormat(ticks[1]));
	var linear2 = d3.scale.linear()
					.domain([0,20, 100])
					.range([0,10, 20]);
	console.log(linear2(2), linear2(60));	
	*/	
	/*var powerScale = d3.scale.pow()
					   .exponent(4)
					   .domain([0,10])
					   .range([0, 200]);
	console.log(powerScale(2), powerScale(5), powerScale(-2));
	console.log(powerScale.invert(3),powerScale.invert(200));
	console.log(powerScale.exponent());*/

	var logScale = d3.scale.log().base(2)
					 .domain([0.1, 10])
					 .range([-10, 20]);
	console.log(logScale(1), logScale(8),logScale(10));
	console.log(logScale.invert(-4),logScale.invert(12));
	console.log(logScale.base(),logScale.domain(),logScale.range());				  	

})