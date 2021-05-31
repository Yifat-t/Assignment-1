








jQuery(document).ready(function () { 

	$('.desc').hide();
	
	$('th').hover(
		function(){
			var element = $(this).parent().parent().parent().find('.desc');
			
		
	});
	$('th').click(function(){
		var element = $(this).parent().parent().parent().find('.desc');
			
			if (element.is(":visible")) {
				element.hide();
			} else {
				element.show();
			}
			
		
	
			
	})	
		
});	







	