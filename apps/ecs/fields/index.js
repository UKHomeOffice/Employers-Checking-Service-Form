'use strict';

module.exports = {
    'eea-passport': {
        validate: 'required',
        className: ['inline', 'form-group', 'hiddenLegend'],
        options: [{
            value: 'Yes',
            label: 'fields.eea-passport.yes.label'
        },
        {
            value: 'No',
            label: 'fields.eea-passport.no.label'
        }]
    },
    'work-for-you': {
        validate: 'required',
        className: ['inline', 'form-group'],
        legend: 'fields.work-for-you.legend',
        options: [{
            value: 'Yes',
            label: 'fields.work-for-you.yes.label'
        },
        {
            value: 'No',
            label: 'fields.work-for-you.no.label'
        }]
    },
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
    },
    'other-docs': {
        validate: 'required',
        legend: 'fields.other-docs.legend',
        options: [{
            value: 'appeal-leave',
            label: 'fields.other-docs.appeal-leave.label'
        },
        {
            value: 'no-time',
            label: 'fields.other-docs.no-time.label'
        },
        {
            value: 'transfer-visa',
            label: 'fields.other-docs.transfer-visa.label'
        },
        {
            value: 'brp-replace',
            label: 'fields.other-docs.brp-replace.label'
        },
        {
            value: 'application-cert',
            label: 'fields.other-docs.application-cert.label'
        },
        {
            value: 'app-reg-card',
            label: 'fields.other-docs.app-reg-card.label'
        },
        {
            value: 'none-above',
            label: 'fields.other-docs.none-above.label'
        }]
    }
};