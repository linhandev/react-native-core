/**
 * @format
 */

import type {I18nManagerConstants} from '../NativeI18nManager';
import type {I18nManagerContext} from './BaseI18nManagerDelegate';
import {BaseI18nManagerDelegate} from './BaseI18nManagerDelegate';

export default class I18nManagerDelegate extends BaseI18nManagerDelegate {
  i18nConstants: I18nManagerConstants;
  constructor(protected ctx: I18nManagerContext) {
    super(ctx);
    this.i18nConstants = ctx.constantsCallback();
    this.isRTL = this.i18nConstants.isRTL;
    this.doLeftAndRightSwapInRTL = this.i18nConstants.doLeftAndRightSwapInRTL;
  }

  getConstants: () => I18nManagerConstants = () => {
    return this.i18nConstants;
  };

  isRTL: boolean;
  doLeftAndRightSwapInRTL: boolean;
}
