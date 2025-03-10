/**
 * @format
 */
import type {
  AlertButton,
  AlertOptions,
  AlertType,
} from '../../Alert/Alert';

export type AlertDelegateContext = {};

export type AlertDelegateButton = AlertButton;

export type AlertDelegateOptions = AlertOptions;

export type AlertDelegateType = AlertType;

export abstract class BaseAlertDelegate {
  constructor(protected ctx: AlertDelegateContext) {}

  abstract alert(
    title: string,
    message?: string,
    buttons?: AlertDelegateButton[],
    options?: AlertDelegateOptions,
  ): void;

  abstract prompt(
    title: string,
    message?: string,
    callbackOrButtons?: ((text: string) => void) | AlertDelegateButton[],
    type?: AlertDelegateType,
    defaultValue?: string,
    keyboardType?: string,
    options?: AlertDelegateOptions,
  ): void;
}
