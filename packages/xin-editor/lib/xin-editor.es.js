import J, { useCallback as he, useState as Ar, useRef as Ke, useReducer as Bi, useMemo as Ft, useEffect as cr, createContext as kr, useLayoutEffect as Ei, useContext as $t, Component as Ai, memo as bi, forwardRef as Fi } from "react";
import wi from "react-dom";
var gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Lt(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var vn = { exports: {} }, Jr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function yi() {
  if (Jn)
    return Jr;
  Jn = 1;
  var r = J, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, f, c) {
    var v, D = {}, g = null, C = null;
    c !== void 0 && (g = "" + c), f.key !== void 0 && (g = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (v in f)
      n.call(f, v) && !u.hasOwnProperty(v) && (D[v] = f[v]);
    if (l && l.defaultProps)
      for (v in f = l.defaultProps, f)
        D[v] === void 0 && (D[v] = f[v]);
    return { $$typeof: e, type: l, key: g, ref: C, props: D, _owner: a.current };
  }
  return Jr.Fragment = t, Jr.jsx = i, Jr.jsxs = i, Jr;
}
var Zr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zn;
function Oi() {
  return Zn || (Zn = 1, process.env.NODE_ENV !== "production" && function() {
    var r = J, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), m = Symbol.iterator, o = "@@iterator";
    function B(d) {
      if (d === null || typeof d != "object")
        return null;
      var x = m && d[m] || d[o];
      return typeof x == "function" ? x : null;
    }
    var A = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(d) {
      {
        for (var x = arguments.length, V = new Array(x > 1 ? x - 1 : 0), X = 1; X < x; X++)
          V[X - 1] = arguments[X];
        P("error", d, V);
      }
    }
    function P(d, x, V) {
      {
        var X = A.ReactDebugCurrentFrame, le = X.getStackAddendum();
        le !== "" && (x += "%s", V = V.concat([le]));
        var De = V.map(function(se) {
          return String(se);
        });
        De.unshift("Warning: " + x), Function.prototype.apply.call(console[d], console, De);
      }
    }
    var R = !1, k = !1, L = !1, W = !1, K = !1, M;
    M = Symbol.for("react.module.reference");
    function z(d) {
      return !!(typeof d == "string" || typeof d == "function" || d === n || d === u || K || d === a || d === c || d === v || W || d === C || R || k || L || typeof d == "object" && d !== null && (d.$$typeof === g || d.$$typeof === D || d.$$typeof === i || d.$$typeof === l || d.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      d.$$typeof === M || d.getModuleId !== void 0));
    }
    function G(d, x, V) {
      var X = d.displayName;
      if (X)
        return X;
      var le = x.displayName || x.name || "";
      return le !== "" ? V + "(" + le + ")" : V;
    }
    function S(d) {
      return d.displayName || "Context";
    }
    function $(d) {
      if (d == null)
        return null;
      if (typeof d.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof d == "function")
        return d.displayName || d.name || null;
      if (typeof d == "string")
        return d;
      switch (d) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case u:
          return "Profiler";
        case a:
          return "StrictMode";
        case c:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case l:
            var x = d;
            return S(x) + ".Consumer";
          case i:
            var V = d;
            return S(V._context) + ".Provider";
          case f:
            return G(d, d.render, "ForwardRef");
          case D:
            var X = d.displayName || null;
            return X !== null ? X : $(d.type) || "Memo";
          case g: {
            var le = d, De = le._payload, se = le._init;
            try {
              return $(se(De));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, N = 0, re, U, fe, _, ne, me, ve;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function p() {
      {
        if (N === 0) {
          re = console.log, U = console.info, fe = console.warn, _ = console.error, ne = console.group, me = console.groupCollapsed, ve = console.groupEnd;
          var d = {
            configurable: !0,
            enumerable: !0,
            value: we,
            writable: !0
          };
          Object.defineProperties(console, {
            info: d,
            log: d,
            warn: d,
            error: d,
            group: d,
            groupCollapsed: d,
            groupEnd: d
          });
        }
        N++;
      }
    }
    function y() {
      {
        if (N--, N === 0) {
          var d = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, d, {
              value: re
            }),
            info: T({}, d, {
              value: U
            }),
            warn: T({}, d, {
              value: fe
            }),
            error: T({}, d, {
              value: _
            }),
            group: T({}, d, {
              value: ne
            }),
            groupCollapsed: T({}, d, {
              value: me
            }),
            groupEnd: T({}, d, {
              value: ve
            })
          });
        }
        N < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var w = A.ReactCurrentDispatcher, I;
    function Q(d, x, V) {
      {
        if (I === void 0)
          try {
            throw Error();
          } catch (le) {
            var X = le.stack.trim().match(/\n( *(at )?)/);
            I = X && X[1] || "";
          }
        return `
` + I + d;
      }
    }
    var Y = !1, ee;
    {
      var oe = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new oe();
    }
    function ie(d, x) {
      if (!d || Y)
        return "";
      {
        var V = ee.get(d);
        if (V !== void 0)
          return V;
      }
      var X;
      Y = !0;
      var le = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var De;
      De = w.current, w.current = null, p();
      try {
        if (x) {
          var se = function() {
            throw Error();
          };
          if (Object.defineProperty(se.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(se, []);
            } catch (or) {
              X = or;
            }
            Reflect.construct(d, [], se);
          } else {
            try {
              se.call();
            } catch (or) {
              X = or;
            }
            d.call(se.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (or) {
            X = or;
          }
          d();
        }
      } catch (or) {
        if (or && X && typeof or.stack == "string") {
          for (var ue = or.stack.split(`
`), Me = X.stack.split(`
`), Oe = ue.length - 1, Pe = Me.length - 1; Oe >= 1 && Pe >= 0 && ue[Oe] !== Me[Pe]; )
            Pe--;
          for (; Oe >= 1 && Pe >= 0; Oe--, Pe--)
            if (ue[Oe] !== Me[Pe]) {
              if (Oe !== 1 || Pe !== 1)
                do
                  if (Oe--, Pe--, Pe < 0 || ue[Oe] !== Me[Pe]) {
                    var Ge = `
` + ue[Oe].replace(" at new ", " at ");
                    return d.displayName && Ge.includes("<anonymous>") && (Ge = Ge.replace("<anonymous>", d.displayName)), typeof d == "function" && ee.set(d, Ge), Ge;
                  }
                while (Oe >= 1 && Pe >= 0);
              break;
            }
        }
      } finally {
        Y = !1, w.current = De, y(), Error.prepareStackTrace = le;
      }
      var Lr = d ? d.displayName || d.name : "", Xn = Lr ? Q(Lr) : "";
      return typeof d == "function" && ee.set(d, Xn), Xn;
    }
    function ge(d, x, V) {
      return ie(d, !1);
    }
    function ae(d) {
      var x = d.prototype;
      return !!(x && x.isReactComponent);
    }
    function Ee(d, x, V) {
      if (d == null)
        return "";
      if (typeof d == "function")
        return ie(d, ae(d));
      if (typeof d == "string")
        return Q(d);
      switch (d) {
        case c:
          return Q("Suspense");
        case v:
          return Q("SuspenseList");
      }
      if (typeof d == "object")
        switch (d.$$typeof) {
          case f:
            return ge(d.render);
          case D:
            return Ee(d.type, x, V);
          case g: {
            var X = d, le = X._payload, De = X._init;
            try {
              return Ee(De(le), x, V);
            } catch {
            }
          }
        }
      return "";
    }
    var Ae = Object.prototype.hasOwnProperty, pe = {}, Le = A.ReactDebugCurrentFrame;
    function Ne(d) {
      if (d) {
        var x = d._owner, V = Ee(d.type, d._source, x ? x.type : null);
        Le.setExtraStackFrame(V);
      } else
        Le.setExtraStackFrame(null);
    }
    function je(d, x, V, X, le) {
      {
        var De = Function.call.bind(Ae);
        for (var se in d)
          if (De(d, se)) {
            var ue = void 0;
            try {
              if (typeof d[se] != "function") {
                var Me = Error((X || "React class") + ": " + V + " type `" + se + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[se] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Me.name = "Invariant Violation", Me;
              }
              ue = d[se](x, se, X, V, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Oe) {
              ue = Oe;
            }
            ue && !(ue instanceof Error) && (Ne(le), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", V, se, typeof ue), Ne(null)), ue instanceof Error && !(ue.message in pe) && (pe[ue.message] = !0, Ne(le), b("Failed %s type: %s", V, ue.message), Ne(null));
          }
      }
    }
    var He = Array.isArray;
    function de(d) {
      return He(d);
    }
    function Se(d) {
      {
        var x = typeof Symbol == "function" && Symbol.toStringTag, V = x && d[Symbol.toStringTag] || d.constructor.name || "Object";
        return V;
      }
    }
    function xe(d) {
      try {
        return ye(d), !1;
      } catch {
        return !0;
      }
    }
    function ye(d) {
      return "" + d;
    }
    function We(d) {
      if (xe(d))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Se(d)), ye(d);
    }
    var rr = A.ReactCurrentOwner, qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, yr, Ze;
    Ze = {};
    function Ut(d) {
      if (Ae.call(d, "ref")) {
        var x = Object.getOwnPropertyDescriptor(d, "ref").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.ref !== void 0;
    }
    function Yt(d) {
      if (Ae.call(d, "key")) {
        var x = Object.getOwnPropertyDescriptor(d, "key").get;
        if (x && x.isReactWarning)
          return !1;
      }
      return d.key !== void 0;
    }
    function _r(d, x) {
      if (typeof d.ref == "string" && rr.current && x && rr.current.stateNode !== x) {
        var V = $(rr.current.type);
        Ze[V] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(rr.current.type), d.ref), Ze[V] = !0);
      }
    }
    function Gt(d, x) {
      {
        var V = function() {
          tr || (tr = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        V.isReactWarning = !0, Object.defineProperty(d, "key", {
          get: V,
          configurable: !0
        });
      }
    }
    function _t(d, x) {
      {
        var V = function() {
          yr || (yr = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", x));
        };
        V.isReactWarning = !0, Object.defineProperty(d, "ref", {
          get: V,
          configurable: !0
        });
      }
    }
    var Xt = function(d, x, V, X, le, De, se) {
      var ue = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: d,
        key: x,
        ref: V,
        props: se,
        // Record the component responsible for creating this element.
        _owner: De
      };
      return ue._store = {}, Object.defineProperty(ue._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ue, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(ue, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: le
      }), Object.freeze && (Object.freeze(ue.props), Object.freeze(ue)), ue;
    };
    function Jt(d, x, V, X, le) {
      {
        var De, se = {}, ue = null, Me = null;
        V !== void 0 && (We(V), ue = "" + V), Yt(x) && (We(x.key), ue = "" + x.key), Ut(x) && (Me = x.ref, _r(x, le));
        for (De in x)
          Ae.call(x, De) && !qe.hasOwnProperty(De) && (se[De] = x[De]);
        if (d && d.defaultProps) {
          var Oe = d.defaultProps;
          for (De in Oe)
            se[De] === void 0 && (se[De] = Oe[De]);
        }
        if (ue || Me) {
          var Pe = typeof d == "function" ? d.displayName || d.name || "Unknown" : d;
          ue && Gt(se, Pe), Me && _t(se, Pe);
        }
        return Xt(d, ue, Me, le, X, rr.current, se);
      }
    }
    var Xr = A.ReactCurrentOwner, Dt = A.ReactDebugCurrentFrame;
    function $r(d) {
      if (d) {
        var x = d._owner, V = Ee(d.type, d._source, x ? x.type : null);
        Dt.setExtraStackFrame(V);
      } else
        Dt.setExtraStackFrame(null);
    }
    var Zt;
    Zt = !1;
    function Qt(d) {
      return typeof d == "object" && d !== null && d.$$typeof === e;
    }
    function Kn() {
      {
        if (Xr.current) {
          var d = $(Xr.current.type);
          if (d)
            return `

Check the render method of \`` + d + "`.";
        }
        return "";
      }
    }
    function vi(d) {
      {
        if (d !== void 0) {
          var x = d.fileName.replace(/^.*[\\\/]/, ""), V = d.lineNumber;
          return `

Check your code at ` + x + ":" + V + ".";
        }
        return "";
      }
    }
    var Un = {};
    function di(d) {
      {
        var x = Kn();
        if (!x) {
          var V = typeof d == "string" ? d : d.displayName || d.name;
          V && (x = `

Check the top-level render call using <` + V + ">.");
        }
        return x;
      }
    }
    function Yn(d, x) {
      {
        if (!d._store || d._store.validated || d.key != null)
          return;
        d._store.validated = !0;
        var V = di(x);
        if (Un[V])
          return;
        Un[V] = !0;
        var X = "";
        d && d._owner && d._owner !== Xr.current && (X = " It was passed a child from " + $(d._owner.type) + "."), $r(d), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', V, X), $r(null);
      }
    }
    function Gn(d, x) {
      {
        if (typeof d != "object")
          return;
        if (de(d))
          for (var V = 0; V < d.length; V++) {
            var X = d[V];
            Qt(X) && Yn(X, x);
          }
        else if (Qt(d))
          d._store && (d._store.validated = !0);
        else if (d) {
          var le = B(d);
          if (typeof le == "function" && le !== d.entries)
            for (var De = le.call(d), se; !(se = De.next()).done; )
              Qt(se.value) && Yn(se.value, x);
        }
      }
    }
    function hi(d) {
      {
        var x = d.type;
        if (x == null || typeof x == "string")
          return;
        var V;
        if (typeof x == "function")
          V = x.propTypes;
        else if (typeof x == "object" && (x.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        x.$$typeof === D))
          V = x.propTypes;
        else
          return;
        if (V) {
          var X = $(x);
          je(V, d.props, "prop", X, d);
        } else if (x.PropTypes !== void 0 && !Zt) {
          Zt = !0;
          var le = $(x);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", le || "Unknown");
        }
        typeof x.getDefaultProps == "function" && !x.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Di(d) {
      {
        for (var x = Object.keys(d.props), V = 0; V < x.length; V++) {
          var X = x[V];
          if (X !== "children" && X !== "key") {
            $r(d), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), $r(null);
            break;
          }
        }
        d.ref !== null && ($r(d), b("Invalid attribute `ref` supplied to `React.Fragment`."), $r(null));
      }
    }
    function _n(d, x, V, X, le, De) {
      {
        var se = z(d);
        if (!se) {
          var ue = "";
          (d === void 0 || typeof d == "object" && d !== null && Object.keys(d).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Me = vi(le);
          Me ? ue += Me : ue += Kn();
          var Oe;
          d === null ? Oe = "null" : de(d) ? Oe = "array" : d !== void 0 && d.$$typeof === e ? (Oe = "<" + ($(d.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Oe = typeof d, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Oe, ue);
        }
        var Pe = Jt(d, x, V, le, De);
        if (Pe == null)
          return Pe;
        if (se) {
          var Ge = x.children;
          if (Ge !== void 0)
            if (X)
              if (de(Ge)) {
                for (var Lr = 0; Lr < Ge.length; Lr++)
                  Gn(Ge[Lr], d);
                Object.freeze && Object.freeze(Ge);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Gn(Ge, d);
        }
        return d === n ? Di(Pe) : hi(Pe), Pe;
      }
    }
    function gi(d, x, V) {
      return _n(d, x, V, !0);
    }
    function mi(d, x, V) {
      return _n(d, x, V, !1);
    }
    var pi = mi, Ci = gi;
    Zr.Fragment = n, Zr.jsx = pi, Zr.jsxs = Ci;
  }()), Zr;
}
process.env.NODE_ENV === "production" ? vn.exports = yi() : vn.exports = Oi();
var Qe = vn.exports, xi = Ti, Cu = "֑-߿יִ-﷽ﹰ-ﻼ", Bu = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Pi = new RegExp("^[^" + Bu + "]*[" + Cu + "]"), Si = new RegExp("^[^" + Cu + "]*[" + Bu + "]");
function Ti(r) {
  return r = String(r || ""), Pi.test(r) ? "rtl" : Si.test(r) ? "ltr" : "neutral";
}
const Eu = /* @__PURE__ */ Lt(xi);
function Ri(r) {
  var e = typeof r;
  return r != null && (e == "object" || e == "function");
}
var Pn = Ri, ji = typeof gt == "object" && gt && gt.Object === Object && gt, Ni = ji, Mi = Ni, Ii = typeof self == "object" && self && self.Object === Object && self, ki = Mi || Ii || Function("return this")(), Au = ki, $i = Au, Li = function() {
  return $i.Date.now();
}, Wi = Li, zi = /\s/;
function Vi(r) {
  for (var e = r.length; e-- && zi.test(r.charAt(e)); )
    ;
  return e;
}
var Hi = Vi, qi = Hi, Ki = /^\s+/;
function Ui(r) {
  return r && r.slice(0, qi(r) + 1).replace(Ki, "");
}
var Yi = Ui, Gi = Au, _i = Gi.Symbol, bu = _i, Qn = bu, Fu = Object.prototype, Xi = Fu.hasOwnProperty, Ji = Fu.toString, Qr = Qn ? Qn.toStringTag : void 0;
function Zi(r) {
  var e = Xi.call(r, Qr), t = r[Qr];
  try {
    r[Qr] = void 0;
    var n = !0;
  } catch {
  }
  var a = Ji.call(r);
  return n && (e ? r[Qr] = t : delete r[Qr]), a;
}
var Qi = Zi, es = Object.prototype, rs = es.toString;
function ts(r) {
  return rs.call(r);
}
var ns = ts, ea = bu, as = Qi, us = ns, is = "[object Null]", ss = "[object Undefined]", ra = ea ? ea.toStringTag : void 0;
function os(r) {
  return r == null ? r === void 0 ? ss : is : ra && ra in Object(r) ? as(r) : us(r);
}
var ls = os;
function fs(r) {
  return r != null && typeof r == "object";
}
var cs = fs, vs = ls, ds = cs, hs = "[object Symbol]";
function Ds(r) {
  return typeof r == "symbol" || ds(r) && vs(r) == hs;
}
var gs = Ds, ms = Yi, ta = Pn, ps = gs, na = NaN, Cs = /^[-+]0x[0-9a-f]+$/i, Bs = /^0b[01]+$/i, Es = /^0o[0-7]+$/i, As = parseInt;
function bs(r) {
  if (typeof r == "number")
    return r;
  if (ps(r))
    return na;
  if (ta(r)) {
    var e = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = ta(e) ? e + "" : e;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = ms(r);
  var t = Bs.test(r);
  return t || Es.test(r) ? As(r.slice(2), t ? 2 : 8) : Cs.test(r) ? na : +r;
}
var Fs = bs, ws = Pn, en = Wi, aa = Fs, ys = "Expected a function", Os = Math.max, xs = Math.min;
function Ps(r, e, t) {
  var n, a, u, i, l, f, c = 0, v = !1, D = !1, g = !0;
  if (typeof r != "function")
    throw new TypeError(ys);
  e = aa(e) || 0, ws(t) && (v = !!t.leading, D = "maxWait" in t, u = D ? Os(aa(t.maxWait) || 0, e) : u, g = "trailing" in t ? !!t.trailing : g);
  function C(L) {
    var W = n, K = a;
    return n = a = void 0, c = L, i = r.apply(K, W), i;
  }
  function m(L) {
    return c = L, l = setTimeout(A, e), v ? C(L) : i;
  }
  function o(L) {
    var W = L - f, K = L - c, M = e - W;
    return D ? xs(M, u - K) : M;
  }
  function B(L) {
    var W = L - f, K = L - c;
    return f === void 0 || W >= e || W < 0 || D && K >= u;
  }
  function A() {
    var L = en();
    if (B(L))
      return b(L);
    l = setTimeout(A, o(L));
  }
  function b(L) {
    return l = void 0, g && n ? C(L) : (n = a = void 0, i);
  }
  function P() {
    l !== void 0 && clearTimeout(l), c = 0, n = f = a = l = void 0;
  }
  function R() {
    return l === void 0 ? i : b(en());
  }
  function k() {
    var L = en(), W = B(L);
    if (n = arguments, a = this, f = L, W) {
      if (l === void 0)
        return m(f);
      if (D)
        return clearTimeout(l), l = setTimeout(A, e), C(f);
    }
    return l === void 0 && (l = setTimeout(A, e)), i;
  }
  return k.cancel = P, k.flush = R, k;
}
var wu = Ps;
const Ss = /* @__PURE__ */ Lt(wu);
var Ts = wu, Rs = Pn, js = "Expected a function";
function Ns(r, e, t) {
  var n = !0, a = !0;
  if (typeof r != "function")
    throw new TypeError(js);
  return Rs(t) && (n = "leading" in t ? !!t.leading : n, a = "trailing" in t ? !!t.trailing : a), Ts(r, e, {
    leading: n,
    maxWait: e,
    trailing: a
  });
}
var Ms = Ns;
const Is = /* @__PURE__ */ Lt(Ms), ua = (r) => typeof r == "object" && r != null && r.nodeType === 1, ia = (r, e) => (!e || r !== "hidden") && r !== "visible" && r !== "clip", rn = (r, e) => {
  if (r.clientHeight < r.scrollHeight || r.clientWidth < r.scrollWidth) {
    const t = getComputedStyle(r, null);
    return ia(t.overflowY, e) || ia(t.overflowX, e) || ((n) => {
      const a = ((u) => {
        if (!u.ownerDocument || !u.ownerDocument.defaultView)
          return null;
        try {
          return u.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(n);
      return !!a && (a.clientHeight < n.scrollHeight || a.clientWidth < n.scrollWidth);
    })(r);
  }
  return !1;
}, mt = (r, e, t, n, a, u, i, l) => u < r && i > e || u > r && i < e ? 0 : u <= r && l <= t || i >= e && l >= t ? u - r - n : i > e && l < t || u < r && l > t ? i - e + a : 0, ks = (r) => {
  const e = r.parentElement;
  return e ?? (r.getRootNode().host || null);
}, sa = (r, e) => {
  var t, n, a, u;
  if (typeof document > "u")
    return [];
  const { scrollMode: i, block: l, inline: f, boundary: c, skipOverflowHiddenElements: v } = e, D = typeof c == "function" ? c : (re) => re !== c;
  if (!ua(r))
    throw new TypeError("Invalid target");
  const g = document.scrollingElement || document.documentElement, C = [];
  let m = r;
  for (; ua(m) && D(m); ) {
    if (m = ks(m), m === g) {
      C.push(m);
      break;
    }
    m != null && m === document.body && rn(m) && !rn(document.documentElement) || m != null && rn(m, v) && C.push(m);
  }
  const o = (n = (t = window.visualViewport) == null ? void 0 : t.width) != null ? n : innerWidth, B = (u = (a = window.visualViewport) == null ? void 0 : a.height) != null ? u : innerHeight, { scrollX: A, scrollY: b } = window, { height: P, width: R, top: k, right: L, bottom: W, left: K } = r.getBoundingClientRect(), { top: M, right: z, bottom: G, left: S } = ((re) => {
    const U = window.getComputedStyle(re);
    return { top: parseFloat(U.scrollMarginTop) || 0, right: parseFloat(U.scrollMarginRight) || 0, bottom: parseFloat(U.scrollMarginBottom) || 0, left: parseFloat(U.scrollMarginLeft) || 0 };
  })(r);
  let $ = l === "start" || l === "nearest" ? k - M : l === "end" ? W + G : k + P / 2 - M + G, T = f === "center" ? K + R / 2 - S + z : f === "end" ? L + z : K - S;
  const N = [];
  for (let re = 0; re < C.length; re++) {
    const U = C[re], { height: fe, width: _, top: ne, right: me, bottom: ve, left: we } = U.getBoundingClientRect();
    if (i === "if-needed" && k >= 0 && K >= 0 && W <= B && L <= o && k >= ne && W <= ve && K >= we && L <= me)
      return N;
    const p = getComputedStyle(U), y = parseInt(p.borderLeftWidth, 10), w = parseInt(p.borderTopWidth, 10), I = parseInt(p.borderRightWidth, 10), Q = parseInt(p.borderBottomWidth, 10);
    let Y = 0, ee = 0;
    const oe = "offsetWidth" in U ? U.offsetWidth - U.clientWidth - y - I : 0, ie = "offsetHeight" in U ? U.offsetHeight - U.clientHeight - w - Q : 0, ge = "offsetWidth" in U ? U.offsetWidth === 0 ? 0 : _ / U.offsetWidth : 0, ae = "offsetHeight" in U ? U.offsetHeight === 0 ? 0 : fe / U.offsetHeight : 0;
    if (g === U)
      Y = l === "start" ? $ : l === "end" ? $ - B : l === "nearest" ? mt(b, b + B, B, w, Q, b + $, b + $ + P, P) : $ - B / 2, ee = f === "start" ? T : f === "center" ? T - o / 2 : f === "end" ? T - o : mt(A, A + o, o, y, I, A + T, A + T + R, R), Y = Math.max(0, Y + b), ee = Math.max(0, ee + A);
    else {
      Y = l === "start" ? $ - ne - w : l === "end" ? $ - ve + Q + ie : l === "nearest" ? mt(ne, ve, fe, w, Q + ie, $, $ + P, P) : $ - (ne + fe / 2) + ie / 2, ee = f === "start" ? T - we - y : f === "center" ? T - (we + _ / 2) + oe / 2 : f === "end" ? T - me + I + oe : mt(we, me, _, y, I + oe, T, T + R, R);
      const { scrollLeft: Ee, scrollTop: Ae } = U;
      Y = ae === 0 ? 0 : Math.max(0, Math.min(Ae + Y / ae, U.scrollHeight - fe / ae + ie)), ee = ge === 0 ? 0 : Math.max(0, Math.min(Ee + ee / ge, U.scrollWidth - _ / ge + oe)), $ += Ae - Y, T += Ee - ee;
    }
    N.push({ el: U, top: Y, left: ee });
  }
  return N;
}, $s = (r) => r === !1 ? { block: "end", inline: "nearest" } : ((e) => e === Object(e) && Object.keys(e).length !== 0)(r) ? r : { block: "start", inline: "nearest" };
function Ls(r, e) {
  if (!r.isConnected || !((a) => {
    let u = a;
    for (; u && u.parentNode; ) {
      if (u.parentNode === document)
        return !0;
      u = u.parentNode instanceof ShadowRoot ? u.parentNode.host : u.parentNode;
    }
    return !1;
  })(r))
    return;
  const t = ((a) => {
    const u = window.getComputedStyle(a);
    return { top: parseFloat(u.scrollMarginTop) || 0, right: parseFloat(u.scrollMarginRight) || 0, bottom: parseFloat(u.scrollMarginBottom) || 0, left: parseFloat(u.scrollMarginLeft) || 0 };
  })(r);
  if (((a) => typeof a == "object" && typeof a.behavior == "function")(e))
    return e.behavior(sa(r, e));
  const n = typeof e == "boolean" || e == null ? void 0 : e.behavior;
  for (const { el: a, top: u, left: i } of sa(r, $s(e))) {
    const l = u - t.top + t.bottom, f = i - t.left + t.right;
    a.scroll({ top: l, left: f, behavior: n });
  }
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function oa(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function Re(r) {
  var e, t;
  return oa(r) === !1 ? !1 : (e = r.constructor, e === void 0 ? !0 : (t = e.prototype, !(oa(t) === !1 || t.hasOwnProperty("isPrototypeOf") === !1)));
}
var yu = Symbol.for("immer-nothing"), la = Symbol.for("immer-draftable"), Ue = Symbol.for("immer-state"), Ws = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(r) {
    return `The plugin for '${r}' has not been loaded into Immer. To enable the plugin, import and call \`enable${r}()\` when initializing your application.`;
  },
  function(r) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${r}'`;
  },
  "This object has been frozen and should not be mutated",
  function(r) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + r;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(r) {
    return `'current' expects a draft, got: ${r}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(r) {
    return `'original' expects a draft, got: ${r}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function Ve(r, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const t = Ws[r], n = typeof t == "function" ? t.apply(null, e) : t;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Kr = Object.getPrototypeOf;
function Nr(r) {
  return !!r && !!r[Ue];
}
function Mr(r) {
  var e;
  return r ? Ou(r) || Array.isArray(r) || !!r[la] || !!((e = r.constructor) != null && e[la]) || zt(r) || Vt(r) : !1;
}
var zs = Object.prototype.constructor.toString();
function Ou(r) {
  if (!r || typeof r != "object")
    return !1;
  const e = Kr(r);
  if (e === null)
    return !0;
  const t = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return t === Object ? !0 : typeof t == "function" && Function.toString.call(t) === zs;
}
function ut(r, e) {
  Wt(r) === 0 ? Object.entries(r).forEach(([t, n]) => {
    e(t, n, r);
  }) : r.forEach((t, n) => e(n, t, r));
}
function Wt(r) {
  const e = r[Ue];
  return e ? e.type_ : Array.isArray(r) ? 1 : zt(r) ? 2 : Vt(r) ? 3 : 0;
}
function dn(r, e) {
  return Wt(r) === 2 ? r.has(e) : Object.prototype.hasOwnProperty.call(r, e);
}
function xu(r, e, t) {
  const n = Wt(r);
  n === 2 ? r.set(e, t) : n === 3 ? r.add(t) : r[e] = t;
}
function Vs(r, e) {
  return r === e ? r !== 0 || 1 / r === 1 / e : r !== r && e !== e;
}
function zt(r) {
  return r instanceof Map;
}
function Vt(r) {
  return r instanceof Set;
}
function Or(r) {
  return r.copy_ || r.base_;
}
function hn(r, e) {
  if (zt(r))
    return new Map(r);
  if (Vt(r))
    return new Set(r);
  if (Array.isArray(r))
    return Array.prototype.slice.call(r);
  if (!e && Ou(r))
    return Kr(r) ? { ...r } : Object.assign(/* @__PURE__ */ Object.create(null), r);
  const t = Object.getOwnPropertyDescriptors(r);
  delete t[Ue];
  let n = Reflect.ownKeys(t);
  for (let a = 0; a < n.length; a++) {
    const u = n[a], i = t[u];
    i.writable === !1 && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (t[u] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: i.enumerable,
      value: r[u]
    });
  }
  return Object.create(Kr(r), t);
}
function Sn(r, e = !1) {
  return Ht(r) || Nr(r) || !Mr(r) || (Wt(r) > 1 && (r.set = r.add = r.clear = r.delete = Hs), Object.freeze(r), e && ut(r, (t, n) => Sn(n, !0))), r;
}
function Hs() {
  Ve(2);
}
function Ht(r) {
  return Object.isFrozen(r);
}
var qs = {};
function Ir(r) {
  const e = qs[r];
  return e || Ve(0, r), e;
}
var it;
function Pu() {
  return it;
}
function Ks(r, e) {
  return {
    drafts_: [],
    parent_: r,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function fa(r, e) {
  e && (Ir("Patches"), r.patches_ = [], r.inversePatches_ = [], r.patchListener_ = e);
}
function Dn(r) {
  gn(r), r.drafts_.forEach(Us), r.drafts_ = null;
}
function gn(r) {
  r === it && (it = r.parent_);
}
function ca(r) {
  return it = Ks(it, r);
}
function Us(r) {
  const e = r[Ue];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function va(r, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const t = e.drafts_[0];
  return r !== void 0 && r !== t ? (t[Ue].modified_ && (Dn(e), Ve(4)), Mr(r) && (r = St(e, r), e.parent_ || Tt(e, r)), e.patches_ && Ir("Patches").generateReplacementPatches_(
    t[Ue].base_,
    r,
    e.patches_,
    e.inversePatches_
  )) : r = St(e, t, []), Dn(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), r !== yu ? r : void 0;
}
function St(r, e, t) {
  if (Ht(e))
    return e;
  const n = e[Ue];
  if (!n)
    return ut(
      e,
      (a, u) => da(r, n, e, a, u, t)
    ), e;
  if (n.scope_ !== r)
    return e;
  if (!n.modified_)
    return Tt(r, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let u = a, i = !1;
    n.type_ === 3 && (u = new Set(a), a.clear(), i = !0), ut(
      u,
      (l, f) => da(r, n, a, l, f, t, i)
    ), Tt(r, a, !1), t && r.patches_ && Ir("Patches").generatePatches_(
      n,
      t,
      r.patches_,
      r.inversePatches_
    );
  }
  return n.copy_;
}
function da(r, e, t, n, a, u, i) {
  if (process.env.NODE_ENV !== "production" && a === t && Ve(5), Nr(a)) {
    const l = u && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !dn(e.assigned_, n) ? u.concat(n) : void 0, f = St(r, a, l);
    if (xu(t, n, f), Nr(f))
      r.canAutoFreeze_ = !1;
    else
      return;
  } else
    i && t.add(a);
  if (Mr(a) && !Ht(a)) {
    if (!r.immer_.autoFreeze_ && r.unfinalizedDrafts_ < 1)
      return;
    St(r, a), (!e || !e.scope_.parent_) && Tt(r, a);
  }
}
function Tt(r, e, t = !1) {
  !r.parent_ && r.immer_.autoFreeze_ && r.canAutoFreeze_ && Sn(e, t);
}
function Ys(r, e) {
  const t = Array.isArray(r), n = {
    type_: t ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Pu(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: r,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = n, u = Tn;
  t && (a = [n], u = st);
  const { revoke: i, proxy: l } = Proxy.revocable(a, u);
  return n.draft_ = l, n.revoke_ = i, l;
}
var Tn = {
  get(r, e) {
    if (e === Ue)
      return r;
    const t = Or(r);
    if (!dn(t, e))
      return Gs(r, t, e);
    const n = t[e];
    return r.finalized_ || !Mr(n) ? n : n === tn(r.base_, e) ? (nn(r), r.copy_[e] = pn(n, r)) : n;
  },
  has(r, e) {
    return e in Or(r);
  },
  ownKeys(r) {
    return Reflect.ownKeys(Or(r));
  },
  set(r, e, t) {
    const n = Su(Or(r), e);
    if (n != null && n.set)
      return n.set.call(r.draft_, t), !0;
    if (!r.modified_) {
      const a = tn(Or(r), e), u = a == null ? void 0 : a[Ue];
      if (u && u.base_ === t)
        return r.copy_[e] = t, r.assigned_[e] = !1, !0;
      if (Vs(t, a) && (t !== void 0 || dn(r.base_, e)))
        return !0;
      nn(r), mn(r);
    }
    return r.copy_[e] === t && // special case: handle new props with value 'undefined'
    (t !== void 0 || e in r.copy_) || // special case: NaN
    Number.isNaN(t) && Number.isNaN(r.copy_[e]) || (r.copy_[e] = t, r.assigned_[e] = !0), !0;
  },
  deleteProperty(r, e) {
    return tn(r.base_, e) !== void 0 || e in r.base_ ? (r.assigned_[e] = !1, nn(r), mn(r)) : delete r.assigned_[e], r.copy_ && delete r.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(r, e) {
    const t = Or(r), n = Reflect.getOwnPropertyDescriptor(t, e);
    return n && {
      writable: !0,
      configurable: r.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: t[e]
    };
  },
  defineProperty() {
    Ve(11);
  },
  getPrototypeOf(r) {
    return Kr(r.base_);
  },
  setPrototypeOf() {
    Ve(12);
  }
}, st = {};
ut(Tn, (r, e) => {
  st[r] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
st.deleteProperty = function(r, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && Ve(13), st.set.call(this, r, e, void 0);
};
st.set = function(r, e, t) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && Ve(14), Tn.set.call(this, r[0], e, t, r[0]);
};
function tn(r, e) {
  const t = r[Ue];
  return (t ? Or(t) : r)[e];
}
function Gs(r, e, t) {
  var a;
  const n = Su(e, t);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(r.draft_)
  ) : void 0;
}
function Su(r, e) {
  if (!(e in r))
    return;
  let t = Kr(r);
  for (; t; ) {
    const n = Object.getOwnPropertyDescriptor(t, e);
    if (n)
      return n;
    t = Kr(t);
  }
}
function mn(r) {
  r.modified_ || (r.modified_ = !0, r.parent_ && mn(r.parent_));
}
function nn(r) {
  r.copy_ || (r.copy_ = hn(
    r.base_,
    r.scope_.immer_.useStrictShallowCopy_
  ));
}
var _s = class {
  constructor(r) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, t, n) => {
      if (typeof e == "function" && typeof t != "function") {
        const u = t;
        t = e;
        const i = this;
        return function(f = u, ...c) {
          return i.produce(f, (v) => t.call(this, v, ...c));
        };
      }
      typeof t != "function" && Ve(6), n !== void 0 && typeof n != "function" && Ve(7);
      let a;
      if (Mr(e)) {
        const u = ca(this), i = pn(e, void 0);
        let l = !0;
        try {
          a = t(i), l = !1;
        } finally {
          l ? Dn(u) : gn(u);
        }
        return fa(u, n), va(a, u);
      } else if (!e || typeof e != "object") {
        if (a = t(e), a === void 0 && (a = e), a === yu && (a = void 0), this.autoFreeze_ && Sn(a, !0), n) {
          const u = [], i = [];
          Ir("Patches").generateReplacementPatches_(e, a, u, i), n(u, i);
        }
        return a;
      } else
        Ve(1, e);
    }, this.produceWithPatches = (e, t) => {
      if (typeof e == "function")
        return (i, ...l) => this.produceWithPatches(i, (f) => e(f, ...l));
      let n, a;
      return [this.produce(e, t, (i, l) => {
        n = i, a = l;
      }), n, a];
    }, typeof (r == null ? void 0 : r.autoFreeze) == "boolean" && this.setAutoFreeze(r.autoFreeze), typeof (r == null ? void 0 : r.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(r.useStrictShallowCopy);
  }
  createDraft(r) {
    Mr(r) || Ve(8), Nr(r) && (r = Xs(r));
    const e = ca(this), t = pn(r, void 0);
    return t[Ue].isManual_ = !0, gn(e), t;
  }
  finishDraft(r, e) {
    const t = r && r[Ue];
    (!t || !t.isManual_) && Ve(9);
    const { scope_: n } = t;
    return fa(n, e), va(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(r) {
    this.autoFreeze_ = r;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(r) {
    this.useStrictShallowCopy_ = r;
  }
  applyPatches(r, e) {
    let t;
    for (t = e.length - 1; t >= 0; t--) {
      const a = e[t];
      if (a.path.length === 0 && a.op === "replace") {
        r = a.value;
        break;
      }
    }
    t > -1 && (e = e.slice(t + 1));
    const n = Ir("Patches").applyPatches_;
    return Nr(r) ? n(r, e) : this.produce(
      r,
      (a) => n(a, e)
    );
  }
};
function pn(r, e) {
  const t = zt(r) ? Ir("MapSet").proxyMap_(r, e) : Vt(r) ? Ir("MapSet").proxySet_(r, e) : Ys(r, e);
  return (e ? e.scope_ : Pu()).drafts_.push(t), t;
}
function Xs(r) {
  return Nr(r) || Ve(10, r), Tu(r);
}
function Tu(r) {
  if (!Mr(r) || Ht(r))
    return r;
  const e = r[Ue];
  let t;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, t = hn(r, e.scope_.immer_.useStrictShallowCopy_);
  } else
    t = hn(r, !0);
  return ut(t, (n, a) => {
    xu(t, n, Tu(a));
  }), e && (e.finalized_ = !1), t;
}
var Ye = new _s(), Rn = Ye.produce;
Ye.produceWithPatches.bind(
  Ye
);
Ye.setAutoFreeze.bind(Ye);
Ye.setUseStrictShallowCopy.bind(Ye);
Ye.applyPatches.bind(Ye);
var ha = Ye.createDraft.bind(Ye), Da = Ye.finishDraft.bind(Ye), Js = {
  transform(r, e) {
    var {
      current: t,
      affinity: n
    } = r;
    if (t != null) {
      var a = h.transform(t, e, {
        affinity: n
      });
      r.current = a, a == null && r.unref();
    }
  }
}, Zs = {
  transform(r, e) {
    var {
      current: t,
      affinity: n
    } = r;
    if (t != null) {
      var a = te.transform(t, e, {
        affinity: n
      });
      r.current = a, a == null && r.unref();
    }
  }
}, Qs = {
  transform(r, e) {
    var {
      current: t,
      affinity: n
    } = r;
    if (t != null) {
      var a = E.transform(t, e, {
        affinity: n
      });
      r.current = a, a == null && r.unref();
    }
  }
}, Rt = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ new WeakMap(), tt = /* @__PURE__ */ new WeakMap(), Ru = /* @__PURE__ */ new WeakMap(), ga = /* @__PURE__ */ new WeakMap(), ma = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), h = {
  ancestors(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: t = !1
    } = e, n = h.levels(r, e);
    return t ? n = n.slice(1) : n = n.slice(0, -1), n;
  },
  common(r, e) {
    for (var t = [], n = 0; n < r.length && n < e.length; n++) {
      var a = r[n], u = e[n];
      if (a !== u)
        break;
      t.push(a);
    }
    return t;
  },
  compare(r, e) {
    for (var t = Math.min(r.length, e.length), n = 0; n < t; n++) {
      if (r[n] < e[n])
        return -1;
      if (r[n] > e[n])
        return 1;
    }
    return 0;
  },
  endsAfter(r, e) {
    var t = r.length - 1, n = r.slice(0, t), a = e.slice(0, t), u = r[t], i = e[t];
    return h.equals(n, a) && u > i;
  },
  endsAt(r, e) {
    var t = r.length, n = r.slice(0, t), a = e.slice(0, t);
    return h.equals(n, a);
  },
  endsBefore(r, e) {
    var t = r.length - 1, n = r.slice(0, t), a = e.slice(0, t), u = r[t], i = e[t];
    return h.equals(n, a) && u < i;
  },
  equals(r, e) {
    return r.length === e.length && r.every((t, n) => t === e[n]);
  },
  hasPrevious(r) {
    return r[r.length - 1] > 0;
  },
  isAfter(r, e) {
    return h.compare(r, e) === 1;
  },
  isAncestor(r, e) {
    return r.length < e.length && h.compare(r, e) === 0;
  },
  isBefore(r, e) {
    return h.compare(r, e) === -1;
  },
  isChild(r, e) {
    return r.length === e.length + 1 && h.compare(r, e) === 0;
  },
  isCommon(r, e) {
    return r.length <= e.length && h.compare(r, e) === 0;
  },
  isDescendant(r, e) {
    return r.length > e.length && h.compare(r, e) === 0;
  },
  isParent(r, e) {
    return r.length + 1 === e.length && h.compare(r, e) === 0;
  },
  isPath(r) {
    return Array.isArray(r) && (r.length === 0 || typeof r[0] == "number");
  },
  isSibling(r, e) {
    if (r.length !== e.length)
      return !1;
    var t = r.slice(0, -1), n = e.slice(0, -1), a = r[r.length - 1], u = e[e.length - 1];
    return a !== u && h.equals(t, n);
  },
  levels(r) {
    for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: t = !1
    } = e, n = [], a = 0; a <= r.length; a++)
      n.push(r.slice(0, a));
    return t && n.reverse(), n;
  },
  next(r) {
    if (r.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(r, "], because it has no next index."));
    var e = r[r.length - 1];
    return r.slice(0, -1).concat(e + 1);
  },
  operationCanTransformPath(r) {
    switch (r.type) {
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
  parent(r) {
    if (r.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(r, "]."));
    return r.slice(0, -1);
  },
  previous(r) {
    if (r.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(r, "], because it has no previous index."));
    var e = r[r.length - 1];
    if (e <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(r, "] because it would result in a negative index."));
    return r.slice(0, -1).concat(e - 1);
  },
  relative(r, e) {
    if (!h.isAncestor(e, r) && !h.equals(r, e))
      throw new Error("Cannot get the relative path of [".concat(r, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
    return r.slice(e.length);
  },
  transform(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!r)
      return null;
    var n = [...r], {
      affinity: a = "forward"
    } = t;
    if (r.length === 0)
      return n;
    switch (e.type) {
      case "insert_node": {
        var {
          path: u
        } = e;
        (h.equals(u, n) || h.endsBefore(u, n) || h.isAncestor(u, n)) && (n[u.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: i
        } = e;
        if (h.equals(i, n) || h.isAncestor(i, n))
          return null;
        h.endsBefore(i, n) && (n[i.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: l,
          position: f
        } = e;
        h.equals(l, n) || h.endsBefore(l, n) ? n[l.length - 1] -= 1 : h.isAncestor(l, n) && (n[l.length - 1] -= 1, n[l.length] += f);
        break;
      }
      case "split_node": {
        var {
          path: c,
          position: v
        } = e;
        if (h.equals(c, n)) {
          if (a === "forward")
            n[n.length - 1] += 1;
          else if (a !== "backward")
            return null;
        } else
          h.endsBefore(c, n) ? n[c.length - 1] += 1 : h.isAncestor(c, n) && r[c.length] >= v && (n[c.length - 1] += 1, n[c.length] -= v);
        break;
      }
      case "move_node": {
        var {
          path: D,
          newPath: g
        } = e;
        if (h.equals(D, g))
          return n;
        if (h.isAncestor(D, n) || h.equals(D, n)) {
          var C = g.slice();
          return h.endsBefore(D, g) && D.length < g.length && (C[D.length - 1] -= 1), C.concat(n.slice(D.length));
        } else
          h.isSibling(D, g) && (h.isAncestor(g, n) || h.equals(g, n)) ? h.endsBefore(D, n) ? n[D.length - 1] -= 1 : n[D.length - 1] += 1 : h.endsBefore(g, n) || h.equals(g, n) || h.isAncestor(g, n) ? (h.endsBefore(D, n) && (n[D.length - 1] -= 1), n[g.length - 1] += 1) : h.endsBefore(D, n) && (h.equals(g, n) && (n[g.length - 1] += 1), n[D.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function ot(r) {
  "@babel/helpers - typeof";
  return ot = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ot(r);
}
function eo(r, e) {
  if (ot(r) !== "object" || r === null)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (ot(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function ro(r) {
  var e = eo(r, "string");
  return ot(e) === "symbol" ? e : String(e);
}
function $e(r, e, t) {
  return e = ro(e), e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function Ca(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function et(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ca(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ca(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var to = (r, e, t) => {
  switch (t.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = t, u = j.parent(r, n), i = n[n.length - 1];
      if (i > u.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (u.children.splice(i, 0, a), e)
        for (var [l, f] of E.points(e))
          e[f] = te.transform(l, t);
      break;
    }
    case "insert_text": {
      var {
        path: c,
        offset: v,
        text: D
      } = t;
      if (D.length === 0)
        break;
      var g = j.leaf(r, c), C = g.text.slice(0, v), m = g.text.slice(v);
      if (g.text = C + D + m, e)
        for (var [o, B] of E.points(e))
          e[B] = te.transform(o, t);
      break;
    }
    case "merge_node": {
      var {
        path: A
      } = t, b = j.get(r, A), P = h.previous(A), R = j.get(r, P), k = j.parent(r, A), L = A[A.length - 1];
      if (H.isText(b) && H.isText(R))
        R.text += b.text;
      else if (!H.isText(b) && !H.isText(R))
        R.children.push(...b.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(A, "] to nodes of different interfaces: ").concat(Te.stringify(b), " ").concat(Te.stringify(R)));
      if (k.children.splice(L, 1), e)
        for (var [W, K] of E.points(e))
          e[K] = te.transform(W, t);
      break;
    }
    case "move_node": {
      var {
        path: M,
        newPath: z
      } = t;
      if (h.isAncestor(M, z))
        throw new Error("Cannot move a path [".concat(M, "] to new path [").concat(z, "] because the destination is inside itself."));
      var G = j.get(r, M), S = j.parent(r, M), $ = M[M.length - 1];
      S.children.splice($, 1);
      var T = h.transform(M, t), N = j.get(r, h.parent(T)), re = T[T.length - 1];
      if (N.children.splice(re, 0, G), e)
        for (var [U, fe] of E.points(e))
          e[fe] = te.transform(U, t);
      break;
    }
    case "remove_node": {
      var {
        path: _
      } = t, ne = _[_.length - 1], me = j.parent(r, _);
      if (me.children.splice(ne, 1), e)
        for (var [ve, we] of E.points(e)) {
          var p = te.transform(ve, t);
          if (e != null && p != null)
            e[we] = p;
          else {
            var y = void 0, w = void 0;
            for (var [I, Q] of j.texts(r))
              if (h.compare(Q, _) === -1)
                y = [I, Q];
              else {
                w = [I, Q];
                break;
              }
            var Y = !1;
            y && w && (h.equals(w[1], _) ? Y = !h.hasPrevious(w[1]) : Y = h.common(y[1], _).length < h.common(w[1], _).length), y && !Y ? (ve.path = y[1], ve.offset = y[0].text.length) : w ? (ve.path = w[1], ve.offset = 0) : e = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: ee,
        offset: oe,
        text: ie
      } = t;
      if (ie.length === 0)
        break;
      var ge = j.leaf(r, ee), ae = ge.text.slice(0, oe), Ee = ge.text.slice(oe + ie.length);
      if (ge.text = ae + Ee, e)
        for (var [Ae, pe] of E.points(e))
          e[pe] = te.transform(Ae, t);
      break;
    }
    case "set_node": {
      var {
        path: Le,
        properties: Ne,
        newProperties: je
      } = t;
      if (Le.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var He = j.get(r, Le);
      for (var de in je) {
        if (de === "children" || de === "text")
          throw new Error('Cannot set the "'.concat(de, '" property of nodes!'));
        var Se = je[de];
        Se == null ? delete He[de] : He[de] = Se;
      }
      for (var xe in Ne)
        je.hasOwnProperty(xe) || delete He[xe];
      break;
    }
    case "set_selection": {
      var {
        newProperties: ye
      } = t;
      if (ye == null)
        e = ye;
      else {
        if (e == null) {
          if (!E.isRange(ye))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Te.stringify(ye), " when there is no current selection."));
          e = et({}, ye);
        }
        for (var We in ye) {
          var rr = ye[We];
          if (rr == null) {
            if (We === "anchor" || We === "focus")
              throw new Error('Cannot remove the "'.concat(We, '" selection property'));
            delete e[We];
          } else
            e[We] = rr;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: qe,
        position: tr,
        properties: yr
      } = t;
      if (qe.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(qe, "] because the root node cannot be split."));
      var Ze = j.get(r, qe), Ut = j.parent(r, qe), Yt = qe[qe.length - 1], _r;
      if (H.isText(Ze)) {
        var Gt = Ze.text.slice(0, tr), _t = Ze.text.slice(tr);
        Ze.text = Gt, _r = et(et({}, yr), {}, {
          text: _t
        });
      } else {
        var Xt = Ze.children.slice(0, tr), Jt = Ze.children.slice(tr);
        Ze.children = Xt, _r = et(et({}, yr), {}, {
          children: Jt
        });
      }
      if (Ut.children.splice(Yt + 1, 0, _r), e)
        for (var [Xr, Dt] of E.points(e))
          e[Dt] = te.transform(Xr, t);
      break;
    }
  }
  return e;
}, no = {
  transform(r, e) {
    r.children = ha(r.children);
    var t = r.selection && ha(r.selection);
    try {
      t = to(r, t, e);
    } finally {
      r.children = Da(r.children), t ? r.selection = Nr(t) ? Da(t) : t : r.selection = null;
    }
  }
}, ao = {
  insertNodes(r, e, t) {
    r.insertNodes(e, t);
  },
  liftNodes(r, e) {
    r.liftNodes(e);
  },
  mergeNodes(r, e) {
    r.mergeNodes(e);
  },
  moveNodes(r, e) {
    r.moveNodes(e);
  },
  removeNodes(r, e) {
    r.removeNodes(e);
  },
  setNodes(r, e, t) {
    r.setNodes(e, t);
  },
  splitNodes(r, e) {
    r.splitNodes(e);
  },
  unsetNodes(r, e, t) {
    r.unsetNodes(e, t);
  },
  unwrapNodes(r, e) {
    r.unwrapNodes(e);
  },
  wrapNodes(r, e, t) {
    r.wrapNodes(e, t);
  }
}, uo = {
  collapse(r, e) {
    r.collapse(e);
  },
  deselect(r) {
    r.deselect();
  },
  move(r, e) {
    r.move(e);
  },
  select(r, e) {
    r.select(e);
  },
  setPoint(r, e, t) {
    r.setPoint(e, t);
  },
  setSelection(r, e) {
    r.setSelection(e);
  }
}, ju = (r, e) => {
  for (var t in r) {
    var n = r[t], a = e[t];
    if (Re(n) && Re(a)) {
      if (!ju(n, a))
        return !1;
    } else if (Array.isArray(n) && Array.isArray(a)) {
      if (n.length !== a.length)
        return !1;
      for (var u = 0; u < n.length; u++)
        if (n[u] !== a[u])
          return !1;
    } else if (n !== a)
      return !1;
  }
  for (var i in e)
    if (r[i] === void 0 && e[i] !== void 0)
      return !1;
  return !0;
};
function io(r, e) {
  if (r == null)
    return {};
  var t = {}, n = Object.keys(r), a, u;
  for (u = 0; u < n.length; u++)
    a = n[u], !(e.indexOf(a) >= 0) && (t[a] = r[a]);
  return t;
}
function vr(r, e) {
  if (r == null)
    return {};
  var t = io(r, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    for (a = 0; a < u.length; a++)
      n = u[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
var so = ["anchor", "focus"];
function Ba(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function oo(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ba(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ba(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var E = {
  edges(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: t = !1
    } = e, {
      anchor: n,
      focus: a
    } = r;
    return E.isBackward(r) === t ? [n, a] : [a, n];
  },
  end(r) {
    var [, e] = E.edges(r);
    return e;
  },
  equals(r, e) {
    return te.equals(r.anchor, e.anchor) && te.equals(r.focus, e.focus);
  },
  includes(r, e) {
    if (E.isRange(e)) {
      if (E.includes(r, e.anchor) || E.includes(r, e.focus))
        return !0;
      var [t, n] = E.edges(r), [a, u] = E.edges(e);
      return te.isBefore(t, a) && te.isAfter(n, u);
    }
    var [i, l] = E.edges(r), f = !1, c = !1;
    return te.isPoint(e) ? (f = te.compare(e, i) >= 0, c = te.compare(e, l) <= 0) : (f = h.compare(e, i.path) >= 0, c = h.compare(e, l.path) <= 0), f && c;
  },
  intersection(r, e) {
    var t = vr(r, so), [n, a] = E.edges(r), [u, i] = E.edges(e), l = te.isBefore(n, u) ? u : n, f = te.isBefore(a, i) ? a : i;
    return te.isBefore(f, l) ? null : oo({
      anchor: l,
      focus: f
    }, t);
  },
  isBackward(r) {
    var {
      anchor: e,
      focus: t
    } = r;
    return te.isAfter(e, t);
  },
  isCollapsed(r) {
    var {
      anchor: e,
      focus: t
    } = r;
    return te.equals(e, t);
  },
  isExpanded(r) {
    return !E.isCollapsed(r);
  },
  isForward(r) {
    return !E.isBackward(r);
  },
  isRange(r) {
    return Re(r) && te.isPoint(r.anchor) && te.isPoint(r.focus);
  },
  *points(r) {
    yield [r.anchor, "anchor"], yield [r.focus, "focus"];
  },
  start(r) {
    var [e] = E.edges(r);
    return e;
  },
  transform(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Rn(r, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "inward"
      } = t, u, i;
      if (a === "inward") {
        var l = E.isCollapsed(n);
        E.isForward(n) ? (u = "forward", i = l ? u : "backward") : (u = "backward", i = l ? u : "forward");
      } else
        a === "outward" ? E.isForward(n) ? (u = "backward", i = "forward") : (u = "forward", i = "backward") : (u = a, i = a);
      var f = te.transform(n.anchor, e, {
        affinity: u
      }), c = te.transform(n.focus, e, {
        affinity: i
      });
      if (!f || !c)
        return null;
      n.anchor = f, n.focus = c;
    });
  }
}, Ea = (r) => Re(r) && j.isNodeList(r.children) && !s.isEditor(r), q = {
  isAncestor(r) {
    return Re(r) && j.isNodeList(r.children);
  },
  isElement: Ea,
  isElementList(r) {
    return Array.isArray(r) && r.every((e) => q.isElement(e));
  },
  isElementProps(r) {
    return r.children !== void 0;
  },
  isElementType: function(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Ea(e) && e[n] === t;
  },
  matches(r, e) {
    for (var t in e)
      if (t !== "children" && r[t] !== e[t])
        return !1;
    return !0;
  }
}, lo = ["children"], fo = ["text"], Aa = /* @__PURE__ */ new WeakMap(), j = {
  ancestor(r, e) {
    var t = j.get(r, e);
    if (H.isText(t))
      throw new Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(Te.stringify(t)));
    return t;
  },
  ancestors(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of h.ancestors(e, t)) {
        var a = j.ancestor(r, n), u = [a, n];
        yield u;
      }
    }();
  },
  child(r, e) {
    if (H.isText(r))
      throw new Error("Cannot get the child of a text node: ".concat(Te.stringify(r)));
    var t = r.children[e];
    if (t == null)
      throw new Error("Cannot get child at index `".concat(e, "` in node: ").concat(Te.stringify(r)));
    return t;
  },
  children(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = t, a = j.ancestor(r, e), {
        children: u
      } = a, i = n ? u.length - 1 : 0; n ? i >= 0 : i < u.length; ) {
        var l = j.child(a, i), f = e.concat(i);
        yield [l, f], i = n ? i - 1 : i + 1;
      }
    }();
  },
  common(r, e, t) {
    var n = h.common(e, t), a = j.get(r, n);
    return [a, n];
  },
  descendant(r, e) {
    var t = j.get(r, e);
    if (s.isEditor(t))
      throw new Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(Te.stringify(t)));
    return t;
  },
  descendants(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [t, n] of j.nodes(r, e))
        n.length !== 0 && (yield [t, n]);
    }();
  },
  elements(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [t, n] of j.nodes(r, e))
        q.isElement(t) && (yield [t, n]);
    }();
  },
  extractProps(r) {
    if (q.isAncestor(r)) {
      var e = vr(r, lo);
      return e;
    } else {
      var e = vr(r, fo);
      return e;
    }
  },
  first(r, e) {
    for (var t = e.slice(), n = j.get(r, t); n && !(H.isText(n) || n.children.length === 0); )
      n = n.children[0], t.push(0);
    return [n, t];
  },
  fragment(r, e) {
    if (H.isText(r))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Te.stringify(r)));
    var t = Rn({
      children: r.children
    }, (n) => {
      var [a, u] = E.edges(e), i = j.nodes(n, {
        reverse: !0,
        pass: (g) => {
          var [, C] = g;
          return !E.includes(e, C);
        }
      });
      for (var [, l] of i) {
        if (!E.includes(e, l)) {
          var f = j.parent(n, l), c = l[l.length - 1];
          f.children.splice(c, 1);
        }
        if (h.equals(l, u.path)) {
          var v = j.leaf(n, l);
          v.text = v.text.slice(0, u.offset);
        }
        if (h.equals(l, a.path)) {
          var D = j.leaf(n, l);
          D.text = D.text.slice(a.offset);
        }
      }
      s.isEditor(n) && (n.selection = null);
    });
    return t.children;
  },
  get(r, e) {
    for (var t = r, n = 0; n < e.length; n++) {
      var a = e[n];
      if (H.isText(t) || !t.children[a])
        throw new Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(Te.stringify(r)));
      t = t.children[a];
    }
    return t;
  },
  has(r, e) {
    for (var t = r, n = 0; n < e.length; n++) {
      var a = e[n];
      if (H.isText(t) || !t.children[a])
        return !1;
      t = t.children[a];
    }
    return !0;
  },
  isNode(r) {
    return H.isText(r) || q.isElement(r) || s.isEditor(r);
  },
  isNodeList(r) {
    if (!Array.isArray(r))
      return !1;
    var e = Aa.get(r);
    if (e !== void 0)
      return e;
    var t = r.every((n) => j.isNode(n));
    return Aa.set(r, t), t;
  },
  last(r, e) {
    for (var t = e.slice(), n = j.get(r, t); n && !(H.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], t.push(a);
    }
    return [n, t];
  },
  leaf(r, e) {
    var t = j.get(r, e);
    if (!H.isText(t))
      throw new Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(Te.stringify(t)));
    return t;
  },
  levels(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of h.levels(e, t)) {
        var a = j.get(r, n);
        yield [a, n];
      }
    }();
  },
  matches(r, e) {
    return q.isElement(r) && q.isElementProps(e) && q.matches(r, e) || H.isText(r) && H.isTextProps(e) && H.matches(r, e);
  },
  nodes(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: t,
        reverse: n = !1
      } = e, {
        from: a = [],
        to: u
      } = e, i = /* @__PURE__ */ new Set(), l = [], f = r; !(u && (n ? h.isBefore(l, u) : h.isAfter(l, u))); ) {
        if (i.has(f) || (yield [f, l]), !i.has(f) && !H.isText(f) && f.children.length !== 0 && (t == null || t([f, l]) === !1)) {
          i.add(f);
          var c = n ? f.children.length - 1 : 0;
          h.isAncestor(l, a) && (c = a[l.length]), l = l.concat(c), f = j.get(r, l);
          continue;
        }
        if (l.length === 0)
          break;
        if (!n) {
          var v = h.next(l);
          if (j.has(r, v)) {
            l = v, f = j.get(r, l);
            continue;
          }
        }
        if (n && l[l.length - 1] !== 0) {
          var D = h.previous(l);
          l = D, f = j.get(r, l);
          continue;
        }
        l = h.parent(l), f = j.get(r, l), i.add(f);
      }
    }();
  },
  parent(r, e) {
    var t = h.parent(e), n = j.get(r, t);
    if (H.isText(n))
      throw new Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
    return n;
  },
  string(r) {
    return H.isText(r) ? r.text : r.children.map(j.string).join("");
  },
  texts(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [t, n] of j.nodes(r, e))
        H.isText(t) && (yield [t, n]);
    }();
  }
};
function ba(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ce(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ba(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ba(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Br = {
  isNodeOperation(r) {
    return Br.isOperation(r) && r.type.endsWith("_node");
  },
  isOperation(r) {
    if (!Re(r))
      return !1;
    switch (r.type) {
      case "insert_node":
        return h.isPath(r.path) && j.isNode(r.node);
      case "insert_text":
        return typeof r.offset == "number" && typeof r.text == "string" && h.isPath(r.path);
      case "merge_node":
        return typeof r.position == "number" && h.isPath(r.path) && Re(r.properties);
      case "move_node":
        return h.isPath(r.path) && h.isPath(r.newPath);
      case "remove_node":
        return h.isPath(r.path) && j.isNode(r.node);
      case "remove_text":
        return typeof r.offset == "number" && typeof r.text == "string" && h.isPath(r.path);
      case "set_node":
        return h.isPath(r.path) && Re(r.properties) && Re(r.newProperties);
      case "set_selection":
        return r.properties === null && E.isRange(r.newProperties) || r.newProperties === null && E.isRange(r.properties) || Re(r.properties) && Re(r.newProperties);
      case "split_node":
        return h.isPath(r.path) && typeof r.position == "number" && Re(r.properties);
      default:
        return !1;
    }
  },
  isOperationList(r) {
    return Array.isArray(r) && r.every((e) => Br.isOperation(e));
  },
  isSelectionOperation(r) {
    return Br.isOperation(r) && r.type.endsWith("_selection");
  },
  isTextOperation(r) {
    return Br.isOperation(r) && r.type.endsWith("_text");
  },
  inverse(r) {
    switch (r.type) {
      case "insert_node":
        return Ce(Ce({}, r), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return Ce(Ce({}, r), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return Ce(Ce({}, r), {}, {
          type: "split_node",
          path: h.previous(r.path)
        });
      case "move_node": {
        var {
          newPath: e,
          path: t
        } = r;
        if (h.equals(e, t))
          return r;
        if (h.isSibling(t, e))
          return Ce(Ce({}, r), {}, {
            path: e,
            newPath: t
          });
        var n = h.transform(t, r), a = h.transform(h.next(t), r);
        return Ce(Ce({}, r), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return Ce(Ce({}, r), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return Ce(Ce({}, r), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: u,
          newProperties: i
        } = r;
        return Ce(Ce({}, r), {}, {
          properties: i,
          newProperties: u
        });
      }
      case "set_selection": {
        var {
          properties: l,
          newProperties: f
        } = r;
        return l == null ? Ce(Ce({}, r), {}, {
          properties: f,
          newProperties: null
        }) : f == null ? Ce(Ce({}, r), {}, {
          properties: null,
          newProperties: l
        }) : Ce(Ce({}, r), {}, {
          properties: f,
          newProperties: l
        });
      }
      case "split_node":
        return Ce(Ce({}, r), {}, {
          type: "merge_node",
          path: h.next(r.path)
        });
    }
  }
}, Fa = /* @__PURE__ */ new WeakMap(), co = (r) => {
  var e = Fa.get(r);
  if (e !== void 0)
    return e;
  if (!Re(r))
    return !1;
  var t = typeof r.addMark == "function" && typeof r.apply == "function" && typeof r.deleteFragment == "function" && typeof r.insertBreak == "function" && typeof r.insertSoftBreak == "function" && typeof r.insertFragment == "function" && typeof r.insertNode == "function" && typeof r.insertText == "function" && typeof r.isElementReadOnly == "function" && typeof r.isInline == "function" && typeof r.isSelectable == "function" && typeof r.isVoid == "function" && typeof r.normalizeNode == "function" && typeof r.onChange == "function" && typeof r.removeMark == "function" && typeof r.getDirtyPaths == "function" && (r.marks === null || Re(r.marks)) && (r.selection === null || E.isRange(r.selection)) && j.isNodeList(r.children) && Br.isOperationList(r.operations);
  return Fa.set(r, t), t;
}, s = {
  above(r, e) {
    return r.above(e);
  },
  addMark(r, e, t) {
    r.addMark(e, t);
  },
  after(r, e, t) {
    return r.after(e, t);
  },
  before(r, e, t) {
    return r.before(e, t);
  },
  deleteBackward(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: t = "character"
    } = e;
    r.deleteBackward(t);
  },
  deleteForward(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: t = "character"
    } = e;
    r.deleteForward(t);
  },
  deleteFragment(r, e) {
    r.deleteFragment(e);
  },
  edges(r, e) {
    return r.edges(e);
  },
  elementReadOnly(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return r.elementReadOnly(e);
  },
  end(r, e) {
    return r.end(e);
  },
  first(r, e) {
    return r.first(e);
  },
  fragment(r, e) {
    return r.fragment(e);
  },
  hasBlocks(r, e) {
    return r.hasBlocks(e);
  },
  hasInlines(r, e) {
    return r.hasInlines(e);
  },
  hasPath(r, e) {
    return r.hasPath(e);
  },
  hasTexts(r, e) {
    return r.hasTexts(e);
  },
  insertBreak(r) {
    r.insertBreak();
  },
  insertFragment(r, e, t) {
    r.insertFragment(e, t);
  },
  insertNode(r, e) {
    r.insertNode(e);
  },
  insertSoftBreak(r) {
    r.insertSoftBreak();
  },
  insertText(r, e) {
    r.insertText(e);
  },
  isBlock(r, e) {
    return r.isBlock(e);
  },
  isEdge(r, e, t) {
    return r.isEdge(e, t);
  },
  isEditor(r) {
    return co(r);
  },
  isElementReadOnly(r, e) {
    return r.isElementReadOnly(e);
  },
  isEmpty(r, e) {
    return r.isEmpty(e);
  },
  isEnd(r, e, t) {
    return r.isEnd(e, t);
  },
  isInline(r, e) {
    return r.isInline(e);
  },
  isNormalizing(r) {
    return r.isNormalizing();
  },
  isSelectable(r, e) {
    return r.isSelectable(e);
  },
  isStart(r, e, t) {
    return r.isStart(e, t);
  },
  isVoid(r, e) {
    return r.isVoid(e);
  },
  last(r, e) {
    return r.last(e);
  },
  leaf(r, e, t) {
    return r.leaf(e, t);
  },
  levels(r, e) {
    return r.levels(e);
  },
  marks(r) {
    return r.getMarks();
  },
  next(r, e) {
    return r.next(e);
  },
  node(r, e, t) {
    return r.node(e, t);
  },
  nodes(r, e) {
    return r.nodes(e);
  },
  normalize(r, e) {
    r.normalize(e);
  },
  parent(r, e, t) {
    return r.parent(e, t);
  },
  path(r, e, t) {
    return r.path(e, t);
  },
  pathRef(r, e, t) {
    return r.pathRef(e, t);
  },
  pathRefs(r) {
    return r.pathRefs();
  },
  point(r, e, t) {
    return r.point(e, t);
  },
  pointRef(r, e, t) {
    return r.pointRef(e, t);
  },
  pointRefs(r) {
    return r.pointRefs();
  },
  positions(r, e) {
    return r.positions(e);
  },
  previous(r, e) {
    return r.previous(e);
  },
  range(r, e, t) {
    return r.range(e, t);
  },
  rangeRef(r, e, t) {
    return r.rangeRef(e, t);
  },
  rangeRefs(r) {
    return r.rangeRefs();
  },
  removeMark(r, e) {
    r.removeMark(e);
  },
  setNormalizing(r, e) {
    r.setNormalizing(e);
  },
  start(r, e) {
    return r.start(e);
  },
  string(r, e, t) {
    return r.string(e, t);
  },
  unhangRange(r, e, t) {
    return r.unhangRange(e, t);
  },
  void(r, e) {
    return r.void(e);
  },
  withoutNormalizing(r, e) {
    r.withoutNormalizing(e);
  }
}, vo = {
  isSpan(r) {
    return Array.isArray(r) && r.length === 2 && r.every(h.isPath);
  }
};
function wa(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ya(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? wa(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : wa(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var te = {
  compare(r, e) {
    var t = h.compare(r.path, e.path);
    return t === 0 ? r.offset < e.offset ? -1 : r.offset > e.offset ? 1 : 0 : t;
  },
  isAfter(r, e) {
    return te.compare(r, e) === 1;
  },
  isBefore(r, e) {
    return te.compare(r, e) === -1;
  },
  equals(r, e) {
    return r.offset === e.offset && h.equals(r.path, e.path);
  },
  isPoint(r) {
    return Re(r) && typeof r.offset == "number" && h.isPath(r.path);
  },
  transform(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Rn(r, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "forward"
      } = t, {
        path: u,
        offset: i
      } = n;
      switch (e.type) {
        case "insert_node":
        case "move_node": {
          n.path = h.transform(u, e, t);
          break;
        }
        case "insert_text": {
          h.equals(e.path, u) && (e.offset < i || e.offset === i && a === "forward") && (n.offset += e.text.length);
          break;
        }
        case "merge_node": {
          h.equals(e.path, u) && (n.offset += e.position), n.path = h.transform(u, e, t);
          break;
        }
        case "remove_text": {
          h.equals(e.path, u) && e.offset <= i && (n.offset -= Math.min(i - e.offset, e.text.length));
          break;
        }
        case "remove_node": {
          if (h.equals(e.path, u) || h.isAncestor(e.path, u))
            return null;
          n.path = h.transform(u, e, t);
          break;
        }
        case "split_node": {
          if (h.equals(e.path, u)) {
            if (e.position === i && a == null)
              return null;
            (e.position < i || e.position === i && a === "forward") && (n.offset -= e.position, n.path = h.transform(u, e, ya(ya({}, t), {}, {
              affinity: "forward"
            })));
          } else
            n.path = h.transform(u, e, t);
          break;
        }
      }
    });
  }
}, Oa = void 0, Te = {
  setScrubber(r) {
    Oa = r;
  },
  stringify(r) {
    return JSON.stringify(r, Oa);
  }
}, ho = ["text"], Do = ["anchor", "focus"];
function xa(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function lr(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xa(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : xa(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var H = {
  equals(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = t;
    function a(u) {
      var i = vr(u, ho);
      return i;
    }
    return ju(n ? a(r) : r, n ? a(e) : e);
  },
  isText(r) {
    return Re(r) && typeof r.text == "string";
  },
  isTextList(r) {
    return Array.isArray(r) && r.every((e) => H.isText(e));
  },
  isTextProps(r) {
    return r.text !== void 0;
  },
  matches(r, e) {
    for (var t in e)
      if (t !== "text" && (!r.hasOwnProperty(t) || r[t] !== e[t]))
        return !1;
    return !0;
  },
  decorations(r, e) {
    var t = [lr({}, r)];
    for (var n of e) {
      var a = vr(n, Do), [u, i] = E.edges(n), l = [], f = 0, c = u.offset, v = i.offset;
      for (var D of t) {
        var {
          length: g
        } = D.text, C = f;
        if (f += g, c <= C && f <= v) {
          Object.assign(D, a), l.push(D);
          continue;
        }
        if (c !== v && (c === f || v === C) || c > f || v < C || v === C && C !== 0) {
          l.push(D);
          continue;
        }
        var m = D, o = void 0, B = void 0;
        if (v < f) {
          var A = v - C;
          B = lr(lr({}, m), {}, {
            text: m.text.slice(A)
          }), m = lr(lr({}, m), {}, {
            text: m.text.slice(0, A)
          });
        }
        if (c > C) {
          var b = c - C;
          o = lr(lr({}, m), {}, {
            text: m.text.slice(0, b)
          }), m = lr(lr({}, m), {}, {
            text: m.text.slice(b)
          });
        }
        Object.assign(m, a), o && l.push(o), l.push(m), B && l.push(B);
      }
      t = l;
    }
    return t;
  }
}, jn = (r) => r.selection ? r.selection : r.children.length > 0 ? s.end(r, []) : [0], Gr = (r, e) => {
  var [t] = s.node(r, e);
  return (n) => n === t;
}, Nn = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !t, a = t ? Eo(e) : e, u = Z.None, i = Z.None, l = 0, f = null, c = null;
  for (var v of a) {
    var D = v.codePointAt(0);
    if (!D)
      break;
    var g = jo(v, D);
    if ([u, i] = n ? [i, g] : [g, u], zr(u, Z.ZWJ) && zr(i, Z.ExtPict) && (n ? f = Pa(e.substring(0, l)) : f = Pa(e.substring(0, e.length - l)), !f) || zr(u, Z.RI) && zr(i, Z.RI) && (c !== null ? c = !c : n ? c = !0 : c = $o(e.substring(0, e.length - l)), !c) || u !== Z.None && i !== Z.None && Mo(u, i))
      break;
    l += v.length;
  }
  return l || 1;
}, go = /\s/, mo = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, po = /['\u2018\u2019]/, Co = function(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; e.length > 0; ) {
    var u = Nn(e, t), [i, l] = Mn(e, u, t);
    if (Bo(i, l, t))
      a = !0, n += u;
    else if (!a)
      n += u;
    else
      break;
    e = l;
  }
  return n;
}, Mn = (r, e, t) => {
  if (t) {
    var n = r.length - e;
    return [r.slice(n, r.length), r.slice(0, n)];
  }
  return [r.slice(0, e), r.slice(e)];
}, Bo = function r(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (go.test(e))
    return !1;
  if (po.test(e)) {
    var a = Nn(t, n), [u, i] = Mn(t, a, n);
    if (r(u, i, n))
      return !0;
  }
  return !mo.test(e);
}, Eo = function* (e) {
  for (var t = e.length - 1, n = 0; n < e.length; n++) {
    var a = e.charAt(t - n);
    if (bo(a.charCodeAt(0))) {
      var u = e.charAt(t - n - 1);
      if (Ao(u.charCodeAt(0))) {
        yield u + a, n++;
        continue;
      }
    }
    yield a;
  }
}, Ao = (r) => r >= 55296 && r <= 56319, bo = (r) => r >= 56320 && r <= 57343, Z;
(function(r) {
  r[r.None = 0] = "None", r[r.Extend = 1] = "Extend", r[r.ZWJ = 2] = "ZWJ", r[r.RI = 4] = "RI", r[r.Prepend = 8] = "Prepend", r[r.SpacingMark = 16] = "SpacingMark", r[r.L = 32] = "L", r[r.V = 64] = "V", r[r.T = 128] = "T", r[r.LV = 256] = "LV", r[r.LVT = 512] = "LVT", r[r.ExtPict = 1024] = "ExtPict", r[r.Any = 2048] = "Any";
})(Z || (Z = {}));
var Fo = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, wo = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, yo = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, Oo = /^[\u1100-\u115F\uA960-\uA97C]$/, xo = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, Po = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, So = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, To = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, Ro = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, jo = (r, e) => {
  var t = Z.Any;
  return r.search(Fo) !== -1 && (t |= Z.Extend), e === 8205 && (t |= Z.ZWJ), e >= 127462 && e <= 127487 && (t |= Z.RI), r.search(wo) !== -1 && (t |= Z.Prepend), r.search(yo) !== -1 && (t |= Z.SpacingMark), r.search(Oo) !== -1 && (t |= Z.L), r.search(xo) !== -1 && (t |= Z.V), r.search(Po) !== -1 && (t |= Z.T), r.search(So) !== -1 && (t |= Z.LV), r.search(To) !== -1 && (t |= Z.LVT), r.search(Ro) !== -1 && (t |= Z.ExtPict), t;
};
function zr(r, e) {
  return (r & e) !== 0;
}
var No = [
  // GB6
  [Z.L, Z.L | Z.V | Z.LV | Z.LVT],
  // GB7
  [Z.LV | Z.V, Z.V | Z.T],
  // GB8
  [Z.LVT | Z.T, Z.T],
  // GB9
  [Z.Any, Z.Extend | Z.ZWJ],
  // GB9a
  [Z.Any, Z.SpacingMark],
  // GB9b
  [Z.Prepend, Z.Any],
  // GB11
  [Z.ZWJ, Z.ExtPict],
  // GB12 and GB13
  [Z.RI, Z.RI]
];
function Mo(r, e) {
  return No.findIndex((t) => zr(r, t[0]) && zr(e, t[1])) === -1;
}
var Io = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, Pa = (r) => r.search(Io) !== -1, ko = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, $o = (r) => {
  var e = r.match(ko);
  if (e === null)
    return !1;
  var t = e[0].length / 2;
  return t % 2 === 1;
}, Lo = {
  delete(r, e) {
    r.delete(e);
  },
  insertFragment(r, e, t) {
    r.insertFragment(e, t);
  },
  insertText(r, e) {
    var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    s.withoutNormalizing(r, () => {
      var {
        voids: n = !1
      } = t, {
        at: a = jn(r)
      } = t;
      if (h.isPath(a) && (a = s.range(r, a)), E.isRange(a))
        if (E.isCollapsed(a))
          a = a.anchor;
        else {
          var u = E.end(a);
          if (!n && s.void(r, {
            at: u
          }))
            return;
          var i = E.start(a), l = s.pointRef(r, i), f = s.pointRef(r, u);
          O.delete(r, {
            at: a,
            voids: n
          });
          var c = l.unref(), v = f.unref();
          a = c || v, O.setSelection(r, {
            anchor: a,
            focus: a
          });
        }
      if (!(!n && s.void(r, {
        at: a
      }) || s.elementReadOnly(r, {
        at: a
      }))) {
        var {
          path: D,
          offset: g
        } = a;
        e.length > 0 && r.apply({
          type: "insert_text",
          path: D,
          offset: g,
          text: e
        });
      }
    });
  }
};
function Sa(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function pt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Sa(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Sa(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var O = pt(pt(pt(pt({}, no), ao), uo), Lo), wt = /* @__PURE__ */ new WeakMap(), Wo = (r) => wt.get(r) || !1, zo = (r, e, t) => {
  var n = wt.get(r) || !1;
  wt.set(r, !0);
  try {
    e(), t();
  } finally {
    wt.set(r, n);
  }
};
function Nu(r, e, t) {
  var n = Rt.get(r) || [], a = jt.get(r) || /* @__PURE__ */ new Set(), u, i, l = (D) => {
    if (D) {
      var g = D.join(",");
      i.has(g) || (i.add(g), u.push(D));
    }
  };
  if (t) {
    u = [], i = /* @__PURE__ */ new Set();
    for (var f of n) {
      var c = t(f);
      l(c);
    }
  } else
    u = n, i = a;
  for (var v of e)
    l(v);
  Rt.set(r, u), jt.set(r, i);
}
var Vo = (r, e) => {
  for (var t of s.pathRefs(r))
    Js.transform(t, e);
  for (var n of s.pointRefs(r))
    Zs.transform(n, e);
  for (var a of s.rangeRefs(r))
    Qs.transform(a, e);
  if (!Wo(r)) {
    var u = h.operationCanTransformPath(e) ? (i) => h.transform(i, e) : void 0;
    Nu(r, r.getDirtyPaths(e), u);
  }
  O.transform(r, e), r.operations.push(e), s.normalize(r, {
    operation: e
  }), e.type === "set_selection" && (r.marks = null), tt.get(r) || (tt.set(r, !0), Promise.resolve().then(() => {
    tt.set(r, !1), r.onChange({
      operation: e
    }), r.operations = [];
  }));
}, Ho = (r, e) => {
  switch (e.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: t
      } = e;
      return h.levels(t);
    }
    case "insert_node": {
      var {
        node: n,
        path: a
      } = e, u = h.levels(a), i = H.isText(n) ? [] : Array.from(j.nodes(n), (z) => {
        var [, G] = z;
        return a.concat(G);
      });
      return [...u, ...i];
    }
    case "merge_node": {
      var {
        path: l
      } = e, f = h.ancestors(l), c = h.previous(l);
      return [...f, c];
    }
    case "move_node": {
      var {
        path: v,
        newPath: D
      } = e;
      if (h.equals(v, D))
        return [];
      var g = [], C = [];
      for (var m of h.ancestors(v)) {
        var o = h.transform(m, e);
        g.push(o);
      }
      for (var B of h.ancestors(D)) {
        var A = h.transform(B, e);
        C.push(A);
      }
      var b = C[C.length - 1], P = D[D.length - 1], R = b.concat(P);
      return [...g, ...C, R];
    }
    case "remove_node": {
      var {
        path: k
      } = e, L = h.ancestors(k);
      return [...L];
    }
    case "split_node": {
      var {
        path: W
      } = e, K = h.levels(W), M = h.next(W);
      return [...K, M];
    }
    default:
      return [];
  }
}, qo = (r) => {
  var {
    selection: e
  } = r;
  return e ? j.fragment(r, e) : [];
}, Ko = (r, e) => {
  var [t, n] = e;
  if (!H.isText(t)) {
    if (q.isElement(t) && t.children.length === 0) {
      var a = {
        text: ""
      };
      O.insertNodes(r, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var u = s.isEditor(t) ? !1 : q.isElement(t) && (r.isInline(t) || t.children.length === 0 || H.isText(t.children[0]) || r.isInline(t.children[0])), i = 0, l = 0; l < t.children.length; l++, i++) {
      var f = j.get(r, n);
      if (!H.isText(f)) {
        var c = f.children[i], v = f.children[i - 1], D = l === t.children.length - 1, g = H.isText(c) || q.isElement(c) && r.isInline(c);
        if (g !== u)
          O.removeNodes(r, {
            at: n.concat(i),
            voids: !0
          }), i--;
        else if (q.isElement(c)) {
          if (r.isInline(c)) {
            if (v == null || !H.isText(v)) {
              var C = {
                text: ""
              };
              O.insertNodes(r, C, {
                at: n.concat(i),
                voids: !0
              }), i++;
            } else if (D) {
              var m = {
                text: ""
              };
              O.insertNodes(r, m, {
                at: n.concat(i + 1),
                voids: !0
              }), i++;
            }
          }
        } else
          v != null && H.isText(v) && (H.equals(c, v, {
            loose: !0
          }) ? (O.mergeNodes(r, {
            at: n.concat(i),
            voids: !0
          }), i--) : v.text === "" ? (O.removeNodes(r, {
            at: n.concat(i - 1),
            voids: !0
          }), i--) : c.text === "" && (O.removeNodes(r, {
            at: n.concat(i),
            voids: !0
          }), i--));
      }
    }
  }
}, Uo = (r, e) => {
  var {
    iteration: t,
    initialDirtyPathsLength: n
  } = e, a = n * 42;
  if (t > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, Yo = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: n = !1,
    mode: a = "lowest",
    at: u = e.selection,
    match: i
  } = t;
  if (u) {
    var l = s.path(e, u), f = a === "lowest";
    for (var [c, v] of s.levels(e, {
      at: l,
      voids: n,
      match: i,
      reverse: f
    }))
      if (!H.isText(c)) {
        if (E.isRange(u)) {
          if (h.isAncestor(v, u.anchor.path) && h.isAncestor(v, u.focus.path))
            return [c, v];
        } else if (!h.equals(l, v))
          return [c, v];
      }
  }
};
function Ta(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ra(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ta(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ta(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Go = (r, e, t) => {
  var {
    selection: n
  } = r;
  if (n) {
    var a = (D, g) => {
      if (!H.isText(D))
        return !1;
      var [C, m] = s.parent(r, g);
      return !r.isVoid(C) || r.markableVoid(C);
    }, u = E.isExpanded(n), i = !1;
    if (!u) {
      var [l, f] = s.node(r, n);
      if (l && a(l, f)) {
        var [c] = s.parent(r, f);
        i = c && r.markableVoid(c);
      }
    }
    if (u || i)
      O.setNodes(r, {
        [e]: t
      }, {
        match: a,
        split: !0,
        voids: !0
      });
    else {
      var v = Ra(Ra({}, s.marks(r) || {}), {}, {
        [e]: t
      });
      r.marks = v, tt.get(r) || r.onChange();
    }
  }
};
function ja(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Na(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ja(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ja(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var _o = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.point(e, t, {
    edge: "end"
  }), u = s.end(e, []), i = {
    anchor: a,
    focus: u
  }, {
    distance: l = 1
  } = n, f = 0, c;
  for (var v of s.positions(e, Na(Na({}, n), {}, {
    at: i
  }))) {
    if (f > l)
      break;
    f !== 0 && (c = v), f++;
  }
  return c;
};
function Ma(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ia(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ma(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ma(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Xo = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.start(e, []), u = s.point(e, t, {
    edge: "start"
  }), i = {
    anchor: a,
    focus: u
  }, {
    distance: l = 1
  } = n, f = 0, c;
  for (var v of s.positions(e, Ia(Ia({}, n), {}, {
    at: i,
    reverse: !0
  }))) {
    if (f > l)
      break;
    f !== 0 && (c = v), f++;
  }
  return c;
}, Jo = (r, e) => {
  var {
    selection: t
  } = r;
  t && E.isCollapsed(t) && O.delete(r, {
    unit: e,
    reverse: !0
  });
}, Zo = (r, e) => {
  var {
    selection: t
  } = r;
  t && E.isCollapsed(t) && O.delete(r, {
    unit: e
  });
}, Qo = function(e) {
  var {
    direction: t = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = e;
  n && E.isExpanded(n) && O.delete(e, {
    reverse: t === "backward"
  });
}, el = (r, e) => [s.start(r, e), s.end(r, e)];
function ka(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function $a(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ka(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ka(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var rl = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return s.above(e, $a($a({}, t), {}, {
    match: (n) => q.isElement(n) && s.isElementReadOnly(e, n)
  }));
}, tl = (r, e) => s.point(r, e, {
  edge: "end"
}), nl = (r, e) => {
  var t = s.path(r, e, {
    edge: "start"
  });
  return s.node(r, t);
}, al = (r, e) => {
  var t = s.range(r, e);
  return j.fragment(r, t);
};
function La(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Wa(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? La(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : La(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var ul = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return s.above(e, Wa(Wa({}, t), {}, {
    match: (n) => q.isElement(n) && s.isVoid(e, n)
  }));
}, il = (r, e) => e.children.some((t) => q.isElement(t) && s.isBlock(r, t)), sl = (r, e) => e.children.some((t) => H.isText(t) || s.isInline(r, t)), ol = (r, e) => j.has(r, e), ll = (r, e) => e.children.every((t) => H.isText(t)), fl = (r) => {
  O.splitNodes(r, {
    always: !0
  });
}, cl = (r, e, t) => {
  O.insertNodes(r, e, t);
}, vl = (r) => {
  O.splitNodes(r, {
    always: !0
  });
};
function za(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function dl(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? za(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : za(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var hl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: u
  } = e;
  if (a) {
    if (u) {
      var i = dl({
        text: t
      }, u);
      O.insertNodes(e, i, {
        at: n.at,
        voids: n.voids
      });
    } else
      O.insertText(e, t, n);
    e.marks = null;
  }
}, Dl = (r, e) => !r.isInline(e), gl = (r, e, t) => s.isStart(r, e, t) || s.isEnd(r, e, t), ml = (r, e) => {
  var {
    children: t
  } = e, [n] = t;
  return t.length === 0 || t.length === 1 && H.isText(n) && n.text === "" && !r.isVoid(e);
}, pl = (r, e, t) => {
  var n = s.end(r, t);
  return te.equals(e, n);
}, Cl = (r) => {
  var e = Ru.get(r);
  return e === void 0 ? !0 : e;
}, Bl = (r, e, t) => {
  if (e.offset !== 0)
    return !1;
  var n = s.start(r, t);
  return te.equals(e, n);
}, El = (r, e) => {
  var t = s.path(r, e, {
    edge: "end"
  });
  return s.node(r, t);
}, Al = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.path(e, t, n), u = j.leaf(e, a);
  return [u, a];
};
function bl(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: t = r.selection,
      reverse: n = !1,
      voids: a = !1
    } = e, {
      match: u
    } = e;
    if (u == null && (u = () => !0), !!t) {
      var i = [], l = s.path(r, t);
      for (var [f, c] of j.levels(r, l))
        if (u(f, c) && (i.push([f, c]), !a && q.isElement(f) && s.isVoid(r, f)))
          break;
      n && i.reverse(), yield* i;
    }
  }();
}
var Fl = ["text"], wl = ["text"], yl = function(e) {
  var {
    marks: t,
    selection: n
  } = e;
  if (!n)
    return null;
  var {
    anchor: a,
    focus: u
  } = n;
  if (t)
    return t;
  if (E.isExpanded(n)) {
    var i = s.isEnd(e, a, a.path);
    if (i) {
      var l = s.after(e, a);
      l && (a = l);
    }
    var [f] = s.nodes(e, {
      match: H.isText,
      at: {
        anchor: a,
        focus: u
      }
    });
    if (f) {
      var [c] = f, v = vr(c, Fl);
      return v;
    } else
      return {};
  }
  var {
    path: D
  } = a, [g] = s.leaf(e, D);
  if (a.offset === 0) {
    var C = s.previous(e, {
      at: D,
      match: H.isText
    }), m = s.above(e, {
      match: (R) => q.isElement(R) && s.isVoid(e, R) && e.markableVoid(R)
    });
    if (!m) {
      var o = s.above(e, {
        match: (R) => q.isElement(R) && s.isBlock(e, R)
      });
      if (C && o) {
        var [B, A] = C, [, b] = o;
        h.isAncestor(b, A) && (g = B);
      }
    }
  }
  var P = vr(g, wl);
  return P;
}, Ol = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = t, {
    match: u,
    at: i = e.selection
  } = t;
  if (i) {
    var l = s.after(e, i, {
      voids: a
    });
    if (l) {
      var [, f] = s.last(e, []), c = [l.path, f];
      if (h.isPath(i) && i.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (u == null)
        if (h.isPath(i)) {
          var [v] = s.parent(e, i);
          u = (g) => v.children.includes(g);
        } else
          u = () => !0;
      var [D] = s.nodes(e, {
        at: c,
        match: u,
        mode: n,
        voids: a
      });
      return D;
    }
  }
}, xl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.path(e, t, n), u = j.get(e, a);
  return [u, a];
};
function Pl(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: t = r.selection,
      mode: n = "all",
      universal: a = !1,
      reverse: u = !1,
      voids: i = !1,
      ignoreNonSelectable: l = !1
    } = e, {
      match: f
    } = e;
    if (f || (f = () => !0), !!t) {
      var c, v;
      if (vo.isSpan(t))
        c = t[0], v = t[1];
      else {
        var D = s.path(r, t, {
          edge: "start"
        }), g = s.path(r, t, {
          edge: "end"
        });
        c = u ? g : D, v = u ? D : g;
      }
      var C = j.nodes(r, {
        reverse: u,
        from: c,
        to: v,
        pass: (R) => {
          var [k] = R;
          return q.isElement(k) ? !!(!i && (s.isVoid(r, k) || s.isElementReadOnly(r, k)) || l && !s.isSelectable(r, k)) : !1;
        }
      }), m = [], o;
      for (var [B, A] of C)
        if (!(l && q.isElement(B) && !s.isSelectable(r, B))) {
          var b = o && h.compare(A, o[1]) === 0;
          if (!(n === "highest" && b)) {
            if (!f(B, A)) {
              if (a && !b && H.isText(B))
                return;
              continue;
            }
            if (n === "lowest" && b) {
              o = [B, A];
              continue;
            }
            var P = n === "lowest" ? o : [B, A];
            P && (a ? m.push(P) : yield P), o = [B, A];
          }
        }
      n === "lowest" && o && (a ? m.push(o) : yield o), a && (yield* m);
    }
  }();
}
var Sl = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = t, u = (v) => Rt.get(v) || [], i = (v) => jt.get(v) || /* @__PURE__ */ new Set(), l = (v) => {
    var D = u(v).pop(), g = D.join(",");
    return i(v).delete(g), D;
  };
  if (s.isNormalizing(e)) {
    if (n) {
      var f = Array.from(j.nodes(e), (v) => {
        var [, D] = v;
        return D;
      }), c = new Set(f.map((v) => v.join(",")));
      Rt.set(e, f), jt.set(e, c);
    }
    u(e).length !== 0 && s.withoutNormalizing(e, () => {
      for (var v of u(e))
        if (j.has(e, v)) {
          var D = s.node(e, v), [g, C] = D;
          q.isElement(g) && g.children.length === 0 && e.normalizeNode(D, {
            operation: a
          });
        }
      for (var m = u(e), o = m.length, B = 0; m.length !== 0; ) {
        if (!e.shouldNormalize({
          dirtyPaths: m,
          iteration: B,
          initialDirtyPathsLength: o,
          operation: a
        }))
          return;
        var A = l(e);
        if (j.has(e, A)) {
          var b = s.node(e, A);
          e.normalizeNode(b, {
            operation: a
          });
        }
        B++, m = u(e);
      }
    });
  }
}, Tl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = s.path(e, t, n), u = h.parent(a), i = s.node(e, u);
  return i;
}, Rl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, u = {
    current: t,
    affinity: a,
    unref() {
      var {
        current: l
      } = u, f = s.pathRefs(e);
      return f.delete(u), u.current = null, l;
    }
  }, i = s.pathRefs(e);
  return i.add(u), u;
}, jl = (r) => {
  var e = ga.get(r);
  return e || (e = /* @__PURE__ */ new Set(), ga.set(r, e)), e;
}, Nl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: u
  } = n;
  if (h.isPath(t)) {
    if (u === "start") {
      var [, i] = j.first(e, t);
      t = i;
    } else if (u === "end") {
      var [, l] = j.last(e, t);
      t = l;
    }
  }
  return E.isRange(t) && (u === "start" ? t = E.start(t) : u === "end" ? t = E.end(t) : t = h.common(t.anchor.path, t.focus.path)), te.isPoint(t) && (t = t.path), a != null && (t = t.slice(0, a)), t;
}, Ml = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, u = {
    current: t,
    affinity: a,
    unref() {
      var {
        current: l
      } = u, f = s.pointRefs(e);
      return f.delete(u), u.current = null, l;
    }
  }, i = s.pointRefs(e);
  return i.add(u), u;
}, Il = (r) => {
  var e = ma.get(r);
  return e || (e = /* @__PURE__ */ new Set(), ma.set(r, e)), e;
}, kl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (h.isPath(t)) {
    var u;
    if (a === "end") {
      var [, i] = j.last(e, t);
      u = i;
    } else {
      var [, l] = j.first(e, t);
      u = l;
    }
    var f = j.get(e, u);
    if (!H.isText(f))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(t, "] because it has no ").concat(a, " text node."));
    return {
      path: u,
      offset: a === "end" ? f.text.length : 0
    };
  }
  if (E.isRange(t)) {
    var [c, v] = E.edges(t);
    return a === "start" ? c : v;
  }
  return t;
};
function $l(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: t = r.selection,
      unit: n = "offset",
      reverse: a = !1,
      voids: u = !1,
      ignoreNonSelectable: i = !1
    } = e;
    if (!t)
      return;
    var l = s.range(r, t), [f, c] = E.edges(l), v = a ? c : f, D = !1, g = "", C = 0, m = 0, o = 0;
    for (var [B, A] of s.nodes(r, {
      at: t,
      reverse: a,
      voids: u,
      ignoreNonSelectable: i
    })) {
      if (q.isElement(B)) {
        if (!u && (r.isVoid(B) || r.isElementReadOnly(B))) {
          yield s.start(r, A);
          continue;
        }
        if (r.isInline(B))
          continue;
        if (s.hasInlines(r, B)) {
          var b = h.isAncestor(A, c.path) ? c : s.end(r, A), P = h.isAncestor(A, f.path) ? f : s.start(r, A);
          g = s.string(r, {
            anchor: P,
            focus: b
          }, {
            voids: u
          }), D = !0;
        }
      }
      if (H.isText(B)) {
        var R = h.equals(A, v.path);
        for (R ? (m = a ? v.offset : B.text.length - v.offset, o = v.offset) : (m = B.text.length, o = a ? m : 0), (R || D || n === "offset") && (yield {
          path: A,
          offset: o
        }, D = !1); ; ) {
          if (C === 0) {
            if (g === "")
              break;
            C = k(g, n, a), g = Mn(g, C, a)[1];
          }
          if (o = a ? o - C : o + C, m = m - C, m < 0) {
            C = -m;
            break;
          }
          C = 0, yield {
            path: A,
            offset: o
          };
        }
      }
    }
    function k(L, W, K) {
      return W === "character" ? Nn(L, K) : W === "word" ? Co(L, K) : W === "line" || W === "block" ? L.length : 1;
    }
  }();
}
var Ll = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = t, {
    match: u,
    at: i = e.selection
  } = t;
  if (i) {
    var l = s.before(e, i, {
      voids: a
    });
    if (l) {
      var [, f] = s.first(e, []), c = [l.path, f];
      if (h.isPath(i) && i.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (u == null)
        if (h.isPath(i)) {
          var [v] = s.parent(e, i);
          u = (g) => v.children.includes(g);
        } else
          u = () => !0;
      var [D] = s.nodes(e, {
        reverse: !0,
        at: c,
        match: u,
        mode: n,
        voids: a
      });
      return D;
    }
  }
}, Wl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, u = {
    current: t,
    affinity: a,
    unref() {
      var {
        current: l
      } = u, f = s.rangeRefs(e);
      return f.delete(u), u.current = null, l;
    }
  }, i = s.rangeRefs(e);
  return i.add(u), u;
}, zl = (r) => {
  var e = pa.get(r);
  return e || (e = /* @__PURE__ */ new Set(), pa.set(r, e)), e;
}, Vl = (r, e, t) => {
  if (E.isRange(e) && !t)
    return e;
  var n = s.start(r, e), a = s.end(r, t || e);
  return {
    anchor: n,
    focus: a
  };
};
function Va(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Hl(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Va(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Va(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var ql = (r, e) => {
  var {
    selection: t
  } = r;
  if (t) {
    var n = (v, D) => {
      if (!H.isText(v))
        return !1;
      var [g, C] = s.parent(r, D);
      return !r.isVoid(g) || r.markableVoid(g);
    }, a = E.isExpanded(t), u = !1;
    if (!a) {
      var [i, l] = s.node(r, t);
      if (i && n(i, l)) {
        var [f] = s.parent(r, l);
        u = f && r.markableVoid(f);
      }
    }
    if (a || u)
      O.unsetNodes(r, e, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var c = Hl({}, s.marks(r) || {});
      delete c[e], r.marks = c, tt.get(r) || r.onChange();
    }
  }
}, Kl = (r, e) => {
  Ru.set(r, e);
}, Ul = (r, e) => s.point(r, e, {
  edge: "start"
}), Yl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, u = s.range(e, t), [i, l] = E.edges(u), f = "";
  for (var [c, v] of s.nodes(e, {
    at: u,
    match: H.isText,
    voids: a
  })) {
    var D = c.text;
    h.equals(v, l.path) && (D = D.slice(0, l.offset)), h.equals(v, i.path) && (D = D.slice(i.offset)), f += D;
  }
  return f;
}, Gl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [u, i] = E.edges(t);
  if (u.offset !== 0 || i.offset !== 0 || E.isCollapsed(t) || h.hasPrevious(i.path))
    return t;
  var l = s.above(e, {
    at: i,
    match: (m) => q.isElement(m) && s.isBlock(e, m),
    voids: a
  }), f = l ? l[1] : [], c = s.start(e, u), v = {
    anchor: c,
    focus: i
  }, D = !0;
  for (var [g, C] of s.nodes(e, {
    at: v,
    match: H.isText,
    reverse: !0,
    voids: a
  })) {
    if (D) {
      D = !1;
      continue;
    }
    if (g.text !== "" || h.isBefore(C, f)) {
      i = {
        path: C,
        offset: g.text.length
      };
      break;
    }
  }
  return {
    anchor: u,
    focus: i
  };
}, _l = (r, e) => {
  var t = s.isNormalizing(r);
  s.setNormalizing(r, !1);
  try {
    e();
  } finally {
    s.setNormalizing(r, t);
  }
  s.normalize(r);
}, Xl = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var n, a, {
      reverse: u = !1,
      unit: i = "character",
      distance: l = 1,
      voids: f = !1
    } = t, {
      at: c = e.selection,
      hanging: v = !1
    } = t;
    if (c) {
      var D = !1;
      if (E.isRange(c) && E.isCollapsed(c) && (D = !0, c = c.anchor), te.isPoint(c)) {
        var g = s.void(e, {
          at: c,
          mode: "highest"
        });
        if (!f && g) {
          var [, C] = g;
          c = C;
        } else {
          var m = {
            unit: i,
            distance: l
          }, o = u ? s.before(e, c, m) || s.start(e, []) : s.after(e, c, m) || s.end(e, []);
          c = {
            anchor: c,
            focus: o
          }, v = !0;
        }
      }
      if (h.isPath(c)) {
        O.removeNodes(e, {
          at: c,
          voids: f
        });
        return;
      }
      if (!E.isCollapsed(c)) {
        if (!v) {
          var [, B] = E.edges(c), A = s.end(e, []);
          te.equals(B, A) || (c = s.unhangRange(e, c, {
            voids: f
          }));
        }
        var [b, P] = E.edges(c), R = s.above(e, {
          match: (ae) => q.isElement(ae) && s.isBlock(e, ae),
          at: b,
          voids: f
        }), k = s.above(e, {
          match: (ae) => q.isElement(ae) && s.isBlock(e, ae),
          at: P,
          voids: f
        }), L = R && k && !h.equals(R[1], k[1]), W = h.equals(b.path, P.path), K = f ? null : (n = s.void(e, {
          at: b,
          mode: "highest"
        })) !== null && n !== void 0 ? n : s.elementReadOnly(e, {
          at: b,
          mode: "highest"
        }), M = f ? null : (a = s.void(e, {
          at: P,
          mode: "highest"
        })) !== null && a !== void 0 ? a : s.elementReadOnly(e, {
          at: P,
          mode: "highest"
        });
        if (K) {
          var z = s.before(e, b);
          z && R && h.isAncestor(R[1], z.path) && (b = z);
        }
        if (M) {
          var G = s.after(e, P);
          G && k && h.isAncestor(k[1], G.path) && (P = G);
        }
        var S = [], $;
        for (var T of s.nodes(e, {
          at: c,
          voids: f
        })) {
          var [N, re] = T;
          $ && h.compare(re, $) === 0 || (!f && q.isElement(N) && (s.isVoid(e, N) || s.isElementReadOnly(e, N)) || !h.isCommon(re, b.path) && !h.isCommon(re, P.path)) && (S.push(T), $ = re);
        }
        var U = Array.from(S, (ae) => {
          var [, Ee] = ae;
          return s.pathRef(e, Ee);
        }), fe = s.pointRef(e, b), _ = s.pointRef(e, P), ne = "";
        if (!W && !K) {
          var me = fe.current, [ve] = s.leaf(e, me), {
            path: we
          } = me, {
            offset: p
          } = b, y = ve.text.slice(p);
          y.length > 0 && (e.apply({
            type: "remove_text",
            path: we,
            offset: p,
            text: y
          }), ne = y);
        }
        if (U.reverse().map((ae) => ae.unref()).filter((ae) => ae !== null).forEach((ae) => O.removeNodes(e, {
          at: ae,
          voids: f
        })), !M) {
          var w = _.current, [I] = s.leaf(e, w), {
            path: Q
          } = w, Y = W ? b.offset : 0, ee = I.text.slice(Y, P.offset);
          ee.length > 0 && (e.apply({
            type: "remove_text",
            path: Q,
            offset: Y,
            text: ee
          }), ne = ee);
        }
        !W && L && _.current && fe.current && O.mergeNodes(e, {
          at: _.current,
          hanging: !0,
          voids: f
        }), D && u && i === "character" && ne.length > 1 && ne.match(/[\u0E00-\u0E7F]+/) && O.insertText(e, ne.slice(0, ne.length - l));
        var oe = fe.unref(), ie = _.unref(), ge = u ? oe || ie : ie || oe;
        t.at == null && ge && O.select(e, ge);
      }
    }
  });
}, Jl = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s.withoutNormalizing(e, () => {
    var {
      hanging: a = !1,
      voids: u = !1
    } = n, {
      at: i = jn(e),
      batchDirty: l = !0
    } = n;
    if (t.length) {
      if (E.isRange(i))
        if (a || (i = s.unhangRange(e, i, {
          voids: u
        })), E.isCollapsed(i))
          i = i.anchor;
        else {
          var [, f] = E.edges(i);
          if (!u && s.void(e, {
            at: f
          }))
            return;
          var c = s.pointRef(e, f);
          O.delete(e, {
            at: i
          }), i = c.unref();
        }
      else
        h.isPath(i) && (i = s.start(e, i));
      if (!(!u && s.void(e, {
        at: i
      }))) {
        var v = s.above(e, {
          at: i,
          match: (y) => q.isElement(y) && s.isInline(e, y),
          mode: "highest",
          voids: u
        });
        if (v) {
          var [, D] = v;
          if (s.isEnd(e, i, D)) {
            var g = s.after(e, D);
            i = g;
          } else if (s.isStart(e, i, D)) {
            var C = s.before(e, D);
            i = C;
          }
        }
        var m = s.above(e, {
          match: (y) => q.isElement(y) && s.isBlock(e, y),
          at: i,
          voids: u
        }), [, o] = m, B = s.isStart(e, i, o), A = s.isEnd(e, i, o), b = B && A, P = !B || B && A, R = !A, [, k] = j.first({
          children: t
        }, []), [, L] = j.last({
          children: t
        }, []), W = [], K = (y) => {
          var [w, I] = y, Q = I.length === 0;
          return Q ? !1 : b ? !0 : !(P && h.isAncestor(I, k) && q.isElement(w) && !e.isVoid(w) && !e.isInline(w) || R && h.isAncestor(I, L) && q.isElement(w) && !e.isVoid(w) && !e.isInline(w));
        };
        for (var M of j.nodes({
          children: t
        }, {
          pass: K
        }))
          K(M) && W.push(M);
        var z = [], G = [], S = [], $ = !0, T = !1;
        for (var [N] of W)
          q.isElement(N) && !e.isInline(N) ? ($ = !1, T = !0, G.push(N)) : $ ? z.push(N) : S.push(N);
        var [re] = s.nodes(e, {
          at: i,
          match: (y) => H.isText(y) || s.isInline(e, y),
          mode: "highest",
          voids: u
        }), [, U] = re, fe = s.isStart(e, i, U), _ = s.isEnd(e, i, U), ne = s.pathRef(e, A && !S.length ? h.next(o) : o), me = s.pathRef(e, _ ? h.next(U) : U);
        O.splitNodes(e, {
          at: i,
          match: (y) => T ? q.isElement(y) && s.isBlock(e, y) : H.isText(y) || s.isInline(e, y),
          mode: T ? "lowest" : "highest",
          always: T && (!B || z.length > 0) && (!A || S.length > 0),
          voids: u
        });
        var ve = s.pathRef(e, !fe || fe && _ ? h.next(U) : U);
        if (O.insertNodes(e, z, {
          at: ve.current,
          match: (y) => H.isText(y) || s.isInline(e, y),
          mode: "highest",
          voids: u,
          batchDirty: l
        }), b && !z.length && G.length && !S.length && O.delete(e, {
          at: o,
          voids: u
        }), O.insertNodes(e, G, {
          at: ne.current,
          match: (y) => q.isElement(y) && s.isBlock(e, y),
          mode: "lowest",
          voids: u,
          batchDirty: l
        }), O.insertNodes(e, S, {
          at: me.current,
          match: (y) => H.isText(y) || s.isInline(e, y),
          mode: "highest",
          voids: u,
          batchDirty: l
        }), !n.at) {
          var we;
          if (S.length > 0 && me.current ? we = h.previous(me.current) : G.length > 0 && ne.current ? we = h.previous(ne.current) : ve.current && (we = h.previous(ve.current)), we) {
            var p = s.end(e, we);
            O.select(e, p);
          }
        }
        ve.unref(), ne.unref(), me.unref();
      }
    }
  });
}, Zl = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: n = "anchor"
  } = t, {
    selection: a
  } = e;
  if (a) {
    if (n === "anchor")
      O.select(e, a.anchor);
    else if (n === "focus")
      O.select(e, a.focus);
    else if (n === "start") {
      var [u] = E.edges(a);
      O.select(e, u);
    } else if (n === "end") {
      var [, i] = E.edges(a);
      O.select(e, i);
    }
  } else
    return;
}, Ql = (r) => {
  var {
    selection: e
  } = r;
  e && r.apply({
    type: "set_selection",
    properties: e,
    newProperties: null
  });
}, ef = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = e, {
    distance: a = 1,
    unit: u = "character",
    reverse: i = !1
  } = t, {
    edge: l = null
  } = t;
  if (n) {
    l === "start" && (l = E.isBackward(n) ? "focus" : "anchor"), l === "end" && (l = E.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: f,
      focus: c
    } = n, v = {
      distance: a,
      unit: u,
      ignoreNonSelectable: !0
    }, D = {};
    if (l == null || l === "anchor") {
      var g = i ? s.before(e, f, v) : s.after(e, f, v);
      g && (D.anchor = g);
    }
    if (l == null || l === "focus") {
      var C = i ? s.before(e, c, v) : s.after(e, c, v);
      C && (D.focus = C);
    }
    O.setSelection(e, D);
  }
}, rf = (r, e) => {
  var {
    selection: t
  } = r;
  if (e = s.range(r, e), t) {
    O.setSelection(r, e);
    return;
  }
  if (!E.isRange(e))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Te.stringify(e)));
  r.apply({
    type: "set_selection",
    properties: t,
    newProperties: e
  });
};
function Ha(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function qa(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ha(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ha(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var tf = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a
  } = e, {
    edge: u = "both"
  } = n;
  if (a) {
    u === "start" && (u = E.isBackward(a) ? "focus" : "anchor"), u === "end" && (u = E.isBackward(a) ? "anchor" : "focus");
    var {
      anchor: i,
      focus: l
    } = a, f = u === "anchor" ? i : l;
    O.setSelection(e, {
      [u === "anchor" ? "anchor" : "focus"]: qa(qa({}, f), t)
    });
  }
}, nf = (r, e) => {
  var {
    selection: t
  } = r, n = {}, a = {};
  if (t) {
    for (var u in e)
      (u === "anchor" && e.anchor != null && !te.equals(e.anchor, t.anchor) || u === "focus" && e.focus != null && !te.equals(e.focus, t.focus) || u !== "anchor" && u !== "focus" && e[u] !== t[u]) && (n[u] = t[u], a[u] = e[u]);
    Object.keys(n).length > 0 && r.apply({
      type: "set_selection",
      properties: n,
      newProperties: a
    });
  }
}, af = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s.withoutNormalizing(e, () => {
    var {
      hanging: a = !1,
      voids: u = !1,
      mode: i = "lowest",
      batchDirty: l = !0
    } = n, {
      at: f,
      match: c,
      select: v
    } = n;
    if (j.isNode(t) && (t = [t]), t.length !== 0) {
      var [D] = t;
      if (f || (f = jn(e), v !== !1 && (v = !0)), v == null && (v = !1), E.isRange(f))
        if (a || (f = s.unhangRange(e, f, {
          voids: u
        })), E.isCollapsed(f))
          f = f.anchor;
        else {
          var [, g] = E.edges(f), C = s.pointRef(e, g);
          O.delete(e, {
            at: f
          }), f = C.unref();
        }
      if (te.isPoint(f)) {
        c == null && (H.isText(D) ? c = (z) => H.isText(z) : e.isInline(D) ? c = (z) => H.isText(z) || s.isInline(e, z) : c = (z) => q.isElement(z) && s.isBlock(e, z));
        var [m] = s.nodes(e, {
          at: f.path,
          match: c,
          mode: i,
          voids: u
        });
        if (m) {
          var [, o] = m, B = s.pathRef(e, o), A = s.isEnd(e, f, o);
          O.splitNodes(e, {
            at: f,
            match: c,
            mode: i,
            voids: u
          });
          var b = B.unref();
          f = A ? h.next(b) : b;
        } else
          return;
      }
      var P = h.parent(f), R = f[f.length - 1];
      if (!(!u && s.void(e, {
        at: P
      }))) {
        if (l) {
          var k = [], L = h.levels(P);
          zo(e, () => {
            var z = function() {
              var $ = P.concat(R);
              R++;
              var T = {
                type: "insert_node",
                path: $,
                node: G
              };
              e.apply(T), f = h.next(f), k.push(T), H.isText ? L.push(...Array.from(j.nodes(G), (N) => {
                var [, re] = N;
                return $.concat(re);
              })) : L.push($);
            };
            for (var G of t)
              z();
          }, () => {
            Nu(e, L, (z) => {
              var G = z;
              for (var S of k)
                if (h.operationCanTransformPath(S) && (G = h.transform(G, S), !G))
                  return null;
              return G;
            });
          });
        } else
          for (var W of t) {
            var K = P.concat(R);
            R++, e.apply({
              type: "insert_node",
              path: K,
              node: W
            }), f = h.next(f);
          }
        if (f = h.previous(f), v) {
          var M = s.end(e, f);
          M && O.select(e, M);
        }
      }
    }
  });
}, uf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      at: n = e.selection,
      mode: a = "lowest",
      voids: u = !1
    } = t, {
      match: i
    } = t;
    if (i == null && (i = h.isPath(n) ? Gr(e, n) : (R) => q.isElement(R) && s.isBlock(e, R)), !!n) {
      var l = s.nodes(e, {
        at: n,
        match: i,
        mode: a,
        voids: u
      }), f = Array.from(l, (R) => {
        var [, k] = R;
        return s.pathRef(e, k);
      });
      for (var c of f) {
        var v = c.unref();
        if (v.length < 2)
          throw new Error("Cannot lift node at a path [".concat(v, "] because it has a depth of less than `2`."));
        var D = s.node(e, h.parent(v)), [g, C] = D, m = v[v.length - 1], {
          length: o
        } = g.children;
        if (o === 1) {
          var B = h.next(C);
          O.moveNodes(e, {
            at: v,
            to: B,
            voids: u
          }), O.removeNodes(e, {
            at: C,
            voids: u
          });
        } else if (m === 0)
          O.moveNodes(e, {
            at: v,
            to: C,
            voids: u
          });
        else if (m === o - 1) {
          var A = h.next(C);
          O.moveNodes(e, {
            at: v,
            to: A,
            voids: u
          });
        } else {
          var b = h.next(v), P = h.next(C);
          O.splitNodes(e, {
            at: b,
            voids: u
          }), O.moveNodes(e, {
            at: v,
            to: P,
            voids: u
          });
        }
      }
    }
  });
}, sf = ["text"], of = ["children"], Mu = (r, e) => {
  if (q.isElement(e)) {
    var t = e;
    return s.isVoid(r, e) ? !0 : t.children.length === 1 ? Mu(r, t.children[0]) : !1;
  } else
    return !s.isEditor(e);
}, lf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      match: n,
      at: a = e.selection
    } = t, {
      hanging: u = !1,
      voids: i = !1,
      mode: l = "lowest"
    } = t;
    if (a) {
      if (n == null)
        if (h.isPath(a)) {
          var [f] = s.parent(e, a);
          n = (z) => f.children.includes(z);
        } else
          n = (z) => q.isElement(z) && s.isBlock(e, z);
      if (!u && E.isRange(a) && (a = s.unhangRange(e, a, {
        voids: i
      })), E.isRange(a))
        if (E.isCollapsed(a))
          a = a.anchor;
        else {
          var [, c] = E.edges(a), v = s.pointRef(e, c);
          O.delete(e, {
            at: a
          }), a = v.unref(), t.at == null && O.select(e, a);
        }
      var [D] = s.nodes(e, {
        at: a,
        match: n,
        voids: i,
        mode: l
      }), g = s.previous(e, {
        at: a,
        match: n,
        voids: i,
        mode: l
      });
      if (!(!D || !g)) {
        var [C, m] = D, [o, B] = g;
        if (!(m.length === 0 || B.length === 0)) {
          var A = h.next(B), b = h.common(m, B), P = h.isSibling(m, B), R = Array.from(s.levels(e, {
            at: m
          }), (z) => {
            var [G] = z;
            return G;
          }).slice(b.length).slice(0, -1), k = s.above(e, {
            at: m,
            mode: "highest",
            match: (z) => R.includes(z) && Mu(e, z)
          }), L = k && s.pathRef(e, k[1]), W, K;
          if (H.isText(C) && H.isText(o)) {
            var M = vr(C, sf);
            K = o.text.length, W = M;
          } else if (q.isElement(C) && q.isElement(o)) {
            var M = vr(C, of);
            K = o.children.length, W = M;
          } else
            throw new Error("Cannot merge the node at path [".concat(m, "] with the previous sibling because it is not the same kind: ").concat(Te.stringify(C), " ").concat(Te.stringify(o)));
          P || O.moveNodes(e, {
            at: m,
            to: A,
            voids: i
          }), L && O.removeNodes(e, {
            at: L.current,
            voids: i
          }), q.isElement(o) && s.isEmpty(e, o) || H.isText(o) && o.text === "" && B[B.length - 1] !== 0 ? O.removeNodes(e, {
            at: B,
            voids: i
          }) : e.apply({
            type: "merge_node",
            path: A,
            position: K,
            properties: W
          }), L && L.unref();
        }
      }
    }
  });
}, ff = (r, e) => {
  s.withoutNormalizing(r, () => {
    var {
      to: t,
      at: n = r.selection,
      mode: a = "lowest",
      voids: u = !1
    } = e, {
      match: i
    } = e;
    if (n) {
      i == null && (i = h.isPath(n) ? Gr(r, n) : (C) => q.isElement(C) && s.isBlock(r, C));
      var l = s.pathRef(r, t), f = s.nodes(r, {
        at: n,
        match: i,
        mode: a,
        voids: u
      }), c = Array.from(f, (C) => {
        var [, m] = C;
        return s.pathRef(r, m);
      });
      for (var v of c) {
        var D = v.unref(), g = l.current;
        D.length !== 0 && r.apply({
          type: "move_node",
          path: D,
          newPath: g
        }), l.current && h.isSibling(g, D) && h.isAfter(g, D) && (l.current = h.next(l.current));
      }
      l.unref();
    }
  });
}, cf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: u = "lowest"
    } = t, {
      at: i = e.selection,
      match: l
    } = t;
    if (i) {
      l == null && (l = h.isPath(i) ? Gr(e, i) : (C) => q.isElement(C) && s.isBlock(e, C)), !n && E.isRange(i) && (i = s.unhangRange(e, i, {
        voids: a
      }));
      var f = s.nodes(e, {
        at: i,
        match: l,
        mode: u,
        voids: a
      }), c = Array.from(f, (C) => {
        var [, m] = C;
        return s.pathRef(e, m);
      });
      for (var v of c) {
        var D = v.unref();
        if (D) {
          var [g] = s.node(e, D);
          e.apply({
            type: "remove_node",
            path: D,
            node: g
          });
        }
      }
    }
  });
}, vf = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s.withoutNormalizing(e, () => {
    var {
      match: a,
      at: u = e.selection,
      compare: i,
      merge: l
    } = n, {
      hanging: f = !1,
      mode: c = "lowest",
      split: v = !1,
      voids: D = !1
    } = n;
    if (u) {
      if (a == null && (a = h.isPath(u) ? Gr(e, u) : (K) => q.isElement(K) && s.isBlock(e, K)), !f && E.isRange(u) && (u = s.unhangRange(e, u, {
        voids: D
      })), v && E.isRange(u)) {
        if (E.isCollapsed(u) && s.leaf(e, u.anchor)[0].text.length > 0)
          return;
        var g = s.rangeRef(e, u, {
          affinity: "inward"
        }), [C, m] = E.edges(u), o = c === "lowest" ? "lowest" : "highest", B = s.isEnd(e, m, m.path);
        O.splitNodes(e, {
          at: m,
          match: a,
          mode: o,
          voids: D,
          always: !B
        });
        var A = s.isStart(e, C, C.path);
        O.splitNodes(e, {
          at: C,
          match: a,
          mode: o,
          voids: D,
          always: !A
        }), u = g.unref(), n.at == null && O.select(e, u);
      }
      i || (i = (K, M) => K !== M);
      for (var [b, P] of s.nodes(e, {
        at: u,
        match: a,
        mode: c,
        voids: D
      })) {
        var R = {}, k = {};
        if (P.length !== 0) {
          var L = !1;
          for (var W in t)
            W === "children" || W === "text" || i(t[W], b[W]) && (L = !0, b.hasOwnProperty(W) && (R[W] = b[W]), l ? t[W] != null && (k[W] = l(b[W], t[W])) : t[W] != null && (k[W] = t[W]));
          L && e.apply({
            type: "set_node",
            path: P,
            properties: R,
            newProperties: k
          });
        }
      }
    }
  });
}, df = (r, e) => {
  if (E.isCollapsed(e))
    return e.anchor;
  var [, t] = E.edges(e), n = s.pointRef(r, t);
  return O.delete(r, {
    at: e
  }), n.unref();
}, hf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      voids: a = !1
    } = t, {
      match: u,
      at: i = e.selection,
      height: l = 0,
      always: f = !1
    } = t;
    if (u == null && (u = (_) => q.isElement(_) && s.isBlock(e, _)), E.isRange(i) && (i = df(e, i)), h.isPath(i)) {
      var c = i, v = s.point(e, c), [D] = s.parent(e, c);
      u = (_) => _ === D, l = v.path.length - c.length + 1, i = v, f = !0;
    }
    if (i) {
      var g = s.pointRef(e, i, {
        affinity: "backward"
      }), C;
      try {
        var [m] = s.nodes(e, {
          at: i,
          match: u,
          mode: n,
          voids: a
        });
        if (!m)
          return;
        var o = s.void(e, {
          at: i,
          mode: "highest"
        }), B = 0;
        if (!a && o) {
          var [A, b] = o;
          if (q.isElement(A) && e.isInline(A)) {
            var P = s.after(e, b);
            if (!P) {
              var R = {
                text: ""
              }, k = h.next(b);
              O.insertNodes(e, R, {
                at: k,
                voids: a
              }), P = s.point(e, k);
            }
            i = P, f = !0;
          }
          var L = i.path.length - b.length;
          l = L + 1, f = !0;
        }
        C = s.pointRef(e, i);
        var W = i.path.length - l, [, K] = m, M = i.path.slice(0, W), z = l === 0 ? i.offset : i.path[W] + B;
        for (var [G, S] of s.levels(e, {
          at: M,
          reverse: !0,
          voids: a
        })) {
          var $ = !1;
          if (S.length < K.length || S.length === 0 || !a && q.isElement(G) && s.isVoid(e, G))
            break;
          var T = g.current, N = s.isEnd(e, T, S);
          if (f || !g || !s.isEdge(e, T, S)) {
            $ = !0;
            var re = j.extractProps(G);
            e.apply({
              type: "split_node",
              path: S,
              position: z,
              properties: re
            });
          }
          z = S[S.length - 1] + ($ || N ? 1 : 0);
        }
        if (t.at == null) {
          var U = C.current || s.end(e, []);
          O.select(e, U);
        }
      } finally {
        var fe;
        g.unref(), (fe = C) === null || fe === void 0 || fe.unref();
      }
    }
  });
}, Df = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(t) || (t = [t]);
  var a = {};
  for (var u of t)
    a[u] = null;
  O.setNodes(e, a, n);
}, gf = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  s.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: u = !1
    } = t, {
      at: i = e.selection,
      match: l
    } = t;
    if (i) {
      l == null && (l = h.isPath(i) ? Gr(e, i) : (C) => q.isElement(C) && s.isBlock(e, C)), h.isPath(i) && (i = s.range(e, i));
      var f = E.isRange(i) ? s.rangeRef(e, i) : null, c = s.nodes(e, {
        at: i,
        match: l,
        mode: n,
        voids: u
      }), v = Array.from(
        c,
        (C) => {
          var [, m] = C;
          return s.pathRef(e, m);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), D = function() {
        var m = g.unref(), [o] = s.node(e, m), B = s.range(e, m);
        a && f && (B = E.intersection(f.current, B)), O.liftNodes(e, {
          at: B,
          match: (A) => q.isAncestor(o) && o.children.includes(A),
          voids: u
        });
      };
      for (var g of v)
        D();
      f && f.unref();
    }
  });
};
function Ka(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Ua(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ka(Object(t), !0).forEach(function(n) {
      $e(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Ka(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var mf = function(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  s.withoutNormalizing(e, () => {
    var {
      mode: a = "lowest",
      split: u = !1,
      voids: i = !1
    } = n, {
      match: l,
      at: f = e.selection
    } = n;
    if (f) {
      if (l == null && (h.isPath(f) ? l = Gr(e, f) : e.isInline(t) ? l = (B) => q.isElement(B) && s.isInline(e, B) || H.isText(B) : l = (B) => q.isElement(B) && s.isBlock(e, B)), u && E.isRange(f)) {
        var [c, v] = E.edges(f), D = s.rangeRef(e, f, {
          affinity: "inward"
        });
        O.splitNodes(e, {
          at: v,
          match: l,
          voids: i
        }), O.splitNodes(e, {
          at: c,
          match: l,
          voids: i
        }), f = D.unref(), n.at == null && O.select(e, f);
      }
      var g = Array.from(s.nodes(e, {
        at: f,
        match: e.isInline(t) ? (B) => q.isElement(B) && s.isBlock(e, B) : (B) => s.isEditor(B),
        mode: "lowest",
        voids: i
      })), C = function() {
        var A = E.isRange(f) ? E.intersection(f, s.range(e, o)) : f;
        if (!A)
          return 0;
        var b = Array.from(s.nodes(e, {
          at: A,
          match: l,
          mode: a,
          voids: i
        }));
        if (b.length > 0) {
          var [P] = b, R = b[b.length - 1], [, k] = P, [, L] = R;
          if (k.length === 0 && L.length === 0)
            return 0;
          var W = h.equals(k, L) ? h.parent(k) : h.common(k, L), K = s.range(e, k, L), M = s.node(e, W), [z] = M, G = W.length + 1, S = h.next(L.slice(0, G)), $ = Ua(Ua({}, t), {}, {
            children: []
          });
          O.insertNodes(e, $, {
            at: S,
            voids: i
          }), O.moveNodes(e, {
            at: K,
            match: (T) => q.isAncestor(z) && z.children.includes(T),
            to: S.concat(0),
            voids: i
          });
        }
      }, m;
      for (var [, o] of g)
        m = C();
    }
  });
}, pf = () => {
  var r = {
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
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Vo(r, ...n);
    },
    // Editor
    addMark: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Go(r, ...n);
    },
    deleteBackward: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Jo(r, ...n);
    },
    deleteForward: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Zo(r, ...n);
    },
    deleteFragment: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Qo(r, ...n);
    },
    getFragment: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return qo(r, ...n);
    },
    insertBreak: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return fl(r, ...n);
    },
    insertSoftBreak: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return vl(r, ...n);
    },
    insertFragment: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Jl(r, ...n);
    },
    insertNode: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return cl(r, ...n);
    },
    insertText: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return hl(r, ...n);
    },
    normalizeNode: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ko(r, ...n);
    },
    removeMark: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ql(r, ...n);
    },
    getDirtyPaths: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ho(r, ...n);
    },
    shouldNormalize: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Uo(r, ...n);
    },
    // Editor interface
    above: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Yo(r, ...n);
    },
    after: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return _o(r, ...n);
    },
    before: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Xo(r, ...n);
    },
    collapse: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Zl(r, ...n);
    },
    delete: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Xl(r, ...n);
    },
    deselect: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ql(r, ...n);
    },
    edges: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return el(r, ...n);
    },
    elementReadOnly: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return rl(r, ...n);
    },
    end: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return tl(r, ...n);
    },
    first: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return nl(r, ...n);
    },
    fragment: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return al(r, ...n);
    },
    getMarks: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return yl(r, ...n);
    },
    hasBlocks: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return il(r, ...n);
    },
    hasInlines: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return sl(r, ...n);
    },
    hasPath: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ol(r, ...n);
    },
    hasTexts: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ll(r, ...n);
    },
    insertNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return af(r, ...n);
    },
    isBlock: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Dl(r, ...n);
    },
    isEdge: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return gl(r, ...n);
    },
    isEmpty: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ml(r, ...n);
    },
    isEnd: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return pl(r, ...n);
    },
    isNormalizing: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Cl(r, ...n);
    },
    isStart: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Bl(r, ...n);
    },
    last: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return El(r, ...n);
    },
    leaf: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Al(r, ...n);
    },
    levels: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return bl(r, ...n);
    },
    liftNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return uf(r, ...n);
    },
    mergeNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return lf(r, ...n);
    },
    move: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ef(r, ...n);
    },
    moveNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ff(r, ...n);
    },
    next: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ol(r, ...n);
    },
    node: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return xl(r, ...n);
    },
    nodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Pl(r, ...n);
    },
    normalize: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Sl(r, ...n);
    },
    parent: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Tl(r, ...n);
    },
    path: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Nl(r, ...n);
    },
    pathRef: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Rl(r, ...n);
    },
    pathRefs: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return jl(r, ...n);
    },
    point: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return kl(r, ...n);
    },
    pointRef: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ml(r, ...n);
    },
    pointRefs: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Il(r, ...n);
    },
    positions: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return $l(r, ...n);
    },
    previous: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ll(r, ...n);
    },
    range: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Vl(r, ...n);
    },
    rangeRef: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Wl(r, ...n);
    },
    rangeRefs: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return zl(r, ...n);
    },
    removeNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return cf(r, ...n);
    },
    select: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return rf(r, ...n);
    },
    setNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return vf(r, ...n);
    },
    setNormalizing: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Kl(r, ...n);
    },
    setPoint: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return tf(r, ...n);
    },
    setSelection: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return nf(r, ...n);
    },
    splitNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return hf(r, ...n);
    },
    start: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Ul(r, ...n);
    },
    string: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Yl(r, ...n);
    },
    unhangRange: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Gl(r, ...n);
    },
    unsetNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return Df(r, ...n);
    },
    unwrapNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return gf(r, ...n);
    },
    void: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return ul(r, ...n);
    },
    withoutNormalizing: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return _l(r, ...n);
    },
    wrapNodes: function() {
      for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++)
        n[a] = arguments[a];
      return mf(r, ...n);
    }
  };
  return r;
}, Tr = [], Cf = function() {
  return Tr.some(function(r) {
    return r.activeTargets.length > 0;
  });
}, Bf = function() {
  return Tr.some(function(r) {
    return r.skippedTargets.length > 0;
  });
}, Ya = "ResizeObserver loop completed with undelivered notifications.", Ef = function() {
  var r;
  typeof ErrorEvent == "function" ? r = new ErrorEvent("error", {
    message: Ya
  }) : (r = document.createEvent("Event"), r.initEvent("error", !1, !1), r.message = Ya), window.dispatchEvent(r);
}, lt;
(function(r) {
  r.BORDER_BOX = "border-box", r.CONTENT_BOX = "content-box", r.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(lt || (lt = {}));
var Rr = function(r) {
  return Object.freeze(r);
}, Af = /* @__PURE__ */ function() {
  function r(e, t) {
    this.inlineSize = e, this.blockSize = t, Rr(this);
  }
  return r;
}(), Iu = function() {
  function r(e, t, n, a) {
    return this.x = e, this.y = t, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Rr(this);
  }
  return r.prototype.toJSON = function() {
    var e = this, t = e.x, n = e.y, a = e.top, u = e.right, i = e.bottom, l = e.left, f = e.width, c = e.height;
    return { x: t, y: n, top: a, right: u, bottom: i, left: l, width: f, height: c };
  }, r.fromRect = function(e) {
    return new r(e.x, e.y, e.width, e.height);
  }, r;
}(), In = function(r) {
  return r instanceof SVGElement && "getBBox" in r;
}, ku = function(r) {
  if (In(r)) {
    var e = r.getBBox(), t = e.width, n = e.height;
    return !t && !n;
  }
  var a = r, u = a.offsetWidth, i = a.offsetHeight;
  return !(u || i || r.getClientRects().length);
}, Ga = function(r) {
  var e;
  if (r instanceof Element)
    return !0;
  var t = (e = r == null ? void 0 : r.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView;
  return !!(t && r instanceof t.Element);
}, bf = function(r) {
  switch (r.tagName) {
    case "INPUT":
      if (r.type !== "image")
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
}, nt = typeof window < "u" ? window : {}, Ct = /* @__PURE__ */ new WeakMap(), _a = /auto|scroll/, Ff = /^tb|vertical/, wf = /msie|trident/i.test(nt.navigator && nt.navigator.userAgent), nr = function(r) {
  return parseFloat(r || "0");
}, qr = function(r, e, t) {
  return r === void 0 && (r = 0), e === void 0 && (e = 0), t === void 0 && (t = !1), new Af((t ? e : r) || 0, (t ? r : e) || 0);
}, Xa = Rr({
  devicePixelContentBoxSize: qr(),
  borderBoxSize: qr(),
  contentBoxSize: qr(),
  contentRect: new Iu(0, 0, 0, 0)
}), $u = function(r, e) {
  if (e === void 0 && (e = !1), Ct.has(r) && !e)
    return Ct.get(r);
  if (ku(r))
    return Ct.set(r, Xa), Xa;
  var t = getComputedStyle(r), n = In(r) && r.ownerSVGElement && r.getBBox(), a = !wf && t.boxSizing === "border-box", u = Ff.test(t.writingMode || ""), i = !n && _a.test(t.overflowY || ""), l = !n && _a.test(t.overflowX || ""), f = n ? 0 : nr(t.paddingTop), c = n ? 0 : nr(t.paddingRight), v = n ? 0 : nr(t.paddingBottom), D = n ? 0 : nr(t.paddingLeft), g = n ? 0 : nr(t.borderTopWidth), C = n ? 0 : nr(t.borderRightWidth), m = n ? 0 : nr(t.borderBottomWidth), o = n ? 0 : nr(t.borderLeftWidth), B = D + c, A = f + v, b = o + C, P = g + m, R = l ? r.offsetHeight - P - r.clientHeight : 0, k = i ? r.offsetWidth - b - r.clientWidth : 0, L = a ? B + b : 0, W = a ? A + P : 0, K = n ? n.width : nr(t.width) - L - k, M = n ? n.height : nr(t.height) - W - R, z = K + B + k + b, G = M + A + R + P, S = Rr({
    devicePixelContentBoxSize: qr(Math.round(K * devicePixelRatio), Math.round(M * devicePixelRatio), u),
    borderBoxSize: qr(z, G, u),
    contentBoxSize: qr(K, M, u),
    contentRect: new Iu(D, f, K, M)
  });
  return Ct.set(r, S), S;
}, Lu = function(r, e, t) {
  var n = $u(r, t), a = n.borderBoxSize, u = n.contentBoxSize, i = n.devicePixelContentBoxSize;
  switch (e) {
    case lt.DEVICE_PIXEL_CONTENT_BOX:
      return i;
    case lt.BORDER_BOX:
      return a;
    default:
      return u;
  }
}, yf = /* @__PURE__ */ function() {
  function r(e) {
    var t = $u(e);
    this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = Rr([t.borderBoxSize]), this.contentBoxSize = Rr([t.contentBoxSize]), this.devicePixelContentBoxSize = Rr([t.devicePixelContentBoxSize]);
  }
  return r;
}(), Wu = function(r) {
  if (ku(r))
    return 1 / 0;
  for (var e = 0, t = r.parentNode; t; )
    e += 1, t = t.parentNode;
  return e;
}, Of = function() {
  var r = 1 / 0, e = [];
  Tr.forEach(function(i) {
    if (i.activeTargets.length !== 0) {
      var l = [];
      i.activeTargets.forEach(function(c) {
        var v = new yf(c.target), D = Wu(c.target);
        l.push(v), c.lastReportedSize = Lu(c.target, c.observedBox), D < r && (r = D);
      }), e.push(function() {
        i.callback.call(i.observer, l, i.observer);
      }), i.activeTargets.splice(0, i.activeTargets.length);
    }
  });
  for (var t = 0, n = e; t < n.length; t++) {
    var a = n[t];
    a();
  }
  return r;
}, Ja = function(r) {
  Tr.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(a) {
      a.isActive() && (Wu(a.target) > r ? t.activeTargets.push(a) : t.skippedTargets.push(a));
    });
  });
}, xf = function() {
  var r = 0;
  for (Ja(r); Cf(); )
    r = Of(), Ja(r);
  return Bf() && Ef(), r > 0;
}, an, zu = [], Pf = function() {
  return zu.splice(0).forEach(function(r) {
    return r();
  });
}, Sf = function(r) {
  if (!an) {
    var e = 0, t = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Pf();
    }).observe(t, n), an = function() {
      t.textContent = "".concat(e ? e-- : e++);
    };
  }
  zu.push(r), an();
}, Tf = function(r) {
  Sf(function() {
    requestAnimationFrame(r);
  });
}, yt = 0, Rf = function() {
  return !!yt;
}, jf = 250, Nf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Za = [
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
], Qa = function(r) {
  return r === void 0 && (r = 0), Date.now() + r;
}, un = !1, Mf = function() {
  function r() {
    var e = this;
    this.stopped = !0, this.listener = function() {
      return e.schedule();
    };
  }
  return r.prototype.run = function(e) {
    var t = this;
    if (e === void 0 && (e = jf), !un) {
      un = !0;
      var n = Qa(e);
      Tf(function() {
        var a = !1;
        try {
          a = xf();
        } finally {
          if (un = !1, e = n - Qa(), !Rf())
            return;
          a ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
        }
      });
    }
  }, r.prototype.schedule = function() {
    this.stop(), this.run();
  }, r.prototype.observe = function() {
    var e = this, t = function() {
      return e.observer && e.observer.observe(document.body, Nf);
    };
    document.body ? t() : nt.addEventListener("DOMContentLoaded", t);
  }, r.prototype.start = function() {
    var e = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Za.forEach(function(t) {
      return nt.addEventListener(t, e.listener, !0);
    }));
  }, r.prototype.stop = function() {
    var e = this;
    this.stopped || (this.observer && this.observer.disconnect(), Za.forEach(function(t) {
      return nt.removeEventListener(t, e.listener, !0);
    }), this.stopped = !0);
  }, r;
}(), Cn = new Mf(), eu = function(r) {
  !yt && r > 0 && Cn.start(), yt += r, !yt && Cn.stop();
}, If = function(r) {
  return !In(r) && !bf(r) && getComputedStyle(r).display === "inline";
}, kf = function() {
  function r(e, t) {
    this.target = e, this.observedBox = t || lt.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return r.prototype.isActive = function() {
    var e = Lu(this.target, this.observedBox, !0);
    return If(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
  }, r;
}(), $f = /* @__PURE__ */ function() {
  function r(e, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t;
  }
  return r;
}(), Bt = /* @__PURE__ */ new WeakMap(), ru = function(r, e) {
  for (var t = 0; t < r.length; t += 1)
    if (r[t].target === e)
      return t;
  return -1;
}, Et = function() {
  function r() {
  }
  return r.connect = function(e, t) {
    var n = new $f(e, t);
    Bt.set(e, n);
  }, r.observe = function(e, t, n) {
    var a = Bt.get(e), u = a.observationTargets.length === 0;
    ru(a.observationTargets, t) < 0 && (u && Tr.push(a), a.observationTargets.push(new kf(t, n && n.box)), eu(1), Cn.schedule());
  }, r.unobserve = function(e, t) {
    var n = Bt.get(e), a = ru(n.observationTargets, t), u = n.observationTargets.length === 1;
    a >= 0 && (u && Tr.splice(Tr.indexOf(n), 1), n.observationTargets.splice(a, 1), eu(-1));
  }, r.disconnect = function(e) {
    var t = this, n = Bt.get(e);
    n.observationTargets.slice().forEach(function(a) {
      return t.unobserve(e, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, r;
}(), Lf = function() {
  function r(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof e != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Et.connect(this, e);
  }
  return r.prototype.observe = function(e, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ga(e))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Et.observe(this, e, t);
  }, r.prototype.unobserve = function(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ga(e))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Et.unobserve(this, e);
  }, r.prototype.disconnect = function() {
    Et.disconnect(this);
  }, r.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, r;
}(), hr = {};
Object.defineProperty(hr, "__esModule", {
  value: !0
});
var Wf = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), sn = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, Vu = {
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
  mod: Wf ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, kn = {
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
for (var At = 1; At < 20; At++)
  kn["f" + At] = 111 + At;
function qt(r, e, t) {
  e && !("byKey" in e) && (t = e, e = null), Array.isArray(r) || (r = [r]);
  var n = r.map(function(i) {
    return Hu(i, e);
  }), a = function(l) {
    return n.some(function(f) {
      return qu(f, l);
    });
  }, u = t == null ? a : a(t);
  return u;
}
function zf(r, e) {
  return qt(r, e);
}
function Vf(r, e) {
  return qt(r, { byKey: !0 }, e);
}
function Hu(r, e) {
  var t = e && e.byKey, n = {};
  r = r.replace("++", "+add");
  var a = r.split("+"), u = a.length;
  for (var i in sn)
    n[sn[i]] = !1;
  var l = !0, f = !1, c = void 0;
  try {
    for (var v = a[Symbol.iterator](), D; !(l = (D = v.next()).done); l = !0) {
      var g = D.value, C = g.endsWith("?") && g.length > 1;
      C && (g = g.slice(0, -1));
      var m = $n(g), o = sn[m];
      if (g.length > 1 && !o && !Vu[g] && !kn[m])
        throw new TypeError('Unknown modifier: "' + g + '"');
      (u === 1 || !o) && (t ? n.key = m : n.which = Ku(g)), o && (n[o] = C ? null : !0);
    }
  } catch (B) {
    f = !0, c = B;
  } finally {
    try {
      !l && v.return && v.return();
    } finally {
      if (f)
        throw c;
    }
  }
  return n;
}
function qu(r, e) {
  for (var t in r) {
    var n = r[t], a = void 0;
    if (n != null && (t === "key" && e.key != null ? a = e.key.toLowerCase() : t === "which" ? a = n === 91 && e.which === 93 ? 91 : e.which : a = e[t], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function Ku(r) {
  r = $n(r);
  var e = kn[r] || r.toUpperCase().charCodeAt(0);
  return e;
}
function $n(r) {
  return r = r.toLowerCase(), r = Vu[r] || r, r;
}
hr.default = qt;
var on = hr.isHotkey = qt;
hr.isCodeHotkey = zf;
hr.isKeyHotkey = Vf;
hr.parseHotkey = Hu;
hr.compareHotkey = qu;
hr.toKeyCode = Ku;
hr.toKeyName = $n;
function Hf(r, e) {
  if (r == null)
    return {};
  var t = {}, n = Object.keys(r), a, u;
  for (u = 0; u < n.length; u++)
    a = n[u], !(e.indexOf(a) >= 0) && (t[a] = r[a]);
  return t;
}
function Ur(r, e) {
  if (r == null)
    return {};
  var t = Hf(r, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    for (a = 0; a < u.length; a++)
      n = u[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
function ft(r) {
  "@babel/helpers - typeof";
  return ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ft(r);
}
function qf(r, e) {
  if (ft(r) !== "object" || r === null)
    return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(r, e || "default");
    if (ft(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function Kf(r) {
  var e = qf(r, "string");
  return ft(e) === "symbol" ? e : String(e);
}
function Xe(r, e, t) {
  return e = Kf(e), e in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
var Ln = /* @__PURE__ */ kr(null), wr = () => {
  var r = $t(Ln);
  if (!r)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return r;
}, Uu = parseInt(J.version.split(".")[0], 10), Uf = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, tu = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), ke = typeof navigator < "u" && /Android/.test(navigator.userAgent), Vr = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), rt = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), Yf = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), Yu = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), Gf = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), _f = ke && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), Xf = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), Jf = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), Zf = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), Ot = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Dr = (!Gf || !_f) && !Yf && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", Wn = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new WeakMap(), Bn = /* @__PURE__ */ new WeakMap(), ct = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap(), Nt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), at = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap(), ze = /* @__PURE__ */ new WeakMap(), pr = /* @__PURE__ */ new WeakMap(), Cr = /* @__PURE__ */ new WeakMap(), _u = /* @__PURE__ */ new WeakMap(), Yr = Symbol("placeholder"), Xu = Symbol("mark-placeholder"), Qf = globalThis.Text, Hn = (r) => r && r.ownerDocument && r.ownerDocument.defaultView || null, ec = (r) => br(r) && r.nodeType === 8, _e = (r) => br(r) && r.nodeType === 1, br = (r) => {
  var e = Hn(r);
  return !!e && r instanceof e.Node;
}, bn = (r) => {
  var e = r && r.anchorNode && Hn(r.anchorNode);
  return !!e && r instanceof e.Selection;
}, Ju = (r) => br(r) && r.nodeType === 3, rc = (r) => r.clipboardData && r.clipboardData.getData("text/plain") !== "" && r.clipboardData.types.length === 1, tc = (r) => {
  var [e, t] = r;
  if (_e(e) && e.childNodes.length) {
    var n = t === e.childNodes.length, a = n ? t - 1 : t;
    for ([e, a] = Zu(e, a, n ? "backward" : "forward"), n = a < t; _e(e) && e.childNodes.length; ) {
      var u = n ? e.childNodes.length - 1 : 0;
      e = ac(e, u, n ? "backward" : "forward");
    }
    t = n && e.textContent != null ? e.textContent.length : 0;
  }
  return [e, t];
}, nc = (r) => {
  for (var e = r && r.parentNode; e; ) {
    if (e.toString() === "[object ShadowRoot]")
      return !0;
    e = e.parentNode;
  }
  return !1;
}, Zu = (r, e, t) => {
  for (var {
    childNodes: n
  } = r, a = n[e], u = e, i = !1, l = !1; (ec(a) || _e(a) && a.childNodes.length === 0 || _e(a) && a.getAttribute("contenteditable") === "false") && !(i && l); ) {
    if (u >= n.length) {
      i = !0, u = e - 1, t = "backward";
      continue;
    }
    if (u < 0) {
      l = !0, u = e + 1, t = "forward";
      continue;
    }
    a = n[u], e = u, u += t === "forward" ? 1 : -1;
  }
  return [a, e];
}, ac = (r, e, t) => {
  var [n] = Zu(r, e, t);
  return n;
}, Qu = (r) => {
  var e = "";
  if (Ju(r) && r.nodeValue)
    return r.nodeValue;
  if (_e(r)) {
    for (var t of Array.from(r.childNodes))
      e += Qu(t);
    var n = getComputedStyle(r).getPropertyValue("display");
    (n === "block" || n === "list" || r.tagName === "BR") && (e += `
`);
  }
  return e;
}, uc = /data-slate-fragment="(.+?)"/m, ic = (r) => {
  var e = r.getData("text/html"), [, t] = e.match(uc) || [];
  return t;
}, qn = (r, e, t) => {
  var {
    target: n
  } = e;
  if (_e(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = F.getWindow(r);
  if (a.contains(n))
    return F.hasDOMNode(r, n, {
      editable: !0
    });
  var u = t.find((i) => {
    var {
      addedNodes: l,
      removedNodes: f
    } = i;
    for (var c of l)
      if (c === n || c.contains(n))
        return !0;
    for (var v of f)
      if (v === n || v.contains(n))
        return !0;
  });
  return !u || u === e ? !1 : qn(r, u, t);
}, sc = 0;
class oc {
  constructor() {
    Xe(this, "id", void 0), this.id = "".concat(sc++);
  }
}
var F = {
  androidPendingDiffs: (r) => ze.get(r),
  androidScheduleFlush: (r) => {
    var e;
    (e = Vn.get(r)) === null || e === void 0 || e();
  },
  blur: (r) => {
    var e = F.toDOMNode(r, r), t = F.findDocumentOrShadowRoot(r);
    Er.set(r, !1), t.activeElement === e && e.blur();
  },
  deselect: (r) => {
    var {
      selection: e
    } = r, t = F.findDocumentOrShadowRoot(r), n = t.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), e && O.deselect(r);
  },
  findDocumentOrShadowRoot: (r) => {
    var e = F.toDOMNode(r, r), t = e.getRootNode();
    return (t instanceof Document || t instanceof ShadowRoot) && t.getSelection != null ? t : e.ownerDocument;
  },
  findEventRange: (r, e) => {
    "nativeEvent" in e && (e = e.nativeEvent);
    var {
      clientX: t,
      clientY: n,
      target: a
    } = e;
    if (t == null || n == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var u = F.toSlateNode(r, e.target), i = F.findPath(r, u);
    if (q.isElement(u) && s.isVoid(r, u)) {
      var l = a.getBoundingClientRect(), f = r.isInline(u) ? t - l.left < l.left + l.width - t : n - l.top < l.top + l.height - n, c = s.point(r, i, {
        edge: f ? "start" : "end"
      }), v = f ? s.before(r, c) : s.after(r, c);
      if (v) {
        var D = s.range(r, v);
        return D;
      }
    }
    var g, {
      document: C
    } = F.getWindow(r);
    if (C.caretRangeFromPoint)
      g = C.caretRangeFromPoint(t, n);
    else {
      var m = C.caretPositionFromPoint(t, n);
      m && (g = C.createRange(), g.setStart(m.offsetNode, m.offset), g.setEnd(m.offsetNode, m.offset));
    }
    if (!g)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var o = F.toSlateRange(r, g, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return o;
  },
  findKey: (r, e) => {
    var t = Nt.get(e);
    return t || (t = new oc(), Nt.set(e, t)), t;
  },
  findPath: (r, e) => {
    for (var t = [], n = e; ; ) {
      var a = zn.get(n);
      if (a == null) {
        if (s.isEditor(n))
          return t;
        break;
      }
      var u = Wn.get(n);
      if (u == null)
        break;
      t.unshift(u), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(Te.stringify(e)));
  },
  focus: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!Er.get(e)) {
      if (t.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (e.operations.length > 0) {
        setTimeout(() => {
          F.focus(e, {
            retries: t.retries - 1
          });
        }, 10);
        return;
      }
      var n = F.toDOMNode(e, e), a = F.findDocumentOrShadowRoot(e);
      if (a.activeElement !== n) {
        if (e.selection && a instanceof Document) {
          var u = a.getSelection(), i = F.toDOMRange(e, e.selection);
          u == null || u.removeAllRanges(), u == null || u.addRange(i);
        }
        e.selection || (O.select(e, s.start(e, [])), e.onChange()), Er.set(e, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (r) => {
    var e = Gu.get(r);
    if (!e)
      throw new Error("Unable to find a host window element for this editor");
    return e;
  },
  hasDOMNode: function(e, t) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, u = F.toDOMNode(e, e), i;
    try {
      i = _e(t) ? t : t.parentElement;
    } catch (l) {
      if (l instanceof Error && !l.message.includes('Permission denied to access property "nodeType"'))
        throw l;
    }
    return i ? i.closest("[data-slate-editor]") === u && (!a || i.isContentEditable ? !0 : typeof i.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    i.closest('[contenteditable="false"]') === u || !!i.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (r, e) => br(e) && F.hasDOMNode(r, e, {
    editable: !0
  }),
  hasRange: (r, e) => {
    var {
      anchor: t,
      focus: n
    } = e;
    return s.hasPath(r, t.path) && s.hasPath(r, n.path);
  },
  hasSelectableTarget: (r, e) => F.hasEditableTarget(r, e) || F.isTargetInsideNonReadonlyVoid(r, e),
  hasTarget: (r, e) => br(e) && F.hasDOMNode(r, e),
  insertData: (r, e) => {
    r.insertData(e);
  },
  insertFragmentData: (r, e) => r.insertFragmentData(e),
  insertTextData: (r, e) => r.insertTextData(e),
  isComposing: (r) => !!Sr.get(r),
  isFocused: (r) => !!Er.get(r),
  isReadOnly: (r) => !!En.get(r),
  isTargetInsideNonReadonlyVoid: (r, e) => {
    if (En.get(r))
      return !1;
    var t = F.hasTarget(r, e) && F.toSlateNode(r, e);
    return q.isElement(t) && s.isVoid(r, t);
  },
  setFragmentData: (r, e, t) => r.setFragmentData(e, t),
  toDOMNode: (r, e) => {
    var t = Kt.get(r), n = s.isEditor(e) ? xt.get(r) : t == null ? void 0 : t.get(F.findKey(r, e));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(Te.stringify(e)));
    return n;
  },
  toDOMPoint: (r, e) => {
    var [t] = s.node(r, e.path), n = F.toDOMNode(r, t), a;
    s.void(r, {
      at: e
    }) && (e = {
      path: e.path,
      offset: 0
    });
    for (var u = "[data-slate-string], [data-slate-zero-width]", i = Array.from(n.querySelectorAll(u)), l = 0, f = 0; f < i.length; f++) {
      var c = i[f], v = c.childNodes[0];
      if (!(v == null || v.textContent == null)) {
        var {
          length: D
        } = v.textContent, g = c.getAttribute("data-slate-length"), C = g == null ? D : parseInt(g, 10), m = l + C, o = i[f + 1];
        if (e.offset === m && o !== null && o !== void 0 && o.hasAttribute("data-slate-mark-placeholder")) {
          var B, A = o.childNodes[0];
          a = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            A instanceof Qf ? A : o,
            (B = o.textContent) !== null && B !== void 0 && B.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (e.offset <= m) {
          var b = Math.min(D, Math.max(0, e.offset - l));
          a = [v, b];
          break;
        }
        l = m;
      }
    }
    if (!a)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(Te.stringify(e)));
    return a;
  },
  toDOMRange: (r, e) => {
    var {
      anchor: t,
      focus: n
    } = e, a = E.isBackward(e), u = F.toDOMPoint(r, t), i = E.isCollapsed(e) ? u : F.toDOMPoint(r, n), l = F.getWindow(r), f = l.document.createRange(), [c, v] = a ? i : u, [D, g] = a ? u : i, C = _e(c) ? c : c.parentElement, m = !!C.getAttribute("data-slate-zero-width"), o = _e(D) ? D : D.parentElement, B = !!o.getAttribute("data-slate-zero-width");
    return f.setStart(c, m ? 1 : v), f.setEnd(D, B ? 1 : g), f;
  },
  toSlateNode: (r, e) => {
    var t = _e(e) ? e : e.parentElement;
    t && !t.hasAttribute("data-slate-node") && (t = t.closest("[data-slate-node]"));
    var n = t ? ct.get(t) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(t));
    return n;
  },
  toSlatePoint: (r, e, t) => {
    var {
      exactMatch: n,
      suppressThrow: a
    } = t, [u, i] = n ? e : tc(e), l = u.parentNode, f = null, c = 0;
    if (l) {
      var v, D, g = F.toDOMNode(r, r), C = l.closest('[data-slate-void="true"]'), m = C && g.contains(C) ? C : null, o = l.closest("[data-slate-leaf]"), B = null;
      if (o) {
        if (f = o.closest('[data-slate-node="text"]'), f) {
          var A = F.getWindow(r), b = A.document.createRange();
          b.setStart(f, 0), b.setEnd(u, i);
          var P = b.cloneContents(), R = [...Array.prototype.slice.call(P.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(P.querySelectorAll("[contenteditable=false]"))];
          R.forEach((T) => {
            if (ke && !n && T.hasAttribute("data-slate-zero-width") && T.textContent.length > 0 && T.textContext !== "\uFEFF") {
              T.textContent.startsWith("\uFEFF") && (T.textContent = T.textContent.slice(1));
              return;
            }
            T.parentNode.removeChild(T);
          }), c = P.textContent.length, B = f;
        }
      } else if (m) {
        for (var k = m.querySelectorAll("[data-slate-leaf]"), L = 0; L < k.length; L++) {
          var W = k[L];
          if (F.hasDOMNode(r, W)) {
            o = W;
            break;
          }
        }
        o ? (f = o.closest('[data-slate-node="text"]'), B = o, c = B.textContent.length, B.querySelectorAll("[data-slate-zero-width]").forEach((T) => {
          c -= T.textContent.length;
        })) : c = 1;
      }
      B && c === B.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      ke && B.getAttribute("data-slate-zero-width") === "z" && (v = B.textContent) !== null && v !== void 0 && v.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (l.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      Vr && (D = B.textContent) !== null && D !== void 0 && D.endsWith(`

`)) && c--;
    }
    if (ke && !f && !n) {
      var K = l.hasAttribute("data-slate-node") ? l : l.closest("[data-slate-node]");
      if (K && F.hasDOMNode(r, K, {
        editable: !0
      })) {
        var M = F.toSlateNode(r, K), {
          path: z,
          offset: G
        } = s.start(r, F.findPath(r, M));
        return K.querySelector("[data-slate-leaf]") || (G = i), {
          path: z,
          offset: G
        };
      }
    }
    if (!f) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(e));
    }
    var S = F.toSlateNode(r, f), $ = F.findPath(r, S);
    return {
      path: $,
      offset: c
    };
  },
  toSlateRange: (r, e, t) => {
    var n, {
      exactMatch: a,
      suppressThrow: u
    } = t, i = bn(e) ? e.anchorNode : e.startContainer, l, f, c, v, D;
    if (i)
      if (bn(e)) {
        if (Vr && e.rangeCount > 1) {
          c = e.focusNode;
          var g = e.getRangeAt(0), C = e.getRangeAt(e.rangeCount - 1);
          if (c instanceof HTMLTableRowElement && g.startContainer instanceof HTMLTableRowElement && C.startContainer instanceof HTMLTableRowElement) {
            let L = function(W) {
              return W.childElementCount > 0 ? L(W.children[0]) : W;
            };
            var m = g.startContainer, o = C.startContainer, B = L(m.children[g.startOffset]), A = L(o.children[C.startOffset]);
            v = 0, A.childNodes.length > 0 ? l = A.childNodes[0] : l = A, B.childNodes.length > 0 ? c = B.childNodes[0] : c = B, A instanceof HTMLElement ? f = A.innerHTML.length : f = 0;
          } else
            g.startContainer === c ? (l = C.endContainer, f = C.endOffset, v = g.startOffset) : (l = g.startContainer, f = g.endOffset, v = C.startOffset);
        } else
          l = e.anchorNode, f = e.anchorOffset, c = e.focusNode, v = e.focusOffset;
        Yu && nc(l) || Vr ? D = e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset : D = e.isCollapsed;
      } else
        l = e.startContainer, f = e.startOffset, c = e.endContainer, v = e.endOffset, D = e.collapsed;
    if (l == null || c == null || f == null || v == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(e));
    if (Vr && (n = c.textContent) !== null && n !== void 0 && n.endsWith(`

`) && v === c.textContent.length && v--, "getAttribute" in c && c.getAttribute("contenteditable") === "false" && c.getAttribute("data-slate-void") !== "true") {
      var b;
      c = l, v = ((b = l.textContent) === null || b === void 0 ? void 0 : b.length) || 0;
    }
    var P = F.toSlatePoint(r, [l, f], {
      exactMatch: a,
      suppressThrow: u
    });
    if (!P)
      return null;
    var R = D ? P : F.toSlatePoint(r, [c, v], {
      exactMatch: a,
      suppressThrow: u
    });
    if (!R)
      return null;
    var k = {
      anchor: P,
      focus: R
    };
    return E.isExpanded(k) && E.isForward(k) && _e(c) && s.void(r, {
      at: k.focus,
      mode: "highest"
    }) && (k = s.unhangRange(r, k, {
      voids: !0
    })), k;
  }
};
function lc(r, e) {
  var {
    path: t,
    diff: n
  } = e;
  if (!s.hasPath(r, t))
    return !1;
  var a = j.get(r, t);
  if (!H.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var u = h.next(t);
  if (!s.hasPath(r, u))
    return !1;
  var i = j.get(r, u);
  return H.isText(i) && i.text.startsWith(n.text);
}
function ei(r) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  return t.reduce((a, u) => a.slice(0, u.start) + u.text + a.slice(u.end), r);
}
function fc(r, e) {
  for (var t = Math.min(r.length, e.length), n = 0; n < t; n++)
    if (r.charAt(n) !== e.charAt(n))
      return n;
  return t;
}
function cc(r, e, t) {
  for (var n = Math.min(r.length, e.length, t), a = 0; a < n; a++)
    if (r.charAt(r.length - a - 1) !== e.charAt(e.length - a - 1))
      return a;
  return n;
}
function ri(r, e) {
  var {
    start: t,
    end: n,
    text: a
  } = e, u = r.slice(t, n), i = fc(u, a), l = Math.min(u.length - i, a.length - i), f = cc(u, a, l), c = {
    start: t + i,
    end: n - f,
    text: a.slice(i, a.length - f)
  };
  return c.start === c.end && c.text.length === 0 ? null : c;
}
function vc(r, e, t) {
  var n = Math.min(e.start, t.start), a = Math.max(0, Math.min(e.start + e.text.length, t.end) - t.start), u = ei(r, e, t), i = Math.max(t.start + t.text.length, e.start + e.text.length + (e.start + e.text.length > t.start ? t.text.length : 0) - a), l = u.slice(n, i), f = Math.max(e.end, t.end - e.text.length + (e.end - e.start));
  return ri(r, {
    start: n,
    end: f,
    text: l
  });
}
function dc(r) {
  var {
    path: e,
    diff: t
  } = r;
  return {
    anchor: {
      path: e,
      offset: t.start
    },
    focus: {
      path: e,
      offset: t.end
    }
  };
}
function Fn(r, e) {
  var {
    path: t,
    offset: n
  } = e;
  if (!s.hasPath(r, t))
    return null;
  var a = j.get(r, t);
  if (!H.isText(a))
    return null;
  var u = s.above(r, {
    match: (l) => q.isElement(l) && s.isBlock(r, l),
    at: t
  });
  if (!u)
    return null;
  for (; n > a.text.length; ) {
    var i = s.next(r, {
      at: t,
      match: H.isText
    });
    if (!i || !h.isDescendant(i[1], u[1]))
      return null;
    n -= a.text.length, a = i[0], t = i[1];
  }
  return {
    path: t,
    offset: n
  };
}
function nu(r, e) {
  var t = Fn(r, e.anchor);
  if (!t)
    return null;
  if (E.isCollapsed(e))
    return {
      anchor: t,
      focus: t
    };
  var n = Fn(r, e.focus);
  return n ? {
    anchor: t,
    focus: n
  } : null;
}
function wn(r, e, t) {
  var n = ze.get(r), a = n == null ? void 0 : n.find((v) => {
    var {
      path: D
    } = v;
    return h.equals(D, e.path);
  });
  if (!a || e.offset <= a.diff.start)
    return te.transform(e, t, {
      affinity: "backward"
    });
  var {
    diff: u
  } = a;
  if (e.offset <= u.start + u.text.length) {
    var i = {
      path: e.path,
      offset: u.start
    }, l = te.transform(i, t, {
      affinity: "backward"
    });
    return l ? {
      path: l.path,
      offset: l.offset + e.offset - u.start
    } : null;
  }
  var f = {
    path: e.path,
    offset: e.offset - u.text.length + u.end - u.start
  }, c = te.transform(f, t, {
    affinity: "backward"
  });
  return c ? t.type === "split_node" && h.equals(t.path, e.path) && f.offset < t.position && u.start < t.position ? c : {
    path: c.path,
    offset: c.offset + u.text.length - u.end + u.start
  } : null;
}
function au(r, e, t) {
  var n = wn(r, e.anchor, t);
  if (!n)
    return null;
  if (E.isCollapsed(e))
    return {
      anchor: n,
      focus: n
    };
  var a = wn(r, e.focus, t);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function hc(r, e) {
  var {
    path: t,
    diff: n,
    id: a
  } = r;
  switch (e.type) {
    case "insert_text":
      return !h.equals(e.path, t) || e.offset >= n.end ? r : e.offset <= n.start ? {
        diff: {
          start: e.text.length + n.start,
          end: e.text.length + n.end,
          text: n.text
        },
        id: a,
        path: t
      } : {
        diff: {
          start: n.start,
          end: n.end + e.text.length,
          text: n.text
        },
        id: a,
        path: t
      };
    case "remove_text":
      return !h.equals(e.path, t) || e.offset >= n.end ? r : e.offset + e.text.length <= n.start ? {
        diff: {
          start: n.start - e.text.length,
          end: n.end - e.text.length,
          text: n.text
        },
        id: a,
        path: t
      } : {
        diff: {
          start: n.start,
          end: n.end - e.text.length,
          text: n.text
        },
        id: a,
        path: t
      };
    case "split_node":
      return !h.equals(e.path, t) || e.position >= n.end ? {
        diff: n,
        id: a,
        path: h.transform(t, e, {
          affinity: "backward"
        })
      } : e.position > n.start ? {
        diff: {
          start: n.start,
          end: Math.min(e.position, n.end),
          text: n.text
        },
        id: a,
        path: t
      } : {
        diff: {
          start: n.start - e.position,
          end: n.end - e.position,
          text: n.text
        },
        id: a,
        path: h.transform(t, e, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return h.equals(e.path, t) ? {
        diff: {
          start: n.start + e.position,
          end: n.end + e.position,
          text: n.text
        },
        id: a,
        path: h.transform(t, e)
      } : {
        diff: n,
        id: a,
        path: h.transform(t, e)
      };
  }
  var u = h.transform(t, e);
  return u ? {
    diff: n,
    path: u,
    id: a
  } : null;
}
function uu(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function bt(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? uu(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : uu(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Dc = 25, gc = 200, mc = function() {
}, pc = (r) => (r == null ? void 0 : r.constructor.name) === "DataTransfer";
function Cc(r) {
  var {
    editor: e,
    scheduleOnDOMSelectionChange: t,
    onDOMSelectionChange: n
  } = r, a = !1, u = null, i = null, l = null, f = 0, c = !1, v = () => {
    var S = Cr.get(e);
    if (Cr.delete(e), S) {
      var {
        selection: $
      } = e, T = nu(e, S);
      T && (!$ || !E.equals(T, $)) && O.select(e, T);
    }
  }, D = () => {
    var S = pr.get(e);
    if (pr.delete(e), !!S) {
      if (S.at) {
        var $ = te.isPoint(S.at) ? Fn(e, S.at) : nu(e, S.at);
        if (!$)
          return;
        var T = s.range(e, $);
        (!e.selection || !E.equals(e.selection, T)) && O.select(e, $);
      }
      S.run();
    }
  }, g = () => {
    if (i && (clearTimeout(i), i = null), l && (clearTimeout(l), l = null), !R() && !P()) {
      v();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), P() && (a = "action");
    var S = e.selection && s.rangeRef(e, e.selection, {
      affinity: "forward"
    });
    fr.set(e, e.marks), mc("flush", pr.get(e), ze.get(e));
    for (var $ = R(), T; T = (N = ze.get(e)) === null || N === void 0 ? void 0 : N[0]; ) {
      var N, re, U = er.get(e);
      U !== void 0 && (er.delete(e), e.marks = U), U && c === !1 && (c = null);
      var fe = dc(T);
      (!e.selection || !E.equals(e.selection, fe)) && O.select(e, fe), T.diff.text ? s.insertText(e, T.diff.text) : s.deleteFragment(e), ze.set(e, (re = ze.get(e)) === null || re === void 0 ? void 0 : re.filter((me) => {
        var {
          id: ve
        } = me;
        return ve !== T.id;
      })), lc(e, T) || ($ = !1, pr.delete(e), fr.delete(e), a = "action", Cr.delete(e), t.cancel(), n.cancel(), S == null || S.unref());
    }
    var _ = S == null ? void 0 : S.unref();
    if (_ && !Cr.get(e) && (!e.selection || !E.equals(_, e.selection)) && O.select(e, _), P()) {
      D();
      return;
    }
    $ && t(), t.flush(), n.flush(), v();
    var ne = fr.get(e);
    fr.delete(e), ne !== void 0 && (e.marks = ne, e.onChange());
  }, C = (S) => {
    u && clearTimeout(u), u = setTimeout(() => {
      Sr.set(e, !1), g();
    }, Dc);
  }, m = (S) => {
    Sr.set(e, !0), u && (clearTimeout(u), u = null);
  }, o = function() {
    var $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, T = Bn.get(e);
    if (T) {
      if (R() || $) {
        T.style.display = "none";
        return;
      }
      T.style.removeProperty("display");
    }
  }, B = (S, $) => {
    var T, N = (T = ze.get(e)) !== null && T !== void 0 ? T : [];
    ze.set(e, N);
    var re = j.leaf(e, S), U = N.findIndex((ne) => h.equals(ne.path, S));
    if (U < 0) {
      var fe = ri(re.text, $);
      fe && N.push({
        path: S,
        diff: $,
        id: f++
      }), o();
      return;
    }
    var _ = vc(re.text, N[U].diff, $);
    if (!_) {
      N.splice(U, 1), o();
      return;
    }
    N[U] = bt(bt({}, N[U]), {}, {
      diff: _
    });
  }, A = function($) {
    var {
      at: T
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    c = !1, Cr.delete(e), t.cancel(), n.cancel(), P() && g(), pr.set(e, {
      at: T,
      run: $
    }), l = setTimeout(g);
  }, b = (S) => {
    var $;
    i && (clearTimeout(i), i = null);
    var {
      inputType: T
    } = S, N = null, re = S.dataTransfer || S.data || void 0;
    c !== !1 && T !== "insertText" && T !== "insertCompositionText" && (c = !1);
    var [U] = S.getTargetRanges();
    U && (N = F.toSlateRange(e, U, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var fe = F.getWindow(e), _ = fe.getSelection();
    if (!N && _ && (U = _, N = F.toSlateRange(e, _, {
      exactMatch: !1,
      suppressThrow: !0
    })), N = ($ = N) !== null && $ !== void 0 ? $ : e.selection, !!N) {
      var ne = !0;
      if (T.startsWith("delete")) {
        if (E.isExpanded(N)) {
          var [me, ve] = E.edges(N), we = j.leaf(e, me.path);
          if (we.text.length === me.offset && ve.offset === 0) {
            var p = s.next(e, {
              at: me.path,
              match: H.isText
            });
            p && h.equals(p[1], ve.path) && (N = {
              anchor: ve,
              focus: ve
            });
          }
        }
        var y = T.endsWith("Backward") ? "backward" : "forward", [w, I] = E.edges(N), [Q, Y] = s.leaf(e, w.path), ee = {
          text: "",
          start: w.offset,
          end: I.offset
        }, oe = ze.get(e), ie = oe == null ? void 0 : oe.find((qe) => h.equals(qe.path, Y)), ge = ie ? [ie.diff, ee] : [ee], ae = ei(Q.text, ...ge);
        if (ae.length === 0 && (ne = !1), E.isExpanded(N)) {
          if (ne && h.equals(N.anchor.path, N.focus.path)) {
            var Ee = {
              path: N.anchor.path,
              offset: w.offset
            }, Ae = s.range(e, Ee, Ee);
            return W(Ae), B(N.anchor.path, {
              text: "",
              end: I.offset,
              start: w.offset
            });
          }
          return A(() => s.deleteFragment(e, {
            direction: y
          }), {
            at: N
          });
        }
      }
      switch (T) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return A(() => s.deleteFragment(e), {
            at: N
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: pe
          } = N;
          if (ne && E.isCollapsed(N)) {
            var Le = j.leaf(e, pe.path);
            if (pe.offset < Le.text.length)
              return B(pe.path, {
                text: "",
                start: pe.offset,
                end: pe.offset + 1
              });
          }
          return A(() => s.deleteForward(e), {
            at: N
          });
        }
        case "deleteContentBackward": {
          var Ne, {
            anchor: je
          } = N, He = bn(U) ? U.isCollapsed : !!((Ne = U) !== null && Ne !== void 0 && Ne.collapsed);
          return ne && He && E.isCollapsed(N) && je.offset > 0 ? B(je.path, {
            text: "",
            start: je.offset - 1,
            end: je.offset
          }) : A(() => s.deleteBackward(e), {
            at: N
          });
        }
        case "deleteEntireSoftLine":
          return A(() => {
            s.deleteBackward(e, {
              unit: "line"
            }), s.deleteForward(e, {
              unit: "line"
            });
          }, {
            at: N
          });
        case "deleteHardLineBackward":
          return A(() => s.deleteBackward(e, {
            unit: "block"
          }), {
            at: N
          });
        case "deleteSoftLineBackward":
          return A(() => s.deleteBackward(e, {
            unit: "line"
          }), {
            at: N
          });
        case "deleteHardLineForward":
          return A(() => s.deleteForward(e, {
            unit: "block"
          }), {
            at: N
          });
        case "deleteSoftLineForward":
          return A(() => s.deleteForward(e, {
            unit: "line"
          }), {
            at: N
          });
        case "deleteWordBackward":
          return A(() => s.deleteBackward(e, {
            unit: "word"
          }), {
            at: N
          });
        case "deleteWordForward":
          return A(() => s.deleteForward(e, {
            unit: "word"
          }), {
            at: N
          });
        case "insertLineBreak":
          return A(() => s.insertSoftBreak(e), {
            at: N
          });
        case "insertParagraph":
          return A(() => s.insertBreak(e), {
            at: N
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (pc(re))
            return A(() => F.insertData(e, re), {
              at: N
            });
          var de = re ?? "";
          if (er.get(e) && (de = de.replace("\uFEFF", "")), T === "insertText" && /.*\n.*\n$/.test(de) && (de = de.slice(0, -1)), de.includes(`
`))
            return A(() => {
              var qe = de.split(`
`);
              qe.forEach((tr, yr) => {
                tr && s.insertText(e, tr), yr !== qe.length - 1 && s.insertSoftBreak(e);
              });
            }, {
              at: N
            });
          if (h.equals(N.anchor.path, N.focus.path)) {
            var [Se, xe] = E.edges(N), ye = {
              start: Se.offset,
              end: xe.offset,
              text: de
            };
            if (de && c && T === "insertCompositionText") {
              var We = c.start + c.text.search(/\S|$/), rr = ye.start + ye.text.search(/\S|$/);
              rr === We + 1 && ye.end === c.start + c.text.length ? (ye.start -= 1, c = null, z()) : c = !1;
            } else
              T === "insertText" ? c === null ? c = ye : c && E.isCollapsed(N) && c.end + c.text.length === Se.offset ? c = bt(bt({}, c), {}, {
                text: c.text + de
              }) : c = !1 : c = !1;
            if (ne) {
              B(Se.path, ye);
              return;
            }
          }
          return A(() => s.insertText(e, de), {
            at: N
          });
        }
      }
    }
  }, P = () => !!pr.get(e), R = () => {
    var S;
    return !!((S = ze.get(e)) !== null && S !== void 0 && S.length);
  }, k = () => P() || R(), L = () => a, W = (S) => {
    Cr.set(e, S), i && (clearTimeout(i), i = null);
    var {
      selection: $
    } = e;
    if (S) {
      var T = !$ || !h.equals($.anchor.path, S.anchor.path), N = !$ || !h.equals($.anchor.path.slice(0, -1), S.anchor.path.slice(0, -1));
      (T && c || N) && (c = !1), (T || R()) && (i = setTimeout(g, gc));
    }
  }, K = () => {
    (P() || !R()) && g();
  }, M = (S) => {
    R() || (o(!0), setTimeout(o));
  }, z = () => {
    P() || (l = setTimeout(g));
  }, G = (S) => {
    if (!(R() || P()) && S.some((T) => qn(e, T, S))) {
      var $;
      ($ = _u.get(e)) === null || $ === void 0 || $();
    }
  };
  return {
    flush: g,
    scheduleFlush: z,
    hasPendingDiffs: R,
    hasPendingAction: P,
    hasPendingChanges: k,
    isFlushing: L,
    handleUserSelect: W,
    handleCompositionEnd: C,
    handleCompositionStart: m,
    handleDOMBeforeInput: b,
    handleKeyDown: M,
    handleDomMutations: G,
    handleInput: K
  };
}
function Bc() {
  var r = Ke(!1);
  return cr(() => (r.current = !0, () => {
    r.current = !1;
  }), []), r.current;
}
var vt = Ot ? Ei : cr;
function Ec(r, e, t) {
  var [n] = Ar(() => new MutationObserver(e));
  vt(() => {
    n.takeRecords();
  }), cr(() => {
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(r.current, t), () => n.disconnect();
  }, [n, r, t]);
}
var Ac = ["node"];
function iu(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function bc(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? iu(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : iu(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Fc = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, wc = ke ? (r) => {
  var {
    node: e
  } = r, t = Ur(r, Ac);
  if (!ke)
    return null;
  var n = wr(), a = Bc(), [u] = Ar(() => Cc(bc({
    editor: n
  }, t)));
  return Ec(e, u.handleDomMutations, Fc), Vn.set(n, u.scheduleFlush), a && u.flush(), u;
} : () => null, yc = ["anchor", "focus"], Oc = ["anchor", "focus"], xc = (r, e) => Object.keys(r).length === Object.keys(e).length && Object.keys(r).every((t) => e.hasOwnProperty(t) && r[t] === e[t]), ti = (r, e) => {
  var t = Ur(r, yc), n = Ur(e, Oc);
  return r[Yr] === e[Yr] && xc(t, n);
}, Pc = (r, e) => {
  if (r.length !== e.length)
    return !1;
  for (var t = 0; t < r.length; t++) {
    var n = r[t], a = e[t];
    if (!E.equals(n, a) || !ti(n, a))
      return !1;
  }
  return !0;
}, Sc = (r, e) => {
  if (r.length !== e.length)
    return !1;
  for (var t = 0; t < r.length; t++) {
    var n = r[t], a = e[t];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !ti(n, a))
      return !1;
  }
  return !0;
};
function su(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Tc(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? su(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : su(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Rc = (r) => {
  var {
    isLast: e,
    leaf: t,
    parent: n,
    text: a
  } = r, u = wr(), i = F.findPath(u, a), l = h.parent(i), f = !!t[Xu];
  return u.isVoid(n) ? /* @__PURE__ */ J.createElement(ln, {
    length: j.string(n).length
  }) : t.text === "" && n.children[n.children.length - 1] === a && !u.isInline(n) && s.string(u, l) === "" ? /* @__PURE__ */ J.createElement(ln, {
    isLineBreak: !0,
    isMarkPlaceholder: f
  }) : t.text === "" ? /* @__PURE__ */ J.createElement(ln, {
    isMarkPlaceholder: f
  }) : e && t.text.slice(-1) === `
` ? /* @__PURE__ */ J.createElement(ou, {
    isTrailing: !0,
    text: t.text
  }) : /* @__PURE__ */ J.createElement(ou, {
    text: t.text
  });
}, ou = (r) => {
  var {
    text: e,
    isTrailing: t = !1
  } = r, n = Ke(null), a = () => "".concat(e ?? "").concat(t ? `
` : ""), [u] = Ar(a);
  return vt(() => {
    var i = a();
    n.current && n.current.textContent !== i && (n.current.textContent = i);
  }), /* @__PURE__ */ J.createElement(jc, {
    ref: n
  }, u);
}, jc = /* @__PURE__ */ bi(/* @__PURE__ */ Fi((r, e) => /* @__PURE__ */ J.createElement("span", {
  "data-slate-string": !0,
  ref: e
}, r.children))), ln = (r) => {
  var {
    length: e = 0,
    isLineBreak: t = !1,
    isMarkPlaceholder: n = !1
  } = r, a = {
    "data-slate-zero-width": t ? "n" : "z",
    "data-slate-length": e
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ J.createElement("span", Tc({}, a), !ke || !t ? "\uFEFF" : null, t ? /* @__PURE__ */ J.createElement("br", null) : null);
};
function lu(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ni(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lu(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : lu(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Nc = ke ? 300 : 0;
function Mc(r, e) {
  r.current && (r.current.disconnect(), e && (r.current = null));
}
function fu(r) {
  r.current && (clearTimeout(r.current), r.current = null);
}
var Ic = (r) => {
  var {
    leaf: e,
    isLast: t,
    text: n,
    parent: a,
    renderPlaceholder: u,
    renderLeaf: i = (b) => /* @__PURE__ */ J.createElement($c, ni({}, b))
  } = r, l = wr(), f = Ke(null), c = Ke(null), [v, D] = Ar(!1), g = Ke(null), C = he((b) => {
    if (Mc(f, b == null), b == null) {
      var P;
      Bn.delete(l), (P = e.onPlaceholderResize) === null || P === void 0 || P.call(e, null);
    } else {
      if (Bn.set(l, b), !f.current) {
        var R = window.ResizeObserver || Lf;
        f.current = new R(() => {
          var k;
          (k = e.onPlaceholderResize) === null || k === void 0 || k.call(e, b);
        });
      }
      f.current.observe(b), c.current = b;
    }
  }, [c, e, l]), m = /* @__PURE__ */ J.createElement(Rc, {
    isLast: t,
    leaf: e,
    parent: a,
    text: n
  }), o = !!e[Yr];
  if (cr(() => (o ? g.current || (g.current = setTimeout(() => {
    D(!0), g.current = null;
  }, Nc)) : (fu(g), D(!1)), () => fu(g)), [o, D]), o && v) {
    var B = {
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
          WebkitUserModify: rt ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: C
      }
    };
    m = /* @__PURE__ */ J.createElement(J.Fragment, null, u(B), m);
  }
  var A = {
    "data-slate-leaf": !0
  };
  return i({
    attributes: A,
    children: m,
    leaf: e,
    text: n
  });
}, kc = /* @__PURE__ */ J.memo(Ic, (r, e) => e.parent === r.parent && e.isLast === r.isLast && e.renderLeaf === r.renderLeaf && e.renderPlaceholder === r.renderPlaceholder && e.text === r.text && H.equals(e.leaf, r.leaf) && e.leaf[Yr] === r.leaf[Yr]), $c = (r) => {
  var {
    attributes: e,
    children: t
  } = r;
  return /* @__PURE__ */ J.createElement("span", ni({}, e), t);
}, Lc = (r) => {
  for (var {
    decorations: e,
    isLast: t,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: u,
    text: i
  } = r, l = wr(), f = Ke(null), c = H.decorations(i, e), v = F.findKey(l, i), D = [], g = 0; g < c.length; g++) {
    var C = c[g];
    D.push(/* @__PURE__ */ J.createElement(kc, {
      isLast: t && g === c.length - 1,
      key: "".concat(v.id, "-").concat(g),
      renderPlaceholder: a,
      leaf: C,
      text: i,
      parent: n,
      renderLeaf: u
    }));
  }
  var m = he((o) => {
    var B = Kt.get(l);
    o ? (B == null || B.set(v, o), jr.set(i, o), ct.set(o, i)) : (B == null || B.delete(v), jr.delete(i), f.current && ct.delete(f.current)), f.current = o;
  }, [f, l, v, i]);
  return /* @__PURE__ */ J.createElement("span", {
    "data-slate-node": "text",
    ref: m
  }, D);
}, ai = /* @__PURE__ */ J.memo(Lc, (r, e) => e.parent === r.parent && e.isLast === r.isLast && e.renderLeaf === r.renderLeaf && e.renderPlaceholder === r.renderPlaceholder && e.text === r.text && Sc(e.decorations, r.decorations));
function cu(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function yn(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? cu(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : cu(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Wc = (r) => {
  var {
    decorations: e,
    element: t,
    renderElement: n = (b) => /* @__PURE__ */ J.createElement(Vc, yn({}, b)),
    renderPlaceholder: a,
    renderLeaf: u,
    selection: i
  } = r, l = wr(), f = Kc(), c = l.isInline(t), v = F.findKey(l, t), D = he((b) => {
    var P = Kt.get(l);
    b ? (P == null || P.set(v, b), jr.set(t, b), ct.set(b, t)) : (P == null || P.delete(v), jr.delete(t));
  }, [l, v, t]), g = ii({
    decorations: e,
    node: t,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: u,
    selection: i
  }), C = {
    "data-slate-node": "element",
    ref: D
  };
  if (c && (C["data-slate-inline"] = !0), !c && s.hasInlines(l, t)) {
    var m = j.string(t), o = Eu(m);
    o === "rtl" && (C.dir = o);
  }
  if (s.isVoid(l, t)) {
    C["data-slate-void"] = !0, !f && c && (C.contentEditable = !1);
    var B = c ? "span" : "div", [[A]] = j.texts(t);
    g = /* @__PURE__ */ J.createElement(B, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ J.createElement(ai, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: t,
      text: A
    })), Wn.set(A, 0), zn.set(A, t);
  }
  return n({
    attributes: C,
    children: g,
    element: t
  });
}, zc = /* @__PURE__ */ J.memo(Wc, (r, e) => r.element === e.element && r.renderElement === e.renderElement && r.renderLeaf === e.renderLeaf && r.renderPlaceholder === e.renderPlaceholder && Pc(r.decorations, e.decorations) && (r.selection === e.selection || !!r.selection && !!e.selection && E.equals(r.selection, e.selection))), Vc = (r) => {
  var {
    attributes: e,
    children: t,
    element: n
  } = r, a = wr(), u = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ J.createElement(u, yn(yn({}, e), {}, {
    style: {
      position: "relative"
    }
  }), t);
}, ui = /* @__PURE__ */ kr(() => []), Hc = () => $t(ui), qc = /* @__PURE__ */ kr(!1), ii = (r) => {
  for (var {
    decorations: e,
    node: t,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: u,
    selection: i
  } = r, l = Hc(), f = wr(), c = F.findPath(f, t), v = [], D = q.isElement(t) && !f.isInline(t) && s.hasInlines(f, t), g = 0; g < t.children.length; g++) {
    var C = c.concat(g), m = t.children[g], o = F.findKey(f, m), B = s.range(f, C), A = i && E.intersection(B, i), b = l([m, C]);
    for (var P of e) {
      var R = E.intersection(P, B);
      R && b.push(R);
    }
    q.isElement(m) ? v.push(/* @__PURE__ */ J.createElement(qc.Provider, {
      key: "provider-".concat(o.id),
      value: !!A
    }, /* @__PURE__ */ J.createElement(zc, {
      decorations: b,
      element: m,
      key: o.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: u,
      selection: A
    }))) : v.push(/* @__PURE__ */ J.createElement(ai, {
      decorations: b,
      key: o.id,
      isLast: D && g === t.children.length - 1,
      parent: t,
      renderPlaceholder: a,
      renderLeaf: u,
      text: m
    })), Wn.set(m, g), zn.set(m, t);
  }
  return v;
}, si = /* @__PURE__ */ kr(!1), Kc = () => $t(si), oi = /* @__PURE__ */ kr(null), Uc = () => {
  var r = $t(oi);
  if (!r)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: e
  } = r;
  return e;
};
function Yc() {
  var r = wr(), e = Ke(!1), t = Ke(0), n = he(() => {
    if (!e.current) {
      e.current = !0;
      var a = F.getWindow(r);
      a.cancelAnimationFrame(t.current), t.current = a.requestAnimationFrame(() => {
        e.current = !1;
      });
    }
  }, [r]);
  return cr(() => () => cancelAnimationFrame(t.current), []), {
    receivedUserInput: e,
    onUserInput: n
  };
}
var Gc = 3, _c = {
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
}, Xc = {
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
}, Jc = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Be = (r) => {
  var e = _c[r], t = Xc[r], n = Jc[r], a = e && on(e), u = t && on(t), i = n && on(n);
  return (l) => !!(a && a(l) || tu && u && u(l) || !tu && i && i(l));
}, be = {
  isBold: Be("bold"),
  isCompose: Be("compose"),
  isMoveBackward: Be("moveBackward"),
  isMoveForward: Be("moveForward"),
  isDeleteBackward: Be("deleteBackward"),
  isDeleteForward: Be("deleteForward"),
  isDeleteLineBackward: Be("deleteLineBackward"),
  isDeleteLineForward: Be("deleteLineForward"),
  isDeleteWordBackward: Be("deleteWordBackward"),
  isDeleteWordForward: Be("deleteWordForward"),
  isExtendBackward: Be("extendBackward"),
  isExtendForward: Be("extendForward"),
  isExtendLineBackward: Be("extendLineBackward"),
  isExtendLineForward: Be("extendLineForward"),
  isItalic: Be("italic"),
  isMoveLineBackward: Be("moveLineBackward"),
  isMoveLineForward: Be("moveLineForward"),
  isMoveWordBackward: Be("moveWordBackward"),
  isMoveWordForward: Be("moveWordForward"),
  isRedo: Be("redo"),
  isSoftBreak: Be("insertSoftBreak"),
  isSplitBlock: Be("splitBlock"),
  isTransposeCharacter: Be("transposeCharacter"),
  isUndo: Be("undo")
}, Zc = (r, e) => {
  var t = [], n = () => {
    t = [];
  }, a = (i) => {
    if (e.current) {
      var l = i.filter((f) => qn(r, f, i));
      t.push(...l);
    }
  };
  function u() {
    t.length > 0 && (t.reverse().forEach((i) => {
      i.type !== "characterData" && (i.removedNodes.forEach((l) => {
        i.target.insertBefore(l, i.nextSibling);
      }), i.addedNodes.forEach((l) => {
        i.target.removeChild(l);
      }));
    }), n());
  }
  return {
    registerMutations: a,
    restoreDOM: u,
    clear: n
  };
}, Qc = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class li extends Ai {
  constructor() {
    super(...arguments), Xe(this, "context", null), Xe(this, "manager", null), Xe(this, "mutationObserver", null);
  }
  observe() {
    var e, {
      node: t
    } = this.props;
    if (!t.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (e = this.mutationObserver) === null || e === void 0 || e.observe(t.current, Qc);
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, t = this.context;
    this.manager = Zc(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var e, t, n, a = (e = this.mutationObserver) === null || e === void 0 ? void 0 : e.takeRecords();
    if (a != null && a.length) {
      var u;
      (u = this.manager) === null || u === void 0 || u.registerMutations(a);
    }
    return (t = this.mutationObserver) === null || t === void 0 || t.disconnect(), (n = this.manager) === null || n === void 0 || n.restoreDOM(), null;
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
Xe(li, "contextType", Ln);
var ev = ke ? li : (r) => {
  var {
    children: e
  } = r;
  return /* @__PURE__ */ J.createElement(J.Fragment, null, e);
}, rv = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], tv = ["text"];
function vu(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function ar(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vu(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : vu(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var nv = (r) => /* @__PURE__ */ J.createElement(J.Fragment, null, ii(r)), av = (r) => {
  var e = he((p) => /* @__PURE__ */ J.createElement(uv, ar({}, p)), []), {
    autoFocus: t,
    decorate: n = iv,
    onDOMBeforeInput: a,
    placeholder: u,
    readOnly: i = !1,
    renderElement: l,
    renderLeaf: f,
    renderPlaceholder: c = e,
    scrollSelectionIntoView: v = sv,
    style: D = {},
    as: g = "div",
    disableDefaultStyles: C = !1
  } = r, m = Ur(r, rv), o = Uc(), [B, A] = Ar(!1), b = Ke(null), P = Ke([]), [R, k] = Ar(), {
    onUserInput: L,
    receivedUserInput: W
  } = Yc(), [, K] = Bi((p) => p + 1, 0);
  _u.set(o, K), En.set(o, i);
  var M = Ft(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  cr(() => {
    b.current && t && b.current.focus();
  }, [t]);
  var z = Ke(), G = Ft(() => Is(() => {
    var p = z.current;
    if ((ke || !F.isComposing(o)) && (!M.isUpdatingSelection || p != null && p.isFlushing()) && !M.isDraggingInternally) {
      var y = F.findDocumentOrShadowRoot(o), {
        activeElement: w
      } = y, I = F.toDOMNode(o, o), Q = y.getSelection();
      if (w === I ? (M.latestElement = w, Er.set(o, !0)) : Er.delete(o), !Q)
        return O.deselect(o);
      var {
        anchorNode: Y,
        focusNode: ee
      } = Q, oe = F.hasEditableTarget(o, Y) || F.isTargetInsideNonReadonlyVoid(o, Y), ie = F.hasEditableTarget(o, ee) || F.isTargetInsideNonReadonlyVoid(o, ee);
      if (oe && ie) {
        var ge = F.toSlateRange(o, Q, {
          exactMatch: !1,
          suppressThrow: !0
        });
        ge && (!F.isComposing(o) && !(p != null && p.hasPendingChanges()) && !(p != null && p.isFlushing()) ? O.select(o, ge) : p == null || p.handleUserSelect(ge));
      }
      i && (!oe || !ie) && O.deselect(o);
    }
  }, 100), [o, i, M]), S = Ft(() => Ss(G, 0), [G]);
  z.current = wc({
    node: b,
    onDOMSelectionChange: G,
    scheduleOnDOMSelectionChange: S
  }), vt(() => {
    var p, y, w;
    b.current && (w = Hn(b.current)) ? (Gu.set(o, w), xt.set(o, b.current), jr.set(o, b.current), ct.set(b.current, o)) : jr.delete(o);
    var {
      selection: I
    } = o, Q = F.findDocumentOrShadowRoot(o), Y = Q.getSelection();
    if (!(!Y || !F.isFocused(o) || (p = z.current) !== null && p !== void 0 && p.hasPendingAction())) {
      var ee = (ae) => {
        var Ee = Y.type !== "None";
        if (!(!I && !Ee)) {
          var Ae = Y.focusNode, pe;
          if (Vr && Y.rangeCount > 1) {
            var Le = Y.getRangeAt(0), Ne = Y.getRangeAt(Y.rangeCount - 1);
            Le.startContainer === Ae ? pe = Ne.endContainer : pe = Le.startContainer;
          } else
            pe = Y.anchorNode;
          var je = xt.get(o), He = !1;
          if (je.contains(pe) && je.contains(Ae) && (He = !0), Ee && He && I && !ae) {
            var de = F.toSlateRange(o, Y, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (de && E.equals(de, I)) {
              var Se;
              if (!M.hasMarkPlaceholder || (Se = pe) !== null && Se !== void 0 && (Se = Se.parentElement) !== null && Se !== void 0 && Se.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (I && !F.hasRange(o, I)) {
            o.selection = F.toSlateRange(o, Y, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          M.isUpdatingSelection = !0;
          var xe = I && F.toDOMRange(o, I);
          return xe ? (F.isComposing(o) && !ke ? Y.collapseToEnd() : E.isBackward(I) ? Y.setBaseAndExtent(xe.endContainer, xe.endOffset, xe.startContainer, xe.startOffset) : Y.setBaseAndExtent(xe.startContainer, xe.startOffset, xe.endContainer, xe.endOffset), v(o, xe)) : Y.removeAllRanges(), xe;
        }
      };
      Y.rangeCount <= 1 && ee();
      var oe = ((y = z.current) === null || y === void 0 ? void 0 : y.isFlushing()) === "action";
      if (!ke || !oe) {
        setTimeout(() => {
          M.isUpdatingSelection = !1;
        });
        return;
      }
      var ie = null, ge = requestAnimationFrame(() => {
        if (oe) {
          var ae = (Ee) => {
            try {
              var Ae = F.toDOMNode(o, o);
              Ae.focus(), ee(Ee);
            } catch {
            }
          };
          ae(), ie = setTimeout(() => {
            ae(!0), M.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(ge), ie && clearTimeout(ie);
      };
    }
  });
  var $ = he((p) => {
    if (L(), !i && F.hasEditableTarget(o, p.target) && !ov(p, a)) {
      var y;
      if (z.current)
        return z.current.handleDOMBeforeInput(p);
      S.flush(), G.flush();
      var {
        selection: w
      } = o, {
        inputType: I
      } = p, Q = p.dataTransfer || p.data || void 0, Y = I === "insertCompositionText" || I === "deleteCompositionText";
      if (Y && F.isComposing(o))
        return;
      var ee = !1;
      if (I === "insertText" && w && E.isCollapsed(w) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      p.data && p.data.length === 1 && /[a-z ]/i.test(p.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      w.anchor.offset !== 0) {
        var oe, ie;
        ee = !0, o.marks && (ee = !1);
        var {
          anchor: ge
        } = w, [ae, Ee] = F.toDOMPoint(o, ge), Ae = (oe = ae.parentElement) === null || oe === void 0 ? void 0 : oe.closest("a"), pe = F.getWindow(o);
        if (ee && Ae && F.hasDOMNode(o, Ae)) {
          var Le, Ne = pe == null ? void 0 : pe.document.createTreeWalker(Ae, NodeFilter.SHOW_TEXT).lastChild();
          Ne === ae && ((Le = Ne.textContent) === null || Le === void 0 ? void 0 : Le.length) === Ee && (ee = !1);
        }
        if (ee && ae.parentElement && (pe == null || (ie = pe.getComputedStyle(ae.parentElement)) === null || ie === void 0 ? void 0 : ie.whiteSpace) === "pre") {
          var je = s.above(o, {
            at: ge.path,
            match: (We) => q.isElement(We) && s.isBlock(o, We)
          });
          je && j.string(je[0]).includes("	") && (ee = !1);
        }
      }
      if (!I.startsWith("delete") || I.startsWith("deleteBy")) {
        var [He] = p.getTargetRanges();
        if (He) {
          var de = F.toSlateRange(o, He, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!w || !E.equals(w, de)) {
            ee = !1;
            var Se = !Y && o.selection && s.rangeRef(o, o.selection);
            O.select(o, de), Se && at.set(o, Se);
          }
        }
      }
      if (Y)
        return;
      if (ee || p.preventDefault(), w && E.isExpanded(w) && I.startsWith("delete")) {
        var xe = I.endsWith("Backward") ? "backward" : "forward";
        s.deleteFragment(o, {
          direction: xe
        });
        return;
      }
      switch (I) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          s.deleteFragment(o);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          s.deleteForward(o);
          break;
        }
        case "deleteContentBackward": {
          s.deleteBackward(o);
          break;
        }
        case "deleteEntireSoftLine": {
          s.deleteBackward(o, {
            unit: "line"
          }), s.deleteForward(o, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          s.deleteBackward(o, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          s.deleteBackward(o, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          s.deleteForward(o, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          s.deleteForward(o, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          s.deleteBackward(o, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          s.deleteForward(o, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          s.insertSoftBreak(o);
          break;
        case "insertParagraph": {
          s.insertBreak(o);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          I === "insertFromComposition" && F.isComposing(o) && (A(!1), Sr.set(o, !1)), (Q == null ? void 0 : Q.constructor.name) === "DataTransfer" ? F.insertData(o, Q) : typeof Q == "string" && (ee ? P.current.push(() => s.insertText(o, Q)) : s.insertText(o, Q));
          break;
        }
      }
      var ye = (y = at.get(o)) === null || y === void 0 ? void 0 : y.unref();
      at.delete(o), ye && (!o.selection || !E.equals(o.selection, ye)) && O.select(o, ye);
    }
  }, [o, G, L, a, i, S]), T = he((p) => {
    p == null ? (G.cancel(), S.cancel(), xt.delete(o), jr.delete(o), b.current && Dr && b.current.removeEventListener("beforeinput", $)) : Dr && p.addEventListener("beforeinput", $), b.current = p;
  }, [G, S, o, $]);
  vt(() => {
    var p = F.getWindow(o);
    return p.document.addEventListener("selectionchange", S), () => {
      p.document.removeEventListener("selectionchange", S);
    };
  }, [S]);
  var N = n([o, []]), re = u && o.children.length === 1 && Array.from(j.texts(o)).length === 1 && j.string(o) === "" && !B, U = he((p) => {
    if (p && re) {
      var y;
      k((y = p.getBoundingClientRect()) === null || y === void 0 ? void 0 : y.height);
    } else
      k(void 0);
  }, [re]);
  if (re) {
    var fe = s.start(o, []);
    N.push({
      [Yr]: !0,
      placeholder: u,
      onPlaceholderResize: U,
      anchor: fe,
      focus: fe
    });
  }
  var {
    marks: _
  } = o;
  if (M.hasMarkPlaceholder = !1, o.selection && E.isCollapsed(o.selection) && _) {
    var {
      anchor: ne
    } = o.selection, me = j.leaf(o, ne.path), ve = Ur(me, tv);
    if (!H.equals(me, _, {
      loose: !0
    })) {
      M.hasMarkPlaceholder = !0;
      var we = Object.fromEntries(Object.keys(ve).map((p) => [p, null]));
      N.push(ar(ar(ar({
        [Xu]: !0
      }, we), _), {}, {
        anchor: ne,
        focus: ne
      }));
    }
  }
  return cr(() => {
    setTimeout(() => {
      var {
        selection: p
      } = o;
      if (p) {
        var {
          anchor: y
        } = p, w = j.leaf(o, y.path);
        if (_ && !H.equals(w, _, {
          loose: !0
        })) {
          er.set(o, _);
          return;
        }
      }
      er.delete(o);
    });
  }), /* @__PURE__ */ J.createElement(si.Provider, {
    value: i
  }, /* @__PURE__ */ J.createElement(ui.Provider, {
    value: n
  }, /* @__PURE__ */ J.createElement(ev, {
    node: b,
    receivedUserInput: W
  }, /* @__PURE__ */ J.createElement(g, ar(ar({
    role: i ? void 0 : "textbox",
    "aria-multiline": i ? void 0 : !0
  }, m), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: Dr || !Ot ? m.spellCheck : !1,
    autoCorrect: Dr || !Ot ? m.autoCorrect : "false",
    autoCapitalize: Dr || !Ot ? m.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !i,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: T,
    style: ar(ar({}, C ? {} : ar({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, R ? {
      minHeight: R
    } : {})), D),
    onBeforeInput: he((p) => {
      if (!Dr && !i && !Ie(p, m.onBeforeInput) && F.hasSelectableTarget(o, p.target) && (p.preventDefault(), !F.isComposing(o))) {
        var y = p.data;
        s.insertText(o, y);
      }
    }, [m.onBeforeInput, o, i]),
    onInput: he((p) => {
      if (!Ie(p, m.onInput)) {
        if (z.current) {
          z.current.handleInput();
          return;
        }
        for (var y of P.current)
          y();
        P.current = [];
      }
    }, [m.onInput]),
    onBlur: he((p) => {
      if (!(i || M.isUpdatingSelection || !F.hasSelectableTarget(o, p.target) || Ie(p, m.onBlur))) {
        var y = F.findDocumentOrShadowRoot(o);
        if (M.latestElement !== y.activeElement) {
          var {
            relatedTarget: w
          } = p, I = F.toDOMNode(o, o);
          if (w !== I && !(_e(w) && w.hasAttribute("data-slate-spacer"))) {
            if (w != null && br(w) && F.hasDOMNode(o, w)) {
              var Q = F.toSlateNode(o, w);
              if (q.isElement(Q) && !o.isVoid(Q))
                return;
            }
            if (rt) {
              var Y = y.getSelection();
              Y == null || Y.removeAllRanges();
            }
            Er.delete(o);
          }
        }
      }
    }, [i, M.isUpdatingSelection, M.latestElement, o, m.onBlur]),
    onClick: he((p) => {
      if (F.hasTarget(o, p.target) && !Ie(p, m.onClick) && br(p.target)) {
        var y = F.toSlateNode(o, p.target), w = F.findPath(o, y);
        if (!s.hasPath(o, w) || j.get(o, w) !== y)
          return;
        if (p.detail === Gc && w.length >= 1) {
          var I = w;
          if (!(q.isElement(y) && s.isBlock(o, y))) {
            var Q, Y = s.above(o, {
              match: (Ae) => q.isElement(Ae) && s.isBlock(o, Ae),
              at: w
            });
            I = (Q = Y == null ? void 0 : Y[1]) !== null && Q !== void 0 ? Q : w.slice(0, 1);
          }
          var ee = s.range(o, I);
          O.select(o, ee);
          return;
        }
        if (i)
          return;
        var oe = s.start(o, w), ie = s.end(o, w), ge = s.void(o, {
          at: oe
        }), ae = s.void(o, {
          at: ie
        });
        if (ge && ae && h.equals(ge[1], ae[1])) {
          var Ee = s.range(o, oe);
          O.select(o, Ee);
        }
      }
    }, [o, m.onClick, i]),
    onCompositionEnd: he((p) => {
      if (F.hasSelectableTarget(o, p.target)) {
        var y;
        if (F.isComposing(o) && Promise.resolve().then(() => {
          A(!1), Sr.set(o, !1);
        }), (y = z.current) === null || y === void 0 || y.handleCompositionEnd(p), Ie(p, m.onCompositionEnd) || ke)
          return;
        if (!rt && !Xf && !Uf && !Zf && !Jf && p.data) {
          var w = er.get(o);
          er.delete(o), w !== void 0 && (fr.set(o, o.marks), o.marks = w), s.insertText(o, p.data);
          var I = fr.get(o);
          fr.delete(o), I !== void 0 && (o.marks = I);
        }
      }
    }, [m.onCompositionEnd, o]),
    onCompositionUpdate: he((p) => {
      F.hasSelectableTarget(o, p.target) && !Ie(p, m.onCompositionUpdate) && (F.isComposing(o) || (A(!0), Sr.set(o, !0)));
    }, [m.onCompositionUpdate, o]),
    onCompositionStart: he((p) => {
      if (F.hasSelectableTarget(o, p.target)) {
        var y;
        if ((y = z.current) === null || y === void 0 || y.handleCompositionStart(p), Ie(p, m.onCompositionStart) || ke)
          return;
        A(!0);
        var {
          selection: w
        } = o;
        if (w && E.isExpanded(w)) {
          s.deleteFragment(o);
          return;
        }
      }
    }, [m.onCompositionStart, o]),
    onCopy: he((p) => {
      F.hasSelectableTarget(o, p.target) && !Ie(p, m.onCopy) && !du(p) && (p.preventDefault(), F.setFragmentData(o, p.clipboardData, "copy"));
    }, [m.onCopy, o]),
    onCut: he((p) => {
      if (!i && F.hasSelectableTarget(o, p.target) && !Ie(p, m.onCut) && !du(p)) {
        p.preventDefault(), F.setFragmentData(o, p.clipboardData, "cut");
        var {
          selection: y
        } = o;
        if (y)
          if (E.isExpanded(y))
            s.deleteFragment(o);
          else {
            var w = j.parent(o, y.anchor.path);
            s.isVoid(o, w) && O.delete(o);
          }
      }
    }, [i, o, m.onCut]),
    onDragOver: he((p) => {
      if (F.hasTarget(o, p.target) && !Ie(p, m.onDragOver)) {
        var y = F.toSlateNode(o, p.target);
        q.isElement(y) && s.isVoid(o, y) && p.preventDefault();
      }
    }, [m.onDragOver, o]),
    onDragStart: he((p) => {
      if (!i && F.hasTarget(o, p.target) && !Ie(p, m.onDragStart)) {
        var y = F.toSlateNode(o, p.target), w = F.findPath(o, y), I = q.isElement(y) && s.isVoid(o, y) || s.void(o, {
          at: w,
          voids: !0
        });
        if (I) {
          var Q = s.range(o, w);
          O.select(o, Q);
        }
        M.isDraggingInternally = !0, F.setFragmentData(o, p.dataTransfer, "drag");
      }
    }, [i, o, m.onDragStart, M]),
    onDrop: he((p) => {
      if (!i && F.hasTarget(o, p.target) && !Ie(p, m.onDrop)) {
        p.preventDefault();
        var y = o.selection, w = F.findEventRange(o, p), I = p.dataTransfer;
        O.select(o, w), M.isDraggingInternally && y && !E.equals(y, w) && !s.void(o, {
          at: w,
          voids: !0
        }) && O.delete(o, {
          at: y
        }), F.insertData(o, I), F.isFocused(o) || F.focus(o);
      }
      M.isDraggingInternally = !1;
    }, [i, o, m.onDrop, M]),
    onDragEnd: he((p) => {
      !i && M.isDraggingInternally && m.onDragEnd && F.hasTarget(o, p.target) && m.onDragEnd(p), M.isDraggingInternally = !1;
    }, [i, M, m, o]),
    onFocus: he((p) => {
      if (!i && !M.isUpdatingSelection && F.hasEditableTarget(o, p.target) && !Ie(p, m.onFocus)) {
        var y = F.toDOMNode(o, o), w = F.findDocumentOrShadowRoot(o);
        if (M.latestElement = w.activeElement, Vr && p.target !== y) {
          y.focus();
          return;
        }
        Er.set(o, !0);
      }
    }, [i, M, o, m.onFocus]),
    onKeyDown: he((p) => {
      if (!i && F.hasEditableTarget(o, p.target)) {
        var y;
        (y = z.current) === null || y === void 0 || y.handleKeyDown(p);
        var {
          nativeEvent: w
        } = p;
        if (F.isComposing(o) && w.isComposing === !1 && (Sr.set(o, !1), A(!1)), Ie(p, m.onKeyDown) || F.isComposing(o))
          return;
        var {
          selection: I
        } = o, Q = o.children[I !== null ? I.focus.path[0] : 0], Y = Eu(j.string(Q)) === "rtl";
        if (be.isRedo(w)) {
          p.preventDefault();
          var ee = o;
          typeof ee.redo == "function" && ee.redo();
          return;
        }
        if (be.isUndo(w)) {
          p.preventDefault();
          var oe = o;
          typeof oe.undo == "function" && oe.undo();
          return;
        }
        if (be.isMoveLineBackward(w)) {
          p.preventDefault(), O.move(o, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (be.isMoveLineForward(w)) {
          p.preventDefault(), O.move(o, {
            unit: "line"
          });
          return;
        }
        if (be.isExtendLineBackward(w)) {
          p.preventDefault(), O.move(o, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (be.isExtendLineForward(w)) {
          p.preventDefault(), O.move(o, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (be.isMoveBackward(w)) {
          p.preventDefault(), I && E.isCollapsed(I) ? O.move(o, {
            reverse: !Y
          }) : O.collapse(o, {
            edge: Y ? "end" : "start"
          });
          return;
        }
        if (be.isMoveForward(w)) {
          p.preventDefault(), I && E.isCollapsed(I) ? O.move(o, {
            reverse: Y
          }) : O.collapse(o, {
            edge: Y ? "start" : "end"
          });
          return;
        }
        if (be.isMoveWordBackward(w)) {
          p.preventDefault(), I && E.isExpanded(I) && O.collapse(o, {
            edge: "focus"
          }), O.move(o, {
            unit: "word",
            reverse: !Y
          });
          return;
        }
        if (be.isMoveWordForward(w)) {
          p.preventDefault(), I && E.isExpanded(I) && O.collapse(o, {
            edge: "focus"
          }), O.move(o, {
            unit: "word",
            reverse: Y
          });
          return;
        }
        if (Dr) {
          if ((Yu || rt) && I && (be.isDeleteBackward(w) || be.isDeleteForward(w)) && E.isCollapsed(I)) {
            var ie = j.parent(o, I.anchor.path);
            if (q.isElement(ie) && s.isVoid(o, ie) && (s.isInline(o, ie) || s.isBlock(o, ie))) {
              p.preventDefault(), s.deleteBackward(o, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (be.isBold(w) || be.isItalic(w) || be.isTransposeCharacter(w)) {
            p.preventDefault();
            return;
          }
          if (be.isSoftBreak(w)) {
            p.preventDefault(), s.insertSoftBreak(o);
            return;
          }
          if (be.isSplitBlock(w)) {
            p.preventDefault(), s.insertBreak(o);
            return;
          }
          if (be.isDeleteBackward(w)) {
            p.preventDefault(), I && E.isExpanded(I) ? s.deleteFragment(o, {
              direction: "backward"
            }) : s.deleteBackward(o);
            return;
          }
          if (be.isDeleteForward(w)) {
            p.preventDefault(), I && E.isExpanded(I) ? s.deleteFragment(o, {
              direction: "forward"
            }) : s.deleteForward(o);
            return;
          }
          if (be.isDeleteLineBackward(w)) {
            p.preventDefault(), I && E.isExpanded(I) ? s.deleteFragment(o, {
              direction: "backward"
            }) : s.deleteBackward(o, {
              unit: "line"
            });
            return;
          }
          if (be.isDeleteLineForward(w)) {
            p.preventDefault(), I && E.isExpanded(I) ? s.deleteFragment(o, {
              direction: "forward"
            }) : s.deleteForward(o, {
              unit: "line"
            });
            return;
          }
          if (be.isDeleteWordBackward(w)) {
            p.preventDefault(), I && E.isExpanded(I) ? s.deleteFragment(o, {
              direction: "backward"
            }) : s.deleteBackward(o, {
              unit: "word"
            });
            return;
          }
          if (be.isDeleteWordForward(w)) {
            p.preventDefault(), I && E.isExpanded(I) ? s.deleteFragment(o, {
              direction: "forward"
            }) : s.deleteForward(o, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [i, o, m.onKeyDown]),
    onPaste: he((p) => {
      !i && F.hasEditableTarget(o, p.target) && !Ie(p, m.onPaste) && (!Dr || rc(p.nativeEvent) || rt) && (p.preventDefault(), F.insertData(o, p.clipboardData));
    }, [i, o, m.onPaste])
  }), /* @__PURE__ */ J.createElement(nv, {
    decorations: N,
    node: o,
    renderElement: l,
    renderPlaceholder: c,
    renderLeaf: f,
    selection: o.selection
  })))));
}, uv = (r) => {
  var {
    attributes: e,
    children: t
  } = r;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ J.createElement("span", ar({}, e), t, ke && /* @__PURE__ */ J.createElement("br", null))
  );
}, iv = () => [], sv = (r, e) => {
  if (e.getBoundingClientRect && (!r.selection || r.selection && E.isCollapsed(r.selection))) {
    var t = e.startContainer.parentElement;
    t.getBoundingClientRect = e.getBoundingClientRect.bind(e), Ls(t, {
      scrollMode: "if-needed"
    }), delete t.getBoundingClientRect;
  }
}, Ie = (r, e) => {
  if (!e)
    return !1;
  var t = e(r);
  return t ?? (r.isDefaultPrevented() || r.isPropagationStopped());
}, du = (r) => br(r.target) && (r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement), ov = (r, e) => {
  if (!e)
    return !1;
  var t = e(r);
  return t ?? r.defaultPrevented;
}, lv = /* @__PURE__ */ kr(!1), fv = /* @__PURE__ */ kr({});
function cv(r) {
  var e = Ke([]).current, t = Ke({
    editor: r
  }).current, n = he((u) => {
    t.editor = u, e.forEach((i) => i(u));
  }, [e, t]), a = Ft(() => ({
    getSlate: () => t.editor,
    addEventListener: (u) => (e.push(u), () => {
      e.splice(e.indexOf(u), 1);
    })
  }), [e, t]);
  return {
    selectorContext: a,
    onChange: n
  };
}
var vv = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], dv = (r) => {
  var {
    editor: e,
    children: t,
    onChange: n,
    onSelectionChange: a,
    onValueChange: u,
    initialValue: i
  } = r, l = Ur(r, vv), [f, c] = J.useState(() => {
    if (!j.isNodeList(i))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(Te.stringify(i)));
    if (!s.isEditor(e))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(Te.stringify(e)));
    return e.children = i, Object.assign(e, l), {
      v: 0,
      editor: e
    };
  }), {
    selectorContext: v,
    onChange: D
  } = cv(e), g = he((o) => {
    var B;
    switch (n && n(e.children), o == null || (B = o.operation) === null || B === void 0 ? void 0 : B.type) {
      case "set_selection":
        a == null || a(e.selection);
        break;
      default:
        u == null || u(e.children);
    }
    c((A) => ({
      v: A.v + 1,
      editor: e
    })), D(e);
  }, [e, D, n, a, u]);
  cr(() => (An.set(e, g), () => {
    An.set(e, () => {
    });
  }), [e, g]);
  var [C, m] = Ar(F.isFocused(e));
  return cr(() => {
    m(F.isFocused(e));
  }, [e]), vt(() => {
    var o = () => m(F.isFocused(e));
    return Uu >= 17 ? (document.addEventListener("focusin", o), document.addEventListener("focusout", o), () => {
      document.removeEventListener("focusin", o), document.removeEventListener("focusout", o);
    }) : (document.addEventListener("focus", o, !0), document.addEventListener("blur", o, !0), () => {
      document.removeEventListener("focus", o, !0), document.removeEventListener("blur", o, !0);
    });
  }, []), /* @__PURE__ */ J.createElement(fv.Provider, {
    value: v
  }, /* @__PURE__ */ J.createElement(oi.Provider, {
    value: f
  }, /* @__PURE__ */ J.createElement(Ln.Provider, {
    value: f.editor
  }, /* @__PURE__ */ J.createElement(lv.Provider, {
    value: C
  }, t))));
}, hu = (r, e) => {
  var t = (e.top + e.bottom) / 2;
  return r.top <= t && r.bottom >= t;
}, Du = (r, e, t) => {
  var n = F.toDOMRange(r, e).getBoundingClientRect(), a = F.toDOMRange(r, t).getBoundingClientRect();
  return hu(n, a) && hu(a, n);
}, hv = (r, e) => {
  var t = s.range(r, E.end(e)), n = Array.from(s.positions(r, {
    at: e
  })), a = 0, u = n.length, i = Math.floor(u / 2);
  if (Du(r, s.range(r, n[a]), t))
    return s.range(r, n[a], t);
  if (n.length < 2)
    return s.range(r, n[n.length - 1], t);
  for (; i !== n.length && i !== a; )
    Du(r, s.range(r, n[i]), t) ? u = i : a = i, i = Math.floor((a + u) / 2);
  return s.range(r, n[u], t);
};
function gu(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(r, a).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function mu(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gu(Object(t), !0).forEach(function(n) {
      Xe(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : gu(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
var Dv = function(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = e, {
    apply: a,
    onChange: u,
    deleteBackward: i,
    addMark: l,
    removeMark: f
  } = n;
  return Kt.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (c, v) => {
    var D, g;
    (D = Vn.get(n)) === null || D === void 0 || D(), !er.get(n) && (g = ze.get(n)) !== null && g !== void 0 && g.length && er.set(n, null), fr.delete(n), l(c, v);
  }, n.removeMark = (c) => {
    var v;
    !er.get(n) && (v = ze.get(n)) !== null && v !== void 0 && v.length && er.set(n, null), fr.delete(n), f(c);
  }, n.deleteBackward = (c) => {
    if (c !== "line")
      return i(c);
    if (n.selection && E.isCollapsed(n.selection)) {
      var v = s.above(n, {
        match: (m) => q.isElement(m) && s.isBlock(n, m),
        at: n.selection
      });
      if (v) {
        var [, D] = v, g = s.range(n, D, n.selection.anchor), C = hv(n, g);
        E.isCollapsed(C) || O.delete(n, {
          at: C
        });
      }
    }
  }, n.apply = (c) => {
    var v = [], D = [], g = ze.get(n);
    if (g != null && g.length) {
      var C = g.map((T) => hc(T, c)).filter(Boolean);
      ze.set(n, C);
    }
    var m = Cr.get(n);
    m && Cr.set(n, au(n, m, c));
    var o = pr.get(n);
    if (o != null && o.at) {
      var B = te.isPoint(o == null ? void 0 : o.at) ? wn(n, o.at, c) : au(n, o.at, c);
      pr.set(n, B ? mu(mu({}, o), {}, {
        at: B
      }) : null);
    }
    switch (c.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        v.push(...Wr(n, c.path));
        break;
      }
      case "set_selection": {
        var A;
        (A = at.get(n)) === null || A === void 0 || A.unref(), at.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        v.push(...Wr(n, h.parent(c.path)));
        break;
      }
      case "merge_node": {
        var b = h.previous(c.path);
        v.push(...Wr(n, b));
        break;
      }
      case "move_node": {
        var P = h.common(h.parent(c.path), h.parent(c.newPath));
        v.push(...Wr(n, P));
        var R;
        h.isBefore(c.path, c.newPath) ? (v.push(...Wr(n, h.parent(c.path))), R = c.newPath) : (v.push(...Wr(n, h.parent(c.newPath))), R = c.path);
        var k = j.get(e, h.parent(R)), L = F.findKey(n, k), W = s.pathRef(n, h.parent(R));
        D.push([W, L]);
        break;
      }
    }
    a(c);
    for (var [K, M] of v) {
      var [z] = s.node(n, K);
      Nt.set(z, M);
    }
    for (var [G, S] of D)
      if (G.current) {
        var [$] = s.node(n, G.current);
        Nt.set($, S);
      }
  }, n.setFragmentData = (c) => {
    var {
      selection: v
    } = n;
    if (v) {
      var [D, g] = E.edges(v), C = s.void(n, {
        at: D.path
      }), m = s.void(n, {
        at: g.path
      });
      if (!(E.isCollapsed(v) && !C)) {
        var o = F.toDOMRange(n, v), B = o.cloneContents(), A = B.childNodes[0];
        if (B.childNodes.forEach((z) => {
          z.textContent && z.textContent.trim() !== "" && (A = z);
        }), m) {
          var [b] = m, P = o.cloneRange(), R = F.toDOMNode(n, b);
          P.setEndAfter(R), B = P.cloneContents();
        }
        if (C && (A = B.querySelector("[data-slate-spacer]")), Array.from(B.querySelectorAll("[data-slate-zero-width]")).forEach((z) => {
          var G = z.getAttribute("data-slate-zero-width") === "n";
          z.textContent = G ? `
` : "";
        }), Ju(A)) {
          var k = A.ownerDocument.createElement("span");
          k.style.whiteSpace = "pre", k.appendChild(A), B.appendChild(k), A = k;
        }
        var L = n.getFragment(), W = JSON.stringify(L), K = window.btoa(encodeURIComponent(W));
        A.setAttribute("data-slate-fragment", K), c.setData("application/".concat(t), K);
        var M = B.ownerDocument.createElement("div");
        return M.appendChild(B), M.setAttribute("hidden", "true"), B.ownerDocument.body.appendChild(M), c.setData("text/html", M.innerHTML), c.setData("text/plain", Qu(M)), B.ownerDocument.body.removeChild(M), c;
      }
    }
  }, n.insertData = (c) => {
    n.insertFragmentData(c) || n.insertTextData(c);
  }, n.insertFragmentData = (c) => {
    var v = c.getData("application/".concat(t)) || ic(c);
    if (v) {
      var D = decodeURIComponent(window.atob(v)), g = JSON.parse(D);
      return n.insertFragment(g), !0;
    }
    return !1;
  }, n.insertTextData = (c) => {
    var v = c.getData("text/plain");
    if (v) {
      var D = v.split(/\r\n|\r|\n/), g = !1;
      for (var C of D)
        g && O.splitNodes(n, {
          always: !0
        }), n.insertText(C), g = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (c) => {
    var v = Uu < 18 ? wi.unstable_batchedUpdates : (D) => D();
    v(() => {
      var D = An.get(n);
      D && D(c), u(c);
    });
  }, n;
}, Wr = (r, e) => {
  var t = [];
  for (var [n, a] of s.levels(r, {
    at: e
  })) {
    var u = F.findKey(r, n);
    t.push([a, u]);
  }
  return t;
}, gv = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(r) {
    return Re(r) && Array.isArray(r.redos) && Array.isArray(r.undos) && (r.redos.length === 0 || Br.isOperationList(r.redos[0].operations)) && (r.undos.length === 0 || Br.isOperationList(r.undos[0].operations));
  }
}, fn = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), Hr = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(r) {
    return gv.isHistory(r.history) && s.isEditor(r);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(r) {
    return cn.get(r);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(r) {
    return fn.get(r);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(r) {
    r.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(r) {
    r.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(r, e) {
    var t = Hr.isMerging(r);
    cn.set(r, !1), e(), cn.set(r, t);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(r, e) {
    var t = Hr.isSaving(r);
    fn.set(r, !1), e(), fn.set(r, t);
  }
}, mv = (r) => {
  var e = r, {
    apply: t
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
      var u = a[a.length - 1];
      u.selectionBefore && O.setSelection(e, u.selectionBefore), Hr.withoutSaving(e, () => {
        s.withoutNormalizing(e, () => {
          for (var i of u.operations)
            e.apply(i);
        });
      }), n.redos.pop(), e.writeHistory("undos", u);
    }
  }, e.undo = () => {
    var {
      history: n
    } = e, {
      undos: a
    } = n;
    if (a.length > 0) {
      var u = a[a.length - 1];
      Hr.withoutSaving(e, () => {
        s.withoutNormalizing(e, () => {
          var i = u.operations.map(Br.inverse).reverse();
          for (var l of i)
            e.apply(l);
          u.selectionBefore && O.setSelection(e, u.selectionBefore);
        });
      }), e.writeHistory("redos", u), n.undos.pop();
    }
  }, e.apply = (n) => {
    var {
      operations: a,
      history: u
    } = e, {
      undos: i
    } = u, l = i[i.length - 1], f = l && l.operations[l.operations.length - 1], c = Hr.isSaving(e), v = Hr.isMerging(e);
    if (c == null && (c = Cv(n)), c) {
      if (v == null && (l == null ? v = !1 : a.length !== 0 ? v = !0 : v = pv(n, f)), l && v)
        l.operations.push(n);
      else {
        var D = {
          operations: [n],
          selectionBefore: e.selection
        };
        e.writeHistory("undos", D);
      }
      for (; i.length > 100; )
        i.shift();
      u.redos = [];
    }
    t(n);
  }, e.writeHistory = (n, a) => {
    e.history[n].push(a);
  }, e;
}, pv = (r, e) => !!(e && r.type === "insert_text" && e.type === "insert_text" && r.offset === e.offset + e.text.length && h.equals(r.path, e.path) || e && r.type === "remove_text" && e.type === "remove_text" && r.offset + r.text.length === e.offset && h.equals(r.path, e.path)), Cv = (r, e) => r.type !== "set_selection";
const Bv = () => {
  const [r] = Ar(() => Dv(mv(pf())));
  return [r];
}, dr = Symbol.for("@ts-pattern/matcher"), Ev = Symbol.for("@ts-pattern/isVariadic"), Mt = "@ts-pattern/anonymous-select-key", On = (r) => !!(r && typeof r == "object"), Pt = (r) => r && !!r[dr], sr = (r, e, t) => {
  if (Pt(r)) {
    const n = r[dr](), { matched: a, selections: u } = n.match(e);
    return a && u && Object.keys(u).forEach((i) => t(i, u[i])), a;
  }
  if (On(r)) {
    if (!On(e))
      return !1;
    if (Array.isArray(r)) {
      if (!Array.isArray(e))
        return !1;
      let n = [], a = [], u = [];
      for (const i of r.keys()) {
        const l = r[i];
        Pt(l) && l[Ev] ? u.push(l) : u.length ? a.push(l) : n.push(l);
      }
      if (u.length) {
        if (u.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (e.length < n.length + a.length)
          return !1;
        const i = e.slice(0, n.length), l = a.length === 0 ? [] : e.slice(-a.length), f = e.slice(n.length, a.length === 0 ? 1 / 0 : -a.length);
        return n.every((c, v) => sr(c, i[v], t)) && a.every((c, v) => sr(c, l[v], t)) && (u.length === 0 || sr(u[0], f, t));
      }
      return r.length === e.length && r.every((i, l) => sr(i, e[l], t));
    }
    return Object.keys(r).every((n) => {
      const a = r[n];
      return (n in e || Pt(u = a) && u[dr]().matcherType === "optional") && sr(a, e[n], t);
      var u;
    });
  }
  return Object.is(e, r);
}, Fr = (r) => {
  var e, t, n;
  return On(r) ? Pt(r) ? (e = (t = (n = r[dr]()).getSelectionKeys) == null ? void 0 : t.call(n)) != null ? e : [] : Array.isArray(r) ? dt(r, Fr) : dt(Object.values(r), Fr) : [];
}, dt = (r, e) => r.reduce((t, n) => t.concat(e(n)), []);
function Je(r) {
  return Object.assign(r, { optional: () => Av(r), and: (e) => Fe(r, e), or: (e) => bv(r, e), select: (e) => e === void 0 ? pu(r) : pu(e, r) });
}
function Av(r) {
  return Je({ [dr]: () => ({ match: (e) => {
    let t = {};
    const n = (a, u) => {
      t[a] = u;
    };
    return e === void 0 ? (Fr(r).forEach((a) => n(a, void 0)), { matched: !0, selections: t }) : { matched: sr(r, e, n), selections: t };
  }, getSelectionKeys: () => Fr(r), matcherType: "optional" }) });
}
function Fe(...r) {
  return Je({ [dr]: () => ({ match: (e) => {
    let t = {};
    const n = (a, u) => {
      t[a] = u;
    };
    return { matched: r.every((a) => sr(a, e, n)), selections: t };
  }, getSelectionKeys: () => dt(r, Fr), matcherType: "and" }) });
}
function bv(...r) {
  return Je({ [dr]: () => ({ match: (e) => {
    let t = {};
    const n = (a, u) => {
      t[a] = u;
    };
    return dt(r, Fr).forEach((a) => n(a, void 0)), { matched: r.some((a) => sr(a, e, n)), selections: t };
  }, getSelectionKeys: () => dt(r, Fr), matcherType: "or" }) });
}
function ce(r) {
  return { [dr]: () => ({ match: (e) => ({ matched: !!r(e) }) }) };
}
function pu(...r) {
  const e = typeof r[0] == "string" ? r[0] : void 0, t = r.length === 2 ? r[1] : typeof r[0] == "string" ? void 0 : r[0];
  return Je({ [dr]: () => ({ match: (n) => {
    let a = { [e ?? Mt]: n };
    return { matched: t === void 0 || sr(t, n, (u, i) => {
      a[u] = i;
    }), selections: a };
  }, getSelectionKeys: () => [e ?? Mt].concat(t === void 0 ? [] : Fr(t)) }) });
}
function ur(r) {
  return typeof r == "number";
}
function xr(r) {
  return typeof r == "string";
}
function gr(r) {
  return typeof r == "bigint";
}
Je(ce(function(r) {
  return !0;
}));
const Pr = (r) => Object.assign(Je(r), { startsWith: (e) => {
  return Pr(Fe(r, (t = e, ce((n) => xr(n) && n.startsWith(t)))));
  var t;
}, endsWith: (e) => {
  return Pr(Fe(r, (t = e, ce((n) => xr(n) && n.endsWith(t)))));
  var t;
}, minLength: (e) => Pr(Fe(r, ((t) => ce((n) => xr(n) && n.length >= t))(e))), maxLength: (e) => Pr(Fe(r, ((t) => ce((n) => xr(n) && n.length <= t))(e))), includes: (e) => {
  return Pr(Fe(r, (t = e, ce((n) => xr(n) && n.includes(t)))));
  var t;
}, regex: (e) => {
  return Pr(Fe(r, (t = e, ce((n) => xr(n) && !!n.match(t)))));
  var t;
} });
Pr(ce(xr));
const ir = (r) => Object.assign(Je(r), { between: (e, t) => ir(Fe(r, ((n, a) => ce((u) => ur(u) && n <= u && a >= u))(e, t))), lt: (e) => ir(Fe(r, ((t) => ce((n) => ur(n) && n < t))(e))), gt: (e) => ir(Fe(r, ((t) => ce((n) => ur(n) && n > t))(e))), lte: (e) => ir(Fe(r, ((t) => ce((n) => ur(n) && n <= t))(e))), gte: (e) => ir(Fe(r, ((t) => ce((n) => ur(n) && n >= t))(e))), int: () => ir(Fe(r, ce((e) => ur(e) && Number.isInteger(e)))), finite: () => ir(Fe(r, ce((e) => ur(e) && Number.isFinite(e)))), positive: () => ir(Fe(r, ce((e) => ur(e) && e > 0))), negative: () => ir(Fe(r, ce((e) => ur(e) && e < 0))) });
ir(ce(ur));
const mr = (r) => Object.assign(Je(r), { between: (e, t) => mr(Fe(r, ((n, a) => ce((u) => gr(u) && n <= u && a >= u))(e, t))), lt: (e) => mr(Fe(r, ((t) => ce((n) => gr(n) && n < t))(e))), gt: (e) => mr(Fe(r, ((t) => ce((n) => gr(n) && n > t))(e))), lte: (e) => mr(Fe(r, ((t) => ce((n) => gr(n) && n <= t))(e))), gte: (e) => mr(Fe(r, ((t) => ce((n) => gr(n) && n >= t))(e))), positive: () => mr(Fe(r, ce((e) => gr(e) && e > 0))), negative: () => mr(Fe(r, ce((e) => gr(e) && e < 0))) });
mr(ce(gr));
Je(ce(function(r) {
  return typeof r == "boolean";
}));
Je(ce(function(r) {
  return typeof r == "symbol";
}));
Je(ce(function(r) {
  return r == null;
}));
Je(ce(function(r) {
  return r != null;
}));
const xn = { matched: !1, value: void 0 };
function ht(r) {
  return new It(r, xn);
}
class It {
  constructor(e, t) {
    this.input = void 0, this.state = void 0, this.input = e, this.state = t;
  }
  with(...e) {
    if (this.state.matched)
      return this;
    const t = e[e.length - 1], n = [e[0]];
    let a;
    e.length === 3 && typeof e[1] == "function" ? a = e[1] : e.length > 2 && n.push(...e.slice(1, e.length - 1));
    let u = !1, i = {};
    const l = (c, v) => {
      u = !0, i[c] = v;
    }, f = !n.some((c) => sr(c, this.input, l)) || a && !a(this.input) ? xn : { matched: !0, value: t(u ? Mt in i ? i[Mt] : i : this.input, this.input) };
    return new It(this.input, f);
  }
  when(e, t) {
    if (this.state.matched)
      return this;
    const n = !!e(this.input);
    return new It(this.input, n ? { matched: !0, value: t(this.input, this.input) } : xn);
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
var kt = /* @__PURE__ */ ((r) => (r.Paragraph = "paragraph", r.Heading = "heading", r.Bold = "bold", r.Code = "code", r))(kt || {});
const Fv = (r) => {
  const { attributes: e, children: t } = r;
  return /* @__PURE__ */ Qe.jsx("span", { ...e, children: t });
}, wv = (r) => {
  const { attributes: e, children: t } = r;
  return /* @__PURE__ */ Qe.jsx("p", { ...e, children: t });
}, yv = (r) => {
  const { attributes: e, children: t } = r;
  return /* @__PURE__ */ Qe.jsx("pre", { ...e, children: /* @__PURE__ */ Qe.jsx("code", { children: t }) });
};
var fi = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var e = {}.hasOwnProperty;
    function t() {
      for (var u = "", i = 0; i < arguments.length; i++) {
        var l = arguments[i];
        l && (u = a(u, n(l)));
      }
      return u;
    }
    function n(u) {
      if (typeof u == "string" || typeof u == "number")
        return u;
      if (typeof u != "object")
        return "";
      if (Array.isArray(u))
        return t.apply(null, u);
      if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
        return u.toString();
      var i = "";
      for (var l in u)
        e.call(u, l) && u[l] && (i = a(i, l));
      return i;
    }
    function a(u, i) {
      return i ? u ? u + " " + i : u + i : u;
    }
    r.exports ? (t.default = t, r.exports = t) : window.classNames = t;
  })();
})(fi);
var Ov = fi.exports;
const xv = /* @__PURE__ */ Lt(Ov), Pv = (r) => {
  const { attributes: e, leaf: t, children: n } = r, a = xv({
    "wu-font-bold": t.bold,
    "bg-red": !0
  });
  return /* @__PURE__ */ Qe.jsx("span", { className: a, ...e, children: n });
}, Sv = () => {
  const r = he((t) => {
    const { children: n, ...a } = t, u = t.element.type;
    return ht(u).with(kt.Bold, () => /* @__PURE__ */ Qe.jsx(yv, { ...a, children: n })).with(kt.Code, () => /* @__PURE__ */ Qe.jsx(Fv, { ...a, children: n })).otherwise(() => /* @__PURE__ */ Qe.jsx(wv, { ...a, children: n }));
  }, []), e = he((t) => {
    const { children: n, ...a } = t;
    return /* @__PURE__ */ Qe.jsx(Pv, { ...a, children: n });
  }, []);
  return { renderElement: r, renderLeaf: e };
};
function Tv() {
  return [
    {
      type: kt.Paragraph,
      children: [{ text: "" }]
    }
  ];
}
const ci = {
  isBoldMarkActive(r) {
    const e = s.marks(r);
    return ht(e).with({ bold: !0 }, () => !0).otherwise(() => !1);
  },
  toggleBoldMark(r) {
    const e = ci.isBoldMarkActive(r);
    ht(e).with(!0, () => {
      s.removeMark(r, "bold");
    }).otherwise(() => {
      s.addMark(r, "bold", !0);
    });
  }
}, Rv = (r) => [(t) => {
  ht(t).with({ ctrlKey: !0 }, (n) => {
    ht(n.key).with("b", () => {
      console.info("切换加粗"), t.preventDefault(), ci.toggleBoldMark(r);
    });
  });
}], Mv = (r) => {
  const { placeholder: e, initialValue: t = Tv() } = r, [n] = Bv(), { renderElement: a, renderLeaf: u } = Sv(), [i] = Rv(n);
  return /* @__PURE__ */ Qe.jsx(dv, { editor: n, initialValue: t, children: /* @__PURE__ */ Qe.jsx(
    av,
    {
      renderElement: a,
      renderLeaf: u,
      placeholder: e,
      onKeyDown: i
    }
  ) });
};
export {
  Mv as WuEditor
};
