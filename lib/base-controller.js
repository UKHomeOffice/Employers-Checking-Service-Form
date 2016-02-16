'use strict';

var hof = require('hof');
var Controller = hof.wizard.Controller;
var util = require('util');
var _ = require('underscore');
var logger = require('./logger');

var BaseController = function BaseController(options) {
  this.next = options.next;
  this.confirmStep = '/confirm';
  Controller.apply(this, arguments);
};

util.inherits(BaseController, Controller);

function getErrorLength() {
  var errors = this.getErrors.apply(this, arguments);
  var errorLength = Object.keys(errors).length;

  if (errorLength === 1) {
    return {single: true};
  }
  if (errorLength > 1) {
    return {multiple: true};
  }
}

BaseController.prototype.getNextStep = function getNextStep(req) {
  var next = Controller.prototype.getNextStep.apply(this, arguments);
  if (req.params.action === 'edit' && !this.options.continueOnEdit) {
    next = req.baseUrl === '/' ? this.confirmStep : req.baseUrl + this.confirmStep;
  } else if (req.params.action === 'edit') {
    next += '/edit';
  }
  return next;
};

BaseController.prototype.getErrorStep = function getErrorStep(err, req) {
  var redirect = Controller.prototype.getErrorStep.call(this, err, req);
  if (req.params.action === 'edit' && !redirect.match(/\/edit$/)) {
    redirect += '/edit';
  }
  return redirect;
};

var matchPath = function(baseUrl, controller){
    return function(findPath) {
        return _.find(controller.options.backLinks, function (link) {
            if (link.match(/^\//)) {
                return path.normalize(link) === findPath;
            } else {
                return path.normalize(link) === path.relative(baseUrl, findPath);
            }
        });
    }
};


BaseController.prototype.getBackLink = function getBackLink(req, res){

    var backLink = res.locals.backLink;
    var self = this;
    if (!backLink) {
        var validBacklinks = _.reduce(req.sessionModel.get('steps'), function(memo, step){
            
            var matchedBacklink = matchPathFunc(step, self);
            
            if (typeof matchedBacklink === 'string') {
                memo.push(matchedBacklink);
            }
            return memo;
            
        }, []);
        
        if (validBacklinks.length){
            backLink = _.last(validBacklinks);
        }
    }
    return backLink;
};

BaseController.prototype.locals = function controllerLocals(req, res) {
  var locals = Controller.prototype.locals.apply(this, arguments);
  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
      errorLength: getErrorLength.apply(this, arguments),
      backLink: this.getBackLink(req, res)
  });
};

BaseController.prototype.getValues = function getValues(req, res, callback) {
  if (_.isEmpty(this.getErrors(req, res))) {
    this.referrer = req.header('Referer');
  }

  Controller.prototype.getValues.call(this, req, res, callback);

  // clear the session if there's no next step or we request to clear the session
  if ((_.isUndefined(this.options.next) && this.options.clearSession !== false) || this.options.clearSession === true) {
    logger.info('Clearing session at endpoint', req.url);
    req.sessionModel.reset();
  }
};

module.exports = BaseController;
