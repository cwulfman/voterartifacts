const VoterArtifacts = require('../src/voterartifacts');
const expect = require('chai').expect;

describe('VoterArtifacts', function () {
    describe('constructor', function () {
	it('creates an object based on the last name parameter', function() {
	    expect(new VoterArtifacts('Allen').precinct).to.equal('precinct_1');
	    expect(new VoterArtifacts('Benta').precinct).to.equal('precinct_2');
	    expect(new VoterArtifacts('Cho').precinct).to.equal('precinct_3');
	});
	it('assigns precinct_4 by default', function() {
	    expect(new VoterArtifacts('Divinanda').precinct).to.equal('precinct_4');
	    expect(new VoterArtifacts('Zoolander').precinct).to.equal('precinct_4');
	    expect(new VoterArtifacts().precinct).to.equal('precinct_4');
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
