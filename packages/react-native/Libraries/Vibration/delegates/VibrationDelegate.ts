/**
 * @format
 */
import {BaseVibrationDelegate} from './BaseVibrationDelegate';
import {UnsupportedByPlatformError} from '../../../delegates/DelegateError';

export default class VibrationDelegate extends BaseVibrationDelegate {
  override shouldUseAndroidImplementation(): boolean {
    throw new UnsupportedByPlatformError();
  }
}
