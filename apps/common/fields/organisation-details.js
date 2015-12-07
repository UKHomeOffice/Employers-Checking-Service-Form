'use strict';

module.exports = {
  'org-help': {
    validate: ['required'],
    className: 'inline',
    legend: {
      className: 'visuallyhidden',
      value: 'pages.check-details.org-help.title'
    },
    options: [{
      value: 'yes',
      label: 'fields.org-help.options.yes.label',
      toggle: 'org-details-group'
    }, {
      value: 'no',
      label: 'fields.org-help.options.no.label'
    }]
  },
  'rep-name': {
    validate: ['required'],
    label: 'fields.rep-name.label',
    dependent: {
      field: 'org-help',
      value: 'yes'
    },
  },
  'org-type': {
    validate: ['required'],
    dependent: {
      field: 'org-help',
      value: 'yes'
    },
    legend: {
      className: 'visuallyhidden',
      value: 'pages.check-details.org-details-group.type'
    },
    options: [{
      value: 'pbs',
      label: 'fields.org-type.options.pbs.label'
    }, {
      value: 'legal',
      label: 'fields.org-type.options.legal.label'
    }, {
      value: 'relative',
      label: 'fields.org-type.options.relative.label'
    }, {
      value: 'support',
      label: 'fields.org-type.options.support.label'
    }]
  }
};
