// voterartifacts.js

require('fs');

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
    
	};
    }
}

module.exports = VoterArtifacts;
