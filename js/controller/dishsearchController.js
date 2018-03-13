var DishSearchController = function (view,model) {

	view.searchForm.on('submit', function(e){
		e.preventDefault();
	})


	view.searchButton.click(function(){
		var value = view.typeValue.val();
		console.log("Value is:" ,value)
		var search = view.searchField.val();
		model.setFilter(search);
		model.setType(value);
		view.update("searchResults");

	});


	view.dishes.on('click', '.dishlistbox .dish-search-image', function() {
			var dishId = $(this).attr('id');
			model.getDish(dishId, function(data) {
				model.setCurrentDish(data);
				showDishDetailsViewScreen();
				showSideBarViewScreen();
			})
	
			
	});
}




 
