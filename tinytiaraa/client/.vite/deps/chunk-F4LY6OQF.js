import {
  init_esm,
  useForkRef
} from "./chunk-5L7R4VHS.js";
import {
  _objectWithoutPropertiesLoose,
  init_objectWithoutPropertiesLoose
} from "./chunk-475QMDJW.js";
import {
  require_jsx_runtime
} from "./chunk-4H4SQ6Q4.js";
import {
  _extends,
  init_extends
} from "./chunk-XJDNAA4J.js";
import {
  clsx_default,
  init_clsx
} from "./chunk-5UPB2TXF.js";
import {
  require_react
} from "./chunk-PWUE5V7V.js";
import {
  __toESM
} from "./chunk-WGAPYIUP.js";

// node_modules/@mui/base/utils/isHostComponent.js
function isHostComponent(element) {
  return typeof element === "string";
}

// node_modules/@mui/base/utils/appendOwnerState.js
init_extends();
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}

// node_modules/@mui/base/utils/useSlotProps.js
init_extends();
init_objectWithoutPropertiesLoose();
init_esm();

// node_modules/@mui/base/utils/mergeSlotProps.js
init_extends();
init_clsx();

// node_modules/@mui/base/utils/extractEventHandlers.js
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// node_modules/@mui/base/utils/omitEventHandlers.js
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}

// node_modules/@mui/base/utils/mergeSlotProps.js
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx_default(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx_default(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}

// node_modules/@mui/base/utils/resolveComponentProps.js
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}

// node_modules/@mui/base/utils/useSlotProps.js
var _excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}

// node_modules/@mui/base/utils/areArraysEqual.js
function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return array1.length === array2.length && array1.every((value, index) => itemComparer(value, array2[index]));
}

// node_modules/@mui/base/utils/ClassNameConfigurator.js
var React = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var defaultContextValue = {
  disableDefaultClasses: false
};
var ClassNameConfiguratorContext = React.createContext(defaultContextValue);
if (true) {
  ClassNameConfiguratorContext.displayName = "ClassNameConfiguratorContext";
}
function useClassNamesOverride(generateUtilityClass) {
  const {
    disableDefaultClasses
  } = React.useContext(ClassNameConfiguratorContext);
  return (slot) => {
    if (disableDefaultClasses) {
      return "";
    }
    return generateUtilityClass(slot);
  };
}

// node_modules/@mui/base/utils/useRootElementName.js
var React2 = __toESM(require_react());
function useRootElementName(parameters) {
  const {
    rootElementName: rootElementNameProp = "",
    componentName
  } = parameters;
  const [rootElementName, setRootElementName] = React2.useState(rootElementNameProp.toUpperCase());
  if (true) {
    React2.useEffect(() => {
      if (rootElementNameProp && rootElementName !== rootElementNameProp.toUpperCase()) {
        console.error(`useRootElementName: the \`rootElementName\` prop of ${componentName ? `the ${componentName} component` : "a component"} expected the '${rootElementNameProp}' element, but a '${rootElementName.toLowerCase()}' was rendered instead`, "This may cause hydration issues in an SSR context, for example in a Next.js app");
      }
    }, [rootElementNameProp, rootElementName, componentName]);
  }
  const updateRootElementName = React2.useCallback((instance) => {
    var _instance$tagName;
    setRootElementName((_instance$tagName = instance == null ? void 0 : instance.tagName) != null ? _instance$tagName : "");
  }, []);
  return [rootElementName, updateRootElementName];
}

// node_modules/@mui/base/utils/prepareForSlot.js
init_extends();
init_objectWithoutPropertiesLoose();
var React3 = __toESM(require_react());

// node_modules/@mui/material/transitions/utils.js
var reflow = (node) => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === "object" ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}

export {
  isHostComponent,
  appendOwnerState,
  areArraysEqual,
  useClassNamesOverride,
  extractEventHandlers,
  resolveComponentProps,
  useRootElementName,
  mergeSlotProps,
  useSlotProps,
  reflow,
  getTransitionProps
};
//# sourceMappingURL=chunk-F4LY6OQF.js.map
