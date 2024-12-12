/**
 * @format
 */
import {
  BaseAlertDelegate,
  AlertDelegateButton,
  AlertDelegateOptions,
  AlertDelegateType,
} from './BaseAlertDelegate';
import {UnsupportedByPlatformError} from '../DelegateError';

export default class AlertDelegate extends BaseAlertDelegate {
  alert(
    title: string,
    message?: string,
    buttons?: AlertDelegateButton[],
    options?: AlertDelegateOptions,
  ): void {
    throw new UnsupportedByPlatformError();
  }

  prompt(
    title: string,
    message?: string,
    callbackOrButtons?: ((text: string) => void) | AlertDelegateButton[],
    type?: AlertDelegateType,
    defaultValue?: string,
    keyboardType?: string,
    options?: AlertDelegateOptions,
  ): void {
    throw new UnsupportedByPlatformError();
  }
}
