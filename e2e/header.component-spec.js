describe('Header', function () {

    beforeEach(function () {
        browser.get('/');
    });

    it('should have a Home tab', function () {
        var homeButtontext = element(by.css('#home_tab')).getText();
        expect(homeButtontext).toEqual("Home");
    });

    it('should have a About tab', function () {
        var aboutButton = element(by.css('#about_tab')).getText();
        expect(aboutButton).toEqual("About");
    });

    it('should have a Twitter login button', function () {
        var twitterLoginButton = element(by.css('button.ui.twitter.button')).getText();
        expect(twitterLoginButton).toEqual("Login with Twitter");
    });

    it('should have a Facebook login button', function () {
        var fbLoginButton = element(by.css('button.ui.twitter.button')).getText();
        expect(fbLoginButton).toEqual("Login with Twitter");
    });

    it('should have a sidebar icon', function () {
        var sideBarExists = element(by.css('a.toc.item')).isPresent();
        expect(sideBarExists).toEqual(true);
    });
});