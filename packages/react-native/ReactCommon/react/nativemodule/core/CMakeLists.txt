# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

cmake_minimum_required(VERSION 3.13)
set(CMAKE_VERBOSE_MAKEFILE on)

add_compile_options(
        -fexceptions
        -frtti
        -std=c++20
        -Wall
        -Wpedantic
        -DLOG_TAG=\"ReactNative\")

# RNC_patch: BEGIN
set(react_nativemodule_core_platform_SRC "")
if(DEFINED REACT_NATIVE_PLATFORM)
    file(GLOB react_nativemodule_core_platform_SRC CONFIGURE_DEPENDS
        "platform/${REACT_NATIVE_PLATFORM}/ReactCommon/*.cpp")
endif()
# RNC_patch: END

file(GLOB react_nativemodule_core_SRC CONFIGURE_DEPENDS
        ReactCommon/*.cpp
        # platform/android/ReactCommon/*.cpp # RNC_patch
        )
add_library(react_nativemodule_core
        OBJECT
        ${react_nativemodule_core_SRC}
        ${react_nativemodule_core_platform_SRC}) # RNC_patch

target_include_directories(react_nativemodule_core
        PUBLIC
          ${CMAKE_CURRENT_SOURCE_DIR}
          # ${CMAKE_CURRENT_SOURCE_DIR}/platform/android/ # RNC_patch
        )

# RNC_patch: BEGIN
if(DEFINED REACT_NATIVE_PLATFORM)
    target_include_directories(react_nativemodule_core PUBLIC
        "${CMAKE_CURRENT_SOURCE_DIR}/platform/${REACT_NATIVE_PLATFORM}/")
endif()
# RNC_patch: END

target_link_libraries(react_nativemodule_core
        fbjni
        folly_runtime
        glog
        jsi
        react_bridging
        react_debug
        react_utils
        react_featureflags
        reactperflogger
        reactnativejni)
