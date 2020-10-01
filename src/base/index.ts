import * as gaxios from 'gaxios';
import * as FormData from 'form-data';
import { AccessToken } from './AccessToken';
import { APIResponseFormat, IOauth2Response, PostRequestParams } from './types';

export default class BaseClient {
  private readonly accessKey: string;

  private readonly sharedSecret: string;

  private token: AccessToken;

  private readonly format: APIResponseFormat;

  constructor(accessKey: string, sharedSecret: string, format: APIResponseFormat = 'json') {
    if (!accessKey || !sharedSecret) {
      throw new Error('Access and secret keys must be set');
    }
    this.accessKey = accessKey;
    this.sharedSecret = sharedSecret;
    this.format = format;
  }

  async postRequest<T>(params: PostRequestParams): Promise<T> {
    if (!this.tokenIsValid) await this.updateOAuthToken();

    const response = await gaxios.request<T>({
      url: `https://${BaseClient.platformDomain()}/rest/server.api`,
      headers: {
        Authorization: `Bearer ${this.token.bearer}`,
      },
      method: 'POST',
      body: {},
      params: { ...params, format: this.format },
    });

    return response.data;
  }

  get tokenIsValid(): boolean {
    return this.token && this.token.isValid;
  }

  async updateOAuthToken(): Promise<void> {
    const { access_token: token, expires_in: expiresIn } = await this.getOAuthToken();
    this.token = new AccessToken(token, expiresIn);
  }

  async getOAuthToken(): Promise<IOauth2Response> {
    const form = new FormData();
    form.append('grant_type', 'client_credentials');
    form.append('scope', 'basic');

    const auth = Buffer.from(`${this.accessKey}:${this.sharedSecret}`).toString('base64');
    const response = await gaxios.request<IOauth2Response>({
      url: `https://${BaseClient.oAuthDomain()}/connect/token`,
      headers: {
        Authorization: `Basic ${auth}`,
      },
      method: 'POST',
      body: form,
    });

    return response.data;
  }

  static baseDomain(): string {
    return 'fatsecret.com';
  }

  static oAuthDomain(): string {
    return `oauth.${this.baseDomain()}`;
  }

  static platformDomain(): string {
    return `platform.${this.baseDomain()}`;
  }
}
