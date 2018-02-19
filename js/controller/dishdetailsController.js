//ExampleView Object constructor
var DishDetailsController = function (view,model) {
	
	$("#dish-details-confirm-btn").click(function(){
		model.addDishToMenu(model.getSelectedDishId());
		console.log(model.getSelectedDishId());
		$("#dish-details-view").hide();
		$("#dish-search-view").show();
		$("#pendingrow").hide();
	});

	$("#dish-details-back-btn").click(function(){
		$("#dish-details-view").hide();
		$("#dish-search-view").show();
		$("#pendingrow").hide();
	});
}
