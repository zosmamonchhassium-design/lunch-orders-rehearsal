# Revert policy

When `main` fails CI, the team reverts the pull request that broke it first and fixes it afterwards in a new pull request.

## When to revert

Revert when `main`'s CI run fails after a merge and the pull request that caused it is identified by comparing the last passing run with the first failing run.

## How to revert

1. Open the merged pull request that broke `main` and click GitHub's Revert button.
2. Revert only that one pull request. Do not add any other changes to the revert branch.
3. Merge the revert pull request only after its CI check passes.
4. After merging, confirm that the next CI run on `main` passes.

## Title

The revert pull request's title is GitHub's suggested title followed by a space and the original pull request number in parentheses, for example `Revert "Add search box" (#12)`.

## Description

Keep the `Reverts ...` line that GitHub adds, then add these three lines:

```text
Failing run: <workflow name and run number of the first failing run on main, for example CI #7>
Failed tests: <names of the failing tests, separated by semicolons>
Cause: <one sentence on what the reverted change did wrong>
```

## After the revert

The author of the original pull request opens a new pull request with a fix. Do not reopen the reverted pull request.
