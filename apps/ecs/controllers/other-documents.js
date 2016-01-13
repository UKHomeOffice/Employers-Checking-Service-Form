'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('../../../lib/base-controller');

var OtherDocsController = function OtherDocsController() {
    BaseController.apply(this, arguments);
};

util.inherits(OtherDocsController, BaseController);

function removeValueFromSession(req) {

    var sessionModel = req.sessionModel.attributes;
    _.each(sessionModel, function(value, key) {
        if (key.indexOf('when-did-they-start') >= 0) {
            delete req.sessionModel.attributes[key];
        }
    });
}

function getOtherDocsStep(next, otherDocsValue) {
    if (otherDocsValue === 'appeal-leave' || otherDocsValue === 'no-time'
        || otherDocsValue === 'transfer-visa' || otherDocsValue === 'brp-replace') {
        next = 'ongoing-application-id';
    } else if (otherDocsValue === 'application-cert' || otherDocsValue === 'app-reg-card') {
        next = 'original-document';
    } else if (otherDocsValue === 'none-above') {
        next = 'settlement-protection';
    }
    return next;
}

function getBackLink(req) {
    if(req.sessionModel.get('work-for-you') === 'No') {

        /* Remove the when-did-they-start date if user has gone back */
        if (!_.isUndefined(req.sessionModel.get('when-did-they-start'))) {
            removeValueFromSession(req);
        }

        return 'work-for-you';

    } else if (req.sessionModel.get('work-for-you') === 'Yes'){
        return 'when-did-they-start';
    }
}

OtherDocsController.prototype.getValues = function getValues(req, res, callback) {
    res.locals.backLink = getBackLink(req)
    BaseController.prototype.getValues.call(this, req, res, callback);
};

OtherDocsController.prototype.getNextStep = function getNextStep(req) {
    var next = BaseController.prototype.getNextStep.apply(this, arguments);
    var otherDocsValue = req.sessionModel.get('other-docs');

    next = getOtherDocsStep(next, otherDocsValue);
    this.options.next = next;
    return next;
};

module.exports = OtherDocsController;