//SCRIPTS
$(document).ready( function() {

	//BOOTSTRAP
	$('#poste').modal('show');

	//SUBNAV SEARCH BOX
	$("#subnav .contextual-search").bind('focus', function() {
		var menu = $(this).parents('.search-form').find('.search-options');
		if ( !menu.hasClass('open') ) {
			menu.slideDown('fast').addClass('open');
		} else {}
	    $(document).bind('mousedown', function(e) {
	        if (! $(e.target).closest('.search-options, #subnav .contextual-search').length) {
	            menu.removeClass('open').slideUp('fast', function() {
		            $('#subnav .expand-menu').show();
		            $('#subnav .hidden-item').hide();
	            });
	            $(document).unbind('mousedown', arguments.callee);
				$("#subnav .contextual-search").css('width', 215);
	        }
	    })
	});

	//SUBNAV SEARCH EXPAND MENU
	$('#subnav .expand-menu').click( function() {
		var totalWidth = 0;
		$(this).hide();
		$(this).parents('.nav').find('.hidden-item').show();
		$(this).parents('.nav').find('li').each(function(index) {
		    totalWidth += parseInt($(this).width(), 10);
		});
		$("#subnav .contextual-search").css('width', totalWidth);
		return false
	});

	//RANGE SLIDER
	var elem = document.querySelector('.input-scale');
	var init = new Powerange(elem, { min: 100, max: 1000, start: 100, step: 100 });

});