/**
 * @format
 */
import type {
  ShareContent as _ShareContent,
  ShareOptions as _ShareOptions,
  ShareAction as _ShareAction,
} from '../Share';

export type ShareDelegateContext = {};
export type ShareContent = _ShareContent;
export type ShareOptions = _ShareOptions;
export type ShareAction = _ShareAction
export abstract class BaseShareDelegate {
  constructor(protected ctx: ShareDelegateContext) {}

  abstract onShare(
    content: ShareContent,
    options: ShareOptions,
  ): Promise<ShareAction>;
}
