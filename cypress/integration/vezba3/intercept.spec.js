/// <reference types="cypress" />

import { authLogin } from "../../page_objects/loginObject";
import { header } from "../../page_objects/headerObject";
import { createGallery } from "../../page_objects/createGalleryObject"

let galleryID;

describe("Vezbamo intercept", () => {
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
        cy.visit("/");
        header.loginClick();
        authLogin.login("danilotodorqvic@gmail.com", "bratdejan6");
        createGallery.createGalleryClick();
        createGallery.galleryCreation("Neki title", "Neki description", "https://tinypng.com/images/social/website.jpg");
        cy.wait("@createdGallery").then((interception) => {
            // console.log("created gallery interception", interception)
            galleryID = interception.response.body.id;
            console.log(galleryID)
        })
        cy.visit(`galleries/${galleryID}`);
        cy.contains("Delete Gallery").click();


    })

    // it("Posetiti i obrisati novokreiranu galeriju", () => {
    //     cy.visit(`galleries/${galleryID}`);
    //     cy.contains("Delete Gallery").click();
    // })

})