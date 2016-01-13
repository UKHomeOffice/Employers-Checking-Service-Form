'use strict';

module.exports = {
    'settlement-protection': {
        validate: 'required',
        className: ['inline', 'form-group'],
        legend: 'fields.settlement-protection.legend',
        options: [{
            value: 'Yes',
            label: 'fields.settlement-protection.yes.label'
        }, {
            value: 'No',
            label: 'fields.settlement-protection.no.label'
        }]
    }
};