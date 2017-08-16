// login.page.js
var Page = require('./Page')
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.element('#username'); } },
    password: { get: function () { return browser.element('#password'); } },
    login_btn:{ get: function () { return browser.element('#btn_login'); } },
    logout:    { get: function () { return browser.element('=Logout'); } },
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
       // Page.open.call(this, 'Login');
        Page.open.call(this);
    } },
    submit: { value: function() {
        this.login_btn.click();
    } }
});
module.exports = LoginPage;