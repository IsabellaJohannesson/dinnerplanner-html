var SidebarView = function(container, model) {

	var numOfGuests = container.find("#numOfGuests");

	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmButton = container.find("#sidebar-confirm-btn");
	
	var orderList = container.find("#orderList");
	var totalPrice = container.find("#totalPrice")


	var div = document.createElement('DIV');
	div.className = "orderList";
	orderList.prepend(div);

	this.update = function(){
		
		numOfGuests.html(model.getNumberOfGuests());

		var div = container.find("#orderList");

		orderList.html("");


		for (var i = 0; i < model.getFullMenu().length; i++) {
			// orderList.append('<tr><td id="sidebar-dish-name">' + model.getFullMenu()[i].title + '</td><td id="sidebar-dish-price>' + Math.round(model.getFullMenu()[i].pricePerServing*model.getNumberOfGuests()) + '</td></tr>');

			var divRow = document.createElement('tr');
			//divRow.className = "row space";

			var divTitle = document.createElement('td');
			divTitle.id = "sidebar-dish-name";
			divTitle.innerHTML = model.getFullMenu()[i].title;

			var divCost = document.createElement('td');
			divCost.id = "sidebar-dish-price";
			divCost.innerHTML = Math.round(model.getFullMenu()[i].pricePerServing*model.getNumberOfGuests());

			divRow.appendChild(divTitle);
			divRow.appendChild(divCost);
			div.append(divRow);

		}

		totalPrice.html(model.getTotalMenuPrice());


	};

	this.update();

	model.addObserver(this);
	
	
}
