//ExampleView Object constructor
var DinnerPrintOutController = function (view,model) {

		$("#dinner-printout-back-btn").click(function(){
		console.log("DP-confirm-btn");
		$('#dinner-printout-view').hide();
		$('#dish-search-view').show();
		$('#sidebar-view').show();
		//view.update("numberOfGuests");
	});
}
