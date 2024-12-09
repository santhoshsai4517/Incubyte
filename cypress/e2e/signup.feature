Feature: SignUp Page validation

Scenario: Navigating to sign up page
  Given User visits home page
  When User clicks on create an account link
  Then User is redirected to sign up page and "Create New Customer Account" is displayed


Scenario: Registration with all valid details
  Given User visits account creation page
  When User enters all valid details and clicks on create account
  Then Page is redirected to account page and "Thank you for registering with Main Website Store." is displayed

Scenario: Registration with no details
  Given User visits account creation page
  When User submits registration form without any details
  Then "This is a required field." errors are displayed


Scenario: Registration with invalid email address
  Given User visits account creation page
  When User submits registration form with invalid email address
  Then "Please enter a valid email address (Ex: johndoe@domain.com)." error is displayed


Scenario: Registration with registered email address
  Given User visits account creation page
  When User submits registration form with regis email address
  Then "There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account." error is displayed to user

Scenario: Registration with different password and confirm password
  Given User visits account creation page
  When User submits registration form with different password and confirm password
  Then "Please enter the same value again." password error is displayed

Scenario: When password is empty password strength is no password
  Given User visits account creation page
  Then Password strength is "No Password"

Scenario: Registration with password less than 8 characters
  Given User visits account creation page
  When User enters password length less than 8 characters
  Then Password strength is "Weak" and "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored." is displayed

Scenario: Registration with password more than 8 characters and password is weak
  Given User visits account creation page
  When User enters password length more than 8 characters and password is weak
  Then Password strength is "Weak" and "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters." is displayed  