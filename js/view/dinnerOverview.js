var DinnerOverView = function(container, model) {

	// Element att addera HTML i
		this.myDinner = container.find("#dinner-overview-mydinner");
		this.dishBoxes = container.find("#dinner-overview-bottom");
		this.totalPrice = container.find("#dinner-overview-totalprice");

		this.confirmButton = container.find("#dinner-overview-confirm-btn");
		this.goBack = container.find("#dinner-overview-back-btn");

	
	this.update = function() {	
		this.dishBoxes.html("");


		var dishes = model.getFullMenu();
		var numOfGuests = model.getNumberOfGuests();
		

		for (var i = 0; i < dishes.length; i++) {
			this.dishBoxes.append('<div class="dishlistbox"><div class="dinner-overview-image" style="background-image: url(' + dishes[i].image + ')"><span class="dinner-overview-title">' + dishes[i].title + '</span></div>'
		 + '<span class="dinner-overview-price">' + Math.round(dishes[i].pricePerServing*numOfGuests) + ' SEK</span></div>');


		}

	this.totalPrice.html(model.getTotalMenuPrice() + " SEK");
	this.myDinner.html("My Dinner: " + model.getNumberOfGuests() + " people");

	};	

	this.update()
	model.addObserver(this)	
}

