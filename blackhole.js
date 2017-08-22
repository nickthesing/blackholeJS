(function() {

	/**
	 * Blackhole
	 *
	 * nothing
	 */
	var Blackhole = function() {

		var universe;

		// NOT tested in IE since its a blackhole itself. :')
		
		this.form = function() {
			universe = document.querySelector('body');
			universe.innerHTML = '';
			universe.style.backgroundImage = "url(http://www.syfy.com/sites/syfy/files/wire/legacy/BH_wip_v14.jpg)";
			universe.style.backgroundSize = 'cover';
		}
	}

	window.Blackhole = Blackhole;	
})();