@validation
  Feature: To test the validation on the ECS Application form

    @required
    Scenario: Go through the form to the declaration pahge and try to continue without confirming
      the data protection checkbox
      Given I am on the start page for the form
      Then I see the eeapassport question
      And I click next
      Then I see the eea_passport_error error message
      When I click no_eeapassport and then continue
      Then I see the work_for_you question
      And I click next
      Then I see the work_for_you_error error message
      When I click no_workforyou and then continue
      Then I see the other_documents question
      And I click next
      Then I see the other_docs_error error message
      When I click appeal_leave and then continue
      Then I see the ongoing_app question
      And I click next
      Then I see the ongoing_app_id_error error message
      When I enter ref_num into the case_id and continue
      Then I see the conduct_right_to_work header
      And I click next
      Then I see the employees_header header
      And I click next
      Then I see the employee details error messages
      When I enter the employee's details
      And I click next
      Then I see the employers_header header
      And I click next
      Then I see the employer details error messages
      When I enter the employer's details
      And I click next
      Then I see the summary header
      And I click next
      Then I see the data_protection header
      And I click send
      Then I see the data_protection_error error message
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @date @when_did_they_start
    Scenario: Go to the when-did-they-start page and check following validation:
    required, future, non-numerical, incorrect format
      Given I am on the start page for the form
      Then I see the eeapassport question
      When I click no_eeapassport and then continue
      Then I see the work_for_you question
      When I click yes_workforyou and then continue
      Then I see the when_did_they_start question
      And I click next
      Then I see the when_did_they_start_error error message
      When I enter the start date with year start_year_future
      And I click next
      Then I see the future_error error message
      Then I enter letters into the start date fields
      And I click next
      Then I see the date_letters_error error message
      Then I enter incorrect format start date
      And I click next
      Then I see the date_incorrect_format_error error message

    @date @tupe_transfer_date
    Scenario: Go to the tupe-transfer-date page and check following validation:
    required, future, non-numerical, incorrect format, date before when they started
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
      And I click next
      Then I see the tupe_transfer_date_error error message
      Then I enter incorrect TUPE date
      And I click next
      Then I see the tupe_date_before_error error message
      Then I enter incorrect format tupetransfer date
      And I click next
      Then I see the date_incorrect_format_error error message
      Then I enter letters into the tupetransfer date fields
      And I click next
      Then I see the date_letters_error error message
      And I click next
      When I enter the tupetransfer date with year start_year_future
      And I click next
      Then I see the future_error error message

    @email @employer_details
    Scenario: Go to employers page and enter incorrect email format
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
      When I enter incorrect_email into the employers_email_text and continue
      Then I see the email_incorrect_format_error error message

    @email @not_matching @employer_details
    Scenario: Go to employers page and enter email into the email field and a different email in the confirm email field
      Test non-matching validation
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
      When I enter contact_email into the employers_email_text field
      When I enter new_contact_email into the employers_confirm_email_text and continue
      Then I see the email_not_matching_error error message
















