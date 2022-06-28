const URL = 'http://zero.webappsecurity.com/index.html'
const SEARCH = '#searchTerm'
const TYPE = 'halo {enter}'
const GET = 'h2'
const SHOULD = 'contain.text'
const TEXT = 'Search Results:'

class SearchPage{
    static visit(){
        cy.visit(URL)
    }
    static fillSearch(){
        cy.get(SEARCH).type(TYPE)
    }
    static searchPage(){
        cy.get(GET).should(SHOULD,TEXT)
    }
}

export default SearchPage