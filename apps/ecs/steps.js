'use strict';

module.exports = {
    '/': {
        template: 'ecs-application.html',
        controller: require('./controllers/eea-passport'),
        fields: [
            'eea-passport'
        ],
        next: '/check-not-needed'
    },
    '/check-not-needed': {
        template: 'check-not-needed.html',
        backLink: '/ecs-application'
    },
    '/work-for-you': {
        template: 'work-for-you.html',
        controller: require('./controllers/work-for-you'),
        fields: [
            'work-for-you'
        ],
        next: '/other-documents',
        backLink: '/ecs-application'
    },
    '/when-did-they-start': {
        template: 'when-did-they-start.html',
        controller: require('./controllers/when-did-they-start'),
        fields: [
            'when-did-they-start',
            'when-did-they-start-day',
            'when-did-they-start-month',
            'when-did-they-start-year',
        ],
        next: '/other-documents',
        backLink: '/ecs-application/work-for-you'
    },
    '/other-documents': {
        template: 'other-documents.html',
        controller: require('./controllers/other-documents'),
        fields: [
            'other-docs'
        ],
        next: '/hello',
        backLink: '/ecs-application/work-for-you'
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