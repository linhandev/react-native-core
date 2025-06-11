/**
 * @format
 */
import type {I18nManagerConstants} from '../NativeI18nManager';

export type I18nManagerContext = {
  constantsCallback: () => I18nManagerConstants;
};

export abstract class BaseI18nManagerDelegate {
  constructor(protected ctx: I18nManagerContext) {}

  abstract getConstants: () => I18nManagerConstants;

  abstract isRTL: boolean;

  abstract doLeftAndRightSwapInRTL: boolean;
}
