/**
 * @format
 */

import type {PartialViewConfig} from '../../../Renderer/shims/ReactNativeTypes';

import {BaseScrollViewNativeComponentDelegate} from './BaseScrollViewNativeComponentDelegate';
import {UnsupportedByPlatformError} from '../../../../delegates/DelegateError';

export default class ScrollViewNativeComponentDelegate extends BaseScrollViewNativeComponentDelegate {
  override getIntenalViewConfig(): PartialViewConfig {
    throw new UnsupportedByPlatformError();
  }
}
