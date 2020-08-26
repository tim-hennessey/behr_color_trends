var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;

	var barsNodeList = document.querySelectorAll(".bar");
	var barsArray = [].slice.call(barsNodeList);
	

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		barsArray = shuffle(barsArray);

		t.staggerTo(barsArray, 1, {autoAlpha:1}, 0.1);


		function shuffle(array) {
			for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		}

	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
