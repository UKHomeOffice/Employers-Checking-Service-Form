'use strict';

var util = require('util');
var BaseController = require('hof').controllers.base;

var OnGoingAppController = function OnGoingAppController() {
    BaseController.apply(this, arguments);
};

util.inherits(OnGoingAppController, BaseController);

OnGoingAppController.prototype.saveValues = function saveValues(req, res, callback) {
    var arcNumber = req.sessionModel.get('arc-serial-number');
    var ifbNumber = req.sessionModel.get('ifb-ref-number');
    var otherdocs = req.sessionModel.get('other-docs');
    var originaldoc = req.sessionModel.get('original-document');
    var settlement = req.sessionModel.get('settlement-protection');
    var applicationCertificate = 'application-cert'

    if (arcNumber !== undefined || ifbNumber !== undefined) {
        /* For changing answers */
        req.sessionModel.unset('arc-serial-number');
        req.sessionModel.unset('ifb-ref-number');
        req.sessionModel.unset('original-document');
    } else if (otherdocs !== applicationCertificate && originaldoc !==undefined) {
        req.sessionModel.unset('original-document');
    } else if (settlement !== undefined) {
        req.sessionModel.unset('settlement-protection');
    }

    BaseController.prototype.saveValues.apply(this, arguments);
}

module.exports = OnGoingAppController;