//ExampleView Object constructor
var DinnerPrintOutController = function (view,model) {

		view.goBack.click(function(){
		console.log("DP-confirm-btn");
		showDishSearchViewScreen();
		showSideBarViewScreen();
	});
}
