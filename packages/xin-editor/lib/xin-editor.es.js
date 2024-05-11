import * as R from "react";
import oe, { useContext as Vt, useCallback as Re, useState as lr, useRef as $e, useReducer as Wd, useMemo as bn, useEffect as ht, createContext as Xt, useLayoutEffect as lc, Component as zd, memo as Hd, forwardRef as cc, useImperativeHandle as qd } from "react";
import * as Ud from "react-dom";
import fc from "react-dom";
var ba = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function li(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var uo = { exports: {} }, $n = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ku;
function Kd() {
  if (Ku)
    return $n;
  Ku = 1;
  var t = oe, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, l) {
    var c, d = {}, v = null, D = null;
    l !== void 0 && (v = "" + l), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (D = s.ref);
    for (c in s)
      n.call(s, c) && !i.hasOwnProperty(c) && (d[c] = s[c]);
    if (u && u.defaultProps)
      for (c in s = u.defaultProps, s)
        d[c] === void 0 && (d[c] = s[c]);
    return { $$typeof: e, type: u, key: v, ref: D, props: d, _owner: a.current };
  }
  return $n.Fragment = r, $n.jsx = o, $n.jsxs = o, $n;
}
var In = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gu;
function Gd() {
  return Gu || (Gu = 1, process.env.NODE_ENV !== "production" && function() {
    var t = oe, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), m = Symbol.iterator, f = "@@iterator";
    function g(y) {
      if (y === null || typeof y != "object")
        return null;
      var G = m && y[m] || y[f];
      return typeof G == "function" ? G : null;
    }
    var p = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(y) {
      {
        for (var G = arguments.length, ee = new Array(G > 1 ? G - 1 : 0), le = 1; le < G; le++)
          ee[le - 1] = arguments[le];
        C("error", y, ee);
      }
    }
    function C(y, G, ee) {
      {
        var le = p.ReactDebugCurrentFrame, Se = le.getStackAddendum();
        Se !== "" && (G += "%s", ee = ee.concat([Se]));
        var je = ee.map(function(ye) {
          return String(ye);
        });
        je.unshift("Warning: " + G), Function.prototype.apply.call(console[y], console, je);
      }
    }
    var F = !1, B = !1, A = !1, w = !1, M = !1, x;
    x = Symbol.for("react.module.reference");
    function P(y) {
      return !!(typeof y == "string" || typeof y == "function" || y === n || y === i || M || y === a || y === l || y === c || w || y === D || F || B || A || typeof y == "object" && y !== null && (y.$$typeof === v || y.$$typeof === d || y.$$typeof === o || y.$$typeof === u || y.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      y.$$typeof === x || y.getModuleId !== void 0));
    }
    function V(y, G, ee) {
      var le = y.displayName;
      if (le)
        return le;
      var Se = G.displayName || G.name || "";
      return Se !== "" ? ee + "(" + Se + ")" : ee;
    }
    function T(y) {
      return y.displayName || "Context";
    }
    function k(y) {
      if (y == null)
        return null;
      if (typeof y.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof y == "function")
        return y.displayName || y.name || null;
      if (typeof y == "string")
        return y;
      switch (y) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case u:
            var G = y;
            return T(G) + ".Consumer";
          case o:
            var ee = y;
            return T(ee._context) + ".Provider";
          case s:
            return V(y, y.render, "ForwardRef");
          case d:
            var le = y.displayName || null;
            return le !== null ? le : k(y.type) || "Memo";
          case v: {
            var Se = y, je = Se._payload, ye = Se._init;
            try {
              return k(ye(je));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, j = 0, $, S, L, q, U, Y, Q;
    function ie() {
    }
    ie.__reactDisabledLog = !0;
    function O() {
      {
        if (j === 0) {
          $ = console.log, S = console.info, L = console.warn, q = console.error, U = console.group, Y = console.groupCollapsed, Q = console.groupEnd;
          var y = {
            configurable: !0,
            enumerable: !0,
            value: ie,
            writable: !0
          };
          Object.defineProperties(console, {
            info: y,
            log: y,
            warn: y,
            error: y,
            group: y,
            groupCollapsed: y,
            groupEnd: y
          });
        }
        j++;
      }
    }
    function _() {
      {
        if (j--, j === 0) {
          var y = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, y, {
              value: $
            }),
            info: N({}, y, {
              value: S
            }),
            warn: N({}, y, {
              value: L
            }),
            error: N({}, y, {
              value: q
            }),
            group: N({}, y, {
              value: U
            }),
            groupCollapsed: N({}, y, {
              value: Y
            }),
            groupEnd: N({}, y, {
              value: Q
            })
          });
        }
        j < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = p.ReactCurrentDispatcher, X;
    function ue(y, G, ee) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (Se) {
            var le = Se.stack.trim().match(/\n( *(at )?)/);
            X = le && le[1] || "";
          }
        return `
` + X + y;
      }
    }
    var ne = !1, se;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      se = new fe();
    }
    function he(y, G) {
      if (!y || ne)
        return "";
      {
        var ee = se.get(y);
        if (ee !== void 0)
          return ee;
      }
      var le;
      ne = !0;
      var Se = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var je;
      je = z.current, z.current = null, O();
      try {
        if (G) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (tr) {
              le = tr;
            }
            Reflect.construct(y, [], ye);
          } else {
            try {
              ye.call();
            } catch (tr) {
              le = tr;
            }
            y.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (tr) {
            le = tr;
          }
          y();
        }
      } catch (tr) {
        if (tr && le && typeof tr.stack == "string") {
          for (var De = tr.stack.split(`
`), ot = le.stack.split(`
`), Ue = De.length - 1, Je = ot.length - 1; Ue >= 1 && Je >= 0 && De[Ue] !== ot[Je]; )
            Je--;
          for (; Ue >= 1 && Je >= 0; Ue--, Je--)
            if (De[Ue] !== ot[Je]) {
              if (Ue !== 1 || Je !== 1)
                do
                  if (Ue--, Je--, Je < 0 || De[Ue] !== ot[Je]) {
                    var Bt = `
` + De[Ue].replace(" at new ", " at ");
                    return y.displayName && Bt.includes("<anonymous>") && (Bt = Bt.replace("<anonymous>", y.displayName)), typeof y == "function" && se.set(y, Bt), Bt;
                  }
                while (Ue >= 1 && Je >= 0);
              break;
            }
        }
      } finally {
        ne = !1, z.current = je, _(), Error.prepareStackTrace = Se;
      }
      var on = y ? y.displayName || y.name : "", Uu = on ? ue(on) : "";
      return typeof y == "function" && se.set(y, Uu), Uu;
    }
    function Ee(y, G, ee) {
      return he(y, !1);
    }
    function J(y) {
      var G = y.prototype;
      return !!(G && G.isReactComponent);
    }
    function me(y, G, ee) {
      if (y == null)
        return "";
      if (typeof y == "function")
        return he(y, J(y));
      if (typeof y == "string")
        return ue(y);
      switch (y) {
        case l:
          return ue("Suspense");
        case c:
          return ue("SuspenseList");
      }
      if (typeof y == "object")
        switch (y.$$typeof) {
          case s:
            return Ee(y.render);
          case d:
            return me(y.type, G, ee);
          case v: {
            var le = y, Se = le._payload, je = le._init;
            try {
              return me(je(Se), G, ee);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, we = {}, Ye = p.ReactDebugCurrentFrame;
    function Be(y) {
      if (y) {
        var G = y._owner, ee = me(y.type, y._source, G ? G.type : null);
        Ye.setExtraStackFrame(ee);
      } else
        Ye.setExtraStackFrame(null);
    }
    function Ce(y, G, ee, le, Se) {
      {
        var je = Function.call.bind(Ae);
        for (var ye in y)
          if (je(y, ye)) {
            var De = void 0;
            try {
              if (typeof y[ye] != "function") {
                var ot = Error((le || "React class") + ": " + ee + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof y[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              De = y[ye](G, ye, le, ee, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ue) {
              De = Ue;
            }
            De && !(De instanceof Error) && (Be(Se), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", le || "React class", ee, ye, typeof De), Be(null)), De instanceof Error && !(De.message in we) && (we[De.message] = !0, Be(Se), b("Failed %s type: %s", ee, De.message), Be(null));
          }
      }
    }
    var Oe = Array.isArray;
    function ve(y) {
      return Oe(y);
    }
    function Ne(y) {
      {
        var G = typeof Symbol == "function" && Symbol.toStringTag, ee = G && y[Symbol.toStringTag] || y.constructor.name || "Object";
        return ee;
      }
    }
    function ze(y) {
      try {
        return Ve(y), !1;
      } catch {
        return !0;
      }
    }
    function Ve(y) {
      return "" + y;
    }
    function at(y) {
      if (ze(y))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(y)), Ve(y);
    }
    var wt = p.ReactCurrentOwner, it = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ft, Zt, gt;
    gt = {};
    function Mn(y) {
      if (Ae.call(y, "ref")) {
        var G = Object.getOwnPropertyDescriptor(y, "ref").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return y.ref !== void 0;
    }
    function Nn(y) {
      if (Ae.call(y, "key")) {
        var G = Object.getOwnPropertyDescriptor(y, "key").get;
        if (G && G.isReactWarning)
          return !1;
      }
      return y.key !== void 0;
    }
    function jr(y, G) {
      if (typeof y.ref == "string" && wt.current && G && wt.current.stateNode !== G) {
        var ee = k(wt.current.type);
        gt[ee] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(wt.current.type), y.ref), gt[ee] = !0);
      }
    }
    function Qt(y, G) {
      {
        var ee = function() {
          Ft || (Ft = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ee.isReactWarning = !0, Object.defineProperty(y, "key", {
          get: ee,
          configurable: !0
        });
      }
    }
    function er(y, G) {
      {
        var ee = function() {
          Zt || (Zt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", G));
        };
        ee.isReactWarning = !0, Object.defineProperty(y, "ref", {
          get: ee,
          configurable: !0
        });
      }
    }
    var hr = function(y, G, ee, le, Se, je, ye) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: y,
        key: G,
        ref: ee,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: je
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Se
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Mr(y, G, ee, le, Se) {
      {
        var je, ye = {}, De = null, ot = null;
        ee !== void 0 && (at(ee), De = "" + ee), Nn(G) && (at(G.key), De = "" + G.key), Mn(G) && (ot = G.ref, jr(G, Se));
        for (je in G)
          Ae.call(G, je) && !it.hasOwnProperty(je) && (ye[je] = G[je]);
        if (y && y.defaultProps) {
          var Ue = y.defaultProps;
          for (je in Ue)
            ye[je] === void 0 && (ye[je] = Ue[je]);
        }
        if (De || ot) {
          var Je = typeof y == "function" ? y.displayName || y.name || "Unknown" : y;
          De && Qt(ye, Je), ot && er(ye, Je);
        }
        return hr(y, De, ot, Se, le, wt.current, ye);
      }
    }
    var zt = p.ReactCurrentOwner, Rt = p.ReactDebugCurrentFrame;
    function gr(y) {
      if (y) {
        var G = y._owner, ee = me(y.type, y._source, G ? G.type : null);
        Rt.setExtraStackFrame(ee);
      } else
        Rt.setExtraStackFrame(null);
    }
    var He;
    He = !1;
    function nn(y) {
      return typeof y == "object" && y !== null && y.$$typeof === e;
    }
    function pa() {
      {
        if (zt.current) {
          var y = k(zt.current.type);
          if (y)
            return `

Check the render method of \`` + y + "`.";
        }
        return "";
      }
    }
    function qe(y) {
      {
        if (y !== void 0) {
          var G = y.fileName.replace(/^.*[\\\/]/, ""), ee = y.lineNumber;
          return `

Check your code at ` + G + ":" + ee + ".";
        }
        return "";
      }
    }
    var Xe = {};
    function At(y) {
      {
        var G = pa();
        if (!G) {
          var ee = typeof y == "string" ? y : y.displayName || y.name;
          ee && (G = `

Check the top-level render call using <` + ee + ">.");
        }
        return G;
      }
    }
    function pt(y, G) {
      {
        if (!y._store || y._store.validated || y.key != null)
          return;
        y._store.validated = !0;
        var ee = At(G);
        if (Xe[ee])
          return;
        Xe[ee] = !0;
        var le = "";
        y && y._owner && y._owner !== zt.current && (le = " It was passed a child from " + k(y._owner.type) + "."), gr(y), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ee, le), gr(null);
      }
    }
    function Nr(y, G) {
      {
        if (typeof y != "object")
          return;
        if (ve(y))
          for (var ee = 0; ee < y.length; ee++) {
            var le = y[ee];
            nn(le) && pt(le, G);
          }
        else if (nn(y))
          y._store && (y._store.validated = !0);
        else if (y) {
          var Se = g(y);
          if (typeof Se == "function" && Se !== y.entries)
            for (var je = Se.call(y), ye; !(ye = je.next()).done; )
              nn(ye.value) && pt(ye.value, G);
        }
      }
    }
    function Bi(y) {
      {
        var G = y.type;
        if (G == null || typeof G == "string")
          return;
        var ee;
        if (typeof G == "function")
          ee = G.propTypes;
        else if (typeof G == "object" && (G.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        G.$$typeof === d))
          ee = G.propTypes;
        else
          return;
        if (ee) {
          var le = k(G);
          Ce(ee, y.props, "prop", le, y);
        } else if (G.PropTypes !== void 0 && !He) {
          He = !0;
          var Se = k(G);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Se || "Unknown");
        }
        typeof G.getDefaultProps == "function" && !G.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ma(y) {
      {
        for (var G = Object.keys(y.props), ee = 0; ee < G.length; ee++) {
          var le = G[ee];
          if (le !== "children" && le !== "key") {
            gr(y), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", le), gr(null);
            break;
          }
        }
        y.ref !== null && (gr(y), b("Invalid attribute `ref` supplied to `React.Fragment`."), gr(null));
      }
    }
    function an(y, G, ee, le, Se, je) {
      {
        var ye = P(y);
        if (!ye) {
          var De = "";
          (y === void 0 || typeof y == "object" && y !== null && Object.keys(y).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = qe(Se);
          ot ? De += ot : De += pa();
          var Ue;
          y === null ? Ue = "null" : ve(y) ? Ue = "array" : y !== void 0 && y.$$typeof === e ? (Ue = "<" + (k(y.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof y, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, De);
        }
        var Je = Mr(y, G, ee, Se, je);
        if (Je == null)
          return Je;
        if (ye) {
          var Bt = G.children;
          if (Bt !== void 0)
            if (le)
              if (ve(Bt)) {
                for (var on = 0; on < Bt.length; on++)
                  Nr(Bt[on], y);
                Object.freeze && Object.freeze(Bt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nr(Bt, y);
        }
        return y === n ? ma(Je) : Bi(Je), Je;
      }
    }
    function Da(y, G, ee) {
      return an(y, G, ee, !0);
    }
    function Oi(y, G, ee) {
      return an(y, G, ee, !1);
    }
    var Si = Oi, xi = Da;
    In.Fragment = n, In.jsx = Si, In.jsxs = xi;
  }()), In;
}
process.env.NODE_ENV === "production" ? uo.exports = Kd() : uo.exports = Gd();
var Qe = uo.exports;
function dc(t) {
  if (Array.isArray(t))
    return t;
}
function Yd(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, l = !1;
    try {
      if (i = (r = r.call(t)).next, e === 0) {
        if (Object(r) !== r)
          return;
        s = !1;
      } else
        for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== e); s = !0)
          ;
    } catch (c) {
      l = !0, a = c;
    } finally {
      try {
        if (!s && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (l)
          throw a;
      }
    }
    return u;
  }
}
function so(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function cu(t, e) {
  if (t) {
    if (typeof t == "string")
      return so(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return so(t, e);
  }
}
function vc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(t, e) {
  return dc(t) || Yd(t, e) || cu(t, e) || vc();
}
function Me(t) {
  "@babel/helpers - typeof";
  return Me = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Me(t);
}
function Xd(t, e) {
  if (Me(t) != "object" || !t)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Me(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function hc(t) {
  var e = Xd(t, "string");
  return Me(e) == "symbol" ? e : String(e);
}
function W(t, e, r) {
  return e = hc(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Jd(t) {
  if (Array.isArray(t))
    return so(t);
}
function gc(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Zd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function de(t) {
  return Jd(t) || gc(t) || cu(t) || Zd();
}
function Yu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function te(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yu(Object(r), !0).forEach(function(n) {
      W(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Yu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Ya(t) {
  for (var e = 0, r, n = 0, a = t.length; a >= 4; ++n, a -= 4)
    r = t.charCodeAt(n) & 255 | (t.charCodeAt(++n) & 255) << 8 | (t.charCodeAt(++n) & 255) << 16 | (t.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, e = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      e ^= (t.charCodeAt(n + 2) & 255) << 16;
    case 2:
      e ^= (t.charCodeAt(n + 1) & 255) << 8;
    case 1:
      e ^= t.charCodeAt(n) & 255, e = /* Math.imul(h, m): */
      (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16);
  }
  return e ^= e >>> 13, e = /* Math.imul(h, m): */
  (e & 65535) * 1540483477 + ((e >>> 16) * 59797 << 16), ((e ^ e >>> 15) >>> 0).toString(36);
}
function Jt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Qd(t, e) {
  if (!t)
    return !1;
  if (t.contains)
    return t.contains(e);
  for (var r = e; r; ) {
    if (r === t)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Xu = "data-rc-order", Ju = "data-rc-priority", ev = "rc-util-key", lo = /* @__PURE__ */ new Map();
function pc() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.mark;
  return e ? e.startsWith("data-") ? e : "data-".concat(e) : ev;
}
function ci(t) {
  if (t.attachTo)
    return t.attachTo;
  var e = document.querySelector("head");
  return e || document.body;
}
function tv(t) {
  return t === "queue" ? "prependQueue" : t ? "prepend" : "append";
}
function fu(t) {
  return Array.from((lo.get(t) || t).children).filter(function(e) {
    return e.tagName === "STYLE";
  });
}
function mc(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Jt())
    return null;
  var r = e.csp, n = e.prepend, a = e.priority, i = a === void 0 ? 0 : a, o = tv(n), u = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(Xu, o), u && i && s.setAttribute(Ju, "".concat(i)), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = t;
  var l = ci(e), c = l.firstChild;
  if (n) {
    if (u) {
      var d = (e.styles || fu(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(Xu)))
          return !1;
        var D = Number(v.getAttribute(Ju) || 0);
        return i >= D;
      });
      if (d.length)
        return l.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    l.insertBefore(s, c);
  } else
    l.appendChild(s);
  return s;
}
function Dc(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = ci(e);
  return (e.styles || fu(r)).find(function(n) {
    return n.getAttribute(pc(e)) === t;
  });
}
function du(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Dc(t, e);
  if (r) {
    var n = ci(e);
    n.removeChild(r);
  }
}
function rv(t, e) {
  var r = lo.get(t);
  if (!r || !Qd(document, r)) {
    var n = mc("", e), a = n.parentNode;
    lo.set(t, a), t.removeChild(n);
  }
}
function Fn(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = ci(r), a = fu(n), i = te(te({}, r), {}, {
    styles: a
  });
  rv(n, i);
  var o = Dc(e, i);
  if (o) {
    var u, s;
    if ((u = i.csp) !== null && u !== void 0 && u.nonce && o.nonce !== ((s = i.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var l;
      o.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return o.innerHTML !== t && (o.innerHTML = t), o;
  }
  var c = mc(t, i);
  return c.setAttribute(pc(i), e), c;
}
function nv(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Ar(t, e) {
  if (t == null)
    return {};
  var r = nv(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function vu(t, e, r) {
  var n = R.useRef({});
  return (!("value" in n.current) || r(n.current.condition, e)) && (n.current.value = t(), n.current.condition = e), n.current.value;
}
var co = {}, hu = [], av = function(e) {
  hu.push(e);
};
function gu(t, e) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var r = hu.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, e);
    r && console.error("Warning: ".concat(r));
  }
}
function iv(t, e) {
  if (process.env.NODE_ENV !== "production" && !t && console !== void 0) {
    var r = hu.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, e);
    r && console.warn("Note: ".concat(r));
  }
}
function bc() {
  co = {};
}
function Cc(t, e, r) {
  !e && !co[r] && (t(!1, r), co[r] = !0);
}
function Ge(t, e) {
  Cc(gu, t, e);
}
function ov(t, e) {
  Cc(iv, t, e);
}
Ge.preMessage = av;
Ge.resetWarned = bc;
Ge.noteOnce = ov;
function Xa(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function a(i, o) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = n.has(i);
    if (Ge(!s, "Warning: There may be circular references"), s)
      return !1;
    if (i === o)
      return !0;
    if (r && u > 1)
      return !1;
    n.add(i);
    var l = u + 1;
    if (Array.isArray(i)) {
      if (!Array.isArray(o) || i.length !== o.length)
        return !1;
      for (var c = 0; c < i.length; c++)
        if (!a(i[c], o[c], l))
          return !1;
      return !0;
    }
    if (i && o && Me(i) === "object" && Me(o) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(o).length ? !1 : d.every(function(v) {
        return a(i[v], o[v], l);
      });
    }
    return !1;
  }
  return a(t, e);
}
function _t(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zu(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, hc(n.key), n);
  }
}
function Wt(t, e, r) {
  return e && Zu(t.prototype, e), r && Zu(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
var uv = "%";
function fo(t) {
  return t.join(uv);
}
var sv = /* @__PURE__ */ function() {
  function t(e) {
    _t(this, t), W(this, "instanceId", void 0), W(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = e;
  }
  return Wt(t, [{
    key: "get",
    value: function(r) {
      return this.opGet(fo(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(fo(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), i = n(a);
      i === null ? this.cache.delete(r) : this.cache.set(r, i);
    }
  }]), t;
}(), lv = ["children"], An = "data-token-hash", $t = "data-css-hash", cv = "data-cache-path", yr = "__cssinjs_instance__";
function yc() {
  var t = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var e = document.body.querySelectorAll("style[".concat($t, "]")) || [], r = document.head.firstChild;
    Array.from(e).forEach(function(a) {
      a[yr] = a[yr] || t, a[yr] === t && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat($t, "]"))).forEach(function(a) {
      var i = a.getAttribute($t);
      if (n[i]) {
        if (a[yr] === t) {
          var o;
          (o = a.parentNode) === null || o === void 0 || o.removeChild(a);
        }
      } else
        n[i] = !0;
    });
  }
  return new sv(t);
}
var Bn = /* @__PURE__ */ R.createContext({
  hashPriority: "low",
  cache: yc(),
  defaultCache: !0
}), fv = function(e) {
  var r = e.children, n = Ar(e, lv), a = R.useContext(Bn), i = vu(function() {
    var o = te({}, a);
    Object.keys(n).forEach(function(s) {
      var l = n[s];
      n[s] !== void 0 && (o[s] = l);
    });
    var u = n.cache;
    return o.cache = o.cache || yc(), o.defaultCache = !u && a.defaultCache, o;
  }, [a, n], function(o, u) {
    return !Xa(o[0], u[0], !0) || !Xa(o[1], u[1], !0);
  });
  return /* @__PURE__ */ R.createElement(Bn.Provider, {
    value: i
  }, r);
};
function dv(t, e) {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
var pu = /* @__PURE__ */ function() {
  function t() {
    _t(this, t), W(this, "cache", void 0), W(this, "keys", void 0), W(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Wt(t, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, a, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
        map: this.cache
      };
      return r.forEach(function(u) {
        if (!o)
          o = void 0;
        else {
          var s;
          o = (s = o) === null || s === void 0 || (s = s.map) === null || s === void 0 ? void 0 : s.get(u);
        }
      }), (n = o) !== null && n !== void 0 && n.value && i && (o.value[1] = this.cacheCallTimes++), (a = o) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var a = this;
      if (!this.has(r)) {
        if (this.size() + 1 > t.MAX_CACHE_SIZE + t.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(l, c) {
            var d = pe(l, 2), v = d[1];
            return a.internalGet(c)[1] < v ? [c, a.internalGet(c)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), o = pe(i, 1), u = o[0];
          this.delete(u);
        }
        this.keys.push(r);
      }
      var s = this.cache;
      r.forEach(function(l, c) {
        if (c === r.length - 1)
          s.set(l, {
            value: [n, a.cacheCallTimes++]
          });
        else {
          var d = s.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : s.set(l, {
            map: /* @__PURE__ */ new Map()
          }), s = s.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var a = r.get(n[0]);
      if (n.length === 1) {
        var i;
        return a.map ? r.set(n[0], {
          map: a.map
        }) : r.delete(n[0]), (i = a.value) === null || i === void 0 ? void 0 : i[0];
      }
      var o = this.deleteByPath(a.map, n.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && r.delete(n[0]), o;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !dv(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), t;
}();
W(pu, "MAX_CACHE_SIZE", 20);
W(pu, "MAX_CACHE_OFFSET", 5);
var Qu = 0, Ec = /* @__PURE__ */ function() {
  function t(e) {
    _t(this, t), W(this, "derivatives", void 0), W(this, "id", void 0), this.derivatives = Array.isArray(e) ? e : [e], this.id = Qu, e.length === 0 && gu(e.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Qu += 1;
  }
  return Wt(t, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), t;
}(), Pi = new pu();
function Jn(t) {
  var e = Array.isArray(t) ? t : [t];
  return Pi.has(e) || Pi.set(e, new Ec(e)), Pi.get(e);
}
var vv = /* @__PURE__ */ new WeakMap(), Ti = {};
function hv(t, e) {
  for (var r = vv, n = 0; n < e.length; n += 1) {
    var a = e[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(Ti) || r.set(Ti, t()), r.get(Ti);
}
var es = /* @__PURE__ */ new WeakMap();
function qn(t) {
  var e = es.get(t) || "";
  return e || (Object.keys(t).forEach(function(r) {
    var n = t[r];
    e += r, n instanceof Ec ? e += n.id : n && Me(n) === "object" ? e += qn(n) : e += n;
  }), es.set(t, e)), e;
}
function ts(t, e) {
  return Ya("".concat(e, "_").concat(qn(t)));
}
var Un = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), wc = "_bAmBoO_";
function gv(t, e, r) {
  if (Jt()) {
    var n, a;
    Fn(t, Un);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", e == null || e(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var o = r ? r(i) : (n = getComputedStyle(i).content) === null || n === void 0 ? void 0 : n.includes(wc);
    return (a = i.parentNode) === null || a === void 0 || a.removeChild(i), du(Un), o;
  }
  return !1;
}
var Ri = void 0;
function pv() {
  return Ri === void 0 && (Ri = gv("@layer ".concat(Un, " { .").concat(Un, ' { content: "').concat(wc, '"!important; } }'), function(t) {
    t.className = Un;
  })), Ri;
}
var vo = Jt();
function Zn(t) {
  return typeof t == "number" ? "".concat(t, "px") : t;
}
function Ja(t, e, r) {
  var n, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return t;
  var o = te(te({}, a), {}, (n = {}, W(n, An, e), W(n, $t, r), n)), u = Object.keys(o).map(function(s) {
    var l = o[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(u, ">").concat(t, "</style>");
}
var Fc = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(e).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, mv = function(e, r, n) {
  return Object.keys(e).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(e).map(function(a) {
    var i = pe(a, 2), o = i[0], u = i[1];
    return "".concat(o, ":").concat(u, ";");
  }).join(""), "}") : "";
}, Ac = function(e, r, n) {
  var a = {}, i = {};
  return Object.entries(e).forEach(function(o) {
    var u, s, l = pe(o, 2), c = l[0], d = l[1];
    if (n != null && (u = n.preserve) !== null && u !== void 0 && u[c])
      i[c] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (s = n.ignore) !== null && s !== void 0 && s[c])) {
      var v, D = Fc(c, n == null ? void 0 : n.prefix);
      a[D] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[c]) ? "".concat(d, "px") : String(d), i[c] = "var(".concat(D, ")");
    }
  }), [i, mv(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, rs = process.env.NODE_ENV !== "test" && Jt() ? R.useLayoutEffect : R.useEffect, Bc = function(e, r) {
  var n = R.useRef(!0);
  rs(function() {
    return e(n.current);
  }, r), rs(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ns = function(e, r) {
  Bc(function(n) {
    if (!n)
      return e();
  }, r);
}, Dv = te({}, R), as = Dv.useInsertionEffect, bv = function(e, r, n) {
  R.useMemo(e, n), Bc(function() {
    return r(!0);
  }, n);
}, Cv = as ? function(t, e, r) {
  return as(function() {
    return t(), e();
  }, r);
} : bv, yv = te({}, R), Ev = yv.useInsertionEffect, wv = function(e) {
  var r = [], n = !1;
  function a(i) {
    if (n) {
      process.env.NODE_ENV !== "production" && gu(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(i);
  }
  return R.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(i) {
        return i();
      });
    };
  }, e), a;
}, Fv = function() {
  return function(e) {
    e();
  };
}, Av = typeof Ev < "u" ? wv : Fv;
function Bv() {
  return !1;
}
var ho = !1;
function Ov() {
  return ho;
}
const Sv = process.env.NODE_ENV === "production" ? Bv : Ov;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ki = window;
  if (typeof ki.webpackHotUpdate == "function") {
    var xv = ki.webpackHotUpdate;
    ki.webpackHotUpdate = function() {
      return ho = !0, setTimeout(function() {
        ho = !1;
      }, 0), xv.apply(void 0, arguments);
    };
  }
}
function mu(t, e, r, n, a) {
  var i = R.useContext(Bn), o = i.cache, u = [t].concat(de(e)), s = fo(u), l = Av([s]), c = Sv(), d = function(f) {
    o.opUpdate(s, function(g) {
      var p = g || [void 0, void 0], b = pe(p, 2), C = b[0], F = C === void 0 ? 0 : C, B = b[1], A = B;
      process.env.NODE_ENV !== "production" && B && c && (n == null || n(A, c), A = null);
      var w = A || r(), M = [F, w];
      return f ? f(M) : M;
    });
  };
  R.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var v = o.opGet(s);
  process.env.NODE_ENV !== "production" && !v && (d(), v = o.opGet(s));
  var D = v[1];
  return Cv(function() {
    a == null || a(D);
  }, function(m) {
    return d(function(f) {
      var g = pe(f, 2), p = g[0], b = g[1];
      return m && p === 0 && (a == null || a(D)), [p + 1, b];
    }), function() {
      o.opUpdate(s, function(f) {
        var g = f || [], p = pe(g, 2), b = p[0], C = b === void 0 ? 0 : b, F = p[1], B = C - 1;
        return B === 0 ? (l(function() {
          (m || !o.opGet(s)) && (n == null || n(F, !1));
        }), null) : [C - 1, F];
      });
    };
  }, [s]), D;
}
var Pv = {}, Tv = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", _r = /* @__PURE__ */ new Map();
function Rv(t) {
  _r.set(t, (_r.get(t) || 0) + 1);
}
function kv(t, e) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(An, '="').concat(t, '"]'));
    r.forEach(function(n) {
      if (n[yr] === e) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var jv = 0;
function Mv(t, e) {
  _r.set(t, (_r.get(t) || 0) - 1);
  var r = Array.from(_r.keys()), n = r.filter(function(a) {
    var i = _r.get(a) || 0;
    return i <= 0;
  });
  r.length - n.length > jv && n.forEach(function(a) {
    kv(a, e), _r.delete(a);
  });
}
var Oc = function(e, r, n, a) {
  var i = n.getDerivativeToken(e), o = te(te({}, i), r);
  return a && (o = a(o)), o;
}, Sc = "token";
function Nv(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Vt(Bn), a = n.cache.instanceId, i = n.container, o = r.salt, u = o === void 0 ? "" : o, s = r.override, l = s === void 0 ? Pv : s, c = r.formatToken, d = r.getComputedToken, v = r.cssVar, D = hv(function() {
    return Object.assign.apply(Object, [{}].concat(de(e)));
  }, e), m = qn(D), f = qn(l), g = v ? qn(v) : "", p = mu(Sc, [u, t.id, m, f, g], function() {
    var b, C = d ? d(D, l, t) : Oc(D, l, t, c), F = te({}, C), B = "";
    if (v) {
      var A = Ac(C, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), w = pe(A, 2);
      C = w[0], B = w[1];
    }
    var M = ts(C, u);
    C._tokenKey = M, F._tokenKey = ts(F, u);
    var x = (b = v == null ? void 0 : v.key) !== null && b !== void 0 ? b : M;
    C._themeKey = x, Rv(x);
    var P = "".concat(Tv, "-").concat(Ya(M));
    return C._hashId = P, [C, P, F, B, (v == null ? void 0 : v.key) || ""];
  }, function(b) {
    Mv(b[0]._themeKey, a);
  }, function(b) {
    var C = pe(b, 4), F = C[0], B = C[3];
    if (v && B) {
      var A = Fn(B, Ya("css-variables-".concat(F._themeKey)), {
        mark: $t,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      A[yr] = a, A.setAttribute(An, F._themeKey);
    }
  });
  return p;
}
var $v = function(e, r, n) {
  var a = pe(e, 5), i = a[2], o = a[3], u = a[4], s = n || {}, l = s.plain;
  if (!o)
    return null;
  var c = i._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, D = Ja(o, u, c, v, l);
  return [d, c, D];
};
function Jr() {
  return Jr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, Jr.apply(this, arguments);
}
var Iv = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xc = "comm", Pc = "rule", Tc = "decl", Lv = "@import", Vv = "@keyframes", _v = "@layer", Rc = Math.abs, Du = String.fromCharCode;
function kc(t) {
  return t.trim();
}
function Ia(t, e, r) {
  return t.replace(e, r);
}
function Wv(t, e, r) {
  return t.indexOf(e, r);
}
function Qn(t, e) {
  return t.charCodeAt(e) | 0;
}
function ea(t, e, r) {
  return t.slice(e, r);
}
function ur(t) {
  return t.length;
}
function zv(t) {
  return t.length;
}
function Ca(t, e) {
  return e.push(t), t;
}
var fi = 1, On = 1, jc = 0, Pt = 0, Ze = 0, kn = "";
function bu(t, e, r, n, a, i, o, u) {
  return { value: t, root: e, parent: r, type: n, props: a, children: i, line: fi, column: On, length: o, return: "", siblings: u };
}
function Hv() {
  return Ze;
}
function qv() {
  return Ze = Pt > 0 ? Qn(kn, --Pt) : 0, On--, Ze === 10 && (On = 1, fi--), Ze;
}
function It() {
  return Ze = Pt < jc ? Qn(kn, Pt++) : 0, On++, Ze === 10 && (On = 1, fi++), Ze;
}
function Ur() {
  return Qn(kn, Pt);
}
function La() {
  return Pt;
}
function di(t, e) {
  return ea(kn, t, e);
}
function go(t) {
  switch (t) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Uv(t) {
  return fi = On = 1, jc = ur(kn = t), Pt = 0, [];
}
function Kv(t) {
  return kn = "", t;
}
function ji(t) {
  return kc(di(Pt - 1, po(t === 91 ? t + 2 : t === 40 ? t + 1 : t)));
}
function Gv(t) {
  for (; (Ze = Ur()) && Ze < 33; )
    It();
  return go(t) > 2 || go(Ze) > 3 ? "" : " ";
}
function Yv(t, e) {
  for (; --e && It() && !(Ze < 48 || Ze > 102 || Ze > 57 && Ze < 65 || Ze > 70 && Ze < 97); )
    ;
  return di(t, La() + (e < 6 && Ur() == 32 && It() == 32));
}
function po(t) {
  for (; It(); )
    switch (Ze) {
      case t:
        return Pt;
      case 34:
      case 39:
        t !== 34 && t !== 39 && po(Ze);
        break;
      case 40:
        t === 41 && po(t);
        break;
      case 92:
        It();
        break;
    }
  return Pt;
}
function Xv(t, e) {
  for (; It() && t + Ze !== 57; )
    if (t + Ze === 84 && Ur() === 47)
      break;
  return "/*" + di(e, Pt - 1) + "*" + Du(t === 47 ? t : It());
}
function Jv(t) {
  for (; !go(Ur()); )
    It();
  return di(t, Pt);
}
function Zv(t) {
  return Kv(Va("", null, null, null, [""], t = Uv(t), 0, [0], t));
}
function Va(t, e, r, n, a, i, o, u, s) {
  for (var l = 0, c = 0, d = o, v = 0, D = 0, m = 0, f = 1, g = 1, p = 1, b = 0, C = "", F = a, B = i, A = n, w = C; g; )
    switch (m = b, b = It()) {
      case 40:
        if (m != 108 && Qn(w, d - 1) == 58) {
          Wv(w += Ia(ji(b), "&", "&\f"), "&\f", Rc(l ? u[l - 1] : 0)) != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += ji(b);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += Gv(m);
        break;
      case 92:
        w += Yv(La() - 1, 7);
        continue;
      case 47:
        switch (Ur()) {
          case 42:
          case 47:
            Ca(Qv(Xv(It(), La()), e, r, s), s);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * f:
        u[l++] = ur(w) * p;
      case 125 * f:
      case 59:
      case 0:
        switch (b) {
          case 0:
          case 125:
            g = 0;
          case 59 + c:
            p == -1 && (w = Ia(w, /\f/g, "")), D > 0 && ur(w) - d && Ca(D > 32 ? os(w + ";", n, r, d - 1, s) : os(Ia(w, " ", "") + ";", n, r, d - 2, s), s);
            break;
          case 59:
            w += ";";
          default:
            if (Ca(A = is(w, e, r, l, c, a, u, C, F = [], B = [], d, i), i), b === 123)
              if (c === 0)
                Va(w, e, A, A, F, i, d, u, B);
              else
                switch (v === 99 && Qn(w, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Va(t, A, A, n && Ca(is(t, A, A, 0, 0, a, u, C, a, F = [], d, B), B), a, B, d, u, n ? F : B);
                    break;
                  default:
                    Va(w, A, A, A, [""], B, 0, u, B);
                }
        }
        l = c = D = 0, f = p = 1, C = w = "", d = o;
        break;
      case 58:
        d = 1 + ur(w), D = m;
      default:
        if (f < 1) {
          if (b == 123)
            --f;
          else if (b == 125 && f++ == 0 && qv() == 125)
            continue;
        }
        switch (w += Du(b), b * f) {
          case 38:
            p = c > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            u[l++] = (ur(w) - 1) * p, p = 1;
            break;
          case 64:
            Ur() === 45 && (w += ji(It())), v = Ur(), c = d = ur(C = w += Jv(La())), b++;
            break;
          case 45:
            m === 45 && ur(w) == 2 && (f = 0);
        }
    }
  return i;
}
function is(t, e, r, n, a, i, o, u, s, l, c, d) {
  for (var v = a - 1, D = a === 0 ? i : [""], m = zv(D), f = 0, g = 0, p = 0; f < n; ++f)
    for (var b = 0, C = ea(t, v + 1, v = Rc(g = o[f])), F = t; b < m; ++b)
      (F = kc(g > 0 ? D[b] + " " + C : Ia(C, /&\f/g, D[b]))) && (s[p++] = F);
  return bu(t, e, r, a === 0 ? Pc : u, s, l, c, d);
}
function Qv(t, e, r, n) {
  return bu(t, e, r, xc, Du(Hv()), ea(t, 2, -2), 0, n);
}
function os(t, e, r, n, a) {
  return bu(t, e, r, Tc, ea(t, 0, n), ea(t, n + 1, -1), n, a);
}
function mo(t, e) {
  for (var r = "", n = 0; n < t.length; n++)
    r += e(t[n], n, t, e) || "";
  return r;
}
function eh(t, e, r, n) {
  switch (t.type) {
    case _v:
      if (t.children.length)
        break;
    case Lv:
    case Tc:
      return t.return = t.return || t.value;
    case xc:
      return "";
    case Vv:
      return t.return = t.value + "{" + mo(t.children, n) + "}";
    case Pc:
      if (!ur(t.value = t.props.join(",")))
        return "";
  }
  return ur(r = mo(t.children, n)) ? t.return = t.value + "{" + r + "}" : "";
}
function Mc(t, e) {
  var r = e.path, n = e.parentSelectors;
  Ge(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(t).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var th = function(e, r, n) {
  if (e === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Mc("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, rh = function(e, r, n) {
  e === "animation" && n.hashId && r !== "none" && Mc("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, us = "data-ant-cssinjs-cache-path", Nc = "_FILE_STYLE__", Kr, $c = !0;
function nh() {
  if (!Kr && (Kr = {}, Jt())) {
    var t = document.createElement("div");
    t.className = us, t.style.position = "fixed", t.style.visibility = "hidden", t.style.top = "-9999px", document.body.appendChild(t);
    var e = getComputedStyle(t).content || "";
    e = e.replace(/^"/, "").replace(/"$/, ""), e.split(";").forEach(function(a) {
      var i = a.split(":"), o = pe(i, 2), u = o[0], s = o[1];
      Kr[u] = s;
    });
    var r = document.querySelector("style[".concat(us, "]"));
    if (r) {
      var n;
      $c = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(t);
  }
}
function ah(t) {
  return nh(), !!Kr[t];
}
function ih(t) {
  var e = Kr[t], r = null;
  if (e && Jt())
    if ($c)
      r = Nc;
    else {
      var n = document.querySelector("style[".concat($t, '="').concat(Kr[t], '"]'));
      n ? r = n.innerHTML : delete Kr[t];
    }
  return [r, e];
}
var Ic = "_skip_check_", Lc = "_multi_value_";
function Do(t) {
  var e = mo(Zv(t), eh);
  return e.replace(/\{%%%\:[^;];}/g, ";");
}
function oh(t) {
  return Me(t) === "object" && t && (Ic in t || Lc in t);
}
function uh(t, e, r) {
  if (!e)
    return t;
  var n = ".".concat(e), a = r === "low" ? ":where(".concat(n, ")") : n, i = t.split(",").map(function(o) {
    var u, s = o.trim().split(/\s+/), l = s[0] || "", c = ((u = l.match(/^\w+/)) === null || u === void 0 ? void 0 : u[0]) || "";
    return l = "".concat(c).concat(a).concat(l.slice(c.length)), [l].concat(de(s.slice(1))).join(" ");
  });
  return i.join(",");
}
var sh = function t(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, i = n.injectHash, o = n.parentSelectors, u = r.hashId, s = r.layer, l = r.path, c = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, D = r.linters, m = D === void 0 ? [] : D, f = "", g = {};
  function p(A) {
    var w = A.getName(u);
    if (!g[w]) {
      var M = t(A.style, r, {
        root: !1,
        parentSelectors: o
      }), x = pe(M, 1), P = x[0];
      g[w] = "@keyframes ".concat(A.getName(u)).concat(P);
    }
  }
  function b(A) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return A.forEach(function(M) {
      Array.isArray(M) ? b(M, w) : M && w.push(M);
    }), w;
  }
  var C = b(Array.isArray(e) ? e : [e]);
  if (C.forEach(function(A) {
    var w = typeof A == "string" && !a ? {} : A;
    if (typeof w == "string")
      f += "".concat(w, `
`);
    else if (w._keyframe)
      p(w);
    else {
      var M = v.reduce(function(x, P) {
        var V;
        return (P == null || (V = P.visit) === null || V === void 0 ? void 0 : V.call(P, x)) || x;
      }, w);
      Object.keys(M).forEach(function(x) {
        var P = M[x];
        if (Me(P) === "object" && P && (x !== "animationName" || !P._keyframe) && !oh(P)) {
          var V = !1, T = x.trim(), k = !1;
          (a || i) && u ? T.startsWith("@") ? V = !0 : T = uh(x, u, c) : a && !u && (T === "&" || T === "") && (T = "", k = !0);
          var N = t(P, r, {
            root: k,
            injectHash: V,
            parentSelectors: [].concat(de(o), [T])
          }), j = pe(N, 2), $ = j[0], S = j[1];
          g = te(te({}, g), S), f += "".concat(T).concat($);
        } else {
          let U = function(Y, Q) {
            process.env.NODE_ENV !== "production" && (Me(P) !== "object" || !(P != null && P[Ic])) && [th, rh].concat(de(m)).forEach(function(_) {
              return _(Y, Q, {
                path: l,
                hashId: u,
                parentSelectors: o
              });
            });
            var ie = Y.replace(/[A-Z]/g, function(_) {
              return "-".concat(_.toLowerCase());
            }), O = Q;
            !Iv[Y] && typeof O == "number" && O !== 0 && (O = "".concat(O, "px")), Y === "animationName" && Q !== null && Q !== void 0 && Q._keyframe && (p(Q), O = Q.getName(u)), f += "".concat(ie, ":").concat(O, ";");
          };
          var L, q = (L = P == null ? void 0 : P.value) !== null && L !== void 0 ? L : P;
          Me(P) === "object" && P !== null && P !== void 0 && P[Lc] && Array.isArray(q) ? q.forEach(function(Y) {
            U(x, Y);
          }) : U(x, q);
        }
      });
    }
  }), !a)
    f = "{".concat(f, "}");
  else if (s && pv()) {
    var F = s.split(","), B = F[F.length - 1].trim();
    f = "@layer ".concat(B, " {").concat(f, "}"), F.length > 1 && (f = "@layer ".concat(s, "{%%%:%}").concat(f));
  }
  return [f, g];
};
function Vc(t, e) {
  return Ya("".concat(t.join("%")).concat(e));
}
function lh() {
  return null;
}
var _c = "style";
function bo(t, e) {
  var r = t.token, n = t.path, a = t.hashId, i = t.layer, o = t.nonce, u = t.clientOnly, s = t.order, l = s === void 0 ? 0 : s, c = R.useContext(Bn), d = c.autoClear, v = c.mock, D = c.defaultCache, m = c.hashPriority, f = c.container, g = c.ssrInline, p = c.transformers, b = c.linters, C = c.cache, F = r._tokenKey, B = [F].concat(de(n)), A = vo;
  process.env.NODE_ENV !== "production" && v !== void 0 && (A = v === "client");
  var w = mu(
    _c,
    B,
    // Create cache if needed
    function() {
      var T = B.join("|");
      if (ah(T)) {
        var k = ih(T), N = pe(k, 2), j = N[0], $ = N[1];
        if (j)
          return [j, F, $, {}, u, l];
      }
      var S = e(), L = sh(S, {
        hashId: a,
        hashPriority: m,
        layer: i,
        path: n.join("-"),
        transformers: p,
        linters: b
      }), q = pe(L, 2), U = q[0], Y = q[1], Q = Do(U), ie = Vc(B, Q);
      return [Q, F, ie, Y, u, l];
    },
    // Remove cache if no need
    function(T, k) {
      var N = pe(T, 3), j = N[2];
      (k || d) && vo && du(j, {
        mark: $t
      });
    },
    // Effect: Inject style here
    function(T) {
      var k = pe(T, 4), N = k[0];
      k[1];
      var j = k[2], $ = k[3];
      if (A && N !== Nc) {
        var S = {
          mark: $t,
          prepend: "queue",
          attachTo: f,
          priority: l
        }, L = typeof o == "function" ? o() : o;
        L && (S.csp = {
          nonce: L
        });
        var q = Fn(N, j, S);
        q[yr] = C.instanceId, q.setAttribute(An, F), process.env.NODE_ENV !== "production" && q.setAttribute(cv, B.join("|")), Object.keys($).forEach(function(U) {
          Fn(Do($[U]), "_effect-".concat(U), S);
        });
      }
    }
  ), M = pe(w, 3), x = M[0], P = M[1], V = M[2];
  return function(T) {
    var k;
    if (!g || A || !D)
      k = /* @__PURE__ */ R.createElement(lh, null);
    else {
      var N;
      k = /* @__PURE__ */ R.createElement("style", Jr({}, (N = {}, W(N, An, P), W(N, $t, V), N), {
        dangerouslySetInnerHTML: {
          __html: x
        }
      }));
    }
    return /* @__PURE__ */ R.createElement(R.Fragment, null, k, T);
  };
}
var ch = function(e, r, n) {
  var a = pe(e, 6), i = a[0], o = a[1], u = a[2], s = a[3], l = a[4], c = a[5], d = n || {}, v = d.plain;
  if (l)
    return null;
  var D = i, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  };
  return D = Ja(i, o, u, m, v), s && Object.keys(s).forEach(function(f) {
    if (!r[f]) {
      r[f] = !0;
      var g = Do(s[f]);
      D += Ja(g, o, "_effect-".concat(f), m, v);
    }
  }), [c, u, D];
}, Wc = "cssVar", fh = function(e, r) {
  var n = e.key, a = e.prefix, i = e.unitless, o = e.ignore, u = e.token, s = e.scope, l = s === void 0 ? "" : s, c = Vt(Bn), d = c.cache.instanceId, v = c.container, D = u._tokenKey, m = [].concat(de(e.path), [n, l, D]), f = mu(Wc, m, function() {
    var g = r(), p = Ac(g, n, {
      prefix: a,
      unitless: i,
      ignore: o,
      scope: l
    }), b = pe(p, 2), C = b[0], F = b[1], B = Vc(m, F);
    return [C, F, B, n];
  }, function(g) {
    var p = pe(g, 3), b = p[2];
    vo && du(b, {
      mark: $t
    });
  }, function(g) {
    var p = pe(g, 3), b = p[1], C = p[2];
    if (b) {
      var F = Fn(b, C, {
        mark: $t,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      F[yr] = d, F.setAttribute(An, n);
    }
  });
  return f;
}, dh = function(e, r, n) {
  var a = pe(e, 4), i = a[1], o = a[2], u = a[3], s = n || {}, l = s.plain;
  if (!i)
    return null;
  var c = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  }, v = Ja(i, u, o, d, l);
  return [c, o, v];
}, Ln;
Ln = {}, W(Ln, _c, ch), W(Ln, Sc, $v), W(Ln, Wc, dh);
function un(t) {
  return t.notSplit = !0, t;
}
un(["borderTop", "borderBottom"]), un(["borderTop"]), un(["borderBottom"]), un(["borderLeft", "borderRight"]), un(["borderLeft"]), un(["borderRight"]);
var vh = ph, zc = "֑-߿יִ-﷽ﹰ-ﻼ", Hc = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", hh = new RegExp("^[^" + Hc + "]*[" + zc + "]"), gh = new RegExp("^[^" + zc + "]*[" + Hc + "]");
function ph(t) {
  return t = String(t || ""), hh.test(t) ? "rtl" : gh.test(t) ? "ltr" : "neutral";
}
const qc = /* @__PURE__ */ li(vh);
function mh(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Cu = mh, Dh = typeof ba == "object" && ba && ba.Object === Object && ba, bh = Dh, Ch = bh, yh = typeof self == "object" && self && self.Object === Object && self, Eh = Ch || yh || Function("return this")(), Uc = Eh, wh = Uc, Fh = function() {
  return wh.Date.now();
}, Ah = Fh, Bh = /\s/;
function Oh(t) {
  for (var e = t.length; e-- && Bh.test(t.charAt(e)); )
    ;
  return e;
}
var Sh = Oh, xh = Sh, Ph = /^\s+/;
function Th(t) {
  return t && t.slice(0, xh(t) + 1).replace(Ph, "");
}
var Rh = Th, kh = Uc, jh = kh.Symbol, Kc = jh, ss = Kc, Gc = Object.prototype, Mh = Gc.hasOwnProperty, Nh = Gc.toString, Vn = ss ? ss.toStringTag : void 0;
function $h(t) {
  var e = Mh.call(t, Vn), r = t[Vn];
  try {
    t[Vn] = void 0;
    var n = !0;
  } catch {
  }
  var a = Nh.call(t);
  return n && (e ? t[Vn] = r : delete t[Vn]), a;
}
var Ih = $h, Lh = Object.prototype, Vh = Lh.toString;
function _h(t) {
  return Vh.call(t);
}
var Wh = _h, ls = Kc, zh = Ih, Hh = Wh, qh = "[object Null]", Uh = "[object Undefined]", cs = ls ? ls.toStringTag : void 0;
function Kh(t) {
  return t == null ? t === void 0 ? Uh : qh : cs && cs in Object(t) ? zh(t) : Hh(t);
}
var Gh = Kh;
function Yh(t) {
  return t != null && typeof t == "object";
}
var Xh = Yh, Jh = Gh, Zh = Xh, Qh = "[object Symbol]";
function eg(t) {
  return typeof t == "symbol" || Zh(t) && Jh(t) == Qh;
}
var tg = eg, rg = Rh, fs = Cu, ng = tg, ds = NaN, ag = /^[-+]0x[0-9a-f]+$/i, ig = /^0b[01]+$/i, og = /^0o[0-7]+$/i, ug = parseInt;
function sg(t) {
  if (typeof t == "number")
    return t;
  if (ng(t))
    return ds;
  if (fs(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = fs(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = rg(t);
  var r = ig.test(t);
  return r || og.test(t) ? ug(t.slice(2), r ? 2 : 8) : ag.test(t) ? ds : +t;
}
var lg = sg, cg = Cu, Mi = Ah, vs = lg, fg = "Expected a function", dg = Math.max, vg = Math.min;
function hg(t, e, r) {
  var n, a, i, o, u, s, l = 0, c = !1, d = !1, v = !0;
  if (typeof t != "function")
    throw new TypeError(fg);
  e = vs(e) || 0, cg(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? dg(vs(r.maxWait) || 0, e) : i, v = "trailing" in r ? !!r.trailing : v);
  function D(A) {
    var w = n, M = a;
    return n = a = void 0, l = A, o = t.apply(M, w), o;
  }
  function m(A) {
    return l = A, u = setTimeout(p, e), c ? D(A) : o;
  }
  function f(A) {
    var w = A - s, M = A - l, x = e - w;
    return d ? vg(x, i - M) : x;
  }
  function g(A) {
    var w = A - s, M = A - l;
    return s === void 0 || w >= e || w < 0 || d && M >= i;
  }
  function p() {
    var A = Mi();
    if (g(A))
      return b(A);
    u = setTimeout(p, f(A));
  }
  function b(A) {
    return u = void 0, v && n ? D(A) : (n = a = void 0, o);
  }
  function C() {
    u !== void 0 && clearTimeout(u), l = 0, n = s = a = u = void 0;
  }
  function F() {
    return u === void 0 ? o : b(Mi());
  }
  function B() {
    var A = Mi(), w = g(A);
    if (n = arguments, a = this, s = A, w) {
      if (u === void 0)
        return m(s);
      if (d)
        return clearTimeout(u), u = setTimeout(p, e), D(s);
    }
    return u === void 0 && (u = setTimeout(p, e)), o;
  }
  return B.cancel = C, B.flush = F, B;
}
var Yc = hg;
const gg = /* @__PURE__ */ li(Yc);
var pg = Yc, mg = Cu, Dg = "Expected a function";
function bg(t, e, r) {
  var n = !0, a = !0;
  if (typeof t != "function")
    throw new TypeError(Dg);
  return mg(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), pg(t, e, {
    leading: n,
    maxWait: e,
    trailing: a
  });
}
var Cg = bg;
const yg = /* @__PURE__ */ li(Cg), hs = (t) => typeof t == "object" && t != null && t.nodeType === 1, gs = (t, e) => (!e || t !== "hidden") && t !== "visible" && t !== "clip", Ni = (t, e) => {
  if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
    const r = getComputedStyle(t, null);
    return gs(r.overflowY, e) || gs(r.overflowX, e) || ((n) => {
      const a = ((i) => {
        if (!i.ownerDocument || !i.ownerDocument.defaultView)
          return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(n);
      return !!a && (a.clientHeight < n.scrollHeight || a.clientWidth < n.scrollWidth);
    })(t);
  }
  return !1;
}, ya = (t, e, r, n, a, i, o, u) => i < t && o > e || i > t && o < e ? 0 : i <= t && u <= r || o >= e && u >= r ? i - t - n : o > e && u < r || i < t && u > r ? o - e + a : 0, Eg = (t) => {
  const e = t.parentElement;
  return e ?? (t.getRootNode().host || null);
}, ps = (t, e) => {
  var r, n, a, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: o, block: u, inline: s, boundary: l, skipOverflowHiddenElements: c } = e, d = typeof l == "function" ? l : ($) => $ !== l;
  if (!hs(t))
    throw new TypeError("Invalid target");
  const v = document.scrollingElement || document.documentElement, D = [];
  let m = t;
  for (; hs(m) && d(m); ) {
    if (m = Eg(m), m === v) {
      D.push(m);
      break;
    }
    m != null && m === document.body && Ni(m) && !Ni(document.documentElement) || m != null && Ni(m, c) && D.push(m);
  }
  const f = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, g = (i = (a = window.visualViewport) == null ? void 0 : a.height) != null ? i : innerHeight, { scrollX: p, scrollY: b } = window, { height: C, width: F, top: B, right: A, bottom: w, left: M } = t.getBoundingClientRect(), { top: x, right: P, bottom: V, left: T } = (($) => {
    const S = window.getComputedStyle($);
    return { top: parseFloat(S.scrollMarginTop) || 0, right: parseFloat(S.scrollMarginRight) || 0, bottom: parseFloat(S.scrollMarginBottom) || 0, left: parseFloat(S.scrollMarginLeft) || 0 };
  })(t);
  let k = u === "start" || u === "nearest" ? B - x : u === "end" ? w + V : B + C / 2 - x + V, N = s === "center" ? M + F / 2 - T + P : s === "end" ? A + P : M - T;
  const j = [];
  for (let $ = 0; $ < D.length; $++) {
    const S = D[$], { height: L, width: q, top: U, right: Y, bottom: Q, left: ie } = S.getBoundingClientRect();
    if (o === "if-needed" && B >= 0 && M >= 0 && w <= g && A <= f && B >= U && w <= Q && M >= ie && A <= Y)
      return j;
    const O = getComputedStyle(S), _ = parseInt(O.borderLeftWidth, 10), z = parseInt(O.borderTopWidth, 10), X = parseInt(O.borderRightWidth, 10), ue = parseInt(O.borderBottomWidth, 10);
    let ne = 0, se = 0;
    const fe = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - _ - X : 0, he = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - z - ue : 0, Ee = "offsetWidth" in S ? S.offsetWidth === 0 ? 0 : q / S.offsetWidth : 0, J = "offsetHeight" in S ? S.offsetHeight === 0 ? 0 : L / S.offsetHeight : 0;
    if (v === S)
      ne = u === "start" ? k : u === "end" ? k - g : u === "nearest" ? ya(b, b + g, g, z, ue, b + k, b + k + C, C) : k - g / 2, se = s === "start" ? N : s === "center" ? N - f / 2 : s === "end" ? N - f : ya(p, p + f, f, _, X, p + N, p + N + F, F), ne = Math.max(0, ne + b), se = Math.max(0, se + p);
    else {
      ne = u === "start" ? k - U - z : u === "end" ? k - Q + ue + he : u === "nearest" ? ya(U, Q, L, z, ue + he, k, k + C, C) : k - (U + L / 2) + he / 2, se = s === "start" ? N - ie - _ : s === "center" ? N - (ie + q / 2) + fe / 2 : s === "end" ? N - Y + X + fe : ya(ie, Y, q, _, X + fe, N, N + F, F);
      const { scrollLeft: me, scrollTop: Ae } = S;
      ne = J === 0 ? 0 : Math.max(0, Math.min(Ae + ne / J, S.scrollHeight - L / J + he)), se = Ee === 0 ? 0 : Math.max(0, Math.min(me + se / Ee, S.scrollWidth - q / Ee + fe)), k += Ae - ne, N += me - se;
    }
    j.push({ el: S, top: ne, left: se });
  }
  return j;
}, wg = (t) => t === !1 ? { block: "end", inline: "nearest" } : ((e) => e === Object(e) && Object.keys(e).length !== 0)(t) ? t : { block: "start", inline: "nearest" };
function Fg(t, e) {
  if (!t.isConnected || !((a) => {
    let i = a;
    for (; i && i.parentNode; ) {
      if (i.parentNode === document)
        return !0;
      i = i.parentNode instanceof ShadowRoot ? i.parentNode.host : i.parentNode;
    }
    return !1;
  })(t))
    return;
  const r = ((a) => {
    const i = window.getComputedStyle(a);
    return { top: parseFloat(i.scrollMarginTop) || 0, right: parseFloat(i.scrollMarginRight) || 0, bottom: parseFloat(i.scrollMarginBottom) || 0, left: parseFloat(i.scrollMarginLeft) || 0 };
  })(t);
  if (((a) => typeof a == "object" && typeof a.behavior == "function")(e))
    return e.behavior(ps(t, e));
  const n = typeof e == "boolean" || e == null ? void 0 : e.behavior;
  for (const { el: a, top: i, left: o } of ps(t, wg(e))) {
    const u = i - r.top + r.bottom, s = o - r.left + r.right;
    a.scroll({ top: u, left: s, behavior: n });
  }
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function ms(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function rt(t) {
  var e, r;
  return ms(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (r = e.prototype, !(ms(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var Xc = Symbol.for("immer-nothing"), Ds = Symbol.for("immer-draftable"), yt = Symbol.for("immer-state"), Ag = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(t) {
    return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
  },
  function(t) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
  },
  "This object has been frozen and should not be mutated",
  function(t) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(t) {
    return `'current' expects a draft, got: ${t}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(t) {
    return `'original' expects a draft, got: ${t}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function vt(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const r = Ag[t], n = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Sn = Object.getPrototypeOf;
function Zr(t) {
  return !!t && !!t[yt];
}
function Qr(t) {
  var e;
  return t ? Jc(t) || Array.isArray(t) || !!t[Ds] || !!((e = t.constructor) != null && e[Ds]) || hi(t) || gi(t) : !1;
}
var Bg = Object.prototype.constructor.toString();
function Jc(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = Sn(t);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === Bg;
}
function ta(t, e) {
  vi(t) === 0 ? Object.entries(t).forEach(([r, n]) => {
    e(r, n, t);
  }) : t.forEach((r, n) => e(n, r, t));
}
function vi(t) {
  const e = t[yt];
  return e ? e.type_ : Array.isArray(t) ? 1 : hi(t) ? 2 : gi(t) ? 3 : 0;
}
function Co(t, e) {
  return vi(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function Zc(t, e, r) {
  const n = vi(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function Og(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function hi(t) {
  return t instanceof Map;
}
function gi(t) {
  return t instanceof Set;
}
function $r(t) {
  return t.copy_ || t.base_;
}
function yo(t, e) {
  if (hi(t))
    return new Map(t);
  if (gi(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  if (!e && Jc(t))
    return Sn(t) ? { ...t } : Object.assign(/* @__PURE__ */ Object.create(null), t);
  const r = Object.getOwnPropertyDescriptors(t);
  delete r[yt];
  let n = Reflect.ownKeys(r);
  for (let a = 0; a < n.length; a++) {
    const i = n[a], o = r[i];
    o.writable === !1 && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: o.enumerable,
      value: t[i]
    });
  }
  return Object.create(Sn(t), r);
}
function yu(t, e = !1) {
  return pi(t) || Zr(t) || !Qr(t) || (vi(t) > 1 && (t.set = t.add = t.clear = t.delete = Sg), Object.freeze(t), e && ta(t, (r, n) => yu(n, !0))), t;
}
function Sg() {
  vt(2);
}
function pi(t) {
  return Object.isFrozen(t);
}
var xg = {};
function en(t) {
  const e = xg[t];
  return e || vt(0, t), e;
}
var ra;
function Qc() {
  return ra;
}
function Pg(t, e) {
  return {
    drafts_: [],
    parent_: t,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function bs(t, e) {
  e && (en("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function Eo(t) {
  wo(t), t.drafts_.forEach(Tg), t.drafts_ = null;
}
function wo(t) {
  t === ra && (ra = t.parent_);
}
function Cs(t) {
  return ra = Pg(ra, t);
}
function Tg(t) {
  const e = t[yt];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function ys(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return t !== void 0 && t !== r ? (r[yt].modified_ && (Eo(e), vt(4)), Qr(t) && (t = Za(e, t), e.parent_ || Qa(e, t)), e.patches_ && en("Patches").generateReplacementPatches_(
    r[yt].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = Za(e, r, []), Eo(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== Xc ? t : void 0;
}
function Za(t, e, r) {
  if (pi(e))
    return e;
  const n = e[yt];
  if (!n)
    return ta(
      e,
      (a, i) => Es(t, n, e, a, i, r)
    ), e;
  if (n.scope_ !== t)
    return e;
  if (!n.modified_)
    return Qa(t, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let i = a, o = !1;
    n.type_ === 3 && (i = new Set(a), a.clear(), o = !0), ta(
      i,
      (u, s) => Es(t, n, a, u, s, r, o)
    ), Qa(t, a, !1), r && t.patches_ && en("Patches").generatePatches_(
      n,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return n.copy_;
}
function Es(t, e, r, n, a, i, o) {
  if (process.env.NODE_ENV !== "production" && a === r && vt(5), Zr(a)) {
    const u = i && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Co(e.assigned_, n) ? i.concat(n) : void 0, s = Za(t, a, u);
    if (Zc(r, n, s), Zr(s))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else
    o && r.add(a);
  if (Qr(a) && !pi(a)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    Za(t, a), (!e || !e.scope_.parent_) && Qa(t, a);
  }
}
function Qa(t, e, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && yu(e, r);
}
function Rg(t, e) {
  const r = Array.isArray(t), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Qc(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: t,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = n, i = Eu;
  r && (a = [n], i = na);
  const { revoke: o, proxy: u } = Proxy.revocable(a, i);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Eu = {
  get(t, e) {
    if (e === yt)
      return t;
    const r = $r(t);
    if (!Co(r, e))
      return kg(t, r, e);
    const n = r[e];
    return t.finalized_ || !Qr(n) ? n : n === $i(t.base_, e) ? (Ii(t), t.copy_[e] = Ao(n, t)) : n;
  },
  has(t, e) {
    return e in $r(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys($r(t));
  },
  set(t, e, r) {
    const n = ef($r(t), e);
    if (n != null && n.set)
      return n.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const a = $i($r(t), e), i = a == null ? void 0 : a[yt];
      if (i && i.base_ === r)
        return t.copy_[e] = r, t.assigned_[e] = !1, !0;
      if (Og(r, a) && (r !== void 0 || Co(t.base_, e)))
        return !0;
      Ii(t), Fo(t);
    }
    return t.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = r, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return $i(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, Ii(t), Fo(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const r = $r(t), n = Reflect.getOwnPropertyDescriptor(r, e);
    return n && {
      writable: !0,
      configurable: t.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: r[e]
    };
  },
  defineProperty() {
    vt(11);
  },
  getPrototypeOf(t) {
    return Sn(t.base_);
  },
  setPrototypeOf() {
    vt(12);
  }
}, na = {};
ta(Eu, (t, e) => {
  na[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
na.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && vt(13), na.set.call(this, t, e, void 0);
};
na.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && vt(14), Eu.set.call(this, t[0], e, r, t[0]);
};
function $i(t, e) {
  const r = t[yt];
  return (r ? $r(r) : t)[e];
}
function kg(t, e, r) {
  var a;
  const n = ef(e, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(t.draft_)
  ) : void 0;
}
function ef(t, e) {
  if (!(e in t))
    return;
  let r = Sn(t);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, e);
    if (n)
      return n;
    r = Sn(r);
  }
}
function Fo(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Fo(t.parent_));
}
function Ii(t) {
  t.copy_ || (t.copy_ = yo(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var jg = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, n) => {
      if (typeof e == "function" && typeof r != "function") {
        const i = r;
        r = e;
        const o = this;
        return function(s = i, ...l) {
          return o.produce(s, (c) => r.call(this, c, ...l));
        };
      }
      typeof r != "function" && vt(6), n !== void 0 && typeof n != "function" && vt(7);
      let a;
      if (Qr(e)) {
        const i = Cs(this), o = Ao(e, void 0);
        let u = !0;
        try {
          a = r(o), u = !1;
        } finally {
          u ? Eo(i) : wo(i);
        }
        return bs(i, n), ys(a, i);
      } else if (!e || typeof e != "object") {
        if (a = r(e), a === void 0 && (a = e), a === Xc && (a = void 0), this.autoFreeze_ && yu(a, !0), n) {
          const i = [], o = [];
          en("Patches").generateReplacementPatches_(e, a, i, o), n(i, o);
        }
        return a;
      } else
        vt(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (o, ...u) => this.produceWithPatches(o, (s) => e(s, ...u));
      let n, a;
      return [this.produce(e, r, (o, u) => {
        n = o, a = u;
      }), n, a];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    Qr(t) || vt(8), Zr(t) && (t = Mg(t));
    const e = Cs(this), r = Ao(t, void 0);
    return r[yt].isManual_ = !0, wo(e), r;
  }
  finishDraft(t, e) {
    const r = t && t[yt];
    (!r || !r.isManual_) && vt(9);
    const { scope_: n } = r;
    return bs(n, e), ys(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, e) {
    let r;
    for (r = e.length - 1; r >= 0; r--) {
      const a = e[r];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    r > -1 && (e = e.slice(r + 1));
    const n = en("Patches").applyPatches_;
    return Zr(t) ? n(t, e) : this.produce(
      t,
      (a) => n(a, e)
    );
  }
};
function Ao(t, e) {
  const r = hi(t) ? en("MapSet").proxyMap_(t, e) : gi(t) ? en("MapSet").proxySet_(t, e) : Rg(t, e);
  return (e ? e.scope_ : Qc()).drafts_.push(r), r;
}
function Mg(t) {
  return Zr(t) || vt(10, t), tf(t);
}
function tf(t) {
  if (!Qr(t) || pi(t))
    return t;
  const e = t[yt];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = yo(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = yo(t, !0);
  return ta(r, (n, a) => {
    Zc(r, n, tf(a));
  }), e && (e.finalized_ = !1), r;
}
var Et = new jg(), wu = Et.produce;
Et.produceWithPatches.bind(
  Et
);
Et.setAutoFreeze.bind(Et);
Et.setUseStrictShallowCopy.bind(Et);
Et.applyPatches.bind(Et);
var ws = Et.createDraft.bind(Et), Fs = Et.finishDraft.bind(Et), Ng = {
  transform(t, e) {
    var {
      current: r,
      affinity: n
    } = t;
    if (r != null) {
      var a = E.transform(r, e, {
        affinity: n
      });
      t.current = a, a == null && t.unref();
    }
  }
}, $g = {
  transform(t, e) {
    var {
      current: r,
      affinity: n
    } = t;
    if (r != null) {
      var a = ge.transform(r, e, {
        affinity: n
      });
      t.current = a, a == null && t.unref();
    }
  }
}, Ig = {
  transform(t, e) {
    var {
      current: r,
      affinity: n
    } = t;
    if (r != null) {
      var a = I.transform(r, e, {
        affinity: n
      });
      t.current = a, a == null && t.unref();
    }
  }
}, ei = /* @__PURE__ */ new WeakMap(), ti = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), rf = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Os = /* @__PURE__ */ new WeakMap(), E = {
  ancestors(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, n = E.levels(t, e);
    return r ? n = n.slice(1) : n = n.slice(0, -1), n;
  },
  common(t, e) {
    for (var r = [], n = 0; n < t.length && n < e.length; n++) {
      var a = t[n], i = e[n];
      if (a !== i)
        break;
      r.push(a);
    }
    return r;
  },
  compare(t, e) {
    for (var r = Math.min(t.length, e.length), n = 0; n < r; n++) {
      if (t[n] < e[n])
        return -1;
      if (t[n] > e[n])
        return 1;
    }
    return 0;
  },
  endsAfter(t, e) {
    var r = t.length - 1, n = t.slice(0, r), a = e.slice(0, r), i = t[r], o = e[r];
    return E.equals(n, a) && i > o;
  },
  endsAt(t, e) {
    var r = t.length, n = t.slice(0, r), a = e.slice(0, r);
    return E.equals(n, a);
  },
  endsBefore(t, e) {
    var r = t.length - 1, n = t.slice(0, r), a = e.slice(0, r), i = t[r], o = e[r];
    return E.equals(n, a) && i < o;
  },
  equals(t, e) {
    return t.length === e.length && t.every((r, n) => r === e[n]);
  },
  hasPrevious(t) {
    return t[t.length - 1] > 0;
  },
  isAfter(t, e) {
    return E.compare(t, e) === 1;
  },
  isAncestor(t, e) {
    return t.length < e.length && E.compare(t, e) === 0;
  },
  isBefore(t, e) {
    return E.compare(t, e) === -1;
  },
  isChild(t, e) {
    return t.length === e.length + 1 && E.compare(t, e) === 0;
  },
  isCommon(t, e) {
    return t.length <= e.length && E.compare(t, e) === 0;
  },
  isDescendant(t, e) {
    return t.length > e.length && E.compare(t, e) === 0;
  },
  isParent(t, e) {
    return t.length + 1 === e.length && E.compare(t, e) === 0;
  },
  isPath(t) {
    return Array.isArray(t) && (t.length === 0 || typeof t[0] == "number");
  },
  isSibling(t, e) {
    if (t.length !== e.length)
      return !1;
    var r = t.slice(0, -1), n = e.slice(0, -1), a = t[t.length - 1], i = e[e.length - 1];
    return a !== i && E.equals(r, n);
  },
  levels(t) {
    for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, n = [], a = 0; a <= t.length; a++)
      n.push(t.slice(0, a));
    return r && n.reverse(), n;
  },
  next(t) {
    if (t.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(t, "], because it has no next index."));
    var e = t[t.length - 1];
    return t.slice(0, -1).concat(e + 1);
  },
  operationCanTransformPath(t) {
    switch (t.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return !0;
      default:
        return !1;
    }
  },
  parent(t) {
    if (t.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(t, "]."));
    return t.slice(0, -1);
  },
  previous(t) {
    if (t.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(t, "], because it has no previous index."));
    var e = t[t.length - 1];
    if (e <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(t, "] because it would result in a negative index."));
    return t.slice(0, -1).concat(e - 1);
  },
  relative(t, e) {
    if (!E.isAncestor(e, t) && !E.equals(t, e))
      throw new Error("Cannot get the relative path of [".concat(t, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
    return t.slice(e.length);
  },
  transform(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t)
      return null;
    var n = [...t], {
      affinity: a = "forward"
    } = r;
    if (t.length === 0)
      return n;
    switch (e.type) {
      case "insert_node": {
        var {
          path: i
        } = e;
        (E.equals(i, n) || E.endsBefore(i, n) || E.isAncestor(i, n)) && (n[i.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: o
        } = e;
        if (E.equals(o, n) || E.isAncestor(o, n))
          return null;
        E.endsBefore(o, n) && (n[o.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: u,
          position: s
        } = e;
        E.equals(u, n) || E.endsBefore(u, n) ? n[u.length - 1] -= 1 : E.isAncestor(u, n) && (n[u.length - 1] -= 1, n[u.length] += s);
        break;
      }
      case "split_node": {
        var {
          path: l,
          position: c
        } = e;
        if (E.equals(l, n)) {
          if (a === "forward")
            n[n.length - 1] += 1;
          else if (a !== "backward")
            return null;
        } else
          E.endsBefore(l, n) ? n[l.length - 1] += 1 : E.isAncestor(l, n) && t[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: d,
          newPath: v
        } = e;
        if (E.equals(d, v))
          return n;
        if (E.isAncestor(d, n) || E.equals(d, n)) {
          var D = v.slice();
          return E.endsBefore(d, v) && d.length < v.length && (D[d.length - 1] -= 1), D.concat(n.slice(d.length));
        } else
          E.isSibling(d, v) && (E.isAncestor(v, n) || E.equals(v, n)) ? E.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : E.endsBefore(v, n) || E.equals(v, n) || E.isAncestor(v, n) ? (E.endsBefore(d, n) && (n[d.length - 1] -= 1), n[v.length - 1] += 1) : E.endsBefore(d, n) && (E.equals(v, n) && (n[v.length - 1] += 1), n[d.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function aa(t) {
  "@babel/helpers - typeof";
  return aa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, aa(t);
}
function Lg(t, e) {
  if (aa(t) !== "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (aa(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Vg(t) {
  var e = Lg(t, "string");
  return aa(e) === "symbol" ? e : String(e);
}
function ft(t, e, r) {
  return e = Vg(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Ss(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _n(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ss(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ss(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var _g = (t, e, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = r, i = Z.parent(t, n), o = n[n.length - 1];
      if (o > i.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (i.children.splice(o, 0, a), e)
        for (var [u, s] of I.points(e))
          e[s] = ge.transform(u, r);
      break;
    }
    case "insert_text": {
      var {
        path: l,
        offset: c,
        text: d
      } = r;
      if (d.length === 0)
        break;
      var v = Z.leaf(t, l), D = v.text.slice(0, c), m = v.text.slice(c);
      if (v.text = D + d + m, e)
        for (var [f, g] of I.points(e))
          e[g] = ge.transform(f, r);
      break;
    }
    case "merge_node": {
      var {
        path: p
      } = r, b = Z.get(t, p), C = E.previous(p), F = Z.get(t, C), B = Z.parent(t, p), A = p[p.length - 1];
      if (ae.isText(b) && ae.isText(F))
        F.text += b.text;
      else if (!ae.isText(b) && !ae.isText(F))
        F.children.push(...b.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(p, "] to nodes of different interfaces: ").concat(tt.stringify(b), " ").concat(tt.stringify(F)));
      if (B.children.splice(A, 1), e)
        for (var [w, M] of I.points(e))
          e[M] = ge.transform(w, r);
      break;
    }
    case "move_node": {
      var {
        path: x,
        newPath: P
      } = r;
      if (E.isAncestor(x, P))
        throw new Error("Cannot move a path [".concat(x, "] to new path [").concat(P, "] because the destination is inside itself."));
      var V = Z.get(t, x), T = Z.parent(t, x), k = x[x.length - 1];
      T.children.splice(k, 1);
      var N = E.transform(x, r), j = Z.get(t, E.parent(N)), $ = N[N.length - 1];
      if (j.children.splice($, 0, V), e)
        for (var [S, L] of I.points(e))
          e[L] = ge.transform(S, r);
      break;
    }
    case "remove_node": {
      var {
        path: q
      } = r, U = q[q.length - 1], Y = Z.parent(t, q);
      if (Y.children.splice(U, 1), e)
        for (var [Q, ie] of I.points(e)) {
          var O = ge.transform(Q, r);
          if (e != null && O != null)
            e[ie] = O;
          else {
            var _ = void 0, z = void 0;
            for (var [X, ue] of Z.texts(t))
              if (E.compare(ue, q) === -1)
                _ = [X, ue];
              else {
                z = [X, ue];
                break;
              }
            var ne = !1;
            _ && z && (E.equals(z[1], q) ? ne = !E.hasPrevious(z[1]) : ne = E.common(_[1], q).length < E.common(z[1], q).length), _ && !ne ? (Q.path = _[1], Q.offset = _[0].text.length) : z ? (Q.path = z[1], Q.offset = 0) : e = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: se,
        offset: fe,
        text: he
      } = r;
      if (he.length === 0)
        break;
      var Ee = Z.leaf(t, se), J = Ee.text.slice(0, fe), me = Ee.text.slice(fe + he.length);
      if (Ee.text = J + me, e)
        for (var [Ae, we] of I.points(e))
          e[we] = ge.transform(Ae, r);
      break;
    }
    case "set_node": {
      var {
        path: Ye,
        properties: Be,
        newProperties: Ce
      } = r;
      if (Ye.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var Oe = Z.get(t, Ye);
      for (var ve in Ce) {
        if (ve === "children" || ve === "text")
          throw new Error('Cannot set the "'.concat(ve, '" property of nodes!'));
        var Ne = Ce[ve];
        Ne == null ? delete Oe[ve] : Oe[ve] = Ne;
      }
      for (var ze in Be)
        Ce.hasOwnProperty(ze) || delete Oe[ze];
      break;
    }
    case "set_selection": {
      var {
        newProperties: Ve
      } = r;
      if (Ve == null)
        e = Ve;
      else {
        if (e == null) {
          if (!I.isRange(Ve))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(tt.stringify(Ve), " when there is no current selection."));
          e = _n({}, Ve);
        }
        for (var at in Ve) {
          var wt = Ve[at];
          if (wt == null) {
            if (at === "anchor" || at === "focus")
              throw new Error('Cannot remove the "'.concat(at, '" selection property'));
            delete e[at];
          } else
            e[at] = wt;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: it,
        position: Ft,
        properties: Zt
      } = r;
      if (it.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(it, "] because the root node cannot be split."));
      var gt = Z.get(t, it), Mn = Z.parent(t, it), Nn = it[it.length - 1], jr;
      if (ae.isText(gt)) {
        var Qt = gt.text.slice(0, Ft), er = gt.text.slice(Ft);
        gt.text = Qt, jr = _n(_n({}, Zt), {}, {
          text: er
        });
      } else {
        var hr = gt.children.slice(0, Ft), Mr = gt.children.slice(Ft);
        gt.children = hr, jr = _n(_n({}, Zt), {}, {
          children: Mr
        });
      }
      if (Mn.children.splice(Nn + 1, 0, jr), e)
        for (var [zt, Rt] of I.points(e))
          e[Rt] = ge.transform(zt, r);
      break;
    }
  }
  return e;
}, Wg = {
  transform(t, e) {
    t.children = ws(t.children);
    var r = t.selection && ws(t.selection);
    try {
      r = _g(t, r, e);
    } finally {
      t.children = Fs(t.children), r ? t.selection = Zr(r) ? Fs(r) : r : t.selection = null;
    }
  }
}, zg = {
  insertNodes(t, e, r) {
    t.insertNodes(e, r);
  },
  liftNodes(t, e) {
    t.liftNodes(e);
  },
  mergeNodes(t, e) {
    t.mergeNodes(e);
  },
  moveNodes(t, e) {
    t.moveNodes(e);
  },
  removeNodes(t, e) {
    t.removeNodes(e);
  },
  setNodes(t, e, r) {
    t.setNodes(e, r);
  },
  splitNodes(t, e) {
    t.splitNodes(e);
  },
  unsetNodes(t, e, r) {
    t.unsetNodes(e, r);
  },
  unwrapNodes(t, e) {
    t.unwrapNodes(e);
  },
  wrapNodes(t, e, r) {
    t.wrapNodes(e, r);
  }
}, Hg = {
  collapse(t, e) {
    t.collapse(e);
  },
  deselect(t) {
    t.deselect();
  },
  move(t, e) {
    t.move(e);
  },
  select(t, e) {
    t.select(e);
  },
  setPoint(t, e, r) {
    t.setPoint(e, r);
  },
  setSelection(t, e) {
    t.setSelection(e);
  }
}, nf = (t, e) => {
  for (var r in t) {
    var n = t[r], a = e[r];
    if (rt(n) && rt(a)) {
      if (!nf(n, a))
        return !1;
    } else if (Array.isArray(n) && Array.isArray(a)) {
      if (n.length !== a.length)
        return !1;
      for (var i = 0; i < n.length; i++)
        if (n[i] !== a[i])
          return !1;
    } else if (n !== a)
      return !1;
  }
  for (var o in e)
    if (t[o] === void 0 && e[o] !== void 0)
      return !1;
  return !0;
};
function qg(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function cr(t, e) {
  if (t == null)
    return {};
  var r = qg(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
var Ug = ["anchor", "focus"];
function xs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Kg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xs(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : xs(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var I = {
  edges(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, {
      anchor: n,
      focus: a
    } = t;
    return I.isBackward(t) === r ? [n, a] : [a, n];
  },
  end(t) {
    var [, e] = I.edges(t);
    return e;
  },
  equals(t, e) {
    return ge.equals(t.anchor, e.anchor) && ge.equals(t.focus, e.focus);
  },
  includes(t, e) {
    if (I.isRange(e)) {
      if (I.includes(t, e.anchor) || I.includes(t, e.focus))
        return !0;
      var [r, n] = I.edges(t), [a, i] = I.edges(e);
      return ge.isBefore(r, a) && ge.isAfter(n, i);
    }
    var [o, u] = I.edges(t), s = !1, l = !1;
    return ge.isPoint(e) ? (s = ge.compare(e, o) >= 0, l = ge.compare(e, u) <= 0) : (s = E.compare(e, o.path) >= 0, l = E.compare(e, u.path) <= 0), s && l;
  },
  intersection(t, e) {
    var r = cr(t, Ug), [n, a] = I.edges(t), [i, o] = I.edges(e), u = ge.isBefore(n, i) ? i : n, s = ge.isBefore(a, o) ? a : o;
    return ge.isBefore(s, u) ? null : Kg({
      anchor: u,
      focus: s
    }, r);
  },
  isBackward(t) {
    var {
      anchor: e,
      focus: r
    } = t;
    return ge.isAfter(e, r);
  },
  isCollapsed(t) {
    var {
      anchor: e,
      focus: r
    } = t;
    return ge.equals(e, r);
  },
  isExpanded(t) {
    return !I.isCollapsed(t);
  },
  isForward(t) {
    return !I.isBackward(t);
  },
  isRange(t) {
    return rt(t) && ge.isPoint(t.anchor) && ge.isPoint(t.focus);
  },
  *points(t) {
    yield [t.anchor, "anchor"], yield [t.focus, "focus"];
  },
  start(t) {
    var [e] = I.edges(t);
    return e;
  },
  transform(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return wu(t, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "inward"
      } = r, i, o;
      if (a === "inward") {
        var u = I.isCollapsed(n);
        I.isForward(n) ? (i = "forward", o = u ? i : "backward") : (i = "backward", o = u ? i : "forward");
      } else
        a === "outward" ? I.isForward(n) ? (i = "backward", o = "forward") : (i = "forward", o = "backward") : (i = a, o = a);
      var s = ge.transform(n.anchor, e, {
        affinity: i
      }), l = ge.transform(n.focus, e, {
        affinity: o
      });
      if (!s || !l)
        return null;
      n.anchor = s, n.focus = l;
    });
  }
}, Ps = (t) => rt(t) && Z.isNodeList(t.children) && !h.isEditor(t), re = {
  isAncestor(t) {
    return rt(t) && Z.isNodeList(t.children);
  },
  isElement: Ps,
  isElementList(t) {
    return Array.isArray(t) && t.every((e) => re.isElement(e));
  },
  isElementProps(t) {
    return t.children !== void 0;
  },
  isElementType: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Ps(e) && e[n] === r;
  },
  matches(t, e) {
    for (var r in e)
      if (r !== "children" && t[r] !== e[r])
        return !1;
    return !0;
  }
}, Gg = ["children"], Yg = ["text"], Ts = /* @__PURE__ */ new WeakMap(), Z = {
  ancestor(t, e) {
    var r = Z.get(t, e);
    if (ae.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(tt.stringify(r)));
    return r;
  },
  ancestors(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of E.ancestors(e, r)) {
        var a = Z.ancestor(t, n), i = [a, n];
        yield i;
      }
    }();
  },
  child(t, e) {
    if (ae.isText(t))
      throw new Error("Cannot get the child of a text node: ".concat(tt.stringify(t)));
    var r = t.children[e];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(e, "` in node: ").concat(tt.stringify(t)));
    return r;
  },
  children(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = r, a = Z.ancestor(t, e), {
        children: i
      } = a, o = n ? i.length - 1 : 0; n ? o >= 0 : o < i.length; ) {
        var u = Z.child(a, o), s = e.concat(o);
        yield [u, s], o = n ? o - 1 : o + 1;
      }
    }();
  },
  common(t, e, r) {
    var n = E.common(e, r), a = Z.get(t, n);
    return [a, n];
  },
  descendant(t, e) {
    var r = Z.get(t, e);
    if (h.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(tt.stringify(r)));
    return r;
  },
  descendants(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of Z.nodes(t, e))
        n.length !== 0 && (yield [r, n]);
    }();
  },
  elements(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of Z.nodes(t, e))
        re.isElement(r) && (yield [r, n]);
    }();
  },
  extractProps(t) {
    if (re.isAncestor(t)) {
      var e = cr(t, Gg);
      return e;
    } else {
      var e = cr(t, Yg);
      return e;
    }
  },
  first(t, e) {
    for (var r = e.slice(), n = Z.get(t, r); n && !(ae.isText(n) || n.children.length === 0); )
      n = n.children[0], r.push(0);
    return [n, r];
  },
  fragment(t, e) {
    if (ae.isText(t))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(tt.stringify(t)));
    var r = wu({
      children: t.children
    }, (n) => {
      var [a, i] = I.edges(e), o = Z.nodes(n, {
        reverse: !0,
        pass: (v) => {
          var [, D] = v;
          return !I.includes(e, D);
        }
      });
      for (var [, u] of o) {
        if (!I.includes(e, u)) {
          var s = Z.parent(n, u), l = u[u.length - 1];
          s.children.splice(l, 1);
        }
        if (E.equals(u, i.path)) {
          var c = Z.leaf(n, u);
          c.text = c.text.slice(0, i.offset);
        }
        if (E.equals(u, a.path)) {
          var d = Z.leaf(n, u);
          d.text = d.text.slice(a.offset);
        }
      }
      h.isEditor(n) && (n.selection = null);
    });
    return r.children;
  },
  get(t, e) {
    for (var r = t, n = 0; n < e.length; n++) {
      var a = e[n];
      if (ae.isText(r) || !r.children[a])
        throw new Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(tt.stringify(t)));
      r = r.children[a];
    }
    return r;
  },
  has(t, e) {
    for (var r = t, n = 0; n < e.length; n++) {
      var a = e[n];
      if (ae.isText(r) || !r.children[a])
        return !1;
      r = r.children[a];
    }
    return !0;
  },
  isNode(t) {
    return ae.isText(t) || re.isElement(t) || h.isEditor(t);
  },
  isNodeList(t) {
    if (!Array.isArray(t))
      return !1;
    var e = Ts.get(t);
    if (e !== void 0)
      return e;
    var r = t.every((n) => Z.isNode(n));
    return Ts.set(t, r), r;
  },
  last(t, e) {
    for (var r = e.slice(), n = Z.get(t, r); n && !(ae.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], r.push(a);
    }
    return [n, r];
  },
  leaf(t, e) {
    var r = Z.get(t, e);
    if (!ae.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(tt.stringify(r)));
    return r;
  },
  levels(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of E.levels(e, r)) {
        var a = Z.get(t, n);
        yield [a, n];
      }
    }();
  },
  matches(t, e) {
    return re.isElement(t) && re.isElementProps(e) && re.matches(t, e) || ae.isText(t) && ae.isTextProps(e) && ae.matches(t, e);
  },
  nodes(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: r,
        reverse: n = !1
      } = e, {
        from: a = [],
        to: i
      } = e, o = /* @__PURE__ */ new Set(), u = [], s = t; !(i && (n ? E.isBefore(u, i) : E.isAfter(u, i))); ) {
        if (o.has(s) || (yield [s, u]), !o.has(s) && !ae.isText(s) && s.children.length !== 0 && (r == null || r([s, u]) === !1)) {
          o.add(s);
          var l = n ? s.children.length - 1 : 0;
          E.isAncestor(u, a) && (l = a[u.length]), u = u.concat(l), s = Z.get(t, u);
          continue;
        }
        if (u.length === 0)
          break;
        if (!n) {
          var c = E.next(u);
          if (Z.has(t, c)) {
            u = c, s = Z.get(t, u);
            continue;
          }
        }
        if (n && u[u.length - 1] !== 0) {
          var d = E.previous(u);
          u = d, s = Z.get(t, u);
          continue;
        }
        u = E.parent(u), s = Z.get(t, u), o.add(s);
      }
    }();
  },
  parent(t, e) {
    var r = E.parent(e), n = Z.get(t, r);
    if (ae.isText(n))
      throw new Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
    return n;
  },
  string(t) {
    return ae.isText(t) ? t.text : t.children.map(Z.string).join("");
  },
  texts(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of Z.nodes(t, e))
        ae.isText(r) && (yield [r, n]);
    }();
  }
};
function Rs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ie(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Rs(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Rs(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Er = {
  isNodeOperation(t) {
    return Er.isOperation(t) && t.type.endsWith("_node");
  },
  isOperation(t) {
    if (!rt(t))
      return !1;
    switch (t.type) {
      case "insert_node":
        return E.isPath(t.path) && Z.isNode(t.node);
      case "insert_text":
        return typeof t.offset == "number" && typeof t.text == "string" && E.isPath(t.path);
      case "merge_node":
        return typeof t.position == "number" && E.isPath(t.path) && rt(t.properties);
      case "move_node":
        return E.isPath(t.path) && E.isPath(t.newPath);
      case "remove_node":
        return E.isPath(t.path) && Z.isNode(t.node);
      case "remove_text":
        return typeof t.offset == "number" && typeof t.text == "string" && E.isPath(t.path);
      case "set_node":
        return E.isPath(t.path) && rt(t.properties) && rt(t.newProperties);
      case "set_selection":
        return t.properties === null && I.isRange(t.newProperties) || t.newProperties === null && I.isRange(t.properties) || rt(t.properties) && rt(t.newProperties);
      case "split_node":
        return E.isPath(t.path) && typeof t.position == "number" && rt(t.properties);
      default:
        return !1;
    }
  },
  isOperationList(t) {
    return Array.isArray(t) && t.every((e) => Er.isOperation(e));
  },
  isSelectionOperation(t) {
    return Er.isOperation(t) && t.type.endsWith("_selection");
  },
  isTextOperation(t) {
    return Er.isOperation(t) && t.type.endsWith("_text");
  },
  inverse(t) {
    switch (t.type) {
      case "insert_node":
        return Ie(Ie({}, t), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return Ie(Ie({}, t), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return Ie(Ie({}, t), {}, {
          type: "split_node",
          path: E.previous(t.path)
        });
      case "move_node": {
        var {
          newPath: e,
          path: r
        } = t;
        if (E.equals(e, r))
          return t;
        if (E.isSibling(r, e))
          return Ie(Ie({}, t), {}, {
            path: e,
            newPath: r
          });
        var n = E.transform(r, t), a = E.transform(E.next(r), t);
        return Ie(Ie({}, t), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return Ie(Ie({}, t), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return Ie(Ie({}, t), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: i,
          newProperties: o
        } = t;
        return Ie(Ie({}, t), {}, {
          properties: o,
          newProperties: i
        });
      }
      case "set_selection": {
        var {
          properties: u,
          newProperties: s
        } = t;
        return u == null ? Ie(Ie({}, t), {}, {
          properties: s,
          newProperties: null
        }) : s == null ? Ie(Ie({}, t), {}, {
          properties: null,
          newProperties: u
        }) : Ie(Ie({}, t), {}, {
          properties: s,
          newProperties: u
        });
      }
      case "split_node":
        return Ie(Ie({}, t), {}, {
          type: "merge_node",
          path: E.next(t.path)
        });
    }
  }
}, ks = /* @__PURE__ */ new WeakMap(), Xg = (t) => {
  var e = ks.get(t);
  if (e !== void 0)
    return e;
  if (!rt(t))
    return !1;
  var r = typeof t.addMark == "function" && typeof t.apply == "function" && typeof t.deleteFragment == "function" && typeof t.insertBreak == "function" && typeof t.insertSoftBreak == "function" && typeof t.insertFragment == "function" && typeof t.insertNode == "function" && typeof t.insertText == "function" && typeof t.isElementReadOnly == "function" && typeof t.isInline == "function" && typeof t.isSelectable == "function" && typeof t.isVoid == "function" && typeof t.normalizeNode == "function" && typeof t.onChange == "function" && typeof t.removeMark == "function" && typeof t.getDirtyPaths == "function" && (t.marks === null || rt(t.marks)) && (t.selection === null || I.isRange(t.selection)) && Z.isNodeList(t.children) && Er.isOperationList(t.operations);
  return ks.set(t, r), r;
}, h = {
  above(t, e) {
    return t.above(e);
  },
  addMark(t, e, r) {
    t.addMark(e, r);
  },
  after(t, e, r) {
    return t.after(e, r);
  },
  before(t, e, r) {
    return t.before(e, r);
  },
  deleteBackward(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = e;
    t.deleteBackward(r);
  },
  deleteForward(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = e;
    t.deleteForward(r);
  },
  deleteFragment(t, e) {
    t.deleteFragment(e);
  },
  edges(t, e) {
    return t.edges(e);
  },
  elementReadOnly(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return t.elementReadOnly(e);
  },
  end(t, e) {
    return t.end(e);
  },
  first(t, e) {
    return t.first(e);
  },
  fragment(t, e) {
    return t.fragment(e);
  },
  hasBlocks(t, e) {
    return t.hasBlocks(e);
  },
  hasInlines(t, e) {
    return t.hasInlines(e);
  },
  hasPath(t, e) {
    return t.hasPath(e);
  },
  hasTexts(t, e) {
    return t.hasTexts(e);
  },
  insertBreak(t) {
    t.insertBreak();
  },
  insertFragment(t, e, r) {
    t.insertFragment(e, r);
  },
  insertNode(t, e) {
    t.insertNode(e);
  },
  insertSoftBreak(t) {
    t.insertSoftBreak();
  },
  insertText(t, e) {
    t.insertText(e);
  },
  isBlock(t, e) {
    return t.isBlock(e);
  },
  isEdge(t, e, r) {
    return t.isEdge(e, r);
  },
  isEditor(t) {
    return Xg(t);
  },
  isElementReadOnly(t, e) {
    return t.isElementReadOnly(e);
  },
  isEmpty(t, e) {
    return t.isEmpty(e);
  },
  isEnd(t, e, r) {
    return t.isEnd(e, r);
  },
  isInline(t, e) {
    return t.isInline(e);
  },
  isNormalizing(t) {
    return t.isNormalizing();
  },
  isSelectable(t, e) {
    return t.isSelectable(e);
  },
  isStart(t, e, r) {
    return t.isStart(e, r);
  },
  isVoid(t, e) {
    return t.isVoid(e);
  },
  last(t, e) {
    return t.last(e);
  },
  leaf(t, e, r) {
    return t.leaf(e, r);
  },
  levels(t, e) {
    return t.levels(e);
  },
  marks(t) {
    return t.getMarks();
  },
  next(t, e) {
    return t.next(e);
  },
  node(t, e, r) {
    return t.node(e, r);
  },
  nodes(t, e) {
    return t.nodes(e);
  },
  normalize(t, e) {
    t.normalize(e);
  },
  parent(t, e, r) {
    return t.parent(e, r);
  },
  path(t, e, r) {
    return t.path(e, r);
  },
  pathRef(t, e, r) {
    return t.pathRef(e, r);
  },
  pathRefs(t) {
    return t.pathRefs();
  },
  point(t, e, r) {
    return t.point(e, r);
  },
  pointRef(t, e, r) {
    return t.pointRef(e, r);
  },
  pointRefs(t) {
    return t.pointRefs();
  },
  positions(t, e) {
    return t.positions(e);
  },
  previous(t, e) {
    return t.previous(e);
  },
  range(t, e, r) {
    return t.range(e, r);
  },
  rangeRef(t, e, r) {
    return t.rangeRef(e, r);
  },
  rangeRefs(t) {
    return t.rangeRefs();
  },
  removeMark(t, e) {
    t.removeMark(e);
  },
  setNormalizing(t, e) {
    t.setNormalizing(e);
  },
  start(t, e) {
    return t.start(e);
  },
  string(t, e, r) {
    return t.string(e, r);
  },
  unhangRange(t, e, r) {
    return t.unhangRange(e, r);
  },
  void(t, e) {
    return t.void(e);
  },
  withoutNormalizing(t, e) {
    t.withoutNormalizing(e);
  }
}, Jg = {
  isSpan(t) {
    return Array.isArray(t) && t.length === 2 && t.every(E.isPath);
  }
};
function js(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ms(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? js(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : js(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var ge = {
  compare(t, e) {
    var r = E.compare(t.path, e.path);
    return r === 0 ? t.offset < e.offset ? -1 : t.offset > e.offset ? 1 : 0 : r;
  },
  isAfter(t, e) {
    return ge.compare(t, e) === 1;
  },
  isBefore(t, e) {
    return ge.compare(t, e) === -1;
  },
  equals(t, e) {
    return t.offset === e.offset && E.equals(t.path, e.path);
  },
  isPoint(t) {
    return rt(t) && typeof t.offset == "number" && E.isPath(t.path);
  },
  transform(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return wu(t, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "forward"
      } = r, {
        path: i,
        offset: o
      } = n;
      switch (e.type) {
        case "insert_node":
        case "move_node": {
          n.path = E.transform(i, e, r);
          break;
        }
        case "insert_text": {
          E.equals(e.path, i) && (e.offset < o || e.offset === o && a === "forward") && (n.offset += e.text.length);
          break;
        }
        case "merge_node": {
          E.equals(e.path, i) && (n.offset += e.position), n.path = E.transform(i, e, r);
          break;
        }
        case "remove_text": {
          E.equals(e.path, i) && e.offset <= o && (n.offset -= Math.min(o - e.offset, e.text.length));
          break;
        }
        case "remove_node": {
          if (E.equals(e.path, i) || E.isAncestor(e.path, i))
            return null;
          n.path = E.transform(i, e, r);
          break;
        }
        case "split_node": {
          if (E.equals(e.path, i)) {
            if (e.position === o && a == null)
              return null;
            (e.position < o || e.position === o && a === "forward") && (n.offset -= e.position, n.path = E.transform(i, e, Ms(Ms({}, r), {}, {
              affinity: "forward"
            })));
          } else
            n.path = E.transform(i, e, r);
          break;
        }
      }
    });
  }
}, Ns = void 0, tt = {
  setScrubber(t) {
    Ns = t;
  },
  stringify(t) {
    return JSON.stringify(t, Ns);
  }
}, Zg = ["text"], Qg = ["anchor", "focus"];
function $s(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $s(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $s(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var ae = {
  equals(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = r;
    function a(i) {
      var o = cr(i, Zg);
      return o;
    }
    return nf(n ? a(t) : t, n ? a(e) : e);
  },
  isText(t) {
    return rt(t) && typeof t.text == "string";
  },
  isTextList(t) {
    return Array.isArray(t) && t.every((e) => ae.isText(e));
  },
  isTextProps(t) {
    return t.text !== void 0;
  },
  matches(t, e) {
    for (var r in e)
      if (r !== "text" && (!t.hasOwnProperty(r) || t[r] !== e[r]))
        return !1;
    return !0;
  },
  decorations(t, e) {
    var r = [rr({}, t)];
    for (var n of e) {
      var a = cr(n, Qg), [i, o] = I.edges(n), u = [], s = 0, l = i.offset, c = o.offset;
      for (var d of r) {
        var {
          length: v
        } = d.text, D = s;
        if (s += v, l <= D && s <= c) {
          Object.assign(d, a), u.push(d);
          continue;
        }
        if (l !== c && (l === s || c === D) || l > s || c < D || c === D && D !== 0) {
          u.push(d);
          continue;
        }
        var m = d, f = void 0, g = void 0;
        if (c < s) {
          var p = c - D;
          g = rr(rr({}, m), {}, {
            text: m.text.slice(p)
          }), m = rr(rr({}, m), {}, {
            text: m.text.slice(0, p)
          });
        }
        if (l > D) {
          var b = l - D;
          f = rr(rr({}, m), {}, {
            text: m.text.slice(0, b)
          }), m = rr(rr({}, m), {}, {
            text: m.text.slice(b)
          });
        }
        Object.assign(m, a), f && u.push(f), u.push(m), g && u.push(g);
      }
      r = u;
    }
    return r;
  }
}, Fu = (t) => t.selection ? t.selection : t.children.length > 0 ? h.end(t, []) : [0], jn = (t, e) => {
  var [r] = h.node(t, e);
  return (n) => n === r;
}, Au = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !r, a = r ? ip(e) : e, i = ce.None, o = ce.None, u = 0, s = null, l = null;
  for (var c of a) {
    var d = c.codePointAt(0);
    if (!d)
      break;
    var v = mp(c, d);
    if ([i, o] = n ? [o, v] : [v, i], vn(i, ce.ZWJ) && vn(o, ce.ExtPict) && (n ? s = Is(e.substring(0, u)) : s = Is(e.substring(0, e.length - u)), !s) || vn(i, ce.RI) && vn(o, ce.RI) && (l !== null ? l = !l : n ? l = !0 : l = Ep(e.substring(0, e.length - u)), !l) || i !== ce.None && o !== ce.None && bp(i, o))
      break;
    u += c.length;
  }
  return u || 1;
}, ep = /\s/, tp = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, rp = /['\u2018\u2019]/, np = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; e.length > 0; ) {
    var i = Au(e, r), [o, u] = Bu(e, i, r);
    if (ap(o, u, r))
      a = !0, n += i;
    else if (!a)
      n += i;
    else
      break;
    e = u;
  }
  return n;
}, Bu = (t, e, r) => {
  if (r) {
    var n = t.length - e;
    return [t.slice(n, t.length), t.slice(0, n)];
  }
  return [t.slice(0, e), t.slice(e)];
}, ap = function t(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (ep.test(e))
    return !1;
  if (rp.test(e)) {
    var a = Au(r, n), [i, o] = Bu(r, a, n);
    if (t(i, o, n))
      return !0;
  }
  return !tp.test(e);
}, ip = function* (e) {
  for (var r = e.length - 1, n = 0; n < e.length; n++) {
    var a = e.charAt(r - n);
    if (up(a.charCodeAt(0))) {
      var i = e.charAt(r - n - 1);
      if (op(i.charCodeAt(0))) {
        yield i + a, n++;
        continue;
      }
    }
    yield a;
  }
}, op = (t) => t >= 55296 && t <= 56319, up = (t) => t >= 56320 && t <= 57343, ce;
(function(t) {
  t[t.None = 0] = "None", t[t.Extend = 1] = "Extend", t[t.ZWJ = 2] = "ZWJ", t[t.RI = 4] = "RI", t[t.Prepend = 8] = "Prepend", t[t.SpacingMark = 16] = "SpacingMark", t[t.L = 32] = "L", t[t.V = 64] = "V", t[t.T = 128] = "T", t[t.LV = 256] = "LV", t[t.LVT = 512] = "LVT", t[t.ExtPict = 1024] = "ExtPict", t[t.Any = 2048] = "Any";
})(ce || (ce = {}));
var sp = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, lp = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, cp = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, fp = /^[\u1100-\u115F\uA960-\uA97C]$/, dp = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, vp = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, hp = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, gp = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, pp = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, mp = (t, e) => {
  var r = ce.Any;
  return t.search(sp) !== -1 && (r |= ce.Extend), e === 8205 && (r |= ce.ZWJ), e >= 127462 && e <= 127487 && (r |= ce.RI), t.search(lp) !== -1 && (r |= ce.Prepend), t.search(cp) !== -1 && (r |= ce.SpacingMark), t.search(fp) !== -1 && (r |= ce.L), t.search(dp) !== -1 && (r |= ce.V), t.search(vp) !== -1 && (r |= ce.T), t.search(hp) !== -1 && (r |= ce.LV), t.search(gp) !== -1 && (r |= ce.LVT), t.search(pp) !== -1 && (r |= ce.ExtPict), r;
};
function vn(t, e) {
  return (t & e) !== 0;
}
var Dp = [
  // GB6
  [ce.L, ce.L | ce.V | ce.LV | ce.LVT],
  // GB7
  [ce.LV | ce.V, ce.V | ce.T],
  // GB8
  [ce.LVT | ce.T, ce.T],
  // GB9
  [ce.Any, ce.Extend | ce.ZWJ],
  // GB9a
  [ce.Any, ce.SpacingMark],
  // GB9b
  [ce.Prepend, ce.Any],
  // GB11
  [ce.ZWJ, ce.ExtPict],
  // GB12 and GB13
  [ce.RI, ce.RI]
];
function bp(t, e) {
  return Dp.findIndex((r) => vn(t, r[0]) && vn(e, r[1])) === -1;
}
var Cp = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, Is = (t) => t.search(Cp) !== -1, yp = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, Ep = (t) => {
  var e = t.match(yp);
  if (e === null)
    return !1;
  var r = e[0].length / 2;
  return r % 2 === 1;
}, wp = {
  delete(t, e) {
    t.delete(e);
  },
  insertFragment(t, e, r) {
    t.insertFragment(e, r);
  },
  insertText(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    h.withoutNormalizing(t, () => {
      var {
        voids: n = !1
      } = r, {
        at: a = Fu(t)
      } = r;
      if (E.isPath(a) && (a = h.range(t, a)), I.isRange(a))
        if (I.isCollapsed(a))
          a = a.anchor;
        else {
          var i = I.end(a);
          if (!n && h.void(t, {
            at: i
          }))
            return;
          var o = I.start(a), u = h.pointRef(t, o), s = h.pointRef(t, i);
          K.delete(t, {
            at: a,
            voids: n
          });
          var l = u.unref(), c = s.unref();
          a = l || c, K.setSelection(t, {
            anchor: a,
            focus: a
          });
        }
      if (!(!n && h.void(t, {
        at: a
      }) || h.elementReadOnly(t, {
        at: a
      }))) {
        var {
          path: d,
          offset: v
        } = a;
        e.length > 0 && t.apply({
          type: "insert_text",
          path: d,
          offset: v,
          text: e
        });
      }
    });
  }
};
function Ls(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ea(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ls(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ls(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var K = Ea(Ea(Ea(Ea({}, Wg), zg), Hg), wp), _a = /* @__PURE__ */ new WeakMap(), Fp = (t) => _a.get(t) || !1, Ap = (t, e, r) => {
  var n = _a.get(t) || !1;
  _a.set(t, !0);
  try {
    e(), r();
  } finally {
    _a.set(t, n);
  }
};
function af(t, e, r) {
  var n = ei.get(t) || [], a = ti.get(t) || /* @__PURE__ */ new Set(), i, o, u = (d) => {
    if (d) {
      var v = d.join(",");
      o.has(v) || (o.add(v), i.push(d));
    }
  };
  if (r) {
    i = [], o = /* @__PURE__ */ new Set();
    for (var s of n) {
      var l = r(s);
      u(l);
    }
  } else
    i = n, o = a;
  for (var c of e)
    u(c);
  ei.set(t, i), ti.set(t, o);
}
var Bp = (t, e) => {
  for (var r of h.pathRefs(t))
    Ng.transform(r, e);
  for (var n of h.pointRefs(t))
    $g.transform(n, e);
  for (var a of h.rangeRefs(t))
    Ig.transform(a, e);
  if (!Fp(t)) {
    var i = E.operationCanTransformPath(e) ? (o) => E.transform(o, e) : void 0;
    af(t, t.getDirtyPaths(e), i);
  }
  K.transform(t, e), t.operations.push(e), h.normalize(t, {
    operation: e
  }), e.type === "set_selection" && (t.marks = null), Kn.get(t) || (Kn.set(t, !0), Promise.resolve().then(() => {
    Kn.set(t, !1), t.onChange({
      operation: e
    }), t.operations = [];
  }));
}, Op = (t, e) => {
  switch (e.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: r
      } = e;
      return E.levels(r);
    }
    case "insert_node": {
      var {
        node: n,
        path: a
      } = e, i = E.levels(a), o = ae.isText(n) ? [] : Array.from(Z.nodes(n), (P) => {
        var [, V] = P;
        return a.concat(V);
      });
      return [...i, ...o];
    }
    case "merge_node": {
      var {
        path: u
      } = e, s = E.ancestors(u), l = E.previous(u);
      return [...s, l];
    }
    case "move_node": {
      var {
        path: c,
        newPath: d
      } = e;
      if (E.equals(c, d))
        return [];
      var v = [], D = [];
      for (var m of E.ancestors(c)) {
        var f = E.transform(m, e);
        v.push(f);
      }
      for (var g of E.ancestors(d)) {
        var p = E.transform(g, e);
        D.push(p);
      }
      var b = D[D.length - 1], C = d[d.length - 1], F = b.concat(C);
      return [...v, ...D, F];
    }
    case "remove_node": {
      var {
        path: B
      } = e, A = E.ancestors(B);
      return [...A];
    }
    case "split_node": {
      var {
        path: w
      } = e, M = E.levels(w), x = E.next(w);
      return [...M, x];
    }
    default:
      return [];
  }
}, Sp = (t) => {
  var {
    selection: e
  } = t;
  return e ? Z.fragment(t, e) : [];
}, xp = (t, e) => {
  var [r, n] = e;
  if (!ae.isText(r)) {
    if (re.isElement(r) && r.children.length === 0) {
      var a = {
        text: ""
      };
      K.insertNodes(t, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var i = h.isEditor(r) ? !1 : re.isElement(r) && (t.isInline(r) || r.children.length === 0 || ae.isText(r.children[0]) || t.isInline(r.children[0])), o = 0, u = 0; u < r.children.length; u++, o++) {
      var s = Z.get(t, n);
      if (!ae.isText(s)) {
        var l = s.children[o], c = s.children[o - 1], d = u === r.children.length - 1, v = ae.isText(l) || re.isElement(l) && t.isInline(l);
        if (v !== i)
          K.removeNodes(t, {
            at: n.concat(o),
            voids: !0
          }), o--;
        else if (re.isElement(l)) {
          if (t.isInline(l)) {
            if (c == null || !ae.isText(c)) {
              var D = {
                text: ""
              };
              K.insertNodes(t, D, {
                at: n.concat(o),
                voids: !0
              }), o++;
            } else if (d) {
              var m = {
                text: ""
              };
              K.insertNodes(t, m, {
                at: n.concat(o + 1),
                voids: !0
              }), o++;
            }
          }
        } else
          c != null && ae.isText(c) && (ae.equals(l, c, {
            loose: !0
          }) ? (K.mergeNodes(t, {
            at: n.concat(o),
            voids: !0
          }), o--) : c.text === "" ? (K.removeNodes(t, {
            at: n.concat(o - 1),
            voids: !0
          }), o--) : l.text === "" && (K.removeNodes(t, {
            at: n.concat(o),
            voids: !0
          }), o--));
      }
    }
  }
}, Pp = (t, e) => {
  var {
    iteration: r,
    initialDirtyPathsLength: n
  } = e, a = n * 42;
  if (r > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, Tp = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: n = !1,
    mode: a = "lowest",
    at: i = e.selection,
    match: o
  } = r;
  if (i) {
    var u = h.path(e, i), s = a === "lowest";
    for (var [l, c] of h.levels(e, {
      at: u,
      voids: n,
      match: o,
      reverse: s
    }))
      if (!ae.isText(l)) {
        if (I.isRange(i)) {
          if (E.isAncestor(c, i.anchor.path) && E.isAncestor(c, i.focus.path))
            return [l, c];
        } else if (!E.equals(u, c))
          return [l, c];
      }
  }
};
function Vs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _s(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vs(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Vs(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Rp = (t, e, r) => {
  var {
    selection: n
  } = t;
  if (n) {
    var a = (d, v) => {
      if (!ae.isText(d))
        return !1;
      var [D, m] = h.parent(t, v);
      return !t.isVoid(D) || t.markableVoid(D);
    }, i = I.isExpanded(n), o = !1;
    if (!i) {
      var [u, s] = h.node(t, n);
      if (u && a(u, s)) {
        var [l] = h.parent(t, s);
        o = l && t.markableVoid(l);
      }
    }
    if (i || o)
      K.setNodes(t, {
        [e]: r
      }, {
        match: a,
        split: !0,
        voids: !0
      });
    else {
      var c = _s(_s({}, h.marks(t) || {}), {}, {
        [e]: r
      });
      t.marks = c, Kn.get(t) || t.onChange();
    }
  }
};
function Ws(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ws(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ws(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var kp = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.point(e, r, {
    edge: "end"
  }), i = h.end(e, []), o = {
    anchor: a,
    focus: i
  }, {
    distance: u = 1
  } = n, s = 0, l;
  for (var c of h.positions(e, zs(zs({}, n), {}, {
    at: o
  }))) {
    if (s > u)
      break;
    s !== 0 && (l = c), s++;
  }
  return l;
};
function Hs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Hs(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Hs(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var jp = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.start(e, []), i = h.point(e, r, {
    edge: "start"
  }), o = {
    anchor: a,
    focus: i
  }, {
    distance: u = 1
  } = n, s = 0, l;
  for (var c of h.positions(e, qs(qs({}, n), {}, {
    at: o,
    reverse: !0
  }))) {
    if (s > u)
      break;
    s !== 0 && (l = c), s++;
  }
  return l;
}, Mp = (t, e) => {
  var {
    selection: r
  } = t;
  r && I.isCollapsed(r) && K.delete(t, {
    unit: e,
    reverse: !0
  });
}, Np = (t, e) => {
  var {
    selection: r
  } = t;
  r && I.isCollapsed(r) && K.delete(t, {
    unit: e
  });
}, $p = function(e) {
  var {
    direction: r = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = e;
  n && I.isExpanded(n) && K.delete(e, {
    reverse: r === "backward"
  });
}, Ip = (t, e) => [h.start(t, e), h.end(t, e)];
function Us(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ks(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Us(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Us(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Lp = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return h.above(e, Ks(Ks({}, r), {}, {
    match: (n) => re.isElement(n) && h.isElementReadOnly(e, n)
  }));
}, Vp = (t, e) => h.point(t, e, {
  edge: "end"
}), _p = (t, e) => {
  var r = h.path(t, e, {
    edge: "start"
  });
  return h.node(t, r);
}, Wp = (t, e) => {
  var r = h.range(t, e);
  return Z.fragment(t, r);
};
function Gs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ys(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Gs(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Gs(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var zp = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return h.above(e, Ys(Ys({}, r), {}, {
    match: (n) => re.isElement(n) && h.isVoid(e, n)
  }));
}, Hp = (t, e) => e.children.some((r) => re.isElement(r) && h.isBlock(t, r)), qp = (t, e) => e.children.some((r) => ae.isText(r) || h.isInline(t, r)), Up = (t, e) => Z.has(t, e), Kp = (t, e) => e.children.every((r) => ae.isText(r)), Gp = (t) => {
  K.splitNodes(t, {
    always: !0
  });
}, Yp = (t, e, r) => {
  K.insertNodes(t, e, r);
}, Xp = (t) => {
  K.splitNodes(t, {
    always: !0
  });
};
function Xs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xs(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Xs(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Zp = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: i
  } = e;
  if (a) {
    if (i) {
      var o = Jp({
        text: r
      }, i);
      K.insertNodes(e, o, {
        at: n.at,
        voids: n.voids
      });
    } else
      K.insertText(e, r, n);
    e.marks = null;
  }
}, Qp = (t, e) => !t.isInline(e), em = (t, e, r) => h.isStart(t, e, r) || h.isEnd(t, e, r), tm = (t, e) => {
  var {
    children: r
  } = e, [n] = r;
  return r.length === 0 || r.length === 1 && ae.isText(n) && n.text === "" && !t.isVoid(e);
}, rm = (t, e, r) => {
  var n = h.end(t, r);
  return ge.equals(e, n);
}, nm = (t) => {
  var e = rf.get(t);
  return e === void 0 ? !0 : e;
}, am = (t, e, r) => {
  if (e.offset !== 0)
    return !1;
  var n = h.start(t, r);
  return ge.equals(e, n);
}, im = (t, e) => {
  var r = h.path(t, e, {
    edge: "end"
  });
  return h.node(t, r);
}, om = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.path(e, r, n), i = Z.leaf(e, a);
  return [i, a];
};
function um(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = t.selection,
      reverse: n = !1,
      voids: a = !1
    } = e, {
      match: i
    } = e;
    if (i == null && (i = () => !0), !!r) {
      var o = [], u = h.path(t, r);
      for (var [s, l] of Z.levels(t, u))
        if (i(s, l) && (o.push([s, l]), !a && re.isElement(s) && h.isVoid(t, s)))
          break;
      n && o.reverse(), yield* o;
    }
  }();
}
var sm = ["text"], lm = ["text"], cm = function(e) {
  var {
    marks: r,
    selection: n
  } = e;
  if (!n)
    return null;
  var {
    anchor: a,
    focus: i
  } = n;
  if (r)
    return r;
  if (I.isExpanded(n)) {
    var o = h.isEnd(e, a, a.path);
    if (o) {
      var u = h.after(e, a);
      u && (a = u);
    }
    var [s] = h.nodes(e, {
      match: ae.isText,
      at: {
        anchor: a,
        focus: i
      }
    });
    if (s) {
      var [l] = s, c = cr(l, sm);
      return c;
    } else
      return {};
  }
  var {
    path: d
  } = a, [v] = h.leaf(e, d);
  if (a.offset === 0) {
    var D = h.previous(e, {
      at: d,
      match: ae.isText
    }), m = h.above(e, {
      match: (F) => re.isElement(F) && h.isVoid(e, F) && e.markableVoid(F)
    });
    if (!m) {
      var f = h.above(e, {
        match: (F) => re.isElement(F) && h.isBlock(e, F)
      });
      if (D && f) {
        var [g, p] = D, [, b] = f;
        E.isAncestor(b, p) && (v = g);
      }
    }
  }
  var C = cr(v, lm);
  return C;
}, fm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: i,
    at: o = e.selection
  } = r;
  if (o) {
    var u = h.after(e, o, {
      voids: a
    });
    if (u) {
      var [, s] = h.last(e, []), l = [u.path, s];
      if (E.isPath(o) && o.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (i == null)
        if (E.isPath(o)) {
          var [c] = h.parent(e, o);
          i = (v) => c.children.includes(v);
        } else
          i = () => !0;
      var [d] = h.nodes(e, {
        at: l,
        match: i,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, dm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.path(e, r, n), i = Z.get(e, a);
  return [i, a];
};
function vm(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = t.selection,
      mode: n = "all",
      universal: a = !1,
      reverse: i = !1,
      voids: o = !1,
      ignoreNonSelectable: u = !1
    } = e, {
      match: s
    } = e;
    if (s || (s = () => !0), !!r) {
      var l, c;
      if (Jg.isSpan(r))
        l = r[0], c = r[1];
      else {
        var d = h.path(t, r, {
          edge: "start"
        }), v = h.path(t, r, {
          edge: "end"
        });
        l = i ? v : d, c = i ? d : v;
      }
      var D = Z.nodes(t, {
        reverse: i,
        from: l,
        to: c,
        pass: (F) => {
          var [B] = F;
          return re.isElement(B) ? !!(!o && (h.isVoid(t, B) || h.isElementReadOnly(t, B)) || u && !h.isSelectable(t, B)) : !1;
        }
      }), m = [], f;
      for (var [g, p] of D)
        if (!(u && re.isElement(g) && !h.isSelectable(t, g))) {
          var b = f && E.compare(p, f[1]) === 0;
          if (!(n === "highest" && b)) {
            if (!s(g, p)) {
              if (a && !b && ae.isText(g))
                return;
              continue;
            }
            if (n === "lowest" && b) {
              f = [g, p];
              continue;
            }
            var C = n === "lowest" ? f : [g, p];
            C && (a ? m.push(C) : yield C), f = [g, p];
          }
        }
      n === "lowest" && f && (a ? m.push(f) : yield f), a && (yield* m);
    }
  }();
}
var hm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = r, i = (c) => ei.get(c) || [], o = (c) => ti.get(c) || /* @__PURE__ */ new Set(), u = (c) => {
    var d = i(c).pop(), v = d.join(",");
    return o(c).delete(v), d;
  };
  if (h.isNormalizing(e)) {
    if (n) {
      var s = Array.from(Z.nodes(e), (c) => {
        var [, d] = c;
        return d;
      }), l = new Set(s.map((c) => c.join(",")));
      ei.set(e, s), ti.set(e, l);
    }
    i(e).length !== 0 && h.withoutNormalizing(e, () => {
      for (var c of i(e))
        if (Z.has(e, c)) {
          var d = h.node(e, c), [v, D] = d;
          re.isElement(v) && v.children.length === 0 && e.normalizeNode(d, {
            operation: a
          });
        }
      for (var m = i(e), f = m.length, g = 0; m.length !== 0; ) {
        if (!e.shouldNormalize({
          dirtyPaths: m,
          iteration: g,
          initialDirtyPathsLength: f,
          operation: a
        }))
          return;
        var p = u(e);
        if (Z.has(e, p)) {
          var b = h.node(e, p);
          e.normalizeNode(b, {
            operation: a
          });
        }
        g++, m = i(e);
      }
    });
  }
}, gm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.path(e, r, n), i = E.parent(a), o = h.node(e, i);
  return o;
}, pm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: u
      } = i, s = h.pathRefs(e);
      return s.delete(i), i.current = null, u;
    }
  }, o = h.pathRefs(e);
  return o.add(i), i;
}, mm = (t) => {
  var e = As.get(t);
  return e || (e = /* @__PURE__ */ new Set(), As.set(t, e)), e;
}, Dm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: i
  } = n;
  if (E.isPath(r)) {
    if (i === "start") {
      var [, o] = Z.first(e, r);
      r = o;
    } else if (i === "end") {
      var [, u] = Z.last(e, r);
      r = u;
    }
  }
  return I.isRange(r) && (i === "start" ? r = I.start(r) : i === "end" ? r = I.end(r) : r = E.common(r.anchor.path, r.focus.path)), ge.isPoint(r) && (r = r.path), a != null && (r = r.slice(0, a)), r;
}, bm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: u
      } = i, s = h.pointRefs(e);
      return s.delete(i), i.current = null, u;
    }
  }, o = h.pointRefs(e);
  return o.add(i), i;
}, Cm = (t) => {
  var e = Bs.get(t);
  return e || (e = /* @__PURE__ */ new Set(), Bs.set(t, e)), e;
}, ym = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (E.isPath(r)) {
    var i;
    if (a === "end") {
      var [, o] = Z.last(e, r);
      i = o;
    } else {
      var [, u] = Z.first(e, r);
      i = u;
    }
    var s = Z.get(e, i);
    if (!ae.isText(s))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(r, "] because it has no ").concat(a, " text node."));
    return {
      path: i,
      offset: a === "end" ? s.text.length : 0
    };
  }
  if (I.isRange(r)) {
    var [l, c] = I.edges(r);
    return a === "start" ? l : c;
  }
  return r;
};
function Em(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = t.selection,
      unit: n = "offset",
      reverse: a = !1,
      voids: i = !1,
      ignoreNonSelectable: o = !1
    } = e;
    if (!r)
      return;
    var u = h.range(t, r), [s, l] = I.edges(u), c = a ? l : s, d = !1, v = "", D = 0, m = 0, f = 0;
    for (var [g, p] of h.nodes(t, {
      at: r,
      reverse: a,
      voids: i,
      ignoreNonSelectable: o
    })) {
      if (re.isElement(g)) {
        if (!i && (t.isVoid(g) || t.isElementReadOnly(g))) {
          yield h.start(t, p);
          continue;
        }
        if (t.isInline(g))
          continue;
        if (h.hasInlines(t, g)) {
          var b = E.isAncestor(p, l.path) ? l : h.end(t, p), C = E.isAncestor(p, s.path) ? s : h.start(t, p);
          v = h.string(t, {
            anchor: C,
            focus: b
          }, {
            voids: i
          }), d = !0;
        }
      }
      if (ae.isText(g)) {
        var F = E.equals(p, c.path);
        for (F ? (m = a ? c.offset : g.text.length - c.offset, f = c.offset) : (m = g.text.length, f = a ? m : 0), (F || d || n === "offset") && (yield {
          path: p,
          offset: f
        }, d = !1); ; ) {
          if (D === 0) {
            if (v === "")
              break;
            D = B(v, n, a), v = Bu(v, D, a)[1];
          }
          if (f = a ? f - D : f + D, m = m - D, m < 0) {
            D = -m;
            break;
          }
          D = 0, yield {
            path: p,
            offset: f
          };
        }
      }
    }
    function B(A, w, M) {
      return w === "character" ? Au(A, M) : w === "word" ? np(A, M) : w === "line" || w === "block" ? A.length : 1;
    }
  }();
}
var wm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: i,
    at: o = e.selection
  } = r;
  if (o) {
    var u = h.before(e, o, {
      voids: a
    });
    if (u) {
      var [, s] = h.first(e, []), l = [u.path, s];
      if (E.isPath(o) && o.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (i == null)
        if (E.isPath(o)) {
          var [c] = h.parent(e, o);
          i = (v) => c.children.includes(v);
        } else
          i = () => !0;
      var [d] = h.nodes(e, {
        reverse: !0,
        at: l,
        match: i,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, Fm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: u
      } = i, s = h.rangeRefs(e);
      return s.delete(i), i.current = null, u;
    }
  }, o = h.rangeRefs(e);
  return o.add(i), i;
}, Am = (t) => {
  var e = Os.get(t);
  return e || (e = /* @__PURE__ */ new Set(), Os.set(t, e)), e;
}, Bm = (t, e, r) => {
  if (I.isRange(e) && !r)
    return e;
  var n = h.start(t, e), a = h.end(t, r || e);
  return {
    anchor: n,
    focus: a
  };
};
function Js(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Om(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Js(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Js(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Sm = (t, e) => {
  var {
    selection: r
  } = t;
  if (r) {
    var n = (c, d) => {
      if (!ae.isText(c))
        return !1;
      var [v, D] = h.parent(t, d);
      return !t.isVoid(v) || t.markableVoid(v);
    }, a = I.isExpanded(r), i = !1;
    if (!a) {
      var [o, u] = h.node(t, r);
      if (o && n(o, u)) {
        var [s] = h.parent(t, u);
        i = s && t.markableVoid(s);
      }
    }
    if (a || i)
      K.unsetNodes(t, e, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var l = Om({}, h.marks(t) || {});
      delete l[e], t.marks = l, Kn.get(t) || t.onChange();
    }
  }
}, xm = (t, e) => {
  rf.set(t, e);
}, Pm = (t, e) => h.point(t, e, {
  edge: "start"
}), Tm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, i = h.range(e, r), [o, u] = I.edges(i), s = "";
  for (var [l, c] of h.nodes(e, {
    at: i,
    match: ae.isText,
    voids: a
  })) {
    var d = l.text;
    E.equals(c, u.path) && (d = d.slice(0, u.offset)), E.equals(c, o.path) && (d = d.slice(o.offset)), s += d;
  }
  return s;
}, Rm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [i, o] = I.edges(r);
  if (i.offset !== 0 || o.offset !== 0 || I.isCollapsed(r) || E.hasPrevious(o.path))
    return r;
  var u = h.above(e, {
    at: o,
    match: (m) => re.isElement(m) && h.isBlock(e, m),
    voids: a
  }), s = u ? u[1] : [], l = h.start(e, i), c = {
    anchor: l,
    focus: o
  }, d = !0;
  for (var [v, D] of h.nodes(e, {
    at: c,
    match: ae.isText,
    reverse: !0,
    voids: a
  })) {
    if (d) {
      d = !1;
      continue;
    }
    if (v.text !== "" || E.isBefore(D, s)) {
      o = {
        path: D,
        offset: v.text.length
      };
      break;
    }
  }
  return {
    anchor: i,
    focus: o
  };
}, km = (t, e) => {
  var r = h.isNormalizing(t);
  h.setNormalizing(t, !1);
  try {
    e();
  } finally {
    h.setNormalizing(t, r);
  }
  h.normalize(t);
}, jm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(e, () => {
    var n, a, {
      reverse: i = !1,
      unit: o = "character",
      distance: u = 1,
      voids: s = !1
    } = r, {
      at: l = e.selection,
      hanging: c = !1
    } = r;
    if (l) {
      var d = !1;
      if (I.isRange(l) && I.isCollapsed(l) && (d = !0, l = l.anchor), ge.isPoint(l)) {
        var v = h.void(e, {
          at: l,
          mode: "highest"
        });
        if (!s && v) {
          var [, D] = v;
          l = D;
        } else {
          var m = {
            unit: o,
            distance: u
          }, f = i ? h.before(e, l, m) || h.start(e, []) : h.after(e, l, m) || h.end(e, []);
          l = {
            anchor: l,
            focus: f
          }, c = !0;
        }
      }
      if (E.isPath(l)) {
        K.removeNodes(e, {
          at: l,
          voids: s
        });
        return;
      }
      if (!I.isCollapsed(l)) {
        if (!c) {
          var [, g] = I.edges(l), p = h.end(e, []);
          ge.equals(g, p) || (l = h.unhangRange(e, l, {
            voids: s
          }));
        }
        var [b, C] = I.edges(l), F = h.above(e, {
          match: (J) => re.isElement(J) && h.isBlock(e, J),
          at: b,
          voids: s
        }), B = h.above(e, {
          match: (J) => re.isElement(J) && h.isBlock(e, J),
          at: C,
          voids: s
        }), A = F && B && !E.equals(F[1], B[1]), w = E.equals(b.path, C.path), M = s ? null : (n = h.void(e, {
          at: b,
          mode: "highest"
        })) !== null && n !== void 0 ? n : h.elementReadOnly(e, {
          at: b,
          mode: "highest"
        }), x = s ? null : (a = h.void(e, {
          at: C,
          mode: "highest"
        })) !== null && a !== void 0 ? a : h.elementReadOnly(e, {
          at: C,
          mode: "highest"
        });
        if (M) {
          var P = h.before(e, b);
          P && F && E.isAncestor(F[1], P.path) && (b = P);
        }
        if (x) {
          var V = h.after(e, C);
          V && B && E.isAncestor(B[1], V.path) && (C = V);
        }
        var T = [], k;
        for (var N of h.nodes(e, {
          at: l,
          voids: s
        })) {
          var [j, $] = N;
          k && E.compare($, k) === 0 || (!s && re.isElement(j) && (h.isVoid(e, j) || h.isElementReadOnly(e, j)) || !E.isCommon($, b.path) && !E.isCommon($, C.path)) && (T.push(N), k = $);
        }
        var S = Array.from(T, (J) => {
          var [, me] = J;
          return h.pathRef(e, me);
        }), L = h.pointRef(e, b), q = h.pointRef(e, C), U = "";
        if (!w && !M) {
          var Y = L.current, [Q] = h.leaf(e, Y), {
            path: ie
          } = Y, {
            offset: O
          } = b, _ = Q.text.slice(O);
          _.length > 0 && (e.apply({
            type: "remove_text",
            path: ie,
            offset: O,
            text: _
          }), U = _);
        }
        if (S.reverse().map((J) => J.unref()).filter((J) => J !== null).forEach((J) => K.removeNodes(e, {
          at: J,
          voids: s
        })), !x) {
          var z = q.current, [X] = h.leaf(e, z), {
            path: ue
          } = z, ne = w ? b.offset : 0, se = X.text.slice(ne, C.offset);
          se.length > 0 && (e.apply({
            type: "remove_text",
            path: ue,
            offset: ne,
            text: se
          }), U = se);
        }
        !w && A && q.current && L.current && K.mergeNodes(e, {
          at: q.current,
          hanging: !0,
          voids: s
        }), d && i && o === "character" && U.length > 1 && U.match(/[\u0E00-\u0E7F]+/) && K.insertText(e, U.slice(0, U.length - u));
        var fe = L.unref(), he = q.unref(), Ee = i ? fe || he : he || fe;
        r.at == null && Ee && K.select(e, Ee);
      }
    }
  });
}, Mm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h.withoutNormalizing(e, () => {
    var {
      hanging: a = !1,
      voids: i = !1
    } = n, {
      at: o = Fu(e),
      batchDirty: u = !0
    } = n;
    if (r.length) {
      if (I.isRange(o))
        if (a || (o = h.unhangRange(e, o, {
          voids: i
        })), I.isCollapsed(o))
          o = o.anchor;
        else {
          var [, s] = I.edges(o);
          if (!i && h.void(e, {
            at: s
          }))
            return;
          var l = h.pointRef(e, s);
          K.delete(e, {
            at: o
          }), o = l.unref();
        }
      else
        E.isPath(o) && (o = h.start(e, o));
      if (!(!i && h.void(e, {
        at: o
      }))) {
        var c = h.above(e, {
          at: o,
          match: (_) => re.isElement(_) && h.isInline(e, _),
          mode: "highest",
          voids: i
        });
        if (c) {
          var [, d] = c;
          if (h.isEnd(e, o, d)) {
            var v = h.after(e, d);
            o = v;
          } else if (h.isStart(e, o, d)) {
            var D = h.before(e, d);
            o = D;
          }
        }
        var m = h.above(e, {
          match: (_) => re.isElement(_) && h.isBlock(e, _),
          at: o,
          voids: i
        }), [, f] = m, g = h.isStart(e, o, f), p = h.isEnd(e, o, f), b = g && p, C = !g || g && p, F = !p, [, B] = Z.first({
          children: r
        }, []), [, A] = Z.last({
          children: r
        }, []), w = [], M = (_) => {
          var [z, X] = _, ue = X.length === 0;
          return ue ? !1 : b ? !0 : !(C && E.isAncestor(X, B) && re.isElement(z) && !e.isVoid(z) && !e.isInline(z) || F && E.isAncestor(X, A) && re.isElement(z) && !e.isVoid(z) && !e.isInline(z));
        };
        for (var x of Z.nodes({
          children: r
        }, {
          pass: M
        }))
          M(x) && w.push(x);
        var P = [], V = [], T = [], k = !0, N = !1;
        for (var [j] of w)
          re.isElement(j) && !e.isInline(j) ? (k = !1, N = !0, V.push(j)) : k ? P.push(j) : T.push(j);
        var [$] = h.nodes(e, {
          at: o,
          match: (_) => ae.isText(_) || h.isInline(e, _),
          mode: "highest",
          voids: i
        }), [, S] = $, L = h.isStart(e, o, S), q = h.isEnd(e, o, S), U = h.pathRef(e, p && !T.length ? E.next(f) : f), Y = h.pathRef(e, q ? E.next(S) : S);
        K.splitNodes(e, {
          at: o,
          match: (_) => N ? re.isElement(_) && h.isBlock(e, _) : ae.isText(_) || h.isInline(e, _),
          mode: N ? "lowest" : "highest",
          always: N && (!g || P.length > 0) && (!p || T.length > 0),
          voids: i
        });
        var Q = h.pathRef(e, !L || L && q ? E.next(S) : S);
        if (K.insertNodes(e, P, {
          at: Q.current,
          match: (_) => ae.isText(_) || h.isInline(e, _),
          mode: "highest",
          voids: i,
          batchDirty: u
        }), b && !P.length && V.length && !T.length && K.delete(e, {
          at: f,
          voids: i
        }), K.insertNodes(e, V, {
          at: U.current,
          match: (_) => re.isElement(_) && h.isBlock(e, _),
          mode: "lowest",
          voids: i,
          batchDirty: u
        }), K.insertNodes(e, T, {
          at: Y.current,
          match: (_) => ae.isText(_) || h.isInline(e, _),
          mode: "highest",
          voids: i,
          batchDirty: u
        }), !n.at) {
          var ie;
          if (T.length > 0 && Y.current ? ie = E.previous(Y.current) : V.length > 0 && U.current ? ie = E.previous(U.current) : Q.current && (ie = E.previous(Q.current)), ie) {
            var O = h.end(e, ie);
            K.select(e, O);
          }
        }
        Q.unref(), U.unref(), Y.unref();
      }
    }
  });
}, Nm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: n = "anchor"
  } = r, {
    selection: a
  } = e;
  if (a) {
    if (n === "anchor")
      K.select(e, a.anchor);
    else if (n === "focus")
      K.select(e, a.focus);
    else if (n === "start") {
      var [i] = I.edges(a);
      K.select(e, i);
    } else if (n === "end") {
      var [, o] = I.edges(a);
      K.select(e, o);
    }
  } else
    return;
}, $m = (t) => {
  var {
    selection: e
  } = t;
  e && t.apply({
    type: "set_selection",
    properties: e,
    newProperties: null
  });
}, Im = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = e, {
    distance: a = 1,
    unit: i = "character",
    reverse: o = !1
  } = r, {
    edge: u = null
  } = r;
  if (n) {
    u === "start" && (u = I.isBackward(n) ? "focus" : "anchor"), u === "end" && (u = I.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: s,
      focus: l
    } = n, c = {
      distance: a,
      unit: i,
      ignoreNonSelectable: !0
    }, d = {};
    if (u == null || u === "anchor") {
      var v = o ? h.before(e, s, c) : h.after(e, s, c);
      v && (d.anchor = v);
    }
    if (u == null || u === "focus") {
      var D = o ? h.before(e, l, c) : h.after(e, l, c);
      D && (d.focus = D);
    }
    K.setSelection(e, d);
  }
}, Lm = (t, e) => {
  var {
    selection: r
  } = t;
  if (e = h.range(t, e), r) {
    K.setSelection(t, e);
    return;
  }
  if (!I.isRange(e))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(tt.stringify(e)));
  t.apply({
    type: "set_selection",
    properties: r,
    newProperties: e
  });
};
function Zs(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Qs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zs(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Zs(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Vm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a
  } = e, {
    edge: i = "both"
  } = n;
  if (a) {
    i === "start" && (i = I.isBackward(a) ? "focus" : "anchor"), i === "end" && (i = I.isBackward(a) ? "anchor" : "focus");
    var {
      anchor: o,
      focus: u
    } = a, s = i === "anchor" ? o : u;
    K.setSelection(e, {
      [i === "anchor" ? "anchor" : "focus"]: Qs(Qs({}, s), r)
    });
  }
}, _m = (t, e) => {
  var {
    selection: r
  } = t, n = {}, a = {};
  if (r) {
    for (var i in e)
      (i === "anchor" && e.anchor != null && !ge.equals(e.anchor, r.anchor) || i === "focus" && e.focus != null && !ge.equals(e.focus, r.focus) || i !== "anchor" && i !== "focus" && e[i] !== r[i]) && (n[i] = r[i], a[i] = e[i]);
    Object.keys(n).length > 0 && t.apply({
      type: "set_selection",
      properties: n,
      newProperties: a
    });
  }
}, Wm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h.withoutNormalizing(e, () => {
    var {
      hanging: a = !1,
      voids: i = !1,
      mode: o = "lowest",
      batchDirty: u = !0
    } = n, {
      at: s,
      match: l,
      select: c
    } = n;
    if (Z.isNode(r) && (r = [r]), r.length !== 0) {
      var [d] = r;
      if (s || (s = Fu(e), c !== !1 && (c = !0)), c == null && (c = !1), I.isRange(s))
        if (a || (s = h.unhangRange(e, s, {
          voids: i
        })), I.isCollapsed(s))
          s = s.anchor;
        else {
          var [, v] = I.edges(s), D = h.pointRef(e, v);
          K.delete(e, {
            at: s
          }), s = D.unref();
        }
      if (ge.isPoint(s)) {
        l == null && (ae.isText(d) ? l = (P) => ae.isText(P) : e.isInline(d) ? l = (P) => ae.isText(P) || h.isInline(e, P) : l = (P) => re.isElement(P) && h.isBlock(e, P));
        var [m] = h.nodes(e, {
          at: s.path,
          match: l,
          mode: o,
          voids: i
        });
        if (m) {
          var [, f] = m, g = h.pathRef(e, f), p = h.isEnd(e, s, f);
          K.splitNodes(e, {
            at: s,
            match: l,
            mode: o,
            voids: i
          });
          var b = g.unref();
          s = p ? E.next(b) : b;
        } else
          return;
      }
      var C = E.parent(s), F = s[s.length - 1];
      if (!(!i && h.void(e, {
        at: C
      }))) {
        if (u) {
          var B = [], A = E.levels(C);
          Ap(e, () => {
            var P = function() {
              var k = C.concat(F);
              F++;
              var N = {
                type: "insert_node",
                path: k,
                node: V
              };
              e.apply(N), s = E.next(s), B.push(N), ae.isText ? A.push(...Array.from(Z.nodes(V), (j) => {
                var [, $] = j;
                return k.concat($);
              })) : A.push(k);
            };
            for (var V of r)
              P();
          }, () => {
            af(e, A, (P) => {
              var V = P;
              for (var T of B)
                if (E.operationCanTransformPath(T) && (V = E.transform(V, T), !V))
                  return null;
              return V;
            });
          });
        } else
          for (var w of r) {
            var M = C.concat(F);
            F++, e.apply({
              type: "insert_node",
              path: M,
              node: w
            }), s = E.next(s);
          }
        if (s = E.previous(s), c) {
          var x = h.end(e, s);
          x && K.select(e, x);
        }
      }
    }
  });
}, zm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(e, () => {
    var {
      at: n = e.selection,
      mode: a = "lowest",
      voids: i = !1
    } = r, {
      match: o
    } = r;
    if (o == null && (o = E.isPath(n) ? jn(e, n) : (F) => re.isElement(F) && h.isBlock(e, F)), !!n) {
      var u = h.nodes(e, {
        at: n,
        match: o,
        mode: a,
        voids: i
      }), s = Array.from(u, (F) => {
        var [, B] = F;
        return h.pathRef(e, B);
      });
      for (var l of s) {
        var c = l.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var d = h.node(e, E.parent(c)), [v, D] = d, m = c[c.length - 1], {
          length: f
        } = v.children;
        if (f === 1) {
          var g = E.next(D);
          K.moveNodes(e, {
            at: c,
            to: g,
            voids: i
          }), K.removeNodes(e, {
            at: D,
            voids: i
          });
        } else if (m === 0)
          K.moveNodes(e, {
            at: c,
            to: D,
            voids: i
          });
        else if (m === f - 1) {
          var p = E.next(D);
          K.moveNodes(e, {
            at: c,
            to: p,
            voids: i
          });
        } else {
          var b = E.next(c), C = E.next(D);
          K.splitNodes(e, {
            at: b,
            voids: i
          }), K.moveNodes(e, {
            at: c,
            to: C,
            voids: i
          });
        }
      }
    }
  });
}, Hm = ["text"], qm = ["children"], of = (t, e) => {
  if (re.isElement(e)) {
    var r = e;
    return h.isVoid(t, e) ? !0 : r.children.length === 1 ? of(t, r.children[0]) : !1;
  } else
    return !h.isEditor(e);
}, Um = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(e, () => {
    var {
      match: n,
      at: a = e.selection
    } = r, {
      hanging: i = !1,
      voids: o = !1,
      mode: u = "lowest"
    } = r;
    if (a) {
      if (n == null)
        if (E.isPath(a)) {
          var [s] = h.parent(e, a);
          n = (P) => s.children.includes(P);
        } else
          n = (P) => re.isElement(P) && h.isBlock(e, P);
      if (!i && I.isRange(a) && (a = h.unhangRange(e, a, {
        voids: o
      })), I.isRange(a))
        if (I.isCollapsed(a))
          a = a.anchor;
        else {
          var [, l] = I.edges(a), c = h.pointRef(e, l);
          K.delete(e, {
            at: a
          }), a = c.unref(), r.at == null && K.select(e, a);
        }
      var [d] = h.nodes(e, {
        at: a,
        match: n,
        voids: o,
        mode: u
      }), v = h.previous(e, {
        at: a,
        match: n,
        voids: o,
        mode: u
      });
      if (!(!d || !v)) {
        var [D, m] = d, [f, g] = v;
        if (!(m.length === 0 || g.length === 0)) {
          var p = E.next(g), b = E.common(m, g), C = E.isSibling(m, g), F = Array.from(h.levels(e, {
            at: m
          }), (P) => {
            var [V] = P;
            return V;
          }).slice(b.length).slice(0, -1), B = h.above(e, {
            at: m,
            mode: "highest",
            match: (P) => F.includes(P) && of(e, P)
          }), A = B && h.pathRef(e, B[1]), w, M;
          if (ae.isText(D) && ae.isText(f)) {
            var x = cr(D, Hm);
            M = f.text.length, w = x;
          } else if (re.isElement(D) && re.isElement(f)) {
            var x = cr(D, qm);
            M = f.children.length, w = x;
          } else
            throw new Error("Cannot merge the node at path [".concat(m, "] with the previous sibling because it is not the same kind: ").concat(tt.stringify(D), " ").concat(tt.stringify(f)));
          C || K.moveNodes(e, {
            at: m,
            to: p,
            voids: o
          }), A && K.removeNodes(e, {
            at: A.current,
            voids: o
          }), re.isElement(f) && h.isEmpty(e, f) || ae.isText(f) && f.text === "" && g[g.length - 1] !== 0 ? K.removeNodes(e, {
            at: g,
            voids: o
          }) : e.apply({
            type: "merge_node",
            path: p,
            position: M,
            properties: w
          }), A && A.unref();
        }
      }
    }
  });
}, Km = (t, e) => {
  h.withoutNormalizing(t, () => {
    var {
      to: r,
      at: n = t.selection,
      mode: a = "lowest",
      voids: i = !1
    } = e, {
      match: o
    } = e;
    if (n) {
      o == null && (o = E.isPath(n) ? jn(t, n) : (D) => re.isElement(D) && h.isBlock(t, D));
      var u = h.pathRef(t, r), s = h.nodes(t, {
        at: n,
        match: o,
        mode: a,
        voids: i
      }), l = Array.from(s, (D) => {
        var [, m] = D;
        return h.pathRef(t, m);
      });
      for (var c of l) {
        var d = c.unref(), v = u.current;
        d.length !== 0 && t.apply({
          type: "move_node",
          path: d,
          newPath: v
        }), u.current && E.isSibling(v, d) && E.isAfter(v, d) && (u.current = E.next(u.current));
      }
      u.unref();
    }
  });
}, Gm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(e, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: i = "lowest"
    } = r, {
      at: o = e.selection,
      match: u
    } = r;
    if (o) {
      u == null && (u = E.isPath(o) ? jn(e, o) : (D) => re.isElement(D) && h.isBlock(e, D)), !n && I.isRange(o) && (o = h.unhangRange(e, o, {
        voids: a
      }));
      var s = h.nodes(e, {
        at: o,
        match: u,
        mode: i,
        voids: a
      }), l = Array.from(s, (D) => {
        var [, m] = D;
        return h.pathRef(e, m);
      });
      for (var c of l) {
        var d = c.unref();
        if (d) {
          var [v] = h.node(e, d);
          e.apply({
            type: "remove_node",
            path: d,
            node: v
          });
        }
      }
    }
  });
}, Ym = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h.withoutNormalizing(e, () => {
    var {
      match: a,
      at: i = e.selection,
      compare: o,
      merge: u
    } = n, {
      hanging: s = !1,
      mode: l = "lowest",
      split: c = !1,
      voids: d = !1
    } = n;
    if (i) {
      if (a == null && (a = E.isPath(i) ? jn(e, i) : (M) => re.isElement(M) && h.isBlock(e, M)), !s && I.isRange(i) && (i = h.unhangRange(e, i, {
        voids: d
      })), c && I.isRange(i)) {
        if (I.isCollapsed(i) && h.leaf(e, i.anchor)[0].text.length > 0)
          return;
        var v = h.rangeRef(e, i, {
          affinity: "inward"
        }), [D, m] = I.edges(i), f = l === "lowest" ? "lowest" : "highest", g = h.isEnd(e, m, m.path);
        K.splitNodes(e, {
          at: m,
          match: a,
          mode: f,
          voids: d,
          always: !g
        });
        var p = h.isStart(e, D, D.path);
        K.splitNodes(e, {
          at: D,
          match: a,
          mode: f,
          voids: d,
          always: !p
        }), i = v.unref(), n.at == null && K.select(e, i);
      }
      o || (o = (M, x) => M !== x);
      for (var [b, C] of h.nodes(e, {
        at: i,
        match: a,
        mode: l,
        voids: d
      })) {
        var F = {}, B = {};
        if (C.length !== 0) {
          var A = !1;
          for (var w in r)
            w === "children" || w === "text" || o(r[w], b[w]) && (A = !0, b.hasOwnProperty(w) && (F[w] = b[w]), u ? r[w] != null && (B[w] = u(b[w], r[w])) : r[w] != null && (B[w] = r[w]));
          A && e.apply({
            type: "set_node",
            path: C,
            properties: F,
            newProperties: B
          });
        }
      }
    }
  });
}, Xm = (t, e) => {
  if (I.isCollapsed(e))
    return e.anchor;
  var [, r] = I.edges(e), n = h.pointRef(t, r);
  return K.delete(t, {
    at: e
  }), n.unref();
}, Jm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      voids: a = !1
    } = r, {
      match: i,
      at: o = e.selection,
      height: u = 0,
      always: s = !1
    } = r;
    if (i == null && (i = (q) => re.isElement(q) && h.isBlock(e, q)), I.isRange(o) && (o = Xm(e, o)), E.isPath(o)) {
      var l = o, c = h.point(e, l), [d] = h.parent(e, l);
      i = (q) => q === d, u = c.path.length - l.length + 1, o = c, s = !0;
    }
    if (o) {
      var v = h.pointRef(e, o, {
        affinity: "backward"
      }), D;
      try {
        var [m] = h.nodes(e, {
          at: o,
          match: i,
          mode: n,
          voids: a
        });
        if (!m)
          return;
        var f = h.void(e, {
          at: o,
          mode: "highest"
        }), g = 0;
        if (!a && f) {
          var [p, b] = f;
          if (re.isElement(p) && e.isInline(p)) {
            var C = h.after(e, b);
            if (!C) {
              var F = {
                text: ""
              }, B = E.next(b);
              K.insertNodes(e, F, {
                at: B,
                voids: a
              }), C = h.point(e, B);
            }
            o = C, s = !0;
          }
          var A = o.path.length - b.length;
          u = A + 1, s = !0;
        }
        D = h.pointRef(e, o);
        var w = o.path.length - u, [, M] = m, x = o.path.slice(0, w), P = u === 0 ? o.offset : o.path[w] + g;
        for (var [V, T] of h.levels(e, {
          at: x,
          reverse: !0,
          voids: a
        })) {
          var k = !1;
          if (T.length < M.length || T.length === 0 || !a && re.isElement(V) && h.isVoid(e, V))
            break;
          var N = v.current, j = h.isEnd(e, N, T);
          if (s || !v || !h.isEdge(e, N, T)) {
            k = !0;
            var $ = Z.extractProps(V);
            e.apply({
              type: "split_node",
              path: T,
              position: P,
              properties: $
            });
          }
          P = T[T.length - 1] + (k || j ? 1 : 0);
        }
        if (r.at == null) {
          var S = D.current || h.end(e, []);
          K.select(e, S);
        }
      } finally {
        var L;
        v.unref(), (L = D) === null || L === void 0 || L.unref();
      }
    }
  });
}, Zm = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(r) || (r = [r]);
  var a = {};
  for (var i of r)
    a[i] = null;
  K.setNodes(e, a, n);
}, Qm = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: i = !1
    } = r, {
      at: o = e.selection,
      match: u
    } = r;
    if (o) {
      u == null && (u = E.isPath(o) ? jn(e, o) : (D) => re.isElement(D) && h.isBlock(e, D)), E.isPath(o) && (o = h.range(e, o));
      var s = I.isRange(o) ? h.rangeRef(e, o) : null, l = h.nodes(e, {
        at: o,
        match: u,
        mode: n,
        voids: i
      }), c = Array.from(
        l,
        (D) => {
          var [, m] = D;
          return h.pathRef(e, m);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), d = function() {
        var m = v.unref(), [f] = h.node(e, m), g = h.range(e, m);
        a && s && (g = I.intersection(s.current, g)), K.liftNodes(e, {
          at: g,
          match: (p) => re.isAncestor(f) && f.children.includes(p),
          voids: i
        });
      };
      for (var v of c)
        d();
      s && s.unref();
    }
  });
};
function el(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function tl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? el(Object(r), !0).forEach(function(n) {
      ft(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : el(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var e0 = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h.withoutNormalizing(e, () => {
    var {
      mode: a = "lowest",
      split: i = !1,
      voids: o = !1
    } = n, {
      match: u,
      at: s = e.selection
    } = n;
    if (s) {
      if (u == null && (E.isPath(s) ? u = jn(e, s) : e.isInline(r) ? u = (g) => re.isElement(g) && h.isInline(e, g) || ae.isText(g) : u = (g) => re.isElement(g) && h.isBlock(e, g)), i && I.isRange(s)) {
        var [l, c] = I.edges(s), d = h.rangeRef(e, s, {
          affinity: "inward"
        });
        K.splitNodes(e, {
          at: c,
          match: u,
          voids: o
        }), K.splitNodes(e, {
          at: l,
          match: u,
          voids: o
        }), s = d.unref(), n.at == null && K.select(e, s);
      }
      var v = Array.from(h.nodes(e, {
        at: s,
        match: e.isInline(r) ? (g) => re.isElement(g) && h.isBlock(e, g) : (g) => h.isEditor(g),
        mode: "lowest",
        voids: o
      })), D = function() {
        var p = I.isRange(s) ? I.intersection(s, h.range(e, f)) : s;
        if (!p)
          return 0;
        var b = Array.from(h.nodes(e, {
          at: p,
          match: u,
          mode: a,
          voids: o
        }));
        if (b.length > 0) {
          var [C] = b, F = b[b.length - 1], [, B] = C, [, A] = F;
          if (B.length === 0 && A.length === 0)
            return 0;
          var w = E.equals(B, A) ? E.parent(B) : E.common(B, A), M = h.range(e, B, A), x = h.node(e, w), [P] = x, V = w.length + 1, T = E.next(A.slice(0, V)), k = tl(tl({}, r), {}, {
            children: []
          });
          K.insertNodes(e, k, {
            at: T,
            voids: o
          }), K.moveNodes(e, {
            at: M,
            match: (N) => re.isAncestor(P) && P.children.includes(N),
            to: T.concat(0),
            voids: o
          });
        }
      }, m;
      for (var [, f] of v)
        m = D();
    }
  });
}, t0 = () => {
  var t = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => !1,
    isInline: () => !1,
    isSelectable: () => !0,
    isVoid: () => !1,
    markableVoid: () => !1,
    onChange: () => {
    },
    // Core
    apply: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Bp(t, ...n);
    },
    // Editor
    addMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Rp(t, ...n);
    },
    deleteBackward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Mp(t, ...n);
    },
    deleteForward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Np(t, ...n);
    },
    deleteFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $p(t, ...n);
    },
    getFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Sp(t, ...n);
    },
    insertBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Gp(t, ...n);
    },
    insertSoftBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Xp(t, ...n);
    },
    insertFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Mm(t, ...n);
    },
    insertNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Yp(t, ...n);
    },
    insertText: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Zp(t, ...n);
    },
    normalizeNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xp(t, ...n);
    },
    removeMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Sm(t, ...n);
    },
    getDirtyPaths: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Op(t, ...n);
    },
    shouldNormalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Pp(t, ...n);
    },
    // Editor interface
    above: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Tp(t, ...n);
    },
    after: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return kp(t, ...n);
    },
    before: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jp(t, ...n);
    },
    collapse: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Nm(t, ...n);
    },
    delete: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jm(t, ...n);
    },
    deselect: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $m(t, ...n);
    },
    edges: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ip(t, ...n);
    },
    elementReadOnly: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Lp(t, ...n);
    },
    end: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Vp(t, ...n);
    },
    first: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _p(t, ...n);
    },
    fragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Wp(t, ...n);
    },
    getMarks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return cm(t, ...n);
    },
    hasBlocks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Hp(t, ...n);
    },
    hasInlines: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return qp(t, ...n);
    },
    hasPath: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Up(t, ...n);
    },
    hasTexts: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Kp(t, ...n);
    },
    insertNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Wm(t, ...n);
    },
    isBlock: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Qp(t, ...n);
    },
    isEdge: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return em(t, ...n);
    },
    isEmpty: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return tm(t, ...n);
    },
    isEnd: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return rm(t, ...n);
    },
    isNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return nm(t, ...n);
    },
    isStart: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return am(t, ...n);
    },
    last: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return im(t, ...n);
    },
    leaf: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return om(t, ...n);
    },
    levels: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return um(t, ...n);
    },
    liftNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return zm(t, ...n);
    },
    mergeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Um(t, ...n);
    },
    move: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Im(t, ...n);
    },
    moveNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Km(t, ...n);
    },
    next: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return fm(t, ...n);
    },
    node: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return dm(t, ...n);
    },
    nodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vm(t, ...n);
    },
    normalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return hm(t, ...n);
    },
    parent: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gm(t, ...n);
    },
    path: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Dm(t, ...n);
    },
    pathRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pm(t, ...n);
    },
    pathRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return mm(t, ...n);
    },
    point: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ym(t, ...n);
    },
    pointRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return bm(t, ...n);
    },
    pointRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Cm(t, ...n);
    },
    positions: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Em(t, ...n);
    },
    previous: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wm(t, ...n);
    },
    range: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Bm(t, ...n);
    },
    rangeRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Fm(t, ...n);
    },
    rangeRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Am(t, ...n);
    },
    removeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Gm(t, ...n);
    },
    select: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Lm(t, ...n);
    },
    setNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ym(t, ...n);
    },
    setNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xm(t, ...n);
    },
    setPoint: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Vm(t, ...n);
    },
    setSelection: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _m(t, ...n);
    },
    splitNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Jm(t, ...n);
    },
    start: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Pm(t, ...n);
    },
    string: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Tm(t, ...n);
    },
    unhangRange: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Rm(t, ...n);
    },
    unsetNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Zm(t, ...n);
    },
    unwrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Qm(t, ...n);
    },
    void: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return zp(t, ...n);
    },
    withoutNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return km(t, ...n);
    },
    wrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return e0(t, ...n);
    }
  };
  return t;
}, Gr = [], r0 = function() {
  return Gr.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, n0 = function() {
  return Gr.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, rl = "ResizeObserver loop completed with undelivered notifications.", a0 = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: rl
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = rl), window.dispatchEvent(t);
}, ia;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ia || (ia = {}));
var Yr = function(t) {
  return Object.freeze(t);
}, i0 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.inlineSize = e, this.blockSize = r, Yr(this);
  }
  return t;
}(), uf = function() {
  function t(e, r, n, a) {
    return this.x = e, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Yr(this);
  }
  return t.prototype.toJSON = function() {
    var e = this, r = e.x, n = e.y, a = e.top, i = e.right, o = e.bottom, u = e.left, s = e.width, l = e.height;
    return { x: r, y: n, top: a, right: i, bottom: o, left: u, width: s, height: l };
  }, t.fromRect = function(e) {
    return new t(e.x, e.y, e.width, e.height);
  }, t;
}(), Ou = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, sf = function(t) {
  if (Ou(t)) {
    var e = t.getBBox(), r = e.width, n = e.height;
    return !r && !n;
  }
  var a = t, i = a.offsetWidth, o = a.offsetHeight;
  return !(i || o || t.getClientRects().length);
}, nl = function(t) {
  var e;
  if (t instanceof Element)
    return !0;
  var r = (e = t == null ? void 0 : t.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView;
  return !!(r && t instanceof r.Element);
}, o0 = function(t) {
  switch (t.tagName) {
    case "INPUT":
      if (t.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Gn = typeof window < "u" ? window : {}, wa = /* @__PURE__ */ new WeakMap(), al = /auto|scroll/, u0 = /^tb|vertical/, s0 = /msie|trident/i.test(Gn.navigator && Gn.navigator.userAgent), Ht = function(t) {
  return parseFloat(t || "0");
}, Cn = function(t, e, r) {
  return t === void 0 && (t = 0), e === void 0 && (e = 0), r === void 0 && (r = !1), new i0((r ? e : t) || 0, (r ? t : e) || 0);
}, il = Yr({
  devicePixelContentBoxSize: Cn(),
  borderBoxSize: Cn(),
  contentBoxSize: Cn(),
  contentRect: new uf(0, 0, 0, 0)
}), lf = function(t, e) {
  if (e === void 0 && (e = !1), wa.has(t) && !e)
    return wa.get(t);
  if (sf(t))
    return wa.set(t, il), il;
  var r = getComputedStyle(t), n = Ou(t) && t.ownerSVGElement && t.getBBox(), a = !s0 && r.boxSizing === "border-box", i = u0.test(r.writingMode || ""), o = !n && al.test(r.overflowY || ""), u = !n && al.test(r.overflowX || ""), s = n ? 0 : Ht(r.paddingTop), l = n ? 0 : Ht(r.paddingRight), c = n ? 0 : Ht(r.paddingBottom), d = n ? 0 : Ht(r.paddingLeft), v = n ? 0 : Ht(r.borderTopWidth), D = n ? 0 : Ht(r.borderRightWidth), m = n ? 0 : Ht(r.borderBottomWidth), f = n ? 0 : Ht(r.borderLeftWidth), g = d + l, p = s + c, b = f + D, C = v + m, F = u ? t.offsetHeight - C - t.clientHeight : 0, B = o ? t.offsetWidth - b - t.clientWidth : 0, A = a ? g + b : 0, w = a ? p + C : 0, M = n ? n.width : Ht(r.width) - A - B, x = n ? n.height : Ht(r.height) - w - F, P = M + g + B + b, V = x + p + F + C, T = Yr({
    devicePixelContentBoxSize: Cn(Math.round(M * devicePixelRatio), Math.round(x * devicePixelRatio), i),
    borderBoxSize: Cn(P, V, i),
    contentBoxSize: Cn(M, x, i),
    contentRect: new uf(d, s, M, x)
  });
  return wa.set(t, T), T;
}, cf = function(t, e, r) {
  var n = lf(t, r), a = n.borderBoxSize, i = n.contentBoxSize, o = n.devicePixelContentBoxSize;
  switch (e) {
    case ia.DEVICE_PIXEL_CONTENT_BOX:
      return o;
    case ia.BORDER_BOX:
      return a;
    default:
      return i;
  }
}, l0 = /* @__PURE__ */ function() {
  function t(e) {
    var r = lf(e);
    this.target = e, this.contentRect = r.contentRect, this.borderBoxSize = Yr([r.borderBoxSize]), this.contentBoxSize = Yr([r.contentBoxSize]), this.devicePixelContentBoxSize = Yr([r.devicePixelContentBoxSize]);
  }
  return t;
}(), ff = function(t) {
  if (sf(t))
    return 1 / 0;
  for (var e = 0, r = t.parentNode; r; )
    e += 1, r = r.parentNode;
  return e;
}, c0 = function() {
  var t = 1 / 0, e = [];
  Gr.forEach(function(o) {
    if (o.activeTargets.length !== 0) {
      var u = [];
      o.activeTargets.forEach(function(l) {
        var c = new l0(l.target), d = ff(l.target);
        u.push(c), l.lastReportedSize = cf(l.target, l.observedBox), d < t && (t = d);
      }), e.push(function() {
        o.callback.call(o.observer, u, o.observer);
      }), o.activeTargets.splice(0, o.activeTargets.length);
    }
  });
  for (var r = 0, n = e; r < n.length; r++) {
    var a = n[r];
    a();
  }
  return t;
}, ol = function(t) {
  Gr.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (ff(a.target) > t ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, f0 = function() {
  var t = 0;
  for (ol(t); r0(); )
    t = c0(), ol(t);
  return n0() && a0(), t > 0;
}, Li, df = [], d0 = function() {
  return df.splice(0).forEach(function(t) {
    return t();
  });
}, v0 = function(t) {
  if (!Li) {
    var e = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return d0();
    }).observe(r, n), Li = function() {
      r.textContent = "".concat(e ? e-- : e++);
    };
  }
  df.push(t), Li();
}, h0 = function(t) {
  v0(function() {
    requestAnimationFrame(t);
  });
}, Wa = 0, g0 = function() {
  return !!Wa;
}, p0 = 250, m0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ul = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], sl = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, Vi = !1, D0 = function() {
  function t() {
    var e = this;
    this.stopped = !0, this.listener = function() {
      return e.schedule();
    };
  }
  return t.prototype.run = function(e) {
    var r = this;
    if (e === void 0 && (e = p0), !Vi) {
      Vi = !0;
      var n = sl(e);
      h0(function() {
        var a = !1;
        try {
          a = f0();
        } finally {
          if (Vi = !1, e = n - sl(), !g0())
            return;
          a ? r.run(1e3) : e > 0 ? r.run(e) : r.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var e = this, r = function() {
      return e.observer && e.observer.observe(document.body, m0);
    };
    document.body ? r() : Gn.addEventListener("DOMContentLoaded", r);
  }, t.prototype.start = function() {
    var e = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ul.forEach(function(r) {
      return Gn.addEventListener(r, e.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var e = this;
    this.stopped || (this.observer && this.observer.disconnect(), ul.forEach(function(r) {
      return Gn.removeEventListener(r, e.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), Bo = new D0(), ll = function(t) {
  !Wa && t > 0 && Bo.start(), Wa += t, !Wa && Bo.stop();
}, b0 = function(t) {
  return !Ou(t) && !o0(t) && getComputedStyle(t).display === "inline";
}, C0 = function() {
  function t(e, r) {
    this.target = e, this.observedBox = r || ia.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var e = cf(this.target, this.observedBox, !0);
    return b0(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
  }, t;
}(), y0 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = r;
  }
  return t;
}(), Fa = /* @__PURE__ */ new WeakMap(), cl = function(t, e) {
  for (var r = 0; r < t.length; r += 1)
    if (t[r].target === e)
      return r;
  return -1;
}, Aa = function() {
  function t() {
  }
  return t.connect = function(e, r) {
    var n = new y0(e, r);
    Fa.set(e, n);
  }, t.observe = function(e, r, n) {
    var a = Fa.get(e), i = a.observationTargets.length === 0;
    cl(a.observationTargets, r) < 0 && (i && Gr.push(a), a.observationTargets.push(new C0(r, n && n.box)), ll(1), Bo.schedule());
  }, t.unobserve = function(e, r) {
    var n = Fa.get(e), a = cl(n.observationTargets, r), i = n.observationTargets.length === 1;
    a >= 0 && (i && Gr.splice(Gr.indexOf(n), 1), n.observationTargets.splice(a, 1), ll(-1));
  }, t.disconnect = function(e) {
    var r = this, n = Fa.get(e);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(e, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, t;
}(), E0 = function() {
  function t(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof e != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Aa.connect(this, e);
  }
  return t.prototype.observe = function(e, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!nl(e))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Aa.observe(this, e, r);
  }, t.prototype.unobserve = function(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!nl(e))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Aa.unobserve(this, e);
  }, t.prototype.disconnect = function() {
    Aa.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}(), dr = {};
Object.defineProperty(dr, "__esModule", {
  value: !0
});
var w0 = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), _i = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, vf = {
  add: "+",
  break: "pause",
  cmd: "meta",
  command: "meta",
  ctl: "control",
  ctrl: "control",
  del: "delete",
  down: "arrowdown",
  esc: "escape",
  ins: "insert",
  left: "arrowleft",
  mod: w0 ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, Su = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  " ": 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ";": 186,
  "=": 187,
  ",": 188,
  "-": 189,
  ".": 190,
  "/": 191,
  "`": 192,
  "[": 219,
  "\\": 220,
  "]": 221,
  "'": 222
};
for (var Ba = 1; Ba < 20; Ba++)
  Su["f" + Ba] = 111 + Ba;
function mi(t, e, r) {
  e && !("byKey" in e) && (r = e, e = null), Array.isArray(t) || (t = [t]);
  var n = t.map(function(o) {
    return hf(o, e);
  }), a = function(u) {
    return n.some(function(s) {
      return gf(s, u);
    });
  }, i = r == null ? a : a(r);
  return i;
}
function F0(t, e) {
  return mi(t, e);
}
function A0(t, e) {
  return mi(t, { byKey: !0 }, e);
}
function hf(t, e) {
  var r = e && e.byKey, n = {};
  t = t.replace("++", "+add");
  var a = t.split("+"), i = a.length;
  for (var o in _i)
    n[_i[o]] = !1;
  var u = !0, s = !1, l = void 0;
  try {
    for (var c = a[Symbol.iterator](), d; !(u = (d = c.next()).done); u = !0) {
      var v = d.value, D = v.endsWith("?") && v.length > 1;
      D && (v = v.slice(0, -1));
      var m = xu(v), f = _i[m];
      if (v.length > 1 && !f && !vf[v] && !Su[m])
        throw new TypeError('Unknown modifier: "' + v + '"');
      (i === 1 || !f) && (r ? n.key = m : n.which = pf(v)), f && (n[f] = D ? null : !0);
    }
  } catch (g) {
    s = !0, l = g;
  } finally {
    try {
      !u && c.return && c.return();
    } finally {
      if (s)
        throw l;
    }
  }
  return n;
}
function gf(t, e) {
  for (var r in t) {
    var n = t[r], a = void 0;
    if (n != null && (r === "key" && e.key != null ? a = e.key.toLowerCase() : r === "which" ? a = n === 91 && e.which === 93 ? 91 : e.which : a = e[r], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function pf(t) {
  t = xu(t);
  var e = Su[t] || t.toUpperCase().charCodeAt(0);
  return e;
}
function xu(t) {
  return t = t.toLowerCase(), t = vf[t] || t, t;
}
dr.default = mi;
var Wi = dr.isHotkey = mi;
dr.isCodeHotkey = F0;
dr.isKeyHotkey = A0;
dr.parseHotkey = hf;
dr.compareHotkey = gf;
dr.toKeyCode = pf;
dr.toKeyName = xu;
function B0(t, e) {
  if (t == null)
    return {};
  var r = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function xn(t, e) {
  if (t == null)
    return {};
  var r = B0(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function oa(t) {
  "@babel/helpers - typeof";
  return oa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, oa(t);
}
function O0(t, e) {
  if (oa(t) !== "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (oa(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function S0(t) {
  var e = O0(t, "string");
  return oa(e) === "symbol" ? e : String(e);
}
function xt(t, e, r) {
  return e = S0(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
var Pu = /* @__PURE__ */ Xt(null), vr = () => {
  var t = Vt(Pu);
  if (!t)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return t;
}, mf = parseInt(oe.version.split(".")[0], 10), x0 = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, fl = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), st = typeof navigator < "u" && /Android/.test(navigator.userAgent), hn = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), zn = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), P0 = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), Df = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), T0 = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), R0 = st && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), k0 = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), j0 = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), M0 = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), za = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", pr = (!T0 || !R0) && !P0 && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", Tu = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), bf = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), Xr = /* @__PURE__ */ new WeakMap(), ri = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), sr = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), Cf = /* @__PURE__ */ new WeakMap(), Pn = Symbol("placeholder"), yf = Symbol("mark-placeholder"), N0 = globalThis.Text, ju = (t) => t && t.ownerDocument && t.ownerDocument.defaultView || null, $0 = (t) => Br(t) && t.nodeType === 8, St = (t) => Br(t) && t.nodeType === 1, Br = (t) => {
  var e = ju(t);
  return !!e && t instanceof e.Node;
}, Po = (t) => {
  var e = t && t.anchorNode && ju(t.anchorNode);
  return !!e && t instanceof e.Selection;
}, Ef = (t) => Br(t) && t.nodeType === 3, I0 = (t) => t.clipboardData && t.clipboardData.getData("text/plain") !== "" && t.clipboardData.types.length === 1, L0 = (t) => {
  var [e, r] = t;
  if (St(e) && e.childNodes.length) {
    var n = r === e.childNodes.length, a = n ? r - 1 : r;
    for ([e, a] = wf(e, a, n ? "backward" : "forward"), n = a < r; St(e) && e.childNodes.length; ) {
      var i = n ? e.childNodes.length - 1 : 0;
      e = _0(e, i, n ? "backward" : "forward");
    }
    r = n && e.textContent != null ? e.textContent.length : 0;
  }
  return [e, r];
}, V0 = (t) => {
  for (var e = t && t.parentNode; e; ) {
    if (e.toString() === "[object ShadowRoot]")
      return !0;
    e = e.parentNode;
  }
  return !1;
}, wf = (t, e, r) => {
  for (var {
    childNodes: n
  } = t, a = n[e], i = e, o = !1, u = !1; ($0(a) || St(a) && a.childNodes.length === 0 || St(a) && a.getAttribute("contenteditable") === "false") && !(o && u); ) {
    if (i >= n.length) {
      o = !0, i = e - 1, r = "backward";
      continue;
    }
    if (i < 0) {
      u = !0, i = e + 1, r = "forward";
      continue;
    }
    a = n[i], e = i, i += r === "forward" ? 1 : -1;
  }
  return [a, e];
}, _0 = (t, e, r) => {
  var [n] = wf(t, e, r);
  return n;
}, Ff = (t) => {
  var e = "";
  if (Ef(t) && t.nodeValue)
    return t.nodeValue;
  if (St(t)) {
    for (var r of Array.from(t.childNodes))
      e += Ff(r);
    var n = getComputedStyle(t).getPropertyValue("display");
    (n === "block" || n === "list" || t.tagName === "BR") && (e += `
`);
  }
  return e;
}, W0 = /data-slate-fragment="(.+?)"/m, z0 = (t) => {
  var e = t.getData("text/html"), [, r] = e.match(W0) || [];
  return r;
}, Mu = (t, e, r) => {
  var {
    target: n
  } = e;
  if (St(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = H.getWindow(t);
  if (a.contains(n))
    return H.hasDOMNode(t, n, {
      editable: !0
    });
  var i = r.find((o) => {
    var {
      addedNodes: u,
      removedNodes: s
    } = o;
    for (var l of u)
      if (l === n || l.contains(n))
        return !0;
    for (var c of s)
      if (c === n || c.contains(n))
        return !0;
  });
  return !i || i === e ? !1 : Mu(t, i, r);
}, H0 = 0;
class q0 {
  constructor() {
    xt(this, "id", void 0), this.id = "".concat(H0++);
  }
}
var H = {
  androidPendingDiffs: (t) => dt.get(t),
  androidScheduleFlush: (t) => {
    var e;
    (e = ku.get(t)) === null || e === void 0 || e();
  },
  blur: (t) => {
    var e = H.toDOMNode(t, t), r = H.findDocumentOrShadowRoot(t);
    wr.set(t, !1), r.activeElement === e && e.blur();
  },
  deselect: (t) => {
    var {
      selection: e
    } = t, r = H.findDocumentOrShadowRoot(t), n = r.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), e && K.deselect(t);
  },
  findDocumentOrShadowRoot: (t) => {
    var e = H.toDOMNode(t, t), r = e.getRootNode();
    return (r instanceof Document || r instanceof ShadowRoot) && r.getSelection != null ? r : e.ownerDocument;
  },
  findEventRange: (t, e) => {
    "nativeEvent" in e && (e = e.nativeEvent);
    var {
      clientX: r,
      clientY: n,
      target: a
    } = e;
    if (r == null || n == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var i = H.toSlateNode(t, e.target), o = H.findPath(t, i);
    if (re.isElement(i) && h.isVoid(t, i)) {
      var u = a.getBoundingClientRect(), s = t.isInline(i) ? r - u.left < u.left + u.width - r : n - u.top < u.top + u.height - n, l = h.point(t, o, {
        edge: s ? "start" : "end"
      }), c = s ? h.before(t, l) : h.after(t, l);
      if (c) {
        var d = h.range(t, c);
        return d;
      }
    }
    var v, {
      document: D
    } = H.getWindow(t);
    if (D.caretRangeFromPoint)
      v = D.caretRangeFromPoint(r, n);
    else {
      var m = D.caretPositionFromPoint(r, n);
      m && (v = D.createRange(), v.setStart(m.offsetNode, m.offset), v.setEnd(m.offsetNode, m.offset));
    }
    if (!v)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var f = H.toSlateRange(t, v, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return f;
  },
  findKey: (t, e) => {
    var r = ri.get(e);
    return r || (r = new q0(), ri.set(e, r)), r;
  },
  findPath: (t, e) => {
    for (var r = [], n = e; ; ) {
      var a = Ru.get(n);
      if (a == null) {
        if (h.isEditor(n))
          return r;
        break;
      }
      var i = Tu.get(n);
      if (i == null)
        break;
      r.unshift(i), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(tt.stringify(e)));
  },
  focus: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!wr.get(e)) {
      if (r.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (e.operations.length > 0) {
        setTimeout(() => {
          H.focus(e, {
            retries: r.retries - 1
          });
        }, 10);
        return;
      }
      var n = H.toDOMNode(e, e), a = H.findDocumentOrShadowRoot(e);
      if (a.activeElement !== n) {
        if (e.selection && a instanceof Document) {
          var i = a.getSelection(), o = H.toDOMRange(e, e.selection);
          i == null || i.removeAllRanges(), i == null || i.addRange(o);
        }
        e.selection || (K.select(e, h.start(e, [])), e.onChange()), wr.set(e, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (t) => {
    var e = bf.get(t);
    if (!e)
      throw new Error("Unable to find a host window element for this editor");
    return e;
  },
  hasDOMNode: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, i = H.toDOMNode(e, e), o;
    try {
      o = St(r) ? r : r.parentElement;
    } catch (u) {
      if (u instanceof Error && !u.message.includes('Permission denied to access property "nodeType"'))
        throw u;
    }
    return o ? o.closest("[data-slate-editor]") === i && (!a || o.isContentEditable ? !0 : typeof o.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    o.closest('[contenteditable="false"]') === i || !!o.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (t, e) => Br(e) && H.hasDOMNode(t, e, {
    editable: !0
  }),
  hasRange: (t, e) => {
    var {
      anchor: r,
      focus: n
    } = e;
    return h.hasPath(t, r.path) && h.hasPath(t, n.path);
  },
  hasSelectableTarget: (t, e) => H.hasEditableTarget(t, e) || H.isTargetInsideNonReadonlyVoid(t, e),
  hasTarget: (t, e) => Br(e) && H.hasDOMNode(t, e),
  insertData: (t, e) => {
    t.insertData(e);
  },
  insertFragmentData: (t, e) => t.insertFragmentData(e),
  insertTextData: (t, e) => t.insertTextData(e),
  isComposing: (t) => !!Wr.get(t),
  isFocused: (t) => !!wr.get(t),
  isReadOnly: (t) => !!So.get(t),
  isTargetInsideNonReadonlyVoid: (t, e) => {
    if (So.get(t))
      return !1;
    var r = H.hasTarget(t, e) && H.toSlateNode(t, e);
    return re.isElement(r) && h.isVoid(t, r);
  },
  setFragmentData: (t, e, r) => t.setFragmentData(e, r),
  toDOMNode: (t, e) => {
    var r = Di.get(t), n = h.isEditor(e) ? Ha.get(t) : r == null ? void 0 : r.get(H.findKey(t, e));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(tt.stringify(e)));
    return n;
  },
  toDOMPoint: (t, e) => {
    var [r] = h.node(t, e.path), n = H.toDOMNode(t, r), a;
    h.void(t, {
      at: e
    }) && (e = {
      path: e.path,
      offset: 0
    });
    for (var i = "[data-slate-string], [data-slate-zero-width]", o = Array.from(n.querySelectorAll(i)), u = 0, s = 0; s < o.length; s++) {
      var l = o[s], c = l.childNodes[0];
      if (!(c == null || c.textContent == null)) {
        var {
          length: d
        } = c.textContent, v = l.getAttribute("data-slate-length"), D = v == null ? d : parseInt(v, 10), m = u + D, f = o[s + 1];
        if (e.offset === m && f !== null && f !== void 0 && f.hasAttribute("data-slate-mark-placeholder")) {
          var g, p = f.childNodes[0];
          a = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            p instanceof N0 ? p : f,
            (g = f.textContent) !== null && g !== void 0 && g.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (e.offset <= m) {
          var b = Math.min(d, Math.max(0, e.offset - u));
          a = [c, b];
          break;
        }
        u = m;
      }
    }
    if (!a)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(tt.stringify(e)));
    return a;
  },
  toDOMRange: (t, e) => {
    var {
      anchor: r,
      focus: n
    } = e, a = I.isBackward(e), i = H.toDOMPoint(t, r), o = I.isCollapsed(e) ? i : H.toDOMPoint(t, n), u = H.getWindow(t), s = u.document.createRange(), [l, c] = a ? o : i, [d, v] = a ? i : o, D = St(l) ? l : l.parentElement, m = !!D.getAttribute("data-slate-zero-width"), f = St(d) ? d : d.parentElement, g = !!f.getAttribute("data-slate-zero-width");
    return s.setStart(l, m ? 1 : c), s.setEnd(d, g ? 1 : v), s;
  },
  toSlateNode: (t, e) => {
    var r = St(e) ? e : e.parentElement;
    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
    var n = r ? ua.get(r) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
    return n;
  },
  toSlatePoint: (t, e, r) => {
    var {
      exactMatch: n,
      suppressThrow: a
    } = r, [i, o] = n ? e : L0(e), u = i.parentNode, s = null, l = 0;
    if (u) {
      var c, d, v = H.toDOMNode(t, t), D = u.closest('[data-slate-void="true"]'), m = D && v.contains(D) ? D : null, f = u.closest("[data-slate-leaf]"), g = null;
      if (f) {
        if (s = f.closest('[data-slate-node="text"]'), s) {
          var p = H.getWindow(t), b = p.document.createRange();
          b.setStart(s, 0), b.setEnd(i, o);
          var C = b.cloneContents(), F = [...Array.prototype.slice.call(C.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(C.querySelectorAll("[contenteditable=false]"))];
          F.forEach((N) => {
            if (st && !n && N.hasAttribute("data-slate-zero-width") && N.textContent.length > 0 && N.textContext !== "\uFEFF") {
              N.textContent.startsWith("\uFEFF") && (N.textContent = N.textContent.slice(1));
              return;
            }
            N.parentNode.removeChild(N);
          }), l = C.textContent.length, g = s;
        }
      } else if (m) {
        for (var B = m.querySelectorAll("[data-slate-leaf]"), A = 0; A < B.length; A++) {
          var w = B[A];
          if (H.hasDOMNode(t, w)) {
            f = w;
            break;
          }
        }
        f ? (s = f.closest('[data-slate-node="text"]'), g = f, l = g.textContent.length, g.querySelectorAll("[data-slate-zero-width]").forEach((N) => {
          l -= N.textContent.length;
        })) : l = 1;
      }
      g && l === g.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      st && g.getAttribute("data-slate-zero-width") === "z" && (c = g.textContent) !== null && c !== void 0 && c.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (u.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      hn && (d = g.textContent) !== null && d !== void 0 && d.endsWith(`

`)) && l--;
    }
    if (st && !s && !n) {
      var M = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
      if (M && H.hasDOMNode(t, M, {
        editable: !0
      })) {
        var x = H.toSlateNode(t, M), {
          path: P,
          offset: V
        } = h.start(t, H.findPath(t, x));
        return M.querySelector("[data-slate-leaf]") || (V = o), {
          path: P,
          offset: V
        };
      }
    }
    if (!s) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(e));
    }
    var T = H.toSlateNode(t, s), k = H.findPath(t, T);
    return {
      path: k,
      offset: l
    };
  },
  toSlateRange: (t, e, r) => {
    var n, {
      exactMatch: a,
      suppressThrow: i
    } = r, o = Po(e) ? e.anchorNode : e.startContainer, u, s, l, c, d;
    if (o)
      if (Po(e)) {
        if (hn && e.rangeCount > 1) {
          l = e.focusNode;
          var v = e.getRangeAt(0), D = e.getRangeAt(e.rangeCount - 1);
          if (l instanceof HTMLTableRowElement && v.startContainer instanceof HTMLTableRowElement && D.startContainer instanceof HTMLTableRowElement) {
            let A = function(w) {
              return w.childElementCount > 0 ? A(w.children[0]) : w;
            };
            var m = v.startContainer, f = D.startContainer, g = A(m.children[v.startOffset]), p = A(f.children[D.startOffset]);
            c = 0, p.childNodes.length > 0 ? u = p.childNodes[0] : u = p, g.childNodes.length > 0 ? l = g.childNodes[0] : l = g, p instanceof HTMLElement ? s = p.innerHTML.length : s = 0;
          } else
            v.startContainer === l ? (u = D.endContainer, s = D.endOffset, c = v.startOffset) : (u = v.startContainer, s = v.endOffset, c = D.startOffset);
        } else
          u = e.anchorNode, s = e.anchorOffset, l = e.focusNode, c = e.focusOffset;
        Df && V0(u) || hn ? d = e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset : d = e.isCollapsed;
      } else
        u = e.startContainer, s = e.startOffset, l = e.endContainer, c = e.endOffset, d = e.collapsed;
    if (u == null || l == null || s == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(e));
    if (hn && (n = l.textContent) !== null && n !== void 0 && n.endsWith(`

`) && c === l.textContent.length && c--, "getAttribute" in l && l.getAttribute("contenteditable") === "false" && l.getAttribute("data-slate-void") !== "true") {
      var b;
      l = u, c = ((b = u.textContent) === null || b === void 0 ? void 0 : b.length) || 0;
    }
    var C = H.toSlatePoint(t, [u, s], {
      exactMatch: a,
      suppressThrow: i
    });
    if (!C)
      return null;
    var F = d ? C : H.toSlatePoint(t, [l, c], {
      exactMatch: a,
      suppressThrow: i
    });
    if (!F)
      return null;
    var B = {
      anchor: C,
      focus: F
    };
    return I.isExpanded(B) && I.isForward(B) && St(l) && h.void(t, {
      at: B.focus,
      mode: "highest"
    }) && (B = h.unhangRange(t, B, {
      voids: !0
    })), B;
  }
};
function U0(t, e) {
  var {
    path: r,
    diff: n
  } = e;
  if (!h.hasPath(t, r))
    return !1;
  var a = Z.get(t, r);
  if (!ae.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var i = E.next(r);
  if (!h.hasPath(t, i))
    return !1;
  var o = Z.get(t, i);
  return ae.isText(o) && o.text.startsWith(n.text);
}
function Af(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return r.reduce((a, i) => a.slice(0, i.start) + i.text + a.slice(i.end), t);
}
function K0(t, e) {
  for (var r = Math.min(t.length, e.length), n = 0; n < r; n++)
    if (t.charAt(n) !== e.charAt(n))
      return n;
  return r;
}
function G0(t, e, r) {
  for (var n = Math.min(t.length, e.length, r), a = 0; a < n; a++)
    if (t.charAt(t.length - a - 1) !== e.charAt(e.length - a - 1))
      return a;
  return n;
}
function Bf(t, e) {
  var {
    start: r,
    end: n,
    text: a
  } = e, i = t.slice(r, n), o = K0(i, a), u = Math.min(i.length - o, a.length - o), s = G0(i, a, u), l = {
    start: r + o,
    end: n - s,
    text: a.slice(o, a.length - s)
  };
  return l.start === l.end && l.text.length === 0 ? null : l;
}
function Y0(t, e, r) {
  var n = Math.min(e.start, r.start), a = Math.max(0, Math.min(e.start + e.text.length, r.end) - r.start), i = Af(t, e, r), o = Math.max(r.start + r.text.length, e.start + e.text.length + (e.start + e.text.length > r.start ? r.text.length : 0) - a), u = i.slice(n, o), s = Math.max(e.end, r.end - e.text.length + (e.end - e.start));
  return Bf(t, {
    start: n,
    end: s,
    text: u
  });
}
function X0(t) {
  var {
    path: e,
    diff: r
  } = t;
  return {
    anchor: {
      path: e,
      offset: r.start
    },
    focus: {
      path: e,
      offset: r.end
    }
  };
}
function To(t, e) {
  var {
    path: r,
    offset: n
  } = e;
  if (!h.hasPath(t, r))
    return null;
  var a = Z.get(t, r);
  if (!ae.isText(a))
    return null;
  var i = h.above(t, {
    match: (u) => re.isElement(u) && h.isBlock(t, u),
    at: r
  });
  if (!i)
    return null;
  for (; n > a.text.length; ) {
    var o = h.next(t, {
      at: r,
      match: ae.isText
    });
    if (!o || !E.isDescendant(o[1], i[1]))
      return null;
    n -= a.text.length, a = o[0], r = o[1];
  }
  return {
    path: r,
    offset: n
  };
}
function dl(t, e) {
  var r = To(t, e.anchor);
  if (!r)
    return null;
  if (I.isCollapsed(e))
    return {
      anchor: r,
      focus: r
    };
  var n = To(t, e.focus);
  return n ? {
    anchor: r,
    focus: n
  } : null;
}
function Ro(t, e, r) {
  var n = dt.get(t), a = n == null ? void 0 : n.find((c) => {
    var {
      path: d
    } = c;
    return E.equals(d, e.path);
  });
  if (!a || e.offset <= a.diff.start)
    return ge.transform(e, r, {
      affinity: "backward"
    });
  var {
    diff: i
  } = a;
  if (e.offset <= i.start + i.text.length) {
    var o = {
      path: e.path,
      offset: i.start
    }, u = ge.transform(o, r, {
      affinity: "backward"
    });
    return u ? {
      path: u.path,
      offset: u.offset + e.offset - i.start
    } : null;
  }
  var s = {
    path: e.path,
    offset: e.offset - i.text.length + i.end - i.start
  }, l = ge.transform(s, r, {
    affinity: "backward"
  });
  return l ? r.type === "split_node" && E.equals(r.path, e.path) && s.offset < r.position && i.start < r.position ? l : {
    path: l.path,
    offset: l.offset + i.text.length - i.end + i.start
  } : null;
}
function vl(t, e, r) {
  var n = Ro(t, e.anchor, r);
  if (!n)
    return null;
  if (I.isCollapsed(e))
    return {
      anchor: n,
      focus: n
    };
  var a = Ro(t, e.focus, r);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function J0(t, e) {
  var {
    path: r,
    diff: n,
    id: a
  } = t;
  switch (e.type) {
    case "insert_text":
      return !E.equals(e.path, r) || e.offset >= n.end ? t : e.offset <= n.start ? {
        diff: {
          start: e.text.length + n.start,
          end: e.text.length + n.end,
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start,
          end: n.end + e.text.length,
          text: n.text
        },
        id: a,
        path: r
      };
    case "remove_text":
      return !E.equals(e.path, r) || e.offset >= n.end ? t : e.offset + e.text.length <= n.start ? {
        diff: {
          start: n.start - e.text.length,
          end: n.end - e.text.length,
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start,
          end: n.end - e.text.length,
          text: n.text
        },
        id: a,
        path: r
      };
    case "split_node":
      return !E.equals(e.path, r) || e.position >= n.end ? {
        diff: n,
        id: a,
        path: E.transform(r, e, {
          affinity: "backward"
        })
      } : e.position > n.start ? {
        diff: {
          start: n.start,
          end: Math.min(e.position, n.end),
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start - e.position,
          end: n.end - e.position,
          text: n.text
        },
        id: a,
        path: E.transform(r, e, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return E.equals(e.path, r) ? {
        diff: {
          start: n.start + e.position,
          end: n.end + e.position,
          text: n.text
        },
        id: a,
        path: E.transform(r, e)
      } : {
        diff: n,
        id: a,
        path: E.transform(r, e)
      };
  }
  var i = E.transform(r, e);
  return i ? {
    diff: n,
    path: i,
    id: a
  } : null;
}
function hl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hl(Object(r), !0).forEach(function(n) {
      xt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : hl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Z0 = 25, Q0 = 200, eD = function() {
}, tD = (t) => (t == null ? void 0 : t.constructor.name) === "DataTransfer";
function rD(t) {
  var {
    editor: e,
    scheduleOnDOMSelectionChange: r,
    onDOMSelectionChange: n
  } = t, a = !1, i = null, o = null, u = null, s = 0, l = !1, c = () => {
    var T = Cr.get(e);
    if (Cr.delete(e), T) {
      var {
        selection: k
      } = e, N = dl(e, T);
      N && (!k || !I.equals(N, k)) && K.select(e, N);
    }
  }, d = () => {
    var T = br.get(e);
    if (br.delete(e), !!T) {
      if (T.at) {
        var k = ge.isPoint(T.at) ? To(e, T.at) : dl(e, T.at);
        if (!k)
          return;
        var N = h.range(e, k);
        (!e.selection || !I.equals(e.selection, N)) && K.select(e, k);
      }
      T.run();
    }
  }, v = () => {
    if (o && (clearTimeout(o), o = null), u && (clearTimeout(u), u = null), !F() && !C()) {
      c();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), C() && (a = "action");
    var T = e.selection && h.rangeRef(e, e.selection, {
      affinity: "forward"
    });
    sr.set(e, e.marks), eD("flush", br.get(e), dt.get(e));
    for (var k = F(), N; N = (j = dt.get(e)) === null || j === void 0 ? void 0 : j[0]; ) {
      var j, $, S = Nt.get(e);
      S !== void 0 && (Nt.delete(e), e.marks = S), S && l === !1 && (l = null);
      var L = X0(N);
      (!e.selection || !I.equals(e.selection, L)) && K.select(e, L), N.diff.text ? h.insertText(e, N.diff.text) : h.deleteFragment(e), dt.set(e, ($ = dt.get(e)) === null || $ === void 0 ? void 0 : $.filter((Y) => {
        var {
          id: Q
        } = Y;
        return Q !== N.id;
      })), U0(e, N) || (k = !1, br.delete(e), sr.delete(e), a = "action", Cr.delete(e), r.cancel(), n.cancel(), T == null || T.unref());
    }
    var q = T == null ? void 0 : T.unref();
    if (q && !Cr.get(e) && (!e.selection || !I.equals(q, e.selection)) && K.select(e, q), C()) {
      d();
      return;
    }
    k && r(), r.flush(), n.flush(), c();
    var U = sr.get(e);
    sr.delete(e), U !== void 0 && (e.marks = U, e.onChange());
  }, D = (T) => {
    i && clearTimeout(i), i = setTimeout(() => {
      Wr.set(e, !1), v();
    }, Z0);
  }, m = (T) => {
    Wr.set(e, !0), i && (clearTimeout(i), i = null);
  }, f = function() {
    var k = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, N = Oo.get(e);
    if (N) {
      if (F() || k) {
        N.style.display = "none";
        return;
      }
      N.style.removeProperty("display");
    }
  }, g = (T, k) => {
    var N, j = (N = dt.get(e)) !== null && N !== void 0 ? N : [];
    dt.set(e, j);
    var $ = Z.leaf(e, T), S = j.findIndex((U) => E.equals(U.path, T));
    if (S < 0) {
      var L = Bf($.text, k);
      L && j.push({
        path: T,
        diff: k,
        id: s++
      }), f();
      return;
    }
    var q = Y0($.text, j[S].diff, k);
    if (!q) {
      j.splice(S, 1), f();
      return;
    }
    j[S] = Oa(Oa({}, j[S]), {}, {
      diff: q
    });
  }, p = function(k) {
    var {
      at: N
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    l = !1, Cr.delete(e), r.cancel(), n.cancel(), C() && v(), br.set(e, {
      at: N,
      run: k
    }), u = setTimeout(v);
  }, b = (T) => {
    var k;
    o && (clearTimeout(o), o = null);
    var {
      inputType: N
    } = T, j = null, $ = T.dataTransfer || T.data || void 0;
    l !== !1 && N !== "insertText" && N !== "insertCompositionText" && (l = !1);
    var [S] = T.getTargetRanges();
    S && (j = H.toSlateRange(e, S, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var L = H.getWindow(e), q = L.getSelection();
    if (!j && q && (S = q, j = H.toSlateRange(e, q, {
      exactMatch: !1,
      suppressThrow: !0
    })), j = (k = j) !== null && k !== void 0 ? k : e.selection, !!j) {
      var U = !0;
      if (N.startsWith("delete")) {
        if (I.isExpanded(j)) {
          var [Y, Q] = I.edges(j), ie = Z.leaf(e, Y.path);
          if (ie.text.length === Y.offset && Q.offset === 0) {
            var O = h.next(e, {
              at: Y.path,
              match: ae.isText
            });
            O && E.equals(O[1], Q.path) && (j = {
              anchor: Q,
              focus: Q
            });
          }
        }
        var _ = N.endsWith("Backward") ? "backward" : "forward", [z, X] = I.edges(j), [ue, ne] = h.leaf(e, z.path), se = {
          text: "",
          start: z.offset,
          end: X.offset
        }, fe = dt.get(e), he = fe == null ? void 0 : fe.find((it) => E.equals(it.path, ne)), Ee = he ? [he.diff, se] : [se], J = Af(ue.text, ...Ee);
        if (J.length === 0 && (U = !1), I.isExpanded(j)) {
          if (U && E.equals(j.anchor.path, j.focus.path)) {
            var me = {
              path: j.anchor.path,
              offset: z.offset
            }, Ae = h.range(e, me, me);
            return w(Ae), g(j.anchor.path, {
              text: "",
              end: X.offset,
              start: z.offset
            });
          }
          return p(() => h.deleteFragment(e, {
            direction: _
          }), {
            at: j
          });
        }
      }
      switch (N) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return p(() => h.deleteFragment(e), {
            at: j
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: we
          } = j;
          if (U && I.isCollapsed(j)) {
            var Ye = Z.leaf(e, we.path);
            if (we.offset < Ye.text.length)
              return g(we.path, {
                text: "",
                start: we.offset,
                end: we.offset + 1
              });
          }
          return p(() => h.deleteForward(e), {
            at: j
          });
        }
        case "deleteContentBackward": {
          var Be, {
            anchor: Ce
          } = j, Oe = Po(S) ? S.isCollapsed : !!((Be = S) !== null && Be !== void 0 && Be.collapsed);
          return U && Oe && I.isCollapsed(j) && Ce.offset > 0 ? g(Ce.path, {
            text: "",
            start: Ce.offset - 1,
            end: Ce.offset
          }) : p(() => h.deleteBackward(e), {
            at: j
          });
        }
        case "deleteEntireSoftLine":
          return p(() => {
            h.deleteBackward(e, {
              unit: "line"
            }), h.deleteForward(e, {
              unit: "line"
            });
          }, {
            at: j
          });
        case "deleteHardLineBackward":
          return p(() => h.deleteBackward(e, {
            unit: "block"
          }), {
            at: j
          });
        case "deleteSoftLineBackward":
          return p(() => h.deleteBackward(e, {
            unit: "line"
          }), {
            at: j
          });
        case "deleteHardLineForward":
          return p(() => h.deleteForward(e, {
            unit: "block"
          }), {
            at: j
          });
        case "deleteSoftLineForward":
          return p(() => h.deleteForward(e, {
            unit: "line"
          }), {
            at: j
          });
        case "deleteWordBackward":
          return p(() => h.deleteBackward(e, {
            unit: "word"
          }), {
            at: j
          });
        case "deleteWordForward":
          return p(() => h.deleteForward(e, {
            unit: "word"
          }), {
            at: j
          });
        case "insertLineBreak":
          return p(() => h.insertSoftBreak(e), {
            at: j
          });
        case "insertParagraph":
          return p(() => h.insertBreak(e), {
            at: j
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (tD($))
            return p(() => H.insertData(e, $), {
              at: j
            });
          var ve = $ ?? "";
          if (Nt.get(e) && (ve = ve.replace("\uFEFF", "")), N === "insertText" && /.*\n.*\n$/.test(ve) && (ve = ve.slice(0, -1)), ve.includes(`
`))
            return p(() => {
              var it = ve.split(`
`);
              it.forEach((Ft, Zt) => {
                Ft && h.insertText(e, Ft), Zt !== it.length - 1 && h.insertSoftBreak(e);
              });
            }, {
              at: j
            });
          if (E.equals(j.anchor.path, j.focus.path)) {
            var [Ne, ze] = I.edges(j), Ve = {
              start: Ne.offset,
              end: ze.offset,
              text: ve
            };
            if (ve && l && N === "insertCompositionText") {
              var at = l.start + l.text.search(/\S|$/), wt = Ve.start + Ve.text.search(/\S|$/);
              wt === at + 1 && Ve.end === l.start + l.text.length ? (Ve.start -= 1, l = null, P()) : l = !1;
            } else
              N === "insertText" ? l === null ? l = Ve : l && I.isCollapsed(j) && l.end + l.text.length === Ne.offset ? l = Oa(Oa({}, l), {}, {
                text: l.text + ve
              }) : l = !1 : l = !1;
            if (U) {
              g(Ne.path, Ve);
              return;
            }
          }
          return p(() => h.insertText(e, ve), {
            at: j
          });
        }
      }
    }
  }, C = () => !!br.get(e), F = () => {
    var T;
    return !!((T = dt.get(e)) !== null && T !== void 0 && T.length);
  }, B = () => C() || F(), A = () => a, w = (T) => {
    Cr.set(e, T), o && (clearTimeout(o), o = null);
    var {
      selection: k
    } = e;
    if (T) {
      var N = !k || !E.equals(k.anchor.path, T.anchor.path), j = !k || !E.equals(k.anchor.path.slice(0, -1), T.anchor.path.slice(0, -1));
      (N && l || j) && (l = !1), (N || F()) && (o = setTimeout(v, Q0));
    }
  }, M = () => {
    (C() || !F()) && v();
  }, x = (T) => {
    F() || (f(!0), setTimeout(f));
  }, P = () => {
    C() || (u = setTimeout(v));
  }, V = (T) => {
    if (!(F() || C()) && T.some((N) => Mu(e, N, T))) {
      var k;
      (k = Cf.get(e)) === null || k === void 0 || k();
    }
  };
  return {
    flush: v,
    scheduleFlush: P,
    hasPendingDiffs: F,
    hasPendingAction: C,
    hasPendingChanges: B,
    isFlushing: A,
    handleUserSelect: w,
    handleCompositionEnd: D,
    handleCompositionStart: m,
    handleDOMBeforeInput: b,
    handleKeyDown: x,
    handleDomMutations: V,
    handleInput: M
  };
}
function nD() {
  var t = $e(!1);
  return ht(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t.current;
}
var sa = za ? lc : ht;
function aD(t, e, r) {
  var [n] = lr(() => new MutationObserver(e));
  sa(() => {
    n.takeRecords();
  }), ht(() => {
    if (!t.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(t.current, r), () => n.disconnect();
  }, [n, t, r]);
}
var iD = ["node"];
function gl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function oD(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gl(Object(r), !0).forEach(function(n) {
      xt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : gl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var uD = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, sD = st ? (t) => {
  var {
    node: e
  } = t, r = xn(t, iD);
  if (!st)
    return null;
  var n = vr(), a = nD(), [i] = lr(() => rD(oD({
    editor: n
  }, r)));
  return aD(e, i.handleDomMutations, uD), ku.set(n, i.scheduleFlush), a && i.flush(), i;
} : () => null, lD = ["anchor", "focus"], cD = ["anchor", "focus"], fD = (t, e) => Object.keys(t).length === Object.keys(e).length && Object.keys(t).every((r) => e.hasOwnProperty(r) && t[r] === e[r]), Of = (t, e) => {
  var r = xn(t, lD), n = xn(e, cD);
  return t[Pn] === e[Pn] && fD(r, n);
}, dD = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++) {
    var n = t[r], a = e[r];
    if (!I.equals(n, a) || !Of(n, a))
      return !1;
  }
  return !0;
}, vD = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++) {
    var n = t[r], a = e[r];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !Of(n, a))
      return !1;
  }
  return !0;
};
function pl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hD(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pl(Object(r), !0).forEach(function(n) {
      xt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : pl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var gD = (t) => {
  var {
    isLast: e,
    leaf: r,
    parent: n,
    text: a
  } = t, i = vr(), o = H.findPath(i, a), u = E.parent(o), s = !!r[yf];
  return i.isVoid(n) ? /* @__PURE__ */ oe.createElement(zi, {
    length: Z.string(n).length
  }) : r.text === "" && n.children[n.children.length - 1] === a && !i.isInline(n) && h.string(i, u) === "" ? /* @__PURE__ */ oe.createElement(zi, {
    isLineBreak: !0,
    isMarkPlaceholder: s
  }) : r.text === "" ? /* @__PURE__ */ oe.createElement(zi, {
    isMarkPlaceholder: s
  }) : e && r.text.slice(-1) === `
` ? /* @__PURE__ */ oe.createElement(ml, {
    isTrailing: !0,
    text: r.text
  }) : /* @__PURE__ */ oe.createElement(ml, {
    text: r.text
  });
}, ml = (t) => {
  var {
    text: e,
    isTrailing: r = !1
  } = t, n = $e(null), a = () => "".concat(e ?? "").concat(r ? `
` : ""), [i] = lr(a);
  return sa(() => {
    var o = a();
    n.current && n.current.textContent !== o && (n.current.textContent = o);
  }), /* @__PURE__ */ oe.createElement(pD, {
    ref: n
  }, i);
}, pD = /* @__PURE__ */ Hd(/* @__PURE__ */ cc((t, e) => /* @__PURE__ */ oe.createElement("span", {
  "data-slate-string": !0,
  ref: e
}, t.children))), zi = (t) => {
  var {
    length: e = 0,
    isLineBreak: r = !1,
    isMarkPlaceholder: n = !1
  } = t, a = {
    "data-slate-zero-width": r ? "n" : "z",
    "data-slate-length": e
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ oe.createElement("span", hD({}, a), !st || !r ? "\uFEFF" : null, r ? /* @__PURE__ */ oe.createElement("br", null) : null);
};
function Dl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Dl(Object(r), !0).forEach(function(n) {
      xt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Dl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var mD = st ? 300 : 0;
function DD(t, e) {
  t.current && (t.current.disconnect(), e && (t.current = null));
}
function bl(t) {
  t.current && (clearTimeout(t.current), t.current = null);
}
var bD = (t) => {
  var {
    leaf: e,
    isLast: r,
    text: n,
    parent: a,
    renderPlaceholder: i,
    renderLeaf: o = (b) => /* @__PURE__ */ oe.createElement(yD, Sf({}, b))
  } = t, u = vr(), s = $e(null), l = $e(null), [c, d] = lr(!1), v = $e(null), D = Re((b) => {
    if (DD(s, b == null), b == null) {
      var C;
      Oo.delete(u), (C = e.onPlaceholderResize) === null || C === void 0 || C.call(e, null);
    } else {
      if (Oo.set(u, b), !s.current) {
        var F = window.ResizeObserver || E0;
        s.current = new F(() => {
          var B;
          (B = e.onPlaceholderResize) === null || B === void 0 || B.call(e, b);
        });
      }
      s.current.observe(b), l.current = b;
    }
  }, [l, e, u]), m = /* @__PURE__ */ oe.createElement(gD, {
    isLast: r,
    leaf: e,
    parent: a,
    text: n
  }), f = !!e[Pn];
  if (ht(() => (f ? v.current || (v.current = setTimeout(() => {
    d(!0), v.current = null;
  }, mD)) : (bl(v), d(!1)), () => bl(v)), [f, d]), f && c) {
    var g = {
      children: e.placeholder,
      attributes: {
        "data-slate-placeholder": !0,
        style: {
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none",
          // Fixes https://github.com/udecode/plate/issues/2315
          WebkitUserModify: zn ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: D
      }
    };
    m = /* @__PURE__ */ oe.createElement(oe.Fragment, null, i(g), m);
  }
  var p = {
    "data-slate-leaf": !0
  };
  return o({
    attributes: p,
    children: m,
    leaf: e,
    text: n
  });
}, CD = /* @__PURE__ */ oe.memo(bD, (t, e) => e.parent === t.parent && e.isLast === t.isLast && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e.text === t.text && ae.equals(e.leaf, t.leaf) && e.leaf[Pn] === t.leaf[Pn]), yD = (t) => {
  var {
    attributes: e,
    children: r
  } = t;
  return /* @__PURE__ */ oe.createElement("span", Sf({}, e), r);
}, ED = (t) => {
  for (var {
    decorations: e,
    isLast: r,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: i,
    text: o
  } = t, u = vr(), s = $e(null), l = ae.decorations(o, e), c = H.findKey(u, o), d = [], v = 0; v < l.length; v++) {
    var D = l[v];
    d.push(/* @__PURE__ */ oe.createElement(CD, {
      isLast: r && v === l.length - 1,
      key: "".concat(c.id, "-").concat(v),
      renderPlaceholder: a,
      leaf: D,
      text: o,
      parent: n,
      renderLeaf: i
    }));
  }
  var m = Re((f) => {
    var g = Di.get(u);
    f ? (g == null || g.set(c, f), Xr.set(o, f), ua.set(f, o)) : (g == null || g.delete(c), Xr.delete(o), s.current && ua.delete(s.current)), s.current = f;
  }, [s, u, c, o]);
  return /* @__PURE__ */ oe.createElement("span", {
    "data-slate-node": "text",
    ref: m
  }, d);
}, xf = /* @__PURE__ */ oe.memo(ED, (t, e) => e.parent === t.parent && e.isLast === t.isLast && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e.text === t.text && vD(e.decorations, t.decorations));
function Cl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ko(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Cl(Object(r), !0).forEach(function(n) {
      xt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Cl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var wD = (t) => {
  var {
    decorations: e,
    element: r,
    renderElement: n = (b) => /* @__PURE__ */ oe.createElement(AD, ko({}, b)),
    renderPlaceholder: a,
    renderLeaf: i,
    selection: o
  } = t, u = vr(), s = kf(), l = u.isInline(r), c = H.findKey(u, r), d = Re((b) => {
    var C = Di.get(u);
    b ? (C == null || C.set(c, b), Xr.set(r, b), ua.set(b, r)) : (C == null || C.delete(c), Xr.delete(r));
  }, [u, c, r]), v = Tf({
    decorations: e,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: i,
    selection: o
  }), D = {
    "data-slate-node": "element",
    ref: d
  };
  if (l && (D["data-slate-inline"] = !0), !l && h.hasInlines(u, r)) {
    var m = Z.string(r), f = qc(m);
    f === "rtl" && (D.dir = f);
  }
  if (h.isVoid(u, r)) {
    D["data-slate-void"] = !0, !s && l && (D.contentEditable = !1);
    var g = l ? "span" : "div", [[p]] = Z.texts(r);
    v = /* @__PURE__ */ oe.createElement(g, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ oe.createElement(xf, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: r,
      text: p
    })), Tu.set(p, 0), Ru.set(p, r);
  }
  return n({
    attributes: D,
    children: v,
    element: r
  });
}, FD = /* @__PURE__ */ oe.memo(wD, (t, e) => t.element === e.element && t.renderElement === e.renderElement && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && dD(t.decorations, e.decorations) && (t.selection === e.selection || !!t.selection && !!e.selection && I.equals(t.selection, e.selection))), AD = (t) => {
  var {
    attributes: e,
    children: r,
    element: n
  } = t, a = vr(), i = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ oe.createElement(i, ko(ko({}, e), {}, {
    style: {
      position: "relative"
    }
  }), r);
}, Pf = /* @__PURE__ */ Xt(() => []), BD = () => Vt(Pf), OD = /* @__PURE__ */ Xt(!1), Tf = (t) => {
  for (var {
    decorations: e,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: i,
    selection: o
  } = t, u = BD(), s = vr(), l = H.findPath(s, r), c = [], d = re.isElement(r) && !s.isInline(r) && h.hasInlines(s, r), v = 0; v < r.children.length; v++) {
    var D = l.concat(v), m = r.children[v], f = H.findKey(s, m), g = h.range(s, D), p = o && I.intersection(g, o), b = u([m, D]);
    for (var C of e) {
      var F = I.intersection(C, g);
      F && b.push(F);
    }
    re.isElement(m) ? c.push(/* @__PURE__ */ oe.createElement(OD.Provider, {
      key: "provider-".concat(f.id),
      value: !!p
    }, /* @__PURE__ */ oe.createElement(FD, {
      decorations: b,
      element: m,
      key: f.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: i,
      selection: p
    }))) : c.push(/* @__PURE__ */ oe.createElement(xf, {
      decorations: b,
      key: f.id,
      isLast: d && v === r.children.length - 1,
      parent: r,
      renderPlaceholder: a,
      renderLeaf: i,
      text: m
    })), Tu.set(m, v), Ru.set(m, r);
  }
  return c;
}, Rf = /* @__PURE__ */ Xt(!1), kf = () => Vt(Rf), jf = /* @__PURE__ */ Xt(null), SD = () => {
  var t = Vt(jf);
  if (!t)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: e
  } = t;
  return e;
};
function xD() {
  var t = vr(), e = $e(!1), r = $e(0), n = Re(() => {
    if (!e.current) {
      e.current = !0;
      var a = H.getWindow(t);
      a.cancelAnimationFrame(r.current), r.current = a.requestAnimationFrame(() => {
        e.current = !1;
      });
    }
  }, [t]);
  return ht(() => () => cancelAnimationFrame(r.current), []), {
    receivedUserInput: e,
    onUserInput: n
  };
}
var PD = 3, TD = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
}, RD = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
}, kD = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Le = (t) => {
  var e = TD[t], r = RD[t], n = kD[t], a = e && Wi(e), i = r && Wi(r), o = n && Wi(n);
  return (u) => !!(a && a(u) || fl && i && i(u) || !fl && o && o(u));
}, _e = {
  isBold: Le("bold"),
  isCompose: Le("compose"),
  isMoveBackward: Le("moveBackward"),
  isMoveForward: Le("moveForward"),
  isDeleteBackward: Le("deleteBackward"),
  isDeleteForward: Le("deleteForward"),
  isDeleteLineBackward: Le("deleteLineBackward"),
  isDeleteLineForward: Le("deleteLineForward"),
  isDeleteWordBackward: Le("deleteWordBackward"),
  isDeleteWordForward: Le("deleteWordForward"),
  isExtendBackward: Le("extendBackward"),
  isExtendForward: Le("extendForward"),
  isExtendLineBackward: Le("extendLineBackward"),
  isExtendLineForward: Le("extendLineForward"),
  isItalic: Le("italic"),
  isMoveLineBackward: Le("moveLineBackward"),
  isMoveLineForward: Le("moveLineForward"),
  isMoveWordBackward: Le("moveWordBackward"),
  isMoveWordForward: Le("moveWordForward"),
  isRedo: Le("redo"),
  isSoftBreak: Le("insertSoftBreak"),
  isSplitBlock: Le("splitBlock"),
  isTransposeCharacter: Le("transposeCharacter"),
  isUndo: Le("undo")
}, jD = (t, e) => {
  var r = [], n = () => {
    r = [];
  }, a = (o) => {
    if (e.current) {
      var u = o.filter((s) => Mu(t, s, o));
      r.push(...u);
    }
  };
  function i() {
    r.length > 0 && (r.reverse().forEach((o) => {
      o.type !== "characterData" && (o.removedNodes.forEach((u) => {
        o.target.insertBefore(u, o.nextSibling);
      }), o.addedNodes.forEach((u) => {
        o.target.removeChild(u);
      }));
    }), n());
  }
  return {
    registerMutations: a,
    restoreDOM: i,
    clear: n
  };
}, MD = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class Mf extends zd {
  constructor() {
    super(...arguments), xt(this, "context", null), xt(this, "manager", null), xt(this, "mutationObserver", null);
  }
  observe() {
    var e, {
      node: r
    } = this.props;
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (e = this.mutationObserver) === null || e === void 0 || e.observe(r.current, MD);
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, r = this.context;
    this.manager = jD(r, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var e, r, n, a = (e = this.mutationObserver) === null || e === void 0 ? void 0 : e.takeRecords();
    if (a != null && a.length) {
      var i;
      (i = this.manager) === null || i === void 0 || i.registerMutations(a);
    }
    return (r = this.mutationObserver) === null || r === void 0 || r.disconnect(), (n = this.manager) === null || n === void 0 || n.restoreDOM(), null;
  }
  componentDidUpdate() {
    var e;
    (e = this.manager) === null || e === void 0 || e.clear(), this.observe();
  }
  componentWillUnmount() {
    var e;
    (e = this.mutationObserver) === null || e === void 0 || e.disconnect();
  }
  render() {
    return this.props.children;
  }
}
xt(Mf, "contextType", Pu);
var ND = st ? Mf : (t) => {
  var {
    children: e
  } = t;
  return /* @__PURE__ */ oe.createElement(oe.Fragment, null, e);
}, $D = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], ID = ["text"];
function yl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yl(Object(r), !0).forEach(function(n) {
      xt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : yl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var LD = (t) => /* @__PURE__ */ oe.createElement(oe.Fragment, null, Tf(t)), VD = (t) => {
  var e = Re((O) => /* @__PURE__ */ oe.createElement(_D, qt({}, O)), []), {
    autoFocus: r,
    decorate: n = WD,
    onDOMBeforeInput: a,
    placeholder: i,
    readOnly: o = !1,
    renderElement: u,
    renderLeaf: s,
    renderPlaceholder: l = e,
    scrollSelectionIntoView: c = zD,
    style: d = {},
    as: v = "div",
    disableDefaultStyles: D = !1
  } = t, m = xn(t, $D), f = SD(), [g, p] = lr(!1), b = $e(null), C = $e([]), [F, B] = lr(), {
    onUserInput: A,
    receivedUserInput: w
  } = xD(), [, M] = Wd((O) => O + 1, 0);
  Cf.set(f, M), So.set(f, o);
  var x = bn(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  ht(() => {
    b.current && r && b.current.focus();
  }, [r]);
  var P = $e(), V = bn(() => yg(() => {
    var O = P.current;
    if ((st || !H.isComposing(f)) && (!x.isUpdatingSelection || O != null && O.isFlushing()) && !x.isDraggingInternally) {
      var _ = H.findDocumentOrShadowRoot(f), {
        activeElement: z
      } = _, X = H.toDOMNode(f, f), ue = _.getSelection();
      if (z === X ? (x.latestElement = z, wr.set(f, !0)) : wr.delete(f), !ue)
        return K.deselect(f);
      var {
        anchorNode: ne,
        focusNode: se
      } = ue, fe = H.hasEditableTarget(f, ne) || H.isTargetInsideNonReadonlyVoid(f, ne), he = H.hasEditableTarget(f, se) || H.isTargetInsideNonReadonlyVoid(f, se);
      if (fe && he) {
        var Ee = H.toSlateRange(f, ue, {
          exactMatch: !1,
          suppressThrow: !0
        });
        Ee && (!H.isComposing(f) && !(O != null && O.hasPendingChanges()) && !(O != null && O.isFlushing()) ? K.select(f, Ee) : O == null || O.handleUserSelect(Ee));
      }
      o && (!fe || !he) && K.deselect(f);
    }
  }, 100), [f, o, x]), T = bn(() => gg(V, 0), [V]);
  P.current = sD({
    node: b,
    onDOMSelectionChange: V,
    scheduleOnDOMSelectionChange: T
  }), sa(() => {
    var O, _, z;
    b.current && (z = ju(b.current)) ? (bf.set(f, z), Ha.set(f, b.current), Xr.set(f, b.current), ua.set(b.current, f)) : Xr.delete(f);
    var {
      selection: X
    } = f, ue = H.findDocumentOrShadowRoot(f), ne = ue.getSelection();
    if (!(!ne || !H.isFocused(f) || (O = P.current) !== null && O !== void 0 && O.hasPendingAction())) {
      var se = (J) => {
        var me = ne.type !== "None";
        if (!(!X && !me)) {
          var Ae = ne.focusNode, we;
          if (hn && ne.rangeCount > 1) {
            var Ye = ne.getRangeAt(0), Be = ne.getRangeAt(ne.rangeCount - 1);
            Ye.startContainer === Ae ? we = Be.endContainer : we = Ye.startContainer;
          } else
            we = ne.anchorNode;
          var Ce = Ha.get(f), Oe = !1;
          if (Ce.contains(we) && Ce.contains(Ae) && (Oe = !0), me && Oe && X && !J) {
            var ve = H.toSlateRange(f, ne, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (ve && I.equals(ve, X)) {
              var Ne;
              if (!x.hasMarkPlaceholder || (Ne = we) !== null && Ne !== void 0 && (Ne = Ne.parentElement) !== null && Ne !== void 0 && Ne.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (X && !H.hasRange(f, X)) {
            f.selection = H.toSlateRange(f, ne, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          x.isUpdatingSelection = !0;
          var ze = X && H.toDOMRange(f, X);
          return ze ? (H.isComposing(f) && !st ? ne.collapseToEnd() : I.isBackward(X) ? ne.setBaseAndExtent(ze.endContainer, ze.endOffset, ze.startContainer, ze.startOffset) : ne.setBaseAndExtent(ze.startContainer, ze.startOffset, ze.endContainer, ze.endOffset), c(f, ze)) : ne.removeAllRanges(), ze;
        }
      };
      ne.rangeCount <= 1 && se();
      var fe = ((_ = P.current) === null || _ === void 0 ? void 0 : _.isFlushing()) === "action";
      if (!st || !fe) {
        setTimeout(() => {
          x.isUpdatingSelection = !1;
        });
        return;
      }
      var he = null, Ee = requestAnimationFrame(() => {
        if (fe) {
          var J = (me) => {
            try {
              var Ae = H.toDOMNode(f, f);
              Ae.focus(), se(me);
            } catch {
            }
          };
          J(), he = setTimeout(() => {
            J(!0), x.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(Ee), he && clearTimeout(he);
      };
    }
  });
  var k = Re((O) => {
    if (A(), !o && H.hasEditableTarget(f, O.target) && !HD(O, a)) {
      var _;
      if (P.current)
        return P.current.handleDOMBeforeInput(O);
      T.flush(), V.flush();
      var {
        selection: z
      } = f, {
        inputType: X
      } = O, ue = O.dataTransfer || O.data || void 0, ne = X === "insertCompositionText" || X === "deleteCompositionText";
      if (ne && H.isComposing(f))
        return;
      var se = !1;
      if (X === "insertText" && z && I.isCollapsed(z) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      O.data && O.data.length === 1 && /[a-z ]/i.test(O.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      z.anchor.offset !== 0) {
        var fe, he;
        se = !0, f.marks && (se = !1);
        var {
          anchor: Ee
        } = z, [J, me] = H.toDOMPoint(f, Ee), Ae = (fe = J.parentElement) === null || fe === void 0 ? void 0 : fe.closest("a"), we = H.getWindow(f);
        if (se && Ae && H.hasDOMNode(f, Ae)) {
          var Ye, Be = we == null ? void 0 : we.document.createTreeWalker(Ae, NodeFilter.SHOW_TEXT).lastChild();
          Be === J && ((Ye = Be.textContent) === null || Ye === void 0 ? void 0 : Ye.length) === me && (se = !1);
        }
        if (se && J.parentElement && (we == null || (he = we.getComputedStyle(J.parentElement)) === null || he === void 0 ? void 0 : he.whiteSpace) === "pre") {
          var Ce = h.above(f, {
            at: Ee.path,
            match: (at) => re.isElement(at) && h.isBlock(f, at)
          });
          Ce && Z.string(Ce[0]).includes("	") && (se = !1);
        }
      }
      if (!X.startsWith("delete") || X.startsWith("deleteBy")) {
        var [Oe] = O.getTargetRanges();
        if (Oe) {
          var ve = H.toSlateRange(f, Oe, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!z || !I.equals(z, ve)) {
            se = !1;
            var Ne = !ne && f.selection && h.rangeRef(f, f.selection);
            K.select(f, ve), Ne && Yn.set(f, Ne);
          }
        }
      }
      if (ne)
        return;
      if (se || O.preventDefault(), z && I.isExpanded(z) && X.startsWith("delete")) {
        var ze = X.endsWith("Backward") ? "backward" : "forward";
        h.deleteFragment(f, {
          direction: ze
        });
        return;
      }
      switch (X) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          h.deleteFragment(f);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          h.deleteForward(f);
          break;
        }
        case "deleteContentBackward": {
          h.deleteBackward(f);
          break;
        }
        case "deleteEntireSoftLine": {
          h.deleteBackward(f, {
            unit: "line"
          }), h.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          h.deleteBackward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          h.deleteBackward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          h.deleteForward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          h.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          h.deleteBackward(f, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          h.deleteForward(f, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          h.insertSoftBreak(f);
          break;
        case "insertParagraph": {
          h.insertBreak(f);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          X === "insertFromComposition" && H.isComposing(f) && (p(!1), Wr.set(f, !1)), (ue == null ? void 0 : ue.constructor.name) === "DataTransfer" ? H.insertData(f, ue) : typeof ue == "string" && (se ? C.current.push(() => h.insertText(f, ue)) : h.insertText(f, ue));
          break;
        }
      }
      var Ve = (_ = Yn.get(f)) === null || _ === void 0 ? void 0 : _.unref();
      Yn.delete(f), Ve && (!f.selection || !I.equals(f.selection, Ve)) && K.select(f, Ve);
    }
  }, [f, V, A, a, o, T]), N = Re((O) => {
    O == null ? (V.cancel(), T.cancel(), Ha.delete(f), Xr.delete(f), b.current && pr && b.current.removeEventListener("beforeinput", k)) : pr && O.addEventListener("beforeinput", k), b.current = O;
  }, [V, T, f, k]);
  sa(() => {
    var O = H.getWindow(f);
    return O.document.addEventListener("selectionchange", T), () => {
      O.document.removeEventListener("selectionchange", T);
    };
  }, [T]);
  var j = n([f, []]), $ = i && f.children.length === 1 && Array.from(Z.texts(f)).length === 1 && Z.string(f) === "" && !g, S = Re((O) => {
    if (O && $) {
      var _;
      B((_ = O.getBoundingClientRect()) === null || _ === void 0 ? void 0 : _.height);
    } else
      B(void 0);
  }, [$]);
  if ($) {
    var L = h.start(f, []);
    j.push({
      [Pn]: !0,
      placeholder: i,
      onPlaceholderResize: S,
      anchor: L,
      focus: L
    });
  }
  var {
    marks: q
  } = f;
  if (x.hasMarkPlaceholder = !1, f.selection && I.isCollapsed(f.selection) && q) {
    var {
      anchor: U
    } = f.selection, Y = Z.leaf(f, U.path), Q = xn(Y, ID);
    if (!ae.equals(Y, q, {
      loose: !0
    })) {
      x.hasMarkPlaceholder = !0;
      var ie = Object.fromEntries(Object.keys(Q).map((O) => [O, null]));
      j.push(qt(qt(qt({
        [yf]: !0
      }, ie), q), {}, {
        anchor: U,
        focus: U
      }));
    }
  }
  return ht(() => {
    setTimeout(() => {
      var {
        selection: O
      } = f;
      if (O) {
        var {
          anchor: _
        } = O, z = Z.leaf(f, _.path);
        if (q && !ae.equals(z, q, {
          loose: !0
        })) {
          Nt.set(f, q);
          return;
        }
      }
      Nt.delete(f);
    });
  }), /* @__PURE__ */ oe.createElement(Rf.Provider, {
    value: o
  }, /* @__PURE__ */ oe.createElement(Pf.Provider, {
    value: n
  }, /* @__PURE__ */ oe.createElement(ND, {
    node: b,
    receivedUserInput: w
  }, /* @__PURE__ */ oe.createElement(v, qt(qt({
    role: o ? void 0 : "textbox",
    "aria-multiline": o ? void 0 : !0
  }, m), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: pr || !za ? m.spellCheck : !1,
    autoCorrect: pr || !za ? m.autoCorrect : "false",
    autoCapitalize: pr || !za ? m.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !o,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: N,
    style: qt(qt({}, D ? {} : qt({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, F ? {
      minHeight: F
    } : {})), d),
    onBeforeInput: Re((O) => {
      if (!pr && !o && !ut(O, m.onBeforeInput) && H.hasSelectableTarget(f, O.target) && (O.preventDefault(), !H.isComposing(f))) {
        var _ = O.data;
        h.insertText(f, _);
      }
    }, [m.onBeforeInput, f, o]),
    onInput: Re((O) => {
      if (!ut(O, m.onInput)) {
        if (P.current) {
          P.current.handleInput();
          return;
        }
        for (var _ of C.current)
          _();
        C.current = [];
      }
    }, [m.onInput]),
    onBlur: Re((O) => {
      if (!(o || x.isUpdatingSelection || !H.hasSelectableTarget(f, O.target) || ut(O, m.onBlur))) {
        var _ = H.findDocumentOrShadowRoot(f);
        if (x.latestElement !== _.activeElement) {
          var {
            relatedTarget: z
          } = O, X = H.toDOMNode(f, f);
          if (z !== X && !(St(z) && z.hasAttribute("data-slate-spacer"))) {
            if (z != null && Br(z) && H.hasDOMNode(f, z)) {
              var ue = H.toSlateNode(f, z);
              if (re.isElement(ue) && !f.isVoid(ue))
                return;
            }
            if (zn) {
              var ne = _.getSelection();
              ne == null || ne.removeAllRanges();
            }
            wr.delete(f);
          }
        }
      }
    }, [o, x.isUpdatingSelection, x.latestElement, f, m.onBlur]),
    onClick: Re((O) => {
      if (H.hasTarget(f, O.target) && !ut(O, m.onClick) && Br(O.target)) {
        var _ = H.toSlateNode(f, O.target), z = H.findPath(f, _);
        if (!h.hasPath(f, z) || Z.get(f, z) !== _)
          return;
        if (O.detail === PD && z.length >= 1) {
          var X = z;
          if (!(re.isElement(_) && h.isBlock(f, _))) {
            var ue, ne = h.above(f, {
              match: (Ae) => re.isElement(Ae) && h.isBlock(f, Ae),
              at: z
            });
            X = (ue = ne == null ? void 0 : ne[1]) !== null && ue !== void 0 ? ue : z.slice(0, 1);
          }
          var se = h.range(f, X);
          K.select(f, se);
          return;
        }
        if (o)
          return;
        var fe = h.start(f, z), he = h.end(f, z), Ee = h.void(f, {
          at: fe
        }), J = h.void(f, {
          at: he
        });
        if (Ee && J && E.equals(Ee[1], J[1])) {
          var me = h.range(f, fe);
          K.select(f, me);
        }
      }
    }, [f, m.onClick, o]),
    onCompositionEnd: Re((O) => {
      if (H.hasSelectableTarget(f, O.target)) {
        var _;
        if (H.isComposing(f) && Promise.resolve().then(() => {
          p(!1), Wr.set(f, !1);
        }), (_ = P.current) === null || _ === void 0 || _.handleCompositionEnd(O), ut(O, m.onCompositionEnd) || st)
          return;
        if (!zn && !k0 && !x0 && !M0 && !j0 && O.data) {
          var z = Nt.get(f);
          Nt.delete(f), z !== void 0 && (sr.set(f, f.marks), f.marks = z), h.insertText(f, O.data);
          var X = sr.get(f);
          sr.delete(f), X !== void 0 && (f.marks = X);
        }
      }
    }, [m.onCompositionEnd, f]),
    onCompositionUpdate: Re((O) => {
      H.hasSelectableTarget(f, O.target) && !ut(O, m.onCompositionUpdate) && (H.isComposing(f) || (p(!0), Wr.set(f, !0)));
    }, [m.onCompositionUpdate, f]),
    onCompositionStart: Re((O) => {
      if (H.hasSelectableTarget(f, O.target)) {
        var _;
        if ((_ = P.current) === null || _ === void 0 || _.handleCompositionStart(O), ut(O, m.onCompositionStart) || st)
          return;
        p(!0);
        var {
          selection: z
        } = f;
        if (z && I.isExpanded(z)) {
          h.deleteFragment(f);
          return;
        }
      }
    }, [m.onCompositionStart, f]),
    onCopy: Re((O) => {
      H.hasSelectableTarget(f, O.target) && !ut(O, m.onCopy) && !El(O) && (O.preventDefault(), H.setFragmentData(f, O.clipboardData, "copy"));
    }, [m.onCopy, f]),
    onCut: Re((O) => {
      if (!o && H.hasSelectableTarget(f, O.target) && !ut(O, m.onCut) && !El(O)) {
        O.preventDefault(), H.setFragmentData(f, O.clipboardData, "cut");
        var {
          selection: _
        } = f;
        if (_)
          if (I.isExpanded(_))
            h.deleteFragment(f);
          else {
            var z = Z.parent(f, _.anchor.path);
            h.isVoid(f, z) && K.delete(f);
          }
      }
    }, [o, f, m.onCut]),
    onDragOver: Re((O) => {
      if (H.hasTarget(f, O.target) && !ut(O, m.onDragOver)) {
        var _ = H.toSlateNode(f, O.target);
        re.isElement(_) && h.isVoid(f, _) && O.preventDefault();
      }
    }, [m.onDragOver, f]),
    onDragStart: Re((O) => {
      if (!o && H.hasTarget(f, O.target) && !ut(O, m.onDragStart)) {
        var _ = H.toSlateNode(f, O.target), z = H.findPath(f, _), X = re.isElement(_) && h.isVoid(f, _) || h.void(f, {
          at: z,
          voids: !0
        });
        if (X) {
          var ue = h.range(f, z);
          K.select(f, ue);
        }
        x.isDraggingInternally = !0, H.setFragmentData(f, O.dataTransfer, "drag");
      }
    }, [o, f, m.onDragStart, x]),
    onDrop: Re((O) => {
      if (!o && H.hasTarget(f, O.target) && !ut(O, m.onDrop)) {
        O.preventDefault();
        var _ = f.selection, z = H.findEventRange(f, O), X = O.dataTransfer;
        K.select(f, z), x.isDraggingInternally && _ && !I.equals(_, z) && !h.void(f, {
          at: z,
          voids: !0
        }) && K.delete(f, {
          at: _
        }), H.insertData(f, X), H.isFocused(f) || H.focus(f);
      }
      x.isDraggingInternally = !1;
    }, [o, f, m.onDrop, x]),
    onDragEnd: Re((O) => {
      !o && x.isDraggingInternally && m.onDragEnd && H.hasTarget(f, O.target) && m.onDragEnd(O), x.isDraggingInternally = !1;
    }, [o, x, m, f]),
    onFocus: Re((O) => {
      if (!o && !x.isUpdatingSelection && H.hasEditableTarget(f, O.target) && !ut(O, m.onFocus)) {
        var _ = H.toDOMNode(f, f), z = H.findDocumentOrShadowRoot(f);
        if (x.latestElement = z.activeElement, hn && O.target !== _) {
          _.focus();
          return;
        }
        wr.set(f, !0);
      }
    }, [o, x, f, m.onFocus]),
    onKeyDown: Re((O) => {
      if (!o && H.hasEditableTarget(f, O.target)) {
        var _;
        (_ = P.current) === null || _ === void 0 || _.handleKeyDown(O);
        var {
          nativeEvent: z
        } = O;
        if (H.isComposing(f) && z.isComposing === !1 && (Wr.set(f, !1), p(!1)), ut(O, m.onKeyDown) || H.isComposing(f))
          return;
        var {
          selection: X
        } = f, ue = f.children[X !== null ? X.focus.path[0] : 0], ne = qc(Z.string(ue)) === "rtl";
        if (_e.isRedo(z)) {
          O.preventDefault();
          var se = f;
          typeof se.redo == "function" && se.redo();
          return;
        }
        if (_e.isUndo(z)) {
          O.preventDefault();
          var fe = f;
          typeof fe.undo == "function" && fe.undo();
          return;
        }
        if (_e.isMoveLineBackward(z)) {
          O.preventDefault(), K.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (_e.isMoveLineForward(z)) {
          O.preventDefault(), K.move(f, {
            unit: "line"
          });
          return;
        }
        if (_e.isExtendLineBackward(z)) {
          O.preventDefault(), K.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (_e.isExtendLineForward(z)) {
          O.preventDefault(), K.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (_e.isMoveBackward(z)) {
          O.preventDefault(), X && I.isCollapsed(X) ? K.move(f, {
            reverse: !ne
          }) : K.collapse(f, {
            edge: ne ? "end" : "start"
          });
          return;
        }
        if (_e.isMoveForward(z)) {
          O.preventDefault(), X && I.isCollapsed(X) ? K.move(f, {
            reverse: ne
          }) : K.collapse(f, {
            edge: ne ? "start" : "end"
          });
          return;
        }
        if (_e.isMoveWordBackward(z)) {
          O.preventDefault(), X && I.isExpanded(X) && K.collapse(f, {
            edge: "focus"
          }), K.move(f, {
            unit: "word",
            reverse: !ne
          });
          return;
        }
        if (_e.isMoveWordForward(z)) {
          O.preventDefault(), X && I.isExpanded(X) && K.collapse(f, {
            edge: "focus"
          }), K.move(f, {
            unit: "word",
            reverse: ne
          });
          return;
        }
        if (pr) {
          if ((Df || zn) && X && (_e.isDeleteBackward(z) || _e.isDeleteForward(z)) && I.isCollapsed(X)) {
            var he = Z.parent(f, X.anchor.path);
            if (re.isElement(he) && h.isVoid(f, he) && (h.isInline(f, he) || h.isBlock(f, he))) {
              O.preventDefault(), h.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (_e.isBold(z) || _e.isItalic(z) || _e.isTransposeCharacter(z)) {
            O.preventDefault();
            return;
          }
          if (_e.isSoftBreak(z)) {
            O.preventDefault(), h.insertSoftBreak(f);
            return;
          }
          if (_e.isSplitBlock(z)) {
            O.preventDefault(), h.insertBreak(f);
            return;
          }
          if (_e.isDeleteBackward(z)) {
            O.preventDefault(), X && I.isExpanded(X) ? h.deleteFragment(f, {
              direction: "backward"
            }) : h.deleteBackward(f);
            return;
          }
          if (_e.isDeleteForward(z)) {
            O.preventDefault(), X && I.isExpanded(X) ? h.deleteFragment(f, {
              direction: "forward"
            }) : h.deleteForward(f);
            return;
          }
          if (_e.isDeleteLineBackward(z)) {
            O.preventDefault(), X && I.isExpanded(X) ? h.deleteFragment(f, {
              direction: "backward"
            }) : h.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (_e.isDeleteLineForward(z)) {
            O.preventDefault(), X && I.isExpanded(X) ? h.deleteFragment(f, {
              direction: "forward"
            }) : h.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (_e.isDeleteWordBackward(z)) {
            O.preventDefault(), X && I.isExpanded(X) ? h.deleteFragment(f, {
              direction: "backward"
            }) : h.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (_e.isDeleteWordForward(z)) {
            O.preventDefault(), X && I.isExpanded(X) ? h.deleteFragment(f, {
              direction: "forward"
            }) : h.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [o, f, m.onKeyDown]),
    onPaste: Re((O) => {
      !o && H.hasEditableTarget(f, O.target) && !ut(O, m.onPaste) && (!pr || I0(O.nativeEvent) || zn) && (O.preventDefault(), H.insertData(f, O.clipboardData));
    }, [o, f, m.onPaste])
  }), /* @__PURE__ */ oe.createElement(LD, {
    decorations: j,
    node: f,
    renderElement: u,
    renderPlaceholder: l,
    renderLeaf: s,
    selection: f.selection
  })))));
}, _D = (t) => {
  var {
    attributes: e,
    children: r
  } = t;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ oe.createElement("span", qt({}, e), r, st && /* @__PURE__ */ oe.createElement("br", null))
  );
}, WD = () => [], zD = (t, e) => {
  if (e.getBoundingClientRect && (!t.selection || t.selection && I.isCollapsed(t.selection))) {
    var r = e.startContainer.parentElement;
    r.getBoundingClientRect = e.getBoundingClientRect.bind(e), Fg(r, {
      scrollMode: "if-needed"
    }), delete r.getBoundingClientRect;
  }
}, ut = (t, e) => {
  if (!e)
    return !1;
  var r = e(t);
  return r ?? (t.isDefaultPrevented() || t.isPropagationStopped());
}, El = (t) => Br(t.target) && (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement), HD = (t, e) => {
  if (!e)
    return !1;
  var r = e(t);
  return r ?? t.defaultPrevented;
}, qD = /* @__PURE__ */ Xt(!1), UD = /* @__PURE__ */ Xt({});
function KD(t) {
  var e = $e([]).current, r = $e({
    editor: t
  }).current, n = Re((i) => {
    r.editor = i, e.forEach((o) => o(i));
  }, [e, r]), a = bn(() => ({
    getSlate: () => r.editor,
    addEventListener: (i) => (e.push(i), () => {
      e.splice(e.indexOf(i), 1);
    })
  }), [e, r]);
  return {
    selectorContext: a,
    onChange: n
  };
}
var GD = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], YD = (t) => {
  var {
    editor: e,
    children: r,
    onChange: n,
    onSelectionChange: a,
    onValueChange: i,
    initialValue: o
  } = t, u = xn(t, GD), [s, l] = oe.useState(() => {
    if (!Z.isNodeList(o))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(tt.stringify(o)));
    if (!h.isEditor(e))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(tt.stringify(e)));
    return e.children = o, Object.assign(e, u), {
      v: 0,
      editor: e
    };
  }), {
    selectorContext: c,
    onChange: d
  } = KD(e), v = Re((f) => {
    var g;
    switch (n && n(e.children), f == null || (g = f.operation) === null || g === void 0 ? void 0 : g.type) {
      case "set_selection":
        a == null || a(e.selection);
        break;
      default:
        i == null || i(e.children);
    }
    l((p) => ({
      v: p.v + 1,
      editor: e
    })), d(e);
  }, [e, d, n, a, i]);
  ht(() => (xo.set(e, v), () => {
    xo.set(e, () => {
    });
  }), [e, v]);
  var [D, m] = lr(H.isFocused(e));
  return ht(() => {
    m(H.isFocused(e));
  }, [e]), sa(() => {
    var f = () => m(H.isFocused(e));
    return mf >= 17 ? (document.addEventListener("focusin", f), document.addEventListener("focusout", f), () => {
      document.removeEventListener("focusin", f), document.removeEventListener("focusout", f);
    }) : (document.addEventListener("focus", f, !0), document.addEventListener("blur", f, !0), () => {
      document.removeEventListener("focus", f, !0), document.removeEventListener("blur", f, !0);
    });
  }, []), /* @__PURE__ */ oe.createElement(UD.Provider, {
    value: c
  }, /* @__PURE__ */ oe.createElement(jf.Provider, {
    value: s
  }, /* @__PURE__ */ oe.createElement(Pu.Provider, {
    value: s.editor
  }, /* @__PURE__ */ oe.createElement(qD.Provider, {
    value: D
  }, r))));
}, wl = (t, e) => {
  var r = (e.top + e.bottom) / 2;
  return t.top <= r && t.bottom >= r;
}, Fl = (t, e, r) => {
  var n = H.toDOMRange(t, e).getBoundingClientRect(), a = H.toDOMRange(t, r).getBoundingClientRect();
  return wl(n, a) && wl(a, n);
}, XD = (t, e) => {
  var r = h.range(t, I.end(e)), n = Array.from(h.positions(t, {
    at: e
  })), a = 0, i = n.length, o = Math.floor(i / 2);
  if (Fl(t, h.range(t, n[a]), r))
    return h.range(t, n[a], r);
  if (n.length < 2)
    return h.range(t, n[n.length - 1], r);
  for (; o !== n.length && o !== a; )
    Fl(t, h.range(t, n[o]), r) ? i = o : a = o, o = Math.floor((a + i) / 2);
  return h.range(t, n[i], r);
};
function Al(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Bl(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Al(Object(r), !0).forEach(function(n) {
      xt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Al(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var JD = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = e, {
    apply: a,
    onChange: i,
    deleteBackward: o,
    addMark: u,
    removeMark: s
  } = n;
  return Di.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (l, c) => {
    var d, v;
    (d = ku.get(n)) === null || d === void 0 || d(), !Nt.get(n) && (v = dt.get(n)) !== null && v !== void 0 && v.length && Nt.set(n, null), sr.delete(n), u(l, c);
  }, n.removeMark = (l) => {
    var c;
    !Nt.get(n) && (c = dt.get(n)) !== null && c !== void 0 && c.length && Nt.set(n, null), sr.delete(n), s(l);
  }, n.deleteBackward = (l) => {
    if (l !== "line")
      return o(l);
    if (n.selection && I.isCollapsed(n.selection)) {
      var c = h.above(n, {
        match: (m) => re.isElement(m) && h.isBlock(n, m),
        at: n.selection
      });
      if (c) {
        var [, d] = c, v = h.range(n, d, n.selection.anchor), D = XD(n, v);
        I.isCollapsed(D) || K.delete(n, {
          at: D
        });
      }
    }
  }, n.apply = (l) => {
    var c = [], d = [], v = dt.get(n);
    if (v != null && v.length) {
      var D = v.map((N) => J0(N, l)).filter(Boolean);
      dt.set(n, D);
    }
    var m = Cr.get(n);
    m && Cr.set(n, vl(n, m, l));
    var f = br.get(n);
    if (f != null && f.at) {
      var g = ge.isPoint(f == null ? void 0 : f.at) ? Ro(n, f.at, l) : vl(n, f.at, l);
      br.set(n, g ? Bl(Bl({}, f), {}, {
        at: g
      }) : null);
    }
    switch (l.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...sn(n, l.path));
        break;
      }
      case "set_selection": {
        var p;
        (p = Yn.get(n)) === null || p === void 0 || p.unref(), Yn.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...sn(n, E.parent(l.path)));
        break;
      }
      case "merge_node": {
        var b = E.previous(l.path);
        c.push(...sn(n, b));
        break;
      }
      case "move_node": {
        var C = E.common(E.parent(l.path), E.parent(l.newPath));
        c.push(...sn(n, C));
        var F;
        E.isBefore(l.path, l.newPath) ? (c.push(...sn(n, E.parent(l.path))), F = l.newPath) : (c.push(...sn(n, E.parent(l.newPath))), F = l.path);
        var B = Z.get(e, E.parent(F)), A = H.findKey(n, B), w = h.pathRef(n, E.parent(F));
        d.push([w, A]);
        break;
      }
    }
    a(l);
    for (var [M, x] of c) {
      var [P] = h.node(n, M);
      ri.set(P, x);
    }
    for (var [V, T] of d)
      if (V.current) {
        var [k] = h.node(n, V.current);
        ri.set(k, T);
      }
  }, n.setFragmentData = (l) => {
    var {
      selection: c
    } = n;
    if (c) {
      var [d, v] = I.edges(c), D = h.void(n, {
        at: d.path
      }), m = h.void(n, {
        at: v.path
      });
      if (!(I.isCollapsed(c) && !D)) {
        var f = H.toDOMRange(n, c), g = f.cloneContents(), p = g.childNodes[0];
        if (g.childNodes.forEach((P) => {
          P.textContent && P.textContent.trim() !== "" && (p = P);
        }), m) {
          var [b] = m, C = f.cloneRange(), F = H.toDOMNode(n, b);
          C.setEndAfter(F), g = C.cloneContents();
        }
        if (D && (p = g.querySelector("[data-slate-spacer]")), Array.from(g.querySelectorAll("[data-slate-zero-width]")).forEach((P) => {
          var V = P.getAttribute("data-slate-zero-width") === "n";
          P.textContent = V ? `
` : "";
        }), Ef(p)) {
          var B = p.ownerDocument.createElement("span");
          B.style.whiteSpace = "pre", B.appendChild(p), g.appendChild(B), p = B;
        }
        var A = n.getFragment(), w = JSON.stringify(A), M = window.btoa(encodeURIComponent(w));
        p.setAttribute("data-slate-fragment", M), l.setData("application/".concat(r), M);
        var x = g.ownerDocument.createElement("div");
        return x.appendChild(g), x.setAttribute("hidden", "true"), g.ownerDocument.body.appendChild(x), l.setData("text/html", x.innerHTML), l.setData("text/plain", Ff(x)), g.ownerDocument.body.removeChild(x), l;
      }
    }
  }, n.insertData = (l) => {
    n.insertFragmentData(l) || n.insertTextData(l);
  }, n.insertFragmentData = (l) => {
    var c = l.getData("application/".concat(r)) || z0(l);
    if (c) {
      var d = decodeURIComponent(window.atob(c)), v = JSON.parse(d);
      return n.insertFragment(v), !0;
    }
    return !1;
  }, n.insertTextData = (l) => {
    var c = l.getData("text/plain");
    if (c) {
      var d = c.split(/\r\n|\r|\n/), v = !1;
      for (var D of d)
        v && K.splitNodes(n, {
          always: !0
        }), n.insertText(D), v = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (l) => {
    var c = mf < 18 ? fc.unstable_batchedUpdates : (d) => d();
    c(() => {
      var d = xo.get(n);
      d && d(l), i(l);
    });
  }, n;
}, sn = (t, e) => {
  var r = [];
  for (var [n, a] of h.levels(t, {
    at: e
  })) {
    var i = H.findKey(t, n);
    r.push([a, i]);
  }
  return r;
}, ZD = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(t) {
    return rt(t) && Array.isArray(t.redos) && Array.isArray(t.undos) && (t.redos.length === 0 || Er.isOperationList(t.redos[0].operations)) && (t.undos.length === 0 || Er.isOperationList(t.undos[0].operations));
  }
}, Hi = /* @__PURE__ */ new WeakMap(), qi = /* @__PURE__ */ new WeakMap(), gn = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(t) {
    return ZD.isHistory(t.history) && h.isEditor(t);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(t) {
    return qi.get(t);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(t) {
    return Hi.get(t);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(t) {
    t.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(t) {
    t.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(t, e) {
    var r = gn.isMerging(t);
    qi.set(t, !1), e(), qi.set(t, r);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(t, e) {
    var r = gn.isSaving(t);
    Hi.set(t, !1), e(), Hi.set(t, r);
  }
}, QD = (t) => {
  var e = t, {
    apply: r
  } = e;
  return e.history = {
    undos: [],
    redos: []
  }, e.redo = () => {
    var {
      history: n
    } = e, {
      redos: a
    } = n;
    if (a.length > 0) {
      var i = a[a.length - 1];
      i.selectionBefore && K.setSelection(e, i.selectionBefore), gn.withoutSaving(e, () => {
        h.withoutNormalizing(e, () => {
          for (var o of i.operations)
            e.apply(o);
        });
      }), n.redos.pop(), e.writeHistory("undos", i);
    }
  }, e.undo = () => {
    var {
      history: n
    } = e, {
      undos: a
    } = n;
    if (a.length > 0) {
      var i = a[a.length - 1];
      gn.withoutSaving(e, () => {
        h.withoutNormalizing(e, () => {
          var o = i.operations.map(Er.inverse).reverse();
          for (var u of o)
            e.apply(u);
          i.selectionBefore && K.setSelection(e, i.selectionBefore);
        });
      }), e.writeHistory("redos", i), n.undos.pop();
    }
  }, e.apply = (n) => {
    var {
      operations: a,
      history: i
    } = e, {
      undos: o
    } = i, u = o[o.length - 1], s = u && u.operations[u.operations.length - 1], l = gn.isSaving(e), c = gn.isMerging(e);
    if (l == null && (l = tb(n)), l) {
      if (c == null && (u == null ? c = !1 : a.length !== 0 ? c = !0 : c = eb(n, s)), u && c)
        u.operations.push(n);
      else {
        var d = {
          operations: [n],
          selectionBefore: e.selection
        };
        e.writeHistory("undos", d);
      }
      for (; o.length > 100; )
        o.shift();
      i.redos = [];
    }
    r(n);
  }, e.writeHistory = (n, a) => {
    e.history[n].push(a);
  }, e;
}, eb = (t, e) => !!(e && t.type === "insert_text" && e.type === "insert_text" && t.offset === e.offset + e.text.length && E.equals(t.path, e.path) || e && t.type === "remove_text" && e.type === "remove_text" && t.offset + t.text.length === e.offset && E.equals(t.path, e.path)), tb = (t, e) => t.type !== "set_selection", Lt = /* @__PURE__ */ ((t) => (t.Paragraph = "paragraph", t.Heading = "heading", t.Bold = "bold", t.Code = "code", t.CheckList = "check-list", t))(Lt || {});
function rb() {
  return [
    {
      type: Lt.Paragraph,
      children: [{ text: "" }]
    }
  ];
}
function nb(t) {
  const { selection: e } = t;
  return !!(e && I.isCollapsed(e));
}
const fr = Symbol.for("@ts-pattern/matcher"), ab = Symbol.for("@ts-pattern/isVariadic"), ni = "@ts-pattern/anonymous-select-key", jo = (t) => !!(t && typeof t == "object"), qa = (t) => t && !!t[fr], Gt = (t, e, r) => {
  if (qa(t)) {
    const n = t[fr](), { matched: a, selections: i } = n.match(e);
    return a && i && Object.keys(i).forEach((o) => r(o, i[o])), a;
  }
  if (jo(t)) {
    if (!jo(e))
      return !1;
    if (Array.isArray(t)) {
      if (!Array.isArray(e))
        return !1;
      let n = [], a = [], i = [];
      for (const o of t.keys()) {
        const u = t[o];
        qa(u) && u[ab] ? i.push(u) : i.length ? a.push(u) : n.push(u);
      }
      if (i.length) {
        if (i.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (e.length < n.length + a.length)
          return !1;
        const o = e.slice(0, n.length), u = a.length === 0 ? [] : e.slice(-a.length), s = e.slice(n.length, a.length === 0 ? 1 / 0 : -a.length);
        return n.every((l, c) => Gt(l, o[c], r)) && a.every((l, c) => Gt(l, u[c], r)) && (i.length === 0 || Gt(i[0], s, r));
      }
      return t.length === e.length && t.every((o, u) => Gt(o, e[u], r));
    }
    return Object.keys(t).every((n) => {
      const a = t[n];
      return (n in e || qa(i = a) && i[fr]().matcherType === "optional") && Gt(a, e[n], r);
      var i;
    });
  }
  return Object.is(e, t);
}, Or = (t) => {
  var e, r, n;
  return jo(t) ? qa(t) ? (e = (r = (n = t[fr]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? e : [] : Array.isArray(t) ? la(t, Or) : la(Object.values(t), Or) : [];
}, la = (t, e) => t.reduce((r, n) => r.concat(e(n)), []);
function Tt(t) {
  return Object.assign(t, { optional: () => ib(t), and: (e) => We(t, e), or: (e) => ob(t, e), select: (e) => e === void 0 ? Ol(t) : Ol(e, t) });
}
function ib(t) {
  return Tt({ [fr]: () => ({ match: (e) => {
    let r = {};
    const n = (a, i) => {
      r[a] = i;
    };
    return e === void 0 ? (Or(t).forEach((a) => n(a, void 0)), { matched: !0, selections: r }) : { matched: Gt(t, e, n), selections: r };
  }, getSelectionKeys: () => Or(t), matcherType: "optional" }) });
}
function We(...t) {
  return Tt({ [fr]: () => ({ match: (e) => {
    let r = {};
    const n = (a, i) => {
      r[a] = i;
    };
    return { matched: t.every((a) => Gt(a, e, n)), selections: r };
  }, getSelectionKeys: () => la(t, Or), matcherType: "and" }) });
}
function ob(...t) {
  return Tt({ [fr]: () => ({ match: (e) => {
    let r = {};
    const n = (a, i) => {
      r[a] = i;
    };
    return la(t, Or).forEach((a) => n(a, void 0)), { matched: t.some((a) => Gt(a, e, n)), selections: r };
  }, getSelectionKeys: () => la(t, Or), matcherType: "or" }) });
}
function Te(t) {
  return { [fr]: () => ({ match: (e) => ({ matched: !!t(e) }) }) };
}
function Ol(...t) {
  const e = typeof t[0] == "string" ? t[0] : void 0, r = t.length === 2 ? t[1] : typeof t[0] == "string" ? void 0 : t[0];
  return Tt({ [fr]: () => ({ match: (n) => {
    let a = { [e ?? ni]: n };
    return { matched: r === void 0 || Gt(r, n, (i, o) => {
      a[i] = o;
    }), selections: a };
  }, getSelectionKeys: () => [e ?? ni].concat(r === void 0 ? [] : Or(r)) }) });
}
function Ut(t) {
  return typeof t == "number";
}
function Ir(t) {
  return typeof t == "string";
}
function mr(t) {
  return typeof t == "bigint";
}
Tt(Te(function(t) {
  return !0;
}));
const Lr = (t) => Object.assign(Tt(t), { startsWith: (e) => {
  return Lr(We(t, (r = e, Te((n) => Ir(n) && n.startsWith(r)))));
  var r;
}, endsWith: (e) => {
  return Lr(We(t, (r = e, Te((n) => Ir(n) && n.endsWith(r)))));
  var r;
}, minLength: (e) => Lr(We(t, ((r) => Te((n) => Ir(n) && n.length >= r))(e))), maxLength: (e) => Lr(We(t, ((r) => Te((n) => Ir(n) && n.length <= r))(e))), includes: (e) => {
  return Lr(We(t, (r = e, Te((n) => Ir(n) && n.includes(r)))));
  var r;
}, regex: (e) => {
  return Lr(We(t, (r = e, Te((n) => Ir(n) && !!n.match(r)))));
  var r;
} });
Lr(Te(Ir));
const Kt = (t) => Object.assign(Tt(t), { between: (e, r) => Kt(We(t, ((n, a) => Te((i) => Ut(i) && n <= i && a >= i))(e, r))), lt: (e) => Kt(We(t, ((r) => Te((n) => Ut(n) && n < r))(e))), gt: (e) => Kt(We(t, ((r) => Te((n) => Ut(n) && n > r))(e))), lte: (e) => Kt(We(t, ((r) => Te((n) => Ut(n) && n <= r))(e))), gte: (e) => Kt(We(t, ((r) => Te((n) => Ut(n) && n >= r))(e))), int: () => Kt(We(t, Te((e) => Ut(e) && Number.isInteger(e)))), finite: () => Kt(We(t, Te((e) => Ut(e) && Number.isFinite(e)))), positive: () => Kt(We(t, Te((e) => Ut(e) && e > 0))), negative: () => Kt(We(t, Te((e) => Ut(e) && e < 0))) });
Kt(Te(Ut));
const Dr = (t) => Object.assign(Tt(t), { between: (e, r) => Dr(We(t, ((n, a) => Te((i) => mr(i) && n <= i && a >= i))(e, r))), lt: (e) => Dr(We(t, ((r) => Te((n) => mr(n) && n < r))(e))), gt: (e) => Dr(We(t, ((r) => Te((n) => mr(n) && n > r))(e))), lte: (e) => Dr(We(t, ((r) => Te((n) => mr(n) && n <= r))(e))), gte: (e) => Dr(We(t, ((r) => Te((n) => mr(n) && n >= r))(e))), positive: () => Dr(We(t, Te((e) => mr(e) && e > 0))), negative: () => Dr(We(t, Te((e) => mr(e) && e < 0))) });
Dr(Te(mr));
Tt(Te(function(t) {
  return typeof t == "boolean";
}));
Tt(Te(function(t) {
  return typeof t == "symbol";
}));
Tt(Te(function(t) {
  return t == null;
}));
Tt(Te(function(t) {
  return t != null;
}));
const Mo = { matched: !1, value: void 0 };
function yn(t) {
  return new ai(t, Mo);
}
class ai {
  constructor(e, r) {
    this.input = void 0, this.state = void 0, this.input = e, this.state = r;
  }
  with(...e) {
    if (this.state.matched)
      return this;
    const r = e[e.length - 1], n = [e[0]];
    let a;
    e.length === 3 && typeof e[1] == "function" ? a = e[1] : e.length > 2 && n.push(...e.slice(1, e.length - 1));
    let i = !1, o = {};
    const u = (l, c) => {
      i = !0, o[l] = c;
    }, s = !n.some((l) => Gt(l, this.input, u)) || a && !a(this.input) ? Mo : { matched: !0, value: r(i ? ni in o ? o[ni] : o : this.input, this.input) };
    return new ai(this.input, s);
  }
  when(e, r) {
    if (this.state.matched)
      return this;
    const n = !!e(this.input);
    return new ai(this.input, n ? { matched: !0, value: r(this.input, this.input) } : Mo);
  }
  otherwise(e) {
    return this.state.matched ? this.state.value : e(this.input);
  }
  exhaustive() {
    if (this.state.matched)
      return this.state.value;
    let e;
    try {
      e = JSON.stringify(this.input);
    } catch {
      e = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${e}`);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
}
const ii = {
  isBoldMarkActive(t) {
    const e = h.marks(t);
    return yn(e).with({ bold: !0 }, () => !0).otherwise(() => !1);
  },
  toggleBoldMark(t) {
    const e = ii.isBoldMarkActive(t);
    yn(e).with(!0, () => {
      h.removeMark(t, "bold");
    }).otherwise(() => {
      h.addMark(t, "bold", !0);
    });
  },
  isCheckListNode(t) {
    const [e] = h.nodes(t, {
      match: (r) => r.type === Lt.CheckList
    });
    return !!e;
  },
  toggleCheckListNode(t) {
    const e = ii.isCheckListNode(t);
    K.setNodes(
      t,
      { type: e ? Lt.Paragraph : Lt.CheckList },
      { match: (r) => re.isElement(r) && h.isBlock(t, r) }
    );
  }
}, ub = (t) => {
  const { deleteBackward: e } = t;
  return t.deleteBackward = (...r) => {
    const { selection: n } = t;
    if (n && nb(t)) {
      const [a] = h.nodes(t, {
        match: (i) => !h.isEditor(i) && re.isElement(i) && i.type === Lt.CheckList
      });
      if (a) {
        const [, i] = a, o = h.start(t, i);
        if (ge.equals(n.anchor, o)) {
          const u = {
            type: Lt.Paragraph
          };
          K.setNodes(t, u, {
            match: (s) => !h.isEditor(s) && re.isElement(s) && s.type === Lt.CheckList
          });
          return;
        }
      }
    }
    e(...r);
  }, t;
}, sb = () => {
  const [t, e] = lr(!0);
  return [bn(() => ub(JD(QD(t0()))), []), { showPlaceholder: t, handlePlaceholder: (a) => {
  } }];
};
var Nf = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var e = {}.hasOwnProperty;
    function r() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var u = arguments[o];
        u && (i = a(i, n(u)));
      }
      return i;
    }
    function n(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return r.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var u in i)
        e.call(i, u) && i[u] && (o = a(o, u));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    t.exports ? (r.default = r, t.exports = r) : window.classNames = r;
  })();
})(Nf);
var lb = Nf.exports;
const Sr = /* @__PURE__ */ li(lb);
var No = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sl;
function cb() {
  if (Sl)
    return xe;
  Sl = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function f(g) {
    if (typeof g == "object" && g !== null) {
      var p = g.$$typeof;
      switch (p) {
        case t:
          switch (g = g.type, g) {
            case r:
            case a:
            case n:
            case l:
            case c:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case u:
                case o:
                case s:
                case v:
                case d:
                case i:
                  return g;
                default:
                  return p;
              }
          }
        case e:
          return p;
      }
    }
  }
  return xe.ContextConsumer = o, xe.ContextProvider = i, xe.Element = t, xe.ForwardRef = s, xe.Fragment = r, xe.Lazy = v, xe.Memo = d, xe.Portal = e, xe.Profiler = a, xe.StrictMode = n, xe.Suspense = l, xe.SuspenseList = c, xe.isAsyncMode = function() {
    return !1;
  }, xe.isConcurrentMode = function() {
    return !1;
  }, xe.isContextConsumer = function(g) {
    return f(g) === o;
  }, xe.isContextProvider = function(g) {
    return f(g) === i;
  }, xe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, xe.isForwardRef = function(g) {
    return f(g) === s;
  }, xe.isFragment = function(g) {
    return f(g) === r;
  }, xe.isLazy = function(g) {
    return f(g) === v;
  }, xe.isMemo = function(g) {
    return f(g) === d;
  }, xe.isPortal = function(g) {
    return f(g) === e;
  }, xe.isProfiler = function(g) {
    return f(g) === a;
  }, xe.isStrictMode = function(g) {
    return f(g) === n;
  }, xe.isSuspense = function(g) {
    return f(g) === l;
  }, xe.isSuspenseList = function(g) {
    return f(g) === c;
  }, xe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === a || g === n || g === l || g === c || g === D || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === d || g.$$typeof === i || g.$$typeof === o || g.$$typeof === s || g.$$typeof === m || g.getModuleId !== void 0);
  }, xe.typeOf = f, xe;
}
var Pe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xl;
function fb() {
  return xl || (xl = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), m = !1, f = !1, g = !1, p = !1, b = !1, C;
    C = Symbol.for("react.module.reference");
    function F(J) {
      return !!(typeof J == "string" || typeof J == "function" || J === r || J === a || b || J === n || J === l || J === c || p || J === D || m || f || g || typeof J == "object" && J !== null && (J.$$typeof === v || J.$$typeof === d || J.$$typeof === i || J.$$typeof === o || J.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      J.$$typeof === C || J.getModuleId !== void 0));
    }
    function B(J) {
      if (typeof J == "object" && J !== null) {
        var me = J.$$typeof;
        switch (me) {
          case t:
            var Ae = J.type;
            switch (Ae) {
              case r:
              case a:
              case n:
              case l:
              case c:
                return Ae;
              default:
                var we = Ae && Ae.$$typeof;
                switch (we) {
                  case u:
                  case o:
                  case s:
                  case v:
                  case d:
                  case i:
                    return we;
                  default:
                    return me;
                }
            }
          case e:
            return me;
        }
      }
    }
    var A = o, w = i, M = t, x = s, P = r, V = v, T = d, k = e, N = a, j = n, $ = l, S = c, L = !1, q = !1;
    function U(J) {
      return L || (L = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Y(J) {
      return q || (q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(J) {
      return B(J) === o;
    }
    function ie(J) {
      return B(J) === i;
    }
    function O(J) {
      return typeof J == "object" && J !== null && J.$$typeof === t;
    }
    function _(J) {
      return B(J) === s;
    }
    function z(J) {
      return B(J) === r;
    }
    function X(J) {
      return B(J) === v;
    }
    function ue(J) {
      return B(J) === d;
    }
    function ne(J) {
      return B(J) === e;
    }
    function se(J) {
      return B(J) === a;
    }
    function fe(J) {
      return B(J) === n;
    }
    function he(J) {
      return B(J) === l;
    }
    function Ee(J) {
      return B(J) === c;
    }
    Pe.ContextConsumer = A, Pe.ContextProvider = w, Pe.Element = M, Pe.ForwardRef = x, Pe.Fragment = P, Pe.Lazy = V, Pe.Memo = T, Pe.Portal = k, Pe.Profiler = N, Pe.StrictMode = j, Pe.Suspense = $, Pe.SuspenseList = S, Pe.isAsyncMode = U, Pe.isConcurrentMode = Y, Pe.isContextConsumer = Q, Pe.isContextProvider = ie, Pe.isElement = O, Pe.isForwardRef = _, Pe.isFragment = z, Pe.isLazy = X, Pe.isMemo = ue, Pe.isPortal = ne, Pe.isProfiler = se, Pe.isStrictMode = fe, Pe.isSuspense = he, Pe.isSuspenseList = Ee, Pe.isValidElementType = F, Pe.typeOf = B;
  }()), Pe;
}
process.env.NODE_ENV === "production" ? No.exports = cb() : No.exports = fb();
var Ua = No.exports;
function $o(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return oe.Children.forEach(t, function(n) {
    n == null && !e.keepEmpty || (Array.isArray(n) ? r = r.concat($o(n)) : Ua.isFragment(n) && n.props ? r = r.concat($o(n.props.children, e)) : r.push(n));
  }), r;
}
function db(t) {
  return t instanceof HTMLElement || t instanceof SVGElement;
}
function vb(t) {
  return db(t) ? t : t instanceof oe.Component ? fc.findDOMNode(t) : null;
}
function $f(t, e) {
  typeof t == "function" ? t(e) : Me(t) === "object" && t && "current" in t && (t.current = e);
}
function hb() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var n = e.filter(function(a) {
    return a;
  });
  return n.length <= 1 ? n[0] : function(a) {
    e.forEach(function(i) {
      $f(i, a);
    });
  };
}
function If(t) {
  var e, r, n = Ua.isMemo(t) ? t.type.type : t.type;
  return !(typeof n == "function" && !((e = n.prototype) !== null && e !== void 0 && e.render) && n.$$typeof !== Ua.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== Ua.ForwardRef);
}
function Io(t, e) {
  return Io = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Io(t, e);
}
function fa(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && Io(t, e);
}
function xr(t) {
  return xr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, xr(t);
}
function bi() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (bi = function() {
    return !!t;
  })();
}
function Fe(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function Nu(t, e) {
  if (e && (Me(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Fe(t);
}
function $u(t) {
  var e = bi();
  return function() {
    var n = xr(t), a;
    if (e) {
      var i = xr(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return Nu(this, a);
  };
}
function gb(t, e) {
  var r = te({}, t);
  return Array.isArray(e) && e.forEach(function(n) {
    delete r[n];
  }), r;
}
var Lf = function(e) {
  return +setTimeout(e, 16);
}, Vf = function(e) {
  return clearTimeout(e);
};
typeof window < "u" && "requestAnimationFrame" in window && (Lf = function(e) {
  return window.requestAnimationFrame(e);
}, Vf = function(e) {
  return window.cancelAnimationFrame(e);
});
var Pl = 0, Ci = /* @__PURE__ */ new Map();
function _f(t) {
  Ci.delete(t);
}
var Pr = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Pl += 1;
  var n = Pl;
  function a(i) {
    if (i === 0)
      _f(n), e();
    else {
      var o = Lf(function() {
        a(i - 1);
      });
      Ci.set(n, o);
    }
  }
  return a(r), n;
};
Pr.cancel = function(t) {
  var e = Ci.get(t);
  return _f(t), Vf(e);
};
process.env.NODE_ENV !== "production" && (Pr.ids = function() {
  return Ci;
});
var pb = /* @__PURE__ */ Xt({});
function mb(t) {
  return dc(t) || gc(t) || cu(t) || vc();
}
function Yt(t, e) {
  for (var r = t, n = 0; n < e.length; n += 1) {
    if (r == null)
      return;
    r = r[e[n]];
  }
  return r;
}
function Wf(t, e, r, n) {
  if (!e.length)
    return r;
  var a = mb(e), i = a[0], o = a.slice(1), u;
  return !t && typeof i == "number" ? u = [] : Array.isArray(t) ? u = de(t) : u = te({}, t), n && r === void 0 && o.length === 1 ? delete u[i][o[0]] : u[i] = Wf(u[i], o, r, n), u;
}
function jt(t, e, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return e.length && n && r === void 0 && !Yt(t, e.slice(0, -1)) ? t : Wf(t, e, r, n);
}
function Db(t) {
  return Me(t) === "object" && t !== null && Object.getPrototypeOf(t) === Object.prototype;
}
function Tl(t) {
  return Array.isArray(t) ? [] : {};
}
var bb = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function pn() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var n = Tl(e[0]);
  return e.forEach(function(a) {
    function i(o, u) {
      var s = new Set(u), l = Yt(a, o), c = Array.isArray(l);
      if (c || Db(l)) {
        if (!s.has(l)) {
          s.add(l);
          var d = Yt(n, o);
          c ? n = jt(n, o, []) : (!d || Me(d) !== "object") && (n = jt(n, o, Tl(l))), bb(l).forEach(function(v) {
            i([].concat(de(o), [v]), s);
          });
        }
      } else
        n = jt(n, o, l);
    }
    i([]);
  }), n;
}
function zf() {
}
let or = null;
function Cb() {
  or = null, bc();
}
let Iu = zf;
process.env.NODE_ENV !== "production" && (Iu = (t, e, r) => {
  Ge(t, `[antd: ${e}] ${r}`), process.env.NODE_ENV === "test" && Cb();
});
const Hf = /* @__PURE__ */ R.createContext({}), yi = process.env.NODE_ENV !== "production" ? (t) => {
  const {
    strict: e
  } = R.useContext(Hf), r = (n, a, i) => {
    if (!n)
      if (e === !1 && a === "deprecated") {
        const o = or;
        or || (or = {}), or[t] = or[t] || [], or[t].includes(i || "") || or[t].push(i || ""), o || console.warn("[antd] There exists deprecated usage in your code:", or);
      } else
        process.env.NODE_ENV !== "production" && Iu(n, t, i);
  };
  return r.deprecated = (n, a, i, o) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${i}\` instead.${o ? ` ${o}` : ""}`);
  }, r;
} : () => {
  const t = () => {
  };
  return t.deprecated = zf, t;
}, Ei = Iu, yb = /* @__PURE__ */ Xt(void 0);
var Eb = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, wb = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const Fb = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, qf = Fb, Ab = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, wb),
  timePickerLocale: Object.assign({}, qf)
}, Rl = Ab, mt = "${label} is not a valid ${type}", wi = {
  locale: "en",
  Pagination: Eb,
  DatePicker: Rl,
  TimePicker: qf,
  Calendar: Rl,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: mt,
        method: mt,
        array: mt,
        object: mt,
        number: mt,
        date: mt,
        boolean: mt,
        integer: mt,
        float: mt,
        regexp: mt,
        email: mt,
        url: mt,
        hex: mt
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
Object.assign({}, wi.Modal);
let Ka = [];
const kl = () => Ka.reduce((t, e) => Object.assign(Object.assign({}, t), e), wi.Modal);
function Bb(t) {
  if (t) {
    const e = Object.assign({}, t);
    return Ka.push(e), kl(), () => {
      Ka = Ka.filter((r) => r !== e), kl();
    };
  }
  Object.assign({}, wi.Modal);
}
const Ob = /* @__PURE__ */ Xt(void 0), Uf = Ob, Kf = "internalMark", Gf = (t) => {
  const {
    locale: e = {},
    children: r,
    _ANT_MARK__: n
  } = t;
  if (process.env.NODE_ENV !== "production") {
    const i = yi("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(n === Kf, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  R.useEffect(() => Bb(e && e.Modal), [e]);
  const a = R.useMemo(() => Object.assign(Object.assign({}, e), {
    exist: !0
  }), [e]);
  return /* @__PURE__ */ R.createElement(Uf.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (Gf.displayName = "LocaleProvider");
const Sb = Gf;
function nt(t, e) {
  xb(t) && (t = "100%");
  var r = Pb(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), r && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function Sa(t) {
  return Math.min(1, Math.max(0, t));
}
function xb(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Pb(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Yf(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function xa(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function zr(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function Tb(t, e, r) {
  return {
    r: nt(t, 255) * 255,
    g: nt(e, 255) * 255,
    b: nt(r, 255) * 255
  };
}
function jl(t, e, r) {
  t = nt(t, 255), e = nt(e, 255), r = nt(r, 255);
  var n = Math.max(t, e, r), a = Math.min(t, e, r), i = 0, o = 0, u = (n + a) / 2;
  if (n === a)
    o = 0, i = 0;
  else {
    var s = n - a;
    switch (o = u > 0.5 ? s / (2 - n - a) : s / (n + a), n) {
      case t:
        i = (e - r) / s + (e < r ? 6 : 0);
        break;
      case e:
        i = (r - t) / s + 2;
        break;
      case r:
        i = (t - e) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: o, l: u };
}
function Ui(t, e, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * (6 * r) : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
}
function Rb(t, e, r) {
  var n, a, i;
  if (t = nt(t, 360), e = nt(e, 100), r = nt(r, 100), e === 0)
    a = r, i = r, n = r;
  else {
    var o = r < 0.5 ? r * (1 + e) : r + e - r * e, u = 2 * r - o;
    n = Ui(u, o, t + 1 / 3), a = Ui(u, o, t), i = Ui(u, o, t - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: i * 255 };
}
function Lo(t, e, r) {
  t = nt(t, 255), e = nt(e, 255), r = nt(r, 255);
  var n = Math.max(t, e, r), a = Math.min(t, e, r), i = 0, o = n, u = n - a, s = n === 0 ? 0 : u / n;
  if (n === a)
    i = 0;
  else {
    switch (n) {
      case t:
        i = (e - r) / u + (e < r ? 6 : 0);
        break;
      case e:
        i = (r - t) / u + 2;
        break;
      case r:
        i = (t - e) / u + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: o };
}
function kb(t, e, r) {
  t = nt(t, 360) * 6, e = nt(e, 100), r = nt(r, 100);
  var n = Math.floor(t), a = t - n, i = r * (1 - e), o = r * (1 - a * e), u = r * (1 - (1 - a) * e), s = n % 6, l = [r, o, i, i, u, r][s], c = [u, r, r, o, i, i][s], d = [i, i, u, r, r, o][s];
  return { r: l * 255, g: c * 255, b: d * 255 };
}
function Vo(t, e, r, n) {
  var a = [
    zr(Math.round(t).toString(16)),
    zr(Math.round(e).toString(16)),
    zr(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function jb(t, e, r, n, a) {
  var i = [
    zr(Math.round(t).toString(16)),
    zr(Math.round(e).toString(16)),
    zr(Math.round(r).toString(16)),
    zr(Mb(n))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Mb(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function Ml(t) {
  return bt(t) / 255;
}
function bt(t) {
  return parseInt(t, 16);
}
function Nb(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var _o = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function dn(t) {
  var e = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, i = null, o = !1, u = !1;
  return typeof t == "string" && (t = Lb(t)), typeof t == "object" && (nr(t.r) && nr(t.g) && nr(t.b) ? (e = Tb(t.r, t.g, t.b), o = !0, u = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : nr(t.h) && nr(t.s) && nr(t.v) ? (n = xa(t.s), a = xa(t.v), e = kb(t.h, n, a), o = !0, u = "hsv") : nr(t.h) && nr(t.s) && nr(t.l) && (n = xa(t.s), i = xa(t.l), e = Rb(t.h, n, i), o = !0, u = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (r = t.a)), r = Yf(r), {
    ok: o,
    format: t.format || u,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: r
  };
}
var $b = "[-\\+]?\\d+%?", Ib = "[-\\+]?\\d*\\.\\d+%?", Fr = "(?:".concat(Ib, ")|(?:").concat($b, ")"), Ki = "[\\s|\\(]+(".concat(Fr, ")[,|\\s]+(").concat(Fr, ")[,|\\s]+(").concat(Fr, ")\\s*\\)?"), Gi = "[\\s|\\(]+(".concat(Fr, ")[,|\\s]+(").concat(Fr, ")[,|\\s]+(").concat(Fr, ")[,|\\s]+(").concat(Fr, ")\\s*\\)?"), kt = {
  CSS_UNIT: new RegExp(Fr),
  rgb: new RegExp("rgb" + Ki),
  rgba: new RegExp("rgba" + Gi),
  hsl: new RegExp("hsl" + Ki),
  hsla: new RegExp("hsla" + Gi),
  hsv: new RegExp("hsv" + Ki),
  hsva: new RegExp("hsva" + Gi),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Lb(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (_o[t])
    t = _o[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = kt.rgb.exec(t);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = kt.rgba.exec(t), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = kt.hsl.exec(t), r ? { h: r[1], s: r[2], l: r[3] } : (r = kt.hsla.exec(t), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = kt.hsv.exec(t), r ? { h: r[1], s: r[2], v: r[3] } : (r = kt.hsva.exec(t), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = kt.hex8.exec(t), r ? {
    r: bt(r[1]),
    g: bt(r[2]),
    b: bt(r[3]),
    a: Ml(r[4]),
    format: e ? "name" : "hex8"
  } : (r = kt.hex6.exec(t), r ? {
    r: bt(r[1]),
    g: bt(r[2]),
    b: bt(r[3]),
    format: e ? "name" : "hex"
  } : (r = kt.hex4.exec(t), r ? {
    r: bt(r[1] + r[1]),
    g: bt(r[2] + r[2]),
    b: bt(r[3] + r[3]),
    a: Ml(r[4] + r[4]),
    format: e ? "name" : "hex8"
  } : (r = kt.hex3.exec(t), r ? {
    r: bt(r[1] + r[1]),
    g: bt(r[2] + r[2]),
    b: bt(r[3] + r[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function nr(t) {
  return !!kt.CSS_UNIT.exec(String(t));
}
var lt = (
  /** @class */
  function() {
    function t(e, r) {
      e === void 0 && (e = ""), r === void 0 && (r = {});
      var n;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = Nb(e)), this.originalInput = e;
      var a = dn(e);
      this.originalInput = e, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var e = this.toRgb(), r, n, a, i = e.r / 255, o = e.g / 255, u = e.b / 255;
      return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), u <= 0.03928 ? a = u / 12.92 : a = Math.pow((u + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(e) {
      return this.a = Yf(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var e = this.toHsl().s;
      return e === 0;
    }, t.prototype.toHsv = function() {
      var e = Lo(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var e = Lo(this.r, this.g, this.b), r = Math.round(e.h * 360), n = Math.round(e.s * 100), a = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var e = jl(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var e = jl(this.r, this.g, this.b), r = Math.round(e.h * 360), n = Math.round(e.s * 100), a = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(e) {
      return e === void 0 && (e = !1), Vo(this.r, this.g, this.b, e);
    }, t.prototype.toHexString = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex(e);
    }, t.prototype.toHex8 = function(e) {
      return e === void 0 && (e = !1), jb(this.r, this.g, this.b, this.a, e);
    }, t.prototype.toHex8String = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex8(e);
    }, t.prototype.toHexShortString = function(e) {
      return e === void 0 && (e = !1), this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
    }, t.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, t.prototype.toRgbString = function() {
      var e = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(e, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(e, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, t.prototype.toPercentageRgb = function() {
      var e = function(r) {
        return "".concat(Math.round(nt(r, 255) * 100), "%");
      };
      return {
        r: e(this.r),
        g: e(this.g),
        b: e(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var e = function(r) {
        return Math.round(nt(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var e = "#" + Vo(this.r, this.g, this.b, !1), r = 0, n = Object.entries(_o); r < n.length; r++) {
        var a = n[r], i = a[0], o = a[1];
        if (e === o)
          return i;
      }
      return !1;
    }, t.prototype.toString = function(e) {
      var r = !!e;
      e = e ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, i = !r && a && (e.startsWith("hex") || e === "name");
      return i ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.l += e / 100, r.l = Sa(r.l), new t(r);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(e / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(e / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(e / 100)))), new t(r);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.l -= e / 100, r.l = Sa(r.l), new t(r);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.s -= e / 100, r.s = Sa(r.s), new t(r);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var r = this.toHsl();
      return r.s += e / 100, r.s = Sa(r.s), new t(r);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(e) {
      var r = this.toHsl(), n = (r.h + e) % 360;
      return r.h = n < 0 ? 360 + n : n, new t(r);
    }, t.prototype.mix = function(e, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), a = new t(e).toRgb(), i = r / 100, o = {
        r: (a.r - n.r) * i + n.r,
        g: (a.g - n.g) * i + n.g,
        b: (a.b - n.b) * i + n.b,
        a: (a.a - n.a) * i + n.a
      };
      return new t(o);
    }, t.prototype.analogous = function(e, r) {
      e === void 0 && (e = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), a = 360 / r, i = [this];
      for (n.h = (n.h - (a * e >> 1) + 720) % 360; --e; )
        n.h = (n.h + a) % 360, i.push(new t(n));
      return i;
    }, t.prototype.complement = function() {
      var e = this.toHsl();
      return e.h = (e.h + 180) % 360, new t(e);
    }, t.prototype.monochromatic = function(e) {
      e === void 0 && (e = 6);
      for (var r = this.toHsv(), n = r.h, a = r.s, i = r.v, o = [], u = 1 / e; e--; )
        o.push(new t({ h: n, s: a, v: i })), i = (i + u) % 1;
      return o;
    }, t.prototype.splitcomplement = function() {
      var e = this.toHsl(), r = e.h;
      return [
        this,
        new t({ h: (r + 72) % 360, s: e.s, l: e.l }),
        new t({ h: (r + 216) % 360, s: e.s, l: e.l })
      ];
    }, t.prototype.onBackground = function(e) {
      var r = this.toRgb(), n = new t(e).toRgb(), a = r.a + n.a * (1 - r.a);
      return new t({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / a,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / a,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / a,
        a
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(e) {
      for (var r = this.toHsl(), n = r.h, a = [this], i = 360 / e, o = 1; o < e; o++)
        a.push(new t({ h: (n + o * i) % 360, s: r.s, l: r.l }));
      return a;
    }, t.prototype.equals = function(e) {
      return this.toRgbString() === new t(e).toRgbString();
    }, t;
  }()
), Pa = 2, Nl = 0.16, Vb = 0.05, _b = 0.05, Wb = 0.15, Xf = 5, Jf = 4, zb = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function $l(t) {
  var e = t.r, r = t.g, n = t.b, a = Lo(e, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function Ta(t) {
  var e = t.r, r = t.g, n = t.b;
  return "#".concat(Vo(e, r, n, !1));
}
function Hb(t, e, r) {
  var n = r / 100, a = {
    r: (e.r - t.r) * n + t.r,
    g: (e.g - t.g) * n + t.g,
    b: (e.b - t.b) * n + t.b
  };
  return a;
}
function Il(t, e, r) {
  var n;
  return Math.round(t.h) >= 60 && Math.round(t.h) <= 240 ? n = r ? Math.round(t.h) - Pa * e : Math.round(t.h) + Pa * e : n = r ? Math.round(t.h) + Pa * e : Math.round(t.h) - Pa * e, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function Ll(t, e, r) {
  if (t.h === 0 && t.s === 0)
    return t.s;
  var n;
  return r ? n = t.s - Nl * e : e === Jf ? n = t.s + Nl : n = t.s + Vb * e, n > 1 && (n = 1), r && e === Xf && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function Vl(t, e, r) {
  var n;
  return r ? n = t.v + _b * e : n = t.v - Wb * e, n > 1 && (n = 1), Number(n.toFixed(2));
}
function Tr(t) {
  for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = dn(t), a = Xf; a > 0; a -= 1) {
    var i = $l(n), o = Ta(dn({
      h: Il(i, a, !0),
      s: Ll(i, a, !0),
      v: Vl(i, a, !0)
    }));
    r.push(o);
  }
  r.push(Ta(n));
  for (var u = 1; u <= Jf; u += 1) {
    var s = $l(n), l = Ta(dn({
      h: Il(s, u),
      s: Ll(s, u),
      v: Vl(s, u)
    }));
    r.push(l);
  }
  return e.theme === "dark" ? zb.map(function(c) {
    var d = c.index, v = c.opacity, D = Ta(Hb(dn(e.backgroundColor || "#141414"), dn(r[d]), v * 100));
    return D;
  }) : r;
}
var Yi = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Xi = {}, Ji = {};
Object.keys(Yi).forEach(function(t) {
  Xi[t] = Tr(Yi[t]), Xi[t].primary = Xi[t][5], Ji[t] = Tr(Yi[t], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Ji[t].primary = Ji[t][5];
});
const Zf = (t) => {
  const {
    controlHeight: e
  } = t;
  return {
    controlHeightSM: e * 0.75,
    controlHeightXS: e * 0.5,
    controlHeightLG: e * 1.25
  };
};
function qb(t) {
  const {
    sizeUnit: e,
    sizeStep: r
  } = t;
  return {
    sizeXXL: e * (r + 8),
    // 48
    sizeXL: e * (r + 4),
    // 32
    sizeLG: e * (r + 2),
    // 24
    sizeMD: e * (r + 1),
    // 20
    sizeMS: e * r,
    // 16
    size: e * r,
    // 16
    sizeSM: e * (r - 1),
    // 12
    sizeXS: e * (r - 2),
    // 8
    sizeXXS: e * (r - 3)
    // 4
  };
}
const Lu = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Tn = Object.assign(Object.assign({}, Lu), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
});
function Qf(t, e) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = e;
  const {
    colorSuccess: a,
    colorWarning: i,
    colorError: o,
    colorInfo: u,
    colorPrimary: s,
    colorBgBase: l,
    colorTextBase: c
  } = t, d = r(s), v = r(a), D = r(i), m = r(o), f = r(u), g = n(l, c), p = t.colorLink || t.colorInfo, b = r(p);
  return Object.assign(Object.assign({}, g), {
    colorPrimaryBg: d[1],
    colorPrimaryBgHover: d[2],
    colorPrimaryBorder: d[3],
    colorPrimaryBorderHover: d[4],
    colorPrimaryHover: d[5],
    colorPrimary: d[6],
    colorPrimaryActive: d[7],
    colorPrimaryTextHover: d[8],
    colorPrimaryText: d[9],
    colorPrimaryTextActive: d[10],
    colorSuccessBg: v[1],
    colorSuccessBgHover: v[2],
    colorSuccessBorder: v[3],
    colorSuccessBorderHover: v[4],
    colorSuccessHover: v[4],
    colorSuccess: v[6],
    colorSuccessActive: v[7],
    colorSuccessTextHover: v[8],
    colorSuccessText: v[9],
    colorSuccessTextActive: v[10],
    colorErrorBg: m[1],
    colorErrorBgHover: m[2],
    colorErrorBorder: m[3],
    colorErrorBorderHover: m[4],
    colorErrorHover: m[5],
    colorError: m[6],
    colorErrorActive: m[7],
    colorErrorTextHover: m[8],
    colorErrorText: m[9],
    colorErrorTextActive: m[10],
    colorWarningBg: D[1],
    colorWarningBgHover: D[2],
    colorWarningBorder: D[3],
    colorWarningBorderHover: D[4],
    colorWarningHover: D[4],
    colorWarning: D[6],
    colorWarningActive: D[7],
    colorWarningTextHover: D[8],
    colorWarningText: D[9],
    colorWarningTextActive: D[10],
    colorInfoBg: f[1],
    colorInfoBgHover: f[2],
    colorInfoBorder: f[3],
    colorInfoBorderHover: f[4],
    colorInfoHover: f[4],
    colorInfo: f[6],
    colorInfoActive: f[7],
    colorInfoTextHover: f[8],
    colorInfoText: f[9],
    colorInfoTextActive: f[10],
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new lt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Ub = (t) => {
  let e = t, r = t, n = t, a = t;
  return t < 6 && t >= 5 ? e = t + 1 : t < 16 && t >= 6 ? e = t + 2 : t >= 16 && (e = 16), t < 7 && t >= 5 ? r = 4 : t < 8 && t >= 7 ? r = 5 : t < 14 && t >= 8 ? r = 6 : t < 16 && t >= 14 ? r = 7 : t >= 16 && (r = 8), t < 6 && t >= 2 ? n = 1 : t >= 6 && (n = 2), t > 4 && t < 8 ? a = 4 : t >= 8 && (a = 6), {
    borderRadius: t,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: e,
    borderRadiusOuter: a
  };
};
function Kb(t) {
  const {
    motionUnit: e,
    motionBase: r,
    borderRadius: n,
    lineWidth: a
  } = t;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + e).toFixed(1)}s`,
    motionDurationMid: `${(r + e * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + e * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, Ub(n));
}
const ar = (t, e) => new lt(t).setAlpha(e).toRgbString(), Wn = (t, e) => new lt(t).darken(e).toHexString(), Gb = (t) => {
  const e = Tr(t);
  return {
    1: e[0],
    2: e[1],
    3: e[2],
    4: e[3],
    5: e[4],
    6: e[5],
    7: e[6],
    8: e[4],
    9: e[5],
    10: e[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Yb = (t, e) => {
  const r = t || "#fff", n = e || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: ar(n, 0.88),
    colorTextSecondary: ar(n, 0.65),
    colorTextTertiary: ar(n, 0.45),
    colorTextQuaternary: ar(n, 0.25),
    colorFill: ar(n, 0.15),
    colorFillSecondary: ar(n, 0.06),
    colorFillTertiary: ar(n, 0.04),
    colorFillQuaternary: ar(n, 0.02),
    colorBgLayout: Wn(r, 4),
    colorBgContainer: Wn(r, 0),
    colorBgElevated: Wn(r, 0),
    colorBgSpotlight: ar(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Wn(r, 15),
    colorBorderSecondary: Wn(r, 6)
  };
};
function Xb(t) {
  return (t + 8) / t;
}
function Jb(t) {
  const e = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, i = t * Math.pow(2.71828, a / 5), o = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(o / 2) * 2;
  });
  return e[1] = t, e.map((r) => ({
    size: r,
    lineHeight: Xb(r)
  }));
}
const ed = (t) => {
  const e = Jb(t), r = e.map((c) => c.size), n = e.map((c) => c.lineHeight), a = r[1], i = r[0], o = r[2], u = n[1], s = n[0], l = n[2];
  return {
    fontSizeSM: i,
    fontSize: a,
    fontSizeLG: o,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: u,
    lineHeightLG: l,
    lineHeightSM: s,
    fontHeight: Math.round(u * a),
    fontHeightLG: Math.round(l * o),
    fontHeightSM: Math.round(s * i),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function da(t) {
  const e = Object.keys(Lu).map((r) => {
    const n = Tr(t[r]);
    return new Array(10).fill(1).reduce((a, i, o) => (a[`${r}-${o + 1}`] = n[o], a[`${r}${o + 1}`] = n[o], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, t), e), Qf(t, {
    generateColorPalettes: Gb,
    generateNeutralColorPalettes: Yb
  })), ed(t.fontSize)), qb(t)), Zf(t)), Kb(t));
}
const td = Jn(da), oi = {
  token: Tn,
  override: {
    override: Tn
  },
  hashed: !0
}, rd = /* @__PURE__ */ oe.createContext(oi), nd = "anticon", Zb = (t, e) => e || (t ? `ant-${t}` : "ant"), kr = /* @__PURE__ */ R.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Zb,
  iconPrefixCls: nd
}), Qb = `-ant-${Date.now()}-${Math.random()}`;
function eC(t, e) {
  const r = {}, n = (o, u) => {
    let s = o.clone();
    return s = (u == null ? void 0 : u(s)) || s, s.toRgbString();
  }, a = (o, u) => {
    const s = new lt(o), l = Tr(s.toRgbString());
    r[`${u}-color`] = n(s), r[`${u}-color-disabled`] = l[1], r[`${u}-color-hover`] = l[4], r[`${u}-color-active`] = l[6], r[`${u}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), r[`${u}-color-deprecated-bg`] = l[0], r[`${u}-color-deprecated-border`] = l[2];
  };
  if (e.primaryColor) {
    a(e.primaryColor, "primary");
    const o = new lt(e.primaryColor), u = Tr(o.toRgbString());
    u.forEach((l, c) => {
      r[`primary-${c + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(o, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(o, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(o, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(o, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(o, (l) => l.setAlpha(l.getAlpha() * 0.12));
    const s = new lt(u[0]);
    r["primary-color-active-deprecated-f-30"] = n(s, (l) => l.setAlpha(l.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(s, (l) => l.darken(2));
  }
  return e.successColor && a(e.successColor, "success"), e.warningColor && a(e.warningColor, "warning"), e.errorColor && a(e.errorColor, "error"), e.infoColor && a(e.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((o) => `--${t}-${o}: ${r[o]};`).join(`
`)}
  }
  `.trim();
}
function tC(t, e) {
  const r = eC(t, e);
  Jt() ? Fn(r, `${Qb}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ei(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Wo = /* @__PURE__ */ R.createContext(!1), rC = (t) => {
  let {
    children: e,
    disabled: r
  } = t;
  const n = R.useContext(Wo);
  return /* @__PURE__ */ R.createElement(Wo.Provider, {
    value: r ?? n
  }, e);
}, ad = Wo, zo = /* @__PURE__ */ R.createContext(void 0), nC = (t) => {
  let {
    children: e,
    size: r
  } = t;
  const n = R.useContext(zo);
  return /* @__PURE__ */ R.createElement(zo.Provider, {
    value: r || n
  }, e);
}, Vu = zo;
function aC() {
  const t = Vt(ad), e = Vt(Vu);
  return {
    componentDisabled: t,
    componentSize: e
  };
}
const iC = "5.13.3";
function Zi(t) {
  return t >= 0 && t <= 255;
}
function Ra(t, e) {
  const {
    r,
    g: n,
    b: a,
    a: i
  } = new lt(t).toRgb();
  if (i < 1)
    return t;
  const {
    r: o,
    g: u,
    b: s
  } = new lt(e).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const c = Math.round((r - o * (1 - l)) / l), d = Math.round((n - u * (1 - l)) / l), v = Math.round((a - s * (1 - l)) / l);
    if (Zi(c) && Zi(d) && Zi(v))
      return new lt({
        r: c,
        g: d,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new lt({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var oC = function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
};
function _u(t) {
  const {
    override: e
  } = t, r = oC(t, ["override"]), n = Object.assign({}, e);
  Object.keys(Tn).forEach((v) => {
    delete n[v];
  });
  const a = Object.assign(Object.assign({}, r), n), i = 480, o = 576, u = 768, s = 992, l = 1200, c = 1600;
  if (a.motion === !1) {
    const v = "0s";
    a.motionDurationFast = v, a.motionDurationMid = v, a.motionDurationSlow = v;
  }
  return Object.assign(Object.assign(Object.assign({}, a), {
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: Ra(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: Ra(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Ra(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Line
    lineWidthFocus: a.lineWidth * 4,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: Ra(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: o - 1,
    screenSM: o,
    screenSMMin: o,
    screenSMMax: u - 1,
    screenMD: u,
    screenMDMin: u,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: c - 1,
    screenXXL: c,
    screenXXLMin: c,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new lt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new lt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new lt("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), n);
}
var _l = function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
};
const id = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, od = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, uC = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, ud = (t, e, r) => {
  const n = r.getDerivativeToken(t), {
    override: a
  } = e, i = _l(e, ["override"]);
  let o = Object.assign(Object.assign({}, n), {
    override: a
  });
  return o = _u(o), i && Object.entries(i).forEach((u) => {
    let [s, l] = u;
    const {
      theme: c
    } = l, d = _l(l, ["theme"]);
    let v = d;
    c && (v = ud(Object.assign(Object.assign({}, o), d), {
      override: d
    }, c)), o[s] = v;
  }), o;
};
function Rr() {
  const {
    token: t,
    hashed: e,
    theme: r,
    override: n,
    cssVar: a
  } = oe.useContext(rd), i = `${iC}-${e || ""}`, o = r || td, [u, s, l] = Nv(o, [Tn, t], {
    salt: i,
    override: n,
    getComputedToken: ud,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: _u,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: id,
      ignore: od,
      preserve: uC
    }
  });
  return [o, l, e ? s : "", u, a];
}
function Ho(t) {
  var e = R.useRef();
  e.current = t;
  var r = R.useCallback(function() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (n = e.current) === null || n === void 0 ? void 0 : n.call.apply(n, [e].concat(i));
  }, []);
  return r;
}
function En(t) {
  var e = R.useRef(!1), r = R.useState(t), n = pe(r, 2), a = n[0], i = n[1];
  R.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []);
  function o(u, s) {
    s && e.current || i(u);
  }
  return [a, o];
}
function Qi(t) {
  return t !== void 0;
}
function sC(t, e) {
  var r = e || {}, n = r.defaultValue, a = r.value, i = r.onChange, o = r.postState, u = En(function() {
    return Qi(a) ? a : Qi(n) ? typeof n == "function" ? n() : n : typeof t == "function" ? t() : t;
  }), s = pe(u, 2), l = s[0], c = s[1], d = a !== void 0 ? a : l, v = o ? o(d) : d, D = Ho(i), m = En([d]), f = pe(m, 2), g = f[0], p = f[1];
  ns(function() {
    var C = g[0];
    l !== C && D(l, C);
  }, [g]), ns(function() {
    Qi(a) || c(a);
  }, [a]);
  var b = Ho(function(C, F) {
    c(C, F), p([d], F);
  });
  return [v, b];
}
const eo = function(t) {
  let e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: t.colorText,
    fontSize: t.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: t.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: e ? "inherit" : t.fontFamily
  };
}, lC = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), cC = (t) => ({
  a: {
    color: t.colorLink,
    textDecoration: t.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${t.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: t.colorLinkHover
    },
    "&:active": {
      color: t.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: t.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: t.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: t.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), fC = (t, e) => {
  const {
    fontFamily: r,
    fontSize: n
  } = t, a = `[class^="${e}"], [class*=" ${e}"]`;
  return {
    [a]: {
      fontFamily: r,
      fontSize: n,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [a]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
}, dC = (t) => ({
  outline: `${Zn(t.lineWidthFocus)} solid ${t.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
});
let vC = /* @__PURE__ */ Wt(function t() {
  _t(this, t);
});
const sd = vC;
function hC(t, e, r) {
  return e = xr(e), Nu(t, bi() ? Reflect.construct(e, r || [], xr(t).constructor) : e.apply(t, r));
}
let gC = /* @__PURE__ */ function(t) {
  fa(e, t);
  function e(r) {
    var n;
    return _t(this, e), n = hC(this, e), n.result = 0, r instanceof e ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return Wt(e, [{
    key: "add",
    value: function(n) {
      return n instanceof e ? this.result += n.result : typeof n == "number" && (this.result += n), this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof e ? this.result -= n.result : typeof n == "number" && (this.result -= n), this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return n instanceof e ? this.result *= n.result : typeof n == "number" && (this.result *= n), this;
    }
  }, {
    key: "div",
    value: function(n) {
      return n instanceof e ? this.result /= n.result : typeof n == "number" && (this.result /= n), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), e;
}(sd);
function pC(t, e, r) {
  return e = xr(e), Nu(t, bi() ? Reflect.construct(e, r || [], xr(t).constructor) : e.apply(t, r));
}
const ld = "CALC_UNIT";
function to(t) {
  return typeof t == "number" ? `${t}${ld}` : t;
}
let mC = /* @__PURE__ */ function(t) {
  fa(e, t);
  function e(r) {
    var n;
    return _t(this, e), n = pC(this, e), n.result = "", r instanceof e ? n.result = `(${r.result})` : typeof r == "number" ? n.result = to(r) : typeof r == "string" && (n.result = r), n;
  }
  return Wt(e, [{
    key: "add",
    value: function(n) {
      return n instanceof e ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${to(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof e ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${to(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof e ? this.result = `${this.result} * ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} * ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof e ? this.result = `${this.result} / ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} / ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(n) {
      return this.lowPriority || n ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function(n) {
      const {
        unit: a = !0
      } = n || {}, i = new RegExp(`${ld}`, "g");
      return this.result = this.result.replace(i, a ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]), e;
}(sd);
const DC = (t) => {
  const e = t === "css" ? mC : gC;
  return (r) => new e(r);
};
function bC(t) {
  return t === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
        r[n] = arguments[n];
      return `max(${r.map((a) => Zn(a)).join(",")})`;
    },
    min: function() {
      for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
        r[n] = arguments[n];
      return `min(${r.map((a) => Zn(a)).join(",")})`;
    }
  };
}
const cd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let qo = !0;
function Wu() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  if (!cd)
    return Object.assign.apply(Object, [{}].concat(e));
  qo = !1;
  const n = {};
  return e.forEach((a) => {
    Object.keys(a).forEach((o) => {
      Object.defineProperty(n, o, {
        configurable: !0,
        enumerable: !0,
        get: () => a[o]
      });
    });
  }), qo = !0, n;
}
const Wl = {};
function CC() {
}
const yC = (t) => {
  let e, r = t, n = CC;
  return cd && typeof Proxy < "u" && (e = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get(a, i) {
      return qo && e.add(i), a[i];
    }
  }), n = (a, i) => {
    var o;
    Wl[a] = {
      global: Array.from(e),
      component: Object.assign(Object.assign({}, (o = Wl[a]) === null || o === void 0 ? void 0 : o.component), i)
    };
  }), {
    token: r,
    keys: e,
    flush: n
  };
}, fd = (t, e) => {
  const [r, n] = Rr();
  return bo({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", t],
    nonce: () => e == null ? void 0 : e.nonce
  }, () => [{
    [`.${t}`]: Object.assign(Object.assign({}, lC()), {
      [`.${t} .${t}-icon`]: {
        display: "block"
      }
    })
  }]);
}, dd = (t, e, r) => {
  var n;
  return typeof r == "function" ? r(Wu(e, (n = e[t]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, vd = (t, e, r, n) => {
  const a = Object.assign({}, e[t]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: o
    } = n;
    o.forEach((u) => {
      let [s, l] = u;
      var c;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Ge(!(a != null && a[s]), `Component Token \`${String(s)}\` of ${t} is deprecated. Please use \`${String(l)}\` instead.`), (a != null && a[s] || a != null && a[l]) && ((c = a[l]) !== null && c !== void 0 || (a[l] = a == null ? void 0 : a[s]));
    });
  }
  const i = Object.assign(Object.assign({}, r), a);
  return Object.keys(i).forEach((o) => {
    i[o] === e[o] && delete i[o];
  }), i;
}, EC = (t, e) => `${[e, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function hd(t, e, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(t) ? t : [t, t], [i] = a, o = a.join("-");
  return (u) => {
    const [s, l, c, d, v] = Rr(), {
      getPrefixCls: D,
      iconPrefixCls: m,
      csp: f
    } = Vt(kr), g = D(), p = v ? "css" : "js", b = DC(p), {
      max: C,
      min: F
    } = bC(p), B = {
      theme: s,
      token: d,
      hashId: c,
      nonce: () => f == null ? void 0 : f.nonce,
      clientOnly: n.clientOnly,
      // antd is always at top of styles
      order: n.order || -999
    };
    return bo(Object.assign(Object.assign({}, B), {
      clientOnly: !1,
      path: ["Shared", g]
    }), () => [{
      // Link
      "&": cC(d)
    }]), fd(m, f), [bo(Object.assign(Object.assign({}, B), {
      path: [o, u, m]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: w,
        flush: M
      } = yC(d), x = dd(i, l, r), P = `.${u}`, V = vd(i, l, x, {
        deprecatedTokens: n.deprecatedTokens
      });
      v && Object.keys(x).forEach((N) => {
        x[N] = `var(${Fc(N, EC(i, v.prefix))})`;
      });
      const T = Wu(w, {
        componentCls: P,
        prefixCls: u,
        iconCls: `.${m}`,
        antCls: `.${g}`,
        calc: b,
        max: C,
        min: F
      }, v ? x : V), k = e(T, {
        hashId: c,
        prefixCls: u,
        rootPrefixCls: g,
        iconPrefixCls: m
      });
      return M(i, V), [n.resetStyle === !1 ? null : fC(T, u), k];
    }), c];
  };
}
const wC = (t, e, r) => {
  function n(l) {
    return `${t}${l.slice(0, 1).toUpperCase()}${l.slice(1)}`;
  }
  const {
    unitless: a = {},
    injectStyle: i = !0
  } = r ?? {}, o = {
    [n("zIndexPopup")]: !0
  };
  Object.keys(a).forEach((l) => {
    o[n(l)] = a[l];
  });
  const u = (l) => {
    let {
      rootCls: c,
      cssVar: d
    } = l;
    const [, v] = Rr();
    return fh({
      path: [t],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: Object.assign(Object.assign({}, id), o),
      ignore: od,
      token: v,
      scope: c
    }, () => {
      const D = dd(t, v, e), m = vd(t, v, D, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(D).forEach((f) => {
        m[n(f)] = m[f], delete m[f];
      }), m;
    }), null;
  };
  return (l) => {
    const [, , , , c] = Rr();
    return [(d) => i && c ? /* @__PURE__ */ oe.createElement(oe.Fragment, null, /* @__PURE__ */ oe.createElement(u, {
      rootCls: l,
      cssVar: c,
      component: t
    }), d) : d, c == null ? void 0 : c.key];
  };
}, FC = (t, e, r, n) => {
  const a = hd(t, e, r, n), i = wC(Array.isArray(t) ? t[0] : t, r, n);
  return function(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o;
    const [, s] = a(o), [l, c] = i(u);
    return [l, s, c];
  };
}, AC = Object.assign({}, R), {
  useId: zl
} = AC, BC = () => "", OC = typeof zl > "u" ? BC : zl;
function SC(t, e) {
  var r;
  const n = yi("ConfigProvider"), a = t || {}, i = a.inherit === !1 || !e ? oi : e, o = OC();
  if (process.env.NODE_ENV !== "production") {
    const u = a.cssVar || i.cssVar, s = !!(typeof a.cssVar == "object" && (!((r = a.cssVar) === null || r === void 0) && r.key) || o);
    process.env.NODE_ENV !== "production" && n(!u || s, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return vu(() => {
    var u, s;
    if (!t)
      return e;
    const l = Object.assign({}, i.components);
    Object.keys(t.components || {}).forEach((v) => {
      l[v] = Object.assign(Object.assign({}, l[v]), t.components[v]);
    });
    const c = `css-var-${o.replace(/:/g, "")}`, d = ((u = a.cssVar) !== null && u !== void 0 ? u : i.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof i.cssVar == "object" ? i.cssVar : {}), typeof a.cssVar == "object" ? a.cssVar : {}), {
      key: typeof a.cssVar == "object" && ((s = a.cssVar) === null || s === void 0 ? void 0 : s.key) || c
    });
    return Object.assign(Object.assign(Object.assign({}, i), a), {
      token: Object.assign(Object.assign({}, i.token), a.token),
      components: l,
      cssVar: d
    });
  }, [a, i], (u, s) => u.some((l, c) => {
    const d = s[c];
    return !Xa(l, d, !0);
  }));
}
var xC = ["children"], gd = /* @__PURE__ */ R.createContext({});
function PC(t) {
  var e = t.children, r = Ar(t, xC);
  return /* @__PURE__ */ R.createElement(gd.Provider, {
    value: r
  }, e);
}
var TC = /* @__PURE__ */ function(t) {
  fa(r, t);
  var e = $u(r);
  function r() {
    return _t(this, r), e.apply(this, arguments);
  }
  return Wt(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(R.Component), Vr = "none", ka = "appear", ja = "enter", Ma = "leave", Hl = "none", Mt = "prepare", mn = "start", Dn = "active", zu = "end", pd = "prepared";
function ql(t, e) {
  var r = {};
  return r[t.toLowerCase()] = e.toLowerCase(), r["Webkit".concat(t)] = "webkit".concat(e), r["Moz".concat(t)] = "moz".concat(e), r["ms".concat(t)] = "MS".concat(e), r["O".concat(t)] = "o".concat(e.toLowerCase()), r;
}
function RC(t, e) {
  var r = {
    animationend: ql("Animation", "AnimationEnd"),
    transitionend: ql("Transition", "TransitionEnd")
  };
  return t && ("AnimationEvent" in e || delete r.animationend.animation, "TransitionEvent" in e || delete r.transitionend.transition), r;
}
var kC = RC(Jt(), typeof window < "u" ? window : {}), md = {};
if (Jt()) {
  var jC = document.createElement("div");
  md = jC.style;
}
var Na = {};
function Dd(t) {
  if (Na[t])
    return Na[t];
  var e = kC[t];
  if (e)
    for (var r = Object.keys(e), n = r.length, a = 0; a < n; a += 1) {
      var i = r[a];
      if (Object.prototype.hasOwnProperty.call(e, i) && i in md)
        return Na[t] = e[i], Na[t];
    }
  return "";
}
var bd = Dd("animationend"), Cd = Dd("transitionend"), yd = !!(bd && Cd), Ul = bd || "animationend", Kl = Cd || "transitionend";
function Gl(t, e) {
  if (!t)
    return null;
  if (Me(t) === "object") {
    var r = e.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return t[r];
  }
  return "".concat(t, "-").concat(e);
}
const MC = function(t) {
  var e = $e(), r = $e(t);
  r.current = t;
  var n = R.useCallback(function(o) {
    r.current(o);
  }, []);
  function a(o) {
    o && (o.removeEventListener(Kl, n), o.removeEventListener(Ul, n));
  }
  function i(o) {
    e.current && e.current !== o && a(e.current), o && o !== e.current && (o.addEventListener(Kl, n), o.addEventListener(Ul, n), e.current = o);
  }
  return R.useEffect(function() {
    return function() {
      a(e.current);
    };
  }, []), [i, a];
};
var Ed = Jt() ? lc : ht;
const NC = function() {
  var t = R.useRef(null);
  function e() {
    Pr.cancel(t.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    e();
    var i = Pr(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return i !== t.current;
        }
      }) : r(n, a - 1);
    });
    t.current = i;
  }
  return R.useEffect(function() {
    return function() {
      e();
    };
  }, []), [r, e];
};
var $C = [Mt, mn, Dn, zu], IC = [Mt, pd], wd = !1, LC = !0;
function Fd(t) {
  return t === Dn || t === zu;
}
const VC = function(t, e, r) {
  var n = En(Hl), a = pe(n, 2), i = a[0], o = a[1], u = NC(), s = pe(u, 2), l = s[0], c = s[1];
  function d() {
    o(Mt, !0);
  }
  var v = e ? IC : $C;
  return Ed(function() {
    if (i !== Hl && i !== zu) {
      var D = v.indexOf(i), m = v[D + 1], f = r(i);
      f === wd ? o(m, !0) : m && l(function(g) {
        function p() {
          g.isCanceled() || o(m, !0);
        }
        f === !0 ? p() : Promise.resolve(f).then(p);
      });
    }
  }, [t, i]), R.useEffect(function() {
    return function() {
      c();
    };
  }, []), [d, i];
};
function _C(t, e, r, n) {
  var a = n.motionEnter, i = a === void 0 ? !0 : a, o = n.motionAppear, u = o === void 0 ? !0 : o, s = n.motionLeave, l = s === void 0 ? !0 : s, c = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, D = n.onEnterPrepare, m = n.onLeavePrepare, f = n.onAppearStart, g = n.onEnterStart, p = n.onLeaveStart, b = n.onAppearActive, C = n.onEnterActive, F = n.onLeaveActive, B = n.onAppearEnd, A = n.onEnterEnd, w = n.onLeaveEnd, M = n.onVisibleChanged, x = En(), P = pe(x, 2), V = P[0], T = P[1], k = En(Vr), N = pe(k, 2), j = N[0], $ = N[1], S = En(null), L = pe(S, 2), q = L[0], U = L[1], Y = $e(!1), Q = $e(null);
  function ie() {
    return r();
  }
  var O = $e(!1);
  function _() {
    $(Vr, !0), U(null, !0);
  }
  function z(Be) {
    var Ce = ie();
    if (!(Be && !Be.deadline && Be.target !== Ce)) {
      var Oe = O.current, ve;
      j === ka && Oe ? ve = B == null ? void 0 : B(Ce, Be) : j === ja && Oe ? ve = A == null ? void 0 : A(Ce, Be) : j === Ma && Oe && (ve = w == null ? void 0 : w(Ce, Be)), j !== Vr && Oe && ve !== !1 && _();
    }
  }
  var X = MC(z), ue = pe(X, 1), ne = ue[0], se = function(Ce) {
    var Oe, ve, Ne;
    switch (Ce) {
      case ka:
        return Oe = {}, W(Oe, Mt, v), W(Oe, mn, f), W(Oe, Dn, b), Oe;
      case ja:
        return ve = {}, W(ve, Mt, D), W(ve, mn, g), W(ve, Dn, C), ve;
      case Ma:
        return Ne = {}, W(Ne, Mt, m), W(Ne, mn, p), W(Ne, Dn, F), Ne;
      default:
        return {};
    }
  }, fe = R.useMemo(function() {
    return se(j);
  }, [j]), he = VC(j, !t, function(Be) {
    if (Be === Mt) {
      var Ce = fe[Mt];
      return Ce ? Ce(ie()) : wd;
    }
    if (me in fe) {
      var Oe;
      U(((Oe = fe[me]) === null || Oe === void 0 ? void 0 : Oe.call(fe, ie(), null)) || null);
    }
    return me === Dn && (ne(ie()), c > 0 && (clearTimeout(Q.current), Q.current = setTimeout(function() {
      z({
        deadline: !0
      });
    }, c))), me === pd && _(), LC;
  }), Ee = pe(he, 2), J = Ee[0], me = Ee[1], Ae = Fd(me);
  O.current = Ae, Ed(function() {
    T(e);
    var Be = Y.current;
    Y.current = !0;
    var Ce;
    !Be && e && u && (Ce = ka), Be && e && i && (Ce = ja), (Be && !e && l || !Be && d && !e && l) && (Ce = Ma);
    var Oe = se(Ce);
    Ce && (t || Oe[Mt]) ? ($(Ce), J()) : $(Vr);
  }, [e]), ht(function() {
    // Cancel appear
    (j === ka && !u || // Cancel enter
    j === ja && !i || // Cancel leave
    j === Ma && !l) && $(Vr);
  }, [u, i, l]), ht(function() {
    return function() {
      Y.current = !1, clearTimeout(Q.current);
    };
  }, []);
  var we = R.useRef(!1);
  ht(function() {
    V && (we.current = !0), V !== void 0 && j === Vr && ((we.current || V) && (M == null || M(V)), we.current = !0);
  }, [V, j]);
  var Ye = q;
  return fe[Mt] && me === mn && (Ye = te({
    transition: "none"
  }, Ye)), [j, me, Ye, V ?? e];
}
function WC(t) {
  var e = t;
  Me(t) === "object" && (e = t.transitionSupport);
  function r(a, i) {
    return !!(a.motionName && e && i !== !1);
  }
  var n = /* @__PURE__ */ R.forwardRef(function(a, i) {
    var o = a.visible, u = o === void 0 ? !0 : o, s = a.removeOnLeave, l = s === void 0 ? !0 : s, c = a.forceRender, d = a.children, v = a.motionName, D = a.leavedClassName, m = a.eventProps, f = R.useContext(gd), g = f.motion, p = r(a, g), b = $e(), C = $e();
    function F() {
      try {
        return b.current instanceof HTMLElement ? b.current : vb(C.current);
      } catch {
        return null;
      }
    }
    var B = _C(p, u, F, a), A = pe(B, 4), w = A[0], M = A[1], x = A[2], P = A[3], V = R.useRef(P);
    P && (V.current = !0);
    var T = R.useCallback(function(U) {
      b.current = U, $f(i, U);
    }, [i]), k, N = te(te({}, m), {}, {
      visible: u
    });
    if (!d)
      k = null;
    else if (w === Vr)
      P ? k = d(te({}, N), T) : !l && V.current && D ? k = d(te(te({}, N), {}, {
        className: D
      }), T) : c || !l && !D ? k = d(te(te({}, N), {}, {
        style: {
          display: "none"
        }
      }), T) : k = null;
    else {
      var j, $;
      M === Mt ? $ = "prepare" : Fd(M) ? $ = "active" : M === mn && ($ = "start");
      var S = Gl(v, "".concat(w, "-").concat($));
      k = d(te(te({}, N), {}, {
        className: Sr(Gl(v, w), (j = {}, W(j, S, S && $), W(j, v, typeof v == "string"), j)),
        style: x
      }), T);
    }
    if (/* @__PURE__ */ R.isValidElement(k) && If(k)) {
      var L = k, q = L.ref;
      q || (k = /* @__PURE__ */ R.cloneElement(k, {
        ref: T
      }));
    }
    return /* @__PURE__ */ R.createElement(TC, {
      ref: C
    }, k);
  });
  return n.displayName = "CSSMotion", n;
}
const Ad = WC(yd);
var Uo = "add", Ko = "keep", Go = "remove", ro = "removed";
function zC(t) {
  var e;
  return t && Me(t) === "object" && "key" in t ? e = t : e = {
    key: t
  }, te(te({}, e), {}, {
    key: String(e.key)
  });
}
function Yo() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return t.map(zC);
}
function HC() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = e.length, i = Yo(t), o = Yo(e);
  i.forEach(function(l) {
    for (var c = !1, d = n; d < a; d += 1) {
      var v = o[d];
      if (v.key === l.key) {
        n < d && (r = r.concat(o.slice(n, d).map(function(D) {
          return te(te({}, D), {}, {
            status: Uo
          });
        })), n = d), r.push(te(te({}, v), {}, {
          status: Ko
        })), n += 1, c = !0;
        break;
      }
    }
    c || r.push(te(te({}, l), {}, {
      status: Go
    }));
  }), n < a && (r = r.concat(o.slice(n).map(function(l) {
    return te(te({}, l), {}, {
      status: Uo
    });
  })));
  var u = {};
  r.forEach(function(l) {
    var c = l.key;
    u[c] = (u[c] || 0) + 1;
  });
  var s = Object.keys(u).filter(function(l) {
    return u[l] > 1;
  });
  return s.forEach(function(l) {
    r = r.filter(function(c) {
      var d = c.key, v = c.status;
      return d !== l || v !== Go;
    }), r.forEach(function(c) {
      c.key === l && (c.status = Ko);
    });
  }), r;
}
var qC = ["component", "children", "onVisibleChanged", "onAllRemoved"], UC = ["status"], KC = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function GC(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ad, r = /* @__PURE__ */ function(n) {
    fa(i, n);
    var a = $u(i);
    function i() {
      var o;
      _t(this, i);
      for (var u = arguments.length, s = new Array(u), l = 0; l < u; l++)
        s[l] = arguments[l];
      return o = a.call.apply(a, [this].concat(s)), W(Fe(o), "state", {
        keyEntities: []
      }), W(Fe(o), "removeKey", function(c) {
        var d = o.state.keyEntities, v = d.map(function(D) {
          return D.key !== c ? D : te(te({}, D), {}, {
            status: ro
          });
        });
        return o.setState({
          keyEntities: v
        }), v.filter(function(D) {
          var m = D.status;
          return m !== ro;
        }).length;
      }), o;
    }
    return Wt(i, [{
      key: "render",
      value: function() {
        var u = this, s = this.state.keyEntities, l = this.props, c = l.component, d = l.children, v = l.onVisibleChanged, D = l.onAllRemoved, m = Ar(l, qC), f = c || R.Fragment, g = {};
        return KC.forEach(function(p) {
          g[p] = m[p], delete m[p];
        }), delete m.keys, /* @__PURE__ */ R.createElement(f, m, s.map(function(p, b) {
          var C = p.status, F = Ar(p, UC), B = C === Uo || C === Ko;
          return /* @__PURE__ */ R.createElement(e, Jr({}, g, {
            key: F.key,
            visible: B,
            eventProps: F,
            onVisibleChanged: function(w) {
              if (v == null || v(w, {
                key: F.key
              }), !w) {
                var M = u.removeKey(F.key);
                M === 0 && D && D();
              }
            }
          }), function(A, w) {
            return d(te(te({}, A), {}, {
              index: b
            }), w);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(u, s) {
        var l = u.keys, c = s.keyEntities, d = Yo(l), v = HC(c, d);
        return {
          keyEntities: v.filter(function(D) {
            var m = c.find(function(f) {
              var g = f.key;
              return D.key === g;
            });
            return !(m && m.status === ro && D.status === Go);
          })
        };
      }
    }]), i;
  }(R.Component);
  return W(r, "defaultProps", {
    component: "div"
  }), r;
}
GC(yd);
function YC(t) {
  const {
    children: e
  } = t, [, r] = Rr(), {
    motion: n
  } = r, a = R.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ R.createElement(PC, {
    motion: n
  }, e) : e;
}
const Bd = /* @__PURE__ */ R.memo((t) => {
  let {
    dropdownMatchSelectWidth: e
  } = t;
  return yi("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (Bd.displayName = "PropWarning");
const XC = process.env.NODE_ENV !== "production" ? Bd : () => null;
var JC = function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
};
let Xo = !1;
process.env.NODE_ENV;
const ZC = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], QC = "ant";
let Od;
function ey() {
  return Od || QC;
}
function ty(t) {
  return Object.keys(t).some((e) => e.endsWith("Color"));
}
const ry = (t) => {
  const {
    prefixCls: e,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = t;
  e !== void 0 && (Od = e), n && ty(n) && (process.env.NODE_ENV !== "production" && Ei(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), tC(ey(), n));
}, ny = (t) => {
  const {
    children: e,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: i,
    form: o,
    locale: u,
    componentSize: s,
    direction: l,
    space: c,
    virtual: d,
    dropdownMatchSelectWidth: v,
    popupMatchSelectWidth: D,
    popupOverflow: m,
    legacyLocale: f,
    parentContext: g,
    iconPrefixCls: p,
    theme: b,
    componentDisabled: C,
    segmented: F,
    statistic: B,
    spin: A,
    calendar: w,
    carousel: M,
    cascader: x,
    collapse: P,
    typography: V,
    checkbox: T,
    descriptions: k,
    divider: N,
    drawer: j,
    skeleton: $,
    steps: S,
    image: L,
    layout: q,
    list: U,
    mentions: Y,
    modal: Q,
    progress: ie,
    result: O,
    slider: _,
    breadcrumb: z,
    menu: X,
    pagination: ue,
    input: ne,
    empty: se,
    badge: fe,
    radio: he,
    rate: Ee,
    switch: J,
    transfer: me,
    avatar: Ae,
    message: we,
    tag: Ye,
    table: Be,
    card: Ce,
    tabs: Oe,
    timeline: ve,
    timePicker: Ne,
    upload: ze,
    notification: Ve,
    tree: at,
    colorPicker: wt,
    datePicker: it,
    rangePicker: Ft,
    flex: Zt,
    wave: gt,
    dropdown: Mn,
    warning: Nn
  } = t, jr = R.useCallback((qe, Xe) => {
    const {
      prefixCls: At
    } = t;
    if (Xe)
      return Xe;
    const pt = At || g.getPrefixCls("");
    return qe ? `${pt}-${qe}` : pt;
  }, [g.getPrefixCls, t.prefixCls]), Qt = p || g.iconPrefixCls || nd, er = r || g.csp;
  fd(Qt, er);
  const hr = SC(b, g.theme);
  process.env.NODE_ENV !== "production" && (Xo = Xo || !!hr);
  const Mr = {
    csp: er,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: i,
    locale: u || f,
    direction: l,
    space: c,
    virtual: d,
    popupMatchSelectWidth: D ?? v,
    popupOverflow: m,
    getPrefixCls: jr,
    iconPrefixCls: Qt,
    theme: hr,
    segmented: F,
    statistic: B,
    spin: A,
    calendar: w,
    carousel: M,
    cascader: x,
    collapse: P,
    typography: V,
    checkbox: T,
    descriptions: k,
    divider: N,
    drawer: j,
    skeleton: $,
    steps: S,
    image: L,
    input: ne,
    layout: q,
    list: U,
    mentions: Y,
    modal: Q,
    progress: ie,
    result: O,
    slider: _,
    breadcrumb: z,
    menu: X,
    pagination: ue,
    empty: se,
    badge: fe,
    radio: he,
    rate: Ee,
    switch: J,
    transfer: me,
    avatar: Ae,
    message: we,
    tag: Ye,
    table: Be,
    card: Ce,
    tabs: Oe,
    timeline: ve,
    timePicker: Ne,
    upload: ze,
    notification: Ve,
    tree: at,
    colorPicker: wt,
    datePicker: it,
    rangePicker: Ft,
    flex: Zt,
    wave: gt,
    dropdown: Mn,
    warning: Nn
  }, zt = Object.assign({}, g);
  Object.keys(Mr).forEach((qe) => {
    Mr[qe] !== void 0 && (zt[qe] = Mr[qe]);
  }), ZC.forEach((qe) => {
    const Xe = t[qe];
    Xe && (zt[qe] = Xe);
  });
  const Rt = vu(() => zt, zt, (qe, Xe) => {
    const At = Object.keys(qe), pt = Object.keys(Xe);
    return At.length !== pt.length || At.some((Nr) => qe[Nr] !== Xe[Nr]);
  }), gr = R.useMemo(() => ({
    prefixCls: Qt,
    csp: er
  }), [Qt, er]);
  let He = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(XC, {
    dropdownMatchSelectWidth: v
  }), e);
  const nn = R.useMemo(() => {
    var qe, Xe, At, pt;
    return pn(((qe = wi.Form) === null || qe === void 0 ? void 0 : qe.defaultValidateMessages) || {}, ((At = (Xe = Rt.locale) === null || Xe === void 0 ? void 0 : Xe.Form) === null || At === void 0 ? void 0 : At.defaultValidateMessages) || {}, ((pt = Rt.form) === null || pt === void 0 ? void 0 : pt.validateMessages) || {}, (o == null ? void 0 : o.validateMessages) || {});
  }, [Rt, o == null ? void 0 : o.validateMessages]);
  Object.keys(nn).length > 0 && (He = /* @__PURE__ */ R.createElement(yb.Provider, {
    value: nn
  }, He)), u && (He = /* @__PURE__ */ R.createElement(Sb, {
    locale: u,
    _ANT_MARK__: Kf
  }, He)), (Qt || er) && (He = /* @__PURE__ */ R.createElement(pb.Provider, {
    value: gr
  }, He)), s && (He = /* @__PURE__ */ R.createElement(nC, {
    size: s
  }, He)), He = /* @__PURE__ */ R.createElement(YC, null, He);
  const pa = R.useMemo(() => {
    const qe = hr || {}, {
      algorithm: Xe,
      token: At,
      components: pt,
      cssVar: Nr
    } = qe, Bi = JC(qe, ["algorithm", "token", "components", "cssVar"]), ma = Xe && (!Array.isArray(Xe) || Xe.length > 0) ? Jn(Xe) : td, an = {};
    Object.entries(pt || {}).forEach((Oi) => {
      let [Si, xi] = Oi;
      const y = Object.assign({}, xi);
      "algorithm" in y && (y.algorithm === !0 ? y.theme = ma : (Array.isArray(y.algorithm) || typeof y.algorithm == "function") && (y.theme = Jn(y.algorithm)), delete y.algorithm), an[Si] = y;
    });
    const Da = Object.assign(Object.assign({}, Tn), At);
    return Object.assign(Object.assign({}, Bi), {
      theme: ma,
      token: Da,
      components: an,
      override: Object.assign({
        override: Da
      }, an),
      cssVar: Nr
    });
  }, [hr]);
  return b && (He = /* @__PURE__ */ R.createElement(rd.Provider, {
    value: pa
  }, He)), Rt.warning && (He = /* @__PURE__ */ R.createElement(Hf.Provider, {
    value: Rt.warning
  }, He)), C !== void 0 && (He = /* @__PURE__ */ R.createElement(rC, {
    disabled: C
  }, He)), /* @__PURE__ */ R.createElement(kr.Provider, {
    value: Rt
  }, He);
}, tn = (t) => {
  const e = R.useContext(kr), r = R.useContext(Uf);
  return /* @__PURE__ */ R.createElement(ny, Object.assign({
    parentContext: e,
    legacyLocale: r
  }, t));
};
tn.ConfigContext = kr;
tn.SizeContext = Vu;
tn.config = ry;
tn.useConfig = aC;
Object.defineProperty(tn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ei(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Vu)
});
process.env.NODE_ENV !== "production" && (tn.displayName = "ConfigProvider");
const ay = tn, {
  isValidElement: iy
} = R;
function oy(t, e, r) {
  return iy(t) ? /* @__PURE__ */ R.cloneElement(t, typeof r == "function" ? r(t.props || {}) : r) : e;
}
function uy(t, e) {
  return oy(t, t, e);
}
const Sd = (t) => {
  const [, , , , e] = Rr();
  return e ? `${t}-css-var` : "";
};
function ct() {
  ct = function() {
    return e;
  };
  var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function($, S, L) {
    $[S] = L.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", u = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
  function l($, S, L) {
    return Object.defineProperty($, S, {
      value: L,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), $[S];
  }
  try {
    l({}, "");
  } catch {
    l = function(L, q, U) {
      return L[q] = U;
    };
  }
  function c($, S, L, q) {
    var U = S && S.prototype instanceof p ? S : p, Y = Object.create(U.prototype), Q = new N(q || []);
    return a(Y, "_invoke", {
      value: P($, L, Q)
    }), Y;
  }
  function d($, S, L) {
    try {
      return {
        type: "normal",
        arg: $.call(S, L)
      };
    } catch (q) {
      return {
        type: "throw",
        arg: q
      };
    }
  }
  e.wrap = c;
  var v = "suspendedStart", D = "suspendedYield", m = "executing", f = "completed", g = {};
  function p() {
  }
  function b() {
  }
  function C() {
  }
  var F = {};
  l(F, o, function() {
    return this;
  });
  var B = Object.getPrototypeOf, A = B && B(B(j([])));
  A && A !== r && n.call(A, o) && (F = A);
  var w = C.prototype = p.prototype = Object.create(F);
  function M($) {
    ["next", "throw", "return"].forEach(function(S) {
      l($, S, function(L) {
        return this._invoke(S, L);
      });
    });
  }
  function x($, S) {
    function L(U, Y, Q, ie) {
      var O = d($[U], $, Y);
      if (O.type !== "throw") {
        var _ = O.arg, z = _.value;
        return z && Me(z) == "object" && n.call(z, "__await") ? S.resolve(z.__await).then(function(X) {
          L("next", X, Q, ie);
        }, function(X) {
          L("throw", X, Q, ie);
        }) : S.resolve(z).then(function(X) {
          _.value = X, Q(_);
        }, function(X) {
          return L("throw", X, Q, ie);
        });
      }
      ie(O.arg);
    }
    var q;
    a(this, "_invoke", {
      value: function(Y, Q) {
        function ie() {
          return new S(function(O, _) {
            L(Y, Q, O, _);
          });
        }
        return q = q ? q.then(ie, ie) : ie();
      }
    });
  }
  function P($, S, L) {
    var q = v;
    return function(U, Y) {
      if (q === m)
        throw new Error("Generator is already running");
      if (q === f) {
        if (U === "throw")
          throw Y;
        return {
          value: t,
          done: !0
        };
      }
      for (L.method = U, L.arg = Y; ; ) {
        var Q = L.delegate;
        if (Q) {
          var ie = V(Q, L);
          if (ie) {
            if (ie === g)
              continue;
            return ie;
          }
        }
        if (L.method === "next")
          L.sent = L._sent = L.arg;
        else if (L.method === "throw") {
          if (q === v)
            throw q = f, L.arg;
          L.dispatchException(L.arg);
        } else
          L.method === "return" && L.abrupt("return", L.arg);
        q = m;
        var O = d($, S, L);
        if (O.type === "normal") {
          if (q = L.done ? f : D, O.arg === g)
            continue;
          return {
            value: O.arg,
            done: L.done
          };
        }
        O.type === "throw" && (q = f, L.method = "throw", L.arg = O.arg);
      }
    };
  }
  function V($, S) {
    var L = S.method, q = $.iterator[L];
    if (q === t)
      return S.delegate = null, L === "throw" && $.iterator.return && (S.method = "return", S.arg = t, V($, S), S.method === "throw") || L !== "return" && (S.method = "throw", S.arg = new TypeError("The iterator does not provide a '" + L + "' method")), g;
    var U = d(q, $.iterator, S.arg);
    if (U.type === "throw")
      return S.method = "throw", S.arg = U.arg, S.delegate = null, g;
    var Y = U.arg;
    return Y ? Y.done ? (S[$.resultName] = Y.value, S.next = $.nextLoc, S.method !== "return" && (S.method = "next", S.arg = t), S.delegate = null, g) : Y : (S.method = "throw", S.arg = new TypeError("iterator result is not an object"), S.delegate = null, g);
  }
  function T($) {
    var S = {
      tryLoc: $[0]
    };
    1 in $ && (S.catchLoc = $[1]), 2 in $ && (S.finallyLoc = $[2], S.afterLoc = $[3]), this.tryEntries.push(S);
  }
  function k($) {
    var S = $.completion || {};
    S.type = "normal", delete S.arg, $.completion = S;
  }
  function N($) {
    this.tryEntries = [{
      tryLoc: "root"
    }], $.forEach(T, this), this.reset(!0);
  }
  function j($) {
    if ($ || $ === "") {
      var S = $[o];
      if (S)
        return S.call($);
      if (typeof $.next == "function")
        return $;
      if (!isNaN($.length)) {
        var L = -1, q = function U() {
          for (; ++L < $.length; )
            if (n.call($, L))
              return U.value = $[L], U.done = !1, U;
          return U.value = t, U.done = !0, U;
        };
        return q.next = q;
      }
    }
    throw new TypeError(Me($) + " is not iterable");
  }
  return b.prototype = C, a(w, "constructor", {
    value: C,
    configurable: !0
  }), a(C, "constructor", {
    value: b,
    configurable: !0
  }), b.displayName = l(C, s, "GeneratorFunction"), e.isGeneratorFunction = function($) {
    var S = typeof $ == "function" && $.constructor;
    return !!S && (S === b || (S.displayName || S.name) === "GeneratorFunction");
  }, e.mark = function($) {
    return Object.setPrototypeOf ? Object.setPrototypeOf($, C) : ($.__proto__ = C, l($, s, "GeneratorFunction")), $.prototype = Object.create(w), $;
  }, e.awrap = function($) {
    return {
      __await: $
    };
  }, M(x.prototype), l(x.prototype, u, function() {
    return this;
  }), e.AsyncIterator = x, e.async = function($, S, L, q, U) {
    U === void 0 && (U = Promise);
    var Y = new x(c($, S, L, q), U);
    return e.isGeneratorFunction(S) ? Y : Y.next().then(function(Q) {
      return Q.done ? Q.value : Y.next();
    });
  }, M(w), l(w, s, "Generator"), l(w, o, function() {
    return this;
  }), l(w, "toString", function() {
    return "[object Generator]";
  }), e.keys = function($) {
    var S = Object($), L = [];
    for (var q in S)
      L.push(q);
    return L.reverse(), function U() {
      for (; L.length; ) {
        var Y = L.pop();
        if (Y in S)
          return U.value = Y, U.done = !1, U;
      }
      return U.done = !0, U;
    };
  }, e.values = j, N.prototype = {
    constructor: N,
    reset: function(S) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(k), !S)
        for (var L in this)
          L.charAt(0) === "t" && n.call(this, L) && !isNaN(+L.slice(1)) && (this[L] = t);
    },
    stop: function() {
      this.done = !0;
      var S = this.tryEntries[0].completion;
      if (S.type === "throw")
        throw S.arg;
      return this.rval;
    },
    dispatchException: function(S) {
      if (this.done)
        throw S;
      var L = this;
      function q(_, z) {
        return Q.type = "throw", Q.arg = S, L.next = _, z && (L.method = "next", L.arg = t), !!z;
      }
      for (var U = this.tryEntries.length - 1; U >= 0; --U) {
        var Y = this.tryEntries[U], Q = Y.completion;
        if (Y.tryLoc === "root")
          return q("end");
        if (Y.tryLoc <= this.prev) {
          var ie = n.call(Y, "catchLoc"), O = n.call(Y, "finallyLoc");
          if (ie && O) {
            if (this.prev < Y.catchLoc)
              return q(Y.catchLoc, !0);
            if (this.prev < Y.finallyLoc)
              return q(Y.finallyLoc);
          } else if (ie) {
            if (this.prev < Y.catchLoc)
              return q(Y.catchLoc, !0);
          } else {
            if (!O)
              throw new Error("try statement without catch or finally");
            if (this.prev < Y.finallyLoc)
              return q(Y.finallyLoc);
          }
        }
      }
    },
    abrupt: function(S, L) {
      for (var q = this.tryEntries.length - 1; q >= 0; --q) {
        var U = this.tryEntries[q];
        if (U.tryLoc <= this.prev && n.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
          var Y = U;
          break;
        }
      }
      Y && (S === "break" || S === "continue") && Y.tryLoc <= L && L <= Y.finallyLoc && (Y = null);
      var Q = Y ? Y.completion : {};
      return Q.type = S, Q.arg = L, Y ? (this.method = "next", this.next = Y.finallyLoc, g) : this.complete(Q);
    },
    complete: function(S, L) {
      if (S.type === "throw")
        throw S.arg;
      return S.type === "break" || S.type === "continue" ? this.next = S.arg : S.type === "return" ? (this.rval = this.arg = S.arg, this.method = "return", this.next = "end") : S.type === "normal" && L && (this.next = L), g;
    },
    finish: function(S) {
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var q = this.tryEntries[L];
        if (q.finallyLoc === S)
          return this.complete(q.completion, q.afterLoc), k(q), g;
      }
    },
    catch: function(S) {
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var q = this.tryEntries[L];
        if (q.tryLoc === S) {
          var U = q.completion;
          if (U.type === "throw") {
            var Y = U.arg;
            k(q);
          }
          return Y;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(S, L, q) {
      return this.delegate = {
        iterator: j(S),
        resultName: L,
        nextLoc: q
      }, this.method === "next" && (this.arg = t), g;
    }
  }, e;
}
function Yl(t, e, r, n, a, i, o) {
  try {
    var u = t[i](o), s = u.value;
  } catch (l) {
    r(l);
    return;
  }
  u.done ? e(s) : Promise.resolve(s).then(n, a);
}
function rn(t) {
  return function() {
    var e = this, r = arguments;
    return new Promise(function(n, a) {
      var i = t.apply(e, r);
      function o(s) {
        Yl(i, n, a, o, u, "next", s);
      }
      function u(s) {
        Yl(i, n, a, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var va = te({}, Ud), sy = va.version, ly = va.render, cy = va.unmountComponentAtNode, Fi;
try {
  var fy = Number((sy || "").split(".")[0]);
  fy >= 18 && (Fi = va.createRoot);
} catch {
}
function Xl(t) {
  var e = va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  e && Me(e) === "object" && (e.usingClientEntryPoint = t);
}
var ui = "__rc_react_root__";
function dy(t, e) {
  Xl(!0);
  var r = e[ui] || Fi(e);
  Xl(!1), r.render(t), e[ui] = r;
}
function vy(t, e) {
  ly(t, e);
}
function hy(t, e) {
  if (Fi) {
    dy(t, e);
    return;
  }
  vy(t, e);
}
function gy(t) {
  return Jo.apply(this, arguments);
}
function Jo() {
  return Jo = rn(/* @__PURE__ */ ct().mark(function t(e) {
    return ct().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = e[ui]) === null || a === void 0 || a.unmount(), delete e[ui];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, t);
  })), Jo.apply(this, arguments);
}
function py(t) {
  cy(t);
}
function my(t) {
  return Zo.apply(this, arguments);
}
function Zo() {
  return Zo = rn(/* @__PURE__ */ ct().mark(function t(e) {
    return ct().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (Fi === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", gy(e));
          case 2:
            py(e);
          case 3:
          case "end":
            return n.stop();
        }
    }, t);
  })), Zo.apply(this, arguments);
}
const Dy = function(t) {
  if (!t)
    return !1;
  if (t instanceof Element) {
    if (t.offsetParent)
      return !0;
    if (t.getBBox) {
      var e = t.getBBox(), r = e.width, n = e.height;
      if (r || n)
        return !0;
    }
    if (t.getBoundingClientRect) {
      var a = t.getBoundingClientRect(), i = a.width, o = a.height;
      if (i || o)
        return !0;
    }
  }
  return !1;
}, by = (t) => {
  const {
    componentCls: e,
    colorPrimary: r
  } = t;
  return {
    [e]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${t.motionEaseOutCirc}`, `opacity 2s ${t.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow 0.3s ${t.motionEaseInOut}`, `opacity 0.35s ${t.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Cy = hd("Wave", (t) => [by(t)]);
function yy(t) {
  const e = (t || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return e && e[1] && e[2] && e[3] ? !(e[1] === e[2] && e[2] === e[3]) : !0;
}
function no(t) {
  return t && t !== "#fff" && t !== "#ffffff" && t !== "rgb(255, 255, 255)" && t !== "rgba(255, 255, 255, 1)" && yy(t) && !/rgba\((?:\d*, ){3}0\)/.test(t) && // any transparent rgba color
  t !== "transparent";
}
function Ey(t) {
  const {
    borderTopColor: e,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(t);
  return no(e) ? e : no(r) ? r : no(n) ? n : null;
}
const Hu = "ant-wave-target";
function ao(t) {
  return Number.isNaN(t) ? 0 : t;
}
const wy = (t) => {
  const {
    className: e,
    target: r,
    component: n
  } = t, a = R.useRef(null), [i, o] = R.useState(null), [u, s] = R.useState([]), [l, c] = R.useState(0), [d, v] = R.useState(0), [D, m] = R.useState(0), [f, g] = R.useState(0), [p, b] = R.useState(!1), C = {
    left: l,
    top: d,
    width: D,
    height: f,
    borderRadius: u.map((A) => `${A}px`).join(" ")
  };
  i && (C["--wave-color"] = i);
  function F() {
    const A = getComputedStyle(r);
    o(Ey(r));
    const w = A.position === "static", {
      borderLeftWidth: M,
      borderTopWidth: x
    } = A;
    c(w ? r.offsetLeft : ao(-parseFloat(M))), v(w ? r.offsetTop : ao(-parseFloat(x))), m(r.offsetWidth), g(r.offsetHeight);
    const {
      borderTopLeftRadius: P,
      borderTopRightRadius: V,
      borderBottomLeftRadius: T,
      borderBottomRightRadius: k
    } = A;
    s([P, V, k, T].map((N) => ao(parseFloat(N))));
  }
  if (R.useEffect(() => {
    if (r) {
      const A = Pr(() => {
        F(), b(!0);
      });
      let w;
      return typeof ResizeObserver < "u" && (w = new ResizeObserver(F), w.observe(r)), () => {
        Pr.cancel(A), w == null || w.disconnect();
      };
    }
  }, []), !p)
    return null;
  const B = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(Hu));
  return /* @__PURE__ */ R.createElement(Ad, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (A, w) => {
      var M;
      if (w.deadline || w.propertyName === "opacity") {
        const x = (M = a.current) === null || M === void 0 ? void 0 : M.parentElement;
        my(x).then(() => {
          x == null || x.remove();
        });
      }
      return !1;
    }
  }, (A) => {
    let {
      className: w
    } = A;
    return /* @__PURE__ */ R.createElement("div", {
      ref: a,
      className: Sr(e, {
        "wave-quick": B
      }, w),
      style: C
    });
  });
}, Fy = (t, e) => {
  var r;
  const {
    component: n
  } = e;
  if (n === "Checkbox" && !(!((r = t.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", t == null || t.insertBefore(a, t == null ? void 0 : t.firstChild), hy(/* @__PURE__ */ R.createElement(wy, Object.assign({}, e, {
    target: t
  })), a);
}, Ay = Fy;
function By(t, e, r) {
  const {
    wave: n
  } = R.useContext(kr), [, a, i] = Rr(), o = Ho((l) => {
    const c = t.current;
    if (n != null && n.disabled || !c)
      return;
    const d = c.querySelector(`.${Hu}`) || c, {
      showEffect: v
    } = n || {};
    (v || Ay)(d, {
      className: e,
      token: a,
      component: r,
      event: l,
      hashId: i
    });
  }), u = R.useRef();
  return (l) => {
    Pr.cancel(u.current), u.current = Pr(() => {
      o(l);
    });
  };
}
const xd = (t) => {
  const {
    children: e,
    disabled: r,
    component: n
  } = t, {
    getPrefixCls: a
  } = Vt(kr), i = $e(null), o = a("wave"), [, u] = Cy(o), s = By(i, Sr(o, u), n);
  if (oe.useEffect(() => {
    const c = i.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const d = (v) => {
      !Dy(v.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || s(v);
    };
    return c.addEventListener("click", d, !0), () => {
      c.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ oe.isValidElement(e))
    return e ?? null;
  const l = If(e) ? hb(e.ref, i) : i;
  return uy(e, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (xd.displayName = "Wave");
const Oy = xd;
var Hr = "RC_FORM_INTERNAL_HOOKS", ke = function() {
  Ge(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Rn = /* @__PURE__ */ R.createContext({
  getFieldValue: ke,
  getFieldsValue: ke,
  getFieldError: ke,
  getFieldWarning: ke,
  getFieldsError: ke,
  isFieldsTouched: ke,
  isFieldTouched: ke,
  isFieldValidating: ke,
  isFieldsValidating: ke,
  resetFields: ke,
  setFields: ke,
  setFieldValue: ke,
  setFieldsValue: ke,
  validateFields: ke,
  submit: ke,
  getInternalHooks: function() {
    return ke(), {
      dispatch: ke,
      initEntityValue: ke,
      registerField: ke,
      useSubscribe: ke,
      setInitialValues: ke,
      destroyForm: ke,
      setCallbacks: ke,
      registerWatch: ke,
      getFields: ke,
      setValidateMessages: ke,
      setPreserve: ke,
      getInitialValue: ke
    };
  }
}), si = /* @__PURE__ */ R.createContext(null);
function Qo(t) {
  return t == null ? [] : Array.isArray(t) ? t : [t];
}
function Sy(t) {
  return t && !!t._init;
}
function qr() {
  return qr = Object.assign ? Object.assign.bind() : function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var r = arguments[e];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }, qr.apply(this, arguments);
}
function xy(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, ca(t, e);
}
function eu(t) {
  return eu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, eu(t);
}
function ca(t, e) {
  return ca = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ca(t, e);
}
function Py() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Ga(t, e, r) {
  return Py() ? Ga = Reflect.construct.bind() : Ga = function(a, i, o) {
    var u = [null];
    u.push.apply(u, i);
    var s = Function.bind.apply(a, u), l = new s();
    return o && ca(l, o.prototype), l;
  }, Ga.apply(null, arguments);
}
function Ty(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function tu(t) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return tu = function(n) {
    if (n === null || !Ty(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(n))
        return e.get(n);
      e.set(n, a);
    }
    function a() {
      return Ga(n, arguments, eu(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ca(a, n);
  }, tu(t);
}
var Ry = /%[sdj%]/g, Pd = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Pd = function(e, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(e, r);
});
function ru(t) {
  if (!t || !t.length)
    return null;
  var e = {};
  return t.forEach(function(r) {
    var n = r.field;
    e[n] = e[n] || [], e[n].push(r);
  }), e;
}
function Ct(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var a = 0, i = r.length;
  if (typeof t == "function")
    return t.apply(null, r);
  if (typeof t == "string") {
    var o = t.replace(Ry, function(u) {
      if (u === "%%")
        return "%";
      if (a >= i)
        return u;
      switch (u) {
        case "%s":
          return String(r[a++]);
        case "%d":
          return Number(r[a++]);
        case "%j":
          try {
            return JSON.stringify(r[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return u;
      }
    });
    return o;
  }
  return t;
}
function ky(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function et(t, e) {
  return !!(t == null || e === "array" && Array.isArray(t) && !t.length || ky(e) && typeof t == "string" && !t);
}
function jy(t, e, r) {
  var n = [], a = 0, i = t.length;
  function o(u) {
    n.push.apply(n, u || []), a++, a === i && r(n);
  }
  t.forEach(function(u) {
    e(u, o);
  });
}
function Jl(t, e, r) {
  var n = 0, a = t.length;
  function i(o) {
    if (o && o.length) {
      r(o);
      return;
    }
    var u = n;
    n = n + 1, u < a ? e(t[u], i) : r([]);
  }
  i([]);
}
function My(t) {
  var e = [];
  return Object.keys(t).forEach(function(r) {
    e.push.apply(e, t[r] || []);
  }), e;
}
var Zl = /* @__PURE__ */ function(t) {
  xy(e, t);
  function e(r, n) {
    var a;
    return a = t.call(this, "Async Validation Error") || this, a.errors = r, a.fields = n, a;
  }
  return e;
}(/* @__PURE__ */ tu(Error));
function Ny(t, e, r, n, a) {
  if (e.first) {
    var i = new Promise(function(v, D) {
      var m = function(p) {
        return n(p), p.length ? D(new Zl(p, ru(p))) : v(a);
      }, f = My(t);
      Jl(f, r, m);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var o = e.firstFields === !0 ? Object.keys(t) : e.firstFields || [], u = Object.keys(t), s = u.length, l = 0, c = [], d = new Promise(function(v, D) {
    var m = function(g) {
      if (c.push.apply(c, g), l++, l === s)
        return n(c), c.length ? D(new Zl(c, ru(c))) : v(a);
    };
    u.length || (n(c), v(a)), u.forEach(function(f) {
      var g = t[f];
      o.indexOf(f) !== -1 ? Jl(g, r, m) : jy(g, r, m);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function $y(t) {
  return !!(t && t.message !== void 0);
}
function Iy(t, e) {
  for (var r = t, n = 0; n < e.length; n++) {
    if (r == null)
      return r;
    r = r[e[n]];
  }
  return r;
}
function Ql(t, e) {
  return function(r) {
    var n;
    return t.fullFields ? n = Iy(e, t.fullFields) : n = e[r.field || t.fullField], $y(r) ? (r.field = r.field || t.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || t.fullField
    };
  };
}
function ec(t, e) {
  if (e) {
    for (var r in e)
      if (e.hasOwnProperty(r)) {
        var n = e[r];
        typeof n == "object" && typeof t[r] == "object" ? t[r] = qr({}, t[r], n) : t[r] = n;
      }
  }
  return t;
}
var Td = function(e, r, n, a, i, o) {
  e.required && (!n.hasOwnProperty(e.field) || et(r, o || e.type)) && a.push(Ct(i.messages.required, e.fullField));
}, Ly = function(e, r, n, a, i) {
  (/^\s+$/.test(r) || r === "") && a.push(Ct(i.messages.whitespace, e.fullField));
}, $a, Vy = function() {
  if ($a)
    return $a;
  var t = "[a-fA-F\\d:]", e = function(F) {
    return F && F.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + r + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + r + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + r + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + r + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + r + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + r + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + r + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + r + "$)|(?:^" + a + "$)"), o = new RegExp("^" + r + "$"), u = new RegExp("^" + a + "$"), s = function(F) {
    return F && F.exact ? i : new RegExp("(?:" + e(F) + r + e(F) + ")|(?:" + e(F) + a + e(F) + ")", "g");
  };
  s.v4 = function(C) {
    return C && C.exact ? o : new RegExp("" + e(C) + r + e(C), "g");
  }, s.v6 = function(C) {
    return C && C.exact ? u : new RegExp("" + e(C) + a + e(C), "g");
  };
  var l = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", d = s.v4().source, v = s.v6().source, D = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", p = '(?:[/?#][^\\s"]*)?', b = "(?:" + l + "|www\\.)" + c + "(?:localhost|" + d + "|" + v + "|" + D + m + f + ")" + g + p;
  return $a = new RegExp("(?:^" + b + "$)", "i"), $a;
}, tc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Hn = {
  integer: function(e) {
    return Hn.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return Hn.number(e) && !Hn.integer(e);
  },
  array: function(e) {
    return Array.isArray(e);
  },
  regexp: function(e) {
    if (e instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(e);
    } catch {
      return !1;
    }
  },
  date: function(e) {
    return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
  },
  number: function(e) {
    return isNaN(e) ? !1 : typeof e == "number";
  },
  object: function(e) {
    return typeof e == "object" && !Hn.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(tc.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(Vy());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(tc.hex);
  }
}, _y = function(e, r, n, a, i) {
  if (e.required && r === void 0) {
    Td(e, r, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], u = e.type;
  o.indexOf(u) > -1 ? Hn[u](r) || a.push(Ct(i.messages.types[u], e.fullField, e.type)) : u && typeof r !== e.type && a.push(Ct(i.messages.types[u], e.fullField, e.type));
}, Wy = function(e, r, n, a, i) {
  var o = typeof e.len == "number", u = typeof e.min == "number", s = typeof e.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, d = null, v = typeof r == "number", D = typeof r == "string", m = Array.isArray(r);
  if (v ? d = "number" : D ? d = "string" : m && (d = "array"), !d)
    return !1;
  m && (c = r.length), D && (c = r.replace(l, "_").length), o ? c !== e.len && a.push(Ct(i.messages[d].len, e.fullField, e.len)) : u && !s && c < e.min ? a.push(Ct(i.messages[d].min, e.fullField, e.min)) : s && !u && c > e.max ? a.push(Ct(i.messages[d].max, e.fullField, e.max)) : u && s && (c < e.min || c > e.max) && a.push(Ct(i.messages[d].range, e.fullField, e.min, e.max));
}, ln = "enum", zy = function(e, r, n, a, i) {
  e[ln] = Array.isArray(e[ln]) ? e[ln] : [], e[ln].indexOf(r) === -1 && a.push(Ct(i.messages[ln], e.fullField, e[ln].join(", ")));
}, Hy = function(e, r, n, a, i) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(r) || a.push(Ct(i.messages.pattern.mismatch, e.fullField, r, e.pattern));
    else if (typeof e.pattern == "string") {
      var o = new RegExp(e.pattern);
      o.test(r) || a.push(Ct(i.messages.pattern.mismatch, e.fullField, r, e.pattern));
    }
  }
}, be = {
  required: Td,
  whitespace: Ly,
  type: _y,
  range: Wy,
  enum: zy,
  pattern: Hy
}, qy = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r, "string") && !e.required)
      return n();
    be.required(e, r, a, o, i, "string"), et(r, "string") || (be.type(e, r, a, o, i), be.range(e, r, a, o, i), be.pattern(e, r, a, o, i), e.whitespace === !0 && be.whitespace(e, r, a, o, i));
  }
  n(o);
}, Uy = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i), r !== void 0 && be.type(e, r, a, o, i);
  }
  n(o);
}, Ky = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (r === "" && (r = void 0), et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i), r !== void 0 && (be.type(e, r, a, o, i), be.range(e, r, a, o, i));
  }
  n(o);
}, Gy = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i), r !== void 0 && be.type(e, r, a, o, i);
  }
  n(o);
}, Yy = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i), et(r) || be.type(e, r, a, o, i);
  }
  n(o);
}, Xy = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i), r !== void 0 && (be.type(e, r, a, o, i), be.range(e, r, a, o, i));
  }
  n(o);
}, Jy = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i), r !== void 0 && (be.type(e, r, a, o, i), be.range(e, r, a, o, i));
  }
  n(o);
}, Zy = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (r == null && !e.required)
      return n();
    be.required(e, r, a, o, i, "array"), r != null && (be.type(e, r, a, o, i), be.range(e, r, a, o, i));
  }
  n(o);
}, Qy = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i), r !== void 0 && be.type(e, r, a, o, i);
  }
  n(o);
}, e1 = "enum", t1 = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i), r !== void 0 && be[e1](e, r, a, o, i);
  }
  n(o);
}, r1 = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r, "string") && !e.required)
      return n();
    be.required(e, r, a, o, i), et(r, "string") || be.pattern(e, r, a, o, i);
  }
  n(o);
}, n1 = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r, "date") && !e.required)
      return n();
    if (be.required(e, r, a, o, i), !et(r, "date")) {
      var s;
      r instanceof Date ? s = r : s = new Date(r), be.type(e, s, a, o, i), s && be.range(e, s.getTime(), a, o, i);
    }
  }
  n(o);
}, a1 = function(e, r, n, a, i) {
  var o = [], u = Array.isArray(r) ? "array" : typeof r;
  be.required(e, r, a, o, i, u), n(o);
}, io = function(e, r, n, a, i) {
  var o = e.type, u = [], s = e.required || !e.required && a.hasOwnProperty(e.field);
  if (s) {
    if (et(r, o) && !e.required)
      return n();
    be.required(e, r, a, u, i, o), et(r, o) || be.type(e, r, a, u, i);
  }
  n(u);
}, i1 = function(e, r, n, a, i) {
  var o = [], u = e.required || !e.required && a.hasOwnProperty(e.field);
  if (u) {
    if (et(r) && !e.required)
      return n();
    be.required(e, r, a, o, i);
  }
  n(o);
}, Xn = {
  string: qy,
  method: Uy,
  number: Ky,
  boolean: Gy,
  regexp: Yy,
  integer: Xy,
  float: Jy,
  array: Zy,
  object: Qy,
  enum: t1,
  pattern: r1,
  date: n1,
  url: io,
  hex: io,
  email: io,
  required: a1,
  any: i1
};
function nu() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var e = JSON.parse(JSON.stringify(this));
      return e.clone = this.clone, e;
    }
  };
}
var au = nu(), ha = /* @__PURE__ */ function() {
  function t(r) {
    this.rules = null, this._messages = au, this.define(r);
  }
  var e = t.prototype;
  return e.define = function(n) {
    var a = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(i) {
      var o = n[i];
      a.rules[i] = Array.isArray(o) ? o : [o];
    });
  }, e.messages = function(n) {
    return n && (this._messages = ec(nu(), n)), this._messages;
  }, e.validate = function(n, a, i) {
    var o = this;
    a === void 0 && (a = {}), i === void 0 && (i = function() {
    });
    var u = n, s = a, l = i;
    if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return l && l(null, u), Promise.resolve(u);
    function c(f) {
      var g = [], p = {};
      function b(F) {
        if (Array.isArray(F)) {
          var B;
          g = (B = g).concat.apply(B, F);
        } else
          g.push(F);
      }
      for (var C = 0; C < f.length; C++)
        b(f[C]);
      g.length ? (p = ru(g), l(g, p)) : l(null, u);
    }
    if (s.messages) {
      var d = this.messages();
      d === au && (d = nu()), ec(d, s.messages), s.messages = d;
    } else
      s.messages = this.messages();
    var v = {}, D = s.keys || Object.keys(this.rules);
    D.forEach(function(f) {
      var g = o.rules[f], p = u[f];
      g.forEach(function(b) {
        var C = b;
        typeof C.transform == "function" && (u === n && (u = qr({}, u)), p = u[f] = C.transform(p)), typeof C == "function" ? C = {
          validator: C
        } : C = qr({}, C), C.validator = o.getValidationMethod(C), C.validator && (C.field = f, C.fullField = C.fullField || f, C.type = o.getType(C), v[f] = v[f] || [], v[f].push({
          rule: C,
          value: p,
          source: u,
          field: f
        }));
      });
    });
    var m = {};
    return Ny(v, s, function(f, g) {
      var p = f.rule, b = (p.type === "object" || p.type === "array") && (typeof p.fields == "object" || typeof p.defaultField == "object");
      b = b && (p.required || !p.required && f.value), p.field = f.field;
      function C(A, w) {
        return qr({}, w, {
          fullField: p.fullField + "." + A,
          fullFields: p.fullFields ? [].concat(p.fullFields, [A]) : [A]
        });
      }
      function F(A) {
        A === void 0 && (A = []);
        var w = Array.isArray(A) ? A : [A];
        !s.suppressWarning && w.length && t.warning("async-validator:", w), w.length && p.message !== void 0 && (w = [].concat(p.message));
        var M = w.map(Ql(p, u));
        if (s.first && M.length)
          return m[p.field] = 1, g(M);
        if (!b)
          g(M);
        else {
          if (p.required && !f.value)
            return p.message !== void 0 ? M = [].concat(p.message).map(Ql(p, u)) : s.error && (M = [s.error(p, Ct(s.messages.required, p.field))]), g(M);
          var x = {};
          p.defaultField && Object.keys(f.value).map(function(T) {
            x[T] = p.defaultField;
          }), x = qr({}, x, f.rule.fields);
          var P = {};
          Object.keys(x).forEach(function(T) {
            var k = x[T], N = Array.isArray(k) ? k : [k];
            P[T] = N.map(C.bind(null, T));
          });
          var V = new t(P);
          V.messages(s.messages), f.rule.options && (f.rule.options.messages = s.messages, f.rule.options.error = s.error), V.validate(f.value, f.rule.options || s, function(T) {
            var k = [];
            M && M.length && k.push.apply(k, M), T && T.length && k.push.apply(k, T), g(k.length ? k : null);
          });
        }
      }
      var B;
      if (p.asyncValidator)
        B = p.asyncValidator(p, f.value, F, f.source, s);
      else if (p.validator) {
        try {
          B = p.validator(p, f.value, F, f.source, s);
        } catch (A) {
          console.error == null || console.error(A), s.suppressValidatorError || setTimeout(function() {
            throw A;
          }, 0), F(A.message);
        }
        B === !0 ? F() : B === !1 ? F(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || (p.fullField || p.field) + " fails") : B instanceof Array ? F(B) : B instanceof Error && F(B.message);
      }
      B && B.then && B.then(function() {
        return F();
      }, function(A) {
        return F(A);
      });
    }, function(f) {
      c(f);
    }, u);
  }, e.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Xn.hasOwnProperty(n.type))
      throw new Error(Ct("Unknown rule type %s", n.type));
    return n.type || "string";
  }, e.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var a = Object.keys(n), i = a.indexOf("message");
    return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? Xn.required : Xn[this.getType(n)] || void 0;
  }, t;
}();
ha.register = function(e, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Xn[e] = r;
};
ha.warning = Pd;
ha.messages = au;
ha.validators = Xn;
var Dt = "'${name}' is not a valid ${type}", Rd = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: Dt,
    method: Dt,
    array: Dt,
    object: Dt,
    number: Dt,
    date: Dt,
    boolean: Dt,
    integer: Dt,
    float: Dt,
    regexp: Dt,
    email: Dt,
    url: Dt,
    hex: Dt
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, rc = ha;
function o1(t, e) {
  return t.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return e[n];
  });
}
var nc = "CODE_LOGIC_ERROR";
function iu(t, e, r, n, a) {
  return ou.apply(this, arguments);
}
function ou() {
  return ou = rn(/* @__PURE__ */ ct().mark(function t(e, r, n, a, i) {
    var o, u, s, l, c, d, v, D, m;
    return ct().wrap(function(g) {
      for (; ; )
        switch (g.prev = g.next) {
          case 0:
            return o = te({}, n), delete o.ruleIndex, rc.warning = function() {
            }, o.validator && (u = o.validator, o.validator = function() {
              try {
                return u.apply(void 0, arguments);
              } catch (p) {
                return console.error(p), Promise.reject(nc);
              }
            }), s = null, o && o.type === "array" && o.defaultField && (s = o.defaultField, delete o.defaultField), l = new rc(W({}, e, [o])), c = pn(Rd, a.validateMessages), l.messages(c), d = [], g.prev = 10, g.next = 13, Promise.resolve(l.validate(W({}, e, r), te({}, a)));
          case 13:
            g.next = 18;
            break;
          case 15:
            g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (d = g.t0.errors.map(function(p, b) {
              var C = p.message, F = C === nc ? c.default : C;
              return /* @__PURE__ */ R.isValidElement(F) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ R.cloneElement(F, {
                  key: "error_".concat(b)
                })
              ) : F;
            }));
          case 18:
            if (!(!d.length && s)) {
              g.next = 23;
              break;
            }
            return g.next = 21, Promise.all(r.map(function(p, b) {
              return iu("".concat(e, ".").concat(b), p, s, a, i);
            }));
          case 21:
            return v = g.sent, g.abrupt("return", v.reduce(function(p, b) {
              return [].concat(de(p), de(b));
            }, []));
          case 23:
            return D = te(te({}, n), {}, {
              name: e,
              enum: (n.enum || []).join(", ")
            }, i), m = d.map(function(p) {
              return typeof p == "string" ? o1(p, D) : p;
            }), g.abrupt("return", m);
          case 26:
          case "end":
            return g.stop();
        }
    }, t, null, [[10, 15]]);
  })), ou.apply(this, arguments);
}
function u1(t, e, r, n, a, i) {
  var o = t.join("."), u = r.map(function(c, d) {
    var v = c.validator, D = te(te({}, c), {}, {
      ruleIndex: d
    });
    return v && (D.validator = function(m, f, g) {
      var p = !1, b = function() {
        for (var B = arguments.length, A = new Array(B), w = 0; w < B; w++)
          A[w] = arguments[w];
        Promise.resolve().then(function() {
          Ge(!p, "Your validator function has already return a promise. `callback` will be ignored."), p || g.apply(void 0, A);
        });
      }, C = v(m, f, b);
      p = C && typeof C.then == "function" && typeof C.catch == "function", Ge(p, "`callback` is deprecated. Please return a promise instead."), p && C.then(function() {
        g();
      }).catch(function(F) {
        g(F || " ");
      });
    }), D;
  }).sort(function(c, d) {
    var v = c.warningOnly, D = c.ruleIndex, m = d.warningOnly, f = d.ruleIndex;
    return !!v == !!m ? D - f : v ? 1 : -1;
  }), s;
  if (a === !0)
    s = new Promise(/* @__PURE__ */ function() {
      var c = rn(/* @__PURE__ */ ct().mark(function d(v, D) {
        var m, f, g;
        return ct().wrap(function(b) {
          for (; ; )
            switch (b.prev = b.next) {
              case 0:
                m = 0;
              case 1:
                if (!(m < u.length)) {
                  b.next = 12;
                  break;
                }
                return f = u[m], b.next = 5, iu(o, e, f, n, i);
              case 5:
                if (g = b.sent, !g.length) {
                  b.next = 9;
                  break;
                }
                return D([{
                  errors: g,
                  rule: f
                }]), b.abrupt("return");
              case 9:
                m += 1, b.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return b.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return c.apply(this, arguments);
      };
    }());
  else {
    var l = u.map(function(c) {
      return iu(o, e, c, n, i).then(function(d) {
        return {
          errors: d,
          rule: c
        };
      });
    });
    s = (a ? l1(l) : s1(l)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return s.catch(function(c) {
    return c;
  }), s;
}
function s1(t) {
  return uu.apply(this, arguments);
}
function uu() {
  return uu = rn(/* @__PURE__ */ ct().mark(function t(e) {
    return ct().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(e).then(function(a) {
              var i, o = (i = []).concat.apply(i, de(a));
              return o;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, t);
  })), uu.apply(this, arguments);
}
function l1(t) {
  return su.apply(this, arguments);
}
function su() {
  return su = rn(/* @__PURE__ */ ct().mark(function t(e) {
    var r;
    return ct().wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return r = 0, a.abrupt("return", new Promise(function(i) {
              e.forEach(function(o) {
                o.then(function(u) {
                  u.errors.length && i([u]), r += 1, r === e.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, t);
  })), su.apply(this, arguments);
}
function Ke(t) {
  return Qo(t);
}
function ac(t, e) {
  var r = {};
  return e.forEach(function(n) {
    var a = Yt(t, n);
    r = jt(r, n, a);
  }), r;
}
function wn(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return t && t.some(function(n) {
    return kd(e, n, r);
  });
}
function kd(t, e) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !t || !e || !r && t.length !== e.length ? !1 : e.every(function(n, a) {
    return t[a] === n;
  });
}
function c1(t, e) {
  if (t === e)
    return !0;
  if (!t && e || t && !e || !t || !e || Me(t) !== "object" || Me(e) !== "object")
    return !1;
  var r = Object.keys(t), n = Object.keys(e), a = new Set([].concat(r, n));
  return de(a).every(function(i) {
    var o = t[i], u = e[i];
    return typeof o == "function" && typeof u == "function" ? !0 : o === u;
  });
}
function f1(t) {
  var e = arguments.length <= 1 ? void 0 : arguments[1];
  return e && e.target && Me(e.target) === "object" && t in e.target ? e.target[t] : e;
}
function ic(t, e, r) {
  var n = t.length;
  if (e < 0 || e >= n || r < 0 || r >= n)
    return t;
  var a = t[e], i = e - r;
  return i > 0 ? [].concat(de(t.slice(0, r)), [a], de(t.slice(r, e)), de(t.slice(e + 1, n))) : i < 0 ? [].concat(de(t.slice(0, e)), de(t.slice(e + 1, r + 1)), [a], de(t.slice(r + 1, n))) : t;
}
var d1 = ["name"], Ot = [];
function oc(t, e, r, n, a, i) {
  return typeof t == "function" ? t(e, r, "source" in i ? {
    source: i.source
  } : {}) : n !== a;
}
var qu = /* @__PURE__ */ function(t) {
  fa(r, t);
  var e = $u(r);
  function r(n) {
    var a;
    if (_t(this, r), a = e.call(this, n), W(Fe(a), "state", {
      resetCount: 0
    }), W(Fe(a), "cancelRegisterFunc", null), W(Fe(a), "mounted", !1), W(Fe(a), "touched", !1), W(Fe(a), "dirty", !1), W(Fe(a), "validatePromise", void 0), W(Fe(a), "prevValidating", void 0), W(Fe(a), "errors", Ot), W(Fe(a), "warnings", Ot), W(Fe(a), "cancelRegister", function() {
      var s = a.props, l = s.preserve, c = s.isListField, d = s.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(c, l, Ke(d)), a.cancelRegisterFunc = null;
    }), W(Fe(a), "getNamePath", function() {
      var s = a.props, l = s.name, c = s.fieldContext, d = c.prefixName, v = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(de(v), de(l)) : [];
    }), W(Fe(a), "getRules", function() {
      var s = a.props, l = s.rules, c = l === void 0 ? [] : l, d = s.fieldContext;
      return c.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), W(Fe(a), "refresh", function() {
      a.mounted && a.setState(function(s) {
        var l = s.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), W(Fe(a), "metaCache", null), W(Fe(a), "triggerMetaEvent", function(s) {
      var l = a.props.onMetaChange;
      if (l) {
        var c = te(te({}, a.getMeta()), {}, {
          destroy: s
        });
        Xa(a.metaCache, c) || l(c), a.metaCache = c;
      } else
        a.metaCache = null;
    }), W(Fe(a), "onStoreChange", function(s, l, c) {
      var d = a.props, v = d.shouldUpdate, D = d.dependencies, m = D === void 0 ? [] : D, f = d.onReset, g = c.store, p = a.getNamePath(), b = a.getValue(s), C = a.getValue(g), F = l && wn(l, p);
      switch (c.type === "valueUpdate" && c.source === "external" && b !== C && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Ot, a.warnings = Ot, a.triggerMetaEvent()), c.type) {
        case "reset":
          if (!l || F) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = Ot, a.warnings = Ot, a.triggerMetaEvent(), f == null || f(), a.refresh();
            return;
          }
          break;
        case "remove": {
          if (v) {
            a.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var B = c.data;
          if (F) {
            "touched" in B && (a.touched = B.touched), "validating" in B && !("originRCField" in B) && (a.validatePromise = B.validating ? Promise.resolve([]) : null), "errors" in B && (a.errors = B.errors || Ot), "warnings" in B && (a.warnings = B.warnings || Ot), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in B && wn(l, p, !0)) {
            a.reRender();
            return;
          }
          if (v && !p.length && oc(v, s, g, b, C, c)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var A = m.map(Ke);
          if (A.some(function(w) {
            return wn(c.relatedFields, w);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (F || (!m.length || p.length || v) && oc(v, s, g, b, C, c)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), W(Fe(a), "validateRules", function(s) {
      var l = a.getNamePath(), c = a.getValue(), d = s || {}, v = d.triggerName, D = d.validateOnly, m = D === void 0 ? !1 : D, f = Promise.resolve().then(/* @__PURE__ */ rn(/* @__PURE__ */ ct().mark(function g() {
        var p, b, C, F, B, A, w;
        return ct().wrap(function(x) {
          for (; ; )
            switch (x.prev = x.next) {
              case 0:
                if (a.mounted) {
                  x.next = 2;
                  break;
                }
                return x.abrupt("return", []);
              case 2:
                if (p = a.props, b = p.validateFirst, C = b === void 0 ? !1 : b, F = p.messageVariables, B = p.validateDebounce, A = a.getRules(), v && (A = A.filter(function(P) {
                  return P;
                }).filter(function(P) {
                  var V = P.validateTrigger;
                  if (!V)
                    return !0;
                  var T = Qo(V);
                  return T.includes(v);
                })), !(B && v)) {
                  x.next = 10;
                  break;
                }
                return x.next = 8, new Promise(function(P) {
                  setTimeout(P, B);
                });
              case 8:
                if (a.validatePromise === f) {
                  x.next = 10;
                  break;
                }
                return x.abrupt("return", []);
              case 10:
                return w = u1(l, c, A, s, C, F), w.catch(function(P) {
                  return P;
                }).then(function() {
                  var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Ot;
                  if (a.validatePromise === f) {
                    var V;
                    a.validatePromise = null;
                    var T = [], k = [];
                    (V = P.forEach) === null || V === void 0 || V.call(P, function(N) {
                      var j = N.rule.warningOnly, $ = N.errors, S = $ === void 0 ? Ot : $;
                      j ? k.push.apply(k, de(S)) : T.push.apply(T, de(S));
                    }), a.errors = T, a.warnings = k, a.triggerMetaEvent(), a.reRender();
                  }
                }), x.abrupt("return", w);
              case 13:
              case "end":
                return x.stop();
            }
        }, g);
      })));
      return m || (a.validatePromise = f, a.dirty = !0, a.errors = Ot, a.warnings = Ot, a.triggerMetaEvent(), a.reRender()), f;
    }), W(Fe(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), W(Fe(a), "isFieldTouched", function() {
      return a.touched;
    }), W(Fe(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var s = a.props.fieldContext, l = s.getInternalHooks(Hr), c = l.getInitialValue;
      return c(a.getNamePath()) !== void 0;
    }), W(Fe(a), "getErrors", function() {
      return a.errors;
    }), W(Fe(a), "getWarnings", function() {
      return a.warnings;
    }), W(Fe(a), "isListField", function() {
      return a.props.isListField;
    }), W(Fe(a), "isList", function() {
      return a.props.isList;
    }), W(Fe(a), "isPreserve", function() {
      return a.props.preserve;
    }), W(Fe(a), "getMeta", function() {
      a.prevValidating = a.isFieldValidating();
      var s = {
        touched: a.isFieldTouched(),
        validating: a.prevValidating,
        errors: a.errors,
        warnings: a.warnings,
        name: a.getNamePath(),
        validated: a.validatePromise === null
      };
      return s;
    }), W(Fe(a), "getOnlyChild", function(s) {
      if (typeof s == "function") {
        var l = a.getMeta();
        return te(te({}, a.getOnlyChild(s(a.getControlled(), l, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = $o(s);
      return c.length !== 1 || !/* @__PURE__ */ R.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }), W(Fe(a), "getValue", function(s) {
      var l = a.props.fieldContext.getFieldsValue, c = a.getNamePath();
      return Yt(s || l(!0), c);
    }), W(Fe(a), "getControlled", function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = a.props, c = l.trigger, d = l.validateTrigger, v = l.getValueFromEvent, D = l.normalize, m = l.valuePropName, f = l.getValueProps, g = l.fieldContext, p = d !== void 0 ? d : g.validateTrigger, b = a.getNamePath(), C = g.getInternalHooks, F = g.getFieldsValue, B = C(Hr), A = B.dispatch, w = a.getValue(), M = f || function(T) {
        return W({}, m, T);
      }, x = s[c], P = te(te({}, s), M(w));
      P[c] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var T, k = arguments.length, N = new Array(k), j = 0; j < k; j++)
          N[j] = arguments[j];
        v ? T = v.apply(void 0, N) : T = f1.apply(void 0, [m].concat(N)), D && (T = D(T, w, F(!0))), A({
          type: "updateValue",
          namePath: b,
          value: T
        }), x && x.apply(void 0, N);
      };
      var V = Qo(p || []);
      return V.forEach(function(T) {
        var k = P[T];
        P[T] = function() {
          k && k.apply(void 0, arguments);
          var N = a.props.rules;
          N && N.length && A({
            type: "validateField",
            namePath: b,
            triggerName: T
          });
        };
      }), P;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, o = i(Hr), u = o.initEntityValue;
      u(Fe(a));
    }
    return a;
  }
  return Wt(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var u = o.getInternalHooks, s = u(Hr), l = s.registerField;
        this.cancelRegisterFunc = l(this);
      }
      i === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var a = this.state.resetCount, i = this.props.children, o = this.getOnlyChild(i), u = o.child, s = o.isFunction, l;
      return s ? l = u : /* @__PURE__ */ R.isValidElement(u) ? l = /* @__PURE__ */ R.cloneElement(u, this.getControlled(u.props)) : (Ge(!u, "`children` of Field is not validate ReactElement."), l = u), /* @__PURE__ */ R.createElement(R.Fragment, {
        key: a
      }, l);
    }
  }]), r;
}(R.Component);
W(qu, "contextType", Rn);
W(qu, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function jd(t) {
  var e = t.name, r = Ar(t, d1), n = R.useContext(Rn), a = R.useContext(si), i = e !== void 0 ? Ke(e) : void 0, o = "keep";
  return r.isListField || (o = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && i.length <= 1 && Ge(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ R.createElement(qu, Jr({
    key: o,
    name: i,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function v1(t) {
  var e = t.name, r = t.initialValue, n = t.children, a = t.rules, i = t.validateTrigger, o = t.isListField, u = R.useContext(Rn), s = R.useContext(si), l = R.useRef({
    keys: [],
    id: 0
  }), c = l.current, d = R.useMemo(function() {
    var f = Ke(u.prefixName) || [];
    return [].concat(de(f), de(Ke(e)));
  }, [u.prefixName, e]), v = R.useMemo(function() {
    return te(te({}, u), {}, {
      prefixName: d
    });
  }, [u, d]), D = R.useMemo(function() {
    return {
      getKey: function(g) {
        var p = d.length, b = g[p];
        return [c.keys[b], g.slice(p + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return Ge(!1, "Form.List only accepts function as children."), null;
  var m = function(g, p, b) {
    var C = b.source;
    return C === "internal" ? !1 : g !== p;
  };
  return /* @__PURE__ */ R.createElement(si.Provider, {
    value: D
  }, /* @__PURE__ */ R.createElement(Rn.Provider, {
    value: v
  }, /* @__PURE__ */ R.createElement(jd, {
    name: [],
    shouldUpdate: m,
    rules: a,
    validateTrigger: i,
    initialValue: r,
    isList: !0,
    isListField: o ?? !!s
  }, function(f, g) {
    var p = f.value, b = p === void 0 ? [] : p, C = f.onChange, F = u.getFieldValue, B = function() {
      var x = F(d || []);
      return x || [];
    }, A = {
      add: function(x, P) {
        var V = B();
        P >= 0 && P <= V.length ? (c.keys = [].concat(de(c.keys.slice(0, P)), [c.id], de(c.keys.slice(P))), C([].concat(de(V.slice(0, P)), [x], de(V.slice(P))))) : (process.env.NODE_ENV !== "production" && (P < 0 || P > V.length) && Ge(!1, "The second parameter of the add function should be a valid positive number."), c.keys = [].concat(de(c.keys), [c.id]), C([].concat(de(V), [x]))), c.id += 1;
      },
      remove: function(x) {
        var P = B(), V = new Set(Array.isArray(x) ? x : [x]);
        V.size <= 0 || (c.keys = c.keys.filter(function(T, k) {
          return !V.has(k);
        }), C(P.filter(function(T, k) {
          return !V.has(k);
        })));
      },
      move: function(x, P) {
        if (x !== P) {
          var V = B();
          x < 0 || x >= V.length || P < 0 || P >= V.length || (c.keys = ic(c.keys, x, P), C(ic(V, x, P)));
        }
      }
    }, w = b || [];
    return Array.isArray(w) || (w = [], process.env.NODE_ENV !== "production" && Ge(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(w.map(function(M, x) {
      var P = c.keys[x];
      return P === void 0 && (c.keys[x] = c.id, P = c.keys[x], c.id += 1), {
        name: x,
        key: P,
        isListField: !0
      };
    }), A, g);
  })));
}
function h1(t) {
  var e = !1, r = t.length, n = [];
  return t.length ? new Promise(function(a, i) {
    t.forEach(function(o, u) {
      o.catch(function(s) {
        return e = !0, s;
      }).then(function(s) {
        r -= 1, n[u] = s, !(r > 0) && (e && i(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var Md = "__@field_split__";
function oo(t) {
  return t.map(function(e) {
    return "".concat(Me(e), ":").concat(e);
  }).join(Md);
}
var cn = /* @__PURE__ */ function() {
  function t() {
    _t(this, t), W(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Wt(t, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(oo(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(oo(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var a = this.get(r), i = n(a);
      i ? this.set(r, i) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(oo(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return de(this.kvs.entries()).map(function(n) {
        var a = pe(n, 2), i = a[0], o = a[1], u = i.split(Md);
        return r({
          key: u.map(function(s) {
            var l = s.match(/^([^:]*):(.*)$/), c = pe(l, 3), d = c[1], v = c[2];
            return d === "number" ? Number(v) : v;
          }),
          value: o
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var a = n.key, i = n.value;
        return r[a.join(".")] = i, null;
      }), r;
    }
  }]), t;
}(), g1 = ["name"], p1 = /* @__PURE__ */ Wt(function t(e) {
  var r = this;
  _t(this, t), W(this, "formHooked", !1), W(this, "forceRootUpdate", void 0), W(this, "subscribable", !0), W(this, "store", {}), W(this, "fieldEntities", []), W(this, "initialValues", {}), W(this, "callbacks", {}), W(this, "validateMessages", null), W(this, "preserve", null), W(this, "lastValidatePromise", null), W(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), W(this, "getInternalHooks", function(n) {
    return n === Hr ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (Ge(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), W(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), W(this, "prevWithoutPreserves", null), W(this, "setInitialValues", function(n, a) {
    if (r.initialValues = n || {}, a) {
      var i, o = pn(n, r.store);
      (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(u) {
        var s = u.key;
        o = jt(o, s, Yt(n, s));
      }), r.prevWithoutPreserves = null, r.updateStore(o);
    }
  }), W(this, "destroyForm", function() {
    var n = new cn();
    r.getFieldEntities(!0).forEach(function(a) {
      r.isMergedPreserve(a.isPreserve()) || n.set(a.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }), W(this, "getInitialValue", function(n) {
    var a = Yt(r.initialValues, n);
    return n.length ? pn(a) : a;
  }), W(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), W(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), W(this, "setPreserve", function(n) {
    r.preserve = n;
  }), W(this, "watchList", []), W(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(a) {
        return a !== n;
      });
    };
  }), W(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var a = r.getFieldsValue(), i = r.getFieldsValue(!0);
      r.watchList.forEach(function(o) {
        o(a, i, n);
      });
    }
  }), W(this, "timeoutId", null), W(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || Ge(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), W(this, "updateStore", function(n) {
    r.store = n;
  }), W(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(a) {
      return a.getNamePath().length;
    }) : r.fieldEntities;
  }), W(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new cn();
    return r.getFieldEntities(n).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }), W(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(i) {
      var o = Ke(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: Ke(i)
      };
    });
  }), W(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var i, o, u;
    if (n === !0 || Array.isArray(n) ? (i = n, o = a) : n && Me(n) === "object" && (u = n.strict, o = n.filter), i === !0 && !o)
      return r.store;
    var s = r.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), l = [];
    return s.forEach(function(c) {
      var d, v, D = "INVALIDATE_NAME_PATH" in c ? c.INVALIDATE_NAME_PATH : c.getNamePath();
      if (u) {
        var m, f;
        if ((m = (f = c).isList) !== null && m !== void 0 && m.call(f))
          return;
      } else if (!i && (d = (v = c).isListField) !== null && d !== void 0 && d.call(v))
        return;
      if (!o)
        l.push(D);
      else {
        var g = "getMeta" in c ? c.getMeta() : null;
        o(g) && l.push(D);
      }
    }), ac(r.store, l.map(Ke));
  }), W(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = Ke(n);
    return Yt(r.store, a);
  }), W(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: Ke(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), W(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = Ke(n), i = r.getFieldsError([a])[0];
    return i.errors;
  }), W(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = Ke(n), i = r.getFieldsError([a])[0];
    return i.warnings;
  }), W(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a[0], u = a[1], s, l = !1;
    a.length === 0 ? s = null : a.length === 1 ? Array.isArray(o) ? (s = o.map(Ke), l = !1) : (s = null, l = o) : (s = o.map(Ke), l = u);
    var c = r.getFieldEntities(!0), d = function(g) {
      return g.isFieldTouched();
    };
    if (!s)
      return l ? c.every(d) : c.some(d);
    var v = new cn();
    s.forEach(function(f) {
      v.set(f, []);
    }), c.forEach(function(f) {
      var g = f.getNamePath();
      s.forEach(function(p) {
        p.every(function(b, C) {
          return g[C] === b;
        }) && v.update(p, function(b) {
          return [].concat(de(b), [f]);
        });
      });
    });
    var D = function(g) {
      return g.some(d);
    }, m = v.map(function(f) {
      var g = f.value;
      return g;
    });
    return l ? m.every(D) : m.some(D);
  }), W(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), W(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = n.map(Ke);
    return a.some(function(o) {
      var u = o.getNamePath();
      return wn(i, u) && o.isFieldValidating();
    });
  }), W(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), W(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new cn(), i = r.getFieldEntities(!0);
    i.forEach(function(s) {
      var l = s.props.initialValue, c = s.getNamePath();
      if (l !== void 0) {
        var d = a.get(c) || /* @__PURE__ */ new Set();
        d.add({
          entity: s,
          value: l
        }), a.set(c, d);
      }
    });
    var o = function(l) {
      l.forEach(function(c) {
        var d = c.props.initialValue;
        if (d !== void 0) {
          var v = c.getNamePath(), D = r.getInitialValue(v);
          if (D !== void 0)
            Ge(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var m = a.get(v);
            if (m && m.size > 1)
              Ge(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var f = r.getFieldValue(v), g = c.isListField();
              !g && (!n.skipExist || f === void 0) && r.updateStore(jt(r.store, v, de(m)[0].value));
            }
          }
        }
      });
    }, u;
    n.entities ? u = n.entities : n.namePathList ? (u = [], n.namePathList.forEach(function(s) {
      var l = a.get(s);
      if (l) {
        var c;
        (c = u).push.apply(c, de(de(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : u = i, o(u);
  }), W(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(pn(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var i = n.map(Ke);
    i.forEach(function(o) {
      var u = r.getInitialValue(o);
      r.updateStore(jt(r.store, o, u));
    }), r.resetWithFieldInitialValue({
      namePathList: i
    }), r.notifyObservers(a, i, {
      type: "reset"
    }), r.notifyWatch(i);
  }), W(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, i = [];
    n.forEach(function(o) {
      var u = o.name, s = Ar(o, g1), l = Ke(u);
      i.push(l), "value" in s && r.updateStore(jt(r.store, l, s.value)), r.notifyObservers(a, [l], {
        type: "setField",
        data: o
      });
    }), r.notifyWatch(i);
  }), W(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(i) {
      var o = i.getNamePath(), u = i.getMeta(), s = te(te({}, u), {}, {
        name: o,
        value: r.getFieldValue(o)
      });
      return Object.defineProperty(s, "originRCField", {
        value: !0
      }), s;
    });
    return a;
  }), W(this, "initEntityValue", function(n) {
    var a = n.props.initialValue;
    if (a !== void 0) {
      var i = n.getNamePath(), o = Yt(r.store, i);
      o === void 0 && r.updateStore(jt(r.store, i, a));
    }
  }), W(this, "isMergedPreserve", function(n) {
    var a = n !== void 0 ? n : r.preserve;
    return a ?? !0;
  }), W(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var a = n.getNamePath();
    if (r.notifyWatch([a]), n.props.initialValue !== void 0) {
      var i = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(i, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(o, u) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(u) && (!o || s.length > 1)) {
        var l = o ? void 0 : r.getInitialValue(a);
        if (a.length && r.getFieldValue(a) !== l && r.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !kd(d.getNamePath(), a)
          );
        })) {
          var c = r.store;
          r.updateStore(jt(c, a, l, !0)), r.notifyObservers(c, [a], {
            type: "remove"
          }), r.triggerDependenciesUpdate(c, a);
        }
      }
      r.notifyWatch([a]);
    };
  }), W(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var a = n.namePath, i = n.value;
        r.updateValue(a, i);
        break;
      }
      case "validateField": {
        var o = n.namePath, u = n.triggerName;
        r.validateFields([o], {
          triggerName: u
        });
        break;
      }
    }
  }), W(this, "notifyObservers", function(n, a, i) {
    if (r.subscribable) {
      var o = te(te({}, i), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(u) {
        var s = u.onStoreChange;
        s(n, a, o);
      });
    } else
      r.forceRootUpdate();
  }), W(this, "triggerDependenciesUpdate", function(n, a) {
    var i = r.getDependencyChildrenFields(a);
    return i.length && r.validateFields(i), r.notifyObservers(n, i, {
      type: "dependenciesUpdate",
      relatedFields: [a].concat(de(i))
    }), i;
  }), W(this, "updateValue", function(n, a) {
    var i = Ke(n), o = r.store;
    r.updateStore(jt(r.store, i, a)), r.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([i]);
    var u = r.triggerDependenciesUpdate(o, i), s = r.callbacks.onValuesChange;
    if (s) {
      var l = ac(r.store, [i]);
      s(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([i].concat(de(u)));
  }), W(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var i = pn(r.store, n);
      r.updateStore(i);
    }
    r.notifyObservers(a, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), W(this, "setFieldValue", function(n, a) {
    r.setFields([{
      name: n,
      value: a
    }]);
  }), W(this, "getDependencyChildrenFields", function(n) {
    var a = /* @__PURE__ */ new Set(), i = [], o = new cn();
    r.getFieldEntities().forEach(function(s) {
      var l = s.props.dependencies;
      (l || []).forEach(function(c) {
        var d = Ke(c);
        o.update(d, function() {
          var v = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return v.add(s), v;
        });
      });
    });
    var u = function s(l) {
      var c = o.get(l) || /* @__PURE__ */ new Set();
      c.forEach(function(d) {
        if (!a.has(d)) {
          a.add(d);
          var v = d.getNamePath();
          d.isFieldDirty() && v.length && (i.push(v), s(v));
        }
      });
    };
    return u(n), i;
  }), W(this, "triggerOnFieldsChange", function(n, a) {
    var i = r.callbacks.onFieldsChange;
    if (i) {
      var o = r.getFields();
      if (a) {
        var u = new cn();
        a.forEach(function(l) {
          var c = l.name, d = l.errors;
          u.set(c, d);
        }), o.forEach(function(l) {
          l.errors = u.get(l.name) || l.errors;
        });
      }
      var s = o.filter(function(l) {
        var c = l.name;
        return wn(n, c);
      });
      s.length && i(s, o);
    }
  }), W(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var i, o;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (i = n, o = a) : o = n;
    var u = !!i, s = u ? i.map(Ke) : [], l = [], c = String(Date.now()), d = /* @__PURE__ */ new Set(), v = o || {}, D = v.recursive, m = v.dirty;
    r.getFieldEntities(!0).forEach(function(b) {
      if (u || s.push(b.getNamePath()), !(!b.props.rules || !b.props.rules.length) && !(m && !b.isFieldDirty())) {
        var C = b.getNamePath();
        if (d.add(C.join(c)), !u || wn(s, C, D)) {
          var F = b.validateRules(te({
            validateMessages: te(te({}, Rd), r.validateMessages)
          }, o));
          l.push(F.then(function() {
            return {
              name: C,
              errors: [],
              warnings: []
            };
          }).catch(function(B) {
            var A, w = [], M = [];
            return (A = B.forEach) === null || A === void 0 || A.call(B, function(x) {
              var P = x.rule.warningOnly, V = x.errors;
              P ? M.push.apply(M, de(V)) : w.push.apply(w, de(V));
            }), w.length ? Promise.reject({
              name: C,
              errors: w,
              warnings: M
            }) : {
              name: C,
              errors: w,
              warnings: M
            };
          }));
        }
      }
    });
    var f = h1(l);
    r.lastValidatePromise = f, f.catch(function(b) {
      return b;
    }).then(function(b) {
      var C = b.map(function(F) {
        var B = F.name;
        return B;
      });
      r.notifyObservers(r.store, C, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(C, b);
    });
    var g = f.then(function() {
      return r.lastValidatePromise === f ? Promise.resolve(r.getFieldsValue(s)) : Promise.reject([]);
    }).catch(function(b) {
      var C = b.filter(function(F) {
        return F && F.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(s),
        errorFields: C,
        outOfDate: r.lastValidatePromise !== f
      });
    });
    g.catch(function(b) {
      return b;
    });
    var p = s.filter(function(b) {
      return d.has(b.join(c));
    });
    return r.triggerOnFieldsChange(p), g;
  }), W(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var a = r.callbacks.onFinish;
      if (a)
        try {
          a(n);
        } catch (i) {
          console.error(i);
        }
    }).catch(function(n) {
      var a = r.callbacks.onFinishFailed;
      a && a(n);
    });
  }), this.forceRootUpdate = e;
});
function Nd(t) {
  var e = R.useRef(), r = R.useState({}), n = pe(r, 2), a = n[1];
  if (!e.current)
    if (t)
      e.current = t;
    else {
      var i = function() {
        a({});
      }, o = new p1(i);
      e.current = o.getForm();
    }
  return [e.current];
}
var lu = /* @__PURE__ */ R.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), m1 = function(e) {
  var r = e.validateMessages, n = e.onFormChange, a = e.onFormFinish, i = e.children, o = R.useContext(lu), u = R.useRef({});
  return /* @__PURE__ */ R.createElement(lu.Provider, {
    value: te(te({}, o), {}, {
      validateMessages: te(te({}, o.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, c) {
        n && n(l, {
          changedFields: c,
          forms: u.current
        }), o.triggerFormChange(l, c);
      },
      triggerFormFinish: function(l, c) {
        a && a(l, {
          values: c,
          forms: u.current
        }), o.triggerFormFinish(l, c);
      },
      registerForm: function(l, c) {
        l && (u.current = te(te({}, u.current), {}, W({}, l, c))), o.registerForm(l, c);
      },
      unregisterForm: function(l) {
        var c = te({}, u.current);
        delete c[l], u.current = c, o.unregisterForm(l);
      }
    })
  }, i);
}, D1 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], b1 = function(e, r) {
  var n = e.name, a = e.initialValues, i = e.fields, o = e.form, u = e.preserve, s = e.children, l = e.component, c = l === void 0 ? "form" : l, d = e.validateMessages, v = e.validateTrigger, D = v === void 0 ? "onChange" : v, m = e.onValuesChange, f = e.onFieldsChange, g = e.onFinish, p = e.onFinishFailed, b = Ar(e, D1), C = R.useContext(lu), F = Nd(o), B = pe(F, 1), A = B[0], w = A.getInternalHooks(Hr), M = w.useSubscribe, x = w.setInitialValues, P = w.setCallbacks, V = w.setValidateMessages, T = w.setPreserve, k = w.destroyForm;
  R.useImperativeHandle(r, function() {
    return A;
  }), R.useEffect(function() {
    return C.registerForm(n, A), function() {
      C.unregisterForm(n);
    };
  }, [C, A, n]), V(te(te({}, C.validateMessages), d)), P({
    onValuesChange: m,
    onFieldsChange: function(Q) {
      if (C.triggerFormChange(n, Q), f) {
        for (var ie = arguments.length, O = new Array(ie > 1 ? ie - 1 : 0), _ = 1; _ < ie; _++)
          O[_ - 1] = arguments[_];
        f.apply(void 0, [Q].concat(O));
      }
    },
    onFinish: function(Q) {
      C.triggerFormFinish(n, Q), g && g(Q);
    },
    onFinishFailed: p
  }), T(u);
  var N = R.useRef(null);
  x(a, !N.current), N.current || (N.current = !0), R.useEffect(
    function() {
      return k;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var j, $ = typeof s == "function";
  if ($) {
    var S = A.getFieldsValue(!0);
    j = s(S, A);
  } else
    j = s;
  M(!$);
  var L = R.useRef();
  R.useEffect(function() {
    c1(L.current || [], i || []) || A.setFields(i || []), L.current = i;
  }, [i, A]);
  var q = R.useMemo(function() {
    return te(te({}, A), {}, {
      validateTrigger: D
    });
  }, [A, D]), U = /* @__PURE__ */ R.createElement(si.Provider, {
    value: null
  }, /* @__PURE__ */ R.createElement(Rn.Provider, {
    value: q
  }, j));
  return c === !1 ? U : /* @__PURE__ */ R.createElement(c, Jr({}, b, {
    onSubmit: function(Q) {
      Q.preventDefault(), Q.stopPropagation(), A.submit();
    },
    onReset: function(Q) {
      var ie;
      Q.preventDefault(), A.resetFields(), (ie = b.onReset) === null || ie === void 0 || ie.call(b, Q);
    }
  }), U);
};
function uc(t) {
  try {
    return JSON.stringify(t);
  } catch {
    return Math.random();
  }
}
var C1 = process.env.NODE_ENV !== "production" ? function(t) {
  var e = t.join("__RC_FIELD_FORM_SPLIT__"), r = $e(e);
  Ge(r.current === e, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function y1() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var n = e[0], a = e[1], i = a === void 0 ? {} : a, o = Sy(i) ? {
    form: i
  } : i, u = o.form, s = lr(), l = pe(s, 2), c = l[0], d = l[1], v = bn(function() {
    return uc(c);
  }, [c]), D = $e(v);
  D.current = v;
  var m = Vt(Rn), f = u || m, g = f && f._init;
  process.env.NODE_ENV !== "production" && Ge(e.length === 2 ? u ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var p = Ke(n), b = $e(p);
  return b.current = p, C1(p), ht(
    function() {
      if (g) {
        var C = f.getFieldsValue, F = f.getInternalHooks, B = F(Hr), A = B.registerWatch, w = function(V, T) {
          var k = o.preserve ? T : V;
          return typeof n == "function" ? n(k) : Yt(k, b.current);
        }, M = A(function(P, V) {
          var T = w(P, V), k = uc(T);
          D.current !== k && (D.current = k, d(T));
        }), x = w(C(), C(!0));
        return c !== x && d(x), M;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), c;
}
var E1 = /* @__PURE__ */ R.forwardRef(b1), ga = E1;
ga.FormProvider = m1;
ga.Field = jd;
ga.List = v1;
ga.useForm = Nd;
ga.useWatch = y1;
const $d = /* @__PURE__ */ R.createContext({});
process.env.NODE_ENV !== "production" && ($d.displayName = "FormItemInputContext");
var w1 = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], F1 = /* @__PURE__ */ cc(function(t, e) {
  var r, n = t.prefixCls, a = n === void 0 ? "rc-checkbox" : n, i = t.className, o = t.style, u = t.checked, s = t.disabled, l = t.defaultChecked, c = l === void 0 ? !1 : l, d = t.type, v = d === void 0 ? "checkbox" : d, D = t.title, m = t.onChange, f = Ar(t, w1), g = $e(null), p = sC(c, {
    value: u
  }), b = pe(p, 2), C = b[0], F = b[1];
  qd(e, function() {
    return {
      focus: function() {
        var M;
        (M = g.current) === null || M === void 0 || M.focus();
      },
      blur: function() {
        var M;
        (M = g.current) === null || M === void 0 || M.blur();
      },
      input: g.current
    };
  });
  var B = Sr(a, i, (r = {}, W(r, "".concat(a, "-checked"), C), W(r, "".concat(a, "-disabled"), s), r)), A = function(M) {
    s || ("checked" in t || F(M.target.checked), m == null || m({
      target: te(te({}, t), {}, {
        type: v,
        checked: M.target.checked
      }),
      stopPropagation: function() {
        M.stopPropagation();
      },
      preventDefault: function() {
        M.preventDefault();
      },
      nativeEvent: M.nativeEvent
    }));
  };
  return /* @__PURE__ */ R.createElement("span", {
    className: B,
    title: D,
    style: o
  }, /* @__PURE__ */ R.createElement("input", Jr({}, f, {
    className: "".concat(a, "-input"),
    ref: g,
    onChange: A,
    disabled: s,
    checked: !!C,
    type: v
  })), /* @__PURE__ */ R.createElement("span", {
    className: "".concat(a, "-inner")
  }));
});
const A1 = (t) => {
  const {
    checkboxCls: e
  } = t, r = `${e}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${e}-group`]: Object.assign(Object.assign({}, eo(t)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: t.marginXS,
        // Group > Grid
        [`> ${t.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [r]: Object.assign(Object.assign({}, eo(t)), {
        display: "inline-flex",
        alignItems: "baseline",
        cursor: "pointer",
        // Fix checkbox & radio in flex align #30260
        "&:after": {
          display: "inline-block",
          width: 0,
          overflow: "hidden",
          content: "'\\a0'"
        },
        // Checkbox near checkbox
        [`& + ${r}`]: {
          marginInlineStart: 0
        },
        [`&${r}-in-form-item`]: {
          'input[type="checkbox"]': {
            width: 14,
            // FIXME: magic
            height: 14
            // FIXME: magic
          }
        }
      }),
      // Wrapper > Checkbox
      [e]: Object.assign(Object.assign({}, eo(t)), {
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        borderRadius: t.borderRadiusSM,
        // To make alignment right when `controlHeight` is changed
        // Ref: https://github.com/ant-design/ant-design/issues/41564
        alignSelf: "center",
        // Wrapper > Checkbox > input
        [`${e}-input`]: {
          position: "absolute",
          // Since baseline align will get additional space offset,
          // we need to move input to top to make it align with text.
          // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${e}-inner`]: Object.assign({}, dC(t))
        },
        // Wrapper > Checkbox > inner
        [`${e}-inner`]: {
          boxSizing: "border-box",
          display: "block",
          width: t.checkboxSize,
          height: t.checkboxSize,
          direction: "ltr",
          backgroundColor: t.colorBgContainer,
          border: `${Zn(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,
          borderRadius: t.borderRadiusSM,
          borderCollapse: "separate",
          transition: `all ${t.motionDurationSlow}`,
          "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "25%",
            display: "table",
            width: t.calc(t.checkboxSize).div(14).mul(5).equal(),
            height: t.calc(t.checkboxSize).div(14).mul(8).equal(),
            border: `${Zn(t.lineWidthBold)} solid ${t.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${t.motionDurationFast} ${t.motionEaseInBack}, opacity ${t.motionDurationFast}`
          }
        },
        // Wrapper > Checkbox + Text
        "& + span": {
          paddingInlineStart: t.paddingXS,
          paddingInlineEnd: t.paddingXS
        }
      })
    },
    // ===================== Hover =====================
    {
      // Wrapper & Wrapper > Checkbox
      [`
        ${r}:not(${r}-disabled),
        ${e}:not(${e}-disabled)
      `]: {
        [`&:hover ${e}-inner`]: {
          borderColor: t.colorPrimary
        }
      },
      [`${r}:not(${r}-disabled)`]: {
        [`&:hover ${e}-checked:not(${e}-disabled) ${e}-inner`]: {
          backgroundColor: t.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${e}-checked:not(${e}-disabled):after`]: {
          borderColor: t.colorPrimaryHover
        }
      }
    },
    // ==================== Checked ====================
    {
      // Wrapper > Checkbox
      [`${e}-checked`]: {
        [`${e}-inner`]: {
          backgroundColor: t.colorPrimary,
          borderColor: t.colorPrimary,
          "&:after": {
            opacity: 1,
            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
            transition: `all ${t.motionDurationMid} ${t.motionEaseOutBack} ${t.motionDurationFast}`
          }
        }
      },
      [`
        ${r}-checked:not(${r}-disabled),
        ${e}-checked:not(${e}-disabled)
      `]: {
        [`&:hover ${e}-inner`]: {
          backgroundColor: t.colorPrimaryHover,
          borderColor: "transparent"
        }
      }
    },
    // ================= Indeterminate =================
    {
      [e]: {
        "&-indeterminate": {
          // Wrapper > Checkbox > inner
          [`${e}-inner`]: {
            backgroundColor: t.colorBgContainer,
            borderColor: t.colorBorder,
            "&:after": {
              top: "50%",
              insetInlineStart: "50%",
              width: t.calc(t.fontSizeLG).div(2).equal(),
              height: t.calc(t.fontSizeLG).div(2).equal(),
              backgroundColor: t.colorPrimary,
              border: 0,
              transform: "translate(-50%, -50%) scale(1)",
              opacity: 1,
              content: '""'
            }
          }
        }
      }
    },
    // ==================== Disable ====================
    {
      // Wrapper
      [`${r}-disabled`]: {
        cursor: "not-allowed"
      },
      // Wrapper > Checkbox
      [`${e}-disabled`]: {
        // Wrapper > Checkbox > input
        [`&, ${e}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
          pointerEvents: "none"
        },
        // Wrapper > Checkbox > inner
        [`${e}-inner`]: {
          background: t.colorBgContainerDisabled,
          borderColor: t.colorBorder,
          "&:after": {
            borderColor: t.colorTextDisabled
          }
        },
        "&:after": {
          display: "none"
        },
        "& + span": {
          color: t.colorTextDisabled
        },
        [`&${e}-indeterminate ${e}-inner::after`]: {
          background: t.colorTextDisabled
        }
      }
    }
  ];
};
function B1(t, e) {
  const r = Wu(e, {
    checkboxCls: `.${t}`,
    checkboxSize: e.controlInteractiveSize
  });
  return [A1(r)];
}
const Id = FC("Checkbox", (t, e) => {
  let {
    prefixCls: r
  } = e;
  return [B1(r, t)];
}), O1 = /* @__PURE__ */ oe.createContext(null), Ld = O1;
var S1 = function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
};
const x1 = (t, e) => {
  var r;
  const {
    prefixCls: n,
    className: a,
    rootClassName: i,
    children: o,
    indeterminate: u = !1,
    style: s,
    onMouseEnter: l,
    onMouseLeave: c,
    skipGroup: d = !1,
    disabled: v
  } = t, D = S1(t, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]), {
    getPrefixCls: m,
    direction: f,
    checkbox: g
  } = R.useContext(kr), p = R.useContext(Ld), {
    isFormItemInput: b
  } = R.useContext($d), C = R.useContext(ad), F = (r = (p == null ? void 0 : p.disabled) || v) !== null && r !== void 0 ? r : C, B = R.useRef(D.value);
  if (process.env.NODE_ENV !== "production") {
    const j = yi("Checkbox");
    process.env.NODE_ENV !== "production" && j("checked" in D || !!p || !("value" in D), "usage", "`value` is not a valid prop, do you mean `checked`?");
  }
  R.useEffect(() => {
    p == null || p.registerValue(D.value);
  }, []), R.useEffect(() => {
    if (!d)
      return D.value !== B.current && (p == null || p.cancelValue(B.current), p == null || p.registerValue(D.value), B.current = D.value), () => p == null ? void 0 : p.cancelValue(D.value);
  }, [D.value]);
  const A = m("checkbox", n), w = Sd(A), [M, x, P] = Id(A, w), V = Object.assign({}, D);
  p && !d && (V.onChange = function() {
    D.onChange && D.onChange.apply(D, arguments), p.toggleOption && p.toggleOption({
      label: o,
      value: D.value
    });
  }, V.name = p.name, V.checked = p.value.includes(D.value));
  const T = Sr(`${A}-wrapper`, {
    [`${A}-rtl`]: f === "rtl",
    [`${A}-wrapper-checked`]: V.checked,
    [`${A}-wrapper-disabled`]: F,
    [`${A}-wrapper-in-form-item`]: b
  }, g == null ? void 0 : g.className, a, i, P, w, x), k = Sr({
    [`${A}-indeterminate`]: u
  }, Hu, x), N = u ? "mixed" : void 0;
  return M(/* @__PURE__ */ R.createElement(Oy, {
    component: "Checkbox",
    disabled: F
  }, /* @__PURE__ */ R.createElement("label", {
    className: T,
    style: Object.assign(Object.assign({}, g == null ? void 0 : g.style), s),
    onMouseEnter: l,
    onMouseLeave: c
  }, /* @__PURE__ */ R.createElement(F1, Object.assign({
    "aria-checked": N
  }, V, {
    prefixCls: A,
    className: k,
    disabled: F,
    ref: e
  })), o !== void 0 && /* @__PURE__ */ R.createElement("span", null, o))));
}, Vd = /* @__PURE__ */ R.forwardRef(x1);
process.env.NODE_ENV !== "production" && (Vd.displayName = "Checkbox");
const _d = Vd;
var P1 = function(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
      e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
};
const T1 = /* @__PURE__ */ R.forwardRef((t, e) => {
  const {
    defaultValue: r,
    children: n,
    options: a = [],
    prefixCls: i,
    className: o,
    rootClassName: u,
    style: s,
    onChange: l
  } = t, c = P1(t, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]), {
    getPrefixCls: d,
    direction: v
  } = R.useContext(kr), [D, m] = R.useState(c.value || r || []), [f, g] = R.useState([]);
  R.useEffect(() => {
    "value" in c && m(c.value || []);
  }, [c.value]);
  const p = R.useMemo(() => a.map((j) => typeof j == "string" || typeof j == "number" ? {
    label: j,
    value: j
  } : j), [a]), b = (j) => {
    g(($) => $.filter((S) => S !== j));
  }, C = (j) => {
    g(($) => [].concat(de($), [j]));
  }, F = (j) => {
    const $ = D.indexOf(j.value), S = de(D);
    $ === -1 ? S.push(j.value) : S.splice($, 1), "value" in c || m(S), l == null || l(S.filter((L) => f.includes(L)).sort((L, q) => {
      const U = p.findIndex((Q) => Q.value === L), Y = p.findIndex((Q) => Q.value === q);
      return U - Y;
    }));
  }, B = d("checkbox", i), A = `${B}-group`, w = Sd(B), [M, x, P] = Id(B, w), V = gb(c, ["value", "disabled"]), T = a.length ? p.map((j) => /* @__PURE__ */ R.createElement(_d, {
    prefixCls: B,
    key: j.value.toString(),
    disabled: "disabled" in j ? j.disabled : c.disabled,
    value: j.value,
    checked: D.includes(j.value),
    onChange: j.onChange,
    className: `${A}-item`,
    style: j.style,
    title: j.title,
    id: j.id,
    required: j.required
  }, j.label)) : n, k = {
    toggleOption: F,
    value: D,
    disabled: c.disabled,
    name: c.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: C,
    cancelValue: b
  }, N = Sr(A, {
    [`${A}-rtl`]: v === "rtl"
  }, o, u, P, w, x);
  return M(/* @__PURE__ */ R.createElement("div", Object.assign({
    className: N,
    style: s
  }, V, {
    ref: e
  }), /* @__PURE__ */ R.createElement(Ld.Provider, {
    value: k
  }, T)));
}), R1 = T1, Ai = _d;
Ai.Group = R1;
Ai.__ANT_CHECKBOX = !0;
process.env.NODE_ENV !== "production" && (Ai.displayName = "Checkbox");
const k1 = Ai, j1 = (t) => {
  const e = t != null && t.algorithm ? Jn(t.algorithm) : Jn(da), r = Object.assign(Object.assign({}, Tn), t == null ? void 0 : t.token);
  return Oc(r, {
    override: t == null ? void 0 : t.token
  }, e, _u);
}, M1 = j1;
function N1(t) {
  const {
    sizeUnit: e,
    sizeStep: r
  } = t, n = r - 2;
  return {
    sizeXXL: e * (n + 10),
    sizeXL: e * (n + 6),
    sizeLG: e * (n + 2),
    sizeMD: e * (n + 2),
    sizeMS: e * (n + 1),
    size: e * n,
    sizeSM: e * n,
    sizeXS: e * (n - 1),
    sizeXXS: e * (n - 1)
  };
}
const $1 = (t, e) => {
  const r = e ?? da(t), n = r.fontSizeSM, a = r.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), N1(e ?? t)), ed(n)), {
    // controlHeight
    controlHeight: a
  }), Zf(Object.assign(Object.assign({}, r), {
    controlHeight: a
  })));
}, I1 = $1, ir = (t, e) => new lt(t).setAlpha(e).toRgbString(), fn = (t, e) => new lt(t).lighten(e).toHexString(), L1 = (t) => {
  const e = Tr(t, {
    theme: "dark"
  });
  return {
    1: e[0],
    2: e[1],
    3: e[2],
    4: e[3],
    5: e[6],
    6: e[5],
    7: e[4],
    8: e[6],
    9: e[5],
    10: e[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
}, V1 = (t, e) => {
  const r = t || "#000", n = e || "#fff";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: ir(n, 0.85),
    colorTextSecondary: ir(n, 0.65),
    colorTextTertiary: ir(n, 0.45),
    colorTextQuaternary: ir(n, 0.25),
    colorFill: ir(n, 0.18),
    colorFillSecondary: ir(n, 0.12),
    colorFillTertiary: ir(n, 0.08),
    colorFillQuaternary: ir(n, 0.04),
    colorBgElevated: fn(r, 12),
    colorBgContainer: fn(r, 8),
    colorBgLayout: fn(r, 0),
    colorBgSpotlight: fn(r, 26),
    colorBgBlur: ir(n, 0.04),
    colorBorder: fn(r, 26),
    colorBorderSecondary: fn(r, 19)
  };
}, _1 = (t, e) => {
  const r = Object.keys(Lu).map((a) => {
    const i = Tr(t[a], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((o, u, s) => (o[`${a}-${s + 1}`] = i[s], o[`${a}${s + 1}`] = i[s], o), {});
  }).reduce((a, i) => (a = Object.assign(Object.assign({}, a), i), a), {}), n = e ?? da(t);
  return Object.assign(Object.assign(Object.assign({}, n), r), Qf(t, {
    generateColorPalettes: L1,
    generateNeutralColorPalettes: V1
  }));
}, W1 = _1;
function z1() {
  const [t, e, r] = Rr();
  return {
    theme: t,
    token: e,
    hashId: r
  };
}
const H1 = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig: oi,
  /** Default seedToken */
  defaultSeed: oi.token,
  useToken: z1,
  defaultAlgorithm: da,
  darkAlgorithm: W1,
  compactAlgorithm: I1,
  getDesignToken: M1
}, q1 = (t) => {
  const { attributes: e, children: r, element: n } = t, { disabled: a, checked: i } = n, o = vr(), u = kf(), s = u || a;
  return /* @__PURE__ */ Qe.jsxs("div", { className: "wu_check_list", ...e, children: [
    /* @__PURE__ */ Qe.jsx("span", { contentEditable: !1, className: "wu_check_list_box", children: /* @__PURE__ */ Qe.jsx(
      k1,
      {
        disabled: s,
        checked: i,
        onChange: (l) => {
          const c = H.findPath(o, n), d = {
            checked: l.target.checked
          };
          K.setNodes(o, d, { at: c });
        }
      }
    ) }),
    /* @__PURE__ */ Qe.jsx(
      "span",
      {
        className: "wu_check_list_label",
        suppressContentEditableWarning: !0,
        contentEditable: !u,
        children: r
      }
    )
  ] });
}, U1 = (t) => {
  const { attributes: e, children: r } = t;
  return /* @__PURE__ */ Qe.jsx("span", { ...e, children: r });
}, K1 = (t) => {
  const { attributes: e, children: r } = t;
  return /* @__PURE__ */ Qe.jsx("p", { ...e, children: r });
}, G1 = (t) => {
  const { attributes: e, children: r } = t;
  return /* @__PURE__ */ Qe.jsx("pre", { ...e, children: /* @__PURE__ */ Qe.jsx("code", { children: r }) });
}, Y1 = (t) => {
  const { attributes: e, leaf: r, children: n } = t, a = Sr({
    "wu-font-bold": r.bold,
    "bg-red": !0
  });
  return /* @__PURE__ */ Qe.jsx("span", { className: a, ...e, children: n });
}, X1 = () => {
  const t = Re((n) => {
    const { children: a, ...i } = n, o = n.element.type;
    return yn(o).with(Lt.Bold, () => /* @__PURE__ */ Qe.jsx(G1, { ...i, children: a })).with(Lt.Code, () => /* @__PURE__ */ Qe.jsx(U1, { ...i, children: a })).with(Lt.CheckList, () => /* @__PURE__ */ Qe.jsx(q1, { ...i, children: a })).otherwise(() => /* @__PURE__ */ Qe.jsx(K1, { ...i, children: a }));
  }, []), e = Re((n) => {
    const { children: a, ...i } = n;
    return /* @__PURE__ */ Qe.jsx(Y1, { ...i, children: a });
  }, []), r = Re((n) => {
    const { children: a, attributes: i } = n;
    return /* @__PURE__ */ Qe.jsx("span", { ...i, style: { fontStyle: "italic", color: "gray", position: "absolute" }, children: a });
  }, []);
  return { renderElement: t, renderLeaf: e, renderPlaceholder: r };
}, J1 = (t) => [(r) => {
  const n = r.ctrlKey || r.metaKey;
  yn(n).with(!0, () => {
    yn(r).with({ shiftKey: !0 }, (a) => {
      yn(a).with({ key: "&" }, () => {
        console.info("切换CheckList"), r.preventDefault(), ii.toggleCheckListNode(t);
      });
    }).with({ key: "b" }, () => {
      console.log(r), console.info("切换加粗"), r.preventDefault(), ii.toggleBoldMark(t);
    });
  });
}], { darkAlgorithm: Z1, compactAlgorithm: sc } = H1, tE = (t) => {
  const { theme: e, placeholder: r, initialValue: n = rb() } = t, [a, { showPlaceholder: i, handlePlaceholder: o }] = sb(), { renderElement: u, renderLeaf: s, renderPlaceholder: l } = X1(), [c] = J1(a);
  return /* @__PURE__ */ Qe.jsx(fv, { hashPriority: "high", children: /* @__PURE__ */ Qe.jsx(
    ay,
    {
      theme: {
        algorithm: e === "dark" ? [Z1, sc] : [sc]
      },
      children: /* @__PURE__ */ Qe.jsx(
        YD,
        {
          editor: a,
          onValueChange: (d) => {
            o(d);
          },
          initialValue: n,
          children: /* @__PURE__ */ Qe.jsx(
            VD,
            {
              className: "wu_editable",
              renderElement: u,
              renderLeaf: s,
              renderPlaceholder: l,
              spellCheck: !0,
              placeholder: i ? r : void 0,
              onKeyDown: c
            }
          )
        }
      )
    }
  ) });
};
export {
  tE as WuEditor
};
