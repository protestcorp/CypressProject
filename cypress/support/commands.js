import WUR from "../support/PageObjects/WUR";
import SearchPage from "./PageObjects/SearchPage";
import 'cypress-iframe';
import { forEach, max } from "lodash";
import { forEachChild } from "typescript";
//
//Launch URL function
const pageWUR =new WUR()
const sp = new SearchPage()
Cypress.Commands.add('launchURL', (URL) =>
{
    cy.visit(URL)
})

//Gets the Max Score from the Rest
Cypress.Commands.add('maxScore', 
() =>
{
  {
    var maxScore
    var score
    const { _ } = Cypress
    // verify the top score in the column is indeed highest
    const toStrings = (cells$) => _.map(cells$, 'textContent')
    const toNumbers = (scores) => _.map(scores, Number)
    pageWUR.getallScores()
    .then(toStrings)
    .then(toNumbers)
    .then((scores) =>
    {
      maxScore = Math.max.apply(Math, scores)
      pageWUR.getTopScore().then(function(element){
        const a=element.text()
        var b= a.split(" ")
        var score= b[1].trim()
       expect(score).contains(maxScore)
      })
    })
}
})

Cypress.Commands.add('minScore', () =>
{
  {
    var minScore
    var score
    const { _ } = Cypress
    // verify the scores in the column are indeed in sorted order
    const toStrings = (cells$) => _.map(cells$, 'textContent')
    const toNumbers = (scores) => _.map(scores, Number)
    pageWUR.getallScores()
    .then(toStrings)
    .then(toNumbers)
    .then((scores) =>
    {
      minScore = Math.min.apply(Math, scores)
      pageWUR.getBottomScore().then(function(element){
        const a=element.text()
        var b= a.split(" ")
        score= b[1].trim()
       expect(score).contains(minScore)
      })
    })
}
})

//to check values are not null
Cypress.Commands.add('toHaveText', 
  {
    prevSubject : 'element'
  },
  ($el) =>
  {
    assert.isNotNull($el,'Values are not null')
  })

  //to check all images have attribute source
  Cypress.Commands.add('imageToHaveSource',  {
    prevSubject : 'element'
  },
  ($el) =>
  {
    cy.wrap($el).should('have.attr', 'src')
   })
    

   Cypress.Commands.add('checkiFramesVisible',
   {
     prevSubject: 'element'
   },
   (($iframe) =>
   {
    const $body = $iframe.contents().find('body')
    cy.wrap($body)
    .should('be.visible')
   })
  )
//descending order sort
  Cypress.Commands.add('sortingDesc',
  () =>
  {
    const { _ } = Cypress
      // verify the scores in the column are indeed in sorted order
      const toStrings = (cells$) => _.map(cells$, 'textContent')
      const toNumbers = (scores) => _.map(scores, Number)
      pageWUR.getallScores()
      .then(toStrings)
      .then(toNumbers)
      .then((scores) => {
        // confirm scores are sorted
        // by sorting them ourselves
        // and comparing with the input list
        const sorted = _.sortBy(scores)
        const Descending = sorted.reverse()
        expect(scores, 'cells are sorted in Descending Order📈').to.deep.equal(Descending)
      
      }) 
      
      })

  Cypress.Commands.add ('sortingIndicatorDesc',
    () =>
  {
    const { _ } = Cypress
      // verify the scores in the column are indeed in sorted order
      const toStrings = (cells$) => _.map(cells$, 'textContent')
      const toNumbers = (scores) => _.map(scores, Number)
      pageWUR.getISRatioIndicatorValues()
      .then(toStrings)
      .then(toNumbers)
      .then((scores) => {
        // confirm scores are sorted
        // by sorting them ourselves
        // and comparing with the input list
        const sorted = _.sortBy(scores)
        const Descending = sorted.reverse()
        expect(scores, 'cells are sorted in Descending Order📈').to.deep.equal(Descending)
      }) 
  })

  //ascending order sort
  Cypress.Commands.add('sortingAsc',()=>
  {
    const { _ } = Cypress
      // verify the scores in the column are indeed in sorted order
      const toStrings = (cells$) => _.map(cells$, 'textContent')
      const toNumbers = (scores) => _.map(scores, Number)
      pageWUR.getallScores()
      .then(toStrings)
      .then(toNumbers)
      .then((scores) => {
        // confirm scores are sorted
        // by sorting them ourselves
        // and comparing with the input list
        const sorted = _.sortBy(scores)
        
        expect(scores, 'cells are sorted in Ascending Order📈').to.deep.equal(sorted)
      })
    })

//function to get the random data
Cypress.Commands.add('randomData',
{
  prevSubject : 'optional'
},
($el) =>
  {
      const randomOption = Math.floor(Math.random() * $el.length);
      if($el.text().includes($el[randomOption].innerText)){
          $el.eq(randomOption).click()
      }
  })


Cypress.Commands.add('toCheckEqualScores', ()=>
  {
    const { _ } = Cypress
    // verify the equal scores in the column are appended with equal
    var count = 0
    const toStrings = (cells$) => _.map(cells$, 'textContent')
    const toNumbers = (scores) => _.map(scores, Number)
    const toNumbersA = (ranks) => _.map(ranks, Number)
    pageWUR.getallScores()
    .then(toStrings)
    .then(toNumbers)
    .then((scores) =>
    {
    for (let index = 0; index < scores.length; index++) {
      const elementA = scores[index];
      const elementB = scores[index+1];
      if(elementA == elementB){
        count = count + 1
        cy.log(elementB)
        cy.log(elementA)
        pageWUR.getallRankValues()
        .then(toStrings)
        .then((ranks) =>
        {
          cy.log(ranks[index])
          var a = ranks[index].split('=')
          var b = a[1]
          expect(ranks[index]).to.include('=' + b)
         cy.log (count)
         expect(ranks[index+count]).to.include(index+count+1)
        })
      }
    }
    })
  }) 



  //Selecting Results per page dropdown value as given in the fixtures
Cypress.Commands.add('resltsperPage',(Val) =>
{
    pageWUR.getResultsperPageDropdownValues().each(($el, index, $list) => 
    {
       if($el.text()==Val)
      { $el.click()}
    })
})