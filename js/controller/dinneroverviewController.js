//ExampleView Object constructor
var DinnerOverViewController = function (view,model) {
	
		$("#dinner-overview-confirm-btn").click(function(){
		console.log("confirm-btn");
		$('#dinner-overview-view').hide();
		$('#dinner-printout-view').show();

	});
		$("#dinner-overview-back-btn").click(function(){
		console.log("back-btn");
		$('#dinner-overview-view').hide();
		$('#dish-search-view').show();
		$('#sidebar-view').show();

	});


}
