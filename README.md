### Features Implemented:
* Test structure follows Arrange, Act and Assert (AAA) Pattern
* Page object model with fixtures
* UI and API tests
* Type guards through Typescript
* Data generator through faker library
* Run tests in CI through GithubActions on push to master
* Linting through Eslint, Prettier 
* Precommit linting check through Husky  


### To Run Tests

```bash
# Clone the repository
git clone git@github.com:tux7P/Fibber.git

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

# To see the test report after a test run
npx playwright show-report

```

### Improvements planned:
* [ ] Improve documentation
* [ ] Add more UI and API tests
* [ ] Nightly run setup in GithubActions
* [ ] Setup to run seperate environments (dev, test, live)
* [ ] Docker Setup
* [ ] Intercepting API to verify the final action 
* [ ] Setup multi browser and resolutions for UI tests

