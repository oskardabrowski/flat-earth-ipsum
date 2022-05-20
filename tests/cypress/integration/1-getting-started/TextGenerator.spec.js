describe("Text generating", () => {
  it("Should generate text", () => {
    cy.visit("http://localhost:3000/");

    cy.get("#numberOfParagraphs").should("have.value", "1");
    cy.get("#incBtn").click();
    cy.get("#incBtn").click();
    cy.get("#incBtn").click();
    cy.get("#numberOfParagraphs").should("have.value", "4");
    cy.get("#decBtn").click();
    cy.get("#numberOfParagraphs").should("have.value", "3");

    cy.get("#checkOption").check();
    cy.get("#checkOption").should("be.checked");

    cy.get("#typeSelection").should("have.value", "mixed");
    cy.get("#typeSelection").select("science");
    cy.get("#typeSelection").should("have.value", "science");

    cy.get("#submitBtn").click();

    cy.get(".GeneratedText").should("be.visible");

    cy.get("#textContainer-paragraphs").children().should("have.length", 3);
  });
});
