'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var WhenDidTheyStartController = function WhenDidTheyStartController() {
    BaseController.apply(this, arguments);
};

util.inherits(WhenDidTheyStartController, BaseController);

WhenDidTheyStartController.prototype.saveValues = function WorkForYouControllerSaveValues(req, res, callback) {
    /* Get sessionModel and add new values to it */
    var formValues = req.form.values;
    var sessionModel = req.sessionModel.get('report');

    /* Check of formValue already exists. Delete it then add new one. */
    var valueIndex;
    _.each(sessionModel, function(object, index) {
        if (object.hasOwnProperty('when-did-they-start')) {
            valueIndex = index;
        }
    });
    sessionModel.splice(valueIndex, 1);

    sessionModel.push(formValues);
    req.sessionModel.set('report', sessionModel);

    /* Change back button route */
    this.options.backLink = 'ecs-application/when-did-they-start';
    return BaseController.prototype.saveValues.apply(this, arguments);
};

module.exports = WhenDidTheyStartController;