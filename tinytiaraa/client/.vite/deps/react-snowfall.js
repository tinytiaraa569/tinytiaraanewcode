import {
  require_react_fast_compare
} from "./chunk-ZS7QTEBQ.js";
import {
  require_react
} from "./chunk-PWUE5V7V.js";
import {
  __toESM
} from "./chunk-WGAPYIUP.js";

// node_modules/react-snowfall/lib/Snowflake.js
var import_react_fast_compare = __toESM(require_react_fast_compare(), 1);

// node_modules/react-snowfall/lib/utils.js
function random(min, max) {
  const randomNumber = Math.random() * (max - min + 1) + min;
  if (!Number.isInteger(min) || !Number.isInteger(max)) {
    return randomNumber;
  } else {
    return Math.floor(randomNumber);
  }
}
function lerp(start, end, normal) {
  return (1 - normal) * start + normal * end;
}
function randomElement(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}
function getSize(element) {
  if (!element)
    return { height: 0, width: 0 };
  return {
    height: element.offsetHeight,
    width: element.offsetWidth
  };
}
var twoPi = Math.PI * 2;

// node_modules/react-snowfall/lib/Snowflake.js
var defaultConfig = {
  color: "#dee4fd",
  radius: [0.5, 3],
  speed: [1, 3],
  wind: [-0.5, 2],
  changeFrequency: 200,
  rotationSpeed: [-1, 1],
  opacity: [1, 1]
};
var Snowflake = class _Snowflake {
  /**
   * A utility function to create a collection of snowflakes
   * @param canvas The canvas element
   * @param amount The number of snowflakes
   * @param config The configuration for each snowflake
   */
  static createSnowflakes(canvas, amount, config) {
    if (!canvas)
      return [];
    const snowflakes = [];
    for (let i = 0; i < amount; i++) {
      snowflakes.push(new _Snowflake(canvas, config));
    }
    return snowflakes;
  }
  constructor(canvas, config = {}) {
    this.updateConfig(config);
    const { radius, wind, speed, rotationSpeed, opacity } = this.config;
    this.params = {
      x: random(0, canvas.offsetWidth),
      y: random(-canvas.offsetHeight, 0),
      rotation: random(0, 360),
      radius: random(...radius),
      speed: random(...speed),
      wind: random(...wind),
      rotationSpeed: random(...rotationSpeed),
      nextSpeed: random(...speed),
      nextWind: random(...wind),
      nextRotationSpeed: random(...rotationSpeed),
      opacity: random(...opacity)
    };
    this.framesSinceLastUpdate = 0;
  }
  selectImage() {
    if (this.config.images && this.config.images.length > 0) {
      this.image = randomElement(this.config.images);
    } else {
      this.image = void 0;
    }
  }
  updateConfig(config) {
    const previousConfig = this.config;
    this.config = { ...defaultConfig, ...config };
    this.config.changeFrequency = random(this.config.changeFrequency, this.config.changeFrequency * 1.5);
    if (this.params && !(0, import_react_fast_compare.default)(this.config.radius, previousConfig === null || previousConfig === void 0 ? void 0 : previousConfig.radius)) {
      this.params.radius = random(...this.config.radius);
    }
    if (!(0, import_react_fast_compare.default)(this.config.images, previousConfig === null || previousConfig === void 0 ? void 0 : previousConfig.images)) {
      this.selectImage();
    }
  }
  updateTargetParams() {
    this.params.nextSpeed = random(...this.config.speed);
    this.params.nextWind = random(...this.config.wind);
    if (this.image) {
      this.params.nextRotationSpeed = random(...this.config.rotationSpeed);
    }
  }
  update(offsetWidth, offsetHeight, framesPassed = 1) {
    const { x, y, rotation, rotationSpeed, nextRotationSpeed, wind, speed, nextWind, nextSpeed, radius } = this.params;
    this.params.x = (x + wind * framesPassed) % (offsetWidth + radius * 2);
    if (this.params.x > offsetWidth + radius)
      this.params.x = -radius;
    this.params.y = (y + speed * framesPassed) % (offsetHeight + radius * 2);
    if (this.params.y > offsetHeight + radius)
      this.params.y = -radius;
    if (this.image) {
      this.params.rotation = (rotation + rotationSpeed) % 360;
    }
    this.params.speed = lerp(speed, nextSpeed, 0.01);
    this.params.wind = lerp(wind, nextWind, 0.01);
    this.params.rotationSpeed = lerp(rotationSpeed, nextRotationSpeed, 0.01);
    if (this.framesSinceLastUpdate++ > this.config.changeFrequency) {
      this.updateTargetParams();
      this.framesSinceLastUpdate = 0;
    }
  }
  getImageOffscreenCanvas(image, size) {
    var _a, _b;
    if (image instanceof HTMLImageElement && image.loading)
      return image;
    let sizes = _Snowflake.offscreenCanvases.get(image);
    if (!sizes) {
      sizes = {};
      _Snowflake.offscreenCanvases.set(image, sizes);
    }
    if (!(size in sizes)) {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      (_a = canvas.getContext("2d")) === null || _a === void 0 ? void 0 : _a.drawImage(image, 0, 0, size, size);
      sizes[size] = canvas;
    }
    return (_b = sizes[size]) !== null && _b !== void 0 ? _b : image;
  }
  /**
   * Draws a circular snowflake to the canvas.
   *
   * This method should only be called if our config does not have images.
   *
   * This method assumes that a path has already been started on the canvas.
   * `ctx.beginPath()` should be called before calling this method.
   *
   * After calling this method, the fillStyle should be set to the snowflake's
   * color and `ctx.fill()` should be called to fill the snowflake.
   *
   * Calling `ctx.fill()` after multiple snowflakes have had `drawCircle` called
   * will render all of the snowflakes since the last call to `ctx.beginPath()`.
   *
   * @param ctx The canvas context to draw to
   */
  drawCircle(ctx) {
    ctx.moveTo(this.params.x, this.params.y);
    ctx.arc(this.params.x, this.params.y, this.params.radius, 0, twoPi);
  }
  /**
   * Draws an image-based snowflake to the canvas.
   *
   * This method should only be called if our config has images.
   *
   * @param ctx The canvas context to draw to
   */
  drawImage(ctx) {
    const { x, y, rotation, radius } = this.params;
    const radian = rotation * Math.PI / 180;
    const cos = Math.cos(radian);
    const sin = Math.sin(radian);
    if (this.params.opacity !== 1) {
      ctx.save();
      ctx.globalAlpha = this.params.opacity;
    }
    ctx.setTransform(cos, sin, -sin, cos, x, y);
    const image = this.getImageOffscreenCanvas(this.image, radius);
    ctx.drawImage(image, -(radius / 2), -(radius / 2), radius, radius);
    if (this.params.opacity !== 1) {
      ctx.restore();
    }
  }
};
Snowflake.offscreenCanvases = /* @__PURE__ */ new WeakMap();
var Snowflake_default = Snowflake;

