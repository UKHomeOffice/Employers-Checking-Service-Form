'use strict';

var util = require('util');
var BaseController = require('hof').controllers.base;

var WhenDidTheyStartController = function WhenDidTheyStartController() {
    BaseController.apply(this, arguments);
};

util.inherits(WhenDidTheyStartController, BaseController);

WhenDidTheyStartController.prototype.saveValues = function saveValues(req, res, callback) {
    var startDate = req.sessionModel.get('when-did-they-start-day');
    if (startDate) {
        req.sessionModel.unset('when-did-they-start-day');
        req.sessionModel.unset('when-did-they-start-month');
        req.sessionModel.unset('when-did-they-start-year');
        req.sessionModel.unset('when-did-they-start');

        var tupeTranfer = req.sessionModel.get('tupe-transfer');
        if (tupeTranfer) {
            req.sessionModel.unset('tupe-transfer');
            req.sessionModel.unset('tupe-transfer-date');
        }
    }
    BaseController.prototype.saveValues.apply(this, arguments);
}

module.exports = WhenDidTheyStartController;