let obj = {
    url: "https://www.digarc.com/",
    carrerButton: element(by.xpath('/html/body/div[1]/footer/div[1]/div[2]/div/ul/li[5]/a')),
    keywordSearch: element(by.xpath("/html/body/div[1]/header[1]/div[1]/div/div/div/form/div/input")),
}
describe('Navigate to Digarc', function () {
    it('Should naviigate to the webpage Digarc.com', function () {
        console.log("Navigate to Digarc")
        let url = "https://www.digarc.com/"
        browser.waitForAngularEnabled(false);
        browser.get(url);
        expect(browser.getCurrentUrl()).toEqual(url);
    });
});

describe('scroll to carrier', function () {
    it('scroll to carrier at the bottom of the page', function () {
        console.log("\n scroll to carrier")
        browser.actions().mouseMove(obj.carrerButton).perform();
    });
});

describe('click carrier', function () {
    it('click carrier at the bottom of the webpage', function () {
        console.log("\n click carrier")
        obj.carrerButton.click()
        newurl = "https://www.digarc.com/careers/"
        expect(browser.getCurrentUrl()).toEqual(newurl);

    });
});

describe('Type Associate', function () {
    it('Should Type Associate in the search field', function () {
        console.log("\n Type Associate")
        obj.keywordSearch.sendKeys("ASSOCIATE");
        newurl = "https://www.digarc.com/?s=ASSOCIATE"
        obj.keywordSearch.sendKeys(protractor.Key.ENTER);
        expect(browser.getCurrentUrl()).toEqual(newurl);
    });
    describe('close browser', function () {
        it('Should close the browser', function () {
            console.log("\n close browser")
            browser.close()
        });
    });
});