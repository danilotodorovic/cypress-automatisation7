/// <reference types="cypress" />

import { authLogin } from "../../page_objects/loginObject";
import { header } from "../../page_objects/headerObject";
import { createGallery } from "../../page_objects/createGalleryObject"

let galleryID;



describe("Vezbamo intercept", () => {

    beforeEach(()=>{
        cy.visit("/");
        header.loginClick();
        authLogin.login("danilotodorqvic@gmail.com", "bratdejan6");
        cy.get(".nav-link").should("have.length", 4);

})

    // it("Intercept request", () => {
    //     cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/login").as("sucessfullLogin");
    //     cy.visit("/login");
    //     authLogin.login("danilotodorqvic@gmail.com", "bratdejan6");
    //     cy.wait("@sucessfullLogin").then((interception) => {
    //         console.log("evo ga interception", interception);
            
    //     })
    // })

    it("Izvlacenje vrednosti prilikom kreiranja galerije", () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/galleries").as("createdGallery")
        
        createGallery.createGalleryClick();
        createGallery.galleryCreation("Neki title", "Neki description", "https://tinypng.com/images/social/website.jpg");
        cy.wait("@createdGallery").then((interception) => {
            expect(interception.response.statusCode).to.eq(201)
            expect(interception.response.body).to.have.a("Object")
            console.log("created gallery interception", interception)
            galleryID = interception.response.body.id;
            console.log(galleryID)
        })
    })

    it("Posetiti i obrisati novokreiranu galeriju", () => {
        cy.visit(`galleries/${galleryID}`);
        cy.contains("Delete Gallery").click();
        header.logout();

    })

    it("Delete gallery", () => {
        console.log(galleryID);
        cy.visit(`galleries/${galleryID}`);
        cy.contains("Delete Gallery").click();
        header.logout();
    })

    it.only("Intersept logouta", () => {
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/logout").as("logouted");
        header.logout();
        cy.wait("@logouted").then((interception) => {
            console.log("intercepted", interception);
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.response.body.message).to.eq("Successfully logged out");
            expect(interception.response.url).to.contain("logout");
        })
    })

})