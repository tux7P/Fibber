import {test as base} from '@playwright/test';
import {Navigation} from '../base/pages/Navigation';
import {RegistrationModal} from '../registration/pages/RegistrationModal';

interface CvOnlineFixtures {
  navigation: Navigation;
  registrationModal: RegistrationModal;
}

export const test = base.extend<CvOnlineFixtures>({
  navigation: async ({page}, use) => {
    await use(new Navigation(page));
  },
  registrationModal: async ({page}, use) => {
    await use(new RegistrationModal(page));
  },
});

export const expect = test.expect;
export const use = test.use;
