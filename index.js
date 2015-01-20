var distance = require('turf-distance');
var point = require('turf-point');

/**
Measures the length of a LineString in the specified units.

@module turf/line-distance
@param {LineString} Line to measure
@param {String} [units=miles] can be degrees, radians, miles, or kilometers
@return {Number} Length of the LineString
@example
var line = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "LineString",
    "coordinates": [
      [
        -77.0316696166992,
        38.878605901789236
      ],
      [
        -77.02960968017578,
        38.88194668656296
      ],
      [
        -77.02033996582031,
        38.88408470638821
      ],
      [
        -77.02566146850586,
        38.885821800123196
      ],
      [
        -77.02188491821289,
        38.88956308852534
      ],
      [
        -77.01982498168944,
        38.89236892551996
      ]
    ]
  }
}

var length = turf.lineDistance(line, 'miles');
//=length
*/
module.exports = function (line, units) {
  var coords;
  if(line.type === 'Feature') coords = line.geometry.coordinates;
  else if(line.type === 'LineString') coords = line.geometry.coordinates;
  else throw new Error('input must be a LineString Feature or Geometry');

  var travelled = 0;
  for(var i = 0; i < coords.length - 1; i++) {
    travelled += distance(point(coords[i]), point(coords[i+1]), units);
  }
  return travelled;
}