/**
 * @format
 */
export class DelegateError extends Error {}

export class UnsupportedByPlatformError extends DelegateError {
  constructor() {
    super('Unsupported by the platform');
  }
}
