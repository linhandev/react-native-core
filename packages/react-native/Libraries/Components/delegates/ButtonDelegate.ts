/**
 * @format
 */
import {TextStyle, ViewStyle} from 'react-native';
import {BaseButtonDelegate} from './BaseButtonDelegate';

export default class ButtonDelegate extends BaseButtonDelegate {
  getButtonDisabledStyle(): ViewStyle {
    return {};
  }

  getButtonStyle(): ViewStyle {
    return {};
  }

  getTextDisabledStyle(): TextStyle {
    return {};
  }

  getTextStyle(): TextStyle {
    return {};
  }
}
