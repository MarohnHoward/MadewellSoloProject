
module.exports = {
    url: 'https://www.madewell.com/',
    elements: {
        newCate:{
            selector: '//span[text()="New"]',
            locateStrategy: 'xpath'
    },
        denimCate:{
            selector: '//span[text()="Denim"]',
            locateStrategy: 'xpath'
        },
        clothingCate:{
            selector: '//span[text()="Clothing"]',
            locateStrategy: 'xpath'
        },
        shoesCate:{
            selector: '//span[text()="Shoes"]',
            locateStrategy: 'xpath'
        },
        accessoriesCate: {
            selector: '//span[text()="Accessories"]',
            locateStrategy: 'xpath'
        },
        lifeCate: {
            selector: '//span[text()="Life"]',
            locateStrategy: 'xpath'
        },
        labelsCate: {
            selector: '//span[text()="Labels We Love"]',
            locateStrategy: 'xpath'
        },
        saleCate: {
            selector: '//span[text()="Sale"]',
            locateStrategy: 'xpath'
        },
        inspoCate: {
            selector: '//span[text()="Inspo"]',
            locateStrategy: 'xpath'
        },
        newSubcate: {
            selector: '//a[text()="New Arrivals"]',
            locateStrategy: 'xpath'
        },
        denimSubcate: {
            selector: '//a[text()="Dresses"]',
            locateStrategy: 'xpath'
        },
        shoesSubcate: {
            selector: '//a[text()="Shop All Shoes"]',
            locateStrategy: 'xpath'
        },
        accessoriesSubcate:{
            selector: '//a[text()="Shop All Accessories"]',
            locateStrategy: 'xpath'
        },
        lifeSubcate: {
            selector: '//a[text()="Shop All Life"]',
            locateStrategy: 'xpath'
        },
        labelsSubcate: {
            selector: '//a[text()="Shop All Labels We Love"]',
            locateStrategy: 'xpath'
        },
        saleSubcate: {
            selector: '//a[text()="Shop All Sale"]',
            locateStrategy: 'xpath'
        },
        inspoSubcate: {
            selector: '//a[text()="See All Inspo"]',
            locateStrategy: 'xpath'
        },
        dressSelect: {
            selector: '(//img[@class="alternate-image lazyautosizes lazyloaded"])[1]',
            locateStrategy: 'xpath'
        },
        sizeSelect: {
            selector: '(//*[@class="swatches size"])//*[2]',
            locateStrategy: 'xpath'
        },
        addToBag: '#add-to-cart',
        addToBagDisabled: '.add-to-cart-disabled',
        cartIcon: {
            selector: '//a[@title="My bag"]',
            locateStrategy: 'xpath'
        },
        womensTab: {
            selector: '(//a[text()="women"])[1]',
            loacteStrategy: 'xpath'
        },
        removeBtn: {
            selector: '//button[@name="dwfrm_cart_shipments_i0_items_i0_deleteProduct"]',
            locateStrategy: 'xpath' 
        },
        checkoutBtn: {
            selector: '//button[@name="dwfrm_cart_checkoutCart"]',
            locateStrategy: 'xpath'
        },
        guestCheckoutBtn: {
            selector: '//button[@name="dwfrm_login_unregistered"]',
            locateStrategy: 'xpath'
        },
        myBagDropDown: {
            selector: '//h5[@class="opened"]',
            locateStrategy: 'xpath'
        },
        itemInBagSelect: {
            selector: '(//a[text()="Denim Pleat-Waist Midi Dress"])[2]',
            locateStrategy: 'xpath'
        },
        mensTabSelect: {
            selector: '(//a[text()="men"])[1]',
            locateStrategy: 'xpath'
        },
        signInRegister: {
            selector: '(//a[@title="Go to My Account"])[3]',
            locateStrategy: 'xpath'
        },
        secondDressSelect: {
            selector: '(//img[@class="alternate-image lazyautosizes lazyloaded"])[2]',
            locateStrategy: 'xpath'
        },
        favoritesBtn: {
            selector: '(//button[@aria-label="Add to favorites"])[2]',
            locateStrategy: 'xpath'
        },
        favoritesTab: {
            selector: '//span[text()="Favorites"]',
            locateStrategy: 'xpath'
        },
        emptyCart: {
            selector: '//div[@class="cart-empty"]',
            loacteStrategy: 'xpath'
        },
        createAccount: {
            selector: '//div[@class="login-box-content returning-customers clearfix"]',
            locateStrategy: 'xapth'
        },
        firstClick: {
            selector: '//button[@class="ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only ui-dialog-titlebar-close"]',
            locateStrategy: 'xpath'
        }
}
}