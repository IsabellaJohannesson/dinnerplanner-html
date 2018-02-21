//ExampleView Object constructor
var DinnerPrintOutView = function (container,model) {
	
	// Observer som uppdaterar vyn när numOfGuests uppdateras i model 
	model.addObserver(this);

	// Uppdatera vyn om antalet gäster eller dishes ändras
	this.update = function(args){
		if(args == "numOfGuests" || args == "addDish"){
			
			// Element att addera HTML i
			this.title = container.find("#dinner-printout-mydinner");
			this.container = container.find("#dinner-printout-bottom");

			// Addering av element i HTML
			var numOfGuests = model.getNumberOfGuests();
			this.title.html("My Dinner: " + numOfGuests + " people");
			this.container.html("");
			
			this.menu = model.getFullMenu();
			for(i in this.menu){
				var dish = this.menu[i];
				var ingredient = dish['ingredients'];
				var ingr_table_html = '';
				for (i in ingredient) {
					ingr_table_html += "<tr><td>" + ingredient[i]['quantity']*numOfGuests + " " + ingredient[i]['unit'] + "</td><td>" + ingredient[i]['name'] + "</td></tr>";
					};
				this.container.append('<div class="row dinner-printout-row">\
							<div class="col-md-5">\
								<div class="col-md-6" id="image-container">\
									<div class="dinner-printout-image" style="background-image: url(images/' + dish['image'] + ')"></div>\
								</div>\
								<div class="col-md-6">\
									<div class="dish-printout-sum"><span class="dinner-printout-title">' + dish['name'] + '</span>\
									<table class="table"><thead></thead><tbody>' + ingr_table_html + '</tbody></table></div>\
								</div>\
							</div>\
							<div class="col-md-7">\
								<div class="col-md-12">\
								<span class="preparation">Preparation</span>\
								<span class="dinner-printout-desc">'+dish['description']+'</span>\
								</div>\
							</div>\
						  </div>');

			}
		}

	}


}
