/// <reference types="cypress" />

import { authLogin } from "../../page_objects/loginObject";
import { header } from "../../page_objects/headerObject";
import { createGallery } from "../../page_objects/createGalleryObject";

describe("HTML validation", () => {
    it("singleCase", () => {
        cy.visit("/");
        header.loginButton.click();
        authLogin.email.type("@gmail.com").then((input) => {
            console.log("ovde nam je input", input[0].validationMessage);
            expect(input[0].validationMessage).to.eq("Please enter a part followed by '@'. '@gmail.com' is incomplete.")
        });
    });
});