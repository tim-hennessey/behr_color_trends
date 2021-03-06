var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax({paused:true});

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
		// t.set(".bar", {scaleX:randomNumber(1, 2) * .01, transformOrigin:"50% 50%"});

		var randomDuration = 5 + randomNumber(2, 3),
			randomOpacity = randomNumber(10, 30) * 0.01;

		tl.staggerTo(barsArray, randomDuration, {xPercent:randomNumber(-50, 50), scaleX:randomNumber(3, 5), autoAlpha: randomOpacity, yoyo:true, repeat:-1, ease:Sine.easeInOut}, .5);

		// tl.staggerTo(barsArray, randomDuration, {xPercent:randomNumber(-10, 10), scaleX:randomNumber(90, 100 * .01), autoAlpha: randomOpacity, yoyo:true, repeat:-1, ease:Sine.easeInOut}, .5);

		tl.play(10);


		function shuffle(array) {
			for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		}

		function randomNumber(min, max) {  
			var random = Math.floor(Math.random() * (max - min + 1)) + min;
			return random;
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
