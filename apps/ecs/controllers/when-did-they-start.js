'use strict';

var util = require('util');
var DateController = require('../../../lib/date-controller');

var moment = require('moment');
var dateFormat = 'DD-MM-YYYY';

var WhenDidTheyStartController = function WhenDidTheyStartController() {
    this.dateKey = 'when-did-they-start';
    DateController.apply(this, arguments);
};

util.inherits(WhenDidTheyStartController, DateController);

WhenDidTheyStartController.prototype.getNextStep = function getNextStep(req) {
    var startDate = getValue(req, 'when-did-they-start');
    var next;
    if (moment(startDate, dateFormat).isAfter(moment('29-02-2008', dateFormat))) {
        next = 'other-documents';
    } else {
        next = 'tupe-transfer';
    }
    this.options.next = next;
    return next;
};

function getValue(req, key) {
    if (req.form && req.form.values) {
        return req.form.values[key];
    }
}

module.exports = WhenDidTheyStartController;