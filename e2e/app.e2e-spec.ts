import { TestUnitTestPage } from './app.po';

describe('test-unit-test App', function() {
  let page: TestUnitTestPage;

  beforeEach(() => {
    page = new TestUnitTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
