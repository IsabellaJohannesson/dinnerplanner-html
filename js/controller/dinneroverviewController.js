//ExampleView Object constructor
var DinnerOverViewController = function (view,model) {
	
		view.confirmButton.click(function(){
		console.log("confirm-btn");
		showDinnerPrintOutScreen();

	});
		view.goBack.click(function(){
		console.log("back-btn");
		showDishSearchViewScreen();

	});


}
