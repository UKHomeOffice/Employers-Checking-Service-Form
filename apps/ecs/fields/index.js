'use strict';

var _ = require('underscore');

module.exports = _.extend(
    require('./eea-passport'),
    require('./ongoing-application-id'),
    require('./employee-details'),
    require('./work-for-you'),
    require('./when-did-they-start'),
    require('./tupe-transfer'),
    require('./tupe-transfer-date'),
    require('./other-documents'),
    require('./employer-details'),
    require('./settlement-protection'),
    require('./original-document'),
    require('./arc-card-details')

);
