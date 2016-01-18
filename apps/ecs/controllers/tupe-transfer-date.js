'use strict';

var util = require('util');
var DateController = require('../../../lib/date-controller');

var TupeTransferDateController = function TupeTransferDateController() {
    this.dateKey = 'tupe-transfer-date';
    DateController.apply(this, arguments);
};

util.inherits(TupeTransferDateController, DateController);

module.exports = TupeTransferDateController;