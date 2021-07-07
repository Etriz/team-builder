describe("form testing", () => {
  it("one", () => {
    cy.visit("http://localhost:3000");
    cy.get("#name").type("ryan").should("have.value", "ryan");
    cy.get("#email").type("email@email.com").should("have.value", "email@email.com");
    cy.get("#username").type("testing").should("have.value", "testing");
    cy.get("[type=submit]").click();
  });
  it("two", () => {
    cy.get(":nth-child(10) > .mt-1").click();
    cy.get(":nth-child(7) > :nth-child(5)").click();
    cy.get("#username").type(".IV").should("have.value", "Elwyn.Skiles.IV");
    cy.get("[type=submit]").click();
  });
});
