class WUR
{
    getUniversityRankingTab(){
        return cy.get('.nav > .first > .nav-link.active')
    }

    getRankingYear(){
        return cy.get('.qs-ranking-year-realdiv > .no-cross-mark > .text')
    }
    getTable(){
        return cy.get('#ranking-tab')
    }

    getFirstColumnHeader(){
        return cy.get('._qs-ranking-data-header #sortbyrankingfirstload')
    }

    getSecondColumnHeader(){
        return cy.get('.col-lg-5 > ._click-function')
    }
    getthirdColumnHeader(){
        return cy.get('.col-lg-2 > ._click-function')
    }

    getResultsperPageDropdown(){
        return cy.get('.col-lg-5 > .dropdown')
    }

    getResultsperPageDropdownValues(){
        return cy.get('.menu.transition.visible div')
    }
    getTableRow(){
        return cy.get('._qs-ranking-data-row')
    }
    getTopScore(){
        return cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi')
    }
    getScoresexceptFirst(){
        return cy.get(':nth-child(n+2) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi')
    }
    getallScores(){

        return cy.get('.overall-score-span.hide-this-in-mobile-indi')
    }
    getFirstRank(){
        return cy.get(':nth-child(1) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-1 > .hide-this-in-mobile-indi')
    }
    getallUniversityNames(){
        return  cy.get('.td-wrap a[class="uni-link"]')
    }
    getallLocationNames(){
        return  cy.get('.col-lg-5 .location')
    }
    getallLogos(){
        return cy.get('.col-lg-5 .logo-wrapper img')
    }
    getallRankValues()
    {
        return cy.get('._qs-ranking-data-row .col-lg-1')
    }
    getScoreSortingIcon()
    {
        return cy.get('.col-lg-2 > .asc')
    }
    getScoreSortingIconDesc()
    {
        return cy.get('.col-lg-2 > ._click-function')
    }
    getAllDFPs()
    {
        return cy.get("[title*='3rd party ad content']")
    }

    getRankingsTab()
    {
        return cy.get('li.rankings > [href="#"]')
    }

    getQSWUR()
    {
        return cy.xpath('//li[@class="rankings"]/ul[@class="rankings"]/li[2]/a[1]')
    }
    getViewListButton()
    {
        return cy.get('.rank-blk .btn.btn-orrange')
    }
    getHeadLine()
    {
        return cy.get('h1[class="_qs-class-headline"]')
    }
    getRankingIndicatorsTable()
    {
        return cy.get('#indicator-tab')
    }

    getRankingIndicatorsTab(){
        return cy.get('.d-none > .nav-link')
    }

    getAllRanksinRITab(){
        return cy.get('#ranking-data-load_ind .col-lg-3')
    }

    getallUniversityNamesRankIndicatorsTab(){
        return cy.get('#ranking-data-load_ind .university-rank-row')
    }

    getallLocationNamesRankIndicatorsTab(){
        return cy.get('#ranking-data-load_ind .location')
    }

    getKnowMoreIcon()
    {
        return cy.get(':nth-child(n) > .qs-gsac-btn-knowmore')
    }

    getCompareIcon()
    {
        return cy.get(':nth-child(n) > .compare-icon-ac-inac')
    }

    getShortlistIcon()
    {
        return cy.get(':nth-child(n) ._directorypage > .fal')
    }

    getResultsPerPageText(){
        return cy.get('.col-lg-5 > .ui > .text')
    }

  getTableSection(){
      return cy.get('#ranking-tab')
  }

  getTopSection(){
      return cy.get(':nth-child(1) > .layout__region.layout__region--content > .block.block-dfp')
  }

    getBottomScore()
    {
        return cy.get(':nth-child(12) > .col-lg-12 > ._qs-ranking-data-row > .row > .col-lg-2 > .hide-this-in-mobile-indi')
    }

    getfirstiFrame()
    {
        return cy.get('iframe[id = "google_ads_iframe_/8070/Topuni-Web/university-rankings/world-university-rankings/2022_0"]')
    }
    getsecondiFrame()
    {
        return cy.get('iframe[id = "google_ads_iframe_/8070/Topuni-Web/university-rankings/world-university-rankings/2022_1"]')
    }
    getthirdiFrame()
    {
        return cy.get('iframe[id = "google_ads_iframe_/8070/Topuni-Web/university-rankings/world-university-rankings/2022_2"]')
    }

    getISRatioIndicatorIcon()
    {
        return cy.get('.ind_14 > ._click-function_ind > .fa-arrow-down')
    }

    getISRatioIndicatorValues()
    {
        return cy.get(':nth-child(n+1) > :nth-child(1) > ._qs-ranking-data-header-new-white > :nth-child(1) > .col-lg-7 > .row > .col-lg-12 > ._scrollable_div > :nth-child(2) > ._data-set > .overall-score-span-ind > span > .td-wrap > .td-wrap-in')
    }

    getPage2(){
        return cy.get(':nth-child(3) > .page-link')
    }
}
export default WUR;