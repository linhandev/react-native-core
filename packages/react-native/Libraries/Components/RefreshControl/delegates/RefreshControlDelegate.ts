/**
 * @format
 */

import {
  BaseRefreshControlDelegate,
  RefreshControlDelegateRenderInternalProps,
} from './BaseRefreshControlDelegate';
import {UnsupportedByPlatformError} from '../../../../delegates/DelegateError';

export default class RefreshControlDelegate extends BaseRefreshControlDelegate<any> {
  renderNativeComponent(
    internalProps: RefreshControlDelegateRenderInternalProps<any>,
  ): React.ReactNode {
    throw new UnsupportedByPlatformError();
  }

  onSetNativeRefreshing(ref: unknown, refreshing: boolean): void {
    throw new UnsupportedByPlatformError();
  }
}
