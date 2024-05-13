Features Implemented:
* Page object model with fixtures
* UI and API tests
* Type guards through Typescript
* Data generator through faker library
* Run tests in CI through GithubActions on push to master
* Linting through Eslint, Prettier 
* Precommit linting check through Husky  

How to run this code:
### To Run Tests

```bash
# Clone the repository
git clone ..

# Install Dependencies
npm i

# To run all the tests in headless mode
npx playwright test

# To run only UI tests 
npx playwright test tests/* --grep '@ui'

# To run only API tests 
npx playwright test tests/* --grep '@api'

# To run all the regression tests 
npx playwright test tests/* --grep '@regression'

```

Improvements planned:
* [ ] Nightly run setup in GithubActions
* [ ] Setup to run seperate environments (dev, test, live)
* [ ] Docker Setup
* [ ] Stub internal api to verify the final action 
* [ ] Setup multi browser and resolutions for UI tests

