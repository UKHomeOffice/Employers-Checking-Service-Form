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
        backLink: '/ecs-application/work-for-you'
    },
    '/original-document':{
        controller: require('./controllers/original-document'),
        template: 'original-document.html',
        fields: [
            'original-document'
        ],
        backLink: 'other-documents'
    },
    '/must-seen-original-document':{
        template: 'must-seen-original-document.html',
        backLink: 'original-document'
    },
    '/settlement-protection':{
        template: 'settlement-protection.html',
        fields: [
            'settlement-protection'
        ],
        next: '/conduct-right-work',
        backLink: 'other-documents'
    },
    '/ongoing-application-id': {
        fields: [
            'ongoing-application-id-number'
        ],
        next: '/conduct-right-work',
        backLink: '/ecs-application/other-documents'
    },
    '/conduct-right-work':{
        //TODO
        backLink: 'ongoing-application-id',
        next: '/employee-details'
    },
    '/employee-details': {
        controller: require('../common/controllers/personal-details'),
        fields: [
            'employee-name-text',
            'nationality',
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
    },
    '/employer-details':{
        controller: require('./controllers/employer-details'),
        fields:[
            'business-name',
            'type-of-business',
            'employer-uk-address-house-number',
            'employer-uk-address-street',
            'employer-uk-address-town',
            'employer-uk-address-county',
            'employer-uk-address-postcode',
            'employer-contact-name',
            'employer-job-title',
            'employer-contact-telephone',
            'employer-contact-email-address',
            'employer-confirm-email-address'
        ],
        backList: 'employee-details',
        next: '/confirm'
    },
    '/confirm':{
        controller: require('../common/controllers/confirm'),
        backLink: 'employer-details',
        next: '/confirmation'
    },
    '/confirmation': {
        controller: require('../common/controllers/confirmation'),
        backLink: false
    }

}