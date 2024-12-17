/**
 * @format
 */

import {
  BaseStatusBarDelegate,
  StatusBarAnimation,
  StatusBarStyle,
} from './BaseStatusBarDelegate';
import {UnsupportedByPlatformError} from '../../../../delegates/DelegateError';

export default class StatusBarDelegate extends BaseStatusBarDelegate {
  getCurrentHeight(): number {
    throw new UnsupportedByPlatformError();
  }

  getDefaultBackgroundColor(): string {
    throw new UnsupportedByPlatformError();
  }

  setBarStyle(style: StatusBarStyle, animated?: boolean): void {
    throw new UnsupportedByPlatformError();
  }

  setColor(processedColor: number, animated?: boolean): void {
    throw new UnsupportedByPlatformError();
  }

  setHidden(hidden: boolean, animation?: StatusBarAnimation): void {
    throw new UnsupportedByPlatformError();
  }

  setNetworkActivityIndicatorVisible(visible: boolean): void {
    throw new UnsupportedByPlatformError();
  }

  setTranslucent(translucent: boolean): void {
    throw new UnsupportedByPlatformError();
  }

  updatePropsStack(oldProps: any, mergedProps: any): void {
    throw new UnsupportedByPlatformError();
  }
}
