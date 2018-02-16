//ExampleView Object constructor
var SidebarView = function (container,model) {

	this.fullMenu = model.getFullMenu();

	this.numOfGuests = container.find("#numOfGuests");
	this.orderList = container.find("#orderList");
	this.totalCost = container.find("#totalCost");
	
	this.confirmbutton = container.find("#sidebar-confirm-btn");


	this.update = function(args) {

		// Uppdaterar pris om vi ändrar this.notifyObserver("numOfGuests"); eller this.notifyObserver("addDish");
		if (args == "numOfGuests" || args == "addDish") {
			
			this.numOfGuests.html(model.getNumberOfGuests());
			this.totalCost.html(model.getTotalMenuPrice());

			// Hämtar måltiderna från dinnerModel.js
			this.fullMenu = model.getFullMenu();

			// Clearar myOrder
			this.orderList.html("");

			// Adderar måltiderna i Sidebar
			for (var i = 0; i < this.fullMenu.length; i++) {
			var dish = this.fullMenu[i];
			this.orderList.append('<tr><td>' + dish['name'] + '</td><td>' + model.getDishPrice(dish['id']) + '</td><</tr>');
			}

		}

	}

this.update();

// Adderar observer vid "numOfGuests" och "addDish"
model.addObserver(this);

}
