/// <reference types="cypress" />

const Locators = require("../../fixtures/Locators.json");
const faker = require("faker");
let userData = {
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password()
}

let registerUser = {
    randomFirstName: faker.name.firstName(),
    randomLastName: faker.name.lastName(),
    randomEmail: faker.internet.email(),
    randomPassword: faker.internet.password()
}

describe("Poboljsani testovi", () => {

    let correctEmail = "danilotodorqvic@gmail.com";
    let correctPassword = "bratdejan6";
    
    beforeEach(() => {
        cy.visit("/");
        cy.url().should("contain", "https://gallery-app");
    });

    it("Login with valid credentials", () => {
        cy.get(Locators.Header.Login).click();
        cy.get(Locators.Login.Email).type(correctEmail);
        cy.get(Locators.Login.Password).type(correctPassword);
        cy.get(Locators.Login.Submit).click();
    });    
    
    it("Logout", () => {
        cy.get(Locators.Header.Login).click();
        cy.get(Locators.Login.Email).type(correctEmail);
        cy.get(Locators.Login.Password).type(correctPassword);
        cy.get(Locators.Login.Submit).click();
        cy.get(Locators.Login.Logout).should("be.visible").click();
    });

    it("Register with valid credentials", () => {
        cy.get(Locators.Header.Register).click();
        cy.get(Locators.Register.FirstName).type("Ime");
        cy.get(Locators.Register.LastName).type("Prezime");
        cy.get(Locators.Register.Email).type("newemail@email.com");
        cy.get(Locators.Register.Password).type("password1");
        cy.get(Locators.Register.ConfirmedPassword).type("password1");
        cy.get(Locators.Register.Checkbox).check();
        cy.get(Locators.Register.Submit).click();
    });

    it("Login with random credentials", () => {
        cy.get(Locators.Header.Login).click();
        cy.get(Locators.Login.Email).type(userData.randomEmail);
        cy.get(Locators.Login.Password).type(userData.randomPassword);
        cy.get(Locators.Login.Submit).click();
    });  
    
    it.only("Register with random credentials", () => {
        cy.get(Locators.Header.Register).click();
        cy.get(Locators.Register.FirstName).type(registerUser.randomFirstName);
        cy.get(Locators.Register.LastName).type(registerUser.randomLastName);
        cy.get(Locators.Register.Email).type(registerUser.randomEmail);
        cy.get(Locators.Register.Password).type(registerUser.randomPassword+1);
        cy.get(Locators.Register.ConfirmedPassword).type(registerUser.randomPassword+1);
        cy.get(Locators.Register.Checkbox).check();
        cy.get(Locators.Register.Submit).click();
    });  
});