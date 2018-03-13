var DishSearchView = function (container, model) {

	this.searchForm = container.find("#search-form");
	this.searchField = container.find("#searchForDish");
	this.typeValue = container.find("#selectDishType");
	this.searchButton = container.find("#dish-search-search-btn");
	
	var dishes = container.find("#dish-search-bottom");

	this.update = function(changes) {
		if (changes == "searchResults") {
		dishes.html("");


		var type = model.getType();
		var filter = model.getFilter();

		var div = document.createElement('DIV');

		model.getAllDishes(type, filter, function(data) {
			for(var i = 0; i < data.results.length; i++) {
					var row = document.createElement('DIV');
					row.className = "dishlistbox";
					div.appendChild(row);

					var divImage = document.createElement('DIV');
					divImage.className = "dish-search-image";
					var src = data.baseUri + data.results[i].image;
					divImage.style.backgroundImage = "url(" + src + ")";
					divImage.id = data.results[i].id;

					var spanTitle = document.createElement('SPAN');
					spanTitle.className ="dish-search-title";
					spanTitle.innerHTML = data.results[i].title;

					row.appendChild(spanTitle);
					row.appendChild(divImage);


			}

		}, function(error){
			console.log(error);
			console.log("Fel i DishSearchView")
		});		
		
		dishes.append(div);
		
		}
	};



	this.update("searchResults");

}

