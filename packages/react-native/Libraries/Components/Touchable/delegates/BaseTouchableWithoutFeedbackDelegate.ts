/**
 * @format
 */

export type BaseTouchableWithoutFeedbackContext = {};

export abstract class BaseTouchableWithoutFeedbackDelegate {
  constructor(protected ctx: BaseTouchableWithoutFeedbackContext) {}

  getExtraProps(): Record<string, any> {
    return {};
  }
}
