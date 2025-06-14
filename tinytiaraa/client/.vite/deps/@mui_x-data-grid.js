import {
  Autocomplete_default,
  Badge_default,
  Box_default,
  Button_default,
  Checkbox_default,
  Chip_default,
  CircularProgress_default,
  ClickAwayListener,
  Divider_default,
  FocusTrap,
  FormControlLabel_default,
  FormControl_default,
  IconButton_default,
  InputAdornment_default,
  InputBase_default,
  InputLabel_default,
  ListItemIcon_default,
  ListItemText_default,
  MenuItem_default,
  MenuList_default,
  Select_default,
  Skeleton_default,
  TablePagination_default,
  TextField_default,
  createFilterOptions,
  tablePaginationClasses_default
} from "./chunk-E3WX4JLV.js";
import {
  Paper_default
} from "./chunk-4N4NWWBN.js";
import "./chunk-EHQ6UD6X.js";
import "./chunk-KPPHE4SP.js";
import {
  init_utils
} from "./chunk-HJ2EAFY5.js";
import {
  Grow_default,
  Popper_default,
  Tooltip_default
} from "./chunk-TTKVHNE3.js";
import "./chunk-F4LY6OQF.js";
import "./chunk-FJ5ZCU45.js";
import {
  useTheme
} from "./chunk-OVGEEQS2.js";
import {
  useId_default
} from "./chunk-4CHPHOX4.js";
import "./chunk-UV4EYATC.js";
import "./chunk-SQTMZQAX.js";
import {
  createSvgIcon
} from "./chunk-FY4S4YXP.js";
import "./chunk-ECB2FHIW.js";
import "./chunk-JCSBCRLN.js";
import "./chunk-K6NIKVHO.js";
import "./chunk-FRJVRJMG.js";
import {
  alpha,
  darken,
  decomposeColor,
  lighten,
  recomposeColor,
  styled_default as styled_default2,
  toPropertyKey
} from "./chunk-QZUOHAA4.js";
import {
  HTMLElementType,
  debounce,
  init_esm,
  init_useEventCallback,
  init_useLazyRef,
  init_useOnMount,
  init_useTimeout,
  ownerDocument,
  ownerWindow,
  refType_default,
  useEnhancedEffect_default,
  useEventCallback_default,
  useForkRef,
  useId,
  useLazyRef,
  useOnMount,
  useTimeout
} from "./chunk-5L7R4VHS.js";
import {
  _objectWithoutPropertiesLoose,
  capitalize,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_composeClasses,
  init_objectWithoutPropertiesLoose,
  styled_default,
  useThemeProps2 as useThemeProps
} from "./chunk-475QMDJW.js";
import "./chunk-MZYC7WT3.js";
import {
  require_jsx_runtime
} from "./chunk-4H4SQ6Q4.js";
import {
  require_prop_types
} from "./chunk-ZDJ5DOYT.js";
import "./chunk-TMKJMMJP.js";
import {
  _extends,
  init_extends
} from "./chunk-XJDNAA4J.js";
import {
  require_react_dom
} from "./chunk-OZKHX4TQ.js";
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

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiContext.js
var React2 = __toESM(require_react());

// node_modules/@mui/x-data-grid/components/GridApiContext.js
var React = __toESM(require_react());
var GridApiContext = React.createContext(void 0);
if (true) {
  GridApiContext.displayName = "GridApiContext";
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiContext.js
function useGridApiContext() {
  const apiRef = React2.useContext(GridApiContext);
  if (apiRef === void 0) {
    throw new Error(["MUI X: Could not find the data grid context.", "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.", "This can also happen if you are bundling multiple versions of the data grid."].join("\n"));
  }
  return apiRef;
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiRef.js
var React3 = __toESM(require_react());
var useGridApiRef = () => React3.useRef({});

// node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js
var React5 = __toESM(require_react());

// node_modules/@mui/x-data-grid/context/GridRootPropsContext.js
var React4 = __toESM(require_react());
var GridRootPropsContext = React4.createContext(void 0);
if (true) {
  GridRootPropsContext.displayName = "GridRootPropsContext";
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridRootProps.js
var useGridRootProps = () => {
  const contextValue = React5.useContext(GridRootPropsContext);
  if (!contextValue) {
    throw new Error("MUI X: useGridRootProps should only be used inside the DataGrid, DataGridPro or DataGridPremium component.");
  }
  return contextValue;
};

// node_modules/@mui/x-data-grid/DataGrid/DataGrid.js
init_extends();
var React148 = __toESM(require_react());
var import_prop_types61 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScroller.js
init_extends();
var React45 = __toESM(require_react());
init_esm();

// node_modules/@mui/x-data-grid/components/GridScrollArea.js
init_extends();
var React31 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-data-grid/constants/envConstants.js
var GRID_EXPERIMENTAL_ENABLED = false;

// node_modules/@mui/x-data-grid/constants/localeTextConstants.js
var GRID_DEFAULT_LOCALE_TEXT = {
  // Root
  noRowsLabel: "No rows",
  noResultsOverlayLabel: "No results found.",
  // Density selector toolbar button text
  toolbarDensity: "Density",
  toolbarDensityLabel: "Density",
  toolbarDensityCompact: "Compact",
  toolbarDensityStandard: "Standard",
  toolbarDensityComfortable: "Comfortable",
  // Columns selector toolbar button text
  toolbarColumns: "Columns",
  toolbarColumnsLabel: "Select columns",
  // Filters toolbar button text
  toolbarFilters: "Filters",
  toolbarFiltersLabel: "Show filters",
  toolbarFiltersTooltipHide: "Hide filters",
  toolbarFiltersTooltipShow: "Show filters",
  toolbarFiltersTooltipActive: (count) => count !== 1 ? `${count} active filters` : `${count} active filter`,
  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: "Search…",
  toolbarQuickFilterLabel: "Search",
  toolbarQuickFilterDeleteIconLabel: "Clear",
  // Export selector toolbar button text
  toolbarExport: "Export",
  toolbarExportLabel: "Export",
  toolbarExportCSV: "Download as CSV",
  toolbarExportPrint: "Print",
  toolbarExportExcel: "Download as Excel",
  // Columns management text
  columnsManagementSearchTitle: "Search",
  columnsManagementNoColumns: "No columns",
  columnsManagementShowHideAllText: "Show/Hide All",
  columnsManagementReset: "Reset",
  // Filter panel text
  filterPanelAddFilter: "Add filter",
  filterPanelRemoveAll: "Remove all",
  filterPanelDeleteIconLabel: "Delete",
  filterPanelLogicOperator: "Logic operator",
  filterPanelOperator: "Operator",
  filterPanelOperatorAnd: "And",
  filterPanelOperatorOr: "Or",
  filterPanelColumns: "Columns",
  filterPanelInputLabel: "Value",
  filterPanelInputPlaceholder: "Filter value",
  // Filter operators text
  filterOperatorContains: "contains",
  filterOperatorEquals: "equals",
  filterOperatorStartsWith: "starts with",
  filterOperatorEndsWith: "ends with",
  filterOperatorIs: "is",
  filterOperatorNot: "is not",
  filterOperatorAfter: "is after",
  filterOperatorOnOrAfter: "is on or after",
  filterOperatorBefore: "is before",
  filterOperatorOnOrBefore: "is on or before",
  filterOperatorIsEmpty: "is empty",
  filterOperatorIsNotEmpty: "is not empty",
  filterOperatorIsAnyOf: "is any of",
  "filterOperator=": "=",
  "filterOperator!=": "!=",
  "filterOperator>": ">",
  "filterOperator>=": ">=",
  "filterOperator<": "<",
  "filterOperator<=": "<=",
  // Header filter operators text
  headerFilterOperatorContains: "Contains",
  headerFilterOperatorEquals: "Equals",
  headerFilterOperatorStartsWith: "Starts with",
  headerFilterOperatorEndsWith: "Ends with",
  headerFilterOperatorIs: "Is",
  headerFilterOperatorNot: "Is not",
  headerFilterOperatorAfter: "Is after",
  headerFilterOperatorOnOrAfter: "Is on or after",
  headerFilterOperatorBefore: "Is before",
  headerFilterOperatorOnOrBefore: "Is on or before",
  headerFilterOperatorIsEmpty: "Is empty",
  headerFilterOperatorIsNotEmpty: "Is not empty",
  headerFilterOperatorIsAnyOf: "Is any of",
  "headerFilterOperator=": "Equals",
  "headerFilterOperator!=": "Not equals",
  "headerFilterOperator>": "Greater than",
  "headerFilterOperator>=": "Greater than or equal to",
  "headerFilterOperator<": "Less than",
  "headerFilterOperator<=": "Less than or equal to",
  // Filter values text
  filterValueAny: "any",
  filterValueTrue: "true",
  filterValueFalse: "false",
  // Column menu text
  columnMenuLabel: "Menu",
  columnMenuShowColumns: "Show columns",
  columnMenuManageColumns: "Manage columns",
  columnMenuFilter: "Filter",
  columnMenuHideColumn: "Hide column",
  columnMenuUnsort: "Unsort",
  columnMenuSortAsc: "Sort by ASC",
  columnMenuSortDesc: "Sort by DESC",
  // Column header text
  columnHeaderFiltersTooltipActive: (count) => count !== 1 ? `${count} active filters` : `${count} active filter`,
  columnHeaderFiltersLabel: "Show filters",
  columnHeaderSortIconLabel: "Sort",
  // Rows selected footer text
  footerRowSelected: (count) => count !== 1 ? `${count.toLocaleString()} rows selected` : `${count.toLocaleString()} row selected`,
  // Total row amount footer text
  footerTotalRows: "Total Rows:",
  // Total visible row amount footer text
  footerTotalVisibleRows: (visibleCount, totalCount) => `${visibleCount.toLocaleString()} of ${totalCount.toLocaleString()}`,
  // Checkbox selection text
  checkboxSelectionHeaderName: "Checkbox selection",
  checkboxSelectionSelectAllRows: "Select all rows",
  checkboxSelectionUnselectAllRows: "Unselect all rows",
  checkboxSelectionSelectRow: "Select row",
  checkboxSelectionUnselectRow: "Unselect row",
  // Boolean cell text
  booleanCellTrueLabel: "yes",
  booleanCellFalseLabel: "no",
  // Actions cell more text
  actionsCellMore: "more",
  // Column pinning text
  pinToLeft: "Pin to left",
  pinToRight: "Pin to right",
  unpin: "Unpin",
  // Tree Data
  treeDataGroupingHeaderName: "Group",
  treeDataExpand: "see children",
  treeDataCollapse: "hide children",
  // Grouping columns
  groupingColumnHeaderName: "Group",
  groupColumn: (name) => `Group by ${name}`,
  unGroupColumn: (name) => `Stop grouping by ${name}`,
  // Master/detail
  detailPanelToggle: "Detail panel toggle",
  expandDetailPanel: "Expand",
  collapseDetailPanel: "Collapse",
  // Used core components translation keys
  MuiTablePagination: {},
  // Row reordering text
  rowReorderingHeaderName: "Row reordering",
  // Aggregation
  aggregationMenuItemHeader: "Aggregation",
  aggregationFunctionLabelSum: "sum",
  aggregationFunctionLabelAvg: "avg",
  aggregationFunctionLabelMin: "min",
  aggregationFunctionLabelMax: "max",
  aggregationFunctionLabelSize: "size"
};

// node_modules/@mui/x-data-grid/constants/gridClasses.js
init_esm();
function getDataGridUtilityClass(slot) {
  return generateUtilityClass("MuiDataGrid", slot);
}
var gridClasses = generateUtilityClasses("MuiDataGrid", ["actionsCell", "aggregationColumnHeader", "aggregationColumnHeader--alignLeft", "aggregationColumnHeader--alignCenter", "aggregationColumnHeader--alignRight", "aggregationColumnHeaderLabel", "autoHeight", "autosizing", "booleanCell", "cell--editable", "cell--editing", "cell--flex", "cell--textCenter", "cell--textLeft", "cell--textRight", "cell--rangeTop", "cell--rangeBottom", "cell--rangeLeft", "cell--rangeRight", "cell--pinnedLeft", "cell--pinnedRight", "cell--selectionMode", "cell", "cellCheckbox", "cellEmpty", "cellSkeleton", "cellOffsetLeft", "checkboxInput", "columnHeader", "columnHeader--alignCenter", "columnHeader--alignLeft", "columnHeader--alignRight", "columnHeader--dragging", "columnHeader--moving", "columnHeader--numeric", "columnHeader--sortable", "columnHeader--sorted", "columnHeader--filtered", "columnHeader--pinnedLeft", "columnHeader--pinnedRight", "columnHeader--last", "columnHeaderCheckbox", "columnHeaderDraggableContainer", "columnHeaderTitle", "columnHeaderTitleContainer", "columnHeaderTitleContainerContent", "columnHeader--filledGroup", "columnHeader--emptyGroup", "columnHeaders", "columnSeparator--resizable", "columnSeparator--resizing", "columnSeparator--sideLeft", "columnSeparator--sideRight", "columnSeparator", "columnsManagement", "columnsManagementRow", "columnsManagementHeader", "columnsManagementFooter", "container--top", "container--bottom", "detailPanel", "detailPanels", "detailPanelToggleCell", "detailPanelToggleCell--expanded", "footerCell", "panel", "panelHeader", "panelWrapper", "panelContent", "panelFooter", "paper", "editBooleanCell", "editInputCell", "filler", "filler--borderTop", "filler--pinnedLeft", "filler--pinnedRight", "filterForm", "filterFormDeleteIcon", "filterFormLogicOperatorInput", "filterFormColumnInput", "filterFormOperatorInput", "filterFormValueInput", "filterIcon", "footerContainer", "headerFilterRow", "iconButtonContainer", "iconSeparator", "main", "main--hasPinnedRight", "menu", "menuIcon", "menuIconButton", "menuOpen", "menuList", "overlay", "overlayWrapper", "overlayWrapperInner", "root", "root--densityStandard", "root--densityComfortable", "root--densityCompact", "root--disableUserSelection", "row", "row--editable", "row--editing", "row--firstVisible", "row--lastVisible", "row--dragging", "row--dynamicHeight", "row--detailPanelExpanded", "rowReorderCellPlaceholder", "rowCount", "rowReorderCellContainer", "rowReorderCell", "rowReorderCell--draggable", "scrollArea--left", "scrollArea--right", "scrollArea", "scrollbar", "scrollbar--vertical", "scrollbar--horizontal", "scrollbarFiller", "scrollbarFiller--header", "scrollbarFiller--borderTop", "scrollbarFiller--pinnedRight", "selectedRowCount", "sortIcon", "toolbarContainer", "toolbarFilterList", "virtualScroller", "virtualScrollerContent", "virtualScrollerContent--overflowed", "virtualScrollerRenderZone", "pinnedColumns", "withVerticalBorder", "withBorderColor", "cell--withRightBorder", "cell--withLeftBorder", "columnHeader--withRightBorder", "columnHeader--withLeftBorder", "treeDataGroupingCell", "treeDataGroupingCellToggle", "groupingCriteriaCell", "groupingCriteriaCellToggle", "pinnedRows", "pinnedRows--top", "pinnedRows--bottom", "pinnedRowsRenderZone"]);

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiEventHandler.js
var React6 = __toESM(require_react());

// node_modules/@mui/x-data-grid/utils/cleanupTracking/TimerBasedCleanupTracking.js
var CLEANUP_TIMER_LOOP_MILLIS = 1e3;
var TimerBasedCleanupTracking = class {
  constructor(timeout = CLEANUP_TIMER_LOOP_MILLIS) {
    this.timeouts = /* @__PURE__ */ new Map();
    this.cleanupTimeout = CLEANUP_TIMER_LOOP_MILLIS;
    this.cleanupTimeout = timeout;
  }
  register(object, unsubscribe, unregisterToken) {
    if (!this.timeouts) {
      this.timeouts = /* @__PURE__ */ new Map();
    }
    const timeout = setTimeout(() => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
      this.timeouts.delete(unregisterToken.cleanupToken);
    }, this.cleanupTimeout);
    this.timeouts.set(unregisterToken.cleanupToken, timeout);
  }
  unregister(unregisterToken) {
    const timeout = this.timeouts.get(unregisterToken.cleanupToken);
    if (timeout) {
      this.timeouts.delete(unregisterToken.cleanupToken);
      clearTimeout(timeout);
    }
  }
  reset() {
    if (this.timeouts) {
      this.timeouts.forEach((value, key) => {
        this.unregister({
          cleanupToken: key
        });
      });
      this.timeouts = void 0;
    }
  }
};

// node_modules/@mui/x-data-grid/utils/cleanupTracking/FinalizationRegistryBasedCleanupTracking.js
var FinalizationRegistryBasedCleanupTracking = class {
  constructor() {
    this.registry = new FinalizationRegistry((unsubscribe) => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    });
  }
  register(object, unsubscribe, unregisterToken) {
    this.registry.register(object, unsubscribe, unregisterToken);
  }
  unregister(unregisterToken) {
    this.registry.unregister(unregisterToken);
  }
  // eslint-disable-next-line class-methods-use-this
  reset() {
  }
};

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiEventHandler.js
var GridSignature = function(GridSignature2) {
  GridSignature2["DataGrid"] = "DataGrid";
  GridSignature2["DataGridPro"] = "DataGridPro";
  return GridSignature2;
}(GridSignature || {});
var ObjectToBeRetainedByReact = class {
};
function createUseGridApiEventHandler(registryContainer2) {
  let cleanupTokensCounter = 0;
  return function useGridApiEventHandler2(apiRef, eventName, handler, options) {
    if (registryContainer2.registry === null) {
      registryContainer2.registry = typeof FinalizationRegistry !== "undefined" ? new FinalizationRegistryBasedCleanupTracking() : new TimerBasedCleanupTracking();
    }
    const [objectRetainedByReact] = React6.useState(new ObjectToBeRetainedByReact());
    const subscription = React6.useRef(null);
    const handlerRef = React6.useRef();
    handlerRef.current = handler;
    const cleanupTokenRef = React6.useRef(null);
    if (!subscription.current && handlerRef.current) {
      const enhancedHandler = (params, event, details) => {
        var _a;
        if (!event.defaultMuiPrevented) {
          (_a = handlerRef.current) == null ? void 0 : _a.call(handlerRef, params, event, details);
        }
      };
      subscription.current = apiRef.current.subscribeEvent(eventName, enhancedHandler, options);
      cleanupTokensCounter += 1;
      cleanupTokenRef.current = {
        cleanupToken: cleanupTokensCounter
      };
      registryContainer2.registry.register(
        objectRetainedByReact,
        // The callback below will be called once this reference stops being retained
        () => {
          var _a;
          (_a = subscription.current) == null ? void 0 : _a.call(subscription);
          subscription.current = null;
          cleanupTokenRef.current = null;
        },
        cleanupTokenRef.current
      );
    } else if (!handlerRef.current && subscription.current) {
      subscription.current();
      subscription.current = null;
      if (cleanupTokenRef.current) {
        registryContainer2.registry.unregister(cleanupTokenRef.current);
        cleanupTokenRef.current = null;
      }
    }
    React6.useEffect(() => {
      if (!subscription.current && handlerRef.current) {
        const enhancedHandler = (params, event, details) => {
          var _a;
          if (!event.defaultMuiPrevented) {
            (_a = handlerRef.current) == null ? void 0 : _a.call(handlerRef, params, event, details);
          }
        };
        subscription.current = apiRef.current.subscribeEvent(eventName, enhancedHandler, options);
      }
      if (cleanupTokenRef.current && registryContainer2.registry) {
        registryContainer2.registry.unregister(cleanupTokenRef.current);
        cleanupTokenRef.current = null;
      }
      return () => {
        var _a;
        (_a = subscription.current) == null ? void 0 : _a.call(subscription);
        subscription.current = null;
      };
    }, [apiRef, eventName, options]);
  };
}
var registryContainer = {
  registry: null
};
var unstable_resetCleanupTracking = () => {
  var _a;
  (_a = registryContainer.registry) == null ? void 0 : _a.reset();
  registryContainer.registry = null;
};
var useGridApiEventHandler = createUseGridApiEventHandler(registryContainer);
var optionsSubscriberOptions = {
  isFirst: true
};
function useGridApiOptionHandler(apiRef, eventName, handler) {
  useGridApiEventHandler(apiRef, eventName, handler, optionsSubscriberOptions);
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js
var React7 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/utils/useLazyRef.js
init_useLazyRef();

// node_modules/@mui/x-data-grid/hooks/utils/useOnMount.js
init_useOnMount();

// node_modules/@mui/x-data-grid/utils/warning.js
var buildWarning = (message, gravity = "warning") => {
  let alreadyWarned = false;
  const cleanMessage = Array.isArray(message) ? message.join("\n") : message;
  return () => {
    if (!alreadyWarned) {
      alreadyWarned = true;
      if (gravity === "error") {
        console.error(cleanMessage);
      } else {
        console.warn(cleanMessage);
      }
    }
  };
};

// node_modules/@mui/x-data-grid/utils/fastObjectShallowCompare.js
var is = Object.is;
function fastObjectShallowCompare(a, b) {
  if (a === b) {
    return true;
  }
  if (!(a instanceof Object) || !(b instanceof Object)) {
    return false;
  }
  let aLength = 0;
  let bLength = 0;
  for (const key in a) {
    aLength += 1;
    if (!is(a[key], b[key])) {
      return false;
    }
    if (!(key in b)) {
      return false;
    }
  }
  for (const _ in b) {
    bLength += 1;
  }
  return aLength === bLength;
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js
var stateNotInitializedWarning = buildWarning(["MUI X: `useGridSelector` has been called before the initialization of the state.", "This hook can only be used inside the context of the grid."]);
function isOutputSelector(selector) {
  return selector.acceptsApiRef;
}
function applySelector(apiRef, selector) {
  if (isOutputSelector(selector)) {
    return selector(apiRef);
  }
  return selector(apiRef.current.state);
}
var defaultCompare = Object.is;
var objectShallowCompare = fastObjectShallowCompare;
var createRefs = () => ({
  state: null,
  equals: null,
  selector: null
});
var useGridSelector = (apiRef, selector, equals = defaultCompare) => {
  if (true) {
    if (!apiRef.current.state) {
      stateNotInitializedWarning();
    }
  }
  const refs = useLazyRef(createRefs);
  const didInit = refs.current.selector !== null;
  const [state, setState] = React7.useState(
    // We don't use an initialization function to avoid allocations
    didInit ? null : applySelector(apiRef, selector)
  );
  refs.current.state = state;
  refs.current.equals = equals;
  refs.current.selector = selector;
  useOnMount(() => {
    return apiRef.current.store.subscribe(() => {
      const newState = applySelector(apiRef, refs.current.selector);
      if (!refs.current.equals(refs.current.state, newState)) {
        refs.current.state = newState;
        setState(newState);
      }
    });
  });
  return state;
};

// node_modules/@mui/x-data-grid/hooks/features/dimensions/gridDimensionsSelectors.js
var gridDimensionsSelector = (state) => state.dimensions;

// node_modules/@mui/x-data-grid/node_modules/reselect/es/defaultMemoize.js
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  var entries = [];
  function get(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return {
    get,
    put,
    getEntries,
    clear
  };
}
var defaultEqualityCheck = function defaultEqualityCheck2(a, b) {
  return a === b;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
    return true;
  };
}
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache2 = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache2.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache2.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache2.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = function() {
    return cache2.clear();
  };
  return memoized;
}

// node_modules/@mui/x-data-grid/node_modules/reselect/es/index.js
function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector3 = function createSelector4() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(void 0, [function recomputationWrapper() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions));
    var selector = memoize(function dependenciesChecker() {
      var params = [];
      var length = dependencies.length;
      for (var i = 0; i < length; i++) {
        params.push(dependencies[i].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  };
  return createSelector3;
}
var createSelector = createSelectorCreator(defaultMemoize);

// node_modules/@mui/x-data-grid/utils/createSelector.js
var cache = /* @__PURE__ */ new WeakMap();
var missingInstanceIdWarning = buildWarning(["MUI X: A selector was called without passing the instance ID, which may impact the performance of the grid.", "To fix, call it with `apiRef`, for example `mySelector(apiRef)`, or pass the instance ID explicitly, for example `mySelector(state, apiRef.current.instanceId)`."]);
function checkIsAPIRef(value) {
  return "current" in value && "instanceId" in value.current;
}
var DEFAULT_INSTANCE_ID = {
  id: "default"
};
var createSelector2 = (a, b, c, d, e, f, ...rest) => {
  if (rest.length > 0) {
    throw new Error("Unsupported number of selectors");
  }
  let selector;
  if (a && b && c && d && e && f) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      const vb = b(state, instanceId);
      const vc = c(state, instanceId);
      const vd = d(state, instanceId);
      const ve = e(state, instanceId);
      return f(va, vb, vc, vd, ve);
    };
  } else if (a && b && c && d && e) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      const vb = b(state, instanceId);
      const vc = c(state, instanceId);
      const vd = d(state, instanceId);
      return e(va, vb, vc, vd);
    };
  } else if (a && b && c && d) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      const vb = b(state, instanceId);
      const vc = c(state, instanceId);
      return d(va, vb, vc);
    };
  } else if (a && b && c) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      const vb = b(state, instanceId);
      return c(va, vb);
    };
  } else if (a && b) {
    selector = (stateOrApiRef, instanceIdParam) => {
      const isAPIRef = checkIsAPIRef(stateOrApiRef);
      const instanceId = instanceIdParam ?? (isAPIRef ? stateOrApiRef.current.instanceId : DEFAULT_INSTANCE_ID);
      const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
      const va = a(state, instanceId);
      return b(va);
    };
  } else {
    throw new Error("Missing arguments");
  }
  selector.acceptsApiRef = true;
  return selector;
};
var createSelectorMemoized = (...args) => {
  const selector = (stateOrApiRef, instanceId) => {
    const isAPIRef = checkIsAPIRef(stateOrApiRef);
    const cacheKey = isAPIRef ? stateOrApiRef.current.instanceId : instanceId ?? DEFAULT_INSTANCE_ID;
    const state = isAPIRef ? stateOrApiRef.current.state : stateOrApiRef;
    if (true) {
      if (cacheKey.id === "default") {
        missingInstanceIdWarning();
      }
    }
    const cacheArgsInit = cache.get(cacheKey);
    const cacheArgs = cacheArgsInit ?? /* @__PURE__ */ new Map();
    const cacheFn = cacheArgs == null ? void 0 : cacheArgs.get(args);
    if (cacheArgs && cacheFn) {
      return cacheFn(state, cacheKey);
    }
    const fn = createSelector(...args);
    if (!cacheArgsInit) {
      cache.set(cacheKey, cacheArgs);
    }
    cacheArgs.set(args, fn);
    return fn(state, cacheKey);
  };
  selector.acceptsApiRef = true;
  return selector;
};

// node_modules/@mui/x-data-grid/hooks/features/density/densitySelector.js
var COMPACT_DENSITY_FACTOR = 0.7;
var COMFORTABLE_DENSITY_FACTOR = 1.3;
var DENSITY_FACTORS = {
  compact: COMPACT_DENSITY_FACTOR,
  comfortable: COMFORTABLE_DENSITY_FACTOR,
  standard: 1
};
var gridDensitySelector = (state) => state.density;
var gridDensityFactorSelector = createSelector2(gridDensitySelector, (density) => DENSITY_FACTORS[density]);

// node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsInterfaces.js
var GridPinnedColumnPosition = function(GridPinnedColumnPosition2) {
  GridPinnedColumnPosition2["LEFT"] = "left";
  GridPinnedColumnPosition2["RIGHT"] = "right";
  return GridPinnedColumnPosition2;
}({});
var EMPTY_PINNED_COLUMN_FIELDS = {
  left: [],
  right: []
};

// node_modules/@mui/x-data-grid/hooks/core/gridCoreSelector.js
var gridThemeSelector = (state) => state.theme;

// node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsSelector.js
var gridColumnsStateSelector = (state) => state.columns;
var gridColumnFieldsSelector = createSelector2(gridColumnsStateSelector, (columnsState) => columnsState.orderedFields);
var gridColumnLookupSelector = createSelector2(gridColumnsStateSelector, (columnsState) => columnsState.lookup);
var gridColumnDefinitionsSelector = createSelectorMemoized(gridColumnFieldsSelector, gridColumnLookupSelector, (allFields, lookup) => allFields.map((field) => lookup[field]));
var gridColumnVisibilityModelSelector = createSelector2(gridColumnsStateSelector, (columnsState) => columnsState.columnVisibilityModel);
var gridVisibleColumnDefinitionsSelector = createSelectorMemoized(gridColumnDefinitionsSelector, gridColumnVisibilityModelSelector, (columns, columnVisibilityModel) => columns.filter((column) => columnVisibilityModel[column.field] !== false));
var gridVisibleColumnFieldsSelector = createSelectorMemoized(gridVisibleColumnDefinitionsSelector, (visibleColumns) => visibleColumns.map((column) => column.field));
var gridPinnedColumnsSelector = (state) => state.pinnedColumns;
var gridVisiblePinnedColumnDefinitionsSelector = createSelectorMemoized(gridColumnsStateSelector, gridPinnedColumnsSelector, gridVisibleColumnFieldsSelector, gridThemeSelector, (columnsState, model, visibleColumnFields, theme) => {
  const visiblePinnedFields = filterVisibleColumns(model, visibleColumnFields, theme.direction === "rtl");
  const visiblePinnedColumns = {
    left: visiblePinnedFields.left.map((field) => columnsState.lookup[field]),
    right: visiblePinnedFields.right.map((field) => columnsState.lookup[field])
  };
  return visiblePinnedColumns;
});
function filterVisibleColumns(pinnedColumns, columns, invert) {
  var _a, _b;
  if (!Array.isArray(pinnedColumns.left) && !Array.isArray(pinnedColumns.right)) {
    return EMPTY_PINNED_COLUMN_FIELDS;
  }
  if (((_a = pinnedColumns.left) == null ? void 0 : _a.length) === 0 && ((_b = pinnedColumns.right) == null ? void 0 : _b.length) === 0) {
    return EMPTY_PINNED_COLUMN_FIELDS;
  }
  const filter2 = (newPinnedColumns, remainingColumns) => {
    if (!Array.isArray(newPinnedColumns)) {
      return [];
    }
    return newPinnedColumns.filter((field) => remainingColumns.includes(field));
  };
  const leftPinnedColumns = filter2(pinnedColumns.left, columns);
  const columnsWithoutLeftPinnedColumns = columns.filter(
    // Filter out from the remaining columns those columns already pinned to the left
    (field) => !leftPinnedColumns.includes(field)
  );
  const rightPinnedColumns = filter2(pinnedColumns.right, columnsWithoutLeftPinnedColumns);
  if (invert) {
    return {
      left: rightPinnedColumns,
      right: leftPinnedColumns
    };
  }
  return {
    left: leftPinnedColumns,
    right: rightPinnedColumns
  };
}
var gridColumnPositionsSelector = createSelectorMemoized(gridVisibleColumnDefinitionsSelector, (visibleColumns) => {
  const positions = [];
  let currentPosition = 0;
  for (let i = 0; i < visibleColumns.length; i += 1) {
    positions.push(currentPosition);
    currentPosition += visibleColumns[i].computedWidth;
  }
  return positions;
});
var gridColumnsTotalWidthSelector = createSelector2(gridVisibleColumnDefinitionsSelector, gridColumnPositionsSelector, (visibleColumns, positions) => {
  const colCount = visibleColumns.length;
  if (colCount === 0) {
    return 0;
  }
  return positions[colCount - 1] + visibleColumns[colCount - 1].computedWidth;
});
var gridFilterableColumnDefinitionsSelector = createSelectorMemoized(gridColumnDefinitionsSelector, (columns) => columns.filter((col) => col.filterable));
var gridFilterableColumnLookupSelector = createSelectorMemoized(gridColumnDefinitionsSelector, (columns) => columns.reduce((acc, col) => {
  if (col.filterable) {
    acc[col.field] = col;
  }
  return acc;
}, {}));
var gridHasColSpanSelector = createSelectorMemoized(gridColumnDefinitionsSelector, (columns) => columns.some((column) => column.colSpan !== void 0));

// node_modules/@mui/x-data-grid/hooks/utils/useTimeout.js
init_useTimeout();

// node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsUtils.js
init_extends();

// node_modules/@mui/x-data-grid/colDef/gridActionsColDef.js
init_extends();

// node_modules/@mui/x-data-grid/components/cell/GridEditInputCell.js
init_objectWithoutPropertiesLoose();
init_extends();
var React8 = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "hasFocus", "isValidating", "debounceMs", "isProcessingProps", "onValueChange"];
var useUtilityClasses = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["editInputCell"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridEditInputCellRoot = styled_default(InputBase_default, {
  name: "MuiDataGrid",
  slot: "EditInputCell",
  overridesResolver: (props, styles) => styles.editInputCell
})(({
  theme
}) => _extends({}, theme.typography.body2, {
  padding: "1px 0",
  "& input": {
    padding: "0 16px",
    height: "100%"
  }
}));
var GridEditInputCell = React8.forwardRef((props, ref) => {
  const rootProps = useGridRootProps();
  const {
    id,
    value,
    field,
    colDef,
    hasFocus,
    debounceMs = 200,
    isProcessingProps,
    onValueChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const apiRef = useGridApiContext();
  const inputRef = React8.useRef();
  const [valueState, setValueState] = React8.useState(value);
  const classes2 = useUtilityClasses(rootProps);
  const handleChange = React8.useCallback(async (event) => {
    const newValue = event.target.value;
    if (onValueChange) {
      await onValueChange(event, newValue);
    }
    const column = apiRef.current.getColumn(field);
    let parsedValue = newValue;
    if (column.valueParser) {
      parsedValue = column.valueParser(newValue, apiRef.current.getRow(id), column, apiRef);
    }
    setValueState(parsedValue);
    apiRef.current.setEditCellValue({
      id,
      field,
      value: parsedValue,
      debounceMs,
      unstable_skipValueParser: true
    }, event);
  }, [apiRef, debounceMs, field, id, onValueChange]);
  const meta = apiRef.current.unstable_getEditCellMeta(id, field);
  React8.useEffect(() => {
    if ((meta == null ? void 0 : meta.changeReason) !== "debouncedSetEditCellValue") {
      setValueState(value);
    }
  }, [meta, value]);
  useEnhancedEffect_default(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return (0, import_jsx_runtime.jsx)(GridEditInputCellRoot, _extends({
    ref,
    inputRef,
    className: classes2.root,
    ownerState: rootProps,
    fullWidth: true,
    type: colDef.type === "number" ? colDef.type : "text",
    value: valueState ?? "",
    onChange: handleChange,
    endAdornment: isProcessingProps ? (0, import_jsx_runtime.jsx)(rootProps.slots.loadIcon, {
      fontSize: "small",
      color: "action"
    }) : void 0
  }, other));
});
true ? GridEditInputCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * GridApi that let you manipulate the grid.
   */
  api: import_prop_types.default.object.isRequired,
  /**
   * The mode of the cell.
   */
  cellMode: import_prop_types.default.oneOf(["edit", "view"]).isRequired,
  changeReason: import_prop_types.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: import_prop_types.default.object.isRequired,
  debounceMs: import_prop_types.default.number,
  /**
   * The column field of the cell that triggered the event.
   */
  field: import_prop_types.default.string.isRequired,
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: import_prop_types.default.any,
  /**
   * If true, the cell is the active element.
   */
  hasFocus: import_prop_types.default.bool.isRequired,
  /**
   * The grid row id.
   */
  id: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.string]).isRequired,
  /**
   * If true, the cell is editable.
   */
  isEditable: import_prop_types.default.bool,
  isProcessingProps: import_prop_types.default.bool,
  isValidating: import_prop_types.default.bool,
  /**
   * Callback called when the value is changed by the user.
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {Date | null} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange: import_prop_types.default.func,
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: import_prop_types.default.any.isRequired,
  /**
   * The node of the row that the current cell belongs to.
   */
  rowNode: import_prop_types.default.object.isRequired,
  /**
   * the tabIndex value.
   */
  tabIndex: import_prop_types.default.oneOf([-1, 0]).isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: import_prop_types.default.any
} : void 0;
var renderEditInputCell = (params) => (0, import_jsx_runtime.jsx)(GridEditInputCell, _extends({}, params));

// node_modules/@mui/x-data-grid/hooks/features/sorting/gridSortingUtils.js
init_extends();
var sortModelDisableMultiColumnsSortingWarning = buildWarning(["MUI X: The `sortModel` can only contain a single item when the `disableMultipleColumnsSorting` prop is set to `true`.", "If you are using the community version of the `DataGrid`, this prop is always `true`."], "error");
var sanitizeSortModel = (model, disableMultipleColumnsSorting) => {
  if (disableMultipleColumnsSorting && model.length > 1) {
    if (true) {
      sortModelDisableMultiColumnsSortingWarning();
    }
    return [model[0]];
  }
  return model;
};
var mergeStateWithSortModel = (sortModel, disableMultipleColumnsSorting) => (state) => _extends({}, state, {
  sorting: _extends({}, state.sorting, {
    sortModel: sanitizeSortModel(sortModel, disableMultipleColumnsSorting)
  })
});
var isDesc = (direction) => direction === "desc";
var parseSortItem = (sortItem, apiRef) => {
  const column = apiRef.current.getColumn(sortItem.field);
  if (!column || sortItem.sort === null) {
    return null;
  }
  let comparator;
  if (column.getSortComparator) {
    comparator = column.getSortComparator(sortItem.sort);
  } else {
    comparator = isDesc(sortItem.sort) ? (...args) => -1 * column.sortComparator(...args) : column.sortComparator;
  }
  if (!comparator) {
    return null;
  }
  const getSortCellParams = (id) => ({
    id,
    field: column.field,
    rowNode: apiRef.current.getRowNode(id),
    value: apiRef.current.getCellValue(id, column.field),
    api: apiRef.current
  });
  return {
    getSortCellParams,
    comparator
  };
};
var compareRows = (parsedSortItems, row1, row2) => {
  return parsedSortItems.reduce((res, item, index) => {
    if (res !== 0) {
      return res;
    }
    const sortCellParams1 = row1.params[index];
    const sortCellParams2 = row2.params[index];
    res = item.comparator(sortCellParams1.value, sortCellParams2.value, sortCellParams1, sortCellParams2);
    return res;
  }, 0);
};
var buildAggregatedSortingApplier = (sortModel, apiRef) => {
  const comparatorList = sortModel.map((item) => parseSortItem(item, apiRef)).filter((comparator) => !!comparator);
  if (comparatorList.length === 0) {
    return null;
  }
  return (rowList) => rowList.map((node) => ({
    node,
    params: comparatorList.map((el) => el.getSortCellParams(node.id))
  })).sort((a, b) => compareRows(comparatorList, a, b)).map((row) => row.node.id);
};
var getNextGridSortDirection = (sortingOrder, current) => {
  const currentIdx = sortingOrder.indexOf(current);
  if (!current || currentIdx === -1 || currentIdx + 1 === sortingOrder.length) {
    return sortingOrder[0];
  }
  return sortingOrder[currentIdx + 1];
};
var gridNillComparator = (v1, v2) => {
  if (v1 == null && v2 != null) {
    return -1;
  }
  if (v2 == null && v1 != null) {
    return 1;
  }
  if (v1 == null && v2 == null) {
    return 0;
  }
  return null;
};
var collator = new Intl.Collator();
var gridStringOrNumberComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  if (typeof value1 === "string") {
    return collator.compare(value1.toString(), value2.toString());
  }
  return value1 - value2;
};
var gridNumberComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  return Number(value1) - Number(value2);
};
var gridDateComparator = (value1, value2) => {
  const nillResult = gridNillComparator(value1, value2);
  if (nillResult !== null) {
    return nillResult;
  }
  if (value1 > value2) {
    return 1;
  }
  if (value1 < value2) {
    return -1;
  }
  return 0;
};

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputValue.js
init_extends();
init_objectWithoutPropertiesLoose();
var React9 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded2 = ["item", "applyValue", "type", "apiRef", "focusElementRef", "tabIndex", "disabled", "isFilterActive", "clearButton", "InputProps", "variant"];
function GridFilterInputValue(props) {
  var _a;
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef,
    tabIndex,
    disabled,
    clearButton,
    InputProps,
    variant = "standard"
  } = props, others = _objectWithoutPropertiesLoose(props, _excluded2);
  const filterTimeout = useTimeout();
  const [filterValueState, setFilterValueState] = React9.useState(item.value ?? "");
  const [applying, setIsApplying] = React9.useState(false);
  const id = useId();
  const rootProps = useGridRootProps();
  const onFilterChange = React9.useCallback((event) => {
    const {
      value
    } = event.target;
    setFilterValueState(String(value));
    setIsApplying(true);
    filterTimeout.start(rootProps.filterDebounceMs, () => {
      const newItem = _extends({}, item, {
        value,
        fromInput: id
      });
      applyValue(newItem);
      setIsApplying(false);
    });
  }, [id, applyValue, item, rootProps.filterDebounceMs, filterTimeout]);
  React9.useEffect(() => {
    const itemPlusTag = item;
    if (itemPlusTag.fromInput !== id || item.value === void 0) {
      setFilterValueState(String(item.value ?? ""));
    }
  }, [id, item]);
  return (0, import_jsx_runtime2.jsx)(rootProps.slots.baseTextField, _extends({
    id,
    label: apiRef.current.getLocaleText("filterPanelInputLabel"),
    placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
    value: filterValueState,
    onChange: onFilterChange,
    variant,
    type: type || "text",
    InputProps: _extends({}, applying || clearButton ? {
      endAdornment: applying ? (0, import_jsx_runtime2.jsx)(rootProps.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : clearButton
    } : {}, {
      disabled
    }, InputProps, {
      inputProps: _extends({
        tabIndex
      }, InputProps == null ? void 0 : InputProps.inputProps)
    }),
    InputLabelProps: {
      shrink: true
    },
    inputRef: focusElementRef
  }, others, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTextField));
}
true ? GridFilterInputValue.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types2.default.shape({
    current: import_prop_types2.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types2.default.func.isRequired,
  clearButton: import_prop_types2.default.node,
  focusElementRef: import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * It is `true` if the filter either has a value or an operator with no value
   * required is selected (for example `isEmpty`)
   */
  isFilterActive: import_prop_types2.default.bool,
  item: import_prop_types2.default.shape({
    field: import_prop_types2.default.string.isRequired,
    id: import_prop_types2.default.oneOfType([import_prop_types2.default.number, import_prop_types2.default.string]),
    operator: import_prop_types2.default.string.isRequired,
    value: import_prop_types2.default.any
  }).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/utils/utils.js
function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}
function isFunction(value) {
  return typeof value === "function";
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function localStorageAvailable() {
  try {
    const key = "__some_random_key_you_are_not_going_to_use__";
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (err) {
    return false;
  }
}
function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
var clamp = (value, min, max) => Math.max(min, Math.min(max, value));
function range(from, to) {
  return Array.from({
    length: to - from
  }).map((_, i) => from + i);
}
function isDeepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor) {
      return false;
    }
    if (Array.isArray(a)) {
      const length2 = a.length;
      if (length2 !== b.length) {
        return false;
      }
      for (let i = 0; i < length2; i += 1) {
        if (!isDeepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) {
        return false;
      }
      const entriesA = Array.from(a.entries());
      for (let i = 0; i < entriesA.length; i += 1) {
        if (!b.has(entriesA[i][0])) {
          return false;
        }
      }
      for (let i = 0; i < entriesA.length; i += 1) {
        const entryA = entriesA[i];
        if (!isDeepEqual(entryA[1], b.get(entryA[0]))) {
          return false;
        }
      }
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) {
        return false;
      }
      const entries = Array.from(a.entries());
      for (let i = 0; i < entries.length; i += 1) {
        if (!b.has(entries[i][0])) {
          return false;
        }
      }
      return true;
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      const length2 = a.length;
      if (length2 !== b.length) {
        return false;
      }
      for (let i = 0; i < length2; i += 1) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    if (a.constructor === RegExp) {
      return a.source === b.source && a.flags === b.flags;
    }
    if (a.valueOf !== Object.prototype.valueOf) {
      return a.valueOf() === b.valueOf();
    }
    if (a.toString !== Object.prototype.toString) {
      return a.toString() === b.toString();
    }
    const keys = Object.keys(a);
    const length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (let i = 0; i < length; i += 1) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (let i = 0; i < length; i += 1) {
      const key = keys[i];
      if (!isDeepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}
function mulberry32(a) {
  return () => {
    let t = a += 1831565813;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function randomNumberBetween(seed, min, max) {
  const random = mulberry32(seed);
  return () => min + (max - min) * random();
}
function deepClone(obj) {
  if (typeof structuredClone === "function") {
    return structuredClone(obj);
  }
  return JSON.parse(JSON.stringify(obj));
}

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputMultipleValue.js
init_extends();
init_objectWithoutPropertiesLoose();
var React10 = __toESM(require_react());
var import_prop_types3 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _excluded3 = ["item", "applyValue", "type", "apiRef", "focusElementRef", "color", "error", "helperText", "size", "variant"];
function GridFilterInputMultipleValue(props) {
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef,
    color,
    error,
    helperText,
    size,
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded3);
  const TextFieldProps = {
    color,
    error,
    helperText,
    size,
    variant
  };
  const [filterValueState, setFilterValueState] = React10.useState(item.value || []);
  const id = useId();
  const rootProps = useGridRootProps();
  React10.useEffect(() => {
    const itemValue = item.value ?? [];
    setFilterValueState(itemValue.map(String));
  }, [item.value]);
  const handleChange = React10.useCallback((event, value) => {
    setFilterValueState(value.map(String));
    applyValue(_extends({}, item, {
      value: [...value]
    }));
  }, [applyValue, item]);
  return (0, import_jsx_runtime3.jsx)(Autocomplete_default, _extends({
    multiple: true,
    freeSolo: true,
    options: [],
    filterOptions: (options, params) => {
      const {
        inputValue
      } = params;
      return inputValue == null || inputValue === "" ? [] : [inputValue];
    },
    id,
    value: filterValueState,
    onChange: handleChange,
    renderTags: (value, getTagProps) => value.map((option, index) => (0, import_jsx_runtime3.jsx)(rootProps.slots.baseChip, _extends({
      variant: "outlined",
      size: "small",
      label: option
    }, getTagProps({
      index
    })))),
    renderInput: (params) => {
      var _a;
      return (0, import_jsx_runtime3.jsx)(rootProps.slots.baseTextField, _extends({}, params, {
        label: apiRef.current.getLocaleText("filterPanelInputLabel"),
        placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
        InputLabelProps: _extends({}, params.InputLabelProps, {
          shrink: true
        }),
        inputRef: focusElementRef,
        type: type || "text"
      }, TextFieldProps, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTextField));
    }
  }, other));
}
true ? GridFilterInputMultipleValue.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types3.default.shape({
    current: import_prop_types3.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types3.default.func.isRequired,
  focusElementRef: import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object]),
  item: import_prop_types3.default.shape({
    field: import_prop_types3.default.string.isRequired,
    id: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
    operator: import_prop_types3.default.string.isRequired,
    value: import_prop_types3.default.any
  }).isRequired,
  type: import_prop_types3.default.oneOf(["number", "text"])
} : void 0;

// node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterUtils.js
init_extends();

// node_modules/@mui/x-data-grid/models/gridEditRowModel.js
var GridEditModes = function(GridEditModes2) {
  GridEditModes2["Cell"] = "cell";
  GridEditModes2["Row"] = "row";
  return GridEditModes2;
}(GridEditModes || {});
var GridCellModes = function(GridCellModes2) {
  GridCellModes2["Edit"] = "edit";
  GridCellModes2["View"] = "view";
  return GridCellModes2;
}(GridCellModes || {});
var GridRowModes = function(GridRowModes2) {
  GridRowModes2["Edit"] = "edit";
  GridRowModes2["View"] = "view";
  return GridRowModes2;
}(GridRowModes || {});

// node_modules/@mui/x-data-grid/models/gridFilterItem.js
var GridLogicOperator = function(GridLogicOperator2) {
  GridLogicOperator2["And"] = "and";
  GridLogicOperator2["Or"] = "or";
  return GridLogicOperator2;
}(GridLogicOperator || {});

// node_modules/@mui/x-data-grid/models/params/gridEditCellParams.js
var GridCellEditStartReasons = function(GridCellEditStartReasons2) {
  GridCellEditStartReasons2["enterKeyDown"] = "enterKeyDown";
  GridCellEditStartReasons2["cellDoubleClick"] = "cellDoubleClick";
  GridCellEditStartReasons2["printableKeyDown"] = "printableKeyDown";
  GridCellEditStartReasons2["deleteKeyDown"] = "deleteKeyDown";
  GridCellEditStartReasons2["pasteKeyDown"] = "pasteKeyDown";
  return GridCellEditStartReasons2;
}(GridCellEditStartReasons || {});
var GridCellEditStopReasons = function(GridCellEditStopReasons2) {
  GridCellEditStopReasons2["cellFocusOut"] = "cellFocusOut";
  GridCellEditStopReasons2["escapeKeyDown"] = "escapeKeyDown";
  GridCellEditStopReasons2["enterKeyDown"] = "enterKeyDown";
  GridCellEditStopReasons2["tabKeyDown"] = "tabKeyDown";
  GridCellEditStopReasons2["shiftTabKeyDown"] = "shiftTabKeyDown";
  return GridCellEditStopReasons2;
}(GridCellEditStopReasons || {});

// node_modules/@mui/x-data-grid/models/params/gridRowParams.js
var GridRowEditStartReasons = function(GridRowEditStartReasons2) {
  GridRowEditStartReasons2["enterKeyDown"] = "enterKeyDown";
  GridRowEditStartReasons2["cellDoubleClick"] = "cellDoubleClick";
  GridRowEditStartReasons2["printableKeyDown"] = "printableKeyDown";
  GridRowEditStartReasons2["deleteKeyDown"] = "deleteKeyDown";
  return GridRowEditStartReasons2;
}(GridRowEditStartReasons || {});
var GridRowEditStopReasons = function(GridRowEditStopReasons2) {
  GridRowEditStopReasons2["rowFocusOut"] = "rowFocusOut";
  GridRowEditStopReasons2["escapeKeyDown"] = "escapeKeyDown";
  GridRowEditStopReasons2["enterKeyDown"] = "enterKeyDown";
  GridRowEditStopReasons2["tabKeyDown"] = "tabKeyDown";
  GridRowEditStopReasons2["shiftTabKeyDown"] = "shiftTabKeyDown";
  return GridRowEditStopReasons2;
}(GridRowEditStopReasons || {});

// node_modules/@mui/x-data-grid/models/gridColumnGrouping.js
function isLeaf(node) {
  return node.field !== void 0;
}

// node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterState.js
var getDefaultGridFilterModel = () => ({
  items: [],
  logicOperator: GridLogicOperator.And,
  quickFilterValues: [],
  quickFilterLogicOperator: GridLogicOperator.And
});

// node_modules/@mui/x-data-grid/utils/getPublicApiRef.js
function getPublicApiRef(apiRef) {
  return {
    current: apiRef.current.getPublicApi()
  };
}

// node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterUtils.js
var hasEval;
function getHasEval() {
  if (hasEval !== void 0) {
    return hasEval;
  }
  try {
    hasEval = new Function("return true")();
  } catch (_) {
    hasEval = false;
  }
  return hasEval;
}
var cleanFilterItem = (item, apiRef) => {
  const cleanItem = _extends({}, item);
  if (cleanItem.id == null) {
    cleanItem.id = Math.round(Math.random() * 1e5);
  }
  if (cleanItem.operator == null) {
    const column = gridColumnLookupSelector(apiRef)[cleanItem.field];
    cleanItem.operator = column && column.filterOperators[0].value;
  }
  return cleanItem;
};
var filterModelDisableMultiColumnsFilteringWarning = buildWarning(["MUI X: The `filterModel` can only contain a single item when the `disableMultipleColumnsFiltering` prop is set to `true`.", "If you are using the community version of the `DataGrid`, this prop is always `true`."], "error");
var filterModelMissingItemIdWarning = buildWarning("MUI X: The `id` field is required on `filterModel.items` when you use multiple filters.", "error");
var filterModelMissingItemOperatorWarning = buildWarning("MUI X: The `operator` field is required on `filterModel.items`, one or more of your filtering item has no `operator` provided.", "error");
var sanitizeFilterModel = (model, disableMultipleColumnsFiltering, apiRef) => {
  const hasSeveralItems = model.items.length > 1;
  let items;
  if (hasSeveralItems && disableMultipleColumnsFiltering) {
    filterModelDisableMultiColumnsFilteringWarning();
    items = [model.items[0]];
  } else {
    items = model.items;
  }
  const hasItemsWithoutIds = hasSeveralItems && items.some((item) => item.id == null);
  const hasItemWithoutOperator = items.some((item) => item.operator == null);
  if (hasItemsWithoutIds) {
    filterModelMissingItemIdWarning();
  }
  if (hasItemWithoutOperator) {
    filterModelMissingItemOperatorWarning();
  }
  if (hasItemWithoutOperator || hasItemsWithoutIds) {
    return _extends({}, model, {
      items: items.map((item) => cleanFilterItem(item, apiRef))
    });
  }
  if (model.items !== items) {
    return _extends({}, model, {
      items
    });
  }
  return model;
};
var mergeStateWithFilterModel = (filterModel, disableMultipleColumnsFiltering, apiRef) => (filteringState) => _extends({}, filteringState, {
  filterModel: sanitizeFilterModel(filterModel, disableMultipleColumnsFiltering, apiRef)
});
var removeDiacritics = (value) => {
  if (typeof value === "string") {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  return value;
};
var getFilterCallbackFromItem = (filterItem, apiRef) => {
  var _a;
  if (!filterItem.field || !filterItem.operator) {
    return null;
  }
  const column = apiRef.current.getColumn(filterItem.field);
  if (!column) {
    return null;
  }
  let parsedValue;
  if (column.valueParser) {
    const parser = column.valueParser;
    parsedValue = Array.isArray(filterItem.value) ? (_a = filterItem.value) == null ? void 0 : _a.map((x) => parser(x, void 0, column, apiRef)) : parser(filterItem.value, void 0, column, apiRef);
  } else {
    parsedValue = filterItem.value;
  }
  const {
    ignoreDiacritics
  } = apiRef.current.rootProps;
  if (ignoreDiacritics) {
    parsedValue = removeDiacritics(parsedValue);
  }
  const newFilterItem = _extends({}, filterItem, {
    value: parsedValue
  });
  const filterOperators = column.filterOperators;
  if (!(filterOperators == null ? void 0 : filterOperators.length)) {
    throw new Error(`MUI X: No filter operators found for column '${column.field}'.`);
  }
  const filterOperator = filterOperators.find((operator) => operator.value === newFilterItem.operator);
  if (!filterOperator) {
    throw new Error(`MUI X: No filter operator found for column '${column.field}' and operator value '${newFilterItem.operator}'.`);
  }
  const publicApiRef = getPublicApiRef(apiRef);
  const applyFilterOnRow = filterOperator.getApplyFilterFn(newFilterItem, column);
  if (typeof applyFilterOnRow !== "function") {
    return null;
  }
  return {
    item: newFilterItem,
    fn: (row) => {
      let value = apiRef.current.getRowValue(row, column);
      if (ignoreDiacritics) {
        value = removeDiacritics(value);
      }
      return applyFilterOnRow(value, row, column, publicApiRef);
    }
  };
};
var filterItemsApplierId = 1;
var buildAggregatedFilterItemsApplier = (filterModel, apiRef, disableEval) => {
  const {
    items
  } = filterModel;
  const appliers = items.map((item) => getFilterCallbackFromItem(item, apiRef)).filter((callback) => !!callback);
  if (appliers.length === 0) {
    return null;
  }
  if (disableEval || !getHasEval()) {
    return (row, shouldApplyFilter) => {
      const resultPerItemId = {};
      for (let i = 0; i < appliers.length; i += 1) {
        const applier = appliers[i];
        if (!shouldApplyFilter || shouldApplyFilter(applier.item.field)) {
          resultPerItemId[applier.item.id] = applier.fn(row);
        }
      }
      return resultPerItemId;
    };
  }
  const filterItemCore = new Function("appliers", "row", "shouldApplyFilter", `"use strict";
${appliers.map((applier, i) => `const shouldApply${i} = !shouldApplyFilter || shouldApplyFilter(${JSON.stringify(applier.item.field)});`).join("\n")}

const result$$ = {
${appliers.map((applier, i) => `  ${JSON.stringify(String(applier.item.id))}: !shouldApply${i} ? false : appliers[${i}].fn(row),`).join("\n")}
};

return result$$;`.replaceAll("$$", String(filterItemsApplierId)));
  filterItemsApplierId += 1;
  const filterItem = (row, shouldApplyItem) => filterItemCore(appliers, row, shouldApplyItem);
  return filterItem;
};
var shouldQuickFilterExcludeHiddenColumns = (filterModel) => {
  return filterModel.quickFilterExcludeHiddenColumns ?? true;
};
var buildAggregatedQuickFilterApplier = (filterModel, apiRef) => {
  var _a;
  const quickFilterValues = ((_a = filterModel.quickFilterValues) == null ? void 0 : _a.filter(Boolean)) ?? [];
  if (quickFilterValues.length === 0) {
    return null;
  }
  const columnFields = shouldQuickFilterExcludeHiddenColumns(filterModel) ? gridVisibleColumnFieldsSelector(apiRef) : gridColumnFieldsSelector(apiRef);
  const appliersPerField = [];
  const {
    ignoreDiacritics
  } = apiRef.current.rootProps;
  const publicApiRef = getPublicApiRef(apiRef);
  columnFields.forEach((field) => {
    const column = apiRef.current.getColumn(field);
    const getApplyQuickFilterFn = column == null ? void 0 : column.getApplyQuickFilterFn;
    if (getApplyQuickFilterFn) {
      appliersPerField.push({
        column,
        appliers: quickFilterValues.map((quickFilterValue) => {
          const value = ignoreDiacritics ? removeDiacritics(quickFilterValue) : quickFilterValue;
          return {
            fn: getApplyQuickFilterFn(value, column, publicApiRef)
          };
        })
      });
    }
  });
  return function isRowMatchingQuickFilter(row, shouldApplyFilter) {
    const result = {};
    outer:
      for (let v = 0; v < quickFilterValues.length; v += 1) {
        const filterValue = quickFilterValues[v];
        for (let i = 0; i < appliersPerField.length; i += 1) {
          const {
            column,
            appliers
          } = appliersPerField[i];
          const {
            field
          } = column;
          if (shouldApplyFilter && !shouldApplyFilter(field)) {
            continue;
          }
          const applier = appliers[v];
          let value = apiRef.current.getRowValue(row, column);
          if (applier.fn === null) {
            continue;
          }
          if (ignoreDiacritics) {
            value = removeDiacritics(value);
          }
          const isMatching = applier.fn(value, row, column, publicApiRef);
          if (isMatching) {
            result[filterValue] = true;
            continue outer;
          }
        }
        result[filterValue] = false;
      }
    return result;
  };
};
var buildAggregatedFilterApplier = (filterModel, apiRef, disableEval) => {
  const isRowMatchingFilterItems = buildAggregatedFilterItemsApplier(filterModel, apiRef, disableEval);
  const isRowMatchingQuickFilter = buildAggregatedQuickFilterApplier(filterModel, apiRef);
  return function isRowMatchingFilters(row, shouldApplyFilter, result) {
    result.passingFilterItems = (isRowMatchingFilterItems == null ? void 0 : isRowMatchingFilterItems(row, shouldApplyFilter)) ?? null;
    result.passingQuickFilterValues = (isRowMatchingQuickFilter == null ? void 0 : isRowMatchingQuickFilter(row, shouldApplyFilter)) ?? null;
  };
};
var isNotNull = (result) => result != null;
var filterModelItems = (cache2, apiRef, items) => {
  if (!cache2.cleanedFilterItems) {
    cache2.cleanedFilterItems = items.filter((item) => getFilterCallbackFromItem(item, apiRef) !== null);
  }
  return cache2.cleanedFilterItems;
};
var passFilterLogic = (allFilterItemResults, allQuickFilterResults, filterModel, apiRef, cache2) => {
  const cleanedFilterItems = filterModelItems(cache2, apiRef, filterModel.items);
  const cleanedFilterItemResults = allFilterItemResults.filter(isNotNull);
  const cleanedQuickFilterResults = allQuickFilterResults.filter(isNotNull);
  if (cleanedFilterItemResults.length > 0) {
    const filterItemPredicate = (item) => {
      return cleanedFilterItemResults.some((filterItemResult) => filterItemResult[item.id]);
    };
    const logicOperator = filterModel.logicOperator ?? getDefaultGridFilterModel().logicOperator;
    if (logicOperator === GridLogicOperator.And) {
      const passesAllFilters = cleanedFilterItems.every(filterItemPredicate);
      if (!passesAllFilters) {
        return false;
      }
    } else {
      const passesSomeFilters = cleanedFilterItems.some(filterItemPredicate);
      if (!passesSomeFilters) {
        return false;
      }
    }
  }
  if (cleanedQuickFilterResults.length > 0 && filterModel.quickFilterValues != null) {
    const quickFilterValuePredicate = (value) => {
      return cleanedQuickFilterResults.some((quickFilterValueResult) => quickFilterValueResult[value]);
    };
    const quickFilterLogicOperator = filterModel.quickFilterLogicOperator ?? getDefaultGridFilterModel().quickFilterLogicOperator;
    if (quickFilterLogicOperator === GridLogicOperator.And) {
      const passesAllQuickFilterValues = filterModel.quickFilterValues.every(quickFilterValuePredicate);
      if (!passesAllQuickFilterValues) {
        return false;
      }
    } else {
      const passesSomeQuickFilterValues = filterModel.quickFilterValues.some(quickFilterValuePredicate);
      if (!passesSomeQuickFilterValues) {
        return false;
      }
    }
  }
  return true;
};

// node_modules/@mui/x-data-grid/colDef/gridStringOperators.js
var getGridStringQuickFilterFn = (value) => {
  if (!value) {
    return null;
  }
  const filterRegex = new RegExp(escapeRegExp(value), "i");
  return (_, row, column, apiRef) => {
    let columnValue = apiRef.current.getRowFormattedValue(row, column);
    if (apiRef.current.ignoreDiacritics) {
      columnValue = removeDiacritics(columnValue);
    }
    return columnValue != null ? filterRegex.test(columnValue.toString()) : false;
  };
};
var getGridStringOperators = (disableTrim = false) => [{
  value: "contains",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const filterRegex = new RegExp(escapeRegExp(filterItemValue), "i");
    return (value) => {
      return value != null ? filterRegex.test(String(value)) : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: "equals",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const collator4 = new Intl.Collator(void 0, {
      sensitivity: "base",
      usage: "search"
    });
    return (value) => {
      return value != null ? collator4.compare(filterItemValue, value.toString()) === 0 : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: "startsWith",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const filterRegex = new RegExp(`^${escapeRegExp(filterItemValue)}.*$`, "i");
    return (value) => {
      return value != null ? filterRegex.test(value.toString()) : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: "endsWith",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.trim();
    const filterRegex = new RegExp(`.*${escapeRegExp(filterItemValue)}$`, "i");
    return (value) => {
      return value != null ? filterRegex.test(value.toString()) : false;
    };
  },
  InputComponent: GridFilterInputValue
}, {
  value: "isEmpty",
  getApplyFilterFn: () => {
    return (value) => {
      return value === "" || value == null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isNotEmpty",
  getApplyFilterFn: () => {
    return (value) => {
      return value !== "" && value != null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isAnyOf",
  getApplyFilterFn: (filterItem) => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    const filterItemValue = disableTrim ? filterItem.value : filterItem.value.map((val) => val.trim());
    const collator4 = new Intl.Collator(void 0, {
      sensitivity: "base",
      usage: "search"
    });
    return (value) => value != null ? filterItemValue.some((filterValue) => {
      return collator4.compare(filterValue, value.toString() || "") === 0;
    }) : false;
  },
  InputComponent: GridFilterInputMultipleValue
}];

// node_modules/@mui/x-data-grid/colDef/gridStringColDef.js
var GRID_STRING_COL_DEF = {
  width: 100,
  minWidth: 50,
  maxWidth: Infinity,
  hideable: true,
  sortable: true,
  resizable: true,
  filterable: true,
  groupable: true,
  pinnable: true,
  // @ts-ignore
  aggregable: true,
  editable: false,
  sortComparator: gridStringOrNumberComparator,
  type: "string",
  align: "left",
  filterOperators: getGridStringOperators(),
  renderEditCell: renderEditInputCell,
  getApplyQuickFilterFn: getGridStringQuickFilterFn
};

// node_modules/@mui/x-data-grid/components/cell/GridActionsCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React12 = __toESM(require_react());
var import_prop_types5 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-data-grid/components/menu/GridMenu.js
init_extends();
init_objectWithoutPropertiesLoose();
var React11 = __toESM(require_react());
var import_prop_types4 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var _excluded4 = ["open", "target", "onClose", "children", "position", "className", "onExited"];
var useUtilityClasses2 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["menu"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridMenuRoot = styled_default(Popper_default, {
  name: "MuiDataGrid",
  slot: "Menu",
  overridesResolver: (_, styles) => styles.menu
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal,
  [`& .${gridClasses.menuList}`]: {
    outline: 0
  }
}));
var transformOrigin = {
  "bottom-start": "top left",
  "bottom-end": "top right"
};
function GridMenu(props) {
  var _a;
  const {
    open,
    target,
    onClose,
    children,
    position,
    className,
    onExited
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded4);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses2(rootProps);
  const savedFocusRef = React11.useRef(null);
  useEnhancedEffect_default(() => {
    var _a2, _b;
    if (open) {
      savedFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    } else {
      (_b = (_a2 = savedFocusRef.current) == null ? void 0 : _a2.focus) == null ? void 0 : _b.call(_a2);
      savedFocusRef.current = null;
    }
  }, [open]);
  React11.useEffect(() => {
    const eventName = open ? "menuOpen" : "menuClose";
    apiRef.current.publishEvent(eventName, {
      target
    });
  }, [apiRef, open, target]);
  const handleExited = (popperOnExited) => (node) => {
    if (popperOnExited) {
      popperOnExited();
    }
    if (onExited) {
      onExited(node);
    }
  };
  const handleClickAway = (event) => {
    if (event.target && (target === event.target || (target == null ? void 0 : target.contains(event.target)))) {
      return;
    }
    onClose(event);
  };
  return (0, import_jsx_runtime4.jsx)(GridMenuRoot, _extends({
    as: rootProps.slots.basePopper,
    className: clsx_default(className, classes2.root),
    ownerState: rootProps,
    open,
    anchorEl: target,
    transition: true,
    placement: position
  }, other, (_a = rootProps.slotProps) == null ? void 0 : _a.basePopper, {
    children: ({
      TransitionProps,
      placement
    }) => (0, import_jsx_runtime4.jsx)(ClickAwayListener, {
      onClickAway: handleClickAway,
      mouseEvent: "onMouseDown",
      children: (0, import_jsx_runtime4.jsx)(Grow_default, _extends({}, TransitionProps, {
        style: {
          transformOrigin: transformOrigin[placement]
        },
        onExited: handleExited(TransitionProps == null ? void 0 : TransitionProps.onExited),
        children: (0, import_jsx_runtime4.jsx)(Paper_default, {
          children
        })
      }))
    })
  }));
}
true ? GridMenu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  children: import_prop_types4.default.node,
  onClose: import_prop_types4.default.func.isRequired,
  onExited: import_prop_types4.default.func,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types4.default.bool.isRequired,
  position: import_prop_types4.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  target: HTMLElementType
} : void 0;

// node_modules/@mui/x-data-grid/components/cell/GridActionsCell.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var _excluded5 = ["api", "colDef", "id", "hasFocus", "isEditable", "field", "value", "formattedValue", "row", "rowNode", "cellMode", "tabIndex", "position", "focusElementRef"];
var hasActions = (colDef) => typeof colDef.getActions === "function";
function GridActionsCell(props) {
  var _a;
  const {
    colDef,
    id,
    hasFocus,
    tabIndex,
    position = "bottom-end",
    focusElementRef
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded5);
  const [focusedButtonIndex, setFocusedButtonIndex] = React12.useState(-1);
  const [open, setOpen] = React12.useState(false);
  const apiRef = useGridApiContext();
  const rootRef = React12.useRef(null);
  const buttonRef = React12.useRef(null);
  const ignoreCallToFocus = React12.useRef(false);
  const touchRippleRefs = React12.useRef({});
  const theme = useTheme();
  const menuId = useId();
  const buttonId = useId();
  const rootProps = useGridRootProps();
  if (!hasActions(colDef)) {
    throw new Error("MUI X: Missing the `getActions` property in the `GridColDef`.");
  }
  const options = colDef.getActions(apiRef.current.getRowParams(id));
  const iconButtons = options.filter((option) => !option.props.showInMenu);
  const menuButtons = options.filter((option) => option.props.showInMenu);
  const numberOfButtons = iconButtons.length + (menuButtons.length ? 1 : 0);
  React12.useLayoutEffect(() => {
    if (!hasFocus) {
      Object.entries(touchRippleRefs.current).forEach(([index, ref]) => {
        ref == null ? void 0 : ref.stop({}, () => {
          delete touchRippleRefs.current[index];
        });
      });
    }
  }, [hasFocus]);
  React12.useEffect(() => {
    if (focusedButtonIndex < 0 || !rootRef.current) {
      return;
    }
    if (focusedButtonIndex >= rootRef.current.children.length) {
      return;
    }
    const child = rootRef.current.children[focusedButtonIndex];
    child.focus({
      preventScroll: true
    });
  }, [focusedButtonIndex]);
  React12.useEffect(() => {
    if (!hasFocus) {
      setFocusedButtonIndex(-1);
      ignoreCallToFocus.current = false;
    }
  }, [hasFocus]);
  React12.useImperativeHandle(focusElementRef, () => ({
    focus() {
      if (!ignoreCallToFocus.current) {
        const focusableButtonIndex = options.findIndex((o) => !o.props.disabled);
        setFocusedButtonIndex(focusableButtonIndex);
      }
    }
  }), [options]);
  React12.useEffect(() => {
    if (focusedButtonIndex >= numberOfButtons) {
      setFocusedButtonIndex(numberOfButtons - 1);
    }
  }, [focusedButtonIndex, numberOfButtons]);
  const showMenu = () => {
    setOpen(true);
    setFocusedButtonIndex(numberOfButtons - 1);
    ignoreCallToFocus.current = true;
  };
  const hideMenu = () => {
    setOpen(false);
  };
  const handleTouchRippleRef = (index) => (instance) => {
    touchRippleRefs.current[index] = instance;
  };
  const handleButtonClick = (index, onClick) => (event) => {
    setFocusedButtonIndex(index);
    ignoreCallToFocus.current = true;
    if (onClick) {
      onClick(event);
    }
  };
  const handleRootKeyDown = (event) => {
    if (numberOfButtons <= 1) {
      return;
    }
    const getNewIndex = (index, direction) => {
      var _a2;
      if (index < 0 || index > options.length) {
        return index;
      }
      const rtlMod = theme.direction === "rtl" ? -1 : 1;
      const indexMod = (direction === "left" ? -1 : 1) * rtlMod;
      return ((_a2 = options[index + indexMod]) == null ? void 0 : _a2.props.disabled) ? getNewIndex(index + indexMod, direction) : index + indexMod;
    };
    let newIndex = focusedButtonIndex;
    if (event.key === "ArrowRight") {
      newIndex = getNewIndex(focusedButtonIndex, "right");
    } else if (event.key === "ArrowLeft") {
      newIndex = getNewIndex(focusedButtonIndex, "left");
    }
    if (newIndex < 0 || newIndex >= numberOfButtons) {
      return;
    }
    if (newIndex !== focusedButtonIndex) {
      event.preventDefault();
      event.stopPropagation();
      setFocusedButtonIndex(newIndex);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
    }
    if (["Tab", "Escape"].includes(event.key)) {
      hideMenu();
    }
  };
  return (0, import_jsx_runtime5.jsxs)("div", _extends({
    role: "menu",
    ref: rootRef,
    tabIndex: -1,
    className: gridClasses.actionsCell,
    onKeyDown: handleRootKeyDown
  }, other, {
    children: [iconButtons.map((button, index) => React12.cloneElement(button, {
      key: index,
      touchRippleRef: handleTouchRippleRef(index),
      onClick: handleButtonClick(index, button.props.onClick),
      tabIndex: focusedButtonIndex === index ? tabIndex : -1
    })), menuButtons.length > 0 && buttonId && (0, import_jsx_runtime5.jsx)(rootProps.slots.baseIconButton, _extends({
      ref: buttonRef,
      id: buttonId,
      "aria-label": apiRef.current.getLocaleText("actionsCellMore"),
      "aria-haspopup": "menu",
      "aria-expanded": open,
      "aria-controls": open ? menuId : void 0,
      role: "menuitem",
      size: "small",
      onClick: showMenu,
      touchRippleRef: handleTouchRippleRef(buttonId),
      tabIndex: focusedButtonIndex === iconButtons.length ? tabIndex : -1
    }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseIconButton, {
      children: (0, import_jsx_runtime5.jsx)(rootProps.slots.moreActionsIcon, {
        fontSize: "small"
      })
    })), menuButtons.length > 0 && (0, import_jsx_runtime5.jsx)(GridMenu, {
      open,
      target: buttonRef.current,
      position,
      onClose: hideMenu,
      children: (0, import_jsx_runtime5.jsx)(MenuList_default, {
        id: menuId,
        className: gridClasses.menuList,
        onKeyDown: handleListKeyDown,
        "aria-labelledby": buttonId,
        variant: "menu",
        autoFocusItem: true,
        children: menuButtons.map((button, index) => React12.cloneElement(button, {
          key: index,
          closeMenu: hideMenu
        }))
      })
    })]
  }));
}
true ? GridActionsCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  api: import_prop_types5.default.object,
  /**
   * The mode of the cell.
   */
  cellMode: import_prop_types5.default.oneOf(["edit", "view"]).isRequired,
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: import_prop_types5.default.object.isRequired,
  /**
   * The column field of the cell that triggered the event.
   */
  field: import_prop_types5.default.string.isRequired,
  /**
   * A ref allowing to set imperative focus.
   * It can be passed to the element that should receive focus.
   * @ignore - do not document.
   */
  focusElementRef: import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.shape({
    current: import_prop_types5.default.shape({
      focus: import_prop_types5.default.func.isRequired
    })
  })]),
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: import_prop_types5.default.any,
  /**
   * If true, the cell is the active element.
   */
  hasFocus: import_prop_types5.default.bool.isRequired,
  /**
   * The grid row id.
   */
  id: import_prop_types5.default.oneOfType([import_prop_types5.default.number, import_prop_types5.default.string]).isRequired,
  /**
   * If true, the cell is editable.
   */
  isEditable: import_prop_types5.default.bool,
  position: import_prop_types5.default.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: import_prop_types5.default.any.isRequired,
  /**
   * The node of the row that the current cell belongs to.
   */
  rowNode: import_prop_types5.default.object.isRequired,
  /**
   * the tabIndex value.
   */
  tabIndex: import_prop_types5.default.oneOf([-1, 0]).isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: import_prop_types5.default.any
} : void 0;
var renderActionsCell = (params) => (0, import_jsx_runtime5.jsx)(GridActionsCell, _extends({}, params));

// node_modules/@mui/x-data-grid/colDef/gridActionsColDef.js
var GRID_ACTIONS_COLUMN_TYPE = "actions";
var GRID_ACTIONS_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  sortable: false,
  filterable: false,
  // @ts-ignore
  aggregable: false,
  width: 100,
  display: "flex",
  align: "center",
  headerAlign: "center",
  headerName: "",
  disableColumnMenu: true,
  disableExport: true,
  renderCell: renderActionsCell,
  getApplyQuickFilterFn: void 0
});

// node_modules/@mui/x-data-grid/colDef/gridBooleanColDef.js
init_extends();

// node_modules/@mui/x-data-grid/components/cell/GridBooleanCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React13 = __toESM(require_react());
var import_prop_types6 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js
init_extends();

// node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js
var gridRowsStateSelector = (state) => state.rows;
var gridRowCountSelector = createSelector2(gridRowsStateSelector, (rows) => rows.totalRowCount);
var gridRowsLoadingSelector = createSelector2(gridRowsStateSelector, (rows) => rows.loading);
var gridTopLevelRowCountSelector = createSelector2(gridRowsStateSelector, (rows) => rows.totalTopLevelRowCount);
var gridRowsLookupSelector = createSelector2(gridRowsStateSelector, (rows) => rows.dataRowIdToModelLookup);
var gridRowsDataRowIdToIdLookupSelector = createSelector2(gridRowsStateSelector, (rows) => rows.dataRowIdToIdLookup);
var gridRowTreeSelector = createSelector2(gridRowsStateSelector, (rows) => rows.tree);
var gridRowGroupingNameSelector = createSelector2(gridRowsStateSelector, (rows) => rows.groupingName);
var gridRowTreeDepthsSelector = createSelector2(gridRowsStateSelector, (rows) => rows.treeDepths);
var gridRowMaximumTreeDepthSelector = createSelectorMemoized(gridRowsStateSelector, (rows) => {
  const entries = Object.entries(rows.treeDepths);
  if (entries.length === 0) {
    return 1;
  }
  return entries.filter(([, nodeCount]) => nodeCount > 0).map(([depth]) => Number(depth)).sort((a, b) => b - a)[0] + 1;
});
var gridDataRowIdsSelector = createSelector2(gridRowsStateSelector, (rows) => rows.dataRowIds);
var gridAdditionalRowGroupsSelector = createSelector2(gridRowsStateSelector, (rows) => rows == null ? void 0 : rows.additionalRowGroups);
var gridPinnedRowsSelector = createSelectorMemoized(gridAdditionalRowGroupsSelector, (additionalRowGroups) => {
  var _a, _b;
  const rawPinnedRows = additionalRowGroups == null ? void 0 : additionalRowGroups.pinnedRows;
  return {
    bottom: ((_a = rawPinnedRows == null ? void 0 : rawPinnedRows.bottom) == null ? void 0 : _a.map((rowEntry) => ({
      id: rowEntry.id,
      model: rowEntry.model ?? {}
    }))) ?? [],
    top: ((_b = rawPinnedRows == null ? void 0 : rawPinnedRows.top) == null ? void 0 : _b.map((rowEntry) => ({
      id: rowEntry.id,
      model: rowEntry.model ?? {}
    }))) ?? []
  };
});
var gridPinnedRowsCountSelector = createSelector2(gridPinnedRowsSelector, (pinnedRows) => {
  var _a, _b;
  return (((_a = pinnedRows == null ? void 0 : pinnedRows.top) == null ? void 0 : _a.length) || 0) + (((_b = pinnedRows == null ? void 0 : pinnedRows.bottom) == null ? void 0 : _b.length) || 0);
});

// node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js
var GRID_ROOT_GROUP_ID = `auto-generated-group-node-root`;
var GRID_ID_AUTOGENERATED = Symbol("mui.id_autogenerated");
var buildRootGroup = () => ({
  type: "group",
  id: GRID_ROOT_GROUP_ID,
  depth: -1,
  groupingField: null,
  groupingKey: null,
  isAutoGenerated: true,
  children: [],
  childrenFromPath: {},
  childrenExpanded: true,
  parent: null
});
function checkGridRowIdIsValid(id, row, detailErrorMessage = "A row was provided without id in the rows prop:") {
  if (id == null) {
    throw new Error(["MUI X: The data grid component requires all rows to have a unique `id` property.", "Alternatively, you can use the `getRowId` prop to specify a custom id for each row.", detailErrorMessage, JSON.stringify(row)].join("\n"));
  }
}
var getRowIdFromRowModel = (rowModel, getRowId, detailErrorMessage) => {
  const id = getRowId ? getRowId(rowModel) : rowModel.id;
  checkGridRowIdIsValid(id, rowModel, detailErrorMessage);
  return id;
};
var createRowsInternalCache = ({
  rows,
  getRowId,
  loading,
  rowCount
}) => {
  const updates = {
    type: "full",
    rows: []
  };
  const dataRowIdToModelLookup = {};
  const dataRowIdToIdLookup = {};
  for (let i = 0; i < rows.length; i += 1) {
    const model = rows[i];
    const id = getRowIdFromRowModel(model, getRowId);
    dataRowIdToModelLookup[id] = model;
    dataRowIdToIdLookup[id] = id;
    updates.rows.push(id);
  }
  return {
    rowsBeforePartialUpdates: rows,
    loadingPropBeforePartialUpdates: loading,
    rowCountPropBeforePartialUpdates: rowCount,
    updates,
    dataRowIdToIdLookup,
    dataRowIdToModelLookup
  };
};
var getTopLevelRowCount = ({
  tree,
  rowCountProp = 0
}) => {
  const rootGroupNode = tree[GRID_ROOT_GROUP_ID];
  return Math.max(rowCountProp, rootGroupNode.children.length + (rootGroupNode.footerId == null ? 0 : 1));
};
var getRowsStateFromCache = ({
  apiRef,
  rowCountProp = 0,
  loadingProp,
  previousTree,
  previousTreeDepths
}) => {
  const cache2 = apiRef.current.caches.rows;
  const {
    tree: unProcessedTree,
    treeDepths: unProcessedTreeDepths,
    dataRowIds: unProcessedDataRowIds,
    groupingName
  } = apiRef.current.applyStrategyProcessor("rowTreeCreation", {
    previousTree,
    previousTreeDepths,
    updates: cache2.updates,
    dataRowIdToIdLookup: cache2.dataRowIdToIdLookup,
    dataRowIdToModelLookup: cache2.dataRowIdToModelLookup
  });
  const groupingParamsWithHydrateRows = apiRef.current.unstable_applyPipeProcessors("hydrateRows", {
    tree: unProcessedTree,
    treeDepths: unProcessedTreeDepths,
    dataRowIdToIdLookup: cache2.dataRowIdToIdLookup,
    dataRowIds: unProcessedDataRowIds,
    dataRowIdToModelLookup: cache2.dataRowIdToModelLookup
  });
  apiRef.current.caches.rows.updates = {
    type: "partial",
    actions: {
      insert: [],
      modify: [],
      remove: []
    },
    idToActionLookup: {}
  };
  return _extends({}, groupingParamsWithHydrateRows, {
    totalRowCount: Math.max(rowCountProp, groupingParamsWithHydrateRows.dataRowIds.length),
    totalTopLevelRowCount: getTopLevelRowCount({
      tree: groupingParamsWithHydrateRows.tree,
      rowCountProp
    }),
    groupingName,
    loading: loadingProp
  });
};
var isAutoGeneratedRow = (rowNode) => rowNode.type === "skeletonRow" || rowNode.type === "footer" || rowNode.type === "group" && rowNode.isAutoGenerated || rowNode.type === "pinnedRow" && rowNode.isAutoGenerated;
var getTreeNodeDescendants = (tree, parentId, skipAutoGeneratedRows) => {
  const node = tree[parentId];
  if (node.type !== "group") {
    return [];
  }
  const validDescendants = [];
  for (let i = 0; i < node.children.length; i += 1) {
    const child = node.children[i];
    if (!skipAutoGeneratedRows || !isAutoGeneratedRow(tree[child])) {
      validDescendants.push(child);
    }
    const childDescendants = getTreeNodeDescendants(tree, child, skipAutoGeneratedRows);
    for (let j = 0; j < childDescendants.length; j += 1) {
      validDescendants.push(childDescendants[j]);
    }
  }
  if (!skipAutoGeneratedRows && node.footerId != null) {
    validDescendants.push(node.footerId);
  }
  return validDescendants;
};
var updateCacheWithNewRows = ({
  previousCache,
  getRowId,
  updates
}) => {
  if (previousCache.updates.type === "full") {
    throw new Error("MUI X: Unable to prepare a partial update if a full update is not applied yet.");
  }
  const uniqueUpdates = /* @__PURE__ */ new Map();
  updates.forEach((update) => {
    const id = getRowIdFromRowModel(update, getRowId, "A row was provided without id when calling updateRows():");
    if (uniqueUpdates.has(id)) {
      uniqueUpdates.set(id, _extends({}, uniqueUpdates.get(id), update));
    } else {
      uniqueUpdates.set(id, update);
    }
  });
  const partialUpdates = {
    type: "partial",
    actions: {
      insert: [...previousCache.updates.actions.insert ?? []],
      modify: [...previousCache.updates.actions.modify ?? []],
      remove: [...previousCache.updates.actions.remove ?? []]
    },
    idToActionLookup: _extends({}, previousCache.updates.idToActionLookup)
  };
  const dataRowIdToModelLookup = _extends({}, previousCache.dataRowIdToModelLookup);
  const dataRowIdToIdLookup = _extends({}, previousCache.dataRowIdToIdLookup);
  const alreadyAppliedActionsToRemove = {
    insert: {},
    modify: {},
    remove: {}
  };
  uniqueUpdates.forEach((partialRow, id) => {
    const actionAlreadyAppliedToRow = partialUpdates.idToActionLookup[id];
    if (partialRow._action === "delete") {
      if (actionAlreadyAppliedToRow === "remove" || !dataRowIdToModelLookup[id]) {
        return;
      }
      if (actionAlreadyAppliedToRow != null) {
        alreadyAppliedActionsToRemove[actionAlreadyAppliedToRow][id] = true;
      }
      partialUpdates.actions.remove.push(id);
      delete dataRowIdToModelLookup[id];
      delete dataRowIdToIdLookup[id];
      return;
    }
    const oldRow = dataRowIdToModelLookup[id];
    if (oldRow) {
      if (actionAlreadyAppliedToRow === "remove") {
        alreadyAppliedActionsToRemove.remove[id] = true;
        partialUpdates.actions.modify.push(id);
      } else if (actionAlreadyAppliedToRow == null) {
        partialUpdates.actions.modify.push(id);
      }
      dataRowIdToModelLookup[id] = _extends({}, oldRow, partialRow);
      return;
    }
    if (actionAlreadyAppliedToRow === "remove") {
      alreadyAppliedActionsToRemove.remove[id] = true;
      partialUpdates.actions.insert.push(id);
    } else if (actionAlreadyAppliedToRow == null) {
      partialUpdates.actions.insert.push(id);
    }
    dataRowIdToModelLookup[id] = partialRow;
    dataRowIdToIdLookup[id] = id;
  });
  const actionTypeWithActionsToRemove = Object.keys(alreadyAppliedActionsToRemove);
  for (let i = 0; i < actionTypeWithActionsToRemove.length; i += 1) {
    const actionType = actionTypeWithActionsToRemove[i];
    const idsToRemove = alreadyAppliedActionsToRemove[actionType];
    if (Object.keys(idsToRemove).length > 0) {
      partialUpdates.actions[actionType] = partialUpdates.actions[actionType].filter((id) => !idsToRemove[id]);
    }
  }
  return {
    dataRowIdToModelLookup,
    dataRowIdToIdLookup,
    updates: partialUpdates,
    rowsBeforePartialUpdates: previousCache.rowsBeforePartialUpdates,
    loadingPropBeforePartialUpdates: previousCache.loadingPropBeforePartialUpdates,
    rowCountPropBeforePartialUpdates: previousCache.rowCountPropBeforePartialUpdates
  };
};
function calculatePinnedRowsHeight(apiRef) {
  var _a, _b;
  const pinnedRows = gridPinnedRowsSelector(apiRef);
  const topPinnedRowsHeight = ((_a = pinnedRows == null ? void 0 : pinnedRows.top) == null ? void 0 : _a.reduce((acc, value) => {
    acc += apiRef.current.unstable_getRowHeight(value.id);
    return acc;
  }, 0)) || 0;
  const bottomPinnedRowsHeight = ((_b = pinnedRows == null ? void 0 : pinnedRows.bottom) == null ? void 0 : _b.reduce((acc, value) => {
    acc += apiRef.current.unstable_getRowHeight(value.id);
    return acc;
  }, 0)) || 0;
  return {
    top: topPinnedRowsHeight,
    bottom: bottomPinnedRowsHeight
  };
}
function getMinimalContentHeight(apiRef) {
  const dimensions = gridDimensionsSelector(apiRef.current.state);
  return `var(--DataGrid-overlayHeight, ${2 * dimensions.rowHeight}px)`;
}

// node_modules/@mui/x-data-grid/components/cell/GridBooleanCell.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var _excluded6 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "hasFocus", "tabIndex", "hideDescendantCount"];
var useUtilityClasses3 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["booleanCell"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridBooleanCellRaw(props) {
  const {
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded6);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes2 = useUtilityClasses3(ownerState);
  const Icon = React13.useMemo(() => value ? rootProps.slots.booleanCellTrueIcon : rootProps.slots.booleanCellFalseIcon, [rootProps.slots.booleanCellFalseIcon, rootProps.slots.booleanCellTrueIcon, value]);
  return (0, import_jsx_runtime6.jsx)(Icon, _extends({
    fontSize: "small",
    className: classes2.root,
    titleAccess: apiRef.current.getLocaleText(value ? "booleanCellTrueLabel" : "booleanCellFalseLabel"),
    "data-value": Boolean(value)
  }, other));
}
true ? GridBooleanCellRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * GridApi that let you manipulate the grid.
   */
  api: import_prop_types6.default.object.isRequired,
  /**
   * The mode of the cell.
   */
  cellMode: import_prop_types6.default.oneOf(["edit", "view"]).isRequired,
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: import_prop_types6.default.object.isRequired,
  /**
   * The column field of the cell that triggered the event.
   */
  field: import_prop_types6.default.string.isRequired,
  /**
   * A ref allowing to set imperative focus.
   * It can be passed to the element that should receive focus.
   * @ignore - do not document.
   */
  focusElementRef: import_prop_types6.default.oneOfType([import_prop_types6.default.func, import_prop_types6.default.shape({
    current: import_prop_types6.default.shape({
      focus: import_prop_types6.default.func.isRequired
    })
  })]),
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: import_prop_types6.default.any,
  /**
   * If true, the cell is the active element.
   */
  hasFocus: import_prop_types6.default.bool.isRequired,
  hideDescendantCount: import_prop_types6.default.bool,
  /**
   * The grid row id.
   */
  id: import_prop_types6.default.oneOfType([import_prop_types6.default.number, import_prop_types6.default.string]).isRequired,
  /**
   * If true, the cell is editable.
   */
  isEditable: import_prop_types6.default.bool,
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: import_prop_types6.default.any.isRequired,
  /**
   * The node of the row that the current cell belongs to.
   */
  rowNode: import_prop_types6.default.object.isRequired,
  /**
   * the tabIndex value.
   */
  tabIndex: import_prop_types6.default.oneOf([-1, 0]).isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: import_prop_types6.default.any
} : void 0;
var GridBooleanCell = React13.memo(GridBooleanCellRaw);
var renderBooleanCell = (params) => {
  if (params.field !== "__row_group_by_columns_group__" && isAutoGeneratedRow(params.rowNode)) {
    return "";
  }
  return (0, import_jsx_runtime6.jsx)(GridBooleanCell, _extends({}, params));
};

// node_modules/@mui/x-data-grid/components/cell/GridEditBooleanCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React14 = __toESM(require_react());
var import_prop_types7 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var _excluded7 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "className", "hasFocus", "isValidating", "isProcessingProps", "error", "onValueChange"];
var useUtilityClasses4 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["editBooleanCell"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridEditBooleanCell(props) {
  var _a;
  const {
    id: idProp,
    value,
    field,
    className,
    hasFocus,
    onValueChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded7);
  const apiRef = useGridApiContext();
  const inputRef = React14.useRef(null);
  const id = useId();
  const [valueState, setValueState] = React14.useState(value);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes2 = useUtilityClasses4(ownerState);
  const handleChange = React14.useCallback(async (event) => {
    const newValue = event.target.checked;
    if (onValueChange) {
      await onValueChange(event, newValue);
    }
    setValueState(newValue);
    await apiRef.current.setEditCellValue({
      id: idProp,
      field,
      value: newValue
    }, event);
  }, [apiRef, field, idProp, onValueChange]);
  React14.useEffect(() => {
    setValueState(value);
  }, [value]);
  useEnhancedEffect_default(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return (0, import_jsx_runtime7.jsx)("label", _extends({
    htmlFor: id,
    className: clsx_default(classes2.root, className)
  }, other, {
    children: (0, import_jsx_runtime7.jsx)(rootProps.slots.baseCheckbox, _extends({
      id,
      inputRef,
      checked: Boolean(valueState),
      onChange: handleChange,
      size: "small"
    }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseCheckbox))
  }));
}
true ? GridEditBooleanCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * GridApi that let you manipulate the grid.
   */
  api: import_prop_types7.default.object.isRequired,
  /**
   * The mode of the cell.
   */
  cellMode: import_prop_types7.default.oneOf(["edit", "view"]).isRequired,
  changeReason: import_prop_types7.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: import_prop_types7.default.object.isRequired,
  /**
   * The column field of the cell that triggered the event.
   */
  field: import_prop_types7.default.string.isRequired,
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: import_prop_types7.default.any,
  /**
   * If true, the cell is the active element.
   */
  hasFocus: import_prop_types7.default.bool.isRequired,
  /**
   * The grid row id.
   */
  id: import_prop_types7.default.oneOfType([import_prop_types7.default.number, import_prop_types7.default.string]).isRequired,
  /**
   * If true, the cell is editable.
   */
  isEditable: import_prop_types7.default.bool,
  isProcessingProps: import_prop_types7.default.bool,
  isValidating: import_prop_types7.default.bool,
  /**
   * Callback called when the value is changed by the user.
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {boolean} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange: import_prop_types7.default.func,
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: import_prop_types7.default.any.isRequired,
  /**
   * The node of the row that the current cell belongs to.
   */
  rowNode: import_prop_types7.default.object.isRequired,
  /**
   * the tabIndex value.
   */
  tabIndex: import_prop_types7.default.oneOf([-1, 0]).isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: import_prop_types7.default.any
} : void 0;
var renderEditBooleanCell = (params) => (0, import_jsx_runtime7.jsx)(GridEditBooleanCell, _extends({}, params));

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputBoolean.js
init_extends();
init_objectWithoutPropertiesLoose();
var React15 = __toESM(require_react());
var import_prop_types8 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var _excluded8 = ["item", "applyValue", "apiRef", "focusElementRef", "isFilterActive", "clearButton", "tabIndex", "label", "variant", "InputLabelProps"];
var BooleanOperatorContainer = styled_default("div")({
  display: "flex",
  alignItems: "center",
  width: "100%",
  [`& button`]: {
    margin: "auto 0px 5px 5px"
  }
});
function GridFilterInputBoolean(props) {
  var _a, _b, _c;
  const {
    item,
    applyValue,
    apiRef,
    focusElementRef,
    clearButton,
    tabIndex,
    label: labelProp,
    variant = "standard"
  } = props, others = _objectWithoutPropertiesLoose(props, _excluded8);
  const [filterValueState, setFilterValueState] = React15.useState(item.value || "");
  const rootProps = useGridRootProps();
  const labelId = useId();
  const selectId = useId();
  const baseSelectProps = ((_a = rootProps.slotProps) == null ? void 0 : _a.baseSelect) || {};
  const isSelectNative = baseSelectProps.native ?? false;
  const baseSelectOptionProps = ((_b = rootProps.slotProps) == null ? void 0 : _b.baseSelectOption) || {};
  const onFilterChange = React15.useCallback((event) => {
    const value = event.target.value;
    setFilterValueState(value);
    applyValue(_extends({}, item, {
      value
    }));
  }, [applyValue, item]);
  React15.useEffect(() => {
    setFilterValueState(item.value || "");
  }, [item.value]);
  const label = labelProp ?? apiRef.current.getLocaleText("filterPanelInputLabel");
  return (0, import_jsx_runtime8.jsxs)(BooleanOperatorContainer, {
    children: [(0, import_jsx_runtime8.jsxs)(rootProps.slots.baseFormControl, {
      fullWidth: true,
      children: [(0, import_jsx_runtime8.jsx)(rootProps.slots.baseInputLabel, _extends({}, (_c = rootProps.slotProps) == null ? void 0 : _c.baseInputLabel, {
        id: labelId,
        shrink: true,
        variant,
        children: label
      })), (0, import_jsx_runtime8.jsxs)(rootProps.slots.baseSelect, _extends({
        labelId,
        id: selectId,
        label,
        value: filterValueState,
        onChange: onFilterChange,
        variant,
        notched: variant === "outlined" ? true : void 0,
        native: isSelectNative,
        displayEmpty: true,
        inputProps: {
          ref: focusElementRef,
          tabIndex
        }
      }, others, baseSelectProps, {
        children: [(0, import_jsx_runtime8.jsx)(rootProps.slots.baseSelectOption, _extends({}, baseSelectOptionProps, {
          native: isSelectNative,
          value: "",
          children: apiRef.current.getLocaleText("filterValueAny")
        })), (0, import_jsx_runtime8.jsx)(rootProps.slots.baseSelectOption, _extends({}, baseSelectOptionProps, {
          native: isSelectNative,
          value: "true",
          children: apiRef.current.getLocaleText("filterValueTrue")
        })), (0, import_jsx_runtime8.jsx)(rootProps.slots.baseSelectOption, _extends({}, baseSelectOptionProps, {
          native: isSelectNative,
          value: "false",
          children: apiRef.current.getLocaleText("filterValueFalse")
        }))]
      }))]
    }), clearButton]
  });
}
true ? GridFilterInputBoolean.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types8.default.shape({
    current: import_prop_types8.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types8.default.func.isRequired,
  clearButton: import_prop_types8.default.node,
  focusElementRef: refType_default,
  /**
   * It is `true` if the filter either has a value or an operator with no value
   * required is selected (for example `isEmpty`)
   */
  isFilterActive: import_prop_types8.default.bool,
  item: import_prop_types8.default.shape({
    field: import_prop_types8.default.string.isRequired,
    id: import_prop_types8.default.oneOfType([import_prop_types8.default.number, import_prop_types8.default.string]),
    operator: import_prop_types8.default.string.isRequired,
    value: import_prop_types8.default.any
  }).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/colDef/gridBooleanOperators.js
var getGridBooleanOperators = () => [{
  value: "is",
  getApplyFilterFn: (filterItem) => {
    if (!filterItem.value) {
      return null;
    }
    const valueAsBoolean = String(filterItem.value) === "true";
    return (value) => {
      return Boolean(value) === valueAsBoolean;
    };
  },
  InputComponent: GridFilterInputBoolean
}];

// node_modules/@mui/x-data-grid/colDef/gridBooleanColDef.js
var gridBooleanFormatter = (value, row, column, apiRef) => {
  return value ? apiRef.current.getLocaleText("booleanCellTrueLabel") : apiRef.current.getLocaleText("booleanCellFalseLabel");
};
var stringToBoolean = (value) => {
  switch (value.toLowerCase().trim()) {
    case "true":
    case "yes":
    case "1":
      return true;
    case "false":
    case "no":
    case "0":
    case "null":
    case "undefined":
      return false;
    default:
      return void 0;
  }
};
var GRID_BOOLEAN_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "boolean",
  display: "flex",
  align: "center",
  headerAlign: "center",
  renderCell: renderBooleanCell,
  renderEditCell: renderEditBooleanCell,
  sortComparator: gridNumberComparator,
  valueFormatter: gridBooleanFormatter,
  filterOperators: getGridBooleanOperators(),
  getApplyQuickFilterFn: void 0,
  // @ts-ignore
  aggregable: false,
  // @ts-ignore
  pastedValueParser: (value) => stringToBoolean(value)
});

// node_modules/@mui/x-data-grid/colDef/gridCheckboxSelectionColDef.js
init_extends();
var React24 = __toESM(require_react());

// node_modules/@mui/x-data-grid/components/columnSelection/GridCellCheckboxRenderer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React16 = __toESM(require_react());
var import_prop_types9 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var _excluded9 = ["field", "id", "value", "formattedValue", "row", "rowNode", "colDef", "isEditable", "cellMode", "hasFocus", "tabIndex", "api"];
var useUtilityClasses5 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["checkboxInput"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridCellCheckboxForwardRef = React16.forwardRef(function GridCellCheckboxRenderer(props, ref) {
  var _a;
  const {
    field,
    id,
    value: isChecked,
    rowNode,
    hasFocus,
    tabIndex
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded9);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes2 = useUtilityClasses5(ownerState);
  const checkboxElement = React16.useRef(null);
  const rippleRef = React16.useRef(null);
  const handleRef = useForkRef(checkboxElement, ref);
  const handleChange = (event) => {
    const params = {
      value: event.target.checked,
      id
    };
    apiRef.current.publishEvent("rowSelectionCheckboxChange", params, event);
  };
  React16.useLayoutEffect(() => {
    if (tabIndex === 0) {
      const element = apiRef.current.getCellElement(id, field);
      if (element) {
        element.tabIndex = -1;
      }
    }
  }, [apiRef, tabIndex, id, field]);
  React16.useEffect(() => {
    var _a2;
    if (hasFocus) {
      const input = (_a2 = checkboxElement.current) == null ? void 0 : _a2.querySelector("input");
      input == null ? void 0 : input.focus({
        preventScroll: true
      });
    } else if (rippleRef.current) {
      rippleRef.current.stop({});
    }
  }, [hasFocus]);
  const handleKeyDown = React16.useCallback((event) => {
    if (event.key === " ") {
      event.stopPropagation();
    }
  }, []);
  if (rowNode.type === "footer" || rowNode.type === "pinnedRow") {
    return null;
  }
  const isSelectable = apiRef.current.isRowSelectable(id);
  const label = apiRef.current.getLocaleText(isChecked ? "checkboxSelectionUnselectRow" : "checkboxSelectionSelectRow");
  return (0, import_jsx_runtime9.jsx)(rootProps.slots.baseCheckbox, _extends({
    ref: handleRef,
    tabIndex,
    checked: isChecked,
    onChange: handleChange,
    className: classes2.root,
    inputProps: {
      "aria-label": label
    },
    onKeyDown: handleKeyDown,
    disabled: !isSelectable,
    touchRippleRef: rippleRef
    /* FIXME: typing error */
  }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseCheckbox, other));
});
true ? GridCellCheckboxForwardRef.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * GridApi that let you manipulate the grid.
   */
  api: import_prop_types9.default.object.isRequired,
  /**
   * The mode of the cell.
   */
  cellMode: import_prop_types9.default.oneOf(["edit", "view"]).isRequired,
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: import_prop_types9.default.object.isRequired,
  /**
   * The column field of the cell that triggered the event.
   */
  field: import_prop_types9.default.string.isRequired,
  /**
   * A ref allowing to set imperative focus.
   * It can be passed to the element that should receive focus.
   * @ignore - do not document.
   */
  focusElementRef: import_prop_types9.default.oneOfType([import_prop_types9.default.func, import_prop_types9.default.shape({
    current: import_prop_types9.default.shape({
      focus: import_prop_types9.default.func.isRequired
    })
  })]),
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: import_prop_types9.default.any,
  /**
   * If true, the cell is the active element.
   */
  hasFocus: import_prop_types9.default.bool.isRequired,
  /**
   * The grid row id.
   */
  id: import_prop_types9.default.oneOfType([import_prop_types9.default.number, import_prop_types9.default.string]).isRequired,
  /**
   * If true, the cell is editable.
   */
  isEditable: import_prop_types9.default.bool,
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: import_prop_types9.default.any.isRequired,
  /**
   * The node of the row that the current cell belongs to.
   */
  rowNode: import_prop_types9.default.object.isRequired,
  /**
   * the tabIndex value.
   */
  tabIndex: import_prop_types9.default.oneOf([-1, 0]).isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: import_prop_types9.default.any
} : void 0;
var GridCellCheckboxRenderer2 = GridCellCheckboxForwardRef;

// node_modules/@mui/x-data-grid/components/columnSelection/GridHeaderCheckbox.js
init_extends();
init_objectWithoutPropertiesLoose();
var React23 = __toESM(require_react());
var import_prop_types10 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-data-grid/hooks/features/rowSelection/utils.js
function isMultipleRowSelectionEnabled(props) {
  if (props.signature === GridSignature.DataGrid) {
    return props.checkboxSelection && props.disableMultipleRowSelection !== true;
  }
  return !props.disableMultipleRowSelection;
}

// node_modules/@mui/x-data-grid/hooks/features/focus/gridFocusStateSelector.js
var gridFocusStateSelector = (state) => state.focus;
var gridFocusCellSelector = createSelector2(gridFocusStateSelector, (focusState) => focusState.cell);
var gridFocusColumnHeaderSelector = createSelector2(gridFocusStateSelector, (focusState) => focusState.columnHeader);
var gridFocusColumnHeaderFilterSelector = createSelector2(gridFocusStateSelector, (focusState) => focusState.columnHeaderFilter);
var gridFocusColumnGroupHeaderSelector = createSelector2(gridFocusStateSelector, (focusState) => focusState.columnGroupHeader);
var gridTabIndexStateSelector = (state) => state.tabIndex;
var gridTabIndexCellSelector = createSelector2(gridTabIndexStateSelector, (state) => state.cell);
var gridTabIndexColumnHeaderSelector = createSelector2(gridTabIndexStateSelector, (state) => state.columnHeader);
var gridTabIndexColumnHeaderFilterSelector = createSelector2(gridTabIndexStateSelector, (state) => state.columnHeaderFilter);
var gridTabIndexColumnGroupHeaderSelector = createSelector2(gridTabIndexStateSelector, (state) => state.columnGroupHeader);

// node_modules/@mui/x-data-grid/hooks/features/rowSelection/gridRowSelectionSelector.js
var gridRowSelectionStateSelector = (state) => state.rowSelection;
var selectedGridRowsCountSelector = createSelector2(gridRowSelectionStateSelector, (selection) => selection.length);
var selectedGridRowsSelector = createSelectorMemoized(gridRowSelectionStateSelector, gridRowsLookupSelector, (selectedRows, rowsLookup) => new Map(selectedRows.map((id) => [id, rowsLookup[id]])));
var selectedIdsLookupSelector = createSelectorMemoized(gridRowSelectionStateSelector, (selection) => selection.reduce((lookup, rowId) => {
  lookup[rowId] = rowId;
  return lookup;
}, {}));

// node_modules/@mui/x-data-grid/hooks/features/sorting/gridSortingSelector.js
var gridSortingStateSelector = (state) => state.sorting;
var gridSortedRowIdsSelector = createSelector2(gridSortingStateSelector, (sortingState) => sortingState.sortedRows);
var gridSortedRowEntriesSelector = createSelectorMemoized(gridSortedRowIdsSelector, gridRowsLookupSelector, gridRowTreeSelector, (sortedIds, idRowsLookup, rowTree) => sortedIds.reduce((acc, id) => {
  const model = idRowsLookup[id];
  if (model) {
    acc.push({
      id,
      model
    });
  }
  const rowNode = rowTree[id];
  if (rowNode && isAutoGeneratedRow(rowNode)) {
    acc.push({
      id,
      model: {
        [GRID_ID_AUTOGENERATED]: id
      }
    });
  }
  return acc;
}, []));
var gridSortModelSelector = createSelector2(gridSortingStateSelector, (sorting) => sorting.sortModel);
var gridSortColumnLookupSelector = createSelectorMemoized(gridSortModelSelector, (sortModel) => {
  const result = sortModel.reduce((res, sortItem, index) => {
    res[sortItem.field] = {
      sortDirection: sortItem.sort,
      sortIndex: sortModel.length > 1 ? index + 1 : void 0
    };
    return res;
  }, {});
  return result;
});

// node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterSelector.js
var gridFilterStateSelector = (state) => state.filter;
var gridFilterModelSelector = createSelector2(gridFilterStateSelector, (filterState) => filterState.filterModel);
var gridQuickFilterValuesSelector = createSelector2(gridFilterModelSelector, (filterModel) => filterModel.quickFilterValues);
var gridVisibleRowsLookupSelector = (state) => state.visibleRowsLookup;
var gridFilteredRowsLookupSelector = createSelector2(gridFilterStateSelector, (filterState) => filterState.filteredRowsLookup);
var gridFilteredDescendantCountLookupSelector = createSelector2(gridFilterStateSelector, (filterState) => filterState.filteredDescendantCountLookup);
var gridExpandedSortedRowEntriesSelector = createSelectorMemoized(gridVisibleRowsLookupSelector, gridSortedRowEntriesSelector, (visibleRowsLookup, sortedRows) => sortedRows.filter((row) => visibleRowsLookup[row.id] !== false));
var gridExpandedSortedRowIdsSelector = createSelectorMemoized(gridExpandedSortedRowEntriesSelector, (visibleSortedRowEntries) => visibleSortedRowEntries.map((row) => row.id));
var gridFilteredSortedRowEntriesSelector = createSelectorMemoized(gridFilteredRowsLookupSelector, gridSortedRowEntriesSelector, (filteredRowsLookup, sortedRows) => sortedRows.filter((row) => filteredRowsLookup[row.id] !== false));
var gridFilteredSortedRowIdsSelector = createSelectorMemoized(gridFilteredSortedRowEntriesSelector, (filteredSortedRowEntries) => filteredSortedRowEntries.map((row) => row.id));
var gridFilteredSortedTopLevelRowEntriesSelector = createSelectorMemoized(gridExpandedSortedRowEntriesSelector, gridRowTreeSelector, gridRowMaximumTreeDepthSelector, (visibleSortedRows, rowTree, rowTreeDepth) => {
  if (rowTreeDepth < 2) {
    return visibleSortedRows;
  }
  return visibleSortedRows.filter((row) => {
    var _a;
    return ((_a = rowTree[row.id]) == null ? void 0 : _a.depth) === 0;
  });
});
var gridExpandedRowCountSelector = createSelector2(gridExpandedSortedRowEntriesSelector, (visibleSortedRows) => visibleSortedRows.length);
var gridFilteredTopLevelRowCountSelector = createSelector2(gridFilteredSortedTopLevelRowEntriesSelector, (visibleSortedTopLevelRows) => visibleSortedTopLevelRows.length);
var gridFilterActiveItemsSelector = createSelectorMemoized(gridFilterModelSelector, gridColumnLookupSelector, (filterModel, columnLookup) => {
  var _a;
  return (_a = filterModel.items) == null ? void 0 : _a.filter((item) => {
    var _a2, _b;
    if (!item.field) {
      return false;
    }
    const column = columnLookup[item.field];
    if (!(column == null ? void 0 : column.filterOperators) || ((_a2 = column == null ? void 0 : column.filterOperators) == null ? void 0 : _a2.length) === 0) {
      return false;
    }
    const filterOperator = column.filterOperators.find((operator) => operator.value === item.operator);
    if (!filterOperator) {
      return false;
    }
    return !filterOperator.InputComponent || item.value != null && ((_b = item.value) == null ? void 0 : _b.toString()) !== "";
  });
});
var gridFilterActiveItemsLookupSelector = createSelectorMemoized(gridFilterActiveItemsSelector, (activeFilters) => {
  const result = activeFilters.reduce((res, filterItem) => {
    if (!res[filterItem.field]) {
      res[filterItem.field] = [filterItem];
    } else {
      res[filterItem.field].push(filterItem);
    }
    return res;
  }, {});
  return result;
});

// node_modules/@mui/x-data-grid/hooks/utils/useGridApiMethod.js
var React17 = __toESM(require_react());
function useGridApiMethod(privateApiRef, apiMethods, visibility) {
  const isFirstRender = React17.useRef(true);
  React17.useEffect(() => {
    isFirstRender.current = false;
    privateApiRef.current.register(visibility, apiMethods);
  }, [privateApiRef, visibility, apiMethods]);
  if (isFirstRender.current) {
    privateApiRef.current.register(visibility, apiMethods);
  }
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridLogger.js
var React18 = __toESM(require_react());
function useGridLogger(privateApiRef, name) {
  const logger = React18.useRef(null);
  if (logger.current) {
    return logger.current;
  }
  const newLogger = privateApiRef.current.getLogger(name);
  logger.current = newLogger;
  return newLogger;
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridNativeEventListener.js
var React19 = __toESM(require_react());
var useGridNativeEventListener = (apiRef, ref, eventName, handler, options) => {
  const logger = useGridLogger(apiRef, "useNativeEventListener");
  const [added, setAdded] = React19.useState(false);
  const handlerRef = React19.useRef(handler);
  const targetElement = isFunction(ref) ? ref() : (ref == null ? void 0 : ref.current) ?? null;
  const wrapHandler = React19.useCallback((event) => {
    return handlerRef.current && handlerRef.current(event);
  }, []);
  React19.useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);
  React19.useEffect(() => {
    if (targetElement && eventName && !added) {
      logger.debug(`Binding native ${eventName} event`);
      targetElement.addEventListener(eventName, wrapHandler, options);
      setAdded(true);
      const unsubscribe = () => {
        logger.debug(`Clearing native ${eventName} event`);
        targetElement.removeEventListener(eventName, wrapHandler, options);
      };
      apiRef.current.subscribeEvent("unmount", unsubscribe);
    }
  }, [targetElement, wrapHandler, eventName, added, logger, options, apiRef]);
};

// node_modules/@mui/x-data-grid/hooks/utils/useFirstRender.js
var React20 = __toESM(require_react());
var useFirstRender = (callback) => {
  const isFirstRender = React20.useRef(true);
  if (isFirstRender.current) {
    isFirstRender.current = false;
    callback();
  }
};

// node_modules/@mui/x-data-grid/hooks/utils/useResizeObserver.js
var React21 = __toESM(require_react());
init_esm();
var isDevEnvironment = true;
var noop = () => {
};
function useResizeObserver(ref, fn, enabled) {
  const fnRef = React21.useRef(null);
  fnRef.current = fn;
  useEnhancedEffect_default(() => {
    if (enabled === false || typeof ResizeObserver === "undefined") {
      return noop;
    }
    let frameID = 0;
    const target = ref.current;
    const observer = new ResizeObserver((entries) => {
      if (isDevEnvironment) {
        frameID = requestAnimationFrame(() => {
          fnRef.current(entries);
        });
      } else {
        fnRef.current(entries);
      }
    });
    if (target) {
      observer.observe(target);
    }
    return () => {
      if (frameID) {
        cancelAnimationFrame(frameID);
      }
      observer.disconnect();
    };
  }, [ref, enabled]);
}

// node_modules/@mui/x-data-grid/hooks/utils/useRunOnce.js
var React22 = __toESM(require_react());
init_esm();
var noop2 = () => {
};
var useRunOnce = (condition, effect) => {
  const didRun = React22.useRef(false);
  useEnhancedEffect_default(() => {
    if (didRun.current || !condition) {
      return noop2;
    }
    didRun.current = true;
    return effect();
  }, [didRun.current || condition]);
};

// node_modules/@mui/x-data-grid/hooks/features/pagination/gridPaginationUtils.js
var MAX_PAGE_SIZE = 100;
var defaultPageSize = (autoPageSize) => autoPageSize ? 0 : 100;
var getPageCount = (rowCount, pageSize, page) => {
  if (pageSize > 0 && rowCount > 0) {
    return Math.ceil(rowCount / pageSize);
  }
  if (rowCount === -1) {
    return page + 2;
  }
  return 0;
};
var getDefaultGridPaginationModel = (autoPageSize) => ({
  page: 0,
  pageSize: autoPageSize ? 0 : 100
});
var getValidPage = (page, pageCount = 0) => {
  if (pageCount === 0) {
    return page;
  }
  return Math.max(Math.min(page, pageCount - 1), 0);
};
var throwIfPageSizeExceedsTheLimit = (pageSize, signatureProp) => {
  if (signatureProp === GridSignature.DataGrid && pageSize > MAX_PAGE_SIZE) {
    throw new Error(["MUI X: `pageSize` cannot exceed 100 in the MIT version of the DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
  }
};

// node_modules/@mui/x-data-grid/hooks/features/pagination/gridPaginationSelector.js
var gridPaginationSelector = (state) => state.pagination;
var gridPaginationModelSelector = createSelector2(gridPaginationSelector, (pagination) => pagination.paginationModel);
var gridPaginationRowCountSelector = createSelector2(gridPaginationSelector, (pagination) => pagination.rowCount);
var gridPaginationMetaSelector = createSelector2(gridPaginationSelector, (pagination) => pagination.meta);
var gridPageSelector = createSelector2(gridPaginationModelSelector, (paginationModel) => paginationModel.page);
var gridPageSizeSelector = createSelector2(gridPaginationModelSelector, (paginationModel) => paginationModel.pageSize);
var gridPageCountSelector = createSelector2(gridPaginationModelSelector, gridPaginationRowCountSelector, (paginationModel, rowCount) => getPageCount(rowCount, paginationModel.pageSize, paginationModel.page));
var gridPaginationRowRangeSelector = createSelectorMemoized(gridPaginationModelSelector, gridRowTreeSelector, gridRowMaximumTreeDepthSelector, gridExpandedSortedRowEntriesSelector, gridFilteredSortedTopLevelRowEntriesSelector, (paginationModel, rowTree, rowTreeDepth, visibleSortedRowEntries, visibleSortedTopLevelRowEntries) => {
  var _a;
  const visibleTopLevelRowCount = visibleSortedTopLevelRowEntries.length;
  const topLevelFirstRowIndex = Math.min(paginationModel.pageSize * paginationModel.page, visibleTopLevelRowCount - 1);
  const topLevelLastRowIndex = Math.min(topLevelFirstRowIndex + paginationModel.pageSize - 1, visibleTopLevelRowCount - 1);
  if (topLevelFirstRowIndex === -1 || topLevelLastRowIndex === -1) {
    return null;
  }
  if (rowTreeDepth < 2) {
    return {
      firstRowIndex: topLevelFirstRowIndex,
      lastRowIndex: topLevelLastRowIndex
    };
  }
  const topLevelFirstRow = visibleSortedTopLevelRowEntries[topLevelFirstRowIndex];
  const topLevelRowsInCurrentPageCount = topLevelLastRowIndex - topLevelFirstRowIndex + 1;
  const firstRowIndex = visibleSortedRowEntries.findIndex((row) => row.id === topLevelFirstRow.id);
  let lastRowIndex = firstRowIndex;
  let topLevelRowAdded = 0;
  while (lastRowIndex < visibleSortedRowEntries.length && topLevelRowAdded <= topLevelRowsInCurrentPageCount) {
    const row = visibleSortedRowEntries[lastRowIndex];
    const depth = (_a = rowTree[row.id]) == null ? void 0 : _a.depth;
    if (depth === void 0) {
      lastRowIndex += 1;
    } else {
      if (topLevelRowAdded < topLevelRowsInCurrentPageCount || depth > 0) {
        lastRowIndex += 1;
      }
      if (depth === 0) {
        topLevelRowAdded += 1;
      }
    }
  }
  return {
    firstRowIndex,
    lastRowIndex: lastRowIndex - 1
  };
});
var gridPaginatedVisibleSortedGridRowEntriesSelector = createSelectorMemoized(gridExpandedSortedRowEntriesSelector, gridPaginationRowRangeSelector, (visibleSortedRowEntries, paginationRange) => {
  if (!paginationRange) {
    return [];
  }
  return visibleSortedRowEntries.slice(paginationRange.firstRowIndex, paginationRange.lastRowIndex + 1);
});
var gridPaginatedVisibleSortedGridRowIdsSelector = createSelectorMemoized(gridExpandedSortedRowIdsSelector, gridPaginationRowRangeSelector, (visibleSortedRowIds, paginationRange) => {
  if (!paginationRange) {
    return [];
  }
  return visibleSortedRowIds.slice(paginationRange.firstRowIndex, paginationRange.lastRowIndex + 1);
});

// node_modules/@mui/x-data-grid/components/columnSelection/GridHeaderCheckbox.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var _excluded10 = ["field", "colDef"];
var useUtilityClasses6 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["checkboxInput"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridHeaderCheckbox = React23.forwardRef(function GridHeaderCheckbox2(props, ref) {
  var _a;
  const other = _objectWithoutPropertiesLoose(props, _excluded10);
  const [, forceUpdate] = React23.useState(false);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes2 = useUtilityClasses6(ownerState);
  const tabIndexState = useGridSelector(apiRef, gridTabIndexColumnHeaderSelector);
  const selection = useGridSelector(apiRef, gridRowSelectionStateSelector);
  const visibleRowIds = useGridSelector(apiRef, gridExpandedSortedRowIdsSelector);
  const paginatedVisibleRowIds = useGridSelector(apiRef, gridPaginatedVisibleSortedGridRowIdsSelector);
  const filteredSelection = React23.useMemo(() => {
    if (typeof rootProps.isRowSelectable !== "function") {
      return selection;
    }
    return selection.filter((id) => {
      if (!apiRef.current.getRow(id)) {
        return false;
      }
      return rootProps.isRowSelectable(apiRef.current.getRowParams(id));
    });
  }, [apiRef, rootProps.isRowSelectable, selection]);
  const selectionCandidates = React23.useMemo(() => {
    const rowIds = !rootProps.pagination || !rootProps.checkboxSelectionVisibleOnly ? visibleRowIds : paginatedVisibleRowIds;
    return rowIds.reduce((acc, id) => {
      acc[id] = true;
      return acc;
    }, {});
  }, [rootProps.pagination, rootProps.checkboxSelectionVisibleOnly, paginatedVisibleRowIds, visibleRowIds]);
  const currentSelectionSize = React23.useMemo(() => filteredSelection.filter((id) => selectionCandidates[id]).length, [filteredSelection, selectionCandidates]);
  const isIndeterminate = currentSelectionSize > 0 && currentSelectionSize < Object.keys(selectionCandidates).length;
  const isChecked = currentSelectionSize > 0;
  const handleChange = (event) => {
    const params = {
      value: event.target.checked
    };
    apiRef.current.publishEvent("headerSelectionCheckboxChange", params);
  };
  const tabIndex = tabIndexState !== null && tabIndexState.field === props.field ? 0 : -1;
  React23.useLayoutEffect(() => {
    const element = apiRef.current.getColumnHeaderElement(props.field);
    if (tabIndex === 0 && element) {
      element.tabIndex = -1;
    }
  }, [tabIndex, apiRef, props.field]);
  const handleKeyDown = React23.useCallback((event) => {
    if (event.key === " ") {
      apiRef.current.publishEvent("headerSelectionCheckboxChange", {
        value: !isChecked
      });
    }
  }, [apiRef, isChecked]);
  const handleSelectionChange = React23.useCallback(() => {
    forceUpdate((p) => !p);
  }, []);
  React23.useEffect(() => {
    return apiRef.current.subscribeEvent("rowSelectionChange", handleSelectionChange);
  }, [apiRef, handleSelectionChange]);
  const label = apiRef.current.getLocaleText(isChecked ? "checkboxSelectionUnselectAllRows" : "checkboxSelectionSelectAllRows");
  return (0, import_jsx_runtime10.jsx)(rootProps.slots.baseCheckbox, _extends({
    ref,
    indeterminate: isIndeterminate,
    checked: isChecked,
    onChange: handleChange,
    className: classes2.root,
    inputProps: {
      "aria-label": label
    },
    tabIndex,
    onKeyDown: handleKeyDown,
    disabled: !isMultipleRowSelectionEnabled(rootProps)
  }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseCheckbox, other));
});
true ? GridHeaderCheckbox.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The column of the current header component.
   */
  colDef: import_prop_types10.default.object.isRequired,
  /**
   * The column field of the column that triggered the event
   */
  field: import_prop_types10.default.string.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/colDef/gridCheckboxSelectionColDef.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var GRID_CHECKBOX_SELECTION_FIELD = "__check__";
var GRID_CHECKBOX_SELECTION_COL_DEF = _extends({}, GRID_BOOLEAN_COL_DEF, {
  type: "custom",
  field: GRID_CHECKBOX_SELECTION_FIELD,
  width: 50,
  resizable: false,
  sortable: false,
  filterable: false,
  // @ts-ignore
  aggregable: false,
  disableColumnMenu: true,
  disableReorder: true,
  disableExport: true,
  getApplyQuickFilterFn: void 0,
  display: "flex",
  valueGetter: (value, row, column, apiRef) => {
    const selectionLookup = selectedIdsLookupSelector(apiRef);
    const rowId = apiRef.current.getRowId(row);
    return selectionLookup[rowId] !== void 0;
  },
  renderHeader: (params) => (0, import_jsx_runtime11.jsx)(GridHeaderCheckbox, _extends({}, params)),
  renderCell: (params) => (0, import_jsx_runtime11.jsx)(GridCellCheckboxRenderer2, _extends({}, params))
});

// node_modules/@mui/x-data-grid/colDef/gridDateColDef.js
init_extends();

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputDate.js
init_extends();
init_objectWithoutPropertiesLoose();
var React25 = __toESM(require_react());
var import_prop_types11 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime12 = __toESM(require_jsx_runtime());
var _excluded11 = ["item", "applyValue", "type", "apiRef", "focusElementRef", "InputProps", "isFilterActive", "clearButton", "tabIndex", "disabled"];
function convertFilterItemValueToInputValue(itemValue, inputType) {
  if (itemValue == null) {
    return "";
  }
  const dateCopy = new Date(itemValue);
  if (Number.isNaN(dateCopy.getTime())) {
    return "";
  }
  if (inputType === "date") {
    return dateCopy.toISOString().substring(0, 10);
  }
  if (inputType === "datetime-local") {
    dateCopy.setMinutes(dateCopy.getMinutes() - dateCopy.getTimezoneOffset());
    return dateCopy.toISOString().substring(0, 19);
  }
  return dateCopy.toISOString().substring(0, 10);
}
function GridFilterInputDate(props) {
  var _a;
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef,
    InputProps,
    clearButton,
    tabIndex,
    disabled
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded11);
  const filterTimeout = useTimeout();
  const [filterValueState, setFilterValueState] = React25.useState(() => convertFilterItemValueToInputValue(item.value, type));
  const [applying, setIsApplying] = React25.useState(false);
  const id = useId();
  const rootProps = useGridRootProps();
  const onFilterChange = React25.useCallback((event) => {
    filterTimeout.clear();
    const value = event.target.value;
    setFilterValueState(value);
    setIsApplying(true);
    filterTimeout.start(rootProps.filterDebounceMs, () => {
      const date = new Date(value);
      applyValue(_extends({}, item, {
        value: Number.isNaN(date.getTime()) ? void 0 : date
      }));
      setIsApplying(false);
    });
  }, [applyValue, item, rootProps.filterDebounceMs, filterTimeout]);
  React25.useEffect(() => {
    const value = convertFilterItemValueToInputValue(item.value, type);
    setFilterValueState(value);
  }, [item.value, type]);
  return (0, import_jsx_runtime12.jsx)(rootProps.slots.baseTextField, _extends({
    fullWidth: true,
    id,
    label: apiRef.current.getLocaleText("filterPanelInputLabel"),
    placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
    value: filterValueState,
    onChange: onFilterChange,
    variant: "standard",
    type: type || "text",
    InputLabelProps: {
      shrink: true
    },
    inputRef: focusElementRef,
    InputProps: _extends({}, applying || clearButton ? {
      endAdornment: applying ? (0, import_jsx_runtime12.jsx)(rootProps.slots.loadIcon, {
        fontSize: "small",
        color: "action"
      }) : clearButton
    } : {}, {
      disabled
    }, InputProps, {
      inputProps: _extends({
        max: type === "datetime-local" ? "9999-12-31T23:59" : "9999-12-31",
        tabIndex
      }, InputProps == null ? void 0 : InputProps.inputProps)
    })
  }, other, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTextField));
}
true ? GridFilterInputDate.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types11.default.shape({
    current: import_prop_types11.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types11.default.func.isRequired,
  clearButton: import_prop_types11.default.node,
  focusElementRef: import_prop_types11.default.oneOfType([import_prop_types11.default.func, import_prop_types11.default.object]),
  /**
   * It is `true` if the filter either has a value or an operator with no value
   * required is selected (for example `isEmpty`)
   */
  isFilterActive: import_prop_types11.default.bool,
  item: import_prop_types11.default.shape({
    field: import_prop_types11.default.string.isRequired,
    id: import_prop_types11.default.oneOfType([import_prop_types11.default.number, import_prop_types11.default.string]),
    operator: import_prop_types11.default.string.isRequired,
    value: import_prop_types11.default.any
  }).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/colDef/gridDateOperators.js
function buildApplyFilterFn(filterItem, compareFn, showTime, keepHours) {
  if (!filterItem.value) {
    return null;
  }
  const date = new Date(filterItem.value);
  if (showTime) {
    date.setSeconds(0, 0);
  } else {
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    date.setHours(0, 0, 0, 0);
  }
  const time = date.getTime();
  return (value) => {
    if (!value) {
      return false;
    }
    if (keepHours) {
      return compareFn(value.getTime(), time);
    }
    const dateCopy = new Date(value);
    if (showTime) {
      dateCopy.setSeconds(0, 0);
    } else {
      dateCopy.setHours(0, 0, 0, 0);
    }
    return compareFn(dateCopy.getTime(), time);
  };
}
var getGridDateOperators = (showTime) => [{
  value: "is",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 === value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "not",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 !== value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "after",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 > value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "onOrAfter",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 >= value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "before",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 < value2, showTime, !showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "onOrBefore",
  getApplyFilterFn: (filterItem) => {
    return buildApplyFilterFn(filterItem, (value1, value2) => value1 <= value2, showTime);
  },
  InputComponent: GridFilterInputDate,
  InputComponentProps: {
    type: showTime ? "datetime-local" : "date"
  }
}, {
  value: "isEmpty",
  getApplyFilterFn: () => {
    return (value) => {
      return value == null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isNotEmpty",
  getApplyFilterFn: () => {
    return (value) => {
      return value != null;
    };
  },
  requiresFilterValue: false
}];

// node_modules/@mui/x-data-grid/components/cell/GridEditDateCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React26 = __toESM(require_react());
var import_prop_types12 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime13 = __toESM(require_jsx_runtime());
var _excluded12 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "hasFocus", "inputProps", "isValidating", "isProcessingProps", "onValueChange"];
var StyledInputBase = styled_default(InputBase_default)({
  fontSize: "inherit"
});
var useUtilityClasses7 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["editInputCell"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridEditDateCell(props) {
  const {
    id,
    value: valueProp,
    field,
    colDef,
    hasFocus,
    inputProps,
    onValueChange
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded12);
  const isDateTime = colDef.type === "dateTime";
  const apiRef = useGridApiContext();
  const inputRef = React26.useRef();
  const valueTransformed = React26.useMemo(() => {
    let parsedDate;
    if (valueProp == null) {
      parsedDate = null;
    } else if (valueProp instanceof Date) {
      parsedDate = valueProp;
    } else {
      parsedDate = new Date((valueProp ?? "").toString());
    }
    let formattedDate;
    if (parsedDate == null || Number.isNaN(parsedDate.getTime())) {
      formattedDate = "";
    } else {
      const localDate = new Date(parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60 * 1e3);
      formattedDate = localDate.toISOString().substr(0, isDateTime ? 16 : 10);
    }
    return {
      parsed: parsedDate,
      formatted: formattedDate
    };
  }, [valueProp, isDateTime]);
  const [valueState, setValueState] = React26.useState(valueTransformed);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes
  };
  const classes2 = useUtilityClasses7(ownerState);
  const parseValueToDate = React26.useCallback((value) => {
    if (value === "") {
      return null;
    }
    const [date, time] = value.split("T");
    const [year, month, day] = date.split("-");
    const parsedDate = /* @__PURE__ */ new Date();
    parsedDate.setFullYear(Number(year), Number(month) - 1, Number(day));
    parsedDate.setHours(0, 0, 0, 0);
    if (time) {
      const [hours, minutes] = time.split(":");
      parsedDate.setHours(Number(hours), Number(minutes), 0, 0);
    }
    return parsedDate;
  }, []);
  const handleChange = React26.useCallback(async (event) => {
    const newFormattedDate = event.target.value;
    const newParsedDate = parseValueToDate(newFormattedDate);
    if (onValueChange) {
      await onValueChange(event, newParsedDate);
    }
    setValueState({
      parsed: newParsedDate,
      formatted: newFormattedDate
    });
    apiRef.current.setEditCellValue({
      id,
      field,
      value: newParsedDate
    }, event);
  }, [apiRef, field, id, onValueChange, parseValueToDate]);
  React26.useEffect(() => {
    setValueState((state) => {
      var _a, _b;
      if (valueTransformed.parsed !== state.parsed && ((_a = valueTransformed.parsed) == null ? void 0 : _a.getTime()) !== ((_b = state.parsed) == null ? void 0 : _b.getTime())) {
        return valueTransformed;
      }
      return state;
    });
  }, [valueTransformed]);
  useEnhancedEffect_default(() => {
    if (hasFocus) {
      inputRef.current.focus();
    }
  }, [hasFocus]);
  return (0, import_jsx_runtime13.jsx)(StyledInputBase, _extends({
    inputRef,
    fullWidth: true,
    className: classes2.root,
    type: isDateTime ? "datetime-local" : "date",
    inputProps: _extends({
      max: isDateTime ? "9999-12-31T23:59" : "9999-12-31"
    }, inputProps),
    value: valueState.formatted,
    onChange: handleChange
  }, other));
}
true ? GridEditDateCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * GridApi that let you manipulate the grid.
   */
  api: import_prop_types12.default.object.isRequired,
  /**
   * The mode of the cell.
   */
  cellMode: import_prop_types12.default.oneOf(["edit", "view"]).isRequired,
  changeReason: import_prop_types12.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: import_prop_types12.default.object.isRequired,
  /**
   * The column field of the cell that triggered the event.
   */
  field: import_prop_types12.default.string.isRequired,
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: import_prop_types12.default.any,
  /**
   * If true, the cell is the active element.
   */
  hasFocus: import_prop_types12.default.bool.isRequired,
  /**
   * The grid row id.
   */
  id: import_prop_types12.default.oneOfType([import_prop_types12.default.number, import_prop_types12.default.string]).isRequired,
  /**
   * If true, the cell is editable.
   */
  isEditable: import_prop_types12.default.bool,
  isProcessingProps: import_prop_types12.default.bool,
  isValidating: import_prop_types12.default.bool,
  /**
   * Callback called when the value is changed by the user.
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {Date | null} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange: import_prop_types12.default.func,
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: import_prop_types12.default.any.isRequired,
  /**
   * The node of the row that the current cell belongs to.
   */
  rowNode: import_prop_types12.default.object.isRequired,
  /**
   * the tabIndex value.
   */
  tabIndex: import_prop_types12.default.oneOf([-1, 0]).isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: import_prop_types12.default.any
} : void 0;
var renderEditDateCell = (params) => (0, import_jsx_runtime13.jsx)(GridEditDateCell, _extends({}, params));

// node_modules/@mui/x-data-grid/colDef/gridDateColDef.js
function throwIfNotDateObject({
  value,
  columnType,
  rowId,
  field
}) {
  if (!(value instanceof Date)) {
    throw new Error([`MUI X: \`${columnType}\` column type only accepts \`Date\` objects as values.`, "Use `valueGetter` to transform the value into a `Date` object.", `Row ID: ${rowId}, field: "${field}".`].join("\n"));
  }
}
var gridDateFormatter = (value, row, column, apiRef) => {
  if (!value) {
    return "";
  }
  const rowId = apiRef.current.getRowId(row);
  throwIfNotDateObject({
    value,
    columnType: "date",
    rowId,
    field: column.field
  });
  return value.toLocaleDateString();
};
var gridDateTimeFormatter = (value, row, column, apiRef) => {
  if (!value) {
    return "";
  }
  const rowId = apiRef.current.getRowId(row);
  throwIfNotDateObject({
    value,
    columnType: "dateTime",
    rowId,
    field: column.field
  });
  return value.toLocaleString();
};
var GRID_DATE_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "date",
  sortComparator: gridDateComparator,
  valueFormatter: gridDateFormatter,
  filterOperators: getGridDateOperators(),
  renderEditCell: renderEditDateCell,
  // @ts-ignore
  pastedValueParser: (value) => new Date(value)
});
var GRID_DATETIME_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "dateTime",
  sortComparator: gridDateComparator,
  valueFormatter: gridDateTimeFormatter,
  filterOperators: getGridDateOperators(true),
  renderEditCell: renderEditDateCell,
  // @ts-ignore
  pastedValueParser: (value) => new Date(value)
});

// node_modules/@mui/x-data-grid/colDef/gridNumericColDef.js
init_extends();

// node_modules/@mui/x-data-grid/colDef/gridNumericOperators.js
var parseNumericValue = (value) => {
  if (value == null) {
    return null;
  }
  return Number(value);
};
var getGridNumericQuickFilterFn = (value) => {
  if (value == null || Number.isNaN(value) || value === "") {
    return null;
  }
  return (columnValue) => {
    return parseNumericValue(columnValue) === parseNumericValue(value);
  };
};
var getGridNumericOperators = () => [{
  value: "=",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return (value) => {
      return parseNumericValue(value) === filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  value: "!=",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return (value) => {
      return parseNumericValue(value) !== filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  value: ">",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return (value) => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) > filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  value: ">=",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return (value) => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) >= filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  value: "<",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return (value) => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) < filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  value: "<=",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || Number.isNaN(filterItem.value)) {
      return null;
    }
    return (value) => {
      if (value == null) {
        return false;
      }
      return parseNumericValue(value) <= filterItem.value;
    };
  },
  InputComponent: GridFilterInputValue,
  InputComponentProps: {
    type: "number"
  }
}, {
  value: "isEmpty",
  getApplyFilterFn: () => {
    return (value) => {
      return value == null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isNotEmpty",
  getApplyFilterFn: () => {
    return (value) => {
      return value != null;
    };
  },
  requiresFilterValue: false
}, {
  value: "isAnyOf",
  getApplyFilterFn: (filterItem) => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    return (value) => {
      return value != null && filterItem.value.includes(Number(value));
    };
  },
  InputComponent: GridFilterInputMultipleValue,
  InputComponentProps: {
    type: "number"
  }
}];

// node_modules/@mui/x-data-grid/colDef/gridNumericColDef.js
var GRID_NUMERIC_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "number",
  align: "right",
  headerAlign: "right",
  sortComparator: gridNumberComparator,
  valueParser: (value) => value === "" ? null : Number(value),
  valueFormatter: (value) => isNumber(value) ? value.toLocaleString() : value || "",
  filterOperators: getGridNumericOperators(),
  getApplyQuickFilterFn: getGridNumericQuickFilterFn
});

// node_modules/@mui/x-data-grid/colDef/gridSingleSelectColDef.js
init_extends();

// node_modules/@mui/x-data-grid/components/cell/GridEditSingleSelectCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React27 = __toESM(require_react());
var import_prop_types13 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-data-grid/utils/keyboardUtils.js
var isEscapeKey = (key) => key === "Escape";
var isTabKey = (key) => key === "Tab";
function isPrintableKey(event) {
  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;
}
var isNavigationKey = (key) => key.indexOf("Arrow") === 0 || key.indexOf("Page") === 0 || key === " " || key === "Home" || key === "End";
var isKeyboardEvent = (event) => !!event.key;
var isHideMenuKey = (key) => isTabKey(key) || isEscapeKey(key);
function isPasteShortcut(event) {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "v" && !event.shiftKey && !event.altKey) {
    return true;
  }
  return false;
}

// node_modules/@mui/x-data-grid/components/panel/filterPanel/filterPanelUtils.js
init_extends();
function isSingleSelectColDef(colDef) {
  return (colDef == null ? void 0 : colDef.type) === "singleSelect";
}
function getValueOptions(column, additionalParams) {
  if (!column) {
    return void 0;
  }
  return typeof column.valueOptions === "function" ? column.valueOptions(_extends({
    field: column.field
  }, additionalParams)) : column.valueOptions;
}
function getValueFromValueOptions(value, valueOptions, getOptionValue) {
  if (valueOptions === void 0) {
    return void 0;
  }
  const result = valueOptions.find((option) => {
    const optionValue = getOptionValue(option);
    return String(optionValue) === String(value);
  });
  return getOptionValue(result);
}

// node_modules/@mui/x-data-grid/components/cell/GridEditSingleSelectCell.js
var import_react = __toESM(require_react());
var import_jsx_runtime14 = __toESM(require_jsx_runtime());
var _excluded13 = ["id", "value", "formattedValue", "api", "field", "row", "rowNode", "colDef", "cellMode", "isEditable", "tabIndex", "className", "hasFocus", "isValidating", "isProcessingProps", "error", "onValueChange", "initialOpen"];
var _excluded22 = ["MenuProps"];
function isKeyboardEvent2(event) {
  return !!event.key;
}
function GridEditSingleSelectCell(props) {
  var _a, _b;
  const rootProps = useGridRootProps();
  const {
    id,
    value: valueProp,
    field,
    row,
    colDef,
    hasFocus,
    error,
    onValueChange,
    initialOpen = rootProps.editMode === GridEditModes.Cell
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded13);
  const apiRef = useGridApiContext();
  const ref = React27.useRef();
  const inputRef = React27.useRef();
  const [open, setOpen] = React27.useState(initialOpen);
  const baseSelectProps = ((_a = rootProps.slotProps) == null ? void 0 : _a.baseSelect) || {};
  const isSelectNative = baseSelectProps.native ?? false;
  const _ref = ((_b = rootProps.slotProps) == null ? void 0 : _b.baseSelect) || {}, {
    MenuProps
  } = _ref, otherBaseSelectProps = _objectWithoutPropertiesLoose(_ref, _excluded22);
  useEnhancedEffect_default(() => {
    var _a2;
    if (hasFocus) {
      (_a2 = inputRef.current) == null ? void 0 : _a2.focus();
    }
  }, [hasFocus]);
  if (!isSingleSelectColDef(colDef)) {
    return null;
  }
  const valueOptions = getValueOptions(colDef, {
    id,
    row
  });
  if (!valueOptions) {
    return null;
  }
  const getOptionValue = colDef.getOptionValue;
  const getOptionLabel = colDef.getOptionLabel;
  const handleChange = async (event) => {
    if (!isSingleSelectColDef(colDef) || !valueOptions) {
      return;
    }
    setOpen(false);
    const target = event.target;
    const formattedTargetValue = getValueFromValueOptions(target.value, valueOptions, getOptionValue);
    if (onValueChange) {
      await onValueChange(event, formattedTargetValue);
    }
    await apiRef.current.setEditCellValue({
      id,
      field,
      value: formattedTargetValue
    }, event);
  };
  const handleClose = (event, reason) => {
    if (rootProps.editMode === GridEditModes.Row) {
      setOpen(false);
      return;
    }
    if (reason === "backdropClick" || isEscapeKey(event.key)) {
      const params = apiRef.current.getCellParams(id, field);
      apiRef.current.publishEvent("cellEditStop", _extends({}, params, {
        reason: isEscapeKey(event.key) ? GridCellEditStopReasons.escapeKeyDown : GridCellEditStopReasons.cellFocusOut
      }));
    }
  };
  const handleOpen = (event) => {
    if (isKeyboardEvent2(event) && event.key === "Enter") {
      return;
    }
    setOpen(true);
  };
  if (!valueOptions || !colDef) {
    return null;
  }
  return (0, import_jsx_runtime14.jsx)(rootProps.slots.baseSelect, _extends({
    ref,
    inputRef,
    value: valueProp,
    onChange: handleChange,
    open,
    onOpen: handleOpen,
    MenuProps: _extends({
      onClose: handleClose
    }, MenuProps),
    error,
    native: isSelectNative,
    fullWidth: true
  }, other, otherBaseSelectProps, {
    children: valueOptions.map((valueOption) => {
      var _a2;
      const value = getOptionValue(valueOption);
      return (0, import_react.createElement)(rootProps.slots.baseSelectOption, _extends({}, ((_a2 = rootProps.slotProps) == null ? void 0 : _a2.baseSelectOption) || {}, {
        native: isSelectNative,
        key: value,
        value
      }), getOptionLabel(valueOption));
    })
  }));
}
true ? GridEditSingleSelectCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * GridApi that let you manipulate the grid.
   */
  api: import_prop_types13.default.object.isRequired,
  /**
   * The mode of the cell.
   */
  cellMode: import_prop_types13.default.oneOf(["edit", "view"]).isRequired,
  changeReason: import_prop_types13.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: import_prop_types13.default.object.isRequired,
  /**
   * The column field of the cell that triggered the event.
   */
  field: import_prop_types13.default.string.isRequired,
  /**
   * The cell value formatted with the column valueFormatter.
   */
  formattedValue: import_prop_types13.default.any,
  /**
   * If true, the cell is the active element.
   */
  hasFocus: import_prop_types13.default.bool.isRequired,
  /**
   * The grid row id.
   */
  id: import_prop_types13.default.oneOfType([import_prop_types13.default.number, import_prop_types13.default.string]).isRequired,
  /**
   * If true, the select opens by default.
   */
  initialOpen: import_prop_types13.default.bool,
  /**
   * If true, the cell is editable.
   */
  isEditable: import_prop_types13.default.bool,
  isProcessingProps: import_prop_types13.default.bool,
  isValidating: import_prop_types13.default.bool,
  /**
   * Callback called when the value is changed by the user.
   * @param {SelectChangeEvent<any>} event The event source of the callback.
   * @param {any} newValue The value that is going to be passed to `apiRef.current.setEditCellValue`.
   * @returns {Promise<void> | void} A promise to be awaited before calling `apiRef.current.setEditCellValue`
   */
  onValueChange: import_prop_types13.default.func,
  /**
   * The row model of the row that the current cell belongs to.
   */
  row: import_prop_types13.default.any.isRequired,
  /**
   * The node of the row that the current cell belongs to.
   */
  rowNode: import_prop_types13.default.object.isRequired,
  /**
   * the tabIndex value.
   */
  tabIndex: import_prop_types13.default.oneOf([-1, 0]).isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: import_prop_types13.default.any
} : void 0;
var renderEditSingleSelectCell = (params) => (0, import_jsx_runtime14.jsx)(GridEditSingleSelectCell, _extends({}, params));

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputSingleSelect.js
init_objectWithoutPropertiesLoose();
init_extends();
var React28 = __toESM(require_react());
var import_prop_types14 = __toESM(require_prop_types());
init_esm();
var import_react2 = __toESM(require_react());
var import_jsx_runtime15 = __toESM(require_jsx_runtime());
var _excluded14 = ["item", "applyValue", "type", "apiRef", "focusElementRef", "placeholder", "tabIndex", "label", "variant", "isFilterActive", "clearButton", "InputLabelProps"];
var renderSingleSelectOptions = ({
  column,
  OptionComponent,
  getOptionLabel,
  getOptionValue,
  isSelectNative,
  baseSelectOptionProps
}) => {
  const iterableColumnValues = ["", ...getValueOptions(column) || []];
  return iterableColumnValues.map((option) => {
    const value = getOptionValue(option);
    let label = getOptionLabel(option);
    if (label === "") {
      label = " ";
    }
    return (0, import_react2.createElement)(OptionComponent, _extends({}, baseSelectOptionProps, {
      native: isSelectNative,
      key: value,
      value
    }), label);
  });
};
var SingleSelectOperatorContainer = styled_default("div")({
  display: "flex",
  alignItems: "flex-end",
  width: "100%",
  [`& button`]: {
    margin: "auto 0px 5px 5px"
  }
});
function GridFilterInputSingleSelect(props) {
  var _a, _b, _c, _d, _e;
  const {
    item,
    applyValue,
    type,
    apiRef,
    focusElementRef,
    placeholder,
    tabIndex,
    label: labelProp,
    variant = "standard",
    clearButton
  } = props, others = _objectWithoutPropertiesLoose(props, _excluded14);
  const filterValue = item.value ?? "";
  const id = useId();
  const labelId = useId();
  const rootProps = useGridRootProps();
  const isSelectNative = ((_b = (_a = rootProps.slotProps) == null ? void 0 : _a.baseSelect) == null ? void 0 : _b.native) ?? false;
  let resolvedColumn = null;
  if (item.field) {
    const column = apiRef.current.getColumn(item.field);
    if (isSingleSelectColDef(column)) {
      resolvedColumn = column;
    }
  }
  const getOptionValue = resolvedColumn == null ? void 0 : resolvedColumn.getOptionValue;
  const getOptionLabel = resolvedColumn == null ? void 0 : resolvedColumn.getOptionLabel;
  const currentValueOptions = React28.useMemo(() => {
    return getValueOptions(resolvedColumn);
  }, [resolvedColumn]);
  const onFilterChange = React28.useCallback((event) => {
    let value = event.target.value;
    value = getValueFromValueOptions(value, currentValueOptions, getOptionValue);
    applyValue(_extends({}, item, {
      value
    }));
  }, [currentValueOptions, getOptionValue, applyValue, item]);
  if (!isSingleSelectColDef(resolvedColumn)) {
    return null;
  }
  const label = labelProp ?? apiRef.current.getLocaleText("filterPanelInputLabel");
  return (0, import_jsx_runtime15.jsxs)(SingleSelectOperatorContainer, {
    children: [(0, import_jsx_runtime15.jsxs)(rootProps.slots.baseFormControl, {
      fullWidth: true,
      children: [(0, import_jsx_runtime15.jsx)(rootProps.slots.baseInputLabel, _extends({}, (_c = rootProps.slotProps) == null ? void 0 : _c.baseInputLabel, {
        id: labelId,
        htmlFor: id,
        shrink: true,
        variant,
        children: label
      })), (0, import_jsx_runtime15.jsx)(rootProps.slots.baseSelect, _extends({
        id,
        label,
        labelId,
        value: filterValue,
        onChange: onFilterChange,
        variant,
        type: type || "text",
        inputProps: {
          tabIndex,
          ref: focusElementRef,
          placeholder: placeholder ?? apiRef.current.getLocaleText("filterPanelInputPlaceholder")
        },
        native: isSelectNative,
        notched: variant === "outlined" ? true : void 0
      }, others, (_d = rootProps.slotProps) == null ? void 0 : _d.baseSelect, {
        children: renderSingleSelectOptions({
          column: resolvedColumn,
          OptionComponent: rootProps.slots.baseSelectOption,
          getOptionLabel,
          getOptionValue,
          isSelectNative,
          baseSelectOptionProps: (_e = rootProps.slotProps) == null ? void 0 : _e.baseSelectOption
        })
      }))]
    }), clearButton]
  });
}
true ? GridFilterInputSingleSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types14.default.shape({
    current: import_prop_types14.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types14.default.func.isRequired,
  clearButton: import_prop_types14.default.node,
  focusElementRef: import_prop_types14.default.oneOfType([import_prop_types14.default.func, import_prop_types14.default.object]),
  /**
   * It is `true` if the filter either has a value or an operator with no value
   * required is selected (for example `isEmpty`)
   */
  isFilterActive: import_prop_types14.default.bool,
  item: import_prop_types14.default.shape({
    field: import_prop_types14.default.string.isRequired,
    id: import_prop_types14.default.oneOfType([import_prop_types14.default.number, import_prop_types14.default.string]),
    operator: import_prop_types14.default.string.isRequired,
    value: import_prop_types14.default.any
  }).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterInputMultipleSingleSelect.js
init_extends();
init_objectWithoutPropertiesLoose();
var React29 = __toESM(require_react());
var import_prop_types15 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime16 = __toESM(require_jsx_runtime());
var _excluded15 = ["item", "applyValue", "type", "apiRef", "focusElementRef", "color", "error", "helperText", "size", "variant"];
var _excluded23 = ["key"];
var filter = createFilterOptions();
function GridFilterInputMultipleSingleSelect(props) {
  const {
    item,
    applyValue,
    apiRef,
    focusElementRef,
    color,
    error,
    helperText,
    size,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded15);
  const TextFieldProps = {
    color,
    error,
    helperText,
    size,
    variant
  };
  const id = useId();
  const rootProps = useGridRootProps();
  let resolvedColumn = null;
  if (item.field) {
    const column = apiRef.current.getColumn(item.field);
    if (isSingleSelectColDef(column)) {
      resolvedColumn = column;
    }
  }
  const getOptionValue = resolvedColumn == null ? void 0 : resolvedColumn.getOptionValue;
  const getOptionLabel = resolvedColumn == null ? void 0 : resolvedColumn.getOptionLabel;
  const isOptionEqualToValue = React29.useCallback((option, value) => getOptionValue(option) === getOptionValue(value), [getOptionValue]);
  const resolvedValueOptions = React29.useMemo(() => {
    return getValueOptions(resolvedColumn) || [];
  }, [resolvedColumn]);
  const filteredValues = React29.useMemo(() => {
    if (!Array.isArray(item.value)) {
      return [];
    }
    return item.value.reduce((acc, value) => {
      const resolvedValue = resolvedValueOptions.find((v) => getOptionValue(v) === value);
      if (resolvedValue != null) {
        acc.push(resolvedValue);
      }
      return acc;
    }, []);
  }, [getOptionValue, item.value, resolvedValueOptions]);
  const handleChange = React29.useCallback((event, value) => {
    applyValue(_extends({}, item, {
      value: value.map(getOptionValue)
    }));
  }, [applyValue, item, getOptionValue]);
  return (0, import_jsx_runtime16.jsx)(Autocomplete_default, _extends({
    multiple: true,
    options: resolvedValueOptions,
    isOptionEqualToValue,
    filterOptions: filter,
    id,
    value: filteredValues,
    onChange: handleChange,
    getOptionLabel,
    renderTags: (value, getTagProps) => value.map((option, index) => {
      const _getTagProps = getTagProps({
        index
      }), {
        key
      } = _getTagProps, tagProps = _objectWithoutPropertiesLoose(_getTagProps, _excluded23);
      return (0, import_jsx_runtime16.jsx)(rootProps.slots.baseChip, _extends({
        variant: "outlined",
        size: "small",
        label: getOptionLabel(option)
      }, tagProps), key);
    }),
    renderInput: (params) => {
      var _a;
      return (0, import_jsx_runtime16.jsx)(rootProps.slots.baseTextField, _extends({}, params, {
        label: apiRef.current.getLocaleText("filterPanelInputLabel"),
        placeholder: apiRef.current.getLocaleText("filterPanelInputPlaceholder"),
        InputLabelProps: _extends({}, params.InputLabelProps, {
          shrink: true
        }),
        inputRef: focusElementRef,
        type: "singleSelect"
      }, TextFieldProps, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTextField));
    }
  }, other));
}
true ? GridFilterInputMultipleSingleSelect.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  apiRef: import_prop_types15.default.shape({
    current: import_prop_types15.default.object.isRequired
  }).isRequired,
  applyValue: import_prop_types15.default.func.isRequired,
  focusElementRef: import_prop_types15.default.oneOfType([import_prop_types15.default.func, import_prop_types15.default.object]),
  item: import_prop_types15.default.shape({
    field: import_prop_types15.default.string.isRequired,
    id: import_prop_types15.default.oneOfType([import_prop_types15.default.number, import_prop_types15.default.string]),
    operator: import_prop_types15.default.string.isRequired,
    value: import_prop_types15.default.any
  }).isRequired,
  type: import_prop_types15.default.oneOf(["singleSelect"])
} : void 0;

// node_modules/@mui/x-data-grid/colDef/gridSingleSelectOperators.js
var parseObjectValue = (value) => {
  if (value == null || !isObject(value)) {
    return value;
  }
  return value.value;
};
var getGridSingleSelectOperators = () => [{
  value: "is",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || filterItem.value === "") {
      return null;
    }
    return (value) => parseObjectValue(value) === parseObjectValue(filterItem.value);
  },
  InputComponent: GridFilterInputSingleSelect
}, {
  value: "not",
  getApplyFilterFn: (filterItem) => {
    if (filterItem.value == null || filterItem.value === "") {
      return null;
    }
    return (value) => parseObjectValue(value) !== parseObjectValue(filterItem.value);
  },
  InputComponent: GridFilterInputSingleSelect
}, {
  value: "isAnyOf",
  getApplyFilterFn: (filterItem) => {
    if (!Array.isArray(filterItem.value) || filterItem.value.length === 0) {
      return null;
    }
    const filterItemValues = filterItem.value.map(parseObjectValue);
    return (value) => filterItemValues.includes(parseObjectValue(value));
  },
  InputComponent: GridFilterInputMultipleSingleSelect
}];

// node_modules/@mui/x-data-grid/colDef/gridSingleSelectColDef.js
var isArrayOfObjects = (options) => {
  return typeof options[0] === "object";
};
var defaultGetOptionValue = (value) => {
  return isObject(value) ? value.value : value;
};
var defaultGetOptionLabel = (value) => {
  return isObject(value) ? value.label : String(value);
};
var GRID_SINGLE_SELECT_COL_DEF = _extends({}, GRID_STRING_COL_DEF, {
  type: "singleSelect",
  getOptionLabel: defaultGetOptionLabel,
  getOptionValue: defaultGetOptionValue,
  valueFormatter(value, row, colDef, apiRef) {
    const rowId = apiRef.current.getRowId(row);
    if (!isSingleSelectColDef(colDef)) {
      return "";
    }
    const valueOptions = getValueOptions(colDef, {
      id: rowId,
      row
    });
    if (value == null) {
      return "";
    }
    if (!valueOptions) {
      return value;
    }
    if (!isArrayOfObjects(valueOptions)) {
      return colDef.getOptionLabel(value);
    }
    const valueOption = valueOptions.find((option) => colDef.getOptionValue(option) === value);
    return valueOption ? colDef.getOptionLabel(valueOption) : "";
  },
  renderEditCell: renderEditSingleSelectCell,
  filterOperators: getGridSingleSelectOperators(),
  // @ts-ignore
  pastedValueParser: (value, row, column) => {
    const colDef = column;
    const valueOptions = getValueOptions(colDef) || [];
    const getOptionValue = colDef.getOptionValue;
    const valueOption = valueOptions.find((option) => {
      if (getOptionValue(option) === value) {
        return true;
      }
      return false;
    });
    if (valueOption) {
      return value;
    }
    return void 0;
  }
});

// node_modules/@mui/x-data-grid/colDef/gridDefaultColumnTypes.js
var DEFAULT_GRID_COL_TYPE_KEY = "string";
var getGridDefaultColumnTypes = () => {
  const nativeColumnTypes = {
    string: GRID_STRING_COL_DEF,
    number: GRID_NUMERIC_COL_DEF,
    date: GRID_DATE_COL_DEF,
    dateTime: GRID_DATETIME_COL_DEF,
    boolean: GRID_BOOLEAN_COL_DEF,
    singleSelect: GRID_SINGLE_SELECT_COL_DEF,
    [GRID_ACTIONS_COLUMN_TYPE]: GRID_ACTIONS_COL_DEF,
    custom: GRID_STRING_COL_DEF
  };
  return nativeColumnTypes;
};

// node_modules/@mui/x-data-grid/hooks/features/headerFiltering/gridHeaderFilteringSelectors.js
var gridHeaderFilteringStateSelector = (state) => state.headerFiltering;
var gridHeaderFilteringEnabledSelector = createSelector2(
  gridHeaderFilteringStateSelector,
  // No initialization in MIT, so we need to default to false to be used by `getTotalHeaderHeight`
  (headerFilteringState) => (headerFilteringState == null ? void 0 : headerFilteringState.enabled) ?? false
);
var gridHeaderFilteringEditFieldSelector = createSelector2(gridHeaderFilteringStateSelector, (headerFilteringState) => headerFilteringState.editing);
var gridHeaderFilteringMenuSelector = createSelector2(gridHeaderFilteringStateSelector, (headerFilteringState) => headerFilteringState.menuOpen);

// node_modules/@mui/x-data-grid/hooks/features/columnGrouping/gridColumnGroupsSelector.js
var gridColumnGroupingSelector = (state) => state.columnGrouping;
var gridColumnGroupsUnwrappedModelSelector = createSelectorMemoized(gridColumnGroupingSelector, (columnGrouping) => (columnGrouping == null ? void 0 : columnGrouping.unwrappedGroupingModel) ?? {});
var gridColumnGroupsLookupSelector = createSelectorMemoized(gridColumnGroupingSelector, (columnGrouping) => (columnGrouping == null ? void 0 : columnGrouping.lookup) ?? {});
var gridColumnGroupsHeaderStructureSelector = createSelectorMemoized(gridColumnGroupingSelector, (columnGrouping) => (columnGrouping == null ? void 0 : columnGrouping.headerStructure) ?? []);
var gridColumnGroupsHeaderMaxDepthSelector = createSelector2(gridColumnGroupingSelector, (columnGrouping) => (columnGrouping == null ? void 0 : columnGrouping.maxDepth) ?? 0);

// node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsUtils.js
var COLUMNS_DIMENSION_PROPERTIES = ["maxWidth", "minWidth", "width", "flex"];
var COLUMN_TYPES = getGridDefaultColumnTypes();
function computeFlexColumnsWidth({
  initialFreeSpace,
  totalFlexUnits,
  flexColumns
}) {
  const uniqueFlexColumns = new Set(flexColumns.map((col) => col.field));
  const flexColumnsLookup = {
    all: {},
    frozenFields: [],
    freeze: (field) => {
      const value = flexColumnsLookup.all[field];
      if (value && value.frozen !== true) {
        flexColumnsLookup.all[field].frozen = true;
        flexColumnsLookup.frozenFields.push(field);
      }
    }
  };
  function loopOverFlexItems() {
    if (flexColumnsLookup.frozenFields.length === uniqueFlexColumns.size) {
      return;
    }
    const violationsLookup = {
      min: {},
      max: {}
    };
    let remainingFreeSpace = initialFreeSpace;
    let flexUnits = totalFlexUnits;
    let totalViolation = 0;
    flexColumnsLookup.frozenFields.forEach((field) => {
      remainingFreeSpace -= flexColumnsLookup.all[field].computedWidth;
      flexUnits -= flexColumnsLookup.all[field].flex;
    });
    for (let i = 0; i < flexColumns.length; i += 1) {
      const column = flexColumns[i];
      if (flexColumnsLookup.all[column.field] && flexColumnsLookup.all[column.field].frozen === true) {
        continue;
      }
      const widthPerFlexUnit = remainingFreeSpace / flexUnits;
      let computedWidth = widthPerFlexUnit * column.flex;
      if (computedWidth < column.minWidth) {
        totalViolation += column.minWidth - computedWidth;
        computedWidth = column.minWidth;
        violationsLookup.min[column.field] = true;
      } else if (computedWidth > column.maxWidth) {
        totalViolation += column.maxWidth - computedWidth;
        computedWidth = column.maxWidth;
        violationsLookup.max[column.field] = true;
      }
      flexColumnsLookup.all[column.field] = {
        frozen: false,
        computedWidth,
        flex: column.flex
      };
    }
    if (totalViolation < 0) {
      Object.keys(violationsLookup.max).forEach((field) => {
        flexColumnsLookup.freeze(field);
      });
    } else if (totalViolation > 0) {
      Object.keys(violationsLookup.min).forEach((field) => {
        flexColumnsLookup.freeze(field);
      });
    } else {
      flexColumns.forEach(({
        field
      }) => {
        flexColumnsLookup.freeze(field);
      });
    }
    loopOverFlexItems();
  }
  loopOverFlexItems();
  return flexColumnsLookup.all;
}
var hydrateColumnsWidth = (rawState, dimensions) => {
  const columnsLookup = {};
  let totalFlexUnits = 0;
  let widthAllocatedBeforeFlex = 0;
  const flexColumns = [];
  rawState.orderedFields.forEach((columnField) => {
    let column = rawState.lookup[columnField];
    let computedWidth = 0;
    let isFlex = false;
    if (rawState.columnVisibilityModel[columnField] !== false) {
      if (column.flex && column.flex > 0) {
        totalFlexUnits += column.flex;
        isFlex = true;
      } else {
        computedWidth = clamp(column.width || GRID_STRING_COL_DEF.width, column.minWidth || GRID_STRING_COL_DEF.minWidth, column.maxWidth || GRID_STRING_COL_DEF.maxWidth);
      }
      widthAllocatedBeforeFlex += computedWidth;
    }
    if (column.computedWidth !== computedWidth) {
      column = _extends({}, column, {
        computedWidth
      });
    }
    if (isFlex) {
      flexColumns.push(column);
    }
    columnsLookup[columnField] = column;
  });
  const availableWidth = dimensions === void 0 ? 0 : dimensions.viewportOuterSize.width - (dimensions.hasScrollY ? dimensions.scrollbarSize : 0);
  const initialFreeSpace = Math.max(availableWidth - widthAllocatedBeforeFlex, 0);
  if (totalFlexUnits > 0 && availableWidth > 0) {
    const computedColumnWidths = computeFlexColumnsWidth({
      initialFreeSpace,
      totalFlexUnits,
      flexColumns
    });
    Object.keys(computedColumnWidths).forEach((field) => {
      columnsLookup[field].computedWidth = computedColumnWidths[field].computedWidth;
    });
  }
  return _extends({}, rawState, {
    lookup: columnsLookup
  });
};
var applyInitialState = (columnsState, initialState) => {
  if (!initialState) {
    return columnsState;
  }
  const {
    orderedFields = [],
    dimensions = {}
  } = initialState;
  const columnsWithUpdatedDimensions = Object.keys(dimensions);
  if (columnsWithUpdatedDimensions.length === 0 && orderedFields.length === 0) {
    return columnsState;
  }
  const orderedFieldsLookup = {};
  const cleanOrderedFields = [];
  for (let i = 0; i < orderedFields.length; i += 1) {
    const field = orderedFields[i];
    if (columnsState.lookup[field]) {
      orderedFieldsLookup[field] = true;
      cleanOrderedFields.push(field);
    }
  }
  const newOrderedFields = cleanOrderedFields.length === 0 ? columnsState.orderedFields : [...cleanOrderedFields, ...columnsState.orderedFields.filter((field) => !orderedFieldsLookup[field])];
  const newColumnLookup = _extends({}, columnsState.lookup);
  for (let i = 0; i < columnsWithUpdatedDimensions.length; i += 1) {
    const field = columnsWithUpdatedDimensions[i];
    const newColDef = _extends({}, newColumnLookup[field], {
      hasBeenResized: true
    });
    Object.entries(dimensions[field]).forEach(([key, value]) => {
      newColDef[key] = value === -1 ? Infinity : value;
    });
    newColumnLookup[field] = newColDef;
  }
  const newColumnsState = _extends({}, columnsState, {
    orderedFields: newOrderedFields,
    lookup: newColumnLookup
  });
  return newColumnsState;
};
function getDefaultColTypeDef(type) {
  let colDef = COLUMN_TYPES[DEFAULT_GRID_COL_TYPE_KEY];
  if (type && COLUMN_TYPES[type]) {
    colDef = COLUMN_TYPES[type];
  }
  return colDef;
}
var createColumnsState = ({
  apiRef,
  columnsToUpsert,
  initialState,
  columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef),
  keepOnlyColumnsToUpsert = false
}) => {
  var _a, _b;
  const isInsideStateInitializer = !apiRef.current.state.columns;
  let columnsState;
  if (isInsideStateInitializer) {
    columnsState = {
      orderedFields: [],
      lookup: {},
      columnVisibilityModel
    };
  } else {
    const currentState = gridColumnsStateSelector(apiRef.current.state);
    columnsState = {
      orderedFields: keepOnlyColumnsToUpsert ? [] : [...currentState.orderedFields],
      lookup: _extends({}, currentState.lookup),
      // Will be cleaned later if keepOnlyColumnsToUpsert=true
      columnVisibilityModel
    };
  }
  let columnsToKeep = {};
  if (keepOnlyColumnsToUpsert && !isInsideStateInitializer) {
    columnsToKeep = Object.keys(columnsState.lookup).reduce((acc, key) => _extends({}, acc, {
      [key]: false
    }), {});
  }
  const columnsToUpsertLookup = {};
  columnsToUpsert.forEach((newColumn) => {
    const {
      field
    } = newColumn;
    columnsToUpsertLookup[field] = true;
    columnsToKeep[field] = true;
    let existingState = columnsState.lookup[field];
    if (existingState == null) {
      existingState = _extends({}, getDefaultColTypeDef(newColumn.type), {
        field,
        hasBeenResized: false
      });
      columnsState.orderedFields.push(field);
    } else if (keepOnlyColumnsToUpsert) {
      columnsState.orderedFields.push(field);
    }
    if (existingState && existingState.type !== newColumn.type) {
      existingState = _extends({}, getDefaultColTypeDef(newColumn.type), {
        field
      });
    }
    let hasBeenResized = existingState.hasBeenResized;
    COLUMNS_DIMENSION_PROPERTIES.forEach((key) => {
      if (newColumn[key] !== void 0) {
        hasBeenResized = true;
        if (newColumn[key] === -1) {
          newColumn[key] = Infinity;
        }
      }
    });
    columnsState.lookup[field] = _extends({}, existingState, newColumn, {
      hasBeenResized
    });
  });
  if (keepOnlyColumnsToUpsert && !isInsideStateInitializer) {
    Object.keys(columnsState.lookup).forEach((field) => {
      if (!columnsToKeep[field]) {
        delete columnsState.lookup[field];
      }
    });
  }
  const columnsStateWithPreProcessing = apiRef.current.unstable_applyPipeProcessors("hydrateColumns", columnsState);
  const columnsStateWithPortableColumns = applyInitialState(columnsStateWithPreProcessing, initialState);
  return hydrateColumnsWidth(columnsStateWithPortableColumns, ((_b = (_a = apiRef.current).getRootDimensions) == null ? void 0 : _b.call(_a)) ?? void 0);
};
function getFirstNonSpannedColumnToRender({
  firstColumnToRender,
  apiRef,
  firstRowToRender,
  lastRowToRender,
  visibleRows
}) {
  let firstNonSpannedColumnToRender = firstColumnToRender;
  for (let i = firstRowToRender; i < lastRowToRender; i += 1) {
    const row = visibleRows[i];
    if (row) {
      const rowId = visibleRows[i].id;
      const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, firstColumnToRender);
      if (cellColSpanInfo && cellColSpanInfo.spannedByColSpan) {
        firstNonSpannedColumnToRender = cellColSpanInfo.leftVisibleCellIndex;
      }
    }
  }
  return firstNonSpannedColumnToRender;
}
function getTotalHeaderHeight(apiRef, props) {
  const densityFactor = gridDensityFactorSelector(apiRef);
  const maxDepth = gridColumnGroupsHeaderMaxDepthSelector(apiRef);
  const isHeaderFilteringEnabled = gridHeaderFilteringEnabledSelector(apiRef);
  const columnHeadersHeight = Math.floor(props.columnHeaderHeight * densityFactor);
  const filterHeadersHeight = isHeaderFilteringEnabled ? Math.floor((props.headerFilterHeight ?? props.columnHeaderHeight) * densityFactor) : 0;
  return columnHeadersHeight * (1 + (maxDepth ?? 0)) + filterHeadersHeight;
}

// node_modules/@mui/x-data-grid/utils/fastMemo.js
var React30 = __toESM(require_react());
function fastMemo(component) {
  return React30.memo(component, fastObjectShallowCompare);
}

// node_modules/@mui/x-data-grid/components/GridScrollArea.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime());
var CLIFF = 1;
var SLOP = 1.5;
var useUtilityClasses8 = (ownerState) => {
  const {
    scrollDirection,
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["scrollArea", `scrollArea--${scrollDirection}`]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridScrollAreaRawRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "ScrollArea",
  overridesResolver: (props, styles) => [{
    [`&.${gridClasses["scrollArea--left"]}`]: styles["scrollArea--left"]
  }, {
    [`&.${gridClasses["scrollArea--right"]}`]: styles["scrollArea--right"]
  }, styles.scrollArea]
})(() => ({
  position: "absolute",
  top: 0,
  zIndex: 101,
  width: 20,
  bottom: 0,
  [`&.${gridClasses["scrollArea--left"]}`]: {
    left: 0
  },
  [`&.${gridClasses["scrollArea--right"]}`]: {
    right: 0
  }
}));
function GridScrollAreaRaw(props) {
  const {
    scrollDirection
  } = props;
  const rootRef = React31.useRef(null);
  const apiRef = useGridApiContext();
  const timeout = useTimeout();
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const columnsTotalWidth = useGridSelector(apiRef, gridColumnsTotalWidthSelector);
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  const scrollPosition = React31.useRef({
    left: 0,
    top: 0
  });
  const getCanScrollMore = () => {
    if (scrollDirection === "left") {
      return scrollPosition.current.left > 0;
    }
    if (scrollDirection === "right") {
      const maxScrollLeft = columnsTotalWidth - dimensions.viewportInnerSize.width;
      return scrollPosition.current.left < maxScrollLeft;
    }
    return false;
  };
  const [dragging, setDragging] = React31.useState(false);
  const [canScrollMore, setCanScrollMore] = React31.useState(getCanScrollMore);
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, rootProps, {
    scrollDirection
  });
  const classes2 = useUtilityClasses8(ownerState);
  const totalHeaderHeight = getTotalHeaderHeight(apiRef, rootProps);
  const headerHeight = Math.floor(rootProps.columnHeaderHeight * densityFactor);
  const style = {
    height: headerHeight,
    top: totalHeaderHeight - headerHeight
  };
  if (scrollDirection === "left") {
    style.left = dimensions.leftPinnedWidth;
  } else if (scrollDirection === "right") {
    style.right = dimensions.rightPinnedWidth + (dimensions.hasScrollX ? dimensions.scrollbarSize : 0);
  }
  const handleScrolling = (newScrollPosition) => {
    scrollPosition.current = newScrollPosition;
    setCanScrollMore(getCanScrollMore);
  };
  const handleDragOver = useEventCallback_default((event) => {
    let offset;
    event.preventDefault();
    if (scrollDirection === "left") {
      offset = event.clientX - rootRef.current.getBoundingClientRect().right;
    } else if (scrollDirection === "right") {
      offset = Math.max(1, event.clientX - rootRef.current.getBoundingClientRect().left);
    } else {
      throw new Error("MUI X: Wrong drag direction");
    }
    offset = (offset - CLIFF) * SLOP + CLIFF;
    timeout.start(0, () => {
      apiRef.current.scroll({
        left: scrollPosition.current.left + offset,
        top: scrollPosition.current.top
      });
    });
  });
  const handleColumnHeaderDragStart = useEventCallback_default(() => {
    setDragging(true);
  });
  const handleColumnHeaderDragEnd = useEventCallback_default(() => {
    setDragging(false);
  });
  useGridApiEventHandler(apiRef, "scrollPositionChange", handleScrolling);
  useGridApiEventHandler(apiRef, "columnHeaderDragStart", handleColumnHeaderDragStart);
  useGridApiEventHandler(apiRef, "columnHeaderDragEnd", handleColumnHeaderDragEnd);
  if (!dragging || !canScrollMore) {
    return null;
  }
  return (0, import_jsx_runtime17.jsx)(GridScrollAreaRawRoot, {
    ref: rootRef,
    className: clsx_default(classes2.root),
    ownerState,
    onDragOver: handleDragOver,
    style
  });
}
var GridScrollArea = fastMemo(GridScrollAreaRaw);

// node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualScroller.js
init_extends();
var React35 = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
init_esm();
init_useLazyRef();
init_useTimeout();

// node_modules/@mui/x-data-grid/hooks/utils/useGridPrivateApiContext.js
var React32 = __toESM(require_react());
var GridPrivateApiContext = React32.createContext(void 0);
if (true) {
  GridPrivateApiContext.displayName = "GridPrivateApiContext";
}
function useGridPrivateApiContext() {
  const privateApiRef = React32.useContext(GridPrivateApiContext);
  if (privateApiRef === void 0) {
    throw new Error(["MUI X: Could not find the data grid private context.", "It looks like you rendered your component outside of a DataGrid, DataGridPro or DataGridPremium parent component.", "This can also happen if you are bundling multiple versions of the data grid."].join("\n"));
  }
  return privateApiRef;
}

// node_modules/@mui/x-data-grid/hooks/utils/useGridVisibleRows.js
var React33 = __toESM(require_react());
var getVisibleRows = (apiRef, props) => {
  let rows;
  let range2;
  if (props.pagination && props.paginationMode === "client") {
    range2 = gridPaginationRowRangeSelector(apiRef);
    rows = gridPaginatedVisibleSortedGridRowEntriesSelector(apiRef);
  } else {
    rows = gridExpandedSortedRowEntriesSelector(apiRef);
    if (rows.length === 0) {
      range2 = null;
    } else {
      range2 = {
        firstRowIndex: 0,
        lastRowIndex: rows.length - 1
      };
    }
  }
  return {
    rows,
    range: range2
  };
};
var useGridVisibleRows = (apiRef, props) => {
  const response = getVisibleRows(apiRef, props);
  return React33.useMemo(() => ({
    rows: response.rows,
    range: response.range
  }), [response.rows, response.range]);
};

// node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsMetaSelector.js
var gridRowsMetaSelector = (state) => state.rowsMeta;

// node_modules/@mui/x-data-grid/hooks/features/virtualization/gridVirtualizationSelectors.js
var gridVirtualizationSelector = (state) => state.virtualization;
var gridVirtualizationEnabledSelector = createSelector2(gridVirtualizationSelector, (state) => state.enabled);
var gridVirtualizationColumnEnabledSelector = createSelector2(gridVirtualizationSelector, (state) => state.enabledForColumns);
var gridRenderContextSelector = createSelector2(gridVirtualizationSelector, (state) => state.renderContext);
var gridRenderContextColumnsSelector = createSelectorMemoized((state) => state.virtualization.renderContext.firstColumnIndex, (state) => state.virtualization.renderContext.lastColumnIndex, (firstColumnIndex, lastColumnIndex) => ({
  firstColumnIndex,
  lastColumnIndex
}));

// node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualization.js
init_extends();
var React34 = __toESM(require_react());
var EMPTY_RENDER_CONTEXT = {
  firstRowIndex: 0,
  lastRowIndex: 0,
  firstColumnIndex: 0,
  lastColumnIndex: 0
};
var virtualizationStateInitializer = (state, props) => {
  const virtualization = {
    enabled: !props.disableVirtualization,
    enabledForColumns: true,
    renderContext: EMPTY_RENDER_CONTEXT
  };
  return _extends({}, state, {
    virtualization
  });
};
function useGridVirtualization(apiRef, props) {
  const setVirtualization = (enabled) => {
    apiRef.current.setState((state) => _extends({}, state, {
      virtualization: _extends({}, state.virtualization, {
        enabled
      })
    }));
  };
  const setColumnVirtualization = (enabled) => {
    apiRef.current.setState((state) => _extends({}, state, {
      virtualization: _extends({}, state.virtualization, {
        enabledForColumns: enabled
      })
    }));
  };
  const api = {
    unstable_setVirtualization: setVirtualization,
    unstable_setColumnVirtualization: setColumnVirtualization
  };
  useGridApiMethod(apiRef, api, "public");
  React34.useEffect(() => {
    setVirtualization(!props.disableVirtualization);
  }, [props.disableVirtualization]);
}

// node_modules/@mui/x-data-grid/hooks/features/virtualization/useGridVirtualScroller.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime());
var MINIMUM_COLUMN_WIDTH = 50;
var ScrollDirection = function(ScrollDirection2) {
  ScrollDirection2[ScrollDirection2["NONE"] = 0] = "NONE";
  ScrollDirection2[ScrollDirection2["UP"] = 1] = "UP";
  ScrollDirection2[ScrollDirection2["DOWN"] = 2] = "DOWN";
  ScrollDirection2[ScrollDirection2["LEFT"] = 3] = "LEFT";
  ScrollDirection2[ScrollDirection2["RIGHT"] = 4] = "RIGHT";
  return ScrollDirection2;
}(ScrollDirection || {});
var EMPTY_SCROLL_POSITION = {
  top: 0,
  left: 0
};
var EMPTY_DETAIL_PANELS = Object.freeze(/* @__PURE__ */ new Map());
var createScrollCache = (mode, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer) => ({
  direction: ScrollDirection.NONE,
  buffer: bufferForDirection(mode, ScrollDirection.NONE, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer)
});
var isJSDOM = false;
try {
  if (typeof window !== "undefined") {
    isJSDOM = /jsdom/.test(window.navigator.userAgent);
  }
} catch (_) {
}
var useGridVirtualScroller = () => {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const enabled = useGridSelector(apiRef, gridVirtualizationEnabledSelector) && !isJSDOM;
  const enabledForColumns = useGridSelector(apiRef, gridVirtualizationColumnEnabledSelector) && !isJSDOM;
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  const outerSize = dimensions.viewportOuterSize;
  const pinnedRows = useGridSelector(apiRef, gridPinnedRowsSelector);
  const pinnedColumns = useGridSelector(apiRef, gridVisiblePinnedColumnDefinitionsSelector);
  const hasBottomPinnedRows = pinnedRows.bottom.length > 0;
  const [panels, setPanels] = React35.useState(EMPTY_DETAIL_PANELS);
  const theme = useTheme();
  const cellFocus = useGridSelector(apiRef, gridFocusCellSelector);
  const cellTabIndex = useGridSelector(apiRef, gridTabIndexCellSelector);
  const rowsMeta = useGridSelector(apiRef, gridRowsMetaSelector);
  const selectedRowsLookup = useGridSelector(apiRef, selectedIdsLookupSelector);
  const currentPage = useGridVisibleRows(apiRef, rootProps);
  const gridRootRef = apiRef.current.rootElementRef;
  const mainRef = apiRef.current.mainElementRef;
  const scrollerRef = apiRef.current.virtualScrollerRef;
  const scrollbarVerticalRef = React35.useRef(null);
  const scrollbarHorizontalRef = React35.useRef(null);
  const contentHeight = dimensions.contentSize.height;
  const columnsTotalWidth = dimensions.columnsTotalWidth;
  const hasColSpan = useGridSelector(apiRef, gridHasColSpanSelector);
  useResizeObserver(mainRef, () => apiRef.current.resize());
  const scrollPosition = React35.useRef(EMPTY_SCROLL_POSITION);
  const previousContextScrollPosition = React35.useRef(EMPTY_SCROLL_POSITION);
  const previousRowContext = React35.useRef(EMPTY_RENDER_CONTEXT);
  const renderContext = useGridSelector(apiRef, gridRenderContextSelector);
  const scrollTimeout = useTimeout();
  const frozenContext = React35.useRef(void 0);
  const scrollCache = useLazyRef(() => createScrollCache(theme.direction, rootProps.rowBufferPx, rootProps.columnBufferPx, dimensions.rowHeight * 15, MINIMUM_COLUMN_WIDTH * 6)).current;
  const focusedCell = {
    rowIndex: React35.useMemo(() => cellFocus ? currentPage.rows.findIndex((row) => row.id === cellFocus.id) : -1, [cellFocus, currentPage.rows]),
    columnIndex: React35.useMemo(() => cellFocus ? visibleColumns.findIndex((column) => column.field === cellFocus.field) : -1, [cellFocus, visibleColumns])
  };
  const updateRenderContext = React35.useCallback((nextRenderContext) => {
    if (areRenderContextsEqual(nextRenderContext, apiRef.current.state.virtualization.renderContext)) {
      return;
    }
    const didRowsIntervalChange = nextRenderContext.firstRowIndex !== previousRowContext.current.firstRowIndex || nextRenderContext.lastRowIndex !== previousRowContext.current.lastRowIndex;
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        virtualization: _extends({}, state.virtualization, {
          renderContext: nextRenderContext
        })
      });
    });
    if (dimensions.isReady && didRowsIntervalChange) {
      previousRowContext.current = nextRenderContext;
      apiRef.current.publishEvent("renderedRowsIntervalChange", nextRenderContext);
    }
    previousContextScrollPosition.current = scrollPosition.current;
  }, [apiRef, dimensions.isReady]);
  const triggerUpdateRenderContext = () => {
    const newScroll = {
      top: scrollerRef.current.scrollTop,
      left: scrollerRef.current.scrollLeft
    };
    const dx = newScroll.left - scrollPosition.current.left;
    const dy = newScroll.top - scrollPosition.current.top;
    const isScrolling = dx !== 0 || dy !== 0;
    scrollPosition.current = newScroll;
    const direction = isScrolling ? directionForDelta(dx, dy) : ScrollDirection.NONE;
    const rowScroll = Math.abs(scrollPosition.current.top - previousContextScrollPosition.current.top);
    const columnScroll = Math.abs(scrollPosition.current.left - previousContextScrollPosition.current.left);
    const didCrossThreshold = rowScroll >= dimensions.rowHeight || columnScroll >= MINIMUM_COLUMN_WIDTH;
    const didChangeDirection = scrollCache.direction !== direction;
    const shouldUpdate = didCrossThreshold || didChangeDirection;
    if (!shouldUpdate) {
      return renderContext;
    }
    if (didChangeDirection) {
      switch (direction) {
        case ScrollDirection.NONE:
        case ScrollDirection.LEFT:
        case ScrollDirection.RIGHT:
          frozenContext.current = void 0;
          break;
        default:
          frozenContext.current = renderContext;
          break;
      }
    }
    scrollCache.direction = direction;
    scrollCache.buffer = bufferForDirection(theme.direction, direction, rootProps.rowBufferPx, rootProps.columnBufferPx, dimensions.rowHeight * 15, MINIMUM_COLUMN_WIDTH * 6);
    const inputs = inputsSelector(apiRef, rootProps, enabled, enabledForColumns);
    const nextRenderContext = computeRenderContext(inputs, scrollPosition.current, scrollCache);
    ReactDOM.flushSync(() => {
      updateRenderContext(nextRenderContext);
    });
    scrollTimeout.start(1e3, triggerUpdateRenderContext);
    return nextRenderContext;
  };
  const forceUpdateRenderContext = () => {
    const inputs = inputsSelector(apiRef, rootProps, enabled, enabledForColumns);
    const nextRenderContext = computeRenderContext(inputs, scrollPosition.current, scrollCache);
    updateRenderContext(nextRenderContext);
  };
  const handleScroll = useEventCallback_default((event) => {
    const {
      scrollTop,
      scrollLeft
    } = event.currentTarget;
    if (scrollTop < 0) {
      return;
    }
    if (theme.direction === "ltr") {
      if (scrollLeft < 0) {
        return;
      }
    }
    if (theme.direction === "rtl") {
      if (scrollLeft > 0) {
        return;
      }
    }
    const nextRenderContext = triggerUpdateRenderContext();
    apiRef.current.publishEvent("scrollPositionChange", {
      top: scrollTop,
      left: scrollLeft,
      renderContext: nextRenderContext
    });
  });
  const handleWheel = useEventCallback_default((event) => {
    apiRef.current.publishEvent("virtualScrollerWheel", {}, event);
  });
  const handleTouchMove = useEventCallback_default((event) => {
    apiRef.current.publishEvent("virtualScrollerTouchMove", {}, event);
  });
  const getRows = (params = {}) => {
    var _a;
    if (!params.rows && !currentPage.range) {
      return [];
    }
    const baseRenderContext = params.renderContext ?? renderContext;
    const isLastSection = !hasBottomPinnedRows && params.position === void 0 || hasBottomPinnedRows && params.position === "bottom";
    const isPinnedSection = params.position !== void 0;
    let rowIndexOffset;
    switch (params.position) {
      case "top":
        rowIndexOffset = 0;
        break;
      case "bottom":
        rowIndexOffset = pinnedRows.top.length + currentPage.rows.length;
        break;
      case void 0:
        rowIndexOffset = pinnedRows.top.length;
        break;
    }
    const rowModels = params.rows ?? currentPage.rows;
    const firstRowToRender = baseRenderContext.firstRowIndex;
    const lastRowToRender = Math.min(baseRenderContext.lastRowIndex, rowModels.length);
    const rowIndexes = params.rows ? range(0, params.rows.length) : range(firstRowToRender, lastRowToRender);
    let virtualRowIndex = -1;
    if (!isPinnedSection && focusedCell.rowIndex !== -1) {
      if (focusedCell.rowIndex < firstRowToRender) {
        virtualRowIndex = focusedCell.rowIndex;
        rowIndexes.unshift(virtualRowIndex);
      }
      if (focusedCell.rowIndex >= lastRowToRender) {
        virtualRowIndex = focusedCell.rowIndex;
        rowIndexes.push(virtualRowIndex);
      }
    }
    const rows = [];
    const rowProps = (_a = rootProps.slotProps) == null ? void 0 : _a.row;
    const columnPositions = gridColumnPositionsSelector(apiRef);
    rowIndexes.forEach((rowIndexInPage) => {
      var _a2, _b, _c;
      const {
        id,
        model
      } = rowModels[rowIndexInPage];
      if (hasColSpan) {
        const minFirstColumn = pinnedColumns.left.length;
        const maxLastColumn = visibleColumns.length - pinnedColumns.right.length;
        apiRef.current.calculateColSpan({
          rowId: id,
          minFirstColumn,
          maxLastColumn,
          columns: visibleColumns
        });
        if (pinnedColumns.left.length > 0) {
          apiRef.current.calculateColSpan({
            rowId: id,
            minFirstColumn: 0,
            maxLastColumn: pinnedColumns.left.length,
            columns: visibleColumns
          });
        }
        if (pinnedColumns.right.length > 0) {
          apiRef.current.calculateColSpan({
            rowId: id,
            minFirstColumn: visibleColumns.length - pinnedColumns.right.length,
            maxLastColumn: visibleColumns.length,
            columns: visibleColumns
          });
        }
      }
      const hasFocus = (cellFocus == null ? void 0 : cellFocus.id) === id;
      const baseRowHeight = !apiRef.current.rowHasAutoHeight(id) ? apiRef.current.unstable_getRowHeight(id) : "auto";
      let isSelected;
      if (selectedRowsLookup[id] == null) {
        isSelected = false;
      } else {
        isSelected = apiRef.current.isRowSelectable(id);
      }
      let isFirstVisible = false;
      if (params.position === void 0) {
        isFirstVisible = rowIndexInPage === 0;
      }
      let isLastVisible = false;
      if (isLastSection) {
        if (!isPinnedSection) {
          const lastIndex = currentPage.rows.length - 1;
          const isLastVisibleRowIndex = rowIndexInPage === lastIndex;
          if (isLastVisibleRowIndex) {
            isLastVisible = true;
          }
        } else {
          isLastVisible = rowIndexInPage === rowModels.length - 1;
        }
      }
      const isVirtualRow = rowIndexInPage === virtualRowIndex;
      const isNotVisible = isVirtualRow;
      let tabbableCell = null;
      if (cellTabIndex !== null && cellTabIndex.id === id) {
        const cellParams = apiRef.current.getCellParams(id, cellTabIndex.field);
        tabbableCell = cellParams.cellMode === "view" ? cellTabIndex.field : null;
      }
      let currentRenderContext = baseRenderContext;
      if (!isPinnedSection && frozenContext.current && rowIndexInPage >= frozenContext.current.firstRowIndex && rowIndexInPage < frozenContext.current.lastRowIndex) {
        currentRenderContext = frozenContext.current;
      }
      const offsetLeft = computeOffsetLeft(columnPositions, currentRenderContext, theme.direction, pinnedColumns.left.length);
      const rowIndex = (((_a2 = currentPage == null ? void 0 : currentPage.range) == null ? void 0 : _a2.firstRowIndex) || 0) + rowIndexOffset + rowIndexInPage;
      rows.push((0, import_jsx_runtime18.jsx)(rootProps.slots.row, _extends({
        row: model,
        rowId: id,
        index: rowIndex,
        selected: isSelected,
        offsetTop: params.rows ? void 0 : rowsMeta.positions[rowIndexInPage],
        offsetLeft,
        dimensions,
        rowHeight: baseRowHeight,
        tabbableCell,
        pinnedColumns,
        visibleColumns,
        renderContext: currentRenderContext,
        focusedColumnIndex: hasFocus ? focusedCell.columnIndex : void 0,
        isFirstVisible,
        isLastVisible,
        isNotVisible
      }, rowProps), id));
      if (isNotVisible) {
        return;
      }
      const panel = panels.get(id);
      if (panel) {
        rows.push(panel);
      }
      if (isLastVisible) {
        rows.push((_c = (_b = apiRef.current).getInfiniteLoadingTriggerElement) == null ? void 0 : _c.call(_b, {
          lastRowId: id
        }));
      }
    });
    return rows;
  };
  const needsHorizontalScrollbar = outerSize.width && columnsTotalWidth >= outerSize.width;
  const scrollerStyle = React35.useMemo(() => ({
    overflowX: !needsHorizontalScrollbar ? "hidden" : void 0,
    overflowY: rootProps.autoHeight ? "hidden" : void 0
  }), [needsHorizontalScrollbar, rootProps.autoHeight]);
  const contentSize = React35.useMemo(() => {
    const height = Math.max(contentHeight, 1);
    const size = {
      width: needsHorizontalScrollbar ? columnsTotalWidth : "auto",
      height
    };
    if (rootProps.autoHeight) {
      if (currentPage.rows.length === 0) {
        size.height = getMinimalContentHeight(apiRef);
      } else {
        size.height = contentHeight;
      }
    }
    return size;
  }, [apiRef, columnsTotalWidth, contentHeight, needsHorizontalScrollbar, rootProps.autoHeight, currentPage.rows.length]);
  React35.useEffect(() => {
    apiRef.current.publishEvent("virtualScrollerContentSizeChange");
  }, [apiRef, contentSize]);
  useEnhancedEffect_default(() => {
    apiRef.current.resize();
  }, [apiRef, rowsMeta.currentPageTotalHeight]);
  useEnhancedEffect_default(() => {
    if (enabled) {
      scrollerRef.current.scrollLeft = 0;
      scrollerRef.current.scrollTop = 0;
    }
  }, [enabled, gridRootRef, scrollerRef]);
  useRunOnce(outerSize.width !== 0, () => {
    const inputs = inputsSelector(apiRef, rootProps, enabled, enabledForColumns);
    const initialRenderContext = computeRenderContext(inputs, scrollPosition.current, scrollCache);
    updateRenderContext(initialRenderContext);
    apiRef.current.publishEvent("scrollPositionChange", {
      top: scrollPosition.current.top,
      left: scrollPosition.current.left,
      renderContext: initialRenderContext
    });
  });
  apiRef.current.register("private", {
    updateRenderContext: forceUpdateRenderContext
  });
  useGridApiEventHandler(apiRef, "columnsChange", forceUpdateRenderContext);
  useGridApiEventHandler(apiRef, "filteredRowsSet", forceUpdateRenderContext);
  useGridApiEventHandler(apiRef, "rowExpansionChange", forceUpdateRenderContext);
  return {
    renderContext,
    setPanels,
    getRows,
    getContainerProps: () => ({
      ref: mainRef
    }),
    getScrollerProps: () => ({
      ref: scrollerRef,
      tabIndex: -1,
      onScroll: handleScroll,
      onWheel: handleWheel,
      onTouchMove: handleTouchMove,
      style: scrollerStyle,
      role: "presentation"
    }),
    getContentProps: () => ({
      style: contentSize,
      role: "presentation"
    }),
    getRenderZoneProps: () => ({
      role: "rowgroup"
    }),
    getScrollbarVerticalProps: () => ({
      ref: scrollbarVerticalRef,
      role: "presentation"
    }),
    getScrollbarHorizontalProps: () => ({
      ref: scrollbarHorizontalRef,
      role: "presentation"
    })
  };
};
function inputsSelector(apiRef, rootProps, enabled, enabledForColumns) {
  const dimensions = gridDimensionsSelector(apiRef.current.state);
  const currentPage = getVisibleRows(apiRef, rootProps);
  const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
  const lastRowId = apiRef.current.state.rows.dataRowIds.at(-1);
  const lastColumn = visibleColumns.at(-1);
  return {
    enabled,
    enabledForColumns,
    apiRef,
    autoHeight: rootProps.autoHeight,
    rowBufferPx: rootProps.rowBufferPx,
    columnBufferPx: rootProps.columnBufferPx,
    leftPinnedWidth: dimensions.leftPinnedWidth,
    columnsTotalWidth: dimensions.columnsTotalWidth,
    viewportInnerWidth: dimensions.viewportInnerSize.width,
    viewportInnerHeight: dimensions.viewportInnerSize.height,
    lastRowHeight: lastRowId !== void 0 ? apiRef.current.unstable_getRowHeight(lastRowId) : 0,
    lastColumnWidth: (lastColumn == null ? void 0 : lastColumn.computedWidth) ?? 0,
    rowsMeta: gridRowsMetaSelector(apiRef.current.state),
    columnPositions: gridColumnPositionsSelector(apiRef),
    rows: currentPage.rows,
    range: currentPage.range,
    pinnedColumns: gridVisiblePinnedColumnDefinitionsSelector(apiRef),
    visibleColumns
  };
}
function computeRenderContext(inputs, scrollPosition, scrollCache) {
  let renderContext;
  if (!inputs.enabled) {
    renderContext = {
      firstRowIndex: 0,
      lastRowIndex: inputs.rows.length,
      firstColumnIndex: 0,
      lastColumnIndex: inputs.visibleColumns.length
    };
  } else {
    const {
      top,
      left
    } = scrollPosition;
    const realLeft = Math.abs(left) + inputs.leftPinnedWidth;
    const firstRowIndex = Math.min(getNearestIndexToRender(inputs, top, {
      atStart: true,
      lastPosition: inputs.rowsMeta.positions[inputs.rowsMeta.positions.length - 1] + inputs.lastRowHeight
    }), inputs.rowsMeta.positions.length - 1);
    const lastRowIndex = inputs.autoHeight ? firstRowIndex + inputs.rows.length : getNearestIndexToRender(inputs, top + inputs.viewportInnerHeight);
    let firstColumnIndex = 0;
    let lastColumnIndex = inputs.columnPositions.length;
    if (inputs.enabledForColumns) {
      let hasRowWithAutoHeight = false;
      const [firstRowToRender, lastRowToRender] = getIndexesToRender({
        firstIndex: firstRowIndex,
        lastIndex: lastRowIndex,
        minFirstIndex: 0,
        maxLastIndex: inputs.rows.length,
        bufferBefore: scrollCache.buffer.rowBefore,
        bufferAfter: scrollCache.buffer.rowAfter,
        positions: inputs.rowsMeta.positions,
        lastSize: inputs.lastRowHeight
      });
      for (let i = firstRowToRender; i < lastRowToRender && !hasRowWithAutoHeight; i += 1) {
        const row = inputs.rows[i];
        hasRowWithAutoHeight = inputs.apiRef.current.rowHasAutoHeight(row.id);
      }
      if (!hasRowWithAutoHeight) {
        firstColumnIndex = binarySearch(realLeft, inputs.columnPositions, {
          atStart: true,
          lastPosition: inputs.columnsTotalWidth
        });
        lastColumnIndex = binarySearch(realLeft + inputs.viewportInnerWidth, inputs.columnPositions);
      }
    }
    renderContext = {
      firstRowIndex,
      lastRowIndex,
      firstColumnIndex,
      lastColumnIndex
    };
  }
  const actualRenderContext = deriveRenderContext(inputs, renderContext, scrollCache);
  return actualRenderContext;
}
function getNearestIndexToRender(inputs, offset, options) {
  var _a, _b;
  const lastMeasuredIndexRelativeToAllRows = inputs.apiRef.current.getLastMeasuredRowIndex();
  let allRowsMeasured = lastMeasuredIndexRelativeToAllRows === Infinity;
  if (((_a = inputs.range) == null ? void 0 : _a.lastRowIndex) && !allRowsMeasured) {
    allRowsMeasured = lastMeasuredIndexRelativeToAllRows >= inputs.range.lastRowIndex;
  }
  const lastMeasuredIndexRelativeToCurrentPage = clamp(lastMeasuredIndexRelativeToAllRows - (((_b = inputs.range) == null ? void 0 : _b.firstRowIndex) || 0), 0, inputs.rowsMeta.positions.length);
  if (allRowsMeasured || inputs.rowsMeta.positions[lastMeasuredIndexRelativeToCurrentPage] >= offset) {
    return binarySearch(offset, inputs.rowsMeta.positions, options);
  }
  return exponentialSearch(offset, inputs.rowsMeta.positions, lastMeasuredIndexRelativeToCurrentPage, options);
}
function deriveRenderContext(inputs, nextRenderContext, scrollCache) {
  const [firstRowToRender, lastRowToRender] = getIndexesToRender({
    firstIndex: nextRenderContext.firstRowIndex,
    lastIndex: nextRenderContext.lastRowIndex,
    minFirstIndex: 0,
    maxLastIndex: inputs.rows.length,
    bufferBefore: scrollCache.buffer.rowBefore,
    bufferAfter: scrollCache.buffer.rowAfter,
    positions: inputs.rowsMeta.positions,
    lastSize: inputs.lastRowHeight
  });
  const [initialFirstColumnToRender, lastColumnToRender] = getIndexesToRender({
    firstIndex: nextRenderContext.firstColumnIndex,
    lastIndex: nextRenderContext.lastColumnIndex,
    minFirstIndex: inputs.pinnedColumns.left.length,
    maxLastIndex: inputs.visibleColumns.length - inputs.pinnedColumns.right.length,
    bufferBefore: scrollCache.buffer.columnBefore,
    bufferAfter: scrollCache.buffer.columnAfter,
    positions: inputs.columnPositions,
    lastSize: inputs.lastColumnWidth
  });
  const firstColumnToRender = getFirstNonSpannedColumnToRender({
    firstColumnToRender: initialFirstColumnToRender,
    apiRef: inputs.apiRef,
    firstRowToRender,
    lastRowToRender,
    visibleRows: inputs.rows
  });
  return {
    firstRowIndex: firstRowToRender,
    lastRowIndex: lastRowToRender,
    firstColumnIndex: firstColumnToRender,
    lastColumnIndex: lastColumnToRender
  };
}
function binarySearch(offset, positions, options = void 0, sliceStart = 0, sliceEnd = positions.length) {
  if (positions.length <= 0) {
    return -1;
  }
  if (sliceStart >= sliceEnd) {
    return sliceStart;
  }
  const pivot = sliceStart + Math.floor((sliceEnd - sliceStart) / 2);
  const position = positions[pivot];
  let isBefore;
  if (options == null ? void 0 : options.atStart) {
    const width = (pivot === positions.length - 1 ? options.lastPosition : positions[pivot + 1]) - position;
    isBefore = offset - width < position;
  } else {
    isBefore = offset <= position;
  }
  return isBefore ? binarySearch(offset, positions, options, sliceStart, pivot) : binarySearch(offset, positions, options, pivot + 1, sliceEnd);
}
function exponentialSearch(offset, positions, index, options = void 0) {
  let interval = 1;
  while (index < positions.length && Math.abs(positions[index]) < offset) {
    index += interval;
    interval *= 2;
  }
  return binarySearch(offset, positions, options, Math.floor(index / 2), Math.min(index, positions.length));
}
function getIndexesToRender({
  firstIndex,
  lastIndex,
  bufferBefore,
  bufferAfter,
  minFirstIndex,
  maxLastIndex,
  positions,
  lastSize
}) {
  const firstPosition = positions[firstIndex] - bufferBefore;
  const lastPosition = positions[lastIndex] + bufferAfter;
  const firstIndexPadded = binarySearch(firstPosition, positions, {
    atStart: true,
    lastPosition: positions[positions.length - 1] + lastSize
  });
  const lastIndexPadded = binarySearch(lastPosition, positions);
  return [clamp(firstIndexPadded, minFirstIndex, maxLastIndex), clamp(lastIndexPadded, minFirstIndex, maxLastIndex)];
}
function areRenderContextsEqual(context1, context2) {
  if (context1 === context2) {
    return true;
  }
  return context1.firstRowIndex === context2.firstRowIndex && context1.lastRowIndex === context2.lastRowIndex && context1.firstColumnIndex === context2.firstColumnIndex && context1.lastColumnIndex === context2.lastColumnIndex;
}
function computeOffsetLeft(columnPositions, renderContext, direction, pinnedLeftLength) {
  const factor = direction === "ltr" ? 1 : -1;
  const left = factor * (columnPositions[renderContext.firstColumnIndex] ?? 0) - (columnPositions[pinnedLeftLength] ?? 0);
  return Math.abs(left);
}
function directionForDelta(dx, dy) {
  if (dx === 0 && dy === 0) {
    return ScrollDirection.NONE;
  }
  if (Math.abs(dy) >= Math.abs(dx)) {
    if (dy > 0) {
      return ScrollDirection.DOWN;
    } else {
      return ScrollDirection.UP;
    }
  } else {
    if (dx > 0) {
      return ScrollDirection.RIGHT;
    } else {
      return ScrollDirection.LEFT;
    }
  }
}
function bufferForDirection(mode, direction, rowBufferPx, columnBufferPx, verticalBuffer, horizontalBuffer) {
  if (mode === "rtl") {
    switch (direction) {
      case ScrollDirection.LEFT:
        direction = ScrollDirection.RIGHT;
        break;
      case ScrollDirection.RIGHT:
        direction = ScrollDirection.LEFT;
        break;
      default:
    }
  }
  switch (direction) {
    case ScrollDirection.NONE:
      return {
        rowAfter: rowBufferPx,
        rowBefore: rowBufferPx,
        columnAfter: columnBufferPx,
        columnBefore: columnBufferPx
      };
    case ScrollDirection.LEFT:
      return {
        rowAfter: 0,
        rowBefore: 0,
        columnAfter: 0,
        columnBefore: horizontalBuffer
      };
    case ScrollDirection.RIGHT:
      return {
        rowAfter: 0,
        rowBefore: 0,
        columnAfter: horizontalBuffer,
        columnBefore: 0
      };
    case ScrollDirection.UP:
      return {
        rowAfter: 0,
        rowBefore: verticalBuffer,
        columnAfter: 0,
        columnBefore: 0
      };
    case ScrollDirection.DOWN:
      return {
        rowAfter: verticalBuffer,
        rowBefore: 0,
        columnAfter: 0,
        columnBefore: 0
      };
    default:
      throw new Error("unreachable");
  }
}

// node_modules/@mui/x-data-grid/components/base/GridOverlays.js
init_extends();
var React36 = __toESM(require_react());
var import_prop_types16 = __toESM(require_prop_types());
init_esm();
init_clsx();
var import_jsx_runtime19 = __toESM(require_jsx_runtime());
var GridOverlayWrapperRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "OverlayWrapper",
  shouldForwardProp: (prop) => prop !== "overlayType",
  overridesResolver: (props, styles) => styles.overlayWrapper
})(({
  overlayType
}) => ({
  position: "sticky",
  // To stay in place while scrolling
  top: "var(--DataGrid-headersTotalHeight)",
  left: 0,
  width: 0,
  // To stay above the content instead of shifting it down
  height: 0,
  // To stay above the content instead of shifting it down
  zIndex: overlayType === "loadingOverlay" ? 5 : 4
  // Should be above pinned columns and detail panel
}));
var GridOverlayWrapperInner = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "OverlayWrapperInner",
  shouldForwardProp: (prop) => prop !== "overlayType",
  overridesResolver: (props, styles) => styles.overlayWrapperInner
})({});
var useUtilityClasses9 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["overlayWrapper"],
    inner: ["overlayWrapperInner"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridOverlayWrapper(props) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const currentPage = useGridVisibleRows(apiRef, rootProps);
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  let height = dimensions.viewportOuterSize.height - dimensions.headersTotalHeight - (dimensions.hasScrollX ? dimensions.scrollbarSize : 0);
  if (rootProps.autoHeight && currentPage.rows.length === 0 || height === 0) {
    height = getMinimalContentHeight(apiRef);
  }
  const classes2 = useUtilityClasses9(_extends({}, props, {
    classes: rootProps.classes
  }));
  return (0, import_jsx_runtime19.jsx)(GridOverlayWrapperRoot, {
    className: clsx_default(classes2.root),
    overlayType: props.overlayType,
    children: (0, import_jsx_runtime19.jsx)(GridOverlayWrapperInner, _extends({
      className: clsx_default(classes2.inner),
      style: {
        height,
        width: dimensions.viewportOuterSize.width
      }
    }, props))
  });
}
true ? GridOverlayWrapper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  overlayType: import_prop_types16.default.string.isRequired
} : void 0;
function GridOverlays() {
  var _a, _b, _c;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const totalRowCount = useGridSelector(apiRef, gridRowCountSelector);
  const visibleRowCount = useGridSelector(apiRef, gridExpandedRowCountSelector);
  const loading = useGridSelector(apiRef, gridRowsLoadingSelector);
  const showNoRowsOverlay = !loading && totalRowCount === 0;
  const showNoResultsOverlay = !loading && totalRowCount > 0 && visibleRowCount === 0;
  let overlay = null;
  let overlayType = "";
  if (showNoRowsOverlay) {
    overlay = (0, import_jsx_runtime19.jsx)(rootProps.slots.noRowsOverlay, _extends({}, (_a = rootProps.slotProps) == null ? void 0 : _a.noRowsOverlay));
    overlayType = "noRowsOverlay";
  }
  if (showNoResultsOverlay) {
    overlay = (0, import_jsx_runtime19.jsx)(rootProps.slots.noResultsOverlay, _extends({}, (_b = rootProps.slotProps) == null ? void 0 : _b.noResultsOverlay));
    overlayType = "noResultsOverlay";
  }
  if (loading) {
    overlay = (0, import_jsx_runtime19.jsx)(rootProps.slots.loadingOverlay, _extends({}, (_c = rootProps.slotProps) == null ? void 0 : _c.loadingOverlay));
    overlayType = "loadingOverlay";
  }
  if (overlay === null) {
    return null;
  }
  return (0, import_jsx_runtime19.jsx)(GridOverlayWrapper, {
    overlayType,
    children: overlay
  });
}

// node_modules/@mui/x-data-grid/components/GridHeaders.js
init_extends();
var React37 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/columnMenu/columnMenuSelector.js
var gridColumnMenuSelector = (state) => state.columnMenu;

// node_modules/@mui/x-data-grid/components/GridHeaders.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime());
function GridHeaders() {
  var _a;
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const filterColumnLookup = useGridSelector(apiRef, gridFilterActiveItemsLookupSelector);
  const sortColumnLookup = useGridSelector(apiRef, gridSortColumnLookupSelector);
  const columnHeaderTabIndexState = useGridSelector(apiRef, gridTabIndexColumnHeaderSelector);
  const cellTabIndexState = useGridSelector(apiRef, gridTabIndexCellSelector);
  const columnGroupHeaderTabIndexState = useGridSelector(apiRef, gridTabIndexColumnGroupHeaderSelector);
  const columnHeaderFocus = useGridSelector(apiRef, gridFocusColumnHeaderSelector);
  const columnGroupHeaderFocus = useGridSelector(apiRef, gridFocusColumnGroupHeaderSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridColumnGroupsHeaderMaxDepthSelector);
  const columnMenuState = useGridSelector(apiRef, gridColumnMenuSelector);
  const columnVisibility = useGridSelector(apiRef, gridColumnVisibilityModelSelector);
  const columnGroupsHeaderStructure = useGridSelector(apiRef, gridColumnGroupsHeaderStructureSelector);
  const hasOtherElementInTabSequence = !(columnGroupHeaderTabIndexState === null && columnHeaderTabIndexState === null && cellTabIndexState === null);
  const columnsContainerRef = React37.useRef(null);
  apiRef.current.register("private", {
    columnHeadersContainerRef: columnsContainerRef
  });
  return (0, import_jsx_runtime20.jsx)(rootProps.slots.columnHeaders, _extends({
    ref: columnsContainerRef,
    visibleColumns,
    filterColumnLookup,
    sortColumnLookup,
    columnHeaderTabIndexState,
    columnGroupHeaderTabIndexState,
    columnHeaderFocus,
    columnGroupHeaderFocus,
    headerGroupingMaxDepth,
    columnMenuState,
    columnVisibility,
    columnGroupsHeaderStructure,
    hasOtherElementInTabSequence
  }, (_a = rootProps.slotProps) == null ? void 0 : _a.columnHeaders));
}
var MemoizedGridHeaders = fastMemo(GridHeaders);

// node_modules/@mui/x-data-grid/components/virtualization/GridMainContainer.js
init_extends();
var React38 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/utils/useGridAriaAttributes.js
var useGridAriaAttributes = () => {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const visibleColumns = useGridSelector(apiRef, gridVisibleColumnDefinitionsSelector);
  const totalRowCount = useGridSelector(apiRef, gridRowCountSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridColumnGroupsHeaderMaxDepthSelector);
  const pinnedRowsCount = useGridSelector(apiRef, gridPinnedRowsCountSelector);
  let role = "grid";
  if (rootProps.treeData) {
    role = "treegrid";
  }
  return {
    role,
    "aria-colcount": visibleColumns.length,
    "aria-rowcount": headerGroupingMaxDepth + 1 + pinnedRowsCount + totalRowCount,
    "aria-multiselectable": isMultipleRowSelectionEnabled(rootProps)
  };
};

// node_modules/@mui/x-data-grid/components/virtualization/GridMainContainer.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime());
var Element = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "Main",
  overridesResolver: (props, styles) => styles.main
})({
  flexGrow: 1,
  position: "relative",
  overflow: "hidden"
});
var GridMainContainer = React38.forwardRef((props, ref) => {
  const ariaAttributes = useGridAriaAttributes();
  const rootProps = useGridRootProps();
  return (0, import_jsx_runtime21.jsx)(Element, _extends({
    ref,
    ownerState: rootProps,
    className: props.className,
    tabIndex: -1
  }, ariaAttributes, {
    children: props.children
  }));
});

// node_modules/@mui/x-data-grid/components/virtualization/GridTopContainer.js
init_extends();
var React39 = __toESM(require_react());
init_clsx();
init_esm();
var import_jsx_runtime22 = __toESM(require_jsx_runtime());
var useUtilityClasses10 = () => {
  const slots = {
    root: ["topContainer"]
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};
var Element2 = styled_default2("div")({
  position: "sticky",
  zIndex: 4,
  top: 0,
  "&::after": {
    content: '" "',
    position: "absolute",
    zIndex: 5,
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    width: "var(--DataGrid-rowWidth)",
    backgroundColor: "var(--DataGrid-rowBorderColor)"
  }
});
function GridTopContainer(props) {
  const classes2 = useUtilityClasses10();
  return (0, import_jsx_runtime22.jsx)(Element2, _extends({}, props, {
    className: clsx_default(classes2.root, props.className, gridClasses["container--top"]),
    role: "presentation"
  }));
}

// node_modules/@mui/x-data-grid/components/virtualization/GridBottomContainer.js
init_extends();
var React40 = __toESM(require_react());
init_clsx();
init_esm();
var import_jsx_runtime23 = __toESM(require_jsx_runtime());
var useUtilityClasses11 = () => {
  const slots = {
    root: ["bottomContainer"]
  };
  return composeClasses(slots, getDataGridUtilityClass, {});
};
var Element3 = styled_default2("div")({
  position: "sticky",
  zIndex: 4,
  bottom: "calc(var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize))"
});
function GridBottomContainer(props) {
  const classes2 = useUtilityClasses11();
  return (0, import_jsx_runtime23.jsx)(Element3, _extends({}, props, {
    className: clsx_default(classes2.root, props.className, gridClasses["container--bottom"]),
    role: "presentation"
  }));
}

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollerContent.js
init_extends();
var React41 = __toESM(require_react());
init_clsx();
init_esm();
var import_jsx_runtime24 = __toESM(require_jsx_runtime());
var useUtilityClasses12 = (props, overflowedContent) => {
  const {
    classes: classes2
  } = props;
  const slots = {
    root: ["virtualScrollerContent", overflowedContent && "virtualScrollerContent--overflowed"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var VirtualScrollerContentRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "VirtualScrollerContent",
  overridesResolver: (props, styles) => styles.virtualScrollerContent
})({});
var GridVirtualScrollerContent = React41.forwardRef(function GridVirtualScrollerContent2(props, ref) {
  var _a;
  const rootProps = useGridRootProps();
  const overflowedContent = !rootProps.autoHeight && ((_a = props.style) == null ? void 0 : _a.minHeight) === "auto";
  const classes2 = useUtilityClasses12(rootProps, overflowedContent);
  return (0, import_jsx_runtime24.jsx)(VirtualScrollerContentRoot, _extends({
    ref
  }, props, {
    ownerState: rootProps,
    className: clsx_default(classes2.root, props.className)
  }));
});

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollerFiller.js
var React42 = __toESM(require_react());
var import_jsx_runtime25 = __toESM(require_jsx_runtime());
var Filler = styled_default2("div")({
  display: "flex",
  flexDirection: "row",
  width: "var(--DataGrid-rowWidth)",
  boxSizing: "border-box"
});
var Pinned = styled_default2("div")({
  position: "sticky",
  height: "100%",
  boxSizing: "border-box",
  borderTop: "1px solid var(--DataGrid-rowBorderColor)",
  backgroundColor: "var(--DataGrid-pinnedBackground)"
});
var PinnedLeft = styled_default2(Pinned)({
  left: 0,
  borderRight: "1px solid var(--DataGrid-rowBorderColor)"
});
var PinnedRight = styled_default2(Pinned)({
  right: 0,
  borderLeft: "1px solid var(--DataGrid-rowBorderColor)"
});
var Main = styled_default2("div")({
  flexGrow: 1,
  borderTop: "1px solid var(--DataGrid-rowBorderColor)"
});
function GridVirtualScrollerFiller() {
  const apiRef = useGridApiContext();
  const {
    viewportOuterSize,
    minimumSize,
    hasScrollX,
    hasScrollY,
    scrollbarSize,
    leftPinnedWidth,
    rightPinnedWidth
  } = useGridSelector(apiRef, gridDimensionsSelector);
  const scrollbarHeight = hasScrollX ? scrollbarSize : 0;
  const expandedHeight = viewportOuterSize.height - minimumSize.height - scrollbarHeight;
  const height = Math.max(scrollbarHeight, expandedHeight);
  if (height === 0) {
    return null;
  }
  return (0, import_jsx_runtime25.jsxs)(Filler, {
    className: gridClasses.filler,
    role: "presentation",
    style: {
      height
    },
    children: [leftPinnedWidth > 0 && (0, import_jsx_runtime25.jsx)(PinnedLeft, {
      className: gridClasses["filler--pinnedLeft"],
      style: {
        width: leftPinnedWidth
      }
    }), (0, import_jsx_runtime25.jsx)(Main, {}), rightPinnedWidth > 0 && (0, import_jsx_runtime25.jsx)(PinnedRight, {
      className: gridClasses["filler--pinnedRight"],
      style: {
        width: rightPinnedWidth + (hasScrollY ? scrollbarSize : 0)
      }
    })]
  });
}
var Memoized = fastMemo(GridVirtualScrollerFiller);

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollerRenderZone.js
init_extends();
init_objectWithoutPropertiesLoose();
var React43 = __toESM(require_react());
init_clsx();
init_esm();
var import_jsx_runtime26 = __toESM(require_jsx_runtime());
var _excluded16 = ["className"];
var useUtilityClasses13 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["virtualScrollerRenderZone"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var VirtualScrollerRenderZoneRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "VirtualScrollerRenderZone",
  overridesResolver: (props, styles) => styles.virtualScrollerRenderZone
})({
  position: "absolute",
  display: "flex",
  // Prevents margin collapsing when using `getRowSpacing`
  flexDirection: "column"
});
var GridVirtualScrollerRenderZone = React43.forwardRef(function GridVirtualScrollerRenderZone2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded16);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses13(rootProps);
  const offsetTop = useGridSelector(apiRef, () => {
    const renderContext = gridRenderContextSelector(apiRef);
    const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
    return rowsMeta.positions[renderContext.firstRowIndex] ?? 0;
  });
  return (0, import_jsx_runtime26.jsx)(VirtualScrollerRenderZoneRoot, _extends({
    ref,
    className: clsx_default(classes2.root, className),
    ownerState: rootProps,
    style: {
      transform: `translate3d(0, ${offsetTop}px, 0)`
    }
  }, other));
});

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollbar.js
var React44 = __toESM(require_react());
init_esm();

// node_modules/@mui/x-data-grid/hooks/features/columnResize/columnResizeSelector.js
var gridColumnResizeSelector = (state) => state.columnResize;
var gridResizingColumnFieldSelector = createSelector2(gridColumnResizeSelector, (columnResize) => columnResize.resizingColumnField);

// node_modules/@mui/x-data-grid/hooks/features/columnResize/gridColumnResizeApi.js
var DEFAULT_GRID_AUTOSIZE_OPTIONS = {
  includeHeaders: true,
  includeOutliers: false,
  outliersFactor: 1.5,
  expand: false
};

// node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/gridPreferencePanelSelector.js
var gridPreferencePanelStateSelector = (state) => state.preferencePanel;

// node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/gridPreferencePanelsValue.js
var GridPreferencePanelsValue = function(GridPreferencePanelsValue2) {
  GridPreferencePanelsValue2["filters"] = "filters";
  GridPreferencePanelsValue2["columns"] = "columns";
  return GridPreferencePanelsValue2;
}(GridPreferencePanelsValue || {});

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScrollbar.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime());
var useUtilityClasses14 = (ownerState, position) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["scrollbar", `scrollbar--${position}`],
    content: ["scrollbarContent"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var Scrollbar = styled_default2("div")({
  position: "absolute",
  display: "inline-block",
  zIndex: 6,
  "& > div": {
    display: "inline-block"
  },
  // In macOS Safari and Gnome Web, scrollbars are overlaid and don't affect the layout. So we consider
  // their size to be 0px throughout all the calculations, but the floating scrollbar container does need
  // to appear and have a real size. We set it to 14px because it seems like an acceptable value and we
  // don't have a method to find the required size for scrollbars on those platforms.
  "--size": "calc(max(var(--DataGrid-scrollbarSize), 14px))"
});
var ScrollbarVertical = styled_default2(Scrollbar)({
  width: "var(--size)",
  height: "calc(var(--DataGrid-hasScrollY) * (100% - var(--DataGrid-topContainerHeight) - var(--DataGrid-bottomContainerHeight) - var(--DataGrid-hasScrollX) * var(--DataGrid-scrollbarSize)))",
  overflowY: "auto",
  overflowX: "hidden",
  // Disable focus-visible style, it's a scrollbar.
  outline: 0,
  "& > div": {
    width: "var(--size)"
  },
  top: "var(--DataGrid-topContainerHeight)",
  right: "0px"
});
var ScrollbarHorizontal = styled_default2(Scrollbar)({
  width: "100%",
  height: "var(--size)",
  overflowY: "hidden",
  overflowX: "auto",
  // Disable focus-visible style, it's a scrollbar.
  outline: 0,
  "& > div": {
    height: "var(--size)"
  },
  bottom: "0px"
});
var Content = styled_default2("div")({
  display: "inline-block"
});
var GridVirtualScrollbar = React44.forwardRef(function GridVirtualScrollbar2(props, ref) {
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const isLocked = React44.useRef(false);
  const lastPosition = React44.useRef(0);
  const scrollbarRef = React44.useRef(null);
  const contentRef = React44.useRef(null);
  const classes2 = useUtilityClasses14(rootProps, props.position);
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  const propertyDimension = props.position === "vertical" ? "height" : "width";
  const propertyScroll = props.position === "vertical" ? "scrollTop" : "scrollLeft";
  const hasScroll = props.position === "vertical" ? dimensions.hasScrollX : dimensions.hasScrollY;
  const contentSize = dimensions.minimumSize[propertyDimension] + (hasScroll ? dimensions.scrollbarSize : 0);
  const scrollbarSize = props.position === "vertical" ? dimensions.viewportInnerSize.height : dimensions.viewportOuterSize.width;
  const scrollbarInnerSize = scrollbarSize * (contentSize / dimensions.viewportOuterSize[propertyDimension]);
  const onScrollerScroll = useEventCallback_default(() => {
    const scroller = apiRef.current.virtualScrollerRef.current;
    const scrollbar = scrollbarRef.current;
    if (scroller[propertyScroll] === lastPosition.current) {
      return;
    }
    if (isLocked.current) {
      isLocked.current = false;
      return;
    }
    isLocked.current = true;
    const value = scroller[propertyScroll] / contentSize;
    scrollbar[propertyScroll] = value * scrollbarInnerSize;
    lastPosition.current = scroller[propertyScroll];
  });
  const onScrollbarScroll = useEventCallback_default(() => {
    const scroller = apiRef.current.virtualScrollerRef.current;
    const scrollbar = scrollbarRef.current;
    if (isLocked.current) {
      isLocked.current = false;
      return;
    }
    isLocked.current = true;
    const value = scrollbar[propertyScroll] / scrollbarInnerSize;
    scroller[propertyScroll] = value * contentSize;
  });
  useOnMount(() => {
    const scroller = apiRef.current.virtualScrollerRef.current;
    const scrollbar = scrollbarRef.current;
    scroller.addEventListener("scroll", onScrollerScroll, {
      capture: true
    });
    scrollbar.addEventListener("scroll", onScrollbarScroll, {
      capture: true
    });
    return () => {
      scroller.removeEventListener("scroll", onScrollerScroll, {
        capture: true
      });
      scrollbar.removeEventListener("scroll", onScrollbarScroll, {
        capture: true
      });
    };
  });
  React44.useEffect(() => {
    const content = contentRef.current;
    content.style.setProperty(propertyDimension, `${scrollbarInnerSize}px`);
  }, [scrollbarInnerSize, propertyDimension]);
  const Container = props.position === "vertical" ? ScrollbarVertical : ScrollbarHorizontal;
  return (0, import_jsx_runtime27.jsx)(Container, {
    ref: useForkRef(ref, scrollbarRef),
    className: classes2.root,
    tabIndex: -1,
    children: (0, import_jsx_runtime27.jsx)(Content, {
      ref: contentRef,
      className: classes2.content
    })
  });
});

// node_modules/@mui/x-data-grid/components/virtualization/GridVirtualScroller.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime());
var useUtilityClasses15 = (ownerState, dimensions) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["main", dimensions.rightPinnedWidth > 0 && "main--hasPinnedRight"],
    scroller: ["virtualScroller"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var Scroller = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "VirtualScroller",
  overridesResolver: (props, styles) => styles.virtualScroller
})({
  position: "relative",
  height: "100%",
  overflow: "scroll",
  scrollbarWidth: "none",
  "&::-webkit-scrollbar": {
    display: "none"
    /* Safari and Chrome */
  },
  "@media print": {
    overflow: "hidden"
  },
  // See https://github.com/mui/mui-x/issues/10547
  zIndex: 0
});
function GridVirtualScroller(props) {
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  const classes2 = useUtilityClasses15(rootProps, dimensions);
  const virtualScroller = useGridVirtualScroller();
  const {
    getContainerProps,
    getScrollerProps,
    getContentProps,
    getRenderZoneProps,
    getScrollbarVerticalProps,
    getScrollbarHorizontalProps,
    getRows
  } = virtualScroller;
  const rows = getRows();
  return (0, import_jsx_runtime28.jsxs)(GridMainContainer, _extends({
    className: classes2.root
  }, getContainerProps(), {
    children: [(0, import_jsx_runtime28.jsx)(GridScrollArea, {
      scrollDirection: "left"
    }), (0, import_jsx_runtime28.jsx)(GridScrollArea, {
      scrollDirection: "right"
    }), (0, import_jsx_runtime28.jsxs)(Scroller, _extends({
      className: classes2.scroller
    }, getScrollerProps(), {
      ownerState: rootProps,
      children: [(0, import_jsx_runtime28.jsxs)(GridTopContainer, {
        children: [(0, import_jsx_runtime28.jsx)(MemoizedGridHeaders, {}), (0, import_jsx_runtime28.jsx)(rootProps.slots.pinnedRows, {
          position: "top",
          virtualScroller
        })]
      }), (0, import_jsx_runtime28.jsx)(GridOverlays, {}), (0, import_jsx_runtime28.jsx)(GridVirtualScrollerContent, _extends({}, getContentProps(), {
        children: (0, import_jsx_runtime28.jsxs)(GridVirtualScrollerRenderZone, _extends({}, getRenderZoneProps(), {
          children: [rows, (0, import_jsx_runtime28.jsx)(rootProps.slots.detailPanels, {
            virtualScroller
          })]
        }))
      })), rows.length > 0 && (0, import_jsx_runtime28.jsx)(Memoized, {}), (0, import_jsx_runtime28.jsx)(GridBottomContainer, {
        children: (0, import_jsx_runtime28.jsx)(rootProps.slots.pinnedRows, {
          position: "bottom",
          virtualScroller
        })
      })]
    })), dimensions.hasScrollY && (0, import_jsx_runtime28.jsx)(GridVirtualScrollbar, _extends({
      position: "vertical"
    }, getScrollbarVerticalProps())), dimensions.hasScrollX && (0, import_jsx_runtime28.jsx)(GridVirtualScrollbar, _extends({
      position: "horizontal"
    }, getScrollbarHorizontalProps())), props.children]
  }));
}

// node_modules/@mui/x-data-grid/components/base/GridFooterPlaceholder.js
init_extends();
var React46 = __toESM(require_react());
var import_jsx_runtime29 = __toESM(require_jsx_runtime());
function GridFooterPlaceholder() {
  var _a;
  const rootProps = useGridRootProps();
  if (rootProps.hideFooter) {
    return null;
  }
  return (0, import_jsx_runtime29.jsx)(rootProps.slots.footer, _extends(
    {},
    (_a = rootProps.slotProps) == null ? void 0 : _a.footer
    /* FIXME: typing error */
  ));
}

// node_modules/@mui/x-data-grid/components/cell/GridCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React48 = __toESM(require_react());
var import_prop_types17 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-data-grid/utils/doesSupportPreventScroll.js
var cachedSupportsPreventScroll;
function doesSupportPreventScroll() {
  if (cachedSupportsPreventScroll === void 0) {
    document.createElement("div").focus({
      get preventScroll() {
        cachedSupportsPreventScroll = true;
        return false;
      }
    });
  }
  return cachedSupportsPreventScroll;
}

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridParamsApi.js
var React47 = __toESM(require_react());

// node_modules/@mui/x-data-grid/utils/domUtils.js
function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
function findParentElementFromClassName(elem, className) {
  return elem.closest(`.${className}`);
}
function escapeOperandAttributeSelector(operand) {
  return operand.replace(/["\\]/g, "\\$&");
}
function getGridColumnHeaderElement(root, field) {
  return root.querySelector(`[role="columnheader"][data-field="${escapeOperandAttributeSelector(field)}"]`);
}
function getGridRowElementSelector(id) {
  return `.${gridClasses.row}[data-id="${escapeOperandAttributeSelector(String(id))}"]`;
}
function getGridRowElement(root, id) {
  return root.querySelector(getGridRowElementSelector(id));
}
function getGridCellElement(root, {
  id,
  field
}) {
  const rowSelector = getGridRowElementSelector(id);
  const cellSelector = `.${gridClasses.cell}[data-field="${escapeOperandAttributeSelector(field)}"]`;
  const selector = `${rowSelector} ${cellSelector}`;
  return root.querySelector(selector);
}
function isEventTargetInPortal(event) {
  if (
    // The target is not an element when triggered by a Select inside the cell
    // See https://github.com/mui/material-ui/issues/10534
    event.target.nodeType === 1 && !event.currentTarget.contains(event.target)
  ) {
    return true;
  }
  return false;
}
function getFieldFromHeaderElem(colCellEl) {
  return colCellEl.getAttribute("data-field");
}
function findHeaderElementFromField(elem, field) {
  return elem.querySelector(`[data-field="${escapeOperandAttributeSelector(field)}"]`);
}
function getFieldsFromGroupHeaderElem(colCellEl) {
  return colCellEl.getAttribute("data-fields").slice(2, -2).split("-|-");
}
function findGroupHeaderElementsFromField(elem, field) {
  return Array.from(elem.querySelectorAll(`[data-fields*="|-${escapeOperandAttributeSelector(field)}-|"]`) ?? []);
}
function findGridCellElementsFromCol(col, api) {
  var _a;
  const root = findParentElementFromClassName(col, gridClasses.root);
  if (!root) {
    throw new Error("MUI X: The root element is not found.");
  }
  const ariaColIndex = col.getAttribute("aria-colindex");
  if (!ariaColIndex) {
    return [];
  }
  const colIndex = Number(ariaColIndex) - 1;
  const cells = [];
  if (!((_a = api.virtualScrollerRef) == null ? void 0 : _a.current)) {
    return [];
  }
  queryRows(api).forEach((rowElement) => {
    const rowId = rowElement.getAttribute("data-id");
    if (!rowId) {
      return;
    }
    let columnIndex = colIndex;
    const cellColSpanInfo = api.unstable_getCellColSpanInfo(rowId, colIndex);
    if (cellColSpanInfo && cellColSpanInfo.spannedByColSpan) {
      columnIndex = cellColSpanInfo.leftVisibleCellIndex;
    }
    const cell = rowElement.querySelector(`[data-colindex="${columnIndex}"]`);
    if (cell) {
      cells.push(cell);
    }
  });
  return cells;
}
function findGridElement(api, klass) {
  return api.rootElementRef.current.querySelector(`.${gridClasses[klass]}`);
}
var findPinnedCells = ({
  api,
  colIndex,
  position,
  filterFn
}) => {
  if (colIndex === null) {
    return [];
  }
  const cells = [];
  queryRows(api).forEach((rowElement) => {
    const rowId = rowElement.getAttribute("data-id");
    if (!rowId) {
      return;
    }
    rowElement.querySelectorAll(`.${gridClasses[position === "left" ? "cell--pinnedLeft" : "cell--pinnedRight"]}`).forEach((cell) => {
      const currentColIndex = parseCellColIndex(cell);
      if (currentColIndex !== null && filterFn(currentColIndex)) {
        cells.push(cell);
      }
    });
  });
  return cells;
};
function findLeftPinnedCellsAfterCol(api, col) {
  const colIndex = parseCellColIndex(col);
  return findPinnedCells({
    api,
    colIndex,
    position: "left",
    filterFn: (index) => index > colIndex
  });
}
function findRightPinnedCellsBeforeCol(api, col) {
  const colIndex = parseCellColIndex(col);
  return findPinnedCells({
    api,
    colIndex,
    position: "right",
    filterFn: (index) => index < colIndex
  });
}
var findPinnedHeaders = ({
  api,
  colIndex,
  position,
  filterFn
}) => {
  var _a;
  if (!((_a = api.columnHeadersContainerRef) == null ? void 0 : _a.current)) {
    return [];
  }
  if (colIndex === null) {
    return [];
  }
  const elements = [];
  api.columnHeadersContainerRef.current.querySelectorAll(`.${gridClasses[position === "left" ? "columnHeader--pinnedLeft" : "columnHeader--pinnedRight"]}`).forEach((element) => {
    const currentColIndex = parseCellColIndex(element);
    if (currentColIndex !== null && filterFn(currentColIndex)) {
      elements.push(element);
    }
  });
  return elements;
};
function findLeftPinnedHeadersAfterCol(api, col) {
  const colIndex = parseCellColIndex(col);
  return findPinnedHeaders({
    api,
    position: "left",
    colIndex,
    filterFn: (index) => index > colIndex
  });
}
function findRightPinnedHeadersBeforeCol(api, col) {
  const colIndex = parseCellColIndex(col);
  return findPinnedHeaders({
    api,
    position: "right",
    colIndex,
    filterFn: (index) => index < colIndex
  });
}
function findGridHeader(api, field) {
  const headers = api.columnHeadersContainerRef.current;
  return headers.querySelector(`:scope > div > [data-field="${escapeOperandAttributeSelector(field)}"][role="columnheader"]`);
}
function findGridCells(api, field) {
  const container = api.virtualScrollerRef.current;
  return Array.from(container.querySelectorAll(`:scope > div > div > div > [data-field="${escapeOperandAttributeSelector(field)}"][role="gridcell"]`));
}
function queryRows(api) {
  return api.virtualScrollerRef.current.querySelectorAll(
    // Use > to ignore rows from nested data grids (for example in detail panel)
    `:scope > div > div > .${gridClasses.row}`
  );
}
function parseCellColIndex(col) {
  const ariaColIndex = col.getAttribute("aria-colindex");
  if (!ariaColIndex) {
    return null;
  }
  return Number(ariaColIndex) - 1;
}

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridParamsApi.js
var MissingRowIdError = class extends Error {
};
function useGridParamsApi(apiRef) {
  const getColumnHeaderParams = React47.useCallback((field) => ({
    field,
    colDef: apiRef.current.getColumn(field)
  }), [apiRef]);
  const getRowParams = React47.useCallback((id) => {
    const row = apiRef.current.getRow(id);
    if (!row) {
      throw new MissingRowIdError(`No row with id #${id} found`);
    }
    const params = {
      id,
      columns: apiRef.current.getAllColumns(),
      row
    };
    return params;
  }, [apiRef]);
  const getCellParams = React47.useCallback((id, field) => {
    const colDef = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    const rowNode = apiRef.current.getRowNode(id);
    if (!row || !rowNode) {
      throw new MissingRowIdError(`No row with id #${id} found`);
    }
    const rawValue = row[field];
    const value = (colDef == null ? void 0 : colDef.valueGetter) ? colDef.valueGetter(rawValue, row, colDef, apiRef) : rawValue;
    const cellFocus = gridFocusCellSelector(apiRef);
    const cellTabIndex = gridTabIndexCellSelector(apiRef);
    const params = {
      id,
      field,
      row,
      rowNode,
      colDef,
      cellMode: apiRef.current.getCellMode(id, field),
      hasFocus: cellFocus !== null && cellFocus.field === field && cellFocus.id === id,
      tabIndex: cellTabIndex && cellTabIndex.field === field && cellTabIndex.id === id ? 0 : -1,
      value,
      formattedValue: value,
      isEditable: false
    };
    if (colDef && colDef.valueFormatter) {
      params.formattedValue = colDef.valueFormatter(value, row, colDef, apiRef);
    }
    params.isEditable = colDef && apiRef.current.isCellEditable(params);
    return params;
  }, [apiRef]);
  const getCellValue = React47.useCallback((id, field) => {
    const colDef = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    if (!row) {
      throw new MissingRowIdError(`No row with id #${id} found`);
    }
    if (!colDef || !colDef.valueGetter) {
      return row[field];
    }
    return colDef.valueGetter(row[colDef.field], row, colDef, apiRef);
  }, [apiRef]);
  const getRowValue = React47.useCallback((row, colDef) => {
    const field = colDef.field;
    if (!colDef || !colDef.valueGetter) {
      return row[field];
    }
    const value = row[colDef.field];
    return colDef.valueGetter(value, row, colDef, apiRef);
  }, [apiRef]);
  const getRowFormattedValue = React47.useCallback((row, colDef) => {
    const value = getRowValue(row, colDef);
    if (!colDef || !colDef.valueFormatter) {
      return value;
    }
    return colDef.valueFormatter(value, row, colDef, apiRef);
  }, [apiRef, getRowValue]);
  const getColumnHeaderElement = React47.useCallback((field) => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridColumnHeaderElement(apiRef.current.rootElementRef.current, field);
  }, [apiRef]);
  const getRowElement = React47.useCallback((id) => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridRowElement(apiRef.current.rootElementRef.current, id);
  }, [apiRef]);
  const getCellElement = React47.useCallback((id, field) => {
    if (!apiRef.current.rootElementRef.current) {
      return null;
    }
    return getGridCellElement(apiRef.current.rootElementRef.current, {
      id,
      field
    });
  }, [apiRef]);
  const paramsApi = {
    getCellValue,
    getCellParams,
    getCellElement,
    getRowValue,
    getRowFormattedValue,
    getRowParams,
    getRowElement,
    getColumnHeaderParams,
    getColumnHeaderElement
  };
  useGridApiMethod(apiRef, paramsApi, "public");
}

// node_modules/@mui/x-data-grid/utils/cellBorderUtils.js
var shouldCellShowRightBorder = (pinnedPosition, indexInSection, sectionLength, showCellVerticalBorderRootProp, gridHasFiller) => {
  const isSectionLastCell = indexInSection === sectionLength - 1;
  if (pinnedPosition === GridPinnedColumnPosition.LEFT && isSectionLastCell) {
    return true;
  }
  if (showCellVerticalBorderRootProp) {
    if (pinnedPosition === GridPinnedColumnPosition.LEFT) {
      return true;
    }
    if (pinnedPosition === GridPinnedColumnPosition.RIGHT) {
      return !isSectionLastCell;
    }
    return !isSectionLastCell || gridHasFiller;
  }
  return false;
};
var shouldCellShowLeftBorder = (pinnedPosition, indexInSection) => {
  return pinnedPosition === GridPinnedColumnPosition.RIGHT && indexInSection === 0;
};

// node_modules/@mui/x-data-grid/components/cell/GridCell.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime());
var _excluded17 = ["column", "rowId", "editCellState", "align", "children", "colIndex", "width", "className", "style", "gridHasScrollX", "colSpan", "disableDragEvents", "isNotVisible", "pinnedOffset", "pinnedPosition", "sectionIndex", "sectionLength", "gridHasFiller", "onClick", "onDoubleClick", "onMouseDown", "onMouseUp", "onMouseOver", "onKeyDown", "onKeyUp", "onDragEnter", "onDragOver"];
var _excluded24 = ["changeReason", "unstable_updateValueOnRender"];
var PinnedPosition = function(PinnedPosition2) {
  PinnedPosition2[PinnedPosition2["NONE"] = 0] = "NONE";
  PinnedPosition2[PinnedPosition2["LEFT"] = 1] = "LEFT";
  PinnedPosition2[PinnedPosition2["RIGHT"] = 2] = "RIGHT";
  PinnedPosition2[PinnedPosition2["VIRTUAL"] = 3] = "VIRTUAL";
  return PinnedPosition2;
}({});
var gridPinnedColumnPositionLookup = {
  [PinnedPosition.LEFT]: GridPinnedColumnPosition.LEFT,
  [PinnedPosition.RIGHT]: GridPinnedColumnPosition.RIGHT,
  [PinnedPosition.NONE]: void 0,
  [PinnedPosition.VIRTUAL]: void 0
};
var EMPTY_CELL_PARAMS = {
  id: -1,
  field: "__unset__",
  row: {},
  rowNode: {
    id: -1,
    depth: 0,
    type: "leaf",
    parent: -1,
    groupingKey: null
  },
  colDef: {
    type: "string",
    field: "__unset__",
    computedWidth: 0
  },
  cellMode: GridCellModes.View,
  hasFocus: false,
  tabIndex: -1,
  value: null,
  formattedValue: "__unset__",
  isEditable: false,
  api: {}
};
var useUtilityClasses16 = (ownerState) => {
  const {
    align,
    showLeftBorder,
    showRightBorder,
    pinnedPosition,
    isEditable,
    isSelected,
    isSelectionMode,
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["cell", `cell--text${capitalize(align)}`, isSelected && "selected", isEditable && "cell--editable", showLeftBorder && "cell--withLeftBorder", showRightBorder && "cell--withRightBorder", pinnedPosition === PinnedPosition.LEFT && "cell--pinnedLeft", pinnedPosition === PinnedPosition.RIGHT && "cell--pinnedRight", isSelectionMode && !isEditable && "cell--selectionMode"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridCell = React48.forwardRef(function GridCell2(props, ref) {
  var _a;
  const {
    column,
    rowId,
    editCellState,
    align,
    colIndex,
    width,
    className,
    style: styleProp,
    colSpan,
    disableDragEvents,
    isNotVisible,
    pinnedOffset,
    pinnedPosition,
    sectionIndex,
    sectionLength,
    gridHasFiller,
    onClick,
    onDoubleClick,
    onMouseDown,
    onMouseUp,
    onMouseOver,
    onKeyDown,
    onKeyUp,
    onDragEnter,
    onDragOver
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded17);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const field = column.field;
  const cellParamsWithAPI = useGridSelector(apiRef, () => {
    try {
      const cellParams = apiRef.current.getCellParams(rowId, field);
      const result = cellParams;
      result.api = apiRef.current;
      return result;
    } catch (e) {
      if (e instanceof MissingRowIdError) {
        return EMPTY_CELL_PARAMS;
      }
      throw e;
    }
  }, objectShallowCompare);
  const isSelected = useGridSelector(apiRef, () => apiRef.current.unstable_applyPipeProcessors("isCellSelected", false, {
    id: rowId,
    field
  }));
  const {
    cellMode,
    hasFocus,
    isEditable = false,
    value
  } = cellParamsWithAPI;
  const canManageOwnFocus = column.type === "actions" && ((_a = column.getActions) == null ? void 0 : _a.call(column, apiRef.current.getRowParams(rowId)).some((action) => !action.props.disabled));
  const tabIndex = (cellMode === "view" || !isEditable) && !canManageOwnFocus ? cellParamsWithAPI.tabIndex : -1;
  const {
    classes: rootClasses,
    getCellClassName
  } = rootProps;
  const pipesClassName = useGridSelector(apiRef, () => apiRef.current.unstable_applyPipeProcessors("cellClassName", [], {
    id: rowId,
    field
  }).filter(Boolean).join(" "));
  const classNames = [pipesClassName];
  if (column.cellClassName) {
    classNames.push(typeof column.cellClassName === "function" ? column.cellClassName(cellParamsWithAPI) : column.cellClassName);
  }
  if (column.display === "flex") {
    classNames.push(gridClasses["cell--flex"]);
  }
  if (getCellClassName) {
    classNames.push(getCellClassName(cellParamsWithAPI));
  }
  const valueToRender = cellParamsWithAPI.formattedValue ?? value;
  const cellRef = React48.useRef(null);
  const handleRef = useForkRef(ref, cellRef);
  const focusElementRef = React48.useRef(null);
  const isSelectionMode = rootProps.cellSelection ?? false;
  const position = gridPinnedColumnPositionLookup[pinnedPosition];
  const showLeftBorder = shouldCellShowLeftBorder(position, sectionIndex);
  const showRightBorder = shouldCellShowRightBorder(position, sectionIndex, sectionLength, rootProps.showCellVerticalBorder, gridHasFiller);
  const ownerState = {
    align,
    showLeftBorder,
    showRightBorder,
    isEditable,
    classes: rootProps.classes,
    pinnedPosition,
    isSelected,
    isSelectionMode
  };
  const classes2 = useUtilityClasses16(ownerState);
  const publishMouseUp = React48.useCallback((eventName) => (event) => {
    const params = apiRef.current.getCellParams(rowId, field || "");
    apiRef.current.publishEvent(eventName, params, event);
    if (onMouseUp) {
      onMouseUp(event);
    }
  }, [apiRef, field, onMouseUp, rowId]);
  const publishMouseDown = React48.useCallback((eventName) => (event) => {
    const params = apiRef.current.getCellParams(rowId, field || "");
    apiRef.current.publishEvent(eventName, params, event);
    if (onMouseDown) {
      onMouseDown(event);
    }
  }, [apiRef, field, onMouseDown, rowId]);
  const publish = React48.useCallback((eventName, propHandler) => (event) => {
    if (!apiRef.current.getRow(rowId)) {
      return;
    }
    const params = apiRef.current.getCellParams(rowId, field || "");
    apiRef.current.publishEvent(eventName, params, event);
    if (propHandler) {
      propHandler(event);
    }
  }, [apiRef, field, rowId]);
  const style = React48.useMemo(() => {
    if (isNotVisible) {
      return {
        padding: 0,
        opacity: 0,
        width: 0,
        border: 0
      };
    }
    const cellStyle = _extends({
      "--width": `${width}px`
    }, styleProp);
    if (pinnedPosition === PinnedPosition.LEFT) {
      cellStyle.left = pinnedOffset;
    }
    if (pinnedPosition === PinnedPosition.RIGHT) {
      cellStyle.right = pinnedOffset;
    }
    return cellStyle;
  }, [width, isNotVisible, styleProp, pinnedOffset, pinnedPosition]);
  React48.useEffect(() => {
    if (!hasFocus || cellMode === GridCellModes.Edit) {
      return;
    }
    const doc = ownerDocument(apiRef.current.rootElementRef.current);
    if (cellRef.current && !cellRef.current.contains(doc.activeElement)) {
      const focusableElement = cellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusElementRef.current || focusableElement || cellRef.current;
      if (doesSupportPreventScroll()) {
        elementToFocus.focus({
          preventScroll: true
        });
      } else {
        const scrollPosition = apiRef.current.getScrollPosition();
        elementToFocus.focus();
        apiRef.current.scroll(scrollPosition);
      }
    }
  }, [hasFocus, cellMode, apiRef]);
  if (cellParamsWithAPI === EMPTY_CELL_PARAMS) {
    return null;
  }
  let handleFocus = other.onFocus;
  if (false) {
    handleFocus = (event) => {
      const focusedCell = gridFocusCellSelector(apiRef);
      if ((focusedCell == null ? void 0 : focusedCell.id) === rowId && focusedCell.field === field) {
        if (typeof other.onFocus === "function") {
          other.onFocus(event);
        }
        return;
      }
      if (!warnedOnce) {
        console.warn([`MUI X: The cell with id=${rowId} and field=${field} received focus.`, `According to the state, the focus should be at id=${focusedCell == null ? void 0 : focusedCell.id}, field=${focusedCell == null ? void 0 : focusedCell.field}.`, "Not syncing the state may cause unwanted behaviors since the `cellFocusIn` event won't be fired.", "Call `fireEvent.mouseUp` before the `fireEvent.click` to sync the focus with the state."].join("\n"));
        warnedOnce = true;
      }
    };
  }
  let children;
  let title;
  if (editCellState === null && column.renderCell) {
    children = column.renderCell(cellParamsWithAPI);
  }
  if (editCellState !== null && column.renderEditCell) {
    const updatedRow = apiRef.current.getRowWithUpdatedValues(rowId, column.field);
    const editCellStateRest = _objectWithoutPropertiesLoose(editCellState, _excluded24);
    const formattedValue = column.valueFormatter ? column.valueFormatter(editCellState.value, updatedRow, column, apiRef) : cellParamsWithAPI.formattedValue;
    const params = _extends({}, cellParamsWithAPI, {
      row: updatedRow,
      formattedValue
    }, editCellStateRest);
    children = column.renderEditCell(params);
    classNames.push(gridClasses["cell--editing"]);
    classNames.push(rootClasses == null ? void 0 : rootClasses["cell--editing"]);
  }
  if (children === void 0) {
    const valueString = valueToRender == null ? void 0 : valueToRender.toString();
    children = valueString;
    title = valueString;
  }
  if (React48.isValidElement(children) && canManageOwnFocus) {
    children = React48.cloneElement(children, {
      focusElementRef
    });
  }
  const draggableEventHandlers = disableDragEvents ? null : {
    onDragEnter: publish("cellDragEnter", onDragEnter),
    onDragOver: publish("cellDragOver", onDragOver)
  };
  return (0, import_jsx_runtime30.jsx)("div", _extends({
    ref: handleRef,
    className: clsx_default(className, classNames, classes2.root),
    role: "gridcell",
    "data-field": field,
    "data-colindex": colIndex,
    "aria-colindex": colIndex + 1,
    "aria-colspan": colSpan,
    style,
    title,
    tabIndex,
    onClick: publish("cellClick", onClick),
    onDoubleClick: publish("cellDoubleClick", onDoubleClick),
    onMouseOver: publish("cellMouseOver", onMouseOver),
    onMouseDown: publishMouseDown("cellMouseDown"),
    onMouseUp: publishMouseUp("cellMouseUp"),
    onKeyDown: publish("cellKeyDown", onKeyDown),
    onKeyUp: publish("cellKeyUp", onKeyUp)
  }, draggableEventHandlers, other, {
    onFocus: handleFocus,
    children
  }));
});
true ? GridCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  align: import_prop_types17.default.oneOf(["center", "left", "right"]).isRequired,
  className: import_prop_types17.default.string,
  colIndex: import_prop_types17.default.number.isRequired,
  colSpan: import_prop_types17.default.number,
  column: import_prop_types17.default.object.isRequired,
  disableDragEvents: import_prop_types17.default.bool,
  editCellState: import_prop_types17.default.shape({
    changeReason: import_prop_types17.default.oneOf(["debouncedSetEditCellValue", "setEditCellValue"]),
    isProcessingProps: import_prop_types17.default.bool,
    isValidating: import_prop_types17.default.bool,
    value: import_prop_types17.default.any
  }),
  gridHasFiller: import_prop_types17.default.bool.isRequired,
  isNotVisible: import_prop_types17.default.bool.isRequired,
  onClick: import_prop_types17.default.func,
  onDoubleClick: import_prop_types17.default.func,
  onDragEnter: import_prop_types17.default.func,
  onDragOver: import_prop_types17.default.func,
  onKeyDown: import_prop_types17.default.func,
  onMouseDown: import_prop_types17.default.func,
  onMouseUp: import_prop_types17.default.func,
  pinnedOffset: import_prop_types17.default.number.isRequired,
  pinnedPosition: import_prop_types17.default.oneOf([0, 1, 2, 3]).isRequired,
  rowId: import_prop_types17.default.oneOfType([import_prop_types17.default.number, import_prop_types17.default.string]).isRequired,
  sectionIndex: import_prop_types17.default.number.isRequired,
  sectionLength: import_prop_types17.default.number.isRequired,
  width: import_prop_types17.default.number.isRequired
} : void 0;
var MemoizedGridCell = fastMemo(GridCell);

// node_modules/@mui/x-data-grid/components/cell/GridActionsCellItem.js
init_extends();
init_objectWithoutPropertiesLoose();
var React49 = __toESM(require_react());
var import_prop_types18 = __toESM(require_prop_types());
var import_jsx_runtime31 = __toESM(require_jsx_runtime());
var _excluded18 = ["label", "icon", "showInMenu", "onClick"];
var _excluded25 = ["label", "icon", "showInMenu", "onClick", "closeMenuOnClick", "closeMenu"];
var GridActionsCellItem = React49.forwardRef((props, ref) => {
  var _a;
  const rootProps = useGridRootProps();
  if (!props.showInMenu) {
    const {
      label: label2,
      icon: icon2,
      onClick: onClick2
    } = props, other2 = _objectWithoutPropertiesLoose(props, _excluded18);
    const handleClick2 = (event) => {
      onClick2 == null ? void 0 : onClick2(event);
    };
    return (0, import_jsx_runtime31.jsx)(rootProps.slots.baseIconButton, _extends({
      ref,
      size: "small",
      role: "menuitem",
      "aria-label": label2
    }, other2, {
      onClick: handleClick2
    }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseIconButton, {
      children: React49.cloneElement(icon2, {
        fontSize: "small"
      })
    }));
  }
  const {
    label,
    icon,
    onClick,
    closeMenuOnClick = true,
    closeMenu
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded25);
  const handleClick = (event) => {
    onClick == null ? void 0 : onClick(event);
    if (closeMenuOnClick) {
      closeMenu == null ? void 0 : closeMenu();
    }
  };
  return (0, import_jsx_runtime31.jsxs)(MenuItem_default, _extends({
    ref
  }, other, {
    onClick: handleClick,
    children: [icon && (0, import_jsx_runtime31.jsx)(ListItemIcon_default, {
      children: icon
    }), label]
  }));
});
true ? GridActionsCellItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * from https://mui.com/material-ui/api/button-base/#ButtonBase-prop-component
   */
  component: import_prop_types18.default.elementType,
  icon: import_prop_types18.default.element,
  label: import_prop_types18.default.string.isRequired,
  showInMenu: import_prop_types18.default.bool
} : void 0;

// node_modules/@mui/x-data-grid/components/cell/GridSkeletonCell.js
init_extends();
init_objectWithoutPropertiesLoose();
var React50 = __toESM(require_react());
var import_prop_types19 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime32 = __toESM(require_jsx_runtime());
var _excluded19 = ["field", "align", "width", "height"];
var randomWidth = randomNumberBetween(1e4, 20, 80);
var useUtilityClasses17 = (ownerState) => {
  const {
    align,
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["cell", "cellSkeleton", `cell--text${capitalize(align)}`, "withBorderColor"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridSkeletonCell(props) {
  const {
    align,
    width,
    height
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded19);
  const rootProps = useGridRootProps();
  const ownerState = {
    classes: rootProps.classes,
    align
  };
  const classes2 = useUtilityClasses17(ownerState);
  const contentWidth = Math.round(randomWidth());
  return (0, import_jsx_runtime32.jsx)("div", _extends({
    className: classes2.root,
    style: {
      height,
      maxWidth: width,
      minWidth: width
    }
  }, other, {
    children: (0, import_jsx_runtime32.jsx)(Skeleton_default, {
      width: `${contentWidth}%`,
      height: 25
    })
  }));
}
true ? GridSkeletonCell.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  align: import_prop_types19.default.string.isRequired,
  field: import_prop_types19.default.string.isRequired,
  height: import_prop_types19.default.oneOfType([import_prop_types19.default.oneOf(["auto"]), import_prop_types19.default.number]).isRequired,
  width: import_prop_types19.default.number.isRequired
} : void 0;
var Memoized2 = fastMemo(GridSkeletonCell);

// node_modules/@mui/x-data-grid/components/containers/GridRoot.js
init_extends();
init_objectWithoutPropertiesLoose();
var React51 = __toESM(require_react());
var import_prop_types20 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-data-grid/components/containers/GridRootStyles.js
init_extends();
function getBorderColor(theme) {
  if (theme.vars) {
    return theme.vars.palette.TableCell.border;
  }
  if (theme.palette.mode === "light") {
    return lighten(alpha(theme.palette.divider, 1), 0.88);
  }
  return darken(alpha(theme.palette.divider, 1), 0.68);
}
var columnHeadersStyles = {
  [`.${gridClasses.columnSeparator}, .${gridClasses["columnSeparator--resizing"]}`]: {
    visibility: "visible",
    width: "auto"
  }
};
var columnHeaderStyles = {
  [`& .${gridClasses.iconButtonContainer}`]: {
    visibility: "visible",
    width: "auto"
  },
  [`& .${gridClasses.menuIcon}`]: {
    width: "auto",
    visibility: "visible"
  }
};
var GridRootStyles = styled_default("div", {
  name: "MuiDataGrid",
  slot: "Root",
  overridesResolver: (props, styles) => [{
    [`&.${gridClasses.autoHeight}`]: styles.autoHeight
  }, {
    [`&.${gridClasses.aggregationColumnHeader}`]: styles.aggregationColumnHeader
  }, {
    [`&.${gridClasses["aggregationColumnHeader--alignLeft"]}`]: styles["aggregationColumnHeader--alignLeft"]
  }, {
    [`&.${gridClasses["aggregationColumnHeader--alignCenter"]}`]: styles["aggregationColumnHeader--alignCenter"]
  }, {
    [`&.${gridClasses["aggregationColumnHeader--alignRight"]}`]: styles["aggregationColumnHeader--alignRight"]
  }, {
    [`&.${gridClasses.aggregationColumnHeaderLabel}`]: styles.aggregationColumnHeaderLabel
  }, {
    [`&.${gridClasses["root--disableUserSelection"]} .${gridClasses.cell}`]: styles["root--disableUserSelection"]
  }, {
    [`&.${gridClasses.autosizing}`]: styles.autosizing
  }, {
    [`& .${gridClasses.editBooleanCell}`]: styles.editBooleanCell
  }, {
    [`& .${gridClasses.cell}`]: styles.cell
  }, {
    [`& .${gridClasses["cell--editing"]}`]: styles["cell--editing"]
  }, {
    [`& .${gridClasses["cell--textCenter"]}`]: styles["cell--textCenter"]
  }, {
    [`& .${gridClasses["cell--textLeft"]}`]: styles["cell--textLeft"]
  }, {
    [`& .${gridClasses["cell--textRight"]}`]: styles["cell--textRight"]
  }, {
    [`& .${gridClasses["cell--rangeTop"]}`]: styles["cell--rangeTop"]
  }, {
    [`& .${gridClasses["cell--rangeBottom"]}`]: styles["cell--rangeBottom"]
  }, {
    [`& .${gridClasses["cell--rangeLeft"]}`]: styles["cell--rangeLeft"]
  }, {
    [`& .${gridClasses["cell--rangeRight"]}`]: styles["cell--rangeRight"]
  }, {
    [`& .${gridClasses["cell--withRightBorder"]}`]: styles["cell--withRightBorder"]
  }, {
    [`& .${gridClasses.cellCheckbox}`]: styles.cellCheckbox
  }, {
    [`& .${gridClasses.cellSkeleton}`]: styles.cellSkeleton
  }, {
    [`& .${gridClasses.checkboxInput}`]: styles.checkboxInput
  }, {
    [`& .${gridClasses["columnHeader--alignCenter"]}`]: styles["columnHeader--alignCenter"]
  }, {
    [`& .${gridClasses["columnHeader--alignLeft"]}`]: styles["columnHeader--alignLeft"]
  }, {
    [`& .${gridClasses["columnHeader--alignRight"]}`]: styles["columnHeader--alignRight"]
  }, {
    [`& .${gridClasses["columnHeader--dragging"]}`]: styles["columnHeader--dragging"]
  }, {
    [`& .${gridClasses["columnHeader--moving"]}`]: styles["columnHeader--moving"]
  }, {
    [`& .${gridClasses["columnHeader--numeric"]}`]: styles["columnHeader--numeric"]
  }, {
    [`& .${gridClasses["columnHeader--sortable"]}`]: styles["columnHeader--sortable"]
  }, {
    [`& .${gridClasses["columnHeader--sorted"]}`]: styles["columnHeader--sorted"]
  }, {
    [`& .${gridClasses["columnHeader--withRightBorder"]}`]: styles["columnHeader--withRightBorder"]
  }, {
    [`& .${gridClasses.columnHeader}`]: styles.columnHeader
  }, {
    [`& .${gridClasses.headerFilterRow}`]: styles.headerFilterRow
  }, {
    [`& .${gridClasses.columnHeaderCheckbox}`]: styles.columnHeaderCheckbox
  }, {
    [`& .${gridClasses.columnHeaderDraggableContainer}`]: styles.columnHeaderDraggableContainer
  }, {
    [`& .${gridClasses.columnHeaderTitleContainer}`]: styles.columnHeaderTitleContainer
  }, {
    [`& .${gridClasses["columnSeparator--resizable"]}`]: styles["columnSeparator--resizable"]
  }, {
    [`& .${gridClasses["columnSeparator--resizing"]}`]: styles["columnSeparator--resizing"]
  }, {
    [`& .${gridClasses.columnSeparator}`]: styles.columnSeparator
  }, {
    [`& .${gridClasses.filterIcon}`]: styles.filterIcon
  }, {
    [`& .${gridClasses.iconSeparator}`]: styles.iconSeparator
  }, {
    [`& .${gridClasses.menuIcon}`]: styles.menuIcon
  }, {
    [`& .${gridClasses.menuIconButton}`]: styles.menuIconButton
  }, {
    [`& .${gridClasses.menuOpen}`]: styles.menuOpen
  }, {
    [`& .${gridClasses.menuList}`]: styles.menuList
  }, {
    [`& .${gridClasses["row--editable"]}`]: styles["row--editable"]
  }, {
    [`& .${gridClasses["row--editing"]}`]: styles["row--editing"]
  }, {
    [`& .${gridClasses["row--dragging"]}`]: styles["row--dragging"]
  }, {
    [`& .${gridClasses.row}`]: styles.row
  }, {
    [`& .${gridClasses.rowReorderCellPlaceholder}`]: styles.rowReorderCellPlaceholder
  }, {
    [`& .${gridClasses.rowReorderCell}`]: styles.rowReorderCell
  }, {
    [`& .${gridClasses["rowReorderCell--draggable"]}`]: styles["rowReorderCell--draggable"]
  }, {
    [`& .${gridClasses.sortIcon}`]: styles.sortIcon
  }, {
    [`& .${gridClasses.withBorderColor}`]: styles.withBorderColor
  }, {
    [`& .${gridClasses.treeDataGroupingCell}`]: styles.treeDataGroupingCell
  }, {
    [`& .${gridClasses.treeDataGroupingCellToggle}`]: styles.treeDataGroupingCellToggle
  }, {
    [`& .${gridClasses.detailPanelToggleCell}`]: styles.detailPanelToggleCell
  }, {
    [`& .${gridClasses["detailPanelToggleCell--expanded"]}`]: styles["detailPanelToggleCell--expanded"]
  }, styles.root]
})(({
  theme: t
}) => {
  var _a, _b;
  const borderColor = getBorderColor(t);
  const radius = t.shape.borderRadius;
  const containerBackground = t.vars ? t.vars.palette.background.default : ((_a = t.mixins.MuiDataGrid) == null ? void 0 : _a.containerBackground) ?? t.palette.background.default;
  const pinnedBackground = ((_b = t.mixins.MuiDataGrid) == null ? void 0 : _b.pinnedBackground) ?? containerBackground;
  const overlayBackground = t.vars ? `rgba(${t.vars.palette.background.defaultChannel} / ${t.vars.palette.action.disabledOpacity})` : alpha(t.palette.background.default, t.palette.action.disabledOpacity);
  const hoverOpacity = (t.vars || t).palette.action.hoverOpacity;
  const hoverColor = (t.vars || t).palette.action.hover;
  const selectedOpacity = (t.vars || t).palette.action.selectedOpacity;
  const selectedBackground = t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${selectedOpacity})` : alpha(t.palette.primary.main, selectedOpacity);
  const selectedHoverBackground = t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / calc(
                ${t.vars.palette.action.selectedOpacity} + 
                ${t.vars.palette.action.hoverOpacity}
              ))` : alpha(t.palette.primary.main, t.palette.action.selectedOpacity + t.palette.action.hoverOpacity);
  const pinnedHoverBackground = t.vars ? hoverColor : blend(pinnedBackground, hoverColor, hoverOpacity);
  const pinnedSelectedBackground = t.vars ? selectedBackground : blend(pinnedBackground, selectedBackground, selectedOpacity);
  const pinnedSelectedHoverBackground = t.vars ? hoverColor : blend(pinnedSelectedBackground, hoverColor, hoverOpacity);
  const selectedStyles = {
    backgroundColor: selectedBackground,
    "&:hover": {
      backgroundColor: selectedHoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: selectedBackground
      }
    }
  };
  const gridStyle = _extends({
    "--unstable_DataGrid-radius": typeof radius === "number" ? `${radius}px` : radius,
    "--unstable_DataGrid-headWeight": t.typography.fontWeightMedium,
    "--unstable_DataGrid-overlayBackground": overlayBackground,
    "--DataGrid-containerBackground": containerBackground,
    "--DataGrid-pinnedBackground": pinnedBackground,
    "--DataGrid-rowBorderColor": borderColor,
    "--DataGrid-cellOffsetMultiplier": 2,
    "--DataGrid-width": "0px",
    "--DataGrid-hasScrollX": "0",
    "--DataGrid-hasScrollY": "0",
    "--DataGrid-scrollbarSize": "10px",
    "--DataGrid-rowWidth": "0px",
    "--DataGrid-columnsTotalWidth": "0px",
    "--DataGrid-leftPinnedWidth": "0px",
    "--DataGrid-rightPinnedWidth": "0px",
    "--DataGrid-headerHeight": "0px",
    "--DataGrid-headersTotalHeight": "0px",
    "--DataGrid-topContainerHeight": "0px",
    "--DataGrid-bottomContainerHeight": "0px",
    flex: 1,
    boxSizing: "border-box",
    position: "relative",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor,
    borderRadius: "var(--unstable_DataGrid-radius)",
    color: (t.vars || t).palette.text.primary
  }, t.typography.body2, {
    outline: "none",
    height: "100%",
    display: "flex",
    minWidth: 0,
    // See https://github.com/mui/mui-x/issues/8547
    minHeight: 0,
    flexDirection: "column",
    overflowAnchor: "none",
    // Keep the same scrolling position
    // The selector we really want here is `:first-child`, but emotion thinks it knows better than use what we
    // want and prints a warning to the console if we use it, about :first-child being "unsafe" in an SSR context.
    // https://github.com/emotion-js/emotion/issues/1105
    // Using `:first-of-type instead` is ironically less "safe" because if all our elements aren't `div`, this style
    // will fail to apply.
    [`.${gridClasses.main} > *:first-of-type`]: {
      borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
      borderTopRightRadius: "var(--unstable_DataGrid-radius)"
    },
    [`&.${gridClasses.autoHeight}`]: {
      height: "auto"
    },
    [`&.${gridClasses.autosizing}`]: {
      [`& .${gridClasses.columnHeaderTitleContainerContent} > *`]: {
        overflow: "visible !important"
      },
      "@media (hover: hover)": {
        [`& .${gridClasses.iconButtonContainer}`]: {
          width: "0 !important",
          visibility: "hidden !important"
        },
        [`& .${gridClasses.menuIcon}`]: {
          width: "0 !important",
          visibility: "hidden !important"
        }
      },
      [`& .${gridClasses.cell}`]: {
        overflow: "visible !important",
        whiteSpace: "nowrap",
        minWidth: "max-content !important",
        maxWidth: "max-content !important"
      },
      [`& .${gridClasses.groupingCriteriaCell}`]: {
        width: "unset"
      },
      [`& .${gridClasses.treeDataGroupingCell}`]: {
        width: "unset"
      }
    },
    [`& .${gridClasses.columnHeader}, & .${gridClasses.cell}`]: {
      WebkitTapHighlightColor: "transparent",
      lineHeight: null,
      padding: "0 10px",
      boxSizing: "border-box"
    },
    [`& .${gridClasses.columnHeader}:focus-within, & .${gridClasses.cell}:focus-within`]: {
      outline: `solid ${t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / 0.5)` : alpha(t.palette.primary.main, 0.5)} 1px`,
      outlineWidth: 1,
      outlineOffset: -1
    },
    [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.cell}:focus`]: {
      outline: `solid ${t.palette.primary.main} 1px`
    },
    [`& .${gridClasses.columnHeaderCheckbox}, & .${gridClasses.cellCheckbox}`]: {
      padding: 0,
      justifyContent: "center",
      alignItems: "center"
    },
    [`& .${gridClasses.columnHeader}`]: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    },
    [`& .${gridClasses["columnHeader--last"]}`]: {
      overflow: "hidden"
    },
    [`& .${gridClasses["columnHeader--sorted"]} .${gridClasses.iconButtonContainer}, & .${gridClasses["columnHeader--filtered"]} .${gridClasses.iconButtonContainer}`]: {
      visibility: "visible",
      width: "auto"
    },
    [`& .${gridClasses.columnHeader}:not(.${gridClasses["columnHeader--sorted"]}) .${gridClasses.sortIcon}`]: {
      opacity: 0,
      transition: t.transitions.create(["opacity"], {
        duration: t.transitions.duration.shorter
      })
    },
    [`& .${gridClasses.columnHeaderTitleContainer}`]: {
      display: "flex",
      alignItems: "center",
      minWidth: 0,
      flex: 1,
      whiteSpace: "nowrap",
      overflow: "hidden",
      // to anchor the aggregation label
      position: "relative"
    },
    [`& .${gridClasses.columnHeaderTitleContainerContent}`]: {
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    },
    [`& .${gridClasses["columnHeader--filledGroup"]} .${gridClasses.columnHeaderTitleContainer}`]: {
      borderBottomWidth: "1px",
      borderBottomStyle: "solid",
      boxSizing: "border-box"
    },
    [`& .${gridClasses.sortIcon}, & .${gridClasses.filterIcon}`]: {
      fontSize: "inherit"
    },
    [`& .${gridClasses["columnHeader--sortable"]}`]: {
      cursor: "pointer"
    },
    [`& .${gridClasses["columnHeader--alignCenter"]} .${gridClasses.columnHeaderTitleContainer}`]: {
      justifyContent: "center"
    },
    [`& .${gridClasses["columnHeader--alignRight"]} .${gridClasses.columnHeaderDraggableContainer}, & .${gridClasses["columnHeader--alignRight"]} .${gridClasses.columnHeaderTitleContainer}`]: {
      flexDirection: "row-reverse"
    },
    [`& .${gridClasses["columnHeader--alignCenter"]} .${gridClasses.menuIcon}, & .${gridClasses["columnHeader--alignRight"]} .${gridClasses.menuIcon}`]: {
      marginRight: "auto",
      marginLeft: -6
    },
    [`& .${gridClasses["columnHeader--alignRight"]} .${gridClasses.menuIcon}, & .${gridClasses["columnHeader--alignRight"]} .${gridClasses.menuIcon}`]: {
      marginRight: "auto",
      marginLeft: -10
    },
    [`& .${gridClasses["columnHeader--moving"]}`]: {
      backgroundColor: (t.vars || t).palette.action.hover
    },
    [`& .${gridClasses["columnHeader--pinnedLeft"]}, & .${gridClasses["columnHeader--pinnedRight"]}`]: {
      position: "sticky",
      zIndex: 4,
      // Should be above the column separator
      background: "var(--DataGrid-pinnedBackground)"
    },
    [`& .${gridClasses.columnSeparator}`]: {
      visibility: "hidden",
      position: "absolute",
      zIndex: 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      color: borderColor
    },
    [`& .${gridClasses.columnHeaders}`]: {
      width: "var(--DataGrid-rowWidth)"
    },
    "@media (hover: hover)": {
      [`& .${gridClasses.columnHeaders}:hover`]: columnHeadersStyles,
      [`& .${gridClasses.columnHeader}:hover`]: columnHeaderStyles,
      [`& .${gridClasses.columnHeader}:not(.${gridClasses["columnHeader--sorted"]}):hover .${gridClasses.sortIcon}`]: {
        opacity: 0.5
      }
    },
    "@media (hover: none)": {
      [`& .${gridClasses.columnHeaders}`]: columnHeadersStyles,
      [`& .${gridClasses.columnHeader}`]: columnHeaderStyles
    },
    [`& .${gridClasses["columnSeparator--sideLeft"]}`]: {
      left: -12
    },
    [`& .${gridClasses["columnSeparator--sideRight"]}`]: {
      right: -12
    },
    [`& .${gridClasses["columnSeparator--resizable"]}`]: {
      cursor: "col-resize",
      touchAction: "none",
      "&:hover": {
        color: (t.vars || t).palette.text.primary,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          color: borderColor
        }
      },
      [`&.${gridClasses["columnSeparator--resizing"]}`]: {
        color: (t.vars || t).palette.text.primary
      },
      "& svg": {
        pointerEvents: "none"
      }
    },
    [`& .${gridClasses.iconSeparator}`]: {
      color: "inherit"
    },
    [`& .${gridClasses.menuIcon}`]: {
      width: 0,
      visibility: "hidden",
      fontSize: 20,
      marginRight: -10,
      display: "flex",
      alignItems: "center"
    },
    [`.${gridClasses.menuOpen}`]: {
      visibility: "visible",
      width: "auto"
    },
    [`& .${gridClasses.headerFilterRow}`]: {
      [`& .${gridClasses.columnHeader}`]: {
        boxSizing: "border-box",
        borderTop: "1px solid var(--DataGrid-rowBorderColor)"
      }
    },
    /* Row styles */
    [`.${gridClasses.row}`]: {
      display: "flex",
      width: "var(--DataGrid-rowWidth)",
      breakInside: "avoid",
      // Avoid the row to be broken in two different print pages.
      "--rowBorderColor": "var(--DataGrid-rowBorderColor)",
      [`&.${gridClasses["row--firstVisible"]}`]: {
        "--rowBorderColor": "transparent"
      },
      "&:hover": {
        backgroundColor: (t.vars || t).palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      },
      "&.Mui-selected": selectedStyles
    },
    [`& .${gridClasses["container--top"]}, & .${gridClasses["container--bottom"]}`]: {
      "[role=row]": {
        background: "var(--DataGrid-containerBackground)"
      }
    },
    /* Cell styles */
    [`& .${gridClasses.cell}`]: {
      height: "var(--height)",
      minWidth: "var(--width)",
      maxWidth: "var(--width)",
      lineHeight: "calc(var(--height) - 1px)",
      // -1px for the border
      boxSizing: "border-box",
      borderTop: `1px solid var(--rowBorderColor)`,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      "&.Mui-selected": selectedStyles
    },
    [`& .${gridClasses["virtualScrollerContent--overflowed"]} .${gridClasses["row--lastVisible"]} .${gridClasses.cell}`]: {
      borderTopColor: "transparent"
    },
    [`&.${gridClasses["root--disableUserSelection"]} .${gridClasses.cell}`]: {
      userSelect: "none"
    },
    [`& .${gridClasses["row--dynamicHeight"]} > .${gridClasses.cell}`]: {
      whiteSpace: "initial",
      lineHeight: "inherit"
    },
    [`& .${gridClasses.cellEmpty}`]: {
      padding: 0,
      height: "unset"
    },
    [`& .${gridClasses.cell}.${gridClasses["cell--selectionMode"]}`]: {
      cursor: "default"
    },
    [`& .${gridClasses.cell}.${gridClasses["cell--editing"]}`]: {
      padding: 1,
      display: "flex",
      boxShadow: t.shadows[2],
      backgroundColor: (t.vars || t).palette.background.paper,
      "&:focus-within": {
        outline: `solid ${(t.vars || t).palette.primary.main} 1px`,
        outlineOffset: "-1px"
      }
    },
    [`& .${gridClasses["row--editing"]}`]: {
      boxShadow: t.shadows[2]
    },
    [`& .${gridClasses["row--editing"]} .${gridClasses.cell}`]: {
      boxShadow: t.shadows[0],
      backgroundColor: (t.vars || t).palette.background.paper
    },
    [`& .${gridClasses.editBooleanCell}`]: {
      display: "flex",
      height: "100%",
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    },
    [`& .${gridClasses.booleanCell}[data-value="true"]`]: {
      color: (t.vars || t).palette.text.secondary
    },
    [`& .${gridClasses.booleanCell}[data-value="false"]`]: {
      color: (t.vars || t).palette.text.disabled
    },
    [`& .${gridClasses.actionsCell}`]: {
      display: "inline-flex",
      alignItems: "center",
      gridGap: t.spacing(1)
    },
    [`& .${gridClasses.rowReorderCell}`]: {
      display: "inline-flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      opacity: (t.vars || t).palette.action.disabledOpacity
    },
    [`& .${gridClasses["rowReorderCell--draggable"]}`]: {
      cursor: "move",
      opacity: 1
    },
    [`& .${gridClasses.rowReorderCellContainer}`]: {
      padding: 0,
      display: "flex",
      alignItems: "stretch"
    },
    [`.${gridClasses.withBorderColor}`]: {
      borderColor
    },
    [`& .${gridClasses["cell--withLeftBorder"]}, & .${gridClasses["columnHeader--withLeftBorder"]}`]: {
      borderLeftColor: "var(--DataGrid-rowBorderColor)",
      borderLeftWidth: "1px",
      borderLeftStyle: "solid"
    },
    [`& .${gridClasses["cell--withRightBorder"]}, & .${gridClasses["columnHeader--withRightBorder"]}`]: {
      borderRightColor: "var(--DataGrid-rowBorderColor)",
      borderRightWidth: "1px",
      borderRightStyle: "solid"
    },
    [`& .${gridClasses["cell--flex"]}`]: {
      display: "flex",
      alignItems: "center",
      lineHeight: "inherit"
    },
    [`& .${gridClasses["cell--textLeft"]}`]: {
      textAlign: "left",
      justifyContent: "flex-start"
    },
    [`& .${gridClasses["cell--textRight"]}`]: {
      textAlign: "right",
      justifyContent: "flex-end"
    },
    [`& .${gridClasses["cell--textCenter"]}`]: {
      textAlign: "center",
      justifyContent: "center"
    },
    [`& .${gridClasses["cell--pinnedLeft"]}, & .${gridClasses["cell--pinnedRight"]}`]: {
      position: "sticky",
      zIndex: 3,
      background: "var(--DataGrid-pinnedBackground)"
    },
    [`& .${gridClasses.virtualScrollerContent} .${gridClasses.row}`]: {
      "&:hover": {
        [`& .${gridClasses["cell--pinnedLeft"]}, & .${gridClasses["cell--pinnedRight"]}`]: {
          backgroundColor: pinnedHoverBackground
        }
      },
      [`&.Mui-selected`]: {
        [`& .${gridClasses["cell--pinnedLeft"]}, & .${gridClasses["cell--pinnedRight"]}`]: {
          backgroundColor: pinnedSelectedBackground
        },
        "&:hover": {
          [`& .${gridClasses["cell--pinnedLeft"]}, & .${gridClasses["cell--pinnedRight"]}`]: {
            backgroundColor: pinnedSelectedHoverBackground
          }
        }
      }
    },
    [`& .${gridClasses.cellOffsetLeft}`]: {
      flex: "0 0 auto",
      display: "inline-block"
    },
    [`& .${gridClasses.cellSkeleton}`]: {
      flex: "0 0 auto",
      height: "100%",
      display: "inline-flex",
      alignItems: "center"
    },
    [`& .${gridClasses.columnHeaderDraggableContainer}`]: {
      display: "flex",
      width: "100%",
      height: "100%"
    },
    [`& .${gridClasses.rowReorderCellPlaceholder}`]: {
      display: "none"
    },
    [`& .${gridClasses["columnHeader--dragging"]}, & .${gridClasses["row--dragging"]}`]: {
      background: (t.vars || t).palette.background.paper,
      padding: "0 12px",
      borderRadius: "var(--unstable_DataGrid-radius)",
      opacity: (t.vars || t).palette.action.disabledOpacity
    },
    [`& .${gridClasses["row--dragging"]}`]: {
      background: (t.vars || t).palette.background.paper,
      padding: "0 12px",
      borderRadius: "var(--unstable_DataGrid-radius)",
      opacity: (t.vars || t).palette.action.disabledOpacity,
      [`& .${gridClasses.rowReorderCellPlaceholder}`]: {
        display: "flex"
      }
    },
    [`& .${gridClasses.treeDataGroupingCell}`]: {
      display: "flex",
      alignItems: "center",
      width: "100%"
    },
    [`& .${gridClasses.treeDataGroupingCellToggle}`]: {
      flex: "0 0 28px",
      alignSelf: "stretch",
      marginRight: t.spacing(2)
    },
    [`& .${gridClasses.groupingCriteriaCell}`]: {
      display: "flex",
      alignItems: "center",
      width: "100%"
    },
    [`& .${gridClasses.groupingCriteriaCellToggle}`]: {
      flex: "0 0 28px",
      alignSelf: "stretch",
      marginRight: t.spacing(2)
    },
    /* ScrollbarFiller styles */
    [`.${gridClasses.scrollbarFiller}`]: {
      minWidth: "calc(var(--DataGrid-hasScrollY) * var(--DataGrid-scrollbarSize))",
      alignSelf: "stretch",
      [`&.${gridClasses["scrollbarFiller--borderTop"]}`]: {
        borderTop: "1px solid var(--DataGrid-rowBorderColor)"
      },
      [`&.${gridClasses["scrollbarFiller--pinnedRight"]}`]: {
        backgroundColor: "var(--DataGrid-pinnedBackground)",
        position: "sticky",
        right: 0
      }
    },
    [`& .${gridClasses.filler}`]: {
      flex: 1
    },
    [`& .${gridClasses["filler--borderTop"]}`]: {
      borderTop: "1px solid var(--DataGrid-rowBorderColor)"
    }
  });
  return gridStyle;
});
function blend(background, overlay, opacity, gamma = 1) {
  const f = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
  const backgroundColor = decomposeColor(background);
  const overlayColor = decomposeColor(overlay);
  const rgb = [f(backgroundColor.values[0], overlayColor.values[0]), f(backgroundColor.values[1], overlayColor.values[1]), f(backgroundColor.values[2], overlayColor.values[2])];
  return recomposeColor({
    type: "rgb",
    values: rgb
  });
}

// node_modules/@mui/x-data-grid/components/containers/GridRoot.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime());
var _excluded20 = ["children", "className"];
var useUtilityClasses18 = (ownerState) => {
  const {
    autoHeight,
    density,
    classes: classes2,
    showCellVerticalBorder
  } = ownerState;
  const slots = {
    root: ["root", autoHeight && "autoHeight", `root--density${capitalize(density)}`, "withBorderColor", showCellVerticalBorder && "withVerticalBorder"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridPanelAnchor = styled_default2("div")({
  position: "absolute",
  top: `var(--DataGrid-headersTotalHeight)`,
  left: 0
});
var GridRoot = React51.forwardRef(function GridRoot2(props, ref) {
  const rootProps = useGridRootProps();
  const {
    children,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded20);
  const apiRef = useGridPrivateApiContext();
  const density = useGridSelector(apiRef, gridDensitySelector);
  const rootElementRef = apiRef.current.rootElementRef;
  const handleRef = useForkRef(rootElementRef, ref);
  const ownerState = _extends({}, rootProps, {
    density
  });
  const classes2 = useUtilityClasses18(ownerState);
  const [mountedState, setMountedState] = React51.useState(false);
  useEnhancedEffect_default(() => {
    setMountedState(true);
  }, []);
  if (!mountedState) {
    return null;
  }
  return (0, import_jsx_runtime33.jsxs)(GridRootStyles, _extends({
    ref: handleRef,
    className: clsx_default(className, classes2.root),
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime33.jsx)(GridPanelAnchor, {
      role: "presentation",
      "data-id": "gridPanelAnchor"
    }), children]
  }));
});
true ? GridRoot.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types20.default.oneOfType([import_prop_types20.default.arrayOf(import_prop_types20.default.oneOfType([import_prop_types20.default.func, import_prop_types20.default.object, import_prop_types20.default.bool])), import_prop_types20.default.func, import_prop_types20.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/containers/GridFooterContainer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React52 = __toESM(require_react());
var import_prop_types21 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime34 = __toESM(require_jsx_runtime());
var _excluded21 = ["className"];
var useUtilityClasses19 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["footerContainer", "withBorderColor"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridFooterContainerRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "FooterContainer",
  overridesResolver: (props, styles) => styles.footerContainer
})({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: 52,
  borderTop: "1px solid"
});
var GridFooterContainer = React52.forwardRef(function GridFooterContainer2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded21);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses19(rootProps);
  return (0, import_jsx_runtime34.jsx)(GridFooterContainerRoot, _extends({
    ref,
    className: clsx_default(classes2.root, className),
    ownerState: rootProps
  }, other));
});
true ? GridFooterContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types21.default.oneOfType([import_prop_types21.default.arrayOf(import_prop_types21.default.oneOfType([import_prop_types21.default.func, import_prop_types21.default.object, import_prop_types21.default.bool])), import_prop_types21.default.func, import_prop_types21.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/containers/GridOverlay.js
init_extends();
init_objectWithoutPropertiesLoose();
var React53 = __toESM(require_react());
var import_prop_types22 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime35 = __toESM(require_jsx_runtime());
var _excluded26 = ["className"];
var useUtilityClasses20 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["overlay"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridOverlayRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "Overlay",
  overridesResolver: (_, styles) => styles.overlay
})({
  width: "100%",
  height: "100%",
  display: "flex",
  alignSelf: "center",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "var(--unstable_DataGrid-overlayBackground)"
});
var GridOverlay = React53.forwardRef(function GridOverlay2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded26);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses20(rootProps);
  return (0, import_jsx_runtime35.jsx)(GridOverlayRoot, _extends({
    ref,
    className: clsx_default(classes2.root, className),
    ownerState: rootProps
  }, other));
});
true ? GridOverlay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types22.default.oneOfType([import_prop_types22.default.arrayOf(import_prop_types22.default.oneOfType([import_prop_types22.default.func, import_prop_types22.default.object, import_prop_types22.default.bool])), import_prop_types22.default.func, import_prop_types22.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/containers/GridToolbarContainer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React54 = __toESM(require_react());
var import_prop_types23 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime36 = __toESM(require_jsx_runtime());
var _excluded27 = ["className", "children"];
var useUtilityClasses21 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["toolbarContainer"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridToolbarContainerRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "ToolbarContainer",
  overridesResolver: (_, styles) => styles.toolbarContainer
})(({
  theme
}) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(1),
  padding: theme.spacing(0.5, 0.5, 0)
}));
var GridToolbarContainer = React54.forwardRef(function GridToolbarContainer2(props, ref) {
  const {
    className,
    children
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded27);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses21(rootProps);
  if (!children) {
    return null;
  }
  return (0, import_jsx_runtime36.jsx)(GridToolbarContainerRoot, _extends({
    ref,
    className: clsx_default(className, classes2.root),
    ownerState: rootProps
  }, other, {
    children
  }));
});
true ? GridToolbarContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types23.default.oneOfType([import_prop_types23.default.arrayOf(import_prop_types23.default.oneOfType([import_prop_types23.default.func, import_prop_types23.default.object, import_prop_types23.default.bool])), import_prop_types23.default.func, import_prop_types23.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderItem.js
init_extends();
var React62 = __toESM(require_react());
var import_prop_types28 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderSortIcon.js
init_extends();
var React56 = __toESM(require_react());
var import_prop_types24 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-data-grid/components/columnHeaders/GridIconButtonContainer.js
init_extends();
init_objectWithoutPropertiesLoose();
var React55 = __toESM(require_react());
init_clsx();
init_esm();
var import_jsx_runtime37 = __toESM(require_jsx_runtime());
var _excluded28 = ["className"];
var useUtilityClasses22 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["iconButtonContainer"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridIconButtonContainerRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "IconButtonContainer",
  overridesResolver: (props, styles) => styles.iconButtonContainer
})(() => ({
  display: "flex",
  visibility: "hidden",
  width: 0
}));
var GridIconButtonContainer = React55.forwardRef(function GridIconButtonContainer2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded28);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses22(rootProps);
  return (0, import_jsx_runtime37.jsx)(GridIconButtonContainerRoot, _extends({
    ref,
    className: clsx_default(classes2.root, className),
    ownerState: rootProps
  }, other));
});

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderSortIcon.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime());
var useUtilityClasses23 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    icon: ["sortIcon"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function getIcon(icons, direction, className, sortingOrder) {
  let Icon;
  const iconProps = {};
  if (direction === "asc") {
    Icon = icons.columnSortedAscendingIcon;
  } else if (direction === "desc") {
    Icon = icons.columnSortedDescendingIcon;
  } else {
    Icon = icons.columnUnsortedIcon;
    iconProps.sortingOrder = sortingOrder;
  }
  return Icon ? (0, import_jsx_runtime38.jsx)(Icon, _extends({
    fontSize: "small",
    className
  }, iconProps)) : null;
}
function GridColumnHeaderSortIconRaw(props) {
  var _a;
  const {
    direction,
    index,
    sortingOrder,
    disabled
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    classes: rootProps.classes
  });
  const classes2 = useUtilityClasses23(ownerState);
  const iconElement = getIcon(rootProps.slots, direction, classes2.icon, sortingOrder);
  if (!iconElement) {
    return null;
  }
  const iconButton = (0, import_jsx_runtime38.jsx)(rootProps.slots.baseIconButton, _extends({
    tabIndex: -1,
    "aria-label": apiRef.current.getLocaleText("columnHeaderSortIconLabel"),
    title: apiRef.current.getLocaleText("columnHeaderSortIconLabel"),
    size: "small",
    disabled
  }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseIconButton, {
    children: iconElement
  }));
  return (0, import_jsx_runtime38.jsxs)(GridIconButtonContainer, {
    children: [index != null && (0, import_jsx_runtime38.jsx)(Badge_default, {
      badgeContent: index,
      color: "default",
      children: iconButton
    }), index == null && iconButton]
  });
}
var GridColumnHeaderSortIcon = React56.memo(GridColumnHeaderSortIconRaw);
true ? GridColumnHeaderSortIconRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  direction: import_prop_types24.default.oneOf(["asc", "desc"]),
  disabled: import_prop_types24.default.bool,
  index: import_prop_types24.default.number,
  sortingOrder: import_prop_types24.default.arrayOf(import_prop_types24.default.oneOf(["asc", "desc"])).isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/ColumnHeaderMenuIcon.js
init_extends();
var React57 = __toESM(require_react());
init_esm();
var import_jsx_runtime39 = __toESM(require_jsx_runtime());
var useUtilityClasses24 = (ownerState) => {
  const {
    classes: classes2,
    open
  } = ownerState;
  const slots = {
    root: ["menuIcon", open && "menuOpen"],
    button: ["menuIconButton"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var ColumnHeaderMenuIcon = React57.memo((props) => {
  var _a, _b;
  const {
    colDef,
    open,
    columnMenuId,
    columnMenuButtonId,
    iconButtonRef
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    classes: rootProps.classes
  });
  const classes2 = useUtilityClasses24(ownerState);
  const handleMenuIconClick = React57.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    apiRef.current.toggleColumnMenu(colDef.field);
  }, [apiRef, colDef.field]);
  return (0, import_jsx_runtime39.jsx)("div", {
    className: classes2.root,
    children: (0, import_jsx_runtime39.jsx)(rootProps.slots.baseTooltip, _extends({
      title: apiRef.current.getLocaleText("columnMenuLabel"),
      enterDelay: 1e3
    }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTooltip, {
      children: (0, import_jsx_runtime39.jsx)(rootProps.slots.baseIconButton, _extends({
        ref: iconButtonRef,
        tabIndex: -1,
        className: classes2.button,
        "aria-label": apiRef.current.getLocaleText("columnMenuLabel"),
        size: "small",
        onClick: handleMenuIconClick,
        "aria-haspopup": "menu",
        "aria-expanded": open,
        "aria-controls": open ? columnMenuId : void 0,
        id: columnMenuButtonId
      }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseIconButton, {
        children: (0, import_jsx_runtime39.jsx)(rootProps.slots.columnMenuIcon, {
          fontSize: "small"
        })
      }))
    }))
  });
});

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnHeaderMenu.js
init_extends();
var React58 = __toESM(require_react());
var import_prop_types25 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime40 = __toESM(require_jsx_runtime());
function GridColumnHeaderMenu({
  columnMenuId,
  columnMenuButtonId,
  ContentComponent,
  contentComponentProps,
  field,
  open,
  target,
  onExited
}) {
  const apiRef = useGridApiContext();
  const colDef = apiRef.current.getColumn(field);
  const hideMenu = useEventCallback_default((event) => {
    if (event) {
      event.stopPropagation();
      if (target == null ? void 0 : target.contains(event.target)) {
        return;
      }
    }
    apiRef.current.hideColumnMenu();
  });
  if (!target || !colDef) {
    return null;
  }
  return (0, import_jsx_runtime40.jsx)(GridMenu, {
    placement: `bottom-${colDef.align === "right" ? "start" : "end"}`,
    open,
    target,
    onClose: hideMenu,
    onExited,
    children: (0, import_jsx_runtime40.jsx)(ContentComponent, _extends({
      colDef,
      hideMenu,
      open,
      id: columnMenuId,
      labelledby: columnMenuButtonId
    }, contentComponentProps))
  });
}
true ? GridColumnHeaderMenu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  columnMenuButtonId: import_prop_types25.default.string,
  columnMenuId: import_prop_types25.default.string,
  ContentComponent: import_prop_types25.default.elementType.isRequired,
  contentComponentProps: import_prop_types25.default.any,
  field: import_prop_types25.default.string.isRequired,
  onExited: import_prop_types25.default.func,
  open: import_prop_types25.default.bool.isRequired,
  target: HTMLElementType
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridGenericColumnHeaderItem.js
init_extends();
init_objectWithoutPropertiesLoose();
var React61 = __toESM(require_react());
init_clsx();
init_esm();

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderTitle.js
init_extends();
init_objectWithoutPropertiesLoose();
var React59 = __toESM(require_react());
var import_prop_types26 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime41 = __toESM(require_jsx_runtime());
var _excluded29 = ["className"];
var useUtilityClasses25 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["columnHeaderTitle"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridColumnHeaderTitleRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "ColumnHeaderTitle",
  overridesResolver: (props, styles) => styles.columnHeaderTitle
})({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
  fontWeight: "var(--unstable_DataGrid-headWeight)"
});
var ColumnHeaderInnerTitle = React59.forwardRef(function ColumnHeaderInnerTitle2(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded29);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses25(rootProps);
  return (0, import_jsx_runtime41.jsx)(GridColumnHeaderTitleRoot, _extends({
    ref,
    className: clsx_default(classes2.root, className),
    ownerState: rootProps
  }, other));
});
function GridColumnHeaderTitle(props) {
  var _a;
  const {
    label,
    description
  } = props;
  const rootProps = useGridRootProps();
  const titleRef = React59.useRef(null);
  const [tooltip, setTooltip] = React59.useState("");
  const handleMouseOver = React59.useCallback(() => {
    if (!description && (titleRef == null ? void 0 : titleRef.current)) {
      const isOver = isOverflown(titleRef.current);
      if (isOver) {
        setTooltip(label);
      } else {
        setTooltip("");
      }
    }
  }, [description, label]);
  return (0, import_jsx_runtime41.jsx)(rootProps.slots.baseTooltip, _extends({
    title: description || tooltip
  }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTooltip, {
    children: (0, import_jsx_runtime41.jsx)(ColumnHeaderInnerTitle, {
      onMouseOver: handleMouseOver,
      ref: titleRef,
      children: label
    })
  }));
}
true ? GridColumnHeaderTitle.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  columnWidth: import_prop_types26.default.number.isRequired,
  description: import_prop_types26.default.node,
  label: import_prop_types26.default.string.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderSeparator.js
init_extends();
init_objectWithoutPropertiesLoose();
var React60 = __toESM(require_react());
var import_prop_types27 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime42 = __toESM(require_jsx_runtime());
var _excluded30 = ["resizable", "resizing", "height", "side"];
var GridColumnHeaderSeparatorSides = function(GridColumnHeaderSeparatorSides2) {
  GridColumnHeaderSeparatorSides2["Left"] = "left";
  GridColumnHeaderSeparatorSides2["Right"] = "right";
  return GridColumnHeaderSeparatorSides2;
}(GridColumnHeaderSeparatorSides || {});
var useUtilityClasses26 = (ownerState) => {
  const {
    resizable,
    resizing,
    classes: classes2,
    side
  } = ownerState;
  const slots = {
    root: ["columnSeparator", resizable && "columnSeparator--resizable", resizing && "columnSeparator--resizing", side && `columnSeparator--side${capitalize(side)}`],
    icon: ["iconSeparator"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridColumnHeaderSeparatorRaw(props) {
  const {
    height,
    side = GridColumnHeaderSeparatorSides.Right
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded30);
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    side,
    classes: rootProps.classes
  });
  const classes2 = useUtilityClasses26(ownerState);
  const stopClick = React60.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    (0, import_jsx_runtime42.jsx)("div", _extends({
      className: classes2.root,
      style: {
        minHeight: height,
        opacity: rootProps.showColumnVerticalBorder ? 0 : 1
      }
    }, other, {
      onClick: stopClick,
      children: (0, import_jsx_runtime42.jsx)(rootProps.slots.columnResizeIcon, {
        className: classes2.icon
      })
    }))
  );
}
var GridColumnHeaderSeparator = React60.memo(GridColumnHeaderSeparatorRaw);
true ? GridColumnHeaderSeparatorRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  height: import_prop_types27.default.number.isRequired,
  resizable: import_prop_types27.default.bool.isRequired,
  resizing: import_prop_types27.default.bool.isRequired,
  side: import_prop_types27.default.oneOf(["left", "right"])
} : void 0;

// node_modules/@mui/x-data-grid/components/columnHeaders/GridGenericColumnHeaderItem.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime());
var _excluded31 = ["classes", "columnMenuOpen", "colIndex", "height", "isResizing", "sortDirection", "hasFocus", "tabIndex", "separatorSide", "isDraggable", "headerComponent", "description", "elementId", "width", "columnMenuIconButton", "columnMenu", "columnTitleIconButtons", "headerClassName", "label", "resizable", "draggableContainerProps", "columnHeaderSeparatorProps", "style"];
var GridGenericColumnHeaderItem = React61.forwardRef(function GridGenericColumnHeaderItem2(props, ref) {
  const {
    classes: classes2,
    colIndex,
    height,
    isResizing,
    sortDirection,
    hasFocus,
    tabIndex,
    separatorSide,
    isDraggable,
    headerComponent,
    description,
    width,
    columnMenuIconButton = null,
    columnMenu = null,
    columnTitleIconButtons = null,
    headerClassName,
    label,
    resizable,
    draggableContainerProps,
    columnHeaderSeparatorProps,
    style
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded31);
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const headerCellRef = React61.useRef(null);
  const handleRef = useForkRef(headerCellRef, ref);
  let ariaSort = "none";
  if (sortDirection != null) {
    ariaSort = sortDirection === "asc" ? "ascending" : "descending";
  }
  React61.useLayoutEffect(() => {
    var _a;
    const columnMenuState = apiRef.current.state.columnMenu;
    if (hasFocus && !columnMenuState.open) {
      const focusableElement = headerCellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusableElement || headerCellRef.current;
      elementToFocus == null ? void 0 : elementToFocus.focus();
      if ((_a = apiRef.current.columnHeadersContainerRef) == null ? void 0 : _a.current) {
        apiRef.current.columnHeadersContainerRef.current.scrollLeft = 0;
      }
    }
  }, [apiRef, hasFocus]);
  return (0, import_jsx_runtime43.jsxs)("div", _extends({
    ref: handleRef,
    className: clsx_default(classes2.root, headerClassName),
    style: _extends({}, style, {
      height,
      width,
      minWidth: width,
      maxWidth: width
    }),
    role: "columnheader",
    tabIndex,
    "aria-colindex": colIndex + 1,
    "aria-sort": ariaSort,
    "aria-label": headerComponent == null ? label : void 0
  }, other, {
    children: [(0, import_jsx_runtime43.jsxs)("div", _extends({
      className: classes2.draggableContainer,
      draggable: isDraggable,
      role: "presentation"
    }, draggableContainerProps, {
      children: [(0, import_jsx_runtime43.jsxs)("div", {
        className: classes2.titleContainer,
        role: "presentation",
        children: [(0, import_jsx_runtime43.jsx)("div", {
          className: classes2.titleContainerContent,
          children: headerComponent !== void 0 ? headerComponent : (0, import_jsx_runtime43.jsx)(GridColumnHeaderTitle, {
            label,
            description,
            columnWidth: width
          })
        }), columnTitleIconButtons]
      }), columnMenuIconButton]
    })), (0, import_jsx_runtime43.jsx)(GridColumnHeaderSeparator, _extends({
      resizable: !rootProps.disableColumnResize && !!resizable,
      resizing: isResizing,
      height,
      side: separatorSide
    }, columnHeaderSeparatorProps)), columnMenu]
  }));
});

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderItem.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime());
var useUtilityClasses27 = (ownerState) => {
  const {
    colDef,
    classes: classes2,
    isDragging,
    sortDirection,
    showRightBorder,
    showLeftBorder,
    filterItemsCounter,
    pinnedPosition
  } = ownerState;
  const isColumnSorted = sortDirection != null;
  const isColumnFiltered = filterItemsCounter != null && filterItemsCounter > 0;
  const isColumnNumeric = colDef.type === "number";
  const slots = {
    root: ["columnHeader", colDef.headerAlign === "left" && "columnHeader--alignLeft", colDef.headerAlign === "center" && "columnHeader--alignCenter", colDef.headerAlign === "right" && "columnHeader--alignRight", colDef.sortable && "columnHeader--sortable", isDragging && "columnHeader--moving", isColumnSorted && "columnHeader--sorted", isColumnFiltered && "columnHeader--filtered", isColumnNumeric && "columnHeader--numeric", "withBorderColor", showRightBorder && "columnHeader--withRightBorder", showLeftBorder && "columnHeader--withLeftBorder", pinnedPosition === "left" && "columnHeader--pinnedLeft", pinnedPosition === "right" && "columnHeader--pinnedRight"],
    draggableContainer: ["columnHeaderDraggableContainer"],
    titleContainer: ["columnHeaderTitleContainer"],
    titleContainerContent: ["columnHeaderTitleContainerContent"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridColumnHeaderItem(props) {
  var _a, _b;
  const {
    colDef,
    columnMenuOpen,
    colIndex,
    headerHeight,
    isResizing,
    isLast,
    sortDirection,
    sortIndex,
    filterItemsCounter,
    hasFocus,
    tabIndex,
    disableReorder,
    separatorSide,
    style,
    pinnedPosition,
    indexInSection,
    sectionLength,
    gridHasFiller
  } = props;
  const apiRef = useGridPrivateApiContext();
  const rootProps = useGridRootProps();
  const headerCellRef = React62.useRef(null);
  const columnMenuId = useId();
  const columnMenuButtonId = useId();
  const iconButtonRef = React62.useRef(null);
  const [showColumnMenuIcon, setShowColumnMenuIcon] = React62.useState(columnMenuOpen);
  const isDraggable = React62.useMemo(() => !rootProps.disableColumnReorder && !disableReorder && !colDef.disableReorder, [rootProps.disableColumnReorder, disableReorder, colDef.disableReorder]);
  let headerComponent;
  if (colDef.renderHeader) {
    headerComponent = colDef.renderHeader(apiRef.current.getColumnHeaderParams(colDef.field));
  }
  const showLeftBorder = shouldCellShowLeftBorder(pinnedPosition, indexInSection);
  const showRightBorder = shouldCellShowRightBorder(pinnedPosition, indexInSection, sectionLength, rootProps.showCellVerticalBorder, gridHasFiller);
  const ownerState = _extends({}, props, {
    classes: rootProps.classes,
    showRightBorder,
    showLeftBorder
  });
  const classes2 = useUtilityClasses27(ownerState);
  const publish = React62.useCallback((eventName) => (event) => {
    if (isEventTargetInPortal(event)) {
      return;
    }
    apiRef.current.publishEvent(eventName, apiRef.current.getColumnHeaderParams(colDef.field), event);
  }, [apiRef, colDef.field]);
  const mouseEventsHandlers = React62.useMemo(() => ({
    onClick: publish("columnHeaderClick"),
    onDoubleClick: publish("columnHeaderDoubleClick"),
    onMouseOver: publish("columnHeaderOver"),
    // TODO remove as it's not used
    onMouseOut: publish("columnHeaderOut"),
    // TODO remove as it's not used
    onMouseEnter: publish("columnHeaderEnter"),
    // TODO remove as it's not used
    onMouseLeave: publish("columnHeaderLeave"),
    // TODO remove as it's not used
    onKeyDown: publish("columnHeaderKeyDown"),
    onFocus: publish("columnHeaderFocus"),
    onBlur: publish("columnHeaderBlur")
  }), [publish]);
  const draggableEventHandlers = React62.useMemo(() => isDraggable ? {
    onDragStart: publish("columnHeaderDragStart"),
    onDragEnter: publish("columnHeaderDragEnter"),
    onDragOver: publish("columnHeaderDragOver"),
    onDragEnd: publish("columnHeaderDragEnd")
  } : {}, [isDraggable, publish]);
  const columnHeaderSeparatorProps = React62.useMemo(() => ({
    onMouseDown: publish("columnSeparatorMouseDown"),
    onDoubleClick: publish("columnSeparatorDoubleClick")
  }), [publish]);
  React62.useEffect(() => {
    if (!showColumnMenuIcon) {
      setShowColumnMenuIcon(columnMenuOpen);
    }
  }, [showColumnMenuIcon, columnMenuOpen]);
  const handleExited = React62.useCallback(() => {
    setShowColumnMenuIcon(false);
  }, []);
  const columnMenuIconButton = !rootProps.disableColumnMenu && !colDef.disableColumnMenu && (0, import_jsx_runtime44.jsx)(ColumnHeaderMenuIcon, {
    colDef,
    columnMenuId,
    columnMenuButtonId,
    open: showColumnMenuIcon,
    iconButtonRef
  });
  const columnMenu = (0, import_jsx_runtime44.jsx)(GridColumnHeaderMenu, {
    columnMenuId,
    columnMenuButtonId,
    field: colDef.field,
    open: columnMenuOpen,
    target: iconButtonRef.current,
    ContentComponent: rootProps.slots.columnMenu,
    contentComponentProps: (_a = rootProps.slotProps) == null ? void 0 : _a.columnMenu,
    onExited: handleExited
  });
  const sortingOrder = colDef.sortingOrder ?? rootProps.sortingOrder;
  const showSortIcon = (colDef.sortable || sortDirection != null) && !colDef.hideSortIcons && !rootProps.disableColumnSorting;
  const columnTitleIconButtons = (0, import_jsx_runtime44.jsxs)(React62.Fragment, {
    children: [!rootProps.disableColumnFilter && (0, import_jsx_runtime44.jsx)(rootProps.slots.columnHeaderFilterIconButton, _extends({
      field: colDef.field,
      counter: filterItemsCounter
    }, (_b = rootProps.slotProps) == null ? void 0 : _b.columnHeaderFilterIconButton)), showSortIcon && (0, import_jsx_runtime44.jsx)(GridColumnHeaderSortIcon, {
      direction: sortDirection,
      index: sortIndex,
      sortingOrder,
      disabled: !colDef.sortable
    })]
  });
  React62.useLayoutEffect(() => {
    var _a2;
    const columnMenuState = apiRef.current.state.columnMenu;
    if (hasFocus && !columnMenuState.open) {
      const focusableElement = headerCellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusableElement || headerCellRef.current;
      elementToFocus == null ? void 0 : elementToFocus.focus();
      if ((_a2 = apiRef.current.columnHeadersContainerRef) == null ? void 0 : _a2.current) {
        apiRef.current.columnHeadersContainerRef.current.scrollLeft = 0;
      }
    }
  }, [apiRef, hasFocus]);
  const headerClassName = typeof colDef.headerClassName === "function" ? colDef.headerClassName({
    field: colDef.field,
    colDef
  }) : colDef.headerClassName;
  const label = colDef.headerName ?? colDef.field;
  return (0, import_jsx_runtime44.jsx)(GridGenericColumnHeaderItem, _extends({
    ref: headerCellRef,
    classes: classes2,
    columnMenuOpen,
    colIndex,
    height: headerHeight,
    isResizing,
    sortDirection,
    hasFocus,
    tabIndex,
    separatorSide,
    isDraggable,
    headerComponent,
    description: colDef.description,
    elementId: colDef.field,
    width: colDef.computedWidth,
    columnMenuIconButton,
    columnTitleIconButtons,
    headerClassName: clsx_default(headerClassName, isLast && gridClasses["columnHeader--last"]),
    label,
    resizable: !rootProps.disableColumnResize && !!colDef.resizable,
    "data-field": colDef.field,
    columnMenu,
    draggableContainerProps: draggableEventHandlers,
    columnHeaderSeparatorProps,
    style
  }, mouseEventsHandlers));
}
true ? GridColumnHeaderItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: import_prop_types28.default.object.isRequired,
  colIndex: import_prop_types28.default.number.isRequired,
  columnMenuOpen: import_prop_types28.default.bool.isRequired,
  disableReorder: import_prop_types28.default.bool,
  filterItemsCounter: import_prop_types28.default.number,
  gridHasFiller: import_prop_types28.default.bool.isRequired,
  hasFocus: import_prop_types28.default.bool,
  headerHeight: import_prop_types28.default.number.isRequired,
  indexInSection: import_prop_types28.default.number.isRequired,
  isDragging: import_prop_types28.default.bool.isRequired,
  isLast: import_prop_types28.default.bool.isRequired,
  isResizing: import_prop_types28.default.bool.isRequired,
  pinnedPosition: import_prop_types28.default.oneOf(["left", "right"]),
  sectionLength: import_prop_types28.default.number.isRequired,
  separatorSide: import_prop_types28.default.oneOf(["left", "right"]),
  sortDirection: import_prop_types28.default.oneOf(["asc", "desc"]),
  sortIndex: import_prop_types28.default.number,
  style: import_prop_types28.default.object,
  tabIndex: import_prop_types28.default.oneOf([-1, 0]).isRequired
} : void 0;
var Memoized3 = fastMemo(GridColumnHeaderItem);

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnHeaderFilterIconButton.js
init_extends();
var React63 = __toESM(require_react());
var import_prop_types29 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime45 = __toESM(require_jsx_runtime());
var useUtilityClasses28 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    icon: ["filterIcon"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridColumnHeaderFilterIconButton(props) {
  var _a, _b;
  const {
    counter,
    field,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const ownerState = _extends({}, props, {
    classes: rootProps.classes
  });
  const classes2 = useUtilityClasses28(ownerState);
  const preferencePanel = useGridSelector(apiRef, gridPreferencePanelStateSelector);
  const labelId = useId();
  const panelId = useId();
  const toggleFilter = React63.useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    const {
      open: open2,
      openedPanelValue
    } = gridPreferencePanelStateSelector(apiRef.current.state);
    if (open2 && openedPanelValue === GridPreferencePanelsValue.filters) {
      apiRef.current.hideFilterPanel();
    } else {
      apiRef.current.showFilterPanel(void 0, panelId, labelId);
    }
    if (onClick) {
      onClick(apiRef.current.getColumnHeaderParams(field), event);
    }
  }, [apiRef, field, onClick, panelId, labelId]);
  if (!counter) {
    return null;
  }
  const open = preferencePanel.open && preferencePanel.labelId === labelId;
  const iconButton = (0, import_jsx_runtime45.jsx)(rootProps.slots.baseIconButton, _extends({
    id: labelId,
    onClick: toggleFilter,
    color: "default",
    "aria-label": apiRef.current.getLocaleText("columnHeaderFiltersLabel"),
    size: "small",
    tabIndex: -1,
    "aria-haspopup": "menu",
    "aria-expanded": open,
    "aria-controls": open ? panelId : void 0
  }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseIconButton, {
    children: (0, import_jsx_runtime45.jsx)(rootProps.slots.columnFilteredIcon, {
      className: classes2.icon,
      fontSize: "small"
    })
  }));
  return (0, import_jsx_runtime45.jsx)(rootProps.slots.baseTooltip, _extends({
    title: apiRef.current.getLocaleText("columnHeaderFiltersTooltipActive")(counter),
    enterDelay: 1e3
  }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseTooltip, {
    children: (0, import_jsx_runtime45.jsxs)(GridIconButtonContainer, {
      children: [counter > 1 && (0, import_jsx_runtime45.jsx)(Badge_default, {
        badgeContent: counter,
        color: "default",
        children: iconButton
      }), counter === 1 && iconButton]
    })
  }));
}
true ? GridColumnHeaderFilterIconButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  counter: import_prop_types29.default.number,
  field: import_prop_types29.default.string.isRequired,
  onClick: import_prop_types29.default.func
} : void 0;

// node_modules/@mui/x-data-grid/material/icons/index.js
var React64 = __toESM(require_react());
init_utils();
var import_jsx_runtime46 = __toESM(require_jsx_runtime());
var GridArrowUpwardIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"
}), "ArrowUpward");
var GridArrowDownwardIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
}), "ArrowDownward");
var GridKeyboardArrowRight = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "KeyboardArrowRight");
var GridExpandMoreIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
var GridFilterListIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"
}), "FilterList");
var GridFilterAltIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"
}), "FilterAlt");
var GridSearchIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), "Search");
var GridMenuIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), "Menu");
var GridCheckCircleIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckCircle");
var GridColumnIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"
}), "ColumnIcon");
var GridSeparatorIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M11 19V5h2v14z"
}), "Separator");
var GridViewHeadlineIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"
}), "ViewHeadline");
var GridTableRowsIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M21,8H3V4h18V8z M21,10H3v4h18V10z M21,16H3v4h18V16z"
}), "TableRows");
var GridViewStreamIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
}), "ViewStream");
var GridTripleDotsVerticalIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "TripleDotsVertical");
var GridCloseIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
var GridAddIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
}), "Add");
var GridRemoveIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M19 13H5v-2h14v2z"
}), "Remove");
var GridLoadIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
}), "Load");
var GridDragIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "Drag");
var GridSaveAltIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
}), "SaveAlt");
var GridCheckIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
}), "Check");
var GridMoreVertIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
}), "MoreVert");
var GridVisibilityOffIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
}), "VisibilityOff");
var GridViewColumnIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("g", {
  children: (0, import_jsx_runtime46.jsx)("path", {
    d: "M14.67,5v14H9.33V5H14.67z M15.67,19H21V5h-5.33V19z M8.33,19V5H3v14H8.33z"
  })
}), "ViewColumn");
var GridClearIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
var GridDeleteIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), "Delete");
var GridDeleteForeverIcon = createSvgIcon((0, import_jsx_runtime46.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
}), "Delete");

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnMenuContainer.js
init_extends();
init_objectWithoutPropertiesLoose();
init_clsx();
var import_prop_types30 = __toESM(require_prop_types());
var React65 = __toESM(require_react());
var import_jsx_runtime47 = __toESM(require_jsx_runtime());
var _excluded32 = ["hideMenu", "colDef", "id", "labelledby", "className", "children", "open"];
var StyledMenuList = styled_default(MenuList_default)(() => ({
  minWidth: 248
}));
var GridColumnMenuContainer = React65.forwardRef(function GridColumnMenuContainer2(props, ref) {
  const {
    hideMenu,
    id,
    labelledby,
    className,
    children,
    open
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded32);
  const handleListKeyDown = React65.useCallback((event) => {
    if (isTabKey(event.key)) {
      event.preventDefault();
    }
    if (isHideMenuKey(event.key)) {
      hideMenu(event);
    }
  }, [hideMenu]);
  return (0, import_jsx_runtime47.jsx)(StyledMenuList, _extends({
    id,
    ref,
    className: clsx_default(gridClasses.menuList, className),
    "aria-labelledby": labelledby,
    onKeyDown: handleListKeyDown,
    autoFocus: open
  }, other, {
    children
  }));
});
true ? GridColumnMenuContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: import_prop_types30.default.object.isRequired,
  hideMenu: import_prop_types30.default.func.isRequired,
  id: import_prop_types30.default.string,
  labelledby: import_prop_types30.default.string,
  open: import_prop_types30.default.bool.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnMenu.js
init_extends();
init_objectWithoutPropertiesLoose();
var React72 = __toESM(require_react());
var import_prop_types36 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/hooks/features/columnMenu/useGridColumnMenuSlots.js
init_objectWithoutPropertiesLoose();
init_extends();
var React66 = __toESM(require_react());
var _excluded33 = ["displayOrder"];
var useGridColumnMenuSlots = (props) => {
  const apiRef = useGridPrivateApiContext();
  const {
    defaultSlots: defaultSlots2,
    defaultSlotProps,
    slots = {},
    slotProps = {},
    hideMenu,
    colDef,
    addDividers = true
  } = props;
  const processedComponents = React66.useMemo(() => _extends({}, defaultSlots2, slots), [defaultSlots2, slots]);
  const processedSlotProps = React66.useMemo(() => {
    if (!slotProps || Object.keys(slotProps).length === 0) {
      return defaultSlotProps;
    }
    const mergedProps = _extends({}, slotProps);
    Object.entries(defaultSlotProps).forEach(([key, currentSlotProps]) => {
      mergedProps[key] = _extends({}, currentSlotProps, slotProps[key] || {});
    });
    return mergedProps;
  }, [defaultSlotProps, slotProps]);
  const defaultItems = apiRef.current.unstable_applyPipeProcessors("columnMenu", [], props.colDef);
  const userItems = React66.useMemo(() => {
    const defaultComponentKeys = Object.keys(defaultSlots2);
    return Object.keys(slots).filter((key) => !defaultComponentKeys.includes(key));
  }, [slots, defaultSlots2]);
  return React66.useMemo(() => {
    const uniqueItems = Array.from(/* @__PURE__ */ new Set([...defaultItems, ...userItems]));
    const cleansedItems = uniqueItems.filter((key) => processedComponents[key] != null);
    const sorted = cleansedItems.sort((a, b) => {
      const leftItemProps = processedSlotProps[a];
      const rightItemProps = processedSlotProps[b];
      const leftDisplayOrder = Number.isFinite(leftItemProps == null ? void 0 : leftItemProps.displayOrder) ? leftItemProps.displayOrder : 100;
      const rightDisplayOrder = Number.isFinite(rightItemProps == null ? void 0 : rightItemProps.displayOrder) ? rightItemProps.displayOrder : 100;
      return leftDisplayOrder - rightDisplayOrder;
    });
    return sorted.reduce((acc, key, index) => {
      let itemProps = {
        colDef,
        onClick: hideMenu
      };
      const processedComponentProps = processedSlotProps[key];
      if (processedComponentProps) {
        const customProps = _objectWithoutPropertiesLoose(processedComponentProps, _excluded33);
        itemProps = _extends({}, itemProps, customProps);
      }
      return addDividers && index !== sorted.length - 1 ? [...acc, [processedComponents[key], itemProps], [Divider_default, {}]] : [...acc, [processedComponents[key], itemProps]];
    }, []);
  }, [addDividers, colDef, defaultItems, hideMenu, processedComponents, processedSlotProps, userItems]);
};

// node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuColumnsItem.js
init_extends();
var React69 = __toESM(require_react());
var import_prop_types33 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuHideItem.js
var React67 = __toESM(require_react());
var import_prop_types31 = __toESM(require_prop_types());
var import_jsx_runtime48 = __toESM(require_jsx_runtime());
function GridColumnMenuHideItem(props) {
  const {
    colDef,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
  const columnsWithMenu = visibleColumns.filter((col) => col.disableColumnMenu !== true);
  const disabled = columnsWithMenu.length === 1;
  const toggleColumn = React67.useCallback((event) => {
    if (disabled) {
      return;
    }
    apiRef.current.setColumnVisibility(colDef.field, false);
    onClick(event);
  }, [apiRef, colDef.field, onClick, disabled]);
  if (rootProps.disableColumnSelector) {
    return null;
  }
  if (colDef.hideable === false) {
    return null;
  }
  return (0, import_jsx_runtime48.jsxs)(MenuItem_default, {
    onClick: toggleColumn,
    disabled,
    children: [(0, import_jsx_runtime48.jsx)(ListItemIcon_default, {
      children: (0, import_jsx_runtime48.jsx)(rootProps.slots.columnMenuHideIcon, {
        fontSize: "small"
      })
    }), (0, import_jsx_runtime48.jsx)(ListItemText_default, {
      children: apiRef.current.getLocaleText("columnMenuHideColumn")
    })]
  });
}
true ? GridColumnMenuHideItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: import_prop_types31.default.object.isRequired,
  onClick: import_prop_types31.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuManageItem.js
var React68 = __toESM(require_react());
var import_prop_types32 = __toESM(require_prop_types());
var import_jsx_runtime49 = __toESM(require_jsx_runtime());
function GridColumnMenuManageItem(props) {
  const {
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const showColumns = React68.useCallback((event) => {
    onClick(event);
    apiRef.current.showPreferences(GridPreferencePanelsValue.columns);
  }, [apiRef, onClick]);
  if (rootProps.disableColumnSelector) {
    return null;
  }
  return (0, import_jsx_runtime49.jsxs)(MenuItem_default, {
    onClick: showColumns,
    children: [(0, import_jsx_runtime49.jsx)(ListItemIcon_default, {
      children: (0, import_jsx_runtime49.jsx)(rootProps.slots.columnMenuManageColumnsIcon, {
        fontSize: "small"
      })
    }), (0, import_jsx_runtime49.jsx)(ListItemText_default, {
      children: apiRef.current.getLocaleText("columnMenuManageColumns")
    })]
  });
}
true ? GridColumnMenuManageItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: import_prop_types32.default.object.isRequired,
  onClick: import_prop_types32.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuColumnsItem.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime());
function GridColumnMenuColumnsItem(props) {
  return (0, import_jsx_runtime50.jsxs)(React69.Fragment, {
    children: [(0, import_jsx_runtime50.jsx)(GridColumnMenuHideItem, _extends({}, props)), (0, import_jsx_runtime50.jsx)(GridColumnMenuManageItem, _extends({}, props))]
  });
}
true ? GridColumnMenuColumnsItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: import_prop_types33.default.object.isRequired,
  onClick: import_prop_types33.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuFilterItem.js
var React70 = __toESM(require_react());
var import_prop_types34 = __toESM(require_prop_types());
var import_jsx_runtime51 = __toESM(require_jsx_runtime());
function GridColumnMenuFilterItem(props) {
  const {
    colDef,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const showFilter = React70.useCallback((event) => {
    onClick(event);
    apiRef.current.showFilterPanel(colDef.field);
  }, [apiRef, colDef.field, onClick]);
  if (rootProps.disableColumnFilter || !colDef.filterable) {
    return null;
  }
  return (0, import_jsx_runtime51.jsxs)(MenuItem_default, {
    onClick: showFilter,
    children: [(0, import_jsx_runtime51.jsx)(ListItemIcon_default, {
      children: (0, import_jsx_runtime51.jsx)(rootProps.slots.columnMenuFilterIcon, {
        fontSize: "small"
      })
    }), (0, import_jsx_runtime51.jsx)(ListItemText_default, {
      children: apiRef.current.getLocaleText("columnMenuFilter")
    })]
  });
}
true ? GridColumnMenuFilterItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: import_prop_types34.default.object.isRequired,
  onClick: import_prop_types34.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/menuItems/GridColumnMenuSortItem.js
var React71 = __toESM(require_react());
var import_prop_types35 = __toESM(require_prop_types());
var import_jsx_runtime52 = __toESM(require_jsx_runtime());
function GridColumnMenuSortItem(props) {
  const {
    colDef,
    onClick
  } = props;
  const apiRef = useGridApiContext();
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const rootProps = useGridRootProps();
  const sortDirection = React71.useMemo(() => {
    if (!colDef) {
      return null;
    }
    const sortItem = sortModel.find((item) => item.field === colDef.field);
    return sortItem == null ? void 0 : sortItem.sort;
  }, [colDef, sortModel]);
  const sortingOrder = colDef.sortingOrder ?? rootProps.sortingOrder;
  const onSortMenuItemClick = React71.useCallback((event) => {
    onClick(event);
    const direction = event.currentTarget.getAttribute("data-value") || null;
    apiRef.current.sortColumn(colDef.field, direction === sortDirection ? null : direction);
  }, [apiRef, colDef, onClick, sortDirection]);
  if (rootProps.disableColumnSorting || !colDef || !colDef.sortable || !sortingOrder.some((item) => !!item)) {
    return null;
  }
  const getLabel = (key) => {
    const label = apiRef.current.getLocaleText(key);
    return typeof label === "function" ? label(colDef) : label;
  };
  return (0, import_jsx_runtime52.jsxs)(React71.Fragment, {
    children: [sortingOrder.includes("asc") && sortDirection !== "asc" ? (0, import_jsx_runtime52.jsxs)(MenuItem_default, {
      onClick: onSortMenuItemClick,
      "data-value": "asc",
      children: [(0, import_jsx_runtime52.jsx)(ListItemIcon_default, {
        children: (0, import_jsx_runtime52.jsx)(rootProps.slots.columnMenuSortAscendingIcon, {
          fontSize: "small"
        })
      }), (0, import_jsx_runtime52.jsx)(ListItemText_default, {
        children: getLabel("columnMenuSortAsc")
      })]
    }) : null, sortingOrder.includes("desc") && sortDirection !== "desc" ? (0, import_jsx_runtime52.jsxs)(MenuItem_default, {
      onClick: onSortMenuItemClick,
      "data-value": "desc",
      children: [(0, import_jsx_runtime52.jsx)(ListItemIcon_default, {
        children: (0, import_jsx_runtime52.jsx)(rootProps.slots.columnMenuSortDescendingIcon, {
          fontSize: "small"
        })
      }), (0, import_jsx_runtime52.jsx)(ListItemText_default, {
        children: getLabel("columnMenuSortDesc")
      })]
    }) : null, sortingOrder.includes(null) && sortDirection != null ? (0, import_jsx_runtime52.jsxs)(MenuItem_default, {
      onClick: onSortMenuItemClick,
      children: [(0, import_jsx_runtime52.jsx)(ListItemIcon_default, {}), (0, import_jsx_runtime52.jsx)(ListItemText_default, {
        children: apiRef.current.getLocaleText("columnMenuUnsort")
      })]
    }) : null]
  });
}
true ? GridColumnMenuSortItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: import_prop_types35.default.object.isRequired,
  onClick: import_prop_types35.default.func.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/menu/columnMenu/GridColumnMenu.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime());
var _excluded34 = ["defaultSlots", "defaultSlotProps", "slots", "slotProps"];
var GRID_COLUMN_MENU_SLOTS = {
  columnMenuSortItem: GridColumnMenuSortItem,
  columnMenuFilterItem: GridColumnMenuFilterItem,
  columnMenuColumnsItem: GridColumnMenuColumnsItem
};
var GRID_COLUMN_MENU_SLOT_PROPS = {
  columnMenuSortItem: {
    displayOrder: 10
  },
  columnMenuFilterItem: {
    displayOrder: 20
  },
  columnMenuColumnsItem: {
    displayOrder: 30
  }
};
var GridGenericColumnMenu = React72.forwardRef(function GridGenericColumnMenu2(props, ref) {
  const {
    defaultSlots: defaultSlots2,
    defaultSlotProps,
    slots,
    slotProps
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded34);
  const orderedSlots = useGridColumnMenuSlots(_extends({}, other, {
    defaultSlots: defaultSlots2,
    defaultSlotProps,
    slots,
    slotProps
  }));
  return (0, import_jsx_runtime53.jsx)(GridColumnMenuContainer, _extends({
    ref
  }, other, {
    children: orderedSlots.map(([Component, otherProps], index) => (0, import_jsx_runtime53.jsx)(Component, _extends({}, otherProps), index))
  }));
});
var GridColumnMenu = React72.forwardRef(function GridColumnMenu2(props, ref) {
  return (0, import_jsx_runtime53.jsx)(GridGenericColumnMenu, _extends({}, props, {
    ref,
    defaultSlots: GRID_COLUMN_MENU_SLOTS,
    defaultSlotProps: GRID_COLUMN_MENU_SLOT_PROPS
  }));
});
true ? GridColumnMenu.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  colDef: import_prop_types36.default.object.isRequired,
  hideMenu: import_prop_types36.default.func.isRequired,
  id: import_prop_types36.default.string,
  labelledby: import_prop_types36.default.string,
  open: import_prop_types36.default.bool.isRequired,
  /**
   * Could be used to pass new props or override props specific to a column menu component
   * e.g. `displayOrder`
   */
  slotProps: import_prop_types36.default.object,
  /**
   * `slots` could be used to add new and (or) override default column menu items
   * If you register a nee component you must pass it's `displayOrder` in `slotProps`
   * or it will be placed in the end of the list
   */
  slots: import_prop_types36.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridColumnsPanel.js
init_extends();
var React75 = __toESM(require_react());
var import_prop_types39 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/panel/GridPanelWrapper.js
init_extends();
init_objectWithoutPropertiesLoose();
var React73 = __toESM(require_react());
var import_prop_types37 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime54 = __toESM(require_jsx_runtime());
var _excluded35 = ["className", "slotProps"];
var useUtilityClasses29 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["panelWrapper"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridPanelWrapperRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "PanelWrapper",
  overridesResolver: (props, styles) => styles.panelWrapper
})({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  "&:focus": {
    outline: 0
  }
});
var isEnabled = () => true;
var GridPanelWrapper = React73.forwardRef(function GridPanelWrapper2(props, ref) {
  const {
    className,
    slotProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded35);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses29(rootProps);
  return (0, import_jsx_runtime54.jsx)(FocusTrap, _extends({
    open: true,
    disableEnforceFocus: true,
    isEnabled
  }, slotProps.TrapFocus, {
    children: (0, import_jsx_runtime54.jsx)(GridPanelWrapperRoot, _extends({
      ref,
      tabIndex: -1,
      className: clsx_default(className, classes2.root),
      ownerState: rootProps
    }, other))
  }));
});
true ? GridPanelWrapper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  slotProps: import_prop_types37.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/columnsManagement/GridColumnsManagement.js
init_extends();
var React74 = __toESM(require_react());
var import_prop_types38 = __toESM(require_prop_types());
init_esm();

// node_modules/@mui/x-data-grid/components/columnsManagement/utils.js
var checkColumnVisibilityModelsSame = (a, b) => {
  const aFalseValues = new Set(Object.keys(a).filter((key) => a[key] === false));
  const bFalseValues = new Set(Object.keys(b).filter((key) => b[key] === false));
  if (aFalseValues.size !== bFalseValues.size) {
    return false;
  }
  let result = true;
  aFalseValues.forEach((key) => {
    if (!bFalseValues.has(key)) {
      result = false;
    }
  });
  return result;
};
var defaultSearchPredicate = (column, searchValue) => (column.headerName || column.field).toLowerCase().indexOf(searchValue) > -1;

// node_modules/@mui/x-data-grid/components/columnsManagement/GridColumnsManagement.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime());
var useUtilityClasses30 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["columnsManagement"],
    header: ["columnsManagementHeader"],
    footer: ["columnsManagementFooter"],
    row: ["columnsManagementRow"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var collator2 = new Intl.Collator();
function GridColumnsManagement(props) {
  var _a, _b, _c;
  const apiRef = useGridApiContext();
  const searchInputRef = React74.useRef(null);
  const columns = useGridSelector(apiRef, gridColumnDefinitionsSelector);
  const initialColumnVisibilityModel = useLazyRef(() => gridColumnVisibilityModelSelector(apiRef)).current;
  const columnVisibilityModel = useGridSelector(apiRef, gridColumnVisibilityModelSelector);
  const rootProps = useGridRootProps();
  const [searchValue, setSearchValue] = React74.useState("");
  const classes2 = useUtilityClasses30(rootProps);
  const {
    sort,
    searchPredicate = defaultSearchPredicate,
    autoFocusSearchField = true,
    disableShowHideToggle = false,
    disableResetButton = false,
    toggleAllMode = "all",
    getTogglableColumns
  } = props;
  const isResetDisabled = React74.useMemo(() => checkColumnVisibilityModelsSame(columnVisibilityModel, initialColumnVisibilityModel), [columnVisibilityModel, initialColumnVisibilityModel]);
  const sortedColumns = React74.useMemo(() => {
    switch (sort) {
      case "asc":
        return [...columns].sort((a, b) => collator2.compare(a.headerName || a.field, b.headerName || b.field));
      case "desc":
        return [...columns].sort((a, b) => -collator2.compare(a.headerName || a.field, b.headerName || b.field));
      default:
        return columns;
    }
  }, [columns, sort]);
  const toggleColumn = (event) => {
    const {
      name: field
    } = event.target;
    apiRef.current.setColumnVisibility(field, columnVisibilityModel[field] === false);
  };
  const currentColumns = React74.useMemo(() => {
    const togglableColumns = getTogglableColumns ? getTogglableColumns(sortedColumns) : null;
    const togglableSortedColumns = togglableColumns ? sortedColumns.filter(({
      field
    }) => togglableColumns.includes(field)) : sortedColumns;
    if (!searchValue) {
      return togglableSortedColumns;
    }
    return togglableSortedColumns.filter((column) => searchPredicate(column, searchValue.toLowerCase()));
  }, [sortedColumns, searchValue, searchPredicate, getTogglableColumns]);
  const toggleAllColumns = React74.useCallback((isVisible) => {
    const currentModel = gridColumnVisibilityModelSelector(apiRef);
    const newModel = _extends({}, currentModel);
    const togglableColumns = getTogglableColumns ? getTogglableColumns(columns) : null;
    (toggleAllMode === "filteredOnly" ? currentColumns : columns).forEach((col) => {
      if (col.hideable && (togglableColumns == null || togglableColumns.includes(col.field))) {
        if (isVisible) {
          delete newModel[col.field];
        } else {
          newModel[col.field] = false;
        }
      }
    });
    return apiRef.current.setColumnVisibilityModel(newModel);
  }, [apiRef, columns, getTogglableColumns, toggleAllMode, currentColumns]);
  const handleSearchValueChange = React74.useCallback((event) => {
    setSearchValue(event.target.value);
  }, []);
  const hideableColumns = React74.useMemo(() => currentColumns.filter((col) => col.hideable), [currentColumns]);
  const allHideableColumnsVisible = React74.useMemo(() => hideableColumns.every((column) => columnVisibilityModel[column.field] == null || columnVisibilityModel[column.field] !== false), [columnVisibilityModel, hideableColumns]);
  const allHideableColumnsHidden = React74.useMemo(() => hideableColumns.every((column) => columnVisibilityModel[column.field] === false), [columnVisibilityModel, hideableColumns]);
  const firstSwitchRef = React74.useRef(null);
  React74.useEffect(() => {
    if (autoFocusSearchField) {
      searchInputRef.current.focus();
    } else if (firstSwitchRef.current && typeof firstSwitchRef.current.focus === "function") {
      firstSwitchRef.current.focus();
    }
  }, [autoFocusSearchField]);
  let firstHideableColumnFound = false;
  const isFirstHideableColumn = (column) => {
    if (firstHideableColumnFound === false && column.hideable !== false) {
      firstHideableColumnFound = true;
      return true;
    }
    return false;
  };
  return (0, import_jsx_runtime55.jsxs)(React74.Fragment, {
    children: [(0, import_jsx_runtime55.jsx)(GridColumnsManagementHeader, {
      className: classes2.header,
      ownerState: rootProps,
      children: (0, import_jsx_runtime55.jsx)(rootProps.slots.baseTextField, _extends({
        placeholder: apiRef.current.getLocaleText("columnsManagementSearchTitle"),
        inputRef: searchInputRef,
        value: searchValue,
        onChange: handleSearchValueChange,
        variant: "outlined",
        size: "small",
        InputProps: {
          startAdornment: (0, import_jsx_runtime55.jsx)(rootProps.slots.baseInputAdornment, {
            position: "start",
            children: (0, import_jsx_runtime55.jsx)(rootProps.slots.quickFilterIcon, {})
          }),
          sx: {
            pl: 1.5
          }
        },
        fullWidth: true
      }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTextField))
    }), (0, import_jsx_runtime55.jsxs)(GridColumnsManagementBody, {
      className: classes2.root,
      ownerState: rootProps,
      children: [currentColumns.map((column) => {
        var _a2;
        return (0, import_jsx_runtime55.jsx)(FormControlLabel_default, {
          className: classes2.row,
          control: (0, import_jsx_runtime55.jsx)(rootProps.slots.baseCheckbox, _extends({
            disabled: column.hideable === false,
            checked: columnVisibilityModel[column.field] !== false,
            onClick: toggleColumn,
            name: column.field,
            sx: {
              p: 0.5
            },
            inputRef: isFirstHideableColumn(column) ? firstSwitchRef : void 0
          }, (_a2 = rootProps.slotProps) == null ? void 0 : _a2.baseCheckbox)),
          label: column.headerName || column.field
        }, column.field);
      }), currentColumns.length === 0 && (0, import_jsx_runtime55.jsx)(GridColumnsManagementEmptyText, {
        ownerState: rootProps,
        children: apiRef.current.getLocaleText("columnsManagementNoColumns")
      })]
    }), (!disableShowHideToggle || !disableResetButton) && currentColumns.length > 0 ? (0, import_jsx_runtime55.jsxs)(GridColumnsManagementFooter, {
      ownerState: rootProps,
      className: classes2.footer,
      children: [!disableShowHideToggle ? (0, import_jsx_runtime55.jsx)(FormControlLabel_default, {
        control: (0, import_jsx_runtime55.jsx)(rootProps.slots.baseCheckbox, _extends({
          disabled: hideableColumns.length === 0,
          checked: allHideableColumnsVisible,
          indeterminate: !allHideableColumnsVisible && !allHideableColumnsHidden,
          onClick: () => toggleAllColumns(!allHideableColumnsVisible),
          name: apiRef.current.getLocaleText("columnsManagementShowHideAllText"),
          sx: {
            p: 0.5
          }
        }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseCheckbox)),
        label: apiRef.current.getLocaleText("columnsManagementShowHideAllText")
      }) : (0, import_jsx_runtime55.jsx)("span", {}), !disableResetButton ? (0, import_jsx_runtime55.jsx)(rootProps.slots.baseButton, _extends({
        onClick: () => apiRef.current.setColumnVisibilityModel(initialColumnVisibilityModel),
        disabled: isResetDisabled
      }, (_c = rootProps.slotProps) == null ? void 0 : _c.baseButton, {
        children: apiRef.current.getLocaleText("columnsManagementReset")
      })) : null]
    }) : null]
  });
}
true ? GridColumnsManagement.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the column search field will be focused automatically.
   * If `false`, the first column switch input will be focused automatically.
   * This helps to avoid input keyboard panel to popup automatically on touch devices.
   * @default true
   */
  autoFocusSearchField: import_prop_types38.default.bool,
  /**
   * If `true`, the `Reset` button will not be disabled
   * @default false
   */
  disableResetButton: import_prop_types38.default.bool,
  /**
   * If `true`, the `Show/Hide all` toggle checkbox will not be displayed.
   * @default false
   */
  disableShowHideToggle: import_prop_types38.default.bool,
  /**
   * Returns the list of togglable columns.
   * If used, only those columns will be displayed in the panel
   * which are passed as the return value of the function.
   * @param {GridColDef[]} columns The `ColDef` list of all columns.
   * @returns {GridColDef['field'][]} The list of togglable columns' field names.
   */
  getTogglableColumns: import_prop_types38.default.func,
  searchPredicate: import_prop_types38.default.func,
  sort: import_prop_types38.default.oneOf(["asc", "desc"]),
  /**
   * Changes the behavior of the `Show/Hide All` toggle when the search field is used:
   * - `all`: Will toggle all columns.
   * - `filteredOnly`: Will only toggle columns that match the search criteria.
   * @default 'all'
   */
  toggleAllMode: import_prop_types38.default.oneOf(["all", "filteredOnly"])
} : void 0;
var GridColumnsManagementBody = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnsManagement",
  overridesResolver: (props, styles) => styles.columnsManagement
})(({
  theme
}) => ({
  padding: theme.spacing(0, 3, 1.5),
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  flex: "1 1",
  maxHeight: 400,
  alignItems: "flex-start"
}));
var GridColumnsManagementHeader = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnsManagementHeader",
  overridesResolver: (props, styles) => styles.columnsManagementHeader
})(({
  theme
}) => ({
  padding: theme.spacing(1.5, 3)
}));
var GridColumnsManagementFooter = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnsManagementFooter",
  overridesResolver: (props, styles) => styles.columnsManagementFooter
})(({
  theme
}) => ({
  padding: theme.spacing(0.5, 1, 0.5, 3),
  display: "flex",
  justifyContent: "space-between",
  borderTop: `1px solid ${theme.palette.divider}`
}));
var GridColumnsManagementEmptyText = styled_default("div")(({
  theme
}) => ({
  padding: theme.spacing(0.5, 0),
  color: theme.palette.grey[500]
}));

// node_modules/@mui/x-data-grid/components/panel/GridColumnsPanel.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime());
function GridColumnsPanel(props) {
  var _a;
  const rootProps = useGridRootProps();
  return (0, import_jsx_runtime56.jsx)(GridPanelWrapper, _extends({}, props, {
    children: (0, import_jsx_runtime56.jsx)(GridColumnsManagement, _extends({}, (_a = rootProps.slotProps) == null ? void 0 : _a.columnsManagement))
  }));
}
true ? GridColumnsPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  slotProps: import_prop_types39.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPanel.js
init_extends();
init_objectWithoutPropertiesLoose();
var React76 = __toESM(require_react());
var import_prop_types40 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime57 = __toESM(require_jsx_runtime());
var _excluded36 = ["children", "className", "classes"];
var gridPanelClasses = generateUtilityClasses("MuiDataGrid", ["panel", "paper"]);
var GridPanelRoot = styled_default(Popper_default, {
  name: "MuiDataGrid",
  slot: "Panel",
  overridesResolver: (props, styles) => styles.panel
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
var GridPaperRoot = styled_default(Paper_default, {
  name: "MuiDataGrid",
  slot: "Paper",
  overridesResolver: (props, styles) => styles.paper
})(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  minWidth: 300,
  maxHeight: 450,
  display: "flex",
  maxWidth: `calc(100vw - ${theme.spacing(0.5)})`,
  overflow: "auto"
}));
var GridPanel = React76.forwardRef((props, ref) => {
  const {
    children,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded36);
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const classes2 = gridPanelClasses;
  const [isPlaced, setIsPlaced] = React76.useState(false);
  const handleClickAway = React76.useCallback(() => {
    apiRef.current.hidePreferences();
  }, [apiRef]);
  const handleKeyDown = React76.useCallback((event) => {
    if (isEscapeKey(event.key)) {
      apiRef.current.hidePreferences();
    }
  }, [apiRef]);
  const modifiers = React76.useMemo(() => [{
    name: "flip",
    enabled: false
  }, {
    name: "isPlaced",
    enabled: true,
    phase: "main",
    fn: () => {
      setIsPlaced(true);
    },
    effect: () => () => {
      setIsPlaced(false);
    }
  }], []);
  const [anchorEl, setAnchorEl] = React76.useState(null);
  React76.useEffect(() => {
    var _a, _b;
    const panelAnchor = (_b = (_a = apiRef.current.rootElementRef) == null ? void 0 : _a.current) == null ? void 0 : _b.querySelector('[data-id="gridPanelAnchor"]');
    if (panelAnchor) {
      setAnchorEl(panelAnchor);
    }
  }, [apiRef]);
  if (!anchorEl) {
    return null;
  }
  return (0, import_jsx_runtime57.jsx)(GridPanelRoot, _extends({
    ref,
    placement: "bottom-start",
    className: clsx_default(className, classes2.panel),
    ownerState: rootProps,
    anchorEl,
    modifiers
  }, other, {
    children: (0, import_jsx_runtime57.jsx)(ClickAwayListener, {
      mouseEvent: "onMouseUp",
      onClickAway: handleClickAway,
      children: (0, import_jsx_runtime57.jsx)(GridPaperRoot, {
        className: classes2.paper,
        ownerState: rootProps,
        elevation: 8,
        onKeyDown: handleKeyDown,
        children: isPlaced && children
      })
    })
  }));
});
true ? GridPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Popper render function or node.
   */
  children: import_prop_types40.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types40.default.object,
  /**
   * If `true`, the component is shown.
   */
  open: import_prop_types40.default.bool.isRequired,
  ownerState: import_prop_types40.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPanelContent.js
init_extends();
init_objectWithoutPropertiesLoose();
var React77 = __toESM(require_react());
var import_prop_types41 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime58 = __toESM(require_jsx_runtime());
var _excluded37 = ["className"];
var useUtilityClasses31 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["panelContent"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridPanelContentRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "PanelContent",
  overridesResolver: (props, styles) => styles.panelContent
})({
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  flex: "1 1",
  maxHeight: 400
});
function GridPanelContent(props) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded37);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses31(rootProps);
  return (0, import_jsx_runtime58.jsx)(GridPanelContentRoot, _extends({
    className: clsx_default(className, classes2.root),
    ownerState: rootProps
  }, other));
}
true ? GridPanelContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types41.default.oneOfType([import_prop_types41.default.arrayOf(import_prop_types41.default.oneOfType([import_prop_types41.default.func, import_prop_types41.default.object, import_prop_types41.default.bool])), import_prop_types41.default.func, import_prop_types41.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPanelFooter.js
init_extends();
init_objectWithoutPropertiesLoose();
var React78 = __toESM(require_react());
var import_prop_types42 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime59 = __toESM(require_jsx_runtime());
var _excluded38 = ["className"];
var useUtilityClasses32 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["panelFooter"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridPanelFooterRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "PanelFooter",
  overridesResolver: (props, styles) => styles.panelFooter
})(({
  theme
}) => ({
  padding: theme.spacing(0.5),
  display: "flex",
  justifyContent: "space-between"
}));
function GridPanelFooter(props) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded38);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses32(rootProps);
  return (0, import_jsx_runtime59.jsx)(GridPanelFooterRoot, _extends({
    className: clsx_default(className, classes2.root),
    ownerState: rootProps
  }, other));
}
true ? GridPanelFooter.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types42.default.oneOfType([import_prop_types42.default.arrayOf(import_prop_types42.default.oneOfType([import_prop_types42.default.func, import_prop_types42.default.object, import_prop_types42.default.bool])), import_prop_types42.default.func, import_prop_types42.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/GridPanelHeader.js
init_extends();
init_objectWithoutPropertiesLoose();
var React79 = __toESM(require_react());
var import_prop_types43 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime60 = __toESM(require_jsx_runtime());
var _excluded39 = ["className"];
var useUtilityClasses33 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["panelHeader"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridPanelHeaderRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "PanelHeader",
  overridesResolver: (props, styles) => styles.panelHeader
})(({
  theme
}) => ({
  padding: theme.spacing(1)
}));
function GridPanelHeader(props) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded39);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses33(rootProps);
  return (0, import_jsx_runtime60.jsx)(GridPanelHeaderRoot, _extends({
    className: clsx_default(className, classes2.root),
    ownerState: rootProps
  }, other));
}
true ? GridPanelHeader.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types43.default.oneOfType([import_prop_types43.default.arrayOf(import_prop_types43.default.oneOfType([import_prop_types43.default.func, import_prop_types43.default.object, import_prop_types43.default.bool])), import_prop_types43.default.func, import_prop_types43.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterForm.js
init_extends();
init_objectWithoutPropertiesLoose();
var React80 = __toESM(require_react());
var import_prop_types44 = __toESM(require_prop_types());
init_esm();
init_clsx();
var import_jsx_runtime61 = __toESM(require_jsx_runtime());
var import_react3 = __toESM(require_react());
var _excluded40 = ["item", "hasMultipleFilters", "deleteFilter", "applyFilterChanges", "showMultiFilterOperators", "disableMultiFilterOperator", "applyMultiFilterOperatorChanges", "focusElementRef", "logicOperators", "columnsSort", "filterColumns", "deleteIconProps", "logicOperatorInputProps", "operatorInputProps", "columnInputProps", "valueInputProps", "readOnly", "children"];
var _excluded210 = ["InputComponentProps"];
var useUtilityClasses34 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["filterForm"],
    deleteIcon: ["filterFormDeleteIcon"],
    logicOperatorInput: ["filterFormLogicOperatorInput"],
    columnInput: ["filterFormColumnInput"],
    operatorInput: ["filterFormOperatorInput"],
    valueInput: ["filterFormValueInput"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridFilterFormRoot = styled_default("div", {
  name: "MuiDataGrid",
  slot: "FilterForm",
  overridesResolver: (props, styles) => styles.filterForm
})(({
  theme
}) => ({
  display: "flex",
  padding: theme.spacing(1)
}));
var FilterFormDeleteIcon = styled_default("div", {
  name: "MuiDataGrid",
  slot: "FilterFormDeleteIcon",
  overridesResolver: (_, styles) => styles.filterFormDeleteIcon
})(({
  theme
}) => ({
  flexShrink: 0,
  justifyContent: "flex-end",
  marginRight: theme.spacing(0.5),
  marginBottom: theme.spacing(0.2)
}));
var FilterFormLogicOperatorInput = styled_default("div", {
  name: "MuiDataGrid",
  slot: "FilterFormLogicOperatorInput",
  overridesResolver: (_, styles) => styles.filterFormLogicOperatorInput
})({
  minWidth: 55,
  marginRight: 5,
  justifyContent: "end"
});
var FilterFormColumnInput = styled_default("div", {
  name: "MuiDataGrid",
  slot: "FilterFormColumnInput",
  overridesResolver: (_, styles) => styles.filterFormColumnInput
})({
  width: 150
});
var FilterFormOperatorInput = styled_default("div", {
  name: "MuiDataGrid",
  slot: "FilterFormOperatorInput",
  overridesResolver: (_, styles) => styles.filterFormOperatorInput
})({
  width: 120
});
var FilterFormValueInput = styled_default("div", {
  name: "MuiDataGrid",
  slot: "FilterFormValueInput",
  overridesResolver: (_, styles) => styles.filterFormValueInput
})({
  width: 190
});
var getLogicOperatorLocaleKey = (logicOperator) => {
  switch (logicOperator) {
    case GridLogicOperator.And:
      return "filterPanelOperatorAnd";
    case GridLogicOperator.Or:
      return "filterPanelOperatorOr";
    default:
      throw new Error("MUI X: Invalid `logicOperator` property in the `GridFilterPanel`.");
  }
};
var getColumnLabel = (col) => col.headerName || col.field;
var collator3 = new Intl.Collator();
var GridFilterForm = React80.forwardRef(function GridFilterForm2(props, ref) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const {
    item,
    hasMultipleFilters,
    deleteFilter,
    applyFilterChanges,
    showMultiFilterOperators,
    disableMultiFilterOperator,
    applyMultiFilterOperatorChanges,
    focusElementRef,
    logicOperators = [GridLogicOperator.And, GridLogicOperator.Or],
    columnsSort,
    filterColumns,
    deleteIconProps = {},
    logicOperatorInputProps = {},
    operatorInputProps = {},
    columnInputProps = {},
    valueInputProps = {},
    readOnly
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded40);
  const apiRef = useGridApiContext();
  const columnLookup = useGridSelector(apiRef, gridColumnLookupSelector);
  const filterableColumns = useGridSelector(apiRef, gridFilterableColumnDefinitionsSelector);
  const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
  const columnSelectId = useId();
  const columnSelectLabelId = useId();
  const operatorSelectId = useId();
  const operatorSelectLabelId = useId();
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses34(rootProps);
  const valueRef = React80.useRef(null);
  const filterSelectorRef = React80.useRef(null);
  const multiFilterOperator = filterModel.logicOperator ?? GridLogicOperator.And;
  const hasLogicOperatorColumn = hasMultipleFilters && logicOperators.length > 0;
  const baseFormControlProps = ((_a = rootProps.slotProps) == null ? void 0 : _a.baseFormControl) || {};
  const baseSelectProps = ((_b = rootProps.slotProps) == null ? void 0 : _b.baseSelect) || {};
  const isBaseSelectNative = baseSelectProps.native ?? false;
  const baseInputLabelProps = ((_c = rootProps.slotProps) == null ? void 0 : _c.baseInputLabel) || {};
  const baseSelectOptionProps = ((_d = rootProps.slotProps) == null ? void 0 : _d.baseSelectOption) || {};
  const {
    InputComponentProps
  } = valueInputProps, valueInputPropsOther = _objectWithoutPropertiesLoose(valueInputProps, _excluded210);
  const {
    filteredColumns,
    selectedField
  } = React80.useMemo(() => {
    let itemField = item.field;
    const selectedNonFilterableColumn = columnLookup[item.field].filterable === false ? columnLookup[item.field] : null;
    if (selectedNonFilterableColumn) {
      return {
        filteredColumns: [selectedNonFilterableColumn],
        selectedField: itemField
      };
    }
    if (filterColumns === void 0 || typeof filterColumns !== "function") {
      return {
        filteredColumns: filterableColumns,
        selectedField: itemField
      };
    }
    const filteredFields = filterColumns({
      field: item.field,
      columns: filterableColumns,
      currentFilters: (filterModel == null ? void 0 : filterModel.items) || []
    });
    return {
      filteredColumns: filterableColumns.filter((column) => {
        const isFieldIncluded = filteredFields.includes(column.field);
        if (column.field === item.field && !isFieldIncluded) {
          itemField = void 0;
        }
        return isFieldIncluded;
      }),
      selectedField: itemField
    };
  }, [filterColumns, filterModel == null ? void 0 : filterModel.items, filterableColumns, item.field, columnLookup]);
  const sortedFilteredColumns = React80.useMemo(() => {
    switch (columnsSort) {
      case "asc":
        return filteredColumns.sort((a, b) => collator3.compare(getColumnLabel(a), getColumnLabel(b)));
      case "desc":
        return filteredColumns.sort((a, b) => -collator3.compare(getColumnLabel(a), getColumnLabel(b)));
      default:
        return filteredColumns;
    }
  }, [filteredColumns, columnsSort]);
  const currentColumn = item.field ? apiRef.current.getColumn(item.field) : null;
  const currentOperator = React80.useMemo(() => {
    var _a2;
    if (!item.operator || !currentColumn) {
      return null;
    }
    return (_a2 = currentColumn.filterOperators) == null ? void 0 : _a2.find((operator) => operator.value === item.operator);
  }, [item, currentColumn]);
  const changeColumn = React80.useCallback((event) => {
    const field = event.target.value;
    const column = apiRef.current.getColumn(field);
    if (column.field === currentColumn.field) {
      return;
    }
    const newOperator = column.filterOperators.find((operator) => operator.value === item.operator) || column.filterOperators[0];
    const eraseFilterValue = !newOperator.InputComponent || newOperator.InputComponent !== (currentOperator == null ? void 0 : currentOperator.InputComponent) || column.type !== currentColumn.type;
    let filterValue = eraseFilterValue ? void 0 : item.value;
    if (column.type === "singleSelect" && filterValue !== void 0) {
      const colDef = column;
      const valueOptions = getValueOptions(colDef);
      if (Array.isArray(filterValue)) {
        filterValue = filterValue.filter((val) => {
          return (
            // Only keep values that are in the new value options
            getValueFromValueOptions(val, valueOptions, colDef == null ? void 0 : colDef.getOptionValue) !== void 0
          );
        });
      } else if (getValueFromValueOptions(item.value, valueOptions, colDef == null ? void 0 : colDef.getOptionValue) === void 0) {
        filterValue = void 0;
      }
    }
    applyFilterChanges(_extends({}, item, {
      field,
      operator: newOperator.value,
      value: filterValue
    }));
  }, [apiRef, applyFilterChanges, item, currentColumn, currentOperator]);
  const changeOperator = React80.useCallback((event) => {
    const operator = event.target.value;
    const newOperator = currentColumn == null ? void 0 : currentColumn.filterOperators.find((op) => op.value === operator);
    const eraseItemValue = !(newOperator == null ? void 0 : newOperator.InputComponent) || (newOperator == null ? void 0 : newOperator.InputComponent) !== (currentOperator == null ? void 0 : currentOperator.InputComponent);
    applyFilterChanges(_extends({}, item, {
      operator,
      value: eraseItemValue ? void 0 : item.value
    }));
  }, [applyFilterChanges, item, currentColumn, currentOperator]);
  const changeLogicOperator = React80.useCallback((event) => {
    const logicOperator = event.target.value === GridLogicOperator.And.toString() ? GridLogicOperator.And : GridLogicOperator.Or;
    applyMultiFilterOperatorChanges(logicOperator);
  }, [applyMultiFilterOperatorChanges]);
  const handleDeleteFilter = () => {
    if (rootProps.disableMultipleColumnsFiltering) {
      if (item.value === void 0) {
        deleteFilter(item);
      } else {
        applyFilterChanges(_extends({}, item, {
          value: void 0
        }));
      }
    } else {
      deleteFilter(item);
    }
  };
  React80.useImperativeHandle(focusElementRef, () => ({
    focus: () => {
      var _a2;
      if (currentOperator == null ? void 0 : currentOperator.InputComponent) {
        (_a2 = valueRef == null ? void 0 : valueRef.current) == null ? void 0 : _a2.focus();
      } else {
        filterSelectorRef.current.focus();
      }
    }
  }), [currentOperator]);
  return (0, import_jsx_runtime61.jsxs)(GridFilterFormRoot, _extends({
    ref,
    className: classes2.root,
    "data-id": item.id,
    ownerState: rootProps
  }, other, {
    children: [(0, import_jsx_runtime61.jsx)(FilterFormDeleteIcon, _extends({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, deleteIconProps, {
      className: clsx_default(classes2.deleteIcon, baseFormControlProps.className, deleteIconProps.className),
      ownerState: rootProps,
      children: (0, import_jsx_runtime61.jsx)(rootProps.slots.baseIconButton, _extends({
        "aria-label": apiRef.current.getLocaleText("filterPanelDeleteIconLabel"),
        title: apiRef.current.getLocaleText("filterPanelDeleteIconLabel"),
        onClick: handleDeleteFilter,
        size: "small",
        disabled: readOnly
      }, (_e = rootProps.slotProps) == null ? void 0 : _e.baseIconButton, {
        children: (0, import_jsx_runtime61.jsx)(rootProps.slots.filterPanelDeleteIcon, {
          fontSize: "small"
        })
      }))
    })), (0, import_jsx_runtime61.jsx)(FilterFormLogicOperatorInput, _extends({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, logicOperatorInputProps, {
      sx: _extends({
        display: hasLogicOperatorColumn ? "flex" : "none",
        visibility: showMultiFilterOperators ? "visible" : "hidden"
      }, baseFormControlProps.sx || {}, logicOperatorInputProps.sx || {}),
      className: clsx_default(classes2.logicOperatorInput, baseFormControlProps.className, logicOperatorInputProps.className),
      ownerState: rootProps,
      children: (0, import_jsx_runtime61.jsx)(rootProps.slots.baseSelect, _extends({
        inputProps: {
          "aria-label": apiRef.current.getLocaleText("filterPanelLogicOperator")
        },
        value: multiFilterOperator ?? "",
        onChange: changeLogicOperator,
        disabled: !!disableMultiFilterOperator || logicOperators.length === 1,
        native: isBaseSelectNative
      }, (_f = rootProps.slotProps) == null ? void 0 : _f.baseSelect, {
        children: logicOperators.map((logicOperator) => (0, import_react3.createElement)(rootProps.slots.baseSelectOption, _extends({}, baseSelectOptionProps, {
          native: isBaseSelectNative,
          key: logicOperator.toString(),
          value: logicOperator.toString()
        }), apiRef.current.getLocaleText(getLogicOperatorLocaleKey(logicOperator))))
      }))
    })), (0, import_jsx_runtime61.jsxs)(FilterFormColumnInput, _extends({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, columnInputProps, {
      className: clsx_default(classes2.columnInput, baseFormControlProps.className, columnInputProps.className),
      ownerState: rootProps,
      children: [(0, import_jsx_runtime61.jsx)(rootProps.slots.baseInputLabel, _extends({}, baseInputLabelProps, {
        htmlFor: columnSelectId,
        id: columnSelectLabelId,
        children: apiRef.current.getLocaleText("filterPanelColumns")
      })), (0, import_jsx_runtime61.jsx)(rootProps.slots.baseSelect, _extends({
        labelId: columnSelectLabelId,
        id: columnSelectId,
        label: apiRef.current.getLocaleText("filterPanelColumns"),
        value: selectedField ?? "",
        onChange: changeColumn,
        native: isBaseSelectNative,
        disabled: readOnly
      }, (_g = rootProps.slotProps) == null ? void 0 : _g.baseSelect, {
        children: sortedFilteredColumns.map((col) => (0, import_react3.createElement)(rootProps.slots.baseSelectOption, _extends({}, baseSelectOptionProps, {
          native: isBaseSelectNative,
          key: col.field,
          value: col.field
        }), getColumnLabel(col)))
      }))]
    })), (0, import_jsx_runtime61.jsxs)(FilterFormOperatorInput, _extends({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, operatorInputProps, {
      className: clsx_default(classes2.operatorInput, baseFormControlProps.className, operatorInputProps.className),
      ownerState: rootProps,
      children: [(0, import_jsx_runtime61.jsx)(rootProps.slots.baseInputLabel, _extends({}, baseInputLabelProps, {
        htmlFor: operatorSelectId,
        id: operatorSelectLabelId,
        children: apiRef.current.getLocaleText("filterPanelOperator")
      })), (0, import_jsx_runtime61.jsx)(rootProps.slots.baseSelect, _extends({
        labelId: operatorSelectLabelId,
        label: apiRef.current.getLocaleText("filterPanelOperator"),
        id: operatorSelectId,
        value: item.operator,
        onChange: changeOperator,
        native: isBaseSelectNative,
        inputRef: filterSelectorRef,
        disabled: readOnly
      }, (_h = rootProps.slotProps) == null ? void 0 : _h.baseSelect, {
        children: (_i = currentColumn == null ? void 0 : currentColumn.filterOperators) == null ? void 0 : _i.map((operator) => (0, import_react3.createElement)(rootProps.slots.baseSelectOption, _extends({}, baseSelectOptionProps, {
          native: isBaseSelectNative,
          key: operator.value,
          value: operator.value
        }), operator.label || apiRef.current.getLocaleText(`filterOperator${capitalize(operator.value)}`)))
      }))]
    })), (0, import_jsx_runtime61.jsx)(FilterFormValueInput, _extends({
      variant: "standard",
      as: rootProps.slots.baseFormControl
    }, baseFormControlProps, valueInputPropsOther, {
      className: clsx_default(classes2.valueInput, baseFormControlProps.className, valueInputPropsOther.className),
      ownerState: rootProps,
      children: (currentOperator == null ? void 0 : currentOperator.InputComponent) ? (0, import_jsx_runtime61.jsx)(currentOperator.InputComponent, _extends({
        apiRef,
        item,
        applyValue: applyFilterChanges,
        focusElementRef: valueRef,
        disabled: readOnly
      }, currentOperator.InputComponentProps, InputComponentProps), item.field) : null
    }))]
  }));
});
true ? GridFilterForm.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Callback called when the operator, column field or value is changed.
   * @param {GridFilterItem} item The updated [[GridFilterItem]].
   */
  applyFilterChanges: import_prop_types44.default.func.isRequired,
  /**
   * Callback called when the logic operator is changed.
   * @param {GridLogicOperator} operator The new logic operator.
   */
  applyMultiFilterOperatorChanges: import_prop_types44.default.func.isRequired,
  /**
   * @ignore - do not document.
   */
  children: import_prop_types44.default.node,
  /**
   * Props passed to the column input component.
   * @default {}
   */
  columnInputProps: import_prop_types44.default.any,
  /**
   * Changes how the options in the columns selector should be ordered.
   * If not specified, the order is derived from the `columns` prop.
   */
  columnsSort: import_prop_types44.default.oneOf(["asc", "desc"]),
  /**
   * Callback called when the delete button is clicked.
   * @param {GridFilterItem} item The deleted [[GridFilterItem]].
   */
  deleteFilter: import_prop_types44.default.func.isRequired,
  /**
   * Props passed to the delete icon.
   * @default {}
   */
  deleteIconProps: import_prop_types44.default.any,
  /**
   * If `true`, disables the logic operator field but still renders it.
   */
  disableMultiFilterOperator: import_prop_types44.default.bool,
  /**
   * Allows to filter the columns displayed in the filter form.
   * @param {FilterColumnsArgs} args The columns of the grid and name of field.
   * @returns {GridColDef['field'][]} The filtered fields array.
   */
  filterColumns: import_prop_types44.default.func,
  /**
   * A ref allowing to set imperative focus.
   * It can be passed to the el
   */
  focusElementRef: import_prop_types44.default.oneOfType([import_prop_types44.default.func, import_prop_types44.default.object]),
  /**
   * If `true`, the logic operator field is rendered.
   * The field will be invisible if `showMultiFilterOperators` is also `true`.
   */
  hasMultipleFilters: import_prop_types44.default.bool.isRequired,
  /**
   * The [[GridFilterItem]] representing this form.
   */
  item: import_prop_types44.default.shape({
    field: import_prop_types44.default.string.isRequired,
    id: import_prop_types44.default.oneOfType([import_prop_types44.default.number, import_prop_types44.default.string]),
    operator: import_prop_types44.default.string.isRequired,
    value: import_prop_types44.default.any
  }).isRequired,
  /**
   * Props passed to the logic operator input component.
   * @default {}
   */
  logicOperatorInputProps: import_prop_types44.default.any,
  /**
   * Sets the available logic operators.
   * @default [GridLogicOperator.And, GridLogicOperator.Or]
   */
  logicOperators: import_prop_types44.default.arrayOf(import_prop_types44.default.oneOf(["and", "or"]).isRequired),
  /**
   * Props passed to the operator input component.
   * @default {}
   */
  operatorInputProps: import_prop_types44.default.any,
  /**
   * `true` if the filter is disabled/read only.
   * i.e. `colDef.fiterable = false` but passed in `filterModel`
   * @default false
   */
  readOnly: import_prop_types44.default.bool,
  /**
   * If `true`, the logic operator field is visible.
   */
  showMultiFilterOperators: import_prop_types44.default.bool,
  /**
   * Props passed to the value input component.
   * @default {}
   */
  valueInputProps: import_prop_types44.default.any
} : void 0;

// node_modules/@mui/x-data-grid/components/panel/filterPanel/GridFilterPanel.js
init_extends();
init_objectWithoutPropertiesLoose();
var React81 = __toESM(require_react());
var import_prop_types45 = __toESM(require_prop_types());
var import_jsx_runtime62 = __toESM(require_jsx_runtime());
var _excluded41 = ["logicOperators", "columnsSort", "filterFormProps", "getColumnForNewFilter", "children", "disableAddFilterButton", "disableRemoveAllButton"];
var getGridFilter = (col) => ({
  field: col.field,
  operator: col.filterOperators[0].value,
  id: Math.round(Math.random() * 1e5)
});
var GridFilterPanel = React81.forwardRef(function GridFilterPanel2(props, ref) {
  var _a, _b;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
  const filterableColumns = useGridSelector(apiRef, gridFilterableColumnDefinitionsSelector);
  const filterableColumnsLookup = useGridSelector(apiRef, gridFilterableColumnLookupSelector);
  const lastFilterRef = React81.useRef(null);
  const placeholderFilter = React81.useRef(null);
  const {
    logicOperators = [GridLogicOperator.And, GridLogicOperator.Or],
    columnsSort,
    filterFormProps,
    getColumnForNewFilter,
    disableAddFilterButton = false,
    disableRemoveAllButton = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded41);
  const applyFilter = apiRef.current.upsertFilterItem;
  const applyFilterLogicOperator = React81.useCallback((operator) => {
    apiRef.current.setFilterLogicOperator(operator);
  }, [apiRef]);
  const getDefaultFilter = React81.useCallback(() => {
    let nextColumnWithOperator;
    if (getColumnForNewFilter && typeof getColumnForNewFilter === "function") {
      const nextFieldName = getColumnForNewFilter({
        currentFilters: (filterModel == null ? void 0 : filterModel.items) || [],
        columns: filterableColumns
      });
      if (nextFieldName === null) {
        return null;
      }
      nextColumnWithOperator = filterableColumns.find(({
        field
      }) => field === nextFieldName);
    } else {
      nextColumnWithOperator = filterableColumns.find((colDef) => {
        var _a2;
        return (_a2 = colDef.filterOperators) == null ? void 0 : _a2.length;
      });
    }
    if (!nextColumnWithOperator) {
      return null;
    }
    return getGridFilter(nextColumnWithOperator);
  }, [filterModel == null ? void 0 : filterModel.items, filterableColumns, getColumnForNewFilter]);
  const getNewFilter = React81.useCallback(() => {
    if (getColumnForNewFilter === void 0 || typeof getColumnForNewFilter !== "function") {
      return getDefaultFilter();
    }
    const currentFilters = filterModel.items.length ? filterModel.items : [getDefaultFilter()].filter(Boolean);
    const nextColumnFieldName = getColumnForNewFilter({
      currentFilters,
      columns: filterableColumns
    });
    if (nextColumnFieldName === null) {
      return null;
    }
    const nextColumnWithOperator = filterableColumns.find(({
      field
    }) => field === nextColumnFieldName);
    if (!nextColumnWithOperator) {
      return null;
    }
    return getGridFilter(nextColumnWithOperator);
  }, [filterModel.items, filterableColumns, getColumnForNewFilter, getDefaultFilter]);
  const items = React81.useMemo(() => {
    if (filterModel.items.length) {
      return filterModel.items;
    }
    if (!placeholderFilter.current) {
      placeholderFilter.current = getDefaultFilter();
    }
    return placeholderFilter.current ? [placeholderFilter.current] : [];
  }, [filterModel.items, getDefaultFilter]);
  const hasMultipleFilters = items.length > 1;
  const {
    readOnlyFilters,
    validFilters
  } = React81.useMemo(() => items.reduce((acc, item) => {
    if (filterableColumnsLookup[item.field]) {
      acc.validFilters.push(item);
    } else {
      acc.readOnlyFilters.push(item);
    }
    return acc;
  }, {
    readOnlyFilters: [],
    validFilters: []
  }), [items, filterableColumnsLookup]);
  const addNewFilter = React81.useCallback(() => {
    const newFilter = getNewFilter();
    if (!newFilter) {
      return;
    }
    apiRef.current.upsertFilterItems([...items, newFilter]);
  }, [apiRef, getNewFilter, items]);
  const deleteFilter = React81.useCallback((item) => {
    const shouldCloseFilterPanel = validFilters.length === 1;
    apiRef.current.deleteFilterItem(item);
    if (shouldCloseFilterPanel) {
      apiRef.current.hideFilterPanel();
    }
  }, [apiRef, validFilters.length]);
  const handleRemoveAll = React81.useCallback(() => {
    if (validFilters.length === 1 && validFilters[0].value === void 0) {
      apiRef.current.deleteFilterItem(validFilters[0]);
      return apiRef.current.hideFilterPanel();
    }
    return apiRef.current.setFilterModel(_extends({}, filterModel, {
      items: readOnlyFilters
    }), "removeAllFilterItems");
  }, [apiRef, readOnlyFilters, filterModel, validFilters]);
  React81.useEffect(() => {
    if (logicOperators.length > 0 && filterModel.logicOperator && !logicOperators.includes(filterModel.logicOperator)) {
      applyFilterLogicOperator(logicOperators[0]);
    }
  }, [logicOperators, applyFilterLogicOperator, filterModel.logicOperator]);
  React81.useEffect(() => {
    if (validFilters.length > 0) {
      lastFilterRef.current.focus();
    }
  }, [validFilters.length]);
  return (0, import_jsx_runtime62.jsxs)(GridPanelWrapper, _extends({
    ref
  }, other, {
    children: [(0, import_jsx_runtime62.jsxs)(GridPanelContent, {
      children: [readOnlyFilters.map((item, index) => (0, import_jsx_runtime62.jsx)(GridFilterForm, _extends({
        item,
        applyFilterChanges: applyFilter,
        deleteFilter,
        hasMultipleFilters,
        showMultiFilterOperators: index > 0,
        disableMultiFilterOperator: index !== 1,
        applyMultiFilterOperatorChanges: applyFilterLogicOperator,
        focusElementRef: null,
        readOnly: true,
        logicOperators,
        columnsSort
      }, filterFormProps), item.id == null ? index : item.id)), validFilters.map((item, index) => (0, import_jsx_runtime62.jsx)(GridFilterForm, _extends({
        item,
        applyFilterChanges: applyFilter,
        deleteFilter,
        hasMultipleFilters,
        showMultiFilterOperators: readOnlyFilters.length + index > 0,
        disableMultiFilterOperator: readOnlyFilters.length + index !== 1,
        applyMultiFilterOperatorChanges: applyFilterLogicOperator,
        focusElementRef: index === validFilters.length - 1 ? lastFilterRef : null,
        logicOperators,
        columnsSort
      }, filterFormProps), item.id == null ? index + readOnlyFilters.length : item.id))]
    }), !rootProps.disableMultipleColumnsFiltering && !(disableAddFilterButton && disableRemoveAllButton) ? (0, import_jsx_runtime62.jsxs)(GridPanelFooter, {
      children: [!disableAddFilterButton ? (0, import_jsx_runtime62.jsx)(rootProps.slots.baseButton, _extends({
        onClick: addNewFilter,
        startIcon: (0, import_jsx_runtime62.jsx)(rootProps.slots.filterPanelAddIcon, {})
      }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseButton, {
        children: apiRef.current.getLocaleText("filterPanelAddFilter")
      })) : (0, import_jsx_runtime62.jsx)("span", {}), !disableRemoveAllButton && validFilters.length > 0 ? (0, import_jsx_runtime62.jsx)(rootProps.slots.baseButton, _extends({
        onClick: handleRemoveAll,
        startIcon: (0, import_jsx_runtime62.jsx)(rootProps.slots.filterPanelRemoveAllIcon, {})
      }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseButton, {
        children: apiRef.current.getLocaleText("filterPanelRemoveAll")
      })) : null]
    }) : null]
  }));
});
true ? GridFilterPanel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore - do not document.
   */
  children: import_prop_types45.default.node,
  /**
   * Changes how the options in the columns selector should be ordered.
   * If not specified, the order is derived from the `columns` prop.
   */
  columnsSort: import_prop_types45.default.oneOf(["asc", "desc"]),
  /**
   * If `true`, the `Add filter` button will not be displayed.
   * @default false
   */
  disableAddFilterButton: import_prop_types45.default.bool,
  /**
   * If `true`, the `Remove all` button will be disabled
   * @default false
   */
  disableRemoveAllButton: import_prop_types45.default.bool,
  /**
   * Props passed to each filter form.
   */
  filterFormProps: import_prop_types45.default.shape({
    columnInputProps: import_prop_types45.default.any,
    columnsSort: import_prop_types45.default.oneOf(["asc", "desc"]),
    deleteIconProps: import_prop_types45.default.any,
    filterColumns: import_prop_types45.default.func,
    logicOperatorInputProps: import_prop_types45.default.any,
    operatorInputProps: import_prop_types45.default.any,
    valueInputProps: import_prop_types45.default.any
  }),
  /**
   * Function that returns the next filter item to be picked as default filter.
   * @param {GetColumnForNewFilterArgs} args Currently configured filters and columns.
   * @returns {GridColDef['field']} The field to be used for the next filter or `null` to prevent adding a filter.
   */
  getColumnForNewFilter: import_prop_types45.default.func,
  /**
   * Sets the available logic operators.
   * @default [GridLogicOperator.And, GridLogicOperator.Or]
   */
  logicOperators: import_prop_types45.default.arrayOf(import_prop_types45.default.oneOf(["and", "or"]).isRequired),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types45.default.oneOfType([import_prop_types45.default.arrayOf(import_prop_types45.default.oneOfType([import_prop_types45.default.func, import_prop_types45.default.object, import_prop_types45.default.bool])), import_prop_types45.default.func, import_prop_types45.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js
init_extends();
init_objectWithoutPropertiesLoose();
var React88 = __toESM(require_react());
var import_prop_types52 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarColumnsButton.js
init_extends();
var React82 = __toESM(require_react());
var import_prop_types46 = __toESM(require_prop_types());
init_utils();
var import_jsx_runtime63 = __toESM(require_jsx_runtime());
var GridToolbarColumnsButton = React82.forwardRef(function GridToolbarColumnsButton2(props, ref) {
  var _a, _b;
  const {
    slotProps = {}
  } = props;
  const buttonProps = slotProps.button || {};
  const tooltipProps = slotProps.tooltip || {};
  const columnButtonId = useId_default();
  const columnPanelId = useId_default();
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const preferencePanel = useGridSelector(apiRef, gridPreferencePanelStateSelector);
  const showColumns = (event) => {
    var _a2;
    if (preferencePanel.open && preferencePanel.openedPanelValue === GridPreferencePanelsValue.columns) {
      apiRef.current.hidePreferences();
    } else {
      apiRef.current.showPreferences(GridPreferencePanelsValue.columns, columnPanelId, columnButtonId);
    }
    (_a2 = buttonProps.onClick) == null ? void 0 : _a2.call(buttonProps, event);
  };
  if (rootProps.disableColumnSelector) {
    return null;
  }
  const isOpen = preferencePanel.open && preferencePanel.panelId === columnPanelId;
  return (0, import_jsx_runtime63.jsx)(rootProps.slots.baseTooltip, _extends({
    title: apiRef.current.getLocaleText("toolbarColumnsLabel"),
    enterDelay: 1e3
  }, tooltipProps, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTooltip, {
    children: (0, import_jsx_runtime63.jsx)(rootProps.slots.baseButton, _extends({
      ref,
      id: columnButtonId,
      size: "small",
      "aria-label": apiRef.current.getLocaleText("toolbarColumnsLabel"),
      "aria-haspopup": "menu",
      "aria-expanded": isOpen,
      "aria-controls": isOpen ? columnPanelId : void 0,
      startIcon: (0, import_jsx_runtime63.jsx)(rootProps.slots.columnSelectorIcon, {})
    }, buttonProps, {
      onClick: showColumns
    }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseButton, {
      children: apiRef.current.getLocaleText("toolbarColumns")
    }))
  }));
});
true ? GridToolbarColumnsButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types46.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarDensitySelector.js
init_extends();
var React83 = __toESM(require_react());
var import_prop_types47 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime64 = __toESM(require_jsx_runtime());
var GridToolbarDensitySelector = React83.forwardRef(function GridToolbarDensitySelector2(props, ref) {
  var _a, _b;
  const {
    slotProps = {}
  } = props;
  const buttonProps = slotProps.button || {};
  const tooltipProps = slotProps.tooltip || {};
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const density = useGridSelector(apiRef, gridDensitySelector);
  const densityButtonId = useId();
  const densityMenuId = useId();
  const [open, setOpen] = React83.useState(false);
  const buttonRef = React83.useRef(null);
  const handleRef = useForkRef(ref, buttonRef);
  const densityOptions = [{
    icon: (0, import_jsx_runtime64.jsx)(rootProps.slots.densityCompactIcon, {}),
    label: apiRef.current.getLocaleText("toolbarDensityCompact"),
    value: "compact"
  }, {
    icon: (0, import_jsx_runtime64.jsx)(rootProps.slots.densityStandardIcon, {}),
    label: apiRef.current.getLocaleText("toolbarDensityStandard"),
    value: "standard"
  }, {
    icon: (0, import_jsx_runtime64.jsx)(rootProps.slots.densityComfortableIcon, {}),
    label: apiRef.current.getLocaleText("toolbarDensityComfortable"),
    value: "comfortable"
  }];
  const startIcon = React83.useMemo(() => {
    switch (density) {
      case "compact":
        return (0, import_jsx_runtime64.jsx)(rootProps.slots.densityCompactIcon, {});
      case "comfortable":
        return (0, import_jsx_runtime64.jsx)(rootProps.slots.densityComfortableIcon, {});
      default:
        return (0, import_jsx_runtime64.jsx)(rootProps.slots.densityStandardIcon, {});
    }
  }, [density, rootProps]);
  const handleDensitySelectorOpen = (event) => {
    var _a2;
    setOpen((prevOpen) => !prevOpen);
    (_a2 = buttonProps.onClick) == null ? void 0 : _a2.call(buttonProps, event);
  };
  const handleDensitySelectorClose = () => {
    setOpen(false);
  };
  const handleDensityUpdate = (newDensity) => {
    apiRef.current.setDensity(newDensity);
    setOpen(false);
  };
  const handleListKeyDown = (event) => {
    if (isTabKey(event.key)) {
      event.preventDefault();
    }
    if (isHideMenuKey(event.key)) {
      setOpen(false);
    }
  };
  if (rootProps.disableDensitySelector) {
    return null;
  }
  const densityElements = densityOptions.map((option, index) => (0, import_jsx_runtime64.jsxs)(MenuItem_default, {
    onClick: () => handleDensityUpdate(option.value),
    selected: option.value === density,
    children: [(0, import_jsx_runtime64.jsx)(ListItemIcon_default, {
      children: option.icon
    }), option.label]
  }, index));
  return (0, import_jsx_runtime64.jsxs)(React83.Fragment, {
    children: [(0, import_jsx_runtime64.jsx)(rootProps.slots.baseTooltip, _extends({
      title: apiRef.current.getLocaleText("toolbarDensityLabel"),
      enterDelay: 1e3
    }, tooltipProps, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTooltip, {
      children: (0, import_jsx_runtime64.jsx)(rootProps.slots.baseButton, _extends({
        ref: handleRef,
        size: "small",
        startIcon,
        "aria-label": apiRef.current.getLocaleText("toolbarDensityLabel"),
        "aria-haspopup": "menu",
        "aria-expanded": open,
        "aria-controls": open ? densityMenuId : void 0,
        id: densityButtonId
      }, buttonProps, {
        onClick: handleDensitySelectorOpen
      }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseButton, {
        children: apiRef.current.getLocaleText("toolbarDensity")
      }))
    })), (0, import_jsx_runtime64.jsx)(GridMenu, {
      open,
      target: buttonRef.current,
      onClose: handleDensitySelectorClose,
      position: "bottom-start",
      children: (0, import_jsx_runtime64.jsx)(MenuList_default, {
        id: densityMenuId,
        className: gridClasses.menuList,
        "aria-labelledby": densityButtonId,
        onKeyDown: handleListKeyDown,
        autoFocusItem: open,
        children: densityElements
      })
    })]
  });
});
true ? GridToolbarDensitySelector.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types47.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarFilterButton.js
init_extends();
var React84 = __toESM(require_react());
var import_prop_types48 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime65 = __toESM(require_jsx_runtime());
var useUtilityClasses35 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["toolbarFilterList"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridToolbarFilterListRoot = styled_default("ul", {
  name: "MuiDataGrid",
  slot: "ToolbarFilterList",
  overridesResolver: (_props, styles) => styles.toolbarFilterList
})(({
  theme
}) => ({
  margin: theme.spacing(1, 1, 0.5),
  padding: theme.spacing(0, 1)
}));
var GridToolbarFilterButton = React84.forwardRef(function GridToolbarFilterButton2(props, ref) {
  var _a, _b;
  const {
    slotProps = {}
  } = props;
  const buttonProps = slotProps.button || {};
  const tooltipProps = slotProps.tooltip || {};
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const activeFilters = useGridSelector(apiRef, gridFilterActiveItemsSelector);
  const lookup = useGridSelector(apiRef, gridColumnLookupSelector);
  const preferencePanel = useGridSelector(apiRef, gridPreferencePanelStateSelector);
  const classes2 = useUtilityClasses35(rootProps);
  const filterButtonId = useId();
  const filterPanelId = useId();
  const tooltipContentNode = React84.useMemo(() => {
    if (preferencePanel.open) {
      return apiRef.current.getLocaleText("toolbarFiltersTooltipHide");
    }
    if (activeFilters.length === 0) {
      return apiRef.current.getLocaleText("toolbarFiltersTooltipShow");
    }
    const getOperatorLabel = (item) => lookup[item.field].filterOperators.find((operator) => operator.value === item.operator).label || apiRef.current.getLocaleText(`filterOperator${capitalize(item.operator)}`).toString();
    const getFilterItemValue = (item) => {
      const {
        getValueAsString
      } = lookup[item.field].filterOperators.find((operator) => operator.value === item.operator);
      return getValueAsString ? getValueAsString(item.value) : item.value;
    };
    return (0, import_jsx_runtime65.jsxs)("div", {
      children: [apiRef.current.getLocaleText("toolbarFiltersTooltipActive")(activeFilters.length), (0, import_jsx_runtime65.jsx)(GridToolbarFilterListRoot, {
        className: classes2.root,
        ownerState: rootProps,
        children: activeFilters.map((item, index) => _extends({}, lookup[item.field] && (0, import_jsx_runtime65.jsx)("li", {
          children: `${lookup[item.field].headerName || item.field}
                  ${getOperatorLabel(item)}
                  ${// implicit check for null and undefined
          item.value != null ? getFilterItemValue(item) : ""}`
        }, index)))
      })]
    });
  }, [apiRef, rootProps, preferencePanel.open, activeFilters, lookup, classes2]);
  const toggleFilter = (event) => {
    var _a2;
    const {
      open,
      openedPanelValue
    } = preferencePanel;
    if (open && openedPanelValue === GridPreferencePanelsValue.filters) {
      apiRef.current.hidePreferences();
    } else {
      apiRef.current.showPreferences(GridPreferencePanelsValue.filters, filterPanelId, filterButtonId);
    }
    (_a2 = buttonProps.onClick) == null ? void 0 : _a2.call(buttonProps, event);
  };
  if (rootProps.disableColumnFilter) {
    return null;
  }
  const isOpen = preferencePanel.open && preferencePanel.panelId === filterPanelId;
  return (0, import_jsx_runtime65.jsx)(rootProps.slots.baseTooltip, _extends({
    title: tooltipContentNode,
    enterDelay: 1e3
  }, tooltipProps, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTooltip, {
    children: (0, import_jsx_runtime65.jsx)(rootProps.slots.baseButton, _extends({
      ref,
      id: filterButtonId,
      size: "small",
      "aria-label": apiRef.current.getLocaleText("toolbarFiltersLabel"),
      "aria-controls": isOpen ? filterPanelId : void 0,
      "aria-expanded": isOpen,
      "aria-haspopup": true,
      startIcon: (0, import_jsx_runtime65.jsx)(Badge_default, {
        badgeContent: activeFilters.length,
        color: "primary",
        children: (0, import_jsx_runtime65.jsx)(rootProps.slots.openFilterButtonIcon, {})
      })
    }, buttonProps, {
      onClick: toggleFilter
    }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseButton, {
      children: apiRef.current.getLocaleText("toolbarFilters")
    }))
  }));
});
true ? GridToolbarFilterButton.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types48.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExport.js
init_extends();
init_objectWithoutPropertiesLoose();
var React86 = __toESM(require_react());
var import_prop_types50 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExportContainer.js
init_extends();
var React85 = __toESM(require_react());
var import_prop_types49 = __toESM(require_prop_types());
init_esm();
var import_jsx_runtime66 = __toESM(require_jsx_runtime());
var GridToolbarExportContainer = React85.forwardRef(function GridToolbarExportContainer2(props, ref) {
  var _a, _b;
  const {
    children,
    slotProps = {}
  } = props;
  const buttonProps = slotProps.button || {};
  const tooltipProps = slotProps.tooltip || {};
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const exportButtonId = useId();
  const exportMenuId = useId();
  const [open, setOpen] = React85.useState(false);
  const buttonRef = React85.useRef(null);
  const handleRef = useForkRef(ref, buttonRef);
  const handleMenuOpen = (event) => {
    var _a2;
    setOpen((prevOpen) => !prevOpen);
    (_a2 = buttonProps.onClick) == null ? void 0 : _a2.call(buttonProps, event);
  };
  const handleMenuClose = () => setOpen(false);
  const handleListKeyDown = (event) => {
    if (isTabKey(event.key)) {
      event.preventDefault();
    }
    if (isHideMenuKey(event.key)) {
      handleMenuClose();
    }
  };
  if (children == null) {
    return null;
  }
  return (0, import_jsx_runtime66.jsxs)(React85.Fragment, {
    children: [(0, import_jsx_runtime66.jsx)(rootProps.slots.baseTooltip, _extends({
      title: apiRef.current.getLocaleText("toolbarExportLabel"),
      enterDelay: 1e3
    }, tooltipProps, (_a = rootProps.slotProps) == null ? void 0 : _a.baseTooltip, {
      children: (0, import_jsx_runtime66.jsx)(rootProps.slots.baseButton, _extends({
        ref: handleRef,
        size: "small",
        startIcon: (0, import_jsx_runtime66.jsx)(rootProps.slots.exportIcon, {}),
        "aria-expanded": open,
        "aria-label": apiRef.current.getLocaleText("toolbarExportLabel"),
        "aria-haspopup": "menu",
        "aria-controls": open ? exportMenuId : void 0,
        id: exportButtonId
      }, buttonProps, {
        onClick: handleMenuOpen
      }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseButton, {
        children: apiRef.current.getLocaleText("toolbarExport")
      }))
    })), (0, import_jsx_runtime66.jsx)(GridMenu, {
      open,
      target: buttonRef.current,
      onClose: handleMenuClose,
      position: "bottom-start",
      children: (0, import_jsx_runtime66.jsx)(MenuList_default, {
        id: exportMenuId,
        className: gridClasses.menuList,
        "aria-labelledby": exportButtonId,
        onKeyDown: handleListKeyDown,
        autoFocusItem: open,
        children: React85.Children.map(children, (child) => {
          if (!React85.isValidElement(child)) {
            return child;
          }
          return React85.cloneElement(child, {
            hideMenu: handleMenuClose
          });
        })
      })
    })]
  });
});
true ? GridToolbarExportContainer.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types49.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarExport.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime());
var _excluded42 = ["hideMenu", "options"];
var _excluded211 = ["hideMenu", "options"];
var _excluded310 = ["csvOptions", "printOptions", "excelOptions"];
function GridCsvExportMenuItem(props) {
  const apiRef = useGridApiContext();
  const {
    hideMenu,
    options
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded42);
  return (0, import_jsx_runtime67.jsx)(MenuItem_default, _extends({
    onClick: () => {
      apiRef.current.exportDataAsCsv(options);
      hideMenu == null ? void 0 : hideMenu();
    }
  }, other, {
    children: apiRef.current.getLocaleText("toolbarExportCSV")
  }));
}
function GridPrintExportMenuItem(props) {
  const apiRef = useGridApiContext();
  const {
    hideMenu,
    options
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded211);
  return (0, import_jsx_runtime67.jsx)(MenuItem_default, _extends({
    onClick: () => {
      apiRef.current.exportDataAsPrint(options);
      hideMenu == null ? void 0 : hideMenu();
    }
  }, other, {
    children: apiRef.current.getLocaleText("toolbarExportPrint")
  }));
}
var GridToolbarExport = React86.forwardRef(function GridToolbarExport2(props, ref) {
  const {
    csvOptions = {},
    printOptions = {},
    excelOptions
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded310);
  const apiRef = useGridApiContext();
  const preProcessedButtons = apiRef.current.unstable_applyPipeProcessors("exportMenu", [], {
    excelOptions,
    csvOptions,
    printOptions
  }).sort((a, b) => a.componentName > b.componentName ? 1 : -1);
  if (preProcessedButtons.length === 0) {
    return null;
  }
  return (0, import_jsx_runtime67.jsx)(GridToolbarExportContainer, _extends({}, other, {
    ref,
    children: preProcessedButtons.map((button, index) => React86.cloneElement(button.component, {
      key: index
    }))
  }));
});
true ? GridToolbarExport.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  csvOptions: import_prop_types50.default.object,
  printOptions: import_prop_types50.default.object,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types50.default.object
} : void 0;

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbarQuickFilter.js
init_extends();
init_objectWithoutPropertiesLoose();
var React87 = __toESM(require_react());
init_clsx();
var import_prop_types51 = __toESM(require_prop_types());
init_esm();
init_composeClasses();
var import_jsx_runtime68 = __toESM(require_jsx_runtime());
var _excluded43 = ["quickFilterParser", "quickFilterFormatter", "debounceMs", "className"];
var useUtilityClasses36 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["toolbarQuickFilter"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridToolbarQuickFilterRoot = styled_default(TextField_default, {
  name: "MuiDataGrid",
  slot: "ToolbarQuickFilter",
  overridesResolver: (props, styles) => styles.toolbarQuickFilter
})(({
  theme
}) => ({
  width: "auto",
  paddingBottom: theme.spacing(0.5),
  "& input": {
    marginLeft: theme.spacing(0.5)
  },
  "& .MuiInput-underline:before": {
    borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
  },
  [`& input[type="search"]::-webkit-search-decoration,
  & input[type="search"]::-webkit-search-cancel-button,
  & input[type="search"]::-webkit-search-results-button,
  & input[type="search"]::-webkit-search-results-decoration`]: {
    /* clears the 'X' icon from Chrome */
    display: "none"
  }
}));
var defaultSearchValueParser = (searchText) => searchText.split(" ").filter((word) => word !== "");
var defaultSearchValueFormatter = (values) => values.join(" ");
function GridToolbarQuickFilter(props) {
  var _a, _b;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses36(rootProps);
  const quickFilterValues = useGridSelector(apiRef, gridQuickFilterValuesSelector);
  const {
    quickFilterParser = defaultSearchValueParser,
    quickFilterFormatter = defaultSearchValueFormatter,
    debounceMs = rootProps.filterDebounceMs,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded43);
  const [searchValue, setSearchValue] = React87.useState(() => quickFilterFormatter(quickFilterValues ?? []));
  const prevQuickFilterValuesRef = React87.useRef(quickFilterValues);
  React87.useEffect(() => {
    if (!isDeepEqual(prevQuickFilterValuesRef.current, quickFilterValues)) {
      prevQuickFilterValuesRef.current = quickFilterValues;
      setSearchValue((prevSearchValue) => isDeepEqual(quickFilterParser(prevSearchValue), quickFilterValues) ? prevSearchValue : quickFilterFormatter(quickFilterValues ?? []));
    }
  }, [quickFilterValues, quickFilterFormatter, quickFilterParser]);
  const updateSearchValue = React87.useCallback((newSearchValue) => {
    const newQuickFilterValues = quickFilterParser(newSearchValue);
    prevQuickFilterValuesRef.current = newQuickFilterValues;
    apiRef.current.setQuickFilterValues(newQuickFilterValues);
  }, [apiRef, quickFilterParser]);
  const debouncedUpdateSearchValue = React87.useMemo(() => debounce(updateSearchValue, debounceMs), [updateSearchValue, debounceMs]);
  const handleSearchValueChange = React87.useCallback((event) => {
    const newSearchValue = event.target.value;
    setSearchValue(newSearchValue);
    debouncedUpdateSearchValue(newSearchValue);
  }, [debouncedUpdateSearchValue]);
  const handleSearchReset = React87.useCallback(() => {
    setSearchValue("");
    updateSearchValue("");
  }, [updateSearchValue]);
  return (0, import_jsx_runtime68.jsx)(GridToolbarQuickFilterRoot, _extends({
    as: rootProps.slots.baseTextField,
    ownerState: rootProps,
    variant: "standard",
    value: searchValue,
    onChange: handleSearchValueChange,
    className: clsx_default(className, classes2.root),
    placeholder: apiRef.current.getLocaleText("toolbarQuickFilterPlaceholder"),
    "aria-label": apiRef.current.getLocaleText("toolbarQuickFilterLabel"),
    type: "search"
  }, other, {
    InputProps: _extends({
      startAdornment: (0, import_jsx_runtime68.jsx)(rootProps.slots.quickFilterIcon, {
        fontSize: "small"
      }),
      endAdornment: (0, import_jsx_runtime68.jsx)(rootProps.slots.baseIconButton, _extends({
        "aria-label": apiRef.current.getLocaleText("toolbarQuickFilterDeleteIconLabel"),
        size: "small",
        sx: {
          visibility: searchValue ? "visible" : "hidden"
        },
        onClick: handleSearchReset
      }, (_a = rootProps.slotProps) == null ? void 0 : _a.baseIconButton, {
        children: (0, import_jsx_runtime68.jsx)(rootProps.slots.quickFilterClearIcon, {
          fontSize: "small"
        })
      }))
    }, other.InputProps)
  }, (_b = rootProps.slotProps) == null ? void 0 : _b.baseTextField));
}
true ? GridToolbarQuickFilter.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The debounce time in milliseconds.
   * @default 150
   */
  debounceMs: import_prop_types51.default.number,
  /**
   * Function responsible for formatting values of quick filter in a string when the model is modified
   * @param {any[]} values The new values passed to the quick filter model
   * @returns {string} The string to display in the text field
   * @default (values: string[]) => values.join(' ')
   */
  quickFilterFormatter: import_prop_types51.default.func,
  /**
   * Function responsible for parsing text input in an array of independent values for quick filtering.
   * @param {string} input The value entered by the user
   * @returns {any[]} The array of value on which quick filter is applied
   * @default (searchText: string) => searchText
   *   .split(' ')
   *   .filter((word) => word !== '')
   */
  quickFilterParser: import_prop_types51.default.func
} : void 0;

// node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime());
var _excluded44 = ["className", "csvOptions", "printOptions", "excelOptions", "showQuickFilter", "quickFilterProps"];
var GridToolbar = React88.forwardRef(function GridToolbar2(props, ref) {
  const {
    csvOptions,
    printOptions,
    excelOptions,
    showQuickFilter = false,
    quickFilterProps = {}
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded44);
  const rootProps = useGridRootProps();
  if (rootProps.disableColumnFilter && rootProps.disableColumnSelector && rootProps.disableDensitySelector && !showQuickFilter) {
    return null;
  }
  return (0, import_jsx_runtime69.jsxs)(GridToolbarContainer, _extends({
    ref
  }, other, {
    children: [(0, import_jsx_runtime69.jsx)(GridToolbarColumnsButton, {}), (0, import_jsx_runtime69.jsx)(GridToolbarFilterButton, {}), (0, import_jsx_runtime69.jsx)(GridToolbarDensitySelector, {}), (0, import_jsx_runtime69.jsx)(GridToolbarExport, {
      csvOptions,
      printOptions,
      excelOptions
    }), (0, import_jsx_runtime69.jsx)(Box_default, {
      sx: {
        flex: 1
      }
    }), showQuickFilter && (0, import_jsx_runtime69.jsx)(GridToolbarQuickFilter, _extends({}, quickFilterProps))]
  }));
});
true ? GridToolbar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Props passed to the quick filter component.
   */
  quickFilterProps: import_prop_types52.default.object,
  /**
   * Show the quick filter component.
   * @default false
   */
  showQuickFilter: import_prop_types52.default.bool,
  sx: import_prop_types52.default.oneOfType([import_prop_types52.default.arrayOf(import_prop_types52.default.oneOfType([import_prop_types52.default.func, import_prop_types52.default.object, import_prop_types52.default.bool])), import_prop_types52.default.func, import_prop_types52.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridFooter.js
init_extends();
var React90 = __toESM(require_react());
var import_prop_types54 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/components/GridSelectedRowCount.js
init_extends();
init_objectWithoutPropertiesLoose();
var React89 = __toESM(require_react());
var import_prop_types53 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime70 = __toESM(require_jsx_runtime());
var _excluded45 = ["className", "selectedRowCount"];
var useUtilityClasses37 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["selectedRowCount"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridSelectedRowCountRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "SelectedRowCount",
  overridesResolver: (props, styles) => styles.selectedRowCount
})(({
  theme
}) => ({
  alignItems: "center",
  display: "flex",
  margin: theme.spacing(0, 2),
  visibility: "hidden",
  width: 0,
  height: 0,
  [theme.breakpoints.up("sm")]: {
    visibility: "visible",
    width: "auto",
    height: "auto"
  }
}));
var GridSelectedRowCount = React89.forwardRef(function GridSelectedRowCount2(props, ref) {
  const {
    className,
    selectedRowCount
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded45);
  const apiRef = useGridApiContext();
  const ownerState = useGridRootProps();
  const classes2 = useUtilityClasses37(ownerState);
  const rowSelectedText = apiRef.current.getLocaleText("footerRowSelected")(selectedRowCount);
  return (0, import_jsx_runtime70.jsx)(GridSelectedRowCountRoot, _extends({
    ref,
    className: clsx_default(classes2.root, className),
    ownerState
  }, other, {
    children: rowSelectedText
  }));
});
true ? GridSelectedRowCount.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  selectedRowCount: import_prop_types53.default.number.isRequired,
  sx: import_prop_types53.default.oneOfType([import_prop_types53.default.arrayOf(import_prop_types53.default.oneOfType([import_prop_types53.default.func, import_prop_types53.default.object, import_prop_types53.default.bool])), import_prop_types53.default.func, import_prop_types53.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridFooter.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime());
var GridFooter = React90.forwardRef(function GridFooter2(props, ref) {
  var _a, _b;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const totalTopLevelRowCount = useGridSelector(apiRef, gridTopLevelRowCountSelector);
  const selectedRowCount = useGridSelector(apiRef, selectedGridRowsCountSelector);
  const visibleTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);
  const selectedRowCountElement = !rootProps.hideFooterSelectedRowCount && selectedRowCount > 0 ? (0, import_jsx_runtime71.jsx)(GridSelectedRowCount, {
    selectedRowCount
  }) : (0, import_jsx_runtime71.jsx)("div", {});
  const rowCountElement = !rootProps.hideFooterRowCount && !rootProps.pagination ? (0, import_jsx_runtime71.jsx)(rootProps.slots.footerRowCount, _extends({}, (_a = rootProps.slotProps) == null ? void 0 : _a.footerRowCount, {
    rowCount: totalTopLevelRowCount,
    visibleRowCount: visibleTopLevelRowCount
  })) : null;
  const paginationElement = rootProps.pagination && !rootProps.hideFooterPagination && rootProps.slots.pagination && (0, import_jsx_runtime71.jsx)(rootProps.slots.pagination, _extends({}, (_b = rootProps.slotProps) == null ? void 0 : _b.pagination));
  return (0, import_jsx_runtime71.jsxs)(GridFooterContainer, _extends({
    ref
  }, props, {
    children: [selectedRowCountElement, rowCountElement, paginationElement]
  }));
});
true ? GridFooter.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types54.default.oneOfType([import_prop_types54.default.arrayOf(import_prop_types54.default.oneOfType([import_prop_types54.default.func, import_prop_types54.default.object, import_prop_types54.default.bool])), import_prop_types54.default.func, import_prop_types54.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridHeader.js
init_extends();
var React92 = __toESM(require_react());

// node_modules/@mui/x-data-grid/components/panel/GridPreferencesPanel.js
init_extends();
var React91 = __toESM(require_react());
var import_jsx_runtime72 = __toESM(require_jsx_runtime());
var GridPreferencesPanel = React91.forwardRef(function GridPreferencesPanel2(props, ref) {
  var _a, _b;
  const apiRef = useGridApiContext();
  const columns = useGridSelector(apiRef, gridColumnDefinitionsSelector);
  const rootProps = useGridRootProps();
  const preferencePanelState = useGridSelector(apiRef, gridPreferencePanelStateSelector);
  const panelContent = apiRef.current.unstable_applyPipeProcessors("preferencePanel", null, preferencePanelState.openedPanelValue ?? GridPreferencePanelsValue.filters);
  return (0, import_jsx_runtime72.jsx)(rootProps.slots.panel, _extends({
    ref,
    as: rootProps.slots.basePopper,
    open: columns.length > 0 && preferencePanelState.open,
    id: preferencePanelState.panelId,
    "aria-labelledby": preferencePanelState.labelId
  }, (_a = rootProps.slotProps) == null ? void 0 : _a.panel, props, (_b = rootProps.slotProps) == null ? void 0 : _b.basePopper, {
    children: panelContent
  }));
});

// node_modules/@mui/x-data-grid/components/GridHeader.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime());
function GridHeader() {
  var _a;
  const rootProps = useGridRootProps();
  return (0, import_jsx_runtime73.jsxs)(React92.Fragment, {
    children: [(0, import_jsx_runtime73.jsx)(GridPreferencesPanel, {}), rootProps.slots.toolbar && (0, import_jsx_runtime73.jsx)(rootProps.slots.toolbar, _extends({}, (_a = rootProps.slotProps) == null ? void 0 : _a.toolbar))]
  });
}

// node_modules/@mui/x-data-grid/components/GridLoadingOverlay.js
init_extends();
var React93 = __toESM(require_react());
var import_prop_types55 = __toESM(require_prop_types());
var import_jsx_runtime74 = __toESM(require_jsx_runtime());
var GridLoadingOverlay = React93.forwardRef(function GridLoadingOverlay2(props, ref) {
  return (0, import_jsx_runtime74.jsx)(GridOverlay, _extends({
    ref
  }, props, {
    children: (0, import_jsx_runtime74.jsx)(CircularProgress_default, {})
  }));
});
true ? GridLoadingOverlay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types55.default.oneOfType([import_prop_types55.default.arrayOf(import_prop_types55.default.oneOfType([import_prop_types55.default.func, import_prop_types55.default.object, import_prop_types55.default.bool])), import_prop_types55.default.func, import_prop_types55.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridNoRowsOverlay.js
init_extends();
var React94 = __toESM(require_react());
var import_prop_types56 = __toESM(require_prop_types());
var import_jsx_runtime75 = __toESM(require_jsx_runtime());
var GridNoRowsOverlay = React94.forwardRef(function GridNoRowsOverlay2(props, ref) {
  const apiRef = useGridApiContext();
  const noRowsLabel = apiRef.current.getLocaleText("noRowsLabel");
  return (0, import_jsx_runtime75.jsx)(GridOverlay, _extends({
    ref
  }, props, {
    children: noRowsLabel
  }));
});
true ? GridNoRowsOverlay.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  sx: import_prop_types56.default.oneOfType([import_prop_types56.default.arrayOf(import_prop_types56.default.oneOfType([import_prop_types56.default.func, import_prop_types56.default.object, import_prop_types56.default.bool])), import_prop_types56.default.func, import_prop_types56.default.object])
} : void 0;

// node_modules/@mui/x-data-grid/components/GridPagination.js
init_extends();
var React95 = __toESM(require_react());
var import_prop_types57 = __toESM(require_prop_types());
var import_jsx_runtime76 = __toESM(require_jsx_runtime());
var GridPaginationRoot = styled_default(TablePagination_default)(({
  theme
}) => ({
  [`& .${tablePaginationClasses_default.selectLabel}`]: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  [`& .${tablePaginationClasses_default.input}`]: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "inline-flex"
    }
  }
}));
var wrapLabelDisplayedRows = (labelDisplayedRows, estimated) => {
  return ({
    from,
    to,
    count,
    page
  }) => labelDisplayedRows({
    from,
    to,
    count,
    page,
    estimated
  });
};
var defaultLabelDisplayedRows = ({
  from,
  to,
  count,
  estimated
}) => {
  if (!estimated) {
    return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
  }
  return `${from}–${to} of ${count !== -1 ? count : `more than ${estimated > to ? estimated : to}`}`;
};
var GridPagination = React95.forwardRef(function GridPagination2(props, ref) {
  var _a;
  const apiRef = useGridApiContext();
  const rootProps = useGridRootProps();
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const rowCount = useGridSelector(apiRef, gridPaginationRowCountSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const {
    paginationMode,
    loading,
    estimatedRowCount
  } = rootProps;
  const computedProps = React95.useMemo(() => {
    if (rowCount === -1 && paginationMode === "server" && loading) {
      return {
        backIconButtonProps: {
          disabled: true
        },
        nextIconButtonProps: {
          disabled: true
        }
      };
    }
    return {};
  }, [loading, paginationMode, rowCount]);
  const lastPage = React95.useMemo(() => Math.max(0, pageCount - 1), [pageCount]);
  const computedPage = React95.useMemo(() => {
    if (rowCount === -1) {
      return paginationModel.page;
    }
    return paginationModel.page <= lastPage ? paginationModel.page : lastPage;
  }, [lastPage, paginationModel.page, rowCount]);
  const handlePageSizeChange = React95.useCallback((event) => {
    const pageSize = Number(event.target.value);
    apiRef.current.setPageSize(pageSize);
  }, [apiRef]);
  const handlePageChange = React95.useCallback((_, page) => {
    apiRef.current.setPage(page);
  }, [apiRef]);
  const isPageSizeIncludedInPageSizeOptions = (pageSize) => {
    for (let i = 0; i < rootProps.pageSizeOptions.length; i += 1) {
      const option = rootProps.pageSizeOptions[i];
      if (typeof option === "number") {
        if (option === pageSize) {
          return true;
        }
      } else if (option.value === pageSize) {
        return true;
      }
    }
    return false;
  };
  if (true) {
    const warnedOnceMissingInPageSizeOptions = React95.useRef(false);
    const pageSize = ((_a = rootProps.paginationModel) == null ? void 0 : _a.pageSize) ?? paginationModel.pageSize;
    if (!warnedOnceMissingInPageSizeOptions.current && !rootProps.autoPageSize && !isPageSizeIncludedInPageSizeOptions(pageSize)) {
      console.warn([`MUI X: The page size \`${paginationModel.pageSize}\` is not present in the \`pageSizeOptions\`.`, `Add it to show the pagination select.`].join("\n"));
      warnedOnceMissingInPageSizeOptions.current = true;
    }
  }
  const pageSizeOptions = isPageSizeIncludedInPageSizeOptions(paginationModel.pageSize) ? rootProps.pageSizeOptions : [];
  const locales = apiRef.current.getLocaleText("MuiTablePagination");
  const wrappedLabelDisplayedRows = wrapLabelDisplayedRows(locales.labelDisplayedRows || defaultLabelDisplayedRows, estimatedRowCount);
  return (0, import_jsx_runtime76.jsx)(GridPaginationRoot, _extends({
    ref,
    component: "div",
    count: rowCount,
    page: computedPage,
    rowsPerPageOptions: pageSizeOptions,
    rowsPerPage: paginationModel.pageSize,
    onPageChange: handlePageChange,
    onRowsPerPageChange: handlePageSizeChange
  }, computedProps, locales, {
    labelDisplayedRows: wrappedLabelDisplayedRows
  }, props));
});
true ? GridPagination.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  component: import_prop_types57.default.elementType
} : void 0;

// node_modules/@mui/x-data-grid/components/GridRowCount.js
init_extends();
init_objectWithoutPropertiesLoose();
var React96 = __toESM(require_react());
var import_prop_types58 = __toESM(require_prop_types());
init_clsx();
init_esm();
var import_jsx_runtime77 = __toESM(require_jsx_runtime());
var _excluded46 = ["className", "rowCount", "visibleRowCount"];
var useUtilityClasses38 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["rowCount"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridRowCountRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "RowCount",
  overridesResolver: (props, styles) => styles.rowCount
})(({
  theme
}) => ({
  alignItems: "center",
  display: "flex",
  margin: theme.spacing(0, 2)
}));
var GridRowCount = React96.forwardRef(function GridRowCount2(props, ref) {
  const {
    className,
    rowCount,
    visibleRowCount
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded46);
  const apiRef = useGridApiContext();
  const ownerState = useGridRootProps();
  const classes2 = useUtilityClasses38(ownerState);
  if (rowCount === 0) {
    return null;
  }
  const text = visibleRowCount < rowCount ? apiRef.current.getLocaleText("footerTotalVisibleRows")(visibleRowCount, rowCount) : rowCount.toLocaleString();
  return (0, import_jsx_runtime77.jsxs)(GridRowCountRoot, _extends({
    ref,
    className: clsx_default(classes2.root, className),
    ownerState
  }, other, {
    children: [apiRef.current.getLocaleText("footerTotalRows"), " ", text]
  }));
});
true ? GridRowCount.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  rowCount: import_prop_types58.default.number.isRequired,
  sx: import_prop_types58.default.oneOfType([import_prop_types58.default.arrayOf(import_prop_types58.default.oneOfType([import_prop_types58.default.func, import_prop_types58.default.object, import_prop_types58.default.bool])), import_prop_types58.default.func, import_prop_types58.default.object]),
  visibleRowCount: import_prop_types58.default.number.isRequired
} : void 0;

// node_modules/@mui/x-data-grid/components/GridRow.js
init_extends();
init_objectWithoutPropertiesLoose();
var React98 = __toESM(require_react());
var import_prop_types59 = __toESM(require_prop_types());
init_clsx();
init_esm();

// node_modules/@mui/x-data-grid/constants/gridDetailPanelToggleField.js
var GRID_DETAIL_PANEL_TOGGLE_FIELD = "__detail_panel_toggle__";

// node_modules/@mui/x-data-grid/hooks/features/editing/gridEditingSelectors.js
var gridEditRowsStateSelector = (state) => state.editRows;

// node_modules/@mui/x-data-grid/components/GridScrollbarFillerCell.js
var React97 = __toESM(require_react());
init_clsx();
var import_jsx_runtime78 = __toESM(require_jsx_runtime());
var classes = {
  root: gridClasses.scrollbarFiller,
  header: gridClasses["scrollbarFiller--header"],
  borderTop: gridClasses["scrollbarFiller--borderTop"],
  pinnedRight: gridClasses["scrollbarFiller--pinnedRight"]
};
function GridScrollbarFillerCell({
  header,
  borderTop = true,
  pinnedRight
}) {
  return (0, import_jsx_runtime78.jsx)("div", {
    role: "presentation",
    className: clsx_default(classes.root, header && classes.header, borderTop && classes.borderTop, pinnedRight && classes.pinnedRight)
  });
}

// node_modules/@mui/x-data-grid/internals/utils/getPinnedCellOffset.js
var getPinnedCellOffset = (pinnedPosition, computedWidth, columnIndex, columnPositions, dimensions) => {
  const scrollbarWidth = dimensions.hasScrollY ? dimensions.scrollbarSize : 0;
  let pinnedOffset;
  switch (pinnedPosition) {
    case GridPinnedColumnPosition.LEFT:
      pinnedOffset = columnPositions[columnIndex];
      break;
    case GridPinnedColumnPosition.RIGHT:
      pinnedOffset = dimensions.columnsTotalWidth - columnPositions[columnIndex] - computedWidth + scrollbarWidth;
      break;
    default:
      pinnedOffset = 0;
      break;
  }
  return pinnedOffset;
};

// node_modules/@mui/x-data-grid/components/GridRow.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime());
var _excluded47 = ["selected", "rowId", "row", "index", "style", "rowHeight", "className", "visibleColumns", "pinnedColumns", "offsetTop", "offsetLeft", "dimensions", "renderContext", "focusedColumnIndex", "isFirstVisible", "isLastVisible", "isNotVisible", "focusedCell", "tabbableCell", "onClick", "onDoubleClick", "onMouseEnter", "onMouseLeave", "onMouseOut", "onMouseOver"];
var useUtilityClasses39 = (ownerState) => {
  const {
    editable,
    editing,
    selected,
    isFirstVisible,
    isLastVisible,
    rowHeight,
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["row", selected && "selected", editable && "row--editable", editing && "row--editing", isFirstVisible && "row--firstVisible", isLastVisible && "row--lastVisible", rowHeight === "auto" && "row--dynamicHeight"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function EmptyCell({
  width
}) {
  if (!width) {
    return null;
  }
  return (0, import_jsx_runtime79.jsx)("div", {
    role: "presentation",
    className: clsx_default(gridClasses.cell, gridClasses.cellEmpty),
    style: {
      "--width": `${width}px`
    }
  });
}
var GridRow = React98.forwardRef(function GridRow2(props, refProp) {
  var _a;
  const {
    selected,
    rowId,
    row,
    index,
    style: styleProp,
    rowHeight,
    className,
    visibleColumns,
    pinnedColumns,
    offsetLeft,
    dimensions,
    renderContext,
    focusedColumnIndex,
    isFirstVisible,
    isLastVisible,
    isNotVisible,
    onClick,
    onDoubleClick,
    onMouseEnter,
    onMouseLeave,
    onMouseOut,
    onMouseOver
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded47);
  const apiRef = useGridApiContext();
  const ref = React98.useRef(null);
  const rootProps = useGridRootProps();
  const currentPage = useGridVisibleRows(apiRef, rootProps);
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const treeDepth = useGridSelector(apiRef, gridRowMaximumTreeDepthSelector);
  const headerGroupingMaxDepth = useGridSelector(apiRef, gridColumnGroupsHeaderMaxDepthSelector);
  const columnPositions = useGridSelector(apiRef, gridColumnPositionsSelector);
  const editRowsState = useGridSelector(apiRef, gridEditRowsStateSelector);
  const handleRef = useForkRef(ref, refProp);
  const rowNode = apiRef.current.getRowNode(rowId);
  const scrollbarWidth = dimensions.hasScrollY ? dimensions.scrollbarSize : 0;
  const gridHasFiller = dimensions.columnsTotalWidth < dimensions.viewportOuterSize.width;
  const hasFocusCell = focusedColumnIndex !== void 0;
  const hasVirtualFocusCellLeft = hasFocusCell && focusedColumnIndex >= pinnedColumns.left.length && focusedColumnIndex < renderContext.firstColumnIndex;
  const hasVirtualFocusCellRight = hasFocusCell && focusedColumnIndex < visibleColumns.length - pinnedColumns.right.length && focusedColumnIndex >= renderContext.lastColumnIndex;
  const ariaRowIndex = index + headerGroupingMaxDepth + 2;
  const ownerState = {
    selected,
    isFirstVisible,
    isLastVisible,
    classes: rootProps.classes,
    editing: apiRef.current.getRowMode(rowId) === GridRowModes.Edit,
    editable: rootProps.editMode === GridEditModes.Row,
    rowHeight
  };
  const classes2 = useUtilityClasses39(ownerState);
  React98.useLayoutEffect(() => {
    if (currentPage.range) {
      const rowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(rowId);
      if (rowIndex != null) {
        apiRef.current.unstable_setLastMeasuredRowIndex(rowIndex);
      }
    }
    const rootElement = ref.current;
    const hasFixedHeight = rowHeight !== "auto";
    if (!rootElement || hasFixedHeight || typeof ResizeObserver === "undefined") {
      return void 0;
    }
    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;
      const height = entry.borderBoxSize && entry.borderBoxSize.length > 0 ? entry.borderBoxSize[0].blockSize : entry.contentRect.height;
      apiRef.current.unstable_storeRowHeightMeasurement(rowId, height);
    });
    resizeObserver.observe(rootElement);
    return () => resizeObserver.disconnect();
  }, [apiRef, currentPage.range, index, rowHeight, rowId]);
  const publish = React98.useCallback((eventName, propHandler) => (event) => {
    if (isEventTargetInPortal(event)) {
      return;
    }
    if (!apiRef.current.getRow(rowId)) {
      return;
    }
    apiRef.current.publishEvent(eventName, apiRef.current.getRowParams(rowId), event);
    if (propHandler) {
      propHandler(event);
    }
  }, [apiRef, rowId]);
  const publishClick = React98.useCallback((event) => {
    const cell = findParentElementFromClassName(event.target, gridClasses.cell);
    const field = cell == null ? void 0 : cell.getAttribute("data-field");
    if (field) {
      if (field === GRID_CHECKBOX_SELECTION_COL_DEF.field) {
        return;
      }
      if (field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
        return;
      }
      if (field === "__reorder__") {
        return;
      }
      if (apiRef.current.getCellMode(rowId, field) === GridCellModes.Edit) {
        return;
      }
      const column = apiRef.current.getColumn(field);
      if ((column == null ? void 0 : column.type) === GRID_ACTIONS_COLUMN_TYPE) {
        return;
      }
    }
    publish("rowClick", onClick)(event);
  }, [apiRef, onClick, publish, rowId]);
  const {
    slots,
    slotProps,
    disableColumnReorder
  } = rootProps;
  const rowReordering = rootProps.rowReordering;
  const sizes = useGridSelector(apiRef, () => _extends({}, apiRef.current.unstable_getRowInternalSizes(rowId)), objectShallowCompare);
  let minHeight = rowHeight;
  if (minHeight === "auto" && sizes) {
    const numberOfBaseSizes = 1;
    const maximumSize = sizes.baseCenter ?? 0;
    if (maximumSize > 0 && numberOfBaseSizes > 1) {
      minHeight = maximumSize;
    }
  }
  const style = React98.useMemo(() => {
    if (isNotVisible) {
      return {
        opacity: 0,
        width: 0,
        height: 0
      };
    }
    const rowStyle = _extends({}, styleProp, {
      maxHeight: rowHeight === "auto" ? "none" : rowHeight,
      // max-height doesn't support "auto"
      minHeight,
      "--height": typeof rowHeight === "number" ? `${rowHeight}px` : rowHeight
    });
    if (sizes == null ? void 0 : sizes.spacingTop) {
      const property = rootProps.rowSpacingType === "border" ? "borderTopWidth" : "marginTop";
      rowStyle[property] = sizes.spacingTop;
    }
    if (sizes == null ? void 0 : sizes.spacingBottom) {
      const property = rootProps.rowSpacingType === "border" ? "borderBottomWidth" : "marginBottom";
      let propertyValue = rowStyle[property];
      if (typeof propertyValue !== "number") {
        propertyValue = parseInt(propertyValue || "0", 10);
      }
      propertyValue += sizes.spacingBottom;
      rowStyle[property] = propertyValue;
    }
    return rowStyle;
  }, [isNotVisible, rowHeight, styleProp, minHeight, sizes, rootProps.rowSpacingType]);
  const rowClassNames = apiRef.current.unstable_applyPipeProcessors("rowClassName", [], rowId);
  if (typeof rootProps.getRowClassName === "function") {
    const indexRelativeToCurrentPage = index - (((_a = currentPage.range) == null ? void 0 : _a.firstRowIndex) || 0);
    const rowParams = _extends({}, apiRef.current.getRowParams(rowId), {
      isFirstVisible: indexRelativeToCurrentPage === 0,
      isLastVisible: indexRelativeToCurrentPage === currentPage.rows.length - 1,
      indexRelativeToCurrentPage
    });
    rowClassNames.push(rootProps.getRowClassName(rowParams));
  }
  const getCell = (column, indexInSection, indexRelativeToAllColumns, sectionLength, pinnedPosition = PinnedPosition.NONE) => {
    var _a2;
    const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, indexRelativeToAllColumns);
    if (cellColSpanInfo == null ? void 0 : cellColSpanInfo.spannedByColSpan) {
      return null;
    }
    const width = (cellColSpanInfo == null ? void 0 : cellColSpanInfo.cellProps.width) ?? column.computedWidth;
    const colSpan = (cellColSpanInfo == null ? void 0 : cellColSpanInfo.cellProps.colSpan) ?? 1;
    const pinnedOffset = getPinnedCellOffset(gridPinnedColumnPositionLookup[pinnedPosition], column.computedWidth, indexRelativeToAllColumns, columnPositions, dimensions);
    if ((rowNode == null ? void 0 : rowNode.type) === "skeletonRow") {
      return (0, import_jsx_runtime79.jsx)(slots.skeletonCell, {
        width,
        height: rowHeight,
        field: column.field,
        align: column.align ?? "left"
      }, column.field);
    }
    const editCellState = ((_a2 = editRowsState[rowId]) == null ? void 0 : _a2[column.field]) ?? null;
    const isReorderCell = column.field === "__reorder__";
    const isEditingRows = Object.keys(editRowsState).length > 0;
    const canReorderColumn = !(disableColumnReorder || column.disableReorder);
    const canReorderRow = rowReordering && !sortModel.length && treeDepth <= 1 && !isEditingRows;
    const disableDragEvents = !(canReorderColumn || isReorderCell && canReorderRow);
    const cellIsNotVisible = pinnedPosition === PinnedPosition.VIRTUAL;
    return (0, import_jsx_runtime79.jsx)(slots.cell, _extends({
      column,
      width,
      rowId,
      align: column.align || "left",
      colIndex: indexRelativeToAllColumns,
      colSpan,
      disableDragEvents,
      editCellState,
      isNotVisible: cellIsNotVisible,
      pinnedOffset,
      pinnedPosition,
      sectionIndex: indexInSection,
      sectionLength,
      gridHasFiller
    }, slotProps == null ? void 0 : slotProps.cell), column.field);
  };
  if (!rowNode) {
    return null;
  }
  const leftCells = pinnedColumns.left.map((column, i) => {
    const indexRelativeToAllColumns = i;
    return getCell(column, i, indexRelativeToAllColumns, pinnedColumns.left.length, PinnedPosition.LEFT);
  });
  const rightCells = pinnedColumns.right.map((column, i) => {
    const indexRelativeToAllColumns = visibleColumns.length - pinnedColumns.right.length + i;
    return getCell(column, i, indexRelativeToAllColumns, pinnedColumns.right.length, PinnedPosition.RIGHT);
  });
  const middleColumnsLength = visibleColumns.length - pinnedColumns.left.length - pinnedColumns.right.length;
  const cells = [];
  if (hasVirtualFocusCellLeft) {
    cells.push(getCell(visibleColumns[focusedColumnIndex], focusedColumnIndex - pinnedColumns.left.length, focusedColumnIndex, middleColumnsLength, PinnedPosition.VIRTUAL));
  }
  for (let i = renderContext.firstColumnIndex; i < renderContext.lastColumnIndex; i += 1) {
    const column = visibleColumns[i];
    const indexInSection = i - pinnedColumns.left.length;
    cells.push(getCell(column, indexInSection, i, middleColumnsLength));
  }
  if (hasVirtualFocusCellRight) {
    cells.push(getCell(visibleColumns[focusedColumnIndex], focusedColumnIndex - pinnedColumns.left.length, focusedColumnIndex, middleColumnsLength, PinnedPosition.VIRTUAL));
  }
  const eventHandlers = row ? {
    onClick: publishClick,
    onDoubleClick: publish("rowDoubleClick", onDoubleClick),
    onMouseEnter: publish("rowMouseEnter", onMouseEnter),
    onMouseLeave: publish("rowMouseLeave", onMouseLeave),
    onMouseOut: publish("rowMouseOut", onMouseOut),
    onMouseOver: publish("rowMouseOver", onMouseOver)
  } : null;
  const expandedWidth = dimensions.viewportOuterSize.width - dimensions.columnsTotalWidth - scrollbarWidth;
  const emptyCellWidth = Math.max(0, expandedWidth);
  return (0, import_jsx_runtime79.jsxs)("div", _extends({
    ref: handleRef,
    "data-id": rowId,
    "data-rowindex": index,
    role: "row",
    className: clsx_default(...rowClassNames, classes2.root, className),
    "aria-rowindex": ariaRowIndex,
    "aria-selected": selected,
    style
  }, eventHandlers, other, {
    children: [leftCells, (0, import_jsx_runtime79.jsx)("div", {
      role: "presentation",
      className: gridClasses.cellOffsetLeft,
      style: {
        width: offsetLeft
      }
    }), cells, emptyCellWidth > 0 && (0, import_jsx_runtime79.jsx)(EmptyCell, {
      width: emptyCellWidth
    }), rightCells.length > 0 && (0, import_jsx_runtime79.jsx)("div", {
      role: "presentation",
      className: gridClasses.filler
    }), rightCells, scrollbarWidth !== 0 && (0, import_jsx_runtime79.jsx)(GridScrollbarFillerCell, {
      pinnedRight: pinnedColumns.right.length > 0
    })]
  }));
});
true ? GridRow.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  dimensions: import_prop_types59.default.shape({
    bottomContainerHeight: import_prop_types59.default.number.isRequired,
    columnsTotalWidth: import_prop_types59.default.number.isRequired,
    contentSize: import_prop_types59.default.shape({
      height: import_prop_types59.default.number.isRequired,
      width: import_prop_types59.default.number.isRequired
    }).isRequired,
    hasScrollX: import_prop_types59.default.bool.isRequired,
    hasScrollY: import_prop_types59.default.bool.isRequired,
    headerFilterHeight: import_prop_types59.default.number.isRequired,
    headerHeight: import_prop_types59.default.number.isRequired,
    headersTotalHeight: import_prop_types59.default.number.isRequired,
    isReady: import_prop_types59.default.bool.isRequired,
    leftPinnedWidth: import_prop_types59.default.number.isRequired,
    minimumSize: import_prop_types59.default.shape({
      height: import_prop_types59.default.number.isRequired,
      width: import_prop_types59.default.number.isRequired
    }).isRequired,
    rightPinnedWidth: import_prop_types59.default.number.isRequired,
    root: import_prop_types59.default.shape({
      height: import_prop_types59.default.number.isRequired,
      width: import_prop_types59.default.number.isRequired
    }).isRequired,
    rowHeight: import_prop_types59.default.number.isRequired,
    rowWidth: import_prop_types59.default.number.isRequired,
    scrollbarSize: import_prop_types59.default.number.isRequired,
    topContainerHeight: import_prop_types59.default.number.isRequired,
    viewportInnerSize: import_prop_types59.default.shape({
      height: import_prop_types59.default.number.isRequired,
      width: import_prop_types59.default.number.isRequired
    }).isRequired,
    viewportOuterSize: import_prop_types59.default.shape({
      height: import_prop_types59.default.number.isRequired,
      width: import_prop_types59.default.number.isRequired
    }).isRequired
  }).isRequired,
  /**
   * Determines which cell has focus.
   * If `null`, no cell in this row has focus.
   */
  focusedColumnIndex: import_prop_types59.default.number,
  /**
   * Index of the row in the whole sorted and filtered dataset.
   * If some rows above have expanded children, this index also take those children into account.
   */
  index: import_prop_types59.default.number.isRequired,
  isFirstVisible: import_prop_types59.default.bool.isRequired,
  isLastVisible: import_prop_types59.default.bool.isRequired,
  isNotVisible: import_prop_types59.default.bool.isRequired,
  offsetLeft: import_prop_types59.default.number.isRequired,
  offsetTop: import_prop_types59.default.number,
  onClick: import_prop_types59.default.func,
  onDoubleClick: import_prop_types59.default.func,
  onMouseEnter: import_prop_types59.default.func,
  onMouseLeave: import_prop_types59.default.func,
  pinnedColumns: import_prop_types59.default.object.isRequired,
  renderContext: import_prop_types59.default.shape({
    firstColumnIndex: import_prop_types59.default.number.isRequired,
    firstRowIndex: import_prop_types59.default.number.isRequired,
    lastColumnIndex: import_prop_types59.default.number.isRequired,
    lastRowIndex: import_prop_types59.default.number.isRequired
  }).isRequired,
  row: import_prop_types59.default.object.isRequired,
  rowHeight: import_prop_types59.default.oneOfType([import_prop_types59.default.oneOf(["auto"]), import_prop_types59.default.number]).isRequired,
  rowId: import_prop_types59.default.oneOfType([import_prop_types59.default.number, import_prop_types59.default.string]).isRequired,
  selected: import_prop_types59.default.bool.isRequired,
  /**
   * Determines which cell should be tabbable by having tabIndex=0.
   * If `null`, no cell in this row is in the tab sequence.
   */
  tabbableCell: import_prop_types59.default.string,
  visibleColumns: import_prop_types59.default.arrayOf(import_prop_types59.default.object).isRequired
} : void 0;
var MemoizedGridRow = fastMemo(GridRow);

// node_modules/@mui/x-data-grid/context/GridContextProvider.js
var React99 = __toESM(require_react());
var import_jsx_runtime80 = __toESM(require_jsx_runtime());
function GridContextProvider({
  privateApiRef,
  props,
  children
}) {
  const apiRef = React99.useRef(privateApiRef.current.getPublicApi());
  return (0, import_jsx_runtime80.jsx)(GridRootPropsContext.Provider, {
    value: props,
    children: (0, import_jsx_runtime80.jsx)(GridPrivateApiContext.Provider, {
      value: privateApiRef,
      children: (0, import_jsx_runtime80.jsx)(GridApiContext.Provider, {
        value: apiRef,
        children
      })
    })
  });
}

// node_modules/@mui/x-data-grid/hooks/core/useGridRefs.js
var React100 = __toESM(require_react());
var useGridRefs = (apiRef) => {
  const rootElementRef = React100.useRef(null);
  const mainElementRef = React100.useRef(null);
  const virtualScrollerRef = React100.useRef(null);
  apiRef.current.register("public", {
    rootElementRef
  });
  apiRef.current.register("private", {
    mainElementRef,
    virtualScrollerRef
  });
};

// node_modules/@mui/x-data-grid/hooks/core/useGridTheme.js
init_extends();
var React101 = __toESM(require_react());
var useGridTheme = (apiRef) => {
  const theme = useTheme();
  if (!apiRef.current.state.theme) {
    apiRef.current.state.theme = theme;
  }
  const isFirstEffect = React101.useRef(true);
  React101.useEffect(() => {
    if (isFirstEffect.current) {
      isFirstEffect.current = false;
    } else {
      apiRef.current.setState((state) => _extends({}, state, {
        theme
      }));
    }
  }, [apiRef, theme]);
};

// node_modules/@mui/x-data-grid/hooks/core/useGridLoggerFactory.js
var React102 = __toESM(require_react());
var forceDebug = localStorageAvailable() && window.localStorage.getItem("DEBUG") != null;
var noop3 = () => {
};
var noopLogger = {
  debug: noop3,
  info: noop3,
  warn: noop3,
  error: noop3
};
var LOG_LEVELS = ["debug", "info", "warn", "error"];
function getAppender(name, logLevel, appender = console) {
  const minLogLevelIdx = LOG_LEVELS.indexOf(logLevel);
  if (minLogLevelIdx === -1) {
    throw new Error(`MUI X: Log level ${logLevel} not recognized.`);
  }
  const logger = LOG_LEVELS.reduce((loggerObj, method, idx) => {
    if (idx >= minLogLevelIdx) {
      loggerObj[method] = (...args) => {
        const [message, ...other] = args;
        appender[method](`MUI X: ${name} - ${message}`, ...other);
      };
    } else {
      loggerObj[method] = noop3;
    }
    return loggerObj;
  }, {});
  return logger;
}
var useGridLoggerFactory = (apiRef, props) => {
  const getLogger = React102.useCallback((name) => {
    if (forceDebug) {
      return getAppender(name, "debug", props.logger);
    }
    if (!props.logLevel) {
      return noopLogger;
    }
    return getAppender(name, props.logLevel.toString(), props.logger);
  }, [props.logLevel, props.logger]);
  useGridApiMethod(apiRef, {
    getLogger
  }, "private");
};

// node_modules/@mui/x-data-grid/hooks/core/useGridApiInitialization.js
var React103 = __toESM(require_react());

// node_modules/@mui/x-data-grid/utils/Store.js
var Store = class _Store {
  static create(value) {
    return new _Store(value);
  }
  constructor(_value) {
    this.value = void 0;
    this.listeners = void 0;
    this.subscribe = (fn) => {
      this.listeners.add(fn);
      return () => {
        this.listeners.delete(fn);
      };
    };
    this.getSnapshot = () => {
      return this.value;
    };
    this.update = (value) => {
      this.value = value;
      this.listeners.forEach((l) => l(value));
    };
    this.value = _value;
    this.listeners = /* @__PURE__ */ new Set();
  }
};

// node_modules/@mui/x-data-grid/utils/EventManager.js
var EventManager = class {
  constructor() {
    this.maxListeners = 20;
    this.warnOnce = false;
    this.events = {};
  }
  on(eventName, listener, options = {}) {
    let collection = this.events[eventName];
    if (!collection) {
      collection = {
        highPriority: /* @__PURE__ */ new Map(),
        regular: /* @__PURE__ */ new Map()
      };
      this.events[eventName] = collection;
    }
    if (options.isFirst) {
      collection.highPriority.set(listener, true);
    } else {
      collection.regular.set(listener, true);
    }
    if (true) {
      const collectionSize = collection.highPriority.size + collection.regular.size;
      if (collectionSize > this.maxListeners && !this.warnOnce) {
        this.warnOnce = true;
        console.warn([`Possible EventEmitter memory leak detected. ${collectionSize} ${eventName} listeners added.`].join("\n"));
      }
    }
  }
  removeListener(eventName, listener) {
    if (this.events[eventName]) {
      this.events[eventName].regular.delete(listener);
      this.events[eventName].highPriority.delete(listener);
    }
  }
  removeAllListeners() {
    this.events = {};
  }
  emit(eventName, ...args) {
    const collection = this.events[eventName];
    if (!collection) {
      return;
    }
    const highPriorityListeners = Array.from(collection.highPriority.keys());
    const regularListeners = Array.from(collection.regular.keys());
    for (let i = highPriorityListeners.length - 1; i >= 0; i -= 1) {
      const listener = highPriorityListeners[i];
      if (collection.highPriority.has(listener)) {
        listener.apply(this, args);
      }
    }
    for (let i = 0; i < regularListeners.length; i += 1) {
      const listener = regularListeners[i];
      if (collection.regular.has(listener)) {
        listener.apply(this, args);
      }
    }
  }
  once(eventName, listener) {
    const that = this;
    this.on(eventName, function oneTimeListener(...args) {
      that.removeListener(eventName, oneTimeListener);
      listener.apply(that, args);
    });
  }
};

// node_modules/@mui/x-data-grid/hooks/core/useGridApiInitialization.js
var SYMBOL_API_PRIVATE = Symbol("mui.api_private");
var isSyntheticEvent = (event) => {
  return event.isPropagationStopped !== void 0;
};
var globalId = 0;
function createPrivateAPI(publicApiRef) {
  var _a;
  const existingPrivateApi = (_a = publicApiRef.current) == null ? void 0 : _a[SYMBOL_API_PRIVATE];
  if (existingPrivateApi) {
    return existingPrivateApi;
  }
  const state = {};
  const privateApi = {
    state,
    store: Store.create(state),
    instanceId: {
      id: globalId
    }
  };
  globalId += 1;
  privateApi.getPublicApi = () => publicApiRef.current;
  privateApi.register = (visibility, methods) => {
    Object.keys(methods).forEach((methodName) => {
      const method = methods[methodName];
      const currentPrivateMethod = privateApi[methodName];
      if ((currentPrivateMethod == null ? void 0 : currentPrivateMethod.spying) === true) {
        currentPrivateMethod.target = method;
      } else {
        privateApi[methodName] = method;
      }
      if (visibility === "public") {
        const publicApi = publicApiRef.current;
        const currentPublicMethod = publicApi[methodName];
        if ((currentPublicMethod == null ? void 0 : currentPublicMethod.spying) === true) {
          currentPublicMethod.target = method;
        } else {
          publicApi[methodName] = method;
        }
      }
    });
  };
  privateApi.register("private", {
    caches: {},
    eventManager: new EventManager()
  });
  return privateApi;
}
function createPublicAPI(privateApiRef) {
  const publicApi = {
    get state() {
      return privateApiRef.current.state;
    },
    get store() {
      return privateApiRef.current.store;
    },
    get instanceId() {
      return privateApiRef.current.instanceId;
    },
    [SYMBOL_API_PRIVATE]: privateApiRef.current
  };
  return publicApi;
}
function useGridApiInitialization(inputApiRef, props) {
  var _a;
  const publicApiRef = React103.useRef();
  const privateApiRef = React103.useRef();
  if (!privateApiRef.current) {
    privateApiRef.current = createPrivateAPI(publicApiRef);
  }
  if (!publicApiRef.current) {
    publicApiRef.current = createPublicAPI(privateApiRef);
  }
  const publishEvent = React103.useCallback((...args) => {
    const [name, params, event = {}] = args;
    event.defaultMuiPrevented = false;
    if (isSyntheticEvent(event) && event.isPropagationStopped()) {
      return;
    }
    const details = props.signature === GridSignature.DataGridPro ? {
      api: privateApiRef.current.getPublicApi()
    } : {};
    privateApiRef.current.eventManager.emit(name, params, event, details);
  }, [privateApiRef, props.signature]);
  const subscribeEvent = React103.useCallback((event, handler, options) => {
    privateApiRef.current.eventManager.on(event, handler, options);
    const api = privateApiRef.current;
    return () => {
      api.eventManager.removeListener(event, handler);
    };
  }, [privateApiRef]);
  useGridApiMethod(privateApiRef, {
    subscribeEvent,
    publishEvent
  }, "public");
  if (inputApiRef && !((_a = inputApiRef.current) == null ? void 0 : _a.state)) {
    inputApiRef.current = publicApiRef.current;
  }
  React103.useImperativeHandle(inputApiRef, () => publicApiRef.current, [publicApiRef]);
  React103.useEffect(() => {
    const api = privateApiRef.current;
    return () => {
      api.publishEvent("unmount");
    };
  }, [privateApiRef]);
  return privateApiRef;
}

// node_modules/@mui/x-data-grid/hooks/core/useGridLocaleText.js
var React104 = __toESM(require_react());
var useGridLocaleText = (apiRef, props) => {
  const getLocaleText = React104.useCallback((key) => {
    if (props.localeText[key] == null) {
      throw new Error(`Missing translation for key ${key}.`);
    }
    return props.localeText[key];
  }, [props.localeText]);
  apiRef.current.register("public", {
    getLocaleText
  });
};

// node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridPipeProcessing.js
init_objectWithoutPropertiesLoose();
var React105 = __toESM(require_react());
var useGridPipeProcessing = (apiRef) => {
  const cache2 = React105.useRef({});
  const isRunning = React105.useRef(false);
  const runAppliers = React105.useCallback((groupCache) => {
    if (isRunning.current || !groupCache) {
      return;
    }
    isRunning.current = true;
    Object.values(groupCache.appliers).forEach((callback) => {
      callback();
    });
    isRunning.current = false;
  }, []);
  const registerPipeProcessor = React105.useCallback((group, id, processor) => {
    if (!cache2.current[group]) {
      cache2.current[group] = {
        processors: /* @__PURE__ */ new Map(),
        processorsAsArray: [],
        appliers: {}
      };
    }
    const groupCache = cache2.current[group];
    const oldProcessor = groupCache.processors.get(id);
    if (oldProcessor !== processor) {
      groupCache.processors.set(id, processor);
      groupCache.processorsAsArray = Array.from(cache2.current[group].processors.values());
      runAppliers(groupCache);
    }
    return () => {
      cache2.current[group].processors.delete(id);
      cache2.current[group].processorsAsArray = Array.from(cache2.current[group].processors.values());
    };
  }, [runAppliers]);
  const registerPipeApplier = React105.useCallback((group, id, applier) => {
    if (!cache2.current[group]) {
      cache2.current[group] = {
        processors: /* @__PURE__ */ new Map(),
        processorsAsArray: [],
        appliers: {}
      };
    }
    cache2.current[group].appliers[id] = applier;
    return () => {
      const _appliers = cache2.current[group].appliers, otherAppliers = _objectWithoutPropertiesLoose(_appliers, [id].map(toPropertyKey));
      cache2.current[group].appliers = otherAppliers;
    };
  }, []);
  const requestPipeProcessorsApplication = React105.useCallback((group) => {
    runAppliers(cache2.current[group]);
  }, [runAppliers]);
  const applyPipeProcessors = React105.useCallback((...args) => {
    const [group, value, context] = args;
    if (!cache2.current[group]) {
      return value;
    }
    const processors = cache2.current[group].processorsAsArray;
    let result = value;
    for (let i = 0; i < processors.length; i += 1) {
      result = processors[i](result, context);
    }
    return result;
  }, []);
  const preProcessingPrivateApi = {
    registerPipeProcessor,
    registerPipeApplier,
    requestPipeProcessorsApplication
  };
  const preProcessingPublicApi = {
    unstable_applyPipeProcessors: applyPipeProcessors
  };
  useGridApiMethod(apiRef, preProcessingPrivateApi, "private");
  useGridApiMethod(apiRef, preProcessingPublicApi, "public");
};

// node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeProcessor.js
var React106 = __toESM(require_react());
var useGridRegisterPipeProcessor = (apiRef, group, callback) => {
  const cleanup = React106.useRef();
  const id = React106.useRef(`mui-${Math.round(Math.random() * 1e9)}`);
  const registerPreProcessor = React106.useCallback(() => {
    cleanup.current = apiRef.current.registerPipeProcessor(group, id.current, callback);
  }, [apiRef, callback, group]);
  useFirstRender(() => {
    registerPreProcessor();
  });
  const isFirstRender = React106.useRef(true);
  React106.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }
    return () => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = null;
      }
    };
  }, [registerPreProcessor]);
};

// node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeApplier.js
var React107 = __toESM(require_react());
var useGridRegisterPipeApplier = (apiRef, group, callback) => {
  const cleanup = React107.useRef();
  const id = React107.useRef(`mui-${Math.round(Math.random() * 1e9)}`);
  const registerPreProcessor = React107.useCallback(() => {
    cleanup.current = apiRef.current.registerPipeApplier(group, id.current, callback);
  }, [apiRef, callback, group]);
  useFirstRender(() => {
    registerPreProcessor();
  });
  const isFirstRender = React107.useRef(true);
  React107.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }
    return () => {
      if (cleanup.current) {
        cleanup.current();
        cleanup.current = null;
      }
    };
  }, [registerPreProcessor]);
};

// node_modules/@mui/x-data-grid/hooks/core/strategyProcessing/useGridRegisterStrategyProcessor.js
var React108 = __toESM(require_react());
var useGridRegisterStrategyProcessor = (apiRef, strategyName, group, processor) => {
  const registerPreProcessor = React108.useCallback(() => {
    apiRef.current.registerStrategyProcessor(strategyName, group, processor);
  }, [apiRef, processor, group, strategyName]);
  useFirstRender(() => {
    registerPreProcessor();
  });
  const isFirstRender = React108.useRef(true);
  React108.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      registerPreProcessor();
    }
  }, [registerPreProcessor]);
};

// node_modules/@mui/x-data-grid/hooks/core/strategyProcessing/useGridStrategyProcessing.js
init_objectWithoutPropertiesLoose();
var React109 = __toESM(require_react());
var GRID_DEFAULT_STRATEGY = "none";
var GRID_STRATEGIES_PROCESSORS = {
  rowTreeCreation: "rowTree",
  filtering: "rowTree",
  sorting: "rowTree",
  visibleRowsLookupCreation: "rowTree"
};
var useGridStrategyProcessing = (apiRef) => {
  const availableStrategies = React109.useRef(/* @__PURE__ */ new Map());
  const strategiesCache = React109.useRef({});
  const registerStrategyProcessor = React109.useCallback((strategyName, processorName, processor) => {
    const cleanup = () => {
      const _ref = strategiesCache.current[processorName], otherProcessors = _objectWithoutPropertiesLoose(_ref, [strategyName].map(toPropertyKey));
      strategiesCache.current[processorName] = otherProcessors;
    };
    if (!strategiesCache.current[processorName]) {
      strategiesCache.current[processorName] = {};
    }
    const groupPreProcessors = strategiesCache.current[processorName];
    const previousProcessor = groupPreProcessors[strategyName];
    groupPreProcessors[strategyName] = processor;
    if (!previousProcessor || previousProcessor === processor) {
      return cleanup;
    }
    if (strategyName === apiRef.current.getActiveStrategy(GRID_STRATEGIES_PROCESSORS[processorName])) {
      apiRef.current.publishEvent("activeStrategyProcessorChange", processorName);
    }
    return cleanup;
  }, [apiRef]);
  const applyStrategyProcessor = React109.useCallback((processorName, params) => {
    const activeStrategy = apiRef.current.getActiveStrategy(GRID_STRATEGIES_PROCESSORS[processorName]);
    if (activeStrategy == null) {
      throw new Error("Can't apply a strategy processor before defining an active strategy");
    }
    const groupCache = strategiesCache.current[processorName];
    if (!groupCache || !groupCache[activeStrategy]) {
      throw new Error(`No processor found for processor "${processorName}" on strategy "${activeStrategy}"`);
    }
    const processor = groupCache[activeStrategy];
    return processor(params);
  }, [apiRef]);
  const getActiveStrategy = React109.useCallback((strategyGroup) => {
    const strategyEntries = Array.from(availableStrategies.current.entries());
    const availableStrategyEntry = strategyEntries.find(([, strategy]) => {
      if (strategy.group !== strategyGroup) {
        return false;
      }
      return strategy.isAvailable();
    });
    return (availableStrategyEntry == null ? void 0 : availableStrategyEntry[0]) ?? GRID_DEFAULT_STRATEGY;
  }, []);
  const setStrategyAvailability = React109.useCallback((strategyGroup, strategyName, isAvailable) => {
    availableStrategies.current.set(strategyName, {
      group: strategyGroup,
      isAvailable
    });
    apiRef.current.publishEvent("strategyAvailabilityChange");
  }, [apiRef]);
  const strategyProcessingApi = {
    registerStrategyProcessor,
    applyStrategyProcessor,
    getActiveStrategy,
    setStrategyAvailability
  };
  useGridApiMethod(apiRef, strategyProcessingApi, "private");
};

// node_modules/@mui/x-data-grid/hooks/core/useGridStateInitialization.js
init_extends();
var React110 = __toESM(require_react());
var useGridStateInitialization = (apiRef) => {
  const controlStateMapRef = React110.useRef({});
  const [, rawForceUpdate] = React110.useState();
  const registerControlState = React110.useCallback((controlStateItem) => {
    controlStateMapRef.current[controlStateItem.stateId] = controlStateItem;
  }, []);
  const setState = React110.useCallback((state, reason) => {
    let newState;
    if (isFunction(state)) {
      newState = state(apiRef.current.state);
    } else {
      newState = state;
    }
    if (apiRef.current.state === newState) {
      return false;
    }
    let ignoreSetState = false;
    const updatedControlStateIds = [];
    Object.keys(controlStateMapRef.current).forEach((stateId) => {
      const controlState = controlStateMapRef.current[stateId];
      const oldSubState = controlState.stateSelector(apiRef.current.state, apiRef.current.instanceId);
      const newSubState = controlState.stateSelector(newState, apiRef.current.instanceId);
      if (newSubState === oldSubState) {
        return;
      }
      updatedControlStateIds.push({
        stateId: controlState.stateId,
        hasPropChanged: newSubState !== controlState.propModel
      });
      if (controlState.propModel !== void 0 && newSubState !== controlState.propModel) {
        ignoreSetState = true;
      }
    });
    if (updatedControlStateIds.length > 1) {
      throw new Error(`You're not allowed to update several sub-state in one transaction. You already updated ${updatedControlStateIds[0].stateId}, therefore, you're not allowed to update ${updatedControlStateIds.map((el) => el.stateId).join(", ")} in the same transaction.`);
    }
    if (!ignoreSetState) {
      apiRef.current.state = newState;
      if (apiRef.current.publishEvent) {
        apiRef.current.publishEvent("stateChange", newState);
      }
      apiRef.current.store.update(newState);
    }
    if (updatedControlStateIds.length === 1) {
      const {
        stateId,
        hasPropChanged
      } = updatedControlStateIds[0];
      const controlState = controlStateMapRef.current[stateId];
      const model = controlState.stateSelector(newState, apiRef.current.instanceId);
      if (controlState.propOnChange && hasPropChanged) {
        controlState.propOnChange(model, {
          reason,
          api: apiRef.current
        });
      }
      if (!ignoreSetState) {
        apiRef.current.publishEvent(controlState.changeEvent, model, {
          reason
        });
      }
    }
    return !ignoreSetState;
  }, [apiRef]);
  const updateControlState = React110.useCallback((key, state, reason) => {
    return apiRef.current.setState((previousState) => {
      return _extends({}, previousState, {
        [key]: state(previousState[key])
      });
    }, reason);
  }, [apiRef]);
  const forceUpdate = React110.useCallback(() => rawForceUpdate(() => apiRef.current.state), [apiRef]);
  const publicStateApi = {
    setState,
    forceUpdate
  };
  const privateStateApi = {
    updateControlState,
    registerControlState
  };
  useGridApiMethod(apiRef, publicStateApi, "public");
  useGridApiMethod(apiRef, privateStateApi, "private");
};

// node_modules/@mui/x-data-grid/hooks/core/useGridInitialization.js
var useGridInitialization = (inputApiRef, props) => {
  const privateApiRef = useGridApiInitialization(inputApiRef, props);
  useGridRefs(privateApiRef);
  useGridTheme(privateApiRef);
  useGridLoggerFactory(privateApiRef, props);
  useGridStateInitialization(privateApiRef);
  useGridPipeProcessing(privateApiRef);
  useGridStrategyProcessing(privateApiRef);
  useGridLocaleText(privateApiRef, props);
  privateApiRef.current.register("private", {
    rootProps: props
  });
  return privateApiRef;
};

// node_modules/@mui/x-data-grid/hooks/utils/useGridInitializeState.js
var React111 = __toESM(require_react());
var useGridInitializeState = (initializer, privateApiRef, props) => {
  const isInitialized = React111.useRef(false);
  if (!isInitialized.current) {
    privateApiRef.current.state = initializer(privateApiRef.current.state, props, privateApiRef);
    isInitialized.current = true;
  }
};

// node_modules/@mui/x-data-grid/hooks/features/clipboard/useGridClipboard.js
var React112 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/export/serializers/csvSerializer.js
function sanitizeCellValue(value, csvOptions) {
  const valueStr = typeof value === "string" ? value : `${value}`;
  if (csvOptions.shouldAppendQuotes || csvOptions.escapeFormulas) {
    const escapedValue = valueStr.replace(/"/g, '""');
    if ([csvOptions.delimiter, "\n", "\r", '"'].some((delimiter) => valueStr.includes(delimiter))) {
      return `"${escapedValue}"`;
    }
    if (csvOptions.escapeFormulas) {
      if (["=", "+", "-", "@", "	", "\r"].includes(escapedValue[0])) {
        return `'${escapedValue}`;
      }
    }
    return escapedValue;
  }
  return valueStr;
}
var serializeCellValue = (cellParams, options) => {
  var _a, _b;
  const {
    csvOptions,
    ignoreValueFormatter
  } = options;
  let value;
  if (ignoreValueFormatter) {
    const columnType = cellParams.colDef.type;
    if (columnType === "number") {
      value = String(cellParams.value);
    } else if (columnType === "date" || columnType === "dateTime") {
      value = (_a = cellParams.value) == null ? void 0 : _a.toISOString();
    } else if (typeof ((_b = cellParams.value) == null ? void 0 : _b.toString) === "function") {
      value = cellParams.value.toString();
    } else {
      value = cellParams.value;
    }
  } else {
    value = cellParams.formattedValue;
  }
  return sanitizeCellValue(value, csvOptions);
};
var objectFormattedValueWarning = buildWarning(["MUI X: When the value of a field is an object or a `renderCell` is provided, the CSV export might not display the value correctly.", "You can provide a `valueFormatter` with a string representation to be used."]);
var CSVRow = class {
  constructor(options) {
    this.options = void 0;
    this.rowString = "";
    this.isEmpty = true;
    this.options = options;
  }
  addValue(value) {
    if (!this.isEmpty) {
      this.rowString += this.options.csvOptions.delimiter;
    }
    if (value === null || value === void 0) {
      this.rowString += "";
    } else if (typeof this.options.sanitizeCellValue === "function") {
      this.rowString += this.options.sanitizeCellValue(value, this.options.csvOptions);
    } else {
      this.rowString += value;
    }
    this.isEmpty = false;
  }
  getRowString() {
    return this.rowString;
  }
};
var serializeRow = ({
  id,
  columns,
  getCellParams,
  csvOptions,
  ignoreValueFormatter
}) => {
  const row = new CSVRow({
    csvOptions
  });
  columns.forEach((column) => {
    const cellParams = getCellParams(id, column.field);
    if (true) {
      if (String(cellParams.formattedValue) === "[object Object]") {
        objectFormattedValueWarning();
      }
    }
    row.addValue(serializeCellValue(cellParams, {
      ignoreValueFormatter,
      csvOptions
    }));
  });
  return row.getRowString();
};
function buildCSV(options) {
  const {
    columns,
    rowIds,
    csvOptions,
    ignoreValueFormatter,
    apiRef
  } = options;
  const CSVBody = rowIds.reduce((acc, id) => `${acc}${serializeRow({
    id,
    columns,
    getCellParams: apiRef.current.getCellParams,
    ignoreValueFormatter,
    csvOptions
  })}\r
`, "").trim();
  if (!csvOptions.includeHeaders) {
    return CSVBody;
  }
  const filteredColumns = columns.filter((column) => column.field !== GRID_CHECKBOX_SELECTION_COL_DEF.field);
  const headerRows = [];
  if (csvOptions.includeColumnGroupsHeaders) {
    const columnGroupLookup = apiRef.current.getAllGroupDetails();
    let maxColumnGroupsDepth = 0;
    const columnGroupPathsLookup = filteredColumns.reduce((acc, column) => {
      const columnGroupPath = apiRef.current.getColumnGroupPath(column.field);
      acc[column.field] = columnGroupPath;
      maxColumnGroupsDepth = Math.max(maxColumnGroupsDepth, columnGroupPath.length);
      return acc;
    }, {});
    for (let i = 0; i < maxColumnGroupsDepth; i += 1) {
      const headerGroupRow = new CSVRow({
        csvOptions,
        sanitizeCellValue
      });
      headerRows.push(headerGroupRow);
      filteredColumns.forEach((column) => {
        const columnGroupId = (columnGroupPathsLookup[column.field] || [])[i];
        const columnGroup = columnGroupLookup[columnGroupId];
        headerGroupRow.addValue(columnGroup ? columnGroup.headerName || columnGroup.groupId : "");
      });
    }
  }
  const mainHeaderRow = new CSVRow({
    csvOptions,
    sanitizeCellValue
  });
  filteredColumns.forEach((column) => {
    mainHeaderRow.addValue(column.headerName || column.field);
  });
  headerRows.push(mainHeaderRow);
  const CSVHead = `${headerRows.map((row) => row.getRowString()).join("\r\n")}\r
`;
  return `${CSVHead}${CSVBody}`.trim();
}

// node_modules/@mui/x-data-grid/hooks/features/clipboard/useGridClipboard.js
function writeToClipboardPolyfill(data) {
  const span = document.createElement("span");
  span.style.whiteSpace = "pre";
  span.style.userSelect = "all";
  span.style.opacity = "0px";
  span.textContent = data;
  document.body.appendChild(span);
  const range2 = document.createRange();
  range2.selectNode(span);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range2);
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(span);
  }
}
function copyToClipboard(data) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(data).catch(() => {
      writeToClipboardPolyfill(data);
    });
  } else {
    writeToClipboardPolyfill(data);
  }
}
function hasNativeSelection(element) {
  var _a;
  if ((_a = window.getSelection()) == null ? void 0 : _a.toString()) {
    return true;
  }
  if (element && (element.selectionEnd || 0) - (element.selectionStart || 0) > 0) {
    return true;
  }
  return false;
}
var useGridClipboard = (apiRef, props) => {
  const ignoreValueFormatterProp = props.ignoreValueFormatterDuringExport;
  const ignoreValueFormatter = (typeof ignoreValueFormatterProp === "object" ? ignoreValueFormatterProp == null ? void 0 : ignoreValueFormatterProp.clipboardExport : ignoreValueFormatterProp) || false;
  const clipboardCopyCellDelimiter = props.clipboardCopyCellDelimiter;
  const handleCopy = React112.useCallback((event) => {
    if (!((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "c" && !event.shiftKey && !event.altKey)) {
      return;
    }
    if (hasNativeSelection(event.target)) {
      return;
    }
    let textToCopy = "";
    const selectedRows = apiRef.current.getSelectedRows();
    if (selectedRows.size > 0) {
      textToCopy = apiRef.current.getDataAsCsv({
        includeHeaders: false,
        delimiter: clipboardCopyCellDelimiter,
        shouldAppendQuotes: false,
        escapeFormulas: false
      });
    } else {
      const focusedCell = gridFocusCellSelector(apiRef);
      if (focusedCell) {
        const cellParams = apiRef.current.getCellParams(focusedCell.id, focusedCell.field);
        textToCopy = serializeCellValue(cellParams, {
          csvOptions: {
            delimiter: clipboardCopyCellDelimiter,
            shouldAppendQuotes: false,
            escapeFormulas: false
          },
          ignoreValueFormatter
        });
      }
    }
    textToCopy = apiRef.current.unstable_applyPipeProcessors("clipboardCopy", textToCopy);
    if (textToCopy) {
      copyToClipboard(textToCopy);
      apiRef.current.publishEvent("clipboardCopy", textToCopy);
    }
  }, [apiRef, ignoreValueFormatter, clipboardCopyCellDelimiter]);
  useGridNativeEventListener(apiRef, apiRef.current.rootElementRef, "keydown", handleCopy);
  useGridApiOptionHandler(apiRef, "clipboardCopy", props.onClipboardCopy);
};

// node_modules/@mui/x-data-grid/hooks/features/columnMenu/useGridColumnMenu.js
init_extends();
var React113 = __toESM(require_react());
var columnMenuStateInitializer = (state) => _extends({}, state, {
  columnMenu: {
    open: false
  }
});
var useGridColumnMenu = (apiRef) => {
  const logger = useGridLogger(apiRef, "useGridColumnMenu");
  const showColumnMenu = React113.useCallback((field) => {
    const columnMenuState = gridColumnMenuSelector(apiRef.current.state);
    const newState = {
      open: true,
      field
    };
    const shouldUpdate = newState.open !== columnMenuState.open || newState.field !== columnMenuState.field;
    if (shouldUpdate) {
      apiRef.current.setState((state) => {
        if (state.columnMenu.open && state.columnMenu.field === field) {
          return state;
        }
        logger.debug("Opening Column Menu");
        return _extends({}, state, {
          columnMenu: {
            open: true,
            field
          }
        });
      });
      apiRef.current.hidePreferences();
      apiRef.current.forceUpdate();
    }
  }, [apiRef, logger]);
  const hideColumnMenu = React113.useCallback(() => {
    const columnMenuState = gridColumnMenuSelector(apiRef.current.state);
    if (columnMenuState.field) {
      const columnLookup = gridColumnLookupSelector(apiRef);
      const columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef);
      const orderedFields = gridColumnFieldsSelector(apiRef);
      let fieldToFocus = columnMenuState.field;
      if (!columnLookup[fieldToFocus]) {
        fieldToFocus = orderedFields[0];
      }
      if (columnVisibilityModel[fieldToFocus] === false) {
        const visibleOrderedFields = orderedFields.filter((field) => {
          if (field === fieldToFocus) {
            return true;
          }
          return columnVisibilityModel[field] !== false;
        });
        const fieldIndex = visibleOrderedFields.indexOf(fieldToFocus);
        fieldToFocus = visibleOrderedFields[fieldIndex + 1] || visibleOrderedFields[fieldIndex - 1];
      }
      apiRef.current.setColumnHeaderFocus(fieldToFocus);
    }
    const newState = {
      open: false,
      field: void 0
    };
    const shouldUpdate = newState.open !== columnMenuState.open || newState.field !== columnMenuState.field;
    if (shouldUpdate) {
      apiRef.current.setState((state) => {
        logger.debug("Hiding Column Menu");
        return _extends({}, state, {
          columnMenu: newState
        });
      });
      apiRef.current.forceUpdate();
    }
  }, [apiRef, logger]);
  const toggleColumnMenu = React113.useCallback((field) => {
    logger.debug("Toggle Column Menu");
    const columnMenu = gridColumnMenuSelector(apiRef.current.state);
    if (!columnMenu.open || columnMenu.field !== field) {
      showColumnMenu(field);
    } else {
      hideColumnMenu();
    }
  }, [apiRef, logger, showColumnMenu, hideColumnMenu]);
  const columnMenuApi = {
    showColumnMenu,
    hideColumnMenu,
    toggleColumnMenu
  };
  useGridApiMethod(apiRef, columnMenuApi, "public");
  useGridApiEventHandler(apiRef, "columnResizeStart", hideColumnMenu);
  useGridApiEventHandler(apiRef, "virtualScrollerWheel", apiRef.current.hideColumnMenu);
  useGridApiEventHandler(apiRef, "virtualScrollerTouchMove", apiRef.current.hideColumnMenu);
};

// node_modules/@mui/x-data-grid/hooks/features/columns/useGridColumns.js
init_extends();
var React114 = __toESM(require_react());
var import_jsx_runtime81 = __toESM(require_jsx_runtime());
var columnsStateInitializer = (state, props, apiRef) => {
  var _a, _b, _c;
  const columnsState = createColumnsState({
    apiRef,
    columnsToUpsert: props.columns,
    initialState: (_a = props.initialState) == null ? void 0 : _a.columns,
    columnVisibilityModel: props.columnVisibilityModel ?? ((_c = (_b = props.initialState) == null ? void 0 : _b.columns) == null ? void 0 : _c.columnVisibilityModel) ?? {},
    keepOnlyColumnsToUpsert: true
  });
  return _extends({}, state, {
    columns: columnsState,
    // In pro/premium, this part of the state is defined. We give it an empty but defined value
    // for the community version.
    pinnedColumns: state.pinnedColumns ?? EMPTY_PINNED_COLUMN_FIELDS
  });
};
function useGridColumns(apiRef, props) {
  var _a, _b;
  const logger = useGridLogger(apiRef, "useGridColumns");
  const previousColumnsProp = React114.useRef(props.columns);
  apiRef.current.registerControlState({
    stateId: "visibleColumns",
    propModel: props.columnVisibilityModel,
    propOnChange: props.onColumnVisibilityModelChange,
    stateSelector: gridColumnVisibilityModelSelector,
    changeEvent: "columnVisibilityModelChange"
  });
  const setGridColumnsState = React114.useCallback((columnsState) => {
    var _a2, _b2;
    logger.debug("Updating columns state.");
    apiRef.current.setState(mergeColumnsState(columnsState));
    apiRef.current.publishEvent("columnsChange", columnsState.orderedFields);
    (_b2 = (_a2 = apiRef.current).updateRenderContext) == null ? void 0 : _b2.call(_a2);
    apiRef.current.forceUpdate();
  }, [logger, apiRef]);
  const getColumn = React114.useCallback((field) => gridColumnLookupSelector(apiRef)[field], [apiRef]);
  const getAllColumns = React114.useCallback(() => gridColumnDefinitionsSelector(apiRef), [apiRef]);
  const getVisibleColumns = React114.useCallback(() => gridVisibleColumnDefinitionsSelector(apiRef), [apiRef]);
  const getColumnIndex = React114.useCallback((field, useVisibleColumns = true) => {
    const columns = useVisibleColumns ? gridVisibleColumnDefinitionsSelector(apiRef) : gridColumnDefinitionsSelector(apiRef);
    return columns.findIndex((col) => col.field === field);
  }, [apiRef]);
  const getColumnPosition = React114.useCallback((field) => {
    const index = getColumnIndex(field);
    return gridColumnPositionsSelector(apiRef)[index];
  }, [apiRef, getColumnIndex]);
  const setColumnVisibilityModel = React114.useCallback((model) => {
    var _a2, _b2;
    const currentModel = gridColumnVisibilityModelSelector(apiRef);
    if (currentModel !== model) {
      apiRef.current.setState((state) => _extends({}, state, {
        columns: createColumnsState({
          apiRef,
          columnsToUpsert: [],
          initialState: void 0,
          columnVisibilityModel: model,
          keepOnlyColumnsToUpsert: false
        })
      }));
      (_b2 = (_a2 = apiRef.current).updateRenderContext) == null ? void 0 : _b2.call(_a2);
      apiRef.current.forceUpdate();
    }
  }, [apiRef]);
  const updateColumns = React114.useCallback((columns) => {
    const columnsState = createColumnsState({
      apiRef,
      columnsToUpsert: columns,
      initialState: void 0,
      keepOnlyColumnsToUpsert: false
    });
    setGridColumnsState(columnsState);
  }, [apiRef, setGridColumnsState]);
  const setColumnVisibility = React114.useCallback((field, isVisible) => {
    const columnVisibilityModel = gridColumnVisibilityModelSelector(apiRef);
    const isCurrentlyVisible = columnVisibilityModel[field] ?? true;
    if (isVisible !== isCurrentlyVisible) {
      const newModel = _extends({}, columnVisibilityModel, {
        [field]: isVisible
      });
      apiRef.current.setColumnVisibilityModel(newModel);
    }
  }, [apiRef]);
  const getColumnIndexRelativeToVisibleColumns = React114.useCallback((field) => {
    const allColumns = gridColumnFieldsSelector(apiRef);
    return allColumns.findIndex((col) => col === field);
  }, [apiRef]);
  const setColumnIndex = React114.useCallback((field, targetIndexPosition) => {
    const allColumns = gridColumnFieldsSelector(apiRef);
    const oldIndexPosition = getColumnIndexRelativeToVisibleColumns(field);
    if (oldIndexPosition === targetIndexPosition) {
      return;
    }
    logger.debug(`Moving column ${field} to index ${targetIndexPosition}`);
    const updatedColumns = [...allColumns];
    const fieldRemoved = updatedColumns.splice(oldIndexPosition, 1)[0];
    updatedColumns.splice(targetIndexPosition, 0, fieldRemoved);
    setGridColumnsState(_extends({}, gridColumnsStateSelector(apiRef.current.state), {
      orderedFields: updatedColumns
    }));
    const params = {
      column: apiRef.current.getColumn(field),
      targetIndex: apiRef.current.getColumnIndexRelativeToVisibleColumns(field),
      oldIndex: oldIndexPosition
    };
    apiRef.current.publishEvent("columnIndexChange", params);
  }, [apiRef, logger, setGridColumnsState, getColumnIndexRelativeToVisibleColumns]);
  const setColumnWidth = React114.useCallback((field, width) => {
    logger.debug(`Updating column ${field} width to ${width}`);
    const columnsState = gridColumnsStateSelector(apiRef.current.state);
    const column = columnsState.lookup[field];
    const newColumn = _extends({}, column, {
      width,
      hasBeenResized: true
    });
    setGridColumnsState(hydrateColumnsWidth(_extends({}, columnsState, {
      lookup: _extends({}, columnsState.lookup, {
        [field]: newColumn
      })
    }), apiRef.current.getRootDimensions()));
    apiRef.current.publishEvent("columnWidthChange", {
      element: apiRef.current.getColumnHeaderElement(field),
      colDef: newColumn,
      width
    });
  }, [apiRef, logger, setGridColumnsState]);
  const columnApi = {
    getColumn,
    getAllColumns,
    getColumnIndex,
    getColumnPosition,
    getVisibleColumns,
    getColumnIndexRelativeToVisibleColumns,
    updateColumns,
    setColumnVisibilityModel,
    setColumnVisibility,
    setColumnWidth
  };
  const columnReorderApi = {
    setColumnIndex
  };
  useGridApiMethod(apiRef, columnApi, "public");
  useGridApiMethod(apiRef, columnReorderApi, props.signature === GridSignature.DataGrid ? "private" : "public");
  const stateExportPreProcessing = React114.useCallback((prevState, context) => {
    var _a2, _b2;
    const columnsStateToExport = {};
    const columnVisibilityModelToExport = gridColumnVisibilityModelSelector(apiRef);
    const shouldExportColumnVisibilityModel = (
      // Always export if the `exportOnlyDirtyModels` property is not activated
      !context.exportOnlyDirtyModels || // Always export if the model is controlled
      props.columnVisibilityModel != null || // Always export if the model has been initialized
      // TODO v6 Do a nullish check instead to export even if the initial model equals "{}"
      Object.keys(((_b2 = (_a2 = props.initialState) == null ? void 0 : _a2.columns) == null ? void 0 : _b2.columnVisibilityModel) ?? {}).length > 0 || // Always export if the model is not empty
      Object.keys(columnVisibilityModelToExport).length > 0
    );
    if (shouldExportColumnVisibilityModel) {
      columnsStateToExport.columnVisibilityModel = columnVisibilityModelToExport;
    }
    columnsStateToExport.orderedFields = gridColumnFieldsSelector(apiRef);
    const columns = gridColumnDefinitionsSelector(apiRef);
    const dimensions = {};
    columns.forEach((colDef) => {
      if (colDef.hasBeenResized) {
        const colDefDimensions = {};
        COLUMNS_DIMENSION_PROPERTIES.forEach((propertyName) => {
          let propertyValue = colDef[propertyName];
          if (propertyValue === Infinity) {
            propertyValue = -1;
          }
          colDefDimensions[propertyName] = propertyValue;
        });
        dimensions[colDef.field] = colDefDimensions;
      }
    });
    if (Object.keys(dimensions).length > 0) {
      columnsStateToExport.dimensions = dimensions;
    }
    return _extends({}, prevState, {
      columns: columnsStateToExport
    });
  }, [apiRef, props.columnVisibilityModel, (_a = props.initialState) == null ? void 0 : _a.columns]);
  const stateRestorePreProcessing = React114.useCallback((params, context) => {
    var _a2;
    const columnVisibilityModelToImport = (_a2 = context.stateToRestore.columns) == null ? void 0 : _a2.columnVisibilityModel;
    const initialState = context.stateToRestore.columns;
    if (columnVisibilityModelToImport == null && initialState == null) {
      return params;
    }
    const columnsState = createColumnsState({
      apiRef,
      columnsToUpsert: [],
      initialState,
      columnVisibilityModel: columnVisibilityModelToImport,
      keepOnlyColumnsToUpsert: false
    });
    apiRef.current.setState(mergeColumnsState(columnsState));
    if (initialState != null) {
      apiRef.current.publishEvent("columnsChange", columnsState.orderedFields);
    }
    return params;
  }, [apiRef]);
  const preferencePanelPreProcessing = React114.useCallback((initialValue, value) => {
    var _a2;
    if (value === GridPreferencePanelsValue.columns) {
      const ColumnsPanel = props.slots.columnsPanel;
      return (0, import_jsx_runtime81.jsx)(ColumnsPanel, _extends({}, (_a2 = props.slotProps) == null ? void 0 : _a2.columnsPanel));
    }
    return initialValue;
  }, [props.slots.columnsPanel, (_b = props.slotProps) == null ? void 0 : _b.columnsPanel]);
  const addColumnMenuItems = React114.useCallback((columnMenuItems) => {
    if (props.disableColumnSelector) {
      return columnMenuItems;
    }
    return [...columnMenuItems, "columnMenuColumnsItem"];
  }, [props.disableColumnSelector]);
  useGridRegisterPipeProcessor(apiRef, "columnMenu", addColumnMenuItems);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  useGridRegisterPipeProcessor(apiRef, "preferencePanel", preferencePanelPreProcessing);
  const prevInnerWidth = React114.useRef(null);
  const handleGridSizeChange = (viewportInnerSize) => {
    if (prevInnerWidth.current !== viewportInnerSize.width) {
      prevInnerWidth.current = viewportInnerSize.width;
      setGridColumnsState(hydrateColumnsWidth(gridColumnsStateSelector(apiRef.current.state), apiRef.current.getRootDimensions()));
    }
  };
  useGridApiEventHandler(apiRef, "viewportInnerSizeChange", handleGridSizeChange);
  const hydrateColumns = React114.useCallback(() => {
    logger.info(`Columns pipe processing have changed, regenerating the columns`);
    const columnsState = createColumnsState({
      apiRef,
      columnsToUpsert: [],
      initialState: void 0,
      keepOnlyColumnsToUpsert: false
    });
    setGridColumnsState(columnsState);
  }, [apiRef, logger, setGridColumnsState]);
  useGridRegisterPipeApplier(apiRef, "hydrateColumns", hydrateColumns);
  const isFirstRender = React114.useRef(true);
  React114.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    logger.info(`GridColumns have changed, new length ${props.columns.length}`);
    if (previousColumnsProp.current === props.columns) {
      return;
    }
    const columnsState = createColumnsState({
      apiRef,
      initialState: void 0,
      // If the user provides a model, we don't want to set it in the state here because it has it's dedicated `useEffect` which calls `setColumnVisibilityModel`
      columnsToUpsert: props.columns,
      keepOnlyColumnsToUpsert: true
    });
    previousColumnsProp.current = props.columns;
    setGridColumnsState(columnsState);
  }, [logger, apiRef, setGridColumnsState, props.columns]);
  React114.useEffect(() => {
    if (props.columnVisibilityModel !== void 0) {
      apiRef.current.setColumnVisibilityModel(props.columnVisibilityModel);
    }
  }, [apiRef, logger, props.columnVisibilityModel]);
}
function mergeColumnsState(columnsState) {
  return (state) => _extends({}, state, {
    columns: columnsState
  });
}

// node_modules/@mui/x-data-grid/hooks/features/density/useGridDensity.js
init_extends();
var React115 = __toESM(require_react());
init_useEventCallback();
var densityStateInitializer = (state, props) => {
  var _a;
  return _extends({}, state, {
    density: ((_a = props.initialState) == null ? void 0 : _a.density) ?? props.density ?? "standard"
  });
};
var useGridDensity = (apiRef, props) => {
  var _a;
  const logger = useGridLogger(apiRef, "useDensity");
  apiRef.current.registerControlState({
    stateId: "density",
    propModel: props.density,
    propOnChange: props.onDensityChange,
    stateSelector: gridDensitySelector,
    changeEvent: "densityChange"
  });
  const setDensity = useEventCallback_default((newDensity) => {
    const currentDensity = gridDensitySelector(apiRef.current.state);
    if (currentDensity === newDensity) {
      return;
    }
    logger.debug(`Set grid density to ${newDensity}`);
    apiRef.current.setState((state) => _extends({}, state, {
      density: newDensity
    }));
  });
  const densityApi = {
    setDensity
  };
  useGridApiMethod(apiRef, densityApi, "public");
  const stateExportPreProcessing = React115.useCallback((prevState, context) => {
    var _a2;
    const exportedDensity = gridDensitySelector(apiRef.current.state);
    const shouldExportRowCount = (
      // Always export if the `exportOnlyDirtyModels` property is not activated
      !context.exportOnlyDirtyModels || // Always export if the `density` is controlled
      props.density != null || // Always export if the `density` has been initialized
      ((_a2 = props.initialState) == null ? void 0 : _a2.density) != null
    );
    if (!shouldExportRowCount) {
      return prevState;
    }
    return _extends({}, prevState, {
      density: exportedDensity
    });
  }, [apiRef, props.density, (_a = props.initialState) == null ? void 0 : _a.density]);
  const stateRestorePreProcessing = React115.useCallback((params, context) => {
    var _a2;
    const restoredDensity = ((_a2 = context.stateToRestore) == null ? void 0 : _a2.density) ? context.stateToRestore.density : gridDensitySelector(apiRef.current.state);
    apiRef.current.setState((state) => _extends({}, state, {
      density: restoredDensity
    }));
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  React115.useEffect(() => {
    if (props.density) {
      apiRef.current.setDensity(props.density);
    }
  }, [apiRef, props.density]);
};

// node_modules/@mui/x-data-grid/hooks/features/export/useGridCsvExport.js
var React116 = __toESM(require_react());

// node_modules/@mui/x-data-grid/utils/exportAs.js
function exportAs(blob, extension = "csv", filename = document.title || "untitled") {
  const fullName = `${filename}.${extension}`;
  if ("download" in HTMLAnchorElement.prototype) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fullName;
    a.click();
    setTimeout(() => {
      URL.revokeObjectURL(url);
    });
    return;
  }
  throw new Error("MUI X: exportAs not supported.");
}

// node_modules/@mui/x-data-grid/hooks/features/export/utils.js
var getColumnsToExport = ({
  apiRef,
  options
}) => {
  const columns = gridColumnDefinitionsSelector(apiRef);
  if (options.fields) {
    return options.fields.reduce((currentColumns, field) => {
      const column = columns.find((col) => col.field === field);
      if (column) {
        currentColumns.push(column);
      }
      return currentColumns;
    }, []);
  }
  const validColumns = options.allColumns ? columns : gridVisibleColumnDefinitionsSelector(apiRef);
  return validColumns.filter((column) => !column.disableExport);
};
var defaultGetRowsToExport = ({
  apiRef
}) => {
  var _a, _b;
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const rowTree = gridRowTreeSelector(apiRef);
  const selectedRows = apiRef.current.getSelectedRows();
  const bodyRows = filteredSortedRowIds.filter((id) => rowTree[id].type !== "footer");
  const pinnedRows = gridPinnedRowsSelector(apiRef);
  const topPinnedRowsIds = ((_a = pinnedRows == null ? void 0 : pinnedRows.top) == null ? void 0 : _a.map((row) => row.id)) || [];
  const bottomPinnedRowsIds = ((_b = pinnedRows == null ? void 0 : pinnedRows.bottom) == null ? void 0 : _b.map((row) => row.id)) || [];
  bodyRows.unshift(...topPinnedRowsIds);
  bodyRows.push(...bottomPinnedRowsIds);
  if (selectedRows.size > 0) {
    return bodyRows.filter((id) => selectedRows.has(id));
  }
  return bodyRows;
};

// node_modules/@mui/x-data-grid/hooks/features/export/useGridCsvExport.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime());
var useGridCsvExport = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridCsvExport");
  const ignoreValueFormatterProp = props.ignoreValueFormatterDuringExport;
  const ignoreValueFormatter = (typeof ignoreValueFormatterProp === "object" ? ignoreValueFormatterProp == null ? void 0 : ignoreValueFormatterProp.csvExport : ignoreValueFormatterProp) || false;
  const getDataAsCsv = React116.useCallback((options = {}) => {
    logger.debug(`Get data as CSV`);
    const exportedColumns = getColumnsToExport({
      apiRef,
      options
    });
    const getRowsToExport = options.getRowsToExport ?? defaultGetRowsToExport;
    const exportedRowIds = getRowsToExport({
      apiRef
    });
    return buildCSV({
      columns: exportedColumns,
      rowIds: exportedRowIds,
      csvOptions: {
        delimiter: options.delimiter || ",",
        shouldAppendQuotes: options.shouldAppendQuotes ?? true,
        includeHeaders: options.includeHeaders ?? true,
        includeColumnGroupsHeaders: options.includeColumnGroupsHeaders ?? true,
        escapeFormulas: options.escapeFormulas ?? true
      },
      ignoreValueFormatter,
      apiRef
    });
  }, [logger, apiRef, ignoreValueFormatter]);
  const exportDataAsCsv = React116.useCallback((options) => {
    logger.debug(`Export data as CSV`);
    const csv = getDataAsCsv(options);
    const blob = new Blob([(options == null ? void 0 : options.utf8WithBom) ? new Uint8Array([239, 187, 191]) : "", csv], {
      type: "text/csv"
    });
    exportAs(blob, "csv", options == null ? void 0 : options.fileName);
  }, [logger, getDataAsCsv]);
  const csvExportApi = {
    getDataAsCsv,
    exportDataAsCsv
  };
  useGridApiMethod(apiRef, csvExportApi, "public");
  const addExportMenuButtons = React116.useCallback((initialValue, options) => {
    var _a;
    if ((_a = options.csvOptions) == null ? void 0 : _a.disableToolbarButton) {
      return initialValue;
    }
    return [...initialValue, {
      component: (0, import_jsx_runtime82.jsx)(GridCsvExportMenuItem, {
        options: options.csvOptions
      }),
      componentName: "csvExport"
    }];
  }, []);
  useGridRegisterPipeProcessor(apiRef, "exportMenu", addExportMenuButtons);
};

// node_modules/@mui/x-data-grid/hooks/features/export/useGridPrintExport.js
init_extends();
var React118 = __toESM(require_react());
init_esm();

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPaginationModel.js
init_extends();
var React117 = __toESM(require_react());
var getDerivedPaginationModel = (paginationState, signature, paginationModelProp) => {
  let paginationModel = paginationState.paginationModel;
  const rowCount = paginationState.rowCount;
  const pageSize = (paginationModelProp == null ? void 0 : paginationModelProp.pageSize) ?? paginationModel.pageSize;
  const page = (paginationModelProp == null ? void 0 : paginationModelProp.page) ?? paginationModel.page;
  const pageCount = getPageCount(rowCount, pageSize, page);
  if (paginationModelProp && ((paginationModelProp == null ? void 0 : paginationModelProp.page) !== paginationModel.page || (paginationModelProp == null ? void 0 : paginationModelProp.pageSize) !== paginationModel.pageSize)) {
    paginationModel = paginationModelProp;
  }
  const validPage = getValidPage(paginationModel.page, pageCount);
  if (validPage !== paginationModel.page) {
    paginationModel = _extends({}, paginationModel, {
      page: validPage
    });
  }
  throwIfPageSizeExceedsTheLimit(paginationModel.pageSize, signature);
  return paginationModel;
};
var useGridPaginationModel = (apiRef, props) => {
  var _a, _b;
  const logger = useGridLogger(apiRef, "useGridPaginationModel");
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const rowHeight = Math.floor(props.rowHeight * densityFactor);
  apiRef.current.registerControlState({
    stateId: "paginationModel",
    propModel: props.paginationModel,
    propOnChange: props.onPaginationModelChange,
    stateSelector: gridPaginationModelSelector,
    changeEvent: "paginationModelChange"
  });
  const setPage = React117.useCallback((page) => {
    const currentModel = gridPaginationModelSelector(apiRef);
    if (page === currentModel.page) {
      return;
    }
    logger.debug(`Setting page to ${page}`);
    apiRef.current.setPaginationModel({
      page,
      pageSize: currentModel.pageSize
    });
  }, [apiRef, logger]);
  const setPageSize = React117.useCallback((pageSize) => {
    const currentModel = gridPaginationModelSelector(apiRef);
    if (pageSize === currentModel.pageSize) {
      return;
    }
    logger.debug(`Setting page size to ${pageSize}`);
    apiRef.current.setPaginationModel({
      pageSize,
      page: currentModel.page
    });
  }, [apiRef, logger]);
  const setPaginationModel = React117.useCallback((paginationModel) => {
    const currentModel = gridPaginationModelSelector(apiRef);
    if (paginationModel === currentModel) {
      return;
    }
    logger.debug("Setting 'paginationModel' to", paginationModel);
    apiRef.current.setState((state) => _extends({}, state, {
      pagination: _extends({}, state.pagination, {
        paginationModel: getDerivedPaginationModel(state.pagination, props.signature, paginationModel)
      })
    }));
  }, [apiRef, logger, props.signature]);
  const paginationModelApi = {
    setPage,
    setPageSize,
    setPaginationModel
  };
  useGridApiMethod(apiRef, paginationModelApi, "public");
  const stateExportPreProcessing = React117.useCallback((prevState, context) => {
    var _a2, _b2;
    const paginationModel = gridPaginationModelSelector(apiRef);
    const shouldExportPaginationModel = (
      // Always export if the `exportOnlyDirtyModels` property is not activated
      !context.exportOnlyDirtyModels || // Always export if the `paginationModel` is controlled
      props.paginationModel != null || // Always export if the `paginationModel` has been initialized
      ((_b2 = (_a2 = props.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.paginationModel) != null || // Export if `page` or `pageSize` is not equal to the default value
      paginationModel.page !== 0 && paginationModel.pageSize !== defaultPageSize(props.autoPageSize)
    );
    if (!shouldExportPaginationModel) {
      return prevState;
    }
    return _extends({}, prevState, {
      pagination: _extends({}, prevState.pagination, {
        paginationModel
      })
    });
  }, [apiRef, props.paginationModel, (_b = (_a = props.initialState) == null ? void 0 : _a.pagination) == null ? void 0 : _b.paginationModel, props.autoPageSize]);
  const stateRestorePreProcessing = React117.useCallback((params, context) => {
    var _a2, _b2;
    const paginationModel = ((_a2 = context.stateToRestore.pagination) == null ? void 0 : _a2.paginationModel) ? _extends({}, getDefaultGridPaginationModel(props.autoPageSize), (_b2 = context.stateToRestore.pagination) == null ? void 0 : _b2.paginationModel) : gridPaginationModelSelector(apiRef);
    apiRef.current.setState((state) => _extends({}, state, {
      pagination: _extends({}, state.pagination, {
        paginationModel: getDerivedPaginationModel(state.pagination, props.signature, paginationModel)
      })
    }));
    return params;
  }, [apiRef, props.autoPageSize, props.signature]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  const handlePaginationModelChange = () => {
    var _a2;
    const paginationModel = gridPaginationModelSelector(apiRef);
    if ((_a2 = apiRef.current.virtualScrollerRef) == null ? void 0 : _a2.current) {
      apiRef.current.scrollToIndexes({
        rowIndex: paginationModel.page * paginationModel.pageSize
      });
    }
  };
  const handleUpdateAutoPageSize = React117.useCallback(() => {
    if (!props.autoPageSize) {
      return;
    }
    const dimensions = apiRef.current.getRootDimensions();
    const maximumPageSizeWithoutScrollBar = Math.floor(dimensions.viewportInnerSize.height / rowHeight);
    apiRef.current.setPageSize(maximumPageSizeWithoutScrollBar);
  }, [apiRef, props.autoPageSize, rowHeight]);
  const handleRowCountChange = React117.useCallback((newRowCount) => {
    if (newRowCount == null) {
      return;
    }
    const paginationModel = gridPaginationModelSelector(apiRef);
    const pageCount = gridPageCountSelector(apiRef);
    if (paginationModel.page > pageCount - 1) {
      apiRef.current.setPage(Math.max(0, pageCount - 1));
    }
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "viewportInnerSizeChange", handleUpdateAutoPageSize);
  useGridApiEventHandler(apiRef, "paginationModelChange", handlePaginationModelChange);
  useGridApiEventHandler(apiRef, "rowCountChange", handleRowCountChange);
  React117.useEffect(() => {
    apiRef.current.setState((state) => _extends({}, state, {
      pagination: _extends({}, state.pagination, {
        paginationModel: getDerivedPaginationModel(state.pagination, props.signature, props.paginationModel)
      })
    }));
  }, [apiRef, props.paginationModel, props.paginationMode, props.signature]);
  React117.useEffect(handleUpdateAutoPageSize, [handleUpdateAutoPageSize]);
};

// node_modules/@mui/x-data-grid/hooks/features/export/useGridPrintExport.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime());
function raf() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      resolve();
    });
  });
}
function buildPrintWindow(title) {
  const iframeEl = document.createElement("iframe");
  iframeEl.style.position = "absolute";
  iframeEl.style.width = "0px";
  iframeEl.style.height = "0px";
  iframeEl.title = title || document.title;
  return iframeEl;
}
var useGridPrintExport = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridPrintExport");
  const doc = React118.useRef(null);
  const previousGridState = React118.useRef(null);
  const previousColumnVisibility = React118.useRef({});
  const previousRows = React118.useRef([]);
  const previousVirtualizationState = React118.useRef();
  React118.useEffect(() => {
    doc.current = ownerDocument(apiRef.current.rootElementRef.current);
  }, [apiRef]);
  const updateGridColumnsForPrint = React118.useCallback((fields, allColumns, includeCheckboxes) => new Promise((resolve) => {
    const exportedColumnFields = getColumnsToExport({
      apiRef,
      options: {
        fields,
        allColumns
      }
    }).map((column) => column.field);
    const columns = gridColumnDefinitionsSelector(apiRef);
    const newColumnVisibilityModel = {};
    columns.forEach((column) => {
      newColumnVisibilityModel[column.field] = exportedColumnFields.includes(column.field);
    });
    if (includeCheckboxes) {
      newColumnVisibilityModel[GRID_CHECKBOX_SELECTION_COL_DEF.field] = true;
    }
    apiRef.current.setColumnVisibilityModel(newColumnVisibilityModel);
    resolve();
  }), [apiRef]);
  const updateGridRowsForPrint = React118.useCallback((getRowsToExport) => {
    const rowsToExportIds = getRowsToExport({
      apiRef
    });
    const newRows = rowsToExportIds.reduce((acc, id) => {
      const row = apiRef.current.getRow(id);
      if (!row[GRID_ID_AUTOGENERATED]) {
        acc.push(row);
      }
      return acc;
    }, []);
    apiRef.current.setRows(newRows);
  }, [apiRef]);
  const handlePrintWindowLoad = React118.useCallback((printWindow, options) => {
    var _a, _b, _c, _d;
    const normalizeOptions = _extends({
      copyStyles: true,
      hideToolbar: false,
      hideFooter: false,
      includeCheckboxes: false
    }, options);
    const printDoc = printWindow.contentDocument;
    if (!printDoc) {
      return;
    }
    const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
    const gridRootElement = apiRef.current.rootElementRef.current;
    const gridClone = gridRootElement.cloneNode(true);
    const gridMain = gridClone.querySelector(`.${gridClasses.main}`);
    gridMain.style.overflow = "visible";
    gridClone.style.contain = "size";
    let gridToolbarElementHeight = ((_a = gridRootElement.querySelector(`.${gridClasses.toolbarContainer}`)) == null ? void 0 : _a.offsetHeight) || 0;
    let gridFooterElementHeight = ((_b = gridRootElement.querySelector(`.${gridClasses.footerContainer}`)) == null ? void 0 : _b.offsetHeight) || 0;
    if (normalizeOptions.hideToolbar) {
      (_c = gridClone.querySelector(`.${gridClasses.toolbarContainer}`)) == null ? void 0 : _c.remove();
      gridToolbarElementHeight = 0;
    }
    if (normalizeOptions.hideFooter) {
      (_d = gridClone.querySelector(`.${gridClasses.footerContainer}`)) == null ? void 0 : _d.remove();
      gridFooterElementHeight = 0;
    }
    const computedTotalHeight = rowsMeta.currentPageTotalHeight + getTotalHeaderHeight(apiRef, props) + gridToolbarElementHeight + gridFooterElementHeight;
    gridClone.style.height = `${computedTotalHeight}px`;
    gridClone.style.boxSizing = "content-box";
    const gridFooterElement = gridClone.querySelector(`.${gridClasses.footerContainer}`);
    gridFooterElement.style.position = "absolute";
    gridFooterElement.style.width = "100%";
    gridFooterElement.style.top = `${computedTotalHeight - gridFooterElementHeight}px`;
    const container = document.createElement("div");
    container.appendChild(gridClone);
    printDoc.body.style.marginTop = "0px";
    printDoc.body.innerHTML = container.innerHTML;
    const defaultPageStyle = typeof normalizeOptions.pageStyle === "function" ? normalizeOptions.pageStyle() : normalizeOptions.pageStyle;
    if (typeof defaultPageStyle === "string") {
      const styleElement = printDoc.createElement("style");
      styleElement.appendChild(printDoc.createTextNode(defaultPageStyle));
      printDoc.head.appendChild(styleElement);
    }
    if (normalizeOptions.bodyClassName) {
      printDoc.body.classList.add(...normalizeOptions.bodyClassName.split(" "));
    }
    const stylesheetLoadPromises = [];
    if (normalizeOptions.copyStyles) {
      const rootCandidate = gridRootElement.getRootNode();
      const root = rootCandidate.constructor.name === "ShadowRoot" ? rootCandidate : doc.current;
      const headStyleElements = root.querySelectorAll("style, link[rel='stylesheet']");
      for (let i = 0; i < headStyleElements.length; i += 1) {
        const node = headStyleElements[i];
        if (node.tagName === "STYLE") {
          const newHeadStyleElements = printDoc.createElement(node.tagName);
          const sheet = node.sheet;
          if (sheet) {
            let styleCSS = "";
            for (let j = 0; j < sheet.cssRules.length; j += 1) {
              if (typeof sheet.cssRules[j].cssText === "string") {
                styleCSS += `${sheet.cssRules[j].cssText}\r
`;
              }
            }
            newHeadStyleElements.appendChild(printDoc.createTextNode(styleCSS));
            printDoc.head.appendChild(newHeadStyleElements);
          }
        } else if (node.getAttribute("href")) {
          const newHeadStyleElements = printDoc.createElement(node.tagName);
          for (let j = 0; j < node.attributes.length; j += 1) {
            const attr = node.attributes[j];
            if (attr) {
              newHeadStyleElements.setAttribute(attr.nodeName, attr.nodeValue || "");
            }
          }
          stylesheetLoadPromises.push(new Promise((resolve) => {
            newHeadStyleElements.addEventListener("load", () => resolve());
          }));
          printDoc.head.appendChild(newHeadStyleElements);
        }
      }
    }
    if (true) {
      Promise.all(stylesheetLoadPromises).then(() => {
        printWindow.contentWindow.print();
      });
    }
  }, [apiRef, doc, props]);
  const handlePrintWindowAfterPrint = React118.useCallback((printWindow) => {
    var _a, _b;
    doc.current.body.removeChild(printWindow);
    apiRef.current.restoreState(previousGridState.current || {});
    if (!((_b = (_a = previousGridState.current) == null ? void 0 : _a.columns) == null ? void 0 : _b.columnVisibilityModel)) {
      apiRef.current.setColumnVisibilityModel(previousColumnVisibility.current);
    }
    apiRef.current.setState((state) => _extends({}, state, {
      virtualization: previousVirtualizationState.current
    }));
    apiRef.current.setRows(previousRows.current);
    previousGridState.current = null;
    previousColumnVisibility.current = {};
    previousRows.current = [];
  }, [apiRef]);
  const exportDataAsPrint = React118.useCallback(async (options) => {
    logger.debug(`Export data as Print`);
    if (!apiRef.current.rootElementRef.current) {
      throw new Error("MUI X: No grid root element available.");
    }
    previousGridState.current = apiRef.current.exportState();
    previousColumnVisibility.current = gridColumnVisibilityModelSelector(apiRef);
    previousRows.current = apiRef.current.getSortedRows().filter((row) => !row[GRID_ID_AUTOGENERATED]);
    if (props.pagination) {
      const visibleRowCount = gridExpandedRowCountSelector(apiRef);
      const paginationModel = {
        page: 0,
        pageSize: visibleRowCount
      };
      apiRef.current.setState((state) => _extends({}, state, {
        pagination: _extends({}, state.pagination, {
          paginationModel: getDerivedPaginationModel(
            state.pagination,
            // Using signature `DataGridPro` to allow more than 100 rows in the print export
            "DataGridPro",
            paginationModel
          )
        })
      }));
    }
    previousVirtualizationState.current = apiRef.current.state.virtualization;
    apiRef.current.setState((state) => _extends({}, state, {
      virtualization: _extends({}, state.virtualization, {
        enabled: false,
        enabledForColumns: false
      })
    }));
    await updateGridColumnsForPrint(options == null ? void 0 : options.fields, options == null ? void 0 : options.allColumns, options == null ? void 0 : options.includeCheckboxes);
    updateGridRowsForPrint((options == null ? void 0 : options.getRowsToExport) ?? defaultGetRowsToExport);
    await raf();
    const printWindow = buildPrintWindow(options == null ? void 0 : options.fileName);
    if (false) {
      doc.current.body.appendChild(printWindow);
      handlePrintWindowLoad(printWindow, options);
      handlePrintWindowAfterPrint(printWindow);
    } else {
      printWindow.onload = () => {
        handlePrintWindowLoad(printWindow, options);
        const mediaQueryList = printWindow.contentWindow.matchMedia("print");
        mediaQueryList.addEventListener("change", (mql) => {
          const isAfterPrint = mql.matches === false;
          if (isAfterPrint) {
            handlePrintWindowAfterPrint(printWindow);
          }
        });
      };
      doc.current.body.appendChild(printWindow);
    }
  }, [props, logger, apiRef, handlePrintWindowLoad, handlePrintWindowAfterPrint, updateGridColumnsForPrint, updateGridRowsForPrint]);
  const printExportApi = {
    exportDataAsPrint
  };
  useGridApiMethod(apiRef, printExportApi, "public");
  const addExportMenuButtons = React118.useCallback((initialValue, options) => {
    var _a;
    if ((_a = options.printOptions) == null ? void 0 : _a.disableToolbarButton) {
      return initialValue;
    }
    return [...initialValue, {
      component: (0, import_jsx_runtime83.jsx)(GridPrintExportMenuItem, {
        options: options.printOptions
      }),
      componentName: "printExport"
    }];
  }, []);
  useGridRegisterPipeProcessor(apiRef, "exportMenu", addExportMenuButtons);
};

// node_modules/@mui/x-data-grid/hooks/features/filter/useGridFilter.js
init_extends();
var React119 = __toESM(require_react());
init_esm();
var import_jsx_runtime84 = __toESM(require_jsx_runtime());
var filterStateInitializer = (state, props, apiRef) => {
  var _a, _b;
  const filterModel = props.filterModel ?? ((_b = (_a = props.initialState) == null ? void 0 : _a.filter) == null ? void 0 : _b.filterModel) ?? getDefaultGridFilterModel();
  return _extends({}, state, {
    filter: {
      filterModel: sanitizeFilterModel(filterModel, props.disableMultipleColumnsFiltering, apiRef),
      filteredRowsLookup: {},
      filteredDescendantCountLookup: {}
    },
    visibleRowsLookup: {}
  });
};
var getVisibleRowsLookup = (params) => {
  return params.filteredRowsLookup;
};
function getVisibleRowsLookupState(apiRef, state) {
  return apiRef.current.applyStrategyProcessor("visibleRowsLookupCreation", {
    tree: state.rows.tree,
    filteredRowsLookup: state.filter.filteredRowsLookup
  });
}
function createMemoizedValues() {
  return defaultMemoize(Object.values);
}
var useGridFilter = (apiRef, props) => {
  var _a, _b, _c;
  const logger = useGridLogger(apiRef, "useGridFilter");
  apiRef.current.registerControlState({
    stateId: "filter",
    propModel: props.filterModel,
    propOnChange: props.onFilterModelChange,
    stateSelector: gridFilterModelSelector,
    changeEvent: "filterModelChange"
  });
  const updateFilteredRows = React119.useCallback(() => {
    apiRef.current.setState((state) => {
      const filterModel = gridFilterModelSelector(state, apiRef.current.instanceId);
      const filterState = apiRef.current.getFilterState(filterModel);
      const newState = _extends({}, state, {
        filter: _extends({}, state.filter, filterState)
      });
      const visibleRowsLookupState = getVisibleRowsLookupState(apiRef, newState);
      return _extends({}, newState, {
        visibleRowsLookup: visibleRowsLookupState
      });
    });
    apiRef.current.publishEvent("filteredRowsSet");
  }, [apiRef]);
  const addColumnMenuItem = React119.useCallback((columnMenuItems, colDef) => {
    if (colDef == null || colDef.filterable === false || props.disableColumnFilter) {
      return columnMenuItems;
    }
    return [...columnMenuItems, "columnMenuFilterItem"];
  }, [props.disableColumnFilter]);
  const applyFilters = React119.useCallback(() => {
    updateFilteredRows();
    apiRef.current.forceUpdate();
  }, [apiRef, updateFilteredRows]);
  const upsertFilterItem = React119.useCallback((item) => {
    const filterModel = gridFilterModelSelector(apiRef);
    const items = [...filterModel.items];
    const itemIndex = items.findIndex((filterItem) => filterItem.id === item.id);
    if (itemIndex === -1) {
      items.push(item);
    } else {
      items[itemIndex] = item;
    }
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      items
    }), "upsertFilterItem");
  }, [apiRef]);
  const upsertFilterItems = React119.useCallback((items) => {
    const filterModel = gridFilterModelSelector(apiRef);
    const existingItems = [...filterModel.items];
    items.forEach((item) => {
      const itemIndex = existingItems.findIndex((filterItem) => filterItem.id === item.id);
      if (itemIndex === -1) {
        existingItems.push(item);
      } else {
        existingItems[itemIndex] = item;
      }
    });
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      items: existingItems
    }), "upsertFilterItems");
  }, [apiRef]);
  const deleteFilterItem = React119.useCallback((itemToDelete) => {
    const filterModel = gridFilterModelSelector(apiRef);
    const items = filterModel.items.filter((item) => item.id !== itemToDelete.id);
    if (items.length === filterModel.items.length) {
      return;
    }
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      items
    }), "deleteFilterItem");
  }, [apiRef]);
  const showFilterPanel = React119.useCallback((targetColumnField, panelId, labelId) => {
    logger.debug("Displaying filter panel");
    if (targetColumnField) {
      const filterModel = gridFilterModelSelector(apiRef);
      const filterItemsWithValue = filterModel.items.filter((item) => {
        var _a2;
        if (item.value !== void 0) {
          if (Array.isArray(item.value) && item.value.length === 0) {
            return false;
          }
          return true;
        }
        const column = apiRef.current.getColumn(item.field);
        const filterOperator = (_a2 = column.filterOperators) == null ? void 0 : _a2.find((operator) => operator.value === item.operator);
        const requiresFilterValue = typeof (filterOperator == null ? void 0 : filterOperator.requiresFilterValue) === "undefined" ? true : filterOperator == null ? void 0 : filterOperator.requiresFilterValue;
        if (requiresFilterValue) {
          return false;
        }
        return true;
      });
      let newFilterItems;
      const filterItemOnTarget = filterItemsWithValue.find((item) => item.field === targetColumnField);
      const targetColumn = apiRef.current.getColumn(targetColumnField);
      if (filterItemOnTarget) {
        newFilterItems = filterItemsWithValue;
      } else if (props.disableMultipleColumnsFiltering) {
        newFilterItems = [cleanFilterItem({
          field: targetColumnField,
          operator: targetColumn.filterOperators[0].value
        }, apiRef)];
      } else {
        newFilterItems = [...filterItemsWithValue, cleanFilterItem({
          field: targetColumnField,
          operator: targetColumn.filterOperators[0].value
        }, apiRef)];
      }
      apiRef.current.setFilterModel(_extends({}, filterModel, {
        items: newFilterItems
      }));
    }
    apiRef.current.showPreferences(GridPreferencePanelsValue.filters, panelId, labelId);
  }, [apiRef, logger, props.disableMultipleColumnsFiltering]);
  const hideFilterPanel = React119.useCallback(() => {
    logger.debug("Hiding filter panel");
    apiRef.current.hidePreferences();
  }, [apiRef, logger]);
  const setFilterLogicOperator = React119.useCallback((logicOperator) => {
    const filterModel = gridFilterModelSelector(apiRef);
    if (filterModel.logicOperator === logicOperator) {
      return;
    }
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      logicOperator
    }), "changeLogicOperator");
  }, [apiRef]);
  const setQuickFilterValues = React119.useCallback((values) => {
    const filterModel = gridFilterModelSelector(apiRef);
    if (isDeepEqual(filterModel.quickFilterValues, values)) {
      return;
    }
    apiRef.current.setFilterModel(_extends({}, filterModel, {
      quickFilterValues: [...values]
    }));
  }, [apiRef]);
  const setFilterModel = React119.useCallback((model, reason) => {
    const currentModel = gridFilterModelSelector(apiRef);
    if (currentModel !== model) {
      logger.debug("Setting filter model");
      apiRef.current.updateControlState("filter", mergeStateWithFilterModel(model, props.disableMultipleColumnsFiltering, apiRef), reason);
      apiRef.current.unstable_applyFilters();
    }
  }, [apiRef, logger, props.disableMultipleColumnsFiltering]);
  const getFilterState = React119.useCallback((inputFilterModel) => {
    const filterModel = sanitizeFilterModel(inputFilterModel, props.disableMultipleColumnsFiltering, apiRef);
    const isRowMatchingFilters = props.filterMode === "client" ? buildAggregatedFilterApplier(filterModel, apiRef, props.disableEval) : null;
    const filterResult = apiRef.current.applyStrategyProcessor("filtering", {
      isRowMatchingFilters,
      filterModel: filterModel ?? getDefaultGridFilterModel()
    });
    return _extends({}, filterResult, {
      filterModel
    });
  }, [props.disableMultipleColumnsFiltering, props.filterMode, props.disableEval, apiRef]);
  const filterApi = {
    setFilterLogicOperator,
    unstable_applyFilters: applyFilters,
    deleteFilterItem,
    upsertFilterItem,
    upsertFilterItems,
    setFilterModel,
    showFilterPanel,
    hideFilterPanel,
    setQuickFilterValues,
    ignoreDiacritics: props.ignoreDiacritics,
    getFilterState
  };
  useGridApiMethod(apiRef, filterApi, "public");
  const stateExportPreProcessing = React119.useCallback((prevState, context) => {
    var _a2, _b2;
    const filterModelToExport = gridFilterModelSelector(apiRef);
    const shouldExportFilterModel = (
      // Always export if the `exportOnlyDirtyModels` property is not activated
      !context.exportOnlyDirtyModels || // Always export if the model is controlled
      props.filterModel != null || // Always export if the model has been initialized
      ((_b2 = (_a2 = props.initialState) == null ? void 0 : _a2.filter) == null ? void 0 : _b2.filterModel) != null || // Export if the model is not equal to the default value
      !isDeepEqual(filterModelToExport, getDefaultGridFilterModel())
    );
    if (!shouldExportFilterModel) {
      return prevState;
    }
    return _extends({}, prevState, {
      filter: {
        filterModel: filterModelToExport
      }
    });
  }, [apiRef, props.filterModel, (_b = (_a = props.initialState) == null ? void 0 : _a.filter) == null ? void 0 : _b.filterModel]);
  const stateRestorePreProcessing = React119.useCallback((params, context) => {
    var _a2;
    const filterModel = (_a2 = context.stateToRestore.filter) == null ? void 0 : _a2.filterModel;
    if (filterModel == null) {
      return params;
    }
    apiRef.current.updateControlState("filter", mergeStateWithFilterModel(filterModel, props.disableMultipleColumnsFiltering, apiRef), "restoreState");
    return _extends({}, params, {
      callbacks: [...params.callbacks, apiRef.current.unstable_applyFilters]
    });
  }, [apiRef, props.disableMultipleColumnsFiltering]);
  const preferencePanelPreProcessing = React119.useCallback((initialValue, value) => {
    var _a2;
    if (value === GridPreferencePanelsValue.filters) {
      const FilterPanel = props.slots.filterPanel;
      return (0, import_jsx_runtime84.jsx)(FilterPanel, _extends({}, (_a2 = props.slotProps) == null ? void 0 : _a2.filterPanel));
    }
    return initialValue;
  }, [props.slots.filterPanel, (_c = props.slotProps) == null ? void 0 : _c.filterPanel]);
  const {
    getRowId
  } = props;
  const getRowsRef = useLazyRef(createMemoizedValues);
  const flatFilteringMethod = React119.useCallback((params) => {
    if (props.filterMode !== "client" || !params.isRowMatchingFilters) {
      return {
        filteredRowsLookup: {},
        filteredDescendantCountLookup: {}
      };
    }
    const dataRowIdToModelLookup = gridRowsLookupSelector(apiRef);
    const filteredRowsLookup = {};
    const {
      isRowMatchingFilters
    } = params;
    const filterCache = {};
    const result = {
      passingFilterItems: null,
      passingQuickFilterValues: null
    };
    const rows = getRowsRef.current(apiRef.current.state.rows.dataRowIdToModelLookup);
    for (let i = 0; i < rows.length; i += 1) {
      const row = rows[i];
      const id = getRowId ? getRowId(row) : row.id;
      isRowMatchingFilters(row, void 0, result);
      const isRowPassing = passFilterLogic([result.passingFilterItems], [result.passingQuickFilterValues], params.filterModel, apiRef, filterCache);
      filteredRowsLookup[id] = isRowPassing;
    }
    const footerId = "auto-generated-group-footer-root";
    const footer = dataRowIdToModelLookup[footerId];
    if (footer) {
      filteredRowsLookup[footerId] = true;
    }
    return {
      filteredRowsLookup,
      filteredDescendantCountLookup: {}
    };
  }, [apiRef, props.filterMode, getRowId, getRowsRef]);
  useGridRegisterPipeProcessor(apiRef, "columnMenu", addColumnMenuItem);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  useGridRegisterPipeProcessor(apiRef, "preferencePanel", preferencePanelPreProcessing);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, "filtering", flatFilteringMethod);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, "visibleRowsLookupCreation", getVisibleRowsLookup);
  const handleColumnsChange = React119.useCallback(() => {
    logger.debug("onColUpdated - GridColumns changed, applying filters");
    const filterModel = gridFilterModelSelector(apiRef);
    const columnsLookup = gridColumnLookupSelector(apiRef);
    const newFilterItems = filterModel.items.filter((item) => item.field && columnsLookup[item.field]);
    if (newFilterItems.length < filterModel.items.length) {
      apiRef.current.setFilterModel(_extends({}, filterModel, {
        items: newFilterItems
      }));
    }
  }, [apiRef, logger]);
  const handleStrategyProcessorChange = React119.useCallback((methodName) => {
    if (methodName === "filtering") {
      apiRef.current.unstable_applyFilters();
    }
  }, [apiRef]);
  const updateVisibleRowsLookupState = React119.useCallback(() => {
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        visibleRowsLookup: getVisibleRowsLookupState(apiRef, state)
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "rowsSet", updateFilteredRows);
  useGridApiEventHandler(apiRef, "columnsChange", handleColumnsChange);
  useGridApiEventHandler(apiRef, "activeStrategyProcessorChange", handleStrategyProcessorChange);
  useGridApiEventHandler(apiRef, "rowExpansionChange", updateVisibleRowsLookupState);
  useGridApiEventHandler(apiRef, "columnVisibilityModelChange", () => {
    const filterModel = gridFilterModelSelector(apiRef);
    if (filterModel.quickFilterValues && shouldQuickFilterExcludeHiddenColumns(filterModel)) {
      apiRef.current.unstable_applyFilters();
    }
  });
  useFirstRender(() => {
    apiRef.current.unstable_applyFilters();
  });
  useEnhancedEffect_default(() => {
    if (props.filterModel !== void 0) {
      apiRef.current.setFilterModel(props.filterModel);
    }
  }, [apiRef, logger, props.filterModel]);
};

// node_modules/@mui/x-data-grid/hooks/features/focus/useGridFocus.js
init_extends();
var React120 = __toESM(require_react());
init_esm();
var focusStateInitializer = (state) => _extends({}, state, {
  focus: {
    cell: null,
    columnHeader: null,
    columnHeaderFilter: null,
    columnGroupHeader: null
  },
  tabIndex: {
    cell: null,
    columnHeader: null,
    columnHeaderFilter: null,
    columnGroupHeader: null
  }
});
var useGridFocus = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridFocus");
  const lastClickedCell = React120.useRef(null);
  const publishCellFocusOut = React120.useCallback((cell, event) => {
    if (cell) {
      if (apiRef.current.getRow(cell.id)) {
        apiRef.current.publishEvent("cellFocusOut", apiRef.current.getCellParams(cell.id, cell.field), event);
      }
    }
  }, [apiRef]);
  const setCellFocus = React120.useCallback((id, field) => {
    const focusedCell = gridFocusCellSelector(apiRef);
    if ((focusedCell == null ? void 0 : focusedCell.id) === id && (focusedCell == null ? void 0 : focusedCell.field) === field) {
      return;
    }
    apiRef.current.setState((state) => {
      logger.debug(`Focusing on cell with id=${id} and field=${field}`);
      return _extends({}, state, {
        tabIndex: {
          cell: {
            id,
            field
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        },
        focus: {
          cell: {
            id,
            field
          },
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      });
    });
    apiRef.current.forceUpdate();
    if (!apiRef.current.getRow(id)) {
      return;
    }
    if (focusedCell) {
      publishCellFocusOut(focusedCell, {});
    }
    apiRef.current.publishEvent("cellFocusIn", apiRef.current.getCellParams(id, field));
  }, [apiRef, logger, publishCellFocusOut]);
  const setColumnHeaderFocus = React120.useCallback((field, event = {}) => {
    const cell = gridFocusCellSelector(apiRef);
    publishCellFocusOut(cell, event);
    apiRef.current.setState((state) => {
      logger.debug(`Focusing on column header with colIndex=${field}`);
      return _extends({}, state, {
        tabIndex: {
          columnHeader: {
            field
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: {
            field
          },
          columnHeaderFilter: null,
          cell: null,
          columnGroupHeader: null
        }
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef, logger, publishCellFocusOut]);
  const setColumnHeaderFilterFocus = React120.useCallback((field, event = {}) => {
    const cell = gridFocusCellSelector(apiRef);
    publishCellFocusOut(cell, event);
    apiRef.current.setState((state) => {
      logger.debug(`Focusing on column header filter with colIndex=${field}`);
      return _extends({}, state, {
        tabIndex: {
          columnHeader: null,
          columnHeaderFilter: {
            field
          },
          cell: null,
          columnGroupHeader: null
        },
        focus: {
          columnHeader: null,
          columnHeaderFilter: {
            field
          },
          cell: null,
          columnGroupHeader: null
        }
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef, logger, publishCellFocusOut]);
  const setColumnGroupHeaderFocus = React120.useCallback((field, depth, event = {}) => {
    const cell = gridFocusCellSelector(apiRef);
    if (cell) {
      apiRef.current.publishEvent("cellFocusOut", apiRef.current.getCellParams(cell.id, cell.field), event);
    }
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        tabIndex: {
          columnGroupHeader: {
            field,
            depth
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        },
        focus: {
          columnGroupHeader: {
            field,
            depth
          },
          columnHeader: null,
          columnHeaderFilter: null,
          cell: null
        }
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const getColumnGroupHeaderFocus = React120.useCallback(() => gridFocusColumnGroupHeaderSelector(apiRef), [apiRef]);
  const moveFocusToRelativeCell = React120.useCallback((id, field, direction) => {
    let columnIndexToFocus = apiRef.current.getColumnIndex(field);
    const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
    const currentPage = getVisibleRows(apiRef, {
      pagination: props.pagination,
      paginationMode: props.paginationMode
    });
    const pinnedRows = gridPinnedRowsSelector(apiRef);
    const currentPageRows = [].concat(pinnedRows.top || [], currentPage.rows, pinnedRows.bottom || []);
    let rowIndexToFocus = currentPageRows.findIndex((row) => row.id === id);
    if (direction === "right") {
      columnIndexToFocus += 1;
    } else if (direction === "left") {
      columnIndexToFocus -= 1;
    } else {
      rowIndexToFocus += 1;
    }
    if (columnIndexToFocus >= visibleColumns.length) {
      rowIndexToFocus += 1;
      if (rowIndexToFocus < currentPageRows.length) {
        columnIndexToFocus = 0;
      }
    } else if (columnIndexToFocus < 0) {
      rowIndexToFocus -= 1;
      if (rowIndexToFocus >= 0) {
        columnIndexToFocus = visibleColumns.length - 1;
      }
    }
    rowIndexToFocus = clamp(rowIndexToFocus, 0, currentPageRows.length - 1);
    const rowToFocus = currentPageRows[rowIndexToFocus];
    if (!rowToFocus) {
      return;
    }
    const colSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowToFocus.id, columnIndexToFocus);
    if (colSpanInfo && colSpanInfo.spannedByColSpan) {
      if (direction === "left" || direction === "below") {
        columnIndexToFocus = colSpanInfo.leftVisibleCellIndex;
      } else if (direction === "right") {
        columnIndexToFocus = colSpanInfo.rightVisibleCellIndex;
      }
    }
    columnIndexToFocus = clamp(columnIndexToFocus, 0, visibleColumns.length - 1);
    const columnToFocus = visibleColumns[columnIndexToFocus];
    apiRef.current.setCellFocus(rowToFocus.id, columnToFocus.field);
  }, [apiRef, props.pagination, props.paginationMode]);
  const handleCellDoubleClick = React120.useCallback(({
    id,
    field
  }) => {
    apiRef.current.setCellFocus(id, field);
  }, [apiRef]);
  const handleCellKeyDown = React120.useCallback((params, event) => {
    if (event.key === "Enter" || event.key === "Tab" || event.key === "Shift" || isNavigationKey(event.key)) {
      return;
    }
    apiRef.current.setCellFocus(params.id, params.field);
  }, [apiRef]);
  const handleColumnHeaderFocus = React120.useCallback(({
    field
  }, event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    apiRef.current.setColumnHeaderFocus(field, event);
  }, [apiRef]);
  const handleColumnGroupHeaderFocus = React120.useCallback(({
    fields,
    depth
  }, event) => {
    if (event.target !== event.currentTarget) {
      return;
    }
    const focusedColumnGroup = gridFocusColumnGroupHeaderSelector(apiRef);
    if (focusedColumnGroup !== null && focusedColumnGroup.depth === depth && fields.includes(focusedColumnGroup.field)) {
      return;
    }
    apiRef.current.setColumnGroupHeaderFocus(fields[0], depth, event);
  }, [apiRef]);
  const handleBlur = React120.useCallback((_, event) => {
    var _a, _b;
    if ((_b = (_a = event.relatedTarget) == null ? void 0 : _a.getAttribute("class")) == null ? void 0 : _b.includes(gridClasses.columnHeader)) {
      return;
    }
    logger.debug(`Clearing focus`);
    apiRef.current.setState((state) => _extends({}, state, {
      focus: {
        cell: null,
        columnHeader: null,
        columnHeaderFilter: null,
        columnGroupHeader: null
      }
    }));
  }, [logger, apiRef]);
  const handleCellMouseDown = React120.useCallback((params) => {
    lastClickedCell.current = params;
  }, []);
  const handleDocumentClick = React120.useCallback((event) => {
    const cellParams = lastClickedCell.current;
    lastClickedCell.current = null;
    const focusedCell = gridFocusCellSelector(apiRef);
    const canUpdateFocus = apiRef.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
      event,
      cell: cellParams
    });
    if (!canUpdateFocus) {
      return;
    }
    if (!focusedCell) {
      if (cellParams) {
        apiRef.current.setCellFocus(cellParams.id, cellParams.field);
      }
      return;
    }
    if ((cellParams == null ? void 0 : cellParams.id) === focusedCell.id && (cellParams == null ? void 0 : cellParams.field) === focusedCell.field) {
      return;
    }
    const cellElement = apiRef.current.getCellElement(focusedCell.id, focusedCell.field);
    if (cellElement == null ? void 0 : cellElement.contains(event.target)) {
      return;
    }
    if (cellParams) {
      apiRef.current.setCellFocus(cellParams.id, cellParams.field);
    } else {
      apiRef.current.setState((state) => _extends({}, state, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      }));
      apiRef.current.forceUpdate();
      publishCellFocusOut(focusedCell, event);
    }
  }, [apiRef, publishCellFocusOut]);
  const handleCellModeChange = React120.useCallback((params) => {
    if (params.cellMode === "view") {
      return;
    }
    const cell = gridFocusCellSelector(apiRef);
    if ((cell == null ? void 0 : cell.id) !== params.id || (cell == null ? void 0 : cell.field) !== params.field) {
      apiRef.current.setCellFocus(params.id, params.field);
    }
  }, [apiRef]);
  const handleRowSet = React120.useCallback(() => {
    const cell = gridFocusCellSelector(apiRef);
    if (cell && !apiRef.current.getRow(cell.id)) {
      apiRef.current.setState((state) => _extends({}, state, {
        focus: {
          cell: null,
          columnHeader: null,
          columnHeaderFilter: null,
          columnGroupHeader: null
        }
      }));
    }
  }, [apiRef]);
  const handlePaginationModelChange = useEventCallback_default(() => {
    const currentFocusedCell = gridFocusCellSelector(apiRef);
    if (!currentFocusedCell) {
      return;
    }
    const currentPage = getVisibleRows(apiRef, {
      pagination: props.pagination,
      paginationMode: props.paginationMode
    });
    const rowIsInCurrentPage = currentPage.rows.find((row) => row.id === currentFocusedCell.id);
    if (rowIsInCurrentPage) {
      return;
    }
    const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        tabIndex: {
          cell: {
            id: currentPage.rows[0].id,
            field: visibleColumns[0].field
          },
          columnGroupHeader: null,
          columnHeader: null,
          columnHeaderFilter: null
        }
      });
    });
  });
  const focusApi = {
    setCellFocus,
    setColumnHeaderFocus,
    setColumnHeaderFilterFocus
  };
  const focusPrivateApi = {
    moveFocusToRelativeCell,
    setColumnGroupHeaderFocus,
    getColumnGroupHeaderFocus
  };
  useGridApiMethod(apiRef, focusApi, "public");
  useGridApiMethod(apiRef, focusPrivateApi, "private");
  React120.useEffect(() => {
    const doc = ownerDocument(apiRef.current.rootElementRef.current);
    doc.addEventListener("mouseup", handleDocumentClick);
    return () => {
      doc.removeEventListener("mouseup", handleDocumentClick);
    };
  }, [apiRef, handleDocumentClick]);
  useGridApiEventHandler(apiRef, "columnHeaderBlur", handleBlur);
  useGridApiEventHandler(apiRef, "cellDoubleClick", handleCellDoubleClick);
  useGridApiEventHandler(apiRef, "cellMouseDown", handleCellMouseDown);
  useGridApiEventHandler(apiRef, "cellKeyDown", handleCellKeyDown);
  useGridApiEventHandler(apiRef, "cellModeChange", handleCellModeChange);
  useGridApiEventHandler(apiRef, "columnHeaderFocus", handleColumnHeaderFocus);
  useGridApiEventHandler(apiRef, "columnGroupHeaderFocus", handleColumnGroupHeaderFocus);
  useGridApiEventHandler(apiRef, "rowsSet", handleRowSet);
  useGridApiEventHandler(apiRef, "paginationModelChange", handlePaginationModelChange);
};

// node_modules/@mui/x-data-grid/hooks/features/keyboardNavigation/useGridKeyboardNavigation.js
var React121 = __toESM(require_react());
function enrichPageRowsWithPinnedRows(apiRef, rows) {
  const pinnedRows = gridPinnedRowsSelector(apiRef) || {};
  return [...pinnedRows.top || [], ...rows, ...pinnedRows.bottom || []];
}
var getLeftColumnIndex = ({
  currentColIndex,
  firstColIndex,
  lastColIndex,
  direction
}) => {
  if (direction === "rtl") {
    if (currentColIndex < lastColIndex) {
      return currentColIndex + 1;
    }
  } else if (direction === "ltr") {
    if (currentColIndex > firstColIndex) {
      return currentColIndex - 1;
    }
  }
  return null;
};
var getRightColumnIndex = ({
  currentColIndex,
  firstColIndex,
  lastColIndex,
  direction
}) => {
  if (direction === "rtl") {
    if (currentColIndex > firstColIndex) {
      return currentColIndex - 1;
    }
  } else if (direction === "ltr") {
    if (currentColIndex < lastColIndex) {
      return currentColIndex + 1;
    }
  }
  return null;
};
var useGridKeyboardNavigation = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridKeyboardNavigation");
  const initialCurrentPageRows = useGridVisibleRows(apiRef, props).rows;
  const theme = useTheme();
  const currentPageRows = React121.useMemo(() => enrichPageRowsWithPinnedRows(apiRef, initialCurrentPageRows), [apiRef, initialCurrentPageRows]);
  const headerFilteringEnabled = props.signature !== "DataGrid" && props.headerFilters;
  const goToCell = React121.useCallback((colIndex, rowId, closestColumnToUse = "left") => {
    const visibleSortedRows = gridExpandedSortedRowEntriesSelector(apiRef);
    const nextCellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, colIndex);
    if (nextCellColSpanInfo && nextCellColSpanInfo.spannedByColSpan) {
      if (closestColumnToUse === "left") {
        colIndex = nextCellColSpanInfo.leftVisibleCellIndex;
      } else if (closestColumnToUse === "right") {
        colIndex = nextCellColSpanInfo.rightVisibleCellIndex;
      }
    }
    const rowIndexRelativeToAllRows = visibleSortedRows.findIndex((row) => row.id === rowId);
    logger.debug(`Navigating to cell row ${rowIndexRelativeToAllRows}, col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex,
      rowIndex: rowIndexRelativeToAllRows
    });
    const field = apiRef.current.getVisibleColumns()[colIndex].field;
    apiRef.current.setCellFocus(rowId, field);
  }, [apiRef, logger]);
  const goToHeader = React121.useCallback((colIndex, event) => {
    logger.debug(`Navigating to header col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex
    });
    const field = apiRef.current.getVisibleColumns()[colIndex].field;
    apiRef.current.setColumnHeaderFocus(field, event);
  }, [apiRef, logger]);
  const goToHeaderFilter = React121.useCallback((colIndex, event) => {
    logger.debug(`Navigating to header filter col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex
    });
    const field = apiRef.current.getVisibleColumns()[colIndex].field;
    apiRef.current.setColumnHeaderFilterFocus(field, event);
  }, [apiRef, logger]);
  const goToGroupHeader = React121.useCallback((colIndex, depth, event) => {
    logger.debug(`Navigating to header col ${colIndex}`);
    apiRef.current.scrollToIndexes({
      colIndex
    });
    const {
      field
    } = apiRef.current.getVisibleColumns()[colIndex];
    apiRef.current.setColumnGroupHeaderFocus(field, depth, event);
  }, [apiRef, logger]);
  const getRowIdFromIndex = React121.useCallback((rowIndex) => {
    var _a;
    return (_a = currentPageRows[rowIndex]) == null ? void 0 : _a.id;
  }, [currentPageRows]);
  const handleColumnHeaderKeyDown = React121.useCallback((params, event) => {
    const headerTitleNode = event.currentTarget.querySelector(`.${gridClasses.columnHeaderTitleContainerContent}`);
    const isFromInsideContent = !!headerTitleNode && headerTitleNode.contains(event.target);
    if (isFromInsideContent && params.field !== GRID_CHECKBOX_SELECTION_COL_DEF.field) {
      return;
    }
    const viewportPageSize = apiRef.current.getViewportPageSize();
    const colIndexBefore = params.field ? apiRef.current.getColumnIndex(params.field) : 0;
    const firstRowIndexInPage = currentPageRows.length > 0 ? 0 : null;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    const columnGroupMaxDepth = gridColumnGroupsHeaderMaxDepthSelector(apiRef);
    let shouldPreventDefault = true;
    switch (event.key) {
      case "ArrowDown": {
        if (firstRowIndexInPage !== null) {
          if (headerFilteringEnabled) {
            goToHeaderFilter(colIndexBefore, event);
          } else {
            goToCell(colIndexBefore, getRowIdFromIndex(firstRowIndexInPage));
          }
        }
        break;
      }
      case "ArrowRight": {
        const rightColIndex = getRightColumnIndex({
          currentColIndex: colIndexBefore,
          firstColIndex,
          lastColIndex,
          direction: theme.direction
        });
        if (rightColIndex !== null) {
          goToHeader(rightColIndex, event);
        }
        break;
      }
      case "ArrowLeft": {
        const leftColIndex = getLeftColumnIndex({
          currentColIndex: colIndexBefore,
          firstColIndex,
          lastColIndex,
          direction: theme.direction
        });
        if (leftColIndex !== null) {
          goToHeader(leftColIndex, event);
        }
        break;
      }
      case "ArrowUp": {
        if (columnGroupMaxDepth > 0) {
          goToGroupHeader(colIndexBefore, columnGroupMaxDepth - 1, event);
        }
        break;
      }
      case "PageDown": {
        if (firstRowIndexInPage !== null && lastRowIndexInPage !== null) {
          goToCell(colIndexBefore, getRowIdFromIndex(Math.min(firstRowIndexInPage + viewportPageSize, lastRowIndexInPage)));
        }
        break;
      }
      case "Home": {
        goToHeader(firstColIndex, event);
        break;
      }
      case "End": {
        goToHeader(lastColIndex, event);
        break;
      }
      case "Enter": {
        if (event.ctrlKey || event.metaKey) {
          apiRef.current.toggleColumnMenu(params.field);
        }
        break;
      }
      case " ": {
        break;
      }
      default: {
        shouldPreventDefault = false;
      }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, currentPageRows.length, headerFilteringEnabled, goToHeaderFilter, goToCell, getRowIdFromIndex, theme.direction, goToHeader, goToGroupHeader]);
  const handleHeaderFilterKeyDown = React121.useCallback((params, event) => {
    const isEditing = gridHeaderFilteringEditFieldSelector(apiRef) === params.field;
    const isHeaderMenuOpen = gridHeaderFilteringMenuSelector(apiRef) === params.field;
    if (isEditing || isHeaderMenuOpen || !isNavigationKey(event.key)) {
      return;
    }
    const viewportPageSize = apiRef.current.getViewportPageSize();
    const colIndexBefore = params.field ? apiRef.current.getColumnIndex(params.field) : 0;
    const firstRowIndexInPage = 0;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    let shouldPreventDefault = true;
    switch (event.key) {
      case "ArrowDown": {
        const rowId = getRowIdFromIndex(firstRowIndexInPage);
        if (firstRowIndexInPage !== null && rowId != null) {
          goToCell(colIndexBefore, rowId);
        }
        break;
      }
      case "ArrowRight": {
        const rightColIndex = getRightColumnIndex({
          currentColIndex: colIndexBefore,
          firstColIndex,
          lastColIndex,
          direction: theme.direction
        });
        if (rightColIndex !== null) {
          goToHeaderFilter(rightColIndex, event);
        }
        break;
      }
      case "ArrowLeft": {
        const leftColIndex = getLeftColumnIndex({
          currentColIndex: colIndexBefore,
          firstColIndex,
          lastColIndex,
          direction: theme.direction
        });
        if (leftColIndex !== null) {
          goToHeaderFilter(leftColIndex, event);
        } else {
          apiRef.current.setColumnHeaderFilterFocus(params.field, event);
        }
        break;
      }
      case "ArrowUp": {
        goToHeader(colIndexBefore, event);
        break;
      }
      case "PageDown": {
        if (firstRowIndexInPage !== null && lastRowIndexInPage !== null) {
          goToCell(colIndexBefore, getRowIdFromIndex(Math.min(firstRowIndexInPage + viewportPageSize, lastRowIndexInPage)));
        }
        break;
      }
      case "Home": {
        goToHeaderFilter(firstColIndex, event);
        break;
      }
      case "End": {
        goToHeaderFilter(lastColIndex, event);
        break;
      }
      case " ": {
        break;
      }
      default: {
        shouldPreventDefault = false;
      }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, currentPageRows.length, goToHeaderFilter, theme.direction, goToHeader, goToCell, getRowIdFromIndex]);
  const handleColumnGroupHeaderKeyDown = React121.useCallback((params, event) => {
    const focusedColumnGroup = gridFocusColumnGroupHeaderSelector(apiRef);
    if (focusedColumnGroup === null) {
      return;
    }
    const {
      field: currentField,
      depth: currentDepth
    } = focusedColumnGroup;
    const {
      fields,
      depth,
      maxDepth
    } = params;
    const viewportPageSize = apiRef.current.getViewportPageSize();
    const currentColIndex = apiRef.current.getColumnIndex(currentField);
    const colIndexBefore = currentField ? apiRef.current.getColumnIndex(currentField) : 0;
    const firstRowIndexInPage = 0;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    let shouldPreventDefault = true;
    switch (event.key) {
      case "ArrowDown": {
        if (depth === maxDepth - 1) {
          goToHeader(currentColIndex, event);
        } else {
          goToGroupHeader(currentColIndex, currentDepth + 1, event);
        }
        break;
      }
      case "ArrowUp": {
        if (depth > 0) {
          goToGroupHeader(currentColIndex, currentDepth - 1, event);
        }
        break;
      }
      case "ArrowRight": {
        const remainingRightColumns = fields.length - fields.indexOf(currentField) - 1;
        if (currentColIndex + remainingRightColumns + 1 <= lastColIndex) {
          goToGroupHeader(currentColIndex + remainingRightColumns + 1, currentDepth, event);
        }
        break;
      }
      case "ArrowLeft": {
        const remainingLeftColumns = fields.indexOf(currentField);
        if (currentColIndex - remainingLeftColumns - 1 >= firstColIndex) {
          goToGroupHeader(currentColIndex - remainingLeftColumns - 1, currentDepth, event);
        }
        break;
      }
      case "PageDown": {
        if (firstRowIndexInPage !== null && lastRowIndexInPage !== null) {
          goToCell(colIndexBefore, getRowIdFromIndex(Math.min(firstRowIndexInPage + viewportPageSize, lastRowIndexInPage)));
        }
        break;
      }
      case "Home": {
        goToGroupHeader(firstColIndex, currentDepth, event);
        break;
      }
      case "End": {
        goToGroupHeader(lastColIndex, currentDepth, event);
        break;
      }
      case " ": {
        break;
      }
      default: {
        shouldPreventDefault = false;
      }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, currentPageRows.length, goToHeader, goToGroupHeader, goToCell, getRowIdFromIndex]);
  const handleCellKeyDown = React121.useCallback((params, event) => {
    if (isEventTargetInPortal(event)) {
      return;
    }
    const cellParams = apiRef.current.getCellParams(params.id, params.field);
    if (cellParams.cellMode === GridCellModes.Edit || !isNavigationKey(event.key)) {
      return;
    }
    const canUpdateFocus = apiRef.current.unstable_applyPipeProcessors("canUpdateFocus", true, {
      event,
      cell: cellParams
    });
    if (!canUpdateFocus) {
      return;
    }
    if (currentPageRows.length === 0) {
      return;
    }
    const direction = theme.direction;
    const viewportPageSize = apiRef.current.getViewportPageSize();
    const colIndexBefore = params.field ? apiRef.current.getColumnIndex(params.field) : 0;
    const rowIndexBefore = currentPageRows.findIndex((row) => row.id === params.id);
    const firstRowIndexInPage = 0;
    const lastRowIndexInPage = currentPageRows.length - 1;
    const firstColIndex = 0;
    const lastColIndex = gridVisibleColumnDefinitionsSelector(apiRef).length - 1;
    let shouldPreventDefault = true;
    switch (event.key) {
      case "ArrowDown": {
        if (rowIndexBefore < lastRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(rowIndexBefore + 1));
        }
        break;
      }
      case "ArrowUp": {
        if (rowIndexBefore > firstRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(rowIndexBefore - 1));
        } else if (headerFilteringEnabled) {
          goToHeaderFilter(colIndexBefore, event);
        } else {
          goToHeader(colIndexBefore, event);
        }
        break;
      }
      case "ArrowRight": {
        const rightColIndex = getRightColumnIndex({
          currentColIndex: colIndexBefore,
          firstColIndex,
          lastColIndex,
          direction
        });
        if (rightColIndex !== null) {
          goToCell(rightColIndex, getRowIdFromIndex(rowIndexBefore), direction === "rtl" ? "left" : "right");
        }
        break;
      }
      case "ArrowLeft": {
        const leftColIndex = getLeftColumnIndex({
          currentColIndex: colIndexBefore,
          firstColIndex,
          lastColIndex,
          direction
        });
        if (leftColIndex !== null) {
          goToCell(leftColIndex, getRowIdFromIndex(rowIndexBefore), direction === "rtl" ? "right" : "left");
        }
        break;
      }
      case "Tab": {
        if (event.shiftKey && colIndexBefore > firstColIndex) {
          goToCell(colIndexBefore - 1, getRowIdFromIndex(rowIndexBefore), "left");
        } else if (!event.shiftKey && colIndexBefore < lastColIndex) {
          goToCell(colIndexBefore + 1, getRowIdFromIndex(rowIndexBefore), "right");
        }
        break;
      }
      case " ": {
        const field = params.field;
        if (field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
          break;
        }
        const colDef = params.colDef;
        if (colDef && // `GRID_TREE_DATA_GROUPING_FIELD` from the Pro package
        colDef.field === "__tree_data_group__") {
          break;
        }
        if (!event.shiftKey && rowIndexBefore < lastRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(Math.min(rowIndexBefore + viewportPageSize, lastRowIndexInPage)));
        }
        break;
      }
      case "PageDown": {
        if (rowIndexBefore < lastRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(Math.min(rowIndexBefore + viewportPageSize, lastRowIndexInPage)));
        }
        break;
      }
      case "PageUp": {
        const nextRowIndex = Math.max(rowIndexBefore - viewportPageSize, firstRowIndexInPage);
        if (nextRowIndex !== rowIndexBefore && nextRowIndex >= firstRowIndexInPage) {
          goToCell(colIndexBefore, getRowIdFromIndex(nextRowIndex));
        } else {
          goToHeader(colIndexBefore, event);
        }
        break;
      }
      case "Home": {
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          goToCell(firstColIndex, getRowIdFromIndex(firstRowIndexInPage));
        } else {
          goToCell(firstColIndex, getRowIdFromIndex(rowIndexBefore));
        }
        break;
      }
      case "End": {
        if (event.ctrlKey || event.metaKey || event.shiftKey) {
          goToCell(lastColIndex, getRowIdFromIndex(lastRowIndexInPage));
        } else {
          goToCell(lastColIndex, getRowIdFromIndex(rowIndexBefore));
        }
        break;
      }
      default: {
        shouldPreventDefault = false;
      }
    }
    if (shouldPreventDefault) {
      event.preventDefault();
    }
  }, [apiRef, currentPageRows, theme.direction, goToCell, getRowIdFromIndex, headerFilteringEnabled, goToHeaderFilter, goToHeader]);
  const checkIfCanStartEditing = React121.useCallback((initialValue, {
    event
  }) => {
    if (event.key === " ") {
      return false;
    }
    return initialValue;
  }, []);
  useGridRegisterPipeProcessor(apiRef, "canStartEditing", checkIfCanStartEditing);
  useGridApiEventHandler(apiRef, "columnHeaderKeyDown", handleColumnHeaderKeyDown);
  useGridApiEventHandler(apiRef, "headerFilterKeyDown", handleHeaderFilterKeyDown);
  useGridApiEventHandler(apiRef, "columnGroupHeaderKeyDown", handleColumnGroupHeaderKeyDown);
  useGridApiEventHandler(apiRef, "cellKeyDown", handleCellKeyDown);
};

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPagination.js
init_extends();

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridRowCount.js
init_extends();
var React122 = __toESM(require_react());
init_useLazyRef();
var useGridRowCount = (apiRef, props) => {
  var _a, _b;
  const logger = useGridLogger(apiRef, "useGridRowCount");
  const visibleTopLevelRowCount = useGridSelector(apiRef, gridFilteredTopLevelRowCountSelector);
  const rowCountState = useGridSelector(apiRef, gridPaginationRowCountSelector);
  const paginationMeta = useGridSelector(apiRef, gridPaginationMetaSelector);
  const paginationModel = useGridSelector(apiRef, gridPaginationModelSelector);
  const previousPageSize = useLazyRef(() => gridPaginationModelSelector(apiRef).pageSize);
  apiRef.current.registerControlState({
    stateId: "paginationRowCount",
    propModel: props.rowCount,
    propOnChange: props.onRowCountChange,
    stateSelector: gridPaginationRowCountSelector,
    changeEvent: "rowCountChange"
  });
  const setRowCount = React122.useCallback((newRowCount) => {
    if (rowCountState === newRowCount) {
      return;
    }
    logger.debug("Setting 'rowCount' to", newRowCount);
    apiRef.current.setState((state) => _extends({}, state, {
      pagination: _extends({}, state.pagination, {
        rowCount: newRowCount
      })
    }));
  }, [apiRef, logger, rowCountState]);
  const paginationRowCountApi = {
    setRowCount
  };
  useGridApiMethod(apiRef, paginationRowCountApi, "public");
  const stateExportPreProcessing = React122.useCallback((prevState, context) => {
    var _a2, _b2;
    const exportedRowCount = gridPaginationRowCountSelector(apiRef);
    const shouldExportRowCount = (
      // Always export if the `exportOnlyDirtyModels` property is not activated
      !context.exportOnlyDirtyModels || // Always export if the `rowCount` is controlled
      props.rowCount != null || // Always export if the `rowCount` has been initialized
      ((_b2 = (_a2 = props.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.rowCount) != null
    );
    if (!shouldExportRowCount) {
      return prevState;
    }
    return _extends({}, prevState, {
      pagination: _extends({}, prevState.pagination, {
        rowCount: exportedRowCount
      })
    });
  }, [apiRef, props.rowCount, (_b = (_a = props.initialState) == null ? void 0 : _a.pagination) == null ? void 0 : _b.rowCount]);
  const stateRestorePreProcessing = React122.useCallback((params, context) => {
    var _a2;
    const restoredRowCount = ((_a2 = context.stateToRestore.pagination) == null ? void 0 : _a2.rowCount) ? context.stateToRestore.pagination.rowCount : gridPaginationRowCountSelector(apiRef);
    apiRef.current.setState((state) => _extends({}, state, {
      pagination: _extends({}, state.pagination, {
        rowCount: restoredRowCount
      })
    }));
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  const handlePaginationModelChange = React122.useCallback((model) => {
    if (props.paginationMode === "client" || !previousPageSize.current) {
      return;
    }
    if (model.pageSize !== previousPageSize.current) {
      previousPageSize.current = model.pageSize;
      if (rowCountState === -1) {
        apiRef.current.setPage(0);
      }
    }
  }, [props.paginationMode, previousPageSize, rowCountState, apiRef]);
  useGridApiEventHandler(apiRef, "paginationModelChange", handlePaginationModelChange);
  React122.useEffect(() => {
    if (props.paginationMode === "client") {
      apiRef.current.setRowCount(visibleTopLevelRowCount);
    } else if (props.rowCount != null) {
      apiRef.current.setRowCount(props.rowCount);
    }
  }, [apiRef, props.paginationMode, visibleTopLevelRowCount, props.rowCount]);
  const isLastPage = paginationMeta.hasNextPage === false;
  React122.useEffect(() => {
    if (isLastPage && rowCountState === -1) {
      apiRef.current.setRowCount(paginationModel.pageSize * paginationModel.page + visibleTopLevelRowCount);
    }
  }, [apiRef, visibleTopLevelRowCount, isLastPage, rowCountState, paginationModel]);
};

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPaginationMeta.js
init_extends();
var React123 = __toESM(require_react());
var useGridPaginationMeta = (apiRef, props) => {
  var _a, _b;
  const logger = useGridLogger(apiRef, "useGridPaginationMeta");
  const paginationMeta = useGridSelector(apiRef, gridPaginationMetaSelector);
  apiRef.current.registerControlState({
    stateId: "paginationMeta",
    propModel: props.paginationMeta,
    propOnChange: props.onPaginationMetaChange,
    stateSelector: gridPaginationMetaSelector,
    changeEvent: "paginationMetaChange"
  });
  const setPaginationMeta = React123.useCallback((newPaginationMeta) => {
    if (paginationMeta === newPaginationMeta) {
      return;
    }
    logger.debug("Setting 'paginationMeta' to", newPaginationMeta);
    apiRef.current.setState((state) => _extends({}, state, {
      pagination: _extends({}, state.pagination, {
        meta: newPaginationMeta
      })
    }));
  }, [apiRef, logger, paginationMeta]);
  const paginationMetaApi = {
    setPaginationMeta
  };
  useGridApiMethod(apiRef, paginationMetaApi, "public");
  const stateExportPreProcessing = React123.useCallback((prevState, context) => {
    var _a2, _b2;
    const exportedPaginationMeta = gridPaginationMetaSelector(apiRef);
    const shouldExportRowCount = (
      // Always export if the `exportOnlyDirtyModels` property is not activated
      !context.exportOnlyDirtyModels || // Always export if the `paginationMeta` is controlled
      props.paginationMeta != null || // Always export if the `paginationMeta` has been initialized
      ((_b2 = (_a2 = props.initialState) == null ? void 0 : _a2.pagination) == null ? void 0 : _b2.meta) != null
    );
    if (!shouldExportRowCount) {
      return prevState;
    }
    return _extends({}, prevState, {
      pagination: _extends({}, prevState.pagination, {
        meta: exportedPaginationMeta
      })
    });
  }, [apiRef, props.paginationMeta, (_b = (_a = props.initialState) == null ? void 0 : _a.pagination) == null ? void 0 : _b.meta]);
  const stateRestorePreProcessing = React123.useCallback((params, context) => {
    var _a2;
    const restoredPaginationMeta = ((_a2 = context.stateToRestore.pagination) == null ? void 0 : _a2.meta) ? context.stateToRestore.pagination.meta : gridPaginationMetaSelector(apiRef);
    apiRef.current.setState((state) => _extends({}, state, {
      pagination: _extends({}, state.pagination, {
        meta: restoredPaginationMeta
      })
    }));
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  React123.useEffect(() => {
    if (props.paginationMeta) {
      apiRef.current.setPaginationMeta(props.paginationMeta);
    }
  }, [apiRef, props.paginationMeta]);
};

// node_modules/@mui/x-data-grid/hooks/features/pagination/useGridPagination.js
var paginationStateInitializer = (state, props) => {
  var _a, _b, _c, _d, _e, _f;
  const paginationModel = _extends({}, getDefaultGridPaginationModel(props.autoPageSize), props.paginationModel ?? ((_b = (_a = props.initialState) == null ? void 0 : _a.pagination) == null ? void 0 : _b.paginationModel));
  throwIfPageSizeExceedsTheLimit(paginationModel.pageSize, props.signature);
  const rowCount = props.rowCount ?? ((_d = (_c = props.initialState) == null ? void 0 : _c.pagination) == null ? void 0 : _d.rowCount);
  const meta = props.paginationMeta ?? ((_f = (_e = props.initialState) == null ? void 0 : _e.pagination) == null ? void 0 : _f.meta) ?? {};
  return _extends({}, state, {
    pagination: {
      paginationModel,
      rowCount,
      meta
    }
  });
};
var useGridPagination = (apiRef, props) => {
  useGridPaginationMeta(apiRef, props);
  useGridPaginationModel(apiRef, props);
  useGridRowCount(apiRef, props);
};

// node_modules/@mui/x-data-grid/hooks/features/preferencesPanel/useGridPreferencesPanel.js
init_extends();
var React124 = __toESM(require_react());
var preferencePanelStateInitializer = (state, props) => {
  var _a;
  return _extends({}, state, {
    preferencePanel: ((_a = props.initialState) == null ? void 0 : _a.preferencePanel) ?? {
      open: false
    }
  });
};
var useGridPreferencesPanel = (apiRef, props) => {
  var _a;
  const logger = useGridLogger(apiRef, "useGridPreferencesPanel");
  const hideTimeout = React124.useRef();
  const immediateTimeout = React124.useRef();
  const hidePreferences = React124.useCallback(() => {
    logger.debug("Hiding Preferences Panel");
    const preferencePanelState = gridPreferencePanelStateSelector(apiRef.current.state);
    if (preferencePanelState.openedPanelValue) {
      apiRef.current.publishEvent("preferencePanelClose", {
        openedPanelValue: preferencePanelState.openedPanelValue
      });
    }
    apiRef.current.setState((state) => _extends({}, state, {
      preferencePanel: {
        open: false
      }
    }));
    apiRef.current.forceUpdate();
  }, [apiRef, logger]);
  const doNotHidePanel = React124.useCallback(() => {
    immediateTimeout.current = setTimeout(() => clearTimeout(hideTimeout.current), 0);
  }, []);
  const hidePreferencesDelayed = React124.useCallback(() => {
    hideTimeout.current = setTimeout(hidePreferences, 100);
  }, [hidePreferences]);
  const showPreferences = React124.useCallback((newValue, panelId, labelId) => {
    logger.debug("Opening Preferences Panel");
    doNotHidePanel();
    apiRef.current.setState((state) => _extends({}, state, {
      preferencePanel: _extends({}, state.preferencePanel, {
        open: true,
        openedPanelValue: newValue,
        panelId,
        labelId
      })
    }));
    apiRef.current.publishEvent("preferencePanelOpen", {
      openedPanelValue: newValue
    });
    apiRef.current.forceUpdate();
  }, [logger, doNotHidePanel, apiRef]);
  useGridApiMethod(apiRef, {
    showPreferences,
    hidePreferences: hidePreferencesDelayed
  }, "public");
  const stateExportPreProcessing = React124.useCallback((prevState, context) => {
    var _a2;
    const preferencePanelToExport = gridPreferencePanelStateSelector(apiRef.current.state);
    const shouldExportPreferencePanel = (
      // Always export if the `exportOnlyDirtyModels` property is not activated
      !context.exportOnlyDirtyModels || // Always export if the panel was initialized
      ((_a2 = props.initialState) == null ? void 0 : _a2.preferencePanel) != null || // Always export if the panel is opened
      preferencePanelToExport.open
    );
    if (!shouldExportPreferencePanel) {
      return prevState;
    }
    return _extends({}, prevState, {
      preferencePanel: preferencePanelToExport
    });
  }, [apiRef, (_a = props.initialState) == null ? void 0 : _a.preferencePanel]);
  const stateRestorePreProcessing = React124.useCallback((params, context) => {
    const preferencePanel = context.stateToRestore.preferencePanel;
    if (preferencePanel != null) {
      apiRef.current.setState((state) => _extends({}, state, {
        preferencePanel
      }));
    }
    return params;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  React124.useEffect(() => {
    return () => {
      clearTimeout(hideTimeout.current);
      clearTimeout(immediateTimeout.current);
    };
  }, []);
};

// node_modules/@mui/x-data-grid/hooks/features/editing/useGridEditing.js
init_extends();
var React127 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/editing/useGridCellEditing.js
init_objectWithoutPropertiesLoose();
init_extends();
var React125 = __toESM(require_react());
init_esm();
var _excluded48 = ["id", "field"];
var _excluded212 = ["id", "field"];
var missingOnProcessRowUpdateErrorWarning = buildWarning(["MUI X: A call to `processRowUpdate` threw an error which was not handled because `onProcessRowUpdateError` is missing.", "To handle the error pass a callback to the `onProcessRowUpdateError` prop, for example `<DataGrid onProcessRowUpdateError={(error) => ...} />`.", "For more detail, see https://mui.com/x/react-data-grid/editing/#server-side-persistence."], "error");
var useGridCellEditing = (apiRef, props) => {
  const [cellModesModel, setCellModesModel] = React125.useState({});
  const cellModesModelRef = React125.useRef(cellModesModel);
  const prevCellModesModel = React125.useRef({});
  const {
    processRowUpdate,
    onProcessRowUpdateError,
    cellModesModel: cellModesModelProp,
    onCellModesModelChange
  } = props;
  const runIfEditModeIsCell = (callback) => (...args) => {
    if (props.editMode === GridEditModes.Cell) {
      callback(...args);
    }
  };
  const throwIfNotEditable = React125.useCallback((id, field) => {
    const params = apiRef.current.getCellParams(id, field);
    if (!apiRef.current.isCellEditable(params)) {
      throw new Error(`MUI X: The cell with id=${id} and field=${field} is not editable.`);
    }
  }, [apiRef]);
  const throwIfNotInMode = React125.useCallback((id, field, mode) => {
    if (apiRef.current.getCellMode(id, field) !== mode) {
      throw new Error(`MUI X: The cell with id=${id} and field=${field} is not in ${mode} mode.`);
    }
  }, [apiRef]);
  const handleCellDoubleClick = React125.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (params.cellMode === GridCellModes.Edit) {
      return;
    }
    const newParams = _extends({}, params, {
      reason: GridCellEditStartReasons.cellDoubleClick
    });
    apiRef.current.publishEvent("cellEditStart", newParams, event);
  }, [apiRef]);
  const handleCellFocusOut = React125.useCallback((params, event) => {
    if (params.cellMode === GridCellModes.View) {
      return;
    }
    if (apiRef.current.getCellMode(params.id, params.field) === GridCellModes.View) {
      return;
    }
    const newParams = _extends({}, params, {
      reason: GridCellEditStopReasons.cellFocusOut
    });
    apiRef.current.publishEvent("cellEditStop", newParams, event);
  }, [apiRef]);
  const handleCellKeyDown = React125.useCallback((params, event) => {
    if (params.cellMode === GridCellModes.Edit) {
      if (event.which === 229) {
        return;
      }
      let reason;
      if (event.key === "Escape") {
        reason = GridCellEditStopReasons.escapeKeyDown;
      } else if (event.key === "Enter") {
        reason = GridCellEditStopReasons.enterKeyDown;
      } else if (event.key === "Tab") {
        reason = event.shiftKey ? GridCellEditStopReasons.shiftTabKeyDown : GridCellEditStopReasons.tabKeyDown;
        event.preventDefault();
      }
      if (reason) {
        const newParams = _extends({}, params, {
          reason
        });
        apiRef.current.publishEvent("cellEditStop", newParams, event);
      }
    } else if (params.isEditable) {
      let reason;
      const canStartEditing = apiRef.current.unstable_applyPipeProcessors("canStartEditing", true, {
        event,
        cellParams: params,
        editMode: "cell"
      });
      if (!canStartEditing) {
        return;
      }
      if (isPrintableKey(event)) {
        reason = GridCellEditStartReasons.printableKeyDown;
      } else if (isPasteShortcut(event)) {
        reason = GridCellEditStartReasons.pasteKeyDown;
      } else if (event.key === "Enter") {
        reason = GridCellEditStartReasons.enterKeyDown;
      } else if (event.key === "Backspace" || event.key === "Delete") {
        reason = GridCellEditStartReasons.deleteKeyDown;
      }
      if (reason) {
        const newParams = _extends({}, params, {
          reason,
          key: event.key
        });
        apiRef.current.publishEvent("cellEditStart", newParams, event);
      }
    }
  }, [apiRef]);
  const handleCellEditStart = React125.useCallback((params) => {
    const {
      id,
      field,
      reason
    } = params;
    const startCellEditModeParams = {
      id,
      field
    };
    if (reason === GridCellEditStartReasons.printableKeyDown || reason === GridCellEditStartReasons.deleteKeyDown || reason === GridCellEditStartReasons.pasteKeyDown) {
      startCellEditModeParams.deleteValue = true;
    }
    apiRef.current.startCellEditMode(startCellEditModeParams);
  }, [apiRef]);
  const handleCellEditStop = React125.useCallback((params) => {
    const {
      id,
      field,
      reason
    } = params;
    apiRef.current.runPendingEditCellValueMutation(id, field);
    let cellToFocusAfter;
    if (reason === GridCellEditStopReasons.enterKeyDown) {
      cellToFocusAfter = "below";
    } else if (reason === GridCellEditStopReasons.tabKeyDown) {
      cellToFocusAfter = "right";
    } else if (reason === GridCellEditStopReasons.shiftTabKeyDown) {
      cellToFocusAfter = "left";
    }
    const ignoreModifications = reason === "escapeKeyDown";
    apiRef.current.stopCellEditMode({
      id,
      field,
      ignoreModifications,
      cellToFocusAfter
    });
  }, [apiRef]);
  const runIfNoFieldErrors = (callback) => async (...args) => {
    var _a;
    if (callback) {
      const {
        id,
        field
      } = args[0];
      const editRowsState = apiRef.current.state.editRows;
      const hasFieldErrors = (_a = editRowsState[id][field]) == null ? void 0 : _a.error;
      if (!hasFieldErrors) {
        callback(...args);
      }
    }
  };
  useGridApiEventHandler(apiRef, "cellDoubleClick", runIfEditModeIsCell(handleCellDoubleClick));
  useGridApiEventHandler(apiRef, "cellFocusOut", runIfEditModeIsCell(handleCellFocusOut));
  useGridApiEventHandler(apiRef, "cellKeyDown", runIfEditModeIsCell(handleCellKeyDown));
  useGridApiEventHandler(apiRef, "cellEditStart", runIfEditModeIsCell(handleCellEditStart));
  useGridApiEventHandler(apiRef, "cellEditStop", runIfEditModeIsCell(handleCellEditStop));
  useGridApiOptionHandler(apiRef, "cellEditStart", props.onCellEditStart);
  useGridApiOptionHandler(apiRef, "cellEditStop", runIfNoFieldErrors(props.onCellEditStop));
  const getCellMode = React125.useCallback((id, field) => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const isEditing = editingState[id] && editingState[id][field];
    return isEditing ? GridCellModes.Edit : GridCellModes.View;
  }, [apiRef]);
  const updateCellModesModel = useEventCallback_default((newModel) => {
    const isNewModelDifferentFromProp = newModel !== props.cellModesModel;
    if (onCellModesModelChange && isNewModelDifferentFromProp) {
      onCellModesModelChange(newModel, {
        api: apiRef.current
      });
    }
    if (props.cellModesModel && isNewModelDifferentFromProp) {
      return;
    }
    setCellModesModel(newModel);
    cellModesModelRef.current = newModel;
    apiRef.current.publishEvent("cellModesModelChange", newModel);
  });
  const updateFieldInCellModesModel = React125.useCallback((id, field, newProps) => {
    const newModel = _extends({}, cellModesModelRef.current);
    if (newProps !== null) {
      newModel[id] = _extends({}, newModel[id], {
        [field]: _extends({}, newProps)
      });
    } else {
      const _newModel$id = newModel[id], otherFields = _objectWithoutPropertiesLoose(_newModel$id, [field].map(toPropertyKey));
      newModel[id] = otherFields;
      if (Object.keys(newModel[id]).length === 0) {
        delete newModel[id];
      }
    }
    updateCellModesModel(newModel);
  }, [updateCellModesModel]);
  const updateOrDeleteFieldState = React125.useCallback((id, field, newProps) => {
    apiRef.current.setState((state) => {
      const newEditingState = _extends({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = _extends({}, newEditingState[id], {
          [field]: _extends({}, newProps)
        });
      } else {
        delete newEditingState[id][field];
        if (Object.keys(newEditingState[id]).length === 0) {
          delete newEditingState[id];
        }
      }
      return _extends({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const startCellEditMode = React125.useCallback((params) => {
    const {
      id,
      field
    } = params, other = _objectWithoutPropertiesLoose(params, _excluded48);
    throwIfNotEditable(id, field);
    throwIfNotInMode(id, field, GridCellModes.View);
    updateFieldInCellModesModel(id, field, _extends({
      mode: GridCellModes.Edit
    }, other));
  }, [throwIfNotEditable, throwIfNotInMode, updateFieldInCellModesModel]);
  const updateStateToStartCellEditMode = useEventCallback_default((params) => {
    const {
      id,
      field,
      deleteValue,
      initialValue
    } = params;
    let newValue = apiRef.current.getCellValue(id, field);
    if (deleteValue) {
      const fieldType = apiRef.current.getColumn(field).type;
      switch (fieldType) {
        case "boolean":
          newValue = false;
          break;
        case "date":
        case "dateTime":
        case "number":
          newValue = void 0;
          break;
        case "singleSelect":
          newValue = null;
          break;
        case "string":
        default:
          newValue = "";
          break;
      }
    } else if (initialValue) {
      newValue = initialValue;
    }
    const newProps = {
      value: newValue,
      error: false,
      isProcessingProps: false
    };
    updateOrDeleteFieldState(id, field, newProps);
    apiRef.current.setCellFocus(id, field);
  });
  const stopCellEditMode = React125.useCallback((params) => {
    const {
      id,
      field
    } = params, other = _objectWithoutPropertiesLoose(params, _excluded212);
    throwIfNotInMode(id, field, GridCellModes.Edit);
    updateFieldInCellModesModel(id, field, _extends({
      mode: GridCellModes.View
    }, other));
  }, [throwIfNotInMode, updateFieldInCellModesModel]);
  const updateStateToStopCellEditMode = useEventCallback_default(async (params) => {
    const {
      id,
      field,
      ignoreModifications,
      cellToFocusAfter = "none"
    } = params;
    throwIfNotInMode(id, field, GridCellModes.Edit);
    apiRef.current.runPendingEditCellValueMutation(id, field);
    const finishCellEditMode = () => {
      updateOrDeleteFieldState(id, field, null);
      updateFieldInCellModesModel(id, field, null);
      if (cellToFocusAfter !== "none") {
        apiRef.current.moveFocusToRelativeCell(id, field, cellToFocusAfter);
      }
    };
    if (ignoreModifications) {
      finishCellEditMode();
      return;
    }
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const {
      error,
      isProcessingProps
    } = editingState[id][field];
    if (error || isProcessingProps) {
      prevCellModesModel.current[id][field].mode = GridCellModes.Edit;
      updateFieldInCellModesModel(id, field, {
        mode: GridCellModes.Edit
      });
      return;
    }
    const rowUpdate = apiRef.current.getRowWithUpdatedValuesFromCellEditing(id, field);
    if (processRowUpdate) {
      const handleError = (errorThrown) => {
        prevCellModesModel.current[id][field].mode = GridCellModes.Edit;
        updateFieldInCellModesModel(id, field, {
          mode: GridCellModes.Edit
        });
        if (onProcessRowUpdateError) {
          onProcessRowUpdateError(errorThrown);
        } else if (true) {
          missingOnProcessRowUpdateErrorWarning();
        }
      };
      try {
        const row = apiRef.current.getRow(id);
        Promise.resolve(processRowUpdate(rowUpdate, row)).then((finalRowUpdate) => {
          apiRef.current.updateRows([finalRowUpdate]);
          finishCellEditMode();
        }).catch(handleError);
      } catch (errorThrown) {
        handleError(errorThrown);
      }
    } else {
      apiRef.current.updateRows([rowUpdate]);
      finishCellEditMode();
    }
  });
  const setCellEditingEditCellValue = React125.useCallback(async (params) => {
    var _a, _b;
    const {
      id,
      field,
      value,
      debounceMs,
      unstable_skipValueParser: skipValueParser
    } = params;
    throwIfNotEditable(id, field);
    throwIfNotInMode(id, field, GridCellModes.Edit);
    const column = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    let parsedValue = value;
    if (column.valueParser && !skipValueParser) {
      parsedValue = column.valueParser(value, row, column, apiRef);
    }
    let editingState = gridEditRowsStateSelector(apiRef.current.state);
    let newProps = _extends({}, editingState[id][field], {
      value: parsedValue,
      changeReason: debounceMs ? "debouncedSetEditCellValue" : "setEditCellValue"
    });
    if (column.preProcessEditCellProps) {
      const hasChanged = value !== editingState[id][field].value;
      newProps = _extends({}, newProps, {
        isProcessingProps: true
      });
      updateOrDeleteFieldState(id, field, newProps);
      newProps = await Promise.resolve(column.preProcessEditCellProps({
        id,
        row,
        props: newProps,
        hasChanged
      }));
    }
    if (apiRef.current.getCellMode(id, field) === GridCellModes.View) {
      return false;
    }
    editingState = gridEditRowsStateSelector(apiRef.current.state);
    newProps = _extends({}, newProps, {
      isProcessingProps: false
    });
    newProps.value = column.preProcessEditCellProps ? editingState[id][field].value : parsedValue;
    updateOrDeleteFieldState(id, field, newProps);
    editingState = gridEditRowsStateSelector(apiRef.current.state);
    return !((_b = (_a = editingState[id]) == null ? void 0 : _a[field]) == null ? void 0 : _b.error);
  }, [apiRef, throwIfNotEditable, throwIfNotInMode, updateOrDeleteFieldState]);
  const getRowWithUpdatedValuesFromCellEditing = React125.useCallback((id, field) => {
    const column = apiRef.current.getColumn(field);
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const row = apiRef.current.getRow(id);
    if (!editingState[id] || !editingState[id][field]) {
      return apiRef.current.getRow(id);
    }
    const {
      value
    } = editingState[id][field];
    return column.valueSetter ? column.valueSetter(value, row, column, apiRef) : _extends({}, row, {
      [field]: value
    });
  }, [apiRef]);
  const editingApi = {
    getCellMode,
    startCellEditMode,
    stopCellEditMode
  };
  const editingPrivateApi = {
    setCellEditingEditCellValue,
    getRowWithUpdatedValuesFromCellEditing
  };
  useGridApiMethod(apiRef, editingApi, "public");
  useGridApiMethod(apiRef, editingPrivateApi, "private");
  React125.useEffect(() => {
    if (cellModesModelProp) {
      updateCellModesModel(cellModesModelProp);
    }
  }, [cellModesModelProp, updateCellModesModel]);
  useEnhancedEffect_default(() => {
    const idToIdLookup = gridRowsDataRowIdToIdLookupSelector(apiRef);
    const copyOfPrevCellModes = prevCellModesModel.current;
    prevCellModesModel.current = deepClone(cellModesModel);
    Object.entries(cellModesModel).forEach(([id, fields]) => {
      Object.entries(fields).forEach(([field, params]) => {
        var _a, _b;
        const prevMode = ((_b = (_a = copyOfPrevCellModes[id]) == null ? void 0 : _a[field]) == null ? void 0 : _b.mode) || GridCellModes.View;
        const originalId = idToIdLookup[id] ?? id;
        if (params.mode === GridCellModes.Edit && prevMode === GridCellModes.View) {
          updateStateToStartCellEditMode(_extends({
            id: originalId,
            field
          }, params));
        } else if (params.mode === GridCellModes.View && prevMode === GridCellModes.Edit) {
          updateStateToStopCellEditMode(_extends({
            id: originalId,
            field
          }, params));
        }
      });
    });
  }, [apiRef, cellModesModel, updateStateToStartCellEditMode, updateStateToStopCellEditMode]);
};

// node_modules/@mui/x-data-grid/hooks/features/editing/useGridRowEditing.js
init_objectWithoutPropertiesLoose();
init_extends();
var React126 = __toESM(require_react());
init_esm();
var _excluded49 = ["id"];
var _excluded213 = ["id"];
var missingOnProcessRowUpdateErrorWarning2 = buildWarning(["MUI X: A call to `processRowUpdate` threw an error which was not handled because `onProcessRowUpdateError` is missing.", "To handle the error pass a callback to the `onProcessRowUpdateError` prop, for example `<DataGrid onProcessRowUpdateError={(error) => ...} />`.", "For more detail, see https://mui.com/x/react-data-grid/editing/#server-side-persistence."], "error");
var useGridRowEditing = (apiRef, props) => {
  const [rowModesModel, setRowModesModel] = React126.useState({});
  const rowModesModelRef = React126.useRef(rowModesModel);
  const prevRowModesModel = React126.useRef({});
  const focusTimeout = React126.useRef();
  const nextFocusedCell = React126.useRef(null);
  const {
    processRowUpdate,
    onProcessRowUpdateError,
    rowModesModel: rowModesModelProp,
    onRowModesModelChange
  } = props;
  const runIfEditModeIsRow = (callback) => (...args) => {
    if (props.editMode === GridEditModes.Row) {
      callback(...args);
    }
  };
  const throwIfNotEditable = React126.useCallback((id, field) => {
    const params = apiRef.current.getCellParams(id, field);
    if (!apiRef.current.isCellEditable(params)) {
      throw new Error(`MUI X: The cell with id=${id} and field=${field} is not editable.`);
    }
  }, [apiRef]);
  const throwIfNotInMode = React126.useCallback((id, mode) => {
    if (apiRef.current.getRowMode(id) !== mode) {
      throw new Error(`MUI X: The row with id=${id} is not in ${mode} mode.`);
    }
  }, [apiRef]);
  const hasFieldsWithErrors = React126.useCallback((rowId) => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    return Object.values(editingState[rowId]).some((fieldProps) => fieldProps.error);
  }, [apiRef]);
  const handleCellDoubleClick = React126.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (apiRef.current.getRowMode(params.id) === GridRowModes.Edit) {
      return;
    }
    const rowParams = apiRef.current.getRowParams(params.id);
    const newParams = _extends({}, rowParams, {
      field: params.field,
      reason: GridRowEditStartReasons.cellDoubleClick
    });
    apiRef.current.publishEvent("rowEditStart", newParams, event);
  }, [apiRef]);
  const handleCellFocusIn = React126.useCallback((params) => {
    nextFocusedCell.current = params;
  }, []);
  const handleCellFocusOut = React126.useCallback((params, event) => {
    if (!params.isEditable) {
      return;
    }
    if (apiRef.current.getRowMode(params.id) === GridRowModes.View) {
      return;
    }
    nextFocusedCell.current = null;
    focusTimeout.current = setTimeout(() => {
      var _a;
      if (((_a = nextFocusedCell.current) == null ? void 0 : _a.id) !== params.id) {
        if (!apiRef.current.getRow(params.id)) {
          return;
        }
        if (apiRef.current.getRowMode(params.id) === GridRowModes.View) {
          return;
        }
        if (hasFieldsWithErrors(params.id)) {
          return;
        }
        const rowParams = apiRef.current.getRowParams(params.id);
        const newParams = _extends({}, rowParams, {
          field: params.field,
          reason: GridRowEditStopReasons.rowFocusOut
        });
        apiRef.current.publishEvent("rowEditStop", newParams, event);
      }
    });
  }, [apiRef, hasFieldsWithErrors]);
  React126.useEffect(() => {
    return () => {
      clearTimeout(focusTimeout.current);
    };
  }, []);
  const handleCellKeyDown = React126.useCallback((params, event) => {
    if (params.cellMode === GridRowModes.Edit) {
      if (event.which === 229) {
        return;
      }
      let reason;
      if (event.key === "Escape") {
        reason = GridRowEditStopReasons.escapeKeyDown;
      } else if (event.key === "Enter") {
        reason = GridRowEditStopReasons.enterKeyDown;
      } else if (event.key === "Tab") {
        const columnFields = gridVisibleColumnFieldsSelector(apiRef).filter((field) => {
          const column = apiRef.current.getColumn(field);
          if (column.type === GRID_ACTIONS_COLUMN_TYPE) {
            return true;
          }
          return apiRef.current.isCellEditable(apiRef.current.getCellParams(params.id, field));
        });
        if (event.shiftKey) {
          if (params.field === columnFields[0]) {
            reason = GridRowEditStopReasons.shiftTabKeyDown;
          }
        } else if (params.field === columnFields[columnFields.length - 1]) {
          reason = GridRowEditStopReasons.tabKeyDown;
        }
        event.preventDefault();
        if (!reason) {
          const index = columnFields.findIndex((field) => field === params.field);
          const nextFieldToFocus = columnFields[event.shiftKey ? index - 1 : index + 1];
          apiRef.current.setCellFocus(params.id, nextFieldToFocus);
        }
      }
      if (reason) {
        if (reason !== GridRowEditStopReasons.escapeKeyDown && hasFieldsWithErrors(params.id)) {
          return;
        }
        const newParams = _extends({}, apiRef.current.getRowParams(params.id), {
          reason,
          field: params.field
        });
        apiRef.current.publishEvent("rowEditStop", newParams, event);
      }
    } else if (params.isEditable) {
      let reason;
      const canStartEditing = apiRef.current.unstable_applyPipeProcessors("canStartEditing", true, {
        event,
        cellParams: params,
        editMode: "row"
      });
      if (!canStartEditing) {
        return;
      }
      if (isPrintableKey(event)) {
        reason = GridRowEditStartReasons.printableKeyDown;
      } else if (isPasteShortcut(event)) {
        reason = GridRowEditStartReasons.printableKeyDown;
      } else if (event.key === "Enter") {
        reason = GridRowEditStartReasons.enterKeyDown;
      } else if (event.key === "Backspace" || event.key === "Delete") {
        reason = GridRowEditStartReasons.deleteKeyDown;
      }
      if (reason) {
        const rowParams = apiRef.current.getRowParams(params.id);
        const newParams = _extends({}, rowParams, {
          field: params.field,
          reason
        });
        apiRef.current.publishEvent("rowEditStart", newParams, event);
      }
    }
  }, [apiRef, hasFieldsWithErrors]);
  const handleRowEditStart = React126.useCallback((params) => {
    const {
      id,
      field,
      reason
    } = params;
    const startRowEditModeParams = {
      id,
      fieldToFocus: field
    };
    if (reason === GridRowEditStartReasons.printableKeyDown || reason === GridRowEditStartReasons.deleteKeyDown) {
      startRowEditModeParams.deleteValue = !!field;
    }
    apiRef.current.startRowEditMode(startRowEditModeParams);
  }, [apiRef]);
  const handleRowEditStop = React126.useCallback((params) => {
    const {
      id,
      reason,
      field
    } = params;
    apiRef.current.runPendingEditCellValueMutation(id);
    let cellToFocusAfter;
    if (reason === GridRowEditStopReasons.enterKeyDown) {
      cellToFocusAfter = "below";
    } else if (reason === GridRowEditStopReasons.tabKeyDown) {
      cellToFocusAfter = "right";
    } else if (reason === GridRowEditStopReasons.shiftTabKeyDown) {
      cellToFocusAfter = "left";
    }
    const ignoreModifications = reason === "escapeKeyDown";
    apiRef.current.stopRowEditMode({
      id,
      ignoreModifications,
      field,
      cellToFocusAfter
    });
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "cellDoubleClick", runIfEditModeIsRow(handleCellDoubleClick));
  useGridApiEventHandler(apiRef, "cellFocusIn", runIfEditModeIsRow(handleCellFocusIn));
  useGridApiEventHandler(apiRef, "cellFocusOut", runIfEditModeIsRow(handleCellFocusOut));
  useGridApiEventHandler(apiRef, "cellKeyDown", runIfEditModeIsRow(handleCellKeyDown));
  useGridApiEventHandler(apiRef, "rowEditStart", runIfEditModeIsRow(handleRowEditStart));
  useGridApiEventHandler(apiRef, "rowEditStop", runIfEditModeIsRow(handleRowEditStop));
  useGridApiOptionHandler(apiRef, "rowEditStart", props.onRowEditStart);
  useGridApiOptionHandler(apiRef, "rowEditStop", props.onRowEditStop);
  const getRowMode = React126.useCallback((id) => {
    if (props.editMode === GridEditModes.Cell) {
      return GridRowModes.View;
    }
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const isEditing = editingState[id] && Object.keys(editingState[id]).length > 0;
    return isEditing ? GridRowModes.Edit : GridRowModes.View;
  }, [apiRef, props.editMode]);
  const updateRowModesModel = useEventCallback_default((newModel) => {
    const isNewModelDifferentFromProp = newModel !== props.rowModesModel;
    if (onRowModesModelChange && isNewModelDifferentFromProp) {
      onRowModesModelChange(newModel, {
        api: apiRef.current
      });
    }
    if (props.rowModesModel && isNewModelDifferentFromProp) {
      return;
    }
    setRowModesModel(newModel);
    rowModesModelRef.current = newModel;
    apiRef.current.publishEvent("rowModesModelChange", newModel);
  });
  const updateRowInRowModesModel = React126.useCallback((id, newProps) => {
    const newModel = _extends({}, rowModesModelRef.current);
    if (newProps !== null) {
      newModel[id] = _extends({}, newProps);
    } else {
      delete newModel[id];
    }
    updateRowModesModel(newModel);
  }, [updateRowModesModel]);
  const updateOrDeleteRowState = React126.useCallback((id, newProps) => {
    apiRef.current.setState((state) => {
      const newEditingState = _extends({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = newProps;
      } else {
        delete newEditingState[id];
      }
      return _extends({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const updateOrDeleteFieldState = React126.useCallback((id, field, newProps) => {
    apiRef.current.setState((state) => {
      const newEditingState = _extends({}, state.editRows);
      if (newProps !== null) {
        newEditingState[id] = _extends({}, newEditingState[id], {
          [field]: _extends({}, newProps)
        });
      } else {
        delete newEditingState[id][field];
        if (Object.keys(newEditingState[id]).length === 0) {
          delete newEditingState[id];
        }
      }
      return _extends({}, state, {
        editRows: newEditingState
      });
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const startRowEditMode = React126.useCallback((params) => {
    const {
      id
    } = params, other = _objectWithoutPropertiesLoose(params, _excluded49);
    throwIfNotInMode(id, GridRowModes.View);
    updateRowInRowModesModel(id, _extends({
      mode: GridRowModes.Edit
    }, other));
  }, [throwIfNotInMode, updateRowInRowModesModel]);
  const updateStateToStartRowEditMode = useEventCallback_default((params) => {
    const {
      id,
      fieldToFocus,
      deleteValue,
      initialValue
    } = params;
    const columnFields = gridColumnFieldsSelector(apiRef);
    const newProps = columnFields.reduce((acc, field) => {
      const cellParams = apiRef.current.getCellParams(id, field);
      if (!cellParams.isEditable) {
        return acc;
      }
      let newValue = apiRef.current.getCellValue(id, field);
      if (fieldToFocus === field && (deleteValue || initialValue)) {
        newValue = deleteValue ? "" : initialValue;
      }
      acc[field] = {
        value: newValue,
        error: false,
        isProcessingProps: false
      };
      return acc;
    }, {});
    updateOrDeleteRowState(id, newProps);
    if (fieldToFocus) {
      apiRef.current.setCellFocus(id, fieldToFocus);
    }
  });
  const stopRowEditMode = React126.useCallback((params) => {
    const {
      id
    } = params, other = _objectWithoutPropertiesLoose(params, _excluded213);
    throwIfNotInMode(id, GridRowModes.Edit);
    updateRowInRowModesModel(id, _extends({
      mode: GridRowModes.View
    }, other));
  }, [throwIfNotInMode, updateRowInRowModesModel]);
  const updateStateToStopRowEditMode = useEventCallback_default((params) => {
    const {
      id,
      ignoreModifications,
      field: focusedField,
      cellToFocusAfter = "none"
    } = params;
    apiRef.current.runPendingEditCellValueMutation(id);
    const finishRowEditMode = () => {
      if (cellToFocusAfter !== "none" && focusedField) {
        apiRef.current.moveFocusToRelativeCell(id, focusedField, cellToFocusAfter);
      }
      updateOrDeleteRowState(id, null);
      updateRowInRowModesModel(id, null);
    };
    if (ignoreModifications) {
      finishRowEditMode();
      return;
    }
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const row = apiRef.current.getRow(id);
    const isSomeFieldProcessingProps = Object.values(editingState[id]).some((fieldProps) => fieldProps.isProcessingProps);
    if (isSomeFieldProcessingProps) {
      prevRowModesModel.current[id].mode = GridRowModes.Edit;
      return;
    }
    if (hasFieldsWithErrors(id)) {
      prevRowModesModel.current[id].mode = GridRowModes.Edit;
      updateRowInRowModesModel(id, {
        mode: GridRowModes.Edit
      });
      return;
    }
    const rowUpdate = apiRef.current.getRowWithUpdatedValuesFromRowEditing(id);
    if (processRowUpdate) {
      const handleError = (errorThrown) => {
        prevRowModesModel.current[id].mode = GridRowModes.Edit;
        updateRowInRowModesModel(id, {
          mode: GridRowModes.Edit
        });
        if (onProcessRowUpdateError) {
          onProcessRowUpdateError(errorThrown);
        } else if (true) {
          missingOnProcessRowUpdateErrorWarning2();
        }
      };
      try {
        Promise.resolve(processRowUpdate(rowUpdate, row)).then((finalRowUpdate) => {
          apiRef.current.updateRows([finalRowUpdate]);
          finishRowEditMode();
        }).catch(handleError);
      } catch (errorThrown) {
        handleError(errorThrown);
      }
    } else {
      apiRef.current.updateRows([rowUpdate]);
      finishRowEditMode();
    }
  });
  const setRowEditingEditCellValue = React126.useCallback((params) => {
    const {
      id,
      field,
      value,
      debounceMs,
      unstable_skipValueParser: skipValueParser
    } = params;
    throwIfNotEditable(id, field);
    const column = apiRef.current.getColumn(field);
    const row = apiRef.current.getRow(id);
    let parsedValue = value;
    if (column.valueParser && !skipValueParser) {
      parsedValue = column.valueParser(value, row, column, apiRef);
    }
    let editingState = gridEditRowsStateSelector(apiRef.current.state);
    let newProps = _extends({}, editingState[id][field], {
      value: parsedValue,
      changeReason: debounceMs ? "debouncedSetEditCellValue" : "setEditCellValue"
    });
    if (!column.preProcessEditCellProps) {
      updateOrDeleteFieldState(id, field, newProps);
    }
    return new Promise((resolve) => {
      const promises = [];
      if (column.preProcessEditCellProps) {
        const hasChanged = newProps.value !== editingState[id][field].value;
        newProps = _extends({}, newProps, {
          isProcessingProps: true
        });
        updateOrDeleteFieldState(id, field, newProps);
        const _editingState$id = editingState[id], otherFieldsProps = _objectWithoutPropertiesLoose(_editingState$id, [field].map(toPropertyKey));
        const promise = Promise.resolve(column.preProcessEditCellProps({
          id,
          row,
          props: newProps,
          hasChanged,
          otherFieldsProps
        })).then((processedProps) => {
          if (apiRef.current.getRowMode(id) === GridRowModes.View) {
            resolve(false);
            return;
          }
          editingState = gridEditRowsStateSelector(apiRef.current.state);
          processedProps = _extends({}, processedProps, {
            isProcessingProps: false
          });
          processedProps.value = column.preProcessEditCellProps ? editingState[id][field].value : parsedValue;
          updateOrDeleteFieldState(id, field, processedProps);
        });
        promises.push(promise);
      }
      Object.entries(editingState[id]).forEach(([thisField, fieldProps]) => {
        if (thisField === field) {
          return;
        }
        const fieldColumn = apiRef.current.getColumn(thisField);
        if (!fieldColumn.preProcessEditCellProps) {
          return;
        }
        fieldProps = _extends({}, fieldProps, {
          isProcessingProps: true
        });
        updateOrDeleteFieldState(id, thisField, fieldProps);
        editingState = gridEditRowsStateSelector(apiRef.current.state);
        const _editingState$id2 = editingState[id], otherFieldsProps = _objectWithoutPropertiesLoose(_editingState$id2, [thisField].map(toPropertyKey));
        const promise = Promise.resolve(fieldColumn.preProcessEditCellProps({
          id,
          row,
          props: fieldProps,
          hasChanged: false,
          otherFieldsProps
        })).then((processedProps) => {
          if (apiRef.current.getRowMode(id) === GridRowModes.View) {
            resolve(false);
            return;
          }
          processedProps = _extends({}, processedProps, {
            isProcessingProps: false
          });
          updateOrDeleteFieldState(id, thisField, processedProps);
        });
        promises.push(promise);
      });
      Promise.all(promises).then(() => {
        if (apiRef.current.getRowMode(id) === GridRowModes.Edit) {
          editingState = gridEditRowsStateSelector(apiRef.current.state);
          resolve(!editingState[id][field].error);
        } else {
          resolve(false);
        }
      });
    });
  }, [apiRef, throwIfNotEditable, updateOrDeleteFieldState]);
  const getRowWithUpdatedValuesFromRowEditing = React126.useCallback((id) => {
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    const row = apiRef.current.getRow(id);
    if (!editingState[id]) {
      return apiRef.current.getRow(id);
    }
    let rowUpdate = _extends({}, row);
    Object.entries(editingState[id]).forEach(([field, fieldProps]) => {
      const column = apiRef.current.getColumn(field);
      if (column.valueSetter) {
        rowUpdate = column.valueSetter(fieldProps.value, rowUpdate, column, apiRef);
      } else {
        rowUpdate[field] = fieldProps.value;
      }
    });
    return rowUpdate;
  }, [apiRef]);
  const editingApi = {
    getRowMode,
    startRowEditMode,
    stopRowEditMode
  };
  const editingPrivateApi = {
    setRowEditingEditCellValue,
    getRowWithUpdatedValuesFromRowEditing
  };
  useGridApiMethod(apiRef, editingApi, "public");
  useGridApiMethod(apiRef, editingPrivateApi, "private");
  React126.useEffect(() => {
    if (rowModesModelProp) {
      updateRowModesModel(rowModesModelProp);
    }
  }, [rowModesModelProp, updateRowModesModel]);
  useEnhancedEffect_default(() => {
    const idToIdLookup = gridRowsDataRowIdToIdLookupSelector(apiRef);
    const copyOfPrevRowModesModel = prevRowModesModel.current;
    prevRowModesModel.current = deepClone(rowModesModel);
    const ids = /* @__PURE__ */ new Set([...Object.keys(rowModesModel), ...Object.keys(copyOfPrevRowModesModel)]);
    Array.from(ids).forEach((id) => {
      var _a;
      const params = rowModesModel[id] ?? {
        mode: GridRowModes.View
      };
      const prevMode = ((_a = copyOfPrevRowModesModel[id]) == null ? void 0 : _a.mode) || GridRowModes.View;
      const originalId = idToIdLookup[id] ?? id;
      if (params.mode === GridRowModes.Edit && prevMode === GridRowModes.View) {
        updateStateToStartRowEditMode(_extends({
          id: originalId
        }, params));
      } else if (params.mode === GridRowModes.View && prevMode === GridRowModes.Edit) {
        updateStateToStopRowEditMode(_extends({
          id: originalId
        }, params));
      }
    });
  }, [apiRef, rowModesModel, updateStateToStartRowEditMode, updateStateToStopRowEditMode]);
};

// node_modules/@mui/x-data-grid/hooks/features/editing/useGridEditing.js
var editingStateInitializer = (state) => _extends({}, state, {
  editRows: {}
});
var useGridEditing = (apiRef, props) => {
  useGridCellEditing(apiRef, props);
  useGridRowEditing(apiRef, props);
  const debounceMap = React127.useRef({});
  const {
    isCellEditable: isCellEditableProp
  } = props;
  const isCellEditable = React127.useCallback((params) => {
    if (isAutoGeneratedRow(params.rowNode)) {
      return false;
    }
    if (!params.colDef.editable) {
      return false;
    }
    if (!params.colDef.renderEditCell) {
      return false;
    }
    if (isCellEditableProp) {
      return isCellEditableProp(params);
    }
    return true;
  }, [isCellEditableProp]);
  const maybeDebounce = (id, field, debounceMs, callback) => {
    if (!debounceMs) {
      callback();
      return;
    }
    if (!debounceMap.current[id]) {
      debounceMap.current[id] = {};
    }
    if (debounceMap.current[id][field]) {
      const [timeout2] = debounceMap.current[id][field];
      clearTimeout(timeout2);
    }
    const runImmediately = () => {
      const [timeout2] = debounceMap.current[id][field];
      clearTimeout(timeout2);
      callback();
      delete debounceMap.current[id][field];
    };
    const timeout = setTimeout(() => {
      callback();
      delete debounceMap.current[id][field];
    }, debounceMs);
    debounceMap.current[id][field] = [timeout, runImmediately];
  };
  React127.useEffect(() => {
    const debounces = debounceMap.current;
    return () => {
      Object.entries(debounces).forEach(([id, fields]) => {
        Object.keys(fields).forEach((field) => {
          const [timeout] = debounces[id][field];
          clearTimeout(timeout);
          delete debounces[id][field];
        });
      });
    };
  }, []);
  const runPendingEditCellValueMutation = React127.useCallback((id, field) => {
    if (!debounceMap.current[id]) {
      return;
    }
    if (!field) {
      Object.keys(debounceMap.current[id]).forEach((debouncedField) => {
        const [, runCallback] = debounceMap.current[id][debouncedField];
        runCallback();
      });
    } else if (debounceMap.current[id][field]) {
      const [, runCallback] = debounceMap.current[id][field];
      runCallback();
    }
  }, []);
  const setEditCellValue = React127.useCallback((params) => {
    const {
      id,
      field,
      debounceMs
    } = params;
    return new Promise((resolve) => {
      maybeDebounce(id, field, debounceMs, async () => {
        const setEditCellValueToCall = props.editMode === GridEditModes.Row ? apiRef.current.setRowEditingEditCellValue : apiRef.current.setCellEditingEditCellValue;
        if (apiRef.current.getCellMode(id, field) === GridCellModes.Edit) {
          const result = await setEditCellValueToCall(params);
          resolve(result);
        }
      });
    });
  }, [apiRef, props.editMode]);
  const getRowWithUpdatedValues = React127.useCallback((id, field) => {
    return props.editMode === GridEditModes.Cell ? apiRef.current.getRowWithUpdatedValuesFromCellEditing(id, field) : apiRef.current.getRowWithUpdatedValuesFromRowEditing(id);
  }, [apiRef, props.editMode]);
  const getEditCellMeta = React127.useCallback((id, field) => {
    var _a;
    const editingState = gridEditRowsStateSelector(apiRef.current.state);
    return ((_a = editingState[id]) == null ? void 0 : _a[field]) ?? null;
  }, [apiRef]);
  const editingSharedApi = {
    isCellEditable,
    setEditCellValue,
    getRowWithUpdatedValues,
    unstable_getEditCellMeta: getEditCellMeta
  };
  const editingSharedPrivateApi = {
    runPendingEditCellValueMutation
  };
  useGridApiMethod(apiRef, editingSharedApi, "public");
  useGridApiMethod(apiRef, editingSharedPrivateApi, "private");
};

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridRows.js
init_extends();
var React128 = __toESM(require_react());
var rowsStateInitializer = (state, props, apiRef) => {
  apiRef.current.caches.rows = createRowsInternalCache({
    rows: props.rows,
    getRowId: props.getRowId,
    loading: props.loading,
    rowCount: props.rowCount
  });
  return _extends({}, state, {
    rows: getRowsStateFromCache({
      apiRef,
      rowCountProp: props.rowCount,
      loadingProp: props.loading,
      previousTree: null,
      previousTreeDepths: null
    })
  });
};
var useGridRows = (apiRef, props) => {
  if (true) {
    try {
      Object.freeze(props.rows);
    } catch (error) {
    }
  }
  const logger = useGridLogger(apiRef, "useGridRows");
  const currentPage = useGridVisibleRows(apiRef, props);
  const lastUpdateMs = React128.useRef(Date.now());
  const lastRowCount = React128.useRef(props.rowCount);
  const timeout = useTimeout();
  const getRow = React128.useCallback((id) => {
    const model = gridRowsLookupSelector(apiRef)[id];
    if (model) {
      return model;
    }
    const node = apiRef.current.getRowNode(id);
    if (node && isAutoGeneratedRow(node)) {
      return {
        [GRID_ID_AUTOGENERATED]: id
      };
    }
    return null;
  }, [apiRef]);
  const getRowIdProp = props.getRowId;
  const getRowId = React128.useCallback((row) => {
    if (GRID_ID_AUTOGENERATED in row) {
      return row[GRID_ID_AUTOGENERATED];
    }
    if (getRowIdProp) {
      return getRowIdProp(row);
    }
    return row.id;
  }, [getRowIdProp]);
  const lookup = React128.useMemo(() => currentPage.rows.reduce((acc, {
    id
  }, index) => {
    acc[id] = index;
    return acc;
  }, {}), [currentPage.rows]);
  const throttledRowsChange = React128.useCallback(({
    cache: cache2,
    throttle: throttle2
  }) => {
    const run = () => {
      lastUpdateMs.current = Date.now();
      apiRef.current.setState((state) => _extends({}, state, {
        rows: getRowsStateFromCache({
          apiRef,
          rowCountProp: props.rowCount,
          loadingProp: props.loading,
          previousTree: gridRowTreeSelector(apiRef),
          previousTreeDepths: gridRowTreeDepthsSelector(apiRef)
        })
      }));
      apiRef.current.publishEvent("rowsSet");
      apiRef.current.forceUpdate();
    };
    timeout.clear();
    apiRef.current.caches.rows = cache2;
    if (!throttle2) {
      run();
      return;
    }
    const throttleRemainingTimeMs = props.throttleRowsMs - (Date.now() - lastUpdateMs.current);
    if (throttleRemainingTimeMs > 0) {
      timeout.start(throttleRemainingTimeMs, run);
      return;
    }
    run();
  }, [props.throttleRowsMs, props.rowCount, props.loading, apiRef, timeout]);
  const setRows = React128.useCallback((rows) => {
    logger.debug(`Updating all rows, new length ${rows.length}`);
    const cache2 = createRowsInternalCache({
      rows,
      getRowId: props.getRowId,
      loading: props.loading,
      rowCount: props.rowCount
    });
    const prevCache = apiRef.current.caches.rows;
    cache2.rowsBeforePartialUpdates = prevCache.rowsBeforePartialUpdates;
    throttledRowsChange({
      cache: cache2,
      throttle: true
    });
  }, [logger, props.getRowId, props.loading, props.rowCount, throttledRowsChange, apiRef]);
  const updateRows = React128.useCallback((updates) => {
    if (props.signature === GridSignature.DataGrid && updates.length > 1) {
      throw new Error(["MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
    }
    const nonPinnedRowsUpdates = [];
    updates.forEach((update) => {
      const id = getRowIdFromRowModel(update, props.getRowId, "A row was provided without id when calling updateRows():");
      const rowNode = apiRef.current.getRowNode(id);
      if ((rowNode == null ? void 0 : rowNode.type) === "pinnedRow") {
        const pinnedRowsCache = apiRef.current.caches.pinnedRows;
        const prevModel = pinnedRowsCache.idLookup[id];
        if (prevModel) {
          pinnedRowsCache.idLookup[id] = _extends({}, prevModel, update);
        }
      } else {
        nonPinnedRowsUpdates.push(update);
      }
    });
    const cache2 = updateCacheWithNewRows({
      updates: nonPinnedRowsUpdates,
      getRowId: props.getRowId,
      previousCache: apiRef.current.caches.rows
    });
    throttledRowsChange({
      cache: cache2,
      throttle: true
    });
  }, [props.signature, props.getRowId, throttledRowsChange, apiRef]);
  const getRowModels = React128.useCallback(() => {
    const dataRows = gridDataRowIdsSelector(apiRef);
    const idRowsLookup = gridRowsLookupSelector(apiRef);
    return new Map(dataRows.map((id) => [id, idRowsLookup[id] ?? {}]));
  }, [apiRef]);
  const getRowsCount = React128.useCallback(() => gridRowCountSelector(apiRef), [apiRef]);
  const getAllRowIds = React128.useCallback(() => gridDataRowIdsSelector(apiRef), [apiRef]);
  const getRowIndexRelativeToVisibleRows = React128.useCallback((id) => lookup[id], [lookup]);
  const setRowChildrenExpansion = React128.useCallback((id, isExpanded) => {
    const currentNode = apiRef.current.getRowNode(id);
    if (!currentNode) {
      throw new Error(`MUI X: No row with id #${id} found.`);
    }
    if (currentNode.type !== "group") {
      throw new Error("MUI X: Only group nodes can be expanded or collapsed.");
    }
    const newNode = _extends({}, currentNode, {
      childrenExpanded: isExpanded
    });
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        rows: _extends({}, state.rows, {
          tree: _extends({}, state.rows.tree, {
            [id]: newNode
          })
        })
      });
    });
    apiRef.current.forceUpdate();
    apiRef.current.publishEvent("rowExpansionChange", newNode);
  }, [apiRef]);
  const getRowNode = React128.useCallback((id) => gridRowTreeSelector(apiRef)[id] ?? null, [apiRef]);
  const getRowGroupChildren = React128.useCallback(({
    skipAutoGeneratedRows = true,
    groupId,
    applySorting,
    applyFiltering
  }) => {
    const tree = gridRowTreeSelector(apiRef);
    let children;
    if (applySorting) {
      const groupNode = tree[groupId];
      if (!groupNode) {
        return [];
      }
      const sortedRowIds = gridSortedRowIdsSelector(apiRef);
      children = [];
      const startIndex = sortedRowIds.findIndex((id) => id === groupId) + 1;
      for (let index = startIndex; index < sortedRowIds.length && tree[sortedRowIds[index]].depth > groupNode.depth; index += 1) {
        const id = sortedRowIds[index];
        if (!skipAutoGeneratedRows || !isAutoGeneratedRow(tree[id])) {
          children.push(id);
        }
      }
    } else {
      children = getTreeNodeDescendants(tree, groupId, skipAutoGeneratedRows);
    }
    if (applyFiltering) {
      const filteredRowsLookup = gridFilteredRowsLookupSelector(apiRef);
      children = children.filter((childId) => filteredRowsLookup[childId] !== false);
    }
    return children;
  }, [apiRef]);
  const setRowIndex = React128.useCallback((rowId, targetIndex) => {
    const node = apiRef.current.getRowNode(rowId);
    if (!node) {
      throw new Error(`MUI X: No row with id #${rowId} found.`);
    }
    if (node.parent !== GRID_ROOT_GROUP_ID) {
      throw new Error(`MUI X: The row reordering do not support reordering of grouped rows yet.`);
    }
    if (node.type !== "leaf") {
      throw new Error(`MUI X: The row reordering do not support reordering of footer or grouping rows.`);
    }
    apiRef.current.setState((state) => {
      const group = gridRowTreeSelector(state, apiRef.current.instanceId)[GRID_ROOT_GROUP_ID];
      const allRows = group.children;
      const oldIndex = allRows.findIndex((row) => row === rowId);
      if (oldIndex === -1 || oldIndex === targetIndex) {
        return state;
      }
      logger.debug(`Moving row ${rowId} to index ${targetIndex}`);
      const updatedRows = [...allRows];
      updatedRows.splice(targetIndex, 0, updatedRows.splice(oldIndex, 1)[0]);
      return _extends({}, state, {
        rows: _extends({}, state.rows, {
          tree: _extends({}, state.rows.tree, {
            [GRID_ROOT_GROUP_ID]: _extends({}, group, {
              children: updatedRows
            })
          })
        })
      });
    });
    apiRef.current.publishEvent("rowsSet");
  }, [apiRef, logger]);
  const replaceRows = React128.useCallback((firstRowToRender, newRows) => {
    if (props.signature === GridSignature.DataGrid && newRows.length > 1) {
      throw new Error(["MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n"));
    }
    if (newRows.length === 0) {
      return;
    }
    const treeDepth = gridRowMaximumTreeDepthSelector(apiRef);
    if (treeDepth > 1) {
      throw new Error("`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping");
    }
    const tree = _extends({}, gridRowTreeSelector(apiRef));
    const dataRowIdToModelLookup = _extends({}, gridRowsLookupSelector(apiRef));
    const dataRowIdToIdLookup = _extends({}, gridRowsDataRowIdToIdLookupSelector(apiRef));
    const rootGroup = tree[GRID_ROOT_GROUP_ID];
    const rootGroupChildren = [...rootGroup.children];
    const seenIds = /* @__PURE__ */ new Set();
    for (let i = 0; i < newRows.length; i += 1) {
      const rowModel = newRows[i];
      const rowId = getRowIdFromRowModel(rowModel, props.getRowId, "A row was provided without id when calling replaceRows().");
      const [removedRowId] = rootGroupChildren.splice(firstRowToRender + i, 1, rowId);
      if (!seenIds.has(removedRowId)) {
        delete dataRowIdToModelLookup[removedRowId];
        delete dataRowIdToIdLookup[removedRowId];
        delete tree[removedRowId];
      }
      const rowTreeNodeConfig = {
        id: rowId,
        depth: 0,
        parent: GRID_ROOT_GROUP_ID,
        type: "leaf",
        groupingKey: null
      };
      dataRowIdToModelLookup[rowId] = rowModel;
      dataRowIdToIdLookup[rowId] = rowId;
      tree[rowId] = rowTreeNodeConfig;
      seenIds.add(rowId);
    }
    tree[GRID_ROOT_GROUP_ID] = _extends({}, rootGroup, {
      children: rootGroupChildren
    });
    const dataRowIds = rootGroupChildren.filter((childId) => {
      var _a;
      return ((_a = tree[childId]) == null ? void 0 : _a.type) === "leaf";
    });
    apiRef.current.caches.rows.dataRowIdToModelLookup = dataRowIdToModelLookup;
    apiRef.current.caches.rows.dataRowIdToIdLookup = dataRowIdToIdLookup;
    apiRef.current.setState((state) => _extends({}, state, {
      rows: _extends({}, state.rows, {
        dataRowIdToModelLookup,
        dataRowIdToIdLookup,
        dataRowIds,
        tree
      })
    }));
    apiRef.current.publishEvent("rowsSet");
  }, [apiRef, props.signature, props.getRowId]);
  const rowApi = {
    getRow,
    getRowId,
    getRowModels,
    getRowsCount,
    getAllRowIds,
    setRows,
    updateRows,
    getRowNode,
    getRowIndexRelativeToVisibleRows,
    unstable_replaceRows: replaceRows
  };
  const rowProApi = {
    setRowIndex,
    setRowChildrenExpansion,
    getRowGroupChildren
  };
  const groupRows = React128.useCallback(() => {
    logger.info(`Row grouping pre-processing have changed, regenerating the row tree`);
    let cache2;
    if (apiRef.current.caches.rows.rowsBeforePartialUpdates === props.rows) {
      cache2 = _extends({}, apiRef.current.caches.rows, {
        updates: {
          type: "full",
          rows: gridDataRowIdsSelector(apiRef)
        }
      });
    } else {
      cache2 = createRowsInternalCache({
        rows: props.rows,
        getRowId: props.getRowId,
        loading: props.loading,
        rowCount: props.rowCount
      });
    }
    throttledRowsChange({
      cache: cache2,
      throttle: false
    });
  }, [logger, apiRef, props.rows, props.getRowId, props.loading, props.rowCount, throttledRowsChange]);
  const handleStrategyProcessorChange = React128.useCallback((methodName) => {
    if (methodName === "rowTreeCreation") {
      groupRows();
    }
  }, [groupRows]);
  const handleStrategyActivityChange = React128.useCallback(() => {
    if (apiRef.current.getActiveStrategy("rowTree") !== gridRowGroupingNameSelector(apiRef)) {
      groupRows();
    }
  }, [apiRef, groupRows]);
  useGridApiEventHandler(apiRef, "activeStrategyProcessorChange", handleStrategyProcessorChange);
  useGridApiEventHandler(apiRef, "strategyAvailabilityChange", handleStrategyActivityChange);
  const applyHydrateRowsProcessor = React128.useCallback(() => {
    apiRef.current.setState((state) => {
      const response = apiRef.current.unstable_applyPipeProcessors("hydrateRows", {
        tree: gridRowTreeSelector(state, apiRef.current.instanceId),
        treeDepths: gridRowTreeDepthsSelector(state, apiRef.current.instanceId),
        dataRowIds: gridDataRowIdsSelector(state, apiRef.current.instanceId),
        dataRowIdToModelLookup: gridRowsLookupSelector(state, apiRef.current.instanceId),
        dataRowIdToIdLookup: gridRowsDataRowIdToIdLookupSelector(state, apiRef.current.instanceId)
      });
      return _extends({}, state, {
        rows: _extends({}, state.rows, response, {
          totalTopLevelRowCount: getTopLevelRowCount({
            tree: response.tree,
            rowCountProp: props.rowCount
          })
        })
      });
    });
    apiRef.current.publishEvent("rowsSet");
    apiRef.current.forceUpdate();
  }, [apiRef, props.rowCount]);
  useGridRegisterPipeApplier(apiRef, "hydrateRows", applyHydrateRowsProcessor);
  useGridApiMethod(apiRef, rowApi, "public");
  useGridApiMethod(apiRef, rowProApi, props.signature === GridSignature.DataGrid ? "private" : "public");
  const isFirstRender = React128.useRef(true);
  React128.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    let isRowCountPropUpdated = false;
    if (props.rowCount !== lastRowCount.current) {
      isRowCountPropUpdated = true;
      lastRowCount.current = props.rowCount;
    }
    const areNewRowsAlreadyInState = apiRef.current.caches.rows.rowsBeforePartialUpdates === props.rows;
    const isNewLoadingAlreadyInState = apiRef.current.caches.rows.loadingPropBeforePartialUpdates === props.loading;
    const isNewRowCountAlreadyInState = apiRef.current.caches.rows.rowCountPropBeforePartialUpdates === props.rowCount;
    if (areNewRowsAlreadyInState) {
      if (!isNewLoadingAlreadyInState) {
        apiRef.current.setState((state) => _extends({}, state, {
          rows: _extends({}, state.rows, {
            loading: props.loading
          })
        }));
        apiRef.current.caches.rows.loadingPropBeforePartialUpdates = props.loading;
        apiRef.current.forceUpdate();
      }
      if (!isNewRowCountAlreadyInState) {
        apiRef.current.setState((state) => _extends({}, state, {
          rows: _extends({}, state.rows, {
            totalRowCount: Math.max(props.rowCount || 0, state.rows.totalRowCount),
            totalTopLevelRowCount: Math.max(props.rowCount || 0, state.rows.totalTopLevelRowCount)
          })
        }));
        apiRef.current.caches.rows.rowCountPropBeforePartialUpdates = props.rowCount;
        apiRef.current.forceUpdate();
      }
      if (!isRowCountPropUpdated) {
        return;
      }
    }
    logger.debug(`Updating all rows, new length ${props.rows.length}`);
    throttledRowsChange({
      cache: createRowsInternalCache({
        rows: props.rows,
        getRowId: props.getRowId,
        loading: props.loading,
        rowCount: props.rowCount
      }),
      throttle: false
    });
  }, [props.rows, props.rowCount, props.getRowId, props.loading, logger, throttledRowsChange, apiRef]);
};

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsPreProcessors.js
init_extends();
var createFlatRowTree = (rows) => {
  const tree = {
    [GRID_ROOT_GROUP_ID]: _extends({}, buildRootGroup(), {
      children: rows
    })
  };
  for (let i = 0; i < rows.length; i += 1) {
    const rowId = rows[i];
    tree[rowId] = {
      id: rowId,
      depth: 0,
      parent: GRID_ROOT_GROUP_ID,
      type: "leaf",
      groupingKey: null
    };
  }
  return {
    groupingName: GRID_DEFAULT_STRATEGY,
    tree,
    treeDepths: {
      0: rows.length
    },
    dataRowIds: rows
  };
};
var updateFlatRowTree = ({
  previousTree,
  actions
}) => {
  const tree = _extends({}, previousTree);
  const idsToRemoveFromRootGroup = {};
  for (let i = 0; i < actions.remove.length; i += 1) {
    const idToDelete = actions.remove[i];
    idsToRemoveFromRootGroup[idToDelete] = true;
    delete tree[idToDelete];
  }
  for (let i = 0; i < actions.insert.length; i += 1) {
    const idToInsert = actions.insert[i];
    tree[idToInsert] = {
      id: idToInsert,
      depth: 0,
      parent: GRID_ROOT_GROUP_ID,
      type: "leaf",
      groupingKey: null
    };
  }
  const rootGroup = tree[GRID_ROOT_GROUP_ID];
  let rootGroupChildren = [...rootGroup.children, ...actions.insert];
  if (Object.values(idsToRemoveFromRootGroup).length) {
    rootGroupChildren = rootGroupChildren.filter((id) => !idsToRemoveFromRootGroup[id]);
  }
  tree[GRID_ROOT_GROUP_ID] = _extends({}, rootGroup, {
    children: rootGroupChildren
  });
  return {
    groupingName: GRID_DEFAULT_STRATEGY,
    tree,
    treeDepths: {
      0: rootGroupChildren.length
    },
    dataRowIds: rootGroupChildren
  };
};
var flatRowTreeCreationMethod = (params) => {
  if (params.updates.type === "full") {
    return createFlatRowTree(params.updates.rows);
  }
  return updateFlatRowTree({
    previousTree: params.previousTree,
    actions: params.updates.actions
  });
};
var useGridRowsPreProcessors = (apiRef) => {
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, "rowTreeCreation", flatRowTreeCreationMethod);
};

// node_modules/@mui/x-data-grid/hooks/features/rowSelection/useGridRowSelection.js
init_extends();
var React129 = __toESM(require_react());
var getSelectionModelPropValue = (selectionModelProp, prevSelectionModel) => {
  if (selectionModelProp == null) {
    return selectionModelProp;
  }
  if (Array.isArray(selectionModelProp)) {
    return selectionModelProp;
  }
  if (prevSelectionModel && prevSelectionModel[0] === selectionModelProp) {
    return prevSelectionModel;
  }
  return [selectionModelProp];
};
var rowSelectionStateInitializer = (state, props) => _extends({}, state, {
  rowSelection: props.rowSelection ? getSelectionModelPropValue(props.rowSelectionModel) ?? [] : []
});
var useGridRowSelection = (apiRef, props) => {
  const logger = useGridLogger(apiRef, "useGridSelection");
  const runIfRowSelectionIsEnabled = (callback) => (...args) => {
    if (props.rowSelection) {
      callback(...args);
    }
  };
  const propRowSelectionModel = React129.useMemo(() => {
    return getSelectionModelPropValue(props.rowSelectionModel, gridRowSelectionStateSelector(apiRef.current.state));
  }, [apiRef, props.rowSelectionModel]);
  const lastRowToggled = React129.useRef(null);
  apiRef.current.registerControlState({
    stateId: "rowSelection",
    propModel: propRowSelectionModel,
    propOnChange: props.onRowSelectionModelChange,
    stateSelector: gridRowSelectionStateSelector,
    changeEvent: "rowSelectionChange"
  });
  const {
    checkboxSelection,
    disableRowSelectionOnClick,
    isRowSelectable: propIsRowSelectable
  } = props;
  const canHaveMultipleSelection = isMultipleRowSelectionEnabled(props);
  const visibleRows = useGridVisibleRows(apiRef, props);
  const expandMouseRowRangeSelection = React129.useCallback((id) => {
    let endId = id;
    const startId = lastRowToggled.current ?? id;
    const isSelected = apiRef.current.isRowSelected(id);
    if (isSelected) {
      const visibleRowIds = gridExpandedSortedRowIdsSelector(apiRef);
      const startIndex = visibleRowIds.findIndex((rowId) => rowId === startId);
      const endIndex = visibleRowIds.findIndex((rowId) => rowId === endId);
      if (startIndex === endIndex) {
        return;
      }
      if (startIndex > endIndex) {
        endId = visibleRowIds[endIndex + 1];
      } else {
        endId = visibleRowIds[endIndex - 1];
      }
    }
    lastRowToggled.current = id;
    apiRef.current.selectRowRange({
      startId,
      endId
    }, !isSelected);
  }, [apiRef]);
  const setRowSelectionModel = React129.useCallback((model) => {
    if (props.signature === GridSignature.DataGrid && !canHaveMultipleSelection && Array.isArray(model) && model.length > 1) {
      throw new Error(["MUI X: `rowSelectionModel` can only contain 1 item in DataGrid.", "You need to upgrade to DataGridPro or DataGridPremium component to unlock multiple selection."].join("\n"));
    }
    const currentModel = gridRowSelectionStateSelector(apiRef.current.state);
    if (currentModel !== model) {
      logger.debug(`Setting selection model`);
      apiRef.current.setState((state) => _extends({}, state, {
        rowSelection: props.rowSelection ? model : []
      }));
      apiRef.current.forceUpdate();
    }
  }, [apiRef, logger, props.rowSelection, props.signature, canHaveMultipleSelection]);
  const isRowSelected = React129.useCallback((id) => gridRowSelectionStateSelector(apiRef.current.state).includes(id), [apiRef]);
  const isRowSelectable = React129.useCallback((id) => {
    if (propIsRowSelectable && !propIsRowSelectable(apiRef.current.getRowParams(id))) {
      return false;
    }
    const rowNode = apiRef.current.getRowNode(id);
    if ((rowNode == null ? void 0 : rowNode.type) === "footer" || (rowNode == null ? void 0 : rowNode.type) === "pinnedRow") {
      return false;
    }
    return true;
  }, [apiRef, propIsRowSelectable]);
  const getSelectedRows = React129.useCallback(() => selectedGridRowsSelector(apiRef), [apiRef]);
  const selectRow = React129.useCallback((id, isSelected = true, resetSelection = false) => {
    if (!apiRef.current.isRowSelectable(id)) {
      return;
    }
    lastRowToggled.current = id;
    if (resetSelection) {
      logger.debug(`Setting selection for row ${id}`);
      apiRef.current.setRowSelectionModel(isSelected ? [id] : []);
    } else {
      logger.debug(`Toggling selection for row ${id}`);
      const selection = gridRowSelectionStateSelector(apiRef.current.state);
      const newSelection = selection.filter((el) => el !== id);
      if (isSelected) {
        newSelection.push(id);
      }
      const isSelectionValid = newSelection.length < 2 || canHaveMultipleSelection;
      if (isSelectionValid) {
        apiRef.current.setRowSelectionModel(newSelection);
      }
    }
  }, [apiRef, logger, canHaveMultipleSelection]);
  const selectRows = React129.useCallback((ids, isSelected = true, resetSelection = false) => {
    logger.debug(`Setting selection for several rows`);
    const selectableIds = ids.filter((id) => apiRef.current.isRowSelectable(id));
    let newSelection;
    if (resetSelection) {
      newSelection = isSelected ? selectableIds : [];
    } else {
      const selectionLookup = _extends({}, selectedIdsLookupSelector(apiRef));
      selectableIds.forEach((id) => {
        if (isSelected) {
          selectionLookup[id] = id;
        } else {
          delete selectionLookup[id];
        }
      });
      newSelection = Object.values(selectionLookup);
    }
    const isSelectionValid = newSelection.length < 2 || canHaveMultipleSelection;
    if (isSelectionValid) {
      apiRef.current.setRowSelectionModel(newSelection);
    }
  }, [apiRef, logger, canHaveMultipleSelection]);
  const selectRowRange = React129.useCallback(({
    startId,
    endId
  }, isSelected = true, resetSelection = false) => {
    if (!apiRef.current.getRow(startId) || !apiRef.current.getRow(endId)) {
      return;
    }
    logger.debug(`Expanding selection from row ${startId} to row ${endId}`);
    const allPagesRowIds = gridExpandedSortedRowIdsSelector(apiRef);
    const startIndex = allPagesRowIds.indexOf(startId);
    const endIndex = allPagesRowIds.indexOf(endId);
    const [start, end] = startIndex > endIndex ? [endIndex, startIndex] : [startIndex, endIndex];
    const rowsBetweenStartAndEnd = allPagesRowIds.slice(start, end + 1);
    apiRef.current.selectRows(rowsBetweenStartAndEnd, isSelected, resetSelection);
  }, [apiRef, logger]);
  const selectionPublicApi = {
    selectRow,
    setRowSelectionModel,
    getSelectedRows,
    isRowSelected,
    isRowSelectable
  };
  const selectionPrivateApi = {
    selectRows,
    selectRowRange
  };
  useGridApiMethod(apiRef, selectionPublicApi, "public");
  useGridApiMethod(apiRef, selectionPrivateApi, props.signature === GridSignature.DataGrid ? "private" : "public");
  const removeOutdatedSelection = React129.useCallback(() => {
    if (props.keepNonExistentRowsSelected) {
      return;
    }
    const currentSelection = gridRowSelectionStateSelector(apiRef.current.state);
    const rowsLookup = gridRowsLookupSelector(apiRef);
    const selectionLookup = _extends({}, selectedIdsLookupSelector(apiRef));
    let hasChanged = false;
    currentSelection.forEach((id) => {
      if (!rowsLookup[id]) {
        delete selectionLookup[id];
        hasChanged = true;
      }
    });
    if (hasChanged) {
      apiRef.current.setRowSelectionModel(Object.values(selectionLookup));
    }
  }, [apiRef, props.keepNonExistentRowsSelected]);
  const handleSingleRowSelection = React129.useCallback((id, event) => {
    const hasCtrlKey = event.metaKey || event.ctrlKey;
    const isMultipleSelectionDisabled = !checkboxSelection && !hasCtrlKey && !isKeyboardEvent(event);
    const resetSelection = !canHaveMultipleSelection || isMultipleSelectionDisabled;
    const isSelected = apiRef.current.isRowSelected(id);
    if (resetSelection) {
      apiRef.current.selectRow(id, !isMultipleSelectionDisabled ? !isSelected : true, true);
    } else {
      apiRef.current.selectRow(id, !isSelected, false);
    }
  }, [apiRef, canHaveMultipleSelection, checkboxSelection]);
  const handleRowClick = React129.useCallback((params, event) => {
    var _a;
    if (disableRowSelectionOnClick) {
      return;
    }
    const field = (_a = event.target.closest(`.${gridClasses.cell}`)) == null ? void 0 : _a.getAttribute("data-field");
    if (field === GRID_CHECKBOX_SELECTION_COL_DEF.field) {
      return;
    }
    if (field === GRID_DETAIL_PANEL_TOGGLE_FIELD) {
      return;
    }
    if (field) {
      const column = apiRef.current.getColumn(field);
      if ((column == null ? void 0 : column.type) === GRID_ACTIONS_COLUMN_TYPE) {
        return;
      }
    }
    const rowNode = apiRef.current.getRowNode(params.id);
    if (rowNode.type === "pinnedRow") {
      return;
    }
    if (event.shiftKey && canHaveMultipleSelection) {
      expandMouseRowRangeSelection(params.id);
    } else {
      handleSingleRowSelection(params.id, event);
    }
  }, [disableRowSelectionOnClick, canHaveMultipleSelection, apiRef, expandMouseRowRangeSelection, handleSingleRowSelection]);
  const preventSelectionOnShift = React129.useCallback((params, event) => {
    var _a;
    if (canHaveMultipleSelection && event.shiftKey) {
      (_a = window.getSelection()) == null ? void 0 : _a.removeAllRanges();
    }
  }, [canHaveMultipleSelection]);
  const handleRowSelectionCheckboxChange = React129.useCallback((params, event) => {
    if (canHaveMultipleSelection && event.nativeEvent.shiftKey) {
      expandMouseRowRangeSelection(params.id);
    } else {
      apiRef.current.selectRow(params.id, params.value, !canHaveMultipleSelection);
    }
  }, [apiRef, expandMouseRowRangeSelection, canHaveMultipleSelection]);
  const handleHeaderSelectionCheckboxChange = React129.useCallback((params) => {
    const shouldLimitSelectionToCurrentPage = props.checkboxSelectionVisibleOnly && props.pagination;
    const rowsToBeSelected = shouldLimitSelectionToCurrentPage ? gridPaginatedVisibleSortedGridRowIdsSelector(apiRef) : gridExpandedSortedRowIdsSelector(apiRef);
    const filterModel = gridFilterModelSelector(apiRef);
    apiRef.current.selectRows(rowsToBeSelected, params.value, (filterModel == null ? void 0 : filterModel.items.length) > 0);
  }, [apiRef, props.checkboxSelectionVisibleOnly, props.pagination]);
  const handleCellKeyDown = React129.useCallback((params, event) => {
    if (apiRef.current.getCellMode(params.id, params.field) === GridCellModes.Edit) {
      return;
    }
    if (isEventTargetInPortal(event)) {
      return;
    }
    if (isNavigationKey(event.key) && event.shiftKey) {
      const focusCell = gridFocusCellSelector(apiRef);
      if (focusCell && focusCell.id !== params.id) {
        event.preventDefault();
        const isNextRowSelected = apiRef.current.isRowSelected(focusCell.id);
        if (!canHaveMultipleSelection) {
          apiRef.current.selectRow(focusCell.id, !isNextRowSelected, true);
          return;
        }
        const newRowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(focusCell.id);
        const previousRowIndex = apiRef.current.getRowIndexRelativeToVisibleRows(params.id);
        let start;
        let end;
        if (newRowIndex > previousRowIndex) {
          if (isNextRowSelected) {
            start = previousRowIndex;
            end = newRowIndex - 1;
          } else {
            start = previousRowIndex;
            end = newRowIndex;
          }
        } else {
          if (isNextRowSelected) {
            start = newRowIndex + 1;
            end = previousRowIndex;
          } else {
            start = newRowIndex;
            end = previousRowIndex;
          }
        }
        const rowsBetweenStartAndEnd = visibleRows.rows.slice(start, end + 1).map((row) => row.id);
        apiRef.current.selectRows(rowsBetweenStartAndEnd, !isNextRowSelected);
        return;
      }
    }
    if (event.key === " " && event.shiftKey) {
      event.preventDefault();
      handleSingleRowSelection(params.id, event);
      return;
    }
    if (event.key === "a" && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      selectRows(apiRef.current.getAllRowIds(), true);
    }
  }, [apiRef, handleSingleRowSelection, selectRows, visibleRows.rows, canHaveMultipleSelection]);
  useGridApiEventHandler(apiRef, "sortedRowsSet", runIfRowSelectionIsEnabled(removeOutdatedSelection));
  useGridApiEventHandler(apiRef, "rowClick", runIfRowSelectionIsEnabled(handleRowClick));
  useGridApiEventHandler(apiRef, "rowSelectionCheckboxChange", runIfRowSelectionIsEnabled(handleRowSelectionCheckboxChange));
  useGridApiEventHandler(apiRef, "headerSelectionCheckboxChange", handleHeaderSelectionCheckboxChange);
  useGridApiEventHandler(apiRef, "cellMouseDown", runIfRowSelectionIsEnabled(preventSelectionOnShift));
  useGridApiEventHandler(apiRef, "cellKeyDown", runIfRowSelectionIsEnabled(handleCellKeyDown));
  React129.useEffect(() => {
    if (propRowSelectionModel !== void 0) {
      apiRef.current.setRowSelectionModel(propRowSelectionModel);
    }
  }, [apiRef, propRowSelectionModel, props.rowSelection]);
  React129.useEffect(() => {
    if (!props.rowSelection) {
      apiRef.current.setRowSelectionModel([]);
    }
  }, [apiRef, props.rowSelection]);
  const isStateControlled = propRowSelectionModel != null;
  React129.useEffect(() => {
    if (isStateControlled || !props.rowSelection) {
      return;
    }
    const currentSelection = gridRowSelectionStateSelector(apiRef.current.state);
    if (isRowSelectable) {
      const newSelection = currentSelection.filter((id) => isRowSelectable(id));
      if (newSelection.length < currentSelection.length) {
        apiRef.current.setRowSelectionModel(newSelection);
      }
    }
  }, [apiRef, isRowSelectable, isStateControlled, props.rowSelection]);
  React129.useEffect(() => {
    if (!props.rowSelection || isStateControlled) {
      return;
    }
    const currentSelection = gridRowSelectionStateSelector(apiRef.current.state);
    if (!canHaveMultipleSelection && currentSelection.length > 1) {
      apiRef.current.setRowSelectionModel([]);
    }
  }, [apiRef, canHaveMultipleSelection, checkboxSelection, isStateControlled, props.rowSelection]);
};

// node_modules/@mui/x-data-grid/hooks/features/rowSelection/useGridRowSelectionPreProcessors.js
init_extends();
var React130 = __toESM(require_react());
init_esm();
var useUtilityClasses40 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  return React130.useMemo(() => {
    const slots = {
      cellCheckbox: ["cellCheckbox"],
      columnHeaderCheckbox: ["columnHeaderCheckbox"]
    };
    return composeClasses(slots, getDataGridUtilityClass, classes2);
  }, [classes2]);
};
var useGridRowSelectionPreProcessors = (apiRef, props) => {
  const ownerState = {
    classes: props.classes
  };
  const classes2 = useUtilityClasses40(ownerState);
  const updateSelectionColumn = React130.useCallback((columnsState) => {
    const selectionColumn = _extends({}, GRID_CHECKBOX_SELECTION_COL_DEF, {
      cellClassName: classes2.cellCheckbox,
      headerClassName: classes2.columnHeaderCheckbox,
      headerName: apiRef.current.getLocaleText("checkboxSelectionHeaderName")
    });
    const shouldHaveSelectionColumn = props.checkboxSelection;
    const haveSelectionColumn = columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] != null;
    if (shouldHaveSelectionColumn && !haveSelectionColumn) {
      columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] = selectionColumn;
      columnsState.orderedFields = [GRID_CHECKBOX_SELECTION_FIELD, ...columnsState.orderedFields];
    } else if (!shouldHaveSelectionColumn && haveSelectionColumn) {
      delete columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD];
      columnsState.orderedFields = columnsState.orderedFields.filter((field) => field !== GRID_CHECKBOX_SELECTION_FIELD);
    } else if (shouldHaveSelectionColumn && haveSelectionColumn) {
      columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD] = _extends({}, selectionColumn, columnsState.lookup[GRID_CHECKBOX_SELECTION_FIELD]);
    }
    return columnsState;
  }, [apiRef, classes2, props.checkboxSelection]);
  useGridRegisterPipeProcessor(apiRef, "hydrateColumns", updateSelectionColumn);
};

// node_modules/@mui/x-data-grid/hooks/features/sorting/useGridSorting.js
init_extends();
var React131 = __toESM(require_react());
init_esm();
var sortingStateInitializer = (state, props) => {
  var _a, _b;
  const sortModel = props.sortModel ?? ((_b = (_a = props.initialState) == null ? void 0 : _a.sorting) == null ? void 0 : _b.sortModel) ?? [];
  return _extends({}, state, {
    sorting: {
      sortModel: sanitizeSortModel(sortModel, props.disableMultipleColumnsSorting),
      sortedRows: []
    }
  });
};
var useGridSorting = (apiRef, props) => {
  var _a, _b;
  const logger = useGridLogger(apiRef, "useGridSorting");
  apiRef.current.registerControlState({
    stateId: "sortModel",
    propModel: props.sortModel,
    propOnChange: props.onSortModelChange,
    stateSelector: gridSortModelSelector,
    changeEvent: "sortModelChange"
  });
  const upsertSortModel = React131.useCallback((field, sortItem) => {
    const sortModel = gridSortModelSelector(apiRef);
    const existingIdx = sortModel.findIndex((c) => c.field === field);
    let newSortModel = [...sortModel];
    if (existingIdx > -1) {
      if ((sortItem == null ? void 0 : sortItem.sort) == null) {
        newSortModel.splice(existingIdx, 1);
      } else {
        newSortModel.splice(existingIdx, 1, sortItem);
      }
    } else {
      newSortModel = [...sortModel, sortItem];
    }
    return newSortModel;
  }, [apiRef]);
  const createSortItem = React131.useCallback((col, directionOverride) => {
    const sortModel = gridSortModelSelector(apiRef);
    const existing = sortModel.find((c) => c.field === col.field);
    if (existing) {
      const nextSort = directionOverride === void 0 ? getNextGridSortDirection(col.sortingOrder ?? props.sortingOrder, existing.sort) : directionOverride;
      return nextSort === void 0 ? void 0 : _extends({}, existing, {
        sort: nextSort
      });
    }
    return {
      field: col.field,
      sort: directionOverride === void 0 ? getNextGridSortDirection(col.sortingOrder ?? props.sortingOrder) : directionOverride
    };
  }, [apiRef, props.sortingOrder]);
  const addColumnMenuItem = React131.useCallback((columnMenuItems, colDef) => {
    if (colDef == null || colDef.sortable === false || props.disableColumnSorting) {
      return columnMenuItems;
    }
    const sortingOrder = colDef.sortingOrder || props.sortingOrder;
    if (sortingOrder.some((item) => !!item)) {
      return [...columnMenuItems, "columnMenuSortItem"];
    }
    return columnMenuItems;
  }, [props.sortingOrder, props.disableColumnSorting]);
  const applySorting = React131.useCallback(() => {
    apiRef.current.setState((state) => {
      if (props.sortingMode === "server") {
        logger.debug("Skipping sorting rows as sortingMode = server");
        return _extends({}, state, {
          sorting: _extends({}, state.sorting, {
            sortedRows: getTreeNodeDescendants(gridRowTreeSelector(apiRef), GRID_ROOT_GROUP_ID, false)
          })
        });
      }
      const sortModel = gridSortModelSelector(state, apiRef.current.instanceId);
      const sortRowList = buildAggregatedSortingApplier(sortModel, apiRef);
      const sortedRows = apiRef.current.applyStrategyProcessor("sorting", {
        sortRowList
      });
      return _extends({}, state, {
        sorting: _extends({}, state.sorting, {
          sortedRows
        })
      });
    });
    apiRef.current.publishEvent("sortedRowsSet");
    apiRef.current.forceUpdate();
  }, [apiRef, logger, props.sortingMode]);
  const setSortModel = React131.useCallback((model) => {
    const currentModel = gridSortModelSelector(apiRef);
    if (currentModel !== model) {
      logger.debug(`Setting sort model`);
      apiRef.current.setState(mergeStateWithSortModel(model, props.disableMultipleColumnsSorting));
      apiRef.current.forceUpdate();
      apiRef.current.applySorting();
    }
  }, [apiRef, logger, props.disableMultipleColumnsSorting]);
  const sortColumn = React131.useCallback((field, direction, allowMultipleSorting) => {
    const column = apiRef.current.getColumn(field);
    const sortItem = createSortItem(column, direction);
    let sortModel;
    if (!allowMultipleSorting || props.disableMultipleColumnsSorting) {
      sortModel = (sortItem == null ? void 0 : sortItem.sort) == null ? [] : [sortItem];
    } else {
      sortModel = upsertSortModel(column.field, sortItem);
    }
    apiRef.current.setSortModel(sortModel);
  }, [apiRef, upsertSortModel, createSortItem, props.disableMultipleColumnsSorting]);
  const getSortModel = React131.useCallback(() => gridSortModelSelector(apiRef), [apiRef]);
  const getSortedRows = React131.useCallback(() => {
    const sortedRows = gridSortedRowEntriesSelector(apiRef);
    return sortedRows.map((row) => row.model);
  }, [apiRef]);
  const getSortedRowIds = React131.useCallback(() => gridSortedRowIdsSelector(apiRef), [apiRef]);
  const getRowIdFromRowIndex = React131.useCallback((index) => apiRef.current.getSortedRowIds()[index], [apiRef]);
  const sortApi = {
    getSortModel,
    getSortedRows,
    getSortedRowIds,
    getRowIdFromRowIndex,
    setSortModel,
    sortColumn,
    applySorting
  };
  useGridApiMethod(apiRef, sortApi, "public");
  const stateExportPreProcessing = React131.useCallback((prevState, context) => {
    var _a2, _b2;
    const sortModelToExport = gridSortModelSelector(apiRef);
    const shouldExportSortModel = (
      // Always export if the `exportOnlyDirtyModels` property is not activated
      !context.exportOnlyDirtyModels || // Always export if the model is controlled
      props.sortModel != null || // Always export if the model has been initialized
      ((_b2 = (_a2 = props.initialState) == null ? void 0 : _a2.sorting) == null ? void 0 : _b2.sortModel) != null || // Export if the model is not empty
      sortModelToExport.length > 0
    );
    if (!shouldExportSortModel) {
      return prevState;
    }
    return _extends({}, prevState, {
      sorting: {
        sortModel: sortModelToExport
      }
    });
  }, [apiRef, props.sortModel, (_b = (_a = props.initialState) == null ? void 0 : _a.sorting) == null ? void 0 : _b.sortModel]);
  const stateRestorePreProcessing = React131.useCallback((params, context) => {
    var _a2;
    const sortModel = (_a2 = context.stateToRestore.sorting) == null ? void 0 : _a2.sortModel;
    if (sortModel == null) {
      return params;
    }
    apiRef.current.setState(mergeStateWithSortModel(sortModel, props.disableMultipleColumnsSorting));
    return _extends({}, params, {
      callbacks: [...params.callbacks, apiRef.current.applySorting]
    });
  }, [apiRef, props.disableMultipleColumnsSorting]);
  const flatSortingMethod = React131.useCallback((params) => {
    const rowTree = gridRowTreeSelector(apiRef);
    const rootGroupNode = rowTree[GRID_ROOT_GROUP_ID];
    const sortedChildren = params.sortRowList ? params.sortRowList(rootGroupNode.children.map((childId) => rowTree[childId])) : [...rootGroupNode.children];
    if (rootGroupNode.footerId != null) {
      sortedChildren.push(rootGroupNode.footerId);
    }
    return sortedChildren;
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "exportState", stateExportPreProcessing);
  useGridRegisterPipeProcessor(apiRef, "restoreState", stateRestorePreProcessing);
  useGridRegisterStrategyProcessor(apiRef, GRID_DEFAULT_STRATEGY, "sorting", flatSortingMethod);
  const handleColumnHeaderClick = React131.useCallback(({
    field,
    colDef
  }, event) => {
    if (!colDef.sortable || props.disableColumnSorting) {
      return;
    }
    const allowMultipleSorting = event.shiftKey || event.metaKey || event.ctrlKey;
    sortColumn(field, void 0, allowMultipleSorting);
  }, [sortColumn, props.disableColumnSorting]);
  const handleColumnHeaderKeyDown = React131.useCallback(({
    field,
    colDef
  }, event) => {
    if (!colDef.sortable || props.disableColumnSorting) {
      return;
    }
    if (event.key === "Enter" && !event.ctrlKey && !event.metaKey) {
      sortColumn(field, void 0, event.shiftKey);
    }
  }, [sortColumn, props.disableColumnSorting]);
  const handleColumnsChange = React131.useCallback(() => {
    const sortModel = gridSortModelSelector(apiRef);
    const latestColumns = gridColumnLookupSelector(apiRef);
    if (sortModel.length > 0) {
      const newModel = sortModel.filter((sortItem) => latestColumns[sortItem.field]);
      if (newModel.length < sortModel.length) {
        apiRef.current.setSortModel(newModel);
      }
    }
  }, [apiRef]);
  const handleStrategyProcessorChange = React131.useCallback((methodName) => {
    if (methodName === "sorting") {
      apiRef.current.applySorting();
    }
  }, [apiRef]);
  useGridRegisterPipeProcessor(apiRef, "columnMenu", addColumnMenuItem);
  useGridApiEventHandler(apiRef, "columnHeaderClick", handleColumnHeaderClick);
  useGridApiEventHandler(apiRef, "columnHeaderKeyDown", handleColumnHeaderKeyDown);
  useGridApiEventHandler(apiRef, "rowsSet", apiRef.current.applySorting);
  useGridApiEventHandler(apiRef, "columnsChange", handleColumnsChange);
  useGridApiEventHandler(apiRef, "activeStrategyProcessorChange", handleStrategyProcessorChange);
  useFirstRender(() => {
    apiRef.current.applySorting();
  });
  useEnhancedEffect_default(() => {
    if (props.sortModel !== void 0) {
      apiRef.current.setSortModel(props.sortModel);
    }
  }, [apiRef, props.sortModel]);
};

// node_modules/@mui/x-data-grid/hooks/features/scroll/useGridScroll.js
var React132 = __toESM(require_react());
function scrollIntoView(dimensions) {
  const {
    clientHeight,
    scrollTop,
    offsetHeight,
    offsetTop
  } = dimensions;
  const elementBottom = offsetTop + offsetHeight;
  if (offsetHeight > clientHeight) {
    return offsetTop;
  }
  if (elementBottom - clientHeight > scrollTop) {
    return elementBottom - clientHeight;
  }
  if (offsetTop < scrollTop) {
    return offsetTop;
  }
  return void 0;
}
var useGridScroll = (apiRef, props) => {
  const theme = useTheme();
  const logger = useGridLogger(apiRef, "useGridScroll");
  const colRef = apiRef.current.columnHeadersContainerRef;
  const virtualScrollerRef = apiRef.current.virtualScrollerRef;
  const visibleSortedRows = useGridSelector(apiRef, gridExpandedSortedRowEntriesSelector);
  const scrollToIndexes = React132.useCallback((params) => {
    var _a;
    const dimensions = gridDimensionsSelector(apiRef.current.state);
    const totalRowCount = gridRowCountSelector(apiRef);
    const visibleColumns = gridVisibleColumnDefinitionsSelector(apiRef);
    const scrollToHeader = params.rowIndex == null;
    if (!scrollToHeader && totalRowCount === 0 || visibleColumns.length === 0) {
      return false;
    }
    logger.debug(`Scrolling to cell at row ${params.rowIndex}, col: ${params.colIndex} `);
    let scrollCoordinates = {};
    if (params.colIndex !== void 0) {
      const columnPositions = gridColumnPositionsSelector(apiRef);
      let cellWidth;
      if (typeof params.rowIndex !== "undefined") {
        const rowId = (_a = visibleSortedRows[params.rowIndex]) == null ? void 0 : _a.id;
        const cellColSpanInfo = apiRef.current.unstable_getCellColSpanInfo(rowId, params.colIndex);
        if (cellColSpanInfo && !cellColSpanInfo.spannedByColSpan) {
          cellWidth = cellColSpanInfo.cellProps.width;
        }
      }
      if (typeof cellWidth === "undefined") {
        cellWidth = visibleColumns[params.colIndex].computedWidth;
      }
      scrollCoordinates.left = scrollIntoView({
        clientHeight: dimensions.viewportInnerSize.width,
        scrollTop: Math.abs(virtualScrollerRef.current.scrollLeft),
        offsetHeight: cellWidth,
        offsetTop: columnPositions[params.colIndex]
      });
    }
    if (params.rowIndex !== void 0) {
      const rowsMeta = gridRowsMetaSelector(apiRef.current.state);
      const page = gridPageSelector(apiRef);
      const pageSize = gridPageSizeSelector(apiRef);
      const elementIndex = !props.pagination ? params.rowIndex : params.rowIndex - page * pageSize;
      const targetOffsetHeight = rowsMeta.positions[elementIndex + 1] ? rowsMeta.positions[elementIndex + 1] - rowsMeta.positions[elementIndex] : rowsMeta.currentPageTotalHeight - rowsMeta.positions[elementIndex];
      scrollCoordinates.top = scrollIntoView({
        clientHeight: dimensions.viewportInnerSize.height,
        scrollTop: virtualScrollerRef.current.scrollTop,
        offsetHeight: targetOffsetHeight,
        offsetTop: rowsMeta.positions[elementIndex]
      });
    }
    scrollCoordinates = apiRef.current.unstable_applyPipeProcessors("scrollToIndexes", scrollCoordinates, params);
    if (typeof scrollCoordinates.left !== void 0 || typeof scrollCoordinates.top !== void 0) {
      apiRef.current.scroll(scrollCoordinates);
      return true;
    }
    return false;
  }, [logger, apiRef, virtualScrollerRef, props.pagination, visibleSortedRows]);
  const scroll = React132.useCallback((params) => {
    if (virtualScrollerRef.current && params.left !== void 0 && colRef.current) {
      const direction = theme.direction === "rtl" ? -1 : 1;
      colRef.current.scrollLeft = params.left;
      virtualScrollerRef.current.scrollLeft = direction * params.left;
      logger.debug(`Scrolling left: ${params.left}`);
    }
    if (virtualScrollerRef.current && params.top !== void 0) {
      virtualScrollerRef.current.scrollTop = params.top;
      logger.debug(`Scrolling top: ${params.top}`);
    }
    logger.debug(`Scrolling, updating container, and viewport`);
  }, [virtualScrollerRef, theme.direction, colRef, logger]);
  const getScrollPosition = React132.useCallback(() => {
    if (!(virtualScrollerRef == null ? void 0 : virtualScrollerRef.current)) {
      return {
        top: 0,
        left: 0
      };
    }
    return {
      top: virtualScrollerRef.current.scrollTop,
      left: virtualScrollerRef.current.scrollLeft
    };
  }, [virtualScrollerRef]);
  const scrollApi = {
    scroll,
    scrollToIndexes,
    getScrollPosition
  };
  useGridApiMethod(apiRef, scrollApi, "public");
};

// node_modules/@mui/x-data-grid/hooks/features/events/useGridEvents.js
function useGridEvents(apiRef, props) {
  useGridApiOptionHandler(apiRef, "columnHeaderClick", props.onColumnHeaderClick);
  useGridApiOptionHandler(apiRef, "columnHeaderDoubleClick", props.onColumnHeaderDoubleClick);
  useGridApiOptionHandler(apiRef, "columnHeaderOver", props.onColumnHeaderOver);
  useGridApiOptionHandler(apiRef, "columnHeaderOut", props.onColumnHeaderOut);
  useGridApiOptionHandler(apiRef, "columnHeaderEnter", props.onColumnHeaderEnter);
  useGridApiOptionHandler(apiRef, "columnHeaderLeave", props.onColumnHeaderLeave);
  useGridApiOptionHandler(apiRef, "cellClick", props.onCellClick);
  useGridApiOptionHandler(apiRef, "cellDoubleClick", props.onCellDoubleClick);
  useGridApiOptionHandler(apiRef, "cellKeyDown", props.onCellKeyDown);
  useGridApiOptionHandler(apiRef, "preferencePanelClose", props.onPreferencePanelClose);
  useGridApiOptionHandler(apiRef, "preferencePanelOpen", props.onPreferencePanelOpen);
  useGridApiOptionHandler(apiRef, "menuOpen", props.onMenuOpen);
  useGridApiOptionHandler(apiRef, "menuClose", props.onMenuClose);
  useGridApiOptionHandler(apiRef, "rowDoubleClick", props.onRowDoubleClick);
  useGridApiOptionHandler(apiRef, "rowClick", props.onRowClick);
  useGridApiOptionHandler(apiRef, "stateChange", props.onStateChange);
}

// node_modules/@mui/x-data-grid/hooks/features/dimensions/useGridDimensions.js
init_extends();
var React133 = __toESM(require_react());
init_esm();

// node_modules/@mui/x-data-grid/utils/throttle.js
function throttle(func, wait = 166) {
  let timeout;
  let lastArgs;
  const later = () => {
    timeout = void 0;
    func(...lastArgs);
  };
  function throttled(...args) {
    lastArgs = args;
    if (timeout === void 0) {
      timeout = setTimeout(later, wait);
    }
  }
  throttled.clear = () => {
    clearTimeout(timeout);
    timeout = void 0;
  };
  return throttled;
}

// node_modules/@mui/x-data-grid/hooks/features/dimensions/useGridDimensions.js
var EMPTY_SIZE = {
  width: 0,
  height: 0
};
var EMPTY_DIMENSIONS = {
  isReady: false,
  root: EMPTY_SIZE,
  viewportOuterSize: EMPTY_SIZE,
  viewportInnerSize: EMPTY_SIZE,
  contentSize: EMPTY_SIZE,
  minimumSize: EMPTY_SIZE,
  hasScrollX: false,
  hasScrollY: false,
  scrollbarSize: 0,
  headerHeight: 0,
  headerFilterHeight: 0,
  rowWidth: 0,
  rowHeight: 0,
  columnsTotalWidth: 0,
  leftPinnedWidth: 0,
  rightPinnedWidth: 0,
  headersTotalHeight: 0,
  topContainerHeight: 0,
  bottomContainerHeight: 0
};
var dimensionsStateInitializer = (state) => {
  const dimensions = EMPTY_DIMENSIONS;
  return _extends({}, state, {
    dimensions
  });
};
function useGridDimensions(apiRef, props) {
  const logger = useGridLogger(apiRef, "useResizeContainer");
  const errorShown = React133.useRef(false);
  const rootDimensionsRef = React133.useRef(EMPTY_SIZE);
  const rowsMeta = useGridSelector(apiRef, gridRowsMetaSelector);
  const pinnedColumns = useGridSelector(apiRef, gridVisiblePinnedColumnDefinitionsSelector);
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const rowHeight = Math.floor(props.rowHeight * densityFactor);
  const headerHeight = Math.floor(props.columnHeaderHeight * densityFactor);
  const headerFilterHeight = Math.floor((props.headerFilterHeight ?? props.columnHeaderHeight) * densityFactor);
  const columnsTotalWidth = roundToDecimalPlaces(gridColumnsTotalWidthSelector(apiRef), 6);
  const headersTotalHeight = getTotalHeaderHeight(apiRef, props);
  const leftPinnedWidth = pinnedColumns.left.reduce((w, col) => w + col.computedWidth, 0);
  const rightPinnedWidth = pinnedColumns.right.reduce((w, col) => w + col.computedWidth, 0);
  const [savedSize, setSavedSize] = React133.useState();
  const debouncedSetSavedSize = React133.useMemo(() => throttle(setSavedSize, props.resizeThrottleMs), [props.resizeThrottleMs]);
  const previousSize = React133.useRef();
  const getRootDimensions = () => apiRef.current.state.dimensions;
  const setDimensions = useEventCallback_default((dimensions2) => {
    apiRef.current.setState((state) => _extends({}, state, {
      dimensions: dimensions2
    }));
  });
  const resize = React133.useCallback(() => {
    const element = apiRef.current.mainElementRef.current;
    if (!element) {
      return;
    }
    const computedStyle = ownerWindow(element).getComputedStyle(element);
    const newSize = {
      width: parseFloat(computedStyle.width) || 0,
      height: parseFloat(computedStyle.height) || 0
    };
    if (!previousSize.current || !areElementSizesEqual(previousSize.current, newSize)) {
      apiRef.current.publishEvent("resize", newSize);
      previousSize.current = newSize;
    }
  }, [apiRef]);
  const getViewportPageSize = React133.useCallback(() => {
    const dimensions2 = gridDimensionsSelector(apiRef.current.state);
    if (!dimensions2.isReady) {
      return 0;
    }
    const currentPage = getVisibleRows(apiRef, {
      pagination: props.pagination,
      paginationMode: props.paginationMode
    });
    if (props.getRowHeight) {
      const renderContext = gridRenderContextSelector(apiRef);
      const viewportPageSize = renderContext.lastRowIndex - renderContext.firstRowIndex;
      return Math.min(viewportPageSize - 1, currentPage.rows.length);
    }
    const maximumPageSizeWithoutScrollBar = Math.floor(dimensions2.viewportInnerSize.height / rowHeight);
    return Math.min(maximumPageSizeWithoutScrollBar, currentPage.rows.length);
  }, [apiRef, props.pagination, props.paginationMode, props.getRowHeight, rowHeight]);
  const updateDimensions = React133.useCallback(() => {
    var _a, _b;
    const rootElement = apiRef.current.rootElementRef.current;
    const pinnedRowsHeight = calculatePinnedRowsHeight(apiRef);
    const scrollbarSize = measureScrollbarSize(rootElement, columnsTotalWidth, props.scrollbarSize);
    const topContainerHeight = headersTotalHeight + pinnedRowsHeight.top;
    const bottomContainerHeight = pinnedRowsHeight.bottom;
    const nonPinnedColumnsTotalWidth = columnsTotalWidth - leftPinnedWidth - rightPinnedWidth;
    const contentSize = {
      width: nonPinnedColumnsTotalWidth,
      height: rowsMeta.currentPageTotalHeight
    };
    let viewportOuterSize;
    let viewportInnerSize;
    let hasScrollX = false;
    let hasScrollY = false;
    if (props.autoHeight) {
      hasScrollY = false;
      hasScrollX = Math.round(columnsTotalWidth) > Math.round(rootDimensionsRef.current.width);
      viewportOuterSize = {
        width: rootDimensionsRef.current.width,
        height: topContainerHeight + bottomContainerHeight + contentSize.height
      };
      viewportInnerSize = {
        width: Math.max(0, viewportOuterSize.width - (hasScrollY ? scrollbarSize : 0)),
        height: Math.max(0, viewportOuterSize.height - (hasScrollX ? scrollbarSize : 0))
      };
    } else {
      viewportOuterSize = {
        width: rootDimensionsRef.current.width,
        height: rootDimensionsRef.current.height
      };
      viewportInnerSize = {
        width: Math.max(0, viewportOuterSize.width - leftPinnedWidth - rightPinnedWidth),
        height: Math.max(0, viewportOuterSize.height - topContainerHeight - bottomContainerHeight)
      };
      const content = contentSize;
      const container = viewportInnerSize;
      const hasScrollXIfNoYScrollBar = content.width > container.width;
      const hasScrollYIfNoXScrollBar = content.height > container.height;
      if (hasScrollXIfNoYScrollBar || hasScrollYIfNoXScrollBar) {
        hasScrollY = hasScrollYIfNoXScrollBar;
        hasScrollX = content.width + (hasScrollY ? scrollbarSize : 0) > container.width;
        if (hasScrollX) {
          hasScrollY = content.height + scrollbarSize > container.height;
        }
      }
      if (hasScrollY) {
        viewportInnerSize.width -= scrollbarSize;
      }
      if (hasScrollX) {
        viewportInnerSize.height -= scrollbarSize;
      }
    }
    const rowWidth = Math.max(viewportOuterSize.width, columnsTotalWidth + (hasScrollY ? scrollbarSize : 0));
    const minimumSize = {
      width: columnsTotalWidth,
      height: topContainerHeight + contentSize.height + bottomContainerHeight
    };
    const newDimensions = {
      isReady: true,
      root: rootDimensionsRef.current,
      viewportOuterSize,
      viewportInnerSize,
      contentSize,
      minimumSize,
      hasScrollX,
      hasScrollY,
      scrollbarSize,
      headerHeight,
      headerFilterHeight,
      rowWidth,
      rowHeight,
      columnsTotalWidth,
      leftPinnedWidth,
      rightPinnedWidth,
      headersTotalHeight,
      topContainerHeight,
      bottomContainerHeight
    };
    const prevDimensions = apiRef.current.state.dimensions;
    setDimensions(newDimensions);
    if (!areElementSizesEqual(newDimensions.viewportInnerSize, prevDimensions.viewportInnerSize)) {
      apiRef.current.publishEvent("viewportInnerSizeChange", newDimensions.viewportInnerSize);
    }
    (_b = (_a = apiRef.current).updateRenderContext) == null ? void 0 : _b.call(_a);
  }, [apiRef, setDimensions, props.scrollbarSize, props.autoHeight, rowsMeta.currentPageTotalHeight, rowHeight, headerHeight, headerFilterHeight, columnsTotalWidth, headersTotalHeight, leftPinnedWidth, rightPinnedWidth]);
  const apiPublic = {
    resize,
    getRootDimensions
  };
  const apiPrivate = {
    updateDimensions,
    getViewportPageSize
  };
  useGridApiMethod(apiRef, apiPublic, "public");
  useGridApiMethod(apiRef, apiPrivate, "private");
  useEnhancedEffect_default(() => {
    if (savedSize) {
      updateDimensions();
      apiRef.current.publishEvent("debouncedResize", rootDimensionsRef.current);
    }
  }, [apiRef, savedSize, updateDimensions]);
  const root = apiRef.current.rootElementRef.current;
  const dimensions = apiRef.current.state.dimensions;
  useEnhancedEffect_default(() => {
    if (!root) {
      return;
    }
    const set = (k, v) => root.style.setProperty(k, v);
    set("--DataGrid-width", `${dimensions.viewportOuterSize.width}px`);
    set("--DataGrid-hasScrollX", `${Number(dimensions.hasScrollX)}`);
    set("--DataGrid-hasScrollY", `${Number(dimensions.hasScrollY)}`);
    set("--DataGrid-scrollbarSize", `${dimensions.scrollbarSize}px`);
    set("--DataGrid-rowWidth", `${dimensions.rowWidth}px`);
    set("--DataGrid-columnsTotalWidth", `${dimensions.columnsTotalWidth}px`);
    set("--DataGrid-leftPinnedWidth", `${dimensions.leftPinnedWidth}px`);
    set("--DataGrid-rightPinnedWidth", `${dimensions.rightPinnedWidth}px`);
    set("--DataGrid-headerHeight", `${dimensions.headerHeight}px`);
    set("--DataGrid-headersTotalHeight", `${dimensions.headersTotalHeight}px`);
    set("--DataGrid-topContainerHeight", `${dimensions.topContainerHeight}px`);
    set("--DataGrid-bottomContainerHeight", `${dimensions.bottomContainerHeight}px`);
    set("--height", `${dimensions.rowHeight}px`);
  }, [root, dimensions]);
  const isFirstSizing = React133.useRef(true);
  const handleResize = React133.useCallback((size) => {
    rootDimensionsRef.current = size;
    const isJSDOM2 = /jsdom/.test(window.navigator.userAgent);
    if (size.height === 0 && !errorShown.current && !props.autoHeight && !isJSDOM2) {
      logger.error(["The parent DOM element of the data grid has an empty height.", "Please make sure that this element has an intrinsic height.", "The grid displays with a height of 0px.", "", "More details: https://mui.com/r/x-data-grid-no-dimensions."].join("\n"));
      errorShown.current = true;
    }
    if (size.width === 0 && !errorShown.current && !isJSDOM2) {
      logger.error(["The parent DOM element of the data grid has an empty width.", "Please make sure that this element has an intrinsic width.", "The grid displays with a width of 0px.", "", "More details: https://mui.com/r/x-data-grid-no-dimensions."].join("\n"));
      errorShown.current = true;
    }
    if (isFirstSizing.current) {
      setSavedSize(size);
      isFirstSizing.current = false;
      return;
    }
    debouncedSetSavedSize(size);
  }, [props.autoHeight, debouncedSetSavedSize, logger]);
  useEnhancedEffect_default(updateDimensions, [updateDimensions]);
  useGridApiOptionHandler(apiRef, "sortedRowsSet", updateDimensions);
  useGridApiOptionHandler(apiRef, "paginationModelChange", updateDimensions);
  useGridApiOptionHandler(apiRef, "columnsChange", updateDimensions);
  useGridApiEventHandler(apiRef, "resize", handleResize);
  useGridApiOptionHandler(apiRef, "debouncedResize", props.onResize);
}
function measureScrollbarSize(rootElement, columnsTotalWidth, scrollbarSize) {
  if (scrollbarSize !== void 0) {
    return scrollbarSize;
  }
  if (rootElement === null || columnsTotalWidth === 0) {
    return 0;
  }
  const doc = ownerDocument(rootElement);
  const scrollDiv = doc.createElement("div");
  scrollDiv.style.width = "99px";
  scrollDiv.style.height = "99px";
  scrollDiv.style.position = "absolute";
  scrollDiv.style.overflow = "scroll";
  scrollDiv.className = "scrollDiv";
  rootElement.appendChild(scrollDiv);
  const size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  rootElement.removeChild(scrollDiv);
  return size;
}
function roundToDecimalPlaces(value, decimals) {
  return Math.round(value * 10 ** decimals) / 10 ** decimals;
}
function areElementSizesEqual(a, b) {
  return a.width === b.width && a.height === b.height;
}

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsMeta.js
init_extends();
var React143 = __toESM(require_react());
init_esm();

// node_modules/@mui/x-data-grid/DataGrid/useDataGridProps.js
init_extends();
var React142 = __toESM(require_react());

// node_modules/@mui/x-data-grid/constants/defaultGridSlotsComponents.js
init_extends();

// node_modules/@mui/x-data-grid/components/GridColumnHeaders.js
init_extends();
init_objectWithoutPropertiesLoose();
var React137 = __toESM(require_react());
var import_prop_types60 = __toESM(require_prop_types());

// node_modules/@mui/x-data-grid/hooks/features/columnHeaders/useGridColumnHeaders.js
init_extends();
var React135 = __toESM(require_react());
init_clsx();

// node_modules/@mui/x-data-grid/components/columnHeaders/GridColumnGroupHeader.js
init_extends();
var React134 = __toESM(require_react());
init_esm();
var import_jsx_runtime85 = __toESM(require_jsx_runtime());
var useUtilityClasses41 = (ownerState) => {
  const {
    classes: classes2,
    headerAlign,
    isDragging,
    showLeftBorder,
    showRightBorder,
    groupId,
    pinnedPosition
  } = ownerState;
  const slots = {
    root: ["columnHeader", headerAlign === "left" && "columnHeader--alignLeft", headerAlign === "center" && "columnHeader--alignCenter", headerAlign === "right" && "columnHeader--alignRight", isDragging && "columnHeader--moving", showRightBorder && "columnHeader--withRightBorder", showLeftBorder && "columnHeader--withLeftBorder", "withBorderColor", groupId === null ? "columnHeader--emptyGroup" : "columnHeader--filledGroup", pinnedPosition === "left" && "columnHeader--pinnedLeft", pinnedPosition === "right" && "columnHeader--pinnedRight"],
    draggableContainer: ["columnHeaderDraggableContainer"],
    titleContainer: ["columnHeaderTitleContainer", "withBorderColor"],
    titleContainerContent: ["columnHeaderTitleContainerContent"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
function GridColumnGroupHeader(props) {
  var _a;
  const {
    groupId,
    width,
    depth,
    maxDepth,
    fields,
    height,
    colIndex,
    hasFocus,
    tabIndex,
    isLastColumn,
    pinnedPosition,
    style,
    indexInSection,
    sectionLength,
    gridHasFiller
  } = props;
  const rootProps = useGridRootProps();
  const headerCellRef = React134.useRef(null);
  const apiRef = useGridApiContext();
  const columnGroupsLookup = useGridSelector(apiRef, gridColumnGroupsLookupSelector);
  const group = groupId ? columnGroupsLookup[groupId] : {};
  const {
    headerName = groupId ?? "",
    description = "",
    headerAlign = void 0
  } = group;
  let headerComponent;
  const render = groupId && ((_a = columnGroupsLookup[groupId]) == null ? void 0 : _a.renderHeaderGroup);
  const renderParams = React134.useMemo(() => ({
    groupId,
    headerName,
    description,
    depth,
    maxDepth,
    fields,
    colIndex,
    isLastColumn
  }), [groupId, headerName, description, depth, maxDepth, fields, colIndex, isLastColumn]);
  if (groupId && render) {
    headerComponent = render(renderParams);
  }
  const showLeftBorder = shouldCellShowLeftBorder(pinnedPosition, indexInSection);
  const showRightBorder = shouldCellShowRightBorder(pinnedPosition, indexInSection, sectionLength, rootProps.showCellVerticalBorder, gridHasFiller);
  const ownerState = _extends({}, props, {
    classes: rootProps.classes,
    showLeftBorder,
    showRightBorder,
    headerAlign,
    depth,
    isDragging: false
  });
  const label = headerName ?? groupId;
  const id = useId();
  const elementId = groupId === null ? `empty-group-cell-${id}` : groupId;
  const classes2 = useUtilityClasses41(ownerState);
  React134.useLayoutEffect(() => {
    if (hasFocus) {
      const focusableElement = headerCellRef.current.querySelector('[tabindex="0"]');
      const elementToFocus = focusableElement || headerCellRef.current;
      elementToFocus == null ? void 0 : elementToFocus.focus();
    }
  }, [apiRef, hasFocus]);
  const publish = React134.useCallback(
    (eventName) => (event) => {
      if (isEventTargetInPortal(event)) {
        return;
      }
      apiRef.current.publishEvent(eventName, renderParams, event);
    },
    // For now this is stupid, because renderParams change all the time.
    // Need to move it's computation in the api, such that for a given depth+columnField, I can get the group parameters
    [apiRef, renderParams]
  );
  const mouseEventsHandlers = React134.useMemo(() => ({
    onKeyDown: publish("columnGroupHeaderKeyDown"),
    onFocus: publish("columnGroupHeaderFocus"),
    onBlur: publish("columnGroupHeaderBlur")
  }), [publish]);
  const headerClassName = typeof group.headerClassName === "function" ? group.headerClassName(renderParams) : group.headerClassName;
  return (0, import_jsx_runtime85.jsx)(GridGenericColumnHeaderItem, _extends({
    ref: headerCellRef,
    classes: classes2,
    columnMenuOpen: false,
    colIndex,
    height,
    isResizing: false,
    sortDirection: null,
    hasFocus: false,
    tabIndex,
    isDraggable: false,
    headerComponent,
    headerClassName,
    description,
    elementId,
    width,
    columnMenuIconButton: null,
    columnTitleIconButtons: null,
    resizable: false,
    label,
    "aria-colspan": fields.length,
    "data-fields": `|-${fields.join("-|-")}-|`,
    style
  }, mouseEventsHandlers));
}

// node_modules/@mui/x-data-grid/hooks/features/columnHeaders/useGridColumnHeaders.js
var import_jsx_runtime86 = __toESM(require_jsx_runtime());
var GridColumnHeaderRow = styled_default("div", {
  name: "MuiDataGrid",
  slot: "ColumnHeaderRow",
  overridesResolver: (_, styles) => styles.columnHeaderRow
})({
  display: "flex"
});
var useGridColumnHeaders = (props) => {
  const {
    visibleColumns,
    sortColumnLookup,
    filterColumnLookup,
    columnHeaderTabIndexState,
    columnGroupHeaderTabIndexState,
    columnHeaderFocus,
    columnGroupHeaderFocus,
    headerGroupingMaxDepth,
    columnMenuState,
    columnVisibility,
    columnGroupsHeaderStructure,
    hasOtherElementInTabSequence
  } = props;
  const [dragCol, setDragCol] = React135.useState("");
  const [resizeCol, setResizeCol] = React135.useState("");
  const apiRef = useGridPrivateApiContext();
  const theme = useTheme();
  const rootProps = useGridRootProps();
  const dimensions = useGridSelector(apiRef, gridDimensionsSelector);
  const hasVirtualization = useGridSelector(apiRef, gridVirtualizationColumnEnabledSelector);
  const columnGroupsModel = useGridSelector(apiRef, gridColumnGroupsUnwrappedModelSelector);
  const columnPositions = useGridSelector(apiRef, gridColumnPositionsSelector);
  const renderContext = useGridSelector(apiRef, gridRenderContextColumnsSelector);
  const pinnedColumns = useGridSelector(apiRef, gridVisiblePinnedColumnDefinitionsSelector);
  const offsetLeft = computeOffsetLeft(columnPositions, renderContext, theme.direction, pinnedColumns.left.length);
  const gridHasFiller = dimensions.columnsTotalWidth < dimensions.viewportOuterSize.width;
  React135.useEffect(() => {
    apiRef.current.columnHeadersContainerRef.current.scrollLeft = 0;
  }, [apiRef]);
  const handleColumnResizeStart = React135.useCallback((params) => setResizeCol(params.field), []);
  const handleColumnResizeStop = React135.useCallback(() => setResizeCol(""), []);
  const handleColumnReorderStart = React135.useCallback((params) => setDragCol(params.field), []);
  const handleColumnReorderStop = React135.useCallback(() => setDragCol(""), []);
  const leftRenderContext = React135.useMemo(() => {
    return pinnedColumns.left.length ? {
      firstColumnIndex: 0,
      lastColumnIndex: pinnedColumns.left.length
    } : null;
  }, [pinnedColumns.left.length]);
  const rightRenderContext = React135.useMemo(() => {
    return pinnedColumns.right.length ? {
      firstColumnIndex: visibleColumns.length - pinnedColumns.right.length,
      lastColumnIndex: visibleColumns.length
    } : null;
  }, [pinnedColumns.right.length, visibleColumns.length]);
  useGridApiEventHandler(apiRef, "columnResizeStart", handleColumnResizeStart);
  useGridApiEventHandler(apiRef, "columnResizeStop", handleColumnResizeStop);
  useGridApiEventHandler(apiRef, "columnHeaderDragStart", handleColumnReorderStart);
  useGridApiEventHandler(apiRef, "columnHeaderDragEnd", handleColumnReorderStop);
  const getColumnsToRender = (params) => {
    const {
      renderContext: currentContext = renderContext,
      // TODO: `minFirstColumn` is not used anymore, could be refactored out.
      maxLastColumn = visibleColumns.length
    } = params || {};
    const firstColumnToRender = !hasVirtualization ? 0 : currentContext.firstColumnIndex;
    const lastColumnToRender = !hasVirtualization ? maxLastColumn : currentContext.lastColumnIndex;
    const renderedColumns = visibleColumns.slice(firstColumnToRender, lastColumnToRender);
    return {
      renderedColumns,
      firstColumnToRender,
      lastColumnToRender
    };
  };
  const getFillers = (params, children, leftOverflow, borderTop = false) => {
    const isPinnedRight = (params == null ? void 0 : params.position) === GridPinnedColumnPosition.RIGHT;
    const isNotPinned = (params == null ? void 0 : params.position) === void 0;
    const hasScrollbarFiller = pinnedColumns.right.length > 0 && isPinnedRight || pinnedColumns.right.length === 0 && isNotPinned;
    const leftOffsetWidth = offsetLeft - leftOverflow;
    return (0, import_jsx_runtime86.jsxs)(React135.Fragment, {
      children: [isNotPinned && (0, import_jsx_runtime86.jsx)("div", {
        role: "presentation",
        style: {
          width: leftOffsetWidth
        }
      }), children, isNotPinned && (0, import_jsx_runtime86.jsx)("div", {
        role: "presentation",
        className: clsx_default(gridClasses.filler, borderTop && gridClasses["filler--borderTop"])
      }), hasScrollbarFiller && (0, import_jsx_runtime86.jsx)(GridScrollbarFillerCell, {
        header: true,
        borderTop,
        pinnedRight: isPinnedRight
      })]
    });
  };
  const getCellOffsetStyle = ({
    pinnedPosition,
    columnIndex,
    computedWidth
  }) => {
    let style;
    if (pinnedPosition === "left" || pinnedPosition === "right") {
      const pinnedOffset = getPinnedCellOffset(pinnedPosition, computedWidth, columnIndex, columnPositions, dimensions);
      if (pinnedPosition === "left") {
        style = {
          left: pinnedOffset
        };
      }
      if (pinnedPosition === "right") {
        style = {
          right: pinnedOffset
        };
      }
    }
    return style;
  };
  const getColumnHeaders = (params, other = {}) => {
    const {
      renderedColumns,
      firstColumnToRender
    } = getColumnsToRender(params);
    const columns = [];
    for (let i = 0; i < renderedColumns.length; i += 1) {
      const colDef = renderedColumns[i];
      const columnIndex = firstColumnToRender + i;
      const isFirstColumn = columnIndex === 0;
      const tabIndex = columnHeaderTabIndexState !== null && columnHeaderTabIndexState.field === colDef.field || isFirstColumn && !hasOtherElementInTabSequence ? 0 : -1;
      const hasFocus = columnHeaderFocus !== null && columnHeaderFocus.field === colDef.field;
      const open = columnMenuState.open && columnMenuState.field === colDef.field;
      const pinnedPosition = params == null ? void 0 : params.position;
      const style = getCellOffsetStyle({
        pinnedPosition,
        columnIndex,
        computedWidth: colDef.computedWidth
      });
      columns.push((0, import_jsx_runtime86.jsx)(Memoized3, _extends({}, sortColumnLookup[colDef.field], {
        columnMenuOpen: open,
        filterItemsCounter: filterColumnLookup[colDef.field] && filterColumnLookup[colDef.field].length,
        headerHeight: dimensions.headerHeight,
        isDragging: colDef.field === dragCol,
        colDef,
        colIndex: columnIndex,
        isResizing: resizeCol === colDef.field,
        isLast: columnIndex === columnPositions.length - 1,
        hasFocus,
        tabIndex,
        pinnedPosition,
        style,
        indexInSection: i,
        sectionLength: renderedColumns.length,
        gridHasFiller
      }, other), colDef.field));
    }
    return getFillers(params, columns, 0);
  };
  const getColumnHeadersRow = () => {
    return (0, import_jsx_runtime86.jsxs)(GridColumnHeaderRow, {
      role: "row",
      "aria-rowindex": headerGroupingMaxDepth + 1,
      ownerState: rootProps,
      children: [leftRenderContext && getColumnHeaders({
        position: GridPinnedColumnPosition.LEFT,
        renderContext: leftRenderContext,
        minFirstColumn: leftRenderContext.firstColumnIndex,
        maxLastColumn: leftRenderContext.lastColumnIndex
      }, {
        disableReorder: true
      }), getColumnHeaders({
        renderContext,
        minFirstColumn: pinnedColumns.left.length,
        maxLastColumn: visibleColumns.length - pinnedColumns.right.length
      }), rightRenderContext && getColumnHeaders({
        position: GridPinnedColumnPosition.RIGHT,
        renderContext: rightRenderContext,
        minFirstColumn: rightRenderContext.firstColumnIndex,
        maxLastColumn: rightRenderContext.lastColumnIndex
      }, {
        disableReorder: true,
        separatorSide: GridColumnHeaderSeparatorSides.Left
      })]
    });
  };
  const getColumnGroupHeaders = ({
    depth,
    params
  }) => {
    var _a, _b;
    const columnsToRender = getColumnsToRender(params);
    if (columnsToRender.renderedColumns.length === 0) {
      return null;
    }
    const {
      renderedColumns,
      firstColumnToRender,
      lastColumnToRender
    } = columnsToRender;
    const rowStructure = columnGroupsHeaderStructure[depth];
    const firstColumnFieldToRender = visibleColumns[firstColumnToRender].field;
    const firstGroupToRender = ((_a = columnGroupsModel[firstColumnFieldToRender]) == null ? void 0 : _a[depth]) ?? null;
    const firstGroupIndex = rowStructure.findIndex(({
      groupId,
      columnFields
    }) => groupId === firstGroupToRender && columnFields.includes(firstColumnFieldToRender));
    const lastColumnFieldToRender = visibleColumns[lastColumnToRender - 1].field;
    const lastGroupToRender = ((_b = columnGroupsModel[lastColumnFieldToRender]) == null ? void 0 : _b[depth]) ?? null;
    const lastGroupIndex = rowStructure.findIndex(({
      groupId,
      columnFields
    }) => groupId === lastGroupToRender && columnFields.includes(lastColumnFieldToRender));
    const visibleColumnGroupHeader = rowStructure.slice(firstGroupIndex, lastGroupIndex + 1).map((groupStructure) => {
      return _extends({}, groupStructure, {
        columnFields: groupStructure.columnFields.filter((field) => columnVisibility[field] !== false)
      });
    }).filter((groupStructure) => groupStructure.columnFields.length > 0);
    const firstVisibleColumnIndex = visibleColumnGroupHeader[0].columnFields.indexOf(firstColumnFieldToRender);
    const hiddenGroupColumns = visibleColumnGroupHeader[0].columnFields.slice(0, firstVisibleColumnIndex);
    const leftOverflow = hiddenGroupColumns.reduce((acc, field) => {
      const column = apiRef.current.getColumn(field);
      return acc + (column.computedWidth ?? 0);
    }, 0);
    let columnIndex = firstColumnToRender;
    const children = visibleColumnGroupHeader.map(({
      groupId,
      columnFields
    }, index) => {
      const hasFocus = columnGroupHeaderFocus !== null && columnGroupHeaderFocus.depth === depth && columnFields.includes(columnGroupHeaderFocus.field);
      const tabIndex = columnGroupHeaderTabIndexState !== null && columnGroupHeaderTabIndexState.depth === depth && columnFields.includes(columnGroupHeaderTabIndexState.field) ? 0 : -1;
      const headerInfo = {
        groupId,
        width: columnFields.reduce((acc, field) => acc + apiRef.current.getColumn(field).computedWidth, 0),
        fields: columnFields,
        colIndex: columnIndex,
        hasFocus,
        tabIndex
      };
      const pinnedPosition = params.position;
      const style = getCellOffsetStyle({
        pinnedPosition,
        columnIndex,
        computedWidth: headerInfo.width
      });
      columnIndex += columnFields.length;
      let indexInSection = index;
      if (pinnedPosition === "left") {
        indexInSection = columnIndex - 1;
      }
      return (0, import_jsx_runtime86.jsx)(GridColumnGroupHeader, {
        groupId,
        width: headerInfo.width,
        fields: headerInfo.fields,
        colIndex: headerInfo.colIndex,
        depth,
        isLastColumn: headerInfo.colIndex === visibleColumns.length - headerInfo.fields.length,
        maxDepth: headerGroupingMaxDepth,
        height: dimensions.headerHeight,
        hasFocus,
        tabIndex,
        pinnedPosition,
        style,
        indexInSection,
        sectionLength: renderedColumns.length,
        gridHasFiller
      }, index);
    });
    return getFillers(params, children, leftOverflow);
  };
  const getColumnGroupHeadersRows = () => {
    if (headerGroupingMaxDepth === 0) {
      return null;
    }
    const headerRows = [];
    for (let depth = 0; depth < headerGroupingMaxDepth; depth += 1) {
      headerRows.push((0, import_jsx_runtime86.jsxs)(GridColumnHeaderRow, {
        role: "row",
        "aria-rowindex": depth + 1,
        ownerState: rootProps,
        children: [leftRenderContext && getColumnGroupHeaders({
          depth,
          params: {
            position: GridPinnedColumnPosition.LEFT,
            renderContext: leftRenderContext,
            minFirstColumn: leftRenderContext.firstColumnIndex,
            maxLastColumn: leftRenderContext.lastColumnIndex
          }
        }), getColumnGroupHeaders({
          depth,
          params: {
            renderContext
          }
        }), rightRenderContext && getColumnGroupHeaders({
          depth,
          params: {
            position: GridPinnedColumnPosition.RIGHT,
            renderContext: rightRenderContext,
            minFirstColumn: rightRenderContext.firstColumnIndex,
            maxLastColumn: rightRenderContext.lastColumnIndex
          }
        })]
      }, depth));
    }
    return headerRows;
  };
  return {
    renderContext,
    leftRenderContext,
    rightRenderContext,
    pinnedColumns,
    visibleColumns,
    getCellOffsetStyle,
    getFillers,
    getColumnHeadersRow,
    getColumnsToRender,
    getColumnGroupHeadersRows,
    isDragging: !!dragCol,
    getInnerProps: () => ({
      role: "rowgroup"
    })
  };
};

// node_modules/@mui/x-data-grid/components/columnHeaders/GridBaseColumnHeaders.js
init_extends();
init_objectWithoutPropertiesLoose();
var React136 = __toESM(require_react());
init_clsx();
init_esm();
var import_jsx_runtime87 = __toESM(require_jsx_runtime());
var _excluded50 = ["className"];
var useUtilityClasses42 = (ownerState) => {
  const {
    classes: classes2
  } = ownerState;
  const slots = {
    root: ["columnHeaders"]
  };
  return composeClasses(slots, getDataGridUtilityClass, classes2);
};
var GridColumnHeadersRoot = styled_default2("div", {
  name: "MuiDataGrid",
  slot: "ColumnHeaders",
  overridesResolver: (props, styles) => styles.columnHeaders
})({
  display: "flex",
  flexDirection: "column",
  borderTopLeftRadius: "var(--unstable_DataGrid-radius)",
  borderTopRightRadius: "var(--unstable_DataGrid-radius)"
});
var GridBaseColumnHeaders = React136.forwardRef(function GridColumnHeaders(props, ref) {
  const {
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded50);
  const rootProps = useGridRootProps();
  const classes2 = useUtilityClasses42(rootProps);
  return (0, import_jsx_runtime87.jsx)(GridColumnHeadersRoot, _extends({
    ref,
    className: clsx_default(className, classes2.root),
    ownerState: rootProps
  }, other, {
    role: "presentation"
  }));
});

// node_modules/@mui/x-data-grid/components/GridColumnHeaders.js
var import_jsx_runtime88 = __toESM(require_jsx_runtime());
var _excluded51 = ["className", "visibleColumns", "sortColumnLookup", "filterColumnLookup", "columnHeaderTabIndexState", "columnGroupHeaderTabIndexState", "columnHeaderFocus", "columnGroupHeaderFocus", "headerGroupingMaxDepth", "columnMenuState", "columnVisibility", "columnGroupsHeaderStructure", "hasOtherElementInTabSequence"];
var GridColumnHeaders2 = React137.forwardRef(function GridColumnHeaders3(props, ref) {
  const {
    visibleColumns,
    sortColumnLookup,
    filterColumnLookup,
    columnHeaderTabIndexState,
    columnGroupHeaderTabIndexState,
    columnHeaderFocus,
    columnGroupHeaderFocus,
    headerGroupingMaxDepth,
    columnMenuState,
    columnVisibility,
    columnGroupsHeaderStructure,
    hasOtherElementInTabSequence
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded51);
  const {
    getInnerProps,
    getColumnHeadersRow,
    getColumnGroupHeadersRows
  } = useGridColumnHeaders({
    visibleColumns,
    sortColumnLookup,
    filterColumnLookup,
    columnHeaderTabIndexState,
    columnGroupHeaderTabIndexState,
    columnHeaderFocus,
    columnGroupHeaderFocus,
    headerGroupingMaxDepth,
    columnMenuState,
    columnVisibility,
    columnGroupsHeaderStructure,
    hasOtherElementInTabSequence
  });
  return (0, import_jsx_runtime88.jsxs)(GridBaseColumnHeaders, _extends({
    ref
  }, other, getInnerProps(), {
    children: [getColumnGroupHeadersRows(), getColumnHeadersRow()]
  }));
});
true ? GridColumnHeaders2.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  columnGroupHeaderFocus: import_prop_types60.default.shape({
    depth: import_prop_types60.default.number.isRequired,
    field: import_prop_types60.default.string.isRequired
  }),
  columnGroupHeaderTabIndexState: import_prop_types60.default.shape({
    depth: import_prop_types60.default.number.isRequired,
    field: import_prop_types60.default.string.isRequired
  }),
  columnGroupsHeaderStructure: import_prop_types60.default.arrayOf(import_prop_types60.default.arrayOf(import_prop_types60.default.shape({
    columnFields: import_prop_types60.default.arrayOf(import_prop_types60.default.string).isRequired,
    groupId: import_prop_types60.default.string
  }))).isRequired,
  columnHeaderFocus: import_prop_types60.default.shape({
    field: import_prop_types60.default.string.isRequired
  }),
  columnHeaderTabIndexState: import_prop_types60.default.shape({
    field: import_prop_types60.default.string.isRequired
  }),
  columnMenuState: import_prop_types60.default.shape({
    field: import_prop_types60.default.string,
    open: import_prop_types60.default.bool.isRequired
  }).isRequired,
  columnVisibility: import_prop_types60.default.object.isRequired,
  filterColumnLookup: import_prop_types60.default.object.isRequired,
  hasOtherElementInTabSequence: import_prop_types60.default.bool.isRequired,
  headerGroupingMaxDepth: import_prop_types60.default.number.isRequired,
  sortColumnLookup: import_prop_types60.default.object.isRequired,
  visibleColumns: import_prop_types60.default.arrayOf(import_prop_types60.default.object).isRequired
} : void 0;
var MemoizedGridColumnHeaders = fastMemo(GridColumnHeaders2);

// node_modules/@mui/x-data-grid/components/GridDetailPanels.js
function GridDetailPanels(_) {
  return null;
}

// node_modules/@mui/x-data-grid/components/GridPinnedRows.js
function GridPinnedRows(_) {
  return null;
}

// node_modules/@mui/x-data-grid/components/GridNoResultsOverlay.js
init_extends();
var React138 = __toESM(require_react());
var import_jsx_runtime89 = __toESM(require_jsx_runtime());
var GridNoResultsOverlay = React138.forwardRef(function GridNoResultsOverlay2(props, ref) {
  const apiRef = useGridApiContext();
  const noResultsOverlayLabel = apiRef.current.getLocaleText("noResultsOverlayLabel");
  return (0, import_jsx_runtime89.jsx)(GridOverlay, _extends({
    ref
  }, props, {
    children: noResultsOverlayLabel
  }));
});

// node_modules/@mui/x-data-grid/material/index.js
init_extends();

// node_modules/@mui/x-data-grid/material/icons/GridColumnUnsortedIcon.js
init_extends();
init_objectWithoutPropertiesLoose();
var React139 = __toESM(require_react());
var import_jsx_runtime90 = __toESM(require_jsx_runtime());
var _excluded52 = ["sortingOrder"];
var GridColumnUnsortedIcon = React139.memo(function GridColumnHeaderSortIcon2(props) {
  const {
    sortingOrder
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded52);
  const rootProps = useGridRootProps();
  const [nextSortDirection] = sortingOrder;
  const Icon = nextSortDirection === "asc" ? rootProps.slots.columnSortedAscendingIcon : rootProps.slots.columnSortedDescendingIcon;
  return Icon ? (0, import_jsx_runtime90.jsx)(Icon, _extends({}, other)) : null;
});

// node_modules/@mui/x-data-grid/material/components/MUISelectOption.js
init_extends();
init_objectWithoutPropertiesLoose();
var React140 = __toESM(require_react());
var import_jsx_runtime91 = __toESM(require_jsx_runtime());
var _excluded53 = ["native"];
function MUISelectOption(_ref) {
  let {
    native
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded53);
  if (native) {
    return (0, import_jsx_runtime91.jsx)("option", _extends({}, props));
  }
  return (0, import_jsx_runtime91.jsx)(MenuItem_default, _extends({}, props));
}

// node_modules/@mui/x-data-grid/material/index.js
var iconSlots = {
  booleanCellTrueIcon: GridCheckIcon,
  booleanCellFalseIcon: GridCloseIcon,
  columnMenuIcon: GridTripleDotsVerticalIcon,
  openFilterButtonIcon: GridFilterListIcon,
  filterPanelDeleteIcon: GridCloseIcon,
  columnFilteredIcon: GridFilterAltIcon,
  columnSelectorIcon: GridColumnIcon,
  columnUnsortedIcon: GridColumnUnsortedIcon,
  columnSortedAscendingIcon: GridArrowUpwardIcon,
  columnSortedDescendingIcon: GridArrowDownwardIcon,
  columnResizeIcon: GridSeparatorIcon,
  densityCompactIcon: GridViewHeadlineIcon,
  densityStandardIcon: GridTableRowsIcon,
  densityComfortableIcon: GridViewStreamIcon,
  exportIcon: GridSaveAltIcon,
  moreActionsIcon: GridMoreVertIcon,
  treeDataCollapseIcon: GridExpandMoreIcon,
  treeDataExpandIcon: GridKeyboardArrowRight,
  groupingCriteriaCollapseIcon: GridExpandMoreIcon,
  groupingCriteriaExpandIcon: GridKeyboardArrowRight,
  detailPanelExpandIcon: GridAddIcon,
  detailPanelCollapseIcon: GridRemoveIcon,
  rowReorderIcon: GridDragIcon,
  quickFilterIcon: GridSearchIcon,
  quickFilterClearIcon: GridCloseIcon,
  columnMenuHideIcon: GridVisibilityOffIcon,
  columnMenuSortAscendingIcon: GridArrowUpwardIcon,
  columnMenuSortDescendingIcon: GridArrowDownwardIcon,
  columnMenuFilterIcon: GridFilterAltIcon,
  columnMenuManageColumnsIcon: GridViewColumnIcon,
  columnMenuClearIcon: GridClearIcon,
  loadIcon: GridLoadIcon,
  filterPanelAddIcon: GridAddIcon,
  filterPanelRemoveAllIcon: GridDeleteForeverIcon,
  columnReorderIcon: GridDragIcon
};
var materialSlots = _extends({}, iconSlots, {
  baseCheckbox: Checkbox_default,
  baseTextField: TextField_default,
  baseFormControl: FormControl_default,
  baseSelect: Select_default,
  baseButton: Button_default,
  baseIconButton: IconButton_default,
  baseInputAdornment: InputAdornment_default,
  baseTooltip: Tooltip_default,
  basePopper: Popper_default,
  baseInputLabel: InputLabel_default,
  baseSelectOption: MUISelectOption,
  baseChip: Chip_default
});
var material_default = materialSlots;

// node_modules/@mui/x-data-grid/constants/defaultGridSlotsComponents.js
var DATA_GRID_DEFAULT_SLOTS_COMPONENTS = _extends({}, material_default, {
  cell: MemoizedGridCell,
  skeletonCell: Memoized2,
  columnHeaderFilterIconButton: GridColumnHeaderFilterIconButton,
  columnMenu: GridColumnMenu,
  columnHeaders: MemoizedGridColumnHeaders,
  detailPanels: GridDetailPanels,
  footer: GridFooter,
  footerRowCount: GridRowCount,
  toolbar: null,
  pinnedRows: GridPinnedRows,
  loadingOverlay: GridLoadingOverlay,
  noResultsOverlay: GridNoResultsOverlay,
  noRowsOverlay: GridNoRowsOverlay,
  pagination: GridPagination,
  filterPanel: GridFilterPanel,
  columnsPanel: GridColumnsPanel,
  columnsManagement: GridColumnsManagement,
  panel: GridPanel,
  row: MemoizedGridRow
});

// node_modules/@mui/x-data-grid/internals/utils/computeSlots.js
init_extends();
function computeSlots({
  defaultSlots: defaultSlots2,
  slots
}) {
  const overrides = slots;
  if (!overrides || Object.keys(overrides).length === 0) {
    return defaultSlots2;
  }
  const result = _extends({}, defaultSlots2);
  Object.keys(overrides).forEach((key) => {
    const k = key;
    if (overrides[k] !== void 0) {
      result[k] = overrides[k];
    }
  });
  return result;
}

// node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js
function _objectDestructuringEmpty(t) {
  if (null == t)
    throw new TypeError("Cannot destructure " + t);
}

// node_modules/@mui/x-data-grid/internals/utils/useProps.js
init_extends();
var React141 = __toESM(require_react());
function groupForwardedProps(props) {
  const keys = Object.keys(props);
  if (!keys.some((key) => key.startsWith("aria-") || key.startsWith("data-"))) {
    return props;
  }
  const newProps = {};
  const forwardedProps = props.forwardedProps ?? {};
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    if (key.startsWith("aria-") || key.startsWith("data-")) {
      forwardedProps[key] = props[key];
    } else {
      newProps[key] = props[key];
    }
  }
  newProps.forwardedProps = forwardedProps;
  return newProps;
}
function useProps(allProps) {
  return React141.useMemo(() => {
    const themedProps = _extends({}, (_objectDestructuringEmpty(allProps), allProps));
    return groupForwardedProps(themedProps);
  }, [allProps]);
}

// node_modules/@mui/x-data-grid/internals/utils/propValidation.js
var propValidatorsDataGrid = [(props) => props.autoPageSize && props.autoHeight && ["MUI X: `<DataGrid autoPageSize={true} autoHeight={true} />` are not valid props.", "You cannot use both the `autoPageSize` and `autoHeight` props at the same time because `autoHeight` scales the height of the Data Grid according to the `pageSize`.", "", "Please remove one of these two props."].join("\n") || void 0, (props) => props.paginationMode === "client" && props.paginationMeta != null && ['MUI X: Usage of the `paginationMeta` prop with client-side pagination (`paginationMode="client"`) has no effect.', '`paginationMeta` is only meant to be used with `paginationMode="server"`.'].join("\n") || void 0, (props) => props.signature === GridSignature.DataGrid && props.paginationMode === "client" && isNumber(props.rowCount) && ['MUI X: Usage of the `rowCount` prop with client side pagination (`paginationMode="client"`) has no effect.', '`rowCount` is only meant to be used with `paginationMode="server"`.'].join("\n") || void 0, (props) => props.paginationMode === "server" && props.rowCount == null && ["MUI X: The `rowCount` prop must be passed using `paginationMode='server'`", "For more detail, see http://mui.com/components/data-grid/pagination/#index-based-pagination"].join("\n") || void 0];
var warnedOnceCache = /* @__PURE__ */ new Set();
function warnOnce(message) {
  if (!warnedOnceCache.has(message)) {
    console.error(message);
    warnedOnceCache.add(message);
  }
}
function validateProps(props, validators) {
  validators.forEach((validator) => {
    const warning = validator(props);
    if (warning) {
      warnOnce(warning);
    }
  });
}

// node_modules/@mui/x-data-grid/DataGrid/useDataGridProps.js
var DATA_GRID_FORCED_PROPS = {
  disableMultipleColumnsFiltering: true,
  disableMultipleColumnsSorting: true,
  throttleRowsMs: void 0,
  hideFooterRowCount: false,
  pagination: true,
  checkboxSelectionVisibleOnly: false,
  disableColumnReorder: true,
  keepColumnPositionIfDraggedOutside: false,
  signature: "DataGrid"
};
var DATA_GRID_PROPS_DEFAULT_VALUES = {
  autoHeight: false,
  autoPageSize: false,
  checkboxSelection: false,
  checkboxSelectionVisibleOnly: false,
  columnBufferPx: 150,
  rowBufferPx: 150,
  rows: [],
  rowSelection: true,
  disableColumnFilter: false,
  disableColumnMenu: false,
  disableColumnSelector: false,
  disableDensitySelector: false,
  disableEval: false,
  disableMultipleColumnsFiltering: false,
  disableMultipleRowSelection: false,
  disableColumnSorting: false,
  disableMultipleColumnsSorting: false,
  disableRowSelectionOnClick: false,
  disableVirtualization: false,
  editMode: GridEditModes.Cell,
  filterMode: "client",
  filterDebounceMs: 150,
  columnHeaderHeight: 56,
  hideFooter: false,
  hideFooterPagination: false,
  hideFooterRowCount: false,
  hideFooterSelectedRowCount: false,
  ignoreDiacritics: false,
  logger: console,
  logLevel: false ? "error" : "warn",
  pagination: false,
  paginationMode: "client",
  rowHeight: 52,
  resizeThrottleMs: 60,
  pageSizeOptions: [25, 50, 100],
  rowSpacingType: "margin",
  showCellVerticalBorder: false,
  showColumnVerticalBorder: false,
  sortingOrder: ["asc", "desc", null],
  sortingMode: "client",
  throttleRowsMs: 0,
  disableColumnReorder: false,
  disableColumnResize: false,
  keepNonExistentRowsSelected: false,
  keepColumnPositionIfDraggedOutside: false,
  ignoreValueFormatterDuringExport: false,
  clipboardCopyCellDelimiter: "	",
  rowPositionsDebounceMs: 166,
  autosizeOnMount: false,
  disableAutosize: false
};
var defaultSlots = DATA_GRID_DEFAULT_SLOTS_COMPONENTS;
var useDataGridProps = (inProps) => {
  const themedProps = useProps(
    // eslint-disable-next-line material-ui/mui-name-matches-component-name
    useThemeProps({
      props: inProps,
      name: "MuiDataGrid"
    })
  );
  const localeText = React142.useMemo(() => _extends({}, GRID_DEFAULT_LOCALE_TEXT, themedProps.localeText), [themedProps.localeText]);
  const slots = React142.useMemo(() => computeSlots({
    defaultSlots,
    slots: themedProps.slots
  }), [themedProps.slots]);
  return React142.useMemo(() => _extends({}, DATA_GRID_PROPS_DEFAULT_VALUES, themedProps, {
    localeText,
    slots
  }, DATA_GRID_FORCED_PROPS), [themedProps, localeText, slots]);
};

// node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsMeta.js
var rowsMetaStateInitializer = (state) => _extends({}, state, {
  rowsMeta: {
    currentPageTotalHeight: 0,
    positions: []
  }
});
var warnedOnceInvalidRowHeight = false;
var getValidRowHeight = (rowHeightProp, defaultRowHeight, warningMessage) => {
  if (typeof rowHeightProp === "number" && rowHeightProp > 0) {
    return rowHeightProp;
  }
  if (!warnedOnceInvalidRowHeight && typeof rowHeightProp !== "undefined" && rowHeightProp !== null) {
    console.warn(warningMessage);
    warnedOnceInvalidRowHeight = true;
  }
  return defaultRowHeight;
};
var rowHeightWarning = [`MUI X: The \`rowHeight\` prop should be a number greater than 0.`, `The default value will be used instead.`].join("\n");
var getRowHeightWarning = [`MUI X: The \`getRowHeight\` prop should return a number greater than 0 or 'auto'.`, `The default value will be used instead.`].join("\n");
var useGridRowsMeta = (apiRef, props) => {
  const {
    getRowHeight: getRowHeightProp,
    getRowSpacing,
    getEstimatedRowHeight
  } = props;
  const rowsHeightLookup = React143.useRef(/* @__PURE__ */ Object.create(null));
  const lastMeasuredRowIndex = React143.useRef(-1);
  const hasRowWithAutoHeight = React143.useRef(false);
  const densityFactor = useGridSelector(apiRef, gridDensityFactorSelector);
  const filterModel = useGridSelector(apiRef, gridFilterModelSelector);
  const paginationState = useGridSelector(apiRef, gridPaginationSelector);
  const sortModel = useGridSelector(apiRef, gridSortModelSelector);
  const currentPage = useGridVisibleRows(apiRef, props);
  const pinnedRows = useGridSelector(apiRef, gridPinnedRowsSelector);
  const validRowHeight = getValidRowHeight(props.rowHeight, DATA_GRID_PROPS_DEFAULT_VALUES.rowHeight, rowHeightWarning);
  const rowHeight = Math.floor(validRowHeight * densityFactor);
  const hydrateRowsMeta = React143.useCallback(() => {
    var _a, _b;
    hasRowWithAutoHeight.current = false;
    const calculateRowProcessedSizes = (row) => {
      if (!rowsHeightLookup.current[row.id]) {
        rowsHeightLookup.current[row.id] = {
          sizes: {
            baseCenter: rowHeight
          },
          isResized: false,
          autoHeight: false,
          needsFirstMeasurement: true
          // Assume all rows will need to be measured by default
        };
      }
      const {
        isResized,
        needsFirstMeasurement,
        sizes
      } = rowsHeightLookup.current[row.id];
      let baseRowHeight = typeof rowHeight === "number" && rowHeight > 0 ? rowHeight : 52;
      const existingBaseRowHeight = sizes.baseCenter;
      if (isResized) {
        baseRowHeight = existingBaseRowHeight;
      } else if (getRowHeightProp) {
        const rowHeightFromUser = getRowHeightProp(_extends({}, row, {
          densityFactor
        }));
        if (rowHeightFromUser === "auto") {
          if (needsFirstMeasurement) {
            const estimatedRowHeight = getEstimatedRowHeight ? getEstimatedRowHeight(_extends({}, row, {
              densityFactor
            })) : rowHeight;
            baseRowHeight = estimatedRowHeight ?? rowHeight;
          } else {
            baseRowHeight = existingBaseRowHeight;
          }
          hasRowWithAutoHeight.current = true;
          rowsHeightLookup.current[row.id].autoHeight = true;
        } else {
          baseRowHeight = getValidRowHeight(rowHeightFromUser, rowHeight, getRowHeightWarning);
          rowsHeightLookup.current[row.id].needsFirstMeasurement = false;
          rowsHeightLookup.current[row.id].autoHeight = false;
        }
      } else {
        rowsHeightLookup.current[row.id].needsFirstMeasurement = false;
      }
      const initialHeights = {
        baseCenter: baseRowHeight
      };
      if (getRowSpacing) {
        const indexRelativeToCurrentPage = apiRef.current.getRowIndexRelativeToVisibleRows(row.id);
        const spacing = getRowSpacing(_extends({}, row, {
          isFirstVisible: indexRelativeToCurrentPage === 0,
          isLastVisible: indexRelativeToCurrentPage === currentPage.rows.length - 1,
          indexRelativeToCurrentPage
        }));
        initialHeights.spacingTop = spacing.top ?? 0;
        initialHeights.spacingBottom = spacing.bottom ?? 0;
      }
      const processedSizes = apiRef.current.unstable_applyPipeProcessors("rowHeight", initialHeights, row);
      rowsHeightLookup.current[row.id].sizes = processedSizes;
      return processedSizes;
    };
    const positions = [];
    const currentPageTotalHeight = currentPage.rows.reduce((acc, row) => {
      positions.push(acc);
      let otherSizes = 0;
      const processedSizes = calculateRowProcessedSizes(row);
      for (const key in processedSizes) {
        const value = processedSizes[key];
        if (key !== "baseCenter") {
          otherSizes += value;
        }
      }
      return acc + processedSizes.baseCenter + otherSizes;
    }, 0);
    (_a = pinnedRows == null ? void 0 : pinnedRows.top) == null ? void 0 : _a.forEach((row) => {
      calculateRowProcessedSizes(row);
    });
    (_b = pinnedRows == null ? void 0 : pinnedRows.bottom) == null ? void 0 : _b.forEach((row) => {
      calculateRowProcessedSizes(row);
    });
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        rowsMeta: {
          currentPageTotalHeight,
          positions
        }
      });
    });
    if (!hasRowWithAutoHeight.current) {
      lastMeasuredRowIndex.current = Infinity;
    }
    apiRef.current.forceUpdate();
  }, [apiRef, currentPage.rows, rowHeight, getRowHeightProp, getRowSpacing, getEstimatedRowHeight, pinnedRows, densityFactor]);
  const getRowHeight = React143.useCallback((rowId) => {
    const height = rowsHeightLookup.current[rowId];
    return height ? height.sizes.baseCenter : rowHeight;
  }, [rowHeight]);
  const getRowInternalSizes = (rowId) => {
    var _a;
    return (_a = rowsHeightLookup.current[rowId]) == null ? void 0 : _a.sizes;
  };
  const setRowHeight = React143.useCallback((id, height) => {
    rowsHeightLookup.current[id].sizes.baseCenter = height;
    rowsHeightLookup.current[id].isResized = true;
    rowsHeightLookup.current[id].needsFirstMeasurement = false;
    hydrateRowsMeta();
  }, [hydrateRowsMeta]);
  const debouncedHydrateRowsMeta = React143.useMemo(() => debounce(hydrateRowsMeta, props.rowPositionsDebounceMs), [hydrateRowsMeta, props.rowPositionsDebounceMs]);
  const storeMeasuredRowHeight = React143.useCallback((id, height) => {
    if (!rowsHeightLookup.current[id] || !rowsHeightLookup.current[id].autoHeight) {
      return;
    }
    const needsHydration = rowsHeightLookup.current[id].sizes.baseCenter !== height;
    rowsHeightLookup.current[id].needsFirstMeasurement = false;
    rowsHeightLookup.current[id].sizes.baseCenter = height;
    if (needsHydration) {
      debouncedHydrateRowsMeta();
    }
  }, [debouncedHydrateRowsMeta]);
  const rowHasAutoHeight = React143.useCallback((id) => {
    var _a;
    return ((_a = rowsHeightLookup.current[id]) == null ? void 0 : _a.autoHeight) || false;
  }, []);
  const getLastMeasuredRowIndex = React143.useCallback(() => {
    return lastMeasuredRowIndex.current;
  }, []);
  const setLastMeasuredRowIndex = React143.useCallback((index) => {
    if (hasRowWithAutoHeight.current && index > lastMeasuredRowIndex.current) {
      lastMeasuredRowIndex.current = index;
    }
  }, []);
  const resetRowHeights = React143.useCallback(() => {
    rowsHeightLookup.current = {};
    hydrateRowsMeta();
  }, [hydrateRowsMeta]);
  React143.useEffect(() => {
    hydrateRowsMeta();
  }, [rowHeight, filterModel, paginationState, sortModel, hydrateRowsMeta]);
  useGridRegisterPipeApplier(apiRef, "rowHeight", hydrateRowsMeta);
  const rowsMetaApi = {
    unstable_setLastMeasuredRowIndex: setLastMeasuredRowIndex,
    unstable_getRowHeight: getRowHeight,
    unstable_getRowInternalSizes: getRowInternalSizes,
    unstable_setRowHeight: setRowHeight,
    unstable_storeRowHeightMeasurement: storeMeasuredRowHeight,
    resetRowHeights
  };
  const rowsMetaPrivateApi = {
    getLastMeasuredRowIndex,
    rowHasAutoHeight
  };
  useGridApiMethod(apiRef, rowsMetaApi, "public");
  useGridApiMethod(apiRef, rowsMetaPrivateApi, "private");
};

// node_modules/@mui/x-data-grid/hooks/features/statePersistence/useGridStatePersistence.js
var React144 = __toESM(require_react());
var useGridStatePersistence = (apiRef) => {
  const exportState = React144.useCallback((params = {}) => {
    const stateToExport = apiRef.current.unstable_applyPipeProcessors("exportState", {}, params);
    return stateToExport;
  }, [apiRef]);
  const restoreState = React144.useCallback((stateToRestore) => {
    const response = apiRef.current.unstable_applyPipeProcessors("restoreState", {
      callbacks: []
    }, {
      stateToRestore
    });
    response.callbacks.forEach((callback) => {
      callback();
    });
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const statePersistenceApi = {
    exportState,
    restoreState
  };
  useGridApiMethod(apiRef, statePersistenceApi, "public");
};

// node_modules/@mui/x-data-grid/hooks/features/columns/useGridColumnSpanning.js
var React145 = __toESM(require_react());
var useGridColumnSpanning = (apiRef) => {
  const lookup = React145.useRef({});
  const getCellColSpanInfo = (rowId, columnIndex) => {
    var _a;
    return (_a = lookup.current[rowId]) == null ? void 0 : _a[columnIndex];
  };
  const resetColSpan = () => {
    lookup.current = {};
  };
  const calculateColSpan = React145.useCallback(({
    rowId,
    minFirstColumn,
    maxLastColumn,
    columns
  }) => {
    for (let i = minFirstColumn; i < maxLastColumn; i += 1) {
      const cellProps = calculateCellColSpan({
        apiRef,
        lookup: lookup.current,
        columnIndex: i,
        rowId,
        minFirstColumnIndex: minFirstColumn,
        maxLastColumnIndex: maxLastColumn,
        columns
      });
      if (cellProps.colSpan > 1) {
        i += cellProps.colSpan - 1;
      }
    }
  }, [apiRef]);
  const columnSpanningPublicApi = {
    unstable_getCellColSpanInfo: getCellColSpanInfo
  };
  const columnSpanningPrivateApi = {
    resetColSpan,
    calculateColSpan
  };
  useGridApiMethod(apiRef, columnSpanningPublicApi, "public");
  useGridApiMethod(apiRef, columnSpanningPrivateApi, "private");
  useGridApiEventHandler(apiRef, "columnOrderChange", resetColSpan);
};
function calculateCellColSpan(params) {
  const {
    apiRef,
    lookup,
    columnIndex,
    rowId,
    minFirstColumnIndex,
    maxLastColumnIndex,
    columns
  } = params;
  const columnsLength = columns.length;
  const column = columns[columnIndex];
  const row = apiRef.current.getRow(rowId);
  const value = apiRef.current.getRowValue(row, column);
  const colSpan = typeof column.colSpan === "function" ? column.colSpan(value, row, column, apiRef) : column.colSpan;
  if (!colSpan || colSpan === 1) {
    setCellColSpanInfo(lookup, rowId, columnIndex, {
      spannedByColSpan: false,
      cellProps: {
        colSpan: 1,
        width: column.computedWidth
      }
    });
    return {
      colSpan: 1
    };
  }
  let width = column.computedWidth;
  for (let j = 1; j < colSpan; j += 1) {
    const nextColumnIndex = columnIndex + j;
    if (nextColumnIndex >= minFirstColumnIndex && nextColumnIndex < maxLastColumnIndex) {
      const nextColumn = columns[nextColumnIndex];
      width += nextColumn.computedWidth;
      setCellColSpanInfo(lookup, rowId, columnIndex + j, {
        spannedByColSpan: true,
        rightVisibleCellIndex: Math.min(columnIndex + colSpan, columnsLength - 1),
        leftVisibleCellIndex: columnIndex
      });
    }
    setCellColSpanInfo(lookup, rowId, columnIndex, {
      spannedByColSpan: false,
      cellProps: {
        colSpan,
        width
      }
    });
  }
  return {
    colSpan
  };
}
function setCellColSpanInfo(lookup, rowId, columnIndex, cellColSpanInfo) {
  if (!lookup[rowId]) {
    lookup[rowId] = {};
  }
  lookup[rowId][columnIndex] = cellColSpanInfo;
}

// node_modules/@mui/x-data-grid/hooks/features/columnGrouping/useGridColumnGrouping.js
init_extends();
init_objectWithoutPropertiesLoose();
var React146 = __toESM(require_react());

// node_modules/@mui/x-data-grid/hooks/features/columnGrouping/gridColumnGroupsUtils.js
var recurrentUnwrapGroupingColumnModel = (columnGroupNode, parents, unwrappedGroupingModelToComplete) => {
  if (isLeaf(columnGroupNode)) {
    if (unwrappedGroupingModelToComplete[columnGroupNode.field] !== void 0) {
      throw new Error([`MUI X: columnGroupingModel contains duplicated field`, `column field ${columnGroupNode.field} occurs two times in the grouping model:`, `- ${unwrappedGroupingModelToComplete[columnGroupNode.field].join(" > ")}`, `- ${parents.join(" > ")}`].join("\n"));
    }
    unwrappedGroupingModelToComplete[columnGroupNode.field] = parents;
    return;
  }
  const {
    groupId,
    children
  } = columnGroupNode;
  children.forEach((child) => {
    recurrentUnwrapGroupingColumnModel(child, [...parents, groupId], unwrappedGroupingModelToComplete);
  });
};
var unwrapGroupingColumnModel = (columnGroupingModel) => {
  if (!columnGroupingModel) {
    return {};
  }
  const unwrappedSubTree = {};
  columnGroupingModel.forEach((columnGroupNode) => {
    recurrentUnwrapGroupingColumnModel(columnGroupNode, [], unwrappedSubTree);
  });
  return unwrappedSubTree;
};
var getColumnGroupsHeaderStructure = (orderedColumns, unwrappedGroupingModel, pinnedFields) => {
  const getParents = (field) => unwrappedGroupingModel[field] ?? [];
  const groupingHeaderStructure = [];
  const maxDepth = Math.max(...orderedColumns.map((field) => getParents(field).length));
  const haveSameParents = (field1, field2, depth) => isDeepEqual(getParents(field1).slice(0, depth + 1), getParents(field2).slice(0, depth + 1));
  const haveDifferentContainers = (field1, field2) => {
    if ((pinnedFields == null ? void 0 : pinnedFields.left) && pinnedFields.left.includes(field1) && !pinnedFields.left.includes(field2)) {
      return true;
    }
    if ((pinnedFields == null ? void 0 : pinnedFields.right) && !pinnedFields.right.includes(field1) && pinnedFields.right.includes(field2)) {
      return true;
    }
    return false;
  };
  for (let depth = 0; depth < maxDepth; depth += 1) {
    const depthStructure = orderedColumns.reduce((structure, newField) => {
      const groupId = getParents(newField)[depth] ?? null;
      if (structure.length === 0) {
        return [{
          columnFields: [newField],
          groupId
        }];
      }
      const lastGroup = structure[structure.length - 1];
      const prevField = lastGroup.columnFields[lastGroup.columnFields.length - 1];
      const prevGroupId = lastGroup.groupId;
      if (prevGroupId !== groupId || !haveSameParents(prevField, newField, depth) || // Fix for https://github.com/mui/mui-x/issues/7041
      haveDifferentContainers(prevField, newField)) {
        return [...structure, {
          columnFields: [newField],
          groupId
        }];
      }
      return [...structure.slice(0, structure.length - 1), {
        columnFields: [...lastGroup.columnFields, newField],
        groupId
      }];
    }, []);
    groupingHeaderStructure.push(depthStructure);
  }
  return groupingHeaderStructure;
};

// node_modules/@mui/x-data-grid/hooks/features/columnGrouping/useGridColumnGrouping.js
var _excluded54 = ["groupId", "children"];
var createGroupLookup = (columnGroupingModel) => {
  let groupLookup = {};
  columnGroupingModel.forEach((node) => {
    if (isLeaf(node)) {
      return;
    }
    const {
      groupId,
      children
    } = node, other = _objectWithoutPropertiesLoose(node, _excluded54);
    if (!groupId) {
      throw new Error("MUI X: An element of the columnGroupingModel does not have either `field` or `groupId`.");
    }
    if (true) {
      if (!children) {
        console.warn(`MUI X: group groupId=${groupId} has no children.`);
      }
    }
    const groupParam = _extends({}, other, {
      groupId
    });
    const subTreeLookup = createGroupLookup(children);
    if (subTreeLookup[groupId] !== void 0 || groupLookup[groupId] !== void 0) {
      throw new Error(`MUI X: The groupId ${groupId} is used multiple times in the columnGroupingModel.`);
    }
    groupLookup = _extends({}, groupLookup, subTreeLookup, {
      [groupId]: groupParam
    });
  });
  return _extends({}, groupLookup);
};
var columnGroupsStateInitializer = (state, props, apiRef) => {
  if (!props.columnGroupingModel) {
    return state;
  }
  const columnFields = gridColumnFieldsSelector(apiRef);
  const visibleColumnFields = gridVisibleColumnFieldsSelector(apiRef);
  const groupLookup = createGroupLookup(props.columnGroupingModel ?? []);
  const unwrappedGroupingModel = unwrapGroupingColumnModel(props.columnGroupingModel ?? []);
  const columnGroupsHeaderStructure = getColumnGroupsHeaderStructure(columnFields, unwrappedGroupingModel, apiRef.current.state.pinnedColumns ?? {});
  const maxDepth = visibleColumnFields.length === 0 ? 0 : Math.max(...visibleColumnFields.map((field) => {
    var _a;
    return ((_a = unwrappedGroupingModel[field]) == null ? void 0 : _a.length) ?? 0;
  }));
  return _extends({}, state, {
    columnGrouping: {
      lookup: groupLookup,
      unwrappedGroupingModel,
      headerStructure: columnGroupsHeaderStructure,
      maxDepth
    }
  });
};
var useGridColumnGrouping = (apiRef, props) => {
  const getColumnGroupPath = React146.useCallback((field) => {
    const unwrappedGroupingModel = gridColumnGroupsUnwrappedModelSelector(apiRef);
    return unwrappedGroupingModel[field] ?? [];
  }, [apiRef]);
  const getAllGroupDetails = React146.useCallback(() => {
    const columnGroupLookup = gridColumnGroupsLookupSelector(apiRef);
    return columnGroupLookup;
  }, [apiRef]);
  const columnGroupingApi = {
    getColumnGroupPath,
    getAllGroupDetails
  };
  useGridApiMethod(apiRef, columnGroupingApi, "public");
  const handleColumnIndexChange = React146.useCallback(() => {
    const unwrappedGroupingModel = unwrapGroupingColumnModel(props.columnGroupingModel ?? []);
    apiRef.current.setState((state) => {
      var _a;
      const orderedFields = ((_a = state.columns) == null ? void 0 : _a.orderedFields) ?? [];
      const pinnedColumns = state.pinnedColumns ?? {};
      const columnGroupsHeaderStructure = getColumnGroupsHeaderStructure(orderedFields, unwrappedGroupingModel, pinnedColumns);
      return _extends({}, state, {
        columnGrouping: _extends({}, state.columnGrouping, {
          headerStructure: columnGroupsHeaderStructure
        })
      });
    });
  }, [apiRef, props.columnGroupingModel]);
  const updateColumnGroupingState = React146.useCallback((columnGroupingModel) => {
    var _a, _b;
    const pinnedColumns = ((_b = (_a = apiRef.current).getPinnedColumns) == null ? void 0 : _b.call(_a)) ?? {};
    const columnFields = gridColumnFieldsSelector(apiRef);
    const visibleColumnFields = gridVisibleColumnFieldsSelector(apiRef);
    const groupLookup = createGroupLookup(columnGroupingModel ?? []);
    const unwrappedGroupingModel = unwrapGroupingColumnModel(columnGroupingModel ?? []);
    const columnGroupsHeaderStructure = getColumnGroupsHeaderStructure(columnFields, unwrappedGroupingModel, pinnedColumns);
    const maxDepth = visibleColumnFields.length === 0 ? 0 : Math.max(...visibleColumnFields.map((field) => {
      var _a2;
      return ((_a2 = unwrappedGroupingModel[field]) == null ? void 0 : _a2.length) ?? 0;
    }));
    apiRef.current.setState((state) => {
      return _extends({}, state, {
        columnGrouping: {
          lookup: groupLookup,
          unwrappedGroupingModel,
          headerStructure: columnGroupsHeaderStructure,
          maxDepth
        }
      });
    });
  }, [apiRef]);
  useGridApiEventHandler(apiRef, "columnIndexChange", handleColumnIndexChange);
  useGridApiEventHandler(apiRef, "columnsChange", () => {
    updateColumnGroupingState(props.columnGroupingModel);
  });
  useGridApiEventHandler(apiRef, "columnVisibilityModelChange", () => {
    updateColumnGroupingState(props.columnGroupingModel);
  });
  React146.useEffect(() => {
    updateColumnGroupingState(props.columnGroupingModel);
  }, [updateColumnGroupingState, props.columnGroupingModel]);
};

// node_modules/@mui/x-data-grid/hooks/features/columnResize/useGridColumnResize.js
init_extends();
var React147 = __toESM(require_react());
init_esm();
init_useLazyRef();

// node_modules/@mui/x-data-grid/utils/createControllablePromise.js
function createControllablePromise() {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });
  promise.resolve = resolve;
  promise.reject = reject;
  return promise;
}

// node_modules/@mui/x-data-grid/hooks/features/columnResize/useGridColumnResize.js
function trackFinger(event, currentTouchId) {
  if (currentTouchId !== void 0 && event.changedTouches) {
    for (let i = 0; i < event.changedTouches.length; i += 1) {
      const touch = event.changedTouches[i];
      if (touch.identifier === currentTouchId) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }
    return false;
  }
  return {
    x: event.clientX,
    y: event.clientY
  };
}
function computeNewWidth(initialOffsetToSeparator, clickX, columnBounds, resizeDirection) {
  let newWidth = initialOffsetToSeparator;
  if (resizeDirection === "Right") {
    newWidth += clickX - columnBounds.left;
  } else {
    newWidth += columnBounds.right - clickX;
  }
  return newWidth;
}
function computeOffsetToSeparator(clickX, columnBounds, resizeDirection) {
  if (resizeDirection === "Left") {
    return clickX - columnBounds.left;
  }
  return columnBounds.right - clickX;
}
function flipResizeDirection(side) {
  if (side === "Right") {
    return "Left";
  }
  return "Right";
}
function getResizeDirection(separator, direction) {
  const side = separator.classList.contains(gridClasses["columnSeparator--sideRight"]) ? "Right" : "Left";
  if (direction === "rtl") {
    return flipResizeDirection(side);
  }
  return side;
}
function preventClick(event) {
  event.preventDefault();
  event.stopImmediatePropagation();
}
function useColumnVirtualizationDisabled(apiRef) {
  const promise = React147.useRef();
  const selector = () => gridVirtualizationColumnEnabledSelector(apiRef);
  const value = useGridSelector(apiRef, selector);
  React147.useEffect(() => {
    if (promise.current && value === false) {
      promise.current.resolve();
      promise.current = void 0;
    }
  });
  const asyncCheck = () => {
    if (!promise.current) {
      if (selector() === false) {
        return Promise.resolve();
      }
      promise.current = createControllablePromise();
    }
    return promise.current;
  };
  return asyncCheck;
}
function excludeOutliers(inputValues, factor) {
  if (inputValues.length < 4) {
    return inputValues;
  }
  const values = inputValues.slice();
  values.sort((a, b) => a - b);
  const q1 = values[Math.floor(values.length * 0.25)];
  const q3 = values[Math.floor(values.length * 0.75) - 1];
  const iqr = q3 - q1;
  const deviation = iqr < 5 ? 5 : iqr * factor;
  return values.filter((v) => v > q1 - deviation && v < q3 + deviation);
}
function extractColumnWidths(apiRef, options, columns) {
  const widthByField = {};
  const root = apiRef.current.rootElementRef.current;
  root.classList.add(gridClasses.autosizing);
  columns.forEach((column) => {
    const cells = findGridCells(apiRef.current, column.field);
    const widths = cells.map((cell) => {
      return cell.getBoundingClientRect().width ?? 0;
    });
    const filteredWidths = options.includeOutliers ? widths : excludeOutliers(widths, options.outliersFactor);
    if (options.includeHeaders) {
      const header = findGridHeader(apiRef.current, column.field);
      if (header) {
        const title = header.querySelector(`.${gridClasses.columnHeaderTitle}`);
        const content = header.querySelector(`.${gridClasses.columnHeaderTitleContainerContent}`);
        const iconContainer = header.querySelector(`.${gridClasses.iconButtonContainer}`);
        const menuContainer = header.querySelector(`.${gridClasses.menuIcon}`);
        const element = title ?? content;
        const style = window.getComputedStyle(header, null);
        const paddingWidth = parseInt(style.paddingLeft, 10) + parseInt(style.paddingRight, 10);
        const contentWidth = element.scrollWidth + 1;
        const width = contentWidth + paddingWidth + ((iconContainer == null ? void 0 : iconContainer.clientWidth) ?? 0) + ((menuContainer == null ? void 0 : menuContainer.clientWidth) ?? 0);
        filteredWidths.push(width);
      }
    }
    const hasColumnMin = column.minWidth !== -Infinity && column.minWidth !== void 0;
    const hasColumnMax = column.maxWidth !== Infinity && column.maxWidth !== void 0;
    const min = hasColumnMin ? column.minWidth : 0;
    const max = hasColumnMax ? column.maxWidth : Infinity;
    const maxContent = filteredWidths.length === 0 ? 0 : Math.max(...filteredWidths);
    widthByField[column.field] = clamp(maxContent, min, max);
  });
  root.classList.remove(gridClasses.autosizing);
  return widthByField;
}
var columnResizeStateInitializer = (state) => _extends({}, state, {
  columnResize: {
    resizingColumnField: ""
  }
});
function createResizeRefs() {
  return {
    colDef: void 0,
    initialColWidth: 0,
    initialTotalWidth: 0,
    previousMouseClickEvent: void 0,
    columnHeaderElement: void 0,
    headerFilterElement: void 0,
    groupHeaderElements: [],
    cellElements: [],
    leftPinnedCellsAfter: [],
    rightPinnedCellsBefore: [],
    fillerLeft: void 0,
    fillerRight: void 0,
    leftPinnedHeadersAfter: [],
    rightPinnedHeadersBefore: []
  };
}
var useGridColumnResize = (apiRef, props) => {
  const theme = useTheme();
  const logger = useGridLogger(apiRef, "useGridColumnResize");
  const refs = useLazyRef(createResizeRefs).current;
  const initialOffsetToSeparator = React147.useRef();
  const resizeDirection = React147.useRef();
  const stopResizeEventTimeout = useTimeout();
  const touchId = React147.useRef();
  const updateWidth = (newWidth) => {
    var _a, _b;
    logger.debug(`Updating width to ${newWidth} for col ${refs.colDef.field}`);
    const prevWidth = refs.columnHeaderElement.offsetWidth;
    const widthDiff = newWidth - prevWidth;
    const columnWidthDiff = newWidth - refs.initialColWidth;
    const newTotalWidth = refs.initialTotalWidth + columnWidthDiff;
    (_b = (_a = apiRef.current.rootElementRef) == null ? void 0 : _a.current) == null ? void 0 : _b.style.setProperty("--DataGrid-rowWidth", `${newTotalWidth}px`);
    refs.colDef.computedWidth = newWidth;
    refs.colDef.width = newWidth;
    refs.colDef.flex = 0;
    refs.columnHeaderElement.style.width = `${newWidth}px`;
    refs.columnHeaderElement.style.minWidth = `${newWidth}px`;
    refs.columnHeaderElement.style.maxWidth = `${newWidth}px`;
    const headerFilterElement = refs.headerFilterElement;
    if (headerFilterElement) {
      headerFilterElement.style.width = `${newWidth}px`;
      headerFilterElement.style.minWidth = `${newWidth}px`;
      headerFilterElement.style.maxWidth = `${newWidth}px`;
    }
    refs.groupHeaderElements.forEach((element) => {
      const div = element;
      let finalWidth;
      if (div.getAttribute("aria-colspan") === "1") {
        finalWidth = `${newWidth}px`;
      } else {
        finalWidth = `${div.offsetWidth + widthDiff}px`;
      }
      div.style.width = finalWidth;
      div.style.minWidth = finalWidth;
      div.style.maxWidth = finalWidth;
    });
    refs.cellElements.forEach((element) => {
      const div = element;
      let finalWidth;
      if (div.getAttribute("aria-colspan") === "1") {
        finalWidth = `${newWidth}px`;
      } else {
        finalWidth = `${div.offsetWidth + widthDiff}px`;
      }
      div.style.setProperty("--width", finalWidth);
    });
    const pinnedPosition = apiRef.current.unstable_applyPipeProcessors("isColumnPinned", false, refs.colDef.field);
    if (pinnedPosition === GridPinnedColumnPosition.LEFT) {
      updateProperty(refs.fillerLeft, "width", widthDiff);
      refs.leftPinnedCellsAfter.forEach((cell) => {
        updateProperty(cell, "left", widthDiff);
      });
      refs.leftPinnedHeadersAfter.forEach((header) => {
        updateProperty(header, "left", widthDiff);
      });
    }
    if (pinnedPosition === GridPinnedColumnPosition.RIGHT) {
      updateProperty(refs.fillerRight, "width", widthDiff);
      refs.rightPinnedCellsBefore.forEach((cell) => {
        updateProperty(cell, "right", widthDiff);
      });
      refs.rightPinnedHeadersBefore.forEach((header) => {
        updateProperty(header, "right", widthDiff);
      });
    }
  };
  const finishResize = (nativeEvent) => {
    stopListening();
    if (refs.previousMouseClickEvent) {
      const prevEvent = refs.previousMouseClickEvent;
      const prevTimeStamp = prevEvent.timeStamp;
      const prevClientX = prevEvent.clientX;
      const prevClientY = prevEvent.clientY;
      if (nativeEvent.timeStamp - prevTimeStamp < 300 && nativeEvent.clientX === prevClientX && nativeEvent.clientY === prevClientY) {
        refs.previousMouseClickEvent = void 0;
        return;
      }
    }
    if (refs.colDef) {
      apiRef.current.setColumnWidth(refs.colDef.field, refs.colDef.width);
      logger.debug(`Updating col ${refs.colDef.field} with new width: ${refs.colDef.width}`);
      const columnsState = gridColumnsStateSelector(apiRef.current.state);
      refs.groupHeaderElements.forEach((element) => {
        const fields = getFieldsFromGroupHeaderElem(element);
        const div = element;
        const newWidth = fields.reduce((acc, field) => {
          if (columnsState.columnVisibilityModel[field] !== false) {
            return acc + columnsState.lookup[field].computedWidth;
          }
          return acc;
        }, 0);
        const finalWidth = `${newWidth}px`;
        div.style.width = finalWidth;
        div.style.minWidth = finalWidth;
        div.style.maxWidth = finalWidth;
      });
    }
    stopResizeEventTimeout.start(0, () => {
      apiRef.current.publishEvent("columnResizeStop", null, nativeEvent);
    });
  };
  const storeReferences = (colDef, separator, xStart) => {
    var _a;
    const root = apiRef.current.rootElementRef.current;
    refs.initialColWidth = colDef.computedWidth;
    refs.initialTotalWidth = apiRef.current.getRootDimensions().rowWidth;
    refs.colDef = colDef;
    refs.columnHeaderElement = findHeaderElementFromField(apiRef.current.columnHeadersContainerRef.current, colDef.field);
    const headerFilterElement = root.querySelector(`.${gridClasses.headerFilterRow} [data-field="${escapeOperandAttributeSelector(colDef.field)}"]`);
    if (headerFilterElement) {
      refs.headerFilterElement = headerFilterElement;
    }
    refs.groupHeaderElements = findGroupHeaderElementsFromField((_a = apiRef.current.columnHeadersContainerRef) == null ? void 0 : _a.current, colDef.field);
    refs.cellElements = findGridCellElementsFromCol(refs.columnHeaderElement, apiRef.current);
    refs.fillerLeft = findGridElement(apiRef.current, "filler--pinnedLeft");
    refs.fillerRight = findGridElement(apiRef.current, "filler--pinnedRight");
    const pinnedPosition = apiRef.current.unstable_applyPipeProcessors("isColumnPinned", false, refs.colDef.field);
    refs.leftPinnedCellsAfter = pinnedPosition !== GridPinnedColumnPosition.LEFT ? [] : findLeftPinnedCellsAfterCol(apiRef.current, refs.columnHeaderElement);
    refs.rightPinnedCellsBefore = pinnedPosition !== GridPinnedColumnPosition.RIGHT ? [] : findRightPinnedCellsBeforeCol(apiRef.current, refs.columnHeaderElement);
    refs.leftPinnedHeadersAfter = pinnedPosition !== GridPinnedColumnPosition.LEFT ? [] : findLeftPinnedHeadersAfterCol(apiRef.current, refs.columnHeaderElement);
    refs.rightPinnedHeadersBefore = pinnedPosition !== GridPinnedColumnPosition.RIGHT ? [] : findRightPinnedHeadersBeforeCol(apiRef.current, refs.columnHeaderElement);
    resizeDirection.current = getResizeDirection(separator, theme.direction);
    initialOffsetToSeparator.current = computeOffsetToSeparator(xStart, refs.columnHeaderElement.getBoundingClientRect(), resizeDirection.current);
  };
  const handleResizeMouseUp = useEventCallback_default(finishResize);
  const handleResizeMouseMove = useEventCallback_default((nativeEvent) => {
    if (nativeEvent.buttons === 0) {
      handleResizeMouseUp(nativeEvent);
      return;
    }
    let newWidth = computeNewWidth(initialOffsetToSeparator.current, nativeEvent.clientX, refs.columnHeaderElement.getBoundingClientRect(), resizeDirection.current);
    newWidth = clamp(newWidth, refs.colDef.minWidth, refs.colDef.maxWidth);
    updateWidth(newWidth);
    const params = {
      element: refs.columnHeaderElement,
      colDef: refs.colDef,
      width: newWidth
    };
    apiRef.current.publishEvent("columnResize", params, nativeEvent);
  });
  const handleTouchEnd = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId.current);
    if (!finger) {
      return;
    }
    finishResize(nativeEvent);
  });
  const handleTouchMove = useEventCallback_default((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId.current);
    if (!finger) {
      return;
    }
    if (nativeEvent.type === "mousemove" && nativeEvent.buttons === 0) {
      handleTouchEnd(nativeEvent);
      return;
    }
    let newWidth = computeNewWidth(initialOffsetToSeparator.current, finger.x, refs.columnHeaderElement.getBoundingClientRect(), resizeDirection.current);
    newWidth = clamp(newWidth, refs.colDef.minWidth, refs.colDef.maxWidth);
    updateWidth(newWidth);
    const params = {
      element: refs.columnHeaderElement,
      colDef: refs.colDef,
      width: newWidth
    };
    apiRef.current.publishEvent("columnResize", params, nativeEvent);
  });
  const handleTouchStart = useEventCallback_default((event) => {
    const cellSeparator = findParentElementFromClassName(event.target, gridClasses["columnSeparator--resizable"]);
    if (!cellSeparator) {
      return;
    }
    const touch = event.changedTouches[0];
    if (touch != null) {
      touchId.current = touch.identifier;
    }
    const columnHeaderElement = findParentElementFromClassName(event.target, gridClasses.columnHeader);
    const field = getFieldFromHeaderElem(columnHeaderElement);
    const colDef = apiRef.current.getColumn(field);
    logger.debug(`Start Resize on col ${colDef.field}`);
    apiRef.current.publishEvent("columnResizeStart", {
      field
    }, event);
    storeReferences(colDef, cellSeparator, touch.clientX);
    const doc = ownerDocument(event.currentTarget);
    doc.addEventListener("touchmove", handleTouchMove);
    doc.addEventListener("touchend", handleTouchEnd);
  });
  const stopListening = React147.useCallback(() => {
    const doc = ownerDocument(apiRef.current.rootElementRef.current);
    doc.body.style.removeProperty("cursor");
    doc.removeEventListener("mousemove", handleResizeMouseMove);
    doc.removeEventListener("mouseup", handleResizeMouseUp);
    doc.removeEventListener("touchmove", handleTouchMove);
    doc.removeEventListener("touchend", handleTouchEnd);
    setTimeout(() => {
      doc.removeEventListener("click", preventClick, true);
    }, 100);
    if (refs.columnHeaderElement) {
      refs.columnHeaderElement.style.pointerEvents = "unset";
    }
  }, [apiRef, refs, handleResizeMouseMove, handleResizeMouseUp, handleTouchMove, handleTouchEnd]);
  const handleResizeStart = React147.useCallback(({
    field
  }) => {
    apiRef.current.setState((state) => _extends({}, state, {
      columnResize: _extends({}, state.columnResize, {
        resizingColumnField: field
      })
    }));
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const handleResizeStop = React147.useCallback(() => {
    apiRef.current.setState((state) => _extends({}, state, {
      columnResize: _extends({}, state.columnResize, {
        resizingColumnField: ""
      })
    }));
    apiRef.current.forceUpdate();
  }, [apiRef]);
  const handleColumnResizeMouseDown = useEventCallback_default(({
    colDef
  }, event) => {
    if (event.button !== 0) {
      return;
    }
    if (!event.currentTarget.classList.contains(gridClasses["columnSeparator--resizable"])) {
      return;
    }
    event.preventDefault();
    logger.debug(`Start Resize on col ${colDef.field}`);
    apiRef.current.publishEvent("columnResizeStart", {
      field: colDef.field
    }, event);
    storeReferences(colDef, event.currentTarget, event.clientX);
    const doc = ownerDocument(apiRef.current.rootElementRef.current);
    doc.body.style.cursor = "col-resize";
    refs.previousMouseClickEvent = event.nativeEvent;
    doc.addEventListener("mousemove", handleResizeMouseMove);
    doc.addEventListener("mouseup", handleResizeMouseUp);
    doc.addEventListener("click", preventClick, true);
  });
  const handleColumnSeparatorDoubleClick = useEventCallback_default((params, event) => {
    if (props.disableAutosize) {
      return;
    }
    if (event.button !== 0) {
      return;
    }
    const column = apiRef.current.state.columns.lookup[params.field];
    if (column.resizable === false) {
      return;
    }
    apiRef.current.autosizeColumns(_extends({}, props.autosizeOptions, {
      columns: [column.field]
    }));
  });
  const columnVirtualizationDisabled = useColumnVirtualizationDisabled(apiRef);
  const isAutosizingRef = React147.useRef(false);
  const autosizeColumns = React147.useCallback(async (userOptions) => {
    var _a;
    const root = (_a = apiRef.current.rootElementRef) == null ? void 0 : _a.current;
    if (!root) {
      return;
    }
    if (isAutosizingRef.current) {
      return;
    }
    isAutosizingRef.current = true;
    const state = gridColumnsStateSelector(apiRef.current.state);
    const options = _extends({}, DEFAULT_GRID_AUTOSIZE_OPTIONS, userOptions, {
      columns: (userOptions == null ? void 0 : userOptions.columns) ?? state.orderedFields
    });
    options.columns = options.columns.filter((c) => state.columnVisibilityModel[c] !== false);
    const columns = options.columns.map((c) => apiRef.current.state.columns.lookup[c]);
    try {
      apiRef.current.unstable_setColumnVirtualization(false);
      await columnVirtualizationDisabled();
      const widthByField = extractColumnWidths(apiRef, options, columns);
      const newColumns = columns.map((column) => _extends({}, column, {
        width: widthByField[column.field],
        computedWidth: widthByField[column.field]
      }));
      if (options.expand) {
        const visibleColumns = state.orderedFields.map((field) => state.lookup[field]).filter((c) => state.columnVisibilityModel[c.field] !== false);
        const totalWidth = visibleColumns.reduce((total, column) => total + (widthByField[column.field] ?? column.computedWidth ?? column.width), 0);
        const availableWidth = apiRef.current.getRootDimensions().viewportInnerSize.width;
        const remainingWidth = availableWidth - totalWidth;
        if (remainingWidth > 0) {
          const widthPerColumn = remainingWidth / (newColumns.length || 1);
          newColumns.forEach((column) => {
            column.width += widthPerColumn;
            column.computedWidth += widthPerColumn;
          });
        }
      }
      apiRef.current.updateColumns(newColumns);
      newColumns.forEach((newColumn, index) => {
        if (newColumn.width !== columns[index].width) {
          const width = newColumn.width;
          apiRef.current.publishEvent("columnWidthChange", {
            element: apiRef.current.getColumnHeaderElement(newColumn.field),
            colDef: newColumn,
            width
          });
        }
      });
    } finally {
      apiRef.current.unstable_setColumnVirtualization(true);
      isAutosizingRef.current = false;
    }
  }, [apiRef, columnVirtualizationDisabled]);
  React147.useEffect(() => stopListening, [stopListening]);
  useOnMount(() => {
    if (props.autosizeOnMount) {
      Promise.resolve().then(() => {
        apiRef.current.autosizeColumns(props.autosizeOptions);
      });
    }
  });
  useGridNativeEventListener(apiRef, () => {
    var _a;
    return (_a = apiRef.current.columnHeadersContainerRef) == null ? void 0 : _a.current;
  }, "touchstart", handleTouchStart, {
    passive: true
  });
  useGridApiMethod(apiRef, {
    autosizeColumns
  }, "public");
  useGridApiEventHandler(apiRef, "columnResizeStop", handleResizeStop);
  useGridApiEventHandler(apiRef, "columnResizeStart", handleResizeStart);
  useGridApiEventHandler(apiRef, "columnSeparatorMouseDown", handleColumnResizeMouseDown);
  useGridApiEventHandler(apiRef, "columnSeparatorDoubleClick", handleColumnSeparatorDoubleClick);
  useGridApiOptionHandler(apiRef, "columnResize", props.onColumnResize);
  useGridApiOptionHandler(apiRef, "columnWidthChange", props.onColumnWidthChange);
};
function updateProperty(element, property, delta) {
  if (!element) {
    return;
  }
  element.style[property] = `${parseInt(element.style[property], 10) + delta}px`;
}

// node_modules/@mui/x-data-grid/DataGrid/useDataGridComponent.js
var useDataGridComponent = (inputApiRef, props) => {
  const apiRef = useGridInitialization(inputApiRef, props);
  useGridRowSelectionPreProcessors(apiRef, props);
  useGridRowsPreProcessors(apiRef);
  useGridInitializeState(dimensionsStateInitializer, apiRef, props);
  useGridInitializeState(rowSelectionStateInitializer, apiRef, props);
  useGridInitializeState(columnsStateInitializer, apiRef, props);
  useGridInitializeState(rowsStateInitializer, apiRef, props);
  useGridInitializeState(editingStateInitializer, apiRef, props);
  useGridInitializeState(focusStateInitializer, apiRef, props);
  useGridInitializeState(sortingStateInitializer, apiRef, props);
  useGridInitializeState(preferencePanelStateInitializer, apiRef, props);
  useGridInitializeState(filterStateInitializer, apiRef, props);
  useGridInitializeState(densityStateInitializer, apiRef, props);
  useGridInitializeState(columnResizeStateInitializer, apiRef, props);
  useGridInitializeState(paginationStateInitializer, apiRef, props);
  useGridInitializeState(rowsMetaStateInitializer, apiRef, props);
  useGridInitializeState(columnMenuStateInitializer, apiRef, props);
  useGridInitializeState(columnGroupsStateInitializer, apiRef, props);
  useGridInitializeState(virtualizationStateInitializer, apiRef, props);
  useGridKeyboardNavigation(apiRef, props);
  useGridRowSelection(apiRef, props);
  useGridColumns(apiRef, props);
  useGridRows(apiRef, props);
  useGridParamsApi(apiRef);
  useGridColumnSpanning(apiRef);
  useGridColumnGrouping(apiRef, props);
  useGridEditing(apiRef, props);
  useGridFocus(apiRef, props);
  useGridPreferencesPanel(apiRef, props);
  useGridFilter(apiRef, props);
  useGridSorting(apiRef, props);
  useGridDensity(apiRef, props);
  useGridColumnResize(apiRef, props);
  useGridPagination(apiRef, props);
  useGridRowsMeta(apiRef, props);
  useGridScroll(apiRef, props);
  useGridColumnMenu(apiRef);
  useGridCsvExport(apiRef, props);
  useGridPrintExport(apiRef, props);
  useGridClipboard(apiRef, props);
  useGridDimensions(apiRef, props);
  useGridEvents(apiRef, props);
  useGridStatePersistence(apiRef);
  useGridVirtualization(apiRef, props);
  return apiRef;
};

// node_modules/@mui/x-data-grid/DataGrid/DataGrid.js
var import_jsx_runtime92 = __toESM(require_jsx_runtime());
var propValidators;
if (true) {
  propValidators = [
    ...propValidatorsDataGrid,
    // Only validate in MIT version
    (props) => props.columns && props.columns.some((column) => column.resizable) && [`MUI X: \`column.resizable = true\` is not a valid prop.`, "Column resizing is not available in the MIT version.", "", "You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature."].join("\n") || void 0
  ];
}
var DataGridRaw = React148.forwardRef(function DataGrid(inProps, ref) {
  const props = useDataGridProps(inProps);
  const privateApiRef = useDataGridComponent(props.apiRef, props);
  if (true) {
    validateProps(props, propValidators);
  }
  return (0, import_jsx_runtime92.jsx)(GridContextProvider, {
    privateApiRef,
    props,
    children: (0, import_jsx_runtime92.jsxs)(GridRoot, _extends({
      className: props.className,
      style: props.style,
      sx: props.sx,
      ref
    }, props.forwardedProps, {
      children: [(0, import_jsx_runtime92.jsx)(GridHeader, {}), (0, import_jsx_runtime92.jsx)(GridVirtualScroller, {}), (0, import_jsx_runtime92.jsx)(GridFooterPlaceholder, {})]
    }))
  });
});
var DataGrid2 = React148.memo(DataGridRaw);
DataGridRaw.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The ref object that allows Data Grid manipulation. Can be instantiated with `useGridApiRef()`.
   */
  apiRef: import_prop_types61.default.shape({
    current: import_prop_types61.default.object.isRequired
  }),
  /**
   * The label of the Data Grid.
   */
  "aria-label": import_prop_types61.default.string,
  /**
   * The id of the element containing a label for the Data Grid.
   */
  "aria-labelledby": import_prop_types61.default.string,
  /**
   * If `true`, the Data Grid height is dynamic and follows the number of rows in the Data Grid.
   * @default false
   */
  autoHeight: import_prop_types61.default.bool,
  /**
   * If `true`, the pageSize is calculated according to the container size and the max number of rows to avoid rendering a vertical scroll bar.
   * @default false
   */
  autoPageSize: import_prop_types61.default.bool,
  /**
   * If `true`, columns are autosized after the datagrid is mounted.
   * @default false
   */
  autosizeOnMount: import_prop_types61.default.bool,
  /**
   * The options for autosize when user-initiated.
   */
  autosizeOptions: import_prop_types61.default.shape({
    columns: import_prop_types61.default.arrayOf(import_prop_types61.default.string),
    expand: import_prop_types61.default.bool,
    includeHeaders: import_prop_types61.default.bool,
    includeOutliers: import_prop_types61.default.bool,
    outliersFactor: import_prop_types61.default.number
  }),
  /**
   * Controls the modes of the cells.
   */
  cellModesModel: import_prop_types61.default.object,
  /**
   * If `true`, the Data Grid will display an extra column with checkboxes for selecting rows.
   * @default false
   */
  checkboxSelection: import_prop_types61.default.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types61.default.object,
  /**
   * The character used to separate cell values when copying to the clipboard.
   * @default '\t'
   */
  clipboardCopyCellDelimiter: import_prop_types61.default.string,
  /**
   * Column region in pixels to render before/after the viewport
   * @default 150
   */
  columnBufferPx: import_prop_types61.default.number,
  columnGroupingModel: import_prop_types61.default.arrayOf(import_prop_types61.default.object),
  /**
   * Sets the height in pixel of the column headers in the Data Grid.
   * @default 56
   */
  columnHeaderHeight: import_prop_types61.default.number,
  /**
   * Set of columns of type [[GridColDef]][].
   */
  columns: import_prop_types61.default.arrayOf(import_prop_types61.default.object).isRequired,
  /**
   * Set the column visibility model of the Data Grid.
   * If defined, the Data Grid will ignore the `hide` property in [[GridColDef]].
   */
  columnVisibilityModel: import_prop_types61.default.object,
  /**
   * Set the density of the Data Grid.
   * @default "standard"
   */
  density: import_prop_types61.default.oneOf(["comfortable", "compact", "standard"]),
  /**
   * If `true`, column autosizing on header separator double-click is disabled.
   * @default false
   */
  disableAutosize: import_prop_types61.default.bool,
  /**
   * If `true`, column filters are disabled.
   * @default false
   */
  disableColumnFilter: import_prop_types61.default.bool,
  /**
   * If `true`, the column menu is disabled.
   * @default false
   */
  disableColumnMenu: import_prop_types61.default.bool,
  /**
   * If `true`, resizing columns is disabled.
   * @default false
   */
  disableColumnResize: import_prop_types61.default.bool,
  /**
   * If `true`, hiding/showing columns is disabled.
   * @default false
   */
  disableColumnSelector: import_prop_types61.default.bool,
  /**
   * If `true`, the column sorting feature will be disabled.
   * @default false
   */
  disableColumnSorting: import_prop_types61.default.bool,
  /**
   * If `true`, the density selector is disabled.
   * @default false
   */
  disableDensitySelector: import_prop_types61.default.bool,
  /**
   * If `true`, `eval()` is not used for performance optimization.
   * @default false
   */
  disableEval: import_prop_types61.default.bool,
  /**
   * If `true`, multiple selection using the Ctrl/CMD or Shift key is disabled.
   * The MIT DataGrid will ignore this prop, unless `checkboxSelection` is enabled.
   * @default false (`!props.checkboxSelection` for MIT Data Grid)
   */
  disableMultipleRowSelection: import_prop_types61.default.bool,
  /**
   * If `true`, the selection on click on a row or cell is disabled.
   * @default false
   */
  disableRowSelectionOnClick: import_prop_types61.default.bool,
  /**
   * If `true`, the virtualization is disabled.
   * @default false
   */
  disableVirtualization: import_prop_types61.default.bool,
  /**
   * Controls whether to use the cell or row editing.
   * @default "cell"
   */
  editMode: import_prop_types61.default.oneOf(["cell", "row"]),
  /**
   * Use if the actual rowCount is not known upfront, but an estimation is available.
   * If some rows have children (for instance in the tree data), this number represents the amount of top level rows.
   * Applicable only with `paginationMode="server"` and when `rowCount="-1"`
   */
  estimatedRowCount: import_prop_types61.default.number,
  /**
   * Unstable features, breaking changes might be introduced.
   * For each feature, if the flag is not explicitly set to `true`, the feature will be fully disabled and any property / method call will not have any effect.
   */
  experimentalFeatures: import_prop_types61.default.shape({
    warnIfFocusStateIsNotSynced: import_prop_types61.default.bool
  }),
  /**
   * The milliseconds delay to wait after a keystroke before triggering filtering.
   * @default 150
   */
  filterDebounceMs: import_prop_types61.default.number,
  /**
   * Filtering can be processed on the server or client-side.
   * Set it to 'server' if you would like to handle filtering on the server-side.
   * @default "client"
   */
  filterMode: import_prop_types61.default.oneOf(["client", "server"]),
  /**
   * Set the filter model of the Data Grid.
   */
  filterModel: import_prop_types61.default.shape({
    items: import_prop_types61.default.arrayOf(import_prop_types61.default.shape({
      field: import_prop_types61.default.string.isRequired,
      id: import_prop_types61.default.oneOfType([import_prop_types61.default.number, import_prop_types61.default.string]),
      operator: import_prop_types61.default.string.isRequired,
      value: import_prop_types61.default.any
    })).isRequired,
    logicOperator: import_prop_types61.default.oneOf(["and", "or"]),
    quickFilterExcludeHiddenColumns: import_prop_types61.default.bool,
    quickFilterLogicOperator: import_prop_types61.default.oneOf(["and", "or"]),
    quickFilterValues: import_prop_types61.default.array
  }),
  /**
   * Forwarded props for the Data Grid root element.
   * @ignore - do not document.
   */
  forwardedProps: import_prop_types61.default.object,
  /**
   * Function that applies CSS classes dynamically on cells.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @returns {string} The CSS class to apply to the cell.
   */
  getCellClassName: import_prop_types61.default.func,
  /**
   * Function that returns the element to render in row detail.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @returns {React.JSX.Element} The row detail element.
   */
  getDetailPanelContent: import_prop_types61.default.func,
  /**
   * Function that returns the estimated height for a row.
   * Only works if dynamic row height is used.
   * Once the row height is measured this value is discarded.
   * @param {GridRowHeightParams} params With all properties from [[GridRowHeightParams]].
   * @returns {number | null} The estimated row height value. If `null` or `undefined` then the default row height, based on the density, is applied.
   */
  getEstimatedRowHeight: import_prop_types61.default.func,
  /**
   * Function that applies CSS classes dynamically on rows.
   * @param {GridRowClassNameParams} params With all properties from [[GridRowClassNameParams]].
   * @returns {string} The CSS class to apply to the row.
   */
  getRowClassName: import_prop_types61.default.func,
  /**
   * Function that sets the row height per row.
   * @param {GridRowHeightParams} params With all properties from [[GridRowHeightParams]].
   * @returns {GridRowHeightReturnValue} The row height value. If `null` or `undefined` then the default row height is applied. If "auto" then the row height is calculated based on the content.
   */
  getRowHeight: import_prop_types61.default.func,
  /**
   * Return the id of a given [[GridRowModel]].
   */
  getRowId: import_prop_types61.default.func,
  /**
   * Function that allows to specify the spacing between rows.
   * @param {GridRowSpacingParams} params With all properties from [[GridRowSpacingParams]].
   * @returns {GridRowSpacing} The row spacing values.
   */
  getRowSpacing: import_prop_types61.default.func,
  /**
   * If `true`, the footer component is hidden.
   * @default false
   */
  hideFooter: import_prop_types61.default.bool,
  /**
   * If `true`, the pagination component in the footer is hidden.
   * @default false
   */
  hideFooterPagination: import_prop_types61.default.bool,
  /**
   * If `true`, the selected row count in the footer is hidden.
   * @default false
   */
  hideFooterSelectedRowCount: import_prop_types61.default.bool,
  /**
   * If `true`, the diacritics (accents) are ignored when filtering or quick filtering.
   * E.g. when filter value is `cafe`, the rows with `café` will be visible.
   * @default false
   */
  ignoreDiacritics: import_prop_types61.default.bool,
  /**
   * If `true`, the Data Grid will not use `valueFormatter` when exporting to CSV or copying to clipboard.
   * If an object is provided, you can choose to ignore the `valueFormatter` for CSV export or clipboard export.
   * @default false
   */
  ignoreValueFormatterDuringExport: import_prop_types61.default.oneOfType([import_prop_types61.default.shape({
    clipboardExport: import_prop_types61.default.bool,
    csvExport: import_prop_types61.default.bool
  }), import_prop_types61.default.bool]),
  /**
   * The initial state of the DataGrid.
   * The data in it will be set in the state on initialization but will not be controlled.
   * If one of the data in `initialState` is also being controlled, then the control state wins.
   */
  initialState: import_prop_types61.default.object,
  /**
   * Callback fired when a cell is rendered, returns true if the cell is editable.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @returns {boolean} A boolean indicating if the cell is editable.
   */
  isCellEditable: import_prop_types61.default.func,
  /**
   * Determines if a row can be selected.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @returns {boolean} A boolean indicating if the cell is selectable.
   */
  isRowSelectable: import_prop_types61.default.func,
  /**
   * If `true`, the selection model will retain selected rows that do not exist.
   * Useful when using server side pagination and row selections need to be retained
   * when changing pages.
   * @default false
   */
  keepNonExistentRowsSelected: import_prop_types61.default.bool,
  /**
   * If `true`, a loading overlay is displayed.
   */
  loading: import_prop_types61.default.bool,
  /**
   * Set the locale text of the Data Grid.
   * You can find all the translation keys supported in [the source](https://github.com/mui/mui-x/blob/HEAD/packages/x-data-grid/src/constants/localeTextConstants.ts) in the GitHub repository.
   */
  localeText: import_prop_types61.default.object,
  /**
   * Pass a custom logger in the components that implements the [[Logger]] interface.
   * @default console
   */
  logger: import_prop_types61.default.shape({
    debug: import_prop_types61.default.func.isRequired,
    error: import_prop_types61.default.func.isRequired,
    info: import_prop_types61.default.func.isRequired,
    warn: import_prop_types61.default.func.isRequired
  }),
  /**
   * Allows to pass the logging level or false to turn off logging.
   * @default "error" ("warn" in dev mode)
   */
  logLevel: import_prop_types61.default.oneOf(["debug", "error", "info", "warn", false]),
  /**
   * Nonce of the inline styles for [Content Security Policy](https://www.w3.org/TR/2016/REC-CSP2-20161215/#script-src-the-nonce-attribute).
   */
  nonce: import_prop_types61.default.string,
  /**
   * Callback fired when any cell is clicked.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onCellClick: import_prop_types61.default.func,
  /**
   * Callback fired when a double click event comes from a cell element.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onCellDoubleClick: import_prop_types61.default.func,
  /**
   * Callback fired when the cell turns to edit mode.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<React.KeyboardEvent | React.MouseEvent>} event The event that caused this prop to be called.
   */
  onCellEditStart: import_prop_types61.default.func,
  /**
   * Callback fired when the cell turns to view mode.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<MuiBaseEvent>} event The event that caused this prop to be called.
   */
  onCellEditStop: import_prop_types61.default.func,
  /**
   * Callback fired when a keydown event comes from a cell element.
   * @param {GridCellParams} params With all properties from [[GridCellParams]].
   * @param {MuiEvent<React.KeyboardEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onCellKeyDown: import_prop_types61.default.func,
  /**
   * Callback fired when the `cellModesModel` prop changes.
   * @param {GridCellModesModel} cellModesModel Object containing which cells are in "edit" mode.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onCellModesModelChange: import_prop_types61.default.func,
  /**
   * Callback called when the data is copied to the clipboard.
   * @param {string} data The data copied to the clipboard.
   */
  onClipboardCopy: import_prop_types61.default.func,
  /**
   * Callback fired when a click event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderClick: import_prop_types61.default.func,
  /**
   * Callback fired when a double click event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderDoubleClick: import_prop_types61.default.func,
  /**
   * Callback fired when a mouse enter event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderEnter: import_prop_types61.default.func,
  /**
   * Callback fired when a mouse leave event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderLeave: import_prop_types61.default.func,
  /**
   * Callback fired when a mouseout event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderOut: import_prop_types61.default.func,
  /**
   * Callback fired when a mouseover event comes from a column header element.
   * @param {GridColumnHeaderParams} params With all properties from [[GridColumnHeaderParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnHeaderOver: import_prop_types61.default.func,
  /**
   * Callback fired when a column is reordered.
   * @param {GridColumnOrderChangeParams} params With all properties from [[GridColumnOrderChangeParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnOrderChange: import_prop_types61.default.func,
  /**
   * Callback fired while a column is being resized.
   * @param {GridColumnResizeParams} params With all properties from [[GridColumnResizeParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnResize: import_prop_types61.default.func,
  /**
   * Callback fired when the column visibility model changes.
   * @param {GridColumnVisibilityModel} model The new model.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnVisibilityModelChange: import_prop_types61.default.func,
  /**
   * Callback fired when the width of a column is changed.
   * @param {GridColumnResizeParams} params With all properties from [[GridColumnResizeParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onColumnWidthChange: import_prop_types61.default.func,
  /**
   * Callback fired when the density changes.
   * @param {GridDensity} density New density value.
   */
  onDensityChange: import_prop_types61.default.func,
  /**
   * Callback fired when the Filter model changes before the filters are applied.
   * @param {GridFilterModel} model With all properties from [[GridFilterModel]].
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onFilterModelChange: import_prop_types61.default.func,
  /**
   * Callback fired when the menu is closed.
   * @param {GridMenuParams} params With all properties from [[GridMenuParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onMenuClose: import_prop_types61.default.func,
  /**
   * Callback fired when the menu is opened.
   * @param {GridMenuParams} params With all properties from [[GridMenuParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onMenuOpen: import_prop_types61.default.func,
  /**
   * Callback fired when the pagination meta has changed.
   * @param {GridPaginationMeta} paginationMeta Updated pagination meta.
   */
  onPaginationMetaChange: import_prop_types61.default.func,
  /**
   * Callback fired when the pagination model has changed.
   * @param {GridPaginationModel} model Updated pagination model.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onPaginationModelChange: import_prop_types61.default.func,
  /**
   * Callback fired when the preferences panel is closed.
   * @param {GridPreferencePanelParams} params With all properties from [[GridPreferencePanelParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onPreferencePanelClose: import_prop_types61.default.func,
  /**
   * Callback fired when the preferences panel is opened.
   * @param {GridPreferencePanelParams} params With all properties from [[GridPreferencePanelParams]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onPreferencePanelOpen: import_prop_types61.default.func,
  /**
   * Callback called when `processRowUpdate` throws an error or rejects.
   * @param {any} error The error thrown.
   */
  onProcessRowUpdateError: import_prop_types61.default.func,
  /**
   * Callback fired when the Data Grid is resized.
   * @param {ElementSize} containerSize With all properties from [[ElementSize]].
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onResize: import_prop_types61.default.func,
  /**
   * Callback fired when a row is clicked.
   * Not called if the target clicked is an interactive element added by the built-in columns.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowClick: import_prop_types61.default.func,
  /**
   * Callback fired when the row count has changed.
   * @param {number} count Updated row count.
   */
  onRowCountChange: import_prop_types61.default.func,
  /**
   * Callback fired when a double click event comes from a row container element.
   * @param {GridRowParams} params With all properties from [[RowParams]].
   * @param {MuiEvent<React.MouseEvent>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowDoubleClick: import_prop_types61.default.func,
  /**
   * Callback fired when the row turns to edit mode.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @param {MuiEvent<React.KeyboardEvent | React.MouseEvent>} event The event that caused this prop to be called.
   */
  onRowEditStart: import_prop_types61.default.func,
  /**
   * Callback fired when the row turns to view mode.
   * @param {GridRowParams} params With all properties from [[GridRowParams]].
   * @param {MuiEvent<MuiBaseEvent>} event The event that caused this prop to be called.
   */
  onRowEditStop: import_prop_types61.default.func,
  /**
   * Callback fired when the `rowModesModel` prop changes.
   * @param {GridRowModesModel} rowModesModel Object containing which rows are in "edit" mode.
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowModesModelChange: import_prop_types61.default.func,
  /**
   * Callback fired when the selection state of one or multiple rows changes.
   * @param {GridRowSelectionModel} rowSelectionModel With all the row ids [[GridSelectionModel]].
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onRowSelectionModelChange: import_prop_types61.default.func,
  /**
   * Callback fired when the sort model changes before a column is sorted.
   * @param {GridSortModel} model With all properties from [[GridSortModel]].
   * @param {GridCallbackDetails} details Additional details for this callback.
   */
  onSortModelChange: import_prop_types61.default.func,
  /**
   * Callback fired when the state of the Data Grid is updated.
   * @param {GridState} state The new state.
   * @param {MuiEvent<{}>} event The event object.
   * @param {GridCallbackDetails} details Additional details for this callback.
   * @ignore - do not document.
   */
  onStateChange: import_prop_types61.default.func,
  /**
   * Select the pageSize dynamically using the component UI.
   * @default [25, 50, 100]
   */
  pageSizeOptions: import_prop_types61.default.arrayOf(import_prop_types61.default.oneOfType([import_prop_types61.default.number, import_prop_types61.default.shape({
    label: import_prop_types61.default.string.isRequired,
    value: import_prop_types61.default.number.isRequired
  })]).isRequired),
  pagination: import_prop_types61.default.oneOf([true]),
  /**
   * The extra information about the pagination state of the Data Grid.
   * Only applicable with `paginationMode="server"`.
   */
  paginationMeta: import_prop_types61.default.shape({
    hasNextPage: import_prop_types61.default.bool
  }),
  /**
   * Pagination can be processed on the server or client-side.
   * Set it to 'client' if you would like to handle the pagination on the client-side.
   * Set it to 'server' if you would like to handle the pagination on the server-side.
   * @default "client"
   */
  paginationMode: import_prop_types61.default.oneOf(["client", "server"]),
  /**
   * The pagination model of type [[GridPaginationModel]] which refers to current `page` and `pageSize`.
   */
  paginationModel: import_prop_types61.default.shape({
    page: import_prop_types61.default.number.isRequired,
    pageSize: import_prop_types61.default.number.isRequired
  }),
  /**
   * Callback called before updating a row with new values in the row and cell editing.
   * @template R
   * @param {R} newRow Row object with the new values.
   * @param {R} oldRow Row object with the old values.
   * @returns {Promise<R> | R} The final values to update the row.
   */
  processRowUpdate: import_prop_types61.default.func,
  /**
   * The milliseconds throttle delay for resizing the grid.
   * @default 60
   */
  resizeThrottleMs: import_prop_types61.default.number,
  /**
   * Row region in pixels to render before/after the viewport
   * @default 150
   */
  rowBufferPx: import_prop_types61.default.number,
  /**
   * Set the total number of rows, if it is different from the length of the value `rows` prop.
   * If some rows have children (for instance in the tree data), this number represents the amount of top level rows.
   * Only works with `paginationMode="server"`, ignored when `paginationMode="client"`.
   */
  rowCount: import_prop_types61.default.number,
  /**
   * Sets the height in pixel of a row in the Data Grid.
   * @default 52
   */
  rowHeight: import_prop_types61.default.number,
  /**
   * Controls the modes of the rows.
   */
  rowModesModel: import_prop_types61.default.object,
  /**
   * The milliseconds delay to wait after measuring the row height before recalculating row positions.
   * Setting it to a lower value could be useful when using dynamic row height,
   * but might reduce performance when displaying a large number of rows.
   * @default 166
   */
  rowPositionsDebounceMs: import_prop_types61.default.number,
  /**
   * Set of rows of type [[GridRowsProp]].
   * @default []
   */
  rows: import_prop_types61.default.arrayOf(import_prop_types61.default.object),
  /**
   * If `false`, the row selection mode is disabled.
   * @default true
   */
  rowSelection: import_prop_types61.default.bool,
  /**
   * Sets the row selection model of the Data Grid.
   */
  rowSelectionModel: import_prop_types61.default.oneOfType([import_prop_types61.default.arrayOf(import_prop_types61.default.oneOfType([import_prop_types61.default.number, import_prop_types61.default.string]).isRequired), import_prop_types61.default.number, import_prop_types61.default.string]),
  /**
   * Sets the type of space between rows added by `getRowSpacing`.
   * @default "margin"
   */
  rowSpacingType: import_prop_types61.default.oneOf(["border", "margin"]),
  /**
   * Override the height/width of the Data Grid inner scrollbar.
   */
  scrollbarSize: import_prop_types61.default.number,
  /**
   * If `true`, the vertical borders of the cells are displayed.
   * @default false
   */
  showCellVerticalBorder: import_prop_types61.default.bool,
  /**
   * If `true`, the right border of the column headers are displayed.
   * @default false
   */
  showColumnVerticalBorder: import_prop_types61.default.bool,
  /**
   * Overridable components props dynamically passed to the component at rendering.
   */
  slotProps: import_prop_types61.default.object,
  /**
   * Overridable components.
   */
  slots: import_prop_types61.default.object,
  /**
   * Sorting can be processed on the server or client-side.
   * Set it to 'client' if you would like to handle sorting on the client-side.
   * Set it to 'server' if you would like to handle sorting on the server-side.
   * @default "client"
   */
  sortingMode: import_prop_types61.default.oneOf(["client", "server"]),
  /**
   * The order of the sorting sequence.
   * @default ['asc', 'desc', null]
   */
  sortingOrder: import_prop_types61.default.arrayOf(import_prop_types61.default.oneOf(["asc", "desc"])),
  /**
   * Set the sort model of the Data Grid.
   */
  sortModel: import_prop_types61.default.arrayOf(import_prop_types61.default.shape({
    field: import_prop_types61.default.string.isRequired,
    sort: import_prop_types61.default.oneOf(["asc", "desc"])
  })),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types61.default.oneOfType([import_prop_types61.default.arrayOf(import_prop_types61.default.oneOfType([import_prop_types61.default.func, import_prop_types61.default.object, import_prop_types61.default.bool])), import_prop_types61.default.func, import_prop_types61.default.object])
};
export {
  COMFORTABLE_DENSITY_FACTOR,
  COMPACT_DENSITY_FACTOR,
  DATA_GRID_PROPS_DEFAULT_VALUES,
  DEFAULT_GRID_AUTOSIZE_OPTIONS,
  DEFAULT_GRID_COL_TYPE_KEY,
  DataGrid2 as DataGrid,
  EMPTY_PINNED_COLUMN_FIELDS,
  EMPTY_RENDER_CONTEXT,
  GRID_ACTIONS_COLUMN_TYPE,
  GRID_ACTIONS_COL_DEF,
  GRID_BOOLEAN_COL_DEF,
  GRID_CHECKBOX_SELECTION_COL_DEF,
  GRID_CHECKBOX_SELECTION_FIELD,
  GRID_COLUMN_MENU_SLOTS,
  GRID_COLUMN_MENU_SLOT_PROPS,
  GRID_DATETIME_COL_DEF,
  GRID_DATE_COL_DEF,
  GRID_DEFAULT_LOCALE_TEXT,
  GRID_EXPERIMENTAL_ENABLED,
  GRID_NUMERIC_COL_DEF,
  GRID_ROOT_GROUP_ID,
  GRID_SINGLE_SELECT_COL_DEF,
  GRID_STRING_COL_DEF,
  GridActionsCell,
  GridActionsCellItem,
  GridAddIcon,
  GridApiContext,
  GridArrowDownwardIcon,
  GridArrowUpwardIcon,
  GridVirtualScroller as GridBody,
  GridBooleanCell,
  MemoizedGridCell as GridCell,
  GridCellCheckboxForwardRef,
  GridCellCheckboxRenderer2 as GridCellCheckboxRenderer,
  GridCellEditStartReasons,
  GridCellEditStopReasons,
  GridCellModes,
  GridCheckCircleIcon,
  GridCheckIcon,
  GridClearIcon,
  GridCloseIcon,
  GridColumnHeaderFilterIconButton,
  Memoized3 as GridColumnHeaderItem,
  GridColumnHeaderMenu,
  GridColumnHeaderSeparator,
  GridColumnHeaderSeparatorSides,
  GridColumnHeaderSortIcon,
  GridColumnHeaderTitle,
  MemoizedGridColumnHeaders as GridColumnHeaders,
  GridColumnIcon,
  GridColumnMenu,
  GridColumnMenuColumnsItem,
  GridColumnMenuContainer,
  GridColumnMenuFilterItem,
  GridColumnMenuHideItem,
  GridColumnMenuManageItem,
  GridColumnMenuSortItem,
  GridColumnsManagement,
  GridColumnsPanel,
  GridContextProvider,
  GridCsvExportMenuItem,
  GridDeleteForeverIcon,
  GridDeleteIcon,
  GridDragIcon,
  GridEditBooleanCell,
  GridEditDateCell,
  GridEditInputCell,
  GridEditModes,
  GridEditSingleSelectCell,
  GridExpandMoreIcon,
  GridFilterAltIcon,
  GridFilterForm,
  GridFilterInputBoolean,
  GridFilterInputDate,
  GridFilterInputMultipleSingleSelect,
  GridFilterInputMultipleValue,
  GridFilterInputSingleSelect,
  GridFilterInputValue,
  GridFilterListIcon,
  GridFilterPanel,
  GridFooter,
  GridFooterContainer,
  GridFooterPlaceholder,
  GridGenericColumnMenu,
  GridHeader,
  GridHeaderCheckbox,
  GridKeyboardArrowRight,
  GridLoadIcon,
  GridLoadingOverlay,
  GridLogicOperator,
  GridMenu,
  GridMenuIcon,
  GridMoreVertIcon,
  GridNoRowsOverlay,
  GridOverlay,
  GridOverlays,
  GridPagination,
  GridPanel,
  GridPanelContent,
  GridPanelFooter,
  GridPanelHeader,
  GridPanelWrapper,
  GridPinnedColumnPosition,
  GridPreferencePanelsValue,
  GridPrintExportMenuItem,
  GridRemoveIcon,
  GridRoot,
  MemoizedGridRow as GridRow,
  GridRowCount,
  GridRowEditStartReasons,
  GridRowEditStopReasons,
  GridRowModes,
  GridSaveAltIcon,
  GridSearchIcon,
  GridSelectedRowCount,
  GridSeparatorIcon,
  GridSignature,
  Memoized2 as GridSkeletonCell,
  GridTableRowsIcon,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarExportContainer,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  GridTripleDotsVerticalIcon,
  GridViewColumnIcon,
  GridViewHeadlineIcon,
  GridViewStreamIcon,
  GridVisibilityOffIcon,
  checkGridRowIdIsValid,
  createUseGridApiEventHandler,
  getDataGridUtilityClass,
  getDefaultGridFilterModel,
  getGridBooleanOperators,
  getGridDateOperators,
  getGridDefaultColumnTypes,
  getGridNumericOperators,
  getGridNumericQuickFilterFn,
  getGridSingleSelectOperators,
  getGridStringOperators,
  getGridStringQuickFilterFn,
  gridClasses,
  gridColumnDefinitionsSelector,
  gridColumnFieldsSelector,
  gridColumnGroupingSelector,
  gridColumnGroupsHeaderMaxDepthSelector,
  gridColumnGroupsHeaderStructureSelector,
  gridColumnGroupsLookupSelector,
  gridColumnGroupsUnwrappedModelSelector,
  gridColumnLookupSelector,
  gridColumnMenuSelector,
  gridColumnPositionsSelector,
  gridColumnResizeSelector,
  gridColumnVisibilityModelSelector,
  gridColumnsStateSelector,
  gridColumnsTotalWidthSelector,
  gridDataRowIdsSelector,
  gridDateComparator,
  gridDateFormatter,
  gridDateTimeFormatter,
  gridDensityFactorSelector,
  gridDensitySelector,
  gridDimensionsSelector,
  gridExpandedRowCountSelector,
  gridExpandedSortedRowEntriesSelector,
  gridExpandedSortedRowIdsSelector,
  gridFilterActiveItemsLookupSelector,
  gridFilterActiveItemsSelector,
  gridFilterModelSelector,
  gridFilterableColumnDefinitionsSelector,
  gridFilterableColumnLookupSelector,
  gridFilteredDescendantCountLookupSelector,
  gridFilteredRowsLookupSelector,
  gridFilteredSortedRowEntriesSelector,
  gridFilteredSortedRowIdsSelector,
  gridFilteredSortedTopLevelRowEntriesSelector,
  gridFilteredTopLevelRowCountSelector,
  gridFocusCellSelector,
  gridFocusColumnGroupHeaderSelector,
  gridFocusColumnHeaderFilterSelector,
  gridFocusColumnHeaderSelector,
  gridFocusStateSelector,
  gridHasColSpanSelector,
  gridHeaderFilteringEditFieldSelector,
  gridHeaderFilteringEnabledSelector,
  gridHeaderFilteringMenuSelector,
  gridHeaderFilteringStateSelector,
  gridNumberComparator,
  gridPageCountSelector,
  gridPageSelector,
  gridPageSizeSelector,
  gridPaginatedVisibleSortedGridRowEntriesSelector,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  gridPaginationMetaSelector,
  gridPaginationModelSelector,
  gridPaginationRowCountSelector,
  gridPaginationRowRangeSelector,
  gridPaginationSelector,
  gridPanelClasses,
  gridPinnedColumnsSelector,
  gridPreferencePanelStateSelector,
  gridQuickFilterValuesSelector,
  gridRenderContextColumnsSelector,
  gridRenderContextSelector,
  gridResizingColumnFieldSelector,
  gridRowCountSelector,
  gridRowGroupingNameSelector,
  gridRowMaximumTreeDepthSelector,
  gridRowSelectionStateSelector,
  gridRowTreeDepthsSelector,
  gridRowTreeSelector,
  gridRowsDataRowIdToIdLookupSelector,
  gridRowsLoadingSelector,
  gridRowsLookupSelector,
  gridRowsMetaSelector,
  gridSortColumnLookupSelector,
  gridSortModelSelector,
  gridSortedRowEntriesSelector,
  gridSortedRowIdsSelector,
  gridStringOrNumberComparator,
  gridTabIndexCellSelector,
  gridTabIndexColumnGroupHeaderSelector,
  gridTabIndexColumnHeaderFilterSelector,
  gridTabIndexColumnHeaderSelector,
  gridTabIndexStateSelector,
  gridTopLevelRowCountSelector,
  gridVirtualizationColumnEnabledSelector,
  gridVirtualizationEnabledSelector,
  gridVirtualizationSelector,
  gridVisibleColumnDefinitionsSelector,
  gridVisibleColumnFieldsSelector,
  gridVisiblePinnedColumnDefinitionsSelector,
  gridVisibleRowsLookupSelector,
  isLeaf,
  renderActionsCell,
  renderBooleanCell,
  renderEditBooleanCell,
  renderEditDateCell,
  renderEditInputCell,
  renderEditSingleSelectCell,
  selectedGridRowsCountSelector,
  selectedGridRowsSelector,
  selectedIdsLookupSelector,
  unstable_resetCleanupTracking,
  useFirstRender,
  useGridApiContext,
  useGridApiEventHandler,
  useGridApiMethod,
  useGridApiOptionHandler,
  useGridApiRef,
  useGridLogger,
  useGridNativeEventListener,
  useGridRootProps,
  useGridSelector,
  useGridVirtualization,
  useOnMount,
  useResizeObserver,
  useRunOnce,
  virtualizationStateInitializer
};
/*! Bundled license information:

@mui/x-data-grid/index.js:
  (**
   * @mui/x-data-grid v7.7.1
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@mui_x-data-grid.js.map
