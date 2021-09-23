const VoterArtifacts = require('../src/voterartifacts');
const expect = require('chai').expect;

describe('VoterArtifacts', function () {
    describe('constructor', function () {
	it('selects precinct_1 if last name begins with letter A', function() {
	    let artifact = new VoterArtifacts("Allen");
	    expect(artifact.precinctId).to.equal('precinct_1');
	    expect(artifact.precinct).to.equal('port precinct');
	});
	it('selects precinct_2 if last name begins with letter B', function() {
	    let artifact = new VoterArtifacts("Binda");
	    expect(artifact.precinctId).to.equal('precinct_2');
	    expect(artifact.precinct).to.equal('bedrock precinct');
	});
	it('selects precinct_3 if last name begins with letter C', function() {
	    let artifact = new VoterArtifacts("Cooper");
	    expect(artifact.precinctId).to.equal('precinct_3');
	    expect(artifact.precinct).to.equal('downtown precinct');
	});
	it('selects precinct_4 by default', function() {
	    let artifact = new VoterArtifacts();
	    let artifact2 = new VoterArtifacts("Zi");
	    expect(artifact.precinctId).to.equal('precinct_4');
	    expect(artifact2.precinctId).to.equal('precinct_4');
	    expect(artifact.precinct).to.equal('spacetown precinct');
	    expect(artifact2.precinct).to.equal('spacetown precinct');
	});
    });

    describe('cvr', function () {
	it('reads the proper cvr xml file into a string', function () {
	    let artifacts = new VoterArtifacts('Allen');
	    expect(artifacts.cvr.substring(0,5)).to.equal("<?xml");
	});
    });

    describe('ballot', function () {
	it('reads the proper ballot pdf file into a string', function () {
	    let artifacts = new VoterArtifacts('Benta');
	    expect(artifacts.ballot.substring(0,15)).to.equal("JVBERi0xLjQNJeL");
	});
    });

    describe('affidavit', function () {
	it('reads the proper affidavit pdf file into a string', function () {
	    let artifacts = new VoterArtifacts('Benta');
	    expect(artifacts.affidavit.substring(0,15)).to.equal("JVBERi0xLjMKJcT");
	});
    });
});
