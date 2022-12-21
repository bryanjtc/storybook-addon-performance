// ../../node_modules/@storybook/components/dist/chunk-BVZGY62N.mjs
function _setPrototypeOf(o, p) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o2, p2) {
    return o2.__proto__ = p2, o2;
  }, _setPrototypeOf(o, p);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype), subClass.prototype.constructor = subClass, _setPrototypeOf(subClass, superClass);
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getWindow(node) {
  if (node == null)
    return window;
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument && ownerDocument.defaultView || window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot > "u")
    return false;
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {}, attributes = state.attributes[name] || {}, element = state.elements[name];
    !isHTMLElement(element) || !getNodeName(element) || (Object.assign(element.style, style), Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      value === false ? element.removeAttribute(name2) : element.setAttribute(name2, value === true ? "" : value);
    }));
  });
}
function effect(_ref2) {
  var state = _ref2.state, initialStyles = { popper: { position: state.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(state.elements.popper.style, initialStyles.popper), state.styles = initialStyles, state.elements.arrow && Object.assign(state.elements.arrow.style, initialStyles.arrow), function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name], attributes = state.attributes[name] || {}, styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]), style = styleProperties.reduce(function(style2, property) {
        return style2[property] = "", style2;
      }, {});
      !isHTMLElement(element) || !getNodeName(element) || (Object.assign(element.style, style), Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      }));
    });
  };
}
var applyStyles_default = { name: "applyStyles", enabled: true, phase: "write", fn: applyStyles, effect, requires: ["computeStyles"] };
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  return uaData != null && uaData.brands ? uaData.brands.map(function(item) {
    return item.brand + "/" + item.version;
  }).join(" ") : navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  includeScale === void 0 && (includeScale = false), isFixedStrategy === void 0 && (isFixedStrategy = false);
  var clientRect = element.getBoundingClientRect(), scaleX = 1, scaleY = 1;
  includeScale && isHTMLElement(element) && (scaleX = element.offsetWidth > 0 && round(clientRect.width) / element.offsetWidth || 1, scaleY = element.offsetHeight > 0 && round(clientRect.height) / element.offsetHeight || 1);
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport, addVisualOffsets = !isLayoutViewport() && isFixedStrategy, x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX, y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY, width = clientRect.width / scaleX, height = clientRect.height / scaleY;
  return { width, height, top: y, right: x + width, bottom: y + height, left: x, x, y };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element), width = element.offsetWidth, height = element.offsetHeight;
  return Math.abs(clientRect.width - width) <= 1 && (width = clientRect.width), Math.abs(clientRect.height - height) <= 1 && (height = clientRect.height), { x: element.offsetLeft, y: element.offsetTop, width, height };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child))
    return true;
  if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next))
        return true;
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
function getParentNode(element) {
  return getNodeName(element) === "html" ? element : element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
function getTrueOffsetParent(element) {
  return !isHTMLElement(element) || getComputedStyle(element).position === "fixed" ? null : element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString()), isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle(element);
    if (elementCss.position === "fixed")
      return null;
  }
  var currentNode = getParentNode(element);
  for (isShadowRoot(currentNode) && (currentNode = currentNode.host); isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0; ) {
    var css = getComputedStyle(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none")
      return currentNode;
    currentNode = currentNode.parentNode;
  }
  return null;
}
function getOffsetParent(element) {
  for (var window2 = getWindow(element), offsetParent = getTrueOffsetParent(element); offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static"; )
    offsetParent = getTrueOffsetParent(offsetParent);
  return offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static") ? window2 : offsetParent || getContainingBlock(element) || window2;
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function within(min2, value, max2) {
  return max(min2, min(value, max2));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function getFreshSideObject() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    return hashMap[key] = value, hashMap;
  }, {});
}
var toPaddingObject = function(padding, state) {
  return padding = typeof padding == "function" ? padding(Object.assign({}, state.rects, { placement: state.placement })) : padding, mergePaddingObject(typeof padding != "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
  var _state$modifiersData$, state = _ref.state, name = _ref.name, options = _ref.options, arrowElement = state.elements.arrow, popperOffsets2 = state.modifiersData.popperOffsets, basePlacement = getBasePlacement(state.placement), axis = getMainAxisFromPlacement(basePlacement), isVertical = [left, right].indexOf(basePlacement) >= 0, len = isVertical ? "height" : "width";
  if (!(!arrowElement || !popperOffsets2)) {
    var paddingObject = toPaddingObject(options.padding, state), arrowRect = getLayoutRect(arrowElement), minProp = axis === "y" ? top : left, maxProp = axis === "y" ? bottom : right, endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len], startDiff = popperOffsets2[axis] - state.rects.reference[axis], arrowOffsetParent = getOffsetParent(arrowElement), clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0, centerToReference = endDiff / 2 - startDiff / 2, min2 = paddingObject[minProp], max2 = clientSize - arrowRect[len] - paddingObject[maxProp], center = clientSize / 2 - arrowRect[len] / 2 + centerToReference, offset2 = within(min2, center, max2), axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
  }
}
function effect2(_ref2) {
  var state = _ref2.state, options = _ref2.options, _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
  if (arrowElement != null && !(typeof arrowElement == "string" && (arrowElement = state.elements.popper.querySelector(arrowElement), !arrowElement))) {
    if (isHTMLElement(arrowElement) || console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" ")), !contains(state.elements.popper, arrowElement)) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
      return;
    }
    state.elements.arrow = arrowElement;
  }
}
var arrow_default = { name: "arrow", enabled: true, phase: "main", fn: arrow, effect: effect2, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function getVariation(placement) {
  return placement.split("-")[1];
}
var unsetSides = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function roundOffsetsByDPR(_ref) {
  var x = _ref.x, y = _ref.y, win = window, dpr = win.devicePixelRatio || 1;
  return { x: round(x * dpr) / dpr || 0, y: round(y * dpr) / dpr || 0 };
}
function mapToStyles(_ref2) {
  var _Object$assign2, popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed, _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y, _ref3 = typeof roundOffsets == "function" ? roundOffsets({ x, y }) : { x, y };
  x = _ref3.x, y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x"), hasY = offsets.hasOwnProperty("y"), sideX = left, sideY = top, win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2), heightProp = "clientHeight", widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2) && (offsetParent = getDocumentElement(popper2), getComputedStyle(offsetParent).position !== "static" && position === "absolute" && (heightProp = "scrollHeight", widthProp = "scrollWidth")), offsetParent = offsetParent, placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
      y -= offsetY - popperRect.height, y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
      x -= offsetX - popperRect.width, x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({ position }, adaptive && unsetSides), _ref4 = roundOffsets === true ? roundOffsetsByDPR({ x, y }) : { x, y };
  if (x = _ref4.x, y = _ref4.y, gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options, _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  if (true) {
    var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || "";
    adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
      return transitionProperty.indexOf(property) >= 0;
    }) && console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', `

`, 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", `

`, "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
  }
  var commonStyles = { placement: getBasePlacement(state.placement), variation: getVariation(state.placement), popper: state.elements.popper, popperRect: state.rects.popper, gpuAcceleration, isFixed: state.options.strategy === "fixed" };
  state.modifiersData.popperOffsets != null && (state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, { offsets: state.modifiersData.popperOffsets, position: state.options.strategy, adaptive, roundOffsets })))), state.modifiersData.arrow != null && (state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, { offsets: state.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets })))), state.attributes.popper = Object.assign({}, state.attributes.popper, { "data-popper-placement": state.placement });
}
var computeStyles_default = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: computeStyles, data: {} };
var passive = { passive: true };
function effect3(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options, _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize, window2 = getWindow(state.elements.popper), scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  return scroll && scrollParents.forEach(function(scrollParent) {
    scrollParent.addEventListener("scroll", instance.update, passive);
  }), resize && window2.addEventListener("resize", instance.update, passive), function() {
    scroll && scrollParents.forEach(function(scrollParent) {
      scrollParent.removeEventListener("scroll", instance.update, passive);
    }), resize && window2.removeEventListener("resize", instance.update, passive);
  };
}
var eventListeners_default = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
}, effect: effect3, data: {} };
var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
var hash2 = { start: "end", end: "start" };
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash2[matched];
  });
}
function getWindowScroll(node) {
  var win = getWindow(node), scrollLeft = win.pageXOffset, scrollTop = win.pageYOffset;
  return { scrollLeft, scrollTop };
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getViewportRect(element, strategy) {
  var win = getWindow(element), html = getDocumentElement(element), visualViewport = win.visualViewport, width = html.clientWidth, height = html.clientHeight, x = 0, y = 0;
  if (visualViewport) {
    width = visualViewport.width, height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    (layoutViewport || !layoutViewport && strategy === "fixed") && (x = visualViewport.offsetLeft, y = visualViewport.offsetTop);
  }
  return { width, height, x: x + getWindowScrollBarX(element), y };
}
function getDocumentRect(element) {
  var _element$ownerDocumen, html = getDocumentElement(element), winScroll = getWindowScroll(element), body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body, width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0), height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0), x = -winScroll.scrollLeft + getWindowScrollBarX(element), y = -winScroll.scrollTop;
  return getComputedStyle(body || html).direction === "rtl" && (x += max(html.clientWidth, body ? body.clientWidth : 0) - width), { width, height, x, y };
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function getScrollParent(node) {
  return ["html", "body", "#document"].indexOf(getNodeName(node)) >= 0 ? node.ownerDocument.body : isHTMLElement(node) && isScrollParent(node) ? node : getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  list === void 0 && (list = []);
  var scrollParent = getScrollParent(element), isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body), win = getWindow(scrollParent), target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent, updatedList = list.concat(target);
  return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, { left: rect.x, top: rect.y, right: rect.x + rect.width, bottom: rect.y + rect.height });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  return rect.top = rect.top + element.clientTop, rect.left = rect.left + element.clientLeft, rect.bottom = rect.top + element.clientHeight, rect.right = rect.left + element.clientWidth, rect.width = element.clientWidth, rect.height = element.clientHeight, rect.x = rect.left, rect.y = rect.top, rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element)), canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle(element).position) >= 0, clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  return isElement(clipperElement) ? clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  }) : [];
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary), clippingParents2 = [].concat(mainClippingParents, [rootBoundary]), firstClippingParent = clippingParents2[0], clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    return accRect.top = max(rect.top, accRect.top), accRect.right = min(rect.right, accRect.right), accRect.bottom = min(rect.bottom, accRect.bottom), accRect.left = max(rect.left, accRect.left), accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  return clippingRect.width = clippingRect.right - clippingRect.left, clippingRect.height = clippingRect.bottom - clippingRect.top, clippingRect.x = clippingRect.left, clippingRect.y = clippingRect.top, clippingRect;
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement, basePlacement = placement ? getBasePlacement(placement) : null, variation = placement ? getVariation(placement) : null, commonX = reference2.x + reference2.width / 2 - element.width / 2, commonY = reference2.y + reference2.height / 2 - element.height / 2, offsets;
  switch (basePlacement) {
    case top:
      offsets = { x: commonX, y: reference2.y - element.height };
      break;
    case bottom:
      offsets = { x: commonX, y: reference2.y + reference2.height };
      break;
    case right:
      offsets = { x: reference2.x + reference2.width, y: commonY };
      break;
    case left:
      offsets = { x: reference2.x - element.width, y: commonY };
      break;
    default:
      offsets = { x: reference2.x, y: reference2.y };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
      default:
    }
  }
  return offsets;
}
function detectOverflow(state, options) {
  options === void 0 && (options = {});
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding, paddingObject = mergePaddingObject(typeof padding != "number" ? padding : expandToHashMap(padding, basePlacements)), altContext = elementContext === popper ? reference : popper, popperRect = state.rects.popper, element = state.elements[altBoundary ? altContext : elementContext], clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy), referenceClientRect = getBoundingClientRect(state.elements.reference), popperOffsets2 = computeOffsets({ reference: referenceClientRect, element: popperRect, strategy: "absolute", placement }), popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2)), elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect, overflowOffsets = { top: clippingClientRect.top - elementClientRect.top + paddingObject.top, bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom, left: clippingClientRect.left - elementClientRect.left + paddingObject.left, right: elementClientRect.right - clippingClientRect.right + paddingObject.right }, offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset2 = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1, axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset2[axis] * multiply;
    });
  }
  return overflowOffsets;
}
function computeAutoPlacement(state, options) {
  options === void 0 && (options = {});
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP, variation = getVariation(placement), placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements, allowedPlacements = placements2.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  allowedPlacements.length === 0 && (allowedPlacements = placements2, console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" ")));
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    return acc[placement2] = detectOverflow(state, { placement: placement2, boundary, rootBoundary, padding })[getBasePlacement(placement2)], acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto)
    return [];
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (!state.modifiersData[name]._skip) {
    for (var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements, preferredPlacement = state.options.placement, basePlacement = getBasePlacement(preferredPlacement), isBasePlacement = basePlacement === preferredPlacement, fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement)), placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
      return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, { placement: placement2, boundary, rootBoundary, padding, flipVariations, allowedAutoPlacements }) : placement2);
    }, []), referenceRect = state.rects.reference, popperRect = state.rects.popper, checksMap = /* @__PURE__ */ new Map(), makeFallbackChecks = true, firstFittingPlacement = placements2[0], i = 0; i < placements2.length; i++) {
      var placement = placements2[i], _basePlacement = getBasePlacement(placement), isStartVariation = getVariation(placement) === start, isVertical = [top, bottom].indexOf(_basePlacement) >= 0, len = isVertical ? "width" : "height", overflow = detectOverflow(state, { placement, boundary, rootBoundary, altBoundary, padding }), mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
      referenceRect[len] > popperRect[len] && (mainVariationSide = getOppositePlacement(mainVariationSide));
      var altVariationSide = getOppositePlacement(mainVariationSide), checks = [];
      if (checkMainAxis && checks.push(overflow[_basePlacement] <= 0), checkAltAxis && checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0), checks.every(function(check) {
        return check;
      })) {
        firstFittingPlacement = placement, makeFallbackChecks = false;
        break;
      }
      checksMap.set(placement, checks);
    }
    if (makeFallbackChecks)
      for (var numberOfChecks = flipVariations ? 3 : 1, _loop = function(_i2) {
        var fittingPlacement = placements2.find(function(placement2) {
          var checks2 = checksMap.get(placement2);
          if (checks2)
            return checks2.slice(0, _i2).every(function(check) {
              return check;
            });
        });
        if (fittingPlacement)
          return firstFittingPlacement = fittingPlacement, "break";
      }, _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);
        if (_ret === "break")
          break;
      }
    state.placement !== firstFittingPlacement && (state.modifiersData[name]._skip = true, state.placement = firstFittingPlacement, state.reset = true);
  }
}
var flip_default = { name: "flip", enabled: true, phase: "main", fn: flip, requiresIfExists: ["offset"], data: { _skip: false } };
function getSideOffsets(overflow, rect, preventedOffsets) {
  return preventedOffsets === void 0 && (preventedOffsets = { x: 0, y: 0 }), { top: overflow.top - rect.height - preventedOffsets.y, right: overflow.right - rect.width + preventedOffsets.x, bottom: overflow.bottom - rect.height + preventedOffsets.y, left: overflow.left - rect.width - preventedOffsets.x };
}
function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function(side) {
    return overflow[side] >= 0;
  });
}
function hide(_ref) {
  var state = _ref.state, name = _ref.name, referenceRect = state.rects.reference, popperRect = state.rects.popper, preventedOffsets = state.modifiersData.preventOverflow, referenceOverflow = detectOverflow(state, { elementContext: "reference" }), popperAltOverflow = detectOverflow(state, { altBoundary: true }), referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect), popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets), isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets), hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = { referenceClippingOffsets, popperEscapeOffsets, isReferenceHidden, hasPopperEscaped }, state.attributes.popper = Object.assign({}, state.attributes.popper, { "data-popper-reference-hidden": isReferenceHidden, "data-popper-escaped": hasPopperEscaped });
}
var hide_default = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: hide };
function distanceAndSkiddingToXY(placement, rects, offset2) {
  var basePlacement = getBasePlacement(placement), invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1, _ref = typeof offset2 == "function" ? offset2(Object.assign({}, rects, { placement })) : offset2, skidding = _ref[0], distance = _ref[1];
  return skidding = skidding || 0, distance = (distance || 0) * invertDistance, [left, right].indexOf(basePlacement) >= 0 ? { x: distance, y: skidding } : { x: skidding, y: distance };
}
function offset(_ref2) {
  var state = _ref2.state, options = _ref2.options, name = _ref2.name, _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset, data = placements.reduce(function(acc, placement) {
    return acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2), acc;
  }, {}), _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
  state.modifiersData.popperOffsets != null && (state.modifiersData.popperOffsets.x += x, state.modifiersData.popperOffsets.y += y), state.modifiersData[name] = data;
}
var offset_default = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: offset };
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({ reference: state.rects.reference, element: state.rects.popper, strategy: "absolute", placement: state.placement });
}
var popperOffsets_default = { name: "popperOffsets", enabled: true, phase: "read", fn: popperOffsets, data: {} };
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name, _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset, overflow = detectOverflow(state, { boundary, rootBoundary, padding, altBoundary }), basePlacement = getBasePlacement(state.placement), variation = getVariation(state.placement), isBasePlacement = !variation, mainAxis = getMainAxisFromPlacement(basePlacement), altAxis = getAltAxis(mainAxis), popperOffsets2 = state.modifiersData.popperOffsets, referenceRect = state.rects.reference, popperRect = state.rects.popper, tetherOffsetValue = typeof tetherOffset == "function" ? tetherOffset(Object.assign({}, state.rects, { placement: state.placement })) : tetherOffset, normalizedTetherOffsetValue = typeof tetherOffsetValue == "number" ? { mainAxis: tetherOffsetValue, altAxis: tetherOffsetValue } : Object.assign({ mainAxis: 0, altAxis: 0 }, tetherOffsetValue), offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null, data = { x: 0, y: 0 };
  if (popperOffsets2) {
    if (checkMainAxis) {
      var _offsetModifierState$, mainSide = mainAxis === "y" ? top : left, altSide = mainAxis === "y" ? bottom : right, len = mainAxis === "y" ? "height" : "width", offset2 = popperOffsets2[mainAxis], min2 = offset2 + overflow[mainSide], max2 = offset2 - overflow[altSide], additive = tether ? -popperRect[len] / 2 : 0, minLen = variation === start ? referenceRect[len] : popperRect[len], maxLen = variation === start ? -popperRect[len] : -referenceRect[len], arrowElement = state.elements.arrow, arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : { width: 0, height: 0 }, arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject(), arrowPaddingMin = arrowPaddingObject[mainSide], arrowPaddingMax = arrowPaddingObject[altSide], arrowLen = within(0, referenceRect[len], arrowRect[len]), minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis, maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis, arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow), clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0, offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0, tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset, tetherMax = offset2 + maxOffset - offsetModifierValue, preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
      popperOffsets2[mainAxis] = preventedOffset, data[mainAxis] = preventedOffset - offset2;
    }
    if (checkAltAxis) {
      var _offsetModifierState$2, _mainSide = mainAxis === "x" ? top : left, _altSide = mainAxis === "x" ? bottom : right, _offset = popperOffsets2[altAxis], _len = altAxis === "y" ? "height" : "width", _min = _offset + overflow[_mainSide], _max = _offset - overflow[_altSide], isOriginSide = [top, left].indexOf(basePlacement) !== -1, _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0, _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis, _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max, _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
      popperOffsets2[altAxis] = _preventedOffset, data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
  }
}
var preventOverflow_default = { name: "preventOverflow", enabled: true, phase: "main", fn: preventOverflow, requiresIfExists: ["offset"] };
function getHTMLElementScroll(element) {
  return { scrollLeft: element.scrollLeft, scrollTop: element.scrollTop };
}
function getNodeScroll(node) {
  return node === getWindow(node) || !isHTMLElement(node) ? getWindowScroll(node) : getHTMLElementScroll(node);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect(), scaleX = round(rect.width) / element.offsetWidth || 1, scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  isFixed === void 0 && (isFixed = false);
  var isOffsetParentAnElement = isHTMLElement(offsetParent), offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent), documentElement = getDocumentElement(offsetParent), rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed), scroll = { scrollLeft: 0, scrollTop: 0 }, offsets = { x: 0, y: 0 };
  return (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) && ((getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) && (scroll = getNodeScroll(offsetParent)), isHTMLElement(offsetParent) ? (offsets = getBoundingClientRect(offsetParent, true), offsets.x += offsetParent.clientLeft, offsets.y += offsetParent.clientTop) : documentElement && (offsets.x = getWindowScrollBarX(documentElement))), { x: rect.left + scroll.scrollLeft - offsets.x, y: rect.top + scroll.scrollTop - offsets.y, width: rect.width, height: rect.height };
}
function order(modifiers) {
  var map = /* @__PURE__ */ new Map(), visited = /* @__PURE__ */ new Set(), result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        depModifier && sort(depModifier);
      }
    }), result.push(modifier);
  }
  return modifiers.forEach(function(modifier) {
    visited.has(modifier.name) || sort(modifier);
  }), result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    return pending || (pending = new Promise(function(resolve) {
      Promise.resolve().then(function() {
        pending = void 0, resolve(fn2());
      });
    })), pending;
  };
}
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)
    args[_key - 1] = arguments[_key];
  return [].concat(args).reduce(function(p, c) {
    return p.replace(/%s/, c);
  }, str);
}
var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
function validateModifiers(modifiers) {
  modifiers.forEach(function(modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function(key) {
      switch (key) {
        case "name":
          typeof modifier.name != "string" && console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
          break;
        case "enabled":
          typeof modifier.enabled != "boolean" && console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
          break;
        case "phase":
          modifierPhases.indexOf(modifier.phase) < 0 && console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
          break;
        case "fn":
          typeof modifier.fn != "function" && console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
          break;
        case "effect":
          modifier.effect != null && typeof modifier.effect != "function" && console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
          break;
        case "requires":
          modifier.requires != null && !Array.isArray(modifier.requires) && console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
          break;
        case "requiresIfExists":
          Array.isArray(modifier.requiresIfExists) || console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
          break;
        case "options":
        case "data":
          break;
        default:
          console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
            return '"' + s + '"';
          }).join(", ") + '; but "' + key + '" was provided.');
      }
      modifier.requires && modifier.requires.forEach(function(requirement) {
        modifiers.find(function(mod) {
          return mod.name === requirement;
        }) == null && console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
      });
    });
  });
}
function uniqueBy(arr, fn2) {
  var identifiers = /* @__PURE__ */ new Set();
  return arr.filter(function(item) {
    var identifier = fn2(item);
    if (!identifiers.has(identifier))
      return identifiers.add(identifier), true;
  });
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    return merged2[current.name] = existing ? Object.assign({}, existing, current, { options: Object.assign({}, existing.options, current.options), data: Object.assign({}, existing.data, current.data) }) : current, merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
var DEFAULT_OPTIONS = { placement: "bottom", modifiers: [], strategy: "absolute" };
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)
    args[_key] = arguments[_key];
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect == "function");
  });
}
function popperGenerator(generatorOptions) {
  generatorOptions === void 0 && (generatorOptions = {});
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function(reference2, popper2, options) {
    options === void 0 && (options = defaultOptions);
    var state = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions), modifiersData: {}, elements: { reference: reference2, popper: popper2 }, attributes: {}, styles: {} }, effectCleanupFns = [], isDestroyed = false, instance = { state, setOptions: function(setOptionsAction) {
      var options2 = typeof setOptionsAction == "function" ? setOptionsAction(state.options) : setOptionsAction;
      cleanupModifierEffects(), state.options = Object.assign({}, defaultOptions, state.options, options2), state.scrollParents = { reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [], popper: listScrollParents(popper2) };
      var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
      if (state.orderedModifiers = orderedModifiers.filter(function(m) {
        return m.enabled;
      }), true) {
        var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
          var name = _ref.name;
          return name;
        });
        if (validateModifiers(modifiers), getBasePlacement(state.options.placement) === auto) {
          var flipModifier = state.orderedModifiers.find(function(_ref2) {
            var name = _ref2.name;
            return name === "flip";
          });
          flipModifier || console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
        }
        var _getComputedStyle = getComputedStyle(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
        [marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
          return parseFloat(margin);
        }) && console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
      }
      return runModifierEffects(), instance.update();
    }, forceUpdate: function() {
      if (!isDestroyed) {
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          console.error(INVALID_ELEMENT_ERROR);
          return;
        }
        state.rects = { reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"), popper: getLayoutRect(popper3) }, state.reset = false, state.placement = state.options.placement, state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var __debug_loops__ = 0, index = 0; index < state.orderedModifiers.length; index++) {
          if (__debug_loops__ += 1, __debug_loops__ > 100) {
            console.error(INFINITE_LOOP_ERROR);
            break;
          }
          if (state.reset === true) {
            state.reset = false, index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          typeof fn2 == "function" && (state = fn2({ state, options: _options, name, instance }) || state);
        }
      }
    }, update: debounce(function() {
      return new Promise(function(resolve) {
        instance.forceUpdate(), resolve(state);
      });
    }), destroy: function() {
      cleanupModifierEffects(), isDestroyed = true;
    } };
    if (!areValidElements(reference2, popper2))
      return console.error(INVALID_ELEMENT_ERROR), instance;
    instance.setOptions(options).then(function(state2) {
      !isDestroyed && options.onFirstUpdate && options.onFirstUpdate(state2);
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref3) {
        var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect4 = _ref3.effect;
        if (typeof effect4 == "function") {
          var cleanupFn = effect4({ state, name, instance, options: options2 }), noopFn = function() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      }), effectCleanupFns = [];
    }
    return instance;
  };
}
var defaultModifiers = [eventListeners_default, popperOffsets_default, computeStyles_default, applyStyles_default, offset_default, flip_default, preventOverflow_default, arrow_default, hide_default];
var createPopper = popperGenerator({ defaultModifiers });

export {
  _setPrototypeOf,
  _inheritsLoose,
  auto,
  createPopper
};