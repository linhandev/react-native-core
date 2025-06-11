/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import type {
  HostComponent,
  PartialViewConfig,
} from '../../Renderer/shims/ReactNativeTypes';
import type {ScrollViewNativeProps as Props} from './ScrollViewNativeComponentType';

import * as NativeComponentRegistry from '../../NativeComponent/NativeComponentRegistry';
import ScrollViewNativeComponentDelegate from './delegates/ScrollViewNativeComponentDelegate';

const DELEGATE = new ScrollViewNativeComponentDelegate({});

export const __INTERNAL_VIEW_CONFIG: PartialViewConfig =
  DELEGATE.getIntenalViewConfig();

const ScrollViewNativeComponent: HostComponent<Props> =
  NativeComponentRegistry.get<Props>(
    'RCTScrollView',
    () => __INTERNAL_VIEW_CONFIG,
  );

export default ScrollViewNativeComponent;
