describe('template spec', () => {
  it('passes', () => {
    //რეგისტრაცია არასებული იმეილით
    cy.visit('https://testzootopia.loremipsum.ge/ka')
        let random = Math.round((Math.random()*1000)%1000)
        cy.log(random)
        let email = "ararsebulimaili"+random+"@gmail.com"
        let numm = "112235436"+random
        let mobile = "112345"+random
    
        cy.register(email, numm, mobile)
        cy.log("is registered")
      })
    })
  