// spec.js
describe('Testing the Student portion of the webpage', function () {


    var firstName = element(by.id('studentfirstname'))
    var lastName = element(by.id('studentlastname'))
    var email = element(by.id('studentemail'))
    var saveButton = element(by.id('saveStudent'))
    var studentName = element(by.id('studentname'))
    // var latestResult = element(by.id('stud.firstName'));




    beforeEach(function () {
        browser.get('/student');
    });

    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('QuestionitUi');
    });

    it('should be able to add a student', function () {
        firstName.sendKeys('JAVA');
        lastName.sendKeys('JAVA');
        email.sendKeys('JAVA');
        saveButton.click();
        // var studentName = element(by.reflect-value('JAVA'));

        // expect(latestResult.getText()).toEqual('JAVA');




    });
    it('should now contain JAVA', function () {
//         var elm = element.all(by.css('studentname')).last();
// elm.click();
//         expect(elm.getText()).toContain('JAVA');

// let child = element(by.css('.div-input-text')).element(by.binding('stud.firstName'));
// expect(child.getText()).toBe('JAVA');

var elm = element.all(by.repeater('studentname')).get(1);
expect(elm.getText()).toEqual('bar');

    });






});