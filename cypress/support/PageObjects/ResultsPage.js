class ResultsPage{

getMatchingPrograms(){
    return cy.get('[data-intfees="144676"] > ._mt_matchingProgrmsNo > ._mt_text')
}

getSchoolViewTab()
{
    return cy.get('.type-search-school')
}

getProgramViewTab(){
    return cy.get('.type-search-program')
}

getreachSchoolIcon()
{
    return cy.get(':nth-child(1) > ._mt_univ_StatsC > ._mt_uniFont5_icon')
}

getTargetSchoolIcon()
{
    return cy.get(':nth-child(2) > ._mt_univ_StatsC > ._mt_uniFont5_icon')
}

getSafetySchoolIcon()
{
    return cy.get(':nth-child(3) > ._mt_univ_StatsC > ._mt_uniFont5_icon')
}

getLoginPageGuestUser(){
    return cy.get('.user-register-form')
}
}
export default ResultsPage