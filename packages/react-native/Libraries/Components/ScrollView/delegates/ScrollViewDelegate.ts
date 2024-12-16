/**
 * @format
 */
import {UnsupportedByPlatformError} from '../../../../delegates/DelegateError';
import {
  BaseScrollViewDelegate,
  RenderScrollViewWithRefreshControlArgs,
  ScrollViewProps,
} from './BaseScrollViewDelegate';

export default class ScrollViewDelegate extends BaseScrollViewDelegate {
  override renderScrollViewWithRefreshControl(
    args: RenderScrollViewWithRefreshControlArgs,
  ): React.ReactNode {
    throw new UnsupportedByPlatformError();
  }

  override shouldDismissKeyboardOnScrollBeginDrag(
    props: ScrollViewProps,
  ): boolean {
    throw new UnsupportedByPlatformError();
  }
}
