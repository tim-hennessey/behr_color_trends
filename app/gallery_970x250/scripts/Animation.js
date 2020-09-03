var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var gallery = document.getElementById('gallery');
	var overlay2 = document.getElementById('overlay2');
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax({paused:true});
	// var tl3 = new TimelineMax({paused:true});

	var barsNodeList = document.querySelectorAll(".bar");
	var barsArray = [].slice.call(barsNodeList);

	

	var singNodeList = document.querySelectorAll(".sing");
	var singArray = [].slice.call(singNodeList);
	

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

		t.set(".bar", {scaleX:randomNumber(2, 3), transformOrigin:"50% 50%"});
		// t.set(".barBottom", {scaleY:randomNumber(2, 3), transformOrigin:"50% 50%"});

		var randomDuration = 1 + randomNumber(2, 3),
			randomOpacity = randomNumber(10, 50) * 0.01;

		tl1.staggerTo(singArray, .5, {autoAlpha:1}, 2, "+=4")
		.to(overlay2, .5, {autoAlpha:1}, "-=10.5")
		.to(gallery, .5, {autoAlpha:0}, "+=2")
		.to(overlay2, .5, {autoAlpha:0}, "-=.5");


		tl2.staggerTo(barsArray, randomDuration, {xPercent:randomNumber(-10, 1), scaleX:randomNumber(1, 2 * .01), autoAlpha: randomOpacity, yoyo:true, repeat:-1, ease:Sine.easeInOut}, 0.75);
		tl2.play(10);



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
			return Math.floor(Math.random() * (max - min + 1)) + min;
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
