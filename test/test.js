'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
chai.should();
var Guid = require('../index.js');
var sessionID = new Guid().NewGuid(); //ex: 47000834-9b80-6dc9-8384-8fa0f04b0176
describe('guid generation', function() {
	it('should create a valid guid', function(done) {
		var spl = sessionID.split('-');
		spl.length.should.equal(5);
		spl[0].length.should.equal(8);
		spl[1].length.should.equal(4);
		spl[2].length.should.equal(4);
		spl[3].length.should.equal(4);
		spl[4].length.should.equal(12);
		done();
	});
});