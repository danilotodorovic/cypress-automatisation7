import {authLogin} from "../../page_objects/loginObject";
import {header} from "../../page_objects/headerObject";
import {createGallery} from "../../page_objects/createGalleryObject";

describe("POM create gallery", () => {
    it("Creating gallery using POM", () => {
        cy.visit("/");
        header.loginClick();
        authLogin.login("danilotodorqvic@gmail.com", "bratdejan6");
        createGallery.createGalleryClick();
        createGallery.galleryCreation("Neki title", "Neki description", "https://tinypng.com/images/social/website.jpg");
    });
});