require.config({
	paths: {
		"d3": "https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3"
	}
});

define(["d3"], function(d3) {
	
	var ds = [250, 430, 230, 198,320, 210, 460],
		w = h = 500,
		pd = { padding: 20 },
		step = 35,
		rw = 30;

	var svg = d3.select("body")
				.append('svg')
				.attr({width: w, height: h });
	
	var rect = svg.selectAll('rect')
				  .data(ds)
				  .enter()
				  .append("rect")
				  .attr("fill","steelblue")
				  .attr("x", function(d, i) {
				  	return pd.padding + i * step;
				  })
				  .attr("y", function(d) {
				  	return h - pd.padding - d;
				  })
				  .attr("width", rw)
				  .attr("height", function(d) {
				  	return d;
				  });

	var text = svg.selectAll('text')
				  .data(ds)
				  .enter()
				  .append("text")
				  .attr("fill", "white")
				  .attr("font-size", "14px")
				  .attr("text-anchor","middle")
				  .attr("x", function(d,i) {
				  	return pd.padding + i * step;
				  })				  	
				  .attr("y", function(d) {
				  	return h - pd.padding - d;
				  })
				  .attr("dx", rw /2 )
				  .attr("dy", "1em")
				  .text(function(d) {
				  	return d;
				  });

	function draw() {
		var updateRect = svg.selectAll("rect")
							.data(ds),
			updateText = svg.selectAll("text")
							.data(ds);

		var enterRect = updateRect.enter(),
			enterText = updateText.enter(),
			exitRect = updateRect.exit(),
			exitText = updateText.exit();

		updateRect.attr("fill","steelblue")
				  .attr("x", function(d, i) {
				  	return pd.padding + i * step;
				  })
				  .attr("y", function(d) {
				  	return h - pd.padding - d;
				  })				
				  .attr("width", rw)
				  .attr("height", function(d) {
				  	return d;
				  });

		updateText.attr("fill","white")
				  .attr("x", function(d, i) {
				  	return pd.padding + i * step;
				  })
				  .attr("y", function(d) {
				  	return h - pd.padding - d;
				  })				
				  .attr("dx", rw /2 )
				  .attr("dy", "1em")
				  .text(function(d) {
				  	return d;
				  });		  

		enterRect.append("rect")
				 .attr("fill", "steelblue")
				 .attr("x", function(d, i) {
				 	return pd.padding + i * step;
				 })			 
				 .attr("y", function(d) {
				 	return h - pd.padding -d;
				 }) 		
				 .attr("width", rw)
				 .attr("height", function(d) {
				 	return d;
				 });

		enterText.append("text")
				 .attr("fill", "white")
				 .attr("font-size", "14px")
				 .attr("text-anchor","middle")
				 .attr("x", function(d, i) {
				 	return pd.padding + i * step;
				 })			 
				 .attr("y", function(d) {
				 	return h - pd.padding -d;
				 }) 		
				 .attr("dx", rw / 2)
				 .attr("dy","1em")
				 .text(function(d) {
				 	return d;
				 });		 

		exitRect.remove();		  
	}

	var sortBtn = document.getElementById("sortData"),		 
		addBtn = document.getElementById("addData");

		sortBtn.addEventListener("click", function() {
			ds.sort(d3.ascending);
			draw();
		});

		addBtn.addEventListener("click", function() {
			ds.push(Math.floor(Math.random()* 500));
			draw();
		})					  
})