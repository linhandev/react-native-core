/**
 * @format
 */
import {ReactNode} from 'react';
import type {KeyboardAvoidingViewProps, KeyboardMetrics} from 'react-native';

export type BaseKeyboardAvoidingViewDelegateContext = {
  getProps(): KeyboardAvoidingViewProps;
};

export type PrepareChildrenOptions = {
  bottomHeight?: number;
};

export abstract class BaseKeyboardAvoidingViewDelegate {
  constructor(protected ctx: BaseKeyboardAvoidingViewDelegateContext) {}

  getRelativeKeyboardHeight(keyboardFrame: KeyboardMetrics): number | null {
    return null;
  }

  prepareChildren(
    children: ReactNode,
    options: PrepareChildrenOptions = {},
  ): ReactNode {
    return children;
  }
}
