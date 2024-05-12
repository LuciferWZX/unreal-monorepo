import * as x from "react";
import re, { useCallback as $e, useState as Wt, useRef as Ie, useReducer as Lc, useMemo as hr, useEffect as at, createContext as rr, useLayoutEffect as _c, useContext as st, Component as Wv, memo as Hv, forwardRef as cn, Children as qv, createRef as Uv, useImperativeHandle as Gv, createElement as Eo } from "react";
import * as Kv from "react-dom";
import Vc from "react-dom";
var Sa = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wo = { exports: {} }, Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gs;
function Xv() {
  if (gs)
    return Hn;
  gs = 1;
  var e = re, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(u, s, l) {
    var c, d = {}, v = null, b = null;
    l !== void 0 && (v = "" + l), s.key !== void 0 && (v = "" + s.key), s.ref !== void 0 && (b = s.ref);
    for (c in s)
      n.call(s, c) && !i.hasOwnProperty(c) && (d[c] = s[c]);
    if (u && u.defaultProps)
      for (c in s = u.defaultProps, s)
        d[c] === void 0 && (d[c] = s[c]);
    return { $$typeof: t, type: u, key: v, ref: b, props: d, _owner: a.current };
  }
  return Hn.Fragment = r, Hn.jsx = o, Hn.jsxs = o, Hn;
}
var qn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ps;
function Yv() {
  return ps || (ps = 1, process.env.NODE_ENV !== "production" && function() {
    var e = re, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), u = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), m = Symbol.iterator, f = "@@iterator";
    function g(D) {
      if (D === null || typeof D != "object")
        return null;
      var X = m && D[m] || D[f];
      return typeof X == "function" ? X : null;
    }
    var p = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(D) {
      {
        for (var X = arguments.length, ne = new Array(X > 1 ? X - 1 : 0), fe = 1; fe < X; fe++)
          ne[fe - 1] = arguments[fe];
        y("error", D, ne);
      }
    }
    function y(D, X, ne) {
      {
        var fe = p.ReactDebugCurrentFrame, Oe = fe.getStackAddendum();
        Oe !== "" && (X += "%s", ne = ne.concat([Oe]));
        var ke = ne.map(function(Ae) {
          return String(Ae);
        });
        ke.unshift("Warning: " + X), Function.prototype.apply.call(console[D], console, ke);
      }
    }
    var E = !1, F = !1, B = !1, w = !1, $ = !1, P;
    P = Symbol.for("react.module.reference");
    function T(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === i || $ || D === a || D === l || D === c || w || D === b || E || F || B || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === d || D.$$typeof === o || D.$$typeof === u || D.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === P || D.getModuleId !== void 0));
    }
    function _(D, X, ne) {
      var fe = D.displayName;
      if (fe)
        return fe;
      var Oe = X.displayName || X.name || "";
      return Oe !== "" ? ne + "(" + Oe + ")" : ne;
    }
    function j(D) {
      return D.displayName || "Context";
    }
    function N(D) {
      if (D == null)
        return null;
      if (typeof D.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof D == "function")
        return D.displayName || D.name || null;
      if (typeof D == "string")
        return D;
      switch (D) {
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
      if (typeof D == "object")
        switch (D.$$typeof) {
          case u:
            var X = D;
            return j(X) + ".Consumer";
          case o:
            var ne = D;
            return j(ne._context) + ".Provider";
          case s:
            return _(D, D.render, "ForwardRef");
          case d:
            var fe = D.displayName || null;
            return fe !== null ? fe : N(D.type) || "Memo";
          case v: {
            var Oe = D, ke = Oe._payload, Ae = Oe._init;
            try {
              return N(Ae(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, R = 0, M, O, k, H, U, K, J;
    function te() {
    }
    te.__reactDisabledLog = !0;
    function S() {
      {
        if (R === 0) {
          M = console.log, O = console.info, k = console.warn, H = console.error, U = console.group, K = console.groupCollapsed, J = console.groupEnd;
          var D = {
            configurable: !0,
            enumerable: !0,
            value: te,
            writable: !0
          };
          Object.defineProperties(console, {
            info: D,
            log: D,
            warn: D,
            error: D,
            group: D,
            groupCollapsed: D,
            groupEnd: D
          });
        }
        R++;
      }
    }
    function V() {
      {
        if (R--, R === 0) {
          var D = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, D, {
              value: M
            }),
            info: I({}, D, {
              value: O
            }),
            warn: I({}, D, {
              value: k
            }),
            error: I({}, D, {
              value: H
            }),
            group: I({}, D, {
              value: U
            }),
            groupCollapsed: I({}, D, {
              value: K
            }),
            groupEnd: I({}, D, {
              value: J
            })
          });
        }
        R < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = p.ReactCurrentDispatcher, Y;
    function ue(D, X, ne) {
      {
        if (Y === void 0)
          try {
            throw Error();
          } catch (Oe) {
            var fe = Oe.stack.trim().match(/\n( *(at )?)/);
            Y = fe && fe[1] || "";
          }
        return `
` + Y + D;
      }
    }
    var ie = !1, se;
    {
      var de = typeof WeakMap == "function" ? WeakMap : Map;
      se = new de();
    }
    function he(D, X) {
      if (!D || ie)
        return "";
      {
        var ne = se.get(D);
        if (ne !== void 0)
          return ne;
      }
      var fe;
      ie = !0;
      var Oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ke;
      ke = z.current, z.current = null, S();
      try {
        if (X) {
          var Ae = function() {
            throw Error();
          };
          if (Object.defineProperty(Ae.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ae, []);
            } catch (or) {
              fe = or;
            }
            Reflect.construct(D, [], Ae);
          } else {
            try {
              Ae.call();
            } catch (or) {
              fe = or;
            }
            D.call(Ae.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (or) {
            fe = or;
          }
          D();
        }
      } catch (or) {
        if (or && fe && typeof or.stack == "string") {
          for (var De = or.stack.split(`
`), ct = fe.stack.split(`
`), Ye = De.length - 1, Qe = ct.length - 1; Ye >= 1 && Qe >= 0 && De[Ye] !== ct[Qe]; )
            Qe--;
          for (; Ye >= 1 && Qe >= 0; Ye--, Qe--)
            if (De[Ye] !== ct[Qe]) {
              if (Ye !== 1 || Qe !== 1)
                do
                  if (Ye--, Qe--, Qe < 0 || De[Ye] !== ct[Qe]) {
                    var xt = `
` + De[Ye].replace(" at new ", " at ");
                    return D.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", D.displayName)), typeof D == "function" && se.set(D, xt), xt;
                  }
                while (Ye >= 1 && Qe >= 0);
              break;
            }
        }
      } finally {
        ie = !1, z.current = ke, V(), Error.prepareStackTrace = Oe;
      }
      var gn = D ? D.displayName || D.name : "", hs = gn ? ue(gn) : "";
      return typeof D == "function" && se.set(D, hs), hs;
    }
    function ye(D, X, ne) {
      return he(D, !1);
    }
    function Z(D) {
      var X = D.prototype;
      return !!(X && X.isReactComponent);
    }
    function me(D, X, ne) {
      if (D == null)
        return "";
      if (typeof D == "function")
        return he(D, Z(D));
      if (typeof D == "string")
        return ue(D);
      switch (D) {
        case l:
          return ue("Suspense");
        case c:
          return ue("SuspenseList");
      }
      if (typeof D == "object")
        switch (D.$$typeof) {
          case s:
            return ye(D.render);
          case d:
            return me(D.type, X, ne);
          case v: {
            var fe = D, Oe = fe._payload, ke = fe._init;
            try {
              return me(ke(Oe), X, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Be = Object.prototype.hasOwnProperty, we = {}, ze = p.ReactDebugCurrentFrame;
    function Fe(D) {
      if (D) {
        var X = D._owner, ne = me(D.type, D._source, X ? X.type : null);
        ze.setExtraStackFrame(ne);
      } else
        ze.setExtraStackFrame(null);
    }
    function Ce(D, X, ne, fe, Oe) {
      {
        var ke = Function.call.bind(Be);
        for (var Ae in D)
          if (ke(D, Ae)) {
            var De = void 0;
            try {
              if (typeof D[Ae] != "function") {
                var ct = Error((fe || "React class") + ": " + ne + " type `" + Ae + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof D[Ae] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ct.name = "Invariant Violation", ct;
              }
              De = D[Ae](X, Ae, fe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ye) {
              De = Ye;
            }
            De && !(De instanceof Error) && (Fe(Oe), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", fe || "React class", ne, Ae, typeof De), Fe(null)), De instanceof Error && !(De.message in we) && (we[De.message] = !0, Fe(Oe), C("Failed %s type: %s", ne, De.message), Fe(null));
          }
      }
    }
    var ce = Array.isArray;
    function le(D) {
      return ce(D);
    }
    function xe(D) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, ne = X && D[Symbol.toStringTag] || D.constructor.name || "Object";
        return ne;
      }
    }
    function Ue(D) {
      try {
        return We(D), !1;
      } catch {
        return !0;
      }
    }
    function We(D) {
      return "" + D;
    }
    function ot(D) {
      if (Ue(D))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xe(D)), We(D);
    }
    var At = p.ReactCurrentOwner, lt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, St, nr, bt;
    bt = {};
    function zn(D) {
      if (Be.call(D, "ref")) {
        var X = Object.getOwnPropertyDescriptor(D, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return D.ref !== void 0;
    }
    function Wn(D) {
      if (Be.call(D, "key")) {
        var X = Object.getOwnPropertyDescriptor(D, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return D.key !== void 0;
    }
    function _r(D, X) {
      if (typeof D.ref == "string" && At.current && X && At.current.stateNode !== X) {
        var ne = N(At.current.type);
        bt[ne] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(At.current.type), D.ref), bt[ne] = !0);
      }
    }
    function ar(D, X) {
      {
        var ne = function() {
          St || (St = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        ne.isReactWarning = !0, Object.defineProperty(D, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function ir(D, X) {
      {
        var ne = function() {
          nr || (nr = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        ne.isReactWarning = !0, Object.defineProperty(D, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var wr = function(D, X, ne, fe, Oe, ke, Ae) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: D,
        key: X,
        ref: ne,
        props: Ae,
        // Record the component responsible for creating this element.
        _owner: ke
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
        value: fe
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Vr(D, X, ne, fe, Oe) {
      {
        var ke, Ae = {}, De = null, ct = null;
        ne !== void 0 && (ot(ne), De = "" + ne), Wn(X) && (ot(X.key), De = "" + X.key), zn(X) && (ct = X.ref, _r(X, Oe));
        for (ke in X)
          Be.call(X, ke) && !lt.hasOwnProperty(ke) && (Ae[ke] = X[ke]);
        if (D && D.defaultProps) {
          var Ye = D.defaultProps;
          for (ke in Ye)
            Ae[ke] === void 0 && (Ae[ke] = Ye[ke]);
        }
        if (De || ct) {
          var Qe = typeof D == "function" ? D.displayName || D.name || "Unknown" : D;
          De && ar(Ae, Qe), ct && ir(Ae, Qe);
        }
        return wr(D, De, ct, Oe, fe, At.current, Ae);
      }
    }
    var Gt = p.ReactCurrentOwner, Mt = p.ReactDebugCurrentFrame;
    function Fr(D) {
      if (D) {
        var X = D._owner, ne = me(D.type, D._source, X ? X.type : null);
        Mt.setExtraStackFrame(ne);
      } else
        Mt.setExtraStackFrame(null);
    }
    var Ke;
    Ke = !1;
    function vn(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Fa() {
      {
        if (Gt.current) {
          var D = N(Gt.current.type);
          if (D)
            return `

Check the render method of \`` + D + "`.";
        }
        return "";
      }
    }
    function Xe(D) {
      {
        if (D !== void 0) {
          var X = D.fileName.replace(/^.*[\\\/]/, ""), ne = D.lineNumber;
          return `

Check your code at ` + X + ":" + ne + ".";
        }
        return "";
      }
    }
    var Ze = {};
    function Ot(D) {
      {
        var X = Fa();
        if (!X) {
          var ne = typeof D == "string" ? D : D.displayName || D.name;
          ne && (X = `

Check the top-level render call using <` + ne + ">.");
        }
        return X;
      }
    }
    function Ct(D, X) {
      {
        if (!D._store || D._store.validated || D.key != null)
          return;
        D._store.validated = !0;
        var ne = Ot(X);
        if (Ze[ne])
          return;
        Ze[ne] = !0;
        var fe = "";
        D && D._owner && D._owner !== Gt.current && (fe = " It was passed a child from " + N(D._owner.type) + "."), Fr(D), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, fe), Fr(null);
      }
    }
    function zr(D, X) {
      {
        if (typeof D != "object")
          return;
        if (le(D))
          for (var ne = 0; ne < D.length; ne++) {
            var fe = D[ne];
            vn(fe) && Ct(fe, X);
          }
        else if (vn(D))
          D._store && (D._store.validated = !0);
        else if (D) {
          var Oe = g(D);
          if (typeof Oe == "function" && Oe !== D.entries)
            for (var ke = Oe.call(D), Ae; !(Ae = ke.next()).done; )
              vn(Ae.value) && Ct(Ae.value, X);
        }
      }
    }
    function _i(D) {
      {
        var X = D.type;
        if (X == null || typeof X == "string")
          return;
        var ne;
        if (typeof X == "function")
          ne = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === d))
          ne = X.propTypes;
        else
          return;
        if (ne) {
          var fe = N(X);
          Ce(ne, D.props, "prop", fe, D);
        } else if (X.PropTypes !== void 0 && !Ke) {
          Ke = !0;
          var Oe = N(X);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Oe || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ba(D) {
      {
        for (var X = Object.keys(D.props), ne = 0; ne < X.length; ne++) {
          var fe = X[ne];
          if (fe !== "children" && fe !== "key") {
            Fr(D), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", fe), Fr(null);
            break;
          }
        }
        D.ref !== null && (Fr(D), C("Invalid attribute `ref` supplied to `React.Fragment`."), Fr(null));
      }
    }
    function hn(D, X, ne, fe, Oe, ke) {
      {
        var Ae = T(D);
        if (!Ae) {
          var De = "";
          (D === void 0 || typeof D == "object" && D !== null && Object.keys(D).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ct = Xe(Oe);
          ct ? De += ct : De += Fa();
          var Ye;
          D === null ? Ye = "null" : le(D) ? Ye = "array" : D !== void 0 && D.$$typeof === t ? (Ye = "<" + (N(D.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Ye = typeof D, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ye, De);
        }
        var Qe = Vr(D, X, ne, Oe, ke);
        if (Qe == null)
          return Qe;
        if (Ae) {
          var xt = X.children;
          if (xt !== void 0)
            if (fe)
              if (le(xt)) {
                for (var gn = 0; gn < xt.length; gn++)
                  zr(xt[gn], D);
                Object.freeze && Object.freeze(xt);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              zr(xt, D);
        }
        return D === n ? Ba(Qe) : _i(Qe), Qe;
      }
    }
    function Aa(D, X, ne) {
      return hn(D, X, ne, !0);
    }
    function Vi(D, X, ne) {
      return hn(D, X, ne, !1);
    }
    var zi = Vi, Wi = Aa;
    qn.Fragment = n, qn.jsx = zi, qn.jsxs = Wi;
  }()), qn;
}
process.env.NODE_ENV === "production" ? wo.exports = Xv() : wo.exports = Yv();
var Me = wo.exports, Jv = eh, zc = "֑-߿יִ-﷽ﹰ-ﻼ", Wc = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Zv = new RegExp("^[^" + Wc + "]*[" + zc + "]"), Qv = new RegExp("^[^" + zc + "]*[" + Wc + "]");
function eh(e) {
  return e = String(e || ""), Zv.test(e) ? "rtl" : Qv.test(e) ? "ltr" : "neutral";
}
const Hc = /* @__PURE__ */ yi(Jv);
function th(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Au = th, rh = typeof Sa == "object" && Sa && Sa.Object === Object && Sa, nh = rh, ah = nh, ih = typeof self == "object" && self && self.Object === Object && self, oh = ah || ih || Function("return this")(), qc = oh, uh = qc, sh = function() {
  return uh.Date.now();
}, lh = sh, ch = /\s/;
function fh(e) {
  for (var t = e.length; t-- && ch.test(e.charAt(t)); )
    ;
  return t;
}
var dh = fh, vh = dh, hh = /^\s+/;
function gh(e) {
  return e && e.slice(0, vh(e) + 1).replace(hh, "");
}
var ph = gh, mh = qc, bh = mh.Symbol, Uc = bh, ms = Uc, Gc = Object.prototype, Ch = Gc.hasOwnProperty, yh = Gc.toString, Un = ms ? ms.toStringTag : void 0;
function Dh(e) {
  var t = Ch.call(e, Un), r = e[Un];
  try {
    e[Un] = void 0;
    var n = !0;
  } catch {
  }
  var a = yh.call(e);
  return n && (t ? e[Un] = r : delete e[Un]), a;
}
var Eh = Dh, wh = Object.prototype, Fh = wh.toString;
function Bh(e) {
  return Fh.call(e);
}
var Ah = Bh, bs = Uc, Sh = Eh, Oh = Ah, xh = "[object Null]", Ph = "[object Undefined]", Cs = bs ? bs.toStringTag : void 0;
function Th(e) {
  return e == null ? e === void 0 ? Ph : xh : Cs && Cs in Object(e) ? Sh(e) : Oh(e);
}
var Rh = Th;
function $h(e) {
  return e != null && typeof e == "object";
}
var jh = $h, Nh = Rh, Mh = jh, Ih = "[object Symbol]";
function kh(e) {
  return typeof e == "symbol" || Mh(e) && Nh(e) == Ih;
}
var Lh = kh, _h = ph, ys = Au, Vh = Lh, Ds = NaN, zh = /^[-+]0x[0-9a-f]+$/i, Wh = /^0b[01]+$/i, Hh = /^0o[0-7]+$/i, qh = parseInt;
function Uh(e) {
  if (typeof e == "number")
    return e;
  if (Vh(e))
    return Ds;
  if (ys(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ys(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = _h(e);
  var r = Wh.test(e);
  return r || Hh.test(e) ? qh(e.slice(2), r ? 2 : 8) : zh.test(e) ? Ds : +e;
}
var Gh = Uh, Kh = Au, Hi = lh, Es = Gh, Xh = "Expected a function", Yh = Math.max, Jh = Math.min;
function Zh(e, t, r) {
  var n, a, i, o, u, s, l = 0, c = !1, d = !1, v = !0;
  if (typeof e != "function")
    throw new TypeError(Xh);
  t = Es(t) || 0, Kh(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? Yh(Es(r.maxWait) || 0, t) : i, v = "trailing" in r ? !!r.trailing : v);
  function b(B) {
    var w = n, $ = a;
    return n = a = void 0, l = B, o = e.apply($, w), o;
  }
  function m(B) {
    return l = B, u = setTimeout(p, t), c ? b(B) : o;
  }
  function f(B) {
    var w = B - s, $ = B - l, P = t - w;
    return d ? Jh(P, i - $) : P;
  }
  function g(B) {
    var w = B - s, $ = B - l;
    return s === void 0 || w >= t || w < 0 || d && $ >= i;
  }
  function p() {
    var B = Hi();
    if (g(B))
      return C(B);
    u = setTimeout(p, f(B));
  }
  function C(B) {
    return u = void 0, v && n ? b(B) : (n = a = void 0, o);
  }
  function y() {
    u !== void 0 && clearTimeout(u), l = 0, n = s = a = u = void 0;
  }
  function E() {
    return u === void 0 ? o : C(Hi());
  }
  function F() {
    var B = Hi(), w = g(B);
    if (n = arguments, a = this, s = B, w) {
      if (u === void 0)
        return m(s);
      if (d)
        return clearTimeout(u), u = setTimeout(p, t), b(s);
    }
    return u === void 0 && (u = setTimeout(p, t)), o;
  }
  return F.cancel = y, F.flush = E, F;
}
var Kc = Zh;
const Qh = /* @__PURE__ */ yi(Kc);
var eg = Kc, tg = Au, rg = "Expected a function";
function ng(e, t, r) {
  var n = !0, a = !0;
  if (typeof e != "function")
    throw new TypeError(rg);
  return tg(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), eg(e, t, {
    leading: n,
    maxWait: t,
    trailing: a
  });
}
var ag = ng;
const ig = /* @__PURE__ */ yi(ag), ws = (e) => typeof e == "object" && e != null && e.nodeType === 1, Fs = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip", qi = (e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    const r = getComputedStyle(e, null);
    return Fs(r.overflowY, t) || Fs(r.overflowX, t) || ((n) => {
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
    })(e);
  }
  return !1;
}, Oa = (e, t, r, n, a, i, o, u) => i < e && o > t || i > e && o < t ? 0 : i <= e && u <= r || o >= t && u >= r ? i - e - n : o > t && u < r || i < e && u > r ? o - t + a : 0, og = (e) => {
  const t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, Bs = (e, t) => {
  var r, n, a, i;
  if (typeof document > "u")
    return [];
  const { scrollMode: o, block: u, inline: s, boundary: l, skipOverflowHiddenElements: c } = t, d = typeof l == "function" ? l : (M) => M !== l;
  if (!ws(e))
    throw new TypeError("Invalid target");
  const v = document.scrollingElement || document.documentElement, b = [];
  let m = e;
  for (; ws(m) && d(m); ) {
    if (m = og(m), m === v) {
      b.push(m);
      break;
    }
    m != null && m === document.body && qi(m) && !qi(document.documentElement) || m != null && qi(m, c) && b.push(m);
  }
  const f = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, g = (i = (a = window.visualViewport) == null ? void 0 : a.height) != null ? i : innerHeight, { scrollX: p, scrollY: C } = window, { height: y, width: E, top: F, right: B, bottom: w, left: $ } = e.getBoundingClientRect(), { top: P, right: T, bottom: _, left: j } = ((M) => {
    const O = window.getComputedStyle(M);
    return { top: parseFloat(O.scrollMarginTop) || 0, right: parseFloat(O.scrollMarginRight) || 0, bottom: parseFloat(O.scrollMarginBottom) || 0, left: parseFloat(O.scrollMarginLeft) || 0 };
  })(e);
  let N = u === "start" || u === "nearest" ? F - P : u === "end" ? w + _ : F + y / 2 - P + _, I = s === "center" ? $ + E / 2 - j + T : s === "end" ? B + T : $ - j;
  const R = [];
  for (let M = 0; M < b.length; M++) {
    const O = b[M], { height: k, width: H, top: U, right: K, bottom: J, left: te } = O.getBoundingClientRect();
    if (o === "if-needed" && F >= 0 && $ >= 0 && w <= g && B <= f && F >= U && w <= J && $ >= te && B <= K)
      return R;
    const S = getComputedStyle(O), V = parseInt(S.borderLeftWidth, 10), z = parseInt(S.borderTopWidth, 10), Y = parseInt(S.borderRightWidth, 10), ue = parseInt(S.borderBottomWidth, 10);
    let ie = 0, se = 0;
    const de = "offsetWidth" in O ? O.offsetWidth - O.clientWidth - V - Y : 0, he = "offsetHeight" in O ? O.offsetHeight - O.clientHeight - z - ue : 0, ye = "offsetWidth" in O ? O.offsetWidth === 0 ? 0 : H / O.offsetWidth : 0, Z = "offsetHeight" in O ? O.offsetHeight === 0 ? 0 : k / O.offsetHeight : 0;
    if (v === O)
      ie = u === "start" ? N : u === "end" ? N - g : u === "nearest" ? Oa(C, C + g, g, z, ue, C + N, C + N + y, y) : N - g / 2, se = s === "start" ? I : s === "center" ? I - f / 2 : s === "end" ? I - f : Oa(p, p + f, f, V, Y, p + I, p + I + E, E), ie = Math.max(0, ie + C), se = Math.max(0, se + p);
    else {
      ie = u === "start" ? N - U - z : u === "end" ? N - J + ue + he : u === "nearest" ? Oa(U, J, k, z, ue + he, N, N + y, y) : N - (U + k / 2) + he / 2, se = s === "start" ? I - te - V : s === "center" ? I - (te + H / 2) + de / 2 : s === "end" ? I - K + Y + de : Oa(te, K, H, V, Y + de, I, I + E, E);
      const { scrollLeft: me, scrollTop: Be } = O;
      ie = Z === 0 ? 0 : Math.max(0, Math.min(Be + ie / Z, O.scrollHeight - k / Z + he)), se = ye === 0 ? 0 : Math.max(0, Math.min(me + se / ye, O.scrollWidth - H / ye + de)), N += Be - ie, I += me - se;
    }
    R.push({ el: O, top: ie, left: se });
  }
  return R;
}, ug = (e) => e === !1 ? { block: "end", inline: "nearest" } : ((t) => t === Object(t) && Object.keys(t).length !== 0)(e) ? e : { block: "start", inline: "nearest" };
function sg(e, t) {
  if (!e.isConnected || !((a) => {
    let i = a;
    for (; i && i.parentNode; ) {
      if (i.parentNode === document)
        return !0;
      i = i.parentNode instanceof ShadowRoot ? i.parentNode.host : i.parentNode;
    }
    return !1;
  })(e))
    return;
  const r = ((a) => {
    const i = window.getComputedStyle(a);
    return { top: parseFloat(i.scrollMarginTop) || 0, right: parseFloat(i.scrollMarginRight) || 0, bottom: parseFloat(i.scrollMarginBottom) || 0, left: parseFloat(i.scrollMarginLeft) || 0 };
  })(e);
  if (((a) => typeof a == "object" && typeof a.behavior == "function")(t))
    return t.behavior(Bs(e, t));
  const n = typeof t == "boolean" || t == null ? void 0 : t.behavior;
  for (const { el: a, top: i, left: o } of Bs(e, ug(t))) {
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
function As(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function nt(e) {
  var t, r;
  return As(e) === !1 ? !1 : (t = e.constructor, t === void 0 ? !0 : (r = t.prototype, !(As(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var Xc = Symbol.for("immer-nothing"), Ss = Symbol.for("immer-draftable"), Ft = Symbol.for("immer-state"), lg = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function mt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const r = lg[e], n = typeof r == "function" ? r.apply(null, t) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Tn = Object.getPrototypeOf;
function on(e) {
  return !!e && !!e[Ft];
}
function un(e) {
  var t;
  return e ? Yc(e) || Array.isArray(e) || !!e[Ss] || !!((t = e.constructor) != null && t[Ss]) || Ei(e) || wi(e) : !1;
}
var cg = Object.prototype.constructor.toString();
function Yc(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = Tn(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === cg;
}
function aa(e, t) {
  Di(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
    t(r, n, e);
  }) : e.forEach((r, n) => t(n, r, e));
}
function Di(e) {
  const t = e[Ft];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ei(e) ? 2 : wi(e) ? 3 : 0;
}
function Fo(e, t) {
  return Di(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Jc(e, t, r) {
  const n = Di(e);
  n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
}
function fg(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ei(e) {
  return e instanceof Map;
}
function wi(e) {
  return e instanceof Set;
}
function Wr(e) {
  return e.copy_ || e.base_;
}
function Bo(e, t) {
  if (Ei(e))
    return new Map(e);
  if (wi(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  if (!t && Yc(e))
    return Tn(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
  const r = Object.getOwnPropertyDescriptors(e);
  delete r[Ft];
  let n = Reflect.ownKeys(r);
  for (let a = 0; a < n.length; a++) {
    const i = n[a], o = r[i];
    o.writable === !1 && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
      configurable: !0,
      writable: !0,
      // could live with !!desc.set as well here...
      enumerable: o.enumerable,
      value: e[i]
    });
  }
  return Object.create(Tn(e), r);
}
function Su(e, t = !1) {
  return Fi(e) || on(e) || !un(e) || (Di(e) > 1 && (e.set = e.add = e.clear = e.delete = dg), Object.freeze(e), t && aa(e, (r, n) => Su(n, !0))), e;
}
function dg() {
  mt(2);
}
function Fi(e) {
  return Object.isFrozen(e);
}
var vg = {};
function sn(e) {
  const t = vg[e];
  return t || mt(0, e), t;
}
var ia;
function Zc() {
  return ia;
}
function hg(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Os(e, t) {
  t && (sn("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Ao(e) {
  So(e), e.drafts_.forEach(gg), e.drafts_ = null;
}
function So(e) {
  e === ia && (ia = e.parent_);
}
function xs(e) {
  return ia = hg(ia, e);
}
function gg(e) {
  const t = e[Ft];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Ps(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Ft].modified_ && (Ao(t), mt(4)), un(e) && (e = ui(t, e), t.parent_ || si(t, e)), t.patches_ && sn("Patches").generateReplacementPatches_(
    r[Ft].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ui(t, r, []), Ao(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== Xc ? e : void 0;
}
function ui(e, t, r) {
  if (Fi(t))
    return t;
  const n = t[Ft];
  if (!n)
    return aa(
      t,
      (a, i) => Ts(e, n, t, a, i, r)
    ), t;
  if (n.scope_ !== e)
    return t;
  if (!n.modified_)
    return si(e, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let i = a, o = !1;
    n.type_ === 3 && (i = new Set(a), a.clear(), o = !0), aa(
      i,
      (u, s) => Ts(e, n, a, u, s, r, o)
    ), si(e, a, !1), r && e.patches_ && sn("Patches").generatePatches_(
      n,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return n.copy_;
}
function Ts(e, t, r, n, a, i, o) {
  if (process.env.NODE_ENV !== "production" && a === r && mt(5), on(a)) {
    const u = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Fo(t.assigned_, n) ? i.concat(n) : void 0, s = ui(e, a, u);
    if (Jc(r, n, s), on(s))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else
    o && r.add(a);
  if (un(a) && !Fi(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ui(e, a), (!t || !t.scope_.parent_) && si(e, a);
  }
}
function si(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Su(t, r);
}
function pg(e, t) {
  const r = Array.isArray(e), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Zc(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = n, i = Ou;
  r && (a = [n], i = oa);
  const { revoke: o, proxy: u } = Proxy.revocable(a, i);
  return n.draft_ = u, n.revoke_ = o, u;
}
var Ou = {
  get(e, t) {
    if (t === Ft)
      return e;
    const r = Wr(e);
    if (!Fo(r, t))
      return mg(e, r, t);
    const n = r[t];
    return e.finalized_ || !un(n) ? n : n === Ui(e.base_, t) ? (Gi(e), e.copy_[t] = xo(n, e)) : n;
  },
  has(e, t) {
    return t in Wr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Wr(e));
  },
  set(e, t, r) {
    const n = Qc(Wr(e), t);
    if (n != null && n.set)
      return n.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const a = Ui(Wr(e), t), i = a == null ? void 0 : a[Ft];
      if (i && i.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (fg(r, a) && (r !== void 0 || Fo(e.base_, t)))
        return !0;
      Gi(e), Oo(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ui(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Gi(e), Oo(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = Wr(e), n = Reflect.getOwnPropertyDescriptor(r, t);
    return n && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: n.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    mt(11);
  },
  getPrototypeOf(e) {
    return Tn(e.base_);
  },
  setPrototypeOf() {
    mt(12);
  }
}, oa = {};
aa(Ou, (e, t) => {
  oa[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
oa.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && mt(13), oa.set.call(this, e, t, void 0);
};
oa.set = function(e, t, r) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && mt(14), Ou.set.call(this, e[0], t, r, e[0]);
};
function Ui(e, t) {
  const r = e[Ft];
  return (r ? Wr(r) : e)[t];
}
function mg(e, t, r) {
  var a;
  const n = Qc(t, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(e.draft_)
  ) : void 0;
}
function Qc(e, t) {
  if (!(t in e))
    return;
  let r = Tn(e);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, t);
    if (n)
      return n;
    r = Tn(r);
  }
}
function Oo(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Oo(e.parent_));
}
function Gi(e) {
  e.copy_ || (e.copy_ = Bo(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var bg = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, n) => {
      if (typeof t == "function" && typeof r != "function") {
        const i = r;
        r = t;
        const o = this;
        return function(s = i, ...l) {
          return o.produce(s, (c) => r.call(this, c, ...l));
        };
      }
      typeof r != "function" && mt(6), n !== void 0 && typeof n != "function" && mt(7);
      let a;
      if (un(t)) {
        const i = xs(this), o = xo(t, void 0);
        let u = !0;
        try {
          a = r(o), u = !1;
        } finally {
          u ? Ao(i) : So(i);
        }
        return Os(i, n), Ps(a, i);
      } else if (!t || typeof t != "object") {
        if (a = r(t), a === void 0 && (a = t), a === Xc && (a = void 0), this.autoFreeze_ && Su(a, !0), n) {
          const i = [], o = [];
          sn("Patches").generateReplacementPatches_(t, a, i, o), n(i, o);
        }
        return a;
      } else
        mt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (o, ...u) => this.produceWithPatches(o, (s) => t(s, ...u));
      let n, a;
      return [this.produce(t, r, (o, u) => {
        n = o, a = u;
      }), n, a];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    un(e) || mt(8), on(e) && (e = Cg(e));
    const t = xs(this), r = xo(e, void 0);
    return r[Ft].isManual_ = !0, So(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Ft];
    (!r || !r.isManual_) && mt(9);
    const { scope_: n } = r;
    return Os(n, t), Ps(void 0, n);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const a = t[r];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const n = sn("Patches").applyPatches_;
    return on(e) ? n(e, t) : this.produce(
      e,
      (a) => n(a, t)
    );
  }
};
function xo(e, t) {
  const r = Ei(e) ? sn("MapSet").proxyMap_(e, t) : wi(e) ? sn("MapSet").proxySet_(e, t) : pg(e, t);
  return (t ? t.scope_ : Zc()).drafts_.push(r), r;
}
function Cg(e) {
  return on(e) || mt(10, e), ef(e);
}
function ef(e) {
  if (!un(e) || Fi(e))
    return e;
  const t = e[Ft];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Bo(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Bo(e, !0);
  return aa(r, (n, a) => {
    Jc(r, n, ef(a));
  }), t && (t.finalized_ = !1), r;
}
var Bt = new bg(), xu = Bt.produce;
Bt.produceWithPatches.bind(
  Bt
);
Bt.setAutoFreeze.bind(Bt);
Bt.setUseStrictShallowCopy.bind(Bt);
Bt.applyPatches.bind(Bt);
var Rs = Bt.createDraft.bind(Bt), $s = Bt.finishDraft.bind(Bt), yg = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = A.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, Dg = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = be.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, Eg = {
  transform(e, t) {
    var {
      current: r,
      affinity: n
    } = e;
    if (r != null) {
      var a = L.transform(r, t, {
        affinity: n
      });
      e.current = a, a == null && e.unref();
    }
  }
}, li = /* @__PURE__ */ new WeakMap(), ci = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), tf = /* @__PURE__ */ new WeakMap(), js = /* @__PURE__ */ new WeakMap(), Ns = /* @__PURE__ */ new WeakMap(), Ms = /* @__PURE__ */ new WeakMap(), A = {
  ancestors(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, n = A.levels(e, t);
    return r ? n = n.slice(1) : n = n.slice(0, -1), n;
  },
  common(e, t) {
    for (var r = [], n = 0; n < e.length && n < t.length; n++) {
      var a = e[n], i = t[n];
      if (a !== i)
        break;
      r.push(a);
    }
    return r;
  },
  compare(e, t) {
    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
      if (e[n] < t[n])
        return -1;
      if (e[n] > t[n])
        return 1;
    }
    return 0;
  },
  endsAfter(e, t) {
    var r = e.length - 1, n = e.slice(0, r), a = t.slice(0, r), i = e[r], o = t[r];
    return A.equals(n, a) && i > o;
  },
  endsAt(e, t) {
    var r = e.length, n = e.slice(0, r), a = t.slice(0, r);
    return A.equals(n, a);
  },
  endsBefore(e, t) {
    var r = e.length - 1, n = e.slice(0, r), a = t.slice(0, r), i = e[r], o = t[r];
    return A.equals(n, a) && i < o;
  },
  equals(e, t) {
    return e.length === t.length && e.every((r, n) => r === t[n]);
  },
  hasPrevious(e) {
    return e[e.length - 1] > 0;
  },
  isAfter(e, t) {
    return A.compare(e, t) === 1;
  },
  isAncestor(e, t) {
    return e.length < t.length && A.compare(e, t) === 0;
  },
  isBefore(e, t) {
    return A.compare(e, t) === -1;
  },
  isChild(e, t) {
    return e.length === t.length + 1 && A.compare(e, t) === 0;
  },
  isCommon(e, t) {
    return e.length <= t.length && A.compare(e, t) === 0;
  },
  isDescendant(e, t) {
    return e.length > t.length && A.compare(e, t) === 0;
  },
  isParent(e, t) {
    return e.length + 1 === t.length && A.compare(e, t) === 0;
  },
  isPath(e) {
    return Array.isArray(e) && (e.length === 0 || typeof e[0] == "number");
  },
  isSibling(e, t) {
    if (e.length !== t.length)
      return !1;
    var r = e.slice(0, -1), n = t.slice(0, -1), a = e[e.length - 1], i = t[t.length - 1];
    return a !== i && A.equals(r, n);
  },
  levels(e) {
    for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, n = [], a = 0; a <= e.length; a++)
      n.push(e.slice(0, a));
    return r && n.reverse(), n;
  },
  next(e) {
    if (e.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
    var t = e[e.length - 1];
    return e.slice(0, -1).concat(t + 1);
  },
  operationCanTransformPath(e) {
    switch (e.type) {
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
  parent(e) {
    if (e.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(e, "]."));
    return e.slice(0, -1);
  },
  previous(e) {
    if (e.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
    var t = e[e.length - 1];
    if (t <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
    return e.slice(0, -1).concat(t - 1);
  },
  relative(e, t) {
    if (!A.isAncestor(t, e) && !A.equals(e, t))
      throw new Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
    return e.slice(t.length);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!e)
      return null;
    var n = [...e], {
      affinity: a = "forward"
    } = r;
    if (e.length === 0)
      return n;
    switch (t.type) {
      case "insert_node": {
        var {
          path: i
        } = t;
        (A.equals(i, n) || A.endsBefore(i, n) || A.isAncestor(i, n)) && (n[i.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: o
        } = t;
        if (A.equals(o, n) || A.isAncestor(o, n))
          return null;
        A.endsBefore(o, n) && (n[o.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: u,
          position: s
        } = t;
        A.equals(u, n) || A.endsBefore(u, n) ? n[u.length - 1] -= 1 : A.isAncestor(u, n) && (n[u.length - 1] -= 1, n[u.length] += s);
        break;
      }
      case "split_node": {
        var {
          path: l,
          position: c
        } = t;
        if (A.equals(l, n)) {
          if (a === "forward")
            n[n.length - 1] += 1;
          else if (a !== "backward")
            return null;
        } else
          A.endsBefore(l, n) ? n[l.length - 1] += 1 : A.isAncestor(l, n) && e[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: d,
          newPath: v
        } = t;
        if (A.equals(d, v))
          return n;
        if (A.isAncestor(d, n) || A.equals(d, n)) {
          var b = v.slice();
          return A.endsBefore(d, v) && d.length < v.length && (b[d.length - 1] -= 1), b.concat(n.slice(d.length));
        } else
          A.isSibling(d, v) && (A.isAncestor(v, n) || A.equals(v, n)) ? A.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : A.endsBefore(v, n) || A.equals(v, n) || A.isAncestor(v, n) ? (A.endsBefore(d, n) && (n[d.length - 1] -= 1), n[v.length - 1] += 1) : A.endsBefore(d, n) && (A.equals(v, n) && (n[v.length - 1] += 1), n[d.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function ua(e) {
  "@babel/helpers - typeof";
  return ua = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ua(e);
}
function wg(e, t) {
  if (ua(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (ua(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fg(e) {
  var t = wg(e, "string");
  return ua(t) === "symbol" ? t : String(t);
}
function gt(e, t, r) {
  return t = Fg(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Is(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Is(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Is(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Bg = (e, t, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = r, i = Q.parent(e, n), o = n[n.length - 1];
      if (o > i.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (i.children.splice(o, 0, a), t)
        for (var [u, s] of L.points(t))
          t[s] = be.transform(u, r);
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
      var v = Q.leaf(e, l), b = v.text.slice(0, c), m = v.text.slice(c);
      if (v.text = b + d + m, t)
        for (var [f, g] of L.points(t))
          t[g] = be.transform(f, r);
      break;
    }
    case "merge_node": {
      var {
        path: p
      } = r, C = Q.get(e, p), y = A.previous(p), E = Q.get(e, y), F = Q.parent(e, p), B = p[p.length - 1];
      if (oe.isText(C) && oe.isText(E))
        E.text += C.text;
      else if (!oe.isText(C) && !oe.isText(E))
        E.children.push(...C.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(p, "] to nodes of different interfaces: ").concat(rt.stringify(C), " ").concat(rt.stringify(E)));
      if (F.children.splice(B, 1), t)
        for (var [w, $] of L.points(t))
          t[$] = be.transform(w, r);
      break;
    }
    case "move_node": {
      var {
        path: P,
        newPath: T
      } = r;
      if (A.isAncestor(P, T))
        throw new Error("Cannot move a path [".concat(P, "] to new path [").concat(T, "] because the destination is inside itself."));
      var _ = Q.get(e, P), j = Q.parent(e, P), N = P[P.length - 1];
      j.children.splice(N, 1);
      var I = A.transform(P, r), R = Q.get(e, A.parent(I)), M = I[I.length - 1];
      if (R.children.splice(M, 0, _), t)
        for (var [O, k] of L.points(t))
          t[k] = be.transform(O, r);
      break;
    }
    case "remove_node": {
      var {
        path: H
      } = r, U = H[H.length - 1], K = Q.parent(e, H);
      if (K.children.splice(U, 1), t)
        for (var [J, te] of L.points(t)) {
          var S = be.transform(J, r);
          if (t != null && S != null)
            t[te] = S;
          else {
            var V = void 0, z = void 0;
            for (var [Y, ue] of Q.texts(e))
              if (A.compare(ue, H) === -1)
                V = [Y, ue];
              else {
                z = [Y, ue];
                break;
              }
            var ie = !1;
            V && z && (A.equals(z[1], H) ? ie = !A.hasPrevious(z[1]) : ie = A.common(V[1], H).length < A.common(z[1], H).length), V && !ie ? (J.path = V[1], J.offset = V[0].text.length) : z ? (J.path = z[1], J.offset = 0) : t = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: se,
        offset: de,
        text: he
      } = r;
      if (he.length === 0)
        break;
      var ye = Q.leaf(e, se), Z = ye.text.slice(0, de), me = ye.text.slice(de + he.length);
      if (ye.text = Z + me, t)
        for (var [Be, we] of L.points(t))
          t[we] = be.transform(Be, r);
      break;
    }
    case "set_node": {
      var {
        path: ze,
        properties: Fe,
        newProperties: Ce
      } = r;
      if (ze.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var ce = Q.get(e, ze);
      for (var le in Ce) {
        if (le === "children" || le === "text")
          throw new Error('Cannot set the "'.concat(le, '" property of nodes!'));
        var xe = Ce[le];
        xe == null ? delete ce[le] : ce[le] = xe;
      }
      for (var Ue in Fe)
        Ce.hasOwnProperty(Ue) || delete ce[Ue];
      break;
    }
    case "set_selection": {
      var {
        newProperties: We
      } = r;
      if (We == null)
        t = We;
      else {
        if (t == null) {
          if (!L.isRange(We))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(rt.stringify(We), " when there is no current selection."));
          t = Gn({}, We);
        }
        for (var ot in We) {
          var At = We[ot];
          if (At == null) {
            if (ot === "anchor" || ot === "focus")
              throw new Error('Cannot remove the "'.concat(ot, '" selection property'));
            delete t[ot];
          } else
            t[ot] = At;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: lt,
        position: St,
        properties: nr
      } = r;
      if (lt.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(lt, "] because the root node cannot be split."));
      var bt = Q.get(e, lt), zn = Q.parent(e, lt), Wn = lt[lt.length - 1], _r;
      if (oe.isText(bt)) {
        var ar = bt.text.slice(0, St), ir = bt.text.slice(St);
        bt.text = ar, _r = Gn(Gn({}, nr), {}, {
          text: ir
        });
      } else {
        var wr = bt.children.slice(0, St), Vr = bt.children.slice(St);
        bt.children = wr, _r = Gn(Gn({}, nr), {}, {
          children: Vr
        });
      }
      if (zn.children.splice(Wn + 1, 0, _r), t)
        for (var [Gt, Mt] of L.points(t))
          t[Mt] = be.transform(Gt, r);
      break;
    }
  }
  return t;
}, Ag = {
  transform(e, t) {
    e.children = Rs(e.children);
    var r = e.selection && Rs(e.selection);
    try {
      r = Bg(e, r, t);
    } finally {
      e.children = $s(e.children), r ? e.selection = on(r) ? $s(r) : r : e.selection = null;
    }
  }
}, Sg = {
  insertNodes(e, t, r) {
    e.insertNodes(t, r);
  },
  liftNodes(e, t) {
    e.liftNodes(t);
  },
  mergeNodes(e, t) {
    e.mergeNodes(t);
  },
  moveNodes(e, t) {
    e.moveNodes(t);
  },
  removeNodes(e, t) {
    e.removeNodes(t);
  },
  setNodes(e, t, r) {
    e.setNodes(t, r);
  },
  splitNodes(e, t) {
    e.splitNodes(t);
  },
  unsetNodes(e, t, r) {
    e.unsetNodes(t, r);
  },
  unwrapNodes(e, t) {
    e.unwrapNodes(t);
  },
  wrapNodes(e, t, r) {
    e.wrapNodes(t, r);
  }
}, Og = {
  collapse(e, t) {
    e.collapse(t);
  },
  deselect(e) {
    e.deselect();
  },
  move(e, t) {
    e.move(t);
  },
  select(e, t) {
    e.select(t);
  },
  setPoint(e, t, r) {
    e.setPoint(t, r);
  },
  setSelection(e, t) {
    e.setSelection(t);
  }
}, rf = (e, t) => {
  for (var r in e) {
    var n = e[r], a = t[r];
    if (nt(n) && nt(a)) {
      if (!rf(n, a))
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
  for (var o in t)
    if (e[o] === void 0 && t[o] !== void 0)
      return !1;
  return !0;
};
function xg(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function gr(e, t) {
  if (e == null)
    return {};
  var r = xg(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
var Pg = ["anchor", "focus"];
function ks(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Tg(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ks(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ks(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var L = {
  edges(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = t, {
      anchor: n,
      focus: a
    } = e;
    return L.isBackward(e) === r ? [n, a] : [a, n];
  },
  end(e) {
    var [, t] = L.edges(e);
    return t;
  },
  equals(e, t) {
    return be.equals(e.anchor, t.anchor) && be.equals(e.focus, t.focus);
  },
  includes(e, t) {
    if (L.isRange(t)) {
      if (L.includes(e, t.anchor) || L.includes(e, t.focus))
        return !0;
      var [r, n] = L.edges(e), [a, i] = L.edges(t);
      return be.isBefore(r, a) && be.isAfter(n, i);
    }
    var [o, u] = L.edges(e), s = !1, l = !1;
    return be.isPoint(t) ? (s = be.compare(t, o) >= 0, l = be.compare(t, u) <= 0) : (s = A.compare(t, o.path) >= 0, l = A.compare(t, u.path) <= 0), s && l;
  },
  intersection(e, t) {
    var r = gr(e, Pg), [n, a] = L.edges(e), [i, o] = L.edges(t), u = be.isBefore(n, i) ? i : n, s = be.isBefore(a, o) ? a : o;
    return be.isBefore(s, u) ? null : Tg({
      anchor: u,
      focus: s
    }, r);
  },
  isBackward(e) {
    var {
      anchor: t,
      focus: r
    } = e;
    return be.isAfter(t, r);
  },
  isCollapsed(e) {
    var {
      anchor: t,
      focus: r
    } = e;
    return be.equals(t, r);
  },
  isExpanded(e) {
    return !L.isCollapsed(e);
  },
  isForward(e) {
    return !L.isBackward(e);
  },
  isRange(e) {
    return nt(e) && be.isPoint(e.anchor) && be.isPoint(e.focus);
  },
  *points(e) {
    yield [e.anchor, "anchor"], yield [e.focus, "focus"];
  },
  start(e) {
    var [t] = L.edges(e);
    return t;
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return xu(e, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "inward"
      } = r, i, o;
      if (a === "inward") {
        var u = L.isCollapsed(n);
        L.isForward(n) ? (i = "forward", o = u ? i : "backward") : (i = "backward", o = u ? i : "forward");
      } else
        a === "outward" ? L.isForward(n) ? (i = "backward", o = "forward") : (i = "forward", o = "backward") : (i = a, o = a);
      var s = be.transform(n.anchor, t, {
        affinity: i
      }), l = be.transform(n.focus, t, {
        affinity: o
      });
      if (!s || !l)
        return null;
      n.anchor = s, n.focus = l;
    });
  }
}, Ls = (e) => nt(e) && Q.isNodeList(e.children) && !h.isEditor(e), ae = {
  isAncestor(e) {
    return nt(e) && Q.isNodeList(e.children);
  },
  isElement: Ls,
  isElementList(e) {
    return Array.isArray(e) && e.every((t) => ae.isElement(t));
  },
  isElementProps(e) {
    return e.children !== void 0;
  },
  isElementType: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Ls(t) && t[n] === r;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "children" && e[r] !== t[r])
        return !1;
    return !0;
  }
}, Rg = ["children"], $g = ["text"], _s = /* @__PURE__ */ new WeakMap(), Q = {
  ancestor(e, t) {
    var r = Q.get(e, t);
    if (oe.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(rt.stringify(r)));
    return r;
  },
  ancestors(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of A.ancestors(t, r)) {
        var a = Q.ancestor(e, n), i = [a, n];
        yield i;
      }
    }();
  },
  child(e, t) {
    if (oe.isText(e))
      throw new Error("Cannot get the child of a text node: ".concat(rt.stringify(e)));
    var r = e.children[t];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(t, "` in node: ").concat(rt.stringify(e)));
    return r;
  },
  children(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = r, a = Q.ancestor(e, t), {
        children: i
      } = a, o = n ? i.length - 1 : 0; n ? o >= 0 : o < i.length; ) {
        var u = Q.child(a, o), s = t.concat(o);
        yield [u, s], o = n ? o - 1 : o + 1;
      }
    }();
  },
  common(e, t, r) {
    var n = A.common(t, r), a = Q.get(e, n);
    return [a, n];
  },
  descendant(e, t) {
    var r = Q.get(e, t);
    if (h.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(rt.stringify(r)));
    return r;
  },
  descendants(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of Q.nodes(e, t))
        n.length !== 0 && (yield [r, n]);
    }();
  },
  elements(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of Q.nodes(e, t))
        ae.isElement(r) && (yield [r, n]);
    }();
  },
  extractProps(e) {
    if (ae.isAncestor(e)) {
      var t = gr(e, Rg);
      return t;
    } else {
      var t = gr(e, $g);
      return t;
    }
  },
  first(e, t) {
    for (var r = t.slice(), n = Q.get(e, r); n && !(oe.isText(n) || n.children.length === 0); )
      n = n.children[0], r.push(0);
    return [n, r];
  },
  fragment(e, t) {
    if (oe.isText(e))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(rt.stringify(e)));
    var r = xu({
      children: e.children
    }, (n) => {
      var [a, i] = L.edges(t), o = Q.nodes(n, {
        reverse: !0,
        pass: (v) => {
          var [, b] = v;
          return !L.includes(t, b);
        }
      });
      for (var [, u] of o) {
        if (!L.includes(t, u)) {
          var s = Q.parent(n, u), l = u[u.length - 1];
          s.children.splice(l, 1);
        }
        if (A.equals(u, i.path)) {
          var c = Q.leaf(n, u);
          c.text = c.text.slice(0, i.offset);
        }
        if (A.equals(u, a.path)) {
          var d = Q.leaf(n, u);
          d.text = d.text.slice(a.offset);
        }
      }
      h.isEditor(n) && (n.selection = null);
    });
    return r.children;
  },
  get(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var a = t[n];
      if (oe.isText(r) || !r.children[a])
        throw new Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(rt.stringify(e)));
      r = r.children[a];
    }
    return r;
  },
  has(e, t) {
    for (var r = e, n = 0; n < t.length; n++) {
      var a = t[n];
      if (oe.isText(r) || !r.children[a])
        return !1;
      r = r.children[a];
    }
    return !0;
  },
  isNode(e) {
    return oe.isText(e) || ae.isElement(e) || h.isEditor(e);
  },
  isNodeList(e) {
    if (!Array.isArray(e))
      return !1;
    var t = _s.get(e);
    if (t !== void 0)
      return t;
    var r = e.every((n) => Q.isNode(n));
    return _s.set(e, r), r;
  },
  last(e, t) {
    for (var r = t.slice(), n = Q.get(e, r); n && !(oe.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], r.push(a);
    }
    return [n, r];
  },
  leaf(e, t) {
    var r = Q.get(e, t);
    if (!oe.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(rt.stringify(r)));
    return r;
  },
  levels(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of A.levels(t, r)) {
        var a = Q.get(e, n);
        yield [a, n];
      }
    }();
  },
  matches(e, t) {
    return ae.isElement(e) && ae.isElementProps(t) && ae.matches(e, t) || oe.isText(e) && oe.isTextProps(t) && oe.matches(e, t);
  },
  nodes(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: r,
        reverse: n = !1
      } = t, {
        from: a = [],
        to: i
      } = t, o = /* @__PURE__ */ new Set(), u = [], s = e; !(i && (n ? A.isBefore(u, i) : A.isAfter(u, i))); ) {
        if (o.has(s) || (yield [s, u]), !o.has(s) && !oe.isText(s) && s.children.length !== 0 && (r == null || r([s, u]) === !1)) {
          o.add(s);
          var l = n ? s.children.length - 1 : 0;
          A.isAncestor(u, a) && (l = a[u.length]), u = u.concat(l), s = Q.get(e, u);
          continue;
        }
        if (u.length === 0)
          break;
        if (!n) {
          var c = A.next(u);
          if (Q.has(e, c)) {
            u = c, s = Q.get(e, u);
            continue;
          }
        }
        if (n && u[u.length - 1] !== 0) {
          var d = A.previous(u);
          u = d, s = Q.get(e, u);
          continue;
        }
        u = A.parent(u), s = Q.get(e, u), o.add(s);
      }
    }();
  },
  parent(e, t) {
    var r = A.parent(t), n = Q.get(e, r);
    if (oe.isText(n))
      throw new Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
    return n;
  },
  string(e) {
    return oe.isText(e) ? e.text : e.children.map(Q.string).join("");
  },
  texts(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of Q.nodes(e, t))
        oe.isText(r) && (yield [r, n]);
    }();
  }
};
function Vs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function _e(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Vs(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Vs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Pr = {
  isNodeOperation(e) {
    return Pr.isOperation(e) && e.type.endsWith("_node");
  },
  isOperation(e) {
    if (!nt(e))
      return !1;
    switch (e.type) {
      case "insert_node":
        return A.isPath(e.path) && Q.isNode(e.node);
      case "insert_text":
        return typeof e.offset == "number" && typeof e.text == "string" && A.isPath(e.path);
      case "merge_node":
        return typeof e.position == "number" && A.isPath(e.path) && nt(e.properties);
      case "move_node":
        return A.isPath(e.path) && A.isPath(e.newPath);
      case "remove_node":
        return A.isPath(e.path) && Q.isNode(e.node);
      case "remove_text":
        return typeof e.offset == "number" && typeof e.text == "string" && A.isPath(e.path);
      case "set_node":
        return A.isPath(e.path) && nt(e.properties) && nt(e.newProperties);
      case "set_selection":
        return e.properties === null && L.isRange(e.newProperties) || e.newProperties === null && L.isRange(e.properties) || nt(e.properties) && nt(e.newProperties);
      case "split_node":
        return A.isPath(e.path) && typeof e.position == "number" && nt(e.properties);
      default:
        return !1;
    }
  },
  isOperationList(e) {
    return Array.isArray(e) && e.every((t) => Pr.isOperation(t));
  },
  isSelectionOperation(e) {
    return Pr.isOperation(e) && e.type.endsWith("_selection");
  },
  isTextOperation(e) {
    return Pr.isOperation(e) && e.type.endsWith("_text");
  },
  inverse(e) {
    switch (e.type) {
      case "insert_node":
        return _e(_e({}, e), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return _e(_e({}, e), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return _e(_e({}, e), {}, {
          type: "split_node",
          path: A.previous(e.path)
        });
      case "move_node": {
        var {
          newPath: t,
          path: r
        } = e;
        if (A.equals(t, r))
          return e;
        if (A.isSibling(r, t))
          return _e(_e({}, e), {}, {
            path: t,
            newPath: r
          });
        var n = A.transform(r, e), a = A.transform(A.next(r), e);
        return _e(_e({}, e), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return _e(_e({}, e), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return _e(_e({}, e), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: i,
          newProperties: o
        } = e;
        return _e(_e({}, e), {}, {
          properties: o,
          newProperties: i
        });
      }
      case "set_selection": {
        var {
          properties: u,
          newProperties: s
        } = e;
        return u == null ? _e(_e({}, e), {}, {
          properties: s,
          newProperties: null
        }) : s == null ? _e(_e({}, e), {}, {
          properties: null,
          newProperties: u
        }) : _e(_e({}, e), {}, {
          properties: s,
          newProperties: u
        });
      }
      case "split_node":
        return _e(_e({}, e), {}, {
          type: "merge_node",
          path: A.next(e.path)
        });
    }
  }
}, zs = /* @__PURE__ */ new WeakMap(), jg = (e) => {
  var t = zs.get(e);
  if (t !== void 0)
    return t;
  if (!nt(e))
    return !1;
  var r = typeof e.addMark == "function" && typeof e.apply == "function" && typeof e.deleteFragment == "function" && typeof e.insertBreak == "function" && typeof e.insertSoftBreak == "function" && typeof e.insertFragment == "function" && typeof e.insertNode == "function" && typeof e.insertText == "function" && typeof e.isElementReadOnly == "function" && typeof e.isInline == "function" && typeof e.isSelectable == "function" && typeof e.isVoid == "function" && typeof e.normalizeNode == "function" && typeof e.onChange == "function" && typeof e.removeMark == "function" && typeof e.getDirtyPaths == "function" && (e.marks === null || nt(e.marks)) && (e.selection === null || L.isRange(e.selection)) && Q.isNodeList(e.children) && Pr.isOperationList(e.operations);
  return zs.set(e, r), r;
}, h = {
  above(e, t) {
    return e.above(t);
  },
  addMark(e, t, r) {
    e.addMark(t, r);
  },
  after(e, t, r) {
    return e.after(t, r);
  },
  before(e, t, r) {
    return e.before(t, r);
  },
  deleteBackward(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = t;
    e.deleteBackward(r);
  },
  deleteForward(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = t;
    e.deleteForward(r);
  },
  deleteFragment(e, t) {
    e.deleteFragment(t);
  },
  edges(e, t) {
    return e.edges(t);
  },
  elementReadOnly(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return e.elementReadOnly(t);
  },
  end(e, t) {
    return e.end(t);
  },
  first(e, t) {
    return e.first(t);
  },
  fragment(e, t) {
    return e.fragment(t);
  },
  hasBlocks(e, t) {
    return e.hasBlocks(t);
  },
  hasInlines(e, t) {
    return e.hasInlines(t);
  },
  hasPath(e, t) {
    return e.hasPath(t);
  },
  hasTexts(e, t) {
    return e.hasTexts(t);
  },
  insertBreak(e) {
    e.insertBreak();
  },
  insertFragment(e, t, r) {
    e.insertFragment(t, r);
  },
  insertNode(e, t) {
    e.insertNode(t);
  },
  insertSoftBreak(e) {
    e.insertSoftBreak();
  },
  insertText(e, t) {
    e.insertText(t);
  },
  isBlock(e, t) {
    return e.isBlock(t);
  },
  isEdge(e, t, r) {
    return e.isEdge(t, r);
  },
  isEditor(e) {
    return jg(e);
  },
  isElementReadOnly(e, t) {
    return e.isElementReadOnly(t);
  },
  isEmpty(e, t) {
    return e.isEmpty(t);
  },
  isEnd(e, t, r) {
    return e.isEnd(t, r);
  },
  isInline(e, t) {
    return e.isInline(t);
  },
  isNormalizing(e) {
    return e.isNormalizing();
  },
  isSelectable(e, t) {
    return e.isSelectable(t);
  },
  isStart(e, t, r) {
    return e.isStart(t, r);
  },
  isVoid(e, t) {
    return e.isVoid(t);
  },
  last(e, t) {
    return e.last(t);
  },
  leaf(e, t, r) {
    return e.leaf(t, r);
  },
  levels(e, t) {
    return e.levels(t);
  },
  marks(e) {
    return e.getMarks();
  },
  next(e, t) {
    return e.next(t);
  },
  node(e, t, r) {
    return e.node(t, r);
  },
  nodes(e, t) {
    return e.nodes(t);
  },
  normalize(e, t) {
    e.normalize(t);
  },
  parent(e, t, r) {
    return e.parent(t, r);
  },
  path(e, t, r) {
    return e.path(t, r);
  },
  pathRef(e, t, r) {
    return e.pathRef(t, r);
  },
  pathRefs(e) {
    return e.pathRefs();
  },
  point(e, t, r) {
    return e.point(t, r);
  },
  pointRef(e, t, r) {
    return e.pointRef(t, r);
  },
  pointRefs(e) {
    return e.pointRefs();
  },
  positions(e, t) {
    return e.positions(t);
  },
  previous(e, t) {
    return e.previous(t);
  },
  range(e, t, r) {
    return e.range(t, r);
  },
  rangeRef(e, t, r) {
    return e.rangeRef(t, r);
  },
  rangeRefs(e) {
    return e.rangeRefs();
  },
  removeMark(e, t) {
    e.removeMark(t);
  },
  setNormalizing(e, t) {
    e.setNormalizing(t);
  },
  start(e, t) {
    return e.start(t);
  },
  string(e, t, r) {
    return e.string(t, r);
  },
  unhangRange(e, t, r) {
    return e.unhangRange(t, r);
  },
  void(e, t) {
    return e.void(t);
  },
  withoutNormalizing(e, t) {
    e.withoutNormalizing(t);
  }
}, Ng = {
  isSpan(e) {
    return Array.isArray(e) && e.length === 2 && e.every(A.isPath);
  }
};
function Ws(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Hs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ws(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ws(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var be = {
  compare(e, t) {
    var r = A.compare(e.path, t.path);
    return r === 0 ? e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0 : r;
  },
  isAfter(e, t) {
    return be.compare(e, t) === 1;
  },
  isBefore(e, t) {
    return be.compare(e, t) === -1;
  },
  equals(e, t) {
    return e.offset === t.offset && A.equals(e.path, t.path);
  },
  isPoint(e) {
    return nt(e) && typeof e.offset == "number" && A.isPath(e.path);
  },
  transform(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return xu(e, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "forward"
      } = r, {
        path: i,
        offset: o
      } = n;
      switch (t.type) {
        case "insert_node":
        case "move_node": {
          n.path = A.transform(i, t, r);
          break;
        }
        case "insert_text": {
          A.equals(t.path, i) && (t.offset < o || t.offset === o && a === "forward") && (n.offset += t.text.length);
          break;
        }
        case "merge_node": {
          A.equals(t.path, i) && (n.offset += t.position), n.path = A.transform(i, t, r);
          break;
        }
        case "remove_text": {
          A.equals(t.path, i) && t.offset <= o && (n.offset -= Math.min(o - t.offset, t.text.length));
          break;
        }
        case "remove_node": {
          if (A.equals(t.path, i) || A.isAncestor(t.path, i))
            return null;
          n.path = A.transform(i, t, r);
          break;
        }
        case "split_node": {
          if (A.equals(t.path, i)) {
            if (t.position === o && a == null)
              return null;
            (t.position < o || t.position === o && a === "forward") && (n.offset -= t.position, n.path = A.transform(i, t, Hs(Hs({}, r), {}, {
              affinity: "forward"
            })));
          } else
            n.path = A.transform(i, t, r);
          break;
        }
      }
    });
  }
}, qs = void 0, rt = {
  setScrubber(e) {
    qs = e;
  },
  stringify(e) {
    return JSON.stringify(e, qs);
  }
}, Mg = ["text"], Ig = ["anchor", "focus"];
function Us(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ur(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Us(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Us(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var oe = {
  equals(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = r;
    function a(i) {
      var o = gr(i, Mg);
      return o;
    }
    return rf(n ? a(e) : e, n ? a(t) : t);
  },
  isText(e) {
    return nt(e) && typeof e.text == "string";
  },
  isTextList(e) {
    return Array.isArray(e) && e.every((t) => oe.isText(t));
  },
  isTextProps(e) {
    return e.text !== void 0;
  },
  matches(e, t) {
    for (var r in t)
      if (r !== "text" && (!e.hasOwnProperty(r) || e[r] !== t[r]))
        return !1;
    return !0;
  },
  decorations(e, t) {
    var r = [ur({}, e)];
    for (var n of t) {
      var a = gr(n, Ig), [i, o] = L.edges(n), u = [], s = 0, l = i.offset, c = o.offset;
      for (var d of r) {
        var {
          length: v
        } = d.text, b = s;
        if (s += v, l <= b && s <= c) {
          Object.assign(d, a), u.push(d);
          continue;
        }
        if (l !== c && (l === s || c === b) || l > s || c < b || c === b && b !== 0) {
          u.push(d);
          continue;
        }
        var m = d, f = void 0, g = void 0;
        if (c < s) {
          var p = c - b;
          g = ur(ur({}, m), {}, {
            text: m.text.slice(p)
          }), m = ur(ur({}, m), {}, {
            text: m.text.slice(0, p)
          });
        }
        if (l > b) {
          var C = l - b;
          f = ur(ur({}, m), {}, {
            text: m.text.slice(0, C)
          }), m = ur(ur({}, m), {}, {
            text: m.text.slice(C)
          });
        }
        Object.assign(m, a), f && u.push(f), u.push(m), g && u.push(g);
      }
      r = u;
    }
    return r;
  }
}, Pu = (e) => e.selection ? e.selection : e.children.length > 0 ? h.end(e, []) : [0], Ln = (e, t) => {
  var [r] = h.node(e, t);
  return (n) => n === r;
}, Tu = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !r, a = r ? Wg(t) : t, i = ve.None, o = ve.None, u = 0, s = null, l = null;
  for (var c of a) {
    var d = c.codePointAt(0);
    if (!d)
      break;
    var v = tp(c, d);
    if ([i, o] = n ? [o, v] : [v, i], En(i, ve.ZWJ) && En(o, ve.ExtPict) && (n ? s = Gs(t.substring(0, u)) : s = Gs(t.substring(0, t.length - u)), !s) || En(i, ve.RI) && En(o, ve.RI) && (l !== null ? l = !l : n ? l = !0 : l = op(t.substring(0, t.length - u)), !l) || i !== ve.None && o !== ve.None && np(i, o))
      break;
    u += c.length;
  }
  return u || 1;
}, kg = /\s/, Lg = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, _g = /['\u2018\u2019]/, Vg = function(t) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; t.length > 0; ) {
    var i = Tu(t, r), [o, u] = Ru(t, i, r);
    if (zg(o, u, r))
      a = !0, n += i;
    else if (!a)
      n += i;
    else
      break;
    t = u;
  }
  return n;
}, Ru = (e, t, r) => {
  if (r) {
    var n = e.length - t;
    return [e.slice(n, e.length), e.slice(0, n)];
  }
  return [e.slice(0, t), e.slice(t)];
}, zg = function e(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (kg.test(t))
    return !1;
  if (_g.test(t)) {
    var a = Tu(r, n), [i, o] = Ru(r, a, n);
    if (e(i, o, n))
      return !0;
  }
  return !Lg.test(t);
}, Wg = function* (t) {
  for (var r = t.length - 1, n = 0; n < t.length; n++) {
    var a = t.charAt(r - n);
    if (qg(a.charCodeAt(0))) {
      var i = t.charAt(r - n - 1);
      if (Hg(i.charCodeAt(0))) {
        yield i + a, n++;
        continue;
      }
    }
    yield a;
  }
}, Hg = (e) => e >= 55296 && e <= 56319, qg = (e) => e >= 56320 && e <= 57343, ve;
(function(e) {
  e[e.None = 0] = "None", e[e.Extend = 1] = "Extend", e[e.ZWJ = 2] = "ZWJ", e[e.RI = 4] = "RI", e[e.Prepend = 8] = "Prepend", e[e.SpacingMark = 16] = "SpacingMark", e[e.L = 32] = "L", e[e.V = 64] = "V", e[e.T = 128] = "T", e[e.LV = 256] = "LV", e[e.LVT = 512] = "LVT", e[e.ExtPict = 1024] = "ExtPict", e[e.Any = 2048] = "Any";
})(ve || (ve = {}));
var Ug = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, Gg = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, Kg = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, Xg = /^[\u1100-\u115F\uA960-\uA97C]$/, Yg = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, Jg = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, Zg = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, Qg = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, ep = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, tp = (e, t) => {
  var r = ve.Any;
  return e.search(Ug) !== -1 && (r |= ve.Extend), t === 8205 && (r |= ve.ZWJ), t >= 127462 && t <= 127487 && (r |= ve.RI), e.search(Gg) !== -1 && (r |= ve.Prepend), e.search(Kg) !== -1 && (r |= ve.SpacingMark), e.search(Xg) !== -1 && (r |= ve.L), e.search(Yg) !== -1 && (r |= ve.V), e.search(Jg) !== -1 && (r |= ve.T), e.search(Zg) !== -1 && (r |= ve.LV), e.search(Qg) !== -1 && (r |= ve.LVT), e.search(ep) !== -1 && (r |= ve.ExtPict), r;
};
function En(e, t) {
  return (e & t) !== 0;
}
var rp = [
  // GB6
  [ve.L, ve.L | ve.V | ve.LV | ve.LVT],
  // GB7
  [ve.LV | ve.V, ve.V | ve.T],
  // GB8
  [ve.LVT | ve.T, ve.T],
  // GB9
  [ve.Any, ve.Extend | ve.ZWJ],
  // GB9a
  [ve.Any, ve.SpacingMark],
  // GB9b
  [ve.Prepend, ve.Any],
  // GB11
  [ve.ZWJ, ve.ExtPict],
  // GB12 and GB13
  [ve.RI, ve.RI]
];
function np(e, t) {
  return rp.findIndex((r) => En(e, r[0]) && En(t, r[1])) === -1;
}
var ap = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, Gs = (e) => e.search(ap) !== -1, ip = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, op = (e) => {
  var t = e.match(ip);
  if (t === null)
    return !1;
  var r = t[0].length / 2;
  return r % 2 === 1;
}, up = {
  delete(e, t) {
    e.delete(t);
  },
  insertFragment(e, t, r) {
    e.insertFragment(t, r);
  },
  insertText(e, t) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    h.withoutNormalizing(e, () => {
      var {
        voids: n = !1
      } = r, {
        at: a = Pu(e)
      } = r;
      if (A.isPath(a) && (a = h.range(e, a)), L.isRange(a))
        if (L.isCollapsed(a))
          a = a.anchor;
        else {
          var i = L.end(a);
          if (!n && h.void(e, {
            at: i
          }))
            return;
          var o = L.start(a), u = h.pointRef(e, o), s = h.pointRef(e, i);
          G.delete(e, {
            at: a,
            voids: n
          });
          var l = u.unref(), c = s.unref();
          a = l || c, G.setSelection(e, {
            anchor: a,
            focus: a
          });
        }
      if (!(!n && h.void(e, {
        at: a
      }) || h.elementReadOnly(e, {
        at: a
      }))) {
        var {
          path: d,
          offset: v
        } = a;
        t.length > 0 && e.apply({
          type: "insert_text",
          path: d,
          offset: v,
          text: t
        });
      }
    });
  }
};
function Ks(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xa(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ks(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ks(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var G = xa(xa(xa(xa({}, Ag), Sg), Og), up), Ga = /* @__PURE__ */ new WeakMap(), sp = (e) => Ga.get(e) || !1, lp = (e, t, r) => {
  var n = Ga.get(e) || !1;
  Ga.set(e, !0);
  try {
    t(), r();
  } finally {
    Ga.set(e, n);
  }
};
function nf(e, t, r) {
  var n = li.get(e) || [], a = ci.get(e) || /* @__PURE__ */ new Set(), i, o, u = (d) => {
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
  for (var c of t)
    u(c);
  li.set(e, i), ci.set(e, o);
}
var cp = (e, t) => {
  for (var r of h.pathRefs(e))
    yg.transform(r, t);
  for (var n of h.pointRefs(e))
    Dg.transform(n, t);
  for (var a of h.rangeRefs(e))
    Eg.transform(a, t);
  if (!sp(e)) {
    var i = A.operationCanTransformPath(t) ? (o) => A.transform(o, t) : void 0;
    nf(e, e.getDirtyPaths(t), i);
  }
  G.transform(e, t), e.operations.push(t), h.normalize(e, {
    operation: t
  }), t.type === "set_selection" && (e.marks = null), Zn.get(e) || (Zn.set(e, !0), Promise.resolve().then(() => {
    Zn.set(e, !1), e.onChange({
      operation: t
    }), e.operations = [];
  }));
}, fp = (e, t) => {
  switch (t.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: r
      } = t;
      return A.levels(r);
    }
    case "insert_node": {
      var {
        node: n,
        path: a
      } = t, i = A.levels(a), o = oe.isText(n) ? [] : Array.from(Q.nodes(n), (T) => {
        var [, _] = T;
        return a.concat(_);
      });
      return [...i, ...o];
    }
    case "merge_node": {
      var {
        path: u
      } = t, s = A.ancestors(u), l = A.previous(u);
      return [...s, l];
    }
    case "move_node": {
      var {
        path: c,
        newPath: d
      } = t;
      if (A.equals(c, d))
        return [];
      var v = [], b = [];
      for (var m of A.ancestors(c)) {
        var f = A.transform(m, t);
        v.push(f);
      }
      for (var g of A.ancestors(d)) {
        var p = A.transform(g, t);
        b.push(p);
      }
      var C = b[b.length - 1], y = d[d.length - 1], E = C.concat(y);
      return [...v, ...b, E];
    }
    case "remove_node": {
      var {
        path: F
      } = t, B = A.ancestors(F);
      return [...B];
    }
    case "split_node": {
      var {
        path: w
      } = t, $ = A.levels(w), P = A.next(w);
      return [...$, P];
    }
    default:
      return [];
  }
}, dp = (e) => {
  var {
    selection: t
  } = e;
  return t ? Q.fragment(e, t) : [];
}, vp = (e, t) => {
  var [r, n] = t;
  if (!oe.isText(r)) {
    if (ae.isElement(r) && r.children.length === 0) {
      var a = {
        text: ""
      };
      G.insertNodes(e, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var i = h.isEditor(r) ? !1 : ae.isElement(r) && (e.isInline(r) || r.children.length === 0 || oe.isText(r.children[0]) || e.isInline(r.children[0])), o = 0, u = 0; u < r.children.length; u++, o++) {
      var s = Q.get(e, n);
      if (!oe.isText(s)) {
        var l = s.children[o], c = s.children[o - 1], d = u === r.children.length - 1, v = oe.isText(l) || ae.isElement(l) && e.isInline(l);
        if (v !== i)
          G.removeNodes(e, {
            at: n.concat(o),
            voids: !0
          }), o--;
        else if (ae.isElement(l)) {
          if (e.isInline(l)) {
            if (c == null || !oe.isText(c)) {
              var b = {
                text: ""
              };
              G.insertNodes(e, b, {
                at: n.concat(o),
                voids: !0
              }), o++;
            } else if (d) {
              var m = {
                text: ""
              };
              G.insertNodes(e, m, {
                at: n.concat(o + 1),
                voids: !0
              }), o++;
            }
          }
        } else
          c != null && oe.isText(c) && (oe.equals(l, c, {
            loose: !0
          }) ? (G.mergeNodes(e, {
            at: n.concat(o),
            voids: !0
          }), o--) : c.text === "" ? (G.removeNodes(e, {
            at: n.concat(o - 1),
            voids: !0
          }), o--) : l.text === "" && (G.removeNodes(e, {
            at: n.concat(o),
            voids: !0
          }), o--));
      }
    }
  }
}, hp = (e, t) => {
  var {
    iteration: r,
    initialDirtyPathsLength: n
  } = t, a = n * 42;
  if (r > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, gp = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: n = !1,
    mode: a = "lowest",
    at: i = t.selection,
    match: o
  } = r;
  if (i) {
    var u = h.path(t, i), s = a === "lowest";
    for (var [l, c] of h.levels(t, {
      at: u,
      voids: n,
      match: o,
      reverse: s
    }))
      if (!oe.isText(l)) {
        if (L.isRange(i)) {
          if (A.isAncestor(c, i.anchor.path) && A.isAncestor(c, i.focus.path))
            return [l, c];
        } else if (!A.equals(u, c))
          return [l, c];
      }
  }
};
function Xs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ys(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xs(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Xs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var pp = (e, t, r) => {
  var {
    selection: n
  } = e;
  if (n) {
    var a = (d, v) => {
      if (!oe.isText(d))
        return !1;
      var [b, m] = h.parent(e, v);
      return !e.isVoid(b) || e.markableVoid(b);
    }, i = L.isExpanded(n), o = !1;
    if (!i) {
      var [u, s] = h.node(e, n);
      if (u && a(u, s)) {
        var [l] = h.parent(e, s);
        o = l && e.markableVoid(l);
      }
    }
    if (i || o)
      G.setNodes(e, {
        [t]: r
      }, {
        match: a,
        split: !0,
        voids: !0
      });
    else {
      var c = Ys(Ys({}, h.marks(e) || {}), {}, {
        [t]: r
      });
      e.marks = c, Zn.get(e) || e.onChange();
    }
  }
};
function Js(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Zs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Js(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Js(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var mp = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.point(t, r, {
    edge: "end"
  }), i = h.end(t, []), o = {
    anchor: a,
    focus: i
  }, {
    distance: u = 1
  } = n, s = 0, l;
  for (var c of h.positions(t, Zs(Zs({}, n), {}, {
    at: o
  }))) {
    if (s > u)
      break;
    s !== 0 && (l = c), s++;
  }
  return l;
};
function Qs(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function el(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qs(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Qs(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var bp = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.start(t, []), i = h.point(t, r, {
    edge: "start"
  }), o = {
    anchor: a,
    focus: i
  }, {
    distance: u = 1
  } = n, s = 0, l;
  for (var c of h.positions(t, el(el({}, n), {}, {
    at: o,
    reverse: !0
  }))) {
    if (s > u)
      break;
    s !== 0 && (l = c), s++;
  }
  return l;
}, Cp = (e, t) => {
  var {
    selection: r
  } = e;
  r && L.isCollapsed(r) && G.delete(e, {
    unit: t,
    reverse: !0
  });
}, yp = (e, t) => {
  var {
    selection: r
  } = e;
  r && L.isCollapsed(r) && G.delete(e, {
    unit: t
  });
}, Dp = function(t) {
  var {
    direction: r = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = t;
  n && L.isExpanded(n) && G.delete(t, {
    reverse: r === "backward"
  });
}, Ep = (e, t) => [h.start(e, t), h.end(e, t)];
function tl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function rl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? tl(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var wp = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return h.above(t, rl(rl({}, r), {}, {
    match: (n) => ae.isElement(n) && h.isElementReadOnly(t, n)
  }));
}, Fp = (e, t) => h.point(e, t, {
  edge: "end"
}), Bp = (e, t) => {
  var r = h.path(e, t, {
    edge: "start"
  });
  return h.node(e, r);
}, Ap = (e, t) => {
  var r = h.range(e, t);
  return Q.fragment(e, r);
};
function nl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function al(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? nl(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : nl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Sp = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return h.above(t, al(al({}, r), {}, {
    match: (n) => ae.isElement(n) && h.isVoid(t, n)
  }));
}, Op = (e, t) => t.children.some((r) => ae.isElement(r) && h.isBlock(e, r)), xp = (e, t) => t.children.some((r) => oe.isText(r) || h.isInline(e, r)), Pp = (e, t) => Q.has(e, t), Tp = (e, t) => t.children.every((r) => oe.isText(r)), Rp = (e) => {
  G.splitNodes(e, {
    always: !0
  });
}, $p = (e, t, r) => {
  G.insertNodes(e, t, r);
}, jp = (e) => {
  G.splitNodes(e, {
    always: !0
  });
};
function il(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Np(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? il(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : il(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Mp = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: i
  } = t;
  if (a) {
    if (i) {
      var o = Np({
        text: r
      }, i);
      G.insertNodes(t, o, {
        at: n.at,
        voids: n.voids
      });
    } else
      G.insertText(t, r, n);
    t.marks = null;
  }
}, Ip = (e, t) => !e.isInline(t), kp = (e, t, r) => h.isStart(e, t, r) || h.isEnd(e, t, r), Lp = (e, t) => {
  var {
    children: r
  } = t, [n] = r;
  return r.length === 0 || r.length === 1 && oe.isText(n) && n.text === "" && !e.isVoid(t);
}, _p = (e, t, r) => {
  var n = h.end(e, r);
  return be.equals(t, n);
}, Vp = (e) => {
  var t = tf.get(e);
  return t === void 0 ? !0 : t;
}, zp = (e, t, r) => {
  if (t.offset !== 0)
    return !1;
  var n = h.start(e, r);
  return be.equals(t, n);
}, Wp = (e, t) => {
  var r = h.path(e, t, {
    edge: "end"
  });
  return h.node(e, r);
}, Hp = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.path(t, r, n), i = Q.leaf(t, a);
  return [i, a];
};
function qp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = e.selection,
      reverse: n = !1,
      voids: a = !1
    } = t, {
      match: i
    } = t;
    if (i == null && (i = () => !0), !!r) {
      var o = [], u = h.path(e, r);
      for (var [s, l] of Q.levels(e, u))
        if (i(s, l) && (o.push([s, l]), !a && ae.isElement(s) && h.isVoid(e, s)))
          break;
      n && o.reverse(), yield* o;
    }
  }();
}
var Up = ["text"], Gp = ["text"], Kp = function(t) {
  var {
    marks: r,
    selection: n
  } = t;
  if (!n)
    return null;
  var {
    anchor: a,
    focus: i
  } = n;
  if (r)
    return r;
  if (L.isExpanded(n)) {
    var o = h.isEnd(t, a, a.path);
    if (o) {
      var u = h.after(t, a);
      u && (a = u);
    }
    var [s] = h.nodes(t, {
      match: oe.isText,
      at: {
        anchor: a,
        focus: i
      }
    });
    if (s) {
      var [l] = s, c = gr(l, Up);
      return c;
    } else
      return {};
  }
  var {
    path: d
  } = a, [v] = h.leaf(t, d);
  if (a.offset === 0) {
    var b = h.previous(t, {
      at: d,
      match: oe.isText
    }), m = h.above(t, {
      match: (E) => ae.isElement(E) && h.isVoid(t, E) && t.markableVoid(E)
    });
    if (!m) {
      var f = h.above(t, {
        match: (E) => ae.isElement(E) && h.isBlock(t, E)
      });
      if (b && f) {
        var [g, p] = b, [, C] = f;
        A.isAncestor(C, p) && (v = g);
      }
    }
  }
  var y = gr(v, Gp);
  return y;
}, Xp = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: i,
    at: o = t.selection
  } = r;
  if (o) {
    var u = h.after(t, o, {
      voids: a
    });
    if (u) {
      var [, s] = h.last(t, []), l = [u.path, s];
      if (A.isPath(o) && o.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (i == null)
        if (A.isPath(o)) {
          var [c] = h.parent(t, o);
          i = (v) => c.children.includes(v);
        } else
          i = () => !0;
      var [d] = h.nodes(t, {
        at: l,
        match: i,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, Yp = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.path(t, r, n), i = Q.get(t, a);
  return [i, a];
};
function Jp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = e.selection,
      mode: n = "all",
      universal: a = !1,
      reverse: i = !1,
      voids: o = !1,
      ignoreNonSelectable: u = !1
    } = t, {
      match: s
    } = t;
    if (s || (s = () => !0), !!r) {
      var l, c;
      if (Ng.isSpan(r))
        l = r[0], c = r[1];
      else {
        var d = h.path(e, r, {
          edge: "start"
        }), v = h.path(e, r, {
          edge: "end"
        });
        l = i ? v : d, c = i ? d : v;
      }
      var b = Q.nodes(e, {
        reverse: i,
        from: l,
        to: c,
        pass: (E) => {
          var [F] = E;
          return ae.isElement(F) ? !!(!o && (h.isVoid(e, F) || h.isElementReadOnly(e, F)) || u && !h.isSelectable(e, F)) : !1;
        }
      }), m = [], f;
      for (var [g, p] of b)
        if (!(u && ae.isElement(g) && !h.isSelectable(e, g))) {
          var C = f && A.compare(p, f[1]) === 0;
          if (!(n === "highest" && C)) {
            if (!s(g, p)) {
              if (a && !C && oe.isText(g))
                return;
              continue;
            }
            if (n === "lowest" && C) {
              f = [g, p];
              continue;
            }
            var y = n === "lowest" ? f : [g, p];
            y && (a ? m.push(y) : yield y), f = [g, p];
          }
        }
      n === "lowest" && f && (a ? m.push(f) : yield f), a && (yield* m);
    }
  }();
}
var Zp = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = r, i = (c) => li.get(c) || [], o = (c) => ci.get(c) || /* @__PURE__ */ new Set(), u = (c) => {
    var d = i(c).pop(), v = d.join(",");
    return o(c).delete(v), d;
  };
  if (h.isNormalizing(t)) {
    if (n) {
      var s = Array.from(Q.nodes(t), (c) => {
        var [, d] = c;
        return d;
      }), l = new Set(s.map((c) => c.join(",")));
      li.set(t, s), ci.set(t, l);
    }
    i(t).length !== 0 && h.withoutNormalizing(t, () => {
      for (var c of i(t))
        if (Q.has(t, c)) {
          var d = h.node(t, c), [v, b] = d;
          ae.isElement(v) && v.children.length === 0 && t.normalizeNode(d, {
            operation: a
          });
        }
      for (var m = i(t), f = m.length, g = 0; m.length !== 0; ) {
        if (!t.shouldNormalize({
          dirtyPaths: m,
          iteration: g,
          initialDirtyPathsLength: f,
          operation: a
        }))
          return;
        var p = u(t);
        if (Q.has(t, p)) {
          var C = h.node(t, p);
          t.normalizeNode(C, {
            operation: a
          });
        }
        g++, m = i(t);
      }
    });
  }
}, Qp = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = h.path(t, r, n), i = A.parent(a), o = h.node(t, i);
  return o;
}, em = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: u
      } = i, s = h.pathRefs(t);
      return s.delete(i), i.current = null, u;
    }
  }, o = h.pathRefs(t);
  return o.add(i), i;
}, tm = (e) => {
  var t = js.get(e);
  return t || (t = /* @__PURE__ */ new Set(), js.set(e, t)), t;
}, rm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: i
  } = n;
  if (A.isPath(r)) {
    if (i === "start") {
      var [, o] = Q.first(t, r);
      r = o;
    } else if (i === "end") {
      var [, u] = Q.last(t, r);
      r = u;
    }
  }
  return L.isRange(r) && (i === "start" ? r = L.start(r) : i === "end" ? r = L.end(r) : r = A.common(r.anchor.path, r.focus.path)), be.isPoint(r) && (r = r.path), a != null && (r = r.slice(0, a)), r;
}, nm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: u
      } = i, s = h.pointRefs(t);
      return s.delete(i), i.current = null, u;
    }
  }, o = h.pointRefs(t);
  return o.add(i), i;
}, am = (e) => {
  var t = Ns.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Ns.set(e, t)), t;
}, im = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (A.isPath(r)) {
    var i;
    if (a === "end") {
      var [, o] = Q.last(t, r);
      i = o;
    } else {
      var [, u] = Q.first(t, r);
      i = u;
    }
    var s = Q.get(t, i);
    if (!oe.isText(s))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(r, "] because it has no ").concat(a, " text node."));
    return {
      path: i,
      offset: a === "end" ? s.text.length : 0
    };
  }
  if (L.isRange(r)) {
    var [l, c] = L.edges(r);
    return a === "start" ? l : c;
  }
  return r;
};
function om(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = e.selection,
      unit: n = "offset",
      reverse: a = !1,
      voids: i = !1,
      ignoreNonSelectable: o = !1
    } = t;
    if (!r)
      return;
    var u = h.range(e, r), [s, l] = L.edges(u), c = a ? l : s, d = !1, v = "", b = 0, m = 0, f = 0;
    for (var [g, p] of h.nodes(e, {
      at: r,
      reverse: a,
      voids: i,
      ignoreNonSelectable: o
    })) {
      if (ae.isElement(g)) {
        if (!i && (e.isVoid(g) || e.isElementReadOnly(g))) {
          yield h.start(e, p);
          continue;
        }
        if (e.isInline(g))
          continue;
        if (h.hasInlines(e, g)) {
          var C = A.isAncestor(p, l.path) ? l : h.end(e, p), y = A.isAncestor(p, s.path) ? s : h.start(e, p);
          v = h.string(e, {
            anchor: y,
            focus: C
          }, {
            voids: i
          }), d = !0;
        }
      }
      if (oe.isText(g)) {
        var E = A.equals(p, c.path);
        for (E ? (m = a ? c.offset : g.text.length - c.offset, f = c.offset) : (m = g.text.length, f = a ? m : 0), (E || d || n === "offset") && (yield {
          path: p,
          offset: f
        }, d = !1); ; ) {
          if (b === 0) {
            if (v === "")
              break;
            b = F(v, n, a), v = Ru(v, b, a)[1];
          }
          if (f = a ? f - b : f + b, m = m - b, m < 0) {
            b = -m;
            break;
          }
          b = 0, yield {
            path: p,
            offset: f
          };
        }
      }
    }
    function F(B, w, $) {
      return w === "character" ? Tu(B, $) : w === "word" ? Vg(B, $) : w === "line" || w === "block" ? B.length : 1;
    }
  }();
}
var um = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: i,
    at: o = t.selection
  } = r;
  if (o) {
    var u = h.before(t, o, {
      voids: a
    });
    if (u) {
      var [, s] = h.first(t, []), l = [u.path, s];
      if (A.isPath(o) && o.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (i == null)
        if (A.isPath(o)) {
          var [c] = h.parent(t, o);
          i = (v) => c.children.includes(v);
        } else
          i = () => !0;
      var [d] = h.nodes(t, {
        reverse: !0,
        at: l,
        match: i,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, sm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: u
      } = i, s = h.rangeRefs(t);
      return s.delete(i), i.current = null, u;
    }
  }, o = h.rangeRefs(t);
  return o.add(i), i;
}, lm = (e) => {
  var t = Ms.get(e);
  return t || (t = /* @__PURE__ */ new Set(), Ms.set(e, t)), t;
}, cm = (e, t, r) => {
  if (L.isRange(t) && !r)
    return t;
  var n = h.start(e, t), a = h.end(e, r || t);
  return {
    anchor: n,
    focus: a
  };
};
function ol(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function fm(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ol(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ol(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var dm = (e, t) => {
  var {
    selection: r
  } = e;
  if (r) {
    var n = (c, d) => {
      if (!oe.isText(c))
        return !1;
      var [v, b] = h.parent(e, d);
      return !e.isVoid(v) || e.markableVoid(v);
    }, a = L.isExpanded(r), i = !1;
    if (!a) {
      var [o, u] = h.node(e, r);
      if (o && n(o, u)) {
        var [s] = h.parent(e, u);
        i = s && e.markableVoid(s);
      }
    }
    if (a || i)
      G.unsetNodes(e, t, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var l = fm({}, h.marks(e) || {});
      delete l[t], e.marks = l, Zn.get(e) || e.onChange();
    }
  }
}, vm = (e, t) => {
  tf.set(e, t);
}, hm = (e, t) => h.point(e, t, {
  edge: "start"
}), gm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, i = h.range(t, r), [o, u] = L.edges(i), s = "";
  for (var [l, c] of h.nodes(t, {
    at: i,
    match: oe.isText,
    voids: a
  })) {
    var d = l.text;
    A.equals(c, u.path) && (d = d.slice(0, u.offset)), A.equals(c, o.path) && (d = d.slice(o.offset)), s += d;
  }
  return s;
}, pm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [i, o] = L.edges(r);
  if (i.offset !== 0 || o.offset !== 0 || L.isCollapsed(r) || A.hasPrevious(o.path))
    return r;
  var u = h.above(t, {
    at: o,
    match: (m) => ae.isElement(m) && h.isBlock(t, m),
    voids: a
  }), s = u ? u[1] : [], l = h.start(t, i), c = {
    anchor: l,
    focus: o
  }, d = !0;
  for (var [v, b] of h.nodes(t, {
    at: c,
    match: oe.isText,
    reverse: !0,
    voids: a
  })) {
    if (d) {
      d = !1;
      continue;
    }
    if (v.text !== "" || A.isBefore(b, s)) {
      o = {
        path: b,
        offset: v.text.length
      };
      break;
    }
  }
  return {
    anchor: i,
    focus: o
  };
}, mm = (e, t) => {
  var r = h.isNormalizing(e);
  h.setNormalizing(e, !1);
  try {
    t();
  } finally {
    h.setNormalizing(e, r);
  }
  h.normalize(e);
}, bm = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(t, () => {
    var n, a, {
      reverse: i = !1,
      unit: o = "character",
      distance: u = 1,
      voids: s = !1
    } = r, {
      at: l = t.selection,
      hanging: c = !1
    } = r;
    if (l) {
      var d = !1;
      if (L.isRange(l) && L.isCollapsed(l) && (d = !0, l = l.anchor), be.isPoint(l)) {
        var v = h.void(t, {
          at: l,
          mode: "highest"
        });
        if (!s && v) {
          var [, b] = v;
          l = b;
        } else {
          var m = {
            unit: o,
            distance: u
          }, f = i ? h.before(t, l, m) || h.start(t, []) : h.after(t, l, m) || h.end(t, []);
          l = {
            anchor: l,
            focus: f
          }, c = !0;
        }
      }
      if (A.isPath(l)) {
        G.removeNodes(t, {
          at: l,
          voids: s
        });
        return;
      }
      if (!L.isCollapsed(l)) {
        if (!c) {
          var [, g] = L.edges(l), p = h.end(t, []);
          be.equals(g, p) || (l = h.unhangRange(t, l, {
            voids: s
          }));
        }
        var [C, y] = L.edges(l), E = h.above(t, {
          match: (Z) => ae.isElement(Z) && h.isBlock(t, Z),
          at: C,
          voids: s
        }), F = h.above(t, {
          match: (Z) => ae.isElement(Z) && h.isBlock(t, Z),
          at: y,
          voids: s
        }), B = E && F && !A.equals(E[1], F[1]), w = A.equals(C.path, y.path), $ = s ? null : (n = h.void(t, {
          at: C,
          mode: "highest"
        })) !== null && n !== void 0 ? n : h.elementReadOnly(t, {
          at: C,
          mode: "highest"
        }), P = s ? null : (a = h.void(t, {
          at: y,
          mode: "highest"
        })) !== null && a !== void 0 ? a : h.elementReadOnly(t, {
          at: y,
          mode: "highest"
        });
        if ($) {
          var T = h.before(t, C);
          T && E && A.isAncestor(E[1], T.path) && (C = T);
        }
        if (P) {
          var _ = h.after(t, y);
          _ && F && A.isAncestor(F[1], _.path) && (y = _);
        }
        var j = [], N;
        for (var I of h.nodes(t, {
          at: l,
          voids: s
        })) {
          var [R, M] = I;
          N && A.compare(M, N) === 0 || (!s && ae.isElement(R) && (h.isVoid(t, R) || h.isElementReadOnly(t, R)) || !A.isCommon(M, C.path) && !A.isCommon(M, y.path)) && (j.push(I), N = M);
        }
        var O = Array.from(j, (Z) => {
          var [, me] = Z;
          return h.pathRef(t, me);
        }), k = h.pointRef(t, C), H = h.pointRef(t, y), U = "";
        if (!w && !$) {
          var K = k.current, [J] = h.leaf(t, K), {
            path: te
          } = K, {
            offset: S
          } = C, V = J.text.slice(S);
          V.length > 0 && (t.apply({
            type: "remove_text",
            path: te,
            offset: S,
            text: V
          }), U = V);
        }
        if (O.reverse().map((Z) => Z.unref()).filter((Z) => Z !== null).forEach((Z) => G.removeNodes(t, {
          at: Z,
          voids: s
        })), !P) {
          var z = H.current, [Y] = h.leaf(t, z), {
            path: ue
          } = z, ie = w ? C.offset : 0, se = Y.text.slice(ie, y.offset);
          se.length > 0 && (t.apply({
            type: "remove_text",
            path: ue,
            offset: ie,
            text: se
          }), U = se);
        }
        !w && B && H.current && k.current && G.mergeNodes(t, {
          at: H.current,
          hanging: !0,
          voids: s
        }), d && i && o === "character" && U.length > 1 && U.match(/[\u0E00-\u0E7F]+/) && G.insertText(t, U.slice(0, U.length - u));
        var de = k.unref(), he = H.unref(), ye = i ? de || he : he || de;
        r.at == null && ye && G.select(t, ye);
      }
    }
  });
}, Cm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h.withoutNormalizing(t, () => {
    var {
      hanging: a = !1,
      voids: i = !1
    } = n, {
      at: o = Pu(t),
      batchDirty: u = !0
    } = n;
    if (r.length) {
      if (L.isRange(o))
        if (a || (o = h.unhangRange(t, o, {
          voids: i
        })), L.isCollapsed(o))
          o = o.anchor;
        else {
          var [, s] = L.edges(o);
          if (!i && h.void(t, {
            at: s
          }))
            return;
          var l = h.pointRef(t, s);
          G.delete(t, {
            at: o
          }), o = l.unref();
        }
      else
        A.isPath(o) && (o = h.start(t, o));
      if (!(!i && h.void(t, {
        at: o
      }))) {
        var c = h.above(t, {
          at: o,
          match: (V) => ae.isElement(V) && h.isInline(t, V),
          mode: "highest",
          voids: i
        });
        if (c) {
          var [, d] = c;
          if (h.isEnd(t, o, d)) {
            var v = h.after(t, d);
            o = v;
          } else if (h.isStart(t, o, d)) {
            var b = h.before(t, d);
            o = b;
          }
        }
        var m = h.above(t, {
          match: (V) => ae.isElement(V) && h.isBlock(t, V),
          at: o,
          voids: i
        }), [, f] = m, g = h.isStart(t, o, f), p = h.isEnd(t, o, f), C = g && p, y = !g || g && p, E = !p, [, F] = Q.first({
          children: r
        }, []), [, B] = Q.last({
          children: r
        }, []), w = [], $ = (V) => {
          var [z, Y] = V, ue = Y.length === 0;
          return ue ? !1 : C ? !0 : !(y && A.isAncestor(Y, F) && ae.isElement(z) && !t.isVoid(z) && !t.isInline(z) || E && A.isAncestor(Y, B) && ae.isElement(z) && !t.isVoid(z) && !t.isInline(z));
        };
        for (var P of Q.nodes({
          children: r
        }, {
          pass: $
        }))
          $(P) && w.push(P);
        var T = [], _ = [], j = [], N = !0, I = !1;
        for (var [R] of w)
          ae.isElement(R) && !t.isInline(R) ? (N = !1, I = !0, _.push(R)) : N ? T.push(R) : j.push(R);
        var [M] = h.nodes(t, {
          at: o,
          match: (V) => oe.isText(V) || h.isInline(t, V),
          mode: "highest",
          voids: i
        }), [, O] = M, k = h.isStart(t, o, O), H = h.isEnd(t, o, O), U = h.pathRef(t, p && !j.length ? A.next(f) : f), K = h.pathRef(t, H ? A.next(O) : O);
        G.splitNodes(t, {
          at: o,
          match: (V) => I ? ae.isElement(V) && h.isBlock(t, V) : oe.isText(V) || h.isInline(t, V),
          mode: I ? "lowest" : "highest",
          always: I && (!g || T.length > 0) && (!p || j.length > 0),
          voids: i
        });
        var J = h.pathRef(t, !k || k && H ? A.next(O) : O);
        if (G.insertNodes(t, T, {
          at: J.current,
          match: (V) => oe.isText(V) || h.isInline(t, V),
          mode: "highest",
          voids: i,
          batchDirty: u
        }), C && !T.length && _.length && !j.length && G.delete(t, {
          at: f,
          voids: i
        }), G.insertNodes(t, _, {
          at: U.current,
          match: (V) => ae.isElement(V) && h.isBlock(t, V),
          mode: "lowest",
          voids: i,
          batchDirty: u
        }), G.insertNodes(t, j, {
          at: K.current,
          match: (V) => oe.isText(V) || h.isInline(t, V),
          mode: "highest",
          voids: i,
          batchDirty: u
        }), !n.at) {
          var te;
          if (j.length > 0 && K.current ? te = A.previous(K.current) : _.length > 0 && U.current ? te = A.previous(U.current) : J.current && (te = A.previous(J.current)), te) {
            var S = h.end(t, te);
            G.select(t, S);
          }
        }
        J.unref(), U.unref(), K.unref();
      }
    }
  });
}, ym = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: n = "anchor"
  } = r, {
    selection: a
  } = t;
  if (a) {
    if (n === "anchor")
      G.select(t, a.anchor);
    else if (n === "focus")
      G.select(t, a.focus);
    else if (n === "start") {
      var [i] = L.edges(a);
      G.select(t, i);
    } else if (n === "end") {
      var [, o] = L.edges(a);
      G.select(t, o);
    }
  } else
    return;
}, Dm = (e) => {
  var {
    selection: t
  } = e;
  t && e.apply({
    type: "set_selection",
    properties: t,
    newProperties: null
  });
}, Em = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = t, {
    distance: a = 1,
    unit: i = "character",
    reverse: o = !1
  } = r, {
    edge: u = null
  } = r;
  if (n) {
    u === "start" && (u = L.isBackward(n) ? "focus" : "anchor"), u === "end" && (u = L.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: s,
      focus: l
    } = n, c = {
      distance: a,
      unit: i,
      ignoreNonSelectable: !0
    }, d = {};
    if (u == null || u === "anchor") {
      var v = o ? h.before(t, s, c) : h.after(t, s, c);
      v && (d.anchor = v);
    }
    if (u == null || u === "focus") {
      var b = o ? h.before(t, l, c) : h.after(t, l, c);
      b && (d.focus = b);
    }
    G.setSelection(t, d);
  }
}, wm = (e, t) => {
  var {
    selection: r
  } = e;
  if (t = h.range(e, t), r) {
    G.setSelection(e, t);
    return;
  }
  if (!L.isRange(t))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(rt.stringify(t)));
  e.apply({
    type: "set_selection",
    properties: r,
    newProperties: t
  });
};
function ul(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function sl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ul(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ul(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Fm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a
  } = t, {
    edge: i = "both"
  } = n;
  if (a) {
    i === "start" && (i = L.isBackward(a) ? "focus" : "anchor"), i === "end" && (i = L.isBackward(a) ? "anchor" : "focus");
    var {
      anchor: o,
      focus: u
    } = a, s = i === "anchor" ? o : u;
    G.setSelection(t, {
      [i === "anchor" ? "anchor" : "focus"]: sl(sl({}, s), r)
    });
  }
}, Bm = (e, t) => {
  var {
    selection: r
  } = e, n = {}, a = {};
  if (r) {
    for (var i in t)
      (i === "anchor" && t.anchor != null && !be.equals(t.anchor, r.anchor) || i === "focus" && t.focus != null && !be.equals(t.focus, r.focus) || i !== "anchor" && i !== "focus" && t[i] !== r[i]) && (n[i] = r[i], a[i] = t[i]);
    Object.keys(n).length > 0 && e.apply({
      type: "set_selection",
      properties: n,
      newProperties: a
    });
  }
}, Am = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h.withoutNormalizing(t, () => {
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
    if (Q.isNode(r) && (r = [r]), r.length !== 0) {
      var [d] = r;
      if (s || (s = Pu(t), c !== !1 && (c = !0)), c == null && (c = !1), L.isRange(s))
        if (a || (s = h.unhangRange(t, s, {
          voids: i
        })), L.isCollapsed(s))
          s = s.anchor;
        else {
          var [, v] = L.edges(s), b = h.pointRef(t, v);
          G.delete(t, {
            at: s
          }), s = b.unref();
        }
      if (be.isPoint(s)) {
        l == null && (oe.isText(d) ? l = (T) => oe.isText(T) : t.isInline(d) ? l = (T) => oe.isText(T) || h.isInline(t, T) : l = (T) => ae.isElement(T) && h.isBlock(t, T));
        var [m] = h.nodes(t, {
          at: s.path,
          match: l,
          mode: o,
          voids: i
        });
        if (m) {
          var [, f] = m, g = h.pathRef(t, f), p = h.isEnd(t, s, f);
          G.splitNodes(t, {
            at: s,
            match: l,
            mode: o,
            voids: i
          });
          var C = g.unref();
          s = p ? A.next(C) : C;
        } else
          return;
      }
      var y = A.parent(s), E = s[s.length - 1];
      if (!(!i && h.void(t, {
        at: y
      }))) {
        if (u) {
          var F = [], B = A.levels(y);
          lp(t, () => {
            var T = function() {
              var N = y.concat(E);
              E++;
              var I = {
                type: "insert_node",
                path: N,
                node: _
              };
              t.apply(I), s = A.next(s), F.push(I), oe.isText ? B.push(...Array.from(Q.nodes(_), (R) => {
                var [, M] = R;
                return N.concat(M);
              })) : B.push(N);
            };
            for (var _ of r)
              T();
          }, () => {
            nf(t, B, (T) => {
              var _ = T;
              for (var j of F)
                if (A.operationCanTransformPath(j) && (_ = A.transform(_, j), !_))
                  return null;
              return _;
            });
          });
        } else
          for (var w of r) {
            var $ = y.concat(E);
            E++, t.apply({
              type: "insert_node",
              path: $,
              node: w
            }), s = A.next(s);
          }
        if (s = A.previous(s), c) {
          var P = h.end(t, s);
          P && G.select(t, P);
        }
      }
    }
  });
}, Sm = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(t, () => {
    var {
      at: n = t.selection,
      mode: a = "lowest",
      voids: i = !1
    } = r, {
      match: o
    } = r;
    if (o == null && (o = A.isPath(n) ? Ln(t, n) : (E) => ae.isElement(E) && h.isBlock(t, E)), !!n) {
      var u = h.nodes(t, {
        at: n,
        match: o,
        mode: a,
        voids: i
      }), s = Array.from(u, (E) => {
        var [, F] = E;
        return h.pathRef(t, F);
      });
      for (var l of s) {
        var c = l.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var d = h.node(t, A.parent(c)), [v, b] = d, m = c[c.length - 1], {
          length: f
        } = v.children;
        if (f === 1) {
          var g = A.next(b);
          G.moveNodes(t, {
            at: c,
            to: g,
            voids: i
          }), G.removeNodes(t, {
            at: b,
            voids: i
          });
        } else if (m === 0)
          G.moveNodes(t, {
            at: c,
            to: b,
            voids: i
          });
        else if (m === f - 1) {
          var p = A.next(b);
          G.moveNodes(t, {
            at: c,
            to: p,
            voids: i
          });
        } else {
          var C = A.next(c), y = A.next(b);
          G.splitNodes(t, {
            at: C,
            voids: i
          }), G.moveNodes(t, {
            at: c,
            to: y,
            voids: i
          });
        }
      }
    }
  });
}, Om = ["text"], xm = ["children"], af = (e, t) => {
  if (ae.isElement(t)) {
    var r = t;
    return h.isVoid(e, t) ? !0 : r.children.length === 1 ? af(e, r.children[0]) : !1;
  } else
    return !h.isEditor(t);
}, Pm = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(t, () => {
    var {
      match: n,
      at: a = t.selection
    } = r, {
      hanging: i = !1,
      voids: o = !1,
      mode: u = "lowest"
    } = r;
    if (a) {
      if (n == null)
        if (A.isPath(a)) {
          var [s] = h.parent(t, a);
          n = (T) => s.children.includes(T);
        } else
          n = (T) => ae.isElement(T) && h.isBlock(t, T);
      if (!i && L.isRange(a) && (a = h.unhangRange(t, a, {
        voids: o
      })), L.isRange(a))
        if (L.isCollapsed(a))
          a = a.anchor;
        else {
          var [, l] = L.edges(a), c = h.pointRef(t, l);
          G.delete(t, {
            at: a
          }), a = c.unref(), r.at == null && G.select(t, a);
        }
      var [d] = h.nodes(t, {
        at: a,
        match: n,
        voids: o,
        mode: u
      }), v = h.previous(t, {
        at: a,
        match: n,
        voids: o,
        mode: u
      });
      if (!(!d || !v)) {
        var [b, m] = d, [f, g] = v;
        if (!(m.length === 0 || g.length === 0)) {
          var p = A.next(g), C = A.common(m, g), y = A.isSibling(m, g), E = Array.from(h.levels(t, {
            at: m
          }), (T) => {
            var [_] = T;
            return _;
          }).slice(C.length).slice(0, -1), F = h.above(t, {
            at: m,
            mode: "highest",
            match: (T) => E.includes(T) && af(t, T)
          }), B = F && h.pathRef(t, F[1]), w, $;
          if (oe.isText(b) && oe.isText(f)) {
            var P = gr(b, Om);
            $ = f.text.length, w = P;
          } else if (ae.isElement(b) && ae.isElement(f)) {
            var P = gr(b, xm);
            $ = f.children.length, w = P;
          } else
            throw new Error("Cannot merge the node at path [".concat(m, "] with the previous sibling because it is not the same kind: ").concat(rt.stringify(b), " ").concat(rt.stringify(f)));
          y || G.moveNodes(t, {
            at: m,
            to: p,
            voids: o
          }), B && G.removeNodes(t, {
            at: B.current,
            voids: o
          }), ae.isElement(f) && h.isEmpty(t, f) || oe.isText(f) && f.text === "" && g[g.length - 1] !== 0 ? G.removeNodes(t, {
            at: g,
            voids: o
          }) : t.apply({
            type: "merge_node",
            path: p,
            position: $,
            properties: w
          }), B && B.unref();
        }
      }
    }
  });
}, Tm = (e, t) => {
  h.withoutNormalizing(e, () => {
    var {
      to: r,
      at: n = e.selection,
      mode: a = "lowest",
      voids: i = !1
    } = t, {
      match: o
    } = t;
    if (n) {
      o == null && (o = A.isPath(n) ? Ln(e, n) : (b) => ae.isElement(b) && h.isBlock(e, b));
      var u = h.pathRef(e, r), s = h.nodes(e, {
        at: n,
        match: o,
        mode: a,
        voids: i
      }), l = Array.from(s, (b) => {
        var [, m] = b;
        return h.pathRef(e, m);
      });
      for (var c of l) {
        var d = c.unref(), v = u.current;
        d.length !== 0 && e.apply({
          type: "move_node",
          path: d,
          newPath: v
        }), u.current && A.isSibling(v, d) && A.isAfter(v, d) && (u.current = A.next(u.current));
      }
      u.unref();
    }
  });
}, Rm = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(t, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: i = "lowest"
    } = r, {
      at: o = t.selection,
      match: u
    } = r;
    if (o) {
      u == null && (u = A.isPath(o) ? Ln(t, o) : (b) => ae.isElement(b) && h.isBlock(t, b)), !n && L.isRange(o) && (o = h.unhangRange(t, o, {
        voids: a
      }));
      var s = h.nodes(t, {
        at: o,
        match: u,
        mode: i,
        voids: a
      }), l = Array.from(s, (b) => {
        var [, m] = b;
        return h.pathRef(t, m);
      });
      for (var c of l) {
        var d = c.unref();
        if (d) {
          var [v] = h.node(t, d);
          t.apply({
            type: "remove_node",
            path: d,
            node: v
          });
        }
      }
    }
  });
}, $m = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h.withoutNormalizing(t, () => {
    var {
      match: a,
      at: i = t.selection,
      compare: o,
      merge: u
    } = n, {
      hanging: s = !1,
      mode: l = "lowest",
      split: c = !1,
      voids: d = !1
    } = n;
    if (i) {
      if (a == null && (a = A.isPath(i) ? Ln(t, i) : ($) => ae.isElement($) && h.isBlock(t, $)), !s && L.isRange(i) && (i = h.unhangRange(t, i, {
        voids: d
      })), c && L.isRange(i)) {
        if (L.isCollapsed(i) && h.leaf(t, i.anchor)[0].text.length > 0)
          return;
        var v = h.rangeRef(t, i, {
          affinity: "inward"
        }), [b, m] = L.edges(i), f = l === "lowest" ? "lowest" : "highest", g = h.isEnd(t, m, m.path);
        G.splitNodes(t, {
          at: m,
          match: a,
          mode: f,
          voids: d,
          always: !g
        });
        var p = h.isStart(t, b, b.path);
        G.splitNodes(t, {
          at: b,
          match: a,
          mode: f,
          voids: d,
          always: !p
        }), i = v.unref(), n.at == null && G.select(t, i);
      }
      o || (o = ($, P) => $ !== P);
      for (var [C, y] of h.nodes(t, {
        at: i,
        match: a,
        mode: l,
        voids: d
      })) {
        var E = {}, F = {};
        if (y.length !== 0) {
          var B = !1;
          for (var w in r)
            w === "children" || w === "text" || o(r[w], C[w]) && (B = !0, C.hasOwnProperty(w) && (E[w] = C[w]), u ? r[w] != null && (F[w] = u(C[w], r[w])) : r[w] != null && (F[w] = r[w]));
          B && t.apply({
            type: "set_node",
            path: y,
            properties: E,
            newProperties: F
          });
        }
      }
    }
  });
}, jm = (e, t) => {
  if (L.isCollapsed(t))
    return t.anchor;
  var [, r] = L.edges(t), n = h.pointRef(e, r);
  return G.delete(e, {
    at: t
  }), n.unref();
}, Nm = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(t, () => {
    var {
      mode: n = "lowest",
      voids: a = !1
    } = r, {
      match: i,
      at: o = t.selection,
      height: u = 0,
      always: s = !1
    } = r;
    if (i == null && (i = (H) => ae.isElement(H) && h.isBlock(t, H)), L.isRange(o) && (o = jm(t, o)), A.isPath(o)) {
      var l = o, c = h.point(t, l), [d] = h.parent(t, l);
      i = (H) => H === d, u = c.path.length - l.length + 1, o = c, s = !0;
    }
    if (o) {
      var v = h.pointRef(t, o, {
        affinity: "backward"
      }), b;
      try {
        var [m] = h.nodes(t, {
          at: o,
          match: i,
          mode: n,
          voids: a
        });
        if (!m)
          return;
        var f = h.void(t, {
          at: o,
          mode: "highest"
        }), g = 0;
        if (!a && f) {
          var [p, C] = f;
          if (ae.isElement(p) && t.isInline(p)) {
            var y = h.after(t, C);
            if (!y) {
              var E = {
                text: ""
              }, F = A.next(C);
              G.insertNodes(t, E, {
                at: F,
                voids: a
              }), y = h.point(t, F);
            }
            o = y, s = !0;
          }
          var B = o.path.length - C.length;
          u = B + 1, s = !0;
        }
        b = h.pointRef(t, o);
        var w = o.path.length - u, [, $] = m, P = o.path.slice(0, w), T = u === 0 ? o.offset : o.path[w] + g;
        for (var [_, j] of h.levels(t, {
          at: P,
          reverse: !0,
          voids: a
        })) {
          var N = !1;
          if (j.length < $.length || j.length === 0 || !a && ae.isElement(_) && h.isVoid(t, _))
            break;
          var I = v.current, R = h.isEnd(t, I, j);
          if (s || !v || !h.isEdge(t, I, j)) {
            N = !0;
            var M = Q.extractProps(_);
            t.apply({
              type: "split_node",
              path: j,
              position: T,
              properties: M
            });
          }
          T = j[j.length - 1] + (N || R ? 1 : 0);
        }
        if (r.at == null) {
          var O = b.current || h.end(t, []);
          G.select(t, O);
        }
      } finally {
        var k;
        v.unref(), (k = b) === null || k === void 0 || k.unref();
      }
    }
  });
}, Mm = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(r) || (r = [r]);
  var a = {};
  for (var i of r)
    a[i] = null;
  G.setNodes(t, a, n);
}, Im = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  h.withoutNormalizing(t, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: i = !1
    } = r, {
      at: o = t.selection,
      match: u
    } = r;
    if (o) {
      u == null && (u = A.isPath(o) ? Ln(t, o) : (b) => ae.isElement(b) && h.isBlock(t, b)), A.isPath(o) && (o = h.range(t, o));
      var s = L.isRange(o) ? h.rangeRef(t, o) : null, l = h.nodes(t, {
        at: o,
        match: u,
        mode: n,
        voids: i
      }), c = Array.from(
        l,
        (b) => {
          var [, m] = b;
          return h.pathRef(t, m);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), d = function() {
        var m = v.unref(), [f] = h.node(t, m), g = h.range(t, m);
        a && s && (g = L.intersection(s.current, g)), G.liftNodes(t, {
          at: g,
          match: (p) => ae.isAncestor(f) && f.children.includes(p),
          voids: i
        });
      };
      for (var v of c)
        d();
      s && s.unref();
    }
  });
};
function ll(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ll(Object(r), !0).forEach(function(n) {
      gt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ll(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var km = function(t, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  h.withoutNormalizing(t, () => {
    var {
      mode: a = "lowest",
      split: i = !1,
      voids: o = !1
    } = n, {
      match: u,
      at: s = t.selection
    } = n;
    if (s) {
      if (u == null && (A.isPath(s) ? u = Ln(t, s) : t.isInline(r) ? u = (g) => ae.isElement(g) && h.isInline(t, g) || oe.isText(g) : u = (g) => ae.isElement(g) && h.isBlock(t, g)), i && L.isRange(s)) {
        var [l, c] = L.edges(s), d = h.rangeRef(t, s, {
          affinity: "inward"
        });
        G.splitNodes(t, {
          at: c,
          match: u,
          voids: o
        }), G.splitNodes(t, {
          at: l,
          match: u,
          voids: o
        }), s = d.unref(), n.at == null && G.select(t, s);
      }
      var v = Array.from(h.nodes(t, {
        at: s,
        match: t.isInline(r) ? (g) => ae.isElement(g) && h.isBlock(t, g) : (g) => h.isEditor(g),
        mode: "lowest",
        voids: o
      })), b = function() {
        var p = L.isRange(s) ? L.intersection(s, h.range(t, f)) : s;
        if (!p)
          return 0;
        var C = Array.from(h.nodes(t, {
          at: p,
          match: u,
          mode: a,
          voids: o
        }));
        if (C.length > 0) {
          var [y] = C, E = C[C.length - 1], [, F] = y, [, B] = E;
          if (F.length === 0 && B.length === 0)
            return 0;
          var w = A.equals(F, B) ? A.parent(F) : A.common(F, B), $ = h.range(t, F, B), P = h.node(t, w), [T] = P, _ = w.length + 1, j = A.next(B.slice(0, _)), N = cl(cl({}, r), {}, {
            children: []
          });
          G.insertNodes(t, N, {
            at: j,
            voids: o
          }), G.moveNodes(t, {
            at: $,
            match: (I) => ae.isAncestor(T) && T.children.includes(I),
            to: j.concat(0),
            voids: o
          });
        }
      }, m;
      for (var [, f] of v)
        m = b();
    }
  });
}, Lm = () => {
  var e = {
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
      return cp(e, ...n);
    },
    // Editor
    addMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pp(e, ...n);
    },
    deleteBackward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Cp(e, ...n);
    },
    deleteForward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return yp(e, ...n);
    },
    deleteFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Dp(e, ...n);
    },
    getFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return dp(e, ...n);
    },
    insertBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Rp(e, ...n);
    },
    insertSoftBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jp(e, ...n);
    },
    insertFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Cm(e, ...n);
    },
    insertNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $p(e, ...n);
    },
    insertText: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Mp(e, ...n);
    },
    normalizeNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vp(e, ...n);
    },
    removeMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return dm(e, ...n);
    },
    getDirtyPaths: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return fp(e, ...n);
    },
    shouldNormalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return hp(e, ...n);
    },
    // Editor interface
    above: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gp(e, ...n);
    },
    after: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return mp(e, ...n);
    },
    before: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return bp(e, ...n);
    },
    collapse: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ym(e, ...n);
    },
    delete: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return bm(e, ...n);
    },
    deselect: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Dm(e, ...n);
    },
    edges: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ep(e, ...n);
    },
    elementReadOnly: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wp(e, ...n);
    },
    end: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Fp(e, ...n);
    },
    first: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Bp(e, ...n);
    },
    fragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ap(e, ...n);
    },
    getMarks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Kp(e, ...n);
    },
    hasBlocks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Op(e, ...n);
    },
    hasInlines: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xp(e, ...n);
    },
    hasPath: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Pp(e, ...n);
    },
    hasTexts: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Tp(e, ...n);
    },
    insertNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Am(e, ...n);
    },
    isBlock: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ip(e, ...n);
    },
    isEdge: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return kp(e, ...n);
    },
    isEmpty: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Lp(e, ...n);
    },
    isEnd: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _p(e, ...n);
    },
    isNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Vp(e, ...n);
    },
    isStart: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return zp(e, ...n);
    },
    last: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Wp(e, ...n);
    },
    leaf: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Hp(e, ...n);
    },
    levels: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return qp(e, ...n);
    },
    liftNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Sm(e, ...n);
    },
    mergeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Pm(e, ...n);
    },
    move: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Em(e, ...n);
    },
    moveNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Tm(e, ...n);
    },
    next: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Xp(e, ...n);
    },
    node: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Yp(e, ...n);
    },
    nodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Jp(e, ...n);
    },
    normalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Zp(e, ...n);
    },
    parent: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Qp(e, ...n);
    },
    path: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return rm(e, ...n);
    },
    pathRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return em(e, ...n);
    },
    pathRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return tm(e, ...n);
    },
    point: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return im(e, ...n);
    },
    pointRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return nm(e, ...n);
    },
    pointRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return am(e, ...n);
    },
    positions: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return om(e, ...n);
    },
    previous: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return um(e, ...n);
    },
    range: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return cm(e, ...n);
    },
    rangeRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return sm(e, ...n);
    },
    rangeRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return lm(e, ...n);
    },
    removeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Rm(e, ...n);
    },
    select: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wm(e, ...n);
    },
    setNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $m(e, ...n);
    },
    setNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vm(e, ...n);
    },
    setPoint: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Fm(e, ...n);
    },
    setSelection: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Bm(e, ...n);
    },
    splitNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Nm(e, ...n);
    },
    start: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return hm(e, ...n);
    },
    string: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gm(e, ...n);
    },
    unhangRange: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pm(e, ...n);
    },
    unsetNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Mm(e, ...n);
    },
    unwrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Im(e, ...n);
    },
    void: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Sp(e, ...n);
    },
    withoutNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return mm(e, ...n);
    },
    wrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return km(e, ...n);
    }
  };
  return e;
}, Zr = [], _m = function() {
  return Zr.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Vm = function() {
  return Zr.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, fl = "ResizeObserver loop completed with undelivered notifications.", zm = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: fl
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = fl), window.dispatchEvent(e);
}, sa;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(sa || (sa = {}));
var Qr = function(e) {
  return Object.freeze(e);
}, Wm = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Qr(this);
  }
  return e;
}(), of = function() {
  function e(t, r, n, a) {
    return this.x = t, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Qr(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, n = t.y, a = t.top, i = t.right, o = t.bottom, u = t.left, s = t.width, l = t.height;
    return { x: r, y: n, top: a, right: i, bottom: o, left: u, width: s, height: l };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), $u = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, uf = function(e) {
  if ($u(e)) {
    var t = e.getBBox(), r = t.width, n = t.height;
    return !r && !n;
  }
  var a = e, i = a.offsetWidth, o = a.offsetHeight;
  return !(i || o || e.getClientRects().length);
}, dl = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Hm = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
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
}, Qn = typeof window < "u" ? window : {}, Pa = /* @__PURE__ */ new WeakMap(), vl = /auto|scroll/, qm = /^tb|vertical/, Um = /msie|trident/i.test(Qn.navigator && Qn.navigator.userAgent), Kt = function(e) {
  return parseFloat(e || "0");
}, On = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Wm((r ? t : e) || 0, (r ? e : t) || 0);
}, hl = Qr({
  devicePixelContentBoxSize: On(),
  borderBoxSize: On(),
  contentBoxSize: On(),
  contentRect: new of(0, 0, 0, 0)
}), sf = function(e, t) {
  if (t === void 0 && (t = !1), Pa.has(e) && !t)
    return Pa.get(e);
  if (uf(e))
    return Pa.set(e, hl), hl;
  var r = getComputedStyle(e), n = $u(e) && e.ownerSVGElement && e.getBBox(), a = !Um && r.boxSizing === "border-box", i = qm.test(r.writingMode || ""), o = !n && vl.test(r.overflowY || ""), u = !n && vl.test(r.overflowX || ""), s = n ? 0 : Kt(r.paddingTop), l = n ? 0 : Kt(r.paddingRight), c = n ? 0 : Kt(r.paddingBottom), d = n ? 0 : Kt(r.paddingLeft), v = n ? 0 : Kt(r.borderTopWidth), b = n ? 0 : Kt(r.borderRightWidth), m = n ? 0 : Kt(r.borderBottomWidth), f = n ? 0 : Kt(r.borderLeftWidth), g = d + l, p = s + c, C = f + b, y = v + m, E = u ? e.offsetHeight - y - e.clientHeight : 0, F = o ? e.offsetWidth - C - e.clientWidth : 0, B = a ? g + C : 0, w = a ? p + y : 0, $ = n ? n.width : Kt(r.width) - B - F, P = n ? n.height : Kt(r.height) - w - E, T = $ + g + F + C, _ = P + p + E + y, j = Qr({
    devicePixelContentBoxSize: On(Math.round($ * devicePixelRatio), Math.round(P * devicePixelRatio), i),
    borderBoxSize: On(T, _, i),
    contentBoxSize: On($, P, i),
    contentRect: new of(d, s, $, P)
  });
  return Pa.set(e, j), j;
}, lf = function(e, t, r) {
  var n = sf(e, r), a = n.borderBoxSize, i = n.contentBoxSize, o = n.devicePixelContentBoxSize;
  switch (t) {
    case sa.DEVICE_PIXEL_CONTENT_BOX:
      return o;
    case sa.BORDER_BOX:
      return a;
    default:
      return i;
  }
}, Gm = /* @__PURE__ */ function() {
  function e(t) {
    var r = sf(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Qr([r.borderBoxSize]), this.contentBoxSize = Qr([r.contentBoxSize]), this.devicePixelContentBoxSize = Qr([r.devicePixelContentBoxSize]);
  }
  return e;
}(), cf = function(e) {
  if (uf(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, Km = function() {
  var e = 1 / 0, t = [];
  Zr.forEach(function(o) {
    if (o.activeTargets.length !== 0) {
      var u = [];
      o.activeTargets.forEach(function(l) {
        var c = new Gm(l.target), d = cf(l.target);
        u.push(c), l.lastReportedSize = lf(l.target, l.observedBox), d < e && (e = d);
      }), t.push(function() {
        o.callback.call(o.observer, u, o.observer);
      }), o.activeTargets.splice(0, o.activeTargets.length);
    }
  });
  for (var r = 0, n = t; r < n.length; r++) {
    var a = n[r];
    a();
  }
  return e;
}, gl = function(e) {
  Zr.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (cf(a.target) > e ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, Xm = function() {
  var e = 0;
  for (gl(e); _m(); )
    e = Km(), gl(e);
  return Vm() && zm(), e > 0;
}, Ki, ff = [], Ym = function() {
  return ff.splice(0).forEach(function(e) {
    return e();
  });
}, Jm = function(e) {
  if (!Ki) {
    var t = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Ym();
    }).observe(r, n), Ki = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  ff.push(e), Ki();
}, Zm = function(e) {
  Jm(function() {
    requestAnimationFrame(e);
  });
}, Ka = 0, Qm = function() {
  return !!Ka;
}, e0 = 250, t0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, pl = [
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
], ml = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Xi = !1, r0 = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = e0), !Xi) {
      Xi = !0;
      var n = ml(t);
      Zm(function() {
        var a = !1;
        try {
          a = Xm();
        } finally {
          if (Xi = !1, t = n - ml(), !Qm())
            return;
          a ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, t0);
    };
    document.body ? r() : Qn.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), pl.forEach(function(r) {
      return Qn.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), pl.forEach(function(r) {
      return Qn.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Po = new r0(), bl = function(e) {
  !Ka && e > 0 && Po.start(), Ka += e, !Ka && Po.stop();
}, n0 = function(e) {
  return !$u(e) && !Hm(e) && getComputedStyle(e).display === "inline";
}, a0 = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || sa.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = lf(this.target, this.observedBox, !0);
    return n0(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), i0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Ta = /* @__PURE__ */ new WeakMap(), Cl = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Ra = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var n = new i0(t, r);
    Ta.set(t, n);
  }, e.observe = function(t, r, n) {
    var a = Ta.get(t), i = a.observationTargets.length === 0;
    Cl(a.observationTargets, r) < 0 && (i && Zr.push(a), a.observationTargets.push(new a0(r, n && n.box)), bl(1), Po.schedule());
  }, e.unobserve = function(t, r) {
    var n = Ta.get(t), a = Cl(n.observationTargets, r), i = n.observationTargets.length === 1;
    a >= 0 && (i && Zr.splice(Zr.indexOf(n), 1), n.observationTargets.splice(a, 1), bl(-1));
  }, e.disconnect = function(t) {
    var r = this, n = Ta.get(t);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(t, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, e;
}(), o0 = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ra.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!dl(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ra.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!dl(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ra.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Ra.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}(), Dr = {};
Object.defineProperty(Dr, "__esModule", {
  value: !0
});
var u0 = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), Yi = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, df = {
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
  mod: u0 ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, ju = {
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
for (var $a = 1; $a < 20; $a++)
  ju["f" + $a] = 111 + $a;
function Bi(e, t, r) {
  t && !("byKey" in t) && (r = t, t = null), Array.isArray(e) || (e = [e]);
  var n = e.map(function(o) {
    return vf(o, t);
  }), a = function(u) {
    return n.some(function(s) {
      return hf(s, u);
    });
  }, i = r == null ? a : a(r);
  return i;
}
function s0(e, t) {
  return Bi(e, t);
}
function l0(e, t) {
  return Bi(e, { byKey: !0 }, t);
}
function vf(e, t) {
  var r = t && t.byKey, n = {};
  e = e.replace("++", "+add");
  var a = e.split("+"), i = a.length;
  for (var o in Yi)
    n[Yi[o]] = !1;
  var u = !0, s = !1, l = void 0;
  try {
    for (var c = a[Symbol.iterator](), d; !(u = (d = c.next()).done); u = !0) {
      var v = d.value, b = v.endsWith("?") && v.length > 1;
      b && (v = v.slice(0, -1));
      var m = Nu(v), f = Yi[m];
      if (v.length > 1 && !f && !df[v] && !ju[m])
        throw new TypeError('Unknown modifier: "' + v + '"');
      (i === 1 || !f) && (r ? n.key = m : n.which = gf(v)), f && (n[f] = b ? null : !0);
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
function hf(e, t) {
  for (var r in e) {
    var n = e[r], a = void 0;
    if (n != null && (r === "key" && t.key != null ? a = t.key.toLowerCase() : r === "which" ? a = n === 91 && t.which === 93 ? 91 : t.which : a = t[r], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function gf(e) {
  e = Nu(e);
  var t = ju[e] || e.toUpperCase().charCodeAt(0);
  return t;
}
function Nu(e) {
  return e = e.toLowerCase(), e = df[e] || e, e;
}
Dr.default = Bi;
var Ji = Dr.isHotkey = Bi;
Dr.isCodeHotkey = s0;
Dr.isKeyHotkey = l0;
Dr.parseHotkey = vf;
Dr.compareHotkey = hf;
Dr.toKeyCode = gf;
Dr.toKeyName = Nu;
function c0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function Rn(e, t) {
  if (e == null)
    return {};
  var r = c0(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function la(e) {
  "@babel/helpers - typeof";
  return la = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, la(e);
}
function f0(e, t) {
  if (la(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (la(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function d0(e) {
  var t = f0(e, "string");
  return la(t) === "symbol" ? t : String(t);
}
function Rt(e, t, r) {
  return t = d0(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var Mu = /* @__PURE__ */ rr(null), Ht = () => {
  var e = st(Mu);
  if (!e)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return e;
}, pf = parseInt(re.version.split(".")[0], 10), v0 = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, yl = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), dt = typeof navigator < "u" && /Android/.test(navigator.userAgent), wn = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Yn = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), h0 = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), mf = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), g0 = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), p0 = dt && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), m0 = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), b0 = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), C0 = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), Xa = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Br = (!g0 || !p0) && !h0 && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", Iu = /* @__PURE__ */ new WeakMap(), ku = /* @__PURE__ */ new WeakMap(), bf = /* @__PURE__ */ new WeakMap(), Ya = /* @__PURE__ */ new WeakMap(), To = /* @__PURE__ */ new WeakMap(), ca = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Ro = /* @__PURE__ */ new WeakMap(), Tr = /* @__PURE__ */ new WeakMap(), Kr = /* @__PURE__ */ new WeakMap(), ea = /* @__PURE__ */ new WeakMap(), $o = /* @__PURE__ */ new WeakMap(), Lu = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), vr = /* @__PURE__ */ new WeakMap(), pt = /* @__PURE__ */ new WeakMap(), Or = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), Cf = /* @__PURE__ */ new WeakMap(), $n = Symbol("placeholder"), yf = Symbol("mark-placeholder"), y0 = globalThis.Text, _u = (e) => e && e.ownerDocument && e.ownerDocument.defaultView || null, D0 = (e) => jr(e) && e.nodeType === 8, Tt = (e) => jr(e) && e.nodeType === 1, jr = (e) => {
  var t = _u(e);
  return !!t && e instanceof t.Node;
}, jo = (e) => {
  var t = e && e.anchorNode && _u(e.anchorNode);
  return !!t && e instanceof t.Selection;
}, Df = (e) => jr(e) && e.nodeType === 3, E0 = (e) => e.clipboardData && e.clipboardData.getData("text/plain") !== "" && e.clipboardData.types.length === 1, w0 = (e) => {
  var [t, r] = e;
  if (Tt(t) && t.childNodes.length) {
    var n = r === t.childNodes.length, a = n ? r - 1 : r;
    for ([t, a] = Ef(t, a, n ? "backward" : "forward"), n = a < r; Tt(t) && t.childNodes.length; ) {
      var i = n ? t.childNodes.length - 1 : 0;
      t = B0(t, i, n ? "backward" : "forward");
    }
    r = n && t.textContent != null ? t.textContent.length : 0;
  }
  return [t, r];
}, F0 = (e) => {
  for (var t = e && e.parentNode; t; ) {
    if (t.toString() === "[object ShadowRoot]")
      return !0;
    t = t.parentNode;
  }
  return !1;
}, Ef = (e, t, r) => {
  for (var {
    childNodes: n
  } = e, a = n[t], i = t, o = !1, u = !1; (D0(a) || Tt(a) && a.childNodes.length === 0 || Tt(a) && a.getAttribute("contenteditable") === "false") && !(o && u); ) {
    if (i >= n.length) {
      o = !0, i = t - 1, r = "backward";
      continue;
    }
    if (i < 0) {
      u = !0, i = t + 1, r = "forward";
      continue;
    }
    a = n[i], t = i, i += r === "forward" ? 1 : -1;
  }
  return [a, t];
}, B0 = (e, t, r) => {
  var [n] = Ef(e, t, r);
  return n;
}, wf = (e) => {
  var t = "";
  if (Df(e) && e.nodeValue)
    return e.nodeValue;
  if (Tt(e)) {
    for (var r of Array.from(e.childNodes))
      t += wf(r);
    var n = getComputedStyle(e).getPropertyValue("display");
    (n === "block" || n === "list" || e.tagName === "BR") && (t += `
`);
  }
  return t;
}, A0 = /data-slate-fragment="(.+?)"/m, S0 = (e) => {
  var t = e.getData("text/html"), [, r] = t.match(A0) || [];
  return r;
}, Vu = (e, t, r) => {
  var {
    target: n
  } = t;
  if (Tt(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = q.getWindow(e);
  if (a.contains(n))
    return q.hasDOMNode(e, n, {
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
  return !i || i === t ? !1 : Vu(e, i, r);
}, O0 = 0;
class x0 {
  constructor() {
    Rt(this, "id", void 0), this.id = "".concat(O0++);
  }
}
var q = {
  androidPendingDiffs: (e) => pt.get(e),
  androidScheduleFlush: (e) => {
    var t;
    (t = Lu.get(e)) === null || t === void 0 || t();
  },
  blur: (e) => {
    var t = q.toDOMNode(e, e), r = q.findDocumentOrShadowRoot(e);
    Tr.set(e, !1), r.activeElement === t && t.blur();
  },
  deselect: (e) => {
    var {
      selection: t
    } = e, r = q.findDocumentOrShadowRoot(e), n = r.getSelection();
    n && n.rangeCount > 0 && n.removeAllRanges(), t && G.deselect(e);
  },
  findDocumentOrShadowRoot: (e) => {
    var t = q.toDOMNode(e, e), r = t.getRootNode();
    return (r instanceof Document || r instanceof ShadowRoot) && r.getSelection != null ? r : t.ownerDocument;
  },
  findEventRange: (e, t) => {
    "nativeEvent" in t && (t = t.nativeEvent);
    var {
      clientX: r,
      clientY: n,
      target: a
    } = t;
    if (r == null || n == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var i = q.toSlateNode(e, t.target), o = q.findPath(e, i);
    if (ae.isElement(i) && h.isVoid(e, i)) {
      var u = a.getBoundingClientRect(), s = e.isInline(i) ? r - u.left < u.left + u.width - r : n - u.top < u.top + u.height - n, l = h.point(e, o, {
        edge: s ? "start" : "end"
      }), c = s ? h.before(e, l) : h.after(e, l);
      if (c) {
        var d = h.range(e, c);
        return d;
      }
    }
    var v, {
      document: b
    } = q.getWindow(e);
    if (b.caretRangeFromPoint)
      v = b.caretRangeFromPoint(r, n);
    else {
      var m = b.caretPositionFromPoint(r, n);
      m && (v = b.createRange(), v.setStart(m.offsetNode, m.offset), v.setEnd(m.offsetNode, m.offset));
    }
    if (!v)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
    var f = q.toSlateRange(e, v, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return f;
  },
  findKey: (e, t) => {
    var r = fi.get(t);
    return r || (r = new x0(), fi.set(t, r)), r;
  },
  findPath: (e, t) => {
    for (var r = [], n = t; ; ) {
      var a = ku.get(n);
      if (a == null) {
        if (h.isEditor(n))
          return r;
        break;
      }
      var i = Iu.get(n);
      if (i == null)
        break;
      r.unshift(i), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(rt.stringify(t)));
  },
  focus: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!Tr.get(t)) {
      if (r.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (t.operations.length > 0) {
        setTimeout(() => {
          q.focus(t, {
            retries: r.retries - 1
          });
        }, 10);
        return;
      }
      var n = q.toDOMNode(t, t), a = q.findDocumentOrShadowRoot(t);
      if (a.activeElement !== n) {
        if (t.selection && a instanceof Document) {
          var i = a.getSelection(), o = q.toDOMRange(t, t.selection);
          i == null || i.removeAllRanges(), i == null || i.addRange(o);
        }
        t.selection || (G.select(t, h.start(t, [])), t.onChange()), Tr.set(t, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (e) => {
    var t = bf.get(e);
    if (!t)
      throw new Error("Unable to find a host window element for this editor");
    return t;
  },
  hasDOMNode: function(t, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, i = q.toDOMNode(t, t), o;
    try {
      o = Tt(r) ? r : r.parentElement;
    } catch (u) {
      if (u instanceof Error && !u.message.includes('Permission denied to access property "nodeType"'))
        throw u;
    }
    return o ? o.closest("[data-slate-editor]") === i && (!a || o.isContentEditable ? !0 : typeof o.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    o.closest('[contenteditable="false"]') === i || !!o.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (e, t) => jr(t) && q.hasDOMNode(e, t, {
    editable: !0
  }),
  hasRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t;
    return h.hasPath(e, r.path) && h.hasPath(e, n.path);
  },
  hasSelectableTarget: (e, t) => q.hasEditableTarget(e, t) || q.isTargetInsideNonReadonlyVoid(e, t),
  hasTarget: (e, t) => jr(t) && q.hasDOMNode(e, t),
  insertData: (e, t) => {
    e.insertData(t);
  },
  insertFragmentData: (e, t) => e.insertFragmentData(t),
  insertTextData: (e, t) => e.insertTextData(t),
  isComposing: (e) => !!Kr.get(e),
  isFocused: (e) => !!Tr.get(e),
  isReadOnly: (e) => !!Ro.get(e),
  isTargetInsideNonReadonlyVoid: (e, t) => {
    if (Ro.get(e))
      return !1;
    var r = q.hasTarget(e, t) && q.toSlateNode(e, t);
    return ae.isElement(r) && h.isVoid(e, r);
  },
  setFragmentData: (e, t, r) => e.setFragmentData(t, r),
  toDOMNode: (e, t) => {
    var r = Ai.get(e), n = h.isEditor(t) ? Ya.get(e) : r == null ? void 0 : r.get(q.findKey(e, t));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(rt.stringify(t)));
    return n;
  },
  toDOMPoint: (e, t) => {
    var [r] = h.node(e, t.path), n = q.toDOMNode(e, r), a;
    h.void(e, {
      at: t
    }) && (t = {
      path: t.path,
      offset: 0
    });
    for (var i = "[data-slate-string], [data-slate-zero-width]", o = Array.from(n.querySelectorAll(i)), u = 0, s = 0; s < o.length; s++) {
      var l = o[s], c = l.childNodes[0];
      if (!(c == null || c.textContent == null)) {
        var {
          length: d
        } = c.textContent, v = l.getAttribute("data-slate-length"), b = v == null ? d : parseInt(v, 10), m = u + b, f = o[s + 1];
        if (t.offset === m && f !== null && f !== void 0 && f.hasAttribute("data-slate-mark-placeholder")) {
          var g, p = f.childNodes[0];
          a = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            p instanceof y0 ? p : f,
            (g = f.textContent) !== null && g !== void 0 && g.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (t.offset <= m) {
          var C = Math.min(d, Math.max(0, t.offset - u));
          a = [c, C];
          break;
        }
        u = m;
      }
    }
    if (!a)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(rt.stringify(t)));
    return a;
  },
  toDOMRange: (e, t) => {
    var {
      anchor: r,
      focus: n
    } = t, a = L.isBackward(t), i = q.toDOMPoint(e, r), o = L.isCollapsed(t) ? i : q.toDOMPoint(e, n), u = q.getWindow(e), s = u.document.createRange(), [l, c] = a ? o : i, [d, v] = a ? i : o, b = Tt(l) ? l : l.parentElement, m = !!b.getAttribute("data-slate-zero-width"), f = Tt(d) ? d : d.parentElement, g = !!f.getAttribute("data-slate-zero-width");
    return s.setStart(l, m ? 1 : c), s.setEnd(d, g ? 1 : v), s;
  },
  toSlateNode: (e, t) => {
    var r = Tt(t) ? t : t.parentElement;
    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
    var n = r ? ca.get(r) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
    return n;
  },
  toSlatePoint: (e, t, r) => {
    var {
      exactMatch: n,
      suppressThrow: a
    } = r, [i, o] = n ? t : w0(t), u = i.parentNode, s = null, l = 0;
    if (u) {
      var c, d, v = q.toDOMNode(e, e), b = u.closest('[data-slate-void="true"]'), m = b && v.contains(b) ? b : null, f = u.closest("[data-slate-leaf]"), g = null;
      if (f) {
        if (s = f.closest('[data-slate-node="text"]'), s) {
          var p = q.getWindow(e), C = p.document.createRange();
          C.setStart(s, 0), C.setEnd(i, o);
          var y = C.cloneContents(), E = [...Array.prototype.slice.call(y.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(y.querySelectorAll("[contenteditable=false]"))];
          E.forEach((I) => {
            if (dt && !n && I.hasAttribute("data-slate-zero-width") && I.textContent.length > 0 && I.textContext !== "\uFEFF") {
              I.textContent.startsWith("\uFEFF") && (I.textContent = I.textContent.slice(1));
              return;
            }
            I.parentNode.removeChild(I);
          }), l = y.textContent.length, g = s;
        }
      } else if (m) {
        for (var F = m.querySelectorAll("[data-slate-leaf]"), B = 0; B < F.length; B++) {
          var w = F[B];
          if (q.hasDOMNode(e, w)) {
            f = w;
            break;
          }
        }
        f ? (s = f.closest('[data-slate-node="text"]'), g = f, l = g.textContent.length, g.querySelectorAll("[data-slate-zero-width]").forEach((I) => {
          l -= I.textContent.length;
        })) : l = 1;
      }
      g && l === g.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      dt && g.getAttribute("data-slate-zero-width") === "z" && (c = g.textContent) !== null && c !== void 0 && c.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (u.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      wn && (d = g.textContent) !== null && d !== void 0 && d.endsWith(`

`)) && l--;
    }
    if (dt && !s && !n) {
      var $ = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
      if ($ && q.hasDOMNode(e, $, {
        editable: !0
      })) {
        var P = q.toSlateNode(e, $), {
          path: T,
          offset: _
        } = h.start(e, q.findPath(e, P));
        return $.querySelector("[data-slate-leaf]") || (_ = o), {
          path: T,
          offset: _
        };
      }
    }
    if (!s) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(t));
    }
    var j = q.toSlateNode(e, s), N = q.findPath(e, j);
    return {
      path: N,
      offset: l
    };
  },
  toSlateRange: (e, t, r) => {
    var n, {
      exactMatch: a,
      suppressThrow: i
    } = r, o = jo(t) ? t.anchorNode : t.startContainer, u, s, l, c, d;
    if (o)
      if (jo(t)) {
        if (wn && t.rangeCount > 1) {
          l = t.focusNode;
          var v = t.getRangeAt(0), b = t.getRangeAt(t.rangeCount - 1);
          if (l instanceof HTMLTableRowElement && v.startContainer instanceof HTMLTableRowElement && b.startContainer instanceof HTMLTableRowElement) {
            let B = function(w) {
              return w.childElementCount > 0 ? B(w.children[0]) : w;
            };
            var m = v.startContainer, f = b.startContainer, g = B(m.children[v.startOffset]), p = B(f.children[b.startOffset]);
            c = 0, p.childNodes.length > 0 ? u = p.childNodes[0] : u = p, g.childNodes.length > 0 ? l = g.childNodes[0] : l = g, p instanceof HTMLElement ? s = p.innerHTML.length : s = 0;
          } else
            v.startContainer === l ? (u = b.endContainer, s = b.endOffset, c = v.startOffset) : (u = v.startContainer, s = v.endOffset, c = b.startOffset);
        } else
          u = t.anchorNode, s = t.anchorOffset, l = t.focusNode, c = t.focusOffset;
        mf && F0(u) || wn ? d = t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : d = t.isCollapsed;
      } else
        u = t.startContainer, s = t.startOffset, l = t.endContainer, c = t.endOffset, d = t.collapsed;
    if (u == null || l == null || s == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(t));
    if (wn && (n = l.textContent) !== null && n !== void 0 && n.endsWith(`

`) && c === l.textContent.length && c--, "getAttribute" in l && l.getAttribute("contenteditable") === "false" && l.getAttribute("data-slate-void") !== "true") {
      var C;
      l = u, c = ((C = u.textContent) === null || C === void 0 ? void 0 : C.length) || 0;
    }
    var y = q.toSlatePoint(e, [u, s], {
      exactMatch: a,
      suppressThrow: i
    });
    if (!y)
      return null;
    var E = d ? y : q.toSlatePoint(e, [l, c], {
      exactMatch: a,
      suppressThrow: i
    });
    if (!E)
      return null;
    var F = {
      anchor: y,
      focus: E
    };
    return L.isExpanded(F) && L.isForward(F) && Tt(l) && h.void(e, {
      at: F.focus,
      mode: "highest"
    }) && (F = h.unhangRange(e, F, {
      voids: !0
    })), F;
  }
};
function P0(e, t) {
  var {
    path: r,
    diff: n
  } = t;
  if (!h.hasPath(e, r))
    return !1;
  var a = Q.get(e, r);
  if (!oe.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var i = A.next(r);
  if (!h.hasPath(e, i))
    return !1;
  var o = Q.get(e, i);
  return oe.isText(o) && o.text.startsWith(n.text);
}
function Ff(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  return r.reduce((a, i) => a.slice(0, i.start) + i.text + a.slice(i.end), e);
}
function T0(e, t) {
  for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
    if (e.charAt(n) !== t.charAt(n))
      return n;
  return r;
}
function R0(e, t, r) {
  for (var n = Math.min(e.length, t.length, r), a = 0; a < n; a++)
    if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1))
      return a;
  return n;
}
function Bf(e, t) {
  var {
    start: r,
    end: n,
    text: a
  } = t, i = e.slice(r, n), o = T0(i, a), u = Math.min(i.length - o, a.length - o), s = R0(i, a, u), l = {
    start: r + o,
    end: n - s,
    text: a.slice(o, a.length - s)
  };
  return l.start === l.end && l.text.length === 0 ? null : l;
}
function $0(e, t, r) {
  var n = Math.min(t.start, r.start), a = Math.max(0, Math.min(t.start + t.text.length, r.end) - r.start), i = Ff(e, t, r), o = Math.max(r.start + r.text.length, t.start + t.text.length + (t.start + t.text.length > r.start ? r.text.length : 0) - a), u = i.slice(n, o), s = Math.max(t.end, r.end - t.text.length + (t.end - t.start));
  return Bf(e, {
    start: n,
    end: s,
    text: u
  });
}
function j0(e) {
  var {
    path: t,
    diff: r
  } = e;
  return {
    anchor: {
      path: t,
      offset: r.start
    },
    focus: {
      path: t,
      offset: r.end
    }
  };
}
function No(e, t) {
  var {
    path: r,
    offset: n
  } = t;
  if (!h.hasPath(e, r))
    return null;
  var a = Q.get(e, r);
  if (!oe.isText(a))
    return null;
  var i = h.above(e, {
    match: (u) => ae.isElement(u) && h.isBlock(e, u),
    at: r
  });
  if (!i)
    return null;
  for (; n > a.text.length; ) {
    var o = h.next(e, {
      at: r,
      match: oe.isText
    });
    if (!o || !A.isDescendant(o[1], i[1]))
      return null;
    n -= a.text.length, a = o[0], r = o[1];
  }
  return {
    path: r,
    offset: n
  };
}
function Dl(e, t) {
  var r = No(e, t.anchor);
  if (!r)
    return null;
  if (L.isCollapsed(t))
    return {
      anchor: r,
      focus: r
    };
  var n = No(e, t.focus);
  return n ? {
    anchor: r,
    focus: n
  } : null;
}
function Mo(e, t, r) {
  var n = pt.get(e), a = n == null ? void 0 : n.find((c) => {
    var {
      path: d
    } = c;
    return A.equals(d, t.path);
  });
  if (!a || t.offset <= a.diff.start)
    return be.transform(t, r, {
      affinity: "backward"
    });
  var {
    diff: i
  } = a;
  if (t.offset <= i.start + i.text.length) {
    var o = {
      path: t.path,
      offset: i.start
    }, u = be.transform(o, r, {
      affinity: "backward"
    });
    return u ? {
      path: u.path,
      offset: u.offset + t.offset - i.start
    } : null;
  }
  var s = {
    path: t.path,
    offset: t.offset - i.text.length + i.end - i.start
  }, l = be.transform(s, r, {
    affinity: "backward"
  });
  return l ? r.type === "split_node" && A.equals(r.path, t.path) && s.offset < r.position && i.start < r.position ? l : {
    path: l.path,
    offset: l.offset + i.text.length - i.end + i.start
  } : null;
}
function El(e, t, r) {
  var n = Mo(e, t.anchor, r);
  if (!n)
    return null;
  if (L.isCollapsed(t))
    return {
      anchor: n,
      focus: n
    };
  var a = Mo(e, t.focus, r);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function N0(e, t) {
  var {
    path: r,
    diff: n,
    id: a
  } = e;
  switch (t.type) {
    case "insert_text":
      return !A.equals(t.path, r) || t.offset >= n.end ? e : t.offset <= n.start ? {
        diff: {
          start: t.text.length + n.start,
          end: t.text.length + n.end,
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start,
          end: n.end + t.text.length,
          text: n.text
        },
        id: a,
        path: r
      };
    case "remove_text":
      return !A.equals(t.path, r) || t.offset >= n.end ? e : t.offset + t.text.length <= n.start ? {
        diff: {
          start: n.start - t.text.length,
          end: n.end - t.text.length,
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start,
          end: n.end - t.text.length,
          text: n.text
        },
        id: a,
        path: r
      };
    case "split_node":
      return !A.equals(t.path, r) || t.position >= n.end ? {
        diff: n,
        id: a,
        path: A.transform(r, t, {
          affinity: "backward"
        })
      } : t.position > n.start ? {
        diff: {
          start: n.start,
          end: Math.min(t.position, n.end),
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start - t.position,
          end: n.end - t.position,
          text: n.text
        },
        id: a,
        path: A.transform(r, t, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return A.equals(t.path, r) ? {
        diff: {
          start: n.start + t.position,
          end: n.end + t.position,
          text: n.text
        },
        id: a,
        path: A.transform(r, t)
      } : {
        diff: n,
        id: a,
        path: A.transform(r, t)
      };
  }
  var i = A.transform(r, t);
  return i ? {
    diff: n,
    path: i,
    id: a
  } : null;
}
function wl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ja(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wl(Object(r), !0).forEach(function(n) {
      Rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : wl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var M0 = 25, I0 = 200, k0 = function() {
}, L0 = (e) => (e == null ? void 0 : e.constructor.name) === "DataTransfer";
function _0(e) {
  var {
    editor: t,
    scheduleOnDOMSelectionChange: r,
    onDOMSelectionChange: n
  } = e, a = !1, i = null, o = null, u = null, s = 0, l = !1, c = () => {
    var j = xr.get(t);
    if (xr.delete(t), j) {
      var {
        selection: N
      } = t, I = Dl(t, j);
      I && (!N || !L.equals(I, N)) && G.select(t, I);
    }
  }, d = () => {
    var j = Or.get(t);
    if (Or.delete(t), !!j) {
      if (j.at) {
        var N = be.isPoint(j.at) ? No(t, j.at) : Dl(t, j.at);
        if (!N)
          return;
        var I = h.range(t, N);
        (!t.selection || !L.equals(t.selection, I)) && G.select(t, N);
      }
      j.run();
    }
  }, v = () => {
    if (o && (clearTimeout(o), o = null), u && (clearTimeout(u), u = null), !E() && !y()) {
      c();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), y() && (a = "action");
    var j = t.selection && h.rangeRef(t, t.selection, {
      affinity: "forward"
    });
    vr.set(t, t.marks), k0("flush", Or.get(t), pt.get(t));
    for (var N = E(), I; I = (R = pt.get(t)) === null || R === void 0 ? void 0 : R[0]; ) {
      var R, M, O = _t.get(t);
      O !== void 0 && (_t.delete(t), t.marks = O), O && l === !1 && (l = null);
      var k = j0(I);
      (!t.selection || !L.equals(t.selection, k)) && G.select(t, k), I.diff.text ? h.insertText(t, I.diff.text) : h.deleteFragment(t), pt.set(t, (M = pt.get(t)) === null || M === void 0 ? void 0 : M.filter((K) => {
        var {
          id: J
        } = K;
        return J !== I.id;
      })), P0(t, I) || (N = !1, Or.delete(t), vr.delete(t), a = "action", xr.delete(t), r.cancel(), n.cancel(), j == null || j.unref());
    }
    var H = j == null ? void 0 : j.unref();
    if (H && !xr.get(t) && (!t.selection || !L.equals(H, t.selection)) && G.select(t, H), y()) {
      d();
      return;
    }
    N && r(), r.flush(), n.flush(), c();
    var U = vr.get(t);
    vr.delete(t), U !== void 0 && (t.marks = U, t.onChange());
  }, b = (j) => {
    i && clearTimeout(i), i = setTimeout(() => {
      Kr.set(t, !1), v();
    }, M0);
  }, m = (j) => {
    Kr.set(t, !0), i && (clearTimeout(i), i = null);
  }, f = function() {
    var N = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, I = To.get(t);
    if (I) {
      if (E() || N) {
        I.style.display = "none";
        return;
      }
      I.style.removeProperty("display");
    }
  }, g = (j, N) => {
    var I, R = (I = pt.get(t)) !== null && I !== void 0 ? I : [];
    pt.set(t, R);
    var M = Q.leaf(t, j), O = R.findIndex((U) => A.equals(U.path, j));
    if (O < 0) {
      var k = Bf(M.text, N);
      k && R.push({
        path: j,
        diff: N,
        id: s++
      }), f();
      return;
    }
    var H = $0(M.text, R[O].diff, N);
    if (!H) {
      R.splice(O, 1), f();
      return;
    }
    R[O] = ja(ja({}, R[O]), {}, {
      diff: H
    });
  }, p = function(N) {
    var {
      at: I
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    l = !1, xr.delete(t), r.cancel(), n.cancel(), y() && v(), Or.set(t, {
      at: I,
      run: N
    }), u = setTimeout(v);
  }, C = (j) => {
    var N;
    o && (clearTimeout(o), o = null);
    var {
      inputType: I
    } = j, R = null, M = j.dataTransfer || j.data || void 0;
    l !== !1 && I !== "insertText" && I !== "insertCompositionText" && (l = !1);
    var [O] = j.getTargetRanges();
    O && (R = q.toSlateRange(t, O, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var k = q.getWindow(t), H = k.getSelection();
    if (!R && H && (O = H, R = q.toSlateRange(t, H, {
      exactMatch: !1,
      suppressThrow: !0
    })), R = (N = R) !== null && N !== void 0 ? N : t.selection, !!R) {
      var U = !0;
      if (I.startsWith("delete")) {
        if (L.isExpanded(R)) {
          var [K, J] = L.edges(R), te = Q.leaf(t, K.path);
          if (te.text.length === K.offset && J.offset === 0) {
            var S = h.next(t, {
              at: K.path,
              match: oe.isText
            });
            S && A.equals(S[1], J.path) && (R = {
              anchor: J,
              focus: J
            });
          }
        }
        var V = I.endsWith("Backward") ? "backward" : "forward", [z, Y] = L.edges(R), [ue, ie] = h.leaf(t, z.path), se = {
          text: "",
          start: z.offset,
          end: Y.offset
        }, de = pt.get(t), he = de == null ? void 0 : de.find((lt) => A.equals(lt.path, ie)), ye = he ? [he.diff, se] : [se], Z = Ff(ue.text, ...ye);
        if (Z.length === 0 && (U = !1), L.isExpanded(R)) {
          if (U && A.equals(R.anchor.path, R.focus.path)) {
            var me = {
              path: R.anchor.path,
              offset: z.offset
            }, Be = h.range(t, me, me);
            return w(Be), g(R.anchor.path, {
              text: "",
              end: Y.offset,
              start: z.offset
            });
          }
          return p(() => h.deleteFragment(t, {
            direction: V
          }), {
            at: R
          });
        }
      }
      switch (I) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return p(() => h.deleteFragment(t), {
            at: R
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: we
          } = R;
          if (U && L.isCollapsed(R)) {
            var ze = Q.leaf(t, we.path);
            if (we.offset < ze.text.length)
              return g(we.path, {
                text: "",
                start: we.offset,
                end: we.offset + 1
              });
          }
          return p(() => h.deleteForward(t), {
            at: R
          });
        }
        case "deleteContentBackward": {
          var Fe, {
            anchor: Ce
          } = R, ce = jo(O) ? O.isCollapsed : !!((Fe = O) !== null && Fe !== void 0 && Fe.collapsed);
          return U && ce && L.isCollapsed(R) && Ce.offset > 0 ? g(Ce.path, {
            text: "",
            start: Ce.offset - 1,
            end: Ce.offset
          }) : p(() => h.deleteBackward(t), {
            at: R
          });
        }
        case "deleteEntireSoftLine":
          return p(() => {
            h.deleteBackward(t, {
              unit: "line"
            }), h.deleteForward(t, {
              unit: "line"
            });
          }, {
            at: R
          });
        case "deleteHardLineBackward":
          return p(() => h.deleteBackward(t, {
            unit: "block"
          }), {
            at: R
          });
        case "deleteSoftLineBackward":
          return p(() => h.deleteBackward(t, {
            unit: "line"
          }), {
            at: R
          });
        case "deleteHardLineForward":
          return p(() => h.deleteForward(t, {
            unit: "block"
          }), {
            at: R
          });
        case "deleteSoftLineForward":
          return p(() => h.deleteForward(t, {
            unit: "line"
          }), {
            at: R
          });
        case "deleteWordBackward":
          return p(() => h.deleteBackward(t, {
            unit: "word"
          }), {
            at: R
          });
        case "deleteWordForward":
          return p(() => h.deleteForward(t, {
            unit: "word"
          }), {
            at: R
          });
        case "insertLineBreak":
          return p(() => h.insertSoftBreak(t), {
            at: R
          });
        case "insertParagraph":
          return p(() => h.insertBreak(t), {
            at: R
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (L0(M))
            return p(() => q.insertData(t, M), {
              at: R
            });
          var le = M ?? "";
          if (_t.get(t) && (le = le.replace("\uFEFF", "")), I === "insertText" && /.*\n.*\n$/.test(le) && (le = le.slice(0, -1)), le.includes(`
`))
            return p(() => {
              var lt = le.split(`
`);
              lt.forEach((St, nr) => {
                St && h.insertText(t, St), nr !== lt.length - 1 && h.insertSoftBreak(t);
              });
            }, {
              at: R
            });
          if (A.equals(R.anchor.path, R.focus.path)) {
            var [xe, Ue] = L.edges(R), We = {
              start: xe.offset,
              end: Ue.offset,
              text: le
            };
            if (le && l && I === "insertCompositionText") {
              var ot = l.start + l.text.search(/\S|$/), At = We.start + We.text.search(/\S|$/);
              At === ot + 1 && We.end === l.start + l.text.length ? (We.start -= 1, l = null, T()) : l = !1;
            } else
              I === "insertText" ? l === null ? l = We : l && L.isCollapsed(R) && l.end + l.text.length === xe.offset ? l = ja(ja({}, l), {}, {
                text: l.text + le
              }) : l = !1 : l = !1;
            if (U) {
              g(xe.path, We);
              return;
            }
          }
          return p(() => h.insertText(t, le), {
            at: R
          });
        }
      }
    }
  }, y = () => !!Or.get(t), E = () => {
    var j;
    return !!((j = pt.get(t)) !== null && j !== void 0 && j.length);
  }, F = () => y() || E(), B = () => a, w = (j) => {
    xr.set(t, j), o && (clearTimeout(o), o = null);
    var {
      selection: N
    } = t;
    if (j) {
      var I = !N || !A.equals(N.anchor.path, j.anchor.path), R = !N || !A.equals(N.anchor.path.slice(0, -1), j.anchor.path.slice(0, -1));
      (I && l || R) && (l = !1), (I || E()) && (o = setTimeout(v, I0));
    }
  }, $ = () => {
    (y() || !E()) && v();
  }, P = (j) => {
    E() || (f(!0), setTimeout(f));
  }, T = () => {
    y() || (u = setTimeout(v));
  }, _ = (j) => {
    if (!(E() || y()) && j.some((I) => Vu(t, I, j))) {
      var N;
      (N = Cf.get(t)) === null || N === void 0 || N();
    }
  };
  return {
    flush: v,
    scheduleFlush: T,
    hasPendingDiffs: E,
    hasPendingAction: y,
    hasPendingChanges: F,
    isFlushing: B,
    handleUserSelect: w,
    handleCompositionEnd: b,
    handleCompositionStart: m,
    handleDOMBeforeInput: C,
    handleKeyDown: P,
    handleDomMutations: _,
    handleInput: $
  };
}
function V0() {
  var e = Ie(!1);
  return at(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e.current;
}
var ln = Xa ? _c : at;
function z0(e, t, r) {
  var [n] = Wt(() => new MutationObserver(t));
  ln(() => {
    n.takeRecords();
  }), at(() => {
    if (!e.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(e.current, r), () => n.disconnect();
  }, [n, e, r]);
}
var W0 = ["node"];
function Fl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function H0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fl(Object(r), !0).forEach(function(n) {
      Rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Fl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var q0 = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, U0 = dt ? (e) => {
  var {
    node: t
  } = e, r = Rn(e, W0);
  if (!dt)
    return null;
  var n = Ht(), a = V0(), [i] = Wt(() => _0(H0({
    editor: n
  }, r)));
  return z0(t, i.handleDomMutations, q0), Lu.set(n, i.scheduleFlush), a && i.flush(), i;
} : () => null, G0 = ["anchor", "focus"], K0 = ["anchor", "focus"], X0 = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every((r) => t.hasOwnProperty(r) && e[r] === t[r]), Af = (e, t) => {
  var r = Rn(e, G0), n = Rn(t, K0);
  return e[$n] === t[$n] && X0(r, n);
}, Y0 = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (!L.equals(n, a) || !Af(n, a))
      return !1;
  }
  return !0;
}, J0 = (e, t) => {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++) {
    var n = e[r], a = t[r];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !Af(n, a))
      return !1;
  }
  return !0;
};
function Bl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Z0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Bl(Object(r), !0).forEach(function(n) {
      Rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Bl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Q0 = (e) => {
  var {
    isLast: t,
    leaf: r,
    parent: n,
    text: a
  } = e, i = Ht(), o = q.findPath(i, a), u = A.parent(o), s = !!r[yf];
  return i.isVoid(n) ? /* @__PURE__ */ re.createElement(Zi, {
    length: Q.string(n).length
  }) : r.text === "" && n.children[n.children.length - 1] === a && !i.isInline(n) && h.string(i, u) === "" ? /* @__PURE__ */ re.createElement(Zi, {
    isLineBreak: !0,
    isMarkPlaceholder: s
  }) : r.text === "" ? /* @__PURE__ */ re.createElement(Zi, {
    isMarkPlaceholder: s
  }) : t && r.text.slice(-1) === `
` ? /* @__PURE__ */ re.createElement(Al, {
    isTrailing: !0,
    text: r.text
  }) : /* @__PURE__ */ re.createElement(Al, {
    text: r.text
  });
}, Al = (e) => {
  var {
    text: t,
    isTrailing: r = !1
  } = e, n = Ie(null), a = () => "".concat(t ?? "").concat(r ? `
` : ""), [i] = Wt(a);
  return ln(() => {
    var o = a();
    n.current && n.current.textContent !== o && (n.current.textContent = o);
  }), /* @__PURE__ */ re.createElement(eb, {
    ref: n
  }, i);
}, eb = /* @__PURE__ */ Hv(/* @__PURE__ */ cn((e, t) => /* @__PURE__ */ re.createElement("span", {
  "data-slate-string": !0,
  ref: t
}, e.children))), Zi = (e) => {
  var {
    length: t = 0,
    isLineBreak: r = !1,
    isMarkPlaceholder: n = !1
  } = e, a = {
    "data-slate-zero-width": r ? "n" : "z",
    "data-slate-length": t
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ re.createElement("span", Z0({}, a), !dt || !r ? "\uFEFF" : null, r ? /* @__PURE__ */ re.createElement("br", null) : null);
};
function Sl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sf(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sl(Object(r), !0).forEach(function(n) {
      Rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Sl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var tb = dt ? 300 : 0;
function rb(e, t) {
  e.current && (e.current.disconnect(), t && (e.current = null));
}
function Ol(e) {
  e.current && (clearTimeout(e.current), e.current = null);
}
var nb = (e) => {
  var {
    leaf: t,
    isLast: r,
    text: n,
    parent: a,
    renderPlaceholder: i,
    renderLeaf: o = (C) => /* @__PURE__ */ re.createElement(ib, Sf({}, C))
  } = e, u = Ht(), s = Ie(null), l = Ie(null), [c, d] = Wt(!1), v = Ie(null), b = $e((C) => {
    if (rb(s, C == null), C == null) {
      var y;
      To.delete(u), (y = t.onPlaceholderResize) === null || y === void 0 || y.call(t, null);
    } else {
      if (To.set(u, C), !s.current) {
        var E = window.ResizeObserver || o0;
        s.current = new E(() => {
          var F;
          (F = t.onPlaceholderResize) === null || F === void 0 || F.call(t, C);
        });
      }
      s.current.observe(C), l.current = C;
    }
  }, [l, t, u]), m = /* @__PURE__ */ re.createElement(Q0, {
    isLast: r,
    leaf: t,
    parent: a,
    text: n
  }), f = !!t[$n];
  if (at(() => (f ? v.current || (v.current = setTimeout(() => {
    d(!0), v.current = null;
  }, tb)) : (Ol(v), d(!1)), () => Ol(v)), [f, d]), f && c) {
    var g = {
      children: t.placeholder,
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
          WebkitUserModify: Yn ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: b
      }
    };
    m = /* @__PURE__ */ re.createElement(re.Fragment, null, i(g), m);
  }
  var p = {
    "data-slate-leaf": !0
  };
  return o({
    attributes: p,
    children: m,
    leaf: t,
    text: n
  });
}, ab = /* @__PURE__ */ re.memo(nb, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && oe.equals(t.leaf, e.leaf) && t.leaf[$n] === e.leaf[$n]), ib = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return /* @__PURE__ */ re.createElement("span", Sf({}, t), r);
}, ob = (e) => {
  for (var {
    decorations: t,
    isLast: r,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: i,
    text: o
  } = e, u = Ht(), s = Ie(null), l = oe.decorations(o, t), c = q.findKey(u, o), d = [], v = 0; v < l.length; v++) {
    var b = l[v];
    d.push(/* @__PURE__ */ re.createElement(ab, {
      isLast: r && v === l.length - 1,
      key: "".concat(c.id, "-").concat(v),
      renderPlaceholder: a,
      leaf: b,
      text: o,
      parent: n,
      renderLeaf: i
    }));
  }
  var m = $e((f) => {
    var g = Ai.get(u);
    f ? (g == null || g.set(c, f), en.set(o, f), ca.set(f, o)) : (g == null || g.delete(c), en.delete(o), s.current && ca.delete(s.current)), s.current = f;
  }, [s, u, c, o]);
  return /* @__PURE__ */ re.createElement("span", {
    "data-slate-node": "text",
    ref: m
  }, d);
}, Of = /* @__PURE__ */ re.memo(ob, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && J0(t.decorations, e.decorations));
function xl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Io(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xl(Object(r), !0).forEach(function(n) {
      Rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : xl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var ub = (e) => {
  var {
    decorations: t,
    element: r,
    renderElement: n = (C) => /* @__PURE__ */ re.createElement(lb, Io({}, C)),
    renderPlaceholder: a,
    renderLeaf: i,
    selection: o
  } = e, u = Ht(), s = Rf(), l = u.isInline(r), c = q.findKey(u, r), d = $e((C) => {
    var y = Ai.get(u);
    C ? (y == null || y.set(c, C), en.set(r, C), ca.set(C, r)) : (y == null || y.delete(c), en.delete(r));
  }, [u, c, r]), v = Pf({
    decorations: t,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: i,
    selection: o
  }), b = {
    "data-slate-node": "element",
    ref: d
  };
  if (l && (b["data-slate-inline"] = !0), !l && h.hasInlines(u, r)) {
    var m = Q.string(r), f = Hc(m);
    f === "rtl" && (b.dir = f);
  }
  if (h.isVoid(u, r)) {
    b["data-slate-void"] = !0, !s && l && (b.contentEditable = !1);
    var g = l ? "span" : "div", [[p]] = Q.texts(r);
    v = /* @__PURE__ */ re.createElement(g, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ re.createElement(Of, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: r,
      text: p
    })), Iu.set(p, 0), ku.set(p, r);
  }
  return n({
    attributes: b,
    children: v,
    element: r
  });
}, sb = /* @__PURE__ */ re.memo(ub, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && Y0(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && L.equals(e.selection, t.selection))), lb = (e) => {
  var {
    attributes: t,
    children: r,
    element: n
  } = e, a = Ht(), i = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ re.createElement(i, Io(Io({}, t), {}, {
    style: {
      position: "relative"
    }
  }), r);
}, xf = /* @__PURE__ */ rr(() => []), cb = () => st(xf), fb = /* @__PURE__ */ rr(!1), Pf = (e) => {
  for (var {
    decorations: t,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: i,
    selection: o
  } = e, u = cb(), s = Ht(), l = q.findPath(s, r), c = [], d = ae.isElement(r) && !s.isInline(r) && h.hasInlines(s, r), v = 0; v < r.children.length; v++) {
    var b = l.concat(v), m = r.children[v], f = q.findKey(s, m), g = h.range(s, b), p = o && L.intersection(g, o), C = u([m, b]);
    for (var y of t) {
      var E = L.intersection(y, g);
      E && C.push(E);
    }
    ae.isElement(m) ? c.push(/* @__PURE__ */ re.createElement(fb.Provider, {
      key: "provider-".concat(f.id),
      value: !!p
    }, /* @__PURE__ */ re.createElement(sb, {
      decorations: C,
      element: m,
      key: f.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: i,
      selection: p
    }))) : c.push(/* @__PURE__ */ re.createElement(Of, {
      decorations: C,
      key: f.id,
      isLast: d && v === r.children.length - 1,
      parent: r,
      renderPlaceholder: a,
      renderLeaf: i,
      text: m
    })), Iu.set(m, v), ku.set(m, r);
  }
  return c;
}, Tf = /* @__PURE__ */ rr(!1), Rf = () => st(Tf), $f = /* @__PURE__ */ rr(null), db = () => {
  var e = st($f);
  if (!e)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: t
  } = e;
  return t;
};
function vb() {
  var e = Ht(), t = Ie(!1), r = Ie(0), n = $e(() => {
    if (!t.current) {
      t.current = !0;
      var a = q.getWindow(e);
      a.cancelAnimationFrame(r.current), r.current = a.requestAnimationFrame(() => {
        t.current = !1;
      });
    }
  }, [e]);
  return at(() => () => cancelAnimationFrame(r.current), []), {
    receivedUserInput: t,
    onUserInput: n
  };
}
var hb = 3, gb = {
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
}, pb = {
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
}, mb = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Ve = (e) => {
  var t = gb[e], r = pb[e], n = mb[e], a = t && Ji(t), i = r && Ji(r), o = n && Ji(n);
  return (u) => !!(a && a(u) || yl && i && i(u) || !yl && o && o(u));
}, He = {
  isBold: Ve("bold"),
  isCompose: Ve("compose"),
  isMoveBackward: Ve("moveBackward"),
  isMoveForward: Ve("moveForward"),
  isDeleteBackward: Ve("deleteBackward"),
  isDeleteForward: Ve("deleteForward"),
  isDeleteLineBackward: Ve("deleteLineBackward"),
  isDeleteLineForward: Ve("deleteLineForward"),
  isDeleteWordBackward: Ve("deleteWordBackward"),
  isDeleteWordForward: Ve("deleteWordForward"),
  isExtendBackward: Ve("extendBackward"),
  isExtendForward: Ve("extendForward"),
  isExtendLineBackward: Ve("extendLineBackward"),
  isExtendLineForward: Ve("extendLineForward"),
  isItalic: Ve("italic"),
  isMoveLineBackward: Ve("moveLineBackward"),
  isMoveLineForward: Ve("moveLineForward"),
  isMoveWordBackward: Ve("moveWordBackward"),
  isMoveWordForward: Ve("moveWordForward"),
  isRedo: Ve("redo"),
  isSoftBreak: Ve("insertSoftBreak"),
  isSplitBlock: Ve("splitBlock"),
  isTransposeCharacter: Ve("transposeCharacter"),
  isUndo: Ve("undo")
}, bb = (e, t) => {
  var r = [], n = () => {
    r = [];
  }, a = (o) => {
    if (t.current) {
      var u = o.filter((s) => Vu(e, s, o));
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
}, Cb = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class jf extends Wv {
  constructor() {
    super(...arguments), Rt(this, "context", null), Rt(this, "manager", null), Rt(this, "mutationObserver", null);
  }
  observe() {
    var t, {
      node: r
    } = this.props;
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (t = this.mutationObserver) === null || t === void 0 || t.observe(r.current, Cb);
  }
  componentDidMount() {
    var {
      receivedUserInput: t
    } = this.props, r = this.context;
    this.manager = bb(r, t), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var t, r, n, a = (t = this.mutationObserver) === null || t === void 0 ? void 0 : t.takeRecords();
    if (a != null && a.length) {
      var i;
      (i = this.manager) === null || i === void 0 || i.registerMutations(a);
    }
    return (r = this.mutationObserver) === null || r === void 0 || r.disconnect(), (n = this.manager) === null || n === void 0 || n.restoreDOM(), null;
  }
  componentDidUpdate() {
    var t;
    (t = this.manager) === null || t === void 0 || t.clear(), this.observe();
  }
  componentWillUnmount() {
    var t;
    (t = this.mutationObserver) === null || t === void 0 || t.disconnect();
  }
  render() {
    return this.props.children;
  }
}
Rt(jf, "contextType", Mu);
var yb = dt ? jf : (e) => {
  var {
    children: t
  } = e;
  return /* @__PURE__ */ re.createElement(re.Fragment, null, t);
}, Db = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], Eb = ["text"];
function Pl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Xt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pl(Object(r), !0).forEach(function(n) {
      Rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var wb = (e) => /* @__PURE__ */ re.createElement(re.Fragment, null, Pf(e)), Fb = (e) => {
  var t = $e((S) => /* @__PURE__ */ re.createElement(Bb, Xt({}, S)), []), {
    autoFocus: r,
    decorate: n = Ab,
    onDOMBeforeInput: a,
    placeholder: i,
    readOnly: o = !1,
    renderElement: u,
    renderLeaf: s,
    renderPlaceholder: l = t,
    scrollSelectionIntoView: c = Sb,
    style: d = {},
    as: v = "div",
    disableDefaultStyles: b = !1
  } = e, m = Rn(e, Db), f = db(), [g, p] = Wt(!1), C = Ie(null), y = Ie([]), [E, F] = Wt(), {
    onUserInput: B,
    receivedUserInput: w
  } = vb(), [, $] = Lc((S) => S + 1, 0);
  Cf.set(f, $), Ro.set(f, o);
  var P = hr(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  at(() => {
    C.current && r && C.current.focus();
  }, [r]);
  var T = Ie(), _ = hr(() => ig(() => {
    var S = T.current;
    if ((dt || !q.isComposing(f)) && (!P.isUpdatingSelection || S != null && S.isFlushing()) && !P.isDraggingInternally) {
      var V = q.findDocumentOrShadowRoot(f), {
        activeElement: z
      } = V, Y = q.toDOMNode(f, f), ue = V.getSelection();
      if (z === Y ? (P.latestElement = z, Tr.set(f, !0)) : Tr.delete(f), !ue)
        return G.deselect(f);
      var {
        anchorNode: ie,
        focusNode: se
      } = ue, de = q.hasEditableTarget(f, ie) || q.isTargetInsideNonReadonlyVoid(f, ie), he = q.hasEditableTarget(f, se) || q.isTargetInsideNonReadonlyVoid(f, se);
      if (de && he) {
        var ye = q.toSlateRange(f, ue, {
          exactMatch: !1,
          suppressThrow: !0
        });
        ye && (!q.isComposing(f) && !(S != null && S.hasPendingChanges()) && !(S != null && S.isFlushing()) ? G.select(f, ye) : S == null || S.handleUserSelect(ye));
      }
      o && (!de || !he) && G.deselect(f);
    }
  }, 100), [f, o, P]), j = hr(() => Qh(_, 0), [_]);
  T.current = U0({
    node: C,
    onDOMSelectionChange: _,
    scheduleOnDOMSelectionChange: j
  }), ln(() => {
    var S, V, z;
    C.current && (z = _u(C.current)) ? (bf.set(f, z), Ya.set(f, C.current), en.set(f, C.current), ca.set(C.current, f)) : en.delete(f);
    var {
      selection: Y
    } = f, ue = q.findDocumentOrShadowRoot(f), ie = ue.getSelection();
    if (!(!ie || !q.isFocused(f) || (S = T.current) !== null && S !== void 0 && S.hasPendingAction())) {
      var se = (Z) => {
        var me = ie.type !== "None";
        if (!(!Y && !me)) {
          var Be = ie.focusNode, we;
          if (wn && ie.rangeCount > 1) {
            var ze = ie.getRangeAt(0), Fe = ie.getRangeAt(ie.rangeCount - 1);
            ze.startContainer === Be ? we = Fe.endContainer : we = ze.startContainer;
          } else
            we = ie.anchorNode;
          var Ce = Ya.get(f), ce = !1;
          if (Ce.contains(we) && Ce.contains(Be) && (ce = !0), me && ce && Y && !Z) {
            var le = q.toSlateRange(f, ie, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (le && L.equals(le, Y)) {
              var xe;
              if (!P.hasMarkPlaceholder || (xe = we) !== null && xe !== void 0 && (xe = xe.parentElement) !== null && xe !== void 0 && xe.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (Y && !q.hasRange(f, Y)) {
            f.selection = q.toSlateRange(f, ie, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          P.isUpdatingSelection = !0;
          var Ue = Y && q.toDOMRange(f, Y);
          return Ue ? (q.isComposing(f) && !dt ? ie.collapseToEnd() : L.isBackward(Y) ? ie.setBaseAndExtent(Ue.endContainer, Ue.endOffset, Ue.startContainer, Ue.startOffset) : ie.setBaseAndExtent(Ue.startContainer, Ue.startOffset, Ue.endContainer, Ue.endOffset), c(f, Ue)) : ie.removeAllRanges(), Ue;
        }
      };
      ie.rangeCount <= 1 && se();
      var de = ((V = T.current) === null || V === void 0 ? void 0 : V.isFlushing()) === "action";
      if (!dt || !de) {
        setTimeout(() => {
          P.isUpdatingSelection = !1;
        });
        return;
      }
      var he = null, ye = requestAnimationFrame(() => {
        if (de) {
          var Z = (me) => {
            try {
              var Be = q.toDOMNode(f, f);
              Be.focus(), se(me);
            } catch {
            }
          };
          Z(), he = setTimeout(() => {
            Z(!0), P.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(ye), he && clearTimeout(he);
      };
    }
  });
  var N = $e((S) => {
    if (B(), !o && q.hasEditableTarget(f, S.target) && !Ob(S, a)) {
      var V;
      if (T.current)
        return T.current.handleDOMBeforeInput(S);
      j.flush(), _.flush();
      var {
        selection: z
      } = f, {
        inputType: Y
      } = S, ue = S.dataTransfer || S.data || void 0, ie = Y === "insertCompositionText" || Y === "deleteCompositionText";
      if (ie && q.isComposing(f))
        return;
      var se = !1;
      if (Y === "insertText" && z && L.isCollapsed(z) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      S.data && S.data.length === 1 && /[a-z ]/i.test(S.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      z.anchor.offset !== 0) {
        var de, he;
        se = !0, f.marks && (se = !1);
        var {
          anchor: ye
        } = z, [Z, me] = q.toDOMPoint(f, ye), Be = (de = Z.parentElement) === null || de === void 0 ? void 0 : de.closest("a"), we = q.getWindow(f);
        if (se && Be && q.hasDOMNode(f, Be)) {
          var ze, Fe = we == null ? void 0 : we.document.createTreeWalker(Be, NodeFilter.SHOW_TEXT).lastChild();
          Fe === Z && ((ze = Fe.textContent) === null || ze === void 0 ? void 0 : ze.length) === me && (se = !1);
        }
        if (se && Z.parentElement && (we == null || (he = we.getComputedStyle(Z.parentElement)) === null || he === void 0 ? void 0 : he.whiteSpace) === "pre") {
          var Ce = h.above(f, {
            at: ye.path,
            match: (ot) => ae.isElement(ot) && h.isBlock(f, ot)
          });
          Ce && Q.string(Ce[0]).includes("	") && (se = !1);
        }
      }
      if (!Y.startsWith("delete") || Y.startsWith("deleteBy")) {
        var [ce] = S.getTargetRanges();
        if (ce) {
          var le = q.toSlateRange(f, ce, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!z || !L.equals(z, le)) {
            se = !1;
            var xe = !ie && f.selection && h.rangeRef(f, f.selection);
            G.select(f, le), xe && ea.set(f, xe);
          }
        }
      }
      if (ie)
        return;
      if (se || S.preventDefault(), z && L.isExpanded(z) && Y.startsWith("delete")) {
        var Ue = Y.endsWith("Backward") ? "backward" : "forward";
        h.deleteFragment(f, {
          direction: Ue
        });
        return;
      }
      switch (Y) {
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
          Y === "insertFromComposition" && q.isComposing(f) && (p(!1), Kr.set(f, !1)), (ue == null ? void 0 : ue.constructor.name) === "DataTransfer" ? q.insertData(f, ue) : typeof ue == "string" && (se ? y.current.push(() => h.insertText(f, ue)) : h.insertText(f, ue));
          break;
        }
      }
      var We = (V = ea.get(f)) === null || V === void 0 ? void 0 : V.unref();
      ea.delete(f), We && (!f.selection || !L.equals(f.selection, We)) && G.select(f, We);
    }
  }, [f, _, B, a, o, j]), I = $e((S) => {
    S == null ? (_.cancel(), j.cancel(), Ya.delete(f), en.delete(f), C.current && Br && C.current.removeEventListener("beforeinput", N)) : Br && S.addEventListener("beforeinput", N), C.current = S;
  }, [_, j, f, N]);
  ln(() => {
    var S = q.getWindow(f);
    return S.document.addEventListener("selectionchange", j), () => {
      S.document.removeEventListener("selectionchange", j);
    };
  }, [j]);
  var R = n([f, []]), M = i && f.children.length === 1 && Array.from(Q.texts(f)).length === 1 && Q.string(f) === "" && !g, O = $e((S) => {
    if (S && M) {
      var V;
      F((V = S.getBoundingClientRect()) === null || V === void 0 ? void 0 : V.height);
    } else
      F(void 0);
  }, [M]);
  if (M) {
    var k = h.start(f, []);
    R.push({
      [$n]: !0,
      placeholder: i,
      onPlaceholderResize: O,
      anchor: k,
      focus: k
    });
  }
  var {
    marks: H
  } = f;
  if (P.hasMarkPlaceholder = !1, f.selection && L.isCollapsed(f.selection) && H) {
    var {
      anchor: U
    } = f.selection, K = Q.leaf(f, U.path), J = Rn(K, Eb);
    if (!oe.equals(K, H, {
      loose: !0
    })) {
      P.hasMarkPlaceholder = !0;
      var te = Object.fromEntries(Object.keys(J).map((S) => [S, null]));
      R.push(Xt(Xt(Xt({
        [yf]: !0
      }, te), H), {}, {
        anchor: U,
        focus: U
      }));
    }
  }
  return at(() => {
    setTimeout(() => {
      var {
        selection: S
      } = f;
      if (S) {
        var {
          anchor: V
        } = S, z = Q.leaf(f, V.path);
        if (H && !oe.equals(z, H, {
          loose: !0
        })) {
          _t.set(f, H);
          return;
        }
      }
      _t.delete(f);
    });
  }), /* @__PURE__ */ re.createElement(Tf.Provider, {
    value: o
  }, /* @__PURE__ */ re.createElement(xf.Provider, {
    value: n
  }, /* @__PURE__ */ re.createElement(yb, {
    node: C,
    receivedUserInput: w
  }, /* @__PURE__ */ re.createElement(v, Xt(Xt({
    role: o ? void 0 : "textbox",
    "aria-multiline": o ? void 0 : !0
  }, m), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: Br || !Xa ? m.spellCheck : !1,
    autoCorrect: Br || !Xa ? m.autoCorrect : "false",
    autoCapitalize: Br || !Xa ? m.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !o,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: I,
    style: Xt(Xt({}, b ? {} : Xt({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, E ? {
      minHeight: E
    } : {})), d),
    onBeforeInput: $e((S) => {
      if (!Br && !o && !ft(S, m.onBeforeInput) && q.hasSelectableTarget(f, S.target) && (S.preventDefault(), !q.isComposing(f))) {
        var V = S.data;
        h.insertText(f, V);
      }
    }, [m.onBeforeInput, f, o]),
    onInput: $e((S) => {
      if (!ft(S, m.onInput)) {
        if (T.current) {
          T.current.handleInput();
          return;
        }
        for (var V of y.current)
          V();
        y.current = [];
      }
    }, [m.onInput]),
    onBlur: $e((S) => {
      if (!(o || P.isUpdatingSelection || !q.hasSelectableTarget(f, S.target) || ft(S, m.onBlur))) {
        var V = q.findDocumentOrShadowRoot(f);
        if (P.latestElement !== V.activeElement) {
          var {
            relatedTarget: z
          } = S, Y = q.toDOMNode(f, f);
          if (z !== Y && !(Tt(z) && z.hasAttribute("data-slate-spacer"))) {
            if (z != null && jr(z) && q.hasDOMNode(f, z)) {
              var ue = q.toSlateNode(f, z);
              if (ae.isElement(ue) && !f.isVoid(ue))
                return;
            }
            if (Yn) {
              var ie = V.getSelection();
              ie == null || ie.removeAllRanges();
            }
            Tr.delete(f);
          }
        }
      }
    }, [o, P.isUpdatingSelection, P.latestElement, f, m.onBlur]),
    onClick: $e((S) => {
      if (q.hasTarget(f, S.target) && !ft(S, m.onClick) && jr(S.target)) {
        var V = q.toSlateNode(f, S.target), z = q.findPath(f, V);
        if (!h.hasPath(f, z) || Q.get(f, z) !== V)
          return;
        if (S.detail === hb && z.length >= 1) {
          var Y = z;
          if (!(ae.isElement(V) && h.isBlock(f, V))) {
            var ue, ie = h.above(f, {
              match: (Be) => ae.isElement(Be) && h.isBlock(f, Be),
              at: z
            });
            Y = (ue = ie == null ? void 0 : ie[1]) !== null && ue !== void 0 ? ue : z.slice(0, 1);
          }
          var se = h.range(f, Y);
          G.select(f, se);
          return;
        }
        if (o)
          return;
        var de = h.start(f, z), he = h.end(f, z), ye = h.void(f, {
          at: de
        }), Z = h.void(f, {
          at: he
        });
        if (ye && Z && A.equals(ye[1], Z[1])) {
          var me = h.range(f, de);
          G.select(f, me);
        }
      }
    }, [f, m.onClick, o]),
    onCompositionEnd: $e((S) => {
      if (q.hasSelectableTarget(f, S.target)) {
        var V;
        if (q.isComposing(f) && Promise.resolve().then(() => {
          p(!1), Kr.set(f, !1);
        }), (V = T.current) === null || V === void 0 || V.handleCompositionEnd(S), ft(S, m.onCompositionEnd) || dt)
          return;
        if (!Yn && !m0 && !v0 && !C0 && !b0 && S.data) {
          var z = _t.get(f);
          _t.delete(f), z !== void 0 && (vr.set(f, f.marks), f.marks = z), h.insertText(f, S.data);
          var Y = vr.get(f);
          vr.delete(f), Y !== void 0 && (f.marks = Y);
        }
      }
    }, [m.onCompositionEnd, f]),
    onCompositionUpdate: $e((S) => {
      q.hasSelectableTarget(f, S.target) && !ft(S, m.onCompositionUpdate) && (q.isComposing(f) || (p(!0), Kr.set(f, !0)));
    }, [m.onCompositionUpdate, f]),
    onCompositionStart: $e((S) => {
      if (q.hasSelectableTarget(f, S.target)) {
        var V;
        if ((V = T.current) === null || V === void 0 || V.handleCompositionStart(S), ft(S, m.onCompositionStart) || dt)
          return;
        p(!0);
        var {
          selection: z
        } = f;
        if (z && L.isExpanded(z)) {
          h.deleteFragment(f);
          return;
        }
      }
    }, [m.onCompositionStart, f]),
    onCopy: $e((S) => {
      q.hasSelectableTarget(f, S.target) && !ft(S, m.onCopy) && !Tl(S) && (S.preventDefault(), q.setFragmentData(f, S.clipboardData, "copy"));
    }, [m.onCopy, f]),
    onCut: $e((S) => {
      if (!o && q.hasSelectableTarget(f, S.target) && !ft(S, m.onCut) && !Tl(S)) {
        S.preventDefault(), q.setFragmentData(f, S.clipboardData, "cut");
        var {
          selection: V
        } = f;
        if (V)
          if (L.isExpanded(V))
            h.deleteFragment(f);
          else {
            var z = Q.parent(f, V.anchor.path);
            h.isVoid(f, z) && G.delete(f);
          }
      }
    }, [o, f, m.onCut]),
    onDragOver: $e((S) => {
      if (q.hasTarget(f, S.target) && !ft(S, m.onDragOver)) {
        var V = q.toSlateNode(f, S.target);
        ae.isElement(V) && h.isVoid(f, V) && S.preventDefault();
      }
    }, [m.onDragOver, f]),
    onDragStart: $e((S) => {
      if (!o && q.hasTarget(f, S.target) && !ft(S, m.onDragStart)) {
        var V = q.toSlateNode(f, S.target), z = q.findPath(f, V), Y = ae.isElement(V) && h.isVoid(f, V) || h.void(f, {
          at: z,
          voids: !0
        });
        if (Y) {
          var ue = h.range(f, z);
          G.select(f, ue);
        }
        P.isDraggingInternally = !0, q.setFragmentData(f, S.dataTransfer, "drag");
      }
    }, [o, f, m.onDragStart, P]),
    onDrop: $e((S) => {
      if (!o && q.hasTarget(f, S.target) && !ft(S, m.onDrop)) {
        S.preventDefault();
        var V = f.selection, z = q.findEventRange(f, S), Y = S.dataTransfer;
        G.select(f, z), P.isDraggingInternally && V && !L.equals(V, z) && !h.void(f, {
          at: z,
          voids: !0
        }) && G.delete(f, {
          at: V
        }), q.insertData(f, Y), q.isFocused(f) || q.focus(f);
      }
      P.isDraggingInternally = !1;
    }, [o, f, m.onDrop, P]),
    onDragEnd: $e((S) => {
      !o && P.isDraggingInternally && m.onDragEnd && q.hasTarget(f, S.target) && m.onDragEnd(S), P.isDraggingInternally = !1;
    }, [o, P, m, f]),
    onFocus: $e((S) => {
      if (!o && !P.isUpdatingSelection && q.hasEditableTarget(f, S.target) && !ft(S, m.onFocus)) {
        var V = q.toDOMNode(f, f), z = q.findDocumentOrShadowRoot(f);
        if (P.latestElement = z.activeElement, wn && S.target !== V) {
          V.focus();
          return;
        }
        Tr.set(f, !0);
      }
    }, [o, P, f, m.onFocus]),
    onKeyDown: $e((S) => {
      if (!o && q.hasEditableTarget(f, S.target)) {
        var V;
        (V = T.current) === null || V === void 0 || V.handleKeyDown(S);
        var {
          nativeEvent: z
        } = S;
        if (q.isComposing(f) && z.isComposing === !1 && (Kr.set(f, !1), p(!1)), ft(S, m.onKeyDown) || q.isComposing(f))
          return;
        var {
          selection: Y
        } = f, ue = f.children[Y !== null ? Y.focus.path[0] : 0], ie = Hc(Q.string(ue)) === "rtl";
        if (He.isRedo(z)) {
          S.preventDefault();
          var se = f;
          typeof se.redo == "function" && se.redo();
          return;
        }
        if (He.isUndo(z)) {
          S.preventDefault();
          var de = f;
          typeof de.undo == "function" && de.undo();
          return;
        }
        if (He.isMoveLineBackward(z)) {
          S.preventDefault(), G.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (He.isMoveLineForward(z)) {
          S.preventDefault(), G.move(f, {
            unit: "line"
          });
          return;
        }
        if (He.isExtendLineBackward(z)) {
          S.preventDefault(), G.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (He.isExtendLineForward(z)) {
          S.preventDefault(), G.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (He.isMoveBackward(z)) {
          S.preventDefault(), Y && L.isCollapsed(Y) ? G.move(f, {
            reverse: !ie
          }) : G.collapse(f, {
            edge: ie ? "end" : "start"
          });
          return;
        }
        if (He.isMoveForward(z)) {
          S.preventDefault(), Y && L.isCollapsed(Y) ? G.move(f, {
            reverse: ie
          }) : G.collapse(f, {
            edge: ie ? "start" : "end"
          });
          return;
        }
        if (He.isMoveWordBackward(z)) {
          S.preventDefault(), Y && L.isExpanded(Y) && G.collapse(f, {
            edge: "focus"
          }), G.move(f, {
            unit: "word",
            reverse: !ie
          });
          return;
        }
        if (He.isMoveWordForward(z)) {
          S.preventDefault(), Y && L.isExpanded(Y) && G.collapse(f, {
            edge: "focus"
          }), G.move(f, {
            unit: "word",
            reverse: ie
          });
          return;
        }
        if (Br) {
          if ((mf || Yn) && Y && (He.isDeleteBackward(z) || He.isDeleteForward(z)) && L.isCollapsed(Y)) {
            var he = Q.parent(f, Y.anchor.path);
            if (ae.isElement(he) && h.isVoid(f, he) && (h.isInline(f, he) || h.isBlock(f, he))) {
              S.preventDefault(), h.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (He.isBold(z) || He.isItalic(z) || He.isTransposeCharacter(z)) {
            S.preventDefault();
            return;
          }
          if (He.isSoftBreak(z)) {
            S.preventDefault(), h.insertSoftBreak(f);
            return;
          }
          if (He.isSplitBlock(z)) {
            S.preventDefault(), h.insertBreak(f);
            return;
          }
          if (He.isDeleteBackward(z)) {
            S.preventDefault(), Y && L.isExpanded(Y) ? h.deleteFragment(f, {
              direction: "backward"
            }) : h.deleteBackward(f);
            return;
          }
          if (He.isDeleteForward(z)) {
            S.preventDefault(), Y && L.isExpanded(Y) ? h.deleteFragment(f, {
              direction: "forward"
            }) : h.deleteForward(f);
            return;
          }
          if (He.isDeleteLineBackward(z)) {
            S.preventDefault(), Y && L.isExpanded(Y) ? h.deleteFragment(f, {
              direction: "backward"
            }) : h.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (He.isDeleteLineForward(z)) {
            S.preventDefault(), Y && L.isExpanded(Y) ? h.deleteFragment(f, {
              direction: "forward"
            }) : h.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (He.isDeleteWordBackward(z)) {
            S.preventDefault(), Y && L.isExpanded(Y) ? h.deleteFragment(f, {
              direction: "backward"
            }) : h.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (He.isDeleteWordForward(z)) {
            S.preventDefault(), Y && L.isExpanded(Y) ? h.deleteFragment(f, {
              direction: "forward"
            }) : h.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [o, f, m.onKeyDown]),
    onPaste: $e((S) => {
      !o && q.hasEditableTarget(f, S.target) && !ft(S, m.onPaste) && (!Br || E0(S.nativeEvent) || Yn) && (S.preventDefault(), q.insertData(f, S.clipboardData));
    }, [o, f, m.onPaste])
  }), /* @__PURE__ */ re.createElement(wb, {
    decorations: R,
    node: f,
    renderElement: u,
    renderPlaceholder: l,
    renderLeaf: s,
    selection: f.selection
  })))));
}, Bb = (e) => {
  var {
    attributes: t,
    children: r
  } = e;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ re.createElement("span", Xt({}, t), r, dt && /* @__PURE__ */ re.createElement("br", null))
  );
}, Ab = () => [], Sb = (e, t) => {
  if (t.getBoundingClientRect && (!e.selection || e.selection && L.isCollapsed(e.selection))) {
    var r = t.startContainer.parentElement;
    r.getBoundingClientRect = t.getBoundingClientRect.bind(t), sg(r, {
      scrollMode: "if-needed"
    }), delete r.getBoundingClientRect;
  }
}, ft = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? (e.isDefaultPrevented() || e.isPropagationStopped());
}, Tl = (e) => jr(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement), Ob = (e, t) => {
  if (!t)
    return !1;
  var r = t(e);
  return r ?? e.defaultPrevented;
}, xb = /* @__PURE__ */ rr(!1);
function Pb(e) {
  return e instanceof Error;
}
var Nf = /* @__PURE__ */ rr({}), Tb = (e, t) => e === t;
function Mf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tb, [, r] = Lc((c) => c + 1, 0), n = st(Nf);
  if (!n)
    throw new Error("The `useSlateSelector` hook must be used inside the <Slate> component's context.");
  var {
    getSlate: a,
    addEventListener: i
  } = n, o = Ie(), u = Ie(() => null), s = Ie(null), l;
  try {
    e !== u.current || o.current ? l = e(a()) : l = s.current;
  } catch (c) {
    throw o.current && Pb(c) && (c.message += `
The error may be correlated with this previous error:
`.concat(o.current.stack, `

`)), c;
  }
  return ln(() => {
    u.current = e, s.current = l, o.current = void 0;
  }), ln(
    () => {
      function c() {
        try {
          var v = u.current(a());
          if (t(v, s.current))
            return;
          s.current = v;
        } catch (b) {
          b instanceof Error ? o.current = b : o.current = new Error(String(b));
        }
        r();
      }
      var d = i(c);
      return c(), () => d();
    },
    // don't rerender on equalityFn change since we want to be able to define it inline
    [i, a]
  ), l;
}
function Rb(e) {
  var t = Ie([]).current, r = Ie({
    editor: e
  }).current, n = $e((i) => {
    r.editor = i, t.forEach((o) => o(i));
  }, [t, r]), a = hr(() => ({
    getSlate: () => r.editor,
    addEventListener: (i) => (t.push(i), () => {
      t.splice(t.indexOf(i), 1);
    })
  }), [t, r]);
  return {
    selectorContext: a,
    onChange: n
  };
}
var $b = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], jb = (e) => {
  var {
    editor: t,
    children: r,
    onChange: n,
    onSelectionChange: a,
    onValueChange: i,
    initialValue: o
  } = e, u = Rn(e, $b), [s, l] = re.useState(() => {
    if (!Q.isNodeList(o))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(rt.stringify(o)));
    if (!h.isEditor(t))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(rt.stringify(t)));
    return t.children = o, Object.assign(t, u), {
      v: 0,
      editor: t
    };
  }), {
    selectorContext: c,
    onChange: d
  } = Rb(t), v = $e((f) => {
    var g;
    switch (n && n(t.children), f == null || (g = f.operation) === null || g === void 0 ? void 0 : g.type) {
      case "set_selection":
        a == null || a(t.selection);
        break;
      default:
        i == null || i(t.children);
    }
    l((p) => ({
      v: p.v + 1,
      editor: t
    })), d(t);
  }, [t, d, n, a, i]);
  at(() => ($o.set(t, v), () => {
    $o.set(t, () => {
    });
  }), [t, v]);
  var [b, m] = Wt(q.isFocused(t));
  return at(() => {
    m(q.isFocused(t));
  }, [t]), ln(() => {
    var f = () => m(q.isFocused(t));
    return pf >= 17 ? (document.addEventListener("focusin", f), document.addEventListener("focusout", f), () => {
      document.removeEventListener("focusin", f), document.removeEventListener("focusout", f);
    }) : (document.addEventListener("focus", f, !0), document.addEventListener("blur", f, !0), () => {
      document.removeEventListener("focus", f, !0), document.removeEventListener("blur", f, !0);
    });
  }, []), /* @__PURE__ */ re.createElement(Nf.Provider, {
    value: c
  }, /* @__PURE__ */ re.createElement($f.Provider, {
    value: s
  }, /* @__PURE__ */ re.createElement(Mu.Provider, {
    value: s.editor
  }, /* @__PURE__ */ re.createElement(xb.Provider, {
    value: b
  }, r))));
}, Rl = (e, t) => {
  var r = (t.top + t.bottom) / 2;
  return e.top <= r && e.bottom >= r;
}, $l = (e, t, r) => {
  var n = q.toDOMRange(e, t).getBoundingClientRect(), a = q.toDOMRange(e, r).getBoundingClientRect();
  return Rl(n, a) && Rl(a, n);
}, Nb = (e, t) => {
  var r = h.range(e, L.end(t)), n = Array.from(h.positions(e, {
    at: t
  })), a = 0, i = n.length, o = Math.floor(i / 2);
  if ($l(e, h.range(e, n[a]), r))
    return h.range(e, n[a], r);
  if (n.length < 2)
    return h.range(e, n[n.length - 1], r);
  for (; o !== n.length && o !== a; )
    $l(e, h.range(e, n[o]), r) ? i = o : a = o, o = Math.floor((a + i) / 2);
  return h.range(e, n[i], r);
};
function jl(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? jl(Object(r), !0).forEach(function(n) {
      Rt(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : jl(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
var Mb = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = t, {
    apply: a,
    onChange: i,
    deleteBackward: o,
    addMark: u,
    removeMark: s
  } = n;
  return Ai.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (l, c) => {
    var d, v;
    (d = Lu.get(n)) === null || d === void 0 || d(), !_t.get(n) && (v = pt.get(n)) !== null && v !== void 0 && v.length && _t.set(n, null), vr.delete(n), u(l, c);
  }, n.removeMark = (l) => {
    var c;
    !_t.get(n) && (c = pt.get(n)) !== null && c !== void 0 && c.length && _t.set(n, null), vr.delete(n), s(l);
  }, n.deleteBackward = (l) => {
    if (l !== "line")
      return o(l);
    if (n.selection && L.isCollapsed(n.selection)) {
      var c = h.above(n, {
        match: (m) => ae.isElement(m) && h.isBlock(n, m),
        at: n.selection
      });
      if (c) {
        var [, d] = c, v = h.range(n, d, n.selection.anchor), b = Nb(n, v);
        L.isCollapsed(b) || G.delete(n, {
          at: b
        });
      }
    }
  }, n.apply = (l) => {
    var c = [], d = [], v = pt.get(n);
    if (v != null && v.length) {
      var b = v.map((I) => N0(I, l)).filter(Boolean);
      pt.set(n, b);
    }
    var m = xr.get(n);
    m && xr.set(n, El(n, m, l));
    var f = Or.get(n);
    if (f != null && f.at) {
      var g = be.isPoint(f == null ? void 0 : f.at) ? Mo(n, f.at, l) : El(n, f.at, l);
      Or.set(n, g ? Nl(Nl({}, f), {}, {
        at: g
      }) : null);
    }
    switch (l.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...pn(n, l.path));
        break;
      }
      case "set_selection": {
        var p;
        (p = ea.get(n)) === null || p === void 0 || p.unref(), ea.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...pn(n, A.parent(l.path)));
        break;
      }
      case "merge_node": {
        var C = A.previous(l.path);
        c.push(...pn(n, C));
        break;
      }
      case "move_node": {
        var y = A.common(A.parent(l.path), A.parent(l.newPath));
        c.push(...pn(n, y));
        var E;
        A.isBefore(l.path, l.newPath) ? (c.push(...pn(n, A.parent(l.path))), E = l.newPath) : (c.push(...pn(n, A.parent(l.newPath))), E = l.path);
        var F = Q.get(t, A.parent(E)), B = q.findKey(n, F), w = h.pathRef(n, A.parent(E));
        d.push([w, B]);
        break;
      }
    }
    a(l);
    for (var [$, P] of c) {
      var [T] = h.node(n, $);
      fi.set(T, P);
    }
    for (var [_, j] of d)
      if (_.current) {
        var [N] = h.node(n, _.current);
        fi.set(N, j);
      }
  }, n.setFragmentData = (l) => {
    var {
      selection: c
    } = n;
    if (c) {
      var [d, v] = L.edges(c), b = h.void(n, {
        at: d.path
      }), m = h.void(n, {
        at: v.path
      });
      if (!(L.isCollapsed(c) && !b)) {
        var f = q.toDOMRange(n, c), g = f.cloneContents(), p = g.childNodes[0];
        if (g.childNodes.forEach((T) => {
          T.textContent && T.textContent.trim() !== "" && (p = T);
        }), m) {
          var [C] = m, y = f.cloneRange(), E = q.toDOMNode(n, C);
          y.setEndAfter(E), g = y.cloneContents();
        }
        if (b && (p = g.querySelector("[data-slate-spacer]")), Array.from(g.querySelectorAll("[data-slate-zero-width]")).forEach((T) => {
          var _ = T.getAttribute("data-slate-zero-width") === "n";
          T.textContent = _ ? `
` : "";
        }), Df(p)) {
          var F = p.ownerDocument.createElement("span");
          F.style.whiteSpace = "pre", F.appendChild(p), g.appendChild(F), p = F;
        }
        var B = n.getFragment(), w = JSON.stringify(B), $ = window.btoa(encodeURIComponent(w));
        p.setAttribute("data-slate-fragment", $), l.setData("application/".concat(r), $);
        var P = g.ownerDocument.createElement("div");
        return P.appendChild(g), P.setAttribute("hidden", "true"), g.ownerDocument.body.appendChild(P), l.setData("text/html", P.innerHTML), l.setData("text/plain", wf(P)), g.ownerDocument.body.removeChild(P), l;
      }
    }
  }, n.insertData = (l) => {
    n.insertFragmentData(l) || n.insertTextData(l);
  }, n.insertFragmentData = (l) => {
    var c = l.getData("application/".concat(r)) || S0(l);
    if (c) {
      var d = decodeURIComponent(window.atob(c)), v = JSON.parse(d);
      return n.insertFragment(v), !0;
    }
    return !1;
  }, n.insertTextData = (l) => {
    var c = l.getData("text/plain");
    if (c) {
      var d = c.split(/\r\n|\r|\n/), v = !1;
      for (var b of d)
        v && G.splitNodes(n, {
          always: !0
        }), n.insertText(b), v = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (l) => {
    var c = pf < 18 ? Vc.unstable_batchedUpdates : (d) => d();
    c(() => {
      var d = $o.get(n);
      d && d(l), i(l);
    });
  }, n;
}, pn = (e, t) => {
  var r = [];
  for (var [n, a] of h.levels(e, {
    at: t
  })) {
    var i = q.findKey(e, n);
    r.push([a, i]);
  }
  return r;
}, Ib = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(e) {
    return nt(e) && Array.isArray(e.redos) && Array.isArray(e.undos) && (e.redos.length === 0 || Pr.isOperationList(e.redos[0].operations)) && (e.undos.length === 0 || Pr.isOperationList(e.undos[0].operations));
  }
}, Qi = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ new WeakMap(), Fn = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(e) {
    return Ib.isHistory(e.history) && h.isEditor(e);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(e) {
    return eo.get(e);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(e) {
    return Qi.get(e);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(e) {
    e.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(e) {
    e.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(e, t) {
    var r = Fn.isMerging(e);
    eo.set(e, !1), t(), eo.set(e, r);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(e, t) {
    var r = Fn.isSaving(e);
    Qi.set(e, !1), t(), Qi.set(e, r);
  }
}, kb = (e) => {
  var t = e, {
    apply: r
  } = t;
  return t.history = {
    undos: [],
    redos: []
  }, t.redo = () => {
    var {
      history: n
    } = t, {
      redos: a
    } = n;
    if (a.length > 0) {
      var i = a[a.length - 1];
      i.selectionBefore && G.setSelection(t, i.selectionBefore), Fn.withoutSaving(t, () => {
        h.withoutNormalizing(t, () => {
          for (var o of i.operations)
            t.apply(o);
        });
      }), n.redos.pop(), t.writeHistory("undos", i);
    }
  }, t.undo = () => {
    var {
      history: n
    } = t, {
      undos: a
    } = n;
    if (a.length > 0) {
      var i = a[a.length - 1];
      Fn.withoutSaving(t, () => {
        h.withoutNormalizing(t, () => {
          var o = i.operations.map(Pr.inverse).reverse();
          for (var u of o)
            t.apply(u);
          i.selectionBefore && G.setSelection(t, i.selectionBefore);
        });
      }), t.writeHistory("redos", i), n.undos.pop();
    }
  }, t.apply = (n) => {
    var {
      operations: a,
      history: i
    } = t, {
      undos: o
    } = i, u = o[o.length - 1], s = u && u.operations[u.operations.length - 1], l = Fn.isSaving(t), c = Fn.isMerging(t);
    if (l == null && (l = _b(n)), l) {
      if (c == null && (u == null ? c = !1 : a.length !== 0 ? c = !0 : c = Lb(n, s)), u && c)
        u.operations.push(n);
      else {
        var d = {
          operations: [n],
          selectionBefore: t.selection
        };
        t.writeHistory("undos", d);
      }
      for (; o.length > 100; )
        o.shift();
      i.redos = [];
    }
    r(n);
  }, t.writeHistory = (n, a) => {
    t.history[n].push(a);
  }, t;
}, Lb = (e, t) => !!(t && e.type === "insert_text" && t.type === "insert_text" && e.offset === t.offset + t.text.length && A.equals(e.path, t.path) || t && e.type === "remove_text" && t.type === "remove_text" && e.offset + e.text.length === t.offset && A.equals(e.path, t.path)), _b = (e, t) => e.type !== "set_selection", ut = /* @__PURE__ */ ((e) => (e.Paragraph = "paragraph", e.Heading = "heading", e.Bold = "bold", e.Code = "code", e.CheckList = "check-list", e))(ut || {});
function ko() {
  return [
    {
      type: ut.Paragraph,
      children: [{ text: "" }]
    }
  ];
}
function Vb(e) {
  const { selection: t } = e;
  return !!(t && L.isCollapsed(t));
}
const pr = Symbol.for("@ts-pattern/matcher"), zb = Symbol.for("@ts-pattern/isVariadic"), di = "@ts-pattern/anonymous-select-key", Lo = (e) => !!(e && typeof e == "object"), Ja = (e) => e && !!e[pr], Zt = (e, t, r) => {
  if (Ja(e)) {
    const n = e[pr](), { matched: a, selections: i } = n.match(t);
    return a && i && Object.keys(i).forEach((o) => r(o, i[o])), a;
  }
  if (Lo(e)) {
    if (!Lo(t))
      return !1;
    if (Array.isArray(e)) {
      if (!Array.isArray(t))
        return !1;
      let n = [], a = [], i = [];
      for (const o of e.keys()) {
        const u = e[o];
        Ja(u) && u[zb] ? i.push(u) : i.length ? a.push(u) : n.push(u);
      }
      if (i.length) {
        if (i.length > 1)
          throw new Error("Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.");
        if (t.length < n.length + a.length)
          return !1;
        const o = t.slice(0, n.length), u = a.length === 0 ? [] : t.slice(-a.length), s = t.slice(n.length, a.length === 0 ? 1 / 0 : -a.length);
        return n.every((l, c) => Zt(l, o[c], r)) && a.every((l, c) => Zt(l, u[c], r)) && (i.length === 0 || Zt(i[0], s, r));
      }
      return e.length === t.length && e.every((o, u) => Zt(o, t[u], r));
    }
    return Object.keys(e).every((n) => {
      const a = e[n];
      return (n in t || Ja(i = a) && i[pr]().matcherType === "optional") && Zt(a, t[n], r);
      var i;
    });
  }
  return Object.is(t, e);
}, Nr = (e) => {
  var t, r, n;
  return Lo(e) ? Ja(e) ? (t = (r = (n = e[pr]()).getSelectionKeys) == null ? void 0 : r.call(n)) != null ? t : [] : Array.isArray(e) ? fa(e, Nr) : fa(Object.values(e), Nr) : [];
}, fa = (e, t) => e.reduce((r, n) => r.concat(t(n)), []);
function jt(e) {
  return Object.assign(e, { optional: () => Wb(e), and: (t) => qe(e, t), or: (t) => Hb(e, t), select: (t) => t === void 0 ? Ml(e) : Ml(t, e) });
}
function Wb(e) {
  return jt({ [pr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, i) => {
      r[a] = i;
    };
    return t === void 0 ? (Nr(e).forEach((a) => n(a, void 0)), { matched: !0, selections: r }) : { matched: Zt(e, t, n), selections: r };
  }, getSelectionKeys: () => Nr(e), matcherType: "optional" }) });
}
function qe(...e) {
  return jt({ [pr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, i) => {
      r[a] = i;
    };
    return { matched: e.every((a) => Zt(a, t, n)), selections: r };
  }, getSelectionKeys: () => fa(e, Nr), matcherType: "and" }) });
}
function Hb(...e) {
  return jt({ [pr]: () => ({ match: (t) => {
    let r = {};
    const n = (a, i) => {
      r[a] = i;
    };
    return fa(e, Nr).forEach((a) => n(a, void 0)), { matched: e.some((a) => Zt(a, t, n)), selections: r };
  }, getSelectionKeys: () => fa(e, Nr), matcherType: "or" }) });
}
function Re(e) {
  return { [pr]: () => ({ match: (t) => ({ matched: !!e(t) }) }) };
}
function Ml(...e) {
  const t = typeof e[0] == "string" ? e[0] : void 0, r = e.length === 2 ? e[1] : typeof e[0] == "string" ? void 0 : e[0];
  return jt({ [pr]: () => ({ match: (n) => {
    let a = { [t ?? di]: n };
    return { matched: r === void 0 || Zt(r, n, (i, o) => {
      a[i] = o;
    }), selections: a };
  }, getSelectionKeys: () => [t ?? di].concat(r === void 0 ? [] : Nr(r)) }) });
}
function Yt(e) {
  return typeof e == "number";
}
function Hr(e) {
  return typeof e == "string";
}
function Ar(e) {
  return typeof e == "bigint";
}
jt(Re(function(e) {
  return !0;
}));
const qr = (e) => Object.assign(jt(e), { startsWith: (t) => {
  return qr(qe(e, (r = t, Re((n) => Hr(n) && n.startsWith(r)))));
  var r;
}, endsWith: (t) => {
  return qr(qe(e, (r = t, Re((n) => Hr(n) && n.endsWith(r)))));
  var r;
}, minLength: (t) => qr(qe(e, ((r) => Re((n) => Hr(n) && n.length >= r))(t))), maxLength: (t) => qr(qe(e, ((r) => Re((n) => Hr(n) && n.length <= r))(t))), includes: (t) => {
  return qr(qe(e, (r = t, Re((n) => Hr(n) && n.includes(r)))));
  var r;
}, regex: (t) => {
  return qr(qe(e, (r = t, Re((n) => Hr(n) && !!n.match(r)))));
  var r;
} });
qr(Re(Hr));
const Jt = (e) => Object.assign(jt(e), { between: (t, r) => Jt(qe(e, ((n, a) => Re((i) => Yt(i) && n <= i && a >= i))(t, r))), lt: (t) => Jt(qe(e, ((r) => Re((n) => Yt(n) && n < r))(t))), gt: (t) => Jt(qe(e, ((r) => Re((n) => Yt(n) && n > r))(t))), lte: (t) => Jt(qe(e, ((r) => Re((n) => Yt(n) && n <= r))(t))), gte: (t) => Jt(qe(e, ((r) => Re((n) => Yt(n) && n >= r))(t))), int: () => Jt(qe(e, Re((t) => Yt(t) && Number.isInteger(t)))), finite: () => Jt(qe(e, Re((t) => Yt(t) && Number.isFinite(t)))), positive: () => Jt(qe(e, Re((t) => Yt(t) && t > 0))), negative: () => Jt(qe(e, Re((t) => Yt(t) && t < 0))) });
Jt(Re(Yt));
const Sr = (e) => Object.assign(jt(e), { between: (t, r) => Sr(qe(e, ((n, a) => Re((i) => Ar(i) && n <= i && a >= i))(t, r))), lt: (t) => Sr(qe(e, ((r) => Re((n) => Ar(n) && n < r))(t))), gt: (t) => Sr(qe(e, ((r) => Re((n) => Ar(n) && n > r))(t))), lte: (t) => Sr(qe(e, ((r) => Re((n) => Ar(n) && n <= r))(t))), gte: (t) => Sr(qe(e, ((r) => Re((n) => Ar(n) && n >= r))(t))), positive: () => Sr(qe(e, Re((t) => Ar(t) && t > 0))), negative: () => Sr(qe(e, Re((t) => Ar(t) && t < 0))) });
Sr(Re(Ar));
jt(Re(function(e) {
  return typeof e == "boolean";
}));
jt(Re(function(e) {
  return typeof e == "symbol";
}));
jt(Re(function(e) {
  return e == null;
}));
jt(Re(function(e) {
  return e != null;
}));
const _o = { matched: !1, value: void 0 };
function tn(e) {
  return new vi(e, _o);
}
class vi {
  constructor(t, r) {
    this.input = void 0, this.state = void 0, this.input = t, this.state = r;
  }
  with(...t) {
    if (this.state.matched)
      return this;
    const r = t[t.length - 1], n = [t[0]];
    let a;
    t.length === 3 && typeof t[1] == "function" ? a = t[1] : t.length > 2 && n.push(...t.slice(1, t.length - 1));
    let i = !1, o = {};
    const u = (l, c) => {
      i = !0, o[l] = c;
    }, s = !n.some((l) => Zt(l, this.input, u)) || a && !a(this.input) ? _o : { matched: !0, value: r(i ? di in o ? o[di] : o : this.input, this.input) };
    return new vi(this.input, s);
  }
  when(t, r) {
    if (this.state.matched)
      return this;
    const n = !!t(this.input);
    return new vi(this.input, n ? { matched: !0, value: r(this.input, this.input) } : _o);
  }
  otherwise(t) {
    return this.state.matched ? this.state.value : t(this.input);
  }
  exhaustive() {
    if (this.state.matched)
      return this.state.value;
    let t;
    try {
      t = JSON.stringify(this.input);
    } catch {
      t = this.input;
    }
    throw new Error(`Pattern matching error: no pattern matches value ${t}`);
  }
  run() {
    return this.exhaustive();
  }
  returnType() {
    return this;
  }
}
const Mr = {
  isBoldMarkActive(e) {
    const t = h.marks(e);
    return tn(t).with({ bold: !0 }, () => !0).otherwise(() => !1);
  },
  toggleBoldMark(e) {
    const t = Mr.isBoldMarkActive(e);
    tn(t).with(!0, () => {
      h.removeMark(e, "bold");
    }).otherwise(() => {
      h.addMark(e, "bold", !0);
    });
  },
  isParagraphNode(e) {
    const [t] = h.nodes(e, {
      match: (r) => r.type === ut.Paragraph
    });
    return !!t;
  },
  isCheckListNode(e) {
    const [t] = h.nodes(e, {
      match: (r) => r.type === ut.CheckList
    });
    return !!t;
  },
  toggleCheckListNode(e) {
    const t = Mr.isCheckListNode(e);
    let r = !1, n = !1;
    tn(t).with(!0, () => {
      G.setNodes(
        e,
        { type: ut.Paragraph },
        { match: (a) => ae.isElement(a) && h.isBlock(e, a) }
      );
    }).with(!1, () => {
      const { selection: a } = e;
      if (!a)
        throw Error("selection is undefined");
      const i = h.start(e, a), [, o] = h.node(e, i), u = h.end(e, a), [, s] = h.node(e, u), l = h.previous(e, {
        at: o,
        match: (d) => ae.isElement(d)
      });
      if ((!l || l && l[1][0] === 0) && o[0] === 0 && (r = !0), h.next(e, {
        at: s,
        match: (d) => ae.isElement(d)
      }) || (n = !0), !n && !r)
        G.setNodes(
          e,
          { type: ut.CheckList },
          { match: (d) => ae.isElement(d) && h.isBlock(e, d) }
        );
      else if (G.setNodes(
        e,
        { type: ut.CheckList },
        { match: (d) => ae.isElement(d) && h.isBlock(e, d) }
      ), r && G.insertNodes(
        e,
        ko(),
        {
          at: [o[0]]
        }
      ), n) {
        let d = 1;
        r && (d = 2), G.insertNodes(
          e,
          ko(),
          {
            at: [s[0] + d]
          }
        );
      }
    });
  }
}, qb = (e) => {
  const { deleteBackward: t, insertBreak: r } = e;
  return e.deleteBackward = (...n) => {
    const { selection: a } = e;
    if (a && Vb(e)) {
      const [i] = h.nodes(e, {
        match: (o) => !h.isEditor(o) && ae.isElement(o) && o.type === ut.CheckList
      });
      if (i) {
        const [, o] = i, u = h.start(e, o);
        if (be.equals(a.anchor, u)) {
          const s = {
            type: ut.Paragraph
          };
          G.setNodes(e, s, {
            match: (l) => !h.isEditor(l) && ae.isElement(l) && l.type === ut.CheckList
          });
          return;
        }
      }
    }
    t(...n);
  }, e.insertBreak = () => {
    const [n] = h.nodes(e, {
      match: (a) => !h.isEditor(a) && ae.isElement(a) && a.type === ut.CheckList
    });
    if (n) {
      const [, a] = n;
      if (!h.string(e, a)) {
        const o = {
          type: ut.Paragraph
        };
        G.setNodes(e, o, {
          match: (u) => !h.isEditor(u) && ae.isElement(u) && u.type === ut.CheckList
        });
        return;
      }
    }
    r();
  }, e;
}, Ub = () => {
  const [e, t] = Wt(!0);
  return [hr(() => qb(Mb(kb(Lm()))), []), { showPlaceholder: e, handlePlaceholder: (a) => {
  } }];
};
var If = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
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
        t.call(i, u) && i[u] && (o = a(o, u));
      return o;
    }
    function a(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(If);
var Gb = If.exports;
const Le = /* @__PURE__ */ yi(Gb);
function mr() {
  return mr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, mr.apply(this, arguments);
}
var Vo = { exports: {} }, Pe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Il;
function Kb() {
  if (Il)
    return Pe;
  Il = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), m;
  m = Symbol.for("react.module.reference");
  function f(g) {
    if (typeof g == "object" && g !== null) {
      var p = g.$$typeof;
      switch (p) {
        case e:
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
        case t:
          return p;
      }
    }
  }
  return Pe.ContextConsumer = o, Pe.ContextProvider = i, Pe.Element = e, Pe.ForwardRef = s, Pe.Fragment = r, Pe.Lazy = v, Pe.Memo = d, Pe.Portal = t, Pe.Profiler = a, Pe.StrictMode = n, Pe.Suspense = l, Pe.SuspenseList = c, Pe.isAsyncMode = function() {
    return !1;
  }, Pe.isConcurrentMode = function() {
    return !1;
  }, Pe.isContextConsumer = function(g) {
    return f(g) === o;
  }, Pe.isContextProvider = function(g) {
    return f(g) === i;
  }, Pe.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === e;
  }, Pe.isForwardRef = function(g) {
    return f(g) === s;
  }, Pe.isFragment = function(g) {
    return f(g) === r;
  }, Pe.isLazy = function(g) {
    return f(g) === v;
  }, Pe.isMemo = function(g) {
    return f(g) === d;
  }, Pe.isPortal = function(g) {
    return f(g) === t;
  }, Pe.isProfiler = function(g) {
    return f(g) === a;
  }, Pe.isStrictMode = function(g) {
    return f(g) === n;
  }, Pe.isSuspense = function(g) {
    return f(g) === l;
  }, Pe.isSuspenseList = function(g) {
    return f(g) === c;
  }, Pe.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === r || g === a || g === n || g === l || g === c || g === b || typeof g == "object" && g !== null && (g.$$typeof === v || g.$$typeof === d || g.$$typeof === i || g.$$typeof === o || g.$$typeof === s || g.$$typeof === m || g.getModuleId !== void 0);
  }, Pe.typeOf = f, Pe;
}
var Te = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kl;
function Xb() {
  return kl || (kl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), m = !1, f = !1, g = !1, p = !1, C = !1, y;
    y = Symbol.for("react.module.reference");
    function E(Z) {
      return !!(typeof Z == "string" || typeof Z == "function" || Z === r || Z === a || C || Z === n || Z === l || Z === c || p || Z === b || m || f || g || typeof Z == "object" && Z !== null && (Z.$$typeof === v || Z.$$typeof === d || Z.$$typeof === i || Z.$$typeof === o || Z.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Z.$$typeof === y || Z.getModuleId !== void 0));
    }
    function F(Z) {
      if (typeof Z == "object" && Z !== null) {
        var me = Z.$$typeof;
        switch (me) {
          case e:
            var Be = Z.type;
            switch (Be) {
              case r:
              case a:
              case n:
              case l:
              case c:
                return Be;
              default:
                var we = Be && Be.$$typeof;
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
          case t:
            return me;
        }
      }
    }
    var B = o, w = i, $ = e, P = s, T = r, _ = v, j = d, N = t, I = a, R = n, M = l, O = c, k = !1, H = !1;
    function U(Z) {
      return k || (k = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(Z) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(Z) {
      return F(Z) === o;
    }
    function te(Z) {
      return F(Z) === i;
    }
    function S(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === e;
    }
    function V(Z) {
      return F(Z) === s;
    }
    function z(Z) {
      return F(Z) === r;
    }
    function Y(Z) {
      return F(Z) === v;
    }
    function ue(Z) {
      return F(Z) === d;
    }
    function ie(Z) {
      return F(Z) === t;
    }
    function se(Z) {
      return F(Z) === a;
    }
    function de(Z) {
      return F(Z) === n;
    }
    function he(Z) {
      return F(Z) === l;
    }
    function ye(Z) {
      return F(Z) === c;
    }
    Te.ContextConsumer = B, Te.ContextProvider = w, Te.Element = $, Te.ForwardRef = P, Te.Fragment = T, Te.Lazy = _, Te.Memo = j, Te.Portal = N, Te.Profiler = I, Te.StrictMode = R, Te.Suspense = M, Te.SuspenseList = O, Te.isAsyncMode = U, Te.isConcurrentMode = K, Te.isContextConsumer = J, Te.isContextProvider = te, Te.isElement = S, Te.isForwardRef = V, Te.isFragment = z, Te.isLazy = Y, Te.isMemo = ue, Te.isPortal = ie, Te.isProfiler = se, Te.isStrictMode = de, Te.isSuspense = he, Te.isSuspenseList = ye, Te.isValidElementType = E, Te.typeOf = F;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Vo.exports = Kb() : Vo.exports = Xb();
var Za = Vo.exports;
function da(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return re.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(da(n)) : Za.isFragment(n) && n.props ? r = r.concat(da(n.props.children, t)) : r.push(n));
  }), r;
}
var zo = {}, zu = [], Yb = function(t) {
  zu.push(t);
};
function Wu(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = zu.reduce(function(n, a) {
      return a(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Jb(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = zu.reduce(function(n, a) {
      return a(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function kf() {
  zo = {};
}
function Lf(e, t, r) {
  !t && !zo[r] && (e(!1, r), zo[r] = !0);
}
function Ge(e, t) {
  Lf(Wu, e, t);
}
function Zb(e, t) {
  Lf(Jb, e, t);
}
Ge.preMessage = Yb;
Ge.resetWarned = kf;
Ge.noteOnce = Zb;
function je(e) {
  "@babel/helpers - typeof";
  return je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, je(e);
}
function Qb(e, t) {
  if (je(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (je(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _f(e) {
  var t = Qb(e, "string");
  return je(t) == "symbol" ? t : String(t);
}
function W(e, t, r) {
  return t = _f(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ll(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ee(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ll(Object(r), !0).forEach(function(n) {
      W(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Ll(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function eC(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function tC(e) {
  return eC(e) ? e : e instanceof re.Component ? Vc.findDOMNode(e) : null;
}
function Hu(e, t, r) {
  var n = x.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function Vf(e, t) {
  typeof e == "function" ? e(t) : je(e) === "object" && e && "current" in e && (e.current = t);
}
function zf() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(a) {
    return a;
  });
  return n.length <= 1 ? n[0] : function(a) {
    t.forEach(function(i) {
      Vf(i, a);
    });
  };
}
function Wf(e) {
  var t, r, n = Za.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) && n.$$typeof !== Za.ForwardRef || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render) && e.$$typeof !== Za.ForwardRef);
}
function qt(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _l(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, _f(n.key), n);
  }
}
function Ut(e, t, r) {
  return t && _l(e.prototype, t), r && _l(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Wo(e, t) {
  return Wo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, Wo(e, t);
}
function Ca(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Wo(e, t);
}
function Ir(e) {
  return Ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Ir(e);
}
function Si() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Si = function() {
    return !!e;
  })();
}
function Se(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function qu(e, t) {
  if (t && (je(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Se(e);
}
function Uu(e) {
  var t = Si();
  return function() {
    var n = Ir(e), a;
    if (t) {
      var i = Ir(this).constructor;
      a = Reflect.construct(n, arguments, i);
    } else
      a = n.apply(this, arguments);
    return qu(this, a);
  };
}
function Hf(e, t) {
  var r = ee({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
function Ho(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function rC(e) {
  if (Array.isArray(e))
    return Ho(e);
}
function qf(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Gu(e, t) {
  if (e) {
    if (typeof e == "string")
      return Ho(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ho(e, t);
  }
}
function nC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ge(e) {
  return rC(e) || qf(e) || Gu(e) || nC();
}
var Uf = function(t) {
  return +setTimeout(t, 16);
}, Gf = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Uf = function(t) {
  return window.requestAnimationFrame(t);
}, Gf = function(t) {
  return window.cancelAnimationFrame(t);
});
var Vl = 0, Oi = /* @__PURE__ */ new Map();
function Kf(e) {
  Oi.delete(e);
}
var kr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Vl += 1;
  var n = Vl;
  function a(i) {
    if (i === 0)
      Kf(n), t();
    else {
      var o = Uf(function() {
        a(i - 1);
      });
      Oi.set(n, o);
    }
  }
  return a(r), n;
};
kr.cancel = function(e) {
  var t = Oi.get(e);
  return Kf(e), Gf(t);
};
process.env.NODE_ENV !== "production" && (kr.ids = function() {
  return Oi;
});
function Xf(e) {
  if (Array.isArray(e))
    return e;
}
function aC(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, a, i, o, u = [], s = !0, l = !1;
    try {
      if (i = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        s = !1;
      } else
        for (; !(s = (n = i.call(r)).done) && (u.push(n.value), u.length !== t); s = !0)
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
function Yf() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function pe(e, t) {
  return Xf(e) || aC(e, t) || Gu(e, t) || Yf();
}
function va(e) {
  for (var t = 0, r, n = 0, a = e.length; a >= 4; ++n, a -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Er() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function iC(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var zl = "data-rc-order", Wl = "data-rc-priority", oC = "rc-util-key", qo = /* @__PURE__ */ new Map();
function Jf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : oC;
}
function xi(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function uC(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ku(e) {
  return Array.from((qo.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Zf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Er())
    return null;
  var r = t.csp, n = t.prepend, a = t.priority, i = a === void 0 ? 0 : a, o = uC(n), u = o === "prependQueue", s = document.createElement("style");
  s.setAttribute(zl, o), u && i && s.setAttribute(Wl, "".concat(i)), r != null && r.nonce && (s.nonce = r == null ? void 0 : r.nonce), s.innerHTML = e;
  var l = xi(t), c = l.firstChild;
  if (n) {
    if (u) {
      var d = (t.styles || Ku(l)).filter(function(v) {
        if (!["prepend", "prependQueue"].includes(v.getAttribute(zl)))
          return !1;
        var b = Number(v.getAttribute(Wl) || 0);
        return i >= b;
      });
      if (d.length)
        return l.insertBefore(s, d[d.length - 1].nextSibling), s;
    }
    l.insertBefore(s, c);
  } else
    l.appendChild(s);
  return s;
}
function Qf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = xi(t);
  return (t.styles || Ku(r)).find(function(n) {
    return n.getAttribute(Jf(t)) === e;
  });
}
function ed(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Qf(e, t);
  if (r) {
    var n = xi(t);
    n.removeChild(r);
  }
}
function sC(e, t) {
  var r = qo.get(e);
  if (!r || !iC(document, r)) {
    var n = Zf("", t), a = n.parentNode;
    qo.set(e, a), e.removeChild(n);
  }
}
function rn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = xi(r), a = Ku(n), i = ee(ee({}, r), {}, {
    styles: a
  });
  sC(n, i);
  var o = Qf(t, i);
  if (o) {
    var u, s;
    if ((u = i.csp) !== null && u !== void 0 && u.nonce && o.nonce !== ((s = i.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var l;
      o.nonce = (l = i.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return o.innerHTML !== e && (o.innerHTML = e), o;
  }
  var c = Zf(e, i);
  return c.setAttribute(Jf(i), t), c;
}
function lC(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function er(e, t) {
  if (e == null)
    return {};
  var r = lC(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hi(e, t) {
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
    if (i && o && je(i) === "object" && je(o) === "object") {
      var d = Object.keys(i);
      return d.length !== Object.keys(o).length ? !1 : d.every(function(v) {
        return a(i[v], o[v], l);
      });
    }
    return !1;
  }
  return a(e, t);
}
var cC = "%";
function Uo(e) {
  return e.join(cC);
}
var fC = /* @__PURE__ */ function() {
  function e(t) {
    qt(this, e), W(this, "instanceId", void 0), W(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return Ut(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Uo(r));
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
      return this.opUpdate(Uo(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var a = this.cache.get(r), i = n(a);
      i === null ? this.cache.delete(r) : this.cache.set(r, i);
    }
  }]), e;
}(), dC = ["children"], jn = "data-token-hash", Vt = "data-css-hash", vC = "data-cache-path", Rr = "__cssinjs_instance__";
function td() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Vt, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[Rr] = a[Rr] || e, a[Rr] === e && document.head.insertBefore(a, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Vt, "]"))).forEach(function(a) {
      var i = a.getAttribute(Vt);
      if (n[i]) {
        if (a[Rr] === e) {
          var o;
          (o = a.parentNode) === null || o === void 0 || o.removeChild(a);
        }
      } else
        n[i] = !0;
    });
  }
  return new fC(e);
}
var Nn = /* @__PURE__ */ x.createContext({
  hashPriority: "low",
  cache: td(),
  defaultCache: !0
}), hC = function(t) {
  var r = t.children, n = er(t, dC), a = x.useContext(Nn), i = Hu(function() {
    var o = ee({}, a);
    Object.keys(n).forEach(function(s) {
      var l = n[s];
      n[s] !== void 0 && (o[s] = l);
    });
    var u = n.cache;
    return o.cache = o.cache || td(), o.defaultCache = !u && a.defaultCache, o;
  }, [a, n], function(o, u) {
    return !hi(o[0], u[0], !0) || !hi(o[1], u[1], !0);
  });
  return /* @__PURE__ */ x.createElement(Nn.Provider, {
    value: i
  }, r);
};
function gC(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Xu = /* @__PURE__ */ function() {
  function e() {
    qt(this, e), W(this, "cache", void 0), W(this, "keys", void 0), W(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ut(e, [{
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
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
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
          return !gC(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
}();
W(Xu, "MAX_CACHE_SIZE", 20);
W(Xu, "MAX_CACHE_OFFSET", 5);
var Hl = 0, rd = /* @__PURE__ */ function() {
  function e(t) {
    qt(this, e), W(this, "derivatives", void 0), W(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Hl, t.length === 0 && Wu(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Hl += 1;
  }
  return Ut(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, a) {
        return a(r, n);
      }, void 0);
    }
  }]), e;
}(), to = new Xu();
function ha(e) {
  var t = Array.isArray(e) ? e : [e];
  return to.has(t) || to.set(t, new rd(t)), to.get(t);
}
var pC = /* @__PURE__ */ new WeakMap(), ro = {};
function mC(e, t) {
  for (var r = pC, n = 0; n < t.length; n += 1) {
    var a = t[n];
    r.has(a) || r.set(a, /* @__PURE__ */ new WeakMap()), r = r.get(a);
  }
  return r.has(ro) || r.set(ro, e()), r.get(ro);
}
var ql = /* @__PURE__ */ new WeakMap();
function ta(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = ql.get(e) || "";
  return r || (Object.keys(e).forEach(function(n) {
    var a = e[n];
    r += n, a instanceof rd ? r += a.id : a && je(a) === "object" ? r += ta(a, t) : r += a;
  }), t && (r = va(r)), ql.set(e, r)), r;
}
function Ul(e, t) {
  return va("".concat(t, "_").concat(ta(e, !0)));
}
var Go = Er();
function tr(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function gi(e, t, r) {
  var n, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (i)
    return e;
  var o = ee(ee({}, a), {}, (n = {}, W(n, jn, t), W(n, Vt, r), n)), u = Object.keys(o).map(function(s) {
    var l = o[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(u, ">").concat(e, "</style>");
}
var nd = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, bC = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(a) {
    var i = pe(a, 2), o = i[0], u = i[1];
    return "".concat(o, ":").concat(u, ";");
  }).join(""), "}") : "";
}, ad = function(t, r, n) {
  var a = {}, i = {};
  return Object.entries(t).forEach(function(o) {
    var u, s, l = pe(o, 2), c = l[0], d = l[1];
    if (n != null && (u = n.preserve) !== null && u !== void 0 && u[c])
      i[c] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (s = n.ignore) !== null && s !== void 0 && s[c])) {
      var v, b = nd(c, n == null ? void 0 : n.prefix);
      a[b] = typeof d == "number" && !(n != null && (v = n.unitless) !== null && v !== void 0 && v[c]) ? "".concat(d, "px") : String(d), i[c] = "var(".concat(b, ")");
    }
  }), [i, bC(a, r, {
    scope: n == null ? void 0 : n.scope
  })];
}, Gl = process.env.NODE_ENV !== "test" && Er() ? x.useLayoutEffect : x.useEffect, id = function(t, r) {
  var n = x.useRef(!0);
  Gl(function() {
    return t(n.current);
  }, r), Gl(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, Kl = function(t, r) {
  id(function(n) {
    if (!n)
      return t();
  }, r);
}, CC = ee({}, x), Xl = CC.useInsertionEffect, yC = function(t, r, n) {
  x.useMemo(t, n), id(function() {
    return r(!0);
  }, n);
}, DC = Xl ? function(e, t, r) {
  return Xl(function() {
    return e(), t();
  }, r);
} : yC, EC = ee({}, x), wC = EC.useInsertionEffect, FC = function(t) {
  var r = [], n = !1;
  function a(i) {
    if (n) {
      process.env.NODE_ENV !== "production" && Wu(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(i);
  }
  return x.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(i) {
        return i();
      });
    };
  }, t), a;
}, BC = function() {
  return function(t) {
    t();
  };
}, AC = typeof wC < "u" ? FC : BC;
function SC() {
  return !1;
}
var Ko = !1;
function OC() {
  return Ko;
}
const xC = process.env.NODE_ENV === "production" ? SC : OC;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var no = window;
  if (typeof no.webpackHotUpdate == "function") {
    var PC = no.webpackHotUpdate;
    no.webpackHotUpdate = function() {
      return Ko = !0, setTimeout(function() {
        Ko = !1;
      }, 0), PC.apply(void 0, arguments);
    };
  }
}
function Yu(e, t, r, n, a) {
  var i = x.useContext(Nn), o = i.cache, u = [e].concat(ge(t)), s = Uo(u), l = AC([s]), c = xC(), d = function(f) {
    o.opUpdate(s, function(g) {
      var p = g || [void 0, void 0], C = pe(p, 2), y = C[0], E = y === void 0 ? 0 : y, F = C[1], B = F;
      process.env.NODE_ENV !== "production" && F && c && (n == null || n(B, c), B = null);
      var w = B || r(), $ = [E, w];
      return f ? f($) : $;
    });
  };
  x.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var v = o.opGet(s);
  process.env.NODE_ENV !== "production" && !v && (d(), v = o.opGet(s));
  var b = v[1];
  return DC(function() {
    a == null || a(b);
  }, function(m) {
    return d(function(f) {
      var g = pe(f, 2), p = g[0], C = g[1];
      return m && p === 0 && (a == null || a(b)), [p + 1, C];
    }), function() {
      o.opUpdate(s, function(f) {
        var g = f || [], p = pe(g, 2), C = p[0], y = C === void 0 ? 0 : C, E = p[1], F = y - 1;
        return F === 0 ? (l(function() {
          (m || !o.opGet(s)) && (n == null || n(E, !1));
        }), null) : [y - 1, E];
      });
    };
  }, [s]), b;
}
var TC = {}, RC = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Gr = /* @__PURE__ */ new Map();
function $C(e) {
  Gr.set(e, (Gr.get(e) || 0) + 1);
}
function jC(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(jn, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Rr] === t) {
        var a;
        (a = n.parentNode) === null || a === void 0 || a.removeChild(n);
      }
    });
  }
}
var NC = 0;
function MC(e, t) {
  Gr.set(e, (Gr.get(e) || 0) - 1);
  var r = Array.from(Gr.keys()), n = r.filter(function(a) {
    var i = Gr.get(a) || 0;
    return i <= 0;
  });
  r.length - n.length > NC && n.forEach(function(a) {
    jC(a, t), Gr.delete(a);
  });
}
var od = function(t, r, n, a) {
  var i = n.getDerivativeToken(t), o = ee(ee({}, i), r);
  return a && (o = a(o)), o;
}, ud = "token";
function IC(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = st(Nn), a = n.cache.instanceId, i = n.container, o = r.salt, u = o === void 0 ? "" : o, s = r.override, l = s === void 0 ? TC : s, c = r.formatToken, d = r.getComputedToken, v = r.cssVar, b = mC(function() {
    return Object.assign.apply(Object, [{}].concat(ge(t)));
  }, t), m = ta(b), f = ta(l), g = v ? ta(v) : "", p = Yu(ud, [u, e.id, m, f, g], function() {
    var C, y = d ? d(b, l, e) : od(b, l, e, c), E = ee({}, y), F = "";
    if (v) {
      var B = ad(y, v.key, {
        prefix: v.prefix,
        ignore: v.ignore,
        unitless: v.unitless,
        preserve: v.preserve
      }), w = pe(B, 2);
      y = w[0], F = w[1];
    }
    var $ = Ul(y, u);
    y._tokenKey = $, E._tokenKey = Ul(E, u);
    var P = (C = v == null ? void 0 : v.key) !== null && C !== void 0 ? C : $;
    y._themeKey = P, $C(P);
    var T = "".concat(RC, "-").concat(va($));
    return y._hashId = T, [y, T, E, F, (v == null ? void 0 : v.key) || ""];
  }, function(C) {
    MC(C[0]._themeKey, a);
  }, function(C) {
    var y = pe(C, 4), E = y[0], F = y[3];
    if (v && F) {
      var B = rn(F, va("css-variables-".concat(E._themeKey)), {
        mark: Vt,
        prepend: "queue",
        attachTo: i,
        priority: -999
      });
      B[Rr] = a, B.setAttribute(jn, E._themeKey);
    }
  });
  return p;
}
var kC = function(t, r, n) {
  var a = pe(t, 5), i = a[2], o = a[3], u = a[4], s = n || {}, l = s.plain;
  if (!o)
    return null;
  var c = i._tokenKey, d = -999, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, b = gi(o, u, c, v, l);
  return [d, c, b];
}, LC = {
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
}, sd = "comm", ld = "rule", cd = "decl", _C = "@import", VC = "@keyframes", zC = "@layer", fd = Math.abs, Ju = String.fromCharCode;
function dd(e) {
  return e.trim();
}
function Qa(e, t, r) {
  return e.replace(t, r);
}
function WC(e, t, r) {
  return e.indexOf(t, r);
}
function ga(e, t) {
  return e.charCodeAt(t) | 0;
}
function pa(e, t, r) {
  return e.slice(t, r);
}
function dr(e) {
  return e.length;
}
function HC(e) {
  return e.length;
}
function Na(e, t) {
  return t.push(e), e;
}
var Pi = 1, Mn = 1, vd = 0, $t = 0, et = 0, _n = "";
function Zu(e, t, r, n, a, i, o, u) {
  return { value: e, root: t, parent: r, type: n, props: a, children: i, line: Pi, column: Mn, length: o, return: "", siblings: u };
}
function qC() {
  return et;
}
function UC() {
  return et = $t > 0 ? ga(_n, --$t) : 0, Mn--, et === 10 && (Mn = 1, Pi--), et;
}
function zt() {
  return et = $t < vd ? ga(_n, $t++) : 0, Mn++, et === 10 && (Mn = 1, Pi++), et;
}
function nn() {
  return ga(_n, $t);
}
function ei() {
  return $t;
}
function Ti(e, t) {
  return pa(_n, e, t);
}
function Xo(e) {
  switch (e) {
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
function GC(e) {
  return Pi = Mn = 1, vd = dr(_n = e), $t = 0, [];
}
function KC(e) {
  return _n = "", e;
}
function ao(e) {
  return dd(Ti($t - 1, Yo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function XC(e) {
  for (; (et = nn()) && et < 33; )
    zt();
  return Xo(e) > 2 || Xo(et) > 3 ? "" : " ";
}
function YC(e, t) {
  for (; --t && zt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return Ti(e, ei() + (t < 6 && nn() == 32 && zt() == 32));
}
function Yo(e) {
  for (; zt(); )
    switch (et) {
      case e:
        return $t;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Yo(et);
        break;
      case 40:
        e === 41 && Yo(e);
        break;
      case 92:
        zt();
        break;
    }
  return $t;
}
function JC(e, t) {
  for (; zt() && e + et !== 57; )
    if (e + et === 84 && nn() === 47)
      break;
  return "/*" + Ti(t, $t - 1) + "*" + Ju(e === 47 ? e : zt());
}
function ZC(e) {
  for (; !Xo(nn()); )
    zt();
  return Ti(e, $t);
}
function QC(e) {
  return KC(ti("", null, null, null, [""], e = GC(e), 0, [0], e));
}
function ti(e, t, r, n, a, i, o, u, s) {
  for (var l = 0, c = 0, d = o, v = 0, b = 0, m = 0, f = 1, g = 1, p = 1, C = 0, y = "", E = a, F = i, B = n, w = y; g; )
    switch (m = C, C = zt()) {
      case 40:
        if (m != 108 && ga(w, d - 1) == 58) {
          WC(w += Qa(ao(C), "&", "&\f"), "&\f", fd(l ? u[l - 1] : 0)) != -1 && (p = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        w += ao(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        w += XC(m);
        break;
      case 92:
        w += YC(ei() - 1, 7);
        continue;
      case 47:
        switch (nn()) {
          case 42:
          case 47:
            Na(ey(JC(zt(), ei()), t, r, s), s);
            break;
          default:
            w += "/";
        }
        break;
      case 123 * f:
        u[l++] = dr(w) * p;
      case 125 * f:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            g = 0;
          case 59 + c:
            p == -1 && (w = Qa(w, /\f/g, "")), b > 0 && dr(w) - d && Na(b > 32 ? Jl(w + ";", n, r, d - 1, s) : Jl(Qa(w, " ", "") + ";", n, r, d - 2, s), s);
            break;
          case 59:
            w += ";";
          default:
            if (Na(B = Yl(w, t, r, l, c, a, u, y, E = [], F = [], d, i), i), C === 123)
              if (c === 0)
                ti(w, t, B, B, E, i, d, u, F);
              else
                switch (v === 99 && ga(w, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ti(e, B, B, n && Na(Yl(e, B, B, 0, 0, a, u, y, a, E = [], d, F), F), a, F, d, u, n ? E : F);
                    break;
                  default:
                    ti(w, B, B, B, [""], F, 0, u, F);
                }
        }
        l = c = b = 0, f = p = 1, y = w = "", d = o;
        break;
      case 58:
        d = 1 + dr(w), b = m;
      default:
        if (f < 1) {
          if (C == 123)
            --f;
          else if (C == 125 && f++ == 0 && UC() == 125)
            continue;
        }
        switch (w += Ju(C), C * f) {
          case 38:
            p = c > 0 ? 1 : (w += "\f", -1);
            break;
          case 44:
            u[l++] = (dr(w) - 1) * p, p = 1;
            break;
          case 64:
            nn() === 45 && (w += ao(zt())), v = nn(), c = d = dr(y = w += ZC(ei())), C++;
            break;
          case 45:
            m === 45 && dr(w) == 2 && (f = 0);
        }
    }
  return i;
}
function Yl(e, t, r, n, a, i, o, u, s, l, c, d) {
  for (var v = a - 1, b = a === 0 ? i : [""], m = HC(b), f = 0, g = 0, p = 0; f < n; ++f)
    for (var C = 0, y = pa(e, v + 1, v = fd(g = o[f])), E = e; C < m; ++C)
      (E = dd(g > 0 ? b[C] + " " + y : Qa(y, /&\f/g, b[C]))) && (s[p++] = E);
  return Zu(e, t, r, a === 0 ? ld : u, s, l, c, d);
}
function ey(e, t, r, n) {
  return Zu(e, t, r, sd, Ju(qC()), pa(e, 2, -2), 0, n);
}
function Jl(e, t, r, n, a) {
  return Zu(e, t, r, cd, pa(e, 0, n), pa(e, n + 1, -1), n, a);
}
function Jo(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function ty(e, t, r, n) {
  switch (e.type) {
    case zC:
      if (e.children.length)
        break;
    case _C:
    case cd:
      return e.return = e.return || e.value;
    case sd:
      return "";
    case VC:
      return e.return = e.value + "{" + Jo(e.children, n) + "}";
    case ld:
      if (!dr(e.value = e.props.join(",")))
        return "";
  }
  return dr(r = Jo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function hd(e, t) {
  var r = t.path, n = t.parentSelectors;
  Ge(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var ry = function(t, r, n) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || i.indexOf(r) === -1 && !a.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && hd("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, ny = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && hd("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, Zl = "data-ant-cssinjs-cache-path", gd = "_FILE_STYLE__", an, pd = !0;
function ay() {
  if (!an && (an = {}, Er())) {
    var e = document.createElement("div");
    e.className = Zl, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var i = a.split(":"), o = pe(i, 2), u = o[0], s = o[1];
      an[u] = s;
    });
    var r = document.querySelector("style[".concat(Zl, "]"));
    if (r) {
      var n;
      pd = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function iy(e) {
  return ay(), !!an[e];
}
function oy(e) {
  var t = an[e], r = null;
  if (t && Er())
    if (pd)
      r = gd;
    else {
      var n = document.querySelector("style[".concat(Vt, '="').concat(an[e], '"]'));
      n ? r = n.innerHTML : delete an[e];
    }
  return [r, t];
}
var md = "_skip_check_", bd = "_multi_value_";
function ri(e) {
  var t = Jo(QC(e), ty);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function uy(e) {
  return je(e) === "object" && e && (md in e || bd in e);
}
function sy(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), a = r === "low" ? ":where(".concat(n, ")") : n, i = e.split(",").map(function(o) {
    var u, s = o.trim().split(/\s+/), l = s[0] || "", c = ((u = l.match(/^\w+/)) === null || u === void 0 ? void 0 : u[0]) || "";
    return l = "".concat(c).concat(a).concat(l.slice(c.length)), [l].concat(ge(s.slice(1))).join(" ");
  });
  return i.join(",");
}
var ly = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = n.root, i = n.injectHash, o = n.parentSelectors, u = r.hashId, s = r.layer, l = r.path, c = r.hashPriority, d = r.transformers, v = d === void 0 ? [] : d, b = r.linters, m = b === void 0 ? [] : b, f = "", g = {};
  function p(E) {
    var F = E.getName(u);
    if (!g[F]) {
      var B = e(E.style, r, {
        root: !1,
        parentSelectors: o
      }), w = pe(B, 1), $ = w[0];
      g[F] = "@keyframes ".concat(E.getName(u)).concat($);
    }
  }
  function C(E) {
    var F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return E.forEach(function(B) {
      Array.isArray(B) ? C(B, F) : B && F.push(B);
    }), F;
  }
  var y = C(Array.isArray(t) ? t : [t]);
  return y.forEach(function(E) {
    var F = typeof E == "string" && !a ? {} : E;
    if (typeof F == "string")
      f += "".concat(F, `
`);
    else if (F._keyframe)
      p(F);
    else {
      var B = v.reduce(function(w, $) {
        var P;
        return ($ == null || (P = $.visit) === null || P === void 0 ? void 0 : P.call($, w)) || w;
      }, F);
      Object.keys(B).forEach(function(w) {
        var $ = B[w];
        if (je($) === "object" && $ && (w !== "animationName" || !$._keyframe) && !uy($)) {
          var P = !1, T = w.trim(), _ = !1;
          (a || i) && u ? T.startsWith("@") ? P = !0 : T = sy(w, u, c) : a && !u && (T === "&" || T === "") && (T = "", _ = !0);
          var j = e($, r, {
            root: _,
            injectHash: P,
            parentSelectors: [].concat(ge(o), [T])
          }), N = pe(j, 2), I = N[0], R = N[1];
          g = ee(ee({}, g), R), f += "".concat(T).concat(I);
        } else {
          let k = function(H, U) {
            process.env.NODE_ENV !== "production" && (je($) !== "object" || !($ != null && $[md])) && [ry, ny].concat(ge(m)).forEach(function(te) {
              return te(H, U, {
                path: l,
                hashId: u,
                parentSelectors: o
              });
            });
            var K = H.replace(/[A-Z]/g, function(te) {
              return "-".concat(te.toLowerCase());
            }), J = U;
            !LC[H] && typeof J == "number" && J !== 0 && (J = "".concat(J, "px")), H === "animationName" && U !== null && U !== void 0 && U._keyframe && (p(U), J = U.getName(u)), f += "".concat(K, ":").concat(J, ";");
          };
          var M, O = (M = $ == null ? void 0 : $.value) !== null && M !== void 0 ? M : $;
          je($) === "object" && $ !== null && $ !== void 0 && $[bd] && Array.isArray(O) ? O.forEach(function(H) {
            k(w, H);
          }) : k(w, O);
        }
      });
    }
  }), a ? s && (f = "@layer ".concat(s.name, " {").concat(f, "}"), s.dependencies && (g["@layer ".concat(s.name)] = s.dependencies.map(function(E) {
    return "@layer ".concat(E, ", ").concat(s.name, ";");
  }).join(`
`))) : f = "{".concat(f, "}"), [f, g];
};
function Cd(e, t) {
  return va("".concat(e.join("%")).concat(t));
}
function cy() {
  return null;
}
var yd = "style";
function Zo(e, t) {
  var r = e.token, n = e.path, a = e.hashId, i = e.layer, o = e.nonce, u = e.clientOnly, s = e.order, l = s === void 0 ? 0 : s, c = x.useContext(Nn), d = c.autoClear, v = c.mock, b = c.defaultCache, m = c.hashPriority, f = c.container, g = c.ssrInline, p = c.transformers, C = c.linters, y = c.cache, E = c.layer, F = r._tokenKey, B = [F];
  E && B.push("layer"), B.push.apply(B, ge(n));
  var w = Go;
  process.env.NODE_ENV !== "production" && v !== void 0 && (w = v === "client");
  var $ = Yu(
    yd,
    B,
    // Create cache if needed
    function() {
      var N = B.join("|");
      if (iy(N)) {
        var I = oy(N), R = pe(I, 2), M = R[0], O = R[1];
        if (M)
          return [M, F, O, {}, u, l];
      }
      var k = t(), H = ly(k, {
        hashId: a,
        hashPriority: m,
        layer: E ? i : void 0,
        path: n.join("-"),
        transformers: p,
        linters: C
      }), U = pe(H, 2), K = U[0], J = U[1], te = ri(K), S = Cd(B, te);
      return [te, F, S, J, u, l];
    },
    // Remove cache if no need
    function(N, I) {
      var R = pe(N, 3), M = R[2];
      (I || d) && Go && ed(M, {
        mark: Vt
      });
    },
    // Effect: Inject style here
    function(N) {
      var I = pe(N, 4), R = I[0];
      I[1];
      var M = I[2], O = I[3];
      if (w && R !== gd) {
        var k = {
          mark: Vt,
          prepend: E ? !1 : "queue",
          attachTo: f,
          priority: l
        }, H = typeof o == "function" ? o() : o;
        H && (k.csp = {
          nonce: H
        });
        var U = [], K = [];
        Object.keys(O).forEach(function(te) {
          te.startsWith("@layer") ? U.push(te) : K.push(te);
        }), U.forEach(function(te) {
          rn(ri(O[te]), "_layer-".concat(te), ee(ee({}, k), {}, {
            prepend: !0
          }));
        });
        var J = rn(R, M, k);
        J[Rr] = y.instanceId, J.setAttribute(jn, F), process.env.NODE_ENV !== "production" && J.setAttribute(vC, B.join("|")), K.forEach(function(te) {
          rn(ri(O[te]), "_effect-".concat(te), k);
        });
      }
    }
  ), P = pe($, 3), T = P[0], _ = P[1], j = P[2];
  return function(N) {
    var I;
    if (!g || w || !b)
      I = /* @__PURE__ */ x.createElement(cy, null);
    else {
      var R;
      I = /* @__PURE__ */ x.createElement("style", mr({}, (R = {}, W(R, jn, _), W(R, Vt, j), R), {
        dangerouslySetInnerHTML: {
          __html: T
        }
      }));
    }
    return /* @__PURE__ */ x.createElement(x.Fragment, null, I, N);
  };
}
var fy = function(t, r, n) {
  var a = pe(t, 6), i = a[0], o = a[1], u = a[2], s = a[3], l = a[4], c = a[5], d = n || {}, v = d.plain;
  if (l)
    return null;
  var b = i, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  };
  return b = gi(i, o, u, m, v), s && Object.keys(s).forEach(function(f) {
    if (!r[f]) {
      r[f] = !0;
      var g = ri(s[f]), p = gi(g, o, "_effect-".concat(f), m, v);
      f.startsWith("@layer") ? b = p + b : b += p;
    }
  }), [c, u, b];
}, Dd = "cssVar", dy = function(t, r) {
  var n = t.key, a = t.prefix, i = t.unitless, o = t.ignore, u = t.token, s = t.scope, l = s === void 0 ? "" : s, c = st(Nn), d = c.cache.instanceId, v = c.container, b = u._tokenKey, m = [].concat(ge(t.path), [n, l, b]), f = Yu(Dd, m, function() {
    var g = r(), p = ad(g, n, {
      prefix: a,
      unitless: i,
      ignore: o,
      scope: l
    }), C = pe(p, 2), y = C[0], E = C[1], F = Cd(m, E);
    return [y, E, F, n];
  }, function(g) {
    var p = pe(g, 3), C = p[2];
    Go && ed(C, {
      mark: Vt
    });
  }, function(g) {
    var p = pe(g, 3), C = p[1], y = p[2];
    if (C) {
      var E = rn(C, y, {
        mark: Vt,
        prepend: "queue",
        attachTo: v,
        priority: -999
      });
      E[Rr] = d, E.setAttribute(jn, n);
    }
  });
  return f;
}, vy = function(t, r, n) {
  var a = pe(t, 4), i = a[1], o = a[2], u = a[3], s = n || {}, l = s.plain;
  if (!i)
    return null;
  var c = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  }, v = gi(i, u, o, d, l);
  return [c, o, v];
}, Kn;
Kn = {}, W(Kn, yd, fy), W(Kn, ud, kC), W(Kn, Dd, vy);
function mn(e) {
  return e.notSplit = !0, e;
}
mn(["borderTop", "borderBottom"]), mn(["borderTop"]), mn(["borderBottom"]), mn(["borderLeft", "borderRight"]), mn(["borderLeft"]), mn(["borderRight"]);
var Qu = /* @__PURE__ */ rr({});
function hy(e) {
  return Xf(e) || qf(e) || Gu(e) || Yf();
}
function Qt(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function Ed(e, t, r, n) {
  if (!t.length)
    return r;
  var a = hy(t), i = a[0], o = a.slice(1), u;
  return !e && typeof i == "number" ? u = [] : Array.isArray(e) ? u = ge(e) : u = ee({}, e), n && r === void 0 && o.length === 1 ? delete u[i][o[0]] : u[i] = Ed(u[i], o, r, n), u;
}
function kt(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !Qt(e, t.slice(0, -1)) ? e : Ed(e, t, r, n);
}
function gy(e) {
  return je(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ql(e) {
  return Array.isArray(e) ? [] : {};
}
var py = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Bn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = Ql(t[0]);
  return t.forEach(function(a) {
    function i(o, u) {
      var s = new Set(u), l = Qt(a, o), c = Array.isArray(l);
      if (c || gy(l)) {
        if (!s.has(l)) {
          s.add(l);
          var d = Qt(n, o);
          c ? n = kt(n, o, []) : (!d || je(d) !== "object") && (n = kt(n, o, Ql(l))), py(l).forEach(function(v) {
            i([].concat(ge(o), [v]), s);
          });
        }
      } else
        n = kt(n, o, l);
    }
    i([]);
  }), n;
}
function wd() {
}
let fr = null;
function my() {
  fr = null, kf();
}
let es = wd;
process.env.NODE_ENV !== "production" && (es = (e, t, r) => {
  Ge(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && my();
});
const Fd = /* @__PURE__ */ x.createContext({}), Vn = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = x.useContext(Fd), r = (n, a, i) => {
    if (!n)
      if (t === !1 && a === "deprecated") {
        const o = fr;
        fr || (fr = {}), fr[e] = fr[e] || [], fr[e].includes(i || "") || fr[e].push(i || ""), o || console.warn("[antd] There exists deprecated usage in your code:", fr);
      } else
        process.env.NODE_ENV !== "production" && es(n, e, i);
  };
  return r.deprecated = (n, a, i, o) => {
    r(n, "deprecated", `\`${a}\` is deprecated. Please use \`${i}\` instead.${o ? ` ${o}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = wd, e;
}, Ri = es, by = /* @__PURE__ */ rr(void 0);
var Cy = {
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
}, yy = {
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
const Dy = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Bd = Dy, Ey = {
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
  }, yy),
  timePickerLocale: Object.assign({}, Bd)
}, ec = Ey, yt = "${label} is not a valid ${type}", $i = {
  locale: "en",
  Pagination: Cy,
  DatePicker: ec,
  TimePicker: Bd,
  Calendar: ec,
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
        string: yt,
        method: yt,
        array: yt,
        object: yt,
        number: yt,
        date: yt,
        boolean: yt,
        integer: yt,
        float: yt,
        regexp: yt,
        email: yt,
        url: yt,
        hex: yt
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
Object.assign({}, $i.Modal);
let ni = [];
const tc = () => ni.reduce((e, t) => Object.assign(Object.assign({}, e), t), $i.Modal);
function wy(e) {
  if (e) {
    const t = Object.assign({}, e);
    return ni.push(t), tc(), () => {
      ni = ni.filter((r) => r !== t), tc();
    };
  }
  Object.assign({}, $i.Modal);
}
const Fy = /* @__PURE__ */ rr(void 0), Ad = Fy, Sd = "internalMark", Od = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const i = Vn("LocaleProvider");
    process.env.NODE_ENV !== "production" && i(n === Sd, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  x.useEffect(() => wy(t && t.Modal), [t]);
  const a = x.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ x.createElement(Ad.Provider, {
    value: a
  }, r);
};
process.env.NODE_ENV !== "production" && (Od.displayName = "LocaleProvider");
const By = Od;
function it(e, t) {
  Ay(e) && (e = "100%");
  var r = Sy(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function Ma(e) {
  return Math.min(1, Math.max(0, e));
}
function Ay(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function Sy(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function xd(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function Ia(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function Xr(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function Oy(e, t, r) {
  return {
    r: it(e, 255) * 255,
    g: it(t, 255) * 255,
    b: it(r, 255) * 255
  };
}
function rc(e, t, r) {
  e = it(e, 255), t = it(t, 255), r = it(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), i = 0, o = 0, u = (n + a) / 2;
  if (n === a)
    o = 0, i = 0;
  else {
    var s = n - a;
    switch (o = u > 0.5 ? s / (2 - n - a) : s / (n + a), n) {
      case e:
        i = (t - r) / s + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / s + 2;
        break;
      case r:
        i = (e - t) / s + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: o, l: u };
}
function io(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function xy(e, t, r) {
  var n, a, i;
  if (e = it(e, 360), t = it(t, 100), r = it(r, 100), t === 0)
    a = r, i = r, n = r;
  else {
    var o = r < 0.5 ? r * (1 + t) : r + t - r * t, u = 2 * r - o;
    n = io(u, o, e + 1 / 3), a = io(u, o, e), i = io(u, o, e - 1 / 3);
  }
  return { r: n * 255, g: a * 255, b: i * 255 };
}
function Qo(e, t, r) {
  e = it(e, 255), t = it(t, 255), r = it(r, 255);
  var n = Math.max(e, t, r), a = Math.min(e, t, r), i = 0, o = n, u = n - a, s = n === 0 ? 0 : u / n;
  if (n === a)
    i = 0;
  else {
    switch (n) {
      case e:
        i = (t - r) / u + (t < r ? 6 : 0);
        break;
      case t:
        i = (r - e) / u + 2;
        break;
      case r:
        i = (e - t) / u + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s, v: o };
}
function Py(e, t, r) {
  e = it(e, 360) * 6, t = it(t, 100), r = it(r, 100);
  var n = Math.floor(e), a = e - n, i = r * (1 - t), o = r * (1 - a * t), u = r * (1 - (1 - a) * t), s = n % 6, l = [r, o, i, i, u, r][s], c = [u, r, r, o, i, i][s], d = [i, i, u, r, r, o][s];
  return { r: l * 255, g: c * 255, b: d * 255 };
}
function eu(e, t, r, n) {
  var a = [
    Xr(Math.round(e).toString(16)),
    Xr(Math.round(t).toString(16)),
    Xr(Math.round(r).toString(16))
  ];
  return n && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function Ty(e, t, r, n, a) {
  var i = [
    Xr(Math.round(e).toString(16)),
    Xr(Math.round(t).toString(16)),
    Xr(Math.round(r).toString(16)),
    Xr(Ry(n))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function Ry(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function nc(e) {
  return Et(e) / 255;
}
function Et(e) {
  return parseInt(e, 16);
}
function $y(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var tu = {
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
function Dn(e) {
  var t = { r: 0, g: 0, b: 0 }, r = 1, n = null, a = null, i = null, o = !1, u = !1;
  return typeof e == "string" && (e = My(e)), typeof e == "object" && (sr(e.r) && sr(e.g) && sr(e.b) ? (t = Oy(e.r, e.g, e.b), o = !0, u = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : sr(e.h) && sr(e.s) && sr(e.v) ? (n = Ia(e.s), a = Ia(e.v), t = Py(e.h, n, a), o = !0, u = "hsv") : sr(e.h) && sr(e.s) && sr(e.l) && (n = Ia(e.s), i = Ia(e.l), t = xy(e.h, n, i), o = !0, u = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = xd(r), {
    ok: o,
    format: e.format || u,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: r
  };
}
var jy = "[-\\+]?\\d+%?", Ny = "[-\\+]?\\d*\\.\\d+%?", $r = "(?:".concat(Ny, ")|(?:").concat(jy, ")"), oo = "[\\s|\\(]+(".concat($r, ")[,|\\s]+(").concat($r, ")[,|\\s]+(").concat($r, ")\\s*\\)?"), uo = "[\\s|\\(]+(".concat($r, ")[,|\\s]+(").concat($r, ")[,|\\s]+(").concat($r, ")[,|\\s]+(").concat($r, ")\\s*\\)?"), It = {
  CSS_UNIT: new RegExp($r),
  rgb: new RegExp("rgb" + oo),
  rgba: new RegExp("rgba" + uo),
  hsl: new RegExp("hsl" + oo),
  hsla: new RegExp("hsla" + uo),
  hsv: new RegExp("hsv" + oo),
  hsva: new RegExp("hsva" + uo),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function My(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (tu[e])
    e = tu[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var r = It.rgb.exec(e);
  return r ? { r: r[1], g: r[2], b: r[3] } : (r = It.rgba.exec(e), r ? { r: r[1], g: r[2], b: r[3], a: r[4] } : (r = It.hsl.exec(e), r ? { h: r[1], s: r[2], l: r[3] } : (r = It.hsla.exec(e), r ? { h: r[1], s: r[2], l: r[3], a: r[4] } : (r = It.hsv.exec(e), r ? { h: r[1], s: r[2], v: r[3] } : (r = It.hsva.exec(e), r ? { h: r[1], s: r[2], v: r[3], a: r[4] } : (r = It.hex8.exec(e), r ? {
    r: Et(r[1]),
    g: Et(r[2]),
    b: Et(r[3]),
    a: nc(r[4]),
    format: t ? "name" : "hex8"
  } : (r = It.hex6.exec(e), r ? {
    r: Et(r[1]),
    g: Et(r[2]),
    b: Et(r[3]),
    format: t ? "name" : "hex"
  } : (r = It.hex4.exec(e), r ? {
    r: Et(r[1] + r[1]),
    g: Et(r[2] + r[2]),
    b: Et(r[3] + r[3]),
    a: nc(r[4] + r[4]),
    format: t ? "name" : "hex8"
  } : (r = It.hex3.exec(e), r ? {
    r: Et(r[1] + r[1]),
    g: Et(r[2] + r[2]),
    b: Et(r[3] + r[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function sr(e) {
  return !!It.CSS_UNIT.exec(String(e));
}
var vt = (
  /** @class */
  function() {
    function e(t, r) {
      t === void 0 && (t = ""), r === void 0 && (r = {});
      var n;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = $y(t)), this.originalInput = t;
      var a = Dn(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : a.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), r, n, a, i = t.r / 255, o = t.g / 255, u = t.b / 255;
      return i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), o <= 0.03928 ? n = o / 12.92 : n = Math.pow((o + 0.055) / 1.055, 2.4), u <= 0.03928 ? a = u / 12.92 : a = Math.pow((u + 0.055) / 1.055, 2.4), 0.2126 * r + 0.7152 * n + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = xd(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = Qo(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = Qo(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = rc(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = rc(this.r, this.g, this.b), r = Math.round(t.h * 360), n = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(a, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), eu(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), Ty(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), r = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(r) {
        return "".concat(Math.round(it(r, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(r) {
        return Math.round(it(r, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + eu(this.r, this.g, this.b, !1), r = 0, n = Object.entries(tu); r < n.length; r++) {
        var a = n[r], i = a[0], o = a[1];
        if (t === o)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var r = !!t;
      t = t ?? this.format;
      var n = !1, a = this.a < 1 && this.a >= 0, i = !r && a && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l += t / 100, r.l = Ma(r.l), new e(r);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var r = this.toRgb();
      return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.l -= t / 100, r.l = Ma(r.l), new e(r);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s -= t / 100, r.s = Ma(r.s), new e(r);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var r = this.toHsl();
      return r.s += t / 100, r.s = Ma(r.s), new e(r);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var r = this.toHsl(), n = (r.h + t) % 360;
      return r.h = n < 0 ? 360 + n : n, new e(r);
    }, e.prototype.mix = function(t, r) {
      r === void 0 && (r = 50);
      var n = this.toRgb(), a = new e(t).toRgb(), i = r / 100, o = {
        r: (a.r - n.r) * i + n.r,
        g: (a.g - n.g) * i + n.g,
        b: (a.b - n.b) * i + n.b,
        a: (a.a - n.a) * i + n.a
      };
      return new e(o);
    }, e.prototype.analogous = function(t, r) {
      t === void 0 && (t = 6), r === void 0 && (r = 30);
      var n = this.toHsl(), a = 360 / r, i = [this];
      for (n.h = (n.h - (a * t >> 1) + 720) % 360; --t; )
        n.h = (n.h + a) % 360, i.push(new e(n));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var r = this.toHsv(), n = r.h, a = r.s, i = r.v, o = [], u = 1 / t; t--; )
        o.push(new e({ h: n, s: a, v: i })), i = (i + u) % 1;
      return o;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), r = t.h;
      return [
        this,
        new e({ h: (r + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (r + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var r = this.toRgb(), n = new e(t).toRgb(), a = r.a + n.a * (1 - r.a);
      return new e({
        r: (r.r * r.a + n.r * n.a * (1 - r.a)) / a,
        g: (r.g * r.a + n.g * n.a * (1 - r.a)) / a,
        b: (r.b * r.a + n.b * n.a * (1 - r.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var r = this.toHsl(), n = r.h, a = [this], i = 360 / t, o = 1; o < t; o++)
        a.push(new e({ h: (n + o * i) % 360, s: r.s, l: r.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), ka = 2, ac = 0.16, Iy = 0.05, ky = 0.05, Ly = 0.15, Pd = 5, Td = 4, _y = [{
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
function ic(e) {
  var t = e.r, r = e.g, n = e.b, a = Qo(t, r, n);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function La(e) {
  var t = e.r, r = e.g, n = e.b;
  return "#".concat(eu(t, r, n, !1));
}
function Vy(e, t, r) {
  var n = r / 100, a = {
    r: (t.r - e.r) * n + e.r,
    g: (t.g - e.g) * n + e.g,
    b: (t.b - e.b) * n + e.b
  };
  return a;
}
function oc(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - ka * t : Math.round(e.h) + ka * t : n = r ? Math.round(e.h) + ka * t : Math.round(e.h) - ka * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function uc(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - ac * t : t === Td ? n = e.s + ac : n = e.s + Iy * t, n > 1 && (n = 1), r && t === Pd && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Number(n.toFixed(2));
}
function sc(e, t, r) {
  var n;
  return r ? n = e.v + ky * t : n = e.v - Ly * t, n > 1 && (n = 1), Number(n.toFixed(2));
}
function br(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = Dn(e), a = Pd; a > 0; a -= 1) {
    var i = ic(n), o = La(Dn({
      h: oc(i, a, !0),
      s: uc(i, a, !0),
      v: sc(i, a, !0)
    }));
    r.push(o);
  }
  r.push(La(n));
  for (var u = 1; u <= Td; u += 1) {
    var s = ic(n), l = La(Dn({
      h: oc(s, u),
      s: uc(s, u),
      v: sc(s, u)
    }));
    r.push(l);
  }
  return t.theme === "dark" ? _y.map(function(c) {
    var d = c.index, v = c.opacity, b = La(Vy(Dn(t.backgroundColor || "#141414"), Dn(r[d]), v * 100));
    return b;
  }) : r;
}
var so = {
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
}, ai = {}, lo = {};
Object.keys(so).forEach(function(e) {
  ai[e] = br(so[e]), ai[e].primary = ai[e][5], lo[e] = br(so[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), lo[e].primary = lo[e][5];
});
var zy = ai.blue;
const Rd = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Wy(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const ts = {
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
}, In = Object.assign(Object.assign({}, ts), {
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
function $d(e, t) {
  let {
    generateColorPalettes: r,
    generateNeutralColorPalettes: n
  } = t;
  const {
    colorSuccess: a,
    colorWarning: i,
    colorError: o,
    colorInfo: u,
    colorPrimary: s,
    colorBgBase: l,
    colorTextBase: c
  } = e, d = r(s), v = r(a), b = r(i), m = r(o), f = r(u), g = n(l, c), p = e.colorLink || e.colorInfo, C = r(p);
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
    colorWarningBg: b[1],
    colorWarningBgHover: b[2],
    colorWarningBorder: b[3],
    colorWarningBorderHover: b[4],
    colorWarningHover: b[4],
    colorWarning: b[6],
    colorWarningActive: b[7],
    colorWarningTextHover: b[8],
    colorWarningText: b[9],
    colorWarningTextActive: b[10],
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
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new vt("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Hy = (e) => {
  let t = e, r = e, n = e, a = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? a = 4 : e >= 8 && (a = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: a
  };
};
function qy(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: a
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: a + 1
  }, Hy(n));
}
const lr = (e, t) => new vt(e).setAlpha(t).toRgbString(), Xn = (e, t) => new vt(e).darken(t).toHexString(), Uy = (e) => {
  const t = br(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Gy = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: lr(n, 0.88),
    colorTextSecondary: lr(n, 0.65),
    colorTextTertiary: lr(n, 0.45),
    colorTextQuaternary: lr(n, 0.25),
    colorFill: lr(n, 0.15),
    colorFillSecondary: lr(n, 0.06),
    colorFillTertiary: lr(n, 0.04),
    colorFillQuaternary: lr(n, 0.02),
    colorBgLayout: Xn(r, 4),
    colorBgContainer: Xn(r, 0),
    colorBgElevated: Xn(r, 0),
    colorBgSpotlight: lr(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Xn(r, 15),
    colorBorderSecondary: Xn(r, 6)
  };
};
function ii(e) {
  return (e + 8) / e;
}
function Ky(e) {
  const t = new Array(10).fill(null).map((r, n) => {
    const a = n - 1, i = e * Math.pow(2.71828, a / 5), o = n > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(o / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: ii(r)
  }));
}
const jd = (e) => {
  const t = Ky(e), r = t.map((c) => c.size), n = t.map((c) => c.lineHeight), a = r[1], i = r[0], o = r[2], u = n[1], s = n[0], l = n[2];
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
function ya(e) {
  const t = Object.keys(ts).map((r) => {
    const n = br(e[r]);
    return new Array(10).fill(1).reduce((a, i, o) => (a[`${r}-${o + 1}`] = n[o], a[`${r}${o + 1}`] = n[o], a), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), $d(e, {
    generateColorPalettes: Uy,
    generateNeutralColorPalettes: Gy
  })), jd(e.fontSize)), Wy(e)), Rd(e)), qy(e));
}
const Nd = ha(ya), pi = {
  token: In,
  override: {
    override: In
  },
  hashed: !0
}, Md = /* @__PURE__ */ re.createContext(pi), Id = "anticon", Xy = (e, t) => t || (e ? `ant-${e}` : "ant"), Nt = /* @__PURE__ */ x.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Xy,
  iconPrefixCls: Id
}), Yy = `-ant-${Date.now()}-${Math.random()}`;
function Jy(e, t) {
  const r = {}, n = (o, u) => {
    let s = o.clone();
    return s = (u == null ? void 0 : u(s)) || s, s.toRgbString();
  }, a = (o, u) => {
    const s = new vt(o), l = br(s.toRgbString());
    r[`${u}-color`] = n(s), r[`${u}-color-disabled`] = l[1], r[`${u}-color-hover`] = l[4], r[`${u}-color-active`] = l[6], r[`${u}-color-outline`] = s.clone().setAlpha(0.2).toRgbString(), r[`${u}-color-deprecated-bg`] = l[0], r[`${u}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    a(t.primaryColor, "primary");
    const o = new vt(t.primaryColor), u = br(o.toRgbString());
    u.forEach((l, c) => {
      r[`primary-${c + 1}`] = l;
    }), r["primary-color-deprecated-l-35"] = n(o, (l) => l.lighten(35)), r["primary-color-deprecated-l-20"] = n(o, (l) => l.lighten(20)), r["primary-color-deprecated-t-20"] = n(o, (l) => l.tint(20)), r["primary-color-deprecated-t-50"] = n(o, (l) => l.tint(50)), r["primary-color-deprecated-f-12"] = n(o, (l) => l.setAlpha(l.getAlpha() * 0.12));
    const s = new vt(u[0]);
    r["primary-color-active-deprecated-f-30"] = n(s, (l) => l.setAlpha(l.getAlpha() * 0.3)), r["primary-color-active-deprecated-d-02"] = n(s, (l) => l.darken(2));
  }
  return t.successColor && a(t.successColor, "success"), t.warningColor && a(t.warningColor, "warning"), t.errorColor && a(t.errorColor, "error"), t.infoColor && a(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((o) => `--${e}-${o}: ${r[o]};`).join(`
`)}
  }
  `.trim();
}
function Zy(e, t) {
  const r = Jy(e, t);
  Er() ? rn(r, `${Yy}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ri(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const ru = /* @__PURE__ */ x.createContext(!1), Qy = (e) => {
  let {
    children: t,
    disabled: r
  } = e;
  const n = x.useContext(ru);
  return /* @__PURE__ */ x.createElement(ru.Provider, {
    value: r ?? n
  }, t);
}, rs = ru, nu = /* @__PURE__ */ x.createContext(void 0), eD = (e) => {
  let {
    children: t,
    size: r
  } = e;
  const n = x.useContext(nu);
  return /* @__PURE__ */ x.createElement(nu.Provider, {
    value: r || n
  }, t);
}, ji = nu;
function tD() {
  const e = st(rs), t = st(ji);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
const rD = "5.13.3";
function co(e) {
  return e >= 0 && e <= 255;
}
function _a(e, t) {
  const {
    r,
    g: n,
    b: a,
    a: i
  } = new vt(e).toRgb();
  if (i < 1)
    return e;
  const {
    r: o,
    g: u,
    b: s
  } = new vt(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const c = Math.round((r - o * (1 - l)) / l), d = Math.round((n - u * (1 - l)) / l), v = Math.round((a - s * (1 - l)) / l);
    if (co(c) && co(d) && co(v))
      return new vt({
        r: c,
        g: d,
        b: v,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new vt({
    r,
    g: n,
    b: a,
    a: 1
  }).toRgbString();
}
var nD = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function ns(e) {
  const {
    override: t
  } = e, r = nD(e, ["override"]), n = Object.assign({}, t);
  Object.keys(In).forEach((v) => {
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
    colorSplit: _a(a.colorBorderSecondary, a.colorBgContainer),
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
    colorErrorOutline: _a(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: _a(a.colorWarningBg, a.colorBgContainer),
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
    controlOutline: _a(a.colorPrimaryBg, a.colorBgContainer),
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
      0 1px 2px -2px ${new vt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new vt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new vt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var lc = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const kd = {
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
}, Ld = {
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
}, aD = {
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
}, _d = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: a
  } = t, i = lc(t, ["override"]);
  let o = Object.assign(Object.assign({}, n), {
    override: a
  });
  return o = ns(o), i && Object.entries(i).forEach((u) => {
    let [s, l] = u;
    const {
      theme: c
    } = l, d = lc(l, ["theme"]);
    let v = d;
    c && (v = _d(Object.assign(Object.assign({}, o), d), {
      override: d
    }, c)), o[s] = v;
  }), o;
};
function Cr() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: a
  } = re.useContext(Md), i = `${rD}-${t || ""}`, o = r || Nd, [u, s, l] = IC(o, [In, e], {
    salt: i,
    override: n,
    getComputedToken: _d,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: ns,
    cssVar: a && {
      prefix: a.prefix,
      key: a.key,
      unitless: kd,
      ignore: Ld,
      preserve: aD
    }
  });
  return [o, l, t ? s : "", u, a];
}
function au(e) {
  var t = x.useRef();
  t.current = e;
  var r = x.useCallback(function() {
    for (var n, a = arguments.length, i = new Array(a), o = 0; o < a; o++)
      i[o] = arguments[o];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(i));
  }, []);
  return r;
}
function xn(e) {
  var t = x.useRef(!1), r = x.useState(e), n = pe(r, 2), a = n[0], i = n[1];
  x.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function o(u, s) {
    s && t.current || i(u);
  }
  return [a, o];
}
function fo(e) {
  return e !== void 0;
}
function iD(e, t) {
  var r = t || {}, n = r.defaultValue, a = r.value, i = r.onChange, o = r.postState, u = xn(function() {
    return fo(a) ? a : fo(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), s = pe(u, 2), l = s[0], c = s[1], d = a !== void 0 ? a : l, v = o ? o(d) : d, b = au(i), m = xn([d]), f = pe(m, 2), g = f[0], p = f[1];
  Kl(function() {
    var y = g[0];
    l !== y && b(l, y);
  }, [g]), Kl(function() {
    fo(a) || c(a);
  }, [a]);
  var C = au(function(y, E) {
    c(y, E), p([d], E);
  });
  return [v, C];
}
const vo = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: e.colorText,
    fontSize: e.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: e.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: t ? "inherit" : e.fontFamily
  };
}, oD = () => ({
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
}), uD = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), sD = (e, t) => {
  const {
    fontFamily: r,
    fontSize: n
  } = e, a = `[class^="${t}"], [class*=" ${t}"]`;
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
}, Vd = (e) => ({
  outline: `${tr(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: 1,
  transition: "outline-offset 0s, outline 0s"
}), lD = (e) => ({
  "&:focus-visible": Object.assign({}, Vd(e))
});
let cD = /* @__PURE__ */ Ut(function e() {
  qt(this, e);
});
const zd = cD;
function fD(e, t, r) {
  return t = Ir(t), qu(e, Si() ? Reflect.construct(t, r || [], Ir(e).constructor) : t.apply(e, r));
}
let dD = /* @__PURE__ */ function(e) {
  Ca(t, e);
  function t(r) {
    var n;
    return qt(this, t), n = fD(this, t), n.result = 0, r instanceof t ? n.result = r.result : typeof r == "number" && (n.result = r), n;
  }
  return Ut(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result += n.result : typeof n == "number" && (this.result += n), this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result -= n.result : typeof n == "number" && (this.result -= n), this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return n instanceof t ? this.result *= n.result : typeof n == "number" && (this.result *= n), this;
    }
  }, {
    key: "div",
    value: function(n) {
      return n instanceof t ? this.result /= n.result : typeof n == "number" && (this.result /= n), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), t;
}(zd);
function vD(e, t, r) {
  return t = Ir(t), qu(e, Si() ? Reflect.construct(t, r || [], Ir(e).constructor) : t.apply(e, r));
}
const Wd = "CALC_UNIT";
function ho(e) {
  return typeof e == "number" ? `${e}${Wd}` : e;
}
let hD = /* @__PURE__ */ function(e) {
  Ca(t, e);
  function t(r) {
    var n;
    return qt(this, t), n = vD(this, t), n.result = "", r instanceof t ? n.result = `(${r.result})` : typeof r == "number" ? n.result = ho(r) : typeof r == "string" && (n.result = r), n;
  }
  return Ut(t, [{
    key: "add",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} + ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} + ${ho(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(n) {
      return n instanceof t ? this.result = `${this.result} - ${n.getResult()}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} - ${ho(n)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof t ? this.result = `${this.result} * ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} * ${n}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(n) {
      return this.lowPriority && (this.result = `(${this.result})`), n instanceof t ? this.result = `${this.result} / ${n.getResult(!0)}` : (typeof n == "number" || typeof n == "string") && (this.result = `${this.result} / ${n}`), this.lowPriority = !1, this;
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
      } = n || {}, i = new RegExp(`${Wd}`, "g");
      return this.result = this.result.replace(i, a ? "px" : ""), typeof this.lowPriority < "u" ? `calc(${this.result})` : this.result;
    }
  }]), t;
}(zd);
const gD = (e) => {
  const t = e === "css" ? hD : dD;
  return (r) => new t(r);
};
function pD(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `max(${r.map((a) => tr(a)).join(",")})`;
    },
    min: function() {
      for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
        r[n] = arguments[n];
      return `min(${r.map((a) => tr(a)).join(",")})`;
    }
  };
}
const Hd = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u";
let iu = !0;
function Lr() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!Hd)
    return Object.assign.apply(Object, [{}].concat(t));
  iu = !1;
  const n = {};
  return t.forEach((a) => {
    Object.keys(a).forEach((o) => {
      Object.defineProperty(n, o, {
        configurable: !0,
        enumerable: !0,
        get: () => a[o]
      });
    });
  }), iu = !0, n;
}
const cc = {};
function mD() {
}
const bD = (e) => {
  let t, r = e, n = mD;
  return Hd && typeof Proxy < "u" && (t = /* @__PURE__ */ new Set(), r = new Proxy(e, {
    get(a, i) {
      return iu && t.add(i), a[i];
    }
  }), n = (a, i) => {
    var o;
    cc[a] = {
      global: Array.from(t),
      component: Object.assign(Object.assign({}, (o = cc[a]) === null || o === void 0 ? void 0 : o.component), i)
    };
  }), {
    token: r,
    keys: t,
    flush: n
  };
}, qd = (e, t) => {
  const [r, n] = Cr();
  return Zo({
    theme: r,
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t == null ? void 0 : t.nonce
  }, () => [{
    [`.${e}`]: Object.assign(Object.assign({}, oD()), {
      [`.${e} .${e}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Ud = (e, t, r) => {
  var n;
  return typeof r == "function" ? r(Lr(t, (n = t[e]) !== null && n !== void 0 ? n : {})) : r ?? {};
}, Gd = (e, t, r, n) => {
  const a = Object.assign({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    const {
      deprecatedTokens: o
    } = n;
    o.forEach((u) => {
      let [s, l] = u;
      var c;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Ge(!(a != null && a[s]), `Component Token \`${String(s)}\` of ${e} is deprecated. Please use \`${String(l)}\` instead.`), (a != null && a[s] || a != null && a[l]) && ((c = a[l]) !== null && c !== void 0 || (a[l] = a == null ? void 0 : a[s]));
    });
  }
  const i = Object.assign(Object.assign({}, r), a);
  return Object.keys(i).forEach((o) => {
    i[o] === t[o] && delete i[o];
  }), i;
}, CD = (e, t) => `${[t, e.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function as(e, t, r) {
  let n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const a = Array.isArray(e) ? e : [e, e], [i] = a, o = a.join("-");
  return (u) => {
    const [s, l, c, d, v] = Cr(), {
      getPrefixCls: b,
      iconPrefixCls: m,
      csp: f
    } = st(Nt), g = b(), p = v ? "css" : "js", C = gD(p), {
      max: y,
      min: E
    } = pD(p), F = {
      theme: s,
      token: d,
      hashId: c,
      nonce: () => f == null ? void 0 : f.nonce,
      clientOnly: n.clientOnly,
      // antd is always at top of styles
      order: n.order || -999
    };
    return Zo(Object.assign(Object.assign({}, F), {
      clientOnly: !1,
      path: ["Shared", g]
    }), () => [{
      // Link
      "&": uD(d)
    }]), qd(m, f), [Zo(Object.assign(Object.assign({}, F), {
      path: [o, u, m]
    }), () => {
      if (n.injectStyle === !1)
        return [];
      const {
        token: w,
        flush: $
      } = bD(d), P = Ud(i, l, r), T = `.${u}`, _ = Gd(i, l, P, {
        deprecatedTokens: n.deprecatedTokens
      });
      v && Object.keys(P).forEach((I) => {
        P[I] = `var(${nd(I, CD(i, v.prefix))})`;
      });
      const j = Lr(w, {
        componentCls: T,
        prefixCls: u,
        iconCls: `.${m}`,
        antCls: `.${g}`,
        calc: C,
        max: y,
        min: E
      }, v ? P : _), N = t(j, {
        hashId: c,
        prefixCls: u,
        rootPrefixCls: g,
        iconPrefixCls: m
      });
      return $(i, _), [n.resetStyle === !1 ? null : sD(j, u), N];
    }), c];
  };
}
const yD = (e, t, r, n) => {
  const a = as(e, t, r, Object.assign({
    resetStyle: !1,
    // Sub Style should default after root one
    order: -998
  }, n)), i = (o) => {
    let {
      prefixCls: u
    } = o;
    return a(u), null;
  };
  return process.env.NODE_ENV !== "production" && (i.displayName = `SubStyle_${Array.isArray(e) ? e.join(".") : e}`), i;
}, DD = (e, t, r) => {
  function n(l) {
    return `${e}${l.slice(0, 1).toUpperCase()}${l.slice(1)}`;
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
    const [, v] = Cr();
    return dy({
      path: [e],
      prefix: d.prefix,
      key: d == null ? void 0 : d.key,
      unitless: Object.assign(Object.assign({}, kd), o),
      ignore: Ld,
      token: v,
      scope: c
    }, () => {
      const b = Ud(e, v, t), m = Gd(e, v, b, {
        deprecatedTokens: r == null ? void 0 : r.deprecatedTokens
      });
      return Object.keys(b).forEach((f) => {
        m[n(f)] = m[f], delete m[f];
      }), m;
    }), null;
  };
  return (l) => {
    const [, , , , c] = Cr();
    return [(d) => i && c ? /* @__PURE__ */ re.createElement(re.Fragment, null, /* @__PURE__ */ re.createElement(u, {
      rootCls: l,
      cssVar: c,
      component: e
    }), d) : d, c == null ? void 0 : c.key];
  };
}, is = (e, t, r, n) => {
  const a = as(e, t, r, n), i = DD(Array.isArray(e) ? e[0] : e, r, n);
  return function(o) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o;
    const [, s] = a(o), [l, c] = i(u);
    return [l, s, c];
  };
}, ED = Object.assign({}, x), {
  useId: fc
} = ED, wD = () => "", FD = typeof fc > "u" ? wD : fc;
function BD(e, t) {
  var r;
  const n = Vn("ConfigProvider"), a = e || {}, i = a.inherit === !1 || !t ? pi : t, o = FD();
  if (process.env.NODE_ENV !== "production") {
    const u = a.cssVar || i.cssVar, s = !!(typeof a.cssVar == "object" && (!((r = a.cssVar) === null || r === void 0) && r.key) || o);
    process.env.NODE_ENV !== "production" && n(!u || s, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Hu(() => {
    var u, s;
    if (!e)
      return t;
    const l = Object.assign({}, i.components);
    Object.keys(e.components || {}).forEach((v) => {
      l[v] = Object.assign(Object.assign({}, l[v]), e.components[v]);
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
    return !hi(l, d, !0);
  }));
}
var AD = ["children"], Kd = /* @__PURE__ */ x.createContext({});
function SD(e) {
  var t = e.children, r = er(e, AD);
  return /* @__PURE__ */ x.createElement(Kd.Provider, {
    value: r
  }, t);
}
var OD = /* @__PURE__ */ function(e) {
  Ca(r, e);
  var t = Uu(r);
  function r() {
    return qt(this, r), t.apply(this, arguments);
  }
  return Ut(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(x.Component), Ur = "none", Va = "appear", za = "enter", Wa = "leave", dc = "none", Lt = "prepare", An = "start", Sn = "active", os = "end", Xd = "prepared";
function vc(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function xD(e, t) {
  var r = {
    animationend: vc("Animation", "AnimationEnd"),
    transitionend: vc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var PD = xD(Er(), typeof window < "u" ? window : {}), Yd = {};
if (Er()) {
  var TD = document.createElement("div");
  Yd = TD.style;
}
var Ha = {};
function Jd(e) {
  if (Ha[e])
    return Ha[e];
  var t = PD[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, a = 0; a < n; a += 1) {
      var i = r[a];
      if (Object.prototype.hasOwnProperty.call(t, i) && i in Yd)
        return Ha[e] = t[i], Ha[e];
    }
  return "";
}
var Zd = Jd("animationend"), Qd = Jd("transitionend"), ev = !!(Zd && Qd), hc = Zd || "animationend", gc = Qd || "transitionend";
function pc(e, t) {
  if (!e)
    return null;
  if (je(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const RD = function(e) {
  var t = Ie(), r = Ie(e);
  r.current = e;
  var n = x.useCallback(function(o) {
    r.current(o);
  }, []);
  function a(o) {
    o && (o.removeEventListener(gc, n), o.removeEventListener(hc, n));
  }
  function i(o) {
    t.current && t.current !== o && a(t.current), o && o !== t.current && (o.addEventListener(gc, n), o.addEventListener(hc, n), t.current = o);
  }
  return x.useEffect(function() {
    return function() {
      a(t.current);
    };
  }, []), [i, a];
};
var tv = Er() ? _c : at;
const $D = function() {
  var e = x.useRef(null);
  function t() {
    kr.cancel(e.current);
  }
  function r(n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var i = kr(function() {
      a <= 1 ? n({
        isCanceled: function() {
          return i !== e.current;
        }
      }) : r(n, a - 1);
    });
    e.current = i;
  }
  return x.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var jD = [Lt, An, Sn, os], ND = [Lt, Xd], rv = !1, MD = !0;
function nv(e) {
  return e === Sn || e === os;
}
const ID = function(e, t, r) {
  var n = xn(dc), a = pe(n, 2), i = a[0], o = a[1], u = $D(), s = pe(u, 2), l = s[0], c = s[1];
  function d() {
    o(Lt, !0);
  }
  var v = t ? ND : jD;
  return tv(function() {
    if (i !== dc && i !== os) {
      var b = v.indexOf(i), m = v[b + 1], f = r(i);
      f === rv ? o(m, !0) : m && l(function(g) {
        function p() {
          g.isCanceled() || o(m, !0);
        }
        f === !0 ? p() : Promise.resolve(f).then(p);
      });
    }
  }, [e, i]), x.useEffect(function() {
    return function() {
      c();
    };
  }, []), [d, i];
};
function kD(e, t, r, n) {
  var a = n.motionEnter, i = a === void 0 ? !0 : a, o = n.motionAppear, u = o === void 0 ? !0 : o, s = n.motionLeave, l = s === void 0 ? !0 : s, c = n.motionDeadline, d = n.motionLeaveImmediately, v = n.onAppearPrepare, b = n.onEnterPrepare, m = n.onLeavePrepare, f = n.onAppearStart, g = n.onEnterStart, p = n.onLeaveStart, C = n.onAppearActive, y = n.onEnterActive, E = n.onLeaveActive, F = n.onAppearEnd, B = n.onEnterEnd, w = n.onLeaveEnd, $ = n.onVisibleChanged, P = xn(), T = pe(P, 2), _ = T[0], j = T[1], N = xn(Ur), I = pe(N, 2), R = I[0], M = I[1], O = xn(null), k = pe(O, 2), H = k[0], U = k[1], K = Ie(!1), J = Ie(null);
  function te() {
    return r();
  }
  var S = Ie(!1);
  function V() {
    M(Ur, !0), U(null, !0);
  }
  function z(Fe) {
    var Ce = te();
    if (!(Fe && !Fe.deadline && Fe.target !== Ce)) {
      var ce = S.current, le;
      R === Va && ce ? le = F == null ? void 0 : F(Ce, Fe) : R === za && ce ? le = B == null ? void 0 : B(Ce, Fe) : R === Wa && ce && (le = w == null ? void 0 : w(Ce, Fe)), R !== Ur && ce && le !== !1 && V();
    }
  }
  var Y = RD(z), ue = pe(Y, 1), ie = ue[0], se = function(Ce) {
    var ce, le, xe;
    switch (Ce) {
      case Va:
        return ce = {}, W(ce, Lt, v), W(ce, An, f), W(ce, Sn, C), ce;
      case za:
        return le = {}, W(le, Lt, b), W(le, An, g), W(le, Sn, y), le;
      case Wa:
        return xe = {}, W(xe, Lt, m), W(xe, An, p), W(xe, Sn, E), xe;
      default:
        return {};
    }
  }, de = x.useMemo(function() {
    return se(R);
  }, [R]), he = ID(R, !e, function(Fe) {
    if (Fe === Lt) {
      var Ce = de[Lt];
      return Ce ? Ce(te()) : rv;
    }
    if (me in de) {
      var ce;
      U(((ce = de[me]) === null || ce === void 0 ? void 0 : ce.call(de, te(), null)) || null);
    }
    return me === Sn && (ie(te()), c > 0 && (clearTimeout(J.current), J.current = setTimeout(function() {
      z({
        deadline: !0
      });
    }, c))), me === Xd && V(), MD;
  }), ye = pe(he, 2), Z = ye[0], me = ye[1], Be = nv(me);
  S.current = Be, tv(function() {
    j(t);
    var Fe = K.current;
    K.current = !0;
    var Ce;
    !Fe && t && u && (Ce = Va), Fe && t && i && (Ce = za), (Fe && !t && l || !Fe && d && !t && l) && (Ce = Wa);
    var ce = se(Ce);
    Ce && (e || ce[Lt]) ? (M(Ce), Z()) : M(Ur);
  }, [t]), at(function() {
    // Cancel appear
    (R === Va && !u || // Cancel enter
    R === za && !i || // Cancel leave
    R === Wa && !l) && M(Ur);
  }, [u, i, l]), at(function() {
    return function() {
      K.current = !1, clearTimeout(J.current);
    };
  }, []);
  var we = x.useRef(!1);
  at(function() {
    _ && (we.current = !0), _ !== void 0 && R === Ur && ((we.current || _) && ($ == null || $(_)), we.current = !0);
  }, [_, R]);
  var ze = H;
  return de[Lt] && me === An && (ze = ee({
    transition: "none"
  }, ze)), [R, me, ze, _ ?? t];
}
function LD(e) {
  var t = e;
  je(e) === "object" && (t = e.transitionSupport);
  function r(a, i) {
    return !!(a.motionName && t && i !== !1);
  }
  var n = /* @__PURE__ */ x.forwardRef(function(a, i) {
    var o = a.visible, u = o === void 0 ? !0 : o, s = a.removeOnLeave, l = s === void 0 ? !0 : s, c = a.forceRender, d = a.children, v = a.motionName, b = a.leavedClassName, m = a.eventProps, f = x.useContext(Kd), g = f.motion, p = r(a, g), C = Ie(), y = Ie();
    function E() {
      try {
        return C.current instanceof HTMLElement ? C.current : tC(y.current);
      } catch {
        return null;
      }
    }
    var F = kD(p, u, E, a), B = pe(F, 4), w = B[0], $ = B[1], P = B[2], T = B[3], _ = x.useRef(T);
    T && (_.current = !0);
    var j = x.useCallback(function(U) {
      C.current = U, Vf(i, U);
    }, [i]), N, I = ee(ee({}, m), {}, {
      visible: u
    });
    if (!d)
      N = null;
    else if (w === Ur)
      T ? N = d(ee({}, I), j) : !l && _.current && b ? N = d(ee(ee({}, I), {}, {
        className: b
      }), j) : c || !l && !b ? N = d(ee(ee({}, I), {}, {
        style: {
          display: "none"
        }
      }), j) : N = null;
    else {
      var R, M;
      $ === Lt ? M = "prepare" : nv($) ? M = "active" : $ === An && (M = "start");
      var O = pc(v, "".concat(w, "-").concat(M));
      N = d(ee(ee({}, I), {}, {
        className: Le(pc(v, w), (R = {}, W(R, O, O && M), W(R, v, typeof v == "string"), R)),
        style: P
      }), j);
    }
    if (/* @__PURE__ */ x.isValidElement(N) && Wf(N)) {
      var k = N, H = k.ref;
      H || (N = /* @__PURE__ */ x.cloneElement(N, {
        ref: j
      }));
    }
    return /* @__PURE__ */ x.createElement(OD, {
      ref: y
    }, N);
  });
  return n.displayName = "CSSMotion", n;
}
const us = LD(ev);
var ou = "add", uu = "keep", su = "remove", go = "removed";
function _D(e) {
  var t;
  return e && je(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, ee(ee({}, t), {}, {
    key: String(t.key)
  });
}
function lu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(_D);
}
function VD() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, a = t.length, i = lu(e), o = lu(t);
  i.forEach(function(l) {
    for (var c = !1, d = n; d < a; d += 1) {
      var v = o[d];
      if (v.key === l.key) {
        n < d && (r = r.concat(o.slice(n, d).map(function(b) {
          return ee(ee({}, b), {}, {
            status: ou
          });
        })), n = d), r.push(ee(ee({}, v), {}, {
          status: uu
        })), n += 1, c = !0;
        break;
      }
    }
    c || r.push(ee(ee({}, l), {}, {
      status: su
    }));
  }), n < a && (r = r.concat(o.slice(n).map(function(l) {
    return ee(ee({}, l), {}, {
      status: ou
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
      return d !== l || v !== su;
    }), r.forEach(function(c) {
      c.key === l && (c.status = uu);
    });
  }), r;
}
var zD = ["component", "children", "onVisibleChanged", "onAllRemoved"], WD = ["status"], HD = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function qD(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : us, r = /* @__PURE__ */ function(n) {
    Ca(i, n);
    var a = Uu(i);
    function i() {
      var o;
      qt(this, i);
      for (var u = arguments.length, s = new Array(u), l = 0; l < u; l++)
        s[l] = arguments[l];
      return o = a.call.apply(a, [this].concat(s)), W(Se(o), "state", {
        keyEntities: []
      }), W(Se(o), "removeKey", function(c) {
        var d = o.state.keyEntities, v = d.map(function(b) {
          return b.key !== c ? b : ee(ee({}, b), {}, {
            status: go
          });
        });
        return o.setState({
          keyEntities: v
        }), v.filter(function(b) {
          var m = b.status;
          return m !== go;
        }).length;
      }), o;
    }
    return Ut(i, [{
      key: "render",
      value: function() {
        var u = this, s = this.state.keyEntities, l = this.props, c = l.component, d = l.children, v = l.onVisibleChanged, b = l.onAllRemoved, m = er(l, zD), f = c || x.Fragment, g = {};
        return HD.forEach(function(p) {
          g[p] = m[p], delete m[p];
        }), delete m.keys, /* @__PURE__ */ x.createElement(f, m, s.map(function(p, C) {
          var y = p.status, E = er(p, WD), F = y === ou || y === uu;
          return /* @__PURE__ */ x.createElement(t, mr({}, g, {
            key: E.key,
            visible: F,
            eventProps: E,
            onVisibleChanged: function(w) {
              if (v == null || v(w, {
                key: E.key
              }), !w) {
                var $ = u.removeKey(E.key);
                $ === 0 && b && b();
              }
            }
          }), function(B, w) {
            return d(ee(ee({}, B), {}, {
              index: C
            }), w);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(u, s) {
        var l = u.keys, c = s.keyEntities, d = lu(l), v = VD(c, d);
        return {
          keyEntities: v.filter(function(b) {
            var m = c.find(function(f) {
              var g = f.key;
              return b.key === g;
            });
            return !(m && m.status === go && b.status === su);
          })
        };
      }
    }]), i;
  }(x.Component);
  return W(r, "defaultProps", {
    component: "div"
  }), r;
}
qD(ev);
function UD(e) {
  const {
    children: t
  } = e, [, r] = Cr(), {
    motion: n
  } = r, a = x.useRef(!1);
  return a.current = a.current || n === !1, a.current ? /* @__PURE__ */ x.createElement(SD, {
    motion: n
  }, t) : t;
}
const av = /* @__PURE__ */ x.memo((e) => {
  let {
    dropdownMatchSelectWidth: t
  } = e;
  return Vn("ConfigProvider").deprecated(t === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (av.displayName = "PropWarning");
const GD = process.env.NODE_ENV !== "production" ? av : () => null;
var KD = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
let cu = !1;
process.env.NODE_ENV;
const XD = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], YD = "ant";
let iv;
function JD() {
  return iv || YD;
}
function ZD(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const QD = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: a
  } = e;
  t !== void 0 && (iv = t), n && ZD(n) && (process.env.NODE_ENV !== "production" && Ri(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Zy(JD(), n));
}, eE = (e) => {
  const {
    children: t,
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
    popupMatchSelectWidth: b,
    popupOverflow: m,
    legacyLocale: f,
    parentContext: g,
    iconPrefixCls: p,
    theme: C,
    componentDisabled: y,
    segmented: E,
    statistic: F,
    spin: B,
    calendar: w,
    carousel: $,
    cascader: P,
    collapse: T,
    typography: _,
    checkbox: j,
    descriptions: N,
    divider: I,
    drawer: R,
    skeleton: M,
    steps: O,
    image: k,
    layout: H,
    list: U,
    mentions: K,
    modal: J,
    progress: te,
    result: S,
    slider: V,
    breadcrumb: z,
    menu: Y,
    pagination: ue,
    input: ie,
    empty: se,
    badge: de,
    radio: he,
    rate: ye,
    switch: Z,
    transfer: me,
    avatar: Be,
    message: we,
    tag: ze,
    table: Fe,
    card: Ce,
    tabs: ce,
    timeline: le,
    timePicker: xe,
    upload: Ue,
    notification: We,
    tree: ot,
    colorPicker: At,
    datePicker: lt,
    rangePicker: St,
    flex: nr,
    wave: bt,
    dropdown: zn,
    warning: Wn
  } = e, _r = x.useCallback((Xe, Ze) => {
    const {
      prefixCls: Ot
    } = e;
    if (Ze)
      return Ze;
    const Ct = Ot || g.getPrefixCls("");
    return Xe ? `${Ct}-${Xe}` : Ct;
  }, [g.getPrefixCls, e.prefixCls]), ar = p || g.iconPrefixCls || Id, ir = r || g.csp;
  qd(ar, ir);
  const wr = BD(C, g.theme);
  process.env.NODE_ENV !== "production" && (cu = cu || !!wr);
  const Vr = {
    csp: ir,
    autoInsertSpaceInButton: n,
    alert: a,
    anchor: i,
    locale: u || f,
    direction: l,
    space: c,
    virtual: d,
    popupMatchSelectWidth: b ?? v,
    popupOverflow: m,
    getPrefixCls: _r,
    iconPrefixCls: ar,
    theme: wr,
    segmented: E,
    statistic: F,
    spin: B,
    calendar: w,
    carousel: $,
    cascader: P,
    collapse: T,
    typography: _,
    checkbox: j,
    descriptions: N,
    divider: I,
    drawer: R,
    skeleton: M,
    steps: O,
    image: k,
    input: ie,
    layout: H,
    list: U,
    mentions: K,
    modal: J,
    progress: te,
    result: S,
    slider: V,
    breadcrumb: z,
    menu: Y,
    pagination: ue,
    empty: se,
    badge: de,
    radio: he,
    rate: ye,
    switch: Z,
    transfer: me,
    avatar: Be,
    message: we,
    tag: ze,
    table: Fe,
    card: Ce,
    tabs: ce,
    timeline: le,
    timePicker: xe,
    upload: Ue,
    notification: We,
    tree: ot,
    colorPicker: At,
    datePicker: lt,
    rangePicker: St,
    flex: nr,
    wave: bt,
    dropdown: zn,
    warning: Wn
  }, Gt = Object.assign({}, g);
  Object.keys(Vr).forEach((Xe) => {
    Vr[Xe] !== void 0 && (Gt[Xe] = Vr[Xe]);
  }), XD.forEach((Xe) => {
    const Ze = e[Xe];
    Ze && (Gt[Xe] = Ze);
  });
  const Mt = Hu(() => Gt, Gt, (Xe, Ze) => {
    const Ot = Object.keys(Xe), Ct = Object.keys(Ze);
    return Ot.length !== Ct.length || Ot.some((zr) => Xe[zr] !== Ze[zr]);
  }), Fr = x.useMemo(() => ({
    prefixCls: ar,
    csp: ir
  }), [ar, ir]);
  let Ke = /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement(GD, {
    dropdownMatchSelectWidth: v
  }), t);
  const vn = x.useMemo(() => {
    var Xe, Ze, Ot, Ct;
    return Bn(((Xe = $i.Form) === null || Xe === void 0 ? void 0 : Xe.defaultValidateMessages) || {}, ((Ot = (Ze = Mt.locale) === null || Ze === void 0 ? void 0 : Ze.Form) === null || Ot === void 0 ? void 0 : Ot.defaultValidateMessages) || {}, ((Ct = Mt.form) === null || Ct === void 0 ? void 0 : Ct.validateMessages) || {}, (o == null ? void 0 : o.validateMessages) || {});
  }, [Mt, o == null ? void 0 : o.validateMessages]);
  Object.keys(vn).length > 0 && (Ke = /* @__PURE__ */ x.createElement(by.Provider, {
    value: vn
  }, Ke)), u && (Ke = /* @__PURE__ */ x.createElement(By, {
    locale: u,
    _ANT_MARK__: Sd
  }, Ke)), (ar || ir) && (Ke = /* @__PURE__ */ x.createElement(Qu.Provider, {
    value: Fr
  }, Ke)), s && (Ke = /* @__PURE__ */ x.createElement(eD, {
    size: s
  }, Ke)), Ke = /* @__PURE__ */ x.createElement(UD, null, Ke);
  const Fa = x.useMemo(() => {
    const Xe = wr || {}, {
      algorithm: Ze,
      token: Ot,
      components: Ct,
      cssVar: zr
    } = Xe, _i = KD(Xe, ["algorithm", "token", "components", "cssVar"]), Ba = Ze && (!Array.isArray(Ze) || Ze.length > 0) ? ha(Ze) : Nd, hn = {};
    Object.entries(Ct || {}).forEach((Vi) => {
      let [zi, Wi] = Vi;
      const D = Object.assign({}, Wi);
      "algorithm" in D && (D.algorithm === !0 ? D.theme = Ba : (Array.isArray(D.algorithm) || typeof D.algorithm == "function") && (D.theme = ha(D.algorithm)), delete D.algorithm), hn[zi] = D;
    });
    const Aa = Object.assign(Object.assign({}, In), Ot);
    return Object.assign(Object.assign({}, _i), {
      theme: Ba,
      token: Aa,
      components: hn,
      override: Object.assign({
        override: Aa
      }, hn),
      cssVar: zr
    });
  }, [wr]);
  return C && (Ke = /* @__PURE__ */ x.createElement(Md.Provider, {
    value: Fa
  }, Ke)), Mt.warning && (Ke = /* @__PURE__ */ x.createElement(Fd.Provider, {
    value: Mt.warning
  }, Ke)), y !== void 0 && (Ke = /* @__PURE__ */ x.createElement(Qy, {
    disabled: y
  }, Ke)), /* @__PURE__ */ x.createElement(Nt.Provider, {
    value: Mt
  }, Ke);
}, fn = (e) => {
  const t = x.useContext(Nt), r = x.useContext(Ad);
  return /* @__PURE__ */ x.createElement(eE, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
fn.ConfigContext = Nt;
fn.SizeContext = ji;
fn.config = QD;
fn.useConfig = tD;
Object.defineProperty(fn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ri(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), ji)
});
process.env.NODE_ENV !== "production" && (fn.displayName = "ConfigProvider");
const tE = fn;
function ov(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function rE(e) {
  return ov(e) instanceof ShadowRoot;
}
function nE(e) {
  return rE(e) ? ov(e) : null;
}
function aE(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function iE(e, t) {
  Ge(e, "[@ant-design/icons] ".concat(t));
}
function mc(e) {
  return je(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (je(e.icon) === "object" || typeof e.icon == "function");
}
function bc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[aE(r)] = n;
    }
    return t;
  }, {});
}
function fu(e, t, r) {
  return r ? /* @__PURE__ */ re.createElement(e.tag, ee(ee({
    key: t
  }, bc(e.attrs)), r), (e.children || []).map(function(n, a) {
    return fu(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : /* @__PURE__ */ re.createElement(e.tag, ee({
    key: t
  }, bc(e.attrs)), (e.children || []).map(function(n, a) {
    return fu(n, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function uv(e) {
  return br(e)[0];
}
function sv(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var oE = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, uE = function(t) {
  var r = st(Qu), n = r.csp, a = r.prefixCls, i = oE;
  a && (i = i.replace(/anticon/g, a)), at(function() {
    var o = t.current, u = nE(o);
    rn(i, "@ant-design-icons", {
      prepend: !0,
      csp: n,
      attachTo: u
    });
  }, []);
}, sE = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], ra = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function lE(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  ra.primaryColor = t, ra.secondaryColor = r || uv(t), ra.calculated = !!r;
}
function cE() {
  return ee({}, ra);
}
var Ni = function(t) {
  var r = t.icon, n = t.className, a = t.onClick, i = t.style, o = t.primaryColor, u = t.secondaryColor, s = er(t, sE), l = x.useRef(), c = ra;
  if (o && (c = {
    primaryColor: o,
    secondaryColor: u || uv(o)
  }), uE(l), iE(mc(r), "icon should be icon definiton, but got ".concat(r)), !mc(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = ee(ee({}, d), {}, {
    icon: d.icon(c.primaryColor, c.secondaryColor)
  })), fu(d.icon, "svg-".concat(d.name), ee(ee({
    className: n,
    onClick: a,
    style: i,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s), {}, {
    ref: l
  }));
};
Ni.displayName = "IconReact";
Ni.getTwoToneColors = cE;
Ni.setTwoToneColors = lE;
const ss = Ni;
function lv(e) {
  var t = sv(e), r = pe(t, 2), n = r[0], a = r[1];
  return ss.setTwoToneColors({
    primaryColor: n,
    secondaryColor: a
  });
}
function fE() {
  var e = ss.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var dE = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
lv(zy.primary);
var Mi = /* @__PURE__ */ x.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, a = e.spin, i = e.rotate, o = e.tabIndex, u = e.onClick, s = e.twoToneColor, l = er(e, dE), c = x.useContext(Qu), d = c.prefixCls, v = d === void 0 ? "anticon" : d, b = c.rootClassName, m = Le(b, v, W(W({}, "".concat(v, "-").concat(n.name), !!n.name), "".concat(v, "-spin"), !!a || n.name === "loading"), r), f = o;
  f === void 0 && u && (f = -1);
  var g = i ? {
    msTransform: "rotate(".concat(i, "deg)"),
    transform: "rotate(".concat(i, "deg)")
  } : void 0, p = sv(s), C = pe(p, 2), y = C[0], E = C[1];
  return /* @__PURE__ */ x.createElement("span", mr({
    role: "img",
    "aria-label": n.name
  }, l, {
    ref: t,
    tabIndex: f,
    onClick: u,
    className: m
  }), /* @__PURE__ */ x.createElement(ss, {
    icon: n,
    primaryColor: y,
    secondaryColor: E,
    style: g
  }));
});
Mi.displayName = "AntdIcon";
Mi.getTwoToneColor = fE;
Mi.setTwoToneColor = lv;
const vE = Mi, {
  isValidElement: cv
} = x;
function hE(e) {
  return e && cv(e) && e.type === x.Fragment;
}
function gE(e, t, r) {
  return cv(e) ? /* @__PURE__ */ x.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
}
function fv(e, t) {
  return gE(e, e, t);
}
const dv = (e) => {
  const [, , , , t] = Cr();
  return t ? `${e}-css-var` : "";
};
var pE = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" };
const mE = pE;
var bE = function(t, r) {
  return /* @__PURE__ */ x.createElement(vE, mr({}, t, {
    ref: r,
    icon: mE
  }));
}, vv = /* @__PURE__ */ x.forwardRef(bE);
process.env.NODE_ENV !== "production" && (vv.displayName = "LoadingOutlined");
const CE = vv;
function ht() {
  ht = function() {
    return t;
  };
  var e, t = {}, r = Object.prototype, n = r.hasOwnProperty, a = Object.defineProperty || function(M, O, k) {
    M[O] = k.value;
  }, i = typeof Symbol == "function" ? Symbol : {}, o = i.iterator || "@@iterator", u = i.asyncIterator || "@@asyncIterator", s = i.toStringTag || "@@toStringTag";
  function l(M, O, k) {
    return Object.defineProperty(M, O, {
      value: k,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), M[O];
  }
  try {
    l({}, "");
  } catch {
    l = function(k, H, U) {
      return k[H] = U;
    };
  }
  function c(M, O, k, H) {
    var U = O && O.prototype instanceof p ? O : p, K = Object.create(U.prototype), J = new I(H || []);
    return a(K, "_invoke", {
      value: T(M, k, J)
    }), K;
  }
  function d(M, O, k) {
    try {
      return {
        type: "normal",
        arg: M.call(O, k)
      };
    } catch (H) {
      return {
        type: "throw",
        arg: H
      };
    }
  }
  t.wrap = c;
  var v = "suspendedStart", b = "suspendedYield", m = "executing", f = "completed", g = {};
  function p() {
  }
  function C() {
  }
  function y() {
  }
  var E = {};
  l(E, o, function() {
    return this;
  });
  var F = Object.getPrototypeOf, B = F && F(F(R([])));
  B && B !== r && n.call(B, o) && (E = B);
  var w = y.prototype = p.prototype = Object.create(E);
  function $(M) {
    ["next", "throw", "return"].forEach(function(O) {
      l(M, O, function(k) {
        return this._invoke(O, k);
      });
    });
  }
  function P(M, O) {
    function k(U, K, J, te) {
      var S = d(M[U], M, K);
      if (S.type !== "throw") {
        var V = S.arg, z = V.value;
        return z && je(z) == "object" && n.call(z, "__await") ? O.resolve(z.__await).then(function(Y) {
          k("next", Y, J, te);
        }, function(Y) {
          k("throw", Y, J, te);
        }) : O.resolve(z).then(function(Y) {
          V.value = Y, J(V);
        }, function(Y) {
          return k("throw", Y, J, te);
        });
      }
      te(S.arg);
    }
    var H;
    a(this, "_invoke", {
      value: function(K, J) {
        function te() {
          return new O(function(S, V) {
            k(K, J, S, V);
          });
        }
        return H = H ? H.then(te, te) : te();
      }
    });
  }
  function T(M, O, k) {
    var H = v;
    return function(U, K) {
      if (H === m)
        throw new Error("Generator is already running");
      if (H === f) {
        if (U === "throw")
          throw K;
        return {
          value: e,
          done: !0
        };
      }
      for (k.method = U, k.arg = K; ; ) {
        var J = k.delegate;
        if (J) {
          var te = _(J, k);
          if (te) {
            if (te === g)
              continue;
            return te;
          }
        }
        if (k.method === "next")
          k.sent = k._sent = k.arg;
        else if (k.method === "throw") {
          if (H === v)
            throw H = f, k.arg;
          k.dispatchException(k.arg);
        } else
          k.method === "return" && k.abrupt("return", k.arg);
        H = m;
        var S = d(M, O, k);
        if (S.type === "normal") {
          if (H = k.done ? f : b, S.arg === g)
            continue;
          return {
            value: S.arg,
            done: k.done
          };
        }
        S.type === "throw" && (H = f, k.method = "throw", k.arg = S.arg);
      }
    };
  }
  function _(M, O) {
    var k = O.method, H = M.iterator[k];
    if (H === e)
      return O.delegate = null, k === "throw" && M.iterator.return && (O.method = "return", O.arg = e, _(M, O), O.method === "throw") || k !== "return" && (O.method = "throw", O.arg = new TypeError("The iterator does not provide a '" + k + "' method")), g;
    var U = d(H, M.iterator, O.arg);
    if (U.type === "throw")
      return O.method = "throw", O.arg = U.arg, O.delegate = null, g;
    var K = U.arg;
    return K ? K.done ? (O[M.resultName] = K.value, O.next = M.nextLoc, O.method !== "return" && (O.method = "next", O.arg = e), O.delegate = null, g) : K : (O.method = "throw", O.arg = new TypeError("iterator result is not an object"), O.delegate = null, g);
  }
  function j(M) {
    var O = {
      tryLoc: M[0]
    };
    1 in M && (O.catchLoc = M[1]), 2 in M && (O.finallyLoc = M[2], O.afterLoc = M[3]), this.tryEntries.push(O);
  }
  function N(M) {
    var O = M.completion || {};
    O.type = "normal", delete O.arg, M.completion = O;
  }
  function I(M) {
    this.tryEntries = [{
      tryLoc: "root"
    }], M.forEach(j, this), this.reset(!0);
  }
  function R(M) {
    if (M || M === "") {
      var O = M[o];
      if (O)
        return O.call(M);
      if (typeof M.next == "function")
        return M;
      if (!isNaN(M.length)) {
        var k = -1, H = function U() {
          for (; ++k < M.length; )
            if (n.call(M, k))
              return U.value = M[k], U.done = !1, U;
          return U.value = e, U.done = !0, U;
        };
        return H.next = H;
      }
    }
    throw new TypeError(je(M) + " is not iterable");
  }
  return C.prototype = y, a(w, "constructor", {
    value: y,
    configurable: !0
  }), a(y, "constructor", {
    value: C,
    configurable: !0
  }), C.displayName = l(y, s, "GeneratorFunction"), t.isGeneratorFunction = function(M) {
    var O = typeof M == "function" && M.constructor;
    return !!O && (O === C || (O.displayName || O.name) === "GeneratorFunction");
  }, t.mark = function(M) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(M, y) : (M.__proto__ = y, l(M, s, "GeneratorFunction")), M.prototype = Object.create(w), M;
  }, t.awrap = function(M) {
    return {
      __await: M
    };
  }, $(P.prototype), l(P.prototype, u, function() {
    return this;
  }), t.AsyncIterator = P, t.async = function(M, O, k, H, U) {
    U === void 0 && (U = Promise);
    var K = new P(c(M, O, k, H), U);
    return t.isGeneratorFunction(O) ? K : K.next().then(function(J) {
      return J.done ? J.value : K.next();
    });
  }, $(w), l(w, s, "Generator"), l(w, o, function() {
    return this;
  }), l(w, "toString", function() {
    return "[object Generator]";
  }), t.keys = function(M) {
    var O = Object(M), k = [];
    for (var H in O)
      k.push(H);
    return k.reverse(), function U() {
      for (; k.length; ) {
        var K = k.pop();
        if (K in O)
          return U.value = K, U.done = !1, U;
      }
      return U.done = !0, U;
    };
  }, t.values = R, I.prototype = {
    constructor: I,
    reset: function(O) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(N), !O)
        for (var k in this)
          k.charAt(0) === "t" && n.call(this, k) && !isNaN(+k.slice(1)) && (this[k] = e);
    },
    stop: function() {
      this.done = !0;
      var O = this.tryEntries[0].completion;
      if (O.type === "throw")
        throw O.arg;
      return this.rval;
    },
    dispatchException: function(O) {
      if (this.done)
        throw O;
      var k = this;
      function H(V, z) {
        return J.type = "throw", J.arg = O, k.next = V, z && (k.method = "next", k.arg = e), !!z;
      }
      for (var U = this.tryEntries.length - 1; U >= 0; --U) {
        var K = this.tryEntries[U], J = K.completion;
        if (K.tryLoc === "root")
          return H("end");
        if (K.tryLoc <= this.prev) {
          var te = n.call(K, "catchLoc"), S = n.call(K, "finallyLoc");
          if (te && S) {
            if (this.prev < K.catchLoc)
              return H(K.catchLoc, !0);
            if (this.prev < K.finallyLoc)
              return H(K.finallyLoc);
          } else if (te) {
            if (this.prev < K.catchLoc)
              return H(K.catchLoc, !0);
          } else {
            if (!S)
              throw new Error("try statement without catch or finally");
            if (this.prev < K.finallyLoc)
              return H(K.finallyLoc);
          }
        }
      }
    },
    abrupt: function(O, k) {
      for (var H = this.tryEntries.length - 1; H >= 0; --H) {
        var U = this.tryEntries[H];
        if (U.tryLoc <= this.prev && n.call(U, "finallyLoc") && this.prev < U.finallyLoc) {
          var K = U;
          break;
        }
      }
      K && (O === "break" || O === "continue") && K.tryLoc <= k && k <= K.finallyLoc && (K = null);
      var J = K ? K.completion : {};
      return J.type = O, J.arg = k, K ? (this.method = "next", this.next = K.finallyLoc, g) : this.complete(J);
    },
    complete: function(O, k) {
      if (O.type === "throw")
        throw O.arg;
      return O.type === "break" || O.type === "continue" ? this.next = O.arg : O.type === "return" ? (this.rval = this.arg = O.arg, this.method = "return", this.next = "end") : O.type === "normal" && k && (this.next = k), g;
    },
    finish: function(O) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var H = this.tryEntries[k];
        if (H.finallyLoc === O)
          return this.complete(H.completion, H.afterLoc), N(H), g;
      }
    },
    catch: function(O) {
      for (var k = this.tryEntries.length - 1; k >= 0; --k) {
        var H = this.tryEntries[k];
        if (H.tryLoc === O) {
          var U = H.completion;
          if (U.type === "throw") {
            var K = U.arg;
            N(H);
          }
          return K;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(O, k, H) {
      return this.delegate = {
        iterator: R(O),
        resultName: k,
        nextLoc: H
      }, this.method === "next" && (this.arg = e), g;
    }
  }, t;
}
function Cc(e, t, r, n, a, i, o) {
  try {
    var u = e[i](o), s = u.value;
  } catch (l) {
    r(l);
    return;
  }
  u.done ? t(s) : Promise.resolve(s).then(n, a);
}
function dn(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, a) {
      var i = e.apply(t, r);
      function o(s) {
        Cc(i, n, a, o, u, "next", s);
      }
      function u(s) {
        Cc(i, n, a, o, u, "throw", s);
      }
      o(void 0);
    });
  };
}
var Da = ee({}, Kv), yE = Da.version, DE = Da.render, EE = Da.unmountComponentAtNode, Ii;
try {
  var wE = Number((yE || "").split(".")[0]);
  wE >= 18 && (Ii = Da.createRoot);
} catch {
}
function yc(e) {
  var t = Da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && je(t) === "object" && (t.usingClientEntryPoint = e);
}
var mi = "__rc_react_root__";
function FE(e, t) {
  yc(!0);
  var r = t[mi] || Ii(t);
  yc(!1), r.render(e), t[mi] = r;
}
function BE(e, t) {
  DE(e, t);
}
function AE(e, t) {
  if (Ii) {
    FE(e, t);
    return;
  }
  BE(e, t);
}
function SE(e) {
  return du.apply(this, arguments);
}
function du() {
  return du = dn(/* @__PURE__ */ ht().mark(function e(t) {
    return ht().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.resolve().then(function() {
              var a;
              (a = t[mi]) === null || a === void 0 || a.unmount(), delete t[mi];
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), du.apply(this, arguments);
}
function OE(e) {
  EE(e);
}
function xE(e) {
  return vu.apply(this, arguments);
}
function vu() {
  return vu = dn(/* @__PURE__ */ ht().mark(function e(t) {
    return ht().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            if (Ii === void 0) {
              n.next = 2;
              break;
            }
            return n.abrupt("return", SE(t));
          case 2:
            OE(t);
          case 3:
          case "end":
            return n.stop();
        }
    }, e);
  })), vu.apply(this, arguments);
}
const PE = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var a = e.getBoundingClientRect(), i = a.width, o = a.height;
      if (i || o)
        return !0;
    }
  }
  return !1;
}, TE = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow 0.3s ${e.motionEaseInOut}`, `opacity 0.35s ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, RE = as("Wave", (e) => [TE(e)]);
function $E(e) {
  const t = (e || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  return t && t[1] && t[2] && t[3] ? !(t[1] === t[2] && t[2] === t[3]) : !0;
}
function po(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && $E(e) && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent";
}
function jE(e) {
  const {
    borderTopColor: t,
    borderColor: r,
    backgroundColor: n
  } = getComputedStyle(e);
  return po(t) ? t : po(r) ? r : po(n) ? n : null;
}
const ls = "ant-wave-target";
function mo(e) {
  return Number.isNaN(e) ? 0 : e;
}
const NE = (e) => {
  const {
    className: t,
    target: r,
    component: n
  } = e, a = x.useRef(null), [i, o] = x.useState(null), [u, s] = x.useState([]), [l, c] = x.useState(0), [d, v] = x.useState(0), [b, m] = x.useState(0), [f, g] = x.useState(0), [p, C] = x.useState(!1), y = {
    left: l,
    top: d,
    width: b,
    height: f,
    borderRadius: u.map((B) => `${B}px`).join(" ")
  };
  i && (y["--wave-color"] = i);
  function E() {
    const B = getComputedStyle(r);
    o(jE(r));
    const w = B.position === "static", {
      borderLeftWidth: $,
      borderTopWidth: P
    } = B;
    c(w ? r.offsetLeft : mo(-parseFloat($))), v(w ? r.offsetTop : mo(-parseFloat(P))), m(r.offsetWidth), g(r.offsetHeight);
    const {
      borderTopLeftRadius: T,
      borderTopRightRadius: _,
      borderBottomLeftRadius: j,
      borderBottomRightRadius: N
    } = B;
    s([T, _, N, j].map((I) => mo(parseFloat(I))));
  }
  if (x.useEffect(() => {
    if (r) {
      const B = kr(() => {
        E(), C(!0);
      });
      let w;
      return typeof ResizeObserver < "u" && (w = new ResizeObserver(E), w.observe(r)), () => {
        kr.cancel(B), w == null || w.disconnect();
      };
    }
  }, []), !p)
    return null;
  const F = (n === "Checkbox" || n === "Radio") && (r == null ? void 0 : r.classList.contains(ls));
  return /* @__PURE__ */ x.createElement(us, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (B, w) => {
      var $;
      if (w.deadline || w.propertyName === "opacity") {
        const P = ($ = a.current) === null || $ === void 0 ? void 0 : $.parentElement;
        xE(P).then(() => {
          P == null || P.remove();
        });
      }
      return !1;
    }
  }, (B) => {
    let {
      className: w
    } = B;
    return /* @__PURE__ */ x.createElement("div", {
      ref: a,
      className: Le(t, {
        "wave-quick": F
      }, w),
      style: y
    });
  });
}, ME = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const a = document.createElement("div");
  a.style.position = "absolute", a.style.left = "0px", a.style.top = "0px", e == null || e.insertBefore(a, e == null ? void 0 : e.firstChild), AE(/* @__PURE__ */ x.createElement(NE, Object.assign({}, t, {
    target: e
  })), a);
}, IE = ME;
function kE(e, t, r) {
  const {
    wave: n
  } = x.useContext(Nt), [, a, i] = Cr(), o = au((l) => {
    const c = e.current;
    if (n != null && n.disabled || !c)
      return;
    const d = c.querySelector(`.${ls}`) || c, {
      showEffect: v
    } = n || {};
    (v || IE)(d, {
      className: t,
      token: a,
      component: r,
      event: l,
      hashId: i
    });
  }), u = x.useRef();
  return (l) => {
    kr.cancel(u.current), u.current = kr(() => {
      o(l);
    });
  };
}
const hv = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: a
  } = st(Nt), i = Ie(null), o = a("wave"), [, u] = RE(o), s = kE(i, Le(o, u), n);
  if (re.useEffect(() => {
    const c = i.current;
    if (!c || c.nodeType !== 1 || r)
      return;
    const d = (v) => {
      !PE(v.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") || c.className.includes("-leave") || s(v);
    };
    return c.addEventListener("click", d, !0), () => {
      c.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ re.isValidElement(t))
    return t ?? null;
  const l = Wf(t) ? zf(t.ref, i) : i;
  return fv(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (hv.displayName = "Wave");
const gv = hv, pv = (e) => {
  const t = re.useContext(ji);
  return re.useMemo(() => e ? typeof e == "string" ? e ?? t : e instanceof Function ? e(t) : t : t, [e, t]);
}, LE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, _E = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-item:empty`]: {
        display: "none"
      }
    }
  };
}, VE = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-row-small": {
        rowGap: e.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: e.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: e.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: e.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: e.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: e.spaceGapLargeSize
      }
    }
  };
}, mv = is("Space", (e) => {
  const t = Lr(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [_E(t), VE(t), LE(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var bv = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const cs = /* @__PURE__ */ x.createContext(null), zE = (e, t) => {
  const r = x.useContext(cs), n = x.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: a,
      isFirstItem: i,
      isLastItem: o
    } = r, u = a === "vertical" ? "-vertical-" : "-";
    return Le(`${e}-compact${u}item`, {
      [`${e}-compact${u}first-item`]: i,
      [`${e}-compact${u}last-item`]: o,
      [`${e}-compact${u}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r == null ? void 0 : r.compactSize,
    compactDirection: r == null ? void 0 : r.compactDirection,
    compactItemClassnames: n
  };
}, WE = (e) => {
  var {
    children: t
  } = e, r = bv(e, ["children"]);
  return /* @__PURE__ */ x.createElement(cs.Provider, {
    value: r
  }, t);
}, HE = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = x.useContext(Nt), {
    size: n,
    direction: a,
    block: i,
    prefixCls: o,
    className: u,
    rootClassName: s,
    children: l
  } = e, c = bv(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), d = pv((y) => n ?? y), v = t("space-compact", o), [b, m] = mv(v), f = Le(v, m, {
    [`${v}-rtl`]: r === "rtl",
    [`${v}-block`]: i,
    [`${v}-vertical`]: a === "vertical"
  }, u, s), g = x.useContext(cs), p = da(l), C = x.useMemo(() => p.map((y, E) => {
    const F = y && y.key || `${v}-item-${E}`;
    return /* @__PURE__ */ x.createElement(WE, {
      key: F,
      compactSize: d,
      compactDirection: a,
      isFirstItem: E === 0 && (!g || (g == null ? void 0 : g.isFirstItem)),
      isLastItem: E === p.length - 1 && (!g || (g == null ? void 0 : g.isLastItem))
    }, y);
  }), [n, p, g]);
  return p.length === 0 ? null : b(/* @__PURE__ */ x.createElement("div", Object.assign({
    className: f
  }, c), C));
}, qE = HE;
var UE = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Cv = /* @__PURE__ */ x.createContext(void 0), GE = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = x.useContext(Nt), {
    prefixCls: n,
    size: a,
    className: i
  } = e, o = UE(e, ["prefixCls", "size", "className"]), u = t("btn-group", n), [, , s] = Cr();
  let l = "";
  switch (a) {
    case "large":
      l = "lg";
      break;
    case "small":
      l = "sm";
      break;
  }
  if (process.env.NODE_ENV !== "production") {
    const d = Vn("Button.Group");
    process.env.NODE_ENV !== "production" && d(!a || ["large", "small", "middle"].includes(a), "usage", "Invalid prop `size`.");
  }
  const c = Le(u, {
    [`${u}-${l}`]: l,
    [`${u}-rtl`]: r === "rtl"
  }, i, s);
  return /* @__PURE__ */ x.createElement(Cv.Provider, {
    value: a
  }, /* @__PURE__ */ x.createElement("div", Object.assign({}, o, {
    className: c
  })));
}, KE = GE, Dc = /^[\u4e00-\u9fa5]{2}$/, hu = Dc.test.bind(Dc);
function Ec(e) {
  return typeof e == "string";
}
function qa(e) {
  return e === "text" || e === "link";
}
function XE(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Ec(e.type) && hu(e.props.children) ? fv(e, {
    children: e.props.children.split("").join(r)
  }) : Ec(e) ? hu(e) ? /* @__PURE__ */ re.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ re.createElement("span", null, e) : hE(e) ? /* @__PURE__ */ re.createElement("span", null, e) : e;
}
function YE(e, t) {
  let r = !1;
  const n = [];
  return re.Children.forEach(e, (a) => {
    const i = typeof a, o = i === "string" || i === "number";
    if (r && o) {
      const u = n.length - 1, s = n[u];
      n[u] = `${s}${a}`;
    } else
      n.push(a);
    r = o;
  }), re.Children.map(n, (a) => XE(a, t));
}
const JE = /* @__PURE__ */ cn((e, t) => {
  const {
    className: r,
    style: n,
    children: a,
    prefixCls: i
  } = e, o = Le(`${i}-icon`, r);
  return /* @__PURE__ */ re.createElement("span", {
    ref: t,
    className: o,
    style: n
  }, a);
}), yv = JE, wc = /* @__PURE__ */ cn((e, t) => {
  let {
    prefixCls: r,
    className: n,
    style: a,
    iconClassName: i
  } = e;
  const o = Le(`${r}-loading-icon`, n);
  return /* @__PURE__ */ re.createElement(yv, {
    prefixCls: r,
    className: o,
    style: a,
    ref: t
  }, /* @__PURE__ */ re.createElement(CE, {
    className: i
  }));
}), bo = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), Co = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), ZE = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: a,
    style: i
  } = e, o = !!r;
  return n ? /* @__PURE__ */ re.createElement(wc, {
    prefixCls: t,
    className: a,
    style: i
  }) : /* @__PURE__ */ re.createElement(us, {
    visible: o,
    // We do not really use this motionName
    motionName: `${t}-loading-icon-motion`,
    motionLeave: o,
    removeOnLeave: !0,
    onAppearStart: bo,
    onAppearActive: Co,
    onEnterStart: bo,
    onEnterActive: Co,
    onLeaveStart: Co,
    onLeaveActive: bo
  }, (u, s) => {
    let {
      className: l,
      style: c
    } = u;
    return /* @__PURE__ */ re.createElement(wc, {
      prefixCls: t,
      className: a,
      style: Object.assign(Object.assign({}, i), c),
      ref: s,
      iconClassName: l
    });
  });
}, QE = ZE, Fc = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), e1 = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
    groupBorderColor: a,
    colorErrorHover: i
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(n).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover,\n          &:focus,\n          &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: r
        }
      },
      // Border Color
      Fc(`${t}-primary`, a),
      Fc(`${t}-danger`, i)
    ]
  };
}, Dv = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r,
    paddingBlock: n
  } = e;
  return Lr(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: n,
    buttonIconOnlyFontSize: r
  });
}, Ev = (e) => {
  var t, r, n, a, i, o;
  const u = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, s = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, l = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, c = (a = e.contentLineHeight) !== null && a !== void 0 ? a : ii(u), d = (i = e.contentLineHeightSM) !== null && i !== void 0 ? i : ii(s), v = (o = e.contentLineHeightLG) !== null && o !== void 0 ? o : ii(l);
  return {
    fontWeight: 400,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: e.fontSizeLG,
    onlyIconSizeSM: e.fontSizeLG - 2,
    onlyIconSizeLG: e.fontSizeLG + 2,
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textHoverBg: e.colorBgTextHover,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    contentFontSize: u,
    contentFontSizeSM: s,
    contentFontSizeLG: l,
    contentLineHeight: c,
    contentLineHeightSM: d,
    contentLineHeightLG: v,
    paddingBlock: Math.max((e.controlHeight - u * c) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - s * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * v) / 2 - e.lineWidth, 0)
  };
}, t1 = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-block",
      fontWeight: n,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${tr(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      "> span": {
        display: "inline-block"
      },
      [`${t}-icon`]: {
        lineHeight: 0
      },
      // Leave a space between icon and text.
      [`> ${r} + span, > span + ${r}`]: {
        marginInlineStart: e.marginXS
      },
      [`&:not(${t}-icon-only) > ${t}-icon`]: {
        [`&${t}-loading-icon, &:not(:last-child)`]: {
          marginInlineEnd: e.marginXS
        }
      },
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Object.assign({}, lD(e)),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      // make `btn-icon-only` not too narrow
      [`&-icon-only${t}-compact-item`]: {
        flex: "none"
      }
    }
  };
}, yr = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), r1 = (e) => ({
  minWidth: e.controlHeight,
  paddingInlineStart: 0,
  paddingInlineEnd: 0,
  borderRadius: "50%"
}), n1 = (e) => ({
  borderRadius: e.controlHeight,
  paddingInlineStart: e.calc(e.controlHeight).div(2).equal(),
  paddingInlineEnd: e.calc(e.controlHeight).div(2).equal()
}), a1 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), ma = (e, t, r, n, a, i, o, u) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, yr(e, Object.assign({
    background: t
  }, o), Object.assign({
    background: t
  }, u))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: a || void 0,
      borderColor: i || void 0
    }
  })
}), fs = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, a1(e))
}), wv = (e) => Object.assign({}, fs(e)), bi = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Fv = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wv(e)), {
  background: e.defaultBg,
  borderColor: e.defaultBorderColor,
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}), yr(e.componentCls, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), ma(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    color: e.colorError,
    borderColor: e.colorError
  }, yr(e.componentCls, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorBorderHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), ma(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder)), fs(e))
}), i1 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, wv(e)), {
  color: e.primaryColor,
  background: e.colorPrimary,
  boxShadow: e.primaryShadow
}), yr(e.componentCls, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryHover
}, {
  color: e.colorTextLightSolid,
  background: e.colorPrimaryActive
})), ma(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign(Object.assign({
    background: e.colorError,
    boxShadow: e.dangerShadow,
    color: e.dangerColor
  }, yr(e.componentCls, {
    background: e.colorErrorHover
  }, {
    background: e.colorErrorActive
  })), ma(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
    color: e.colorErrorHover,
    borderColor: e.colorErrorHover
  }, {
    color: e.colorErrorActive,
    borderColor: e.colorErrorActive
  })), fs(e))
}), o1 = (e) => Object.assign(Object.assign({}, Fv(e)), {
  borderStyle: "dashed"
}), u1 = (e) => Object.assign(Object.assign(Object.assign({
  color: e.colorLink
}, yr(e.componentCls, {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), bi(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, yr(e.componentCls, {
    color: e.colorErrorHover
  }, {
    color: e.colorErrorActive
  })), bi(e))
}), s1 = (e) => Object.assign(Object.assign(Object.assign({}, yr(e.componentCls, {
  color: e.colorText,
  background: e.textHoverBg
}, {
  color: e.colorText,
  background: e.colorBgTextActive
})), bi(e)), {
  [`&${e.componentCls}-dangerous`]: Object.assign(Object.assign({
    color: e.colorError
  }, bi(e)), yr(e.componentCls, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }, {
    color: e.colorErrorHover,
    background: e.colorErrorBg
  }))
}), l1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-default`]: Fv(e),
    [`${t}-primary`]: i1(e),
    [`${t}-dashed`]: o1(e),
    [`${t}-link`]: u1(e),
    [`${t}-text`]: s1(e),
    [`${t}-ghost`]: ma(e.componentCls, e.ghostBg, e.colorBgContainer, e.colorBgContainer, e.colorTextDisabled, e.colorBorder)
  };
}, ds = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: a,
    lineHeight: i,
    borderRadius: o,
    buttonPaddingHorizontal: u,
    iconCls: s,
    buttonPaddingVertical: l
  } = e, c = `${r}-icon-only`;
  return [
    {
      [`${t}`]: {
        fontSize: a,
        lineHeight: i,
        height: n,
        padding: `${tr(l)} ${tr(u)}`,
        borderRadius: o,
        [`&${c}`]: {
          width: n,
          paddingInlineStart: 0,
          paddingInlineEnd: 0,
          [`&${r}-round`]: {
            width: "auto"
          },
          [s]: {
            fontSize: e.buttonIconOnlyFontSize
          }
        },
        // Loading
        [`&${r}-loading`]: {
          opacity: e.opacityLoading,
          cursor: "default"
        },
        [`${r}-loading-icon`]: {
          transition: `width ${e.motionDurationSlow} ${e.motionEaseInOut}, opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: r1(e)
    },
    {
      [`${r}${r}-round${t}`]: n1(e)
    }
  ];
}, c1 = (e) => {
  const t = Lr(e, {
    fontSize: e.contentFontSize,
    lineHeight: e.contentLineHeight
  });
  return ds(t, e.componentCls);
}, f1 = (e) => {
  const t = Lr(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    lineHeight: e.contentLineHeightSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: e.paddingBlockSM,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return ds(t, `${e.componentCls}-sm`);
}, d1 = (e) => {
  const t = Lr(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    lineHeight: e.contentLineHeightLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: e.paddingBlockLG,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return ds(t, `${e.componentCls}-lg`);
}, v1 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, h1 = is("Button", (e) => {
  const t = Dv(e);
  return [
    // Shared
    t1(t),
    // Size
    c1(t),
    f1(t),
    d1(t),
    // Block
    v1(t),
    // Group (type, ghost, danger, loading)
    l1(t),
    // Button Group
    e1(t)
  ];
}, Ev, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function g1(e, t, r) {
  const {
    focusElCls: n,
    focus: a,
    borderElCls: i
  } = r, o = i ? "> *" : "", u = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((s) => `&:${s} ${o}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": Object.assign(Object.assign({
      [u]: {
        zIndex: 2
      }
    }, n ? {
      [`&${n}`]: {
        zIndex: 2
      }
    } : {}), {
      [`&[disabled] ${o}`]: {
        zIndex: 0
      }
    })
  };
}
function p1(e, t, r) {
  const {
    borderElCls: n
  } = r, a = n ? `> ${n}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${a}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${a}, &${e}-sm ${a}, &${e}-lg ${a}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function m1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    focus: !0
  };
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, g1(e, n, t)), p1(r, n, t))
  };
}
function b1(e, t) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function C1(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function y1(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, b1(e, t)), C1(e.componentCls, t))
  };
}
const D1 = (e) => {
  const {
    componentCls: t,
    calc: r
  } = e;
  return {
    [t]: {
      // Special styles for Primary Button
      [`&-compact-item${t}-primary`]: {
        [`&:not([disabled]) + ${t}-compact-item${t}-primary:not([disabled])`]: {
          position: "relative",
          "&:before": {
            position: "absolute",
            top: r(e.lineWidth).mul(-1).equal(),
            insetInlineStart: r(e.lineWidth).mul(-1).equal(),
            display: "inline-block",
            width: e.lineWidth,
            height: `calc(100% + ${tr(e.lineWidth)} * 2)`,
            backgroundColor: e.colorPrimaryHover,
            content: '""'
          }
        }
      },
      // Special styles for Primary Button
      "&-compact-vertical-item": {
        [`&${t}-primary`]: {
          [`&:not([disabled]) + ${t}-compact-vertical-item${t}-primary:not([disabled])`]: {
            position: "relative",
            "&:before": {
              position: "absolute",
              top: r(e.lineWidth).mul(-1).equal(),
              insetInlineStart: r(e.lineWidth).mul(-1).equal(),
              display: "inline-block",
              width: `calc(100% + ${tr(e.lineWidth)} * 2)`,
              height: e.lineWidth,
              backgroundColor: e.colorPrimaryHover,
              content: '""'
            }
          }
        }
      }
    }
  };
}, E1 = yD(["Button", "compact"], (e) => {
  const t = Dv(e);
  return [
    // Space Compact
    m1(t),
    y1(t),
    D1(t)
  ];
}, Ev);
var w1 = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
function F1(e) {
  if (typeof e == "object" && e) {
    let t = e == null ? void 0 : e.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const B1 = (e, t) => {
  var r, n;
  const {
    loading: a = !1,
    prefixCls: i,
    type: o = "default",
    danger: u,
    shape: s = "default",
    size: l,
    styles: c,
    disabled: d,
    className: v,
    rootClassName: b,
    children: m,
    icon: f,
    ghost: g = !1,
    block: p = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: C = "button",
    classNames: y,
    style: E = {}
  } = e, F = w1(e, ["loading", "prefixCls", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "ghost", "block", "htmlType", "classNames", "style"]), {
    getPrefixCls: B,
    autoInsertSpaceInButton: w,
    direction: $,
    button: P
  } = st(Nt), T = B("btn", i), [_, j, N] = h1(T), I = st(rs), R = d ?? I, M = st(Cv), O = hr(() => F1(a), [a]), [k, H] = Wt(O.loading), [U, K] = Wt(!1), te = zf(t, /* @__PURE__ */ Uv()), S = qv.count(m) === 1 && !f && !qa(o);
  at(() => {
    let ce = null;
    O.delay > 0 ? ce = setTimeout(() => {
      ce = null, H(!0);
    }, O.delay) : H(O.loading);
    function le() {
      ce && (clearTimeout(ce), ce = null);
    }
    return le;
  }, [O]), at(() => {
    if (!te || !te.current || w === !1)
      return;
    const ce = te.current.textContent;
    S && hu(ce) ? U || K(!0) : U && K(!1);
  }, [te]);
  const V = (ce) => {
    const {
      onClick: le
    } = e;
    if (k || R) {
      ce.preventDefault();
      return;
    }
    le == null || le(ce);
  };
  if (process.env.NODE_ENV !== "production") {
    const ce = Vn("Button");
    process.env.NODE_ENV !== "production" && ce(!(typeof f == "string" && f.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${f}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ce(!(g && qa(o)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const z = w !== !1, {
    compactSize: Y,
    compactItemClassnames: ue
  } = zE(T, $), ie = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, se = pv((ce) => {
    var le, xe;
    return (xe = (le = l ?? Y) !== null && le !== void 0 ? le : M) !== null && xe !== void 0 ? xe : ce;
  }), de = se && ie[se] || "", he = k ? "loading" : f, ye = Hf(F, ["navigate"]), Z = Le(T, j, N, {
    [`${T}-${s}`]: s !== "default" && s,
    [`${T}-${o}`]: o,
    [`${T}-${de}`]: de,
    [`${T}-icon-only`]: !m && m !== 0 && !!he,
    [`${T}-background-ghost`]: g && !qa(o),
    [`${T}-loading`]: k,
    [`${T}-two-chinese-chars`]: U && z && !k,
    [`${T}-block`]: p,
    [`${T}-dangerous`]: !!u,
    [`${T}-rtl`]: $ === "rtl"
  }, ue, v, b, P == null ? void 0 : P.className), me = Object.assign(Object.assign({}, P == null ? void 0 : P.style), E), Be = Le(y == null ? void 0 : y.icon, (r = P == null ? void 0 : P.classNames) === null || r === void 0 ? void 0 : r.icon), we = Object.assign(Object.assign({}, (c == null ? void 0 : c.icon) || {}), ((n = P == null ? void 0 : P.styles) === null || n === void 0 ? void 0 : n.icon) || {}), ze = f && !k ? /* @__PURE__ */ re.createElement(yv, {
    prefixCls: T,
    className: Be,
    style: we
  }, f) : /* @__PURE__ */ re.createElement(QE, {
    existIcon: !!f,
    prefixCls: T,
    loading: !!k
  }), Fe = m || m === 0 ? YE(m, S && z) : null;
  if (ye.href !== void 0)
    return _(/* @__PURE__ */ re.createElement("a", Object.assign({}, ye, {
      className: Le(Z, {
        [`${T}-disabled`]: R
      }),
      href: R ? void 0 : ye.href,
      style: me,
      onClick: V,
      ref: te,
      tabIndex: R ? -1 : 0
    }), ze, Fe));
  let Ce = /* @__PURE__ */ re.createElement("button", Object.assign({}, F, {
    type: C,
    className: Z,
    style: me,
    onClick: V,
    disabled: R,
    ref: te
  }), ze, Fe, !!ue && /* @__PURE__ */ re.createElement(E1, {
    key: "compact",
    prefixCls: T
  }));
  return qa(o) || (Ce = /* @__PURE__ */ re.createElement(gv, {
    component: "Button",
    disabled: !!k
  }, Ce)), _(Ce);
}, ki = /* @__PURE__ */ cn(B1);
process.env.NODE_ENV !== "production" && (ki.displayName = "Button");
ki.Group = KE;
ki.__ANT_BUTTON = !0;
const Bv = ki;
var Yr = "RC_FORM_INTERNAL_HOOKS", Ne = function() {
  Ge(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, kn = /* @__PURE__ */ x.createContext({
  getFieldValue: Ne,
  getFieldsValue: Ne,
  getFieldError: Ne,
  getFieldWarning: Ne,
  getFieldsError: Ne,
  isFieldsTouched: Ne,
  isFieldTouched: Ne,
  isFieldValidating: Ne,
  isFieldsValidating: Ne,
  resetFields: Ne,
  setFields: Ne,
  setFieldValue: Ne,
  setFieldsValue: Ne,
  validateFields: Ne,
  submit: Ne,
  getInternalHooks: function() {
    return Ne(), {
      dispatch: Ne,
      initEntityValue: Ne,
      registerField: Ne,
      useSubscribe: Ne,
      setInitialValues: Ne,
      destroyForm: Ne,
      setCallbacks: Ne,
      registerWatch: Ne,
      getFields: Ne,
      setValidateMessages: Ne,
      setPreserve: Ne,
      getInitialValue: Ne
    };
  }
}), Ci = /* @__PURE__ */ x.createContext(null);
function gu(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function A1(e) {
  return e && !!e._init;
}
function Jr() {
  return Jr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Jr.apply(this, arguments);
}
function S1(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ba(e, t);
}
function pu(e) {
  return pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, pu(e);
}
function ba(e, t) {
  return ba = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, a) {
    return n.__proto__ = a, n;
  }, ba(e, t);
}
function O1() {
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
function oi(e, t, r) {
  return O1() ? oi = Reflect.construct.bind() : oi = function(a, i, o) {
    var u = [null];
    u.push.apply(u, i);
    var s = Function.bind.apply(a, u), l = new s();
    return o && ba(l, o.prototype), l;
  }, oi.apply(null, arguments);
}
function x1(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function mu(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return mu = function(n) {
    if (n === null || !x1(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(n))
        return t.get(n);
      t.set(n, a);
    }
    function a() {
      return oi(n, arguments, pu(this).constructor);
    }
    return a.prototype = Object.create(n.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ba(a, n);
  }, mu(e);
}
var P1 = /%[sdj%]/g, Av = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Av = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function bu(e) {
  if (!e || !e.length)
    return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function wt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = 0, i = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var o = e.replace(P1, function(u) {
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
  return e;
}
function T1(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function tt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || T1(t) && typeof e == "string" && !e);
}
function R1(e, t, r) {
  var n = [], a = 0, i = e.length;
  function o(u) {
    n.push.apply(n, u || []), a++, a === i && r(n);
  }
  e.forEach(function(u) {
    t(u, o);
  });
}
function Bc(e, t, r) {
  var n = 0, a = e.length;
  function i(o) {
    if (o && o.length) {
      r(o);
      return;
    }
    var u = n;
    n = n + 1, u < a ? t(e[u], i) : r([]);
  }
  i([]);
}
function $1(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var Ac = /* @__PURE__ */ function(e) {
  S1(t, e);
  function t(r, n) {
    var a;
    return a = e.call(this, "Async Validation Error") || this, a.errors = r, a.fields = n, a;
  }
  return t;
}(/* @__PURE__ */ mu(Error));
function j1(e, t, r, n, a) {
  if (t.first) {
    var i = new Promise(function(v, b) {
      var m = function(p) {
        return n(p), p.length ? b(new Ac(p, bu(p))) : v(a);
      }, f = $1(e);
      Bc(f, r, m);
    });
    return i.catch(function(v) {
      return v;
    }), i;
  }
  var o = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], u = Object.keys(e), s = u.length, l = 0, c = [], d = new Promise(function(v, b) {
    var m = function(g) {
      if (c.push.apply(c, g), l++, l === s)
        return n(c), c.length ? b(new Ac(c, bu(c))) : v(a);
    };
    u.length || (n(c), v(a)), u.forEach(function(f) {
      var g = e[f];
      o.indexOf(f) !== -1 ? Bc(g, r, m) : R1(g, r, m);
    });
  });
  return d.catch(function(v) {
    return v;
  }), d;
}
function N1(e) {
  return !!(e && e.message !== void 0);
}
function M1(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function Sc(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = M1(t, e.fullFields) : n = t[r.field || e.fullField], N1(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function Oc(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        typeof n == "object" && typeof e[r] == "object" ? e[r] = Jr({}, e[r], n) : e[r] = n;
      }
  }
  return e;
}
var Sv = function(t, r, n, a, i, o) {
  t.required && (!n.hasOwnProperty(t.field) || tt(r, o || t.type)) && a.push(wt(i.messages.required, t.fullField));
}, I1 = function(t, r, n, a, i) {
  (/^\s+$/.test(r) || r === "") && a.push(wt(i.messages.whitespace, t.fullField));
}, Ua, k1 = function() {
  if (Ua)
    return Ua;
  var e = "[a-fA-F\\d:]", t = function(E) {
    return E && E.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + r + "$)|(?:^" + a + "$)"), o = new RegExp("^" + r + "$"), u = new RegExp("^" + a + "$"), s = function(E) {
    return E && E.exact ? i : new RegExp("(?:" + t(E) + r + t(E) + ")|(?:" + t(E) + a + t(E) + ")", "g");
  };
  s.v4 = function(y) {
    return y && y.exact ? o : new RegExp("" + t(y) + r + t(y), "g");
  }, s.v6 = function(y) {
    return y && y.exact ? u : new RegExp("" + t(y) + a + t(y), "g");
  };
  var l = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", d = s.v4().source, v = s.v6().source, b = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", p = '(?:[/?#][^\\s"]*)?', C = "(?:" + l + "|www\\.)" + c + "(?:localhost|" + d + "|" + v + "|" + b + m + f + ")" + g + p;
  return Ua = new RegExp("(?:^" + C + "$)", "i"), Ua;
}, xc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Jn = {
  integer: function(t) {
    return Jn.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Jn.number(t) && !Jn.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !Jn.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(xc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(k1());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(xc.hex);
  }
}, L1 = function(t, r, n, a, i) {
  if (t.required && r === void 0) {
    Sv(t, r, n, a, i);
    return;
  }
  var o = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], u = t.type;
  o.indexOf(u) > -1 ? Jn[u](r) || a.push(wt(i.messages.types[u], t.fullField, t.type)) : u && typeof r !== t.type && a.push(wt(i.messages.types[u], t.fullField, t.type));
}, _1 = function(t, r, n, a, i) {
  var o = typeof t.len == "number", u = typeof t.min == "number", s = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, d = null, v = typeof r == "number", b = typeof r == "string", m = Array.isArray(r);
  if (v ? d = "number" : b ? d = "string" : m && (d = "array"), !d)
    return !1;
  m && (c = r.length), b && (c = r.replace(l, "_").length), o ? c !== t.len && a.push(wt(i.messages[d].len, t.fullField, t.len)) : u && !s && c < t.min ? a.push(wt(i.messages[d].min, t.fullField, t.min)) : s && !u && c > t.max ? a.push(wt(i.messages[d].max, t.fullField, t.max)) : u && s && (c < t.min || c > t.max) && a.push(wt(i.messages[d].range, t.fullField, t.min, t.max));
}, bn = "enum", V1 = function(t, r, n, a, i) {
  t[bn] = Array.isArray(t[bn]) ? t[bn] : [], t[bn].indexOf(r) === -1 && a.push(wt(i.messages[bn], t.fullField, t[bn].join(", ")));
}, z1 = function(t, r, n, a, i) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || a.push(wt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var o = new RegExp(t.pattern);
      o.test(r) || a.push(wt(i.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Ee = {
  required: Sv,
  whitespace: I1,
  type: L1,
  range: _1,
  enum: V1,
  pattern: z1
}, W1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r, "string") && !t.required)
      return n();
    Ee.required(t, r, a, o, i, "string"), tt(r, "string") || (Ee.type(t, r, a, o, i), Ee.range(t, r, a, o, i), Ee.pattern(t, r, a, o, i), t.whitespace === !0 && Ee.whitespace(t, r, a, o, i));
  }
  n(o);
}, H1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i), r !== void 0 && Ee.type(t, r, a, o, i);
  }
  n(o);
}, q1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (r === "" && (r = void 0), tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i), r !== void 0 && (Ee.type(t, r, a, o, i), Ee.range(t, r, a, o, i));
  }
  n(o);
}, U1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i), r !== void 0 && Ee.type(t, r, a, o, i);
  }
  n(o);
}, G1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i), tt(r) || Ee.type(t, r, a, o, i);
  }
  n(o);
}, K1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i), r !== void 0 && (Ee.type(t, r, a, o, i), Ee.range(t, r, a, o, i));
  }
  n(o);
}, X1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i), r !== void 0 && (Ee.type(t, r, a, o, i), Ee.range(t, r, a, o, i));
  }
  n(o);
}, Y1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (r == null && !t.required)
      return n();
    Ee.required(t, r, a, o, i, "array"), r != null && (Ee.type(t, r, a, o, i), Ee.range(t, r, a, o, i));
  }
  n(o);
}, J1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i), r !== void 0 && Ee.type(t, r, a, o, i);
  }
  n(o);
}, Z1 = "enum", Q1 = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i), r !== void 0 && Ee[Z1](t, r, a, o, i);
  }
  n(o);
}, ew = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r, "string") && !t.required)
      return n();
    Ee.required(t, r, a, o, i), tt(r, "string") || Ee.pattern(t, r, a, o, i);
  }
  n(o);
}, tw = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r, "date") && !t.required)
      return n();
    if (Ee.required(t, r, a, o, i), !tt(r, "date")) {
      var s;
      r instanceof Date ? s = r : s = new Date(r), Ee.type(t, s, a, o, i), s && Ee.range(t, s.getTime(), a, o, i);
    }
  }
  n(o);
}, rw = function(t, r, n, a, i) {
  var o = [], u = Array.isArray(r) ? "array" : typeof r;
  Ee.required(t, r, a, o, i, u), n(o);
}, yo = function(t, r, n, a, i) {
  var o = t.type, u = [], s = t.required || !t.required && a.hasOwnProperty(t.field);
  if (s) {
    if (tt(r, o) && !t.required)
      return n();
    Ee.required(t, r, a, u, i, o), tt(r, o) || Ee.type(t, r, a, u, i);
  }
  n(u);
}, nw = function(t, r, n, a, i) {
  var o = [], u = t.required || !t.required && a.hasOwnProperty(t.field);
  if (u) {
    if (tt(r) && !t.required)
      return n();
    Ee.required(t, r, a, o, i);
  }
  n(o);
}, na = {
  string: W1,
  method: H1,
  number: q1,
  boolean: U1,
  regexp: G1,
  integer: K1,
  float: X1,
  array: Y1,
  object: J1,
  enum: Q1,
  pattern: ew,
  date: tw,
  url: yo,
  hex: yo,
  email: yo,
  required: rw,
  any: nw
};
function Cu() {
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
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var yu = Cu(), Ea = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = yu, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(n) {
    var a = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(i) {
      var o = n[i];
      a.rules[i] = Array.isArray(o) ? o : [o];
    });
  }, t.messages = function(n) {
    return n && (this._messages = Oc(Cu(), n)), this._messages;
  }, t.validate = function(n, a, i) {
    var o = this;
    a === void 0 && (a = {}), i === void 0 && (i = function() {
    });
    var u = n, s = a, l = i;
    if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
      return l && l(null, u), Promise.resolve(u);
    function c(f) {
      var g = [], p = {};
      function C(E) {
        if (Array.isArray(E)) {
          var F;
          g = (F = g).concat.apply(F, E);
        } else
          g.push(E);
      }
      for (var y = 0; y < f.length; y++)
        C(f[y]);
      g.length ? (p = bu(g), l(g, p)) : l(null, u);
    }
    if (s.messages) {
      var d = this.messages();
      d === yu && (d = Cu()), Oc(d, s.messages), s.messages = d;
    } else
      s.messages = this.messages();
    var v = {}, b = s.keys || Object.keys(this.rules);
    b.forEach(function(f) {
      var g = o.rules[f], p = u[f];
      g.forEach(function(C) {
        var y = C;
        typeof y.transform == "function" && (u === n && (u = Jr({}, u)), p = u[f] = y.transform(p)), typeof y == "function" ? y = {
          validator: y
        } : y = Jr({}, y), y.validator = o.getValidationMethod(y), y.validator && (y.field = f, y.fullField = y.fullField || f, y.type = o.getType(y), v[f] = v[f] || [], v[f].push({
          rule: y,
          value: p,
          source: u,
          field: f
        }));
      });
    });
    var m = {};
    return j1(v, s, function(f, g) {
      var p = f.rule, C = (p.type === "object" || p.type === "array") && (typeof p.fields == "object" || typeof p.defaultField == "object");
      C = C && (p.required || !p.required && f.value), p.field = f.field;
      function y(B, w) {
        return Jr({}, w, {
          fullField: p.fullField + "." + B,
          fullFields: p.fullFields ? [].concat(p.fullFields, [B]) : [B]
        });
      }
      function E(B) {
        B === void 0 && (B = []);
        var w = Array.isArray(B) ? B : [B];
        !s.suppressWarning && w.length && e.warning("async-validator:", w), w.length && p.message !== void 0 && (w = [].concat(p.message));
        var $ = w.map(Sc(p, u));
        if (s.first && $.length)
          return m[p.field] = 1, g($);
        if (!C)
          g($);
        else {
          if (p.required && !f.value)
            return p.message !== void 0 ? $ = [].concat(p.message).map(Sc(p, u)) : s.error && ($ = [s.error(p, wt(s.messages.required, p.field))]), g($);
          var P = {};
          p.defaultField && Object.keys(f.value).map(function(j) {
            P[j] = p.defaultField;
          }), P = Jr({}, P, f.rule.fields);
          var T = {};
          Object.keys(P).forEach(function(j) {
            var N = P[j], I = Array.isArray(N) ? N : [N];
            T[j] = I.map(y.bind(null, j));
          });
          var _ = new e(T);
          _.messages(s.messages), f.rule.options && (f.rule.options.messages = s.messages, f.rule.options.error = s.error), _.validate(f.value, f.rule.options || s, function(j) {
            var N = [];
            $ && $.length && N.push.apply(N, $), j && j.length && N.push.apply(N, j), g(N.length ? N : null);
          });
        }
      }
      var F;
      if (p.asyncValidator)
        F = p.asyncValidator(p, f.value, E, f.source, s);
      else if (p.validator) {
        try {
          F = p.validator(p, f.value, E, f.source, s);
        } catch (B) {
          console.error == null || console.error(B), s.suppressValidatorError || setTimeout(function() {
            throw B;
          }, 0), E(B.message);
        }
        F === !0 ? E() : F === !1 ? E(typeof p.message == "function" ? p.message(p.fullField || p.field) : p.message || (p.fullField || p.field) + " fails") : F instanceof Array ? E(F) : F instanceof Error && E(F.message);
      }
      F && F.then && F.then(function() {
        return E();
      }, function(B) {
        return E(B);
      });
    }, function(f) {
      c(f);
    }, u);
  }, t.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !na.hasOwnProperty(n.type))
      throw new Error(wt("Unknown rule type %s", n.type));
    return n.type || "string";
  }, t.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var a = Object.keys(n), i = a.indexOf("message");
    return i !== -1 && a.splice(i, 1), a.length === 1 && a[0] === "required" ? na.required : na[this.getType(n)] || void 0;
  }, e;
}();
Ea.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  na[t] = r;
};
Ea.warning = Av;
Ea.messages = yu;
Ea.validators = na;
var Dt = "'${name}' is not a valid ${type}", Ov = {
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
}, Pc = Ea;
function aw(e, t) {
  return e.replace(/\$\{\w+\}/g, function(r) {
    var n = r.slice(2, -1);
    return t[n];
  });
}
var Tc = "CODE_LOGIC_ERROR";
function Du(e, t, r, n, a) {
  return Eu.apply(this, arguments);
}
function Eu() {
  return Eu = dn(/* @__PURE__ */ ht().mark(function e(t, r, n, a, i) {
    var o, u, s, l, c, d, v, b, m;
    return ht().wrap(function(g) {
      for (; ; )
        switch (g.prev = g.next) {
          case 0:
            return o = ee({}, n), delete o.ruleIndex, Pc.warning = function() {
            }, o.validator && (u = o.validator, o.validator = function() {
              try {
                return u.apply(void 0, arguments);
              } catch (p) {
                return console.error(p), Promise.reject(Tc);
              }
            }), s = null, o && o.type === "array" && o.defaultField && (s = o.defaultField, delete o.defaultField), l = new Pc(W({}, t, [o])), c = Bn(Ov, a.validateMessages), l.messages(c), d = [], g.prev = 10, g.next = 13, Promise.resolve(l.validate(W({}, t, r), ee({}, a)));
          case 13:
            g.next = 18;
            break;
          case 15:
            g.prev = 15, g.t0 = g.catch(10), g.t0.errors && (d = g.t0.errors.map(function(p, C) {
              var y = p.message, E = y === Tc ? c.default : y;
              return /* @__PURE__ */ x.isValidElement(E) ? (
                // Wrap ReactNode with `key`
                /* @__PURE__ */ x.cloneElement(E, {
                  key: "error_".concat(C)
                })
              ) : E;
            }));
          case 18:
            if (!(!d.length && s)) {
              g.next = 23;
              break;
            }
            return g.next = 21, Promise.all(r.map(function(p, C) {
              return Du("".concat(t, ".").concat(C), p, s, a, i);
            }));
          case 21:
            return v = g.sent, g.abrupt("return", v.reduce(function(p, C) {
              return [].concat(ge(p), ge(C));
            }, []));
          case 23:
            return b = ee(ee({}, n), {}, {
              name: t,
              enum: (n.enum || []).join(", ")
            }, i), m = d.map(function(p) {
              return typeof p == "string" ? aw(p, b) : p;
            }), g.abrupt("return", m);
          case 26:
          case "end":
            return g.stop();
        }
    }, e, null, [[10, 15]]);
  })), Eu.apply(this, arguments);
}
function iw(e, t, r, n, a, i) {
  var o = e.join("."), u = r.map(function(c, d) {
    var v = c.validator, b = ee(ee({}, c), {}, {
      ruleIndex: d
    });
    return v && (b.validator = function(m, f, g) {
      var p = !1, C = function() {
        for (var F = arguments.length, B = new Array(F), w = 0; w < F; w++)
          B[w] = arguments[w];
        Promise.resolve().then(function() {
          Ge(!p, "Your validator function has already return a promise. `callback` will be ignored."), p || g.apply(void 0, B);
        });
      }, y = v(m, f, C);
      p = y && typeof y.then == "function" && typeof y.catch == "function", Ge(p, "`callback` is deprecated. Please return a promise instead."), p && y.then(function() {
        g();
      }).catch(function(E) {
        g(E || " ");
      });
    }), b;
  }).sort(function(c, d) {
    var v = c.warningOnly, b = c.ruleIndex, m = d.warningOnly, f = d.ruleIndex;
    return !!v == !!m ? b - f : v ? 1 : -1;
  }), s;
  if (a === !0)
    s = new Promise(/* @__PURE__ */ function() {
      var c = dn(/* @__PURE__ */ ht().mark(function d(v, b) {
        var m, f, g;
        return ht().wrap(function(C) {
          for (; ; )
            switch (C.prev = C.next) {
              case 0:
                m = 0;
              case 1:
                if (!(m < u.length)) {
                  C.next = 12;
                  break;
                }
                return f = u[m], C.next = 5, Du(o, t, f, n, i);
              case 5:
                if (g = C.sent, !g.length) {
                  C.next = 9;
                  break;
                }
                return b([{
                  errors: g,
                  rule: f
                }]), C.abrupt("return");
              case 9:
                m += 1, C.next = 1;
                break;
              case 12:
                v([]);
              case 13:
              case "end":
                return C.stop();
            }
        }, d);
      }));
      return function(d, v) {
        return c.apply(this, arguments);
      };
    }());
  else {
    var l = u.map(function(c) {
      return Du(o, t, c, n, i).then(function(d) {
        return {
          errors: d,
          rule: c
        };
      });
    });
    s = (a ? uw(l) : ow(l)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return s.catch(function(c) {
    return c;
  }), s;
}
function ow(e) {
  return wu.apply(this, arguments);
}
function wu() {
  return wu = dn(/* @__PURE__ */ ht().mark(function e(t) {
    return ht().wrap(function(n) {
      for (; ; )
        switch (n.prev = n.next) {
          case 0:
            return n.abrupt("return", Promise.all(t).then(function(a) {
              var i, o = (i = []).concat.apply(i, ge(a));
              return o;
            }));
          case 1:
          case "end":
            return n.stop();
        }
    }, e);
  })), wu.apply(this, arguments);
}
function uw(e) {
  return Fu.apply(this, arguments);
}
function Fu() {
  return Fu = dn(/* @__PURE__ */ ht().mark(function e(t) {
    var r;
    return ht().wrap(function(a) {
      for (; ; )
        switch (a.prev = a.next) {
          case 0:
            return r = 0, a.abrupt("return", new Promise(function(i) {
              t.forEach(function(o) {
                o.then(function(u) {
                  u.errors.length && i([u]), r += 1, r === t.length && i([]);
                });
              });
            }));
          case 2:
          case "end":
            return a.stop();
        }
    }, e);
  })), Fu.apply(this, arguments);
}
function Je(e) {
  return gu(e);
}
function Rc(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var a = Qt(e, n);
    r = kt(r, n, a);
  }), r;
}
function Pn(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return xv(t, n, r);
  });
}
function xv(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, a) {
    return e[a] === n;
  });
}
function sw(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || je(e) !== "object" || je(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), a = new Set([].concat(r, n));
  return ge(a).every(function(i) {
    var o = e[i], u = t[i];
    return typeof o == "function" && typeof u == "function" ? !0 : o === u;
  });
}
function lw(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && je(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function $c(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var a = e[t], i = t - r;
  return i > 0 ? [].concat(ge(e.slice(0, r)), [a], ge(e.slice(r, t)), ge(e.slice(t + 1, n))) : i < 0 ? [].concat(ge(e.slice(0, t)), ge(e.slice(t + 1, r + 1)), [a], ge(e.slice(r + 1, n))) : e;
}
var cw = ["name"], Pt = [];
function jc(e, t, r, n, a, i) {
  return typeof e == "function" ? e(t, r, "source" in i ? {
    source: i.source
  } : {}) : n !== a;
}
var vs = /* @__PURE__ */ function(e) {
  Ca(r, e);
  var t = Uu(r);
  function r(n) {
    var a;
    if (qt(this, r), a = t.call(this, n), W(Se(a), "state", {
      resetCount: 0
    }), W(Se(a), "cancelRegisterFunc", null), W(Se(a), "mounted", !1), W(Se(a), "touched", !1), W(Se(a), "dirty", !1), W(Se(a), "validatePromise", void 0), W(Se(a), "prevValidating", void 0), W(Se(a), "errors", Pt), W(Se(a), "warnings", Pt), W(Se(a), "cancelRegister", function() {
      var s = a.props, l = s.preserve, c = s.isListField, d = s.name;
      a.cancelRegisterFunc && a.cancelRegisterFunc(c, l, Je(d)), a.cancelRegisterFunc = null;
    }), W(Se(a), "getNamePath", function() {
      var s = a.props, l = s.name, c = s.fieldContext, d = c.prefixName, v = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(ge(v), ge(l)) : [];
    }), W(Se(a), "getRules", function() {
      var s = a.props, l = s.rules, c = l === void 0 ? [] : l, d = s.fieldContext;
      return c.map(function(v) {
        return typeof v == "function" ? v(d) : v;
      });
    }), W(Se(a), "refresh", function() {
      a.mounted && a.setState(function(s) {
        var l = s.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), W(Se(a), "metaCache", null), W(Se(a), "triggerMetaEvent", function(s) {
      var l = a.props.onMetaChange;
      if (l) {
        var c = ee(ee({}, a.getMeta()), {}, {
          destroy: s
        });
        hi(a.metaCache, c) || l(c), a.metaCache = c;
      } else
        a.metaCache = null;
    }), W(Se(a), "onStoreChange", function(s, l, c) {
      var d = a.props, v = d.shouldUpdate, b = d.dependencies, m = b === void 0 ? [] : b, f = d.onReset, g = c.store, p = a.getNamePath(), C = a.getValue(s), y = a.getValue(g), E = l && Pn(l, p);
      switch (c.type === "valueUpdate" && c.source === "external" && C !== y && (a.touched = !0, a.dirty = !0, a.validatePromise = null, a.errors = Pt, a.warnings = Pt, a.triggerMetaEvent()), c.type) {
        case "reset":
          if (!l || E) {
            a.touched = !1, a.dirty = !1, a.validatePromise = void 0, a.errors = Pt, a.warnings = Pt, a.triggerMetaEvent(), f == null || f(), a.refresh();
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
          var F = c.data;
          if (E) {
            "touched" in F && (a.touched = F.touched), "validating" in F && !("originRCField" in F) && (a.validatePromise = F.validating ? Promise.resolve([]) : null), "errors" in F && (a.errors = F.errors || Pt), "warnings" in F && (a.warnings = F.warnings || Pt), a.dirty = !0, a.triggerMetaEvent(), a.reRender();
            return;
          } else if ("value" in F && Pn(l, p, !0)) {
            a.reRender();
            return;
          }
          if (v && !p.length && jc(v, s, g, C, y, c)) {
            a.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var B = m.map(Je);
          if (B.some(function(w) {
            return Pn(c.relatedFields, w);
          })) {
            a.reRender();
            return;
          }
          break;
        }
        default:
          if (E || (!m.length || p.length || v) && jc(v, s, g, C, y, c)) {
            a.reRender();
            return;
          }
          break;
      }
      v === !0 && a.reRender();
    }), W(Se(a), "validateRules", function(s) {
      var l = a.getNamePath(), c = a.getValue(), d = s || {}, v = d.triggerName, b = d.validateOnly, m = b === void 0 ? !1 : b, f = Promise.resolve().then(/* @__PURE__ */ dn(/* @__PURE__ */ ht().mark(function g() {
        var p, C, y, E, F, B, w;
        return ht().wrap(function(P) {
          for (; ; )
            switch (P.prev = P.next) {
              case 0:
                if (a.mounted) {
                  P.next = 2;
                  break;
                }
                return P.abrupt("return", []);
              case 2:
                if (p = a.props, C = p.validateFirst, y = C === void 0 ? !1 : C, E = p.messageVariables, F = p.validateDebounce, B = a.getRules(), v && (B = B.filter(function(T) {
                  return T;
                }).filter(function(T) {
                  var _ = T.validateTrigger;
                  if (!_)
                    return !0;
                  var j = gu(_);
                  return j.includes(v);
                })), !(F && v)) {
                  P.next = 10;
                  break;
                }
                return P.next = 8, new Promise(function(T) {
                  setTimeout(T, F);
                });
              case 8:
                if (a.validatePromise === f) {
                  P.next = 10;
                  break;
                }
                return P.abrupt("return", []);
              case 10:
                return w = iw(l, c, B, s, y, E), w.catch(function(T) {
                  return T;
                }).then(function() {
                  var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Pt;
                  if (a.validatePromise === f) {
                    var _;
                    a.validatePromise = null;
                    var j = [], N = [];
                    (_ = T.forEach) === null || _ === void 0 || _.call(T, function(I) {
                      var R = I.rule.warningOnly, M = I.errors, O = M === void 0 ? Pt : M;
                      R ? N.push.apply(N, ge(O)) : j.push.apply(j, ge(O));
                    }), a.errors = j, a.warnings = N, a.triggerMetaEvent(), a.reRender();
                  }
                }), P.abrupt("return", w);
              case 13:
              case "end":
                return P.stop();
            }
        }, g);
      })));
      return m || (a.validatePromise = f, a.dirty = !0, a.errors = Pt, a.warnings = Pt, a.triggerMetaEvent(), a.reRender()), f;
    }), W(Se(a), "isFieldValidating", function() {
      return !!a.validatePromise;
    }), W(Se(a), "isFieldTouched", function() {
      return a.touched;
    }), W(Se(a), "isFieldDirty", function() {
      if (a.dirty || a.props.initialValue !== void 0)
        return !0;
      var s = a.props.fieldContext, l = s.getInternalHooks(Yr), c = l.getInitialValue;
      return c(a.getNamePath()) !== void 0;
    }), W(Se(a), "getErrors", function() {
      return a.errors;
    }), W(Se(a), "getWarnings", function() {
      return a.warnings;
    }), W(Se(a), "isListField", function() {
      return a.props.isListField;
    }), W(Se(a), "isList", function() {
      return a.props.isList;
    }), W(Se(a), "isPreserve", function() {
      return a.props.preserve;
    }), W(Se(a), "getMeta", function() {
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
    }), W(Se(a), "getOnlyChild", function(s) {
      if (typeof s == "function") {
        var l = a.getMeta();
        return ee(ee({}, a.getOnlyChild(s(a.getControlled(), l, a.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = da(s);
      return c.length !== 1 || !/* @__PURE__ */ x.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }), W(Se(a), "getValue", function(s) {
      var l = a.props.fieldContext.getFieldsValue, c = a.getNamePath();
      return Qt(s || l(!0), c);
    }), W(Se(a), "getControlled", function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = a.props, c = l.trigger, d = l.validateTrigger, v = l.getValueFromEvent, b = l.normalize, m = l.valuePropName, f = l.getValueProps, g = l.fieldContext, p = d !== void 0 ? d : g.validateTrigger, C = a.getNamePath(), y = g.getInternalHooks, E = g.getFieldsValue, F = y(Yr), B = F.dispatch, w = a.getValue(), $ = f || function(j) {
        return W({}, m, j);
      }, P = s[c], T = ee(ee({}, s), $(w));
      T[c] = function() {
        a.touched = !0, a.dirty = !0, a.triggerMetaEvent();
        for (var j, N = arguments.length, I = new Array(N), R = 0; R < N; R++)
          I[R] = arguments[R];
        v ? j = v.apply(void 0, I) : j = lw.apply(void 0, [m].concat(I)), b && (j = b(j, w, E(!0))), B({
          type: "updateValue",
          namePath: C,
          value: j
        }), P && P.apply(void 0, I);
      };
      var _ = gu(p || []);
      return _.forEach(function(j) {
        var N = T[j];
        T[j] = function() {
          N && N.apply(void 0, arguments);
          var I = a.props.rules;
          I && I.length && B({
            type: "validateField",
            namePath: C,
            triggerName: j
          });
        };
      }), T;
    }), n.fieldContext) {
      var i = n.fieldContext.getInternalHooks, o = i(Yr), u = o.initEntityValue;
      u(Se(a));
    }
    return a;
  }
  return Ut(r, [{
    key: "componentDidMount",
    value: function() {
      var a = this.props, i = a.shouldUpdate, o = a.fieldContext;
      if (this.mounted = !0, o) {
        var u = o.getInternalHooks, s = u(Yr), l = s.registerField;
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
      return s ? l = u : /* @__PURE__ */ x.isValidElement(u) ? l = /* @__PURE__ */ x.cloneElement(u, this.getControlled(u.props)) : (Ge(!u, "`children` of Field is not validate ReactElement."), l = u), /* @__PURE__ */ x.createElement(x.Fragment, {
        key: a
      }, l);
    }
  }]), r;
}(x.Component);
W(vs, "contextType", kn);
W(vs, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Pv(e) {
  var t = e.name, r = er(e, cw), n = x.useContext(kn), a = x.useContext(Ci), i = t !== void 0 ? Je(t) : void 0, o = "keep";
  return r.isListField || (o = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && r.isListField && i.length <= 1 && Ge(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ x.createElement(vs, mr({
    key: o,
    name: i,
    isListField: !!a
  }, r, {
    fieldContext: n
  }));
}
function fw(e) {
  var t = e.name, r = e.initialValue, n = e.children, a = e.rules, i = e.validateTrigger, o = e.isListField, u = x.useContext(kn), s = x.useContext(Ci), l = x.useRef({
    keys: [],
    id: 0
  }), c = l.current, d = x.useMemo(function() {
    var f = Je(u.prefixName) || [];
    return [].concat(ge(f), ge(Je(t)));
  }, [u.prefixName, t]), v = x.useMemo(function() {
    return ee(ee({}, u), {}, {
      prefixName: d
    });
  }, [u, d]), b = x.useMemo(function() {
    return {
      getKey: function(g) {
        var p = d.length, C = g[p];
        return [c.keys[C], g.slice(p + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return Ge(!1, "Form.List only accepts function as children."), null;
  var m = function(g, p, C) {
    var y = C.source;
    return y === "internal" ? !1 : g !== p;
  };
  return /* @__PURE__ */ x.createElement(Ci.Provider, {
    value: b
  }, /* @__PURE__ */ x.createElement(kn.Provider, {
    value: v
  }, /* @__PURE__ */ x.createElement(Pv, {
    name: [],
    shouldUpdate: m,
    rules: a,
    validateTrigger: i,
    initialValue: r,
    isList: !0,
    isListField: o ?? !!s
  }, function(f, g) {
    var p = f.value, C = p === void 0 ? [] : p, y = f.onChange, E = u.getFieldValue, F = function() {
      var P = E(d || []);
      return P || [];
    }, B = {
      add: function(P, T) {
        var _ = F();
        T >= 0 && T <= _.length ? (c.keys = [].concat(ge(c.keys.slice(0, T)), [c.id], ge(c.keys.slice(T))), y([].concat(ge(_.slice(0, T)), [P], ge(_.slice(T))))) : (process.env.NODE_ENV !== "production" && (T < 0 || T > _.length) && Ge(!1, "The second parameter of the add function should be a valid positive number."), c.keys = [].concat(ge(c.keys), [c.id]), y([].concat(ge(_), [P]))), c.id += 1;
      },
      remove: function(P) {
        var T = F(), _ = new Set(Array.isArray(P) ? P : [P]);
        _.size <= 0 || (c.keys = c.keys.filter(function(j, N) {
          return !_.has(N);
        }), y(T.filter(function(j, N) {
          return !_.has(N);
        })));
      },
      move: function(P, T) {
        if (P !== T) {
          var _ = F();
          P < 0 || P >= _.length || T < 0 || T >= _.length || (c.keys = $c(c.keys, P, T), y($c(_, P, T)));
        }
      }
    }, w = C || [];
    return Array.isArray(w) || (w = [], process.env.NODE_ENV !== "production" && Ge(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(w.map(function($, P) {
      var T = c.keys[P];
      return T === void 0 && (c.keys[P] = c.id, T = c.keys[P], c.id += 1), {
        name: P,
        key: T,
        isListField: !0
      };
    }), B, g);
  })));
}
function dw(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(a, i) {
    e.forEach(function(o, u) {
      o.catch(function(s) {
        return t = !0, s;
      }).then(function(s) {
        r -= 1, n[u] = s, !(r > 0) && (t && i(n), a(n));
      });
    });
  }) : Promise.resolve([]);
}
var Tv = "__@field_split__";
function Do(e) {
  return e.map(function(t) {
    return "".concat(je(t), ":").concat(t);
  }).join(Tv);
}
var Cn = /* @__PURE__ */ function() {
  function e() {
    qt(this, e), W(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Ut(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(Do(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(Do(r));
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
      this.kvs.delete(Do(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return ge(this.kvs.entries()).map(function(n) {
        var a = pe(n, 2), i = a[0], o = a[1], u = i.split(Tv);
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
  }]), e;
}(), vw = ["name"], hw = /* @__PURE__ */ Ut(function e(t) {
  var r = this;
  qt(this, e), W(this, "formHooked", !1), W(this, "forceRootUpdate", void 0), W(this, "subscribable", !0), W(this, "store", {}), W(this, "fieldEntities", []), W(this, "initialValues", {}), W(this, "callbacks", {}), W(this, "validateMessages", null), W(this, "preserve", null), W(this, "lastValidatePromise", null), W(this, "getForm", function() {
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
    return n === Yr ? (r.formHooked = !0, {
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
      var i, o = Bn(n, r.store);
      (i = r.prevWithoutPreserves) === null || i === void 0 || i.map(function(u) {
        var s = u.key;
        o = kt(o, s, Qt(n, s));
      }), r.prevWithoutPreserves = null, r.updateStore(o);
    }
  }), W(this, "destroyForm", function() {
    var n = new Cn();
    r.getFieldEntities(!0).forEach(function(a) {
      r.isMergedPreserve(a.isPreserve()) || n.set(a.getNamePath(), !0);
    }), r.prevWithoutPreserves = n;
  }), W(this, "getInitialValue", function(n) {
    var a = Qt(r.initialValues, n);
    return n.length ? Bn(a) : a;
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
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, a = new Cn();
    return r.getFieldEntities(n).forEach(function(i) {
      var o = i.getNamePath();
      a.set(o, i);
    }), a;
  }), W(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var a = r.getFieldsMap(!0);
    return n.map(function(i) {
      var o = Je(i);
      return a.get(o) || {
        INVALIDATE_NAME_PATH: Je(i)
      };
    });
  }), W(this, "getFieldsValue", function(n, a) {
    r.warningUnhooked();
    var i, o, u;
    if (n === !0 || Array.isArray(n) ? (i = n, o = a) : n && je(n) === "object" && (u = n.strict, o = n.filter), i === !0 && !o)
      return r.store;
    var s = r.getFieldEntitiesForNamePathList(Array.isArray(i) ? i : null), l = [];
    return s.forEach(function(c) {
      var d, v, b = "INVALIDATE_NAME_PATH" in c ? c.INVALIDATE_NAME_PATH : c.getNamePath();
      if (u) {
        var m, f;
        if ((m = (f = c).isList) !== null && m !== void 0 && m.call(f))
          return;
      } else if (!i && (d = (v = c).isListField) !== null && d !== void 0 && d.call(v))
        return;
      if (!o)
        l.push(b);
      else {
        var g = "getMeta" in c ? c.getMeta() : null;
        o(g) && l.push(b);
      }
    }), Rc(r.store, l.map(Je));
  }), W(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var a = Je(n);
    return Qt(r.store, a);
  }), W(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntitiesForNamePathList(n);
    return a.map(function(i, o) {
      return i && !("INVALIDATE_NAME_PATH" in i) ? {
        name: i.getNamePath(),
        errors: i.getErrors(),
        warnings: i.getWarnings()
      } : {
        name: Je(n[o]),
        errors: [],
        warnings: []
      };
    });
  }), W(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var a = Je(n), i = r.getFieldsError([a])[0];
    return i.errors;
  }), W(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var a = Je(n), i = r.getFieldsError([a])[0];
    return i.warnings;
  }), W(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++)
      a[i] = arguments[i];
    var o = a[0], u = a[1], s, l = !1;
    a.length === 0 ? s = null : a.length === 1 ? Array.isArray(o) ? (s = o.map(Je), l = !1) : (s = null, l = o) : (s = o.map(Je), l = u);
    var c = r.getFieldEntities(!0), d = function(g) {
      return g.isFieldTouched();
    };
    if (!s)
      return l ? c.every(d) : c.some(d);
    var v = new Cn();
    s.forEach(function(f) {
      v.set(f, []);
    }), c.forEach(function(f) {
      var g = f.getNamePath();
      s.forEach(function(p) {
        p.every(function(C, y) {
          return g[y] === C;
        }) && v.update(p, function(C) {
          return [].concat(ge(C), [f]);
        });
      });
    });
    var b = function(g) {
      return g.some(d);
    }, m = v.map(function(f) {
      var g = f.value;
      return g;
    });
    return l ? m.every(b) : m.some(b);
  }), W(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), W(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var a = r.getFieldEntities();
    if (!n)
      return a.some(function(o) {
        return o.isFieldValidating();
      });
    var i = n.map(Je);
    return a.some(function(o) {
      var u = o.getNamePath();
      return Pn(i, u) && o.isFieldValidating();
    });
  }), W(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), W(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = new Cn(), i = r.getFieldEntities(!0);
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
          var v = c.getNamePath(), b = r.getInitialValue(v);
          if (b !== void 0)
            Ge(!1, "Form already set 'initialValues' with path '".concat(v.join("."), "'. Field can not overwrite it."));
          else {
            var m = a.get(v);
            if (m && m.size > 1)
              Ge(!1, "Multiple Field with path '".concat(v.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (m) {
              var f = r.getFieldValue(v), g = c.isListField();
              !g && (!n.skipExist || f === void 0) && r.updateStore(kt(r.store, v, ge(m)[0].value));
            }
          }
        }
      });
    }, u;
    n.entities ? u = n.entities : n.namePathList ? (u = [], n.namePathList.forEach(function(s) {
      var l = a.get(s);
      if (l) {
        var c;
        (c = u).push.apply(c, ge(ge(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : u = i, o(u);
  }), W(this, "resetFields", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (!n) {
      r.updateStore(Bn(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(a, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var i = n.map(Je);
    i.forEach(function(o) {
      var u = r.getInitialValue(o);
      r.updateStore(kt(r.store, o, u));
    }), r.resetWithFieldInitialValue({
      namePathList: i
    }), r.notifyObservers(a, i, {
      type: "reset"
    }), r.notifyWatch(i);
  }), W(this, "setFields", function(n) {
    r.warningUnhooked();
    var a = r.store, i = [];
    n.forEach(function(o) {
      var u = o.name, s = er(o, vw), l = Je(u);
      i.push(l), "value" in s && r.updateStore(kt(r.store, l, s.value)), r.notifyObservers(a, [l], {
        type: "setField",
        data: o
      });
    }), r.notifyWatch(i);
  }), W(this, "getFields", function() {
    var n = r.getFieldEntities(!0), a = n.map(function(i) {
      var o = i.getNamePath(), u = i.getMeta(), s = ee(ee({}, u), {}, {
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
      var i = n.getNamePath(), o = Qt(r.store, i);
      o === void 0 && r.updateStore(kt(r.store, i, a));
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
            !xv(d.getNamePath(), a)
          );
        })) {
          var c = r.store;
          r.updateStore(kt(c, a, l, !0)), r.notifyObservers(c, [a], {
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
      var o = ee(ee({}, i), {}, {
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
      relatedFields: [a].concat(ge(i))
    }), i;
  }), W(this, "updateValue", function(n, a) {
    var i = Je(n), o = r.store;
    r.updateStore(kt(r.store, i, a)), r.notifyObservers(o, [i], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([i]);
    var u = r.triggerDependenciesUpdate(o, i), s = r.callbacks.onValuesChange;
    if (s) {
      var l = Rc(r.store, [i]);
      s(l, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([i].concat(ge(u)));
  }), W(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var a = r.store;
    if (n) {
      var i = Bn(r.store, n);
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
    var a = /* @__PURE__ */ new Set(), i = [], o = new Cn();
    r.getFieldEntities().forEach(function(s) {
      var l = s.props.dependencies;
      (l || []).forEach(function(c) {
        var d = Je(c);
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
        var u = new Cn();
        a.forEach(function(l) {
          var c = l.name, d = l.errors;
          u.set(c, d);
        }), o.forEach(function(l) {
          l.errors = u.get(l.name) || l.errors;
        });
      }
      var s = o.filter(function(l) {
        var c = l.name;
        return Pn(n, c);
      });
      s.length && i(s, o);
    }
  }), W(this, "validateFields", function(n, a) {
    r.warningUnhooked();
    var i, o;
    Array.isArray(n) || typeof n == "string" || typeof a == "string" ? (i = n, o = a) : o = n;
    var u = !!i, s = u ? i.map(Je) : [], l = [], c = String(Date.now()), d = /* @__PURE__ */ new Set(), v = o || {}, b = v.recursive, m = v.dirty;
    r.getFieldEntities(!0).forEach(function(C) {
      if (u || s.push(C.getNamePath()), !(!C.props.rules || !C.props.rules.length) && !(m && !C.isFieldDirty())) {
        var y = C.getNamePath();
        if (d.add(y.join(c)), !u || Pn(s, y, b)) {
          var E = C.validateRules(ee({
            validateMessages: ee(ee({}, Ov), r.validateMessages)
          }, o));
          l.push(E.then(function() {
            return {
              name: y,
              errors: [],
              warnings: []
            };
          }).catch(function(F) {
            var B, w = [], $ = [];
            return (B = F.forEach) === null || B === void 0 || B.call(F, function(P) {
              var T = P.rule.warningOnly, _ = P.errors;
              T ? $.push.apply($, ge(_)) : w.push.apply(w, ge(_));
            }), w.length ? Promise.reject({
              name: y,
              errors: w,
              warnings: $
            }) : {
              name: y,
              errors: w,
              warnings: $
            };
          }));
        }
      }
    });
    var f = dw(l);
    r.lastValidatePromise = f, f.catch(function(C) {
      return C;
    }).then(function(C) {
      var y = C.map(function(E) {
        var F = E.name;
        return F;
      });
      r.notifyObservers(r.store, y, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(y, C);
    });
    var g = f.then(function() {
      return r.lastValidatePromise === f ? Promise.resolve(r.getFieldsValue(s)) : Promise.reject([]);
    }).catch(function(C) {
      var y = C.filter(function(E) {
        return E && E.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(s),
        errorFields: y,
        outOfDate: r.lastValidatePromise !== f
      });
    });
    g.catch(function(C) {
      return C;
    });
    var p = s.filter(function(C) {
      return d.has(C.join(c));
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
  }), this.forceRootUpdate = t;
});
function Rv(e) {
  var t = x.useRef(), r = x.useState({}), n = pe(r, 2), a = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var i = function() {
        a({});
      }, o = new hw(i);
      t.current = o.getForm();
    }
  return [t.current];
}
var Bu = /* @__PURE__ */ x.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), gw = function(t) {
  var r = t.validateMessages, n = t.onFormChange, a = t.onFormFinish, i = t.children, o = x.useContext(Bu), u = x.useRef({});
  return /* @__PURE__ */ x.createElement(Bu.Provider, {
    value: ee(ee({}, o), {}, {
      validateMessages: ee(ee({}, o.validateMessages), r),
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
        l && (u.current = ee(ee({}, u.current), {}, W({}, l, c))), o.registerForm(l, c);
      },
      unregisterForm: function(l) {
        var c = ee({}, u.current);
        delete c[l], u.current = c, o.unregisterForm(l);
      }
    })
  }, i);
}, pw = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"], mw = function(t, r) {
  var n = t.name, a = t.initialValues, i = t.fields, o = t.form, u = t.preserve, s = t.children, l = t.component, c = l === void 0 ? "form" : l, d = t.validateMessages, v = t.validateTrigger, b = v === void 0 ? "onChange" : v, m = t.onValuesChange, f = t.onFieldsChange, g = t.onFinish, p = t.onFinishFailed, C = er(t, pw), y = x.useContext(Bu), E = Rv(o), F = pe(E, 1), B = F[0], w = B.getInternalHooks(Yr), $ = w.useSubscribe, P = w.setInitialValues, T = w.setCallbacks, _ = w.setValidateMessages, j = w.setPreserve, N = w.destroyForm;
  x.useImperativeHandle(r, function() {
    return B;
  }), x.useEffect(function() {
    return y.registerForm(n, B), function() {
      y.unregisterForm(n);
    };
  }, [y, B, n]), _(ee(ee({}, y.validateMessages), d)), T({
    onValuesChange: m,
    onFieldsChange: function(J) {
      if (y.triggerFormChange(n, J), f) {
        for (var te = arguments.length, S = new Array(te > 1 ? te - 1 : 0), V = 1; V < te; V++)
          S[V - 1] = arguments[V];
        f.apply(void 0, [J].concat(S));
      }
    },
    onFinish: function(J) {
      y.triggerFormFinish(n, J), g && g(J);
    },
    onFinishFailed: p
  }), j(u);
  var I = x.useRef(null);
  P(a, !I.current), I.current || (I.current = !0), x.useEffect(
    function() {
      return N;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var R, M = typeof s == "function";
  if (M) {
    var O = B.getFieldsValue(!0);
    R = s(O, B);
  } else
    R = s;
  $(!M);
  var k = x.useRef();
  x.useEffect(function() {
    sw(k.current || [], i || []) || B.setFields(i || []), k.current = i;
  }, [i, B]);
  var H = x.useMemo(function() {
    return ee(ee({}, B), {}, {
      validateTrigger: b
    });
  }, [B, b]), U = /* @__PURE__ */ x.createElement(Ci.Provider, {
    value: null
  }, /* @__PURE__ */ x.createElement(kn.Provider, {
    value: H
  }, R));
  return c === !1 ? U : /* @__PURE__ */ x.createElement(c, mr({}, C, {
    onSubmit: function(J) {
      J.preventDefault(), J.stopPropagation(), B.submit();
    },
    onReset: function(J) {
      var te;
      J.preventDefault(), B.resetFields(), (te = C.onReset) === null || te === void 0 || te.call(C, J);
    }
  }), U);
};
function Nc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var bw = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = Ie(t);
  Ge(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Cw() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = t[1], i = a === void 0 ? {} : a, o = A1(i) ? {
    form: i
  } : i, u = o.form, s = Wt(), l = pe(s, 2), c = l[0], d = l[1], v = hr(function() {
    return Nc(c);
  }, [c]), b = Ie(v);
  b.current = v;
  var m = st(kn), f = u || m, g = f && f._init;
  process.env.NODE_ENV !== "production" && Ge(t.length === 2 ? u ? g : !0 : g, "useWatch requires a form instance since it can not auto detect from context.");
  var p = Je(n), C = Ie(p);
  return C.current = p, bw(p), at(
    function() {
      if (g) {
        var y = f.getFieldsValue, E = f.getInternalHooks, F = E(Yr), B = F.registerWatch, w = function(_, j) {
          var N = o.preserve ? j : _;
          return typeof n == "function" ? n(N) : Qt(N, C.current);
        }, $ = B(function(T, _) {
          var j = w(T, _), N = Nc(j);
          b.current !== N && (b.current = N, d(j));
        }), P = w(y(), y(!0));
        return c !== P && d(P), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [g]
  ), c;
}
var yw = /* @__PURE__ */ x.forwardRef(mw), wa = yw;
wa.FormProvider = gw;
wa.Field = Pv;
wa.List = fw;
wa.useForm = Rv;
wa.useWatch = Cw;
const $v = /* @__PURE__ */ x.createContext({});
process.env.NODE_ENV !== "production" && ($v.displayName = "FormItemInputContext");
var Dw = ["prefixCls", "className", "style", "checked", "disabled", "defaultChecked", "type", "title", "onChange"], Ew = /* @__PURE__ */ cn(function(e, t) {
  var r, n = e.prefixCls, a = n === void 0 ? "rc-checkbox" : n, i = e.className, o = e.style, u = e.checked, s = e.disabled, l = e.defaultChecked, c = l === void 0 ? !1 : l, d = e.type, v = d === void 0 ? "checkbox" : d, b = e.title, m = e.onChange, f = er(e, Dw), g = Ie(null), p = iD(c, {
    value: u
  }), C = pe(p, 2), y = C[0], E = C[1];
  Gv(t, function() {
    return {
      focus: function() {
        var $;
        ($ = g.current) === null || $ === void 0 || $.focus();
      },
      blur: function() {
        var $;
        ($ = g.current) === null || $ === void 0 || $.blur();
      },
      input: g.current
    };
  });
  var F = Le(a, i, (r = {}, W(r, "".concat(a, "-checked"), y), W(r, "".concat(a, "-disabled"), s), r)), B = function($) {
    s || ("checked" in e || E($.target.checked), m == null || m({
      target: ee(ee({}, e), {}, {
        type: v,
        checked: $.target.checked
      }),
      stopPropagation: function() {
        $.stopPropagation();
      },
      preventDefault: function() {
        $.preventDefault();
      },
      nativeEvent: $.nativeEvent
    }));
  };
  return /* @__PURE__ */ x.createElement("span", {
    className: F,
    title: b,
    style: o
  }, /* @__PURE__ */ x.createElement("input", mr({}, f, {
    className: "".concat(a, "-input"),
    ref: g,
    onChange: B,
    disabled: s,
    checked: !!y,
    type: v
  })), /* @__PURE__ */ x.createElement("span", {
    className: "".concat(a, "-inner")
  }));
});
const ww = (e) => {
  const {
    checkboxCls: t
  } = e, r = `${t}-wrapper`;
  return [
    // ===================== Basic =====================
    {
      // Group
      [`${t}-group`]: Object.assign(Object.assign({}, vo(e)), {
        display: "inline-flex",
        flexWrap: "wrap",
        columnGap: e.marginXS,
        // Group > Grid
        [`> ${e.antCls}-row`]: {
          flex: 1
        }
      }),
      // Wrapper
      [r]: Object.assign(Object.assign({}, vo(e)), {
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
      [t]: Object.assign(Object.assign({}, vo(e)), {
        position: "relative",
        whiteSpace: "nowrap",
        lineHeight: 1,
        cursor: "pointer",
        borderRadius: e.borderRadiusSM,
        // To make alignment right when `controlHeight` is changed
        // Ref: https://github.com/ant-design/ant-design/issues/41564
        alignSelf: "center",
        // Wrapper > Checkbox > input
        [`${t}-input`]: {
          position: "absolute",
          // Since baseline align will get additional space offset,
          // we need to move input to top to make it align with text.
          // Ref: https://github.com/ant-design/ant-design/issues/38926#issuecomment-1486137799
          inset: 0,
          zIndex: 1,
          cursor: "pointer",
          opacity: 0,
          margin: 0,
          [`&:focus-visible + ${t}-inner`]: Object.assign({}, Vd(e))
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          boxSizing: "border-box",
          display: "block",
          width: e.checkboxSize,
          height: e.checkboxSize,
          direction: "ltr",
          backgroundColor: e.colorBgContainer,
          border: `${tr(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadiusSM,
          borderCollapse: "separate",
          transition: `all ${e.motionDurationSlow}`,
          "&:after": {
            boxSizing: "border-box",
            position: "absolute",
            top: "50%",
            insetInlineStart: "25%",
            display: "table",
            width: e.calc(e.checkboxSize).div(14).mul(5).equal(),
            height: e.calc(e.checkboxSize).div(14).mul(8).equal(),
            border: `${tr(e.lineWidthBold)} solid ${e.colorWhite}`,
            borderTop: 0,
            borderInlineStart: 0,
            transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
            opacity: 0,
            content: '""',
            transition: `all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`
          }
        },
        // Wrapper > Checkbox + Text
        "& + span": {
          paddingInlineStart: e.paddingXS,
          paddingInlineEnd: e.paddingXS
        }
      })
    },
    // ===================== Hover =====================
    {
      // Wrapper & Wrapper > Checkbox
      [`
        ${r}:not(${r}-disabled),
        ${t}:not(${t}-disabled)
      `]: {
        [`&:hover ${t}-inner`]: {
          borderColor: e.colorPrimary
        }
      },
      [`${r}:not(${r}-disabled)`]: {
        [`&:hover ${t}-checked:not(${t}-disabled) ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: "transparent"
        },
        [`&:hover ${t}-checked:not(${t}-disabled):after`]: {
          borderColor: e.colorPrimaryHover
        }
      }
    },
    // ==================== Checked ====================
    {
      // Wrapper > Checkbox
      [`${t}-checked`]: {
        [`${t}-inner`]: {
          backgroundColor: e.colorPrimary,
          borderColor: e.colorPrimary,
          "&:after": {
            opacity: 1,
            transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
            transition: `all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`
          }
        }
      },
      [`
        ${r}-checked:not(${r}-disabled),
        ${t}-checked:not(${t}-disabled)
      `]: {
        [`&:hover ${t}-inner`]: {
          backgroundColor: e.colorPrimaryHover,
          borderColor: "transparent"
        }
      }
    },
    // ================= Indeterminate =================
    {
      [t]: {
        "&-indeterminate": {
          // Wrapper > Checkbox > inner
          [`${t}-inner`]: {
            backgroundColor: e.colorBgContainer,
            borderColor: e.colorBorder,
            "&:after": {
              top: "50%",
              insetInlineStart: "50%",
              width: e.calc(e.fontSizeLG).div(2).equal(),
              height: e.calc(e.fontSizeLG).div(2).equal(),
              backgroundColor: e.colorPrimary,
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
      [`${t}-disabled`]: {
        // Wrapper > Checkbox > input
        [`&, ${t}-input`]: {
          cursor: "not-allowed",
          // Disabled for native input to enable Tooltip event handler
          // ref: https://github.com/ant-design/ant-design/issues/39822#issuecomment-1365075901
          pointerEvents: "none"
        },
        // Wrapper > Checkbox > inner
        [`${t}-inner`]: {
          background: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          "&:after": {
            borderColor: e.colorTextDisabled
          }
        },
        "&:after": {
          display: "none"
        },
        "& + span": {
          color: e.colorTextDisabled
        },
        [`&${t}-indeterminate ${t}-inner::after`]: {
          background: e.colorTextDisabled
        }
      }
    }
  ];
};
function Fw(e, t) {
  const r = Lr(t, {
    checkboxCls: `.${e}`,
    checkboxSize: t.controlInteractiveSize
  });
  return [ww(r)];
}
const jv = is("Checkbox", (e, t) => {
  let {
    prefixCls: r
  } = t;
  return [Fw(r, e)];
}), Bw = /* @__PURE__ */ re.createContext(null), Nv = Bw;
var Aw = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Sw = (e, t) => {
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
  } = e, b = Aw(e, ["prefixCls", "className", "rootClassName", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave", "skipGroup", "disabled"]), {
    getPrefixCls: m,
    direction: f,
    checkbox: g
  } = x.useContext(Nt), p = x.useContext(Nv), {
    isFormItemInput: C
  } = x.useContext($v), y = x.useContext(rs), E = (r = (p == null ? void 0 : p.disabled) || v) !== null && r !== void 0 ? r : y, F = x.useRef(b.value);
  if (process.env.NODE_ENV !== "production") {
    const R = Vn("Checkbox");
    process.env.NODE_ENV !== "production" && R("checked" in b || !!p || !("value" in b), "usage", "`value` is not a valid prop, do you mean `checked`?");
  }
  x.useEffect(() => {
    p == null || p.registerValue(b.value);
  }, []), x.useEffect(() => {
    if (!d)
      return b.value !== F.current && (p == null || p.cancelValue(F.current), p == null || p.registerValue(b.value), F.current = b.value), () => p == null ? void 0 : p.cancelValue(b.value);
  }, [b.value]);
  const B = m("checkbox", n), w = dv(B), [$, P, T] = jv(B, w), _ = Object.assign({}, b);
  p && !d && (_.onChange = function() {
    b.onChange && b.onChange.apply(b, arguments), p.toggleOption && p.toggleOption({
      label: o,
      value: b.value
    });
  }, _.name = p.name, _.checked = p.value.includes(b.value));
  const j = Le(`${B}-wrapper`, {
    [`${B}-rtl`]: f === "rtl",
    [`${B}-wrapper-checked`]: _.checked,
    [`${B}-wrapper-disabled`]: E,
    [`${B}-wrapper-in-form-item`]: C
  }, g == null ? void 0 : g.className, a, i, T, w, P), N = Le({
    [`${B}-indeterminate`]: u
  }, ls, P), I = u ? "mixed" : void 0;
  return $(/* @__PURE__ */ x.createElement(gv, {
    component: "Checkbox",
    disabled: E
  }, /* @__PURE__ */ x.createElement("label", {
    className: j,
    style: Object.assign(Object.assign({}, g == null ? void 0 : g.style), s),
    onMouseEnter: l,
    onMouseLeave: c
  }, /* @__PURE__ */ x.createElement(Ew, Object.assign({
    "aria-checked": I
  }, _, {
    prefixCls: B,
    className: N,
    disabled: E,
    ref: t
  })), o !== void 0 && /* @__PURE__ */ x.createElement("span", null, o))));
}, Mv = /* @__PURE__ */ x.forwardRef(Sw);
process.env.NODE_ENV !== "production" && (Mv.displayName = "Checkbox");
const Iv = Mv;
var Ow = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const xw = /* @__PURE__ */ x.forwardRef((e, t) => {
  const {
    defaultValue: r,
    children: n,
    options: a = [],
    prefixCls: i,
    className: o,
    rootClassName: u,
    style: s,
    onChange: l
  } = e, c = Ow(e, ["defaultValue", "children", "options", "prefixCls", "className", "rootClassName", "style", "onChange"]), {
    getPrefixCls: d,
    direction: v
  } = x.useContext(Nt), [b, m] = x.useState(c.value || r || []), [f, g] = x.useState([]);
  x.useEffect(() => {
    "value" in c && m(c.value || []);
  }, [c.value]);
  const p = x.useMemo(() => a.map((R) => typeof R == "string" || typeof R == "number" ? {
    label: R,
    value: R
  } : R), [a]), C = (R) => {
    g((M) => M.filter((O) => O !== R));
  }, y = (R) => {
    g((M) => [].concat(ge(M), [R]));
  }, E = (R) => {
    const M = b.indexOf(R.value), O = ge(b);
    M === -1 ? O.push(R.value) : O.splice(M, 1), "value" in c || m(O), l == null || l(O.filter((k) => f.includes(k)).sort((k, H) => {
      const U = p.findIndex((J) => J.value === k), K = p.findIndex((J) => J.value === H);
      return U - K;
    }));
  }, F = d("checkbox", i), B = `${F}-group`, w = dv(F), [$, P, T] = jv(F, w), _ = Hf(c, ["value", "disabled"]), j = a.length ? p.map((R) => /* @__PURE__ */ x.createElement(Iv, {
    prefixCls: F,
    key: R.value.toString(),
    disabled: "disabled" in R ? R.disabled : c.disabled,
    value: R.value,
    checked: b.includes(R.value),
    onChange: R.onChange,
    className: `${B}-item`,
    style: R.style,
    title: R.title,
    id: R.id,
    required: R.required
  }, R.label)) : n, N = {
    toggleOption: E,
    value: b,
    disabled: c.disabled,
    name: c.name,
    // https://github.com/ant-design/ant-design/issues/16376
    registerValue: y,
    cancelValue: C
  }, I = Le(B, {
    [`${B}-rtl`]: v === "rtl"
  }, o, u, T, w, P);
  return $(/* @__PURE__ */ x.createElement("div", Object.assign({
    className: I,
    style: s
  }, _, {
    ref: t
  }), /* @__PURE__ */ x.createElement(Nv.Provider, {
    value: N
  }, j)));
}), Pw = xw, Li = Iv;
Li.Group = Pw;
Li.__ANT_CHECKBOX = !0;
process.env.NODE_ENV !== "production" && (Li.displayName = "Checkbox");
const Tw = Li;
function Mc(e) {
  return ["small", "middle", "large"].includes(e);
}
function Ic(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const kv = /* @__PURE__ */ re.createContext({
  latestIndex: 0
}), Rw = kv.Provider, $w = (e) => {
  let {
    className: t,
    index: r,
    children: n,
    split: a,
    style: i
  } = e;
  const {
    latestIndex: o
  } = x.useContext(kv);
  return n == null ? null : /* @__PURE__ */ x.createElement(x.Fragment, null, /* @__PURE__ */ x.createElement("div", {
    className: t,
    style: i
  }, n), r < o && a && /* @__PURE__ */ x.createElement("span", {
    className: `${t}-split`
  }, a));
}, jw = $w;
var Nw = function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
};
const Lv = /* @__PURE__ */ x.forwardRef((e, t) => {
  var r, n;
  const {
    getPrefixCls: a,
    space: i,
    direction: o
  } = x.useContext(Nt), {
    size: u = (i == null ? void 0 : i.size) || "small",
    align: s,
    className: l,
    rootClassName: c,
    children: d,
    direction: v = "horizontal",
    prefixCls: b,
    split: m,
    style: f,
    wrap: g = !1,
    classNames: p,
    styles: C
  } = e, y = Nw(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [E, F] = Array.isArray(u) ? u : [u, u], B = Mc(F), w = Mc(E), $ = Ic(F), P = Ic(E), T = da(d, {
    keepEmpty: !0
  }), _ = s === void 0 && v === "horizontal" ? "center" : s, j = a("space", b), [N, I, R] = mv(j), M = Le(j, i == null ? void 0 : i.className, I, `${j}-${v}`, {
    [`${j}-rtl`]: o === "rtl",
    [`${j}-align-${_}`]: _,
    [`${j}-gap-row-${F}`]: B,
    [`${j}-gap-col-${E}`]: w
  }, l, c, R), O = Le(`${j}-item`, (r = p == null ? void 0 : p.item) !== null && r !== void 0 ? r : (n = i == null ? void 0 : i.classNames) === null || n === void 0 ? void 0 : n.item);
  let k = 0;
  const H = T.map((J, te) => {
    var S, V;
    J != null && (k = te);
    const z = J && J.key || `${O}-${te}`;
    return /* @__PURE__ */ x.createElement(jw, {
      className: O,
      key: z,
      index: te,
      split: m,
      style: (S = C == null ? void 0 : C.item) !== null && S !== void 0 ? S : (V = i == null ? void 0 : i.styles) === null || V === void 0 ? void 0 : V.item
    }, J);
  }), U = x.useMemo(() => ({
    latestIndex: k
  }), [k]);
  if (T.length === 0)
    return null;
  const K = {};
  return g && (K.flexWrap = "wrap"), !w && P && (K.columnGap = E), !B && $ && (K.rowGap = F), N(/* @__PURE__ */ x.createElement("div", Object.assign({
    ref: t,
    className: M,
    style: Object.assign(Object.assign(Object.assign({}, K), i == null ? void 0 : i.style), f)
  }, y), /* @__PURE__ */ x.createElement(Rw, {
    value: U
  }, H)));
});
process.env.NODE_ENV !== "production" && (Lv.displayName = "Space");
const _v = Lv;
_v.Compact = qE;
const Mw = _v, Iw = (e) => {
  const t = e != null && e.algorithm ? ha(e.algorithm) : ha(ya), r = Object.assign(Object.assign({}, In), e == null ? void 0 : e.token);
  return od(r, {
    override: e == null ? void 0 : e.token
  }, t, ns);
}, kw = Iw;
function Lw(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e, n = r - 2;
  return {
    sizeXXL: t * (n + 10),
    sizeXL: t * (n + 6),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 2),
    sizeMS: t * (n + 1),
    size: t * n,
    sizeSM: t * n,
    sizeXS: t * (n - 1),
    sizeXXS: t * (n - 1)
  };
}
const _w = (e, t) => {
  const r = t ?? ya(e), n = r.fontSizeSM, a = r.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), Lw(t ?? e)), jd(n)), {
    // controlHeight
    controlHeight: a
  }), Rd(Object.assign(Object.assign({}, r), {
    controlHeight: a
  })));
}, Vw = _w, cr = (e, t) => new vt(e).setAlpha(t).toRgbString(), yn = (e, t) => new vt(e).lighten(t).toHexString(), zw = (e) => {
  const t = br(e, {
    theme: "dark"
  });
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[6],
    6: t[5],
    7: t[4],
    8: t[6],
    9: t[5],
    10: t[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
}, Ww = (e, t) => {
  const r = e || "#000", n = t || "#fff";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: cr(n, 0.85),
    colorTextSecondary: cr(n, 0.65),
    colorTextTertiary: cr(n, 0.45),
    colorTextQuaternary: cr(n, 0.25),
    colorFill: cr(n, 0.18),
    colorFillSecondary: cr(n, 0.12),
    colorFillTertiary: cr(n, 0.08),
    colorFillQuaternary: cr(n, 0.04),
    colorBgElevated: yn(r, 12),
    colorBgContainer: yn(r, 8),
    colorBgLayout: yn(r, 0),
    colorBgSpotlight: yn(r, 26),
    colorBgBlur: cr(n, 0.04),
    colorBorder: yn(r, 26),
    colorBorderSecondary: yn(r, 19)
  };
}, Hw = (e, t) => {
  const r = Object.keys(ts).map((a) => {
    const i = br(e[a], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce((o, u, s) => (o[`${a}-${s + 1}`] = i[s], o[`${a}${s + 1}`] = i[s], o), {});
  }).reduce((a, i) => (a = Object.assign(Object.assign({}, a), i), a), {}), n = t ?? ya(e);
  return Object.assign(Object.assign(Object.assign({}, n), r), $d(e, {
    generateColorPalettes: zw,
    generateNeutralColorPalettes: Ww
  }));
}, qw = Hw;
function Uw() {
  const [e, t, r] = Cr();
  return {
    theme: e,
    token: t,
    hashId: r
  };
}
const Gw = {
  /** @private Test Usage. Do not use in production. */
  defaultConfig: pi,
  /** Default seedToken */
  defaultSeed: pi.token,
  useToken: Uw,
  defaultAlgorithm: ya,
  darkAlgorithm: qw,
  compactAlgorithm: Vw,
  getDesignToken: kw
}, Kw = (e) => {
  const { attributes: t, children: r, element: n } = e, { disabled: a, checked: i } = n, o = Ht(), u = Rf(), s = u || a;
  return /* @__PURE__ */ Me.jsxs("div", { className: "wu_check_list", ...t, children: [
    /* @__PURE__ */ Me.jsx("span", { contentEditable: !1, className: "wu_check_list_box", children: /* @__PURE__ */ Me.jsx(
      Tw,
      {
        disabled: s,
        checked: i,
        onChange: (l) => {
          const c = q.findPath(o, n), d = {
            checked: l.target.checked
          };
          G.setNodes(o, d, { at: c });
        }
      }
    ) }),
    /* @__PURE__ */ Me.jsx(
      "span",
      {
        className: Le("wu_check_list_label", {
          wu_check_list_checked: i
        }),
        suppressContentEditableWarning: !0,
        contentEditable: !u,
        children: r
      }
    )
  ] });
}, Xw = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ Me.jsx("span", { ...t, children: r });
}, Yw = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ Me.jsx("p", { ...t, children: r });
}, Jw = (e) => {
  const { attributes: t, children: r } = e;
  return /* @__PURE__ */ Me.jsx("pre", { ...t, children: /* @__PURE__ */ Me.jsx("code", { children: r }) });
}, Zw = (e) => {
  const { attributes: t, leaf: r, children: n } = e, a = Le({
    "wu-font-bold": r.bold,
    "bg-red": !0
  });
  return /* @__PURE__ */ Me.jsx("span", { className: a, ...t, children: n });
}, Qw = () => {
  const e = $e((n) => {
    const { children: a, ...i } = n, o = n.element.type;
    return tn(o).with(ut.Bold, () => /* @__PURE__ */ Me.jsx(Jw, { ...i, children: a })).with(ut.Code, () => /* @__PURE__ */ Me.jsx(Xw, { ...i, children: a })).with(ut.CheckList, () => /* @__PURE__ */ Me.jsx(Kw, { ...i, children: a })).otherwise(() => /* @__PURE__ */ Me.jsx(Yw, { ...i, children: a }));
  }, []), t = $e((n) => {
    const { children: a, ...i } = n;
    return /* @__PURE__ */ Me.jsx(Zw, { ...i, children: a });
  }, []), r = $e((n) => {
    const { children: a, attributes: i } = n;
    return /* @__PURE__ */ Me.jsx("span", { ...i, style: { fontStyle: "italic", color: "gray", position: "absolute" }, children: a });
  }, []);
  return { renderElement: e, renderLeaf: t, renderPlaceholder: r };
}, eF = (e) => [(r) => {
  const n = r.ctrlKey || r.metaKey;
  tn(n).with(!0, () => {
    tn(r).with({ shiftKey: !0 }, (a) => {
      tn(a).with({ key: "7" }, () => {
        console.info("切换CheckList"), r.preventDefault(), Mr.toggleCheckListNode(e);
      });
    }).with({ key: "b" }, () => {
      console.log(r), console.info("切换加粗"), r.preventDefault(), Mr.toggleBoldMark(e);
    });
  });
}], { darkAlgorithm: tF, compactAlgorithm: kc } = Gw, rF = (e) => {
  const { theme: t, children: r } = e;
  return /* @__PURE__ */ Me.jsx(hC, { hashPriority: "high", children: /* @__PURE__ */ Me.jsx(
    tE,
    {
      theme: {
        algorithm: t === "dark" ? [tF, kc] : [kc]
      },
      children: r
    }
  ) });
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nF = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Vv = (...e) => e.filter((t, r, n) => !!t && n.indexOf(t) === r).join(" ");
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var aF = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const iF = cn(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: n,
    className: a = "",
    children: i,
    iconNode: o,
    ...u
  }, s) => Eo(
    "svg",
    {
      ref: s,
      ...aF,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: n ? Number(r) * 24 / Number(t) : r,
      className: Vv("lucide", a),
      ...u
    },
    [
      ...o.map(([l, c]) => Eo(l, c)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zv = (e, t) => {
  const r = cn(
    ({ className: n, ...a }, i) => Eo(iF, {
      ref: i,
      iconNode: t,
      className: Vv(`lucide-${nF(e)}`, n),
      ...a
    })
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const oF = zv("Bold", [
  [
    "path",
    { d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8", key: "mg9rjx" }
  ]
]);
/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uF = zv("ListTodo", [
  ["rect", { x: "3", y: "5", width: "6", height: "6", rx: "1", key: "1defrl" }],
  ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
  ["path", { d: "M13 6h8", key: "15sg57" }],
  ["path", { d: "M13 12h8", key: "h98zly" }],
  ["path", { d: "M13 18h8", key: "oe0vm4" }]
]), sF = () => {
  const e = Mf((n) => Mr.isCheckListNode(n)), t = Ht(), r = hr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Me.jsx(
    Bv,
    {
      type: r,
      className: Le("wu_toolbar_icon_btn"),
      onClick: () => {
        Mr.toggleCheckListNode(t), q.focus(t);
      },
      icon: /* @__PURE__ */ Me.jsx(uF, { className: Le("wu_toolbar_icon_btn_icon") })
    }
  );
}, lF = () => {
  const e = Mf((n) => Mr.isBoldMarkActive(n)), t = Ht(), r = hr(() => e ? "primary" : "text", [e]);
  return /* @__PURE__ */ Me.jsx(
    Bv,
    {
      type: r,
      onClick: () => {
        Mr.toggleBoldMark(t), q.focus(t);
      },
      className: Le("wu_toolbar_icon_btn"),
      icon: /* @__PURE__ */ Me.jsx(oF, { className: Le("wu_toolbar_icon_btn_icon") })
    }
  );
}, cF = () => /* @__PURE__ */ Me.jsxs(Mw, { className: Le("wu_toolbar"), children: [
  /* @__PURE__ */ Me.jsx(sF, {}),
  /* @__PURE__ */ Me.jsx(lF, {})
] }), vF = (e) => {
  const { theme: t, placeholder: r, initialValue: n = ko() } = e, [a, { showPlaceholder: i, handlePlaceholder: o }] = Ub(), { renderElement: u, renderLeaf: s, renderPlaceholder: l } = Qw(), [c] = eF(a);
  return /* @__PURE__ */ Me.jsx(rF, { theme: t, children: /* @__PURE__ */ Me.jsxs(
    jb,
    {
      editor: a,
      onValueChange: (d) => {
        console.log("val", d), o(d);
      },
      initialValue: n,
      children: [
        /* @__PURE__ */ Me.jsx(cF, {}),
        /* @__PURE__ */ Me.jsx(
          Fb,
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
      ]
    }
  ) });
};
export {
  vF as WuEditor
};
