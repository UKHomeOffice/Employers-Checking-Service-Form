'use strict';

module.exports = {
    '/': {
        template: 'ecs-application.html',
        fields: [
            'eea-passport'
        ],
        next: '/check-not-needed',
        forks: [
            {
                target: '/check-not-needed',
                condition: function checkForOptionY(req) {
                    return req.form.values['eea-passport'] === "Yes";
                }
            },
            {
                target: '/work-for-you',
                condition: function checkForOptionN(req) {
                    return req.form.values['eea-passport'] === "No";
                }
            },
        ]
    },
    '/check-not-needed': {
        backLink: '/ecs-application'
    },
    '/work-for-you': {
        controller: require('./controllers/work-for-you'),
        fields: [
            'work-for-you'
        ],
        next: '/other-documents',
        backLink: '/ecs-application'
    },
    '/when-did-they-start': {
        controller: require('./controllers/when-did-they-start'),
        fields: [
            'when-did-they-start',
            'when-did-they-start-day',
            'when-did-they-start-month',
            'when-did-they-start-year',
        ],
        //next: '/other-documents',
        backLink: 'work-for-you'
    },
    '/tupe-transfer':{
        fields: [
            'tupe-transfer',
        ],
        next: '/tupe-transfer-date',
        forks: [
            {
                target: '/not-tupe-transfer-error',
                condition: function checkForOptionN(req) {
                    return req.form.values['tupe-transfer'] === "No";
                }
            },
        ],
        backLink: 'when-did-they-start',


    },
    '/not-tupe-transfer-error':{
        backLink: 'tupe-transfer'
    },
    '/tupe-transfer-date':{
        controller: require('./controllers/tupe-transfer-date'),
        fields: [
            'tupe-transfer-date',
            'tupe-transfer-date-day',
            'tupe-transfer-date-month',
            'tupe-transfer-date-year',
        ],
        prereqs:['/other-documents','/tupe-transfer-error'],
        backLink: 'tupe-transfer'
    },
    '/tupe-transfer-error':{
        backLink: 'tupe-transfer-date'
    },
    '/other-documents': {
        controller: require('./controllers/other-documents'),
        fields: [
            'other-docs'
        ]
        //prereqs:['/ongoing-application-id'],
        //backLinks: ['work-for-you','when-did-they-start','tupe-transfer-date']
    },
    '/original-document':{
        controller: require('./controllers/original-document'),
        fields: [
            'original-document'
        ],
        backLink: 'other-documents'
    },
    '/must-seen-original-document':{
        backLink: 'original-document'
    },
    '/arc-card-details':{
        fields: [
            'arc-serial-number',
            'ifb-ref-number'
        ],
        backLink: 'original-document',
        next: '/conduct-right-work',
    },
    '/settlement-protection':{
        fields: [
            'settlement-protection'
        ],
        backLink: 'other-documents',
        next: '/conduct-right-work',
        forks: [
            {
                target: '/conduct-right-work',
                condition: function checkForOptionY(req) {
                    return req.form.values['settlement-protection'] === "Yes";
                }
            },
            {
                target: '/insufficient-information',
                condition: function checkForOptionN(req) {
                    return req.form.values['settlement-protection'] === "No";
                }
            },
        ]
    },
    '/insufficient-information':{
        prereqs:['/settlement-protection'],
        backLink: 'settlement-protection'
    },
    '/ongoing-application-id': {
        fields: [
            'ongoing-application-id-number'
        ],
        next: '/conduct-right-work',
        backLink: 'other-documents'
    },
    '/conduct-right-work':{
        next: '/employee-details',
        backLinks:['arc-card-details','settlement-protection','ongoing-application-id']

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
        backLink: 'employee-details',
        next: '/confirm'
    },
    '/confirm':{
        backLink: 'employer-details',
        next: '/data-protection-declaration'
    },
    '/data-protection-declaration':{
        controller: require('../common/controllers/confirm'),
        next: '/confirmation',
        backLink: 'confirm'
    },
    '/confirmation': {
        controller: require('../common/controllers/confirmation'),
        backLink: 'data-protection-declaration'
    }

}