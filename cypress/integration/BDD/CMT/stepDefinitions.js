/// <reference types="Cypress" />

/// <reference types="Cypress-xpath" />

//-------------------------imports------------------------------------------------------------
import "../../../support/commands";
import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";
import { expect } from "chai";
import LoginPage from "../../../support/PageObjects/LoginPage";
import CourseMatchPage from "../../../support/PageObjects/CourseMatchPage";
import SearchPage from "../../../support/PageObjects/SearchPage";
import MatchPage from "../../../support/PageObjects/MatchPage"
import PreferencePage from "../../../support/PageObjects/PreferencePage";
import ResultsPage from "../../../support/PageObjects/ResultsPage";



//----------------Object Declaration----------------------------------------------------------
const lp =new LoginPage()
const hp = new CourseMatchPage()
const sp = new SearchPage()
const mp = new MatchPage()
const pp = new PreferencePage()
const rp = new ResultsPage()

//----------------BDD Hooks-----------------------------------------------------------------
Before(() => {      
   cy.fixture('example').then(function(data)
   {
       this.data = data;
   })
});

//----------------------Test Scripts-------------------------------------------------------
Given ('User launch Course Matching website and landed on CMT Webpage', function(){
    cy.launchURL(Cypress.env('Baseurl')+Cypress.env('CMT'))
    cy.title().should('contains', this.data.CMTPageTitle)
    
})
//-------------------------Logged in user scenario----------------------------------------
When ('User logins in and landed on Homepage', function()
{
    lp.getClickOnLoginButton().click()
    lp.getEmailId().type(this.data.email)
    lp.getPassword().type(this.data.password)
    lp.getClickOnSign().click()
    cy.wait(8000)
})

And ('User clicks on course matching tool', function()
{
    hp.getClickOnStartMatchinginPage().click()
    cy.wait(5000)
})

And('User is Navigated to Search Page', function(){
    cy.title().should('contains', this.data.CMTSearchTab)
    cy.wait(5000)
})

And('User selects Study Level', function(){
    sp.getAllStudyLevelButtons().randomData()
    cy.wait(5000)
})
    
And('User selects Learning Type', function()
{
    sp.getAllLearningTypeButtons().randomData()
    cy.wait(2000)
})
    

And('User selects Nationality, Destination and Subjects and Click on "Submit"', function(){
    //sp.getnationalitytabopen().click({force: true}) 
    sp.getNationalitySearch().click({force: true})
    
    sp.getNationalitySearch().type(this.data.NationalitySearch)
    cy.wait(2000)
    
    sp.getNationality().randomData()
    cy.wait(5000)
    
    sp.getAllDestination().randomData()
    cy.wait(2000)
    
    sp.getSubjectSearchInput().click()
    cy.wait(5000)
    
    sp.getSubjectSearchInput().type(this.data.Subject)
    cy.wait(2000)
    sp.getAllSubjects().randomData()

    sp.getPreviousYearOptions().randomData()
    sp.getSubmit().click()
})

And('User is landed on Match Page and Entered Details', function(){
   // mp.getPreviousStudyLevelDropDown().click()
    cy.wait(5000)
    mp.getAllPreviousStudyLevelOptions().each(($el, index, list$) =>
    {
        if($el.text() == (this.data.PSL))
        {
            $el.trigger("click");
        }
    })
    
    cy.wait(6000)
    mp.getGradeOption().click()

 //----------------------Checking the grades-------------------------------------------------------------   
        cy.wait(5000)
        mp.getScoreOption1().click()

        mp.getScore().click()
        mp.getScore().type(this.data.Score.Option2Data)
    
    cy.wait(6000)
    mp.getWorkExperience().randomData()
    mp.getNextbutton().click()
})

And('User is landed on Preference Page and Entered Details', function()
{
    pp.getDiversity().randomData()
    pp.getNextButton().click()
})

And('Check login page is displayed and clear session cookies', function()
{
    rp.getLoginPageGuestUser().should('be.visible')
    cy.clearCookies()
})

Then('Results are displayed', function()
{
    cy.title().should('contains', this.data.CMTResultsPage)
    rp.getSchoolViewTab().should('be.visible')
    //To check 3 icons are displayed
    rp.getreachSchoolIcon().should('be.visible')
    rp.getTargetSchoolIcon().should('be.visible')
    rp.getSafetySchoolIcon().should('be.visible')

    //to verify matching program
    //rp.getMatchingPrograms().each(($el, index, list$)=>
   // {
   //     expect($el.text()).to.contain('matching programs')
        
  //  })

   //to click on program view tab
    rp.getProgramViewTab().should('be.visible')
    rp.getProgramViewTab().click()
})
    

   