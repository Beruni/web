describe('App', function(){

  beforeEach(function(){
    browser.get('/');
  });

  it('should have a title', function(){
    subject = browser.getTitle();
    result = 'Beruni';
    expect(subject).toEqual(result);
  });

  it('should have header', function(){
    subject = element(by.css('h1')).isPresent();
    result = true;
    expect(subject).toEqual(result);
  });

});