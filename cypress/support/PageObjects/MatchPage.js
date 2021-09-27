class MatchPage
{ 
getPreviousStudyLevel(){
    return cy.xpath('//div[@class="ui dropdown fluid selection _mt_prev_study_level _studylevelfromajax no-jcf _mt_top_m"]//select[@data-max-selections="false"]')
}
getAllPreviousStudyLevelOptions(){
    return cy.xpath('//div[@class="menu transition visible"]//div[@class="item"]')
}

getGradeOption(){
    return cy.get('#edu_his_0 > ._mt_grades_wrap > .grid > :nth-child(1) > ._mt_input_wraps > .ui')
}

getAllGradeOptions(){
    return cy.get('#edu_his_0 > ._mt_grades_wrap > .grid > :nth-child(1) > ._mt_input_wraps > .ui > .menu > .item')
}

getScore(){
    return cy.get('#edu_his_0 > ._mt_grades_wrap > .grid > .four > ._mt__qs_input_style_1 > #testscoremodal_')

}

getBDScoreDropDown(){
return cy.get('#edu_his_0 > ._mt_grades_wrap > .grid > .four > ._mt_wrap_select > .dropdown')
}

getBDScoreElements(){
    return cy.get('#edu_his_0 > ._mt_grades_wrap > .grid > .four > ._mt_wrap_select > .dropdown > .menu > .item')
}

getWorkExperience()
{
 return cy.get('.ui.button.basic.mt_btn_radio')
}

getNextbutton()
{
    return cy.xpath('//button[contains(text(),"Next")]')
}

getScoreOption1()
{
    return cy.get('#edu_his_0 > ._mt_grades_wrap > .grid > :nth-child(1) > ._mt_input_wraps > .ui > .menu > [data-value="cgpa_10"]')
}

getPreviousStudyLevelOption1()
{
    return cy.get('#edu_his_0 > :nth-child(2) > .ui > [data-value="ug"]')
}

getPreviousStudyLevelDropDown()
{
    return cy.get('#edu_his_0 > :nth-child(2) > .ui')
}

}
export default MatchPage