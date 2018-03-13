//ExampleView Object constructor
var SidebarController = function (view,model) {
	

	view.minusButton.click(function() {
		console.log("minusGuest");
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
		console.log(model.getNumberOfGuests());
	});


	view.plusButton.click(function() {
		console.log("plusGuest");
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
		console.log(model.getNumberOfGuests());
	});


	view.confirmButton.click(function() {
		console.log("sidebar-confirm-btn");
		showDinnerOverviewScreen();
	});

	

}

