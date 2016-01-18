'use strict';

module.exports = {
    'tupe-transfer-date': {
        legend: 'fields.tupe-transfer-date.legend',
        hint: 'fields.tupe-transfer-date.hint'
    },
    'tupe-transfer-date-day': {
        validate: ['required', 'numeric'],
        label: 'fields.tupe-transfer-date-day.label'
    },
    'tupe-transfer-date-month': {
        validate: ['required', 'numeric'],
        label: 'fields.tupe-transfer-date-month.label'
    },
    'tupe-transfer-date-year': {
        validate: ['required', 'numeric'],
        label: 'fields.tupe-transfer-date-year.label'
    }
};
