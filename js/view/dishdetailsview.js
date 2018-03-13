var DishDetailsView = function(container, model) {

	var title = container.find(".dish-details-title");
    var image = container.find(".dish-details-image");
    var description = container.find(".dish-details-summary");

    var dishPrice = container.find("#dishPrice");
    var dishTime = container.find("#ingredientsList-title")

    this.addToMenu = container.find('#dish-details-confirm-btn');
	this.goBack = container.find("#dish-details-back-btn");
	

    this.update = function(){
        var ingredient ='';
        var amount='';
        var unit ='';
        
        if(model.getCurrentDish() != 0){

            var dish = model.getCurrentDish();
            var numOfGuests = model.getNumberOfGuests();
            
            for(var i=0; i < dish.extendedIngredients.length; i++){

                ingredient += dish.extendedIngredients[i].name + '<br>';
                amount += Math.round(dish.extendedIngredients[i].amount * numOfGuests) + '<br>';
                unit += dish.extendedIngredients[i].unit + '<br>';

                };

                var imgHtml = '<img src="' + dish.image + '"/>';
                image.html(imgHtml);


                title.html(dish.title);
                description.html(dish.instructions);

                container.find('#td1').html(ingredient);
                container.find('#td2').html(amount);
                container.find('#td3').html(unit);
                container.find('#numOfGuests').html(numOfGuests);

                dishPrice.html(Math.round(model.getCurrentDish().pricePerServing * numOfGuests));
                dishTime.html("Preparation time: " + dish.readyInMinutes + " min");
        }
        
    };

    model.addObserver(this);
}
