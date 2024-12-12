/**
 * @format
 */
import type {Spec} from '../../src/private/specs/modules/NativeAnimatedTurboModule';

export type Context = {};

export type NativeAnimatedModule = Spec;

export abstract class BaseNativeAnimatedHelperDelegate {
  constructor(protected ctx: Context) {}

  abstract getAnimatedModule(): NativeAnimatedModule;
}
