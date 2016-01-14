'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var OriginalDocumentController = function OriginalDocumentController() {
    BaseController.apply(this, arguments);
};

util.inherits(OriginalDocumentController, BaseController);

OriginalDocumentController.prototype.getNextStep = function getNextStep(req) {
    var next = BaseController.prototype.getNextStep.apply(this, arguments);
    var originalDocument = req.sessionModel.get('original-document');
    var otherDocsValue = req.sessionModel.get('other-docs');
console.log('value is:::::'+ originalDocument);
    if (originalDocument === 'No') {
        next = 'must-seen-original-document';
    } else if (originalDocument === 'Yes') {
        if (otherDocsValue === 'app-reg-card') {
            next = 'arc-card-details';
        } else {
            next = 'ongoing-application-id';
        }
    }
    this.options.next = next;
    return next;
};

module.exports = OriginalDocumentController;