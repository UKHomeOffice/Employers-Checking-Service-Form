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
};
