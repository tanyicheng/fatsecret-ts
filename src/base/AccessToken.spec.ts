import { addSeconds } from 'date-fns';
import { AccessToken } from './AccessToken';

const tokenTimeout = 86400;
const { guardInterval } = AccessToken;

describe('AccessToken class', () => {
  test('is not valid', () => {
    const token = new AccessToken('jwt_token', 100);
    expect(token.isValid).toBeFalsy();
  });

  test('is not valid', () => {
    const token = new AccessToken('jwt_token', tokenTimeout);
    jest
      .useFakeTimers('modern')
      .setSystemTime(addSeconds(new Date(), tokenTimeout - guardInterval).getTime());
    expect(token.isValid).toBeFalsy();
  });

  test('is not valid', () => {
    const token = new AccessToken('jwt_token', tokenTimeout);
    jest
      .useFakeTimers('modern')
      .setSystemTime(addSeconds(new Date(), tokenTimeout - guardInterval - 1).getTime());
    expect(token.isValid).toBeTruthy();
  });

  test('is valid', () => {
    const token = new AccessToken('jwt_token', tokenTimeout);
    expect(token.isValid).toBeTruthy();
    expect(token.bearer).toEqual('jwt_token');
  });
});
