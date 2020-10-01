import { addSeconds, isAfter } from 'date-fns';

const guardInterval = 60 * 5;

export class AccessToken {
  private readonly token;

  private readonly validUntil: Date;

  constructor(rawToken: string, expiresIn: number) {
    this.token = rawToken;
    this.validUntil = addSeconds(new Date(), expiresIn - guardInterval);
  }

  get bearer(): string {
    return this.token;
  }

  get isValid(): boolean {
    return isAfter(new Date(), this.validUntil);
  }
}
