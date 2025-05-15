/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 * @jsdoc
 */

import Delegate from './delegates/VibrationDelegate';
import NativeVibration from './NativeVibration';

const DELEGATE = new Delegate({});

/**
 * Vibration API
 *
 * See https://reactnative.dev/docs/vibration
 */

let _vibrating: boolean = false;
let _id: number = 0; // _id is necessary to prevent race condition.
const _default_vibration_length = 400;

function vibrateByPattern(pattern: Array<number>, repeat: boolean = false) {
  DELEGATE.vibrateByPattern(pattern, repeat);
}

function vibrateScheduler(
  id: number,
  pattern: Array<number>,
  repeat: boolean,
  nextIndex: number,
) {
  DELEGATE.vibrateScheduler(id, pattern, repeat, nextIndex, false);
}

const Vibration = {
  /**
   * Trigger a vibration with specified `pattern`.
   *
   * See https://reactnative.dev/docs/vibration#vibrate
   */
  vibrate: function (
    pattern: number | Array<number> = _default_vibration_length,
    repeat: boolean = false,
  ) {
    if (DELEGATE.shouldUseAndroidImplementation()) {
      if (typeof pattern === 'number') {
        NativeVibration.vibrate(pattern);
      } else if (Array.isArray(pattern)) {
        NativeVibration.vibrateByPattern(pattern, repeat ? 0 : -1);
      } else {
        throw new Error('Vibration pattern should be a number or array');
      }
    } else {
      if (_vibrating) {
        return;
      }
      if (typeof pattern === 'number') {
        NativeVibration.vibrate(pattern);
      } else if (Array.isArray(pattern)) {
        vibrateByPattern(pattern, repeat);
      } else {
        throw new Error('Vibration pattern should be a number or array');
      }
    }
  },
  /**
   * Stop vibration
   *
   * See https://reactnative.dev/docs/vibration#cancel
   */
  cancel: function () {
    DELEGATE.cancel();
  },
};

module.exports = Vibration;
