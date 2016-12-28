// spec.js
describe('Testing the Student portion of the webpage', function () {


    var firstName = element(by.id('studentfirstname'))
    var lastName = element(by.id('studentlastname'))
    var email = element(by.id('studentemail'))
    var saveButton = element(by.id('saveStudent'))
    var deleteButton = element(by.id('removeStudent'))
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
        var child = element(by.id('listofstudents'));
        expect(child.getText()).toContain('JAVA');
        //deleteButton.click()

    });
    it('should have 5 classes for the selection', function () {

        var list = element.all(by.css('.ext1 option'));
        expect(list.count()).toBe(5);

// Or using the shortcut $$() notation instead of element.all(by.css()):

        var list2 = $$('.ext1 option');
        expect(list2.count()).toBe(5);

    });

    it('should be able to remove the last entry from the database', function () {
        //
        // var list = element.all(by.css('.ext2 label'));
        var last = element.all(by.css('.ext2 label')).last();
        last.click();
        //
        // var child = element(by.id('listofstudents'));
        // var EC = protractor.ExpectedConditions;
        // var tekst = child.getText();
        // var ikke = tekst.getItem("JAVA");
        // expect (ikke).toBe("f");
        // expect(tekst).toBe("blabnla");
        // var titleIsNotFoo = EC.not((child.getText()).innerHTML);
        // expect(EC.not((child.getText()).innerHTML)).toBe(false);
        // expect((child.getText()).toContain('JAVA'));
        // expect(titleIsNotFoo)



        // var child = element.all(by.id('listofstudents'));
        // var EC = protractor.ExpectedConditions;
        // titleIsNotFoo = EC.not(EC.child.getText()).toContain('JAVA');
        // expect(EC.not(child.getText()).toContain('JAVA'));
        // expect(element.all(by.id('listofstudents')).contains('JAVA')).to.become(false).and.notify(next);


    });


});