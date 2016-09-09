/** munge test results for easier comparison
* not used as an optimisation, default or otherwise
* mutates passed-in object
*/

var _ = require('lodash');
var common = require('./common.js');

module.exports = {

	munge : function(src,options) {
		if ((!src.securityDefinitions) || (Object.keys(src.securityDefinitions).length<=0)) {
			delete src.securityDefinitions;
			src.securityDefinitions = {}; // forces add at end of properties
		}

		common.forEachAction(src,function(action){
			if (!action.produces) {
				action.produces = src.produces;
			}
			if (!action.consumes) {
				action.consumes = src.consumes;
			}

			var produces = _.cloneDeep(action.produces);
			var consumes = _.cloneDeep(action.consumes);
			delete action.produces;
			delete action.consumes;
			action.produces = produces;
			action.consumes = consumes;

		});

		return src;
	}

};