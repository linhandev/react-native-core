/**
 * @format
 */
import React from 'react';
import type { RefreshControlProps } from '../RefreshControl';

export type RefreshControlDelegateContext = {
  getProps: () => RefreshControlProps
};

export type RefreshControlDelegateRenderInternalProps<
  TNativeComponent extends {new (props: any): React.Component<any>},
> = {
  setNativeRef: (ref: React.ElementRef<TNativeComponent>) => void;
  onRefresh: () => void;
};

export abstract class BaseRefreshControlDelegate<
  TNativeComponent extends {new (props: any): React.Component<any>},
> {
  constructor(protected ctx: RefreshControlDelegateContext) {}

  abstract onSetNativeRefreshing(
    ref: React.ElementRef<TNativeComponent>,
    refreshing: boolean,
  ): void;

  abstract renderNativeComponent(
    internalProps: RefreshControlDelegateRenderInternalProps<TNativeComponent>,
  ): React.ReactNode;
}
