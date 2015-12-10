'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var EeaPassportController = function ReasonController() {
    BaseController.apply(this, arguments);
};

util.inherits(EeaPassportController, BaseController);


EeaPassportController.prototype.getNextStep = function getNextStep(req) {
    var next = BaseController.prototype.getNextStep.apply(this, arguments);
    var eeaPassportValue = req.sessionModel.get('eea-passport');

    if (eeaPassportValue === 'Yes') {
        next = "check-not-needed";
    } else if (eeaPassportValue === 'No') {
        next = "work-for-you"
    }

    return next;
};

module.exports = EeaPassportController;