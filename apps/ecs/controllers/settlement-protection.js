'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var SettlementProtection = function SettlementProtection() {
    BaseController.apply(this, arguments);
};

util.inherits(SettlementProtection, BaseController);

SettlementProtection.prototype.getNextStep = function getNextStep(req) {
    var next = BaseController.prototype.getNextStep.apply(this, arguments);
    var settlementProtection = req.sessionModel.get('settlement-protection');
console.log('settlementProtection value is : '+settlementProtection);
    if (settlementProtection === 'No') {
        next = "insufficient-information";
    } else  {
        next = "conduct-right-work";
    }
    this.options.next = next;

    return next;
};

module.exports = SettlementProtection;