(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["MindMap"] = factory(require("react"));
	else
		root["MindMap"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_9__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(11);
} else {
  module.exports = __webpack_require__(12);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Function.call.bind(Object.prototype.hasOwnProperty);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, e) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e(t.d3 = {});
}(undefined, function (D) {
  "use strict";
  var u = { value: function value() {} };function S() {
    for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
      if (!(t = arguments[e] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new c(r);
  }function c(t) {
    this._ = t;
  }function f(t, e, n) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === e) {
        t[r] = u, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != n && t.push({ name: e, value: n }), t;
  }c.prototype = S.prototype = { constructor: c, on: function on(t, e) {
      var n,
          r,
          i = this._,
          o = (r = i, (t + "").trim().split(/^|\s+/).map(function (t) {
        var e = "",
            n = t.indexOf(".");if (0 <= n && (e = t.slice(n + 1), t = t.slice(0, n)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: e };
      })),
          a = -1,
          u = o.length;if (!(arguments.length < 2)) {
        if (null != e && "function" != typeof e) throw new Error("invalid callback: " + e);for (; ++a < u;) {
          if (n = (t = o[a]).type) i[n] = f(i[n], t.name, e);else if (null == e) for (n in i) {
            i[n] = f(i[n], t.name, null);
          }
        }return this;
      }for (; ++a < u;) {
        if ((n = (t = o[a]).type) && (n = function (t, e) {
          for (var n, r = 0, i = t.length; r < i; ++r) {
            if ((n = t[r]).name === e) return n.value;
          }
        }(i[n], t.name))) return n;
      }
    }, copy: function copy() {
      var t,
          e = {},
          n = this._;for (t in n) {
        e[t] = n[t].slice();
      }return new c(e);
    }, call: function call(t, e) {
      if (0 < (n = arguments.length - 2)) for (var n, r, i = new Array(n), o = 0; o < n; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (o = 0, n = (r = this._[t]).length; o < n; ++o) {
        r[o].value.apply(e, i);
      }
    }, apply: function apply(t, e, n) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(e, n);
      }
    } };var s = "http://www.w3.org/1999/xhtml",
      h = { svg: "http://www.w3.org/2000/svg", xhtml: s, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" },
      l = function l(t) {
    var e = t += "",
        n = e.indexOf(":");return 0 <= n && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), h.hasOwnProperty(e) ? { space: h[e], local: t } : t;
  };function d(t) {
    return ((t = l(t)).local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    } : function (n) {
      return function () {
        var t = this.ownerDocument,
            e = this.namespaceURI;return e === s && t.documentElement.namespaceURI === s ? t.createElement(n) : t.createElementNS(e, n);
      };
    })(t);
  }function p() {}function g(t) {
    return null == t ? p : function () {
      return this.querySelector(t);
    };
  }function y() {
    return [];
  }function v(t) {
    return null == t ? y : function () {
      return this.querySelectorAll(t);
    };
  }function m(t) {
    return new Array(t.length);
  }var _,
      t = function t(_t2) {
    return function () {
      return this.matches(_t2);
    };
  },
      w = ("undefined" != typeof document && ((e = document.documentElement).matches || (_ = e.webkitMatchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.oMatchesSelector, t = function t(_t3) {
    return function () {
      return _.call(this, _t3);
    };
  })), t);function M(t, e) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
  }M.prototype = { constructor: M, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, e) {
      return this._parent.insertBefore(t, e);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };var T = "$";function N(t, e, n, r, i, o) {
    for (var a, u = 0, c = e.length, f = o.length; u < f; ++u) {
      (a = e[u]) ? (a.__data__ = o[u], r[u] = a) : n[u] = new M(t, o[u]);
    }for (; u < c; ++u) {
      (a = e[u]) && (i[u] = a);
    }
  }function k(t, e, s, h, n, r, i) {
    for (var o, a, u = {}, c = e.length, l = r.length, d = new Array(c), f = 0; f < c; ++f) {
      (o = e[f]) && (d[f] = a = T + i.call(o, o.__data__, f, e), a in u ? n[f] = o : u[a] = o);
    }for (f = 0; f < l; ++f) {
      (o = u[a = T + i.call(t, r[f], f, r)]) ? ((h[f] = o).__data__ = r[f], u[a] = null) : s[f] = new M(t, r[f]);
    }for (f = 0; f < c; ++f) {
      (o = e[f]) && u[d[f]] === o && (n[f] = o);
    }
  }function C(t, e) {
    return t < e ? -1 : e < t ? 1 : e <= t ? 0 : NaN;
  }var A = function A(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  };function U(t, e) {
    return t.style.getPropertyValue(e) || A(t).getComputedStyle(t, null).getPropertyValue(e);
  }function z(t) {
    return t.trim().split(/^|\s+/);
  }function Y(t) {
    return t.classList || new E(t);
  }function E(t) {
    this._node = t, this._names = z(t.getAttribute("class") || "");
  }function F(t, e) {
    for (var n = Y(t), r = -1, i = e.length; ++r < i;) {
      n.add(e[r]);
    }
  }function q(t, e) {
    for (var n = Y(t), r = -1, i = e.length; ++r < i;) {
      n.remove(e[r]);
    }
  }E.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      t = this._names.indexOf(t);0 <= t && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return 0 <= this._names.indexOf(t);
    } };function H() {
    this.textContent = "";
  }function X() {
    this.innerHTML = "";
  }function L() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function P() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function j() {
    return null;
  }function O() {
    var t = this.parentNode;t && t.removeChild(this);
  }function I() {
    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
  }function V() {
    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
  }var R = {};function B(n, t, e) {
    return n = Z(n, t, e), function (t) {
      var e = t.relatedTarget;e && (e === this || 8 & e.compareDocumentPosition(this)) || n.call(this, t);
    };
  }function Z(n, r, i) {
    return function (t) {
      var e = D.event;D.event = t;try {
        n.call(this, this.__data__, r, i);
      } finally {
        D.event = e;
      }
    };
  }function $(o) {
    return function () {
      var t = this.__on;if (t) {
        for (var e, n = 0, r = -1, i = t.length; n < i; ++n) {
          e = t[n], o.type && e.type !== o.type || e.name !== o.name ? t[++r] = e : this.removeEventListener(e.type, e.listener, e.capture);
        }++r ? t.length = r : delete this.__on;
      }
    };
  }function W(c, f, s) {
    var h = R.hasOwnProperty(c.type) ? B : Z;return function (t, e, n) {
      var r,
          i = this.__on,
          o = h(f, e, n);if (i) for (var a = 0, u = i.length; a < u; ++a) {
        if ((r = i[a]).type === c.type && r.name === c.name) return this.removeEventListener(r.type, r.listener, r.capture), this.addEventListener(r.type, r.listener = o, r.capture = s), void (r.value = f);
      }this.addEventListener(c.type, o, s), r = { type: c.type, name: c.name, value: f, listener: o, capture: s }, i ? i.push(r) : this.__on = [r];
    };
  }D.event = null, "undefined" != typeof document && ("onmouseenter" in document.documentElement || (R = { mouseenter: "mouseover", mouseleave: "mouseout" }));function Q(t, e, n, r) {
    var i = D.event;t.sourceEvent = D.event, D.event = t;try {
      return e.apply(n, r);
    } finally {
      D.event = i;
    }
  }function J(t, e, n) {
    var r = A(t),
        i = r.CustomEvent;"function" == typeof i ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
  }var G = [null];function x(t, e) {
    this._groups = t, this._parents = e;
  }x.prototype = { constructor: x, select: function select(t) {
      "function" != typeof t && (t = g(t));for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
        for (var o, a, u = e[i], c = u.length, s = r[i] = new Array(c), f = 0; f < c; ++f) {
          (o = u[f]) && (a = t.call(o, o.__data__, f, u)) && ("__data__" in o && (a.__data__ = o.__data__), s[f] = a);
        }
      }return new x(r, this._parents);
    }, selectAll: function selectAll(t) {
      "function" != typeof t && (t = v(t));for (var e = this._groups, n = e.length, r = [], i = [], o = 0; o < n; ++o) {
        for (var a, u = e[o], c = u.length, f = 0; f < c; ++f) {
          (a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a));
        }
      }return new x(r, i);
    }, filter: function filter(t) {
      "function" != typeof t && (t = w(t));for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i) {
        for (var o, a = e[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f) {
          (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
        }
      }return new x(r, this._parents);
    }, data: function data(t, s) {
      if (!t) return a = new Array(this.size()), i = -1, this.each(function (t) {
        a[++i] = t;
      }), a;var h,
          l = s ? k : N,
          e = this._parents,
          d = this._groups;"function" != typeof t && (h = t, t = function t() {
        return h;
      });for (var n = d.length, r = new Array(n), p = new Array(n), g = new Array(n), i = 0; i < n; ++i) {
        var o = e[i],
            y = d[i],
            b = y.length,
            a = t.call(o, o && o.__data__, i, e),
            u = a.length,
            v = p[i] = new Array(u),
            m = r[i] = new Array(u);l(o, y, v, m, g[i] = new Array(b), a, s);for (var _, w, c = 0, f = 0; c < u; ++c) {
          if (_ = v[c]) {
            for (f <= c && (f = c + 1); !(w = m[f]) && ++f < u;) {}_._next = w || null;
          }
        }
      }return (r = new x(r, e))._enter = p, r._exit = g, r;
    }, enter: function enter() {
      return new x(this._enter || this._groups.map(m), this._parents);
    }, exit: function exit() {
      return new x(this._exit || this._groups.map(m), this._parents);
    }, merge: function merge(t) {
      for (var e = this._groups, n = t._groups, r = e.length, t = n.length, s = Math.min(r, t), i = new Array(r), o = 0; o < s; ++o) {
        for (var a, u = e[o], h = n[o], c = u.length, l = i[o] = new Array(c), f = 0; f < c; ++f) {
          (a = u[f] || h[f]) && (l[f] = a);
        }
      }for (; o < r; ++o) {
        i[o] = e[o];
      }return new x(i, this._parents);
    }, order: function order() {
      for (var t = this._groups, e = -1, n = t.length; ++e < n;) {
        for (var r, i = t[e], o = i.length - 1, a = i[o]; 0 <= --o;) {
          (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), a = r);
        }
      }return this;
    }, sort: function sort(n) {
      function s(t, e) {
        return t && e ? n(t.__data__, e.__data__) : !t - !e;
      }n = n || C;for (var t = this._groups, e = t.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = t[i], u = a.length, c = r[i] = new Array(u), f = 0; f < u; ++f) {
          (o = a[f]) && (c[f] = o);
        }c.sort(s);
      }return new x(r, this._parents).order();
    }, call: function call() {
      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
    }, nodes: function nodes() {
      var t = new Array(this.size()),
          e = -1;return this.each(function () {
        t[++e] = this;
      }), t;
    }, node: function node() {
      for (var t = this._groups, e = 0, n = t.length; e < n; ++e) {
        for (var r = t[e], i = 0, o = r.length; i < o; ++i) {
          var a = r[i];if (a) return a;
        }
      }return null;
    }, size: function size() {
      var t = 0;return this.each(function () {
        ++t;
      }), t;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(t) {
      for (var e = this._groups, n = 0, r = e.length; n < r; ++n) {
        for (var i, o = e[n], a = 0, u = o.length; a < u; ++a) {
          (i = o[a]) && t.call(i, i.__data__, a, o);
        }
      }return this;
    }, attr: function attr(t, e) {
      var n,
          t = l(t);return arguments.length < 2 ? (n = this.node(), t.local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)) : this.each((null == e ? t.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      } : "function" == typeof e ? t.local ? function (e, n) {
        return function () {
          var t = n.apply(this, arguments);null == t ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, t);
        };
      } : function (e, n) {
        return function () {
          var t = n.apply(this, arguments);null == t ? this.removeAttribute(e) : this.setAttribute(e, t);
        };
      } : t.local ? function (t, e) {
        return function () {
          this.setAttributeNS(t.space, t.local, e);
        };
      } : function (t, e) {
        return function () {
          this.setAttribute(t, e);
        };
      })(t, e));
    }, style: function style(t, e, n) {
      return 1 < arguments.length ? this.each((null == e ? function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      } : "function" == typeof e ? function (e, n, r) {
        return function () {
          var t = n.apply(this, arguments);null == t ? this.style.removeProperty(e) : this.style.setProperty(e, t, r);
        };
      } : function (t, e, n) {
        return function () {
          this.style.setProperty(t, e, n);
        };
      })(t, e, null == n ? "" : n)) : U(this.node(), t);
    }, property: function property(t, e) {
      return 1 < arguments.length ? this.each((null == e ? function (t) {
        return function () {
          delete this[t];
        };
      } : "function" == typeof e ? function (e, n) {
        return function () {
          var t = n.apply(this, arguments);null == t ? delete this[e] : this[e] = t;
        };
      } : function (t, e) {
        return function () {
          this[t] = e;
        };
      })(t, e)) : this.node()[t];
    }, classed: function classed(t, e) {
      var n = z(t + "");if (arguments.length < 2) {
        for (var r = Y(this.node()), i = -1, o = n.length; ++i < o;) {
          if (!r.contains(n[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof e ? function (t, e) {
        return function () {
          (e.apply(this, arguments) ? F : q)(this, t);
        };
      } : e ? function (t) {
        return function () {
          F(this, t);
        };
      } : function (t) {
        return function () {
          q(this, t);
        };
      })(n, e));
    }, text: function text(t) {
      return arguments.length ? this.each(null == t ? H : ("function" == typeof t ? function (e) {
        return function () {
          var t = e.apply(this, arguments);this.textContent = null == t ? "" : t;
        };
      } : function (t) {
        return function () {
          this.textContent = t;
        };
      })(t)) : this.node().textContent;
    }, html: function html(t) {
      return arguments.length ? this.each(null == t ? X : ("function" == typeof t ? function (e) {
        return function () {
          var t = e.apply(this, arguments);this.innerHTML = null == t ? "" : t;
        };
      } : function (t) {
        return function () {
          this.innerHTML = t;
        };
      })(t)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(L);
    }, lower: function lower() {
      return this.each(P);
    }, append: function append(t) {
      var e = "function" == typeof t ? t : d(t);return this.select(function () {
        return this.appendChild(e.apply(this, arguments));
      });
    }, insert: function insert(t, e) {
      var n = "function" == typeof t ? t : d(t),
          r = null == e ? j : "function" == typeof e ? e : g(e);return this.select(function () {
        return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(O);
    }, clone: function clone(t) {
      return this.select(t ? V : I);
    }, datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }, on: function on(f, t, e) {
      var n,
          r,
          i = (f + "").trim().split(/^|\s+/).map(function (t) {
        var e = "",
            n = t.indexOf(".");return 0 <= n && (e = t.slice(n + 1), t = t.slice(0, n)), { type: t, name: e };
      }),
          o = i.length;if (!(arguments.length < 2)) {
        for (a = t ? W : $, null == e && (e = !1), n = 0; n < o; ++n) {
          this.each(a(i[n], t, e));
        }return this;
      }var a = this.node().__on;if (a) for (var u, c = 0, s = a.length; c < s; ++c) {
        for (n = 0, u = a[c]; n < o; ++n) {
          if ((r = i[n]).type === u.type && r.name === u.name) return u.value;
        }
      }
    }, dispatch: function dispatch(t, e) {
      return this.each(("function" == typeof e ? function (t, e) {
        return function () {
          return J(this, t, e.apply(this, arguments));
        };
      } : function (t, e) {
        return function () {
          return J(this, t, e);
        };
      })(t, e));
    } };function K(t) {
    var e = nt();return e.changedTouches && (e = e.changedTouches[0]), rt(t, e);
  }function tt(t, e, n) {
    arguments.length < 3 && (n = e, e = nt().changedTouches);for (var r, i = 0, o = e ? e.length : 0; i < o; ++i) {
      if ((r = e[i]).identifier === n) return rt(t, r);
    }return null;
  }var et = function et(t) {
    return "string" == typeof t ? new x([[document.querySelector(t)]], [document.documentElement]) : new x([[t]], G);
  },
      nt = function nt() {
    for (var t, e = D.event; t = e.sourceEvent;) {
      e = t;
    }return e;
  },
      rt = function rt(t, e) {
    var n = t.ownerSVGElement || t;if (n.createSVGPoint) return (n = n.createSVGPoint()).x = e.clientX, n.y = e.clientY, [(n = n.matrixTransform(t.getScreenCTM().inverse())).x, n.y];n = t.getBoundingClientRect();return [e.clientX - n.left - t.clientLeft, e.clientY - n.top - t.clientTop];
  };function it() {
    D.event.stopImmediatePropagation();
  }function ot(t) {
    var e = t.document.documentElement,
        t = et(t).on("dragstart.drag", at, !0);"onselectstart" in e ? t.on("selectstart.drag", at, !0) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
  }var at = function at() {
    D.event.preventDefault(), D.event.stopImmediatePropagation();
  };function ut(t, e) {
    var n = t.document.documentElement,
        r = et(t).on("dragstart.drag", null);e && (r.on("click.drag", at, !0), setTimeout(function () {
      r.on("click.drag", null);
    }, 0)), "onselectstart" in n ? r.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
  }function ct(t, e, n, r, i, o, a, u, c, f) {
    this.target = t, this.type = e, this.subject = n, this.identifier = r, this.active = i, this.x = o, this.y = a, this.dx = u, this.dy = c, this._ = f;
  }function ft() {
    return !D.event.button;
  }function st() {
    return this.parentNode;
  }function ht(t) {
    return null == t ? { x: D.event.x, y: D.event.y } : t;
  }function lt() {
    return "ontouchstart" in this;
  }ct.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);return t === this._ ? this : t;
  };function dt(t, e, n) {
    (t.prototype = e.prototype = n).constructor = t;
  }function pt(t, e) {
    var n,
        r = Object.create(t.prototype);for (n in e) {
      r[n] = e[n];
    }return r;
  }function gt() {}var yt = 1 / .7,
      e = "\\s*([+-]?\\d+)\\s*",
      t = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      n = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      bt = /^#([0-9a-f]{3})$/,
      vt = /^#([0-9a-f]{6})$/,
      mt = new RegExp("^rgb\\(" + [e, e, e] + "\\)$"),
      _t = new RegExp("^rgb\\(" + [n, n, n] + "\\)$"),
      wt = new RegExp("^rgba\\(" + [e, e, e, t] + "\\)$"),
      xt = new RegExp("^rgba\\(" + [n, n, n, t] + "\\)$"),
      Mt = new RegExp("^hsl\\(" + [t, n, n] + "\\)$"),
      Tt = new RegExp("^hsla\\(" + [t, n, n, t] + "\\)$"),
      Nt = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };function kt(t) {
    var e;return t = (t + "").trim().toLowerCase(), (e = bt.exec(t)) ? new a((e = parseInt(e[1], 16)) >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | 240 & e, (15 & e) << 4 | 15 & e, 1) : (e = vt.exec(t)) ? Ct(parseInt(e[1], 16)) : (e = mt.exec(t)) ? new a(e[1], e[2], e[3], 1) : (e = _t.exec(t)) ? new a(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, 1) : (e = wt.exec(t)) ? At(e[1], e[2], e[3], e[4]) : (e = xt.exec(t)) ? At(255 * e[1] / 100, 255 * e[2] / 100, 255 * e[3] / 100, e[4]) : (e = Mt.exec(t)) ? St(e[1], e[2] / 100, e[3] / 100, 1) : (e = Tt.exec(t)) ? St(e[1], e[2] / 100, e[3] / 100, e[4]) : Nt.hasOwnProperty(t) ? Ct(Nt[t]) : "transparent" === t ? new a(NaN, NaN, NaN, 0) : null;
  }function Ct(t) {
    return new a(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function At(t, e, n, r) {
    return new a(t = r <= 0 ? e = n = NaN : t, e, n, r);
  }function Ut(t) {
    return (t = t instanceof gt ? t : kt(t)) ? new a((t = t.rgb()).r, t.g, t.b, t.opacity) : new a();
  }function Dt(t, e, n, r) {
    return 1 === arguments.length ? Ut(t) : new a(t, e, n, null == r ? 1 : r);
  }function a(t, e, n, r) {
    this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
  }function St(t, e, n, r) {
    return r <= 0 ? t = e = n = NaN : n <= 0 || 1 <= n ? t = e = NaN : e <= 0 && (t = NaN), new zt(t, e, n, r);
  }function zt(t, e, n, r) {
    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
  }function Yt(t, e, n) {
    return 255 * (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e);
  }dt(gt, kt, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), dt(a, Dt, pt(gt, { brighter: function brighter(t) {
      return t = null == t ? yt : Math.pow(yt, t), new a(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new a(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), dt(zt, function (t, e, n, r) {
    if (1 !== arguments.length) return new zt(t, e, n, null == r ? 1 : r);if ((e = t) instanceof zt) return new zt(e.h, e.s, e.l, e.opacity);if (!(e = e instanceof gt ? e : kt(e))) return new zt();if (e instanceof zt) return e;var n = (e = e.rgb()).r / 255,
        r = e.g / 255,
        t = e.b / 255,
        i = Math.min(n, r, t),
        o = Math.max(n, r, t),
        a = NaN,
        u = o - i,
        c = (o + i) / 2;return u ? (a = n === o ? (r - t) / u + 6 * (r < t) : r === o ? (t - n) / u + 2 : (n - r) / u + 4, u /= c < .5 ? o + i : 2 - o - i, a *= 60) : u = 0 < c && c < 1 ? 0 : a, new zt(a, u, c, e.opacity);
  }, pt(gt, { brighter: function brighter(t) {
      return t = null == t ? yt : Math.pow(yt, t), new zt(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new zt(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          n = this.l,
          e = n + (n < .5 ? n : 1 - n) * e,
          n = 2 * n - e;return new a(Yt(240 <= t ? t - 240 : 120 + t, n, e), Yt(t, n, e), Yt(t < 120 ? 240 + t : t - 120, n, e), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var Et = Math.PI / 180,
      Ft = 180 / Math.PI,
      qt = .95047,
      Ht = 1,
      Xt = 1.08883,
      Lt = 4 / 29,
      Pt = 6 / 29,
      jt = 3 * Pt * Pt,
      Ot = Pt * Pt * Pt;function It(t) {
    if (t instanceof Vt) return new Vt(t.l, t.a, t.b, t.opacity);if (t instanceof Wt) return e = t.h * Et, new Vt(t.l, Math.cos(e) * t.c, Math.sin(e) * t.c, t.opacity);var e = $t((t = t instanceof a ? t : Ut(t)).r),
        n = $t(t.g),
        r = $t(t.b),
        i = Rt((.4124564 * e + .3575761 * n + .1804375 * r) / qt),
        o = Rt((.2126729 * e + .7151522 * n + .072175 * r) / Ht);return new Vt(116 * o - 16, 500 * (i - o), 200 * (o - Rt((.0193339 * e + .119192 * n + .9503041 * r) / Xt)), t.opacity);
  }function Vt(t, e, n, r) {
    this.l = +t, this.a = +e, this.b = +n, this.opacity = +r;
  }function Rt(t) {
    return Ot < t ? Math.pow(t, 1 / 3) : t / jt + Lt;
  }function Bt(t) {
    return Pt < t ? t * t * t : jt * (t - Lt);
  }function Zt(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function $t(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Wt(t, e, n, r) {
    this.h = +t, this.c = +e, this.l = +n, this.opacity = +r;
  }dt(Vt, function (t, e, n, r) {
    return 1 === arguments.length ? It(t) : new Vt(t, e, n, null == r ? 1 : r);
  }, pt(gt, { brighter: function brighter(t) {
      return new Vt(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new Vt(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          e = isNaN(this.a) ? t : t + this.a / 500,
          n = isNaN(this.b) ? t : t - this.b / 200,
          t = Ht * Bt(t);return new a(Zt(3.2404542 * (e = qt * Bt(e)) - 1.5371385 * t - .4985314 * (n = Xt * Bt(n))), Zt(-.969266 * e + 1.8760108 * t + .041556 * n), Zt(.0556434 * e - .2040259 * t + 1.0572252 * n), this.opacity);
    } })), dt(Wt, function (t, e, n, r) {
    return 1 !== arguments.length ? new Wt(t, e, n, null == r ? 1 : r) : (e = t) instanceof Wt ? new Wt(e.h, e.c, e.l, e.opacity) : (e instanceof Vt || (e = It(e)), new Wt((n = Math.atan2(e.b, e.a) * Ft) < 0 ? 360 + n : n, Math.sqrt(e.a * e.a + e.b * e.b), e.l, e.opacity));
  }, pt(gt, { brighter: function brighter(t) {
      return new Wt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new Wt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return It(this).rgb();
    } }));var Qt = 1.78277,
      Jt = -.29227,
      Gt = -.90649,
      Kt = 1.97294,
      te = Kt * Gt,
      ee = Kt * Qt,
      ne = Qt * Jt - -.14861 * Gt;function re(t, e, n, r) {
    if (1 !== arguments.length) return new ie(t, e, n, null == r ? 1 : r);e = t;if (e instanceof ie) return new ie(e.h, e.s, e.l, e.opacity);var n = (e = e instanceof a ? e : Ut(e)).r / 255,
        r = e.g / 255,
        t = e.b / 255,
        r = (Kt * (r - (n = (ne * t + te * n - ee * r) / (ne + te - ee))) - Jt * (t = t - n)) / Gt,
        i = Math.sqrt(r * r + t * t) / (Kt * n * (1 - n));return new ie((r = i ? Math.atan2(r, t) * Ft - 120 : NaN) < 0 ? r + 360 : r, i, n, e.opacity);
  }function ie(t, e, n, r) {
    this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
  }dt(ie, re, pt(gt, { brighter: function brighter(t) {
      return t = null == t ? yt : Math.pow(yt, t), new ie(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new ie(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Et,
          e = +this.l,
          n = isNaN(this.s) ? 0 : this.s * e * (1 - e),
          r = Math.cos(t),
          t = Math.sin(t);return new a(255 * (e + n * (-.14861 * r + Qt * t)), 255 * (e + n * (Jt * r + Gt * t)), 255 * (e + Kt * r * n), this.opacity);
    } }));var oe = function oe(t) {
    return function () {
      return t;
    };
  };function ae(e, n) {
    return function (t) {
      return e + t * n;
    };
  }function ue(o) {
    return 1 == (o = +o) ? ce : function (t, e) {
      return e - t ? (n = t, r = e, i = o, n = Math.pow(n, i), r = Math.pow(r, i) - n, i = 1 / i, function (t) {
        return Math.pow(n + t * r, i);
      }) : oe(isNaN(t) ? e : t);var n, r, i;
    };
  }function ce(t, e) {
    var n = e - t;return n ? ae(t, n) : oe(isNaN(t) ? e : t);
  }(function t(e) {
    var a = ue(e);function n(e, t) {
      var n = a((e = Dt(e)).r, (t = Dt(t)).r),
          r = a(e.g, t.g),
          i = a(e.b, t.b),
          o = ce(e.opacity, t.opacity);return function (t) {
        return e.r = n(t), e.g = r(t), e.b = i(t), e.opacity = o(t), e + "";
      };
    }return n.gamma = t, n;
  })(1);var fe = function fe(e, n) {
    return n -= e = +e, function (t) {
      return e + n * t;
    };
  },
      e = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;new RegExp(e.source, "g");function se(t, e, n, r, i, o) {
    var a, u, c;return (a = Math.sqrt(t * t + e * e)) && (t /= a, e /= a), (c = t * n + e * r) && (n -= t * c, r -= e * c), (u = Math.sqrt(n * n + r * r)) && (n /= u, r /= u, c /= u), t * r < e * n && (t = -t, e = -e, c = -c, a = -a), { translateX: i, translateY: o, rotate: Math.atan2(e, t) * ge, skewX: Math.atan(c) * ge, scaleX: a, scaleY: u };
  }var he,
      le,
      de,
      pe,
      ge = 180 / Math.PI,
      ye = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };function be(l, d, p, g) {
    function y(t) {
      return t.length ? t.pop() + " " : "";
    }return function (t, e) {
      var n,
          r,
          i,
          o,
          a,
          u,
          c,
          s,
          f = [],
          h = [];return t = l(t), e = l(e), i = t.translateX, o = t.translateY, c = e.translateX, u = e.translateY, a = f, r = h, i !== c || o !== u ? (n = a.push("translate(", null, d, null, p), r.push({ i: n - 4, x: fe(i, c) }, { i: n - 2, x: fe(o, u) })) : (c || u) && a.push("translate(" + c + d + u + p), r = t.rotate, i = e.rotate, n = f, o = h, r !== i ? (180 < r - i ? i += 360 : 180 < i - r && (r += 360), o.push({ i: n.push(y(n) + "rotate(", null, g) - 2, x: fe(r, i) })) : i && n.push(y(n) + "rotate(" + i + g), a = t.skewX, c = e.skewX, u = f, o = h, a !== c ? o.push({ i: u.push(y(u) + "skewX(", null, g) - 2, x: fe(a, c) }) : c && u.push(y(u) + "skewX(" + c + g), r = t.scaleX, i = t.scaleY, o = e.scaleX, a = e.scaleY, u = f, c = h, r !== o || i !== a ? (s = u.push(y(u) + "scale(", null, ",", null, ")"), c.push({ i: s - 4, x: fe(r, o) }, { i: s - 2, x: fe(i, a) })) : 1 === o && 1 === a || u.push(y(u) + "scale(" + o + "," + a + ")"), t = e = null, function (t) {
        for (var e, n = -1, r = h.length; ++n < r;) {
          f[(e = h[n]).i] = e.x(t);
        }return f.join("");
      };
    };
  }be(function (t) {
    return "none" === t ? ye : (he || (he = document.createElement("DIV"), le = document.documentElement, de = document.defaultView), he.style.transform = t, t = de.getComputedStyle(le.appendChild(he), null).getPropertyValue("transform"), le.removeChild(he), t = t.slice(7, -1).split(","), se(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }, "px, ", "px)", "deg)"), be(function (t) {
    return null == t ? ye : ((pe = pe || document.createElementNS("http://www.w3.org/2000/svg", "g")).setAttribute("transform", t), (t = pe.transform.baseVal.consolidate()) ? (t = t.matrix, se(t.a, t.b, t.c, t.d, t.e, t.f)) : ye);
  }, ", ", ")", ")");var ve = Math.SQRT2,
      me = 2,
      _e = 4,
      we = 1e-12;function xe(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }function Me(t, e) {
    var r,
        i,
        o,
        a = t[0],
        s = t[1],
        u = t[2],
        t = e[0],
        n = e[1],
        e = e[2],
        c = t - a,
        f = n - s;return (e = (t = c * c + f * f) < we ? (o = Math.log(e / u) / ve, function (t) {
      return [a + t * c, s + t * f, u * Math.exp(ve * t * o)];
    }) : (r = Math.sqrt(t), n = (e * e - u * u + _e * t) / (2 * u * me * r), t = (e * e - u * u - _e * t) / (2 * e * me * r), i = Math.log(Math.sqrt(n * n + 1) - n), o = (Math.log(Math.sqrt(t * t + 1) - t) - i) / ve, function (t) {
      var t = t * o,
          e = xe(i),
          n = u / (me * r) * (e * (n = ve * t + i, ((n = Math.exp(2 * n)) - 1) / (n + 1)) - (n = i, ((n = Math.exp(i)) - 1 / n) / 2));return [a + n * c, s + n * f, u * e / xe(ve * t + i)];
    })).duration = 1e3 * o, e;
  }function Te(u) {
    return function t(a) {
      function e(e, t) {
        var n = u((e = re(e)).h, (t = re(t)).h),
            r = ce(e.s, t.s),
            i = ce(e.l, t.l),
            o = ce(e.opacity, t.opacity);return function (t) {
          return e.h = n(t), e.s = r(t), e.l = i(Math.pow(t, a)), e.opacity = o(t), e + "";
        };
      }return a = +a, e.gamma = t, e;
    }(1);
  }Te(function (t, e) {
    var n = e - t;return n ? ae(t, 180 < n || n < -180 ? n - 360 * Math.round(n / 360) : n) : oe(isNaN(t) ? e : t);
  });var Ne,
      ke,
      n = Te(ce),
      Ce = 0,
      Ae = 0,
      Ue = 0,
      De = 1e3,
      Se = 0,
      ze = 0,
      Ye = 0,
      Ee = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      Fe = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };function qe() {
    return ze || (Fe(He), ze = Ee.now() + Ye);
  }function He() {
    ze = 0;
  }function Xe() {
    this._call = this._time = this._next = null;
  }function Le(t, e, n) {
    var r = new Xe();return r.restart(t, e, n), r;
  }function Pe() {
    ze = (Se = Ee.now()) + Ye, Ce = Ae = 0;try {
      qe(), ++Ce;for (var t, e = Ne; e;) {
        0 <= (t = ze - e._time) && e._call.call(null, t), e = e._next;
      }--Ce;
    } finally {
      for (var n, r, i = Ne, o = 1 / (Ce = 0); i;) {
        i = i._call ? (o > i._time && (o = i._time), (n = i)._next) : (r = i._next, i._next = null, n ? n._next = r : Ne = r);
      }ke = n, Oe(o), ze = 0;
    }
  }function je() {
    var t = Ee.now(),
        e = t - Se;De < e && (Ye -= e, Se = t);
  }function Oe(t) {
    Ce || (Ae = Ae && clearTimeout(Ae), 24 < t - ze ? (t < 1 / 0 && (Ae = setTimeout(Pe, t - Ee.now() - Ye)), Ue = Ue && clearInterval(Ue)) : (Ue || (Se = Ee.now(), Ue = setInterval(je, De)), Ce = 1, Fe(Pe)));
  }Xe.prototype = Le.prototype = { constructor: Xe, restart: function restart(t, e, n) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");n = (null == n ? qe() : +n) + (null == e ? 0 : +e), this._next || ke === this || (ke ? ke._next = this : Ne = this, ke = this), this._call = t, this._time = n, Oe();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, Oe());
    } };S("start", "end", "interrupt");var Ie = 2,
      Ve = 5,
      Re = 6;function Be(t, e) {
    var n,
        r,
        i,
        o = t.__transition,
        a = !0;if (o) {
      for (i in e = null == e ? null : e + "", o) {
        (n = o[i]).name === e ? (r = n.state > Ie && n.state < Ve, n.state = Re, n.timer.stop(), r && n.on.call("interrupt", t, t.__data__, n.index, n.group), delete o[i]) : a = !1;
      }a && delete t.__transition;
    }
  }["e", "w"].map(Ze), ["n", "s"].map(Ze), ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Ze);function Ze(t) {
    return { type: t };
  }var $e = "$";function We() {}function Qe(t, e) {
    var n = new We();if (t instanceof We) t.each(function (t, e) {
      n.set(e, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          o = t.length;if (null == e) for (; ++i < o;) {
        n.set(i, t[i]);
      } else for (; ++i < o;) {
        n.set(e(r = t[i], i, t), r);
      }
    } else if (t) for (var a in t) {
      n.set(a, t[a]);
    }return n;
  }We.prototype = Qe.prototype = { constructor: We, has: function has(t) {
      return $e + t in this;
    }, get: function get(t) {
      return this[$e + t];
    }, set: function set(t, e) {
      return this[$e + t] = e, this;
    }, remove: function remove(t) {
      t = $e + t;return t in this && delete this[t];
    }, clear: function clear() {
      for (var t in this) {
        t[0] === $e && delete this[t];
      }
    }, keys: function keys() {
      var t,
          e = [];for (t in this) {
        t[0] === $e && e.push(t.slice(1));
      }return e;
    }, values: function values() {
      var t,
          e = [];for (t in this) {
        t[0] === $e && e.push(this[t]);
      }return e;
    }, entries: function entries() {
      var t,
          e = [];for (t in this) {
        t[0] === $e && e.push({ key: t.slice(1), value: this[t] });
      }return e;
    }, size: function size() {
      var t,
          e = 0;for (t in this) {
        t[0] === $e && ++e;
      }return e;
    }, empty: function empty() {
      for (var t in this) {
        if (t[0] === $e) return !1;
      }return !0;
    }, each: function each(t) {
      for (var e in this) {
        e[0] === $e && t(this[e], e.slice(1), this);
      }
    } };var Je = {},
      Ge = {};function Ke(t) {
    return new Function("d", "return {" + t.map(function (t, e) {
      return JSON.stringify(t) + ": d[" + e + "]";
    }).join(",") + "}");
  }function tn(o) {
    var e = new RegExp('["' + o + "\n\r]"),
        h = o.charCodeAt(0);function n(r, t) {
      var e,
          n = [],
          i = r.length,
          o = 0,
          s = 0,
          a = i <= 0,
          u = !1;function c() {
        if (a) return Ge;if (u) return u = !1, Je;var t,
            e,
            n = o;if (34 === r.charCodeAt(n)) {
          for (; o++ < i && 34 !== r.charCodeAt(o) || 34 === r.charCodeAt(++o);) {}return (t = o) >= i ? a = !0 : 10 === (e = r.charCodeAt(o++)) ? u = !0 : 13 === e && (u = !0, 10 === r.charCodeAt(o) && ++o), r.slice(n + 1, t - 1).replace(/""/g, '"');
        }for (; o < i;) {
          if (10 === (e = r.charCodeAt(t = o++))) u = !0;else if (13 === e) u = !0, 10 === r.charCodeAt(o) && ++o;else if (e !== h) continue;return r.slice(n, t);
        }return a = !0, r.slice(n, i);
      }for (10 === r.charCodeAt(i - 1) && --i, 13 === r.charCodeAt(i - 1) && --i; (e = c()) !== Ge;) {
        for (var f = []; e !== Je && e !== Ge;) {
          f.push(e), e = c();
        }t && null == (f = t(f, s++)) || n.push(f);
      }return n;
    }function r(t) {
      return t.map(a).join(o);
    }function a(t) {
      return null == t ? "" : e.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
    }return { parse: function parse(t, o) {
        var a, u;return (t = n(t, function (t, e) {
          if (a) return a(t, e - 1);var n, r, i;u = t, a = o ? (r = o, i = Ke(n = t), function (t, e) {
            return r(i(t), e, n);
          }) : Ke(t);
        })).columns = u || [], t;
      }, parseRows: n, format: function format(t, n) {
        var e, r, i;return null == n && (e = t, r = Object.create(null), i = [], e.forEach(function (t) {
          for (var e in t) {
            e in r || i.push(r[e] = e);
          }
        }), n = i), [n.map(a).join(o)].concat(t.map(function (e) {
          return n.map(function (t) {
            return a(e[t]);
          }).join(o);
        })).join("\n");
      }, formatRows: function formatRows(t) {
        return t.map(r).join("\n");
      } };
  }function en(t) {
    return function () {
      return t;
    };
  }function nn() {
    return 1e-6 * (Math.random() - .5);
  }tn(","), tn("\t");function rn(t, e, n, s) {
    if (isNaN(e) || isNaN(n)) return t;var r,
        i,
        o,
        h,
        l,
        a,
        d,
        u,
        p,
        c = t._root,
        f = { data: s },
        g = t._x0,
        y = t._y0,
        b = t._x1,
        v = t._y1;if (!c) return t._root = f, t;for (; c.length;) {
      if ((a = e >= (i = (g + b) / 2)) ? g = i : b = i, (d = n >= (o = (y + v) / 2)) ? y = o : v = o, !(c = (r = c)[u = d << 1 | a])) return r[u] = f, t;
    }if (h = +t._x.call(null, c.data), l = +t._y.call(null, c.data), e === h && n === l) return f.next = c, r ? r[u] = f : t._root = f, t;for (; r = r ? r[u] = new Array(4) : t._root = new Array(4), (a = e >= (i = (g + b) / 2)) ? g = i : b = i, (d = n >= (o = (y + v) / 2)) ? y = o : v = o, (u = d << 1 | a) == (p = (o <= l) << 1 | i <= h);) {}return r[p] = c, r[u] = f, t;
  }function b(t, e, n, r, i) {
    this.node = t, this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = i;
  }function on(t) {
    return t[0];
  }function an(t) {
    return t[1];
  }function un(t, e, n) {
    e = new cn(null == e ? on : e, null == n ? an : n, NaN, NaN, NaN, NaN);return null == t ? e : e.addAll(t);
  }function cn(t, e, n, r, i, o) {
    this._x = t, this._y = e, this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
  }function fn(t) {
    for (var e = { data: t.data }, n = e; t = t.next;) {
      n = n.next = { data: t.data };
    }return e;
  }t = un.prototype = cn.prototype;function sn(t) {
    return t.x + t.vx;
  }function hn(t) {
    return t.y + t.vy;
  }t.copy = function () {
    var t,
        e,
        n = new cn(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;if (!r) return n;if (!r.length) return n._root = fn(r), n;for (t = [{ source: r, target: n._root = new Array(4) }]; r = t.pop();) {
      for (var i = 0; i < 4; ++i) {
        (e = r.source[i]) && (e.length ? t.push({ source: e, target: r.target[i] = new Array(4) }) : r.target[i] = fn(e));
      }
    }return n;
  }, t.add = function (t) {
    var e = +this._x.call(null, t),
        n = +this._y.call(null, t);return rn(this.cover(e, n), e, n, t);
  }, t.addAll = function (t) {
    for (var e, n, r, i = t.length, s = new Array(i), h = new Array(i), o = 1 / 0, a = 1 / 0, u = -1 / 0, c = -1 / 0, f = 0; f < i; ++f) {
      isNaN(n = +this._x.call(null, e = t[f])) || isNaN(r = +this._y.call(null, e)) || ((s[f] = n) < o && (o = n), u < n && (u = n), (h[f] = r) < a && (a = r), c < r && (c = r));
    }for (u < o && (o = this._x0, u = this._x1), c < a && (a = this._y0, c = this._y1), this.cover(o, a).cover(u, c), f = 0; f < i; ++f) {
      rn(this, s[f], h[f], t[f]);
    }return this;
  }, t.cover = function (t, e) {
    if (isNaN(t = +t) || isNaN(e = +e)) return this;var n = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;if (isNaN(n)) i = (n = Math.floor(t)) + 1, o = (r = Math.floor(e)) + 1;else {
      if (!(t < n || i < t || e < r || o < e)) return this;var a,
          u,
          c = i - n,
          f = this._root;switch (u = (e < (r + o) / 2) << 1 | t < (n + i) / 2) {case 0:
          for (; (a = new Array(4))[u] = f, f = a, o = r + (c *= 2), (i = n + c) < t || o < e;) {}break;case 1:
          for (; (a = new Array(4))[u] = f, f = a, o = r + (c *= 2), t < (n = i - c) || o < e;) {}break;case 2:
          for (; (a = new Array(4))[u] = f, f = a, r = o - (c *= 2), (i = n + c) < t || e < r;) {}break;case 3:
          for (; (a = new Array(4))[u] = f, f = a, r = o - (c *= 2), t < (n = i - c) || e < r;) {}}this._root && this._root.length && (this._root = f);
    }return this._x0 = n, this._y0 = r, this._x1 = i, this._y1 = o, this;
  }, t.data = function () {
    var e = [];return this.visit(function (t) {
      if (!t.length) for (; e.push(t.data), t = t.next;) {}
    }), e;
  }, t.extent = function (t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }, t.find = function (t, e, n) {
    var r,
        i,
        s,
        h,
        o,
        a,
        u,
        l,
        d = this._x0,
        p = this._y0,
        g = this._x1,
        y = this._y1,
        c = [],
        f = this._root;for (f && c.push(new b(f, d, p, g, y)), null == n ? n = 1 / 0 : (d = t - n, p = e - n, g = t + n, y = e + n, n *= n); u = c.pop();) {
      !(f = u.node) || (r = u.x0) > g || (i = u.y0) > y || (s = u.x1) < d || (h = u.y1) < p || (f.length ? (c.push(new b(f[3], o = (r + s) / 2, a = (i + h) / 2, s, h), new b(f[2], r, a, o, h), new b(f[1], o, i, s, a), new b(f[0], r, i, o, a)), (a = (a <= e) << 1 | o <= t) && (u = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - a], c[c.length - 1 - a] = u)) : (u = (o = t - +this._x.call(null, f.data)) * o + (a = e - +this._y.call(null, f.data)) * a) < n && (d = t - (u = Math.sqrt(n = u)), p = e - u, g = t + u, y = e + u, l = f.data));
    }return l;
  }, t.remove = function (t) {
    if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;var e,
        n,
        r,
        i,
        o,
        a,
        u,
        s,
        h,
        c,
        l,
        f = this._root,
        d = this._x0,
        p = this._y0,
        g = this._x1,
        y = this._y1;if (!f) return this;if (f.length) for (;;) {
      if ((s = o >= (u = (d + g) / 2)) ? d = u : g = u, (h = a >= (u = (p + y) / 2)) ? p = u : y = u, !(f = (e = f)[c = h << 1 | s])) return this;if (!f.length) break;(e[c + 1 & 3] || e[c + 2 & 3] || e[c + 3 & 3]) && (n = e, l = c);
    }for (; f.data !== t;) {
      if (!(f = (r = f).next)) return this;
    }return (i = f.next) && delete f.next, r ? i ? r.next = i : delete r.next : e ? (i ? e[c] = i : delete e[c], (f = e[0] || e[1] || e[2] || e[3]) && f === (e[3] || e[2] || e[1] || e[0]) && !f.length && (n ? n[l] = f : this._root = f)) : this._root = i, this;
  }, t.removeAll = function (t) {
    for (var e = 0, n = t.length; e < n; ++e) {
      this.remove(t[e]);
    }return this;
  }, t.root = function () {
    return this._root;
  }, t.size = function () {
    var e = 0;return this.visit(function (t) {
      if (!t.length) for (; ++e, t = t.next;) {}
    }), e;
  }, t.visit = function (t) {
    var e,
        n,
        r,
        i,
        o,
        a,
        u,
        c = [],
        f = this._root;for (f && c.push(new b(f, this._x0, this._y0, this._x1, this._y1)); o = c.pop();) {
      !t(f = o.node, n = o.x0, r = o.y0, i = o.x1, o = o.y1) && f.length && (a = (n + i) / 2, u = (r + o) / 2, (e = f[3]) && c.push(new b(e, a, u, i, o)), (e = f[2]) && c.push(new b(e, n, u, a, o)), (e = f[1]) && c.push(new b(e, a, r, i, u)), (e = f[0]) && c.push(new b(e, n, r, a, u)));
    }return this;
  }, t.visitAfter = function (s) {
    var t,
        e = [],
        h = [];for (this._root && e.push(new b(this._root, this._x0, this._y0, this._x1, this._y1)); t = e.pop();) {
      var n,
          r,
          i,
          o,
          a,
          u,
          c,
          f = t.node;f.length && (r = t.x0, i = t.y0, u = (r + (o = t.x1)) / 2, c = (i + (a = t.y1)) / 2, (n = f[0]) && e.push(new b(n, r, i, u, c)), (n = f[1]) && e.push(new b(n, u, i, o, c)), (n = f[2]) && e.push(new b(n, r, c, u, a)), (n = f[3]) && e.push(new b(n, u, c, o, a))), h.push(t);
    }for (; t = h.pop();) {
      s(t.node, t.x0, t.y0, t.x1, t.y1);
    }return this;
  }, t.x = function (t) {
    return arguments.length ? (this._x = t, this) : this._x;
  }, t.y = function (t) {
    return arguments.length ? (this._y = t, this) : this._y;
  };function ln(t) {
    return t.index;
  }function dn(t, e) {
    t = t.get(e);if (!t) throw new Error("missing: " + e);return t;
  }function pn(t) {
    return t.x;
  }function gn(t) {
    return t.y;
  }var yn = Math.PI * (3 - Math.sqrt(5));function bn() {
    return new vn();
  }function vn() {
    this.reset();
  }vn.prototype = { constructor: vn, reset: function reset() {
      this.s = this.t = 0;
    }, add: function add(t) {
      _n(mn, t, this.t), _n(this, mn.s, this.s), this.s ? this.t += mn.t : this.s = mn.t;
    }, valueOf: function valueOf() {
      return this.s;
    } };var mn = new vn();function _n(t, e, n) {
    var r = t.s = e + n,
        i = r - e;t.t = e - (r - i) + (n - i);
  }var wn = Math.PI,
      xn = wn / 2,
      Mn = Math.atan,
      Tn = Math.atan2,
      Nn = Math.cos,
      kn = Math.sin,
      Cn = Math.sqrt;function An(t) {
    return 1 < t ? xn : t < -1 ? -xn : Math.asin(t);
  }bn(), bn(), bn(), bn(), bn(), bn(), bn(), bn();function Un(i) {
    return function (t, e) {
      var n = Nn(t),
          r = Nn(e),
          n = i(n * r);return [n * r * kn(t), n * kn(e)];
    };
  }function Dn(o) {
    return function (t, e) {
      var n = Cn(t * t + e * e),
          r = o(n),
          i = kn(r),
          r = Nn(r);return [Tn(t * i, n * r), An(n && e * i / n)];
    };
  }Un(function (t) {
    return Cn(2 / (1 + t));
  }).invert = Dn(function (t) {
    return 2 * An(t / 2);
  }), Un(function (t) {
    return (t = 1 < (e = t) ? 0 : e < -1 ? wn : Math.acos(e)) && t / kn(t);var e;
  }).invert = Dn(function (t) {
    return t;
  }), Dn(Mn), Dn(An), Dn(function (t) {
    return 2 * Mn(t);
  });var Sn = new Date(),
      zn = new Date();function i(o, a, n, r) {
    function u(t) {
      return o(t = new Date(+t)), t;
    }return (u.floor = u).ceil = function (t) {
      return o(t = new Date(t - 1)), a(t, 1), o(t), t;
    }, u.round = function (t) {
      var e = u(t),
          n = u.ceil(t);return t - e < n - t ? e : n;
    }, u.offset = function (t, e) {
      return a(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
    }, u.range = function (t, e, n) {
      var r,
          i = [];if (t = u.ceil(t), n = null == n ? 1 : Math.floor(n), !(t < e && 0 < n)) return i;for (; i.push(r = new Date(+t)), a(t, n), o(t), r < t && t < e;) {}return i;
    }, u.filter = function (n) {
      return i(function (t) {
        if (t <= t) for (; o(t), !n(t);) {
          t.setTime(t - 1);
        }
      }, function (t, e) {
        if (t <= t) if (e < 0) for (; ++e <= 0;) {
          for (; a(t, -1), !n(t);) {}
        } else for (; 0 <= --e;) {
          for (; a(t, 1), !n(t);) {}
        }
      });
    }, n && (u.count = function (t, e) {
      return Lt.setTime(+t), Pt.setTime(+e), o(Lt), o(Pt), Math.floor(n(Sn, zn));
    }, u.every = function (e) {
      return e = Math.floor(e), isFinite(e) && 0 < e ? 1 < e ? u.filter(r ? function (t) {
        return r(t) % e == 0;
      } : function (t) {
        return u.count(0, t) % e == 0;
      }) : u : null;
    }), u;
  }var Yn = i(function () {}, function (t, e) {
    t.setTime(+t + e);
  }, function (t, e) {
    return e - t;
  }),
      En = (Yn.every = function (n) {
    return n = Math.floor(n), isFinite(n) && 0 < n ? 1 < n ? i(function (t) {
      t.setTime(Math.floor(t / n) * n);
    }, function (t, e) {
      t.setTime(+t + e * n);
    }, function (t, e) {
      return (e - t) / n;
    }) : Yn : null;
  }, 6e4),
      Fn = 36e5,
      qn = (i(function (t) {
    t.setTime(1e3 * Math.floor(t / 1e3));
  }, function (t, e) {
    t.setTime(+t + 1e3 * e);
  }, function (t, e) {
    return (e - t) / 1e3;
  }, function (t) {
    return t.getUTCSeconds();
  }), i(function (t) {
    t.setTime(Math.floor(t / En) * En);
  }, function (t, e) {
    t.setTime(+t + e * En);
  }, function (t, e) {
    return (e - t) / En;
  }, function (t) {
    return t.getMinutes();
  }), i(function (t) {
    var e = t.getTimezoneOffset() * En % Fn;e < 0 && (e += Fn), t.setTime(Math.floor((+t - e) / Fn) * Fn + e);
  }, function (t, e) {
    t.setTime(+t + e * Fn);
  }, function (t, e) {
    return (e - t) / Fn;
  }, function (t) {
    return t.getHours();
  }), i(function (t) {
    t.setHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setDate(t.getDate() + e);
  }, function (t, e) {
    return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * En) / 864e5;
  }, function (t) {
    return t.getDate() - 1;
  }));function Hn(e) {
    return i(function (t) {
      t.setDate(t.getDate() - (t.getDay() + 7 - e) % 7), t.setHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setDate(t.getDate() + 7 * e);
    }, function (t, e) {
      return (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * En) / 6048e5;
    });
  }var Xn = Hn(0),
      Ln = Hn(1),
      Pn = (Hn(2), Hn(3), Hn(4)),
      jn = (Hn(5), Hn(6), i(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setMonth(t.getMonth() + e);
  }, function (t, e) {
    return e.getMonth() - t.getMonth() + 12 * (e.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }), i(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setFullYear(t.getFullYear() + e);
  }, function (t, e) {
    return e.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  })),
      On = (jn.every = function (n) {
    return isFinite(n = Math.floor(n)) && 0 < n ? i(function (t) {
      t.setFullYear(Math.floor(t.getFullYear() / n) * n), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setFullYear(t.getFullYear() + e * n);
    }) : null;
  }, i(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, e) {
    t.setTime(+t + e * En);
  }, function (t, e) {
    return (e - t) / En;
  }, function (t) {
    return t.getUTCMinutes();
  }), i(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, e) {
    t.setTime(+t + e * Fn);
  }, function (t, e) {
    return (e - t) / Fn;
  }, function (t) {
    return t.getUTCHours();
  }), i(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setUTCDate(t.getUTCDate() + e);
  }, function (t, e) {
    return (e - t) / 864e5;
  }, function (t) {
    return t.getUTCDate() - 1;
  }));function In(e) {
    return i(function (t) {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - e) % 7), t.setUTCHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setUTCDate(t.getUTCDate() + 7 * e);
    }, function (t, e) {
      return (e - t) / 6048e5;
    });
  }var Vn = In(0),
      Rn = In(1),
      Bn = (In(2), In(3), In(4)),
      Zn = (In(5), In(6), i(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setUTCMonth(t.getUTCMonth() + e);
  }, function (t, e) {
    return e.getUTCMonth() - t.getUTCMonth() + 12 * (e.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }), i(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, e) {
    t.setUTCFullYear(t.getUTCFullYear() + e);
  }, function (t, e) {
    return e.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  }));function $n(t) {
    var e;return 0 <= t.y && t.y < 100 ? ((e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L)).setFullYear(t.y), e) : new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }function Wn(t) {
    var e;return 0 <= t.y && t.y < 100 ? ((e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L))).setUTCFullYear(t.y), e) : new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }function Qn(t) {
    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function Jn(t) {
    var s = t.dateTime,
        h = t.date,
        l = t.time,
        e = t.periods,
        n = t.days,
        r = t.shortDays,
        i = t.months,
        o = t.shortMonths,
        d = nr(e),
        _p = rr(e),
        g = nr(n),
        y = rr(n),
        b = nr(r),
        v = rr(r),
        m = nr(i),
        _ = rr(i),
        w = nr(o),
        x = rr(o),
        a = { a: function a(t) {
        return r[t.getDay()];
      }, A: function A(t) {
        return n[t.getDay()];
      }, b: function b(t) {
        return o[t.getMonth()];
      }, B: function B(t) {
        return i[t.getMonth()];
      }, c: null, d: Mr, e: Mr, f: Ar, H: Tr, I: Nr, j: kr, L: Cr, m: Ur, M: Dr, p: function p(t) {
        return e[+(12 <= t.getHours())];
      }, Q: ii, s: oi, S: Sr, u: zr, U: Yr, V: Er, w: Fr, W: qr, x: null, X: null, y: Hr, Y: Xr, Z: Lr, "%": ri },
        u = { a: function a(t) {
        return r[t.getUTCDay()];
      }, A: function A(t) {
        return n[t.getUTCDay()];
      }, b: function b(t) {
        return o[t.getUTCMonth()];
      }, B: function B(t) {
        return i[t.getUTCMonth()];
      }, c: null, d: Pr, e: Pr, f: Rr, H: jr, I: Or, j: Ir, L: Vr, m: Br, M: Zr, p: function p(t) {
        return e[+(12 <= t.getUTCHours())];
      }, Q: ii, s: oi, S: $r, u: Wr, U: Qr, V: Jr, w: Gr, W: Kr, x: null, X: null, y: ti, Y: ei, Z: ni, "%": ri },
        M = { a: function a(t, e, n) {
        e = b.exec(e.slice(n));return e ? (t.w = v[e[0].toLowerCase()], n + e[0].length) : -1;
      }, A: function A(t, e, n) {
        e = g.exec(e.slice(n));return e ? (t.w = y[e[0].toLowerCase()], n + e[0].length) : -1;
      }, b: function b(t, e, n) {
        e = w.exec(e.slice(n));return e ? (t.m = x[e[0].toLowerCase()], n + e[0].length) : -1;
      }, B: function B(t, e, n) {
        e = m.exec(e.slice(n));return e ? (t.m = _[e[0].toLowerCase()], n + e[0].length) : -1;
      }, c: function c(t, e, n) {
        return f(t, s, e, n);
      }, d: dr, e: dr, f: mr, H: gr, I: gr, j: pr, L: vr, m: lr, M: yr, p: function p(t, e, n) {
        e = d.exec(e.slice(n));return e ? (t.p = _p[e[0].toLowerCase()], n + e[0].length) : -1;
      }, Q: wr, s: xr, S: br, u: or, U: ar, V: ur, w: ir, W: cr, x: function x(t, e, n) {
        return f(t, h, e, n);
      }, X: function X(t, e, n) {
        return f(t, l, e, n);
      }, y: sr, Y: fr, Z: hr, "%": _r };function c(c, f) {
      return function (t) {
        var e,
            n,
            r,
            i = [],
            o = -1,
            a = 0,
            u = c.length;for (t instanceof Date || (t = new Date(+t)); ++o < u;) {
          37 === c.charCodeAt(o) && (i.push(c.slice(a, o)), null != (n = Gn[e = c.charAt(++o)]) ? e = c.charAt(++o) : n = "e" === e ? " " : "0", (r = f[e]) && (e = r(t, n)), i.push(e), a = o + 1);
        }return i.push(c.slice(a, o)), i.join("");
      };
    }function T(i, o) {
      return function (t) {
        var e,
            n,
            r = Qn(1900);if (f(r, i, t += "", 0) != t.length) return null;if ("Q" in r) return new Date(r.Q);if ("p" in r && (r.H = r.H % 12 + 12 * r.p), "V" in r) {
          if (r.V < 1 || 53 < r.V) return null;"w" in r || (r.w = 1), "Z" in r ? (e = Wn(Qn(r.y)), qn = e.getUTCDay(), e = 4 < n || 0 === n ? Rn.ceil(e) : Rn(e), e = On.offset(e, 7 * (r.V - 1)), r.y = e.getUTCFullYear(), r.m = e.getUTCMonth(), r.d = e.getUTCDate() + (r.w + 6) % 7) : (e = o(Qn(r.y)), qn = e.getDay(), e = 4 < n || 0 === n ? Ln.ceil(e) : Ln(e), e = qn.offset(e, 7 * (r.V - 1)), r.y = e.getFullYear(), r.m = e.getMonth(), r.d = e.getDate() + (r.w + 6) % 7);
        } else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : "W" in r ? 1 : 0), n = "Z" in r ? Wn(Qn(r.y)).getUTCDay() : o(Qn(r.y)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (n + 5) % 7 : r.w + 7 * r.U - (n + 6) % 7);return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, Wn(r)) : o(r);
      };
    }function f(t, e, n, r) {
      for (var i, o, a = 0, u = e.length, c = n.length; a < u;) {
        if (c <= r) return -1;if (37 === (i = e.charCodeAt(a++))) {
          if (i = e.charAt(a++), !(o = M[i in Gn ? e.charAt(a++) : i]) || (r = o(t, n, r)) < 0) return -1;
        } else if (i != n.charCodeAt(r++)) return -1;
      }return r;
    }return a.x = c(h, a), a.X = c(l, a), a.c = c(s, a), u.x = c(h, u), u.X = c(l, u), u.c = c(s, u), { format: function format(t) {
        var e = c(t += "", a);return e.toString = function () {
          return t;
        }, e;
      }, parse: function parse(t) {
        var e = T(t += "", $n);return e.toString = function () {
          return t;
        }, e;
      }, utcFormat: function utcFormat(t) {
        var e = c(t += "", u);return e.toString = function () {
          return t;
        }, e;
      }, utcParse: function utcParse(t) {
        var e = T(t, Wn);return e.toString = function () {
          return t;
        }, e;
      } };
  }Zn.every = function (n) {
    return isFinite(n = Math.floor(n)) && 0 < n ? i(function (t) {
      t.setUTCFullYear(Math.floor(t.getUTCFullYear() / n) * n), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    }, function (t, e) {
      t.setUTCFullYear(t.getUTCFullYear() + e * n);
    }) : null;
  };var Gn = { "-": "", _: " ", 0: "0" },
      r = /^\s*\d+/,
      Kn = /^%/,
      tr = /[\\^$*+?|[\]().{}]/g;function o(t, e, n) {
    var r = t < 0 ? "-" : "",
        t = (r ? -t : t) + "",
        i = t.length;return r + (i < n ? new Array(n - i + 1).join(e) + t : t);
  }function er(t) {
    return t.replace(tr, "\\$&");
  }function nr(t) {
    return new RegExp("^(?:" + t.map(er).join("|") + ")", "i");
  }function rr(t) {
    for (var e = {}, n = -1, r = t.length; ++n < r;) {
      e[t[n].toLowerCase()] = n;
    }return e;
  }function ir(t, e, n) {
    e = r.exec(e.slice(n, n + 1));return e ? (t.w = +e[0], n + e[0].length) : -1;
  }function or(t, e, n) {
    e = r.exec(e.slice(n, n + 1));return e ? (t.u = +e[0], n + e[0].length) : -1;
  }function ar(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.U = +e[0], n + e[0].length) : -1;
  }function ur(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.V = +e[0], n + e[0].length) : -1;
  }function cr(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.W = +e[0], n + e[0].length) : -1;
  }function fr(t, e, n) {
    e = r.exec(e.slice(n, n + 4));return e ? (t.y = +e[0], n + e[0].length) : -1;
  }function sr(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.y = +e[0] + (68 < +e[0] ? 1900 : 2e3), n + e[0].length) : -1;
  }function hr(t, e, n) {
    e = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));return e ? (t.Z = e[1] ? 0 : -(e[2] + (e[3] || "00")), n + e[0].length) : -1;
  }function lr(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.m = e[0] - 1, n + e[0].length) : -1;
  }function dr(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.d = +e[0], n + e[0].length) : -1;
  }function pr(t, e, n) {
    e = r.exec(e.slice(n, n + 3));return e ? (t.m = 0, t.d = +e[0], n + e[0].length) : -1;
  }function gr(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.H = +e[0], n + e[0].length) : -1;
  }function yr(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.M = +e[0], n + e[0].length) : -1;
  }function br(t, e, n) {
    e = r.exec(e.slice(n, n + 2));return e ? (t.S = +e[0], n + e[0].length) : -1;
  }function vr(t, e, n) {
    e = r.exec(e.slice(n, n + 3));return e ? (t.L = +e[0], n + e[0].length) : -1;
  }function mr(t, e, n) {
    e = r.exec(e.slice(n, n + 6));return e ? (t.L = Math.floor(e[0] / 1e3), n + e[0].length) : -1;
  }function _r(t, e, n) {
    e = Kn.exec(e.slice(n, n + 1));return e ? n + e[0].length : -1;
  }function wr(t, e, n) {
    e = r.exec(e.slice(n));return e ? (t.Q = +e[0], n + e[0].length) : -1;
  }function xr(t, e, n) {
    e = r.exec(e.slice(n));return e ? (t.Q = 1e3 * +e[0], n + e[0].length) : -1;
  }function Mr(t, e) {
    return o(t.getDate(), e, 2);
  }function Tr(t, e) {
    return o(t.getHours(), e, 2);
  }function Nr(t, e) {
    return o(t.getHours() % 12 || 12, e, 2);
  }function kr(t, e) {
    return o(1 + qn.count(jn(t), t), e, 3);
  }function Cr(t, e) {
    return o(t.getMilliseconds(), e, 3);
  }function Ar(t, e) {
    return Cr(t, e) + "000";
  }function Ur(t, e) {
    return o(t.getMonth() + 1, e, 2);
  }function Dr(t, e) {
    return o(t.getMinutes(), e, 2);
  }function Sr(t, e) {
    return o(t.getSeconds(), e, 2);
  }function zr(t) {
    t = t.getDay();return 0 === t ? 7 : t;
  }function Yr(t, e) {
    return o(Xn.count(jn(t), t), e, 2);
  }function Er(t, e) {
    var n = t.getDay();return t = 4 <= n || 0 === n ? Pn(t) : Pn.ceil(t), o(Pn.count(jn(t), t) + (4 === jn(t).getDay()), e, 2);
  }function Fr(t) {
    return t.getDay();
  }function qr(t, e) {
    return o(Ln.count(jn(t), t), e, 2);
  }function Hr(t, e) {
    return o(t.getFullYear() % 100, e, 2);
  }function Xr(t, e) {
    return o(t.getFullYear() % 1e4, e, 4);
  }function Lr(t) {
    t = t.getTimezoneOffset();return (0 < t ? "-" : (t *= -1, "+")) + o(t / 60 | 0, "0", 2) + o(t % 60, "0", 2);
  }function Pr(t, e) {
    return o(t.getUTCDate(), e, 2);
  }function jr(t, e) {
    return o(t.getUTCHours(), e, 2);
  }function Or(t, e) {
    return o(t.getUTCHours() % 12 || 12, e, 2);
  }function Ir(t, e) {
    return o(1 + On.count(Zn(t), t), e, 3);
  }function Vr(t, e) {
    return o(t.getUTCMilliseconds(), e, 3);
  }function Rr(t, e) {
    return Vr(t, e) + "000";
  }function Br(t, e) {
    return o(t.getUTCMonth() + 1, e, 2);
  }function Zr(t, e) {
    return o(t.getUTCMinutes(), e, 2);
  }function $r(t, e) {
    return o(t.getUTCSeconds(), e, 2);
  }function Wr(t) {
    t = t.getUTCDay();return 0 === t ? 7 : t;
  }function Qr(t, e) {
    return o(Vn.count(Zn(t), t), e, 2);
  }function Jr(t, e) {
    var n = t.getUTCDay();return t = 4 <= n || 0 === n ? Bn(t) : Bn.ceil(t), o(Bn.count(Zn(t), t) + (4 === Zn(t).getUTCDay()), e, 2);
  }function Gr(t) {
    return t.getUTCDay();
  }function Kr(t, e) {
    return o(Rn.count(Zn(t), t), e, 2);
  }function ti(t, e) {
    return o(t.getUTCFullYear() % 100, e, 2);
  }function ei(t, e) {
    return o(t.getUTCFullYear() % 1e4, e, 4);
  }function ni() {
    return "+0000";
  }function ri() {
    return "%";
  }function ii(t) {
    return +t;
  }function oi(t) {
    return Math.floor(+t / 1e3);
  }var t = (e = Jn({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] })).utcFormat,
      e = e.utcParse,
      ai = "%Y-%m-%dT%H:%M:%S.%LZ";Date.prototype.toISOString || t(ai);function ui(t) {
    return t.match(/.{6}/g).map(function (t) {
      return "#" + t;
    });
  }+new Date("2000-01-01T00:00:00.000Z") || e(ai), ui("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ui("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), ui("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), ui("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), n(re(300, .5, 0), re(-240, .5, 1)), n(re(-100, .75, .35), re(80, 1.5, .8)), n(re(260, .75, .35), re(80, 1.5, .8)), re();function ci(e) {
    var n = e.length;return function (t) {
      return e[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
    };
  }ci(ui("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));ci(ui("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), ci(ui("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), ci(ui("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function fi(t) {
    return t < 0 ? -1 : 1;
  }function si(t, e, n) {
    var r = t._x1 - t._x0,
        e = e - t._x1,
        i = (t._y1 - t._y0) / (r || e < 0 && -0),
        n = (n - t._y1) / (e || r < 0 && -0),
        t = (i * e + n * r) / (r + e);return (fi(i) + fi(n)) * Math.min(Math.abs(i), Math.abs(n), .5 * Math.abs(t)) || 0;
  }function hi(t, e) {
    var n = t._x1 - t._x0;return n ? (3 * (t._y1 - t._y0) / n - e) / 2 : e;
  }function li(t, e, n) {
    var r = t._x0,
        i = t._y0,
        o = t._x1,
        a = t._y1,
        u = (o - r) / 3;t._context.bezierCurveTo(r + u, i + u * e, o - u, a - u * n, o, a);
  }function di(t) {
    this._context = t;
  }di.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x1, this._y1);break;case 3:
          li(this, this._t0, hi(this, this._t0));}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, e) {
      var n = NaN;if (e = +e, (t = +t) !== this._x1 || e !== this._y1) {
        switch (this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(t, e) : this._context.moveTo(t, e);break;case 1:
            this._point = 2;break;case 2:
            this._point = 3, li(this, hi(this, n = si(this, t, e)), n);break;default:
            li(this, this._t0, n = si(this, t, e));}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = e, this._t0 = n;
      }
    } }, Object.create(di.prototype).point = function (t, e) {
    di.prototype.point.call(this, e, t);
  };function pi(t, e, n) {
    this.target = t, this.type = e, this.transform = n;
  }function gi(t, e, n) {
    this.k = t, this.x = e, this.y = n;
  }gi.prototype = { constructor: gi, scale: function scale(t) {
      return 1 === t ? this : new gi(this.k * t, this.x, this.y);
    }, translate: function translate(t, e) {
      return 0 === t & 0 === e ? this : new gi(this.k, this.x + this.k * t, this.y + this.k * e);
    }, apply: function apply(t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    }, applyX: function applyX(t) {
      return t * this.k + this.x;
    }, applyY: function applyY(t) {
      return t * this.k + this.y;
    }, invert: function invert(t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    }, invertX: function invertX(t) {
      return (t - this.x) / this.k;
    }, invertY: function invertY(t) {
      return (t - this.y) / this.k;
    }, rescaleX: function rescaleX(t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    }, rescaleY: function rescaleY(t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    }, toString: function toString() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    } };var yi = new gi(1, 0, 0);function bi() {
    D.event.stopImmediatePropagation();
  }function vi() {
    D.event.preventDefault(), D.event.stopImmediatePropagation();
  }function mi() {
    return !D.event.button;
  }function _i() {
    var t,
        e = this,
        e = e instanceof SVGElement ? (t = (e = e.ownerSVGElement || e).width.baseVal.value, e.height.baseVal.value) : (t = e.clientWidth, e.clientHeight);return [[0, 0], [t, e]];
  }function wi() {
    return this.__zoom || yi;
  }function xi() {
    return -D.event.deltaY * (D.event.deltaMode ? 120 : 1) / 500;
  }function Mi() {
    return "ontouchstart" in this;
  }function Ti(t, e, n) {
    var r = t.invertX(e[0][0]) - n[0][0],
        i = t.invertX(e[1][0]) - n[1][0],
        o = t.invertY(e[0][1]) - n[0][1],
        e = t.invertY(e[1][1]) - n[1][1];return t.translate(r < i ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o < e ? (o + e) / 2 : Math.min(0, o) || Math.max(0, e));
  }D.forceCollide = function (r) {
    var o,
        a,
        l = 1,
        d = 1;function e() {
      for (var t, e, u, c, f, s, h, n = o.length, r = 0; r < d; ++r) {
        for (e = un(o, sn, hn).visitAfter(p), t = 0; t < n; ++t) {
          u = o[t], s = a[u.index], h = s * s, c = u.x + u.vx, f = u.y + u.vy, e.visit(i);
        }
      }function i(t, e, n, r, i) {
        var o = t.data,
            t = t.r,
            a = s + t;if (!o) return c + a < e || r < c - a || f + a < n || i < f - a;o.index > u.index && (n = (e = c - o.x - o.vx) * e + (r = f - o.y - o.vy) * r) < a * a && (0 === e && (n += (e = nn()) * e), 0 === r && (n += (r = nn()) * r), n = (a - (n = Math.sqrt(n))) / n * l, u.vx += (e *= n) * (a = (t *= t) / (h + t)), u.vy += (r *= n) * a, o.vx -= e * (a = 1 - a), o.vy -= r * a);
      }
    }function p(t) {
      if (t.data) return t.r = a[t.data.index];for (var e = t.r = 0; e < 4; ++e) {
        t[e] && t[e].r > t.r && (t.r = t[e].r);
      }
    }function n() {
      if (o) {
        var t,
            e,
            n = o.length;for (a = new Array(n), t = 0; t < n; ++t) {
          e = o[t], a[e.index] = +r(e, t, o);
        }
      }
    }return "function" != typeof r && (r = en(null == r ? 1 : +r)), e.initialize = function (t) {
      o = t, n();
    }, e.iterations = function (t) {
      return arguments.length ? (d = +t, e) : d;
    }, e.strength = function (t) {
      return arguments.length ? (l = +t, e) : l;
    }, e.radius = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : constant(+t), n(), e) : r;
    }, e;
  }, D.forceLink = function (f) {
    var s,
        h,
        o,
        a,
        l,
        u = ln,
        n = function n(t) {
      return 1 / Math.min(a[t.source.index], a[t.target.index]);
    },
        r = en(30),
        d = 1;function e(t) {
      for (var e = 0, n = f.length; e < d; ++e) {
        for (var r, i, o, a, u, c = 0; c < n; ++c) {
          r = (i = f[c]).source, o = (i = i.target).x + i.vx - r.x - r.vx || nn(), a = i.y + i.vy - r.y - r.vy || nn(), o *= u = ((u = Math.sqrt(o * o + a * a)) - h[c]) / u * t * s[c], a *= u, i.vx -= o * (u = l[c]), i.vy -= a * u, r.vx += o * (u = 1 - u), r.vy += a * u;
        }
      }
    }function i() {
      if (o) {
        var t,
            e = o.length,
            n = f.length,
            r = Qe(o, u),
            i = 0;for (a = new Array(e); i < n; ++i) {
          (t = f[i]).index = i, "object" != _typeof(t.source) && (t.source = dn(r, t.source)), "object" != _typeof(t.target) && (t.target = dn(r, t.target)), a[t.source.index] = (a[t.source.index] || 0) + 1, a[t.target.index] = (a[t.target.index] || 0) + 1;
        }for (i = 0, l = new Array(n); i < n; ++i) {
          t = f[i], l[i] = a[t.source.index] / (a[t.source.index] + a[t.target.index]);
        }s = new Array(n), c(), h = new Array(n), p();
      }
    }function c() {
      if (o) for (var t = 0, e = f.length; t < e; ++t) {
        s[t] = +n(f[t], t, f);
      }
    }function p() {
      if (o) for (var t = 0, e = f.length; t < e; ++t) {
        h[t] = +r(f[t], t, f);
      }
    }return null == f && (f = []), e.initialize = function (t) {
      o = t, i();
    }, e.links = function (t) {
      return arguments.length ? (f = t, i(), e) : f;
    }, e.id = function (t) {
      return arguments.length ? (u = t, e) : u;
    }, e.iterations = function (t) {
      return arguments.length ? (d = +t, e) : d;
    }, e.strength = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : constant(+t), c(), e) : n;
    }, e.distance = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : constant(+t), p(), e) : r;
    }, e;
  }, D.forceManyBody = function () {
    var i,
        c,
        f,
        s,
        r = en(-30),
        h = 1,
        l = 1 / 0,
        d = .81;function e(t) {
      var e,
          n = i.length,
          r = un(i, pn, gn).visitAfter(o);for (f = t, e = 0; e < n; ++e) {
        c = i[e], r.visit(a);
      }
    }function n() {
      if (i) {
        var t,
            e,
            n = i.length;for (s = new Array(n), t = 0; t < n; ++t) {
          e = i[t], s[e.index] = +r(e, t, i);
        }
      }
    }function o(t) {
      var e,
          n,
          r,
          i,
          o,
          a = 0,
          u = 0;if (t.length) {
        for (r = i = o = 0; o < 4; ++o) {
          (e = t[o]) && (n = Math.abs(e.value)) && (a += e.value, u += n, r += n * e.x, i += n * e.y);
        }t.x = r / u, t.y = i / u;
      } else for ((e = t).x = e.data.x, e.y = e.data.y; a += s[e.data.index], e = e.next;) {}t.value = a;
    }function a(t, e, n, r) {
      if (!t.value) return !0;var i = t.x - c.x,
          o = t.y - c.y,
          a = r - e,
          u = i * i + o * o;if (a * a / d < u) return u < l && (0 === i && (u += (i = nn()) * i), 0 === o && (u += (o = nn()) * o), u < h && (u = Math.sqrt(h * u)), c.vx += i * t.value * f / u, c.vy += o * t.value * f / u), !0;if (!(t.length || l <= u)) for (t.data === c && !t.next || (0 === i && (u += (i = nn()) * i), 0 === o && (u += (o = nn()) * o), u < h && (u = Math.sqrt(h * u))); t.data !== c && (a = s[t.data.index] * f / u, c.vx += i * a, c.vy += o * a), t = t.next;) {}
    }return e.initialize = function (t) {
      i = t, n();
    }, e.strength = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : constant(+t), n(), e) : r;
    }, e.distanceMin = function (t) {
      return arguments.length ? (h = t * t, e) : Math.sqrt(h);
    }, e.distanceMax = function (t) {
      return arguments.length ? (l = t * t, e) : Math.sqrt(l);
    }, e.theta = function (t) {
      return arguments.length ? (d = t * t, e) : Math.sqrt(d);
    }, e;
  }, D.forceSimulation = function (c) {
    var n,
        r = 1,
        e = .001,
        i = 1 - Math.pow(e, 1 / 300),
        o = 0,
        a = .6,
        u = Qe(),
        t = Le(s),
        f = S("tick", "end");function s() {
      h(), f.call("tick", n), r < e && (t.stop(), f.call("end", n));
    }function h() {
      var t,
          e,
          n = c.length;for (r += (o - r) * i, u.each(function (t) {
        t(r);
      }), t = 0; t < n; ++t) {
        null == (e = c[t]).fx ? e.x += e.vx *= a : (e.x = e.fx, e.vx = 0), null == e.fy ? e.y += e.vy *= a : (e.y = e.fy, e.vy = 0);
      }
    }function l() {
      for (var t, e, n, r = 0, i = c.length; r < i; ++r) {
        (n = c[r]).index = r, (isNaN(n.x) || isNaN(n.y)) && (t = 10 * Math.sqrt(r), e = r * yn, n.x = t * Math.cos(e), n.y = t * Math.sin(e)), (isNaN(n.vx) || isNaN(n.vy)) && (n.vx = n.vy = 0);
      }
    }function d(t) {
      return t.initialize && t.initialize(c), t;
    }return null == c && (c = []), l(), n = { tick: h, restart: function restart() {
        return t.restart(s), n;
      }, stop: function stop() {
        return t.stop(), n;
      }, nodes: function nodes(t) {
        return arguments.length ? (c = t, l(), u.each(d), n) : c;
      }, alpha: function alpha(t) {
        return arguments.length ? (r = +t, n) : r;
      }, alphaMin: function alphaMin(t) {
        return arguments.length ? (e = +t, n) : e;
      }, alphaDecay: function alphaDecay(t) {
        return arguments.length ? (i = +t, n) : +i;
      }, alphaTarget: function alphaTarget(t) {
        return arguments.length ? (o = +t, n) : o;
      }, velocityDecay: function velocityDecay(t) {
        return arguments.length ? (a = 1 - t, n) : 1 - a;
      }, force: function force(t, e) {
        return 1 < arguments.length ? (null == e ? u.remove(t) : u.set(t, d(e)), n) : u.get(t);
      }, find: function find(t, e, n) {
        var r,
            i,
            o,
            a = 0,
            u = c.length;for (null == n ? n = 1 / 0 : n *= n, a = 0; a < u; ++a) {
          (r = (r = t - (i = c[a]).x) * r + (r = e - i.y) * r) < n && (o = i, n = r);
        }return o;
      }, on: function on(t, e) {
        return 1 < arguments.length ? (f.on(t, e), n) : f.on(t);
      } };
  }, D.select = et, D.drag = function () {
    var u,
        c,
        n,
        i,
        o = ft,
        a = st,
        e = ht,
        r = lt,
        p = {},
        g = S("start", "drag", "end"),
        y = 0,
        f = 0;function b(t) {
      t.on("mousedown.drag", s).filter(r).on("touchstart.drag", d).on("touchmove.drag", v).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function s() {
      var t;i || !o.apply(this, arguments) || (t = _("mouse", a.apply(this, arguments), K, this, arguments)) && (et(D.event.view).on("mousemove.drag", h, !0).on("mouseup.drag", l, !0), ot(D.event.view), it(), n = !1, u = D.event.clientX, c = D.event.clientY, t("start"));
    }function h() {
      var t, e;at(), n || (t = D.event.clientX - u, e = D.event.clientY - c, n = f < t * t + e * e), p.mouse("drag");
    }function l() {
      et(D.event.view).on("mousemove.drag mouseup.drag", null), ut(D.event.view, n), at(), p.mouse("end");
    }function d() {
      if (o.apply(this, arguments)) for (var t, e = D.event.changedTouches, n = a.apply(this, arguments), r = e.length, i = 0; i < r; ++i) {
        (t = _(e[i].identifier, n, tt, this, arguments)) && (it(), t("start"));
      }
    }function v() {
      for (var t, e = D.event.changedTouches, n = e.length, r = 0; r < n; ++r) {
        (t = p[e[r].identifier]) && (at(), t("drag"));
      }
    }function m() {
      var t,
          e,
          n = D.event.changedTouches,
          r = n.length;for (i && clearTimeout(i), i = setTimeout(function () {
        i = null;
      }, 500), t = 0; t < r; ++t) {
        (e = p[n[t].identifier]) && (it(), e("end"));
      }
    }function _(i, o, a, u, c) {
      var f,
          s,
          h,
          l = a(o, i),
          d = g.copy();if (Q(new ct(b, "beforestart", f, i, y, l[0], l[1], 0, 0, d), function () {
        return null != (D.event.subject = f = e.apply(u, c)) && (s = f.x - l[0] || 0, h = f.y - l[1] || 0, !0);
      })) return function t(e) {
        var n,
            r = l;switch (e) {case "start":
            p[i] = t, n = y++;break;case "end":
            delete p[i], --y;case "drag":
            l = a(o, i), n = y;}Q(new ct(b, e, f, i, n, l[0] + s, l[1] + h, l[0] - r[0], l[1] - r[1], d), d.apply, d, [e, u, c]);
      };
    }return b.filter = function (t) {
      return arguments.length ? (o = "function" == typeof t ? t : constant(!!t), b) : o;
    }, b.container = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : constant(t), b) : a;
    }, b.subject = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : constant(t), b) : e;
    }, b.touchable = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : constant(!!t), b) : r;
    }, b.on = function () {
      var t = g.on.apply(g, arguments);return t === g ? b : t;
    }, b.clickDistance = function (t) {
      return arguments.length ? (f = (t = +t) * t, b) : Math.sqrt(f);
    }, b;
  }, D.zoom = function () {
    var l,
        o,
        u = mi,
        f = _i,
        d = Ti,
        c = xi,
        n = Mi,
        i = [0, 1 / 0],
        p = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        s = 250,
        h = Me,
        y = [],
        e = S("start", "zoom", "end"),
        b = 500,
        v = 150,
        m = 0;function a(t) {
      t.property("__zoom", wi).on("wheel.zoom", r).on("mousedown.zoom", N).on("dblclick.zoom", k).filter(n).on("touchstart.zoom", C).on("touchmove.zoom", A).on("touchend.zoom touchcancel.zoom", U).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function _(t, e) {
      return (e = Math.max(i[0], Math.min(i[1], e))) === t.k ? t : new gi(e, t.x, t.y);
    }function w(t, e, n) {
      var r = e[0] - n[0] * t.k,
          e = e[1] - n[1] * t.k;return r === t.x && e === t.y ? t : new gi(t.k, r, e);
    }function x(t) {
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
    }function M(t, n, c) {
      t.on("start.zoom", function () {
        g(this, arguments).start();
      }).on("interrupt.zoom end.zoom", function () {
        g(this, arguments).end();
      }).tween("zoom", function () {
        var t = arguments,
            r = g(this, t),
            e = f.apply(this, t),
            i = c || x(e),
            o = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
            e = this.__zoom,
            a = "function" == typeof n ? n.apply(this, t) : n,
            u = h(e.invert(i).concat(o / e.k), a.invert(i).concat(o / a.k));return function (t) {
          var e, n;t = 1 === t ? a : (e = u(t), new gi(n = o / e[2], i[0] - e[0] * n, i[1] - e[1] * n)), r.zoom(null, t);
        };
      });
    }function g(t, e) {
      for (var n, r = 0, i = y.length; r < i; ++r) {
        if ((n = y[r]).that === t) return n;
      }return new T(t, e);
    }function T(t, e) {
      this.that = t, this.args = e, this.index = -1, this.active = 0, this.extent = f.apply(t, e);
    }function r() {
      if (u.apply(this, arguments)) {
        var t = g(this, arguments),
            e = this.__zoom,
            n = Math.max(i[0], Math.min(i[1], e.k * Math.pow(2, c.apply(this, arguments)))),
            r = K(this);if (t.wheel) t.mouse[0][0] === r[0] && t.mouse[0][1] === r[1] || (t.mouse[1] = e.invert(t.mouse[0] = r)), clearTimeout(t.wheel);else {
          if (e.k === n) return;t.mouse = [r, e.invert(r)], Be(this), t.start();
        }vi(), t.wheel = setTimeout(function () {
          t.wheel = null, t.end();
        }, v), t.zoom("mouse", d(w(_(e, n), t.mouse[0], t.mouse[1]), t.extent, p));
      }
    }function N() {
      var n, t, e, r, i;!o && u.apply(this, arguments) && (n = g(this, arguments), t = et(D.event.view).on("mousemove.zoom", function () {
        {
          var t, e;vi(), n.moved || (t = D.event.clientX - r, e = D.event.clientY - i, n.moved = m < t * t + e * e);
        }n.zoom("mouse", d(w(n.that.__zoom, n.mouse[0] = K(n.that), n.mouse[1]), n.extent, p));
      }, !0).on("mouseup.zoom", function () {
        t.on("mousemove.zoom mouseup.zoom", null), ut(D.event.view, n.moved), vi(), n.end();
      }, !0), e = K(this), r = D.event.clientX, i = D.event.clientY, ot(D.event.view), bi(), n.mouse = [e, this.__zoom.invert(e)], Be(this), n.start());
    }function k() {
      var t, e, n, r;u.apply(this, arguments) && (r = this.__zoom, t = K(this), e = r.invert(t), n = r.k * (D.event.shiftKey ? .5 : 2), r = d(w(_(r, n), t, e), f.apply(this, arguments), p), vi(), 0 < s ? et(this).transition().duration(s).call(M, r, t) : et(this).call(a.transform, r));
    }function C() {
      if (u.apply(this, arguments)) {
        var t,
            e,
            n,
            r,
            i = g(this, arguments),
            o = D.event.changedTouches,
            a = o.length;for (bi(), e = 0; e < a; ++e) {
          n = o[e], r = [r = tt(this, o, n.identifier), this.__zoom.invert(r), n.identifier], i.touch0 ? i.touch1 || (i.touch1 = r) : (i.touch0 = r, t = !0);
        }if (l && (l = clearTimeout(l), !i.touch1)) return i.end(), void ((r = et(this).on("dblclick.zoom")) && r.apply(this, arguments));t && (l = setTimeout(function () {
          l = null;
        }, b), Be(this), i.start());
      }
    }function A() {
      var t,
          e = g(this, arguments),
          s = D.event.changedTouches,
          h = s.length;for (vi(), l = l && clearTimeout(l), t = 0; t < h; ++t) {
        c = s[t], f = tt(this, s, c.identifier), e.touch0 && e.touch0[2] === c.identifier ? e.touch0[0] = f : e.touch1 && e.touch1[2] === c.identifier && (e.touch1[0] = f);
      }if (c = e.that.__zoom, e.touch1) var n = e.touch0[0],
          r = e.touch0[1],
          i = e.touch1[0],
          o = e.touch1[1],
          a = (a = i[0] - n[0]) * a + (a = i[1] - n[1]) * a,
          u = (u = o[0] - r[0]) * u + (u = o[1] - r[1]) * u,
          c = _(c, Math.sqrt(a / u)),
          f = [(n[0] + i[0]) / 2, (n[1] + i[1]) / 2],
          a = [(r[0] + o[0]) / 2, (r[1] + o[1]) / 2];else {
        if (!e.touch0) return;f = e.touch0[0], a = e.touch0[1];
      }e.zoom("touch", d(w(c, f, a), e.extent, p));
    }function U() {
      var t,
          e,
          n = g(this, arguments),
          r = D.event.changedTouches,
          i = r.length;for (bi(), o && clearTimeout(o), o = setTimeout(function () {
        o = null;
      }, b), t = 0; t < i; ++t) {
        e = r[t], n.touch0 && n.touch0[2] === e.identifier ? delete n.touch0 : n.touch1 && n.touch1[2] === e.identifier && delete n.touch1;
      }n.touch1 && !n.touch0 && (n.touch0 = n.touch1, delete n.touch1), n.touch0 ? n.touch0[1] = this.__zoom.invert(n.touch0[0]) : n.end();
    }return a.transform = function (t, e) {
      var n = t.selection ? t.selection() : t;n.property("__zoom", wi), t !== n ? M(t, e) : n.interrupt().each(function () {
        g(this, arguments).start().zoom(null, "function" == typeof e ? e.apply(this, arguments) : e).end();
      });
    }, a.scaleBy = function (t, e) {
      a.scaleTo(t, function () {
        return this.__zoom.k * ("function" == typeof e ? e.apply(this, arguments) : e);
      });
    }, a.scaleTo = function (t, o) {
      a.transform(t, function () {
        var t = f.apply(this, arguments),
            e = this.__zoom,
            n = x(t),
            r = e.invert(n),
            i = "function" == typeof o ? o.apply(this, arguments) : o;return d(w(_(e, i), n, r), t, p);
      });
    }, a.translateBy = function (t, e, n) {
      a.transform(t, function () {
        return d(this.__zoom.translate("function" == typeof e ? e.apply(this, arguments) : e, "function" == typeof n ? n.apply(this, arguments) : n), f.apply(this, arguments), p);
      });
    }, a.translateTo = function (t, r, i) {
      a.transform(t, function () {
        var t = f.apply(this, arguments),
            e = this.__zoom,
            n = x(t);return d(yi.translate(n[0], n[1]).scale(e.k).translate("function" == typeof r ? -r.apply(this, arguments) : -r, "function" == typeof i ? -i.apply(this, arguments) : -i), t, p);
      });
    }, T.prototype = { start: function start() {
        return 1 == ++this.active && (this.index = y.push(this) - 1, this.emit("start")), this;
      }, zoom: function zoom(t, e) {
        return this.mouse && "mouse" !== t && (this.mouse[1] = e.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = e.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = e.invert(this.touch1[0])), this.that.__zoom = e, this.emit("zoom"), this;
      }, end: function end() {
        return 0 == --this.active && (y.splice(this.index, 1), this.index = -1, this.emit("end")), this;
      }, emit: function emit(t) {
        Q(new pi(a, t, this.that.__zoom), e.apply, e, [t, this.that, this.args]);
      } }, a.wheelDelta = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : constant(+t), a) : c;
    }, a.filter = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : constant(!!t), a) : u;
    }, a.touchable = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : constant(!!t), a) : n;
    }, a.extent = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : constant([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), a) : f;
    }, a.scaleExtent = function (t) {
      return arguments.length ? (i[0] = +t[0], i[1] = +t[1], a) : [i[0], i[1]];
    }, a.translateExtent = function (t) {
      return arguments.length ? (p[0][0] = +t[0][0], p[1][0] = +t[1][0], p[0][1] = +t[0][1], p[1][1] = +t[1][1], a) : [[p[0][0], p[0][1]], [p[1][0], p[1][1]]];
    }, a.constrain = function (t) {
      return arguments.length ? (d = t, a) : d;
    }, a.duration = function (t) {
      return arguments.length ? (s = +t, a) : s;
    }, a.interpolate = function (t) {
      return arguments.length ? (h = t, a) : h;
    }, a.on = function () {
      var t = e.on.apply(e, arguments);return t === e ? a : t;
    }, a.clickDistance = function (t) {
      return arguments.length ? (m = (t = +t) * t, a) : Math.sqrt(m);
    }, a;
  }, D.zoomIdentity = yi, Object.defineProperty(D, "__esModule", { value: !0 });
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Return the dimensions (width & height) that some HTML
 * with a given style would take in the page.
 */
