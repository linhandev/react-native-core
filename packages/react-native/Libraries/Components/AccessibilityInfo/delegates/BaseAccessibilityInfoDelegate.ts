/**
 * @format
 */
import type {AccessibilityChangeEventName} from '../AccessibilityInfo';

export type BaseAccessibilityInfoDelegateContext = {};

export abstract class BaseAccessibilityInfoDelegate {
  constructor(protected ctx: BaseAccessibilityInfoDelegateContext) {}

  getPlatformEventNameByAPIEventNameMap(): Map<
    AccessibilityChangeEventName,
    string
  > {
    return new Map<AccessibilityChangeEventName, string>()
      .set('change', 'change')
      .set('boldTextChanged', 'boldTextChanged')
      .set('grayscaleChanged', 'grayscaleChanged')
      .set('invertColorsChanged', 'invertColorsChanged')
      .set('reduceMotionChanged', 'reduceMotionChanged')
      .set('screenReaderChanged', 'screenReaderChanged')
      .set('reduceTransparencyChanged', 'reduceTransparencyChanged');
  }

  async isBoldTextEnabled(): Promise<boolean> {
    return false;
  }

  async isGrayscaleEnabled(): Promise<boolean> {
    return false;
  }

  async isInvertColorsEnabled(): Promise<boolean> {
    return false;
  }

  async isReduceMotionEnabled(): Promise<boolean> {
    return false;
  }

  async prefersCrossFadeTransitions(): Promise<boolean> {
    return false;
  }

  async isReduceTransparencyEnabled(): Promise<boolean> {
    return false;
  }

  async isScreenReaderEnabled(): Promise<boolean> {
    return false;
  }

  async isAccessibilityServiceEnabled(): Promise<boolean> {
    return false;
  }

  abstract setAccessibilityFocus(reactTag: number): void;

  abstract announceForAccessibility(announcement: string): void;

  abstract announceForAccessibilityWithOptions(
    announcement: string,
    options: {queue?: boolean},
  );

  abstract getRecommendedTimeoutMillis(
    originalTimeout: number,
  ): Promise<number>;
}
