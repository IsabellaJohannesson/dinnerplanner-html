var DishItemView = function (container, model) {
	
  var dishesPrint = container.find("#DishItemView");

  // 

  dishesPrintHtml = "";

  for (var i=0; i<model.dishes.length;i++){
    dishesPrintHtml +=  "<div class='col-md-2 left'>";
    dishesPrintHtml +=  "<div class='image'>";
        //get .image from list
    dishesPrintHtml +=  "<img src='images/";
    dishesPrintHtml +=  model.dishes[i].image;
    dishesPrintHtml +=  "' >";
    dishesPrintHtml += "<div class='name'>";
          //get .name from list
    dishesPrintHtml += "<h4>"
    dishesPrintHtml += model.dishes[i].name;
    dishesPrintHtml += "</h4>";
    dishesPrintHtml += "</div>";
    dishesPrintHtml += "</div>";
    dishesPrintHtml += "</div>";
  }



	// Print html
	dishesPrint.html(dishesPrintHtml);
};
