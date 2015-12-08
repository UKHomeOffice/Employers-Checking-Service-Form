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
        fields: [
          'employee-name-text'
        ],
        backLink: 'conduct-right-work',
        next: '/employer-details'
    }
}