/**
 * @format
 */
export type ViewConfigIgnoreDelegateContext = {};

export abstract class BaseViewConfigIgnoreDelegate {
  constructor(protected ctx: ViewConfigIgnoreDelegateContext) {}

  abstract conditionallyIgnoredEventHandlers<T>(value: T): T | undefined;
}
