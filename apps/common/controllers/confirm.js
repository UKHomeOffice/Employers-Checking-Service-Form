'use strict';

var util = require('util');
var _ = require('underscore');

var BaseController = require('../../../lib/base-controller');
var Model = require('../models/email');

var ErrorClass = require('../../../lib/base-error');

var ConfirmController = function ConfirmController() {
  BaseController.apply(this, arguments);
};

util.inherits(ConfirmController, BaseController);

var serviceMap = {
  //'/not-arrived/confirm': function notArrived() {
  //  return {
  //    template: 'delivery',
  //    subject: 'Form submitted: Your BRP hasn\'t arrived'
  //  };
  //},
  //'/correct-mistakes/confirm': function correctMistakes() {
  //  return {
  //    template: 'error',
  //    subject: 'Form submitted: Report a problem with your new BRP'
  //  };
  //},
  //'/lost-stolen-damaged/confirm': function lostStolenDamaged(data) {
  //  var suffix = (data['inside-uk'] === 'yes') ? '-uk' : '-abroad';
  //  return {
  //    template: 'lost-or-stolen' + suffix,
  //    subject: 'Form submitted: Report a lost or stolen BRP'
  //  };
  //},
  //'/collection/confirm': function collection() {
  //  return {
  //    template: 'collection',
  //    subject: 'Form submitted: Report a collection problem'
  //  };
  //}
};

//ConfirmController.prototype.saveValues = function saveValues(req, res, callback) {
//
//  //BaseController.prototype.saveValues.call(this, req, res, function saveModel() {
//  //  var data = _.pick(req.sessionModel.toJSON(), _.identity);
//  //  var model = new Model(data);
//  //  var service = serviceMap[req.originalUrl] && serviceMap[req.originalUrl](data);
//  //
//  //  if (service) {
//  //    model.set('template', service.template);
//  //    model.set('subject', service.subject);
//  //  } else {
//  //    throw new Error('no service found');
//  //  }
//  //
//  //  model.save(callback);
//  //});
//
//};

ConfirmController.prototype.validateField = function validateField(key, req) {
  var dataProtectionCheckBox = getValue(req, 'declaration_confirmation');
  Console.log('dataProtectionCheckBox::::========='+dataProtectionCheckBox);

  if (dataProtectionCheckBox === "UnChecked") {
    return new ErrorClass('declaration_confirmation', {
      key: 'declaration_confirmation',
      type: 'select',
      redirect: undefined
    });
  }
  return BaseController.prototype.validateField.apply(this, arguments);
};

function getValue(req, key) {
  if (req.form && req.form.values) {
    return req.form.values[key];
  }
}

module.exports = ConfirmController;
