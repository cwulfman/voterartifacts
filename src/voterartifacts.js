const fs = require('fs');
const path = require('path');


let pathRoot = path.resolve(__dirname, 'assets/files')

class VoterArtifacts {
    constructor(lastName='Z') {
	let key = lastName.substring(0,1).toUpperCase();
	switch(key) {
	case 'A':
	    this.precinctId = "precinct_1";
	    this.precinct = "port precinct";
	    break;
	case 'B':
	    this.precinctId = "precinct_2";
	    this.precinct = "bedrock precinct";
	    break;
	case 'C':
	    this.precinctId = "precinct_3";
	    this.precinct = "downtown precinct";
	    break;
	default:
	    this.precinctId = "precinct_4";
	    this.precinct = "spacetown precinct";

	};
    }

    get cvr() {
	return fs.readFileSync(path.resolve(pathRoot, this.precinctId, 'cvr.xml'), 'utf-8')
    }

    get affidavit() {
	return fs.readFileSync(path.resolve(pathRoot, this.precinctId, 'affidavit.pdf'), 'base64')
    }

    get ballot() {
	return fs.readFileSync(path.resolve(pathRoot, this.precinctId, 'ballot.pdf'), 'base64')
    }
}

module.exports = VoterArtifacts;
