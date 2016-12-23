// spec.js
describe('Protractor Demo App', function () {

    var questionLanguage = element(by.id('questionlanguage'))
    var examName = element(by.id('questionexam'))
    var isObsolete = element(by.id('questionobsolete'))
    var isValid = element(by.id('questionenabled'))


    beforeEach(function () {
        browser.get('/question/browse');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('QuestionitUi');
    });

    it('has a question language', function () {
        expect(browser.getTitle()).toEqual('QuestionitUi');
        expect(element(by.id('questionlanguage')).getText()).toContain('NONE');
        expect(element(by.id('questionlanguage')).getText()).toContain('JAVA');
        expect(element(by.id('questionlanguage')).getText()).toContain('HTML_CSS_JS');
        expect(element(by.id('questionlanguage')).getText()).toContain('PHP');
        expect(element(by.id('questionlanguage')).getText()).toContain('C_SHARP');
        expect(questionLanguage.getText()).toContain('JAVA');
    });
    it('has an Exam name', function () {
        expect(examName.getText()).toContain('NONE');

        questionLanguage.sendKeys('JAVA');
        expect(examName.getText()).toContain('NONE');
        expect(examName.getText()).toContain('OCA');
        expect(examName.getText()).toContain('OCP');

    });
    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('QuestionitUi');
    });


    it('has a filled valid field', function () {

        expect(isValid.getText()).toContain('TRUE');
        expect(isValid.getText()).toContain('FALSE');


    });
    it('has a filled obsolete field', function () {


        expect(isObsolete.getText()).toContain('TRUE');
        expect(isObsolete.getText()).toContain('FALSE');

    });

});