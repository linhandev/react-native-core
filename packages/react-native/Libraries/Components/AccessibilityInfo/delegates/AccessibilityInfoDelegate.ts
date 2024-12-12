/**
 * @format
 */
import {BaseAccessibilityInfoDelegate} from './BaseAccessibilityInfoDelegate';
import {UnsupportedByPlatformError} from '../../../../delegates/DelegateError';

export default class AccessibilityInfoDelegate extends BaseAccessibilityInfoDelegate {
  override setAccessibilityFocus(reactTag: number): void {
    throw new UnsupportedByPlatformError();
  }

  override announceForAccessibility(announcement: string): void {
    throw new UnsupportedByPlatformError();
  }

  override announceForAccessibilityWithOptions(
    announcement: string,
    options: {queue?: boolean},
  ) {
    throw new UnsupportedByPlatformError();
  }

  override getRecommendedTimeoutMillis(
    originalTimeout: number,
  ): Promise<number> {
    throw new UnsupportedByPlatformError();
  }
}
