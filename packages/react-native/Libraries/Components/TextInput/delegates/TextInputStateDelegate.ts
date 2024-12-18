/**
 * @format
 */
import {BaseTextInputStateDelegate} from './BaseTextInputStateDelegate';
import {UnsupportedByPlatformError} from '../../../../delegates/DelegateError';

export default class TextInputDelegate extends BaseTextInputStateDelegate {
  blur(ref: React.ComponentRef<any>): void {
    throw new UnsupportedByPlatformError();
  }

  focus(ref: React.ComponentRef<any>): void {
    throw new UnsupportedByPlatformError();
  }
}
