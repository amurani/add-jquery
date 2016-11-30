chrome.runtime.onMessage.addListener(
	function( request, sender, sendResponse ) {
		if ( request.message === "clicked_browser_action" ) {
				
			if ( typeof jQuery === "undefined" ) {
				console.log('This site does not have jQurey 😢.');
				var script = document.createElement('script');
				script.setAttribute('src', 'https://code.jquery.com/jquery-2.2.0.min.js');
				document.body.appendChild(script);
				console.log( 'jQurey has been added to this site ☺️. You\'re good to go 👍🏻.' );
				alert('jQurey has been added to this site ☺️. You\'re good to go 👍🏻.');
			} else {
				console.log( 'This site has jQuery 👍🏻.' );
				alert( 'This site has jQuery 👍🏻.' );
			}
			
		}
	}
);