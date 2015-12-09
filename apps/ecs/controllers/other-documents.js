'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var OtherDocsController = function OtherDocsController() {
    BaseController.apply(this, arguments);
};

util.inherits(OtherDocsController, BaseController);

module.exports = OtherDocsController;