class Header {
    get loginButton(){
        return cy.get("a[href='/login']");
    }
    get registerButton(){
        return cy.get("a[href='/register']");
    }
    get logoutButton(){
        return cy.get(".ml-auto > :nth-child(3) > .nav-link");
    }
    loginClick(){
        this.loginButton.click();
    }
    logout(){
        this.logoutButton.click();
    }
}

export const header = new Header();