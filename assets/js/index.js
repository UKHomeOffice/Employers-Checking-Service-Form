'use strict';

var toolkit = require('hof').toolkit;
var helpers = toolkit.helpers;
var progressiveReveal = toolkit.progressiveReveal;
var formFocus = toolkit.formFocus;

helpers.documentReady(progressiveReveal);
helpers.documentReady(formFocus);

var $ = require('jquery');
var typeahead = require('typeahead.js-browserify');
var Bloodhound = require('typeahead.js-browserify').Bloodhound;

typeahead.loadjQueryPlugin();

var inputRadio = $('.buttonTrigger :input');

$.each(inputRadio, function(index, input) {
  $(input).click(function () {
    $("#input-submit").removeAttr('disabled');
  });
});

//application-reference page

if ($('#application-reference-number').length) {
  $('#application-reference-number').blur(function(){

    if ($('#application-reference-number').val() === '') {
      $('#application-reference-radio-ref-not-known').removeAttr('disabled');
      $('#input-submit').attr("disabled",true);
    } else {
      $('#application-reference-radio-ref-not-known').prop('checked', false);
      $('#input-submit').removeAttr('disabled');
    }
  });

  $('#application-reference-number').click(function() {
    var label = $('#application-reference-radio-ref-not-known').closest('label');
    $(label).removeClass('selected');
    $('#application-reference-radio-ref-not-known').prop('checked', false);
    $('#input-submit').attr("disabled",true);
  });

  $('#application-reference-radio-ref-not-known').click(function() {
    $('#application-reference-number').val('');
    $('#input-submit').removeAttr('disabled');
  });
}

////full-name page
//if($('#applicant-full-name-text').length) {
//  $('#applicant-full-name-text').blur(function() {
//    if ($('#applicant-full-name-text').val() != '') {
//      $("#input-submit").removeAttr('disabled');
//    } else {
//      $('#input-submit').attr("disabled",true);
//    }
//  });
//}

//
////full-name page
//if($('#full-name-text').length) {
//  $('#full-name-text').blur(function() {
//    if ($('#full-name-text').val() != '') {
//      $("#input-submit").removeAttr('disabled');
//    } else {
//      $('#input-submit').attr("disabled",true);
//    }
//  });
//}



var inputText = $('.textTrigger :input');

$.each(inputText, function(index, input) {
  $(input).click(function () {
    if($(input).length) {
      $(input).blur(function() {
        if ($(input).val() != '') {
          $("#input-submit").removeAttr('disabled');
        } else {
          $('#input-submit').attr("disabled",true);
        }
      });
    }
  });
});

var nonEuCountries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: require('./countries').nonEuCountries
});

var allCountries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: require('./countries').allCountries
});


$('#nationality, #nationality-error, #nominated-nationality')
.typeahead({
  minLength: 1,
  hint: false,
  limit: 5
}, {
  name: 'nonEuCountries',
  source: nonEuCountries
});

$('#country, #someone-else-nationality, #change-person-nationality').typeahead({
  minLength: 1,
  hint: false,
  limit: 5
}, {
  name: 'allCountries',
  source: allCountries
});
