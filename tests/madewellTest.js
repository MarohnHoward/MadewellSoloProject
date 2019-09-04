
var madeFill = function (madeObjects) {
    madeObjects
        .api.pause(300)
    madeObjects
        .waitForElementPresent('@firstClick')
        .pause(500)
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
        //.waitForElementPresent('@denimSubcate')
        .pause(500)
        .click('@denimSubcate')
        .pause(1000)
        .waitForElementPresent('@dressSelect')
        .click('@dressSelect')
        .waitForElementPresent('@sizeSelect')
        .click('@sizeSelect')
        .waitForElementNotPresent('@addToBagDisabled', 10000)
        .pause(5000)
        .moveToElement('@addToBag', 10, 10)
        .click('@addToBag')
    //teardown
    // madeObjects
    //     .click('@myBagDropDown')
    //     .waitForElementPresent('@itemInBagSelect')
    //     .click('@removeBtn')
    //     .waitForElementVisible('@emptyCart')
}
var favoritesAdd = function(madeObjects) {
    madeObjects
        .moveToElement('@denimCate', 10, 10)
        .pause(500)
        .click('@denimSubcate')
        .pause(10000)
        .waitForElementPresent('@secondDressSelect')
        .click('@secondDressSelect')
        .pause(1000)
        .click('@favoritesBtn')
        .pause(10000)
        //.waitForElementPresent('@createAccount')
}
var madeObjects
module.exports = {
    before: browser => {
        madeObjects = browser.page.madewell()
        madeObjects.resizeWindow(1600,900)
        madeObjects.navigate()
        madeObjects.waitForElementPresent('body')
    },
    after: browser => {
        madeObjects.end()
    },
    'Verify Corrisponding Tab Test': browser => {
             madeFill(madeObjects)
    },
    'Add to Cart Test': browser => {
            addCartInfo(madeObjects)
            madeObjects.pause(10000)
    }
}