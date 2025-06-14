import "./chunk-WGAPYIUP.js";

// node_modules/timeago.js/esm/lang/en_US.js
var EN_US = ["second", "minute", "hour", "day", "week", "month", "year"];
function en_US_default(diff, idx) {
  if (idx === 0)
    return ["just now", "right now"];
  var unit = EN_US[Math.floor(idx / 2)];
  if (diff > 1)
    unit += "s";
  return [diff + " " + unit + " ago", "in " + diff + " " + unit];
}

// node_modules/timeago.js/esm/lang/zh_CN.js
var ZH_CN = ["秒", "分钟", "小时", "天", "周", "个月", "年"];
function zh_CN_default(diff, idx) {
  if (idx === 0)
    return ["刚刚", "片刻后"];
  var unit = ZH_CN[~~(idx / 2)];
  return [diff + " " + unit + "前", diff + " " + unit + "后"];
}

// node_modules/timeago.js/esm/register.js
var Locales = {};
var register = function(locale, func) {
  Locales[locale] = func;
};
var getLocale = function(locale) {
  return Locales[locale] || Locales["en_US"];
};

// node_modules/timeago.js/esm/utils/date.js
var SEC_ARRAY = [
  60,
  60,
  24,
  7,
  365 / 7 / 12,
  12
];
function toDate(input) {
  if (input instanceof Date)
    return input;
  if (!isNaN(input) || /^\d+$/.test(input))
    return new Date(parseInt(input));
  input = (input || "").trim().replace(/\.\d+/, "").replace(/-/, "/").replace(/-/, "/").replace(/(\d)T(\d)/, "$1 $2").replace(/Z/, " UTC").replace(/([+-]\d\d):?(\d\d)/, " $1$2");
  return new Date(input);
}
function formatDiff(diff, localeFunc) {
  var agoIn = diff < 0 ? 1 : 0;
  diff = Math.abs(diff);
  var totalSec = diff;
  var idx = 0;
  for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
    diff /= SEC_ARRAY[idx];
  }
  diff = Math.floor(diff);
  idx *= 2;
  if (diff > (idx === 0 ? 9 : 1))
    idx += 1;
  return localeFunc(diff, idx, totalSec)[agoIn].replace("%s", diff.toString());
}
function diffSec(date, relativeDate) {
  var relDate = relativeDate ? toDate(relativeDate) : /* @__PURE__ */ new Date();
  return (+relDate - +toDate(date)) / 1e3;
}
function nextInterval(diff) {
  var rst = 1, i = 0, d = Math.abs(diff);
  for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
    diff /= SEC_ARRAY[i];
    rst *= SEC_ARRAY[i];
  }
  d = d % rst;
  d = d ? rst - d : rst;
  return Math.ceil(d);
}

// node_modules/timeago.js/esm/format.js
var format = function(date, locale, opts) {
  var sec = diffSec(date, opts && opts.relativeDate);
  return formatDiff(sec, getLocale(locale));
};

// node_modules/timeago.js/esm/utils/dom.js
var ATTR_TIMEAGO_TID = "timeago-id";
function getDateAttribute(node) {
  return node.getAttribute("datetime");
}
function setTimerId(node, timerId) {
  node.setAttribute(ATTR_TIMEAGO_TID, timerId);
}
function getTimerId(node) {
  return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));
}

// node_modules/timeago.js/esm/realtime.js
var TIMER_POOL = {};
var clear = function(tid) {
  clearTimeout(tid);
  delete TIMER_POOL[tid];
};
function run(node, date, localeFunc, opts) {
  clear(getTimerId(node));
  var relativeDate = opts.relativeDate, minInterval = opts.minInterval;
  var diff = diffSec(date, relativeDate);
  node.innerText = formatDiff(diff, localeFunc);
  var tid = setTimeout(function() {
    run(node, date, localeFunc, opts);
  }, Math.min(Math.max(nextInterval(diff), minInterval || 1) * 1e3, 2147483647));
  TIMER_POOL[tid] = 0;
  setTimerId(node, tid);
}
function cancel(node) {
  if (node)
    clear(getTimerId(node));
  else
    Object.keys(TIMER_POOL).forEach(clear);
}
function render(nodes, locale, opts) {
  var nodeList = nodes.length ? nodes : [nodes];
  nodeList.forEach(function(node) {
    run(node, getDateAttribute(node), getLocale(locale), opts || {});
  });
  return nodeList;
}

// node_modules/timeago.js/esm/index.js
register("en_US", en_US_default);
register("zh_CN", zh_CN_default);
export {
  cancel,
  format,
  register,
  render
};
//# sourceMappingURL=timeago__js.js.map
