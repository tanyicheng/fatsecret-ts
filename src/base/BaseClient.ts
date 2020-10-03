import * as gaxios from 'gaxios';
import * as FormData from 'form-data';
import { AccessToken } from './AccessToken';
import { APIResponseFormat, IOauth2Response, PostRequestParams } from './types';

export class BaseClient {
  protected readonly accessKey: string;

  protected readonly secretKey: string;

  protected token: AccessToken;

  protected readonly format: APIResponseFormat;

  constructor(accessKey: string, secretKey: string, format: APIResponseFormat = 'json') {
    if (!accessKey || !secretKey) {
      throw new Error('Access and secret keys must be set');
    }
    this.accessKey = accessKey;
    this.secretKey = secretKey;
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

  protected get tokenIsValid(): boolean {
    return this.token && this.token.isValid;
  }

  protected async updateOAuthToken(): Promise<void> {
    const { access_token: token, expires_in: expiresIn } = await this.getOAuthToken();
    this.token = new AccessToken(token, expiresIn);
  }

  protected async getOAuthToken(): Promise<IOauth2Response> {
    const form = new FormData();
    form.append('grant_type', 'client_credentials');
    form.append('scope', 'basic');

    const auth = Buffer.from(`${this.accessKey}:${this.secretKey}`).toString('base64');
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

  protected static baseDomain(): string {
    return 'fatsecret.com';
  }

  protected static oAuthDomain(): string {
    return `oauth.${this.baseDomain()}`;
  }

  protected static platformDomain(): string {
    return `platform.${this.baseDomain()}`;
  }
}
