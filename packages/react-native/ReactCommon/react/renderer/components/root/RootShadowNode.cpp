/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include "RootShadowNode.h"

#include <cxxreact/SystraceSection.h>
#include <react/renderer/components/view/conversions.h>
#include <stack>

namespace facebook::react {

const char RootComponentName[] = "RootView";

bool RootShadowNode::layoutIfNeeded(
    std::vector<const LayoutableShadowNode*>* affectedNodes) {
  SystraceSection s("RootShadowNode::layout");

  if (getIsLayoutClean()) {
    return false;
  }

  ensureUnsealed();

  auto layoutContext = getConcreteProps().layoutContext;
  layoutContext.affectedNodes = affectedNodes;

  layoutTree(layoutContext, getConcreteProps().layoutConstraints);

  return true;
}

Transform RootShadowNode::getTransform() const {
  auto viewportOffset = getConcreteProps().layoutContext.viewportOffset;
  return Transform::Translate(viewportOffset.x, viewportOffset.y, 0);
}

RootShadowNode::Unshared RootShadowNode::clone(
    const PropsParserContext& propsParserContext,
    const LayoutConstraints& layoutConstraints,
    const LayoutContext& layoutContext) const {
  auto props = std::make_shared<const RootProps>(
      propsParserContext, getConcreteProps(), layoutConstraints, layoutContext);
  auto newRootShadowNode = std::make_shared<RootShadowNode>(
      *this,
      ShadowNodeFragment{
          /* .props = */ props,
      });

  if (layoutConstraints != getConcreteProps().layoutConstraints) {
    newRootShadowNode->dirtyLayout();
  }

  if (layoutContext.fontSizeMultiplier !=
      getConcreteProps().layoutContext.fontSizeMultiplier) {
    std::stack<yoga::Node*> stack;
    stack.push(&newRootShadowNode->yogaNode_);
    while (!stack.empty()) {
      auto yogaNode = stack.top();
      stack.pop();
      if (yogaNode->getNodeType() == facebook::yoga::NodeType::Text) {
        yogaNode->markDirtyAndPropagate();
      }
      for (auto child : yogaNode->getChildren()) {
        stack.push(child);
      }
    }
  }

  return newRootShadowNode;
}

} // namespace facebook::react
