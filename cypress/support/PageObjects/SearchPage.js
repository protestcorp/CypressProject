class SearchPage
{
  
getAllStudyLevelButtons(){
  return cy.get(':nth-child(1) > ._mt_panel > ._mt_oneComplequestionsdv > ._mt_qustionoptions button')
}


getAllLearningTypeButtons()
{
  return cy.get('#anchor1 > ._mt_panel > ._mt_qustionoptions button')
}
  //UNCOMMENT THIS AS IT WORKS FOR SELECTING  BACHELOR RADIO BUTTON

    getLearningType()
    {
       return cy.get('input[type="radio"]')  //type of learning radio button

    }
    getnationalitytabopen()
    {
               return cy.get('._mt_panel > ._mt_wrap_select > .ui > .search')
               

    }
    getNationalitySearch()
    {
      return cy.get('._mt_panel > ._mt_wrap_select > .ui > .search')
    }
    getNationality()
    {

      return cy.get('._mt_panel > ._mt_wrap_select > .ui > .menu > .item')
     // return cy.get('._mt_panel > ._mt_wrap_select > .ui > .search')
     //return cy.xpath('//div[@class="_mt_wrap_select _mt_input_wraps"]//select[data-class="_getcountryfromajax"]')
      //return  cy.get('select[name="nationality"]')
      //return cy.get('#edu_his_0 > :nth-child(2) > .ui').select('AS',{force:true})
    }
    getAllNationality()
    {
      return cy.get('._mt_wrap_select > .ui > .menu')
    }

    getSubjectSearchInput(){
      return cy.get('.stackable > ._mt_wrap_select > .ui')
    }
    getSubjectSearch(){
      return cy.get('.search-icon > .dropdown')
    }
      getAllSubjects(){
        return cy.get('._mt_wrap_select._mt_input_wraps div')
      }
    
    getAllDestination(){
      return cy.get('._mt_qustionoptions._mt_study_country_js button')
    }
    getNationalitytabclose()
    {
        return cy.get('._mt_panel > ._mt_wrap_select > .ui > .dropdown')
    }
    getDestination()
    {
      return cy.get('input[type="radio"]')
    }
    getSubjectTabOpen()
    {
      return cy.get('#anchor3 > ._mt_panel > ._mt_qustionoptions > :nth-child(1)')

    }
    getSubject()
    {
        return cy.get('[name="_mt_subject_specs[]"]')

    }
    getSubmit()
    {
         return cy.get('#_mt_submit_step_1')
    }

    getPreviousYearOptions()
    {
      return cy.get('._mt_qustionoptions._mt_start_college_js button')
    }
    getAllNationalityValues()
    {
      return cy.get('.ui.dropdown._getcountryfromajax.fluid._mt_nationality.search > div > .item')
    }
}

export default SearchPage