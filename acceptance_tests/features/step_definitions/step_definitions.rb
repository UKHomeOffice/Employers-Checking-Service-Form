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

And(/^I click back/) do
  find(:xpath, "//*[@id='step']/a").click
end

When(/^I enter (.*) into the (.*) and continue$/) do | text, field |
  step "I enter #{text} into the #{field} field"
  step 'I click next'
end

When(/^I enter (.*) into the (.*) field$/) do | text, field |
  fill_in CONTENT[field], :with => CONTENT[text]
end

When(/^I enter the (.*) date with year (.*)$/) do | field, year |
  step "I enter start_day into the #{field}_day_text field"
  step "I enter start_month into the #{field}_month_text field"
  step "I enter #{year} into the #{field}_year_text field"
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
  step 'I enter hours into the employee_hours_per_week field'
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

Then(/^I should not see the (.*) header in the summary$/) do | header |
  step "I expect to not see #{header}"
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

Then(/^I change the (.*) to (.*)$/) do | field, newanswer |
  step "I enter #{newanswer} into the #{field} field"
end

Then(/^I see the (.*) error message$/) do | message |
  expect(page).to have_content CONTENT["#{message}"]
end

Then(/^I see the employee details error messages$/) do
  step 'I see the employee_full_name_error error message'
  step 'I see the employee_nationality_error error message'
  step 'I see the employee_dob_error error message'
  step 'I see the employee_address_1_error error message'
  step 'I see the employee_address_2_error error message'
  step 'I see the employee_city_error error message'
  step 'I see the employee_postcode_error error message'
  step 'I see the employee_job_title_error error message'
  step 'I see the employee_hours_error error message'
end

Then(/^I see the employer details error messages$/) do
  step 'I see the business_name_error error message'
  step 'I see the business_type_error error message'
  step 'I see the business_Address_error error message'
  step 'I see the business_city_error error message'
  step 'I see the business_postcode_error error message'
  step 'I see the employer_name_error error message'
  step 'I see the employer_job_error error message'
  step 'I see the employer_number_error error message'
  step 'I see the employer_email_error error message'
  step 'I see the employer_confirm_email_error error message'
end

Then(/^I enter incorrect TUPE date$/) do
  step 'I enter start_day_before into the tupetransfer_day_text field'
  step 'I enter start_month into the tupetransfer_month_text field'
  step 'I enter start_year2006 into the tupetransfer_year_text field'
end

Then(/^I enter incorrect format (.*) date$/) do | field |
  step "I enter start_day into the #{field}_day_text field"
  step "I enter start_incorrect_format into the #{field}_month_text field"
  step "I enter start_year2008 into the #{field}_year_text field"
end

Then(/^I enter letters into the (.*) date fields$/) do | field |
  step "I enter start_alpha into the #{field}_day_text field"
  step "I enter start_beta into the #{field}_month_text field"
  step "I enter start_charlie into the #{field}_year_text field"
end
