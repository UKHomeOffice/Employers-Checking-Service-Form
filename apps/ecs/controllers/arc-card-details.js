'use strict';

var util = require('util');
var BaseController = require('hof').controllers.base;

var ArcCardDetailsController = function ArcCardDetailsController() {
    BaseController.apply(this, arguments);
};

util.inherits(ArcCardDetailsController, BaseController);

ArcCardDetailsController.prototype.saveValues = function saveValues(req, res, callback) {
    var applicationId = req.sessionModel.get('ongoing-application-id-number');

    if (applicationId !== undefined) {
        /* For changing answers */
        req.sessionModel.unset('ongoing-application-id-number');
    }

    BaseController.prototype.saveValues.apply(this, arguments);
}

module.exports = ArcCardDetailsController;