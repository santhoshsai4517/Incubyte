/** @format */

class HomePage {
	getCreateAccountLink() {
		return cy.get('header li a[href*="account/create/"]');
	}

	getSignInLink() {
		return cy.get('div[class="panel header"] li[data-label="or"] a');
	}

	getEmailInput() {
		return cy.get('#email');
	}

	getPasswordInput() {
		return cy.get('input[name="login[password]"]');
	}

	getSubmitButton() {
		return cy.get(
			'.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
		);
	}

	getName() {
		return cy.get('div[class="panel header"] span[class="logged-in"]');
	}
}

export default HomePage;
