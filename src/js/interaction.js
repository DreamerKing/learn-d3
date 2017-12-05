require.config({
	paths: {
		"d3": "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3) {
	// 颜色比例尺
	var color20 = d3.scale.category20();
	console.log(color20(1));

	var r = [50,45,40,35,30,25,20,15,10];
	// 量子比例尺 将连续的定义域的更据离散的值域做平均分段映射,分段值只与定义域起始值有关。
	var quantize = d3.scale.quantize()
					.domain([50,0])
					.range(["#888","#777","#666","#555","#444","#333"]);
	var svg = d3.select("body").append("svg")
				.attr({width: 400, height: 400});
	svg.selectAll("circle")
		.data(r)
		.enter()
		.append("circle")
		.attr("cx", function(d, i) {
			return 50 + i * 30;
		})
		.attr("cy", 50)
		.attr("r", function(d){
			return d;
		})
		.attr("fill", function(d) {
			return quantize(d);
		});			

	console.log(quantize(1));
	console.log(quantize(50));
	console.log(quantize(32));
	// 分位比例尺 将连续的定义域进行分段，每段对应到离散的值域上，分段值与定义域中的分段值有关。
	var quantile = d3.scale.quantile()
					.domain([0,2,4,6,10])
					.range([0, 50, 100]);
	console.log(quantile(2));
	console.log(quantile(4));
	console.log(quantile(3));
	console.log(quantile(5));
	console.log(quantile(6));
	// 查询分位比例尺分段值
	console.log(quantile.quantiles()); 	

	// 阈值比例尺 通过设定阈值将连续的定义域映射到离散的值域上。

	var threshold = d3.scale.threshold()
					.domain([10,20,30])
					.range(["red", "blue", "green", "black"]);

	console.log(threshold(5));
	console.log(threshold(25));								
	console.log(threshold(50));	
	// 通过值域求定义域
	console.log(threshold.invertExtent("blue"));
	console.log(threshold.invertExtent("red"));							



})