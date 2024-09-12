describe('Estudando automatização com Cypress', () => {
  it('Acessando a página e verificando o nome de um campo', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Automation');
    cy.get('h1'); // acessando a tag h1
    cy.get('h1').contains('Automation'); //boa prática de também validar a tag
    cy.get('.features_items');
    cy.get('div.features_items');
    cy.get('div.recommended_items');
    //cy.get('div.id = women');
  })

  it('Acessar página de login, tentar acesso com senha ou email errado e informar esta situação',()=>{
    cy.visit('/'); //foi configurado a url base no arquivo de configuração
    cy.get('div.shop-menu').contains('Login').click();
    cy.get('h2').contains('Login to your account');
    cy.get('[data-qa="login-email"]').type('teste@email.com');
    // ou cy.get('login-form').find('input[name="email"]')
    cy.get('[data-qa="login-password"]').type('123456');
    cy.get('[data-qa="login-button"]').contains('Login').click();
    cy.contains('Your email or password is incorrect!');
  })

  it('Acessar página de login e realizar acesso com sucesso',()=>{
    cy.visit('/');
    cy.get('div.shop-menu').contains('Login').click();
    cy.get('[data-qa="login-email"]').type('ro85pereira@hotmail.com');
    cy.get('[data-qa="login-password"]').type('SalazarVasco');
    cy.get('[data-qa="login-button"]').click();
  })

})