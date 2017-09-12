/*
	Twenty by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
var globalstuff;


function yesnoCheck() {
    if (document.getElementById('check12').checked) {
        document.getElementById('ifAcura').style.display = 'block';
    }
    else document.getElementById('ifAcura').style.display = 'none';
    if (document.getElementById('check13').checked) {
        document.getElementById('ifHonda').style.display = 'block';
    }
    else document.getElementById('ifHonda').style.display = 'none';
    if (document.getElementById('check14').checked) {
        document.getElementById('ifHyundai').style.display = 'block';
    }
    else document.getElementById('ifHyundai').style.display = 'none';

}

function outputUpdate(vol) {
	var stringy = "";

	if (document.getElementById("check1").checked) // New
	{
		stringy = stringy + "check1 "
	}
	if (document.getElementById("check2").checked) // Used
	{
		stringy = stringy + "check2 "
	}
	if (document.getElementById("check3").checked) // Certified Pre-Owned
	{
		stringy = stringy + "check3 "
	}
	if (document.getElementById("check12").checked) // ACURA
	{
		stringy = stringy + "check12 "; 
		if (document.getElementById("check21").checked) // ILX
		{
			stringy = stringy + "check221 "; 
		}
		if (document.getElementById("check105").checked) // MDX
		{
			stringy = stringy + "check105 ";
		}
		if (document.getElementById("check106").checked) // RDX
		{
			stringy = stringy + "check106 ";}
		if (document.getElementById("check108").checked) // RLX
		{
			stringy = stringy + "check108 ";
		}
		if (document.getElementById("check107").checked) // TLX
		{
			stringy = stringy + "check107 ";
		}
	}

	if (check13.checked) // HONDA
	{
		stringy = stringy + "check13";
		if (document.getElementById("check215").checked) // Accord Coupe
			{stringy = stringy + "check215 ";}
		if (document.getElementById("check113").checked) // Accord Hybrid
			{stringy = stringy +"check113 ";}
		if (document.getElementById("check114").checked) // Accord Plug-In
			{stringy = stringy +"check114 ";}
		if (document.getElementById("check115").checked) // Accord Sedan
			{stringy = stringy +"check115 ";}
		if (document.getElementById("check116").checked) // Civic HF
			{stringy = stringy +"check116 ";}
		if (document.getElementById("check216").checked) // Civic Coupe
			{stringy = stringy + "check216 ";}
		if (document.getElementById("check118").checked) // Civic Natural Gas
			{stringy = stringy +"check118 ";}
		if (document.getElementById("check119").checked) // Civic Si Coupe
			{stringy = stringy +"check113 ";}
		if (document.getElementById("check117").checked) // Civic Hybrid
			{stringy = stringy + "check117 ";}
		if (document.getElementById("check120").checked) // Civic Si Sedan
			{stringy = stringy +"check120 ";}
		if (document.getElementById("check224").checked) // CR-Z
			{stringy = stringy + "check224 ";}
		if (document.getElementById("check217").checked) // CR-V
			{stringy = stringy +"check217 ";}
		if (document.getElementById("check226").checked) // Crosstour
			{stringy = stringy + "check226 ";}
		if (document.getElementById("check227").checked) // Fit
			{stringy = stringy + "check227 ";}
		if (document.getElementById("check228").checked) // Insight
			{stringy = stringy + "check228 ";}
		if (document.getElementById("check229").checked) // Odyssey
			{stringy = stringy + "check229 ";}
		if (document.getElementById("check220").checked) // Pilot
			{stringy = stringy +"check220 ";}
	}
	if (check14.checked) // Hyundai
	{
		stringy = stringy + "check14 ";
		if (document.getElementById("check218").checked) // Accent
			{stringy = stringy + "check218 ";}
		if (document.getElementById("check219").checked) // Azera
			{stringy = stringy + "check219 ";}
		if (document.getElementById("check104").checked) // Elantra
			{stringy = stringy + "check104 ";}
		if (document.getElementById("check222").checked) // Elantra GT
			{stringy = stringy + "check222 ";}
		if (document.getElementById("check223").checked) // Genesis Coupe
			{stringy = stringy + "check223 ";}
		if (document.getElementById("check110").checked) // Genesis Sedan
			{stringy = stringy + "check110 ";}
		if (document.getElementById("check225").checked) // Santa Fe
			{stringy = stringy + "check225 ";}
		if (document.getElementById("check111").checked) // Santa Fe Sport
			{stringy = stringy + "check111 ";}
		if (document.getElementById("check277").checked) // Sonata 
			{stringy = stringy + "check277 ";}
		if (document.getElementById("check112").checked) // Sonata Hybrid
			{stringy = stringy + "check112 ";}
		if (document.getElementById("check276").checked) // Tucson
			{stringy = stringy + "check276 ";}
		if (document.getElementById("check230").checked) // Veloster
			{stringy = stringy + "check230 ";}
	}
	if (document.getElementById("check4").checked)
		{stringy = stringy + "check4";}
	if (document.getElementById("check5").checked)
		{stringy = stringy + "check5";}
	if (document.getElementById("check6").checked)
		{stringy = stringy + "check6";}
	if (document.getElementById("check7").checked)
		{stringy = stringy + "check7";}
	if (document.getElementById("check8").checked)
		{stringy = stringy + "check8";}
	if (document.getElementById("check9").checked)
		{stringy = stringy + "check9";}
	if (document.getElementById("check10").checked)
		{stringy = stringy + "check10";}
	if (document.getElementById("check11").checked)
		{stringy = stringy + "check11";}
	document.querySelector('#volume').value = "$" + vol+",000";
	var max = vol * 1000;
	var results = document.querySelectorAll('.result');
	for (i = 0; i < results.length; i++)
	{
		var r = results[i];
		var stringprice;
		if (r.querySelector('.unitprice')!=null)
		{	
		
			stringprice = r.querySelector('.unitprice').innerHTML;
			var realprice = parseInt(stringprice);
			if (max < realprice)
			{
				r.style.display = "none";
			}
			else
			{
				if (r.dataset.category.includes(stringy)) // If its data category == stringy
				{
					r.style.display = "block";
				}
			}
		}
	}
	stringy = "";
};

(function($) {
	var $results=$('.result'),
    $checks=$(':radio[name^=fl]');

$checks.change(function(){
    var $checked=$checks.filter(':checked');
    /* show all when nothing checked*/
    if(!$checked.length){
        $results.show();
        return; /* quit here if nothing checked */
    }
    /* create array of checked values */
    var checkedVals= $.map($checked, function(el){
        return el.value
    });
    /* hide all results, then filter for matches */
    
    $results.hide().filter(function(){

        /* split categories for this result into an array*/
        var cats=$(this).data('category').split(' ');
      
        /* filter the checkedVals array to only values that match */
        var checkMatches=$.grep(checkedVals, function(val){              
            return $.inArray(val, cats) >-1;
        });
        /* only return elements with matched array and original array being same length */             
        return checkMatches.length === checkedVals.length;
     /* show results that match all the checked checkboxes */            
    }).show();
    /* do something when there aren't any matches */
    if(!$results.length){
       /*alert('Ooops...no matches')*/;
    }


});


	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});

		// Scrolly links.
			$('.scrolly').scrolly({
				speed: 1000,
				offset: -10
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				expandMode: (skel.vars.touch ? 'click' : 'hover')
			});

		// Off-Canvas Navigation.

			// Navigation Button.
				$(
					'<div id="navButton">' +
						'<a href="#navPanel" class="toggle"></a>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
			if (!skel.vars.mobile
			&&	$header.hasClass('alt')
			&&	$banner.length > 0) {

				$window.on('load', function() {

					$banner.scrollwatch({
						delay:		0,
						range:		1,
						anchor:		'top',
						on:			function() { $header.addClass('alt reveal'); },
						off:		function() { $header.removeClass('alt'); }
					});

				});

			}

	});

})(jQuery);