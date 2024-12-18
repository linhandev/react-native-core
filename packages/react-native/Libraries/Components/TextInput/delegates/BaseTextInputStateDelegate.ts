/**
 * @format
 */
export type TextInputStateContext = {};

export abstract class BaseTextInputStateDelegate {
  constructor(protected ctx: TextInputStateContext) {}

  abstract focus(ref: React.ComponentRef<any>): void;

  abstract blur(ref: React.ComponentRef<any>): void;
}
