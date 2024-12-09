/** @format */

class AccountPage {
	getSuccessMessage() {
		return cy.get('div[role="alert"]');
	}

	getContactInfo() {
		return cy.get('div.box-content p');
	}

	getDropDown() {
		return cy.get('div[class="panel header"] button[type="button"]');
	}

	getSignout() {
		return cy.get('div[aria-hidden="false"] li[data-label="or"] a');
	}
}

export default AccountPage;
