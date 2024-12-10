/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "ParagraphAttributes.h"

#include <react/renderer/attributedstring/conversions.h>
#include <react/renderer/core/graphicsConversions.h>
#include <react/renderer/debug/debugStringConvertibleUtils.h>
#include <react/utils/FloatComparison.h>

namespace facebook::react {

bool ParagraphAttributes::operator==(const ParagraphAttributes& rhs) const {
  return std::tie(
             maximumNumberOfLines,
             ellipsizeMode,
             textBreakStrategy,
             adjustsFontSizeToFit,
             includeFontPadding,
             allowFontScaling, // RNC_patch
             writingDirection, // RNC_patch
             android_hyphenationFrequency) ==
      std::tie(
             rhs.maximumNumberOfLines,
             rhs.ellipsizeMode,
             rhs.textBreakStrategy,
             rhs.adjustsFontSizeToFit,
             rhs.includeFontPadding,
             rhs.allowFontScaling, // RNC_patch
             rhs.writingDirection, // RNC_patch
             rhs.android_hyphenationFrequency) &&
      floatEquality(minimumFontSize, rhs.minimumFontSize) &&
      floatEquality(minimumFontScale, rhs.minimumFontScale) && // RNC_patch
      floatEquality(maxFontSizeMultiplier, rhs.maxFontSizeMultiplier) && // RNC_patch
      floatEquality(maximumFontSize, rhs.maximumFontSize);
}

bool ParagraphAttributes::operator!=(const ParagraphAttributes& rhs) const {
  return !(*this == rhs);
}

#pragma mark - DebugStringConvertible

#if RN_DEBUG_STRING_CONVERTIBLE
SharedDebugStringConvertibleList ParagraphAttributes::getDebugProps() const {
  return {
      debugStringConvertibleItem("maximumNumberOfLines", maximumNumberOfLines),
      debugStringConvertibleItem("ellipsizeMode", ellipsizeMode),
      debugStringConvertibleItem("textBreakStrategy", textBreakStrategy),
      debugStringConvertibleItem("adjustsFontSizeToFit", adjustsFontSizeToFit),
      debugStringConvertibleItem("minimumFontSize", minimumFontSize),
      debugStringConvertibleItem("maximumFontSize", maximumFontSize),
      debugStringConvertibleItem("includeFontPadding", includeFontPadding),
      debugStringConvertibleItem(
          "android_hyphenationFrequency", android_hyphenationFrequency)};
}
#endif

} // namespace facebook::react
