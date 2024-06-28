# Common Committing Patterns

### Fix
- **fix**: A commit of the type `fix` patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).

### Feature
- **feat**: A commit of the type `feat` introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).

### Breaking Change
- **BREAKING CHANGE**: A commit that has a footer `BREAKING CHANGE:`, or appends a `!` after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A `BREAKING CHANGE` can be part of commits of any type.

### Other Types
- Types other than `fix:` and `feat:` are allowed. For example, [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) (based on the Angular convention) recommends:
  - **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm).
  - **chore**: Other changes that don't modify src or test files.
  - **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs).
  - **docs**: Documentation only changes.
  - **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
  - **refactor**: A code change that neither fixes a bug nor adds a feature.
  - **perf**: A code change that improves performance.
  - **test**: Adding missing tests or correcting existing tests.
- Footers other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to [git trailer format](https://git-scm.com/docs/git-interpret-trailers).

### Commit Message Examples

#### Commit message with description and breaking change footer
```
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

#### Commit message with ! to draw attention to breaking change
```
feat!: send an email to the customer when a product is shipped
```

#### Commit message with scope and ! to draw attention to breaking change
```
feat(api)!: send an email to the customer when a product is shipped
```

#### Commit message with both ! and BREAKING CHANGE footer
```
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

#### Commit message with no body
```
docs: correct spelling of CHANGELOG
```

#### Commit message with scope
```
feat(lang): add Polish language
```

#### Commit message with multi-paragraph body and multiple footers
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```