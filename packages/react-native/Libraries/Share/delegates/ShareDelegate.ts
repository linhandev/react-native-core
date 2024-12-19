/**
 * @format
 */

import {
  BaseShareDelegate,
  ShareAction,
  ShareContent,
  ShareOptions,
} from './BaseShareDelegate';
import {UnsupportedByPlatformError} from '../../../delegates/DelegateError';

export default class ShareDelegate extends BaseShareDelegate {
  override onShare(
    content: ShareContent,
    options: ShareOptions,
  ): Promise<ShareAction> {
    throw new UnsupportedByPlatformError();
  }
}
