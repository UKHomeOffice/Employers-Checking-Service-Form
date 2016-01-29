@back_links
  Feature: To test the backlinks within the ECS Application form go to the correct page

    @current
    Scenario:
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


