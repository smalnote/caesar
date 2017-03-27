import { Caesar.IoPage } from './app.po';

describe('caesar.io App', () => {
  let page: Caesar.IoPage;

  beforeEach(() => {
    page = new Caesar.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
