/**
 * @format
 */
import {BaseVibrationDelegate} from './BaseVibrationDelegate';
import {UnsupportedByPlatformError} from '../../../delegates/DelegateError';

export default class VibrationDelegate extends BaseVibrationDelegate {
  override shouldUseAndroidImplementation(): boolean {
    throw new UnsupportedByPlatformError();
  }

  override vibrateByPattern(pattern: Array<number>, repeat: boolean): void {
    throw new UnsupportedByPlatformError();
  }

  override vibrateScheduler(
    id: number,
    pattern: Array<number>,
    repeat: boolean,
    nextIndex: number,
    shouldVibrate: boolean = false, // first value in pattern is delay
  ): void {
    throw new UnsupportedByPlatformError();
  }

  override cancel(): void {
    throw new UnsupportedByPlatformError();
  }
}