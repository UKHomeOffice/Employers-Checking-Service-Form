'use strict';

var util = require('util');
var DateController = require('hof').controllers.date;

var WhenDidTheyStartController = function WhenDidTheyStartController() {
    this.dateKey = 'when-did-they-start';
    DateController.apply(this, arguments);
};

util.inherits(WhenDidTheyStartController, DateController);

WhenDidTheyStartController.prototype.saveValues = function saveValues(req, res, callback) {
    var tupeTranfer = req.sessionModel.get('tupe-transfer');
    if (tupeTranfer) {
        /* For changing answers */
        req.sessionModel.unset('tupe-transfer');
        req.sessionModel.unset('tupe-transfer-date');
    }
    DateController.prototype.saveValues.apply(this, arguments);
}

module.exports = WhenDidTheyStartController;
