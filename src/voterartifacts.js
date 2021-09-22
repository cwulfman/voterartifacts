const fs = require('fs');
const path = require('path');


let pathRoot = path.resolve(__dirname, 'assets/files')

class VoterArtifacts {
    constructor(lastName) {
	let key = lastName.substring(0,1).toUpperCase();
	switch(key) {
	case 'A':
	    this.precinct = "precinct_1";
	    break;
	case 'B':
	    this.precinct = "precinct_2";
	    break;
	case 'C':
	    this.precinct = "precinct_3";
	    break;
	case 'D':
	    this.precinct = "precinct_4";
	    break;
	default:
	    throw new Error("invalid lastName");
	};
    }

    get cvr() {
	return fs.readFileSync(path.resolve(pathRoot, this.precinct, 'cvr.xml'), 'utf-8')
    }

    get affidavit() {
	return fs.readFileSync(path.resolve(pathRoot, this.precinct, 'affidavit.pdf'), 'base64')
    }

    get ballot() {
	return fs.readFileSync(path.resolve(pathRoot, this.precinct, 'ballot.pdf'), 'base64')
    }
}

module.exports = VoterArtifacts;
