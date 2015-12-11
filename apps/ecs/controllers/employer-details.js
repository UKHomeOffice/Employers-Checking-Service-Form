'use strict';

var util = require('util');
var BaseController = require('../../../lib/base-controller');
var ErrorClass = require('../../../lib/base-error');
var _ = require('underscore');

var EmployerDetailsController = function EmployerDetailsController() {
    this.dateKey = 'employer-email-confirm-error';
    BaseController.apply(this, arguments);
};

util.inherits(EmployerDetailsController, BaseController);

EmployerDetailsController.prototype.validateField = function validateField(key, req) {
    //TODO validate email and confirm email id same , otherwise throw
    //Please ensure the contact confirmation email address matches the contact email address.
    return BaseController.prototype.validateField.apply(this, arguments);
};

module.exports = EmployerDetailsController;
