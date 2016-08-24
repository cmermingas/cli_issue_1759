import { CliIssue1759Page } from './app.po';

describe('cli-issue-1759 App', function() {
  let page: CliIssue1759Page;

  beforeEach(() => {
    page = new CliIssue1759Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
