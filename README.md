#csRadiobuttons
######jQuery UI plugin to help make your own radiobuttons. 

###Introduction

csRadiobuttons is a jQuery plugin that allows you to construct your own radio button controls.  Select a container with jQuery and provide the 'checkboxClass', and this plugin will take care of updating the active button and fire a change event.

See [JSFiddle Example](http://jsfiddle.net/marpstar/cxFDY/)

###Options

	$('#someContainer').radiobuttons({
		checkboxClass: '',     				/* CSS class of 'checkbox' elements. */
		activeClass: 'active', 				/* CSS class to apply to 'active' button */
		onChange: function (selected) {  } 	/* function callback to handle change event /* 
	});
	
###Dependencies
#####jQuery 1.5.3+
#####jQuery UI 1.8+
