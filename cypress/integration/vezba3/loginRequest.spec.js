/// <reference types="cypress" />

import { authLogin } from "../../page_objects/loginObject";
import { header } from "../../page_objects/headerObject";

describe("POM login", () => {

    before(() => {
        // cy.request("POST", "https://gallery-api.vivifyideas.com/api/auth/login", 
        // {
        //     email: "danilotodorqvic@gmail.com",
        //     password: "bratdejan6"
        // }).its("body").then((response) => {
        //     // console.log("ovde logujemo", response);
        //     window.localStorage.setItem("token", response.access_token)
        // });

        // cy.loginCommand("danilotodorqvic@gmail.com", "bratdejan6")

        cy.loginCommandEnv();
    });

    it("Login through backend", () => {
        cy.visit("/");
        // header.loginClick();
        // authLogin.login("danilotodorqvic@gmail.com", "bratdejan6");
        // header.logout();
    });

    it.only("Get allGalleries through backend", () => {
        cy.request("GET", "https://gallery-api.vivifyideas.com/api/galleries?page=1&term=").its("body").then((response) => {
            console.log("ovde logujemo", response);
        })
    })
});

