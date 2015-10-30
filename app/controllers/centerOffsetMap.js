function handleOpen() {
	$.centerOffsetMap.removeEventListener('open', handleOpen);
	var imageView = Ti.UI.createImageView({
	  image:'/appicon.png'
	});
	var annotation = Alloy.Globals.Map.createAnnotation({
	    latitude: 40.7141667,
	    longitude: -74.0063889,
	    centerOffset: { // Improvement introduced with https://github.com/appcelerator-modules/ti.map/pull/79
	    	x: 0,
	    	y: 0
	    },
	    customView: imageView
	});
	var annotations = [
		annotation
	];

	var mapview = Alloy.Globals.Map.createView({
		annotations: annotations,
	});

	var circle = Alloy.Globals.Map.createCircle({
		strokeColor: 'green',
		radius: 1500,
		center: {
		    latitude: 40.7141667,
		    longitude: -74.0063889
		}
	});
	mapview.addCircle(circle);

	$.centerOffsetMap.add(mapview);
}

$.centerOffsetMap.addEventListener('open', handleOpen);
$.centerOffsetMap.addEventListener('close', handleOpen);