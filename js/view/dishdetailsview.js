//ExampleView Object constructor
var DishDetailsView = function (container,model) {
	
	var dishId = model.getSelectedDishId();

	// Vänster 
	this.title = container.find(".dish-details-title")
	this.image = container.find(".dish-details-image");

	// Höger
	this.ingredientsListtitle = container.find("#ingredientsList-title")
	this.ingredients = container.find("#ingredientsList-ingredients");
	this.priceSum = container.find('#priceSum');

	// Nedre
	this.description = container.find(".dish-details-description");

	// Uppdaterar när vi ändrar this.notifyObserver("numOfGuests"); i // Höger 
	this.update = function(args) {
		if (args == "numOfGuests") {
			this.dish = model.getDish(model.getSelectedDishId());
			this.ingredientsListtitle.html("Ingredients for "+ model.getNumberOfGuests() + " people.");
			this.priceSum.html(model.getDishPrice(this.dish["id"]));
			
			var ingredient = this.dish['ingredients'];
			this.ingredients.html("");

			for (i in ingredient) {
				this.ingredients.append("<tr><td>" + Math.round(ingredient[i]['quantity']*model.getNumberOfGuests()) + " " + ingredient[i]['unit'] + "</td><td>" + ingredient[i]['name'] + "</td><td>SEK</td><td>" + ingredient[i]['price']*model.getNumberOfGuests() + "</td></tr>");
			};

		} 

	// Ger oss vyn vid tidigare tillstånd från föregående sida
		else if(args == "selectedDishId") {
				this.dish = model.getDish(model.getSelectedDishId());
				this.ingredientsListtitle.html("Ingredients for "+ model.getNumberOfGuests() + " people.");
				this.priceSum.html(model.getDishPrice(this.dish["id"]));
				this.title.html(this.dish['name']);
				this.image.html("<img class='dish' src=images/" + this.dish['image'] + ">");
				this.description.html(this.dish['description']);


				var ingredient = this.dish['ingredients'];
				this.ingredients.html("");


				for (i in ingredient) {
				this.ingredients.append("<tr><td>" + Math.round(ingredient[i]['quantity']*model.getNumberOfGuests()) + " " + ingredient[i]['unit'] + "</td><td>" + ingredient[i]['name'] + "</td><td>SEK</td><td>" + ingredient[i]['price']*model.getNumberOfGuests() + "</td></tr>");
				};
		}
	}

this.update();
model.addObserver(this);

	

}
