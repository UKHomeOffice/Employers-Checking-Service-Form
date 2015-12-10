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
        next = "other-documents";
    }

    return next;
};

WorkForYouController.prototype.saveValues = function WorkForYouControllerSaveValues(req, res, callback) {
    /* Get sessionModel and add new values to it */
    var formValues = req.form.values;
    var sessionModel = req.sessionModel.get('report');

    /* Check of formValue already exists. Delete it then add new one. */
    var valueIndex;
    _.each(sessionModel, function(object, index) {
        if (object.hasOwnProperty('work-for-you')) {
            valueIndex = index;
        }
    });
    sessionModel.splice(valueIndex, 1);

    sessionModel.push(formValues);
    req.sessionModel.set('report', sessionModel);
    BaseController.prototype.saveValues.apply(this, arguments);
};

module.exports = WorkForYouController;