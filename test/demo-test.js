var buster = require('buster');
var demo = require('../src/demo');

buster.testCase("Demo", {
	"add": function() {
		assert.equals(demo.add(1,2), 3);
	},
	"mul": function() {
		assert.equals(demo.mul(2,3), 6);
	}
});