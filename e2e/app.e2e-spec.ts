import { CodejamPage } from './app.po';

describe('codejam App', function() {
  let page: CodejamPage;

  beforeEach(() => {
    page = new CodejamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
