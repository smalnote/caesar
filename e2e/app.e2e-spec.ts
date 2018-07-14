import { CaesarPage } from './app.po';

describe('caesar App', () => {
  let page: CaesarPage;

  beforeEach(() => {
    page = new CaesarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    // expect(page.getParagraphText()).toEqual('app works!');
  });
});
