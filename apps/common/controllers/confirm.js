'use strict';

var util = require('util');
var _ = require('underscore');

var BaseController = require('../../../lib/base-controller');
var Model = require('../models/email');
var Logger = require('../../../lib/logger');
var ErrorClass = require('../../../lib/base-error');

var ConfirmController = function ConfirmController() {
  this.dateKey = 'declaration_confirmation';
  BaseController.apply(this, arguments);
};

util.inherits(ConfirmController, BaseController);

ConfirmController.prototype.saveValues = function saveValues(req, res, callback) {
    var data = _.pick(req.sessionModel.toJSON(), _.identity);
    var dataArray = [];
    dataArray.push(data);

    if (dataArray) {
        dataArray.forEach(function sendEachReport(d) {
            var model = new Model(d);
            var service = {
                template: 'submit',
                subject: 'something'
            };

            if (service) {
                model.set('template', service.template);
                model.set('subject', service.subject);
                Logger.info('service is set');
            } else {
                throw new Error('no service found');
            }
            model.save(callback);

        });
    }
}

ConfirmController.prototype.validateField = function validateField(key, req) {
  var dataProtectionCheckBox = getValue(req, 'declaration_confirmation');
  if (dataProtectionCheckBox !== "on") {
    return new ErrorClass('declaration_confirmation', {
      key: 'declaration_confirmation',
      type: 'select',
      redirect: undefined
    });
  }
  return BaseController.prototype.validateField.apply(this, arguments);
};

function getValue(req, key) {
  if (req.form){
    if(req.form.values) {
      return req.form.values[key];
    }
  }
}

module.exports = ConfirmController;
