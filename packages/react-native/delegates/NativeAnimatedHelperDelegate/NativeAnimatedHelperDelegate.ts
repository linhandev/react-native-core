/**
 * @format
 */
import {UnsupportedByPlatformError} from '../DelegateError';
import {
  BaseNativeAnimatedHelperDelegate,
  NativeAnimatedModule,
} from './BaseNativeAnimatedHelperDelegate';

export default class NativeAnimatedHelperDelegate extends BaseNativeAnimatedHelperDelegate {
  getAnimatedModule(): NativeAnimatedModule {
    throw new UnsupportedByPlatformError();
  }
}
