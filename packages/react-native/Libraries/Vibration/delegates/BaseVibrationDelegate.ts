/**
 * @format
 */

export type VibrationDelegateContext = {};

export abstract class BaseVibrationDelegate {
  constructor(protected ctx: VibrationDelegateContext) {}

  abstract shouldUseAndroidImplementation(): boolean;

  abstract vibrateByPattern(pattern: Array<number>, repeat: boolean): void;

  abstract vibrateScheduler(
    id: number,
    pattern: Array<number>,
    repeat: boolean,
    nextIndex: number,
    shouldVibrate: boolean, // first value in pattern is delay
  ): void;

  abstract cancel(): void;
}