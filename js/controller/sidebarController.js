//ExampleView Object constructor
var SidebarController = function (view,model) {
	

	$("#minusGuest").click(function() {
		console.log("minusGuest");
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		console.log(model.getNumberOfGuests());
	});


	$("#plusGuest").click(function() {
		console.log("plusGuest");
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log(model.getNumberOfGuests());
	});


	view.confirmbutton.click(function() {
		console.log("#sidebar-confirm-btn");
		showDinnerOverviewScreen();
	});

	

}
