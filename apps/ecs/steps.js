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
    }
}