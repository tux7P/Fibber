import {test} from 'e2e/packages/fixtures/basePages';

test('Register as user', async ({navigation, registrationModal}) => {
  await navigation.openBaseUrl();
  if (await navigation.isCookiesAcceptanceElementPresent()) {
    await navigation.acceptCookies();
  }
  await navigation.openLoginRegisterModal();
  await navigation.switchToRegistrationTab();
  await registrationModal.chooseRegisterAsJobSeeker();
});
