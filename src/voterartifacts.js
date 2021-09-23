const fs = require('fs');
const path = require('path');


let pathRoot = path.resolve(__dirname, 'assets/files')

class VoterArtifacts {
    constructor(lastName='Z') {
	let key = lastName.substring(0,1).toUpperCase();
	switch(key) {
	case 'A':
	    this.precinctId = "precinct_1";
	    this.precinct = "Precinct 1 Spaceport";
	    break;
	case 'B':
	    this.precinctId = "precinct_2";
	    this.precinct = "Precinct 2 Bedrock";
	    break;
	case 'C':
	    this.precinctId = "precinct_3";
	    this.precinct = "Precinct 3 Downtown";
	    break;
	default:
	    this.precinctId = "precinct_4";
	    this.precinct = "Precinct 4 Spacetown";

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
