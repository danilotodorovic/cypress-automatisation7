/// <reference types="cypress" />

describe("Creating gallery through backend", () => {

let token;
let id;

    it("login", () => {
        cy.request({
            method: "POST",
            url: "https://gallery-api.vivifyideas.com/api/auth/login",
            body: {
                email: "danilotodorqvic@gmail.com",
                password: "bratdejan6"
            }
        }).then((response) => {
            console.log(response)
            expect(response).to.have.property("status", 200);
            expect(response.body).to.not.be.null;
            token = response.body.access_token;
            console.log("prvi console", token);
            console.log("body", response)
        });
    })

    it("create gallery", () => {
        cy.request({
            method: "POST",
            url: "https://gallery-api.vivifyideas.com/api/galleries",
            auth: {
                bearer: token
            },            
            body: {
                title: "neki title",
                description: "neki descr",
                images: ['https://tinypng.com/images/social/website.jpg']
            }
        }).then((response) => {
            console.log("create gall", response);
            expect(response).to.have.property("status", 201);
            expect(response).to.have.property("statusText", "Created");
            expect(response.body.title).to.equal("neki title");
            expect(response.body.description).to.equal("neki descr");
            id = response.body.id;
        })
    })

    it("edit gallery", () => {
        cy.request({
            method: "PUT",
            url: `https://gallery-api.vivifyideas.com/api/galleries/${id}`,
            auth: {
                bearer: token
            },            
            body: {
                title: "neki novi title",
                description: "neki novi descr",
                images: ['https://tinypng.com/images/social/website.jpg']
            }
        }).then((response) => {
            console.log("edit", response);
            expect(response).to.have.property("status", 200);
            expect(response.body.title).to.equal("neki novi title");
            expect(response.body.description).to.equal("neki novi descr");
            expect(response.body.id).to.equal(id);
        })
    })

    it("delete gallery", () => {
        cy.request({
            method: "DELETE",
            url: `https://gallery-api.vivifyideas.com/api/galleries/${id}`,
            auth: {
                bearer: token
            }            
        }).then((response) => {
            console.log("delete", response);
            expect(response).to.have.property("status", 200);
        })
    })
})

