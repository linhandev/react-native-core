/**
 * @format
 */

export type BaseTouchableHighlightContext = {};

export abstract class BaseTouchableHighlightDelegate {
  constructor(protected ctx: BaseTouchableHighlightContext) {}

  getExtraContainerProps(): Record<string, any> {
    return {};
  }
}
