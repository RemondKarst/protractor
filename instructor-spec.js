// spec.js
describe('Protractor Demo App', function () {
    var eerste = element(by.id('instructorfirstname'))
    var questionLanguage = element(by.id('questionlanguage'))
    var examName = element(by.id('questionexam'))




    beforeEach(function () {
        browser.get('/instructor/edit');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('QuestionitUi');
    });






});