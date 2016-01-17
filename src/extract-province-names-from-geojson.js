var d3 = require('d3');
var fs = require('fs');
var _ = require('lodash');
var util = require('./util.js');
var json2csv = require('json2csv');

var inputDir = __dirname + '/input';
var outputDir = __dirname + '/output';

var mapData = require(inputDir + '/vietnam.json');

var provinces = mapData['features'].map(function(d) {
	return {
		'province': d['properties']['NAME_1']
	};
})

console.log('provinces', provinces);

var fields = ['province'];

json2csv({ data: provinces, fields: fields }, function(err, csv) {
  if (err) console.log(err);
  fs.writeFile('provinceNamesFromGeoJSON.csv', csv, function(err) {
    if (err) throw err;
    console.log('file saved');
  });
});