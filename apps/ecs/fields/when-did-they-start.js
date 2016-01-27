'use strict';

module.exports = {
    'when-did-they-start': {
        legend: 'fields.date-of-birth.legend',
        hint: 'fields.when-did-they-start.hint'
    },
    'when-did-they-start-day': {
        validate: ['required', 'numeric'],
        label: 'fields.when-did-they-start-day.label'
    },
    'when-did-they-start-month': {
        validate: ['required', 'numeric'],
        label: 'fields.when-did-they-start-month.label'
    },
    'when-did-they-start-year': {
        validate: ['required', 'numeric'],
        label: 'fields.when-did-they-start-year.label'
    }
};
