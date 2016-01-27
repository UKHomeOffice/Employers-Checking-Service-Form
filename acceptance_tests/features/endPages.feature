@endPages
  Feature: I am able to navigate to the various end pages in the ECS-Application

    @eeapassport
    Scenario: User has EEA passport
      Given I am on the start page for the form
      Then I see the eeapassport question
      When I click yes_eeapassport and then continue
      Then I see the request_not_needed header

    @tupetransfer
    Scenario: no eeapassport, yes work-for-you, no tupe transfer
     Given I am on the start page for the form
     Then I see the eeapassport question
     When I click no_eeapassport and then continue
     Then I see the work_for_you question
     When I click yes_workforyou and then continue
     Then I see the when_did_they_start question
     When I enter the start date with year start_year2006
     And I click next
     Then I see the tupe_transfer question
     When I click no_tupetransfer and then continue
     Then I see the request_not_needed header

     @tupetransfer_date
     Scenario: no eeapassport, yes work-for-you, yes tupe transfer, tupe transfer date before 29/02/2008
       Given I am on the start page for the form
       Then I see the eeapassport question
       When I click no_eeapassport and then continue
       Then I see the work_for_you question
       When I click yes_workforyou and then continue
       Then I see the when_did_they_start question
       When I enter the start date with year start_year2006
       And I click next
       Then I see the tupe_transfer question
       When I click yes_tupetransfer and then continue
       Then I see the tupe_transfer_date question
       When I enter the tupe transfer date with year start_year2006
       And I click next
       Then I see the request_not_needed header

     @original_doc
     Scenario: no eeapassport, no work-for-you, arc-card, no original doc
       Given I am on the start page for the form
       Then I see the eeapassport question
       When I click no_eeapassport and then continue
       Then I see the work_for_you question
       When I click no_workforyou and then continue
       Then I see the other_documents question
       When I click certificate_app and then continue
       Then I see the original_document question
       Then I click no_original_doc and then continue
       Then I see the must_see_original_doc header

     @settlement_protection
     Scenario: no eeapassport, no work-for-you, none of the above, no settlement protection
       Given I am on the start page for the form
       Then I see the eeapassport question
       When I click no_eeapassport and then continue
       Then I see the work_for_you question
       When I click no_workforyou and then continue
       Then I see the other_documents question
       When I click none_of_the_above and then continue
       Then I see the settlement_protection question
       When I click no_protection and then continue
       Then I see the cannot_request_check header
