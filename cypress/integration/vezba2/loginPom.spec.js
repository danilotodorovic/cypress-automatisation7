import { authLogin } from "../../page_objects/loginObject";
import { header, logout } from "../../page_objects/headerObject";

describe("POM login", () => {
    it("Login and logout using POM", () => {
        cy.visit("/");
        cy.get('.nav-link').eq(1);
        authLogin.login("danilotodorqvic@gmail.com", "bratdejan6");
        header.logout();
    });
});