import {
  require_react
} from "./chunk-PWUE5V7V.js";
import {
  __toESM
} from "./chunk-WGAPYIUP.js";

// node_modules/@paypal/react-paypal-js/dist/esm/react-paypal-js.js
var import_react = __toESM(require_react());
var SCRIPT_LOADING_STATE;
(function(SCRIPT_LOADING_STATE2) {
  SCRIPT_LOADING_STATE2["INITIAL"] = "initial";
  SCRIPT_LOADING_STATE2["PENDING"] = "pending";
  SCRIPT_LOADING_STATE2["REJECTED"] = "rejected";
  SCRIPT_LOADING_STATE2["RESOLVED"] = "resolved";
})(SCRIPT_LOADING_STATE || (SCRIPT_LOADING_STATE = {}));
var DISPATCH_ACTION;
(function(DISPATCH_ACTION2) {
  DISPATCH_ACTION2["LOADING_STATUS"] = "setLoadingStatus";
  DISPATCH_ACTION2["RESET_OPTIONS"] = "resetOptions";
  DISPATCH_ACTION2["SET_BRAINTREE_INSTANCE"] = "braintreeInstance";
})(DISPATCH_ACTION || (DISPATCH_ACTION = {}));
var PAYPAL_HOSTED_FIELDS_TYPES;
(function(PAYPAL_HOSTED_FIELDS_TYPES2) {
  PAYPAL_HOSTED_FIELDS_TYPES2["NUMBER"] = "number";
  PAYPAL_HOSTED_FIELDS_TYPES2["CVV"] = "cvv";
  PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_DATE"] = "expirationDate";
  PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_MONTH"] = "expirationMonth";
  PAYPAL_HOSTED_FIELDS_TYPES2["EXPIRATION_YEAR"] = "expirationYear";
  PAYPAL_HOSTED_FIELDS_TYPES2["POSTAL_CODE"] = "postalCode";
})(PAYPAL_HOSTED_FIELDS_TYPES || (PAYPAL_HOSTED_FIELDS_TYPES = {}));
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest$1(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var SCRIPT_ID = "data-react-paypal-script-id";
var SDK_SETTINGS = {
  DATA_CLIENT_TOKEN: "dataClientToken",
  DATA_JS_SDK_LIBRARY: "dataJsSdkLibrary",
  DATA_LIBRARY_VALUE: "react-paypal-js",
  DATA_NAMESPACE: "dataNamespace",
  DATA_SDK_INTEGRATION_SOURCE: "dataSdkIntegrationSource",
  DATA_USER_ID_TOKEN: "dataUserIdToken"
};
var LOAD_SCRIPT_ERROR = "Failed to load the PayPal JS SDK script.";
var EMPTY_BRAINTREE_AUTHORIZATION_ERROR_MESSAGE = "Invalid authorization data. Use dataClientToken or dataUserIdToken to authorize.";
var braintreeVersion = "3.117.0";
var BRAINTREE_SOURCE = "https://js.braintreegateway.com/web/".concat(braintreeVersion, "/js/client.min.js");
var BRAINTREE_PAYPAL_CHECKOUT_SOURCE = "https://js.braintreegateway.com/web/".concat(braintreeVersion, "/js/paypal-checkout.min.js");
var DEFAULT_PAYPAL_NAMESPACE = "paypal";
var DEFAULT_BRAINTREE_NAMESPACE = "braintree";
var HOSTED_FIELDS_CHILDREN_ERROR = "To use HostedFields you must use it with at least 3 children with types: [number, cvv, expirationDate] includes";
var HOSTED_FIELDS_DUPLICATE_CHILDREN_ERROR = "Cannot use duplicate HostedFields as children";
var SCRIPT_PROVIDER_REDUCER_ERROR = "usePayPalScriptReducer must be used within a PayPalScriptProvider";
var CARD_FIELDS_DUPLICATE_CHILDREN_ERROR = "Cannot use duplicate CardFields as children";
var CARD_FIELDS_CONTEXT_ERROR = "Individual CardFields must be rendered inside the PayPalCardFieldsProvider";
function getPayPalWindowNamespace$1(namespace) {
  if (namespace === void 0) {
    namespace = DEFAULT_PAYPAL_NAMESPACE;
  }
  return window[namespace];
}
function getBraintreeWindowNamespace(namespace) {
  if (namespace === void 0) {
    namespace = DEFAULT_BRAINTREE_NAMESPACE;
  }
  return window[namespace];
}
function hashStr(str) {
  var hash = "";
  for (var i = 0; i < str.length; i++) {
    var total = str[i].charCodeAt(0) * i;
    if (str[i + 1]) {
      total += str[i + 1].charCodeAt(0) * (i - 1);
    }
    hash += String.fromCharCode(97 + Math.abs(total) % 26);
  }
  return hash;
}
function generateErrorMessage(_a) {
  var reactComponentName = _a.reactComponentName, sdkComponentKey = _a.sdkComponentKey, _b = _a.sdkRequestedComponents, sdkRequestedComponents = _b === void 0 ? "" : _b, _c = _a.sdkDataNamespace, sdkDataNamespace = _c === void 0 ? DEFAULT_PAYPAL_NAMESPACE : _c;
  var requiredOptionCapitalized = sdkComponentKey.charAt(0).toUpperCase().concat(sdkComponentKey.substring(1));
  var errorMessage = "Unable to render <".concat(reactComponentName, " /> because window.").concat(sdkDataNamespace, ".").concat(requiredOptionCapitalized, " is undefined.");
  var requestedComponents = typeof sdkRequestedComponents === "string" ? sdkRequestedComponents : sdkRequestedComponents.join(",");
  if (!requestedComponents.includes(sdkComponentKey)) {
    var expectedComponents = [requestedComponents, sdkComponentKey].filter(Boolean).join();
    errorMessage += "\nTo fix the issue, add '".concat(sdkComponentKey, "' to the list of components passed to the parent PayPalScriptProvider:") + "\n`<PayPalScriptProvider options={{ components: '".concat(expectedComponents, "'}}>`.");
  }
  return errorMessage;
}
function getScriptID(options) {
  var _a = options, _b = SCRIPT_ID;
  _a[_b];
  var paypalScriptOptions = __rest$1(_a, [_b + ""]);
  return "react-paypal-js-".concat(hashStr(JSON.stringify(paypalScriptOptions)));
}
function destroySDKScript(reactPayPalScriptID) {
  var scriptNode = self.document.querySelector("script[".concat(SCRIPT_ID, '="').concat(reactPayPalScriptID, '"]'));
  if (scriptNode === null || scriptNode === void 0 ? void 0 : scriptNode.parentNode) {
    scriptNode.parentNode.removeChild(scriptNode);
  }
}
function scriptReducer(state, action) {
  var _a, _b;
  switch (action.type) {
    case DISPATCH_ACTION.LOADING_STATUS:
      if (typeof action.value === "object") {
        return __assign(__assign({}, state), {
          loadingStatus: action.value.state,
          loadingStatusErrorMessage: action.value.message
        });
      }
      return __assign(__assign({}, state), {
        loadingStatus: action.value
      });
    case DISPATCH_ACTION.RESET_OPTIONS:
      destroySDKScript(state.options[SCRIPT_ID]);
      return __assign(__assign({}, state), {
        loadingStatus: SCRIPT_LOADING_STATE.PENDING,
        options: __assign(__assign((_a = {}, _a[SDK_SETTINGS.DATA_SDK_INTEGRATION_SOURCE] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _a), action.value), (_b = {}, _b[SCRIPT_ID] = "".concat(getScriptID(action.value)), _b))
      });
    case DISPATCH_ACTION.SET_BRAINTREE_INSTANCE:
      return __assign(__assign({}, state), {
        braintreePayPalCheckoutInstance: action.value
      });
    default: {
      return state;
    }
  }
}
var ScriptContext = (0, import_react.createContext)(null);
function validateReducer(scriptContext) {
  if (typeof (scriptContext === null || scriptContext === void 0 ? void 0 : scriptContext.dispatch) === "function" && scriptContext.dispatch.length !== 0) {
    return scriptContext;
  }
  throw new Error(SCRIPT_PROVIDER_REDUCER_ERROR);
}
var validateBraintreeAuthorizationData = function(scriptContext) {
  var _a, _b;
  if (!((_a = scriptContext === null || scriptContext === void 0 ? void 0 : scriptContext.options) === null || _a === void 0 ? void 0 : _a[SDK_SETTINGS.DATA_CLIENT_TOKEN]) && !((_b = scriptContext === null || scriptContext === void 0 ? void 0 : scriptContext.options) === null || _b === void 0 ? void 0 : _b[SDK_SETTINGS.DATA_USER_ID_TOKEN])) {
    throw new Error(EMPTY_BRAINTREE_AUTHORIZATION_ERROR_MESSAGE);
  }
  return scriptContext;
};
function usePayPalScriptReducer() {
  var scriptContext = validateReducer((0, import_react.useContext)(ScriptContext));
  var derivedStatusContext = __assign(__assign({}, scriptContext), {
    isInitial: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.INITIAL,
    isPending: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.PENDING,
    isResolved: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.RESOLVED,
    isRejected: scriptContext.loadingStatus === SCRIPT_LOADING_STATE.REJECTED
  });
  return [derivedStatusContext, scriptContext.dispatch];
}
function useScriptProviderContext() {
  var scriptContext = validateBraintreeAuthorizationData(validateReducer((0, import_react.useContext)(ScriptContext)));
  return [scriptContext, scriptContext.dispatch];
}
var PayPalHostedFieldsContext = (0, import_react.createContext)({});
function usePayPalHostedFields() {
  return (0, import_react.useContext)(PayPalHostedFieldsContext);
}
function useProxyProps(props) {
  var proxyRef = (0, import_react.useRef)(new Proxy({}, {
    get: function(target, prop, receiver) {
      if (typeof target[prop] === "function") {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return target[prop].apply(target, args);
        };
      }
      return Reflect.get(target, prop, receiver);
    }
  }));
  proxyRef.current = Object.assign(proxyRef.current, props);
  return proxyRef.current;
}
var PayPalButtons = function(_a) {
  var _b;
  var _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, children = _a.children, _e = _a.forceReRender, forceReRender = _e === void 0 ? [] : _e, buttonProps = __rest$1(_a, ["className", "disabled", "children", "forceReRender"]);
  var isDisabledStyle = disabled ? {
    opacity: 0.38
  } : {};
  var classNames = "".concat(className, " ").concat(disabled ? "paypal-buttons-disabled" : "").trim();
  var buttonsContainerRef = (0, import_react.useRef)(null);
  var buttons = (0, import_react.useRef)(null);
  var proxyProps = useProxyProps(buttonProps);
  var _f = usePayPalScriptReducer()[0], isResolved = _f.isResolved, options = _f.options;
  var _g = (0, import_react.useState)(null), initActions = _g[0], setInitActions = _g[1];
  var _h = (0, import_react.useState)(true), isEligible = _h[0], setIsEligible = _h[1];
  var _j = (0, import_react.useState)(null), setErrorState = _j[1];
  function closeButtonsComponent() {
    if (buttons.current !== null) {
      buttons.current.close().catch(function() {
      });
    }
  }
  if ((_b = buttons.current) === null || _b === void 0 ? void 0 : _b.updateProps) {
    buttons.current.updateProps({
      message: buttonProps.message
    });
  }
  (0, import_react.useEffect)(function() {
    if (isResolved === false) {
      return closeButtonsComponent;
    }
    var paypalWindowNamespace = getPayPalWindowNamespace$1(options.dataNamespace);
    if (paypalWindowNamespace === void 0 || paypalWindowNamespace.Buttons === void 0) {
      setErrorState(function() {
        throw new Error(generateErrorMessage({
          reactComponentName: PayPalButtons.displayName,
          sdkComponentKey: "buttons",
          sdkRequestedComponents: options.components,
          sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
        }));
      });
      return closeButtonsComponent;
    }
    var decoratedOnInit = function(data, actions) {
      setInitActions(actions);
      if (typeof buttonProps.onInit === "function") {
        buttonProps.onInit(data, actions);
      }
    };
    try {
      buttons.current = paypalWindowNamespace.Buttons(__assign(__assign({}, proxyProps), {
        onInit: decoratedOnInit
      }));
    } catch (err) {
      return setErrorState(function() {
        throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(err));
      });
    }
    if (buttons.current.isEligible() === false) {
      setIsEligible(false);
      return closeButtonsComponent;
    }
    if (!buttonsContainerRef.current) {
      return closeButtonsComponent;
    }
    buttons.current.render(buttonsContainerRef.current).catch(function(err) {
      if (buttonsContainerRef.current === null || buttonsContainerRef.current.children.length === 0) {
        return;
      }
      setErrorState(function() {
        throw new Error("Failed to render <PayPalButtons /> component. ".concat(err));
      });
    });
    return closeButtonsComponent;
  }, __spreadArray(__spreadArray([isResolved], forceReRender, true), [buttonProps.fundingSource], false));
  (0, import_react.useEffect)(function() {
    if (initActions === null) {
      return;
    }
    if (disabled === true) {
      initActions.disable().catch(function() {
      });
    } else {
      initActions.enable().catch(function() {
      });
    }
  }, [disabled, initActions]);
  return import_react.default.createElement(import_react.default.Fragment, null, isEligible ? import_react.default.createElement("div", {
    ref: buttonsContainerRef,
    style: isDisabledStyle,
    className: classNames
  }) : children);
};
PayPalButtons.displayName = "PayPalButtons";
function __rest(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function findScript(url, attributes) {
  var currentScript = document.querySelector('script[src="'.concat(url, '"]'));
  if (currentScript === null)
    return null;
  var nextScript = createScriptElement(url, attributes);
  var currentScriptClone = currentScript.cloneNode();
  delete currentScriptClone.dataset.uidAuto;
  if (Object.keys(currentScriptClone.dataset).length !== Object.keys(nextScript.dataset).length) {
    return null;
  }
  var isExactMatch = true;
  Object.keys(currentScriptClone.dataset).forEach(function(key) {
    if (currentScriptClone.dataset[key] !== nextScript.dataset[key]) {
      isExactMatch = false;
    }
  });
  return isExactMatch ? currentScript : null;
}
function insertScriptElement(_a) {
  var url = _a.url, attributes = _a.attributes, onSuccess = _a.onSuccess, onError = _a.onError;
  var newScript = createScriptElement(url, attributes);
  newScript.onerror = onError;
  newScript.onload = onSuccess;
  document.head.insertBefore(newScript, document.head.firstElementChild);
}
function processOptions(_a) {
  var customSdkBaseUrl = _a.sdkBaseUrl, environment = _a.environment, options = __rest(_a, ["sdkBaseUrl", "environment"]);
  var sdkBaseUrl = customSdkBaseUrl || processSdkBaseUrl(environment);
  var optionsWithStringIndex = options;
  var _b = Object.keys(optionsWithStringIndex).filter(function(key) {
    return typeof optionsWithStringIndex[key] !== "undefined" && optionsWithStringIndex[key] !== null && optionsWithStringIndex[key] !== "";
  }).reduce(function(accumulator, key) {
    var value = optionsWithStringIndex[key].toString();
    key = camelCaseToKebabCase(key);
    if (key.substring(0, 4) === "data" || key === "crossorigin") {
      accumulator.attributes[key] = value;
    } else {
      accumulator.queryParams[key] = value;
    }
    return accumulator;
  }, {
    queryParams: {},
    attributes: {}
  }), queryParams = _b.queryParams, attributes = _b.attributes;
  if (queryParams["merchant-id"] && queryParams["merchant-id"].indexOf(",") !== -1) {
    attributes["data-merchant-id"] = queryParams["merchant-id"];
    queryParams["merchant-id"] = "*";
  }
  return {
    url: "".concat(sdkBaseUrl, "?").concat(objectToQueryString(queryParams)),
    attributes
  };
}
function camelCaseToKebabCase(str) {
  var replacer = function(match, indexOfMatch) {
    return (indexOfMatch ? "-" : "") + match.toLowerCase();
  };
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, replacer);
}
function objectToQueryString(params) {
  var queryString = "";
  Object.keys(params).forEach(function(key) {
    if (queryString.length !== 0)
      queryString += "&";
    queryString += key + "=" + params[key];
  });
  return queryString;
}
function processSdkBaseUrl(environment) {
  return environment === "sandbox" ? "https://www.sandbox.paypal.com/sdk/js" : "https://www.paypal.com/sdk/js";
}
function createScriptElement(url, attributes) {
  if (attributes === void 0) {
    attributes = {};
  }
  var newScript = document.createElement("script");
  newScript.src = url;
  Object.keys(attributes).forEach(function(key) {
    newScript.setAttribute(key, attributes[key]);
    if (key === "data-csp-nonce") {
      newScript.setAttribute("nonce", attributes["data-csp-nonce"]);
    }
  });
  return newScript;
}
function loadScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  if (typeof document === "undefined")
    return PromisePonyfill.resolve(null);
  var _a = processOptions(options), url = _a.url, attributes = _a.attributes;
  var namespace = attributes["data-namespace"] || "paypal";
  var existingWindowNamespace = getPayPalWindowNamespace(namespace);
  if (!attributes["data-js-sdk-library"]) {
    attributes["data-js-sdk-library"] = "paypal-js";
  }
  if (findScript(url, attributes) && existingWindowNamespace) {
    return PromisePonyfill.resolve(existingWindowNamespace);
  }
  return loadCustomScript({
    url,
    attributes
  }, PromisePonyfill).then(function() {
    var newWindowNamespace = getPayPalWindowNamespace(namespace);
    if (newWindowNamespace) {
      return newWindowNamespace;
    }
    throw new Error("The window.".concat(namespace, " global variable is not available."));
  });
}
function loadCustomScript(options, PromisePonyfill) {
  if (PromisePonyfill === void 0) {
    PromisePonyfill = Promise;
  }
  validateArguments(options, PromisePonyfill);
  var url = options.url, attributes = options.attributes;
  if (typeof url !== "string" || url.length === 0) {
    throw new Error("Invalid url.");
  }
  if (typeof attributes !== "undefined" && typeof attributes !== "object") {
    throw new Error("Expected attributes to be an object.");
  }
  return new PromisePonyfill(function(resolve, reject) {
    if (typeof document === "undefined")
      return resolve();
    insertScriptElement({
      url,
      attributes,
      onSuccess: function() {
        return resolve();
      },
      onError: function() {
        var defaultError = new Error('The script "'.concat(url, '" failed to load. Check the HTTP status code and response body in DevTools to learn more.'));
        return reject(defaultError);
      }
    });
  });
}
function getPayPalWindowNamespace(namespace) {
  return window[namespace];
}
function validateArguments(options, PromisePonyfill) {
  if (typeof options !== "object" || options === null) {
    throw new Error("Expected an options object.");
  }
  var environment = options.environment;
  if (environment && environment !== "production" && environment !== "sandbox") {
    throw new Error('The `environment` option must be either "production" or "sandbox".');
  }
  if (typeof PromisePonyfill !== "undefined" && typeof PromisePonyfill !== "function") {
    throw new Error("Expected PromisePonyfill to be a function.");
  }
}
var isValidBraintreeNamespace = function(braintreeSource) {
  var _a, _b;
  if (typeof ((_a = braintreeSource === null || braintreeSource === void 0 ? void 0 : braintreeSource.client) === null || _a === void 0 ? void 0 : _a.create) !== "function" && typeof ((_b = braintreeSource === null || braintreeSource === void 0 ? void 0 : braintreeSource.paypalCheckout) === null || _b === void 0 ? void 0 : _b.create) !== "function") {
    throw new Error("The braintreeNamespace property is not a valid BraintreeNamespace type.");
  }
  return true;
};
var decorateActions = function(buttonProps, payPalCheckoutInstance) {
  var createOrderRef = buttonProps.createOrder;
  var createBillingAgreementRef = buttonProps.createBillingAgreement;
  var onApproveRef = buttonProps.onApprove;
  if (typeof createOrderRef === "function") {
    buttonProps.createOrder = function(data, actions) {
      return createOrderRef(data, __assign(__assign({}, actions), {
        braintree: payPalCheckoutInstance
      }));
    };
  }
  if (typeof createBillingAgreementRef === "function") {
    buttonProps.createBillingAgreement = function(data, actions) {
      return createBillingAgreementRef(data, __assign(__assign({}, actions), {
        braintree: payPalCheckoutInstance
      }));
    };
  }
  if (typeof onApproveRef === "function") {
    buttonProps.onApprove = function(data, actions) {
      return onApproveRef(data, __assign(__assign({}, actions), {
        braintree: payPalCheckoutInstance
      }));
    };
  }
  return __assign({}, buttonProps);
};
var getBraintreeNamespace = function(braintreeSource) {
  if (braintreeSource && isValidBraintreeNamespace(braintreeSource)) {
    return Promise.resolve(braintreeSource);
  }
  return Promise.all([loadCustomScript({
    url: BRAINTREE_SOURCE
  }), loadCustomScript({
    url: BRAINTREE_PAYPAL_CHECKOUT_SOURCE
  })]).then(function() {
    return getBraintreeWindowNamespace();
  });
};
var BraintreePayPalButtons = function(_a) {
  var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, children = _a.children, _d = _a.forceReRender, forceReRender = _d === void 0 ? [] : _d, braintreeNamespace = _a.braintreeNamespace, merchantAccountId = _a.merchantAccountId, buttonProps = __rest$1(_a, ["className", "disabled", "children", "forceReRender", "braintreeNamespace", "merchantAccountId"]);
  var _e = (0, import_react.useState)(null), setErrorState = _e[1];
  var _f = useScriptProviderContext(), providerContext = _f[0], dispatch = _f[1];
  (0, import_react.useEffect)(function() {
    getBraintreeNamespace(braintreeNamespace).then(function(braintree) {
      var clientTokenizationKey = providerContext.options[SDK_SETTINGS.DATA_USER_ID_TOKEN];
      var clientToken = providerContext.options[SDK_SETTINGS.DATA_CLIENT_TOKEN];
      return braintree.client.create({
        authorization: clientTokenizationKey || clientToken
      }).then(function(clientInstance) {
        var merchantProp = merchantAccountId ? {
          merchantAccountId
        } : {};
        return braintree.paypalCheckout.create(__assign(__assign({}, merchantProp), {
          client: clientInstance
        }));
      }).then(function(paypalCheckoutInstance) {
        dispatch({
          type: DISPATCH_ACTION.SET_BRAINTREE_INSTANCE,
          value: paypalCheckoutInstance
        });
      });
    }).catch(function(err) {
      setErrorState(function() {
        throw new Error("".concat(LOAD_SCRIPT_ERROR, " ").concat(err));
      });
    });
  }, [providerContext.options]);
  return import_react.default.createElement(import_react.default.Fragment, null, providerContext.braintreePayPalCheckoutInstance && import_react.default.createElement(PayPalButtons, __assign({
    className,
    disabled,
    forceReRender
  }, decorateActions(buttonProps, providerContext.braintreePayPalCheckoutInstance)), children));
};
var PayPalMarks = function(_a) {
  var _b = _a.className, className = _b === void 0 ? "" : _b, children = _a.children, markProps = __rest$1(_a, ["className", "children"]);
  var _c = usePayPalScriptReducer()[0], isResolved = _c.isResolved, options = _c.options;
  var markContainerRef = (0, import_react.useRef)(null);
  var _d = (0, import_react.useState)(true), isEligible = _d[0], setIsEligible = _d[1];
  var _e = (0, import_react.useState)(null), setErrorState = _e[1];
  var renderPayPalMark = function(mark) {
    var current = markContainerRef.current;
    if (!current || !mark.isEligible()) {
      return setIsEligible(false);
    }
    if (current.firstChild) {
      current.removeChild(current.firstChild);
    }
    mark.render(current).catch(function(err) {
      if (current === null || current.children.length === 0) {
        return;
      }
      setErrorState(function() {
        throw new Error("Failed to render <PayPalMarks /> component. ".concat(err));
      });
    });
  };
  (0, import_react.useEffect)(function() {
    if (isResolved === false) {
      return;
    }
    var paypalWindowNamespace = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE]);
    if (paypalWindowNamespace === void 0 || paypalWindowNamespace.Marks === void 0) {
      return setErrorState(function() {
        throw new Error(generateErrorMessage({
          reactComponentName: PayPalMarks.displayName,
          sdkComponentKey: "marks",
          sdkRequestedComponents: options.components,
          sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
        }));
      });
    }
    renderPayPalMark(paypalWindowNamespace.Marks(__assign({}, markProps)));
  }, [isResolved, markProps.fundingSource]);
  return import_react.default.createElement(import_react.default.Fragment, null, isEligible ? import_react.default.createElement("div", {
    ref: markContainerRef,
    className
  }) : children);
};
PayPalMarks.displayName = "PayPalMarks";
var PayPalMessages = function(_a) {
  var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.forceReRender, forceReRender = _c === void 0 ? [] : _c, messageProps = __rest$1(_a, ["className", "forceReRender"]);
  var _d = usePayPalScriptReducer()[0], isResolved = _d.isResolved, options = _d.options;
  var messagesContainerRef = (0, import_react.useRef)(null);
  var messages = (0, import_react.useRef)(null);
  var _e = (0, import_react.useState)(null), setErrorState = _e[1];
  (0, import_react.useEffect)(function() {
    if (isResolved === false) {
      return;
    }
    var paypalWindowNamespace = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE]);
    if (paypalWindowNamespace === void 0 || paypalWindowNamespace.Messages === void 0) {
      return setErrorState(function() {
        throw new Error(generateErrorMessage({
          reactComponentName: PayPalMessages.displayName,
          sdkComponentKey: "messages",
          sdkRequestedComponents: options.components,
          sdkDataNamespace: options[SDK_SETTINGS.DATA_NAMESPACE]
        }));
      });
    }
    messages.current = paypalWindowNamespace.Messages(__assign({}, messageProps));
    messages.current.render(messagesContainerRef.current).catch(function(err) {
      if (messagesContainerRef.current === null || messagesContainerRef.current.children.length === 0) {
        return;
      }
      setErrorState(function() {
        throw new Error("Failed to render <PayPalMessages /> component. ".concat(err));
      });
    });
  }, __spreadArray([isResolved], forceReRender, true));
  return import_react.default.createElement("div", {
    ref: messagesContainerRef,
    className
  });
};
PayPalMessages.displayName = "PayPalMessages";
var PayPalScriptProvider = function(_a) {
  var _b;
  var _c = _a.options, options = _c === void 0 ? {
    clientId: "test"
  } : _c, children = _a.children, _d = _a.deferLoading, deferLoading = _d === void 0 ? false : _d;
  var _e = (0, import_react.useReducer)(scriptReducer, {
    options: __assign(__assign({}, options), (_b = {}, _b[SDK_SETTINGS.DATA_JS_SDK_LIBRARY] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _b[SDK_SETTINGS.DATA_SDK_INTEGRATION_SOURCE] = SDK_SETTINGS.DATA_LIBRARY_VALUE, _b[SCRIPT_ID] = "".concat(getScriptID(options)), _b)),
    loadingStatus: deferLoading ? SCRIPT_LOADING_STATE.INITIAL : SCRIPT_LOADING_STATE.PENDING
  }), state = _e[0], dispatch = _e[1];
  (0, import_react.useEffect)(function() {
    if (deferLoading === false && state.loadingStatus === SCRIPT_LOADING_STATE.INITIAL) {
      return dispatch({
        type: DISPATCH_ACTION.LOADING_STATUS,
        value: SCRIPT_LOADING_STATE.PENDING
      });
    }
    if (state.loadingStatus !== SCRIPT_LOADING_STATE.PENDING) {
      return;
    }
    var isSubscribed = true;
    loadScript(state.options).then(function() {
      if (isSubscribed) {
        dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: SCRIPT_LOADING_STATE.RESOLVED
        });
      }
    }).catch(function(err) {
      console.error("".concat(LOAD_SCRIPT_ERROR, " ").concat(err));
      if (isSubscribed) {
        dispatch({
          type: DISPATCH_ACTION.LOADING_STATUS,
          value: {
            state: SCRIPT_LOADING_STATE.REJECTED,
            message: String(err)
          }
        });
      }
    });
    return function() {
      isSubscribed = false;
    };
  }, [state.options, deferLoading, state.loadingStatus]);
  return import_react.default.createElement(ScriptContext.Provider, {
    value: __assign(__assign({}, state), {
      dispatch
    })
  }, children);
};
var useHostedFieldsRegister = function(initialValue) {
  if (initialValue === void 0) {
    initialValue = {};
  }
  var registeredFields = (0, import_react.useRef)(initialValue);
  var registerHostedField = function(component) {
    registeredFields.current = __assign(__assign({}, registeredFields.current), component);
  };
  return [registeredFields, registerHostedField];
};
var generateMissingHostedFieldsError = function(_a) {
  var _b = _a.components, components = _b === void 0 ? "" : _b, _c = SDK_SETTINGS.DATA_NAMESPACE, _d = _a[_c], dataNamespace = _d === void 0 ? DEFAULT_PAYPAL_NAMESPACE : _d;
  var expectedComponents = components ? "".concat(components, ",hosted-fields") : "hosted-fields";
  var errorMessage = "Unable to render <PayPalHostedFieldsProvider /> because window.".concat(dataNamespace, ".HostedFields is undefined.");
  if (!components.includes("hosted-fields")) {
    errorMessage += "\nTo fix the issue, add 'hosted-fields' to the list of components passed to the parent PayPalScriptProvider: <PayPalScriptProvider options={{ components: '".concat(expectedComponents, "'}}>");
  }
  return errorMessage;
};
var validateExpirationDate = function(registerTypes) {
  return !registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.EXPIRATION_DATE) && !registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.EXPIRATION_MONTH) && !registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.EXPIRATION_YEAR);
};
var hasDefaultChildren = function(registerTypes) {
  if (!registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.NUMBER) || !registerTypes.includes(PAYPAL_HOSTED_FIELDS_TYPES.CVV) || validateExpirationDate(registerTypes)) {
    throw new Error(HOSTED_FIELDS_CHILDREN_ERROR);
  }
};
var noDuplicateChildren = function(registerTypes) {
  if (registerTypes.length !== new Set(registerTypes).size) {
    throw new Error(HOSTED_FIELDS_DUPLICATE_CHILDREN_ERROR);
  }
};
var validateHostedFieldChildren = function(registeredFields) {
  hasDefaultChildren(registeredFields);
  noDuplicateChildren(registeredFields);
};
var PayPalHostedFieldsProvider = function(_a) {
  var styles = _a.styles, createOrder = _a.createOrder, notEligibleError = _a.notEligibleError, children = _a.children, installments = _a.installments;
  var _b = useScriptProviderContext()[0], options = _b.options, loadingStatus = _b.loadingStatus;
  var _c = (0, import_react.useState)(true), isEligible = _c[0], setIsEligible = _c[1];
  var _d = (0, import_react.useState)(), cardFields = _d[0], setCardFields = _d[1];
  var _e = (0, import_react.useState)(null), setErrorState = _e[1];
  var hostedFieldsContainerRef = (0, import_react.useRef)(null);
  var hostedFields = (0, import_react.useRef)();
  var _f = useHostedFieldsRegister(), registeredFields = _f[0], registerHostedField = _f[1];
  (0, import_react.useEffect)(function() {
    var _a2;
    validateHostedFieldChildren(Object.keys(registeredFields.current));
    if (!(loadingStatus === SCRIPT_LOADING_STATE.RESOLVED)) {
      return;
    }
    hostedFields.current = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE]).HostedFields;
    if (!hostedFields.current) {
      throw new Error(generateMissingHostedFieldsError((_a2 = {
        components: options.components
      }, _a2[SDK_SETTINGS.DATA_NAMESPACE] = options[SDK_SETTINGS.DATA_NAMESPACE], _a2)));
    }
    if (!hostedFields.current.isEligible()) {
      return setIsEligible(false);
    }
    if (cardFields) {
      cardFields.teardown();
    }
    hostedFields.current.render({
      // Call your server to set up the transaction
      createOrder,
      fields: registeredFields.current,
      installments,
      styles
    }).then(function(cardFieldsInstance) {
      if (hostedFieldsContainerRef.current) {
        setCardFields(cardFieldsInstance);
      }
    }).catch(function(err) {
      setErrorState(function() {
        throw new Error("Failed to render <PayPalHostedFieldsProvider /> component. ".concat(err));
      });
    });
  }, [loadingStatus, styles]);
  return import_react.default.createElement("div", {
    ref: hostedFieldsContainerRef
  }, isEligible ? import_react.default.createElement(PayPalHostedFieldsContext.Provider, {
    value: {
      cardFields,
      registerHostedField
    }
  }, children) : notEligibleError);
};
var PayPalHostedField = function(_a) {
  var hostedFieldType = _a.hostedFieldType, options = _a.options, props = __rest$1(_a, ["hostedFieldType", "options"]);
  var hostedFieldContext = (0, import_react.useContext)(PayPalHostedFieldsContext);
  (0, import_react.useEffect)(function() {
    var _a2;
    if (!(hostedFieldContext === null || hostedFieldContext === void 0 ? void 0 : hostedFieldContext.registerHostedField)) {
      throw new Error("The HostedField cannot be register in the PayPalHostedFieldsProvider parent component");
    }
    hostedFieldContext.registerHostedField((_a2 = {}, _a2[hostedFieldType] = {
      selector: options.selector,
      placeholder: options.placeholder,
      type: options.type,
      formatInput: options.formatInput,
      maskInput: options.maskInput,
      select: options.select,
      maxlength: options.maxlength,
      minlength: options.minlength,
      prefill: options.prefill,
      rejectUnsupportedCards: options.rejectUnsupportedCards
    }, _a2));
  }, []);
  return import_react.default.createElement("div", __assign({}, props));
};
var generateMissingCardFieldsError = function(_a) {
  var _b = _a.components, components = _b === void 0 ? "" : _b, _c = SDK_SETTINGS.DATA_NAMESPACE, _d = _a[_c], dataNamespace = _d === void 0 ? DEFAULT_PAYPAL_NAMESPACE : _d;
  var expectedComponents = components ? "".concat(components, ",card-fields") : "card-fields";
  var errorMessage = "Unable to render <PayPalCardFieldsProvider /> because window.".concat(dataNamespace, ".CardFields is undefined.");
  if (!components.includes("card-fields")) {
    errorMessage += "\nTo fix the issue, add 'card-fields' to the list of components passed to the parent PayPalScriptProvider: <PayPalScriptProvider options={{ components: '".concat(expectedComponents, "'}}>");
  }
  return errorMessage;
};
function ignore() {
  return;
}
function hasChildren(container) {
  var _a;
  return !!((_a = container.current) === null || _a === void 0 ? void 0 : _a.children.length);
}
var PayPalCardFieldsContext = (0, import_react.createContext)({
  cardFieldsForm: null,
  fields: {},
  registerField: ignore,
  unregisterField: ignore
  // implementation is inside hook and passed through the provider
});
var usePayPalCardFields = function() {
  return (0, import_react.useContext)(PayPalCardFieldsContext);
};
var usePayPalCardFieldsRegistry = function() {
  var _a = (0, import_react.useState)(null), setError = _a[1];
  var registeredFields = (0, import_react.useRef)({});
  var registerField = function() {
    var props = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      props[_i] = arguments[_i];
    }
    var fieldName = props[0], options = props[1], cardFields = props[2];
    if (registeredFields.current[fieldName]) {
      setError(function() {
        throw new Error(CARD_FIELDS_DUPLICATE_CHILDREN_ERROR);
      });
    }
    registeredFields.current[fieldName] = cardFields === null || cardFields === void 0 ? void 0 : cardFields[fieldName](options);
    return registeredFields.current[fieldName];
  };
  var unregisterField = function(fieldName) {
    var field = registeredFields.current[fieldName];
    if (field) {
      field.close().catch(ignore);
      delete registeredFields.current[fieldName];
    }
  };
  return {
    fields: registeredFields.current,
    registerField,
    unregisterField
  };
};
var FullWidthContainer = function(_a) {
  var children = _a.children;
  return import_react.default.createElement("div", {
    style: {
      width: "100%"
    }
  }, children);
};
var PayPalCardFieldsProvider = function(_a) {
  var children = _a.children, props = __rest$1(_a, ["children"]);
  var _b = usePayPalScriptReducer()[0], isResolved = _b.isResolved, options = _b.options;
  var _c = usePayPalCardFieldsRegistry(), fields = _c.fields, registerField = _c.registerField, unregisterField = _c.unregisterField;
  var _d = (0, import_react.useState)(null), cardFieldsForm = _d[0], setCardFieldsForm = _d[1];
  var cardFieldsInstance = (0, import_react.useRef)(null);
  var _e = (0, import_react.useState)(false), isEligible = _e[0], setIsEligible = _e[1];
  var _f = (0, import_react.useState)(null), setError = _f[1];
  (0, import_react.useEffect)(function() {
    var _a2, _b2, _c2;
    if (!isResolved) {
      return;
    }
    try {
      cardFieldsInstance.current = (_c2 = (_b2 = (_a2 = getPayPalWindowNamespace$1(options[SDK_SETTINGS.DATA_NAMESPACE])).CardFields) === null || _b2 === void 0 ? void 0 : _b2.call(_a2, __assign({}, props))) !== null && _c2 !== void 0 ? _c2 : null;
    } catch (error) {
      setError(function() {
        throw new Error("Failed to render <PayPalCardFieldsProvider /> component. Failed to initialize:  ".concat(error));
      });
      return;
    }
    if (!cardFieldsInstance.current) {
      setError(function() {
        var _a3;
        throw new Error(generateMissingCardFieldsError((_a3 = {
          components: options.components
        }, _a3[SDK_SETTINGS.DATA_NAMESPACE] = options[SDK_SETTINGS.DATA_NAMESPACE], _a3)));
      });
      return;
    }
    setIsEligible(cardFieldsInstance.current.isEligible());
    setCardFieldsForm(cardFieldsInstance.current);
    return function() {
      setCardFieldsForm(null);
      cardFieldsInstance.current = null;
    };
  }, [isResolved]);
  if (!isEligible) {
    return import_react.default.createElement("div", null);
  }
  return import_react.default.createElement(FullWidthContainer, null, import_react.default.createElement(PayPalCardFieldsContext.Provider, {
    value: {
      cardFieldsForm,
      fields,
      registerField,
      unregisterField
    }
  }, children));
};
var PayPalCardField = function(_a) {
  var className = _a.className, fieldName = _a.fieldName, options = __rest$1(_a, ["className", "fieldName"]);
  var _b = usePayPalCardFields(), cardFieldsForm = _b.cardFieldsForm, registerField = _b.registerField, unregisterField = _b.unregisterField;
  var containerRef = (0, import_react.useRef)(null);
  var _c = (0, import_react.useState)(null), setError = _c[1];
  function closeComponent() {
    unregisterField(fieldName);
  }
  (0, import_react.useEffect)(function() {
    if (!cardFieldsForm) {
      setError(function() {
        throw new Error(CARD_FIELDS_CONTEXT_ERROR);
      });
      return closeComponent;
    }
    if (!containerRef.current) {
      return closeComponent;
    }
    var registeredField = registerField(fieldName, options, cardFieldsForm);
    registeredField === null || registeredField === void 0 ? void 0 : registeredField.render(containerRef.current).catch(function(err) {
      if (!hasChildren(containerRef)) {
        return;
      }
      setError(function() {
        throw new Error("Failed to render <PayPal".concat(fieldName, " /> component. ").concat(err));
      });
    });
    return closeComponent;
  }, []);
  return import_react.default.createElement("div", {
    ref: containerRef,
    className
  });
};
var PayPalNameField = function(options) {
  return import_react.default.createElement(PayPalCardField, __assign({
    fieldName: "NameField"
  }, options));
};
var PayPalNumberField = function(options) {
  return import_react.default.createElement(PayPalCardField, __assign({
    fieldName: "NumberField"
  }, options));
};
var PayPalExpiryField = function(options) {
  return import_react.default.createElement(PayPalCardField, __assign({
    fieldName: "ExpiryField"
  }, options));
};
var PayPalCVVField = function(options) {
  return import_react.default.createElement(PayPalCardField, __assign({
    fieldName: "CVVField"
  }, options));
};
var FlexContainer = function(_a) {
  var children = _a.children;
  return import_react.default.createElement("div", {
    style: {
      display: "flex",
      width: "100%"
    }
  }, children);
};
var PayPalCardFieldsForm = function(_a) {
  var className = _a.className;
  return import_react.default.createElement("div", {
    className
  }, import_react.default.createElement(PayPalCardField, {
    fieldName: "NameField"
  }), import_react.default.createElement(PayPalCardField, {
    fieldName: "NumberField"
  }), import_react.default.createElement(FlexContainer, null, import_react.default.createElement(FullWidthContainer, null, import_react.default.createElement(PayPalCardField, {
    fieldName: "ExpiryField"
  })), import_react.default.createElement(FullWidthContainer, null, import_react.default.createElement(PayPalCardField, {
    fieldName: "CVVField"
  }))));
};
var FUNDING$1 = {
  PAYPAL: "paypal",
  VENMO: "venmo",
  APPLEPAY: "applepay",
  ITAU: "itau",
  CREDIT: "credit",
  PAYLATER: "paylater",
  CARD: "card",
  IDEAL: "ideal",
  SEPA: "sepa",
  BANCONTACT: "bancontact",
  GIROPAY: "giropay",
  SOFORT: "sofort",
  EPS: "eps",
  MYBANK: "mybank",
  P24: "p24",
  PAYU: "payu",
  BLIK: "blik",
  TRUSTLY: "trustly",
  OXXO: "oxxo",
  BOLETO: "boleto",
  BOLETOBANCARIO: "boletobancario",
  WECHATPAY: "wechatpay",
  MERCADOPAGO: "mercadopago",
  MULTIBANCO: "multibanco",
  SATISPAY: "satispay",
  PAIDY: "paidy",
  ZIMPLER: "zimpler",
  MAXIMA: "maxima"
};
[FUNDING$1.IDEAL, FUNDING$1.BANCONTACT, FUNDING$1.GIROPAY, FUNDING$1.SOFORT, FUNDING$1.EPS, FUNDING$1.MYBANK, FUNDING$1.P24, FUNDING$1.PAYU, FUNDING$1.BLIK, FUNDING$1.TRUSTLY, FUNDING$1.OXXO, FUNDING$1.BOLETO, FUNDING$1.BOLETOBANCARIO, FUNDING$1.WECHATPAY, FUNDING$1.MERCADOPAGO, FUNDING$1.MULTIBANCO, FUNDING$1.SATISPAY, FUNDING$1.PAIDY, FUNDING$1.MAXIMA, FUNDING$1.ZIMPLER];
var FUNDING = FUNDING$1;
export {
  BraintreePayPalButtons,
  DISPATCH_ACTION,
  FUNDING,
  PAYPAL_HOSTED_FIELDS_TYPES,
  PayPalButtons,
  PayPalCVVField,
  PayPalCardFieldsContext,
  PayPalCardFieldsForm,
  PayPalCardFieldsProvider,
  PayPalExpiryField,
  PayPalHostedField,
  PayPalHostedFieldsProvider,
  PayPalMarks,
  PayPalMessages,
  PayPalNameField,
  PayPalNumberField,
  PayPalScriptProvider,
  SCRIPT_LOADING_STATE,
  ScriptContext,
  destroySDKScript,
  getScriptID,
  scriptReducer,
  usePayPalCardFields,
  usePayPalHostedFields,
  usePayPalScriptReducer,
  useScriptProviderContext
};
/*! Bundled license information:

@paypal/react-paypal-js/dist/esm/react-paypal-js.js:
  (*!
   * react-paypal-js v8.8.3 (2025-04-11T19:50:46.506Z)
   * Copyright 2020-present, PayPal, Inc. All rights reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=@paypal_react-paypal-js.js.map
