// login.spec.js
var assert= require('assert');
var LoginPage = require('../PageObject/Login.page');
describe('login form with invalid cred', function () {

    before(function() {
        console.log('inner before hook');
    });
    it('should deny access with wrong creds....', function () {
        LoginPage.open();
        LoginPage.username.setValue('10021ww');
        LoginPage.password.setValue('passpass');
        browser.pause(1000);
        LoginPage.submit();
        //LoginPage.logout.click();
        browser.pause(8000);
        var title = browser.getTitle()
       // var logoutIsExist=browser.isExisting(.getText());
        console.log(title);
        assert.equal(title,'Valley Order Site');
    });
    it('should allow access with correct creds...', function () {
        LoginPage.open();
        LoginPage.username.setValue('10021');
        LoginPage.password.setValue('passpass');
        browser.pause(1000);
        LoginPage.submit();
        //LoginPage.logout.click();
        browser.pause(8000);
        var title = browser.getTitle()
       // var logoutIsExist=browser.isExisting(.getText());
        console.log(title);
        browser.saveScreenshot("loginwithresult.png");
        assert.equal(title,'Home Page');
    });
    after(function() {
        console.log('inner after hook');
    });
});