'use strict';

module.exports = {
    'business-name': {
        validate: ['required'],
        label: 'fields.business-name.label'
    },
    'type-of-business':{
        validate: ['required'],
        label: 'fields.type-of-business.label'
    },
    'employer-uk-address-house-number': {
        validate: ['required'],
        label: 'fields.employer-uk-address-house-number.label'
    },
    'employer-uk-address-street': {
        label: 'fields.employer-uk-address-street.label'
    },
    'employer-uk-address-town': {
        validate: ['required'],
        label: 'common-fields.address-town.label'
    },
    'employer-uk-address-county': {
        label: 'common-fields.address-county.label'
    },
    'employer-uk-address-postcode': {
        validate: ['required','postcode'],
        label: 'common-fields.address-postcode.label'
    },
    'employer-contact-name':{
        validate: ['required'],
        label: 'fields.employer-contact-name.label'
    },
    'employer-job-title':{
        validate: ['required'],
        label: 'fields.job-title.label'
    },
    'employer-contact-telephone': {
        validate: ['required', 'numeric'],
        label: 'fields.employer-contact-telephone.label'
    },
    'employer-contact-email-address':{
        validate: ['required','email'],
        label: 'fields.employer-contact-email-address.label'
    },
    'employer-confirm-email-address':{
        validate: ['required','email'],
        label: 'fields.employer-confirm-email-address.label'
    }
}