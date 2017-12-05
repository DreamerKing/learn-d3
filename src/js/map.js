requirejs.config({
	paths: {
		"d3": "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3) {
	var width = document.clientWidth;
	var height = document.clientHeight;
	// 地图投影
	var projection = d3.geo.mercator()
						.center([107,31])
						.scale(600)
						.translate([width/2, height /2]);
	// 地图路径生成器					
	var path = d3.geo.path()
					.projection(projection);
	// 颜色比例尺					
	var color = d3.scale.category20();
	// 请求数据
	d3.json('word.geojson',function(error,root){
		if(error) {
		   return console.error(error);
		}

		console.log(root);
		var svg = d3.select("body")
					.append("svg");
		var groups = svg.append("g");
		groups.selectAll("path")
			.data(root.geometries)
			.enter()
			.append("path")
			.attr("class","province")
			.style("fill", function(d, i) {
				return color(i);
			})
			.attr("d", path);	  	
	});									
});