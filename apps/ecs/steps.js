'use strict';

module.exports = {
    //'/': {
    //    template: 'ecs-application.html'
    //},
    '/': {
        controller: require('../common/controllers/start'),
        next: '/ongoing-application-id'
    },
    '/ongoing-application-id': {
        fields: [
            'ongoing-application-id-number'
        ],
        next: '/conduct-right-work'
    },
    '/conduct-right-work':{
        backLink: 'ongoing-application-id',
        next: '/employee-details'
    },
    '/employee-details': {
        controller: require('../common/controllers/personal-details'),
        fields: [
            'employee-name-text',
            'date-of-birth',
            'date-of-birth-day',
            'date-of-birth-month',
            'date-of-birth-year',
            'uk-address-house-number',
            'uk-address-street',
            'uk-address-town',
            'uk-address-county',
            'uk-address-postcode',
            'job-title',
            'hours-per-week'
        ],
        backLink: 'conduct-right-work',
        next: '/employer-details'
    }
}