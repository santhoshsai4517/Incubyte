/** @format */

class HomePage {
	getCreateAccountLink() {
		return cy.get('header li a[href*="account/create/"]');
	}
}

export default HomePage;
