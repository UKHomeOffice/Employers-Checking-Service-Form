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
    console.log('req.form.values[settlement-protection]::'+ req.form.values['settlement-protection']);
    console.log('settlementProtection value is : '+settlementProtection);
    if (settlementProtection === 'No') {
        next = "insufficient-information";
    } else if (settlementProtection === 'Yes'){
        next = "conduct-right-work";
    }
    console.log('next value is :'+ next);
    this.options.next = next;

    return next;
};

module.exports = SettlementProtection;