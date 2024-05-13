import {test, expect} from 'fixtures/basePages';
import {RegisterRequest, RegisterResponse} from 'types/register';
import Generator from 'data-generator/Generator';
import {tags} from 'tags/Tags';

test.describe(`API - Registration Tests on ${tags.TestType.Regression} ${tags.TestType.API} ${tags.Features.Register}`, () => {
  test('Verify user can register successfull through API', async ({registrationClient}) => {
    const requestBody: RegisterRequest = {
      email: Generator.generateEmail(),
      firstName: Generator.generateFirstName(),
      lastName: Generator.generateLastName(),
      password: Generator.generatePassword(),
    };

    const response = await registrationClient.registerNewUser(requestBody);

    expect(response.status()).toBe(204);
    // No output body - so nothing to validate in response body
  });

  test('Verify duplicate email error through API', async ({registrationClient}) => {
    const requestBody: RegisterRequest = {
      email: 'demo@test.com',
      firstName: Generator.generateFirstName(),
      lastName: Generator.generateLastName(),
      password: Generator.generatePassword(),
    };

    const response = await registrationClient.registerNewUser(requestBody);
    const responseBody: RegisterResponse = await response.json();

    expect(response.status()).toBe(400);
    expect(responseBody).toEqual({errorType: 'DUPLICATE_EMAIL', message: 'User with this email already exists.'});
  });

  test('Verify minimum password throws invalid parameter error for password field API', async ({
    registrationClient,
  }) => {
    const requestBody: RegisterRequest = {
      email: Generator.generateEmail(),
      firstName: Generator.generateFirstName(),
      lastName: Generator.generateLastName(),
      password: '1234', // Password length is less than 6 characters
    };

    const response = await registrationClient.registerNewUser(requestBody);
    const responseBody: RegisterResponse = await response.json();

    expect(response.status()).toBe(400);
    expect(responseBody).toEqual({
      errorType: 'INVALID_PARAMETERS',
      message: 'Invalid parameters provided.',
      fieldNames: ['password'],
    });
  });
});
