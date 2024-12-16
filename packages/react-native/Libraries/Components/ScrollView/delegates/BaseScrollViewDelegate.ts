/**
 * @format
 */

import {ScrollViewProps as _ScrollViewProps} from '../ScrollView';

export type ScrollViewDelegateContext = {};

export type CustomNativeProps = Record<string, any>;

export interface RenderScrollViewWithRefreshControlArgs {
  NativeDirectionalScrollView: React.ComponentType<any>;
  refreshControl: React.ReactElement;
  scrollViewRef: React.Ref<any>;
  contentContainer: React.ReactNode;
  props: any;
  baseStyle: any;
}

export type ScrollViewProps = _ScrollViewProps;

export abstract class BaseScrollViewDelegate {
  constructor(protected ctx: ScrollViewDelegateContext) {}

  abstract renderScrollViewWithRefreshControl(
    args: RenderScrollViewWithRefreshControlArgs,
  ): React.ReactNode;

  shouldDismissKeyboardOnScrollBeginDrag(props: ScrollViewProps): boolean {
    return props.keyboardDismissMode === 'on-drag';
  }

  getCustomNativeProps(props: ScrollViewProps): CustomNativeProps {
    return {};
  }
}
