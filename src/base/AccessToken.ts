import { addSeconds, isBefore } from 'date-fns';

export class AccessToken {
  static guardInterval = 60 * 5;

  private readonly token;

  private readonly validUntil: Date;

  constructor(rawToken: string, expiresIn: number) {
    this.token = rawToken;
    this.validUntil = addSeconds(new Date(), expiresIn - AccessToken.guardInterval);
  }

  get bearer(): string {
    return this.token;
  }

  get isValid(): boolean {
    return isBefore(new Date(), this.validUntil);
  }
}
