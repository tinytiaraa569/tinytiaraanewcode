import {
  AccordionContext_default
} from "./chunk-IYQ5W6YL.js";
import {
  createUseThemeProps
} from "./chunk-EHQ6UD6X.js";
import {
  ButtonBase_default
} from "./chunk-SQTMZQAX.js";
import {
  _objectWithoutPropertiesLoose,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_composeClasses,
  init_generateUtilityClass,
  init_generateUtilityClasses,
  init_objectWithoutPropertiesLoose,
  styled_default
} from "./chunk-475QMDJW.js";
import {
  require_jsx_runtime
} from "./chunk-4H4SQ6Q4.js";
import {
  require_prop_types
} from "./chunk-ZDJ5DOYT.js";
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

// node_modules/@mui/material/AccordionSummary/AccordionSummary.js
init_extends();
init_objectWithoutPropertiesLoose();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx();
init_composeClasses();

// node_modules/@mui/material/AccordionSummary/accordionSummaryClasses.js
init_generateUtilityClasses();
init_generateUtilityClass();
function getAccordionSummaryUtilityClass(slot) {
  return generateUtilityClass("MuiAccordionSummary", slot);
}
var accordionSummaryClasses = generateUtilityClasses("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]);
var accordionSummaryClasses_default = accordionSummaryClasses;

// node_modules/@mui/material/AccordionSummary/AccordionSummary.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"];
var useThemeProps = createUseThemeProps("MuiAccordionSummary");
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    expanded,
    disabled,
    disableGutters
  } = ownerState;
  const slots = {
    root: ["root", expanded && "expanded", disabled && "disabled", !disableGutters && "gutters"],
    focusVisible: ["focusVisible"],
    content: ["content", expanded && "expanded", !disableGutters && "contentGutters"],
    expandIconWrapper: ["expandIconWrapper", expanded && "expanded"]
  };
  return composeClasses(slots, getAccordionSummaryUtilityClass, classes);
};
var AccordionSummaryRoot = styled_default(ButtonBase_default, {
  name: "MuiAccordionSummary",
  slot: "Root",
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  const transition = {
    duration: theme.transitions.duration.shortest
  };
  return {
    display: "flex",
    minHeight: 48,
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(["min-height", "background-color"], transition),
    [`&.${accordionSummaryClasses_default.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette.action.focus
    },
    [`&.${accordionSummaryClasses_default.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity
    },
    [`&:hover:not(.${accordionSummaryClasses_default.disabled})`]: {
      cursor: "pointer"
    },
    variants: [{
      props: (props) => !props.disableGutters,
      style: {
        [`&.${accordionSummaryClasses_default.expanded}`]: {
          minHeight: 64
        }
      }
    }]
  };
});
var AccordionSummaryContent = styled_default("div", {
  name: "MuiAccordionSummary",
  slot: "Content",
  overridesResolver: (props, styles) => styles.content
})(({
  theme
}) => ({
  display: "flex",
  flexGrow: 1,
  margin: "12px 0",
  variants: [{
    props: (props) => !props.disableGutters,
    style: {
      transition: theme.transitions.create(["margin"], {
        duration: theme.transitions.duration.shortest
      }),
      [`&.${accordionSummaryClasses_default.expanded}`]: {
        margin: "20px 0"
      }
    }
  }]
}));
var AccordionSummaryExpandIconWrapper = styled_default("div", {
  name: "MuiAccordionSummary",
  slot: "ExpandIconWrapper",
  overridesResolver: (props, styles) => styles.expandIconWrapper
})(({
  theme
}) => ({
  display: "flex",
  color: (theme.vars || theme).palette.action.active,
  transform: "rotate(0deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  }),
  [`&.${accordionSummaryClasses_default.expanded}`]: {
    transform: "rotate(180deg)"
  }
}));
var AccordionSummary = React.forwardRef(function AccordionSummary2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiAccordionSummary"
  });
  const {
    children,
    className,
    expandIcon,
    focusVisibleClassName,
    onClick
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    disabled = false,
    disableGutters,
    expanded,
    toggle
  } = React.useContext(AccordionContext_default);
  const handleChange = (event) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event);
    }
  };
  const ownerState = _extends({}, props, {
    expanded,
    disabled,
    disableGutters
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime2.jsxs)(AccordionSummaryRoot, _extends({
    focusRipple: false,
    disableRipple: true,
    disabled,
    component: "div",
    "aria-expanded": expanded,
    className: clsx_default(classes.root, className),
    focusVisibleClassName: clsx_default(classes.focusVisible, focusVisibleClassName),
    onClick: handleChange,
    ref,
    ownerState
  }, other, {
    children: [(0, import_jsx_runtime.jsx)(AccordionSummaryContent, {
      className: classes.content,
      ownerState,
      children
    }), expandIcon && (0, import_jsx_runtime.jsx)(AccordionSummaryExpandIconWrapper, {
      className: classes.expandIconWrapper,
      ownerState,
      children: expandIcon
    })]
  }));
});
true ? AccordionSummary.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The icon to display as the expand indicator.
   */
  expandIcon: import_prop_types.default.node,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: import_prop_types.default.string,
  /**
   * @ignore
   */
  onClick: import_prop_types.default.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var AccordionSummary_default = AccordionSummary;

export {
  getAccordionSummaryUtilityClass,
  accordionSummaryClasses_default,
  AccordionSummary_default
};
//# sourceMappingURL=chunk-ROW4PF2S.js.map
