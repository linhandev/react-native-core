/**
 * @format
 */
import {UnsupportedByPlatformError} from '../../../delegates/DelegateError';
import {
  BaseNativeAnimatedHelperDelegate,
  NativeAnimatedModule,
} from './BaseNativeAnimatedHelperDelegate';

export default class NativeAnimatedHelperDelegate extends BaseNativeAnimatedHelperDelegate {
  getAnimatedModule(): NativeAnimatedModule {
    throw new UnsupportedByPlatformError();
  }

  shouldUseSingleOpBatching(): boolean {
    throw new UnsupportedByPlatformError();
  }
}
