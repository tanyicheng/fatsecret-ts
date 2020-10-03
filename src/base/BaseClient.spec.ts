import * as nock from 'nock';
import { BaseClient } from './BaseClient';

class TestClient extends BaseClient {
  getAccessKey() {
    return this.accessKey;
  }

  getSecretKey() {
    return this.secretKey;
  }

  getBaseDomain() {
    return BaseClient.baseDomain();
  }

  getOAuthDomain() {
    return BaseClient.oAuthDomain();
  }

  getPlatformDomain() {
    return BaseClient.platformDomain();
  }

  publicUpdateOAuthToken() {
    return this.updateOAuthToken();
  }
}

describe('BaseClient class', () => {
  test('static methods', () => {
    const client = new TestClient('key', 'secret');
    expect(client.getBaseDomain()).toEqual('fatsecret.com');
    expect(client.getOAuthDomain()).toEqual('oauth.fatsecret.com');
    expect(client.getPlatformDomain()).toEqual('platform.fatsecret.com');
  });

  test('constructor - success', async () => {
    const client = new TestClient('key', 'secret');

    expect(client.getAccessKey()).toEqual('key');
    expect(client.getSecretKey()).toEqual('secret');
  });

  test('constructor - fail', async () => {
    expect(() => new TestClient('', 'secret')).toThrow('Access and secret keys must be set');
    expect(() => new TestClient('key', '')).toThrow('Access and secret keys must be set');
    expect(() => new TestClient('', '')).toThrow('Access and secret keys must be set');
    expect(() => new TestClient('', '', 'json')).toThrow('Access and secret keys must be set');
  });

  test('authentication', async () => {
    nock('https://oauth.fatsecret.com').post('/connect/token').reply(200, {
      access_token: 'eyJhbGciOiJSUzI1NiIsImtZqcQ',
      expires_in: 86400,
      token_type: 'Bearer',
      scope: 'basic',
    });
    nock('https://platform.fatsecret.com')
      .post('/rest/server.api')
      .query({ method: 'foods.search', format: 'json' })
      .reply(200, {
        result: 'ok',
      });
    const client = new TestClient('key', 'secret');

    const result = await client.postRequest({ method: 'foods.search' });
    expect(result).toEqual({
      result: 'ok',
    });
  });
});
