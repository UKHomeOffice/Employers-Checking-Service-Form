Given(/^I am on the start page for the form$/) do
  visit config['ecs-application']
end

Then(/^I see the (.*) question$/) do | question |
  expect(page).to have_content CONTENT["#{question}"]
end

Then(/^I see the (.*) header$/) do | header |
  expect(page).to have_content CONTENT["#{header}"]
end

When(/^I click (.*) and then continue?$/) do | field |
  step "I click on #{field}"
  step 'I click next'
end

When(/^I click on (.*)$/) do | field |
  find_by_id(CONTENT[field]).click
end

Then(/^I am taken to the (.*) page of the form$/) do | header |
  expect(page).to have_content CONTENT["#{header}_header"]
end

And(/^I click next$/) do
  click_button("Next")
end

And(/^I click send$/) do
  click_button("Send")
end

When(/^I enter (.*) into the (.*) and continue$/) do | text, field |
  step "I enter #{text} into the #{field} field"
  step 'I click next'
end

When(/^I enter (.*) into the (.*) field$/) do | text, field |
  fill_in CONTENT[field], :with => CONTENT[text]
end

When(/^I enter the start date with year (.*)$/) do | year |
  step 'I enter start_day into the start_day_text field'
  step 'I enter start_month into the start_month_text field'
  step "I enter #{year} into the start_year_text field"
end

When(/^I enter the tupe transfer date with year (.*)$/) do | year |
  step 'I enter start_day into the tupetransfer_date_day field'
  step 'I enter start_month into the tupetransfer_date_month field'
  step "I enter #{year} into the tupetransfer_date_year field"
end

When(/^I enter the date of birth$/) do
  step 'I enter day into the dob_day field'
  step 'I enter month into the dob_month field'
  step 'I enter year into the dob_year field'
end

When(/^I enter the employee's details$/) do
  step 'I enter full_name into the employee_name field'
  step 'I enter the date of birth'
  step 'I enter nationality into the employee_nationality field'
  step 'I enter house_num into the house_add_num field'
  step 'I enter street into the street_name field'
  step 'I enter city into the city_add field'
  step 'I enter postcode into the postcode_add field'
  step 'I enter jobtitle into the employee_job field'
  step 'I enter hours into the hours_per_week field'
end

When(/^I enter the employer's details$/) do
  step 'I enter business_name into the business_name_text field'
  step 'I enter business_type into the business_type_text field'
  step 'I enter business_add into the business_add_text field'
  step 'I enter business_city into the business_city_text field'
  step 'I enter business_postcode into the business_postcode_text field'
  step 'I enter full_name into the employers_name_text field'
  step 'I enter employer_job_title into the employers_job_text field'
  step 'I enter contact_telephone into the employers_number_text field'
  step 'I enter contact_email into the employers_email_text field'
  step 'I enter contact_email into the employers_confirm_email_text field'
end

When(/^I enter the ARC card details$/) do
  step 'I enter arc_serial_num into the arc_serial_text field'
  step 'I enter ifb_ref_num into the ifb_serial_text field'
end

Then(/^I should see the headers and my information in the summary:$/) do | table |
  table.rows_hash.each do | header, information |
    expect(page).to have_content CONTENT[header]
    expect(page).to have_content CONTENT[information]
  end
end

Then(/^I should not see the tupe headers in the summary$/) do
    step 'I expect to not see tupe_transfer'
    step 'I expect to not see tupe_transfer_date'
end

Then(/^I should not see when did they start or tupe headers in the summary$/) do
  step 'I expect to not see when_did_they_start'
  step 'I expect to not see tupe_transfer'
  step 'I expect to not see tupe_transfer_date'
end

Then(/^I should not see original-docs or arc headers in the summary$/) do
  step 'I expect to not see arc_serial_numnber'
  step 'I expect to not see ifb_number'
  step 'I expect to not see original_document'
end

Then(/^I should not see original-docs header in the summary$/) do
  step 'I expect to not see original_document'
end

Then(/^I should not see settlement protection header in the summary$/) do
  step 'I expect to not see settlement_protection'
end

Then(/^I should not see case id header in the summary$/) do
  step 'I expect to not see ongoing_app'
end

Then(/^I expect to not see (.*)$/) do | content |
  expect(page).to have_no_content CONTENT[content]
end

When(/^I click work for you change button$/) do
  find(:xpath, "//*[@id='form-details']/tbody/tr[1]/td[3]/a").click
end

When(/^I click when did they start change button$/) do
  find(:xpath, "//*[@id='form-details']/tbody/tr[2]/td[3]/a").click
end

When(/^I click other-docs change button$/) do
  find(:xpath, "//*[@id='form-details']/tbody/tr[2]/td[3]/a").click
end

When(/^I click employer's email change button$/) do
  find(:xpath, "//*[@id='employer-details']/tbody/tr[7]/td[3]/a").click
end

When(/^I click employee's hours per week change button$/) do
  find(:xpath, "//*[@id='employee-details']/tbody/tr[6]/td[3]/a").click
end

Then(/^I change the employer's email address$/) do
  step 'I enter new_contact_email into the employers_email_text field'
  step 'I enter new_contact_email into the employers_confirm_email_text field'
end

Then(/^I change the employee's hours per week$/) do
  step 'I enter new_hours into the hours_per_week field'
end

Given /^I wait for (\d+) seconds?$/ do |n|
  sleep(n.to_i)
end