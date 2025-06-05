import {
  init_styled_components_browser_esm,
  styled_components_browser_esm_exports
} from "./chunk-XTP6PQTD.js";
import {
  require_checkPropTypes,
  require_object_assign
} from "./chunk-ZDJ5DOYT.js";
import "./chunk-PWUE5V7V.js";
import {
  __commonJS,
  __toCommonJS
} from "./chunk-WGAPYIUP.js";

// node_modules/react-simple-chatbot/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react-simple-chatbot/node_modules/react/cjs/react.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var _assign = require_object_assign();
        var checkPropTypes = require_checkPropTypes();
        var ReactVersion = "16.14.0";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          suspense: null
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
        function describeComponentFrame(name, source, ownerName) {
          var sourceInfo = "";
          if (source) {
            var path = source.fileName;
            var fileName = path.replace(BEFORE_SLASH_RE, "");
            {
              if (/^index\./.test(fileName)) {
                var match = path.match(BEFORE_SLASH_RE);
                if (match) {
                  var pathBeforeSlash = match[1];
                  if (pathBeforeSlash) {
                    var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, "");
                    fileName = folderName + "/" + fileName;
                  }
                }
              }
            }
            sourceInfo = " (at " + fileName + ":" + source.lineNumber + ")";
          } else if (ownerName) {
            sourceInfo = " (created by " + ownerName + ")";
          }
          return "\n    in " + (name || "Unknown") + sourceInfo;
        }
        var Resolved = 1;
        function refineResolvedLazyComponent(lazyComponent) {
          return lazyComponent._status === Resolved ? lazyComponent._result : null;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                return "Context.Consumer";
              case REACT_PROVIDER_TYPE:
                return "Context.Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type.render);
              case REACT_LAZY_TYPE: {
                var thenable = type;
                var resolvedThenable = refineResolvedLazyComponent(thenable);
                if (resolvedThenable) {
                  return getComponentName(resolvedThenable);
                }
                break;
              }
            }
          }
          return null;
        }
        var ReactDebugCurrentFrame = {};
        var currentlyValidatingElement = null;
        function setCurrentlyValidatingElement(element) {
          {
            currentlyValidatingElement = element;
          }
        }
        {
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentlyValidatingElement) {
              var name = getComponentName(currentlyValidatingElement.type);
              var owner = currentlyValidatingElement._owner;
              stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        };
        {
          _assign(ReactSharedInternals, {
            // These should not be included in production.
            ReactDebugCurrentFrame,
            // Shim for React DOM 16.0.0 which still destructured (but not used) this.
            // TODO: remove in React 17.0.
            ReactComponentTreeHook: {}
          });
        }
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === "string" && args[args.length - 1].indexOf("\n    in") === 0;
            if (!hasExistingStack) {
              var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== "") {
                format += "%s";
                args = args.concat([stack]);
              }
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
            try {
              var argIndex = 0;
              var message = "Warning: " + format.replace(/%s/g, function() {
                return args[argIndex++];
              });
              throw new Error(message);
            } catch (x) {
            }
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            self2 = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = ("" + key).replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return ("" + text).replace(userProvidedKeyEscapeRegex, "$&/");
        }
        var POOL_SIZE = 10;
        var traverseContextPool = [];
        function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
          if (traverseContextPool.length) {
            var traverseContext = traverseContextPool.pop();
            traverseContext.result = mapResult;
            traverseContext.keyPrefix = keyPrefix;
            traverseContext.func = mapFunction;
            traverseContext.context = mapContext;
            traverseContext.count = 0;
            return traverseContext;
          } else {
            return {
              result: mapResult,
              keyPrefix,
              func: mapFunction,
              context: mapContext,
              count: 0
            };
          }
        }
        function releaseTraverseContext(traverseContext) {
          traverseContext.result = null;
          traverseContext.keyPrefix = null;
          traverseContext.func = null;
          traverseContext.context = null;
          traverseContext.count = 0;
          if (traverseContextPool.length < POOL_SIZE) {
            traverseContextPool.push(traverseContext);
          }
        }
        function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            callback(
              traverseContext,
              children,
              // If it's the only child, treat the name as if it was wrapped in an array
              // so that it's consistent if the number of children grows.
              nameSoFar === "" ? SEPARATOR + getComponentKey(children, 0) : nameSoFar
            );
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getComponentKey(child, i);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              {
                if (iteratorFn === children.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is deprecated and will be removed in a future major release. Consider converting children to an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(children);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getComponentKey(child, ii++);
                subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
              }
            } else if (type === "object") {
              var addendum = "";
              {
                addendum = " If you meant to render a collection of children, use an array instead." + ReactDebugCurrentFrame.getStackAddendum();
              }
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + ")." + addendum);
                }
              }
            }
          }
          return subtreeCount;
        }
        function traverseAllChildren(children, callback, traverseContext) {
          if (children == null) {
            return 0;
          }
          return traverseAllChildrenImpl(children, "", callback, traverseContext);
        }
        function getComponentKey(component, index) {
          if (typeof component === "object" && component !== null && component.key != null) {
            return escape(component.key);
          }
          return index.toString(36);
        }
        function forEachSingleChild(bookKeeping, child, name) {
          var func = bookKeeping.func, context = bookKeeping.context;
          func.call(context, child, bookKeeping.count++);
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          if (children == null) {
            return children;
          }
          var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
          traverseAllChildren(children, forEachSingleChild, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapSingleChildIntoContext(bookKeeping, child, childKey) {
          var result = bookKeeping.result, keyPrefix = bookKeeping.keyPrefix, func = bookKeeping.func, context = bookKeeping.context;
          var mappedChild = func.call(context, child, bookKeeping.count++);
          if (Array.isArray(mappedChild)) {
            mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function(c) {
              return c;
            });
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(
                mappedChild,
                // Keep both the (mapped) and old keys if they differ, just as
                // traverseAllChildren used to do for objects as children
                keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + "/" : "") + childKey
              );
            }
            result.push(mappedChild);
          }
        }
        function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
          var escapedPrefix = "";
          if (prefix != null) {
            escapedPrefix = escapeUserProvidedKey(prefix) + "/";
          }
          var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
          traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
          releaseTraverseContext(traverseContext);
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, func, context);
          return result;
        }
        function countChildren(children) {
          return traverseAllChildren(children, function() {
            return null;
          }, null);
        }
        function toArray(children) {
          var result = [];
          mapIntoWithKeyPrefixInternal(children, result, null, function(child) {
            return child;
          });
          return result;
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        function lazy(ctor) {
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _ctor: ctor,
            // React uses these fields to store the result.
            _status: -1,
            _result: null
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          return {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
        }
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          return {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://fb.me/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          setCurrentlyValidatingElement(element);
          {
            error('Each child in a list should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
          }
          setCurrentlyValidatingElement(null);
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var name = getComponentName(type);
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              setCurrentlyValidatingElement(element);
              checkPropTypes(propTypes, element.props, "prop", name, ReactDebugCurrentFrame.getStackAddendum);
              setCurrentlyValidatingElement(null);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            setCurrentlyValidatingElement(fragment);
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                break;
              }
            }
            if (fragment.ref !== null) {
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
            }
            setCurrentlyValidatingElement(null);
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            var testMap = /* @__PURE__ */ new Map([[frozenObject, null]]);
            var testSet = /* @__PURE__ */ new Set([frozenObject]);
            testMap.set(0, 0);
            testSet.add(0);
          } catch (e) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react-simple-chatbot/node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react-simple-chatbot/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react-simple-chatbot/dist/react-simple-chatbot.js
var require_react_simple_chatbot = __commonJS({
  "node_modules/react-simple-chatbot/dist/react-simple-chatbot.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_react(), (init_styled_components_browser_esm(), __toCommonJS(styled_components_browser_esm_exports))) : "function" == typeof define && define.amd ? define(["react", "styled-components"], t) : "object" == typeof exports ? exports.ReactSimpleChatbot = t(require_react(), (init_styled_components_browser_esm(), __toCommonJS(styled_components_browser_esm_exports))) : e.ReactSimpleChatbot = t(e.react, e["styled-components"]);
    }("undefined" != typeof self ? self : exports, function(e, t) {
      return function(e2) {
        var t2 = {};
        function n(r) {
          if (t2[r])
            return t2[r].exports;
          var o = t2[r] = { i: r, l: false, exports: {} };
          return e2[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = e2, n.c = t2, n.d = function(e3, t3, r) {
          n.o(e3, t3) || Object.defineProperty(e3, t3, { enumerable: true, get: r });
        }, n.r = function(e3) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e3, "__esModule", { value: true });
        }, n.t = function(e3, t3) {
          if (1 & t3 && (e3 = n(e3)), 8 & t3)
            return e3;
          if (4 & t3 && "object" == typeof e3 && e3 && e3.__esModule)
            return e3;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e3 }), 2 & t3 && "string" != typeof e3)
            for (var o in e3)
              n.d(r, o, (function(t4) {
                return e3[t4];
              }).bind(null, o));
          return r;
        }, n.n = function(e3) {
          var t3 = e3 && e3.__esModule ? function() {
            return e3.default;
          } : function() {
            return e3;
          };
          return n.d(t3, "a", t3), t3;
        }, n.o = function(e3, t3) {
          return Object.prototype.hasOwnProperty.call(e3, t3);
        }, n.p = "dist/", n(n.s = 9);
      }([function(e2, t2, n) {
        e2.exports = n(5)();
      }, function(t2, n) {
        t2.exports = e;
      }, function(e2, n) {
        e2.exports = t;
      }, function(e2, t2) {
        var n = /* @__PURE__ */ function(e3, t3) {
          return { parse: function(t4, r2) {
            var a = JSON.parse(t4, i).map(o), s = a[0], u = r2 || n2, c = "object" == typeof s && s ? function t5(n3, r3, o2, i2) {
              return Object.keys(o2).reduce(function(o3, a2) {
                var s2 = o3[a2];
                if (s2 instanceof e3) {
                  var u2 = n3[s2];
                  "object" != typeof u2 || r3.has(u2) ? o3[a2] = i2.call(o3, a2, u2) : (r3.add(u2), o3[a2] = i2.call(o3, a2, t5(n3, r3, u2, i2)));
                } else
                  o3[a2] = i2.call(o3, a2, s2);
                return o3;
              }, o2);
            }(a, /* @__PURE__ */ new Set(), s, u) : s;
            return u.call({ "": c }, "", c);
          }, stringify: function(e4, o2, i2) {
            for (var a, s = /* @__PURE__ */ new Map(), u = [], c = [], l = o2 && typeof o2 == typeof u ? function(e5, t4) {
              if ("" === e5 || -1 < o2.indexOf(e5))
                return t4;
            } : o2 || n2, p = +r(s, u, l.call({ "": e4 }, "", e4)), f = function(e5, n3) {
              if (a)
                return a = !a, n3;
              var o3 = l.call(this, e5, n3);
              switch (typeof o3) {
                case "object":
                  if (null === o3)
                    return o3;
                case t3:
                  return s.get(o3) || r(s, u, o3);
              }
              return o3;
            }; p < u.length; p++)
              a = true, c[p] = JSON.stringify(u[p], f, i2);
            return "[" + c.join(",") + "]";
          } };
          function n2(e4, t4) {
            return t4;
          }
          function r(t4, n3, r2) {
            var o2 = e3(n3.push(r2) - 1);
            return t4.set(r2, o2), o2;
          }
          function o(t4) {
            return t4 instanceof e3 ? e3(t4) : t4;
          }
          function i(n3, r2) {
            return typeof r2 === t3 ? new e3(r2) : r2;
          }
        }(String, "string");
        e2.exports = n;
      }, function(e2, t2, n) {
        e2.exports = function(e3, t3) {
          var n2 = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "~!@#$%^&()_+-={}[];',"], r = "";
          (t3 = t3 || "aA0").split("").forEach(function(e4) {
            isNaN(parseInt(e4)) ? /[a-z]/.test(e4) ? r += n2[0] : /[A-Z]/.test(e4) ? r += n2[1] : r += n2[3] : r += n2[2];
          }), e3 = e3 || 30;
          for (var o = ""; e3--; )
            o += r.charAt(Math.floor(Math.random() * r.length));
          return o;
        };
      }, function(e2, t2, n) {
        "use strict";
        var r = n(6), o = n(7), i = n(8);
        e2.exports = function() {
          function e3(e4, t4, n3, r2, a, s) {
            s !== i && o(false, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          }
          function t3() {
            return e3;
          }
          e3.isRequired = e3;
          var n2 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3 };
          return n2.checkPropTypes = r, n2.PropTypes = n2, n2;
        };
      }, function(e2, t2, n) {
        "use strict";
        function r(e3) {
          return function() {
            return e3;
          };
        }
        var o = function() {
        };
        o.thatReturns = r, o.thatReturnsFalse = r(false), o.thatReturnsTrue = r(true), o.thatReturnsNull = r(null), o.thatReturnsThis = function() {
          return this;
        }, o.thatReturnsArgument = function(e3) {
          return e3;
        }, e2.exports = o;
      }, function(e2, t2, n) {
        "use strict";
        var r = function(e3) {
        };
        e2.exports = function(e3, t3, n2, o, i, a, s, u) {
          if (r(t3), !e3) {
            var c;
            if (void 0 === t3)
              c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
              var l = [n2, o, i, a, s, u], p = 0;
              (c = new Error(t3.replace(/%s/g, function() {
                return l[p++];
              }))).name = "Invariant Violation";
            }
            throw c.framesToPop = 1, c;
          }
        };
      }, function(e2, t2, n) {
        "use strict";
        e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, function(e2, t2, n) {
        "use strict";
        n.r(t2);
        var r = n(1), o = n.n(r), i = n(0), a = n.n(i), s = n(4), u = n.n(s), c = n(2), l = n.n(c), p = function(e3) {
          var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n2 = function(e4) {
            e4 = e4.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e5, t5, n3, r2) {
              return t5 + t5 + n3 + n3 + r2 + r2;
            });
            var t4 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e4);
            return t4 ? { r: parseInt(t4[1], 16), g: parseInt(t4[2], 16), b: parseInt(t4[3], 16) } : null;
          }(e3);
          return "rgba(".concat(n2.r, ", ").concat(n2.g, ", ").concat(n2.b, ", ").concat(t3, ")");
        };
        function f() {
          var e3 = g(["\n  0% { box-shadow: 0 0 0 0 ", "; }\n  70% { box-shadow: 0 0 0 10px ", "; }\n  100% { box-shadow: 0 0 0 0 ", "; }\n"]);
          return f = function() {
            return e3;
          }, e3;
        }
        function d() {
          var e3 = g(["\n  25% { transform: rotate(-1deg); }\n  100% { transform: rotate(1deg); }\n"]);
          return d = function() {
            return e3;
          }, e3;
        }
        function b() {
          var e3 = g(["\n  100% { transform: scale(1); }\n"]);
          return b = function() {
            return e3;
          }, e3;
        }
        function h() {
          var e3 = g(["\n  0% { opacity: .2; }\n  20% { opacity: 1; }\n  100% { opacity: .2; }\n"]);
          return h = function() {
            return e3;
          }, e3;
        }
        function g(e3, t3) {
          return t3 || (t3 = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t3) } }));
        }
        var y = Object(c.keyframes)(h()), v = Object(c.keyframes)(b()), m = Object(c.keyframes)(d());
        function S() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  animation: ", " 1.4s infinite both;\n  animation-delay: ", ";\n"]);
          return S = function() {
            return e3;
          }, e3;
        }
        var x = l.a.span(S(), y, function(e3) {
          return e3.delay;
        }), O = function() {
          return o.a.createElement("span", { className: "rsc-loading" }, o.a.createElement(x, { delay: "0s" }, "."), o.a.createElement(x, { delay: ".2s" }, "."), o.a.createElement(x, { delay: ".4s" }, "."));
        };
        function w() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  background: #fff;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  display: flex;\n  justify-content: center;\n  margin: 0 6px 10px 6px;\n  padding: 16px;\n"]);
          return w = function() {
            return e3;
          }, e3;
        }
        var j = l.a.div(w());
        function k(e3) {
          return (k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function E(e3, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
          }
        }
        function P(e3) {
          return (P = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        function z(e3, t3) {
          return (z = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function q(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function C(e3, t3, n2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
        }
        var R = function(e3) {
          function t3() {
            var e4, n3, r2, i3;
            !function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3);
            for (var a3 = arguments.length, s2 = new Array(a3), u2 = 0; u2 < a3; u2++)
              s2[u2] = arguments[u2];
            return r2 = this, i3 = (e4 = P(t3)).call.apply(e4, [this].concat(s2)), n3 = !i3 || "object" !== k(i3) && "function" != typeof i3 ? q(r2) : i3, C(q(q(n3)), "state", { loading: true }), C(q(q(n3)), "renderComponent", function() {
              var e5 = n3.props, t4 = e5.step, r3 = e5.steps, i4 = e5.previousStep, a4 = e5.triggerNextStep, s3 = t4.component;
              return o.a.cloneElement(s3, { step: t4, steps: r3, previousStep: i4, triggerNextStep: a4 });
            }), n3;
          }
          var n2, i2, a2;
          return function(e4, t4) {
            if ("function" != typeof t4 && null !== t4)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t4 && z(e4, t4);
          }(t3, r["Component"]), n2 = t3, (i2 = [{ key: "componentDidMount", value: function() {
            var e4 = this, t4 = this.props, n3 = t4.speak, r2 = t4.step, o2 = t4.previousValue, i3 = t4.triggerNextStep, a3 = r2.delay, s2 = r2.waitAction;
            setTimeout(function() {
              e4.setState({ loading: false }, function() {
                s2 || r2.rendered || i3(), n3(r2, o2);
              });
            }, a3);
          } }, { key: "render", value: function() {
            var e4 = this.state.loading, t4 = this.props.style;
            return o.a.createElement(j, { className: "rsc-cs", style: t4 }, e4 ? o.a.createElement(O, null) : this.renderComponent());
          } }]) && E(n2.prototype, i2), a2 && E(n2, a2), t3;
        }();
        R.propTypes = { previousStep: a.a.objectOf(a.a.any).isRequired, previousValue: a.a.oneOfType([a.a.string, a.a.bool, a.a.number, a.a.object, a.a.array]), speak: a.a.func, step: a.a.objectOf(a.a.any).isRequired, steps: a.a.objectOf(a.a.any).isRequired, style: a.a.objectOf(a.a.any).isRequired, triggerNextStep: a.a.func.isRequired }, R.defaultProps = { previousValue: "", speak: function() {
        } };
        var N = R;
        function I() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  animation: ", " 0.3s ease forwards;\n  cursor: pointer;\n  display: inline-block;\n  margin: 2px;\n  transform: scale(0);\n"]);
          return I = function() {
            return e3;
          }, e3;
        }
        var M = l.a.li(I(), v), T = { background: "#f5f8fb", fontFamily: "monospace", headerBgColor: "#6e48aa", headerFontColor: "#fff", headerFontSize: "16px", botBubbleColor: "#6E48AA", botFontColor: "#fff", userBubbleColor: "#fff", userFontColor: "#4a4a4a" };
        function A() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  background: ", ";\n  border: 0;\n  border-radius: 22px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ", ";\n  display: inline-block;\n  font-size: 14px;\n  padding: 12px;\n\n  &:hover {\n    opacity: 0.7;\n  }\n  &:active,\n  &:hover:focus {\n    outline:none;\n  }\n"]);
          return A = function() {
            return e3;
          }, e3;
        }
        var _ = l.a.button(A(), function(e3) {
          return e3.theme.botBubbleColor;
        }, function(e3) {
          return e3.theme.botFontColor;
        });
        _.defaultProps = { theme: T };
        var B = _;
        function F() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  margin: 2px 0 12px 0;\n  padding: 0 6px;\n"]);
          return F = function() {
            return e3;
          }, e3;
        }
        var V = l.a.ul(F());
        function L() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }([""]);
          return L = function() {
            return e3;
          }, e3;
        }
        var D = l.a.div(L());
        function U(e3) {
          return (U = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function H(e3, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
          }
        }
        function K(e3) {
          return (K = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        function J(e3, t3) {
          return (J = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function W(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function $(e3, t3, n2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
        }
        var Y = function(e3) {
          function t3() {
            var e4, n3, r2, i3;
            !function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3);
            for (var a3 = arguments.length, s2 = new Array(a3), u2 = 0; u2 < a3; u2++)
              s2[u2] = arguments[u2];
            return r2 = this, i3 = (e4 = K(t3)).call.apply(e4, [this].concat(s2)), n3 = !i3 || "object" !== U(i3) && "function" != typeof i3 ? W(r2) : i3, $(W(W(n3)), "onOptionClick", function(e5) {
              var t4 = e5.value;
              (0, n3.props.triggerNextStep)({ value: t4 });
            }), $(W(W(n3)), "renderOption", function(e5) {
              var t4 = n3.props, r3 = t4.bubbleOptionStyle, i4 = t4.step.user, a4 = e5.value, s3 = e5.label;
              return o.a.createElement(M, { key: a4, className: "rsc-os-option" }, o.a.createElement(B, { className: "rsc-os-option-element", style: r3, user: i4, onClick: function() {
                return n3.onOptionClick({ value: a4 });
              } }, s3));
            }), n3;
          }
          var n2, i2, a2;
          return function(e4, t4) {
            if ("function" != typeof t4 && null !== t4)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t4 && J(e4, t4);
          }(t3, r["Component"]), n2 = t3, (i2 = [{ key: "render", value: function() {
            var e4 = this.props.step.options;
            return o.a.createElement(D, { className: "rsc-os" }, o.a.createElement(V, { className: "rsc-os-options" }, Object.keys(e4).map(function(t4) {
              return e4[t4];
            }).map(this.renderOption)));
          } }]) && H(n2.prototype, i2), a2 && H(n2, a2), t3;
        }();
        Y.propTypes = { bubbleOptionStyle: a.a.objectOf(a.a.any).isRequired, step: a.a.objectOf(a.a.any).isRequired, triggerNextStep: a.a.func.isRequired };
        var Z = Y;
        function G() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  animation: ", " 0.3s ease forwards;\n  background: ", ";\n  border-radius: ", ";\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);\n  color: ", ";\n  display: inline-block;\n  font-size: 14px;\n  max-width: 50%;\n  margin: ", ";\n  overflow: hidden;\n  position: relative;\n  padding: 12px;\n  transform: scale(0);\n  transform-origin: ", ";\n"]);
          return G = function() {
            return e3;
          }, e3;
        }
        var Q = l.a.div(G(), v, function(e3) {
          return e3.user ? e3.theme.userBubbleColor : e3.theme.botBubbleColor;
        }, function(e3) {
          var t3 = e3.isFirst, n2 = e3.isLast, r2 = e3.user;
          return t3 || n2 ? !t3 && n2 ? r2 ? "18px 0 18px 18px" : "0 18px 18px 18px" : e3.user ? "18px 18px 0 18px" : "18px 18px 18px 0" : r2 ? "18px 0 0 18px" : "0 18px 18px 0px";
        }, function(e3) {
          return e3.user ? e3.theme.userFontColor : e3.theme.botFontColor;
        }, function(e3) {
          var t3 = e3.isFirst, n2 = e3.showAvatar, r2 = e3.user;
          return !t3 && n2 ? r2 ? "-8px 46px 10px 0" : "-8px 0 10px 46px" : t3 || n2 ? "0 0 10px 0" : r2 ? "-8px 0px 10px 0" : "-8px 0 10px 0px";
        }, function(e3) {
          var t3 = e3.isFirst, n2 = e3.user;
          return t3 ? n2 ? "bottom right" : "bottom left" : n2 ? "top right" : "top left";
        });
        Q.defaultProps = { theme: T };
        var X = Q;
        function ee() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  animation: ", " 0.3s ease forwards;\n  border-radius: ", ";\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;\n  height: 40px;\n  min-width: 40px;\n  padding: 3px;\n  transform: scale(0);\n  transform-origin: ", ";\n  width: 40;\n"]);
          return ee = function() {
            return e3;
          }, e3;
        }
        var te = l.a.img(ee(), v, function(e3) {
          return e3.user ? "50% 50% 50% 0" : "50% 50% 0 50%";
        }, function(e3) {
          return e3.user ? "bottom left" : "bottom right";
        });
        function ne() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  display: inline-block;\n  order: ", ";\n  padding: 6px;\n"]);
          return ne = function() {
            return e3;
          }, e3;
        }
        var re = l.a.div(ne(), function(e3) {
          return e3.user ? "1" : "0";
        });
        function oe() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  align-items: flex-end;\n  display: flex;\n  justify-content: ", ";\n"]);
          return oe = function() {
            return e3;
          }, e3;
        }
        var ie = l.a.div(oe(), function(e3) {
          return e3.user ? "flex-end" : "flex-start";
        });
        function ae(e3) {
          return (ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function se(e3, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
          }
        }
        function ue(e3) {
          return (ue = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        function ce(e3, t3) {
          return (ce = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function le(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function pe(e3, t3, n2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
        }
        var fe = function(e3) {
          function t3() {
            var e4, n3, r2, i3;
            !function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3);
            for (var a3 = arguments.length, s2 = new Array(a3), u2 = 0; u2 < a3; u2++)
              s2[u2] = arguments[u2];
            return r2 = this, i3 = (e4 = ue(t3)).call.apply(e4, [this].concat(s2)), n3 = !i3 || "object" !== ae(i3) && "function" != typeof i3 ? le(r2) : i3, pe(le(le(n3)), "state", { loading: true }), pe(le(le(n3)), "getMessage", function() {
              var e5 = n3.props, t4 = e5.previousValue, r3 = e5.step.message;
              return r3 ? r3.replace(/{previousValue}/g, t4) : "";
            }), pe(le(le(n3)), "renderMessage", function() {
              var e5 = n3.props, t4 = e5.step, r3 = e5.steps, i4 = e5.previousStep, a4 = e5.triggerNextStep, s3 = t4.component;
              return s3 ? o.a.cloneElement(s3, { step: t4, steps: r3, previousStep: i4, triggerNextStep: a4 }) : n3.getMessage();
            }), n3;
          }
          var n2, i2, a2;
          return function(e4, t4) {
            if ("function" != typeof t4 && null !== t4)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t4 && ce(e4, t4);
          }(t3, r["Component"]), n2 = t3, (i2 = [{ key: "componentDidMount", value: function() {
            var e4 = this, t4 = this.props, n3 = t4.step, r2 = t4.speak, o2 = t4.previousValue, i3 = t4.triggerNextStep, a3 = n3.component, s2 = n3.delay, u2 = n3.waitAction, c2 = a3 && u2;
            setTimeout(function() {
              e4.setState({ loading: false }, function() {
                c2 || n3.rendered || i3(), r2(n3, o2);
              });
            }, s2);
          } }, { key: "render", value: function() {
            var e4 = this.props, t4 = e4.step, n3 = e4.isFirst, r2 = e4.isLast, i3 = e4.avatarStyle, a3 = e4.bubbleStyle, s2 = e4.hideBotAvatar, u2 = e4.hideUserAvatar, c2 = this.state.loading, l2 = t4.avatar, p2 = t4.user, f2 = p2 ? !u2 : !s2;
            return o.a.createElement(ie, { className: "rsc-ts ".concat(p2 ? "rsc-ts-user" : "rsc-ts-bot"), user: p2 }, o.a.createElement(re, { className: "rsc-ts-image-container", user: p2 }, n3 && f2 && o.a.createElement(te, { className: "rsc-ts-image", style: i3, showAvatar: f2, user: p2, src: l2, alt: "avatar" })), o.a.createElement(X, { className: "rsc-ts-bubble", style: a3, user: p2, showAvatar: f2, isFirst: n3, isLast: r2 }, c2 ? o.a.createElement(O, null) : this.renderMessage()));
          } }]) && se(n2.prototype, i2), a2 && se(n2, a2), t3;
        }();
        fe.propTypes = { avatarStyle: a.a.objectOf(a.a.any).isRequired, isFirst: a.a.bool.isRequired, isLast: a.a.bool.isRequired, bubbleStyle: a.a.objectOf(a.a.any).isRequired, hideBotAvatar: a.a.bool.isRequired, hideUserAvatar: a.a.bool.isRequired, previousStep: a.a.objectOf(a.a.any), previousValue: a.a.oneOfType([a.a.string, a.a.bool, a.a.number, a.a.object, a.a.array]), speak: a.a.func, step: a.a.objectOf(a.a.any).isRequired, steps: a.a.objectOf(a.a.any), triggerNextStep: a.a.func.isRequired }, fe.defaultProps = { previousStep: {}, previousValue: "", speak: function() {
        }, steps: {} };
        var de = fe, be = [{ key: "id", types: ["string", "number"], required: true }, { key: "user", types: ["boolean"], required: true }, { key: "trigger", types: ["string", "number", "function"], required: false }, { key: "validator", types: ["function"], required: false }, { key: "end", types: ["boolean"], required: false }, { key: "placeholder", types: ["string"], required: false }, { key: "inputAttributes", types: ["object"], required: false }, { key: "metadata", types: ["object"], required: false }], he = [{ key: "id", types: ["string", "number"], required: true }, { key: "message", types: ["string", "function"], required: true }, { key: "avatar", types: ["string"], required: false }, { key: "trigger", types: ["string", "number", "function"], required: false }, { key: "delay", types: ["number"], required: false }, { key: "end", types: ["boolean"], required: false }, { key: "placeholder", types: ["string"], required: false }, { key: "hideInput", types: ["boolean"], required: false }, { key: "inputAttributes", types: ["object"], required: false }, { key: "metadata", types: ["object"], required: false }], ge = [{ key: "id", types: ["string", "number"], required: true }, { key: "options", types: ["object"], required: true }, { key: "end", types: ["boolean"], required: false }, { key: "placeholder", types: ["string"], required: false }, { key: "hideInput", types: ["boolean"], required: false }, { key: "inputAttributes", types: ["object"], required: false }, { key: "metadata", types: ["object"], required: false }], ye = [{ key: "id", types: ["string", "number"], required: true }, { key: "component", types: ["any"], required: true }, { key: "avatar", types: ["string"], required: false }, { key: "replace", types: ["boolean"], required: false }, { key: "waitAction", types: ["boolean"], required: false }, { key: "asMessage", types: ["boolean"], required: false }, { key: "trigger", types: ["string", "number", "function"], required: false }, { key: "delay", types: ["number"], required: false }, { key: "end", types: ["boolean"], required: false }, { key: "placeholder", types: ["string"], required: false }, { key: "hideInput", types: ["boolean"], required: false }, { key: "inputAttributes", types: ["object"], required: false }, { key: "metadata", types: ["object"], required: false }], ve = [{ key: "id", types: ["string", "number"], required: true }, { key: "update", types: ["string", "number"], required: true }, { key: "trigger", types: ["string", "number", "function"], required: true }, { key: "placeholder", types: ["string"], required: false }, { key: "inputAttributes", types: ["object"], required: false }, { key: "metadata", types: ["object"], required: false }], me = n(3);
        function Se(e3) {
          return (Se = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        var xe = { parse: function(e3) {
          var t3 = [];
          if (e3.user)
            t3 = be;
          else if (e3.message)
            t3 = he;
          else if (e3.options)
            t3 = ge;
          else if (e3.component)
            t3 = ye;
          else {
            if (!e3.update)
              throw new Error("The step ".concat(Object(me.stringify)(e3), " is invalid"));
            t3 = ve;
          }
          for (var n2 = 0, r2 = t3.length; n2 < r2; n2 += 1) {
            var o2 = t3[n2], i2 = o2.key, a2 = o2.types, s2 = o2.required;
            if (!e3[i2] && s2)
              throw new Error("Key '".concat(i2, "' is required in step ").concat(Object(me.stringify)(e3)));
            if (e3[i2] && "any" !== a2[0] && a2.indexOf(Se(e3[i2])) < 0)
              throw new Error("The type of '".concat(i2, "' value must be ").concat(a2.join(" or "), " instead of ").concat(Se(e3[i2])));
          }
          var u2 = t3.map(function(e4) {
            return e4.key;
          });
          for (var i2 in e3)
            u2.indexOf(i2) < 0 && (console.error("Invalid key '".concat(i2, "' in step '").concat(e3.id, "'")), delete e3[i2]);
          return e3;
        }, checkInvalidIds: function(e3) {
          for (var t3 in e3) {
            var n2 = e3[t3], r2 = e3[t3].trigger;
            if ("function" != typeof r2) {
              if (n2.options)
                for (var o2 = n2.options.filter(function(e4) {
                  return "function" != typeof e4.trigger;
                }).map(function(e4) {
                  return e4.trigger;
                }), i2 = 0, a2 = o2.length; i2 < a2; i2 += 1) {
                  var s2 = o2[i2];
                  if (s2 && !e3[s2])
                    throw new Error("The id '".concat(s2, "' triggered by option ").concat(i2 + 1, " in step '").concat(e3[t3].id, "' does not exist"));
                }
              else if (r2 && !e3[r2])
                throw new Error("The id '".concat(r2, "' triggered by step '").concat(e3[t3].id, "' does not exist"));
            }
          }
        } }, Oe = function(e3, t3) {
          var n2 = Object(me.parse)(Object(me.stringify)(t3));
          for (var r2 in n2)
            for (var o2 = 0, i2 = n2[r2].length; o2 < i2; o2 += 1)
              n2[r2][o2].component && (n2[r2][o2].component = n2[r2][o2].id);
          localStorage.setItem(e3, Object(me.stringify)(n2));
        };
        function we() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  background: ", ";\n  border-radius: 10px;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  font-family: ", ";\n  overflow: hidden;\n  position: ", ";\n  bottom: ", ";\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  width: ", ";\n  height: ", ";\n  z-index: 999;\n  transform: ", ";\n  transform-origin: ", ";\n  transition: transform 0.3s ease;\n\n  @media screen and (max-width: 568px) {\n    border-radius: ", ";\n    bottom: 0 !important;\n    left: initial !important;\n    height: 100%;\n    right: 0 !important;\n    top: initial !important;\n    width: 100%;\n  }\n"]);
          return we = function() {
            return e3;
          }, e3;
        }
        var je = l.a.div(we(), function(e3) {
          return e3.theme.background;
        }, function(e3) {
          return e3.theme.fontFamily;
        }, function(e3) {
          return e3.floating ? "fixed" : "relative";
        }, function(e3) {
          var t3 = e3.floating, n2 = e3.floatingStyle;
          return t3 ? n2.bottom || "32px" : "initial";
        }, function(e3) {
          var t3 = e3.floating, n2 = e3.floatingStyle;
          return t3 && n2.top || "initial";
        }, function(e3) {
          var t3 = e3.floating, n2 = e3.floatingStyle;
          return t3 ? n2.right || "32px" : "initial";
        }, function(e3) {
          var t3 = e3.floating, n2 = e3.floatingStyle;
          return t3 && n2.left || "initial";
        }, function(e3) {
          return e3.width;
        }, function(e3) {
          return e3.height;
        }, function(e3) {
          return e3.opened ? "scale(1)" : "scale(0)";
        }, function(e3) {
          return e3.floatingStyle.transformOrigin || "bottom right";
        }, function(e3) {
          return e3.floating ? "0" : "";
        });
        je.defaultProps = { theme: T };
        var ke = je;
        function Ee() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  height: calc(", " - ", ");\n  overflow-y: scroll;\n  margin-top: 2px;\n  padding-top: 6px;\n\n  @media screen and (max-width: 568px) {\n    height: ", ";\n  }\n"]);
          return Ee = function() {
            return e3;
          }, e3;
        }
        var Pe = l.a.div(Ee(), function(e3) {
          return e3.height;
        }, function(e3) {
          return e3.hideInput ? "56px" : "112px";
        }, function(e3) {
          return e3.floating ? "calc(100% - 112px)" : "";
        });
        function ze() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  align-items: center;\n  background: ", ";\n  color: ", ";\n  display: flex;\n  fill: ", ";\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 10px;\n"]);
          return ze = function() {
            return e3;
          }, e3;
        }
        var qe = l.a.div(ze(), function(e3) {
          return e3.theme.headerBgColor;
        }, function(e3) {
          return e3.theme.headerFontColor;
        }, function(e3) {
          return e3.theme.headerFontColor;
        });
        qe.defaultProps = { theme: T };
        var Ce = qe;
        function Re() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  margin: 0;\n  font-size: ", ";\n"]);
          return Re = function() {
            return e3;
          }, e3;
        }
        var Ne = l.a.h2(Re(), function(e3) {
          return e3.theme.headerFontSize;
        });
        Ne.defaultProps = { theme: T };
        var Ie = Ne;
        function Me() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  cursor: pointer;\n"]);
          return Me = function() {
            return e3;
          }, e3;
        }
        var Te = l.a.a(Me());
        function Ae() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  align-items: center;\n  cursor: pointer;\n  background: ", ";\n  bottom: 32px;\n  border-radius: 100%;\n  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);\n  display: flex;\n  fill: ", ";\n  height: 56px;\n  justify-content: center;\n  position: fixed;\n  right: 32px;\n  transform: ", ";\n  transition: transform 0.3s ease;\n  width: 56px;\n  z-index: 999;\n"]);
          return Ae = function() {
            return e3;
          }, e3;
        }
        var _e = l.a.a(Ae(), function(e3) {
          return e3.theme.headerBgColor;
        }, function(e3) {
          return e3.theme.headerFontColor;
        }, function(e3) {
          return e3.opened ? "scale(0)" : "scale(1)";
        });
        _e.defaultProps = { theme: { headerBgColor: "#6e48aa", headerFontColor: "#fff" } };
        var Be = _e;
        function Fe() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  height: 24px;\n  width: 24px;\n"]);
          return Fe = function() {
            return e3;
          }, e3;
        }
        var Ve = l.a.img(Fe());
        function Le() {
          var e3 = function(e4, t3) {
            t3 || (t3 = e4.slice(0));
            return Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t3) } }));
          }(["\n  position: relative;\n"]);
          return Le = function() {
            return e3;
          }, e3;
        }
        var De = l.a.div(Le());
        function Ue() {
          var e3 = Ke(["\n          ", " .2s ease\n        "]);
          return Ue = function() {
            return e3;
          }, e3;
        }
        function He() {
          var e3 = Ke(["\n  animation: ", ";\n  border: 0;\n  border-radius: 0;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border-top: ", ";\n  box-shadow: ", ";\n  box-sizing: border-box;\n  color: ", ";\n  font-size: 16px;\n  opacity: ", ";\n  outline: none;\n  padding: ", ";\n  width: 100%;\n  -webkit-appearance: none;\n\n  &:disabled {\n    background: #fff;\n  }\n\n  @media screen and (max-width: 568px) {\n    border-bottom-left-radius: ", ";\n    border-bottom-right-radius: ", ";\n  }\n"]);
          return He = function() {
            return e3;
          }, e3;
        }
        function Ke(e3, t3) {
          return t3 || (t3 = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t3) } }));
        }
        var Je = l.a.input(He(), function(e3) {
          return e3.invalid ? Object(c.css)(Ue(), m) : "";
        }, function(e3) {
          return e3.invalid ? "0" : "1px solid #eee";
        }, function(e3) {
          return e3.invalid ? "inset 0 0 2px #E53935" : "none";
        }, function(e3) {
          return e3.invalid ? "#E53935" : "";
        }, function(e3) {
          return e3.disabled && !e3.invalid ? ".5" : "1";
        }, function(e3) {
          return e3.hasButton ? "16px 52px 16px 10px" : "16px 10px";
        }, function(e3) {
          return e3.floating ? "0" : "10px";
        }, function(e3) {
          return e3.floating ? "0" : "10px";
        });
        function We() {
          var e3 = Ye(["\n            ", " 2s ease infinite\n          "]);
          return We = function() {
            return e3;
          }, e3;
        }
        function $e() {
          var e3 = Ye(["\n  background-color: transparent;\n  border: 0;\n  border-bottom-right-radius: 10px;\n  box-shadow: none;\n  cursor: ", ";\n  fill: ", ";\n  opacity: ", ";\n  outline: none;\n  padding: 14px 16px 12px 16px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  &:before {\n    content: '';\n    position: absolute;\n    width: 23px;\n    height: 23px;\n    border-radius: 50%;\n    animation: ", ";\n  }\n  &:not(:disabled):hover {\n    opacity: 0.7;\n  }\n"]);
          return $e = function() {
            return e3;
          }, e3;
        }
        function Ye(e3, t3) {
          return t3 || (t3 = e3.slice(0)), Object.freeze(Object.defineProperties(e3, { raw: { value: Object.freeze(t3) } }));
        }
        var Ze = l.a.button($e(), function(e3) {
          return e3.disabled ? "default" : "pointer";
        }, function(e3) {
          var t3 = e3.speaking, n2 = e3.invalid, r2 = e3.theme;
          return t3 ? r2.headerBgColor : n2 ? "#E53935" : "#4a4a4a";
        }, function(e3) {
          return e3.disabled && !e3.invalid ? ".5" : "1";
        }, function(e3) {
          var t3, n2 = e3.theme;
          return e3.speaking ? Object(c.css)(We(), (t3 = n2.headerBgColor, Object(c.keyframes)(f(), p(t3, 0.4), p(t3, 0), p(t3, 0)))) : "";
        });
        Ze.defaultProps = { theme: T };
        var Ge = Ze;
        function Qe() {
          return (Qe = Object.assign || function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = arguments[t3];
              for (var r2 in n2)
                Object.prototype.hasOwnProperty.call(n2, r2) && (e3[r2] = n2[r2]);
            }
            return e3;
          }).apply(this, arguments);
        }
        function Xe(e3, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
          }
        }
        function et(e3, t3, n2) {
          return t3 && Xe(e3.prototype, t3), n2 && Xe(e3, n2), e3;
        }
        var tt = null, nt = function() {
        }, rt = function() {
          function e3() {
            var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : nt, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nt, r2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : nt, o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "en";
            return function(e4, t4) {
              if (!(e4 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, e3), tt || (tt = this), this.state = { inputValue: "", lang: o2, onChange: t3, onEnd: n2, onStop: r2 }, this.onResult = this.onResult.bind(this), this.onEnd = this.onEnd.bind(this), this.setup(), tt;
          }
          return et(e3, null, [{ key: "isSupported", value: function() {
            return "webkitSpeechRecognition" in window;
          } }]), et(e3, [{ key: "onChange", value: function(e4) {
            var t3 = this.state.onChange;
            this.setState({ inputValue: e4 }), t3(e4);
          } }, { key: "onFinal", value: function(e4) {
            this.setState({ inputValue: e4 }), this.recognition.stop();
          } }, { key: "onEnd", value: function() {
            var e4 = this.state, t3 = e4.onStop, n2 = e4.onEnd, r2 = e4.force;
            this.setState({ speaking: false }), r2 ? t3() : n2();
          } }, { key: "onResult", value: function(e4) {
            for (var t3 = "", n2 = "", r2 = e4.resultIndex; r2 < e4.results.length; r2 += 1)
              e4.results[r2].isFinal ? (n2 += e4.results[r2][0].transcript, this.onFinal(n2)) : (t3 += e4.results[r2][0].transcript, this.onChange(t3));
          } }, { key: "setState", value: function(e4) {
            this.state = Qe({}, this.state, e4);
          } }, { key: "setup", value: function() {
            if (!e3.isSupported())
              return this;
            var t3 = window.webkitSpeechRecognition;
            return this.recognition = new t3(), this.recognition.continuous = true, this.recognition.interimResults = true, this.recognition.lang = this.state.lang, this.recognition.onresult = this.onResult, this.recognition.onend = this.onEnd, this;
          } }, { key: "setLang", value: function(e4) {
            return this.setState({ lang: e4 }), this.setup(), this;
          } }, { key: "speak", value: function() {
            return e3.isSupported() ? (this.state.speaking ? (this.setState({ force: true }), this.recognition.stop()) : (this.recognition.start(), this.setState({ speaking: true, inputValue: "" })), this) : this;
          } }]), e3;
        }(), ot = function() {
          return o.a.createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, o.a.createElement("path", { d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" }), o.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
        }, it = function() {
          return o.a.createElement("svg", { height: "24", viewBox: "0 0 24 24", width: "24", xmlns: "http://www.w3.org/2000/svg" }, o.a.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }), o.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
        }, at = function(e3) {
          var t3 = e3.size;
          return o.a.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: t3, height: t3, viewBox: "0 0 500 500" }, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("polygon", { points: "0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75" }))));
        };
        at.propTypes = { size: a.a.number }, at.defaultProps = { size: 20 };
        var st = at, ut = function(e3) {
          var t3 = e3.size;
          return o.a.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: t3, height: t3, viewBox: "0 0 400 400" }, o.a.createElement("g", null, o.a.createElement("path", { d: "M290.991,240.991c0,26.392-21.602,47.999-48.002,47.999h-11.529c-26.4,0-48.002-21.607-48.002-47.999V104.002   c0-26.4,21.602-48.004,48.002-48.004h11.529c26.4,0,48.002,21.604,48.002,48.004V240.991z" }), o.a.createElement("path", { d: "M342.381,209.85h-8.961c-4.932,0-8.961,4.034-8.961,8.961v8.008c0,50.26-37.109,91.001-87.361,91.001   c-50.26,0-87.109-40.741-87.109-91.001v-8.008c0-4.927-4.029-8.961-8.961-8.961h-8.961c-4.924,0-8.961,4.034-8.961,8.961v8.008   c0,58.862,40.229,107.625,96.07,116.362v36.966h-34.412c-4.932,0-8.961,4.039-8.961,8.971v17.922c0,4.923,4.029,8.961,8.961,8.961   h104.688c4.926,0,8.961-4.038,8.961-8.961v-17.922c0-4.932-4.035-8.971-8.961-8.971h-34.43v-36.966   c55.889-8.729,96.32-57.5,96.32-116.362v-8.008C351.342,213.884,347.303,209.85,342.381,209.85z" })));
        };
        ut.propTypes = { size: a.a.number }, ut.defaultProps = { size: 20 };
        var ct = ut, lt = function() {
          return /iphone|ipod|android|ie|blackberry|fennec/i.test(navigator.userAgent);
        }, pt = function(e3) {
          return "string" == typeof e3;
        }, ft = function(e3) {
          return function(t3, n2) {
            var r2 = e3.lang, o2 = e3.voice, i2 = e3.enable, a2 = t3.user;
            if (window.SpeechSynthesisUtterance && window.speechSynthesis && !a2 && i2) {
              var s2 = function(e4) {
                var t4 = e4.message, n3 = e4.metadata, r3 = void 0 === n3 ? {} : n3;
                return pt(r3.speak) ? r3.speak : pt(t4) ? t4 : "";
              }(t3), u2 = new window.SpeechSynthesisUtterance();
              u2.text = s2.replace(/{previousValue}/g, n2), u2.lang = r2, u2.voice = o2, window.speechSynthesis.speak(u2);
            }
          };
        };
        function dt(e3) {
          return (dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          })(e3);
        }
        function bt() {
          return (bt = Object.assign || function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = arguments[t3];
              for (var r2 in n2)
                Object.prototype.hasOwnProperty.call(n2, r2) && (e3[r2] = n2[r2]);
            }
            return e3;
          }).apply(this, arguments);
        }
        function ht(e3, t3) {
          for (var n2 = 0; n2 < t3.length; n2++) {
            var r2 = t3[n2];
            r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, r2.key, r2);
          }
        }
        function gt(e3) {
          return (gt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          })(e3);
        }
        function yt(e3, t3) {
          return (yt = Object.setPrototypeOf || function(e4, t4) {
            return e4.__proto__ = t4, e4;
          })(e3, t3);
        }
        function vt(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function mt(e3, t3, n2) {
          return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
        }
        var St = function(e3) {
          function t3(e4) {
            var n3, r2, i3;
            return function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, t3), r2 = this, i3 = gt(t3).call(this, e4), n3 = !i3 || "object" !== dt(i3) && "function" != typeof i3 ? vt(r2) : i3, mt(vt(vt(n3)), "onNodeInserted", function(e5) {
              var t4 = e5.currentTarget;
              n3.props.enableSmoothScroll && n3.supportsScrollBehavior ? t4.scroll({ top: t4.scrollHeight, left: 0, behavior: "smooth" }) : t4.scrollTop = t4.scrollHeight;
            }), mt(vt(vt(n3)), "onResize", function() {
              n3.content.scrollTop = n3.content.scrollHeight;
            }), mt(vt(vt(n3)), "onRecognitionChange", function(e5) {
              n3.setState({ inputValue: e5 });
            }), mt(vt(vt(n3)), "onRecognitionEnd", function() {
              n3.setState({ speaking: false }), n3.handleSubmitButton();
            }), mt(vt(vt(n3)), "onRecognitionStop", function() {
              n3.setState({ speaking: false });
            }), mt(vt(vt(n3)), "onValueChange", function(e5) {
              n3.setState({ inputValue: e5.target.value });
            }), mt(vt(vt(n3)), "getTriggeredStep", function(e5, t4) {
              var r3 = n3.generateRenderedStepsById();
              return "function" == typeof e5 ? e5({ value: t4, steps: r3 }) : e5;
            }), mt(vt(vt(n3)), "getStepMessage", function(e5) {
              var t4 = n3.state.previousSteps, r3 = t4.length > 0 ? t4.length - 1 : 0, o2 = n3.generateRenderedStepsById(), i4 = t4[r3].value;
              return "function" == typeof e5 ? e5({ previousValue: i4, steps: o2 }) : e5;
            }), mt(vt(vt(n3)), "generateRenderedStepsById", function() {
              for (var e5 = n3.state.previousSteps, t4 = {}, r3 = 0, o2 = e5.length; r3 < o2; r3 += 1) {
                var i4 = e5[r3], a3 = i4.id, s2 = i4.message, u2 = i4.value, c2 = i4.metadata;
                t4[a3] = { id: a3, message: s2, value: u2, metadata: c2 };
              }
              return t4;
            }), mt(vt(vt(n3)), "triggerNextStep", function(e5) {
              var t4 = n3.props.enableMobileAutoFocus, r3 = n3.state, o2 = r3.defaultUserSettings, i4 = r3.previousSteps, a3 = r3.renderedSteps, s2 = r3.steps, c2 = n3.state, l2 = c2.currentStep, p2 = c2.previousStep, f2 = l2.end;
              if (e5 && e5.value && (l2.value = e5.value), e5 && e5.hideInput && (l2.hideInput = e5.hideInput), e5 && e5.trigger && (l2.trigger = n3.getTriggeredStep(e5.trigger, e5.value)), f2)
                n3.handleEnd();
              else if (l2.options && e5) {
                var d2 = l2.options.filter(function(t5) {
                  return t5.value === e5.value;
                })[0], b2 = n3.getTriggeredStep(d2.trigger, l2.value);
                delete l2.options, l2 = bt({}, l2, d2, o2, { user: true, message: d2.label, trigger: b2 }), a3.pop(), i4.pop(), a3.push(l2), i4.push(l2), n3.setState({ currentStep: l2, renderedSteps: a3, previousSteps: i4 });
              } else if (l2.trigger) {
                l2.replace && a3.pop();
                var h2 = bt({}, s2[n3.getTriggeredStep(l2.trigger, l2.value)]);
                if (h2.message)
                  h2.message = n3.getStepMessage(h2.message);
                else if (h2.update) {
                  var g2 = h2;
                  if ((h2 = bt({}, s2[g2.update])).options)
                    for (var y2 = 0, v2 = h2.options.length; y2 < v2; y2 += 1)
                      h2.options[y2].trigger = g2.trigger;
                  else
                    h2.trigger = g2.trigger;
                }
                h2.key = u()(24), p2 = l2, l2 = h2, n3.setState({ renderedSteps: a3, currentStep: l2, previousStep: p2 }, function() {
                  h2.user ? n3.setState({ disabled: false }, function() {
                    !t4 && lt() || n3.input && n3.input.focus();
                  }) : (a3.push(h2), i4.push(h2), n3.setState({ renderedSteps: a3, previousSteps: i4 }));
                });
              }
              var m2 = n3.props, S2 = m2.cache, x2 = m2.cacheName;
              S2 && setTimeout(function() {
                Oe(x2, { currentStep: l2, previousStep: p2, previousSteps: i4, renderedSteps: a3 });
              }, 300);
            }), mt(vt(vt(n3)), "handleEnd", function() {
              var e5 = n3.props.handleEnd;
              if (e5) {
                for (var t4 = n3.state.previousSteps, r3 = t4.map(function(e6) {
                  return { id: e6.id, message: e6.message, value: e6.value, metadata: e6.metadata };
                }), o2 = [], i4 = 0, a3 = t4.length; i4 < a3; i4 += 1) {
                  var s2 = t4[i4], u2 = s2.id, c2 = s2.message, l2 = s2.value, p2 = s2.metadata;
                  o2[u2] = { id: u2, message: c2, value: l2, metadata: p2 };
                }
                e5({ renderedSteps: r3, steps: o2, values: t4.filter(function(e6) {
                  return e6.value;
                }).map(function(e6) {
                  return e6.value;
                }) });
              }
            }), mt(vt(vt(n3)), "isInputValueEmpty", function() {
              var e5 = n3.state.inputValue;
              return !e5 || 0 === e5.length;
            }), mt(vt(vt(n3)), "isLastPosition", function(e5) {
              var t4 = n3.state.renderedSteps, r3 = t4.length, o2 = t4.map(function(e6) {
                return e6.key;
              }).indexOf(e5.key);
              if (r3 <= 1 || o2 + 1 === r3)
                return true;
              var i4 = t4[o2 + 1];
              return !i4.message && !i4.asMessage || e5.user !== i4.user;
            }), mt(vt(vt(n3)), "isFirstPosition", function(e5) {
              var t4 = n3.state.renderedSteps, r3 = t4.map(function(e6) {
                return e6.key;
              }).indexOf(e5.key);
              if (0 === r3)
                return true;
              var o2 = t4[r3 - 1];
              return !o2.message && !o2.asMessage || e5.user !== o2.user;
            }), mt(vt(vt(n3)), "handleKeyPress", function(e5) {
              "Enter" === e5.key && n3.submitUserMessage();
            }), mt(vt(vt(n3)), "handleSubmitButton", function() {
              var e5 = n3.state, t4 = e5.speaking, r3 = e5.recognitionEnable;
              if ((n3.isInputValueEmpty() || t4) && r3)
                return n3.recognition.speak(), void (t4 || n3.setState({ speaking: true }));
              n3.submitUserMessage();
            }), mt(vt(vt(n3)), "submitUserMessage", function() {
              var e5 = n3.state, t4 = e5.defaultUserSettings, r3 = e5.inputValue, o2 = e5.previousSteps, i4 = e5.renderedSteps, a3 = n3.state.currentStep;
              a3.validator && n3.checkInvalidInput() || (a3 = bt({}, t4, a3, { message: r3, value: r3 }), i4.push(a3), o2.push(a3), n3.setState({ currentStep: a3, renderedSteps: i4, previousSteps: o2, disabled: true, inputValue: "" }, function() {
                n3.input && n3.input.blur();
              }));
            }), mt(vt(vt(n3)), "checkInvalidInput", function() {
              var e5 = n3.props.enableMobileAutoFocus, t4 = n3.state, r3 = t4.currentStep, o2 = t4.inputValue, i4 = r3.validator(o2), a3 = o2;
              return ("boolean" != typeof i4 || !i4) && (n3.setState({ inputValue: i4.toString(), inputInvalid: true, disabled: true }, function() {
                setTimeout(function() {
                  n3.setState({ inputValue: a3, inputInvalid: false, disabled: false }, function() {
                    !e5 && lt() || n3.input && n3.input.focus();
                  });
                }, 2e3);
              }), true);
            }), mt(vt(vt(n3)), "toggleChatBot", function(e5) {
              var t4 = n3.props.toggleFloating;
              t4 ? t4({ opened: e5 }) : n3.setState({ opened: e5 });
            }), mt(vt(vt(n3)), "renderStep", function(e5, t4) {
              var r3 = n3.state.renderedSteps, i4 = n3.props, a3 = i4.avatarStyle, s2 = i4.bubbleStyle, u2 = i4.bubbleOptionStyle, c2 = i4.customStyle, l2 = i4.hideBotAvatar, p2 = i4.hideUserAvatar, f2 = i4.speechSynthesis, d2 = e5.options, b2 = e5.component, h2 = e5.asMessage, g2 = n3.generateRenderedStepsById(), y2 = t4 > 0 ? r3[t4 - 1] : {};
              return b2 && !h2 ? o.a.createElement(N, { key: t4, speak: n3.speak, step: e5, steps: g2, style: c2, previousStep: y2, previousValue: y2.value, triggerNextStep: n3.triggerNextStep }) : d2 ? o.a.createElement(Z, { key: t4, step: e5, speak: n3.speak, previousValue: y2.value, triggerNextStep: n3.triggerNextStep, bubbleOptionStyle: u2 }) : o.a.createElement(de, { key: t4, step: e5, steps: g2, speak: n3.speak, previousStep: y2, previousValue: y2.value, triggerNextStep: n3.triggerNextStep, avatarStyle: a3, bubbleStyle: s2, hideBotAvatar: l2, hideUserAvatar: p2, speechSynthesis: f2, isFirst: n3.isFirstPosition(e5), isLast: n3.isLastPosition(e5) });
            }), n3.content = null, n3.input = null, n3.supportsScrollBehavior = false, n3.setContentRef = function(e5) {
              n3.content = e5;
            }, n3.setInputRef = function(e5) {
              n3.input = e5;
            }, n3.state = { renderedSteps: [], previousSteps: [], currentStep: {}, previousStep: {}, steps: {}, disabled: true, opened: e4.opened || !e4.floating, inputValue: "", inputInvalid: false, speaking: false, recognitionEnable: e4.recognitionEnable && rt.isSupported(), defaultUserSettings: {} }, n3.speak = ft(e4.speechSynthesis), n3;
          }
          var n2, i2, a2;
          return function(e4, t4) {
            if ("function" != typeof t4 && null !== t4)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t4 && t4.prototype, { constructor: { value: e4, writable: true, configurable: true } }), t4 && yt(e4, t4);
          }(t3, r["Component"]), n2 = t3, a2 = [{ key: "getDerivedStateFromProps", value: function(e4, t4) {
            var n3 = e4.opened;
            return void 0 !== e4.toggleFloating && void 0 !== n3 && n3 !== t4.opened ? function(e5) {
              for (var t5 = 1; t5 < arguments.length; t5++) {
                var n4 = null != arguments[t5] ? arguments[t5] : {}, r2 = Object.keys(n4);
                "function" == typeof Object.getOwnPropertySymbols && (r2 = r2.concat(Object.getOwnPropertySymbols(n4).filter(function(e6) {
                  return Object.getOwnPropertyDescriptor(n4, e6).enumerable;
                }))), r2.forEach(function(t6) {
                  mt(e5, t6, n4[t6]);
                });
              }
              return e5;
            }({}, t4, { opened: n3 }) : t4;
          } }], (i2 = [{ key: "componentDidMount", value: function() {
            for (var e4 = this, t4 = this.props.steps, n3 = this.props, r2 = n3.botDelay, o2 = n3.botAvatar, i3 = n3.cache, a3 = n3.cacheName, s2 = n3.customDelay, u2 = n3.enableMobileAutoFocus, c2 = n3.userAvatar, l2 = {}, p2 = { delay: r2, avatar: o2 }, f2 = { delay: n3.userDelay, avatar: c2, hideInput: false }, d2 = { delay: s2 }, b2 = 0, h2 = t4.length; b2 < h2; b2 += 1) {
              var g2 = t4[b2], y2 = {};
              g2.user ? y2 = f2 : g2.message || g2.asMessage ? y2 = p2 : g2.component && (y2 = d2), l2[g2.id] = bt({}, y2, xe.parse(g2));
            }
            xe.checkInvalidIds(l2);
            var v2 = t4[0];
            if (v2.message) {
              var m2 = v2.message;
              v2.message = "function" == typeof m2 ? m2() : m2, l2[v2.id].message = v2.message;
            }
            var S2 = this.state.recognitionEnable, x2 = this.props.recognitionLang;
            S2 && (this.recognition = new rt(this.onRecognitionChange, this.onRecognitionEnd, this.onRecognitionStop, x2)), this.supportsScrollBehavior = "scrollBehavior" in document.documentElement.style, this.content && (this.content.addEventListener("DOMNodeInserted", this.onNodeInserted), window.addEventListener("resize", this.onResize));
            var O2 = function(e5, t5) {
              var n4 = e5.cacheName, r3 = e5.cache, o3 = e5.firstStep, i4 = e5.steps, a4 = o3, s3 = [i4[a4.id]], u3 = [i4[a4.id]], c3 = localStorage.getItem(n4);
              if (r3 && c3)
                try {
                  var l3 = Object(me.parse)(c3), p3 = l3.renderedSteps[l3.renderedSteps.length - 1];
                  if (!p3 || !p3.end) {
                    for (var f3 = 0, d3 = l3.renderedSteps.length; f3 < d3; f3 += 1) {
                      var b3 = l3.renderedSteps[f3];
                      if (l3.renderedSteps[f3].delay = 0, l3.renderedSteps[f3].rendered = true, b3.component) {
                        var h3 = b3.id;
                        l3.renderedSteps[f3].component = i4[h3].component;
                      }
                    }
                    var g3 = l3.currentStep, y3 = g3.trigger, v3 = g3.end, m3 = g3.options, S3 = l3.currentStep.id;
                    if (m3 && delete l3.currentStep.rendered, !y3 && !v3)
                      if (m3)
                        for (var x3 = 0; x3 < m3.length; x3 += 1)
                          l3.currentStep.options[x3].trigger = i4[S3].options[x3].trigger;
                      else
                        l3.currentStep.trigger = i4[S3].trigger;
                    return l3.currentStep.user && t5(), l3;
                  }
                  localStorage.removeItem(n4);
                } catch (e6) {
                  console.info("Unable to parse cache named:".concat(n4, ". \nThe cache where probably created with an older version of react-simple-chatbot.\n"), e6);
                }
              return { currentStep: a4, previousStep: {}, previousSteps: u3, renderedSteps: s3 };
            }({ cacheName: a3, cache: i3, firstStep: v2, steps: l2 }, function() {
              e4.setState({ disabled: false }, function() {
                !u2 && lt() || e4.input && e4.input.focus();
              });
            }), w2 = O2.currentStep, j2 = O2.previousStep, k2 = O2.previousSteps, E2 = O2.renderedSteps;
            this.setState({ currentStep: w2, defaultUserSettings: f2, previousStep: j2, previousSteps: k2, renderedSteps: E2, steps: l2 });
          } }, { key: "componentWillUnmount", value: function() {
            this.content && (this.content.removeEventListener("DOMNodeInserted", this.onNodeInserted), window.removeEventListener("resize", this.onResize));
          } }, { key: "render", value: function() {
            var e4 = this, t4 = this.state, n3 = t4.currentStep, r2 = t4.disabled, i3 = t4.inputInvalid, a3 = t4.inputValue, s2 = t4.opened, u2 = t4.renderedSteps, c2 = t4.speaking, l2 = t4.recognitionEnable, p2 = this.props, f2 = p2.className, d2 = p2.contentStyle, b2 = p2.floating, h2 = p2.floatingIcon, g2 = p2.floatingStyle, y2 = p2.footerStyle, v2 = p2.headerComponent, m2 = p2.headerTitle, S2 = p2.hideHeader, x2 = p2.hideSubmitButton, O2 = p2.inputStyle, w2 = p2.placeholder, j2 = p2.inputAttributes, k2 = p2.recognitionPlaceholder, E2 = p2.style, P2 = p2.submitButtonStyle, z2 = p2.width, q2 = p2.height, C2 = v2 || o.a.createElement(Ce, { className: "rsc-header" }, o.a.createElement(Ie, { className: "rsc-header-title" }, m2), b2 && o.a.createElement(Te, { className: "rsc-header-close-button", onClick: function() {
              return e4.toggleChatBot(false);
            } }, o.a.createElement(it, null))), R2 = (this.isInputValueEmpty() || c2) && l2 ? o.a.createElement(ct, null) : o.a.createElement(st, null), N2 = c2 ? k2 : n3.placeholder || w2, I2 = n3.inputAttributes || j2;
            return o.a.createElement("div", { className: "rsc ".concat(f2) }, b2 && o.a.createElement(Be, { className: "rsc-float-button", style: g2, opened: s2, onClick: function() {
              return e4.toggleChatBot(true);
            } }, "string" == typeof h2 ? o.a.createElement(Ve, { src: h2 }) : h2), o.a.createElement(ke, { className: "rsc-container", floating: b2, floatingStyle: g2, opened: s2, style: E2, width: z2, height: q2 }, !S2 && C2, o.a.createElement(Pe, { className: "rsc-content", ref: this.setContentRef, floating: b2, style: d2, height: q2, hideInput: n3.hideInput }, u2.map(this.renderStep)), o.a.createElement(De, { className: "rsc-footer", style: y2 }, !n3.hideInput && o.a.createElement(Je, bt({ type: "textarea", style: O2, ref: this.setInputRef, className: "rsc-input", placeholder: i3 ? "" : N2, onKeyPress: this.handleKeyPress, onChange: this.onValueChange, value: a3, floating: b2, invalid: i3, disabled: r2, hasButton: !x2 }, I2)), !n3.hideInput && !x2 && o.a.createElement(Ge, { className: "rsc-submit-button", style: P2, onClick: this.handleSubmitButton, invalid: i3, disabled: r2, speaking: c2 }, R2))));
          } }]) && ht(n2.prototype, i2), a2 && ht(n2, a2), t3;
        }();
        St.propTypes = { avatarStyle: a.a.objectOf(a.a.any), botAvatar: a.a.string, botDelay: a.a.number, bubbleOptionStyle: a.a.objectOf(a.a.any), bubbleStyle: a.a.objectOf(a.a.any), cache: a.a.bool, cacheName: a.a.string, className: a.a.string, contentStyle: a.a.objectOf(a.a.any), customDelay: a.a.number, customStyle: a.a.objectOf(a.a.any), enableMobileAutoFocus: a.a.bool, enableSmoothScroll: a.a.bool, floating: a.a.bool, floatingIcon: a.a.oneOfType([a.a.string, a.a.element]), floatingStyle: a.a.objectOf(a.a.any), footerStyle: a.a.objectOf(a.a.any), handleEnd: a.a.func, headerComponent: a.a.element, headerTitle: a.a.string, height: a.a.string, hideBotAvatar: a.a.bool, hideHeader: a.a.bool, hideSubmitButton: a.a.bool, hideUserAvatar: a.a.bool, inputAttributes: a.a.objectOf(a.a.any), inputStyle: a.a.objectOf(a.a.any), opened: a.a.bool, toggleFloating: a.a.func, placeholder: a.a.string, recognitionEnable: a.a.bool, recognitionLang: a.a.string, recognitionPlaceholder: a.a.string, speechSynthesis: a.a.shape({ enable: a.a.bool, lang: a.a.string, voice: "undefined" != typeof window ? a.a.instanceOf(window.SpeechSynthesisVoice) : a.a.any }), steps: a.a.arrayOf(a.a.object).isRequired, style: a.a.objectOf(a.a.any), submitButtonStyle: a.a.objectOf(a.a.any), userAvatar: a.a.string, userDelay: a.a.number, width: a.a.string }, St.defaultProps = { avatarStyle: {}, botDelay: 1e3, bubbleOptionStyle: {}, bubbleStyle: {}, cache: false, cacheName: "rsc_cache", className: "", contentStyle: {}, customStyle: {}, customDelay: 1e3, enableMobileAutoFocus: false, enableSmoothScroll: false, floating: false, floatingIcon: o.a.createElement(ot, null), floatingStyle: {}, footerStyle: {}, handleEnd: void 0, headerComponent: void 0, headerTitle: "Chat", height: "520px", hideBotAvatar: false, hideHeader: false, hideSubmitButton: false, hideUserAvatar: false, inputStyle: {}, opened: void 0, placeholder: "Type the message ...", inputAttributes: {}, recognitionEnable: false, recognitionLang: "en", recognitionPlaceholder: "Listening ...", speechSynthesis: { enable: false, lang: "en", voice: null }, style: {}, submitButtonStyle: {}, toggleFloating: void 0, userDelay: 1e3, width: "350px", botAvatar: "data:image/svg+xml,%3csvg version='1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath d='M303 70a47 47 0 1 0-70 40v84h46v-84c14-8 24-23 24-40z' fill='%2393c7ef'/%3e%3cpath d='M256 23v171h23v-84a47 47 0 0 0-23-87z' fill='%235a8bb0'/%3e%3cpath fill='%2393c7ef' d='M0 240h248v124H0z'/%3e%3cpath fill='%235a8bb0' d='M264 240h248v124H264z'/%3e%3cpath fill='%2393c7ef' d='M186 365h140v124H186z'/%3e%3cpath fill='%235a8bb0' d='M256 365h70v124h-70z'/%3e%3cpath fill='%23cce9f9' d='M47 163h419v279H47z'/%3e%3cpath fill='%2393c7ef' d='M256 163h209v279H256z'/%3e%3cpath d='M194 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%233c5d76'/%3e%3cpath d='M380 272a31 31 0 0 1-62 0c0-18 14-32 31-32s31 14 31 32z' fill='%231e2e3b'/%3e%3cpath d='M186 349a70 70 0 1 0 140 0H186z' fill='%233c5d76'/%3e%3cpath d='M256 349v70c39 0 70-31 70-70h-70z' fill='%231e2e3b'/%3e%3c/svg%3e", userAvatar: "data:image/svg+xml,%3csvg viewBox='-208.5 21 100 100' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3ccircle cx='-158.5' cy='71' fill='%23F5EEE5' r='50'/%3e%3cdefs%3e%3ccircle cx='-158.5' cy='71' id='a' r='50'/%3e%3c/defs%3e%3cclipPath id='b'%3e%3cuse overflow='visible' xlink:href='%23a'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23b)' d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' fill='%23E6C19C'/%3e%3cg clip-path='url(%23b)'%3e%3cdefs%3e%3cpath d='M-108.5 121v-14s-21.2-4.9-28-6.7c-2.5-.7-7-3.3-7-12V82h-30v6.3c0 8.7-4.5 11.3-7 12-6.8 1.9-28.1 7.3-28.1 6.7v14h100.1z' id='c'/%3e%3c/defs%3e%3cclipPath id='d'%3e%3cuse overflow='visible' xlink:href='%23c'/%3e%3c/clipPath%3e%3cpath clip-path='url(%23d)' d='M-158.5 100.1c12.7 0 23-18.6 23-34.4 0-16.2-10.3-24.7-23-24.7s-23 8.5-23 24.7c0 15.8 10.3 34.4 23 34.4z' fill='%23D4B08C'/%3e%3c/g%3e%3cpath d='M-158.5 96c12.7 0 23-16.3 23-31 0-15.1-10.3-23-23-23s-23 7.9-23 23c0 14.7 10.3 31 23 31z' fill='%23F2CEA5'/%3e%3c/svg%3e" };
        var xt = St;
        n.d(t2, "Loading", function() {
          return O;
        });
        t2.default = xt;
      }]);
    });
  }
});
export default require_react_simple_chatbot();
/*! Bundled license information:

react/cjs/react.development.js:
  (** @license React v16.14.0
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-simple-chatbot.js.map
