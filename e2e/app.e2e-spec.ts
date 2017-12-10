import { DesenvolvermaisPage } from './app.po';

describe('desenvolvermais App', () => {
  let page: DesenvolvermaisPage;

  beforeEach(() => {
    page = new DesenvolvermaisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