// node_modules/react-snowfall/lib/config.js
var snowfallBaseStyle = {
  pointerEvents: "none",
  backgroundColor: "transparent",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%"
};
var targetFrameTime = 1e3 / 60;

// node_modules/react-snowfall/lib/SnowfallCanvas.js
var __classPrivateFieldGet = function(receiver, state, kind, f) {
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = function(receiver, state, value, kind, f) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};
var _SnowfallCanvas_ctx;
var _SnowfallCanvas_canvas;
var SnowfallCanvas = class {
  get ctx() {
    return __classPrivateFieldGet(this, _SnowfallCanvas_ctx, "f");
  }
  get canvas() {
    return __classPrivateFieldGet(this, _SnowfallCanvas_canvas, "f");
  }
  set canvas(canvas) {
    __classPrivateFieldSet(this, _SnowfallCanvas_canvas, canvas, "f");
    __classPrivateFieldSet(this, _SnowfallCanvas_ctx, canvas.getContext("2d"), "f");
  }
  constructor(canvas, config) {
    this.lastUpdate = Date.now();
    this.snowflakes = [];
    _SnowfallCanvas_ctx.set(this, void 0);
    _SnowfallCanvas_canvas.set(this, void 0);
    __classPrivateFieldSet(this, _SnowfallCanvas_canvas, canvas, "f");
    __classPrivateFieldSet(this, _SnowfallCanvas_ctx, canvas.getContext("2d"), "f");
    this.config = { snowflakeCount: 150, ...defaultConfig, ...config };
    this.snowflakes = [];
    this.snowflakes = Snowflake_default.createSnowflakes(canvas, config.snowflakeCount || 150, config);
    this.play();
  }
  /**
   * Updates the config used for the snowfall animation, if the number of snowflakes
   * has changed then this will create new or remove existing snowflakes gracefully
   * to retain the position of as many existing snowflakes as possible.
   */
  updateConfig(config) {
    this.config = { ...this.config, ...config };
    const sizeDifference = this.config.snowflakeCount - this.snowflakes.length;
    if (sizeDifference > 0) {
      this.snowflakes = [...this.snowflakes, ...Snowflake_default.createSnowflakes(this.canvas, sizeDifference, config)];
    }
    if (sizeDifference < 0) {
      this.snowflakes = this.snowflakes.slice(0, this.config.snowflakeCount);
    }
    for (const snowflake of this.snowflakes) {
      snowflake.updateConfig(this.config);
    }
  }
  /**
   * Updates the location of each snowflake based on the number of frames passed then
   * clears the canvas and draws each snowflake.
   */
  render(framesPassed = 1) {
    const { ctx, canvas, snowflakes } = this;
    if (!ctx || !canvas)
      return;
    const { offsetWidth, offsetHeight } = canvas;
    for (const snowflake of snowflakes) {
      snowflake.update(offsetWidth, offsetHeight, framesPassed);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, offsetWidth, offsetHeight);
    if (this.config.images && this.config.images.length > 0) {
      for (const snowflake of snowflakes) {
        snowflake.drawImage(ctx);
      }
      return;
    }
    ctx.beginPath();
    for (const snowflake of snowflakes) {
      snowflake.drawCircle(ctx);
    }
    ctx.fillStyle = this.config.color;
    ctx.fill();
  }
  /**
   * The animation loop, will calculate the time since the last render and update
   * the position of the snowflakes appropriately before queueing another frame.
   */
  loop() {
    const now = Date.now();
    const msPassed = Date.now() - this.lastUpdate;
    this.lastUpdate = now;
    const framesPassed = msPassed / targetFrameTime;
    this.render(framesPassed);
    this.animationFrame = requestAnimationFrame(() => this.loop());
  }
  /** Start the animation playing. */
  play() {
    this.loop();
  }
  /** Pause the animation. */
  pause() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = void 0;
    }
  }
};
_SnowfallCanvas_ctx = /* @__PURE__ */ new WeakMap(), _SnowfallCanvas_canvas = /* @__PURE__ */ new WeakMap();

