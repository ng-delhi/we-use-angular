# 📌 Contribution Guidelines

Thank you for considering contributing to the Angular Companies Directory!

## ✨ What you can do

- Add a new company entry
- Fix data formatting or typos
- Suggest improvements

## ✅ Guidelines

- Ensure your entry is JSON-valid.
- Follow the data structure used in `companies.json`.
- Add only real, verifiable companies using Angular.
- Avoid spam, test data, or self-promotion unless it's relevant.

## ✨ Steps

- 🍴 Fork this repo and clone it locally

- 🧩 Add your company to companies.json (don’t forget all the juicy details!)

- 📝 Update the README.md with a new entry under the directory

- 📚 Follow our [Contribution Guide](contribute.md) to keep things neat

- ✅ Open a PR with a clear commit message like:
  add(company): added awesome corp to directory

## 📦 Directory Format

```json
{
  "name": "Example Corp",
  "techStack": ["Angular 16", "Node.js", "PostgreSQL", "AWS"],
  "careerSite": "https://example.com",
  "workMode": "Remote",
  "product": "SaaS Platform for Analytics",
  "location": "San Francisco, CA"
}
```

## ✅ Standard Commit Message Format

```
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: company|readme|credits|guidelines
  │
  └─⫸ Commit Type: add|update|fix|docs|chore
```

### 🎯 Types:

- **add**: Add new entries or content
- **update**: Modify existing content
- **fix**: Fix typos, broken links, or formatting issues
- **docs**: Changes in documentation or README
- **chore**: Non-functional updates like file structure or config

### 🔍 Scopes:

- **company**: For changes in companies.json
- **readme**: For changes in README.md
- **credits**: For changes to contributors/maintainers
- **guidelines**: For contributing rules or commit formats

### 💡 Examples:

- add(company): added spotdraft to companies.json
- update(company): updated work mode for nagarro
- fix(company): fixed typo in backbase tech stack
- docs(readme): added method 2 contribution flow
- chore(credits): added new maintainers section
