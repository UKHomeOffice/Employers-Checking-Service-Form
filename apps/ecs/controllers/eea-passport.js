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

EeaPassportController.prototype.saveValues = function eeaPassportSaveValues(req, res, callback) {
    /* Add values to session Model*/
    var array = [];
    var formValues = req.form.values;
    array.push(formValues);

    req.sessionModel.set('report', array);

    return BaseController.prototype.saveValues.apply(this, arguments);
};

module.exports = EeaPassportController;