'use strict';

module.exports = {
    'employee-name-text': {
        validate: 'required'
    },
    'date-of-birth': {
        legend: 'fields.date-of-birth.legend',
        hint: 'fields.date-of-birth.hint'
    },
    'date-of-birth-day': {
        validate: ['required', 'numeric'],
        label: 'fields.date-of-birth-day.label'
    },
    'date-of-birth-month': {
        validate: ['required', 'numeric'],
        label: 'fields.date-of-birth-month.label'
    },
    'date-of-birth-year': {
        validate: ['required', 'numeric'],
        label: 'fields.date-of-birth-year.label'
    },
    nationality: {
        validate: ['required'],
        label: 'fields.nationality.label'
    }, 'uk-address-house-number': {
        validate: ['required'],
        label: 'common-fields.address-house-number.label'
    },
    'uk-address-street': {
        validate: ['required'],
        label: 'common-fields.address-street.label'
    },
    'uk-address-town': {
        validate: ['required'],
        label: 'common-fields.address-town.label'
    },
    'uk-address-county': {
        label: 'common-fields.address-county.label'
    },
    'uk-address-postcode': {
        validate: ['required', 'postcode'],
        label: 'common-fields.address-postcode.label'
    },
    'job-title': {
        validate: ['required']
    },
    'hours-per-week': {
        validate: ['required']
    }
};
