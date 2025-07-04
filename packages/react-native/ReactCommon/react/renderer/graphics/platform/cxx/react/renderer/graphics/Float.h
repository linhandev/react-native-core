/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#pragma once

#include <limits>

namespace facebook::react {

/*
 * Exact type of float numbers which ideally should match a type behing
 * platform- and chip-architecture-specific float type.
 */
#ifdef REACT_NATIVE__RENDER__GRAPHICS__FLOAT
using Float = REACT_NATIVE__RENDER__GRAPHICS__FLOAT;
#else
using Float = float;
#endif

} // namespace facebook::react
