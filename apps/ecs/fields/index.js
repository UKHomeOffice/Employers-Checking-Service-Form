'use strict';

module.exports = {
    'eea-passport': {
        validate: 'required',
        className: ['inline', 'form-group'],
        options: [{
            value: 'yes',
            label: 'fields.eea-passport.yes.label'
        },
        {
            value: 'no',
            label: 'fields.eea-passport.no.label'
        }]
    }
};