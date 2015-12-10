'use strict';

module.exports = {
    'work-for-you': {
        validate: 'required',
        className: ['inline', 'form-group'],
        legend: 'fields.work-for-you.legend',
        options: [{
            value: 'Hello',
            label: 'fields.work-for-you.yes.label'
        },
            {
                value: 'Goodbye',
                label: 'fields.work-for-you.no.label'
            }]
    }
};