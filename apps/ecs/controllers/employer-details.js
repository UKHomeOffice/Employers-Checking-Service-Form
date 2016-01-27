'use strict';

var util = require('util');
var BaseController = require('../../../lib/base-controller');
var ErrorClass = require('../../../lib/base-error');

var EmployerDetailsController = function EmployerDetailsController() {
    this.dateKey = 'employer-email-confirm-error';
    BaseController.apply(this, arguments);
};

util.inherits(EmployerDetailsController, BaseController);

EmployerDetailsController.prototype.validateField = function validateField(key, req) {

    // custom validation matching email with confirm email field

    if ((key.indexOf('employer-confirm-email-address') !== -1)) {
        if (req.form.values['employer-contact-email-address'] !== req.form.values['employer-confirm-email-address']) {
            return new ErrorClass('employer-confirm-email-address', {
                key: 'employer-confirm-email-address',
                type: 'notMatched',
                redirect: undefined
            });
        }
    }
    return BaseController.prototype.validateField.apply(this, arguments);
};

module.exports = EmployerDetailsController;
