/**
 * @format
 */

export type TextInputDelegateContext = {};

export type GetNativeTextContentTypeOptions = {
  autocomplete: string;
  autocompleteWebToTextContentTypeMap: Record<string, string>;
};

export abstract class BaseTextInputDelegate {
  constructor(protected ctx: TextInputDelegateContext) {}

  abstract shouldBeCancellable(
    rejectResponderTermination: boolean,
  ): boolean | null;

  abstract createNativeTextInput(props: any): React.ReactNode;

  abstract getKeyboardTypeByInputMode(inputMode: string): string;

  abstract getSupportedKeyboardTypes(): string[];

  getNativeAutocomplete(
    autocomplete: string | null | undefined,
  ): string | null | undefined {
    return autocomplete;
  }

  getNativeTextContentType(
    textContentType: string | null | undefined,
    options: GetNativeTextContentTypeOptions,
  ): string | null | undefined {
    return textContentType;
  }
}
