'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var WorkForYouController = function WorkForYouController() {
    BaseController.apply(this, arguments);
};

util.inherits(WorkForYouController, BaseController);

WorkForYouController.prototype.getNextStep = function getNextStep(req) {
    var next = BaseController.prototype.getNextStep.apply(this, arguments);
    var workForYouValue = req.sessionModel.get('work-for-you');

    if (workForYouValue === 'Yes') {
        next = "when-did-they-start";
    } else if (workForYouValue === 'No') {
        req.sessionModel.unset('when-did-they-start');
        next = "other-documents";
    }

    return next;
};

module.exports = WorkForYouController;