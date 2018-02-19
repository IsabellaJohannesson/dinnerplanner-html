var DishSearchView = function (container,model) {
	
	this.dishes = container.find("#dish-search-bottom");
	this.searchField = container.find("#search-field");
	this.searchButton = container.find("#dish-search-search-btn");

	// Visar rätter beroende på typ
	this.selectedDishType = function(type) {
		this.allDishes = model.getAllDishes(type);
		this.dishes.html("");
		
		for (var i = 0; i < this.allDishes.length; i++) {
		var dish = this.allDishes[i];
		this.dishes.append('<div class="dishlistbox"><div class="dish-search-image" style="background-image: url(images/' + dish['image'] + ')"><span class="dish-search-title">' + dish['name'] + '</span><span class="dish-id">' + dish['id'] +  '</span></div>');

		}
	}

	// Visar rätter beroende på sökterm
	this.searchDish = function(type, filter) {
		var type = type;
		var filter = filter;
		this.allDishes = model.getAllDishes(type, filter);
		this.dishes.html("");
		
		for (var i = 0; i < this.allDishes.length; i++) {
					console.log("search-dishmethod");

			var dish = this.allDishes[i];
				this.dishes.append('<div class="dishlistbox"><div class="dish-search-image" style="background-image: url(images/' + dish['image'] + ')"><span class="dish-search-title">' + dish['name'] + '</span><span class="dish-id">' + dish['id'] +  '</span></div>');
			}
	}

	this.selectedDishType("starter");

	this.update = function(args) {

	}

}
