var DinnerPrintOutView = function (container, model) {

	// Element att addera HTML i
		this.title = container.find("#dinner-printout-mydinner");
		this.container = container.find("#dinner-printout-bottom");

	// Addering av element i HTML
		var numOfGuests = model.getNumberOfGuests();

	
	this.update = function() {	
		
		this.menu = model.getFullMenu();
		var table = '';
		var numOfGuests = model.getNumberOfGuests();



		this.container.html("");
			for(i in this.menu) {
				var dish = this.menu[i];
				var ingredient = this.menu.extendedIngredients;
				var ingr_table_html = '';

			for (i in ingredient) {
				ingr_table_html += "<tr><td>" + ingredient.amount*numOfGuests + " " + ingredient.unit + "</td><td>" + ingredient.name + "</td></tr>";
					};

			this.container.append('<div class="row dinner-printout-row">\
							<div class="col-md-5">\
								<div class="col-md-6" id="image-container">\
									<div class="dinner-printout-image" style="background-image: url(' + dish.image + ')"></div>\
								</div>\
								<div class="col-md-6">\
									<div class="dish-printout-sum"><span class="dinner-printout-title">' + dish.title + '</span>\
									<table class="table"><thead></thead><tbody>' + ingr_table_html + '</tbody></table></div>\
								</div>\
							</div>\
							<div class="col-md-7">\
								<div class="col-md-12">\
								<span class="preparation">Preparation</span>\
								<span class="dinner-printout-desc">'+ dish.instructions +'</span>\
								</div>\
							</div>\
						  </div>');

		}
		
		this.title.html("My Dinner: " + numOfGuests + " people");	
	};

	this.update()
	
	// Observer som uppdaterar vyn när numOfGuests uppdateras i model 
	model.addObserver(this);


};
