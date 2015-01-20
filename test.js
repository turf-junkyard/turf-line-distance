var test = require('tape');
var fs = require('fs');
var lineDistance = require('./');

var route = JSON.parse(fs.readFileSync(__dirname + '/fixtures/route.geojson'));

test('turf-line-distance', function (t) {
	console.log(lineDistance, 'miles')
	
	t.end();
});