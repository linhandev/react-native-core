/**
 * @format
 */
import type {TextStyle, ViewStyle} from 'react-native';

export type ButtonDelegateContext = {};

export abstract class BaseButtonDelegate {
  constructor(protected ctx: ButtonDelegateContext) {}
  abstract getButtonStyle(): ViewStyle;
  abstract getTextStyle(): TextStyle;
  abstract getButtonDisabledStyle(): ViewStyle;
  abstract getTextDisabledStyle(): TextStyle;
}
