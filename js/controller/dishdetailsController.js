//ExampleView Object constructor
var DishDetailsController = function (view,model) {
	
	view.addToMenu.click(function(){
		var dish = model.getCurrentDish();
		model.addDishToMenu(dish);
		
		console.log("Dish added!");
		showDishSearchViewScreen();
	});

	view.goBack.click(function(){
		showDishSearchViewScreen();
	});
}

