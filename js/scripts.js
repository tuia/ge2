//SCRIPTS


	//deletar

//      $('#escrever-mensagem-modal').modal('show');	


	////////// BOOTSTRAP  /////////

		$('[data-toggle="dropdown"]').dropdown();
		$('[data-toggle="tooltip"], .hastooltip').tooltip({
			container: 'body',
			delay: 500
		});
		/* AFFIX */

		$('thead[data-spy="affix"]').on('affix.bs.affix', function() {
			var width = $(this).parents('table').width();
			$(this).css('width', width);
		});

	////////// DROPDOWNS  /////////

		$('.dropdown-menu a[role="tab"]').click( function (e) {
		    e.preventDefault();
		    $(this).tab('show');
		    return false
		});
		$('.dropdown-menu').on('hide.bs.dropdown', function () {
			$(this).parents('.dropdown').find('.dropdown-toggle').removeClass('active');
		});
		//dropdown select
		$('.dropdown-select').not('.page-navigation').on( 'click', '.dropdown-menu li a', function() { 
		   var target = $(this).html();

		   //Adds active class to selected item
		   $(this).parents('.dropdown-menu').find('li').removeClass('active');
		   $(this).parent('li').addClass('active');

		   //Displays selected text on dropdown-toggle button
		   $(this).parents('.dropdown-select').find('.dropdown-toggle span:first-child').html(target);

		   //Closes dropdown
		   $(this).parents('.dropdown-select').find('.dropdown-toggle').dropdown('toggle');

		   return false
		});
		//dropdown page navigation
		$('.dropdown-select.page-navigation').on( 'click', '.dropdown-menu li', function() { 
		   var target = $(this).html();

		   //Adds active class to selected item
		   $(this).parents('.dropdown-menu').find('li').removeClass('active');
		   $(this).addClass('active');

		   //Displays selected text on dropdown-toggle button
		   $(this).parents('.dropdown-select').find('.dropdown-toggle span:first-child').html(target);

		   //Closes dropdown
		   $(this).parents('.dropdown-select').find('.dropdown-toggle').dropdown('toggle');

		   return false
		});



	////////// BUTTONS /////////

		//COPY BUTTON
		$('.copy-button').click( function() {
			return false //for presentations
		});

		//BOOKMARK BTN
		$('.bookmark-button, .dropdown-toggle > .bookmark-button').click( function() {
			if ( $(this).hasClass('marked') ) {
				$(this).removeClass('marked');
				$(this).find('.fa').removeClass('fa-bookmark').addClass('fa-bookmark-o');
				return false
			}else {
				$(this).addClass('marked');
				$(this).find('.fa').removeClass('fa-bookmark-o').addClass('fa-bookmark');
				return false
			}
		});

		//SHOW-MORE BTN (...)
		$('.show-more').click(function() {
			$(this).parents('.expandable-container').find('.hidden-item').slideToggle();
			return false
		});

		//REFRESH BUTTON
		$('.refresh-btn').click( function() {
			$(this).addClass('remaining').delay(3000).queue(function(){
		    	$(this).removeClass('remaining').dequeue();
			});
			$(this).addClass('finishing').delay(3000).queue(function(){
		    	$(this).removeClass('finishing').dequeue();
			});
		});

		//PDA AND ALARM BUTTONS
		$('.alarm-btn, .pda-btn').click( function() { $(this).toggleClass('active'); return false });

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
		  $(this).parents('.click-area').find('.click-area-icon').removeClass('active');
		});

		//HELP BUTTON
		$('.help-container .help-btn').click( function() {
			$(this).parents('.help-container').find('.help-content').slideToggle();
			return false
		});

		//FILTER BUTTON
		// show filter options
		$('.filter-container .filter-btn').click( function() {
			$(this).parents('.filter-container').find('.filter-content').slideToggle();
			$(this).toggleClass('active');
			return false
		});

		// FILTER TRIGGER BUTTON
		// animate the selected filter options being applied
		$('.filter-trigger').click( function() {
			$(this).parents('.filter-content').slideUp('fast', function() {
				$('.filter-alert').slideDown('slow');
			});
			return false;
		});

		//REMOVE FILTER-BUTTON
		//animate the filter-altert removal
		$('.remove-filter-btn').click( function() {
			$(this).parents('.alert').slideUp();
		});

		//TOGGLE-ICON-BUTTON
		$('.toggle-icon-btn').click( function() {
			$(this).find('.fa').toggle();
		});



	////////// NAVBAR /////////

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



	////////// FORMS /////////	

		//DATE PICKER
		($('.datepicker').length) &&
		$('.datepicker').datetimepicker({
		    lang: 'pt-BR',
		    timepicker: false,
		    format:'d/m/Y',
		    closeOnDateSelect:true
		});

		//DATE TIME PICKER
		($('.datetimepicker').length) &&
		$('.datetimepicker').datetimepicker({
		    lang: 'pt-BR',
		    format:'d/m/Y H:i',
		});

		//ALPHANUMERIC
		($(".input-alphanumeric-container > input[type='text']").length) &&
		$(".input-alphanumeric-container > input[type='text']").numeric({
			allowMinus: false,
			allowThouSep: false,
			allowDecSep: false
		});
		
		// NO SPECIAL CHAR
		($(".input-latin-container > input[type='text'], .input-latin-container > textarea").length) &&
		$(".input-latin-container > input[type='text'], .input-latin-container > textarea").alphanum({
			allow: '!?@":.,*-+/()[]=$#'
		});
		
		//MONEY INPUT
		($(".input-precision-container > input[type='text']").length) &&
		$(".input-precision-container > input[type='text']").maskMoney({
			thousands:'.',
			decimal:',',
			affixesStay: false
		});

		//MAXLENGTH
		//IMPORTANT! though that if you are setting the maxlength via JavaScript, someone else could just as easily change the maxlength to whatever they like. You will still need to validate the submitted data on the server.
		$('input[type="text"]').not('.input-counter-container .form-control').attr('maxLength','50').keypress(limitMe);
		function limitMe(e) {
		    if (e.keyCode == 8) { return true; }
		    return this.value.length < $(this).attr("maxLength");
		}

		//CHARACTERES COUNTER
		 $('.input-counter-container .form-control').keyup( function() {
				var len = $(this).val().length;
				var inputMaxLenght = $(this).attr("maxLength");

			if (len >= inputMaxLenght+1) {
				$(this).val($(this).val().substring(0, inputMaxLenght));
			} else {
			 $('.input-counter').text(inputMaxLenght - len);

			 if (len > inputMaxLenght-5) { $('.input-counter').css('color', 'red'); }
			 else { $('.input-counter').css('color', 'inherit'); }
		   }
		});

		//EDITABLE FIELDS
		$('.editable-field-btn').click( function() {
			$(this).parents('.editable-field-container').find('.editable-field-form').slideDown();
			$(this).parents('.editable-field-container').find('.editable-value').slideUp();
			$(this).parents('.editable-field-container').addClass('editing-field');
			return false
		});
		$('.editable-field-container .cancel, .editable-field-container .save').click( function() {
			$(this).parents('.editable-field-container').find('.editable-field-form').slideUp();
			$(this).parents('.editable-field-container').find('.editable-value').slideDown();
			$(this).parents('.editable-field-container').removeClass('editing-field');
			return false
		});

		//SEARCH BOX
		$("#navigation .contextual-search").bind('focus', function() {
			var menu = $(this).parents('.search-form').find('.search-options');
			if ( !menu.hasClass('open') ) {
				menu.slideDown('fast').addClass('open');
			} else {}
		    $(document).bind('mousedown', function(e) {
		        if (! $(e.target).closest('.search-options, #navigation .contextual-search').length) {
		            menu.removeClass('open').slideUp('fast', function() {
			            $('#navigation .expand-menu').show();
			            $('#navigation .hidden-item').hide();
		            });
		            $(document).unbind('mousedown', arguments.callee);
					$("#navigation .contextual-search").css('width', 215);
		        }
		    })
		});

		// SEARCH EXPAND MENU
		$('#navigation .expand-menu').click( function() {
			var totalWidth = 0;
			$(this).hide();
			$(this).parents('.nav').find('.hidden-item').show();
			$(this).parents('.nav').find('li').each(function(index) {
			    totalWidth += parseInt($(this).width(), 10);
			});
			$("#navigation .contextual-search").css('width', totalWidth);
			return false
		});

		//LAST SEARCHED ITEMS
		$('.last-results-container .contextual-search').focus( function() {
			$(this).parents('.last-results-container').find('.last-results').slideDown('fast');
		}).blur( function() {
			$(this).parents('.last-results-container').find('.last-results').slideUp('fast');
		});

		//DROPNAV
		$('.dropnav-toggle').click( function() {
			var target = $(this).attr('href');
			$(this).parents('.nav').find('li').removeClass('active');
			$(this).parent().addClass('active');
			$(this).parents('.dropnav-container').find('.dropnav .nav').removeClass('active');
			$(this).parents('.dropnav-container').find(target).addClass('active');
			return false
		});

		//TYPEAHEAD
		var substringMatcher = function(strs) {
		return function findMatches(q, cb) {
		var matches, substrRegex;
		 
		// an array that will be populated with substring matches
		matches = [];
		 
		// regex used to determine if a string contains the substring `q`
		substrRegex = new RegExp(q, 'i');
		 
		// iterate through the pool of strings and for any string that
		// contains the substring `q`, add it to the `matches` array
		$.each(strs, function(i, str) {
		if (substrRegex.test(str)) {
		// the typeahead jQuery plugin expects suggestions to a
		// JavaScript object, refer to typeahead docs for more info
		matches.push({ value: str });
		}
		});
		 
		cb(matches);
		};
		};
		 
		var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
		'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
		'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
		'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
		'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
		'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
		'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
		'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
		'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
		];
		 
		($('#exemplo.typeahead').length) &&
		$('#exemplo.typeahead').typeahead({
			hint: true,
			highlight: true,
			minLength: 1
		},
		{
			name: 'states',
			displayKey: 'value',
			source: substringMatcher(states)
		}); 


		//TAGS COM AUTOCOMPLETE
		($(".autocomplete-tags").length) &&
        $(".autocomplete-tags").tagit({
        	 availableTags: ["c++", "java", "php", "javascript", "ruby", "python", "c"]
        });


	////////// TABLES /////////

		// TABLE CHECKBOX
		$('.check-table-row').change( function() {
			var tablerow = $(this).parents('tr');
			if(this.checked) {
		    	tablerow.addClass('active')
		    } else {
		        tablerow.removeClass('active')
		    }

		});

		// SLIDE OPTIONS TD ON HOVER
		/*$('.check-table tr').hover(
			function() {
				 $(this).find('.options').stop(true).slideDown(200);
			}, function() {
				 $(this).find('.options').stop(true).slideUp(200);
			}
		);*/
		$('.check-table tbody tr').hover( function() {
				var index = $(this).index() + 2;
				if ( $(this).hasClass('options') ) {
					return false
				} else {
					$(this).parent().find('tr:nth-child(' + index + ')').stop(true).toggleClass('open');
				}
			}
		);

		//TABLE OPTIONS
		$('.check-table-row').change( function() {
			var buttons = $('.table-options').find('.btn').not('.dropdown-toggle');
			var checkbox = $('.table-options').find('.checkbox input');
			var checklength = $('.check-table').find('.check-table-row:checked').length;
			var number = $('.table-options').find('.checklength');
			var dropdown = $('.table-options .dropdown-toggle');

			if ( checklength >= 2 ) {
				dropdown.removeClass('disabled');
				checkbox.prop("indeterminate", true);
				number.text(checklength);
				buttons.removeClass('disabled');

			} if ( checklength === 1 ) {
				dropdown.removeClass('disabled');
				checkbox.prop("indeterminate", true);
				number.text(checklength);	
				buttons.removeClass('disabled');
				$('.table-options .onlygroup .btn').addClass('disabled');

			} if ( checklength < 1 ) {
				dropdown.addClass('disabled');
				checkbox.prop("indeterminate", false);
				number.text("0");
				buttons.addClass('disabled');
			}
		});
		$('.check-table-clear-btn').click( function() {
			$('.check-table .check-table-row').parents('tr').removeClass('active');
			$('.check-table .check-table-row, .table-options .checkbox input').prop('checked', false);
			$('.table-options .checkbox input').prop("indeterminate", false);
			$('.table-options .checklength').text('0');
		});
		$('.check-table-all-btn').click( function() {
			$('.check-table .check-table-row').parents('tr').addClass('active');
			$('.table-options .checkbox input').prop("indeterminate", false);
			$('.table-options .checklength').text('5');
			$('.check-table .check-table-row, .table-options .checkbox input').prop('checked', true);
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



	////////// OTHER COMPONENTS /////////

		//DRAGGABLE MODAL
		$( ".entity-window" ).draggable({ scroll: false , handle: ".entity-window-header", containment: "#content"});
		$('.show-window-btn').click( function() {
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
			return false
		});

		//PAGE LOADER
		$('.load-page-btn').click( function() {
			$('body').addClass('loading');
			setTimeout(function() {
				$('body').removeClass('loading');
			}, 2000);
			return false
		});

		//DRAG AND DROP
	     $(function() {
			$( ".sortable-list" ).sortable({
				connectWith: ".sortable-list",
				handle: ".sortable-handler"
			}).disableSelection();
			$( ".sortable-columns-container" ).sortable({
				handle: ".sortable-column-handler"
			}).disableSelection();
		});

	     //MULTIPLE TABS
	     $('.multiple-tabs .toggle-tab').click( function() {
	     	var target = $(this).attr('href');
	     	if ( $(this).parent().is('[role="tabpanel"]') ) {
	     		return false
	     	} else {	
		     	$(this).parents('.multiple-tabs').children('.tab-content').children('.tab-pane').hide().css('visibility', 'hidden');
		     	$(this).parents('.multiple-tabs').children('.nav').find('li').removeClass('active');
		     	$(this).parents('li').not('.dropdown-toggle').addClass('active');
		     	$(this).parents('.multiple-tabs').find(target).show().css('visibility', 'visible');
		     	return false;
		     }
	     });