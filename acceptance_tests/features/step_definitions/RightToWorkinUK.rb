Given(/^employer checking service form$/) do
  visit config['ecs-application']
end

Then(/^I am on 'right to work' page of the employer checking service form$/) do
  page.should have_content('Does the employee or prospective employee have a passport from the UK, the European Economic Area (EEA) or Switzerland, or other immigration documents from the Home Office that demonstrate a right to work?')
  page.should have_content('Which countries are in the EEA?')
  find('eea-passport-Yes')
  Capybara.default_selector = :xpath
  page.find_by_id('eea-passport-Yes')
  page.find('#panel-indent hidden', :text => 'The EEA includes: Austria, Belgium, Bulgaria, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, United Kingdom.')
end
