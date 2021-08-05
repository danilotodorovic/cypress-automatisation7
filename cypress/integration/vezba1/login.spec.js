/// <reference types="Cypress" />

describe("Login", () => {
    it('Visit', () => {
        cy.visit('/');
        cy.url().should("contain", "gallery-app")
        cy.get('.nav-link').eq(1).should("be.visible").click();
    });

    // .only pokrece samo konkretan it
    it("Login with valid data", () => {
        cy.visit('/');
        cy.get('.nav-link').eq(1).should("be.visible").click();
        cy.url().should("contain", "login")
        cy.get("h1").should("have.text", "Please login")
        cy.get('#email').type("danilotodorqvic@gmail.com");
        cy.get('#password').type("bratdejan6");
        cy.get("button").should("be.visible").and("have.css", "color", "rgb(255, 255, 255)").and("have.css", "background-color", "rgb(72, 73, 75)").click();
    });

    it.only("Logout", () => {
        cy.visit('/');
        cy.get('.nav-link').eq(1).should("be.visible").click();
        cy.url().should("contain", "login")
        cy.get("h1").should("have.text", "Please login")
        cy.get('#email').type("danilotodorqvic@gmail.com");
        cy.get('#password').type("bratdejan6");
        cy.get("button").should("be.visible").and("have.css", "color", "rgb(255, 255, 255)").and("have.css", "background-color", "rgb(72, 73, 75)").click();
        // cy.wait(500); //lose ga je koristiti, moze za debug ili ako bas nema drugog nacina
        cy.get(".nav-link").should("have.length", 4); // asertacija, moze da se koristi da sacekamo dok se ne ostvari ocekivano
        cy.get("a[href='/login']").should("not.exist");
        cy.get(".nav-link").eq(3).should("contain", "Logout").and("have.css", "background-color", "rgba(0, 0, 0, 0)").click();
        cy.get(".nav-link").should("have.length", 3);
    });

    it("Login without credentials", () => {
        cy.visit("/");
        cy.get("a[href='/login']").click();
        //cy.get("button").should("be.visible");
        cy.get("button").click();
    });

});