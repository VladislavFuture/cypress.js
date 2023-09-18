describe('тест на логин и пароль', function () {
    it('верный логин и верный пароль ', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail') .type('german@dolnikov.ru');
         cy.get('#pass') .type('iLoveqastudio1');
         cy.get('#loginButton') .click();  
         cy.contains('Авторизация прошла успешно').should('be.visible'); 
         cy.get('#exitMessageButton > img') .click();
     })
    
     it('забыл пароль ', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#forgotEmailButton') .click();
         cy.get('#mailForgot') .type('german@dolnikov.ru');
         cy.get('#restoreEmailButton') .click();
         cy.contains('Успешно отправили пароль на e-mail') .should('be.visible');
         cy.get('#exitMessageButton > img') .click();
     })
     
         it('правильный логин ,неправильный пароль ', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail') .type('german@dolnikov.ru');
         cy.get('#pass') .type('iLoveqastudio14');
         cy.get('#loginButton') .click();  
         cy.contains('Такого логина или пароля нет').should('be.visible'); 
         cy.get('#exitMessageButton > img') .click();

         })

         it('неправильный логин, праильный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail') .type('german@4dolnikov.ru');
         cy.get('#pass') .type('iLoveqastudio1');
         cy.get('#loginButton') .click();  
         cy.contains('Такого логина или пароля нет').should('be.visible'); 
         cy.get('#exitMessageButton > img') .click();

         })

         it('Напиши проверку на негативный кейс валидации  Ввести логин без @', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail') .type('germandolnikov.ru');
         cy.get('#pass') .type('iLoveqastudio1');
         cy.get('#loginButton') .click();  
         cy.contains('Нужно исправить проблему валидации').should('be.visible'); 

         })

         it('Напиши проверку на негативный кейс валидации Ввести логин GerMan@Dolnikov.ru', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail') .type('GerMan@Dolnikov.ru');
         cy.get('#pass') .type('iLoveqastudio1');
         cy.get('#loginButton') .click();  
         cy.contains('Авторизация прошла успешно').should('be.visible'); 
         cy.get('#exitMessageButton > img') .click(); 
         
         



     })
 })









