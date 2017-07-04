import { TestEmmitterPage } from './app.po';

describe('test-emmitter App', () => {
  let page: TestEmmitterPage;

  beforeEach(() => {
    page = new TestEmmitterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
