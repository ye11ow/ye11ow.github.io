$(document).ready( function(){
	$(".nav-title").each( function(){
		$(this).hover( function() {
			$(this).next().trigger('hover');
		}, function() {		

		})
	});
});