var getDimensions = exports.getDimensions = function getDimensions(html, style, classname) {
  var el = document.createElement('span');
  var dimensions = {};

  // Set display: inline-block so that the size of el
  // will depend on the size of its children.
  el.style.display = 'inline-block';

  // Hide the element (it will be added to the page for a short time).
  el.style.visibility = 'hidden';

  el.className = classname;
  el.innerHTML = html;

  // Apply CSS rules.
  Object.keys(style).forEach(function (rule) {
    el.style[rule] = style[rule];
  });
  document.body.append(el);

  dimensions.width = el.offsetWidth;
  dimensions.height = el.offsetHeight;

  el.remove();
  return dimensions;
};

/*
 * Return the dimensions of an SVG viewport calculated from
 * some given nodes.
 */
var getViewBox = exports.getViewBox = function getViewBox(nodes) {
  var Xs = [];
  var Ys = [];

  nodes.forEach(function (node) {
    var x = node.x || node.fx;
    var y = node.y || node.fy;

    if (x) {
      Xs.push(x);
    }

    if (y) {
      Ys.push(y);
    }
  });

  if (Xs.length === 0 || Ys.length === 0) {
    return '0 0 0 0';
  }

  // Find the smallest coordinates...
  var min = [Math.min.apply(Math, Xs) - 150, Math.min.apply(Math, Ys) - 150];

  // ...and the biggest ones.
  var max = [Math.max.apply(Math, Xs) - min[0] + 150, Math.max.apply(Math, Ys) - min[1] + 150];

  return min.join(' ') + ' ' + max.join(' ');
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Regex that matches all emojis in a string.
var matchEmojis = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;

// Emoji to category table.
var conversionTable = {
  '🗺': 'mindmap',
  '🌐': 'wiki',
  '🗂': 'stack exchange',
  '📝': 'course',
  '📖': 'free book',
  '📕': 'non-free book',
  '📄': 'paper',
  '👀': 'video',
  '🖋': 'article',
  '🗃': 'blog',
  '🐙': 'github',
  '👾': 'interactive',
  '🖌': 'image',
  '🎙': 'podcast',
  '📮': 'newsletter',
  '💬': 'chat',
  '🎥': 'youtube',
  '🤖': 'reddit',
  '🔎': 'quora',
  '🔗': undefined
};

// Category to emoji table, based on the table above.
var revConversionTable = {};

Object.keys(conversionTable).forEach(function (key) {
  revConversionTable[conversionTable[key]] = key;
});

/*
 * Return an emoji as a GitHub image.
 */
var emojiTemplate = function emojiTemplate(unicode, category) {
  return '<img class="mindmap-emoji" title="' + category + '" src="https://assets-cdn.github.com/images/icons/emoji/unicode/' + unicode + '.png">';
};

var customEmojiTemplate = function customEmojiTemplate(emoji, category) {
  return '<img class="mindmap-emoji" title="' + category + '" src="https://assets-cdn.github.com/images/icons/emoji/' + emoji + '.png">';
};

/*
 * Return the category represented by the given emoji.
 */
var emojiToCategory = function emojiToCategory(emoji) {
  return conversionTable[emoji] || '';
};

/*
 * Convert all emojis to an IMG tag.
 * The bitwise magic is explained at http://crocodillon.com/blog/parsing-emoji-unicode-in-javascript
 */
var emojiToIMG = function emojiToIMG(html) {
  return (
    /* eslint-disable no-bitwise */
    html.replace(matchEmojis, function (match) {
      switch (match) {
        case '🤖':
          return '<img class="mindmap-emoji reddit-emoji" title="reddit" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpOQVZdTCyVamjJPl92KjaDHigNWVM8mOLHPRU4DHoVNJWxCg">';

        case '🗂':
          return '<img class="mindmap-emoji" title="stackexchange" src="https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/se/se-icon.png?v=93426798a1d4">';

        case '🐙':
          return customEmojiTemplate('octocat', 'github');

        case '🔎':
          return '<img class="mindmap-emoji" title="quora" src="https://www.shareicon.net/data/2016/11/03/849470_social_512x512.png">';

        // Regular unicode Emojis.
        default:
          {
            // Keep the first 10 bits.
            var lead = match.charCodeAt(0) & 0x3FF;
            var trail = match.charCodeAt(1) & 0x3FF;

            // 0x[lead][trail]
            var unicode = ((lead << 10) + trail).toString(16);

            return emojiTemplate('1' + unicode, emojiToCategory(match));
          }
      }
    })
    /* eslint-enable no-bitwise */

  );
};

/*
 * Inverse of emojiToCategory, but instead of returning an emoji
 * returns an IMG tag corresponding to that emoji.
 */
var categoryToIMG = function categoryToIMG(category) {
  return emojiToIMG(revConversionTable[category] || '');
};

module.exports = {
  matchEmojis: matchEmojis,
  emojiToIMG: emojiToIMG,
  emojiTemplate: emojiTemplate,
  emojiToCategory: emojiToCategory,
  categoryToIMG: categoryToIMG
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MindMap = __webpack_require__(8);

var _MindMap2 = _interopRequireDefault(_MindMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MindMap2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(10);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d = __webpack_require__(4);

var _d2 = __webpack_require__(17);

var _dimensions = __webpack_require__(5);

var _subnodesToHTML = __webpack_require__(18);

var _subnodesToHTML2 = _interopRequireDefault(_subnodesToHTML);

var _nodeToHTML = __webpack_require__(19);

var _nodeToHTML2 = _interopRequireDefault(_nodeToHTML);

__webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MindMap = function (_Component) {
  _inherits(MindMap, _Component);

  function MindMap(props) {
    _classCallCheck(this, MindMap);

    // Create force simulation to position nodes that have no coordinates,
    // and add it to the state.
    var _this = _possibleConstructorReturn(this, (MindMap.__proto__ || Object.getPrototypeOf(MindMap)).call(this, props));

    var simulation = (0, _d.forceSimulation)().force('link', (0, _d.forceLink)().id(function (node) {
      return node.text;
    })).force('charge', (0, _d.forceManyBody)()).force('collide', (0, _d.forceCollide)());

    _this.state = { simulation: simulation };
    return _this;
  }

  /* eslint-disable no-param-reassign */
  /*
   * Generates HTML and dimensions for nodes and subnodes.
   */


  _createClass(MindMap, [{
    key: 'prepareNodes',
    value: function prepareNodes() {
      var render = function render(node) {
        node.html = (0, _nodeToHTML2.default)(node);
        node.nodesHTML = (0, _subnodesToHTML2.default)(node.nodes);

        var dimensions = (0, _dimensions.getDimensions)(node.html, {}, 'mindmap-node');
        node.width = dimensions.width;
        node.height = dimensions.height;

        var nodesDimensions = (0, _dimensions.getDimensions)(node.nodesHTML, {}, 'mindmap-subnode-text');
        node.nodesWidth = nodesDimensions.width;
        node.nodesHeight = nodesDimensions.height;
      };

      this.props.nodes.forEach(function (node) {
        return render(node);
      });
    }

    /*
     * Add new class to nodes, attach drag behavior, and start simulation.
     */

  }, {
    key: 'prepareEditor',
    value: function prepareEditor(svg, conns, nodes, subnodes) {
      var _this2 = this;

      nodes.attr('class', 'mindmap-node mindmap-node--editable').on('dblclick', function (node) {
        node.fx = null;
        node.fy = null;
      });

      nodes.call((0, _d2.d3Drag)(this.state.simulation, svg, nodes));

      // Tick the simulation 100 times.
      for (var i = 0; i < 100; i += 1) {
        this.state.simulation.tick();
      }
      (0, _d2.onTick)(conns, nodes, subnodes);

      setTimeout(function () {
        _this2.state.simulation.alphaTarget(0.5).on('tick', function () {
          return (0, _d2.onTick)(conns, nodes, subnodes);
        });
      }, 200);
    }
    /* eslint-enable no-param-reassign */

    /*
     * Render mind map using D3.
     */

  }, {
    key: 'renderMap',
    value: function renderMap() {
      var svg = (0, _d.select)(this.mountPoint);

      // Clear the SVG in case there's stuff already there.
      svg.selectAll('*').remove();

      // Add subnode group
      svg.append('g').attr('id', 'mindmap-subnodes');
      this.prepareNodes();

      // Bind data to SVG elements and set all the properties to render them.
      var connections = (0, _d2.d3Connections)(svg, this.props.connections);

      var _d3Nodes = (0, _d2.d3Nodes)(svg, this.props.nodes),
          nodes = _d3Nodes.nodes,
          subnodes = _d3Nodes.subnodes;

      nodes.append('title').text(function (node) {
        return node.note;
      });

      // Bind nodes and connections to the simulation.
      this.state.simulation.nodes(this.props.nodes).force('link').links(this.props.connections);

      if (this.props.editable) {
        this.prepareEditor(svg, connections, nodes, subnodes);
      }

      // Tick the simulation 100 times.
      for (var i = 0; i < 100; i += 1) {
        this.state.simulation.tick();
      }
      (0, _d2.onTick)(connections, nodes, subnodes);

      // Add pan and zoom behavior and remove double click to zoom.
      svg.attr('viewBox', (0, _dimensions.getViewBox)(nodes.data())).call((0, _d2.d3PanZoom)(svg)).on('dblclick.zoom', null);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('custom console log');
      this.renderMap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      (0, _d.zoom)().transform((0, _d.select)(this.refs.mountPoint), _d.zoomIdentity);
      this.renderMap();
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('svg', { className: 'mindmap-svg', ref: function ref(input) {
            _this3.mountPoint = input;
          } })
      );
    }
  }]);

  return MindMap;
}(_react.Component);

exports.default = MindMap;


MindMap.defaultProps = {
  nodes: [],
  connections: [],
  editable: false
};

MindMap.propTypes = {
  nodes: _propTypes2.default.array,
  connections: _propTypes2.default.array,
  editable: _propTypes2.default.bool
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(2);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(13)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(16)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a) {
    var u = a.$$typeof;switch (u) {case c:
        switch (a = a.type, a) {case l:case m:case e:case g:case f:case p:
            return a;default:
            switch (a = a && a.$$typeof, a) {case k:case n:case t:case r:case h:
                return a;default:
                return u;}}case d:
        return u;}
  }
}function A(a) {
  return z(a) === m;
}exports.AsyncMode = l;exports.ConcurrentMode = m;exports.ContextConsumer = k;exports.ContextProvider = h;exports.Element = c;exports.ForwardRef = n;exports.Fragment = e;exports.Lazy = t;exports.Memo = r;exports.Portal = d;
exports.Profiler = g;exports.StrictMode = f;exports.Suspense = p;exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};exports.isConcurrentMode = A;exports.isContextConsumer = function (a) {
  return z(a) === k;
};exports.isContextProvider = function (a) {
  return z(a) === h;
};exports.isElement = function (a) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === c;
};exports.isForwardRef = function (a) {
  return z(a) === n;
};exports.isFragment = function (a) {
  return z(a) === e;
};exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};exports.isPortal = function (a) {
  return z(a) === d;
};exports.isProfiler = function (a) {
  return z(a) === g;
};exports.isStrictMode = function (a) {
  return z(a) === f;
};exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};exports.typeOf = z;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== "production") {
  (function () {
    'use strict';

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ReactIs = __webpack_require__(2);
var assign = __webpack_require__(14);

var ReactPropTypesSecret = __webpack_require__(1);
var has = __webpack_require__(3);
var checkPropTypes = __webpack_require__(15);

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && (typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object' ? data : {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), { expectedType: expectedType });
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(1);
  var loggedTypeFailures = {};
  var has = __webpack_require__(3);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {/**/}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(1);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.d3PanZoom = exports.d3Drag = exports.onTick = exports.d3Nodes = exports.d3Connections = undefined;

var _d = __webpack_require__(4);

var _dimensions = __webpack_require__(5);

/*
 * Bind data to a <TAG> tag, inside a G element, inside the given root element.
 * Root is a D3 selection, data is an object or array, tag is a string.
 */
var bindData = function bindData(root, data, tag) {
  return root.append('g').selectAll(tag).data(data).enter().append(tag);
};

/*
 * Bind connections to PATH tags on the given SVG.
 */
var d3Connections = exports.d3Connections = function d3Connections(svg, connections) {
  return bindData(svg, connections, 'path').attr('class', 'mindmap-connection');
};

/* eslint-disable no-param-reassign */
/*
 * Bind nodes to FOREIGNOBJECT tags on the given SVG,
 * and set dimensions and html.
 */
var d3Nodes = exports.d3Nodes = function d3Nodes(svg, nodes) {
  var selection = svg.append('g').selectAll('foreignObject').data(nodes).enter();

  var d3nodes = selection.append('foreignObject').attr('class', 'mindmap-node').attr('width', function (node) {
    return node.width + 4;
  }).attr('height', function (node) {
    return node.height;
  }).html(function (node) {
    return node.html;
  });

  var d3subnodes = selection.append('foreignObject').attr('class', 'mindmap-subnodes').attr('width', function (node) {
    return node.nodesWidth + 4;
  }).attr('height', function (node) {
    return node.nodesHeight;
  }).html(function (subnode) {
    return subnode.nodesHTML;
  });

  return {
    nodes: d3nodes,
    subnodes: d3subnodes
  };
};

/*
 * Callback for forceSimulation tick event.
 */
var onTick = exports.onTick = function onTick(conns, nodes, subnodes) {
  var d = function d(conn) {
    return ['M', conn.source.x, conn.source.y, 'Q', conn.source.x + (conn.curve && conn.curve.x ? conn.curve.x : 0), conn.source.y + (conn.curve && conn.curve.y ? conn.curve.y : 0), ',', conn.target.x, conn.target.y].join(' ');
  };

  // Set the connections path.
  conns.attr('d', d);

  // Set nodes position.
  nodes.attr('x', function (node) {
    return node.x - node.width / 2;
  }).attr('y', function (node) {
    return node.y - node.height / 2;
  });

  // Set subnodes groups color and position.
  subnodes.attr('x', function (node) {
    return node.x + node.width / 2;
  }).attr('y', function (node) {
    return node.y - node.nodesHeight / 2;
  });
};

/*
 * Return drag behavior to use on d3.selection.call().
 */
var d3Drag = exports.d3Drag = function d3Drag(simulation, svg, nodes) {
  var dragStart = function dragStart(node) {
    if (!_d.event.active) {
      simulation.alphaTarget(0.2).restart();
    }

    node.fx = node.x;
    node.fy = node.y;
  };

  var dragged = function dragged(node) {
    node.fx = _d.event.x;
    node.fy = _d.event.y;
  };

  var dragEnd = function dragEnd() {
    if (!_d.event.active) {
      simulation.alphaTarget(0);
    }

    svg.attr('viewBox', (0, _dimensions.getViewBox)(nodes.data()));
  };

  return (0, _d.drag)().on('start', dragStart).on('drag', dragged).on('end', dragEnd);
};
/* eslint-enable no-param-reassign */

/*
 * Return pan and zoom behavior to use on d3.selection.call().
 */
var d3PanZoom = exports.d3PanZoom = function d3PanZoom(el) {
  return (0, _d.zoom)().scaleExtent([0.3, 5]).on('zoom', function () {
    return el.selectAll('svg > g').attr('transform', _d.event.transform);
  });
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emojis = __webpack_require__(6);

/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes;
 * all of them optional.
 */
var subnodesToHTML = function subnodesToHTML() {
  var subnodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fcolor = arguments[1];

  var color = fcolor || '';

  if (!fcolor && subnodes.length > 0 && subnodes[0].color) {
    color = 'style="border-left-color: ' + subnodes[0].color + '"';
  }

  return subnodes.map(function (subnode) {
    var href = 'href="' + subnode.url + '"';
    var emoji = (0, _emojis.categoryToIMG)(subnode.category);

    if (!subnode.url) {
      href = '';
      emoji = '';
    }

    return '<div class="mindmap-subnode-group" ' + color + '>\n      <a ' + href + '>' + (subnode.text || '') + ' ' + emoji + '</a>\n      <div>' + subnodesToHTML(subnode.nodes, color) + '</div>\n    </div>';
  }).join('');
};

exports.default = subnodesToHTML;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emojis = __webpack_require__(6);

/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes;
 * all of them optional.
 */
exports.default = function (node) {
  var href = 'href="' + node.url + '"';
  var emoji = (0, _emojis.categoryToIMG)(node.category);

  // If url is not specified remove the emoji and the href attribute,
  // so that the node isn't clickable, and the user can see that without
  // having to hover the node.
  if (!node.url) {
    href = '';
    emoji = '';
  }

  return '<a id="node-' + node.index + '" ' + href + '>' + (node.text || '') + ' ' + emoji + '</a>';
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(23)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(22)(false);
// imports


// module
exports.push([module.i, ".mindmap-svg {\n  height: 100vh;\n  width: 100%; }\n  .mindmap-svg:focus {\n    outline: none; }\n\n.mindmap-node > a {\n  background: #f5f5f5;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  color: #212121;\n  display: inline-block;\n  font-family: 'Raleway';\n  font-size: 22px;\n  margin: 0 auto;\n  padding: 15px;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color .2s, color .2s ease-out;\n  transition: background-color .2s, color .2s ease-out; }\n  .mindmap-node > a[href]:hover {\n    background-color: #f57c00;\n    color: #fff;\n    cursor: pointer; }\n\n.mindmap-node--editable {\n  cursor: all-scroll; }\n  .mindmap-node--editable > a {\n    pointer-events: none; }\n\n.mindmap-subnode-group {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-left: 4px solid #9e9e9e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 15px;\n  padding: 5px; }\n  .mindmap-subnode-group a {\n    color: #212121;\n    font-family: 'Raleway';\n    font-size: 16px;\n    padding: 2px 5px; }\n\n.mindmap-connection {\n  fill: transparent;\n  stroke: #9e9e9e;\n  stroke-dasharray: 10px 4px;\n  stroke-width: 3px; }\n\n.mindmap-emoji {\n  height: 24px;\n  vertical-align: bottom;\n  width: 24px; }\n\n.reddit-emoji {\n  border-radius: 50%; }\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(24);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);
});