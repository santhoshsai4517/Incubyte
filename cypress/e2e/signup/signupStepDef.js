/** @format */

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { faker, fi } from '@faker-js/faker'; // For generating fake data
import HomePage from '../../pages/HomePage';
import RegisterPage from '../../pages/RegisterPage';
import AccountPage from '../../pages/AccountPage';

const homePage = new HomePage();
const registerPage = new RegisterPage();
const accountPage = new AccountPage();

const password = faker.internet.password();
const email = faker.internet.email();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();

Given(`User visits home page`, () => {
	cy.visit('/');
});

When(`User clicks on create an account link`, () => {
	homePage.getCreateAccountLink().click();
});

Then(
	`User is redirected to sign up page and {string} is displayed`,
	(message) => {
		registerPage.getCreateAccountText().should('have.text', message);
		cy.url().should(
			'eq',
			Cypress.config().baseUrl + 'customer/account/create/'
		);
	}
);

Given(`User visits account creation page`, () => {
	cy.visit('/');
	homePage.getCreateAccountLink().click();
});

When(`User enters all valid details and clicks on create account`, () => {
	cy.register(firstName, lastName, email, password, password); // Using custom command
});

Then(
	`Page is redirected to account page and {string} is displayed`,
	(message) => {
		cy.url().should(
			'eq',
			Cypress.config().baseUrl + 'customer/account/'
		);
		accountPage.getSuccessMessage().should('contain.text', message);
		accountPage.getContactInfo().should('contain.text', email);
		accountPage
			.getContactInfo()
			.should('contain.text', firstName + ' ' + lastName);
	}
);

When(`User submits registration form without any details`, () => {
	cy.wait(2000);
	cy.register('', '', '', '', '');
});

Then(`{string} errors are displayed`, (error) => {
	cy.wait(2000);
	cy.url().should(
		'eq',
		Cypress.config().baseUrl + 'customer/account/create/'
	);

	registerPage.getFirstNameError().should('have.text', error);
	registerPage.getLastNameError().should('have.text', error);
	registerPage.getEmailError().should('have.text', error);
	registerPage.getPasswordError().should('have.text', error);
	registerPage.getConfirmPasswordError().should('have.text', error);
});

When(`User submits registration form with invalid email address`, () => {
	cy.register(
		firstName,
		lastName,
		faker.person.firstName(),
		password,
		password
	);
});

Then(`{string} error is displayed`, (error) => {
	cy.url().should(
		'eq',
		Cypress.config().baseUrl + 'customer/account/create/'
	);

	registerPage.getEmailError().should('have.text', error);
});

When(`User submits registration form with regis email address`, () => {
	cy.register(
		firstName,
		lastName,
		'santhoshsai4517@gmail.com',
		password,
		password
	);
});

Then(`{string} error is displayed to user`, (error) => {
	cy.url().should(
		'eq',
		Cypress.config().baseUrl + 'customer/account/create/'
	);

	registerPage.getErrorMessage().should('contain.text', error);
});

When(
	`User submits registration form with different password and confirm password`,
	() => {
		cy.register(firstName, lastName, email, password, '2134');
	}
);
Then(`{string} password error is displayed`, (error) => {
	cy.url().should(
		'eq',
		Cypress.config().baseUrl + 'customer/account/create/'
	);

	registerPage.getConfirmPasswordError().should('have.text', error);
});

Then(`Password strength is {string}`, (strength) => {
	registerPage.getPasswordStrength().should('contain.text', strength);
});

When(`User enters password length less than 8 characters`, () => {
	cy.register(firstName, lastName, email, '123', '123');
});

Then(
	`Password strength is {string} and {string} is displayed`,
	(strength, error) => {
		registerPage.getPasswordStrength().should('contain.text', strength);
		registerPage.getPasswordError().should('contain.text', error);
	}
);

When(
	`User enters password length more than 8 characters and password is weak`,
	() => {
		cy.register(firstName, lastName, email, '123fregwsh', '123fregwsh');
	}
);
