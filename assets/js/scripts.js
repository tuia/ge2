//SCRIPTS
$(document).ready( function() {

	//BOOTSTRAP
	//$('#poste').modal('show');

	//SUBNAV SEARCH BOX
	$("#subnav .contextual-search").bind('focus', function() {
	    $(this).parents('.search-form').find('.search-options').slideDown('fast');
	    $(document).bind('mousedown', function(e) {
	        if (! $(e.target).closest('div.search-options').length) {
	            $("div.search-options").hide();
	            $(document).unbind('mousedown', arguments.callee);
	        }
	    })
	});

	//RANGE SLIDER
	var elem = document.querySelector('.input-scale');
	var init = new Powerange(elem, { min: 100, max: 1000, start: 100, step: 100 });

});