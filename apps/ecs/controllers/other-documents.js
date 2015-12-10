'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var OtherDocsController = function OtherDocsController() {
    BaseController.apply(this, arguments);
};

util.inherits(OtherDocsController, BaseController);

OtherDocsController.prototype.getValues = function getValues(req, res, callback) {
    this.options.backLink = 'when-did-they-start';
    BaseController.prototype.getValues.call(this, req, res, callback);
};

module.exports = OtherDocsController;