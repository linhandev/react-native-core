/**
 * @format
 */

export type BridgelessUIManagerContext = {};

export abstract class BaseBridgelessUIManagerDelegate {
  constructor(protected ctx: BridgelessUIManagerContext) {}

  /**
   * NOTE: delegates should be platform independent, but doing it properly requires more changes and we want to minimize maintenance.
   */
  abstract selectAndroidOrIOSImplementation(): 'android' | 'ios';
}
