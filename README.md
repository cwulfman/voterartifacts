# Rosie Voting Simulator

Rosie will include a class that simulates all the activity relating to voters and their artifacts (precincts, ballots, affidavits, CVRs) that will be implemented in the full ABC app.

The class, VoterArtifacts, has a constructor that takes a single string parameter, intended to be the voter’s last name. 

`artifacts = new VoterArtifacts(‘Adams’);`

The implementation of the class uses the last name as a seed to generate artifacts for the voter -- artifacts needed by other parts of Rosie. The rest of the class implementation consists of methods to get the voter’s artifacts, all strings: precinct name, ballot, affidavit, and CVR. 
The precinct is an ordinary short string suitable for use in the UI. The CVR string’s content is XML. The ballot and affidavit strings’ contents are base64 encoding of a PDF file.

```
console.log(artifacts.precinct);
// “precinct_1”

console.log(artifacts.cvr);
//  “<?xml …”

console.log(artifacts.ballot);
//”JVBRi0x…”

console.log(artifacts.affidavit);
//”JVRBRi0x…”
```
