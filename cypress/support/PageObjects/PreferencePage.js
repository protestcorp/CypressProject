class PreferencePage{
    getReputation(){
        return cy.get('.progress-points._mt_brand_reputation_scores li')
    }
    getQualityOfTeaching(){
        return cy.get(':nth-child(3) > .progress-meter > .progress-points > [data-pref="4"]')
    }
    getEmployability(){
        return cy.get(':nth-child(4) > .progress-meter > .progress-points > [data-pref="5"]')
    }
    getDiversity(){
        return cy.get(':nth-child(5) > .progress-meter > .progress-points > [data-pref="3"]')
    }
    getAfforadability(){
        return cy.get(':nth-child(6) > .progress-meter > .progress-points > [data-pref="3"]')
    }
    getStudyFunding(){
        
           return cy.get('.fundstudy_js > :nth-child(3)')
    //return cy.get(':nth-child(2) > .progress-meter > .progress-points > [data-pref="1"]').click()
    
        }
    getNextButton()
    {
        return cy.get('._mt_pofiling_next_btn')
    }
    }
    export default PreferencePage