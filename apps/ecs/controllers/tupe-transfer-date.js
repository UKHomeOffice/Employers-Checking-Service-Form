'use strict';

var util = require('util');
var DateController = require('hof').controllers.date;
var ErrorClass = require('../../../lib/base-error');

var moment = require('moment');
var dateFormat = 'DD-MM-YYYY';

var TupeTransferDateController = function TupeTransferDateController() {
    this.dateKey = 'tupe-transfer-date';
    DateController.apply(this, arguments);
};

util.inherits(TupeTransferDateController, DateController);

TupeTransferDateController.prototype.validateField = function validateField(key, req) {
    var employeeStartDate = req.sessionModel.get('when-did-they-start');
    var tupeTransferDate = getValue(req, 'tupe-transfer-date');

    if (moment(tupeTransferDate, dateFormat).isBefore(moment(employeeStartDate, dateFormat))) {
        return new ErrorClass('tupe-transfer-date', {
            key: 'tupe-transfer-date',
            type: 'inValidDate',
            redirect: undefined
        });
    }
    return DateController.prototype.validateField.apply(this, arguments);
};

function getValue(req, key) {
    if (req.form && req.form.values) {
        return req.form.values[key];
    }
}

module.exports = TupeTransferDateController;
