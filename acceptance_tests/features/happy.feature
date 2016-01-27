@happy
  Feature: I am able to navigate through the ECS-Application form correctly

    @no_workforyou @ongoing_app
    Scenario: Happy Path, passport, work for you, other-docs, caseId
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
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @no_workforyou @brp_replace
    Scenario: Happy Path, passport, work for you, other-docs, caseId
      Given I am on the start page for the form
      Then I see the eeapassport question
      When I click no_eeapassport and then continue
      Then I see the work_for_you question
      When I click no_workforyou and then continue
      Then I see the other_documents question
      When I click brp_replace and then continue
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
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @no_workforyou @certificate_app @originaldoc
    Scenario: Happy Path, passport, work for you, other-docs, original doc, caseId
      Given I am on the start page for the form
      Then I see the eeapassport question
      When I click no_eeapassport and then continue
      Then I see the work_for_you question
      When I click no_workforyou and then continue
      Then I see the other_documents question
      When I click certificate_app and then continue
      Then I see the original_document question
      Then I click yes_original_doc and then continue
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
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @no_workforyou @arc @originaldoc
    Scenario: Happy Path, passport, work for you, other-docs, original doc, arc card details
      Given I am on the start page for the form
      Then I see the eeapassport question
      When I click no_eeapassport and then continue
      Then I see the work_for_you question
      When I click no_workforyou and then continue
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
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header


    @no_workforyou @noneabove @settlement
    Scenario: Happy Path, passport, work for you, other-docs, settlement protection
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
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header


    @yes_workforyou @startafterfeb2008 @no-time-limit
    Scenario: Happy Path, passport, work for you, when did they start, other-docs, caseId
      Given I am on the start page for the form
      Then I see the eeapassport question
      When I click no_eeapassport and then continue
      Then I see the work_for_you question
      When I click yes_workforyou and then continue
      Then I see the when_did_they_start question
      When I enter the start date with year start_year2008
      And I click next
      Then I see the other_documents question
      When I click no_time_limit and then continue
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
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @yes_workforyou @startbeforefeb2008 @yes_tupetransfer @transfer_visa
    Scenario: Happy Path, passport, work for you, when did they start, tupe transfer,
    tupe transfer date after 28/02/2008, transfer visa, caseId
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
      When I click transfer_visa and then continue
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
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header


