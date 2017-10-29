require.config({
	paths: {
		"d3": "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3) {
	console.log("通过标签选择器",d3.select("body"));
	console.log("通过id选择选择",d3.select("#important"));
	console.log("通过类选择器选择",d3.select(".rw"));
	var d3rw = d3.selectAll(".rw");
	console.log("selectAll('.rw')",d3rw, d3rw.empty(),d3rw.node(),d3rw.size());
	var rw = document.getElementsByClassName("rw");
	console.log("rw1", d3.select(rw));
	console.log("rw2", d3.selectAll(rw));
})