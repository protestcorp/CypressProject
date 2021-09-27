class CourseMatchPage
{
    getClickonCourseMatch()
    {
        return cy.get(':nth-child(3) > .layout__region--third > .block > .content > .rank-blk > .card > .card-body > .btn')
        //return cy.get(':nth-child(3) > .layout__region--third > .block > .content > .rank-blk > .card > .card-body > .btn')
    }

    getClickOnStartMatching()
    {
        return cy.xpath('//a[contains(text(),"Start Matching")]')
    }

    getClickOnStartMatchinginPage()
    {
        return cy.get('.btn.mb-30._mt_start_matching')
    }
}
export default CourseMatchPage