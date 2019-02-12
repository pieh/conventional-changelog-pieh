# Changelog preset experiment

Forked from https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular

Most changes are in [writer-opts.js](./writer-opts.js):

- Adding author credit:

  `git show` won't show github user if user changed the name, so doing github api request to get metadata about commit

- (Not finished) getting PR metadata that introduced commit:

  This would be great to workaround issue with single commit PRs
  To straight use PR title always and don't even use commit title

  That actually allow us to enable PR title validation (preferably only for PRs that change files in `/packages/` dir) that won't have false positives.

  This also allow us to add `Changelog entry details` section in PR template
  so we don't need to remember to edit commit message when merging, if both title and extra notes are extracted from PR information.

  Stretch goal - have peril generate preview for changelog entry that PR will produce - this is doable because we would use PR title and section from description.
