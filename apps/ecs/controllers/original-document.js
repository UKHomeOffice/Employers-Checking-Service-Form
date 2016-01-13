'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var OriginalDocumentController = function OriginalDocumentController() {
    BaseController.apply(this, arguments);
};

util.inherits(OriginalDocumentController, BaseController);

//function removeValueFromSession(req) {
//
//    var sessionModel = req.sessionModel.attributes;
//    _.each(sessionModel, function(value, key) {
//        if (key.indexOf('when-did-they-start') >= 0) {
//            delete req.sessionModel.attributes[key];
//        }
//    });
//}

//function getOtherDocsStep(next, otherDocsValue) {
//    if (otherDocsValue === 'appeal-leave' || otherDocsValue === 'no-time'
//        || otherDocsValue === 'transfer-visa' || otherDocsValue === 'brp-replace') {
//        next = 'ongoing-application-id';
//    } else if (otherDocsValue === 'application-cert' || otherDocsValue === 'app-reg-card') {
//        next = 'original-document';
//    } else if (otherDocsValue === 'none-above') {
//        next = 'settlement-protection';
//    }
//    return next;
//}
//
//function getBackLink(req) {
//    if(req.sessionModel.get('work-for-you') === 'No') {
//
//        /* Remove the when-did-they-start date if user has gone back */
//        if (!_.isUndefined(req.sessionModel.get('when-did-they-start'))) {
//            removeValueFromSession(req);
//        }
//
//        return 'work-for-you';
//
//    } else if (req.sessionModel.get('work-for-you') === 'Yes'){
//        return 'when-did-they-start';
//    }
//}

//OriginalDocumentController.prototype.getValues = function getValues(req, res, callback) {
//    res.locals.backLink = getBackLink(req)
//    BaseController.prototype.getValues.call(this, req, res, callback);
//};

OriginalDocumentController.prototype.getNextStep = function getNextStep(req) {
    var next = BaseController.prototype.getNextStep.apply(this, arguments);
    var originalDocument = req.sessionModel.get('original-document');
console.log('value is:::::'+ originalDocument);
    if (originalDocument === 'No') {
        next = 'must-seen-original-document';
    }else {
        next = 'ongoing-application-id';
    }

    this.options.next = next;
    return next;
};

module.exports = OriginalDocumentController;