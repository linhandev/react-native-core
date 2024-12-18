/**
 * @format
 */

export type BaseTouchableNativeFeedbackContext = {};

export abstract class BaseTouchableNativeFeedbackDelegate {
  constructor(protected ctx: BaseTouchableNativeFeedbackContext) {}

  getExtraProps(): Record<string, any> {
    return {};
  }
}
