function handleOpen() {
	$.defaultMap.removeEventListener('open', handleOpen);
	var imageView = Ti.UI.createImageView({
	  image:'/appicon.png'
	});
	var annotation = Alloy.Globals.Map.createAnnotation({
	    latitude: 40.7141667,
	    longitude: -74.0063889,
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
	$.defaultMap.add(mapview);
}

$.defaultMap.addEventListener('open', handleOpen);
$.defaultMap.addEventListener('close', handleOpen);
