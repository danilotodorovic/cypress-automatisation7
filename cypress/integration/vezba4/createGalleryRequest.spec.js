/// <reference types="cypress" />

import { authLogin } from "../../page_objects/loginObject";
import { header } from "../../page_objects/headerObject";

describe("POM login", () => {

    before(() => {
        cy.request("POST", "https://gallery-api.vivifyideas.com/api/auth/login", 
        {
            email: "danilotodorqvic@gmail.com",
            password: "bratdejan6"
        }).its("body").then((response) => {
            // console.log("ovde logujemo", response);
            let token = response.access_token;
        });

        // cy.loginCommand("danilotodorqvic@gmail.com", "bratdejan6")

        // cy.loginCommandEnv();
    });

    it("create gallery through backend", () => {
        // cy.visit("/create");

        cy.request("POST", "https://gallery-api.vivifyideas.com/api/galleries",
        {
            authorization: Bearer `${token}`
        },
        {
            title:"ahareh",
            description:"rehahrh",
            images:"https://tinypng.com/images/social/website.jpg"
        }).its("body").then((response) => {
            console.log("response", response);
            
        })
    })
});