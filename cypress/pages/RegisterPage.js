/** @format */

class RegisterPage {
	getCreateAccountText() {
		return cy.get('.base');
	}

	getFirstNameInput() {
		return cy.get('#firstname');
	}

	getLastNameInput() {
		return cy.get('#lastname');
	}

	getEmailInput() {
		return cy.get('#email_address');
	}

	getPasswordInput() {
		return cy.get('#password');
	}

	getConfirmPasswordInput() {
		return cy.get('#password-confirmation');
	}

	getSubmitButton() {
		return cy.get('button[title="Create an Account"]');
	}

	getFirstNameError() {
		return cy.get('#firstname-error');
	}

	getLastNameError() {
		return cy.get('#lastname-error');
	}

	getEmailError() {
		return cy.get('#email_address-error');
	}

	getPasswordError() {
		return cy.get('#password-error');
	}

	getConfirmPasswordError() {
		return cy.get('#password-confirmation-error');
	}

	getErrorMessage() {
		return cy.get('div[role="alert"]');
	}

	getPasswordStrength() {
		return cy.get('#password-strength-meter-label');
	}
}

export default RegisterPage;
