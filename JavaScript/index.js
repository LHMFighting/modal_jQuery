/*function overlay(){
	var e1 = document.getElementById('modal-overlay');
	console.log(e1.style.visibility)
	e1.style.visibility = (e1.style.visibility == "visible") ? "hidden":"visible";
}*/
$(document).ready(function(){
	var $modal_overlay = $("#modal-overlay");
	$(".overlay").click(function(){
		var showOrHide = $modal_overlay.css("visibility")=="visible"?"hidden":"visible";
		$modal_overlay.css('visibility',showOrHide);	
	});
	$(".remodal-cancel").click(function(){
		alert("cancel");
		$modal_overlay.css('visibility',"hidden");		
	});
	$(".remodal-confirm").click(function(){
		alert("confirm");
		$modal_overlay.css('visibility',"hidden");
	});
});