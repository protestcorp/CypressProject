/// <reference types="Cypress" />

/// <reference types="Cypress-xpath" />
///<reference types="cypress-iframe" />

//-------------------------imports------------------------------------------------------------
import WUR from "../../../support/PageObjects/WUR";
import "../../../support/commands";
import { Given, When, Then, And, Before } from "cypress-cucumber-preprocessor/steps";
import { expect } from "chai";


//----------------Object Declaration----------------------------------------------------------
const pageWUR =new WUR()

//----------------BDD Hooks-----------------------------------------------------------------
Before(() => {      
   cy.fixture('example').then(function(data)
   {
       this.data = data;
   })
});

//----------------Test Scripts---------------------------------------------------------------

//----------------Navigate to page and check for the landing page----------------------------
Given('On launching url, user is landing on "World University Rankings" page',function()
{
   cy.launchURL(Cypress.env('Baseurl')+Cypress.env('WUR'))
   cy.title().should('contains', this.data.pageTitle)

})

//----------------------Check DFPs in the page-----------------------------------------------
And ('Check DFPs in page',function()
{
   pageWUR.getAllDFPs().should('have.length',"3")
   cy.wait(3000) 
})

And ('Check DFPs 1 at the top and 2 inside table', function()
{
   pageWUR.getTableSection().find('iframe').should('have.length', 2)
   pageWUR.getTopSection().find('iframe').should('have.length', 1)
   pageWUR.getfirstiFrame().checkiFramesVisible()
   pageWUR.getsecondiFrame().checkiFramesVisible()
   pageWUR.getthirdiFrame().checkiFramesVisible()

}) 

//------------------Select University Rankings page-------------------------------------------
When('Check by default "University Rankings" tab is selected and is highlighted', function()
{
   pageWUR.getUniversityRankingTab().then(($el) => {
      Cypress.dom.isFocused($el)
    })
})

//-----------------Latest Year is selected---------------------------------------------------
Then ('Check latest year is selected in "Year" dropdown', function()
{
   const currentyear = new Date().getFullYear()
   pageWUR.getRankingYear().should('contain', currentyear+1)
})

//-----------------Rankings table is available-----------------------------------------------
And('Check if Rankings table is present', function()
{
   pageWUR.getTable().should('be.visible')
})

//-----------------Rankings table header validation-------------------------------------------
And('Rankings table header consists of 3 columns', function()
{
   pageWUR.getFirstColumnHeader().should('contain.text', this.data.rankingsTableCol.Col1)
   pageWUR.getSecondColumnHeader().should('contain.text', this.data.rankingsTableCol.Col2)
   pageWUR.getthirdColumnHeader().should('contain.text', this.data.rankingsTableCol.Col3)
})

//-----------------Results displayed is as Results per Page dropdown value--------------------------
And('Check Results per Page', function()
{
   pageWUR.getResultsperPageDropdown().click();
   cy.resltsperPage(this.data.ResultsperPage) //****************************** */
   pageWUR.getTableRow().should('have.length',this.data.ResultsperPage)
})
//--------------------------Validate Overall Score---------------------------------------------------
And('validate University with Rank 1 has the Highest OverallScore and Lowest OverallScore',function()
{     
      cy.maxScore()
      cy.minScore()
      pageWUR.getFirstRank().should("have.text","1")
   } )
//})


And('Check if scores are equal, rank is appended with equal sign and to check next rank', function()
{
   cy.toCheckEqualScores()
})
   

//----------------------------------Check university name, location, rank, score------------------------------------------------
   And('Check UniversityNames, Universitylocation, rank column, score column has values',function(){
            pageWUR.getallUniversityNames().toHaveText()
            pageWUR.getallLocationNames().toHaveText()
            pageWUR.getallRankValues().toHaveText()   
            pageWUR.getallScores().toHaveText()
      })
//-----------------------------------Logos---------------------------------------------------------------
   And('Check UniversityLogos has images', function()
   {
        pageWUR.getallLogos().imageToHaveSource()
   })

//-----------------------------------Asc Sort----------------------------------------------------------
And('Check the score sorting', function()
{
   pageWUR.getScoreSortingIcon().click()
   cy.sortingAsc()
   pageWUR.getScoreSortingIconDesc().click()
   cy.sortingDesc()
})

//------------------------------------Check All icons are loaded---------------------------------------
And('Check "KnowMore", "Compare" and "shortlist" icons are available', function()
{
   pageWUR.getResultsPerPageText().then(function(element)
   {
      const pagenum = element.text()
      pageWUR.getKnowMoreIcon().should('have.length',pagenum).should('be.visible')
      pageWUR.getCompareIcon().should('have.length',pagenum).should('be.visible')
      pageWUR.getShortlistIcon().should('have.length',pagenum).should('be.visible')
   })
})
   
//--------------------------------Current Year is displayed-------------------------------------------
   
And ('validate the year',function()
   {
   const currentyear = new Date().getFullYear()
   pageWUR.getRankingsTab().trigger('mouseover')
   cy.wait(5000)
   pageWUR.getRankingsTab().click()
   pageWUR.getQSWUR().click({force: true})
   pageWUR.getViewListButton().click()
   pageWUR.getHeadLine().should('contain.text', currentyear+1)
   pageWUR.getRankingYear().should('contain.text', currentyear+1)      
   }) 

And('Check pagination', function(){
   cy.get(':nth-child(3) > .page-link').click()
   pageWUR.getTable().should('be.visible')
})
//------------------------------------------Ranking Indicators Check------------------------------------
   Given('Click on Ranking Indicators Tab', function()
   {
      pageWUR.getRankingIndicatorsTab().click()
   })

   When('Check "Rankings Indicators" table is displayed', function()
   {
      pageWUR.getRankingIndicatorsTable().should('be.visible')
   })

   And('Check UniversityNames, Universitylocation, rank column, score, ranking indicators column has values'
   , function()
   {
      pageWUR.getAllRanksinRITab().toHaveText()
      pageWUR.getallUniversityNamesRankIndicatorsTab().toHaveText()
      pageWUR.getallLocationNamesRankIndicatorsTab().toHaveText()
   })

   //----------------------------Indicators sorting------------------------------------------------------

   And('Check Indicator Sorting', function(){
      pageWUR.getISRatioIndicatorIcon().click()
      cy.sortingIndicatorDesc()

   })

   //-----------------------------Subject Rankings URL----------------------------------------------------

   Given('Launch Subject Rankings URL and user is navigated to Subject Rankings Page', function()
   {

      cy.launchURL(Cypress.env('Baseurl')+Cypress.env('WURbySubject'))
      cy.title().should('contains', this.data.subjectRankingsPageTitle)
      cy.wait(3000)
   })


