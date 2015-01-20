turf-line-distance
---
[![Build Status](https://travis-ci.org/Turfjs/turf-line-distance.svg?branch=master)](https://travis-ci.org/Turfjs/turf-line-distance)

Measures the length of a LineString in the specified units.

###Install

```sh
npm install turf-line-distance
```

###Parameters

|name|description|
|---|---|
|line|LineString feature or geometry|
|units|'miles', 'kilometers', 'degrees' or 'radians'|

###Usage

```js
lineDistance(line, units)
```

###Example

```javascript
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

console.log(turf.lineDistance(line, 'miles'));
```
