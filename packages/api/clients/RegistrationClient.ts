import {APIRequestContext, APIResponse} from '@playwright/test';
import {RegisterRequest} from '../../../types/register';

export class RegistrationClient {
  private readonly apiBaseUrl: string = 'https://test.cv.ee';
  private readonly registrationPath: string = 'api/v1/authentication/registration';
  private readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async registerNewUser(body: RegisterRequest): Promise<APIResponse> {
    return await this.request.post(`${this.apiBaseUrl}/${this.registrationPath}`, {data: body});
  }
}
