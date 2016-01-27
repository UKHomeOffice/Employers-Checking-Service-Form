'use strict';

var moment = require('moment');

module.exports = {
    '/': {
        template: 'ecs-application.html',
        fields: [
            'eea-passport'
        ],
        next: '/work-for-you',
        forks: [
            {
                target: '/check-not-needed',
                condition: function checkForOptionY(req) {
                    return req.form.values['eea-passport'] === "Yes";
                }
            }
        ]
    },
    '/check-not-needed': {
        prereqs: ['/ecs-application'],
        backLink: '/ecs-application'
    },
    '/work-for-you': {
        fields: [
            'work-for-you'
        ],
        next: '/other-documents',
        forks: [
            {
                target: '/when-did-they-start',
                condition: function checkForOptionY(req) {
                    return req.form.values['work-for-you'] === 'Yes';
                }
            }
        ],
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
        next: '/other-documents',
        forks: [
            {
                target: '/tupe-transfer',
                condition: function afterDate(req) {
                    var a = moment(req.form.values['when-did-they-start'], 'DD-MM-YYYY');
                    var b = moment('01-03-2008', 'DD-MM-YYYY');
                    return a.isBefore(b);
                }
            }
        ],
        prereqs: ['/work-for-you'],
        backLink: 'work-for-you'
    },
    '/tupe-transfer': {
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
        backLink: 'when-did-they-start'
    },
    '/not-tupe-transfer-error':{
        prereqs: ['/tupe-transfer'],
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
        forks: [
            {
                target: '/tupe-transfer-error',
                condition: function afterDate(req) {
                    var a = moment(req.form.values['tupe-transfer-date'], 'DD-MM-YYYY');
                    var b = moment('01-03-2008', 'DD-MM-YYYY');
                    return a.isBefore(b);
                }
            }
        ],
        next: '/other-documents',
        prereqs: ['/tupe-transfer-error'],
        backLink: 'tupe-transfer'
    },
    '/tupe-transfer-error':{
        prereqs: ['/tupe-transfer-date'],
        backLink: 'tupe-transfer-date'
    },
    '/other-documents': {
        fields: [
            'other-docs'
        ],
        next: '/settlement-protection',
        forks: [
            {
                target: '/ongoing-application-id',
                condition: function checkForOptionA(req) {
                    return req.form.values['other-docs'] === "appeal-leave" ||
                        req.form.values['other-docs'] === "no-time" ||
                        req.form.values['other-docs'] === "transfer-visa" ||
                        req.form.values['other-docs'] === "brp-replace";
                }
            },
            {
                target: '/original-document',
                condition: function checkForOptionB(req) {
                    return req.form.values['other-docs'] === "application-cert" ||
                        req.form.values['other-docs'] === "app-reg-card";
                }
            }
        ],
        backLinks: ['work-for-you', 'tupe-transfer-date', 'when-did-they-start'],
    },
    '/original-document':{
        fields: [
            'original-document'
        ],
        next: '/must-seen-original-document',
        forks: [
            {
                target: '/arc-card-details',
                condition: function docAndARC(req) {
                    return req.form.values['original-document'] === "Yes"
                        && req.sessionModel.get('other-docs') === "app-reg-card";
                }
            },
            {
                target: '/ongoing-application-id',
                condition: function docAndOngoingApp(req) {
                    return req.form.values['original-document'] === "Yes"
                        && req.sessionModel.get('other-docs') !== "app-reg-card";
                }
            }
        ],
        prereqs: ['/other-documents'],
        backLinks: ['other-documents']
    },
    //BackLink not working
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
        next: '/conduct-right-work',
        forks: [
            {
                target: '/insufficient-information',
                condition: function checkForOptionN(req) {
                    return req.form.values['settlement-protection'] === "No";
                }
            },
        ],
        prereqs: ['/other-documents'],
        backLink: 'other-documents',
    },
    '/insufficient-information':{
        prereqs: ['/settlement-protection'],
        backLinks: ['settlement-protection']
    },
    '/ongoing-application-id': {
        fields: [
            'ongoing-application-id-number'
        ],
        next: '/conduct-right-work',
        prereqs: ['/other-documents', '/original-document'],
        backLinks: ['other-documents', 'original-document']
    },
    '/conduct-right-work':{
        next: '/employee-details',
        prereqs : ['/arc-card-details','/settlement-protection','/ongoing-application-id'],
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
        fields:[
            'declaration_confirmation'
        ],
        controller: require('../common/controllers/confirm'),
        next: '/confirmation',
        backLink: 'confirm'
    },
    '/confirmation': {
        controller: require('../common/controllers/confirmation'),
        backLink: 'data-protection-declaration'
    }
}