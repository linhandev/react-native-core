# React Native Core

Fork of react-native https://github.com/facebook/react-native. This repository adapts the React Native codebase to make it more extensible for out-of-tree platforms, particularly [React Native OpenHarmony](https://gitee.com/openharmony-sig/ohos_react_native/).

Ideally, changes made in this repository will eventually be integrated into the upstream repository.

## What Are the Main Differences Compared to the Upstream Repository?

### `packages/react-native/ReactCommon`

Various files in ReactCommon that decouple them from Android/iOS platform.

### `react-native/Libraries`

This directory includes new 'delegate' files intended to be overridden by other platforms. Some original RN files were modified to call delegate methods. 