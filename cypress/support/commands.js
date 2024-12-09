/** @format */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import RegisterPage from '../pages/RegisterPage';

// Creating a custom command to register
Cypress.Commands.add(
	'register',
	(firstName, lastName, email, password, confirmPassword) => {
		const registerPage = new RegisterPage();
		if (firstName !== '')
			registerPage.getFirstNameInput().type(firstName);
		if (lastName !== '') registerPage.getLastNameInput().type(lastName);
		if (email !== '') registerPage.getEmailInput().type(email);
		if (password !== '') registerPage.getPasswordInput().type(password);
		if (confirmPassword !== '')
			registerPage.getConfirmPasswordInput().type(confirmPassword);



		registerPage.getSubmitButton().click();
	}
);
