var madeFill = function (madeObjects) {
    madeObjects
        .api.pause(300)
    madeObjects
        .waitForElementPresent('@firstClick')
        .click('@firstClick')
        .waitForElementVisible('@newCate')
        .moveToElement('@newCate', 10, 10)
        .waitForElementVisible('@newSubcate')
        .moveToElement('@denimCate', 10, 10)
        .waitForElementPresent('@denimSubcate')
        .moveToElement('@clothingCate', 10, 10)
        .moveToElement('@shoesCate', 10, 10)
        .waitForElementPresent('@shoesSubcate')
        .moveToElement('@accessoriesCate', 10, 10)
        .waitForElementPresent('@accessoriesSubcate')
        .moveToElement('@lifeCate', 10, 10)
        .waitForElementPresent('@lifeSubcate')
        .moveToElement('@labelsCate', 10, 10)
        .waitForElementPresent('@labelsSubcate')
        .moveToElement('@saleCate', 10, 10)
        .waitForElementPresent('@saleSubcate')
        .moveToElement('@inspoCate', 10, 10)
        .waitForElementPresent('@inspoSubcate')  
}
var addCartInfo = function (madeObjects) {
    madeObjects
        .pause(1000)
        .moveToElement('@denimCate', 10, 10)
        .waitForElementPresent('@denimSubcate')
        .click('@denimSubcate')
        .pause(1000)
        .click('@dressSelect')
        .click('@sizeSelect')
        .pause(500)
        .click('@addToBag')
    //teardown
    madeObjects
        .click('@myBagDropDown')
        .waitForElementPresent('@itemInBagSelect')
        .click('@removeBtn')
        .waitForElementVisible('@emptyCart')
}
var favoritesAdd = function(madeObjects) {
    madeObjectss
        .moveTOElement('@denimCate', 10, 10)
        .click('@denimSubcate')
        .waitForElementPresent('@secondDressSelect')
        .click('@secondDressSelect')
        .pause(1000)
        .click('@favoritesBtn')
        .waitForElementPresent('@createAccount')
}
var madeObjects
module.exports = {
    before: browser => {
        madeObjects = browser.page.madewell()
        madeObjects.resizeWindow(1366,768)
        madeObjects.navigate()
    },
    after: browser => {
        madeObjects.end()
    },
    'Verify Corrisponding Tab Test': browser => {
             madeFill(madeObjects)
    },
    'Add to Cart Test': browser => {
            addCartInfo(madeObjects)
    },
    'Add to Favorites': browser => {
            favoritesAdd(madeObjects)
    }
}