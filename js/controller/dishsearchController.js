//ExampleView Object constructor
var DishSearchController = function (view,model) {
		
	$("#select-type").change(function(){
	var type = $(this).val();
	console.log("typeselector" + type);

	view.selectedDishType(type);
	});

	//click event for the search button
	$("#dish-search-search-btn").click(function(){
		var type = $("#select-type").val();
		var filter = $("#search-field").val();
		console.log("searchterm: " + filter + " searchtype: " + type);
		view.searchDish(type,filter); 
	
	});


		$(".dish-search-image").click(function() {
		var id = $(this).find(".dish-id").text();
		model.setSelectedDishId(id);
		console.log("dish-search-image " + id);
		$('#dish-search-view').hide();
		$('#dish-details-view').show();
		$('#pendingprice').html(model.getDishPrice(id));
		$('#pendingrow').show();
		});


}
 

