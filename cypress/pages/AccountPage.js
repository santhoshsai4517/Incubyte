/** @format */

class AccountPage {
	getSuccessMessage() {
		return cy.get('div[role="alert"]');
	}

	getContactInfo() {
		return cy.get('div.box-content p');
	}
}

export default AccountPage;
