//ExampleView Object constructor
var DishSearchController = function (view,model) {
	
	// Vid klick av typ av rätt	
	$("#select-type").change(function(){
	var type = $(this).val();
	console.log("typeselector" + type);

	view.selectedDishType(type);
	});

	// Vid klick av sökknappen
	$("#dish-search-search-btn").click(function(){
		var type = $("#select-type").val();
		var filter = $("#search-field").val();
		console.log("searchterm: " + filter + " searchtype: " + type);
		view.searchDish(type,filter); 
	
	});


	// Vid klick av bild för att komma till dishdetailsView.js
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
 
