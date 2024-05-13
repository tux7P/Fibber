import {test as base} from '@playwright/test';
import {Navigation} from '../packages/ui/pages/Navigation';
import {RegistrationModal} from '../packages/ui/pages/RegisterModal';
import {RegistrationClient} from '../packages/api/clients/RegistrationClient';

interface CvOnlineFixtures {
  navigation: Navigation;
  registrationModal: RegistrationModal;
  registrationClient: RegistrationClient;
}

export const test = base.extend<CvOnlineFixtures>({
  navigation: async ({page}, use) => {
    await use(new Navigation(page));
  },
  registrationModal: async ({page}, use) => {
    await use(new RegistrationModal(page));
  },
  registrationClient: async ({request}, use) => {
    await use(new RegistrationClient(request));
  },
});

export const expect = test.expect;
export const use = test.use;
