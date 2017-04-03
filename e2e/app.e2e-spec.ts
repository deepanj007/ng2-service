import { Ng2servicePage } from './app.po';

describe('ng2service App', () => {
  let page: Ng2servicePage;

  beforeEach(() => {
    page = new Ng2servicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
