'use strict';

var logger = require('../../lib/logger');
var nodemailer = require('nodemailer');
var config = require('../../config');
var i18n = require('hof').i18n;
var Hogan = require('hogan.js');
var i18nLookup = require('hof').i18nLookup;
var fs = require('fs');
var path = require('path');

var caseworkerHtmlTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/submit.mus')).toString('utf8')
};

var caseworkerPlainTextTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/submit.mus')).toString('utf8')
};

var translationLocation = {
  error: 'correct-mistakes',

};

var transport = config.email.auth.user === '' ?
  require('nodemailer-stub-transport') : require('nodemailer-smtp-transport');

function Emailer() {
  this.transporter = nodemailer.createTransport(transport({
    host: config.email.host,
    port: config.email.port,
    secure: false,
    auth: config.email.auth,
    ignoreTLS: false
  }));
}

Emailer.prototype.send = function send(email, callback) {
  var locali18n = i18n({
    path: path.resolve(
      __dirname, '../../apps/', './' + translationLocation[email.template], './translations/__lng__/__ns__.json'
    )
  });

  locali18n.on('ready', function locali18nLoaded() {
    var lookup = i18nLookup(locali18n.translate.bind(locali18n));
    var templateData = {
      data: email.dataToSend,
      t: function t() {
        return function lookupTranslation(translate) {
          // for translations inside our mustache templates
          return lookup(Hogan.compile(translate).render(email.dataToSend));
        };
      }
    };

    function sendCustomerEmail() {
      if (email.to) {
        logger.info('Emailing customer: ', email.subject);
        this.transporter.sendMail({
          from: config.email.from,
          to: email.to,
          subject: email.subject,
          text: Hogan.compile(customerPlainTextTemplates[email.template]).render(templateData),
          html: Hogan.compile(customerHtmlTemplates[email.template]).render(templateData),
          attachments: [
            {
              filename: 'govuk_logotype_email.png',
              path: path.resolve(__dirname, './images/govuk_logotype_email.png'),
              cid: 'govuk_logotype_email'
            },
            {
              filename: 'ho_crest_27px.png',
              path: path.resolve(__dirname, './images/ho_crest_27px.png'),
              cid: 'ho_crest_27px'
            },
            {
              filename: 'spacer.gif',
              path: path.resolve(__dirname, './images/spacer.gif'),
              cid: 'spacer_image'
            }
          ]
        }, callback);
      } else {
        callback();
      }
    }

    logger.info('Emailing caseworker: ', email.subject);
    this.transporter.sendMail({
      from: config.email.from,
      to: config.email.caseworker[email.template],
      subject: email.subject,
      text: Hogan.compile(caseworkerPlainTextTemplates[email.template]).render(templateData),
      html: Hogan.compile(caseworkerHtmlTemplates[email.template]).render(templateData),
      attachments: [
        {
          filename: 'govuk_logotype_email.png',
          path: path.resolve(__dirname, './images/govuk_logotype_email.png'),
          cid: 'govuk_logotype_email'
        },
        {
          filename: 'ho_crest_27px.png',
          path: path.resolve(__dirname, './images/ho_crest_27px.png'),
          cid: 'ho_crest_27px'
        },
        {
          filename: 'spacer.gif',
          path: path.resolve(__dirname, './images/spacer.gif'),
          cid: 'spacer_image'
        }
      ]
    }, sendCustomerEmail.bind(this));
  }.bind(this));
};

module.exports = new Emailer();
