/**
 * @format
 */

import {BaseTextInputDelegate, GetNativeTextContentTypeOptions} from './BaseTextInputDelegate';
import {UnsupportedByPlatformError} from '../../../../delegates/DelegateError';


export default class TextInputDelegate extends BaseTextInputDelegate {
  override createNativeTextInput(props: any): React.ReactNode {
    throw new UnsupportedByPlatformError();
  }

  override getKeyboardTypeByInputMode(inputMode: string): string {
    throw new UnsupportedByPlatformError();
  }

  override getSupportedKeyboardTypes(): string[] {
    throw new UnsupportedByPlatformError();
  }

  override getNativeAutocomplete(autocomplete: string): string {
    throw new UnsupportedByPlatformError();
  }

  override getNativeTextContentType(
    textContentType: string,
    options: GetNativeTextContentTypeOptions,
  ): string {
    throw new UnsupportedByPlatformError();
  }

  override shouldBeCancellable(rejectResponderTermination: boolean): boolean | null {
    throw new UnsupportedByPlatformError();
  }
}
