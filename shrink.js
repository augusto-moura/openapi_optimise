var fs = require('fs');
var path = require('path');
var opt = require('./schema_optimise.js');

if (process.argv.length>2) {
	var infile = process.argv[2];
	var src = require(path.resolve(infile));

	var dest = opt.shrink(src,{});

	var outfile = (process.argv.length>3 ? process.argv[3] : '');

	if (outfile) {
		fs.writeFileSync(outfile,JSON.stringify(dest,null,'\t'),'utf8');
	}
	else {
		console.log(JSON.stringify(dest,null,'\t'));
	}
}
else {
	console.log('Usage: shrink {infile} [{outfile}]');
}