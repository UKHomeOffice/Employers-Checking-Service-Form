'use strict';

var _ = require('underscore');

module.exports = _.extend(
    require('./eea-passport'),
    require('./ongoing-application-id'),
    require('./employee-details')
);
