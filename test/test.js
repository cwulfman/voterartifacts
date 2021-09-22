const VoterArtifacts = require('../src/voterartifacts');
const expect = require('chai').expect;

describe('VoterArtifacts', function () {
    describe('constructor', function () {
	it('creates an object based on the last name parameter', function() {
	    expect(new VoterArtifacts('Allen').precinct).to.equal('precinct_1');
	    expect(new VoterArtifacts('Benta').precinct).to.equal('precinct_2');
	    expect(new VoterArtifacts('Cho').precinct).to.equal('precinct_3');
	    expect(new VoterArtifacts('Divinanda').precinct).to.equal('precinct_4');
	});
    });
});