// node_modules/react-snowfall/lib/Snowfall.js
var import_react2 = __toESM(require_react(), 1);

// node_modules/react-snowfall/lib/hooks.js
var import_react = __toESM(require_react(), 1);
var import_react_fast_compare2 = __toESM(require_react_fast_compare(), 1);
var useComponentSize = (ref) => {
  const [size, setSize] = (0, import_react.useState)(getSize(ref.current));
  const resizeHandler = (0, import_react.useCallback)(() => {
    if (ref.current) {
      setSize(getSize(ref.current));
    }
  }, [ref]);
  (0, import_react.useEffect)(() => {
    const { ResizeObserver } = window;
    if (!ref.current)
      return;
    resizeHandler();
    if (typeof ResizeObserver === "function") {
      const resizeObserver = new ResizeObserver(resizeHandler);
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    } else {
      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, [ref, resizeHandler]);
  return size;
};
var useSnowfallStyle = (overrides) => {
  const styles = (0, import_react.useMemo)(() => ({
    ...snowfallBaseStyle,
    ...overrides || {}
  }), [overrides]);
  return styles;
};
function useDeepCompareEffect(effect, deps) {
  const ref = (0, import_react.useRef)(deps);
  if (!(0, import_react_fast_compare2.default)(deps, ref.current)) {
    ref.current = deps;
  }
  return (0, import_react.useEffect)(effect, ref.current);
}
function useDeepMemo(value) {
  const [state, setState] = (0, import_react.useState)(value);
  useDeepCompareEffect(() => setState(value), [value]);
  return state;
}

// node_modules/react-snowfall/lib/Snowfall.js
var Snowfall = ({ color = defaultConfig.color, changeFrequency = defaultConfig.changeFrequency, radius = defaultConfig.radius, speed = defaultConfig.speed, wind = defaultConfig.wind, rotationSpeed = defaultConfig.rotationSpeed, opacity = defaultConfig.opacity, snowflakeCount = 150, images, style } = {}) => {
  const mergedStyle = useSnowfallStyle(style);
  const canvasRef = (0, import_react2.useRef)(null);
  const canvasSize = useComponentSize(canvasRef);
  const config = useDeepMemo({
    color,
    changeFrequency,
    radius,
    speed,
    wind,
    rotationSpeed,
    images,
    snowflakeCount,
    opacity
  });
  const configRef = (0, import_react2.useRef)(config);
  const snowfallCanvasRef = (0, import_react2.useRef)();
  (0, import_react2.useEffect)(() => {
    if (!snowfallCanvasRef.current && canvasRef.current) {
      snowfallCanvasRef.current = new SnowfallCanvas(canvasRef.current, configRef.current);
    }
    return () => {
      var _a;
      (_a = snowfallCanvasRef.current) === null || _a === void 0 ? void 0 : _a.pause();
      snowfallCanvasRef.current = void 0;
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    if (snowfallCanvasRef.current) {
      snowfallCanvasRef.current.updateConfig(config);
    }
  }, [config]);
  return import_react2.default.createElement("canvas", { ref: canvasRef, height: canvasSize.height, width: canvasSize.width, style: mergedStyle, "data-testid": "SnowfallCanvas" });
};
var Snowfall_default = Snowfall;
export {
  Snowfall,
  SnowfallCanvas,
  Snowfall_default as default
};
//# sourceMappingURL=react-snowfall.js.map
