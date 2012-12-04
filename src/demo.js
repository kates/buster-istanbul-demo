var somelib = require('../lib/somelib');

module.exports = {
	add: function(a, b) {
		return somelib.somefunc(a) + somelib.somefunc(b);
	},
	mul: function(a, b) {
		return somelib.somefunc(a) * somelib.somefunc(b);
	}
};