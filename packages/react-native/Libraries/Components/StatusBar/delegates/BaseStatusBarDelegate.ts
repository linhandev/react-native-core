/**
 * @format
 */

export type StatusBarAnimation = 'none' | 'fade' | 'slide';

export type StatusBarStyle = 'default' | 'light-content' | 'dark-content';

export abstract class BaseStatusBarDelegate {
  abstract getDefaultBackgroundColor(): string;

  abstract getCurrentHeight(): number;

  abstract setHidden(hidden: boolean, animation?: StatusBarAnimation): void;

  abstract setBarStyle(style: StatusBarStyle, animated?: boolean): void;

  abstract setNetworkActivityIndicatorVisible(visible: boolean): void;

  abstract setColor(processedColor: number, animated?: boolean): void;

  abstract setTranslucent(translucent: boolean): void;

  abstract updatePropsStack(oldProps: any, mergedProps: any): void;
}
