@ECS
Feature: Employer checking service for employee to check right to work in UK

  Scenario: Employer checking service for employee who got UK or EEA or Switzerland passport or other right to work home office documents
    Given employer checking service form
    Then I am on 'right to work' page of the employer checking service form
#    When on Step One click 'Yes'
#    Then I am on 'check-not-needed' page of the employer checking service form
