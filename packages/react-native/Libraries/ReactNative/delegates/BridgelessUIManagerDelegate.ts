/**
 * @format
 */
import {BaseBridgelessUIManagerDelegate} from './BaseBridgelessUIManagerDelegate';
import {UnsupportedByPlatformError} from '../../../delegates/DelegateError';

export default class BridgelessUIManagerDelegate extends BaseBridgelessUIManagerDelegate {
  override selectAndroidOrIOSImplementation(): 'android' | 'ios' {
    throw new UnsupportedByPlatformError();
  }
}
