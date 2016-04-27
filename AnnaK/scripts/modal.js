$(document).ready(function(){
/*	$('form').on('submit',function(e){
		e.preventDefault();
		var values = $(this).serialize();
		console.log(values);
	});*/


$( "form" ).on( "submit", function( event ) {
	event.preventDefault();
	var json = JSON.stringify($(this).serializeArray());
	$('.modal').fadeIn();
	$('.modal-text').text(json);
});	

$('.btn-ok').on('click', function(e){
	$('.modal').fadeOut();
})
});


