/**
 * @format
 */

export type VibrationDelegateContext = {};

export abstract class BaseVibrationDelegate {
  constructor(protected ctx: VibrationDelegateContext) {}

  abstract shouldUseAndroidImplementation(): boolean;
}
