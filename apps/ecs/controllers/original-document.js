'use strict';

var util = require('util');
var BaseController = require('hof').controllers.base;

var OriginalDocumentController = function OriginalDocumentController() {
    BaseController.apply(this, arguments);
};

util.inherits(OriginalDocumentController, BaseController);

OriginalDocumentController.prototype.getValues = function getValues(req, res, callback) {
    res.locals.backLink = 'other-documents';
    BaseController.prototype.getValues.call(this, req, res, callback);
}

module.exports = OriginalDocumentController;