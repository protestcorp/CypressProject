
 Feature: Course Matching Tool
 
# Author:
# Last Updated:
# Comments 
# 

Scenario: Not Registered user CMT process
    Given  User launch Course Matching website and landed on CMT Webpage
    And    User clicks on course matching tool
    And    User is Navigated to Search Page
    And    User selects Study Level
    And    User selects Learning Type
    And    User selects Nationality, Destination and Subjects and Click on "Submit"
    And    User is landed on Match Page and Entered Details
    And    User is landed on Preference Page and Entered Details
    And    Check login page is displayed and clear session cookies

# Author:
# Last Updated:
# Comments 
# 
 Scenario: Logged in user search Operation
    Given  User launch Course Matching website and landed on CMT Webpage
    When   User logins in and landed on Homepage
    And    User clicks on course matching tool
    And    User is Navigated to Search Page
    And    User selects Study Level
    And    User selects Learning Type
    And    User selects Nationality, Destination and Subjects and Click on "Submit"
    And    User is landed on Match Page and Entered Details
    And    User is landed on Preference Page and Entered Details
    Then   Results are displayed

