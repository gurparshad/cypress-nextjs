describe('form tests', () => {
  beforeEach(() => {
    cy.visit('/forms');
  })

  it('Test subscribe form', () => {
    cy.contains(/testing forms/i);
    cy.getDataTest('subscribe-form').find('input').as("subscribe-input");
    cy.get('@subscribe-input').type("gp@gmail.com");
    cy.contains(/Successfully subbed: gp@gmail.com/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Successfully subbed: gp@gmail.com/i).should('exist');
    cy.wait(3000);
    cy.contains(/Successfully subbed: gp@gmail.com/i).should('not.exist');

    cy.get('@subscribe-input').type("gp@gmail.io");
    cy.contains(/Invalid email: gp@gmail.io/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Invalid email: gp@gmail.io/i).should('exist');
    cy.wait(3000);
    cy.contains(/Invalid email: gp@gmail.io/i).should('not.exist');

    cy.contains(/Fail!/i).should('not.exist');
    cy.getDataTest('subscribe-button').click();
    cy.contains(/Fail!/i).should('exist');
  })
})