'use strict';

var util = require('util');
var DateController = require('hof').controllers.date;

var WhenDidTheyStartController = function WhenDidTheyStartController() {
    this.dateKey = 'when-did-they-start';
    DateController.apply(this, arguments);
};

util.inherits(WhenDidTheyStartController, DateController);

module.exports = WhenDidTheyStartController;
