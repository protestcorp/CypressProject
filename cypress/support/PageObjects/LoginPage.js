class LoginPage
{ 

   getClickOnLoginButton()
   {
       return cy.get(':nth-child(3) > #user_login')
   }
   getEmailId()
   {
       
       return cy.get('#edit-name')
   }
   getPassword()
   {
        return cy.get('#edit-pass')
   }
   getClickOnSign()
   {
        return cy.get('#edit-submit')
   }
}
export default LoginPage