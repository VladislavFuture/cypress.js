
describe('покупка нового аватара для тренера', function () {
   it('аватар', function () {
        cy.visit('https://pokemonbattle.me/');
        cy.get('#root > div > main > section > div.login__content > form > div:nth-child(1) > input' ) .type('ff20231999@gmail.com');
        cy.get('#password') .type('Kansas1709');
        cy.get('#root > div > main > section > div.login__content > form > button') .click();
        cy.get('#root > div > header > div > div.header__container-btn > div > a:nth-child(3) ') .click();
        cy.get('#root > div > main > section.shop > ul > li:nth-child(12) > button') .click();
        cy.get('#root > div > main > form > div > div:nth-child(2) > input') .type('4111111111111111');
        cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(1) > input') .type('12/25');
         cy.get('#root > div > main > form > div > div.pay-inputs-box > div:nth-child(2) > input') .type('125');
          cy.get('#root > div > main > form > div > div.pay__input-box-v2.pay__input-box-last-of > input') .type('Vladislav Vaganov');
          cy.get('#root > div > main > form > div > button') .click();
          cy.get('#cardnumber') .type ('56456');
          cy.get('#root > div > main > form > div > div > button') .click();
          cy.contains('Покупка прошла успешно') .should('be.visible');
          cy.get('#root > div > main > div.payment__form-container-defolt > form > div > button > p') .click();

        

    })

})
