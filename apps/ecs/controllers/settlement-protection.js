'use strict';

var util = require('util');
var BaseController = require('hof').controllers.base;

var SettlementProtectionController = function SettlementProtectionController() {
    BaseController.apply(this, arguments);
};

util.inherits(SettlementProtectionController, BaseController);

SettlementProtectionController.prototype.saveValues = function saveValues(req, res, callback) {
    var applicationId = req.sessionModel.get('ongoing-application-id-number');
    var originalDoc = req.sessionModel.get('original-document');

    if (applicationId !== undefined) {
        /* For changing answers */
        req.sessionModel.unset('ongoing-application-id-number');
    } else if (originalDoc !== undefined) {
        req.sessionModel.unset('original-document');
    }

    BaseController.prototype.saveValues.apply(this, arguments);
}

module.exports = SettlementProtectionController;