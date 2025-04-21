/**
 * @format
 */

import type {PartialViewConfig} from '../../../Renderer/shims/ReactNativeTypes';
export type ScrollViewNativeComponentDelegateContext = {};

export abstract class BaseScrollViewNativeComponentDelegate {
  constructor(protected ctx: ScrollViewNativeComponentDelegateContext) {}

  abstract getIntenalViewConfig(): PartialViewConfig;
}
