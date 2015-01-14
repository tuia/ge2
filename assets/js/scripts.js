//SCRIPTS
$(document).ready( function() {

	//BOOTSTRAP
	$('[data-toggle="tooltip"], .hastooltip').tooltip({
		container: 'body',
		delay: 500
	});

	//DATE TIME PICKER
	$('.datetimepicker').datetimepicker({
	    autoclose: true,
	    format: 'mm-dd-yy hh:ii'
	});

	//SHOW-MORE BTN (...)
	$('.show-more').click(function() {
		$(this).parents('.expandable-container').find('.hidden-item').slideToggle();
		return false
	});

	//TOGGLE MENU
	$('.menus-container').on( "click", ".toggle-menu-btn", function() {
		var btn = $('.menus-container .toggle-menu-btn');
		var	menus = $('.menus-container .togglable-menus');

		if ( btn.hasClass('disabled') ) { return false }
		else {
			if ( menus.find('nav').hasClass('hidden-item') ){
				btn.text('Esconder menu');
				menus.find('nav').removeClass('hidden-item');
				$('#content').addClass('hasmenu');
			} else {
				btn.text('Exibir menu');
				menus.find('nav').addClass('hidden-item');	
				$('#content').removeClass('hasmenu');		
			}
		}
	});

	//AUTOMATIC-MENU
	$('.menus-container').on( "click", ".automatic-menu-btn", function() {
		var menus = $('.menus-container .togglable-menus');
		var menubtn = $('.menus-container .toggle-menu-btn');
		var btn = $('.menus-container .automatic-menu-btn');

		if ( !menus.hasClass('automatic') ) {
			console.log('truee');
			btn.prepend('<i class="fa fa-check"></i> &nbsp;');
			menubtn.addClass('disabled');
			menus.addClass('automatic');
			if ( !menus.find('nav').hasClass('.hidden-item') ) { 
				menus.find('nav').addClass('hidden-item');
				menubtn.text('Exibir menu');
				$('#content').removeClass('hasmenu');
			}
			else {}
		} else {
			console.log('false');
			btn.text('Exibir menu automaticamente');
			menubtn.removeClass('disabled');
			menus.removeClass('automatic');
			menus.find('nav').removeClass('hidden-item');
			menubtn.text('Esconder menu');
			$('#content').addClass('hasmenu');
		}
	});

	//USER MENU
	$('.user-menu .user-menu-link').click( function() {
		var target = $(this).attr('href');

		$(this).parents('.nav').find('.user-menu > .dropdown-menu > li').removeClass('active');
		$(this).parent().addClass('active');
		$(this).parents('.user-menu').find('.user-menu-content').addClass('open');
		$(this).parents('.user-menu').find('.tab').not(target).removeClass('open');
		$(this).parents('.user-menu').find(target).addClass('open');
		return false
	});
	$('.user-menu').on('hide.bs.dropdown', function () {
	  $(this).find('.user-menu-content').removeClass('open');
	  $(this).removeClass('active');
	  $(this).parent().find('.user-menu > .dropdown-menu > li').removeClass('active');
	});	
	$('.user-menu-content *').click(function (e) {
	    e.preventDefault();
	    $(this).tab('show');
	    return false
	});

	//BOOKMARK BTN
	$('.bookmark-button').click( function() {
		if ( $(this).hasClass('marked') ) {
			$(this).removeClass('marked');
			$(this).find('.fa').removeClass('fa-bookmark').addClass('fa-bookmark-o');
		}else {
			$(this).addClass('marked');
			$(this).find('.fa').removeClass('fa-bookmark-o').addClass('fa-bookmark');
		}
	});

	//EDITABLE FIELDS
	$('.editable-field-btn').click( function() {
		$(this).parents('.editable-field-container').find('.editable-field-form').slideDown();
		$(this).parents('.editable-field-container').find('.editable-value').slideUp();
		$(this).parents('.editable-field-container').addClass('editing-field');
	});
	$('.editable-field-container .cancel, .editable-field-container .save').click( function() {
		$(this).parents('.editable-field-container').find('.editable-field-form').slideUp();
		$(this).parents('.editable-field-container').find('.editable-value').slideDown();
		$(this).parents('.editable-field-container').removeClass('editing-field');
	});

	//ABSOLUTE BUTTONS INSIDE TABLES
	$.fn.InsideTableBtns = function() {
	    var $el;
	    return this.each(function() {
	    	$el = $(this);
	    	var newDiv = $("<div />", {
	    		"class": "innerWrapper",
	    		"css"  : {
	    			"height"  : $el.height(),
	    			"width"   : "100%",
	    			"position": "relative"
	    		}
	    	});
	    	$el.wrapInner(newDiv);    
	    });
	};
	$("td.hover-buttons-container").InsideTableBtns();

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


	//ENTITY CLICK
	$('.entity-button').click(function(event) {
        $(this).parents('.dropdown').find('.dropdown-menu').first().stop(true, true).slideToggle();
	  	return false;
	});
	$('.entity-button').on('contextmenu', function(event) {
		console.log('right Mouse button pressed.');
		event.preventDefault();
	});
	$('.map-bg').click(function(event){
	    $('.dropdown-entity').slideUp();
	});

	//CLICKABLE AREA
	//WHEREVER THERE ARE TWO ICONS TOO CLOSE ON THE MAP
	$('.click-area .dropdown-menu > li > a').hover( function () {
		var icontarget = $(this).attr('href') + "-icon";
		$(this).parents('.click-area').find('.click-area-icon').removeClass('active');
		$(this).parents('.click-area').find(icontarget).addClass('active');
	});
	$('.click-area .dropdown-menu').on('hide.bs.dropdown', function () {
		console.log('tuia')
	  $(this).parents('.click-area').find('.click-area-icon').removeClass('active');
	});


	//DRAGGABLE MODAL
	$( ".entity-window" ).draggable({ scroll: false , handle: ".entity-window-header", containment: "#content"});
	$('.entity-icon').click( function() {
		var target = $(this).attr('href');
		var offset = $(this).offset();
		var height = $(this).parents('dropdown-menu').outerHeight();
		var width = $(this).parents('dropdown-menu').width();
		var top = offset.top;
		var right = offset.left + width + "px";

		$(target).css( {
			'position': 'absolute',
		    'left': right,
		    'top': top
		});
		$(target).slideDown('fast');

		return false
	});
	$('.entity-window .btn-close').click( function() {
		$(this).parents('.entity-window').slideUp('fast');
	});

});


// OP

//DROPNAV
$('.dropnav-toggle').click( function() {
	var target = $(this).attr('href');
	$(this).parents('.nav').find('li').removeClass('active');
	$(this).parent().addClass('active');
	$(this).parents('.dropnav-container').find('.dropnav .nav').removeClass('active');
	$(this).parents('.dropnav-container').find(target).addClass('active');
	return false
});

$('.list-table tr').hover(
	function() {
		 $(this).find('.options').stop(true).slideDown(200);
	}, function() {
		 $(this).find('.options').stop(true).slideUp(200);
	}
);