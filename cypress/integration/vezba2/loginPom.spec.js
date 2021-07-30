import { authLogin } from "../../page_objects/loginObject";
import { header } from "../../page_objects/headerObject";

describe("POM login", () => {
    it("Login and logout using POM", () => {
        cy.visit("/");
        header.loginClick();
        authLogin.login("danilotodorqvic@gmail.com", "bratdejan6");
        header.logout();
    });
});