
//ExampleView Object constructor
var DinnerOverView = function (container,model) {

	// Observer som uppdaterar vyn när numOfGuests uppdateras i model 
	model.addObserver(this);
	
	
	// Element att addera HTML I
	this.title = container.find("#dinner-overview-mydinner");
	this.dishes = container.find("#dinner-overview-bottom");

	// Addering av element
	this.title.html("My Dinner: " + model.getNumberOfGuests() + " people");
	this.dishes.html("");
	
	this.menu = model.getFullMenu();
	for(i in this.menu) {
	var dish = this.menu[i];
	this.dishes.append('<div class="dishlistbox"><div class="dinner-overview-image" style="background-image: url(images/' + dish['image'] + ')"><span class="dinner-overview-title">' + dish['name'] + '</span></div>'
			 + '<span class="dinner-overview-price">' + model.getDishPrice(dish['id']) + ' SEK</span></div>');
	}

	// Uppdaterar vyn när numOfGuests eller addDish ändras
	this.update = function(args){
		if (args == "numOfGuests" || args == "addDish") {
			this.title.html("My Dinner: " + model.getNumberOfGuests() + " people");
			this.dishes.html("");
			
			this.menu = model.getFullMenu();
			for(i in this.menu){
			var dish = this.menu[i];
			this.dishes.append('<div class="dishlistbox"><div class="dinner-overview-image" style="background-image: url(images/' + dish['image'] + ')"><span class="dinner-overview-title">' + dish['name'] + '</span></div>'
			 + '<span class="dinner-overview-price">' + model.getDishPrice(dish['id']) + ' SEK</span></div>');
			}		
			
		}
	}


	

}
 
