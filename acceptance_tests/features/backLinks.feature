@back_links
  Feature: To test the backlinks within the ECS Application form go to the correct page

    @eeapassport @error_page
    Scenario: To the eea-passport error page and click back
      Given I am on the start page for the form
      Then I see the eeapassport question
      When I click yes_eeapassport and then continue
      Then I see the request_not_needed header
      And I click back
      Then I see the eeapassport question

    @tupe_transfer @error_page
    Scenario: To no tupe transfer error page and click back
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
      And I click back
      Then I see the tupe_transfer question

    @tupetransfer_date @error_page
    Scenario: To tupe transfer date error page and click page
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
      And I click back
      Then I see the tupe_transfer_date question

    @original_doc @error_page
    Scenario: To original document error page and click back
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
      And I click back
      Then I see the original_document question

    @settlement-protection @error_page
    Scenario: To settlement protection error page and click back
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
      And I click back
      Then I see the settlement_protection question

    @summary
    Scenario: Go through the form to the summary page and all the way back again hitting the same pages
      Given I am on the start page for the form
      Then I see the eeapassport question
      When I click no_eeapassport and then continue
      Then I see the work_for_you question
      When I click no_workforyou and then continue
      Then I see the other_documents question
      When I click appeal_leave and then continue
      Then I see the ongoing_app question
      When I enter ref_num into the case_id and continue
      Then I see the conduct_right_to_work header
      And I click next
      Then I see the employees_header header
      When I enter the employee's details
      And I click next
      Then I see the employers_header header
      When I enter the employer's details
      And I click next
      Then I see the summary header
      And I click back
      Then I see the employers_header header
      And I click back
      Then I see the employees_header header
      And I click back
      Then I see the conduct_right_to_work header
      And I click back
      Then I see the ongoing_app question
      And I click back
      Then I see the other_documents question
      And I click back
      Then I see the work_for_you question
      And I click back
      Then I see the eeapassport question

      @tupetransfer_date
      Scenario: Go to tupe-transfer-date and then back to beginning
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
        When I enter the tupe transfer date with year start_year2008
        And I click next
        Then I see the other_documents question
        And I click back
        Then I see the tupe_transfer_date question
        And I click back
        Then I see the tupe_transfer question
        And I click back
        Then I see the when_did_they_start question
        And I click back
        Then I see the work_for_you question
        And I click back
        Then I see the eeapassport question

        @summary @settlement_protection
        Scenario: Go to summary via settlement protecion and back to beginning
          Given I am on the start page for the form
          Then I see the eeapassport question
          When I click no_eeapassport and then continue
          Then I see the work_for_you question
          When I click no_workforyou and then continue
          Then I see the other_documents question
          When I click none_of_the_above and then continue
          Then I see the settlement_protection question
          When I click yes_protection and then continue
          Then I see the conduct_right_to_work header
          And I click next
          Then I see the employees_header header
          When I enter the employee's details
          And I click next
          Then I see the employers_header header
          When I enter the employer's details
          And I click next
          Then I see the summary header
          And I click back
          Then I see the employers_header header
          And I click back
          Then I see the employees_header header
          And I click back
          Then I see the conduct_right_to_work header
          And I click back
          Then I see the settlement_protection question
          And I click back
          Then I see the other_documents question
          And I click back
          Then I see the work_for_you question
          And I click back
          Then I see the eeapassport question

          @summary @arc_card
          Scenario: Go to sumary via tupe-transfer-date and ARC card details and back to beginning
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
            When I enter the tupe transfer date with year start_year2008
            And I click next
            Then I see the other_documents question
            When I click app_reg_card and then continue
            Then I see the original_document question
            Then I click yes_original_doc and then continue
            Then I see the arc_card header
            When I enter the ARC card details
            And I click next
            Then I see the conduct_right_to_work header
            And I click next
            Then I see the employees_header header
            When I enter the employee's details
            And I click next
            Then I see the employers_header header
            When I enter the employer's details
            And I click next
            Then I see the summary header
            And I click back
            Then I see the employers_header header
            And I click back
            Then I see the employees_header header
            And I click back
            Then I see the conduct_right_to_work header
            And I click back
            Then I see the arc_card header
            And I click back
            Then I see the original_document question
            And I click back
            Then I see the other_documents question
            And I click back
            Then I see the tupe_transfer_date question
            And I click back
            Then I see the tupe_transfer question
            And I click back
            Then I see the when_did_they_start question
            And I click back
            Then I see the work_for_you question
            And I click back
            Then I see the eeapassport question
