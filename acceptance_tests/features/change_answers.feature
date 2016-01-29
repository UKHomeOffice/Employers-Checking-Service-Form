@change_answers
  Feature: I am able to change my answers and correctly navigate through the form and to see the new answers
    on the summary page

    @change_path @work_for_you
    Scenario: not work for you > appeal for leave(other-docs). CHANGE to
      work for you > when-did-they-start > application no time limit'
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
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | ongoing_app_or_appeal |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      When I click work for you change button
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
      Then I should see the headers and my information in the summary:
        | work_for_you        | yes                   |
        | other_documents     | app_no_time_limit     |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_path @when_did_they_start
    Scenario: yes work for you > start date > tupe transfer > tupe transfer date > other-docs. CHANGED start date.
    to yes work for you > start date > other-docs
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
      Then I should see the headers and my information in the summary:
        | work_for_you        | yes                   |
        | when_did_they_start | start_date2006        |
        | tupe_transfer       | yes                   |
        | tupe-transfer-date  | tt_date               |
        | other_documents     | app_no_time_limit     |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      When I click when did they start change button
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
      Then I should not see the tupe headers in the summary
      Then I should see the headers and my information in the summary:
        | work_for_you        | yes                   |
        | when_did_they_start | start_date2008        |
        | other_documents     | app_no_time_limit     |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_path @work_for_you
    Scenario: yes work for you > start date > tupe transfer > tupe transfer date > other-docs. CHANGED start date.
    to no work for you > other-docs.
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
      Then I should see the headers and my information in the summary:
        | work_for_you        | yes                   |
        | when_did_they_start | start_date2006        |
        | tupe_transfer       | yes                   |
        | tupe-transfer-date  | tt_date               |
        | other_documents     | app_no_time_limit     |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      When I click work for you change button
      Then I see the work_for_you question
      When I click no_workforyou and then continue
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
      Then I should not see when did they start or tupe headers in the summary
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | app_no_time_limit     |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_path @otherDocs
    Scenario: not work for you > ARC (other-docs) > original docs > ARC card details. CHANGED other-docs.
      not work for you > ongoing apeal (other-docs) > caseID.
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
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                |
        | other_documents       | arc_app           |
        | original_document     | yes               |
        | arc_serial_numnber    | arc_serial_num    |
        | ifb_number            | ifb_ref_num       |
        | full_name_header      | full_name         |
        | dob_header            | dob_full          |
        | nation_header         | nationality       |
        | job_title_header      | jobtitle          |
        | hours_header          | hours             |
        | bus_name_header       | business_name     |
        | bus_type_header       | business_type     |
        | contact_name_header   | full_name         |
        | contact_num_header    | contact_telephone |
        | contact_email_header  | contact_email     |
      When I click other-docs change button
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
      Then I should not see original-docs or arc headers in the summary
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                    |
        | other_documents       | ongoing_app_or_appeal |
        | ongoing_app           | ref_num               |
        | full_name_header      | full_name             |
        | dob_header            | dob_full              |
        | nation_header         | nationality           |
        | job_title_header      | jobtitle              |
        | hours_header          | hours                 |
        | bus_name_header       | business_name         |
        | bus_type_header       | business_type         |
        | contact_name_header   | full_name             |
        | contact_num_header    | contact_telephone     |
        | contact_email_header  | contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_path @otherDocs
    Scenario: not work for you > certificate of app (other-docs) > original docs > caseId. CHANGED other-docs.
    not work for you > transfer visa (other-docs) > caseID.
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
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                    |
        | other_documents       | certificate_of_app    |
        | original_document     | yes                   |
        | ongoing_app           | ref_num               |
        | full_name_header      | full_name             |
        | dob_header            | dob_full              |
        | nation_header         | nationality           |
        | job_title_header      | jobtitle              |
        | hours_header          | hours                 |
        | bus_name_header       | business_name         |
        | bus_type_header       | business_type         |
        | contact_name_header   | full_name             |
        | contact_num_header    | contact_telephone     |
        | contact_email_header  | contact_email         |
      When I click other-docs change button
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
      Then I should not see original-docs header in the summary
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                    |
        | other_documents       | transfer_visa_app     |
        | ongoing_app           | ref_num               |
        | full_name_header      | full_name             |
        | dob_header            | dob_full              |
        | nation_header         | nationality           |
        | job_title_header      | jobtitle              |
        | hours_header          | hours                 |
        | bus_name_header       | business_name         |
        | bus_type_header       | business_type         |
        | contact_name_header   | full_name             |
        | contact_num_header    | contact_telephone     |
        | contact_email_header  | contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_path @otherDocs
    Scenario: not work for you > none of the above (other-docs) > settlement protection. CHANGED to:
      not work for you > replace brp (other-docs) > caseId
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
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                    |
        | other_documents       | none_above            |
        | settlement_protection | yes                   |
        | full_name_header      | full_name             |
        | dob_header            | dob_full              |
        | nation_header         | nationality           |
        | job_title_header      | jobtitle              |
        | hours_header          | hours                 |
        | bus_name_header       | business_name         |
        | bus_type_header       | business_type         |
        | contact_name_header   | full_name             |
        | contact_num_header    | contact_telephone     |
        | contact_email_header  | contact_email         |
      When I click other-docs change button
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
      Then I should not see settlement protection header in the summary
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                    |
        | other_documents       | brp_repacement        |
        | ongoing_app           | ref_num               |
        | full_name_header      | full_name             |
        | dob_header            | dob_full              |
        | nation_header         | nationality           |
        | job_title_header      | jobtitle              |
        | hours_header          | hours                 |
        | bus_name_header       | business_name         |
        | bus_type_header       | business_type         |
        | contact_name_header   | full_name             |
        | contact_num_header    | contact_telephone     |
        | contact_email_header  | contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_path @otherDocs
    Scenario: not work for you > appeal for leave(other-docs) > caseId. CHANGED to:
    not work for you > ARC cade (other-docs) > original doc > arc card details
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
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | ongoing_app_or_appeal |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      When I click other-docs change button
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
      Then I should not see case id header in the summary
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | arc_app               |
        | original_document   | yes                   |
        | arc_serial_numnber  | arc_serial_num        |
        | ifb_number          | ifb_ref_num           |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_path @otherDocs
    Scenario: not work for you > appeal for leave (other-docs) > case Id. CHANGED to:
    not work for you > none of the above (other-docs) > settlement protection
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
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | ongoing_app_or_appeal |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      When I click other-docs change button
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
      Then I should not see case id header in the summary
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                    |
        | other_documents       | none_above            |
        | settlement_protection | yes                   |
        | full_name_header      | full_name             |
        | dob_header            | dob_full              |
        | nation_header         | nationality           |
        | job_title_header      | jobtitle              |
        | hours_header          | hours                 |
        | bus_name_header       | business_name         |
        | bus_type_header       | business_type         |
        | contact_name_header   | full_name             |
        | contact_num_header    | contact_telephone     |
        | contact_email_header  | contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_path @otherDocs
    Scenario: not work for you > ARC card (other-docs) > original doc > arc card details. CHANGED to:
    not work for you > none of the above (other-docs) > settlement protection
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
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                |
        | other_documents       | arc_app           |
        | original_document     | yes               |
        | arc_serial_numnber    | arc_serial_num    |
        | ifb_number            | ifb_ref_num       |
        | full_name_header      | full_name         |
        | dob_header            | dob_full          |
        | nation_header         | nationality       |
        | job_title_header      | jobtitle          |
        | hours_header          | hours             |
        | bus_name_header       | business_name     |
        | bus_type_header       | business_type     |
        | contact_name_header   | full_name         |
        | contact_num_header    | contact_telephone |
        | contact_email_header  | contact_email     |
      When I click other-docs change button
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
      Then I should not see original-docs header in the summary
      Then I should see the headers and my information in the summary:
        | work_for_you          | no                    |
        | other_documents       | none_above            |
        | settlement_protection | yes                   |
        | full_name_header      | full_name             |
        | dob_header            | dob_full              |
        | nation_header         | nationality           |
        | job_title_header      | jobtitle              |
        | hours_header          | hours                 |
        | bus_name_header       | business_name         |
        | bus_type_header       | business_type         |
        | contact_name_header   | full_name             |
        | contact_num_header    | contact_telephone     |
        | contact_email_header  | contact_email         |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_answer
    Scenario: Change employer's Email
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
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | ongoing_app_or_appeal |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      When I click employer's email change button
      Then I see the employers_header header
      Then I change the employer's email address
      And I click next
      Then I see the summary header
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | ongoing_app_or_appeal |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| new_contact_email     |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header

    @change_answer @testing
    Scenario: Change employee's hours per week
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
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | ongoing_app_or_appeal |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | hours                 |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email         |
      When I click employee's hours per week change button
      Then I see the employee_header header
      Then I change the employee's hours per week
      And I click next
      Then I see the summary header
      Then I should see the headers and my information in the summary:
        | work_for_you        | no                    |
        | other_documents     | ongoing_app_or_appeal |
        | ongoing_app         | ref_num               |
        | full_name_header    | full_name             |
        | dob_header          | dob_full              |
        | nation_header       | nationality           |
        | job_title_header    | jobtitle              |
        | hours_header        | new_hours             |
        | bus_name_header     | business_name         |
        | bus_type_header     | business_type         |
        | contact_name_header | full_name             |
        | contact_num_header  | contact_telephone     |
        | contact_email_header| contact_email     |
      And I click next
      Then I see the data_protection header
      When I click on confirm
      And I click send
      Then I see the thankyou header
