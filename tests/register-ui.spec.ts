import {test} from 'fixtures/basePages';
import Generator from 'data-generator/Generator';
import {tags} from 'tags/Tags';

test.describe(`UI - Registration Tests ${tags.TestType.Regression}  ${tags.TestType.UI} ${tags.Features.Register}`, () => {
  test.beforeEach(async ({navigation}) => {
    await navigation.openHomePage();
  });

  test('Verify user can register successfully through UI', async ({navigation, registrationModal}) => {
    const email: string = Generator.generateEmail();
    const password = Generator.generatePassword();
    const firstName = Generator.generateFirstName();
    const lastName = Generator.generateLastName();

    await navigation.openHomePage();
    await registrationModal.goToRegistrationForm();
    await registrationModal.registerNewUser(email, password, firstName, lastName);
    await registrationModal.verifyRegistrationIsSuccessful();
  });

  test('Verify duplicate email error through UI', async ({navigation, registrationModal}) => {
    const duplicateEmail: string = 'test@test.com';
    const password = Generator.generatePassword();
    const firstName = Generator.generateFirstName();
    const lastName = Generator.generateLastName();

    await navigation.openHomePage();
    await registrationModal.goToRegistrationForm();
    await registrationModal.registerNewUser(duplicateEmail, password, firstName, lastName);
    await registrationModal.verifyDuplicateEmailErrorIsDisplayed();
  });

  test('Verify minimum password throws invalid parameter error for password field in UI', async ({
    navigation,
    registrationModal,
  }) => {
    const email: string = Generator.generateEmail();
    const password = '1234'; // Password length is less than 6 characters
    const firstName = Generator.generateFirstName();
    const lastName = Generator.generateLastName();

    await navigation.openHomePage();
    await registrationModal.goToRegistrationForm();
    await registrationModal.registerNewUser(email, password, firstName, lastName);
    await registrationModal.verifyMinimumPasswordErrorIsDisplayed();
  });

  test('Verify user can close registration modal without being stuck in UI', async ({
    navigation,
    registrationModal,
  }) => {
    await navigation.openHomePage();
    await registrationModal.goToRegistrationForm();
    await registrationModal.closeRegistrationModal();
    await registrationModal.verifyRegistrationModalIsClosed();
  });

  /* TODO: Fix this test

test('Verify all fields are required in registration form', async ({navigation, registrationModal, page}) => {
  const expectedErrors = {
    email: 'errors.field.required',
    password: 'errors.field.required',
    firstName: 'errors.field.required',
    lastName: 'errors.field.required',
    agreeTerms: 'errors.field.required',
    agreeGdpr: 'errors.field.required'
  };

  let consoleErrors = {};

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors = { ...consoleErrors, ...JSON.parse(msg.text()) };
    }
  });

  await navigation.openHomePage();
  await registrationModal.goToRegistrationForm();
  await registrationModal.clickRegisterButton();

  console.log(consoleErrors);
  expect(consoleErrors).toEqual(expectedErrors);
}); */
});
